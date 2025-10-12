/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_drug(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingDrug(id); } catch (_e) {}
  addDrug(id);
  verifyDrugExists(id);
  tryToAddExistingDrug(id);
  deleteDrug(id);
  verifyDrugDoesNotExist(id);
}

function lifecycle_inventory(ndc) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingInventory(ndc); } catch (_e) {}
  addInventory(ndc);
  verifyInventoryExists(ndc);
  tryToAddExistingInventory(ndc);
  deleteInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
}

function lifecycle_order(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingOrder(id); } catch (_e) {}
  addOrder(id);
  verifyOrderExists(id);
  tryToAddExistingOrder(id);
  deleteOrder(id);
  verifyOrderDoesNotExist(id);
}

function lifecycle_patient(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPatient(id); } catch (_e) {}
  addPatient(id);
  verifyPatientExists(id);
  tryToAddExistingPatient(id);
  deletePatient(id);
  verifyPatientDoesNotExist(id);
}

function lifecycle_prescription(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPrescription(id); } catch (_e) {}
  addPrescription(id);
  verifyPrescriptionExists(id);
  tryToAddExistingPrescription(id);
  deletePrescription(id);
  verifyPrescriptionDoesNotExist(id);
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
