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

// ===== PASSIVE ASSERTIONS =====

bthread("Drug create verification", function () {
  const e = waitForAnyDrugAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDrug(k), function () {
    verifyDrugExists(k);
  });
});

bthread("Drug update verification", function () {
  const e = waitForAnyDrugUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDrug(k), function () {
    verifyDrugUpdated(k);
  });
});

bthread("Drug delete verification", function () {
  const e = waitForAnyDrugDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDrug(k), function () {
    verifyDrugDoesNotExist(k);
  });
});

bthread("Inventory create verification", function () {
  const e = waitForAnyInventoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInventory(k), function () {
    verifyInventoryExists(k);
  });
});

bthread("Inventory update verification", function () {
  const e = waitForAnyInventoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInventory(k), function () {
    verifyInventoryUpdated(k);
  });
});

bthread("Inventory delete verification", function () {
  const e = waitForAnyInventoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInventory(k), function () {
    verifyInventoryDoesNotExist(k);
  });
});

bthread("Order create verification", function () {
  const e = waitForAnyOrderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrder(k), function () {
    verifyOrderExists(k);
  });
});

bthread("Order update verification", function () {
  const e = waitForAnyOrderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrder(k), function () {
    verifyOrderUpdated(k);
  });
});

bthread("Order delete verification", function () {
  const e = waitForAnyOrderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrder(k), function () {
    verifyOrderDoesNotExist(k);
  });
});

bthread("Patient create verification", function () {
  const e = waitForAnyPatientAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePatient(k), function () {
    verifyPatientExists(k);
  });
});

bthread("Patient update verification", function () {
  const e = waitForAnyPatientUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePatient(k), function () {
    verifyPatientUpdated(k);
  });
});

bthread("Patient delete verification", function () {
  const e = waitForAnyPatientDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPatient(k), function () {
    verifyPatientDoesNotExist(k);
  });
});

bthread("Prescription create verification", function () {
  const e = waitForAnyPrescriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrescription(k), function () {
    verifyPrescriptionExists(k);
  });
});

bthread("Prescription update verification", function () {
  const e = waitForAnyPrescriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrescription(k), function () {
    verifyPrescriptionUpdated(k);
  });
});

bthread("Prescription delete verification", function () {
  const e = waitForAnyPrescriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrescription(k), function () {
    verifyPrescriptionDoesNotExist(k);
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

bthread("Guard: Unique Drug", function () {
  const x = waitForAnyDrugAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDrug(k, ANY), function () {});
});

bthread("Guard: Unique Inventory", function () {
  const x = waitForAnyInventoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInventory(k, ANY), function () {});
});

bthread("Guard: Unique Order", function () {
  const x = waitForAnyOrderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrder(k, ANY), function () {});
});

bthread("Guard: Unique Patient", function () {
  const x = waitForAnyPatientAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPatient(k, ANY), function () {});
});

bthread("Guard: Unique Prescription", function () {
  const x = waitForAnyPrescriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrescription(k, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReset(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
