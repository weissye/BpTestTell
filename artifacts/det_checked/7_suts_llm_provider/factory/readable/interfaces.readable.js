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
function addMachine(id) {
  svc.post("/machines", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a machine with id " + id + "" }
    });
}

// DELETE
function deleteMachine(id) {
  svc.delete("/machines/" + id, {
    parameters: { description: "Delete a machine with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMachine(id) {
  svc.delete("/machines/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a machine with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMachine(id) {
  svc.post("/machines", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a machine with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a machine with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMachine(id) {
  svc.put("/machines/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a machine" }
    });
}

// GET one
function getMachine(id) {
  svc.get("/machines/" + id, {
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
function verifyMachineExists(id) {
  svc.get("/machines", {
    callback: function (response) {
      machine = JSON.parse(response.body);
      for (let i = 0; i < machine.length; i++) {
        if (machine[i].id === id) {
          return pvg.success("Machine exists");
        }
      }
      return pvg.fail("Expected a machine to exist but it does not");
    },
    parameters: { description: "Verify machine with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMachineDoesNotExist(id) {
  svc.get("/machines", {
    callback: function (response) {
      machine = JSON.parse(response.body);
      for (let i = 0; i < machine.length; i++) {
        if (machine[i].id === id) {
          return pvg.fail("Expected a machine to not exist but it does");
        }
      }
      return pvg.success("Machine does not exist");
    },
    parameters: { description: "Verify machine with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMachine() {
  return bp.EventSet("any-add-machine", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a machine");
  });
}
function matchAddMachine(id) {
  return bp.EventSet("add-machine", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a machine with id " + id + "";
  });
}
function matchAnyDeleteMachine() {
  return bp.EventSet("any-del-machine", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a machine");
  });
}
function matchDeleteMachine(id) {
  return bp.EventSet("del-machine", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a machine with id " + id + "";
  });
}

// Wait helpers
function waitForAnyMachineAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ machine\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ machine\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMachineAdded(id) {
  waitFor(matchAddMachine(id));
}
function waitForMachineDeleted(id) {
  waitFor(matchDeleteMachine(id));
}
function waitForAnyMachineDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ machine\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ machine\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Maintenance_ticket Operations === */

// CREATE
function addMaintenance_ticket(id) {
  svc.post("/maintenance_tickets", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a maintenance_ticket with id " + id + "" }
    });
}

// DELETE
function deleteMaintenance_ticket(id) {
  svc.delete("/maintenance_tickets/" + id, {
    parameters: { description: "Delete a maintenance_ticket with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMaintenance_ticket(id) {
  svc.delete("/maintenance_tickets/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a maintenance_ticket with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMaintenance_ticket(id) {
  svc.post("/maintenance_tickets", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a maintenance_ticket with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a maintenance_ticket with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMaintenance_ticket(id) {
  svc.put("/maintenance_tickets/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a maintenance_ticket" }
    });
}

// GET one
function getMaintenance_ticket(id) {
  svc.get("/maintenance_tickets/" + id, {
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
function verifyMaintenance_ticketExists(id) {
  svc.get("/maintenance_tickets", {
    callback: function (response) {
      maintenance_ticket = JSON.parse(response.body);
      for (let i = 0; i < maintenance_ticket.length; i++) {
        if (maintenance_ticket[i].id === id) {
          return pvg.success("Maintenance_ticket exists");
        }
      }
      return pvg.fail("Expected a maintenance_ticket to exist but it does not");
    },
    parameters: { description: "Verify maintenance_ticket with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMaintenance_ticketDoesNotExist(id) {
  svc.get("/maintenance_tickets", {
    callback: function (response) {
      maintenance_ticket = JSON.parse(response.body);
      for (let i = 0; i < maintenance_ticket.length; i++) {
        if (maintenance_ticket[i].id === id) {
          return pvg.fail("Expected a maintenance_ticket to not exist but it does");
        }
      }
      return pvg.success("Maintenance_ticket does not exist");
    },
    parameters: { description: "Verify maintenance_ticket with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMaintenance_ticket() {
  return bp.EventSet("any-add-maintenance_ticket", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a maintenance_ticket");
  });
}
function matchAddMaintenance_ticket(id) {
  return bp.EventSet("add-maintenance_ticket", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a maintenance_ticket with id " + id + "";
  });
}
function matchAnyDeleteMaintenance_ticket() {
  return bp.EventSet("any-del-maintenance_ticket", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a maintenance_ticket");
  });
}
function matchDeleteMaintenance_ticket(id) {
  return bp.EventSet("del-maintenance_ticket", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a maintenance_ticket with id " + id + "";
  });
}

// Wait helpers
function waitForAnyMaintenance_ticketAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ maintenance_ticket\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ maintenance_ticket\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMaintenance_ticketAdded(id) {
  waitFor(matchAddMaintenance_ticket(id));
}
function waitForMaintenance_ticketDeleted(id) {
  waitFor(matchDeleteMaintenance_ticket(id));
}
function waitForAnyMaintenance_ticketDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ maintenance_ticket\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ maintenance_ticket\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
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
function addSensor_reading(id) {
  svc.post("/sensor_readings", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a sensor_reading with id " + id + "" }
    });
}

// DELETE
function deleteSensor_reading(id) {
  svc.delete("/sensor_readings/" + id, {
    parameters: { description: "Delete a sensor_reading with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSensor_reading(id) {
  svc.delete("/sensor_readings/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a sensor_reading with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSensor_reading(id) {
  svc.post("/sensor_readings", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a sensor_reading with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a sensor_reading with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateSensor_reading(id) {
  svc.put("/sensor_readings/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a sensor_reading" }
    });
}

// GET one
function getSensor_reading(id) {
  svc.get("/sensor_readings/" + id, {
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
function verifySensor_readingExists(id) {
  svc.get("/sensor_readings", {
    callback: function (response) {
      sensor_reading = JSON.parse(response.body);
      for (let i = 0; i < sensor_reading.length; i++) {
        if (sensor_reading[i].id === id) {
          return pvg.success("Sensor_reading exists");
        }
      }
      return pvg.fail("Expected a sensor_reading to exist but it does not");
    },
    parameters: { description: "Verify sensor_reading with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySensor_readingDoesNotExist(id) {
  svc.get("/sensor_readings", {
    callback: function (response) {
      sensor_reading = JSON.parse(response.body);
      for (let i = 0; i < sensor_reading.length; i++) {
        if (sensor_reading[i].id === id) {
          return pvg.fail("Expected a sensor_reading to not exist but it does");
        }
      }
      return pvg.success("Sensor_reading does not exist");
    },
    parameters: { description: "Verify sensor_reading with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSensor_reading() {
  return bp.EventSet("any-add-sensor_reading", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a sensor_reading");
  });
}
function matchAddSensor_reading(id) {
  return bp.EventSet("add-sensor_reading", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a sensor_reading with id " + id + "";
  });
}
function matchAnyDeleteSensor_reading() {
  return bp.EventSet("any-del-sensor_reading", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a sensor_reading");
  });
}
function matchDeleteSensor_reading(id) {
  return bp.EventSet("del-sensor_reading", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a sensor_reading with id " + id + "";
  });
}

// Wait helpers
function waitForAnySensor_readingAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ sensor_reading\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ sensor_reading\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSensor_readingAdded(id) {
  waitFor(matchAddSensor_reading(id));
}
function waitForSensor_readingDeleted(id) {
  waitFor(matchDeleteSensor_reading(id));
}
function waitForAnySensor_readingDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ sensor_reading\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ sensor_reading\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Workorder Operations === */

// CREATE
function addWorkorder(id) {
  svc.post("/workorders", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a workorder with id " + id + "" }
    });
}

// DELETE
function deleteWorkorder(id) {
  svc.delete("/workorders/" + id, {
    parameters: { description: "Delete a workorder with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingWorkorder(id) {
  svc.delete("/workorders/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a workorder with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingWorkorder(id) {
  svc.post("/workorders", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a workorder with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a workorder with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateWorkorder(id) {
  svc.put("/workorders/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a workorder" }
    });
}

// GET one
function getWorkorder(id) {
  svc.get("/workorders/" + id, {
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
function verifyWorkorderExists(id) {
  svc.get("/workorders", {
    callback: function (response) {
      workorder = JSON.parse(response.body);
      for (let i = 0; i < workorder.length; i++) {
        if (workorder[i].id === id) {
          return pvg.success("Workorder exists");
        }
      }
      return pvg.fail("Expected a workorder to exist but it does not");
    },
    parameters: { description: "Verify workorder with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyWorkorderDoesNotExist(id) {
  svc.get("/workorders", {
    callback: function (response) {
      workorder = JSON.parse(response.body);
      for (let i = 0; i < workorder.length; i++) {
        if (workorder[i].id === id) {
          return pvg.fail("Expected a workorder to not exist but it does");
        }
      }
      return pvg.success("Workorder does not exist");
    },
    parameters: { description: "Verify workorder with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddWorkorder() {
  return bp.EventSet("any-add-workorder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a workorder");
  });
}
function matchAddWorkorder(id) {
  return bp.EventSet("add-workorder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a workorder with id " + id + "";
  });
}
function matchAnyDeleteWorkorder() {
  return bp.EventSet("any-del-workorder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a workorder");
  });
}
function matchDeleteWorkorder(id) {
  return bp.EventSet("del-workorder", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a workorder with id " + id + "";
  });
}

// Wait helpers
function waitForAnyWorkorderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ workorder\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ workorder\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForWorkorderAdded(id) {
  waitFor(matchAddWorkorder(id));
}
function waitForWorkorderDeleted(id) {
  waitFor(matchDeleteWorkorder(id));
}
function waitForAnyWorkorderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ workorder\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ workorder\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

