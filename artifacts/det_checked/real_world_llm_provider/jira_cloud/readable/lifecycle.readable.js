/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_rest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId); } catch (_e) {}
  addRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId);
  verifyRestExists(issueIdOrKey, projectIdOrKey, propertyKey, fieldId);
  tryToAddExistingRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId);
  deleteRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId);
  verifyRestDoesNotExist(issueIdOrKey, projectIdOrKey, propertyKey, fieldId);
}
