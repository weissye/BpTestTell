//@provengo summon rest
// === Auto-generated interfaces for garage ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listChains(chainId, description, hqAddress, id, name) {
  var url = "/chains";
  var description = "List chains " + chainId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createChain(chainId, description, hqAddress, id, name) {
  var url = "/chains";
  var description = "Create chain " + chainId;
  var body = {
    "chainId": String(chainId),
    "description": String(description),
    "hqAddress": String(hqAddress),
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"chainId": chainId, "description": description, "hqAddress": hqAddress, "id": id, "name": name}) });
}

function readChain(chainId, description, hqAddress, id, name) {
  var url = "/chains/" + chainId;
  var description = "Read chain " + chainId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateChain(chainId, description, hqAddress, id, name) {
  var url = "/chains/" + chainId;
  var description = "Update chain " + chainId;
  var body = {
    "chainId": String(chainId),
    "description": String(description),
    "hqAddress": String(hqAddress),
    "id": String(id),
    "name": String(name),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"chainId": chainId, "description": description, "hqAddress": hqAddress, "id": id, "name": name}) });
}

function deleteChain(chainId, description, hqAddress, id, name) {
  var url = "/chains/" + chainId;
  var description = "Delete chain " + chainId;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingChains(chainId, description, hqAddress, id, name) {
  var url = "/chains";
  var description = "Try Add Existing Chains " + chainId;
  var body = {
    "chainId": String(chainId),
    "description": String(description),
    "hqAddress": String(hqAddress),
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyChainsExists(chainId, description, hqAddress, id, name) {
  var url = "/chains/" + chainId;
  var description = "Verify Chains " + chainId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Chains found");
}

function verifyChainsDoesNotExist(chainId, description, hqAddress, id, name) {
  var url = "/chains/" + chainId;
  var description = "Verify Chains " + chainId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Chains not found");
}

function tryToDeleteANonExistingChains(chainId, description, hqAddress, id, name) {
  var url = "/chains/" + chainId;
  var description = "Verify negative delete for Chains";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedChains(chainId, description, hqAddress, id, name) {
  return bp.EventSet("Delete Chains", function(e) {
      return e.name === "Done: " + "Delete chain";
  });
}

function waitForChainsAdded(chainId, description, hqAddress, id, name) {
  waitFor(matchSuccess("Create chain"));
}

function matchAnyChainsAdded() {
  return bp.EventSet("Any Chains Added", function(e) {
      return e.name.startsWith("Done: Create chain");
  });
}

function listCustomers(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers";
  var description = "List customers " + customerId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCustomer(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers";
  var description = "Create customer " + customerId;
  var body = {
    "customerId": String(customerId),
    "email": String(email),
    "fullName": String(fullName),
    "id": String(id),
    "name": String(name),
    "phone": String(phone),
    "type": String(type),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customerId": customerId, "email": email, "fullName": fullName, "id": id, "name": name, "phone": phone, "type": type}) });
}

function readCustomer(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Read customer " + customerId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateCustomer(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Update customer " + customerId;
  var body = {
    "customerId": String(customerId),
    "email": String(email),
    "fullName": String(fullName),
    "id": String(id),
    "name": String(name),
    "phone": String(phone),
    "type": String(type),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customerId": customerId, "email": email, "fullName": fullName, "id": id, "name": name, "phone": phone, "type": type}) });
}

function deleteCustomer(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Delete customer " + customerId;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingCustomers(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers";
  var description = "Try Add Existing Customers " + customerId;
  var body = {
    "customerId": String(customerId),
    "email": String(email),
    "fullName": String(fullName),
    "id": String(id),
    "name": String(name),
    "phone": String(phone),
    "type": String(type),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCustomersExists(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Verify Customers " + customerId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Customers found");
}

function verifyCustomersDoesNotExist(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Verify Customers " + customerId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Customers not found");
}

function tryToDeleteANonExistingCustomers(customerId, email, fullName, id, name, phone, type) {
  var url = "/customers/" + customerId;
  var description = "Verify negative delete for Customers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCustomers(customerId, email, fullName, id, name, phone, type) {
  return bp.EventSet("Delete Customers", function(e) {
      return e.name === "Done: " + "Delete customer";
  });
}

function waitForCustomersAdded(customerId, email, fullName, id, name, phone, type) {
  waitFor(matchSuccess("Create customer"));
}

function matchAnyCustomersAdded() {
  return bp.EventSet("Any Customers Added", function(e) {
      return e.name.startsWith("Done: Create customer");
  });
}

function listGarages(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages";
  var description = "List garages " + garageId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createGarage(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages";
  var description = "Create garage " + garageId;
  var body = {
    "address": String(address),
    "capacity": Number(capacity),
    "chainId": String(chainId),
    "garageId": String(garageId),
    "id": String(id),
    "location": String(location),
    "name": String(name),
    "phone": String(phone),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"address": address, "capacity": capacity, "chainId": chainId, "garageId": garageId, "id": id, "location": location, "name": name, "phone": phone}) });
}

function readGarage(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages/" + garageId;
  var description = "Read garage " + garageId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateGarage(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages/" + garageId;
  var description = "Update garage " + garageId;
  var body = {
    "address": String(address),
    "capacity": Number(capacity),
    "chainId": String(chainId),
    "garageId": String(garageId),
    "id": String(id),
    "location": String(location),
    "name": String(name),
    "phone": String(phone),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"address": address, "capacity": capacity, "chainId": chainId, "garageId": garageId, "id": id, "location": location, "name": name, "phone": phone}) });
}

function deleteGarage(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages/" + garageId;
  var description = "Delete garage " + garageId;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingGarages(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages";
  var description = "Try Add Existing Garages " + garageId;
  var body = {
    "address": String(address),
    "capacity": Number(capacity),
    "chainId": String(chainId),
    "garageId": String(garageId),
    "id": String(id),
    "location": String(location),
    "name": String(name),
    "phone": String(phone),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyGaragesExists(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages/" + garageId;
  var description = "Verify Garages " + garageId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Garages found");
}

function verifyGaragesDoesNotExist(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages/" + garageId;
  var description = "Verify Garages " + garageId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Garages not found");
}

function tryToDeleteANonExistingGarages(address, capacity, chainId, garageId, id, location, name, phone) {
  var url = "/garages/" + garageId;
  var description = "Verify negative delete for Garages";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedGarages(address, capacity, chainId, garageId, id, location, name, phone) {
  return bp.EventSet("Delete Garages", function(e) {
      return e.name === "Done: " + "Delete garage";
  });
}

function waitForGaragesAdded(address, capacity, chainId, garageId, id, location, name, phone) {
  waitFor(matchSuccess("Create garage"));
}

function matchAnyGaragesAdded() {
  return bp.EventSet("Any Garages Added", function(e) {
      return e.name.startsWith("Done: Create garage");
  });
}

function listCars(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "List cars " + vin;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCar(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Create car " + vin;
  var body = {
    "id": String(id),
    "make": String(make),
    "mileage": Number(mileage),
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": Number(year),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "make": make, "mileage": mileage, "model": model, "ownerCustomerId": ownerCustomerId, "vin": vin, "year": year}) });
}

function readCar(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Read car " + vin;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateCar(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Update car " + vin;
  var body = {
    "id": String(id),
    "make": String(make),
    "mileage": String(mileage),
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": Number(year),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "make": make, "mileage": mileage, "model": model, "ownerCustomerId": ownerCustomerId, "vin": vin, "year": year}) });
}

function deleteCar(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Delete car " + vin;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingCars(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var description = "Try Add Existing Cars " + vin;
  var body = {
    "id": String(id),
    "make": String(make),
    "mileage": Number(mileage),
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": Number(year),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCarsExists(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Verify Cars " + vin + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Cars found");
}

function verifyCarsDoesNotExist(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Verify Cars " + vin + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Cars not found");
}

function tryToDeleteANonExistingCars(id, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var description = "Verify negative delete for Cars";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCars(id, make, mileage, model, ownerCustomerId, vin, year) {
  return bp.EventSet("Delete Cars", function(e) {
      return e.name === "Done: " + "Delete car";
  });
}

function waitForCarsAdded(id, make, mileage, model, ownerCustomerId, vin, year) {
  waitFor(matchSuccess("Create car"));
}

function matchAnyCarsAdded() {
  return bp.EventSet("Any Cars Added", function(e) {
      return e.name.startsWith("Done: Create car");
  });
}

function listPMPlans(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance";
  var description = "List PM plans " + pmId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createPMPlan(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance";
  var description = "Create PM plan " + pmId;
  var body = {
    "carVin": String(carVin),
    "garageId": String(garageId),
    "id": String(id),
    "planType": String(planType),
    "pmId": String(pmId),
    "schedule": String(schedule),
    "tasks": [String(tasks)],
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "garageId": garageId, "id": id, "planType": planType, "pmId": pmId, "schedule": schedule, "tasks": tasks}) });
}

function readPMPlan(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Read PM plan " + pmId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updatePMPlan(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update PM plan " + pmId;
  var body = {
    "carVin": String(carVin),
    "garageId": String(garageId),
    "id": String(id),
    "planType": String(planType),
    "pmId": String(pmId),
    "schedule": String(schedule),
    "tasks": [String(tasks)],
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "garageId": garageId, "id": id, "planType": planType, "pmId": pmId, "schedule": schedule, "tasks": tasks}) });
}

function deletePMPlan(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete PM plan " + pmId;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingPeriodicMaintenance(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance";
  var description = "Try Add Existing PeriodicMaintenance " + pmId;
  var body = {
    "carVin": String(carVin),
    "garageId": String(garageId),
    "id": String(id),
    "planType": String(planType),
    "pmId": String(pmId),
    "schedule": String(schedule),
    "tasks": [String(tasks)],
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPeriodicMaintenanceExists(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify PeriodicMaintenance " + pmId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PeriodicMaintenance found");
}

function verifyPeriodicMaintenanceDoesNotExist(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify PeriodicMaintenance " + pmId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PeriodicMaintenance not found");
}

function tryToDeleteANonExistingPeriodicMaintenance(carVin, garageId, id, planType, pmId, schedule, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Verify negative delete for PeriodicMaintenance";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPeriodicMaintenance(carVin, garageId, id, planType, pmId, schedule, tasks) {
  return bp.EventSet("Delete PeriodicMaintenance", function(e) {
      return e.name === "Done: " + "Delete PM plan";
  });
}

function waitForPeriodicMaintenanceAdded(carVin, garageId, id, planType, pmId, schedule, tasks) {
  waitFor(matchSuccess("Create PM plan"));
}

function matchAnyPeriodicMaintenanceAdded() {
  return bp.EventSet("Any PeriodicMaintenance Added", function(e) {
      return e.name.startsWith("Done: Create PM plan");
  });
}

function listRepairOrders(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders";
  var description = "List repair orders " + roId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createRepairOrder(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders";
  var description = "Create repair order " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customer": String(customer),
    "customerId": String(customerId),
    "device": String(device),
    "garageId": String(garageId),
    "id": String(id),
    "issue": String(issue),
    "notes": String(notes),
    "roId": String(roId),
    "status": String(status),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "complaint": complaint, "customer": customer, "customerId": customerId, "device": device, "garageId": garageId, "id": id, "issue": issue, "notes": notes, "roId": roId, "status": status}) });
}

function readRepairOrder(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Read repair order " + roId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function updateRepairOrder(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Update repair order " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customer": String(customer),
    "customerId": String(customerId),
    "device": String(device),
    "garageId": String(garageId),
    "id": String(id),
    "issue": String(issue),
    "notes": String(notes),
    "roId": String(roId),
    "status": String(status),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "complaint": complaint, "customer": customer, "customerId": customerId, "device": device, "garageId": garageId, "id": id, "issue": issue, "notes": notes, "roId": roId, "status": status}) });
}

function deleteRepairOrder(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repair order " + roId;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function approveRepairOrder(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders/" + roId + "/approve";
  var description = "Approve RO (move to in-progress if allowed) " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customer": String(customer),
    "customerId": String(customerId),
    "device": String(device),
    "garageId": String(garageId),
    "id": String(id),
    "issue": String(issue),
    "notes": String(notes),
    "roId": String(roId),
    "status": String(status),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "complaint": complaint, "customer": customer, "customerId": customerId, "device": device, "garageId": garageId, "id": id, "issue": issue, "notes": notes, "roId": roId, "status": status}) });
}

function closeRepairOrder(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders/" + roId + "/close";
  var description = "Close RO (sets status=closed) " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customer": String(customer),
    "customerId": String(customerId),
    "device": String(device),
    "garageId": String(garageId),
    "id": String(id),
    "issue": String(issue),
    "notes": String(notes),
    "roId": String(roId),
    "status": String(status),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"carVin": carVin, "complaint": complaint, "customer": customer, "customerId": customerId, "device": device, "garageId": garageId, "id": id, "issue": issue, "notes": notes, "roId": roId, "status": status}) });
}

function tryToAddExistingRepairOrders(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders";
  var description = "Try Add Existing RepairOrders " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customer": String(customer),
    "customerId": String(customerId),
    "device": String(device),
    "garageId": String(garageId),
    "id": String(id),
    "issue": String(issue),
    "notes": String(notes),
    "roId": String(roId),
    "status": String(status),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepairOrdersExists(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Verify RepairOrders " + roId + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepairOrders found");
}

function verifyRepairOrdersDoesNotExist(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Verify RepairOrders " + roId + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepairOrders not found");
}

function tryToDeleteANonExistingRepairOrders(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  var url = "/repair-orders/" + roId;
  var description = "Verify negative delete for RepairOrders";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepairOrders(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  return bp.EventSet("Delete RepairOrders", function(e) {
      return e.name === "Done: " + "Delete repair order";
  });
}

function waitForRepairOrdersAdded(carVin, complaint, customer, customerId, device, garageId, id, issue, notes, roId, status) {
  waitFor(matchSuccess("Create repair order"));
}

function matchAnyRepairOrdersAdded() {
  return bp.EventSet("Any RepairOrders Added", function(e) {
      return e.name.startsWith("Done: Create repair order");
  });
}
