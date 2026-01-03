//@provengo summon rest
// === Auto-generated interfaces for garage ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listChains(chainId) {
  var url = "/chains";
  var description = "List chains " + chainId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createChain(active, chainId, chainUpdate, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "Create chain " + chainId;
  var body = {
    "active": active,
    "chainId": String(chainId),
    "hqAddress": hqAddress,
    "name": String(name),
    "supportEmail": String(supportEmail),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "chainId": chainId, "chainUpdate": chainUpdate, "hqAddress": hqAddress, "name": name, "supportEmail": supportEmail}) });
  return res;
}

function readChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Read chain " + chainId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateChain(active, chainId, chainUpdate, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var description = "Update chain " + chainId;
  var body = {
    "chainUpdate": chainUpdate,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "chainId": chainId, "chainUpdate": chainUpdate, "hqAddress": hqAddress, "name": name, "supportEmail": supportEmail}) });
  return res;
}

function deleteChain(chainId) {
  var url = "/chains/" + chainId;
  var description = "Delete chain " + chainId;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingChains(active, chainId, chainUpdate, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "Try Add Existing Chains " + chainId;
  var body = {
    "active": active,
    "chainId": String(chainId),
    "hqAddress": hqAddress,
    "name": String(name),
    "supportEmail": String(supportEmail),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyChainsRejects(active, chainId, chainUpdate, hqAddress, name, supportEmail) {
  var url = "/chains";
  var description = "Negative Test: Verify Rejection for " + url;
  var body = {
    "active": active,
    "chainId": chainId,
    "chainUpdate": chainUpdate,
    "hqAddress": hqAddress,
    "name": name,
    "supportEmail": supportEmail,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function verifyChainsExists(chainId) {
  var url = "/chains/" + chainId;
  var description = "Verify Chains " + chainId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Chains found");
}


function verifyChainsDeleted(chainId) {
  var url = "/chains/" + chainId;
  var description = "Verify Chains " + chainId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Chains correctly deleted (404)");
}

function verifyChainsDoesNotExist(chainId) { verifyChainsDeleted(chainId); }

function matchAnyChainsAdded() { return bp.EventSet("Any Chains Added", function(e) { return e.name.startsWith("Done: Create chain"); }); }

function listCustomers(customerId) {
  var url = "/customers";
  var description = "List customers " + customerId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCustomer(customerId, email, fullName, name, phone, preferredGarageId, type) {
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
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customerId": customerId, "email": email, "fullName": fullName, "name": name, "phone": phone, "preferredGarageId": preferredGarageId, "type": type}) });
  return res;
}

function readCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Read customer " + customerId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateCustomer(customerId, email, fullName, name, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var description = "Update customer " + customerId;
  var body = {
    "email": String(email),
    "name": String(name),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customerId": customerId, "email": email, "fullName": fullName, "name": name, "phone": phone, "preferredGarageId": preferredGarageId, "type": type}) });
  return res;
}

function deleteCustomer(customerId) {
  var url = "/customers/" + customerId;
  var description = "Delete customer " + customerId;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingCustomers(customerId, email, fullName, name, phone, preferredGarageId, type) {
  var url = "/customers";
  var description = "Try Add Existing Customers " + customerId;
  var body = {
    "customerId": String(customerId),
    "email": String(email),
    "fullName": String(fullName),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
    "type": String(type),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyCustomersRejects(customerId, email, fullName, name, phone, preferredGarageId, type) {
  var url = "/customers";
  var description = "Negative Test: Verify Rejection for " + url;
  var body = {
    "customerId": customerId,
    "email": email,
    "fullName": fullName,
    "name": name,
    "phone": phone,
    "preferredGarageId": preferredGarageId,
    "type": type,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function verifyCustomersExists(customerId) {
  var url = "/customers/" + customerId;
  var description = "Verify Customers " + customerId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Customers found");
}


function verifyCustomersDeleted(customerId) {
  var url = "/customers/" + customerId;
  var description = "Verify Customers " + customerId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Customers correctly deleted (404)");
}

function verifyCustomersDoesNotExist(customerId) { verifyCustomersDeleted(customerId); }

function matchAnyCustomersAdded() { return bp.EventSet("Any Customers Added", function(e) { return e.name.startsWith("Done: Create customer"); }); }

function listGarages(garageId) {
  var url = "/garages";
  var description = "List garages " + garageId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createGarage(active, address, bayCount, chainId, garageId, garageUpdate, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "Create garage " + garageId;
  var body = {
    "active": active,
    "address": address,
    "bayCount": bayCount,
    "chainId": String(chainId),
    "garageId": String(garageId),
    "name": String(name),
    "phone": String(phone),
    "servicesOffered": servicesOffered,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "address": address, "bayCount": bayCount, "chainId": chainId, "garageId": garageId, "garageUpdate": garageUpdate, "name": name, "phone": phone, "servicesOffered": servicesOffered}) });
  return res;
}

function readGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Read garage " + garageId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateGarage(active, address, bayCount, chainId, garageId, garageUpdate, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var description = "Update garage " + garageId;
  var body = {
    "garageUpdate": garageUpdate,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "address": address, "bayCount": bayCount, "chainId": chainId, "garageId": garageId, "garageUpdate": garageUpdate, "name": name, "phone": phone, "servicesOffered": servicesOffered}) });
  return res;
}

function deleteGarage(garageId) {
  var url = "/garages/" + garageId;
  var description = "Delete garage " + garageId;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingGarages(active, address, bayCount, chainId, garageId, garageUpdate, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "Try Add Existing Garages " + garageId;
  var body = {
    "active": active,
    "address": address,
    "bayCount": bayCount,
    "chainId": String(chainId),
    "garageId": String(garageId),
    "name": String(name),
    "phone": String(phone),
    "servicesOffered": servicesOffered,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyGaragesRejects(active, address, bayCount, chainId, garageId, garageUpdate, name, phone, servicesOffered) {
  var url = "/garages";
  var description = "Negative Test: Verify Rejection for " + url;
  var body = {
    "active": active,
    "address": address,
    "bayCount": bayCount,
    "chainId": chainId,
    "garageId": garageId,
    "garageUpdate": garageUpdate,
    "name": name,
    "phone": phone,
    "servicesOffered": servicesOffered,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function verifyGaragesExists(garageId) {
  var url = "/garages/" + garageId;
  var description = "Verify Garages " + garageId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Garages found");
}


function verifyGaragesDeleted(garageId) {
  var url = "/garages/" + garageId;
  var description = "Verify Garages " + garageId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Garages correctly deleted (404)");
}

function verifyGaragesDoesNotExist(garageId) { verifyGaragesDeleted(garageId); }

function matchAnyGaragesAdded() { return bp.EventSet("Any Garages Added", function(e) { return e.name.startsWith("Done: Create garage"); }); }

function listCars(vin) {
  var url = "/cars";
  var description = "List cars " + vin;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Create car " + vin;
  var body = {
    "homeGarageId": String(homeGarageId),
    "make": String(make),
    "mileage": mileage,
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": year,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"homeGarageId": homeGarageId, "make": make, "mileage": mileage, "model": model, "ownerCustomerId": ownerCustomerId, "vin": vin, "year": year}) });
  return res;
}

function readCar(vin) {
  var url = "/cars/" + vin;
  var description = "Read car " + vin;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateCar(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Update car " + vin;
  var body = {
    "make": String(make),
    "model": String(model),
    "year": year,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"homeGarageId": homeGarageId, "make": make, "mileage": mileage, "model": model, "ownerCustomerId": ownerCustomerId, "vin": vin, "year": year}) });
  return res;
}

function deleteCar(vin) {
  var url = "/cars/" + vin;
  var description = "Delete car " + vin;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingCars(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Try Add Existing Cars " + vin;
  var body = {
    "homeGarageId": String(homeGarageId),
    "make": String(make),
    "mileage": mileage,
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": year,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyCarsRejects(homeGarageId, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Negative Test: Verify Rejection for " + url;
  var body = {
    "homeGarageId": homeGarageId,
    "make": make,
    "mileage": mileage,
    "model": model,
    "ownerCustomerId": ownerCustomerId,
    "vin": vin,
    "year": year,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function verifyCarsExists(vin) {
  var url = "/cars/" + vin;
  var description = "Verify Cars " + vin + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Cars found");
}


function verifyCarsDeleted(vin) {
  var url = "/cars/" + vin;
  var description = "Verify Cars " + vin + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Cars correctly deleted (404)");
}

function verifyCarsDoesNotExist(vin) { verifyCarsDeleted(vin); }

function matchAnyCarsAdded() { return bp.EventSet("Any Cars Added", function(e) { return e.name.startsWith("Done: Create car"); }); }

function listPMPlans(pmId) {
  var url = "/periodic-maintenance";
  var description = "List PM plans " + pmId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createPMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  var url = "/periodic-maintenance";
  var description = "Create PM plan " + pmId;
  var body = {
    "carVin": String(carVin),
    "garageId": String(garageId),
    "intervalKm": intervalKm,
    "intervalMonths": intervalMonths,
    "planType": String(planType),
    "pmId": String(pmId),
    "status": String(status),
    "tasks": tasks,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "garageId": garageId, "intervalKm": intervalKm, "intervalMonths": intervalMonths, "planType": planType, "pmId": pmId, "schedule": schedule, "status": status, "tasks": tasks}) });
  return res;
}

function readPMPlan(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Read PM plan " + pmId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updatePMPlan(carVin, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update PM plan " + pmId;
  var body = {
    "schedule": String(schedule),
    "tasks": tasks,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "garageId": garageId, "intervalKm": intervalKm, "intervalMonths": intervalMonths, "planType": planType, "pmId": pmId, "schedule": schedule, "status": status, "tasks": tasks}) });
  return res;
}

function deletePMPlan(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete PM plan " + pmId;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingPeriodicMaintenance(carVin, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  var url = "/periodic-maintenance";
  var description = "Try Add Existing PeriodicMaintenance " + pmId;
  var body = {
    "carVin": String(carVin),
    "garageId": String(garageId),
    "intervalKm": intervalKm,
    "intervalMonths": intervalMonths,
    "planType": String(planType),
    "pmId": String(pmId),
    "status": String(status),
    "tasks": tasks,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyPeriodicMaintenanceRejects(carVin, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  var url = "/periodic-maintenance";
  var description = "Negative Test: Verify Rejection for " + url;
  var body = {
    "carVin": carVin,
    "garageId": garageId,
    "intervalKm": intervalKm,
    "intervalMonths": intervalMonths,
    "planType": planType,
    "pmId": pmId,
    "schedule": schedule,
    "status": status,
    "tasks": tasks,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function verifyPeriodicMaintenanceExists(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify PeriodicMaintenance " + pmId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PeriodicMaintenance found");
}


function verifyPeriodicMaintenanceDeleted(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify PeriodicMaintenance " + pmId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PeriodicMaintenance correctly deleted (404)");
}

function verifyPeriodicMaintenanceDoesNotExist(pmId) { verifyPeriodicMaintenanceDeleted(pmId); }

function matchAnyPeriodicMaintenanceAdded() { return bp.EventSet("Any PeriodicMaintenance Added", function(e) { return e.name.startsWith("Done: Create PM plan"); }); }

function listRepairOrders(roId) {
  var url = "/repair-orders";
  var description = "List repair orders " + roId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createRepairOrder(ROUpdate, carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "Create repair order " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "roId": String(roId),
    "status": String(status),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"ROUpdate": ROUpdate, "carVin": carVin, "complaint": complaint, "customerId": customerId, "garageId": garageId, "roId": roId, "status": status}) });
  return res;
}

function getRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Read repair order " + roId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateRepairOrder(ROUpdate, carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Update repair order " + roId;
  var body = {
    "ROUpdate": ROUpdate,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"ROUpdate": ROUpdate, "carVin": carVin, "complaint": complaint, "customerId": customerId, "garageId": garageId, "roId": roId, "status": status}) });
  return res;
}

function deleteRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repair order " + roId;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function approveRepairOrder(ROUpdate, carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId + "/approve";
  var description = "Approve RO (move to in-progress if allowed) " + roId;
  var body = {};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"ROUpdate": ROUpdate, "carVin": carVin, "complaint": complaint, "customerId": customerId, "garageId": garageId, "roId": roId, "status": status}) });
  return res;
}

function closeRepairOrder(ROUpdate, carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders/" + roId + "/close";
  var description = "Close RO (sets status=closed) " + roId;
  var body = {};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"ROUpdate": ROUpdate, "carVin": carVin, "complaint": complaint, "customerId": customerId, "garageId": garageId, "roId": roId, "status": status}) });
  return res;
}

function tryToAddExistingRepairOrders(ROUpdate, carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "Try Add Existing RepairOrders " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customerId": String(customerId),
    "garageId": String(garageId),
    "roId": String(roId),
    "status": String(status),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyRepairOrdersRejects(ROUpdate, carVin, complaint, customerId, garageId, roId, status) {
  var url = "/repair-orders";
  var description = "Negative Test: Verify Rejection for " + url;
  var body = {
    "ROUpdate": ROUpdate,
    "carVin": carVin,
    "complaint": complaint,
    "customerId": customerId,
    "garageId": garageId,
    "roId": roId,
    "status": status,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function verifyRepairOrdersExists(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Verify RepairOrders " + roId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepairOrders found");
}


function verifyRepairOrdersDeleted(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Verify RepairOrders " + roId + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepairOrders correctly deleted (404)");
}

function verifyRepairOrdersDoesNotExist(roId) { verifyRepairOrdersDeleted(roId); }

function matchAnyRepairOrdersAdded() { return bp.EventSet("Any RepairOrders Added", function(e) { return e.name.startsWith("Done: Create repair order"); }); }
