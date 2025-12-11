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
  let author = "author_210_" + Math.floor(Math.random() * 10000);
  let id = 21000000 + Math.floor(Math.random() * 100000);
  let publishedDate = "publishedDate_210_" + Math.floor(Math.random() * 10000);
  let q = "q_210_" + Math.floor(Math.random() * 10000);
  let title = "title_210_" + Math.floor(Math.random() * 10000);
  createBook(author, id, publishedDate, q, title);
  verifyBooksExists(author, id, publishedDate, q, title);
  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Books:linear:2
bthread("crud:Books:linear:2", function () {
  let author = "author_220_" + Math.floor(Math.random() * 10000);
  let id = 22000000 + Math.floor(Math.random() * 100000);
  let publishedDate = "publishedDate_220_" + Math.floor(Math.random() * 10000);
  let q = "q_220_" + Math.floor(Math.random() * 10000);
  let title = "title_220_" + Math.floor(Math.random() * 10000);
  createBook(author, id, publishedDate, q, title);
  verifyBooksExists(author, id, publishedDate, q, title);
  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Story: crud:Books:linear:3
bthread("crud:Books:linear:3", function () {
  let author = "author_230_" + Math.floor(Math.random() * 10000);
  let id = 23000000 + Math.floor(Math.random() * 100000);
  let publishedDate = "publishedDate_230_" + Math.floor(Math.random() * 10000);
  let q = "q_230_" + Math.floor(Math.random() * 10000);
  let title = "title_230_" + Math.floor(Math.random() * 10000);
  createBook(author, id, publishedDate, q, title);
  verifyBooksExists(author, id, publishedDate, q, title);
  // Skip delete for Books to prevent foreign key errors (has active dependents)
});

// Monitor: Books Verification
bthread("monitor:Books", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBooksAdded() });
    let author = (e.data.parameters && e.data.parameters["author"]) ? e.data.parameters["author"] : e.data["author"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let publishedDate = (e.data.parameters && e.data.parameters["publishedDate"]) ? e.data.parameters["publishedDate"] : e.data["publishedDate"];
    let q = (e.data.parameters && e.data.parameters["q"]) ? e.data.parameters["q"] : e.data["q"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Monitor Books: Verifying existence (Deletion skipped due to dependencies)
    verifyBooksExists(author, id, publishedDate, q, title);
  }
});

// Story: crud:Loans:linear:1
bthread("crud:Loans:linear:1", function () {
  let bookId; // Resolved Dependency
  let loanDate = "loanDate_260_" + Math.floor(Math.random() * 10000);
  let userId = 26000000 + Math.floor(Math.random() * 100000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["userId"] = matchAnyUsersAdded();
  deps["bookId"] = matchAnyBooksAdded();
  let pkMap = {"userId": "id", "bookId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  userId = captured["userId"];
  bookId = captured["bookId"];
  createLoan(bookId, loanDate, userId);
  deleteLoan(bookId, loanDate, userId);
});

// Story: crud:Loans:linear:2
bthread("crud:Loans:linear:2", function () {
  let bookId; // Resolved Dependency
  let loanDate = "loanDate_270_" + Math.floor(Math.random() * 10000);
  let userId = 27000000 + Math.floor(Math.random() * 100000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["userId"] = matchAnyUsersAdded();
  deps["bookId"] = matchAnyBooksAdded();
  let pkMap = {"userId": "id", "bookId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  userId = captured["userId"];
  bookId = captured["bookId"];
  createLoan(bookId, loanDate, userId);
  deleteLoan(bookId, loanDate, userId);
});

// Story: crud:Loans:linear:3
bthread("crud:Loans:linear:3", function () {
  let bookId; // Resolved Dependency
  let loanDate = "loanDate_280_" + Math.floor(Math.random() * 10000);
  let userId = 28000000 + Math.floor(Math.random() * 100000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["userId"] = matchAnyUsersAdded();
  deps["bookId"] = matchAnyBooksAdded();
  let pkMap = {"userId": "id", "bookId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  userId = captured["userId"];
  bookId = captured["bookId"];
  createLoan(bookId, loanDate, userId);
  deleteLoan(bookId, loanDate, userId);
});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  let email = "email_310_" + Math.floor(Math.random() * 10000);
  let id = 31000000 + Math.floor(Math.random() * 100000);
  let name = "name_310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let password = "password_310_" + Math.floor(Math.random() * 10000);
  let q = "q_310_" + Math.floor(Math.random() * 10000);
  createUser(email, id, name, password, q);
  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  let email = "email_320_" + Math.floor(Math.random() * 10000);
  let id = 32000000 + Math.floor(Math.random() * 100000);
  let name = "name_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let password = "password_320_" + Math.floor(Math.random() * 10000);
  let q = "q_320_" + Math.floor(Math.random() * 10000);
  createUser(email, id, name, password, q);
  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  let email = "email_330_" + Math.floor(Math.random() * 10000);
  let id = 33000000 + Math.floor(Math.random() * 100000);
  let name = "name_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let password = "password_330_" + Math.floor(Math.random() * 10000);
  let q = "q_330_" + Math.floor(Math.random() * 10000);
  createUser(email, id, name, password, q);
  // Skip delete for Users to prevent foreign key errors (has active dependents)
});

// Story: crud:Holds:linear:1
bthread("crud:Holds:linear:1", function () {
  let bookId; // Resolved Dependency
  let id = 36000000 + Math.floor(Math.random() * 100000);
  let name = "name_360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_360_" + Math.floor(Math.random() * 10000);
  let userId; // Resolved Dependency
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["userId"] = matchAnyUsersAdded();
  deps["bookId"] = matchAnyBooksAdded();
  let pkMap = {"userId": "id", "bookId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  userId = captured["userId"];
  bookId = captured["bookId"];
  createHold(bookId, id, name, status, userId);
  deleteHold(bookId, id, name, status, userId);
});

// Story: crud:Holds:linear:2
bthread("crud:Holds:linear:2", function () {
  let bookId; // Resolved Dependency
  let id = 37000000 + Math.floor(Math.random() * 100000);
  let name = "name_370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_370_" + Math.floor(Math.random() * 10000);
  let userId; // Resolved Dependency
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["userId"] = matchAnyUsersAdded();
  deps["bookId"] = matchAnyBooksAdded();
  let pkMap = {"userId": "id", "bookId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  userId = captured["userId"];
  bookId = captured["bookId"];
  createHold(bookId, id, name, status, userId);
  deleteHold(bookId, id, name, status, userId);
});

// Story: crud:Holds:linear:3
bthread("crud:Holds:linear:3", function () {
  let bookId; // Resolved Dependency
  let id = 38000000 + Math.floor(Math.random() * 100000);
  let name = "name_380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_380_" + Math.floor(Math.random() * 10000);
  let userId; // Resolved Dependency
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["userId"] = matchAnyUsersAdded();
  deps["bookId"] = matchAnyBooksAdded();
  let pkMap = {"userId": "id", "bookId": "id"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  userId = captured["userId"];
  bookId = captured["bookId"];
  createHold(bookId, id, name, status, userId);
  deleteHold(bookId, id, name, status, userId);
});
