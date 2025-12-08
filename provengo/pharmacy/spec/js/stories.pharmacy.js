// Auto-generated stories for pharmacy
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

// Story: crud:Drugs:linear:1
bthread("crud:Drugs:linear:1", function () {
  let id = 210;
  let name = "name_210";
  createDrug(id, name);
  tryToAddExistingDrugs(id, name);
  verifyDrugsExists(id, name);
  updateDrug(id, name);
  deleteDrug(id, name);
  tryToDeleteANonExistingDrugs(id, name);
  verifyDrugsDoesNotExist(id, name);
});

// Story: crud:Drugs:linear:2
bthread("crud:Drugs:linear:2", function () {
  let id = 220;
  let name = "name_220";
  createDrug(id, name);
  tryToAddExistingDrugs(id, name);
  verifyDrugsExists(id, name);
  updateDrug(id, name);
  deleteDrug(id, name);
  tryToDeleteANonExistingDrugs(id, name);
  verifyDrugsDoesNotExist(id, name);
});

// Story: crud:Drugs:linear:3
bthread("crud:Drugs:linear:3", function () {
  let id = 230;
  let name = "name_230";
  createDrug(id, name);
  tryToAddExistingDrugs(id, name);
  verifyDrugsExists(id, name);
  updateDrug(id, name);
  deleteDrug(id, name);
  tryToDeleteANonExistingDrugs(id, name);
  verifyDrugsDoesNotExist(id, name);
});

// Monitor: Drugs Verification
bthread("monitor:Drugs", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDrugsAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let name = (e.data.parameters && e.data.parameters.name) ? e.data.parameters.name : e.data.name;
    // Block Deletion while Verifying Existence
    block(matchDeletedDrugs(id, name), function() {
        verifyDrugsExists(id, name);
    });
  }
});

// Story: crud:Orders:linear:1
bthread("crud:Orders:linear:1", function () {
  let id = 260;
  createOrder(id);
  tryToAddExistingOrders(id);
  verifyOrdersExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrders(id);
  verifyOrdersDoesNotExist(id);
});

// Story: crud:Orders:linear:2
bthread("crud:Orders:linear:2", function () {
  let id = 270;
  createOrder(id);
  tryToAddExistingOrders(id);
  verifyOrdersExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrders(id);
  verifyOrdersDoesNotExist(id);
});

// Story: crud:Orders:linear:3
bthread("crud:Orders:linear:3", function () {
  let id = 280;
  createOrder(id);
  tryToAddExistingOrders(id);
  verifyOrdersExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrders(id);
  verifyOrdersDoesNotExist(id);
});

// Monitor: Orders Verification
bthread("monitor:Orders", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrdersAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    // Block Deletion while Verifying Existence
    block(matchDeletedOrders(id), function() {
        verifyOrdersExists(id);
    });
  }
});

// Story: crud:Patients:linear:1
bthread("crud:Patients:linear:1", function () {
  let id = 310;
  let name = "name_310";
  createPatient(id, name);
  tryToAddExistingPatients(id, name);
  verifyPatientsExists(id, name);
  updatePatient(id, name);
  deletePatient(id, name);
  tryToDeleteANonExistingPatients(id, name);
  verifyPatientsDoesNotExist(id, name);
});

// Story: crud:Patients:linear:2
bthread("crud:Patients:linear:2", function () {
  let id = 320;
  let name = "name_320";
  createPatient(id, name);
  tryToAddExistingPatients(id, name);
  verifyPatientsExists(id, name);
  updatePatient(id, name);
  deletePatient(id, name);
  tryToDeleteANonExistingPatients(id, name);
  verifyPatientsDoesNotExist(id, name);
});

// Story: crud:Patients:linear:3
bthread("crud:Patients:linear:3", function () {
  let id = 330;
  let name = "name_330";
  createPatient(id, name);
  tryToAddExistingPatients(id, name);
  verifyPatientsExists(id, name);
  updatePatient(id, name);
  deletePatient(id, name);
  tryToDeleteANonExistingPatients(id, name);
  verifyPatientsDoesNotExist(id, name);
});

// Monitor: Patients Verification
bthread("monitor:Patients", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPatientsAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let name = (e.data.parameters && e.data.parameters.name) ? e.data.parameters.name : e.data.name;
    // Block Deletion while Verifying Existence
    block(matchDeletedPatients(id, name), function() {
        verifyPatientsExists(id, name);
    });
  }
});

// Story: crud:Prescriptions:linear:1
bthread("crud:Prescriptions:linear:1", function () {
  let id = 360;
  createPrescription(id);
  tryToAddExistingPrescriptions(id);
  verifyPrescriptionsExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescriptions(id);
  verifyPrescriptionsDoesNotExist(id);
});

// Story: crud:Prescriptions:linear:2
bthread("crud:Prescriptions:linear:2", function () {
  let id = 370;
  createPrescription(id);
  tryToAddExistingPrescriptions(id);
  verifyPrescriptionsExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescriptions(id);
  verifyPrescriptionsDoesNotExist(id);
});

// Story: crud:Prescriptions:linear:3
bthread("crud:Prescriptions:linear:3", function () {
  let id = 380;
  createPrescription(id);
  tryToAddExistingPrescriptions(id);
  verifyPrescriptionsExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescriptions(id);
  verifyPrescriptionsDoesNotExist(id);
});

// Monitor: Prescriptions Verification
bthread("monitor:Prescriptions", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPrescriptionsAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    // Block Deletion while Verifying Existence
    block(matchDeletedPrescriptions(id), function() {
        verifyPrescriptionsExists(id);
    });
  }
});

// Story: crud:Inventory:linear:1
bthread("crud:Inventory:linear:1", function () {
  let ndc = "ndc_410";
  createInventory(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
  updateInventory(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
});

// Story: crud:Inventory:linear:2
bthread("crud:Inventory:linear:2", function () {
  let ndc = "ndc_420";
  createInventory(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
  updateInventory(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
});

// Story: crud:Inventory:linear:3
bthread("crud:Inventory:linear:3", function () {
  let ndc = "ndc_430";
  createInventory(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
  updateInventory(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
});

// Monitor: Inventory Verification
bthread("monitor:Inventory", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyInventoryAdded() });
    let ndc = (e.data.parameters && e.data.parameters.ndc) ? e.data.parameters.ndc : e.data.ndc;
    // Block Deletion while Verifying Existence
    block(matchDeletedInventory(ndc), function() {
        verifyInventoryExists(ndc);
    });
  }
});
