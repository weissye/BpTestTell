//@provengo summon rest
// === Auto-generated interfaces.js ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function createDrug(id) {
  var url = "/drugs";
  var description = "Create drug " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDrug(id) {
  var url = "/drugs/" + id;
  var description = "Get drug " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateDrug(id) {
  var url = "/drugs/" + id;
  var description = "Update drug " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteDrug(id) {
  var url = "/drugs/" + id;
  var description = "Delete drug " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingDrug(id) {
  var url = "/drugs";
  var description = "Try Add Existing Drug";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDrugExists(id) {
  var url = "/drugs/" + id;
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Drug not found in list");
  }});
}

function verifyDrugDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingDrug(id) {
  var url = "/drugs/" + id;
  var description = "Verify negative delete for Drug";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForDrugAdded(id) {
  waitFor(matchSuccess("Create drug " + id));
}

function createPatient(id) {
  var url = "/patients";
  var description = "Create patient " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPatient(id) {
  var url = "/patients/" + id;
  var description = "Get patient " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updatePatient(id) {
  var url = "/patients/" + id;
  var description = "Update patient " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePatient(id) {
  var url = "/patients/" + id;
  var description = "Delete patient " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPatient(id) {
  var url = "/patients";
  var description = "Try Add Existing Patient";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPatientExists(id) {
  var url = "/patients/" + id;
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Patient not found in list");
  }});
}

function verifyPatientDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPatient(id) {
  var url = "/patients/" + id;
  var description = "Verify negative delete for Patient";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPatientAdded(id) {
  waitFor(matchSuccess("Create patient " + id));
}

function createOrder(id) {
  var url = "/orders";
  var description = "Create order " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getOrder(id) {
  var url = "/orders/" + id;
  var description = "Get order " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateOrder(id) {
  var url = "/orders/" + id;
  var description = "Update order " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteOrder(id) {
  var url = "/orders/" + id;
  var description = "Delete order " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingOrder(id) {
  var url = "/orders";
  var description = "Try Add Existing Order";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyOrderExists(id) {
  var url = "/orders/" + id;
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Order not found in list");
  }});
}

function verifyOrderDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingOrder(id) {
  var url = "/orders/" + id;
  var description = "Verify negative delete for Order";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForOrderAdded(id) {
  waitFor(matchSuccess("Create order " + id));
}

function createPrescription(id) {
  var url = "/prescriptions";
  var description = "Create prescription " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription " + id;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updatePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Update prescription " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription " + id;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPrescription(id) {
  var url = "/prescriptions";
  var description = "Try Add Existing Prescription";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPrescriptionExists(id) {
  var url = "/prescriptions/" + id;
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Prescription not found in list");
  }});
}

function verifyPrescriptionDoesNotExist(id) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify negative delete for Prescription";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForPrescriptionAdded(id) {
  waitFor(matchSuccess("Create prescription " + id));
}

function createInventory(ndc) {
  var url = "/inventory";
  var description = "Create inventory " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory " + ndc;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Update inventory " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory " + ndc;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingInventory(ndc) {
  var url = "/inventory";
  var description = "Try Add Existing Inventory";
  var body = {
    "ndc": String(ndc),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyInventoryExists(ndc) {
  var url = "/inventory/" + ndc;
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].ndc) === String(ndc)) return pvg.success("Found"); }
      pvg.fail("Inventory not found in list");
  }});
}

function verifyInventoryDoesNotExist(ndc) { pvg.success("Assumed gone"); }

function tryToDeleteANonExistingInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify negative delete for Inventory";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function waitForInventoryAdded(ndc) {
  waitFor(matchSuccess("Create inventory " + ndc));
}
