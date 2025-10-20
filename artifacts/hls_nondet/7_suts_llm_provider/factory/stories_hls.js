// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("MachineLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMachine(x.id);
  updateMachine(x.id);
  updateMachine(x.id);
  verifyMachineExists(x.id);
  verifyMachineUpdated(x.id);
});

bthread("MaintenanceticketLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMaintenanceticket(x.id);
  updateMaintenanceticket(x.id);
  updateMaintenanceticket(x.id);
  verifyMaintenanceticketExists(x.id);
  verifyMaintenanceticketUpdated(x.id);
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReset(x.id);
  updateReset(x.id);
  updateReset(x.id);
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
});

bthread("SensorreadingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSensorreading(x.id);
  updateSensorreading(x.id);
  updateSensorreading(x.id);
  verifySensorreadingExists(x.id);
  verifySensorreadingUpdated(x.id);
});

bthread("WorkorderLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWorkorder(x.id);
  updateWorkorder(x.id);
  updateWorkorder(x.id);
  verifyWorkorderExists(x.id);
  verifyWorkorderUpdated(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Machine nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Machine_id_N"}]);
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMachine(a.id);
  block(matchAddMachine(a.id, ANY), function () {});
  addMachine(b.id);
});

bthread("Maintenanceticket nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Maintenanceticket_id_N"}]);
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
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMaintenanceticket(a.id);
  block(matchAddMaintenanceticket(a.id, ANY), function () {});
  addMaintenanceticket(b.id);
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

bthread("Sensorreading nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Sensorreading_id_N"}]);
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
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSensorreading(a.id);
  block(matchAddSensorreading(a.id, ANY), function () {});
  addSensorreading(b.id);
});

bthread("Workorder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Workorder_id_N"}]);
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
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWorkorder(a.id);
  block(matchAddWorkorder(a.id, ANY), function () {});
  addWorkorder(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Machine create verification", function () {
  const e = waitForAnyMachineAdded();
  block(matchDeleteMachine(e.id, ANY), function () {
    verifyMachineExists(e.id);
  });
});

bthread("Machine update verification", function () {
  const e = waitForAnyMachineUpdated();
  block(matchDeleteMachine(e.id, ANY), function () {
    verifyMachineUpdated(e.id);
  });
});

bthread("Machine delete verification", function () {
  const e = waitForAnyMachineDeleted();
  block(matchAddMachine(e.id, ANY), function () {
    verifyMachineDoesNotExist(e.id);
  });
});

bthread("Maintenanceticket create verification", function () {
  const e = waitForAnyMaintenanceticketAdded();
  block(matchDeleteMaintenanceticket(e.id, ANY), function () {
    verifyMaintenanceticketExists(e.id);
  });
});

bthread("Maintenanceticket update verification", function () {
  const e = waitForAnyMaintenanceticketUpdated();
  block(matchDeleteMaintenanceticket(e.id, ANY), function () {
    verifyMaintenanceticketUpdated(e.id);
  });
});

bthread("Maintenanceticket delete verification", function () {
  const e = waitForAnyMaintenanceticketDeleted();
  block(matchAddMaintenanceticket(e.id, ANY), function () {
    verifyMaintenanceticketDoesNotExist(e.id);
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

bthread("Sensorreading create verification", function () {
  const e = waitForAnySensorreadingAdded();
  block(matchDeleteSensorreading(e.id, ANY), function () {
    verifySensorreadingExists(e.id);
  });
});

bthread("Sensorreading update verification", function () {
  const e = waitForAnySensorreadingUpdated();
  block(matchDeleteSensorreading(e.id, ANY), function () {
    verifySensorreadingUpdated(e.id);
  });
});

bthread("Sensorreading delete verification", function () {
  const e = waitForAnySensorreadingDeleted();
  block(matchAddSensorreading(e.id, ANY), function () {
    verifySensorreadingDoesNotExist(e.id);
  });
});

bthread("Workorder create verification", function () {
  const e = waitForAnyWorkorderAdded();
  block(matchDeleteWorkorder(e.id, ANY), function () {
    verifyWorkorderExists(e.id);
  });
});

bthread("Workorder update verification", function () {
  const e = waitForAnyWorkorderUpdated();
  block(matchDeleteWorkorder(e.id, ANY), function () {
    verifyWorkorderUpdated(e.id);
  });
});

bthread("Workorder delete verification", function () {
  const e = waitForAnyWorkorderDeleted();
  block(matchAddWorkorder(e.id, ANY), function () {
    verifyWorkorderDoesNotExist(e.id);
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
