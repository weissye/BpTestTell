//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));
  });
}

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);
  });
}

function waitFor(eventSet) {
  return bp.sync({waitFor: eventSet});
}

function matchSuccess(desc) {
  return bp.EventSet("Success Event", function(e) {
    return e.name === "Done: " + desc;
  });
}

// ---- Entity: user ----

function createUser(email, id, name, password, q) {
  var url = "/users";
  var description = "Create user " + name + " with id " + id;
  var body = {
    "email": String(email),
    "id": Number(id),
    "name": String(name),
    "password": String(password),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteUser(email, id, name, password, q) {
  var url = "/users/" + id;
  var description = "Delete user with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function listUsers(email, id, name, password, q) {
  var url = "/users";
  var description = "List/search users with query " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingUser(email, id, name, password, q) {
  var url = "/users";
  var body = {
    "email": String(email),
    "id": Number(id),
    "name": String(name),
    "password": String(password),
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(email, id, name, password, q) {
  var url = "/users";
  var description = "Verify User with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("User exists");
          }
        }
      }
      return pvg.fail("Expected User to exist but it does not");
    }
  });
}

function verifyUserDoesNotExist(email, id, name, password, q) {
  var url = "/users";
  var description = "Verify User with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected User to not exist but it does");
          }
        }
      }
      return pvg.success("User does not exist");
    }
  });
}

function tryToDeleteANonExistingUser(email, id, name, password, q) {
  var url = "/users/" + id;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(email, id, name, password, q) {
  var expectedDesc = "Create user " + name + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserAddedEvent(keyVal) {
  return bp.EventSet("AddUser:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserAdded() {
  return bp.EventSet("matchAnyUserAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create user") > -1;
  });
}

function waitForUserAdded(email, id, name, password, q) {
  var expectedDesc = "Create user " + name + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUser(email, id, name, password, q) {
  var expectedDesc = "Delete user with id " + id;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: book ----

function createBook(author, id, isbn, q, title) {
  var url = "/books";
  var description = "Create book " + title + " with id " + id;
  var body = {
    "author": String(author),
    "id": Number(id),
    "isbn": String(isbn),
    "title": String(title),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getBook(author, id, isbn, q, title) {
  var url = "/books/" + id;
  var description = "Get book with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteBook(author, id, isbn, q, title) {
  var url = "/books/" + id;
  var description = "Delete book with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function listBooks(author, id, isbn, q, title) {
  var url = "/books";
  var description = "List/search books with query " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingBook(author, id, isbn, q, title) {
  var url = "/books";
  var body = {
    "author": String(author),
    "id": Number(id),
    "isbn": String(isbn),
    "title": String(title),
  };
  var description = "Verify that we cannot add another Book...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyBookExists(author, id, isbn, q, title) {
  var url = "/books";
  var description = "Verify Book with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Book exists");
          }
        }
      }
      return pvg.fail("Expected Book to exist but it does not");
    }
  });
}

function verifyBookDoesNotExist(author, id, isbn, q, title) {
  var url = "/books";
  var description = "Verify Book with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Book to not exist but it does");
          }
        }
      }
      return pvg.success("Book does not exist");
    }
  });
}

function tryToDeleteANonExistingBook(author, id, isbn, q, title) {
  var url = "/books/" + id;
  var description = "Verify we cannot delete non-existing Book";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedBook(author, id, isbn, q, title) {
  var expectedDesc = "Create book " + title + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyBookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ book\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ book\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["title", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBookAddedEvent(keyVal) {
  return bp.EventSet("AddBook:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyBookAdded() {
  return bp.EventSet("matchAnyBookAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create book") > -1;
  });
}

function waitForBookAdded(author, id, isbn, q, title) {
  var expectedDesc = "Create book " + title + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedBook(author, id, isbn, q, title) {
  var expectedDesc = "Delete book with id " + id;
  return bp.EventSet("matchDeletedBook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ book\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ book\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: loan ----

function createLoan(bookId, dueDate, loanDate, userId) {
  var url = "/loans";
  var description = "Create loan for user " + userId + " and book " + bookId;
  var body = {
    "bookId": Number(bookId),
    "dueDate": String(dueDate),
    "loanDate": String(loanDate),
    "userId": Number(userId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      userId: String(userId)
      , bookId: String(bookId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { userId: String(userId) }) });
}

function deleteLoan(bookId, dueDate, loanDate, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete loan for user " + userId + " and book " + bookId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function listLoans(bookId, dueDate, loanDate, userId) {
  var url = "/loans";
  var description = "List/search loans for user " + userId + " and book " + bookId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingLoan(bookId, dueDate, loanDate, userId) {
  var url = "/loans";
  var body = {
    "bookId": Number(bookId),
    "dueDate": String(dueDate),
    "loanDate": String(loanDate),
    "userId": Number(userId),
  };
  var description = "Verify that we cannot add another Loan...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyLoanExists(bookId, dueDate, loanDate, userId) {
  var url = "/loans";
  var description = "Verify Loan with userId " + userId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].userId) === String(userId)) {
            return pvg.success("Loan exists");
          }
        }
      }
      return pvg.fail("Expected Loan to exist but it does not");
    }
  });
}

function verifyLoanDoesNotExist(bookId, dueDate, loanDate, userId) {
  var url = "/loans";
  var description = "Verify Loan with userId " + userId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].userId) === String(userId)) {
            return pvg.fail("Expected Loan to not exist but it does");
          }
        }
      }
      return pvg.success("Loan does not exist");
    }
  });
}

function tryToDeleteANonExistingLoan(bookId, dueDate, loanDate, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Verify we cannot delete non-existing Loan";
  svc.delete(url, {
    expectedResponseCodes: [200, 404],
    parameters: { description: description }
  });
}

function matchAddedLoan(bookId, dueDate, loanDate, userId) {
  var expectedDesc = "Create loan for user " + userId + " and book " + bookId;
  return matchSuccess(expectedDesc);
}

function waitForAnyLoanAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ loan\ for\ user\ (.+)\ and\ book\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ loan\ for\ user\ (.+)\ and\ book\ (.+)$/);
  var captures = m.slice(1);
  var names = ["userId", "bookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getLoanAddedEvent(keyVal) {
  return bp.EventSet("AddLoan:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.userId) === String(keyVal);
  });
}

function matchAnyLoanAdded() {
  return bp.EventSet("matchAnyLoanAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.userId !== undefined && e.name.indexOf("Create loan") > -1;
  });
}

function waitForLoanAdded(bookId, dueDate, loanDate, userId) {
  var expectedDesc = "Create loan for user " + userId + " and book " + bookId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedLoan(bookId, dueDate, loanDate, userId) {
  var expectedDesc = "Delete loan for user " + userId + " and book " + bookId;
  return bp.EventSet("matchDeletedLoan", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLoanDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ loan\ for\ user\ (.+)\ and\ book\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ loan\ for\ user\ (.+)\ and\ book\ (.+)$/);
  var captures = m.slice(1);
  var names = ["userId", "bookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: hold ----

function createHold(bookId, holdDate, id, userId) {
  var url = "/holds";
  var description = "Create hold with id " + id;
  var body = {
    "bookId": Number(bookId),
    "holdDate": String(holdDate),
    "id": Number(id),
    "userId": Number(userId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      id: String(id)
      , bookId: String(bookId)
      , userId: String(userId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteHold(bookId, holdDate, id, userId) {
  var url = "/holds/" + id;
  var description = "Delete hold with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listHolds(bookId, holdDate, id, userId) {
  var url = "/holds";
  var description = "List holds";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingHold(bookId, holdDate, id, userId) {
  var url = "/holds";
  var body = {
    "bookId": Number(bookId),
    "holdDate": String(holdDate),
    "id": Number(id),
    "userId": Number(userId),
  };
  var description = "Verify that we cannot add another Hold...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyHoldExists(bookId, holdDate, id, userId) {
  var url = "/holds";
  var description = "Verify Hold with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Hold exists");
          }
        }
      }
      return pvg.fail("Expected Hold to exist but it does not");
    }
  });
}

function verifyHoldDoesNotExist(bookId, holdDate, id, userId) {
  var url = "/holds";
  var description = "Verify Hold with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Hold to not exist but it does");
          }
        }
      }
      return pvg.success("Hold does not exist");
    }
  });
}

function tryToDeleteANonExistingHold(bookId, holdDate, id, userId) {
  var url = "/holds/" + id;
  var description = "Verify we cannot delete non-existing Hold";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedHold(bookId, holdDate, id, userId) {
  var expectedDesc = "Create hold with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyHoldAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ hold\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ hold\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getHoldAddedEvent(keyVal) {
  return bp.EventSet("AddHold:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyHoldAdded() {
  return bp.EventSet("matchAnyHoldAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create hold") > -1;
  });
}

function waitForHoldAdded(bookId, holdDate, id, userId) {
  var expectedDesc = "Create hold with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedHold(bookId, holdDate, id, userId) {
  var expectedDesc = "Delete hold with id " + id;
  return bp.EventSet("matchDeletedHold", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyHoldDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ hold\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ hold\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
