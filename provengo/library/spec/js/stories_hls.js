// Auto-generated HLS stories
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

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let id = 200;
  let name = "name_200";
  let q = "q_200";
  createUser(id, name, q);
  waitForUserAdded(id, name, q);
  tryToAddExistingUser(id, name, q);
  verifyUserExists(id, name, q);
  deleteUser(id, name, q);
  tryToDeleteANonExistingUser(id, name, q);
  verifyUserDoesNotExist(id, name, q);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let id = 201;
  let name = "name_201";
  let q = "q_201";
  createUser(id, name, q);
  // waitForUserAdded(id, name, q);
  tryToAddExistingUser(id, name, q);
  verifyUserExists(id, name, q);
  deleteUser(id, name, q);
  tryToDeleteANonExistingUser(id, name, q);
  verifyUserDoesNotExist(id, name, q);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let id = 206;
  let name = "name_206";
  let q = "q_206";
  createUser(id, name, q);
  // waitForUserAdded(id, name, q);
  verifyUserExists(id, name, q);
  tryToAddExistingUser(id, name, q);
  verifyUserExists(id, name, q);
});

// Story: crud:Book:nondet:1:1
bthread("crud:Book:nondet:1:1", function () {
  let id = 210;
  let q = "q_210";
  let title = "title_210";
  createBook(id, q, title);
  waitForBookAdded(id, q, title);
  tryToAddExistingBook(id, q, title);
  verifyBookExists(id, q, title);
  deleteBook(id, q, title);
  tryToDeleteANonExistingBook(id, q, title);
  verifyBookDoesNotExist(id, q, title);
});

// Story: crud:Book:nondet:1:2
bthread("crud:Book:nondet:1:2", function () {
  let id = 211;
  let q = "q_211";
  let title = "title_211";
  createBook(id, q, title);
  // waitForBookAdded(id, q, title);
  tryToAddExistingBook(id, q, title);
  verifyBookExists(id, q, title);
  deleteBook(id, q, title);
  tryToDeleteANonExistingBook(id, q, title);
  verifyBookDoesNotExist(id, q, title);
});

// Story: crud:Book:nondet:negative:dup-add
bthread("crud:Book:nondet:negative:dup-add", function () {
  let id = 216;
  let q = "q_216";
  let title = "title_216";
  createBook(id, q, title);
  // waitForBookAdded(id, q, title);
  verifyBookExists(id, q, title);
  tryToAddExistingBook(id, q, title);
  verifyBookExists(id, q, title);
});

// Story: crud:Loan:nondet:1:1
bthread("crud:Loan:nondet:1:1", function () {
  let bookId;
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, userId);
  waitForLoanAdded(bookId, userId);
  tryToAddExistingLoan(bookId, userId);
  verifyLoanExists(bookId, userId);
  deleteLoan(bookId, userId);
  tryToDeleteANonExistingLoan(bookId, userId);
  verifyLoanDoesNotExist(bookId, userId);
});

// Story: crud:Loan:nondet:1:2
bthread("crud:Loan:nondet:1:2", function () {
  let bookId;
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, userId);
  // waitForLoanAdded(bookId, userId);
  tryToAddExistingLoan(bookId, userId);
  verifyLoanExists(bookId, userId);
  deleteLoan(bookId, userId);
  tryToDeleteANonExistingLoan(bookId, userId);
  verifyLoanDoesNotExist(bookId, userId);
});

// Story: crud:Loan:nondet:negative:dup-add
bthread("crud:Loan:nondet:negative:dup-add", function () {
  let bookId;
  let userId;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, userId);
  // waitForLoanAdded(bookId, userId);
  verifyLoanExists(bookId, userId);
  tryToAddExistingLoan(bookId, userId);
  verifyLoanExists(bookId, userId);
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
  // waitForHoldAdded(bookId, id, userId);
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
  // waitForHoldAdded(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
  tryToAddExistingHold(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
});
