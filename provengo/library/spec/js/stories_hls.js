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
  bp.log.info("DEBUG STORY User: calling create with " + JSON.stringify({ id, name }));
  createUser(id, name);
  waitForUserAdded(id, name);
  tryToAddExistingUser(id, name);
  verifyUserExists(id, name);
  deleteUser(id, name);
  tryToDeleteANonExistingUser(id, name);
  verifyUserDoesNotExist(id, name);
});

// Story: crud:Book:nondet:1:1
bthread("crud:Book:nondet:1:1", function () {
  let id = 210;
  let title = "title_210";
  bp.log.info("DEBUG STORY Book: calling create with " + JSON.stringify({ id, title }));
  createBook(id, title);
  waitForBookAdded(id, title);
  tryToAddExistingBook(id, title);
  verifyBookExists(id, title);
  deleteBook(id, title);
  tryToDeleteANonExistingBook(id, title);
  verifyBookDoesNotExist(id, title);
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
  bp.log.info("DEBUG STORY Loan: calling create with " + JSON.stringify({ bookId, userId }));
  createLoan(bookId, userId);
  waitForLoanAdded(bookId, userId);
  tryToAddExistingLoan(bookId, userId);
  verifyLoanExists(bookId, userId);
  deleteLoan(bookId, userId);
  tryToDeleteANonExistingLoan(bookId, userId);
  verifyLoanDoesNotExist(bookId, userId);
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
  bp.log.info("DEBUG STORY Hold: calling create with " + JSON.stringify({ bookId, id, userId }));
  createHold(bookId, id, userId);
  waitForHoldAdded(bookId, id, userId);
  tryToAddExistingHold(bookId, id, userId);
  verifyHoldExists(bookId, id, userId);
  deleteHold(bookId, id, userId);
  tryToDeleteANonExistingHold(bookId, id, userId);
  verifyHoldDoesNotExist(bookId, id, userId);
});
