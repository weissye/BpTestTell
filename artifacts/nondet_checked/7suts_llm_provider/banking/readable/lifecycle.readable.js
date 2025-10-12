/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_account(accountId) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingAccount(accountId); } catch (_e) {}
  addAccount(accountId);
  verifyAccountExists(accountId);
  tryToAddExistingAccount(accountId);
  deleteAccount(accountId);
  verifyAccountDoesNotExist(accountId);
}

function lifecycle_card(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCard(id); } catch (_e) {}
  addCard(id);
  verifyCardExists(id);
  tryToAddExistingCard(id);
  deleteCard(id);
  verifyCardDoesNotExist(id);
}

function lifecycle_customer(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCustomer(id); } catch (_e) {}
  addCustomer(id);
  verifyCustomerExists(id);
  tryToAddExistingCustomer(id);
  deleteCustomer(id);
  verifyCustomerDoesNotExist(id);
}

function lifecycle_loan(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingLoan(id); } catch (_e) {}
  addLoan(id);
  verifyLoanExists(id);
  tryToAddExistingLoan(id);
  deleteLoan(id);
  verifyLoanDoesNotExist(id);
}

function lifecycle_reset(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingReset(id); } catch (_e) {}
  addReset(id);
  verifyResetExists(id);
  tryToAddExistingReset(id);
  deleteReset(id);
  verifyResetDoesNotExist(id);
}

function lifecycle_transfer(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingTransfer(id); } catch (_e) {}
  addTransfer(id);
  verifyTransferExists(id);
  tryToAddExistingTransfer(id);
  deleteTransfer(id);
  verifyTransferDoesNotExist(id);
}
