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
  let id = "id_210_" + Math.floor(Math.random() * 10000);
  let name = "name_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createDrug(id, name);
  verifyDrugsExists(id, name);
  updateDrug(id, name);
  // Skip delete for Drugs to prevent foreign key errors (has active dependents)
});

// Story: crud:Drugs:linear:2
bthread("crud:Drugs:linear:2", function () {
  let id = "id_220_" + Math.floor(Math.random() * 10000);
  let name = "name_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createDrug(id, name);
  verifyDrugsExists(id, name);
  updateDrug(id, name);
  // Skip delete for Drugs to prevent foreign key errors (has active dependents)
});

// Story: crud:Drugs:linear:3
bthread("crud:Drugs:linear:3", function () {
  let id = "id_230_" + Math.floor(Math.random() * 10000);
  let name = "name_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createDrug(id, name);
  verifyDrugsExists(id, name);
  updateDrug(id, name);
  // Skip delete for Drugs to prevent foreign key errors (has active dependents)
});

// Monitor: Drugs Verification
bthread("monitor:Drugs", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDrugsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Monitor Drugs: Verifying existence (Deletion skipped due to dependencies)
    verifyDrugsExists(id, name);
  }
});

// Story: crud:Orders:linear:1
bthread("crud:Orders:linear:1", function () {
  let id = "id_260_" + Math.floor(Math.random() * 10000);
  createOrder(id);
  verifyOrdersExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrders(id);
  verifyOrdersDoesNotExist(id);
});

// Story: crud:Orders:linear:2
bthread("crud:Orders:linear:2", function () {
  let id = "id_270_" + Math.floor(Math.random() * 10000);
  createOrder(id);
  verifyOrdersExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrders(id);
  verifyOrdersDoesNotExist(id);
});

// Story: crud:Orders:linear:3
bthread("crud:Orders:linear:3", function () {
  let id = "id_280_" + Math.floor(Math.random() * 10000);
  createOrder(id);
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
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedOrders(id), function() {
      bp.log.info(`Monitor Orders: Verifying persistence of ID ${id} inside deletion block.`);
        verifyOrdersExists(id);
    });
  }
});

// Story: crud:Patients:linear:1
bthread("crud:Patients:linear:1", function () {
  let id = "id_310_" + Math.floor(Math.random() * 10000);
  let name = "name_310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createPatient(id, name);
  verifyPatientsExists(id, name);
  updatePatient(id, name);
  // Skip delete for Patients to prevent foreign key errors (has active dependents)
});

// Story: crud:Patients:linear:2
bthread("crud:Patients:linear:2", function () {
  let id = "id_320_" + Math.floor(Math.random() * 10000);
  let name = "name_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createPatient(id, name);
  verifyPatientsExists(id, name);
  updatePatient(id, name);
  // Skip delete for Patients to prevent foreign key errors (has active dependents)
});

// Story: crud:Patients:linear:3
bthread("crud:Patients:linear:3", function () {
  let id = "id_330_" + Math.floor(Math.random() * 10000);
  let name = "name_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createPatient(id, name);
  verifyPatientsExists(id, name);
  updatePatient(id, name);
  // Skip delete for Patients to prevent foreign key errors (has active dependents)
});

// Monitor: Patients Verification
bthread("monitor:Patients", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPatientsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Monitor Patients: Verifying existence (Deletion skipped due to dependencies)
    verifyPatientsExists(id, name);
  }
});

// Story: crud:Inventory:linear:1
bthread("crud:Inventory:linear:1", function () {
  let id = "id_360_" + Math.floor(Math.random() * 10000);
  let ndc = "ndc_360_" + Math.floor(Math.random() * 10000);
  createInventory(id, ndc);
  verifyInventoryExists(id, ndc);
  updateInventory(id, ndc);
  deleteInventory(id, ndc);
  tryToDeleteANonExistingInventory(id, ndc);
  verifyInventoryDoesNotExist(id, ndc);
});

// Story: crud:Inventory:linear:2
bthread("crud:Inventory:linear:2", function () {
  let id = "id_370_" + Math.floor(Math.random() * 10000);
  let ndc = "ndc_370_" + Math.floor(Math.random() * 10000);
  createInventory(id, ndc);
  verifyInventoryExists(id, ndc);
  updateInventory(id, ndc);
  deleteInventory(id, ndc);
  tryToDeleteANonExistingInventory(id, ndc);
  verifyInventoryDoesNotExist(id, ndc);
});

// Story: crud:Inventory:linear:3
bthread("crud:Inventory:linear:3", function () {
  let id = "id_380_" + Math.floor(Math.random() * 10000);
  let ndc = "ndc_380_" + Math.floor(Math.random() * 10000);
  createInventory(id, ndc);
  verifyInventoryExists(id, ndc);
  updateInventory(id, ndc);
  deleteInventory(id, ndc);
  tryToDeleteANonExistingInventory(id, ndc);
  verifyInventoryDoesNotExist(id, ndc);
});

// Monitor: Inventory Verification
bthread("monitor:Inventory", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyInventoryAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let ndc = (e.data.parameters && e.data.parameters["ndc"]) ? e.data.parameters["ndc"] : e.data["ndc"];
    // Block Deletion while Verifying Existence
    block(matchDeletedInventory(id, ndc), function() {
      bp.log.info(`Monitor Inventory: Verifying persistence of ID ${id} inside deletion block.`);
        verifyInventoryExists(id, ndc);
    });
  }
});

// Story: crud:Prescriptions:linear:1
bthread("crud:Prescriptions:linear:1", function () {
  let id = "id_410_" + Math.floor(Math.random() * 10000);
  createPrescription(id);
  verifyPrescriptionsExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescriptions(id);
  verifyPrescriptionsDoesNotExist(id);
});

// Story: crud:Prescriptions:linear:2
bthread("crud:Prescriptions:linear:2", function () {
  let id = "id_420_" + Math.floor(Math.random() * 10000);
  createPrescription(id);
  verifyPrescriptionsExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescriptions(id);
  verifyPrescriptionsDoesNotExist(id);
});

// Story: crud:Prescriptions:linear:3
bthread("crud:Prescriptions:linear:3", function () {
  let id = "id_430_" + Math.floor(Math.random() * 10000);
  createPrescription(id);
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
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPrescriptions(id), function() {
      bp.log.info(`Monitor Prescriptions: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPrescriptionsExists(id);
    });
  }
});
