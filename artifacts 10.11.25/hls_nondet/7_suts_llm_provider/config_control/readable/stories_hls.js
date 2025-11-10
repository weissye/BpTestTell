// ---- crud:app:nondet:1:1 ----
bp.registerBThread("crud:app:nondet:1:1", function () {
  let id = 200;
  addApp(id);
  tryToAddExistingApp(id);
  verifyAppExists(id);
  updateApp(id);
  deleteApp(id);
  tryToDeleteANonExistingApp(id);
  verifyAppDoesNotExist(id);
  
});

// ---- crud:app:nondet:1:2 ----
bp.registerBThread("crud:app:nondet:1:2", function () {
  let id = 200;
  addApp(id);
  tryToAddExistingApp(id);
  updateApp(id);
  verifyAppExists(id);
  deleteApp(id);
  tryToDeleteANonExistingApp(id);
  verifyAppDoesNotExist(id);
  
});

// ---- crud:app:nondet:1:3 ----
bp.registerBThread("crud:app:nondet:1:3", function () {
  let id = 200;
  addApp(id);
  tryToAddExistingApp(id);
  verifyAppExists(id);
  deleteApp(id);
  tryToDeleteANonExistingApp(id);
  verifyAppDoesNotExist(id);
  
});

// ---- crud:app:nondet:1:4 ----
bp.registerBThread("crud:app:nondet:1:4", function () {
  let id = 201;
  addApp(id);
  tryToAddExistingApp(id);
  deleteApp(id);
  tryToDeleteANonExistingApp(id);
  verifyAppDoesNotExist(id);
  
});

// ---- crud:config:nondet:2:1 ----
bp.registerBThread("crud:config:nondet:2:1", function () {
  let id = 201;
  addConfig(id);
  tryToAddExistingConfig(id);
  verifyConfigExists(id);
  updateConfig(id);
  deleteConfig(id);
  tryToDeleteANonExistingConfig(id);
  verifyConfigDoesNotExist(id);
  
});

// ---- crud:config:nondet:2:2 ----
bp.registerBThread("crud:config:nondet:2:2", function () {
  let id = 201;
  addConfig(id);
  tryToAddExistingConfig(id);
  updateConfig(id);
  verifyConfigExists(id);
  deleteConfig(id);
  tryToDeleteANonExistingConfig(id);
  verifyConfigDoesNotExist(id);
  
});

// ---- crud:config:nondet:2:3 ----
bp.registerBThread("crud:config:nondet:2:3", function () {
  let id = 201;
  addConfig(id);
  tryToAddExistingConfig(id);
  verifyConfigExists(id);
  deleteConfig(id);
  tryToDeleteANonExistingConfig(id);
  verifyConfigDoesNotExist(id);
  
});

// ---- crud:config:nondet:2:4 ----
bp.registerBThread("crud:config:nondet:2:4", function () {
  let id = 202;
  addConfig(id);
  tryToAddExistingConfig(id);
  deleteConfig(id);
  tryToDeleteANonExistingConfig(id);
  verifyConfigDoesNotExist(id);
  
});

// ---- crud:env:nondet:3:1 ----
bp.registerBThread("crud:env:nondet:3:1", function () {
  let id = 202;
  addEnv(id);
  tryToAddExistingEnv(id);
  verifyEnvExists(id);
  updateEnv(id);
  deleteEnv(id);
  tryToDeleteANonExistingEnv(id);
  verifyEnvDoesNotExist(id);
  
});

// ---- crud:env:nondet:3:2 ----
bp.registerBThread("crud:env:nondet:3:2", function () {
  let id = 202;
  addEnv(id);
  tryToAddExistingEnv(id);
  updateEnv(id);
  verifyEnvExists(id);
  deleteEnv(id);
  tryToDeleteANonExistingEnv(id);
  verifyEnvDoesNotExist(id);
  
});

// ---- crud:env:nondet:3:3 ----
bp.registerBThread("crud:env:nondet:3:3", function () {
  let id = 202;
  addEnv(id);
  tryToAddExistingEnv(id);
  verifyEnvExists(id);
  deleteEnv(id);
  tryToDeleteANonExistingEnv(id);
  verifyEnvDoesNotExist(id);
  
});

// ---- crud:env:nondet:3:4 ----
bp.registerBThread("crud:env:nondet:3:4", function () {
  let id = 203;
  addEnv(id);
  tryToAddExistingEnv(id);
  deleteEnv(id);
  tryToDeleteANonExistingEnv(id);
  verifyEnvDoesNotExist(id);
  
});

// ---- crud:policie:nondet:4:1 ----
bp.registerBThread("crud:policie:nondet:4:1", function () {
  let id = 203;
  addPolicie(id);
  tryToAddExistingPolicie(id);
  verifyPolicieExists(id);
  updatePolicie(id);
  deletePolicie(id);
  tryToDeleteANonExistingPolicie(id);
  verifyPolicieDoesNotExist(id);
  
});

// ---- crud:policie:nondet:4:2 ----
bp.registerBThread("crud:policie:nondet:4:2", function () {
  let id = 203;
  addPolicie(id);
  tryToAddExistingPolicie(id);
  updatePolicie(id);
  verifyPolicieExists(id);
  deletePolicie(id);
  tryToDeleteANonExistingPolicie(id);
  verifyPolicieDoesNotExist(id);
  
});

// ---- crud:policie:nondet:4:3 ----
bp.registerBThread("crud:policie:nondet:4:3", function () {
  let id = 203;
  addPolicie(id);
  tryToAddExistingPolicie(id);
  verifyPolicieExists(id);
  deletePolicie(id);
  tryToDeleteANonExistingPolicie(id);
  verifyPolicieDoesNotExist(id);
  
});

// ---- crud:policie:nondet:4:4 ----
bp.registerBThread("crud:policie:nondet:4:4", function () {
  let id = 204;
  addPolicie(id);
  tryToAddExistingPolicie(id);
  deletePolicie(id);
  tryToDeleteANonExistingPolicie(id);
  verifyPolicieDoesNotExist(id);
  
});

// ---- crud:release:nondet:5:1 ----
bp.registerBThread("crud:release:nondet:5:1", function () {
  let id = 204;
  addRelease(id);
  tryToAddExistingRelease(id);
  verifyReleaseExists(id);
  updateRelease(id);
  deleteRelease(id);
  tryToDeleteANonExistingRelease(id);
  verifyReleaseDoesNotExist(id);
  
});

// ---- crud:release:nondet:5:2 ----
bp.registerBThread("crud:release:nondet:5:2", function () {
  let id = 204;
  addRelease(id);
  tryToAddExistingRelease(id);
  updateRelease(id);
  verifyReleaseExists(id);
  deleteRelease(id);
  tryToDeleteANonExistingRelease(id);
  verifyReleaseDoesNotExist(id);
  
});

// ---- crud:release:nondet:5:3 ----
bp.registerBThread("crud:release:nondet:5:3", function () {
  let id = 204;
  addRelease(id);
  tryToAddExistingRelease(id);
  verifyReleaseExists(id);
  deleteRelease(id);
  tryToDeleteANonExistingRelease(id);
  verifyReleaseDoesNotExist(id);
  
});

// ---- crud:release:nondet:5:4 ----
bp.registerBThread("crud:release:nondet:5:4", function () {
  let id = 205;
  addRelease(id);
  tryToAddExistingRelease(id);
  deleteRelease(id);
  tryToDeleteANonExistingRelease(id);
  verifyReleaseDoesNotExist(id);
  
});

// ---- crud:reset:nondet:6:1 ----
bp.registerBThread("crud:reset:nondet:6:1", function () {
  let id = 205;
  addReset(id);
  tryToAddExistingReset(id);
  verifyResetExists(id);
  updateReset(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:6:2 ----
bp.registerBThread("crud:reset:nondet:6:2", function () {
  let id = 205;
  addReset(id);
  tryToAddExistingReset(id);
  updateReset(id);
  verifyResetExists(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:6:3 ----
bp.registerBThread("crud:reset:nondet:6:3", function () {
  let id = 205;
  addReset(id);
  tryToAddExistingReset(id);
  verifyResetExists(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:6:4 ----
bp.registerBThread("crud:reset:nondet:6:4", function () {
  let id = 206;
  addReset(id);
  tryToAddExistingReset(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});
