/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_app(name, version) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingApp(name, version); } catch (_e) {}
  addApp(name, version);
  verifyAppExists(name, version);
  tryToAddExistingApp(name, version);
  deleteApp(name, version);
  verifyAppDoesNotExist(name, version);
}

function lifecycle_config(key, value) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingConfig(key, value); } catch (_e) {}
  addConfig(key, value);
  verifyConfigExists(key, value);
  tryToAddExistingConfig(key, value);
  deleteConfig(key, value);
  verifyConfigDoesNotExist(key, value);
}

function lifecycle_env(name) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingEnv(name); } catch (_e) {}
  addEnv(name);
  verifyEnvExists(name);
  tryToAddExistingEnv(name);
  deleteEnv(name);
  verifyEnvDoesNotExist(name);
}

function lifecycle_policie(name) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPolicie(name); } catch (_e) {}
  addPolicie(name);
  verifyPolicieExists(name);
  tryToAddExistingPolicie(name);
  deletePolicie(name);
  verifyPolicieDoesNotExist(name);
}

function lifecycle_release(appId, version) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRelease(appId, version); } catch (_e) {}
  addRelease(appId, version);
  verifyReleaseExists(appId, version);
  tryToAddExistingRelease(appId, version);
  deleteRelease(appId, version);
  verifyReleaseDoesNotExist(appId, version);
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
