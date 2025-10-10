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
function addCar(vin) {
  svc.post("/cars", {
      body: JSON.stringify({ vin: vin }),
      parameters: { description: "Add a car with vin " + vin + "" }
    });
}

// DELETE
function deleteCar(vin) {
  svc.delete("/cars/" + vin, {
    parameters: { description: "Delete a car with vin " + vin + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCar(vin) {
  svc.delete("/cars/" + vin, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a car with vin " + vin + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCar(vin) {
  svc.post("/cars", {
      body: JSON.stringify({ vin: vin }),
      parameters: { description: "Add a car with vin " + vin + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a car with vin " + vin + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCar(vin) {
  svc.put("/cars/" + vin, {
      body: JSON.stringify({ vin: vin }),
      parameters: { description: "Update a car" }
    });
}

// GET one
function getCar(vin) {
  svc.get("/cars/" + vin, {
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
function verifyCarExists(vin) {
  svc.get("/cars", {
    callback: function (response) {
      car = JSON.parse(response.body);
      for (let i = 0; i < car.length; i++) {
        if (car[i].vin === vin) {
          return pvg.success("Car exists");
        }
      }
      return pvg.fail("Expected a car to exist but it does not");
    },
    parameters: { description: "Verify car with vin " + vin + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCarDoesNotExist(vin) {
  svc.get("/cars", {
    callback: function (response) {
      car = JSON.parse(response.body);
      for (let i = 0; i < car.length; i++) {
        if (car[i].vin === vin) {
          return pvg.fail("Expected a car to not exist but it does");
        }
      }
      return pvg.success("Car does not exist");
    },
    parameters: { description: "Verify car with vin " + vin + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCar() {
  return bp.EventSet("any-add-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a car");
  });
}
function matchAddCar(vin) {
  return bp.EventSet("add-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a car with vin " + vin + "";
  });
}
function matchAnyDeleteCar() {
  return bp.EventSet("any-del-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a car");
  });
}
function matchDeleteCar(vin) {
  return bp.EventSet("del-car", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a car with vin " + vin + "";
  });
}

// Wait helpers
function waitForAnyCarAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ car\ with\ vin\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ car\ with\ vin\ (.+)$/);
    return { vin: (x)=>x(m[1]) };
}
function waitForCarAdded(vin) {
  waitFor(matchAddCar(vin));
}
function waitForCarDeleted(vin) {
  waitFor(matchDeleteCar(vin));
}
function waitForAnyCarDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ car\ with\ vin\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ car\ with\ vin\ (.+)$/);
    return { vin: (x)=>x(m[1]) };
}


/** === Chain Operations === */

// CREATE
function addChain(chainId) {
  svc.post("/chains", {
      body: JSON.stringify({ chainId: chainId }),
      parameters: { description: "Add a chain with chainId " + chainId + "" }
    });
}

// DELETE
function deleteChain(chainId) {
  svc.delete("/chains/" + chainId, {
    parameters: { description: "Delete a chain with chainId " + chainId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingChain(chainId) {
  svc.delete("/chains/" + chainId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a chain with chainId " + chainId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingChain(chainId) {
  svc.post("/chains", {
      body: JSON.stringify({ chainId: chainId }),
      parameters: { description: "Add a chain with chainId " + chainId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a chain with chainId " + chainId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateChain(chainId) {
  svc.put("/chains/" + chainId, {
      body: JSON.stringify({ chainId: chainId }),
      parameters: { description: "Update a chain" }
    });
}

// GET one
function getChain(chainId) {
  svc.get("/chains/" + chainId, {
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
function verifyChainExists(chainId) {
  svc.get("/chains", {
    callback: function (response) {
      chain = JSON.parse(response.body);
      for (let i = 0; i < chain.length; i++) {
        if (chain[i].chainId === chainId) {
          return pvg.success("Chain exists");
        }
      }
      return pvg.fail("Expected a chain to exist but it does not");
    },
    parameters: { description: "Verify chain with chainId " + chainId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyChainDoesNotExist(chainId) {
  svc.get("/chains", {
    callback: function (response) {
      chain = JSON.parse(response.body);
      for (let i = 0; i < chain.length; i++) {
        if (chain[i].chainId === chainId) {
          return pvg.fail("Expected a chain to not exist but it does");
        }
      }
      return pvg.success("Chain does not exist");
    },
    parameters: { description: "Verify chain with chainId " + chainId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddChain() {
  return bp.EventSet("any-add-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a chain");
  });
}
function matchAddChain(chainId) {
  return bp.EventSet("add-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a chain with chainId " + chainId + "";
  });
}
function matchAnyDeleteChain() {
  return bp.EventSet("any-del-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a chain");
  });
}
function matchDeleteChain(chainId) {
  return bp.EventSet("del-chain", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a chain with chainId " + chainId + "";
  });
}

// Wait helpers
function waitForAnyChainAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ chain\ with\ chainId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ chain\ with\ chainId\ (.+)$/);
    return { chainId: (x)=>x(m[1]) };
}
function waitForChainAdded(chainId) {
  waitFor(matchAddChain(chainId));
}
function waitForChainDeleted(chainId) {
  waitFor(matchDeleteChain(chainId));
}
function waitForAnyChainDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ chain\ with\ chainId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ chain\ with\ chainId\ (.+)$/);
    return { chainId: (x)=>x(m[1]) };
}


/** === Customer Operations === */

// CREATE
function addCustomer(customerId) {
  svc.post("/customers", {
      body: JSON.stringify({ customerId: customerId }),
      parameters: { description: "Add a customer with customerId " + customerId + "" }
    });
}

// DELETE
function deleteCustomer(customerId) {
  svc.delete("/customers/" + customerId, {
    parameters: { description: "Delete a customer with customerId " + customerId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCustomer(customerId) {
  svc.delete("/customers/" + customerId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a customer with customerId " + customerId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCustomer(customerId) {
  svc.post("/customers", {
      body: JSON.stringify({ customerId: customerId }),
      parameters: { description: "Add a customer with customerId " + customerId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a customer with customerId " + customerId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCustomer(customerId) {
  svc.put("/customers/" + customerId, {
      body: JSON.stringify({ customerId: customerId }),
      parameters: { description: "Update a customer" }
    });
}

// GET one
function getCustomer(customerId) {
  svc.get("/customers/" + customerId, {
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
function verifyCustomerExists(customerId) {
  svc.get("/customers", {
    callback: function (response) {
      customer = JSON.parse(response.body);
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].customerId === customerId) {
          return pvg.success("Customer exists");
        }
      }
      return pvg.fail("Expected a customer to exist but it does not");
    },
    parameters: { description: "Verify customer with customerId " + customerId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCustomerDoesNotExist(customerId) {
  svc.get("/customers", {
    callback: function (response) {
      customer = JSON.parse(response.body);
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].customerId === customerId) {
          return pvg.fail("Expected a customer to not exist but it does");
        }
      }
      return pvg.success("Customer does not exist");
    },
    parameters: { description: "Verify customer with customerId " + customerId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCustomer() {
  return bp.EventSet("any-add-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a customer");
  });
}
function matchAddCustomer(customerId) {
  return bp.EventSet("add-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a customer with customerId " + customerId + "";
  });
}
function matchAnyDeleteCustomer() {
  return bp.EventSet("any-del-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a customer");
  });
}
function matchDeleteCustomer(customerId) {
  return bp.EventSet("del-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a customer with customerId " + customerId + "";
  });
}

// Wait helpers
function waitForAnyCustomerAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ customer\ with\ customerId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ customer\ with\ customerId\ (.+)$/);
    return { customerId: (x)=>x(m[1]) };
}
function waitForCustomerAdded(customerId) {
  waitFor(matchAddCustomer(customerId));
}
function waitForCustomerDeleted(customerId) {
  waitFor(matchDeleteCustomer(customerId));
}
function waitForAnyCustomerDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ customer\ with\ customerId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ customer\ with\ customerId\ (.+)$/);
    return { customerId: (x)=>x(m[1]) };
}


/** === Garage Operations === */

// CREATE
function addGarage(garageId) {
  svc.post("/garages", {
      body: JSON.stringify({ garageId: garageId }),
      parameters: { description: "Add a garage with garageId " + garageId + "" }
    });
}

// DELETE
function deleteGarage(garageId) {
  svc.delete("/garages/" + garageId, {
    parameters: { description: "Delete a garage with garageId " + garageId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGarage(garageId) {
  svc.delete("/garages/" + garageId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a garage with garageId " + garageId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGarage(garageId) {
  svc.post("/garages", {
      body: JSON.stringify({ garageId: garageId }),
      parameters: { description: "Add a garage with garageId " + garageId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a garage with garageId " + garageId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateGarage(garageId) {
  svc.put("/garages/" + garageId, {
      body: JSON.stringify({ garageId: garageId }),
      parameters: { description: "Update a garage" }
    });
}

// GET one
function getGarage(garageId) {
  svc.get("/garages/" + garageId, {
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
function verifyGarageExists(garageId) {
  svc.get("/garages", {
    callback: function (response) {
      garage = JSON.parse(response.body);
      for (let i = 0; i < garage.length; i++) {
        if (garage[i].garageId === garageId) {
          return pvg.success("Garage exists");
        }
      }
      return pvg.fail("Expected a garage to exist but it does not");
    },
    parameters: { description: "Verify garage with garageId " + garageId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyGarageDoesNotExist(garageId) {
  svc.get("/garages", {
    callback: function (response) {
      garage = JSON.parse(response.body);
      for (let i = 0; i < garage.length; i++) {
        if (garage[i].garageId === garageId) {
          return pvg.fail("Expected a garage to not exist but it does");
        }
      }
      return pvg.success("Garage does not exist");
    },
    parameters: { description: "Verify garage with garageId " + garageId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddGarage() {
  return bp.EventSet("any-add-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a garage");
  });
}
function matchAddGarage(garageId) {
  return bp.EventSet("add-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a garage with garageId " + garageId + "";
  });
}
function matchAnyDeleteGarage() {
  return bp.EventSet("any-del-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a garage");
  });
}
function matchDeleteGarage(garageId) {
  return bp.EventSet("del-garage", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a garage with garageId " + garageId + "";
  });
}

// Wait helpers
function waitForAnyGarageAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ garage\ with\ garageId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ garage\ with\ garageId\ (.+)$/);
    return { garageId: (x)=>x(m[1]) };
}
function waitForGarageAdded(garageId) {
  waitFor(matchAddGarage(garageId));
}
function waitForGarageDeleted(garageId) {
  waitFor(matchDeleteGarage(garageId));
}
function waitForAnyGarageDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ garage\ with\ garageId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ garage\ with\ garageId\ (.+)$/);
    return { garageId: (x)=>x(m[1]) };
}


/** === Periodic_maintenance Operations === */

// CREATE
function addPeriodic_maintenance(pmId) {
  svc.post("/periodic_maintenance", {
      body: JSON.stringify({ pmId: pmId }),
      parameters: { description: "Add a periodic_maintenance with pmId " + pmId + "" }
    });
}

// DELETE
function deletePeriodic_maintenance(pmId) {
  svc.delete("/periodic_maintenance/" + pmId, {
    parameters: { description: "Delete a periodic_maintenance with pmId " + pmId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPeriodic_maintenance(pmId) {
  svc.delete("/periodic_maintenance/" + pmId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a periodic_maintenance with pmId " + pmId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPeriodic_maintenance(pmId) {
  svc.post("/periodic_maintenance", {
      body: JSON.stringify({ pmId: pmId }),
      parameters: { description: "Add a periodic_maintenance with pmId " + pmId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a periodic_maintenance with pmId " + pmId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePeriodic_maintenance(pmId) {
  svc.put("/periodic_maintenance/" + pmId, {
      body: JSON.stringify({ pmId: pmId }),
      parameters: { description: "Update a periodic_maintenance" }
    });
}

// GET one
function getPeriodic_maintenance(pmId) {
  svc.get("/periodic_maintenance/" + pmId, {
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
function verifyPeriodic_maintenanceExists(pmId) {
  svc.get("/periodic_maintenance", {
    callback: function (response) {
      periodic_maintenance = JSON.parse(response.body);
      for (let i = 0; i < periodic_maintenance.length; i++) {
        if (periodic_maintenance[i].pmId === pmId) {
          return pvg.success("Periodic_maintenance exists");
        }
      }
      return pvg.fail("Expected a periodic_maintenance to exist but it does not");
    },
    parameters: { description: "Verify periodic_maintenance with pmId " + pmId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPeriodic_maintenanceDoesNotExist(pmId) {
  svc.get("/periodic_maintenance", {
    callback: function (response) {
      periodic_maintenance = JSON.parse(response.body);
      for (let i = 0; i < periodic_maintenance.length; i++) {
        if (periodic_maintenance[i].pmId === pmId) {
          return pvg.fail("Expected a periodic_maintenance to not exist but it does");
        }
      }
      return pvg.success("Periodic_maintenance does not exist");
    },
    parameters: { description: "Verify periodic_maintenance with pmId " + pmId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPeriodic_maintenance() {
  return bp.EventSet("any-add-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a periodic_maintenance");
  });
}
function matchAddPeriodic_maintenance(pmId) {
  return bp.EventSet("add-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a periodic_maintenance with pmId " + pmId + "";
  });
}
function matchAnyDeletePeriodic_maintenance() {
  return bp.EventSet("any-del-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a periodic_maintenance");
  });
}
function matchDeletePeriodic_maintenance(pmId) {
  return bp.EventSet("del-periodic_maintenance", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a periodic_maintenance with pmId " + pmId + "";
  });
}

// Wait helpers
function waitForAnyPeriodic_maintenanceAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ periodic_maintenance\ with\ pmId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ periodic_maintenance\ with\ pmId\ (.+)$/);
    return { pmId: (x)=>x(m[1]) };
}
function waitForPeriodic_maintenanceAdded(pmId) {
  waitFor(matchAddPeriodic_maintenance(pmId));
}
function waitForPeriodic_maintenanceDeleted(pmId) {
  waitFor(matchDeletePeriodic_maintenance(pmId));
}
function waitForAnyPeriodic_maintenanceDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ periodic_maintenance\ with\ pmId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ periodic_maintenance\ with\ pmId\ (.+)$/);
    return { pmId: (x)=>x(m[1]) };
}


/** === Repair_order Operations === */

// CREATE
function addRepair_order(roId) {
  svc.post("/repair_orders", {
      body: JSON.stringify({ roId: roId }),
      parameters: { description: "Add a repair_order with roId " + roId + "" }
    });
}

// DELETE
function deleteRepair_order(roId) {
  svc.delete("/repair_orders/" + roId, {
    parameters: { description: "Delete a repair_order with roId " + roId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepair_order(roId) {
  svc.delete("/repair_orders/" + roId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repair_order with roId " + roId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepair_order(roId) {
  svc.post("/repair_orders", {
      body: JSON.stringify({ roId: roId }),
      parameters: { description: "Add a repair_order with roId " + roId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repair_order with roId " + roId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRepair_order(roId) {
  svc.put("/repair_orders/" + roId, {
      body: JSON.stringify({ roId: roId }),
      parameters: { description: "Update a repair_order" }
    });
}

// GET one
function getRepair_order(roId) {
  svc.get("/repair_orders/" + roId, {
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
function verifyRepair_orderExists(roId) {
  svc.get("/repair_orders", {
    callback: function (response) {
      repair_order = JSON.parse(response.body);
      for (let i = 0; i < repair_order.length; i++) {
        if (repair_order[i].roId === roId) {
          return pvg.success("Repair_order exists");
        }
      }
      return pvg.fail("Expected a repair_order to exist but it does not");
    },
    parameters: { description: "Verify repair_order with roId " + roId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepair_orderDoesNotExist(roId) {
  svc.get("/repair_orders", {
    callback: function (response) {
      repair_order = JSON.parse(response.body);
      for (let i = 0; i < repair_order.length; i++) {
        if (repair_order[i].roId === roId) {
          return pvg.fail("Expected a repair_order to not exist but it does");
        }
      }
      return pvg.success("Repair_order does not exist");
    },
    parameters: { description: "Verify repair_order with roId " + roId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepair_order() {
  return bp.EventSet("any-add-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repair_order");
  });
}
function matchAddRepair_order(roId) {
  return bp.EventSet("add-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repair_order with roId " + roId + "";
  });
}
function matchAnyDeleteRepair_order() {
  return bp.EventSet("any-del-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repair_order");
  });
}
function matchDeleteRepair_order(roId) {
  return bp.EventSet("del-repair_order", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repair_order with roId " + roId + "";
  });
}

// Wait helpers
function waitForAnyRepair_orderAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repair_order\ with\ roId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repair_order\ with\ roId\ (.+)$/);
    return { roId: (x)=>x(m[1]) };
}
function waitForRepair_orderAdded(roId) {
  waitFor(matchAddRepair_order(roId));
}
function waitForRepair_orderDeleted(roId) {
  waitFor(matchDeleteRepair_order(roId));
}
function waitForAnyRepair_orderDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repair_order\ with\ roId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repair_order\ with\ roId\ (.+)$/);
    return { roId: (x)=>x(m[1]) };
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

