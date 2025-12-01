//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));
  });
}

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);
  });
}

function waitFor(eventSet) {
  return bp.sync({waitFor: eventSet});
}

// ---- Entity: customer ----

function createCustomer() {
  var url = "/customers";
  var description = "Create customer";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingCustomer() {
  var url = "/customers";
  var body = {
  };
  var description = "Verify that we cannot add another Customer...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCustomerExists() {
  var url = "/customers";
  var description = "Verify Customer exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Customer exists");
          }
        }
      }
      return pvg.fail("Expected Customer to exist but it does not");
    }
  });
}

function verifyCustomerDoesNotExist() {
  var url = "/customers";
  var description = "Verify Customer does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Customer to not exist but it does");
          }
        }
      }
      return pvg.success("Customer does not exist");
    }
  });
}

function matchAddedCustomer() {
  var expectedDesc = "Create customer";
  return bp.EventSet("matchAddedCustomer", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomerAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ customer$/));
  var m = ev.data.parameters.description.match(/^Create\ customer$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCustomerAddedEvent(keyVal) {
  return bp.EventSet("AddCustomer:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyCustomerAdded() {
  return bp.EventSet("matchAnyCustomerAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create customer") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForCustomerAdded() {
  var expectedDesc = "Create customer";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: account ----

function createAccount(accountId) {
  var url = "/accounts";
  var description = "Create account";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , accountId: String(accountId)
    }
  });
}

function getAccounts(accountId) {
  var url = "/accounts";
  var description = "Get accounts";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingAccount(accountId) {
  var url = "/accounts";
  var body = {
  };
  var description = "Verify that we cannot add another Account...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAccountExists(accountId) {
  var url = "/accounts";
  var description = "Verify Account exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("Account exists");
          }
        }
      }
      return pvg.fail("Expected Account to exist but it does not");
    }
  });
}

function verifyAccountDoesNotExist(accountId) {
  var url = "/accounts";
  var description = "Verify Account does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected Account to not exist but it does");
          }
        }
      }
      return pvg.success("Account does not exist");
    }
  });
}

function matchAddedAccount(accountId) {
  var expectedDesc = "Create account";
  return bp.EventSet("matchAddedAccount", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAccountAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ account$/));
  var m = ev.data.parameters.description.match(/^Create\ account$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAccountAddedEvent(keyVal) {
  return bp.EventSet("AddAccount:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAccountAdded() {
  return bp.EventSet("matchAnyAccountAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create account") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForAccountAdded(accountId) {
  var expectedDesc = "Create account";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: transaction ----

function getTransactions(accountId) {
  var url = "/accounts/" + accountId + "/transactions";
  var description = "Get transactions for account " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyTransactionExists(accountId) {
  var url = "/accounts";
  var description = "Verify Transaction exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("Transaction exists");
          }
        }
      }
      return pvg.fail("Expected Transaction to exist but it does not");
    }
  });
}

function verifyTransactionDoesNotExist(accountId) {
  var url = "/accounts";
  var description = "Verify Transaction does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected Transaction to not exist but it does");
          }
        }
      }
      return pvg.success("Transaction does not exist");
    }
  });
}

// ---- Entity: transfer ----

function createTransfer() {
  var url = "/transfers";
  var description = "Create transfer";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingTransfer() {
  var url = "/transfers";
  var body = {
  };
  var description = "Verify that we cannot add another Transfer...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTransferExists() {
  var url = "/transfers";
  var description = "Verify Transfer exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Transfer exists");
          }
        }
      }
      return pvg.fail("Expected Transfer to exist but it does not");
    }
  });
}

function verifyTransferDoesNotExist() {
  var url = "/transfers";
  var description = "Verify Transfer does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Transfer to not exist but it does");
          }
        }
      }
      return pvg.success("Transfer does not exist");
    }
  });
}

function matchAddedTransfer() {
  var expectedDesc = "Create transfer";
  return bp.EventSet("matchAddedTransfer", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTransferAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ transfer$/));
  var m = ev.data.parameters.description.match(/^Create\ transfer$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTransferAddedEvent(keyVal) {
  return bp.EventSet("AddTransfer:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyTransferAdded() {
  return bp.EventSet("matchAnyTransferAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create transfer") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForTransferAdded() {
  var expectedDesc = "Create transfer";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: card ----

function createCard() {
  var url = "/cards";
  var description = "Create card";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingCard() {
  var url = "/cards";
  var body = {
  };
  var description = "Verify that we cannot add another Card...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardExists() {
  var url = "/cards";
  var description = "Verify Card exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Card exists");
          }
        }
      }
      return pvg.fail("Expected Card to exist but it does not");
    }
  });
}

function verifyCardDoesNotExist() {
  var url = "/cards";
  var description = "Verify Card does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Card to not exist but it does");
          }
        }
      }
      return pvg.success("Card does not exist");
    }
  });
}

function matchAddedCard() {
  var expectedDesc = "Create card";
  return bp.EventSet("matchAddedCard", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ card$/));
  var m = ev.data.parameters.description.match(/^Create\ card$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardAddedEvent(keyVal) {
  return bp.EventSet("AddCard:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyCardAdded() {
  return bp.EventSet("matchAnyCardAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForCardAdded() {
  var expectedDesc = "Create card";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: loan ----

function createLoan() {
  var url = "/loans";
  var description = "Create loan";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function getLoans() {
  var url = "/loans";
  var description = "Get loans";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingLoan() {
  var url = "/loans";
  var body = {
  };
  var description = "Verify that we cannot add another Loan...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyLoanExists() {
  var url = "/loans";
  var description = "Verify Loan exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Loan exists");
          }
        }
      }
      return pvg.fail("Expected Loan to exist but it does not");
    }
  });
}

function verifyLoanDoesNotExist() {
  var url = "/loans";
  var description = "Verify Loan does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Loan to not exist but it does");
          }
        }
      }
      return pvg.success("Loan does not exist");
    }
  });
}

function matchAddedLoan() {
  var expectedDesc = "Create loan";
  return bp.EventSet("matchAddedLoan", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLoanAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ loan$/));
  var m = ev.data.parameters.description.match(/^Create\ loan$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getLoanAddedEvent(keyVal) {
  return bp.EventSet("AddLoan:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyLoanAdded() {
  return bp.EventSet("matchAnyLoanAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create loan") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForLoanAdded() {
  var expectedDesc = "Create loan";
  waitFor(matchesDescription(expectedDesc));
}
