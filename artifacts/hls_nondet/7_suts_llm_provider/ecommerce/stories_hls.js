// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("DrugLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDrug(x.id);
  updateDrug(x.id);
  updateDrug(x.id);
  verifyDrugExists(x.id);
  verifyDrugUpdated(x.id);
  deleteDrug(x.id);
});

bthread("InventoryLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInventory(x.id);
  updateInventory(x.id);
  updateInventory(x.id);
  verifyInventoryExists(x.id);
  verifyInventoryUpdated(x.id);
  deleteInventory(x.id);
});

bthread("OrderLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOrder(x.id);
  updateOrder(x.id);
  updateOrder(x.id);
  verifyOrderExists(x.id);
  verifyOrderUpdated(x.id);
  deleteOrder(x.id);
});

bthread("PatientLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPatient(x.id);
  updatePatient(x.id);
  updatePatient(x.id);
  verifyPatientExists(x.id);
  verifyPatientUpdated(x.id);
  deletePatient(x.id);
});

bthread("PrescriptionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPrescription(x.id);
  updatePrescription(x.id);
  updatePrescription(x.id);
  verifyPrescriptionExists(x.id);
  verifyPrescriptionUpdated(x.id);
  deletePrescription(x.id);
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

bthread("Drug nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Drug_id_N"}]);
  const steps = pick([0,1,2,10]);
  addDrug(x.id);
  for (var i=0; i<steps; i++) {
    updateDrug(x.id);
  }
  if (pick([true,false])) { deleteDrug(x.id); }
  verifyDrugExists(x.id);
  verifyDrugUpdated(x.id);
});

bthread("Drug nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDrug(a.id);
  block(matchAddDrug(a.id, ANY), function () {});
  addDrug(b.id);
});

bthread("Inventory nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Inventory_id_N"}]);
  const steps = pick([0,1,2,10]);
  addInventory(x.id);
  for (var i=0; i<steps; i++) {
    updateInventory(x.id);
  }
  if (pick([true,false])) { deleteInventory(x.id); }
  verifyInventoryExists(x.id);
  verifyInventoryUpdated(x.id);
});

bthread("Inventory nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInventory(a.id);
  block(matchAddInventory(a.id, ANY), function () {});
  addInventory(b.id);
});

bthread("Order nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Order_id_N"}]);
  const steps = pick([0,1,2,10]);
  addOrder(x.id);
  for (var i=0; i<steps; i++) {
    updateOrder(x.id);
  }
  if (pick([true,false])) { deleteOrder(x.id); }
  verifyOrderExists(x.id);
  verifyOrderUpdated(x.id);
});

bthread("Order nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrder(a.id);
  block(matchAddOrder(a.id, ANY), function () {});
  addOrder(b.id);
});

bthread("Patient nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Patient_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPatient(x.id);
  for (var i=0; i<steps; i++) {
    updatePatient(x.id);
  }
  if (pick([true,false])) { deletePatient(x.id); }
  verifyPatientExists(x.id);
  verifyPatientUpdated(x.id);
});

bthread("Patient nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPatient(a.id);
  block(matchAddPatient(a.id, ANY), function () {});
  addPatient(b.id);
});

bthread("Prescription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Prescription_id_N"}]);
  const steps = pick([0,1,2,10]);
  addPrescription(x.id);
  for (var i=0; i<steps; i++) {
    updatePrescription(x.id);
  }
  if (pick([true,false])) { deletePrescription(x.id); }
  verifyPrescriptionExists(x.id);
  verifyPrescriptionUpdated(x.id);
});

bthread("Prescription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPrescription(a.id);
  block(matchAddPrescription(a.id, ANY), function () {});
  addPrescription(b.id);
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

bthread("Drug create verification", function () {
  const e = waitForAnyDrugAdded();
  block(matchDeleteDrug(e.id, ANY), function () {
    verifyDrugExists(e.id);
  });
});

bthread("Drug update verification", function () {
  const e = waitForAnyDrugUpdated();
  block(matchDeleteDrug(e.id, ANY), function () {
    verifyDrugUpdated(e.id);
  });
});

bthread("Drug delete verification", function () {
  const e = waitForAnyDrugDeleted();
  block(matchAddDrug(e.id, ANY), function () {
    verifyDrugDoesNotExist(e.id);
  });
});

bthread("Inventory create verification", function () {
  const e = waitForAnyInventoryAdded();
  block(matchDeleteInventory(e.id, ANY), function () {
    verifyInventoryExists(e.id);
  });
});

bthread("Inventory update verification", function () {
  const e = waitForAnyInventoryUpdated();
  block(matchDeleteInventory(e.id, ANY), function () {
    verifyInventoryUpdated(e.id);
  });
});

bthread("Inventory delete verification", function () {
  const e = waitForAnyInventoryDeleted();
  block(matchAddInventory(e.id, ANY), function () {
    verifyInventoryDoesNotExist(e.id);
  });
});

bthread("Order create verification", function () {
  const e = waitForAnyOrderAdded();
  block(matchDeleteOrder(e.id, ANY), function () {
    verifyOrderExists(e.id);
  });
});

bthread("Order update verification", function () {
  const e = waitForAnyOrderUpdated();
  block(matchDeleteOrder(e.id, ANY), function () {
    verifyOrderUpdated(e.id);
  });
});

bthread("Order delete verification", function () {
  const e = waitForAnyOrderDeleted();
  block(matchAddOrder(e.id, ANY), function () {
    verifyOrderDoesNotExist(e.id);
  });
});

bthread("Patient create verification", function () {
  const e = waitForAnyPatientAdded();
  block(matchDeletePatient(e.id, ANY), function () {
    verifyPatientExists(e.id);
  });
});

bthread("Patient update verification", function () {
  const e = waitForAnyPatientUpdated();
  block(matchDeletePatient(e.id, ANY), function () {
    verifyPatientUpdated(e.id);
  });
});

bthread("Patient delete verification", function () {
  const e = waitForAnyPatientDeleted();
  block(matchAddPatient(e.id, ANY), function () {
    verifyPatientDoesNotExist(e.id);
  });
});

bthread("Prescription create verification", function () {
  const e = waitForAnyPrescriptionAdded();
  block(matchDeletePrescription(e.id, ANY), function () {
    verifyPrescriptionExists(e.id);
  });
});

bthread("Prescription update verification", function () {
  const e = waitForAnyPrescriptionUpdated();
  block(matchDeletePrescription(e.id, ANY), function () {
    verifyPrescriptionUpdated(e.id);
  });
});

bthread("Prescription delete verification", function () {
  const e = waitForAnyPrescriptionDeleted();
  block(matchAddPrescription(e.id, ANY), function () {
    verifyPrescriptionDoesNotExist(e.id);
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

bthread("Guard: Unique Drug", function () {
  const x = waitForAnyDrugAdded();
  block(matchAddDrug(x.id, ANY), function () {});
});

bthread("Guard: Unique Inventory", function () {
  const x = waitForAnyInventoryAdded();
  block(matchAddInventory(x.id, ANY), function () {});
});

bthread("Guard: Unique Order", function () {
  const x = waitForAnyOrderAdded();
  block(matchAddOrder(x.id, ANY), function () {});
});

bthread("Guard: Unique Patient", function () {
  const x = waitForAnyPatientAdded();
  block(matchAddPatient(x.id, ANY), function () {});
});

bthread("Guard: Unique Prescription", function () {
  const x = waitForAnyPrescriptionAdded();
  block(matchAddPrescription(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
