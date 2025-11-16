/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_myrealm(id) {
  try { tryToDeleteANonExistingMyrealm(id); } catch (_e) {}
  addMyrealm(id);
  verifyMyrealmExists(id);
  tryToAddExistingMyrealm(id);
  deleteMyrealm(id);
  verifyMyrealmDoesNotExist(id);
}

function lifecycle_v1(realm, userId, session) {
  try { tryToDeleteANonExistingV1(realm, userId, session); } catch (_e) {}
  addV1(realm, userId, session);
  verifyV1Exists(realm, userId, session);
  tryToAddExistingV1(realm, userId, session);
  deleteV1(realm, userId, session);
  verifyV1DoesNotExist(realm, userId, session);
}

function lifecycle_{realm}(realm, alias, id, provider_id) {
  try { tryToDeleteANonExisting{realm}(realm, alias, id, provider_id); } catch (_e) {}
  add{realm}(realm, alias, id, provider_id);
  verify{realm}Exists(realm, alias, id, provider_id);
  tryToAddExisting{realm}(realm, alias, id, provider_id);
  delete{realm}(realm, alias, id, provider_id);
  verify{realm}DoesNotExist(realm, alias, id, provider_id);
}
