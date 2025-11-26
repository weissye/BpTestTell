//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:5000", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: chain ----

function addChain(chainId) {
  var url = "/chains";
  var description = "Add chain " + chainId;
  var body = {
    "chainId": chainId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Delete chain " + chainId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Get chain " + chainId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Update chain " + chainId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingChain(chainId) {
  return addChain(chainId);
}

function verifyChainExists(chainId) {
  return getChain(chainId);
}

function verifyChainDoesNotExist(chainId) {
  return getChain(chainId);
}

function tryToDeleteANonExistingChain(chainId) {
  return deleteChain(chainId);
}

function matchAddedChain(chainId) {
  return bp.EventSet("matchAddedChain", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(chainId);
  });
}

function waitForAnyChainAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add chain (.+)/)});
  var m = ev.data.parameters.description.match(/Add chain (.+)/);
  var captures = m.slice(1);
  var names = ["chainId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedChain(chainId) {
  return bp.EventSet("matchDeletedChain", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(chainId);
  });
}

function waitForAnyChainDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete chain (.+)/)});
  var m = ev.data.parameters.description.match(/Delete chain (.+)/);
  var captures = m.slice(1);
  var names = ["chainId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: garage ----

function addGarage(garageId) {
  var url = "/garages";
  var description = "Add garage " + garageId;
  var body = {
    "garageId": garageId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Delete garage " + garageId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Get garage " + garageId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Update garage " + garageId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingGarage(garageId) {
  return addGarage(garageId);
}

function verifyGarageExists(garageId) {
  return getGarage(garageId);
}

function verifyGarageDoesNotExist(garageId) {
  return getGarage(garageId);
}

function tryToDeleteANonExistingGarage(garageId) {
  return deleteGarage(garageId);
}

function matchAddedGarage(garageId) {
  return bp.EventSet("matchAddedGarage", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(garageId);
  });
}

function waitForAnyGarageAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add garage (.+)/)});
  var m = ev.data.parameters.description.match(/Add garage (.+)/);
  var captures = m.slice(1);
  var names = ["garageId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedGarage(garageId) {
  return bp.EventSet("matchDeletedGarage", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(garageId);
  });
}

function waitForAnyGarageDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete garage (.+)/)});
  var m = ev.data.parameters.description.match(/Delete garage (.+)/);
  var captures = m.slice(1);
  var names = ["garageId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: customer ----

function addCustomer(customerId) {
  var url = "/customers";
  var description = "Add customer " + customerId;
  var body = {
    "customerId": customerId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Delete customer " + customerId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Get customer " + customerId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Update customer " + customerId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomer(customerId) {
  return addCustomer(customerId);
}

function verifyCustomerExists(customerId) {
  return getCustomer(customerId);
}

function verifyCustomerDoesNotExist(customerId) {
  return getCustomer(customerId);
}

function tryToDeleteANonExistingCustomer(customerId) {
  return deleteCustomer(customerId);
}

function matchAddedCustomer(customerId) {
  return bp.EventSet("matchAddedCustomer", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(customerId);
  });
}

function waitForAnyCustomerAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add customer (.+)/)});
  var m = ev.data.parameters.description.match(/Add customer (.+)/);
  var captures = m.slice(1);
  var names = ["customerId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedCustomer(customerId) {
  return bp.EventSet("matchDeletedCustomer", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(customerId);
  });
}

function waitForAnyCustomerDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete customer (.+)/)});
  var m = ev.data.parameters.description.match(/Delete customer (.+)/);
  var captures = m.slice(1);
  var names = ["customerId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: car ----

function addCar(vin) {
  var url = "/cars";
  var description = "Add car " + vin;
  var body = {
    "vin": vin,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCar(vin) {
  var url = "/cars/" + vin;
  var description = "Delete car " + vin;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCar(vin) {
  var url = "/cars/" + vin;
  var description = "Get car " + vin;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCar(vin) {
  var url = "/cars/" + vin;
  var description = "Update car " + vin;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCar(vin) {
  return addCar(vin);
}

function verifyCarExists(vin) {
  return getCar(vin);
}

function verifyCarDoesNotExist(vin) {
  return getCar(vin);
}

function tryToDeleteANonExistingCar(vin) {
  return deleteCar(vin);
}

function matchAddedCar(vin) {
  return bp.EventSet("matchAddedCar", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(vin);
  });
}

function waitForAnyCarAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add car (.+)/)});
  var m = ev.data.parameters.description.match(/Add car (.+)/);
  var captures = m.slice(1);
  var names = ["vin"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedCar(vin) {
  return bp.EventSet("matchDeletedCar", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(vin);
  });
}

function waitForAnyCarDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete car (.+)/)});
  var m = ev.data.parameters.description.match(/Delete car (.+)/);
  var captures = m.slice(1);
  var names = ["vin"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: periodicmaintenance ----

function addPeriodicMaintenance(pmId) {
  var url = "/periodic-maintenance";
  var description = "Add periodicmaintenance " + pmId;
  var body = {
    "pmId": pmId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePeriodicMaintenance(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete periodicmaintenance " + pmId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPeriodicMaintenance(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Get periodicmaintenance " + pmId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePeriodicMaintenance(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update periodicmaintenance " + pmId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPeriodicMaintenance(pmId) {
  return addPeriodicMaintenance(pmId);
}

function verifyPeriodicMaintenanceExists(pmId) {
  return getPeriodicMaintenance(pmId);
}

function verifyPeriodicMaintenanceDoesNotExist(pmId) {
  return getPeriodicMaintenance(pmId);
}

function tryToDeleteANonExistingPeriodicMaintenance(pmId) {
  return deletePeriodicMaintenance(pmId);
}

function matchAddedPeriodicMaintenance(pmId) {
  return bp.EventSet("matchAddedPeriodicMaintenance", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(pmId);
  });
}

function waitForAnyPeriodicMaintenanceAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add periodicmaintenance (.+)/)});
  var m = ev.data.parameters.description.match(/Add periodicmaintenance (.+)/);
  var captures = m.slice(1);
  var names = ["pmId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedPeriodicMaintenance(pmId) {
  return bp.EventSet("matchDeletedPeriodicMaintenance", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(pmId);
  });
}

function waitForAnyPeriodicMaintenanceDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete periodicmaintenance (.+)/)});
  var m = ev.data.parameters.description.match(/Delete periodicmaintenance (.+)/);
  var captures = m.slice(1);
  var names = ["pmId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repairorder ----

function addRepairOrder(roId) {
  var url = "/repair-orders";
  var description = "Add repairorder " + roId;
  var body = {
    "roId": roId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repairorder " + roId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Get repairorder " + roId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Update repairorder " + roId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepairOrder(roId) {
  return addRepairOrder(roId);
}

function verifyRepairOrderExists(roId) {
  return getRepairOrder(roId);
}

function verifyRepairOrderDoesNotExist(roId) {
  return getRepairOrder(roId);
}

function tryToDeleteANonExistingRepairOrder(roId) {
  return deleteRepairOrder(roId);
}

function matchAddedRepairOrder(roId) {
  return bp.EventSet("matchAddedRepairOrder", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(roId);
  });
}

function waitForAnyRepairOrderAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add repairorder (.+)/)});
  var m = ev.data.parameters.description.match(/Add repairorder (.+)/);
  var captures = m.slice(1);
  var names = ["roId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedRepairOrder(roId) {
  return bp.EventSet("matchDeletedRepairOrder", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(roId);
  });
}

function waitForAnyRepairOrderDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete repairorder (.+)/)});
  var m = ev.data.parameters.description.match(/Delete repairorder (.+)/);
  var captures = m.slice(1);
  var names = ["roId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
