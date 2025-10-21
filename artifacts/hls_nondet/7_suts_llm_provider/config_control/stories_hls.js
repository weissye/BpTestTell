// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// --- pick() shim: prefer BPjs nondet, else random fallback ---
if (typeof pick === 'undefined') {
  function pick(options) {
    if (typeof bp !== 'undefined' && typeof bp.pickFrom === 'function') {
      return bp.pickFrom(options); // nondeterministic exploration
    }
    // fallback for plain JS execution
    return options[Math.floor(Math.random() * options.length)];
  }
}

// ===== ACTIVE LIFECYCLES =====


bthread("AppLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApp(x.id);
  updateApp(x.id);
  updateApp(x.id);
  verifyAppExists(x.id);
  verifyAppUpdated(x.id);
  deleteApp(x.id);
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addConfig(x.id);
  updateConfig(x.id);
  updateConfig(x.id);
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
  deleteConfig(x.id);
});

bthread("EnvLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnv(x.id);
  updateEnv(x.id);
  updateEnv(x.id);
  verifyEnvExists(x.id);
  verifyEnvUpdated(x.id);
  deleteEnv(x.id);
});

bthread("PolicyLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPolicy(x.id);
  updatePolicy(x.id);
  updatePolicy(x.id);
  verifyPolicyExists(x.id);
  verifyPolicyUpdated(x.id);
  deletePolicy(x.id);
});

bthread("ReleasLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReleas(x.id);
  updateReleas(x.id);
  updateReleas(x.id);
  verifyReleasExists(x.id);
  verifyReleasUpdated(x.id);
  deleteReleas(x.id);
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReset(x.id);
  updateReset(x.id);
  updateReset(x.id);
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
  deleteReset(x.id);
});

// ===== NONDET VARIANTS =====

bthread("App nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "App_id_N"}]);
  const steps = pick([0,1,2,10]);
  addApp(x.id);
  for (var i=0; i<steps; i++) {
    updateApp(x.id);
  }
  if (pick([true,false])) { deleteApp(x.id); }
  verifyAppExists(x.id);
  verifyAppUpdated(x.id);
});

bthread("App nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApp(a.id);
  block(matchAddApp(a.id, ANY), function () {});
  addApp(b.id);
});

bthread("Config nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Config_id_N"}]);
  const steps = pick([0,1,2,10]);
  addConfig(x.id);
  for (var i=0; i<steps; i++) {
    updateConfig(x.id);
  }
  if (pick([true,false])) { deleteConfig(x.id); }
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
});

bthread("Config nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConfig(a.id);
  block(matchAddConfig(a.id, ANY), function () {});
  addConfig(b.id);
});

bthread("Env nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Env_id_N"}]);
  const steps = pick([0,1,2,10]);
  addEnv(x.id);
  for (var i=0; i<steps; i++) {
    updateEnv(x.id);
  }
  if (pick([true,false])) { deleteEnv(x.id); }
  verifyEnvExists(x.id);
  verifyEnvUpdated(x.id);
});

bthread("Env nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEnv(a.id);
  block(matchAddEnv(a.id, ANY), function () {});
  addEnv(b.id);
});

bthread("Policy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Policy_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPolicy(x.id);
  for (var i=0; i<steps; i++) {
    updatePolicy(x.id);
  }
  if (pick([true,false])) { deletePolicy(x.id); }
  verifyPolicyExists(x.id);
  verifyPolicyUpdated(x.id);
});

bthread("Policy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPolicy(a.id);
  block(matchAddPolicy(a.id, ANY), function () {});
  addPolicy(b.id);
});

bthread("Releas nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Releas_id_N"}]);
  const steps = pick([0,1,2,10]);
  addReleas(x.id);
  for (var i=0; i<steps; i++) {
    updateReleas(x.id);
  }
  if (pick([true,false])) { deleteReleas(x.id); }
  verifyReleasExists(x.id);
  verifyReleasUpdated(x.id);
});

bthread("Releas nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReleas(a.id);
  block(matchAddReleas(a.id, ANY), function () {});
  addReleas(b.id);
});

bthread("Reset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Reset_id_N"}]);
  const steps = pick([0,1,2,10]);
  addReset(x.id);
  for (var i=0; i<steps; i++) {
    updateReset(x.id);
  }
  if (pick([true,false])) { deleteReset(x.id); }
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
});

bthread("Reset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReset(a.id);
  block(matchAddReset(a.id, ANY), function () {});
  addReset(b.id);
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
