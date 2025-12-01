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

// ---- Entity: chain ----

function createChain(chainId, hqAddress, name) {
  var url = "/chains";
  var description = "Create chain " + chainId;
  var body = {
    "chainId": String(chainId),
    "name": String(name),
    "hqAddress": hqAddress,
  };
  bp.log.info("[CALL] createChain");
  bp.log.info("[DEBUG] createChain body: " + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      chainId: String(chainId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { chainId: String(chainId) }) });
}

function getChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Get chain " + chainId;
  var body = undefined;
  bp.log.info("[CALL] getChain");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Update chain " + chainId;
  var body = {
    "chainId": String(chainId),
  };
  bp.log.info("[CALL] updateChain");
  bp.log.info("[DEBUG] updateChain body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      chainId: String(chainId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { chainId: String(chainId) }) });
}

function deleteChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Delete chain " + chainId;
  var body = undefined;
  bp.log.info("[CALL] deleteChain");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingChain(chainId, hqAddress, name) {
  var url = "/chains";
  var body = undefined;
  var description = "Verify that we cannot add another Chain...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyChainExists(chainId) {
  var url = "/chains";
  var description = "Verify Chain " + "with chainId " + chainId + " " + "exists";
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

function verifyChainDoesNotExist(chainId) {
  var url = "/chains";
  var description = "Verify Chain " + "with chainId " + chainId + " " + "does not exist";
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

function tryToDeleteANonExistingChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Verify we cannot delete non-existing Chain";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedChain(chainId) {
  var expectedDesc = "Create chain " + chainId;
  return matchSuccess(expectedDesc);
}

function waitForAnyChainAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ chain\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ chain\ (.+)$/);
  var captures = m.slice(1);
  var names = ["chainId"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.chainId !== undefined && e.name.indexOf("Create chain") > -1;
  });
}

function waitForChainAdded(chainId) {
  var expectedDesc = "Create chain " + chainId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedChain(chainId) {
  var expectedDesc = "Delete chain " + chainId;
  return bp.EventSet("matchDeletedChain", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyChainDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ chain\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ chain\ (.+)$/);
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
  var description = "Create garage " + garageId;
  var body = {
    "garageId": String(garageId),
    "chainId": String(chainId),
    "name": String(name),
    "address": address,
    "phone": String(phone),
  };
  bp.log.info("[CALL] createGarage");
  bp.log.info("[DEBUG] createGarage body: " + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      garageId: String(garageId)
      , chainId: String(chainId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { garageId: String(garageId) }) });
}

function getGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Get garage " + garageId;
  var body = undefined;
  bp.log.info("[CALL] getGarage");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Update garage " + garageId;
  var body = {
    "garageId": String(garageId),
  };
  bp.log.info("[CALL] updateGarage");
  bp.log.info("[DEBUG] updateGarage body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      garageId: String(garageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { garageId: String(garageId) }) });
}

function deleteGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Delete garage " + garageId;
  var body = undefined;
  bp.log.info("[CALL] deleteGarage");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingGarage(address, chainId, garageId, name, phone) {
  var url = "/garages";
  var body = undefined;
  var description = "Verify that we cannot add another Garage...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGarageExists(garageId) {
  var url = "/garages";
  var description = "Verify Garage " + "with garageId " + garageId + " " + "exists";
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

function verifyGarageDoesNotExist(garageId) {
  var url = "/garages";
  var description = "Verify Garage " + "with garageId " + garageId + " " + "does not exist";
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

function tryToDeleteANonExistingGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Verify we cannot delete non-existing Garage";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedGarage(garageId) {
  var expectedDesc = "Create garage " + garageId;
  return matchSuccess(expectedDesc);
}

function waitForAnyGarageAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ garage\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ garage\ (.+)$/);
  var captures = m.slice(1);
  var names = ["garageId"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.garageId !== undefined && e.name.indexOf("Create garage") > -1;
  });
}

function waitForGarageAdded(garageId) {
  var expectedDesc = "Create garage " + garageId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedGarage(garageId) {
  var expectedDesc = "Delete garage " + garageId;
  return bp.EventSet("matchDeletedGarage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGarageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ garage\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ garage\ (.+)$/);
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
  var description = "Create customer " + customerId;
  var body = {
    "customerId": String(customerId),
    "type": String(type),
    "fullName": String(fullName),
    "email": String(email),
    "phone": String(phone),
  };
  bp.log.info("[CALL] createCustomer");
  bp.log.info("[DEBUG] createCustomer body: " + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      customerId: String(customerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { customerId: String(customerId) }) });
}

function getCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Get customer " + customerId;
  var body = undefined;
  bp.log.info("[CALL] getCustomer");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Update customer " + customerId;
  var body = {
    "customerId": String(customerId),
  };
  bp.log.info("[CALL] updateCustomer");
  bp.log.info("[DEBUG] updateCustomer body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      customerId: String(customerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { customerId: String(customerId) }) });
}

function deleteCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Delete customer " + customerId;
  var body = undefined;
  bp.log.info("[CALL] deleteCustomer");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCustomer(customerId, email, fullName, phone, type) {
  var url = "/customers";
  var body = undefined;
  var description = "Verify that we cannot add another Customer...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCustomerExists(customerId) {
  var url = "/customers";
  var description = "Verify Customer " + "with customerId " + customerId + " " + "exists";
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

function verifyCustomerDoesNotExist(customerId) {
  var url = "/customers";
  var description = "Verify Customer " + "with customerId " + customerId + " " + "does not exist";
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

function tryToDeleteANonExistingCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Verify we cannot delete non-existing Customer";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCustomer(customerId) {
  var expectedDesc = "Create customer " + customerId;
  return matchSuccess(expectedDesc);
}

function waitForAnyCustomerAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ customer\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ customer\ (.+)$/);
  var captures = m.slice(1);
  var names = ["customerId"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.customerId !== undefined && e.name.indexOf("Create customer") > -1;
  });
}

function waitForCustomerAdded(customerId) {
  var expectedDesc = "Create customer " + customerId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCustomer(customerId) {
  var expectedDesc = "Delete customer " + customerId;
  return bp.EventSet("matchDeletedCustomer", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomerDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ customer\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ customer\ (.+)$/);
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
  var description = "Create car " + vin;
  var body = {
    "vin": String(vin),
    "make": String(make),
    "model": String(model),
    "year": String(year),
    "mileage": String(mileage),
    "ownerCustomerId": String(ownerCustomerId),
  };
  bp.log.info("[CALL] createCar");
  bp.log.info("[DEBUG] createCar body: " + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      vin: String(vin)
      , ownerCustomerId: String(ownerCustomerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { vin: String(vin) }) });
}

function getCar(vin) {
  var url = "/cars/" + vin;
  var description = "Get car " + vin;
  var body = undefined;
  bp.log.info("[CALL] getCar");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateCar(vin) {
  var url = "/cars/" + vin;
  var description = "Update car " + vin;
  var body = {
    "vin": String(vin),
  };
  bp.log.info("[CALL] updateCar");
  bp.log.info("[DEBUG] updateCar body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      vin: String(vin)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { vin: String(vin) }) });
}

function deleteCar(vin) {
  var url = "/cars/" + vin;
  var description = "Delete car " + vin;
  var body = undefined;
  bp.log.info("[CALL] deleteCar");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCar(make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var body = undefined;
  var description = "Verify that we cannot add another Car...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCarExists(vin) {
  var url = "/cars";
  var description = "Verify Car " + "with vin " + vin + " " + "exists";
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

function verifyCarDoesNotExist(vin) {
  var url = "/cars";
  var description = "Verify Car " + "with vin " + vin + " " + "does not exist";
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

function tryToDeleteANonExistingCar(vin) {
  var url = "/cars/" + vin;
  var description = "Verify we cannot delete non-existing Car";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCar(vin) {
  var expectedDesc = "Create car " + vin;
  return matchSuccess(expectedDesc);
}

function waitForAnyCarAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ car\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ car\ (.+)$/);
  var captures = m.slice(1);
  var names = ["vin"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.vin !== undefined && e.name.indexOf("Create car") > -1;
  });
}

function waitForCarAdded(vin) {
  var expectedDesc = "Create car " + vin;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCar(vin) {
  var expectedDesc = "Delete car " + vin;
  return bp.EventSet("matchDeletedCar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCarDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ car\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ car\ (.+)$/);
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
  var description = "Create periodic maintenance plan " + pmId;
  var body = {
    "pmId": String(pmId),
    "carVin": String(carVin),
    "garageId": String(garageId),
    "planType": String(planType),
    "tasks": String(tasks),
  };
  bp.log.info("[CALL] createPeriodicMaintenance");
  bp.log.info("[DEBUG] createPeriodicMaintenance body: " + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      pmId: String(pmId)
      , garageId: String(garageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { pmId: String(pmId) }) });
}

function getPeriodicMaintenance(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Get periodic maintenance plan " + pmId;
  var body = undefined;
  bp.log.info("[CALL] getPeriodicMaintenance");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updatePeriodicMaintenance(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update periodic maintenance plan " + pmId;
  var body = {
    "pmId": String(pmId),
  };
  bp.log.info("[CALL] updatePeriodicMaintenance");
  bp.log.info("[DEBUG] updatePeriodicMaintenance body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      pmId: String(pmId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { pmId: String(pmId) }) });
}

function deletePeriodicMaintenance(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete periodic maintenance plan " + pmId;
  var body = undefined;
  bp.log.info("[CALL] deletePeriodicMaintenance");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPeriodicMaintenance(carVin, garageId, planType, pmId, tasks) {
  var url = "/periodic-maintenance";
  var body = undefined;
  var description = "Verify that we cannot add another PeriodicMaintenance...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPeriodicMaintenanceExists(pmId) {
  var url = "/periodic-maintenance";
  var description = "Verify PeriodicMaintenance " + "with pmId " + pmId + " " + "exists";
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

function verifyPeriodicMaintenanceDoesNotExist(pmId) {
  var url = "/periodic-maintenance";
  var description = "Verify PeriodicMaintenance " + "with pmId " + pmId + " " + "does not exist";
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

function tryToDeleteANonExistingPeriodicMaintenance(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify we cannot delete non-existing PeriodicMaintenance";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedPeriodicMaintenance(pmId) {
  var expectedDesc = "Create periodic maintenance plan " + pmId;
  return matchSuccess(expectedDesc);
}

function waitForAnyPeriodicMaintenanceAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ periodic\ maintenance\ plan\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ periodic\ maintenance\ plan\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.pmId !== undefined && e.name.indexOf("Create periodicMaintenance") > -1;
  });
}

function waitForPeriodicMaintenanceAdded(pmId) {
  var expectedDesc = "Create periodic maintenance plan " + pmId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPeriodicMaintenance(pmId) {
  var expectedDesc = "Delete periodic maintenance plan " + pmId;
  return bp.EventSet("matchDeletedPeriodicMaintenance", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPeriodicMaintenanceDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ periodic\ maintenance\ plan\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ periodic\ maintenance\ plan\ (.+)$/);
  var captures = m.slice(1);
  var names = ["pmId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repair order ----

function createRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders";
  var description = "Create repair order " + roId;
  var body = {
    "roId": String(roId),
    "carVin": String(carVin),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "complaint": String(complaint),
  };
  bp.log.info("[CALL] createRepairOrder");
  bp.log.info("[DEBUG] createRepairOrder body: " + JSON.stringify(body));
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
  bp.sync({ request: bp.Event("Done: " + description, { roId: String(roId) }) });
}

function getRepairOrders(roId) {
  var url = "/repair-orders";
  var description = "List repair orders";
  var body = undefined;
  bp.log.info("[CALL] getRepairOrders");
  svc.get(url, {
    parameters: { description: description }
  });
}

function getRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Read repair order " + roId;
  var body = undefined;
  bp.log.info("[CALL] getRepairOrder");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Update repair order " + roId;
  var body = {
    "roId": String(roId),
  };
  bp.log.info("[CALL] updateRepairOrder");
  bp.log.info("[DEBUG] updateRepairOrder body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      roId: String(roId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { roId: String(roId) }) });
}

function deleteRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repair order " + roId;
  var body = undefined;
  bp.log.info("[CALL] deleteRepairOrder");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function approveRepairOrder(roId) {
  var url = "/repair-orders/" + roId + "/approve";
  var description = "Approve repair order " + roId;
  var body = {
    "roId": String(roId),
  };
  bp.log.info("[CALL] approveRepairOrder");
  bp.log.info("[DEBUG] approveRepairOrder body: " + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      roId: String(roId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { roId: String(roId) }) });
}

function closeRepairOrder(roId) {
  var url = "/repair-orders/" + roId + "/close";
  var description = "Close repair order " + roId;
  var body = {
    "roId": String(roId),
  };
  bp.log.info("[CALL] closeRepairOrder");
  bp.log.info("[DEBUG] closeRepairOrder body: " + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      roId: String(roId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { roId: String(roId) }) });
}

function tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId) {
  var url = "/repair-orders";
  var body = {
    "roId": String(roId),
  };
  var description = "Verify that we cannot add another RepairOrder...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepairOrderExists(roId) {
  var url = "/repair-orders";
  var description = "Verify RepairOrder " + "with roId " + roId + " " + "exists";
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

function verifyRepairOrderDoesNotExist(roId) {
  var url = "/repair-orders";
  var description = "Verify RepairOrder " + "with roId " + roId + " " + "does not exist";
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

function tryToDeleteANonExistingRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Verify we cannot delete non-existing RepairOrder";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepairOrder(roId) {
  var expectedDesc = "Create repair order " + roId;
  return matchSuccess(expectedDesc);
}

function waitForAnyRepairOrderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ repair\ order\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ repair\ order\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.roId !== undefined && e.name.indexOf("Create repair order") > -1;
  });
}

function waitForRepairOrderAdded(roId) {
  var expectedDesc = "Create repair order " + roId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRepairOrder(roId) {
  var expectedDesc = "Delete repair order " + roId;
  return bp.EventSet("matchDeletedRepairOrder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepairOrderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ repair\ order\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ repair\ order\ (.+)$/);
  var captures = m.slice(1);
  var names = ["roId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
