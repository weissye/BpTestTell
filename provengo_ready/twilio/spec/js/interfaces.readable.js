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

function matchSuccess(desc) {
  return bp.EventSet("Success Event", function(e) {
    return e.name === "Done: " + desc;
  });
}

// ---- Entity: account ----

function fetchAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + Sid + ".json";
  var description = "Fetch account with Sid " + Sid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts.json";
  var description = "Create account with FriendlyName " + FriendlyName;
  var body = {
    "FriendlyName": String(FriendlyName),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { Sid: String(Sid) }) });
}

function updateAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + Sid + ".json";
  var description = "Update account " + Sid + " with FriendlyName " + FriendlyName;
  var body = {
    "FriendlyName": String(FriendlyName),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { Sid: String(Sid) }) });
}

function listAccounts(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts.json";
  var description = "List accounts filtered by FriendlyName " + FriendlyName + " and Status " + Status;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  listAccounts(FriendlyName, Page, PageSize, PageToken, Sid, Status);
}

function verifyAccountExists(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts.json";
  var description = "Verify Account with Sid " + Sid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].Sid) === String(Sid)) {
            return pvg.success("Account exists");
          }
        }
      }
      return pvg.fail("Expected Account to exist but it does not");
    }
  });
}

function verifyAccountDoesNotExist(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts.json";
  var description = "Verify Account with Sid " + Sid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].Sid) === String(Sid)) {
            return pvg.fail("Expected Account to not exist but it does");
          }
        }
      }
      return pvg.success("Account does not exist");
    }
  });
}

function matchAddedAccount(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var expectedDesc = "Create account with FriendlyName " + FriendlyName;
  return matchSuccess(expectedDesc);
}

function waitForAnyAccountAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ account\ with\ FriendlyName\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ account\ with\ FriendlyName\ (.+)$/);
  var captures = m.slice(1);
  var names = ["FriendlyName"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAccountAddedEvent(keyVal) {
  return bp.EventSet("AddAccount:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.Sid) === String(keyVal);
  });
}

function matchAnyAccountAdded() {
  return bp.EventSet("matchAnyAccountAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.Sid !== undefined && e.name.indexOf("Create account") > -1;
  });
}

function waitForAccountAdded(FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var expectedDesc = "Create account with FriendlyName " + FriendlyName;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: address ----

function fetchAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Fetch address with Sid " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses.json";
  var description = "Create address " + CustomerName + " at {Street}, {City}, {Region}, {PostalCode}, " + IsoCountry;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Delete address with Sid " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Update address " + Sid + " for account " + AccountSid + " with FriendlyName " + FriendlyName + " and CustomerName " + CustomerName;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function listAddresses(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses.json";
  var description = "List addresses for account " + AccountSid + " filtered by CustomerName " + CustomerName + ", FriendlyName " + FriendlyName + ", EmergencyEnabled " + EmergencyEnabled + ", IsoCountry " + IsoCountry;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  listAddresses(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid);
}

function verifyAddressExists(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses.json";
  var description = "Verify Address with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Address exists");
          }
        }
      }
      return pvg.fail("Expected Address to exist but it does not");
    }
  });
}

function verifyAddressDoesNotExist(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses.json";
  var description = "Verify Address with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Address to not exist but it does");
          }
        }
      }
      return pvg.success("Address does not exist");
    }
  });
}

function tryToDeleteANonExistingAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Addresses/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing Address";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create address " + CustomerName + " at {Street}, {City}, {Region}, {PostalCode}, " + IsoCountry;
  return matchSuccess(expectedDesc);
}

function waitForAnyAddressAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ address\ (.+)\ at\ (.+),\ (.+),\ (.+),\ (.+),\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ address\ (.+)\ at\ (.+),\ (.+),\ (.+),\ (.+),\ (.+)$/);
  var captures = m.slice(1);
  var names = ["CustomerName", "Street", "City", "Region", "PostalCode", "IsoCountry"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAddressAddedEvent(keyVal) {
  return bp.EventSet("AddAddress:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyAddressAdded() {
  return bp.EventSet("matchAnyAddressAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create address") > -1;
  });
}

function waitForAddressAdded(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create address " + CustomerName + " at {Street}, {City}, {Region}, {PostalCode}, " + IsoCountry;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAddress(AccountSid, CustomerName, EmergencyEnabled, FriendlyName, IsoCountry, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Delete address with Sid " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedAddress", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAddressDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ address\ with\ Sid\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ address\ with\ Sid\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: application ----

function fetchApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Fetch application " + Sid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications.json";
  var description = "Create application with FriendlyName " + FriendlyName + " in account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Delete application " + Sid + " in account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Update application " + Sid + " in account " + AccountSid + " with FriendlyName " + FriendlyName;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function listApplications(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications.json";
  var description = "List applications in account " + AccountSid + " filtered by FriendlyName " + FriendlyName;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  listApplications(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid);
}

function verifyApplicationExists(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications.json";
  var description = "Verify Application with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Application exists");
          }
        }
      }
      return pvg.fail("Expected Application to exist but it does not");
    }
  });
}

function verifyApplicationDoesNotExist(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications.json";
  var description = "Verify Application with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Application to not exist but it does");
          }
        }
      }
      return pvg.success("Application does not exist");
    }
  });
}

function tryToDeleteANonExistingApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Applications/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing Application";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create application with FriendlyName " + FriendlyName + " in account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyApplicationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ application\ with\ FriendlyName\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ application\ with\ FriendlyName\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["FriendlyName", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getApplicationAddedEvent(keyVal) {
  return bp.EventSet("AddApplication:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyApplicationAdded() {
  return bp.EventSet("matchAnyApplicationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create application") > -1;
  });
}

function waitForApplicationAdded(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create application with FriendlyName " + FriendlyName + " in account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedApplication(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Delete application " + Sid + " in account " + AccountSid;
  return bp.EventSet("matchDeletedApplication", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyApplicationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ application\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ application\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: authorizedConnectApp ----

function fetchAuthorizedConnectApp(AccountSid, ConnectAppSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AuthorizedConnectApps/" + ConnectAppSid + ".json";
  var description = "Fetch an instance of authorized-connect-app " + ConnectAppSid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listAuthorizedConnectApps(AccountSid, ConnectAppSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AuthorizedConnectApps.json";
  var description = "Retrieve a list of authorized-connect-apps for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyAuthorizedConnectAppExists(AccountSid, ConnectAppSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AuthorizedConnectApp with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("AuthorizedConnectApp exists");
          }
        }
      }
      return pvg.fail("Expected AuthorizedConnectApp to exist but it does not");
    }
  });
}

function verifyAuthorizedConnectAppDoesNotExist(AccountSid, ConnectAppSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AuthorizedConnectApp with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected AuthorizedConnectApp to not exist but it does");
          }
        }
      }
      return pvg.success("AuthorizedConnectApp does not exist");
    }
  });
}

// ---- Entity: availablePhoneNumber ----

function getAvailablePhoneNumber(AccountSid, CountryCode) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers/" + CountryCode + ".json";
  var description = "Get available phone numbers for country " + CountryCode + " and account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyAvailablePhoneNumberExists(AccountSid, CountryCode) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AvailablePhoneNumber with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("AvailablePhoneNumber exists");
          }
        }
      }
      return pvg.fail("Expected AvailablePhoneNumber to exist but it does not");
    }
  });
}

function verifyAvailablePhoneNumberDoesNotExist(AccountSid, CountryCode) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AvailablePhoneNumber with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected AvailablePhoneNumber to not exist but it does");
          }
        }
      }
      return pvg.success("AvailablePhoneNumber does not exist");
    }
  });
}

// ---- Entity: availablePhoneNumber ----

function getAvailablePhoneNumbers(AccountSid, CountryCode, Type) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers/" + CountryCode + "/" + Type + ".json";
  var description = "Get available phone numbers of type " + Type + " for account " + AccountSid + " in country " + CountryCode;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function verifyAvailablePhoneNumbersExists(AccountSid, CountryCode, Type) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AvailablePhoneNumbers with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("AvailablePhoneNumbers exists");
          }
        }
      }
      return pvg.fail("Expected AvailablePhoneNumbers to exist but it does not");
    }
  });
}

function verifyAvailablePhoneNumbersDoesNotExist(AccountSid, CountryCode, Type) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AvailablePhoneNumbers with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected AvailablePhoneNumbers to not exist but it does");
          }
        }
      }
      return pvg.success("AvailablePhoneNumbers does not exist");
    }
  });
}

// ---- Entity: balance ----

function getBalance(AccountSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Balance.json";
  var description = "Get balance for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyBalanceExists(AccountSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Balance with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Balance exists");
          }
        }
      }
      return pvg.fail("Expected Balance to exist but it does not");
    }
  });
}

function verifyBalanceDoesNotExist(AccountSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Balance with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Balance to not exist but it does");
          }
        }
      }
      return pvg.success("Balance does not exist");
    }
  });
}

// ---- Entity: call ----

function listCalls(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "List calls for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listCalls(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "List calls for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "Create call from " + From + " to " + To;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Delete call " + Sid + " from account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function fetchCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Fetch call " + Sid + " from account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Update call " + Sid + " from account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  updateCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To);
}

function verifyCallExists(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "Verify Call with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Call exists");
          }
        }
      }
      return pvg.fail("Expected Call to exist but it does not");
    }
  });
}

function verifyCallDoesNotExist(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls.json";
  var description = "Verify Call with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Call to not exist but it does");
          }
        }
      }
      return pvg.success("Call does not exist");
    }
  });
}

function tryToDeleteANonExistingCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing Call";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var expectedDesc = "Create call from " + From + " to " + To;
  return matchSuccess(expectedDesc);
}

function waitForAnyCallAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ call\ from\ (.+)\ to\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ call\ from\ (.+)\ to\ (.+)$/);
  var captures = m.slice(1);
  var names = ["From", "To"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCallAddedEvent(keyVal) {
  return bp.EventSet("AddCall:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyCallAdded() {
  return bp.EventSet("matchAnyCallAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create call") > -1;
  });
}

function waitForCallAdded(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var expectedDesc = "Create call from " + From + " to " + To;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCall(AccountSid, EndTime, EndTime<, EndTime>, From, Page, PageSize, PageToken, ParentCallSid, Sid, StartTime, StartTime<, StartTime>, Status, To) {
  var expectedDesc = "Delete call " + Sid + " from account " + AccountSid;
  return bp.EventSet("matchDeletedCall", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCallDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ call\ (.+)\ from\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ call\ (.+)\ from\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: call event ----

// ---- Entity: call notification ----

function fetchCallNotification(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Notifications/" + Sid + ".json";
  var description = "Fetch call notification " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listCallNotification(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Notifications.json";
  var description = "List call notifications for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyCallNotificationExists(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify CallNotification with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("CallNotification exists");
          }
        }
      }
      return pvg.fail("Expected CallNotification to exist but it does not");
    }
  });
}

function verifyCallNotificationDoesNotExist(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify CallNotification with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected CallNotification to not exist but it does");
          }
        }
      }
      return pvg.success("CallNotification does not exist");
    }
  });
}

// ---- Entity: call recording ----

function createCallRecording(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings.json";
  var description = "Create call recording for call " + CallSid + " in account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function fetchCallRecording(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings/" + Sid + ".json";
  var description = "Fetch call recording " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listCallRecordings(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings.json";
  var description = "List call recordings for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateCallRecording(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings/" + Sid + ".json";
  var description = "Update call recording " + Sid + " for call " + CallSid + " in account " + AccountSid + " with status {Status}";
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteCallRecording(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings/" + Sid + ".json";
  var description = "Delete call recording " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingCallRecording(AccountSid, CallSid, Sid) {
  deleteCallRecording(AccountSid, CallSid, Sid);
}

function verifyCallRecordingExists(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings.json";
  var description = "Verify CallRecording with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("CallRecording exists");
          }
        }
      }
      return pvg.fail("Expected CallRecording to exist but it does not");
    }
  });
}

function verifyCallRecordingDoesNotExist(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings.json";
  var description = "Verify CallRecording with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected CallRecording to not exist but it does");
          }
        }
      }
      return pvg.success("CallRecording does not exist");
    }
  });
}

function tryToDeleteANonExistingCallRecording(AccountSid, CallSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Recordings/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing CallRecording";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedCallRecording(AccountSid, CallSid, Sid) {
  var expectedDesc = "Create call recording for call " + CallSid + " in account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyCallRecordingAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ call\ recording\ for\ call\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ call\ recording\ for\ call\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["CallSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCallRecordingAddedEvent(keyVal) {
  return bp.EventSet("AddCallRecording:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyCallRecordingAdded() {
  return bp.EventSet("matchAnyCallRecordingAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create call recording") > -1;
  });
}

function waitForCallRecordingAdded(AccountSid, CallSid, Sid) {
  var expectedDesc = "Create call recording for call " + CallSid + " in account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCallRecording(AccountSid, CallSid, Sid) {
  var expectedDesc = "Delete call recording " + Sid + " for call " + CallSid + " in account " + AccountSid;
  return bp.EventSet("matchDeletedCallRecording", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCallRecordingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ call\ recording\ (.+)\ for\ call\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ call\ recording\ (.+)\ for\ call\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "CallSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: conference ----

function fetchConference(AccountSid, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + Sid + ".json";
  var description = "Fetch conference " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateConference(AccountSid, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + Sid + ".json";
  var description = "Update conference " + Sid + " for account " + AccountSid + " with status " + Status + ", announce URL {AnnounceUrl}, announce method {AnnounceMethod}";
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function listConferences(AccountSid, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences.json";
  var description = "List conferences for account " + AccountSid + " filtered by FriendlyName " + FriendlyName + " and Status " + Status;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyConferenceExists(AccountSid, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Conference with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Conference exists");
          }
        }
      }
      return pvg.fail("Expected Conference to exist but it does not");
    }
  });
}

function verifyConferenceDoesNotExist(AccountSid, DateCreated, DateCreated<, DateCreated>, DateUpdated, DateUpdated<, DateUpdated>, FriendlyName, Page, PageSize, PageToken, Sid, Status) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Conference with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Conference to not exist but it does");
          }
        }
      }
      return pvg.success("Conference does not exist");
    }
  });
}

// ---- Entity: conference recording ----

function fetchConferenceRecording(AccountSid, ConferenceSid, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Fetch conference recording " + Sid + " for conference " + ConferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateConferenceRecording(AccountSid, ConferenceSid, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Update conference recording " + Sid + " for conference " + ConferenceSid + " in account " + AccountSid + " with status " + Status;
  var body = {
    "AccountSid": String(AccountSid),
    "ConferenceSid": String(ConferenceSid),
    "PauseBehavior": String(PauseBehavior),
    "Sid": String(Sid),
    "Status": String(Status),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , ConferenceSid: String(ConferenceSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteConferenceRecording(AccountSid, ConferenceSid, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Delete conference recording " + Sid + " for conference " + ConferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function verifyConferenceRecordingExists(AccountSid, ConferenceSid, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify ConferenceRecording with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("ConferenceRecording exists");
          }
        }
      }
      return pvg.fail("Expected ConferenceRecording to exist but it does not");
    }
  });
}

function verifyConferenceRecordingDoesNotExist(AccountSid, ConferenceSid, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify ConferenceRecording with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected ConferenceRecording to not exist but it does");
          }
        }
      }
      return pvg.success("ConferenceRecording does not exist");
    }
  });
}

function tryToDeleteANonExistingConferenceRecording(AccountSid, ConferenceSid, PauseBehavior, Sid, Status) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing ConferenceRecording";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedConferenceRecording(AccountSid, ConferenceSid, PauseBehavior, Sid, Status) {
  var expectedDesc = "Delete conference recording " + Sid + " for conference " + ConferenceSid + " in account " + AccountSid;
  return bp.EventSet("matchDeletedConferenceRecording", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyConferenceRecordingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ conference\ recording\ (.+)\ for\ conference\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ conference\ recording\ (.+)\ for\ conference\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "ConferenceSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: connect app ----

function fetchConnectApp(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Fetch connect-app " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateConnectApp(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Update connect-app " + Sid + " for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteConnectApp(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Delete connect-app " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function listConnectApps(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps.json";
  var description = "List connect-apps for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyConnectAppExists(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify ConnectApp with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("ConnectApp exists");
          }
        }
      }
      return pvg.fail("Expected ConnectApp to exist but it does not");
    }
  });
}

function verifyConnectAppDoesNotExist(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify ConnectApp with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected ConnectApp to not exist but it does");
          }
        }
      }
      return pvg.success("ConnectApp does not exist");
    }
  });
}

function tryToDeleteANonExistingConnectApp(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/ConnectApps/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing ConnectApp";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedConnectApp(AccountSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Delete connect-app " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedConnectApp", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyConnectAppDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ connect\-app\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ connect\-app\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: queue ----

function fetchQueue(AccountSid, FriendlyName, MaxSize, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Fetch queue " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createQueue(AccountSid, FriendlyName, MaxSize, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues.json";
  var description = "Create queue " + FriendlyName + " for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "FriendlyName": String(FriendlyName),
    "MaxSize": String(MaxSize),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function updateQueue(AccountSid, FriendlyName, MaxSize, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Update queue " + Sid + " for account " + AccountSid + " with FriendlyName " + FriendlyName + " and MaxSize " + MaxSize;
  var body = {
    "AccountSid": String(AccountSid),
    "FriendlyName": String(FriendlyName),
    "MaxSize": String(MaxSize),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteQueue(AccountSid, FriendlyName, MaxSize, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Delete queue " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingQueue(AccountSid, FriendlyName, MaxSize, Sid) {
  deleteQueue(AccountSid, FriendlyName, MaxSize, Sid);
}

function verifyQueueExists(AccountSid, FriendlyName, MaxSize, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues.json";
  var description = "Verify Queue with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Queue exists");
          }
        }
      }
      return pvg.fail("Expected Queue to exist but it does not");
    }
  });
}

function verifyQueueDoesNotExist(AccountSid, FriendlyName, MaxSize, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues.json";
  var description = "Verify Queue with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Queue to not exist but it does");
          }
        }
      }
      return pvg.success("Queue does not exist");
    }
  });
}

function tryToDeleteANonExistingQueue(AccountSid, FriendlyName, MaxSize, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing Queue";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedQueue(AccountSid, FriendlyName, MaxSize, Sid) {
  var expectedDesc = "Create queue " + FriendlyName + " for account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyQueueAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ queue\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ queue\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["FriendlyName", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getQueueAddedEvent(keyVal) {
  return bp.EventSet("AddQueue:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyQueueAdded() {
  return bp.EventSet("matchAnyQueueAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create queue") > -1;
  });
}

function waitForQueueAdded(AccountSid, FriendlyName, MaxSize, Sid) {
  var expectedDesc = "Create queue " + FriendlyName + " for account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedQueue(AccountSid, FriendlyName, MaxSize, Sid) {
  var expectedDesc = "Delete queue " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedQueue", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyQueueDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ queue\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ queue\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: transcription ----

function getTranscription(AccountSid, CallSid, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions/" + Sid + ".json";
  var description = "Get transcription " + Sid + " for recording " + RecordingSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getTranscription(AccountSid, CallSid, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions/" + Sid + ".json";
  var description = "Get transcription " + Sid + " for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function listTranscriptions(AccountSid, CallSid, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions.json";
  var description = "List transcriptions for recording " + RecordingSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createTranscription(AccountSid, CallSid, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions.json";
  var description = "Create transcription for call " + CallSid + " in account " + AccountSid + " with name {Name}";
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , RecordingSid: String(RecordingSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function updateTranscription(AccountSid, CallSid, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions/" + Sid + ".json";
  var description = "Update transcription " + Sid + " for call " + CallSid + " in account " + AccountSid + " with status {Status}";
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , RecordingSid: String(RecordingSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingTranscription(AccountSid, CallSid, RecordingSid, Sid) {
  updateTranscription(AccountSid, CallSid, RecordingSid, Sid);
}

function verifyTranscriptionExists(AccountSid, CallSid, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions.json";
  var description = "Verify Transcription with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Transcription exists");
          }
        }
      }
      return pvg.fail("Expected Transcription to exist but it does not");
    }
  });
}

function verifyTranscriptionDoesNotExist(AccountSid, CallSid, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Transcriptions.json";
  var description = "Verify Transcription with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Transcription to not exist but it does");
          }
        }
      }
      return pvg.success("Transcription does not exist");
    }
  });
}

function matchAddedTranscription(AccountSid, CallSid, RecordingSid, Sid) {
  var expectedDesc = "Create transcription for call " + CallSid + " in account " + AccountSid + " with name {Name}";
  return matchSuccess(expectedDesc);
}

function waitForAnyTranscriptionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ transcription\ for\ call\ (.+)\ in\ account\ (.+)\ with\ name\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ transcription\ for\ call\ (.+)\ in\ account\ (.+)\ with\ name\ (.+)$/);
  var captures = m.slice(1);
  var names = ["CallSid", "AccountSid", "Name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTranscriptionAddedEvent(keyVal) {
  return bp.EventSet("AddTranscription:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyTranscriptionAdded() {
  return bp.EventSet("matchAnyTranscriptionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create transcription") > -1;
  });
}

function waitForTranscriptionAdded(AccountSid, CallSid, RecordingSid, Sid) {
  var expectedDesc = "Create transcription for call " + CallSid + " in account " + AccountSid + " with name {Name}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: recording ----

function fetchRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + Sid + ".json";
  var description = "Fetch an instance of a recording with Sid " + Sid + " for Account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + Sid + ".json";
  var description = "Get recording " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + Sid + ".json";
  var description = "Delete recording with Sid " + Sid + " from Account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function listRecordings(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings.json";
  var description = "List recordings for Account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyRecordingExists(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Recording with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Recording exists");
          }
        }
      }
      return pvg.fail("Expected Recording to exist but it does not");
    }
  });
}

function verifyRecordingDoesNotExist(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Recording with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Recording to not exist but it does");
          }
        }
      }
      return pvg.success("Recording does not exist");
    }
  });
}

function tryToDeleteANonExistingRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing Recording";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedRecording(AccountSid, CallSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, IncludeSoftDeleted, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var expectedDesc = "Delete recording with Sid " + Sid + " from Account " + AccountSid;
  return bp.EventSet("matchDeletedRecording", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRecordingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ recording\ with\ Sid\ (.+)\ from\ Account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ recording\ with\ Sid\ (.+)\ from\ Account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: addOnResult ----

function getAddOnResults(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults.json";
  var description = "Get add-on results for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getAddOnResult(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Get add-on result " + Sid + " for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyAddOnResultExists(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AddOnResult with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("AddOnResult exists");
          }
        }
      }
      return pvg.fail("Expected AddOnResult to exist but it does not");
    }
  });
}

function verifyAddOnResultDoesNotExist(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AddOnResult with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected AddOnResult to not exist but it does");
          }
        }
      }
      return pvg.success("AddOnResult does not exist");
    }
  });
}

// ---- Entity: payload ----

function getPayloads(AccountSid, AddOnResultSid, PayloadSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads.json";
  var description = "Get payloads for add-on result " + AddOnResultSid + " of recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getPayload(AccountSid, AddOnResultSid, PayloadSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Get payload " + Sid + " for add-on result " + AddOnResultSid + " of recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getPayloadData(AccountSid, AddOnResultSid, PayloadSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + PayloadSid + "/Data.json";
  var description = "Get data for payload " + PayloadSid + " of add-on result " + AddOnResultSid + " of recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [307]
  });
}

function verifyPayloadExists(AccountSid, AddOnResultSid, PayloadSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Payload with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Payload exists");
          }
        }
      }
      return pvg.fail("Expected Payload to exist but it does not");
    }
  });
}

function verifyPayloadDoesNotExist(AccountSid, AddOnResultSid, PayloadSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Payload with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Payload to not exist but it does");
          }
        }
      }
      return pvg.success("Payload does not exist");
    }
  });
}

// ---- Entity: shortCode ----

function fetchShortCode(AccountSid, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes/" + Sid + ".json";
  var description = "Fetch an instance of short code " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listShortCode(AccountSid, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes.json";
  var description = "Retrieve list of short codes for account " + AccountSid + " filtered by FriendlyName " + FriendlyName + " and ShortCode " + ShortCode;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateShortCode(AccountSid, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SMS/ShortCodes/" + Sid + ".json";
  var description = "Update short code " + Sid + " for account " + AccountSid + " with FriendlyName " + FriendlyName;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function verifyShortCodeExists(AccountSid, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify ShortCode with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("ShortCode exists");
          }
        }
      }
      return pvg.fail("Expected ShortCode to exist but it does not");
    }
  });
}

function verifyShortCodeDoesNotExist(AccountSid, FriendlyName, Page, PageSize, PageToken, ShortCode, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify ShortCode with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected ShortCode to not exist but it does");
          }
        }
      }
      return pvg.success("ShortCode does not exist");
    }
  });
}

// ---- Entity: signingKey ----

function fetchSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "Fetch signing key " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listSigningKeys(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys.json";
  var description = "List signing keys for account " + AccountSid + " with PageSize " + PageSize + " Page " + Page + " PageToken " + PageToken;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "Update signing key " + Sid + " for account " + AccountSid + " with FriendlyName " + FriendlyName;
  var body = {
    "AccountSid": String(AccountSid),
    "FriendlyName": String(FriendlyName),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "Delete signing key " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function verifySigningKeyExists(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify SigningKey with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("SigningKey exists");
          }
        }
      }
      return pvg.fail("Expected SigningKey to exist but it does not");
    }
  });
}

function verifySigningKeyDoesNotExist(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify SigningKey with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected SigningKey to not exist but it does");
          }
        }
      }
      return pvg.success("SigningKey does not exist");
    }
  });
}

function tryToDeleteANonExistingSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SigningKeys/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing SigningKey";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedSigningKey(AccountSid, FriendlyName, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Delete signing key " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedSigningKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySigningKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ signing\ key\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ signing\ key\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: sip ----

function getSIP(AccountSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP.json";
  var description = "Get SIP configuration for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function verifySIPExists(AccountSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify SIP with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("SIP exists");
          }
        }
      }
      return pvg.fail("Expected SIP to exist but it does not");
    }
  });
}

function verifySIPDoesNotExist(AccountSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify SIP with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected SIP to not exist but it does");
          }
        }
      }
      return pvg.success("SIP does not exist");
    }
  });
}

// ---- Entity: sipDomainAuth ----

function getSIPDomainAuth(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth.json";
  var description = "Get SIP domain auth for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function verifySIPDomainAuthExists(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify SIPDomainAuth with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("SIPDomainAuth exists");
          }
        }
      }
      return pvg.fail("Expected SIPDomainAuth to exist but it does not");
    }
  });
}

function verifySIPDomainAuthDoesNotExist(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify SIPDomainAuth with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected SIPDomainAuth to not exist but it does");
          }
        }
      }
      return pvg.success("SIPDomainAuth does not exist");
    }
  });
}

// ---- Entity: sipDomainAuthCall ----

function getSIPDomainAuthCall(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls.json";
  var description = "Get SIP domain auth calls for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function verifySIPDomainAuthCallExists(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify SIPDomainAuthCall with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("SIPDomainAuthCall exists");
          }
        }
      }
      return pvg.fail("Expected SIPDomainAuthCall to exist but it does not");
    }
  });
}

function verifySIPDomainAuthCallDoesNotExist(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify SIPDomainAuthCall with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected SIPDomainAuthCall to not exist but it does");
          }
        }
      }
      return pvg.success("SIPDomainAuthCall does not exist");
    }
  });
}

// ---- Entity: credentialListMapping ----

function fetchCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings/" + Sid + ".json";
  var description = "Fetch credential list mapping " + Sid + " for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listCredentialListMappings(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/CredentialListMappings.json";
  var description = "List credential list mappings for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings.json";
  var description = "Create credential list mapping with CredentialListSid {CredentialListSid} for domain " + DomainSid + " in account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "DomainSid": String(DomainSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , DomainSid: String(DomainSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings/" + Sid + ".json";
  var description = "Delete credential list mapping " + Sid + " for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/CredentialListMappings/" + Sid + ".json";
  var description = "Update credential list mapping " + Sid + " for domain " + DomainSid + " and account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "DomainSid": String(DomainSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , DomainSid: String(DomainSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  updateCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
}

function verifyCredentialListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings.json";
  var description = "Verify CredentialListMapping with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("CredentialListMapping exists");
          }
        }
      }
      return pvg.fail("Expected CredentialListMapping to exist but it does not");
    }
  });
}

function verifyCredentialListMappingDoesNotExist(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings.json";
  var description = "Verify CredentialListMapping with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected CredentialListMapping to not exist but it does");
          }
        }
      }
      return pvg.success("CredentialListMapping does not exist");
    }
  });
}

function tryToDeleteANonExistingCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations/CredentialListMappings/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing CredentialListMapping";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create credential list mapping with CredentialListSid {CredentialListSid} for domain " + DomainSid + " in account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyCredentialListMappingAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ credential\ list\ mapping\ with\ CredentialListSid\ (.+)\ for\ domain\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ credential\ list\ mapping\ with\ CredentialListSid\ (.+)\ for\ domain\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["CredentialListSid", "DomainSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCredentialListMappingAddedEvent(keyVal) {
  return bp.EventSet("AddCredentialListMapping:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyCredentialListMappingAdded() {
  return bp.EventSet("matchAnyCredentialListMappingAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create credentialListMapping") > -1;
  });
}

function waitForCredentialListMappingAdded(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create credential list mapping with CredentialListSid {CredentialListSid} for domain " + DomainSid + " in account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCredentialListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Delete credential list mapping " + Sid + " for domain " + DomainSid + " in account " + AccountSid;
  return bp.EventSet("matchDeletedCredentialListMapping", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCredentialListMappingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ credential\ list\ mapping\ (.+)\ for\ domain\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ credential\ list\ mapping\ (.+)\ for\ domain\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "DomainSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: ipAccessControlListMapping ----

function fetchIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Fetch IP Access Control List mapping " + Sid + " for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listIpAccessControlListMappings(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings.json";
  var description = "List IP Access Control List mappings for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings.json";
  var description = "Create IP Access Control List mapping with IpAccessControlListSid {IpAccessControlListSid} for domain " + DomainSid + " in account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "DomainSid": String(DomainSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , DomainSid: String(DomainSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Delete IP Access Control List mapping " + Sid + " for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Update IP access control list mapping " + Sid + " for domain " + DomainSid + " and account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "DomainSid": String(DomainSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , DomainSid: String(DomainSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  updateIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid);
}

function verifyIpAccessControlListMappingExists(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings.json";
  var description = "Verify IpAccessControlListMapping with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("IpAccessControlListMapping exists");
          }
        }
      }
      return pvg.fail("Expected IpAccessControlListMapping to exist but it does not");
    }
  });
}

function verifyIpAccessControlListMappingDoesNotExist(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings.json";
  var description = "Verify IpAccessControlListMapping with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected IpAccessControlListMapping to not exist but it does");
          }
        }
      }
      return pvg.success("IpAccessControlListMapping does not exist");
    }
  });
}

function tryToDeleteANonExistingIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Calls/IpAccessControlListMappings/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing IpAccessControlListMapping";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create IP Access Control List mapping with IpAccessControlListSid {IpAccessControlListSid} for domain " + DomainSid + " in account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyIpAccessControlListMappingAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ IP\ Access\ Control\ List\ mapping\ with\ IpAccessControlListSid\ (.+)\ for\ domain\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ IP\ Access\ Control\ List\ mapping\ with\ IpAccessControlListSid\ (.+)\ for\ domain\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["IpAccessControlListSid", "DomainSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIpAccessControlListMappingAddedEvent(keyVal) {
  return bp.EventSet("AddIpAccessControlListMapping:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyIpAccessControlListMappingAdded() {
  return bp.EventSet("matchAnyIpAccessControlListMappingAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create ipAccessControlListMapping") > -1;
  });
}

function waitForIpAccessControlListMappingAdded(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create IP Access Control List mapping with IpAccessControlListSid {IpAccessControlListSid} for domain " + DomainSid + " in account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIpAccessControlListMapping(AccountSid, DomainSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Delete IP Access Control List mapping " + Sid + " for domain " + DomainSid + " in account " + AccountSid;
  return bp.EventSet("matchDeletedIpAccessControlListMapping", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIpAccessControlListMappingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ IP\ Access\ Control\ List\ mapping\ (.+)\ for\ domain\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ IP\ Access\ Control\ List\ mapping\ (.+)\ for\ domain\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "DomainSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: registration ----

function listRegistrations(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/Auth/Registrations.json";
  var description = "List Registrations for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

// ---- Entity: credential ----

function getCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Get Credential " + Sid + " in Credential List " + CredentialListSid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listCredentials(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials.json";
  var description = "List Credentials in Credential List " + CredentialListSid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyCredentialExists(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Credential with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Credential exists");
          }
        }
      }
      return pvg.fail("Expected Credential to exist but it does not");
    }
  });
}

function verifyCredentialDoesNotExist(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Credential with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Credential to not exist but it does");
          }
        }
      }
      return pvg.success("Credential does not exist");
    }
  });
}

// ---- Entity: credentialList ----

function fetchCredentialList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Get credential list " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listCredentialLists(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "List Credential Lists for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createCredentialList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "Create credential list with FriendlyName {FriendlyName} for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function updateCredentialList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Update credential list " + Sid + " with FriendlyName {FriendlyName} for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteCredentialList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Delete credential list " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingCredentialList(AccountSid, Sid) {
  deleteCredentialList(AccountSid, Sid);
}

function verifyCredentialListExists(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "Verify CredentialList with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("CredentialList exists");
          }
        }
      }
      return pvg.fail("Expected CredentialList to exist but it does not");
    }
  });
}

function verifyCredentialListDoesNotExist(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "Verify CredentialList with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected CredentialList to not exist but it does");
          }
        }
      }
      return pvg.success("CredentialList does not exist");
    }
  });
}

function tryToDeleteANonExistingCredentialList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing CredentialList";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedCredentialList(AccountSid, Sid) {
  var expectedDesc = "Create credential list with FriendlyName {FriendlyName} for account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyCredentialListAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ credential\ list\ with\ FriendlyName\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ credential\ list\ with\ FriendlyName\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["FriendlyName", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCredentialListAddedEvent(keyVal) {
  return bp.EventSet("AddCredentialList:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyCredentialListAdded() {
  return bp.EventSet("matchAnyCredentialListAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create credentialList") > -1;
  });
}

function waitForCredentialListAdded(AccountSid, Sid) {
  var expectedDesc = "Create credential list with FriendlyName {FriendlyName} for account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCredentialList(AccountSid, Sid) {
  var expectedDesc = "Delete credential list " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedCredentialList", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCredentialListDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ credential\ list\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ credential\ list\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: credentialListMappingDomain ----

function listCredentialListMappingsForDomain(AccountSid, DomainSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + DomainSid + "/CredentialListMappings.json";
  var description = "List Credential List Mappings for domain " + DomainSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: domain ----

function getDomain(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + Sid + ".json";
  var description = "Get domain " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createDomain(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains.json";
  var description = "Create domain for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteDomain(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + Sid + ".json";
  var description = "Delete domain " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateDomain(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + Sid + ".json";
  var description = "Update domain " + Sid + " for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingDomain(AccountSid, Sid) {
  updateDomain(AccountSid, Sid);
}

function verifyDomainExists(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains.json";
  var description = "Verify Domain with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Domain exists");
          }
        }
      }
      return pvg.fail("Expected Domain to exist but it does not");
    }
  });
}

function verifyDomainDoesNotExist(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains.json";
  var description = "Verify Domain with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Domain to not exist but it does");
          }
        }
      }
      return pvg.success("Domain does not exist");
    }
  });
}

function tryToDeleteANonExistingDomain(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/Domains/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing Domain";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedDomain(AccountSid, Sid) {
  var expectedDesc = "Create domain for account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyDomainAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ domain\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ domain\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getDomainAddedEvent(keyVal) {
  return bp.EventSet("AddDomain:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyDomainAdded() {
  return bp.EventSet("matchAnyDomainAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create domain") > -1;
  });
}

function waitForDomainAdded(AccountSid, Sid) {
  var expectedDesc = "Create domain for account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedDomain(AccountSid, Sid) {
  var expectedDesc = "Delete domain " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedDomain", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDomainDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ domain\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ domain\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: ipAccessControlList ----

function getIpAccessControlList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + Sid + ".json";
  var description = "Get IP access control list " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createIpAccessControlList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists.json";
  var description = "Create IP access control list for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteIpAccessControlList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + Sid + ".json";
  var description = "Delete IP access control list " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateIpAccessControlList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + Sid + ".json";
  var description = "Update IP access control list " + Sid + " for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingIpAccessControlList(AccountSid, Sid) {
  updateIpAccessControlList(AccountSid, Sid);
}

function verifyIpAccessControlListExists(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists.json";
  var description = "Verify IpAccessControlList with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("IpAccessControlList exists");
          }
        }
      }
      return pvg.fail("Expected IpAccessControlList to exist but it does not");
    }
  });
}

function verifyIpAccessControlListDoesNotExist(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists.json";
  var description = "Verify IpAccessControlList with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected IpAccessControlList to not exist but it does");
          }
        }
      }
      return pvg.success("IpAccessControlList does not exist");
    }
  });
}

function tryToDeleteANonExistingIpAccessControlList(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing IpAccessControlList";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedIpAccessControlList(AccountSid, Sid) {
  var expectedDesc = "Create IP access control list for account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyIpAccessControlListAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ IP\ access\ control\ list\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ IP\ access\ control\ list\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIpAccessControlListAddedEvent(keyVal) {
  return bp.EventSet("AddIpAccessControlList:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyIpAccessControlListAdded() {
  return bp.EventSet("matchAnyIpAccessControlListAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create ipAccessControlList") > -1;
  });
}

function waitForIpAccessControlListAdded(AccountSid, Sid) {
  var expectedDesc = "Create IP access control list for account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIpAccessControlList(AccountSid, Sid) {
  var expectedDesc = "Delete IP access control list " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedIpAccessControlList", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIpAccessControlListDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ IP\ access\ control\ list\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ IP\ access\ control\ list\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: ipAddress ----

function getIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses/" + Sid + ".json";
  var description = "Get IP address " + Sid + " for IP access control list " + IpAccessControlListSid + " and account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses.json";
  var description = "Create IP address for IP access control list " + IpAccessControlListSid + " and account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "IpAccessControlListSid": String(IpAccessControlListSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , IpAccessControlListSid: String(IpAccessControlListSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses/" + Sid + ".json";
  var description = "Delete IP address " + Sid + " for IP access control list " + IpAccessControlListSid + " and account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses/" + Sid + ".json";
  var description = "Update IP address " + Sid + " for IP access control list " + IpAccessControlListSid + " and account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "IpAccessControlListSid": String(IpAccessControlListSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , IpAccessControlListSid: String(IpAccessControlListSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  updateIpAddress(AccountSid, IpAccessControlListSid, Sid);
}

function verifyIpAddressExists(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses.json";
  var description = "Verify IpAddress with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("IpAddress exists");
          }
        }
      }
      return pvg.fail("Expected IpAddress to exist but it does not");
    }
  });
}

function verifyIpAddressDoesNotExist(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses.json";
  var description = "Verify IpAddress with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected IpAddress to not exist but it does");
          }
        }
      }
      return pvg.success("IpAddress does not exist");
    }
  });
}

function tryToDeleteANonExistingIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/IpAccessControlLists/" + IpAccessControlListSid + "/IpAddresses/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing IpAddress";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  var expectedDesc = "Create IP address for IP access control list " + IpAccessControlListSid + " and account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyIpAddressAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ IP\ address\ for\ IP\ access\ control\ list\ (.+)\ and\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ IP\ address\ for\ IP\ access\ control\ list\ (.+)\ and\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["IpAccessControlListSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIpAddressAddedEvent(keyVal) {
  return bp.EventSet("AddIpAddress:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyIpAddressAdded() {
  return bp.EventSet("matchAnyIpAddressAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create ipAddress") > -1;
  });
}

function waitForIpAddressAdded(AccountSid, IpAccessControlListSid, Sid) {
  var expectedDesc = "Create IP address for IP access control list " + IpAccessControlListSid + " and account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIpAddress(AccountSid, IpAccessControlListSid, Sid) {
  var expectedDesc = "Delete IP address " + Sid + " for IP access control list " + IpAccessControlListSid + " and account " + AccountSid;
  return bp.EventSet("matchDeletedIpAddress", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIpAddressDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ IP\ address\ (.+)\ for\ IP\ access\ control\ list\ (.+)\ and\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ IP\ address\ (.+)\ for\ IP\ access\ control\ list\ (.+)\ and\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "IpAccessControlListSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: siprec ----

function getSiprec(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "Get SIPREC for call " + CallSid + " and account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function createSiprec(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "Create SIPREC for call " + CallSid + " and account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteSiprec(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "Delete SIPREC for call " + CallSid + " and account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function updateSiprec(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "Update SIPREC for call " + CallSid + " and account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingSiprec(AccountSid, CallSid) {
  updateSiprec(AccountSid, CallSid);
}

function verifySiprecExists(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "Verify Siprec with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Siprec exists");
          }
        }
      }
      return pvg.fail("Expected Siprec to exist but it does not");
    }
  });
}

function verifySiprecDoesNotExist(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "Verify Siprec with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Siprec to not exist but it does");
          }
        }
      }
      return pvg.success("Siprec does not exist");
    }
  });
}

function tryToDeleteANonExistingSiprec(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Siprec.json";
  var description = "Verify we cannot delete non-existing Siprec";
  svc.delete(url, {
    expectedResponseCodes: [],
    parameters: { description: description }
  });
}

function matchAddedSiprec(AccountSid, CallSid) {
  var expectedDesc = "Create SIPREC for call " + CallSid + " and account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnySiprecAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ SIPREC\ for\ call\ (.+)\ and\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ SIPREC\ for\ call\ (.+)\ and\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["CallSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getSiprecAddedEvent(keyVal) {
  return bp.EventSet("AddSiprec:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnySiprecAdded() {
  return bp.EventSet("matchAnySiprecAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create siprec") > -1;
  });
}

function waitForSiprecAdded(AccountSid, CallSid) {
  var expectedDesc = "Create SIPREC for call " + CallSid + " and account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedSiprec(AccountSid, CallSid) {
  var expectedDesc = "Delete SIPREC for call " + CallSid + " and account " + AccountSid;
  return bp.EventSet("matchDeletedSiprec", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySiprecDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ SIPREC\ for\ call\ (.+)\ and\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ SIPREC\ for\ call\ (.+)\ and\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["CallSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: usage record ----

function getUsageRecords(AccountSid, period) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Records/" + period + ".json";
  var description = "Get usage records for account " + AccountSid + " for period " + period;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function verifyUsageRecordExists(AccountSid, period) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify UsageRecord with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("UsageRecord exists");
          }
        }
      }
      return pvg.fail("Expected UsageRecord to exist but it does not");
    }
  });
}

function verifyUsageRecordDoesNotExist(AccountSid, period) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify UsageRecord with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected UsageRecord to not exist but it does");
          }
        }
      }
      return pvg.success("UsageRecord does not exist");
    }
  });
}

// ---- Entity: usage trigger ----

function getUsageTrigger(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers/" + Sid + ".json";
  var description = "Get usage trigger " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listUsageTriggers(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Usage/Triggers.json";
  var description = "List usage triggers for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyUsageTriggerExists(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify UsageTrigger with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("UsageTrigger exists");
          }
        }
      }
      return pvg.fail("Expected UsageTrigger to exist but it does not");
    }
  });
}

function verifyUsageTriggerDoesNotExist(AccountSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify UsageTrigger with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected UsageTrigger to not exist but it does");
          }
        }
      }
      return pvg.success("UsageTrigger does not exist");
    }
  });
}

// ---- Entity: user defined message ----

function listUserDefinedMessages(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/UserDefinedMessages.json";
  var description = "List user defined messages for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

// ---- Entity: user defined message subscription ----

function listUserDefinedMessageSubscriptions(AccountSid, CallSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/UserDefinedMessageSubscriptions.json";
  var description = "List user defined message subscriptions for call " + CallSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

// ---- Entity: available phone number country ----

function fetchAvailablePhoneNumberCountry(AccountSid, CountryCode) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers/" + CountryCode + ".json";
  var description = "Fetch available phone number country " + CountryCode + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listAvailablePhoneNumberCountry(AccountSid, CountryCode) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/AvailablePhoneNumbers.json";
  var description = "List available phone number countries for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyAvailablePhoneNumberCountryExists(AccountSid, CountryCode) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AvailablePhoneNumberCountry with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("AvailablePhoneNumberCountry exists");
          }
        }
      }
      return pvg.fail("Expected AvailablePhoneNumberCountry to exist but it does not");
    }
  });
}

function verifyAvailablePhoneNumberCountryDoesNotExist(AccountSid, CountryCode) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify AvailablePhoneNumberCountry with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected AvailablePhoneNumberCountry to not exist but it does");
          }
        }
      }
      return pvg.success("AvailablePhoneNumberCountry does not exist");
    }
  });
}

// ---- Entity: conference recordings list ----

function listConferenceRecordings(AccountSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Recordings.json";
  var description = "List conference recordings for conference " + ConferenceSid + " in account " + AccountSid + " filtered by date created";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyConferenceRecordingsListExists(AccountSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify ConferenceRecordingsList with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("ConferenceRecordingsList exists");
          }
        }
      }
      return pvg.fail("Expected ConferenceRecordingsList to exist but it does not");
    }
  });
}

function verifyConferenceRecordingsListDoesNotExist(AccountSid, ConferenceSid, DateCreated, DateCreated<, DateCreated>, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify ConferenceRecordingsList with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected ConferenceRecordingsList to not exist but it does");
          }
        }
      }
      return pvg.success("ConferenceRecordingsList does not exist");
    }
  });
}

// ---- Entity: incoming-phone-number ----

function createIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers.json";
  var description = "Create incoming-phone-number with phone number " + PhoneNumber + " for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Delete incoming-phone-number " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Update incoming-phone-number " + Sid + " for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function getIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Get incoming-phone-number " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listIncomingPhoneNumbers(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers.json";
  var description = "List incoming-phone-numbers for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  listIncomingPhoneNumbers(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid);
}

function verifyIncomingPhoneNumberExists(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers.json";
  var description = "Verify IncomingPhoneNumber with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("IncomingPhoneNumber exists");
          }
        }
      }
      return pvg.fail("Expected IncomingPhoneNumber to exist but it does not");
    }
  });
}

function verifyIncomingPhoneNumberDoesNotExist(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers.json";
  var description = "Verify IncomingPhoneNumber with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected IncomingPhoneNumber to not exist but it does");
          }
        }
      }
      return pvg.success("IncomingPhoneNumber does not exist");
    }
  });
}

function tryToDeleteANonExistingIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing IncomingPhoneNumber";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var expectedDesc = "Create incoming-phone-number with phone number " + PhoneNumber + " for account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyIncomingPhoneNumberAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ incoming\-phone\-number\ with\ phone\ number\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ incoming\-phone\-number\ with\ phone\ number\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["PhoneNumber", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIncomingPhoneNumberAddedEvent(keyVal) {
  return bp.EventSet("AddIncomingPhoneNumber:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyIncomingPhoneNumberAdded() {
  return bp.EventSet("matchAnyIncomingPhoneNumberAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create incoming-phone-number") > -1;
  });
}

function waitForIncomingPhoneNumberAdded(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var expectedDesc = "Create incoming-phone-number with phone number " + PhoneNumber + " for account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIncomingPhoneNumber(AccountSid, Beta, FriendlyName, Origin, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var expectedDesc = "Delete incoming-phone-number " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedIncomingPhoneNumber", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIncomingPhoneNumberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ incoming\-phone\-number\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ incoming\-phone\-number\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: incomingPhoneNumberAssignedAddOn ----

function fetchIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + Sid + ".json";
  var description = "Fetch an instance of an Add-on installation currently assigned to this Number with Sid " + Sid + " for Account " + AccountSid + " and Phone Number " + ResourceSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + Sid + ".json";
  var description = "Remove the assignment of an Add-on installation with Sid " + Sid + " from the Number " + ResourceSid + " for Account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function listIncomingPhoneNumberAssignedAddOns(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "Retrieve a list of Add-on installations currently assigned to Number " + ResourceSid + " for Account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "Assign an Add-on installation with InstalledAddOnSid " + InstalledAddOnSid + " to Number " + ResourceSid + " for Account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "InstalledAddOnSid": String(InstalledAddOnSid),
    "ResourceSid": String(ResourceSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , ResourceSid: String(ResourceSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  createIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid);
}

function verifyIncomingPhoneNumberAssignedAddOnExists(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "Verify IncomingPhoneNumberAssignedAddOn with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("IncomingPhoneNumberAssignedAddOn exists");
          }
        }
      }
      return pvg.fail("Expected IncomingPhoneNumberAssignedAddOn to exist but it does not");
    }
  });
}

function verifyIncomingPhoneNumberAssignedAddOnDoesNotExist(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns.json";
  var description = "Verify IncomingPhoneNumberAssignedAddOn with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected IncomingPhoneNumberAssignedAddOn to not exist but it does");
          }
        }
      }
      return pvg.success("IncomingPhoneNumberAssignedAddOn does not exist");
    }
  });
}

function tryToDeleteANonExistingIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing IncomingPhoneNumberAssignedAddOn";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var expectedDesc = "Assign an Add-on installation with InstalledAddOnSid " + InstalledAddOnSid + " to Number " + ResourceSid + " for Account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyIncomingPhoneNumberAssignedAddOnAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Assign\ an\ Add\-on\ installation\ with\ InstalledAddOnSid\ (.+)\ to\ Number\ (.+)\ for\ Account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Assign\ an\ Add\-on\ installation\ with\ InstalledAddOnSid\ (.+)\ to\ Number\ (.+)\ for\ Account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["InstalledAddOnSid", "ResourceSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIncomingPhoneNumberAssignedAddOnAddedEvent(keyVal) {
  return bp.EventSet("AddIncomingPhoneNumberAssignedAddOn:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyIncomingPhoneNumberAssignedAddOnAdded() {
  return bp.EventSet("matchAnyIncomingPhoneNumberAssignedAddOnAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create incomingPhoneNumberAssignedAddOn") > -1;
  });
}

function waitForIncomingPhoneNumberAssignedAddOnAdded(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var expectedDesc = "Assign an Add-on installation with InstalledAddOnSid " + InstalledAddOnSid + " to Number " + ResourceSid + " for Account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIncomingPhoneNumberAssignedAddOn(AccountSid, InstalledAddOnSid, ResourceSid, Sid) {
  var expectedDesc = "Remove the assignment of an Add-on installation with Sid " + Sid + " from the Number " + ResourceSid + " for Account " + AccountSid;
  return bp.EventSet("matchDeletedIncomingPhoneNumberAssignedAddOn", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIncomingPhoneNumberAssignedAddOnDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ the\ assignment\ of\ an\ Add\-on\ installation\ with\ Sid\ (.+)\ from\ the\ Number\ (.+)\ for\ Account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ the\ assignment\ of\ an\ Add\-on\ installation\ with\ Sid\ (.+)\ from\ the\ Number\ (.+)\ for\ Account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "ResourceSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: incomingPhoneNumberAssignedAddOnExtension ----

function fetchIncomingPhoneNumberAssignedAddOnExtension(AccountSid, AssignedAddOnSid, Page, PageSize, PageToken, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + AssignedAddOnSid + "/Extensions/" + Sid + ".json";
  var description = "Fetch an instance of an Extension for the Assigned Add-on with Sid " + Sid + " under AssignedAddOnSid " + AssignedAddOnSid + " for PhoneNumber " + ResourceSid + " in Account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listIncomingPhoneNumberAssignedAddOnExtensions(AccountSid, AssignedAddOnSid, Page, PageSize, PageToken, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/IncomingPhoneNumbers/" + ResourceSid + "/AssignedAddOns/" + AssignedAddOnSid + "/Extensions.json";
  var description = "Retrieve a list of Extensions for the Assigned Add-on under AssignedAddOnSid " + AssignedAddOnSid + " for PhoneNumber " + ResourceSid + " in Account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyIncomingPhoneNumberAssignedAddOnExtensionExists(AccountSid, AssignedAddOnSid, Page, PageSize, PageToken, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify IncomingPhoneNumberAssignedAddOnExtension with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("IncomingPhoneNumberAssignedAddOnExtension exists");
          }
        }
      }
      return pvg.fail("Expected IncomingPhoneNumberAssignedAddOnExtension to exist but it does not");
    }
  });
}

function verifyIncomingPhoneNumberAssignedAddOnExtensionDoesNotExist(AccountSid, AssignedAddOnSid, Page, PageSize, PageToken, ResourceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify IncomingPhoneNumberAssignedAddOnExtension with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected IncomingPhoneNumberAssignedAddOnExtension to not exist but it does");
          }
        }
      }
      return pvg.success("IncomingPhoneNumberAssignedAddOnExtension does not exist");
    }
  });
}

// ---- Entity: key ----

function createKey(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys.json";
  var description = "Create key for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function fetchKey(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Fetch key " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateKey(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Update key " + Sid + " for account " + AccountSid + " with FriendlyName {FriendlyName}";
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteKey(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Delete key " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function listKeys(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys.json";
  var description = "List keys for account " + AccountSid + " with PageSize " + PageSize + ", Page " + Page + ", PageToken " + PageToken;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingKey(AccountSid, Page, PageSize, PageToken, Sid) {
  listKeys(AccountSid, Page, PageSize, PageToken, Sid);
}

function verifyKeyExists(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys.json";
  var description = "Verify Key with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Key exists");
          }
        }
      }
      return pvg.fail("Expected Key to exist but it does not");
    }
  });
}

function verifyKeyDoesNotExist(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys.json";
  var description = "Verify Key with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Key to not exist but it does");
          }
        }
      }
      return pvg.success("Key does not exist");
    }
  });
}

function tryToDeleteANonExistingKey(AccountSid, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Keys/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing Key";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedKey(AccountSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create key for account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ key\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ key\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getKeyAddedEvent(keyVal) {
  return bp.EventSet("AddKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyKeyAdded() {
  return bp.EventSet("matchAnyKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create key") > -1;
  });
}

function waitForKeyAdded(AccountSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Create key for account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedKey(AccountSid, Page, PageSize, PageToken, Sid) {
  var expectedDesc = "Delete key " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ key\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ key\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: member ----

function fetchMember(AccountSid, CallSid, Page, PageSize, PageToken, QueueSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members/" + CallSid + ".json";
  var description = "Fetch member with CallSid " + CallSid + " from queue " + QueueSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateMember(AccountSid, CallSid, Page, PageSize, PageToken, QueueSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members/" + CallSid + ".json";
  var description = "Update member with CallSid " + CallSid + " in queue " + QueueSid + " of account " + AccountSid + " with Url {Url} and Method {Method}";
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
    "QueueSid": String(QueueSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , QueueSid: String(QueueSid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function listMembers(AccountSid, CallSid, Page, PageSize, PageToken, QueueSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Queues/" + QueueSid + "/Members.json";
  var description = "List members in queue " + QueueSid + " of account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyMemberExists(AccountSid, CallSid, Page, PageSize, PageToken, QueueSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Member with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Member exists");
          }
        }
      }
      return pvg.fail("Expected Member to exist but it does not");
    }
  });
}

function verifyMemberDoesNotExist(AccountSid, CallSid, Page, PageSize, PageToken, QueueSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Member with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Member to not exist but it does");
          }
        }
      }
      return pvg.success("Member does not exist");
    }
  });
}

// ---- Entity: message ----

function createMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages.json";
  var description = "Send a message to " + To + " from " + From;
  var body = {
    "AccountSid": String(AccountSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Delete message " + Sid + " from account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Update message " + Sid + " from account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function fetchMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Fetch message " + Sid + " from account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listMessages(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages.json";
  var description = "Retrieve list of messages for account " + AccountSid + " filtered by To " + To + " and From " + From;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  listMessages(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To);
}

function verifyMessageExists(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages.json";
  var description = "Verify Message with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Message exists");
          }
        }
      }
      return pvg.fail("Expected Message to exist but it does not");
    }
  });
}

function verifyMessageDoesNotExist(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages.json";
  var description = "Verify Message with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Message to not exist but it does");
          }
        }
      }
      return pvg.success("Message does not exist");
    }
  });
}

function tryToDeleteANonExistingMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Messages/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing Message";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var expectedDesc = "Send a message to " + To + " from " + From;
  return matchSuccess(expectedDesc);
}

function waitForAnyMessageAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Send\ a\ message\ to\ (.+)\ from\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Send\ a\ message\ to\ (.+)\ from\ (.+)$/);
  var captures = m.slice(1);
  var names = ["To", "From"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMessageAddedEvent(keyVal) {
  return bp.EventSet("AddMessage:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyMessageAdded() {
  return bp.EventSet("matchAnyMessageAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create message") > -1;
  });
}

function waitForMessageAdded(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var expectedDesc = "Send a message to " + To + " from " + From;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedMessage(AccountSid, DateSent, DateSent<, DateSent>, From, Page, PageSize, PageToken, Sid, To) {
  var expectedDesc = "Delete message " + Sid + " from account " + AccountSid;
  return bp.EventSet("matchDeletedMessage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMessageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ message\ (.+)\ from\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ message\ (.+)\ from\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: notification ----

function fetchNotification(AccountSid, Log, MessageDate, MessageDate<, MessageDate>, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Notifications/" + Sid + ".json";
  var description = "Fetch notification " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listNotifications(AccountSid, Log, MessageDate, MessageDate<, MessageDate>, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Notifications.json";
  var description = "List notifications for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyNotificationExists(AccountSid, Log, MessageDate, MessageDate<, MessageDate>, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Notification with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Notification exists");
          }
        }
      }
      return pvg.fail("Expected Notification to exist but it does not");
    }
  });
}

function verifyNotificationDoesNotExist(AccountSid, Log, MessageDate, MessageDate<, MessageDate>, Page, PageSize, PageToken, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify Notification with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Notification to not exist but it does");
          }
        }
      }
      return pvg.success("Notification does not exist");
    }
  });
}

// ---- Entity: outgoing-caller-id ----

function fetchOutgoingCallerId(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Fetch outgoing-caller-id with Sid " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateOutgoingCallerId(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Update outgoing-caller-id with Sid " + Sid + " for account " + AccountSid + " setting FriendlyName " + FriendlyName;
  var body = {
    "AccountSid": String(AccountSid),
    "FriendlyName": String(FriendlyName),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteOutgoingCallerId(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Delete outgoing-caller-id with Sid " + Sid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function listOutgoingCallerIds(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds.json";
  var description = "List outgoing-caller-ids for account " + AccountSid + " filtered by PhoneNumber " + PhoneNumber + " and FriendlyName " + FriendlyName;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyOutgoingCallerIdExists(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify OutgoingCallerId with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("OutgoingCallerId exists");
          }
        }
      }
      return pvg.fail("Expected OutgoingCallerId to exist but it does not");
    }
  });
}

function verifyOutgoingCallerIdDoesNotExist(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify OutgoingCallerId with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected OutgoingCallerId to not exist but it does");
          }
        }
      }
      return pvg.success("OutgoingCallerId does not exist");
    }
  });
}

function tryToDeleteANonExistingOutgoingCallerId(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/OutgoingCallerIds/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing OutgoingCallerId";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedOutgoingCallerId(AccountSid, FriendlyName, Page, PageSize, PageToken, PhoneNumber, Sid) {
  var expectedDesc = "Delete outgoing-caller-id with Sid " + Sid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedOutgoingCallerId", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOutgoingCallerIdDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ outgoing\-caller\-id\ with\ Sid\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ outgoing\-caller\-id\ with\ Sid\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: participant ----

function createParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "Create participant from {From} to {To} in conference " + ConferenceSid + " under account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "ConferenceSid": String(ConferenceSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , ConferenceSid: String(ConferenceSid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function fetchParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Fetch participant " + CallSid + " in conference " + ConferenceSid + " under account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Update participant " + CallSid + " in conference " + ConferenceSid + " under account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
    "ConferenceSid": String(ConferenceSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , ConferenceSid: String(ConferenceSid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Delete participant " + CallSid + " from conference " + ConferenceSid + " under account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function listParticipants(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "List participants in conference " + ConferenceSid + " under account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  listParticipants(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken);
}

function verifyParticipantExists(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "Verify Participant with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Participant exists");
          }
        }
      }
      return pvg.fail("Expected Participant to exist but it does not");
    }
  });
}

function verifyParticipantDoesNotExist(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants.json";
  var description = "Verify Participant with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Participant to not exist but it does");
          }
        }
      }
      return pvg.success("Participant does not exist");
    }
  });
}

function tryToDeleteANonExistingParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Conferences/" + ConferenceSid + "/Participants/" + CallSid + ".json";
  var description = "Verify we cannot delete non-existing Participant";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var expectedDesc = "Create participant from {From} to {To} in conference " + ConferenceSid + " under account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnyParticipantAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ participant\ from\ (.+)\ to\ (.+)\ in\ conference\ (.+)\ under\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ participant\ from\ (.+)\ to\ (.+)\ in\ conference\ (.+)\ under\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["From", "To", "ConferenceSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getParticipantAddedEvent(keyVal) {
  return bp.EventSet("AddParticipant:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyParticipantAdded() {
  return bp.EventSet("matchAnyParticipantAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create participant") > -1;
  });
}

function waitForParticipantAdded(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var expectedDesc = "Create participant from {From} to {To} in conference " + ConferenceSid + " under account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedParticipant(AccountSid, CallSid, Coaching, ConferenceSid, Hold, Muted, Page, PageSize, PageToken) {
  var expectedDesc = "Delete participant " + CallSid + " from conference " + ConferenceSid + " under account " + AccountSid;
  return bp.EventSet("matchDeletedParticipant", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyParticipantDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ participant\ (.+)\ from\ conference\ (.+)\ under\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ participant\ (.+)\ from\ conference\ (.+)\ under\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["CallSid", "ConferenceSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: payments ----

function createPayments(AccountSid, CallSid, IdempotencyKey, Sid, StatusCallback) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments.json";
  var description = "Create payments session for call " + CallSid + " in account " + AccountSid + " with IdempotencyKey " + IdempotencyKey + " and StatusCallback " + StatusCallback;
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
    "IdempotencyKey": String(IdempotencyKey),
    "StatusCallback": String(StatusCallback),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function updatePayments(AccountSid, CallSid, IdempotencyKey, Sid, StatusCallback) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments/" + Sid + ".json";
  var description = "Update payments session " + Sid + " for call " + CallSid + " in account " + AccountSid + " with IdempotencyKey " + IdempotencyKey + " and StatusCallback " + StatusCallback;
  var body = {
    "AccountSid": String(AccountSid),
    "CallSid": String(CallSid),
    "IdempotencyKey": String(IdempotencyKey),
    "Sid": String(Sid),
    "StatusCallback": String(StatusCallback),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CallSid: String(CallSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function tryToAddExistingPayments(AccountSid, CallSid, IdempotencyKey, Sid, StatusCallback) {
  updatePayments(AccountSid, CallSid, IdempotencyKey, Sid, StatusCallback);
}

function verifyPaymentsExists(AccountSid, CallSid, IdempotencyKey, Sid, StatusCallback) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments.json";
  var description = "Verify Payments with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("Payments exists");
          }
        }
      }
      return pvg.fail("Expected Payments to exist but it does not");
    }
  });
}

function verifyPaymentsDoesNotExist(AccountSid, CallSid, IdempotencyKey, Sid, StatusCallback) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Calls/" + CallSid + "/Payments.json";
  var description = "Verify Payments with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected Payments to not exist but it does");
          }
        }
      }
      return pvg.success("Payments does not exist");
    }
  });
}

function matchAddedPayments(AccountSid, CallSid, IdempotencyKey, Sid, StatusCallback) {
  var expectedDesc = "Create payments session for call " + CallSid + " in account " + AccountSid + " with IdempotencyKey " + IdempotencyKey + " and StatusCallback " + StatusCallback;
  return matchSuccess(expectedDesc);
}

function waitForAnyPaymentsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ payments\ session\ for\ call\ (.+)\ in\ account\ (.+)\ with\ IdempotencyKey\ (.+)\ and\ StatusCallback\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ payments\ session\ for\ call\ (.+)\ in\ account\ (.+)\ with\ IdempotencyKey\ (.+)\ and\ StatusCallback\ (.+)$/);
  var captures = m.slice(1);
  var names = ["CallSid", "AccountSid", "IdempotencyKey", "StatusCallback"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPaymentsAddedEvent(keyVal) {
  return bp.EventSet("AddPayments:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnyPaymentsAdded() {
  return bp.EventSet("matchAnyPaymentsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create payments") > -1;
  });
}

function waitForPaymentsAdded(AccountSid, CallSid, IdempotencyKey, Sid, StatusCallback) {
  var expectedDesc = "Create payments session for call " + CallSid + " in account " + AccountSid + " with IdempotencyKey " + IdempotencyKey + " and StatusCallback " + StatusCallback;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: recording add-on result ----

function fetchRecordingAddOnResult(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Fetch an instance of a recording add-on result with Sid " + Sid + " for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteRecordingAddOnResult(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Delete recording add-on result with Sid " + Sid + " for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function listRecordingAddOnResults(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults.json";
  var description = "List recording add-on results for recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyRecordingAddOnResultExists(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify RecordingAddOnResult with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("RecordingAddOnResult exists");
          }
        }
      }
      return pvg.fail("Expected RecordingAddOnResult to exist but it does not");
    }
  });
}

function verifyRecordingAddOnResultDoesNotExist(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify RecordingAddOnResult with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected RecordingAddOnResult to not exist but it does");
          }
        }
      }
      return pvg.success("RecordingAddOnResult does not exist");
    }
  });
}

function tryToDeleteANonExistingRecordingAddOnResult(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing RecordingAddOnResult";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedRecordingAddOnResult(AccountSid, Page, PageSize, PageToken, ReferenceSid, Sid) {
  var expectedDesc = "Delete recording add-on result with Sid " + Sid + " for recording " + ReferenceSid + " in account " + AccountSid;
  return bp.EventSet("matchDeletedRecordingAddOnResult", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRecordingAddOnResultDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ recording\ add\-on\ result\ with\ Sid\ (.+)\ for\ recording\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ recording\ add\-on\ result\ with\ Sid\ (.+)\ for\ recording\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "ReferenceSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: recordingAddOnResultPayload ----

function fetchRecordingAddOnResultPayload(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Fetch recording add-on result payload " + Sid + " for AddOnResult " + AddOnResultSid + " of recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteRecordingAddOnResultPayload(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Delete recording add-on result payload " + Sid + " for AddOnResult " + AddOnResultSid + " of recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function verifyRecordingAddOnResultPayloadExists(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify RecordingAddOnResultPayload with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("RecordingAddOnResultPayload exists");
          }
        }
      }
      return pvg.fail("Expected RecordingAddOnResultPayload to exist but it does not");
    }
  });
}

function verifyRecordingAddOnResultPayloadDoesNotExist(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify RecordingAddOnResultPayload with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected RecordingAddOnResultPayload to not exist but it does");
          }
        }
      }
      return pvg.success("RecordingAddOnResultPayload does not exist");
    }
  });
}

function tryToDeleteANonExistingRecordingAddOnResultPayload(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing RecordingAddOnResultPayload";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedRecordingAddOnResultPayload(AccountSid, AddOnResultSid, ReferenceSid, Sid) {
  var expectedDesc = "Delete recording add-on result payload " + Sid + " for AddOnResult " + AddOnResultSid + " of recording " + ReferenceSid + " in account " + AccountSid;
  return bp.EventSet("matchDeletedRecordingAddOnResultPayload", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRecordingAddOnResultPayloadDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ recording\ add\-on\ result\ payload\ (.+)\ for\ AddOnResult\ (.+)\ of\ recording\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ recording\ add\-on\ result\ payload\ (.+)\ for\ AddOnResult\ (.+)\ of\ recording\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "AddOnResultSid", "ReferenceSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: recordingAddOnResultPayloadList ----

function listRecordingAddOnResultPayload(AccountSid, AddOnResultSid, Page, PageSize, PageToken, ReferenceSid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + ReferenceSid + "/AddOnResults/" + AddOnResultSid + "/Payloads.json";
  var description = "List recording add-on result payloads for AddOnResult " + AddOnResultSid + " of recording " + ReferenceSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyRecordingAddOnResultPayloadListExists(AccountSid, AddOnResultSid, Page, PageSize, PageToken, ReferenceSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify RecordingAddOnResultPayloadList with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("RecordingAddOnResultPayloadList exists");
          }
        }
      }
      return pvg.fail("Expected RecordingAddOnResultPayloadList to exist but it does not");
    }
  });
}

function verifyRecordingAddOnResultPayloadListDoesNotExist(AccountSid, AddOnResultSid, Page, PageSize, PageToken, ReferenceSid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify RecordingAddOnResultPayloadList with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected RecordingAddOnResultPayloadList to not exist but it does");
          }
        }
      }
      return pvg.success("RecordingAddOnResultPayloadList does not exist");
    }
  });
}

// ---- Entity: recording transcription ----

function fetchRecordingTranscription(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions/" + Sid + ".json";
  var description = "Fetch recording transcription " + Sid + " for recording " + RecordingSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteRecordingTranscription(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions/" + Sid + ".json";
  var description = "Delete recording transcription " + Sid + " for recording " + RecordingSid + " in account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function listRecordingTranscriptions(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions.json";
  var description = "List recording transcriptions for recording " + RecordingSid + " in account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyRecordingTranscriptionExists(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify RecordingTranscription with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("RecordingTranscription exists");
          }
        }
      }
      return pvg.fail("Expected RecordingTranscription to exist but it does not");
    }
  });
}

function verifyRecordingTranscriptionDoesNotExist(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify RecordingTranscription with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected RecordingTranscription to not exist but it does");
          }
        }
      }
      return pvg.success("RecordingTranscription does not exist");
    }
  });
}

function tryToDeleteANonExistingRecordingTranscription(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/Recordings/" + RecordingSid + "/Transcriptions/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing RecordingTranscription";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedRecordingTranscription(AccountSid, Page, PageSize, PageToken, RecordingSid, Sid) {
  var expectedDesc = "Delete recording transcription " + Sid + " for recording " + RecordingSid + " in account " + AccountSid;
  return bp.EventSet("matchDeletedRecordingTranscription", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRecordingTranscriptionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ recording\ transcription\ (.+)\ for\ recording\ (.+)\ in\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ recording\ transcription\ (.+)\ for\ recording\ (.+)\ in\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "RecordingSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: sip credential ----

function createSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials.json";
  var description = "Create sip credential {Username} in credential list " + CredentialListSid + " for account " + AccountSid;
  var body = {
    "AccountSid": String(AccountSid),
    "CredentialListSid": String(CredentialListSid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CredentialListSid: String(CredentialListSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function deleteSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Delete sip credential " + Sid + " in credential list " + CredentialListSid + " for account " + AccountSid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Update sip credential " + Sid + " in credential list " + CredentialListSid + " for account " + AccountSid + " with new password";
  var body = {
    "AccountSid": String(AccountSid),
    "CredentialListSid": String(CredentialListSid),
    "Sid": String(Sid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      AccountSid: String(AccountSid)
      , CredentialListSid: String(CredentialListSid)
      , Sid: String(Sid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { AccountSid: String(AccountSid) }) });
}

function fetchSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Fetch sip credential " + Sid + " in credential list " + CredentialListSid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listSipCredentials(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials.json";
  var description = "List sip credentials in credential list " + CredentialListSid + " for account " + AccountSid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingSipCredential(AccountSid, CredentialListSid, Sid) {
  listSipCredentials(AccountSid, CredentialListSid, Sid);
}

function verifySipCredentialExists(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials.json";
  var description = "Verify SipCredential with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("SipCredential exists");
          }
        }
      }
      return pvg.fail("Expected SipCredential to exist but it does not");
    }
  });
}

function verifySipCredentialDoesNotExist(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials.json";
  var description = "Verify SipCredential with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected SipCredential to not exist but it does");
          }
        }
      }
      return pvg.success("SipCredential does not exist");
    }
  });
}

function tryToDeleteANonExistingSipCredential(AccountSid, CredentialListSid, Sid) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists/" + CredentialListSid + "/Credentials/" + Sid + ".json";
  var description = "Verify we cannot delete non-existing SipCredential";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedSipCredential(AccountSid, CredentialListSid, Sid) {
  var expectedDesc = "Create sip credential {Username} in credential list " + CredentialListSid + " for account " + AccountSid;
  return matchSuccess(expectedDesc);
}

function waitForAnySipCredentialAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ sip\ credential\ (.+)\ in\ credential\ list\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ sip\ credential\ (.+)\ in\ credential\ list\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Username", "CredentialListSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getSipCredentialAddedEvent(keyVal) {
  return bp.EventSet("AddSipCredential:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.AccountSid) === String(keyVal);
  });
}

function matchAnySipCredentialAdded() {
  return bp.EventSet("matchAnySipCredentialAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.AccountSid !== undefined && e.name.indexOf("Create sip credential") > -1;
  });
}

function waitForSipCredentialAdded(AccountSid, CredentialListSid, Sid) {
  var expectedDesc = "Create sip credential {Username} in credential list " + CredentialListSid + " for account " + AccountSid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedSipCredential(AccountSid, CredentialListSid, Sid) {
  var expectedDesc = "Delete sip credential " + Sid + " in credential list " + CredentialListSid + " for account " + AccountSid;
  return bp.EventSet("matchDeletedSipCredential", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySipCredentialDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ sip\ credential\ (.+)\ in\ credential\ list\ (.+)\ for\ account\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ sip\ credential\ (.+)\ in\ credential\ list\ (.+)\ for\ account\ (.+)$/);
  var captures = m.slice(1);
  var names = ["Sid", "CredentialListSid", "AccountSid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: credential lists ----

function listCredentialLists(AccountSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts/" + AccountSid + "/SIP/CredentialLists.json";
  var description = "Get all credential lists for account " + AccountSid + " with page size " + PageSize + ", page " + Page + ", and page token " + PageToken;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyCredentialListsExists(AccountSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify CredentialLists with AccountSid " + AccountSid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.success("CredentialLists exists");
          }
        }
      }
      return pvg.fail("Expected CredentialLists to exist but it does not");
    }
  });
}

function verifyCredentialListsDoesNotExist(AccountSid, Page, PageSize, PageToken) {
  var url = "/2010-04-01/Accounts";
  var description = "Verify CredentialLists with AccountSid " + AccountSid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].AccountSid) === String(AccountSid)) {
            return pvg.fail("Expected CredentialLists to not exist but it does");
          }
        }
      }
      return pvg.success("CredentialLists does not exist");
    }
  });
}
