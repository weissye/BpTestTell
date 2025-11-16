//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 */

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;

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
  svc.post("/books", { body: JSON.stringify({ id: id }), parameters: { description: "Add a book with " + "id " + id } });
}

// DELETE
function deleteBook(id) {
  svc.delete("/books/" + id, {
    parameters: { description: "Delete a book with " + "id " + id }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingBook(id) {
  svc.delete("/books/" + id, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a book with " + "id " + id }
  });
}

// Negative: create existing (codes from spec/defaults)
function tryToAddExistingBook(id) {
  svc.post("/books", {
    body: JSON.stringify({ id: id }),
    parameters: { description: "Add a book with " + "id " + id },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateBook(id) {
  svc.put("/books/" + id, { body: JSON.stringify({ id: id }), parameters: { description: "Update a book with " + "id " + id } });
}

// GET one
function getBook(id) {
  svc.get("/books/" + id, {
    parameters: { description: "Get a book with " + "id " + id }
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
    parameters: { description: "Verify book with " + "id " + id + " exists" }
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
    parameters: { description: "Verify book with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a book with " + "id " + id;
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
    return e.data.parameters.description === "Delete a book with " + "id " + id;
  });
}

// UPDATE passive helpers
function matchAnyUpdateBook() {
  return bp.EventSet("any-update-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a book");
  });
}
function matchUpdateBook(id) {
  return bp.EventSet("update-book", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a book with " + "id " + id;
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
function waitForAnyBookDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ book\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ book\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForBookDeleted(id) {
  waitFor(matchDeleteBook(id));
}
function waitForAnyBookUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ book\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ book\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForBookUpdated(id) {
  waitFor(matchUpdateBook(id));
}

// Verify updated (presence-by-list)
function verifyBookUpdated(id) {
  svc.get("/books", {
    callback: function (response) {
      book = JSON.parse(response.body);
      for (let i = 0; i < book.length; i++) {
        if (book[i].id === id) {
          return pvg.success("Book updated (present)");
        }
      }
      return pvg.fail("Expected a book to be present after update, but it is not");
    },
    parameters: { description: "Verify book with " + "id " + id + " exists" }
  });
}


/** === Hold Operations === */

// CREATE
function addHold(hold_id, userId, bookId) {
  svc.post("/holds", { body: JSON.stringify({ hold_id: hold_id, userId: userId, bookId: bookId }), parameters: { description: "Add a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId } });
}

// DELETE
function deleteHold(hold_id, userId, bookId) {
  svc.delete("/holds/" + hold_id + "/"+ userId + "/"+ bookId, {
    parameters: { description: "Delete a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingHold(hold_id, userId, bookId) {
  svc.delete("/holds/" + hold_id + "/"+ userId + "/"+ bookId, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId }
  });
}

// Negative: create existing (codes from spec/defaults)
function tryToAddExistingHold(hold_id, userId, bookId) {
  svc.post("/holds", {
    body: JSON.stringify({ hold_id: hold_id, userId: userId, bookId: bookId }),
    parameters: { description: "Add a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateHold(hold_id, userId, bookId) {
  svc.put("/holds/" + hold_id + "/"+ userId + "/"+ bookId, { body: JSON.stringify({ hold_id: hold_id, userId: userId, bookId: bookId }), parameters: { description: "Update a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId } });
}

// GET one
function getHold(hold_id, userId, bookId) {
  svc.get("/holds/" + hold_id + "/"+ userId + "/"+ bookId, {
    parameters: { description: "Get a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId }
  });
}

// LIST all
function listHolds() {
  svc.get("/holds", {
    parameters: { description: "List holds" }
  });
}

// Verify exists (by list)
function verifyHoldExists(hold_id, userId, bookId) {
  svc.get("/holds", {
    callback: function (response) {
      hold = JSON.parse(response.body);
      for (let i = 0; i < hold.length; i++) {
        if (hold[i].hold_id === hold_id && hold[i].userId === userId && hold[i].bookId === bookId) {
          return pvg.success("Hold exists");
        }
      }
      return pvg.fail("Expected a hold to exist but it does not");
    },
    parameters: { description: "Verify hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyHoldDoesNotExist(hold_id, userId, bookId) {
  svc.get("/holds", {
    callback: function (response) {
      hold = JSON.parse(response.body);
      for (let i = 0; i < hold.length; i++) {
        if (hold[i].hold_id === hold_id && hold[i].userId === userId && hold[i].bookId === bookId) {
          return pvg.fail("Expected a hold to not exist but it does");
        }
      }
      return pvg.success("Hold does not exist");
    },
    parameters: { description: "Verify hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddHold() {
  return bp.EventSet("any-add-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a hold");
  });
}
function matchAddHold(hold_id, userId, bookId) {
  return bp.EventSet("add-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId;
  });
}
function matchAnyDeleteHold() {
  return bp.EventSet("any-del-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a hold");
  });
}
function matchDeleteHold(hold_id, userId, bookId) {
  return bp.EventSet("del-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId;
  });
}

// UPDATE passive helpers
function matchAnyUpdateHold() {
  return bp.EventSet("any-update-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a hold");
  });
}
function matchUpdateHold(hold_id, userId, bookId) {
  return bp.EventSet("update-hold", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId;
  });
}

// Wait helpers
function waitForAnyHoldAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ hold\ with\ hold_id\ (.+) and userId\ (.+) and bookId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ hold\ with\ hold_id\ (.+) and userId\ (.+) and bookId\ (.+)$/);
    return { hold_id: parseInt(m[1]), userId: m[2], bookId: m[3] };
}
function waitForHoldAdded(hold_id, userId, bookId) {
  waitFor(matchAddHold(hold_id, userId, bookId));
}
function waitForAnyHoldDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ hold\ with\ hold_id\ (.+) and userId\ (.+) and bookId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ hold\ with\ hold_id\ (.+) and userId\ (.+) and bookId\ (.+)$/);
    return { hold_id: parseInt(m[1]), userId: m[2], bookId: m[3] };
}
function waitForHoldDeleted(hold_id, userId, bookId) {
  waitFor(matchDeleteHold(hold_id, userId, bookId));
}
function waitForAnyHoldUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ hold\ with\ hold_id\ (.+) and userId\ (.+) and bookId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ hold\ with\ hold_id\ (.+) and userId\ (.+) and bookId\ (.+)$/);
    return { hold_id: parseInt(m[1]), userId: m[2], bookId: m[3] };
}
function waitForHoldUpdated(hold_id, userId, bookId) {
  waitFor(matchUpdateHold(hold_id, userId, bookId));
}

// Verify updated (presence-by-list)
function verifyHoldUpdated(hold_id, userId, bookId) {
  svc.get("/holds", {
    callback: function (response) {
      hold = JSON.parse(response.body);
      for (let i = 0; i < hold.length; i++) {
        if (hold[i].hold_id === hold_id && hold[i].userId === userId && hold[i].bookId === bookId) {
          return pvg.success("Hold updated (present)");
        }
      }
      return pvg.fail("Expected a hold to be present after update, but it is not");
    },
    parameters: { description: "Verify hold with " + "hold_id " + hold_id + " and " + "userId " + userId + " and " + "bookId " + bookId + " exists" }
  });
}


/** === Loan Operations === */

// CREATE
function addLoan(userId, bookId) {
  svc.post("/loans", { body: JSON.stringify({ userId: userId, bookId: bookId }), parameters: { description: "Add a loan with " + "userId " + userId + " and " + "bookId " + bookId } });
}

// DELETE
function deleteLoan(userId, bookId) {
  svc.delete("/loans/" + userId + "/"+ bookId, {
    parameters: { description: "Delete a loan with " + "userId " + userId + " and " + "bookId " + bookId }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingLoan(userId, bookId) {
  svc.delete("/loans/" + userId + "/"+ bookId, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a loan with " + "userId " + userId + " and " + "bookId " + bookId }
  });
}

// Negative: create existing (codes from spec/defaults)
function tryToAddExistingLoan(userId, bookId) {
  svc.post("/loans", {
    body: JSON.stringify({ userId: userId, bookId: bookId }),
    parameters: { description: "Add a loan with " + "userId " + userId + " and " + "bookId " + bookId },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateLoan(userId, bookId) {
  svc.put("/loans/" + userId + "/"+ bookId, { body: JSON.stringify({ userId: userId, bookId: bookId }), parameters: { description: "Update a loan with " + "userId " + userId + " and " + "bookId " + bookId } });
}

// GET one
function getLoan(userId, bookId) {
  svc.get("/loans/" + userId + "/"+ bookId, {
    parameters: { description: "Get a loan with " + "userId " + userId + " and " + "bookId " + bookId }
  });
}

// LIST all
function listLoans() {
  svc.get("/loans", {
    parameters: { description: "List loans" }
  });
}

// Verify exists (by list)
function verifyLoanExists(userId, bookId) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].userId === userId && loan[i].bookId === bookId) {
          return pvg.success("Loan exists");
        }
      }
      return pvg.fail("Expected a loan to exist but it does not");
    },
    parameters: { description: "Verify loan with " + "userId " + userId + " and " + "bookId " + bookId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLoanDoesNotExist(userId, bookId) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].userId === userId && loan[i].bookId === bookId) {
          return pvg.fail("Expected a loan to not exist but it does");
        }
      }
      return pvg.success("Loan does not exist");
    },
    parameters: { description: "Verify loan with " + "userId " + userId + " and " + "bookId " + bookId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLoan() {
  return bp.EventSet("any-add-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a loan");
  });
}
function matchAddLoan(userId, bookId) {
  return bp.EventSet("add-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a loan with " + "userId " + userId + " and " + "bookId " + bookId;
  });
}
function matchAnyDeleteLoan() {
  return bp.EventSet("any-del-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a loan");
  });
}
function matchDeleteLoan(userId, bookId) {
  return bp.EventSet("del-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a loan with " + "userId " + userId + " and " + "bookId " + bookId;
  });
}

// UPDATE passive helpers
function matchAnyUpdateLoan() {
  return bp.EventSet("any-update-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a loan");
  });
}
function matchUpdateLoan(userId, bookId) {
  return bp.EventSet("update-loan", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a loan with " + "userId " + userId + " and " + "bookId " + bookId;
  });
}

// Wait helpers
function waitForAnyLoanAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ loan\ with\ userId\ (.+) and bookId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ loan\ with\ userId\ (.+) and bookId\ (.+)$/);
    return { userId: m[1], bookId: m[2] };
}
function waitForLoanAdded(userId, bookId) {
  waitFor(matchAddLoan(userId, bookId));
}
function waitForAnyLoanDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ loan\ with\ userId\ (.+) and bookId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ loan\ with\ userId\ (.+) and bookId\ (.+)$/);
    return { userId: m[1], bookId: m[2] };
}
function waitForLoanDeleted(userId, bookId) {
  waitFor(matchDeleteLoan(userId, bookId));
}
function waitForAnyLoanUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ loan\ with\ userId\ (.+) and bookId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ loan\ with\ userId\ (.+) and bookId\ (.+)$/);
    return { userId: m[1], bookId: m[2] };
}
function waitForLoanUpdated(userId, bookId) {
  waitFor(matchUpdateLoan(userId, bookId));
}

// Verify updated (presence-by-list)
function verifyLoanUpdated(userId, bookId) {
  svc.get("/loans", {
    callback: function (response) {
      loan = JSON.parse(response.body);
      for (let i = 0; i < loan.length; i++) {
        if (loan[i].userId === userId && loan[i].bookId === bookId) {
          return pvg.success("Loan updated (present)");
        }
      }
      return pvg.fail("Expected a loan to be present after update, but it is not");
    },
    parameters: { description: "Verify loan with " + "userId " + userId + " and " + "bookId " + bookId + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(id) {
  svc.post("/users", { body: JSON.stringify({ id: id }), parameters: { description: "Add a user with " + "id " + id } });
}

// DELETE
function deleteUser(id) {
  svc.delete("/users/" + id, {
    parameters: { description: "Delete a user with " + "id " + id }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingUser(id) {
  svc.delete("/users/" + id, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a user with " + "id " + id }
  });
}

// Negative: create existing (codes from spec/defaults)
function tryToAddExistingUser(id) {
  svc.post("/users", {
    body: JSON.stringify({ id: id }),
    parameters: { description: "Add a user with " + "id " + id },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateUser(id) {
  svc.put("/users/" + id, { body: JSON.stringify({ id: id }), parameters: { description: "Update a user with " + "id " + id } });
}

// GET one
function getUser(id) {
  svc.get("/users/" + id, {
    parameters: { description: "Get a user with " + "id " + id }
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
    parameters: { description: "Verify user with " + "id " + id + " exists" }
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
    parameters: { description: "Verify user with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a user with " + "id " + id;
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
    return e.data.parameters.description === "Delete a user with " + "id " + id;
  });
}

// UPDATE passive helpers
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(id) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "id " + id;
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
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserDeleted(id) {
  waitFor(matchDeleteUser(id));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserUpdated(id) {
  waitFor(matchUpdateUser(id));
}

// Verify updated (presence-by-list)
function verifyUserUpdated(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "id " + id + " exists" }
  });
}

