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

// ===== NONDET VARIANTS =====

bthread("Approve nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addApprove(x.id);
  for (var i=0; i<steps; i++) {
    updateApprove(x.id);
  }
  if (pick([true,false])) { deleteApprove(x.id); }
  verifyApproveExists(x.id);
  verifyApproveUpdated(x.id);
});

bthread("Approve nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApprove(a.id);
  block(matchAddApprove(a.id, ANY), function () {});
  addApprove(b.id);
});

bthread("Car nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCar(x.id);
  for (var i=0; i<steps; i++) {
    updateCar(x.id);
  }
  if (pick([true,false])) { deleteCar(x.id); }
  verifyCarExists(x.id);
  verifyCarUpdated(x.id);
});

bthread("Car nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCar(a.id);
  block(matchAddCar(a.id, ANY), function () {});
  addCar(b.id);
});

bthread("Chain nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addChain(x.id);
  for (var i=0; i<steps; i++) {
    updateChain(x.id);
  }
  if (pick([true,false])) { deleteChain(x.id); }
  verifyChainExists(x.id);
  verifyChainUpdated(x.id);
});

bthread("Chain nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addChain(a.id);
  block(matchAddChain(a.id, ANY), function () {});
  addChain(b.id);
});

bthread("Close nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addClose(x.id);
  for (var i=0; i<steps; i++) {
    updateClose(x.id);
  }
  if (pick([true,false])) { deleteClose(x.id); }
  verifyCloseExists(x.id);
  verifyCloseUpdated(x.id);
});

bthread("Close nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClose(a.id);
  block(matchAddClose(a.id, ANY), function () {});
  addClose(b.id);
});

bthread("Customer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCustomer(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomer(x.id);
  }
  if (pick([true,false])) { deleteCustomer(x.id); }
  verifyCustomerExists(x.id);
  verifyCustomerUpdated(x.id);
});

bthread("Customer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCustomer(a.id);
  block(matchAddCustomer(a.id, ANY), function () {});
  addCustomer(b.id);
});

bthread("Garage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGarage(x.id);
  for (var i=0; i<steps; i++) {
    updateGarage(x.id);
  }
  if (pick([true,false])) { deleteGarage(x.id); }
  verifyGarageExists(x.id);
  verifyGarageUpdated(x.id);
});

bthread("Garage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGarage(a.id);
  block(matchAddGarage(a.id, ANY), function () {});
  addGarage(b.id);
});

bthread("Periodicmaintenance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPeriodicmaintenance(x.id);
  for (var i=0; i<steps; i++) {
    updatePeriodicmaintenance(x.id);
  }
  if (pick([true,false])) { deletePeriodicmaintenance(x.id); }
  verifyPeriodicmaintenanceExists(x.id);
  verifyPeriodicmaintenanceUpdated(x.id);
});

bthread("Periodicmaintenance nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPeriodicmaintenance(a.id);
  block(matchAddPeriodicmaintenance(a.id, ANY), function () {});
  addPeriodicmaintenance(b.id);
});

bthread("Repairorder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRepairorder(x.id);
  for (var i=0; i<steps; i++) {
    updateRepairorder(x.id);
  }
  if (pick([true,false])) { deleteRepairorder(x.id); }
  verifyRepairorderExists(x.id);
  verifyRepairorderUpdated(x.id);
});

bthread("Repairorder nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRepairorder(a.id);
  block(matchAddRepairorder(a.id, ANY), function () {});
  addRepairorder(b.id);
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

bthread("Approve create verification", function () {
  const e = waitForAnyApproveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApprove(k, ANY), function () {
    verifyApproveExists(k);
  });
});

bthread("Approve update verification", function () {
  const e = waitForAnyApproveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApprove(k, ANY), function () {
    verifyApproveUpdated(k);
  });
});

bthread("Approve delete verification", function () {
  const e = waitForAnyApproveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApprove(k, ANY), function () {
    verifyApproveDoesNotExist(k);
  });
});

bthread("Car create verification", function () {
  const e = waitForAnyCarAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCar(k, ANY), function () {
    verifyCarExists(k);
  });
});

bthread("Car update verification", function () {
  const e = waitForAnyCarUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCar(k, ANY), function () {
    verifyCarUpdated(k);
  });
});

bthread("Car delete verification", function () {
  const e = waitForAnyCarDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCar(k, ANY), function () {
    verifyCarDoesNotExist(k);
  });
});

bthread("Chain create verification", function () {
  const e = waitForAnyChainAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChain(k, ANY), function () {
    verifyChainExists(k);
  });
});

bthread("Chain update verification", function () {
  const e = waitForAnyChainUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChain(k, ANY), function () {
    verifyChainUpdated(k);
  });
});

bthread("Chain delete verification", function () {
  const e = waitForAnyChainDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddChain(k, ANY), function () {
    verifyChainDoesNotExist(k);
  });
});

bthread("Close create verification", function () {
  const e = waitForAnyCloseAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClose(k, ANY), function () {
    verifyCloseExists(k);
  });
});

bthread("Close update verification", function () {
  const e = waitForAnyCloseUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClose(k, ANY), function () {
    verifyCloseUpdated(k);
  });
});

bthread("Close delete verification", function () {
  const e = waitForAnyCloseDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClose(k, ANY), function () {
    verifyCloseDoesNotExist(k);
  });
});

bthread("Customer create verification", function () {
  const e = waitForAnyCustomerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomer(k, ANY), function () {
    verifyCustomerExists(k);
  });
});

bthread("Customer update verification", function () {
  const e = waitForAnyCustomerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomer(k, ANY), function () {
    verifyCustomerUpdated(k);
  });
});

bthread("Customer delete verification", function () {
  const e = waitForAnyCustomerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomer(k, ANY), function () {
    verifyCustomerDoesNotExist(k);
  });
});

bthread("Garage create verification", function () {
  const e = waitForAnyGarageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGarage(k, ANY), function () {
    verifyGarageExists(k);
  });
});

bthread("Garage update verification", function () {
  const e = waitForAnyGarageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGarage(k, ANY), function () {
    verifyGarageUpdated(k);
  });
});

bthread("Garage delete verification", function () {
  const e = waitForAnyGarageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGarage(k, ANY), function () {
    verifyGarageDoesNotExist(k);
  });
});

bthread("Periodicmaintenance create verification", function () {
  const e = waitForAnyPeriodicmaintenanceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePeriodicmaintenance(k, ANY), function () {
    verifyPeriodicmaintenanceExists(k);
  });
});

bthread("Periodicmaintenance update verification", function () {
  const e = waitForAnyPeriodicmaintenanceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePeriodicmaintenance(k, ANY), function () {
    verifyPeriodicmaintenanceUpdated(k);
  });
});

bthread("Periodicmaintenance delete verification", function () {
  const e = waitForAnyPeriodicmaintenanceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPeriodicmaintenance(k, ANY), function () {
    verifyPeriodicmaintenanceDoesNotExist(k);
  });
});

bthread("Repairorder create verification", function () {
  const e = waitForAnyRepairorderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepairorder(k, ANY), function () {
    verifyRepairorderExists(k);
  });
});

bthread("Repairorder update verification", function () {
  const e = waitForAnyRepairorderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepairorder(k, ANY), function () {
    verifyRepairorderUpdated(k);
  });
});

bthread("Repairorder delete verification", function () {
  const e = waitForAnyRepairorderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRepairorder(k, ANY), function () {
    verifyRepairorderDoesNotExist(k);
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

bthread("Guard: Unique Approve", function () {
  const x = waitForAnyApproveAdded();
  block(matchAddApprove(x.id, ANY), function () {});
});

bthread("Guard: Unique Car", function () {
  const x = waitForAnyCarAdded();
  block(matchAddCar(x.id, ANY), function () {});
});

bthread("Guard: Unique Chain", function () {
  const x = waitForAnyChainAdded();
  block(matchAddChain(x.id, ANY), function () {});
});

bthread("Guard: Unique Close", function () {
  const x = waitForAnyCloseAdded();
  block(matchAddClose(x.id, ANY), function () {});
});

bthread("Guard: Unique Customer", function () {
  const x = waitForAnyCustomerAdded();
  block(matchAddCustomer(x.id, ANY), function () {});
});

bthread("Guard: Unique Garage", function () {
  const x = waitForAnyGarageAdded();
  block(matchAddGarage(x.id, ANY), function () {});
});

bthread("Guard: Unique Periodicmaintenance", function () {
  const x = waitForAnyPeriodicmaintenanceAdded();
  block(matchAddPeriodicmaintenance(x.id, ANY), function () {});
});

bthread("Guard: Unique Repairorder", function () {
  const x = waitForAnyRepairorderAdded();
  block(matchAddRepairorder(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
