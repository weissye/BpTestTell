//@provengo summon rest
// === Auto-generated interfaces for pharmacy ===
var host = (typeof host !== 'undefined') ? host : '192.168.225.53';
var port = (typeof port !== 'undefined') ? port : 5014;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function listDrugs(id, name) {
  var url = "/drugs";
  var description = "List drugs";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function addDrugs(id, name) {
  var url = "/drugs";
  var description = "Create drug";
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getDrugs(id, name) {
  var url = "/drugs/" + id;
  var description = "Get drug";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateDrugs(id, name) {
  var url = "/drugs/" + id;
  var description = "Update drug";
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteDrugs(id, name) {
  var url = "/drugs/" + id;
  var description = "Delete drug (idempotent)";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingDrugs(id, name) {
  var url = "/drugs";
  var description = "Try Add Existing Drugs";
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyDrugsExists(id, name) {
  var url = "/drugs/" + id;
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Drugs exists" } });
  pvg.success("Drugs found");
}

function verifyDrugsDoesNotExist(id, name) {
  var url = "/drugs/" + id;
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Drugs does not exist" } });
  pvg.success("Drugs not found");
}

function tryToDeleteANonExistingDrugs(id, name) {
  svc.delete("/drugs/" + id, { expectedResponseCodes: [200, 404, 401], parameters: { description: "Verify negative delete" } });
}

function waitForDrugsAdded(id, name) {
  waitFor(matchSuccess("Create drug"));
}

function waitForAnyDrugsAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Drugs Added", function(e) {
      return e.name.startsWith("Done: Create drug");
  }) });
}

function listPatients(id, name) {
  var url = "/patients";
  var description = "List patients";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function addPatients(id, name) {
  var url = "/patients";
  var description = "Create patient";
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPatients(id, name) {
  var url = "/patients/" + id;
  var description = "Get patient";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updatePatients(id, name) {
  var url = "/patients/" + id;
  var description = "Update patient";
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePatients(id, name) {
  var url = "/patients/" + id;
  var description = "Delete patient (idempotent)";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingPatients(id, name) {
  var url = "/patients";
  var description = "Try Add Existing Patients";
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPatientsExists(id, name) {
  var url = "/patients/" + id;
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Patients exists" } });
  pvg.success("Patients found");
}

function verifyPatientsDoesNotExist(id, name) {
  var url = "/patients/" + id;
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Patients does not exist" } });
  pvg.success("Patients not found");
}

function tryToDeleteANonExistingPatients(id, name) {
  svc.delete("/patients/" + id, { expectedResponseCodes: [200, 404, 401], parameters: { description: "Verify negative delete" } });
}

function waitForPatientsAdded(id, name) {
  waitFor(matchSuccess("Create patient"));
}

function waitForAnyPatientsAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Patients Added", function(e) {
      return e.name.startsWith("Done: Create patient");
  }) });
}

function listOrders(id) {
  var url = "/orders";
  var description = "List orders";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function addOrders(id) {
  var url = "/orders";
  var description = "Create order";
  var body = {
    "id": String(id),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getOrders(id) {
  var url = "/orders/" + id;
  var description = "Get order";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateOrders(id) {
  var url = "/orders/" + id;
  var description = "Update order";
  var body = {
    "id": String(id),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteOrders(id) {
  var url = "/orders/" + id;
  var description = "Delete order (idempotent)";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingOrders(id) {
  var url = "/orders";
  var description = "Try Add Existing Orders";
  var body = {
    "id": String(id),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrdersExists(id) {
  var url = "/orders/" + id;
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Orders exists" } });
  pvg.success("Orders found");
}

function verifyOrdersDoesNotExist(id) {
  var url = "/orders/" + id;
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Orders does not exist" } });
  pvg.success("Orders not found");
}

function tryToDeleteANonExistingOrders(id) {
  svc.delete("/orders/" + id, { expectedResponseCodes: [200, 404, 401], parameters: { description: "Verify negative delete" } });
}

function waitForOrdersAdded(id) {
  waitFor(matchSuccess("Create order"));
}

function waitForAnyOrdersAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Orders Added", function(e) {
      return e.name.startsWith("Done: Create order");
  }) });
}

function listPrescriptions(id) {
  var url = "/prescriptions";
  var description = "List prescriptions";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function addPrescriptions(id) {
  var url = "/prescriptions";
  var description = "Create prescription";
  var body = {
    "id": String(id),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getPrescriptions(id) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updatePrescriptions(id) {
  var url = "/prescriptions/" + id;
  var description = "Update prescription";
  var body = {
    "id": String(id),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deletePrescriptions(id) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription (idempotent)";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingPrescriptions(id) {
  var url = "/prescriptions";
  var description = "Try Add Existing Prescriptions";
  var body = {
    "id": String(id),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPrescriptionsExists(id) {
  var url = "/prescriptions/" + id;
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Prescriptions exists" } });
  pvg.success("Prescriptions found");
}

function verifyPrescriptionsDoesNotExist(id) {
  var url = "/prescriptions/" + id;
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Prescriptions does not exist" } });
  pvg.success("Prescriptions not found");
}

function tryToDeleteANonExistingPrescriptions(id) {
  svc.delete("/prescriptions/" + id, { expectedResponseCodes: [200, 404, 401], parameters: { description: "Verify negative delete" } });
}

function waitForPrescriptionsAdded(id) {
  waitFor(matchSuccess("Create prescription"));
}

function waitForAnyPrescriptionsAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Prescriptions Added", function(e) {
      return e.name.startsWith("Done: Create prescription");
  }) });
}

function listInventory(ndc) {
  var url = "/inventory";
  var description = "List inventory";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function addInventory(ndc) {
  var url = "/inventory";
  var description = "Create inventor";
  var body = {
    "ndc": String(ndc),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventor";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Update inventor";
  var body = {
    "ndc": String(ndc),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function deleteInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventor (idempotent)";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingInventory(ndc) {
  var url = "/inventory";
  var description = "Try Add Existing Inventory";
  var body = {
    "ndc": String(ndc),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyInventoryExists(ndc) {
  var url = "/inventory/" + ndc;
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Inventory exists" } });
  pvg.success("Inventory found");
}

function verifyInventoryDoesNotExist(ndc) {
  var url = "/inventory/" + ndc;
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Inventory does not exist" } });
  pvg.success("Inventory not found");
}

function tryToDeleteANonExistingInventory(ndc) {
  svc.delete("/inventory/" + ndc, { expectedResponseCodes: [200, 404, 401], parameters: { description: "Verify negative delete" } });
}

function waitForInventoryAdded(ndc) {
  waitFor(matchSuccess("Create inventor"));
}

function waitForAnyInventoryAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Inventory Added", function(e) {
      return e.name.startsWith("Done: Create inventor");
  }) });
}
