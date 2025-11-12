/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_myrealm(id) {
  try { tryToDeleteANonExistingMyrealm(id); } catch (_e) {}
  addMyrealm(id);
  verifyMyrealmExists(id);
  tryToAddExistingMyrealm(id);
  deleteMyrealm(id);
  verifyMyrealmDoesNotExist(id);
}

function lifecycle_v1(realm, userId) {
  try { tryToDeleteANonExistingV1(realm, userId); } catch (_e) {}
  addV1(realm, userId);
  verifyV1Exists(realm, userId);
  tryToAddExistingV1(realm, userId);
  deleteV1(realm, userId);
  verifyV1DoesNotExist(realm, userId);
}

function lifecycle_{realm}(realm, id, alias, executionId, flowAlias, clientScopeId, providerId, roleContainerId, node, provider_id) {
  try { tryToDeleteANonExisting{realm}(realm, id, alias, executionId, flowAlias, clientScopeId, providerId, roleContainerId, node, provider_id); } catch (_e) {}
  add{realm}(realm, id, alias, executionId, flowAlias, clientScopeId, providerId, roleContainerId, node, provider_id);
  verify{realm}Exists(realm, id, alias, executionId, flowAlias, clientScopeId, providerId, roleContainerId, node, provider_id);
  tryToAddExisting{realm}(realm, id, alias, executionId, flowAlias, clientScopeId, providerId, roleContainerId, node, provider_id);
  delete{realm}(realm, id, alias, executionId, flowAlias, clientScopeId, providerId, roleContainerId, node, provider_id);
  verify{realm}DoesNotExist(realm, id, alias, executionId, flowAlias, clientScopeId, providerId, roleContainerId, node, provider_id);
}
