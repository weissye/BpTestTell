// HLS (active + passive) – library
if (mode === "MODEL") {

  // ===== ACTIVE (≥3) =====
  bthread("Seed Books – Batch A", function () {
    addBook(201, "The Great Gatsby");
    addBook(202, "1984");
    addBook(203, "Brave New World");
  });

  bthread("User100 Lifecycle", function () {
    addUser(100, "Roni Cohen");
    updateUser(100, { "email": "roni100@lib.test" });
    updateUser(100, { "phone": "+972-100-0000" });
    anyOf(
      () => waitFor(matchLoanDeleted({ "userId": 100 })),
      () => verifyNoActiveLoans(100)
    );
    deleteUser(100, "Roni Cohen");
    verifyUserDoesNotExist(100, "Roni Cohen");
  });

  bthread("User101 Lifecycle", function () {
    addUser(101, "Jane Smith");
    updateUser(101, { "name": "Jane A. Smith" });
    const b = waitForAnyBookAdded();
    addLoan(101, b.id);
    verifyLoanExists(101, b.id);
    deleteLoan(101, b.id);
    verifyLoanDoesNotExist(101, b.id);
    deleteUser(101, "Jane A. Smith");
    verifyUserDoesNotExist(101, "Jane A. Smith");
  });

  // ===== PASSIVE =====
  bthread("User add verification", function () {
    const u = waitForAnyUserAdded();
    block(matchDeleteUser(u.id, u.name), function () {
      verifyUserExists(u.id, u.name);
    });
  });
  bthread("Book add verification", function () {
    const b = waitForAnyBookAdded();
    block(matchDeleteBook(b.id, b.title), function () {
      verifyBookExists(b.id, b.title);
    });
  });
  bthread("Loan add verification", function () {
    const l = waitForAnyLoanAdded();
    block(matchDeleteLoan(l.userId, l.bookId), function () {
      verifyLoanExists(l.userId, l.bookId);
    });
  });
  bthread("Guard: No user delete with active loans", function () {
    const l = waitForAnyLoanAdded();
    block(matchDeleteUser(l.userId, ANY), function () {});
  });
} // end if
