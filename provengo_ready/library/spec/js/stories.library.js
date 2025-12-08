// Auto-generated stories for library
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:Books:linear:1
bthread("crud:Books:linear:1", function () {
  let id = 210;
  let q = "q_210";
  let title = "title_210";
  createBook(id, q, title);
  tryToAddExistingBooks(id, q, title);
  verifyBooksExists(id, q, title);
  deleteBook(id, q, title);
  tryToDeleteANonExistingBooks(id, q, title);
  verifyBooksDoesNotExist(id, q, title);
});

// Story: crud:Books:linear:2
bthread("crud:Books:linear:2", function () {
  let id = 220;
  let q = "q_220";
  let title = "title_220";
  createBook(id, q, title);
  tryToAddExistingBooks(id, q, title);
  verifyBooksExists(id, q, title);
  deleteBook(id, q, title);
  tryToDeleteANonExistingBooks(id, q, title);
  verifyBooksDoesNotExist(id, q, title);
});

// Story: crud:Books:linear:3
bthread("crud:Books:linear:3", function () {
  let id = 230;
  let q = "q_230";
  let title = "title_230";
  createBook(id, q, title);
  tryToAddExistingBooks(id, q, title);
  verifyBooksExists(id, q, title);
  deleteBook(id, q, title);
  tryToDeleteANonExistingBooks(id, q, title);
  verifyBooksDoesNotExist(id, q, title);
});

// Monitor: Books Verification
bthread("monitor:Books", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBooksAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let q = (e.data.parameters && e.data.parameters.q) ? e.data.parameters.q : e.data.q;
    let title = (e.data.parameters && e.data.parameters.title) ? e.data.parameters.title : e.data.title;
    // Block Deletion while Verifying Existence
    block(matchDeletedBooks(id, q, title), function() {
        verifyBooksExists(id, q, title);
    });
  }
});

// Story: crud:Holds:linear:1
bthread("crud:Holds:linear:1", function () {
  let bookId; // Resolved Dependency
  let id = 260;
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, id, userId);
  tryToAddExistingHolds(bookId, id, userId);
  verifyHoldsExists(bookId, id, userId);
  deleteHold(bookId, id, userId);
  tryToDeleteANonExistingHolds(bookId, id, userId);
  verifyHoldsDoesNotExist(bookId, id, userId);
});

// Story: crud:Holds:linear:2
bthread("crud:Holds:linear:2", function () {
  let bookId; // Resolved Dependency
  let id = 270;
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, id, userId);
  tryToAddExistingHolds(bookId, id, userId);
  verifyHoldsExists(bookId, id, userId);
  deleteHold(bookId, id, userId);
  tryToDeleteANonExistingHolds(bookId, id, userId);
  verifyHoldsDoesNotExist(bookId, id, userId);
});

// Story: crud:Holds:linear:3
bthread("crud:Holds:linear:3", function () {
  let bookId; // Resolved Dependency
  let id = 280;
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, id, userId);
  tryToAddExistingHolds(bookId, id, userId);
  verifyHoldsExists(bookId, id, userId);
  deleteHold(bookId, id, userId);
  tryToDeleteANonExistingHolds(bookId, id, userId);
  verifyHoldsDoesNotExist(bookId, id, userId);
});

// Monitor: Holds Verification
bthread("monitor:Holds", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyHoldsAdded() });
    let bookId = (e.data.parameters && e.data.parameters.bookId) ? e.data.parameters.bookId : e.data.bookId;
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let userId = (e.data.parameters && e.data.parameters.userId) ? e.data.parameters.userId : e.data.userId;
    // Block Deletion while Verifying Existence
    block(matchDeletedHolds(bookId, id, userId), function() {
        verifyHoldsExists(bookId, id, userId);
    });
  }
});

// Story: crud:Loans:linear:1
bthread("crud:Loans:linear:1", function () {
  let bookId; // Resolved Dependency
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, userId);
  tryToAddExistingLoans(bookId, userId);
  verifyLoansExists(bookId, userId);
  deleteLoan(bookId, userId);
  tryToDeleteANonExistingLoans(bookId, userId);
  verifyLoansDoesNotExist(bookId, userId);
});

// Story: crud:Loans:linear:2
bthread("crud:Loans:linear:2", function () {
  let bookId; // Resolved Dependency
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, userId);
  tryToAddExistingLoans(bookId, userId);
  verifyLoansExists(bookId, userId);
  deleteLoan(bookId, userId);
  tryToDeleteANonExistingLoans(bookId, userId);
  verifyLoansDoesNotExist(bookId, userId);
});

// Story: crud:Loans:linear:3
bthread("crud:Loans:linear:3", function () {
  let bookId; // Resolved Dependency
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, userId);
  tryToAddExistingLoans(bookId, userId);
  verifyLoansExists(bookId, userId);
  deleteLoan(bookId, userId);
  tryToDeleteANonExistingLoans(bookId, userId);
  verifyLoansDoesNotExist(bookId, userId);
});

// Monitor: Loans Verification
bthread("monitor:Loans", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLoansAdded() });
    let bookId = (e.data.parameters && e.data.parameters.bookId) ? e.data.parameters.bookId : e.data.bookId;
    let userId = (e.data.parameters && e.data.parameters.userId) ? e.data.parameters.userId : e.data.userId;
    // Block Deletion while Verifying Existence
    block(matchDeletedLoans(bookId, userId), function() {
        verifyLoansExists(bookId, userId);
    });
  }
});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  let id = 360;
  let name = "name_360";
  let q = "q_360";
  createUser(id, name, q);
  tryToAddExistingUsers(id, name, q);
  verifyUsersExists(id, name, q);
  deleteUser(id, name, q);
  tryToDeleteANonExistingUsers(id, name, q);
  verifyUsersDoesNotExist(id, name, q);
});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  let id = 370;
  let name = "name_370";
  let q = "q_370";
  createUser(id, name, q);
  tryToAddExistingUsers(id, name, q);
  verifyUsersExists(id, name, q);
  deleteUser(id, name, q);
  tryToDeleteANonExistingUsers(id, name, q);
  verifyUsersDoesNotExist(id, name, q);
});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  let id = 380;
  let name = "name_380";
  let q = "q_380";
  createUser(id, name, q);
  tryToAddExistingUsers(id, name, q);
  verifyUsersExists(id, name, q);
  deleteUser(id, name, q);
  tryToDeleteANonExistingUsers(id, name, q);
  verifyUsersDoesNotExist(id, name, q);
});

// Monitor: Users Verification
bthread("monitor:Users", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let name = (e.data.parameters && e.data.parameters.name) ? e.data.parameters.name : e.data.name;
    let q = (e.data.parameters && e.data.parameters.q) ? e.data.parameters.q : e.data.q;
    // Block Deletion while Verifying Existence
    block(matchDeletedUsers(id, name, q), function() {
        verifyUsersExists(id, name, q);
    });
  }
});
