/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_book(book_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingBook(book_id); } catch (_e) {}
  addBook(book_id);
  verifyBookExists(book_id);
  tryToAddExistingBook(book_id);
  deleteBook(book_id);
  verifyBookDoesNotExist(book_id);
}

function lifecycle_hold(hold_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingHold(hold_id); } catch (_e) {}
  addHold(hold_id);
  verifyHoldExists(hold_id);
  tryToAddExistingHold(hold_id);
  deleteHold(hold_id);
  verifyHoldDoesNotExist(hold_id);
}

function lifecycle_loan(user_id, book_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingLoan(user_id, book_id); } catch (_e) {}
  addLoan(user_id, book_id);
  verifyLoanExists(user_id, book_id);
  tryToAddExistingLoan(user_id, book_id);
  deleteLoan(user_id, book_id);
  verifyLoanDoesNotExist(user_id, book_id);
}

function lifecycle_user(user_id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingUser(user_id); } catch (_e) {}
  addUser(user_id);
  verifyUserExists(user_id);
  tryToAddExistingUser(user_id);
  deleteUser(user_id);
  verifyUserDoesNotExist(user_id);
}
