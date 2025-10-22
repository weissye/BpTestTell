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


bthread("ApproveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApprove(x.id);
  const e_add = waitForApproveAdded(id);
  block(matchDeleteApprove(id), function () {
    verifyApproveExists(id);
  });
  updateApprove(x.id);
  updateApprove(x.id);
  const e_upd = waitForApproveUpdated(id);
  block(matchDeleteApprove(id), function () {
    verifyApproveUpdated(id);
  });
  deleteApprove(x.id);
  const e_del = waitForApproveDeleted(id);
  block(matchAddApprove(id), function () {
    verifyApproveDoesNotExist(id);
  });
});

bthread("CarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCar(x.id);
  const e_add = waitForCarAdded(id);
  block(matchDeleteCar(id), function () {
    verifyCarExists(id);
  });
  updateCar(x.id);
  updateCar(x.id);
  const e_upd = waitForCarUpdated(id);
  block(matchDeleteCar(id), function () {
    verifyCarUpdated(id);
  });
  deleteCar(x.id);
  const e_del = waitForCarDeleted(id);
  block(matchAddCar(id), function () {
    verifyCarDoesNotExist(id);
  });
});

bthread("ChainLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChain(x.id);
  const e_add = waitForChainAdded(id);
  block(matchDeleteChain(id), function () {
    verifyChainExists(id);
  });
  updateChain(x.id);
  updateChain(x.id);
  const e_upd = waitForChainUpdated(id);
  block(matchDeleteChain(id), function () {
    verifyChainUpdated(id);
  });
  deleteChain(x.id);
  const e_del = waitForChainDeleted(id);
  block(matchAddChain(id), function () {
    verifyChainDoesNotExist(id);
  });
});

bthread("CloseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClose(x.id);
  const e_add = waitForCloseAdded(id);
  block(matchDeleteClose(id), function () {
    verifyCloseExists(id);
  });
  updateClose(x.id);
  updateClose(x.id);
  const e_upd = waitForCloseUpdated(id);
  block(matchDeleteClose(id), function () {
    verifyCloseUpdated(id);
  });
  deleteClose(x.id);
  const e_del = waitForCloseDeleted(id);
  block(matchAddClose(id), function () {
    verifyCloseDoesNotExist(id);
  });
});

bthread("CustomerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomer(x.id);
  const e_add = waitForCustomerAdded(id);
  block(matchDeleteCustomer(id), function () {
    verifyCustomerExists(id);
  });
  updateCustomer(x.id);
  updateCustomer(x.id);
  const e_upd = waitForCustomerUpdated(id);
  block(matchDeleteCustomer(id), function () {
    verifyCustomerUpdated(id);
  });
  deleteCustomer(x.id);
  const e_del = waitForCustomerDeleted(id);
  block(matchAddCustomer(id), function () {
    verifyCustomerDoesNotExist(id);
  });
});

bthread("GarageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGarage(x.id);
  const e_add = waitForGarageAdded(id);
  block(matchDeleteGarage(id), function () {
    verifyGarageExists(id);
  });
  updateGarage(x.id);
  updateGarage(x.id);
  const e_upd = waitForGarageUpdated(id);
  block(matchDeleteGarage(id), function () {
    verifyGarageUpdated(id);
  });
  deleteGarage(x.id);
  const e_del = waitForGarageDeleted(id);
  block(matchAddGarage(id), function () {
    verifyGarageDoesNotExist(id);
  });
});

bthread("PeriodicmaintenanceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPeriodicmaintenance(x.id);
  const e_add = waitForPeriodicmaintenanceAdded(id);
  block(matchDeletePeriodicmaintenance(id), function () {
    verifyPeriodicmaintenanceExists(id);
  });
  updatePeriodicmaintenance(x.id);
  updatePeriodicmaintenance(x.id);
  const e_upd = waitForPeriodicmaintenanceUpdated(id);
  block(matchDeletePeriodicmaintenance(id), function () {
    verifyPeriodicmaintenanceUpdated(id);
  });
  deletePeriodicmaintenance(x.id);
  const e_del = waitForPeriodicmaintenanceDeleted(id);
  block(matchAddPeriodicmaintenance(id), function () {
    verifyPeriodicmaintenanceDoesNotExist(id);
  });
});

bthread("RepairorderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRepairorder(x.id);
  const e_add = waitForRepairorderAdded(id);
  block(matchDeleteRepairorder(id), function () {
    verifyRepairorderExists(id);
  });
  updateRepairorder(x.id);
  updateRepairorder(x.id);
  const e_upd = waitForRepairorderUpdated(id);
  block(matchDeleteRepairorder(id), function () {
    verifyRepairorderUpdated(id);
  });
  deleteRepairorder(x.id);
  const e_del = waitForRepairorderDeleted(id);
  block(matchAddRepairorder(id), function () {
    verifyRepairorderDoesNotExist(id);
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

// ===== PASSIVE ASSERTIONS =====

bthread("Approve create verification", function () {
  const e = waitForAnyApproveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApprove(k), function () {
    verifyApproveExists(k);
  });
});

bthread("Approve update verification", function () {
  const e = waitForAnyApproveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApprove(k), function () {
    verifyApproveUpdated(k);
  });
});

bthread("Approve delete verification", function () {
  const e = waitForAnyApproveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApprove(k), function () {
    verifyApproveDoesNotExist(k);
  });
});

bthread("Car create verification", function () {
  const e = waitForAnyCarAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCar(k), function () {
    verifyCarExists(k);
  });
});

bthread("Car update verification", function () {
  const e = waitForAnyCarUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCar(k), function () {
    verifyCarUpdated(k);
  });
});

bthread("Car delete verification", function () {
  const e = waitForAnyCarDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCar(k), function () {
    verifyCarDoesNotExist(k);
  });
});

bthread("Chain create verification", function () {
  const e = waitForAnyChainAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChain(k), function () {
    verifyChainExists(k);
  });
});

bthread("Chain update verification", function () {
  const e = waitForAnyChainUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChain(k), function () {
    verifyChainUpdated(k);
  });
});

bthread("Chain delete verification", function () {
  const e = waitForAnyChainDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChain(k), function () {
    verifyChainDoesNotExist(k);
  });
});

bthread("Close create verification", function () {
  const e = waitForAnyCloseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClose(k), function () {
    verifyCloseExists(k);
  });
});

bthread("Close update verification", function () {
  const e = waitForAnyCloseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClose(k), function () {
    verifyCloseUpdated(k);
  });
});

bthread("Close delete verification", function () {
  const e = waitForAnyCloseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClose(k), function () {
    verifyCloseDoesNotExist(k);
  });
});

bthread("Customer create verification", function () {
  const e = waitForAnyCustomerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomer(k), function () {
    verifyCustomerExists(k);
  });
});

bthread("Customer update verification", function () {
  const e = waitForAnyCustomerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomer(k), function () {
    verifyCustomerUpdated(k);
  });
});

bthread("Customer delete verification", function () {
  const e = waitForAnyCustomerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCustomer(k), function () {
    verifyCustomerDoesNotExist(k);
  });
});

bthread("Garage create verification", function () {
  const e = waitForAnyGarageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGarage(k), function () {
    verifyGarageExists(k);
  });
});

bthread("Garage update verification", function () {
  const e = waitForAnyGarageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGarage(k), function () {
    verifyGarageUpdated(k);
  });
});

bthread("Garage delete verification", function () {
  const e = waitForAnyGarageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGarage(k), function () {
    verifyGarageDoesNotExist(k);
  });
});

bthread("Periodicmaintenance create verification", function () {
  const e = waitForAnyPeriodicmaintenanceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePeriodicmaintenance(k), function () {
    verifyPeriodicmaintenanceExists(k);
  });
});

bthread("Periodicmaintenance update verification", function () {
  const e = waitForAnyPeriodicmaintenanceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePeriodicmaintenance(k), function () {
    verifyPeriodicmaintenanceUpdated(k);
  });
});

bthread("Periodicmaintenance delete verification", function () {
  const e = waitForAnyPeriodicmaintenanceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPeriodicmaintenance(k), function () {
    verifyPeriodicmaintenanceDoesNotExist(k);
  });
});

bthread("Repairorder create verification", function () {
  const e = waitForAnyRepairorderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepairorder(k), function () {
    verifyRepairorderExists(k);
  });
});

bthread("Repairorder update verification", function () {
  const e = waitForAnyRepairorderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepairorder(k), function () {
    verifyRepairorderUpdated(k);
  });
});

bthread("Repairorder delete verification", function () {
  const e = waitForAnyRepairorderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRepairorder(k), function () {
    verifyRepairorderDoesNotExist(k);
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

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Approve", function () {
  const x = waitForAnyApproveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApprove(k, ANY), function () {});
});

bthread("Guard: Unique Car", function () {
  const x = waitForAnyCarAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCar(k, ANY), function () {});
});

bthread("Guard: Unique Chain", function () {
  const x = waitForAnyChainAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChain(k, ANY), function () {});
});

bthread("Guard: Unique Close", function () {
  const x = waitForAnyCloseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClose(k, ANY), function () {});
});

bthread("Guard: Unique Customer", function () {
  const x = waitForAnyCustomerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCustomer(k, ANY), function () {});
});

bthread("Guard: Unique Garage", function () {
  const x = waitForAnyGarageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGarage(k, ANY), function () {});
});

bthread("Guard: Unique Periodicmaintenance", function () {
  const x = waitForAnyPeriodicmaintenanceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPeriodicmaintenance(k, ANY), function () {});
});

bthread("Guard: Unique Repairorder", function () {
  const x = waitForAnyRepairorderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRepairorder(k, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReset(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
