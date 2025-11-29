// Auto-generated HLS stories
//@provengo summon rest


// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let id = 200;
  createUser(200);
  waitForUserAdded(200);
  tryToAddExistingUser(200);
  verifyUserExists(200);
  deleteUser(200);
  tryToDeleteANonExistingUser(200);
  verifyUserDoesNotExist(200);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let id = 201;
  createUser(201);
  waitForUserAdded(201);
  tryToAddExistingUser(201);
  verifyUserExists(201);
  deleteUser(201);
  tryToDeleteANonExistingUser(201);
  verifyUserDoesNotExist(201);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let id = 206;
  createUser(206);
  waitForUserAdded(206);
  verifyUserExists(206);
  tryToAddExistingUser(206);
  verifyUserExists(206);
});

// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:Book:nondet:1:1
bthread("crud:Book:nondet:1:1", function () {
  let id = 210;
  createBook(210);
  waitForBookAdded(210);
  tryToAddExistingBook(210);
  verifyBookExists(210);
  deleteBook(210);
  tryToDeleteANonExistingBook(210);
  verifyBookDoesNotExist(210);
});

// Story: crud:Book:nondet:1:2
bthread("crud:Book:nondet:1:2", function () {
  let id = 211;
  createBook(211);
  waitForBookAdded(211);
  tryToAddExistingBook(211);
  verifyBookExists(211);
  deleteBook(211);
  tryToDeleteANonExistingBook(211);
  verifyBookDoesNotExist(211);
});

// Story: crud:Book:nondet:negative:dup-add
bthread("crud:Book:nondet:negative:dup-add", function () {
  let id = 216;
  createBook(216);
  waitForBookAdded(216);
  verifyBookExists(216);
  tryToAddExistingBook(216);
  verifyBookExists(216);
});

// Story: monitor:Book:add
bthread("monitor:Book:add", function () {
  while (true) {
    let ev = waitForAnyBookAdded();
    let args = Object.values(ev);
    block(matchDeletedBook.apply(null, args), function () {
      verifyBookExists.apply(null, args);
    });
  }
});

// Story: crud:Loan:nondet:1:1
bthread("crud:Loan:nondet:1:1", function () {
  let userId = 220;
  let bookId = 220;
  // Dependency Barrier
  let pending = [];
  pending.push(getUserAddedEvent(userId));
  pending.push(getBookAddedEvent(bookId));
  while (pending.length > 0) {
    let e = bp.sync({waitFor: pending});
    pending = pending.filter(es => !es.contains(e));
  }
  // End Barrier
  createLoan(220, 220);
  waitForLoanAdded(220, 220);
  tryToAddExistingLoan(220, 220);
  verifyLoanExists(220, 220);
  deleteLoan(220, 220);
  tryToDeleteANonExistingLoan(220, 220);
  verifyLoanDoesNotExist(220, 220);
});

// Story: crud:Loan:nondet:1:2
bthread("crud:Loan:nondet:1:2", function () {
  let userId = 221;
  let bookId = 221;
  // Dependency Barrier
  let pending = [];
  pending.push(getUserAddedEvent(userId));
  pending.push(getBookAddedEvent(bookId));
  while (pending.length > 0) {
    let e = bp.sync({waitFor: pending});
    pending = pending.filter(es => !es.contains(e));
  }
  // End Barrier
  createLoan(221, 221);
  waitForLoanAdded(221, 221);
  tryToAddExistingLoan(221, 221);
  verifyLoanExists(221, 221);
  deleteLoan(221, 221);
  tryToDeleteANonExistingLoan(221, 221);
  verifyLoanDoesNotExist(221, 221);
});

// Story: crud:Loan:nondet:negative:dup-add
bthread("crud:Loan:nondet:negative:dup-add", function () {
  let userId = 226;
  let bookId = 226;
  // Dependency Barrier
  let pending = [];
  pending.push(getUserAddedEvent(userId));
  pending.push(getBookAddedEvent(bookId));
  while (pending.length > 0) {
    let e = bp.sync({waitFor: pending});
    pending = pending.filter(es => !es.contains(e));
  }
  // End Barrier
  createLoan(226, 226);
  waitForLoanAdded(226, 226);
  verifyLoanExists(226, 226);
  tryToAddExistingLoan(226, 226);
  verifyLoanExists(226, 226);
});

// Story: monitor:Loan:add
bthread("monitor:Loan:add", function () {
  while (true) {
    let ev = waitForAnyLoanAdded();
    let args = Object.values(ev);
    block(matchDeletedLoan.apply(null, args), function () {
      verifyLoanExists.apply(null, args);
    });
  }
});

// Story: crud:Hold:nondet:1:1
bthread("crud:Hold:nondet:1:1", function () {
  let id = 230;
  createHold(230);
  waitForHoldAdded(230);
  tryToAddExistingHold(230);
  verifyHoldExists(230);
  deleteHold(230);
  tryToDeleteANonExistingHold(230);
  verifyHoldDoesNotExist(230);
});

// Story: crud:Hold:nondet:1:2
bthread("crud:Hold:nondet:1:2", function () {
  let id = 231;
  createHold(231);
  waitForHoldAdded(231);
  tryToAddExistingHold(231);
  verifyHoldExists(231);
  deleteHold(231);
  tryToDeleteANonExistingHold(231);
  verifyHoldDoesNotExist(231);
});

// Story: crud:Hold:nondet:negative:dup-add
bthread("crud:Hold:nondet:negative:dup-add", function () {
  let id = 236;
  createHold(236);
  waitForHoldAdded(236);
  verifyHoldExists(236);
  tryToAddExistingHold(236);
  verifyHoldExists(236);
});

// Story: monitor:Hold:add
bthread("monitor:Hold:add", function () {
  while (true) {
    let ev = waitForAnyHoldAdded();
    let args = Object.values(ev);
    block(matchDeletedHold.apply(null, args), function () {
      verifyHoldExists.apply(null, args);
    });
  }
});
