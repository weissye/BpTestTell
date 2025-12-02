//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));
  });
}

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);
  });
}

function waitFor(eventSet) {
  return bp.sync({waitFor: eventSet});
}

function matchSuccess(desc) {
  return bp.EventSet("Success Event", function(e) {
    return e.name === "Done: " + desc;
  });
}

// ---- Entity: machine ----

function createMachine() {
  var url = "/machines";
  var description = "Create machine";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getMachines() {
  var url = "/machines";
  var description = "Get machines";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingMachine() {
  getMachines();
}

function verifyMachineExists() {
  var url = "/machines";
  var description = "Verify Machine exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Machine exists");
          }
        }
      }
      return pvg.fail("Expected Machine to exist but it does not");
    }
  });
}

function verifyMachineDoesNotExist() {
  var url = "/machines";
  var description = "Verify Machine does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Machine to not exist but it does");
          }
        }
      }
      return pvg.success("Machine does not exist");
    }
  });
}

function matchAddedMachine() {
  var expectedDesc = "Create machine";
  return matchSuccess(expectedDesc);
}

function waitForAnyMachineAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ machine$/));
  var m = ev.data.parameters.description.match(/^Create\ machine$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMachineAddedEvent(keyVal) {
  return bp.EventSet("AddMachine:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMachineAdded() {
  return bp.EventSet("matchAnyMachineAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create machine") > -1;
  });
}

function waitForMachineAdded() {
  var expectedDesc = "Create machine";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: workorder ----

function createWorkOrder() {
  var url = "/workorders";
  var description = "Create workorder";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getWorkOrders() {
  var url = "/workorders";
  var description = "Get workorders";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingWorkOrder() {
  getWorkOrders();
}

function verifyWorkOrderExists() {
  var url = "/workorders";
  var description = "Verify WorkOrder exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("WorkOrder exists");
          }
        }
      }
      return pvg.fail("Expected WorkOrder to exist but it does not");
    }
  });
}

function verifyWorkOrderDoesNotExist() {
  var url = "/workorders";
  var description = "Verify WorkOrder does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected WorkOrder to not exist but it does");
          }
        }
      }
      return pvg.success("WorkOrder does not exist");
    }
  });
}

function matchAddedWorkOrder() {
  var expectedDesc = "Create workorder";
  return matchSuccess(expectedDesc);
}

function waitForAnyWorkOrderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ workorder$/));
  var m = ev.data.parameters.description.match(/^Create\ workorder$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWorkOrderAddedEvent(keyVal) {
  return bp.EventSet("AddWorkOrder:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyWorkOrderAdded() {
  return bp.EventSet("matchAnyWorkOrderAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create workorder") > -1;
  });
}

function waitForWorkOrderAdded() {
  var expectedDesc = "Create workorder";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: maintenance ticket ----

function createMaintenanceTicket() {
  var url = "/maintenance-tickets";
  var description = "Create maintenance ticket";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getMaintenanceTickets() {
  var url = "/maintenance-tickets";
  var description = "Get maintenance tickets";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingMaintenanceTicket() {
  getMaintenanceTickets();
}

function verifyMaintenanceTicketExists() {
  var url = "/maintenance-tickets";
  var description = "Verify MaintenanceTicket exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("MaintenanceTicket exists");
          }
        }
      }
      return pvg.fail("Expected MaintenanceTicket to exist but it does not");
    }
  });
}

function verifyMaintenanceTicketDoesNotExist() {
  var url = "/maintenance-tickets";
  var description = "Verify MaintenanceTicket does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected MaintenanceTicket to not exist but it does");
          }
        }
      }
      return pvg.success("MaintenanceTicket does not exist");
    }
  });
}

function matchAddedMaintenanceTicket() {
  var expectedDesc = "Create maintenance ticket";
  return matchSuccess(expectedDesc);
}

function waitForAnyMaintenanceTicketAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ maintenance\ ticket$/));
  var m = ev.data.parameters.description.match(/^Create\ maintenance\ ticket$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMaintenanceTicketAddedEvent(keyVal) {
  return bp.EventSet("AddMaintenanceTicket:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMaintenanceTicketAdded() {
  return bp.EventSet("matchAnyMaintenanceTicketAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create maintenance ticket") > -1;
  });
}

function waitForMaintenanceTicketAdded() {
  var expectedDesc = "Create maintenance ticket";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: sensor reading ----

function createSensorReading() {
  var url = "/sensor-readings";
  var description = "Create sensor reading";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getSensorReadings() {
  var url = "/sensor-readings";
  var description = "Get sensor readings";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingSensorReading() {
  getSensorReadings();
}

function verifySensorReadingExists() {
  var url = "/sensor-readings";
  var description = "Verify SensorReading exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("SensorReading exists");
          }
        }
      }
      return pvg.fail("Expected SensorReading to exist but it does not");
    }
  });
}

function verifySensorReadingDoesNotExist() {
  var url = "/sensor-readings";
  var description = "Verify SensorReading does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected SensorReading to not exist but it does");
          }
        }
      }
      return pvg.success("SensorReading does not exist");
    }
  });
}

function matchAddedSensorReading() {
  var expectedDesc = "Create sensor reading";
  return matchSuccess(expectedDesc);
}

function waitForAnySensorReadingAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ sensor\ reading$/));
  var m = ev.data.parameters.description.match(/^Create\ sensor\ reading$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getSensorReadingAddedEvent(keyVal) {
  return bp.EventSet("AddSensorReading:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnySensorReadingAdded() {
  return bp.EventSet("matchAnySensorReadingAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create sensor reading") > -1;
  });
}

function waitForSensorReadingAdded() {
  var expectedDesc = "Create sensor reading";
  waitFor(matchSuccess(expectedDesc));
}
