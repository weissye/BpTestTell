//@provengo summon rest
// === Auto-generated interfaces.readable.js ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
function matchesDescriptionRegex(re) { return bp.EventSet("Match description", function (e) { return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description)); }); }
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Success Event", function(e) { return e.name === "Done: " + desc; }); }
// ---- Entity: drug ----
function createDrug(id, name) {
  bp.log.info("DEBUG INTERFACE createDrug: called with args=" + JSON.stringify(arguments));
  var url = "/drugs";
  var description = "[Drug] Create drug " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getDrug(id) {
  bp.log.info("DEBUG INTERFACE getDrug: called with args=" + JSON.stringify(arguments));
  var url = "/drugs/" + id;
  var description = "[Drug] Get drug " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function updateDrug(id, name) {
  bp.log.info("DEBUG INTERFACE updateDrug: called with args=" + JSON.stringify(arguments));
  var url = "/drugs/" + id;
  var description = "[Drug] Update drug " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteDrug(id) {
  bp.log.info("DEBUG INTERFACE deleteDrug: called with args=" + JSON.stringify(arguments));
  var url = "/drugs/" + id;
  var description = "[Drug] Delete drug " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingDrug(id, name) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingDrug: called with args=" + JSON.stringify(arguments));
  var url = "/drugs";
  var description = "[tryToAddExistingDrug] [Drug] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
}

function verifyDrugExists(id, name) {
  var url = "/drugs";
  bp.log.info("DEBUG VERIFIER for Drug: Arguments=" + JSON.stringify(arguments));
  var description = "[Drug] Verify Drug with id " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof name !== "undefined" && String(items[i].name) !== String(name)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Drug to exist but it does not");
    }
  });
}

function verifyDrugDoesNotExist(id, name) {
  var url = "/drugs";
  var description = "[Drug] Verify Drug does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof name !== "undefined" && String(items[i].name) !== String(name)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Drug does not exist");
    }
  });
}

function tryToDeleteANonExistingDrug(id) {
  var url = "/drugs/" + id;
  var description = "[Drug] Verify we cannot delete non-existing Drug";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedDrug(id, name) {
  return matchSuccess("[Drug] Create drug " + id);
}

function waitForAnyDrugAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Drug\]\ Create\ drug\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for Drug: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[Drug\]\ Create\ drug\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  obj["name"] = capturedMap["name"];
  return obj;
}

function matchAnyDrugAdded() { return bp.EventSet("matchAnyDrugAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[Drug]") > -1; }); }
function waitForDrugAdded(id, name) { var expectedDesc = "[Drug] Create drug " + id; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedDrug(id) {
  return bp.EventSet("matchDeletedDrug", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[Drug] Delete drug " + id); });
}

function waitForAnyDrugDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Drug\]\ Delete\ drug\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[Drug\]\ Delete\ drug\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  obj["name"] = capturedMap["name"];
  return obj;
}

// ---- Entity: patient ----
function createPatient(id, name) {
  bp.log.info("DEBUG INTERFACE createPatient: called with args=" + JSON.stringify(arguments));
  var url = "/patients";
  var description = "[Patient] Create patient " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getPatient(id) {
  bp.log.info("DEBUG INTERFACE getPatient: called with args=" + JSON.stringify(arguments));
  var url = "/patients/" + id;
  var description = "[Patient] Get patient " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function updatePatient(id, name) {
  bp.log.info("DEBUG INTERFACE updatePatient: called with args=" + JSON.stringify(arguments));
  var url = "/patients/" + id;
  var description = "[Patient] Update patient " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deletePatient(id) {
  bp.log.info("DEBUG INTERFACE deletePatient: called with args=" + JSON.stringify(arguments));
  var url = "/patients/" + id;
  var description = "[Patient] Delete patient " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingPatient(id, name) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingPatient: called with args=" + JSON.stringify(arguments));
  var url = "/patients";
  var description = "[tryToAddExistingPatient] [Patient] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
}

function verifyPatientExists(id, name) {
  var url = "/patients";
  bp.log.info("DEBUG VERIFIER for Patient: Arguments=" + JSON.stringify(arguments));
  var description = "[Patient] Verify Patient with id " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof name !== "undefined" && String(items[i].name) !== String(name)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Patient to exist but it does not");
    }
  });
}

function verifyPatientDoesNotExist(id, name) {
  var url = "/patients";
  var description = "[Patient] Verify Patient does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof name !== "undefined" && String(items[i].name) !== String(name)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Patient does not exist");
    }
  });
}

function tryToDeleteANonExistingPatient(id) {
  var url = "/patients/" + id;
  var description = "[Patient] Verify we cannot delete non-existing Patient";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedPatient(id, name) {
  return matchSuccess("[Patient] Create patient " + id);
}

function waitForAnyPatientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Patient\]\ Create\ patient\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for Patient: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[Patient\]\ Create\ patient\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  obj["name"] = capturedMap["name"];
  return obj;
}

function matchAnyPatientAdded() { return bp.EventSet("matchAnyPatientAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[Patient]") > -1; }); }
function waitForPatientAdded(id, name) { var expectedDesc = "[Patient] Create patient " + id; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedPatient(id) {
  return bp.EventSet("matchDeletedPatient", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[Patient] Delete patient " + id); });
}

function waitForAnyPatientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Patient\]\ Delete\ patient\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[Patient\]\ Delete\ patient\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  obj["name"] = capturedMap["name"];
  return obj;
}

// ---- Entity: order ----
function createOrder(id) {
  bp.log.info("DEBUG INTERFACE createOrder: called with args=" + JSON.stringify(arguments));
  var url = "/orders";
  var description = "[Order] Create order " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getOrder(id) {
  bp.log.info("DEBUG INTERFACE getOrder: called with args=" + JSON.stringify(arguments));
  var url = "/orders/" + id;
  var description = "[Order] Get order " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function updateOrder(id) {
  bp.log.info("DEBUG INTERFACE updateOrder: called with args=" + JSON.stringify(arguments));
  var url = "/orders/" + id;
  var description = "[Order] Update order " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteOrder(id) {
  bp.log.info("DEBUG INTERFACE deleteOrder: called with args=" + JSON.stringify(arguments));
  var url = "/orders/" + id;
  var description = "[Order] Delete order " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingOrder(id) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingOrder: called with args=" + JSON.stringify(arguments));
  var url = "/orders";
  var description = "[tryToAddExistingOrder] [Order] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
}

function verifyOrderExists(id) {
  var url = "/orders";
  bp.log.info("DEBUG VERIFIER for Order: Arguments=" + JSON.stringify(arguments));
  var description = "[Order] Verify Order with id " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Order to exist but it does not");
    }
  });
}

function verifyOrderDoesNotExist(id) {
  var url = "/orders";
  var description = "[Order] Verify Order does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Order does not exist");
    }
  });
}

function tryToDeleteANonExistingOrder(id) {
  var url = "/orders/" + id;
  var description = "[Order] Verify we cannot delete non-existing Order";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedOrder(id) {
  return matchSuccess("[Order] Create order " + id);
}

function waitForAnyOrderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Order\]\ Create\ order\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for Order: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[Order\]\ Create\ order\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  return obj;
}

function matchAnyOrderAdded() { return bp.EventSet("matchAnyOrderAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[Order]") > -1; }); }
function waitForOrderAdded(id) { var expectedDesc = "[Order] Create order " + id; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedOrder(id) {
  return bp.EventSet("matchDeletedOrder", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[Order] Delete order " + id); });
}

function waitForAnyOrderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Order\]\ Delete\ order\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[Order\]\ Delete\ order\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  return obj;
}

// ---- Entity: prescription ----
function createPrescription(id) {
  bp.log.info("DEBUG INTERFACE createPrescription: called with args=" + JSON.stringify(arguments));
  var url = "/prescriptions";
  var description = "[Prescription] Create prescription " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getPrescription(id) {
  bp.log.info("DEBUG INTERFACE getPrescription: called with args=" + JSON.stringify(arguments));
  var url = "/prescriptions/" + id;
  var description = "[Prescription] Get prescription " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function updatePrescription(id) {
  bp.log.info("DEBUG INTERFACE updatePrescription: called with args=" + JSON.stringify(arguments));
  var url = "/prescriptions/" + id;
  var description = "[Prescription] Update prescription " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deletePrescription(id) {
  bp.log.info("DEBUG INTERFACE deletePrescription: called with args=" + JSON.stringify(arguments));
  var url = "/prescriptions/" + id;
  var description = "[Prescription] Delete prescription " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingPrescription(id) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingPrescription: called with args=" + JSON.stringify(arguments));
  var url = "/prescriptions";
  var description = "[tryToAddExistingPrescription] [Prescription] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
}

function verifyPrescriptionExists(id) {
  var url = "/prescriptions";
  bp.log.info("DEBUG VERIFIER for Prescription: Arguments=" + JSON.stringify(arguments));
  var description = "[Prescription] Verify Prescription with id " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Prescription to exist but it does not");
    }
  });
}

function verifyPrescriptionDoesNotExist(id) {
  var url = "/prescriptions";
  var description = "[Prescription] Verify Prescription does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Prescription does not exist");
    }
  });
}

function tryToDeleteANonExistingPrescription(id) {
  var url = "/prescriptions/" + id;
  var description = "[Prescription] Verify we cannot delete non-existing Prescription";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedPrescription(id) {
  return matchSuccess("[Prescription] Create prescription " + id);
}

function waitForAnyPrescriptionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Prescription\]\ Create\ prescription\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for Prescription: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[Prescription\]\ Create\ prescription\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  return obj;
}

function matchAnyPrescriptionAdded() { return bp.EventSet("matchAnyPrescriptionAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[Prescription]") > -1; }); }
function waitForPrescriptionAdded(id) { var expectedDesc = "[Prescription] Create prescription " + id; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedPrescription(id) {
  return bp.EventSet("matchDeletedPrescription", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[Prescription] Delete prescription " + id); });
}

function waitForAnyPrescriptionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Prescription\]\ Delete\ prescription\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[Prescription\]\ Delete\ prescription\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  return obj;
}

// ---- Entity: inventory ----
function createInventory(ndc) {
  bp.log.info("DEBUG INTERFACE createInventory: called with args=" + JSON.stringify(arguments));
  var url = "/inventory";
  var description = "[Inventory] Create inventory " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 409],
    parameters: { description: description,
      ndc: String(ndc),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { ndc: String(ndc) }) });
}

function getInventory(ndc) {
  bp.log.info("DEBUG INTERFACE getInventory: called with args=" + JSON.stringify(arguments));
  var url = "/inventory/" + ndc;
  var description = "[Inventory] Get inventory " + ndc;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function updateInventory(ndc) {
  bp.log.info("DEBUG INTERFACE updateInventory: called with args=" + JSON.stringify(arguments));
  var url = "/inventory/" + ndc;
  var description = "[Inventory] Update inventory " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: { description: description,
      ndc: String(ndc),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { ndc: String(ndc) }) });
}

function deleteInventory(ndc) {
  bp.log.info("DEBUG INTERFACE deleteInventory: called with args=" + JSON.stringify(arguments));
  var url = "/inventory/" + ndc;
  var description = "[Inventory] Delete inventory " + ndc;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingInventory(ndc) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingInventory: called with args=" + JSON.stringify(arguments));
  var url = "/inventory";
  var description = "[tryToAddExistingInventory] [Inventory] Try Add Existing with ndc " + ndc;
  var body = {
    "ndc": String(ndc),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      ndc: String(ndc),
    }
  });
}

function verifyInventoryExists(ndc) {
  var url = "/inventory";
  bp.log.info("DEBUG VERIFIER for Inventory: Arguments=" + JSON.stringify(arguments));
  var description = "[Inventory] Verify Inventory with ndc " + ndc + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof ndc !== "undefined" && String(items[i].ndc) !== String(ndc)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Inventory to exist but it does not");
    }
  });
}

function verifyInventoryDoesNotExist(ndc) {
  var url = "/inventory";
  var description = "[Inventory] Verify Inventory does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof ndc !== "undefined" && String(items[i].ndc) !== String(ndc)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Inventory does not exist");
    }
  });
}

function tryToDeleteANonExistingInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "[Inventory] Verify we cannot delete non-existing Inventory";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedInventory(ndc) {
  return matchSuccess("[Inventory] Create inventory " + ndc);
}

function waitForAnyInventoryAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Inventory\]\ Create\ inventory\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for Inventory: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[Inventory\]\ Create\ inventory\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["ndc"] = capturedMap["ndc"];
  return obj;
}

function matchAnyInventoryAdded() { return bp.EventSet("matchAnyInventoryAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[Inventory]") > -1; }); }
function waitForInventoryAdded(ndc) { var expectedDesc = "[Inventory] Create inventory " + ndc; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedInventory(ndc) {
  return bp.EventSet("matchDeletedInventory", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[Inventory] Delete inventory " + ndc); });
}

function waitForAnyInventoryDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Inventory\]\ Delete\ inventory\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[Inventory\]\ Delete\ inventory\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["ndc"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["ndc"] = capturedMap["ndc"];
  return obj;
}
