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

// ---- Entity: user ----

function createUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var description = "Create user with email " + email;
  var body = {
    "avatar": String(avatar),
    "description": String(description),
    "email": String(email),
    "first_name": String(first_name),
    "id": String(id),
    "language": String(language),
    "last_access": String(last_access),
    "last_name": String(last_name),
    "last_page": String(last_page),
    "location": String(location),
    "password": String(password),
    "role": String(role),
    "status": String(status),
    "tags": String(tags),
    "tfa_secret": String(tfa_secret),
    "theme": String(theme),
    "title": String(title),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users/" + id;
  var description = "Delete user with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users/" + id;
  var description = "Update user with id " + id;
  var body = {
    "avatar": String(avatar),
    "description": String(description),
    "email": String(email),
    "first_name": String(first_name),
    "id": String(id),
    "language": String(language),
    "last_access": String(last_access),
    "last_name": String(last_name),
    "last_page": String(last_page),
    "location": String(location),
    "password": String(password),
    "role": String(role),
    "status": String(status),
    "tags": String(tags),
    "tfa_secret": String(tfa_secret),
    "theme": String(theme),
    "title": String(title),
    "token": String(token),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users/" + id;
  var description = "Retrieve user with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  getUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
}

function verifyUserExists(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var description = "Verify User with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("User exists");
          }
        }
      }
      return pvg.fail("Expected User to exist but it does not");
    }
  });
}

function verifyUserDoesNotExist(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var description = "Verify User with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected User to not exist but it does");
          }
        }
      }
      return pvg.success("User does not exist");
    }
  });
}

function tryToDeleteANonExistingUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users/" + id;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var expectedDesc = "Create user with email " + email;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ with\ email\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ with\ email\ (.+)$/);
  var captures = m.slice(1);
  var names = ["email"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserAddedEvent(keyVal) {
  return bp.EventSet("AddUser:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserAdded() {
  return bp.EventSet("matchAnyUserAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create user") > -1;
  });
}

function waitForUserAdded(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var expectedDesc = "Create user with email " + email;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var expectedDesc = "Delete user with id " + id;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: auth login ----

function login(email, mode, otp, password) {
  var url = "/auth/login";
  var description = "Retrieve a Temporary Access Token for " + email;
  var body = {
    "email": String(email),
    "mode": String(mode),
    "otp": String(otp),
    "password": String(password),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingAuthLogin(email, mode, otp, password) {
  login(email, mode, otp, password);
}

function verifyAuthLoginExists(email, mode, otp, password) {
  var url = "/auth/login";
  var description = "Verify AuthLogin exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].email) === String(email) && String(items[i].mode) === String(mode) && String(items[i].otp) === String(otp) && String(items[i].password) === String(password)) {
            return pvg.success("AuthLogin exists");
          }
        }
      }
      return pvg.fail("Expected AuthLogin to exist but it does not");
    }
  });
}

function verifyAuthLoginDoesNotExist(email, mode, otp, password) {
  var url = "/auth/login";
  var description = "Verify AuthLogin does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].email) === String(email) && String(items[i].mode) === String(mode) && String(items[i].otp) === String(otp) && String(items[i].password) === String(password)) {
            return pvg.fail("Expected AuthLogin to not exist but it does");
          }
        }
      }
      return pvg.success("AuthLogin does not exist");
    }
  });
}

function matchAddedAuthLogin(email, mode, otp, password) {
  var expectedDesc = "Retrieve a Temporary Access Token for " + email;
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthLoginAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Retrieve\ a\ Temporary\ Access\ Token\ for\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Retrieve\ a\ Temporary\ Access\ Token\ for\ (.+)$/);
  var captures = m.slice(1);
  var names = ["email"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthLoginAddedEvent(keyVal) {
  return bp.EventSet("AddAuthLogin:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAuthLoginAdded() {
  return bp.EventSet("matchAnyAuthLoginAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create auth login") > -1;
  });
}

function waitForAuthLoginAdded(email, mode, otp, password) {
  var expectedDesc = "Retrieve a Temporary Access Token for " + email;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: auth refresh ----

function refresh(mode, refresh_token) {
  var url = "/auth/refresh";
  var description = "Refresh Token";
  var body = {
    "mode": String(mode),
    "refresh_token": String(refresh_token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingAuthRefresh(mode, refresh_token) {
  refresh(mode, refresh_token);
}

function verifyAuthRefreshExists(mode, refresh_token) {
  var url = "/auth/refresh";
  var description = "Verify AuthRefresh exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].mode) === String(mode) && String(items[i].refresh_token) === String(refresh_token)) {
            return pvg.success("AuthRefresh exists");
          }
        }
      }
      return pvg.fail("Expected AuthRefresh to exist but it does not");
    }
  });
}

function verifyAuthRefreshDoesNotExist(mode, refresh_token) {
  var url = "/auth/refresh";
  var description = "Verify AuthRefresh does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].mode) === String(mode) && String(items[i].refresh_token) === String(refresh_token)) {
            return pvg.fail("Expected AuthRefresh to not exist but it does");
          }
        }
      }
      return pvg.success("AuthRefresh does not exist");
    }
  });
}

function matchAddedAuthRefresh(mode, refresh_token) {
  var expectedDesc = "Refresh Token";
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthRefreshAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Refresh\ Token$/));
  var m = ev.data.parameters.description.match(/^Refresh\ Token$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthRefreshAddedEvent(keyVal) {
  return bp.EventSet("AddAuthRefresh:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAuthRefreshAdded() {
  return bp.EventSet("matchAnyAuthRefreshAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create auth refresh") > -1;
  });
}

function waitForAuthRefreshAdded(mode, refresh_token) {
  var expectedDesc = "Refresh Token";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: auth logout ----

function logout(mode, refresh_token) {
  var url = "/auth/logout";
  var description = "Log Out";
  var body = {
    "mode": String(mode),
    "refresh_token": String(refresh_token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingAuthLogout(mode, refresh_token) {
  logout(mode, refresh_token);
}

function verifyAuthLogoutExists(mode, refresh_token) {
  var url = "/auth/logout";
  var description = "Verify AuthLogout exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].mode) === String(mode) && String(items[i].refresh_token) === String(refresh_token)) {
            return pvg.success("AuthLogout exists");
          }
        }
      }
      return pvg.fail("Expected AuthLogout to exist but it does not");
    }
  });
}

function verifyAuthLogoutDoesNotExist(mode, refresh_token) {
  var url = "/auth/logout";
  var description = "Verify AuthLogout does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].mode) === String(mode) && String(items[i].refresh_token) === String(refresh_token)) {
            return pvg.fail("Expected AuthLogout to not exist but it does");
          }
        }
      }
      return pvg.success("AuthLogout does not exist");
    }
  });
}

function matchAddedAuthLogout(mode, refresh_token) {
  var expectedDesc = "Log Out";
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthLogoutAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Log\ Out$/));
  var m = ev.data.parameters.description.match(/^Log\ Out$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthLogoutAddedEvent(keyVal) {
  return bp.EventSet("AddAuthLogout:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAuthLogoutAdded() {
  return bp.EventSet("matchAnyAuthLogoutAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create auth logout") > -1;
  });
}

function waitForAuthLogoutAdded(mode, refresh_token) {
  var expectedDesc = "Log Out";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: auth password request ----

function passwordRequest(email) {
  var url = "/auth/password/request";
  var description = "Request a Password Reset for " + email;
  var body = {
    "email": String(email),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingAuthPasswordRequest(email) {
  passwordRequest(email);
}

function verifyAuthPasswordRequestExists(email) {
  var url = "/auth/password/request";
  var description = "Verify AuthPasswordRequest exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].email) === String(email)) {
            return pvg.success("AuthPasswordRequest exists");
          }
        }
      }
      return pvg.fail("Expected AuthPasswordRequest to exist but it does not");
    }
  });
}

function verifyAuthPasswordRequestDoesNotExist(email) {
  var url = "/auth/password/request";
  var description = "Verify AuthPasswordRequest does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].email) === String(email)) {
            return pvg.fail("Expected AuthPasswordRequest to not exist but it does");
          }
        }
      }
      return pvg.success("AuthPasswordRequest does not exist");
    }
  });
}

function matchAddedAuthPasswordRequest(email) {
  var expectedDesc = "Request a Password Reset for " + email;
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthPasswordRequestAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Request\ a\ Password\ Reset\ for\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Request\ a\ Password\ Reset\ for\ (.+)$/);
  var captures = m.slice(1);
  var names = ["email"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthPasswordRequestAddedEvent(keyVal) {
  return bp.EventSet("AddAuthPasswordRequest:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAuthPasswordRequestAdded() {
  return bp.EventSet("matchAnyAuthPasswordRequestAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create auth password request") > -1;
  });
}

function waitForAuthPasswordRequestAdded(email) {
  var expectedDesc = "Request a Password Reset for " + email;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: auth password reset ----

function passwordReset(password, token) {
  var url = "/auth/password/reset";
  var description = "Reset a Password with token " + token;
  var body = {
    "password": String(password),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingAuthPasswordReset(password, token) {
  passwordReset(password, token);
}

function verifyAuthPasswordResetExists(password, token) {
  var url = "/auth/password/reset";
  var description = "Verify AuthPasswordReset exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].password) === String(password) && String(items[i].token) === String(token)) {
            return pvg.success("AuthPasswordReset exists");
          }
        }
      }
      return pvg.fail("Expected AuthPasswordReset to exist but it does not");
    }
  });
}

function verifyAuthPasswordResetDoesNotExist(password, token) {
  var url = "/auth/password/reset";
  var description = "Verify AuthPasswordReset does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].password) === String(password) && String(items[i].token) === String(token)) {
            return pvg.fail("Expected AuthPasswordReset to not exist but it does");
          }
        }
      }
      return pvg.success("AuthPasswordReset does not exist");
    }
  });
}

function matchAddedAuthPasswordReset(password, token) {
  var expectedDesc = "Reset a Password with token " + token;
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthPasswordResetAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ a\ Password\ with\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ a\ Password\ with\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthPasswordResetAddedEvent(keyVal) {
  return bp.EventSet("AddAuthPasswordReset:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAuthPasswordResetAdded() {
  return bp.EventSet("matchAnyAuthPasswordResetAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create auth password reset") > -1;
  });
}

function waitForAuthPasswordResetAdded(password, token) {
  var expectedDesc = "Reset a Password with token " + token;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: auth oauth ----

function oauth() {
  var url = "/auth/oauth";
  var description = "List OAuth Providers";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function verifyAuthOAuthExists() {
  var url = "/auth/oauth";
  var description = "Verify AuthOAuth exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("AuthOAuth exists");
          }
        }
      }
      return pvg.fail("Expected AuthOAuth to exist but it does not");
    }
  });
}

function verifyAuthOAuthDoesNotExist() {
  var url = "/auth/oauth";
  var description = "Verify AuthOAuth does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected AuthOAuth to not exist but it does");
          }
        }
      }
      return pvg.success("AuthOAuth does not exist");
    }
  });
}

// ---- Entity: auth oauth provider ----

function oauthProvider(provider) {
  var url = "/auth/oauth/" + provider;
  var description = "Authenticated using OAuth provider " + provider;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function verifyAuthOAuthProviderExists(provider) {
  var url = "/auth/oauth";
  var description = "Verify AuthOAuthProvider with provider " + provider + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].provider) === String(provider)) {
            return pvg.success("AuthOAuthProvider exists");
          }
        }
      }
      return pvg.fail("Expected AuthOAuthProvider to exist but it does not");
    }
  });
}

function verifyAuthOAuthProviderDoesNotExist(provider) {
  var url = "/auth/oauth";
  var description = "Verify AuthOAuthProvider with provider " + provider + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].provider) === String(provider)) {
            return pvg.fail("Expected AuthOAuthProvider to not exist but it does");
          }
        }
      }
      return pvg.success("AuthOAuthProvider does not exist");
    }
  });
}

// ---- Entity: content version ----

function createContentVersion(id) {
  var url = "/versions";
  var description = "Create content version with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteContentVersion(id) {
  var url = "/versions/" + id;
  var description = "Delete content version with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateContentVersion(id) {
  var url = "/versions/" + id;
  var description = "Update content version with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getContentVersion(id) {
  var url = "/versions/" + id;
  var description = "Get content version with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingContentVersion(id) {
  getContentVersion(id);
}

function verifyContentVersionExists(id) {
  var url = "/versions";
  var description = "Verify ContentVersion with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("ContentVersion exists");
          }
        }
      }
      return pvg.fail("Expected ContentVersion to exist but it does not");
    }
  });
}

function verifyContentVersionDoesNotExist(id) {
  var url = "/versions";
  var description = "Verify ContentVersion with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected ContentVersion to not exist but it does");
          }
        }
      }
      return pvg.success("ContentVersion does not exist");
    }
  });
}

function tryToDeleteANonExistingContentVersion(id) {
  var url = "/versions/" + id;
  var description = "Verify we cannot delete non-existing ContentVersion";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedContentVersion(id) {
  var expectedDesc = "Create content version with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyContentVersionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ content\ version\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ content\ version\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getContentVersionAddedEvent(keyVal) {
  return bp.EventSet("AddContentVersion:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyContentVersionAdded() {
  return bp.EventSet("matchAnyContentVersionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create content version") > -1;
  });
}

function waitForContentVersionAdded(id) {
  var expectedDesc = "Create content version with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedContentVersion(id) {
  var expectedDesc = "Delete content version with id " + id;
  return bp.EventSet("matchDeletedContentVersion", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyContentVersionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ content\ version\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ content\ version\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: extension ----

function listExtensions(name) {
  var url = "/extensions";
  var description = "List extensions";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function updateExtensions(name) {
  var url = "/extensions/" + name;
  var description = "Update extension " + name;
  var body = {
    "meta": meta,
    "name": String(name),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { name: String(name) }) });
}

function verifyExtensionExists(name) {
  var url = "/extensions";
  var description = "Verify Extension with name " + name + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].name) === String(name)) {
            return pvg.success("Extension exists");
          }
        }
      }
      return pvg.fail("Expected Extension to exist but it does not");
    }
  });
}

function verifyExtensionDoesNotExist(name) {
  var url = "/extensions";
  var description = "Verify Extension with name " + name + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].name) === String(name)) {
            return pvg.fail("Expected Extension to not exist but it does");
          }
        }
      }
      return pvg.success("Extension does not exist");
    }
  });
}

// ---- Entity: extension bundle ----

function updateExtensionBundle(bundle, name) {
  var url = "/extensions/" + bundle + "/" + name;
  var description = "Update extension bundle " + bundle + " with name " + name;
  var body = {
    "bundle": String(bundle),
    "meta": meta,
    "name": String(name),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      bundle: String(bundle)
      , name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { bundle: String(bundle) }) });
}

// ---- Entity: field ----

function createField(collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection;
  var description = "Create field " + field + " of type " + type + " in collection " + collection;
  var body = {
    "collection": String(collection),
    "datatype": "datatype_" + collection,
    "field": String(field),
    "length": "length_" + collection,
    "meta": meta,
    "schema": schema,
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      collection: String(collection)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { collection: String(collection) }) });
}

function getCollectionField(collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Retrieve field with id " + id + " in collection " + collection;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateField(collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Update field with id " + id + " in collection " + collection;
  var body = {
    "collection": String(collection),
    "field": String(field),
    "id": String(id),
    "meta": meta,
    "schema": schema,
    "type": String(type),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      collection: String(collection)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { collection: String(collection) }) });
}

function deleteField(collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Delete field with id " + id + " in collection " + collection;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingField(collection, field, id, meta, schema, type) {
  deleteField(collection, field, id, meta, schema, type);
}

function verifyFieldExists(collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection;
  var description = "Verify Field with collection " + collection + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].collection) === String(collection)) {
            return pvg.success("Field exists");
          }
        }
      }
      return pvg.fail("Expected Field to exist but it does not");
    }
  });
}

function verifyFieldDoesNotExist(collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection;
  var description = "Verify Field with collection " + collection + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].collection) === String(collection)) {
            return pvg.fail("Expected Field to not exist but it does");
          }
        }
      }
      return pvg.success("Field does not exist");
    }
  });
}

function tryToDeleteANonExistingField(collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Verify we cannot delete non-existing Field";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedField(collection, field, id, meta, schema, type) {
  var expectedDesc = "Create field " + field + " of type " + type + " in collection " + collection;
  return matchSuccess(expectedDesc);
}

function waitForAnyFieldAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ field\ (.+)\ of\ type\ (.+)\ in\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ field\ (.+)\ of\ type\ (.+)\ in\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["field", "type", "collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFieldAddedEvent(keyVal) {
  return bp.EventSet("AddField:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.collection) === String(keyVal);
  });
}

function matchAnyFieldAdded() {
  return bp.EventSet("matchAnyFieldAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.collection !== undefined && e.name.indexOf("Create field") > -1;
  });
}

function waitForFieldAdded(collection, field, id, meta, schema, type) {
  var expectedDesc = "Create field " + field + " of type " + type + " in collection " + collection;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedField(collection, field, id, meta, schema, type) {
  var expectedDesc = "Delete field with id " + id + " in collection " + collection;
  return bp.EventSet("matchDeletedField", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFieldDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ field\ with\ id\ (.+)\ in\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ field\ with\ id\ (.+)\ in\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: permission ----

function createPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Create permission for role " + role + " on collection " + collection;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(delete),
    "explain": String(explain),
    "id": String(id),
    "read": String(read),
    "read_field_blacklist": String(read_field_blacklist),
    "role": String(role),
    "status": String(status),
    "status_blacklist": String(status_blacklist),
    "update": String(update),
    "write_field_blacklist": String(write_field_blacklist),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deletePermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Delete permission with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updatePermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Update permission with id " + id;
  var body = {
    "collection": collection,
    "comment": String(comment),
    "create": String(create),
    "delete": String(delete),
    "explain": String(explain),
    "id": String(id),
    "read": String(read),
    "read_field_blacklist": read_field_blacklist,
    "role": role,
    "status": status,
    "status_blacklist": status_blacklist,
    "update": String(update),
    "write_field_blacklist": write_field_blacklist,
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Get permission with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  getPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
}

function verifyPermissionExists(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Verify Permission with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Permission exists");
          }
        }
      }
      return pvg.fail("Expected Permission to exist but it does not");
    }
  });
}

function verifyPermissionDoesNotExist(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Verify Permission with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Permission to not exist but it does");
          }
        }
      }
      return pvg.success("Permission does not exist");
    }
  });
}

function tryToDeleteANonExistingPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Verify we cannot delete non-existing Permission";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var expectedDesc = "Create permission for role " + role + " on collection " + collection;
  return matchSuccess(expectedDesc);
}

function waitForAnyPermissionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ permission\ for\ role\ (.+)\ on\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ permission\ for\ role\ (.+)\ on\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role", "collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPermissionAddedEvent(keyVal) {
  return bp.EventSet("AddPermission:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPermissionAdded() {
  return bp.EventSet("matchAnyPermissionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create permission") > -1;
  });
}

function waitForPermissionAdded(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var expectedDesc = "Create permission for role " + role + " on collection " + collection;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var expectedDesc = "Delete permission with id " + id;
  return bp.EventSet("matchDeletedPermission", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPermissionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ permission\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ permission\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: activity ----

function getActivity(id) {
  var url = "/activity/" + id;
  var description = "Retrieve an Activity Action with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function getActivities(id) {
  var url = "/activity";
  var description = "List Activity Actions";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function verifyActivityExists(id) {
  var url = "/activity";
  var description = "Verify Activity with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Activity exists");
          }
        }
      }
      return pvg.fail("Expected Activity to exist but it does not");
    }
  });
}

function verifyActivityDoesNotExist(id) {
  var url = "/activity";
  var description = "Verify Activity with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Activity to not exist but it does");
          }
        }
      }
      return pvg.success("Activity does not exist");
    }
  });
}

// ---- Entity: item ----

function createItem(collection, id) {
  var url = "/items/" + collection;
  var description = "Create an item in collection " + collection;
  var body = {
    "collection": String(collection),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
      collection: String(collection)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { collection: String(collection) }) });
}

function deleteItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Delete item " + id + " from collection " + collection;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Update item " + id + " in collection " + collection;
  var body = {
    "collection": String(collection),
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      collection: String(collection)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { collection: String(collection) }) });
}

function getItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Retrieve item " + id + " from collection " + collection;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingItem(collection, id) {
  getItem(collection, id);
}

function verifyItemExists(collection, id) {
  var url = "/items/" + collection;
  var description = "Verify Item with collection " + collection + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].collection) === String(collection)) {
            return pvg.success("Item exists");
          }
        }
      }
      return pvg.fail("Expected Item to exist but it does not");
    }
  });
}

function verifyItemDoesNotExist(collection, id) {
  var url = "/items/" + collection;
  var description = "Verify Item with collection " + collection + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].collection) === String(collection)) {
            return pvg.fail("Expected Item to not exist but it does");
          }
        }
      }
      return pvg.success("Item does not exist");
    }
  });
}

function tryToDeleteANonExistingItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Verify we cannot delete non-existing Item";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedItem(collection, id) {
  var expectedDesc = "Create an item in collection " + collection;
  return matchSuccess(expectedDesc);
}

function waitForAnyItemAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ an\ item\ in\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ an\ item\ in\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getItemAddedEvent(keyVal) {
  return bp.EventSet("AddItem:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.collection) === String(keyVal);
  });
}

function matchAnyItemAdded() {
  return bp.EventSet("matchAnyItemAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.collection !== undefined && e.name.indexOf("Create item") > -1;
  });
}

function waitForItemAdded(collection, id) {
  var expectedDesc = "Create an item in collection " + collection;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedItem(collection, id) {
  var expectedDesc = "Delete item " + id + " from collection " + collection;
  return bp.EventSet("matchDeletedItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyItemDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ item\ (.+)\ from\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ item\ (.+)\ from\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: preset ----

function createPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var url = "/presets";
  var description = "Create preset for collection " + collection;
  var body = {
    "collection": String(collection),
    "filters": String(filters),
    "id": String(id),
    "layout": String(layout),
    "layout_options": String(layout_options),
    "layout_query": String(layout_query),
    "role": String(role),
    "search": String(search),
    "title": String(title),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deletePreset(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var url = "/presets/" + id;
  var description = "Delete preset with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function updatePreset(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var url = "/presets/" + id;
  var description = "Update preset with id " + id + " for collection " + collection;
  var body = {
    "collection": String(collection),
    "filters": String(filters),
    "id": String(id),
    "role": String(role),
    "search_query": "search_query_" + id,
    "title": String(title),
    "translation": translation,
    "view_options": "view_options_" + id,
    "view_query": "view_query_" + id,
    "view_type": "view_type_" + id,
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var url = "/presets/" + id;
  var description = "Retrieve preset with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function tryToAddExistingPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  getPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
}

function verifyPresetExists(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var url = "/presets";
  var description = "Verify Preset with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Preset exists");
          }
        }
      }
      return pvg.fail("Expected Preset to exist but it does not");
    }
  });
}

function verifyPresetDoesNotExist(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var url = "/presets";
  var description = "Verify Preset with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Preset to not exist but it does");
          }
        }
      }
      return pvg.success("Preset does not exist");
    }
  });
}

function tryToDeleteANonExistingPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var url = "/presets/" + id;
  var description = "Verify we cannot delete non-existing Preset";
  svc.delete(url, {
    expectedResponseCodes: [200, 401],
    parameters: { description: description }
  });
}

function matchAddedPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var expectedDesc = "Create preset for collection " + collection;
  return matchSuccess(expectedDesc);
}

function waitForAnyPresetAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ preset\ for\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ preset\ for\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPresetAddedEvent(keyVal) {
  return bp.EventSet("AddPreset:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPresetAdded() {
  return bp.EventSet("matchAnyPresetAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create preset") > -1;
  });
}

function waitForPresetAdded(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var expectedDesc = "Create preset for collection " + collection;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title) {
  var expectedDesc = "Delete preset with id " + id;
  return bp.EventSet("matchDeletedPreset", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPresetDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ preset\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ preset\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: collection ----

function createCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Create collection " + collection;
  var body = {
    "archive_app_filter": String(archive_app_filter),
    "archive_field": String(archive_field),
    "archive_value": String(archive_value),
    "collection": String(collection),
    "display_template": String(display_template),
    "fields": String(fields),
    "hidden": String(hidden),
    "icon": String(icon),
    "id": String(id),
    "note": String(note),
    "singleton": String(singleton),
    "sort_field": String(sort_field),
    "translation": String(translation),
    "unarchive_value": String(unarchive_value),
    "versioning": String(versioning),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Retrieve collection " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Update collection " + id;
  var body = {
    "id": String(id),
    "meta": meta,
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Delete collection " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  deleteCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
}

function verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Verify Collection with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Collection exists");
          }
        }
      }
      return pvg.fail("Expected Collection to exist but it does not");
    }
  });
}

function verifyCollectionDoesNotExist(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Verify Collection with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Collection to not exist but it does");
          }
        }
      }
      return pvg.success("Collection does not exist");
    }
  });
}

function tryToDeleteANonExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Verify we cannot delete non-existing Collection";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var expectedDesc = "Create collection " + collection;
  return matchSuccess(expectedDesc);
}

function waitForAnyCollectionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCollectionAddedEvent(keyVal) {
  return bp.EventSet("AddCollection:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyCollectionAdded() {
  return bp.EventSet("matchAnyCollectionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create collection") > -1;
  });
}

function waitForCollectionAdded(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var expectedDesc = "Create collection " + collection;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var expectedDesc = "Delete collection " + id;
  return bp.EventSet("matchDeletedCollection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCollectionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: comment ----

function createComment(collection, comment, id, item) {
  var url = "/comments";
  var description = "Create comment on collection " + collection + " for item " + item + " with comment " + comment;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "id": String(id),
    "item": String(item),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteComment(collection, comment, id, item) {
  var url = "/comments/" + id;
  var description = "Delete comment with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function updateComment(collection, comment, id, item) {
  var url = "/comments/" + id;
  var description = "Update comment with id " + id + " on collection " + collection + " for item " + item + " with comment " + comment;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "id": String(id),
    "item": String(item),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getComment(collection, comment, id, item) {
  var url = "/comments/" + id;
  var description = "Get comment with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function tryToAddExistingComment(collection, comment, id, item) {
  getComment(collection, comment, id, item);
}

function verifyCommentExists(collection, comment, id, item) {
  var url = "/comments";
  var description = "Verify Comment with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Comment exists");
          }
        }
      }
      return pvg.fail("Expected Comment to exist but it does not");
    }
  });
}

function verifyCommentDoesNotExist(collection, comment, id, item) {
  var url = "/comments";
  var description = "Verify Comment with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Comment to not exist but it does");
          }
        }
      }
      return pvg.success("Comment does not exist");
    }
  });
}

function tryToDeleteANonExistingComment(collection, comment, id, item) {
  var url = "/comments/" + id;
  var description = "Verify we cannot delete non-existing Comment";
  svc.delete(url, {
    expectedResponseCodes: [200, 401],
    parameters: { description: description }
  });
}

function matchAddedComment(collection, comment, id, item) {
  var expectedDesc = "Create comment on collection " + collection + " for item " + item + " with comment " + comment;
  return matchSuccess(expectedDesc);
}

function waitForAnyCommentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ comment\ on\ collection\ (.+)\ for\ item\ (.+)\ with\ comment\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ comment\ on\ collection\ (.+)\ for\ item\ (.+)\ with\ comment\ (.+)$/);
  var captures = m.slice(1);
  var names = ["collection", "item", "comment"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCommentAddedEvent(keyVal) {
  return bp.EventSet("AddComment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyCommentAdded() {
  return bp.EventSet("matchAnyCommentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create comment") > -1;
  });
}

function waitForCommentAdded(collection, comment, id, item) {
  var expectedDesc = "Create comment on collection " + collection + " for item " + item + " with comment " + comment;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedComment(collection, comment, id, item) {
  var expectedDesc = "Delete comment with id " + id;
  return bp.EventSet("matchDeletedComment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCommentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ comment\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ comment\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: file ----

function createFile(data, id) {
  var url = "/files";
  var description = "Create file";
  var body = {
    "data": String(data),
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteFile(data, id) {
  var url = "/files/" + id;
  var description = "Delete file with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function updateFile(data, id) {
  var url = "/files/" + id;
  var description = "Update file with id " + id;
  var body = {
    "description": "description_" + id,
    "filename_download": "filename_download_" + id,
    "folder": "folder_" + id,
    "id": String(id),
    "tags": [],
    "title": "title_" + id,
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getFile(data, id) {
  var url = "/files/" + id;
  var description = "Get file with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function tryToAddExistingFile(data, id) {
  getFile(data, id);
}

function verifyFileExists(data, id) {
  var url = "/files";
  var description = "Verify File with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("File exists");
          }
        }
      }
      return pvg.fail("Expected File to exist but it does not");
    }
  });
}

function verifyFileDoesNotExist(data, id) {
  var url = "/files";
  var description = "Verify File with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected File to not exist but it does");
          }
        }
      }
      return pvg.success("File does not exist");
    }
  });
}

function tryToDeleteANonExistingFile(data, id) {
  var url = "/files/" + id;
  var description = "Verify we cannot delete non-existing File";
  svc.delete(url, {
    expectedResponseCodes: [200, 401],
    parameters: { description: description }
  });
}

function matchAddedFile(data, id) {
  var expectedDesc = "Create file";
  return matchSuccess(expectedDesc);
}

function waitForAnyFileAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ file$/));
  var m = ev.data.parameters.description.match(/^Create\ file$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFileAddedEvent(keyVal) {
  return bp.EventSet("AddFile:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyFileAdded() {
  return bp.EventSet("matchAnyFileAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create file") > -1;
  });
}

function waitForFileAdded(data, id) {
  var expectedDesc = "Create file";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedFile(data, id) {
  var expectedDesc = "Delete file with id " + id;
  return bp.EventSet("matchDeletedFile", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFileDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ file\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ file\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: files ----

function getFiles() {
  var url = "/files";
  var description = "List files";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function updateFiles() {
  var url = "/files";
  var description = "Update multiple files";
  var body = {
    "data": data,
    "keys": [],
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function deleteFiles() {
  var url = "/files";
  var description = "Delete multiple files";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function verifyFilesExists() {
  var url = "/files";
  var description = "Verify Files exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Files exists");
          }
        }
      }
      return pvg.fail("Expected Files to exist but it does not");
    }
  });
}

function verifyFilesDoesNotExist() {
  var url = "/files";
  var description = "Verify Files does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Files to not exist but it does");
          }
        }
      }
      return pvg.success("Files does not exist");
    }
  });
}

function tryToDeleteANonExistingFiles() {
  var url = "/files";
  var description = "Verify we cannot delete non-existing Files";
  svc.delete(url, {
    expectedResponseCodes: [200, 401],
    parameters: { description: description }
  });
}

function matchDeletedFiles() {
  var expectedDesc = "Delete multiple files";
  return bp.EventSet("matchDeletedFiles", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFilesDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ multiple\ files$/));
  var m = ev.data.parameters.description.match(/^Delete\ multiple\ files$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: flow ----

function createFlow(id) {
  var url = "/flows";
  var description = "Create a flow with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteFlow(id) {
  var url = "/flows/" + id;
  var description = "Delete flow with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateFlow(id) {
  var url = "/flows/" + id;
  var description = "Update flow with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getFlow(id) {
  var url = "/flows/" + id;
  var description = "Retrieve flow with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingFlow(id) {
  getFlow(id);
}

function verifyFlowExists(id) {
  var url = "/flows";
  var description = "Verify Flow with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Flow exists");
          }
        }
      }
      return pvg.fail("Expected Flow to exist but it does not");
    }
  });
}

function verifyFlowDoesNotExist(id) {
  var url = "/flows";
  var description = "Verify Flow with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Flow to not exist but it does");
          }
        }
      }
      return pvg.success("Flow does not exist");
    }
  });
}

function tryToDeleteANonExistingFlow(id) {
  var url = "/flows/" + id;
  var description = "Verify we cannot delete non-existing Flow";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedFlow(id) {
  var expectedDesc = "Create a flow with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyFlowAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ a\ flow\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ a\ flow\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFlowAddedEvent(keyVal) {
  return bp.EventSet("AddFlow:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyFlowAdded() {
  return bp.EventSet("matchAnyFlowAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create flow") > -1;
  });
}

function waitForFlowAdded(id) {
  var expectedDesc = "Create a flow with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedFlow(id) {
  var expectedDesc = "Delete flow with id " + id;
  return bp.EventSet("matchDeletedFlow", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFlowDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ flow\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ flow\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: folder ----

function createFolder(id, name, parent) {
  var url = "/folders";
  var description = "Create folder " + name;
  var body = {
    "id": String(id),
    "name": String(name),
    "parent": String(parent),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteFolder(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Delete folder " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateFolder(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Update folder " + id + " with name " + name;
  var body = {
    "id": String(id),
    "name": String(name),
    "parent": String(parent),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getFolder(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Get folder " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingFolder(id, name, parent) {
  getFolder(id, name, parent);
}

function verifyFolderExists(id, name, parent) {
  var url = "/folders";
  var description = "Verify Folder with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Folder exists");
          }
        }
      }
      return pvg.fail("Expected Folder to exist but it does not");
    }
  });
}

function verifyFolderDoesNotExist(id, name, parent) {
  var url = "/folders";
  var description = "Verify Folder with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Folder to not exist but it does");
          }
        }
      }
      return pvg.success("Folder does not exist");
    }
  });
}

function tryToDeleteANonExistingFolder(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Verify we cannot delete non-existing Folder";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedFolder(id, name, parent) {
  var expectedDesc = "Create folder " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyFolderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ folder\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ folder\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFolderAddedEvent(keyVal) {
  return bp.EventSet("AddFolder:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyFolderAdded() {
  return bp.EventSet("matchAnyFolderAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create folder") > -1;
  });
}

function waitForFolderAdded(id, name, parent) {
  var expectedDesc = "Create folder " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedFolder(id, name, parent) {
  var expectedDesc = "Delete folder " + id;
  return bp.EventSet("matchDeletedFolder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFolderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ folder\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ folder\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: operation ----

function createOperation(id) {
  var url = "/operations";
  var description = "Create operation with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteOperation(id) {
  var url = "/operations/" + id;
  var description = "Delete operation with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateOperation(id) {
  var url = "/operations/" + id;
  var description = "Update operation with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getOperation(id) {
  var url = "/operations/" + id;
  var description = "Get operation with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingOperation(id) {
  getOperation(id);
}

function verifyOperationExists(id) {
  var url = "/operations";
  var description = "Verify Operation with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Operation exists");
          }
        }
      }
      return pvg.fail("Expected Operation to exist but it does not");
    }
  });
}

function verifyOperationDoesNotExist(id) {
  var url = "/operations";
  var description = "Verify Operation with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Operation to not exist but it does");
          }
        }
      }
      return pvg.success("Operation does not exist");
    }
  });
}

function tryToDeleteANonExistingOperation(id) {
  var url = "/operations/" + id;
  var description = "Verify we cannot delete non-existing Operation";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedOperation(id) {
  var expectedDesc = "Create operation with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyOperationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ operation\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ operation\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getOperationAddedEvent(keyVal) {
  return bp.EventSet("AddOperation:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyOperationAdded() {
  return bp.EventSet("matchAnyOperationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create operation") > -1;
  });
}

function waitForOperationAdded(id) {
  var expectedDesc = "Create operation with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedOperation(id) {
  var expectedDesc = "Delete operation with id " + id;
  return bp.EventSet("matchDeletedOperation", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOperationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ operation\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ operation\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: relation ----

function createRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "Create relation with collection_many " + collection_many + " and collection_one " + collection_one;
  var body = {
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "id": String(id),
    "junction_field": String(junction_field),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Retrieve relation with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Update relation with id " + id;
  var body = {
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "id": String(id),
    "junction_field": String(junction_field),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Delete relation with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  deleteRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
}

function verifyRelationExists(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "Verify Relation with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Relation exists");
          }
        }
      }
      return pvg.fail("Expected Relation to exist but it does not");
    }
  });
}

function verifyRelationDoesNotExist(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "Verify Relation with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Relation to not exist but it does");
          }
        }
      }
      return pvg.success("Relation does not exist");
    }
  });
}

function tryToDeleteANonExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Verify we cannot delete non-existing Relation";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var expectedDesc = "Create relation with collection_many " + collection_many + " and collection_one " + collection_one;
  return matchSuccess(expectedDesc);
}

function waitForAnyRelationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ relation\ with\ collection_many\ (.+)\ and\ collection_one\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ relation\ with\ collection_many\ (.+)\ and\ collection_one\ (.+)$/);
  var captures = m.slice(1);
  var names = ["collection_many", "collection_one"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRelationAddedEvent(keyVal) {
  return bp.EventSet("AddRelation:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRelationAdded() {
  return bp.EventSet("matchAnyRelationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create relation") > -1;
  });
}

function waitForRelationAdded(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var expectedDesc = "Create relation with collection_many " + collection_many + " and collection_one " + collection_one;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var expectedDesc = "Delete relation with id " + id;
  return bp.EventSet("matchDeletedRelation", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRelationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ relation\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ relation\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: revision ----

function getRevision(id) {
  var url = "/revisions/" + id;
  var description = "Retrieve a Revision with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function getRevisions(id) {
  var url = "/revisions";
  var description = "List Revisions";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function verifyRevisionExists(id) {
  var url = "/revisions";
  var description = "Verify Revision with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Revision exists");
          }
        }
      }
      return pvg.fail("Expected Revision to exist but it does not");
    }
  });
}

function verifyRevisionDoesNotExist(id) {
  var url = "/revisions";
  var description = "Verify Revision with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Revision to not exist but it does");
          }
        }
      }
      return pvg.success("Revision does not exist");
    }
  });
}

// ---- Entity: role ----

function createRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var description = "Create role " + name;
  var body = {
    "description": String(description),
    "enforce_tfa": String(enforce_tfa),
    "external_id": String(external_id),
    "id": String(id),
    "ip_access": String(ip_access),
    "module_listing": String(module_listing),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , external_id: String(external_id)
      , name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Delete role " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Update role " + id + " with name " + name;
  var body = {
    "description": String(description),
    "enforce_tfa": String(enforce_tfa),
    "external_id": String(external_id),
    "id": String(id),
    "ip_access": String(ip_access),
    "module_listing": String(module_listing),
    "name": String(name),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , external_id: String(external_id)
      , name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Get role " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  getRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
}

function verifyRoleExists(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var description = "Verify Role with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Role exists");
          }
        }
      }
      return pvg.fail("Expected Role to exist but it does not");
    }
  });
}

function verifyRoleDoesNotExist(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var description = "Verify Role with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Role to not exist but it does");
          }
        }
      }
      return pvg.success("Role does not exist");
    }
  });
}

function tryToDeleteANonExistingRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Verify we cannot delete non-existing Role";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var expectedDesc = "Create role " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyRoleAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ role\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ role\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRoleAddedEvent(keyVal) {
  return bp.EventSet("AddRole:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRoleAdded() {
  return bp.EventSet("matchAnyRoleAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create role") > -1;
  });
}

function waitForRoleAdded(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var expectedDesc = "Create role " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var expectedDesc = "Delete role " + id;
  return bp.EventSet("matchDeletedRole", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: webhook ----

function createWebhook(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks";
  var description = "Create webhook " + name;
  var body = {
    "actions": String(actions),
    "data": String(data),
    "id": String(id),
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system-collections),
    "url": String(url),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteWebhook(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks/" + id;
  var description = "Delete webhook " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateWebhook(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks/" + id;
  var description = "Update webhook " + id + " with name " + name;
  var body = {
    "actions": String(actions),
    "data": String(data),
    "id": String(id),
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system-collections),
    "url": String(url),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getWebhook(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks/" + id;
  var description = "Get webhook " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function getWebhooks(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks";
  var description = "List webhooks";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateWebhooks(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks";
  var description = "Update multiple webhooks";
  var body = {
    "data": data,
    "id": String(id),
    "keys": [],
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteWebhooks(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks";
  var description = "Delete multiple webhooks";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function tryToAddExistingWebhook(actions, data, id, method, name, status, system-collections, url) {
  deleteWebhooks(actions, data, id, method, name, status, system-collections, url);
}

function verifyWebhookExists(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks";
  var description = "Verify Webhook with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Webhook exists");
          }
        }
      }
      return pvg.fail("Expected Webhook to exist but it does not");
    }
  });
}

function verifyWebhookDoesNotExist(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks";
  var description = "Verify Webhook with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Webhook to not exist but it does");
          }
        }
      }
      return pvg.success("Webhook does not exist");
    }
  });
}

function tryToDeleteANonExistingWebhook(actions, data, id, method, name, status, system-collections, url) {
  var url = "/webhooks/" + id;
  var description = "Verify we cannot delete non-existing Webhook";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedWebhook(actions, data, id, method, name, status, system-collections, url) {
  var expectedDesc = "Create webhook " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyWebhookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ webhook\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ webhook\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWebhookAddedEvent(keyVal) {
  return bp.EventSet("AddWebhook:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyWebhookAdded() {
  return bp.EventSet("matchAnyWebhookAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create webhook") > -1;
  });
}

function waitForWebhookAdded(actions, data, id, method, name, status, system-collections, url) {
  var expectedDesc = "Create webhook " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedWebhook(actions, data, id, method, name, status, system-collections, url) {
  var expectedDesc = "Delete webhook " + id;
  return bp.EventSet("matchDeletedWebhook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWebhookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ webhook\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ webhook\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: asset ----

function getAsset(id) {
  var url = "/assets/" + id;
  var description = "Get an Asset with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyAssetExists(id) {
  var url = "/assets";
  var description = "Verify Asset with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Asset exists");
          }
        }
      }
      return pvg.fail("Expected Asset to exist but it does not");
    }
  });
}

function verifyAssetDoesNotExist(id) {
  var url = "/assets";
  var description = "Verify Asset with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Asset to not exist but it does");
          }
        }
      }
      return pvg.success("Asset does not exist");
    }
  });
}

// ---- Entity: setting ----

function getSettings() {
  var url = "/settings";
  var description = "Retrieve Settings";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateSetting() {
  var url = "/settings";
  var description = "Update Settings";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 404],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifySettingExists() {
  var url = "/settings";
  var description = "Verify Setting exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Setting exists");
          }
        }
      }
      return pvg.fail("Expected Setting to exist but it does not");
    }
  });
}

function verifySettingDoesNotExist() {
  var url = "/settings";
  var description = "Verify Setting does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Setting to not exist but it does");
          }
        }
      }
      return pvg.success("Setting does not exist");
    }
  });
}
