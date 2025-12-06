//@provengo summon rest
// === Auto-generated interfaces.readable.js ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
function matchesDescriptionRegex(re) { return bp.EventSet("Match description", function (e) { return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description)); }); }
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Success Event", function(e) { return e.name === "Done: " + desc; }); }
// ---- Entity: user ----
function createUser(id, name) {
  bp.log.info("DEBUG INTERFACE createUser: called with args=" + JSON.stringify(arguments));
  var url = "/users";
  var description = "[User] Create a user with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteUser(id) {
  bp.log.info("DEBUG INTERFACE deleteUser: called with args=" + JSON.stringify(arguments));
  var url = "/users/" + id;
  var description = "[User] Delete user with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 400, 404],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function listUsers(id) {
  bp.log.info("DEBUG INTERFACE listUsers: called with args=" + JSON.stringify(arguments));
  var url = "/users";
  var description = "[listUsers] List/search users with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingUser(id, name) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingUser: called with args=" + JSON.stringify(arguments));
  var url = "/users";
  var description = "[tryToAddExistingUser] [User] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
}

function verifyUserExists(id, name) {
  var url = "/users";
  bp.log.info("DEBUG VERIFIER for User: Arguments=" + JSON.stringify(arguments));
  var description = "[User] Verify User with id " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof name !== "undefined" && String(items[i].name) !== String(name)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected User to exist but it does not");
    }
  });
}

function verifyUserDoesNotExist(id, name) {
  var url = "/users";
  var description = "[User] Verify User does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof name !== "undefined" && String(items[i].name) !== String(name)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    }
  });
}

function tryToDeleteANonExistingUser(id) {
  var url = "/users/" + id;
  var description = "[User] Verify we cannot delete non-existing User";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedUser(id, name) {
  return matchSuccess("[User] Create a user with id " + id);
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[User\]\ Create\ a\ user\ with\ id\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for User: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[User\]\ Create\ a\ user\ with\ id\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  obj["name"] = capturedMap["name"];
  return obj;
}

function matchAnyUserAdded() { return bp.EventSet("matchAnyUserAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[User]") > -1; }); }
function waitForUserAdded(id, name) { var expectedDesc = "[User] Create a user with id " + id; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedUser(id) {
  return bp.EventSet("matchDeletedUser", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[User] Delete user with id " + id); });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[User\]\ Delete\ user\ with\ id\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[User\]\ Delete\ user\ with\ id\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  obj["name"] = capturedMap["name"];
  return obj;
}

// ---- Entity: book ----
function createBook(id, title) {
  bp.log.info("DEBUG INTERFACE createBook: called with args=" + JSON.stringify(arguments));
  var url = "/books";
  var description = "[Book] Create a book with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description,
      id: String(id),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteBook(id) {
  bp.log.info("DEBUG INTERFACE deleteBook: called with args=" + JSON.stringify(arguments));
  var url = "/books/" + id;
  var description = "[Book] Delete book with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 400, 404],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function getBook(id) {
  bp.log.info("DEBUG INTERFACE getBook: called with args=" + JSON.stringify(arguments));
  var url = "/books/" + id;
  var description = "[Book] Get book with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function listBooks(id) {
  bp.log.info("DEBUG INTERFACE listBooks: called with args=" + JSON.stringify(arguments));
  var url = "/books";
  var description = "[listBooks] List/search books with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingBook(id, title) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingBook: called with args=" + JSON.stringify(arguments));
  var url = "/books";
  var description = "[tryToAddExistingBook] [Book] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
    }
  });
}

function verifyBookExists(id, title) {
  var url = "/books";
  bp.log.info("DEBUG VERIFIER for Book: Arguments=" + JSON.stringify(arguments));
  var description = "[Book] Verify Book with id " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof title !== "undefined" && String(items[i].title) !== String(title)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Book to exist but it does not");
    }
  });
}

function verifyBookDoesNotExist(id, title) {
  var url = "/books";
  var description = "[Book] Verify Book does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof title !== "undefined" && String(items[i].title) !== String(title)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Book does not exist");
    }
  });
}

function tryToDeleteANonExistingBook(id) {
  var url = "/books/" + id;
  var description = "[Book] Verify we cannot delete non-existing Book";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedBook(id, title) {
  return matchSuccess("[Book] Create a book with id " + id);
}

function waitForAnyBookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Book\]\ Create\ a\ book\ with\ id\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for Book: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[Book\]\ Create\ a\ book\ with\ id\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  obj["title"] = capturedMap["title"];
  return obj;
}

function matchAnyBookAdded() { return bp.EventSet("matchAnyBookAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[Book]") > -1; }); }
function waitForBookAdded(id, title) { var expectedDesc = "[Book] Create a book with id " + id; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedBook(id) {
  return bp.EventSet("matchDeletedBook", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[Book] Delete book with id " + id); });
}

function waitForAnyBookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Book\]\ Delete\ book\ with\ id\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[Book\]\ Delete\ book\ with\ id\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["id"] = capturedMap["id"];
  obj["title"] = capturedMap["title"];
  return obj;
}

// ---- Entity: loan ----
function createLoan(bookId, loanedAt, userId) {
  bp.log.info("DEBUG INTERFACE createLoan: called with args=" + JSON.stringify(arguments));
  var url = "/loans";
  var description = "[Loan] Create a loan with userId " + userId + " and bookId " + bookId;
  var body = {
    "userId": String(userId),
    "bookId": String(bookId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: { description: description,
      userId: String(userId),
      bookId: String(bookId),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { userId: String(userId) }) });
}

function deleteLoan(bookId, userId) {
  bp.log.info("DEBUG INTERFACE deleteLoan: called with args=" + JSON.stringify(arguments));
  var url = "/loans/" + userId + "/" + bookId;
  var description = "[Loan] Delete loan with userId " + userId + " and bookId " + bookId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 404],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function listLoans(userId) {
  bp.log.info("DEBUG INTERFACE listLoans: called with args=" + JSON.stringify(arguments));
  var url = "/loans";
  var description = "[listLoans] List/search loans with userId " + userId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingLoan(bookId, loanedAt, userId) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingLoan: called with args=" + JSON.stringify(arguments));
  var url = "/loans";
  var description = "[tryToAddExistingLoan] [Loan] Try Add Existing with userId " + userId;
  var body = {
    "userId": String(userId),
    "bookId": String(bookId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      userId: String(userId),
      bookId: String(bookId),
    }
  });
}

function verifyLoanExists(bookId, loanedAt, userId) {
  var url = "/loans";
  bp.log.info("DEBUG VERIFIER for Loan: Arguments=" + JSON.stringify(arguments));
  var description = "[Loan] Verify Loan with userId " + userId + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof bookId !== "undefined" && String(items[i].bookId) !== String(bookId)) match = false;
          if (typeof loanedAt !== "undefined" && String(items[i].loanedAt) !== String(loanedAt)) match = false;
          if (typeof userId !== "undefined" && String(items[i].userId) !== String(userId)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Loan to exist but it does not");
    }
  });
}

function verifyLoanDoesNotExist(bookId, loanedAt, userId) {
  var url = "/loans";
  var description = "[Loan] Verify Loan does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof bookId !== "undefined" && String(items[i].bookId) !== String(bookId)) match = false;
          if (typeof loanedAt !== "undefined" && String(items[i].loanedAt) !== String(loanedAt)) match = false;
          if (typeof userId !== "undefined" && String(items[i].userId) !== String(userId)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Loan does not exist");
    }
  });
}

function tryToDeleteANonExistingLoan(bookId, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "[Loan] Verify we cannot delete non-existing Loan";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedLoan(bookId, loanedAt, userId) {
  return matchSuccess("[Loan] Create a loan with userId " + userId + " and bookId " + bookId);
}

function waitForAnyLoanAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Loan\]\ Create\ a\ loan\ with\ userId\ (.*?)\ and\ bookId\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for Loan: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[Loan\]\ Create\ a\ loan\ with\ userId\ (.*?)\ and\ bookId\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["userId", "bookId"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["bookId"] = capturedMap["bookId"];
  obj["loanedAt"] = capturedMap["loanedAt"];
  obj["userId"] = capturedMap["userId"];
  return obj;
}

function matchAnyLoanAdded() { return bp.EventSet("matchAnyLoanAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[Loan]") > -1; }); }
function waitForLoanAdded(bookId, loanedAt, userId) { var expectedDesc = "[Loan] Create a loan with userId " + userId + " and bookId " + bookId; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedLoan(bookId, userId) {
  return bp.EventSet("matchDeletedLoan", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[Loan] Delete loan with userId " + userId + " and bookId " + bookId); });
}

function waitForAnyLoanDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Loan\]\ Delete\ loan\ with\ userId\ (.*?)\ and\ bookId\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[Loan\]\ Delete\ loan\ with\ userId\ (.*?)\ and\ bookId\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["userId", "bookId"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["bookId"] = capturedMap["bookId"];
  obj["loanedAt"] = capturedMap["loanedAt"];
  obj["userId"] = capturedMap["userId"];
  return obj;
}

// ---- Entity: hold ----
function createHold(bookId, id, userId) {
  bp.log.info("DEBUG INTERFACE createHold: called with args=" + JSON.stringify(arguments));
  var url = "/holds";
  var description = "[Hold] Create a hold with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description,
      id: String(id),
      bookId: String(bookId),
      userId: String(userId),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteHold(id) {
  bp.log.info("DEBUG INTERFACE deleteHold: called with args=" + JSON.stringify(arguments));
  var url = "/holds/" + id;
  var description = "[Hold] Delete hold with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function listHolds(id) {
  bp.log.info("DEBUG INTERFACE listHolds: called with args=" + JSON.stringify(arguments));
  var url = "/holds";
  var description = "[listHolds] List holds with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingHold(bookId, id, userId) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingHold: called with args=" + JSON.stringify(arguments));
  var url = "/holds";
  var description = "[tryToAddExistingHold] [Hold] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
      bookId: String(bookId),
      userId: String(userId),
    }
  });
}

function verifyHoldExists(bookId, id, userId) {
  var url = "/holds";
  bp.log.info("DEBUG VERIFIER for Hold: Arguments=" + JSON.stringify(arguments));
  var description = "[Hold] Verify Hold with id " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof bookId !== "undefined" && String(items[i].bookId) !== String(bookId)) match = false;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof userId !== "undefined" && String(items[i].userId) !== String(userId)) match = false;
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Hold to exist but it does not");
    }
  });
}

function verifyHoldDoesNotExist(bookId, id, userId) {
  var url = "/holds";
  var description = "[Hold] Verify Hold does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results && Array.isArray(items.results)) { items = items.results; }
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          if (typeof bookId !== "undefined" && String(items[i].bookId) !== String(bookId)) match = false;
          if (typeof id !== "undefined" && String(items[i].id) !== String(id)) match = false;
          if (typeof userId !== "undefined" && String(items[i].userId) !== String(userId)) match = false;
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Hold does not exist");
    }
  });
}

function tryToDeleteANonExistingHold(id) {
  var url = "/holds/" + id;
  var description = "[Hold] Verify we cannot delete non-existing Hold";
  svc.delete(url, { expectedResponseCodes: [200, 204, 404], parameters: { description: description } });
}

function matchAddedHold(bookId, id, userId) {
  return matchSuccess("[Hold] Create a hold with id " + id);
}

function waitForAnyHoldAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Hold\]\ Create\ a\ hold\ with\ id\ (.*?)$/));
  if (ev && ev.data && ev.data.parameters && ev.data.parameters.description) { bp.log.info("DEBUG MATCHER for Hold: Matched event: " + ev.data.parameters.description); }
  var m = ev.data.parameters.description.match(/^\[Hold\]\ Create\ a\ hold\ with\ id\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["bookId"] = capturedMap["bookId"];
  obj["id"] = capturedMap["id"];
  obj["userId"] = capturedMap["userId"];
  return obj;
}

function matchAnyHoldAdded() { return bp.EventSet("matchAnyHoldAdded", function(e) { return e.name.startsWith("Done: ") && e.name.indexOf("[Hold]") > -1; }); }
function waitForHoldAdded(bookId, id, userId) { var expectedDesc = "[Hold] Create a hold with id " + id; waitFor(matchSuccess(expectedDesc)); }

function matchDeletedHold(id) {
  return bp.EventSet("matchDeletedHold", function(e) { return !!(e.data && e.data.parameters && e.data.parameters.description === "[Hold] Delete hold with id " + id); });
}

function waitForAnyHoldDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^\[Hold\]\ Delete\ hold\ with\ id\ (.*?)$/));
  var m = ev.data.parameters.description.match(/^\[Hold\]\ Delete\ hold\ with\ id\ (.*?)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var capturedMap = {};
  for (var i = 0; i < names.length; i++) { capturedMap[names[i]] = (i < captures.length) ? captures[i] : undefined; }
  var obj = {};
  obj["bookId"] = capturedMap["bookId"];
  obj["id"] = capturedMap["id"];
  obj["userId"] = capturedMap["userId"];
  return obj;
}
