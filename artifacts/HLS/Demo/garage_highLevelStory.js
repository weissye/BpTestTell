// Parse if mode === "MODEL"
if (mode === "MODEL") {

/** ========== ACTIVE: Seed Parts (≥3 examples) ========== */
bthread("Seed Parts – Batch A", function () {
  addPart("P-001", "Oil Filter", 35.00);
  addPart("P-002", "Brake Pads", 220.00);
  addPart("P-003", "Air Filter", 42.00);
});

/** ========== ACTIVE: Customer Lifecycle #1 (C200) ========== */
bthread("Customer C200 Lifecycle", function () {
  addCustomer(200, "Roni Cohen");
  updateCustomer(200, { phone: "+972-200-0000" });
  updateCustomer(200, { email: "roni200@garage.test" });

  // Create vehicle and WO, add part, invoice & payment, then cleanup
  addVehicle("VIN-200-A", 200, "Toyota Corolla");
  addWorkOrder("WO-200-A1", "VIN-200-A", 200);

  addWorkOrderPart("WO-200-A1", "P-001", 1);
  addInvoice("INV-200-A1", "WO-200-A1", 35.00);
  addPayment("PAY-200-A1", "INV-200-A1", 35.00);

  // Close WO via update
  updateWorkOrder("WO-200-A1", { status: "closed" });

  // Cleanup
  deleteWorkOrder("WO-200-A1");
  deleteVehicle("VIN-200-A");
  deleteCustomer(200, "Roni Cohen");
});

/** ========== ACTIVE: Customer Lifecycle #2 (C201) with guard interplay ========== */
bthread("Customer C201 Lifecycle (guarded deletion)", function () {
  addCustomer(201, "Jane Smith");
  addVehicle("VIN-201-A", 201, "Honda Civic");
  addWorkOrder("WO-201-A1", "VIN-201-A", 201);

  // Attempt delete while WO open (should be blocked by passive guards)
  tryToDeleteCustomer(201, "Jane Smith");

  // Proper flow: close WO → invoice → pay → cleanup
  addWorkOrderPart("WO-201-A1", "P-002", 1);
  updateWorkOrder("WO-201-A1", { status: "closed" });
  addInvoice("INV-201-A1", "WO-201-A1", 220.00);
  addPayment("PAY-201-A1", "INV-201-A1", 220.00);

  deleteWorkOrder("WO-201-A1");
  deleteVehicle("VIN-201-A");
  deleteCustomer(201, "Jane Smith");
});

/** ========== ACTIVE: Customer Lifecycle #3 (C202) with 2 vehicles and contending WOs ========== */
bthread("Customer C202 Lifecycle (multi-vehicle)", function () {
  addCustomer(202, "John Roe");
  addVehicle("VIN-202-A", 202, "Mazda 3");
  addVehicle("VIN-202-B", 202, "Hyundai i30");

  // Two WOs, parts, invoice & payment
  addWorkOrder("WO-202-A1", "VIN-202-A", 202);
  addWorkOrderPart("WO-202-A1", "P-003", 1);
  updateWorkOrder("WO-202-A1", { status: "closed" });
  addInvoice("INV-202-A1", "WO-202-A1", 42.00);
  addPayment("PAY-202-A1", "INV-202-A1", 42.00);

  addWorkOrder("WO-202-B1", "VIN-202-B", 202);
  addWorkOrderPart("WO-202-B1", "P-001", 2);
  updateWorkOrder("WO-202-B1", { status: "closed" });
  addInvoice("INV-202-B1", "WO-202-B1", 70.00);
  addPayment("PAY-202-B1", "INV-202-B1", 70.00);

  // Cleanup order ensures guards pass
  deleteWorkOrder("WO-202-A1");
  deleteWorkOrder("WO-202-B1");
  deleteVehicle("VIN-202-A");
  deleteVehicle("VIN-202-B");
  deleteCustomer(202, "John Roe");
});

/** ========== ACTIVE: WorkOrder contention (duplicate/open WO avoidance) ========== */
bthread("WO contention for same vehicle", function () {
  addCustomer(210, "Alex Contend");
  addVehicle("VIN-210-A", 210, "Ford Focus");

  addWorkOrder("WO-210-A1", "VIN-210-A", 210);
  // Competing WO for same vehicle while open (should be prevented by guards)
  tryAddCompetingWorkOrder("WO-210-A2", "VIN-210-A", 210);

  updateWorkOrder("WO-210-A1", { status: "closed" });
  addInvoice("INV-210-A1", "WO-210-A1", 100.00);
  addPayment("PAY-210-A1", "INV-210-A1", 100.00);

  deleteWorkOrder("WO-210-A1");
  deleteVehicle("VIN-210-A");
  deleteCustomer(210, "Alex Contend");
});


/** ===== Verification monitors (block inverse until verified) ===== */
// Customer add / update / delete
bthread("Customer add verification", function () {
  const c = waitForAnyCustomerAdded();
  block(matchDeleteCustomer(c.id, c.name), function () {
    verifyCustomerExists(c.id, c.name);
  });
});

bthread("Customer update verification", function () {
  const c = waitForAnyCustomerUpdated();
  block(matchDeleteCustomer(c.id, ANY), function () {
    verifyCustomerUpdated(c.id, c.diff);
  });
});

bthread("Customer delete verification", function () {
  const c = waitForAnyCustomerDeleted();
  block(matchAddCustomer(c.id, c.name), function () {
    verifyCustomerDoesNotExist(c.id, c.name);
  });
});

// Vehicle add / update / delete
bthread("Vehicle add verification", function () {
  const v = waitForAnyVehicleAdded();
  block(matchDeleteVehicle(v.vin), function () {
    verifyVehicleExists(v.vin, v.customerId);
  });
});

bthread("Vehicle update verification", function () {
  const v = waitForAnyVehicleUpdated();
  block(matchDeleteVehicle(v.vin), function () {
    verifyVehicleUpdated(v.vin, v.diff);
  });
});

bthread("Vehicle delete verification", function () {
  const v = waitForAnyVehicleDeleted();
  block(matchAddVehicle(v.vin, ANY, ANY), function () {
    verifyVehicleDoesNotExist(v.vin);
  });
});

// WorkOrder add / update / delete
bthread("WO add verification", function () {
  const w = waitForAnyWorkOrderAdded();
  block(matchDeleteWorkOrder(w.woId), function () {
    verifyWorkOrderExists(w.woId, w.vehicleVin, w.customerId);
  });
});

bthread("WO update verification", function () {
  const w = waitForAnyWorkOrderUpdated();
  block(matchDeleteWorkOrder(w.woId), function () {
    verifyWorkOrderUpdated(w.woId, w.diff);
  });
});

bthread("WO delete verification", function () {
  const w = waitForAnyWorkOrderDeleted();
  block(matchAddWorkOrder(w.woId, w.vehicleVin, w.customerId), function () {
    verifyWorkOrderDoesNotExist(w.woId);
  });
});

// Part add / update / delete
bthread("Part add verification", function () {
  const p = waitForAnyPartAdded();
  block(matchDeletePart(p.partId), function () {
    verifyPartExists(p.partId);
  });
});

bthread("Part update verification", function () {
  const p = waitForAnyPartUpdated();
  block(matchDeletePart(p.partId), function () {
    verifyPartUpdated(p.partId, p.diff);
  });
});

bthread("Part delete verification", function () {
  const p = waitForAnyPartDeleted();
  block(matchAddPart(p.partId, ANY, ANY), function () {
    verifyPartDoesNotExist(p.partId);
  });
});

// Invoice add / update / delete
bthread("Invoice add verification", function () {
  const i = waitForAnyInvoiceAdded();
  block(matchDeleteInvoice(i.invoiceId), function () {
    verifyInvoiceExists(i.invoiceId, i.workOrderId);
  });
});

bthread("Invoice update verification", function () {
  const i = waitForAnyInvoiceUpdated();
  block(matchDeleteInvoice(i.invoiceId), function () {
    verifyInvoiceUpdated(i.invoiceId, i.diff);
  });
});

bthread("Invoice delete verification", function () {
  const i = waitForAnyInvoiceDeleted();
  block(matchAddInvoice(i.invoiceId, i.workOrderId, ANY), function () {
    verifyInvoiceDoesNotExist(i.invoiceId);
  });
});

// Payment add / update / delete
bthread("Payment add verification", function () {
  const p = waitForAnyPaymentAdded();
  block(matchDeletePayment(p.paymentId), function () {
    verifyPaymentExists(p.paymentId, p.invoiceId);
  });
});

bthread("Payment delete verification", function () {
  const p = waitForAnyPaymentDeleted();
  block(matchAddPayment(p.paymentId, p.invoiceId, ANY), function () {
    verifyPaymentDoesNotExist(p.paymentId);
  });
});

/** ===== Invariant / constraint guards ===== */
// 1) No customer delete with OPEN WOs or UNPAID invoices
bthread("Guard: No customer delete with open WO or unpaid invoice", function () {
  const w = waitForAnyWorkOrderAdded();
  block(matchDeleteCustomer(w.customerId, ANY), function () {});
});
bthread("Guard: No customer delete with unpaid invoice", function () {
  const i = waitForAnyInvoiceAdded();
  block(matchDeleteCustomer(ANY, ANY), function () {
    verifyInvoiceUnpaid(i.invoiceId); // ensure unpaid blocks; once paid, another attempt can proceed
  });
});

// 2) No vehicle delete with OPEN WOs
bthread("Guard: No vehicle delete while WO open", function () {
  const w = waitForAnyWorkOrderAdded();
  block(matchDeleteVehicle(w.vehicleVin), function () {});
});

// 3) No duplicate OPEN WO for the same vehicle
bthread("Guard: No duplicate open WO per vehicle", function () {
  const w = waitForAnyWorkOrderAdded();
  block(matchAddWorkOrder(ANY, w.vehicleVin, ANY), function () {});
});

// 4) Invoice only for CLOSED WO
bthread("Guard: Invoice requires closed WO", function () {
  const i = waitForAnyInvoiceAdded();
  block(matchAddInvoice(i.invoiceId, i.workOrderId, ANY), function () {
    verifyWorkOrderUpdated(i.workOrderId, { status: "closed" }); // or a dedicated check
  });
});

// 5) Payment only if Invoice exists and amount ≤ outstanding
bthread("Guard: Payment requires existing invoice and valid amount", function () {
  const p = waitForAnyPaymentAdded();
  block(matchAddPayment(p.paymentId, p.invoiceId, ANY), function () {
    verifyInvoiceExists(p.invoiceId, ANY);
    // Optional: implement a check that amount ≤ outstanding
    // verifyPaymentAmountValid(p.invoiceId, p.amount);
  });
});

// 6) No invoice delete if payments exist
bthread("Guard: No invoice delete with existing payments", function () {
  const p = waitForAnyPaymentAdded();
  block(matchDeleteInvoice(p.invoiceId), function () {});
});

// 7) No part delete if used in OPEN WO
bthread("Guard: No part delete if used in open WO", function () {
  const use = waitFor(addWorkOrderPart(ANY, ANY, ANY)).event;
  block(matchDeletePart(use.partId), function () {
    verifyPartNotUsedInOpenWO(use.partId);
  });
});

// 8) No update-after-delete race (examples)
bthread("Guard: No update-after-delete (Customer)", function () {
  const c = waitForAnyCustomerDeleted();
  block(matchUpdateCustomer(c.id, ANY), function () {});
});
bthread("Guard: No update-after-delete (Vehicle)", function () {
  const v = waitForAnyVehicleDeleted();
  block(matchUpdateVehicle(v.vin, ANY), function () {});
});
bthread("Guard: No update-after-delete (WO)", function () {
  const w = waitForAnyWorkOrderDeleted();
  block(matchUpdateWorkOrder(w.woId, ANY), function () {});
});
bthread("Guard: No update-after-delete (Invoice)", function () {
  const i = waitForAnyInvoiceDeleted();
  block(matchUpdateInvoice(i.invoiceId, ANY), function () {});
});
bthread("Guard: No update-after-delete (Part)", function () {
  const p = waitForAnyPartDeleted();
  block(matchUpdatePart(p.partId, ANY), function () {});
});

} // end if mode === "MODEL"
