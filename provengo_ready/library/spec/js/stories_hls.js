// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
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
  // waitForUserAdded(id, name);
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
  // waitForUserAdded(id, name);
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
  // waitForUserAdded(id, name);
  verifyUserExists(id, name);
  tryToAddExistingUser(id, name);
  verifyUserExists(id, name);
});

// Story: crud:Book:nondet:1:1
bthread("crud:Book:nondet:1:1", function () {
  let id = 210;
  let title = "title_210";
  createBook(id, title);
  // waitForBookAdded(id, title);
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
  // waitForBookAdded(id, title);
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
  // waitForBookAdded(id, title);
  verifyBookExists(id, title);
  tryToAddExistingBook(id, title);
  verifyBookExists(id, title);
});

// Story: crud:Loan:nondet:1:1
bthread("crud:Loan:nondet:1:1", function () {

  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  bookId = captured["bookId"];
  if (!bookId) bookId = captured["id"];
  userId = captured["userId"];
  if (!userId) userId = captured["id"];
  createLoan(bookId, userId);
  // waitForLoanAdded(bookId, userId);
  tryToAddExistingLoan(bookId, userId);
  verifyLoanExists(bookId, userId);
  deleteLoan(bookId, userId);
  tryToDeleteANonExistingLoan(bookId, userId);
  verifyLoanDoesNotExist(bookId, userId);
});

// Story: crud:Loan:nondet:1:2
bthread("crud:Loan:nondet:1:2", function () {

  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  bookId = captured["bookId"];
  if (!bookId) bookId = captured["id"];
  userId = captured["userId"];
  if (!userId) userId = captured["id"];
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

  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  bookId = captured["bookId"];
  if (!bookId) bookId = captured["id"];
  userId = captured["userId"];
  if (!userId) userId = captured["id"];
  createLoan(bookId, userId);
  // waitForLoanAdded(bookId, userId);
  verifyLoanExists(bookId, userId);
  tryToAddExistingLoan(bookId, userId);
  verifyLoanExists(bookId, userId);
});

// Story: crud:Hold:nondet:1:1
bthread("crud:Hold:nondet:1:1", function () {
  let id = 230;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  bookId = captured["bookId"];
  if (!bookId) bookId = captured["id"];
  userId = captured["userId"];
  if (!userId) userId = captured["id"];
  createHold(bookId, id, userId);
  // waitForHoldAdded(bookId, id, userId);
  tryToAddExistingHold(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
  deleteHold(bookId, id, userId);
  tryToDeleteANonExistingHold(bookId, id, userId);
  verifyHoldDoesNotExist(bookId, id, userId);
});

// Story: crud:Hold:nondet:1:2
bthread("crud:Hold:nondet:1:2", function () {
  let id = 231;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  bookId = captured["bookId"];
  if (!bookId) bookId = captured["id"];
  userId = captured["userId"];
  if (!userId) userId = captured["id"];
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
  let id = 236;
  // Dependency Barrier
  let deps = {};
  deps["bookId"] = matchAnyBookAdded();
  deps["userId"] = matchAnyUserAdded();
  let captured = resolveDependencies(deps);
  bookId = captured["bookId"];
  if (!bookId) bookId = captured["id"];
  userId = captured["userId"];
  if (!userId) userId = captured["id"];
  createHold(bookId, id, userId);
  // waitForHoldAdded(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
  tryToAddExistingHold(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
});
