//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 * This approximates the "Library SUT" interface style.
 */

const svc = new RESTSession("http://" + host + ":" + port, "provengo basedclient", {
  headers: { "Content-Type": "application/json" },
});

// Common helpers
function matchesDescription(text) {
  return bp.EventSet("desc-eq", function(e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === text);
  });
}
function matchesDescriptionRegex(rx) {
  return bp.EventSet("desc-rx", function(e) {
    if (!e || !e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return rx.test(e.data.parameters.description);
  });
}

/** === Machine Operations === */

// CREATE
function addMachine(name, status) {
  svc.post("/machines", {
      body: JSON.stringify({ name: name, status: status }),
      parameters: { description: "Add a machine with name " + name + " and status " + status + "" }
    });
}

// DELETE
function deleteMachine(name, status) {
  svc.delete("/machines/" + name + "/"+ status, {
    parameters: { description: "Delete a machine with name " + name + " and status " + status + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMachine(name, status) {
  svc.delete("/machines/" + name + "/"+ status, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a machine with name " + name + " and status " + status + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMachine(name, status) {
  svc.post("/machines", {
      body: JSON.stringify({ name: name, status: status }),
      parameters: { description: "Add a machine with name " + name + " and status " + status + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a machine with name " + name + " and status " + status + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMachine(name, status) {
  svc.put("/machines/" + name + "/"+ status, {
      body: JSON.stringify({ name: name, status: status }),
      parameters: { description: "Update a machine" }
    });
}

// GET one
function getMachine(name, status) {
  svc.get("/machines/" + name + "/"+ status, {
    parameters: { description: "Get a machine" }
  });
}

// LIST all
function listMachines() {
  svc.get("/machines", {
    parameters: { description: "List machines" }
  });
}

// Verify exists (by list)
function verifyMachineExists(name, status) {
  svc.get("/machines", {
    callback: function (response) {
      machine = JSON.parse(response.body);
      for (let i = 0; i < machine.length; i++) {
        if (machine[i].name === name && machine[i].status === status) {
          return pvg.success("Machine exists");
        }
      }
      return pvg.fail("Expected a machine to exist but it does not");
    },
    parameters: { description: "Verify machine with name " + name + " and status " + status + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMachineDoesNotExist(name, status) {
  svc.get("/machines", {
    callback: function (response) {
      machine = JSON.parse(response.body);
      for (let i = 0; i < machine.length; i++) {
        if (machine[i].name === name && machine[i].status === status) {
          return pvg.fail("Expected a machine to not exist but it does");
        }
      }
      return pvg.success("Machine does not exist");
    },
    parameters: { description: "Verify machine with name " + name + " and status " + status + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMachine() {
  return bp.EventSet("any-add-machine", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a machine");
  });
}
function matchAddMachine(name, status) {
  return bp.EventSet("add-machine", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a machine with name " + name + " and status " + status + "";
  });
}
function matchAnyDeleteMachine() {
  return bp.EventSet("any-del-machine", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a machine");
  });
}
function matchDeleteMachine(name, status) {
  return bp.EventSet("del-machine", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a machine with name " + name + " and status " + status + "";
  });
}

// Wait helpers
function waitForAnyMachineAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ machine\ with\ name\ (.+) and status\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ machine\ with\ name\ (.+) and status\ (.+)$/);
    return { name: (x)=>x(m[1]), status: (x)=>x(m[2]) };
}
function waitForMachineAdded(name, status) {
  waitFor(matchAddMachine(name, status));
}
function waitForMachineDeleted(name, status) {
  waitFor(matchDeleteMachine(name, status));
}
function waitForAnyMachineDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ machine\ with\ name\ (.+) and status\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ machine\ with\ name\ (.+) and status\ (.+)$/);
    return { name: (x)=>x(m[1]), status: (x)=>x(m[2]) };
}


/** === Maintenance_ticket Operations === */

// CREATE
function addMaintenance_ticket(issue, status) {
  svc.post("/maintenance_tickets", {
      body: JSON.stringify({ issue: issue, status: status }),
      parameters: { description: "Add a maintenance_ticket with issue " + issue + " and status " + status + "" }
    });
}

// DELETE
function deleteMaintenance_ticket(issue, status) {
  svc.delete("/maintenance_tickets/" + issue + "/"+ status, {
    parameters: { description: "Delete a maintenance_ticket with issue " + issue + " and status " + status + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMaintenance_ticket(issue, status) {
  svc.delete("/maintenance_tickets/" + issue + "/"+ status, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a maintenance_ticket with issue " + issue + " and status " + status + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMaintenance_ticket(issue, status) {
  svc.post("/maintenance_tickets", {
      body: JSON.stringify({ issue: issue, status: status }),
      parameters: { description: "Add a maintenance_ticket with issue " + issue + " and status " + status + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a maintenance_ticket with issue " + issue + " and status " + status + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMaintenance_ticket(issue, status) {
  svc.put("/maintenance_tickets/" + issue + "/"+ status, {
      body: JSON.stringify({ issue: issue, status: status }),
      parameters: { description: "Update a maintenance_ticket" }
    });
}

// GET one
function getMaintenance_ticket(issue, status) {
  svc.get("/maintenance_tickets/" + issue + "/"+ status, {
    parameters: { description: "Get a maintenance_ticket" }
  });
}

// LIST all
function listMaintenance_tickets() {
  svc.get("/maintenance_tickets", {
    parameters: { description: "List maintenance_tickets" }
  });
}

// Verify exists (by list)
function verifyMaintenance_ticketExists(issue, status) {
  svc.get("/maintenance_tickets", {
    callback: function (response) {
      maintenance_ticket = JSON.parse(response.body);
      for (let i = 0; i < maintenance_ticket.length; i++) {
        if (maintenance_ticket[i].issue === issue && maintenance_ticket[i].status === status) {
          return pvg.success("Maintenance_ticket exists");
        }
      }
      return pvg.fail("Expected a maintenance_ticket to exist but it does not");
    },
    parameters: { description: "Verify maintenance_ticket with issue " + issue + " and status " + status + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMaintenance_ticketDoesNotExist(issue, status) {
  svc.get("/maintenance_tickets", {
    callback: function (response) {
      maintenance_ticket = JSON.parse(response.body);
      for (let i = 0; i < maintenance_ticket.length; i++) {
        if (maintenance_ticket[i].issue === issue && maintenance_ticket[i].status === status) {
          return pvg.fail("Expected a maintenance_ticket to not exist but it does");
        }
      }
      return pvg.success("Maintenance_ticket does not exist");
    },
    parameters: { description: "Verify maintenance_ticket with issue " + issue + " and status " + status + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMaintenance_ticket() {
  return bp.EventSet("any-add-maintenance_ticket", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a maintenance_ticket");
  });
}
function matchAddMaintenance_ticket(issue, status) {
  return bp.EventSet("add-maintenance_ticket", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a maintenance_ticket with issue " + issue + " and status " + status + "";
  });
}
function matchAnyDeleteMaintenance_ticket() {
  return bp.EventSet("any-del-maintenance_ticket", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a maintenance_ticket");
  });
}
function matchDeleteMaintenance_ticket(issue, status) {
  return bp.EventSet("del-maintenance_ticket", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a maintenance_ticket with issue " + issue + " and status " + status + "";
  });
}

// Wait helpers
function waitForAnyMaintenance_ticketAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ maintenance_ticket\ with\ issue\ (.+) and status\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ maintenance_ticket\ with\ issue\ (.+) and status\ (.+)$/);
    return { issue: (x)=>x(m[1]), status: (x)=>x(m[2]) };
}
function waitForMaintenance_ticketAdded(issue, status) {
  waitFor(matchAddMaintenance_ticket(issue, status));
}
function waitForMaintenance_ticketDeleted(issue, status) {
  waitFor(matchDeleteMaintenance_ticket(issue, status));
}
function waitForAnyMaintenance_ticketDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ maintenance_ticket\ with\ issue\ (.+) and status\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ maintenance_ticket\ with\ issue\ (.+) and status\ (.+)$/);
    return { issue: (x)=>x(m[1]), status: (x)=>x(m[2]) };
}


/** === Reset Operations === */

// CREATE
function addReset(id) {
  svc.post("/reset", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a reset with id " + id + "" }
    });
}

// DELETE
function deleteReset(id) {
  svc.delete("/reset/" + id, {
    parameters: { description: "Delete a reset with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingReset(id) {
  svc.delete("/reset/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a reset with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingReset(id) {
  svc.post("/reset", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a reset with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a reset with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateReset(id) {
  svc.put("/reset/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a reset" }
    });
}

// GET one
function getReset(id) {
  svc.get("/reset/" + id, {
    parameters: { description: "Get a reset" }
  });
}

// LIST all
function listReset() {
  svc.get("/reset", {
    parameters: { description: "List reset" }
  });
}

// Verify exists (by list)
function verifyResetExists(id) {
  svc.get("/reset", {
    callback: function (response) {
      reset = JSON.parse(response.body);
      for (let i = 0; i < reset.length; i++) {
        if (reset[i].id === id) {
          return pvg.success("Reset exists");
        }
      }
      return pvg.fail("Expected a reset to exist but it does not");
    },
    parameters: { description: "Verify reset with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyResetDoesNotExist(id) {
  svc.get("/reset", {
    callback: function (response) {
      reset = JSON.parse(response.body);
      for (let i = 0; i < reset.length; i++) {
        if (reset[i].id === id) {
          return pvg.fail("Expected a reset to not exist but it does");
        }
      }
      return pvg.success("Reset does not exist");
    },
    parameters: { description: "Verify reset with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddReset() {
  return bp.EventSet("any-add-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a reset");
  });
}
function matchAddReset(id) {
  return bp.EventSet("add-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a reset with id " + id + "";
  });
}
function matchAnyDeleteReset() {
  return bp.EventSet("any-del-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a reset");
  });
}
function matchDeleteReset(id) {
  return bp.EventSet("del-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a reset with id " + id + "";
  });
}

// Wait helpers
function waitForAnyResetAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ reset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ reset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForResetAdded(id) {
  waitFor(matchAddReset(id));
}
function waitForResetDeleted(id) {
  waitFor(matchDeleteReset(id));
}
function waitForAnyResetDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ reset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ reset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Sensor_reading Operations === */

// CREATE
function addSensor_reading(sensorId, value) {
  svc.post("/sensor_readings", {
      body: JSON.stringify({ sensorId: sensorId, value: value }),
      parameters: { description: "Add a sensor_reading with sensorId " + sensorId + " and value " + value + "" }
    });
}

// DELETE
function deleteSensor_reading(sensorId, value) {
  svc.delete("/sensor_readings/" + sensorId + "/"+ value, {
    parameters: { description: "Delete a sensor_reading with sensorId " + sensorId + " and value " + value + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSensor_reading(sensorId, value) {
  svc.delete("/sensor_readings/" + sensorId + "/"+ value, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a sensor_reading with sensorId " + sensorId + " and value " + value + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSensor_reading(sensorId, value) {
  svc.post("/sensor_readings", {
      body: JSON.stringify({ sensorId: sensorId, value: value }),
      parameters: { description: "Add a sensor_reading with sensorId " + sensorId + " and value " + value + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a sensor_reading with sensorId " + sensorId + " and value " + value + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateSensor_reading(sensorId, value) {
  svc.put("/sensor_readings/" + sensorId + "/"+ value, {
      body: JSON.stringify({ sensorId: sensorId, value: value }),
      parameters: { description: "Update a sensor_reading" }
    });
}

// GET one
function getSensor_reading(sensorId, value) {
  svc.get("/sensor_readings/" + sensorId + "/"+ value, {
    parameters: { description: "Get a sensor_reading" }
  });
}

// LIST all
function listSensor_readings() {
  svc.get("/sensor_readings", {
    parameters: { description: "List sensor_readings" }
  });
}

// Verify exists (by list)
function verifySensor_readingExists(sensorId, value) {
  svc.get("/sensor_readings", {
    callback: function (response) {
      sensor_reading = JSON.parse(response.body);
      for (let i = 0; i < sensor_reading.length; i++) {
        if (sensor_reading[i].sensorId === sensorId && sensor_reading[i].value === value) {
          return pvg.success("Sensor_reading exists");
        }
      }
      return pvg.fail("Expected a sensor_reading to exist but it does not");
    },
    parameters: { description: "Verify sensor_reading with sensorId " + sensorId + " and value " + value + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySensor_readingDoesNotExist(sensorId, value) {
  svc.get("/sensor_readings", {
    callback: function (response) {
      sensor_reading = JSON.parse(response.body);
      for (let i = 0; i < sensor_reading.length; i++) {
        if (sensor_reading[i].sensorId === sensorId && sensor_reading[i].value === value) {
          return pvg.fail("Expected a sensor_reading to not exist but it does");
        }
      }
      return pvg.success("Sensor_reading does not exist");
    },
    parameters: { description: "Verify sensor_reading with sensorId " + sensorId + " and value " + value + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSensor_reading() {
  return bp.EventSet("any-add-sensor_reading", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a sensor_reading");
  });
}
function matchAddSensor_reading(sensorId, value) {
  return bp.EventSet("add-sensor_reading", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a sensor_reading with sensorId " + sensorId + " and value " + value + "";
  });
}
function matchAnyDeleteSensor_reading() {
  return bp.EventSet("any-del-sensor_reading", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a sensor_reading");
  });
}
function matchDeleteSensor_reading(sensorId, value) {
  return bp.EventSet("del-sensor_reading", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a sensor_reading with sensorId " + sensorId + " and value " + value + "";
  });
}

// Wait helpers
function waitForAnySensor_readingAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ sensor_reading\ with\ sensorId\ (.+) and value\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ sensor_reading\ with\ sensorId\ (.+) and value\ (.+)$/);
    return { sensorId: (x)=>x(m[1]), value: (x)=>x(m[2]) };
}
function waitForSensor_readingAdded(sensorId, value) {
  waitFor(matchAddSensor_reading(sensorId, value));
}
function waitForSensor_readingDeleted(sensorId, value) {
  waitFor(matchDeleteSensor_reading(sensorId, value));
}
function waitForAnySensor_readingDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ sensor_reading\ with\ sensorId\ (.+) and value\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ sensor_reading\ with\ sensorId\ (.+) and value\ (.+)$/);
    return { sensorId: (x)=>x(m[1]), value: (x)=>x(m[2]) };
}


/** === Workorder Operations === */

// CREATE
function addWorkorder(description, status) {
  svc.post("/workorders", {
      body: JSON.stringify({ description: description, status: status }),
      parameters: { description: "Add a workorder with description " + description + " and status " + status + "" }
    });
}

// DELETE
function deleteWorkorder(description, status) {
  svc.delete("/workorders/" + description + "/"+ status, {
    parameters: { description: "Delete a workorder with description " + description + " and status " + status + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingWorkorder(description, status) {
  svc.delete("/workorders/" + description + "/"+ status, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a workorder with description " + description + " and status " + status + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingWorkorder(description, status) {
  svc.post("/workorders", {
      body: JSON.stringify({ description: description, status: status }),
      parameters: { description: "Add a workorder with description " + description + " and status " + status + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a workorder with description " + description + " and status " + status + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateWorkorder(description, status) {
  svc.put("/workorders/" + description + "/"+ status, {
      body: JSON.stringify({ description: description, status: status }),
      parameters: { description: "Update a workorder" }
    });
}

// GET one
function getWorkorder(description, status) {
  svc.get("/workorders/" + description + "/"+ status, {
    parameters: { description: "Get a workorder" }
  });
}

// LIST all
function listWorkorders() {
  svc.get("/workorders", {
    parameters: { description: "List workorders" }
  });
}

// Verify exists (by list)
function verifyWorkorderExists(description, status) {
  svc.get("/workorders", {
    callback: function (response) {
      workorder = JSON.parse(response.body);
      for (let i = 0; i < workorder.length; i++) {
        if (workorder[i].description === description && workorder[i].status === status) {
          return pvg.success("Workorder exists");
        }
      }
      return pvg.fail("Expected a workorder to exist but it does not");
    },
    parameters: { description: "Verify workorder with description " + description + " and status " + status + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyWorkorderDoesNotExist(description, status) {
  svc.get("/workorders", {
    callback: function (response) {
      workorder = JSON.parse(response.body);
      for (let i = 0; i < workorder.length; i++) {
        if (workorder[i].description === description && workorder[i].status === status) {
          return pvg.fail("Expected a workorder to not exist but it does");
        }
      }
      return pvg.success("Workorder does not exist");
    },
    parameters: { description: "Verify workorder with description " + description + " and status " + status + " does not exist" }
  });
}

// Match helpers
function matchAnyAddWorkorder() {
  return bp.EventSet("any-add-workorder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a workorder");
  });
}
function matchAddWorkorder(description, status) {
  return bp.EventSet("add-workorder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a workorder with description " + description + " and status " + status + "";
  });
}
function matchAnyDeleteWorkorder() {
  return bp.EventSet("any-del-workorder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a workorder");
  });
}
function matchDeleteWorkorder(description, status) {
  return bp.EventSet("del-workorder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a workorder with description " + description + " and status " + status + "";
  });
}

// Wait helpers
function waitForAnyWorkorderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ workorder\ with\ description\ (.+) and status\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ workorder\ with\ description\ (.+) and status\ (.+)$/);
    return { description: (x)=>x(m[1]), status: (x)=>x(m[2]) };
}
function waitForWorkorderAdded(description, status) {
  waitFor(matchAddWorkorder(description, status));
}
function waitForWorkorderDeleted(description, status) {
  waitFor(matchDeleteWorkorder(description, status));
}
function waitForAnyWorkorderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ workorder\ with\ description\ (.+) and status\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ workorder\ with\ description\ (.+) and status\ (.+)$/);
    return { description: (x)=>x(m[1]), status: (x)=>x(m[2]) };
}

