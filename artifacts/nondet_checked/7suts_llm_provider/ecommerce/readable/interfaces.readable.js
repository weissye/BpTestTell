//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 * This approximates the "Library SUT" interface style.
 */

const svc = new RESTSession("http://" + host + ":" + port, "provengo basedclient", {
  headers: { "Content-Type": "application/json" },
});

// Common helpers
function matchesDescription(text) {
  return bp.EventSet("desc-eq", function(e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === text);
  });
}
function matchesDescriptionRegex(rx) {
  return bp.EventSet("desc-rx", function(e) {
    if (!e || !e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return rx.test(e.data.parameters.description);
  });
}

/** === Drug Operations === */

// CREATE
function addDrug(id) {
  svc.post("/drugs", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a drug with id " + id + "" }
    });
}

// DELETE
function deleteDrug(id) {
  svc.delete("/drugs/" + id, {
    parameters: { description: "Delete a drug with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingDrug(id) {
  svc.delete("/drugs/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a drug with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingDrug(id) {
  svc.post("/drugs", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a drug with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a drug with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateDrug(id) {
  svc.put("/drugs/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a drug" }
    });
}

// GET one
function getDrug(id) {
  svc.get("/drugs/" + id, {
    parameters: { description: "Get a drug" }
  });
}

// LIST all
function listDrugs() {
  svc.get("/drugs", {
    parameters: { description: "List drugs" }
  });
}

// Verify exists (by list)
function verifyDrugExists(id) {
  svc.get("/drugs", {
    callback: function (response) {
      drug = JSON.parse(response.body);
      for (let i = 0; i < drug.length; i++) {
        if (drug[i].id === id) {
          return pvg.success("Drug exists");
        }
      }
      return pvg.fail("Expected a drug to exist but it does not");
    },
    parameters: { description: "Verify drug with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyDrugDoesNotExist(id) {
  svc.get("/drugs", {
    callback: function (response) {
      drug = JSON.parse(response.body);
      for (let i = 0; i < drug.length; i++) {
        if (drug[i].id === id) {
          return pvg.fail("Expected a drug to not exist but it does");
        }
      }
      return pvg.success("Drug does not exist");
    },
    parameters: { description: "Verify drug with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddDrug() {
  return bp.EventSet("any-add-drug", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a drug");
  });
}
function matchAddDrug(id) {
  return bp.EventSet("add-drug", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a drug with id " + id + "";
  });
}
function matchAnyDeleteDrug() {
  return bp.EventSet("any-del-drug", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a drug");
  });
}
function matchDeleteDrug(id) {
  return bp.EventSet("del-drug", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a drug with id " + id + "";
  });
}

// Wait helpers
function waitForAnyDrugAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ drug\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ drug\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForDrugAdded(id) {
  waitFor(matchAddDrug(id));
}
function waitForDrugDeleted(id) {
  waitFor(matchDeleteDrug(id));
}
function waitForAnyDrugDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ drug\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ drug\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Inventory Operations === */

// CREATE
function addInventory(ndc) {
  svc.post("/inventory", {
      body: JSON.stringify({ ndc: ndc }),
      parameters: { description: "Add a inventory with ndc " + ndc + "" }
    });
}

// DELETE
function deleteInventory(ndc) {
  svc.delete("/inventory/" + ndc, {
    parameters: { description: "Delete a inventory with ndc " + ndc + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingInventory(ndc) {
  svc.delete("/inventory/" + ndc, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a inventory with ndc " + ndc + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingInventory(ndc) {
  svc.post("/inventory", {
      body: JSON.stringify({ ndc: ndc }),
      parameters: { description: "Add a inventory with ndc " + ndc + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a inventory with ndc " + ndc + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateInventory(ndc) {
  svc.put("/inventory/" + ndc, {
      body: JSON.stringify({ ndc: ndc }),
      parameters: { description: "Update a inventory" }
    });
}

// GET one
function getInventory(ndc) {
  svc.get("/inventory/" + ndc, {
    parameters: { description: "Get a inventory" }
  });
}

// LIST all
function listInventory() {
  svc.get("/inventory", {
    parameters: { description: "List inventory" }
  });
}

// Verify exists (by list)
function verifyInventoryExists(ndc) {
  svc.get("/inventory", {
    callback: function (response) {
      inventory = JSON.parse(response.body);
      for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].ndc === ndc) {
          return pvg.success("Inventory exists");
        }
      }
      return pvg.fail("Expected a inventory to exist but it does not");
    },
    parameters: { description: "Verify inventory with ndc " + ndc + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyInventoryDoesNotExist(ndc) {
  svc.get("/inventory", {
    callback: function (response) {
      inventory = JSON.parse(response.body);
      for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].ndc === ndc) {
          return pvg.fail("Expected a inventory to not exist but it does");
        }
      }
      return pvg.success("Inventory does not exist");
    },
    parameters: { description: "Verify inventory with ndc " + ndc + " does not exist" }
  });
}

// Match helpers
function matchAnyAddInventory() {
  return bp.EventSet("any-add-inventory", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a inventory");
  });
}
function matchAddInventory(ndc) {
  return bp.EventSet("add-inventory", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a inventory with ndc " + ndc + "";
  });
}
function matchAnyDeleteInventory() {
  return bp.EventSet("any-del-inventory", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a inventory");
  });
}
function matchDeleteInventory(ndc) {
  return bp.EventSet("del-inventory", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a inventory with ndc " + ndc + "";
  });
}

// Wait helpers
function waitForAnyInventoryAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ inventory\ with\ ndc\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ inventory\ with\ ndc\ (.+)$/);
    return { ndc: (x)=>x(m[1]) };
}
function waitForInventoryAdded(ndc) {
  waitFor(matchAddInventory(ndc));
}
function waitForInventoryDeleted(ndc) {
  waitFor(matchDeleteInventory(ndc));
}
function waitForAnyInventoryDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ inventory\ with\ ndc\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ inventory\ with\ ndc\ (.+)$/);
    return { ndc: (x)=>x(m[1]) };
}


/** === Order Operations === */

// CREATE
function addOrder(id) {
  svc.post("/orders", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a order with id " + id + "" }
    });
}

// DELETE
function deleteOrder(id) {
  svc.delete("/orders/" + id, {
    parameters: { description: "Delete a order with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrder(id) {
  svc.delete("/orders/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a order with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrder(id) {
  svc.post("/orders", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a order with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a order with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateOrder(id) {
  svc.put("/orders/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a order" }
    });
}

// GET one
function getOrder(id) {
  svc.get("/orders/" + id, {
    parameters: { description: "Get a order" }
  });
}

// LIST all
function listOrders() {
  svc.get("/orders", {
    parameters: { description: "List orders" }
  });
}

// Verify exists (by list)
function verifyOrderExists(id) {
  svc.get("/orders", {
    callback: function (response) {
      order = JSON.parse(response.body);
      for (let i = 0; i < order.length; i++) {
        if (order[i].id === id) {
          return pvg.success("Order exists");
        }
      }
      return pvg.fail("Expected a order to exist but it does not");
    },
    parameters: { description: "Verify order with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrderDoesNotExist(id) {
  svc.get("/orders", {
    callback: function (response) {
      order = JSON.parse(response.body);
      for (let i = 0; i < order.length; i++) {
        if (order[i].id === id) {
          return pvg.fail("Expected a order to not exist but it does");
        }
      }
      return pvg.success("Order does not exist");
    },
    parameters: { description: "Verify order with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrder() {
  return bp.EventSet("any-add-order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a order");
  });
}
function matchAddOrder(id) {
  return bp.EventSet("add-order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a order with id " + id + "";
  });
}
function matchAnyDeleteOrder() {
  return bp.EventSet("any-del-order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a order");
  });
}
function matchDeleteOrder(id) {
  return bp.EventSet("del-order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a order with id " + id + "";
  });
}

// Wait helpers
function waitForAnyOrderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ order\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ order\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForOrderAdded(id) {
  waitFor(matchAddOrder(id));
}
function waitForOrderDeleted(id) {
  waitFor(matchDeleteOrder(id));
}
function waitForAnyOrderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ order\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ order\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Patient Operations === */

// CREATE
function addPatient(id) {
  svc.post("/patients", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a patient with id " + id + "" }
    });
}

// DELETE
function deletePatient(id) {
  svc.delete("/patients/" + id, {
    parameters: { description: "Delete a patient with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPatient(id) {
  svc.delete("/patients/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a patient with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPatient(id) {
  svc.post("/patients", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a patient with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a patient with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePatient(id) {
  svc.put("/patients/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a patient" }
    });
}

// GET one
function getPatient(id) {
  svc.get("/patients/" + id, {
    parameters: { description: "Get a patient" }
  });
}

// LIST all
function listPatients() {
  svc.get("/patients", {
    parameters: { description: "List patients" }
  });
}

// Verify exists (by list)
function verifyPatientExists(id) {
  svc.get("/patients", {
    callback: function (response) {
      patient = JSON.parse(response.body);
      for (let i = 0; i < patient.length; i++) {
        if (patient[i].id === id) {
          return pvg.success("Patient exists");
        }
      }
      return pvg.fail("Expected a patient to exist but it does not");
    },
    parameters: { description: "Verify patient with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPatientDoesNotExist(id) {
  svc.get("/patients", {
    callback: function (response) {
      patient = JSON.parse(response.body);
      for (let i = 0; i < patient.length; i++) {
        if (patient[i].id === id) {
          return pvg.fail("Expected a patient to not exist but it does");
        }
      }
      return pvg.success("Patient does not exist");
    },
    parameters: { description: "Verify patient with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPatient() {
  return bp.EventSet("any-add-patient", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a patient");
  });
}
function matchAddPatient(id) {
  return bp.EventSet("add-patient", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a patient with id " + id + "";
  });
}
function matchAnyDeletePatient() {
  return bp.EventSet("any-del-patient", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a patient");
  });
}
function matchDeletePatient(id) {
  return bp.EventSet("del-patient", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a patient with id " + id + "";
  });
}

// Wait helpers
function waitForAnyPatientAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ patient\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ patient\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPatientAdded(id) {
  waitFor(matchAddPatient(id));
}
function waitForPatientDeleted(id) {
  waitFor(matchDeletePatient(id));
}
function waitForAnyPatientDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ patient\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ patient\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Prescription Operations === */

// CREATE
function addPrescription(id) {
  svc.post("/prescriptions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a prescription with id " + id + "" }
    });
}

// DELETE
function deletePrescription(id) {
  svc.delete("/prescriptions/" + id, {
    parameters: { description: "Delete a prescription with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPrescription(id) {
  svc.delete("/prescriptions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a prescription with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPrescription(id) {
  svc.post("/prescriptions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a prescription with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a prescription with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePrescription(id) {
  svc.put("/prescriptions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a prescription" }
    });
}

// GET one
function getPrescription(id) {
  svc.get("/prescriptions/" + id, {
    parameters: { description: "Get a prescription" }
  });
}

// LIST all
function listPrescriptions() {
  svc.get("/prescriptions", {
    parameters: { description: "List prescriptions" }
  });
}

// Verify exists (by list)
function verifyPrescriptionExists(id) {
  svc.get("/prescriptions", {
    callback: function (response) {
      prescription = JSON.parse(response.body);
      for (let i = 0; i < prescription.length; i++) {
        if (prescription[i].id === id) {
          return pvg.success("Prescription exists");
        }
      }
      return pvg.fail("Expected a prescription to exist but it does not");
    },
    parameters: { description: "Verify prescription with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPrescriptionDoesNotExist(id) {
  svc.get("/prescriptions", {
    callback: function (response) {
      prescription = JSON.parse(response.body);
      for (let i = 0; i < prescription.length; i++) {
        if (prescription[i].id === id) {
          return pvg.fail("Expected a prescription to not exist but it does");
        }
      }
      return pvg.success("Prescription does not exist");
    },
    parameters: { description: "Verify prescription with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPrescription() {
  return bp.EventSet("any-add-prescription", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a prescription");
  });
}
function matchAddPrescription(id) {
  return bp.EventSet("add-prescription", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a prescription with id " + id + "";
  });
}
function matchAnyDeletePrescription() {
  return bp.EventSet("any-del-prescription", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a prescription");
  });
}
function matchDeletePrescription(id) {
  return bp.EventSet("del-prescription", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a prescription with id " + id + "";
  });
}

// Wait helpers
function waitForAnyPrescriptionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ prescription\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ prescription\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPrescriptionAdded(id) {
  waitFor(matchAddPrescription(id));
}
function waitForPrescriptionDeleted(id) {
  waitFor(matchDeletePrescription(id));
}
function waitForAnyPrescriptionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ prescription\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ prescription\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Reset Operations === */

// CREATE
function addReset(id) {
  svc.post("/reset", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a reset with id " + id + "" }
    });
}

// DELETE
function deleteReset(id) {
  svc.delete("/reset/" + id, {
    parameters: { description: "Delete a reset with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingReset(id) {
  svc.delete("/reset/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a reset with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingReset(id) {
  svc.post("/reset", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a reset with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a reset with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateReset(id) {
  svc.put("/reset/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a reset" }
    });
}

// GET one
function getReset(id) {
  svc.get("/reset/" + id, {
    parameters: { description: "Get a reset" }
  });
}

// LIST all
function listReset() {
  svc.get("/reset", {
    parameters: { description: "List reset" }
  });
}

// Verify exists (by list)
function verifyResetExists(id) {
  svc.get("/reset", {
    callback: function (response) {
      reset = JSON.parse(response.body);
      for (let i = 0; i < reset.length; i++) {
        if (reset[i].id === id) {
          return pvg.success("Reset exists");
        }
      }
      return pvg.fail("Expected a reset to exist but it does not");
    },
    parameters: { description: "Verify reset with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyResetDoesNotExist(id) {
  svc.get("/reset", {
    callback: function (response) {
      reset = JSON.parse(response.body);
      for (let i = 0; i < reset.length; i++) {
        if (reset[i].id === id) {
          return pvg.fail("Expected a reset to not exist but it does");
        }
      }
      return pvg.success("Reset does not exist");
    },
    parameters: { description: "Verify reset with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddReset() {
  return bp.EventSet("any-add-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a reset");
  });
}
function matchAddReset(id) {
  return bp.EventSet("add-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a reset with id " + id + "";
  });
}
function matchAnyDeleteReset() {
  return bp.EventSet("any-del-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a reset");
  });
}
function matchDeleteReset(id) {
  return bp.EventSet("del-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a reset with id " + id + "";
  });
}

// Wait helpers
function waitForAnyResetAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ reset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ reset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForResetAdded(id) {
  waitFor(matchAddReset(id));
}
function waitForResetDeleted(id) {
  waitFor(matchDeleteReset(id));
}
function waitForAnyResetDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ reset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ reset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

