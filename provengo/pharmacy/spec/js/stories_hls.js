// Auto-generated HLS stories
//@provengo summon rest


// Story: crud:Drug:nondet:1:1
bp.registerBThread("crud:Drug:nondet:1:1", function () {
  let id = 200;
  createDrug(200);
  tryToAddExistingDrug(200);
  verifyDrugExists(200);
  updateDrug(200);
  deleteDrug(200);
  tryToDeleteANonExistingDrug(200);
  verifyDrugDoesNotExist(200);
});

// Story: crud:Drug:nondet:1:2
bp.registerBThread("crud:Drug:nondet:1:2", function () {
  let id = 201;
  createDrug(201);
  tryToAddExistingDrug(201);
  updateDrug(201);
  verifyDrugExists(201);
  deleteDrug(201);
  tryToDeleteANonExistingDrug(201);
  verifyDrugDoesNotExist(201);
});

// Story: crud:Drug:nondet:negative:dup-add
bp.registerBThread("crud:Drug:nondet:negative:dup-add", function () {
  let id = 206;
  createDrug(206);
  verifyDrugExists(206);
  tryToAddExistingDrug(206);
  verifyDrugExists(206);
});

// Story: crud:Drug:nondet:existing:update
bp.registerBThread("crud:Drug:nondet:existing:update", function () {
  let ev = waitForAnyDrugAdded();
  let args = Object.values(ev);
  block(matchDeletedDrug.apply(null, args), function () {
    verifyDrugExists.apply(null, args);
    updateDrug.apply(null, args);
    verifyDrugExists.apply(null, args);
  });
});

// Story: monitor:Drug:add
bp.registerBThread("monitor:Drug:add", function () {
  while (true) {
    let ev = waitForAnyDrugAdded();
    let args = Object.values(ev);
    block(matchDeletedDrug.apply(null, args), function () {
      verifyDrugExists.apply(null, args);
    });
  }
});

// Story: crud:Patient:nondet:1:1
bp.registerBThread("crud:Patient:nondet:1:1", function () {
  let id = 210;
  createPatient(210);
  tryToAddExistingPatient(210);
  verifyPatientExists(210);
  updatePatient(210);
  deletePatient(210);
  tryToDeleteANonExistingPatient(210);
  verifyPatientDoesNotExist(210);
});

// Story: crud:Patient:nondet:1:2
bp.registerBThread("crud:Patient:nondet:1:2", function () {
  let id = 211;
  createPatient(211);
  tryToAddExistingPatient(211);
  updatePatient(211);
  verifyPatientExists(211);
  deletePatient(211);
  tryToDeleteANonExistingPatient(211);
  verifyPatientDoesNotExist(211);
});

// Story: crud:Patient:nondet:negative:dup-add
bp.registerBThread("crud:Patient:nondet:negative:dup-add", function () {
  let id = 216;
  createPatient(216);
  verifyPatientExists(216);
  tryToAddExistingPatient(216);
  verifyPatientExists(216);
});

// Story: crud:Patient:nondet:existing:update
bp.registerBThread("crud:Patient:nondet:existing:update", function () {
  let ev = waitForAnyPatientAdded();
  let args = Object.values(ev);
  block(matchDeletedPatient.apply(null, args), function () {
    verifyPatientExists.apply(null, args);
    updatePatient.apply(null, args);
    verifyPatientExists.apply(null, args);
  });
});

// Story: monitor:Patient:add
bp.registerBThread("monitor:Patient:add", function () {
  while (true) {
    let ev = waitForAnyPatientAdded();
    let args = Object.values(ev);
    block(matchDeletedPatient.apply(null, args), function () {
      verifyPatientExists.apply(null, args);
    });
  }
});

// Story: crud:Order:nondet:1:1
bp.registerBThread("crud:Order:nondet:1:1", function () {
  let id = 220;
  createOrder(220);
  tryToAddExistingOrder(220);
  verifyOrderExists(220);
  updateOrder(220);
  deleteOrder(220);
  tryToDeleteANonExistingOrder(220);
  verifyOrderDoesNotExist(220);
});

// Story: crud:Order:nondet:1:2
bp.registerBThread("crud:Order:nondet:1:2", function () {
  let id = 221;
  createOrder(221);
  tryToAddExistingOrder(221);
  updateOrder(221);
  verifyOrderExists(221);
  deleteOrder(221);
  tryToDeleteANonExistingOrder(221);
  verifyOrderDoesNotExist(221);
});

// Story: crud:Order:nondet:negative:dup-add
bp.registerBThread("crud:Order:nondet:negative:dup-add", function () {
  let id = 226;
  createOrder(226);
  verifyOrderExists(226);
  tryToAddExistingOrder(226);
  verifyOrderExists(226);
});

// Story: crud:Order:nondet:existing:update
bp.registerBThread("crud:Order:nondet:existing:update", function () {
  let ev = waitForAnyOrderAdded();
  let args = Object.values(ev);
  block(matchDeletedOrder.apply(null, args), function () {
    verifyOrderExists.apply(null, args);
    updateOrder.apply(null, args);
    verifyOrderExists.apply(null, args);
  });
});

// Story: monitor:Order:add
bp.registerBThread("monitor:Order:add", function () {
  while (true) {
    let ev = waitForAnyOrderAdded();
    let args = Object.values(ev);
    block(matchDeletedOrder.apply(null, args), function () {
      verifyOrderExists.apply(null, args);
    });
  }
});

// Story: crud:Prescription:nondet:1:1
bp.registerBThread("crud:Prescription:nondet:1:1", function () {
  let id = 230;
  createPrescription(230);
  tryToAddExistingPrescription(230);
  verifyPrescriptionExists(230);
  updatePrescription(230);
  deletePrescription(230);
  tryToDeleteANonExistingPrescription(230);
  verifyPrescriptionDoesNotExist(230);
});

// Story: crud:Prescription:nondet:1:2
bp.registerBThread("crud:Prescription:nondet:1:2", function () {
  let id = 231;
  createPrescription(231);
  tryToAddExistingPrescription(231);
  updatePrescription(231);
  verifyPrescriptionExists(231);
  deletePrescription(231);
  tryToDeleteANonExistingPrescription(231);
  verifyPrescriptionDoesNotExist(231);
});

// Story: crud:Prescription:nondet:negative:dup-add
bp.registerBThread("crud:Prescription:nondet:negative:dup-add", function () {
  let id = 236;
  createPrescription(236);
  verifyPrescriptionExists(236);
  tryToAddExistingPrescription(236);
  verifyPrescriptionExists(236);
});

// Story: crud:Prescription:nondet:existing:update
bp.registerBThread("crud:Prescription:nondet:existing:update", function () {
  let ev = waitForAnyPrescriptionAdded();
  let args = Object.values(ev);
  block(matchDeletedPrescription.apply(null, args), function () {
    verifyPrescriptionExists.apply(null, args);
    updatePrescription.apply(null, args);
    verifyPrescriptionExists.apply(null, args);
  });
});

// Story: monitor:Prescription:add
bp.registerBThread("monitor:Prescription:add", function () {
  while (true) {
    let ev = waitForAnyPrescriptionAdded();
    let args = Object.values(ev);
    block(matchDeletedPrescription.apply(null, args), function () {
      verifyPrescriptionExists.apply(null, args);
    });
  }
});

// Story: crud:Inventory:nondet:1:1
bp.registerBThread("crud:Inventory:nondet:1:1", function () {
  let ndc = "ndc_240";
  createInventory("ndc_240");
  tryToAddExistingInventory("ndc_240");
  verifyInventoryExists("ndc_240");
  updateInventory("ndc_240");
  deleteInventory("ndc_240");
  tryToDeleteANonExistingInventory("ndc_240");
  verifyInventoryDoesNotExist("ndc_240");
});

// Story: crud:Inventory:nondet:1:2
bp.registerBThread("crud:Inventory:nondet:1:2", function () {
  let ndc = "ndc_241";
  createInventory("ndc_241");
  tryToAddExistingInventory("ndc_241");
  updateInventory("ndc_241");
  verifyInventoryExists("ndc_241");
  deleteInventory("ndc_241");
  tryToDeleteANonExistingInventory("ndc_241");
  verifyInventoryDoesNotExist("ndc_241");
});

// Story: crud:Inventory:nondet:negative:dup-add
bp.registerBThread("crud:Inventory:nondet:negative:dup-add", function () {
  let ndc = "ndc_246";
  createInventory("ndc_246");
  verifyInventoryExists("ndc_246");
  tryToAddExistingInventory("ndc_246");
  verifyInventoryExists("ndc_246");
});

// Story: crud:Inventory:nondet:existing:update
bp.registerBThread("crud:Inventory:nondet:existing:update", function () {
  let ev = waitForAnyInventoryAdded();
  let args = Object.values(ev);
  block(matchDeletedInventory.apply(null, args), function () {
    verifyInventoryExists.apply(null, args);
    updateInventory.apply(null, args);
    verifyInventoryExists.apply(null, args);
  });
});

// Story: monitor:Inventory:add
bp.registerBThread("monitor:Inventory:add", function () {
  while (true) {
    let ev = waitForAnyInventoryAdded();
    let args = Object.values(ev);
    block(matchDeletedInventory.apply(null, args), function () {
      verifyInventoryExists.apply(null, args);
    });
  }
});
