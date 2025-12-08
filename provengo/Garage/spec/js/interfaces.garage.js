//@provengo summon rest
// === Auto-generated interfaces for garage ===
var host = (typeof host !== 'undefined') ? host : '192.168.225.36';
var port = (typeof port !== 'undefined') ? port : 5000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "List cars";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Create car";
  var body = {
    "vin": String(vin),
    "make": String(make),
    "model": String(model),
    "year": Number(year),
    "mileage": Number(mileage),
    "ownerCustomerId": String(ownerCustomerId),
    "homeGarageId": String(homeGarageId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"homeGarageId": homeGarageId, "make": make, "mileage": mileage, "model": model, "ownerCustomerId": ownerCustomerId, "vin": vin, "year": year}) });
}

function readCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Read car";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Update car";
  var body = {
    "make": String(make),
    "model": String(model),
    "year": Number(year),
    "mileage": Number(mileage),
    "ownerCustomerId": String(ownerCustomerId),
    "homeGarageId": String(homeGarageId),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"homeGarageId": homeGarageId, "make": make, "mileage": mileage, "model": model, "ownerCustomerId": ownerCustomerId, "vin": vin, "year": year}) });
}

function deleteCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Delete car";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Try Add Existing Cars";
  var body = {
    "vin": String(vin),
    "make": String(make),
    "model": String(model),
    "year": Number(year),
    "mileage": Number(mileage),
    "ownerCustomerId": String(ownerCustomerId),
    "homeGarageId": String(homeGarageId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCarsExists(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Verify Cars " + vin + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Cars found");
}

function verifyCarsDoesNotExist(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Verify Cars " + vin + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Cars not found");
}

function tryToDeleteANonExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Verify negative delete for Cars";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  return bp.EventSet("Delete Cars", function(e) {
      return e.name === "Done: " + "Delete car";
  });
}

function waitForCarsAdded(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  waitFor(matchSuccess("Create car"));
}

function matchAnyCarsAdded() {
  return bp.EventSet("Any Cars Added", function(e) {
      return e.name.startsWith("Done: Create car");
  });
}

function listChains(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "List chains";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "Create chain";
  var body = {
    "chainId": String(chainId),
    "name": String(name),
    "hqAddress": String(hqAddress),
    "active": active,
    "supportEmail": String(supportEmail),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "chainId": chainId, "hqAddress": hqAddress, "name": name, "supportEmail": supportEmail}) });
}

function readChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Read chain";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Update chain";
  var body = {
    "name": String(name),
    "hqAddress": String(hqAddress),
    "active": active,
    "supportEmail": String(supportEmail),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "chainId": chainId, "hqAddress": hqAddress, "name": name, "supportEmail": supportEmail}) });
}

function deleteChain(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Delete chain";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingChains(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "Try Add Existing Chains";
  var body = {
    "chainId": String(chainId),
    "name": String(name),
    "hqAddress": String(hqAddress),
    "active": active,
    "supportEmail": String(supportEmail),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyChainsExists(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Verify Chains " + chainId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Chains found");
}

function verifyChainsDoesNotExist(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Verify Chains " + chainId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Chains not found");
}

function tryToDeleteANonExistingChains(active, chainId, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Verify negative delete for Chains";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedChains(active, chainId, hqAddress, name, supportEmail) {
  return bp.EventSet("Delete Chains", function(e) {
      return e.name === "Done: " + "Delete chain";
  });
}

function waitForChainsAdded(active, chainId, hqAddress, name, supportEmail) {
  waitFor(matchSuccess("Create chain"));
}

function matchAnyChainsAdded() {
  return bp.EventSet("Any Chains Added", function(e) {
      return e.name.startsWith("Done: Create chain");
  });
}

function listCustomers(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers";
  var description = "List customers";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers";
  var description = "Create customer";
  var body = {
    "customerId": String(customerId),
    "type": String(type),
    "fullName": String(fullName),
    "email": String(email),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customerId": customerId, "email": email, "fullName": fullName, "phone": phone, "preferredGarageId": preferredGarageId, "type": type}) });
}

function readCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Read customer";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Update customer";
  var body = {
    "type": String(type),
    "fullName": String(fullName),
    "email": String(email),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customerId": customerId, "email": email, "fullName": fullName, "phone": phone, "preferredGarageId": preferredGarageId, "type": type}) });
}

function deleteCustomer(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Delete customer";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingCustomers(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers";
  var description = "Try Add Existing Customers";
  var body = {
    "customerId": String(customerId),
    "type": String(type),
    "fullName": String(fullName),
    "email": String(email),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCustomersExists(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Verify Customers " + customerId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Customers found");
}

function verifyCustomersDoesNotExist(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Verify Customers " + customerId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Customers not found");
}

function tryToDeleteANonExistingCustomers(customerId, email, fullName, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Verify negative delete for Customers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCustomers(customerId, email, fullName, phone, preferredGarageId, type) {
  return bp.EventSet("Delete Customers", function(e) {
      return e.name === "Done: " + "Delete customer";
  });
}

function waitForCustomersAdded(customerId, email, fullName, phone, preferredGarageId, type) {
  waitFor(matchSuccess("Create customer"));
}

function matchAnyCustomersAdded() {
  return bp.EventSet("Any Customers Added", function(e) {
      return e.name.startsWith("Done: Create customer");
  });
}

function listGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "List garages";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "Create garage";
  var body = {
    "garageId": String(garageId),
    "chainId": String(chainId),
    "name": String(name),
    "address": String(address),
    "phone": String(phone),
    "active": active,
    "bayCount": Number(bayCount),
    "servicesOffered": String(servicesOffered),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "address": address, "bayCount": bayCount, "chainId": chainId, "garageId": garageId, "name": name, "phone": phone, "servicesOffered": servicesOffered}) });
}

function readGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Read garage";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Update garage";
  var body = {
    "chainId": String(chainId),
    "name": String(name),
    "address": String(address),
    "phone": String(phone),
    "active": active,
    "bayCount": Number(bayCount),
    "servicesOffered": String(servicesOffered),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "address": address, "bayCount": bayCount, "chainId": chainId, "garageId": garageId, "name": name, "phone": phone, "servicesOffered": servicesOffered}) });
}

function deleteGarage(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Delete garage";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "Try Add Existing Garages";
  var body = {
    "garageId": String(garageId),
    "chainId": String(chainId),
    "name": String(name),
    "address": String(address),
    "phone": String(phone),
    "active": active,
    "bayCount": Number(bayCount),
    "servicesOffered": String(servicesOffered),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyGaragesExists(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Verify Garages " + garageId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Garages found");
}

function verifyGaragesDoesNotExist(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Verify Garages " + garageId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Garages not found");
}

function tryToDeleteANonExistingGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Verify negative delete for Garages";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedGarages(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  return bp.EventSet("Delete Garages", function(e) {
      return e.name === "Done: " + "Delete garage";
  });
}

function waitForGaragesAdded(active, address, bayCount, chainId, garageId, name, phone, servicesOffered) {
  waitFor(matchSuccess("Create garage"));
}

function matchAnyGaragesAdded() {
  return bp.EventSet("Any Garages Added", function(e) {
      return e.name.startsWith("Done: Create garage");
  });
}

function listPMPlans(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance";
  var description = "List PM plans";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createPMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance";
  var description = "Create PM plan";
  var body = {
    "pmId": String(pmId),
    "carVin": String(carVin),
    "garageId": String(garageId),
    "planType": String(planType),
    "tasks": [String(task)],
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "garageId": garageId, "intervalKm": intervalKm, "intervalMonths": intervalMonths, "planType": planType, "pmId": pmId, "status": status, "task": task}) });
}

function readPMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Read PM plan";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updatePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update PM plan";
  var body = {
    "carVin": String(carVin),
    "garageId": String(garageId),
    "intervalKm": Number(intervalKm),
    "intervalMonths": Number(intervalMonths),
    "planType": String(planType),
    "status": String(status),
    "tasks": [String(task)],
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "garageId": garageId, "intervalKm": intervalKm, "intervalMonths": intervalMonths, "planType": planType, "pmId": pmId, "status": status, "task": task}) });
}

function deletePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete PM plan";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance";
  var description = "Try Add Existing PeriodicMaintenance";
  var body = {
    "pmId": String(pmId),
    "carVin": String(carVin),
    "garageId": String(garageId),
    "planType": String(planType),
    "tasks": [String(task)],
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPeriodicMaintenanceExists(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify PeriodicMaintenance " + pmId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PeriodicMaintenance found");
}

function verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify PeriodicMaintenance " + pmId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PeriodicMaintenance not found");
}

function tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify negative delete for PeriodicMaintenance";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  return bp.EventSet("Delete PeriodicMaintenance", function(e) {
      return e.name === "Done: " + "Delete PM plan";
  });
}

function waitForPeriodicMaintenanceAdded(carVin, garageId, intervalKm, intervalMonths, planType, pmId, status, task) {
  waitFor(matchSuccess("Create PM plan"));
}

function matchAnyPeriodicMaintenanceAdded() {
  return bp.EventSet("Any PeriodicMaintenance Added", function(e) {
      return e.name.startsWith("Done: Create PM plan");
  });
}

function listRepairOrders(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "List repair orders";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "Create repair order";
  var body = {
    "roId": String(roId),
    "carVin": String(carVin),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "complaint": String(complaint),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "complaint": complaint, "customerId": customerId, "garageId": garageId, "roId": roId, "status": status}) });
}

function readRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Read repair order";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Update repair order";
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "status": String(status),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "complaint": complaint, "customerId": customerId, "garageId": garageId, "roId": roId, "status": status}) });
}

function deleteRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repair order";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function approveRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId + "/approve";
  var description = "Approve RO (move to in-progress if allowed)";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "complaint": complaint, "customerId": customerId, "garageId": garageId, "roId": roId, "status": status}) });
}

function closeRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId + "/close";
  var description = "Close RO (sets status=closed)";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "complaint": complaint, "customerId": customerId, "garageId": garageId, "roId": roId, "status": status}) });
}

function tryToAddExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "Try Add Existing RepairOrder";
  var body = {
    "roId": String(roId),
    "carVin": String(carVin),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "complaint": String(complaint),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepairOrderExists(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Verify RepairOrder " + roId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepairOrder found");
}

function verifyRepairOrderDoesNotExist(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Verify RepairOrder " + roId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepairOrder not found");
}

function tryToDeleteANonExistingRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Verify negative delete for RepairOrder";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepairOrder(carVin, complaint, customerId, garageId, roId, status) {
  return bp.EventSet("Delete RepairOrder", function(e) {
      return e.name === "Done: " + "Delete repair order";
  });
}

function waitForRepairOrderAdded(carVin, complaint, customerId, garageId, roId, status) {
  waitFor(matchSuccess("Create repair order"));
}

function matchAnyRepairOrderAdded() {
  return bp.EventSet("Any RepairOrder Added", function(e) {
      return e.name.startsWith("Done: Create repair order");
  });
}
