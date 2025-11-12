// ---- crud:drug:nondet:1:1 ----
bp.registerBThread("crud:drug:nondet:1:1", function () {
  let id = 200;
  addDrug(id);
  tryToAddExistingDrug(id);
  verifyDrugExists(id);
  updateDrug(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrug(id);
  verifyDrugDoesNotExist(id);
  
});

// ---- crud:drug:nondet:1:2 ----
bp.registerBThread("crud:drug:nondet:1:2", function () {
  let id = 200;
  addDrug(id);
  tryToAddExistingDrug(id);
  updateDrug(id);
  verifyDrugExists(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrug(id);
  verifyDrugDoesNotExist(id);
  
});

// ---- crud:drug:nondet:1:3 ----
bp.registerBThread("crud:drug:nondet:1:3", function () {
  let id = 200;
  addDrug(id);
  tryToAddExistingDrug(id);
  verifyDrugExists(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrug(id);
  verifyDrugDoesNotExist(id);
  
});

// ---- crud:drug:nondet:1:4 ----
bp.registerBThread("crud:drug:nondet:1:4", function () {
  let id = 201;
  addDrug(id);
  tryToAddExistingDrug(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrug(id);
  verifyDrugDoesNotExist(id);
  
});

// ---- crud:inventory:nondet:2:1 ----
bp.registerBThread("crud:inventory:nondet:2:1", function () {
  let ndc = "ndc_201";
  addInventory(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
  updateInventory(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
  
});

// ---- crud:inventory:nondet:2:2 ----
bp.registerBThread("crud:inventory:nondet:2:2", function () {
  let ndc = "ndc_201";
  addInventory(ndc);
  tryToAddExistingInventory(ndc);
  updateInventory(ndc);
  verifyInventoryExists(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
  
});

// ---- crud:inventory:nondet:2:3 ----
bp.registerBThread("crud:inventory:nondet:2:3", function () {
  let ndc = "ndc_201";
  addInventory(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
  
});

// ---- crud:inventory:nondet:2:4 ----
bp.registerBThread("crud:inventory:nondet:2:4", function () {
  let ndc = "ndc_202";
  addInventory(ndc);
  tryToAddExistingInventory(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
  
});

// ---- crud:order:nondet:3:1 ----
bp.registerBThread("crud:order:nondet:3:1", function () {
  let id = 202;
  addOrder(id);
  tryToAddExistingOrder(id);
  verifyOrderExists(id);
  updateOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrder(id);
  verifyOrderDoesNotExist(id);
  
});

// ---- crud:order:nondet:3:2 ----
bp.registerBThread("crud:order:nondet:3:2", function () {
  let id = 202;
  addOrder(id);
  tryToAddExistingOrder(id);
  updateOrder(id);
  verifyOrderExists(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrder(id);
  verifyOrderDoesNotExist(id);
  
});

// ---- crud:order:nondet:3:3 ----
bp.registerBThread("crud:order:nondet:3:3", function () {
  let id = 202;
  addOrder(id);
  tryToAddExistingOrder(id);
  verifyOrderExists(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrder(id);
  verifyOrderDoesNotExist(id);
  
});

// ---- crud:order:nondet:3:4 ----
bp.registerBThread("crud:order:nondet:3:4", function () {
  let id = 203;
  addOrder(id);
  tryToAddExistingOrder(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrder(id);
  verifyOrderDoesNotExist(id);
  
});

// ---- crud:patient:nondet:4:1 ----
bp.registerBThread("crud:patient:nondet:4:1", function () {
  let id = 203;
  addPatient(id);
  tryToAddExistingPatient(id);
  verifyPatientExists(id);
  updatePatient(id);
  deletePatient(id);
  tryToDeleteANonExistingPatient(id);
  verifyPatientDoesNotExist(id);
  
});

// ---- crud:patient:nondet:4:2 ----
bp.registerBThread("crud:patient:nondet:4:2", function () {
  let id = 203;
  addPatient(id);
  tryToAddExistingPatient(id);
  updatePatient(id);
  verifyPatientExists(id);
  deletePatient(id);
  tryToDeleteANonExistingPatient(id);
  verifyPatientDoesNotExist(id);
  
});

// ---- crud:patient:nondet:4:3 ----
bp.registerBThread("crud:patient:nondet:4:3", function () {
  let id = 203;
  addPatient(id);
  tryToAddExistingPatient(id);
  verifyPatientExists(id);
  deletePatient(id);
  tryToDeleteANonExistingPatient(id);
  verifyPatientDoesNotExist(id);
  
});

// ---- crud:patient:nondet:4:4 ----
bp.registerBThread("crud:patient:nondet:4:4", function () {
  let id = 204;
  addPatient(id);
  tryToAddExistingPatient(id);
  deletePatient(id);
  tryToDeleteANonExistingPatient(id);
  verifyPatientDoesNotExist(id);
  
});

// ---- crud:prescription:nondet:5:1 ----
bp.registerBThread("crud:prescription:nondet:5:1", function () {
  let id = 204;
  addPrescription(id);
  tryToAddExistingPrescription(id);
  verifyPrescriptionExists(id);
  updatePrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescription(id);
  verifyPrescriptionDoesNotExist(id);
  
});

// ---- crud:prescription:nondet:5:2 ----
bp.registerBThread("crud:prescription:nondet:5:2", function () {
  let id = 204;
  addPrescription(id);
  tryToAddExistingPrescription(id);
  updatePrescription(id);
  verifyPrescriptionExists(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescription(id);
  verifyPrescriptionDoesNotExist(id);
  
});

// ---- crud:prescription:nondet:5:3 ----
bp.registerBThread("crud:prescription:nondet:5:3", function () {
  let id = 204;
  addPrescription(id);
  tryToAddExistingPrescription(id);
  verifyPrescriptionExists(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescription(id);
  verifyPrescriptionDoesNotExist(id);
  
});

// ---- crud:prescription:nondet:5:4 ----
bp.registerBThread("crud:prescription:nondet:5:4", function () {
  let id = 205;
  addPrescription(id);
  tryToAddExistingPrescription(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescription(id);
  verifyPrescriptionDoesNotExist(id);
  
});

// ---- crud:reset:nondet:6:1 ----
bp.registerBThread("crud:reset:nondet:6:1", function () {
  let id = 205;
  addReset(id);
  tryToAddExistingReset(id);
  verifyResetExists(id);
  updateReset(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:6:2 ----
bp.registerBThread("crud:reset:nondet:6:2", function () {
  let id = 205;
  addReset(id);
  tryToAddExistingReset(id);
  updateReset(id);
  verifyResetExists(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:6:3 ----
bp.registerBThread("crud:reset:nondet:6:3", function () {
  let id = 205;
  addReset(id);
  tryToAddExistingReset(id);
  verifyResetExists(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:6:4 ----
bp.registerBThread("crud:reset:nondet:6:4", function () {
  let id = 206;
  addReset(id);
  tryToAddExistingReset(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});
