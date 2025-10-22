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

// --- _pk(e,key): robust primary-key extractor for wait/match events ---
function _pk(e, key) {
  if (e == null) return undefined;
  if (typeof e === 'object') {
    if (Object.prototype.hasOwnProperty.call(e, key)) return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key)) return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key)) return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id')) return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc')) return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
  if (typeof v === 'object') {
    if ('id' in v) return String(v.id);
    if ('ndc' in v) return String(v.ndc);
    const ks = Object.keys(v);
    if (ks.length) return String(v[ks[0]]);
    return '1001';
  }
  return String(v);
}

// ===== ACTIVE LIFECYCLES =====


bthread("AppLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApp(x.id);
  const e_add = waitForAppAdded(id);
  block(matchDeleteApp(id), function () {
    verifyAppExists(id);
  });
  updateApp(x.id);
  updateApp(x.id);
  const e_upd = waitForAppUpdated(id);
  block(matchDeleteApp(id), function () {
    verifyAppUpdated(id);
  });
  deleteApp(x.id);
  const e_del = waitForAppDeleted(id);
  block(matchAddApp(id), function () {
    verifyAppDoesNotExist(id);
  });
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfig(x.id);
  const e_add = waitForConfigAdded(id);
  block(matchDeleteConfig(id), function () {
    verifyConfigExists(id);
  });
  updateConfig(x.id);
  updateConfig(x.id);
  const e_upd = waitForConfigUpdated(id);
  block(matchDeleteConfig(id), function () {
    verifyConfigUpdated(id);
  });
  deleteConfig(x.id);
  const e_del = waitForConfigDeleted(id);
  block(matchAddConfig(id), function () {
    verifyConfigDoesNotExist(id);
  });
});

bthread("EnvLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEnv(x.id);
  const e_add = waitForEnvAdded(id);
  block(matchDeleteEnv(id), function () {
    verifyEnvExists(id);
  });
  updateEnv(x.id);
  updateEnv(x.id);
  const e_upd = waitForEnvUpdated(id);
  block(matchDeleteEnv(id), function () {
    verifyEnvUpdated(id);
  });
  deleteEnv(x.id);
  const e_del = waitForEnvDeleted(id);
  block(matchAddEnv(id), function () {
    verifyEnvDoesNotExist(id);
  });
});

bthread("PolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPolicy(x.id);
  const e_add = waitForPolicyAdded(id);
  block(matchDeletePolicy(id), function () {
    verifyPolicyExists(id);
  });
  updatePolicy(x.id);
  updatePolicy(x.id);
  const e_upd = waitForPolicyUpdated(id);
  block(matchDeletePolicy(id), function () {
    verifyPolicyUpdated(id);
  });
  deletePolicy(x.id);
  const e_del = waitForPolicyDeleted(id);
  block(matchAddPolicy(id), function () {
    verifyPolicyDoesNotExist(id);
  });
});

bthread("ReleasLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReleas(x.id);
  const e_add = waitForReleasAdded(id);
  block(matchDeleteReleas(id), function () {
    verifyReleasExists(id);
  });
  updateReleas(x.id);
  updateReleas(x.id);
  const e_upd = waitForReleasUpdated(id);
  block(matchDeleteReleas(id), function () {
    verifyReleasUpdated(id);
  });
  deleteReleas(x.id);
  const e_del = waitForReleasDeleted(id);
  block(matchAddReleas(id), function () {
    verifyReleasDoesNotExist(id);
  });
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReset(x.id);
  const e_add = waitForResetAdded(id);
  block(matchDeleteReset(id), function () {
    verifyResetExists(id);
  });
  updateReset(x.id);
  updateReset(x.id);
  const e_upd = waitForResetUpdated(id);
  block(matchDeleteReset(id), function () {
    verifyResetUpdated(id);
  });
  deleteReset(x.id);
  const e_del = waitForResetDeleted(id);
  block(matchAddReset(id), function () {
    verifyResetDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("App nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApp(k, ANY), function () {
    verifyAppExists(k);
  });
});

bthread("App update verification", function () {
  const e = waitForAnyAppUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApp(k, ANY), function () {
    verifyAppUpdated(k);
  });
});

bthread("App delete verification", function () {
  const e = waitForAnyAppDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApp(k, ANY), function () {
    verifyAppDoesNotExist(k);
  });
});

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfig(k, ANY), function () {
    verifyConfigExists(k);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfig(k, ANY), function () {
    verifyConfigUpdated(k);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfig(k, ANY), function () {
    verifyConfigDoesNotExist(k);
  });
});

bthread("Env create verification", function () {
  const e = waitForAnyEnvAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnv(k, ANY), function () {
    verifyEnvExists(k);
  });
});

bthread("Env update verification", function () {
  const e = waitForAnyEnvUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnv(k, ANY), function () {
    verifyEnvUpdated(k);
  });
});

bthread("Env delete verification", function () {
  const e = waitForAnyEnvDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEnv(k, ANY), function () {
    verifyEnvDoesNotExist(k);
  });
});

bthread("Policy create verification", function () {
  const e = waitForAnyPolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePolicy(k, ANY), function () {
    verifyPolicyExists(k);
  });
});

bthread("Policy update verification", function () {
  const e = waitForAnyPolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePolicy(k, ANY), function () {
    verifyPolicyUpdated(k);
  });
});

bthread("Policy delete verification", function () {
  const e = waitForAnyPolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPolicy(k, ANY), function () {
    verifyPolicyDoesNotExist(k);
  });
});

bthread("Releas create verification", function () {
  const e = waitForAnyReleasAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReleas(k, ANY), function () {
    verifyReleasExists(k);
  });
});

bthread("Releas update verification", function () {
  const e = waitForAnyReleasUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReleas(k, ANY), function () {
    verifyReleasUpdated(k);
  });
});

bthread("Releas delete verification", function () {
  const e = waitForAnyReleasDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReleas(k, ANY), function () {
    verifyReleasDoesNotExist(k);
  });
});

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReset(k, ANY), function () {
    verifyResetExists(k);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReset(k, ANY), function () {
    verifyResetUpdated(k);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReset(k, ANY), function () {
    verifyResetDoesNotExist(k);
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
