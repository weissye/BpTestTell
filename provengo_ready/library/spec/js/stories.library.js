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
    block(matchDeletedBooks(id, q, title), function() {
        verifyBooksExists(id, q, title);
    });
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
    block(matchAnyBooksAdded(), function() {
        verifyBooksDoesNotExist(id, q, title);
    });
  }
});

// Monitor: Loans Verification (Existence)
bthread("monitor:Loans:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLoansAdded() });
    let bookId = (e.data.parameters && e.data.parameters["bookId"]) ? e.data.parameters["bookId"] : e.data["bookId"];
    let userId = (e.data.parameters && e.data.parameters["userId"]) ? e.data.parameters["userId"] : e.data["userId"];
    // Block Deletion while Verifying Existence
    block(matchDeletedLoans(bookId, userId), function() {
        verifyLoansExists(bookId, userId);
    });
  }
});

// Monitor: Loans Verification (Absence)
bthread("monitor:Loans:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedLoans() });
    let bookId = (e.data.parameters && e.data.parameters["bookId"]) ? e.data.parameters["bookId"] : e.data["bookId"];
    let userId = (e.data.parameters && e.data.parameters["userId"]) ? e.data.parameters["userId"] : e.data["userId"];
    // Block Creation while Verifying Absence
    block(matchAnyLoansAdded(), function() {
        verifyLoansDoesNotExist(bookId, userId);
    });
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
    block(matchDeletedUsers(id, name, q), function() {
        verifyUsersExists(id, name, q);
    });
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
    block(matchAnyUsersAdded(), function() {
        verifyUsersDoesNotExist(id, name, q);
    });
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
    block(matchDeletedHolds(bookId, id, userId), function() {
        verifyHoldsExists(bookId, id, userId);
    });
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
    block(matchAnyHoldsAdded(), function() {
        verifyHoldsDoesNotExist(bookId, id, userId);
    });
  }
});

// Story: crud:Books:linear:1
bthread("crud:Books:linear:1", function () {
  // -> Creating Books
  let id_Books_100 = Math.floor(Math.random() * 1000000);
  let q_Books_100 = "q_Books_100_" + Math.floor(Math.random()*1000);
  let title_Books_100 = "title_Books_100_" + Math.floor(Math.random()*1000);
  let res_Books_100 = createBook(id_Books_100, q_Books_100, title_Books_100);
  if (res_Books_100 && res_Books_100.status >= 200 && res_Books_100.status < 300) {
      verifyBooksExists(id_Books_100);
  } else {
      bp.log.error("Failed to create Books, skipping verification.");
  }

  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Loans:linear:1
bthread("crud:Loans:linear:1", function () {
  // Ensure dependencies are resolved before starting CRUD
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
  let res_Loans_110 = createLoan(bookId_Loans_110, userId_Loans_110);
  if (res_Loans_110 && res_Loans_110.status >= 200 && res_Loans_110.status < 300) {
      verifyLoansExists(userId_Loans_110);
  } else {
      bp.log.error("Failed to create Loans, skipping verification.");
  }

  // -> Deleting Loans
  deleteLoan(bookId_Loans_110, userId_Loans_110);
  verifyLoansDoesNotExist(bookId_Loans_110, userId_Loans_110);

});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  // -> Creating Users
  let id_Users_120 = Math.floor(Math.random() * 1000000);
  let name_Users_120 = "name_Users_120_" + Math.floor(Math.random()*1000);
  let q_Users_120 = "q_Users_120_" + Math.floor(Math.random()*1000);
  let res_Users_120 = createUser(id_Users_120, name_Users_120, q_Users_120);
  if (res_Users_120 && res_Users_120.status >= 200 && res_Users_120.status < 300) {
      verifyUsersExists(id_Users_120);
  } else {
      bp.log.error("Failed to create Users, skipping verification.");
  }

  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Holds:linear:1
bthread("crud:Holds:linear:1", function () {
  // Ensure dependencies are resolved before starting CRUD
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
  let res_Holds_130 = createHold(bookId_Holds_130, id_Holds_130, userId_Holds_130);
  if (res_Holds_130 && res_Holds_130.status >= 200 && res_Holds_130.status < 300) {
      verifyHoldsExists(id_Holds_130);
  } else {
      bp.log.error("Failed to create Holds, skipping verification.");
  }

  // -> Deleting Holds
  deleteHold(id_Holds_130);
  verifyHoldsDoesNotExist(bookId_Holds_130, id_Holds_130, userId_Holds_130);

});

// Story: crud:Books:linear:2
bthread("crud:Books:linear:2", function () {
  // -> Creating Books
  let id_Books_140 = Math.floor(Math.random() * 1000000);
  let q_Books_140 = "q_Books_140_" + Math.floor(Math.random()*1000);
  let title_Books_140 = "title_Books_140_" + Math.floor(Math.random()*1000);
  let res_Books_140 = createBook(id_Books_140, q_Books_140, title_Books_140);
  if (res_Books_140 && res_Books_140.status >= 200 && res_Books_140.status < 300) {
      verifyBooksExists(id_Books_140);
  } else {
      bp.log.error("Failed to create Books, skipping verification.");
  }

  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Loans:linear:2
bthread("crud:Loans:linear:2", function () {
  // Ensure dependencies are resolved before starting CRUD
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
  let res_Loans_150 = createLoan(bookId_Loans_150, userId_Loans_150);
  if (res_Loans_150 && res_Loans_150.status >= 200 && res_Loans_150.status < 300) {
      verifyLoansExists(userId_Loans_150);
  } else {
      bp.log.error("Failed to create Loans, skipping verification.");
  }

  // -> Deleting Loans
  deleteLoan(bookId_Loans_150, userId_Loans_150);
  verifyLoansDoesNotExist(bookId_Loans_150, userId_Loans_150);

});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let id_Users_160 = Math.floor(Math.random() * 1000000);
  let name_Users_160 = "name_Users_160_" + Math.floor(Math.random()*1000);
  let q_Users_160 = "q_Users_160_" + Math.floor(Math.random()*1000);
  let res_Users_160 = createUser(id_Users_160, name_Users_160, q_Users_160);
  if (res_Users_160 && res_Users_160.status >= 200 && res_Users_160.status < 300) {
      verifyUsersExists(id_Users_160);
  } else {
      bp.log.error("Failed to create Users, skipping verification.");
  }

  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Holds:linear:2
bthread("crud:Holds:linear:2", function () {
  // Ensure dependencies are resolved before starting CRUD
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
  let res_Holds_170 = createHold(bookId_Holds_170, id_Holds_170, userId_Holds_170);
  if (res_Holds_170 && res_Holds_170.status >= 200 && res_Holds_170.status < 300) {
      verifyHoldsExists(id_Holds_170);
  } else {
      bp.log.error("Failed to create Holds, skipping verification.");
  }

  // -> Deleting Holds
  deleteHold(id_Holds_170);
  verifyHoldsDoesNotExist(bookId_Holds_170, id_Holds_170, userId_Holds_170);

});

// Story: crud:Books:linear:3
bthread("crud:Books:linear:3", function () {
  // -> Creating Books
  let id_Books_180 = Math.floor(Math.random() * 1000000);
  let q_Books_180 = "q_Books_180_" + Math.floor(Math.random()*1000);
  let title_Books_180 = "title_Books_180_" + Math.floor(Math.random()*1000);
  let res_Books_180 = createBook(id_Books_180, q_Books_180, title_Books_180);
  if (res_Books_180 && res_Books_180.status >= 200 && res_Books_180.status < 300) {
      verifyBooksExists(id_Books_180);
  } else {
      bp.log.error("Failed to create Books, skipping verification.");
  }

  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Loans:linear:3
bthread("crud:Loans:linear:3", function () {
  // Ensure dependencies are resolved before starting CRUD
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
  let res_Loans_190 = createLoan(bookId_Loans_190, userId_Loans_190);
  if (res_Loans_190 && res_Loans_190.status >= 200 && res_Loans_190.status < 300) {
      verifyLoansExists(userId_Loans_190);
  } else {
      bp.log.error("Failed to create Loans, skipping verification.");
  }

  // -> Deleting Loans
  deleteLoan(bookId_Loans_190, userId_Loans_190);
  verifyLoansDoesNotExist(bookId_Loans_190, userId_Loans_190);

});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let id_Users_200 = Math.floor(Math.random() * 1000000);
  let name_Users_200 = "name_Users_200_" + Math.floor(Math.random()*1000);
  let q_Users_200 = "q_Users_200_" + Math.floor(Math.random()*1000);
  let res_Users_200 = createUser(id_Users_200, name_Users_200, q_Users_200);
  if (res_Users_200 && res_Users_200.status >= 200 && res_Users_200.status < 300) {
      verifyUsersExists(id_Users_200);
  } else {
      bp.log.error("Failed to create Users, skipping verification.");
  }

  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Holds:linear:3
bthread("crud:Holds:linear:3", function () {
  // Ensure dependencies are resolved before starting CRUD
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
  let res_Holds_210 = createHold(bookId_Holds_210, id_Holds_210, userId_Holds_210);
  if (res_Holds_210 && res_Holds_210.status >= 200 && res_Holds_210.status < 300) {
      verifyHoldsExists(id_Holds_210);
  } else {
      bp.log.error("Failed to create Holds, skipping verification.");
  }

  // -> Deleting Holds
  deleteHold(id_Holds_210);
  verifyHoldsDoesNotExist(bookId_Holds_210, id_Holds_210, userId_Holds_210);

});

// Story: Deep Chain Books_Loans (Self-Contained)
bthread("chain:Books_Loans", function () {
  // -> Creating Books
  let id_Books_220 = Math.floor(Math.random() * 1000000);
  let q_Books_220 = "q_Books_220_" + Math.floor(Math.random()*1000);
  let title_Books_220 = "title_Books_220_" + Math.floor(Math.random()*1000);
  let res_Books_220 = createBook(id_Books_220, q_Books_220, title_Books_220);
  if (res_Books_220 && res_Books_220.status >= 200 && res_Books_220.status < 300) {
      verifyBooksExists(id_Books_220);
  } else {
      bp.log.error("Failed to create Books, skipping verification.");
  }

  // -> Creating Users
  let id_Users_220 = Math.floor(Math.random() * 1000000);
  let name_Users_220 = "name_Users_220_" + Math.floor(Math.random()*1000);
  let q_Users_220 = "q_Users_220_" + Math.floor(Math.random()*1000);
  let res_Users_220 = createUser(id_Users_220, name_Users_220, q_Users_220);
  if (res_Users_220 && res_Users_220.status >= 200 && res_Users_220.status < 300) {
      verifyUsersExists(id_Users_220);
  } else {
      bp.log.error("Failed to create Users, skipping verification.");
  }

  // -> Creating Loans
  let bookId_Loans_220 = id_Books_220;
  let userId_Loans_220 = id_Users_220;
  let res_Loans_220 = createLoan(bookId_Loans_220, userId_Loans_220);
  if (res_Loans_220 && res_Loans_220.status >= 200 && res_Loans_220.status < 300) {
      verifyLoansExists(userId_Loans_220);
  } else {
      bp.log.error("Failed to create Loans, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Loans
  deleteLoan(bookId_Loans_220, userId_Loans_220);
  verifyLoansDoesNotExist(bookId_Loans_220, userId_Loans_220);

  // -> Deleting Books
  deleteBook(id_Books_220);
  verifyBooksDoesNotExist(id_Books_220, q_Books_220, title_Books_220);

});

// Story: Deep Chain Books_Holds (Self-Contained)
bthread("chain:Books_Holds", function () {
  // -> Creating Books
  let id_Books_320 = Math.floor(Math.random() * 1000000);
  let q_Books_320 = "q_Books_320_" + Math.floor(Math.random()*1000);
  let title_Books_320 = "title_Books_320_" + Math.floor(Math.random()*1000);
  let res_Books_320 = createBook(id_Books_320, q_Books_320, title_Books_320);
  if (res_Books_320 && res_Books_320.status >= 200 && res_Books_320.status < 300) {
      verifyBooksExists(id_Books_320);
  } else {
      bp.log.error("Failed to create Books, skipping verification.");
  }

  // -> Creating Users
  let id_Users_320 = Math.floor(Math.random() * 1000000);
  let name_Users_320 = "name_Users_320_" + Math.floor(Math.random()*1000);
  let q_Users_320 = "q_Users_320_" + Math.floor(Math.random()*1000);
  let res_Users_320 = createUser(id_Users_320, name_Users_320, q_Users_320);
  if (res_Users_320 && res_Users_320.status >= 200 && res_Users_320.status < 300) {
      verifyUsersExists(id_Users_320);
  } else {
      bp.log.error("Failed to create Users, skipping verification.");
  }

  // -> Creating Holds
  let bookId_Holds_320 = id_Books_320;
  let id_Holds_320 = id_Books_320;
  let userId_Holds_320 = id_Users_320;
  let res_Holds_320 = createHold(bookId_Holds_320, id_Holds_320, userId_Holds_320);
  if (res_Holds_320 && res_Holds_320.status >= 200 && res_Holds_320.status < 300) {
      verifyHoldsExists(id_Holds_320);
  } else {
      bp.log.error("Failed to create Holds, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Holds
  deleteHold(id_Holds_320);
  verifyHoldsDoesNotExist(bookId_Holds_320, id_Holds_320, userId_Holds_320);

  // -> Deleting Books
  deleteBook(id_Books_320);
  verifyBooksDoesNotExist(id_Books_320, q_Books_320, title_Books_320);

});

// Story: Deep Chain Users_Loans (Self-Contained)
bthread("chain:Users_Loans", function () {
  // -> Creating Users
  let id_Users_420 = Math.floor(Math.random() * 1000000);
  let name_Users_420 = "name_Users_420_" + Math.floor(Math.random()*1000);
  let q_Users_420 = "q_Users_420_" + Math.floor(Math.random()*1000);
  let res_Users_420 = createUser(id_Users_420, name_Users_420, q_Users_420);
  if (res_Users_420 && res_Users_420.status >= 200 && res_Users_420.status < 300) {
      verifyUsersExists(id_Users_420);
  } else {
      bp.log.error("Failed to create Users, skipping verification.");
  }

  // -> Creating Books
  let id_Books_420 = Math.floor(Math.random() * 1000000);
  let q_Books_420 = "q_Books_420_" + Math.floor(Math.random()*1000);
  let title_Books_420 = "title_Books_420_" + Math.floor(Math.random()*1000);
  let res_Books_420 = createBook(id_Books_420, q_Books_420, title_Books_420);
  if (res_Books_420 && res_Books_420.status >= 200 && res_Books_420.status < 300) {
      verifyBooksExists(id_Books_420);
  } else {
      bp.log.error("Failed to create Books, skipping verification.");
  }

  // -> Creating Loans
  let bookId_Loans_420 = id_Books_420;
  let userId_Loans_420 = id_Users_420;
  let res_Loans_420 = createLoan(bookId_Loans_420, userId_Loans_420);
  if (res_Loans_420 && res_Loans_420.status >= 200 && res_Loans_420.status < 300) {
      verifyLoansExists(userId_Loans_420);
  } else {
      bp.log.error("Failed to create Loans, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Loans
  deleteLoan(bookId_Loans_420, userId_Loans_420);
  verifyLoansDoesNotExist(bookId_Loans_420, userId_Loans_420);

  // -> Deleting Users
  deleteUser(id_Users_420);
  verifyUsersDoesNotExist(id_Users_420, name_Users_420, q_Users_420);

});

// Story: Deep Chain Users_Holds (Self-Contained)
bthread("chain:Users_Holds", function () {
  // -> Creating Users
  let id_Users_520 = Math.floor(Math.random() * 1000000);
  let name_Users_520 = "name_Users_520_" + Math.floor(Math.random()*1000);
  let q_Users_520 = "q_Users_520_" + Math.floor(Math.random()*1000);
  let res_Users_520 = createUser(id_Users_520, name_Users_520, q_Users_520);
  if (res_Users_520 && res_Users_520.status >= 200 && res_Users_520.status < 300) {
      verifyUsersExists(id_Users_520);
  } else {
      bp.log.error("Failed to create Users, skipping verification.");
  }

  // -> Creating Books
  let id_Books_520 = Math.floor(Math.random() * 1000000);
  let q_Books_520 = "q_Books_520_" + Math.floor(Math.random()*1000);
  let title_Books_520 = "title_Books_520_" + Math.floor(Math.random()*1000);
  let res_Books_520 = createBook(id_Books_520, q_Books_520, title_Books_520);
  if (res_Books_520 && res_Books_520.status >= 200 && res_Books_520.status < 300) {
      verifyBooksExists(id_Books_520);
  } else {
      bp.log.error("Failed to create Books, skipping verification.");
  }

  // -> Creating Holds
  let bookId_Holds_520 = id_Books_520;
  let id_Holds_520 = id_Books_520;
  let userId_Holds_520 = id_Users_520;
  let res_Holds_520 = createHold(bookId_Holds_520, id_Holds_520, userId_Holds_520);
  if (res_Holds_520 && res_Holds_520.status >= 200 && res_Holds_520.status < 300) {
      verifyHoldsExists(id_Holds_520);
  } else {
      bp.log.error("Failed to create Holds, skipping verification.");
  }

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Holds
  deleteHold(id_Holds_520);
  verifyHoldsDoesNotExist(bookId_Holds_520, id_Holds_520, userId_Holds_520);

  // -> Deleting Users
  deleteUser(id_Users_520);
  verifyUsersDoesNotExist(id_Users_520, name_Users_520, q_Users_520);

});
