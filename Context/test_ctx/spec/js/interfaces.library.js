//@provengo summon rest
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';

const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json", "api_key": "special-key" } });

const pvg = { fail: function (msg) { bp.log.error(msg); throw new Error(msg); } };

function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function (e) { return e.name === "Done: Positive: " + desc; }); }

function asInteger(value) { return Number.parseInt(value, 10); }

function asString(value) { return String(value); }

function extractId(e) {
  var body = getJsonBody(e);
  if (body && body.id !== undefined && body.id !== null) return asInteger(body.id);
  if (body && body.userId !== undefined && body.userId !== null) return asInteger(body.userId);

  if (e && e.data && e.data.parameters) {
    if (e.data.parameters.id !== undefined && e.data.parameters.id !== null) return asInteger(e.data.parameters.id);
    if (e.data.parameters.userId !== undefined && e.data.parameters.userId !== null) return asInteger(e.data.parameters.userId);
  }

  var pathValue = getRequestPath(e);
  if (pathValue) {
    var segments = pathValue.split("/").filter(function (s) { return s.length > 0; });
    if (segments.length >= 3 && segments[0] === "loans") return asInteger(segments[1]);
    if (segments.length >= 2) return asInteger(segments[segments.length - 1]);
  }

  pvg.fail("Could not extract ID from event fields");
}

function getExpectedResponseCodes(e) {
  if (!e || !e.data) return [];
  if (Array.isArray(e.data.expectedResponseCodes)) return e.data.expectedResponseCodes;
  if (e.data.options && Array.isArray(e.data.options.expectedResponseCodes)) return e.data.options.expectedResponseCodes;
  if (e.data.parameters && Array.isArray(e.data.parameters.expectedResponseCodes)) return e.data.parameters.expectedResponseCodes;
  return [];
}

function hasExpectedCode(e, code) {
  return getExpectedResponseCodes(e).indexOf(code) !== -1;
}

function getRequestPath(e) {
  if (!e || !e.data) return "";
  var p = e.data.path || e.data.url || e.data.endpoint || "";
  if (!p) return "";
  var qIdx = p.indexOf("?");
  return qIdx === -1 ? p : p.substring(0, qIdx);
}

function getJsonBody(e) {
  if (!e || !e.data || e.data.body === undefined || e.data.body === null) return null;
  if (typeof e.data.body === "object") return e.data.body;
  if (typeof e.data.body === "string") {
    try { return JSON.parse(e.data.body); } catch (err) { return null; }
  }
  return null;
}

function listBooks(q) {
  var url = "/books"; var reqDescription = "List/search book {id}";
  let finalCodes = [200];
  var parameters = { description: reqDescription };
  if (q !== undefined && q !== null) parameters.q = asString(q);
  let response = svc.get(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  return response;
}

function createBook(id, title) {
  id = asInteger(id);
  title = asString(title);
  var url = "/books"; var reqDescription = "Create a book " + id;
  let finalCodes = [201];
  var body = {
    "id": id,
    "title": title
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function getBook(id) {
  id = asInteger(id);
  var url = "/books/" + id; var reqDescription = "Get book by id " + id;
  let finalCodes = [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}

function deleteBook(id) {
  id = asInteger(id);
  var url = "/books/" + id; var reqDescription = "Delete a book " + id;
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}

function verifyThatABookCannotBeAdded(id, title) {
  id = asInteger(id);
  title = asString(title);
  var url = "/books"; var reqDescription = "Rainy: Try Add Existing Book " + id;
  let finalCodes = [400, 409];
  var body = {
    "id": id,
    "title": title
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function verifyBookRejects(id, q, title) {
  id = asInteger(id);
  title = asString(title);
  var url = "/books";
  var reqDescription = "Rainy: Verify Rejection for " + url;
  var body = {
    "id": id,
    "q": q,
    "title": title
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
}

function verifyBookExists(id) {
  id = asInteger(id);
  var url = "/books/" + id;
  var description = "Verify Book " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
}

function verifyBookDeleted(id) {
  id = asInteger(id);
  var url = "/books/" + id;
  var description = "Verify Book " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function verifyBookDoesNotAppearInAnyList(id) { verifyBookDeleted(id); }

function verifyBooksDoesNotAppearInAnyList(id) { verifyBookDoesNotAppearInAnyList(id); }

function verifyBookDoesNotExist(id) { verifyBookDeleted(id); }

function verifyBookCannotBeDeleted(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/books/" + id;
  var description = "Verify Book " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function matchAnyBooksAdded() {
  return bp.EventSet("Any Books Added", function (e) {
    return e.name === "POST" && getRequestPath(e) === "/books" && hasExpectedCode(e, 201);
  });
}

function matchAnyBookAdded() {
  return matchAnyBooksAdded();
}

function matchAddBook(id) {
  return bp.EventSet("Add Book " + id, function (e) {
    var body = getJsonBody(e);
    return e.name === "POST" && getRequestPath(e) === "/books" && hasExpectedCode(e, 201) && body && asInteger(body.id) === asInteger(id);
  });
}

function matchDeleteBook(id) {
  return bp.EventSet("Deleted Books " + id, function (e) {
    return e.name === "DELETE" && getRequestPath(e) === ("/books/" + asInteger(id)) && hasExpectedCode(e, 200);
  });
}

function matchDeletedBooks(id) {
  return matchDeleteBook(id);
}

function matchAnyBookDeleted() {
  return bp.EventSet("Any Books Deleted", function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/books/") && hasExpectedCode(e, 200);
  });
}

function matchAnyBooksDeleted() {
  return matchAnyBookDeleted();
}

function listLoans(userId, bookId) {
  var url = "/loans"; var reqDescription = "List/search loan {userId}";
  let finalCodes = [200];
  var parameters = { description: reqDescription };
  if (userId !== undefined && userId !== null) parameters.userId = asInteger(userId);
  if (bookId !== undefined && bookId !== null) parameters.bookId = asInteger(bookId);
  let response = svc.get(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  return response;
}

function createLoan(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  var url = "/loans"; var reqDescription = "Create a loan " + userId;
  let finalCodes = [201];
  var body = {
    "bookId": bookId,
    "userId": userId
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function deleteLoan(userId, bookId) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  var url = "/loans/" + userId + "/" + bookId; var reqDescription = "Delete a loan by composite id " + userId;
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}

function verifyThatALoanCannotBeAdded(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  var url = "/loans"; var reqDescription = "Rainy: Try Add Existing Loan " + userId;
  let finalCodes = [400, 409];
  var body = {
    "bookId": bookId,
    "userId": userId
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function verifyLoanRejects(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  var url = "/loans";
  var reqDescription = "Rainy: Verify Rejection for " + url;
  var body = {
    "bookId": bookId,
    "userId": userId
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
}

function verifyLoanExists(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  let res = listLoans(userId, bookId);
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.userId == userId || item.id == userId);
      if (!found) pvg.fail("Loan NOT found in list");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLoanDoesNotExist(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  let res = listLoans(userId, bookId);
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (!Array.isArray(listData) && listData.data) listData = listData.data;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.userId == userId || item.id == userId);
      if (found) pvg.fail("Loan still found in list (deletion failed)");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLoanDoesNotAppearInAnyList(bookId, userId) { verifyLoanDoesNotExist(bookId, userId); }

function verifyLoansDoesNotAppearInAnyList(bookId, userId) { verifyLoanDoesNotAppearInAnyList(bookId, userId); }

function verifyLoanCannotBeDeleted(userId, bookId, expectedCode) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Verify Loan " + userId + "/" + bookId + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}


function matchAnyLoansAdded() {
  return bp.EventSet("Any Loans Added", function (e) {
    return e.name === "POST" && getRequestPath(e) === "/loans" && hasExpectedCode(e, 201);
  });
}

function matchAnyLoanAdded() {
  return matchAnyLoansAdded();
}

function matchAddLoan(userId) {
  return bp.EventSet("Add Loan " + userId, function (e) {
    var body = getJsonBody(e);
    return e.name === "POST" && getRequestPath(e) === "/loans" && hasExpectedCode(e, 201) && body && asInteger(body.userId) === asInteger(userId);
  });
}

function matchDeleteLoan(userId) {
  return bp.EventSet("Deleted Loans " + userId, function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/loans/" + asInteger(userId) + "/") && hasExpectedCode(e, 200);
  });
}

function matchDeletedLoans(userId) {
  return matchDeleteLoan(userId);
}

function matchAnyLoanDeleted() {
  return bp.EventSet("Any Loans Deleted", function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/loans/") && hasExpectedCode(e, 200);
  });
}

function matchAnyLoansDeleted() {
  return matchAnyLoanDeleted();
}

function listUsers(q) {
  var url = "/users"; var reqDescription = "List/search user {id}";
  let finalCodes = [200];
  var parameters = { description: reqDescription };
  if (q !== undefined && q !== null) parameters.q = asString(q);
  let response = svc.get(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  return response;
}

function createUser(id, name) {
  id = asInteger(id);
  name = asString(name);
  var url = "/users"; var reqDescription = "Create a user " + id;
  let finalCodes = [201];
  var body = {
    "id": id,
    "name": name
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function deleteUser(id) {
  id = asInteger(id);
  var url = "/users/" + id; 
  var reqDescription = "Delete a user " + id;
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}

function verifyThatUserCannotBeAdded(id, name) {
  id = asInteger(id);
  name = asString(name);
  var url = "/users"; 
  var reqDescription = "Rainy: Try Add Existing User " + id;
  let finalCodes = [400, 409];
  var body = {
    "id": id,
    "name": name
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function verifyUserRejects(id, name, q) {
  id = asInteger(id);
  name = asString(name);
  var url = "/users";
  var reqDescription = "Rainy: Verify Rejection for " + url;
  var body = {
    "id": id,
    "name": name,
    "q": q
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
}

function verifyUserExists(id) {
  id = asInteger(id);
  let res = listUsers(id);
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.id == id || item.id == id);
      if (!found) pvg.fail("User NOT found in list");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserDeleted(id) {
  id = asInteger(id);
  let res = listUsers(id);
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (!Array.isArray(listData) && listData.data) listData = listData.data;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.id == id || item.id == id);
      if (found) pvg.fail("User still found in list (deletion failed)");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserDoesNotAppearInAnyList(id) { verifyUserDeleted(id); }

function verifyUsersDoesNotAppearInAnyList(id) { verifyUserDoesNotAppearInAnyList(id); }

function verifyUserDoesNotExist(id) { verifyUserDeleted(id); }

function verifyUserCannotBeDeleted(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/users/" + id;
  var description = "Verify User " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function (e) {
    return e.name === "POST" && getRequestPath(e) === "/users" && hasExpectedCode(e, 201);
  });
}

function matchAnyUserAdded() {
  return matchAnyUsersAdded();
}

function matchAddUser(id) {
  return bp.EventSet("Add User " + id, function (e) {
    var body = getJsonBody(e);
    return e.name === "POST" && getRequestPath(e) === "/users" && hasExpectedCode(e, 201) && body && asInteger(body.id) === asInteger(id);
  });
}

function matchDeleteUser(id) {
  return bp.EventSet("Deleted Users " + id, function (e) {
    return e.name === "DELETE" && getRequestPath(e) === ("/users/" + asInteger(id)) && hasExpectedCode(e, 200);
  });
}

function matchDeletedUser(id) {
  return matchDeleteUser(id);
}

function matchAnyUserDeleted() {
  return bp.EventSet("Any Users Deleted", function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/users/") && hasExpectedCode(e, 200);
  });
}

function matchAnyUsersDeleted() {
  return matchAnyUserDeleted();
}

// Private function for Holds
function listHolds() {
  var url = "/holds"; var reqDescription = "List hold {id}";
  let finalCodes = [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}

function createHold(bookId, id, userId) {
  bookId = asInteger(bookId);
  id = asInteger(id);
  userId = asInteger(userId);
  var url = "/holds"; var reqDescription = "Create a hold " + id;
  let finalCodes = [201];
  var body = {
    "bookId": bookId,
    "id": id,
    "userId": userId
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function deleteHold(id) {
  id = asInteger(id);
  var url = "/holds/" + id; var reqDescription = "Delete a hold " + id;
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}


function verifyHoldRejects(bookId, id, userId) {
  bookId = asInteger(bookId);
  id = asInteger(id);
  userId = asInteger(userId);
  var url = "/holds";
  var reqDescription = "Rainy: Verify Rejection for " + url;
  var body = {
    "bookId": bookId,
    "id": id,
    "userId": userId
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
}

function verifyHoldExists(id) {
  id = asInteger(id);
  let res = listHolds();
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.id == id || item.id == id);
      if (!found) pvg.fail("Hold NOT found in list");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyHoldDeleted(id) {
  id = asInteger(id);
  let res = listHolds();
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (!Array.isArray(listData) && listData.data) listData = listData.data;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.id == id || item.id == id);
      if (found) pvg.fail("Hold still found in list (deletion failed)");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyHoldDoesNotAppearInAnyList(id) { verifyHoldDeleted(id); }

function verifyHoldsDoesNotAppearInAnyList(id) { verifyHoldDoesNotAppearInAnyList(id); }

function verifyHoldDoesNotExist(id) { verifyHoldDeleted(id); }

function verifyHoldCannotBeDeleted(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/holds/" + id;
  var description = "Verify Hold " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function matchAnyHoldsAdded() {
  return bp.EventSet("Any Holds Added", function (e) {
    return e.name === "POST" && getRequestPath(e) === "/holds" && hasExpectedCode(e, 201);
  });
}

function matchAnyHoldAdded() {
  return matchAnyHoldsAdded();
}

function matchAddHold(id) {
  return bp.EventSet("Add Hold " + id, function (e) {
    var body = getJsonBody(e);
    return e.name === "POST" && getRequestPath(e) === "/holds" && hasExpectedCode(e, 201) && body && asInteger(body.id) === asInteger(id);
  });
}

function matchDeleteHold(id) {
  return bp.EventSet("Deleted Holds " + id, function (e) {
    return e.name === "DELETE" && getRequestPath(e) === ("/holds/" + asInteger(id)) && hasExpectedCode(e, 200);
  });
}

function matchDeletedHolds(id) {
  return matchDeleteHold(id);
}

function matchAnyHoldDeleted() {
  return bp.EventSet("Any Holds Deleted", function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/holds/") && hasExpectedCode(e, 200);
  });
}

function matchAnyHoldsDeleted() {
  return matchAnyHoldDeleted();
}
