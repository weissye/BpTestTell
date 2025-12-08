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
  let integer = "integer_210";
  let q = "q_210";
  let string = "string_210";
  createBook(id, integer, q, string);
  tryToAddExistingBooks(id, integer, q, string);
  verifyBooksExists(id, integer, q, string);
  deleteBook(id, integer, q, string);
  tryToDeleteANonExistingBooks(id, integer, q, string);
  verifyBooksDoesNotExist(id, integer, q, string);
});

// Story: crud:Books:linear:2
bthread("crud:Books:linear:2", function () {
  let id = 220;
  let integer = "integer_220";
  let q = "q_220";
  let string = "string_220";
  createBook(id, integer, q, string);
  tryToAddExistingBooks(id, integer, q, string);
  verifyBooksExists(id, integer, q, string);
  deleteBook(id, integer, q, string);
  tryToDeleteANonExistingBooks(id, integer, q, string);
  verifyBooksDoesNotExist(id, integer, q, string);
});

// Story: crud:Books:linear:3
bthread("crud:Books:linear:3", function () {
  let id = 230;
  let integer = "integer_230";
  let q = "q_230";
  let string = "string_230";
  createBook(id, integer, q, string);
  tryToAddExistingBooks(id, integer, q, string);
  verifyBooksExists(id, integer, q, string);
  deleteBook(id, integer, q, string);
  tryToDeleteANonExistingBooks(id, integer, q, string);
  verifyBooksDoesNotExist(id, integer, q, string);
});

// Monitor: Books Verification
bthread("monitor:Books", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBooksAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let integer = (e.data.parameters && e.data.parameters.integer) ? e.data.parameters.integer : e.data.integer;
    let q = (e.data.parameters && e.data.parameters.q) ? e.data.parameters.q : e.data.q;
    let string = (e.data.parameters && e.data.parameters.string) ? e.data.parameters.string : e.data.string;
    // Block Deletion while Verifying Existence
    block(matchDeletedBooks(id, integer, q, string), function() {
        verifyBooksExists(id, integer, q, string);
    });
  }
});

// Story: crud:Holds:linear:1
bthread("crud:Holds:linear:1", function () {
  let id = 260;
  let integer = "integer_260";
  createHold(id, integer);
  tryToAddExistingHolds(id, integer);
  verifyHoldsExists(id, integer);
  deleteHold(id, integer);
  tryToDeleteANonExistingHolds(id, integer);
  verifyHoldsDoesNotExist(id, integer);
});

// Story: crud:Holds:linear:2
bthread("crud:Holds:linear:2", function () {
  let id = 270;
  let integer = "integer_270";
  createHold(id, integer);
  tryToAddExistingHolds(id, integer);
  verifyHoldsExists(id, integer);
  deleteHold(id, integer);
  tryToDeleteANonExistingHolds(id, integer);
  verifyHoldsDoesNotExist(id, integer);
});

// Story: crud:Holds:linear:3
bthread("crud:Holds:linear:3", function () {
  let id = 280;
  let integer = "integer_280";
  createHold(id, integer);
  tryToAddExistingHolds(id, integer);
  verifyHoldsExists(id, integer);
  deleteHold(id, integer);
  tryToDeleteANonExistingHolds(id, integer);
  verifyHoldsDoesNotExist(id, integer);
});

// Monitor: Holds Verification
bthread("monitor:Holds", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyHoldsAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let integer = (e.data.parameters && e.data.parameters.integer) ? e.data.parameters.integer : e.data.integer;
    // Block Deletion while Verifying Existence
    block(matchDeletedHolds(id, integer), function() {
        verifyHoldsExists(id, integer);
    });
  }
});

// Story: crud:Loans:linear:1
bthread("crud:Loans:linear:1", function () {
  let bookId; // Resolved Dependency
  let integer = "integer_310";
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, integer, userId);
  tryToAddExistingLoans(bookId, integer, userId);
  verifyLoansExists(bookId, integer, userId);
  deleteLoan(bookId, integer, userId);
  tryToDeleteANonExistingLoans(bookId, integer, userId);
  verifyLoansDoesNotExist(bookId, integer, userId);
});

// Story: crud:Loans:linear:2
bthread("crud:Loans:linear:2", function () {
  let bookId; // Resolved Dependency
  let integer = "integer_320";
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, integer, userId);
  tryToAddExistingLoans(bookId, integer, userId);
  verifyLoansExists(bookId, integer, userId);
  deleteLoan(bookId, integer, userId);
  tryToDeleteANonExistingLoans(bookId, integer, userId);
  verifyLoansDoesNotExist(bookId, integer, userId);
});

// Story: crud:Loans:linear:3
bthread("crud:Loans:linear:3", function () {
  let bookId; // Resolved Dependency
  let integer = "integer_330";
  let userId; // Resolved Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBooksAdded();
  deps["userId"] = matchAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, integer, userId);
  tryToAddExistingLoans(bookId, integer, userId);
  verifyLoansExists(bookId, integer, userId);
  deleteLoan(bookId, integer, userId);
  tryToDeleteANonExistingLoans(bookId, integer, userId);
  verifyLoansDoesNotExist(bookId, integer, userId);
});

// Monitor: Loans Verification
bthread("monitor:Loans", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLoansAdded() });
    let bookId = (e.data.parameters && e.data.parameters.bookId) ? e.data.parameters.bookId : e.data.bookId;
    let integer = (e.data.parameters && e.data.parameters.integer) ? e.data.parameters.integer : e.data.integer;
    let userId = (e.data.parameters && e.data.parameters.userId) ? e.data.parameters.userId : e.data.userId;
    // Block Deletion while Verifying Existence
    block(matchDeletedLoans(bookId, integer, userId), function() {
        verifyLoansExists(bookId, integer, userId);
    });
  }
});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  let id = 360;
  let integer = "integer_360";
  let q = "q_360";
  let string = "string_360";
  createUser(id, integer, q, string);
  tryToAddExistingUsers(id, integer, q, string);
  verifyUsersExists(id, integer, q, string);
  deleteUser(id, integer, q, string);
  tryToDeleteANonExistingUsers(id, integer, q, string);
  verifyUsersDoesNotExist(id, integer, q, string);
});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  let id = 370;
  let integer = "integer_370";
  let q = "q_370";
  let string = "string_370";
  createUser(id, integer, q, string);
  tryToAddExistingUsers(id, integer, q, string);
  verifyUsersExists(id, integer, q, string);
  deleteUser(id, integer, q, string);
  tryToDeleteANonExistingUsers(id, integer, q, string);
  verifyUsersDoesNotExist(id, integer, q, string);
});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  let id = 380;
  let integer = "integer_380";
  let q = "q_380";
  let string = "string_380";
  createUser(id, integer, q, string);
  tryToAddExistingUsers(id, integer, q, string);
  verifyUsersExists(id, integer, q, string);
  deleteUser(id, integer, q, string);
  tryToDeleteANonExistingUsers(id, integer, q, string);
  verifyUsersDoesNotExist(id, integer, q, string);
});

// Monitor: Users Verification
bthread("monitor:Users", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let integer = (e.data.parameters && e.data.parameters.integer) ? e.data.parameters.integer : e.data.integer;
    let q = (e.data.parameters && e.data.parameters.q) ? e.data.parameters.q : e.data.q;
    let string = (e.data.parameters && e.data.parameters.string) ? e.data.parameters.string : e.data.string;
    // Block Deletion while Verifying Existence
    block(matchDeletedUsers(id, integer, q, string), function() {
        verifyUsersExists(id, integer, q, string);
    });
  }
});
