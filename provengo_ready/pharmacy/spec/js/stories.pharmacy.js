// Auto-generated stories for pharmacy
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
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

// Story: Chain Patients_Orders
bthread("chain:Patients_Orders", function () {
  // --- Level 0: Patients ---
  let id_0_0 = 200000 + Math.floor(Math.random()*10000);
  let name_0_0 = "name_0_0_" + Math.floor(Math.random()*1000);
  createPatient(id_0_0, name_0_0);
  verifyPatientsExists(id_0_0, name_0_0);
  updatePatient(id_0_0, name_0_0);
  verifyPatientsExists(id_0_0, name_0_0);
  // --- Level 1: Orders ---
  let id_0_1 = 200000 + Math.floor(Math.random()*10000);
  createOrder(id_0_1);
  verifyOrdersExists(id_0_1);
  updateOrder(id_0_1);
  verifyOrdersExists(id_0_1);
  // --- Teardown Phase (Reverse Order) ---
  deleteOrder(id_0_1);
  verifyOrdersDeleted(id_0_1);
  deletePatient(id_0_0, name_0_0);
  verifyPatientsDeleted(id_0_0, name_0_0);
});

// Story: Chain Patients_Prescriptions
bthread("chain:Patients_Prescriptions", function () {
  // --- Level 0: Patients ---
  let id_1_0 = 700000 + Math.floor(Math.random()*10000);
  let name_1_0 = "name_1_0_" + Math.floor(Math.random()*1000);
  createPatient(id_1_0, name_1_0);
  verifyPatientsExists(id_1_0, name_1_0);
  updatePatient(id_1_0, name_1_0);
  verifyPatientsExists(id_1_0, name_1_0);
  // --- Level 1: Prescriptions ---
  let id_1_1 = 700000 + Math.floor(Math.random()*10000);
  createPrescription(id_1_1);
  verifyPrescriptionsExists(id_1_1);
  updatePrescription(id_1_1);
  verifyPrescriptionsExists(id_1_1);
  // --- Teardown Phase (Reverse Order) ---
  deletePrescription(id_1_1);
  verifyPrescriptionsDeleted(id_1_1);
  deletePatient(id_1_0, name_1_0);
  verifyPatientsDeleted(id_1_0, name_1_0);
});

// Story: Chain Drugs_Orders
bthread("chain:Drugs_Orders", function () {
  // --- Level 0: Drugs ---
  let id_2_0 = 1200000 + Math.floor(Math.random()*10000);
  let name_2_0 = "name_2_0_" + Math.floor(Math.random()*1000);
  createDrug(id_2_0, name_2_0);
  verifyDrugsExists(id_2_0, name_2_0);
  updateDrug(id_2_0, name_2_0);
  verifyDrugsExists(id_2_0, name_2_0);
  // --- Level 1: Orders ---
  let id_2_1 = 1200000 + Math.floor(Math.random()*10000);
  createOrder(id_2_1);
  verifyOrdersExists(id_2_1);
  updateOrder(id_2_1);
  verifyOrdersExists(id_2_1);
  // --- Teardown Phase (Reverse Order) ---
  deleteOrder(id_2_1);
  verifyOrdersDeleted(id_2_1);
  deleteDrug(id_2_0, name_2_0);
  verifyDrugsDeleted(id_2_0, name_2_0);
});

// Story: Chain Drugs_Prescriptions
bthread("chain:Drugs_Prescriptions", function () {
  // --- Level 0: Drugs ---
  let id_3_0 = 1700000 + Math.floor(Math.random()*10000);
  let name_3_0 = "name_3_0_" + Math.floor(Math.random()*1000);
  createDrug(id_3_0, name_3_0);
  verifyDrugsExists(id_3_0, name_3_0);
  updateDrug(id_3_0, name_3_0);
  verifyDrugsExists(id_3_0, name_3_0);
  // --- Level 1: Prescriptions ---
  let id_3_1 = 1700000 + Math.floor(Math.random()*10000);
  createPrescription(id_3_1);
  verifyPrescriptionsExists(id_3_1);
  updatePrescription(id_3_1);
  verifyPrescriptionsExists(id_3_1);
  // --- Teardown Phase (Reverse Order) ---
  deletePrescription(id_3_1);
  verifyPrescriptionsDeleted(id_3_1);
  deleteDrug(id_3_0, name_3_0);
  verifyDrugsDeleted(id_3_0, name_3_0);
});

// Story: Chain Drugs_Inventory
bthread("chain:Drugs_Inventory", function () {
  // --- Level 0: Drugs ---
  let id_4_0 = 2200000 + Math.floor(Math.random()*10000);
  let name_4_0 = "name_4_0_" + Math.floor(Math.random()*1000);
  createDrug(id_4_0, name_4_0);
  verifyDrugsExists(id_4_0, name_4_0);
  updateDrug(id_4_0, name_4_0);
  verifyDrugsExists(id_4_0, name_4_0);
  // --- Level 1: Inventory ---
  let id_4_1 = Math.floor(Math.random()*100);
  let ndc_4_1 = 2200000 + Math.floor(Math.random()*10000);
  createInventory(id_4_1, ndc_4_1);
  verifyInventoryExists(id_4_1, ndc_4_1);
  updateInventory(id_4_1, ndc_4_1);
  verifyInventoryExists(id_4_1, ndc_4_1);
  // --- Teardown Phase (Reverse Order) ---
  deleteInventory(id_4_1, ndc_4_1);
  verifyInventoryDeleted(id_4_1, ndc_4_1);
  deleteDrug(id_4_0, name_4_0);
  verifyDrugsDeleted(id_4_0, name_4_0);
});

// Story: crud:Drugs:linear:1
bthread("crud:Drugs:linear:1", function () {
  let id_lin_1 = 2700000 + Math.floor(Math.random()*10000);
  let name_lin_1 = "name_lin_1_" + Math.floor(Math.random()*1000);
  createDrug(id_lin_1, name_lin_1);
  verifyDrugsExists(id_lin_1, name_lin_1);
  updateDrug(id_lin_1, name_lin_1);
  verifyDrugsExists(id_lin_1, name_lin_1);
  // Skip delete for Drugs to prevent foreign key errors (has active dependents)
});

// Story: crud:Drugs:linear:2
bthread("crud:Drugs:linear:2", function () {
  let id_lin_2 = 2700000 + Math.floor(Math.random()*10000);
  let name_lin_2 = "name_lin_2_" + Math.floor(Math.random()*1000);
  createDrug(id_lin_2, name_lin_2);
  verifyDrugsExists(id_lin_2, name_lin_2);
  updateDrug(id_lin_2, name_lin_2);
  verifyDrugsExists(id_lin_2, name_lin_2);
  // Skip delete for Drugs to prevent foreign key errors (has active dependents)
});

// Story: crud:Drugs:linear:3
bthread("crud:Drugs:linear:3", function () {
  let id_lin_3 = 2700000 + Math.floor(Math.random()*10000);
  let name_lin_3 = "name_lin_3_" + Math.floor(Math.random()*1000);
  createDrug(id_lin_3, name_lin_3);
  verifyDrugsExists(id_lin_3, name_lin_3);
  updateDrug(id_lin_3, name_lin_3);
  verifyDrugsExists(id_lin_3, name_lin_3);
  // Skip delete for Drugs to prevent foreign key errors (has active dependents)
});

// Story: crud:Orders:linear:1
bthread("crud:Orders:linear:1", function () {
  let id_lin_1 = 2800000 + Math.floor(Math.random()*10000);
  createOrder(id_lin_1);
  verifyOrdersExists(id_lin_1);
  updateOrder(id_lin_1);
  verifyOrdersExists(id_lin_1);
  deleteOrder(id_lin_1);
  verifyOrdersDeleted(id_lin_1);
});

// Story: crud:Orders:linear:2
bthread("crud:Orders:linear:2", function () {
  let id_lin_2 = 2800000 + Math.floor(Math.random()*10000);
  createOrder(id_lin_2);
  verifyOrdersExists(id_lin_2);
  updateOrder(id_lin_2);
  verifyOrdersExists(id_lin_2);
  deleteOrder(id_lin_2);
  verifyOrdersDeleted(id_lin_2);
});

// Story: crud:Orders:linear:3
bthread("crud:Orders:linear:3", function () {
  let id_lin_3 = 2800000 + Math.floor(Math.random()*10000);
  createOrder(id_lin_3);
  verifyOrdersExists(id_lin_3);
  updateOrder(id_lin_3);
  verifyOrdersExists(id_lin_3);
  deleteOrder(id_lin_3);
  verifyOrdersDeleted(id_lin_3);
});

// Story: crud:Patients:linear:1
bthread("crud:Patients:linear:1", function () {
  let id_lin_1 = 2900000 + Math.floor(Math.random()*10000);
  let name_lin_1 = "name_lin_1_" + Math.floor(Math.random()*1000);
  createPatient(id_lin_1, name_lin_1);
  verifyPatientsExists(id_lin_1, name_lin_1);
  updatePatient(id_lin_1, name_lin_1);
  verifyPatientsExists(id_lin_1, name_lin_1);
  // Skip delete for Patients to prevent foreign key errors (has active dependents)
});

// Story: crud:Patients:linear:2
bthread("crud:Patients:linear:2", function () {
  let id_lin_2 = 2900000 + Math.floor(Math.random()*10000);
  let name_lin_2 = "name_lin_2_" + Math.floor(Math.random()*1000);
  createPatient(id_lin_2, name_lin_2);
  verifyPatientsExists(id_lin_2, name_lin_2);
  updatePatient(id_lin_2, name_lin_2);
  verifyPatientsExists(id_lin_2, name_lin_2);
  // Skip delete for Patients to prevent foreign key errors (has active dependents)
});

// Story: crud:Patients:linear:3
bthread("crud:Patients:linear:3", function () {
  let id_lin_3 = 2900000 + Math.floor(Math.random()*10000);
  let name_lin_3 = "name_lin_3_" + Math.floor(Math.random()*1000);
  createPatient(id_lin_3, name_lin_3);
  verifyPatientsExists(id_lin_3, name_lin_3);
  updatePatient(id_lin_3, name_lin_3);
  verifyPatientsExists(id_lin_3, name_lin_3);
  // Skip delete for Patients to prevent foreign key errors (has active dependents)
});

// Story: crud:Inventory:linear:1
bthread("crud:Inventory:linear:1", function () {
  let id_lin_1 = Math.floor(Math.random()*100);
  let ndc_lin_1 = 3000000 + Math.floor(Math.random()*10000);
  createInventory(id_lin_1, ndc_lin_1);
  verifyInventoryExists(id_lin_1, ndc_lin_1);
  updateInventory(id_lin_1, ndc_lin_1);
  verifyInventoryExists(id_lin_1, ndc_lin_1);
  deleteInventory(id_lin_1, ndc_lin_1);
  verifyInventoryDeleted(id_lin_1, ndc_lin_1);
});

// Story: crud:Inventory:linear:2
bthread("crud:Inventory:linear:2", function () {
  let id_lin_2 = Math.floor(Math.random()*100);
  let ndc_lin_2 = 3000000 + Math.floor(Math.random()*10000);
  createInventory(id_lin_2, ndc_lin_2);
  verifyInventoryExists(id_lin_2, ndc_lin_2);
  updateInventory(id_lin_2, ndc_lin_2);
  verifyInventoryExists(id_lin_2, ndc_lin_2);
  deleteInventory(id_lin_2, ndc_lin_2);
  verifyInventoryDeleted(id_lin_2, ndc_lin_2);
});

// Story: crud:Inventory:linear:3
bthread("crud:Inventory:linear:3", function () {
  let id_lin_3 = Math.floor(Math.random()*100);
  let ndc_lin_3 = 3000000 + Math.floor(Math.random()*10000);
  createInventory(id_lin_3, ndc_lin_3);
  verifyInventoryExists(id_lin_3, ndc_lin_3);
  updateInventory(id_lin_3, ndc_lin_3);
  verifyInventoryExists(id_lin_3, ndc_lin_3);
  deleteInventory(id_lin_3, ndc_lin_3);
  verifyInventoryDeleted(id_lin_3, ndc_lin_3);
});

// Story: crud:Prescriptions:linear:1
bthread("crud:Prescriptions:linear:1", function () {
  let id_lin_1 = 3100000 + Math.floor(Math.random()*10000);
  createPrescription(id_lin_1);
  verifyPrescriptionsExists(id_lin_1);
  updatePrescription(id_lin_1);
  verifyPrescriptionsExists(id_lin_1);
  deletePrescription(id_lin_1);
  verifyPrescriptionsDeleted(id_lin_1);
});

// Story: crud:Prescriptions:linear:2
bthread("crud:Prescriptions:linear:2", function () {
  let id_lin_2 = 3100000 + Math.floor(Math.random()*10000);
  createPrescription(id_lin_2);
  verifyPrescriptionsExists(id_lin_2);
  updatePrescription(id_lin_2);
  verifyPrescriptionsExists(id_lin_2);
  deletePrescription(id_lin_2);
  verifyPrescriptionsDeleted(id_lin_2);
});

// Story: crud:Prescriptions:linear:3
bthread("crud:Prescriptions:linear:3", function () {
  let id_lin_3 = 3100000 + Math.floor(Math.random()*10000);
  createPrescription(id_lin_3);
  verifyPrescriptionsExists(id_lin_3);
  updatePrescription(id_lin_3);
  verifyPrescriptionsExists(id_lin_3);
  deletePrescription(id_lin_3);
  verifyPrescriptionsDeleted(id_lin_3);
});
