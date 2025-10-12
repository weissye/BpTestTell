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

function lifecycle_v1(realm, userId, session) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(realm, userId, session); } catch (_e) {}
  addV1(realm, userId, session);
  verifyV1Exists(realm, userId, session);
  tryToAddExistingV1(realm, userId, session);
  deleteV1(realm, userId, session);
  verifyV1DoesNotExist(realm, userId, session);
}

function lifecycle_{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExisting{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid); } catch (_e) {}
  add{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid);
  verify{realm}Exists(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid);
  tryToAddExisting{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid);
  delete{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid);
  verify{realm}DoesNotExist(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid);
}
