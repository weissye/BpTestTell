//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:8080", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: user ----

function createUser() {
  var url = "/users";
  var description = "Create a user";
  var body = undefined;
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

function tryToAddExistingUser(user_id) {
  return createUser();
}

function tryToDeleteANonExistingUser(user_id) {
  return deleteUser(user_id);
}

// ---- Entity: book ----

function createBook() {
  var url = "/books";
  var description = "Create a book";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBook(book_id) {
  var url = "/books/" + book_id;
  var description = "Get book by id " + book_id;
  var body = undefined;
  return svc.request({
    method: "GET",
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

function tryToAddExistingBook(book_id) {
  return createBook();
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

// ---- Entity: loan ----

function createLoan() {
  var url = "/loans";
  var description = "Create a loan";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteLoan(user_id, book_id) {
  var url = "/loans/" + user_id + "/" + book_id;
  var description = "Delete a loan by composite id " + user_id + " " + book_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingLoan(user_id, book_id) {
  return createLoan();
}

function tryToDeleteANonExistingLoan(user_id, book_id) {
  return deleteLoan(user_id, book_id);
}

// ---- Entity: hold ----

function createHold() {
  var url = "/holds";
  var description = "Create a hold";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteHold(hold_id) {
  var url = "/holds/" + hold_id;
  var description = "Delete a hold " + hold_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingHold(hold_id) {
  return createHold();
}

function tryToDeleteANonExistingHold(hold_id) {
  return deleteHold(hold_id);
}
