// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    // bp.log.info("Guard waiting for: " + Object.keys(deps).join(", "));
    let e = bp.sync({waitFor: missingEventSets});
    // bp.log.info("Guard received event: " + e.name);
    for (let k in deps) {
      if (deps[k].contains(e)) {
        // 1. Try basic capture
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        // 2. Try using pkMap if available
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        // 3. Generic Fallback scan (for ID/VIN)
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
  let email = "email_200";
  let id = 200;
  let name = "name_200";
  let password = "password_200";
  let q = "q_200";
  createUser(email, id, name, password, q);
  // waitForUserAdded(email, id, name, password, q);
  tryToAddExistingUser(email, id, name, password, q);
  verifyUserExists(email, id, name, password, q);
  deleteUser(email, id, name, password, q);
  tryToDeleteANonExistingUser(email, id, name, password, q);
  verifyUserDoesNotExist(email, id, name, password, q);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let email = "email_201";
  let id = 201;
  let name = "name_201";
  let password = "password_201";
  let q = "q_201";
  createUser(email, id, name, password, q);
  // waitForUserAdded(email, id, name, password, q);
  tryToAddExistingUser(email, id, name, password, q);
  verifyUserExists(email, id, name, password, q);
  deleteUser(email, id, name, password, q);
  tryToDeleteANonExistingUser(email, id, name, password, q);
  verifyUserDoesNotExist(email, id, name, password, q);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let email = "email_206";
  let id = 206;
  let name = "name_206";
  let password = "password_206";
  let q = "q_206";
  createUser(email, id, name, password, q);
  // waitForUserAdded(email, id, name, password, q);
  verifyUserExists(email, id, name, password, q);
  tryToAddExistingUser(email, id, name, password, q);
  verifyUserExists(email, id, name, password, q);
});

// Story: crud:Book:nondet:1:1
bthread("crud:Book:nondet:1:1", function () {
  let author = "author_210";
  let id = 210;
  let isbn = "isbn_210";
  let q = "q_210";
  let title = "title_210";
  createBook(author, id, isbn, q, title);
  // waitForBookAdded(author, id, isbn, q, title);
  tryToAddExistingBook(author, id, isbn, q, title);
  verifyBookExists(author, id, isbn, q, title);
  deleteBook(author, id, isbn, q, title);
  tryToDeleteANonExistingBook(author, id, isbn, q, title);
  verifyBookDoesNotExist(author, id, isbn, q, title);
});

// Story: crud:Book:nondet:1:2
bthread("crud:Book:nondet:1:2", function () {
  let author = "author_211";
  let id = 211;
  let isbn = "isbn_211";
  let q = "q_211";
  let title = "title_211";
  createBook(author, id, isbn, q, title);
  // waitForBookAdded(author, id, isbn, q, title);
  tryToAddExistingBook(author, id, isbn, q, title);
  verifyBookExists(author, id, isbn, q, title);
  deleteBook(author, id, isbn, q, title);
  tryToDeleteANonExistingBook(author, id, isbn, q, title);
  verifyBookDoesNotExist(author, id, isbn, q, title);
});

// Story: crud:Book:nondet:negative:dup-add
bthread("crud:Book:nondet:negative:dup-add", function () {
  let author = "author_216";
  let id = 216;
  let isbn = "isbn_216";
  let q = "q_216";
  let title = "title_216";
  createBook(author, id, isbn, q, title);
  // waitForBookAdded(author, id, isbn, q, title);
  verifyBookExists(author, id, isbn, q, title);
  tryToAddExistingBook(author, id, isbn, q, title);
  verifyBookExists(author, id, isbn, q, title);
});

// Story: crud:Loan:nondet:1:1
bthread("crud:Loan:nondet:1:1", function () {
  let dueDate = "dueDate_220";
  let loanDate = "loanDate_220";
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, dueDate, loanDate, userId);
  // waitForLoanAdded(bookId, dueDate, loanDate, userId);
  tryToAddExistingLoan(bookId, dueDate, loanDate, userId);
  verifyLoanExists(bookId, dueDate, loanDate, userId);
  deleteLoan(bookId, dueDate, loanDate, userId);
  tryToDeleteANonExistingLoan(bookId, dueDate, loanDate, userId);
  verifyLoanDoesNotExist(bookId, dueDate, loanDate, userId);
});

// Story: crud:Loan:nondet:1:2
bthread("crud:Loan:nondet:1:2", function () {
  let dueDate = "dueDate_221";
  let loanDate = "loanDate_221";
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, dueDate, loanDate, userId);
  // waitForLoanAdded(bookId, dueDate, loanDate, userId);
  tryToAddExistingLoan(bookId, dueDate, loanDate, userId);
  verifyLoanExists(bookId, dueDate, loanDate, userId);
  deleteLoan(bookId, dueDate, loanDate, userId);
  tryToDeleteANonExistingLoan(bookId, dueDate, loanDate, userId);
  verifyLoanDoesNotExist(bookId, dueDate, loanDate, userId);
});

// Story: crud:Loan:nondet:negative:dup-add
bthread("crud:Loan:nondet:negative:dup-add", function () {
  let dueDate = "dueDate_226";
  let loanDate = "loanDate_226";
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createLoan(bookId, dueDate, loanDate, userId);
  // waitForLoanAdded(bookId, dueDate, loanDate, userId);
  verifyLoanExists(bookId, dueDate, loanDate, userId);
  tryToAddExistingLoan(bookId, dueDate, loanDate, userId);
  verifyLoanExists(bookId, dueDate, loanDate, userId);
});

// Story: crud:Hold:nondet:1:1
bthread("crud:Hold:nondet:1:1", function () {
  let holdDate = "holdDate_230";
  let id = 230;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, holdDate, id, userId);
  // waitForHoldAdded(bookId, holdDate, id, userId);
  tryToAddExistingHold(bookId, holdDate, id, userId);
  verifyHoldExists(bookId, holdDate, id, userId);
  deleteHold(bookId, holdDate, id, userId);
  tryToDeleteANonExistingHold(bookId, holdDate, id, userId);
  verifyHoldDoesNotExist(bookId, holdDate, id, userId);
});

// Story: crud:Hold:nondet:1:2
bthread("crud:Hold:nondet:1:2", function () {
  let holdDate = "holdDate_231";
  let id = 231;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, holdDate, id, userId);
  // waitForHoldAdded(bookId, holdDate, id, userId);
  tryToAddExistingHold(bookId, holdDate, id, userId);
  verifyHoldExists(bookId, holdDate, id, userId);
  deleteHold(bookId, holdDate, id, userId);
  tryToDeleteANonExistingHold(bookId, holdDate, id, userId);
  verifyHoldDoesNotExist(bookId, holdDate, id, userId);
});

// Story: crud:Hold:nondet:negative:dup-add
bthread("crud:Hold:nondet:negative:dup-add", function () {
  let holdDate = "holdDate_236";
  let id = 236;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let pkMap = {"bookId": "id", "userId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bookId = captured["bookId"];
  userId = captured["userId"];
  createHold(bookId, holdDate, id, userId);
  // waitForHoldAdded(bookId, holdDate, id, userId);
  verifyHoldExists(bookId, holdDate, id, userId);
  tryToAddExistingHold(bookId, holdDate, id, userId);
  verifyHoldExists(bookId, holdDate, id, userId);
});
