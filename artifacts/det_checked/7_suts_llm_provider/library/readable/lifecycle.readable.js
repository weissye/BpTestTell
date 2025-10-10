/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_book(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingBook(id); } catch (_e) {}
  addBook(id);
  verifyBookExists(id);
  tryToAddExistingBook(id);
  deleteBook(id);
  verifyBookDoesNotExist(id);
}

function lifecycle_hold(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingHold(id); } catch (_e) {}
  addHold(id);
  verifyHoldExists(id);
  tryToAddExistingHold(id);
  deleteHold(id);
  verifyHoldDoesNotExist(id);
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

function lifecycle_user(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingUser(id); } catch (_e) {}
  addUser(id);
  verifyUserExists(id);
  tryToAddExistingUser(id);
  deleteUser(id);
  verifyUserDoesNotExist(id);
}
