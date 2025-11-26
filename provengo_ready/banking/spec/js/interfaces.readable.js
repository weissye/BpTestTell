//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: customers ----

function addCustomers() {
  var url = "/customers";
  var description = "Add customers";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomers() {
  return addCustomers();
}

function matchAddedCustomers() {
  return bp.EventSet("matchAddedCustomers", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyCustomersAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add customers/)});
  var m = ev.data.parameters.description.match(/Add customers/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: accounts ----

function addAccounts() {
  var url = "/accounts";
  var description = "Add accounts";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAccounts() {
  var url = "/accounts";
  var description = "Get accounts";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAccounts() {
  return addAccounts();
}

function verifyAccountsExists() {
  return getAccounts();
}

function verifyAccountsDoesNotExist() {
  return getAccounts();
}

function matchAddedAccounts() {
  return bp.EventSet("matchAddedAccounts", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyAccountsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add accounts/)});
  var m = ev.data.parameters.description.match(/Add accounts/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: transactions ----

function getTransactions(accountId) {
  var url = "/accounts/" + accountId + "/transactions";
  var description = "Get transactions for account " + accountId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTransactionsExists(accountId) {
  return getTransactions(accountId);
}

function verifyTransactionsDoesNotExist(accountId) {
  return getTransactions(accountId);
}

// ---- Entity: transfers ----

function addTransfers() {
  var url = "/transfers";
  var description = "Add transfers";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTransfers() {
  return addTransfers();
}

function matchAddedTransfers() {
  return bp.EventSet("matchAddedTransfers", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyTransfersAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add transfers/)});
  var m = ev.data.parameters.description.match(/Add transfers/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: cards ----

function addCards() {
  var url = "/cards";
  var description = "Add cards";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCards() {
  return addCards();
}

function matchAddedCards() {
  return bp.EventSet("matchAddedCards", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyCardsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add cards/)});
  var m = ev.data.parameters.description.match(/Add cards/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: loans ----

function addLoans() {
  var url = "/loans";
  var description = "Add loans";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getLoans() {
  var url = "/loans";
  var description = "Get loans";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingLoans() {
  return addLoans();
}

function verifyLoansExists() {
  return getLoans();
}

function verifyLoansDoesNotExist() {
  return getLoans();
}

function matchAddedLoans() {
  return bp.EventSet("matchAddedLoans", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes("");
  });
}

function waitForAnyLoansAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add loans/)});
  var m = ev.data.parameters.description.match(/Add loans/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
