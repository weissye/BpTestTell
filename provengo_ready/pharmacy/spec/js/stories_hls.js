// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Drug:nondet:1:1
bthread("crud:Drug:nondet:1:1", function () {
  let id = 200;
  addDrug(200);
  tryToAddExistingDrug(200);
  verifyDrugExists(id);
  updateDrug(id, 200);
  deleteDrug(id);
  tryToDeleteANonExistingDrug(id);
  verifyDrugDoesNotExist(id);
});

// Story: crud:Drug:nondet:1:2
bthread("crud:Drug:nondet:1:2", function () {
  let id = 201;
  addDrug(201);
  tryToAddExistingDrug(201);
  updateDrug(id, 201);
  verifyDrugExists(id);
  deleteDrug(id);
  tryToDeleteANonExistingDrug(id);
  verifyDrugDoesNotExist(id);
});

// Story: crud:Drug:nondet:negative:dup-add
bthread("crud:Drug:nondet:negative:dup-add", function () {
  let id = 206;
  addDrug(206);
  verifyDrugExists(id);
  tryToAddExistingDrug(206);
  verifyDrugExists(id);
});

// Story: crud:Drug:nondet:existing:update
bthread("crud:Drug:nondet:existing:update", function () {
  let ev = waitForAnyDrugAdded();
  let args = Object.values(ev);
  block(matchDeletedDrug.apply(null, args), function () {
    // verifyDrugExists.apply(null, args);
    // updateDrug.apply(null, args);
  });
});

// Story: monitor:Drug:add
bthread("monitor:Drug:add", function () {
  while (true) {
    let ev = waitForAnyDrugAdded();
    let args = Object.values(ev);
    block(matchDeletedDrug.apply(null, args), function () {
      // verifyDrugExists.apply(null, args);
    });
  }
});

// Story: crud:Patient:nondet:1:1
bthread("crud:Patient:nondet:1:1", function () {
  let id = 210;
  addPatient(210);
  tryToAddExistingPatient(210);
  verifyPatientExists(id);
  updatePatient(id, 210);
  deletePatient(id);
  tryToDeleteANonExistingPatient(id);
  verifyPatientDoesNotExist(id);
});

// Story: crud:Patient:nondet:1:2
bthread("crud:Patient:nondet:1:2", function () {
  let id = 211;
  addPatient(211);
  tryToAddExistingPatient(211);
  updatePatient(id, 211);
  verifyPatientExists(id);
  deletePatient(id);
  tryToDeleteANonExistingPatient(id);
  verifyPatientDoesNotExist(id);
});

// Story: crud:Patient:nondet:negative:dup-add
bthread("crud:Patient:nondet:negative:dup-add", function () {
  let id = 216;
  addPatient(216);
  verifyPatientExists(id);
  tryToAddExistingPatient(216);
  verifyPatientExists(id);
});

// Story: crud:Patient:nondet:existing:update
bthread("crud:Patient:nondet:existing:update", function () {
  let ev = waitForAnyPatientAdded();
  let args = Object.values(ev);
  block(matchDeletedPatient.apply(null, args), function () {
    // verifyPatientExists.apply(null, args);
    // updatePatient.apply(null, args);
  });
});

// Story: monitor:Patient:add
bthread("monitor:Patient:add", function () {
  while (true) {
    let ev = waitForAnyPatientAdded();
    let args = Object.values(ev);
    block(matchDeletedPatient.apply(null, args), function () {
      // verifyPatientExists.apply(null, args);
    });
  }
});

// Story: crud:Order:nondet:1:1
bthread("crud:Order:nondet:1:1", function () {
  let id = 220;
  addOrder(220);
  tryToAddExistingOrder(220);
  verifyOrderExists(id);
  updateOrder(id, 220);
  deleteOrder(id);
  tryToDeleteANonExistingOrder(id);
  verifyOrderDoesNotExist(id);
});

// Story: crud:Order:nondet:1:2
bthread("crud:Order:nondet:1:2", function () {
  let id = 221;
  addOrder(221);
  tryToAddExistingOrder(221);
  updateOrder(id, 221);
  verifyOrderExists(id);
  deleteOrder(id);
  tryToDeleteANonExistingOrder(id);
  verifyOrderDoesNotExist(id);
});

// Story: crud:Order:nondet:negative:dup-add
bthread("crud:Order:nondet:negative:dup-add", function () {
  let id = 226;
  addOrder(226);
  verifyOrderExists(id);
  tryToAddExistingOrder(226);
  verifyOrderExists(id);
});

// Story: crud:Order:nondet:existing:update
bthread("crud:Order:nondet:existing:update", function () {
  let ev = waitForAnyOrderAdded();
  let args = Object.values(ev);
  block(matchDeletedOrder.apply(null, args), function () {
    // verifyOrderExists.apply(null, args);
    // updateOrder.apply(null, args);
  });
});

// Story: monitor:Order:add
bthread("monitor:Order:add", function () {
  while (true) {
    let ev = waitForAnyOrderAdded();
    let args = Object.values(ev);
    block(matchDeletedOrder.apply(null, args), function () {
      // verifyOrderExists.apply(null, args);
    });
  }
});

// Story: crud:Prescription:nondet:1:1
bthread("crud:Prescription:nondet:1:1", function () {
  let id = 230;
  addPrescription(230);
  tryToAddExistingPrescription(230);
  verifyPrescriptionExists(id);
  updatePrescription(id, 230);
  deletePrescription(id);
  tryToDeleteANonExistingPrescription(id);
  verifyPrescriptionDoesNotExist(id);
});

// Story: crud:Prescription:nondet:1:2
bthread("crud:Prescription:nondet:1:2", function () {
  let id = 231;
  addPrescription(231);
  tryToAddExistingPrescription(231);
  updatePrescription(id, 231);
  verifyPrescriptionExists(id);
  deletePrescription(id);
  tryToDeleteANonExistingPrescription(id);
  verifyPrescriptionDoesNotExist(id);
});

// Story: crud:Prescription:nondet:negative:dup-add
bthread("crud:Prescription:nondet:negative:dup-add", function () {
  let id = 236;
  addPrescription(236);
  verifyPrescriptionExists(id);
  tryToAddExistingPrescription(236);
  verifyPrescriptionExists(id);
});

// Story: crud:Prescription:nondet:existing:update
bthread("crud:Prescription:nondet:existing:update", function () {
  let ev = waitForAnyPrescriptionAdded();
  let args = Object.values(ev);
  block(matchDeletedPrescription.apply(null, args), function () {
    // verifyPrescriptionExists.apply(null, args);
    // updatePrescription.apply(null, args);
  });
});

// Story: monitor:Prescription:add
bthread("monitor:Prescription:add", function () {
  while (true) {
    let ev = waitForAnyPrescriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedPrescription.apply(null, args), function () {
      // verifyPrescriptionExists.apply(null, args);
    });
  }
});

// Story: crud:Inventory:nondet:1:1
bthread("crud:Inventory:nondet:1:1", function () {
  let ndc = "ndc_240";
  addInventory("ndc_240");
  tryToAddExistingInventory("ndc_240");
  verifyInventoryExists(ndc);
  updateInventory(ndc, "ndc_240");
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
});

// Story: crud:Inventory:nondet:1:2
bthread("crud:Inventory:nondet:1:2", function () {
  let ndc = "ndc_241";
  addInventory("ndc_241");
  tryToAddExistingInventory("ndc_241");
  updateInventory(ndc, "ndc_241");
  verifyInventoryExists(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
});

// Story: crud:Inventory:nondet:negative:dup-add
bthread("crud:Inventory:nondet:negative:dup-add", function () {
  let ndc = "ndc_246";
  addInventory("ndc_246");
  verifyInventoryExists(ndc);
  tryToAddExistingInventory("ndc_246");
  verifyInventoryExists(ndc);
});

// Story: crud:Inventory:nondet:existing:update
bthread("crud:Inventory:nondet:existing:update", function () {
  let ev = waitForAnyInventoryAdded();
  let args = Object.values(ev);
  block(matchDeletedInventory.apply(null, args), function () {
    // verifyInventoryExists.apply(null, args);
    // updateInventory.apply(null, args);
  });
});

// Story: monitor:Inventory:add
bthread("monitor:Inventory:add", function () {
  while (true) {
    let ev = waitForAnyInventoryAdded();
    let args = Object.values(ev);
    block(matchDeletedInventory.apply(null, args), function () {
      // verifyInventoryExists.apply(null, args);
    });
  }
});
