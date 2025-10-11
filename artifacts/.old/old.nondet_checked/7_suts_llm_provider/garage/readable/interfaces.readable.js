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

/** === Car Operations === */

// CREATE
function addCar(id) {
  svc.post("/cars", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a car with id " + id + "" }
    });
}

// DELETE
function deleteCar(id) {
  svc.delete("/cars/" + id, {
    parameters: { description: "Delete a car with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCar(id) {
  svc.delete("/cars/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a car with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCar(id) {
  svc.post("/cars", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a car with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a car with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCar(id) {
  svc.put("/cars/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a car" }
    });
}

// GET one
function getCar(id) {
  svc.get("/cars/" + id, {
    parameters: { description: "Get a car" }
  });
}

// LIST all
function listCars() {
  svc.get("/cars", {
    parameters: { description: "List cars" }
  });
}

// Verify exists (by list)
function verifyCarExists(id) {
  svc.get("/cars", {
    callback: function (response) {
      car = JSON.parse(response.body);
      for (let i = 0; i < car.length; i++) {
        if (car[i].id === id) {
          return pvg.success("Car exists");
        }
      }
      return pvg.fail("Expected a car to exist but it does not");
    },
    parameters: { description: "Verify car with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCarDoesNotExist(id) {
  svc.get("/cars", {
    callback: function (response) {
      car = JSON.parse(response.body);
      for (let i = 0; i < car.length; i++) {
        if (car[i].id === id) {
          return pvg.fail("Expected a car to not exist but it does");
        }
      }
      return pvg.success("Car does not exist");
    },
    parameters: { description: "Verify car with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCar() {
  return bp.EventSet("any-add-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a car");
  });
}
function matchAddCar(id) {
  return bp.EventSet("add-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a car with id " + id + "";
  });
}
function matchAnyDeleteCar() {
  return bp.EventSet("any-del-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a car");
  });
}
function matchDeleteCar(id) {
  return bp.EventSet("del-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a car with id " + id + "";
  });
}

// Wait helpers
function waitForAnyCarAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ car\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ car\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCarAdded(id) {
  waitFor(matchAddCar(id));
}
function waitForCarDeleted(id) {
  waitFor(matchDeleteCar(id));
}
function waitForAnyCarDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ car\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ car\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Chain Operations === */

// CREATE
function addChain(id) {
  svc.post("/chains", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a chain with id " + id + "" }
    });
}

// DELETE
function deleteChain(id) {
  svc.delete("/chains/" + id, {
    parameters: { description: "Delete a chain with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingChain(id) {
  svc.delete("/chains/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a chain with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingChain(id) {
  svc.post("/chains", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a chain with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a chain with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateChain(id) {
  svc.put("/chains/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a chain" }
    });
}

// GET one
function getChain(id) {
  svc.get("/chains/" + id, {
    parameters: { description: "Get a chain" }
  });
}

// LIST all
function listChains() {
  svc.get("/chains", {
    parameters: { description: "List chains" }
  });
}

// Verify exists (by list)
function verifyChainExists(id) {
  svc.get("/chains", {
    callback: function (response) {
      chain = JSON.parse(response.body);
      for (let i = 0; i < chain.length; i++) {
        if (chain[i].id === id) {
          return pvg.success("Chain exists");
        }
      }
      return pvg.fail("Expected a chain to exist but it does not");
    },
    parameters: { description: "Verify chain with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyChainDoesNotExist(id) {
  svc.get("/chains", {
    callback: function (response) {
      chain = JSON.parse(response.body);
      for (let i = 0; i < chain.length; i++) {
        if (chain[i].id === id) {
          return pvg.fail("Expected a chain to not exist but it does");
        }
      }
      return pvg.success("Chain does not exist");
    },
    parameters: { description: "Verify chain with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddChain() {
  return bp.EventSet("any-add-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a chain");
  });
}
function matchAddChain(id) {
  return bp.EventSet("add-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a chain with id " + id + "";
  });
}
function matchAnyDeleteChain() {
  return bp.EventSet("any-del-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a chain");
  });
}
function matchDeleteChain(id) {
  return bp.EventSet("del-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a chain with id " + id + "";
  });
}

// Wait helpers
function waitForAnyChainAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ chain\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ chain\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForChainAdded(id) {
  waitFor(matchAddChain(id));
}
function waitForChainDeleted(id) {
  waitFor(matchDeleteChain(id));
}
function waitForAnyChainDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ chain\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ chain\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Customer Operations === */

// CREATE
function addCustomer(id) {
  svc.post("/customers", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a customer with id " + id + "" }
    });
}

// DELETE
function deleteCustomer(id) {
  svc.delete("/customers/" + id, {
    parameters: { description: "Delete a customer with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCustomer(id) {
  svc.delete("/customers/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a customer with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCustomer(id) {
  svc.post("/customers", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a customer with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a customer with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCustomer(id) {
  svc.put("/customers/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a customer" }
    });
}

// GET one
function getCustomer(id) {
  svc.get("/customers/" + id, {
    parameters: { description: "Get a customer" }
  });
}

// LIST all
function listCustomers() {
  svc.get("/customers", {
    parameters: { description: "List customers" }
  });
}

// Verify exists (by list)
function verifyCustomerExists(id) {
  svc.get("/customers", {
    callback: function (response) {
      customer = JSON.parse(response.body);
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].id === id) {
          return pvg.success("Customer exists");
        }
      }
      return pvg.fail("Expected a customer to exist but it does not");
    },
    parameters: { description: "Verify customer with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCustomerDoesNotExist(id) {
  svc.get("/customers", {
    callback: function (response) {
      customer = JSON.parse(response.body);
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].id === id) {
          return pvg.fail("Expected a customer to not exist but it does");
        }
      }
      return pvg.success("Customer does not exist");
    },
    parameters: { description: "Verify customer with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCustomer() {
  return bp.EventSet("any-add-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a customer");
  });
}
function matchAddCustomer(id) {
  return bp.EventSet("add-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a customer with id " + id + "";
  });
}
function matchAnyDeleteCustomer() {
  return bp.EventSet("any-del-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a customer");
  });
}
function matchDeleteCustomer(id) {
  return bp.EventSet("del-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a customer with id " + id + "";
  });
}

// Wait helpers
function waitForAnyCustomerAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ customer\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ customer\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCustomerAdded(id) {
  waitFor(matchAddCustomer(id));
}
function waitForCustomerDeleted(id) {
  waitFor(matchDeleteCustomer(id));
}
function waitForAnyCustomerDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ customer\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ customer\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Garage Operations === */

// CREATE
function addGarage(id) {
  svc.post("/garages", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a garage with id " + id + "" }
    });
}

// DELETE
function deleteGarage(id) {
  svc.delete("/garages/" + id, {
    parameters: { description: "Delete a garage with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGarage(id) {
  svc.delete("/garages/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a garage with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGarage(id) {
  svc.post("/garages", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a garage with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a garage with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateGarage(id) {
  svc.put("/garages/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a garage" }
    });
}

// GET one
function getGarage(id) {
  svc.get("/garages/" + id, {
    parameters: { description: "Get a garage" }
  });
}

// LIST all
function listGarages() {
  svc.get("/garages", {
    parameters: { description: "List garages" }
  });
}

// Verify exists (by list)
function verifyGarageExists(id) {
  svc.get("/garages", {
    callback: function (response) {
      garage = JSON.parse(response.body);
      for (let i = 0; i < garage.length; i++) {
        if (garage[i].id === id) {
          return pvg.success("Garage exists");
        }
      }
      return pvg.fail("Expected a garage to exist but it does not");
    },
    parameters: { description: "Verify garage with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyGarageDoesNotExist(id) {
  svc.get("/garages", {
    callback: function (response) {
      garage = JSON.parse(response.body);
      for (let i = 0; i < garage.length; i++) {
        if (garage[i].id === id) {
          return pvg.fail("Expected a garage to not exist but it does");
        }
      }
      return pvg.success("Garage does not exist");
    },
    parameters: { description: "Verify garage with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddGarage() {
  return bp.EventSet("any-add-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a garage");
  });
}
function matchAddGarage(id) {
  return bp.EventSet("add-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a garage with id " + id + "";
  });
}
function matchAnyDeleteGarage() {
  return bp.EventSet("any-del-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a garage");
  });
}
function matchDeleteGarage(id) {
  return bp.EventSet("del-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a garage with id " + id + "";
  });
}

// Wait helpers
function waitForAnyGarageAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ garage\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ garage\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForGarageAdded(id) {
  waitFor(matchAddGarage(id));
}
function waitForGarageDeleted(id) {
  waitFor(matchDeleteGarage(id));
}
function waitForAnyGarageDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ garage\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ garage\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Periodic_maintenance Operations === */

// CREATE
function addPeriodic_maintenance(id) {
  svc.post("/periodic_maintenance", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a periodic_maintenance with id " + id + "" }
    });
}

// DELETE
function deletePeriodic_maintenance(id) {
  svc.delete("/periodic_maintenance/" + id, {
    parameters: { description: "Delete a periodic_maintenance with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPeriodic_maintenance(id) {
  svc.delete("/periodic_maintenance/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a periodic_maintenance with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPeriodic_maintenance(id) {
  svc.post("/periodic_maintenance", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a periodic_maintenance with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a periodic_maintenance with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePeriodic_maintenance(id) {
  svc.put("/periodic_maintenance/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a periodic_maintenance" }
    });
}

// GET one
function getPeriodic_maintenance(id) {
  svc.get("/periodic_maintenance/" + id, {
    parameters: { description: "Get a periodic_maintenance" }
  });
}

// LIST all
function listPeriodic_maintenance() {
  svc.get("/periodic_maintenance", {
    parameters: { description: "List periodic_maintenance" }
  });
}

// Verify exists (by list)
function verifyPeriodic_maintenanceExists(id) {
  svc.get("/periodic_maintenance", {
    callback: function (response) {
      periodic_maintenance = JSON.parse(response.body);
      for (let i = 0; i < periodic_maintenance.length; i++) {
        if (periodic_maintenance[i].id === id) {
          return pvg.success("Periodic_maintenance exists");
        }
      }
      return pvg.fail("Expected a periodic_maintenance to exist but it does not");
    },
    parameters: { description: "Verify periodic_maintenance with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPeriodic_maintenanceDoesNotExist(id) {
  svc.get("/periodic_maintenance", {
    callback: function (response) {
      periodic_maintenance = JSON.parse(response.body);
      for (let i = 0; i < periodic_maintenance.length; i++) {
        if (periodic_maintenance[i].id === id) {
          return pvg.fail("Expected a periodic_maintenance to not exist but it does");
        }
      }
      return pvg.success("Periodic_maintenance does not exist");
    },
    parameters: { description: "Verify periodic_maintenance with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPeriodic_maintenance() {
  return bp.EventSet("any-add-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a periodic_maintenance");
  });
}
function matchAddPeriodic_maintenance(id) {
  return bp.EventSet("add-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a periodic_maintenance with id " + id + "";
  });
}
function matchAnyDeletePeriodic_maintenance() {
  return bp.EventSet("any-del-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a periodic_maintenance");
  });
}
function matchDeletePeriodic_maintenance(id) {
  return bp.EventSet("del-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a periodic_maintenance with id " + id + "";
  });
}

// Wait helpers
function waitForAnyPeriodic_maintenanceAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ periodic_maintenance\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ periodic_maintenance\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPeriodic_maintenanceAdded(id) {
  waitFor(matchAddPeriodic_maintenance(id));
}
function waitForPeriodic_maintenanceDeleted(id) {
  waitFor(matchDeletePeriodic_maintenance(id));
}
function waitForAnyPeriodic_maintenanceDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ periodic_maintenance\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ periodic_maintenance\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Repair_order Operations === */

// CREATE
function addRepair_order(id) {
  svc.post("/repair_orders", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a repair_order with id " + id + "" }
    });
}

// DELETE
function deleteRepair_order(id) {
  svc.delete("/repair_orders/" + id, {
    parameters: { description: "Delete a repair_order with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepair_order(id) {
  svc.delete("/repair_orders/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repair_order with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepair_order(id) {
  svc.post("/repair_orders", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a repair_order with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repair_order with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRepair_order(id) {
  svc.put("/repair_orders/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a repair_order" }
    });
}

// GET one
function getRepair_order(id) {
  svc.get("/repair_orders/" + id, {
    parameters: { description: "Get a repair_order" }
  });
}

// LIST all
function listRepair_orders() {
  svc.get("/repair_orders", {
    parameters: { description: "List repair_orders" }
  });
}

// Verify exists (by list)
function verifyRepair_orderExists(id) {
  svc.get("/repair_orders", {
    callback: function (response) {
      repair_order = JSON.parse(response.body);
      for (let i = 0; i < repair_order.length; i++) {
        if (repair_order[i].id === id) {
          return pvg.success("Repair_order exists");
        }
      }
      return pvg.fail("Expected a repair_order to exist but it does not");
    },
    parameters: { description: "Verify repair_order with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepair_orderDoesNotExist(id) {
  svc.get("/repair_orders", {
    callback: function (response) {
      repair_order = JSON.parse(response.body);
      for (let i = 0; i < repair_order.length; i++) {
        if (repair_order[i].id === id) {
          return pvg.fail("Expected a repair_order to not exist but it does");
        }
      }
      return pvg.success("Repair_order does not exist");
    },
    parameters: { description: "Verify repair_order with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepair_order() {
  return bp.EventSet("any-add-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repair_order");
  });
}
function matchAddRepair_order(id) {
  return bp.EventSet("add-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repair_order with id " + id + "";
  });
}
function matchAnyDeleteRepair_order() {
  return bp.EventSet("any-del-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repair_order");
  });
}
function matchDeleteRepair_order(id) {
  return bp.EventSet("del-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repair_order with id " + id + "";
  });
}

// Wait helpers
function waitForAnyRepair_orderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repair_order\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repair_order\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRepair_orderAdded(id) {
  waitFor(matchAddRepair_order(id));
}
function waitForRepair_orderDeleted(id) {
  waitFor(matchDeleteRepair_order(id));
}
function waitForAnyRepair_orderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repair_order\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repair_order\ with\ id\ (.+)$/);
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

