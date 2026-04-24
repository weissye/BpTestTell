//@provengo summon rest
// === Auto-generated interfaces for library ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';

const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json", "api_key": "special-key" } });

const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }
function asInteger(value) { return Number.parseInt(value, 10); }
function asString(value) { return String(value); }

function listBooks(q, config) {
  var url = "/books"; var reqDescription = "List/search books {id}";
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var parameters = { description: reqDescription };
  if (q !== undefined && q !== null) parameters.q = asString(q);
  let response = svc.get(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
  }
  return response;
}

function createBook(id, q, title, config) {
  id = asInteger(id);
  title = asString(title);
  var url = "/books"; var reqDescription = "Create a book " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id,
    "title": title
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "q": q, "title": title}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "q": q, "title": title}) });
  }
  return response;
}

function getBook(id, config) {
  id = asInteger(id);
  var url = "/books/" + id; var reqDescription = "Get book by id " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 404];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return response;
}

function deleteBook(id, config) {
  id = asInteger(id);
  var url = "/books/" + id; var reqDescription = "Delete a book " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 404];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return response;
}

function tryToAddExistingBooks(id, q, title, config) {
  id = asInteger(id);
  title = asString(title);
  var url = "/books"; var reqDescription = "Try Add Existing Books " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id,
    "title": title
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "q": q, "title": title}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "q": q, "title": title}) });
  }
  return response;
}

function verifyBooksRejects(id, q, title) {
  id = asInteger(id);
  title = asString(title);
  var url = "/books";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "q": q,
    "title": title
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyBooksExists(id) {
  id = asInteger(id);
  var url = "/books/" + id;
  var description = "Verify Books " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Books found");
}

function verifyBooksDeleted(id) {
  id = asInteger(id);
  var url = "/books/" + id;
  var description = "Verify Books " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Books correctly deleted (404)");
}

function verifyBooksDoesNotExist(id) { verifyBooksDeleted(id); }

function matchAnyBooksAdded() {
  return bp.EventSet("Any Books Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a book");
  });
}

function matchDeletedBooks(id) {
  return bp.EventSet("Deleted Books " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a book") && e.name.includes(id);
  });
}

function matchAnyBooksDeleted() {
  return bp.EventSet("Any Books Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a book");
  });
}

function listLoans(userId, bookId, config) {
  var url = "/loans"; var reqDescription = "List/search loans {userId}";
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var parameters = { description: reqDescription };
  if (userId !== undefined && userId !== null) parameters.userId = asInteger(userId);
  if (bookId !== undefined && bookId !== null) parameters.bookId = asInteger(bookId);
  let response = svc.get(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
  }
  return response;
}

function createLoan(bookId, userId, config) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  var url = "/loans"; var reqDescription = "Create a loan " + userId;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 400];
  var body = {
    "bookId": bookId,
    "userId": userId
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "userId": userId}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "userId": userId}) });
  }
  return response;
}

function deleteLoan(userId, bookId, config) {
  userId = asInteger(userId);
  bookId = asInteger(bookId);
  var url = "/loans/" + userId + "/" + bookId; var reqDescription = "Delete a loan by composite id " + userId;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 404];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"userId": userId, "bookId": bookId}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"userId": userId, "bookId": bookId}) });
  }
  return response;
}

function tryToAddExistingLoans(bookId, userId, config) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  var url = "/loans"; var reqDescription = "Try Add Existing Loans " + userId;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "bookId": bookId,
    "userId": userId
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "userId": userId}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "userId": userId}) });
  }
  return response;
}

function verifyLoansRejects(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  var url = "/loans";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "bookId": bookId,
    "userId": userId
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyLoansExists(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  let res = listLoans(userId, bookId);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.userId == userId || item.id == userId);
          if (found) pvg.success("Loans found in list");
          else pvg.fail("Loans NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLoansDeleted(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  let res = listLoans(userId, bookId);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.userId == userId || item.id == userId);
          if (!found) pvg.success("Loans correctly not found in list");
          else pvg.fail("Loans still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLoansDoesNotExist(bookId, userId) { verifyLoansDeleted(bookId, userId); }

function matchAnyLoansAdded() {
  return bp.EventSet("Any Loans Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a loan");
  });
}

function matchDeletedLoans(userId) {
  return bp.EventSet("Deleted Loans " + userId, function(e) {
      return e.name.startsWith("Done: Positive: Delete a loan by composite id") && e.name.includes(userId);
  });
}

function matchAnyLoansDeleted() {
  return bp.EventSet("Any Loans Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a loan by composite id");
  });
}

function listUsers(q, config) {
  var url = "/users"; var reqDescription = "List/search users {id}";
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var parameters = { description: reqDescription };
  if (q !== undefined && q !== null) parameters.q = asString(q);
  let response = svc.get(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
  }
  return response;
}

function createUser(id, name, q, config) {
  id = asInteger(id);
  name = asString(name);
  var url = "/users"; var reqDescription = "Create a user " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id,
    "name": name
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name, "q": q}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name, "q": q}) });
  }
  return response;
}

function deleteUser(id, config) {
  id = asInteger(id);
  var url = "/users/" + id; var reqDescription = "Delete a user " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 400, 404];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return response;
}

function tryToAddExistingUsers(id, name, q, config) {
  id = asInteger(id);
  name = asString(name);
  var url = "/users"; var reqDescription = "Try Add Existing Users " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id,
    "name": name
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name, "q": q}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name, "q": q}) });
  }
  return response;
}

function verifyUsersRejects(id, name, q) {
  id = asInteger(id);
  name = asString(name);
  var url = "/users";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "name": name,
    "q": q
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyUsersExists(id, name, q) {
  id = asInteger(id);
  let res = listUsers(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Users found in list");
          else pvg.fail("Users NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUsersDeleted(id, name, q) {
  id = asInteger(id);
  let res = listUsers(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Users correctly not found in list");
          else pvg.fail("Users still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUsersDoesNotExist(id, name, q) { verifyUsersDeleted(id, name, q); }

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a user");
  });
}

function matchDeletedUsers(id) {
  return bp.EventSet("Deleted Users " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a user") && e.name.includes(id);
  });
}

function matchAnyUsersDeleted() {
  return bp.EventSet("Any Users Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a user");
  });
}

function listHolds(config) {
  var url = "/holds"; var reqDescription = "List holds {id}";
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
  }
  return response;
}

function createHold(bookId, id, userId, config) {
  bookId = asInteger(bookId);
  id = asInteger(id);
  userId = asInteger(userId);
  var url = "/holds"; var reqDescription = "Create a hold " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "bookId": bookId,
    "id": id,
    "userId": userId
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "id": id, "userId": userId}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "id": id, "userId": userId}) });
  }
  return response;
}

function deleteHold(id, config) {
  id = asInteger(id);
  var url = "/holds/" + id; var reqDescription = "Delete a hold " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return response;
}

function tryToAddExistingHolds(bookId, id, userId, config) {
  bookId = asInteger(bookId);
  id = asInteger(id);
  userId = asInteger(userId);
  var url = "/holds"; var reqDescription = "Try Add Existing Holds " + id;
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "bookId": bookId,
    "id": id,
    "userId": userId
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);

  if (code !== undefined) {
    if (code === 500) { bp.log.info("SUT_500_ERROR: Internal Server Error detected for: " + reqDescription); }
    let isExpected = finalCodes.includes(code);
    let isSuccess = (code >= 200 && code < 300);

    if (isExpected) {
      if (isSuccess) {
        bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "id": id, "userId": userId}) });
      } else {
        bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) });
      }
    } else {
      pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription + ". Expected: " + JSON.stringify(finalCodes));
    }
  } else {
    bp.log.warn("Warning: Response status missing. Inferring success from Actuator pass.");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "id": id, "userId": userId}) });
  }
  return response;
}

function verifyHoldsRejects(bookId, id, userId) {
  bookId = asInteger(bookId);
  id = asInteger(id);
  userId = asInteger(userId);
  var url = "/holds";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "bookId": bookId,
    "id": id,
    "userId": userId
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyHoldsExists(bookId, id, userId) {
  id = asInteger(id);
  let res = listHolds();
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Holds found in list");
          else pvg.fail("Holds NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyHoldsDeleted(bookId, id, userId) {
  id = asInteger(id);
  let res = listHolds();
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Holds correctly not found in list");
          else pvg.fail("Holds still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyHoldsDoesNotExist(bookId, id, userId) { verifyHoldsDeleted(bookId, id, userId); }

function matchAnyHoldsAdded() {
  return bp.EventSet("Any Holds Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a hold");
  });
}

function matchDeletedHolds(id) {
  return bp.EventSet("Deleted Holds " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a hold") && e.name.includes(id);
  });
}

function matchAnyHoldsDeleted() {
  return bp.EventSet("Any Holds Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a hold");
  });
}
