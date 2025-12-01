//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
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

// ---- Entity: user ----

function createUser(id, name) {
  var url = "/users";
  var description = "Create user " + name + " with id " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function deleteUser(id, name) {
  var url = "/users/" + id;
  var description = "Delete user with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUser(id, name) {
  var url = "/users";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(id, name) {
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

function verifyUserDoesNotExist(id, name) {
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

function tryToDeleteANonExistingUser(id, name) {
  var url = "/users/" + id;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(id, name) {
  var expectedDesc = "Create user " + name + " with id " + id;
  return bp.EventSet("matchAddedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForUserAdded(id, name) {
  var expectedDesc = "Create user " + name + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUser(id, name) {
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

function createBook(id, title) {
  var url = "/books";
  var description = "Create book " + title + " with id " + id;
  var body = {
    "id": String(id),
    "title": String(title),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function getBook(id, title) {
  var url = "/books/" + id;
  var description = "Get book with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function deleteBook(id, title) {
  var url = "/books/" + id;
  var description = "Delete book with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingBook(id, title) {
  var url = "/books";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Book...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyBookExists(id, title) {
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

function verifyBookDoesNotExist(id, title) {
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

function tryToDeleteANonExistingBook(id, title) {
  var url = "/books/" + id;
  var description = "Verify we cannot delete non-existing Book";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedBook(id, title) {
  var expectedDesc = "Create book " + title + " with id " + id;
  return bp.EventSet("matchAddedBook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create book") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForBookAdded(id, title) {
  var expectedDesc = "Create book " + title + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedBook(id, title) {
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

function createLoan(bookId, userId) {
  var url = "/loans";
  var description = "Create loan for userId " + userId + " and bookId " + bookId;
  var body = {
    "userId": String(userId),
    "bookId": String(bookId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      userId: String(userId)
      , bookId: String(bookId)
    }
  });
}

function deleteLoan(bookId, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete loan for userId " + userId + " and bookId " + bookId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingLoan(bookId, userId) {
  var url = "/loans";
  var body = {
    "userId": String(userId)
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

function verifyLoanDoesNotExist(bookId, userId) {
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

function tryToDeleteANonExistingLoan(bookId, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Verify we cannot delete non-existing Loan";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedLoan(bookId, userId) {
  var expectedDesc = "Create loan for userId " + userId + " and bookId " + bookId;
  return bp.EventSet("matchAddedLoan", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLoanAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ loan\ for\ userId\ (.+)\ and\ bookId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ loan\ for\ userId\ (.+)\ and\ bookId\ (.+)$/);
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create loan") > -1 && e.data.parameters.userId !== undefined);
  });
}

function waitForLoanAdded(bookId, userId) {
  var expectedDesc = "Create loan for userId " + userId + " and bookId " + bookId;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedLoan(bookId, userId) {
  var expectedDesc = "Delete loan for userId " + userId + " and bookId " + bookId;
  return bp.EventSet("matchDeletedLoan", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLoanDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ loan\ for\ userId\ (.+)\ and\ bookId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ loan\ for\ userId\ (.+)\ and\ bookId\ (.+)$/);
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
  var description = "Create hold with id " + id + " for userId " + userId + " and bookId " + bookId;
  var body = {
    "id": String(id),
    "userId": String(userId),
    "bookId": String(bookId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , bookId: String(bookId)
      , userId: String(userId)
    }
  });
}

function deleteHold(bookId, id, userId) {
  var url = "/holds/" + id;
  var description = "Delete hold with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingHold(bookId, id, userId) {
  var url = "/holds";
  var body = {
    "id": String(id)
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

function verifyHoldDoesNotExist(bookId, id, userId) {
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

function tryToDeleteANonExistingHold(bookId, id, userId) {
  var url = "/holds/" + id;
  var description = "Verify we cannot delete non-existing Hold";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedHold(bookId, id, userId) {
  var expectedDesc = "Create hold with id " + id + " for userId " + userId + " and bookId " + bookId;
  return bp.EventSet("matchAddedHold", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyHoldAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ hold\ with\ id\ (.+)\ for\ userId\ (.+)\ and\ bookId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ hold\ with\ id\ (.+)\ for\ userId\ (.+)\ and\ bookId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "userId", "bookId"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create hold") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForHoldAdded(bookId, id, userId) {
  var expectedDesc = "Create hold with id " + id + " for userId " + userId + " and bookId " + bookId;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedHold(bookId, id, userId) {
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
