//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:8080", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: customer ----

function createCustomer() {
  var url = "/customers";
  var description = "Create customer";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCustomer() {
  return createCustomer();
}

// ---- Entity: account ----

function createAccount() {
  var url = "/accounts";
  var description = "Create account";
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

function tryToAddExistingAccount(accountId) {
  return createAccount();
}

function verifyAccountExists(accountId) {
  return getAccounts();
}

function verifyAccountDoesNotExist(accountId) {
  return getAccounts();
}

// ---- Entity: transaction ----

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

function verifyTransactionExists(accountId) {
  return getTransactions(accountId);
}

function verifyTransactionDoesNotExist(accountId) {
  return getTransactions(accountId);
}

// ---- Entity: transfer ----

function createTransfer() {
  var url = "/transfers";
  var description = "Create transfer";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingTransfer() {
  return createTransfer();
}

// ---- Entity: card ----

function createCard() {
  var url = "/cards";
  var description = "Create card";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCard() {
  return createCard();
}

// ---- Entity: loan ----

function createLoan() {
  var url = "/loans";
  var description = "Create loan";
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

function tryToAddExistingLoan() {
  return createLoan();
}

function verifyLoanExists() {
  return getLoans();
}

function verifyLoanDoesNotExist() {
  return getLoans();
}
