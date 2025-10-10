/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_v1(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingV1(id); } catch (_e) {}
  addV1(id);
  verifyV1Exists(id);
  tryToAddExistingV1(id);
  deleteV1(id);
  verifyV1DoesNotExist(id);
}
