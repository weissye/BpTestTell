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

// ---- Entity: patient ----

function createPatient() {
  var url = "/patients";
  var description = "Create patient";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPatient() {
  return createPatient();
}

// ---- Entity: drug ----

function listDrugs() {
  var url = "/drugs";
  var description = "List drugs";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createDrug() {
  var url = "/drugs";
  var description = "Create drug";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDrug() {
  return createDrug();
}

function verifyDrugExists() {
  return listDrugs();
}

function verifyDrugDoesNotExist() {
  return listDrugs();
}

// ---- Entity: prescription ----

function createPrescription() {
  var url = "/prescriptions";
  var description = "Create prescription";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPrescription() {
  return createPrescription();
}

// ---- Entity: order ----

function listOrders() {
  var url = "/orders";
  var description = "List orders";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createOrder() {
  var url = "/orders";
  var description = "Create order";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrder() {
  return createOrder();
}

function verifyOrderExists() {
  return listOrders();
}

function verifyOrderDoesNotExist() {
  return listOrders();
}

// ---- Entity: inventory ----

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory for " + ndc;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyInventoryExists(ndc) {
  return getInventory(ndc);
}

function verifyInventoryDoesNotExist(ndc) {
  return getInventory(ndc);
}
