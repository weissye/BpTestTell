//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : '10.100.102.9';
var port = (typeof port !== 'undefined') ? port : 5014;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

var baseURL = protocol + "://" + host + ":" + port;
bp.log.info("[INIT] RESTSession BaseURL: " + baseURL);
const svc = new RESTSession(baseURL, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: drug ----

function createDrug(id, name) {
  var url = "/drugs";
  var description = "Create drug " + name + " with id " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  bp.log.info("[CALL] createDrug");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, bodyStr);
}

function getDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Get drug with id " + id;
  var body = undefined;
  bp.log.info("[CALL] getDrug");
  svc.get(url);
}

function updateDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Update drug " + name + " with id " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  bp.log.info("[CALL] updateDrug");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, bodyStr);
}

function deleteDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Delete drug with id " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteDrug");
  svc.delete(url);
}

function tryToAddExistingDrug(id, name) {
  createDrug(id, name);
}

function verifyDrugExists(id, name) {
  getDrug(id, name);
}

function verifyDrugDoesNotExist(id, name) {
  getDrug(id, name);
}

function tryToDeleteANonExistingDrug(id, name) {
  deleteDrug(id, name);
}

// ---- Entity: patient ----

function createPatient(id, name) {
  var url = "/patients";
  var description = "Create patient " + name + " with id " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  bp.log.info("[CALL] createPatient");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, bodyStr);
}

function getPatient(id, name) {
  var url = "/patients/" + id;
  var description = "Get patient with id " + id;
  var body = undefined;
  bp.log.info("[CALL] getPatient");
  svc.get(url);
}

function updatePatient(id, name) {
  var url = "/patients/" + id;
  var description = "Update patient " + name + " with id " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  bp.log.info("[CALL] updatePatient");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, bodyStr);
}

function deletePatient(id, name) {
  var url = "/patients/" + id;
  var description = "Delete patient with id " + id;
  var body = undefined;
  bp.log.info("[CALL] deletePatient");
  svc.delete(url);
}

function tryToAddExistingPatient(id, name) {
  createPatient(id, name);
}

function verifyPatientExists(id, name) {
  getPatient(id, name);
}

function verifyPatientDoesNotExist(id, name) {
  getPatient(id, name);
}

function tryToDeleteANonExistingPatient(id, name) {
  deletePatient(id, name);
}

// ---- Entity: order ----

function createOrder(id, orderNumber) {
  var url = "/orders";
  var description = "Create order " + orderNumber + " with id " + id;
  var body = {
    "id": String(id),
    "orderNumber": String(orderNumber),
  };
  bp.log.info("[CALL] createOrder");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, bodyStr);
}

function getOrder(id, orderNumber) {
  var url = "/orders/" + id;
  var description = "Get order with id " + id;
  var body = undefined;
  bp.log.info("[CALL] getOrder");
  svc.get(url);
}

function updateOrder(id, orderNumber) {
  var url = "/orders/" + id;
  var description = "Update order " + orderNumber + " with id " + id;
  var body = {
    "id": String(id),
    "orderNumber": String(orderNumber),
  };
  bp.log.info("[CALL] updateOrder");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, bodyStr);
}

function deleteOrder(id, orderNumber) {
  var url = "/orders/" + id;
  var description = "Delete order with id " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteOrder");
  svc.delete(url);
}

function tryToAddExistingOrder(id, orderNumber) {
  createOrder(id, orderNumber);
}

function verifyOrderExists(id, orderNumber) {
  getOrder(id, orderNumber);
}

function verifyOrderDoesNotExist(id, orderNumber) {
  getOrder(id, orderNumber);
}

function tryToDeleteANonExistingOrder(id, orderNumber) {
  deleteOrder(id, orderNumber);
}

// ---- Entity: prescription ----

function createPrescription(id, prescriptionNumber) {
  var url = "/prescriptions";
  var description = "Create prescription " + prescriptionNumber + " with id " + id;
  var body = {
    "id": String(id),
    "prescriptionNumber": String(prescriptionNumber),
  };
  bp.log.info("[CALL] createPrescription");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, bodyStr);
}

function getPrescription(id, prescriptionNumber) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription with id " + id;
  var body = undefined;
  bp.log.info("[CALL] getPrescription");
  svc.get(url);
}

function updatePrescription(id, prescriptionNumber) {
  var url = "/prescriptions/" + id;
  var description = "Update prescription " + prescriptionNumber + " with id " + id;
  var body = {
    "id": String(id),
    "prescriptionNumber": String(prescriptionNumber),
  };
  bp.log.info("[CALL] updatePrescription");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, bodyStr);
}

function deletePrescription(id, prescriptionNumber) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription with id " + id;
  var body = undefined;
  bp.log.info("[CALL] deletePrescription");
  svc.delete(url);
}

function tryToAddExistingPrescription(id, prescriptionNumber) {
  createPrescription(id, prescriptionNumber);
}

function verifyPrescriptionExists(id, prescriptionNumber) {
  getPrescription(id, prescriptionNumber);
}

function verifyPrescriptionDoesNotExist(id, prescriptionNumber) {
  getPrescription(id, prescriptionNumber);
}

function tryToDeleteANonExistingPrescription(id, prescriptionNumber) {
  deletePrescription(id, prescriptionNumber);
}

// ---- Entity: inventory ----

function createInventory(ndc, name) {
  var url = "/inventory";
  var description = "Create inventory item with ndc " + ndc + " and name " + name;
  var body = {
    "ndc": String(ndc),
    "name": String(name),
  };
  bp.log.info("[CALL] createInventory");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, bodyStr);
}

function getInventory(ndc, name) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory item with ndc " + ndc;
  var body = undefined;
  bp.log.info("[CALL] getInventory");
  svc.get(url);
}

function updateInventory(ndc, name) {
  var url = "/inventory/" + ndc;
  var description = "Update inventory item with ndc " + ndc + " and name " + name;
  var body = {
    "ndc": String(ndc),
    "name": String(name),
  };
  bp.log.info("[CALL] updateInventory");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, bodyStr);
}

function deleteInventory(ndc, name) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory item with ndc " + ndc;
  var body = undefined;
  bp.log.info("[CALL] deleteInventory");
  svc.delete(url);
}

function tryToAddExistingInventory(ndc, name) {
  createInventory(ndc, name);
}

function verifyInventoryExists(ndc, name) {
  getInventory(ndc, name);
}

function verifyInventoryDoesNotExist(ndc, name) {
  getInventory(ndc, name);
}

function tryToDeleteANonExistingInventory(ndc, name) {
  deleteInventory(ndc, name);
}
