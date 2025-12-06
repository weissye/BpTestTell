// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        bp.log.info("DEBUG RESOLVE: Caught event for " + k + ". Event Data: " + JSON.stringify(e.data));
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
            bp.log.info("DEBUG RESOLVE: Mapped " + k + " to " + mappedKey + " -> Value: " + val);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        } else { bp.log.info("DEBUG RESOLVE: Failed to extract value for " + k); }
      }
    }
  }
  return captured;
}

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let id = 200;
  let name = "name_200";
  createUser(id, name);
  waitForUserAdded(id, name);
  tryToAddExistingUser(id, name);
  verifyUserExists(id, name);
  deleteUser(id, name);
  tryToDeleteANonExistingUser(id, name);
  verifyUserDoesNotExist(id, name);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let id = 201;
  let name = "name_201";
  createUser(id, name);
  tryToAddExistingUser(id, name);
  verifyUserExists(id, name);
  deleteUser(id, name);
  tryToDeleteANonExistingUser(id, name);
  verifyUserDoesNotExist(id, name);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let id = 206;
  let name = "name_206";
  createUser(id, name);
  verifyUserExists(id, name);
  tryToAddExistingUser(id, name);
  verifyUserExists(id, name);
});

// Monitor: User Addition Verification
bthread("monitor:User:addition", function () {
  while (true) {
    let item = waitForAnyUserAdded();
    block(matchDeletedUser(item.id, item.name), function () {
      verifyUserExists(item.id, item.name);
    });
  }
});

// Monitor: User Deletion Verification
bthread("monitor:User:deletion", function () {
  while (true) {
    let item = waitForAnyUserDeleted();
    block(matchAddedUser(item.id, item.name), function () {
      verifyUserDoesNotExist(item.id, item.name);
    });
  }
});

// Story: crud:Book:nondet:1:1
bthread("crud:Book:nondet:1:1", function () {
  let id = 210;
  let title = "title_210";
  createBook(id, title);
  waitForBookAdded(id, title);
  tryToAddExistingBook(id, title);
  verifyBookExists(id, title);
  deleteBook(id, title);
  tryToDeleteANonExistingBook(id, title);
  verifyBookDoesNotExist(id, title);
});

// Story: crud:Book:nondet:1:2
bthread("crud:Book:nondet:1:2", function () {
  let id = 211;
  let title = "title_211";
  createBook(id, title);
  tryToAddExistingBook(id, title);
  verifyBookExists(id, title);
  deleteBook(id, title);
  tryToDeleteANonExistingBook(id, title);
  verifyBookDoesNotExist(id, title);
});

// Story: crud:Book:nondet:negative:dup-add
bthread("crud:Book:nondet:negative:dup-add", function () {
  let id = 216;
  let title = "title_216";
  createBook(id, title);
  verifyBookExists(id, title);
  tryToAddExistingBook(id, title);
  verifyBookExists(id, title);
});

// Monitor: Book Addition Verification
bthread("monitor:Book:addition", function () {
  while (true) {
    let item = waitForAnyBookAdded();
    block(matchDeletedBook(item.id, item.title), function () {
      verifyBookExists(item.id, item.title);
    });
  }
});

// Monitor: Book Deletion Verification
bthread("monitor:Book:deletion", function () {
  while (true) {
    let item = waitForAnyBookDeleted();
    block(matchAddedBook(item.id, item.title), function () {
      verifyBookDoesNotExist(item.id, item.title);
    });
  }
});

// Story: crud:Loan:nondet:1:1
bthread("crud:Loan:nondet:1:1", function () {
  let bookId;
  let loanedAt = "loanedAt_220";
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, loanedAt, userId);
  waitForLoanAdded(bookId, loanedAt, userId);
  tryToAddExistingLoan(bookId, loanedAt, userId);
  verifyLoanExists(bookId, loanedAt, userId);
  deleteLoan(bookId, loanedAt, userId);
  tryToDeleteANonExistingLoan(bookId, loanedAt, userId);
  verifyLoanDoesNotExist(bookId, loanedAt, userId);
});

// Story: crud:Loan:nondet:1:2
bthread("crud:Loan:nondet:1:2", function () {
  let bookId;
  let loanedAt = "loanedAt_221";
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, loanedAt, userId);
  tryToAddExistingLoan(bookId, loanedAt, userId);
  verifyLoanExists(bookId, loanedAt, userId);
  deleteLoan(bookId, loanedAt, userId);
  tryToDeleteANonExistingLoan(bookId, loanedAt, userId);
  verifyLoanDoesNotExist(bookId, loanedAt, userId);
});

// Story: crud:Loan:nondet:negative:dup-add
bthread("crud:Loan:nondet:negative:dup-add", function () {
  let bookId;
  let loanedAt = "loanedAt_226";
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, loanedAt, userId);
  verifyLoanExists(bookId, loanedAt, userId);
  tryToAddExistingLoan(bookId, loanedAt, userId);
  verifyLoanExists(bookId, loanedAt, userId);
});

// Monitor: Loan Addition Verification
bthread("monitor:Loan:addition", function () {
  while (true) {
    let item = waitForAnyLoanAdded();
    block(matchDeletedLoan(item.bookId, item.loanedAt, item.userId), function () {
      verifyLoanExists(item.bookId, item.loanedAt, item.userId);
    });
  }
});

// Monitor: Loan Deletion Verification
bthread("monitor:Loan:deletion", function () {
  while (true) {
    let item = waitForAnyLoanDeleted();
    block(matchAddedLoan(item.bookId, item.loanedAt, item.userId), function () {
      verifyLoanDoesNotExist(item.bookId, item.loanedAt, item.userId);
    });
  }
});

// Story: crud:Hold:nondet:1:1
bthread("crud:Hold:nondet:1:1", function () {
  let bookId;
  let id = 230;
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, id, userId);
  waitForHoldAdded(bookId, id, userId);
  tryToAddExistingHold(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
  deleteHold(bookId, id, userId);
  tryToDeleteANonExistingHold(bookId, id, userId);
  verifyHoldDoesNotExist(bookId, id, userId);
});

// Story: crud:Hold:nondet:1:2
bthread("crud:Hold:nondet:1:2", function () {
  let bookId;
  let id = 231;
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, id, userId);
  tryToAddExistingHold(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
  deleteHold(bookId, id, userId);
  tryToDeleteANonExistingHold(bookId, id, userId);
  verifyHoldDoesNotExist(bookId, id, userId);
});

// Story: crud:Hold:nondet:negative:dup-add
bthread("crud:Hold:nondet:negative:dup-add", function () {
  let bookId;
  let id = 236;
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
  tryToAddExistingHold(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
});

// Monitor: Hold Addition Verification
bthread("monitor:Hold:addition", function () {
  while (true) {
    let item = waitForAnyHoldAdded();
    block(matchDeletedHold(item.bookId, item.id, item.userId), function () {
      verifyHoldExists(item.bookId, item.id, item.userId);
    });
  }
});

// Monitor: Hold Deletion Verification
bthread("monitor:Hold:deletion", function () {
  while (true) {
    let item = waitForAnyHoldDeleted();
    block(matchAddedHold(item.bookId, item.id, item.userId), function () {
      verifyHoldDoesNotExist(item.bookId, item.id, item.userId);
    });
  }
});
