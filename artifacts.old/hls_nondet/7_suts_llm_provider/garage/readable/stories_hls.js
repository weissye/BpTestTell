// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls_nondet
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

bthread("CarcreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCarcreate(x.id);
  const e_add = waitForCarcreateAdded(id);
  block(matchDeleteCarcreate(id), function () {
    verifyCarcreateExists(id);
  });
  updateCarcreate(x.id);
  updateCarcreate(x.id);
  const e_upd = waitForCarcreateUpdated(id);
  block(matchDeleteCarcreate(id), function () {
    verifyCarcreateUpdated(id);
  });
  deleteCarcreate(x.id);
  const e_del = waitForCarcreateDeleted(id);
  block(matchAddCarcreate(id), function () {
    verifyCarcreateDoesNotExist(id);
  });
});

bthread("CarupdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCarupdate(x.id);
  const e_add = waitForCarupdateAdded(id);
  block(matchDeleteCarupdate(id), function () {
    verifyCarupdateExists(id);
  });
  updateCarupdate(x.id);
  updateCarupdate(x.id);
  const e_upd = waitForCarupdateUpdated(id);
  block(matchDeleteCarupdate(id), function () {
    verifyCarupdateUpdated(id);
  });
  deleteCarupdate(x.id);
  const e_del = waitForCarupdateDeleted(id);
  block(matchAddCarupdate(id), function () {
    verifyCarupdateDoesNotExist(id);
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

bthread("ChaincreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChaincreate(x.id);
  const e_add = waitForChaincreateAdded(id);
  block(matchDeleteChaincreate(id), function () {
    verifyChaincreateExists(id);
  });
  updateChaincreate(x.id);
  updateChaincreate(x.id);
  const e_upd = waitForChaincreateUpdated(id);
  block(matchDeleteChaincreate(id), function () {
    verifyChaincreateUpdated(id);
  });
  deleteChaincreate(x.id);
  const e_del = waitForChaincreateDeleted(id);
  block(matchAddChaincreate(id), function () {
    verifyChaincreateDoesNotExist(id);
  });
});

bthread("ChainupdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChainupdate(x.id);
  const e_add = waitForChainupdateAdded(id);
  block(matchDeleteChainupdate(id), function () {
    verifyChainupdateExists(id);
  });
  updateChainupdate(x.id);
  updateChainupdate(x.id);
  const e_upd = waitForChainupdateUpdated(id);
  block(matchDeleteChainupdate(id), function () {
    verifyChainupdateUpdated(id);
  });
  deleteChainupdate(x.id);
  const e_del = waitForChainupdateDeleted(id);
  block(matchAddChainupdate(id), function () {
    verifyChainupdateDoesNotExist(id);
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

bthread("CustomercreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomercreate(x.id);
  const e_add = waitForCustomercreateAdded(id);
  block(matchDeleteCustomercreate(id), function () {
    verifyCustomercreateExists(id);
  });
  updateCustomercreate(x.id);
  updateCustomercreate(x.id);
  const e_upd = waitForCustomercreateUpdated(id);
  block(matchDeleteCustomercreate(id), function () {
    verifyCustomercreateUpdated(id);
  });
  deleteCustomercreate(x.id);
  const e_del = waitForCustomercreateDeleted(id);
  block(matchAddCustomercreate(id), function () {
    verifyCustomercreateDoesNotExist(id);
  });
});

bthread("CustomerupdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomerupdate(x.id);
  const e_add = waitForCustomerupdateAdded(id);
  block(matchDeleteCustomerupdate(id), function () {
    verifyCustomerupdateExists(id);
  });
  updateCustomerupdate(x.id);
  updateCustomerupdate(x.id);
  const e_upd = waitForCustomerupdateUpdated(id);
  block(matchDeleteCustomerupdate(id), function () {
    verifyCustomerupdateUpdated(id);
  });
  deleteCustomerupdate(x.id);
  const e_del = waitForCustomerupdateDeleted(id);
  block(matchAddCustomerupdate(id), function () {
    verifyCustomerupdateDoesNotExist(id);
  });
});

bthread("ErrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addError(x.id);
  const e_add = waitForErrorAdded(id);
  block(matchDeleteError(id), function () {
    verifyErrorExists(id);
  });
  updateError(x.id);
  updateError(x.id);
  const e_upd = waitForErrorUpdated(id);
  block(matchDeleteError(id), function () {
    verifyErrorUpdated(id);
  });
  deleteError(x.id);
  const e_del = waitForErrorDeleted(id);
  block(matchAddError(id), function () {
    verifyErrorDoesNotExist(id);
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

bthread("GaragecreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGaragecreate(x.id);
  const e_add = waitForGaragecreateAdded(id);
  block(matchDeleteGaragecreate(id), function () {
    verifyGaragecreateExists(id);
  });
  updateGaragecreate(x.id);
  updateGaragecreate(x.id);
  const e_upd = waitForGaragecreateUpdated(id);
  block(matchDeleteGaragecreate(id), function () {
    verifyGaragecreateUpdated(id);
  });
  deleteGaragecreate(x.id);
  const e_del = waitForGaragecreateDeleted(id);
  block(matchAddGaragecreate(id), function () {
    verifyGaragecreateDoesNotExist(id);
  });
});

bthread("GarageupdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGarageupdate(x.id);
  const e_add = waitForGarageupdateAdded(id);
  block(matchDeleteGarageupdate(id), function () {
    verifyGarageupdateExists(id);
  });
  updateGarageupdate(x.id);
  updateGarageupdate(x.id);
  const e_upd = waitForGarageupdateUpdated(id);
  block(matchDeleteGarageupdate(id), function () {
    verifyGarageupdateUpdated(id);
  });
  deleteGarageupdate(x.id);
  const e_del = waitForGarageupdateDeleted(id);
  block(matchAddGarageupdate(id), function () {
    verifyGarageupdateDoesNotExist(id);
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

bthread("PmcreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPmcreate(x.id);
  const e_add = waitForPmcreateAdded(id);
  block(matchDeletePmcreate(id), function () {
    verifyPmcreateExists(id);
  });
  updatePmcreate(x.id);
  updatePmcreate(x.id);
  const e_upd = waitForPmcreateUpdated(id);
  block(matchDeletePmcreate(id), function () {
    verifyPmcreateUpdated(id);
  });
  deletePmcreate(x.id);
  const e_del = waitForPmcreateDeleted(id);
  block(matchAddPmcreate(id), function () {
    verifyPmcreateDoesNotExist(id);
  });
});

bthread("PmupdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPmupdate(x.id);
  const e_add = waitForPmupdateAdded(id);
  block(matchDeletePmupdate(id), function () {
    verifyPmupdateExists(id);
  });
  updatePmupdate(x.id);
  updatePmupdate(x.id);
  const e_upd = waitForPmupdateUpdated(id);
  block(matchDeletePmupdate(id), function () {
    verifyPmupdateUpdated(id);
  });
  deletePmupdate(x.id);
  const e_del = waitForPmupdateDeleted(id);
  block(matchAddPmupdate(id), function () {
    verifyPmupdateDoesNotExist(id);
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

bthread("RocreateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRocreate(x.id);
  const e_add = waitForRocreateAdded(id);
  block(matchDeleteRocreate(id), function () {
    verifyRocreateExists(id);
  });
  updateRocreate(x.id);
  updateRocreate(x.id);
  const e_upd = waitForRocreateUpdated(id);
  block(matchDeleteRocreate(id), function () {
    verifyRocreateUpdated(id);
  });
  deleteRocreate(x.id);
  const e_del = waitForRocreateDeleted(id);
  block(matchAddRocreate(id), function () {
    verifyRocreateDoesNotExist(id);
  });
});

bthread("RoupdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRoupdate(x.id);
  const e_add = waitForRoupdateAdded(id);
  block(matchDeleteRoupdate(id), function () {
    verifyRoupdateExists(id);
  });
  updateRoupdate(x.id);
  updateRoupdate(x.id);
  const e_upd = waitForRoupdateUpdated(id);
  block(matchDeleteRoupdate(id), function () {
    verifyRoupdateUpdated(id);
  });
  deleteRoupdate(x.id);
  const e_del = waitForRoupdateDeleted(id);
  block(matchAddRoupdate(id), function () {
    verifyRoupdateDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Car nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCar(a.id);
  block(matchAddCar(a.id, ANY), function () {});
  addCar(b.id);
});

bthread("Carcreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCarcreate(x.id);
  for (var i=0; i<steps; i++) {
    updateCarcreate(x.id);
  }
  if (pick([true,false])) { deleteCarcreate(x.id); }
  verifyCarcreateExists(x.id);
  verifyCarcreateUpdated(x.id);
});

bthread("Carcreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCarcreate(a.id);
  block(matchAddCarcreate(a.id, ANY), function () {});
  addCarcreate(b.id);
});

bthread("Carupdate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCarupdate(x.id);
  for (var i=0; i<steps; i++) {
    updateCarupdate(x.id);
  }
  if (pick([true,false])) { deleteCarupdate(x.id); }
  verifyCarupdateExists(x.id);
  verifyCarupdateUpdated(x.id);
});

bthread("Carupdate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCarupdate(a.id);
  block(matchAddCarupdate(a.id, ANY), function () {});
  addCarupdate(b.id);
});

bthread("Chain nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChain(a.id);
  block(matchAddChain(a.id, ANY), function () {});
  addChain(b.id);
});

bthread("Chaincreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addChaincreate(x.id);
  for (var i=0; i<steps; i++) {
    updateChaincreate(x.id);
  }
  if (pick([true,false])) { deleteChaincreate(x.id); }
  verifyChaincreateExists(x.id);
  verifyChaincreateUpdated(x.id);
});

bthread("Chaincreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChaincreate(a.id);
  block(matchAddChaincreate(a.id, ANY), function () {});
  addChaincreate(b.id);
});

bthread("Chainupdate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addChainupdate(x.id);
  for (var i=0; i<steps; i++) {
    updateChainupdate(x.id);
  }
  if (pick([true,false])) { deleteChainupdate(x.id); }
  verifyChainupdateExists(x.id);
  verifyChainupdateUpdated(x.id);
});

bthread("Chainupdate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addChainupdate(a.id);
  block(matchAddChainupdate(a.id, ANY), function () {});
  addChainupdate(b.id);
});

bthread("Customer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCustomer(a.id);
  block(matchAddCustomer(a.id, ANY), function () {});
  addCustomer(b.id);
});

bthread("Customercreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCustomercreate(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomercreate(x.id);
  }
  if (pick([true,false])) { deleteCustomercreate(x.id); }
  verifyCustomercreateExists(x.id);
  verifyCustomercreateUpdated(x.id);
});

bthread("Customercreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCustomercreate(a.id);
  block(matchAddCustomercreate(a.id, ANY), function () {});
  addCustomercreate(b.id);
});

bthread("Customerupdate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCustomerupdate(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomerupdate(x.id);
  }
  if (pick([true,false])) { deleteCustomerupdate(x.id); }
  verifyCustomerupdateExists(x.id);
  verifyCustomerupdateUpdated(x.id);
});

bthread("Customerupdate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCustomerupdate(a.id);
  block(matchAddCustomerupdate(a.id, ANY), function () {});
  addCustomerupdate(b.id);
});

bthread("Error nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addError(x.id);
  for (var i=0; i<steps; i++) {
    updateError(x.id);
  }
  if (pick([true,false])) { deleteError(x.id); }
  verifyErrorExists(x.id);
  verifyErrorUpdated(x.id);
});

bthread("Error nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addError(a.id);
  block(matchAddError(a.id, ANY), function () {});
  addError(b.id);
});

bthread("Garage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGarage(a.id);
  block(matchAddGarage(a.id, ANY), function () {});
  addGarage(b.id);
});

bthread("Garagecreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addGaragecreate(x.id);
  for (var i=0; i<steps; i++) {
    updateGaragecreate(x.id);
  }
  if (pick([true,false])) { deleteGaragecreate(x.id); }
  verifyGaragecreateExists(x.id);
  verifyGaragecreateUpdated(x.id);
});

bthread("Garagecreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGaragecreate(a.id);
  block(matchAddGaragecreate(a.id, ANY), function () {});
  addGaragecreate(b.id);
});

bthread("Garageupdate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addGarageupdate(x.id);
  for (var i=0; i<steps; i++) {
    updateGarageupdate(x.id);
  }
  if (pick([true,false])) { deleteGarageupdate(x.id); }
  verifyGarageupdateExists(x.id);
  verifyGarageupdateUpdated(x.id);
});

bthread("Garageupdate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGarageupdate(a.id);
  block(matchAddGarageupdate(a.id, ANY), function () {});
  addGarageupdate(b.id);
});

bthread("Periodicmaintenance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPeriodicmaintenance(a.id);
  block(matchAddPeriodicmaintenance(a.id, ANY), function () {});
  addPeriodicmaintenance(b.id);
});

bthread("Pmcreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPmcreate(x.id);
  for (var i=0; i<steps; i++) {
    updatePmcreate(x.id);
  }
  if (pick([true,false])) { deletePmcreate(x.id); }
  verifyPmcreateExists(x.id);
  verifyPmcreateUpdated(x.id);
});

bthread("Pmcreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPmcreate(a.id);
  block(matchAddPmcreate(a.id, ANY), function () {});
  addPmcreate(b.id);
});

bthread("Pmupdate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPmupdate(x.id);
  for (var i=0; i<steps; i++) {
    updatePmupdate(x.id);
  }
  if (pick([true,false])) { deletePmupdate(x.id); }
  verifyPmupdateExists(x.id);
  verifyPmupdateUpdated(x.id);
});

bthread("Pmupdate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPmupdate(a.id);
  block(matchAddPmupdate(a.id, ANY), function () {});
  addPmupdate(b.id);
});

bthread("Repairorder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRepairorder(a.id);
  block(matchAddRepairorder(a.id, ANY), function () {});
  addRepairorder(b.id);
});

bthread("Rocreate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRocreate(x.id);
  for (var i=0; i<steps; i++) {
    updateRocreate(x.id);
  }
  if (pick([true,false])) { deleteRocreate(x.id); }
  verifyRocreateExists(x.id);
  verifyRocreateUpdated(x.id);
});

bthread("Rocreate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRocreate(a.id);
  block(matchAddRocreate(a.id, ANY), function () {});
  addRocreate(b.id);
});

bthread("Roupdate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRoupdate(x.id);
  for (var i=0; i<steps; i++) {
    updateRoupdate(x.id);
  }
  if (pick([true,false])) { deleteRoupdate(x.id); }
  verifyRoupdateExists(x.id);
  verifyRoupdateUpdated(x.id);
});

bthread("Roupdate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRoupdate(a.id);
  block(matchAddRoupdate(a.id, ANY), function () {});
  addRoupdate(b.id);
});

// ===== PASSIVE ASSERTIONS =====

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

bthread("Carcreate create verification", function () {
  const e = waitForAnyCarcreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCarcreate(k), function () {
    verifyCarcreateExists(k);
  });
});

bthread("Carcreate update verification", function () {
  const e = waitForAnyCarcreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCarcreate(k), function () {
    verifyCarcreateUpdated(k);
  });
});

bthread("Carcreate delete verification", function () {
  const e = waitForAnyCarcreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCarcreate(k), function () {
    verifyCarcreateDoesNotExist(k);
  });
});

bthread("Carupdate create verification", function () {
  const e = waitForAnyCarupdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCarupdate(k), function () {
    verifyCarupdateExists(k);
  });
});

bthread("Carupdate update verification", function () {
  const e = waitForAnyCarupdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCarupdate(k), function () {
    verifyCarupdateUpdated(k);
  });
});

bthread("Carupdate delete verification", function () {
  const e = waitForAnyCarupdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCarupdate(k), function () {
    verifyCarupdateDoesNotExist(k);
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

bthread("Chaincreate create verification", function () {
  const e = waitForAnyChaincreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChaincreate(k), function () {
    verifyChaincreateExists(k);
  });
});

bthread("Chaincreate update verification", function () {
  const e = waitForAnyChaincreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChaincreate(k), function () {
    verifyChaincreateUpdated(k);
  });
});

bthread("Chaincreate delete verification", function () {
  const e = waitForAnyChaincreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChaincreate(k), function () {
    verifyChaincreateDoesNotExist(k);
  });
});

bthread("Chainupdate create verification", function () {
  const e = waitForAnyChainupdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChainupdate(k), function () {
    verifyChainupdateExists(k);
  });
});

bthread("Chainupdate update verification", function () {
  const e = waitForAnyChainupdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChainupdate(k), function () {
    verifyChainupdateUpdated(k);
  });
});

bthread("Chainupdate delete verification", function () {
  const e = waitForAnyChainupdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChainupdate(k), function () {
    verifyChainupdateDoesNotExist(k);
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

bthread("Customercreate create verification", function () {
  const e = waitForAnyCustomercreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomercreate(k), function () {
    verifyCustomercreateExists(k);
  });
});

bthread("Customercreate update verification", function () {
  const e = waitForAnyCustomercreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomercreate(k), function () {
    verifyCustomercreateUpdated(k);
  });
});

bthread("Customercreate delete verification", function () {
  const e = waitForAnyCustomercreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCustomercreate(k), function () {
    verifyCustomercreateDoesNotExist(k);
  });
});

bthread("Customerupdate create verification", function () {
  const e = waitForAnyCustomerupdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomerupdate(k), function () {
    verifyCustomerupdateExists(k);
  });
});

bthread("Customerupdate update verification", function () {
  const e = waitForAnyCustomerupdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomerupdate(k), function () {
    verifyCustomerupdateUpdated(k);
  });
});

bthread("Customerupdate delete verification", function () {
  const e = waitForAnyCustomerupdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCustomerupdate(k), function () {
    verifyCustomerupdateDoesNotExist(k);
  });
});

bthread("Error create verification", function () {
  const e = waitForAnyErrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteError(k), function () {
    verifyErrorExists(k);
  });
});

bthread("Error update verification", function () {
  const e = waitForAnyErrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteError(k), function () {
    verifyErrorUpdated(k);
  });
});

bthread("Error delete verification", function () {
  const e = waitForAnyErrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddError(k), function () {
    verifyErrorDoesNotExist(k);
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

bthread("Garagecreate create verification", function () {
  const e = waitForAnyGaragecreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGaragecreate(k), function () {
    verifyGaragecreateExists(k);
  });
});

bthread("Garagecreate update verification", function () {
  const e = waitForAnyGaragecreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGaragecreate(k), function () {
    verifyGaragecreateUpdated(k);
  });
});

bthread("Garagecreate delete verification", function () {
  const e = waitForAnyGaragecreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGaragecreate(k), function () {
    verifyGaragecreateDoesNotExist(k);
  });
});

bthread("Garageupdate create verification", function () {
  const e = waitForAnyGarageupdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGarageupdate(k), function () {
    verifyGarageupdateExists(k);
  });
});

bthread("Garageupdate update verification", function () {
  const e = waitForAnyGarageupdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGarageupdate(k), function () {
    verifyGarageupdateUpdated(k);
  });
});

bthread("Garageupdate delete verification", function () {
  const e = waitForAnyGarageupdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGarageupdate(k), function () {
    verifyGarageupdateDoesNotExist(k);
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

bthread("Pmcreate create verification", function () {
  const e = waitForAnyPmcreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePmcreate(k), function () {
    verifyPmcreateExists(k);
  });
});

bthread("Pmcreate update verification", function () {
  const e = waitForAnyPmcreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePmcreate(k), function () {
    verifyPmcreateUpdated(k);
  });
});

bthread("Pmcreate delete verification", function () {
  const e = waitForAnyPmcreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPmcreate(k), function () {
    verifyPmcreateDoesNotExist(k);
  });
});

bthread("Pmupdate create verification", function () {
  const e = waitForAnyPmupdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePmupdate(k), function () {
    verifyPmupdateExists(k);
  });
});

bthread("Pmupdate update verification", function () {
  const e = waitForAnyPmupdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePmupdate(k), function () {
    verifyPmupdateUpdated(k);
  });
});

bthread("Pmupdate delete verification", function () {
  const e = waitForAnyPmupdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPmupdate(k), function () {
    verifyPmupdateDoesNotExist(k);
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

bthread("Rocreate create verification", function () {
  const e = waitForAnyRocreateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRocreate(k), function () {
    verifyRocreateExists(k);
  });
});

bthread("Rocreate update verification", function () {
  const e = waitForAnyRocreateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRocreate(k), function () {
    verifyRocreateUpdated(k);
  });
});

bthread("Rocreate delete verification", function () {
  const e = waitForAnyRocreateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRocreate(k), function () {
    verifyRocreateDoesNotExist(k);
  });
});

bthread("Roupdate create verification", function () {
  const e = waitForAnyRoupdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRoupdate(k), function () {
    verifyRoupdateExists(k);
  });
});

bthread("Roupdate update verification", function () {
  const e = waitForAnyRoupdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRoupdate(k), function () {
    verifyRoupdateUpdated(k);
  });
});

bthread("Roupdate delete verification", function () {
  const e = waitForAnyRoupdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRoupdate(k), function () {
    verifyRoupdateDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Car", function () {
  const x = waitForAnyCarAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCar(k, ANY), function () {});
});

bthread("Guard: Unique Carcreate", function () {
  const x = waitForAnyCarcreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCarcreate(k, ANY), function () {});
});

bthread("Guard: Unique Carupdate", function () {
  const x = waitForAnyCarupdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCarupdate(k, ANY), function () {});
});

bthread("Guard: Unique Chain", function () {
  const x = waitForAnyChainAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChain(k, ANY), function () {});
});

bthread("Guard: Unique Chaincreate", function () {
  const x = waitForAnyChaincreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChaincreate(k, ANY), function () {});
});

bthread("Guard: Unique Chainupdate", function () {
  const x = waitForAnyChainupdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChainupdate(k, ANY), function () {});
});

bthread("Guard: Unique Customer", function () {
  const x = waitForAnyCustomerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCustomer(k, ANY), function () {});
});

bthread("Guard: Unique Customercreate", function () {
  const x = waitForAnyCustomercreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCustomercreate(k, ANY), function () {});
});

bthread("Guard: Unique Customerupdate", function () {
  const x = waitForAnyCustomerupdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCustomerupdate(k, ANY), function () {});
});

bthread("Guard: Unique Error", function () {
  const x = waitForAnyErrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddError(k, ANY), function () {});
});

bthread("Guard: Unique Garage", function () {
  const x = waitForAnyGarageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGarage(k, ANY), function () {});
});

bthread("Guard: Unique Garagecreate", function () {
  const x = waitForAnyGaragecreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGaragecreate(k, ANY), function () {});
});

bthread("Guard: Unique Garageupdate", function () {
  const x = waitForAnyGarageupdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGarageupdate(k, ANY), function () {});
});

bthread("Guard: Unique Periodicmaintenance", function () {
  const x = waitForAnyPeriodicmaintenanceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPeriodicmaintenance(k, ANY), function () {});
});

bthread("Guard: Unique Pmcreate", function () {
  const x = waitForAnyPmcreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPmcreate(k, ANY), function () {});
});

bthread("Guard: Unique Pmupdate", function () {
  const x = waitForAnyPmupdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPmupdate(k, ANY), function () {});
});

bthread("Guard: Unique Repairorder", function () {
  const x = waitForAnyRepairorderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRepairorder(k, ANY), function () {});
});

bthread("Guard: Unique Rocreate", function () {
  const x = waitForAnyRocreateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRocreate(k, ANY), function () {});
});

bthread("Guard: Unique Roupdate", function () {
  const x = waitForAnyRoupdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRoupdate(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
