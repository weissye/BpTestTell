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
function listBooks(id, integer, q, string) {
  var url = "/books";
  var description = "List/search books";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createBook(id, integer, q, string) {
  var url = "/books";
  var description = "Create a book";
  var body = {
    "id": String(integer),
    "title": String(string),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "integer": integer, "q": q, "string": string}) });
}

function getBook(id, integer, q, string) {
  var url = "/books/" + id;
  var description = "Get book by id";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteBook(id, integer, q, string) {
  var url = "/books/" + id;
  var description = "Delete a book";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function tryToAddExistingBooks(id, integer, q, string) {
  var url = "/books";
  var description = "Try Add Existing Books";
  var body = {
    "id": String(integer),
    "title": String(string),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBooksExists(id, integer, q, string) {
  var url = "/books/" + id;
  var description = "Verify Books " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Books found");
}

function verifyBooksDoesNotExist(id, integer, q, string) {
  var url = "/books/" + id;
  var description = "Verify Books " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Books not found");
}

function tryToDeleteANonExistingBooks(id, integer, q, string) {
  var url = "/books/" + id;
  var description = "Verify negative delete for Books";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBooks(id, integer, q, string) {
  return bp.EventSet("Delete Books", function(e) {
      return e.name === "Done: " + "Delete a book";
  });
}

function waitForBooksAdded(id, integer, q, string) {
  waitFor(matchSuccess("Create a book"));
}

function matchAnyBooksAdded() {
  return bp.EventSet("Any Books Added", function(e) {
      return e.name.startsWith("Done: Create a book");
  });
}

function listHolds(id, integer) {
  var url = "/holds";
  var description = "List holds";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createHold(id, integer) {
  var url = "/holds";
  var description = "Create a hold";
  var body = {
    "id": String(integer),
    "userId": String(integer),
    "bookId": String(integer),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "integer": integer}) });
}

function deleteHold(id, integer) {
  var url = "/holds/" + id;
  var description = "Delete a hold";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingHolds(id, integer) {
  var url = "/holds";
  var description = "Try Add Existing Holds";
  var body = {
    "id": String(integer),
    "userId": String(integer),
    "bookId": String(integer),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyHoldsExists(id, integer) {
  var url = "/holds";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Item not found in list");
  }});
}

function verifyHoldsDoesNotExist(id, integer) {
  var url = "/holds";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.fail("Found but should not exist"); }
      pvg.success("Item not found in list");
  }});
}

function tryToDeleteANonExistingHolds(id, integer) {
  var url = "/holds/" + id;
  var description = "Verify negative delete for Holds";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedHolds(id, integer) {
  return bp.EventSet("Delete Holds", function(e) {
      return e.name === "Done: " + "Delete a hold";
  });
}

function waitForHoldsAdded(id, integer) {
  waitFor(matchSuccess("Create a hold"));
}

function matchAnyHoldsAdded() {
  return bp.EventSet("Any Holds Added", function(e) {
      return e.name.startsWith("Done: Create a hold");
  });
}

function listLoans(bookId, integer, userId) {
  var url = "/loans";
  var description = "List/search loans";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createLoan(bookId, integer, userId) {
  var url = "/loans";
  var description = "Create a loan";
  var body = {
    "userId": String(integer),
    "bookId": String(integer),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bookId": bookId, "integer": integer, "userId": userId}) });
}

function deleteLoan(bookId, integer, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete a loan by composite id";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function tryToAddExistingLoans(bookId, integer, userId) {
  var url = "/loans";
  var description = "Try Add Existing Loans";
  var body = {
    "userId": String(integer),
    "bookId": String(integer),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyLoansExists(bookId, integer, userId) {
  var url = "/loans";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].userId) === String(userId)) return pvg.success("Found"); }
      pvg.fail("Item not found in list");
  }});
}

function verifyLoansDoesNotExist(bookId, integer, userId) {
  var url = "/loans";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].userId) === String(userId)) return pvg.fail("Found but should not exist"); }
      pvg.success("Item not found in list");
  }});
}

function tryToDeleteANonExistingLoans(bookId, integer, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Verify negative delete for Loans";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedLoans(bookId, integer, userId) {
  return bp.EventSet("Delete Loans", function(e) {
      return e.name === "Done: " + "Delete a loan by composite id";
  });
}

function waitForLoansAdded(bookId, integer, userId) {
  waitFor(matchSuccess("Create a loan"));
}

function matchAnyLoansAdded() {
  return bp.EventSet("Any Loans Added", function(e) {
      return e.name.startsWith("Done: Create a loan");
  });
}

function listUsers(id, integer, q, string) {
  var url = "/users";
  var description = "List/search users";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createUser(id, integer, q, string) {
  var url = "/users";
  var description = "Create a user";
  var body = {
    "id": String(integer),
    "name": String(string),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "integer": integer, "q": q, "string": string}) });
}

function deleteUser(id, integer, q, string) {
  var url = "/users/" + id;
  var description = "Delete a user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function tryToAddExistingUsers(id, integer, q, string) {
  var url = "/users";
  var description = "Try Add Existing Users";
  var body = {
    "id": String(integer),
    "name": String(string),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyUsersExists(id, integer, q, string) {
  var url = "/users";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Item not found in list");
  }});
}

function verifyUsersDoesNotExist(id, integer, q, string) {
  var url = "/users";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.fail("Found but should not exist"); }
      pvg.success("Item not found in list");
  }});
}

function tryToDeleteANonExistingUsers(id, integer, q, string) {
  var url = "/users/" + id;
  var description = "Verify negative delete for Users";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUsers(id, integer, q, string) {
  return bp.EventSet("Delete Users", function(e) {
      return e.name === "Done: " + "Delete a user";
  });
}

function waitForUsersAdded(id, integer, q, string) {
  waitFor(matchSuccess("Create a user"));
}

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Create a user");
  });
}
