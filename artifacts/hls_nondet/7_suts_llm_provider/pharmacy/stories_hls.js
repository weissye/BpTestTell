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


bthread("DrugLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDrug(x.id);
  const e_add = waitForDrugAdded(id);
  block(matchDeleteDrug(id), function () {
    verifyDrugExists(id);
  });
  updateDrug(x.id);
  updateDrug(x.id);
  const e_upd = waitForDrugUpdated(id);
  block(matchDeleteDrug(id), function () {
    verifyDrugUpdated(id);
  });
  deleteDrug(x.id);
  const e_del = waitForDrugDeleted(id);
  block(matchAddDrug(id), function () {
    verifyDrugDoesNotExist(id);
  });
});

bthread("InventoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInventory(x.id);
  const e_add = waitForInventoryAdded(id);
  block(matchDeleteInventory(id), function () {
    verifyInventoryExists(id);
  });
  updateInventory(x.id);
  updateInventory(x.id);
  const e_upd = waitForInventoryUpdated(id);
  block(matchDeleteInventory(id), function () {
    verifyInventoryUpdated(id);
  });
  deleteInventory(x.id);
  const e_del = waitForInventoryDeleted(id);
  block(matchAddInventory(id), function () {
    verifyInventoryDoesNotExist(id);
  });
});

bthread("OrderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrder(x.id);
  const e_add = waitForOrderAdded(id);
  block(matchDeleteOrder(id), function () {
    verifyOrderExists(id);
  });
  updateOrder(x.id);
  updateOrder(x.id);
  const e_upd = waitForOrderUpdated(id);
  block(matchDeleteOrder(id), function () {
    verifyOrderUpdated(id);
  });
  deleteOrder(x.id);
  const e_del = waitForOrderDeleted(id);
  block(matchAddOrder(id), function () {
    verifyOrderDoesNotExist(id);
  });
});

bthread("PatientLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPatient(x.id);
  const e_add = waitForPatientAdded(id);
  block(matchDeletePatient(id), function () {
    verifyPatientExists(id);
  });
  updatePatient(x.id);
  updatePatient(x.id);
  const e_upd = waitForPatientUpdated(id);
  block(matchDeletePatient(id), function () {
    verifyPatientUpdated(id);
  });
  deletePatient(x.id);
  const e_del = waitForPatientDeleted(id);
  block(matchAddPatient(id), function () {
    verifyPatientDoesNotExist(id);
  });
});

bthread("PrescriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrescription(x.id);
  const e_add = waitForPrescriptionAdded(id);
  block(matchDeletePrescription(id), function () {
    verifyPrescriptionExists(id);
  });
  updatePrescription(x.id);
  updatePrescription(x.id);
  const e_upd = waitForPrescriptionUpdated(id);
  block(matchDeletePrescription(id), function () {
    verifyPrescriptionUpdated(id);
  });
  deletePrescription(x.id);
  const e_del = waitForPrescriptionDeleted(id);
  block(matchAddPrescription(id), function () {
    verifyPrescriptionDoesNotExist(id);
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

bthread("Drug nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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
  const x = pick([{id: "1001"}]);
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

bthread("Drug create verification", function () {
  const e = waitForAnyDrugAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDrug(k, ANY), function () {
    verifyDrugExists(k);
  });
});

bthread("Drug update verification", function () {
  const e = waitForAnyDrugUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDrug(k, ANY), function () {
    verifyDrugUpdated(k);
  });
});

bthread("Drug delete verification", function () {
  const e = waitForAnyDrugDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDrug(k, ANY), function () {
    verifyDrugDoesNotExist(k);
  });
});

bthread("Inventory create verification", function () {
  const e = waitForAnyInventoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInventory(k, ANY), function () {
    verifyInventoryExists(k);
  });
});

bthread("Inventory update verification", function () {
  const e = waitForAnyInventoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInventory(k, ANY), function () {
    verifyInventoryUpdated(k);
  });
});

bthread("Inventory delete verification", function () {
  const e = waitForAnyInventoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInventory(k, ANY), function () {
    verifyInventoryDoesNotExist(k);
  });
});

bthread("Order create verification", function () {
  const e = waitForAnyOrderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrder(k, ANY), function () {
    verifyOrderExists(k);
  });
});

bthread("Order update verification", function () {
  const e = waitForAnyOrderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrder(k, ANY), function () {
    verifyOrderUpdated(k);
  });
});

bthread("Order delete verification", function () {
  const e = waitForAnyOrderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrder(k, ANY), function () {
    verifyOrderDoesNotExist(k);
  });
});

bthread("Patient create verification", function () {
  const e = waitForAnyPatientAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePatient(k, ANY), function () {
    verifyPatientExists(k);
  });
});

bthread("Patient update verification", function () {
  const e = waitForAnyPatientUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePatient(k, ANY), function () {
    verifyPatientUpdated(k);
  });
});

bthread("Patient delete verification", function () {
  const e = waitForAnyPatientDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPatient(k, ANY), function () {
    verifyPatientDoesNotExist(k);
  });
});

bthread("Prescription create verification", function () {
  const e = waitForAnyPrescriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrescription(k, ANY), function () {
    verifyPrescriptionExists(k);
  });
});

bthread("Prescription update verification", function () {
  const e = waitForAnyPrescriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrescription(k, ANY), function () {
    verifyPrescriptionUpdated(k);
  });
});

bthread("Prescription delete verification", function () {
  const e = waitForAnyPrescriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPrescription(k, ANY), function () {
    verifyPrescriptionDoesNotExist(k);
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
