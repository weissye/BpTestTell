// ---- crud:car:nondet:1:1 ----
bthread("crud:car:nondet:1:1", function () {
  let vin = "vin_200";
  addCar(vin);
  tryToAddExistingCar(vin);
  verifyCarExists(vin);
  updateCar(vin);
  deleteCar(vin);
  tryToDeleteANonExistingCar(vin);
  verifyCarDoesNotExist(vin);
  
});

// ---- crud:car:nondet:1:2 ----
bthread("crud:car:nondet:1:2", function () {
  let vin = "vin_200";
  addCar(vin);
  tryToAddExistingCar(vin);
  updateCar(vin);
  verifyCarExists(vin);
  deleteCar(vin);
  tryToDeleteANonExistingCar(vin);
  verifyCarDoesNotExist(vin);
  
});

// ---- crud:car:nondet:1:3 ----
bthread("crud:car:nondet:1:3", function () {
  let vin = "vin_200";
  addCar(vin);
  tryToAddExistingCar(vin);
  verifyCarExists(vin);
  deleteCar(vin);
  tryToDeleteANonExistingCar(vin);
  verifyCarDoesNotExist(vin);
  
});

// ---- crud:car:nondet:1:4 ----
bthread("crud:car:nondet:1:4", function () {
  let vin = "vin_201";
  addCar(vin);
  tryToAddExistingCar(vin);
  deleteCar(vin);
  tryToDeleteANonExistingCar(vin);
  verifyCarDoesNotExist(vin);
  
});

// ---- crud:chain:nondet:2:1 ----
bthread("crud:chain:nondet:2:1", function () {
  let chainId = 201;
  addChain(chainId);
  tryToAddExistingChain(chainId);
  verifyChainExists(chainId);
  updateChain(chainId);
  deleteChain(chainId);
  tryToDeleteANonExistingChain(chainId);
  verifyChainDoesNotExist(chainId);
  
});

// ---- crud:chain:nondet:2:2 ----
bthread("crud:chain:nondet:2:2", function () {
  let chainId = 201;
  addChain(chainId);
  tryToAddExistingChain(chainId);
  updateChain(chainId);
  verifyChainExists(chainId);
  deleteChain(chainId);
  tryToDeleteANonExistingChain(chainId);
  verifyChainDoesNotExist(chainId);
  
});

// ---- crud:chain:nondet:2:3 ----
bthread("crud:chain:nondet:2:3", function () {
  let chainId = 201;
  addChain(chainId);
  tryToAddExistingChain(chainId);
  verifyChainExists(chainId);
  deleteChain(chainId);
  tryToDeleteANonExistingChain(chainId);
  verifyChainDoesNotExist(chainId);
  
});

// ---- crud:chain:nondet:2:4 ----
bthread("crud:chain:nondet:2:4", function () {
  let chainId = 202;
  addChain(chainId);
  tryToAddExistingChain(chainId);
  deleteChain(chainId);
  tryToDeleteANonExistingChain(chainId);
  verifyChainDoesNotExist(chainId);
  
});

// ---- crud:customer:nondet:3:1 ----
bthread("crud:customer:nondet:3:1", function () {
  let customerId = 202;
  addCustomer(customerId);
  tryToAddExistingCustomer(customerId);
  verifyCustomerExists(customerId);
  updateCustomer(customerId);
  deleteCustomer(customerId);
  tryToDeleteANonExistingCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
  
});

// ---- crud:customer:nondet:3:2 ----
bthread("crud:customer:nondet:3:2", function () {
  let customerId = 202;
  addCustomer(customerId);
  tryToAddExistingCustomer(customerId);
  updateCustomer(customerId);
  verifyCustomerExists(customerId);
  deleteCustomer(customerId);
  tryToDeleteANonExistingCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
  
});

// ---- crud:customer:nondet:3:3 ----
bthread("crud:customer:nondet:3:3", function () {
  let customerId = 202;
  addCustomer(customerId);
  tryToAddExistingCustomer(customerId);
  verifyCustomerExists(customerId);
  deleteCustomer(customerId);
  tryToDeleteANonExistingCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
  
});

// ---- crud:customer:nondet:3:4 ----
bthread("crud:customer:nondet:3:4", function () {
  let customerId = 203;
  addCustomer(customerId);
  tryToAddExistingCustomer(customerId);
  deleteCustomer(customerId);
  tryToDeleteANonExistingCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
  
});

// ---- crud:garage:nondet:4:1 ----
bthread("crud:garage:nondet:4:1", function () {
  let garageId = 203;
  addGarage(garageId);
  tryToAddExistingGarage(garageId);
  verifyGarageExists(garageId);
  updateGarage(garageId);
  deleteGarage(garageId);
  tryToDeleteANonExistingGarage(garageId);
  verifyGarageDoesNotExist(garageId);
  
});

// ---- crud:garage:nondet:4:2 ----
bthread("crud:garage:nondet:4:2", function () {
  let garageId = 203;
  addGarage(garageId);
  tryToAddExistingGarage(garageId);
  updateGarage(garageId);
  verifyGarageExists(garageId);
  deleteGarage(garageId);
  tryToDeleteANonExistingGarage(garageId);
  verifyGarageDoesNotExist(garageId);
  
});

// ---- crud:garage:nondet:4:3 ----
bthread("crud:garage:nondet:4:3", function () {
  let garageId = 203;
  addGarage(garageId);
  tryToAddExistingGarage(garageId);
  verifyGarageExists(garageId);
  deleteGarage(garageId);
  tryToDeleteANonExistingGarage(garageId);
  verifyGarageDoesNotExist(garageId);
  
});

// ---- crud:garage:nondet:4:4 ----
bthread("crud:garage:nondet:4:4", function () {
  let garageId = 204;
  addGarage(garageId);
  tryToAddExistingGarage(garageId);
  deleteGarage(garageId);
  tryToDeleteANonExistingGarage(garageId);
  verifyGarageDoesNotExist(garageId);
  
});

// ---- crud:periodic_maintenance:nondet:5:1 ----
bthread("crud:periodic_maintenance:nondet:5:1", function () {
  let pmId = 204;
  addPeriodic_maintenance(pmId);
  tryToAddExistingPeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceExists(pmId);
  updatePeriodic_maintenance(pmId);
  deletePeriodic_maintenance(pmId);
  tryToDeleteANonExistingPeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceDoesNotExist(pmId);
  
});

// ---- crud:periodic_maintenance:nondet:5:2 ----
bthread("crud:periodic_maintenance:nondet:5:2", function () {
  let pmId = 204;
  addPeriodic_maintenance(pmId);
  tryToAddExistingPeriodic_maintenance(pmId);
  updatePeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceExists(pmId);
  deletePeriodic_maintenance(pmId);
  tryToDeleteANonExistingPeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceDoesNotExist(pmId);
  
});

// ---- crud:periodic_maintenance:nondet:5:3 ----
bthread("crud:periodic_maintenance:nondet:5:3", function () {
  let pmId = 204;
  addPeriodic_maintenance(pmId);
  tryToAddExistingPeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceExists(pmId);
  deletePeriodic_maintenance(pmId);
  tryToDeleteANonExistingPeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceDoesNotExist(pmId);
  
});

// ---- crud:periodic_maintenance:nondet:5:4 ----
bthread("crud:periodic_maintenance:nondet:5:4", function () {
  let pmId = 205;
  addPeriodic_maintenance(pmId);
  tryToAddExistingPeriodic_maintenance(pmId);
  deletePeriodic_maintenance(pmId);
  tryToDeleteANonExistingPeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceDoesNotExist(pmId);
  
});

// ---- crud:repair_order:nondet:6:1 ----
bthread("crud:repair_order:nondet:6:1", function () {
  let roId = 205;
  addRepair_order(roId);
  tryToAddExistingRepair_order(roId);
  verifyRepair_orderExists(roId);
  updateRepair_order(roId);
  deleteRepair_order(roId);
  tryToDeleteANonExistingRepair_order(roId);
  verifyRepair_orderDoesNotExist(roId);
  
});

// ---- crud:repair_order:nondet:6:2 ----
bthread("crud:repair_order:nondet:6:2", function () {
  let roId = 205;
  addRepair_order(roId);
  tryToAddExistingRepair_order(roId);
  updateRepair_order(roId);
  verifyRepair_orderExists(roId);
  deleteRepair_order(roId);
  tryToDeleteANonExistingRepair_order(roId);
  verifyRepair_orderDoesNotExist(roId);
  
});

// ---- crud:repair_order:nondet:6:3 ----
bthread("crud:repair_order:nondet:6:3", function () {
  let roId = 205;
  addRepair_order(roId);
  tryToAddExistingRepair_order(roId);
  verifyRepair_orderExists(roId);
  deleteRepair_order(roId);
  tryToDeleteANonExistingRepair_order(roId);
  verifyRepair_orderDoesNotExist(roId);
  
});

// ---- crud:repair_order:nondet:6:4 ----
bthread("crud:repair_order:nondet:6:4", function () {
  let roId = 206;
  addRepair_order(roId);
  tryToAddExistingRepair_order(roId);
  deleteRepair_order(roId);
  tryToDeleteANonExistingRepair_order(roId);
  verifyRepair_orderDoesNotExist(roId);
  
});

// ---- crud:reset:nondet:7:1 ----
bthread("crud:reset:nondet:7:1", function () {
  let id = 206;
  addReset(id);
  tryToAddExistingReset(id);
  verifyResetExists(id);
  updateReset(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:7:2 ----
bthread("crud:reset:nondet:7:2", function () {
  let id = 206;
  addReset(id);
  tryToAddExistingReset(id);
  updateReset(id);
  verifyResetExists(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:7:3 ----
bthread("crud:reset:nondet:7:3", function () {
  let id = 206;
  addReset(id);
  tryToAddExistingReset(id);
  verifyResetExists(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:7:4 ----
bthread("crud:reset:nondet:7:4", function () {
  let id = 207;
  addReset(id);
  tryToAddExistingReset(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});
