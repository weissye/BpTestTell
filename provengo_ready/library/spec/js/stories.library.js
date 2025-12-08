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

// Story: crud:Users:linear
bthread("crud:Users:linear", function () {
  let id = 200;
  let name = "name_200";
  let q = "q_200";
  createUser(id, name, q);
  waitForUsersAdded(id, name, q);
  tryToAddExistingUsers(id, name, q);
  verifyUsersExists(id, name, q);
  deleteUser(id, name, q);
  tryToDeleteANonExistingUsers(id, name, q);
  verifyUsersDoesNotExist(id, name, q);
});

// Main Story: crud:Users:monitor
bthread("crud:Users:monitor", function () {
  let id = 210;
  let name = "name_210";
  let q = "q_210";
  createUser(id, name, q);
  waitForUsersAdded(id, name, q);
  bp.sync({ waitFor: bp.Event("Verified Users: " + id) });
  deleteUser(id, name, q);
});

// Monitor: Users Verification
bthread("monitor:Users", function () {
  while (true) {
    let e = waitForAnyUsersAdded();
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let name = (e.data.parameters && e.data.parameters.name) ? e.data.parameters.name : e.data.name;
    let q = (e.data.parameters && e.data.parameters.q) ? e.data.parameters.q : e.data.q;
    verifyUsersExists(id, name, q);
    bp.sync({ request: bp.Event("Verified Users: " + id) });
  }
});

// Story: crud:Books:linear
bthread("crud:Books:linear", function () {
  let id = 220;
  let q = "q_220";
  let title = "title_220";
  createBook(id, q, title);
  waitForBooksAdded(id, q, title);
  tryToAddExistingBooks(id, q, title);
  verifyBooksExists(id, q, title);
  deleteBook(id, q, title);
  tryToDeleteANonExistingBooks(id, q, title);
  verifyBooksDoesNotExist(id, q, title);
});

// Main Story: crud:Books:monitor
bthread("crud:Books:monitor", function () {
  let id = 230;
  let q = "q_230";
  let title = "title_230";
  createBook(id, q, title);
  waitForBooksAdded(id, q, title);
  bp.sync({ waitFor: bp.Event("Verified Books: " + id) });
  deleteBook(id, q, title);
});

// Monitor: Books Verification
bthread("monitor:Books", function () {
  while (true) {
    let e = waitForAnyBooksAdded();
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let q = (e.data.parameters && e.data.parameters.q) ? e.data.parameters.q : e.data.q;
    let title = (e.data.parameters && e.data.parameters.title) ? e.data.parameters.title : e.data.title;
    verifyBooksExists(id, q, title);
    bp.sync({ request: bp.Event("Verified Books: " + id) });
  }
});

// Story: crud:Loans:linear
bthread("crud:Loans:linear", function () {
  let bookId; // Dependency
  let userId; // Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = waitForAnyBooksAdded();
  deps["userId"] = waitForAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, userId);
  waitForLoansAdded(bookId, userId);
  tryToAddExistingLoans(bookId, userId);
  verifyLoansExists(bookId, userId);
  deleteLoan(bookId, userId);
  tryToDeleteANonExistingLoans(bookId, userId);
  verifyLoansDoesNotExist(bookId, userId);
});

// Main Story: crud:Loans:monitor
bthread("crud:Loans:monitor", function () {
  let bookId; // Dependency
  let userId; // Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = waitForAnyBooksAdded();
  deps["userId"] = waitForAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, userId);
  waitForLoansAdded(bookId, userId);
  bp.sync({ waitFor: bp.Event("Verified Loans: " + userId) });
  deleteLoan(bookId, userId);
});

// Monitor: Loans Verification
bthread("monitor:Loans", function () {
  while (true) {
    let e = waitForAnyLoansAdded();
    let bookId = (e.data.parameters && e.data.parameters.bookId) ? e.data.parameters.bookId : e.data.bookId;
    let userId = (e.data.parameters && e.data.parameters.userId) ? e.data.parameters.userId : e.data.userId;
    verifyLoansExists(bookId, userId);
    bp.sync({ request: bp.Event("Verified Loans: " + userId) });
  }
});

// Story: crud:Holds:linear
bthread("crud:Holds:linear", function () {
  let bookId; // Dependency
  let id = 260;
  let userId; // Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = waitForAnyBooksAdded();
  deps["userId"] = waitForAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, id, userId);
  waitForHoldsAdded(bookId, id, userId);
  tryToAddExistingHolds(bookId, id, userId);
  verifyHoldsExists(bookId, id, userId);
  deleteHold(bookId, id, userId);
  tryToDeleteANonExistingHolds(bookId, id, userId);
  verifyHoldsDoesNotExist(bookId, id, userId);
});

// Main Story: crud:Holds:monitor
bthread("crud:Holds:monitor", function () {
  let bookId; // Dependency
  let id = 270;
  let userId; // Dependency
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = waitForAnyBooksAdded();
  deps["userId"] = waitForAnyUsersAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, id, userId);
  waitForHoldsAdded(bookId, id, userId);
  bp.sync({ waitFor: bp.Event("Verified Holds: " + id) });
  deleteHold(bookId, id, userId);
});

// Monitor: Holds Verification
bthread("monitor:Holds", function () {
  while (true) {
    let e = waitForAnyHoldsAdded();
    let bookId = (e.data.parameters && e.data.parameters.bookId) ? e.data.parameters.bookId : e.data.bookId;
    let id = (e.data.parameters && e.data.parameters.id) ? e.data.parameters.id : e.data.id;
    let userId = (e.data.parameters && e.data.parameters.userId) ? e.data.parameters.userId : e.data.userId;
    verifyHoldsExists(bookId, id, userId);
    bp.sync({ request: bp.Event("Verified Holds: " + id) });
  }
});
