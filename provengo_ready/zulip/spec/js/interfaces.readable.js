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

// ---- Entity: attachment ----

function getAttachments(attachment_id) {
  var url = "/attachments";
  var description = "Get attachments";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function removeAttachment(attachment_id) {
  var url = "/attachments/" + attachment_id;
  var description = "Delete attachment with id " + attachment_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function verifyAttachmentExists(attachment_id) {
  var url = "/attachments";
  var description = "Verify Attachment exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].attachment_id) === String(attachment_id)) {
            return pvg.success("Attachment exists");
          }
        }
      }
      return pvg.fail("Expected Attachment to exist but it does not");
    }
  });
}

function verifyAttachmentDoesNotExist(attachment_id) {
  var url = "/attachments";
  var description = "Verify Attachment does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].attachment_id) === String(attachment_id)) {
            return pvg.fail("Expected Attachment to not exist but it does");
          }
        }
      }
      return pvg.success("Attachment does not exist");
    }
  });
}

function tryToDeleteANonExistingAttachment(attachment_id) {
  var url = "/attachments/" + attachment_id;
  var description = "Verify we cannot delete non-existing Attachment";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedAttachment(attachment_id) {
  var expectedDesc = "Delete attachment with id " + attachment_id;
  return bp.EventSet("matchDeletedAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ attachment\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ attachment\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["attachment_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user ----

function createUser(email, user_id) {
  var url = "/users";
  var description = "Create user with email " + email + ", full_name {full_name}";
  var body = {
    "user_id": String(user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
}

function getUsers(email, user_id) {
  var url = "/users";
  var description = "Get users";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function getUser(email, user_id) {
  var url = "/users/" + user_id;
  var description = "Get user with id " + user_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function getUserByEmail(email, user_id) {
  var url = "/users/" + email;
  var description = "Get user with email " + email;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateUser(email, user_id) {
  var url = "/users/" + user_id;
  var description = "Update user with id " + user_id;
  var body = {
    "user_id": String(user_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
}

function updateUserByEmail(email, user_id) {
  var url = "/users/" + email;
  var description = "Update user with email " + email;
  var body = {
    "user_id": String(user_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
}

function deactivateUser(email, user_id) {
  var url = "/users/" + user_id;
  var description = "Deactivate user with id " + user_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function deactivateOwnUser(email, user_id) {
  var url = "/users/me";
  var description = "Deactivate own user";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function reactivateUser(email, user_id) {
  var url = "/users/" + user_id + "/reactivate";
  var description = "Reactivate user with id " + user_id;
  var body = {
    "user_id": String(user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
}

function tryToAddExistingUser(email, user_id) {
  var url = "/users";
  var body = {
    "user_id": String(user_id)
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(email, user_id) {
  var url = "/users";
  var description = "Verify User exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_id) === String(user_id)) {
            return pvg.success("User exists");
          }
        }
      }
      return pvg.fail("Expected User to exist but it does not");
    }
  });
}

function verifyUserDoesNotExist(email, user_id) {
  var url = "/users";
  var description = "Verify User does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_id) === String(user_id)) {
            return pvg.fail("Expected User to not exist but it does");
          }
        }
      }
      return pvg.success("User does not exist");
    }
  });
}

function tryToDeleteANonExistingUser(email, user_id) {
  var url = "/users/" + user_id;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(email, user_id) {
  var expectedDesc = "Create user with email " + email + ", full_name {full_name}";
  return bp.EventSet("matchAddedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ with\ email\ (.+),\ full_name\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ with\ email\ (.+),\ full_name\ (.+)$/);
  var captures = m.slice(1);
  var names = ["email", "full_name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserAddedEvent(keyVal) {
  return bp.EventSet("AddUser:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.user_id) === String(keyVal);
  });
}

function matchAnyUserAdded() {
  return bp.EventSet("matchAnyUserAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user") > -1 && e.data.parameters.user_id !== undefined);
  });
}

function waitForUserAdded(email, user_id) {
  var expectedDesc = "Create user with email " + email + ", full_name {full_name}";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUser(email, user_id) {
  var expectedDesc = "Deactivate user with id " + user_id;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Deactivate\ user\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Deactivate\ user\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["user_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user status ----

function updateStatusForUser(user_id) {
  var url = "/users/" + user_id + "/status";
  var description = "Update status for user with id " + user_id;
  var body = {
    "user_id": String(user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
}

function getUserStatus(user_id) {
  var url = "/users/" + user_id + "/status";
  var description = "Get status for user with id " + user_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateStatus(user_id) {
  var url = "/users/me/status";
  var description = "Update own status";
  var body = {
    "user_id": String(user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
}

function verifyUserStatusExists(user_id) {
  var url = "/users";
  var description = "Verify UserStatus exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_id) === String(user_id)) {
            return pvg.success("UserStatus exists");
          }
        }
      }
      return pvg.fail("Expected UserStatus to exist but it does not");
    }
  });
}

function verifyUserStatusDoesNotExist(user_id) {
  var url = "/users";
  var description = "Verify UserStatus does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_id) === String(user_id)) {
            return pvg.fail("Expected UserStatus to not exist but it does");
          }
        }
      }
      return pvg.success("UserStatus does not exist");
    }
  });
}

// ---- Entity: user presence ----

function getUserPresence(user_id_or_email) {
  var url = "/users/" + user_id_or_email + "/presence";
  var description = "Get presence for user " + user_id_or_email;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updatePresence(user_id_or_email) {
  var url = "/users/me/presence";
  var description = "Update own presence";
  var body = {
    "user_id_or_email": String(user_id_or_email),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_id_or_email: String(user_id_or_email)
    }
  });
}

function verifyUserPresenceExists(user_id_or_email) {
  var url = "/users";
  var description = "Verify UserPresence exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_id_or_email) === String(user_id_or_email)) {
            return pvg.success("UserPresence exists");
          }
        }
      }
      return pvg.fail("Expected UserPresence to exist but it does not");
    }
  });
}

function verifyUserPresenceDoesNotExist(user_id_or_email) {
  var url = "/users";
  var description = "Verify UserPresence does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_id_or_email) === String(user_id_or_email)) {
            return pvg.fail("Expected UserPresence to not exist but it does");
          }
        }
      }
      return pvg.success("UserPresence does not exist");
    }
  });
}

// ---- Entity: alert words ----

function getAlertWords() {
  var url = "/users/me/alert_words";
  var description = "Get all alert words";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function addAlertWords() {
  var url = "/users/me/alert_words";
  var description = "Add alert words {alert_words}";
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

function removeAlertWords() {
  var url = "/users/me/alert_words";
  var description = "Remove alert words {alert_words}";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserAlertWords() {
  var url = "/users/me/alert_words";
  var body = {
  };
  var description = "Verify that we cannot add another UserAlertWords...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserAlertWordsExists() {
  var url = "/users/me/alert_words";
  var description = "Verify UserAlertWords exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("UserAlertWords exists");
          }
        }
      }
      return pvg.fail("Expected UserAlertWords to exist but it does not");
    }
  });
}

function verifyUserAlertWordsDoesNotExist() {
  var url = "/users/me/alert_words";
  var description = "Verify UserAlertWords does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected UserAlertWords to not exist but it does");
          }
        }
      }
      return pvg.success("UserAlertWords does not exist");
    }
  });
}

function tryToDeleteANonExistingUserAlertWords() {
  var url = "/users/me/alert_words";
  var description = "Verify we cannot delete non-existing UserAlertWords";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserAlertWords() {
  var expectedDesc = "Add alert words {alert_words}";
  return bp.EventSet("matchAddedUserAlertWords", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserAlertWordsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ alert\ words\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ alert\ words\ (.+)$/);
  var captures = m.slice(1);
  var names = ["alert_words"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserAlertWordsAddedEvent(keyVal) {
  return bp.EventSet("AddUserAlertWords:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserAlertWordsAdded() {
  return bp.EventSet("matchAnyUserAlertWordsAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create alert words") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForUserAlertWordsAdded() {
  var expectedDesc = "Add alert words {alert_words}";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserAlertWords() {
  var expectedDesc = "Remove alert words {alert_words}";
  return bp.EventSet("matchDeletedUserAlertWords", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserAlertWordsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ alert\ words\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ alert\ words\ (.+)$/);
  var captures = m.slice(1);
  var names = ["alert_words"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: muted user ----

function muteUser(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Mute user with id " + muted_user_id;
  var body = {
    "muted_user_id": String(muted_user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      muted_user_id: String(muted_user_id)
    }
  });
}

function unmuteUser(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Unmute user with id " + muted_user_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserMute(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var body = {
    "muted_user_id": String(muted_user_id)
  };
  var description = "Verify that we cannot add another UserMute...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserMuteExists(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Verify UserMute exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].muted_user_id) === String(muted_user_id)) {
            return pvg.success("UserMute exists");
          }
        }
      }
      return pvg.fail("Expected UserMute to exist but it does not");
    }
  });
}

function verifyUserMuteDoesNotExist(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Verify UserMute does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].muted_user_id) === String(muted_user_id)) {
            return pvg.fail("Expected UserMute to not exist but it does");
          }
        }
      }
      return pvg.success("UserMute does not exist");
    }
  });
}

function tryToDeleteANonExistingUserMute(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Verify we cannot delete non-existing UserMute";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserMute(muted_user_id) {
  var expectedDesc = "Mute user with id " + muted_user_id;
  return bp.EventSet("matchAddedUserMute", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserMuteAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Mute\ user\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Mute\ user\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["muted_user_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserMuteAddedEvent(keyVal) {
  return bp.EventSet("AddUserMute:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.muted_user_id) === String(keyVal);
  });
}

function matchAnyUserMuteAdded() {
  return bp.EventSet("matchAnyUserMuteAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create muted user") > -1 && e.data.parameters.muted_user_id !== undefined);
  });
}

function waitForUserMuteAdded(muted_user_id) {
  var expectedDesc = "Mute user with id " + muted_user_id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserMute(muted_user_id) {
  var expectedDesc = "Unmute user with id " + muted_user_id;
  return bp.EventSet("matchDeletedUserMute", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserMuteDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unmute\ user\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Unmute\ user\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["muted_user_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: APNs device token ----

function addApnsToken() {
  var url = "/users/me/apns_device_token";
  var description = "Add APNs device token {token}";
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

function removeApnsToken() {
  var url = "/users/me/apns_device_token";
  var description = "Remove APNs device token {token}";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserApnsDeviceToken() {
  var url = "/users/me/apns_device_token";
  var body = {
  };
  var description = "Verify that we cannot add another UserApnsDeviceToken...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserApnsDeviceTokenExists() {
  var url = "/users/me/apns_device_token";
  var description = "Verify UserApnsDeviceToken exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("UserApnsDeviceToken exists");
          }
        }
      }
      return pvg.fail("Expected UserApnsDeviceToken to exist but it does not");
    }
  });
}

function verifyUserApnsDeviceTokenDoesNotExist() {
  var url = "/users/me/apns_device_token";
  var description = "Verify UserApnsDeviceToken does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected UserApnsDeviceToken to not exist but it does");
          }
        }
      }
      return pvg.success("UserApnsDeviceToken does not exist");
    }
  });
}

function tryToDeleteANonExistingUserApnsDeviceToken() {
  var url = "/users/me/apns_device_token";
  var description = "Verify we cannot delete non-existing UserApnsDeviceToken";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserApnsDeviceToken() {
  var expectedDesc = "Add APNs device token {token}";
  return bp.EventSet("matchAddedUserApnsDeviceToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserApnsDeviceTokenAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ APNs\ device\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ APNs\ device\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserApnsDeviceTokenAddedEvent(keyVal) {
  return bp.EventSet("AddUserApnsDeviceToken:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserApnsDeviceTokenAdded() {
  return bp.EventSet("matchAnyUserApnsDeviceTokenAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create APNs device token") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForUserApnsDeviceTokenAdded() {
  var expectedDesc = "Add APNs device token {token}";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserApnsDeviceToken() {
  var expectedDesc = "Remove APNs device token {token}";
  return bp.EventSet("matchDeletedUserApnsDeviceToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserApnsDeviceTokenDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ APNs\ device\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ APNs\ device\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: FCM registration token ----

function addFcmToken() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Add FCM registration token {token}";
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

function removeFcmToken() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Remove FCM registration token {token}";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserFcmToken() {
  var url = "/users/me/android_gcm_reg_id";
  var body = {
  };
  var description = "Verify that we cannot add another UserFcmToken...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserFcmTokenExists() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Verify UserFcmToken exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("UserFcmToken exists");
          }
        }
      }
      return pvg.fail("Expected UserFcmToken to exist but it does not");
    }
  });
}

function verifyUserFcmTokenDoesNotExist() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Verify UserFcmToken does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected UserFcmToken to not exist but it does");
          }
        }
      }
      return pvg.success("UserFcmToken does not exist");
    }
  });
}

function tryToDeleteANonExistingUserFcmToken() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Verify we cannot delete non-existing UserFcmToken";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserFcmToken() {
  var expectedDesc = "Add FCM registration token {token}";
  return bp.EventSet("matchAddedUserFcmToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserFcmTokenAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ FCM\ registration\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ FCM\ registration\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserFcmTokenAddedEvent(keyVal) {
  return bp.EventSet("AddUserFcmToken:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserFcmTokenAdded() {
  return bp.EventSet("matchAnyUserFcmTokenAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create FCM registration token") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForUserFcmTokenAdded() {
  var expectedDesc = "Add FCM registration token {token}";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserFcmToken() {
  var expectedDesc = "Remove FCM registration token {token}";
  return bp.EventSet("matchDeletedUserFcmToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserFcmTokenDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ FCM\ registration\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ FCM\ registration\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: typing status ----

function setTypingStatus() {
  var url = "/typing";
  var description = "Set typing status with op {op}";
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

// ---- Entity: message typing status ----

function setTypingStatusForMessageEdit(message_id) {
  var url = "/messages/" + message_id + "/typing";
  var description = "Set typing status for message editing with op {op} on message " + message_id;
  var body = {
    "message_id": String(message_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      , message_id: String(message_id)
    }
  });
}

// ---- Entity: user group ----

function createUserGroup(user_group_id, user_id) {
  var url = "/user_groups/create";
  var description = "Create user group {name}";
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
      , user_id: String(user_id)
    }
  });
}

function getUserGroups(user_group_id, user_id) {
  var url = "/user_groups";
  var description = "Get user groups";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateUserGroup(user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id;
  var description = "Update user group with id " + user_group_id;
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
      , user_id: String(user_id)
    }
  });
}

function deactivateUserGroup(user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id + "/deactivate";
  var description = "Deactivate user group with id " + user_group_id;
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
      , user_id: String(user_id)
    }
  });
}

function getUserGroupMembers(user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id + "/members";
  var description = "Get members of user group with id " + user_group_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateUserGroupMembers(user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id + "/members";
  var description = "Update members of user group with id " + user_group_id;
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
      , user_id: String(user_id)
    }
  });
}

function getUserGroupSubgroups(user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id + "/subgroups";
  var description = "Get subgroups of user group with id " + user_group_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateUserGroupSubgroups(user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id + "/subgroups";
  var description = "Update subgroups of user group with id " + user_group_id;
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
      , user_id: String(user_id)
    }
  });
}

function getIsUserGroupMember(user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id + "/members/" + user_id;
  var description = "Get membership status of user " + user_id + " in user group " + user_group_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserGroup(user_group_id, user_id) {
  var url = "/user_groups/create";
  var body = {
    "user_group_id": String(user_group_id)
  };
  var description = "Verify that we cannot add another UserGroup...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserGroupExists(user_group_id, user_id) {
  var url = "/user_groups/create";
  var description = "Verify UserGroup exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_group_id) === String(user_group_id)) {
            return pvg.success("UserGroup exists");
          }
        }
      }
      return pvg.fail("Expected UserGroup to exist but it does not");
    }
  });
}

function verifyUserGroupDoesNotExist(user_group_id, user_id) {
  var url = "/user_groups/create";
  var description = "Verify UserGroup does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_group_id) === String(user_group_id)) {
            return pvg.fail("Expected UserGroup to not exist but it does");
          }
        }
      }
      return pvg.success("UserGroup does not exist");
    }
  });
}

function tryToDeleteANonExistingUserGroup(user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id + "/deactivate";
  var description = "Verify we cannot delete non-existing UserGroup";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserGroup(user_group_id, user_id) {
  var expectedDesc = "Create user group {name}";
  return bp.EventSet("matchAddedUserGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserGroupAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserGroupAddedEvent(keyVal) {
  return bp.EventSet("AddUserGroup:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.user_group_id) === String(keyVal);
  });
}

function matchAnyUserGroupAdded() {
  return bp.EventSet("matchAnyUserGroupAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user group") > -1 && e.data.parameters.user_group_id !== undefined);
  });
}

function waitForUserGroupAdded(user_group_id, user_id) {
  var expectedDesc = "Create user group {name}";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserGroup(user_group_id, user_id) {
  var expectedDesc = "Deactivate user group with id " + user_group_id;
  return bp.EventSet("matchDeletedUserGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Deactivate\ user\ group\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Deactivate\ user\ group\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["user_group_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: message ----

function getMessage(message_id) {
  var url = "/messages/" + message_id;
  var description = "Fetch message with id " + message_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateMessage(message_id) {
  var url = "/messages/" + message_id;
  var description = "Edit message " + message_id + " with topic {topic} and content {content}";
  var body = {
    "message_id": String(message_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      message_id: String(message_id)
    }
  });
}

function deleteMessage(message_id) {
  var url = "/messages/" + message_id;
  var description = "Delete message with id " + message_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function verifyMessageExists(message_id) {
  var url = "/messages";
  var description = "Verify Message exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.success("Message exists");
          }
        }
      }
      return pvg.fail("Expected Message to exist but it does not");
    }
  });
}

function verifyMessageDoesNotExist(message_id) {
  var url = "/messages";
  var description = "Verify Message does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.fail("Expected Message to not exist but it does");
          }
        }
      }
      return pvg.success("Message does not exist");
    }
  });
}

function tryToDeleteANonExistingMessage(message_id) {
  var url = "/messages/" + message_id;
  var description = "Verify we cannot delete non-existing Message";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedMessage(message_id) {
  var expectedDesc = "Delete message with id " + message_id;
  return bp.EventSet("matchDeletedMessage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMessageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ message\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ message\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["message_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: message history ----

function getMessageHistory(message_id) {
  var url = "/messages/" + message_id + "/history";
  var description = "Get edit history for message " + message_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyMessageHistoryExists(message_id) {
  var url = "/messages";
  var description = "Verify MessageHistory exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.success("MessageHistory exists");
          }
        }
      }
      return pvg.fail("Expected MessageHistory to exist but it does not");
    }
  });
}

function verifyMessageHistoryDoesNotExist(message_id) {
  var url = "/messages";
  var description = "Verify MessageHistory does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.fail("Expected MessageHistory to not exist but it does");
          }
        }
      }
      return pvg.success("MessageHistory does not exist");
    }
  });
}

// ---- Entity: message reaction ----

function addReaction(emoji_code, emoji_name, message_id, reaction_type) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Add reaction " + emoji_name + " to message " + message_id;
  var body = {
    "message_id": String(message_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      message_id: String(message_id)
    }
  });
}

function removeReaction(emoji_code, emoji_name, message_id, reaction_type) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Remove reaction " + emoji_name + " from message " + message_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingMessageReaction(emoji_code, emoji_name, message_id, reaction_type) {
  var url = "/messages/" + message_id + "/reactions";
  var body = {
    "message_id": String(message_id)
  };
  var description = "Verify that we cannot add another MessageReaction...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMessageReactionExists(emoji_code, emoji_name, message_id, reaction_type) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Verify MessageReaction exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.success("MessageReaction exists");
          }
        }
      }
      return pvg.fail("Expected MessageReaction to exist but it does not");
    }
  });
}

function verifyMessageReactionDoesNotExist(emoji_code, emoji_name, message_id, reaction_type) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Verify MessageReaction does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.fail("Expected MessageReaction to not exist but it does");
          }
        }
      }
      return pvg.success("MessageReaction does not exist");
    }
  });
}

function tryToDeleteANonExistingMessageReaction(emoji_code, emoji_name, message_id, reaction_type) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Verify we cannot delete non-existing MessageReaction";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedMessageReaction(emoji_code, emoji_name, message_id, reaction_type) {
  var expectedDesc = "Add reaction " + emoji_name + " to message " + message_id;
  return bp.EventSet("matchAddedMessageReaction", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMessageReactionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ reaction\ (.+)\ to\ message\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ reaction\ (.+)\ to\ message\ (.+)$/);
  var captures = m.slice(1);
  var names = ["emoji_name", "message_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMessageReactionAddedEvent(keyVal) {
  return bp.EventSet("AddMessageReaction:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.message_id) === String(keyVal);
  });
}

function matchAnyMessageReactionAdded() {
  return bp.EventSet("matchAnyMessageReactionAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create message reaction") > -1 && e.data.parameters.message_id !== undefined);
  });
}

function waitForMessageReactionAdded(emoji_code, emoji_name, message_id, reaction_type) {
  var expectedDesc = "Add reaction " + emoji_name + " to message " + message_id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedMessageReaction(emoji_code, emoji_name, message_id, reaction_type) {
  var expectedDesc = "Remove reaction " + emoji_name + " from message " + message_id;
  return bp.EventSet("matchDeletedMessageReaction", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMessageReactionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ reaction\ (.+)\ from\ message\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ reaction\ (.+)\ from\ message\ (.+)$/);
  var captures = m.slice(1);
  var names = ["emoji_name", "message_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: message flag ----

function updateMessageFlags(anchor, flag, include_anchor, messages, narrow, num_after, num_before, op) {
  var url = "/messages/flags";
  var description = "Update flags " + flag + " with operation " + op + " on messages " + messages;
  var body = {
    "messages": String(messages),
    "op": String(op),
    "flag": String(flag),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function updateMessageFlagsForNarrow(anchor, flag, include_anchor, messages, narrow, num_after, num_before, op) {
  var url = "/messages/flags/narrow";
  var description = "Update flags " + flag + " with operation " + op + " for narrow anchored at " + anchor;
  var body = {
    "anchor": String(anchor),
    "include_anchor": String(include_anchor),
    "num_before": String(num_before),
    "num_after": String(num_after),
    "narrow": String(narrow),
    "op": String(op),
    "flag": String(flag),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

// ---- Entity: message read receipt ----

function getReadReceipts(message_id) {
  var url = "/messages/" + message_id + "/read_receipts";
  var description = "Get read receipts for message " + message_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyMessageReadReceiptExists(message_id) {
  var url = "/messages";
  var description = "Verify MessageReadReceipt exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.success("MessageReadReceipt exists");
          }
        }
      }
      return pvg.fail("Expected MessageReadReceipt to exist but it does not");
    }
  });
}

function verifyMessageReadReceiptDoesNotExist(message_id) {
  var url = "/messages";
  var description = "Verify MessageReadReceipt does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.fail("Expected MessageReadReceipt to not exist but it does");
          }
        }
      }
      return pvg.success("MessageReadReceipt does not exist");
    }
  });
}

// ---- Entity: message report ----

function reportMessage(description, message_id, report_type) {
  var url = "/messages/" + message_id + "/report";
  var description = "Report message " + message_id + " with type " + report_type;
  var body = {
    "message_id": String(message_id),
    "report_type": String(report_type),
    "description": String(description),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , message_id: String(message_id)
    }
  });
}

function tryToAddExistingMessageReport(description, message_id, report_type) {
  var url = "/messages/" + message_id + "/report";
  var body = {
  };
  var description = "Verify that we cannot add another MessageReport...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMessageReportExists(description, message_id, report_type) {
  var url = "/messages/" + message_id + "/report";
  var description = "Verify MessageReport exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.success("MessageReport exists");
          }
        }
      }
      return pvg.fail("Expected MessageReport to exist but it does not");
    }
  });
}

function verifyMessageReportDoesNotExist(description, message_id, report_type) {
  var url = "/messages/" + message_id + "/report";
  var description = "Verify MessageReport does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.fail("Expected MessageReport to not exist but it does");
          }
        }
      }
      return pvg.success("MessageReport does not exist");
    }
  });
}

function matchAddedMessageReport(description, message_id, report_type) {
  var expectedDesc = "Report message " + message_id + " with type " + report_type;
  return bp.EventSet("matchAddedMessageReport", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMessageReportAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Report\ message\ (.+)\ with\ type\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Report\ message\ (.+)\ with\ type\ (.+)$/);
  var captures = m.slice(1);
  var names = ["message_id", "report_type"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMessageReportAddedEvent(keyVal) {
  return bp.EventSet("AddMessageReport:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMessageReportAdded() {
  return bp.EventSet("matchAnyMessageReportAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create message report") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForMessageReportAdded(description, message_id, report_type) {
  var expectedDesc = "Report message " + message_id + " with type " + report_type;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: message ----

function sendMessage(content, local_id, queue_id, read_by_sender, to, topic, type) {
  var url = "/messages";
  var description = "Send message of type " + type + " to " + to + " with content " + content;
  var body = {
    "type": String(type),
    "to": String(to),
    "content": String(content),
    "topic": String(topic),
    "queue_id": String(queue_id),
    "local_id": String(local_id),
    "read_by_sender": String(read_by_sender),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , local_id: String(local_id)
      , queue_id: String(queue_id)
    }
  });
}

function tryToAddExistingMessageSend(content, local_id, queue_id, read_by_sender, to, topic, type) {
  var url = "/messages";
  var body = {
  };
  var description = "Verify that we cannot add another MessageSend...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMessageSendExists(content, local_id, queue_id, read_by_sender, to, topic, type) {
  var url = "/messages";
  var description = "Verify MessageSend exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].local_id) === String(local_id)) {
            return pvg.success("MessageSend exists");
          }
        }
      }
      return pvg.fail("Expected MessageSend to exist but it does not");
    }
  });
}

function verifyMessageSendDoesNotExist(content, local_id, queue_id, read_by_sender, to, topic, type) {
  var url = "/messages";
  var description = "Verify MessageSend does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].local_id) === String(local_id)) {
            return pvg.fail("Expected MessageSend to not exist but it does");
          }
        }
      }
      return pvg.success("MessageSend does not exist");
    }
  });
}

function matchAddedMessageSend(content, local_id, queue_id, read_by_sender, to, topic, type) {
  var expectedDesc = "Send message of type " + type + " to " + to + " with content " + content;
  return bp.EventSet("matchAddedMessageSend", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMessageSendAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Send\ message\ of\ type\ (.+)\ to\ (.+)\ with\ content\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Send\ message\ of\ type\ (.+)\ to\ (.+)\ with\ content\ (.+)$/);
  var captures = m.slice(1);
  var names = ["type", "to", "content"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMessageSendAddedEvent(keyVal) {
  return bp.EventSet("AddMessageSend:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMessageSendAdded() {
  return bp.EventSet("matchAnyMessageSendAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create message") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForMessageSendAdded(content, local_id, queue_id, read_by_sender, to, topic, type) {
  var expectedDesc = "Send message of type " + type + " to " + to + " with content " + content;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: mark all as read ----

function markAllAsRead() {
  var url = "/mark_all_as_read";
  var description = "Mark all messages as read";
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

function tryToAddExistingMarkAllAsRead() {
  var url = "/mark_all_as_read";
  var body = {
  };
  var description = "Verify that we cannot add another MarkAllAsRead...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMarkAllAsReadExists() {
  var url = "/mark_all_as_read";
  var description = "Verify MarkAllAsRead exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("MarkAllAsRead exists");
          }
        }
      }
      return pvg.fail("Expected MarkAllAsRead to exist but it does not");
    }
  });
}

function verifyMarkAllAsReadDoesNotExist() {
  var url = "/mark_all_as_read";
  var description = "Verify MarkAllAsRead does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected MarkAllAsRead to not exist but it does");
          }
        }
      }
      return pvg.success("MarkAllAsRead does not exist");
    }
  });
}

function matchAddedMarkAllAsRead() {
  var expectedDesc = "Mark all messages as read";
  return bp.EventSet("matchAddedMarkAllAsRead", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMarkAllAsReadAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Mark\ all\ messages\ as\ read$/));
  var m = ev.data.parameters.description.match(/^Mark\ all\ messages\ as\ read$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMarkAllAsReadAddedEvent(keyVal) {
  return bp.EventSet("AddMarkAllAsRead:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMarkAllAsReadAdded() {
  return bp.EventSet("matchAnyMarkAllAsReadAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create mark all as read") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForMarkAllAsReadAdded() {
  var expectedDesc = "Mark all messages as read";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: mark stream as read ----

function markStreamAsRead(stream_id) {
  var url = "/mark_stream_as_read";
  var description = "Mark messages in stream " + stream_id + " as read";
  var body = {
    "stream_id": String(stream_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , stream_id: String(stream_id)
    }
  });
}

function tryToAddExistingMarkStreamAsRead(stream_id) {
  var url = "/mark_stream_as_read";
  var body = {
  };
  var description = "Verify that we cannot add another MarkStreamAsRead...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMarkStreamAsReadExists(stream_id) {
  var url = "/mark_stream_as_read";
  var description = "Verify MarkStreamAsRead exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.success("MarkStreamAsRead exists");
          }
        }
      }
      return pvg.fail("Expected MarkStreamAsRead to exist but it does not");
    }
  });
}

function verifyMarkStreamAsReadDoesNotExist(stream_id) {
  var url = "/mark_stream_as_read";
  var description = "Verify MarkStreamAsRead does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.fail("Expected MarkStreamAsRead to not exist but it does");
          }
        }
      }
      return pvg.success("MarkStreamAsRead does not exist");
    }
  });
}

function matchAddedMarkStreamAsRead(stream_id) {
  var expectedDesc = "Mark messages in stream " + stream_id + " as read";
  return bp.EventSet("matchAddedMarkStreamAsRead", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMarkStreamAsReadAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Mark\ messages\ in\ stream\ (.+)\ as\ read$/));
  var m = ev.data.parameters.description.match(/^Mark\ messages\ in\ stream\ (.+)\ as\ read$/);
  var captures = m.slice(1);
  var names = ["stream_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMarkStreamAsReadAddedEvent(keyVal) {
  return bp.EventSet("AddMarkStreamAsRead:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMarkStreamAsReadAdded() {
  return bp.EventSet("matchAnyMarkStreamAsReadAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create mark stream as read") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForMarkStreamAsReadAdded(stream_id) {
  var expectedDesc = "Mark messages in stream " + stream_id + " as read";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: mark topic as read ----

function markTopicAsRead(stream_id, topic_name) {
  var url = "/mark_topic_as_read";
  var description = "Mark messages in topic " + topic_name + " of stream " + stream_id + " as read";
  var body = {
    "stream_id": String(stream_id),
    "topic_name": String(topic_name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , stream_id: String(stream_id)
    }
  });
}

function tryToAddExistingMarkTopicAsRead(stream_id, topic_name) {
  var url = "/mark_topic_as_read";
  var body = {
  };
  var description = "Verify that we cannot add another MarkTopicAsRead...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMarkTopicAsReadExists(stream_id, topic_name) {
  var url = "/mark_topic_as_read";
  var description = "Verify MarkTopicAsRead exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.success("MarkTopicAsRead exists");
          }
        }
      }
      return pvg.fail("Expected MarkTopicAsRead to exist but it does not");
    }
  });
}

function verifyMarkTopicAsReadDoesNotExist(stream_id, topic_name) {
  var url = "/mark_topic_as_read";
  var description = "Verify MarkTopicAsRead does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.fail("Expected MarkTopicAsRead to not exist but it does");
          }
        }
      }
      return pvg.success("MarkTopicAsRead does not exist");
    }
  });
}

function matchAddedMarkTopicAsRead(stream_id, topic_name) {
  var expectedDesc = "Mark messages in topic " + topic_name + " of stream " + stream_id + " as read";
  return bp.EventSet("matchAddedMarkTopicAsRead", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMarkTopicAsReadAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Mark\ messages\ in\ topic\ (.+)\ of\ stream\ (.+)\ as\ read$/));
  var m = ev.data.parameters.description.match(/^Mark\ messages\ in\ topic\ (.+)\ of\ stream\ (.+)\ as\ read$/);
  var captures = m.slice(1);
  var names = ["topic_name", "stream_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMarkTopicAsReadAddedEvent(keyVal) {
  return bp.EventSet("AddMarkTopicAsRead:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMarkTopicAsReadAdded() {
  return bp.EventSet("matchAnyMarkTopicAsReadAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create mark topic as read") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForMarkTopicAsReadAdded(stream_id, topic_name) {
  var expectedDesc = "Mark messages in topic " + topic_name + " of stream " + stream_id + " as read";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: message render ----

function renderMessage(content) {
  var url = "/messages/render";
  var description = "Render message content " + content;
  var body = {
    "content": String(content),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingMessageRender(content) {
  var url = "/messages/render";
  var body = {
  };
  var description = "Verify that we cannot add another MessageRender...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMessageRenderExists(content) {
  var url = "/messages/render";
  var description = "Verify MessageRender exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].content) === String(content)) {
            return pvg.success("MessageRender exists");
          }
        }
      }
      return pvg.fail("Expected MessageRender to exist but it does not");
    }
  });
}

function verifyMessageRenderDoesNotExist(content) {
  var url = "/messages/render";
  var description = "Verify MessageRender does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].content) === String(content)) {
            return pvg.fail("Expected MessageRender to not exist but it does");
          }
        }
      }
      return pvg.success("MessageRender does not exist");
    }
  });
}

function matchAddedMessageRender(content) {
  var expectedDesc = "Render message content " + content;
  return bp.EventSet("matchAddedMessageRender", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMessageRenderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Render\ message\ content\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Render\ message\ content\ (.+)$/);
  var captures = m.slice(1);
  var names = ["content"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMessageRenderAddedEvent(keyVal) {
  return bp.EventSet("AddMessageRender:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMessageRenderAdded() {
  return bp.EventSet("matchAnyMessageRenderAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create message render") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForMessageRenderAdded(content) {
  var expectedDesc = "Render message content " + content;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: user upload ----

function uploadFile(filename) {
  var url = "/user_uploads";
  var description = "Upload a file with filename " + filename;
  var body = {
    "filename": String(filename),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , filename: String(filename)
    }
  });
}

function tryToAddExistingUserUpload(filename) {
  var url = "/user_uploads";
  var body = {
  };
  var description = "Verify that we cannot add another UserUpload...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserUploadExists(filename) {
  var url = "/user_uploads";
  var description = "Verify UserUpload exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].filename) === String(filename)) {
            return pvg.success("UserUpload exists");
          }
        }
      }
      return pvg.fail("Expected UserUpload to exist but it does not");
    }
  });
}

function verifyUserUploadDoesNotExist(filename) {
  var url = "/user_uploads";
  var description = "Verify UserUpload does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].filename) === String(filename)) {
            return pvg.fail("Expected UserUpload to not exist but it does");
          }
        }
      }
      return pvg.success("UserUpload does not exist");
    }
  });
}

function matchAddedUserUpload(filename) {
  var expectedDesc = "Upload a file with filename " + filename;
  return bp.EventSet("matchAddedUserUpload", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserUploadAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Upload\ a\ file\ with\ filename\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Upload\ a\ file\ with\ filename\ (.+)$/);
  var captures = m.slice(1);
  var names = ["filename"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserUploadAddedEvent(keyVal) {
  return bp.EventSet("AddUserUpload:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserUploadAdded() {
  return bp.EventSet("matchAnyUserUploadAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user upload") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForUserUploadAdded(filename) {
  var expectedDesc = "Upload a file with filename " + filename;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: user upload file ----

function getFileTemporaryUrl(filename, realm_id_str) {
  var url = "/user_uploads/" + realm_id_str + "/" + filename;
  var description = "Get temporary URL for uploaded file " + filename + " in realm " + realm_id_str;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyUserUploadFileExists(filename, realm_id_str) {
  var url = "/user_uploads";
  var description = "Verify UserUploadFile exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm_id_str) === String(realm_id_str)) {
            return pvg.success("UserUploadFile exists");
          }
        }
      }
      return pvg.fail("Expected UserUploadFile to exist but it does not");
    }
  });
}

function verifyUserUploadFileDoesNotExist(filename, realm_id_str) {
  var url = "/user_uploads";
  var description = "Verify UserUploadFile does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm_id_str) === String(realm_id_str)) {
            return pvg.fail("Expected UserUploadFile to not exist but it does");
          }
        }
      }
      return pvg.success("UserUploadFile does not exist");
    }
  });
}

// ---- Entity: event queue ----

function registerQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var url = "/register";
  var description = "Register an event queue with options apply_markdown " + apply_markdown + ", client_gravatar " + client_gravatar + ", include_subscribers " + include_subscribers + ", slim_presence " + slim_presence + ", presence_history_limit_days " + presence_history_limit_days + ", event_types " + event_types + ", all_public_streams " + all_public_streams + ", client_capabilities " + client_capabilities + ", fetch_event_types " + fetch_event_types + ", narrow " + narrow;
  var body = {
    "apply_markdown": String(apply_markdown),
    "client_gravatar": String(client_gravatar),
    "include_subscribers": String(include_subscribers),
    "slim_presence": String(slim_presence),
    "presence_history_limit_days": String(presence_history_limit_days),
    "event_types": String(event_types),
    "all_public_streams": String(all_public_streams),
    "client_capabilities": String(client_capabilities),
    "fetch_event_types": String(fetch_event_types),
    "narrow": String(narrow),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , last_event_id: String(last_event_id)
      , queue_id: String(queue_id)
    }
  });
}

function deleteQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var url = "/events";
  var description = "Delete event queue with id " + queue_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getEvents(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var url = "/events";
  var description = "Get events from event queue with last_event_id " + last_event_id + " and dont_block " + dont_block;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var url = "/register";
  var body = {
  };
  var description = "Verify that we cannot add another EventQueue...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyEventQueueExists(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var url = "/register";
  var description = "Verify EventQueue exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].last_event_id) === String(last_event_id)) {
            return pvg.success("EventQueue exists");
          }
        }
      }
      return pvg.fail("Expected EventQueue to exist but it does not");
    }
  });
}

function verifyEventQueueDoesNotExist(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var url = "/register";
  var description = "Verify EventQueue does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].last_event_id) === String(last_event_id)) {
            return pvg.fail("Expected EventQueue to not exist but it does");
          }
        }
      }
      return pvg.success("EventQueue does not exist");
    }
  });
}

function tryToDeleteANonExistingEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var url = "/events";
  var description = "Verify we cannot delete non-existing EventQueue";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var expectedDesc = "Register an event queue with options apply_markdown " + apply_markdown + ", client_gravatar " + client_gravatar + ", include_subscribers " + include_subscribers + ", slim_presence " + slim_presence + ", presence_history_limit_days " + presence_history_limit_days + ", event_types " + event_types + ", all_public_streams " + all_public_streams + ", client_capabilities " + client_capabilities + ", fetch_event_types " + fetch_event_types + ", narrow " + narrow;
  return bp.EventSet("matchAddedEventQueue", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyEventQueueAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Register\ an\ event\ queue\ with\ options\ apply_markdown\ (.+),\ client_gravatar\ (.+),\ include_subscribers\ (.+),\ slim_presence\ (.+),\ presence_history_limit_days\ (.+),\ event_types\ (.+),\ all_public_streams\ (.+),\ client_capabilities\ (.+),\ fetch_event_types\ (.+),\ narrow\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Register\ an\ event\ queue\ with\ options\ apply_markdown\ (.+),\ client_gravatar\ (.+),\ include_subscribers\ (.+),\ slim_presence\ (.+),\ presence_history_limit_days\ (.+),\ event_types\ (.+),\ all_public_streams\ (.+),\ client_capabilities\ (.+),\ fetch_event_types\ (.+),\ narrow\ (.+)$/);
  var captures = m.slice(1);
  var names = ["apply_markdown", "client_gravatar", "include_subscribers", "slim_presence", "presence_history_limit_days", "event_types", "all_public_streams", "client_capabilities", "fetch_event_types", "narrow"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getEventQueueAddedEvent(keyVal) {
  return bp.EventSet("AddEventQueue:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyEventQueueAdded() {
  return bp.EventSet("matchAnyEventQueueAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create event queue") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForEventQueueAdded(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var expectedDesc = "Register an event queue with options apply_markdown " + apply_markdown + ", client_gravatar " + client_gravatar + ", include_subscribers " + include_subscribers + ", slim_presence " + slim_presence + ", presence_history_limit_days " + presence_history_limit_days + ", event_types " + event_types + ", all_public_streams " + all_public_streams + ", client_capabilities " + client_capabilities + ", fetch_event_types " + fetch_event_types + ", narrow " + narrow;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedEventQueue(all_public_streams, apply_markdown, client_capabilities, client_gravatar, dont_block, event_types, fetch_event_types, include_subscribers, last_event_id, narrow, presence_history_limit_days, queue_id, slim_presence) {
  var expectedDesc = "Delete event queue with id " + queue_id;
  return bp.EventSet("matchDeletedEventQueue", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyEventQueueDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ event\ queue\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ event\ queue\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["queue_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: real-time events ----

function postRealTimeEvents(all_public_streams, event_types, narrow) {
  var url = "/real-time";
  var description = "Post real-time events with event_types " + event_types + ", narrow " + narrow + ", all_public_streams " + all_public_streams;
  var body = {
    "event_types": String(event_types),
    "narrow": String(narrow),
    "all_public_streams": String(all_public_streams),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingRealTimeEvents(all_public_streams, event_types, narrow) {
  var url = "/real-time";
  var body = {
  };
  var description = "Verify that we cannot add another RealTimeEvents...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRealTimeEventsExists(all_public_streams, event_types, narrow) {
  var url = "/real-time";
  var description = "Verify RealTimeEvents exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].all_public_streams) === String(all_public_streams) && String(items[i].event_types) === String(event_types) && String(items[i].narrow) === String(narrow)) {
            return pvg.success("RealTimeEvents exists");
          }
        }
      }
      return pvg.fail("Expected RealTimeEvents to exist but it does not");
    }
  });
}

function verifyRealTimeEventsDoesNotExist(all_public_streams, event_types, narrow) {
  var url = "/real-time";
  var description = "Verify RealTimeEvents does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].all_public_streams) === String(all_public_streams) && String(items[i].event_types) === String(event_types) && String(items[i].narrow) === String(narrow)) {
            return pvg.fail("Expected RealTimeEvents to not exist but it does");
          }
        }
      }
      return pvg.success("RealTimeEvents does not exist");
    }
  });
}

function matchAddedRealTimeEvents(all_public_streams, event_types, narrow) {
  var expectedDesc = "Post real-time events with event_types " + event_types + ", narrow " + narrow + ", all_public_streams " + all_public_streams;
  return bp.EventSet("matchAddedRealTimeEvents", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRealTimeEventsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Post\ real\-time\ events\ with\ event_types\ (.+),\ narrow\ (.+),\ all_public_streams\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Post\ real\-time\ events\ with\ event_types\ (.+),\ narrow\ (.+),\ all_public_streams\ (.+)$/);
  var captures = m.slice(1);
  var names = ["event_types", "narrow", "all_public_streams"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRealTimeEventsAddedEvent(keyVal) {
  return bp.EventSet("AddRealTimeEvents:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRealTimeEventsAdded() {
  return bp.EventSet("matchAnyRealTimeEventsAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create real-time events") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForRealTimeEventsAdded(all_public_streams, event_types, narrow) {
  var expectedDesc = "Post real-time events with event_types " + event_types + ", narrow " + narrow + ", all_public_streams " + all_public_streams;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: rest error handling ----

function postRestErrorHandling() {
  var url = "/rest-error-handling";
  var description = "Post rest error handling";
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

function tryToAddExistingRestErrorHandling() {
  var url = "/rest-error-handling";
  var body = {
  };
  var description = "Verify that we cannot add another RestErrorHandling...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRestErrorHandlingExists() {
  var url = "/rest-error-handling";
  var description = "Verify RestErrorHandling exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RestErrorHandling exists");
          }
        }
      }
      return pvg.fail("Expected RestErrorHandling to exist but it does not");
    }
  });
}

function verifyRestErrorHandlingDoesNotExist() {
  var url = "/rest-error-handling";
  var description = "Verify RestErrorHandling does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RestErrorHandling to not exist but it does");
          }
        }
      }
      return pvg.success("RestErrorHandling does not exist");
    }
  });
}

function matchAddedRestErrorHandling() {
  var expectedDesc = "Post rest error handling";
  return bp.EventSet("matchAddedRestErrorHandling", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRestErrorHandlingAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Post\ rest\ error\ handling$/));
  var m = ev.data.parameters.description.match(/^Post\ rest\ error\ handling$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRestErrorHandlingAddedEvent(keyVal) {
  return bp.EventSet("AddRestErrorHandling:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRestErrorHandlingAdded() {
  return bp.EventSet("matchAnyRestErrorHandlingAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create rest error handling") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForRestErrorHandlingAdded() {
  var expectedDesc = "Post rest error handling";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: reminder ----

function createMessageReminder(reminder_id) {
  var url = "/reminders";
  var description = "Create a message reminder with message_id {message_id} scheduled for {scheduled_delivery_timestamp}";
  var body = {
    "reminder_id": String(reminder_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      reminder_id: String(reminder_id)
    }
  });
}

function getReminders(reminder_id) {
  var url = "/reminders";
  var description = "Get reminders";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function deleteReminder(reminder_id) {
  var url = "/reminders/" + reminder_id;
  var description = "Delete reminder with id " + reminder_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingReminder(reminder_id) {
  var url = "/reminders";
  var body = {
    "reminder_id": String(reminder_id)
  };
  var description = "Verify that we cannot add another Reminder...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyReminderExists(reminder_id) {
  var url = "/reminders";
  var description = "Verify Reminder exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].reminder_id) === String(reminder_id)) {
            return pvg.success("Reminder exists");
          }
        }
      }
      return pvg.fail("Expected Reminder to exist but it does not");
    }
  });
}

function verifyReminderDoesNotExist(reminder_id) {
  var url = "/reminders";
  var description = "Verify Reminder does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].reminder_id) === String(reminder_id)) {
            return pvg.fail("Expected Reminder to not exist but it does");
          }
        }
      }
      return pvg.success("Reminder does not exist");
    }
  });
}

function tryToDeleteANonExistingReminder(reminder_id) {
  var url = "/reminders/" + reminder_id;
  var description = "Verify we cannot delete non-existing Reminder";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedReminder(reminder_id) {
  var expectedDesc = "Create a message reminder with message_id {message_id} scheduled for {scheduled_delivery_timestamp}";
  return bp.EventSet("matchAddedReminder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyReminderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ a\ message\ reminder\ with\ message_id\ (.+)\ scheduled\ for\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ a\ message\ reminder\ with\ message_id\ (.+)\ scheduled\ for\ (.+)$/);
  var captures = m.slice(1);
  var names = ["message_id", "scheduled_delivery_timestamp"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getReminderAddedEvent(keyVal) {
  return bp.EventSet("AddReminder:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.reminder_id) === String(keyVal);
  });
}

function matchAnyReminderAdded() {
  return bp.EventSet("matchAnyReminderAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create reminder") > -1 && e.data.parameters.reminder_id !== undefined);
  });
}

function waitForReminderAdded(reminder_id) {
  var expectedDesc = "Create a message reminder with message_id {message_id} scheduled for {scheduled_delivery_timestamp}";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedReminder(reminder_id) {
  var expectedDesc = "Delete reminder with id " + reminder_id;
  return bp.EventSet("matchDeletedReminder", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyReminderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ reminder\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ reminder\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["reminder_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
