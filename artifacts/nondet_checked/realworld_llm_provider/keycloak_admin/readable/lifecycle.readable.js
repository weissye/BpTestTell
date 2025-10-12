/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_myrealm(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMyrealm(id); } catch (_e) {}
  addMyrealm(id);
  verifyMyrealmExists(id);
  tryToAddExistingMyrealm(id);
  deleteMyrealm(id);
  verifyMyrealmDoesNotExist(id);
}

function lifecycle_v1(realm, id, id1, id2, protocol) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(realm, id, id1, id2, protocol); } catch (_e) {}
  addV1(realm, id, id1, id2, protocol);
  verifyV1Exists(realm, id, id1, id2, protocol);
  tryToAddExistingV1(realm, id, id1, id2, protocol);
  deleteV1(realm, id, id1, id2, protocol);
  verifyV1DoesNotExist(realm, id, id1, id2, protocol);
}

function lifecycle_{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExisting{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node); } catch (_e) {}
  add{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node);
  verify{realm}Exists(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node);
  tryToAddExisting{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node);
  delete{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node);
  verify{realm}DoesNotExist(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node);
}
