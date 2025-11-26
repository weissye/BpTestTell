//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://192.168.225.53:5014", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: drug ----

function addDrug(id) {
  var url = "/drugs";
  var description = "Add drug " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDrug(id) {
  var url = "/drugs/" + id;
  var description = "Delete drug " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDrug(id) {
  var url = "/drugs/" + id;
  var description = "Get drug " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDrug(id) {
  var url = "/drugs/" + id;
  var description = "Update drug " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDrug(id) {
  return addDrug(id);
}

function verifyDrugExists(id) {
  return getDrug(id);
}

function verifyDrugDoesNotExist(id) {
  return getDrug(id);
}

function tryToDeleteANonExistingDrug(id) {
  return deleteDrug(id);
}

function matchAddedDrug(id) {
  return bp.EventSet("matchAddedDrug", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyDrugAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add drug (.+)/)});
  var m = ev.data.parameters.description.match(/Add drug (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedDrug(id) {
  return bp.EventSet("matchDeletedDrug", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyDrugDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete drug (.+)/)});
  var m = ev.data.parameters.description.match(/Delete drug (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: patient ----

function addPatient(id) {
  var url = "/patients";
  var description = "Add patient " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePatient(id) {
  var url = "/patients/" + id;
  var description = "Delete patient " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPatient(id) {
  var url = "/patients/" + id;
  var description = "Get patient " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePatient(id) {
  var url = "/patients/" + id;
  var description = "Update patient " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPatient(id) {
  return addPatient(id);
}

function verifyPatientExists(id) {
  return getPatient(id);
}

function verifyPatientDoesNotExist(id) {
  return getPatient(id);
}

function tryToDeleteANonExistingPatient(id) {
  return deletePatient(id);
}

function matchAddedPatient(id) {
  return bp.EventSet("matchAddedPatient", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyPatientAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add patient (.+)/)});
  var m = ev.data.parameters.description.match(/Add patient (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedPatient(id) {
  return bp.EventSet("matchDeletedPatient", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyPatientDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete patient (.+)/)});
  var m = ev.data.parameters.description.match(/Delete patient (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: order ----

function addOrder(id) {
  var url = "/orders";
  var description = "Add order " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrder(id) {
  var url = "/orders/" + id;
  var description = "Delete order " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrder(id) {
  var url = "/orders/" + id;
  var description = "Get order " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrder(id) {
  var url = "/orders/" + id;
  var description = "Update order " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrder(id) {
  return addOrder(id);
}

function verifyOrderExists(id) {
  return getOrder(id);
}

function verifyOrderDoesNotExist(id) {
  return getOrder(id);
}

function tryToDeleteANonExistingOrder(id) {
  return deleteOrder(id);
}

function matchAddedOrder(id) {
  return bp.EventSet("matchAddedOrder", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyOrderAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add order (.+)/)});
  var m = ev.data.parameters.description.match(/Add order (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedOrder(id) {
  return bp.EventSet("matchDeletedOrder", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyOrderDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete order (.+)/)});
  var m = ev.data.parameters.description.match(/Delete order (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: prescription ----

function addPrescription(id) {
  var url = "/prescriptions";
  var description = "Add prescription " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Update prescription " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPrescription(id) {
  return addPrescription(id);
}

function verifyPrescriptionExists(id) {
  return getPrescription(id);
}

function verifyPrescriptionDoesNotExist(id) {
  return getPrescription(id);
}

function tryToDeleteANonExistingPrescription(id) {
  return deletePrescription(id);
}

function matchAddedPrescription(id) {
  return bp.EventSet("matchAddedPrescription", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyPrescriptionAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add prescription (.+)/)});
  var m = ev.data.parameters.description.match(/Add prescription (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedPrescription(id) {
  return bp.EventSet("matchDeletedPrescription", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyPrescriptionDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete prescription (.+)/)});
  var m = ev.data.parameters.description.match(/Delete prescription (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: inventory ----

function addInventory(ndc) {
  var url = "/inventory";
  var description = "Add inventory " + ndc;
  var body = {
    "ndc": ndc,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory " + ndc;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory " + ndc;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Update inventory " + ndc;
  var body = {
    "ndc": ndc,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingInventory(ndc) {
  return addInventory(ndc);
}

function verifyInventoryExists(ndc) {
  return getInventory(ndc);
}

function verifyInventoryDoesNotExist(ndc) {
  return getInventory(ndc);
}

function tryToDeleteANonExistingInventory(ndc) {
  return deleteInventory(ndc);
}

function matchAddedInventory(ndc) {
  return bp.EventSet("matchAddedInventory", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(ndc);
  });
}

function waitForAnyInventoryAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add inventory (.+)/)});
  var m = ev.data.parameters.description.match(/Add inventory (.+)/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedInventory(ndc) {
  return bp.EventSet("matchDeletedInventory", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(ndc);
  });
}

function waitForAnyInventoryDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete inventory (.+)/)});
  var m = ev.data.parameters.description.match(/Delete inventory (.+)/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
