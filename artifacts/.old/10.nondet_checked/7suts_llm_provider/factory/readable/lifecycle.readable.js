/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_machine(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMachine(id); } catch (_e) {}
  addMachine(id);
  verifyMachineExists(id);
  tryToAddExistingMachine(id);
  deleteMachine(id);
  verifyMachineDoesNotExist(id);
}

function lifecycle_maintenance_ticket(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMaintenance_ticket(id); } catch (_e) {}
  addMaintenance_ticket(id);
  verifyMaintenance_ticketExists(id);
  tryToAddExistingMaintenance_ticket(id);
  deleteMaintenance_ticket(id);
  verifyMaintenance_ticketDoesNotExist(id);
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

function lifecycle_sensor_reading(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingSensor_reading(id); } catch (_e) {}
  addSensor_reading(id);
  verifySensor_readingExists(id);
  tryToAddExistingSensor_reading(id);
  deleteSensor_reading(id);
  verifySensor_readingDoesNotExist(id);
}

function lifecycle_workorder(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingWorkorder(id); } catch (_e) {}
  addWorkorder(id);
  verifyWorkorderExists(id);
  tryToAddExistingWorkorder(id);
  deleteWorkorder(id);
  verifyWorkorderDoesNotExist(id);
}
