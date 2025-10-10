/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_app(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApp(id); } catch (_e) {}
  addApp(id);
  verifyAppExists(id);
  tryToAddExistingApp(id);
  deleteApp(id);
  verifyAppDoesNotExist(id);
}

function lifecycle_config(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingConfig(id); } catch (_e) {}
  addConfig(id);
  verifyConfigExists(id);
  tryToAddExistingConfig(id);
  deleteConfig(id);
  verifyConfigDoesNotExist(id);
}

function lifecycle_env(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingEnv(id); } catch (_e) {}
  addEnv(id);
  verifyEnvExists(id);
  tryToAddExistingEnv(id);
  deleteEnv(id);
  verifyEnvDoesNotExist(id);
}

function lifecycle_policie(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPolicie(id); } catch (_e) {}
  addPolicie(id);
  verifyPolicieExists(id);
  tryToAddExistingPolicie(id);
  deletePolicie(id);
  verifyPolicieDoesNotExist(id);
}

function lifecycle_release(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRelease(id); } catch (_e) {}
  addRelease(id);
  verifyReleaseExists(id);
  tryToAddExistingRelease(id);
  deleteRelease(id);
  verifyReleaseDoesNotExist(id);
}

function lifecycle_reset(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingReset(id); } catch (_e) {}
  addReset(id);
  verifyResetExists(id);
  tryToAddExistingReset(id);
  deleteReset(id);
  verifyResetDoesNotExist(id);
}
