//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: patients ----

function addPatients() {
  var url = "/patients";
  var description = "Add patients";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingpatients() {
  return addPatients();
}

function matchAddedpatients() {
  return bp.EventSet("matchAddedpatients", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnypatientsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add patients/)});
  var m = ev.data.parameters.description.match(/Add patients/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: drugs ----

function addDrugs() {
  var url = "/drugs";
  var description = "Add drugs";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDrugs() {
  var url = "/drugs";
  var description = "Get drugs";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingdrugs() {
  return addDrugs();
}

function verifydrugsExists() {
  return getDrugs();
}

function verifydrugsDoesNotExist() {
  return getDrugs();
}

function matchAddeddrugs() {
  return bp.EventSet("matchAddeddrugs", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnydrugsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add drugs/)});
  var m = ev.data.parameters.description.match(/Add drugs/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: prescriptions ----

function addPrescriptions() {
  var url = "/prescriptions";
  var description = "Add prescriptions";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingprescriptions() {
  return addPrescriptions();
}

function matchAddedprescriptions() {
  return bp.EventSet("matchAddedprescriptions", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyprescriptionsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add prescriptions/)});
  var m = ev.data.parameters.description.match(/Add prescriptions/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: orders ----

function addOrders() {
  var url = "/orders";
  var description = "Add orders";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrders() {
  var url = "/orders";
  var description = "Get orders";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingorders() {
  return addOrders();
}

function verifyordersExists() {
  return getOrders();
}

function verifyordersDoesNotExist() {
  return getOrders();
}

function matchAddedorders() {
  return bp.EventSet("matchAddedorders", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyordersAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add orders/)});
  var m = ev.data.parameters.description.match(/Add orders/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: inventory ----

function getInventory(ndc) {
  var url = "/inventory/" + ndc;
  var description = "Get inventory " + ndc;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyinventoryExists(ndc) {
  return getInventory(ndc);
}

function verifyinventoryDoesNotExist(ndc) {
  return getInventory(ndc);
}
