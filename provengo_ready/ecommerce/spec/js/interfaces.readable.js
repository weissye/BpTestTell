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

// ---- Entity: patient ----

function createPatient() {
  var url = "/patients";
  var description = "Create patient";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingPatient() {
  var url = "/patients";
  var body = {
  };
  var description = "Verify that we cannot add another Patient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPatientExists() {
  var url = "/patients";
  var description = "Verify Patient exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Patient exists");
          }
        }
      }
      return pvg.fail("Expected Patient to exist but it does not");
    }
  });
}

function verifyPatientDoesNotExist() {
  var url = "/patients";
  var description = "Verify Patient does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Patient to not exist but it does");
          }
        }
      }
      return pvg.success("Patient does not exist");
    }
  });
}

function matchAddedPatient() {
  var expectedDesc = "Create patient";
  return matchSuccess(expectedDesc);
}

function waitForAnyPatientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ patient$/));
  var m = ev.data.parameters.description.match(/^Create\ patient$/);
  var captures = m.slice(1);
  var names = [];
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create patient") > -1;
  });
}

function waitForPatientAdded() {
  var expectedDesc = "Create patient";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: drug ----

function getDrugs() {
  var url = "/drugs";
  var description = "Get list of drugs";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createDrug() {
  var url = "/drugs";
  var description = "Create drug";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingDrug() {
  var url = "/drugs";
  var body = {
  };
  var description = "Verify that we cannot add another Drug...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDrugExists() {
  var url = "/drugs";
  var description = "Verify Drug exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Drug exists");
          }
        }
      }
      return pvg.fail("Expected Drug to exist but it does not");
    }
  });
}

function verifyDrugDoesNotExist() {
  var url = "/drugs";
  var description = "Verify Drug does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Drug to not exist but it does");
          }
        }
      }
      return pvg.success("Drug does not exist");
    }
  });
}

function matchAddedDrug() {
  var expectedDesc = "Create drug";
  return matchSuccess(expectedDesc);
}

function waitForAnyDrugAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ drug$/));
  var m = ev.data.parameters.description.match(/^Create\ drug$/);
  var captures = m.slice(1);
  var names = [];
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create drug") > -1;
  });
}

function waitForDrugAdded() {
  var expectedDesc = "Create drug";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: prescription ----

function createPrescription() {
  var url = "/prescriptions";
  var description = "Create prescription";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingPrescription() {
  var url = "/prescriptions";
  var body = {
  };
  var description = "Verify that we cannot add another Prescription...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPrescriptionExists() {
  var url = "/prescriptions";
  var description = "Verify Prescription exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Prescription exists");
          }
        }
      }
      return pvg.fail("Expected Prescription to exist but it does not");
    }
  });
}

function verifyPrescriptionDoesNotExist() {
  var url = "/prescriptions";
  var description = "Verify Prescription does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Prescription to not exist but it does");
          }
        }
      }
      return pvg.success("Prescription does not exist");
    }
  });
}

function matchAddedPrescription() {
  var expectedDesc = "Create prescription";
  return matchSuccess(expectedDesc);
}

function waitForAnyPrescriptionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ prescription$/));
  var m = ev.data.parameters.description.match(/^Create\ prescription$/);
  var captures = m.slice(1);
  var names = [];
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create prescription") > -1;
  });
}

function waitForPrescriptionAdded() {
  var expectedDesc = "Create prescription";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: order ----

function getOrders() {
  var url = "/orders";
  var description = "Get list of orders";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createOrder() {
  var url = "/orders";
  var description = "Create order";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingOrder() {
  var url = "/orders";
  var body = {
  };
  var description = "Verify that we cannot add another Order...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyOrderExists() {
  var url = "/orders";
  var description = "Verify Order exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Order exists");
          }
        }
      }
      return pvg.fail("Expected Order to exist but it does not");
    }
  });
}

function verifyOrderDoesNotExist() {
  var url = "/orders";
  var description = "Verify Order does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Order to not exist but it does");
          }
        }
      }
      return pvg.success("Order does not exist");
    }
  });
}

function matchAddedOrder() {
  var expectedDesc = "Create order";
  return matchSuccess(expectedDesc);
}

function waitForAnyOrderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ order$/));
  var m = ev.data.parameters.description.match(/^Create\ order$/);
  var captures = m.slice(1);
  var names = [];
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create order") > -1;
  });
}

function waitForOrderAdded() {
  var expectedDesc = "Create order";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: inventory ----

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory item with ndc " + ndc;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
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
