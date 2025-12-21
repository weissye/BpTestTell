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
});

// Story: crud:Drugs:linear:2
bthread("crud:Drugs:linear:2", function () {
  let id = "id_220_" + Math.floor(Math.random() * 10000);
  let name = "name_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createDrug(id, name);
  verifyDrugsExists(id, name);
  updateDrug(id, name);
});

// Story: crud:Drugs:linear:3
bthread("crud:Drugs:linear:3", function () {
  let id = "id_230_" + Math.floor(Math.random() * 10000);
  let name = "name_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createDrug(id, name);
  verifyDrugsExists(id, name);
  updateDrug(id, name);
});

// Monitor: Drugs Verification
bthread("monitor:Drugs", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyDrugsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
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
});

// Story: crud:Patients:linear:2
bthread("crud:Patients:linear:2", function () {
  let id = "id_320_" + Math.floor(Math.random() * 10000);
  let name = "name_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createPatient(id, name);
  verifyPatientsExists(id, name);
  updatePatient(id, name);
});

// Story: crud:Patients:linear:3
bthread("crud:Patients:linear:3", function () {
  let id = "id_330_" + Math.floor(Math.random() * 10000);
  let name = "name_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createPatient(id, name);
  verifyPatientsExists(id, name);
  updatePatient(id, name);
});

// Monitor: Patients Verification
bthread("monitor:Patients", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPatientsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
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
    block(matchDeletedPrescriptions(id), function() {
      bp.log.info(`Monitor Prescriptions: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPrescriptionsExists(id);
    });
  }
});

// ======================================================
// BUG 1 (Refill Overflow) & BUG 2 (Teleport)
// ======================================================

// Story: flow:Pharmacy:linear:1 (Bug 1)
bthread("flow:Pharmacy:linear:1", function () {
  let patientId; 
  let rxId = "rx_" + Math.floor(Math.random() * 10000);
  let dispenseId = "disp_" + Math.floor(Math.random() * 10000);
  
  let deps = {};
  deps["patientId"] = matchAnyPatientsAdded();
  let captured = resolveDependencies(deps, {"patientId": "id"});
  patientId = captured["patientId"];

  // Create Prescription with 1 refill (Uses custom helper)
  createRxWithRefills(rxId, patientId, "drug_123", 1);

  // Standard Dispense
  dispenseDrug(rxId, patientId, dispenseId);

  // --- BUG 1: ATTACK ---
  let choice = bp.sync({ request: [bp.Event("Path_Trigger_Bug1_Refill"), bp.Event("Path_Skip_Bug1")] });
  if (choice.name === "Path_Trigger_Bug1_Refill") {
      bp.log.info("💊 Triggering BUG 1 (Refill Overflow)");
      for (let i = 1; i <= 3; i++) {
          let attackId = dispenseId + "_attack_" + i;
          bp.sync({ request: bp.Event("Dispense_Attack_" + i, {
              lib: "REST", method: "POST", url: "http://localhost:5000/dispense",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ rxId: rxId, patientId: patientId, dispenseId: attackId, status: "active_attack" }),
              parameters: { "description": "Refill Overflow Attack " + i },
              expectedResponseCodes: [201] 
          })});
      }
  } else {
      bp.log.info("✅ Skipping BUG 1");
  }
});

// Story: flow:Pharmacy:linear:2 (Bug 2)
bthread("flow:Pharmacy:linear:2", function () {
  let patientId; 
  let rxId = "rx_tele_" + Math.floor(Math.random() * 10000);
  
  let deps = {};
  deps["patientId"] = matchAnyPatientsAdded();
  let captured = resolveDependencies(deps, {"patientId": "id"});
  patientId = captured["patientId"];

  createRxWithRefills(rxId, patientId, "drug_456", 5);

  let storeId1 = "Store_1_" + Math.floor(Math.random() * 10000);
  createPharmacyStore(storeId1, "Store One", "1st Ave", "555-1111");
  processRx(rxId, storeId1);

  // --- BUG 2: ATTACK ---
  let choice = bp.sync({ request: [bp.Event("Path_Trigger_Bug2_Teleport"), bp.Event("Path_Skip_Bug2")] });
  if (choice.name === "Path_Trigger_Bug2_Teleport") {
      bp.log.info("💣 Triggering BUG 2 (Double Process)");
      
      let storeId2 = "Store_Bug2_Target_" + Math.floor(Math.random() * 10000);
      createPharmacyStore(storeId2, "Bug2 Target Pharmacy", "Conflict Ave", "555-9999");

      bp.sync({ request: bp.Event("Attempt_Double_Process", {
          lib: "REST", method: "POST", url: "http://localhost:5000/process-rx",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ rxId: rxId, storeId: storeId2, status: "active_attack", complaint: "Teleport Crash" }),
          parameters: { "description": "Trigger Double Process Crash" }, 
          expectedResponseCodes: [201] 
      })});
  } else {
      bp.log.info("✅ Skipping BUG 2");
  }
});

// ==============================================================
// CUSTOM HELPERS (Not present in interfaces.js - REQUIRED)
// ==============================================================

function createRxWithRefills(id, pid, did, refills) {
    bp.sync({ request: bp.Event("Create_Rx", {
        lib: "REST", method: "POST", url: "http://localhost:5000/prescriptions",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, patientId: pid, drugId: did, refillsLeft: refills }),
        parameters: { description: "Create Rx " + id },
        expectedResponseCodes: [201]
    })});
}

function createPharmacyStore(id, name, addr, phone) {
    bp.sync({ request: bp.Event("Create_Store", {
        lib: "REST", method: "POST", url: "http://localhost:5000/stores",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId: id, name: name, address: addr, phone: phone }),
        parameters: { description: "Create Store " + id }, 
        expectedResponseCodes: [201]
    })});
}
function matchAnyStoresAdded() { return bp.EventSet("Match_Stores", function(e){ return e.name.includes("Create_Store"); }); }

function dispenseDrug(rxId, pid, dispId) {
    bp.sync({ request: bp.Event("Dispense", {
        lib: "REST", method: "POST", url: "http://localhost:5000/dispense",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rxId: rxId, patientId: pid, dispenseId: dispId }),
        parameters: { description: "Dispense " + dispId },
        expectedResponseCodes: [201]
    })});
}

function processRx(rxId, storeId) {
    bp.sync({ request: bp.Event("Process_Rx", {
        lib: "REST", method: "POST", url: "http://localhost:5000/process-rx",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rxId: rxId, storeId: storeId }),
        parameters: { description: "Process Rx at " + storeId }, 
        expectedResponseCodes: [201]
    })});
}