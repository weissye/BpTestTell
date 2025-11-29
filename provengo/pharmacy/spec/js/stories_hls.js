// Auto-generated HLS stories
//@provengo summon rest

// Story: crud:Drug:nondet:1:1
bthread("crud:Drug:nondet:1:1", function () {
  let id = 200;
  createDrug(200);
  waitForDrugAdded(200);
  tryToAddExistingDrug(200);
  verifyDrugExists(200);
  updateDrug(200);
  deleteDrug(200);
  tryToDeleteANonExistingDrug(200);
  verifyDrugDoesNotExist(200);
});

// Story: crud:Drug:nondet:1:2
bthread("crud:Drug:nondet:1:2", function () {
  let id = 201;
  createDrug(201);
  waitForDrugAdded(201);
  tryToAddExistingDrug(201);
  updateDrug(201);
  verifyDrugExists(201);
  deleteDrug(201);
  tryToDeleteANonExistingDrug(201);
  verifyDrugDoesNotExist(201);
});

// Story: crud:Drug:nondet:negative:dup-add
bthread("crud:Drug:nondet:negative:dup-add", function () {
  let id = 206;
  createDrug(206);
  waitForDrugAdded(206);
  verifyDrugExists(206);
  tryToAddExistingDrug(206);
  verifyDrugExists(206);
});

// Story: crud:Drug:nondet:existing:update
bthread("crud:Drug:nondet:existing:update", function () {
  let ev = waitForAnyDrugAdded();
  let args = Object.values(ev);
  block(matchDeletedDrug.apply(null, args), function () {
    verifyDrugExists.apply(null, args);
    updateDrug.apply(null, args);
    verifyDrugExists.apply(null, args);
  });
});

// Story: monitor:Drug:add
bthread("monitor:Drug:add", function () {
  while (true) {
    let ev = waitForAnyDrugAdded();
    let args = Object.values(ev);
    block(matchDeletedDrug.apply(null, args), function () {
      verifyDrugExists.apply(null, args);
    });
  }
});

// Story: crud:Patient:nondet:1:1
bthread("crud:Patient:nondet:1:1", function () {
  let id = 210;
  createPatient(210);
  waitForPatientAdded(210);
  tryToAddExistingPatient(210);
  verifyPatientExists(210);
  updatePatient(210);
  deletePatient(210);
  tryToDeleteANonExistingPatient(210);
  verifyPatientDoesNotExist(210);
});

// Story: crud:Patient:nondet:1:2
bthread("crud:Patient:nondet:1:2", function () {
  let id = 211;
  createPatient(211);
  waitForPatientAdded(211);
  tryToAddExistingPatient(211);
  updatePatient(211);
  verifyPatientExists(211);
  deletePatient(211);
  tryToDeleteANonExistingPatient(211);
  verifyPatientDoesNotExist(211);
});

// Story: crud:Patient:nondet:negative:dup-add
bthread("crud:Patient:nondet:negative:dup-add", function () {
  let id = 216;
  createPatient(216);
  waitForPatientAdded(216);
  verifyPatientExists(216);
  tryToAddExistingPatient(216);
  verifyPatientExists(216);
});

// Story: crud:Patient:nondet:existing:update
bthread("crud:Patient:nondet:existing:update", function () {
  let ev = waitForAnyPatientAdded();
  let args = Object.values(ev);
  block(matchDeletedPatient.apply(null, args), function () {
    verifyPatientExists.apply(null, args);
    updatePatient.apply(null, args);
    verifyPatientExists.apply(null, args);
  });
});

// Story: monitor:Patient:add
bthread("monitor:Patient:add", function () {
  while (true) {
    let ev = waitForAnyPatientAdded();
    let args = Object.values(ev);
    block(matchDeletedPatient.apply(null, args), function () {
      verifyPatientExists.apply(null, args);
    });
  }
});

// Story: crud:Order:nondet:1:1
bthread("crud:Order:nondet:1:1", function () {
  let id = 220;
  createOrder(220);
  waitForOrderAdded(220);
  tryToAddExistingOrder(220);
  verifyOrderExists(220);
  updateOrder(220);
  deleteOrder(220);
  tryToDeleteANonExistingOrder(220);
  verifyOrderDoesNotExist(220);
});

// Story: crud:Order:nondet:1:2
bthread("crud:Order:nondet:1:2", function () {
  let id = 221;
  createOrder(221);
  waitForOrderAdded(221);
  tryToAddExistingOrder(221);
  updateOrder(221);
  verifyOrderExists(221);
  deleteOrder(221);
  tryToDeleteANonExistingOrder(221);
  verifyOrderDoesNotExist(221);
});

// Story: crud:Order:nondet:negative:dup-add
bthread("crud:Order:nondet:negative:dup-add", function () {
  let id = 226;
  createOrder(226);
  waitForOrderAdded(226);
  verifyOrderExists(226);
  tryToAddExistingOrder(226);
  verifyOrderExists(226);
});

// Story: crud:Order:nondet:existing:update
bthread("crud:Order:nondet:existing:update", function () {
  let ev = waitForAnyOrderAdded();
  let args = Object.values(ev);
  block(matchDeletedOrder.apply(null, args), function () {
    verifyOrderExists.apply(null, args);
    updateOrder.apply(null, args);
    verifyOrderExists.apply(null, args);
  });
});

// Story: monitor:Order:add
bthread("monitor:Order:add", function () {
  while (true) {
    let ev = waitForAnyOrderAdded();
    let args = Object.values(ev);
    block(matchDeletedOrder.apply(null, args), function () {
      verifyOrderExists.apply(null, args);
    });
  }
});

// Story: crud:Prescription:nondet:1:1
bthread("crud:Prescription:nondet:1:1", function () {
  let id = 230;
  createPrescription(230);
  waitForPrescriptionAdded(230);
  tryToAddExistingPrescription(230);
  verifyPrescriptionExists(230);
  updatePrescription(230);
  deletePrescription(230);
  tryToDeleteANonExistingPrescription(230);
  verifyPrescriptionDoesNotExist(230);
});

// Story: crud:Prescription:nondet:1:2
bthread("crud:Prescription:nondet:1:2", function () {
  let id = 231;
  createPrescription(231);
  waitForPrescriptionAdded(231);
  tryToAddExistingPrescription(231);
  updatePrescription(231);
  verifyPrescriptionExists(231);
  deletePrescription(231);
  tryToDeleteANonExistingPrescription(231);
  verifyPrescriptionDoesNotExist(231);
});

// Story: crud:Prescription:nondet:negative:dup-add
bthread("crud:Prescription:nondet:negative:dup-add", function () {
  let id = 236;
  createPrescription(236);
  waitForPrescriptionAdded(236);
  verifyPrescriptionExists(236);
  tryToAddExistingPrescription(236);
  verifyPrescriptionExists(236);
});

// Story: crud:Prescription:nondet:existing:update
bthread("crud:Prescription:nondet:existing:update", function () {
  let ev = waitForAnyPrescriptionAdded();
  let args = Object.values(ev);
  block(matchDeletedPrescription.apply(null, args), function () {
    verifyPrescriptionExists.apply(null, args);
    updatePrescription.apply(null, args);
    verifyPrescriptionExists.apply(null, args);
  });
});

// Story: monitor:Prescription:add
bthread("monitor:Prescription:add", function () {
  while (true) {
    let ev = waitForAnyPrescriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedPrescription.apply(null, args), function () {
      verifyPrescriptionExists.apply(null, args);
    });
  }
});

// Story: crud:Inventory:nondet:1:1
bthread("crud:Inventory:nondet:1:1", function () {
  let ndc = 240;
  createInventory(240);
  waitForInventoryAdded(240);
  tryToAddExistingInventory(240);
  verifyInventoryExists(240);
  updateInventory(240);
  deleteInventory(240);
  tryToDeleteANonExistingInventory(240);
  verifyInventoryDoesNotExist(240);
});

// Story: crud:Inventory:nondet:1:2
bthread("crud:Inventory:nondet:1:2", function () {
  let ndc = 241;
  createInventory(241);
  waitForInventoryAdded(241);
  tryToAddExistingInventory(241);
  updateInventory(241);
  verifyInventoryExists(241);
  deleteInventory(241);
  tryToDeleteANonExistingInventory(241);
  verifyInventoryDoesNotExist(241);
});

// Story: crud:Inventory:nondet:negative:dup-add
bthread("crud:Inventory:nondet:negative:dup-add", function () {
  let ndc = 246;
  createInventory(246);
  waitForInventoryAdded(246);
  verifyInventoryExists(246);
  tryToAddExistingInventory(246);
  verifyInventoryExists(246);
});

// Story: crud:Inventory:nondet:existing:update
bthread("crud:Inventory:nondet:existing:update", function () {
  let ev = waitForAnyInventoryAdded();
  let args = Object.values(ev);
  block(matchDeletedInventory.apply(null, args), function () {
    verifyInventoryExists.apply(null, args);
    updateInventory.apply(null, args);
    verifyInventoryExists.apply(null, args);
  });
});

// Story: monitor:Inventory:add
bthread("monitor:Inventory:add", function () {
  while (true) {
    let ev = waitForAnyInventoryAdded();
    let args = Object.values(ev);
    block(matchDeletedInventory.apply(null, args), function () {
      verifyInventoryExists.apply(null, args);
    });
  }
});
