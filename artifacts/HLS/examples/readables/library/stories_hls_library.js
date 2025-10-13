// HLS (active + passive) – Library SUT
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("Seed Books – Batch A", function () {
    addBook(201, "The Great Gatsby");
    addBook(202, "1984");
    addBook(203, "Brave New World");
  });

  bthread("User100 Lifecycle", function () {
    addUser(100, "Roni Cohen");
    updateUser(100, { email: "roni100@lib.test" });
    updateUser(100, { phone: "+972-100-0000" });
    anyOf(
      () => waitFor(matchLoanDeleted({ userId: 100 })),
      () => verifyNoActiveLoans(100)
    );
    deleteUser(100, "Roni Cohen");
    verifyUserDoesNotExist(100, "Roni Cohen");
  });

  bthread("User101 Lifecycle", function () {
    addUser(101, "Jane Smith");
    updateUser(101, { name: "Jane A. Smith" });
    const b = waitForAnyBookAdded();
    addLoan(101, b.id);
    verifyLoanExists(101, b.id);
    deleteLoan(101, b.id);
    verifyLoanDoesNotExist(101, b.id);
    deleteUser(101, "Jane A. Smith");
    verifyUserDoesNotExist(101, "Jane A. Smith");
  });

  bthread("User102 Lifecycle (concurrency)", function () {
    addUser(102, "John Roe");
    const b = waitForAnyBookAdded();
    addLoan(102, b.id);
    verifyLoanExists(102, b.id);
    tryToDeleteAUserInLoan(102, "John Roe");
    deleteLoan(102, b.id);
    verifyLoanDoesNotExist(102, b.id);
    deleteUser(102, "John Roe");
  });

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
    tryToAddExistingLoan(111, bk.id);
    deleteLoan(111, bk.id);
    deleteUser(111, "Avi B");
  });

  bthread("Loan-C (cross-user contention)", function () {
    addUser(112, "Avi C");
    addUser(113, "Avi D");
    const bk = waitForAnyBookAdded();
    addLoan(112, bk.id);
    tryAddCompetingLoan(113, bk.id);
    deleteLoan(112, bk.id);
    deleteUser(112, "Avi C");
    deleteUser(113, "Avi D");
  });

  // ===== PASSIVE ASSERTIONS =====
  bthread("User add verification", function () {
    const u = waitForAnyUserAdded();
    block(matchDeleteUser(u.id, u.name), function () {
      verifyUserExists(u.id, u.name);
    });
  });
  bthread("User update verification", function () {
    const u = waitForAnyUserUpdated();
    block(matchDeleteUser(u.id, u.name), function () {
      verifyUserUpdated(u.id, u.diff);
    });
  });
  bthread("User deletion verification", function () {
    const u = waitForAnyUserDeleted();
    block(matchAddUser(u.id, u.name), function () {
      verifyUserDoesNotExist(u.id, u.name);
    });
  });

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

  bthread("Guard: No user delete with active loans", function () {
    const l = waitForAnyLoanAdded();
    block(matchDeleteUser(l.userId, ANY), function () {});
  });
  bthread("Guard: No book delete while on loan", function () {
    const l = waitForAnyLoanAdded();
    block(matchDeleteBook(l.bookId, ANY), function () {});
  });
  bthread("Guard: No duplicate loan", function () {
    const l = waitForAnyLoanAdded();
    block(matchAddLoan(l.userId, l.bookId), function () {});
  });
  bthread("Guard: Loan requires existing user & book", function () {
    const ev = waitForAnyLoanAdded();
    verifyUserExists(ev.userId, ANY);
    verifyBookExists(ev.bookId, ANY);
  });
  bthread("Guard: No competing book loans", function () {
    const l = waitForAnyLoanAdded();
    block(matchAddLoan(ANY, l.bookId), function () {});
  });
  bthread("Guard: No update-after-delete (User)", function () {
    const u = waitForAnyUserDeleted();
    block(matchUpdateUser(u.id, ANY), function () {});
  });
  bthread("Guard: No update-after-delete (Book)", function () {
    const b = waitForAnyBookDeleted();
    block(matchUpdateBook(b.id, ANY), function () {});
  });
  bthread("Guard: No update-after-delete (Loan)", function () {
    const l = waitForAnyLoanDeleted();
    block(matchUpdateLoan(l.userId, l.bookId, ANY), function () {});
  });

} // end if mode === "MODEL"
