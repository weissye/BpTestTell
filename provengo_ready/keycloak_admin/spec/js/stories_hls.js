// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:Realm:read_only
bthread("crud:Realm:read_only", function () {
  let realm = 200;
  verifyRealmExists(realm);
});

// Story: crud:AdminEvent:read_only
bthread("crud:AdminEvent:read_only", function () {
  let authClient = "authClient_210";
  let authIpAddress = "authIpAddress_210";
  let authRealm = "authRealm_210";
  let authUser = "authUser_210";
  let dateFrom = "dateFrom_210";
  let dateTo = "dateTo_210";
  let first = "first_210";
  let max = "max_210";
  let operationTypes = "operationTypes_210";
  let realm = 210;
  let resourcePath = "resourcePath_210";
  let resourceTypes = "resourceTypes_210";
  verifyAdminEventExists(authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, realm, resourcePath, resourceTypes);
});

// Story: crud:ClientPolicies:read_only
bthread("crud:ClientPolicies:read_only", function () {
  let realm = 230;
  verifyClientPoliciesExists(realm);
});

// Story: crud:ClientProfiles:read_only
bthread("crud:ClientProfiles:read_only", function () {
  let include-global-profiles = "include-global-profiles_240";
  let realm = 240;
  verifyClientProfilesExists(include-global-profiles, realm);
});

// Story: crud:ClientSessionStats:read_only
bthread("crud:ClientSessionStats:read_only", function () {
  let realm = 250;
  verifyClientSessionStatsExists(realm);
});

// Story: crud:CredentialRegistrators:read_only
bthread("crud:CredentialRegistrators:read_only", function () {
  let realm = 260;
  verifyCredentialRegistratorsExists(realm);
});

// Story: crud:DefaultGroup:read_only
bthread("crud:DefaultGroup:read_only", function () {
  let groupId;
  let realm = 280;
  verifyDefaultGroupExists(groupId, realm);
});

// Story: crud:DefaultOptionalClientScope:read_only
bthread("crud:DefaultOptionalClientScope:read_only", function () {
  let clientScopeId;
  let realm = 290;
  verifyDefaultOptionalClientScopeExists(clientScopeId, realm);
});

// Story: crud:Event:read_only
bthread("crud:Event:read_only", function () {
  let client = "client_300";
  let dateFrom = "dateFrom_300";
  let dateTo = "dateTo_300";
  let first = "first_300";
  let ipAddress = "ipAddress_300";
  let max = "max_300";
  let realm = 300;
  let type = "type_300";
  let user = "user_300";
  verifyEventExists(client, dateFrom, dateTo, first, ipAddress, max, realm, type, user);
});

// Story: crud:EventsConfig:read_only
bthread("crud:EventsConfig:read_only", function () {
  let realm = 310;
  verifyEventsConfigExists(realm);
});

// Story: crud:GroupByPath:read_only
bthread("crud:GroupByPath:read_only", function () {
  let path = "path_320";
  let realm = 320;
  verifyGroupByPathExists(path, realm);
});

// Story: crud:UsersManagementPermissions:read_only
bthread("crud:UsersManagementPermissions:read_only", function () {
  let realm = 350;
  verifyUsersManagementPermissionsExists(realm);
});

// Story: crud:AuthenticationConfig:nondet:1:1
bthread("crud:AuthenticationConfig:nondet:1:1", function () {
  let alias = "alias_360";
  let config = {};
  let id = 360;
  let realm = 360;
  postAuthenticationConfig(alias, config, id, realm);
  waitForAuthenticationConfigAdded(alias, config, id, realm);
  tryToAddExistingAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
  putAuthenticationConfig(alias, config, id, realm);
  deleteConfig(alias, config, id, realm);
  tryToDeleteANonExistingAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigDoesNotExist(alias, config, id, realm);
});

// Story: crud:AuthenticationConfig:nondet:1:2
bthread("crud:AuthenticationConfig:nondet:1:2", function () {
  let alias = "alias_361";
  let config = {};
  let id = 361;
  let realm = 361;
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
  let alias = "alias_366";
  let config = {};
  let id = 366;
  let realm = 366;
  postAuthenticationConfig(alias, config, id, realm);
  // waitForAuthenticationConfigAdded(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
  tryToAddExistingAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
});

// Story: crud:Execution:nondet:1:1
bthread("crud:Execution:nondet:1:1", function () {
  let authenticator = "authenticator_370";
  let authenticatorConfig = "authenticatorConfig_370";
  let authenticatorFlow = "authenticatorFlow_370";
  let autheticatorFlow = "autheticatorFlow_370";
  let executionId = 370;
  let flowId = 370;
  let id = 370;
  let parentFlow = "parentFlow_370";
  let priority = 370;
  let realm = 370;
  let requirement = "requirement_370";
  postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  waitForExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToAddExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  deleteExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToDeleteANonExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionDoesNotExist(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
});

// Story: crud:Execution:nondet:1:2
bthread("crud:Execution:nondet:1:2", function () {
  let authenticator = "authenticator_371";
  let authenticatorConfig = "authenticatorConfig_371";
  let authenticatorFlow = "authenticatorFlow_371";
  let autheticatorFlow = "autheticatorFlow_371";
  let executionId = 371;
  let flowId = 371;
  let id = 371;
  let parentFlow = "parentFlow_371";
  let priority = 371;
  let realm = 371;
  let requirement = "requirement_371";
  postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  // waitForExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToAddExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  deleteExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToDeleteANonExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionDoesNotExist(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
});

// Story: crud:Execution:nondet:negative:dup-add
bthread("crud:Execution:nondet:negative:dup-add", function () {
  let authenticator = "authenticator_376";
  let authenticatorConfig = "authenticatorConfig_376";
  let authenticatorFlow = "authenticatorFlow_376";
  let autheticatorFlow = "autheticatorFlow_376";
  let executionId = 376;
  let flowId = 376;
  let id = 376;
  let parentFlow = "parentFlow_376";
  let priority = 376;
  let realm = 376;
  let requirement = "requirement_376";
  postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  // waitForExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToAddExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
});

// Story: crud:ExecutionConfig:read_only
bthread("crud:ExecutionConfig:read_only", function () {
  let alias = "alias_380";
  let config = {};
  let executionId;
  let id = 380;
  let realm = 380;
  verifyExecutionConfigExists(alias, config, executionId, id, realm);
});

// Story: crud:AuthenticationFlow:nondet:1:1
bthread("crud:AuthenticationFlow:nondet:1:1", function () {
  let alias = "alias_390";
  let authenticationExecutions = "authenticationExecutions_390";
  let builtIn = "builtIn_390";
  let description = "description_390";
  let flowAlias = "flowAlias_390";
  let id = 390;
  let providerId = 390;
  let realm = 390;
  let topLevel = "topLevel_390";
  createAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  updateAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  deleteAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  tryToDeleteANonExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowDoesNotExist(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
});

// Story: crud:AuthenticationFlow:nondet:1:2
bthread("crud:AuthenticationFlow:nondet:1:2", function () {
  let alias = "alias_391";
  let authenticationExecutions = "authenticationExecutions_391";
  let builtIn = "builtIn_391";
  let description = "description_391";
  let flowAlias = "flowAlias_391";
  let id = 391;
  let providerId = 391;
  let realm = 391;
  let topLevel = "topLevel_391";
  createAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  // waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  updateAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  deleteAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  tryToDeleteANonExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowDoesNotExist(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
});

// Story: crud:AuthenticationFlow:nondet:negative:dup-add
bthread("crud:AuthenticationFlow:nondet:negative:dup-add", function () {
  let alias = "alias_396";
  let authenticationExecutions = "authenticationExecutions_396";
  let builtIn = "builtIn_396";
  let description = "description_396";
  let flowAlias = "flowAlias_396";
  let id = 396;
  let providerId = 396;
  let realm = 396;
  let topLevel = "topLevel_396";
  createAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  // waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
});

// Story: crud:RequiredAction:nondet:1:1
bthread("crud:RequiredAction:nondet:1:1", function () {
  let alias = "alias_410";
  let realm = 410;
  postRegisterRequiredAction(alias, realm);
  waitForRequiredActionAdded(alias, realm);
  tryToAddExistingRequiredAction(alias, realm);
  verifyRequiredActionExists(alias, realm);
  putRequiredAction(alias, realm);
  deleteRequiredAction(alias, realm);
  tryToDeleteANonExistingRequiredAction(alias, realm);
  verifyRequiredActionDoesNotExist(alias, realm);
});

// Story: crud:RequiredAction:nondet:1:2
bthread("crud:RequiredAction:nondet:1:2", function () {
  let alias = "alias_411";
  let realm = 411;
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
  let alias = "alias_416";
  let realm = 416;
  postRegisterRequiredAction(alias, realm);
  // waitForRequiredActionAdded(alias, realm);
  verifyRequiredActionExists(alias, realm);
  tryToAddExistingRequiredAction(alias, realm);
  verifyRequiredActionExists(alias, realm);
});

// Story: crud:ClientNode:nondet:1:1
bthread("crud:ClientNode:nondet:1:1", function () {
  let id = 430;
  let node = "node_430";
  let realm = 430;
  postNodes(id, node, realm);
  waitForClientNodeAdded(id, node, realm);
  tryToAddExistingClientNode(id, node, realm);
  verifyClientNodeExists(id, node, realm);
  deleteNode(id, node, realm);
  tryToDeleteANonExistingClientNode(id, node, realm);
  verifyClientNodeDoesNotExist(id, node, realm);
});

// Story: crud:ClientNode:nondet:1:2
bthread("crud:ClientNode:nondet:1:2", function () {
  let id = 431;
  let node = "node_431";
  let realm = 431;
  postNodes(id, node, realm);
  // waitForClientNodeAdded(id, node, realm);
  tryToAddExistingClientNode(id, node, realm);
  verifyClientNodeExists(id, node, realm);
  deleteNode(id, node, realm);
  tryToDeleteANonExistingClientNode(id, node, realm);
  verifyClientNodeDoesNotExist(id, node, realm);
});

// Story: crud:ClientNode:nondet:negative:dup-add
bthread("crud:ClientNode:nondet:negative:dup-add", function () {
  let id = 436;
  let node = "node_436";
  let realm = 436;
  postNodes(id, node, realm);
  // waitForClientNodeAdded(id, node, realm);
  verifyClientNodeExists(id, node, realm);
  tryToAddExistingClientNode(id, node, realm);
  verifyClientNodeExists(id, node, realm);
});

// Story: crud:ClientManagementPermissions:read_only
bthread("crud:ClientManagementPermissions:read_only", function () {
  let id = 440;
  let realm = 440;
  verifyClientManagementPermissionsExists(id, realm);
});

// Story: crud:InstallationProvider:read_only
bthread("crud:InstallationProvider:read_only", function () {
  let id = 460;
  let providerId = 460;
  let realm = 460;
  verifyInstallationProviderExists(id, providerId, realm);
});

// Story: crud:OptionalClientScopesList:read_only
bthread("crud:OptionalClientScopesList:read_only", function () {
  let id = 490;
  let realm = 490;
  verifyOptionalClientScopesListExists(id, realm);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let access = {};
  let applicationRoles = {};
  let attributes = {};
  let clientConsents = "clientConsents_500";
  let clientRoles = {};
  let clientUuid;
  let client_id;
  let createdTimestamp = 500;
  let credentials = "credentials_500";
  let disableableCredentialTypes = "disableableCredentialTypes_500";
  let email = "email_500";
  let emailVerified = "emailVerified_500";
  let enabled = "enabled_500";
  let federatedIdentities = "federatedIdentities_500";
  let federationLink = "federationLink_500";
  let firstName = "firstName_500";
  let groups = "groups_500";
  let id = 500;
  let lastName = "lastName_500";
  let notBefore = 500;
  let origin = "origin_500";
  let realm = 500;
  let realmRoles = "realmRoles_500";
  let redirect_uri = "redirect_uri_500";
  let requiredActions = "requiredActions_500";
  let self = "self_500";
  let serviceAccountClientId;
  let socialLinks = "socialLinks_500";
  let totp = "totp_500";
  let username = "username_500";
  // Dependency Barrier
  let deps = {};
  deps["clientUuid"] = matchAnyClientAdded();
  deps["client_id"] = matchAnyClientAdded();
  deps["serviceAccountClientId"] = matchAnyClientAdded();
  let pkMap = {"clientUuid": "realm", "client_id": "realm", "serviceAccountClientId": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  clientUuid = captured["clientUuid"];
  client_id = captured["client_id"];
  serviceAccountClientId = captured["serviceAccountClientId"];
  createUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  waitForUserAdded(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToAddExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  putUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  deleteUserByRealmById(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToDeleteANonExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserDoesNotExist(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let access = {};
  let applicationRoles = {};
  let attributes = {};
  let clientConsents = "clientConsents_501";
  let clientRoles = {};
  let clientUuid;
  let client_id;
  let createdTimestamp = 501;
  let credentials = "credentials_501";
  let disableableCredentialTypes = "disableableCredentialTypes_501";
  let email = "email_501";
  let emailVerified = "emailVerified_501";
  let enabled = "enabled_501";
  let federatedIdentities = "federatedIdentities_501";
  let federationLink = "federationLink_501";
  let firstName = "firstName_501";
  let groups = "groups_501";
  let id = 501;
  let lastName = "lastName_501";
  let notBefore = 501;
  let origin = "origin_501";
  let realm = 501;
  let realmRoles = "realmRoles_501";
  let redirect_uri = "redirect_uri_501";
  let requiredActions = "requiredActions_501";
  let self = "self_501";
  let serviceAccountClientId;
  let socialLinks = "socialLinks_501";
  let totp = "totp_501";
  let username = "username_501";
  // Dependency Barrier
  let deps = {};
  deps["clientUuid"] = matchAnyClientAdded();
  deps["client_id"] = matchAnyClientAdded();
  deps["serviceAccountClientId"] = matchAnyClientAdded();
  let pkMap = {"clientUuid": "realm", "client_id": "realm", "serviceAccountClientId": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  clientUuid = captured["clientUuid"];
  client_id = captured["client_id"];
  serviceAccountClientId = captured["serviceAccountClientId"];
  createUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  // waitForUserAdded(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToAddExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  putUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  deleteUserByRealmById(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToDeleteANonExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserDoesNotExist(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let access = {};
  let applicationRoles = {};
  let attributes = {};
  let clientConsents = "clientConsents_506";
  let clientRoles = {};
  let clientUuid;
  let client_id;
  let createdTimestamp = 506;
  let credentials = "credentials_506";
  let disableableCredentialTypes = "disableableCredentialTypes_506";
  let email = "email_506";
  let emailVerified = "emailVerified_506";
  let enabled = "enabled_506";
  let federatedIdentities = "federatedIdentities_506";
  let federationLink = "federationLink_506";
  let firstName = "firstName_506";
  let groups = "groups_506";
  let id = 506;
  let lastName = "lastName_506";
  let notBefore = 506;
  let origin = "origin_506";
  let realm = 506;
  let realmRoles = "realmRoles_506";
  let redirect_uri = "redirect_uri_506";
  let requiredActions = "requiredActions_506";
  let self = "self_506";
  let serviceAccountClientId;
  let socialLinks = "socialLinks_506";
  let totp = "totp_506";
  let username = "username_506";
  // Dependency Barrier
  let deps = {};
  deps["clientUuid"] = matchAnyClientAdded();
  deps["client_id"] = matchAnyClientAdded();
  deps["serviceAccountClientId"] = matchAnyClientAdded();
  let pkMap = {"clientUuid": "realm", "client_id": "realm", "serviceAccountClientId": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  clientUuid = captured["clientUuid"];
  client_id = captured["client_id"];
  serviceAccountClientId = captured["serviceAccountClientId"];
  createUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  // waitForUserAdded(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToAddExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
});

// Story: crud:UserConsent:read_only
bthread("crud:UserConsent:read_only", function () {
  let client = "client_510";
  let id = 510;
  let realm = 510;
  verifyUserConsentExists(client, id, realm);
});

// Story: crud:UserCredential:read_only
bthread("crud:UserCredential:read_only", function () {
  let credentialId = 520;
  let id = 520;
  let newPreviousCredentialId = 520;
  let realm = 520;
  verifyUserCredentialExists(credentialId, id, newPreviousCredentialId, realm);
});

// Story: crud:UserProfile:read_only
bthread("crud:UserProfile:read_only", function () {
  let realm = 530;
  verifyUserProfileExists(realm);
});

// Story: crud:UserStorageCredentialType:read_only
bthread("crud:UserStorageCredentialType:read_only", function () {
  let id = 540;
  let realm = 540;
  verifyUserStorageCredentialTypeExists(id, realm);
});

// Story: crud:UserFederatedIdentity:nondet:1:1
bthread("crud:UserFederatedIdentity:nondet:1:1", function () {
  let id = 570;
  let provider = "provider_570";
  let realm = 570;
  addUserFederatedIdentity(id, provider, realm);
  waitForUserFederatedIdentityAdded(id, provider, realm);
  tryToAddExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityExists(id, provider, realm);
  deleteUserFederatedIdentity(id, provider, realm);
  tryToDeleteANonExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityDoesNotExist(id, provider, realm);
});

// Story: crud:UserFederatedIdentity:nondet:1:2
bthread("crud:UserFederatedIdentity:nondet:1:2", function () {
  let id = 571;
  let provider = "provider_571";
  let realm = 571;
  addUserFederatedIdentity(id, provider, realm);
  // waitForUserFederatedIdentityAdded(id, provider, realm);
  tryToAddExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityExists(id, provider, realm);
  deleteUserFederatedIdentity(id, provider, realm);
  tryToDeleteANonExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityDoesNotExist(id, provider, realm);
});

// Story: crud:UserFederatedIdentity:nondet:negative:dup-add
bthread("crud:UserFederatedIdentity:nondet:negative:dup-add", function () {
  let id = 576;
  let provider = "provider_576";
  let realm = 576;
  addUserFederatedIdentity(id, provider, realm);
  // waitForUserFederatedIdentityAdded(id, provider, realm);
  verifyUserFederatedIdentityExists(id, provider, realm);
  tryToAddExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityExists(id, provider, realm);
});

// Story: crud:UserGroup:nondet:1:1
bthread("crud:UserGroup:nondet:1:1", function () {
  let briefRepresentation = "briefRepresentation_580";
  let first = "first_580";
  let groupId;
  let id = 580;
  let max = "max_580";
  let realm = 580;
  let search = "search_580";
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let pkMap = {"groupId": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  groupId = captured["groupId"];
  addUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  waitForUserGroupAdded(briefRepresentation, first, groupId, id, max, realm, search);
  tryToAddExistingUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  verifyUserGroupExists(briefRepresentation, first, groupId, id, max, realm, search);
  deleteUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  tryToDeleteANonExistingUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  verifyUserGroupDoesNotExist(briefRepresentation, first, groupId, id, max, realm, search);
});

// Story: crud:UserGroup:nondet:1:2
bthread("crud:UserGroup:nondet:1:2", function () {
  let briefRepresentation = "briefRepresentation_581";
  let first = "first_581";
  let groupId;
  let id = 581;
  let max = "max_581";
  let realm = 581;
  let search = "search_581";
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let pkMap = {"groupId": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  groupId = captured["groupId"];
  addUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  // waitForUserGroupAdded(briefRepresentation, first, groupId, id, max, realm, search);
  tryToAddExistingUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  verifyUserGroupExists(briefRepresentation, first, groupId, id, max, realm, search);
  deleteUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  tryToDeleteANonExistingUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  verifyUserGroupDoesNotExist(briefRepresentation, first, groupId, id, max, realm, search);
});

// Story: crud:UserGroup:nondet:negative:dup-add
bthread("crud:UserGroup:nondet:negative:dup-add", function () {
  let briefRepresentation = "briefRepresentation_586";
  let first = "first_586";
  let groupId;
  let id = 586;
  let max = "max_586";
  let realm = 586;
  let search = "search_586";
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let pkMap = {"groupId": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  groupId = captured["groupId"];
  addUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  // waitForUserGroupAdded(briefRepresentation, first, groupId, id, max, realm, search);
  verifyUserGroupExists(briefRepresentation, first, groupId, id, max, realm, search);
  tryToAddExistingUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
  verifyUserGroupExists(briefRepresentation, first, groupId, id, max, realm, search);
});

// Story: crud:ClientScopeScopeMappingClient:nondet:1:1
bthread("crud:ClientScopeScopeMappingClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_600";
  let clientRole = "clientRole_600";
  let composite = "composite_600";
  let composites = "composites_600";
  let containerId = 600;
  let description = "description_600";
  let id = 600;
  let name = "name_600";
  let realm = 600;
  let scopeParamRequired = "scopeParamRequired_600";
  postClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForClientScopeScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingClient:nondet:1:2
bthread("crud:ClientScopeScopeMappingClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_601";
  let clientRole = "clientRole_601";
  let composite = "composite_601";
  let composites = "composites_601";
  let containerId = 601;
  let description = "description_601";
  let id = 601;
  let name = "name_601";
  let realm = 601;
  let scopeParamRequired = "scopeParamRequired_601";
  postClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingClient:nondet:negative:dup-add
bthread("crud:ClientScopeScopeMappingClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_606";
  let clientRole = "clientRole_606";
  let composite = "composite_606";
  let composites = "composites_606";
  let containerId = 606;
  let description = "description_606";
  let id = 606;
  let name = "name_606";
  let realm = 606;
  let scopeParamRequired = "scopeParamRequired_606";
  postClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingClientAvailable:read_only
bthread("crud:ClientScopeScopeMappingClientAvailable:read_only", function () {
  let client = "client_610";
  let id = 610;
  let realm = 610;
  verifyClientScopeScopeMappingClientAvailableExists(client, id, realm);
});

// Story: crud:ClientScopeScopeMappingClientComposite:read_only
bthread("crud:ClientScopeScopeMappingClientComposite:read_only", function () {
  let briefRepresentation = "briefRepresentation_620";
  let client = "client_620";
  let id = 620;
  let realm = 620;
  verifyClientScopeScopeMappingClientCompositeExists(briefRepresentation, client, id, realm);
});

// Story: crud:ClientScopeScopeMappingRealm:nondet:1:1
bthread("crud:ClientScopeScopeMappingRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_630";
  let composite = "composite_630";
  let composites = "composites_630";
  let containerId = 630;
  let description = "description_630";
  let id = 630;
  let name = "name_630";
  let realm = 630;
  let scopeParamRequired = "scopeParamRequired_630";
  postClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForClientScopeScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingRealm:nondet:1:2
bthread("crud:ClientScopeScopeMappingRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_631";
  let composite = "composite_631";
  let composites = "composites_631";
  let containerId = 631;
  let description = "description_631";
  let id = 631;
  let name = "name_631";
  let realm = 631;
  let scopeParamRequired = "scopeParamRequired_631";
  postClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingRealm:nondet:negative:dup-add
bthread("crud:ClientScopeScopeMappingRealm:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_636";
  let composite = "composite_636";
  let composites = "composites_636";
  let containerId = 636;
  let description = "description_636";
  let id = 636;
  let name = "name_636";
  let realm = 636;
  let scopeParamRequired = "scopeParamRequired_636";
  postClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingRealmAvailable:read_only
bthread("crud:ClientScopeScopeMappingRealmAvailable:read_only", function () {
  let id = 640;
  let realm = 640;
  verifyClientScopeScopeMappingRealmAvailableExists(id, realm);
});

// Story: crud:ClientScopeScopeMappingRealmComposite:read_only
bthread("crud:ClientScopeScopeMappingRealmComposite:read_only", function () {
  let briefRepresentation = "briefRepresentation_650";
  let id = 650;
  let realm = 650;
  verifyClientScopeScopeMappingRealmCompositeExists(briefRepresentation, id, realm);
});

// Story: crud:ClientScopeScopeMappings:read_only
bthread("crud:ClientScopeScopeMappings:read_only", function () {
  let id = 660;
  let realm = 660;
  verifyClientScopeScopeMappingsExists(id, realm);
});

// Story: crud:ClientTemplateScopeMappingClient:nondet:1:1
bthread("crud:ClientTemplateScopeMappingClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_670";
  let clientRole = "clientRole_670";
  let composite = "composite_670";
  let composites = "composites_670";
  let containerId = 670;
  let description = "description_670";
  let id = 670;
  let name = "name_670";
  let realm = 670;
  let scopeParamRequired = "scopeParamRequired_670";
  postClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForClientTemplateScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingClient:nondet:1:2
bthread("crud:ClientTemplateScopeMappingClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_671";
  let clientRole = "clientRole_671";
  let composite = "composite_671";
  let composites = "composites_671";
  let containerId = 671;
  let description = "description_671";
  let id = 671;
  let name = "name_671";
  let realm = 671;
  let scopeParamRequired = "scopeParamRequired_671";
  postClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingClient:nondet:negative:dup-add
bthread("crud:ClientTemplateScopeMappingClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_676";
  let clientRole = "clientRole_676";
  let composite = "composite_676";
  let composites = "composites_676";
  let containerId = 676;
  let description = "description_676";
  let id = 676;
  let name = "name_676";
  let realm = 676;
  let scopeParamRequired = "scopeParamRequired_676";
  postClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingClientAvailable:read_only
bthread("crud:ClientTemplateScopeMappingClientAvailable:read_only", function () {
  let client = "client_680";
  let id = 680;
  let realm = 680;
  verifyClientTemplateScopeMappingClientAvailableExists(client, id, realm);
});

// Story: crud:ClientTemplateScopeMappings:read_only
bthread("crud:ClientTemplateScopeMappings:read_only", function () {
  let id = 690;
  let realm = 690;
  verifyClientTemplateScopeMappingsExists(id, realm);
});

// Story: crud:ClientTemplateScopeMappingRealm:nondet:1:1
bthread("crud:ClientTemplateScopeMappingRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_700";
  let composite = "composite_700";
  let composites = "composites_700";
  let containerId = 700;
  let description = "description_700";
  let id = 700;
  let name = "name_700";
  let realm = 700;
  let scopeParamRequired = "scopeParamRequired_700";
  postClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForClientTemplateScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingRealm:nondet:1:2
bthread("crud:ClientTemplateScopeMappingRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_701";
  let composite = "composite_701";
  let composites = "composites_701";
  let containerId = 701;
  let description = "description_701";
  let id = 701;
  let name = "name_701";
  let realm = 701;
  let scopeParamRequired = "scopeParamRequired_701";
  postClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingRealm:nondet:negative:dup-add
bthread("crud:ClientTemplateScopeMappingRealm:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_706";
  let composite = "composite_706";
  let composites = "composites_706";
  let containerId = 706;
  let description = "description_706";
  let id = 706;
  let name = "name_706";
  let realm = 706;
  let scopeParamRequired = "scopeParamRequired_706";
  postClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingClient:nondet:1:1
bthread("crud:ClientScopeMappingClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_710";
  let clientRole = "clientRole_710";
  let composite = "composite_710";
  let composites = "composites_710";
  let containerId = 710;
  let description = "description_710";
  let id = 710;
  let name = "name_710";
  let realm = 710;
  let scopeParamRequired = "scopeParamRequired_710";
  postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForClientScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingClient:nondet:1:2
bthread("crud:ClientScopeMappingClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_711";
  let clientRole = "clientRole_711";
  let composite = "composite_711";
  let composites = "composites_711";
  let containerId = 711;
  let description = "description_711";
  let id = 711;
  let name = "name_711";
  let realm = 711;
  let scopeParamRequired = "scopeParamRequired_711";
  postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingClient:nondet:negative:dup-add
bthread("crud:ClientScopeMappingClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_716";
  let clientRole = "clientRole_716";
  let composite = "composite_716";
  let composites = "composites_716";
  let containerId = 716;
  let description = "description_716";
  let id = 716;
  let name = "name_716";
  let realm = 716;
  let scopeParamRequired = "scopeParamRequired_716";
  postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingRealm:nondet:1:1
bthread("crud:ClientScopeMappingRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_720";
  let composite = "composite_720";
  let composites = "composites_720";
  let containerId = 720;
  let description = "description_720";
  let id = 720;
  let name = "name_720";
  let realm = 720;
  let scopeParamRequired = "scopeParamRequired_720";
  postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForClientScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingRealm:nondet:1:2
bthread("crud:ClientScopeMappingRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_721";
  let composite = "composite_721";
  let composites = "composites_721";
  let containerId = 721;
  let description = "description_721";
  let id = 721;
  let name = "name_721";
  let realm = 721;
  let scopeParamRequired = "scopeParamRequired_721";
  postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingRealm:nondet:negative:dup-add
bthread("crud:ClientScopeMappingRealm:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_726";
  let composite = "composite_726";
  let composites = "composites_726";
  let containerId = 726;
  let description = "description_726";
  let id = 726;
  let name = "name_726";
  let realm = 726;
  let scopeParamRequired = "scopeParamRequired_726";
  postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientRole:nondet:1:1
bthread("crud:ClientRole:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_730";
  let composite = "composite_730";
  let composites = "composites_730";
  let containerId = 730;
  let description = "description_730";
  let id = 730;
  let name = "name_730";
  let realm = 730;
  let role-name = "role-name_730";
  let scopeParamRequired = "scopeParamRequired_730";
  createClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  updateClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRole:nondet:1:2
bthread("crud:ClientRole:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_731";
  let composite = "composite_731";
  let composites = "composites_731";
  let containerId = 731;
  let description = "description_731";
  let id = 731;
  let name = "name_731";
  let realm = 731;
  let role-name = "role-name_731";
  let scopeParamRequired = "scopeParamRequired_731";
  createClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  updateClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRole:nondet:negative:dup-add
bthread("crud:ClientRole:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_736";
  let composite = "composite_736";
  let composites = "composites_736";
  let containerId = 736;
  let description = "description_736";
  let id = 736;
  let name = "name_736";
  let realm = 736;
  let role-name = "role-name_736";
  let scopeParamRequired = "scopeParamRequired_736";
  createClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRoles:read_only
bthread("crud:ClientRoles:read_only", function () {
  let id = 740;
  let realm = 740;
  verifyClientRolesExists(id, realm);
});

// Story: crud:ClientRoleComposites:nondet:1:1
bthread("crud:ClientRoleComposites:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_750";
  let composite = "composite_750";
  let composites = "composites_750";
  let containerId = 750;
  let description = "description_750";
  let id = 750;
  let name = "name_750";
  let realm = 750;
  let role-name = "role-name_750";
  let scopeParamRequired = "scopeParamRequired_750";
  addClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  waitForClientRoleCompositesAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositesDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRoleComposites:nondet:1:2
bthread("crud:ClientRoleComposites:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_751";
  let composite = "composite_751";
  let composites = "composites_751";
  let containerId = 751;
  let description = "description_751";
  let id = 751;
  let name = "name_751";
  let realm = 751;
  let role-name = "role-name_751";
  let scopeParamRequired = "scopeParamRequired_751";
  addClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleCompositesAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositesDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRoleComposites:nondet:negative:dup-add
bthread("crud:ClientRoleComposites:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_756";
  let composite = "composite_756";
  let composites = "composites_756";
  let containerId = 756;
  let description = "description_756";
  let id = 756;
  let name = "name_756";
  let realm = 756;
  let role-name = "role-name_756";
  let scopeParamRequired = "scopeParamRequired_756";
  addClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleCompositesAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRoleCompositesClient:read_only
bthread("crud:ClientRoleCompositesClient:read_only", function () {
  let clientUuid;
  let id = 760;
  let realm = 760;
  let role-name = "role-name_760";
  verifyClientRoleCompositesClientExists(clientUuid, id, realm, role-name);
});

// Story: crud:ClientRoleCompositesRealm:read_only
bthread("crud:ClientRoleCompositesRealm:read_only", function () {
  let id = 770;
  let realm = 770;
  let role-name = "role-name_770";
  verifyClientRoleCompositesRealmExists(id, realm, role-name);
});

// Story: crud:ClientRoleGroups:read_only
bthread("crud:ClientRoleGroups:read_only", function () {
  let id = 780;
  let realm = 780;
  let role-name = "role-name_780";
  verifyClientRoleGroupsExists(id, realm, role-name);
});

// Story: crud:ClientRoleManagementPermissions:read_only
bthread("crud:ClientRoleManagementPermissions:read_only", function () {
  let id = 790;
  let realm = 790;
  let role-name = "role-name_790";
  verifyClientRoleManagementPermissionsExists(id, realm, role-name);
});

// Story: crud:ClientRoleUsers:read_only
bthread("crud:ClientRoleUsers:read_only", function () {
  let id = 800;
  let realm = 800;
  let role-name = "role-name_800";
  verifyClientRoleUsersExists(id, realm, role-name);
});

// Story: crud:RealmRole:nondet:1:1
bthread("crud:RealmRole:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_810";
  let composite = "composite_810";
  let composites = "composites_810";
  let containerId = 810;
  let description = "description_810";
  let id = 810;
  let name = "name_810";
  let realm = 810;
  let role-name = "role-name_810";
  let scopeParamRequired = "scopeParamRequired_810";
  createRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  waitForRealmRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRealmRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  updateRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRealmRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RealmRole:nondet:1:2
bthread("crud:RealmRole:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_811";
  let composite = "composite_811";
  let composites = "composites_811";
  let containerId = 811;
  let description = "description_811";
  let id = 811;
  let name = "name_811";
  let realm = 811;
  let role-name = "role-name_811";
  let scopeParamRequired = "scopeParamRequired_811";
  createRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForRealmRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  updateRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRealmRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRealmRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RealmRole:nondet:negative:dup-add
bthread("crud:RealmRole:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_816";
  let composite = "composite_816";
  let composites = "composites_816";
  let containerId = 816;
  let description = "description_816";
  let id = 816;
  let name = "name_816";
  let realm = 816;
  let role-name = "role-name_816";
  let scopeParamRequired = "scopeParamRequired_816";
  createRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForRealmRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRealmRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRealmRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RealmRoles:read_only
bthread("crud:RealmRoles:read_only", function () {
  let realm = 820;
  verifyRealmRolesExists(realm);
});

// Story: crud:RoleComposite:nondet:1:1
bthread("crud:RoleComposite:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_830";
  let composite = "composite_830";
  let composites = "composites_830";
  let containerId = 830;
  let description = "description_830";
  let id = 830;
  let name = "name_830";
  let realm = 830;
  let role-name = "role-name_830";
  let scopeParamRequired = "scopeParamRequired_830";
  addRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RoleComposite:nondet:1:2
bthread("crud:RoleComposite:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_831";
  let composite = "composite_831";
  let composites = "composites_831";
  let containerId = 831;
  let description = "description_831";
  let id = 831;
  let name = "name_831";
  let realm = 831;
  let role-name = "role-name_831";
  let scopeParamRequired = "scopeParamRequired_831";
  addRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RoleComposite:nondet:negative:dup-add
bthread("crud:RoleComposite:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_836";
  let composite = "composite_836";
  let composites = "composites_836";
  let containerId = 836;
  let description = "description_836";
  let id = 836;
  let name = "name_836";
  let realm = 836;
  let role-name = "role-name_836";
  let scopeParamRequired = "scopeParamRequired_836";
  addRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RoleCompositeClient:read_only
bthread("crud:RoleCompositeClient:read_only", function () {
  let clientUuid;
  let realm = 840;
  let role-id;
  let role-name = "role-name_840";
  verifyRoleCompositeClientExists(clientUuid, realm, role-id, role-name);
});

// Story: crud:RoleCompositeRealm:read_only
bthread("crud:RoleCompositeRealm:read_only", function () {
  let realm = 850;
  let role-id;
  let role-name = "role-name_850";
  verifyRoleCompositeRealmExists(realm, role-id, role-name);
});

// Story: crud:RoleGroup:read_only
bthread("crud:RoleGroup:read_only", function () {
  let briefRepresentation = "briefRepresentation_860";
  let first = "first_860";
  let max = "max_860";
  let realm = 860;
  let role-name = "role-name_860";
  verifyRoleGroupExists(briefRepresentation, first, max, realm, role-name);
});

// Story: crud:RoleManagementPermission:read_only
bthread("crud:RoleManagementPermission:read_only", function () {
  let realm = 870;
  let role-name = "role-name_870";
  verifyRoleManagementPermissionExists(realm, role-name);
});

// Story: crud:RoleUser:read_only
bthread("crud:RoleUser:read_only", function () {
  let first = "first_880";
  let max = "max_880";
  let realm = 880;
  let role-name = "role-name_880";
  verifyRoleUserExists(first, max, realm, role-name);
});

// Story: crud:ClientScopeProtocolMapper:read_only
bthread("crud:ClientScopeProtocolMapper:read_only", function () {
  let id1 = "id1_890";
  let id2 = "id2_890";
  let realm = 890;
  verifyClientScopeProtocolMapperExists(id1, id2, realm);
});

// Story: crud:ClientScopeProtocolMapperModel:read_only
bthread("crud:ClientScopeProtocolMapperModel:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_910";
  let consentText = "consentText_910";
  let id = 910;
  let name = "name_910";
  let protocol = "protocol_910";
  let protocolMapper = "protocolMapper_910";
  let realm = 910;
  verifyClientScopeProtocolMapperModelExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientScopeProtocolMapperProtocol:read_only
bthread("crud:ClientScopeProtocolMapperProtocol:read_only", function () {
  let id = 920;
  let protocol = "protocol_920";
  let realm = 920;
  verifyClientScopeProtocolMapperProtocolExists(id, protocol, realm);
});

// Story: crud:ClientTemplateProtocolMapper:read_only
bthread("crud:ClientTemplateProtocolMapper:read_only", function () {
  let id1 = "id1_930";
  let id2 = "id2_930";
  let realm = 930;
  verifyClientTemplateProtocolMapperExists(id1, id2, realm);
});

// Story: crud:ClientTemplateProtocolMapperModel:read_only
bthread("crud:ClientTemplateProtocolMapperModel:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_950";
  let consentText = "consentText_950";
  let id = 950;
  let name = "name_950";
  let protocol = "protocol_950";
  let protocolMapper = "protocolMapper_950";
  let realm = 950;
  verifyClientTemplateProtocolMapperModelExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientTemplateProtocolMapperProtocol:read_only
bthread("crud:ClientTemplateProtocolMapperProtocol:read_only", function () {
  let id = 960;
  let protocol = "protocol_960";
  let realm = 960;
  verifyClientTemplateProtocolMapperProtocolExists(id, protocol, realm);
});

// Story: crud:ClientProtocolMapper:read_only
bthread("crud:ClientProtocolMapper:read_only", function () {
  let id1 = "id1_970";
  let id2 = "id2_970";
  let realm = 970;
  verifyClientProtocolMapperExists(id1, id2, realm);
});

// Story: crud:ProtocolMapper:read_only
bthread("crud:ProtocolMapper:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_990";
  let consentText = "consentText_990";
  let id = 990;
  let name = "name_990";
  let protocol = "protocol_990";
  let protocolMapper = "protocolMapper_990";
  let realm = 990;
  verifyProtocolMapperExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:IdentityProvider:nondet:1:1
bthread("crud:IdentityProvider:nondet:1:1", function () {
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_1000";
  let alias = "alias_1000";
  let authenticateByDefault = "authenticateByDefault_1000";
  let config = {};
  let displayName = "displayName_1000";
  let enabled = "enabled_1000";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_1000";
  let internalId = 1000;
  let linkOnly = "linkOnly_1000";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_1000";
  let providerId = 1000;
  let realm = 1000;
  let storeToken = "storeToken_1000";
  let trustEmail = "trustEmail_1000";
  let updateProfileFirstLogin = "updateProfileFirstLogin_1000";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_1000";
  createIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  updateIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  deleteIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToDeleteANonExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderDoesNotExist(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
});

// Story: crud:IdentityProvider:nondet:1:2
bthread("crud:IdentityProvider:nondet:1:2", function () {
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_1001";
  let alias = "alias_1001";
  let authenticateByDefault = "authenticateByDefault_1001";
  let config = {};
  let displayName = "displayName_1001";
  let enabled = "enabled_1001";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_1001";
  let internalId = 1001;
  let linkOnly = "linkOnly_1001";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_1001";
  let providerId = 1001;
  let realm = 1001;
  let storeToken = "storeToken_1001";
  let trustEmail = "trustEmail_1001";
  let updateProfileFirstLogin = "updateProfileFirstLogin_1001";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_1001";
  createIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  // waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  updateIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  deleteIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToDeleteANonExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderDoesNotExist(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
});

// Story: crud:IdentityProvider:nondet:negative:dup-add
bthread("crud:IdentityProvider:nondet:negative:dup-add", function () {
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_1006";
  let alias = "alias_1006";
  let authenticateByDefault = "authenticateByDefault_1006";
  let config = {};
  let displayName = "displayName_1006";
  let enabled = "enabled_1006";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_1006";
  let internalId = 1006;
  let linkOnly = "linkOnly_1006";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_1006";
  let providerId = 1006;
  let realm = 1006;
  let storeToken = "storeToken_1006";
  let trustEmail = "trustEmail_1006";
  let updateProfileFirstLogin = "updateProfileFirstLogin_1006";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_1006";
  createIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  // waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
});

// Story: crud:IdentityProviderMapper:nondet:1:1
bthread("crud:IdentityProviderMapper:nondet:1:1", function () {
  let alias = "alias_1010";
  let config = {};
  let id = 1010;
  let identityProviderAlias;
  let identityProviderMapper;
  let name = "name_1010";
  let realm = 1010;
  // Dependency Barrier
  let deps = {};
  deps["identityProviderAlias"] = matchAnyIdentityProviderAdded();
  deps["identityProviderMapper"] = matchAnyIdentityProviderAdded();
  let pkMap = {"identityProviderAlias": "realm", "identityProviderMapper": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  identityProviderAlias = captured["identityProviderAlias"];
  identityProviderMapper = captured["identityProviderMapper"];
  createIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  waitForIdentityProviderMapperAdded(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToAddExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  updateIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  deleteIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToDeleteANonExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperDoesNotExist(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
});

// Story: crud:IdentityProviderMapper:nondet:1:2
bthread("crud:IdentityProviderMapper:nondet:1:2", function () {
  let alias = "alias_1011";
  let config = {};
  let id = 1011;
  let identityProviderAlias;
  let identityProviderMapper;
  let name = "name_1011";
  let realm = 1011;
  // Dependency Barrier
  let deps = {};
  deps["identityProviderAlias"] = matchAnyIdentityProviderAdded();
  deps["identityProviderMapper"] = matchAnyIdentityProviderAdded();
  let pkMap = {"identityProviderAlias": "realm", "identityProviderMapper": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  identityProviderAlias = captured["identityProviderAlias"];
  identityProviderMapper = captured["identityProviderMapper"];
  createIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  // waitForIdentityProviderMapperAdded(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToAddExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  updateIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  deleteIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToDeleteANonExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperDoesNotExist(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
});

// Story: crud:IdentityProviderMapper:nondet:negative:dup-add
bthread("crud:IdentityProviderMapper:nondet:negative:dup-add", function () {
  let alias = "alias_1016";
  let config = {};
  let id = 1016;
  let identityProviderAlias;
  let identityProviderMapper;
  let name = "name_1016";
  let realm = 1016;
  // Dependency Barrier
  let deps = {};
  deps["identityProviderAlias"] = matchAnyIdentityProviderAdded();
  deps["identityProviderMapper"] = matchAnyIdentityProviderAdded();
  let pkMap = {"identityProviderAlias": "realm", "identityProviderMapper": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  identityProviderAlias = captured["identityProviderAlias"];
  identityProviderMapper = captured["identityProviderMapper"];
  createIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  // waitForIdentityProviderMapperAdded(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToAddExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
});

// Story: crud:IdentityProviderManagementPermissions:read_only
bthread("crud:IdentityProviderManagementPermissions:read_only", function () {
  let alias = "alias_1020";
  let realm = 1020;
  verifyIdentityProviderManagementPermissionsExists(alias, realm);
});

// Story: crud:GroupRoleMappingRealm:nondet:1:1
bthread("crud:GroupRoleMappingRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_1030";
  let composite = "composite_1030";
  let composites = "composites_1030";
  let containerId = 1030;
  let description = "description_1030";
  let id = 1030;
  let name = "name_1030";
  let realm = 1030;
  let scopeParamRequired = "scopeParamRequired_1030";
  postGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForGroupRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMappingRealm:nondet:1:2
bthread("crud:GroupRoleMappingRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_1031";
  let composite = "composite_1031";
  let composites = "composites_1031";
  let containerId = 1031;
  let description = "description_1031";
  let id = 1031;
  let name = "name_1031";
  let realm = 1031;
  let scopeParamRequired = "scopeParamRequired_1031";
  postGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMappingRealm:nondet:negative:dup-add
bthread("crud:GroupRoleMappingRealm:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_1036";
  let composite = "composite_1036";
  let composites = "composites_1036";
  let containerId = 1036;
  let description = "description_1036";
  let id = 1036;
  let name = "name_1036";
  let realm = 1036;
  let scopeParamRequired = "scopeParamRequired_1036";
  postGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingRealm:nondet:1:1
bthread("crud:UserRoleMappingRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_1040";
  let composite = "composite_1040";
  let composites = "composites_1040";
  let containerId = 1040;
  let description = "description_1040";
  let id = 1040;
  let name = "name_1040";
  let realm = 1040;
  let scopeParamRequired = "scopeParamRequired_1040";
  postUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForUserRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingRealm:nondet:1:2
bthread("crud:UserRoleMappingRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_1041";
  let composite = "composite_1041";
  let composites = "composites_1041";
  let containerId = 1041;
  let description = "description_1041";
  let id = 1041;
  let name = "name_1041";
  let realm = 1041;
  let scopeParamRequired = "scopeParamRequired_1041";
  postUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingRealm:nondet:negative:dup-add
bthread("crud:UserRoleMappingRealm:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_1046";
  let composite = "composite_1046";
  let composites = "composites_1046";
  let containerId = 1046;
  let description = "description_1046";
  let id = 1046;
  let name = "name_1046";
  let realm = 1046;
  let scopeParamRequired = "scopeParamRequired_1046";
  postUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientCertificate:read_only
bthread("crud:ClientCertificate:read_only", function () {
  let attr = "attr_1050";
  let id = 1050;
  let realm = 1050;
  verifyClientCertificateExists(attr, id, realm);
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let access = {};
  let attributes = {};
  let clientRoles = {};
  let id = 1060;
  let name = "name_1060";
  let path = "path_1060";
  let realm = 1060;
  let realmRoles = "realmRoles_1060";
  let subGroups = "subGroups_1060";
  createGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  waitForGroupAdded(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
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
  let id = 1061;
  let name = "name_1061";
  let path = "path_1061";
  let realm = 1061;
  let realmRoles = "realmRoles_1061";
  let subGroups = "subGroups_1061";
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
  let id = 1066;
  let name = "name_1066";
  let path = "path_1066";
  let realm = 1066;
  let realmRoles = "realmRoles_1066";
  let subGroups = "subGroups_1066";
  createGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  // waitForGroupAdded(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  tryToAddExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
});

// Story: crud:GroupRoleMappingClient:nondet:1:1
bthread("crud:GroupRoleMappingClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_1070";
  let clientRole = "clientRole_1070";
  let composite = "composite_1070";
  let composites = "composites_1070";
  let containerId = 1070;
  let description = "description_1070";
  let id = 1070;
  let name = "name_1070";
  let realm = 1070;
  let scopeParamRequired = "scopeParamRequired_1070";
  addGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForGroupRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMappingClient:nondet:1:2
bthread("crud:GroupRoleMappingClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_1071";
  let clientRole = "clientRole_1071";
  let composite = "composite_1071";
  let composites = "composites_1071";
  let containerId = 1071;
  let description = "description_1071";
  let id = 1071;
  let name = "name_1071";
  let realm = 1071;
  let scopeParamRequired = "scopeParamRequired_1071";
  addGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMappingClient:nondet:negative:dup-add
bthread("crud:GroupRoleMappingClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_1076";
  let clientRole = "clientRole_1076";
  let composite = "composite_1076";
  let composites = "composites_1076";
  let containerId = 1076;
  let description = "description_1076";
  let id = 1076;
  let name = "name_1076";
  let realm = 1076;
  let scopeParamRequired = "scopeParamRequired_1076";
  addGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingClient:nondet:1:1
bthread("crud:UserRoleMappingClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_1080";
  let clientRole = "clientRole_1080";
  let composite = "composite_1080";
  let composites = "composites_1080";
  let containerId = 1080;
  let description = "description_1080";
  let id = 1080;
  let name = "name_1080";
  let realm = 1080;
  let scopeParamRequired = "scopeParamRequired_1080";
  addUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  waitForUserRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingClient:nondet:1:2
bthread("crud:UserRoleMappingClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_1081";
  let clientRole = "clientRole_1081";
  let composite = "composite_1081";
  let composites = "composites_1081";
  let containerId = 1081;
  let description = "description_1081";
  let id = 1081;
  let name = "name_1081";
  let realm = 1081;
  let scopeParamRequired = "scopeParamRequired_1081";
  addUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingClient:nondet:negative:dup-add
bthread("crud:UserRoleMappingClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_1086";
  let clientRole = "clientRole_1086";
  let composite = "composite_1086";
  let composites = "composites_1086";
  let containerId = 1086;
  let description = "description_1086";
  let id = 1086;
  let name = "name_1086";
  let realm = 1086;
  let scopeParamRequired = "scopeParamRequired_1086";
  addUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:Role:read_only
bthread("crud:Role:read_only", function () {
  let realm = 1090;
  let role-id = 1090;
  verifyRoleExists(realm, role-id);
});

// Story: crud:RoleComposites:nondet:1:1
bthread("crud:RoleComposites:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_1100";
  let composite = "composite_1100";
  let composites = "composites_1100";
  let containerId = 1100;
  let description = "description_1100";
  let first = "first_1100";
  let id = 1100;
  let max = "max_1100";
  let name = "name_1100";
  let realm = 1100;
  let role-id;
  let scopeParamRequired = "scopeParamRequired_1100";
  let search = "search_1100";
  // Dependency Barrier
  let deps = {};
  deps["role-id"] = matchAnyRoleAdded();
  let pkMap = {"role-id": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  role-id = captured["role-id"];
  addRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  waitForRoleCompositesAdded(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToAddExistingRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  deleteRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToDeleteANonExistingRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositesDoesNotExist(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
});

// Story: crud:RoleComposites:nondet:1:2
bthread("crud:RoleComposites:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_1101";
  let composite = "composite_1101";
  let composites = "composites_1101";
  let containerId = 1101;
  let description = "description_1101";
  let first = "first_1101";
  let id = 1101;
  let max = "max_1101";
  let name = "name_1101";
  let realm = 1101;
  let role-id;
  let scopeParamRequired = "scopeParamRequired_1101";
  let search = "search_1101";
  // Dependency Barrier
  let deps = {};
  deps["role-id"] = matchAnyRoleAdded();
  let pkMap = {"role-id": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  role-id = captured["role-id"];
  addRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  // waitForRoleCompositesAdded(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToAddExistingRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  deleteRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToDeleteANonExistingRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositesDoesNotExist(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
});

// Story: crud:RoleComposites:nondet:negative:dup-add
bthread("crud:RoleComposites:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_1106";
  let composite = "composite_1106";
  let composites = "composites_1106";
  let containerId = 1106;
  let description = "description_1106";
  let first = "first_1106";
  let id = 1106;
  let max = "max_1106";
  let name = "name_1106";
  let realm = 1106;
  let role-id;
  let scopeParamRequired = "scopeParamRequired_1106";
  let search = "search_1106";
  // Dependency Barrier
  let deps = {};
  deps["role-id"] = matchAnyRoleAdded();
  let pkMap = {"role-id": "realm"};
  let captured = resolveDependencies(deps, pkMap);
  role-id = captured["role-id"];
  addRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  // waitForRoleCompositesAdded(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToAddExistingRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
});

// Story: crud:RoleManagementPermissions:read_only
bthread("crud:RoleManagementPermissions:read_only", function () {
  let realm = 1110;
  let role-id;
  verifyRoleManagementPermissionsExists(realm, role-id);
});

// Story: crud:ClientScope:nondet:1:1
bthread("crud:ClientScope:nondet:1:1", function () {
  let attributes = {};
  let description = "description_1120";
  let id = 1120;
  let name = "name_1120";
  let protocol = "protocol_1120";
  let protocolMappers = "protocolMappers_1120";
  let realm = 1120;
  createClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  waitForClientScopeAdded(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToAddExistingClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientScopeExists(attributes, description, id, name, protocol, protocolMappers, realm);
  updateClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  deleteClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToDeleteANonExistingClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientScopeDoesNotExist(attributes, description, id, name, protocol, protocolMappers, realm);
});

// Story: crud:ClientScope:nondet:1:2
bthread("crud:ClientScope:nondet:1:2", function () {
  let attributes = {};
  let description = "description_1121";
  let id = 1121;
  let name = "name_1121";
  let protocol = "protocol_1121";
  let protocolMappers = "protocolMappers_1121";
  let realm = 1121;
  createClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  // waitForClientScopeAdded(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToAddExistingClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  updateClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientScopeExists(attributes, description, id, name, protocol, protocolMappers, realm);
  deleteClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToDeleteANonExistingClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientScopeDoesNotExist(attributes, description, id, name, protocol, protocolMappers, realm);
});

// Story: crud:ClientScope:nondet:negative:dup-add
bthread("crud:ClientScope:nondet:negative:dup-add", function () {
  let attributes = {};
  let description = "description_1126";
  let id = 1126;
  let name = "name_1126";
  let protocol = "protocol_1126";
  let protocolMappers = "protocolMappers_1126";
  let realm = 1126;
  createClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  // waitForClientScopeAdded(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientScopeExists(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToAddExistingClientScope(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientScopeExists(attributes, description, id, name, protocol, protocolMappers, realm);
});

// Story: crud:ClientTemplate:nondet:1:1
bthread("crud:ClientTemplate:nondet:1:1", function () {
  let attributes = {};
  let description = "description_1130";
  let id = 1130;
  let name = "name_1130";
  let protocol = "protocol_1130";
  let protocolMappers = "protocolMappers_1130";
  let realm = 1130;
  createClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  waitForClientTemplateAdded(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToAddExistingClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientTemplateExists(attributes, description, id, name, protocol, protocolMappers, realm);
  updateClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  deleteClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToDeleteANonExistingClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientTemplateDoesNotExist(attributes, description, id, name, protocol, protocolMappers, realm);
});

// Story: crud:ClientTemplate:nondet:1:2
bthread("crud:ClientTemplate:nondet:1:2", function () {
  let attributes = {};
  let description = "description_1131";
  let id = 1131;
  let name = "name_1131";
  let protocol = "protocol_1131";
  let protocolMappers = "protocolMappers_1131";
  let realm = 1131;
  createClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  // waitForClientTemplateAdded(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToAddExistingClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  updateClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientTemplateExists(attributes, description, id, name, protocol, protocolMappers, realm);
  deleteClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToDeleteANonExistingClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientTemplateDoesNotExist(attributes, description, id, name, protocol, protocolMappers, realm);
});

// Story: crud:ClientTemplate:nondet:negative:dup-add
bthread("crud:ClientTemplate:nondet:negative:dup-add", function () {
  let attributes = {};
  let description = "description_1136";
  let id = 1136;
  let name = "name_1136";
  let protocol = "protocol_1136";
  let protocolMappers = "protocolMappers_1136";
  let realm = 1136;
  createClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  // waitForClientTemplateAdded(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientTemplateExists(attributes, description, id, name, protocol, protocolMappers, realm);
  tryToAddExistingClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm);
  verifyClientTemplateExists(attributes, description, id, name, protocol, protocolMappers, realm);
});

// Story: crud:Component:nondet:1:1
bthread("crud:Component:nondet:1:1", function () {
  let config = {};
  let id = 1140;
  let name = "name_1140";
  let parent = "parent_1140";
  let parentId = 1140;
  let providerId = 1140;
  let providerType = "providerType_1140";
  let realm = 1140;
  let subType = "subType_1140";
  let type = "type_1140";
  createComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  waitForComponentAdded(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  tryToAddExistingComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  verifyComponentExists(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  updateComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  deleteComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  tryToDeleteANonExistingComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  verifyComponentDoesNotExist(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
});

// Story: crud:Component:nondet:1:2
bthread("crud:Component:nondet:1:2", function () {
  let config = {};
  let id = 1141;
  let name = "name_1141";
  let parent = "parent_1141";
  let parentId = 1141;
  let providerId = 1141;
  let providerType = "providerType_1141";
  let realm = 1141;
  let subType = "subType_1141";
  let type = "type_1141";
  createComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  // waitForComponentAdded(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  tryToAddExistingComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  updateComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  verifyComponentExists(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  deleteComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  tryToDeleteANonExistingComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  verifyComponentDoesNotExist(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
});

// Story: crud:Component:nondet:negative:dup-add
bthread("crud:Component:nondet:negative:dup-add", function () {
  let config = {};
  let id = 1146;
  let name = "name_1146";
  let parent = "parent_1146";
  let parentId = 1146;
  let providerId = 1146;
  let providerType = "providerType_1146";
  let realm = 1146;
  let subType = "subType_1146";
  let type = "type_1146";
  createComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  // waitForComponentAdded(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  verifyComponentExists(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  tryToAddExistingComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
  verifyComponentExists(config, id, name, parent, parentId, providerId, providerType, realm, subType, type);
});

// Story: crud:BruteForceUser:read_only
bthread("crud:BruteForceUser:read_only", function () {
  let realm = 1150;
  let userId;
  verifyBruteForceUserExists(realm, userId);
});

// Story: crud:ClientInitialAccess:nondet:1:1
bthread("crud:ClientInitialAccess:nondet:1:1", function () {
  let count = 1170;
  let expiration = 1170;
  let id = 1170;
  let realm = 1170;
  postClientsInitialAccess(count, expiration, id, realm);
  waitForClientInitialAccessAdded(count, expiration, id, realm);
  tryToAddExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
  deleteClientsInitialAcces(count, expiration, id, realm);
  tryToDeleteANonExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessDoesNotExist(count, expiration, id, realm);
});

// Story: crud:ClientInitialAccess:nondet:1:2
bthread("crud:ClientInitialAccess:nondet:1:2", function () {
  let count = 1171;
  let expiration = 1171;
  let id = 1171;
  let realm = 1171;
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
  let count = 1176;
  let expiration = 1176;
  let id = 1176;
  let realm = 1176;
  postClientsInitialAccess(count, expiration, id, realm);
  // waitForClientInitialAccessAdded(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
  tryToAddExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
});

// Story: crud:Key:read_only
bthread("crud:Key:read_only", function () {
  let realm = 1180;
  verifyKeyExists(realm);
});
