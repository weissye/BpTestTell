//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

// Create session using standard string concatenation
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
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
  svc.post(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function getDrug(id) {
  var url = "/drugs/" + id;
  var description = "Get drug " + id;
  var body = undefined;
  bp.log.info("[CALL] getDrug");
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
  svc.put(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function deleteDrug(id) {
  var url = "/drugs/" + id;
  var description = "Delete drug " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteDrug");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingDrug(id) {
  var url = "/drugs";
  var body = {
    "id": String(id),
  };
  var description = "Verify that we cannot add another Drug...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDrugExists(id) {
  var url = "/drugs/" + id;
  var description = "Verify Drug exists";
  return svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function verifyDrugDoesNotExist(id) {
  var url = "/drugs/" + id;
  var description = "Verify Drug does not exist";
  return svc.get(url, {
    expectedResponseCodes: [404],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingDrug(id) {
  var url = "/drugs/" + id;
  var description = "Verify we cannot delete non-existing Drug";
  svc.delete(url, {
    expectedResponseCodes: [400, 404, 200],
    parameters: { description: description }
  });
}

function matchAddedDrug(id) {
  var expectedDesc = "Create drug " + id;
  return bp.EventSet("matchAddedDrug", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyDrugAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ drug\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ drug\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedDrug(id) {
  var expectedDesc = "Delete drug " + id;
  return bp.EventSet("matchDeletedDrug", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyDrugDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ drug\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ drug\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
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
  svc.post(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function getPatient(id) {
  var url = "/patients/" + id;
  var description = "Get patient " + id;
  var body = undefined;
  bp.log.info("[CALL] getPatient");
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
  svc.put(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function deletePatient(id) {
  var url = "/patients/" + id;
  var description = "Delete patient " + id;
  var body = undefined;
  bp.log.info("[CALL] deletePatient");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPatient(id) {
  var url = "/patients";
  var body = {
    "id": String(id),
  };
  var description = "Verify that we cannot add another Patient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPatientExists(id) {
  var url = "/patients/" + id;
  var description = "Verify Patient exists";
  return svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function verifyPatientDoesNotExist(id) {
  var url = "/patients/" + id;
  var description = "Verify Patient does not exist";
  return svc.get(url, {
    expectedResponseCodes: [404],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingPatient(id) {
  var url = "/patients/" + id;
  var description = "Verify we cannot delete non-existing Patient";
  svc.delete(url, {
    expectedResponseCodes: [400, 404, 200],
    parameters: { description: description }
  });
}

function matchAddedPatient(id) {
  var expectedDesc = "Create patient " + id;
  return bp.EventSet("matchAddedPatient", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyPatientAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ patient\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ patient\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedPatient(id) {
  var expectedDesc = "Delete patient " + id;
  return bp.EventSet("matchDeletedPatient", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyPatientDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ patient\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ patient\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
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
  svc.post(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function getOrder(id) {
  var url = "/orders/" + id;
  var description = "Get order " + id;
  var body = undefined;
  bp.log.info("[CALL] getOrder");
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
  svc.put(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function deleteOrder(id) {
  var url = "/orders/" + id;
  var description = "Delete order " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteOrder");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingOrder(id) {
  var url = "/orders";
  var body = {
    "id": String(id),
  };
  var description = "Verify that we cannot add another Order...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyOrderExists(id) {
  var url = "/orders/" + id;
  var description = "Verify Order exists";
  return svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function verifyOrderDoesNotExist(id) {
  var url = "/orders/" + id;
  var description = "Verify Order does not exist";
  return svc.get(url, {
    expectedResponseCodes: [404],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingOrder(id) {
  var url = "/orders/" + id;
  var description = "Verify we cannot delete non-existing Order";
  svc.delete(url, {
    expectedResponseCodes: [400, 404, 200],
    parameters: { description: description }
  });
}

function matchAddedOrder(id) {
  var expectedDesc = "Create order " + id;
  return bp.EventSet("matchAddedOrder", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyOrderAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ order\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ order\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedOrder(id) {
  var expectedDesc = "Delete order " + id;
  return bp.EventSet("matchDeletedOrder", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyOrderDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ order\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ order\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
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
  svc.post(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function getPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription " + id;
  var body = undefined;
  bp.log.info("[CALL] getPrescription");
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
  svc.put(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function deletePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription " + id;
  var body = undefined;
  bp.log.info("[CALL] deletePrescription");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPrescription(id) {
  var url = "/prescriptions";
  var body = {
    "id": String(id),
  };
  var description = "Verify that we cannot add another Prescription...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPrescriptionExists(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify Prescription exists";
  return svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function verifyPrescriptionDoesNotExist(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify Prescription does not exist";
  return svc.get(url, {
    expectedResponseCodes: [404],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify we cannot delete non-existing Prescription";
  svc.delete(url, {
    expectedResponseCodes: [400, 404, 200],
    parameters: { description: description }
  });
}

function matchAddedPrescription(id) {
  var expectedDesc = "Create prescription " + id;
  return bp.EventSet("matchAddedPrescription", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyPrescriptionAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ prescription\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ prescription\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedPrescription(id) {
  var expectedDesc = "Delete prescription " + id;
  return bp.EventSet("matchDeletedPrescription", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyPrescriptionDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ prescription\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ prescription\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
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
  svc.post(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory " + ndc;
  var body = undefined;
  bp.log.info("[CALL] getInventory");
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
  svc.put(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function deleteInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory " + ndc;
  var body = undefined;
  bp.log.info("[CALL] deleteInventory");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingInventory(ndc) {
  var url = "/inventory";
  var body = {
    "ndc": String(ndc),
  };
  var description = "Verify that we cannot add another Inventory...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyInventoryExists(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify Inventory exists";
  return svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function verifyInventoryDoesNotExist(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify Inventory does not exist";
  return svc.get(url, {
    expectedResponseCodes: [404],
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify we cannot delete non-existing Inventory";
  svc.delete(url, {
    expectedResponseCodes: [400, 404, 200],
    parameters: { description: description }
  });
}

function matchAddedInventory(ndc) {
  var expectedDesc = "Create inventory " + ndc;
  return bp.EventSet("matchAddedInventory", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyInventoryAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ inventory\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ inventory\ (.+)$/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedInventory(ndc) {
  var expectedDesc = "Delete inventory " + ndc;
  return bp.EventSet("matchDeletedInventory", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyInventoryDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ inventory\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ inventory\ (.+)$/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
