//@provengo summon rest
//////////////////////////////////////////////////////////////////////////
// Interface layer for the library REST service.
//
// This file is the only layer that should know the concrete transport shape:
// REST URLs, HTTP verbs, request/response-code conventions, and JSON payloads.
// It exposes three kinds of API to the rest of the model:
//
// 1. Action functions such as createBook/deleteLoan that send REST requests.
// 2. EventSets such as AnyBookAdded and matchDeleteUser that classify events.
// 3. extractEventData(), which converts a concrete event into semantic fields.
//
// Stories use action functions and EventSets to describe behavior. The DAL uses
// EventSets plus extractEventData() to update the Context model without parsing
// URLs, bodies, or transport parameters itself.
//////////////////////////////////////////////////////////////////////////

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';

const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json", "api_key": "special-key" } });

const pvg = { fail: function (msg) { bp.log.error(msg); throw new Error(msg); } };

function asInteger(value) { return Number.parseInt(value, 10); }

function asString(value) { return String(value); }

function entityDescription(entityName, id) {
  return entityName + " " + id;
}

function relationDescription(entityName, id, details) {
  return entityDescription(entityName, id) + (details ? " " + details : "");
}

function createDescription(entityName, id) {
  return "Create: " + entityDescription(entityName, id);
}

function deleteDescription(entityName, id, details) {
  return "Delete: " + relationDescription(entityName, id, details);
}

function verifyExistsDescription(entityName, id, listName) {
  return "Verify: " + entityDescription(entityName, id) + " exists in " + listName + " list";
}

function verifyAbsentDescription(entityName, id, listName) {
  return "Verify: " + entityDescription(entityName, id) + " is absent from " + listName + " list";
}

function verifyRejectedDescription(entityName, id, action, reason) {
  return "Verify: " + action + " " + entityDescription(entityName, id) + " is rejected" + (reason ? " because " + reason : "");
}

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
  p = String(p).replace(/^https?:\/\/[^\/]+/, "");
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

// Boundary adapter from concrete REST events to semantic event data.
// Consumers can depend on fields like id, userId, bookId, title, and
// loanNumber without knowing whether the values came from a JSON body,
// REST path, query parameter, or request metadata.
function extractEventData(e) {
  var body = getJsonBody(e) || {};
  var data = e && e.data ? e.data : e;
  var parameters = data && data.parameters ? data.parameters : {};
  return {
    id: body.id !== undefined && body.id !== null ? body.id : parameters.id,
    title: body.title !== undefined && body.title !== null ? body.title : body.name,
    name: body.name,
    userId: body.userId !== undefined && body.userId !== null ? body.userId : parameters.userId,
    bookId: body.bookId !== undefined && body.bookId !== null ? body.bookId : parameters.bookId,
    loanNumber: parameters.loanNumber
  };
}


//////////////////////////////////////////////////////////////////////////
// Broad event classifiers.
//
// These EventSets describe meaningful domain events in interface terms:
// "a book was successfully added", "a loan was successfully deleted", etc.
// Their predicates may inspect REST details, but callers should treat the
// EventSet names as the public contract.
//////////////////////////////////////////////////////////////////////////

var AnyBookAdded = bp.EventSet("Any Books Added", function (e) {
  var body = getJsonBody(e);
  return e.name === "POST" && getRequestPath(e) === "/books" && hasExpectedCode(e, 201) && body && body.id !== undefined;
});

var AnyUserAdded = bp.EventSet("Any Users Added", function (e) {
  var body = getJsonBody(e);
  return e.name === "POST" && getRequestPath(e) === "/users" && hasExpectedCode(e, 201) && body && body.id !== undefined && body.name !== undefined;
});

var AnyLoanAdded = bp.EventSet("Any Loans Added", function (e) {
  var body = getJsonBody(e);
  return e.name === "POST" && getRequestPath(e) === "/loans" && hasExpectedCode(e, 201) && body && body.userId !== undefined && body.bookId !== undefined;
});

var AnyHoldAdded = bp.EventSet("Any Holds Added", function (e) {
  var body = getJsonBody(e);
  return e.name === "POST" && getRequestPath(e) === "/holds" && hasExpectedCode(e, 201) && body && body.id !== undefined;
});

var AnyBookDeleted = bp.EventSet("Any Books Deleted", function (e) {
  return e.name === "DELETE" && getRequestPath(e).startsWith("/books/") && hasExpectedCode(e, 200);
});

var AnyUserDeleted = bp.EventSet("Any Users Deleted", function (e) {
  return e.name === "DELETE" && getRequestPath(e).startsWith("/users/") && hasExpectedCode(e, 200);
});

var AnyLoanDeleted = bp.EventSet("Any Loans Deleted", function (e) {
  return e.name === "DELETE" && getRequestPath(e).startsWith("/loans/") && hasExpectedCode(e, 200);
});

var AnyHoldDeleted = bp.EventSet("Any Holds Deleted", function (e) {
  return e.name === "DELETE" && getRequestPath(e).startsWith("/holds/") && hasExpectedCode(e, 200);
});

//////////////////////////////////////////////////////////////////////////
// SUT list readers and verification helpers.
//
// Verification functions read the real SUT state and assert that it matches
// the scenario expectation. They are intentionally kept in the interface
// layer because they are REST-facing checks, not Context model updates.
//////////////////////////////////////////////////////////////////////////

function readSutList(listName, url, parameters) {
  try {
    var requestParameters = parameters || {};
    if (requestParameters.description === undefined || requestParameters.description === null) {
      requestParameters.description = "Verify: read " + listName + " list";
    }
    var response = svc.get(url, { parameters: requestParameters, expectedResponseCodes: [200] });
    if (response === undefined || response === null) return null;
    if (response.lib === "REST" || response.method !== undefined) return null;
    if (response.data && (response.data.lib === "REST" || response.data.method !== undefined)) return null;
    var listData = (typeof response === "string") ? JSON.parse(response) : response;
    if (!Array.isArray(listData) && listData && typeof listData.body === "string") listData = JSON.parse(listData.body);
    if (!Array.isArray(listData) && listData && Array.isArray(listData.data)) listData = listData.data;
    if (!Array.isArray(listData) && listData && Array.isArray(listData.items)) listData = listData.items;
    if (!Array.isArray(listData) && listData && Array.isArray(listData.results)) listData = listData.results;
    if (Array.isArray(listData)) return listData;
    pvg.fail("Could not inspect " + listName + " response as a SUT list");
  } catch (err) {
    if (String(err).indexOf("EndOfContextException") !== -1) return null;
    pvg.fail("Failed to read " + listName + " from the SUT: " + err);
  }
}

function verifySutListContains(listName, url, parameters, predicate, failureMessage) {
  // Verification is executed against the SUT by fetching only the requested SUT list slice before inspecting it.
  var listData = readSutList(listName, url, parameters);
  if (listData === null) return;
  var found = listData.find(predicate);
  if (!found) pvg.fail(failureMessage);
}

function verifySutListDoesNotContain(listName, url, parameters, predicate, failureMessage) {
  // Verification is executed against the SUT by fetching only the requested SUT list slice before inspecting it.
  var listData = readSutList(listName, url, parameters);
  if (listData === null) return;
  var found = listData.find(predicate);
  if (found) pvg.fail(failureMessage + ": " + JSON.stringify(found));
}

//////////////////////////////////////////////////////////////////////////
// Interface action functions.
//
// These functions are the only place stories should actuate the SUT. They
// normalize argument types, build URLs/bodies, and attach semantic parameters
// that extractEventData() can later expose to other layers.
//////////////////////////////////////////////////////////////////////////

function createBook(id, title) {
  id = asInteger(id);
  title = asString(title);
  var url = "/books"; var reqDescription = createDescription("Book", id);
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
  var url = "/books/" + id; var reqDescription = deleteDescription("Book", id);
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription, id: id }, expectedResponseCodes: finalCodes });
  return response;
}

function verifyBookExists(id) {
  // Verification is executed against the SUT dataset by reading the books list and searching for this book id.
  id = asInteger(id);
  verifySutListContains("books", "/books", { q: asString(id), description: verifyExistsDescription("Book", id, "books") }, function (item) {
    return item && asInteger(item.id) === id;
  }, "Book " + id + " was not found in the SUT books list");
}

function verifyBookAbsentFromAllLists(id) {
  // Verification is executed against SUT datasets: books directly, and loans/holds indirectly by bookId.
  id = asInteger(id);
  verifySutListDoesNotContain("books", "/books", { q: asString(id), description: verifyAbsentDescription("Book", id, "books") }, function (item) {
    return item && asInteger(item.id) === id;
  }, "Book " + id + " still appears in books list");
  verifySutListDoesNotContain("loans", "/loans", { bookId: asString(id), description: verifyAbsentDescription("Book", id, "loans") }, function (item) {
    return item && asInteger(item.bookId) === id;
  }, "Book " + id + " still appears in loans list");
  verifySutListDoesNotContain("holds", "/holds", { q: asString(id), description: verifyAbsentDescription("Book", id, "holds") }, function (item) {
    return item && asInteger(item.bookId) === id;
  }, "Book " + id + " still appears in holds list");
}

function verifyBookCannotBeDeleted(id, expectedCode) {
  // Verification is executed against the SUT by trying the delete request and expecting the SUT to reject it.
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/books/" + id;
  var description = verifyRejectedDescription("Book", id, "delete", "the operation is not allowed in this state");
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function verifyDeletedBookCannotBeDeleted(id) {
  verifyBookCannotBeDeleted(id, 404);
}

//////////////////////////////////////////////////////////////////////////
// Specific event matchers.
//
// The broad Any* EventSets classify all successful operations of a type and
// are useful for DAL effects. The match* helpers below are narrower EventSets
// for stories: they wait for or block a specific object, duplicate attempt, or
// cascading delete condition.
//////////////////////////////////////////////////////////////////////////

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

function matchDeleteBookOrUser(bookId, userId) {
  return bp.EventSet("Deleted Book/User " + bookId + "/" + userId, function (e) {
    if (e.name !== "DELETE" || !hasExpectedCode(e, 200)) return false;
    var path = getRequestPath(e);
    return path === ("/books/" + asInteger(bookId)) || path === ("/users/" + asInteger(userId));
  });
}

function matchDeleteHoldOrBookOrUser(holdId, bookId, userId) {
  return bp.EventSet("Deleted Hold/Book/User " + holdId + "/" + userId + "/" + bookId, function (e) {
    if (e.name !== "DELETE" || !hasExpectedCode(e, 200)) return false;
    var path = getRequestPath(e);
    return path === ("/holds/" + asInteger(holdId))
      || path === ("/books/" + asInteger(bookId))
      || path === ("/users/" + asInteger(userId));
  });
}

function matchAnyBookDeleted() {
  return AnyBookDeleted;
}

function deleteLoan(userId, bookId, loanNumber) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  loanNumber = loanNumber === undefined || loanNumber === null ? null : asInteger(loanNumber);
  var url = "/loans/" + userId + "/" + bookId;
  var reqDescription = deleteDescription("Loan", userId + "/" + bookId, loanNumber === null ? "" : "number " + loanNumber);
  let finalCodes = [200];
  let parameters = { description: reqDescription, userId: userId, bookId: bookId };
  if (loanNumber !== null) parameters.loanNumber = loanNumber;
  let response = svc.delete(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  return response;
}

function createLoan(userId, bookId, loanNumber, expectedCode, description) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  if (expectedCode === undefined && (loanNumber === 201 || loanNumber === 400 || loanNumber === 404)) {
    expectedCode = loanNumber;
    loanNumber = null;
  }
  loanNumber = loanNumber === undefined || loanNumber === null ? null : asInteger(loanNumber);
  var url = "/loans";
  var reqDescription = description || (createDescription("Loan", userId + "/" + bookId) + (loanNumber === null ? "" : " number " + loanNumber));
  expectedCode = expectedCode === undefined || expectedCode === null ? 201 : asInteger(expectedCode);
  let finalCodes = [expectedCode];
  var body = {
    "userId": userId,
    "bookId": bookId
  };
  let parameters = { description: reqDescription };
  if (loanNumber !== null) parameters.loanNumber = loanNumber;
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: parameters });
  return response;
}

function tryToCreateLoanAndExpectError(userId, bookId, loanNumber, expectedCode) {
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  return createLoan(userId, bookId, loanNumber, expectedCode, verifyRejectedDescription("Loan", userId + "/" + bookId, "create", "the operation is not allowed in this state"));
}

function verifyLoanExists(bookId, userId) {
  // Verification is executed against the SUT dataset by reading the loans list and searching for this composite id.
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  verifySutListContains("loans", "/loans", { userId: asString(userId), bookId: asString(bookId), description: verifyExistsDescription("Loan", userId + "/" + bookId, "loans") }, function (item) {
    return item && asInteger(item.userId) === userId && asInteger(item.bookId) === bookId;
  }, "Loan " + userId + "/" + bookId + " was not found in the SUT loans list");
}

function verifyLoanAbsentFromAllLists(bookId, userId) {
  // Verification is executed against the SUT dataset by reading the loans list and confirming the loan is absent.
  bookId = bookId === undefined || bookId === null ? null : asInteger(bookId);
  userId = asInteger(userId);
  var loanId = userId + (bookId === null ? "" : "/" + bookId);
  var parameters = { userId: asString(userId), description: verifyAbsentDescription("Loan", loanId, "loans") };
  if (bookId !== null) parameters.bookId = asString(bookId);
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
  var description = verifyRejectedDescription("Loan", userId + "/" + bookId, "delete", "the operation is not allowed in this state");
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function verifyDeletedLoanCannotBeDeleted(userId, bookId) {
  verifyLoanCannotBeDeleted(userId, bookId, 404);
}

function matchAddLoan(userId) {
  return bp.EventSet("Add Loan " + userId, function (e) {
    var body = getJsonBody(e);
    return e.name === "POST" && getRequestPath(e) === "/loans" && hasExpectedCode(e, 201) && body && asInteger(body.userId) === asInteger(userId);
  });
}

function matchDeleteLoanOrBookOrUser(userId, bookId) {
  return bp.EventSet("Deleted Loan/Book/User " + userId + "/" + bookId, function (e) {
    if (e.name !== "DELETE" || !hasExpectedCode(e, 200)) return false;
    var path = getRequestPath(e);
    return path === ("/loans/" + asInteger(userId) + "/" + asInteger(bookId))
      || path === ("/books/" + asInteger(bookId))
      || path === ("/users/" + asInteger(userId));
  });
}

function matchDeleteLoan(userId) {
  return bp.EventSet("Deleted Loans " + userId, function (e) {
    return e.name === "DELETE" && getRequestPath(e).startsWith("/loans/" + asInteger(userId) + "/") && hasExpectedCode(e, 200);
  });
}

function matchAnyLoanDeleted() {
  return AnyLoanDeleted;
}

function createUser(id, name) {
  id = asInteger(id);
  name = asString(name);
  var url = "/users"; var reqDescription = createDescription("User", id);
  let finalCodes = [201];
  var body = {
    "id": id,
    "name": name
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function tryToCreateUserWithSameIdAndExpectError(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/users";
  var reqDescription = verifyRejectedDescription("User", id, "create", "the id already exists");
  var body = {
    "id": id,
    "name": "Duplicate user " + id
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [expectedCode], parameters: { description: reqDescription } });
  return response;
}

function tryToCreateUserWithBadParametersAndExpectError(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/users";
  var reqDescription = verifyRejectedDescription("User", id, "create", "required parameters are missing or invalid");
  var body = {
    "id": id
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [expectedCode], parameters: { description: reqDescription } });
  return response;
}

function deleteUser(id) {
  id = asInteger(id);
  var url = "/users/" + id; 
  var reqDescription = deleteDescription("User", id);
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription, id: id }, expectedResponseCodes: finalCodes });
  return response;
}

function verifyUserExists(id) {
  // Verification is executed against the SUT dataset by reading the users list and searching for this user id.
  id = asInteger(id);
  verifySutListContains("users", "/users", { q: asString(id), description: verifyExistsDescription("User", id, "users") }, function (item) {
    return item && asInteger(item.id) === id;
  }, "User " + id + " was not found in the SUT users list");
}

function verifyUserAbsentFromAllLists(id) {
  // Verification is executed against SUT datasets: users directly, and loans/holds indirectly by userId.
  id = asInteger(id);
  verifySutListDoesNotContain("users", "/users", { q: asString(id), description: verifyAbsentDescription("User", id, "users") }, function (item) {
    return item && asInteger(item.id) === id;
  }, "User " + id + " still appears in users list");
  verifySutListDoesNotContain("loans", "/loans", { userId: asString(id), description: verifyAbsentDescription("User", id, "loans") }, function (item) {
    return item && asInteger(item.userId) === id;
  }, "User " + id + " still appears in loans list");
  verifySutListDoesNotContain("holds", "/holds", { q: asString(id), description: verifyAbsentDescription("User", id, "holds") }, function (item) {
    return item && asInteger(item.userId) === id;
  }, "User " + id + " still appears in holds list");
}

function verifyUserCannotBeDeleted(id, expectedCode) {
  // Verification is executed against the SUT by trying the delete request and expecting the SUT to reject it.
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/users/" + id;
  var description = verifyRejectedDescription("User", id, "delete", "the operation is not allowed in this state");
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function verifyDeletedUserCannotBeDeleted(id) {
  verifyUserCannotBeDeleted(id, 404);
}

function matchAddUser(id) {
  return bp.EventSet("Add User " + id, function (e) {
    var body = getJsonBody(e);
    return e.name === "POST" && getRequestPath(e) === "/users" && hasExpectedCode(e, 201) && body && asInteger(body.id) === asInteger(id);
  });
}

function matchAnyUserAdded() {
  return AnyUserAdded;
}

function matchDeleteUser(id) {
  return bp.EventSet("Deleted Users " + id, function (e) {
    return e.name === "DELETE" && getRequestPath(e) === ("/users/" + asInteger(id)) && hasExpectedCode(e, 200);
  });
}

function matchAnyUserDeleted() {
  return AnyUserDeleted;
}

function createHold(bookId, id, userId, expectedCode, description) {
  bookId = asInteger(bookId);
  id = asInteger(id);
  userId = asInteger(userId);
  var url = "/holds"; var reqDescription = description || (createDescription("Hold", id) + " for User " + userId + " and Book " + bookId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 201 : asInteger(expectedCode);
  let finalCodes = [expectedCode];
  var body = {
    "bookId": bookId,
    "id": id,
    "userId": userId
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function tryToCreateHoldAndExpectError(bookId, id, userId, expectedCode) {
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  return createHold(bookId, id, userId, expectedCode, verifyRejectedDescription("Hold", id, "create", "the operation is not allowed in this state"));
}

function deleteHold(id, expectedCode, userId, bookId) {
  id = asInteger(id);
  if (bookId === undefined && userId !== undefined && userId !== null) {
    bookId = userId;
    userId = expectedCode;
    expectedCode = null;
  }
  userId = userId === undefined || userId === null ? null : asInteger(userId);
  bookId = bookId === undefined || bookId === null ? null : asInteger(bookId);
  var url = "/holds/" + id;
  var reqDescription = deleteDescription("Hold", id, userId === null || bookId === null ? "" : "for User " + userId + " and Book " + bookId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 200 : asInteger(expectedCode);
  let finalCodes = [expectedCode];
  let parameters = { description: reqDescription, id: id };
  if (userId !== null) parameters.userId = userId;
  if (bookId !== null) parameters.bookId = bookId;
  let response = svc.delete(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  return response;
}

function verifyHoldExists(id) {
  // Verification is executed against the SUT dataset by reading the holds list and searching for this hold id.
  id = asInteger(id);
  verifySutListContains("holds", "/holds", { q: asString(id), description: verifyExistsDescription("Hold", id, "holds") }, function (item) {
    return item && asInteger(item.id) === id;
  }, "Hold " + id + " was not found in the SUT holds list");
}

function verifyHoldAbsentFromAllLists(id) {
  // Verification is executed against the SUT dataset by confirming this hold id is absent from the holds list.
  id = asInteger(id);
  verifySutListDoesNotContain("holds", "/holds", { q: asString(id), description: verifyAbsentDescription("Hold", id, "holds") }, function (item) {
    return item && asInteger(item.id) === id;
  }, "Hold " + id + " still appears in holds list");
}

function verifyHoldCannotBeDeleted(id, expectedCode) {
  // Verification is executed against the SUT by trying the delete request and expecting the SUT to reject it.
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/holds/" + id;
  var description = verifyRejectedDescription("Hold", id, "delete", "the operation is not allowed in this state");
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function verifyDeletedHoldCannotBeDeleted(id) {
  verifyHoldCannotBeDeleted(id, 404);
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
  return AnyHoldDeleted;
}
