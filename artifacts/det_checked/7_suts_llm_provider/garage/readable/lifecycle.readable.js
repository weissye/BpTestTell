/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_car(vin) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCar(vin); } catch (_e) {}
  addCar(vin);
  verifyCarExists(vin);
  tryToAddExistingCar(vin);
  deleteCar(vin);
  verifyCarDoesNotExist(vin);
}

function lifecycle_chain(chainId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingChain(chainId); } catch (_e) {}
  addChain(chainId);
  verifyChainExists(chainId);
  tryToAddExistingChain(chainId);
  deleteChain(chainId);
  verifyChainDoesNotExist(chainId);
}

function lifecycle_customer(customerId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCustomer(customerId); } catch (_e) {}
  addCustomer(customerId);
  verifyCustomerExists(customerId);
  tryToAddExistingCustomer(customerId);
  deleteCustomer(customerId);
  verifyCustomerDoesNotExist(customerId);
}

function lifecycle_garage(garageId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingGarage(garageId); } catch (_e) {}
  addGarage(garageId);
  verifyGarageExists(garageId);
  tryToAddExistingGarage(garageId);
  deleteGarage(garageId);
  verifyGarageDoesNotExist(garageId);
}

function lifecycle_periodic_maintenance(pmId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPeriodic_maintenance(pmId); } catch (_e) {}
  addPeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceExists(pmId);
  tryToAddExistingPeriodic_maintenance(pmId);
  deletePeriodic_maintenance(pmId);
  verifyPeriodic_maintenanceDoesNotExist(pmId);
}

function lifecycle_repair_order(roId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRepair_order(roId); } catch (_e) {}
  addRepair_order(roId);
  verifyRepair_orderExists(roId);
  tryToAddExistingRepair_order(roId);
  deleteRepair_order(roId);
  verifyRepair_orderDoesNotExist(roId);
}

function lifecycle_reset(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingReset(id); } catch (_e) {}
  addReset(id);
  verifyResetExists(id);
  tryToAddExistingReset(id);
  deleteReset(id);
  verifyResetDoesNotExist(id);
}
