//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
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

function createDrug(id) {
  var url = "/drugs";
  var description = "Create drug " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] createDrug");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function getDrug(id) {
  var url = "/drugs/" + id;
  var description = "Get drug " + id;
  var body = undefined;
  bp.log.info("[CALL] getDrug");
  bp.log.info("  URL: " + baseURL + url);
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateDrug(id) {
  var url = "/drugs/" + id;
  var description = "Update drug " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] updateDrug");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function deleteDrug(id) {
  var url = "/drugs/" + id;
  var description = "Delete drug " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteDrug");
  bp.log.info("  URL: " + baseURL + url);
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingDrug(id) {
  createDrug(id);
}

function verifyDrugExists(id) {
  getDrug(id);
}

function verifyDrugDoesNotExist(id) {
  getDrug(id);
}

function tryToDeleteANonExistingDrug(id) {
  deleteDrug(id);
}

// ---- Entity: patient ----

function createPatient(id) {
  var url = "/patients";
  var description = "Create patient " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] createPatient");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function getPatient(id) {
  var url = "/patients/" + id;
  var description = "Get patient " + id;
  var body = undefined;
  bp.log.info("[CALL] getPatient");
  bp.log.info("  URL: " + baseURL + url);
  svc.get(url, {
    parameters: { description: description }
  });
}

function updatePatient(id) {
  var url = "/patients/" + id;
  var description = "Update patient " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] updatePatient");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function deletePatient(id) {
  var url = "/patients/" + id;
  var description = "Delete patient " + id;
  var body = undefined;
  bp.log.info("[CALL] deletePatient");
  bp.log.info("  URL: " + baseURL + url);
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPatient(id) {
  createPatient(id);
}

function verifyPatientExists(id) {
  getPatient(id);
}

function verifyPatientDoesNotExist(id) {
  getPatient(id);
}

function tryToDeleteANonExistingPatient(id) {
  deletePatient(id);
}

// ---- Entity: order ----

function createOrder(id) {
  var url = "/orders";
  var description = "Create order " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] createOrder");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function getOrder(id) {
  var url = "/orders/" + id;
  var description = "Get order " + id;
  var body = undefined;
  bp.log.info("[CALL] getOrder");
  bp.log.info("  URL: " + baseURL + url);
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateOrder(id) {
  var url = "/orders/" + id;
  var description = "Update order " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] updateOrder");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function deleteOrder(id) {
  var url = "/orders/" + id;
  var description = "Delete order " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteOrder");
  bp.log.info("  URL: " + baseURL + url);
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingOrder(id) {
  createOrder(id);
}

function verifyOrderExists(id) {
  getOrder(id);
}

function verifyOrderDoesNotExist(id) {
  getOrder(id);
}

function tryToDeleteANonExistingOrder(id) {
  deleteOrder(id);
}

// ---- Entity: prescription ----

function createPrescription(id) {
  var url = "/prescriptions";
  var description = "Create prescription " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] createPrescription");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function getPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription " + id;
  var body = undefined;
  bp.log.info("[CALL] getPrescription");
  bp.log.info("  URL: " + baseURL + url);
  svc.get(url, {
    parameters: { description: description }
  });
}

function updatePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Update prescription " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] updatePrescription");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function deletePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription " + id;
  var body = undefined;
  bp.log.info("[CALL] deletePrescription");
  bp.log.info("  URL: " + baseURL + url);
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPrescription(id) {
  createPrescription(id);
}

function verifyPrescriptionExists(id) {
  getPrescription(id);
}

function verifyPrescriptionDoesNotExist(id) {
  getPrescription(id);
}

function tryToDeleteANonExistingPrescription(id) {
  deletePrescription(id);
}

// ---- Entity: inventory ----

function createInventory(ndc) {
  var url = "/inventory";
  var description = "Create inventory " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  bp.log.info("[CALL] createInventory");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.post(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory " + ndc;
  var body = undefined;
  bp.log.info("[CALL] getInventory");
  bp.log.info("  URL: " + baseURL + url);
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Update inventory " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  bp.log.info("[CALL] updateInventory");
  if (body === undefined) { body = {}; }
  var bodyStr = JSON.stringify(body);
  bp.log.info("  URL: " + baseURL + url);
  bp.log.info("  BODY: " + bodyStr);
  svc.put(url, {
    body: bodyStr,
    parameters: { description: description }
  });
}

function deleteInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory " + ndc;
  var body = undefined;
  bp.log.info("[CALL] deleteInventory");
  bp.log.info("  URL: " + baseURL + url);
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingInventory(ndc) {
  createInventory(ndc);
}

function verifyInventoryExists(ndc) {
  getInventory(ndc);
}

function verifyInventoryDoesNotExist(ndc) {
  getInventory(ndc);
}

function tryToDeleteANonExistingInventory(ndc) {
  deleteInventory(ndc);
}
