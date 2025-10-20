// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("ApproveLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApprove(x.id);
  updateApprove(x.id);
  updateApprove(x.id);
  verifyApproveExists(x.id);
  verifyApproveUpdated(x.id);
});

bthread("CarLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCar(x.id);
  updateCar(x.id);
  updateCar(x.id);
  verifyCarExists(x.id);
  verifyCarUpdated(x.id);
});

bthread("ChainLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addChain(x.id);
  updateChain(x.id);
  updateChain(x.id);
  verifyChainExists(x.id);
  verifyChainUpdated(x.id);
});

bthread("CloseLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClose(x.id);
  updateClose(x.id);
  updateClose(x.id);
  verifyCloseExists(x.id);
  verifyCloseUpdated(x.id);
});

bthread("CustomerLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCustomer(x.id);
  updateCustomer(x.id);
  updateCustomer(x.id);
  verifyCustomerExists(x.id);
  verifyCustomerUpdated(x.id);
});

bthread("GarageLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGarage(x.id);
  updateGarage(x.id);
  updateGarage(x.id);
  verifyGarageExists(x.id);
  verifyGarageUpdated(x.id);
});

bthread("PeriodicmaintenanceLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPeriodicmaintenance(x.id);
  updatePeriodicmaintenance(x.id);
  updatePeriodicmaintenance(x.id);
  verifyPeriodicmaintenanceExists(x.id);
  verifyPeriodicmaintenanceUpdated(x.id);
});

bthread("RepairorderLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRepairorder(x.id);
  updateRepairorder(x.id);
  updateRepairorder(x.id);
  verifyRepairorderExists(x.id);
  verifyRepairorderUpdated(x.id);
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReset(x.id);
  updateReset(x.id);
  updateReset(x.id);
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Approve nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Approve_id_N"}]);
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
  const x = pick([{id: "Car_id_N"}]);
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
  const x = pick([{id: "Chain_id_N"}]);
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
  const x = pick([{id: "Close_id_N"}]);
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
  const x = pick([{id: "Customer_id_N"}]);
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
  const x = pick([{id: "Garage_id_N"}]);
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
  const x = pick([{id: "Periodicmaintenance_id_N"}]);
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
  const x = pick([{id: "Repairorder_id_N"}]);
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

bthread("Approve create verification", function () {
  const e = waitForAnyApproveAdded();
  block(matchDeleteApprove(e.id, ANY), function () {
    verifyApproveExists(e.id);
  });
});

bthread("Approve update verification", function () {
  const e = waitForAnyApproveUpdated();
  block(matchDeleteApprove(e.id, ANY), function () {
    verifyApproveUpdated(e.id);
  });
});

bthread("Approve delete verification", function () {
  const e = waitForAnyApproveDeleted();
  block(matchAddApprove(e.id, ANY), function () {
    verifyApproveDoesNotExist(e.id);
  });
});

bthread("Car create verification", function () {
  const e = waitForAnyCarAdded();
  block(matchDeleteCar(e.id, ANY), function () {
    verifyCarExists(e.id);
  });
});

bthread("Car update verification", function () {
  const e = waitForAnyCarUpdated();
  block(matchDeleteCar(e.id, ANY), function () {
    verifyCarUpdated(e.id);
  });
});

bthread("Car delete verification", function () {
  const e = waitForAnyCarDeleted();
  block(matchAddCar(e.id, ANY), function () {
    verifyCarDoesNotExist(e.id);
  });
});

bthread("Chain create verification", function () {
  const e = waitForAnyChainAdded();
  block(matchDeleteChain(e.id, ANY), function () {
    verifyChainExists(e.id);
  });
});

bthread("Chain update verification", function () {
  const e = waitForAnyChainUpdated();
  block(matchDeleteChain(e.id, ANY), function () {
    verifyChainUpdated(e.id);
  });
});

bthread("Chain delete verification", function () {
  const e = waitForAnyChainDeleted();
  block(matchAddChain(e.id, ANY), function () {
    verifyChainDoesNotExist(e.id);
  });
});

bthread("Close create verification", function () {
  const e = waitForAnyCloseAdded();
  block(matchDeleteClose(e.id, ANY), function () {
    verifyCloseExists(e.id);
  });
});

bthread("Close update verification", function () {
  const e = waitForAnyCloseUpdated();
  block(matchDeleteClose(e.id, ANY), function () {
    verifyCloseUpdated(e.id);
  });
});

bthread("Close delete verification", function () {
  const e = waitForAnyCloseDeleted();
  block(matchAddClose(e.id, ANY), function () {
    verifyCloseDoesNotExist(e.id);
  });
});

bthread("Customer create verification", function () {
  const e = waitForAnyCustomerAdded();
  block(matchDeleteCustomer(e.id, ANY), function () {
    verifyCustomerExists(e.id);
  });
});

bthread("Customer update verification", function () {
  const e = waitForAnyCustomerUpdated();
  block(matchDeleteCustomer(e.id, ANY), function () {
    verifyCustomerUpdated(e.id);
  });
});

bthread("Customer delete verification", function () {
  const e = waitForAnyCustomerDeleted();
  block(matchAddCustomer(e.id, ANY), function () {
    verifyCustomerDoesNotExist(e.id);
  });
});

bthread("Garage create verification", function () {
  const e = waitForAnyGarageAdded();
  block(matchDeleteGarage(e.id, ANY), function () {
    verifyGarageExists(e.id);
  });
});

bthread("Garage update verification", function () {
  const e = waitForAnyGarageUpdated();
  block(matchDeleteGarage(e.id, ANY), function () {
    verifyGarageUpdated(e.id);
  });
});

bthread("Garage delete verification", function () {
  const e = waitForAnyGarageDeleted();
  block(matchAddGarage(e.id, ANY), function () {
    verifyGarageDoesNotExist(e.id);
  });
});

bthread("Periodicmaintenance create verification", function () {
  const e = waitForAnyPeriodicmaintenanceAdded();
  block(matchDeletePeriodicmaintenance(e.id, ANY), function () {
    verifyPeriodicmaintenanceExists(e.id);
  });
});

bthread("Periodicmaintenance update verification", function () {
  const e = waitForAnyPeriodicmaintenanceUpdated();
  block(matchDeletePeriodicmaintenance(e.id, ANY), function () {
    verifyPeriodicmaintenanceUpdated(e.id);
  });
});

bthread("Periodicmaintenance delete verification", function () {
  const e = waitForAnyPeriodicmaintenanceDeleted();
  block(matchAddPeriodicmaintenance(e.id, ANY), function () {
    verifyPeriodicmaintenanceDoesNotExist(e.id);
  });
});

bthread("Repairorder create verification", function () {
  const e = waitForAnyRepairorderAdded();
  block(matchDeleteRepairorder(e.id, ANY), function () {
    verifyRepairorderExists(e.id);
  });
});

bthread("Repairorder update verification", function () {
  const e = waitForAnyRepairorderUpdated();
  block(matchDeleteRepairorder(e.id, ANY), function () {
    verifyRepairorderUpdated(e.id);
  });
});

bthread("Repairorder delete verification", function () {
  const e = waitForAnyRepairorderDeleted();
  block(matchAddRepairorder(e.id, ANY), function () {
    verifyRepairorderDoesNotExist(e.id);
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
