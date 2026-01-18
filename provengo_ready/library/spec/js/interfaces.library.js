//@provengo summon rest
// === Auto-generated interfaces for library ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';
const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listBooks() {
  var url = "/books";
  var reqDescription = "List/search books {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
  return res;
}

function createBook(id, q, title) {
  var url = "/books";
  var reqDescription = "Create a book " + id;
  var body = {
    "id": id,
    "title": title
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "q": q, "title": title}) }); }
  return res;
}

function getBook(id) {
  var url = "/books/" + id;
  var reqDescription = "Get book by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
  return res;
}

function deleteBook(id) {
  var url = "/books/" + id;
  var reqDescription = "Delete a book " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404] });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) }); }
  return res;
}

function tryToAddExistingBooks(id, q, title) {
  var url = "/books";
  var reqDescription = "Try Add Existing Books " + id;
  var body = {
    "id": id,
    "title": title
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyBooksRejects(id, q, title) {
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
  var url = "/books/" + id;
  var description = "Verify Books " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Books found");
}

function verifyBooksDeleted(id) {
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

function listLoans() {
  var url = "/loans";
  var reqDescription = "List/search loans {userId}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
  return res;
}

function createLoan(bookId, userId) {
  var url = "/loans";
  var reqDescription = "Create a loan " + userId;
  var body = {
    "bookId": bookId,
    "userId": userId
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "userId": userId}) }); }
  return res;
}

function deleteLoan(userId, bookId) {
  var url = "/loans/" + userId + "/" + bookId;
  var reqDescription = "Delete a loan by composite id " + userId;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) }); }
  return res;
}

function verifyLoansRejects(bookId, userId) {
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
  let res = listLoans(bookId, userId);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.userId == userId || item.id == userId);
          if (found) pvg.success("Loans found in list");
          else pvg.fail("Loans NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLoansDeleted(bookId, userId) {
  let res = listLoans(bookId, userId);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
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

function listUsers() {
  var url = "/users";
  var reqDescription = "List/search users {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
  return res;
}

function createUser(id, name, q) {
  var url = "/users";
  var reqDescription = "Create a user " + id;
  var body = {
    "id": id,
    "name": name
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "name": name, "q": q}) }); }
  return res;
}

function deleteUser(id) {
  var url = "/users/" + id;
  var reqDescription = "Delete a user " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404] });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) }); }
  return res;
}

function verifyUsersRejects(id, name, q) {
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
  let res = listUsers(id, name, q);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Users found in list");
          else pvg.fail("Users NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUsersDeleted(id, name, q) {
  let res = listUsers(id, name, q);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
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

function listHolds() {
  var url = "/holds";
  var reqDescription = "List holds {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
  return res;
}

function createHold(bookId, id, userId) {
  var url = "/holds";
  var reqDescription = "Create a hold " + id;
  var body = {
    "bookId": bookId,
    "id": id,
    "userId": userId
  };
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"bookId": bookId, "id": id, "userId": userId}) }); }
  return res;
}

function deleteHold(id) {
  var url = "/holds/" + id;
  var reqDescription = "Delete a hold " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) }); }
  return res;
}

function verifyHoldsRejects(bookId, id, userId) {
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
  let res = listHolds(bookId, id, userId);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Holds found in list");
          else pvg.fail("Holds NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyHoldsDeleted(bookId, id, userId) {
  let res = listHolds(bookId, id, userId);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
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
