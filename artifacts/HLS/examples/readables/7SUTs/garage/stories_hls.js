// HLS (active + passive) – garage
if (mode === "MODEL") {

  // ===== ACTIVE (≥3) =====
  bthread("Seed Parts – Batch A", function () {
    addPart("P-001", "Oil Filter", 35.00);
    addPart("P-002", "Brake Pads", 220.00);
    addPart("P-003", "Air Filter", 42.00);
  });

  bthread("Customer C200 Lifecycle", function () {
    addCustomer(200, "Roni Cohen");
    updateCustomer(200, { "phone": "+972-200-0000" });
    updateCustomer(200, { "email": "roni200@garage.test" });
    addVehicle("VIN-200-A", 200, "Toyota Corolla");
    addWorkOrder("WO-200-A1", "VIN-200-A", 200);
    updateWorkOrder("WO-200-A1", { "status": "closed" });
    addInvoice("INV-200-A1", "WO-200-A1", 35.00);
    addPayment("PAY-200-A1", "INV-200-A1", 35.00);
    deleteWorkOrder("WO-200-A1");
    deleteVehicle("VIN-200-A");
    deleteCustomer(200, "Roni Cohen");
  });

  bthread("WO contention for same vehicle", function () {
    addCustomer(210, "Alex Contend");
    addVehicle("VIN-210-A", 210, "Ford Focus");
    addWorkOrder("WO-210-A1", "VIN-210-A", 210);
    tryAddCompetingWorkOrder("WO-210-A2", "VIN-210-A", 210);
    updateWorkOrder("WO-210-A1", { "status": "closed" });
    addInvoice("INV-210-A1", "WO-210-A1", 100.00);
    addPayment("PAY-210-A1", "INV-210-A1", 100.00);
    deleteWorkOrder("WO-210-A1");
    deleteVehicle("VIN-210-A");
    deleteCustomer(210, "Alex Contend");
  });

  // ===== PASSIVE =====
  bthread("Customer add verification", function () {
    const c = waitForAnyCustomerAdded();
    block(matchDeleteCustomer(c.id, c.name), function () {
      verifyCustomerExists(c.id, c.name);
    });
  });
  bthread("Vehicle add verification", function () {
    const v = waitForAnyVehicleAdded();
    block(matchDeleteVehicle(v.vin), function () {
      verifyVehicleExists(v.vin, v.customerId);
    });
  });
  bthread("WO add verification", function () {
    const w = waitForAnyWorkOrderAdded();
    block(matchDeleteWorkOrder(w.woId), function () {
      verifyWorkOrderExists(w.woId, w.vehicleVin, w.customerId);
    });
  });
  bthread("Guard: No customer delete with open WO", function () {
    const w = waitForAnyWorkOrderAdded();
    block(matchDeleteCustomer(w.customerId, ANY), function () {});
  });
} // end if
