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

// ---- Entity: machine ----

function getMachines() {
  var url = "/machines";
  var description = "Get list of machines";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function createMachine() {
  var url = "/machines";
  var description = "Create machine";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingMachine() {
  var url = "/machines";
  var body = {
  };
  var description = "Verify that we cannot add another Machine...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
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
  return bp.EventSet("matchAddedMachine", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create machine") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForMachineAdded() {
  var expectedDesc = "Create machine";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: workorder ----

function getWorkorders() {
  var url = "/workorders";
  var description = "Get list of workorders";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function createWorkorder() {
  var url = "/workorders";
  var description = "Create workorder";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingWorkorder() {
  var url = "/workorders";
  var body = {
  };
  var description = "Verify that we cannot add another Workorder...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyWorkorderExists() {
  var url = "/workorders";
  var description = "Verify Workorder exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Workorder exists");
          }
        }
      }
      return pvg.fail("Expected Workorder to exist but it does not");
    }
  });
}

function verifyWorkorderDoesNotExist() {
  var url = "/workorders";
  var description = "Verify Workorder does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Workorder to not exist but it does");
          }
        }
      }
      return pvg.success("Workorder does not exist");
    }
  });
}

function matchAddedWorkorder() {
  var expectedDesc = "Create workorder";
  return bp.EventSet("matchAddedWorkorder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorkorderAdded() {
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

function getWorkorderAddedEvent(keyVal) {
  return bp.EventSet("AddWorkorder:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyWorkorderAdded() {
  return bp.EventSet("matchAnyWorkorderAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create workorder") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForWorkorderAdded() {
  var expectedDesc = "Create workorder";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: maintenanceTicket ----

function getMaintenanceTickets() {
  var url = "/maintenance-tickets";
  var description = "Get list of maintenance tickets";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function createMaintenanceTicket() {
  var url = "/maintenance-tickets";
  var description = "Create maintenance ticket";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingMaintenanceTicket() {
  var url = "/maintenance-tickets";
  var body = {
  };
  var description = "Verify that we cannot add another MaintenanceTicket...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
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
  return bp.EventSet("matchAddedMaintenanceTicket", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create maintenanceTicket") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForMaintenanceTicketAdded() {
  var expectedDesc = "Create maintenance ticket";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: sensorReading ----

function getSensorReadings() {
  var url = "/sensor-readings";
  var description = "Get list of sensor readings";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function createSensorReading() {
  var url = "/sensor-readings";
  var description = "Create sensor reading";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingSensorReading() {
  var url = "/sensor-readings";
  var body = {
  };
  var description = "Verify that we cannot add another SensorReading...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
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
  return bp.EventSet("matchAddedSensorReading", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create sensorReading") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForSensorReadingAdded() {
  var expectedDesc = "Create sensor reading";
  waitFor(matchesDescription(expectedDesc));
}
