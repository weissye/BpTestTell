/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_api(id, name) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApi(id, name); } catch (_e) {}
  addApi(id, name);
  verifyApiExists(id, name);
  tryToAddExistingApi(id, name);
  deleteApi(id, name);
  verifyApiDoesNotExist(id, name);
}
