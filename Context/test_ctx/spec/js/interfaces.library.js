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
  
  var id = body.id !== undefined && body.id !== null ? body.id : parameters.id;
  var userId = body.userId !== undefined && body.userId !== null ? body.userId : parameters.userId;
  var bookId = body.bookId !== undefined && body.bookId !== null ? body.bookId : parameters.bookId;

  // Try extracting from path if they are not in body/parameters
  var pathValue = data.path || data.url || "";
  if (pathValue) {
    pathValue = String(pathValue).replace(/^https?:\/\/[^\/]+/, "");
    var segments = pathValue.split("/").filter(function (s) { return s.length > 0; });
    if (segments.length >= 2) {
      var lastSegment = segments[segments.length - 1];
      var lastSegmentInt = Number.parseInt(lastSegment, 10);
      if (!isNaN(lastSegmentInt)) {
        if (segments[0] === "users") {
          if (id === undefined || id === null) id = lastSegmentInt;
        } else if (segments[0] === "books") {
          if (id === undefined || id === null) id = lastSegmentInt;
        } else if (segments[0] === "holds") {
          if (id === undefined || id === null) id = lastSegmentInt;
        } else if (segments[0] === "loans") {
          if (segments.length >= 3) {
            var userSeg = Number.parseInt(segments[1], 10);
            var bookSeg = Number.parseInt(segments[2], 10);
            if (!isNaN(userSeg) && (userId === undefined || userId === null)) userId = userSeg;
            if (!isNaN(bookSeg) && (bookId === undefined || bookId === null)) bookId = bookSeg;
          }
        }
      }
    }
  }

  return {
    id: id,
    title: body.title !== undefined && body.title !== null ? body.title : body.name,
    name: body.name,
    userId: userId,
    bookId: bookId,
    loanNumber: parameters.loanNumber
  };
}

function isValidRequestEvent(e, actionName) {
  return e && e.data && e.data.action === actionName && e.data.type === "valid";
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
  if (e.name === "POST" && getRequestPath(e) === "/books" && hasExpectedCode(e, 201) && body && body.id !== undefined) return true;
  return isValidRequestEvent(e, "createBook");
});

var AnyUserAdded = bp.EventSet("Any Users Added", function (e) {
  var body = getJsonBody(e);
  if (e.name === "POST" && getRequestPath(e) === "/users" && hasExpectedCode(e, 201) && body && body.id !== undefined && body.name !== undefined) return true;
  return isValidRequestEvent(e, "createUser");
});

var AnyLoanAdded = bp.EventSet("Any Loans Added", function (e) {
  var body = getJsonBody(e);
  if (e.name === "POST" && getRequestPath(e) === "/loans" && hasExpectedCode(e, 201) && body && body.userId !== undefined && body.bookId !== undefined) return true;
  return isValidRequestEvent(e, "createLoan");
});

var AnyHoldAdded = bp.EventSet("Any Holds Added", function (e) {
  var body = getJsonBody(e);
  if (e.name === "POST" && getRequestPath(e) === "/holds" && hasExpectedCode(e, 201) && body && body.id !== undefined) return true;
  return isValidRequestEvent(e, "createHold");
});

var AnyBookDeleted = bp.EventSet("Any Books Deleted", function (e) {
  if (e.name === "DELETE" && getRequestPath(e).startsWith("/books/") && hasExpectedCode(e, 200)) return true;
  return isValidRequestEvent(e, "deleteBook");
});

var AnyUserDeleted = bp.EventSet("Any Users Deleted", function (e) {
  if (e.name === "DELETE" && getRequestPath(e).startsWith("/users/") && hasExpectedCode(e, 200)) return true;
  return isValidRequestEvent(e, "deleteUser");
});

var AnyLoanDeleted = bp.EventSet("Any Loans Deleted", function (e) {
  if (e.name === "DELETE" && getRequestPath(e).startsWith("/loans/") && hasExpectedCode(e, 200)) return true;
  return isValidRequestEvent(e, "deleteLoan");
});

var AnyHoldDeleted = bp.EventSet("Any Holds Deleted", function (e) {
  if (e.name === "DELETE" && getRequestPath(e).startsWith("/holds/") && hasExpectedCode(e, 200)) return true;
  return isValidRequestEvent(e, "deleteHold");
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

function tryToUpdateAndExpectError(entityName, id, url, body, expectedCode) {
  expectedCode = expectedCode === undefined || expectedCode === null ? 405 : asInteger(expectedCode);
  var description = verifyRejectedDescription(entityName, id, "update", "this API does not expose update routes");
  svc.put(url, { body: JSON.stringify(body || {}), expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function verifyMalformedDeleteIsRejected(entityName, id, url) {
  var description = verifyRejectedDescription(entityName, id, "delete", "the path parameters are malformed");
  svc.delete(url, { expectedResponseCodes: [400], parameters: { description: description } });
}

function verifyMalformedReadIsRejected(entityName, id, url) {
  var description = verifyRejectedDescription(entityName, id, "read", "the path parameters are malformed");
  svc.get(url, { expectedResponseCodes: [400], parameters: { description: description } });
}

function verifyMissingEntityReadIsRejected(entityName, id, url) {
  var description = verifyRejectedDescription(entityName, id, "read", "the entity does not exist");
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

// verifyListQueryFuzzIsAccepted and verifyLoanQueryFuzzIsRejected were removed in favor of dynamic fuzzing


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

  var validEvents = [
    bp.Event("Req: createBook (valid-standard): " + id, { action: "createBook", type: "valid", body: { id: id, title: title } }),
    bp.Event("Req: createBook (valid-spaced-title): " + id, { action: "createBook", type: "valid", body: { id: id, title: " " + title } }),
    bp.Event("Req: createBook (valid-string-id): " + id, { action: "createBook", type: "valid", body: { id: String(id), title: title } }),
    bp.Event("Req: createBook (valid-swapped-order): " + id, { action: "createBook", type: "valid", body: { title: title, id: id } })
  ];

  var invalidCases = [
    { label: "missing title", body: { "id": id } },
    { label: "missing id", body: { "title": title } },
    { label: "missing all required fields", body: {} },
    { label: "id has wrong type", body: { "id": "bad-book-id", "title": title } },
    { label: "title has wrong type", body: { "id": id, "title": 12345 } },
    { label: "multiple wrong types", body: { "id": true, "title": false } },
    { label: "id is null", body: { "id": null, "title": title } },
    { label: "title is null", body: { "id": id, "title": null } },
    { label: "id is zero", body: { "id": 0, "title": title } },
    { label: "id is negative", body: { "id": -id, "title": title } },
    { label: "title is empty", body: { "id": id, "title": "" } },
    { label: "id is object", body: { "id": { "val": id }, "title": title } }
  ];

  var invalidEvents = invalidCases.map(function(c) {
    return bp.Event("Req: createBook (invalid - " + c.label + "): " + id, { action: "createBook", type: "invalid", body: c.body });
  });

  while (true) {
    var selectedEvent = bp.sync({ request: validEvents.concat(invalidEvents) });
    var isValid = validEvents.some(function(ev) { return ev.name === selectedEvent.name; });
    if (isValid) {
      var url = "/books";
      var reqDescription = createDescription("Book", id);
      var response = svc.post(url, { body: JSON.stringify(selectedEvent.data.body), expectedResponseCodes: [201], parameters: { description: reqDescription } });
      return response;
    } else {
      var url = "/books";
      svc.post(url, { body: JSON.stringify(selectedEvent.data.body), expectedResponseCodes: [400], parameters: { description: selectedEvent.name } });
    }
  }
}

function tryToCreateBookWithSameIdAndExpectError(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/books";
  var reqDescription = verifyRejectedDescription("Book", id, "create", "the id already exists");
  var body = {
    "id": id,
    "title": "Duplicate book " + id
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [expectedCode], parameters: { description: reqDescription } });
  return response;
}

function tryToCreateBookWithBadParametersAndExpectError(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/books";
  var reqDescription = verifyRejectedDescription("Book", id, "create", "required parameters are missing or invalid");
  var cases = [
    { name: "missing title", body: { "id": id } },
    { name: "missing id", body: { "title": "Book title " + id } },
    { name: "missing all required fields", body: {} },
    { name: "id has wrong type", body: { "id": "bad-book-id", "title": "Book title " + id } },
    { name: "title has wrong type", body: { "id": id, "title": 12345 } },
    { name: "multiple wrong types", body: { "id": true, "title": false } },
    { name: "id and title have swapped types", body: { "title": id, "id": "Book title " + id } },
    { name: "id is null", body: { "id": null, "title": "Book title " + id } },
    { name: "title is null", body: { "id": id, "title": null } },
    { name: "id is zero", body: { "id": 0, "title": "Book title " + id } },
    { name: "id is negative", body: { "id": -id, "title": "Book title " + id } },
    { name: "title is empty", body: { "id": id, "title": "" } },
    { name: "unexpected field", body: { "id": id, "title": "Book title " + id, "unexpected": "value" } }
  ];
  for (let i = 0; i < cases.length; i++) {
    svc.post(url, { body: JSON.stringify(cases[i].body), expectedResponseCodes: [expectedCode], parameters: { description: reqDescription + " - " + cases[i].name } });
  }
}

function deleteBook(id) {
  id = asInteger(id);

  var validEvent = bp.Event("Req: deleteBook (valid): " + id, { action: "deleteBook", type: "valid", url: "/books/" + id });

  var invalidCases = [
    { label: "bad-id", url: "/books/bad-id" },
    { label: "zero", url: "/books/0" },
    { label: "negative", url: "/books/-1" }
  ];

  var invalidEvents = invalidCases.map(function(c) {
    return bp.Event("Req: deleteBook (invalid - " + c.label + "): " + id, { action: "deleteBook", type: "invalid", url: c.url });
  });

  while (true) {
    var selectedEvent = bp.sync({ request: [validEvent].concat(invalidEvents) });
    if (selectedEvent.name === validEvent.name) {
      var url = "/books/" + id;
      var reqDescription = deleteDescription("Book", id);
      var response = svc.delete(url, { parameters: { description: reqDescription, id: id }, expectedResponseCodes: [200] });
      return response;
    } else {
      svc.delete(selectedEvent.data.url, { expectedResponseCodes: [400], parameters: { description: selectedEvent.name } });
    }
  }
}

function verifyBookDetailExists(id) {
  id = asInteger(id);
  var description = verifyExistsDescription("Book", id, "book detail");
  var response = svc.get("/books/" + id, { parameters: { description: description, id: id }, expectedResponseCodes: [200] });
  if (response === undefined || response === null) return;
  if (response.lib === "REST" || response.method !== undefined) return;
  if (response.data && (response.data.lib === "REST" || response.data.method !== undefined)) return;
  var bookData = (typeof response === "string") ? JSON.parse(response) : response;
  if (bookData && typeof bookData.body === "string") bookData = JSON.parse(bookData.body);
  if (!bookData || asInteger(bookData.id) !== id) pvg.fail("Book " + id + " detail response did not contain the requested id");
}

// verifyBookReadFuzz and verifyBookDeleteFuzz were removed in favor of dynamic fuzzing in createBook/deleteBook

function tryToUpdateBookAndExpectError(id, body, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 405 : asInteger(expectedCode);
  tryToUpdateAndExpectError("Book", id, "/books/" + id, body, expectedCode);
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

function tryToDeleteBookAndExpectError(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/books/" + id;
  var description = verifyRejectedDescription("Book", id, "delete", "the operation is not allowed in this state");
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
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
    if (e.name === "POST" && getRequestPath(e) === "/books" && hasExpectedCode(e, 201) && body && asInteger(body.id) === asInteger(id)) return true;
    return isValidRequestEvent(e, "createBook") && e.data.body && asInteger(e.data.body.id) === asInteger(id);
  });
}

function matchDeleteBook(id) {
  return bp.EventSet("Deleted Books " + id, function (e) {
    if (e.name === "DELETE" && getRequestPath(e) === ("/books/" + asInteger(id)) && hasExpectedCode(e, 200)) return true;
    return isValidRequestEvent(e, "deleteBook") && e.data.url === ("/books/" + asInteger(id));
  });
}

function matchDeleteBookOrUser(bookId, userId) {
  return bp.EventSet("Deleted Book/User " + bookId + "/" + userId, function (e) {
    if (e.name === "DELETE" && hasExpectedCode(e, 200)) {
      var path = getRequestPath(e);
      if (path === ("/books/" + asInteger(bookId)) || path === ("/users/" + asInteger(userId))) return true;
    }
    if (isValidRequestEvent(e, "deleteBook") && e.data.url === ("/books/" + asInteger(bookId))) return true;
    if (isValidRequestEvent(e, "deleteUser") && e.data.url === ("/users/" + asInteger(userId))) return true;
    return false;
  });
}

function matchDeleteHoldOrBookOrUser(holdId, bookId, userId) {
  return bp.EventSet("Deleted Hold/Book/User " + holdId + "/" + userId + "/" + bookId, function (e) {
    if (e.name === "DELETE" && hasExpectedCode(e, 200)) {
      var path = getRequestPath(e);
      if (path === ("/holds/" + asInteger(holdId)) || path === ("/books/" + asInteger(bookId)) || path === ("/users/" + asInteger(userId))) return true;
    }
    if (isValidRequestEvent(e, "deleteHold") && e.data.url === ("/holds/" + asInteger(holdId))) return true;
    if (isValidRequestEvent(e, "deleteBook") && e.data.url === ("/books/" + asInteger(bookId))) return true;
    if (isValidRequestEvent(e, "deleteUser") && e.data.url === ("/users/" + asInteger(userId))) return true;
    return false;
  });
}

function matchAddLoanForHeldResourceOrDeleteHoldOrBookOrUser(holdId, bookId, userId) {
  return bp.EventSet("Added Loan for Held Resource or Deleted Hold/Book/User " + holdId + "/" + userId + "/" + bookId, function (e) {
    if (e.name === "POST" && getRequestPath(e) === "/loans" && hasExpectedCode(e, 201)) {
      var body = getJsonBody(e);
      if (body && (asInteger(body.userId) === asInteger(userId) || asInteger(body.bookId) === asInteger(bookId))) return true;
    }
    if (isValidRequestEvent(e, "createLoan") && e.data.body) {
      if (asInteger(e.data.body.userId) === asInteger(userId) || asInteger(e.data.body.bookId) === asInteger(bookId)) return true;
    }
    if (e.name === "DELETE" && hasExpectedCode(e, 200)) {
      var path = getRequestPath(e);
      if (path === ("/holds/" + asInteger(holdId)) || path === ("/books/" + asInteger(bookId)) || path === ("/users/" + asInteger(userId))) return true;
    }
    if (isValidRequestEvent(e, "deleteHold") && e.data.url === ("/holds/" + asInteger(holdId))) return true;
    if (isValidRequestEvent(e, "deleteBook") && e.data.url === ("/books/" + asInteger(bookId))) return true;
    if (isValidRequestEvent(e, "deleteUser") && e.data.url === ("/users/" + asInteger(userId))) return true;
    return false;
  });
}

function matchAnyBookDeleted() {
  return AnyBookDeleted;
}

function deleteLoan(userId, bookId, loanNumber) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  loanNumber = loanNumber === undefined || loanNumber === null ? null : asInteger(loanNumber);

  var validEvent = bp.Event("Req: deleteLoan (valid): " + userId + "/" + bookId, { action: "deleteLoan", type: "valid", url: "/loans/" + userId + "/" + bookId });

  var invalidCases = [
    { label: "bad-user-id", url: "/loans/bad-user-id/" + bookId },
    { label: "bad-book-id", url: "/loans/" + userId + "/bad-book-id" },
    { label: "zero userId", url: "/loans/0/" + bookId },
    { label: "zero bookId", url: "/loans/" + userId + "/0" },
    { label: "negative userId", url: "/loans/-1/" + bookId },
    { label: "negative bookId", url: "/loans/" + userId + "/-1" }
  ];

  var invalidEvents = invalidCases.map(function(c) {
    return bp.Event("Req: deleteLoan (invalid - " + c.label + "): " + userId + "/" + bookId, { action: "deleteLoan", type: "invalid", url: c.url });
  });

  while (true) {
    var selectedEvent = bp.sync({ request: [validEvent].concat(invalidEvents) });
    if (selectedEvent.name === validEvent.name) {
      var url = "/loans/" + userId + "/" + bookId;
      var reqDescription = deleteDescription("Loan", userId + "/" + bookId, loanNumber === null ? "" : "number " + loanNumber);
      let parameters = { description: reqDescription, userId: userId, bookId: bookId };
      if (loanNumber !== null) parameters.loanNumber = loanNumber;
      var response = svc.delete(url, { parameters: parameters, expectedResponseCodes: [200] });
      return response;
    } else {
      svc.delete(selectedEvent.data.url, { expectedResponseCodes: [400], parameters: { description: selectedEvent.name } });
    }
  }
}

// verifyLoanReadFuzz and verifyLoanDeleteFuzz were removed in favor of dynamic fuzzing in createLoan/deleteLoan

function tryToUpdateLoanAndExpectError(userId, bookId, body, expectedCode) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 405 : asInteger(expectedCode);
  tryToUpdateAndExpectError("Loan", userId + "/" + bookId, "/loans/" + userId + "/" + bookId, body, expectedCode);
}

function createLoan(userId, bookId, loanNumber, expectedCode, description) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  if (expectedCode === undefined && (loanNumber === 201 || loanNumber === 400 || loanNumber === 404)) {
    expectedCode = loanNumber;
    loanNumber = null;
  }
  loanNumber = loanNumber === undefined || loanNumber === null ? null : asInteger(loanNumber);

  var validEvents = [
    bp.Event("Req: createLoan (valid-standard): " + userId + "/" + bookId, { action: "createLoan", type: "valid", body: { userId: userId, bookId: bookId } }),
    bp.Event("Req: createLoan (valid-string-userId): " + userId + "/" + bookId, { action: "createLoan", type: "valid", body: { userId: String(userId), bookId: bookId } }),
    bp.Event("Req: createLoan (valid-string-bookId): " + userId + "/" + bookId, { action: "createLoan", type: "valid", body: { userId: userId, bookId: String(bookId) } }),
    bp.Event("Req: createLoan (valid-swapped-order): " + userId + "/" + bookId, { action: "createLoan", type: "valid", body: { bookId: bookId, userId: userId } })
  ];

  var invalidCases = [
    { label: "missing bookId", body: { "userId": userId } },
    { label: "missing userId", body: { "bookId": bookId } },
    { label: "missing all required fields", body: {} },
    { label: "userId has wrong type", body: { "userId": "bad-user-id", "bookId": bookId } },
    { label: "bookId has wrong type", body: { "userId": userId, "bookId": "bad-book-id" } },
    { label: "multiple wrong types", body: { "userId": true, "bookId": false } },
    { label: "userId is null", body: { "userId": null, "bookId": bookId } },
    { label: "bookId is null", body: { "userId": userId, "bookId": null } },
    { label: "userId is zero", body: { "userId": 0, "bookId": bookId } },
    { label: "bookId is zero", body: { "userId": userId, "bookId": 0 } },
    { label: "userId is negative", body: { "userId": -userId, "bookId": bookId } },
    { label: "bookId is negative", body: { "userId": userId, "bookId": -bookId } },
    { label: "userId is object", body: { "userId": { "val": userId }, "bookId": bookId } },
    { label: "bookId is object", body: { "userId": userId, "bookId": { "val": bookId } } }
  ];

  var invalidEvents = invalidCases.map(function(c) {
    return bp.Event("Req: createLoan (invalid - " + c.label + "): " + userId + "/" + bookId, { action: "createLoan", type: "invalid", body: c.body });
  });

  while (true) {
    var selectedEvent = bp.sync({ request: validEvents.concat(invalidEvents) });
    var isValid = validEvents.some(function(ev) { return ev.name === selectedEvent.name; });
    if (isValid) {
      var url = "/loans";
      var reqDescription = description || (createDescription("Loan", userId + "/" + bookId) + (loanNumber === null ? "" : " number " + loanNumber));
      expectedCode = expectedCode === undefined || expectedCode === null ? 201 : asInteger(expectedCode);
      let parameters = { description: reqDescription };
      if (loanNumber !== null) parameters.loanNumber = loanNumber;
      var response = svc.post(url, { body: JSON.stringify(selectedEvent.data.body), expectedResponseCodes: [expectedCode], parameters: parameters });
      return response;
    } else {
      var url = "/loans";
      svc.post(url, { body: JSON.stringify(selectedEvent.data.body), expectedResponseCodes: [400], parameters: { description: selectedEvent.name } });
    }
  }
}

function tryToCreateLoanAndExpectError(userId, bookId, loanNumber, expectedCode) {
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  return createLoan(userId, bookId, loanNumber, expectedCode, verifyRejectedDescription("Loan", userId + "/" + bookId, "create", "the operation is not allowed in this state"));
}

function tryToCreateLoanWithBadParametersAndExpectError(userId, expectedCode) {
  userId = asInteger(userId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/loans";
  var reqDescription = verifyRejectedDescription("Loan", userId, "create", "required parameters are missing or invalid");
  var cases = [
    { name: "missing bookId", body: { "userId": userId } },
    { name: "missing userId", body: { "bookId": userId } },
    { name: "missing all required fields", body: {} },
    { name: "userId has wrong type", body: { "userId": "bad-user-id", "bookId": userId } },
    { name: "bookId has wrong type", body: { "userId": userId, "bookId": "bad-book-id" } },
    { name: "multiple wrong types", body: { "userId": true, "bookId": false } },
    { name: "userId and bookId have swapped invalid values", body: { "bookId": userId, "userId": -userId } },
    { name: "userId is null", body: { "userId": null, "bookId": userId } },
    { name: "bookId is null", body: { "userId": userId, "bookId": null } },
    { name: "userId is zero", body: { "userId": 0, "bookId": userId } },
    { name: "bookId is zero", body: { "userId": userId, "bookId": 0 } },
    { name: "userId is negative", body: { "userId": -userId, "bookId": userId } },
    { name: "bookId is negative", body: { "userId": userId, "bookId": -userId } },
    { name: "unexpected field", body: { "userId": userId, "bookId": userId, "unexpected": "value" } }
  ];
  for (let i = 0; i < cases.length; i++) {
    svc.post(url, { body: JSON.stringify(cases[i].body), expectedResponseCodes: [expectedCode], parameters: { description: reqDescription + " - " + cases[i].name } });
  }
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

function tryToDeleteLoanAndExpectError(userId, bookId, expectedCode) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/loans/" + userId + "/" + bookId;
  var description = verifyRejectedDescription("Loan", userId + "/" + bookId, "delete", "the operation is not allowed in this state");
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function matchAddLoan(userId) {
  return bp.EventSet("Add Loan " + userId, function (e) {
    var body = getJsonBody(e);
    if (e.name === "POST" && getRequestPath(e) === "/loans" && hasExpectedCode(e, 201) && body && asInteger(body.userId) === asInteger(userId)) return true;
    return isValidRequestEvent(e, "createLoan") && e.data.body && asInteger(e.data.body.userId) === asInteger(userId);
  });
}

function matchDeleteLoanOrBookOrUser(userId, bookId) {
  return bp.EventSet("Deleted Loan/Book/User " + userId + "/" + bookId, function (e) {
    if (e.name === "DELETE" && hasExpectedCode(e, 200)) {
      var path = getRequestPath(e);
      if (path === ("/loans/" + asInteger(userId) + "/" + asInteger(bookId))
        || path === ("/books/" + asInteger(bookId))
        || path === ("/users/" + asInteger(userId))) return true;
    }
    if (isValidRequestEvent(e, "deleteLoan") && e.data.url === ("/loans/" + asInteger(userId) + "/" + asInteger(bookId))) return true;
    if (isValidRequestEvent(e, "deleteBook") && e.data.url === ("/books/" + asInteger(bookId))) return true;
    if (isValidRequestEvent(e, "deleteUser") && e.data.url === ("/users/" + asInteger(userId))) return true;
    return false;
  });
}

function matchDeleteLoan(userId) {
  return bp.EventSet("Deleted Loans " + userId, function (e) {
    if (e.name === "DELETE" && getRequestPath(e).startsWith("/loans/" + asInteger(userId) + "/") && hasExpectedCode(e, 200)) return true;
    return isValidRequestEvent(e, "deleteLoan") && e.data.url.startsWith("/loans/" + asInteger(userId) + "/");
  });
}

function matchAnyLoanDeleted() {
  return AnyLoanDeleted;
}

function createUser(id, name) {
  id = asInteger(id);
  name = asString(name);

  var validEvents = [
    bp.Event("Req: createUser (valid-standard): " + id, { action: "createUser", type: "valid", body: { id: id, name: name } }),
    bp.Event("Req: createUser (valid-spaced-name): " + id, { action: "createUser", type: "valid", body: { id: id, name: " " + name } }),
    bp.Event("Req: createUser (valid-string-id): " + id, { action: "createUser", type: "valid", body: { id: String(id), name: name } }),
    bp.Event("Req: createUser (valid-swapped-order): " + id, { action: "createUser", type: "valid", body: { name: name, id: id } })
  ];

  var invalidCases = [
    { label: "missing name", body: { "id": id } },
    { label: "missing id", body: { "name": name } },
    { label: "missing all required fields", body: {} },
    { label: "id has wrong type", body: { "id": "bad-user-id", "name": name } },
    { label: "name has wrong type", body: { "id": id, "name": 12345 } },
    { label: "multiple wrong types", body: { "id": true, "name": false } },
    { label: "id is null", body: { "id": null, "name": name } },
    { label: "name is null", body: { "id": id, "name": null } },
    { label: "id is zero", body: { "id": 0, "name": name } },
    { label: "id is negative", body: { "id": -id, "name": name } },
    { label: "name is empty", body: { "id": id, "name": "" } },
    { label: "id is object", body: { "id": { "val": id }, "name": name } }
  ];

  var invalidEvents = invalidCases.map(function(c) {
    return bp.Event("Req: createUser (invalid - " + c.label + "): " + id, { action: "createUser", type: "invalid", body: c.body });
  });

  while (true) {
    var selectedEvent = bp.sync({ request: validEvents.concat(invalidEvents) });
    var isValid = validEvents.some(function(ev) { return ev.name === selectedEvent.name; });
    if (isValid) {
      var url = "/users";
      var reqDescription = createDescription("User", id);
      var response = svc.post(url, { body: JSON.stringify(selectedEvent.data.body), expectedResponseCodes: [201], parameters: { description: reqDescription } });
      return response;
    } else {
      var url = "/users";
      svc.post(url, { body: JSON.stringify(selectedEvent.data.body), expectedResponseCodes: [400], parameters: { description: selectedEvent.name } });
    }
  }
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
  var cases = [
    { name: "missing name", body: { "id": id } },
    { name: "missing id", body: { "name": "User name " + id } },
    { name: "missing all required fields", body: {} },
    { name: "id has wrong type", body: { "id": "bad-user-id", "name": "User name " + id } },
    { name: "name has wrong type", body: { "id": id, "name": 12345 } },
    { name: "multiple wrong types", body: { "id": true, "name": false } },
    { name: "id and name have swapped types", body: { "name": id, "id": "User name " + id } },
    { name: "id is null", body: { "id": null, "name": "User name " + id } },
    { name: "name is null", body: { "id": id, "name": null } },
    { name: "id is zero", body: { "id": 0, "name": "User name " + id } },
    { name: "id is negative", body: { "id": -id, "name": "User name " + id } },
    { name: "name is empty", body: { "id": id, "name": "" } },
    { name: "unexpected field", body: { "id": id, "name": "User name " + id, "unexpected": "value" } }
  ];
  for (let i = 0; i < cases.length; i++) {
    svc.post(url, { body: JSON.stringify(cases[i].body), expectedResponseCodes: [expectedCode], parameters: { description: reqDescription + " - " + cases[i].name } });
  }
}

function deleteUser(id) {
  id = asInteger(id);

  var validEvent = bp.Event("Req: deleteUser (valid): " + id, { action: "deleteUser", type: "valid", url: "/users/" + id });

  var invalidCases = [
    { label: "bad-id", url: "/users/bad-id" },
    { label: "zero", url: "/users/0" },
    { label: "negative", url: "/users/-1" }
  ];

  var invalidEvents = invalidCases.map(function(c) {
    return bp.Event("Req: deleteUser (invalid - " + c.label + "): " + id, { action: "deleteUser", type: "invalid", url: c.url });
  });

  while (true) {
    var selectedEvent = bp.sync({ request: [validEvent].concat(invalidEvents) });
    if (selectedEvent.name === validEvent.name) {
      var url = "/users/" + id;
      var reqDescription = deleteDescription("User", id);
      var response = svc.delete(url, { parameters: { description: reqDescription, id: id }, expectedResponseCodes: [200] });
      return response;
    } else {
      svc.delete(selectedEvent.data.url, { expectedResponseCodes: [400], parameters: { description: selectedEvent.name } });
    }
  }
}

// verifyUserReadFuzz and verifyUserDeleteFuzz were removed in favor of dynamic fuzzing in createUser/deleteUser

function tryToUpdateUserAndExpectError(id, body, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 405 : asInteger(expectedCode);
  tryToUpdateAndExpectError("User", id, "/users/" + id, body, expectedCode);
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

function tryToDeleteUserAndExpectError(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/users/" + id;
  var description = verifyRejectedDescription("User", id, "delete", "the operation is not allowed in this state");
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function matchAddUser(id) {
  return bp.EventSet("Add User " + id, function (e) {
    var body = getJsonBody(e);
    if (e.name === "POST" && getRequestPath(e) === "/users" && hasExpectedCode(e, 201) && body && asInteger(body.id) === asInteger(id)) return true;
    return isValidRequestEvent(e, "createUser") && e.data.body && asInteger(e.data.body.id) === asInteger(id);
  });
}

function matchAnyUserAdded() {
  return AnyUserAdded;
}

function matchDeleteUser(id) {
  return bp.EventSet("Deleted Users " + id, function (e) {
    if (e.name === "DELETE" && getRequestPath(e) === ("/users/" + asInteger(id)) && hasExpectedCode(e, 200)) return true;
    return isValidRequestEvent(e, "deleteUser") && e.data.url === ("/users/" + asInteger(id));
  });
}

function matchAnyUserDeleted() {
  return AnyUserDeleted;
}

function createHold(bookId, id, userId, expectedCode, description) {
  bookId = asInteger(bookId);
  id = asInteger(id);
  userId = asInteger(userId);

  var validEvents = [
    bp.Event("Req: createHold (valid-standard): " + id, { action: "createHold", type: "valid", body: { id: id, userId: userId, bookId: bookId } }),
    bp.Event("Req: createHold (valid-string-id): " + id, { action: "createHold", type: "valid", body: { id: String(id), userId: userId, bookId: bookId } }),
    bp.Event("Req: createHold (valid-swapped-order): " + id, { action: "createHold", type: "valid", body: { bookId: bookId, id: id, userId: userId } })
  ];

  var invalidCases = [
    { name: "missing bookId", body: { "id": id, "userId": userId } },
    { name: "missing userId", body: { "id": id, "bookId": bookId } },
    { name: "missing id", body: { "userId": userId, "bookId": bookId } },
    { name: "missing all required fields", body: {} },
    { name: "id has wrong type", body: { "id": "bad-hold-id", "userId": userId, "bookId": bookId } },
    { name: "userId has wrong type", body: { "id": id, "userId": "bad-user-id", "bookId": bookId } },
    { name: "bookId has wrong type", body: { "id": id, "userId": userId, "bookId": "bad-book-id" } },
    { name: "multiple wrong types", body: { "id": true, "userId": false, "bookId": "bad-book-id" } },
    { name: "id is null", body: { "id": null, "userId": userId, "bookId": bookId } },
    { name: "userId is null", body: { "id": id, "userId": null, "bookId": bookId } },
    { name: "bookId is null", body: { "id": id, "userId": userId, "bookId": null } },
    { name: "id is zero", body: { "id": 0, "userId": userId, "bookId": bookId } },
    { name: "userId is zero", body: { "id": id, "userId": 0, "bookId": bookId } },
    { name: "bookId is zero", body: { "id": id, "userId": userId, "bookId": 0 } },
    { name: "id is negative", body: { "id": -id, "userId": userId, "bookId": bookId } },
    { name: "userId is negative", body: { "id": id, "userId": -userId, "bookId": bookId } },
    { name: "bookId is negative", body: { "id": id, "userId": userId, "bookId": -bookId } },
    { name: "id is object", body: { "id": { "val": id }, "userId": userId, "bookId": bookId } },
    { name: "userId is object", body: { "id": id, "userId": { "val": userId }, "bookId": bookId } },
    { name: "bookId is object", body: { "id": id, "userId": userId, "bookId": { "val": bookId } } }
  ];

  var invalidEvents = invalidCases.map(function(c) {
    return bp.Event("Req: createHold (invalid - " + c.name + "): " + id, { action: "createHold", type: "invalid", body: c.body });
  });

  while (true) {
    var selectedEvent = bp.sync({ request: validEvents.concat(invalidEvents) });
    var isValid = validEvents.some(function(ev) { return ev.name === selectedEvent.name; });
    if (isValid) {
      var url = "/holds";
      var reqDescription = description || (createDescription("Hold", id) + " for User " + userId + " and Book " + bookId);
      expectedCode = expectedCode === undefined || expectedCode === null ? 201 : asInteger(expectedCode);
      var response = svc.post(url, { body: JSON.stringify(selectedEvent.data.body), expectedResponseCodes: [expectedCode], parameters: { description: reqDescription } });
      return response;
    } else {
      var url = "/holds";
      svc.post(url, { body: JSON.stringify(selectedEvent.data.body), expectedResponseCodes: [400], parameters: { description: selectedEvent.name } });
    }
  }
}

function tryToCreateHoldAndExpectError(bookId, id, userId, expectedCode) {
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  return createHold(bookId, id, userId, expectedCode, verifyRejectedDescription("Hold", id, "create", "the operation is not allowed in this state"));
}

function tryToCreateHoldWithSameIdAndExpectError(bookId, id, userId, expectedCode) {
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  return createHold(bookId, id, userId, expectedCode, verifyRejectedDescription("Hold", id, "create", "the id already exists"));
}

function tryToCreateHoldWithBadParametersAndExpectError(id, userId, expectedCode) {
  id = asInteger(id);
  userId = asInteger(userId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/holds";
  var reqDescription = verifyRejectedDescription("Hold", id, "create", "required parameters are missing or invalid");
  var cases = [
    { name: "missing bookId", body: { "id": id, "userId": userId } },
    { name: "missing userId", body: { "id": id, "bookId": userId } },
    { name: "missing id", body: { "userId": userId, "bookId": userId } },
    { name: "missing all required fields", body: {} },
    { name: "id has wrong type", body: { "id": "bad-hold-id", "userId": userId, "bookId": userId } },
    { name: "userId has wrong type", body: { "id": id, "userId": "bad-user-id", "bookId": userId } },
    { name: "bookId has wrong type", body: { "id": id, "userId": userId, "bookId": "bad-book-id" } },
    { name: "multiple wrong types", body: { "id": true, "userId": false, "bookId": "bad-book-id" } },
    { name: "parameters have swapped invalid values", body: { "bookId": id, "id": "Hold " + id, "userId": "User " + userId } },
    { name: "id is null", body: { "id": null, "userId": userId, "bookId": userId } },
    { name: "userId is null", body: { "id": id, "userId": null, "bookId": userId } },
    { name: "bookId is null", body: { "id": id, "userId": userId, "bookId": null } },
    { name: "id is zero", body: { "id": 0, "userId": userId, "bookId": userId } },
    { name: "userId is zero", body: { "id": id, "userId": 0, "bookId": userId } },
    { name: "bookId is zero", body: { "id": id, "userId": userId, "bookId": 0 } },
    { name: "id is negative", body: { "id": -id, "userId": userId, "bookId": userId } },
    { name: "userId is negative", body: { "id": id, "userId": -userId, "bookId": userId } },
    { name: "bookId is negative", body: { "id": id, "userId": userId, "bookId": -userId } },
    { name: "unexpected field", body: { "id": id, "userId": userId, "bookId": userId, "unexpected": "value" } }
  ];
  for (let i = 0; i < cases.length; i++) {
    svc.post(url, { body: JSON.stringify(cases[i].body), expectedResponseCodes: [expectedCode], parameters: { description: reqDescription + " - " + cases[i].name } });
  }
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

  var validEvent = bp.Event("Req: deleteHold (valid): " + id, { action: "deleteHold", type: "valid", url: "/holds/" + id });

  var invalidCases = [
    { label: "bad-id", url: "/holds/bad-id" },
    { label: "zero", url: "/holds/0" },
    { label: "negative", url: "/holds/-1" }
  ];

  var invalidEvents = invalidCases.map(function(c) {
    return bp.Event("Req: deleteHold (invalid - " + c.label + "): " + id, { action: "deleteHold", type: "invalid", url: c.url });
  });

  while (true) {
    var selectedEvent = bp.sync({ request: [validEvent].concat(invalidEvents) });
    if (selectedEvent.name === validEvent.name) {
      var url = "/holds/" + id;
      var reqDescription = deleteDescription("Hold", id, userId === null || bookId === null ? "" : "for User " + userId + " and Book " + bookId);
      expectedCode = expectedCode === undefined || expectedCode === null ? 200 : asInteger(expectedCode);
      let parameters = { description: reqDescription, id: id };
      if (userId !== null) parameters.userId = userId;
      if (bookId !== null) parameters.bookId = bookId;
      var response = svc.delete(url, { parameters: parameters, expectedResponseCodes: [expectedCode] });
      return response;
    } else {
      svc.delete(selectedEvent.data.url, { expectedResponseCodes: [400], parameters: { description: selectedEvent.name } });
    }
  }
}

// verifyHoldReadFuzz and verifyHoldDeleteFuzz were removed in favor of dynamic fuzzing in createHold/deleteHold

function tryToUpdateHoldAndExpectError(id, userId, bookId, body, expectedCode) {
  id = asInteger(id);
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  expectedCode = expectedCode === undefined || expectedCode === null ? 405 : asInteger(expectedCode);
  tryToUpdateAndExpectError("Hold", id, "/holds/" + id, body, expectedCode);
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

function tryToDeleteHoldAndExpectError(id, expectedCode) {
  id = asInteger(id);
  expectedCode = expectedCode === undefined || expectedCode === null ? 400 : asInteger(expectedCode);
  var url = "/holds/" + id;
  var description = verifyRejectedDescription("Hold", id, "delete", "the operation is not allowed in this state");
  svc.delete(url, { expectedResponseCodes: [expectedCode], parameters: { description: description } });
}

function matchAddHold(id) {
  return bp.EventSet("Add Hold " + id, function (e) {
    var body = getJsonBody(e);
    if (e.name === "POST" && getRequestPath(e) === "/holds" && hasExpectedCode(e, 201) && body && asInteger(body.id) === asInteger(id)) return true;
    return isValidRequestEvent(e, "createHold") && e.data.body && asInteger(e.data.body.id) === asInteger(id);
  });
}

function matchDeleteHold(id) {
  return bp.EventSet("Deleted Holds " + id, function (e) {
    if (e.name === "DELETE" && getRequestPath(e) === ("/holds/" + asInteger(id)) && hasExpectedCode(e, 200)) return true;
    return isValidRequestEvent(e, "deleteHold") && e.data.url === ("/holds/" + asInteger(id));
  });
}

function matchAnyHoldDeleted() {
  return AnyHoldDeleted;
}
