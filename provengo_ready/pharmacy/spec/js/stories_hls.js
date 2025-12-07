// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:Drug:nondet:1:1
bthread("crud:Drug:nondet:1:1", function () {
  let id = 200;
  createDrug(id);
  waitForDrugAdded(id);
  tryToAddExistingDrug(id);
  verifyDrugExists(id);
  updateDrug(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrug(id);
  verifyDrugDoesNotExist(id);
});

// Story: crud:Drug:nondet:1:2
bthread("crud:Drug:nondet:1:2", function () {
  let id = 201;
  createDrug(id);
  tryToAddExistingDrug(id);
  updateDrug(id);
  verifyDrugExists(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrug(id);
  verifyDrugDoesNotExist(id);
});

// Story: crud:Drug:nondet:negative:dup-add
bthread("crud:Drug:nondet:negative:dup-add", function () {
  let id = 206;
  createDrug(id);
  verifyDrugExists(id);
  tryToAddExistingDrug(id);
  verifyDrugExists(id);
});

// Monitor: Drug Addition Verification
bthread("monitor:Drug:addition", function () {
  while (true) {
    let item = waitForAnyDrugAdded();
    block(matchDeletedDrug(item.id), function () {
      verifyDrugExists(item.id);
    });
  }
});

// Monitor: Drug Deletion Verification
bthread("monitor:Drug:deletion", function () {
  while (true) {
    let item = waitForAnyDrugDeleted();
    block(matchAddedDrug(item.id), function () {
      verifyDrugDoesNotExist(item.id);
    });
  }
});

// Story: crud:Patient:nondet:1:1
bthread("crud:Patient:nondet:1:1", function () {
  let id = 210;
  createPatient(id);
  waitForPatientAdded(id);
  tryToAddExistingPatient(id);
  verifyPatientExists(id);
  updatePatient(id);
  deletePatient(id);
  tryToDeleteANonExistingPatient(id);
  verifyPatientDoesNotExist(id);
});

// Story: crud:Patient:nondet:1:2
bthread("crud:Patient:nondet:1:2", function () {
  let id = 211;
  createPatient(id);
  tryToAddExistingPatient(id);
  updatePatient(id);
  verifyPatientExists(id);
  deletePatient(id);
  tryToDeleteANonExistingPatient(id);
  verifyPatientDoesNotExist(id);
});

// Story: crud:Patient:nondet:negative:dup-add
bthread("crud:Patient:nondet:negative:dup-add", function () {
  let id = 216;
  createPatient(id);
  verifyPatientExists(id);
  tryToAddExistingPatient(id);
  verifyPatientExists(id);
});

// Monitor: Patient Addition Verification
bthread("monitor:Patient:addition", function () {
  while (true) {
    let item = waitForAnyPatientAdded();
    block(matchDeletedPatient(item.id), function () {
      verifyPatientExists(item.id);
    });
  }
});

// Monitor: Patient Deletion Verification
bthread("monitor:Patient:deletion", function () {
  while (true) {
    let item = waitForAnyPatientDeleted();
    block(matchAddedPatient(item.id), function () {
      verifyPatientDoesNotExist(item.id);
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
