//@provengo summon rest
// === Auto-generated interfaces for pharmacy ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listDrugs(id, name) {
  var url = "/drugs";
  var description = "List drugs " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createDrug(id, name) {
  var url = "/drugs";
  var description = "Create drug " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
}

function getDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Get drug " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Update drug " + id;
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
}

function deleteDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Delete drug (idempotent)";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingDrugs(id, name) {
  var url = "/drugs";
  var description = "Try Add Existing Drugs " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDrugsExists(id, name) {
  var url = "/drugs/" + id;
  var description = "Verify Drugs " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Drugs found");
}

function verifyDrugsDoesNotExist(id, name) {
  var url = "/drugs/" + id;
  var description = "Verify Drugs " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Drugs not found");
}

function tryToDeleteANonExistingDrugs(id, name) {
  var url = "/drugs/" + id;
  var description = "Verify negative delete for Drugs";
  svc.delete(url, { expectedResponseCodes: [200, 404, 401], parameters: { description: description } });
}

function matchDeletedDrugs(id, name) {
  return bp.EventSet("Delete Drugs", function(e) {
      return e.name === "Done: " + "Delete drug (idempotent)";
  });
}

function waitForDrugsAdded(id, name) {
  waitFor(matchSuccess("Create drug"));
}

function matchAnyDrugsAdded() {
  return bp.EventSet("Any Drugs Added", function(e) {
      return e.name.startsWith("Done: Create drug");
  });
}

function listOrders(id) {
  var url = "/orders";
  var description = "List orders " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrder(id) {
  var url = "/orders";
  var description = "Create order " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
}

function getOrder(id) {
  var url = "/orders/" + id;
  var description = "Get order " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateOrder(id) {
  var url = "/orders/" + id;
  var description = "Update order " + id;
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
}

function deleteOrder(id) {
  var url = "/orders/" + id;
  var description = "Delete order " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingOrders(id) {
  var url = "/orders";
  var description = "Try Add Existing Orders " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrdersExists(id) {
  var url = "/orders/" + id;
  var description = "Verify Orders " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Orders found");
}

function verifyOrdersDoesNotExist(id) {
  var url = "/orders/" + id;
  var description = "Verify Orders " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Orders not found");
}

function tryToDeleteANonExistingOrders(id) {
  var url = "/orders/" + id;
  var description = "Verify negative delete for Orders";
  svc.delete(url, { expectedResponseCodes: [200, 404, 401], parameters: { description: description } });
}

function matchDeletedOrders(id) {
  return bp.EventSet("Delete Orders", function(e) {
      return e.name === "Done: " + "Delete order";
  });
}

function waitForOrdersAdded(id) {
  waitFor(matchSuccess("Create order"));
}

function matchAnyOrdersAdded() {
  return bp.EventSet("Any Orders Added", function(e) {
      return e.name.startsWith("Done: Create order");
  });
}

function listPatients(id, name) {
  var url = "/patients";
  var description = "List patients " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createPatient(id, name) {
  var url = "/patients";
  var description = "Create patient " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
}

function getPatient(id, name) {
  var url = "/patients/" + id;
  var description = "Get patient " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updatePatient(id, name) {
  var url = "/patients/" + id;
  var description = "Update patient " + id;
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
}

function deletePatient(id, name) {
  var url = "/patients/" + id;
  var description = "Delete patient (idempotent)";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingPatients(id, name) {
  var url = "/patients";
  var description = "Try Add Existing Patients " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPatientsExists(id, name) {
  var url = "/patients/" + id;
  var description = "Verify Patients " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Patients found");
}

function verifyPatientsDoesNotExist(id, name) {
  var url = "/patients/" + id;
  var description = "Verify Patients " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Patients not found");
}

function tryToDeleteANonExistingPatients(id, name) {
  var url = "/patients/" + id;
  var description = "Verify negative delete for Patients";
  svc.delete(url, { expectedResponseCodes: [200, 404, 401], parameters: { description: description } });
}

function matchDeletedPatients(id, name) {
  return bp.EventSet("Delete Patients", function(e) {
      return e.name === "Done: " + "Delete patient (idempotent)";
  });
}

function waitForPatientsAdded(id, name) {
  waitFor(matchSuccess("Create patient"));
}

function matchAnyPatientsAdded() {
  return bp.EventSet("Any Patients Added", function(e) {
      return e.name.startsWith("Done: Create patient");
  });
}

function listInventory(id, ndc) {
  var url = "/inventory";
  var description = "List inventory " + ndc;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createInventory(id, ndc) {
  var url = "/inventory";
  var description = "Create inventory " + ndc;
  var body = {
    "id": String(id),
    "ndc": String(ndc),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "ndc": ndc}) });
}

function getInventory(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory " + ndc;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateInventory(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Update inventory " + ndc;
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "ndc": ndc}) });
}

function deleteInventory(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory " + ndc;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingInventory(id, ndc) {
  var url = "/inventory";
  var description = "Try Add Existing Inventory " + ndc;
  var body = {
    "id": String(id),
    "ndc": String(ndc),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyInventoryExists(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify Inventory " + ndc + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Inventory found");
}

function verifyInventoryDoesNotExist(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify Inventory " + ndc + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Inventory not found");
}

function tryToDeleteANonExistingInventory(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify negative delete for Inventory";
  svc.delete(url, { expectedResponseCodes: [200, 404, 401], parameters: { description: description } });
}

function matchDeletedInventory(id, ndc) {
  return bp.EventSet("Delete Inventory", function(e) {
      return e.name === "Done: " + "Delete inventory";
  });
}

function waitForInventoryAdded(id, ndc) {
  waitFor(matchSuccess("Create inventory"));
}

function matchAnyInventoryAdded() {
  return bp.EventSet("Any Inventory Added", function(e) {
      return e.name.startsWith("Done: Create inventory");
  });
}

function listPrescriptions(id) {
  var url = "/prescriptions";
  var description = "List prescriptions " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createPrescription(id) {
  var url = "/prescriptions";
  var description = "Create prescription " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
}

function getPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updatePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Update prescription " + id;
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
}

function deletePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingPrescriptions(id) {
  var url = "/prescriptions";
  var description = "Try Add Existing Prescriptions " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPrescriptionsExists(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify Prescriptions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Prescriptions found");
}

function verifyPrescriptionsDoesNotExist(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify Prescriptions " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Prescriptions not found");
}

function tryToDeleteANonExistingPrescriptions(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify negative delete for Prescriptions";
  svc.delete(url, { expectedResponseCodes: [200, 404, 401], parameters: { description: description } });
}

function matchDeletedPrescriptions(id) {
  return bp.EventSet("Delete Prescriptions", function(e) {
      return e.name === "Done: " + "Delete prescription";
  });
}

function waitForPrescriptionsAdded(id) {
  waitFor(matchSuccess("Create prescription"));
}

function matchAnyPrescriptionsAdded() {
  return bp.EventSet("Any Prescriptions Added", function(e) {
      return e.name.startsWith("Done: Create prescription");
  });
}
