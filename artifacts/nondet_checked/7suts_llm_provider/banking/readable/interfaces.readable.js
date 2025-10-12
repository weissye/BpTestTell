//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 * This approximates the "Library SUT" interface style.
 */

const svc = new RESTSession("http://" + host + ":" + port, "provengo basedclient", {
  headers: { "Content-Type": "application/json" },
});

// Common helpers
function matchesDescription(text) {
  return bp.EventSet("desc-eq", function(e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === text);
  });
}
function matchesDescriptionRegex(rx) {
  return bp.EventSet("desc-rx", function(e) {
    if (!e || !e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return rx.test(e.data.parameters.description);
  });
}

/** === Account Operations === */

// CREATE
function addAccount(accountId) {
  svc.post("/accounts", {
      body: JSON.stringify({ accountId: accountId }),
      parameters: { description: "Add a account with accountId " + accountId + "" }
    });
}

// DELETE
function deleteAccount(accountId) {
  svc.delete("/accounts/" + accountId, {
    parameters: { description: "Delete a account with accountId " + accountId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAccount(accountId) {
  svc.delete("/accounts/" + accountId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a account with accountId " + accountId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAccount(accountId) {
  svc.post("/accounts", {
      body: JSON.stringify({ accountId: accountId }),
      parameters: { description: "Add a account with accountId " + accountId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a account with accountId " + accountId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateAccount(accountId) {
  svc.put("/accounts/" + accountId, {
      body: JSON.stringify({ accountId: accountId }),
      parameters: { description: "Update a account" }
    });
}

// GET one
function getAccount(accountId) {
  svc.get("/accounts/" + accountId, {
    parameters: { description: "Get a account" }
  });
}

// LIST all
function listAccounts() {
  svc.get("/accounts", {
    parameters: { description: "List accounts" }
  });
}

// Verify exists (by list)
function verifyAccountExists(accountId) {
  svc.get("/accounts", {
    callback: function (response) {
      account = JSON.parse(response.body);
      for (let i = 0; i < account.length; i++) {
        if (account[i].accountId === accountId) {
          return pvg.success("Account exists");
        }
      }
      return pvg.fail("Expected a account to exist but it does not");
    },
    parameters: { description: "Verify account with accountId " + accountId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAccountDoesNotExist(accountId) {
  svc.get("/accounts", {
    callback: function (response) {
      account = JSON.parse(response.body);
      for (let i = 0; i < account.length; i++) {
        if (account[i].accountId === accountId) {
          return pvg.fail("Expected a account to not exist but it does");
        }
      }
      return pvg.success("Account does not exist");
    },
    parameters: { description: "Verify account with accountId " + accountId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAccount() {
  return bp.EventSet("any-add-account", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a account");
  });
}
function matchAddAccount(accountId) {
  return bp.EventSet("add-account", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a account with accountId " + accountId + "";
  });
}
function matchAnyDeleteAccount() {
  return bp.EventSet("any-del-account", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a account");
  });
}
function matchDeleteAccount(accountId) {
  return bp.EventSet("del-account", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a account with accountId " + accountId + "";
  });
}

// Wait helpers
function waitForAnyAccountAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ account\ with\ accountId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ account\ with\ accountId\ (.+)$/);
    return { accountId: (x)=>x(m[1]) };
}
function waitForAccountAdded(accountId) {
  waitFor(matchAddAccount(accountId));
}
function waitForAccountDeleted(accountId) {
  waitFor(matchDeleteAccount(accountId));
}
function waitForAnyAccountDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ account\ with\ accountId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ account\ with\ accountId\ (.+)$/);
    return { accountId: (x)=>x(m[1]) };
}


/** === Card Operations === */

// CREATE
function addCard(id) {
  svc.post("/cards", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a card with id " + id + "" }
    });
}

// DELETE
function deleteCard(id) {
  svc.delete("/cards/" + id, {
    parameters: { description: "Delete a card with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCard(id) {
  svc.delete("/cards/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a card with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCard(id) {
  svc.post("/cards", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a card with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a card with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCard(id) {
  svc.put("/cards/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a card" }
    });
}

// GET one
function getCard(id) {
  svc.get("/cards/" + id, {
    parameters: { description: "Get a card" }
  });
}

// LIST all
function listCards() {
  svc.get("/cards", {
    parameters: { description: "List cards" }
  });
}

// Verify exists (by list)
function verifyCardExists(id) {
  svc.get("/cards", {
    callback: function (response) {
      card = JSON.parse(response.body);
      for (let i = 0; i < card.length; i++) {
        if (card[i].id === id) {
          return pvg.success("Card exists");
        }
      }
      return pvg.fail("Expected a card to exist but it does not");
    },
    parameters: { description: "Verify card with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCardDoesNotExist(id) {
  svc.get("/cards", {
    callback: function (response) {
      card = JSON.parse(response.body);
      for (let i = 0; i < card.length; i++) {
        if (card[i].id === id) {
          return pvg.fail("Expected a card to not exist but it does");
        }
      }
      return pvg.success("Card does not exist");
    },
    parameters: { description: "Verify card with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCard() {
  return bp.EventSet("any-add-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a card");
  });
}
function matchAddCard(id) {
  return bp.EventSet("add-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a card with id " + id + "";
  });
}
function matchAnyDeleteCard() {
  return bp.EventSet("any-del-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a card");
  });
}
function matchDeleteCard(id) {
  return bp.EventSet("del-card", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a card with id " + id + "";
  });
}

// Wait helpers
function waitForAnyCardAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ card\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ card\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCardAdded(id) {
  waitFor(matchAddCard(id));
}
function waitForCardDeleted(id) {
  waitFor(matchDeleteCard(id));
}
function waitForAnyCardDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ card\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ card\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Customer Operations === */

// CREATE
function addCustomer(id) {
  svc.post("/customers", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a customer with id " + id + "" }
    });
}

// DELETE
function deleteCustomer(id) {
  svc.delete("/customers/" + id, {
    parameters: { description: "Delete a customer with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCustomer(id) {
  svc.delete("/customers/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a customer with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCustomer(id) {
  svc.post("/customers", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a customer with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a customer with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCustomer(id) {
  svc.put("/customers/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a customer" }
    });
}

// GET one
function getCustomer(id) {
  svc.get("/customers/" + id, {
    parameters: { description: "Get a customer" }
  });
}

// LIST all
function listCustomers() {
  svc.get("/customers", {
    parameters: { description: "List customers" }
  });
}

// Verify exists (by list)
function verifyCustomerExists(id) {
  svc.get("/customers", {
    callback: function (response) {
      customer = JSON.parse(response.body);
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].id === id) {
          return pvg.success("Customer exists");
        }
      }
      return pvg.fail("Expected a customer to exist but it does not");
    },
    parameters: { description: "Verify customer with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCustomerDoesNotExist(id) {
  svc.get("/customers", {
    callback: function (response) {
      customer = JSON.parse(response.body);
      for (let i = 0; i < customer.length; i++) {
        if (customer[i].id === id) {
          return pvg.fail("Expected a customer to not exist but it does");
        }
      }
      return pvg.success("Customer does not exist");
    },
    parameters: { description: "Verify customer with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCustomer() {
  return bp.EventSet("any-add-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a customer");
  });
}
function matchAddCustomer(id) {
  return bp.EventSet("add-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a customer with id " + id + "";
  });
}
function matchAnyDeleteCustomer() {
  return bp.EventSet("any-del-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a customer");
  });
}
function matchDeleteCustomer(id) {
  return bp.EventSet("del-customer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a customer with id " + id + "";
  });
}

// Wait helpers
function waitForAnyCustomerAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ customer\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ customer\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCustomerAdded(id) {
  waitFor(matchAddCustomer(id));
}
function waitForCustomerDeleted(id) {
  waitFor(matchDeleteCustomer(id));
}
function waitForAnyCustomerDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ customer\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ customer\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Loan Operations === */

// CREATE
function addLoan(id) {
  svc.post("/loans", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a loan with id " + id + "" }
    });
}

// DELETE
function deleteLoan(id) {
  svc.delete("/loans/" + id, {
    parameters: { description: "Delete a loan with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLoan(id) {
  svc.delete("/loans/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a loan with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLoan(id) {
  svc.post("/loans", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a loan with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a loan with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateLoan(id) {
  svc.put("/loans/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a loan" }
    });
}

// GET one
function getLoan(id) {
  svc.get("/loans/" + id, {
    parameters: { description: "Get a loan" }
  });
}

// LIST all
function listLoans() {
  svc.get("/loans", {
    parameters: { description: "List loans" }
  });
}

// Verify exists (by list)
function verifyLoanExists(id) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].id === id) {
          return pvg.success("Loan exists");
        }
      }
      return pvg.fail("Expected a loan to exist but it does not");
    },
    parameters: { description: "Verify loan with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLoanDoesNotExist(id) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].id === id) {
          return pvg.fail("Expected a loan to not exist but it does");
        }
      }
      return pvg.success("Loan does not exist");
    },
    parameters: { description: "Verify loan with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLoan() {
  return bp.EventSet("any-add-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a loan");
  });
}
function matchAddLoan(id) {
  return bp.EventSet("add-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a loan with id " + id + "";
  });
}
function matchAnyDeleteLoan() {
  return bp.EventSet("any-del-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a loan");
  });
}
function matchDeleteLoan(id) {
  return bp.EventSet("del-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a loan with id " + id + "";
  });
}

// Wait helpers
function waitForAnyLoanAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ loan\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ loan\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForLoanAdded(id) {
  waitFor(matchAddLoan(id));
}
function waitForLoanDeleted(id) {
  waitFor(matchDeleteLoan(id));
}
function waitForAnyLoanDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ loan\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ loan\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Reset Operations === */

// CREATE
function addReset(id) {
  svc.post("/reset", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a reset with id " + id + "" }
    });
}

// DELETE
function deleteReset(id) {
  svc.delete("/reset/" + id, {
    parameters: { description: "Delete a reset with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingReset(id) {
  svc.delete("/reset/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a reset with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingReset(id) {
  svc.post("/reset", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a reset with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a reset with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateReset(id) {
  svc.put("/reset/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a reset" }
    });
}

// GET one
function getReset(id) {
  svc.get("/reset/" + id, {
    parameters: { description: "Get a reset" }
  });
}

// LIST all
function listReset() {
  svc.get("/reset", {
    parameters: { description: "List reset" }
  });
}

// Verify exists (by list)
function verifyResetExists(id) {
  svc.get("/reset", {
    callback: function (response) {
      reset = JSON.parse(response.body);
      for (let i = 0; i < reset.length; i++) {
        if (reset[i].id === id) {
          return pvg.success("Reset exists");
        }
      }
      return pvg.fail("Expected a reset to exist but it does not");
    },
    parameters: { description: "Verify reset with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyResetDoesNotExist(id) {
  svc.get("/reset", {
    callback: function (response) {
      reset = JSON.parse(response.body);
      for (let i = 0; i < reset.length; i++) {
        if (reset[i].id === id) {
          return pvg.fail("Expected a reset to not exist but it does");
        }
      }
      return pvg.success("Reset does not exist");
    },
    parameters: { description: "Verify reset with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddReset() {
  return bp.EventSet("any-add-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a reset");
  });
}
function matchAddReset(id) {
  return bp.EventSet("add-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a reset with id " + id + "";
  });
}
function matchAnyDeleteReset() {
  return bp.EventSet("any-del-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a reset");
  });
}
function matchDeleteReset(id) {
  return bp.EventSet("del-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a reset with id " + id + "";
  });
}

// Wait helpers
function waitForAnyResetAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ reset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ reset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForResetAdded(id) {
  waitFor(matchAddReset(id));
}
function waitForResetDeleted(id) {
  waitFor(matchDeleteReset(id));
}
function waitForAnyResetDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ reset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ reset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Transfer Operations === */

// CREATE
function addTransfer(id) {
  svc.post("/transfers", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a transfer with id " + id + "" }
    });
}

// DELETE
function deleteTransfer(id) {
  svc.delete("/transfers/" + id, {
    parameters: { description: "Delete a transfer with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingTransfer(id) {
  svc.delete("/transfers/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a transfer with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingTransfer(id) {
  svc.post("/transfers", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a transfer with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a transfer with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateTransfer(id) {
  svc.put("/transfers/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a transfer" }
    });
}

// GET one
function getTransfer(id) {
  svc.get("/transfers/" + id, {
    parameters: { description: "Get a transfer" }
  });
}

// LIST all
function listTransfers() {
  svc.get("/transfers", {
    parameters: { description: "List transfers" }
  });
}

// Verify exists (by list)
function verifyTransferExists(id) {
  svc.get("/transfers", {
    callback: function (response) {
      transfer = JSON.parse(response.body);
      for (let i = 0; i < transfer.length; i++) {
        if (transfer[i].id === id) {
          return pvg.success("Transfer exists");
        }
      }
      return pvg.fail("Expected a transfer to exist but it does not");
    },
    parameters: { description: "Verify transfer with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTransferDoesNotExist(id) {
  svc.get("/transfers", {
    callback: function (response) {
      transfer = JSON.parse(response.body);
      for (let i = 0; i < transfer.length; i++) {
        if (transfer[i].id === id) {
          return pvg.fail("Expected a transfer to not exist but it does");
        }
      }
      return pvg.success("Transfer does not exist");
    },
    parameters: { description: "Verify transfer with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddTransfer() {
  return bp.EventSet("any-add-transfer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a transfer");
  });
}
function matchAddTransfer(id) {
  return bp.EventSet("add-transfer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a transfer with id " + id + "";
  });
}
function matchAnyDeleteTransfer() {
  return bp.EventSet("any-del-transfer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a transfer");
  });
}
function matchDeleteTransfer(id) {
  return bp.EventSet("del-transfer", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a transfer with id " + id + "";
  });
}

// Wait helpers
function waitForAnyTransferAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ transfer\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ transfer\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTransferAdded(id) {
  waitFor(matchAddTransfer(id));
}
function waitForTransferDeleted(id) {
  waitFor(matchDeleteTransfer(id));
}
function waitForAnyTransferDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ transfer\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ transfer\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

