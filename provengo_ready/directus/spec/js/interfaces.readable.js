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

// ---- Entity: user ----

function createUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var description = "Create user " + first_name + " " + last_name + " with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function deleteUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users/" + id;
  var description = "Delete user with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users/" + id;
  var description = "Update user with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function getUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users/" + id;
  var description = "Retrieve user with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function getUsers(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var description = "List users";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateUsers(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var description = "Update multiple users";
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function deleteUsers(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var description = "Delete multiple users";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var url = "/users";
  var description = "Verify User exists";
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
  var description = "Verify User does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var expectedDesc = "Create user " + first_name + " " + last_name + " with id " + id;
  return bp.EventSet("matchAddedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ (.+)\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ (.+)\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["first_name", "last_name", "id"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForUserAdded(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token) {
  var expectedDesc = "Create user " + first_name + " " + last_name + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
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

// ---- Entity: user invite ----

function invite(email) {
  var url = "/users/invite";
  var description = "Invite user(s) with email " + email;
  var body = {
    "email": String(email),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingUserInvite(email) {
  var url = "/users/invite";
  var body = {
  };
  var description = "Verify that we cannot add another UserInvite...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserInviteExists(email) {
  var url = "/users/invite";
  var description = "Verify UserInvite exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].email) === String(email)) {
            return pvg.success("UserInvite exists");
          }
        }
      }
      return pvg.fail("Expected UserInvite to exist but it does not");
    }
  });
}

function verifyUserInviteDoesNotExist(email) {
  var url = "/users/invite";
  var description = "Verify UserInvite does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].email) === String(email)) {
            return pvg.fail("Expected UserInvite to not exist but it does");
          }
        }
      }
      return pvg.success("UserInvite does not exist");
    }
  });
}

function matchAddedUserInvite(email) {
  var expectedDesc = "Invite user(s) with email " + email;
  return bp.EventSet("matchAddedUserInvite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserInviteAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Invite\ user\(s\)\ with\ email\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Invite\ user\(s\)\ with\ email\ (.+)$/);
  var captures = m.slice(1);
  var names = ["email"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserInviteAddedEvent(keyVal) {
  return bp.EventSet("AddUserInvite:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserInviteAdded() {
  return bp.EventSet("matchAnyUserInviteAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user invite") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForUserInviteAdded(email) {
  var expectedDesc = "Invite user(s) with email " + email;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: user invite accept ----

function acceptInvite(password, token) {
  var url = "/users/invite/accept";
  var description = "Accept user invite with token " + token;
  var body = {
    "token": String(token),
    "password": String(password),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingUserInviteAccept(password, token) {
  var url = "/users/invite/accept";
  var body = {
  };
  var description = "Verify that we cannot add another UserInviteAccept...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserInviteAcceptExists(password, token) {
  var url = "/users/invite/accept";
  var description = "Verify UserInviteAccept exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].password) === String(password) && String(items[i].token) === String(token)) {
            return pvg.success("UserInviteAccept exists");
          }
        }
      }
      return pvg.fail("Expected UserInviteAccept to exist but it does not");
    }
  });
}

function verifyUserInviteAcceptDoesNotExist(password, token) {
  var url = "/users/invite/accept";
  var description = "Verify UserInviteAccept does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].password) === String(password) && String(items[i].token) === String(token)) {
            return pvg.fail("Expected UserInviteAccept to not exist but it does");
          }
        }
      }
      return pvg.success("UserInviteAccept does not exist");
    }
  });
}

function matchAddedUserInviteAccept(password, token) {
  var expectedDesc = "Accept user invite with token " + token;
  return bp.EventSet("matchAddedUserInviteAccept", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserInviteAcceptAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Accept\ user\ invite\ with\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Accept\ user\ invite\ with\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserInviteAcceptAddedEvent(keyVal) {
  return bp.EventSet("AddUserInviteAccept:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserInviteAcceptAdded() {
  return bp.EventSet("matchAnyUserInviteAcceptAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user invite accept") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForUserInviteAcceptAdded(password, token) {
  var expectedDesc = "Accept user invite with token " + token;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: current user ----

function getMe() {
  var url = "/users/me";
  var description = "Retrieve current user";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateMe() {
  var url = "/users/me";
  var description = "Update current user";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function verifyCurrentUserExists() {
  var url = "/users/me";
  var description = "Verify CurrentUser exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("CurrentUser exists");
          }
        }
      }
      return pvg.fail("Expected CurrentUser to exist but it does not");
    }
  });
}

function verifyCurrentUserDoesNotExist() {
  var url = "/users/me";
  var description = "Verify CurrentUser does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected CurrentUser to not exist but it does");
          }
        }
      }
      return pvg.success("CurrentUser does not exist");
    }
  });
}

// ---- Entity: current user last page ----

function updateLastUsedPageMe(last_page) {
  var url = "/users/me/track/page";
  var description = "Update last page to " + last_page;
  var body = {
    "last_page": String(last_page),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

// ---- Entity: current user 2FA ----

function meTfaEnable() {
  var url = "/users/me/tfa/enable";
  var description = "Enable 2FA for current user";
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

function meTfaDisable() {
  var url = "/users/me/tfa/disable";
  var description = "Disable 2FA for current user";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingCurrentUserTFA() {
  var url = "/users/me/tfa/enable";
  var body = {
  };
  var description = "Verify that we cannot add another CurrentUserTFA...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCurrentUserTFAExists() {
  var url = "/users/me/tfa/enable";
  var description = "Verify CurrentUserTFA exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("CurrentUserTFA exists");
          }
        }
      }
      return pvg.fail("Expected CurrentUserTFA to exist but it does not");
    }
  });
}

function verifyCurrentUserTFADoesNotExist() {
  var url = "/users/me/tfa/enable";
  var description = "Verify CurrentUserTFA does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected CurrentUserTFA to not exist but it does");
          }
        }
      }
      return pvg.success("CurrentUserTFA does not exist");
    }
  });
}

function tryToDeleteANonExistingCurrentUserTFA() {
  var url = "/users/me/tfa/disable";
  var description = "Verify we cannot delete non-existing CurrentUserTFA";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCurrentUserTFA() {
  var expectedDesc = "Enable 2FA for current user";
  return bp.EventSet("matchAddedCurrentUserTFA", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCurrentUserTFAAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Enable\ 2FA\ for\ current\ user$/));
  var m = ev.data.parameters.description.match(/^Enable\ 2FA\ for\ current\ user$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCurrentUserTFAAddedEvent(keyVal) {
  return bp.EventSet("AddCurrentUserTFA:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyCurrentUserTFAAdded() {
  return bp.EventSet("matchAnyCurrentUserTFAAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create current user 2FA") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForCurrentUserTFAAdded() {
  var expectedDesc = "Enable 2FA for current user";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCurrentUserTFA() {
  var expectedDesc = "Disable 2FA for current user";
  return bp.EventSet("matchDeletedCurrentUserTFA", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCurrentUserTFADeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Disable\ 2FA\ for\ current\ user$/));
  var m = ev.data.parameters.description.match(/^Disable\ 2FA\ for\ current\ user$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: auth ----

function login(email, password, provider, refresh_token, token) {
  var url = "/auth/login";
  var description = "Create auth login session for user with email " + email;
  var body = {
    "email": String(email),
    "password": String(password),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function passwordRequest(email, password, provider, refresh_token, token) {
  var url = "/auth/password/request";
  var description = "Request password reset for user with email " + email;
  var body = {
    "email": String(email),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function passwordReset(email, password, provider, refresh_token, token) {
  var url = "/auth/password/reset";
  var description = "Reset password using token " + token;
  var body = {
    "token": String(token),
    "password": String(password),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function refresh(email, mode, password, provider, refresh_token, token) {
  var url = "/auth/refresh";
  var description = "Refresh auth token with refresh_token " + refresh_token;
  var body = {
    "refresh_token": String(refresh_token),
    "mode": "mode_dummy",
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function logout(email, mode, password, provider, refresh_token, token) {
  var url = "/auth/logout";
  var description = "Logout and invalidate refresh_token " + refresh_token;
  var body = {
    "refresh_token": String(refresh_token),
    "mode": "mode_dummy",
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function listOAuthProviders(email, password, provider, refresh_token, token) {
  var url = "/auth/oauth";
  var description = "List OAuth providers";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function oauthProvider(email, password, provider, refresh_token, token) {
  var url = "/auth/oauth/" + provider;
  var description = "Authenticate using OAuth provider " + provider;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingAuth(email, password, provider, refresh_token, token) {
  var url = "/auth/login";
  var body = {
  };
  var description = "Verify that we cannot add another Auth...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAuthExists(email, password, provider, refresh_token, token) {
  var url = "/auth/login";
  var description = "Verify Auth exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].provider) === String(provider)) {
            return pvg.success("Auth exists");
          }
        }
      }
      return pvg.fail("Expected Auth to exist but it does not");
    }
  });
}

function verifyAuthDoesNotExist(email, password, provider, refresh_token, token) {
  var url = "/auth/login";
  var description = "Verify Auth does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].provider) === String(provider)) {
            return pvg.fail("Expected Auth to not exist but it does");
          }
        }
      }
      return pvg.success("Auth does not exist");
    }
  });
}

function matchAddedAuth(email, password, provider, refresh_token, token) {
  var expectedDesc = "Create auth login session for user with email " + email;
  return bp.EventSet("matchAddedAuth", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ auth\ login\ session\ for\ user\ with\ email\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ auth\ login\ session\ for\ user\ with\ email\ (.+)$/);
  var captures = m.slice(1);
  var names = ["email"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthAddedEvent(keyVal) {
  return bp.EventSet("AddAuth:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAuthAdded() {
  return bp.EventSet("matchAnyAuthAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create auth") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForAuthAdded(email, password, provider, refresh_token, token) {
  var expectedDesc = "Create auth login session for user with email " + email;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: version ----

function createContentVersion(collection, id, item, key, name) {
  var url = "/versions";
  var description = "Create version " + key + " with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
      , name: String(name)
    }
  });
}

function deleteContentVersion(collection, id, item, key, name) {
  var url = "/versions/" + id;
  var description = "Delete version with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateContentVersion(collection, id, item, key, name) {
  var url = "/versions/" + id;
  var description = "Update version with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
      , name: String(name)
    }
  });
}

function getContentVersion(collection, id, item, key, name) {
  var url = "/versions/" + id;
  var description = "Get version with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingVersions(collection, id, item, key, name) {
  var url = "/versions";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Versions...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVersionsExists(collection, id, item, key, name) {
  var url = "/versions";
  var description = "Verify Versions exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Versions exists");
          }
        }
      }
      return pvg.fail("Expected Versions to exist but it does not");
    }
  });
}

function verifyVersionsDoesNotExist(collection, id, item, key, name) {
  var url = "/versions";
  var description = "Verify Versions does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Versions to not exist but it does");
          }
        }
      }
      return pvg.success("Versions does not exist");
    }
  });
}

function tryToDeleteANonExistingVersions(collection, id, item, key, name) {
  var url = "/versions/" + id;
  var description = "Verify we cannot delete non-existing Versions";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedVersions(collection, id, item, key, name) {
  var expectedDesc = "Create version " + key + " with id " + id;
  return bp.EventSet("matchAddedVersions", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyVersionsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ version\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ version\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["key", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getVersionsAddedEvent(keyVal) {
  return bp.EventSet("AddVersions:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyVersionsAdded() {
  return bp.EventSet("matchAnyVersionsAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create version") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForVersionsAdded(collection, id, item, key, name) {
  var expectedDesc = "Create version " + key + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedVersions(collection, id, item, key, name) {
  var expectedDesc = "Delete version with id " + id;
  return bp.EventSet("matchDeletedVersions", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyVersionsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ version\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ version\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: extension ----

function listExtensions(bundle, name) {
  var url = "/extensions";
  var description = "List all extensions";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateExtensions(bundle, name) {
  var url = "/extensions/" + name;
  var description = "Update extension " + name;
  var body = {
    "name": String(name),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      name: String(name)
    }
  });
}

function updateExtensionBundle(bundle, name) {
  var url = "/extensions/" + bundle + "/" + name;
  var description = "Update extension " + name + " in bundle " + bundle;
  var body = {
    "name": String(name),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      name: String(name)
    }
  });
}

function verifyExtensionExists(bundle, name) {
  var url = "/extensions";
  var description = "Verify Extension exists";
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

function verifyExtensionDoesNotExist(bundle, name) {
  var url = "/extensions";
  var description = "Verify Extension does not exist";
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

// ---- Entity: field ----

function createField(collection, datatype, field, id, length, type) {
  var url = "/fields/" + collection;
  var description = "Create field " + field + " in collection " + collection;
  var body = {
    "field": String(field),
    "datatype": String(datatype),
    "type": String(type),
    "length": String(length),
    "collection": String(collection),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      collection: String(collection)
      , id: String(id)
    }
  });
}

function getCollectionField(collection, datatype, field, id, length, type) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Get field " + id + " in collection " + collection;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateField(collection, datatype, field, id, length, type) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Update field " + id + " in collection " + collection;
  var body = {
    "collection": String(collection),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      collection: String(collection)
      , id: String(id)
    }
  });
}

function deleteField(collection, datatype, field, id, length, type) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Delete field " + id + " in collection " + collection;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingField(collection, datatype, field, id, length, type) {
  var url = "/fields/" + collection;
  var body = {
    "collection": String(collection)
  };
  var description = "Verify that we cannot add another Field...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyFieldExists(collection, datatype, field, id, length, type) {
  var url = "/fields/" + collection;
  var description = "Verify Field exists";
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

function verifyFieldDoesNotExist(collection, datatype, field, id, length, type) {
  var url = "/fields/" + collection;
  var description = "Verify Field does not exist";
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

function tryToDeleteANonExistingField(collection, datatype, field, id, length, type) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Verify we cannot delete non-existing Field";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedField(collection, datatype, field, id, length, type) {
  var expectedDesc = "Create field " + field + " in collection " + collection;
  return bp.EventSet("matchAddedField", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFieldAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ field\ (.+)\ in\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ field\ (.+)\ in\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["field", "collection"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create field") > -1 && e.data.parameters.collection !== undefined);
  });
}

function waitForFieldAdded(collection, datatype, field, id, length, type) {
  var expectedDesc = "Create field " + field + " in collection " + collection;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedField(collection, datatype, field, id, length, type) {
  var expectedDesc = "Delete field " + id + " in collection " + collection;
  return bp.EventSet("matchDeletedField", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFieldDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ field\ (.+)\ in\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ field\ (.+)\ in\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: permission ----

function createPermission(collection, id, role) {
  var url = "/permissions";
  var description = "Create permission for role " + role + " on collection " + collection;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function deletePermission(collection, id, role) {
  var url = "/permissions/" + id;
  var description = "Delete permission with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updatePermission(collection, id, role) {
  var url = "/permissions/" + id;
  var description = "Update permission with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function getPermission(collection, id, role) {
  var url = "/permissions/" + id;
  var description = "Get permission with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function getPermissions(collection, id, role) {
  var url = "/permissions";
  var description = "List permissions";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPermission(collection, id, role) {
  var url = "/permissions";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Permission...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPermissionExists(collection, id, role) {
  var url = "/permissions";
  var description = "Verify Permission exists";
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

function verifyPermissionDoesNotExist(collection, id, role) {
  var url = "/permissions";
  var description = "Verify Permission does not exist";
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

function tryToDeleteANonExistingPermission(collection, id, role) {
  var url = "/permissions/" + id;
  var description = "Verify we cannot delete non-existing Permission";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedPermission(collection, id, role) {
  var expectedDesc = "Create permission for role " + role + " on collection " + collection;
  return bp.EventSet("matchAddedPermission", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create permission") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForPermissionAdded(collection, id, role) {
  var expectedDesc = "Create permission for role " + role + " on collection " + collection;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedPermission(collection, id, role) {
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

// ---- Entity: schema ----

function schemaSnapshot(force) {
  var url = "/schema/snapshot";
  var description = "Retrieve schema snapshot";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function schemaApply(data, force) {
  var url = "/schema/apply";
  var description = "Apply schema difference with data {data}";
  var body = {
    "data": "data_dummy",
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function schemaDiff(data, force) {
  var url = "/schema/diff";
  var description = "Retrieve schema difference with data {data}";
  var body = {
    "data": "data_dummy",
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingSchema(force) {
  var url = "/schema/apply";
  var body = {
  };
  var description = "Verify that we cannot add another Schema...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifySchemaExists(force) {
  var url = "/schema/apply";
  var description = "Verify Schema exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].force) === String(force)) {
            return pvg.success("Schema exists");
          }
        }
      }
      return pvg.fail("Expected Schema to exist but it does not");
    }
  });
}

function verifySchemaDoesNotExist(force) {
  var url = "/schema/apply";
  var description = "Verify Schema does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].force) === String(force)) {
            return pvg.fail("Expected Schema to not exist but it does");
          }
        }
      }
      return pvg.success("Schema does not exist");
    }
  });
}

function matchAddedSchema(force) {
  var expectedDesc = "Apply schema difference with data {data}";
  return bp.EventSet("matchAddedSchema", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySchemaAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Apply\ schema\ difference\ with\ data\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Apply\ schema\ difference\ with\ data\ (.+)$/);
  var captures = m.slice(1);
  var names = ["data"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getSchemaAddedEvent(keyVal) {
  return bp.EventSet("AddSchema:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnySchemaAdded() {
  return bp.EventSet("matchAnySchemaAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create schema") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForSchemaAdded(force) {
  var expectedDesc = "Apply schema difference with data {data}";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: activity ----

function getActivity(id) {
  var url = "/activity/" + id;
  var description = "Retrieve activity with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyActivityExists(id) {
  var url = "/activity";
  var description = "Verify Activity exists";
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
  var description = "Verify Activity does not exist";
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
  var description = "Create item in collection " + collection;
  var body = {
    "collection": String(collection),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      collection: String(collection)
      , id: String(id)
    }
  });
}

function deleteItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Delete item with id " + id + " from collection " + collection;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Update item with id " + id + " in collection " + collection;
  var body = {
    "collection": String(collection),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      collection: String(collection)
      , id: String(id)
    }
  });
}

function getItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Get item with id " + id + " from collection " + collection;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingItem(collection, id) {
  var url = "/items/" + collection;
  var body = {
    "collection": String(collection)
  };
  var description = "Verify that we cannot add another Item...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyItemExists(collection, id) {
  var url = "/items/" + collection;
  var description = "Verify Item exists";
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
  var description = "Verify Item does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedItem(collection, id) {
  var expectedDesc = "Create item in collection " + collection;
  return bp.EventSet("matchAddedItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyItemAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ item\ in\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ item\ in\ collection\ (.+)$/);
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create item") > -1 && e.data.parameters.collection !== undefined);
  });
}

function waitForItemAdded(collection, id) {
  var expectedDesc = "Create item in collection " + collection;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedItem(collection, id) {
  var expectedDesc = "Delete item with id " + id + " from collection " + collection;
  return bp.EventSet("matchDeletedItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyItemDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ item\ with\ id\ (.+)\ from\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ item\ with\ id\ (.+)\ from\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: preset ----

function createPreset(collection, id) {
  var url = "/presets";
  var description = "Create preset for collection " + collection;
  var body = {
    "collection": String(collection),
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function deletePreset(collection, id) {
  var url = "/presets/" + id;
  var description = "Delete preset with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updatePreset(collection, id) {
  var url = "/presets/" + id;
  var description = "Update preset with id " + id + " for collection " + collection;
  var body = {
    "collection": String(collection),
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function updatePresets(collection, id) {
  var url = "/presets";
  var description = "Update multiple presets for collection " + collection;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function getPreset(collection, id) {
  var url = "/presets/" + id;
  var description = "Retrieve preset with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function getPresets(collection, id) {
  var url = "/presets";
  var description = "List presets";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function deletePresets(collection, id) {
  var url = "/presets";
  var description = "Delete multiple presets";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPreset(collection, id) {
  var url = "/presets";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Preset...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPresetExists(collection, id) {
  var url = "/presets";
  var description = "Verify Preset exists";
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

function verifyPresetDoesNotExist(collection, id) {
  var url = "/presets";
  var description = "Verify Preset does not exist";
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

function tryToDeleteANonExistingPreset(collection, id) {
  var url = "/presets/" + id;
  var description = "Verify we cannot delete non-existing Preset";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedPreset(collection, id) {
  var expectedDesc = "Create preset for collection " + collection;
  return bp.EventSet("matchAddedPreset", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create preset") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForPresetAdded(collection, id) {
  var expectedDesc = "Create preset for collection " + collection;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedPreset(collection, id) {
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

function createCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Create collection " + collection + " with id " + id;
  var body = {
    "collection": String(collection),
    "fields": String(fields),
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function getCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Retrieve collection with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Update collection with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function deleteCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Delete collection with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Collection...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Verify Collection exists";
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

function verifyCollectionDoesNotExist(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Verify Collection does not exist";
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

function tryToDeleteANonExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Verify we cannot delete non-existing Collection";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var expectedDesc = "Create collection " + collection + " with id " + id;
  return bp.EventSet("matchAddedCollection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCollectionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ collection\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ collection\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["collection", "id"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create collection") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForCollectionAdded(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var expectedDesc = "Create collection " + collection + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var expectedDesc = "Delete collection with id " + id;
  return bp.EventSet("matchDeletedCollection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCollectionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ collection\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ collection\ with\ id\ (.+)$/);
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
  var description = "Create comment " + comment + " for item " + item + " in collection " + collection;
  var body = {
    "collection": String(collection),
    "item": String(item),
    "comment": String(comment),
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function deleteComment(collection, comment, id, item) {
  var url = "/comments/" + id;
  var description = "Delete comment with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateComment(collection, comment, id, item) {
  var url = "/comments/" + id;
  var description = "Update comment with id " + id + " in collection " + collection;
  var body = {
    "collection": String(collection),
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , collection: String(collection)
    }
  });
}

function getComment(collection, comment, id, item) {
  var url = "/comments/" + id;
  var description = "Get comment with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingComment(collection, comment, id, item) {
  var url = "/comments";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Comment...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCommentExists(collection, comment, id, item) {
  var url = "/comments";
  var description = "Verify Comment exists";
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
  var description = "Verify Comment does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedComment(collection, comment, id, item) {
  var expectedDesc = "Create comment " + comment + " for item " + item + " in collection " + collection;
  return bp.EventSet("matchAddedComment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCommentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ comment\ (.+)\ for\ item\ (.+)\ in\ collection\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ comment\ (.+)\ for\ item\ (.+)\ in\ collection\ (.+)$/);
  var captures = m.slice(1);
  var names = ["comment", "item", "collection"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create comment") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForCommentAdded(collection, comment, id, item) {
  var expectedDesc = "Create comment " + comment + " for item " + item + " in collection " + collection;
  waitFor(matchesDescription(expectedDesc));
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

function createFile(id) {
  var url = "/files";
  var description = "Create file";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function deleteFile(id) {
  var url = "/files/" + id;
  var description = "Delete file with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateFile(id) {
  var url = "/files/" + id;
  var description = "Update file with id " + id + " and title {title}";
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function getFile(id) {
  var url = "/files/" + id;
  var description = "Get file with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingFile(id) {
  var url = "/files";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another File...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyFileExists(id) {
  var url = "/files";
  var description = "Verify File exists";
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

function verifyFileDoesNotExist(id) {
  var url = "/files";
  var description = "Verify File does not exist";
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

function tryToDeleteANonExistingFile(id) {
  var url = "/files/" + id;
  var description = "Verify we cannot delete non-existing File";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedFile(id) {
  var expectedDesc = "Create file";
  return bp.EventSet("matchAddedFile", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create file") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForFileAdded(id) {
  var expectedDesc = "Create file";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedFile(id) {
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

// ---- Entity: flow ----

function createFlow(id, name) {
  var url = "/flows";
  var description = "Create flow " + name + " with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
}

function deleteFlow(id, name) {
  var url = "/flows/" + id;
  var description = "Delete flow with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateFlow(id, name) {
  var url = "/flows/" + id;
  var description = "Update flow " + name + " with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
}

function getFlow(id, name) {
  var url = "/flows/" + id;
  var description = "Get flow " + name + " with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingFlow(id, name) {
  var url = "/flows";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Flow...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyFlowExists(id, name) {
  var url = "/flows";
  var description = "Verify Flow exists";
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

function verifyFlowDoesNotExist(id, name) {
  var url = "/flows";
  var description = "Verify Flow does not exist";
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

function tryToDeleteANonExistingFlow(id, name) {
  var url = "/flows/" + id;
  var description = "Verify we cannot delete non-existing Flow";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedFlow(id, name) {
  var expectedDesc = "Create flow " + name + " with id " + id;
  return bp.EventSet("matchAddedFlow", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFlowAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ flow\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ flow\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create flow") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForFlowAdded(id, name) {
  var expectedDesc = "Create flow " + name + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedFlow(id, name) {
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

function createFolder(id, name) {
  var url = "/folders";
  var description = "Create folder " + name + " with id " + id;
  var body = {
    "name": String(name),
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
}

function deleteFolder(id, name) {
  var url = "/folders/" + id;
  var description = "Delete folder with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateFolder(id, name) {
  var url = "/folders/" + id;
  var description = "Update folder " + name + " with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
}

function getFolder(id, name) {
  var url = "/folders/" + id;
  var description = "Get folder " + name + " with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingFolder(id, name) {
  var url = "/folders";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Folder...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyFolderExists(id, name) {
  var url = "/folders";
  var description = "Verify Folder exists";
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

function verifyFolderDoesNotExist(id, name) {
  var url = "/folders";
  var description = "Verify Folder does not exist";
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

function tryToDeleteANonExistingFolder(id, name) {
  var url = "/folders/" + id;
  var description = "Verify we cannot delete non-existing Folder";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedFolder(id, name) {
  var expectedDesc = "Create folder " + name + " with id " + id;
  return bp.EventSet("matchAddedFolder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFolderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ folder\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ folder\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create folder") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForFolderAdded(id, name) {
  var expectedDesc = "Create folder " + name + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedFolder(id, name) {
  var expectedDesc = "Delete folder with id " + id;
  return bp.EventSet("matchDeletedFolder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFolderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ folder\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ folder\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: operation ----

function createOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var url = "/operations";
  var description = "Create operation " + name + " with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
}

function getOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var url = "/operations/" + id;
  var description = "Retrieve operation with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var url = "/operations/" + id;
  var description = "Update operation with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
    }
  });
}

function deleteOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var url = "/operations/" + id;
  var description = "Delete operation with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var url = "/operations";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Operation...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyOperationExists(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var url = "/operations";
  var description = "Verify Operation exists";
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

function verifyOperationDoesNotExist(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var url = "/operations";
  var description = "Verify Operation does not exist";
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

function tryToDeleteANonExistingOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var url = "/operations/" + id;
  var description = "Verify we cannot delete non-existing Operation";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var expectedDesc = "Create operation " + name + " with id " + id;
  return bp.EventSet("matchAddedOperation", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOperationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ operation\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ operation\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create operation") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForOperationAdded(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
  var expectedDesc = "Create operation " + name + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created) {
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
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function getRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Get relation with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Update relation with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function deleteRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Delete relation with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Relation...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRelationExists(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "Verify Relation exists";
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
  var description = "Verify Relation does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRelation(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var expectedDesc = "Create relation with collection_many " + collection_many + " and collection_one " + collection_one;
  return bp.EventSet("matchAddedRelation", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create relation") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForRelationAdded(collection_many, collection_one, field_many, field_one, id, junction_field) {
  var expectedDesc = "Create relation with collection_many " + collection_many + " and collection_one " + collection_one;
  waitFor(matchesDescription(expectedDesc));
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
  var description = "Retrieve revision with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyRevisionExists(id) {
  var url = "/revisions";
  var description = "Verify Revision exists";
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
  var description = "Verify Revision does not exist";
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

function createRole(id) {
  var url = "/roles";
  var description = "Create role {name} with id " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function deleteRole(id) {
  var url = "/roles/" + id;
  var description = "Delete role with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateRole(id) {
  var url = "/roles/" + id;
  var description = "Update role {name} with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function getRole(id) {
  var url = "/roles/" + id;
  var description = "Get role with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRole(id) {
  var url = "/roles";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Role...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRoleExists(id) {
  var url = "/roles";
  var description = "Verify Role exists";
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

function verifyRoleDoesNotExist(id) {
  var url = "/roles";
  var description = "Verify Role does not exist";
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

function tryToDeleteANonExistingRole(id) {
  var url = "/roles/" + id;
  var description = "Verify we cannot delete non-existing Role";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRole(id) {
  var expectedDesc = "Create role {name} with id " + id;
  return bp.EventSet("matchAddedRole", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ role\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ role\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create role") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForRoleAdded(id) {
  var expectedDesc = "Create role {name} with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRole(id) {
  var expectedDesc = "Delete role with id " + id;
  return bp.EventSet("matchDeletedRole", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: webhook ----

function createWebhook(id) {
  var url = "/webhooks";
  var description = "Create webhook {name}";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function deleteWebhook(id) {
  var url = "/webhooks/" + id;
  var description = "Delete webhook " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateWebhook(id) {
  var url = "/webhooks/" + id;
  var description = "Update webhook " + id + " with name {name}";
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function getWebhook(id) {
  var url = "/webhooks/" + id;
  var description = "Get webhook " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingWebhook(id) {
  var url = "/webhooks";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Webhook...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyWebhookExists(id) {
  var url = "/webhooks";
  var description = "Verify Webhook exists";
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

function verifyWebhookDoesNotExist(id) {
  var url = "/webhooks";
  var description = "Verify Webhook does not exist";
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

function tryToDeleteANonExistingWebhook(id) {
  var url = "/webhooks/" + id;
  var description = "Verify we cannot delete non-existing Webhook";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedWebhook(id) {
  var expectedDesc = "Create webhook {name}";
  return bp.EventSet("matchAddedWebhook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create webhook") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForWebhookAdded(id) {
  var expectedDesc = "Create webhook {name}";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedWebhook(id) {
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

function getAsset(download, id, key, transforms) {
  var url = "/assets/" + id;
  var description = "Get an Asset with id " + id + " and key " + key;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyAssetExists(download, id, key, transforms) {
  var url = "/assets";
  var description = "Verify Asset exists";
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

function verifyAssetDoesNotExist(download, id, key, transforms) {
  var url = "/assets";
  var description = "Verify Asset does not exist";
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

// ---- Entity: settings ----

function getSettings() {
  var url = "/settings";
  var description = "Retrieve settings";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateSetting() {
  var url = "/settings";
  var description = "Update settings";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function verifySettingsExists() {
  var url = "/settings";
  var description = "Verify Settings exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Settings exists");
          }
        }
      }
      return pvg.fail("Expected Settings to exist but it does not");
    }
  });
}

function verifySettingsDoesNotExist() {
  var url = "/settings";
  var description = "Verify Settings does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Settings to not exist but it does");
          }
        }
      }
      return pvg.success("Settings does not exist");
    }
  });
}
