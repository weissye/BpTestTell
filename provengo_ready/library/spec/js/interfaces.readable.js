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
  var description = "Create a user with id " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  bp.log.info("DEBUG INTERFACE createUser: Sending Body=" + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description,
      id: String(id),
      name: String(name),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteUser(id) {
  bp.log.info("DEBUG INTERFACE deleteUser: called with args=" + JSON.stringify(arguments));
  var url = "/users/" + id;
  var description = "Delete user with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 400, 404],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function listUsers(id) {
  bp.log.info("DEBUG INTERFACE listUsers: called with args=" + JSON.stringify(arguments));
  var url = "/users";
  var description = "List/search users with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingUser(id, name) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingUser: called with args=" + JSON.stringify(arguments));
  var url = "/users";
  var description = "[User] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
    "name": String(name),
  };
  bp.log.info("DEBUG INTERFACE tryToAddExistingUser: Sending Body=" + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
      name: String(name),
    }
  });
}

function verifyUserExists(id, name) {
  var url = "/users";
  bp.log.info("DEBUG VERIFIER for User: Arguments=" + JSON.stringify(arguments));
  var description = "Verify User exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results) items = items.results;
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));
          if (typeof id !== "undefined") {
             if (String(items[i].id) !== String(id)) { match = false; bp.log.info("  Mismatch id: " + items[i].id + " != " + id); }
          }
          if (typeof name !== "undefined") {
             if (String(items[i].name) !== String(name)) { match = false; bp.log.info("  Mismatch name: " + items[i].name + " != " + name); }
          }
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
      if (items.results) items = items.results;
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));
          if (typeof id !== "undefined") {
             if (String(items[i].id) !== String(id)) { match = false; bp.log.info("  Mismatch id: " + items[i].id + " != " + id); }
          }
          if (typeof name !== "undefined") {
             if (String(items[i].name) !== String(name)) { match = false; bp.log.info("  Mismatch name: " + items[i].name + " != " + name); }
          }
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    }
  });
}

function tryToDeleteANonExistingUser(id) {
   deleteUser(id);
}

function matchDeletedUser(id) { return bp.EventSet("Del", function(e){ return e.name.includes("Delete"); }); }
function waitForAnyUserDeleted() { return bp.sync({waitFor: bp.EventSet("AnyDel", function(e){ return e.name.includes("Delete"); }) }); }

function matchAddedUser(id, name) { return bp.EventSet("Add", function(e){ return e.name.includes("Create"); }); }
function waitForAnyUserAdded() {
   var e = bp.sync({waitFor: bp.EventSet("AnyAdd", function(e){ return e.name.includes("Create"); }) });
   return e.data;
}
function waitForUserAdded(id, name) { return bp.sync({waitFor: matchAddedUser(id, name)}); }

// ---- Entity: book ----
function createBook(id, title) {
  bp.log.info("DEBUG INTERFACE createBook: called with args=" + JSON.stringify(arguments));
  var url = "/books";
  var description = "Create a book with id " + id;
  var body = {
    "id": String(id),
    "title": String(title),
  };
  bp.log.info("DEBUG INTERFACE createBook: Sending Body=" + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description,
      id: String(id),
      title: String(title),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteBook(id) {
  bp.log.info("DEBUG INTERFACE deleteBook: called with args=" + JSON.stringify(arguments));
  var url = "/books/" + id;
  var description = "Delete book with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 400, 404],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function getBook(id) {
  bp.log.info("DEBUG INTERFACE getBook: called with args=" + JSON.stringify(arguments));
  var url = "/books/" + id;
  var description = "Get book with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function listBooks(id) {
  bp.log.info("DEBUG INTERFACE listBooks: called with args=" + JSON.stringify(arguments));
  var url = "/books";
  var description = "List/search books with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingBook(id, title) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingBook: called with args=" + JSON.stringify(arguments));
  var url = "/books";
  var description = "[Book] Try Add Existing with id " + id;
  var body = {
    "id": String(id),
    "title": String(title),
  };
  bp.log.info("DEBUG INTERFACE tryToAddExistingBook: Sending Body=" + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      id: String(id),
      title: String(title),
    }
  });
}

function verifyBookExists(id, title) {
  var url = "/books";
  bp.log.info("DEBUG VERIFIER for Book: Arguments=" + JSON.stringify(arguments));
  var description = "Verify Book exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results) items = items.results;
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));
          if (typeof id !== "undefined") {
             if (String(items[i].id) !== String(id)) { match = false; bp.log.info("  Mismatch id: " + items[i].id + " != " + id); }
          }
          if (typeof title !== "undefined") {
             if (String(items[i].title) !== String(title)) { match = false; bp.log.info("  Mismatch title: " + items[i].title + " != " + title); }
          }
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
      if (items.results) items = items.results;
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));
          if (typeof id !== "undefined") {
             if (String(items[i].id) !== String(id)) { match = false; bp.log.info("  Mismatch id: " + items[i].id + " != " + id); }
          }
          if (typeof title !== "undefined") {
             if (String(items[i].title) !== String(title)) { match = false; bp.log.info("  Mismatch title: " + items[i].title + " != " + title); }
          }
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Book does not exist");
    }
  });
}

function tryToDeleteANonExistingBook(id) {
   deleteBook(id);
}

function matchDeletedBook(id) { return bp.EventSet("Del", function(e){ return e.name.includes("Delete"); }); }
function waitForAnyBookDeleted() { return bp.sync({waitFor: bp.EventSet("AnyDel", function(e){ return e.name.includes("Delete"); }) }); }

function matchAddedBook(id, title) { return bp.EventSet("Add", function(e){ return e.name.includes("Create"); }); }
function waitForAnyBookAdded() {
   var e = bp.sync({waitFor: bp.EventSet("AnyAdd", function(e){ return e.name.includes("Create"); }) });
   return e.data;
}
function waitForBookAdded(id, title) { return bp.sync({waitFor: matchAddedBook(id, title)}); }

// ---- Entity: loan ----
function createLoan(bookId, userId) {
  bp.log.info("DEBUG INTERFACE createLoan: called with args=" + JSON.stringify(arguments));
  var url = "/loans";
  var description = "Create a loan with userId " + userId + " and bookId " + bookId;
  var body = {
    "bookId": String(bookId),
    "userId": String(userId),
  };
  bp.log.info("DEBUG INTERFACE createLoan: Sending Body=" + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: { description: description,
      bookId: String(bookId),
      userId: String(userId),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { userId: String(userId), bookId: String(bookId) }) });
}

function deleteLoan(bookId, userId) {
  bp.log.info("DEBUG INTERFACE deleteLoan: called with args=" + JSON.stringify(arguments));
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete loan with userId " + userId + " and bookId " + bookId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 404],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function listLoans(bookId, userId) {
  bp.log.info("DEBUG INTERFACE listLoans: called with args=" + JSON.stringify(arguments));
  var url = "/loans";
  var description = "List/search loans with userId " + userId + " with bookId " + bookId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingLoan(bookId, userId) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingLoan: called with args=" + JSON.stringify(arguments));
  var url = "/loans";
  var description = "[Loan] Try Add Existing with userId " + userId + " with bookId " + bookId;
  var body = {
    "bookId": String(bookId),
    "userId": String(userId),
  };
  bp.log.info("DEBUG INTERFACE tryToAddExistingLoan: Sending Body=" + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      bookId: String(bookId),
      userId: String(userId),
    }
  });
}

function verifyLoanExists(bookId, userId) {
  var url = "/loans";
  bp.log.info("DEBUG VERIFIER for Loan: Arguments=" + JSON.stringify(arguments));
  var description = "Verify Loan exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results) items = items.results;
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));
          if (typeof bookId !== "undefined") {
             if (String(items[i].bookId) !== String(bookId)) { match = false; bp.log.info("  Mismatch bookId: " + items[i].bookId + " != " + bookId); }
          }
          if (typeof userId !== "undefined") {
             if (String(items[i].userId) !== String(userId)) { match = false; bp.log.info("  Mismatch userId: " + items[i].userId + " != " + userId); }
          }
          if (match) return pvg.success("Entity exists");
        }
      }
      return pvg.fail("Expected Loan to exist but it does not");
    }
  });
}

function verifyLoanDoesNotExist(bookId, userId) {
  var url = "/loans";
  var description = "[Loan] Verify Loan does not exist";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results) items = items.results;
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));
          if (typeof bookId !== "undefined") {
             if (String(items[i].bookId) !== String(bookId)) { match = false; bp.log.info("  Mismatch bookId: " + items[i].bookId + " != " + bookId); }
          }
          if (typeof userId !== "undefined") {
             if (String(items[i].userId) !== String(userId)) { match = false; bp.log.info("  Mismatch userId: " + items[i].userId + " != " + userId); }
          }
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Loan does not exist");
    }
  });
}

function tryToDeleteANonExistingLoan(userId, bookId) {
   deleteLoan(userId, bookId);
}

function matchDeletedLoan(userId, bookId) { return bp.EventSet("Del", function(e){ return e.name.includes("Delete"); }); }
function waitForAnyLoanDeleted() { return bp.sync({waitFor: bp.EventSet("AnyDel", function(e){ return e.name.includes("Delete"); }) }); }

function matchAddedLoan(bookId, userId) { return bp.EventSet("Add", function(e){ return e.name.includes("Create"); }); }
function waitForAnyLoanAdded() {
   var e = bp.sync({waitFor: bp.EventSet("AnyAdd", function(e){ return e.name.includes("Create"); }) });
   return e.data;
}
function waitForLoanAdded(bookId, userId) { return bp.sync({waitFor: matchAddedLoan(bookId, userId)}); }

// ---- Entity: hold ----
function createHold(bookId, id, userId) {
  bp.log.info("DEBUG INTERFACE createHold: called with args=" + JSON.stringify(arguments));
  var url = "/holds";
  var description = "Create a hold with id " + id;
  var body = {
    "bookId": String(bookId),
    "id": String(id),
    "userId": String(userId),
  };
  bp.log.info("DEBUG INTERFACE createHold: Sending Body=" + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: { description: description,
      bookId: String(bookId),
      id: String(id),
      userId: String(userId),
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteHold(id) {
  bp.log.info("DEBUG INTERFACE deleteHold: called with args=" + JSON.stringify(arguments));
  var url = "/holds/" + id;
  var description = "Delete hold with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function listHolds(id) {
  bp.log.info("DEBUG INTERFACE listHolds: called with args=" + JSON.stringify(arguments));
  var url = "/holds";
  var description = "List holds with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200],
    callback: function(response) {
      if (response.statusCode >= 200 && response.statusCode < 300) {
          try {
              var items = JSON.parse(response.body);
              if(items.results) items = items.results;
              bp.log.info("DEBUG Verify Response: " + JSON.stringify(items));
          } catch (e) { bp.log.info("DEBUG Verify: Could not parse body"); }
      }
    }
  });
}

function tryToAddExistingHold(bookId, id, userId) {
  bp.log.info("DEBUG INTERFACE tryToAddExistingHold: called with args=" + JSON.stringify(arguments));
  var url = "/holds";
  var description = "[Hold] Try Add Existing with id " + id;
  var body = {
    "bookId": String(bookId),
    "id": String(id),
    "userId": String(userId),
  };
  bp.log.info("DEBUG INTERFACE tryToAddExistingHold: Sending Body=" + JSON.stringify(body));
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description,
      bookId: String(bookId),
      id: String(id),
      userId: String(userId),
    }
  });
}

function verifyHoldExists(bookId, id, userId) {
  var url = "/holds";
  bp.log.info("DEBUG VERIFIER for Hold: Arguments=" + JSON.stringify(arguments));
  var description = "Verify Hold exists";
  svc.get(url, { expectedResponseCodes: [200], callback: function(response) {
      var items = JSON.parse(response.body);
      if (items.results) items = items.results;
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));
          if (typeof bookId !== "undefined") {
             if (String(items[i].bookId) !== String(bookId)) { match = false; bp.log.info("  Mismatch bookId: " + items[i].bookId + " != " + bookId); }
          }
          if (typeof id !== "undefined") {
             if (String(items[i].id) !== String(id)) { match = false; bp.log.info("  Mismatch id: " + items[i].id + " != " + id); }
          }
          if (typeof userId !== "undefined") {
             if (String(items[i].userId) !== String(userId)) { match = false; bp.log.info("  Mismatch userId: " + items[i].userId + " != " + userId); }
          }
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
      if (items.results) items = items.results;
      if (!Array.isArray(items)) items = [items];
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          var match = false;
          match = true;
          bp.log.info("DEBUG VERIFY ITEM: " + JSON.stringify(items[i]));
          if (typeof bookId !== "undefined") {
             if (String(items[i].bookId) !== String(bookId)) { match = false; bp.log.info("  Mismatch bookId: " + items[i].bookId + " != " + bookId); }
          }
          if (typeof id !== "undefined") {
             if (String(items[i].id) !== String(id)) { match = false; bp.log.info("  Mismatch id: " + items[i].id + " != " + id); }
          }
          if (typeof userId !== "undefined") {
             if (String(items[i].userId) !== String(userId)) { match = false; bp.log.info("  Mismatch userId: " + items[i].userId + " != " + userId); }
          }
          if (match) return pvg.fail("Expected Entity to not exist but it does");
        }
      }
      return pvg.success("Hold does not exist");
    }
  });
}

function tryToDeleteANonExistingHold(id) {
   deleteHold(id);
}

function matchDeletedHold(id) { return bp.EventSet("Del", function(e){ return e.name.includes("Delete"); }); }
function waitForAnyHoldDeleted() { return bp.sync({waitFor: bp.EventSet("AnyDel", function(e){ return e.name.includes("Delete"); }) }); }

function matchAddedHold(bookId, id, userId) { return bp.EventSet("Add", function(e){ return e.name.includes("Create"); }); }
function waitForAnyHoldAdded() {
   var e = bp.sync({waitFor: bp.EventSet("AnyAdd", function(e){ return e.name.includes("Create"); }) });
   return e.data;
}
function waitForHoldAdded(bookId, id, userId) { return bp.sync({waitFor: matchAddedHold(bookId, id, userId)}); }
