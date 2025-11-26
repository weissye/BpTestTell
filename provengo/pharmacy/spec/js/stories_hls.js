// Auto-generated HLS stories
//@provengo summon rest


// Story: crud:Drug:nondet:1:1
bp.registerBThread("crud:Drug:nondet:1:1", function () {
  let id = 200;
  let name = "name_200";
  createDrug(200, "name_200");
  tryToAddExistingDrug(200, "name_200");
  verifyDrugExists(200, "name_200");
  updateDrug(200, "name_200");
  deleteDrug(200, "name_200");
  tryToDeleteANonExistingDrug(200, "name_200");
  verifyDrugDoesNotExist(200, "name_200");
});

// Story: crud:Drug:nondet:1:2
bp.registerBThread("crud:Drug:nondet:1:2", function () {
  let id = 201;
  let name = "name_201";
  createDrug(201, "name_201");
  tryToAddExistingDrug(201, "name_201");
  updateDrug(201, "name_201");
  verifyDrugExists(201, "name_201");
  deleteDrug(201, "name_201");
  tryToDeleteANonExistingDrug(201, "name_201");
  verifyDrugDoesNotExist(201, "name_201");
});

// Story: crud:Drug:nondet:negative:dup-add
bp.registerBThread("crud:Drug:nondet:negative:dup-add", function () {
  let id = 206;
  let name = "name_206";
  createDrug(206, "name_206");
  verifyDrugExists(206, "name_206");
  tryToAddExistingDrug(206, "name_206");
  verifyDrugExists(206, "name_206");
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
  let name = "name_210";
  createPatient(210, "name_210");
  tryToAddExistingPatient(210, "name_210");
  verifyPatientExists(210, "name_210");
  updatePatient(210, "name_210");
  deletePatient(210, "name_210");
  tryToDeleteANonExistingPatient(210, "name_210");
  verifyPatientDoesNotExist(210, "name_210");
});

// Story: crud:Patient:nondet:1:2
bp.registerBThread("crud:Patient:nondet:1:2", function () {
  let id = 211;
  let name = "name_211";
  createPatient(211, "name_211");
  tryToAddExistingPatient(211, "name_211");
  updatePatient(211, "name_211");
  verifyPatientExists(211, "name_211");
  deletePatient(211, "name_211");
  tryToDeleteANonExistingPatient(211, "name_211");
  verifyPatientDoesNotExist(211, "name_211");
});

// Story: crud:Patient:nondet:negative:dup-add
bp.registerBThread("crud:Patient:nondet:negative:dup-add", function () {
  let id = 216;
  let name = "name_216";
  createPatient(216, "name_216");
  verifyPatientExists(216, "name_216");
  tryToAddExistingPatient(216, "name_216");
  verifyPatientExists(216, "name_216");
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
  let orderNumber = "orderNumber_220";
  createOrder(220, "orderNumber_220");
  tryToAddExistingOrder(220, "orderNumber_220");
  verifyOrderExists(220, "orderNumber_220");
  updateOrder(220, "orderNumber_220");
  deleteOrder(220, "orderNumber_220");
  tryToDeleteANonExistingOrder(220, "orderNumber_220");
  verifyOrderDoesNotExist(220, "orderNumber_220");
});

// Story: crud:Order:nondet:1:2
bp.registerBThread("crud:Order:nondet:1:2", function () {
  let id = 221;
  let orderNumber = "orderNumber_221";
  createOrder(221, "orderNumber_221");
  tryToAddExistingOrder(221, "orderNumber_221");
  updateOrder(221, "orderNumber_221");
  verifyOrderExists(221, "orderNumber_221");
  deleteOrder(221, "orderNumber_221");
  tryToDeleteANonExistingOrder(221, "orderNumber_221");
  verifyOrderDoesNotExist(221, "orderNumber_221");
});

// Story: crud:Order:nondet:negative:dup-add
bp.registerBThread("crud:Order:nondet:negative:dup-add", function () {
  let id = 226;
  let orderNumber = "orderNumber_226";
  createOrder(226, "orderNumber_226");
  verifyOrderExists(226, "orderNumber_226");
  tryToAddExistingOrder(226, "orderNumber_226");
  verifyOrderExists(226, "orderNumber_226");
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
  let prescriptionNumber = "prescriptionNumber_230";
  createPrescription(230, "prescriptionNumber_230");
  tryToAddExistingPrescription(230, "prescriptionNumber_230");
  verifyPrescriptionExists(230, "prescriptionNumber_230");
  updatePrescription(230, "prescriptionNumber_230");
  deletePrescription(230, "prescriptionNumber_230");
  tryToDeleteANonExistingPrescription(230, "prescriptionNumber_230");
  verifyPrescriptionDoesNotExist(230, "prescriptionNumber_230");
});

// Story: crud:Prescription:nondet:1:2
bp.registerBThread("crud:Prescription:nondet:1:2", function () {
  let id = 231;
  let prescriptionNumber = "prescriptionNumber_231";
  createPrescription(231, "prescriptionNumber_231");
  tryToAddExistingPrescription(231, "prescriptionNumber_231");
  updatePrescription(231, "prescriptionNumber_231");
  verifyPrescriptionExists(231, "prescriptionNumber_231");
  deletePrescription(231, "prescriptionNumber_231");
  tryToDeleteANonExistingPrescription(231, "prescriptionNumber_231");
  verifyPrescriptionDoesNotExist(231, "prescriptionNumber_231");
});

// Story: crud:Prescription:nondet:negative:dup-add
bp.registerBThread("crud:Prescription:nondet:negative:dup-add", function () {
  let id = 236;
  let prescriptionNumber = "prescriptionNumber_236";
  createPrescription(236, "prescriptionNumber_236");
  verifyPrescriptionExists(236, "prescriptionNumber_236");
  tryToAddExistingPrescription(236, "prescriptionNumber_236");
  verifyPrescriptionExists(236, "prescriptionNumber_236");
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
  let name = "name_240";
  createInventory("ndc_240", "name_240");
  tryToAddExistingInventory("ndc_240", "name_240");
  verifyInventoryExists("ndc_240", "name_240");
  updateInventory("ndc_240", "name_240");
  deleteInventory("ndc_240", "name_240");
  tryToDeleteANonExistingInventory("ndc_240", "name_240");
  verifyInventoryDoesNotExist("ndc_240", "name_240");
});

// Story: crud:Inventory:nondet:1:2
bp.registerBThread("crud:Inventory:nondet:1:2", function () {
  let ndc = "ndc_241";
  let name = "name_241";
  createInventory("ndc_241", "name_241");
  tryToAddExistingInventory("ndc_241", "name_241");
  updateInventory("ndc_241", "name_241");
  verifyInventoryExists("ndc_241", "name_241");
  deleteInventory("ndc_241", "name_241");
  tryToDeleteANonExistingInventory("ndc_241", "name_241");
  verifyInventoryDoesNotExist("ndc_241", "name_241");
});

// Story: crud:Inventory:nondet:negative:dup-add
bp.registerBThread("crud:Inventory:nondet:negative:dup-add", function () {
  let ndc = "ndc_246";
  let name = "name_246";
  createInventory("ndc_246", "name_246");
  verifyInventoryExists("ndc_246", "name_246");
  tryToAddExistingInventory("ndc_246", "name_246");
  verifyInventoryExists("ndc_246", "name_246");
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
