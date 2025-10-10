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
function addCar(vin, make) {
  svc.post("/cars", {
      body: JSON.stringify({ vin: vin, make: make }),
      parameters: { description: "Add a car with vin " + vin + " and make " + make + "" }
    });
}

// DELETE
function deleteCar(vin, make) {
  svc.delete("/cars/" + vin + "/"+ make, {
    parameters: { description: "Delete a car with vin " + vin + " and make " + make + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCar(vin, make) {
  svc.delete("/cars/" + vin + "/"+ make, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a car with vin " + vin + " and make " + make + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCar(vin, make) {
  svc.post("/cars", {
      body: JSON.stringify({ vin: vin, make: make }),
      parameters: { description: "Add a car with vin " + vin + " and make " + make + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a car with vin " + vin + " and make " + make + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCar(vin, make) {
  svc.put("/cars/" + vin + "/"+ make, {
      body: JSON.stringify({ vin: vin, make: make }),
      parameters: { description: "Update a car" }
    });
}

// GET one
function getCar(vin, make) {
  svc.get("/cars/" + vin + "/"+ make, {
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
function verifyCarExists(vin, make) {
  svc.get("/cars", {
    callback: function (response) {
      car = JSON.parse(response.body);
      for (let i = 0; i < car.length; i++) {
        if (car[i].vin === vin && car[i].make === make) {
          return pvg.success("Car exists");
        }
      }
      return pvg.fail("Expected a car to exist but it does not");
    },
    parameters: { description: "Verify car with vin " + vin + " and make " + make + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCarDoesNotExist(vin, make) {
  svc.get("/cars", {
    callback: function (response) {
      car = JSON.parse(response.body);
      for (let i = 0; i < car.length; i++) {
        if (car[i].vin === vin && car[i].make === make) {
          return pvg.fail("Expected a car to not exist but it does");
        }
      }
      return pvg.success("Car does not exist");
    },
    parameters: { description: "Verify car with vin " + vin + " and make " + make + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCar() {
  return bp.EventSet("any-add-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a car");
  });
}
function matchAddCar(vin, make) {
  return bp.EventSet("add-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a car with vin " + vin + " and make " + make + "";
  });
}
function matchAnyDeleteCar() {
  return bp.EventSet("any-del-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a car");
  });
}
function matchDeleteCar(vin, make) {
  return bp.EventSet("del-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a car with vin " + vin + " and make " + make + "";
  });
}

// Wait helpers
function waitForAnyCarAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ car\ with\ vin\ (.+) and make\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ car\ with\ vin\ (.+) and make\ (.+)$/);
    return { vin: (x)=>x(m[1]), make: (x)=>x(m[2]) };
}
function waitForCarAdded(vin, make) {
  waitFor(matchAddCar(vin, make));
}
function waitForCarDeleted(vin, make) {
  waitFor(matchDeleteCar(vin, make));
}
function waitForAnyCarDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ car\ with\ vin\ (.+) and make\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ car\ with\ vin\ (.+) and make\ (.+)$/);
    return { vin: (x)=>x(m[1]), make: (x)=>x(m[2]) };
}


/** === Chain Operations === */

// CREATE
function addChain(name) {
  svc.post("/chains", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a chain with name " + name + "" }
    });
}

// DELETE
function deleteChain(name) {
  svc.delete("/chains/" + name, {
    parameters: { description: "Delete a chain with name " + name + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingChain(name) {
  svc.delete("/chains/" + name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a chain with name " + name + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingChain(name) {
  svc.post("/chains", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a chain with name " + name + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a chain with name " + name + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateChain(name) {
  svc.put("/chains/" + name, {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Update a chain" }
    });
}

// GET one
function getChain(name) {
  svc.get("/chains/" + name, {
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
function verifyChainExists(name) {
  svc.get("/chains", {
    callback: function (response) {
      chain = JSON.parse(response.body);
      for (let i = 0; i < chain.length; i++) {
        if (chain[i].name === name) {
          return pvg.success("Chain exists");
        }
      }
      return pvg.fail("Expected a chain to exist but it does not");
    },
    parameters: { description: "Verify chain with name " + name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyChainDoesNotExist(name) {
  svc.get("/chains", {
    callback: function (response) {
      chain = JSON.parse(response.body);
      for (let i = 0; i < chain.length; i++) {
        if (chain[i].name === name) {
          return pvg.fail("Expected a chain to not exist but it does");
        }
      }
      return pvg.success("Chain does not exist");
    },
    parameters: { description: "Verify chain with name " + name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddChain() {
  return bp.EventSet("any-add-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a chain");
  });
}
function matchAddChain(name) {
  return bp.EventSet("add-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a chain with name " + name + "";
  });
}
function matchAnyDeleteChain() {
  return bp.EventSet("any-del-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a chain");
  });
}
function matchDeleteChain(name) {
  return bp.EventSet("del-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a chain with name " + name + "";
  });
}

// Wait helpers
function waitForAnyChainAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ chain\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ chain\ with\ name\ (.+)$/);
    return { name: (x)=>x(m[1]) };
}
function waitForChainAdded(name) {
  waitFor(matchAddChain(name));
}
function waitForChainDeleted(name) {
  waitFor(matchDeleteChain(name));
}
function waitForAnyChainDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ chain\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ chain\ with\ name\ (.+)$/);
    return { name: (x)=>x(m[1]) };
}


/** === Customer Operations === */

// CREATE
function addCustomer(name) {
  svc.post("/customers", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a customer with name " + name + "" }
    });
}

// DELETE
function deleteCustomer(name) {
  svc.delete("/customers/" + name, {
    parameters: { description: "Delete a customer with name " + name + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCustomer(name) {
  svc.delete("/customers/" + name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a customer with name " + name + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCustomer(name) {
  svc.post("/customers", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a customer with name " + name + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a customer with name " + name + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCustomer(name) {
  svc.put("/customers/" + name, {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Update a customer" }
    });
}

// GET one
function getCustomer(name) {
  svc.get("/customers/" + name, {
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
function verifyCustomerExists(name) {
  svc.get("/customers", {
    callback: function (response) {
      customer = JSON.parse(response.body);
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].name === name) {
          return pvg.success("Customer exists");
        }
      }
      return pvg.fail("Expected a customer to exist but it does not");
    },
    parameters: { description: "Verify customer with name " + name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCustomerDoesNotExist(name) {
  svc.get("/customers", {
    callback: function (response) {
      customer = JSON.parse(response.body);
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].name === name) {
          return pvg.fail("Expected a customer to not exist but it does");
        }
      }
      return pvg.success("Customer does not exist");
    },
    parameters: { description: "Verify customer with name " + name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCustomer() {
  return bp.EventSet("any-add-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a customer");
  });
}
function matchAddCustomer(name) {
  return bp.EventSet("add-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a customer with name " + name + "";
  });
}
function matchAnyDeleteCustomer() {
  return bp.EventSet("any-del-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a customer");
  });
}
function matchDeleteCustomer(name) {
  return bp.EventSet("del-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a customer with name " + name + "";
  });
}

// Wait helpers
function waitForAnyCustomerAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ customer\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ customer\ with\ name\ (.+)$/);
    return { name: (x)=>x(m[1]) };
}
function waitForCustomerAdded(name) {
  waitFor(matchAddCustomer(name));
}
function waitForCustomerDeleted(name) {
  waitFor(matchDeleteCustomer(name));
}
function waitForAnyCustomerDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ customer\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ customer\ with\ name\ (.+)$/);
    return { name: (x)=>x(m[1]) };
}


/** === Garage Operations === */

// CREATE
function addGarage(location) {
  svc.post("/garages", {
      body: JSON.stringify({ location: location }),
      parameters: { description: "Add a garage with location " + location + "" }
    });
}

// DELETE
function deleteGarage(location) {
  svc.delete("/garages/" + location, {
    parameters: { description: "Delete a garage with location " + location + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGarage(location) {
  svc.delete("/garages/" + location, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a garage with location " + location + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGarage(location) {
  svc.post("/garages", {
      body: JSON.stringify({ location: location }),
      parameters: { description: "Add a garage with location " + location + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a garage with location " + location + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateGarage(location) {
  svc.put("/garages/" + location, {
      body: JSON.stringify({ location: location }),
      parameters: { description: "Update a garage" }
    });
}

// GET one
function getGarage(location) {
  svc.get("/garages/" + location, {
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
function verifyGarageExists(location) {
  svc.get("/garages", {
    callback: function (response) {
      garage = JSON.parse(response.body);
      for (let i = 0; i < garage.length; i++) {
        if (garage[i].location === location) {
          return pvg.success("Garage exists");
        }
      }
      return pvg.fail("Expected a garage to exist but it does not");
    },
    parameters: { description: "Verify garage with location " + location + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyGarageDoesNotExist(location) {
  svc.get("/garages", {
    callback: function (response) {
      garage = JSON.parse(response.body);
      for (let i = 0; i < garage.length; i++) {
        if (garage[i].location === location) {
          return pvg.fail("Expected a garage to not exist but it does");
        }
      }
      return pvg.success("Garage does not exist");
    },
    parameters: { description: "Verify garage with location " + location + " does not exist" }
  });
}

// Match helpers
function matchAnyAddGarage() {
  return bp.EventSet("any-add-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a garage");
  });
}
function matchAddGarage(location) {
  return bp.EventSet("add-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a garage with location " + location + "";
  });
}
function matchAnyDeleteGarage() {
  return bp.EventSet("any-del-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a garage");
  });
}
function matchDeleteGarage(location) {
  return bp.EventSet("del-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a garage with location " + location + "";
  });
}

// Wait helpers
function waitForAnyGarageAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ garage\ with\ location\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ garage\ with\ location\ (.+)$/);
    return { location: (x)=>x(m[1]) };
}
function waitForGarageAdded(location) {
  waitFor(matchAddGarage(location));
}
function waitForGarageDeleted(location) {
  waitFor(matchDeleteGarage(location));
}
function waitForAnyGarageDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ garage\ with\ location\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ garage\ with\ location\ (.+)$/);
    return { location: (x)=>x(m[1]) };
}


/** === Periodic_maintenance Operations === */

// CREATE
function addPeriodic_maintenance(description) {
  svc.post("/periodic_maintenance", {
      body: JSON.stringify({ description: description }),
      parameters: { description: "Add a periodic_maintenance with description " + description + "" }
    });
}

// DELETE
function deletePeriodic_maintenance(description) {
  svc.delete("/periodic_maintenance/" + description, {
    parameters: { description: "Delete a periodic_maintenance with description " + description + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPeriodic_maintenance(description) {
  svc.delete("/periodic_maintenance/" + description, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a periodic_maintenance with description " + description + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPeriodic_maintenance(description) {
  svc.post("/periodic_maintenance", {
      body: JSON.stringify({ description: description }),
      parameters: { description: "Add a periodic_maintenance with description " + description + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a periodic_maintenance with description " + description + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePeriodic_maintenance(description) {
  svc.put("/periodic_maintenance/" + description, {
      body: JSON.stringify({ description: description }),
      parameters: { description: "Update a periodic_maintenance" }
    });
}

// GET one
function getPeriodic_maintenance(description) {
  svc.get("/periodic_maintenance/" + description, {
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
function verifyPeriodic_maintenanceExists(description) {
  svc.get("/periodic_maintenance", {
    callback: function (response) {
      periodic_maintenance = JSON.parse(response.body);
      for (let i = 0; i < periodic_maintenance.length; i++) {
        if (periodic_maintenance[i].description === description) {
          return pvg.success("Periodic_maintenance exists");
        }
      }
      return pvg.fail("Expected a periodic_maintenance to exist but it does not");
    },
    parameters: { description: "Verify periodic_maintenance with description " + description + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPeriodic_maintenanceDoesNotExist(description) {
  svc.get("/periodic_maintenance", {
    callback: function (response) {
      periodic_maintenance = JSON.parse(response.body);
      for (let i = 0; i < periodic_maintenance.length; i++) {
        if (periodic_maintenance[i].description === description) {
          return pvg.fail("Expected a periodic_maintenance to not exist but it does");
        }
      }
      return pvg.success("Periodic_maintenance does not exist");
    },
    parameters: { description: "Verify periodic_maintenance with description " + description + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPeriodic_maintenance() {
  return bp.EventSet("any-add-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a periodic_maintenance");
  });
}
function matchAddPeriodic_maintenance(description) {
  return bp.EventSet("add-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a periodic_maintenance with description " + description + "";
  });
}
function matchAnyDeletePeriodic_maintenance() {
  return bp.EventSet("any-del-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a periodic_maintenance");
  });
}
function matchDeletePeriodic_maintenance(description) {
  return bp.EventSet("del-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a periodic_maintenance with description " + description + "";
  });
}

// Wait helpers
function waitForAnyPeriodic_maintenanceAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ periodic_maintenance\ with\ description\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ periodic_maintenance\ with\ description\ (.+)$/);
    return { description: (x)=>x(m[1]) };
}
function waitForPeriodic_maintenanceAdded(description) {
  waitFor(matchAddPeriodic_maintenance(description));
}
function waitForPeriodic_maintenanceDeleted(description) {
  waitFor(matchDeletePeriodic_maintenance(description));
}
function waitForAnyPeriodic_maintenanceDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ periodic_maintenance\ with\ description\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ periodic_maintenance\ with\ description\ (.+)$/);
    return { description: (x)=>x(m[1]) };
}


/** === Repair_order Operations === */

// CREATE
function addRepair_order(description) {
  svc.post("/repair_orders", {
      body: JSON.stringify({ description: description }),
      parameters: { description: "Add a repair_order with description " + description + "" }
    });
}

// DELETE
function deleteRepair_order(description) {
  svc.delete("/repair_orders/" + description, {
    parameters: { description: "Delete a repair_order with description " + description + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepair_order(description) {
  svc.delete("/repair_orders/" + description, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repair_order with description " + description + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepair_order(description) {
  svc.post("/repair_orders", {
      body: JSON.stringify({ description: description }),
      parameters: { description: "Add a repair_order with description " + description + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repair_order with description " + description + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRepair_order(description) {
  svc.put("/repair_orders/" + description, {
      body: JSON.stringify({ description: description }),
      parameters: { description: "Update a repair_order" }
    });
}

// GET one
function getRepair_order(description) {
  svc.get("/repair_orders/" + description, {
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
function verifyRepair_orderExists(description) {
  svc.get("/repair_orders", {
    callback: function (response) {
      repair_order = JSON.parse(response.body);
      for (let i = 0; i < repair_order.length; i++) {
        if (repair_order[i].description === description) {
          return pvg.success("Repair_order exists");
        }
      }
      return pvg.fail("Expected a repair_order to exist but it does not");
    },
    parameters: { description: "Verify repair_order with description " + description + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepair_orderDoesNotExist(description) {
  svc.get("/repair_orders", {
    callback: function (response) {
      repair_order = JSON.parse(response.body);
      for (let i = 0; i < repair_order.length; i++) {
        if (repair_order[i].description === description) {
          return pvg.fail("Expected a repair_order to not exist but it does");
        }
      }
      return pvg.success("Repair_order does not exist");
    },
    parameters: { description: "Verify repair_order with description " + description + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepair_order() {
  return bp.EventSet("any-add-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repair_order");
  });
}
function matchAddRepair_order(description) {
  return bp.EventSet("add-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repair_order with description " + description + "";
  });
}
function matchAnyDeleteRepair_order() {
  return bp.EventSet("any-del-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repair_order");
  });
}
function matchDeleteRepair_order(description) {
  return bp.EventSet("del-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repair_order with description " + description + "";
  });
}

// Wait helpers
function waitForAnyRepair_orderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repair_order\ with\ description\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repair_order\ with\ description\ (.+)$/);
    return { description: (x)=>x(m[1]) };
}
function waitForRepair_orderAdded(description) {
  waitFor(matchAddRepair_order(description));
}
function waitForRepair_orderDeleted(description) {
  waitFor(matchDeleteRepair_order(description));
}
function waitForAnyRepair_orderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repair_order\ with\ description\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repair_order\ with\ description\ (.+)$/);
    return { description: (x)=>x(m[1]) };
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

