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

// ---- Entity: user ----

function createUser(id) {
  var url = "/users";
  var description = "Create a user with id " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] createUser");
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: { description: description }
  });
}

function deleteUser(id) {
  var url = "/users/" + id;
  var description = "Delete user with id " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteUser");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function listUsers(id) {
  var url = "/users";
  var description = "List/search users";
  var body = undefined;
  bp.log.info("[CALL] listUsers");
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUser(id) {
  var url = "/users";
  var body = {
    "id": String(id),
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(id) {
  var url = "/users";
  var description = "Verify User exists";
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

function verifyUserDoesNotExist(id) {
  var url = "/users";
  var description = "Verify User does not exist";
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

function tryToDeleteANonExistingUser(id) {
  var url = "/users/" + id;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(id) {
  var expectedDesc = "Create a user with id " + id;
  return bp.EventSet("matchAddedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ a\ user\ with\ id\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ a\ user\ with\ id\ (.+)$/);
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

function waitForUserAdded(id) {
  var expectedDesc = "Create a user with id " + id;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedUser(id) {
  var expectedDesc = "Delete user with id " + id;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ user\ with\ id\ (.+)$/)});
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

function createBook(id) {
  var url = "/books";
  var description = "Create a book with id " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] createBook");
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: { description: description }
  });
}

function deleteBook(id) {
  var url = "/books/" + id;
  var description = "Delete book with id " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteBook");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getBook(id) {
  var url = "/books/" + id;
  var description = "Get book with id " + id;
  var body = undefined;
  bp.log.info("[CALL] getBook");
  svc.get(url, {
    parameters: { description: description }
  });
}

function listBooks(id) {
  var url = "/books";
  var description = "List/search books";
  var body = undefined;
  bp.log.info("[CALL] listBooks");
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingBook(id) {
  var url = "/books";
  var body = {
    "id": String(id),
  };
  var description = "Verify that we cannot add another Book...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyBookExists(id) {
  var url = "/books";
  var description = "Verify Book exists";
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

function verifyBookDoesNotExist(id) {
  var url = "/books";
  var description = "Verify Book does not exist";
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

function tryToDeleteANonExistingBook(id) {
  var url = "/books/" + id;
  var description = "Verify we cannot delete non-existing Book";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedBook(id) {
  var expectedDesc = "Create a book with id " + id;
  return bp.EventSet("matchAddedBook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBookAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ a\ book\ with\ id\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ a\ book\ with\ id\ (.+)$/);
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

function waitForBookAdded(id) {
  var expectedDesc = "Create a book with id " + id;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedBook(id) {
  var expectedDesc = "Delete book with id " + id;
  return bp.EventSet("matchDeletedBook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBookDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ book\ with\ id\ (.+)$/)});
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

function createLoan(userId, bookId) {
  var url = "/loans";
  var description = "Create a loan with userId " + userId + " and bookId " + bookId;
  var body = {
    "userId": String(userId),
    "bookId": String(bookId),
  };
  bp.log.info("[CALL] createLoan");
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: { description: description }
  });
}

function deleteLoan(userId, bookId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete loan with userId " + userId + " and bookId " + bookId;
  var body = undefined;
  bp.log.info("[CALL] deleteLoan");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function listLoans(userId, bookId) {
  var url = "/loans";
  var description = "List/search loans";
  var body = undefined;
  bp.log.info("[CALL] listLoans");
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingLoan(userId, bookId) {
  var url = "/loans";
  var body = {
    "userId": String(userId),
    "bookId": String(bookId),
  };
  var description = "Verify that we cannot add another Loan...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyLoanExists(userId, bookId) {
  var url = "/loans";
  var description = "Verify Loan exists";
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

function verifyLoanDoesNotExist(userId, bookId) {
  var url = "/loans";
  var description = "Verify Loan does not exist";
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

function tryToDeleteANonExistingLoan(userId, bookId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Verify we cannot delete non-existing Loan";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedLoan(userId, bookId) {
  var expectedDesc = "Create a loan with userId " + userId + " and bookId " + bookId;
  return bp.EventSet("matchAddedLoan", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLoanAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ a\ loan\ with\ userId\ (.+)\ and\ bookId\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ a\ loan\ with\ userId\ (.+)\ and\ bookId\ (.+)$/);
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

function waitForLoanAdded(userId, bookId) {
  var expectedDesc = "Create a loan with userId " + userId + " and bookId " + bookId;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedLoan(userId, bookId) {
  var expectedDesc = "Delete loan with userId " + userId + " and bookId " + bookId;
  return bp.EventSet("matchDeletedLoan", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLoanDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ loan\ with\ userId\ (.+)\ and\ bookId\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ loan\ with\ userId\ (.+)\ and\ bookId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["userId", "bookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: hold ----

function createHold(id) {
  var url = "/holds";
  var description = "Create a hold with id " + id;
  var body = {
    "id": String(id),
  };
  bp.log.info("[CALL] createHold");
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: { description: description }
  });
}

function deleteHold(id) {
  var url = "/holds/" + id;
  var description = "Delete hold with id " + id;
  var body = undefined;
  bp.log.info("[CALL] deleteHold");
  svc.delete(url, {
    parameters: { description: description }
  });
}

function listHolds(id) {
  var url = "/holds";
  var description = "List holds";
  var body = undefined;
  bp.log.info("[CALL] listHolds");
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingHold(id) {
  var url = "/holds";
  var body = {
    "id": String(id),
  };
  var description = "Verify that we cannot add another Hold...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyHoldExists(id) {
  var url = "/holds";
  var description = "Verify Hold exists";
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

function verifyHoldDoesNotExist(id) {
  var url = "/holds";
  var description = "Verify Hold does not exist";
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

function tryToDeleteANonExistingHold(id) {
  var url = "/holds/" + id;
  var description = "Verify we cannot delete non-existing Hold";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedHold(id) {
  var expectedDesc = "Create a hold with id " + id;
  return bp.EventSet("matchAddedHold", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyHoldAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Create\ a\ hold\ with\ id\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Create\ a\ hold\ with\ id\ (.+)$/);
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

function waitForHoldAdded(id) {
  var expectedDesc = "Create a hold with id " + id;
  bp.sync({waitFor: matchesDescription(expectedDesc)});
}

function matchDeletedHold(id) {
  var expectedDesc = "Delete hold with id " + id;
  return bp.EventSet("matchDeletedHold", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyHoldDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/^Delete\ hold\ with\ id\ (.+)$/)});
  var m = ev.data.parameters.description.match(/^Delete\ hold\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
