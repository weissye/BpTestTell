//@provengo summon rest
// === Auto-generated interfaces for garage ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listChains() {
  var url = "/chains";
  var reqDescription = "List chains {chainId}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createChain(active, chainId, description, hqAddress, name, supportEmail) {
  var url = "/chains";
  var reqDescription = "Create chain " + chainId;
  var body = {
    "active": active,
    "chainId": String(chainId),
    "description": String(description),
    "hqAddress": hqAddress,
    "name": String(name),
    "supportEmail": String(supportEmail),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"active": active, "chainId": chainId, "description": description, "hqAddress": hqAddress, "name": name, "supportEmail": supportEmail}) });
  }
  return res;
}

function readChain(chainId) {
  var url = "/chains/" + chainId;
  var reqDescription = "Read chain " + chainId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function updateChain(active, chainId, description, hqAddress, name, supportEmail) {
  var url = "/chains/" + chainId;
  var reqDescription = "Update chain " + chainId;
  var body = {
    "active": active,
    "description": String(description),
    "hqAddress": hqAddress,
    "name": String(name),
    "supportEmail": String(supportEmail),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"active": active, "chainId": chainId, "description": description, "hqAddress": hqAddress, "name": name, "supportEmail": supportEmail}) });
  }
  return res;
}

function deleteChain(chainId) {
  var url = "/chains/" + chainId;
  var reqDescription = "Delete chain " + chainId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingChains(active, chainId, description, hqAddress, name, supportEmail) {
  var url = "/chains";
  var reqDescription = "Try Add Existing Chains " + chainId;
  var body = {
    "active": active,
    "chainId": String(chainId),
    "description": String(description),
    "hqAddress": hqAddress,
    "name": String(name),
    "supportEmail": String(supportEmail),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyChainsRejects(active, chainId, description, hqAddress, name, supportEmail) {
  var url = "/chains";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "active": active,
    "chainId": chainId,
    "description": description,
    "hqAddress": hqAddress,
    "name": name,
    "supportEmail": supportEmail,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
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

function matchAnyChainsAdded() {
  return bp.EventSet("Any Chains Added", function(e) {
      return e.name.startsWith("Done: Positive: Create chain");
  });
}

function matchDeletedChains(active, chainId, description, hqAddress, name, supportEmail) {
  return bp.EventSet("Delete Chains", function(e) {
      return e.name.startsWith("Done: Positive: Delete chain");
  });
}

function listCustomers() {
  var url = "/customers";
  var reqDescription = "List customers {customerId}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createCustomer(customerId, description, email, fullName, name, phone, preferredGarageId, type) {
  var url = "/customers";
  var reqDescription = "Create customer " + customerId;
  var body = {
    "customerId": String(customerId),
    "description": String(description),
    "email": String(email),
    "fullName": String(fullName),
    "name": String(name),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
    "type": String(type),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"customerId": customerId, "description": description, "email": email, "fullName": fullName, "name": name, "phone": phone, "preferredGarageId": preferredGarageId, "type": type}) });
  }
  return res;
}

function readCustomer(customerId) {
  var url = "/customers/" + customerId;
  var reqDescription = "Read customer " + customerId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function updateCustomer(customerId, description, email, fullName, name, phone, preferredGarageId, type) {
  var url = "/customers/" + customerId;
  var reqDescription = "Update customer " + customerId;
  var body = {
    "description": String(description),
    "email": String(email),
    "fullName": String(fullName),
    "name": String(name),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
    "type": String(type),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"customerId": customerId, "description": description, "email": email, "fullName": fullName, "name": name, "phone": phone, "preferredGarageId": preferredGarageId, "type": type}) });
  }
  return res;
}

function deleteCustomer(customerId) {
  var url = "/customers/" + customerId;
  var reqDescription = "Delete customer " + customerId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingCustomers(customerId, description, email, fullName, name, phone, preferredGarageId, type) {
  var url = "/customers";
  var reqDescription = "Try Add Existing Customers " + customerId;
  var body = {
    "customerId": String(customerId),
    "description": String(description),
    "email": String(email),
    "fullName": String(fullName),
    "name": String(name),
    "phone": String(phone),
    "preferredGarageId": String(preferredGarageId),
    "type": String(type),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyCustomersRejects(customerId, description, email, fullName, name, phone, preferredGarageId, type) {
  var url = "/customers";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "customerId": customerId,
    "description": description,
    "email": email,
    "fullName": fullName,
    "name": name,
    "phone": phone,
    "preferredGarageId": preferredGarageId,
    "type": type,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
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

function matchAnyCustomersAdded() {
  return bp.EventSet("Any Customers Added", function(e) {
      return e.name.startsWith("Done: Positive: Create customer");
  });
}

function matchDeletedCustomers(customerId, description, email, fullName, name, phone, preferredGarageId, type) {
  return bp.EventSet("Delete Customers", function(e) {
      return e.name.startsWith("Done: Positive: Delete customer");
  });
}

function listGarages() {
  var url = "/garages";
  var reqDescription = "List garages {garageId}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createGarage(active, address, bayCount, capacity, chainId, description, garageId, location, name, phone, servicesOffered) {
  var url = "/garages";
  var reqDescription = "Create garage " + garageId;
  var body = {
    "active": active,
    "address": address,
    "bayCount": bayCount,
    "capacity": capacity,
    "chainId": String(chainId),
    "description": String(description),
    "garageId": String(garageId),
    "location": location,
    "name": String(name),
    "phone": String(phone),
    "servicesOffered": servicesOffered,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"active": active, "address": address, "bayCount": bayCount, "capacity": capacity, "chainId": chainId, "description": description, "garageId": garageId, "location": location, "name": name, "phone": phone, "servicesOffered": servicesOffered}) });
  }
  return res;
}

function readGarage(garageId) {
  var url = "/garages/" + garageId;
  var reqDescription = "Read garage " + garageId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function updateGarage(active, address, bayCount, capacity, chainId, description, garageId, location, name, phone, servicesOffered) {
  var url = "/garages/" + garageId;
  var reqDescription = "Update garage " + garageId;
  var body = {
    "active": active,
    "address": address,
    "bayCount": bayCount,
    "capacity": capacity,
    "chainId": String(chainId),
    "description": String(description),
    "location": location,
    "name": String(name),
    "phone": String(phone),
    "servicesOffered": servicesOffered,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"active": active, "address": address, "bayCount": bayCount, "capacity": capacity, "chainId": chainId, "description": description, "garageId": garageId, "location": location, "name": name, "phone": phone, "servicesOffered": servicesOffered}) });
  }
  return res;
}

function deleteGarage(garageId) {
  var url = "/garages/" + garageId;
  var reqDescription = "Delete garage " + garageId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingGarages(active, address, bayCount, capacity, chainId, description, garageId, location, name, phone, servicesOffered) {
  var url = "/garages";
  var reqDescription = "Try Add Existing Garages " + garageId;
  var body = {
    "active": active,
    "address": address,
    "bayCount": bayCount,
    "capacity": capacity,
    "chainId": String(chainId),
    "description": String(description),
    "garageId": String(garageId),
    "location": location,
    "name": String(name),
    "phone": String(phone),
    "servicesOffered": servicesOffered,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyGaragesRejects(active, address, bayCount, capacity, chainId, description, garageId, location, name, phone, servicesOffered) {
  var url = "/garages";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "active": active,
    "address": address,
    "bayCount": bayCount,
    "capacity": capacity,
    "chainId": chainId,
    "description": description,
    "garageId": garageId,
    "location": location,
    "name": name,
    "phone": phone,
    "servicesOffered": servicesOffered,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
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

function matchAnyGaragesAdded() {
  return bp.EventSet("Any Garages Added", function(e) {
      return e.name.startsWith("Done: Positive: Create garage");
  });
}

function matchDeletedGarages(active, address, bayCount, capacity, chainId, description, garageId, location, name, phone, servicesOffered) {
  return bp.EventSet("Delete Garages", function(e) {
      return e.name.startsWith("Done: Positive: Delete garage");
  });
}

function listCars() {
  var url = "/cars";
  var reqDescription = "List cars {vin}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createCar(color, description, homeGarageId, licensePlate, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var reqDescription = "Create car " + vin;
  var body = {
    "color": String(color),
    "description": String(description),
    "homeGarageId": String(homeGarageId),
    "licensePlate": String(licensePlate),
    "make": String(make),
    "mileage": mileage,
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": year,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"color": color, "description": description, "homeGarageId": homeGarageId, "licensePlate": licensePlate, "make": make, "mileage": mileage, "model": model, "ownerCustomerId": ownerCustomerId, "vin": vin, "year": year}) });
  }
  return res;
}

function readCar(vin) {
  var url = "/cars/" + vin;
  var reqDescription = "Read car " + vin;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function updateCar(color, description, homeGarageId, licensePlate, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars/" + vin;
  var reqDescription = "Update car " + vin;
  var body = {
    "color": String(color),
    "description": String(description),
    "homeGarageId": String(homeGarageId),
    "licensePlate": String(licensePlate),
    "make": String(make),
    "mileage": mileage,
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "year": year,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"color": color, "description": description, "homeGarageId": homeGarageId, "licensePlate": licensePlate, "make": make, "mileage": mileage, "model": model, "ownerCustomerId": ownerCustomerId, "vin": vin, "year": year}) });
  }
  return res;
}

function deleteCar(vin) {
  var url = "/cars/" + vin;
  var reqDescription = "Delete car " + vin;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingCars(color, description, homeGarageId, licensePlate, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var reqDescription = "Try Add Existing Cars " + vin;
  var body = {
    "color": String(color),
    "description": String(description),
    "homeGarageId": String(homeGarageId),
    "licensePlate": String(licensePlate),
    "make": String(make),
    "mileage": mileage,
    "model": String(model),
    "ownerCustomerId": String(ownerCustomerId),
    "vin": String(vin),
    "year": year,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyCarsRejects(color, description, homeGarageId, licensePlate, make, mileage, model, ownerCustomerId, vin, year) {
  var url = "/cars";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "color": color,
    "description": description,
    "homeGarageId": homeGarageId,
    "licensePlate": licensePlate,
    "make": make,
    "mileage": mileage,
    "model": model,
    "ownerCustomerId": ownerCustomerId,
    "vin": vin,
    "year": year,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
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

function matchAnyCarsAdded() {
  return bp.EventSet("Any Cars Added", function(e) {
      return e.name.startsWith("Done: Positive: Create car");
  });
}

function matchDeletedCars(color, description, homeGarageId, licensePlate, make, mileage, model, ownerCustomerId, vin, year) {
  return bp.EventSet("Delete Cars", function(e) {
      return e.name.startsWith("Done: Positive: Delete car");
  });
}

function listPMPlans() {
  var url = "/periodic-maintenance";
  var reqDescription = "List PM plans {pmId}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createPMPlan(carVin, description, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  var url = "/periodic-maintenance";
  var reqDescription = "Create PM plan " + pmId;
  var body = {
    "carVin": String(carVin),
    "description": String(description),
    "garageId": String(garageId),
    "intervalKm": intervalKm,
    "intervalMonths": intervalMonths,
    "planType": String(planType),
    "pmId": String(pmId),
    "schedule": schedule,
    "status": String(status),
    "tasks": tasks,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"carVin": carVin, "description": description, "garageId": garageId, "intervalKm": intervalKm, "intervalMonths": intervalMonths, "planType": planType, "pmId": pmId, "schedule": schedule, "status": status, "tasks": tasks}) });
  }
  return res;
}

function readPMPlan(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var reqDescription = "Read PM plan " + pmId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function updatePMPlan(carVin, description, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  var url = "/periodic-maintenance/" + pmId;
  var reqDescription = "Update PM plan " + pmId;
  var body = {
    "carVin": String(carVin),
    "description": String(description),
    "garageId": String(garageId),
    "intervalKm": intervalKm,
    "intervalMonths": intervalMonths,
    "planType": String(planType),
    "schedule": schedule,
    "status": String(status),
    "tasks": tasks,
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"carVin": carVin, "description": description, "garageId": garageId, "intervalKm": intervalKm, "intervalMonths": intervalMonths, "planType": planType, "pmId": pmId, "schedule": schedule, "status": status, "tasks": tasks}) });
  }
  return res;
}

function deletePMPlan(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var reqDescription = "Delete PM plan " + pmId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingPeriodicMaintenance(carVin, description, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  var url = "/periodic-maintenance";
  var reqDescription = "Try Add Existing PeriodicMaintenance " + pmId;
  var body = {
    "carVin": String(carVin),
    "description": String(description),
    "garageId": String(garageId),
    "intervalKm": intervalKm,
    "intervalMonths": intervalMonths,
    "planType": String(planType),
    "pmId": String(pmId),
    "schedule": schedule,
    "status": String(status),
    "tasks": tasks,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyPeriodicMaintenanceRejects(carVin, description, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  var url = "/periodic-maintenance";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "carVin": carVin,
    "description": description,
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
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
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

function matchAnyPeriodicMaintenanceAdded() {
  return bp.EventSet("Any PeriodicMaintenance Added", function(e) {
      return e.name.startsWith("Done: Positive: Create PM plan");
  });
}

function matchDeletedPeriodicMaintenance(carVin, description, garageId, intervalKm, intervalMonths, planType, pmId, schedule, status, tasks) {
  return bp.EventSet("Delete PeriodicMaintenance", function(e) {
      return e.name.startsWith("Done: Positive: Delete PM plan");
  });
}

function listRepairOrders() {
  var url = "/repair-orders";
  var reqDescription = "List repair orders {roId}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createRepairOrder(carVin, complaint, customerId, description, garageId, roId, status) {
  var url = "/repair-orders";
  var reqDescription = "Create repair order " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customerId": String(customerId),
    "description": String(description),
    "garageId": String(garageId),
    "roId": String(roId),
    "status": String(status),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"carVin": carVin, "complaint": complaint, "customerId": customerId, "description": description, "garageId": garageId, "roId": roId, "status": status}) });
  }
  return res;
}

function getRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var reqDescription = "Read repair order " + roId;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function updateRepairOrder(carVin, complaint, customerId, description, garageId, roId, status) {
  var url = "/repair-orders/" + roId;
  var reqDescription = "Update repair order " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customerId": String(customerId),
    "description": String(description),
    "garageId": String(garageId),
    "status": String(status),
};
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"carVin": carVin, "complaint": complaint, "customerId": customerId, "description": description, "garageId": garageId, "roId": roId, "status": status}) });
  }
  return res;
}

function deleteRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var reqDescription = "Delete repair order " + roId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function approveRepairOrder(carVin, complaint, customerId, description, garageId, roId, status) {
  var url = "/repair-orders/" + roId + "/approve";
  var reqDescription = "Approve RO (move to in-progress if allowed) " + roId;
  var body = {};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"carVin": carVin, "complaint": complaint, "customerId": customerId, "description": description, "garageId": garageId, "roId": roId, "status": status}) });
  }
  return res;
}

function closeRepairOrder(carVin, complaint, customerId, description, garageId, roId, status) {
  var url = "/repair-orders/" + roId + "/close";
  var reqDescription = "Close RO (sets status=closed) " + roId;
  var body = {};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"carVin": carVin, "complaint": complaint, "customerId": customerId, "description": description, "garageId": garageId, "roId": roId, "status": status}) });
  }
  return res;
}

function tryToAddExistingRepairOrders(carVin, complaint, customerId, description, garageId, roId, status) {
  var url = "/repair-orders";
  var reqDescription = "Try Add Existing RepairOrders " + roId;
  var body = {
    "carVin": String(carVin),
    "complaint": String(complaint),
    "customerId": String(customerId),
    "description": String(description),
    "garageId": String(garageId),
    "roId": String(roId),
    "status": String(status),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyRepairOrdersRejects(carVin, complaint, customerId, description, garageId, roId, status) {
  var url = "/repair-orders";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "carVin": carVin,
    "complaint": complaint,
    "customerId": customerId,
    "description": description,
    "garageId": garageId,
    "roId": roId,
    "status": status,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
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

function matchAnyRepairOrdersAdded() {
  return bp.EventSet("Any RepairOrders Added", function(e) {
      return e.name.startsWith("Done: Positive: Create repair order");
  });
}

function matchDeletedRepairOrders(carVin, complaint, customerId, description, garageId, roId, status) {
  return bp.EventSet("Delete RepairOrders", function(e) {
      return e.name.startsWith("Done: Positive: Delete repair order");
  });
}
