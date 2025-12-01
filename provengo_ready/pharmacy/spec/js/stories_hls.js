// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
      }
    }
  }
  return captured;
}

// Story: crud:Drug:nondet:1:1
bthread("crud:Drug:nondet:1:1", function () {
  let id = 200;
  createDrug(id);
  // waitForDrugAdded(id);
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
  // waitForDrugAdded(id);
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
  // waitForDrugAdded(id);
  verifyDrugExists(id);
  tryToAddExistingDrug(id);
  verifyDrugExists(id);
});

// Story: crud:Patient:nondet:1:1
bthread("crud:Patient:nondet:1:1", function () {
  let id = 210;
  createPatient(id);
  // waitForPatientAdded(id);
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
  // waitForPatientAdded(id);
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
  // waitForPatientAdded(id);
  verifyPatientExists(id);
  tryToAddExistingPatient(id);
  verifyPatientExists(id);
});

// Story: crud:Order:nondet:1:1
bthread("crud:Order:nondet:1:1", function () {
  let id = 220;
  createOrder(id);
  // waitForOrderAdded(id);
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
  // waitForOrderAdded(id);
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
  // waitForOrderAdded(id);
  verifyOrderExists(id);
  tryToAddExistingOrder(id);
  verifyOrderExists(id);
});

// Story: crud:Prescription:nondet:1:1
bthread("crud:Prescription:nondet:1:1", function () {
  let id = 230;
  createPrescription(id);
  // waitForPrescriptionAdded(id);
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
  // waitForPrescriptionAdded(id);
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
  // waitForPrescriptionAdded(id);
  verifyPrescriptionExists(id);
  tryToAddExistingPrescription(id);
  verifyPrescriptionExists(id);
});

// Story: crud:Inventory:nondet:1:1
bthread("crud:Inventory:nondet:1:1", function () {
  let ndc = 240;
  createInventory(ndc);
  // waitForInventoryAdded(ndc);
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
  // waitForInventoryAdded(ndc);
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
  // waitForInventoryAdded(ndc);
  verifyInventoryExists(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
});
