// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        bp.log.info("DEBUG RESOLVE: Caught event for " + k + ". Event Data: " + JSON.stringify(e.data));
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
            bp.log.info("DEBUG RESOLVE: Mapped " + k + " to " + mappedKey + " -> Value: " + val);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        } else { bp.log.info("DEBUG RESOLVE: Failed to extract value for " + k); }
      }
    }
  }
  return captured;
}

// Story: crud:Drug:nondet:1:1
bthread("crud:Drug:nondet:1:1", function () {
  let id = 200;
  let name = "name_200";
  createDrug(id, name);
  waitForDrugAdded(id, name);
  tryToAddExistingDrug(id, name);
  verifyDrugExists(id, name);
  updateDrug(id, name);
  deleteDrug(id, name);
  tryToDeleteANonExistingDrug(id, name);
  verifyDrugDoesNotExist(id, name);
});

// Story: crud:Drug:nondet:1:2
bthread("crud:Drug:nondet:1:2", function () {
  let id = 201;
  let name = "name_201";
  createDrug(id, name);
  tryToAddExistingDrug(id, name);
  updateDrug(id, name);
  verifyDrugExists(id, name);
  deleteDrug(id, name);
  tryToDeleteANonExistingDrug(id, name);
  verifyDrugDoesNotExist(id, name);
});

// Story: crud:Drug:nondet:negative:dup-add
bthread("crud:Drug:nondet:negative:dup-add", function () {
  let id = 206;
  let name = "name_206";
  createDrug(id, name);
  verifyDrugExists(id, name);
  tryToAddExistingDrug(id, name);
  verifyDrugExists(id, name);
});

// Monitor: Drug Addition Verification
bthread("monitor:Drug:addition", function () {
  while (true) {
    let item = waitForAnyDrugAdded();
    block(matchDeletedDrug(item.id, item.name), function () {
      verifyDrugExists(item.id, item.name);
    });
  }
});

// Monitor: Drug Deletion Verification
bthread("monitor:Drug:deletion", function () {
  while (true) {
    let item = waitForAnyDrugDeleted();
    block(matchAddedDrug(item.id, item.name), function () {
      verifyDrugDoesNotExist(item.id, item.name);
    });
  }
});

// Story: crud:Patient:nondet:1:1
bthread("crud:Patient:nondet:1:1", function () {
  let id = 210;
  let name = "name_210";
  createPatient(id, name);
  waitForPatientAdded(id, name);
  tryToAddExistingPatient(id, name);
  verifyPatientExists(id, name);
  updatePatient(id, name);
  deletePatient(id, name);
  tryToDeleteANonExistingPatient(id, name);
  verifyPatientDoesNotExist(id, name);
});

// Story: crud:Patient:nondet:1:2
bthread("crud:Patient:nondet:1:2", function () {
  let id = 211;
  let name = "name_211";
  createPatient(id, name);
  tryToAddExistingPatient(id, name);
  updatePatient(id, name);
  verifyPatientExists(id, name);
  deletePatient(id, name);
  tryToDeleteANonExistingPatient(id, name);
  verifyPatientDoesNotExist(id, name);
});

// Story: crud:Patient:nondet:negative:dup-add
bthread("crud:Patient:nondet:negative:dup-add", function () {
  let id = 216;
  let name = "name_216";
  createPatient(id, name);
  verifyPatientExists(id, name);
  tryToAddExistingPatient(id, name);
  verifyPatientExists(id, name);
});

// Monitor: Patient Addition Verification
bthread("monitor:Patient:addition", function () {
  while (true) {
    let item = waitForAnyPatientAdded();
    block(matchDeletedPatient(item.id, item.name), function () {
      verifyPatientExists(item.id, item.name);
    });
  }
});

// Monitor: Patient Deletion Verification
bthread("monitor:Patient:deletion", function () {
  while (true) {
    let item = waitForAnyPatientDeleted();
    block(matchAddedPatient(item.id, item.name), function () {
      verifyPatientDoesNotExist(item.id, item.name);
    });
  }
});

// Story: crud:Order:nondet:1:1
bthread("crud:Order:nondet:1:1", function () {
  let id = 220;
  createOrder(id);
  waitForOrderAdded(id);
  tryToAddExistingOrder(id);
  verifyOrderExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrder(id);
  verifyOrderDoesNotExist(id);
});

// Story: crud:Order:nondet:1:2
bthread("crud:Order:nondet:1:2", function () {
  let id = 221;
  createOrder(id);
  tryToAddExistingOrder(id);
  updateOrder(id);
  verifyOrderExists(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrder(id);
  verifyOrderDoesNotExist(id);
});

// Story: crud:Order:nondet:negative:dup-add
bthread("crud:Order:nondet:negative:dup-add", function () {
  let id = 226;
  createOrder(id);
  verifyOrderExists(id);
  tryToAddExistingOrder(id);
  verifyOrderExists(id);
});

// Monitor: Order Addition Verification
bthread("monitor:Order:addition", function () {
  while (true) {
    let item = waitForAnyOrderAdded();
    block(matchDeletedOrder(item.id), function () {
      verifyOrderExists(item.id);
    });
  }
});

// Monitor: Order Deletion Verification
bthread("monitor:Order:deletion", function () {
  while (true) {
    let item = waitForAnyOrderDeleted();
    block(matchAddedOrder(item.id), function () {
      verifyOrderDoesNotExist(item.id);
    });
  }
});

// Story: crud:Prescription:nondet:1:1
bthread("crud:Prescription:nondet:1:1", function () {
  let id = 230;
  createPrescription(id);
  waitForPrescriptionAdded(id);
  tryToAddExistingPrescription(id);
  verifyPrescriptionExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescription(id);
  verifyPrescriptionDoesNotExist(id);
});

// Story: crud:Prescription:nondet:1:2
bthread("crud:Prescription:nondet:1:2", function () {
  let id = 231;
  createPrescription(id);
  tryToAddExistingPrescription(id);
  updatePrescription(id);
  verifyPrescriptionExists(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescription(id);
  verifyPrescriptionDoesNotExist(id);
});

// Story: crud:Prescription:nondet:negative:dup-add
bthread("crud:Prescription:nondet:negative:dup-add", function () {
  let id = 236;
  createPrescription(id);
  verifyPrescriptionExists(id);
  tryToAddExistingPrescription(id);
  verifyPrescriptionExists(id);
});

// Monitor: Prescription Addition Verification
bthread("monitor:Prescription:addition", function () {
  while (true) {
    let item = waitForAnyPrescriptionAdded();
    block(matchDeletedPrescription(item.id), function () {
      verifyPrescriptionExists(item.id);
    });
  }
});

// Monitor: Prescription Deletion Verification
bthread("monitor:Prescription:deletion", function () {
  while (true) {
    let item = waitForAnyPrescriptionDeleted();
    block(matchAddedPrescription(item.id), function () {
      verifyPrescriptionDoesNotExist(item.id);
    });
  }
});

// Story: crud:Inventory:nondet:1:1
bthread("crud:Inventory:nondet:1:1", function () {
  let ndc = 240;
  createInventory(ndc);
  waitForInventoryAdded(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
  updateInventory(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
});

// Story: crud:Inventory:nondet:1:2
bthread("crud:Inventory:nondet:1:2", function () {
  let ndc = 241;
  createInventory(ndc);
  tryToAddExistingInventory(ndc);
  updateInventory(ndc);
  verifyInventoryExists(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
});

// Story: crud:Inventory:nondet:negative:dup-add
bthread("crud:Inventory:nondet:negative:dup-add", function () {
  let ndc = 246;
  createInventory(ndc);
  verifyInventoryExists(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
});

// Monitor: Inventory Addition Verification
bthread("monitor:Inventory:addition", function () {
  while (true) {
    let item = waitForAnyInventoryAdded();
    block(matchDeletedInventory(item.ndc), function () {
      verifyInventoryExists(item.ndc);
    });
  }
});

// Monitor: Inventory Deletion Verification
bthread("monitor:Inventory:deletion", function () {
  while (true) {
    let item = waitForAnyInventoryDeleted();
    block(matchAddedInventory(item.ndc), function () {
      verifyInventoryDoesNotExist(item.ndc);
    });
  }
});
