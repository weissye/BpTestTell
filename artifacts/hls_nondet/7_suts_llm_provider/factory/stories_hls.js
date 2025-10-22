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
    if (Object.prototype.hasOwnProperty.call(e, key) && typeof e[key] !== 'function') return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key) && typeof e.data[key] !== 'function') return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key) && typeof e.payload[key] !== 'function') return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id') && typeof e['id'] !== 'function') return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc') && typeof e['ndc'] !== 'function') return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
  if (typeof v === 'function') return '1001';
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


bthread("MachineLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMachine(x.id);
  const e_add = waitForMachineAdded(id);
  block(matchDeleteMachine(id), function () {
    verifyMachineExists(id);
  });
  updateMachine(x.id);
  updateMachine(x.id);
  const e_upd = waitForMachineUpdated(id);
  block(matchDeleteMachine(id), function () {
    verifyMachineUpdated(id);
  });
  deleteMachine(x.id);
  const e_del = waitForMachineDeleted(id);
  block(matchAddMachine(id), function () {
    verifyMachineDoesNotExist(id);
  });
});

bthread("MaintenanceticketLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMaintenanceticket(x.id);
  const e_add = waitForMaintenanceticketAdded(id);
  block(matchDeleteMaintenanceticket(id), function () {
    verifyMaintenanceticketExists(id);
  });
  updateMaintenanceticket(x.id);
  updateMaintenanceticket(x.id);
  const e_upd = waitForMaintenanceticketUpdated(id);
  block(matchDeleteMaintenanceticket(id), function () {
    verifyMaintenanceticketUpdated(id);
  });
  deleteMaintenanceticket(x.id);
  const e_del = waitForMaintenanceticketDeleted(id);
  block(matchAddMaintenanceticket(id), function () {
    verifyMaintenanceticketDoesNotExist(id);
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

bthread("SensorreadingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSensorreading(x.id);
  const e_add = waitForSensorreadingAdded(id);
  block(matchDeleteSensorreading(id), function () {
    verifySensorreadingExists(id);
  });
  updateSensorreading(x.id);
  updateSensorreading(x.id);
  const e_upd = waitForSensorreadingUpdated(id);
  block(matchDeleteSensorreading(id), function () {
    verifySensorreadingUpdated(id);
  });
  deleteSensorreading(x.id);
  const e_del = waitForSensorreadingDeleted(id);
  block(matchAddSensorreading(id), function () {
    verifySensorreadingDoesNotExist(id);
  });
});

bthread("WorkorderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWorkorder(x.id);
  const e_add = waitForWorkorderAdded(id);
  block(matchDeleteWorkorder(id), function () {
    verifyWorkorderExists(id);
  });
  updateWorkorder(x.id);
  updateWorkorder(x.id);
  const e_upd = waitForWorkorderUpdated(id);
  block(matchDeleteWorkorder(id), function () {
    verifyWorkorderUpdated(id);
  });
  deleteWorkorder(x.id);
  const e_del = waitForWorkorderDeleted(id);
  block(matchAddWorkorder(id), function () {
    verifyWorkorderDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Machine nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMachine(x.id);
  for (var i=0; i<steps; i++) {
    updateMachine(x.id);
  }
  if (pick([true,false])) { deleteMachine(x.id); }
  verifyMachineExists(x.id);
  verifyMachineUpdated(x.id);
});

bthread("Machine nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMachine(a.id);
  block(matchAddMachine(a.id, ANY), function () {});
  addMachine(b.id);
});

bthread("Maintenanceticket nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMaintenanceticket(x.id);
  for (var i=0; i<steps; i++) {
    updateMaintenanceticket(x.id);
  }
  if (pick([true,false])) { deleteMaintenanceticket(x.id); }
  verifyMaintenanceticketExists(x.id);
  verifyMaintenanceticketUpdated(x.id);
});

bthread("Maintenanceticket nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMaintenanceticket(a.id);
  block(matchAddMaintenanceticket(a.id, ANY), function () {});
  addMaintenanceticket(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReset(a.id);
  block(matchAddReset(a.id, ANY), function () {});
  addReset(b.id);
});

bthread("Sensorreading nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSensorreading(x.id);
  for (var i=0; i<steps; i++) {
    updateSensorreading(x.id);
  }
  if (pick([true,false])) { deleteSensorreading(x.id); }
  verifySensorreadingExists(x.id);
  verifySensorreadingUpdated(x.id);
});

bthread("Sensorreading nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSensorreading(a.id);
  block(matchAddSensorreading(a.id, ANY), function () {});
  addSensorreading(b.id);
});

bthread("Workorder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addWorkorder(x.id);
  for (var i=0; i<steps; i++) {
    updateWorkorder(x.id);
  }
  if (pick([true,false])) { deleteWorkorder(x.id); }
  verifyWorkorderExists(x.id);
  verifyWorkorderUpdated(x.id);
});

bthread("Workorder nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWorkorder(a.id);
  block(matchAddWorkorder(a.id, ANY), function () {});
  addWorkorder(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Machine create verification", function () {
  const e = waitForAnyMachineAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMachine(k), function () {
    verifyMachineExists(k);
  });
});

bthread("Machine update verification", function () {
  const e = waitForAnyMachineUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMachine(k), function () {
    verifyMachineUpdated(k);
  });
});

bthread("Machine delete verification", function () {
  const e = waitForAnyMachineDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMachine(k), function () {
    verifyMachineDoesNotExist(k);
  });
});

bthread("Maintenanceticket create verification", function () {
  const e = waitForAnyMaintenanceticketAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMaintenanceticket(k), function () {
    verifyMaintenanceticketExists(k);
  });
});

bthread("Maintenanceticket update verification", function () {
  const e = waitForAnyMaintenanceticketUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMaintenanceticket(k), function () {
    verifyMaintenanceticketUpdated(k);
  });
});

bthread("Maintenanceticket delete verification", function () {
  const e = waitForAnyMaintenanceticketDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMaintenanceticket(k), function () {
    verifyMaintenanceticketDoesNotExist(k);
  });
});

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReset(k), function () {
    verifyResetExists(k);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReset(k), function () {
    verifyResetUpdated(k);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReset(k), function () {
    verifyResetDoesNotExist(k);
  });
});

bthread("Sensorreading create verification", function () {
  const e = waitForAnySensorreadingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSensorreading(k), function () {
    verifySensorreadingExists(k);
  });
});

bthread("Sensorreading update verification", function () {
  const e = waitForAnySensorreadingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSensorreading(k), function () {
    verifySensorreadingUpdated(k);
  });
});

bthread("Sensorreading delete verification", function () {
  const e = waitForAnySensorreadingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSensorreading(k), function () {
    verifySensorreadingDoesNotExist(k);
  });
});

bthread("Workorder create verification", function () {
  const e = waitForAnyWorkorderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkorder(k), function () {
    verifyWorkorderExists(k);
  });
});

bthread("Workorder update verification", function () {
  const e = waitForAnyWorkorderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkorder(k), function () {
    verifyWorkorderUpdated(k);
  });
});

bthread("Workorder delete verification", function () {
  const e = waitForAnyWorkorderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWorkorder(k), function () {
    verifyWorkorderDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Machine", function () {
  const x = waitForAnyMachineAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMachine(k, ANY), function () {});
});

bthread("Guard: Unique Maintenanceticket", function () {
  const x = waitForAnyMaintenanceticketAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMaintenanceticket(k, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReset(k, ANY), function () {});
});

bthread("Guard: Unique Sensorreading", function () {
  const x = waitForAnySensorreadingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSensorreading(k, ANY), function () {});
});

bthread("Guard: Unique Workorder", function () {
  const x = waitForAnyWorkorderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWorkorder(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
