//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 * This approximates the "Library SUT" interface style.
 */

const svc = new RESTSession("http://" + host + ":" + port, "provengo basedclient", {
  headers: { "Content-Type": "application/json" },
});

// Common helpers
function matchesDescription(text) {
  return bp.EventSet("desc-eq", function(e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === text);
  });
}
function matchesDescriptionRegex(rx) {
  return bp.EventSet("desc-rx", function(e) {
    if (!e || !e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return rx.test(e.data.parameters.description);
  });
}

/** === Book Operations === */

// CREATE
function addBook(book_id) {
  svc.post("/books", {
      body: JSON.stringify({ book_id: book_id }),
      parameters: { description: "Add a book with book_id " + book_id + "" }
    });
}

// DELETE
function deleteBook(book_id) {
  svc.delete("/books/" + book_id, {
    parameters: { description: "Delete a book with book_id " + book_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingBook(book_id) {
  svc.delete("/books/" + book_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a book with book_id " + book_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingBook(book_id) {
  svc.post("/books", {
      body: JSON.stringify({ book_id: book_id }),
      parameters: { description: "Add a book with book_id " + book_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a book with book_id " + book_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateBook(book_id) {
  svc.put("/books/" + book_id, {
      body: JSON.stringify({ book_id: book_id }),
      parameters: { description: "Update a book" }
    });
}

// GET one
function getBook(book_id) {
  svc.get("/books/" + book_id, {
    parameters: { description: "Get a book" }
  });
}

// LIST all
function listBooks() {
  svc.get("/books", {
    parameters: { description: "List books" }
  });
}

// Verify exists (by list)
function verifyBookExists(book_id) {
  svc.get("/books", {
    callback: function (response) {
      book = JSON.parse(response.body);
      for (let i = 0; i < book.length; i++) {
        if (book[i].book_id === book_id) {
          return pvg.success("Book exists");
        }
      }
      return pvg.fail("Expected a book to exist but it does not");
    },
    parameters: { description: "Verify book with book_id " + book_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyBookDoesNotExist(book_id) {
  svc.get("/books", {
    callback: function (response) {
      book = JSON.parse(response.body);
      for (let i = 0; i < book.length; i++) {
        if (book[i].book_id === book_id) {
          return pvg.fail("Expected a book to not exist but it does");
        }
      }
      return pvg.success("Book does not exist");
    },
    parameters: { description: "Verify book with book_id " + book_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddBook() {
  return bp.EventSet("any-add-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a book");
  });
}
function matchAddBook(book_id) {
  return bp.EventSet("add-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a book with book_id " + book_id + "";
  });
}
function matchAnyDeleteBook() {
  return bp.EventSet("any-del-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a book");
  });
}
function matchDeleteBook(book_id) {
  return bp.EventSet("del-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a book with book_id " + book_id + "";
  });
}

// Wait helpers
function waitForAnyBookAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ book\ with\ book_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ book\ with\ book_id\ (.+)$/);
    return { book_id: parseInt(m[1]) };
}
function waitForBookAdded(book_id) {
  waitFor(matchAddBook(book_id));
}
function waitForBookDeleted(book_id) {
  waitFor(matchDeleteBook(book_id));
}
function waitForAnyBookDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ book\ with\ book_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ book\ with\ book_id\ (.+)$/);
    return { book_id: parseInt(m[1]) };
}


/** === Hold Operations === */

// CREATE
function addHold(hold_id) {
  svc.post("/holds", {
      body: JSON.stringify({ hold_id: hold_id }),
      parameters: { description: "Add a hold with hold_id " + hold_id + "" }
    });
}

// DELETE
function deleteHold(hold_id) {
  svc.delete("/holds/" + hold_id, {
    parameters: { description: "Delete a hold with hold_id " + hold_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingHold(hold_id) {
  svc.delete("/holds/" + hold_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a hold with hold_id " + hold_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingHold(hold_id) {
  svc.post("/holds", {
      body: JSON.stringify({ hold_id: hold_id }),
      parameters: { description: "Add a hold with hold_id " + hold_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a hold with hold_id " + hold_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateHold(hold_id) {
  svc.put("/holds/" + hold_id, {
      body: JSON.stringify({ hold_id: hold_id }),
      parameters: { description: "Update a hold" }
    });
}

// GET one
function getHold(hold_id) {
  svc.get("/holds/" + hold_id, {
    parameters: { description: "Get a hold" }
  });
}

// LIST all
function listHolds() {
  svc.get("/holds", {
    parameters: { description: "List holds" }
  });
}

// Verify exists (by list)
function verifyHoldExists(hold_id) {
  svc.get("/holds", {
    callback: function (response) {
      hold = JSON.parse(response.body);
      for (let i = 0; i < hold.length; i++) {
        if (hold[i].hold_id === hold_id) {
          return pvg.success("Hold exists");
        }
      }
      return pvg.fail("Expected a hold to exist but it does not");
    },
    parameters: { description: "Verify hold with hold_id " + hold_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyHoldDoesNotExist(hold_id) {
  svc.get("/holds", {
    callback: function (response) {
      hold = JSON.parse(response.body);
      for (let i = 0; i < hold.length; i++) {
        if (hold[i].hold_id === hold_id) {
          return pvg.fail("Expected a hold to not exist but it does");
        }
      }
      return pvg.success("Hold does not exist");
    },
    parameters: { description: "Verify hold with hold_id " + hold_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddHold() {
  return bp.EventSet("any-add-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a hold");
  });
}
function matchAddHold(hold_id) {
  return bp.EventSet("add-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a hold with hold_id " + hold_id + "";
  });
}
function matchAnyDeleteHold() {
  return bp.EventSet("any-del-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a hold");
  });
}
function matchDeleteHold(hold_id) {
  return bp.EventSet("del-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a hold with hold_id " + hold_id + "";
  });
}

// Wait helpers
function waitForAnyHoldAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ hold\ with\ hold_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ hold\ with\ hold_id\ (.+)$/);
    return { hold_id: parseInt(m[1]) };
}
function waitForHoldAdded(hold_id) {
  waitFor(matchAddHold(hold_id));
}
function waitForHoldDeleted(hold_id) {
  waitFor(matchDeleteHold(hold_id));
}
function waitForAnyHoldDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ hold\ with\ hold_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ hold\ with\ hold_id\ (.+)$/);
    return { hold_id: parseInt(m[1]) };
}


/** === Loan Operations === */

// CREATE
function addLoan(user_id, book_id) {
  svc.post("/loans", {
      body: JSON.stringify({ user_id: user_id, book_id: book_id }),
      parameters: { description: "Add a loan with user_id " + user_id + " and book_id " + book_id + "" }
    });
}

// DELETE
function deleteLoan(user_id, book_id) {
  svc.delete("/loans/" + user_id + "/"+ book_id, {
    parameters: { description: "Delete a loan with user_id " + user_id + " and book_id " + book_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLoan(user_id, book_id) {
  svc.delete("/loans/" + user_id + "/"+ book_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a loan with user_id " + user_id + " and book_id " + book_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLoan(user_id, book_id) {
  svc.post("/loans", {
      body: JSON.stringify({ user_id: user_id, book_id: book_id }),
      parameters: { description: "Add a loan with user_id " + user_id + " and book_id " + book_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a loan with user_id " + user_id + " and book_id " + book_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateLoan(user_id, book_id) {
  svc.put("/loans/" + user_id + "/"+ book_id, {
      body: JSON.stringify({ user_id: user_id, book_id: book_id }),
      parameters: { description: "Update a loan" }
    });
}

// GET one
function getLoan(user_id, book_id) {
  svc.get("/loans/" + user_id + "/"+ book_id, {
    parameters: { description: "Get a loan" }
  });
}

// LIST all
function listLoans() {
  svc.get("/loans", {
    parameters: { description: "List loans" }
  });
}

// Verify exists (by list)
function verifyLoanExists(user_id, book_id) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].user_id === user_id && loan[i].book_id === book_id) {
          return pvg.success("Loan exists");
        }
      }
      return pvg.fail("Expected a loan to exist but it does not");
    },
    parameters: { description: "Verify loan with user_id " + user_id + " and book_id " + book_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLoanDoesNotExist(user_id, book_id) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].user_id === user_id && loan[i].book_id === book_id) {
          return pvg.fail("Expected a loan to not exist but it does");
        }
      }
      return pvg.success("Loan does not exist");
    },
    parameters: { description: "Verify loan with user_id " + user_id + " and book_id " + book_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLoan() {
  return bp.EventSet("any-add-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a loan");
  });
}
function matchAddLoan(user_id, book_id) {
  return bp.EventSet("add-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a loan with user_id " + user_id + " and book_id " + book_id + "";
  });
}
function matchAnyDeleteLoan() {
  return bp.EventSet("any-del-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a loan");
  });
}
function matchDeleteLoan(user_id, book_id) {
  return bp.EventSet("del-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a loan with user_id " + user_id + " and book_id " + book_id + "";
  });
}

// Wait helpers
function waitForAnyLoanAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ loan\ with\ user_id\ (.+) and book_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ loan\ with\ user_id\ (.+) and book_id\ (.+)$/);
    return { user_id: parseInt(m[1]), book_id: parseInt(m[2]) };
}
function waitForLoanAdded(user_id, book_id) {
  waitFor(matchAddLoan(user_id, book_id));
}
function waitForLoanDeleted(user_id, book_id) {
  waitFor(matchDeleteLoan(user_id, book_id));
}
function waitForAnyLoanDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ loan\ with\ user_id\ (.+) and book_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ loan\ with\ user_id\ (.+) and book_id\ (.+)$/);
    return { user_id: parseInt(m[1]), book_id: parseInt(m[2]) };
}


/** === User Operations === */

// CREATE
function addUser(user_id) {
  svc.post("/users", {
      body: JSON.stringify({ user_id: user_id }),
      parameters: { description: "Add a user with user_id " + user_id + "" }
    });
}

// DELETE
function deleteUser(user_id) {
  svc.delete("/users/" + user_id, {
    parameters: { description: "Delete a user with user_id " + user_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(user_id) {
  svc.delete("/users/" + user_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with user_id " + user_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(user_id) {
  svc.post("/users", {
      body: JSON.stringify({ user_id: user_id }),
      parameters: { description: "Add a user with user_id " + user_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with user_id " + user_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser(user_id) {
  svc.put("/users/" + user_id, {
      body: JSON.stringify({ user_id: user_id }),
      parameters: { description: "Update a user" }
    });
}

// GET one
function getUser(user_id) {
  svc.get("/users/" + user_id, {
    parameters: { description: "Get a user" }
  });
}

// LIST all
function listUsers() {
  svc.get("/users", {
    parameters: { description: "List users" }
  });
}

// Verify exists (by list)
function verifyUserExists(user_id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].user_id === user_id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with user_id " + user_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(user_id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].user_id === user_id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with user_id " + user_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(user_id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with user_id " + user_id + "";
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(user_id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with user_id " + user_id + "";
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ user_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ user_id\ (.+)$/);
    return { user_id: parseInt(m[1]) };
}
function waitForUserAdded(user_id) {
  waitFor(matchAddUser(user_id));
}
function waitForUserDeleted(user_id) {
  waitFor(matchDeleteUser(user_id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ user_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ user_id\ (.+)$/);
    return { user_id: parseInt(m[1]) };
}

