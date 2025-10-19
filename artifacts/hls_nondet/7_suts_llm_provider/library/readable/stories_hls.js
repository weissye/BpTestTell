// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: library
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("BookLifecycle", function () {
  const x = pick([{id: "B001"}, {id: "B002"}]);
  addBook(x.id);
  updateBook(x.id);
  updateBook(x.id);
  verifyBookExists(x.id);
  verifyBookUpdated(x.id);
});

bthread("HoldLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHold(x.id);
  updateHold(x.id);
  updateHold(x.id);
  verifyHoldExists(x.id);
  verifyHoldUpdated(x.id);
});

bthread("LoanLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLoan(x.id);
  updateLoan(x.id);
  updateLoan(x.id);
  verifyLoanExists(x.id);
  verifyLoanUpdated(x.id);
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUser(x.id);
  updateUser(x.id);
  updateUser(x.id);
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Book nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Book_id_N"}]);
  const steps = pick([0,1,2,3]);
  addBook(x.id);
  for (var i=0; i<steps; i++) {
    updateBook(x.id);
  }
  if (pick([true,false])) { deleteBook(x.id); }
  verifyBookExists(x.id);
  verifyBookUpdated(x.id);
});

bthread("Book nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBook(a.id);
  block(matchAddBook(a.id, ANY), function () {});
  addBook(b.id);
});

bthread("Hold nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Hold_id_N"}]);
  const steps = pick([0,1,2,3]);
  addHold(x.id);
  for (var i=0; i<steps; i++) {
    updateHold(x.id);
  }
  if (pick([true,false])) { deleteHold(x.id); }
  verifyHoldExists(x.id);
  verifyHoldUpdated(x.id);
});

bthread("Hold nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHold(a.id);
  block(matchAddHold(a.id, ANY), function () {});
  addHold(b.id);
});

bthread("Loan nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Loan_id_N"}]);
  const steps = pick([0,1,2,3]);
  addLoan(x.id);
  for (var i=0; i<steps; i++) {
    updateLoan(x.id);
  }
  if (pick([true,false])) { deleteLoan(x.id); }
  verifyLoanExists(x.id);
  verifyLoanUpdated(x.id);
});

bthread("Loan nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLoan(a.id);
  block(matchAddLoan(a.id, ANY), function () {});
  addLoan(b.id);
});

bthread("User nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "User_id_N"}]);
  const steps = pick([0,1,2,3]);
  addUser(x.id);
  for (var i=0; i<steps; i++) {
    updateUser(x.id);
  }
  if (pick([true,false])) { deleteUser(x.id); }
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

bthread("User nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUser(a.id);
  block(matchAddUser(a.id, ANY), function () {});
  addUser(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Book create verification", function () {
  const e = waitForAnyBookAdded();
  block(matchDeleteBook(e.id, ANY), function () {
    verifyBookExists(e.id);
  });
});

bthread("Book update verification", function () {
  const e = waitForAnyBookUpdated();
  block(matchDeleteBook(e.id, ANY), function () {
    verifyBookUpdated(e.id);
  });
});

bthread("Book delete verification", function () {
  const e = waitForAnyBookDeleted();
  block(matchAddBook(e.id, ANY), function () {
    verifyBookDoesNotExist(e.id);
  });
});

bthread("Hold create verification", function () {
  const e = waitForAnyHoldAdded();
  block(matchDeleteHold(e.id, ANY), function () {
    verifyHoldExists(e.id);
  });
});

bthread("Hold update verification", function () {
  const e = waitForAnyHoldUpdated();
  block(matchDeleteHold(e.id, ANY), function () {
    verifyHoldUpdated(e.id);
  });
});

bthread("Hold delete verification", function () {
  const e = waitForAnyHoldDeleted();
  block(matchAddHold(e.id, ANY), function () {
    verifyHoldDoesNotExist(e.id);
  });
});

bthread("Loan create verification", function () {
  const e = waitForAnyLoanAdded();
  block(matchDeleteLoan(e.id, ANY), function () {
    verifyLoanExists(e.id);
  });
});

bthread("Loan update verification", function () {
  const e = waitForAnyLoanUpdated();
  block(matchDeleteLoan(e.id, ANY), function () {
    verifyLoanUpdated(e.id);
  });
});

bthread("Loan delete verification", function () {
  const e = waitForAnyLoanDeleted();
  block(matchAddLoan(e.id, ANY), function () {
    verifyLoanDoesNotExist(e.id);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserExists(e.id);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserUpdated(e.id);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  block(matchAddUser(e.id, ANY), function () {
    verifyUserDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Book", function () {
  const x = waitForAnyBookAdded();
  block(matchAddBook(x.id, ANY), function () {});
});

bthread("Guard: Unique Hold", function () {
  const x = waitForAnyHoldAdded();
  block(matchAddHold(x.id, ANY), function () {});
});

bthread("Guard: Unique Loan", function () {
  const x = waitForAnyLoanAdded();
  block(matchAddLoan(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
