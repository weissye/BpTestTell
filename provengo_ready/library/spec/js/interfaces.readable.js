//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: user ----

function addUser(id, name) {
  var url = "/users";
  var description = "Add user " + id;
  var body = {
    "id": id,
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUser(user_id) {
  var url = "/users/" + user_id;
  var description = "Delete user " + user_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUsers(q) {
  var url = "/users";
  var description = "Get users with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUser(id, name) {
  return addUser(id, name);
}

function verifyUserExists(q) {
  return getUsers(q);
}

function verifyUserDoesNotExist(q) {
  return getUsers(q);
}

function tryToDeleteANonExistingUser(user_id) {
  return deleteUser(user_id);
}

function matchAddedUser(id, name) {
  return bp.EventSet("matchAddedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyUserAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add user (.+)/)});
  var m = ev.data.parameters.description.match(/Add user (.+)/);
  var captures = m.slice(1);
  var names = ["id", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedUser(id, name) {
  return bp.EventSet("matchDeletedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyUserDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete user (.+)/)});
  var m = ev.data.parameters.description.match(/Delete user (.+)/);
  var captures = m.slice(1);
  var names = ["id", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: book ----

function addBook(id, title) {
  var url = "/books";
  var description = "Add book " + id;
  var body = {
    "id": id,
    "title": title,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBook(book_id) {
  var url = "/books/" + book_id;
  var description = "Delete book " + book_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBook(book_id) {
  var url = "/books/" + book_id;
  var description = "Get book " + book_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listBooks(q) {
  var url = "/books";
  var description = "List books with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBook(id, title) {
  return addBook(id, title);
}

function verifyBookExists(book_id) {
  return getBook(book_id);
}

function verifyBookDoesNotExist(book_id) {
  return getBook(book_id);
}

function tryToDeleteANonExistingBook(book_id) {
  return deleteBook(book_id);
}

function matchAddedBook(id, title) {
  return bp.EventSet("matchAddedBook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyBookAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add book (.+)/)});
  var m = ev.data.parameters.description.match(/Add book (.+)/);
  var captures = m.slice(1);
  var names = ["id", "title"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedBook(id, title) {
  return bp.EventSet("matchDeletedBook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyBookDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete book (.+)/)});
  var m = ev.data.parameters.description.match(/Delete book (.+)/);
  var captures = m.slice(1);
  var names = ["id", "title"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: loan ----

function addLoan(userId, bookId) {
  var url = "/loans";
  var description = "Add loan user " + userId + " book " + bookId;
  var body = {
    "userId": userId,
    "bookId": bookId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteLoan(user_id, book_id) {
  var url = "/loans/" + user_id + "/" + book_id;
  var description = "Delete loan user " + user_id + " book " + book_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getLoans(userId, bookId) {
  var url = "/loans";
  var description = "Get loans with userId " + userId + " and bookId " + bookId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingLoan(userId, bookId) {
  return addLoan(userId, bookId);
}

function verifyLoanExists(userId, bookId) {
  return getLoans(userId, bookId);
}

function verifyLoanDoesNotExist(userId, bookId) {
  return getLoans(userId, bookId);
}

function tryToDeleteANonExistingLoan(user_id, book_id) {
  return deleteLoan(user_id, book_id);
}

function matchAddedLoan(userId, bookId) {
  return bp.EventSet("matchAddedLoan", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(userId);
  });
}

function waitForAnyLoanAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add loan user (.+) book (.+)/)});
  var m = ev.data.parameters.description.match(/Add loan user (.+) book (.+)/);
  var captures = m.slice(1);
  var names = ["userId", "bookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedLoan(userId, bookId) {
  return bp.EventSet("matchDeletedLoan", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(userId);
  });
}

function waitForAnyLoanDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete loan user (.+) book (.+)/)});
  var m = ev.data.parameters.description.match(/Delete loan user (.+) book (.+)/);
  var captures = m.slice(1);
  var names = ["userId", "bookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: hold ----

function addHold(hold_id, userId, bookId) {
  var url = "/holds";
  var description = "Add hold " + hold_id;
  var body = {
    "hold_id": hold_id,
    "userId": userId,
    "bookId": bookId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteHold(hold_id) {
  var url = "/holds/" + hold_id;
  var description = "Delete hold " + hold_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getHolds() {
  var url = "/holds";
  var description = "Get holds";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingHold(hold_id, userId, bookId) {
  return addHold(hold_id, userId, bookId);
}

function verifyHoldExists() {
  return getHolds();
}

function verifyHoldDoesNotExist() {
  return getHolds();
}

function tryToDeleteANonExistingHold(hold_id) {
  return deleteHold(hold_id);
}

function matchAddedHold(hold_id, userId, bookId) {
  return bp.EventSet("matchAddedHold", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(hold_id);
  });
}

function waitForAnyHoldAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add hold (.+)/)});
  var m = ev.data.parameters.description.match(/Add hold (.+)/);
  var captures = m.slice(1);
  var names = ["hold_id", "userId", "bookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedHold(hold_id, userId, bookId) {
  return bp.EventSet("matchDeletedHold", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(hold_id);
  });
}

function waitForAnyHoldDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete hold (.+)/)});
  var m = ev.data.parameters.description.match(/Delete hold (.+)/);
  var captures = m.slice(1);
  var names = ["hold_id", "userId", "bookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
