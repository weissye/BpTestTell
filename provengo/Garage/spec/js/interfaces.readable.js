//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : '192.168.225.45';
var port = (typeof port !== 'undefined') ? port : 5000;
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

// ---- Entity: chain ----

function createChain(chainId, hqAddress, name) {
  var url = "/chains";
  var description = "Create chain " + name + " with chainId " + chainId;
  var body = {
    "chainId": String(chainId),
    "name": String(name),
    "hqAddress": hqAddress,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      chainId: String(chainId)
    }
  });
}

function listChains(chainId, name) {
  var url = "/chains";
  var description = "List chains";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function readChain(chainId, name) {
  var url = "/chains/" + chainId;
  var description = "Read chain with chainId " + chainId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateChain(chainId, name) {
  var url = "/chains/" + chainId;
  var description = "Update chain with chainId " + chainId;
  var body = {
    "chainId": String(chainId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      chainId: String(chainId)
    }
  });
}

function deleteChain(chainId, name) {
  var url = "/chains/" + chainId;
  var description = "Delete chain with chainId " + chainId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingChain(chainId, name) {
  var url = "/chains";
  var body = {
    "chainId": String(chainId)
  };
  var description = "Verify that we cannot add another Chain...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyChainExists(chainId, name) {
  var url = "/chains";
  var description = "Verify Chain exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].chainId) === String(chainId)) {
            return pvg.success("Chain exists");
          }
        }
      }
      return pvg.fail("Expected Chain to exist but it does not");
    }
  });
}

function verifyChainDoesNotExist(chainId, name) {
  var url = "/chains";
  var description = "Verify Chain does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].chainId) === String(chainId)) {
            return pvg.fail("Expected Chain to not exist but it does");
          }
        }
      }
      return pvg.success("Chain does not exist");
    }
  });
}

function tryToDeleteANonExistingChain(chainId, name) {
  var url = "/chains/" + chainId;
  var description = "Verify we cannot delete non-existing Chain";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedChain(chainId, name) {
  var expectedDesc = "Create chain " + name + " with chainId " + chainId;
  return bp.EventSet("matchAddedChain", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyChainAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ chain\ (.+)\ with\ chainId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ chain\ (.+)\ with\ chainId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "chainId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getChainAddedEvent(keyVal) {
  return bp.EventSet("AddChain:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.chainId) === String(keyVal);
  });
}

function matchAnyChainAdded() {
  return bp.EventSet("matchAnyChainAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create chain") > -1 && e.data.parameters.chainId !== undefined);
  });
}

function waitForChainAdded(chainId, name) {
  var expectedDesc = "Create chain " + name + " with chainId " + chainId;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedChain(chainId, name) {
  var expectedDesc = "Delete chain with chainId " + chainId;
  return bp.EventSet("matchDeletedChain", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyChainDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ chain\ with\ chainId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ chain\ with\ chainId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["chainId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: garage ----

function createGarage(address, chainId, garageId, name, phone) {
  var url = "/garages";
  var description = "Create garage " + name + " with garageId " + garageId;
  var body = {
    "garageId": String(garageId),
    "chainId": String(chainId),
    "name": String(name),
    "address": address,
    "phone": "phone_" + garageId,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      garageId: String(garageId)
      , chainId: String(chainId)
    }
  });
}

function listGarages(chainId, garageId, name) {
  var url = "/garages";
  var description = "List garages";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function readGarage(chainId, garageId, name) {
  var url = "/garages/" + garageId;
  var description = "Read garage with garageId " + garageId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateGarage(chainId, garageId, name) {
  var url = "/garages/" + garageId;
  var description = "Update garage with garageId " + garageId;
  var body = {
    "garageId": String(garageId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      garageId: String(garageId)
      , chainId: String(chainId)
    }
  });
}

function deleteGarage(chainId, garageId, name) {
  var url = "/garages/" + garageId;
  var description = "Delete garage with garageId " + garageId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingGarage(chainId, garageId, name) {
  var url = "/garages";
  var body = {
    "garageId": String(garageId)
  };
  var description = "Verify that we cannot add another Garage...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGarageExists(chainId, garageId, name) {
  var url = "/garages";
  var description = "Verify Garage exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].garageId) === String(garageId)) {
            return pvg.success("Garage exists");
          }
        }
      }
      return pvg.fail("Expected Garage to exist but it does not");
    }
  });
}

function verifyGarageDoesNotExist(chainId, garageId, name) {
  var url = "/garages";
  var description = "Verify Garage does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].garageId) === String(garageId)) {
            return pvg.fail("Expected Garage to not exist but it does");
          }
        }
      }
      return pvg.success("Garage does not exist");
    }
  });
}

function tryToDeleteANonExistingGarage(chainId, garageId, name) {
  var url = "/garages/" + garageId;
  var description = "Verify we cannot delete non-existing Garage";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedGarage(chainId, garageId, name) {
  var expectedDesc = "Create garage " + name + " with garageId " + garageId;
  return bp.EventSet("matchAddedGarage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGarageAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ garage\ (.+)\ with\ garageId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ garage\ (.+)\ with\ garageId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "garageId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGarageAddedEvent(keyVal) {
  return bp.EventSet("AddGarage:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.garageId) === String(keyVal);
  });
}

function matchAnyGarageAdded() {
  return bp.EventSet("matchAnyGarageAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create garage") > -1 && e.data.parameters.garageId !== undefined);
  });
}

function waitForGarageAdded(chainId, garageId, name) {
  var expectedDesc = "Create garage " + name + " with garageId " + garageId;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedGarage(chainId, garageId, name) {
  var expectedDesc = "Delete garage with garageId " + garageId;
  return bp.EventSet("matchDeletedGarage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGarageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ garage\ with\ garageId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ garage\ with\ garageId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["garageId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: customer ----

function createCustomer(customerId, email, fullName, phone, type) {
  var url = "/customers";
  var description = "Create customer " + fullName + " with customerId " + customerId;
  var body = {
    "customerId": String(customerId),
    "type": String(type),
    "fullName": String(fullName),
    "email": String(email),
    "phone": String(phone),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      customerId: String(customerId)
    }
  });
}

function listCustomers(customerId, email, fullName, phone, type) {
  var url = "/customers";
  var description = "List customers";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function readCustomer(customerId, email, fullName, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Read customer with customerId " + customerId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateCustomer(customerId, email, fullName, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Update customer with customerId " + customerId;
  var body = {
    "customerId": String(customerId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      customerId: String(customerId)
    }
  });
}

function deleteCustomer(customerId, email, fullName, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Delete customer with customerId " + customerId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCustomer(customerId, email, fullName, phone, type) {
  var url = "/customers";
  var body = {
    "customerId": String(customerId)
  };
  var description = "Verify that we cannot add another Customer...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCustomerExists(customerId, email, fullName, phone, type) {
  var url = "/customers";
  var description = "Verify Customer exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].customerId) === String(customerId)) {
            return pvg.success("Customer exists");
          }
        }
      }
      return pvg.fail("Expected Customer to exist but it does not");
    }
  });
}

function verifyCustomerDoesNotExist(customerId, email, fullName, phone, type) {
  var url = "/customers";
  var description = "Verify Customer does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].customerId) === String(customerId)) {
            return pvg.fail("Expected Customer to not exist but it does");
          }
        }
      }
      return pvg.success("Customer does not exist");
    }
  });
}

function tryToDeleteANonExistingCustomer(customerId, email, fullName, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Verify we cannot delete non-existing Customer";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCustomer(customerId, email, fullName, phone, type) {
  var expectedDesc = "Create customer " + fullName + " with customerId " + customerId;
  return bp.EventSet("matchAddedCustomer", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomerAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ customer\ (.+)\ with\ customerId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ customer\ (.+)\ with\ customerId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["fullName", "customerId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCustomerAddedEvent(keyVal) {
  return bp.EventSet("AddCustomer:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.customerId) === String(keyVal);
  });
}

function matchAnyCustomerAdded() {
  return bp.EventSet("matchAnyCustomerAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create customer") > -1 && e.data.parameters.customerId !== undefined);
  });
}

function waitForCustomerAdded(customerId, email, fullName, phone, type) {
  var expectedDesc = "Create customer " + fullName + " with customerId " + customerId;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCustomer(customerId, email, fullName, phone, type) {
  var expectedDesc = "Delete customer with customerId " + customerId;
  return bp.EventSet("matchDeletedCustomer", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomerDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ customer\ with\ customerId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ customer\ with\ customerId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["customerId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: car ----

function createCar(make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Create car " + make + " " + model + " with vin " + vin;
  var body = {
    "vin": String(vin),
    "make": String(make),
    "model": String(model),
    "year": String(1),
    "mileage": String(1),
    "ownerCustomerId": String(vin),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      vin: String(vin)
      , ownerCustomerId: String(ownerCustomerId)
    }
  });
}

function listCars(make, model, vin) {
  var url = "/cars";
  var description = "List cars";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function readCar(make, model, vin) {
  var url = "/cars/" + vin;
  var description = "Read car with vin " + vin;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateCar(make, model, vin) {
  var url = "/cars/" + vin;
  var description = "Update car with vin " + vin;
  var body = {
    "vin": String(vin),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      vin: String(vin)
    }
  });
}

function deleteCar(make, model, vin) {
  var url = "/cars/" + vin;
  var description = "Delete car with vin " + vin;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCar(make, model, vin) {
  var url = "/cars";
  var body = {
    "vin": String(vin)
  };
  var description = "Verify that we cannot add another Car...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCarExists(make, model, vin) {
  var url = "/cars";
  var description = "Verify Car exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].vin) === String(vin)) {
            return pvg.success("Car exists");
          }
        }
      }
      return pvg.fail("Expected Car to exist but it does not");
    }
  });
}

function verifyCarDoesNotExist(make, model, vin) {
  var url = "/cars";
  var description = "Verify Car does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].vin) === String(vin)) {
            return pvg.fail("Expected Car to not exist but it does");
          }
        }
      }
      return pvg.success("Car does not exist");
    }
  });
}

function tryToDeleteANonExistingCar(make, model, vin) {
  var url = "/cars/" + vin;
  var description = "Verify we cannot delete non-existing Car";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCar(make, model, vin) {
  var expectedDesc = "Create car " + make + " " + model + " with vin " + vin;
  return bp.EventSet("matchAddedCar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCarAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ car\ (.+)\ (.+)\ with\ vin\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ car\ (.+)\ (.+)\ with\ vin\ (.+)$/);
  var captures = m.slice(1);
  var names = ["make", "model", "vin"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCarAddedEvent(keyVal) {
  return bp.EventSet("AddCar:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.vin) === String(keyVal);
  });
}

function matchAnyCarAdded() {
  return bp.EventSet("matchAnyCarAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create car") > -1 && e.data.parameters.vin !== undefined);
  });
}

function waitForCarAdded(make, model, vin) {
  var expectedDesc = "Create car " + make + " " + model + " with vin " + vin;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCar(make, model, vin) {
  var expectedDesc = "Delete car with vin " + vin;
  return bp.EventSet("matchDeletedCar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCarDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ car\ with\ vin\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ car\ with\ vin\ (.+)$/);
  var captures = m.slice(1);
  var names = ["vin"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: periodicMaintenance ----

function createPeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance";
  var description = "Create PM plan with pmId " + pmId;
  var body = {
    "pmId": String(pmId),
    "carVin": String(carVin),
    "garageId": String(garageId),
    "planType": String(planType),
    "tasks": String(tasks),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      pmId: String(pmId)
      , garageId: String(garageId)
    }
  });
}

function listPeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance";
  var description = "List PM plans";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function readPeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Read PM plan with pmId " + pmId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updatePeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update PM plan with pmId " + pmId;
  var body = {
    "pmId": String(pmId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      pmId: String(pmId)
      , garageId: String(garageId)
    }
  });
}

function deletePeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete PM plan with pmId " + pmId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance";
  var body = {
    "pmId": String(pmId)
  };
  var description = "Verify that we cannot add another PeriodicMaintenance...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPeriodicMaintenanceExists(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance";
  var description = "Verify PeriodicMaintenance exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].pmId) === String(pmId)) {
            return pvg.success("PeriodicMaintenance exists");
          }
        }
      }
      return pvg.fail("Expected PeriodicMaintenance to exist but it does not");
    }
  });
}

function verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance";
  var description = "Verify PeriodicMaintenance does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].pmId) === String(pmId)) {
            return pvg.fail("Expected PeriodicMaintenance to not exist but it does");
          }
        }
      }
      return pvg.success("PeriodicMaintenance does not exist");
    }
  });
}

function tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify we cannot delete non-existing PeriodicMaintenance";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedPeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var expectedDesc = "Create PM plan with pmId " + pmId;
  return bp.EventSet("matchAddedPeriodicMaintenance", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPeriodicMaintenanceAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ PM\ plan\ with\ pmId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ PM\ plan\ with\ pmId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["pmId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPeriodicMaintenanceAddedEvent(keyVal) {
  return bp.EventSet("AddPeriodicMaintenance:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.pmId) === String(keyVal);
  });
}

function matchAnyPeriodicMaintenanceAdded() {
  return bp.EventSet("matchAnyPeriodicMaintenanceAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create periodicMaintenance") > -1 && e.data.parameters.pmId !== undefined);
  });
}

function waitForPeriodicMaintenanceAdded(carVin, garageId, planType, pmId, tasks) {
  var expectedDesc = "Create PM plan with pmId " + pmId;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedPeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var expectedDesc = "Delete PM plan with pmId " + pmId;
  return bp.EventSet("matchDeletedPeriodicMaintenance", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPeriodicMaintenanceDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ PM\ plan\ with\ pmId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ PM\ plan\ with\ pmId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["pmId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repairOrder ----

function createRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders";
  var description = "Create repair order with roId " + roId;
  var body = {
    "roId": String(roId),
    "carVin": String(carVin),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "complaint": String(complaint),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      roId: String(roId)
      , customerId: String(customerId)
      , garageId: String(garageId)
    }
  });
}

function listRepairOrders(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders";
  var description = "List repair orders";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function readRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders/" + roId;
  var description = "Read repair order with roId " + roId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders/" + roId;
  var description = "Update repair order with roId " + roId;
  var body = {
    "roId": String(roId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      roId: String(roId)
      , customerId: String(customerId)
      , garageId: String(garageId)
    }
  });
}

function deleteRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repair order with roId " + roId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders";
  var body = {
    "roId": String(roId)
  };
  var description = "Verify that we cannot add another RepairOrder...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders";
  var description = "Verify RepairOrder exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].roId) === String(roId)) {
            return pvg.success("RepairOrder exists");
          }
        }
      }
      return pvg.fail("Expected RepairOrder to exist but it does not");
    }
  });
}

function verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders";
  var description = "Verify RepairOrder does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].roId) === String(roId)) {
            return pvg.fail("Expected RepairOrder to not exist but it does");
          }
        }
      }
      return pvg.success("RepairOrder does not exist");
    }
  });
}

function tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders/" + roId;
  var description = "Verify we cannot delete non-existing RepairOrder";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var expectedDesc = "Create repair order with roId " + roId;
  return bp.EventSet("matchAddedRepairOrder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepairOrderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ repair\ order\ with\ roId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ repair\ order\ with\ roId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["roId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepairOrderAddedEvent(keyVal) {
  return bp.EventSet("AddRepairOrder:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.roId) === String(keyVal);
  });
}

function matchAnyRepairOrderAdded() {
  return bp.EventSet("matchAnyRepairOrderAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repairOrder") > -1 && e.data.parameters.roId !== undefined);
  });
}

function waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId) {
  var expectedDesc = "Create repair order with roId " + roId;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var expectedDesc = "Delete repair order with roId " + roId;
  return bp.EventSet("matchDeletedRepairOrder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepairOrderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ repair\ order\ with\ roId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ repair\ order\ with\ roId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["roId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
