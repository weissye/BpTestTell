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
function addBook(id) {
  svc.post("/books", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a book with id " + id + "" }
    });
}

// DELETE
function deleteBook(id) {
  svc.delete("/books/" + id, {
    parameters: { description: "Delete a book with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingBook(id) {
  svc.delete("/books/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a book with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingBook(id) {
  svc.post("/books", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a book with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a book with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateBook(id) {
  svc.put("/books/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a book" }
    });
}

// GET one
function getBook(id) {
  svc.get("/books/" + id, {
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
function verifyBookExists(id) {
  svc.get("/books", {
    callback: function (response) {
      book = JSON.parse(response.body);
      for (let i = 0; i < book.length; i++) {
        if (book[i].id === id) {
          return pvg.success("Book exists");
        }
      }
      return pvg.fail("Expected a book to exist but it does not");
    },
    parameters: { description: "Verify book with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyBookDoesNotExist(id) {
  svc.get("/books", {
    callback: function (response) {
      book = JSON.parse(response.body);
      for (let i = 0; i < book.length; i++) {
        if (book[i].id === id) {
          return pvg.fail("Expected a book to not exist but it does");
        }
      }
      return pvg.success("Book does not exist");
    },
    parameters: { description: "Verify book with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddBook() {
  return bp.EventSet("any-add-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a book");
  });
}
function matchAddBook(id) {
  return bp.EventSet("add-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a book with id " + id + "";
  });
}
function matchAnyDeleteBook() {
  return bp.EventSet("any-del-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a book");
  });
}
function matchDeleteBook(id) {
  return bp.EventSet("del-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a book with id " + id + "";
  });
}

// Wait helpers
function waitForAnyBookAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ book\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ book\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForBookAdded(id) {
  waitFor(matchAddBook(id));
}
function waitForBookDeleted(id) {
  waitFor(matchDeleteBook(id));
}
function waitForAnyBookDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ book\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ book\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Hold Operations === */

// CREATE
function addHold(id) {
  svc.post("/holds", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a hold with id " + id + "" }
    });
}

// DELETE
function deleteHold(id) {
  svc.delete("/holds/" + id, {
    parameters: { description: "Delete a hold with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingHold(id) {
  svc.delete("/holds/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a hold with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingHold(id) {
  svc.post("/holds", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a hold with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a hold with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateHold(id) {
  svc.put("/holds/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a hold" }
    });
}

// GET one
function getHold(id) {
  svc.get("/holds/" + id, {
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
function verifyHoldExists(id) {
  svc.get("/holds", {
    callback: function (response) {
      hold = JSON.parse(response.body);
      for (let i = 0; i < hold.length; i++) {
        if (hold[i].id === id) {
          return pvg.success("Hold exists");
        }
      }
      return pvg.fail("Expected a hold to exist but it does not");
    },
    parameters: { description: "Verify hold with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyHoldDoesNotExist(id) {
  svc.get("/holds", {
    callback: function (response) {
      hold = JSON.parse(response.body);
      for (let i = 0; i < hold.length; i++) {
        if (hold[i].id === id) {
          return pvg.fail("Expected a hold to not exist but it does");
        }
      }
      return pvg.success("Hold does not exist");
    },
    parameters: { description: "Verify hold with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddHold() {
  return bp.EventSet("any-add-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a hold");
  });
}
function matchAddHold(id) {
  return bp.EventSet("add-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a hold with id " + id + "";
  });
}
function matchAnyDeleteHold() {
  return bp.EventSet("any-del-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a hold");
  });
}
function matchDeleteHold(id) {
  return bp.EventSet("del-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a hold with id " + id + "";
  });
}

// Wait helpers
function waitForAnyHoldAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ hold\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ hold\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForHoldAdded(id) {
  waitFor(matchAddHold(id));
}
function waitForHoldDeleted(id) {
  waitFor(matchDeleteHold(id));
}
function waitForAnyHoldDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ hold\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ hold\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Loan Operations === */

// CREATE
function addLoan(id) {
  svc.post("/loans", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a loan with id " + id + "" }
    });
}

// DELETE
function deleteLoan(id) {
  svc.delete("/loans/" + id, {
    parameters: { description: "Delete a loan with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLoan(id) {
  svc.delete("/loans/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a loan with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLoan(id) {
  svc.post("/loans", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a loan with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a loan with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateLoan(id) {
  svc.put("/loans/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a loan" }
    });
}

// GET one
function getLoan(id) {
  svc.get("/loans/" + id, {
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
function verifyLoanExists(id) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].id === id) {
          return pvg.success("Loan exists");
        }
      }
      return pvg.fail("Expected a loan to exist but it does not");
    },
    parameters: { description: "Verify loan with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLoanDoesNotExist(id) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].id === id) {
          return pvg.fail("Expected a loan to not exist but it does");
        }
      }
      return pvg.success("Loan does not exist");
    },
    parameters: { description: "Verify loan with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLoan() {
  return bp.EventSet("any-add-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a loan");
  });
}
function matchAddLoan(id) {
  return bp.EventSet("add-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a loan with id " + id + "";
  });
}
function matchAnyDeleteLoan() {
  return bp.EventSet("any-del-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a loan");
  });
}
function matchDeleteLoan(id) {
  return bp.EventSet("del-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a loan with id " + id + "";
  });
}

// Wait helpers
function waitForAnyLoanAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ loan\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ loan\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForLoanAdded(id) {
  waitFor(matchAddLoan(id));
}
function waitForLoanDeleted(id) {
  waitFor(matchDeleteLoan(id));
}
function waitForAnyLoanDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ loan\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ loan\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === User Operations === */

// CREATE
function addUser(id) {
  svc.post("/users", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with id " + id + "" }
    });
}

// DELETE
function deleteUser(id) {
  svc.delete("/users/" + id, {
    parameters: { description: "Delete a user with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(id) {
  svc.delete("/users/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(id) {
  svc.post("/users", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser(id) {
  svc.put("/users/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a user" }
    });
}

// GET one
function getUser(id) {
  svc.get("/users/" + id, {
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
function verifyUserExists(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with id " + id + "";
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with id " + id + "";
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserAdded(id) {
  waitFor(matchAddUser(id));
}
function waitForUserDeleted(id) {
  waitFor(matchDeleteUser(id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

