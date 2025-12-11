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
  let id = "id_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createDrug(id);
  verifyDrugsExists(id);
  updateDrug(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrugs(id);
  verifyDrugsDoesNotExist(id);
});

// Story: crud:Drugs:linear:2
bthread("crud:Drugs:linear:2", function () {
  let id = "id_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createDrug(id);
  verifyDrugsExists(id);
  updateDrug(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrugs(id);
  verifyDrugsDoesNotExist(id);
});

// Story: crud:Drugs:linear:3
bthread("crud:Drugs:linear:3", function () {
  let id = "id_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createDrug(id);
  verifyDrugsExists(id);
  updateDrug(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrugs(id);
  verifyDrugsDoesNotExist(id);
});

// Monitor: Drugs Verification
bthread("monitor:Drugs", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDrugsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDrugs(id), function() {
      bp.log.info(`Monitor Drugs: Verifying persistence of ID ${id} inside deletion block.`);
        verifyDrugsExists(id);
    });
  }
});

// Story: crud:Orders:linear:1
bthread("crud:Orders:linear:1", function () {
  let id = "id_260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createOrder(id);
  verifyOrdersExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrders(id);
  verifyOrdersDoesNotExist(id);
});

// Story: crud:Orders:linear:2
bthread("crud:Orders:linear:2", function () {
  let id = "id_270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createOrder(id);
  verifyOrdersExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrders(id);
  verifyOrdersDoesNotExist(id);
});

// Story: crud:Orders:linear:3
bthread("crud:Orders:linear:3", function () {
  let id = "id_280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
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
  let id = "id_310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createPatient(id);
  verifyPatientsExists(id);
  updatePatient(id);
  deletePatient(id);
  tryToDeleteANonExistingPatients(id);
  verifyPatientsDoesNotExist(id);
});

// Story: crud:Patients:linear:2
bthread("crud:Patients:linear:2", function () {
  let id = "id_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createPatient(id);
  verifyPatientsExists(id);
  updatePatient(id);
  deletePatient(id);
  tryToDeleteANonExistingPatients(id);
  verifyPatientsDoesNotExist(id);
});

// Story: crud:Patients:linear:3
bthread("crud:Patients:linear:3", function () {
  let id = "id_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createPatient(id);
  verifyPatientsExists(id);
  updatePatient(id);
  deletePatient(id);
  tryToDeleteANonExistingPatients(id);
  verifyPatientsDoesNotExist(id);
});

// Monitor: Patients Verification
bthread("monitor:Patients", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPatientsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPatients(id), function() {
      bp.log.info(`Monitor Patients: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPatientsExists(id);
    });
  }
});

// Story: crud:Inventory:linear:1
bthread("crud:Inventory:linear:1", function () {
  let id = "id_360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let ndc = "ndc_360_" + Math.floor(Math.random() * 10000);
  createInventory(id, ndc);
});

// Story: crud:Inventory:linear:2
bthread("crud:Inventory:linear:2", function () {
  let id = "id_370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let ndc = "ndc_370_" + Math.floor(Math.random() * 10000);
  createInventory(id, ndc);
});

// Story: crud:Inventory:linear:3
bthread("crud:Inventory:linear:3", function () {
  let id = "id_380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let ndc = "ndc_380_" + Math.floor(Math.random() * 10000);
  createInventory(id, ndc);
});

// Story: crud:Prescriptions:linear:1
bthread("crud:Prescriptions:linear:1", function () {
  let id = "id_410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createPrescription(id);
  verifyPrescriptionsExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescriptions(id);
  verifyPrescriptionsDoesNotExist(id);
});

// Story: crud:Prescriptions:linear:2
bthread("crud:Prescriptions:linear:2", function () {
  let id = "id_420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createPrescription(id);
  verifyPrescriptionsExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescriptions(id);
  verifyPrescriptionsDoesNotExist(id);
});

// Story: crud:Prescriptions:linear:3
bthread("crud:Prescriptions:linear:3", function () {
  let id = "id_430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
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
