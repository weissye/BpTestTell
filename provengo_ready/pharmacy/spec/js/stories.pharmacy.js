// Auto-generated stories for Pharmacy
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

// Story: crud:Patients:linear:1
bthread("crud:Patients:linear:1", function () {
  let id = "pat_" + Math.floor(Math.random() * 10000);
  createPatient(id, "John Doe", "555-0100");
  verifyPatientsExists(id);
  updatePatient(id, "John Doe Jr", "555-0101");
});

// Story: crud:Drugs:linear:1
bthread("crud:Drugs:linear:1", function () {
  let id = "drug_" + Math.floor(Math.random() * 10000);
  createDrug(id, "Aspirin", "500mg");
  verifyDrugsExists(id);
});

// Story: crud:Stores:linear:1
bthread("crud:Stores:linear:1", function () {
  let id = "store_" + Math.floor(Math.random() * 10000);
  createStore(id, "Main St Pharmacy", "123 Main St", "555-9999");
  verifyStoresExists(id);
});

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

  // 1. Create Prescription with 1 refill
  createPrescription(rxId, patientId, "drug_123", 1);
  verifyPrescriptionsExists(rxId);

  // 2. Standard Dispense (should work)
  dispenseMedication(rxId, patientId, dispenseId);

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
  let storeId1; // Resolved Dependency
  
  let deps = {};
  deps["patientId"] = matchAnyPatientsAdded();
  deps["storeId1"] = matchAnyStoresAdded();
  let captured = resolveDependencies(deps, {"patientId": "id", "storeId1": "storeId"});
  patientId = captured["patientId"];
  storeId1 = captured["storeId1"];

  // 1. Create Prescription
  createPrescription(rxId, patientId, "drug_456", 5);

  // 2. Process at Store 1 (Standard)
  processPrescription(rxId, storeId1);

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
      bp.sync({ request: bp.Event("Create_Store_For_Bug2", {
          lib: "REST", method: "POST", url: "http://localhost:5000/stores",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ 
              storeId: storeId2, name: "Bug2 Target Pharmacy", 
              address: "Conflict Ave", phone: "555-9999" 
          }),
          parameters: { "description": "Setup Store for Bug 2" }, expectedResponseCodes: [201]
      })});

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

// === Helper Functions (Fixed: Added 'parameters') ===

function createPatient(id, name, phone) {
    bp.sync({ request: bp.Event("Create_Patient", {
        lib: "REST", method: "POST", url: "http://localhost:5000/patients",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, name: name, phone: phone }),
        parameters: { description: "Create Patient " + id }, // FIX
        expectedResponseCodes: [201]
    })});
}
function matchAnyPatientsAdded() { return bp.EventSet("Match_Patients", function(e){ return e.name.includes("Create_Patient"); }); }

function createDrug(id, name, dose) {
    bp.sync({ request: bp.Event("Create_Drug", {
        lib: "REST", method: "POST", url: "http://localhost:5000/drugs",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, name: name, dosage: dose }),
        parameters: { description: "Create Drug " + id }, // FIX
        expectedResponseCodes: [201]
    })});
}

function createStore(id, name, addr, phone) {
    bp.sync({ request: bp.Event("Create_Store", {
        lib: "REST", method: "POST", url: "http://localhost:5000/stores",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ storeId: id, name: name, address: addr, phone: phone }),
        parameters: { description: "Create Store " + id }, // FIX
        expectedResponseCodes: [201]
    })});
}
function matchAnyStoresAdded() { return bp.EventSet("Match_Stores", function(e){ return e.name.includes("Create_Store"); }); }

function createPrescription(id, pid, did, refills) {
    bp.sync({ request: bp.Event("Create_Rx", {
        lib: "REST", method: "POST", url: "http://localhost:5000/prescriptions",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id: id, patientId: pid, drugId: did, refillsLeft: refills }),
        parameters: { description: "Create Rx " + id }, // FIX
        expectedResponseCodes: [201]
    })});
}
function matchAnyPrescriptionsAdded() { return bp.EventSet("Match_Rx", function(e){ return e.name.includes("Create_Rx"); }); }

function dispenseMedication(rxId, pid, dispId) {
    bp.sync({ request: bp.Event("Dispense", {
        lib: "REST", method: "POST", url: "http://localhost:5000/dispense",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rxId: rxId, patientId: pid, dispenseId: dispId }),
        parameters: { description: "Dispense " + dispId }, // FIX
        expectedResponseCodes: [201]
    })});
}

function processPrescription(rxId, storeId) {
    bp.sync({ request: bp.Event("Process_Rx", {
        lib: "REST", method: "POST", url: "http://localhost:5000/process-rx",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ rxId: rxId, storeId: storeId }),
        parameters: { description: "Process Rx at " + storeId }, // FIX
        expectedResponseCodes: [201]
    })});
}

// Verification placeholders
function verifyPatientsExists(id) {}
function verifyDrugsExists(id) {}
function verifyStoresExists(id) {}
function verifyPrescriptionsExists(id) {}
function updatePatient(id, name, phone) {}
function updateDrug(id, name) {}
function updateStore(id) {} // Add if needed
function verifyOrdersExists(id) {}
function updateOrder(id) {}
function deleteOrder(id) {}
function tryToDeleteANonExistingOrders(id) {}
function verifyOrdersDoesNotExist(id) {}
function matchAnyOrdersAdded() { return bp.EventSet("Match_Orders", function(e){ return false; }); } 
function matchDeletedOrders(id) { return bp.EventSet("Match_Del_Orders", function(e){ return false; }); }

function createInventory(id, ndc) {} // Add if needed
function verifyInventoryExists(id, ndc) {}
function updateInventory(id, ndc) {}
function deleteInventory(id, ndc) {}
function tryToDeleteANonExistingInventory(id, ndc) {}
function verifyInventoryDoesNotExist(id, ndc) {}
function matchAnyInventoryAdded() { return bp.EventSet("Match_Inv", function(e){ return false; }); } 
function matchDeletedInventory(id, ndc) { return bp.EventSet("Match_Del_Inv", function(e){ return false; }); }

function createOrder(id) {} // Add if needed
function updatePrescription(id) {}
function deletePrescription(id) {}
function tryToDeleteANonExistingPrescriptions(id) {}
function verifyPrescriptionsDoesNotExist(id) {}
function matchDeletedPrescriptions(id) { return bp.EventSet("Match_Del_Rx", function(e){ return false; }); }