// Auto-generated stories for pharmacy
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);
    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// --- Monitors ---
// Monitor: Drugs Verification (Existence)
bthread("monitor:Drugs:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDrugsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedDrugs(id, name), function() {
        verifyDrugsExists(id, name);
    });
  }
});

// Monitor: Drugs Verification (Absence)
bthread("monitor:Drugs:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedDrugs() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Block Creation while Verifying Absence
    block(matchAnyDrugsAdded(), function() {
        verifyDrugsDoesNotExist(id, name);
    });
  }
});

// Monitor: Orders Verification (Existence)
bthread("monitor:Orders:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrdersAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedOrders(id), function() {
        verifyOrdersExists(id);
    });
  }
});

// Monitor: Orders Verification (Absence)
bthread("monitor:Orders:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedOrders() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Creation while Verifying Absence
    block(matchAnyOrdersAdded(), function() {
        verifyOrdersDoesNotExist(id);
    });
  }
});

// Monitor: Patients Verification (Existence)
bthread("monitor:Patients:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPatientsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPatients(id, name), function() {
        verifyPatientsExists(id, name);
    });
  }
});

// Monitor: Patients Verification (Absence)
bthread("monitor:Patients:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedPatients() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Block Creation while Verifying Absence
    block(matchAnyPatientsAdded(), function() {
        verifyPatientsDoesNotExist(id, name);
    });
  }
});

// Monitor: Inventory Verification (Existence)
bthread("monitor:Inventory:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyInventoryAdded() });
    let ndc = (e.data.parameters && e.data.parameters["ndc"]) ? e.data.parameters["ndc"] : e.data["ndc"];
    // Block Deletion while Verifying Existence
    block(matchDeletedInventory(ndc), function() {
        verifyInventoryExists(ndc);
    });
  }
});

// Monitor: Inventory Verification (Absence)
bthread("monitor:Inventory:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedInventory() });
    let ndc = (e.data.parameters && e.data.parameters["ndc"]) ? e.data.parameters["ndc"] : e.data["ndc"];
    // Block Creation while Verifying Absence
    block(matchAnyInventoryAdded(), function() {
        verifyInventoryDoesNotExist(ndc);
    });
  }
});

// Monitor: Prescriptions Verification (Existence)
bthread("monitor:Prescriptions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPrescriptionsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPrescriptions(id), function() {
        verifyPrescriptionsExists(id);
    });
  }
});

// Monitor: Prescriptions Verification (Absence)
bthread("monitor:Prescriptions:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedPrescriptions() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Creation while Verifying Absence
    block(matchAnyPrescriptionsAdded(), function() {
        verifyPrescriptionsDoesNotExist(id);
    });
  }
});

// Story: crud:Drugs:linear:1
bthread("crud:Drugs:linear:1", function () {
  // -> Creating Drugs
  let id_Drugs_100 = "id_Drugs_100_" + Math.floor(Math.random()*1000);
  let name_Drugs_100 = "name_Drugs_100_" + Math.floor(Math.random()*1000);
  let res_Drugs_100 = createDrug(id_Drugs_100, name_Drugs_100);
  if (res_Drugs_100 && res_Drugs_100.status >= 200 && res_Drugs_100.status < 300) {
      verifyDrugsExists(id_Drugs_100);
  } else {
      bp.log.error("Failed to create Drugs, skipping verification.");
  }

  // -> Updating Drugs
  let id_Drugs_upd_100 = id_Drugs_100;
  let name_Drugs_upd_100 = "name_Drugs_upd_100_" + Math.floor(Math.random()*1000);
  updateDrug(id_Drugs_upd_100, name_Drugs_upd_100);

  // -> Deleting Drugs
  deleteDrug(id_Drugs_100);
  verifyDrugsDoesNotExist(id_Drugs_100, name_Drugs_100);

});

// Story: crud:Orders:linear:1
bthread("crud:Orders:linear:1", function () {
  // -> Creating Orders
  let id_Orders_110 = "id_Orders_110_" + Math.floor(Math.random()*1000);
  let res_Orders_110 = createOrder(id_Orders_110);
  if (res_Orders_110 && res_Orders_110.status >= 200 && res_Orders_110.status < 300) {
      verifyOrdersExists(id_Orders_110);
  } else {
      bp.log.error("Failed to create Orders, skipping verification.");
  }

  // -> Updating Orders
  let id_Orders_upd_110 = id_Orders_110;
  updateOrder(id_Orders_upd_110);

  // -> Deleting Orders
  deleteOrder(id_Orders_110);
  verifyOrdersDoesNotExist(id_Orders_110);

});

// Story: crud:Patients:linear:1
bthread("crud:Patients:linear:1", function () {
  // -> Creating Patients
  let id_Patients_120 = "id_Patients_120_" + Math.floor(Math.random()*1000);
  let name_Patients_120 = "name_Patients_120_" + Math.floor(Math.random()*1000);
  let res_Patients_120 = createPatient(id_Patients_120, name_Patients_120);
  if (res_Patients_120 && res_Patients_120.status >= 200 && res_Patients_120.status < 300) {
      verifyPatientsExists(id_Patients_120);
  } else {
      bp.log.error("Failed to create Patients, skipping verification.");
  }

  // -> Updating Patients
  let id_Patients_upd_120 = id_Patients_120;
  let name_Patients_upd_120 = "name_Patients_upd_120_" + Math.floor(Math.random()*1000);
  updatePatient(id_Patients_upd_120, name_Patients_upd_120);

  // -> Deleting Patients
  deletePatient(id_Patients_120);
  verifyPatientsDoesNotExist(id_Patients_120, name_Patients_120);

});

// Story: crud:Inventory:linear:1
bthread("crud:Inventory:linear:1", function () {
  // -> Creating Inventory
  let ndc_Inventory_130 = "ndc_Inventory_130_" + Math.floor(Math.random()*1000);
  let res_Inventory_130 = createInventory(ndc_Inventory_130);
  if (res_Inventory_130 && res_Inventory_130.status >= 200 && res_Inventory_130.status < 300) {
      verifyInventoryExists(ndc_Inventory_130);
  } else {
      bp.log.error("Failed to create Inventory, skipping verification.");
  }

  // -> Updating Inventory
  let ndc_Inventory_upd_130 = ndc_Inventory_130;
  updateInventory(ndc_Inventory_upd_130);

  // -> Deleting Inventory
  deleteInventory(ndc_Inventory_130);
  verifyInventoryDoesNotExist(ndc_Inventory_130);

});

// Story: crud:Prescriptions:linear:1
bthread("crud:Prescriptions:linear:1", function () {
  // -> Creating Prescriptions
  let id_Prescriptions_140 = "id_Prescriptions_140_" + Math.floor(Math.random()*1000);
  let res_Prescriptions_140 = createPrescription(id_Prescriptions_140);
  if (res_Prescriptions_140 && res_Prescriptions_140.status >= 200 && res_Prescriptions_140.status < 300) {
      verifyPrescriptionsExists(id_Prescriptions_140);
  } else {
      bp.log.error("Failed to create Prescriptions, skipping verification.");
  }

  // -> Updating Prescriptions
  let id_Prescriptions_upd_140 = id_Prescriptions_140;
  updatePrescription(id_Prescriptions_upd_140);

  // -> Deleting Prescriptions
  deletePrescription(id_Prescriptions_140);
  verifyPrescriptionsDoesNotExist(id_Prescriptions_140);

});

// Story: crud:Drugs:linear:2
bthread("crud:Drugs:linear:2", function () {
  // -> Creating Drugs
  let id_Drugs_150 = "id_Drugs_150_" + Math.floor(Math.random()*1000);
  let name_Drugs_150 = "name_Drugs_150_" + Math.floor(Math.random()*1000);
  let res_Drugs_150 = createDrug(id_Drugs_150, name_Drugs_150);
  if (res_Drugs_150 && res_Drugs_150.status >= 200 && res_Drugs_150.status < 300) {
      verifyDrugsExists(id_Drugs_150);
  } else {
      bp.log.error("Failed to create Drugs, skipping verification.");
  }

  // -> Updating Drugs
  let id_Drugs_upd_150 = id_Drugs_150;
  let name_Drugs_upd_150 = "name_Drugs_upd_150_" + Math.floor(Math.random()*1000);
  updateDrug(id_Drugs_upd_150, name_Drugs_upd_150);

  // -> Deleting Drugs
  deleteDrug(id_Drugs_150);
  verifyDrugsDoesNotExist(id_Drugs_150, name_Drugs_150);

});

// Story: crud:Orders:linear:2
bthread("crud:Orders:linear:2", function () {
  // -> Creating Orders
  let id_Orders_160 = "id_Orders_160_" + Math.floor(Math.random()*1000);
  let res_Orders_160 = createOrder(id_Orders_160);
  if (res_Orders_160 && res_Orders_160.status >= 200 && res_Orders_160.status < 300) {
      verifyOrdersExists(id_Orders_160);
  } else {
      bp.log.error("Failed to create Orders, skipping verification.");
  }

  // -> Updating Orders
  let id_Orders_upd_160 = id_Orders_160;
  updateOrder(id_Orders_upd_160);

  // -> Deleting Orders
  deleteOrder(id_Orders_160);
  verifyOrdersDoesNotExist(id_Orders_160);

});

// Story: crud:Patients:linear:2
bthread("crud:Patients:linear:2", function () {
  // -> Creating Patients
  let id_Patients_170 = "id_Patients_170_" + Math.floor(Math.random()*1000);
  let name_Patients_170 = "name_Patients_170_" + Math.floor(Math.random()*1000);
  let res_Patients_170 = createPatient(id_Patients_170, name_Patients_170);
  if (res_Patients_170 && res_Patients_170.status >= 200 && res_Patients_170.status < 300) {
      verifyPatientsExists(id_Patients_170);
  } else {
      bp.log.error("Failed to create Patients, skipping verification.");
  }

  // -> Updating Patients
  let id_Patients_upd_170 = id_Patients_170;
  let name_Patients_upd_170 = "name_Patients_upd_170_" + Math.floor(Math.random()*1000);
  updatePatient(id_Patients_upd_170, name_Patients_upd_170);

  // -> Deleting Patients
  deletePatient(id_Patients_170);
  verifyPatientsDoesNotExist(id_Patients_170, name_Patients_170);

});

// Story: crud:Inventory:linear:2
bthread("crud:Inventory:linear:2", function () {
  // -> Creating Inventory
  let ndc_Inventory_180 = "ndc_Inventory_180_" + Math.floor(Math.random()*1000);
  let res_Inventory_180 = createInventory(ndc_Inventory_180);
  if (res_Inventory_180 && res_Inventory_180.status >= 200 && res_Inventory_180.status < 300) {
      verifyInventoryExists(ndc_Inventory_180);
  } else {
      bp.log.error("Failed to create Inventory, skipping verification.");
  }

  // -> Updating Inventory
  let ndc_Inventory_upd_180 = ndc_Inventory_180;
  updateInventory(ndc_Inventory_upd_180);

  // -> Deleting Inventory
  deleteInventory(ndc_Inventory_180);
  verifyInventoryDoesNotExist(ndc_Inventory_180);

});

// Story: crud:Prescriptions:linear:2
bthread("crud:Prescriptions:linear:2", function () {
  // -> Creating Prescriptions
  let id_Prescriptions_190 = "id_Prescriptions_190_" + Math.floor(Math.random()*1000);
  let res_Prescriptions_190 = createPrescription(id_Prescriptions_190);
  if (res_Prescriptions_190 && res_Prescriptions_190.status >= 200 && res_Prescriptions_190.status < 300) {
      verifyPrescriptionsExists(id_Prescriptions_190);
  } else {
      bp.log.error("Failed to create Prescriptions, skipping verification.");
  }

  // -> Updating Prescriptions
  let id_Prescriptions_upd_190 = id_Prescriptions_190;
  updatePrescription(id_Prescriptions_upd_190);

  // -> Deleting Prescriptions
  deletePrescription(id_Prescriptions_190);
  verifyPrescriptionsDoesNotExist(id_Prescriptions_190);

});

// Story: crud:Drugs:linear:3
bthread("crud:Drugs:linear:3", function () {
  // -> Creating Drugs
  let id_Drugs_200 = "id_Drugs_200_" + Math.floor(Math.random()*1000);
  let name_Drugs_200 = "name_Drugs_200_" + Math.floor(Math.random()*1000);
  let res_Drugs_200 = createDrug(id_Drugs_200, name_Drugs_200);
  if (res_Drugs_200 && res_Drugs_200.status >= 200 && res_Drugs_200.status < 300) {
      verifyDrugsExists(id_Drugs_200);
  } else {
      bp.log.error("Failed to create Drugs, skipping verification.");
  }

  // -> Updating Drugs
  let id_Drugs_upd_200 = id_Drugs_200;
  let name_Drugs_upd_200 = "name_Drugs_upd_200_" + Math.floor(Math.random()*1000);
  updateDrug(id_Drugs_upd_200, name_Drugs_upd_200);

  // -> Deleting Drugs
  deleteDrug(id_Drugs_200);
  verifyDrugsDoesNotExist(id_Drugs_200, name_Drugs_200);

});

// Story: crud:Orders:linear:3
bthread("crud:Orders:linear:3", function () {
  // -> Creating Orders
  let id_Orders_210 = "id_Orders_210_" + Math.floor(Math.random()*1000);
  let res_Orders_210 = createOrder(id_Orders_210);
  if (res_Orders_210 && res_Orders_210.status >= 200 && res_Orders_210.status < 300) {
      verifyOrdersExists(id_Orders_210);
  } else {
      bp.log.error("Failed to create Orders, skipping verification.");
  }

  // -> Updating Orders
  let id_Orders_upd_210 = id_Orders_210;
  updateOrder(id_Orders_upd_210);

  // -> Deleting Orders
  deleteOrder(id_Orders_210);
  verifyOrdersDoesNotExist(id_Orders_210);

});

// Story: crud:Patients:linear:3
bthread("crud:Patients:linear:3", function () {
  // -> Creating Patients
  let id_Patients_220 = "id_Patients_220_" + Math.floor(Math.random()*1000);
  let name_Patients_220 = "name_Patients_220_" + Math.floor(Math.random()*1000);
  let res_Patients_220 = createPatient(id_Patients_220, name_Patients_220);
  if (res_Patients_220 && res_Patients_220.status >= 200 && res_Patients_220.status < 300) {
      verifyPatientsExists(id_Patients_220);
  } else {
      bp.log.error("Failed to create Patients, skipping verification.");
  }

  // -> Updating Patients
  let id_Patients_upd_220 = id_Patients_220;
  let name_Patients_upd_220 = "name_Patients_upd_220_" + Math.floor(Math.random()*1000);
  updatePatient(id_Patients_upd_220, name_Patients_upd_220);

  // -> Deleting Patients
  deletePatient(id_Patients_220);
  verifyPatientsDoesNotExist(id_Patients_220, name_Patients_220);

});

// Story: crud:Inventory:linear:3
bthread("crud:Inventory:linear:3", function () {
  // -> Creating Inventory
  let ndc_Inventory_230 = "ndc_Inventory_230_" + Math.floor(Math.random()*1000);
  let res_Inventory_230 = createInventory(ndc_Inventory_230);
  if (res_Inventory_230 && res_Inventory_230.status >= 200 && res_Inventory_230.status < 300) {
      verifyInventoryExists(ndc_Inventory_230);
  } else {
      bp.log.error("Failed to create Inventory, skipping verification.");
  }

  // -> Updating Inventory
  let ndc_Inventory_upd_230 = ndc_Inventory_230;
  updateInventory(ndc_Inventory_upd_230);

  // -> Deleting Inventory
  deleteInventory(ndc_Inventory_230);
  verifyInventoryDoesNotExist(ndc_Inventory_230);

});

// Story: crud:Prescriptions:linear:3
bthread("crud:Prescriptions:linear:3", function () {
  // -> Creating Prescriptions
  let id_Prescriptions_240 = "id_Prescriptions_240_" + Math.floor(Math.random()*1000);
  let res_Prescriptions_240 = createPrescription(id_Prescriptions_240);
  if (res_Prescriptions_240 && res_Prescriptions_240.status >= 200 && res_Prescriptions_240.status < 300) {
      verifyPrescriptionsExists(id_Prescriptions_240);
  } else {
      bp.log.error("Failed to create Prescriptions, skipping verification.");
  }

  // -> Updating Prescriptions
  let id_Prescriptions_upd_240 = id_Prescriptions_240;
  updatePrescription(id_Prescriptions_upd_240);

  // -> Deleting Prescriptions
  deletePrescription(id_Prescriptions_240);
  verifyPrescriptionsDoesNotExist(id_Prescriptions_240);

});
