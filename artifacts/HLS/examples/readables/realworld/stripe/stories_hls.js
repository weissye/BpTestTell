// HLS (active + passive) – stripe
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("stripe: Seed Customers", function () {
    addCustomer("CU-001");
    addCustomer("CU-002");
    addCustomer("CU-003");
    updateCustomer("CU-003", { "note": "seeded" });
  });
  
    bthread("stripe: Invoice lifecycle", function () {
    addInvoice("IN-100");
    updateInvoice("IN-100", { "status": "ready" });
    deleteInvoice("IN-100");
    verifyInvoiceDoesNotExist("IN-100");
  });
  
    bthread("stripe: Contention on Payment", function () {
    addPayment("PA-200");
    tryAddPayment("PA-200"); // duplicate should be blocked
    updatePayment("PA-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Customer add verification", function () {
    const ev = waitForAnyCustomerAdded();
    block(matchDeleteCustomer(ev.customerId || ev.id || ev.key), function () {
      verifyCustomerExists(ev.customerId || ev.id || ev.key);
    });
  });
  
    bthread("Customer update verification", function () {
    const ev = waitForAnyCustomerUpdated();
    block(matchDeleteCustomer(ev.customerId || ev.id || ev.key), function () {
      verifyCustomerUpdated(ev.customerId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Customer deletion verification", function () {
    const ev = waitForAnyCustomerDeleted();
    block(matchAddCustomer(ev.customerId || ev.id || ev.key, ANY), function () {
      verifyCustomerDoesNotExist(ev.customerId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Customer)", function () {
    const ev = waitForAnyCustomerDeleted();
    block(matchUpdateCustomer(ev.customerId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Invoice add verification", function () {
    const ev = waitForAnyInvoiceAdded();
    block(matchDeleteInvoice(ev.invoiceId || ev.id || ev.key), function () {
      verifyInvoiceExists(ev.invoiceId || ev.id || ev.key);
    });
  });
  
    bthread("Invoice update verification", function () {
    const ev = waitForAnyInvoiceUpdated();
    block(matchDeleteInvoice(ev.invoiceId || ev.id || ev.key), function () {
      verifyInvoiceUpdated(ev.invoiceId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Invoice deletion verification", function () {
    const ev = waitForAnyInvoiceDeleted();
    block(matchAddInvoice(ev.invoiceId || ev.id || ev.key, ANY), function () {
      verifyInvoiceDoesNotExist(ev.invoiceId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Invoice)", function () {
    const ev = waitForAnyInvoiceDeleted();
    block(matchUpdateInvoice(ev.invoiceId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Payment add verification", function () {
    const ev = waitForAnyPaymentAdded();
    block(matchDeletePayment(ev.paymentId || ev.id || ev.key), function () {
      verifyPaymentExists(ev.paymentId || ev.id || ev.key);
    });
  });
  
    bthread("Payment update verification", function () {
    const ev = waitForAnyPaymentUpdated();
    block(matchDeletePayment(ev.paymentId || ev.id || ev.key), function () {
      verifyPaymentUpdated(ev.paymentId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Payment deletion verification", function () {
    const ev = waitForAnyPaymentDeleted();
    block(matchAddPayment(ev.paymentId || ev.id || ev.key, ANY), function () {
      verifyPaymentDoesNotExist(ev.paymentId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Payment)", function () {
    const ev = waitForAnyPaymentDeleted();
    block(matchUpdatePayment(ev.paymentId || ev.id || ev.key, ANY), function () {
    });
  });

} // end if MODE
