//@provengo summon rest
// === Auto-generated interfaces for pharmacy ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listDrugs(id, name) {
  var url = "/drugs";
  var description = "List drugs " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createDrug(id, name) {
  var url = "/drugs";
  var description = "Create drug " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
  return res;
}

function getDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Get drug " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Update drug " + id;
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
  return res;
}

function deleteDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Delete drug (idempotent)";
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingDrugs(id, name) {
  var url = "/drugs";
  var description = "Try Add Existing Drugs " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyDrugsExists(id, name) {
  var url = "/drugs/" + id;
  var description = "Verify Drugs " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Drugs found");
}

function verifyDrugsDeleted(id, name) {
  var url = "/drugs/" + id;
  var description = "Verify Drugs " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Drugs correctly deleted (404)");
}

function verifyDrugsDoesNotExist(id, name) { verifyDrugsDeleted(id, name); }

function matchAnyDrugsAdded() {
  return bp.EventSet("Any Drugs Added", function(e) {
      return e.name.startsWith("Done: Create drug");
  });
}

function listOrders(id) {
  var url = "/orders";
  var description = "List orders " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrder(id) {
  var url = "/orders";
  var description = "Create order " + id;
  var body = {
    "id": String(id),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
  return res;
}

function getOrder(id) {
  var url = "/orders/" + id;
  var description = "Get order " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateOrder(id) {
  var url = "/orders/" + id;
  var description = "Update order " + id;
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
  return res;
}

function deleteOrder(id) {
  var url = "/orders/" + id;
  var description = "Delete order " + id;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingOrders(id) {
  var url = "/orders";
  var description = "Try Add Existing Orders " + id;
  var body = {
    "id": String(id),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
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
      return e.name.startsWith("Done: Create order");
  });
}

function listPatients(id, name) {
  var url = "/patients";
  var description = "List patients " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createPatient(id, name) {
  var url = "/patients";
  var description = "Create patient " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
  return res;
}

function getPatient(id, name) {
  var url = "/patients/" + id;
  var description = "Get patient " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updatePatient(id, name) {
  var url = "/patients/" + id;
  var description = "Update patient " + id;
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name}) });
  return res;
}

function deletePatient(id, name) {
  var url = "/patients/" + id;
  var description = "Delete patient (idempotent)";
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingPatients(id, name) {
  var url = "/patients";
  var description = "Try Add Existing Patients " + id;
  var body = {
    "id": String(id),
    "name": String(name),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyPatientsExists(id, name) {
  var url = "/patients/" + id;
  var description = "Verify Patients " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Patients found");
}

function verifyPatientsDeleted(id, name) {
  var url = "/patients/" + id;
  var description = "Verify Patients " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Patients correctly deleted (404)");
}

function verifyPatientsDoesNotExist(id, name) { verifyPatientsDeleted(id, name); }

function matchAnyPatientsAdded() {
  return bp.EventSet("Any Patients Added", function(e) {
      return e.name.startsWith("Done: Create patient");
  });
}

function listInventory(id, ndc) {
  var url = "/inventory";
  var description = "List inventory " + ndc;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createInventory(id, ndc) {
  var url = "/inventory";
  var description = "Create inventory " + ndc;
  var body = {
    "id": String(id),
    "ndc": String(ndc),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "ndc": ndc}) });
  return res;
}

function getInventory(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory " + ndc;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateInventory(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Update inventory " + ndc;
  var body = {
    "id": id,
};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "ndc": ndc}) });
  return res;
}

function deleteInventory(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory " + ndc;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingInventory(id, ndc) {
  var url = "/inventory";
  var description = "Try Add Existing Inventory " + ndc;
  var body = {
    "id": String(id),
    "ndc": String(ndc),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyInventoryExists(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify Inventory " + ndc + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Inventory found");
}

function verifyInventoryDeleted(id, ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify Inventory " + ndc + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Inventory correctly deleted (404)");
}

function verifyInventoryDoesNotExist(id, ndc) { verifyInventoryDeleted(id, ndc); }

function matchAnyInventoryAdded() {
  return bp.EventSet("Any Inventory Added", function(e) {
      return e.name.startsWith("Done: Create inventory");
  });
}

function listPrescriptions(id) {
  var url = "/prescriptions";
  var description = "List prescriptions " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createPrescription(id) {
  var url = "/prescriptions";
  var description = "Create prescription " + id;
  var body = {
    "id": String(id),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
  return res;
}

function getPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updatePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Update prescription " + id;
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
  return res;
}

function deletePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription " + id;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingPrescriptions(id) {
  var url = "/prescriptions";
  var description = "Try Add Existing Prescriptions " + id;
  var body = {
    "id": String(id),
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
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
      return e.name.startsWith("Done: Create prescription");
  });
}
