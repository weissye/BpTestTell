//@provengo summon rest
// === Auto-generated interfaces for library ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listBooks(author, id, publishedDate, q, title) {
  var url = "/books";
  var description = "List/search books " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createBook(author, id, publishedDate, q, title) {
  var url = "/books";
  var description = "Create a book " + id;
  var body = {
    "author": String(author),
    "id": id,
    "publishedDate": String(publishedDate),
    "title": String(title),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"author": author, "id": id, "publishedDate": publishedDate, "q": q, "title": title}) });
}

function getBook(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Get book by id";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteBook(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Delete a book " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function tryToAddExistingBooks(author, id, publishedDate, q, title) {
  var url = "/books";
  var description = "Try Add Existing Books " + id;
  var body = {
    "author": String(author),
    "id": id,
    "publishedDate": String(publishedDate),
    "title": String(title),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBooksExists(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Verify Books " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Books found");
}

function verifyBooksDoesNotExist(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Verify Books " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Books not found");
}

function tryToDeleteANonExistingBooks(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Verify negative delete for Books";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBooks(author, id, publishedDate, q, title) {
  return bp.EventSet("Delete Books", function(e) {
      return e.name === "Done: " + "Delete a book";
  });
}

function waitForBooksAdded(author, id, publishedDate, q, title) {
  waitFor(matchSuccess("Create a book"));
}

function matchAnyBooksAdded() {
  return bp.EventSet("Any Books Added", function(e) {
      return e.name.startsWith("Done: Create a book");
  });
}

function listLoans(bookId, id, loanDate, userId) {
  var url = "/loans";
  var description = "List/search loans " + userId;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createLoan(bookId, id, loanDate, userId) {
  var url = "/loans";
  var description = "Create a loan " + userId;
  var body = {
    "bookId": bookId,
    "id": String(id),
    "loanDate": String(loanDate),
    "userId": userId,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bookId": bookId, "id": id, "loanDate": loanDate, "userId": userId}) });
}

function deleteLoan(bookId, id, loanDate, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete a loan by composite id " + userId;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

// verifyLoansExists skipped: No GET /{id} operation detected.
function waitForLoansAdded(bookId, id, loanDate, userId) {
  waitFor(matchSuccess("Create a loan"));
}

function matchAnyLoansAdded() {
  return bp.EventSet("Any Loans Added", function(e) {
      return e.name.startsWith("Done: Create a loan");
  });
}

function listUsers(email, id, name, password, q) {
  var url = "/users";
  var description = "List/search users " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createUser(email, id, name, password, q) {
  var url = "/users";
  var description = "Create a user " + id;
  var body = {
    "email": String(email),
    "id": id,
    "name": String(name),
    "password": String(password),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"email": email, "id": id, "name": name, "password": password, "q": q}) });
}

function deleteUser(email, id, name, password, q) {
  var url = "/users/" + id;
  var description = "Delete a user " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

// verifyUsersExists skipped: No GET /{id} operation detected.
function waitForUsersAdded(email, id, name, password, q) {
  waitFor(matchSuccess("Create a user"));
}

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Create a user");
  });
}

function listHolds(bookId, hidden, id, userId) {
  var url = "/holds";
  var description = "List holds " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createHold(bookId, hidden, id, userId) {
  var url = "/holds";
  var description = "Create a hold " + id;
  var body = {
    "bookId": bookId,
    "hidden": hidden,
    "id": id,
    "userId": userId,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bookId": bookId, "hidden": hidden, "id": id, "userId": userId}) });
}

function deleteHold(bookId, hidden, id, userId) {
  var url = "/holds/" + id;
  var description = "Delete a hold " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// verifyHoldsExists skipped: No GET /{id} operation detected.
function waitForHoldsAdded(bookId, hidden, id, userId) {
  waitFor(matchSuccess("Create a hold"));
}

function matchAnyHoldsAdded() {
  return bp.EventSet("Any Holds Added", function(e) {
      return e.name.startsWith("Done: Create a hold");
  });
}
