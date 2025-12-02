//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : '192.168.225.45';
var port = (typeof port !== 'undefined') ? port : 5014;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));
  });
}

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);
  });
}

function waitFor(eventSet) {
  return bp.sync({waitFor: eventSet});
}

function matchSuccess(desc) {
  return bp.EventSet("Success Event", function(e) {
    return e.name === "Done: " + desc;
  });
}

// ---- Entity: drug ----

function createDrug(id, name) {
  var url = "/drugs";
  var description = "Create drug " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Get drug " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Update drug " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Delete drug " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingDrug(id, name) {
  deleteDrug(id, name);
}

function verifyDrugExists(id, name) {
  var url = "/drugs";
  var description = "Verify Drug with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Drug exists");
          }
        }
      }
      return pvg.fail("Expected Drug to exist but it does not");
    }
  });
}

function verifyDrugDoesNotExist(id, name) {
  var url = "/drugs";
  var description = "Verify Drug with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Drug to not exist but it does");
          }
        }
      }
      return pvg.success("Drug does not exist");
    }
  });
}

function tryToDeleteANonExistingDrug(id, name) {
  var url = "/drugs/" + id;
  var description = "Verify we cannot delete non-existing Drug";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedDrug(id, name) {
  var expectedDesc = "Create drug " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyDrugAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ drug\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ drug\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getDrugAddedEvent(keyVal) {
  return bp.EventSet("AddDrug:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyDrugAdded() {
  return bp.EventSet("matchAnyDrugAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create drug") > -1;
  });
}

function waitForDrugAdded(id, name) {
  var expectedDesc = "Create drug " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedDrug(id, name) {
  var expectedDesc = "Delete drug " + id;
  return bp.EventSet("matchDeletedDrug", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDrugDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ drug\ (.+)$/));
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

function createPatient(id, name) {
  var url = "/patients";
  var description = "Create patient " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getPatient(id, name) {
  var url = "/patients/" + id;
  var description = "Get patient " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updatePatient(id, name) {
  var url = "/patients/" + id;
  var description = "Update patient " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deletePatient(id, name) {
  var url = "/patients/" + id;
  var description = "Delete patient " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPatient(id, name) {
  deletePatient(id, name);
}

function verifyPatientExists(id, name) {
  var url = "/patients";
  var description = "Verify Patient with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Patient exists");
          }
        }
      }
      return pvg.fail("Expected Patient to exist but it does not");
    }
  });
}

function verifyPatientDoesNotExist(id, name) {
  var url = "/patients";
  var description = "Verify Patient with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Patient to not exist but it does");
          }
        }
      }
      return pvg.success("Patient does not exist");
    }
  });
}

function tryToDeleteANonExistingPatient(id, name) {
  var url = "/patients/" + id;
  var description = "Verify we cannot delete non-existing Patient";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedPatient(id, name) {
  var expectedDesc = "Create patient " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyPatientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ patient\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ patient\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPatientAddedEvent(keyVal) {
  return bp.EventSet("AddPatient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPatientAdded() {
  return bp.EventSet("matchAnyPatientAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create patient") > -1;
  });
}

function waitForPatientAdded(id, name) {
  var expectedDesc = "Create patient " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPatient(id, name) {
  var expectedDesc = "Delete patient " + id;
  return bp.EventSet("matchDeletedPatient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPatientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ patient\ (.+)$/));
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
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getOrder(id) {
  var url = "/orders/" + id;
  var description = "Get order " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateOrder(id) {
  var url = "/orders/" + id;
  var description = "Update order " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteOrder(id) {
  var url = "/orders/" + id;
  var description = "Delete order " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingOrder(id) {
  deleteOrder(id);
}

function verifyOrderExists(id) {
  var url = "/orders";
  var description = "Verify Order with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Order exists");
          }
        }
      }
      return pvg.fail("Expected Order to exist but it does not");
    }
  });
}

function verifyOrderDoesNotExist(id) {
  var url = "/orders";
  var description = "Verify Order with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Order to not exist but it does");
          }
        }
      }
      return pvg.success("Order does not exist");
    }
  });
}

function tryToDeleteANonExistingOrder(id) {
  var url = "/orders/" + id;
  var description = "Verify we cannot delete non-existing Order";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedOrder(id) {
  var expectedDesc = "Create order " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyOrderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ order\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ order\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getOrderAddedEvent(keyVal) {
  return bp.EventSet("AddOrder:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyOrderAdded() {
  return bp.EventSet("matchAnyOrderAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create order") > -1;
  });
}

function waitForOrderAdded(id) {
  var expectedDesc = "Create order " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedOrder(id) {
  var expectedDesc = "Delete order " + id;
  return bp.EventSet("matchDeletedOrder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ order\ (.+)$/));
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
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Get prescription " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updatePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Update prescription " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deletePrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Delete prescription " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingPrescription(id) {
  deletePrescription(id);
}

function verifyPrescriptionExists(id) {
  var url = "/prescriptions";
  var description = "Verify Prescription with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Prescription exists");
          }
        }
      }
      return pvg.fail("Expected Prescription to exist but it does not");
    }
  });
}

function verifyPrescriptionDoesNotExist(id) {
  var url = "/prescriptions";
  var description = "Verify Prescription with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Prescription to not exist but it does");
          }
        }
      }
      return pvg.success("Prescription does not exist");
    }
  });
}

function tryToDeleteANonExistingPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "Verify we cannot delete non-existing Prescription";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedPrescription(id) {
  var expectedDesc = "Create prescription " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyPrescriptionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ prescription\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ prescription\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPrescriptionAddedEvent(keyVal) {
  return bp.EventSet("AddPrescription:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPrescriptionAdded() {
  return bp.EventSet("matchAnyPrescriptionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create prescription") > -1;
  });
}

function waitForPrescriptionAdded(id) {
  var expectedDesc = "Create prescription " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPrescription(id) {
  var expectedDesc = "Delete prescription " + id;
  return bp.EventSet("matchDeletedPrescription", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPrescriptionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ prescription\ (.+)$/));
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
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: {
      description: description,
      ndc: String(ndc)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { ndc: String(ndc) }) });
}

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory " + ndc;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Update inventory " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      ndc: String(ndc)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { ndc: String(ndc) }) });
}

function deleteInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Delete inventory " + ndc;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingInventory(ndc) {
  deleteInventory(ndc);
}

function verifyInventoryExists(ndc) {
  var url = "/inventory";
  var description = "Verify Inventory with ndc " + ndc + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].ndc) === String(ndc)) {
            return pvg.success("Inventory exists");
          }
        }
      }
      return pvg.fail("Expected Inventory to exist but it does not");
    }
  });
}

function verifyInventoryDoesNotExist(ndc) {
  var url = "/inventory";
  var description = "Verify Inventory with ndc " + ndc + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].ndc) === String(ndc)) {
            return pvg.fail("Expected Inventory to not exist but it does");
          }
        }
      }
      return pvg.success("Inventory does not exist");
    }
  });
}

function tryToDeleteANonExistingInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Verify we cannot delete non-existing Inventory";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedInventory(ndc) {
  var expectedDesc = "Create inventory " + ndc;
  return matchSuccess(expectedDesc);
}

function waitForAnyInventoryAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ inventory\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ inventory\ (.+)$/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getInventoryAddedEvent(keyVal) {
  return bp.EventSet("AddInventory:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.ndc) === String(keyVal);
  });
}

function matchAnyInventoryAdded() {
  return bp.EventSet("matchAnyInventoryAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.ndc !== undefined && e.name.indexOf("Create inventory") > -1;
  });
}

function waitForInventoryAdded(ndc) {
  var expectedDesc = "Create inventory " + ndc;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedInventory(ndc) {
  var expectedDesc = "Delete inventory " + ndc;
  return bp.EventSet("matchDeletedInventory", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyInventoryDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ inventory\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ inventory\ (.+)$/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
