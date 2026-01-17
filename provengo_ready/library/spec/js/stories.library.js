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

// --- Monitors ---
// Monitor: Books Verification (Existence)
bthread("monitor:Books:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBooksAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let q = (e.data.parameters && e.data.parameters["q"]) ? e.data.parameters["q"] : e.data["q"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedBooks(id, q, title), function() { verifyBooksExists(id, q, title); });
  }
});

// Monitor: Books Verification (Absence)
bthread("monitor:Books:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedBooks() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let q = (e.data.parameters && e.data.parameters["q"]) ? e.data.parameters["q"] : e.data["q"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Creation while Verifying Absence
    block(matchAnyBooksAdded(), function() { verifyBooksDoesNotExist(id, q, title); });
  }
});

// Monitor: Loans Verification (Existence)
bthread("monitor:Loans:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLoansAdded() });
    let bookId = (e.data.parameters && e.data.parameters["bookId"]) ? e.data.parameters["bookId"] : e.data["bookId"];
    let userId = (e.data.parameters && e.data.parameters["userId"]) ? e.data.parameters["userId"] : e.data["userId"];
    // Block Deletion while Verifying Existence
    block(matchDeletedLoans(bookId, userId), function() { verifyLoansExists(bookId, userId); });
  }
});

// Monitor: Loans Verification (Absence)
bthread("monitor:Loans:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedLoans() });
    let bookId = (e.data.parameters && e.data.parameters["bookId"]) ? e.data.parameters["bookId"] : e.data["bookId"];
    let userId = (e.data.parameters && e.data.parameters["userId"]) ? e.data.parameters["userId"] : e.data["userId"];
    // Block Creation while Verifying Absence
    block(matchAnyLoansAdded(), function() { verifyLoansDoesNotExist(bookId, userId); });
  }
});

// Monitor: Users Verification (Existence)
bthread("monitor:Users:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let q = (e.data.parameters && e.data.parameters["q"]) ? e.data.parameters["q"] : e.data["q"];
    // Block Deletion while Verifying Existence
    block(matchDeletedUsers(id, name, q), function() { verifyUsersExists(id, name, q); });
  }
});

// Monitor: Users Verification (Absence)
bthread("monitor:Users:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedUsers() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let q = (e.data.parameters && e.data.parameters["q"]) ? e.data.parameters["q"] : e.data["q"];
    // Block Creation while Verifying Absence
    block(matchAnyUsersAdded(), function() { verifyUsersDoesNotExist(id, name, q); });
  }
});

// Monitor: Holds Verification (Existence)
bthread("monitor:Holds:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyHoldsAdded() });
    let bookId = (e.data.parameters && e.data.parameters["bookId"]) ? e.data.parameters["bookId"] : e.data["bookId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let userId = (e.data.parameters && e.data.parameters["userId"]) ? e.data.parameters["userId"] : e.data["userId"];
    // Block Deletion while Verifying Existence
    block(matchDeletedHolds(bookId, id, userId), function() { verifyHoldsExists(bookId, id, userId); });
  }
});

// Monitor: Holds Verification (Absence)
bthread("monitor:Holds:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedHolds() });
    let bookId = (e.data.parameters && e.data.parameters["bookId"]) ? e.data.parameters["bookId"] : e.data["bookId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let userId = (e.data.parameters && e.data.parameters["userId"]) ? e.data.parameters["userId"] : e.data["userId"];
    // Block Creation while Verifying Absence
    block(matchAnyHoldsAdded(), function() { verifyHoldsDoesNotExist(bookId, id, userId); });
  }
});

// Story: crud:Books:linear:1
bthread("crud:Books:linear:1", function () {
  // -> Creating Books
  let id_Books_100 = Math.floor(Math.random() * 1000);
  let q_Books_100 = "q_Books_100_" + Math.floor(Math.random()*1000);
  let title_Books_100 = "title_Books_100_" + Math.floor(Math.random()*1000);
  createBook(id_Books_100, q_Books_100, title_Books_100, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Loans:linear:1
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

  // -> Deleting Loans
  deleteLoan(userId_Loans_110, bookId_Loans_110, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  // -> Creating Users
  let id_Users_120 = Math.floor(Math.random() * 1000);
  let name_Users_120 = "name_Users_120_" + Math.floor(Math.random()*1000);
  let q_Users_120 = "q_Users_120_" + Math.floor(Math.random()*1000);
  createUser(id_Users_120, name_Users_120, q_Users_120, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Holds:linear:1
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

  // -> Deleting Holds
  deleteHold(id_Holds_130, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Books:linear:2
bthread("crud:Books:linear:2", function () {
  // -> Creating Books
  let id_Books_140 = Math.floor(Math.random() * 1000);
  let q_Books_140 = "q_Books_140_" + Math.floor(Math.random()*1000);
  let title_Books_140 = "title_Books_140_" + Math.floor(Math.random()*1000);
  createBook(id_Books_140, q_Books_140, title_Books_140, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Loans:linear:2
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

  // -> Deleting Loans
  deleteLoan(userId_Loans_150, bookId_Loans_150, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let id_Users_160 = Math.floor(Math.random() * 1000);
  let name_Users_160 = "name_Users_160_" + Math.floor(Math.random()*1000);
  let q_Users_160 = "q_Users_160_" + Math.floor(Math.random()*1000);
  createUser(id_Users_160, name_Users_160, q_Users_160, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Holds:linear:2
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

  // -> Deleting Holds
  deleteHold(id_Holds_170, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Books:linear:3
bthread("crud:Books:linear:3", function () {
  // -> Creating Books
  let id_Books_180 = Math.floor(Math.random() * 1000);
  let q_Books_180 = "q_Books_180_" + Math.floor(Math.random()*1000);
  let title_Books_180 = "title_Books_180_" + Math.floor(Math.random()*1000);
  createBook(id_Books_180, q_Books_180, title_Books_180, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Loans:linear:3
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

  // -> Deleting Loans
  deleteLoan(userId_Loans_190, bookId_Loans_190, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let id_Users_200 = Math.floor(Math.random() * 1000);
  let name_Users_200 = "name_Users_200_" + Math.floor(Math.random()*1000);
  let q_Users_200 = "q_Users_200_" + Math.floor(Math.random()*1000);
  createUser(id_Users_200, name_Users_200, q_Users_200, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Holds:linear:3
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

  // -> Deleting Holds
  deleteHold(id_Holds_210, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Books_Loans (Self-Contained)
bthread("chain:Books_Loans", function () {
  // -> Creating Books
  let id_Books_220 = Math.floor(Math.random() * 1000);
  let q_Books_220 = "q_Books_220_" + Math.floor(Math.random()*1000);
  let title_Books_220 = "title_Books_220_" + Math.floor(Math.random()*1000);
  createBook(id_Books_220, q_Books_220, title_Books_220, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Users
  let id_Users_220 = Math.floor(Math.random() * 1000);
  let name_Users_220 = "name_Users_220_" + Math.floor(Math.random()*1000);
  let q_Users_220 = "q_Users_220_" + Math.floor(Math.random()*1000);
  createUser(id_Users_220, name_Users_220, q_Users_220, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Loans
  let bookId_Loans_220 = id_Books_220;
  let userId_Loans_220 = id_Users_220;
  createLoan(bookId_Loans_220, userId_Loans_220, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Loans
  deleteLoan(userId_Loans_220, bookId_Loans_220, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Books
  deleteBook(id_Books_220, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Books_Holds (Self-Contained)
bthread("chain:Books_Holds", function () {
  // -> Creating Books
  let id_Books_320 = Math.floor(Math.random() * 1000);
  let q_Books_320 = "q_Books_320_" + Math.floor(Math.random()*1000);
  let title_Books_320 = "title_Books_320_" + Math.floor(Math.random()*1000);
  createBook(id_Books_320, q_Books_320, title_Books_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Users
  let id_Users_320 = Math.floor(Math.random() * 1000);
  let name_Users_320 = "name_Users_320_" + Math.floor(Math.random()*1000);
  let q_Users_320 = "q_Users_320_" + Math.floor(Math.random()*1000);
  createUser(id_Users_320, name_Users_320, q_Users_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Holds
  let bookId_Holds_320 = id_Books_320;
  let id_Holds_320 = id_Books_320;
  let userId_Holds_320 = id_Users_320;
  createHold(bookId_Holds_320, id_Holds_320, userId_Holds_320, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Holds
  deleteHold(id_Holds_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Books
  deleteBook(id_Books_320, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Users_Loans (Self-Contained)
bthread("chain:Users_Loans", function () {
  // -> Creating Users
  let id_Users_420 = Math.floor(Math.random() * 1000);
  let name_Users_420 = "name_Users_420_" + Math.floor(Math.random()*1000);
  let q_Users_420 = "q_Users_420_" + Math.floor(Math.random()*1000);
  createUser(id_Users_420, name_Users_420, q_Users_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Books
  let id_Books_420 = Math.floor(Math.random() * 1000);
  let q_Books_420 = "q_Books_420_" + Math.floor(Math.random()*1000);
  let title_Books_420 = "title_Books_420_" + Math.floor(Math.random()*1000);
  createBook(id_Books_420, q_Books_420, title_Books_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Loans
  let bookId_Loans_420 = id_Books_420;
  let userId_Loans_420 = id_Users_420;
  createLoan(bookId_Loans_420, userId_Loans_420, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Loans
  deleteLoan(userId_Loans_420, bookId_Loans_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  deleteUser(id_Users_420, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Users_Holds (Self-Contained)
bthread("chain:Users_Holds", function () {
  // -> Creating Users
  let id_Users_520 = Math.floor(Math.random() * 1000);
  let name_Users_520 = "name_Users_520_" + Math.floor(Math.random()*1000);
  let q_Users_520 = "q_Users_520_" + Math.floor(Math.random()*1000);
  createUser(id_Users_520, name_Users_520, q_Users_520, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Books
  let id_Books_520 = Math.floor(Math.random() * 1000);
  let q_Books_520 = "q_Books_520_" + Math.floor(Math.random()*1000);
  let title_Books_520 = "title_Books_520_" + Math.floor(Math.random()*1000);
  createBook(id_Books_520, q_Books_520, title_Books_520, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Holds
  let bookId_Holds_520 = id_Books_520;
  let id_Holds_520 = id_Books_520;
  let userId_Holds_520 = id_Users_520;
  createHold(bookId_Holds_520, id_Holds_520, userId_Holds_520, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Holds
  deleteHold(id_Holds_520, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  deleteUser(id_Users_520, { expectedResponseCodes: [200, 201, 204] });

});

// --- Hyper-Story Version 1: Global Coordination for library ---
bthread("hyper:library:orchestration:1", function () {
  bthread("Persona_Library Staff_1", function() {
    let event_Books = waitFor(matchAnyBooksAdded());
    let sharedId = event_Books.data.id || event_Books.data.sku;
    createBook(sharedId);
    deleteBook(sharedId);
    let event_Users = waitFor(matchAnyUsersAdded());
    let sharedId = event_Users.data.id || event_Users.data.sku;
    createUser(sharedId);
    deleteUser(sharedId);
  }});
  bthread("Persona_Members_1", function() {
    let event_Books = waitFor(matchAnyBooksAdded());
    let sharedId = event_Books.data.id || event_Books.data.sku;
    listBooks(sharedId);
    let event_Users = waitFor(matchAnyUsersAdded());
    let sharedId = event_Users.data.id || event_Users.data.sku;
    listUsers(sharedId);
  }});

  // Seeding Phase
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
      let title_seed_1 = "title_seed_1_" + Math.floor(Math.random()*1000);
    createBook(id_seed_1, q_seed_1, title_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
      let title_seed_1 = "title_seed_1_" + Math.floor(Math.random()*1000);
    createBook(id_seed_1, q_seed_1, title_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
      let title_seed_1 = "title_seed_1_" + Math.floor(Math.random()*1000);
    createBook(id_seed_1, q_seed_1, title_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
      let title_seed_1 = "title_seed_1_" + Math.floor(Math.random()*1000);
    createBook(id_seed_1, q_seed_1, title_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
      let title_seed_1 = "title_seed_1_" + Math.floor(Math.random()*1000);
    createBook(id_seed_1, q_seed_1, title_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let name_seed_1 = "name_seed_1_" + Math.floor(Math.random()*1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
    createUser(id_seed_1, name_seed_1, q_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let name_seed_1 = "name_seed_1_" + Math.floor(Math.random()*1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
    createUser(id_seed_1, name_seed_1, q_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let name_seed_1 = "name_seed_1_" + Math.floor(Math.random()*1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
    createUser(id_seed_1, name_seed_1, q_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let name_seed_1 = "name_seed_1_" + Math.floor(Math.random()*1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
    createUser(id_seed_1, name_seed_1, q_seed_1, { expectedResponseCodes: [200, 201] });
      let id_seed_1 = Math.floor(Math.random() * 1000);
      let name_seed_1 = "name_seed_1_" + Math.floor(Math.random()*1000);
      let q_seed_1 = "q_seed_1_" + Math.floor(Math.random()*1000);
    createUser(id_seed_1, name_seed_1, q_seed_1, { expectedResponseCodes: [200, 201] });
}});
// --- Hyper-Story Version 2: Global Coordination for library ---
bthread("hyper:library:orchestration:2", function () {
  bthread("Persona_Library Staff_2", function() {
    let event_Books = waitFor(matchAnyBooksAdded());
    let sharedId = event_Books.data.id || event_Books.data.sku;
    createBook(sharedId);
    deleteBook(sharedId);
    let event_Users = waitFor(matchAnyUsersAdded());
    let sharedId = event_Users.data.id || event_Users.data.sku;
    createUser(sharedId);
    deleteUser(sharedId);
  }});
  bthread("Persona_Members_2", function() {
    let event_Books = waitFor(matchAnyBooksAdded());
    let sharedId = event_Books.data.id || event_Books.data.sku;
    listBooks(sharedId);
    let event_Users = waitFor(matchAnyUsersAdded());
    let sharedId = event_Users.data.id || event_Users.data.sku;
    listUsers(sharedId);
  }});

  // Seeding Phase
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
      let title_seed_2 = "title_seed_2_" + Math.floor(Math.random()*1000);
    createBook(id_seed_2, q_seed_2, title_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
      let title_seed_2 = "title_seed_2_" + Math.floor(Math.random()*1000);
    createBook(id_seed_2, q_seed_2, title_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
      let title_seed_2 = "title_seed_2_" + Math.floor(Math.random()*1000);
    createBook(id_seed_2, q_seed_2, title_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
      let title_seed_2 = "title_seed_2_" + Math.floor(Math.random()*1000);
    createBook(id_seed_2, q_seed_2, title_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
      let title_seed_2 = "title_seed_2_" + Math.floor(Math.random()*1000);
    createBook(id_seed_2, q_seed_2, title_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let name_seed_2 = "name_seed_2_" + Math.floor(Math.random()*1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
    createUser(id_seed_2, name_seed_2, q_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let name_seed_2 = "name_seed_2_" + Math.floor(Math.random()*1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
    createUser(id_seed_2, name_seed_2, q_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let name_seed_2 = "name_seed_2_" + Math.floor(Math.random()*1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
    createUser(id_seed_2, name_seed_2, q_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let name_seed_2 = "name_seed_2_" + Math.floor(Math.random()*1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
    createUser(id_seed_2, name_seed_2, q_seed_2, { expectedResponseCodes: [200, 201] });
      let id_seed_2 = Math.floor(Math.random() * 1000);
      let name_seed_2 = "name_seed_2_" + Math.floor(Math.random()*1000);
      let q_seed_2 = "q_seed_2_" + Math.floor(Math.random()*1000);
    createUser(id_seed_2, name_seed_2, q_seed_2, { expectedResponseCodes: [200, 201] });
}});
// --- Hyper-Story Version 3: Global Coordination for library ---
bthread("hyper:library:orchestration:3", function () {
  bthread("Persona_Library Staff_3", function() {
    let event_Books = waitFor(matchAnyBooksAdded());
    let sharedId = event_Books.data.id || event_Books.data.sku;
    createBook(sharedId);
    deleteBook(sharedId);
    let event_Users = waitFor(matchAnyUsersAdded());
    let sharedId = event_Users.data.id || event_Users.data.sku;
    createUser(sharedId);
    deleteUser(sharedId);
  }});
  bthread("Persona_Members_3", function() {
    let event_Books = waitFor(matchAnyBooksAdded());
    let sharedId = event_Books.data.id || event_Books.data.sku;
    listBooks(sharedId);
    let event_Users = waitFor(matchAnyUsersAdded());
    let sharedId = event_Users.data.id || event_Users.data.sku;
    listUsers(sharedId);
  }});

  // Seeding Phase
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
      let title_seed_3 = "title_seed_3_" + Math.floor(Math.random()*1000);
    createBook(id_seed_3, q_seed_3, title_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
      let title_seed_3 = "title_seed_3_" + Math.floor(Math.random()*1000);
    createBook(id_seed_3, q_seed_3, title_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
      let title_seed_3 = "title_seed_3_" + Math.floor(Math.random()*1000);
    createBook(id_seed_3, q_seed_3, title_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
      let title_seed_3 = "title_seed_3_" + Math.floor(Math.random()*1000);
    createBook(id_seed_3, q_seed_3, title_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
      let title_seed_3 = "title_seed_3_" + Math.floor(Math.random()*1000);
    createBook(id_seed_3, q_seed_3, title_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let name_seed_3 = "name_seed_3_" + Math.floor(Math.random()*1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
    createUser(id_seed_3, name_seed_3, q_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let name_seed_3 = "name_seed_3_" + Math.floor(Math.random()*1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
    createUser(id_seed_3, name_seed_3, q_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let name_seed_3 = "name_seed_3_" + Math.floor(Math.random()*1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
    createUser(id_seed_3, name_seed_3, q_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let name_seed_3 = "name_seed_3_" + Math.floor(Math.random()*1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
    createUser(id_seed_3, name_seed_3, q_seed_3, { expectedResponseCodes: [200, 201] });
      let id_seed_3 = Math.floor(Math.random() * 1000);
      let name_seed_3 = "name_seed_3_" + Math.floor(Math.random()*1000);
      let q_seed_3 = "q_seed_3_" + Math.floor(Math.random()*1000);
    createUser(id_seed_3, name_seed_3, q_seed_3, { expectedResponseCodes: [200, 201] });
}});
// --- Hyper-Negative Story Version 1 ---
bthread("hyper:library:negative_orchestration:1", function () {
  bthread("Hyper_Neg_PostDelete_Books_1", function() {
    let e = waitFor(matchAnyBooksDeleted());
    getBook(e.data.id || e.data.sku);
  }});
}});
// --- Hyper-Negative Story Version 2 ---
bthread("hyper:library:negative_orchestration:2", function () {
  bthread("Hyper_Neg_PostDelete_Books_2", function() {
    let e = waitFor(matchAnyBooksDeleted());
    getBook(e.data.id || e.data.sku);
  }});
}});
// --- Hyper-Negative Story Version 3 ---
bthread("hyper:library:negative_orchestration:3", function () {
  bthread("Hyper_Neg_PostDelete_Books_3", function() {
    let e = waitFor(matchAnyBooksDeleted());
    getBook(e.data.id || e.data.sku);
  }});
}});