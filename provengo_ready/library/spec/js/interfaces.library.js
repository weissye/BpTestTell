//@provengo summon rest
// === Auto-generated interfaces for library ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listBooks(author, id, publishedDate, q, title) {
  var url = "/books";
  var description = "List/search books " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
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
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"author": author, "id": id, "publishedDate": publishedDate, "q": q, "title": title}) });
  return res;
}

function getBook(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Get book by id";
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteBook(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Delete a book " + id;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
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
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
  return res;
}

function verifyBooksExists(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Verify Books " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Books found");
}

function verifyBooksDeleted(author, id, publishedDate, q, title) {
  var url = "/books/" + id;
  var description = "Verify Books " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Books correctly deleted (404)");
}

function verifyBooksDoesNotExist(author, id, publishedDate, q, title) { verifyBooksDeleted(author, id, publishedDate, q, title); }

function matchAnyBooksAdded() {
  return bp.EventSet("Any Books Added", function(e) {
      return e.name.startsWith("Done: Create a book");
  });
}

function listLoans(bookId, id, loanDate, userId) {
  var url = "/loans";
  var description = "List/search loans " + userId;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
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
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bookId": bookId, "id": id, "loanDate": loanDate, "userId": userId}) });
  return res;
}

function deleteLoan(bookId, id, loanDate, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete a loan by composite id " + userId;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function verifyLoansExists(bookId, id, loanDate, userId) {
  // Fallback: Use list operation to verify existence
  let res = listLoans(bookId, id, loanDate, userId);
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

function verifyLoansDeleted(bookId, id, loanDate, userId) {
  // Fallback: Use list operation to verify deletion
  let res = listLoans(bookId, id, loanDate, userId);
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

function verifyLoansDoesNotExist(bookId, id, loanDate, userId) { verifyLoansDeleted(bookId, id, loanDate, userId); }

function matchAnyLoansAdded() {
  return bp.EventSet("Any Loans Added", function(e) {
      return e.name.startsWith("Done: Create a loan");
  });
}

function listUsers(email, id, name, password, q) {
  var url = "/users";
  var description = "List/search users " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
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
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"email": email, "id": id, "name": name, "password": password, "q": q}) });
  return res;
}

function deleteUser(email, id, name, password, q) {
  var url = "/users/" + id;
  var description = "Delete a user " + id;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function verifyUsersExists(email, id, name, password, q) {
  // Fallback: Use list operation to verify existence
  let res = listUsers(email, id, name, password, q);
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

function verifyUsersDeleted(email, id, name, password, q) {
  // Fallback: Use list operation to verify deletion
  let res = listUsers(email, id, name, password, q);
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

function verifyUsersDoesNotExist(email, id, name, password, q) { verifyUsersDeleted(email, id, name, password, q); }

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Create a user");
  });
}

function listHolds(bookId, book_id, end_date, id, start_date, userId, user_id) {
  var url = "/holds";
  var description = "List holds " + id;
  return svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createHold(bookId, book_id, end_date, id, start_date, userId, user_id) {
  var url = "/holds";
  var description = "Create a hold " + id;
  var body = {
    "bookId": bookId,
    "book_id": book_id,
    "end_date": String(end_date),
    "id": id,
    "start_date": String(start_date),
    "userId": userId,
    "user_id": user_id,
};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bookId": bookId, "book_id": book_id, "end_date": end_date, "id": id, "start_date": start_date, "userId": userId, "user_id": user_id}) });
  return res;
}

function deleteHold(bookId, book_id, end_date, id, start_date, userId, user_id) {
  var url = "/holds/" + id;
  var description = "Delete a hold " + id;
  return svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function verifyHoldsExists(bookId, book_id, end_date, id, start_date, userId, user_id) {
  // Fallback: Use list operation to verify existence
  let res = listHolds(bookId, book_id, end_date, id, start_date, userId, user_id);
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

function verifyHoldsDeleted(bookId, book_id, end_date, id, start_date, userId, user_id) {
  // Fallback: Use list operation to verify deletion
  let res = listHolds(bookId, book_id, end_date, id, start_date, userId, user_id);
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

function verifyHoldsDoesNotExist(bookId, book_id, end_date, id, start_date, userId, user_id) { verifyHoldsDeleted(bookId, book_id, end_date, id, start_date, userId, user_id); }

function matchAnyHoldsAdded() {
  return bp.EventSet("Any Holds Added", function(e) {
      return e.name.startsWith("Done: Create a hold");
  });
}
