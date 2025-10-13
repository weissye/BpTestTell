// Parse if mode === "MODEL"
if (mode === "MODEL") {

/** ========== ACTIVE: Seed books (3 examples) ========== */
bthread("Seed Books – Batch A", function () {
  addBook(201, "The Great Gatsby");
  addBook(202, "1984");
  addBook(203, "Brave New World");
});

/** ========== ACTIVE: User lifecycles (3 users) ========== */
// User 100: add → two updates → wait for any account/loan deletion → delete user
bthread("User100 Lifecycle", function () {
  addUser(100, "Roni Cohen");
  updateUser(100, { email: "roni100@lib.test" });
  updateUser(100, { phone: "+972-100-0000" });

  // If some other bthread manages accounts/loans, wait for cleanup:
  // (Either see a loan deletion for user 100, or just prove no active loans)
  anyOf(
    () => waitFor(matchLoanDeleted({ userId: 100 })),
    () => verifyNoActiveLoans(100)
  );

  // Now safe to delete
  deleteUser(100, "Roni Cohen");
  verifyUserDoesNotExist(100, "Roni Cohen");
});

// User 101: add → update name → create & clear a loan → delete
bthread("User101 Lifecycle", function () {
  addUser(101, "Jane Smith");
  updateUser(101, { name: "Jane A. Smith" });

  const b = waitForAnyBookAdded();             // borrow any seeded book
  addLoan(101, b.id);
  verifyLoanExists(101, b.id);
  deleteLoan(101, b.id);
  verifyLoanDoesNotExist(101, b.id);

  deleteUser(101, "Jane A. Smith");
  verifyUserDoesNotExist(101, "Jane A. Smith");
});

// User 102: add → concurrent loan flow interplay → guarded delete
bthread("User102 Lifecycle (concurrency)", function () {
  addUser(102, "John Roe");
  const b = waitForAnyBookAdded();

  // Another bthread may loan the same book; ensure uniqueness via passive guards
  addLoan(102, b.id);
  verifyLoanExists(102, b.id);

  // Simulate external attempt to delete user while on loan (should be blocked)
  tryToDeleteAUserInLoan(102, "John Roe"); // should be blocked by passive guards

  deleteLoan(102, b.id);
  verifyLoanDoesNotExist(102, b.id);

  deleteUser(102, "John Roe");
});

/** ========== ACTIVE: Loan lifecycles (3 examples) ========== */
bthread("Loan-A", function () {
  addUser(110, "Avi A");
  const bk = waitForAnyBookAdded();
  addLoan(110, bk.id);
  verifyLoanExists(110, bk.id);
  deleteLoan(110, bk.id);
  verifyLoanDoesNotExist(110, bk.id);
  deleteUser(110, "Avi A");
});

bthread("Loan-B", function () {
  addUser(111, "Avi B");
  const bk = waitForAnyBookAdded();
  addLoan(111, bk.id);
  // attempt duplicate (guarded)
  tryToAddExistingLoan(111, bk.id);      // should be blocked/failed
  deleteLoan(111, bk.id);
  deleteUser(111, "Avi B");
});

bthread("Loan-C (cross-user contention)", function () {
  addUser(112, "Avi C");
  addUser(113, "Avi D");
  const bk = waitForAnyBookAdded();
  addLoan(112, bk.id);
  // competing loan for same book should be prevented by guards
  tryAddCompetingLoan(113, bk.id);       // should be blocked
  deleteLoan(112, bk.id);
  deleteUser(112, "Avi C");
  deleteUser(113, "Avi D");
});


/** ===== Verification monitors (block inverse until verified) ===== */
// User add / update / delete
bthread("User add verification", function () {
  const u = waitForAnyUserAdded();
  block(matchDeleteUser(u.id, u.name), function () {
    verifyUserExists(u.id, u.name);
  });
});

bthread("User update verification", function () {
  const u = waitForAnyUserUpdated();
  block(matchDeleteUser(u.id, u.name), function () {
    verifyUserUpdated(u.id, u.diff); // implement diff shape in LLE
  });
});

bthread("User deletion verification", function () {
  const u = waitForAnyUserDeleted();
  block(matchAddUser(u.id, u.name), function () {
    verifyUserDoesNotExist(u.id, u.name);
  });
});

// Book add / update / delete
bthread("Book add verification", function () {
  const b = waitForAnyBookAdded();
  block(matchDeleteBook(b.id, b.title), function () {
    verifyBookExists(b.id, b.title);
  });
});

bthread("Book update verification", function () {
  const b = waitForAnyBookUpdated();
  block(matchDeleteBook(b.id, b.title), function () {
    verifyBookUpdated(b.id, b.diff);
  });
});

bthread("Book deletion verification", function () {
  const b = waitForAnyBookDeleted();
  block(matchAddBook(b.id, b.title), function () {
    verifyBookDoesNotExist(b.id, b.title);
  });
});

// Loan add / update / delete
bthread("Loan add verification", function () {
  const l = waitForAnyLoanAdded();
  block(matchDeleteLoan(l.userId, l.bookId), function () {
    verifyLoanExists(l.userId, l.bookId);
  });
});

bthread("Loan update verification", function () {
  const l = waitForAnyLoanUpdated();
  block(matchDeleteLoan(l.userId, l.bookId), function () {
    verifyLoanUpdated(l.userId, l.bookId, l.diff);
  });
});

bthread("Loan deletion verification", function () {
  const l = waitForAnyLoanDeleted();
  block(matchAddLoan(l.userId, l.bookId), function () {
    verifyLoanDoesNotExist(l.userId, l.bookId);
  });
});

/** ===== Invariant/constraint guards ===== */
// 1) No user deletion while loans exist
bthread("Guard: No user delete with active loans", function () {
  const l = waitForAnyLoanAdded();
  block(matchDeleteUser(l.userId, ANY), function () {
    // let loan verifier run; deletion allowed only after loan deletion verified
  });
});

// 2) No book deletion if on loan
bthread("Guard: No book delete while on loan", function () {
  const l = waitForAnyLoanAdded();
  block(matchDeleteBook(l.bookId, ANY), function () {});
});

// 3) No duplicate loan (same userId,bookId)
bthread("Guard: No duplicate loan", function () {
  const l = waitForAnyLoanAdded();
  block(matchAddLoan(l.userId, l.bookId), function () {
    // duplication attempt should be prevented (verify stays true for first loan)
  });
});

// 4) No loan for missing user or missing book
bthread("Guard: Loan requires existing user & book", function () {
  const ev = waitForAnyLoanAdded();
  verifyUserExists(ev.userId, ANY);
  verifyBookExists(ev.bookId, ANY);
});

// 5) No double-loan of the same book to two users at once
bthread("Guard: No competing book loans", function () {
  const l = waitForAnyLoanAdded();
  block(matchAddLoan(ANY_USER_EXCEPT(l.userId), l.bookId), function () {});
});

// 6) No update-after-delete race
bthread("Guard: No update-after-delete (User)", function () {
  const u = waitForAnyUserDeleted();
  block(matchUpdateUser(u.id, ANY), function () {});
});

} // end if mode === "MODEL"
