//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("https://api.twilio.com", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: account ----

function getAccount(accountSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + ".json";
  var description = "Get account " + accountSid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAccount(accountSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + ".json";
  var description = "Update account " + accountSid;
  var body = {
    "FriendlyName": friendlyName,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAccountExists(accountSid) {
  return getAccount(accountSid);
}

function verifyAccountDoesNotExist(accountSid) {
  return getAccount(accountSid);
}

// ---- Entity: address ----

function addAddress(accountSid, friendlyName) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Addresses.json";
  var description = "Add address " + friendlyName;
  var body = {
    "FriendlyName": friendlyName,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAddress(accountSid, addressSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Addresses/" + addressSid + ".json";
  var description = "Delete address " + addressSid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAddress(accountSid, addressSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Addresses/" + addressSid + ".json";
  var description = "Get address " + addressSid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAddress(accountSid, addressSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Addresses/" + addressSid + ".json";
  var description = "Update address " + addressSid;
  var body = {
    "FriendlyName": friendlyName,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAddress(accountSid, friendlyName) {
  return addAddress(accountSid, friendlyName);
}

function verifyAddressExists(accountSid, addressSid) {
  return getAddress(accountSid, addressSid);
}

function verifyAddressDoesNotExist(accountSid, addressSid) {
  return getAddress(accountSid, addressSid);
}

function tryToDeleteANonExistingAddress(accountSid, addressSid) {
  return deleteAddress(accountSid, addressSid);
}

function matchAddedAddress(accountSid, friendlyName) {
  return bp.EventSet("matchAddedAddress", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyAddressAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add address (.+)/)});
  var m = ev.data.parameters.description.match(/Add address (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "friendlyName"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedAddress(accountSid, friendlyName) {
  return bp.EventSet("matchDeletedAddress", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyAddressDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete address (.+)/)});
  var m = ev.data.parameters.description.match(/Delete address (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "friendlyName"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: application ----

function addApplication(accountSid, friendlyName) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Applications.json";
  var description = "Add application " + friendlyName;
  var body = {
    "FriendlyName": friendlyName,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteApplication(accountSid, applicationSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Applications/" + applicationSid + ".json";
  var description = "Delete application " + applicationSid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getApplication(accountSid, applicationSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Applications/" + applicationSid + ".json";
  var description = "Get application " + applicationSid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateApplication(accountSid, applicationSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Applications/" + applicationSid + ".json";
  var description = "Update application " + applicationSid;
  var body = {
    "FriendlyName": friendlyName,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingApplication(accountSid, friendlyName) {
  return addApplication(accountSid, friendlyName);
}

function verifyApplicationExists(accountSid, applicationSid) {
  return getApplication(accountSid, applicationSid);
}

function verifyApplicationDoesNotExist(accountSid, applicationSid) {
  return getApplication(accountSid, applicationSid);
}

function tryToDeleteANonExistingApplication(accountSid, applicationSid) {
  return deleteApplication(accountSid, applicationSid);
}

function matchAddedApplication(accountSid, friendlyName) {
  return bp.EventSet("matchAddedApplication", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyApplicationAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add application (.+)/)});
  var m = ev.data.parameters.description.match(/Add application (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "friendlyName"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedApplication(accountSid, friendlyName) {
  return bp.EventSet("matchDeletedApplication", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyApplicationDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete application (.+)/)});
  var m = ev.data.parameters.description.match(/Delete application (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "friendlyName"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: call ----

function addCall(accountSid, to, from) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Calls.json";
  var description = "Add call to " + to;
  var body = {
    "To": to,
    "From": from,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCall(accountSid, callSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Calls/" + callSid + ".json";
  var description = "Delete call " + callSid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCall(accountSid, callSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Calls/" + callSid + ".json";
  var description = "Get call " + callSid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCall(accountSid, callSid, status) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Calls/" + callSid + ".json";
  var description = "Update call " + callSid;
  var body = {
    "Status": status,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCall(accountSid, to, from) {
  return addCall(accountSid, to, from);
}

function verifyCallExists(accountSid, callSid) {
  return getCall(accountSid, callSid);
}

function verifyCallDoesNotExist(accountSid, callSid) {
  return getCall(accountSid, callSid);
}

function tryToDeleteANonExistingCall(accountSid, callSid) {
  return deleteCall(accountSid, callSid);
}

function matchAddedCall(accountSid, to, from) {
  return bp.EventSet("matchAddedCall", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyCallAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add call to (.+)/)});
  var m = ev.data.parameters.description.match(/Add call to (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "to", "from"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedCall(accountSid, to, from) {
  return bp.EventSet("matchDeletedCall", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyCallDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete call (.+)/)});
  var m = ev.data.parameters.description.match(/Delete call (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "to", "from"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: conference ----

function getConference(accountSid, conferenceSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Conferences/" + conferenceSid + ".json";
  var description = "Get conference " + conferenceSid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateConference(accountSid, conferenceSid, status) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Conferences/" + conferenceSid + ".json";
  var description = "Update conference " + conferenceSid;
  var body = {
    "Status": status,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyConferenceExists(accountSid, conferenceSid) {
  return getConference(accountSid, conferenceSid);
}

function verifyConferenceDoesNotExist(accountSid, conferenceSid) {
  return getConference(accountSid, conferenceSid);
}

// ---- Entity: incomingphonenumber ----

function addIncomingPhoneNumber(accountSid, phoneNumber) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/IncomingPhoneNumbers.json";
  var description = "Add incoming phone number " + phoneNumber;
  var body = {
    "PhoneNumber": phoneNumber,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIncomingPhoneNumber(accountSid, phoneNumberSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/IncomingPhoneNumbers/" + phoneNumberSid + ".json";
  var description = "Delete incoming phone number " + phoneNumberSid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIncomingPhoneNumber(accountSid, phoneNumberSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/IncomingPhoneNumbers/" + phoneNumberSid + ".json";
  var description = "Get incoming phone number " + phoneNumberSid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIncomingPhoneNumber(accountSid, phoneNumberSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/IncomingPhoneNumbers/" + phoneNumberSid + ".json";
  var description = "Update incoming phone number " + phoneNumberSid;
  var body = {
    "FriendlyName": friendlyName,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIncomingPhoneNumber(accountSid, phoneNumber) {
  return addIncomingPhoneNumber(accountSid, phoneNumber);
}

function verifyIncomingPhoneNumberExists(accountSid, phoneNumberSid) {
  return getIncomingPhoneNumber(accountSid, phoneNumberSid);
}

function verifyIncomingPhoneNumberDoesNotExist(accountSid, phoneNumberSid) {
  return getIncomingPhoneNumber(accountSid, phoneNumberSid);
}

function tryToDeleteANonExistingIncomingPhoneNumber(accountSid, phoneNumberSid) {
  return deleteIncomingPhoneNumber(accountSid, phoneNumberSid);
}

function matchAddedIncomingPhoneNumber(accountSid, phoneNumber) {
  return bp.EventSet("matchAddedIncomingPhoneNumber", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyIncomingPhoneNumberAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add incoming phone number (.+)/)});
  var m = ev.data.parameters.description.match(/Add incoming phone number (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "phoneNumber"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedIncomingPhoneNumber(accountSid, phoneNumber) {
  return bp.EventSet("matchDeletedIncomingPhoneNumber", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyIncomingPhoneNumberDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete incoming phone number (.+)/)});
  var m = ev.data.parameters.description.match(/Delete incoming phone number (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "phoneNumber"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user ----

function addUser(accountSid, identity) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Users.json";
  var description = "Add user " + identity;
  var body = {
    "Identity": identity,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUser(accountSid, userSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Users/" + userSid + ".json";
  var description = "Delete user " + userSid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUser(accountSid, userSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Users/" + userSid + ".json";
  var description = "Get user " + userSid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateUser(accountSid, userSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Users/" + userSid + ".json";
  var description = "Update user " + userSid;
  var body = {
    "FriendlyName": friendlyName,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUser(accountSid, identity) {
  return addUser(accountSid, identity);
}

function verifyUserExists(accountSid, userSid) {
  return getUser(accountSid, userSid);
}

function verifyUserDoesNotExist(accountSid, userSid) {
  return getUser(accountSid, userSid);
}

function tryToDeleteANonExistingUser(accountSid, userSid) {
  return deleteUser(accountSid, userSid);
}

function matchAddedUser(accountSid, identity) {
  return bp.EventSet("matchAddedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyUserAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add user (.+)/)});
  var m = ev.data.parameters.description.match(/Add user (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "identity"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedUser(accountSid, identity) {
  return bp.EventSet("matchDeletedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyUserDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete user (.+)/)});
  var m = ev.data.parameters.description.match(/Delete user (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "identity"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: webhook ----

function addWebhook(accountSid, url) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Webhooks.json";
  var description = "Add webhook " + url;
  var body = {
    "Url": url,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhook(accountSid, webhookSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Webhooks/" + webhookSid + ".json";
  var description = "Delete webhook " + webhookSid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhook(accountSid, webhookSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Webhooks/" + webhookSid + ".json";
  var description = "Get webhook " + webhookSid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhook(accountSid, webhookSid) {
  var url = "/2010-04-01/Accounts/" + accountSid + "/Webhooks/" + webhookSid + ".json";
  var description = "Update webhook " + webhookSid;
  var body = {
    "Url": url,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhook(accountSid, url) {
  return addWebhook(accountSid, url);
}

function verifyWebhookExists(accountSid, webhookSid) {
  return getWebhook(accountSid, webhookSid);
}

function verifyWebhookDoesNotExist(accountSid, webhookSid) {
  return getWebhook(accountSid, webhookSid);
}

function tryToDeleteANonExistingWebhook(accountSid, webhookSid) {
  return deleteWebhook(accountSid, webhookSid);
}

function matchAddedWebhook(accountSid, url) {
  return bp.EventSet("matchAddedWebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyWebhookAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add webhook (.+)/)});
  var m = ev.data.parameters.description.match(/Add webhook (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "url"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedWebhook(accountSid, url) {
  return bp.EventSet("matchDeletedWebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountSid);
  });
}

function waitForAnyWebhookDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete webhook (.+)/)});
  var m = ev.data.parameters.description.match(/Delete webhook (.+)/);
  var captures = m.slice(1);
  var names = ["accountSid", "url"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
