// ---- crud:account:nondet:1:1 ----
bp.registerBThread("crud:account:nondet:1:1", function () {
  let accountId = 200;
  addAccount(accountId);
  tryToAddExistingAccount(accountId);
  verifyAccountExists(accountId);
  updateAccount(accountId);
  deleteAccount(accountId);
  tryToDeleteANonExistingAccount(accountId);
  verifyAccountDoesNotExist(accountId);
  
});

// ---- crud:account:nondet:1:2 ----
bp.registerBThread("crud:account:nondet:1:2", function () {
  let accountId = 200;
  addAccount(accountId);
  tryToAddExistingAccount(accountId);
  updateAccount(accountId);
  verifyAccountExists(accountId);
  deleteAccount(accountId);
  tryToDeleteANonExistingAccount(accountId);
  verifyAccountDoesNotExist(accountId);
  
});

// ---- crud:account:nondet:1:3 ----
bp.registerBThread("crud:account:nondet:1:3", function () {
  let accountId = 200;
  addAccount(accountId);
  tryToAddExistingAccount(accountId);
  verifyAccountExists(accountId);
  deleteAccount(accountId);
  tryToDeleteANonExistingAccount(accountId);
  verifyAccountDoesNotExist(accountId);
  
});

// ---- crud:account:nondet:1:4 ----
bp.registerBThread("crud:account:nondet:1:4", function () {
  let accountId = 201;
  addAccount(accountId);
  tryToAddExistingAccount(accountId);
  deleteAccount(accountId);
  tryToDeleteANonExistingAccount(accountId);
  verifyAccountDoesNotExist(accountId);
  
});

// ---- crud:card:nondet:2:1 ----
bp.registerBThread("crud:card:nondet:2:1", function () {
  let id = 201;
  addCard(id);
  tryToAddExistingCard(id);
  verifyCardExists(id);
  updateCard(id);
  deleteCard(id);
  tryToDeleteANonExistingCard(id);
  verifyCardDoesNotExist(id);
  
});

// ---- crud:card:nondet:2:2 ----
bp.registerBThread("crud:card:nondet:2:2", function () {
  let id = 201;
  addCard(id);
  tryToAddExistingCard(id);
  updateCard(id);
  verifyCardExists(id);
  deleteCard(id);
  tryToDeleteANonExistingCard(id);
  verifyCardDoesNotExist(id);
  
});

// ---- crud:card:nondet:2:3 ----
bp.registerBThread("crud:card:nondet:2:3", function () {
  let id = 201;
  addCard(id);
  tryToAddExistingCard(id);
  verifyCardExists(id);
  deleteCard(id);
  tryToDeleteANonExistingCard(id);
  verifyCardDoesNotExist(id);
  
});

// ---- crud:card:nondet:2:4 ----
bp.registerBThread("crud:card:nondet:2:4", function () {
  let id = 202;
  addCard(id);
  tryToAddExistingCard(id);
  deleteCard(id);
  tryToDeleteANonExistingCard(id);
  verifyCardDoesNotExist(id);
  
});

// ---- crud:customer:nondet:3:1 ----
bp.registerBThread("crud:customer:nondet:3:1", function () {
  let id = 202;
  addCustomer(id);
  tryToAddExistingCustomer(id);
  verifyCustomerExists(id);
  updateCustomer(id);
  deleteCustomer(id);
  tryToDeleteANonExistingCustomer(id);
  verifyCustomerDoesNotExist(id);
  
});

// ---- crud:customer:nondet:3:2 ----
bp.registerBThread("crud:customer:nondet:3:2", function () {
  let id = 202;
  addCustomer(id);
  tryToAddExistingCustomer(id);
  updateCustomer(id);
  verifyCustomerExists(id);
  deleteCustomer(id);
  tryToDeleteANonExistingCustomer(id);
  verifyCustomerDoesNotExist(id);
  
});

// ---- crud:customer:nondet:3:3 ----
bp.registerBThread("crud:customer:nondet:3:3", function () {
  let id = 202;
  addCustomer(id);
  tryToAddExistingCustomer(id);
  verifyCustomerExists(id);
  deleteCustomer(id);
  tryToDeleteANonExistingCustomer(id);
  verifyCustomerDoesNotExist(id);
  
});

// ---- crud:customer:nondet:3:4 ----
bp.registerBThread("crud:customer:nondet:3:4", function () {
  let id = 203;
  addCustomer(id);
  tryToAddExistingCustomer(id);
  deleteCustomer(id);
  tryToDeleteANonExistingCustomer(id);
  verifyCustomerDoesNotExist(id);
  
});

// ---- crud:loan:nondet:4:1 ----
bp.registerBThread("crud:loan:nondet:4:1", function () {
  let id = 203;
  addLoan(id);
  tryToAddExistingLoan(id);
  verifyLoanExists(id);
  updateLoan(id);
  deleteLoan(id);
  tryToDeleteANonExistingLoan(id);
  verifyLoanDoesNotExist(id);
  
});

// ---- crud:loan:nondet:4:2 ----
bp.registerBThread("crud:loan:nondet:4:2", function () {
  let id = 203;
  addLoan(id);
  tryToAddExistingLoan(id);
  updateLoan(id);
  verifyLoanExists(id);
  deleteLoan(id);
  tryToDeleteANonExistingLoan(id);
  verifyLoanDoesNotExist(id);
  
});

// ---- crud:loan:nondet:4:3 ----
bp.registerBThread("crud:loan:nondet:4:3", function () {
  let id = 203;
  addLoan(id);
  tryToAddExistingLoan(id);
  verifyLoanExists(id);
  deleteLoan(id);
  tryToDeleteANonExistingLoan(id);
  verifyLoanDoesNotExist(id);
  
});

// ---- crud:loan:nondet:4:4 ----
bp.registerBThread("crud:loan:nondet:4:4", function () {
  let id = 204;
  addLoan(id);
  tryToAddExistingLoan(id);
  deleteLoan(id);
  tryToDeleteANonExistingLoan(id);
  verifyLoanDoesNotExist(id);
  
});

// ---- crud:reset:nondet:5:1 ----
bp.registerBThread("crud:reset:nondet:5:1", function () {
  let id = 204;
  addReset(id);
  tryToAddExistingReset(id);
  verifyResetExists(id);
  updateReset(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:5:2 ----
bp.registerBThread("crud:reset:nondet:5:2", function () {
  let id = 204;
  addReset(id);
  tryToAddExistingReset(id);
  updateReset(id);
  verifyResetExists(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:5:3 ----
bp.registerBThread("crud:reset:nondet:5:3", function () {
  let id = 204;
  addReset(id);
  tryToAddExistingReset(id);
  verifyResetExists(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:reset:nondet:5:4 ----
bp.registerBThread("crud:reset:nondet:5:4", function () {
  let id = 205;
  addReset(id);
  tryToAddExistingReset(id);
  deleteReset(id);
  tryToDeleteANonExistingReset(id);
  verifyResetDoesNotExist(id);
  
});

// ---- crud:transfer:nondet:6:1 ----
bp.registerBThread("crud:transfer:nondet:6:1", function () {
  let id = 205;
  addTransfer(id);
  tryToAddExistingTransfer(id);
  verifyTransferExists(id);
  updateTransfer(id);
  deleteTransfer(id);
  tryToDeleteANonExistingTransfer(id);
  verifyTransferDoesNotExist(id);
  
});

// ---- crud:transfer:nondet:6:2 ----
bp.registerBThread("crud:transfer:nondet:6:2", function () {
  let id = 205;
  addTransfer(id);
  tryToAddExistingTransfer(id);
  updateTransfer(id);
  verifyTransferExists(id);
  deleteTransfer(id);
  tryToDeleteANonExistingTransfer(id);
  verifyTransferDoesNotExist(id);
  
});

// ---- crud:transfer:nondet:6:3 ----
bp.registerBThread("crud:transfer:nondet:6:3", function () {
  let id = 205;
  addTransfer(id);
  tryToAddExistingTransfer(id);
  verifyTransferExists(id);
  deleteTransfer(id);
  tryToDeleteANonExistingTransfer(id);
  verifyTransferDoesNotExist(id);
  
});

// ---- crud:transfer:nondet:6:4 ----
bp.registerBThread("crud:transfer:nondet:6:4", function () {
  let id = 206;
  addTransfer(id);
  tryToAddExistingTransfer(id);
  deleteTransfer(id);
  tryToDeleteANonExistingTransfer(id);
  verifyTransferDoesNotExist(id);
  
});
