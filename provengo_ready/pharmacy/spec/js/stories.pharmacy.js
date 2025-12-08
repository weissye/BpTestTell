// Auto-generated stories for pharmacy
//@provengo summon rest

// Story: crud:Drugs:linear
bthread("crud:Drugs:linear", function () {
  let id = 200;
  let name = "name_200";
  addDrugs(id, name);
  waitForDrugsAdded(id, name);
  tryToAddExistingDrugs(id, name);
  verifyDrugsExists(id, name);
  updateDrugs(id, name);
  deleteDrugs(id, name);
  tryToDeleteANonExistingDrugs(id, name);
  verifyDrugsDoesNotExist(id, name);
});

// Main Story: crud:Drugs:monitor
bthread("crud:Drugs:monitor", function () {
  let id = 210;
  let name = "name_210";
  addDrugs(id, name);
  waitForDrugsAdded(id, name);
  bp.sync({ waitFor: bp.Event("Verified Drugs: " + id) });
  deleteDrugs(id, name);
});

// Monitor: Drugs Verification
bthread("monitor:Drugs", function () {
  while (true) {
    let e = waitForAnyDrugsAdded();
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let name = (e.data.parameters && e.data.parameters.name) ? e.data.parameters.name : e.data.name;
    verifyDrugsExists(id, name);
    bp.sync({ request: bp.Event("Verified Drugs: " + id) });
  }
});

// Story: crud:Patients:linear
bthread("crud:Patients:linear", function () {
  let id = 220;
  let name = "name_220";
  addPatients(id, name);
  waitForPatientsAdded(id, name);
  tryToAddExistingPatients(id, name);
  verifyPatientsExists(id, name);
  updatePatients(id, name);
  deletePatients(id, name);
  tryToDeleteANonExistingPatients(id, name);
  verifyPatientsDoesNotExist(id, name);
});

// Main Story: crud:Patients:monitor
bthread("crud:Patients:monitor", function () {
  let id = 230;
  let name = "name_230";
  addPatients(id, name);
  waitForPatientsAdded(id, name);
  bp.sync({ waitFor: bp.Event("Verified Patients: " + id) });
  deletePatients(id, name);
});

// Monitor: Patients Verification
bthread("monitor:Patients", function () {
  while (true) {
    let e = waitForAnyPatientsAdded();
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let name = (e.data.parameters && e.data.parameters.name) ? e.data.parameters.name : e.data.name;
    verifyPatientsExists(id, name);
    bp.sync({ request: bp.Event("Verified Patients: " + id) });
  }
});

// Story: crud:Orders:linear
bthread("crud:Orders:linear", function () {
  let id = 240;
  addOrders(id);
  waitForOrdersAdded(id);
  tryToAddExistingOrders(id);
  verifyOrdersExists(id);
  updateOrders(id);
  deleteOrders(id);
  tryToDeleteANonExistingOrders(id);
  verifyOrdersDoesNotExist(id);
});

// Main Story: crud:Orders:monitor
bthread("crud:Orders:monitor", function () {
  let id = 250;
  addOrders(id);
  waitForOrdersAdded(id);
  bp.sync({ waitFor: bp.Event("Verified Orders: " + id) });
  deleteOrders(id);
});

// Monitor: Orders Verification
bthread("monitor:Orders", function () {
  while (true) {
    let e = waitForAnyOrdersAdded();
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    verifyOrdersExists(id);
    bp.sync({ request: bp.Event("Verified Orders: " + id) });
  }
});

// Story: crud:Prescriptions:linear
bthread("crud:Prescriptions:linear", function () {
  let id = 260;
  addPrescriptions(id);
  waitForPrescriptionsAdded(id);
  tryToAddExistingPrescriptions(id);
  verifyPrescriptionsExists(id);
  updatePrescriptions(id);
  deletePrescriptions(id);
  tryToDeleteANonExistingPrescriptions(id);
  verifyPrescriptionsDoesNotExist(id);
});

// Main Story: crud:Prescriptions:monitor
bthread("crud:Prescriptions:monitor", function () {
  let id = 270;
  addPrescriptions(id);
  waitForPrescriptionsAdded(id);
  bp.sync({ waitFor: bp.Event("Verified Prescriptions: " + id) });
  deletePrescriptions(id);
});

// Monitor: Prescriptions Verification
bthread("monitor:Prescriptions", function () {
  while (true) {
    let e = waitForAnyPrescriptionsAdded();
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    verifyPrescriptionsExists(id);
    bp.sync({ request: bp.Event("Verified Prescriptions: " + id) });
  }
});

// Story: crud:Inventory:linear
bthread("crud:Inventory:linear", function () {
  let ndc = 280;
  addInventory(ndc);
  waitForInventoryAdded(ndc);
  tryToAddExistingInventory(ndc);
  verifyInventoryExists(ndc);
  updateInventory(ndc);
  deleteInventory(ndc);
  tryToDeleteANonExistingInventory(ndc);
  verifyInventoryDoesNotExist(ndc);
});

// Main Story: crud:Inventory:monitor
bthread("crud:Inventory:monitor", function () {
  let ndc = 290;
  addInventory(ndc);
  waitForInventoryAdded(ndc);
  bp.sync({ waitFor: bp.Event("Verified Inventory: " + ndc) });
  deleteInventory(ndc);
});

// Monitor: Inventory Verification
bthread("monitor:Inventory", function () {
  while (true) {
    let e = waitForAnyInventoryAdded();
    let ndc = (e.data.parameters && e.data.parameters.ndc) ? e.data.parameters.ndc : e.data.ndc;
    verifyInventoryExists(ndc);
    bp.sync({ request: bp.Event("Verified Inventory: " + ndc) });
  }
});
