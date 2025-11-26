//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("https://api.stripe.com", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: account ----

function addAccount() {
  var url = "/v1/accounts";
  var description = "Add account {accountId}";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAccount(accountId) {
  var url = "/v1/accounts/" + accountId;
  var description = "Delete account " + accountId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAccount(accountId) {
  var url = "/v1/accounts/" + accountId;
  var description = "Get account " + accountId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAccount(accountId) {
  var url = "/v1/accounts/" + accountId;
  var description = "Update account " + accountId;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingaccount() {
  return addAccount();
}

function verifyaccountExists(accountId) {
  return getAccount(accountId);
}

function verifyaccountDoesNotExist(accountId) {
  return getAccount(accountId);
}

function tryToDeleteANonExistingaccount(accountId) {
  return deleteAccount(accountId);
}

function matchAddedaccount(accountId) {
  return bp.EventSet("matchAddedaccount", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountId);
  });
}

function waitForAnyaccountAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add account (.+)/)});
  var m = ev.data.parameters.description.match(/Add account (.+)/);
  var captures = m.slice(1);
  var names = ["accountId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedaccount(accountId) {
  return bp.EventSet("matchDeletedaccount", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountId);
  });
}

function waitForAnyaccountDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete account (.+)/)});
  var m = ev.data.parameters.description.match(/Delete account (.+)/);
  var captures = m.slice(1);
  var names = ["accountId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: account_link ----

function addAccountLink() {
  var url = "/v1/account_links";
  var description = "Add account_link";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAccountLink(accountLinkId) {
  var url = "/v1/account_links/" + accountLinkId;
  var description = "Get account_link " + accountLinkId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingaccount_link() {
  return addAccountLink();
}

function verifyaccount_linkExists(accountLinkId) {
  return getAccountLink(accountLinkId);
}

function verifyaccount_linkDoesNotExist(accountLinkId) {
  return getAccountLink(accountLinkId);
}

function matchAddedaccount_link(accountLinkId) {
  return bp.EventSet("matchAddedaccount_link", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountLinkId);
  });
}

function waitForAnyaccount_linkAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add account_link/)});
  var m = ev.data.parameters.description.match(/Add account_link/);
  var captures = m.slice(1);
  var names = ["accountLinkId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: account_session ----

function addAccountSession() {
  var url = "/v1/account_sessions";
  var description = "Add account_session";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAccountSession(accountSessionId) {
  var url = "/v1/account_sessions/" + accountSessionId;
  var description = "Get account_session " + accountSessionId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingaccount_session() {
  return addAccountSession();
}

function verifyaccount_sessionExists(accountSessionId) {
  return getAccountSession(accountSessionId);
}

function verifyaccount_sessionDoesNotExist(accountSessionId) {
  return getAccountSession(accountSessionId);
}

function matchAddedaccount_session(accountSessionId) {
  return bp.EventSet("matchAddedaccount_session", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSessionId);
  });
}

function waitForAnyaccount_sessionAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add account_session/)});
  var m = ev.data.parameters.description.match(/Add account_session/);
  var captures = m.slice(1);
  var names = ["accountSessionId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: apple_pay_domain ----

function addApplePayDomain() {
  var url = "/v1/apple_pay/domains";
  var description = "Add apple_pay_domain";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteApplePayDomain(applePayDomainId) {
  var url = "/v1/apple_pay/domains/" + applePayDomainId;
  var description = "Delete apple_pay_domain " + applePayDomainId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getApplePayDomain(applePayDomainId) {
  var url = "/v1/apple_pay/domains/" + applePayDomainId;
  var description = "Get apple_pay_domain " + applePayDomainId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateApplePayDomain(applePayDomainId) {
  var url = "/v1/apple_pay/domains/" + applePayDomainId;
  var description = "Update apple_pay_domain " + applePayDomainId;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingapple_pay_domain() {
  return addApplePayDomain();
}

function verifyapple_pay_domainExists(applePayDomainId) {
  return getApplePayDomain(applePayDomainId);
}

function verifyapple_pay_domainDoesNotExist(applePayDomainId) {
  return getApplePayDomain(applePayDomainId);
}

function tryToDeleteANonExistingapple_pay_domain(applePayDomainId) {
  return deleteApplePayDomain(applePayDomainId);
}

function matchAddedapple_pay_domain(applePayDomainId) {
  return bp.EventSet("matchAddedapple_pay_domain", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(applePayDomainId);
  });
}

function waitForAnyapple_pay_domainAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add apple_pay_domain/)});
  var m = ev.data.parameters.description.match(/Add apple_pay_domain/);
  var captures = m.slice(1);
  var names = ["applePayDomainId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedapple_pay_domain(applePayDomainId) {
  return bp.EventSet("matchDeletedapple_pay_domain", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(applePayDomainId);
  });
}

function waitForAnyapple_pay_domainDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete apple_pay_domain (.+)/)});
  var m = ev.data.parameters.description.match(/Delete apple_pay_domain (.+)/);
  var captures = m.slice(1);
  var names = ["applePayDomainId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: application_fee ----

function getApplicationFee(applicationFeeId) {
  var url = "/v1/application_fees/" + applicationFeeId;
  var description = "Get application_fee " + applicationFeeId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listApplicationFees() {
  var url = "/v1/application_fees";
  var description = "List application_fees";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyapplication_feeExists(applicationFeeId) {
  return getApplicationFee(applicationFeeId);
}

function verifyapplication_feeDoesNotExist(applicationFeeId) {
  return getApplicationFee(applicationFeeId);
}

// ---- Entity: bank_account ----

function addBankAccount(customerId) {
  var url = "/v1/customers/" + customerId + "/sources";
  var description = "Add bank_account {bankAccountId}";
  var body = {
    "source": bankAccountId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBankAccount(customerId, bankAccountId) {
  var url = "/v1/customers/" + customerId + "/sources/" + bankAccountId;
  var description = "Delete bank_account " + bankAccountId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBankAccount(customerId, bankAccountId) {
  var url = "/v1/customers/" + customerId + "/sources/" + bankAccountId;
  var description = "Get bank_account " + bankAccountId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBankAccount(customerId, bankAccountId) {
  var url = "/v1/customers/" + customerId + "/sources/" + bankAccountId;
  var description = "Update bank_account " + bankAccountId;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingbank_account(customerId) {
  return addBankAccount(customerId);
}

function verifybank_accountExists(customerId, bankAccountId) {
  return getBankAccount(customerId, bankAccountId);
}

function verifybank_accountDoesNotExist(customerId, bankAccountId) {
  return getBankAccount(customerId, bankAccountId);
}

function tryToDeleteANonExistingbank_account(customerId, bankAccountId) {
  return deleteBankAccount(customerId, bankAccountId);
}

function matchAddedbank_account(customerId) {
  return bp.EventSet("matchAddedbank_account", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(customerId);
  });
}

function waitForAnybank_accountAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add bank_account (.+)/)});
  var m = ev.data.parameters.description.match(/Add bank_account (.+)/);
  var captures = m.slice(1);
  var names = ["customerId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedbank_account(customerId) {
  return bp.EventSet("matchDeletedbank_account", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(customerId);
  });
}

function waitForAnybank_accountDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete bank_account (.+)/)});
  var m = ev.data.parameters.description.match(/Delete bank_account (.+)/);
  var captures = m.slice(1);
  var names = ["customerId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
