// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Chain:nondet:1:1
bthread("crud:Chain:nondet:1:1", function () {
  let chainId = 200;
  createChain(200);
  tryToAddExistingChain(200);
  verifyChainExists(200);
  updateChain(200);
  deleteChain(200);
  tryToDeleteANonExistingChain(200);
  verifyChainDoesNotExist(200);
});

// Story: crud:Chain:nondet:1:2
bthread("crud:Chain:nondet:1:2", function () {
  let chainId = 201;
  createChain(201);
  tryToAddExistingChain(201);
  updateChain(201);
  verifyChainExists(201);
  deleteChain(201);
  tryToDeleteANonExistingChain(201);
  verifyChainDoesNotExist(201);
});

// Story: crud:Chain:nondet:negative:dup-add
bthread("crud:Chain:nondet:negative:dup-add", function () {
  let chainId = 206;
  createChain(206);
  verifyChainExists(206);
  tryToAddExistingChain(206);
  verifyChainExists(206);
});

// Story: crud:Chain:nondet:existing:update
bthread("crud:Chain:nondet:existing:update", function () {
  let ev = waitForAnyChainAdded();
  let args = Object.values(ev);
  block(matchDeletedChain.apply(null, args), function () {
    verifyChainExists.apply(null, args);
    updateChain.apply(null, args);
    verifyChainExists.apply(null, args);
  });
});

// Story: monitor:Chain:add
bthread("monitor:Chain:add", function () {
  while (true) {
    let ev = waitForAnyChainAdded();
    let args = Object.values(ev);
    block(matchDeletedChain.apply(null, args), function () {
      verifyChainExists.apply(null, args);
    });
  }
});

// Story: crud:Garage:nondet:1:1
bthread("crud:Garage:nondet:1:1", function () {
  let garageId = 210;
  createGarage(210);
  tryToAddExistingGarage(210);
  verifyGarageExists(210);
  updateGarage(210);
  deleteGarage(210);
  tryToDeleteANonExistingGarage(210);
  verifyGarageDoesNotExist(210);
});

// Story: crud:Garage:nondet:1:2
bthread("crud:Garage:nondet:1:2", function () {
  let garageId = 211;
  createGarage(211);
  tryToAddExistingGarage(211);
  updateGarage(211);
  verifyGarageExists(211);
  deleteGarage(211);
  tryToDeleteANonExistingGarage(211);
  verifyGarageDoesNotExist(211);
});

// Story: crud:Garage:nondet:negative:dup-add
bthread("crud:Garage:nondet:negative:dup-add", function () {
  let garageId = 216;
  createGarage(216);
  verifyGarageExists(216);
  tryToAddExistingGarage(216);
  verifyGarageExists(216);
});

// Story: crud:Garage:nondet:existing:update
bthread("crud:Garage:nondet:existing:update", function () {
  let ev = waitForAnyGarageAdded();
  let args = Object.values(ev);
  block(matchDeletedGarage.apply(null, args), function () {
    verifyGarageExists.apply(null, args);
    updateGarage.apply(null, args);
    verifyGarageExists.apply(null, args);
  });
});

// Story: monitor:Garage:add
bthread("monitor:Garage:add", function () {
  while (true) {
    let ev = waitForAnyGarageAdded();
    let args = Object.values(ev);
    block(matchDeletedGarage.apply(null, args), function () {
      verifyGarageExists.apply(null, args);
    });
  }
});

// Story: crud:Customer:nondet:1:1
bthread("crud:Customer:nondet:1:1", function () {
  let customerId = 220;
  createCustomer(220);
  tryToAddExistingCustomer(220);
  verifyCustomerExists(220);
  updateCustomer(220);
  deleteCustomer(220);
  tryToDeleteANonExistingCustomer(220);
  verifyCustomerDoesNotExist(220);
});

// Story: crud:Customer:nondet:1:2
bthread("crud:Customer:nondet:1:2", function () {
  let customerId = 221;
  createCustomer(221);
  tryToAddExistingCustomer(221);
  updateCustomer(221);
  verifyCustomerExists(221);
  deleteCustomer(221);
  tryToDeleteANonExistingCustomer(221);
  verifyCustomerDoesNotExist(221);
});

// Story: crud:Customer:nondet:negative:dup-add
bthread("crud:Customer:nondet:negative:dup-add", function () {
  let customerId = 226;
  createCustomer(226);
  verifyCustomerExists(226);
  tryToAddExistingCustomer(226);
  verifyCustomerExists(226);
});

// Story: crud:Customer:nondet:existing:update
bthread("crud:Customer:nondet:existing:update", function () {
  let ev = waitForAnyCustomerAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomer.apply(null, args), function () {
    verifyCustomerExists.apply(null, args);
    updateCustomer.apply(null, args);
    verifyCustomerExists.apply(null, args);
  });
});

// Story: monitor:Customer:add
bthread("monitor:Customer:add", function () {
  while (true) {
    let ev = waitForAnyCustomerAdded();
    let args = Object.values(ev);
    block(matchDeletedCustomer.apply(null, args), function () {
      verifyCustomerExists.apply(null, args);
    });
  }
});

// Story: crud:Car:nondet:1:1
bthread("crud:Car:nondet:1:1", function () {
  let vin = "vin_230";
  createCar("vin_230");
  tryToAddExistingCar("vin_230");
  verifyCarExists("vin_230");
  updateCar("vin_230");
  deleteCar("vin_230");
  tryToDeleteANonExistingCar("vin_230");
  verifyCarDoesNotExist("vin_230");
});

// Story: crud:Car:nondet:1:2
bthread("crud:Car:nondet:1:2", function () {
  let vin = "vin_231";
  createCar("vin_231");
  tryToAddExistingCar("vin_231");
  updateCar("vin_231");
  verifyCarExists("vin_231");
  deleteCar("vin_231");
  tryToDeleteANonExistingCar("vin_231");
  verifyCarDoesNotExist("vin_231");
});

// Story: crud:Car:nondet:negative:dup-add
bthread("crud:Car:nondet:negative:dup-add", function () {
  let vin = "vin_236";
  createCar("vin_236");
  verifyCarExists("vin_236");
  tryToAddExistingCar("vin_236");
  verifyCarExists("vin_236");
});

// Story: crud:Car:nondet:existing:update
bthread("crud:Car:nondet:existing:update", function () {
  let ev = waitForAnyCarAdded();
  let args = Object.values(ev);
  block(matchDeletedCar.apply(null, args), function () {
    verifyCarExists.apply(null, args);
    updateCar.apply(null, args);
    verifyCarExists.apply(null, args);
  });
});

// Story: monitor:Car:add
bthread("monitor:Car:add", function () {
  while (true) {
    let ev = waitForAnyCarAdded();
    let args = Object.values(ev);
    block(matchDeletedCar.apply(null, args), function () {
      verifyCarExists.apply(null, args);
    });
  }
});

// Story: crud:PeriodicMaintenance:nondet:1:1
bthread("crud:PeriodicMaintenance:nondet:1:1", function () {
  let pmId = 240;
  createPM(240);
  tryToAddExistingPeriodicMaintenance(240);
  verifyPeriodicMaintenanceExists(240);
  updatePM(240);
  deletePM(240);
  tryToDeleteANonExistingPeriodicMaintenance(240);
  verifyPeriodicMaintenanceDoesNotExist(240);
});

// Story: crud:PeriodicMaintenance:nondet:1:2
bthread("crud:PeriodicMaintenance:nondet:1:2", function () {
  let pmId = 241;
  createPM(241);
  tryToAddExistingPeriodicMaintenance(241);
  updatePM(241);
  verifyPeriodicMaintenanceExists(241);
  deletePM(241);
  tryToDeleteANonExistingPeriodicMaintenance(241);
  verifyPeriodicMaintenanceDoesNotExist(241);
});

// Story: crud:PeriodicMaintenance:nondet:negative:dup-add
bthread("crud:PeriodicMaintenance:nondet:negative:dup-add", function () {
  let pmId = 246;
  createPM(246);
  verifyPeriodicMaintenanceExists(246);
  tryToAddExistingPeriodicMaintenance(246);
  verifyPeriodicMaintenanceExists(246);
});

// Story: crud:PeriodicMaintenance:nondet:existing:update
bthread("crud:PeriodicMaintenance:nondet:existing:update", function () {
  let ev = waitForAnyPeriodicMaintenanceAdded();
  let args = Object.values(ev);
  block(matchDeletedPeriodicMaintenance.apply(null, args), function () {
    verifyPeriodicMaintenanceExists.apply(null, args);
    updatePM.apply(null, args);
    verifyPeriodicMaintenanceExists.apply(null, args);
  });
});

// Story: monitor:PeriodicMaintenance:add
bthread("monitor:PeriodicMaintenance:add", function () {
  while (true) {
    let ev = waitForAnyPeriodicMaintenanceAdded();
    let args = Object.values(ev);
    block(matchDeletedPeriodicMaintenance.apply(null, args), function () {
      verifyPeriodicMaintenanceExists.apply(null, args);
    });
  }
});

// Story: crud:RepairOrder:nondet:1:1
bthread("crud:RepairOrder:nondet:1:1", function () {
  let roId = 250;
  createRepairOrder(250);
  tryToAddExistingRepairOrder(250);
  verifyRepairOrderExists(250);
  updateRepairOrder(250);
  deleteRepairOrder(250);
  tryToDeleteANonExistingRepairOrder(250);
  verifyRepairOrderDoesNotExist(250);
});

// Story: crud:RepairOrder:nondet:1:2
bthread("crud:RepairOrder:nondet:1:2", function () {
  let roId = 251;
  createRepairOrder(251);
  tryToAddExistingRepairOrder(251);
  updateRepairOrder(251);
  verifyRepairOrderExists(251);
  deleteRepairOrder(251);
  tryToDeleteANonExistingRepairOrder(251);
  verifyRepairOrderDoesNotExist(251);
});

// Story: crud:RepairOrder:nondet:negative:dup-add
bthread("crud:RepairOrder:nondet:negative:dup-add", function () {
  let roId = 256;
  createRepairOrder(256);
  verifyRepairOrderExists(256);
  tryToAddExistingRepairOrder(256);
  verifyRepairOrderExists(256);
});

// Story: crud:RepairOrder:nondet:existing:update
bthread("crud:RepairOrder:nondet:existing:update", function () {
  let ev = waitForAnyRepairOrderAdded();
  let args = Object.values(ev);
  block(matchDeletedRepairOrder.apply(null, args), function () {
    verifyRepairOrderExists.apply(null, args);
    updateRepairOrder.apply(null, args);
    verifyRepairOrderExists.apply(null, args);
  });
});

// Story: monitor:RepairOrder:add
bthread("monitor:RepairOrder:add", function () {
  while (true) {
    let ev = waitForAnyRepairOrderAdded();
    let args = Object.values(ev);
    block(matchDeletedRepairOrder.apply(null, args), function () {
      verifyRepairOrderExists.apply(null, args);
    });
  }
});
