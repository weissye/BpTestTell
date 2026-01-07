//@provengo summon rest
// === Auto-generated interfaces for banking ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function listAccounts() {
  var url = "/accounts";
  var reqDescription = "Retrieve a list of accounts {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function addAccount(id) {
  var url = "/accounts";
  var reqDescription = "Create a new account " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function verifyAccountsRejects(id) {
  var url = "/accounts";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyAccountsExists(id) {
  // Fallback: Use list operation to verify existence
  let res = listAccounts(id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Accounts found in list");
          else pvg.fail("Accounts NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyAccountsDeleted(id) {
  // Fallback: Use list operation to verify deletion
  let res = listAccounts(id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Accounts correctly not found in list");
          else pvg.fail("Accounts still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyAccountsDoesNotExist(id) { verifyAccountsDeleted(id); }

function matchAnyAccountsAdded() {
  return bp.EventSet("Any Accounts Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new account");
  });
}

function listAccountTransactions(accountId) {
  var url = "/accounts/" + accountId + "/transactions";
  var reqDescription = "Retrieve a list of transactions for a specific account {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function matchAnyTransactionsAdded() {
  return bp.EventSet("Any Transactions Added", function(e) {
      return e.name.startsWith("Done: Positive: Create Transactions");
  });
}

function addCard(id) {
  var url = "/cards";
  var reqDescription = "Create a new card " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function verifyCardsRejects(id) {
  var url = "/cards";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyCardsAdded() {
  return bp.EventSet("Any Cards Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new card");
  });
}

function addCustomer(id) {
  var url = "/customers";
  var reqDescription = "Create a new customer " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function verifyCustomersRejects(id) {
  var url = "/customers";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyCustomersAdded() {
  return bp.EventSet("Any Customers Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new customer");
  });
}

function addTransfer(id) {
  var url = "/transfers";
  var reqDescription = "Create a new transfer " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function verifyTransfersRejects(id) {
  var url = "/transfers";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function matchAnyTransfersAdded() {
  return bp.EventSet("Any Transfers Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new transfer");
  });
}

function listLoans() {
  var url = "/loans";
  var reqDescription = "Retrieve a list of loans {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function addLoan(id) {
  var url = "/loans";
  var reqDescription = "Create a new loan " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
  }
  return res;
}

function verifyLoansRejects(id) {
  var url = "/loans";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyLoansExists(id) {
  // Fallback: Use list operation to verify existence
  let res = listLoans(id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Loans found in list");
          else pvg.fail("Loans NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLoansDeleted(id) {
  // Fallback: Use list operation to verify deletion
  let res = listLoans(id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Loans correctly not found in list");
          else pvg.fail("Loans still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLoansDoesNotExist(id) { verifyLoansDeleted(id); }

function matchAnyLoansAdded() {
  return bp.EventSet("Any Loans Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new loan");
  });
}
