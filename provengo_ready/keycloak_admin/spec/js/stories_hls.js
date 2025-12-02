// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
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

// Story: crud:UsersManagementPermissions:read_only
bthread("crud:UsersManagementPermissions:read_only", function () {
  let realm = 340;
  verifyUsersManagementPermissionsExists(realm);
});

// Story: crud:AuthenticationConfig:nondet:1:1
bthread("crud:AuthenticationConfig:nondet:1:1", function () {
  let alias = "alias_350";
  let config = {};
  let id = 350;
  let realm = 350;
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
  let alias = "alias_351";
  let config = {};
  let id = 351;
  let realm = 351;
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
  let alias = "alias_356";
  let config = {};
  let id = 356;
  let realm = 356;
  postAuthenticationConfig(alias, config, id, realm);
  // waitForAuthenticationConfigAdded(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
  tryToAddExistingAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
});

// Story: crud:Execution:nondet:1:1
bthread("crud:Execution:nondet:1:1", function () {
  let authenticator = "authenticator_360";
  let authenticatorConfig = "authenticatorConfig_360";
  let authenticatorFlow = "authenticatorFlow_360";
  let autheticatorFlow = "autheticatorFlow_360";
  let executionId = 360;
  let flowId = 360;
  let id = 360;
  let parentFlow = "parentFlow_360";
  let priority = 360;
  let realm = 360;
  let requirement = "requirement_360";
  postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  // waitForExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToAddExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  deleteExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToDeleteANonExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionDoesNotExist(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
});

// Story: crud:Execution:nondet:1:2
bthread("crud:Execution:nondet:1:2", function () {
  let authenticator = "authenticator_361";
  let authenticatorConfig = "authenticatorConfig_361";
  let authenticatorFlow = "authenticatorFlow_361";
  let autheticatorFlow = "autheticatorFlow_361";
  let executionId = 361;
  let flowId = 361;
  let id = 361;
  let parentFlow = "parentFlow_361";
  let priority = 361;
  let realm = 361;
  let requirement = "requirement_361";
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
  let authenticator = "authenticator_366";
  let authenticatorConfig = "authenticatorConfig_366";
  let authenticatorFlow = "authenticatorFlow_366";
  let autheticatorFlow = "autheticatorFlow_366";
  let executionId = 366;
  let flowId = 366;
  let id = 366;
  let parentFlow = "parentFlow_366";
  let priority = 366;
  let realm = 366;
  let requirement = "requirement_366";
  postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  // waitForExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToAddExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
});

// Story: crud:ExecutionConfig:read_only
bthread("crud:ExecutionConfig:read_only", function () {
  let alias = "alias_370";
  let config = {};
  let id = 370;
  let realm = 370;
  verifyExecutionConfigExists(alias, config, executionId, id, realm);
});

// Story: crud:AuthenticationFlow:nondet:1:1
bthread("crud:AuthenticationFlow:nondet:1:1", function () {
  let alias = "alias_380";
  let authenticationExecutions = "authenticationExecutions_380";
  let builtIn = "builtIn_380";
  let description = "description_380";
  let flowAlias = "flowAlias_380";
  let id = 380;
  let providerId = 380;
  let realm = 380;
  let topLevel = "topLevel_380";
  createAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  // waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  updateAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  deleteAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  tryToDeleteANonExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowDoesNotExist(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
});

// Story: crud:AuthenticationFlow:nondet:1:2
bthread("crud:AuthenticationFlow:nondet:1:2", function () {
  let alias = "alias_381";
  let authenticationExecutions = "authenticationExecutions_381";
  let builtIn = "builtIn_381";
  let description = "description_381";
  let flowAlias = "flowAlias_381";
  let id = 381;
  let providerId = 381;
  let realm = 381;
  let topLevel = "topLevel_381";
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
  let alias = "alias_386";
  let authenticationExecutions = "authenticationExecutions_386";
  let builtIn = "builtIn_386";
  let description = "description_386";
  let flowAlias = "flowAlias_386";
  let id = 386;
  let providerId = 386;
  let realm = 386;
  let topLevel = "topLevel_386";
  createAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  // waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
});

// Story: crud:AuthenticationExecution:read_only
bthread("crud:AuthenticationExecution:read_only", function () {
  let flowAlias = "flowAlias_390";
  let realm = 390;
  verifyAuthenticationExecutionExists(executionId, flowAlias, realm);
});

// Story: crud:FormActionProvider:read_only
bthread("crud:FormActionProvider:read_only", function () {
  let realm = 420;
  verifyFormActionProviderExists(realm);
});

// Story: crud:FormProvider:read_only
bthread("crud:FormProvider:read_only", function () {
  let realm = 430;
  verifyFormProviderExists(realm);
});

// Story: crud:PerClientConfigDescription:read_only
bthread("crud:PerClientConfigDescription:read_only", function () {
  let realm = 440;
  verifyPerClientConfigDescriptionExists(realm);
});

// Story: crud:RequiredAction:nondet:1:1
bthread("crud:RequiredAction:nondet:1:1", function () {
  let alias = "alias_450";
  let realm = 450;
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
  let alias = "alias_451";
  let realm = 451;
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
  let alias = "alias_456";
  let realm = 456;
  postRegisterRequiredAction(alias, realm);
  // waitForRequiredActionAdded(alias, realm);
  verifyRequiredActionExists(alias, realm);
  tryToAddExistingRequiredAction(alias, realm);
  verifyRequiredActionExists(alias, realm);
});

// Story: crud:ClientNode:nondet:1:1
bthread("crud:ClientNode:nondet:1:1", function () {
  let id = 470;
  let node = "node_470";
  let realm = 470;
  postNodes(id, node, realm);
  // waitForClientNodeAdded(id, node, realm);
  tryToAddExistingClientNode(id, node, realm);
  verifyClientNodeExists(id, node, realm);
  deleteNode(id, node, realm);
  tryToDeleteANonExistingClientNode(id, node, realm);
  verifyClientNodeDoesNotExist(id, node, realm);
});

// Story: crud:ClientNode:nondet:1:2
bthread("crud:ClientNode:nondet:1:2", function () {
  let id = 471;
  let node = "node_471";
  let realm = 471;
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
  let id = 476;
  let node = "node_476";
  let realm = 476;
  postNodes(id, node, realm);
  // waitForClientNodeAdded(id, node, realm);
  verifyClientNodeExists(id, node, realm);
  tryToAddExistingClientNode(id, node, realm);
  verifyClientNodeExists(id, node, realm);
});

// Story: crud:ClientManagementPermissions:read_only
bthread("crud:ClientManagementPermissions:read_only", function () {
  let id = 490;
  let realm = 490;
  verifyClientManagementPermissionsExists(id, realm);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let access = {};
  let applicationRoles = {};
  let attributes = {};
  let clientConsents = "clientConsents_500";
  let clientRoles = {};
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
  // waitForUserAdded(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToAddExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  updateUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  deleteUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
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
  updateUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  deleteUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
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
  // waitForUserFederatedIdentityAdded(id, provider, realm);
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
  // waitForUserGroupAdded(briefRepresentation, first, groupId, id, max, realm, search);
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
  // waitForClientScopeScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
  // waitForClientScopeScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
  // waitForClientTemplateScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
  // waitForClientTemplateScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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

// Story: crud:ClientScopeMapping:read_only
bthread("crud:ClientScopeMapping:read_only", function () {
  let id = 710;
  let realm = 710;
  verifyClientScopeMappingExists(id, realm);
});

// Story: crud:ClientScopeMappingClient:nondet:1:1
bthread("crud:ClientScopeMappingClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_720";
  let clientRole = "clientRole_720";
  let composite = "composite_720";
  let composites = "composites_720";
  let containerId = 720;
  let description = "description_720";
  let id = 720;
  let name = "name_720";
  let realm = 720;
  let scopeParamRequired = "scopeParamRequired_720";
  postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingClient:nondet:1:2
bthread("crud:ClientScopeMappingClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_721";
  let clientRole = "clientRole_721";
  let composite = "composite_721";
  let composites = "composites_721";
  let containerId = 721;
  let description = "description_721";
  let id = 721;
  let name = "name_721";
  let realm = 721;
  let scopeParamRequired = "scopeParamRequired_721";
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
  let client = "client_726";
  let clientRole = "clientRole_726";
  let composite = "composite_726";
  let composites = "composites_726";
  let containerId = 726;
  let description = "description_726";
  let id = 726;
  let name = "name_726";
  let realm = 726;
  let scopeParamRequired = "scopeParamRequired_726";
  postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingRealm:nondet:1:1
bthread("crud:ClientScopeMappingRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_730";
  let composite = "composite_730";
  let composites = "composites_730";
  let containerId = 730;
  let description = "description_730";
  let id = 730;
  let name = "name_730";
  let realm = 730;
  let scopeParamRequired = "scopeParamRequired_730";
  postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingRealm:nondet:1:2
bthread("crud:ClientScopeMappingRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_731";
  let composite = "composite_731";
  let composites = "composites_731";
  let containerId = 731;
  let description = "description_731";
  let id = 731;
  let name = "name_731";
  let realm = 731;
  let scopeParamRequired = "scopeParamRequired_731";
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
  let clientRole = "clientRole_736";
  let composite = "composite_736";
  let composites = "composites_736";
  let containerId = 736;
  let description = "description_736";
  let id = 736;
  let name = "name_736";
  let realm = 736;
  let scopeParamRequired = "scopeParamRequired_736";
  postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientRole:nondet:1:1
bthread("crud:ClientRole:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_740";
  let composite = "composite_740";
  let composites = "composites_740";
  let containerId = 740;
  let description = "description_740";
  let id = 740;
  let name = "name_740";
  let realm = 740;
  let role-name = "role-name_740";
  let scopeParamRequired = "scopeParamRequired_740";
  createClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
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
  let clientRole = "clientRole_741";
  let composite = "composite_741";
  let composites = "composites_741";
  let containerId = 741;
  let description = "description_741";
  let id = 741;
  let name = "name_741";
  let realm = 741;
  let role-name = "role-name_741";
  let scopeParamRequired = "scopeParamRequired_741";
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
  let clientRole = "clientRole_746";
  let composite = "composite_746";
  let composites = "composites_746";
  let containerId = 746;
  let description = "description_746";
  let id = 746;
  let name = "name_746";
  let realm = 746;
  let role-name = "role-name_746";
  let scopeParamRequired = "scopeParamRequired_746";
  createClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RealmRole:nondet:1:1
bthread("crud:RealmRole:nondet:1:1", function () {
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
  createRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForRealmRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
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
  createRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForRealmRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRealmRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRealmRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RoleComposite:nondet:1:1
bthread("crud:RoleComposite:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_760";
  let composite = "composite_760";
  let composites = "composites_760";
  let containerId = 760;
  let description = "description_760";
  let id = 760;
  let name = "name_760";
  let realm = 760;
  let role-name = "role-name_760";
  let scopeParamRequired = "scopeParamRequired_760";
  postRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RoleComposite:nondet:1:2
bthread("crud:RoleComposite:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_761";
  let composite = "composite_761";
  let composites = "composites_761";
  let containerId = 761;
  let description = "description_761";
  let id = 761;
  let name = "name_761";
  let realm = 761;
  let role-name = "role-name_761";
  let scopeParamRequired = "scopeParamRequired_761";
  postRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
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
  let clientRole = "clientRole_766";
  let composite = "composite_766";
  let composites = "composites_766";
  let containerId = 766;
  let description = "description_766";
  let id = 766;
  let name = "name_766";
  let realm = 766;
  let role-name = "role-name_766";
  let scopeParamRequired = "scopeParamRequired_766";
  postRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:RoleCompositeClient:read_only
bthread("crud:RoleCompositeClient:read_only", function () {
  let realm = 770;
  let role-name = "role-name_770";
  verifyRoleCompositeClientExists(clientUuid, realm, role-name);
});

// Story: crud:RoleCompositeRealm:read_only
bthread("crud:RoleCompositeRealm:read_only", function () {
  let realm = 780;
  let role-name = "role-name_780";
  verifyRoleCompositeRealmExists(realm, role-name);
});

// Story: crud:RoleGroup:read_only
bthread("crud:RoleGroup:read_only", function () {
  let briefRepresentation = "briefRepresentation_790";
  let first = "first_790";
  let max = "max_790";
  let realm = 790;
  let role-name = "role-name_790";
  verifyRoleGroupExists(briefRepresentation, first, max, realm, role-name);
});

// Story: crud:RoleManagementPermission:read_only
bthread("crud:RoleManagementPermission:read_only", function () {
  let realm = 800;
  let role-name = "role-name_800";
  verifyRoleManagementPermissionExists(realm, role-name);
});

// Story: crud:RoleUser:read_only
bthread("crud:RoleUser:read_only", function () {
  let first = "first_810";
  let max = "max_810";
  let realm = 810;
  let role-name = "role-name_810";
  verifyRoleUserExists(first, max, realm, role-name);
});

// Story: crud:ClientScopeProtocolMapper:read_only
bthread("crud:ClientScopeProtocolMapper:read_only", function () {
  let id1 = "id1_820";
  let id2 = "id2_820";
  let realm = 820;
  verifyClientScopeProtocolMapperExists(id1, id2, realm);
});

// Story: crud:ClientScopeProtocolMapperModels:read_only
bthread("crud:ClientScopeProtocolMapperModels:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_840";
  let consentText = "consentText_840";
  let id = 840;
  let name = "name_840";
  let protocol = "protocol_840";
  let protocolMapper = "protocolMapper_840";
  let realm = 840;
  verifyClientScopeProtocolMapperModelsExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientScopeProtocolMapperProtocol:read_only
bthread("crud:ClientScopeProtocolMapperProtocol:read_only", function () {
  let id = 850;
  let protocol = "protocol_850";
  let realm = 850;
  verifyClientScopeProtocolMapperProtocolExists(id, protocol, realm);
});

// Story: crud:ClientTemplateProtocolMapper:read_only
bthread("crud:ClientTemplateProtocolMapper:read_only", function () {
  let id1 = "id1_860";
  let id2 = "id2_860";
  let realm = 860;
  verifyClientTemplateProtocolMapperExists(id1, id2, realm);
});

// Story: crud:ClientTemplateProtocolMapperModels:read_only
bthread("crud:ClientTemplateProtocolMapperModels:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_880";
  let consentText = "consentText_880";
  let id = 880;
  let name = "name_880";
  let protocol = "protocol_880";
  let protocolMapper = "protocolMapper_880";
  let realm = 880;
  verifyClientTemplateProtocolMapperModelsExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientTemplateProtocolMapperProtocol:read_only
bthread("crud:ClientTemplateProtocolMapperProtocol:read_only", function () {
  let id = 890;
  let protocol = "protocol_890";
  let realm = 890;
  verifyClientTemplateProtocolMapperProtocolExists(id, protocol, realm);
});

// Story: crud:ClientProtocolMapper:read_only
bthread("crud:ClientProtocolMapper:read_only", function () {
  let id1 = "id1_900";
  let id2 = "id2_900";
  let realm = 900;
  verifyClientProtocolMapperExists(id1, id2, realm);
});

// Story: crud:ProtocolMapper:read_only
bthread("crud:ProtocolMapper:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_920";
  let consentText = "consentText_920";
  let id = 920;
  let name = "name_920";
  let protocol = "protocol_920";
  let protocolMapper = "protocolMapper_920";
  let realm = 920;
  verifyProtocolMapperExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:IdentityProvider:nondet:1:1
bthread("crud:IdentityProvider:nondet:1:1", function () {
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_930";
  let alias = "alias_930";
  let authenticateByDefault = "authenticateByDefault_930";
  let config = {};
  let displayName = "displayName_930";
  let enabled = "enabled_930";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_930";
  let internalId = 930;
  let linkOnly = "linkOnly_930";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_930";
  let providerId = 930;
  let realm = 930;
  let storeToken = "storeToken_930";
  let trustEmail = "trustEmail_930";
  let updateProfileFirstLogin = "updateProfileFirstLogin_930";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_930";
  createIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  // waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  updateIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  deleteIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToDeleteANonExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderDoesNotExist(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
});

// Story: crud:IdentityProvider:nondet:1:2
bthread("crud:IdentityProvider:nondet:1:2", function () {
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_931";
  let alias = "alias_931";
  let authenticateByDefault = "authenticateByDefault_931";
  let config = {};
  let displayName = "displayName_931";
  let enabled = "enabled_931";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_931";
  let internalId = 931;
  let linkOnly = "linkOnly_931";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_931";
  let providerId = 931;
  let realm = 931;
  let storeToken = "storeToken_931";
  let trustEmail = "trustEmail_931";
  let updateProfileFirstLogin = "updateProfileFirstLogin_931";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_931";
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
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_936";
  let alias = "alias_936";
  let authenticateByDefault = "authenticateByDefault_936";
  let config = {};
  let displayName = "displayName_936";
  let enabled = "enabled_936";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_936";
  let internalId = 936;
  let linkOnly = "linkOnly_936";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_936";
  let providerId = 936;
  let realm = 936;
  let storeToken = "storeToken_936";
  let trustEmail = "trustEmail_936";
  let updateProfileFirstLogin = "updateProfileFirstLogin_936";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_936";
  createIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  // waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
});

// Story: crud:IdentityProviderMapper:nondet:1:1
bthread("crud:IdentityProviderMapper:nondet:1:1", function () {
  let alias = "alias_940";
  let config = {};
  let id = 940;
  let name = "name_940";
  let realm = 940;
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
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  updateIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  deleteIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToDeleteANonExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperDoesNotExist(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
});

// Story: crud:IdentityProviderMapper:nondet:1:2
bthread("crud:IdentityProviderMapper:nondet:1:2", function () {
  let alias = "alias_941";
  let config = {};
  let id = 941;
  let name = "name_941";
  let realm = 941;
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
  let alias = "alias_946";
  let config = {};
  let id = 946;
  let name = "name_946";
  let realm = 946;
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
  let alias = "alias_950";
  let realm = 950;
  verifyIdentityProviderManagementPermissionsExists(alias, realm);
});

// Story: crud:GroupRoleMappingRealm:nondet:1:1
bthread("crud:GroupRoleMappingRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_960";
  let composite = "composite_960";
  let composites = "composites_960";
  let containerId = 960;
  let description = "description_960";
  let id = 960;
  let name = "name_960";
  let realm = 960;
  let scopeParamRequired = "scopeParamRequired_960";
  postGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMappingRealm:nondet:1:2
bthread("crud:GroupRoleMappingRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_961";
  let composite = "composite_961";
  let composites = "composites_961";
  let containerId = 961;
  let description = "description_961";
  let id = 961;
  let name = "name_961";
  let realm = 961;
  let scopeParamRequired = "scopeParamRequired_961";
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
  let clientRole = "clientRole_966";
  let composite = "composite_966";
  let composites = "composites_966";
  let containerId = 966;
  let description = "description_966";
  let id = 966;
  let name = "name_966";
  let realm = 966;
  let scopeParamRequired = "scopeParamRequired_966";
  postGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingRealm:nondet:1:1
bthread("crud:UserRoleMappingRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_970";
  let composite = "composite_970";
  let composites = "composites_970";
  let containerId = 970;
  let description = "description_970";
  let id = 970;
  let name = "name_970";
  let realm = 970;
  let scopeParamRequired = "scopeParamRequired_970";
  postUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingRealm:nondet:1:2
bthread("crud:UserRoleMappingRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_971";
  let composite = "composite_971";
  let composites = "composites_971";
  let containerId = 971;
  let description = "description_971";
  let id = 971;
  let name = "name_971";
  let realm = 971;
  let scopeParamRequired = "scopeParamRequired_971";
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
  let clientRole = "clientRole_976";
  let composite = "composite_976";
  let composites = "composites_976";
  let containerId = 976;
  let description = "description_976";
  let id = 976;
  let name = "name_976";
  let realm = 976;
  let scopeParamRequired = "scopeParamRequired_976";
  postUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientCertificate:read_only
bthread("crud:ClientCertificate:read_only", function () {
  let attr = "attr_980";
  let id = 980;
  let realm = 980;
  verifyClientCertificateExists(attr, id, realm);
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let access = {};
  let attributes = {};
  let clientRoles = {};
  let id = 990;
  let name = "name_990";
  let path = "path_990";
  let realm = 990;
  let realmRoles = "realmRoles_990";
  let subGroups = "subGroups_990";
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
  let id = 991;
  let name = "name_991";
  let path = "path_991";
  let realm = 991;
  let realmRoles = "realmRoles_991";
  let subGroups = "subGroups_991";
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
  let id = 996;
  let name = "name_996";
  let path = "path_996";
  let realm = 996;
  let realmRoles = "realmRoles_996";
  let subGroups = "subGroups_996";
  createGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  // waitForGroupAdded(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  tryToAddExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
});

// Story: crud:GroupManagementPermission:read_only
bthread("crud:GroupManagementPermission:read_only", function () {
  let id = 1010;
  let realm = 1010;
  verifyGroupManagementPermissionExists(id, realm);
});

// Story: crud:GroupMember:read_only
bthread("crud:GroupMember:read_only", function () {
  let id = 1020;
  let realm = 1020;
  verifyGroupMemberExists(id, realm);
});

// Story: crud:ClientInitialAccess:nondet:1:1
bthread("crud:ClientInitialAccess:nondet:1:1", function () {
  let count = 1030;
  let expiration = 1030;
  let id = 1030;
  let realm = 1030;
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
  let count = 1031;
  let expiration = 1031;
  let id = 1031;
  let realm = 1031;
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
  let count = 1036;
  let expiration = 1036;
  let id = 1036;
  let realm = 1036;
  postClientsInitialAccess(count, expiration, id, realm);
  // waitForClientInitialAccessAdded(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
  tryToAddExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
});

// Story: crud:Key:read_only
bthread("crud:Key:read_only", function () {
  let realm = 1040;
  verifyKeyExists(realm);
});
