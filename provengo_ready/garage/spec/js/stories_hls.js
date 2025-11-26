// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Chain:nondet:1:1
bthread("crud:Chain:nondet:1:1", function () {
  let chainId = 200;
  addChain(200);
  tryToAddExistingChain(200);
  verifyChainExists(chainId);
  updateChain(chainId, 200);
  deleteChain(chainId);
  tryToDeleteANonExistingChain(chainId);
  verifyChainDoesNotExist(chainId);
});

// Story: crud:Chain:nondet:1:2
bthread("crud:Chain:nondet:1:2", function () {
  let chainId = 201;
  addChain(201);
  tryToAddExistingChain(201);
  updateChain(chainId, 201);
  verifyChainExists(chainId);
  deleteChain(chainId);
  tryToDeleteANonExistingChain(chainId);
  verifyChainDoesNotExist(chainId);
});

// Story: crud:Chain:nondet:negative:dup-add
bthread("crud:Chain:nondet:negative:dup-add", function () {
  let chainId = 206;
  addChain(206);
  verifyChainExists(chainId);
  tryToAddExistingChain(206);
  verifyChainExists(chainId);
});

// Story: crud:Chain:nondet:existing:update
bthread("crud:Chain:nondet:existing:update", function () {
  let ev = waitForAnyChainAdded();
  let args = Object.values(ev);
  block(matchDeletedChain.apply(null, args), function () {
    // verifyChainExists.apply(null, args);
    // updateChain.apply(null, args);
  });
});

// Story: monitor:Chain:add
bthread("monitor:Chain:add", function () {
  while (true) {
    let ev = waitForAnyChainAdded();
    let args = Object.values(ev);
    block(matchDeletedChain.apply(null, args), function () {
      // verifyChainExists.apply(null, args);
    });
  }
});

// Story: crud:Garage:nondet:1:1
bthread("crud:Garage:nondet:1:1", function () {
  let garageId = 210;
  addGarage(210);
  tryToAddExistingGarage(210);
  verifyGarageExists(garageId);
  updateGarage(garageId, 210);
  deleteGarage(garageId);
  tryToDeleteANonExistingGarage(garageId);
  verifyGarageDoesNotExist(garageId);
});

// Story: crud:Garage:nondet:1:2
bthread("crud:Garage:nondet:1:2", function () {
  let garageId = 211;
  addGarage(211);
  tryToAddExistingGarage(211);
  updateGarage(garageId, 211);
  verifyGarageExists(garageId);
  deleteGarage(garageId);
  tryToDeleteANonExistingGarage(garageId);
  verifyGarageDoesNotExist(garageId);
});

// Story: crud:Garage:nondet:negative:dup-add
bthread("crud:Garage:nondet:negative:dup-add", function () {
  let garageId = 216;
  addGarage(216);
  verifyGarageExists(garageId);
  tryToAddExistingGarage(216);
  verifyGarageExists(garageId);
});

// Story: crud:Garage:nondet:existing:update
bthread("crud:Garage:nondet:existing:update", function () {
  let ev = waitForAnyGarageAdded();
  let args = Object.values(ev);
  block(matchDeletedGarage.apply(null, args), function () {
    // verifyGarageExists.apply(null, args);
    // updateGarage.apply(null, args);
  });
});

// Story: monitor:Garage:add
bthread("monitor:Garage:add", function () {
  while (true) {
    let ev = waitForAnyGarageAdded();
    let args = Object.values(ev);
    block(matchDeletedGarage.apply(null, args), function () {
      // verifyGarageExists.apply(null, args);
    });
  }
});

// Story: crud:Customer:nondet:1:1
bthread("crud:Customer:nondet:1:1", function () {
  let customerId = 220;
  addCustomer(220);
  tryToAddExistingCustomer(220);
  verifyCustomerExists(customerId);
  updateCustomer(customerId, 220);
  deleteCustomer(customerId);
  tryToDeleteANonExistingCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
});

// Story: crud:Customer:nondet:1:2
bthread("crud:Customer:nondet:1:2", function () {
  let customerId = 221;
  addCustomer(221);
  tryToAddExistingCustomer(221);
  updateCustomer(customerId, 221);
  verifyCustomerExists(customerId);
  deleteCustomer(customerId);
  tryToDeleteANonExistingCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
});

// Story: crud:Customer:nondet:negative:dup-add
bthread("crud:Customer:nondet:negative:dup-add", function () {
  let customerId = 226;
  addCustomer(226);
  verifyCustomerExists(customerId);
  tryToAddExistingCustomer(226);
  verifyCustomerExists(customerId);
});

// Story: crud:Customer:nondet:existing:update
bthread("crud:Customer:nondet:existing:update", function () {
  let ev = waitForAnyCustomerAdded();
  let args = Object.values(ev);
  block(matchDeletedCustomer.apply(null, args), function () {
    // verifyCustomerExists.apply(null, args);
    // updateCustomer.apply(null, args);
  });
});

// Story: monitor:Customer:add
bthread("monitor:Customer:add", function () {
  while (true) {
    let ev = waitForAnyCustomerAdded();
    let args = Object.values(ev);
    block(matchDeletedCustomer.apply(null, args), function () {
      // verifyCustomerExists.apply(null, args);
    });
  }
});

// Story: crud:Car:nondet:1:1
bthread("crud:Car:nondet:1:1", function () {
  let vin = "vin_230";
  addCar("vin_230");
  tryToAddExistingCar("vin_230");
  verifyCarExists(vin);
  updateCar(vin, "vin_230");
  deleteCar(vin);
  tryToDeleteANonExistingCar(vin);
  verifyCarDoesNotExist(vin);
});

// Story: crud:Car:nondet:1:2
bthread("crud:Car:nondet:1:2", function () {
  let vin = "vin_231";
  addCar("vin_231");
  tryToAddExistingCar("vin_231");
  updateCar(vin, "vin_231");
  verifyCarExists(vin);
  deleteCar(vin);
  tryToDeleteANonExistingCar(vin);
  verifyCarDoesNotExist(vin);
});

// Story: crud:Car:nondet:negative:dup-add
bthread("crud:Car:nondet:negative:dup-add", function () {
  let vin = "vin_236";
  addCar("vin_236");
  verifyCarExists(vin);
  tryToAddExistingCar("vin_236");
  verifyCarExists(vin);
});

// Story: crud:Car:nondet:existing:update
bthread("crud:Car:nondet:existing:update", function () {
  let ev = waitForAnyCarAdded();
  let args = Object.values(ev);
  block(matchDeletedCar.apply(null, args), function () {
    // verifyCarExists.apply(null, args);
    // updateCar.apply(null, args);
  });
});

// Story: monitor:Car:add
bthread("monitor:Car:add", function () {
  while (true) {
    let ev = waitForAnyCarAdded();
    let args = Object.values(ev);
    block(matchDeletedCar.apply(null, args), function () {
      // verifyCarExists.apply(null, args);
    });
  }
});

// Story: crud:PeriodicMaintenance:nondet:1:1
bthread("crud:PeriodicMaintenance:nondet:1:1", function () {
  let pmId = 240;
  addPeriodicMaintenance(240);
  tryToAddExistingPeriodicMaintenance(240);
  verifyPeriodicMaintenanceExists(pmId);
  updatePeriodicMaintenance(pmId, 240);
  deletePeriodicMaintenance(pmId);
  tryToDeleteANonExistingPeriodicMaintenance(pmId);
  verifyPeriodicMaintenanceDoesNotExist(pmId);
});

// Story: crud:PeriodicMaintenance:nondet:1:2
bthread("crud:PeriodicMaintenance:nondet:1:2", function () {
  let pmId = 241;
  addPeriodicMaintenance(241);
  tryToAddExistingPeriodicMaintenance(241);
  updatePeriodicMaintenance(pmId, 241);
  verifyPeriodicMaintenanceExists(pmId);
  deletePeriodicMaintenance(pmId);
  tryToDeleteANonExistingPeriodicMaintenance(pmId);
  verifyPeriodicMaintenanceDoesNotExist(pmId);
});

// Story: crud:PeriodicMaintenance:nondet:negative:dup-add
bthread("crud:PeriodicMaintenance:nondet:negative:dup-add", function () {
  let pmId = 246;
  addPeriodicMaintenance(246);
  verifyPeriodicMaintenanceExists(pmId);
  tryToAddExistingPeriodicMaintenance(246);
  verifyPeriodicMaintenanceExists(pmId);
});

// Story: crud:PeriodicMaintenance:nondet:existing:update
bthread("crud:PeriodicMaintenance:nondet:existing:update", function () {
  let ev = waitForAnyPeriodicMaintenanceAdded();
  let args = Object.values(ev);
  block(matchDeletedPeriodicMaintenance.apply(null, args), function () {
    // verifyPeriodicMaintenanceExists.apply(null, args);
    // updatePeriodicMaintenance.apply(null, args);
  });
});

// Story: monitor:PeriodicMaintenance:add
bthread("monitor:PeriodicMaintenance:add", function () {
  while (true) {
    let ev = waitForAnyPeriodicMaintenanceAdded();
    let args = Object.values(ev);
    block(matchDeletedPeriodicMaintenance.apply(null, args), function () {
      // verifyPeriodicMaintenanceExists.apply(null, args);
    });
  }
});

// Story: crud:RepairOrder:nondet:1:1
bthread("crud:RepairOrder:nondet:1:1", function () {
  let roId = 250;
  addRepairOrder(250);
  tryToAddExistingRepairOrder(250);
  verifyRepairOrderExists(roId);
  updateRepairOrder(roId, 250);
  deleteRepairOrder(roId);
  tryToDeleteANonExistingRepairOrder(roId);
  verifyRepairOrderDoesNotExist(roId);
});

// Story: crud:RepairOrder:nondet:1:2
bthread("crud:RepairOrder:nondet:1:2", function () {
  let roId = 251;
  addRepairOrder(251);
  tryToAddExistingRepairOrder(251);
  updateRepairOrder(roId, 251);
  verifyRepairOrderExists(roId);
  deleteRepairOrder(roId);
  tryToDeleteANonExistingRepairOrder(roId);
  verifyRepairOrderDoesNotExist(roId);
});

// Story: crud:RepairOrder:nondet:negative:dup-add
bthread("crud:RepairOrder:nondet:negative:dup-add", function () {
  let roId = 256;
  addRepairOrder(256);
  verifyRepairOrderExists(roId);
  tryToAddExistingRepairOrder(256);
  verifyRepairOrderExists(roId);
});

// Story: crud:RepairOrder:nondet:existing:update
bthread("crud:RepairOrder:nondet:existing:update", function () {
  let ev = waitForAnyRepairOrderAdded();
  let args = Object.values(ev);
  block(matchDeletedRepairOrder.apply(null, args), function () {
    // verifyRepairOrderExists.apply(null, args);
    // updateRepairOrder.apply(null, args);
  });
});

// Story: monitor:RepairOrder:add
bthread("monitor:RepairOrder:add", function () {
  while (true) {
    let ev = waitForAnyRepairOrderAdded();
    let args = Object.values(ev);
    block(matchDeletedRepairOrder.apply(null, args), function () {
      // verifyRepairOrderExists.apply(null, args);
    });
  }
});
