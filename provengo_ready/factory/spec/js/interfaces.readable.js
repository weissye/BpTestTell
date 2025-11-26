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

// ---- Entity: machine ----

function addMachine() {
  var url = "/machines";
  var description = "Add machine";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getMachines() {
  var url = "/machines";
  var description = "Get machines";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMachine() {
  return addMachine();
}

function verifyMachineExists() {
  return getMachines();
}

function verifyMachineDoesNotExist() {
  return getMachines();
}

function matchAddedMachine() {
  return bp.EventSet("matchAddedMachine", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyMachineAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add machine/)});
  var m = ev.data.parameters.description.match(/Add machine/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: workorder ----

function addWorkorder() {
  var url = "/workorders";
  var description = "Add workorder";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWorkorders() {
  var url = "/workorders";
  var description = "Get workorders";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWorkorder() {
  return addWorkorder();
}

function verifyWorkorderExists() {
  return getWorkorders();
}

function verifyWorkorderDoesNotExist() {
  return getWorkorders();
}

function matchAddedWorkorder() {
  return bp.EventSet("matchAddedWorkorder", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyWorkorderAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add workorder/)});
  var m = ev.data.parameters.description.match(/Add workorder/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: maintenanceticket ----

function addMaintenanceTicket() {
  var url = "/maintenance-tickets";
  var description = "Add maintenanceticket";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getMaintenanceTickets() {
  var url = "/maintenance-tickets";
  var description = "Get maintenancetickets";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingMaintenanceTicket() {
  return addMaintenanceTicket();
}

function verifyMaintenanceTicketExists() {
  return getMaintenanceTickets();
}

function verifyMaintenanceTicketDoesNotExist() {
  return getMaintenanceTickets();
}

function matchAddedMaintenanceTicket() {
  return bp.EventSet("matchAddedMaintenanceTicket", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyMaintenanceTicketAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add maintenanceticket/)});
  var m = ev.data.parameters.description.match(/Add maintenanceticket/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: sensorreading ----

function addSensorReading() {
  var url = "/sensor-readings";
  var description = "Add sensorreading";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getSensorReadings() {
  var url = "/sensor-readings";
  var description = "Get sensorreadings";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSensorReading() {
  return addSensorReading();
}

function verifySensorReadingExists() {
  return getSensorReadings();
}

function verifySensorReadingDoesNotExist() {
  return getSensorReadings();
}

function matchAddedSensorReading() {
  return bp.EventSet("matchAddedSensorReading", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnySensorReadingAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add sensorreading/)});
  var m = ev.data.parameters.description.match(/Add sensorreading/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
