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
