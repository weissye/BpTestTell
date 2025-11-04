/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_myrealm(id) {
  try { tryToDeleteANonExistingMyrealm(id); } catch (_e) {}
  addMyrealm(id);
  verifyMyrealmExists(id);
  tryToAddExistingMyrealm(id);
  deleteMyrealm(id);
  verifyMyrealmDoesNotExist(id);
}

function lifecycle_v1(realm, session) {
  try { tryToDeleteANonExistingV1(realm, session); } catch (_e) {}
  addV1(realm, session);
  verifyV1Exists(realm, session);
  tryToAddExistingV1(realm, session);
  deleteV1(realm, session);
  verifyV1DoesNotExist(realm, session);
}

function lifecycle_{realm}(realm, id, client) {
  try { tryToDeleteANonExisting{realm}(realm, id, client); } catch (_e) {}
  add{realm}(realm, id, client);
  verify{realm}Exists(realm, id, client);
  tryToAddExisting{realm}(realm, id, client);
  delete{realm}(realm, id, client);
  verify{realm}DoesNotExist(realm, id, client);
}
