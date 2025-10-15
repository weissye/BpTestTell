// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: keycloak_admin
// Source: artifacts\hls_nondet\real_world_llm_provider\keycloak_admin\hls_nondet_gold.json


bthread(`HLS PASSIVE: delete BruteForceUser`, function () {
  const ev = waitFor({op: 'delete', entity: 'BruteForceUser'});
  block({op: 'addBruteForceUser'});
  verifyBruteForceUserNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientByRealmById`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientByRealmById'});
  block({op: 'addClientByRealmById'});
  verifyClientByRealmByIdNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientProtocolMappersModel`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientProtocolMappersModel'});
  block({op: 'addClientProtocolMappersModel'});
  verifyClientProtocolMappersModelNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientRole`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientRole'});
  block({op: 'addClientRole'});
  verifyClientRoleNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientRoleComposites`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientRoleComposites'});
  block({op: 'addClientRoleComposites'});
  verifyClientRoleCompositesNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientScope`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientScope'});
  block({op: 'addClientScope'});
  verifyClientScopeNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientScopeProtocolMappersModel`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientScopeProtocolMappersModel'});
  block({op: 'addClientScopeProtocolMappersModel'});
  verifyClientScopeProtocolMappersModelNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientScopeScopeMappingsClient`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientScopeScopeMappingsClient'});
  block({op: 'addClientScopeScopeMappingsClient'});
  verifyClientScopeScopeMappingsClientNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientScopeScopeMappingsRealm`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientScopeScopeMappingsRealm'});
  block({op: 'addClientScopeScopeMappingsRealm'});
  verifyClientScopeScopeMappingsRealmNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientTemplate`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientTemplate'});
  block({op: 'addClientTemplate'});
  verifyClientTemplateNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientTemplateProtocolMappersModel`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientTemplateProtocolMappersModel'});
  block({op: 'addClientTemplateProtocolMappersModel'});
  verifyClientTemplateProtocolMappersModelNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete ClientsInitialAcces`, function () {
  const ev = waitFor({op: 'delete', entity: 'ClientsInitialAcces'});
  block({op: 'addClientsInitialAcces'});
  verifyClientsInitialAccesNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Component`, function () {
  const ev = waitFor({op: 'delete', entity: 'Component'});
  block({op: 'addComponent'});
  verifyComponentNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Config`, function () {
  const ev = waitFor({op: 'delete', entity: 'Config'});
  block({op: 'addConfig'});
  verifyConfigNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Consent`, function () {
  const ev = waitFor({op: 'delete', entity: 'Consent'});
  block({op: 'addConsent'});
  verifyConsentNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Credential`, function () {
  const ev = waitFor({op: 'delete', entity: 'Credential'});
  block({op: 'addCredential'});
  verifyCredentialNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete DefaultClientScope`, function () {
  const ev = waitFor({op: 'delete', entity: 'DefaultClientScope'});
  block({op: 'addDefaultClientScope'});
  verifyDefaultClientScopeNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Execution`, function () {
  const ev = waitFor({op: 'delete', entity: 'Execution'});
  block({op: 'addExecution'});
  verifyExecutionNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete FederatedIdentity`, function () {
  const ev = waitFor({op: 'delete', entity: 'FederatedIdentity'});
  block({op: 'addFederatedIdentity'});
  verifyFederatedIdentityNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Flow`, function () {
  const ev = waitFor({op: 'delete', entity: 'Flow'});
  block({op: 'addFlow'});
  verifyFlowNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete GroupByRealmById`, function () {
  const ev = waitFor({op: 'delete', entity: 'GroupByRealmById'});
  block({op: 'addGroupByRealmById'});
  verifyGroupByRealmByIdNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete GroupRoleMappingsClient`, function () {
  const ev = waitFor({op: 'delete', entity: 'GroupRoleMappingsClient'});
  block({op: 'addGroupRoleMappingsClient'});
  verifyGroupRoleMappingsClientNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete GroupRoleMappingsRealm`, function () {
  const ev = waitFor({op: 'delete', entity: 'GroupRoleMappingsRealm'});
  block({op: 'addGroupRoleMappingsRealm'});
  verifyGroupRoleMappingsRealmNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Instance`, function () {
  const ev = waitFor({op: 'delete', entity: 'Instance'});
  block({op: 'addInstance'});
  verifyInstanceNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Mapper`, function () {
  const ev = waitFor({op: 'delete', entity: 'Mapper'});
  block({op: 'addMapper'});
  verifyMapperNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Node`, function () {
  const ev = waitFor({op: 'delete', entity: 'Node'});
  block({op: 'addNode'});
  verifyNodeNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete OptionalClientScope`, function () {
  const ev = waitFor({op: 'delete', entity: 'OptionalClientScope'});
  block({op: 'addOptionalClientScope'});
  verifyOptionalClientScopeNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete RequiredAction`, function () {
  const ev = waitFor({op: 'delete', entity: 'RequiredAction'});
  block({op: 'addRequiredAction'});
  verifyRequiredActionNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete RoleByRealmByRoleName`, function () {
  const ev = waitFor({op: 'delete', entity: 'RoleByRealmByRoleName'});
  block({op: 'addRoleByRealmByRoleName'});
  verifyRoleByRealmByRoleNameNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete RolesById`, function () {
  const ev = waitFor({op: 'delete', entity: 'RolesById'});
  block({op: 'addRolesById'});
  verifyRolesByIdNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete RolesByIdComposites`, function () {
  const ev = waitFor({op: 'delete', entity: 'RolesByIdComposites'});
  block({op: 'addRolesByIdComposites'});
  verifyRolesByIdCompositesNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Rotated`, function () {
  const ev = waitFor({op: 'delete', entity: 'Rotated'});
  block({op: 'addRotated'});
  verifyRotatedNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Session`, function () {
  const ev = waitFor({op: 'delete', entity: 'Session'});
  block({op: 'addSession'});
  verifySessionNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete UserByRealmById`, function () {
  const ev = waitFor({op: 'delete', entity: 'UserByRealmById'});
  block({op: 'addUserByRealmById'});
  verifyUserByRealmByIdNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete UserGroup`, function () {
  const ev = waitFor({op: 'delete', entity: 'UserGroup'});
  block({op: 'addUserGroup'});
  verifyUserGroupNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete UserRoleMappingsClient`, function () {
  const ev = waitFor({op: 'delete', entity: 'UserRoleMappingsClient'});
  block({op: 'addUserRoleMappingsClient'});
  verifyUserRoleMappingsClientNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete UserRoleMappingsRealm`, function () {
  const ev = waitFor({op: 'delete', entity: 'UserRoleMappingsRealm'});
  block({op: 'addUserRoleMappingsRealm'});
  verifyUserRoleMappingsRealmNotExists(ev.id);
});

bthread(`HLS PASSIVE: delete Users`, function () {
  const ev = waitFor({op: 'delete', entity: 'Users'});
  block({op: 'addUsers'});
  verifyUsersNotExists(ev.id);
});

