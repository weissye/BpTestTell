// Auto-generated stories for library
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);
    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// --- Monitors [RESTORED] ---
bthread("monitor:Books:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBooksAdded() });
    let idVal = e.data.id || e.data.id;
    verifyBooksExists(idVal);
  } });

bthread("monitor:Loans:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLoansAdded() });
    let idVal = e.data.userId || e.data.id;
    verifyLoansExists(idVal);
  } });

bthread("monitor:Users:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let idVal = e.data.id || e.data.id;
    verifyUsersExists(idVal);
  } });

bthread("monitor:Holds:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyHoldsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyHoldsExists(idVal);
  } });

bthread("crud:Books:linear:1", function () {
  // -> Creating Books
  let id_Books_100 = 100 + Math.floor(Math.random() * 99);
  let q_Books_100 = "q_Books_100_" + Math.floor(Math.random()*1000);
  let title_Books_100 = "title_Books_100_" + Math.floor(Math.random()*1000);
  createBook(id_Books_100, q_Books_100, title_Books_100, { expectedResponseCodes: [200, 201, 204] });

  verifyBooksExists(id_Books_100);
  verifyBooksExists(id_Books_100);
  // -> Deleting Parent Books (Relational Intent Race)
  deleteBook(id_Books_100);

});

bthread("crud:Loans:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Books"] = matchAnyBooksAdded();
  let pkMap = {"Users": "id", "Books": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let BooksId = captured["Books"];
  // -> Creating Loans
  let bookId_Loans_110 = BooksId;
  let userId_Loans_110 = UsersId;
  createLoan(bookId_Loans_110, userId_Loans_110, { expectedResponseCodes: [200, 201, 204] });

  verifyLoansExists(userId_Loans_110);
  verifyLoansExists(userId_Loans_110);
  // -> Deleting Leaf Loans (Standard)
  deleteLoan(userId_Loans_110, bookId_Loans_110);
  verifyLoansDoesNotExist(userId_Loans_110);

});

bthread("crud:Users:linear:1", function () {
  // -> Creating Users
  let id_Users_120 = 120 + Math.floor(Math.random() * 99);
  let name_Users_120 = "name_Users_120_" + Math.floor(Math.random()*1000);
  let q_Users_120 = "q_Users_120_" + Math.floor(Math.random()*1000);
  createUser(id_Users_120, name_Users_120, q_Users_120, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_120);
  verifyUsersExists(id_Users_120);
  // -> Deleting Parent Users (Relational Intent Race)
  deleteUser(id_Users_120);

});

bthread("crud:Holds:linear:1", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Books"] = matchAnyBooksAdded();
  let pkMap = {"Users": "id", "Books": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let BooksId = captured["Books"];
  // -> Creating Holds
  let bookId_Holds_130 = BooksId;
  let id_Holds_130 = BooksId;
  let userId_Holds_130 = UsersId;
  createHold(bookId_Holds_130, id_Holds_130, userId_Holds_130, { expectedResponseCodes: [200, 201, 204] });

  verifyHoldsExists(id_Holds_130);
  verifyHoldsExists(id_Holds_130);
  // -> Deleting Leaf Holds (Standard)
  deleteHold(id_Holds_130);
  verifyHoldsDoesNotExist(id_Holds_130);

});

bthread("crud:Books:linear:2", function () {
  // -> Creating Books
  let id_Books_140 = 140 + Math.floor(Math.random() * 99);
  let q_Books_140 = "q_Books_140_" + Math.floor(Math.random()*1000);
  let title_Books_140 = "title_Books_140_" + Math.floor(Math.random()*1000);
  createBook(id_Books_140, q_Books_140, title_Books_140, { expectedResponseCodes: [200, 201, 204] });

  verifyBooksExists(id_Books_140);
  verifyBooksExists(id_Books_140);
  // -> Deleting Parent Books (Relational Intent Race)
  deleteBook(id_Books_140);

});

bthread("crud:Loans:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Books"] = matchAnyBooksAdded();
  let pkMap = {"Users": "id", "Books": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let BooksId = captured["Books"];
  // -> Creating Loans
  let bookId_Loans_150 = BooksId;
  let userId_Loans_150 = UsersId;
  createLoan(bookId_Loans_150, userId_Loans_150, { expectedResponseCodes: [200, 201, 204] });

  verifyLoansExists(userId_Loans_150);
  verifyLoansExists(userId_Loans_150);
  // -> Deleting Leaf Loans (Standard)
  deleteLoan(userId_Loans_150, bookId_Loans_150);
  verifyLoansDoesNotExist(userId_Loans_150);

});

bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let id_Users_160 = 160 + Math.floor(Math.random() * 99);
  let name_Users_160 = "name_Users_160_" + Math.floor(Math.random()*1000);
  let q_Users_160 = "q_Users_160_" + Math.floor(Math.random()*1000);
  createUser(id_Users_160, name_Users_160, q_Users_160, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_160);
  verifyUsersExists(id_Users_160);
  // -> Deleting Parent Users (Relational Intent Race)
  deleteUser(id_Users_160);

});

bthread("crud:Holds:linear:2", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Books"] = matchAnyBooksAdded();
  let pkMap = {"Users": "id", "Books": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let BooksId = captured["Books"];
  // -> Creating Holds
  let bookId_Holds_170 = BooksId;
  let id_Holds_170 = BooksId;
  let userId_Holds_170 = UsersId;
  createHold(bookId_Holds_170, id_Holds_170, userId_Holds_170, { expectedResponseCodes: [200, 201, 204] });

  verifyHoldsExists(id_Holds_170);
  verifyHoldsExists(id_Holds_170);
  // -> Deleting Leaf Holds (Standard)
  deleteHold(id_Holds_170);
  verifyHoldsDoesNotExist(id_Holds_170);

});

bthread("crud:Books:linear:3", function () {
  // -> Creating Books
  let id_Books_180 = 180 + Math.floor(Math.random() * 99);
  let q_Books_180 = "q_Books_180_" + Math.floor(Math.random()*1000);
  let title_Books_180 = "title_Books_180_" + Math.floor(Math.random()*1000);
  createBook(id_Books_180, q_Books_180, title_Books_180, { expectedResponseCodes: [200, 201, 204] });

  verifyBooksExists(id_Books_180);
  verifyBooksExists(id_Books_180);
  // -> Deleting Parent Books (Relational Intent Race)
  deleteBook(id_Books_180);

});

bthread("crud:Loans:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Books"] = matchAnyBooksAdded();
  let pkMap = {"Users": "id", "Books": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let BooksId = captured["Books"];
  // -> Creating Loans
  let bookId_Loans_190 = BooksId;
  let userId_Loans_190 = UsersId;
  createLoan(bookId_Loans_190, userId_Loans_190, { expectedResponseCodes: [200, 201, 204] });

  verifyLoansExists(userId_Loans_190);
  verifyLoansExists(userId_Loans_190);
  // -> Deleting Leaf Loans (Standard)
  deleteLoan(userId_Loans_190, bookId_Loans_190);
  verifyLoansDoesNotExist(userId_Loans_190);

});

bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let id_Users_200 = 200 + Math.floor(Math.random() * 99);
  let name_Users_200 = "name_Users_200_" + Math.floor(Math.random()*1000);
  let q_Users_200 = "q_Users_200_" + Math.floor(Math.random()*1000);
  createUser(id_Users_200, name_Users_200, q_Users_200, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_200);
  verifyUsersExists(id_Users_200);
  // -> Deleting Parent Users (Relational Intent Race)
  deleteUser(id_Users_200);

});

bthread("crud:Holds:linear:3", function () {
  let deps = {};
  deps["Users"] = matchAnyUsersAdded();
  deps["Books"] = matchAnyBooksAdded();
  let pkMap = {"Users": "id", "Books": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let UsersId = captured["Users"];
  let BooksId = captured["Books"];
  // -> Creating Holds
  let bookId_Holds_210 = BooksId;
  let id_Holds_210 = BooksId;
  let userId_Holds_210 = UsersId;
  createHold(bookId_Holds_210, id_Holds_210, userId_Holds_210, { expectedResponseCodes: [200, 201, 204] });

  verifyHoldsExists(id_Holds_210);
  verifyHoldsExists(id_Holds_210);
  // -> Deleting Leaf Holds (Standard)
  deleteHold(id_Holds_210);
  verifyHoldsDoesNotExist(id_Holds_210);

});

// --- PHASE 1: GLOBAL HYPER-SEEDING for library ---
// --- Hyper-Story Constellation Copy 1 ---
// --- Hyper-Story Constellation Copy 2 ---
// --- Hyper-Story Constellation Copy 3 ---