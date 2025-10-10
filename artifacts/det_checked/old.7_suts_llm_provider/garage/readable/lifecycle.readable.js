/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_car(vin, make) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCar(vin, make); } catch (_e) {}
  addCar(vin, make);
  verifyCarExists(vin, make);
  tryToAddExistingCar(vin, make);
  deleteCar(vin, make);
  verifyCarDoesNotExist(vin, make);
}

function lifecycle_chain(name) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingChain(name); } catch (_e) {}
  addChain(name);
  verifyChainExists(name);
  tryToAddExistingChain(name);
  deleteChain(name);
  verifyChainDoesNotExist(name);
}

function lifecycle_customer(name) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCustomer(name); } catch (_e) {}
  addCustomer(name);
  verifyCustomerExists(name);
  tryToAddExistingCustomer(name);
  deleteCustomer(name);
  verifyCustomerDoesNotExist(name);
}

function lifecycle_garage(location) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingGarage(location); } catch (_e) {}
  addGarage(location);
  verifyGarageExists(location);
  tryToAddExistingGarage(location);
  deleteGarage(location);
  verifyGarageDoesNotExist(location);
}

function lifecycle_periodic_maintenance(description) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPeriodic_maintenance(description); } catch (_e) {}
  addPeriodic_maintenance(description);
  verifyPeriodic_maintenanceExists(description);
  tryToAddExistingPeriodic_maintenance(description);
  deletePeriodic_maintenance(description);
  verifyPeriodic_maintenanceDoesNotExist(description);
}

function lifecycle_repair_order(description) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRepair_order(description); } catch (_e) {}
  addRepair_order(description);
  verifyRepair_orderExists(description);
  tryToAddExistingRepair_order(description);
  deleteRepair_order(description);
  verifyRepair_orderDoesNotExist(description);
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
