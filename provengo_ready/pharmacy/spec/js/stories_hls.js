// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Drug:nondet:1:1
bthread("crud:Drug:nondet:1:1", function () {
  let name = "name_200";
  let id = 200;
  createDrug("name_200", 200);
  tryToAddExistingDrug("name_200", 200);
  verifyDrugExists("name_200", 200);
  updateDrug("name_200", 200);
  deleteDrug("name_200", 200);
  tryToDeleteANonExistingDrug("name_200", 200);
  verifyDrugDoesNotExist("name_200", 200);
});

// Story: crud:Drug:nondet:1:2
bthread("crud:Drug:nondet:1:2", function () {
  let name = "name_201";
  let id = 201;
  createDrug("name_201", 201);
  tryToAddExistingDrug("name_201", 201);
  updateDrug("name_201", 201);
  verifyDrugExists("name_201", 201);
  deleteDrug("name_201", 201);
  tryToDeleteANonExistingDrug("name_201", 201);
  verifyDrugDoesNotExist("name_201", 201);
});

// Story: crud:Drug:nondet:negative:dup-add
bthread("crud:Drug:nondet:negative:dup-add", function () {
  let name = "name_206";
  let id = 206;
  createDrug("name_206", 206);
  verifyDrugExists("name_206", 206);
  tryToAddExistingDrug("name_206", 206);
  verifyDrugExists("name_206", 206);
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
  let name = "name_210";
  let id = 210;
  createPatient("name_210", 210);
  tryToAddExistingPatient("name_210", 210);
  verifyPatientExists("name_210", 210);
  updatePatient("name_210", 210);
  deletePatient("name_210", 210);
  tryToDeleteANonExistingPatient("name_210", 210);
  verifyPatientDoesNotExist("name_210", 210);
});

// Story: crud:Patient:nondet:1:2
bthread("crud:Patient:nondet:1:2", function () {
  let name = "name_211";
  let id = 211;
  createPatient("name_211", 211);
  tryToAddExistingPatient("name_211", 211);
  updatePatient("name_211", 211);
  verifyPatientExists("name_211", 211);
  deletePatient("name_211", 211);
  tryToDeleteANonExistingPatient("name_211", 211);
  verifyPatientDoesNotExist("name_211", 211);
});

// Story: crud:Patient:nondet:negative:dup-add
bthread("crud:Patient:nondet:negative:dup-add", function () {
  let name = "name_216";
  let id = 216;
  createPatient("name_216", 216);
  verifyPatientExists("name_216", 216);
  tryToAddExistingPatient("name_216", 216);
  verifyPatientExists("name_216", 216);
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
  let name = "name_220";
  let id = 220;
  createOrder("name_220", 220);
  tryToAddExistingOrder("name_220", 220);
  verifyOrderExists("name_220", 220);
  updateOrder("name_220", 220);
  deleteOrder("name_220", 220);
  tryToDeleteANonExistingOrder("name_220", 220);
  verifyOrderDoesNotExist("name_220", 220);
});

// Story: crud:Order:nondet:1:2
bthread("crud:Order:nondet:1:2", function () {
  let name = "name_221";
  let id = 221;
  createOrder("name_221", 221);
  tryToAddExistingOrder("name_221", 221);
  updateOrder("name_221", 221);
  verifyOrderExists("name_221", 221);
  deleteOrder("name_221", 221);
  tryToDeleteANonExistingOrder("name_221", 221);
  verifyOrderDoesNotExist("name_221", 221);
});

// Story: crud:Order:nondet:negative:dup-add
bthread("crud:Order:nondet:negative:dup-add", function () {
  let name = "name_226";
  let id = 226;
  createOrder("name_226", 226);
  verifyOrderExists("name_226", 226);
  tryToAddExistingOrder("name_226", 226);
  verifyOrderExists("name_226", 226);
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
  let name = "name_230";
  let id = 230;
  createPrescription("name_230", 230);
  tryToAddExistingPrescription("name_230", 230);
  verifyPrescriptionExists("name_230", 230);
  updatePrescription("name_230", 230);
  deletePrescription("name_230", 230);
  tryToDeleteANonExistingPrescription("name_230", 230);
  verifyPrescriptionDoesNotExist("name_230", 230);
});

// Story: crud:Prescription:nondet:1:2
bthread("crud:Prescription:nondet:1:2", function () {
  let name = "name_231";
  let id = 231;
  createPrescription("name_231", 231);
  tryToAddExistingPrescription("name_231", 231);
  updatePrescription("name_231", 231);
  verifyPrescriptionExists("name_231", 231);
  deletePrescription("name_231", 231);
  tryToDeleteANonExistingPrescription("name_231", 231);
  verifyPrescriptionDoesNotExist("name_231", 231);
});

// Story: crud:Prescription:nondet:negative:dup-add
bthread("crud:Prescription:nondet:negative:dup-add", function () {
  let name = "name_236";
  let id = 236;
  createPrescription("name_236", 236);
  verifyPrescriptionExists("name_236", 236);
  tryToAddExistingPrescription("name_236", 236);
  verifyPrescriptionExists("name_236", 236);
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
bthread("crud:Inventory:nondet:1:2", function () {
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
bthread("crud:Inventory:nondet:negative:dup-add", function () {
  let ndc = "ndc_246";
  createInventory("ndc_246");
  verifyInventoryExists("ndc_246");
  tryToAddExistingInventory("ndc_246");
  verifyInventoryExists("ndc_246");
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
