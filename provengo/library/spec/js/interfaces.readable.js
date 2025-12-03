//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 5000;
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

function createUser(id, name, q) {
  var url = "/users";
  var description = "Create user " + id;
  var body = {
    "id": Number(id),
    "name": String(name),
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

function listUsers(id, name, q) {
  var url = "/users";
  var description = "List/search users with query " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteUser(id, name, q) {
  var url = "/users/" + id;
  var description = "Delete user " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 400, 404]
  });
}

function tryToAddExistingUser(id, name, q) {
  var url = "/users";
  var body = {
    "id": Number(id),
    "name": String(name),
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(id, name, q) {
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

function verifyUserDoesNotExist(id, name, q) {
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

function tryToDeleteANonExistingUser(id, name, q) {
  var url = "/users/" + id;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(id, name, q) {
  var expectedDesc = "Create user " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
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

function waitForUserAdded(id, name, q) {
  var expectedDesc = "Create user " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUser(id, name, q) {
  var expectedDesc = "Delete user " + id;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: book ----

function createBook(id, q, title) {
  var url = "/books";
  var description = "Create book " + id;
  var body = {
    "id": Number(id),
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

function listBooks(id, q, title) {
  var url = "/books";
  var description = "List/search books with query " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getBook(id, q, title) {
  var url = "/books/" + id;
  var description = "Get book by id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteBook(id, q, title) {
  var url = "/books/" + id;
  var description = "Delete book " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 400, 404]
  });
}

function tryToAddExistingBook(id, q, title) {
  var url = "/books";
  var body = {
    "id": Number(id),
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

function verifyBookExists(id, q, title) {
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

function verifyBookDoesNotExist(id, q, title) {
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

function tryToDeleteANonExistingBook(id, q, title) {
  var url = "/books/" + id;
  var description = "Verify we cannot delete non-existing Book";
  svc.delete(url, {
    expectedResponseCodes: [200, 204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedBook(id, q, title) {
  var expectedDesc = "Create book " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyBookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ book\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ book\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
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

function waitForBookAdded(id, q, title) {
  var expectedDesc = "Create book " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedBook(id, q, title) {
  var expectedDesc = "Delete book " + id;
  return bp.EventSet("matchDeletedBook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ book\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ book\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: loan ----

function createLoan(bookId, userId) {
  var url = "/loans";
  var description = "Create loan for user " + userId + " and book " + bookId;
  var body = {
    "bookId": Number(bookId),
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

function listLoans(bookId, userId) {
  var url = "/loans";
  var description = "List/search loans with userId " + userId + " and bookId " + bookId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteLoan(bookId, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete loan for user " + userId + " and book " + bookId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 404]
  });
}

function tryToAddExistingLoan(bookId, userId) {
  var url = "/loans";
  var body = {
    "bookId": Number(bookId),
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

function verifyLoanExists(bookId, userId) {
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

function verifyLoanDoesNotExist(bookId, userId) {
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

function tryToDeleteANonExistingLoan(bookId, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Verify we cannot delete non-existing Loan";
  svc.delete(url, {
    expectedResponseCodes: [200, 204, 404],
    parameters: { description: description }
  });
}

function matchAddedLoan(bookId, userId) {
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

function waitForLoanAdded(bookId, userId) {
  var expectedDesc = "Create loan for user " + userId + " and book " + bookId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedLoan(bookId, userId) {
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

function createHold(bookId, id, userId) {
  var url = "/holds";
  var description = "Create hold " + id;
  var body = {
    "bookId": Number(bookId),
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

function listHolds(bookId, id, userId) {
  var url = "/holds";
  var description = "List holds";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteHold(bookId, id, userId) {
  var url = "/holds/" + id;
  var description = "Delete hold " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingHold(bookId, id, userId) {
  var url = "/holds";
  var body = {
    "bookId": Number(bookId),
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

function verifyHoldExists(bookId, id, userId) {
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

function verifyHoldDoesNotExist(bookId, id, userId) {
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

function tryToDeleteANonExistingHold(bookId, id, userId) {
  var url = "/holds/" + id;
  var description = "Verify we cannot delete non-existing Hold";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedHold(bookId, id, userId) {
  var expectedDesc = "Create hold " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyHoldAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ hold\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ hold\ (.+)$/);
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

function waitForHoldAdded(bookId, id, userId) {
  var expectedDesc = "Create hold " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedHold(bookId, id, userId) {
  var expectedDesc = "Delete hold " + id;
  return bp.EventSet("matchDeletedHold", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyHoldDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ hold\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ hold\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
