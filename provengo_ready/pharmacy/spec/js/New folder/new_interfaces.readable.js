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

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && e.data.parameters.description === str;
  });
}

// ---- Entity: drug ----

function createDrug(name, id) {
  var url = "/drugs";
  var description = "Create drug " + name;
  var body = {
    "name": String(name),
  };
  bp.log.info("[CALL] createDrug");
  svc.post(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function getDrug(name, id) {
  var url = "/drugs/" + id;
  var description = "Get drug " + id;
  var body = undefined;
  bp.log.info("[CALL] getDrug");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateDrug(name, id) {
  var url = "/drugs/" + id;
  var description = "Update drug " + id;
  var body = {
    "name": String(name),
  };
  bp.log.info("[CALL] updateDrug");
  svc.put(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function deleteDrug(name, id) {
  var url = "/drugs/" + id;
  var description = "Delete drug " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteDrug");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingDrug(name, id) {
  var url = "/drugs";
  var body = {
    "name": String(name),
  };
  var description = "Verify that we cannot add another Drug...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDrugExists(name, id) {
  var url = "/drugs";
  var description = "Verify Drug exists";
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

function verifyDrugDoesNotExist(name, id) {
  var url = "/drugs";
  var description = "Verify Drug does not exist";
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

function tryToDeleteANonExistingDrug(name, id) {
  var url = "/drugs/" + id;
  var description = "Verify we cannot delete non-existing Drug";
  svc.delete(url, {
    expectedResponseCodes: [400, 404],
    parameters: { description: description }
  });
}

function matchAddedDrug(name, id) {
  var expectedDesc = "Create drug " + name;
  return bp.EventSet("matchAddedDrug", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyDrugAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ drug\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ drug\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function waitForDrugAdded(name, id) {
  var expectedDesc = "Create drug " + name;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedDrug(name, id) {
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

function createPatient(name, id) {
  var url = "/patients";
  var description = "Create patient " + name;
  var body = {
    "name": String(name),
  };
  bp.log.info("[CALL] createPatient");
  svc.post(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function getPatient(name, id) {
  var url = "/patients/" + id;
  var description = "Get patient " + id;
  var body = undefined;
  bp.log.info("[CALL] getPatient");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updatePatient(name, id) {
  var url = "/patients/" + id;
  var description = "Update patient " + id;
  var body = {
    "name": String(name),
  };
  bp.log.info("[CALL] updatePatient");
  svc.put(url, {
    body: JSON.stringify(body),
    parameters: { description: description }
  });
}

function deletePatient(name, id) {
  var url = "/patients/" + id;
  var description = "Delete patient " + id;
  var body = undefined;
  bp.log.info("[CALL] deletePatient");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPatient(name, id) {
  var url = "/patients";
  var body = {
    "name": String(name),
  };
  var description = "Verify that we cannot add another Patient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPatientExists(name, id) {
  var url = "/patients";
  var description = "Verify Patient exists";
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

function verifyPatientDoesNotExist(name, id) {
  var url = "/patients";
  var description = "Verify Patient does not exist";
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

function tryToDeleteANonExistingPatient(name, id) {
  var url = "/patients/" + id;
  var description = "Verify we cannot delete non-existing Patient";
  svc.delete(url, {
    expectedResponseCodes: [400, 404],
    parameters: { description: description }
  });
}

function matchAddedPatient(name, id) {
  var expectedDesc = "Create patient " + name;
  return bp.EventSet("matchAddedPatient", function(e) {
      return e.data && e.data.parameters && e.data.parameters.description === expectedDesc;
  });
}

function waitForAnyPatientAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ patient\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ patient\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function waitForPatientAdded(name, id) {
  var expectedDesc = "Create patient " + name;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedPatient(name, id) {
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
  var url = "/orders";
  var description = "Verify Order exists";
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
  var description = "Verify Order does not exist";
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
    expectedResponseCodes: [400, 404],
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

function waitForOrderAdded(id) {
  var expectedDesc = "Create order " + id;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
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
  var url = "/prescriptions";
  var description = "Verify Prescription exists";
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
  var description = "Verify Prescription does not exist";
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
    expectedResponseCodes: [400, 404],
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

function waitForPrescriptionAdded(id) {
  var expectedDesc = "Create prescription " + id;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
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
  var url = "/inventory";
  var description = "Verify Inventory exists";
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
  var description = "Verify Inventory does not exist";
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
    expectedResponseCodes: [400, 404],
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

function waitForInventoryAdded(ndc) {
  var expectedDesc = "Create inventory " + ndc;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
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
