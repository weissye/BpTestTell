//@provengo summon rest
// === Auto-generated interfaces for pharmacy ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listDrugs() {
  var url = "/drugs";
  var reqDescription = "List drugs {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createDrug(id, name) {
  var url = "/drugs";
  var reqDescription = "Create drug " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name}) });
  }
  return res;
}

function getDrug(id) {
  var url = "/drugs/" + id;
  var reqDescription = "Get drug " + id;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function updateDrug(id, name) {
  var url = "/drugs/" + id;
  var reqDescription = "Update drug " + id;
  var body = {
    "name": String(name),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name}) });
  }
  return res;
}

function deleteDrug(id) {
  var url = "/drugs/" + id;
  var reqDescription = "Delete drug (idempotent)";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingDrugs(id, name) {
  var url = "/drugs";
  var reqDescription = "Try Add Existing Drugs " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyDrugsRejects(id, name) {
  var url = "/drugs";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
    "name": name,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyDrugsExists(id) {
  var url = "/drugs/" + id;
  var description = "Verify Drugs " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Drugs found");
}

function verifyDrugsDeleted(id) {
  var url = "/drugs/" + id;
  var description = "Verify Drugs " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Drugs correctly deleted (404)");
}

function verifyDrugsDoesNotExist(id) { verifyDrugsDeleted(id); }

function matchAnyDrugsAdded() {
  return bp.EventSet("Any Drugs Added", function(e) {
      return e.name.startsWith("Done: Positive: Create drug");
  });
}

function matchDeletedDrugs(id, name) {
  return bp.EventSet("Delete Drugs", function(e) {
      return e.name.startsWith("Done: Positive: Delete drug (idempotent)");
  });
}

function listOrders() {
  var url = "/orders";
  var reqDescription = "List orders {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createOrder(id) {
  var url = "/orders";
  var reqDescription = "Create order " + id;
  var body = {
    "id": String(id),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function getOrder(id) {
  var url = "/orders/" + id;
  var reqDescription = "Get order " + id;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function updateOrder(id) {
  var url = "/orders/" + id;
  var reqDescription = "Update order " + id;
  var body = {};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function deleteOrder(id) {
  var url = "/orders/" + id;
  var reqDescription = "Delete order " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingOrders(id) {
  var url = "/orders";
  var reqDescription = "Try Add Existing Orders " + id;
  var body = {
    "id": String(id),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyOrdersRejects(id) {
  var url = "/orders";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyOrdersExists(id) {
  var url = "/orders/" + id;
  var description = "Verify Orders " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Orders found");
}

function verifyOrdersDeleted(id) {
  var url = "/orders/" + id;
  var description = "Verify Orders " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Orders correctly deleted (404)");
}

function verifyOrdersDoesNotExist(id) { verifyOrdersDeleted(id); }

function matchAnyOrdersAdded() {
  return bp.EventSet("Any Orders Added", function(e) {
      return e.name.startsWith("Done: Positive: Create order");
  });
}

function matchDeletedOrders(id) {
  return bp.EventSet("Delete Orders", function(e) {
      return e.name.startsWith("Done: Positive: Delete order");
  });
}

function listPatients() {
  var url = "/patients";
  var reqDescription = "List patients {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createPatient(id, name) {
  var url = "/patients";
  var reqDescription = "Create patient " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name}) });
  }
  return res;
}

function getPatient(id) {
  var url = "/patients/" + id;
  var reqDescription = "Get patient " + id;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function updatePatient(id, name) {
  var url = "/patients/" + id;
  var reqDescription = "Update patient " + id;
  var body = {
    "name": String(name),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name}) });
  }
  return res;
}

function deletePatient(id) {
  var url = "/patients/" + id;
  var reqDescription = "Delete patient (idempotent)";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingPatients(id, name) {
  var url = "/patients";
  var reqDescription = "Try Add Existing Patients " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyPatientsRejects(id, name) {
  var url = "/patients";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
    "name": name,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyPatientsExists(id) {
  var url = "/patients/" + id;
  var description = "Verify Patients " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Patients found");
}

function verifyPatientsDeleted(id) {
  var url = "/patients/" + id;
  var description = "Verify Patients " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Patients correctly deleted (404)");
}

function verifyPatientsDoesNotExist(id) { verifyPatientsDeleted(id); }

function matchAnyPatientsAdded() {
  return bp.EventSet("Any Patients Added", function(e) {
      return e.name.startsWith("Done: Positive: Create patient");
  });
}

function matchDeletedPatients(id, name) {
  return bp.EventSet("Delete Patients", function(e) {
      return e.name.startsWith("Done: Positive: Delete patient (idempotent)");
  });
}

function listInventory() {
  var url = "/inventory";
  var reqDescription = "List inventory {ndc}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createInventory(ndc) {
  var url = "/inventory";
  var reqDescription = "Create inventory " + ndc;
  var body = {
    "ndc": String(ndc),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"ndc": ndc}) });
  }
  return res;
}

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var reqDescription = "Get inventory " + ndc;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function updateInventory(ndc) {
  var url = "/inventory/" + ndc;
  var reqDescription = "Update inventory " + ndc;
  var body = {};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"ndc": ndc}) });
  }
  return res;
}

function deleteInventory(ndc) {
  var url = "/inventory/" + ndc;
  var reqDescription = "Delete inventory " + ndc;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingInventory(ndc) {
  var url = "/inventory";
  var reqDescription = "Try Add Existing Inventory " + ndc;
  var body = {
    "ndc": String(ndc),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyInventoryRejects(ndc) {
  var url = "/inventory";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "ndc": ndc,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyInventoryExists(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify Inventory " + ndc + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Inventory found");
}

function verifyInventoryDeleted(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify Inventory " + ndc + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Inventory correctly deleted (404)");
}

function verifyInventoryDoesNotExist(ndc) { verifyInventoryDeleted(ndc); }

function matchAnyInventoryAdded() {
  return bp.EventSet("Any Inventory Added", function(e) {
      return e.name.startsWith("Done: Positive: Create inventory");
  });
}

function matchDeletedInventory(ndc) {
  return bp.EventSet("Delete Inventory", function(e) {
      return e.name.startsWith("Done: Positive: Delete inventory");
  });
}

function listPrescriptions() {
  var url = "/prescriptions";
  var reqDescription = "List prescriptions {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createPrescription(id) {
  var url = "/prescriptions";
  var reqDescription = "Create prescription " + id;
  var body = {
    "id": String(id),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function getPrescription(id) {
  var url = "/prescriptions/" + id;
  var reqDescription = "Get prescription " + id;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function updatePrescription(id) {
  var url = "/prescriptions/" + id;
  var reqDescription = "Update prescription " + id;
  var body = {};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function deletePrescription(id) {
  var url = "/prescriptions/" + id;
  var reqDescription = "Delete prescription " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingPrescriptions(id) {
  var url = "/prescriptions";
  var reqDescription = "Try Add Existing Prescriptions " + id;
  var body = {
    "id": String(id),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyPrescriptionsRejects(id) {
  var url = "/prescriptions";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyPrescriptionsExists(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify Prescriptions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Prescriptions found");
}

function verifyPrescriptionsDeleted(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify Prescriptions " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Prescriptions correctly deleted (404)");
}

function verifyPrescriptionsDoesNotExist(id) { verifyPrescriptionsDeleted(id); }

function matchAnyPrescriptionsAdded() {
  return bp.EventSet("Any Prescriptions Added", function(e) {
      return e.name.startsWith("Done: Positive: Create prescription");
  });
}

function matchDeletedPrescriptions(id) {
  return bp.EventSet("Delete Prescriptions", function(e) {
      return e.name.startsWith("Done: Positive: Delete prescription");
  });
}
