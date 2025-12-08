//@provengo summon rest
// === Auto-generated interfaces for library ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function createUser(id, name, q) {
  var url = "/users";
  var description = "Create a user";
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function listUsers(id, name, q) {
  var url = "/users";
  var description = "List/search users";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteUser(id, name, q) {
  var url = "/users/" + id;
  var description = "Delete a user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function tryToAddExistingUsers(id, name, q) {
  var url = "/users";
  var description = "Try Add Existing Users";
  var body = {
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyUsersExists(id, name, q) {
  var url = "/users";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Item not found in list");
  }});
}

function verifyUsersDoesNotExist(id, name, q) {
  var url = "/users";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.fail("Found but should not exist"); }
      pvg.success("Item not found in list");
  }});
}

function tryToDeleteANonExistingUsers(id, name, q) {
  svc.delete("/users/" + id, { expectedResponseCodes: [404], parameters: { description: "Verify negative delete" } });
}

function waitForUsersAdded(id, name, q) {
  waitFor(matchSuccess("Create a user"));
}

function waitForAnyUsersAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Create a user");
  }) });
}

function createBook(id, q, title) {
  var url = "/books";
  var description = "Create a book";
  var body = {
    "id": String(id),
    "title": String(title),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function listBooks(id, q, title) {
  var url = "/books";
  var description = "List/search books";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getBook(id, q, title) {
  var url = "/books/" + id;
  var description = "Get book by id";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteBook(id, q, title) {
  var url = "/books/" + id;
  var description = "Delete a book";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function tryToAddExistingBooks(id, q, title) {
  var url = "/books";
  var description = "Try Add Existing Books";
  var body = {
    "id": String(id),
    "title": String(title),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBooksExists(id, q, title) {
  var url = "/books/" + id;
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: "Verify Books exists" } });
  pvg.success("Books found");
}

function verifyBooksDoesNotExist(id, q, title) {
  var url = "/books/" + id;
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: "Verify Books does not exist" } });
  pvg.success("Books not found");
}

function tryToDeleteANonExistingBooks(id, q, title) {
  svc.delete("/books/" + id, { expectedResponseCodes: [404], parameters: { description: "Verify negative delete" } });
}

function waitForBooksAdded(id, q, title) {
  waitFor(matchSuccess("Create a book"));
}

function waitForAnyBooksAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Books Added", function(e) {
      return e.name.startsWith("Done: Create a book");
  }) });
}

function createLoan(bookId, userId) {
  var url = "/loans";
  var description = "Create a loan";
  var body = {
    "userId": String(userId),
    "bookId": String(bookId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function listLoans(bookId, userId) {
  var url = "/loans";
  var description = "List/search loans";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteLoan(bookId, userId) {
  var url = "/loans/" + userId + "/" + bookId;
  var description = "Delete a loan by composite id";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function tryToAddExistingLoans(bookId, userId) {
  var url = "/loans";
  var description = "Try Add Existing Loans";
  var body = {
    "userId": String(userId),
    "bookId": String(bookId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyLoansExists(bookId, userId) {
  var url = "/loans";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].userId) === String(userId)) return pvg.success("Found"); }
      pvg.fail("Item not found in list");
  }});
}

function verifyLoansDoesNotExist(bookId, userId) {
  var url = "/loans";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].userId) === String(userId)) return pvg.fail("Found but should not exist"); }
      pvg.success("Item not found in list");
  }});
}

function tryToDeleteANonExistingLoans(bookId, userId) {
  svc.delete("/loans/" + userId + "/" + bookId, { expectedResponseCodes: [404], parameters: { description: "Verify negative delete" } });
}

function waitForLoansAdded(bookId, userId) {
  waitFor(matchSuccess("Create a loan"));
}

function waitForAnyLoansAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Loans Added", function(e) {
      return e.name.startsWith("Done: Create a loan");
  }) });
}

function createHold(bookId, id, userId) {
  var url = "/holds";
  var description = "Create a hold";
  var body = {
    "id": String(id),
    "userId": String(userId),
    "bookId": String(bookId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description) });
}

function listHolds(bookId, id, userId) {
  var url = "/holds";
  var description = "List holds";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function deleteHold(bookId, id, userId) {
  var url = "/holds/" + id;
  var description = "Delete a hold";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function tryToAddExistingHolds(bookId, id, userId) {
  var url = "/holds";
  var description = "Try Add Existing Holds";
  var body = {
    "id": String(id),
    "userId": String(userId),
    "bookId": String(bookId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyHoldsExists(bookId, id, userId) {
  var url = "/holds";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.success("Found"); }
      pvg.fail("Item not found in list");
  }});
}

function verifyHoldsDoesNotExist(bookId, id, userId) {
  var url = "/holds";
  svc.get(url, { expectedResponseCodes: [200], callback: function(res){
      var data = JSON.parse(res.body);
      if(data.results) data = data.results;
      if(!Array.isArray(data)) data = [data];
      for(var i=0; i<data.length; i++) { if(String(data[i].id) === String(id)) return pvg.fail("Found but should not exist"); }
      pvg.success("Item not found in list");
  }});
}

function tryToDeleteANonExistingHolds(bookId, id, userId) {
  svc.delete("/holds/" + id, { expectedResponseCodes: [404], parameters: { description: "Verify negative delete" } });
}

function waitForHoldsAdded(bookId, id, userId) {
  waitFor(matchSuccess("Create a hold"));
}

function waitForAnyHoldsAdded() {
  return bp.sync({ waitFor: bp.EventSet("Any Holds Added", function(e) {
      return e.name.startsWith("Done: Create a hold");
  }) });
}
