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

// ---- Entity: machine ----

function listMachines() {
  var url = "/machines";
  var description = "List machines";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createMachine() {
  var url = "/machines";
  var description = "Create machine";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMachine() {
  return createMachine();
}

function verifyMachineExists() {
  return listMachines();
}

function verifyMachineDoesNotExist() {
  return listMachines();
}

// ---- Entity: workorder ----

function listWorkorders() {
  var url = "/workorders";
  var description = "List workorders";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createWorkorder() {
  var url = "/workorders";
  var description = "Create workorder";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWorkorder() {
  return createWorkorder();
}

function verifyWorkorderExists() {
  return listWorkorders();
}

function verifyWorkorderDoesNotExist() {
  return listWorkorders();
}

// ---- Entity: maintenance ticket ----

function listMaintenanceTickets() {
  var url = "/maintenance-tickets";
  var description = "List maintenance tickets";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createMaintenanceTicket() {
  var url = "/maintenance-tickets";
  var description = "Create maintenance ticket";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMaintenanceTicket() {
  return createMaintenanceTicket();
}

function verifyMaintenanceTicketExists() {
  return listMaintenanceTickets();
}

function verifyMaintenanceTicketDoesNotExist() {
  return listMaintenanceTickets();
}

// ---- Entity: sensor reading ----

function listSensorReadings() {
  var url = "/sensor-readings";
  var description = "List sensor readings";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function createSensorReading() {
  var url = "/sensor-readings";
  var description = "Create sensor reading";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSensorReading() {
  return createSensorReading();
}

function verifySensorReadingExists() {
  return listSensorReadings();
}

function verifySensorReadingDoesNotExist() {
  return listSensorReadings();
}
