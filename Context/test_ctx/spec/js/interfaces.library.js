//@provengo summon rest
// === Auto-generated interfaces for library ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 23242;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';

const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json", "api_key": "special-key" } });

const pvg = { fail: function (msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({ waitFor: eventSet }); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function (e) { return e.name === "Done: Positive: " + desc; }); }
function asInteger(value) { return Number.parseInt(value, 10); }
function asString(value) { return String(value); }

function listBooks(q) {
  var url = "/books"; var reqDescription = "List/search books {id}";
  let finalCodes = [200];
  var parameters = { description: reqDescription };
  if (q !== undefined && q !== null) parameters.q = asString(q);
  let response = svc.get(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  return response;
}

function createBook(id, q, title) {
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

function tryToAddExistingBooks(id, q, title) {
  id = asInteger(id);
  title = asString(title);
  var url = "/books"; var reqDescription = "Rainy: Try Add Existing Books " + id;
  let finalCodes = [400, 409];
  var body = {
    "id": id,
    "title": title
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function verifyBooksRejects(id, q, title) {
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

function verifyBooksExists(id) {
  id = asInteger(id);
  var url = "/books/" + id;
  var description = "Verify Books " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
}

function verifyBooksDeleted(id) {
  id = asInteger(id);
  var url = "/books/" + id;
  var description = "Verify Books " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function verifyBooksDoesNotExist(id) { verifyBooksDeleted(id); }

function verifyBookCantBeDeleted(id) {
  id = asInteger(id);
  var url = "/books/" + id;
  var description = "Verify Book " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [400], parameters: { description: description } });
}

function matchAnyBooksAdded() {
  return bp.EventSet("Any Books Added", function (e) {
    return e.name === "POST" && e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.startsWith("Create a book ");
  });
}

function matchDeletedBooks(id) {
  return bp.EventSet("Deleted Books " + id, function (e) {
    return e.name === "DELETE" && e.data && e.data.parameters && e.data.parameters.description === ("Delete a book " + id);
  });
}

function matchAnyBooksDeleted() {
  return bp.EventSet("Any Books Deleted", function (e) {
    return e.name === "DELETE" && e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.startsWith("Delete a book ");
  });
}

function listLoans(userId, bookId) {
  var url = "/loans"; var reqDescription = "List/search loans {userId}";
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

function tryToAddExistingLoans(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  var url = "/loans"; var reqDescription = "Rainy: Try Add Existing Loans " + userId;
  let finalCodes = [400, 409];
  var body = {
    "bookId": bookId,
    "userId": userId
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function verifyLoansRejects(bookId, userId) {
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

function verifyLoansExists(bookId, userId) {
  bookId = asInteger(bookId);
  userId = asInteger(userId);
  let res = listLoans(userId, bookId);
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.userId == userId || item.id == userId);
      if (!found) pvg.fail("Loans NOT found in list");
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
      if (found) pvg.fail("Loans still found in list (deletion failed)");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLoansDoesNotExist(bookId, userId) { verifyLoansDeleted(bookId, userId); }

function matchAnyLoansAdded() {
  return bp.EventSet("Any Loans Added", function (e) {
    return e.name === "POST" && e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.startsWith("Create a loan ");
  });
}

function matchDeletedLoans(userId) {
  return bp.EventSet("Deleted Loans " + userId, function (e) {
    return e.name.startsWith("Done: Positive: Delete a loan by composite id") && e.name.includes(userId);
  });
}

function matchAnyLoansDeleted() {
  return bp.EventSet("Any Loans Deleted", function (e) {
    return e.name === "DELETE" && e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.startsWith("Delete a loan ");
  });
}

function listUsers(q) {
  var url = "/users"; var reqDescription = "List/search users {id}";
  let finalCodes = [200];
  var parameters = { description: reqDescription };
  if (q !== undefined && q !== null) parameters.q = asString(q);
  let response = svc.get(url, { parameters: parameters, expectedResponseCodes: finalCodes });
  return response;
}

function createUser(id, name, q) {
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
  var url = "/users/" + id; var reqDescription = "Delete a user " + id;
  let finalCodes = [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  return response;
}

function tryToAddExistingUsers(id, name, q) {
  id = asInteger(id);
  name = asString(name);
  var url = "/users"; var reqDescription = "Rainy: Try Add Existing Users " + id;
  let finalCodes = [400, 409];
  var body = {
    "id": id,
    "name": name
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function verifyUsersRejects(id, name, q) {
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

function verifyUsersExists(id, name, q) {
  id = asInteger(id);
  let res = listUsers(id);
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.id == id || item.id == id);
      if (!found) pvg.fail("Users NOT found in list");
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
      if (found) pvg.fail("Users still found in list (deletion failed)");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUsersDoesNotExist(id, name, q) { verifyUsersDeleted(id, name, q); }

function verifyUserCantBeDeleted(id) {
  id = asInteger(id);
  var url = "/users/" + id;
  var description = "Verify User " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [400], parameters: { description: description } });
}

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function (e) {
    return e.name === "POST" && e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.startsWith("Create a user ");
  });
}

function matchDeletedUsers(id) {
  return bp.EventSet("Deleted Users " + id, function (e) {
    return e.name === "DELETE" && e.data && e.data.parameters && e.data.parameters.description === ("Delete a user " + id);
  });
}

function matchAnyUsersDeleted() {
  return bp.EventSet("Any Users Deleted", function (e) {
    return e.name === "DELETE" && e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.startsWith("Delete a user ");
  });
}

function listHolds() {
  var url = "/holds"; var reqDescription = "List holds {id}";
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

function tryToAddExistingHolds(bookId, id, userId) {
  bookId = asInteger(bookId);
  id = asInteger(id);
  userId = asInteger(userId);
  var url = "/holds"; var reqDescription = "Rainy: Try Add Existing Holds " + id;
  let finalCodes = [400, 409];
  var body = {
    "bookId": bookId,
    "id": id,
    "userId": userId
  };
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  return response;
}

function verifyHoldsRejects(bookId, id, userId) {
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

function verifyHoldsExists(bookId, id, userId) {
  id = asInteger(id);
  let res = listHolds();
  try {
    let listData = (typeof res === "string") ? JSON.parse(res) : res;
    if (Array.isArray(listData)) {
      let found = listData.find(item => item.id == id || item.id == id);
      if (!found) pvg.fail("Holds NOT found in list");
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
      if (found) pvg.fail("Holds still found in list (deletion failed)");
    }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyHoldsDoesNotExist(bookId, id, userId) { verifyHoldsDeleted(bookId, id, userId); }

function verifyHoldCantBeDeleted(id) {
  id = asInteger(id);
  var url = "/holds/" + id;
  var description = "Verify Hold " + id + " cannot be deleted";
  svc.delete(url, { expectedResponseCodes: [400], parameters: { description: description } });
}

function matchAnyHoldsAdded() {
  return bp.EventSet("Any Holds Added", function (e) {
    return e.name === "POST" && e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.startsWith("Create a hold ");
  });
}

function matchDeletedHolds(id) {
  return bp.EventSet("Deleted Holds " + id, function (e) {
    return e.name === "DELETE" && e.data && e.data.parameters && e.data.parameters.description === ("Delete a hold " + id);
  });
}

function matchAnyHoldsDeleted() {
  return bp.EventSet("Any Holds Deleted", function (e) {
    return e.name === "DELETE" && e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.startsWith("Delete a hold ");
  });
}
