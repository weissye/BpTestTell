//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:8080", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: drug ----

function createDrug(name) {
  var url = "/drugs";
  var description = "Create drug " + name;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
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
    "name": name,
  };
  return svc.request({
    method: "PUT",
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

function tryToAddExistingDrug(name, id) {
  return createDrug(name);
}

function verifyDrugExists(name, id) {
  return getDrug(id);
}

function verifyDrugDoesNotExist(name, id) {
  return getDrug(id);
}

function tryToDeleteANonExistingDrug(name, id) {
  return deleteDrug(id);
}

// ---- Entity: patient ----

function createPatient(name) {
  var url = "/patients";
  var description = "Create patient " + name;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
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
    "name": name,
  };
  return svc.request({
    method: "PUT",
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

function tryToAddExistingPatient(name, id) {
  return createPatient(name);
}

function verifyPatientExists(name, id) {
  return getPatient(id);
}

function verifyPatientDoesNotExist(name, id) {
  return getPatient(id);
}

function tryToDeleteANonExistingPatient(name, id) {
  return deletePatient(id);
}

// ---- Entity: order ----

function createOrder(name) {
  var url = "/orders";
  var description = "Create order " + name;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
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
    "name": name,
  };
  return svc.request({
    method: "PUT",
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

function tryToAddExistingOrder(name, id) {
  return createOrder(name);
}

function verifyOrderExists(name, id) {
  return getOrder(id);
}

function verifyOrderDoesNotExist(name, id) {
  return getOrder(id);
}

function tryToDeleteANonExistingOrder(name, id) {
  return deleteOrder(id);
}

// ---- Entity: prescription ----

function createPrescription(name) {
  var url = "/prescriptions";
  var description = "Create prescription " + name;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
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
    "name": name,
  };
  return svc.request({
    method: "PUT",
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

function tryToAddExistingPrescription(name, id) {
  return createPrescription(name);
}

function verifyPrescriptionExists(name, id) {
  return getPrescription(id);
}

function verifyPrescriptionDoesNotExist(name, id) {
  return getPrescription(id);
}

function tryToDeleteANonExistingPrescription(name, id) {
  return deletePrescription(id);
}

// ---- Entity: inventory ----

function createInventory(ndc) {
  var url = "/inventory";
  var description = "Create inventory " + ndc;
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

function tryToAddExistingInventory(ndc) {
  return createInventory(ndc);
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
