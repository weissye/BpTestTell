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

function createChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "Create chain " + chainId;
  var body = {
    "active": String(active),
    "chainId": String(chainId),
    "hqAddress": hqAddress,
    "name": String(name),
    "supportEmail": String(supportEmail),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      chainId: String(chainId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { chainId: String(chainId) }) });
}

function getChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Get chain " + chainId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function updateChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Update chain " + chainId;
  var body = {
    "active": String(active),
    "chainId": String(chainId),
    "hqAddress": hqAddress,
    "name": String(name),
    "supportEmail": String(supportEmail),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      chainId: String(chainId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { chainId: String(chainId) }) });
}

function deleteChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Delete chain " + chainId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 404]
  });
}

function tryToAddExistingChain(active, chainId, hqAddress, name, supportEmail) {
  deleteChain(active, chainId, hqAddress, name, supportEmail);
}

function verifyChainExists(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "Verify Chain with chainId " + chainId + " exists";
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
  var description = "Verify Chain with chainId " + chainId + " does not exist";
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
    expectedResponseCodes: [204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedChain(active, chainId, hqAddress, name, supportEmail) {
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

function waitForChainAdded(active, chainId, hqAddress, name, supportEmail) {
  var expectedDesc = "Create chain " + chainId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedChain(active, chainId, hqAddress, name, supportEmail) {
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

function createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "Create garage " + garageId;
  var body = {
    "active": String(active),
    "address": address,
    "bayCount": String(bayCount),
    "chainId": String(chainId),
    "garageId": String(garageId),
    "name": String(name),
    "phone": String(phone),
    "servicesOffered": String(servicesOffered),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      garageId: String(garageId)
      , chainId: String(chainId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { garageId: String(garageId) }) });
}

function getGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Get garage " + garageId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Update garage " + garageId;
  var body = {
    "active": String(active),
    "address": address,
    "bayCount": String(bayCount),
    "chainId": String(chainId),
    "garageId": String(garageId),
    "name": String(name),
    "phone": String(phone),
    "servicesOffered": String(servicesOffered),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      garageId: String(garageId)
      , chainId: String(chainId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { garageId: String(garageId) }) });
}

function deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Delete garage " + garageId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 404]
  });
}

function tryToAddExistingGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered);
}

function verifyGarageExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "Verify Garage with garageId " + garageId + " exists";
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
  var description = "Verify Garage with garageId " + garageId + " does not exist";
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
    expectedResponseCodes: [204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
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

function waitForGarageAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var expectedDesc = "Create garage " + garageId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
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

function createCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers";
  var description = "Create customer " + customerId;
  var body = {
    "customerId": String(customerId),
    "email": String(email),
    "fullName": String(fullName),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      customerId: String(customerId)
      , preferredGarageId: String(preferredGarageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { customerId: String(customerId) }) });
}

function getCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Get customer " + customerId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function updateCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Update customer " + customerId;
  var body = {
    "customerId": String(customerId),
    "email": String(email),
    "fullName": String(fullName),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
    "type": String(type),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      customerId: String(customerId)
      , preferredGarageId: String(preferredGarageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { customerId: String(customerId) }) });
}

function deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Delete customer " + customerId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 404]
  });
}

function tryToAddExistingCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type);
}

function verifyCustomerExists(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers";
  var description = "Verify Customer with customerId " + customerId + " exists";
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
  var description = "Verify Customer with customerId " + customerId + " does not exist";
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
    expectedResponseCodes: [204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
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

function waitForCustomerAdded(customerId, email, fullName, phone, preferredGarageId, type) {
  var expectedDesc = "Create customer " + customerId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
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

function createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Create car " + vin;
  var body = {
    "homeGarageId": String(homeGarageId),
    "make": String(make),
    "mileage": String(mileage),
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": String(year),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      vin: String(vin)
      , homeGarageId: String(homeGarageId)
      , ownerCustomerId: String(ownerCustomerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { vin: String(vin) }) });
}

function getCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Get car " + vin;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Update car " + vin;
  var body = {
    "homeGarageId": String(homeGarageId),
    "make": String(make),
    "mileage": String(mileage),
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": String(year),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      vin: String(vin)
      , homeGarageId: String(homeGarageId)
      , ownerCustomerId: String(ownerCustomerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { vin: String(vin) }) });
}

function deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Delete car " + vin;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 404]
  });
}

function tryToAddExistingCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year);
}

function verifyCarExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Verify Car with vin " + vin + " exists";
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
  var description = "Verify Car with vin " + vin + " does not exist";
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
    expectedResponseCodes: [204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
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

function waitForCarAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var expectedDesc = "Create car " + vin;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
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

function createPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance";
  var description = "Create periodic maintenance plan " + pmId;
  var body = {
    "carVin": String(carVin),
    "garageId": String(garageId),
    "intervalKm": String(intervalKm),
    "intervalMonths": String(intervalMonths),
    "planType": String(planType),
    "pmId": String(pmId),
    "status": String(status),
    "tasks": String(tasks),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      pmId: String(pmId)
      , garageId: String(garageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { pmId: String(pmId) }) });
}

function getPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Get periodic maintenance plan " + pmId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function updatePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update periodic maintenance plan " + pmId;
  var body = {
    "carVin": String(carVin),
    "garageId": String(garageId),
    "intervalKm": String(intervalKm),
    "intervalMonths": String(intervalMonths),
    "planType": String(planType),
    "pmId": String(pmId),
    "status": String(status),
    "tasks": String(tasks),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      pmId: String(pmId)
      , garageId: String(garageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { pmId: String(pmId) }) });
}

function deletePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete periodic maintenance plan " + pmId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  deletePeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks);
}

function verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var url = "/periodic-maintenance";
  var description = "Verify PeriodicMaintenance with pmId " + pmId + " exists";
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
  var description = "Verify PeriodicMaintenance with pmId " + pmId + " does not exist";
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
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
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

function waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
  var expectedDesc = "Create periodic maintenance plan " + pmId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, tasks) {
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

function createRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "Create repair order with roId " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "roId": String(roId),
    "status": String(status),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      roId: String(roId)
      , customerId: String(customerId)
      , garageId: String(garageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { roId: String(roId) }) });
}

function getRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Get repair order with roId " + roId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function updateRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Update repair order with roId " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "roId": String(roId),
    "status": String(status),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      roId: String(roId)
      , customerId: String(customerId)
      , garageId: String(garageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { roId: String(roId) }) });
}

function deleteRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repair order with roId " + roId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function approveRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId + "/approve";
  var description = "Approve repair order with roId " + roId;
  var body = {
    "roId": String(roId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      roId: String(roId)
      , customerId: String(customerId)
      , garageId: String(garageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { roId: String(roId) }) });
}

function closeRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId + "/close";
  var description = "Close repair order with roId " + roId;
  var body = {
    "roId": String(roId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      roId: String(roId)
      , customerId: String(customerId)
      , garageId: String(garageId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { roId: String(roId) }) });
}

function tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  closeRepairOrder(carVin, complaint, customerId, garageId, roId, status);
}

function verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "Verify RepairOrder with roId " + roId + " exists";
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
  var description = "Verify RepairOrder with roId " + roId + " does not exist";
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
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var expectedDesc = "Create repair order with roId " + roId;
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.roId !== undefined && e.name.indexOf("Create repair order") > -1;
  });
}

function waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status) {
  var expectedDesc = "Create repair order with roId " + roId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
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
