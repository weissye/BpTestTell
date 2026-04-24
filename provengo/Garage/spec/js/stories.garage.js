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

// ======================================================
// NEW STORIES: BUG 1 (Refill Overflow) & BUG 2 (Teleport)
// ======================================================

// Story: flow:Pharmacy:linear:1
// === BUG 1: REFILL OVERFLOW (50% Chance) ===
bthread("flow:Pharmacy:linear:1", function () {
  let patientId; 
  let rxId = "rx_" + Math.floor(Math.random() * 10000);
  let dispenseId = "disp_" + Math.floor(Math.random() * 10000);
  
  // Dependencies
  let deps = {};
  deps["patientId"] = matchAnyPatientsAdded();
  let captured = resolveDependencies(deps, {"patientId": "id"});
  patientId = captured["patientId"];

  // 1. Create Prescription with 1 refill (Uses custom helper with refills)
  createRxWithRefills(rxId, patientId, "drug_123", 1);
  verifyPrescriptionsExists(rxId);

  // 2. Standard Dispense (should work)
  dispenseDrug(rxId, patientId, dispenseId);

  // --- BUG 1 PATH SELECTION ---
  let choice = bp.sync({
      request: [
          bp.Event("Path_Trigger_Bug1_Refill"), 
          bp.Event("Path_Skip_Bug1")
      ]
  });

  if (choice.name === "Path_Trigger_Bug1_Refill") {
      bp.log.info("💊 Path Selected: Triggering BUG 1 (Refill Overflow)");
      for (let i = 1; i <= 3; i++) {
          let attackId = dispenseId + "_attack_" + i;
          bp.sync({ request: bp.Event("Dispense_Attack_" + i, {
              lib: "REST", method: "POST", url: "http://localhost:5000/dispense",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({ 
                  rxId: rxId, 
                  patientId: patientId, 
                  dispenseId: attackId,
                  status: "active_attack" 
              }),
              parameters: { "description": "Refill Overflow Attack " + i },
              expectedResponseCodes: [201] 
          })});
      }
  } else {
      bp.log.info("✅ Path Selected: Skipping BUG 1");
  }
});

// Story: flow:Pharmacy:linear:2
// === BUG 2: TELEPORT / DOUBLE PROCESS (50% Chance) ===
bthread("flow:Pharmacy:linear:2", function () {
  let patientId; 
  let rxId = "rx_tele_" + Math.floor(Math.random() * 10000);
  // Note: Standard 'matchAnyStoresAdded' matches 'createStore' from interfaces.js 
  // which might fail if we need specific phone data. 
  // For the bug setup, we create our own store.
  
  let deps = {};
  deps["patientId"] = matchAnyPatientsAdded();
  let captured = resolveDependencies(deps, {"patientId": "id"});
  patientId = captured["patientId"];

  // 1. Create Prescription
  createRxWithRefills(rxId, patientId, "drug_456", 5);

  // 2. Create Store 1 (Custom helper with phone) and Process
  let storeId1 = "Store_1_" + Math.floor(Math.random() * 10000);
  createPharmacyStore(storeId1, "Store One", "1st Ave", "555-1111");
  processRx(rxId, storeId1);

  // --- BUG 2 PATH SELECTION ---
  let choice = bp.sync({
      request: [
          bp.Event("Path_Trigger_Bug2_Teleport"), 
          bp.Event("Path_Skip_Bug2")
      ]
  });

  if (choice.name === "Path_Trigger_Bug2_Teleport") {
      bp.log.info("💣 Path Selected: Triggering BUG 2 (Double Process)");
      
      // 1. EXPLICITLY CREATE Store 2 (Force dependency)
      let storeId2 = "Store_Bug2_Target_" + Math.floor(Math.random() * 10000);
      createPharmacyStore(storeId2, "Bug2 Target Pharmacy", "Conflict Ave", "555-9999");

      // 2. Force Process at Store 2 (CRASH TARGET)
      bp.sync({ request: bp.Event("Attempt_Double_Process", {
          lib: "REST", method: "POST", url: "http://localhost:5000/process-rx",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
              rxId: rxId, 
              storeId: storeId2, 
              status: "active_attack",
              complaint: "Teleport Crash"
          }),
          parameters: { "description": "Trigger Double Process Crash" }, 
          expectedResponseCodes: [201] 
      })});
  } else {
      bp.log.info("✅ Path Selected: Skipping BUG 2");
  }
});

// === Helper Functions for Bugs (With 'parameters' fixed) ===

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

function createRxWithRefills(id, pid, did, refills) {
    bp.sync({ request: bp.Event("Create_Rx", {
        lib: "REST", method: "POST", url: "http://localhost:5000/prescriptions",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, patientId: pid, drugId: did, refillsLeft: refills }),
        parameters: { description: "Create Rx " + id },
        expectedResponseCodes: [201]
    })});
}

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