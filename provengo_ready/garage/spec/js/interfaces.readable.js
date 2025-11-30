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

// ---- Entity: chain ----

function createChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "Create chain " + name + " with chainId " + chainId;
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
      chainId: String(chainId)
    }
  });
}

function getChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Get chain with chainId " + chainId;
  var body = undefined;
  bp.log.info("[CALL] getChain");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Update chain with chainId " + chainId;
  var body = {
    "chainId": String(chainId),
  };
  bp.log.info("[CALL] updateChain");
  bp.log.info("[DEBUG] updateChain body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      chainId: String(chainId)
    }
  });
}

function deleteChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Delete chain with chainId " + chainId;
  var body = undefined;
  bp.log.info("[CALL] deleteChain");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingChain(active, chainId, hqAddress, name, supportEmail) {
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

function verifyChainExists(active, chainId, hqAddress, name, supportEmail) {
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

function verifyChainDoesNotExist(active, chainId, hqAddress, name, supportEmail) {
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

function tryToDeleteANonExistingChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Verify we cannot delete non-existing Chain";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedChain(active, chainId, hqAddress, name, supportEmail) {
  var expectedDesc = "Create chain " + name + " with chainId " + chainId;
  return bp.EventSet("matchAddedChain", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyChainAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ chain\ (.+)\ with\ chainId\ (.+)$/)});
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
  return matchesDescriptionRegex(/^Create\ chain\ (.+)\ with\ chainId\ (.+)$/);
}

function waitForChainAdded(active, chainId, hqAddress, name, supportEmail) {
  var expectedDesc = "Create chain " + name + " with chainId " + chainId;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedChain(active, chainId, hqAddress, name, supportEmail) {
  var expectedDesc = "Delete chain with chainId " + chainId;
  return bp.EventSet("matchDeletedChain", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyChainDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ chain\ with\ chainId\ (.+)$/)});
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

function createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "Create garage " + name + " with garageId " + garageId;
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
      garageId: String(garageId)
      , chainId: String(chainId)
    }
  });
}

function getGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Get garage with garageId " + garageId;
  var body = undefined;
  bp.log.info("[CALL] getGarage");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Update garage with garageId " + garageId;
  var body = {
    "garageId": String(garageId),
  };
  bp.log.info("[CALL] updateGarage");
  bp.log.info("[DEBUG] updateGarage body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      garageId: String(garageId)
      , chainId: String(chainId)
    }
  });
}

function deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Delete garage with garageId " + garageId;
  var body = undefined;
  bp.log.info("[CALL] deleteGarage");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
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

function verifyGarageExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
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

function verifyGarageDoesNotExist(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
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

function tryToDeleteANonExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Verify we cannot delete non-existing Garage";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var expectedDesc = "Create garage " + name + " with garageId " + garageId;
  return bp.EventSet("matchAddedGarage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGarageAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ garage\ (.+)\ with\ garageId\ (.+)$/)});
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
  return matchesDescriptionRegex(/^Create\ garage\ (.+)\ with\ garageId\ (.+)$/);
}

function waitForGarageAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var expectedDesc = "Create garage " + name + " with garageId " + garageId;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var expectedDesc = "Delete garage with garageId " + garageId;
  return bp.EventSet("matchDeletedGarage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGarageDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ garage\ with\ garageId\ (.+)$/)});
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

function createCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers";
  var description = "Create customer " + fullName + " with customerId " + customerId;
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
      customerId: String(customerId)
      , preferredGarageId: String(preferredGarageId)
    }
  });
}

function getCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Get customer with customerId " + customerId;
  var body = undefined;
  bp.log.info("[CALL] getCustomer");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Update customer with customerId " + customerId;
  var body = {
    "customerId": String(customerId),
  };
  bp.log.info("[CALL] updateCustomer");
  bp.log.info("[DEBUG] updateCustomer body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      customerId: String(customerId)
      , preferredGarageId: String(preferredGarageId)
    }
  });
}

function deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Delete customer with customerId " + customerId;
  var body = undefined;
  bp.log.info("[CALL] deleteCustomer");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
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

function verifyCustomerExists(customerId, email, fullName, phone, preferredGarageId, type) {
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

function verifyCustomerDoesNotExist(customerId, email, fullName, phone, preferredGarageId, type) {
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

function tryToDeleteANonExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Verify we cannot delete non-existing Customer";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var expectedDesc = "Create customer " + fullName + " with customerId " + customerId;
  return bp.EventSet("matchAddedCustomer", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomerAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ customer\ (.+)\ with\ customerId\ (.+)$/)});
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
  return matchesDescriptionRegex(/^Create\ customer\ (.+)\ with\ customerId\ (.+)$/);
}

function waitForCustomerAdded(customerId, email, fullName, phone, preferredGarageId, type) {
  var expectedDesc = "Create customer " + fullName + " with customerId " + customerId;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var expectedDesc = "Delete customer with customerId " + customerId;
  return bp.EventSet("matchDeletedCustomer", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomerDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ customer\ with\ customerId\ (.+)$/)});
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

function createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Create car " + make + " " + model + " with vin " + vin;
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
      vin: String(vin)
      , homeGarageId: String(homeGarageId)
      , ownerCustomerId: String(ownerCustomerId)
    }
  });
}

function getCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Get car with vin " + vin;
  var body = undefined;
  bp.log.info("[CALL] getCar");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Update car with vin " + vin;
  var body = {
    "vin": String(vin),
  };
  bp.log.info("[CALL] updateCar");
  bp.log.info("[DEBUG] updateCar body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      vin: String(vin)
      , homeGarageId: String(homeGarageId)
      , ownerCustomerId: String(ownerCustomerId)
    }
  });
}

function deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Delete car with vin " + vin;
  var body = undefined;
  bp.log.info("[CALL] deleteCar");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
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

function verifyCarExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
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

function verifyCarDoesNotExist(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
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

function tryToDeleteANonExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Verify we cannot delete non-existing Car";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var expectedDesc = "Create car " + make + " " + model + " with vin " + vin;
  return bp.EventSet("matchAddedCar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCarAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ car\ (.+)\ (.+)\ with\ vin\ (.+)$/)});
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
  return matchesDescriptionRegex(/^Create\ car\ (.+)\ (.+)\ with\ vin\ (.+)$/);
}

function waitForCarAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var expectedDesc = "Create car " + make + " " + model + " with vin " + vin;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var expectedDesc = "Delete car with vin " + vin;
  return bp.EventSet("matchDeletedCar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCarDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ car\ with\ vin\ (.+)$/)});
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

function createPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance";
  var description = "Create periodic maintenance plan with pmId " + pmId;
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
      pmId: String(pmId)
      , garageId: String(garageId)
    }
  });
}

function getPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Get periodic maintenance plan with pmId " + pmId;
  var body = undefined;
  bp.log.info("[CALL] getPeriodicMaintenance");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updatePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update periodic maintenance plan with pmId " + pmId;
  var body = {
    "pmId": String(pmId),
  };
  bp.log.info("[CALL] updatePeriodicMaintenance");
  bp.log.info("[DEBUG] updatePeriodicMaintenance body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      pmId: String(pmId)
      , garageId: String(garageId)
    }
  });
}

function deletePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete periodic maintenance plan with pmId " + pmId;
  var body = undefined;
  bp.log.info("[CALL] deletePeriodicMaintenance");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
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

function verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
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

function verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
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

function tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify we cannot delete non-existing PeriodicMaintenance";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var expectedDesc = "Create periodic maintenance plan with pmId " + pmId;
  return bp.EventSet("matchAddedPeriodicMaintenance", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPeriodicMaintenanceAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ periodic\ maintenance\ plan\ with\ pmId\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ periodic\ maintenance\ plan\ with\ pmId\ (.+)$/);
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
  return matchesDescriptionRegex(/^Create\ periodic\ maintenance\ plan\ with\ pmId\ (.+)$/);
}

function waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var expectedDesc = "Create periodic maintenance plan with pmId " + pmId;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var expectedDesc = "Delete periodic maintenance plan with pmId " + pmId;
  return bp.EventSet("matchDeletedPeriodicMaintenance", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPeriodicMaintenanceDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ periodic\ maintenance\ plan\ with\ pmId\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ periodic\ maintenance\ plan\ with\ pmId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["pmId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repairOrder ----

function createRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "Create repair order with roId " + roId;
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
      roId: String(roId)
      , customerId: String(customerId)
      , garageId: String(garageId)
    }
  });
}

function getRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Get repair order with roId " + roId;
  var body = undefined;
  bp.log.info("[CALL] getRepairOrder");
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Update repair order with roId " + roId;
  var body = {
    "roId": String(roId),
  };
  bp.log.info("[CALL] updateRepairOrder");
  bp.log.info("[DEBUG] updateRepairOrder body: " + JSON.stringify(body));
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      roId: String(roId)
      , customerId: String(customerId)
      , garageId: String(garageId)
    }
  });
}

function deleteRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repair order with roId " + roId;
  var body = undefined;
  bp.log.info("[CALL] deleteRepairOrder");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
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

function verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status) {
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

function verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId, status) {
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

function tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Verify we cannot delete non-existing RepairOrder";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var expectedDesc = "Create repair order with roId " + roId;
  return bp.EventSet("matchAddedRepairOrder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepairOrderAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ repair\ order\ with\ roId\ (.+)$/)});
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
  return matchesDescriptionRegex(/^Create\ repair\ order\ with\ roId\ (.+)$/);
}

function waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status) {
  var expectedDesc = "Create repair order with roId " + roId;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var expectedDesc = "Delete repair order with roId " + roId;
  return bp.EventSet("matchDeletedRepairOrder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepairOrderDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ repair\ order\ with\ roId\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ repair\ order\ with\ roId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["roId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
