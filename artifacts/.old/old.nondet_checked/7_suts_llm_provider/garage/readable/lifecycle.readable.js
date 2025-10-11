/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_car(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCar(id); } catch (_e) {}
  addCar(id);
  verifyCarExists(id);
  tryToAddExistingCar(id);
  deleteCar(id);
  verifyCarDoesNotExist(id);
}

function lifecycle_chain(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingChain(id); } catch (_e) {}
  addChain(id);
  verifyChainExists(id);
  tryToAddExistingChain(id);
  deleteChain(id);
  verifyChainDoesNotExist(id);
}

function lifecycle_customer(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCustomer(id); } catch (_e) {}
  addCustomer(id);
  verifyCustomerExists(id);
  tryToAddExistingCustomer(id);
  deleteCustomer(id);
  verifyCustomerDoesNotExist(id);
}

function lifecycle_garage(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingGarage(id); } catch (_e) {}
  addGarage(id);
  verifyGarageExists(id);
  tryToAddExistingGarage(id);
  deleteGarage(id);
  verifyGarageDoesNotExist(id);
}

function lifecycle_periodic_maintenance(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPeriodic_maintenance(id); } catch (_e) {}
  addPeriodic_maintenance(id);
  verifyPeriodic_maintenanceExists(id);
  tryToAddExistingPeriodic_maintenance(id);
  deletePeriodic_maintenance(id);
  verifyPeriodic_maintenanceDoesNotExist(id);
}

function lifecycle_repair_order(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRepair_order(id); } catch (_e) {}
  addRepair_order(id);
  verifyRepair_orderExists(id);
  tryToAddExistingRepair_order(id);
  deleteRepair_order(id);
  verifyRepair_orderDoesNotExist(id);
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
