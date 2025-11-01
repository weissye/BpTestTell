// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: config_control
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("AppLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApp(x.id);
  updateApp(x.id);
  updateApp(x.id);
  verifyAppExists(x.id);
  verifyAppUpdated(x.id);
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfig(x.id);
  updateConfig(x.id);
  updateConfig(x.id);
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
});

bthread("EnvLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnv(x.id);
  updateEnv(x.id);
  updateEnv(x.id);
  verifyEnvExists(x.id);
  verifyEnvUpdated(x.id);
});

bthread("PolicyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPolicy(x.id);
  updatePolicy(x.id);
  updatePolicy(x.id);
  verifyPolicyExists(x.id);
  verifyPolicyUpdated(x.id);
});

bthread("ReleasLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReleas(x.id);
  updateReleas(x.id);
  updateReleas(x.id);
  verifyReleasExists(x.id);
  verifyReleasUpdated(x.id);
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReset(x.id);
  updateReset(x.id);
  updateReset(x.id);
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("App create verification", function () {
  const e = waitForAnyAppAdded();
  block(matchDeleteApp(e.id, ANY), function () {
    verifyAppExists(e.id);
  });
});

bthread("App update verification", function () {
  const e = waitForAnyAppUpdated();
  block(matchDeleteApp(e.id, ANY), function () {
    verifyAppUpdated(e.id);
  });
});

bthread("App delete verification", function () {
  const e = waitForAnyAppDeleted();
  block(matchAddApp(e.id, ANY), function () {
    verifyAppDoesNotExist(e.id);
  });
});

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  block(matchDeleteConfig(e.id, ANY), function () {
    verifyConfigExists(e.id);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  block(matchDeleteConfig(e.id, ANY), function () {
    verifyConfigUpdated(e.id);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  block(matchAddConfig(e.id, ANY), function () {
    verifyConfigDoesNotExist(e.id);
  });
});

bthread("Env create verification", function () {
  const e = waitForAnyEnvAdded();
  block(matchDeleteEnv(e.id, ANY), function () {
    verifyEnvExists(e.id);
  });
});

bthread("Env update verification", function () {
  const e = waitForAnyEnvUpdated();
  block(matchDeleteEnv(e.id, ANY), function () {
    verifyEnvUpdated(e.id);
  });
});

bthread("Env delete verification", function () {
  const e = waitForAnyEnvDeleted();
  block(matchAddEnv(e.id, ANY), function () {
    verifyEnvDoesNotExist(e.id);
  });
});

bthread("Policy create verification", function () {
  const e = waitForAnyPolicyAdded();
  block(matchDeletePolicy(e.id, ANY), function () {
    verifyPolicyExists(e.id);
  });
});

bthread("Policy update verification", function () {
  const e = waitForAnyPolicyUpdated();
  block(matchDeletePolicy(e.id, ANY), function () {
    verifyPolicyUpdated(e.id);
  });
});

bthread("Policy delete verification", function () {
  const e = waitForAnyPolicyDeleted();
  block(matchAddPolicy(e.id, ANY), function () {
    verifyPolicyDoesNotExist(e.id);
  });
});

bthread("Releas create verification", function () {
  const e = waitForAnyReleasAdded();
  block(matchDeleteReleas(e.id, ANY), function () {
    verifyReleasExists(e.id);
  });
});

bthread("Releas update verification", function () {
  const e = waitForAnyReleasUpdated();
  block(matchDeleteReleas(e.id, ANY), function () {
    verifyReleasUpdated(e.id);
  });
});

bthread("Releas delete verification", function () {
  const e = waitForAnyReleasDeleted();
  block(matchAddReleas(e.id, ANY), function () {
    verifyReleasDoesNotExist(e.id);
  });
});

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  block(matchDeleteReset(e.id, ANY), function () {
    verifyResetExists(e.id);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  block(matchDeleteReset(e.id, ANY), function () {
    verifyResetUpdated(e.id);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  block(matchAddReset(e.id, ANY), function () {
    verifyResetDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique App", function () {
  const x = waitForAnyAppAdded();
  block(matchAddApp(x.id, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  block(matchAddConfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Env", function () {
  const x = waitForAnyEnvAdded();
  block(matchAddEnv(x.id, ANY), function () {});
});

bthread("Guard: Unique Policy", function () {
  const x = waitForAnyPolicyAdded();
  block(matchAddPolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Releas", function () {
  const x = waitForAnyReleasAdded();
  block(matchAddReleas(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
