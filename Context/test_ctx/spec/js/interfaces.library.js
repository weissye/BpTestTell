//@provengo summon rest
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';

const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json", "api_key": "special-key" } });

const pvg = { fail: function (msg) { bp.log.error(msg); throw new Error(msg); } };

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
  var data = e && e.data ? e.data : e;
  if (!data) return [];
  if (Array.isArray(data.expectedResponseCodes)) return data.expectedResponseCodes;
  if (data.options && Array.isArray(data.options.expectedResponseCodes)) return data.options.expectedResponseCodes;
  if (data.parameters && Array.isArray(data.parameters.expectedResponseCodes)) return data.parameters.expectedResponseCodes;
  return [];
}

function hasExpectedCode(e, code) {
  return getExpectedResponseCodes(e).indexOf(code) !== -1;
}

function getRequestPath(e) {
  var data = e && e.data ? e.data : e;
  if (!data) return "";
  var p = data.path || data.url || data.endpoint || "";
  if (!p) return "";
  var protocolIdx = p.indexOf("://");
  if (protocolIdx !== -1) {
    var pathIdx = p.indexOf("/", protocolIdx + 3);
    p = pathIdx === -1 ? "/" : p.substring(pathIdx);
  }
  var qIdx = p.indexOf("?");
  return qIdx === -1 ? p : p.substring(0, qIdx);
}

function getJsonBody(e) {
  var data = e && e.data ? e.data : e;
  if (!data || data.body === undefined || data.body === null) return null;
  if (typeof data.body === "object") return data.body;
  if (typeof data.body === "string") {
    try { return JSON.parse(data.body); } catch (err) { return null; }
  }
  return null;
}

function readSutList(listName, url, parameters) {
  try {
    var requestParameters = parameters || {};
    if (requestParameters.description === undefined || requestParameters.description === null) {
      requestParameters.description = "Verify SUT " + listName + " list";
    }
    var response = svc.get(url, { parameters: requestParameters, expectedResponseCodes: [200] });
    var listData = (typeof response === "string") ? JSON.parse(response) : response;
    if (!Array.isArray(listData) && listData && typeof listData.body === "string") listData = JSON.parse(listData.body);
    if (!Array.isArray(listData) && listData && Array.isArray(listData.data)) listData = listData.data;
    if (!Array.isArray(listData) && listData && Array.isArray(listData.items)) listData = listData.items;
    if (!Array.isArray(listData) && listData && Array.isArray(listData.results)) listData = listData.results;
    if (Array.isArray(listData)) return listData;
    pvg.fail("Could not inspect " + listName + " response as a SUT list");
  } catch (err) {
    pvg.fail("Failed to read " + listName + " from the SUT: " + err);
  }
}

function verifySutListContains(listName, url, parameters, predicate, failureMessage) {
  // Verification is executed against the SUT by fetching only the requested SUT list slice before inspecting it.
  var listData = readSutList(listName, url, parameters);
  var found = listData.find(predicate);
  if (!found) pvg.fail(failureMessage);
}

function verifySutListDoesNotContain(listName, url, parameters, predicate, failureMessage) {
  // Verification is executed against the SUT by fetching only the requested SUT list slice before inspecting it.
  var listData = readSutList(listName, url, parameters);
  var found = listData.find(predicate);
  if (found) pvg.fail(failureMessage + ": " + JSON.stringify(found));
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

function deleteBook(id) {
  id = asInteger(id);
  var url = "/books/" + id; var reqDescription = "Delete a book " + id;
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}

function verifyBooksExists(id) {
  // Verification is executed against the SUT dataset by reading the books list and searching for this book id.
  id = asInteger(id);
  verifySutListContains("books", "/books", { q: asString(id), description: "Verify Book " + id + " exists in SUT books list" }, function (item) {
    return item && asInteger(item.id) === id;
  }, "Book " + id + " was not found in the SUT books list");
}

function verifyBookDoesNotAppearInAnyList(id) {
  // Verification is executed against SUT datasets: books directly, and loans/holds indirectly by bookId.
  id = asInteger(id);
  verifySutListDoesNotContain("books", "/books", { q: asString(id), description: "Verify Book " + id + " is absent from SUT books list" }, function (item) {
    return item && asInteger(item.id) === id;
  }, "Book " + id + " still appears in books list");
  verifySutListDoesNotContain("loans", "/loans", { bookId: id, description: "Verify Book " + id + " is absent from SUT loans list" }, function (item) {
    return item && asInteger(item.bookId) === id;
  }, "Book " + id + " still appears in loans list");
  verifySutListDoesNotContain("holds", "/holds", { q: asString(id), description: "Verify Book " + id + " is absent from SUT holds list" }, function (item) {
    return item && asInteger(item.bookId) === id;
  }, "Book " + id + " still appears in holds list");
}

function verifyBookCannotBeDeleted(id, expectedCode) {
  // Verification is executed against the SUT by trying the delete request and expecting the SUT to reject it.
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/books/" + id;
  var description = "Verify Book " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
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

function matchAnyBookDeleted() {
  return bp.EventSet("Any Books Deleted", function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/books/") && hasExpectedCode(e, 200);
  });
}

function deleteLoan(userId, bookId) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  var url = "/loans/" + userId + "/" + bookId; var reqDescription = "Delete a loan by composite id " + userId;
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}

function verifyLoanExists(bookId, userId) {
  // Verification is executed against the SUT dataset by reading the loans list and searching for this composite id.
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  verifySutListContains("loans", "/loans", { userId: userId, bookId: bookId, description: "Verify Loan " + userId + "/" + bookId + " exists in SUT loans list" }, function (item) {
    return item && asInteger(item.userId) === userId && asInteger(item.bookId) === bookId;
  }, "Loan " + userId + "/" + bookId + " was not found in the SUT loans list");
}

function verifyLoanDoesNotAppearInAnyList(bookId, userId) {
  // Verification is executed against the SUT dataset by reading the loans list and confirming the loan is absent.
  bookId = bookId === undefined || bookId === null ? null : asInteger(bookId);
  userId = asInteger(userId);
  var parameters = { userId: userId, description: "Verify Loan " + userId + (bookId === null ? "" : "/" + bookId) + " is absent from SUT loans list" };
  if (bookId !== null) parameters.bookId = bookId;
  verifySutListDoesNotContain("loans", "/loans", parameters, function (item) {
    if (!item || asInteger(item.userId) !== userId) return false;
    return bookId === null || asInteger(item.bookId) === bookId;
  }, "Loan " + userId + (bookId === null ? "" : "/" + bookId) + " still appears in loans list");
}

function verifyLoanCannotBeDeleted(userId, bookId, expectedCode) {
  // Verification is executed against the SUT by trying the delete request and expecting the SUT to reject it.
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Verify Loan " + userId + "/" + bookId + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
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

function matchAnyLoanDeleted() {
  return bp.EventSet("Any Loans Deleted", function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/loans/") && hasExpectedCode(e, 200);
  });
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

function verifyUsersExists(id) {
  // Verification is executed against the SUT dataset by reading the users list and searching for this user id.
  id = asInteger(id);
  verifySutListContains("users", "/users", { q: asString(id), description: "Verify User " + id + " exists in SUT users list" }, function (item) {
    return item && asInteger(item.id) === id;
  }, "User " + id + " was not found in the SUT users list");
}

function verifyUserDoesNotAppearInAnyList(id) {
  // Verification is executed against SUT datasets: users directly, and loans/holds indirectly by userId.
  id = asInteger(id);
  verifySutListDoesNotContain("users", "/users", { q: asString(id), description: "Verify User " + id + " is absent from SUT users list" }, function (item) {
    return item && asInteger(item.id) === id;
  }, "User " + id + " still appears in users list");
  verifySutListDoesNotContain("loans", "/loans", { userId: id, description: "Verify User " + id + " is absent from SUT loans list" }, function (item) {
    return item && asInteger(item.userId) === id;
  }, "User " + id + " still appears in loans list");
  verifySutListDoesNotContain("holds", "/holds", { q: asString(id), description: "Verify User " + id + " is absent from SUT holds list" }, function (item) {
    return item && asInteger(item.userId) === id;
  }, "User " + id + " still appears in holds list");
}

function verifyUserCannotBeDeleted(id, expectedCode) {
  // Verification is executed against the SUT by trying the delete request and expecting the SUT to reject it.
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/users/" + id;
  var description = "Verify User " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function matchAddUser(id) {
  return bp.EventSet("Add User " + id, function (e) {
    var body = getJsonBody(e);
    return e.name === "POST" && getRequestPath(e) === "/users" && hasExpectedCode(e, 201) && body && asInteger(body.id) === asInteger(id);
  });
}

function matchAnyUserAdded() {
  return bp.EventSet("Any Users Added", function (e) {
    var body = getJsonBody(e);
    return getRequestPath(e) === "/users" && hasExpectedCode(e, 201) && body && body.id !== undefined && body.name !== undefined;
  });
}

function matchDeleteUser(id) {
  return bp.EventSet("Deleted Users " + id, function (e) {
    return e.name === "DELETE" && getRequestPath(e) === ("/users/" + asInteger(id)) && hasExpectedCode(e, 200);
  });
}

function matchAnyUserDeleted() {
  return bp.EventSet("Any Users Deleted", function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/users/") && hasExpectedCode(e, 200);
  });
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

function verifyHoldsExists(id) {
  // Verification is executed against the SUT dataset by reading the holds list and searching for this hold id.
  id = asInteger(id);
  verifySutListContains("holds", "/holds", { q: asString(id), description: "Verify Hold " + id + " exists in SUT holds list" }, function (item) {
    return item && asInteger(item.id) === id;
  }, "Hold " + id + " was not found in the SUT holds list");
}

function verifyHoldDoesNotAppearInAnyList(id) {
  // Verification is executed against the SUT dataset by confirming this hold id is absent from the holds list.
  id = asInteger(id);
  verifySutListDoesNotContain("holds", "/holds", { q: asString(id), description: "Verify Hold " + id + " is absent from SUT holds list" }, function (item) {
    return item && asInteger(item.id) === id;
  }, "Hold " + id + " still appears in holds list");
}

function verifyHoldCannotBeDeleted(id, expectedCode) {
  // Verification is executed against the SUT by trying the delete request and expecting the SUT to reject it.
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/holds/" + id;
  var description = "Verify Hold " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
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

function matchAnyHoldDeleted() {
  return bp.EventSet("Any Holds Deleted", function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/holds/") && hasExpectedCode(e, 200);
  });
}
