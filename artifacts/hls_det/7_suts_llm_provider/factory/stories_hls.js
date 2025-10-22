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

// ===== PASSIVE ASSERTIONS =====

bthread("Machine create verification", function () {
  const e = waitForAnyMachineAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMachine(k, ANY), function () {
    verifyMachineExists(k);
  });
});

bthread("Machine update verification", function () {
  const e = waitForAnyMachineUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMachine(k, ANY), function () {
    verifyMachineUpdated(k);
  });
});

bthread("Machine delete verification", function () {
  const e = waitForAnyMachineDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMachine(k, ANY), function () {
    verifyMachineDoesNotExist(k);
  });
});

bthread("Maintenanceticket create verification", function () {
  const e = waitForAnyMaintenanceticketAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMaintenanceticket(k, ANY), function () {
    verifyMaintenanceticketExists(k);
  });
});

bthread("Maintenanceticket update verification", function () {
  const e = waitForAnyMaintenanceticketUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMaintenanceticket(k, ANY), function () {
    verifyMaintenanceticketUpdated(k);
  });
});

bthread("Maintenanceticket delete verification", function () {
  const e = waitForAnyMaintenanceticketDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMaintenanceticket(k, ANY), function () {
    verifyMaintenanceticketDoesNotExist(k);
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

bthread("Sensorreading create verification", function () {
  const e = waitForAnySensorreadingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSensorreading(k, ANY), function () {
    verifySensorreadingExists(k);
  });
});

bthread("Sensorreading update verification", function () {
  const e = waitForAnySensorreadingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSensorreading(k, ANY), function () {
    verifySensorreadingUpdated(k);
  });
});

bthread("Sensorreading delete verification", function () {
  const e = waitForAnySensorreadingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSensorreading(k, ANY), function () {
    verifySensorreadingDoesNotExist(k);
  });
});

bthread("Workorder create verification", function () {
  const e = waitForAnyWorkorderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkorder(k, ANY), function () {
    verifyWorkorderExists(k);
  });
});

bthread("Workorder update verification", function () {
  const e = waitForAnyWorkorderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkorder(k, ANY), function () {
    verifyWorkorderUpdated(k);
  });
});

bthread("Workorder delete verification", function () {
  const e = waitForAnyWorkorderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWorkorder(k, ANY), function () {
    verifyWorkorderDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Machine", function () {
  const x = waitForAnyMachineAdded();
  block(matchAddMachine(x.id, ANY), function () {});
});

bthread("Guard: Unique Maintenanceticket", function () {
  const x = waitForAnyMaintenanceticketAdded();
  block(matchAddMaintenanceticket(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

bthread("Guard: Unique Sensorreading", function () {
  const x = waitForAnySensorreadingAdded();
  block(matchAddSensorreading(x.id, ANY), function () {});
});

bthread("Guard: Unique Workorder", function () {
  const x = waitForAnyWorkorderAdded();
  block(matchAddWorkorder(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
