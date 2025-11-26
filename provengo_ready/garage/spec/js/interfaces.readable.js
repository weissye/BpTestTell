//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:8080", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: chain ----

function createChain() {
  var url = "/chains";
  var description = "Create chain";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listChains() {
  var url = "/chains";
  var description = "List chains";
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
  var description = "Read chain " + chainId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingChain(chainId) {
  return createChain();
}

function verifyChainExists(chainId) {
  return listChains();
}

function verifyChainDoesNotExist(chainId) {
  return listChains();
}

function tryToDeleteANonExistingChain(chainId) {
  return deleteChain(chainId);
}

// ---- Entity: garage ----

function createGarage() {
  var url = "/garages";
  var description = "Create garage";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listGarages() {
  var url = "/garages";
  var description = "List garages";
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
  var description = "Read garage " + garageId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingGarage(garageId) {
  return createGarage();
}

function verifyGarageExists(garageId) {
  return listGarages();
}

function verifyGarageDoesNotExist(garageId) {
  return listGarages();
}

function tryToDeleteANonExistingGarage(garageId) {
  return deleteGarage(garageId);
}

// ---- Entity: customer ----

function createCustomer() {
  var url = "/customers";
  var description = "Create customer";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listCustomers() {
  var url = "/customers";
  var description = "List customers";
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
  var description = "Read customer " + customerId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomer(customerId) {
  return createCustomer();
}

function verifyCustomerExists(customerId) {
  return listCustomers();
}

function verifyCustomerDoesNotExist(customerId) {
  return listCustomers();
}

function tryToDeleteANonExistingCustomer(customerId) {
  return deleteCustomer(customerId);
}

// ---- Entity: car ----

function createCar() {
  var url = "/cars";
  var description = "Create car";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listCars() {
  var url = "/cars";
  var description = "List cars";
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
  var description = "Read car " + vin;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCar(vin) {
  return createCar();
}

function verifyCarExists(vin) {
  return listCars();
}

function verifyCarDoesNotExist(vin) {
  return listCars();
}

function tryToDeleteANonExistingCar(vin) {
  return deleteCar(vin);
}

// ---- Entity: periodic maintenance plan ----

function createPM() {
  var url = "/periodic-maintenance";
  var description = "Create PM plan";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listPMs() {
  var url = "/periodic-maintenance";
  var description = "List PM plans";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePM(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Update PM plan " + pmId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePM(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Delete PM plan " + pmId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPM(pmId) {
  var url = "/periodic-maintenance/" + pmId;
  var description = "Read PM plan " + pmId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPeriodicMaintenance(pmId) {
  return createPM();
}

function verifyPeriodicMaintenanceExists(pmId) {
  return listPMs();
}

function verifyPeriodicMaintenanceDoesNotExist(pmId) {
  return listPMs();
}

function tryToDeleteANonExistingPeriodicMaintenance(pmId) {
  return deletePM(pmId);
}

// ---- Entity: repair order ----

function createRepairOrder() {
  var url = "/repair-orders";
  var description = "Create repair order";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listRepairOrders() {
  var url = "/repair-orders";
  var description = "List repair orders";
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
  var description = "Update repair order " + roId;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepairOrder(roId) {
  var url = "/repair-orders/" + roId;
  var description = "Delete repair order " + roId;
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
  var description = "Read repair order " + roId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function approveRepairOrder(roId) {
  var url = "/repair-orders/" + roId + "/approve";
  var description = "Approve repair order " + roId;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function closeRepairOrder(roId) {
  var url = "/repair-orders/" + roId + "/close";
  var description = "Close repair order " + roId;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepairOrder(roId) {
  return createRepairOrder();
}

function verifyRepairOrderExists(roId) {
  return listRepairOrders();
}

function verifyRepairOrderDoesNotExist(roId) {
  return listRepairOrders();
}

function tryToDeleteANonExistingRepairOrder(roId) {
  return deleteRepairOrder(roId);
}
