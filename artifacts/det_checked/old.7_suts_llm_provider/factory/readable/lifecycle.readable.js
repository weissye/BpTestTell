/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_machine(name, status) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMachine(name, status); } catch (_e) {}
  addMachine(name, status);
  verifyMachineExists(name, status);
  tryToAddExistingMachine(name, status);
  deleteMachine(name, status);
  verifyMachineDoesNotExist(name, status);
}

function lifecycle_maintenance_ticket(issue, status) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingMaintenance_ticket(issue, status); } catch (_e) {}
  addMaintenance_ticket(issue, status);
  verifyMaintenance_ticketExists(issue, status);
  tryToAddExistingMaintenance_ticket(issue, status);
  deleteMaintenance_ticket(issue, status);
  verifyMaintenance_ticketDoesNotExist(issue, status);
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

function lifecycle_sensor_reading(sensorId, value) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingSensor_reading(sensorId, value); } catch (_e) {}
  addSensor_reading(sensorId, value);
  verifySensor_readingExists(sensorId, value);
  tryToAddExistingSensor_reading(sensorId, value);
  deleteSensor_reading(sensorId, value);
  verifySensor_readingDoesNotExist(sensorId, value);
}

function lifecycle_workorder(description, status) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingWorkorder(description, status); } catch (_e) {}
  addWorkorder(description, status);
  verifyWorkorderExists(description, status);
  tryToAddExistingWorkorder(description, status);
  deleteWorkorder(description, status);
  verifyWorkorderDoesNotExist(description, status);
}
