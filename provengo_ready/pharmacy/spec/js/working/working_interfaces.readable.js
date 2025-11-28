//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

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
  var description = "Create inventory with ndc " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  bp.log.info("[CALL] createInventory");
  svc.post(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory with ndc " + ndc;
  var body = undefined;
  bp.log.info("[CALL] getInventory");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Update inventory with ndc " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  bp.log.info("[CALL] updateInventory");
  svc.put(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function deleteInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory with ndc " + ndc;
  var body = undefined;
  bp.log.info("[CALL] deleteInventory");
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

function matchAddedInventory(ndc) {
  var expectedDesc = "Create inventory with ndc " + ndc;
  return bp.EventSet("matchAddedInventory", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyInventoryAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ inventory\ with\ ndc\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ inventory\ with\ ndc\ (.+)$/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedInventory(ndc) {
  var expectedDesc = "Delete inventory with ndc " + ndc;
  return bp.EventSet("matchDeletedInventory", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyInventoryDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ inventory\ with\ ndc\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ inventory\ with\ ndc\ (.+)$/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
