// Auto-generated stories for library
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
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

// Story: Full Coverage for Books
bthread("cover:Books", function () {
  // -> Creating Books
  let id_Books_100 = Math.floor(Math.random() * 1000000);
  let q_Books_100 = "q_Books_100_" + Math.floor(Math.random()*1000);
  let title_Books_100 = "title_Books_100_" + Math.floor(Math.random()*1000);
  createBook(id_Books_100, q_Books_100, title_Books_100);
  verifyBooksExists(id_Books_100);

});

// Story: Full Coverage for Loans
bthread("cover:Loans", function () {
  // -> Creating Users
  let id_Users_150 = Math.floor(Math.random() * 1000000);
  let name_Users_150 = "name_Users_150_" + Math.floor(Math.random()*1000);
  let q_Users_150 = "q_Users_150_" + Math.floor(Math.random()*1000);
  createUser(id_Users_150, name_Users_150, q_Users_150);
  verifyUsersExists(id_Users_150);

  // -> Creating Books
  let id_Books_150 = Math.floor(Math.random() * 1000000);
  let q_Books_150 = "q_Books_150_" + Math.floor(Math.random()*1000);
  let title_Books_150 = "title_Books_150_" + Math.floor(Math.random()*1000);
  createBook(id_Books_150, q_Books_150, title_Books_150);
  verifyBooksExists(id_Books_150);

  // -> Creating Loans
  let bookId_Loans_150 = id_Books_150;
  let userId_Loans_150 = id_Users_150;
  createLoan(bookId_Loans_150, userId_Loans_150);
  verifyLoansExists(userId_Loans_150);

});

// Story: Full Coverage for Users
bthread("cover:Users", function () {
  // -> Creating Users
  let id_Users_200 = Math.floor(Math.random() * 1000000);
  let name_Users_200 = "name_Users_200_" + Math.floor(Math.random()*1000);
  let q_Users_200 = "q_Users_200_" + Math.floor(Math.random()*1000);
  createUser(id_Users_200, name_Users_200, q_Users_200);
  verifyUsersExists(id_Users_200);

});

// Story: Full Coverage for Holds
bthread("cover:Holds", function () {
  // -> Creating Users
  let id_Users_250 = Math.floor(Math.random() * 1000000);
  let name_Users_250 = "name_Users_250_" + Math.floor(Math.random()*1000);
  let q_Users_250 = "q_Users_250_" + Math.floor(Math.random()*1000);
  createUser(id_Users_250, name_Users_250, q_Users_250);
  verifyUsersExists(id_Users_250);

  // -> Creating Books
  let id_Books_250 = Math.floor(Math.random() * 1000000);
  let q_Books_250 = "q_Books_250_" + Math.floor(Math.random()*1000);
  let title_Books_250 = "title_Books_250_" + Math.floor(Math.random()*1000);
  createBook(id_Books_250, q_Books_250, title_Books_250);
  verifyBooksExists(id_Books_250);

  // -> Creating Holds
  let bookId_Holds_250 = id_Books_250;
  let id_Holds_250 = id_Books_250;
  let userId_Holds_250 = id_Users_250;
  createHold(bookId_Holds_250, id_Holds_250, userId_Holds_250);
  verifyHoldsExists(id_Holds_250);

});

// Story: Deep Chain Users_Loans
bthread("chain:Users_Loans", function () {
  // -> Creating Users
  let id_Users_300 = Math.floor(Math.random() * 1000000);
  let name_Users_300 = "name_Users_300_" + Math.floor(Math.random()*1000);
  let q_Users_300 = "q_Users_300_" + Math.floor(Math.random()*1000);
  createUser(id_Users_300, name_Users_300, q_Users_300);
  verifyUsersExists(id_Users_300);

  // -> Creating Books
  let id_Books_300 = Math.floor(Math.random() * 1000000);
  let q_Books_300 = "q_Books_300_" + Math.floor(Math.random()*1000);
  let title_Books_300 = "title_Books_300_" + Math.floor(Math.random()*1000);
  createBook(id_Books_300, q_Books_300, title_Books_300);
  verifyBooksExists(id_Books_300);

  // -> Creating Loans
  let bookId_Loans_300 = id_Books_300;
  let userId_Loans_300 = id_Users_300;
  createLoan(bookId_Loans_300, userId_Loans_300);
  verifyLoansExists(userId_Loans_300);

  // --- Teardown ---
  deleteLoan(userId_Loans_300, bookId_Loans_300);
  verifyLoansDeleted(userId_Loans_300, bookId_Loans_300);
  deleteUser(id_Users_300);
  verifyUsersDeleted(id_Users_300);
});

// Story: Deep Chain Users_Holds
bthread("chain:Users_Holds", function () {
  // -> Creating Users
  let id_Users_400 = Math.floor(Math.random() * 1000000);
  let name_Users_400 = "name_Users_400_" + Math.floor(Math.random()*1000);
  let q_Users_400 = "q_Users_400_" + Math.floor(Math.random()*1000);
  createUser(id_Users_400, name_Users_400, q_Users_400);
  verifyUsersExists(id_Users_400);

  // -> Creating Books
  let id_Books_400 = Math.floor(Math.random() * 1000000);
  let q_Books_400 = "q_Books_400_" + Math.floor(Math.random()*1000);
  let title_Books_400 = "title_Books_400_" + Math.floor(Math.random()*1000);
  createBook(id_Books_400, q_Books_400, title_Books_400);
  verifyBooksExists(id_Books_400);

  // -> Creating Holds
  let bookId_Holds_400 = id_Books_400;
  let id_Holds_400 = id_Books_400;
  let userId_Holds_400 = id_Users_400;
  createHold(bookId_Holds_400, id_Holds_400, userId_Holds_400);
  verifyHoldsExists(id_Holds_400);

  // --- Teardown ---
  deleteHold(id_Holds_400);
  verifyHoldsDeleted(id_Holds_400);
  deleteUser(id_Users_400);
  verifyUsersDeleted(id_Users_400);
});

// Story: Deep Chain Books_Loans
bthread("chain:Books_Loans", function () {
  // -> Creating Books
  let id_Books_500 = Math.floor(Math.random() * 1000000);
  let q_Books_500 = "q_Books_500_" + Math.floor(Math.random()*1000);
  let title_Books_500 = "title_Books_500_" + Math.floor(Math.random()*1000);
  createBook(id_Books_500, q_Books_500, title_Books_500);
  verifyBooksExists(id_Books_500);

  // -> Creating Users
  let id_Users_500 = Math.floor(Math.random() * 1000000);
  let name_Users_500 = "name_Users_500_" + Math.floor(Math.random()*1000);
  let q_Users_500 = "q_Users_500_" + Math.floor(Math.random()*1000);
  createUser(id_Users_500, name_Users_500, q_Users_500);
  verifyUsersExists(id_Users_500);

  // -> Creating Loans
  let bookId_Loans_500 = id_Books_500;
  let userId_Loans_500 = id_Users_500;
  createLoan(bookId_Loans_500, userId_Loans_500);
  verifyLoansExists(userId_Loans_500);

  // --- Teardown ---
  deleteLoan(userId_Loans_500, bookId_Loans_500);
  verifyLoansDeleted(userId_Loans_500, bookId_Loans_500);
  deleteBook(id_Books_500);
  verifyBooksDeleted(id_Books_500);
});

// Story: Deep Chain Books_Holds
bthread("chain:Books_Holds", function () {
  // -> Creating Books
  let id_Books_600 = Math.floor(Math.random() * 1000000);
  let q_Books_600 = "q_Books_600_" + Math.floor(Math.random()*1000);
  let title_Books_600 = "title_Books_600_" + Math.floor(Math.random()*1000);
  createBook(id_Books_600, q_Books_600, title_Books_600);
  verifyBooksExists(id_Books_600);

  // -> Creating Users
  let id_Users_600 = Math.floor(Math.random() * 1000000);
  let name_Users_600 = "name_Users_600_" + Math.floor(Math.random()*1000);
  let q_Users_600 = "q_Users_600_" + Math.floor(Math.random()*1000);
  createUser(id_Users_600, name_Users_600, q_Users_600);
  verifyUsersExists(id_Users_600);

  // -> Creating Holds
  let bookId_Holds_600 = id_Books_600;
  let id_Holds_600 = id_Books_600;
  let userId_Holds_600 = id_Users_600;
  createHold(bookId_Holds_600, id_Holds_600, userId_Holds_600);
  verifyHoldsExists(id_Holds_600);

  // --- Teardown ---
  deleteHold(id_Holds_600);
  verifyHoldsDeleted(id_Holds_600);
  deleteBook(id_Books_600);
  verifyBooksDeleted(id_Books_600);
});
