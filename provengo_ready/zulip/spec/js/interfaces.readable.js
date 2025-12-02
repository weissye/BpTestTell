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

// ---- Entity: attachment ----

function getAttachments(attachment_id) {
  var url = "/attachments";
  var description = "Get attachments";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function removeAttachment(attachment_id) {
  var url = "/attachments/" + attachment_id;
  var description = "Delete attachment with id " + attachment_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function verifyAttachmentExists(attachment_id) {
  var url = "/attachments";
  var description = "Verify Attachment with attachment_id " + attachment_id + " exists";
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
  var description = "Verify Attachment with attachment_id " + attachment_id + " does not exist";
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
    expectedResponseCodes: [200, 400, 401],
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

function getUser(email, user_id) {
  var url = "/users/" + user_id;
  var description = "Get user with user_id " + user_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createUser(email, user_id) {
  var url = "/users";
  var description = "Create user with email " + email + ", full_name {full_name}";
  var body = {
    "user_id": String(user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_id: String(user_id) }) });
}

function deactivateUser(email, user_id) {
  var url = "/users/" + user_id;
  var description = "Deactivate user with user_id " + user_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateStatusForUser(email, user_id) {
  var url = "/users/" + user_id + "/status";
  var description = "Update status for user " + user_id + " with status_text {status_text}";
  var body = {
    "user_id": String(user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_id: String(user_id) }) });
}

function getUserStatus(email, user_id) {
  var url = "/users/" + user_id + "/status";
  var description = "Get status for user " + user_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function reactivateUser(email, user_id) {
  var url = "/users/" + user_id + "/reactivate";
  var description = "Reactivate user " + user_id;
  var body = {
    "user_id": String(user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_id: String(user_id) }) });
}

function getUserByEmail(email, user_id) {
  var url = "/users/" + email;
  var description = "Get user by email " + email;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateUserByEmail(email, user_id) {
  var url = "/users/" + email;
  var description = "Update user by email " + email;
  var body = {
    "email": String(email),
    "user_id": String(user_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_id: String(user_id) }) });
}

function updateUser(email, user_id) {
  var url = "/users/" + user_id;
  var description = "Update user with user_id " + user_id;
  var body = {
    "user_id": String(user_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      user_id: String(user_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_id: String(user_id) }) });
}

function tryToAddExistingUser(email, user_id) {
  updateUser(email, user_id);
}

function verifyUserExists(email, user_id) {
  var url = "/users";
  var description = "Verify User with user_id " + user_id + " exists";
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
  var description = "Verify User with user_id " + user_id + " does not exist";
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
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedUser(email, user_id) {
  var expectedDesc = "Create user with email " + email + ", full_name {full_name}";
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.user_id !== undefined && e.name.indexOf("Create user") > -1;
  });
}

function waitForUserAdded(email, user_id) {
  var expectedDesc = "Create user with email " + email + ", full_name {full_name}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUser(email, user_id) {
  var expectedDesc = "Deactivate user with user_id " + user_id;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Deactivate\ user\ with\ user_id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Deactivate\ user\ with\ user_id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["user_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user presence ----

function getUserPresence(user_id_or_email) {
  var url = "/users/" + user_id_or_email + "/presence";
  var description = "Get presence for user " + user_id_or_email;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updatePresence(user_id_or_email) {
  var url = "/users/me/presence";
  var description = "Update own presence with status {status}";
  var body = {
    "user_id_or_email": String(user_id_or_email),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      user_id_or_email: String(user_id_or_email)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_id_or_email: String(user_id_or_email) }) });
}

function verifyUserPresenceExists(user_id_or_email) {
  var url = "/users";
  var description = "Verify UserPresence with user_id_or_email " + user_id_or_email + " exists";
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
  var description = "Verify UserPresence with user_id_or_email " + user_id_or_email + " does not exist";
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

// ---- Entity: own user status ----

function updateStatus() {
  var url = "/users/me/status";
  var description = "Update own status with status_text {status_text}";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: alert words ----

function getAlertWords() {
  var url = "/users/me/alert_words";
  var description = "Get all alert words";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addAlertWords() {
  var url = "/users/me/alert_words";
  var description = "Add alert words {alert_words}";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function removeAlertWords() {
  var url = "/users/me/alert_words";
  var description = "Remove alert words {alert_words}";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingAlertWords() {
  removeAlertWords();
}

function verifyAlertWordsExists() {
  var url = "/users/me/alert_words";
  var description = "Verify AlertWords exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("AlertWords exists");
          }
        }
      }
      return pvg.fail("Expected AlertWords to exist but it does not");
    }
  });
}

function verifyAlertWordsDoesNotExist() {
  var url = "/users/me/alert_words";
  var description = "Verify AlertWords does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected AlertWords to not exist but it does");
          }
        }
      }
      return pvg.success("AlertWords does not exist");
    }
  });
}

function tryToDeleteANonExistingAlertWords() {
  var url = "/users/me/alert_words";
  var description = "Verify we cannot delete non-existing AlertWords";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedAlertWords() {
  var expectedDesc = "Add alert words {alert_words}";
  return matchSuccess(expectedDesc);
}

function waitForAnyAlertWordsAdded() {
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

function getAlertWordsAddedEvent(keyVal) {
  return bp.EventSet("AddAlertWords:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAlertWordsAdded() {
  return bp.EventSet("matchAnyAlertWordsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create alert words") > -1;
  });
}

function waitForAlertWordsAdded() {
  var expectedDesc = "Add alert words {alert_words}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAlertWords() {
  var expectedDesc = "Remove alert words {alert_words}";
  return bp.EventSet("matchDeletedAlertWords", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAlertWordsDeleted() {
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
  var description = "Mute user with muted_user_id " + muted_user_id;
  var body = {
    "muted_user_id": String(muted_user_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      muted_user_id: String(muted_user_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { muted_user_id: String(muted_user_id) }) });
}

function unmuteUser(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Unmute user with muted_user_id " + muted_user_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingMutedUser(muted_user_id) {
  unmuteUser(muted_user_id);
}

function verifyMutedUserExists(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Verify MutedUser with muted_user_id " + muted_user_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].muted_user_id) === String(muted_user_id)) {
            return pvg.success("MutedUser exists");
          }
        }
      }
      return pvg.fail("Expected MutedUser to exist but it does not");
    }
  });
}

function verifyMutedUserDoesNotExist(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Verify MutedUser with muted_user_id " + muted_user_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].muted_user_id) === String(muted_user_id)) {
            return pvg.fail("Expected MutedUser to not exist but it does");
          }
        }
      }
      return pvg.success("MutedUser does not exist");
    }
  });
}

function tryToDeleteANonExistingMutedUser(muted_user_id) {
  var url = "/users/me/muted_users/" + muted_user_id;
  var description = "Verify we cannot delete non-existing MutedUser";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedMutedUser(muted_user_id) {
  var expectedDesc = "Mute user with muted_user_id " + muted_user_id;
  return matchSuccess(expectedDesc);
}

function waitForAnyMutedUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Mute\ user\ with\ muted_user_id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Mute\ user\ with\ muted_user_id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["muted_user_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMutedUserAddedEvent(keyVal) {
  return bp.EventSet("AddMutedUser:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.muted_user_id) === String(keyVal);
  });
}

function matchAnyMutedUserAdded() {
  return bp.EventSet("matchAnyMutedUserAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.muted_user_id !== undefined && e.name.indexOf("Create muted user") > -1;
  });
}

function waitForMutedUserAdded(muted_user_id) {
  var expectedDesc = "Mute user with muted_user_id " + muted_user_id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedMutedUser(muted_user_id) {
  var expectedDesc = "Unmute user with muted_user_id " + muted_user_id;
  return bp.EventSet("matchDeletedMutedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMutedUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unmute\ user\ with\ muted_user_id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Unmute\ user\ with\ muted_user_id\ (.+)$/);
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
  var description = "Add APNs device token {token} for appid {appid}";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function removeApnsToken() {
  var url = "/users/me/apns_device_token";
  var description = "Remove APNs device token {token}";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingApnsDeviceToken() {
  removeApnsToken();
}

function verifyApnsDeviceTokenExists() {
  var url = "/users/me/apns_device_token";
  var description = "Verify ApnsDeviceToken exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("ApnsDeviceToken exists");
          }
        }
      }
      return pvg.fail("Expected ApnsDeviceToken to exist but it does not");
    }
  });
}

function verifyApnsDeviceTokenDoesNotExist() {
  var url = "/users/me/apns_device_token";
  var description = "Verify ApnsDeviceToken does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected ApnsDeviceToken to not exist but it does");
          }
        }
      }
      return pvg.success("ApnsDeviceToken does not exist");
    }
  });
}

function tryToDeleteANonExistingApnsDeviceToken() {
  var url = "/users/me/apns_device_token";
  var description = "Verify we cannot delete non-existing ApnsDeviceToken";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedApnsDeviceToken() {
  var expectedDesc = "Add APNs device token {token} for appid {appid}";
  return matchSuccess(expectedDesc);
}

function waitForAnyApnsDeviceTokenAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ APNs\ device\ token\ (.+)\ for\ appid\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ APNs\ device\ token\ (.+)\ for\ appid\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token", "appid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getApnsDeviceTokenAddedEvent(keyVal) {
  return bp.EventSet("AddApnsDeviceToken:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyApnsDeviceTokenAdded() {
  return bp.EventSet("matchAnyApnsDeviceTokenAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create APNs device token") > -1;
  });
}

function waitForApnsDeviceTokenAdded() {
  var expectedDesc = "Add APNs device token {token} for appid {appid}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedApnsDeviceToken() {
  var expectedDesc = "Remove APNs device token {token}";
  return bp.EventSet("matchDeletedApnsDeviceToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyApnsDeviceTokenDeleted() {
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

// ---- Entity: Android GCM registration ID ----

function addFcmToken() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Add FCM registration token {token}";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function removeFcmToken() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Remove FCM registration token {token}";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingAndroidGcmRegId() {
  removeFcmToken();
}

function verifyAndroidGcmRegIdExists() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Verify AndroidGcmRegId exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("AndroidGcmRegId exists");
          }
        }
      }
      return pvg.fail("Expected AndroidGcmRegId to exist but it does not");
    }
  });
}

function verifyAndroidGcmRegIdDoesNotExist() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Verify AndroidGcmRegId does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected AndroidGcmRegId to not exist but it does");
          }
        }
      }
      return pvg.success("AndroidGcmRegId does not exist");
    }
  });
}

function tryToDeleteANonExistingAndroidGcmRegId() {
  var url = "/users/me/android_gcm_reg_id";
  var description = "Verify we cannot delete non-existing AndroidGcmRegId";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedAndroidGcmRegId() {
  var expectedDesc = "Add FCM registration token {token}";
  return matchSuccess(expectedDesc);
}

function waitForAnyAndroidGcmRegIdAdded() {
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

function getAndroidGcmRegIdAddedEvent(keyVal) {
  return bp.EventSet("AddAndroidGcmRegId:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAndroidGcmRegIdAdded() {
  return bp.EventSet("matchAnyAndroidGcmRegIdAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create Android GCM registration ID") > -1;
  });
}

function waitForAndroidGcmRegIdAdded() {
  var expectedDesc = "Add FCM registration token {token}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAndroidGcmRegId() {
  var expectedDesc = "Remove FCM registration token {token}";
  return bp.EventSet("matchDeletedAndroidGcmRegId", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAndroidGcmRegIdDeleted() {
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

// ---- Entity: settings ----

function updateSettings() {
  var url = "/settings";
  var description = "Update user settings";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: typing status ----

function setTypingStatus() {
  var url = "/typing";
  var description = "Set typing status with op {op}";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingTypingStatus() {
  setTypingStatus();
}

function verifyTypingStatusExists() {
  var url = "/typing";
  var description = "Verify TypingStatus exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("TypingStatus exists");
          }
        }
      }
      return pvg.fail("Expected TypingStatus to exist but it does not");
    }
  });
}

function verifyTypingStatusDoesNotExist() {
  var url = "/typing";
  var description = "Verify TypingStatus does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected TypingStatus to not exist but it does");
          }
        }
      }
      return pvg.success("TypingStatus does not exist");
    }
  });
}

function matchAddedTypingStatus() {
  var expectedDesc = "Set typing status with op {op}";
  return matchSuccess(expectedDesc);
}

function waitForAnyTypingStatusAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Set\ typing\ status\ with\ op\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Set\ typing\ status\ with\ op\ (.+)$/);
  var captures = m.slice(1);
  var names = ["op"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTypingStatusAddedEvent(keyVal) {
  return bp.EventSet("AddTypingStatus:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyTypingStatusAdded() {
  return bp.EventSet("matchAnyTypingStatusAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create typing status") > -1;
  });
}

function waitForTypingStatusAdded() {
  var expectedDesc = "Set typing status with op {op}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: message typing status ----

function setTypingStatusForMessageEdit(message_id) {
  var url = "/messages/" + message_id + "/typing";
  var description = "Set typing status for message editing with message_id " + message_id + " and op {op}";
  var body = {
    "message_id": String(message_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , message_id: String(message_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMessageTypingStatus(message_id) {
  setTypingStatusForMessageEdit(message_id);
}

function verifyMessageTypingStatusExists(message_id) {
  var url = "/messages/" + message_id + "/typing";
  var description = "Verify MessageTypingStatus exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.success("MessageTypingStatus exists");
          }
        }
      }
      return pvg.fail("Expected MessageTypingStatus to exist but it does not");
    }
  });
}

function verifyMessageTypingStatusDoesNotExist(message_id) {
  var url = "/messages/" + message_id + "/typing";
  var description = "Verify MessageTypingStatus does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.fail("Expected MessageTypingStatus to not exist but it does");
          }
        }
      }
      return pvg.success("MessageTypingStatus does not exist");
    }
  });
}

function matchAddedMessageTypingStatus(message_id) {
  var expectedDesc = "Set typing status for message editing with message_id " + message_id + " and op {op}";
  return matchSuccess(expectedDesc);
}

function waitForAnyMessageTypingStatusAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Set\ typing\ status\ for\ message\ editing\ with\ message_id\ (.+)\ and\ op\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Set\ typing\ status\ for\ message\ editing\ with\ message_id\ (.+)\ and\ op\ (.+)$/);
  var captures = m.slice(1);
  var names = ["message_id", "op"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMessageTypingStatusAddedEvent(keyVal) {
  return bp.EventSet("AddMessageTypingStatus:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMessageTypingStatusAdded() {
  return bp.EventSet("matchAnyMessageTypingStatusAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create message typing status") > -1;
  });
}

function waitForMessageTypingStatusAdded(message_id) {
  var expectedDesc = "Set typing status for message editing with message_id " + message_id + " and op {op}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: user group ----

function createUserGroup(user_group_id) {
  var url = "/user_groups/create";
  var description = "Create user group {name}";
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_group_id: String(user_group_id) }) });
}

function updateUserGroupMembers(user_group_id) {
  var url = "/user_groups/" + user_group_id + "/members";
  var description = "Update members of user group with user_group_id " + user_group_id;
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_group_id: String(user_group_id) }) });
}

function getUserGroupMembers(user_group_id) {
  var url = "/user_groups/" + user_group_id + "/members";
  var description = "Get members of user group with user_group_id " + user_group_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getUserGroups(user_group_id) {
  var url = "/user_groups";
  var description = "Get user groups";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateUserGroup(user_group_id) {
  var url = "/user_groups/" + user_group_id;
  var description = "Update user group " + user_group_id;
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_group_id: String(user_group_id) }) });
}

function deactivateUserGroup(user_group_id) {
  var url = "/user_groups/" + user_group_id + "/deactivate";
  var description = "Deactivate user group " + user_group_id;
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_group_id: String(user_group_id) }) });
}

function tryToAddExistingUserGroup(user_group_id) {
  deactivateUserGroup(user_group_id);
}

function verifyUserGroupExists(user_group_id) {
  var url = "/user_groups/create";
  var description = "Verify UserGroup with user_group_id " + user_group_id + " exists";
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

function verifyUserGroupDoesNotExist(user_group_id) {
  var url = "/user_groups/create";
  var description = "Verify UserGroup with user_group_id " + user_group_id + " does not exist";
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

function matchAddedUserGroup(user_group_id) {
  var expectedDesc = "Create user group {name}";
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.user_group_id !== undefined && e.name.indexOf("Create user group") > -1;
  });
}

function waitForUserGroupAdded(user_group_id) {
  var expectedDesc = "Create user group {name}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: user group subgroups ----

function getUserGroupSubgroups(direct_subgroup_only, user_group_id) {
  var url = "/user_groups/" + user_group_id + "/subgroups";
  var description = "Get subgroups of user group " + user_group_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateUserGroupSubgroups(direct_subgroup_only, user_group_id) {
  var url = "/user_groups/" + user_group_id + "/subgroups";
  var description = "Update subgroups of user group " + user_group_id;
  var body = {
    "user_group_id": String(user_group_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      user_group_id: String(user_group_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user_group_id: String(user_group_id) }) });
}

function verifyUserGroupSubgroupsExists(direct_subgroup_only, user_group_id) {
  var url = "/user_groups";
  var description = "Verify UserGroupSubgroups with user_group_id " + user_group_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_group_id) === String(user_group_id)) {
            return pvg.success("UserGroupSubgroups exists");
          }
        }
      }
      return pvg.fail("Expected UserGroupSubgroups to exist but it does not");
    }
  });
}

function verifyUserGroupSubgroupsDoesNotExist(direct_subgroup_only, user_group_id) {
  var url = "/user_groups";
  var description = "Verify UserGroupSubgroups with user_group_id " + user_group_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_group_id) === String(user_group_id)) {
            return pvg.fail("Expected UserGroupSubgroups to not exist but it does");
          }
        }
      }
      return pvg.success("UserGroupSubgroups does not exist");
    }
  });
}

// ---- Entity: user group member ----

function getIsUserGroupMember(direct_member_only, user_group_id, user_id) {
  var url = "/user_groups/" + user_group_id + "/members/" + user_id;
  var description = "Get membership status of user " + user_id + " in user group " + user_group_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyUserGroupMemberExists(direct_member_only, user_group_id, user_id) {
  var url = "/user_groups";
  var description = "Verify UserGroupMember with user_group_id " + user_group_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_group_id) === String(user_group_id)) {
            return pvg.success("UserGroupMember exists");
          }
        }
      }
      return pvg.fail("Expected UserGroupMember to exist but it does not");
    }
  });
}

function verifyUserGroupMemberDoesNotExist(direct_member_only, user_group_id, user_id) {
  var url = "/user_groups";
  var description = "Verify UserGroupMember with user_group_id " + user_group_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_group_id) === String(user_group_id)) {
            return pvg.fail("Expected UserGroupMember to not exist but it does");
          }
        }
      }
      return pvg.success("UserGroupMember does not exist");
    }
  });
}

// ---- Entity: channel ----

function createChannel(name, stream_id) {
  var url = "/channels/create";
  var description = "Create channel " + name;
  var body = {
    "stream_id": String(stream_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 409],
    parameters: {
      description: description,
      stream_id: String(stream_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { stream_id: String(stream_id) }) });
}

function archiveChannel(name, stream_id) {
  var url = "/streams/" + stream_id;
  var description = "Archive channel with id " + stream_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateChannel(name, stream_id) {
  var url = "/streams/" + stream_id;
  var description = "Update channel with id " + stream_id;
  var body = {
    "stream_id": String(stream_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      stream_id: String(stream_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { stream_id: String(stream_id) }) });
}

function getChannelById(name, stream_id) {
  var url = "/streams/" + stream_id;
  var description = "Get channel with id " + stream_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingChannel(name, stream_id) {
  getChannelById(name, stream_id);
}

function verifyChannelExists(name, stream_id) {
  var url = "/channels/create";
  var description = "Verify Channel with stream_id " + stream_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.success("Channel exists");
          }
        }
      }
      return pvg.fail("Expected Channel to exist but it does not");
    }
  });
}

function verifyChannelDoesNotExist(name, stream_id) {
  var url = "/channels/create";
  var description = "Verify Channel with stream_id " + stream_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.fail("Expected Channel to not exist but it does");
          }
        }
      }
      return pvg.success("Channel does not exist");
    }
  });
}

function tryToDeleteANonExistingChannel(name, stream_id) {
  var url = "/streams/" + stream_id;
  var description = "Verify we cannot delete non-existing Channel";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedChannel(name, stream_id) {
  var expectedDesc = "Create channel " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyChannelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ channel\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ channel\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getChannelAddedEvent(keyVal) {
  return bp.EventSet("AddChannel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.stream_id) === String(keyVal);
  });
}

function matchAnyChannelAdded() {
  return bp.EventSet("matchAnyChannelAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.stream_id !== undefined && e.name.indexOf("Create channel") > -1;
  });
}

function waitForChannelAdded(name, stream_id) {
  var expectedDesc = "Create channel " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedChannel(name, stream_id) {
  var expectedDesc = "Archive channel with id " + stream_id;
  return bp.EventSet("matchDeletedChannel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyChannelDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Archive\ channel\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Archive\ channel\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["stream_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: default channel ----

function addDefaultStream(stream_id) {
  var url = "/default_streams";
  var description = "Add default channel with stream_id " + stream_id;
  var body = {
    "stream_id": String(stream_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , stream_id: String(stream_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function removeDefaultStream(stream_id) {
  var url = "/default_streams";
  var description = "Remove default channel with stream_id " + stream_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingDefaultChannel(stream_id) {
  removeDefaultStream(stream_id);
}

function verifyDefaultChannelExists(stream_id) {
  var url = "/default_streams";
  var description = "Verify DefaultChannel exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.success("DefaultChannel exists");
          }
        }
      }
      return pvg.fail("Expected DefaultChannel to exist but it does not");
    }
  });
}

function verifyDefaultChannelDoesNotExist(stream_id) {
  var url = "/default_streams";
  var description = "Verify DefaultChannel does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.fail("Expected DefaultChannel to not exist but it does");
          }
        }
      }
      return pvg.success("DefaultChannel does not exist");
    }
  });
}

function tryToDeleteANonExistingDefaultChannel(stream_id) {
  var url = "/default_streams";
  var description = "Verify we cannot delete non-existing DefaultChannel";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedDefaultChannel(stream_id) {
  var expectedDesc = "Add default channel with stream_id " + stream_id;
  return matchSuccess(expectedDesc);
}

function waitForAnyDefaultChannelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ default\ channel\ with\ stream_id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ default\ channel\ with\ stream_id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["stream_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getDefaultChannelAddedEvent(keyVal) {
  return bp.EventSet("AddDefaultChannel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyDefaultChannelAdded() {
  return bp.EventSet("matchAnyDefaultChannelAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create default channel") > -1;
  });
}

function waitForDefaultChannelAdded(stream_id) {
  var expectedDesc = "Add default channel with stream_id " + stream_id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedDefaultChannel(stream_id) {
  var expectedDesc = "Remove default channel with stream_id " + stream_id;
  return bp.EventSet("matchDeletedDefaultChannel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDefaultChannelDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ default\ channel\ with\ stream_id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ default\ channel\ with\ stream_id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["stream_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: topic ----

function updateUserTopic(stream_id, topic, topic_name, visibility_policy) {
  var url = "/user_topics";
  var description = "Update personal preferences for topic " + topic + " in stream " + stream_id + " with visibility_policy " + visibility_policy;
  var body = {
    "stream_id": String(stream_id),
    "topic": String(topic),
    "visibility_policy": String(visibility_policy),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      stream_id: String(stream_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { stream_id: String(stream_id) }) });
}

function deleteTopic(stream_id, topic, topic_name, visibility_policy) {
  var url = "/streams/" + stream_id + "/delete_topic";
  var description = "Delete topic " + topic_name + " in channel with id " + stream_id;
  var body = {
    "stream_id": String(stream_id),
    "topic_name": String(topic_name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      stream_id: String(stream_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { stream_id: String(stream_id) }) });
}

function tryToDeleteANonExistingTopic(stream_id, topic, topic_name, visibility_policy) {
  var url = "/streams/" + stream_id + "/delete_topic";
  var description = "Verify we cannot delete non-existing Topic";
  svc.delete(url, {
    expectedResponseCodes: [],
    parameters: { description: description }
  });
}

function matchDeletedTopic(stream_id, topic, topic_name, visibility_policy) {
  var expectedDesc = "Delete topic " + topic_name + " in channel with id " + stream_id;
  return bp.EventSet("matchDeletedTopic", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTopicDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ topic\ (.+)\ in\ channel\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ topic\ (.+)\ in\ channel\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["topic_name", "stream_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: muted topic ----

function muteTopic(op, stream, stream_id, topic) {
  var url = "/users/me/subscriptions/muted_topics";
  var description = "" + op + " mute for topic " + topic;
  var body = {
    "op": String(op),
    "stream": String(stream),
    "stream_id": String(stream_id),
    "topic": String(topic),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , stream_id: String(stream_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: subscription status ----

function getSubscriptionStatus(stream_id, user_id) {
  var url = "/users/" + user_id + "/subscriptions/" + stream_id;
  var description = "Get subscription status for user " + user_id + " and stream " + stream_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifySubscriptionStatusExists(stream_id, user_id) {
  var url = "/users";
  var description = "Verify SubscriptionStatus with user_id " + user_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_id) === String(user_id)) {
            return pvg.success("SubscriptionStatus exists");
          }
        }
      }
      return pvg.fail("Expected SubscriptionStatus to exist but it does not");
    }
  });
}

function verifySubscriptionStatusDoesNotExist(stream_id, user_id) {
  var url = "/users";
  var description = "Verify SubscriptionStatus with user_id " + user_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user_id) === String(user_id)) {
            return pvg.fail("Expected SubscriptionStatus to not exist but it does");
          }
        }
      }
      return pvg.success("SubscriptionStatus does not exist");
    }
  });
}

// ---- Entity: subscription settings ----

function updateSubscriptionSettings() {
  var url = "/users/me/subscriptions/properties";
  var description = "Update subscription settings for channels";
  var body = {
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

// ---- Entity: channel subscribers ----

function getSubscribers(stream_id) {
  var url = "/streams/" + stream_id + "/members";
  var description = "Get subscribers for channel with stream_id " + stream_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyChannelSubscribersExists(stream_id) {
  var url = "/streams";
  var description = "Verify ChannelSubscribers with stream_id " + stream_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.success("ChannelSubscribers exists");
          }
        }
      }
      return pvg.fail("Expected ChannelSubscribers to exist but it does not");
    }
  });
}

function verifyChannelSubscribersDoesNotExist(stream_id) {
  var url = "/streams";
  var description = "Verify ChannelSubscribers with stream_id " + stream_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.fail("Expected ChannelSubscribers to not exist but it does");
          }
        }
      }
      return pvg.success("ChannelSubscribers does not exist");
    }
  });
}

// ---- Entity: channel id ----

function getStreamId(stream) {
  var url = "/get_stream_id";
  var description = "Get channel ID for channel named " + stream;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyChannelIdExists(stream) {
  var url = "/get_stream_id";
  var description = "Verify ChannelId exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream) === String(stream)) {
            return pvg.success("ChannelId exists");
          }
        }
      }
      return pvg.fail("Expected ChannelId to exist but it does not");
    }
  });
}

function verifyChannelIdDoesNotExist(stream) {
  var url = "/get_stream_id";
  var description = "Verify ChannelId does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream) === String(stream)) {
            return pvg.fail("Expected ChannelId to not exist but it does");
          }
        }
      }
      return pvg.success("ChannelId does not exist");
    }
  });
}

// ---- Entity: channels ----

function getStreams(exclude_archived, include_all, include_all_active, include_can_access_content, include_default, include_owner_subscribed, include_public, include_subscribed, include_web_public) {
  var url = "/streams";
  var description = "Get all channels with filters include_public=" + include_public + ", include_web_public=" + include_web_public + ", include_subscribed=" + include_subscribed + ", exclude_archived=" + exclude_archived + ", include_all_active=" + include_all_active + ", include_all=" + include_all + ", include_default=" + include_default + ", include_owner_subscribed=" + include_owner_subscribed + ", include_can_access_content=" + include_can_access_content;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyChannelsExists(exclude_archived, include_all, include_all_active, include_can_access_content, include_default, include_owner_subscribed, include_public, include_subscribed, include_web_public) {
  var url = "/streams";
  var description = "Verify Channels exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].exclude_archived) === String(exclude_archived) && String(items[i].include_all) === String(include_all) && String(items[i].include_all_active) === String(include_all_active) && String(items[i].include_can_access_content) === String(include_can_access_content) && String(items[i].include_default) === String(include_default) && String(items[i].include_owner_subscribed) === String(include_owner_subscribed) && String(items[i].include_public) === String(include_public) && String(items[i].include_subscribed) === String(include_subscribed) && String(items[i].include_web_public) === String(include_web_public)) {
            return pvg.success("Channels exists");
          }
        }
      }
      return pvg.fail("Expected Channels to exist but it does not");
    }
  });
}

function verifyChannelsDoesNotExist(exclude_archived, include_all, include_all_active, include_can_access_content, include_default, include_owner_subscribed, include_public, include_subscribed, include_web_public) {
  var url = "/streams";
  var description = "Verify Channels does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].exclude_archived) === String(exclude_archived) && String(items[i].include_all) === String(include_all) && String(items[i].include_all_active) === String(include_all_active) && String(items[i].include_can_access_content) === String(include_can_access_content) && String(items[i].include_default) === String(include_default) && String(items[i].include_owner_subscribed) === String(include_owner_subscribed) && String(items[i].include_public) === String(include_public) && String(items[i].include_subscribed) === String(include_subscribed) && String(items[i].include_web_public) === String(include_web_public)) {
            return pvg.fail("Expected Channels to not exist but it does");
          }
        }
      }
      return pvg.success("Channels does not exist");
    }
  });
}

// ---- Entity: channel email address ----

function getChannelEmailAddress(sender_id, stream_id) {
  var url = "/streams/" + stream_id + "/email_address";
  var description = "Get email address for channel with id " + stream_id + " and sender_id " + sender_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyChannelEmailAddressExists(sender_id, stream_id) {
  var url = "/streams";
  var description = "Verify ChannelEmailAddress with stream_id " + stream_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.success("ChannelEmailAddress exists");
          }
        }
      }
      return pvg.fail("Expected ChannelEmailAddress to exist but it does not");
    }
  });
}

function verifyChannelEmailAddressDoesNotExist(sender_id, stream_id) {
  var url = "/streams";
  var description = "Verify ChannelEmailAddress with stream_id " + stream_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].stream_id) === String(stream_id)) {
            return pvg.fail("Expected ChannelEmailAddress to not exist but it does");
          }
        }
      }
      return pvg.success("ChannelEmailAddress does not exist");
    }
  });
}

// ---- Entity: channel folder ----

function createChannelFolder(channel_folder_id, name) {
  var url = "/channel_folders/create";
  var description = "Create channel folder " + name;
  var body = {
    "channel_folder_id": String(channel_folder_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      channel_folder_id: String(channel_folder_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { channel_folder_id: String(channel_folder_id) }) });
}

function getChannelFolders(channel_folder_id, name) {
  var url = "/channel_folders";
  var description = "Get channel folders";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateChannelFolder(channel_folder_id, name) {
  var url = "/channel_folders/" + channel_folder_id;
  var description = "Update channel folder with id " + channel_folder_id;
  var body = {
    "channel_folder_id": String(channel_folder_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      channel_folder_id: String(channel_folder_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { channel_folder_id: String(channel_folder_id) }) });
}

function reorderChannelFolders(channel_folder_id, name) {
  var url = "/channel_folders";
  var description = "Reorder channel folders";
  var body = {
    "channel_folder_id": String(channel_folder_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      channel_folder_id: String(channel_folder_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { channel_folder_id: String(channel_folder_id) }) });
}

function tryToAddExistingChannelFolder(channel_folder_id, name) {
  reorderChannelFolders(channel_folder_id, name);
}

function verifyChannelFolderExists(channel_folder_id, name) {
  var url = "/channel_folders/create";
  var description = "Verify ChannelFolder with channel_folder_id " + channel_folder_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].channel_folder_id) === String(channel_folder_id)) {
            return pvg.success("ChannelFolder exists");
          }
        }
      }
      return pvg.fail("Expected ChannelFolder to exist but it does not");
    }
  });
}

function verifyChannelFolderDoesNotExist(channel_folder_id, name) {
  var url = "/channel_folders/create";
  var description = "Verify ChannelFolder with channel_folder_id " + channel_folder_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].channel_folder_id) === String(channel_folder_id)) {
            return pvg.fail("Expected ChannelFolder to not exist but it does");
          }
        }
      }
      return pvg.success("ChannelFolder does not exist");
    }
  });
}

function matchAddedChannelFolder(channel_folder_id, name) {
  var expectedDesc = "Create channel folder " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyChannelFolderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ channel\ folder\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ channel\ folder\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getChannelFolderAddedEvent(keyVal) {
  return bp.EventSet("AddChannelFolder:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.channel_folder_id) === String(keyVal);
  });
}

function matchAnyChannelFolderAdded() {
  return bp.EventSet("matchAnyChannelFolderAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.channel_folder_id !== undefined && e.name.indexOf("Create channel folder") > -1;
  });
}

function waitForChannelFolderAdded(channel_folder_id, name) {
  var expectedDesc = "Create channel folder " + name;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: big blue button video call ----

function createBigBlueButtonVideoCall(meeting_name, voice_only) {
  var url = "/calls/bigbluebutton/create";
  var description = "Create BigBlueButton video call " + meeting_name;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingBigBlueButtonVideoCall(meeting_name, voice_only) {
  createBigBlueButtonVideoCall(meeting_name, voice_only);
}

function verifyBigBlueButtonVideoCallExists(meeting_name, voice_only) {
  var url = "/calls/bigbluebutton/create";
  var description = "Verify BigBlueButtonVideoCall exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].meeting_name) === String(meeting_name) && String(items[i].voice_only) === String(voice_only)) {
            return pvg.success("BigBlueButtonVideoCall exists");
          }
        }
      }
      return pvg.fail("Expected BigBlueButtonVideoCall to exist but it does not");
    }
  });
}

function verifyBigBlueButtonVideoCallDoesNotExist(meeting_name, voice_only) {
  var url = "/calls/bigbluebutton/create";
  var description = "Verify BigBlueButtonVideoCall does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].meeting_name) === String(meeting_name) && String(items[i].voice_only) === String(voice_only)) {
            return pvg.fail("Expected BigBlueButtonVideoCall to not exist but it does");
          }
        }
      }
      return pvg.success("BigBlueButtonVideoCall does not exist");
    }
  });
}

function matchAddedBigBlueButtonVideoCall(meeting_name, voice_only) {
  var expectedDesc = "Create BigBlueButton video call " + meeting_name;
  return matchSuccess(expectedDesc);
}

function waitForAnyBigBlueButtonVideoCallAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ BigBlueButton\ video\ call\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ BigBlueButton\ video\ call\ (.+)$/);
  var captures = m.slice(1);
  var names = ["meeting_name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBigBlueButtonVideoCallAddedEvent(keyVal) {
  return bp.EventSet("AddBigBlueButtonVideoCall:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyBigBlueButtonVideoCallAdded() {
  return bp.EventSet("matchAnyBigBlueButtonVideoCallAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create big blue button video call") > -1;
  });
}

function waitForBigBlueButtonVideoCallAdded(meeting_name, voice_only) {
  var expectedDesc = "Create BigBlueButton video call " + meeting_name;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: message ----

function getMessage(allow_empty_topic_name, message_id) {
  var url = "/messages/" + message_id;
  var description = "Fetch message " + message_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function sendMessage(allow_empty_topic_name, message_id) {
  var url = "/messages";
  var description = "Send message of type {type} to {to} with content {content}";
  var body = {
    "message_id": String(message_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      message_id: String(message_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { message_id: String(message_id) }) });
}

function getMessageHistory(allow_empty_topic_name, message_id) {
  var url = "/messages/" + message_id + "/history";
  var description = "Get edit history for message " + message_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getReadReceipts(allow_empty_topic_name, message_id) {
  var url = "/messages/" + message_id + "/read_receipts";
  var description = "Get read receipts for message " + message_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateMessage(allow_empty_topic_name, message_id) {
  var url = "/messages/" + message_id;
  var description = "Edit message " + message_id;
  var body = {
    "message_id": String(message_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      message_id: String(message_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { message_id: String(message_id) }) });
}

function deleteMessage(allow_empty_topic_name, message_id) {
  var url = "/messages/" + message_id;
  var description = "Delete message " + message_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingMessage(allow_empty_topic_name, message_id) {
  deleteMessage(allow_empty_topic_name, message_id);
}

function verifyMessageExists(allow_empty_topic_name, message_id) {
  var url = "/messages";
  var description = "Verify Message with message_id " + message_id + " exists";
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

function verifyMessageDoesNotExist(allow_empty_topic_name, message_id) {
  var url = "/messages";
  var description = "Verify Message with message_id " + message_id + " does not exist";
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

function tryToDeleteANonExistingMessage(allow_empty_topic_name, message_id) {
  var url = "/messages/" + message_id;
  var description = "Verify we cannot delete non-existing Message";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedMessage(allow_empty_topic_name, message_id) {
  var expectedDesc = "Send message of type {type} to {to} with content {content}";
  return matchSuccess(expectedDesc);
}

function waitForAnyMessageAdded() {
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

function getMessageAddedEvent(keyVal) {
  return bp.EventSet("AddMessage:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.message_id) === String(keyVal);
  });
}

function matchAnyMessageAdded() {
  return bp.EventSet("matchAnyMessageAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.message_id !== undefined && e.name.indexOf("Create message") > -1;
  });
}

function waitForMessageAdded(allow_empty_topic_name, message_id) {
  var expectedDesc = "Send message of type {type} to {to} with content {content}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedMessage(allow_empty_topic_name, message_id) {
  var expectedDesc = "Delete message " + message_id;
  return bp.EventSet("matchDeletedMessage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMessageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ message\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ message\ (.+)$/);
  var captures = m.slice(1);
  var names = ["message_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: message flag ----

function updateMessageFlags(anchor, flag, include_anchor, narrow, num_after, num_before, op) {
  var url = "/messages/flags";
  var description = "Update message flags with operation " + op + " for flag " + flag + " on messages {messages}";
  var body = {
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

function updateMessageFlagsForNarrow(anchor, flag, include_anchor, narrow, num_after, num_before, op) {
  var url = "/messages/flags/narrow";
  var description = "Update message flags for narrow with operation " + op + " for flag " + flag + " anchored at " + anchor;
  var body = {
    "anchor": String(anchor),
    "flag": String(flag),
    "include_anchor": String(include_anchor),
    "narrow": String(narrow),
    "num_after": String(num_after),
    "num_before": String(num_before),
    "op": String(op),
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

// ---- Entity: reaction ----

function addReaction(emoji_name, message_id) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Add reaction " + emoji_name + " to message " + message_id;
  var body = {
    "emoji_name": String(emoji_name),
    "message_id": String(message_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      message_id: String(message_id)
      , emoji_name: String(emoji_name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { message_id: String(message_id) }) });
}

function removeReaction(emoji_name, message_id) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Remove reaction " + emoji_name + " from message " + message_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingReaction(emoji_name, message_id) {
  removeReaction(emoji_name, message_id);
}

function verifyReactionExists(emoji_name, message_id) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Verify Reaction with message_id " + message_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.success("Reaction exists");
          }
        }
      }
      return pvg.fail("Expected Reaction to exist but it does not");
    }
  });
}

function verifyReactionDoesNotExist(emoji_name, message_id) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Verify Reaction with message_id " + message_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].message_id) === String(message_id)) {
            return pvg.fail("Expected Reaction to not exist but it does");
          }
        }
      }
      return pvg.success("Reaction does not exist");
    }
  });
}

function tryToDeleteANonExistingReaction(emoji_name, message_id) {
  var url = "/messages/" + message_id + "/reactions";
  var description = "Verify we cannot delete non-existing Reaction";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedReaction(emoji_name, message_id) {
  var expectedDesc = "Add reaction " + emoji_name + " to message " + message_id;
  return matchSuccess(expectedDesc);
}

function waitForAnyReactionAdded() {
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

function getReactionAddedEvent(keyVal) {
  return bp.EventSet("AddReaction:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.message_id) === String(keyVal);
  });
}

function matchAnyReactionAdded() {
  return bp.EventSet("matchAnyReactionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.message_id !== undefined && e.name.indexOf("Create reaction") > -1;
  });
}

function waitForReactionAdded(emoji_name, message_id) {
  var expectedDesc = "Add reaction " + emoji_name + " to message " + message_id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedReaction(emoji_name, message_id) {
  var expectedDesc = "Remove reaction " + emoji_name + " from message " + message_id;
  return bp.EventSet("matchDeletedReaction", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyReactionDeleted() {
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

// ---- Entity: mark stream as read ----

function markStreamAsRead(stream_id) {
  var url = "/mark_stream_as_read";
  var description = "Mark messages in stream " + stream_id + " as read";
  var body = {
    "stream_id": String(stream_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , stream_id: String(stream_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMarkStreamAsRead(stream_id) {
  markStreamAsRead(stream_id);
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
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create mark stream as read") > -1;
  });
}

function waitForMarkStreamAsReadAdded(stream_id) {
  var expectedDesc = "Mark messages in stream " + stream_id + " as read";
  waitFor(matchSuccess(expectedDesc));
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
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , stream_id: String(stream_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMarkTopicAsRead(stream_id, topic_name) {
  markTopicAsRead(stream_id, topic_name);
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
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create mark topic as read") > -1;
  });
}

function waitForMarkTopicAsReadAdded(stream_id, topic_name) {
  var expectedDesc = "Mark messages in topic " + topic_name + " of stream " + stream_id + " as read";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: mark all as read ----

function markAllAsRead() {
  var url = "/mark_all_as_read";
  var description = "Mark all messages as read";
  var body = {
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

function tryToAddExistingMarkAllAsRead() {
  markAllAsRead();
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
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create mark all as read") > -1;
  });
}

function waitForMarkAllAsReadAdded() {
  var expectedDesc = "Mark all messages as read";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: render message ----

function renderMessage() {
  var url = "/messages/render";
  var description = "Render message content";
  var body = {
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

function tryToAddExistingRenderMessage() {
  renderMessage();
}

function verifyRenderMessageExists() {
  var url = "/messages/render";
  var description = "Verify RenderMessage exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RenderMessage exists");
          }
        }
      }
      return pvg.fail("Expected RenderMessage to exist but it does not");
    }
  });
}

function verifyRenderMessageDoesNotExist() {
  var url = "/messages/render";
  var description = "Verify RenderMessage does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RenderMessage to not exist but it does");
          }
        }
      }
      return pvg.success("RenderMessage does not exist");
    }
  });
}

function matchAddedRenderMessage() {
  var expectedDesc = "Render message content";
  return matchSuccess(expectedDesc);
}

function waitForAnyRenderMessageAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Render\ message\ content$/));
  var m = ev.data.parameters.description.match(/^Render\ message\ content$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRenderMessageAddedEvent(keyVal) {
  return bp.EventSet("AddRenderMessage:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRenderMessageAdded() {
  return bp.EventSet("matchAnyRenderMessageAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create render message") > -1;
  });
}

function waitForRenderMessageAdded() {
  var expectedDesc = "Render message content";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: message report ----

function reportMessage(message_id) {
  var url = "/messages/" + message_id + "/report";
  var description = "Report message " + message_id + " with type {report_type}";
  var body = {
    "message_id": String(message_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , message_id: String(message_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMessageReport(message_id) {
  reportMessage(message_id);
}

function verifyMessageReportExists(message_id) {
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

function verifyMessageReportDoesNotExist(message_id) {
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

function matchAddedMessageReport(message_id) {
  var expectedDesc = "Report message " + message_id + " with type {report_type}";
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create message report") > -1;
  });
}

function waitForMessageReportAdded(message_id) {
  var expectedDesc = "Report message " + message_id + " with type {report_type}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: message match ----

function checkMessagesMatchNarrow(msg_ids, narrow) {
  var url = "/messages/matches_narrow";
  var description = "Check if messages " + msg_ids + " match narrow " + narrow;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyMessageMatchExists(msg_ids, narrow) {
  var url = "/messages/matches_narrow";
  var description = "Verify MessageMatch exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].msg_ids) === String(msg_ids)) {
            return pvg.success("MessageMatch exists");
          }
        }
      }
      return pvg.fail("Expected MessageMatch to exist but it does not");
    }
  });
}

function verifyMessageMatchDoesNotExist(msg_ids, narrow) {
  var url = "/messages/matches_narrow";
  var description = "Verify MessageMatch does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].msg_ids) === String(msg_ids)) {
            return pvg.fail("Expected MessageMatch to not exist but it does");
          }
        }
      }
      return pvg.success("MessageMatch does not exist");
    }
  });
}

// ---- Entity: user upload ----

function uploadFile(filename, realm_id_str) {
  var url = "/user_uploads";
  var description = "Upload file " + filename;
  var body = {
    "realm_id_str": String(realm_id_str),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm_id_str: String(realm_id_str)
      , filename: String(filename)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm_id_str: String(realm_id_str) }) });
}

function getFileTemporaryUrl(filename, realm_id_str) {
  var url = "/user_uploads/" + realm_id_str + "/" + filename;
  var description = "Get temporary URL for file " + filename + " in realm " + realm_id_str;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingUserUpload(filename, realm_id_str) {
  getFileTemporaryUrl(filename, realm_id_str);
}

function verifyUserUploadExists(filename, realm_id_str) {
  var url = "/user_uploads";
  var description = "Verify UserUpload with realm_id_str " + realm_id_str + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm_id_str) === String(realm_id_str)) {
            return pvg.success("UserUpload exists");
          }
        }
      }
      return pvg.fail("Expected UserUpload to exist but it does not");
    }
  });
}

function verifyUserUploadDoesNotExist(filename, realm_id_str) {
  var url = "/user_uploads";
  var description = "Verify UserUpload with realm_id_str " + realm_id_str + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm_id_str) === String(realm_id_str)) {
            return pvg.fail("Expected UserUpload to not exist but it does");
          }
        }
      }
      return pvg.success("UserUpload does not exist");
    }
  });
}

function matchAddedUserUpload(filename, realm_id_str) {
  var expectedDesc = "Upload file " + filename;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserUploadAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Upload\ file\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Upload\ file\ (.+)$/);
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
    return String(e.data.parameters.realm_id_str) === String(keyVal);
  });
}

function matchAnyUserUploadAdded() {
  return bp.EventSet("matchAnyUserUploadAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm_id_str !== undefined && e.name.indexOf("Create user upload") > -1;
  });
}

function waitForUserUploadAdded(filename, realm_id_str) {
  var expectedDesc = "Upload file " + filename;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: emoji ----

function uploadCustomEmoji(emoji_name) {
  var url = "/realm/emoji/" + emoji_name;
  var description = "Upload custom emoji " + emoji_name;
  var body = {
    "emoji_name": String(emoji_name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      emoji_name: String(emoji_name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { emoji_name: String(emoji_name) }) });
}

function deactivateCustomEmoji(emoji_name) {
  var url = "/realm/emoji/" + emoji_name;
  var description = "Deactivate custom emoji " + emoji_name;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getCustomEmoji(emoji_name) {
  var url = "/realm/emoji";
  var description = "Get all custom emoji";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingEmoji(emoji_name) {
  getCustomEmoji(emoji_name);
}

function verifyEmojiExists(emoji_name) {
  var url = "/realm/emoji/" + emoji_name;
  var description = "Verify Emoji with emoji_name " + emoji_name + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].emoji_name) === String(emoji_name)) {
            return pvg.success("Emoji exists");
          }
        }
      }
      return pvg.fail("Expected Emoji to exist but it does not");
    }
  });
}

function verifyEmojiDoesNotExist(emoji_name) {
  var url = "/realm/emoji/" + emoji_name;
  var description = "Verify Emoji with emoji_name " + emoji_name + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].emoji_name) === String(emoji_name)) {
            return pvg.fail("Expected Emoji to not exist but it does");
          }
        }
      }
      return pvg.success("Emoji does not exist");
    }
  });
}

function tryToDeleteANonExistingEmoji(emoji_name) {
  var url = "/realm/emoji/" + emoji_name;
  var description = "Verify we cannot delete non-existing Emoji";
  svc.delete(url, {
    expectedResponseCodes: [200, 404],
    parameters: { description: description }
  });
}

function matchAddedEmoji(emoji_name) {
  var expectedDesc = "Upload custom emoji " + emoji_name;
  return matchSuccess(expectedDesc);
}

function waitForAnyEmojiAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Upload\ custom\ emoji\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Upload\ custom\ emoji\ (.+)$/);
  var captures = m.slice(1);
  var names = ["emoji_name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getEmojiAddedEvent(keyVal) {
  return bp.EventSet("AddEmoji:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.emoji_name) === String(keyVal);
  });
}

function matchAnyEmojiAdded() {
  return bp.EventSet("matchAnyEmojiAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.emoji_name !== undefined && e.name.indexOf("Create emoji") > -1;
  });
}

function waitForEmojiAdded(emoji_name) {
  var expectedDesc = "Upload custom emoji " + emoji_name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedEmoji(emoji_name) {
  var expectedDesc = "Deactivate custom emoji " + emoji_name;
  return bp.EventSet("matchDeletedEmoji", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyEmojiDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Deactivate\ custom\ emoji\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Deactivate\ custom\ emoji\ (.+)$/);
  var captures = m.slice(1);
  var names = ["emoji_name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: custom profile field ----

function createCustomProfileField() {
  var url = "/realm/profile_fields";
  var description = "Create a custom profile field with field_type {field_type}";
  var body = {
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

function reorderCustomProfileFields() {
  var url = "/realm/profile_fields";
  var description = "Reorder custom profile fields with order {order}";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getCustomProfileFields() {
  var url = "/realm/profile_fields";
  var description = "Get all custom profile fields";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingProfileField() {
  getCustomProfileFields();
}

function verifyProfileFieldExists() {
  var url = "/realm/profile_fields";
  var description = "Verify ProfileField exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("ProfileField exists");
          }
        }
      }
      return pvg.fail("Expected ProfileField to exist but it does not");
    }
  });
}

function verifyProfileFieldDoesNotExist() {
  var url = "/realm/profile_fields";
  var description = "Verify ProfileField does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected ProfileField to not exist but it does");
          }
        }
      }
      return pvg.success("ProfileField does not exist");
    }
  });
}

function matchAddedProfileField() {
  var expectedDesc = "Create a custom profile field with field_type {field_type}";
  return matchSuccess(expectedDesc);
}

function waitForAnyProfileFieldAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ a\ custom\ profile\ field\ with\ field_type\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ a\ custom\ profile\ field\ with\ field_type\ (.+)$/);
  var captures = m.slice(1);
  var names = ["field_type"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getProfileFieldAddedEvent(keyVal) {
  return bp.EventSet("AddProfileField:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyProfileFieldAdded() {
  return bp.EventSet("matchAnyProfileFieldAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create custom profile field") > -1;
  });
}

function waitForProfileFieldAdded() {
  var expectedDesc = "Create a custom profile field with field_type {field_type}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: realm user settings defaults ----

function updateRealmUserSettingsDefaults() {
  var url = "/realm/user_settings_defaults";
  var description = "Update realm-level defaults of user settings";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: linkifier ----

function addLinkifier(filter_id) {
  var url = "/realm/filters";
  var description = "Add a linkifier with pattern {pattern} and url_template {url_template}";
  var body = {
    "filter_id": String(filter_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      filter_id: String(filter_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { filter_id: String(filter_id) }) });
}

function removeLinkifier(filter_id) {
  var url = "/realm/filters/" + filter_id;
  var description = "Remove a linkifier with id " + filter_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateLinkifier(filter_id) {
  var url = "/realm/filters/" + filter_id;
  var description = "Update a linkifier with id " + filter_id + " to pattern {pattern} and url_template {url_template}";
  var body = {
    "filter_id": String(filter_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      filter_id: String(filter_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { filter_id: String(filter_id) }) });
}

function getLinkifiers(filter_id) {
  var url = "/realm/linkifiers";
  var description = "Get linkifiers";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function reorderLinkifiers(filter_id) {
  var url = "/realm/linkifiers";
  var description = "Reorder linkifiers with ordered_linkifier_ids {ordered_linkifier_ids}";
  var body = {
    "filter_id": String(filter_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      filter_id: String(filter_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { filter_id: String(filter_id) }) });
}

function tryToAddExistingLinkifier(filter_id) {
  reorderLinkifiers(filter_id);
}

function verifyLinkifierExists(filter_id) {
  var url = "/realm/filters";
  var description = "Verify Linkifier with filter_id " + filter_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].filter_id) === String(filter_id)) {
            return pvg.success("Linkifier exists");
          }
        }
      }
      return pvg.fail("Expected Linkifier to exist but it does not");
    }
  });
}

function verifyLinkifierDoesNotExist(filter_id) {
  var url = "/realm/filters";
  var description = "Verify Linkifier with filter_id " + filter_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].filter_id) === String(filter_id)) {
            return pvg.fail("Expected Linkifier to not exist but it does");
          }
        }
      }
      return pvg.success("Linkifier does not exist");
    }
  });
}

function tryToDeleteANonExistingLinkifier(filter_id) {
  var url = "/realm/filters/" + filter_id;
  var description = "Verify we cannot delete non-existing Linkifier";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedLinkifier(filter_id) {
  var expectedDesc = "Add a linkifier with pattern {pattern} and url_template {url_template}";
  return matchSuccess(expectedDesc);
}

function waitForAnyLinkifierAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ a\ linkifier\ with\ pattern\ (.+)\ and\ url_template\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ a\ linkifier\ with\ pattern\ (.+)\ and\ url_template\ (.+)$/);
  var captures = m.slice(1);
  var names = ["pattern", "url_template"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getLinkifierAddedEvent(keyVal) {
  return bp.EventSet("AddLinkifier:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.filter_id) === String(keyVal);
  });
}

function matchAnyLinkifierAdded() {
  return bp.EventSet("matchAnyLinkifierAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.filter_id !== undefined && e.name.indexOf("Create linkifier") > -1;
  });
}

function waitForLinkifierAdded(filter_id) {
  var expectedDesc = "Add a linkifier with pattern {pattern} and url_template {url_template}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedLinkifier(filter_id) {
  var expectedDesc = "Remove a linkifier with id " + filter_id;
  return bp.EventSet("matchDeletedLinkifier", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLinkifierDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ a\ linkifier\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ a\ linkifier\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["filter_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: code playground ----

function addCodePlayground(playground_id) {
  var url = "/realm/playgrounds";
  var description = "Add a code playground named {name} with language {pygments_language}";
  var body = {
    "playground_id": String(playground_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      playground_id: String(playground_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { playground_id: String(playground_id) }) });
}

function removeCodePlayground(playground_id) {
  var url = "/realm/playgrounds/" + playground_id;
  var description = "Remove a code playground with id " + playground_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingCodePlayground(playground_id) {
  removeCodePlayground(playground_id);
}

function verifyCodePlaygroundExists(playground_id) {
  var url = "/realm/playgrounds";
  var description = "Verify CodePlayground with playground_id " + playground_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].playground_id) === String(playground_id)) {
            return pvg.success("CodePlayground exists");
          }
        }
      }
      return pvg.fail("Expected CodePlayground to exist but it does not");
    }
  });
}

function verifyCodePlaygroundDoesNotExist(playground_id) {
  var url = "/realm/playgrounds";
  var description = "Verify CodePlayground with playground_id " + playground_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].playground_id) === String(playground_id)) {
            return pvg.fail("Expected CodePlayground to not exist but it does");
          }
        }
      }
      return pvg.success("CodePlayground does not exist");
    }
  });
}

function tryToDeleteANonExistingCodePlayground(playground_id) {
  var url = "/realm/playgrounds/" + playground_id;
  var description = "Verify we cannot delete non-existing CodePlayground";
  svc.delete(url, {
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedCodePlayground(playground_id) {
  var expectedDesc = "Add a code playground named {name} with language {pygments_language}";
  return matchSuccess(expectedDesc);
}

function waitForAnyCodePlaygroundAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ a\ code\ playground\ named\ (.+)\ with\ language\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ a\ code\ playground\ named\ (.+)\ with\ language\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "pygments_language"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCodePlaygroundAddedEvent(keyVal) {
  return bp.EventSet("AddCodePlayground:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.playground_id) === String(keyVal);
  });
}

function matchAnyCodePlaygroundAdded() {
  return bp.EventSet("matchAnyCodePlaygroundAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.playground_id !== undefined && e.name.indexOf("Create code playground") > -1;
  });
}

function waitForCodePlaygroundAdded(playground_id) {
  var expectedDesc = "Add a code playground named {name} with language {pygments_language}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCodePlayground(playground_id) {
  var expectedDesc = "Remove a code playground with id " + playground_id;
  return bp.EventSet("matchDeletedCodePlayground", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCodePlaygroundDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ a\ code\ playground\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ a\ code\ playground\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["playground_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: realm export ----

function getRealmExports() {
  var url = "/export/realm";
  var description = "Get all data exports";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createRealmExport() {
  var url = "/export/realm";
  var description = "Create a data export with export_type {export_type}";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingRealmExport() {
  createRealmExport();
}

function verifyRealmExportExists() {
  var url = "/export/realm";
  var description = "Verify RealmExport exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RealmExport exists");
          }
        }
      }
      return pvg.fail("Expected RealmExport to exist but it does not");
    }
  });
}

function verifyRealmExportDoesNotExist() {
  var url = "/export/realm";
  var description = "Verify RealmExport does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RealmExport to not exist but it does");
          }
        }
      }
      return pvg.success("RealmExport does not exist");
    }
  });
}

function matchAddedRealmExport() {
  var expectedDesc = "Create a data export with export_type {export_type}";
  return matchSuccess(expectedDesc);
}

function waitForAnyRealmExportAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ a\ data\ export\ with\ export_type\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ a\ data\ export\ with\ export_type\ (.+)$/);
  var captures = m.slice(1);
  var names = ["export_type"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRealmExportAddedEvent(keyVal) {
  return bp.EventSet("AddRealmExport:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRealmExportAdded() {
  return bp.EventSet("matchAnyRealmExportAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create realm export") > -1;
  });
}

function waitForRealmExportAdded() {
  var expectedDesc = "Create a data export with export_type {export_type}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: realm export consents ----

function getRealmExportConsents() {
  var url = "/export/realm/consents";
  var description = "Get data export consent state";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyRealmExportConsentsExists() {
  var url = "/export/realm/consents";
  var description = "Verify RealmExportConsents exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RealmExportConsents exists");
          }
        }
      }
      return pvg.fail("Expected RealmExportConsents to exist but it does not");
    }
  });
}

function verifyRealmExportConsentsDoesNotExist() {
  var url = "/export/realm/consents";
  var description = "Verify RealmExportConsents does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RealmExportConsents to not exist but it does");
          }
        }
      }
      return pvg.success("RealmExportConsents does not exist");
    }
  });
}

// ---- Entity: welcome bot custom message test ----

function testWelcomeBotCustomMessage(welcome_message_custom_text) {
  var url = "/realm/test_welcome_bot_custom_message";
  var description = "Test welcome bot custom message with welcome_message_custom_text " + welcome_message_custom_text;
  var body = {
    "welcome_message_custom_text": String(welcome_message_custom_text),
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

function tryToAddExistingWelcomeBotCustomMessageTest(welcome_message_custom_text) {
  testWelcomeBotCustomMessage(welcome_message_custom_text);
}

function verifyWelcomeBotCustomMessageTestExists(welcome_message_custom_text) {
  var url = "/realm/test_welcome_bot_custom_message";
  var description = "Verify WelcomeBotCustomMessageTest exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].welcome_message_custom_text) === String(welcome_message_custom_text)) {
            return pvg.success("WelcomeBotCustomMessageTest exists");
          }
        }
      }
      return pvg.fail("Expected WelcomeBotCustomMessageTest to exist but it does not");
    }
  });
}

function verifyWelcomeBotCustomMessageTestDoesNotExist(welcome_message_custom_text) {
  var url = "/realm/test_welcome_bot_custom_message";
  var description = "Verify WelcomeBotCustomMessageTest does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].welcome_message_custom_text) === String(welcome_message_custom_text)) {
            return pvg.fail("Expected WelcomeBotCustomMessageTest to not exist but it does");
          }
        }
      }
      return pvg.success("WelcomeBotCustomMessageTest does not exist");
    }
  });
}

function matchAddedWelcomeBotCustomMessageTest(welcome_message_custom_text) {
  var expectedDesc = "Test welcome bot custom message with welcome_message_custom_text " + welcome_message_custom_text;
  return matchSuccess(expectedDesc);
}

function waitForAnyWelcomeBotCustomMessageTestAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Test\ welcome\ bot\ custom\ message\ with\ welcome_message_custom_text\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Test\ welcome\ bot\ custom\ message\ with\ welcome_message_custom_text\ (.+)$/);
  var captures = m.slice(1);
  var names = ["welcome_message_custom_text"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWelcomeBotCustomMessageTestAddedEvent(keyVal) {
  return bp.EventSet("AddWelcomeBotCustomMessageTest:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyWelcomeBotCustomMessageTestAdded() {
  return bp.EventSet("matchAnyWelcomeBotCustomMessageTestAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create welcome bot custom message test") > -1;
  });
}

function waitForWelcomeBotCustomMessageTestAdded(welcome_message_custom_text) {
  var expectedDesc = "Test welcome bot custom message with welcome_message_custom_text " + welcome_message_custom_text;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: server settings ----

function getServerSettings() {
  var url = "/server_settings";
  var description = "Get server settings";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyServerSettingsExists() {
  var url = "/server_settings";
  var description = "Verify ServerSettings exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("ServerSettings exists");
          }
        }
      }
      return pvg.fail("Expected ServerSettings to exist but it does not");
    }
  });
}

function verifyServerSettingsDoesNotExist() {
  var url = "/server_settings";
  var description = "Verify ServerSettings does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected ServerSettings to not exist but it does");
          }
        }
      }
      return pvg.success("ServerSettings does not exist");
    }
  });
}

// ---- Entity: invite ----

function getInvites(invite_id) {
  var url = "/invites";
  var description = "Get all invitations";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function sendInvites(invite_id) {
  var url = "/invites";
  var description = "Send invitations to {invitee_emails}";
  var body = {
    "invite_id": String(invite_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      invite_id: String(invite_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { invite_id: String(invite_id) }) });
}

function revokeEmailInvite(invite_id) {
  var url = "/invites/" + invite_id;
  var description = "Revoke email invitation with id " + invite_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function resendEmailInvite(invite_id) {
  var url = "/invites/" + invite_id + "/resend";
  var description = "Resend email invitation with id " + invite_id;
  var body = {
    "invite_id": String(invite_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      invite_id: String(invite_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { invite_id: String(invite_id) }) });
}

function tryToAddExistingInvite(invite_id) {
  resendEmailInvite(invite_id);
}

function verifyInviteExists(invite_id) {
  var url = "/invites";
  var description = "Verify Invite with invite_id " + invite_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].invite_id) === String(invite_id)) {
            return pvg.success("Invite exists");
          }
        }
      }
      return pvg.fail("Expected Invite to exist but it does not");
    }
  });
}

function verifyInviteDoesNotExist(invite_id) {
  var url = "/invites";
  var description = "Verify Invite with invite_id " + invite_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].invite_id) === String(invite_id)) {
            return pvg.fail("Expected Invite to not exist but it does");
          }
        }
      }
      return pvg.success("Invite does not exist");
    }
  });
}

function tryToDeleteANonExistingInvite(invite_id) {
  var url = "/invites/" + invite_id;
  var description = "Verify we cannot delete non-existing Invite";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedInvite(invite_id) {
  var expectedDesc = "Send invitations to {invitee_emails}";
  return matchSuccess(expectedDesc);
}

function waitForAnyInviteAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Send\ invitations\ to\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Send\ invitations\ to\ (.+)$/);
  var captures = m.slice(1);
  var names = ["invitee_emails"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getInviteAddedEvent(keyVal) {
  return bp.EventSet("AddInvite:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.invite_id) === String(keyVal);
  });
}

function matchAnyInviteAdded() {
  return bp.EventSet("matchAnyInviteAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.invite_id !== undefined && e.name.indexOf("Create invite") > -1;
  });
}

function waitForInviteAdded(invite_id) {
  var expectedDesc = "Send invitations to {invitee_emails}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedInvite(invite_id) {
  var expectedDesc = "Revoke email invitation with id " + invite_id;
  return bp.EventSet("matchDeletedInvite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyInviteDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Revoke\ email\ invitation\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Revoke\ email\ invitation\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["invite_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: invite link ----

function createInviteLink(invite_id) {
  var url = "/invites/multiuse";
  var description = "Create a reusable invitation link";
  var body = {
    "invite_id": String(invite_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      invite_id: String(invite_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { invite_id: String(invite_id) }) });
}

function revokeInviteLink(invite_id) {
  var url = "/invites/multiuse/" + invite_id;
  var description = "Revoke reusable invitation link with id " + invite_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingInviteLink(invite_id) {
  revokeInviteLink(invite_id);
}

function verifyInviteLinkExists(invite_id) {
  var url = "/invites/multiuse";
  var description = "Verify InviteLink with invite_id " + invite_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].invite_id) === String(invite_id)) {
            return pvg.success("InviteLink exists");
          }
        }
      }
      return pvg.fail("Expected InviteLink to exist but it does not");
    }
  });
}

function verifyInviteLinkDoesNotExist(invite_id) {
  var url = "/invites/multiuse";
  var description = "Verify InviteLink with invite_id " + invite_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].invite_id) === String(invite_id)) {
            return pvg.fail("Expected InviteLink to not exist but it does");
          }
        }
      }
      return pvg.success("InviteLink does not exist");
    }
  });
}

function tryToDeleteANonExistingInviteLink(invite_id) {
  var url = "/invites/multiuse/" + invite_id;
  var description = "Verify we cannot delete non-existing InviteLink";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedInviteLink(invite_id) {
  var expectedDesc = "Create a reusable invitation link";
  return matchSuccess(expectedDesc);
}

function waitForAnyInviteLinkAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ a\ reusable\ invitation\ link$/));
  var m = ev.data.parameters.description.match(/^Create\ a\ reusable\ invitation\ link$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getInviteLinkAddedEvent(keyVal) {
  return bp.EventSet("AddInviteLink:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.invite_id) === String(keyVal);
  });
}

function matchAnyInviteLinkAdded() {
  return bp.EventSet("matchAnyInviteLinkAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.invite_id !== undefined && e.name.indexOf("Create invite link") > -1;
  });
}

function waitForInviteLinkAdded(invite_id) {
  var expectedDesc = "Create a reusable invitation link";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedInviteLink(invite_id) {
  var expectedDesc = "Revoke reusable invitation link with id " + invite_id;
  return bp.EventSet("matchDeletedInviteLink", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyInviteLinkDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Revoke\ reusable\ invitation\ link\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Revoke\ reusable\ invitation\ link\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["invite_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: event queue ----

function getEvents(dont_block, last_event_id, queue_id) {
  var url = "/events";
  var description = "Get events from event queue " + queue_id + " since last_event_id " + last_event_id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function deleteQueue(dont_block, last_event_id, queue_id) {
  var url = "/events";
  var description = "Delete event queue " + queue_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyEventQueueExists(dont_block, last_event_id, queue_id) {
  var url = "/events";
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

function verifyEventQueueDoesNotExist(dont_block, last_event_id, queue_id) {
  var url = "/events";
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

function tryToDeleteANonExistingEventQueue(dont_block, last_event_id, queue_id) {
  var url = "/events";
  var description = "Verify we cannot delete non-existing EventQueue";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedEventQueue(dont_block, last_event_id, queue_id) {
  var expectedDesc = "Delete event queue " + queue_id;
  return bp.EventSet("matchDeletedEventQueue", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyEventQueueDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ event\ queue\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ event\ queue\ (.+)$/);
  var captures = m.slice(1);
  var names = ["queue_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: register queue ----

function registerQueue() {
  var url = "/register";
  var description = "Register an event queue with options apply_markdown {apply_markdown}, client_gravatar {client_gravatar}, include_subscribers {include_subscribers}, slim_presence {slim_presence}, presence_history_limit_days {presence_history_limit_days}, event_types {event_types}, all_public_streams {all_public_streams}, client_capabilities {client_capabilities}, fetch_event_types {fetch_event_types}, narrow {narrow}";
  var body = {
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

function tryToAddExistingRegisterQueue() {
  registerQueue();
}

function verifyRegisterQueueExists() {
  var url = "/register";
  var description = "Verify RegisterQueue exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RegisterQueue exists");
          }
        }
      }
      return pvg.fail("Expected RegisterQueue to exist but it does not");
    }
  });
}

function verifyRegisterQueueDoesNotExist() {
  var url = "/register";
  var description = "Verify RegisterQueue does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RegisterQueue to not exist but it does");
          }
        }
      }
      return pvg.success("RegisterQueue does not exist");
    }
  });
}

function matchAddedRegisterQueue() {
  var expectedDesc = "Register an event queue with options apply_markdown {apply_markdown}, client_gravatar {client_gravatar}, include_subscribers {include_subscribers}, slim_presence {slim_presence}, presence_history_limit_days {presence_history_limit_days}, event_types {event_types}, all_public_streams {all_public_streams}, client_capabilities {client_capabilities}, fetch_event_types {fetch_event_types}, narrow {narrow}";
  return matchSuccess(expectedDesc);
}

function waitForAnyRegisterQueueAdded() {
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

function getRegisterQueueAddedEvent(keyVal) {
  return bp.EventSet("AddRegisterQueue:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRegisterQueueAdded() {
  return bp.EventSet("matchAnyRegisterQueueAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create register queue") > -1;
  });
}

function waitForRegisterQueueAdded() {
  var expectedDesc = "Register an event queue with options apply_markdown {apply_markdown}, client_gravatar {client_gravatar}, include_subscribers {include_subscribers}, slim_presence {slim_presence}, presence_history_limit_days {presence_history_limit_days}, event_types {event_types}, all_public_streams {all_public_streams}, client_capabilities {client_capabilities}, fetch_event_types {fetch_event_types}, narrow {narrow}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: real time ----

function postRealTime() {
  var url = "/real-time";
  var description = "Post real-time event subscription with event_types {event_types}, narrow {narrow}, all_public_streams {all_public_streams}";
  var body = {
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

function tryToAddExistingRealTime() {
  postRealTime();
}

function verifyRealTimeExists() {
  var url = "/real-time";
  var description = "Verify RealTime exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RealTime exists");
          }
        }
      }
      return pvg.fail("Expected RealTime to exist but it does not");
    }
  });
}

function verifyRealTimeDoesNotExist() {
  var url = "/real-time";
  var description = "Verify RealTime does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RealTime to not exist but it does");
          }
        }
      }
      return pvg.success("RealTime does not exist");
    }
  });
}

function matchAddedRealTime() {
  var expectedDesc = "Post real-time event subscription with event_types {event_types}, narrow {narrow}, all_public_streams {all_public_streams}";
  return matchSuccess(expectedDesc);
}

function waitForAnyRealTimeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Post\ real\-time\ event\ subscription\ with\ event_types\ (.+),\ narrow\ (.+),\ all_public_streams\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Post\ real\-time\ event\ subscription\ with\ event_types\ (.+),\ narrow\ (.+),\ all_public_streams\ (.+)$/);
  var captures = m.slice(1);
  var names = ["event_types", "narrow", "all_public_streams"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRealTimeAddedEvent(keyVal) {
  return bp.EventSet("AddRealTime:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRealTimeAdded() {
  return bp.EventSet("matchAnyRealTimeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create real time") > -1;
  });
}

function waitForRealTimeAdded() {
  var expectedDesc = "Post real-time event subscription with event_types {event_types}, narrow {narrow}, all_public_streams {all_public_streams}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: draft ----

function createDrafts(draft_id) {
  var url = "/drafts";
  var description = "Create drafts";
  var body = {
    "draft_id": String(draft_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      draft_id: String(draft_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { draft_id: String(draft_id) }) });
}

function getDrafts(draft_id) {
  var url = "/drafts";
  var description = "Get drafts";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function editDraft(draft_id) {
  var url = "/drafts/" + draft_id;
  var description = "Edit draft " + draft_id;
  var body = {
    "draft_id": String(draft_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      draft_id: String(draft_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { draft_id: String(draft_id) }) });
}

function deleteDraft(draft_id) {
  var url = "/drafts/" + draft_id;
  var description = "Delete draft " + draft_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingDraft(draft_id) {
  deleteDraft(draft_id);
}

function verifyDraftExists(draft_id) {
  var url = "/drafts";
  var description = "Verify Draft with draft_id " + draft_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].draft_id) === String(draft_id)) {
            return pvg.success("Draft exists");
          }
        }
      }
      return pvg.fail("Expected Draft to exist but it does not");
    }
  });
}

function verifyDraftDoesNotExist(draft_id) {
  var url = "/drafts";
  var description = "Verify Draft with draft_id " + draft_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].draft_id) === String(draft_id)) {
            return pvg.fail("Expected Draft to not exist but it does");
          }
        }
      }
      return pvg.success("Draft does not exist");
    }
  });
}

function tryToDeleteANonExistingDraft(draft_id) {
  var url = "/drafts/" + draft_id;
  var description = "Verify we cannot delete non-existing Draft";
  svc.delete(url, {
    expectedResponseCodes: [200, 404],
    parameters: { description: description }
  });
}

function matchAddedDraft(draft_id) {
  var expectedDesc = "Create drafts";
  return matchSuccess(expectedDesc);
}

function waitForAnyDraftAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ drafts$/));
  var m = ev.data.parameters.description.match(/^Create\ drafts$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getDraftAddedEvent(keyVal) {
  return bp.EventSet("AddDraft:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.draft_id) === String(keyVal);
  });
}

function matchAnyDraftAdded() {
  return bp.EventSet("matchAnyDraftAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.draft_id !== undefined && e.name.indexOf("Create draft") > -1;
  });
}

function waitForDraftAdded(draft_id) {
  var expectedDesc = "Create drafts";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedDraft(draft_id) {
  var expectedDesc = "Delete draft " + draft_id;
  return bp.EventSet("matchDeletedDraft", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDraftDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ draft\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ draft\ (.+)$/);
  var captures = m.slice(1);
  var names = ["draft_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: saved snippet ----

function createSavedSnippet(saved_snippet_id) {
  var url = "/saved_snippets";
  var description = "Create saved snippet {title}";
  var body = {
    "saved_snippet_id": String(saved_snippet_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      saved_snippet_id: String(saved_snippet_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { saved_snippet_id: String(saved_snippet_id) }) });
}

function getSavedSnippets(saved_snippet_id) {
  var url = "/saved_snippets";
  var description = "Get all saved snippets";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function editSavedSnippet(saved_snippet_id) {
  var url = "/saved_snippets/" + saved_snippet_id;
  var description = "Edit saved snippet " + saved_snippet_id;
  var body = {
    "saved_snippet_id": String(saved_snippet_id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      saved_snippet_id: String(saved_snippet_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { saved_snippet_id: String(saved_snippet_id) }) });
}

function deleteSavedSnippet(saved_snippet_id) {
  var url = "/saved_snippets/" + saved_snippet_id;
  var description = "Delete saved snippet " + saved_snippet_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingSavedSnippet(saved_snippet_id) {
  deleteSavedSnippet(saved_snippet_id);
}

function verifySavedSnippetExists(saved_snippet_id) {
  var url = "/saved_snippets";
  var description = "Verify SavedSnippet with saved_snippet_id " + saved_snippet_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].saved_snippet_id) === String(saved_snippet_id)) {
            return pvg.success("SavedSnippet exists");
          }
        }
      }
      return pvg.fail("Expected SavedSnippet to exist but it does not");
    }
  });
}

function verifySavedSnippetDoesNotExist(saved_snippet_id) {
  var url = "/saved_snippets";
  var description = "Verify SavedSnippet with saved_snippet_id " + saved_snippet_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].saved_snippet_id) === String(saved_snippet_id)) {
            return pvg.fail("Expected SavedSnippet to not exist but it does");
          }
        }
      }
      return pvg.success("SavedSnippet does not exist");
    }
  });
}

function tryToDeleteANonExistingSavedSnippet(saved_snippet_id) {
  var url = "/saved_snippets/" + saved_snippet_id;
  var description = "Verify we cannot delete non-existing SavedSnippet";
  svc.delete(url, {
    expectedResponseCodes: [200, 404],
    parameters: { description: description }
  });
}

function matchAddedSavedSnippet(saved_snippet_id) {
  var expectedDesc = "Create saved snippet {title}";
  return matchSuccess(expectedDesc);
}

function waitForAnySavedSnippetAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ saved\ snippet\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ saved\ snippet\ (.+)$/);
  var captures = m.slice(1);
  var names = ["title"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getSavedSnippetAddedEvent(keyVal) {
  return bp.EventSet("AddSavedSnippet:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.saved_snippet_id) === String(keyVal);
  });
}

function matchAnySavedSnippetAdded() {
  return bp.EventSet("matchAnySavedSnippetAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.saved_snippet_id !== undefined && e.name.indexOf("Create saved snippet") > -1;
  });
}

function waitForSavedSnippetAdded(saved_snippet_id) {
  var expectedDesc = "Create saved snippet {title}";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedSavedSnippet(saved_snippet_id) {
  var expectedDesc = "Delete saved snippet " + saved_snippet_id;
  return bp.EventSet("matchDeletedSavedSnippet", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySavedSnippetDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ saved\ snippet\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ saved\ snippet\ (.+)$/);
  var captures = m.slice(1);
  var names = ["saved_snippet_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: mobile push test notification ----

function sendTestNotification(token) {
  var url = "/mobile_push/test_notification";
  var description = "Send a test notification with token " + token;
  var body = {
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMobilePushTestNotification(token) {
  sendTestNotification(token);
}

function verifyMobilePushTestNotificationExists(token) {
  var url = "/mobile_push/test_notification";
  var description = "Verify MobilePushTestNotification exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].token) === String(token)) {
            return pvg.success("MobilePushTestNotification exists");
          }
        }
      }
      return pvg.fail("Expected MobilePushTestNotification to exist but it does not");
    }
  });
}

function verifyMobilePushTestNotificationDoesNotExist(token) {
  var url = "/mobile_push/test_notification";
  var description = "Verify MobilePushTestNotification does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].token) === String(token)) {
            return pvg.fail("Expected MobilePushTestNotification to not exist but it does");
          }
        }
      }
      return pvg.success("MobilePushTestNotification does not exist");
    }
  });
}

function matchAddedMobilePushTestNotification(token) {
  var expectedDesc = "Send a test notification with token " + token;
  return matchSuccess(expectedDesc);
}

function waitForAnyMobilePushTestNotificationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Send\ a\ test\ notification\ with\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Send\ a\ test\ notification\ with\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMobilePushTestNotificationAddedEvent(keyVal) {
  return bp.EventSet("AddMobilePushTestNotification:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMobilePushTestNotificationAdded() {
  return bp.EventSet("matchAnyMobilePushTestNotificationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create mobile push test notification") > -1;
  });
}

function waitForMobilePushTestNotificationAdded(token) {
  var expectedDesc = "Send a test notification with token " + token;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: mobile push e2ee test notification ----

function sendE2EETestNotification(push_account_id) {
  var url = "/mobile_push/e2ee/test_notification";
  var description = "Send an E2EE test notification with push_account_id " + push_account_id;
  var body = {
    "push_account_id": String(push_account_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403, 502],
    parameters: {
      description: description,
      , push_account_id: String(push_account_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMobilePushE2EETestNotification(push_account_id) {
  sendE2EETestNotification(push_account_id);
}

function verifyMobilePushE2EETestNotificationExists(push_account_id) {
  var url = "/mobile_push/e2ee/test_notification";
  var description = "Verify MobilePushE2EETestNotification exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].push_account_id) === String(push_account_id)) {
            return pvg.success("MobilePushE2EETestNotification exists");
          }
        }
      }
      return pvg.fail("Expected MobilePushE2EETestNotification to exist but it does not");
    }
  });
}

function verifyMobilePushE2EETestNotificationDoesNotExist(push_account_id) {
  var url = "/mobile_push/e2ee/test_notification";
  var description = "Verify MobilePushE2EETestNotification does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].push_account_id) === String(push_account_id)) {
            return pvg.fail("Expected MobilePushE2EETestNotification to not exist but it does");
          }
        }
      }
      return pvg.success("MobilePushE2EETestNotification does not exist");
    }
  });
}

function matchAddedMobilePushE2EETestNotification(push_account_id) {
  var expectedDesc = "Send an E2EE test notification with push_account_id " + push_account_id;
  return matchSuccess(expectedDesc);
}

function waitForAnyMobilePushE2EETestNotificationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Send\ an\ E2EE\ test\ notification\ with\ push_account_id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Send\ an\ E2EE\ test\ notification\ with\ push_account_id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["push_account_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMobilePushE2EETestNotificationAddedEvent(keyVal) {
  return bp.EventSet("AddMobilePushE2EETestNotification:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMobilePushE2EETestNotificationAdded() {
  return bp.EventSet("matchAnyMobilePushE2EETestNotificationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create mobile push e2ee test notification") > -1;
  });
}

function waitForMobilePushE2EETestNotificationAdded(push_account_id) {
  var expectedDesc = "Send an E2EE test notification with push_account_id " + push_account_id;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: push device registration ----

function registerPushDevice(bouncer_public_key, encrypted_push_registration, push_account_id, push_public_key, token_kind) {
  var url = "/mobile_push/register";
  var description = "Register push device with push_account_id " + push_account_id + " and token_kind " + token_kind;
  var body = {
    "bouncer_public_key": String(bouncer_public_key),
    "encrypted_push_registration": String(encrypted_push_registration),
    "push_account_id": String(push_account_id),
    "push_public_key": String(push_public_key),
    "token_kind": String(token_kind),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , push_account_id: String(push_account_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingPushDeviceRegistration(bouncer_public_key, encrypted_push_registration, push_account_id, push_public_key, token_kind) {
  registerPushDevice(bouncer_public_key, encrypted_push_registration, push_account_id, push_public_key, token_kind);
}

function verifyPushDeviceRegistrationExists(bouncer_public_key, encrypted_push_registration, push_account_id, push_public_key, token_kind) {
  var url = "/mobile_push/register";
  var description = "Verify PushDeviceRegistration exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].push_account_id) === String(push_account_id)) {
            return pvg.success("PushDeviceRegistration exists");
          }
        }
      }
      return pvg.fail("Expected PushDeviceRegistration to exist but it does not");
    }
  });
}

function verifyPushDeviceRegistrationDoesNotExist(bouncer_public_key, encrypted_push_registration, push_account_id, push_public_key, token_kind) {
  var url = "/mobile_push/register";
  var description = "Verify PushDeviceRegistration does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].push_account_id) === String(push_account_id)) {
            return pvg.fail("Expected PushDeviceRegistration to not exist but it does");
          }
        }
      }
      return pvg.success("PushDeviceRegistration does not exist");
    }
  });
}

function matchAddedPushDeviceRegistration(bouncer_public_key, encrypted_push_registration, push_account_id, push_public_key, token_kind) {
  var expectedDesc = "Register push device with push_account_id " + push_account_id + " and token_kind " + token_kind;
  return matchSuccess(expectedDesc);
}

function waitForAnyPushDeviceRegistrationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Register\ push\ device\ with\ push_account_id\ (.+)\ and\ token_kind\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Register\ push\ device\ with\ push_account_id\ (.+)\ and\ token_kind\ (.+)$/);
  var captures = m.slice(1);
  var names = ["push_account_id", "token_kind"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPushDeviceRegistrationAddedEvent(keyVal) {
  return bp.EventSet("AddPushDeviceRegistration:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPushDeviceRegistrationAdded() {
  return bp.EventSet("matchAnyPushDeviceRegistrationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create push device registration") > -1;
  });
}

function waitForPushDeviceRegistrationAdded(bouncer_public_key, encrypted_push_registration, push_account_id, push_public_key, token_kind) {
  var expectedDesc = "Register push device with push_account_id " + push_account_id + " and token_kind " + token_kind;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: remote push device registration ----

function registerRemotePushDevice(bouncer_public_key, encrypted_push_registration, push_account_id, realm_uuid) {
  var url = "/remotes/push/e2ee/register";
  var description = "Register remote push device with realm_uuid " + realm_uuid + " and push_account_id " + push_account_id;
  var body = {
    "bouncer_public_key": String(bouncer_public_key),
    "encrypted_push_registration": String(encrypted_push_registration),
    "push_account_id": String(push_account_id),
    "realm_uuid": String(realm_uuid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403],
    parameters: {
      description: description,
      , push_account_id: String(push_account_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingRemotePushDeviceRegistration(bouncer_public_key, encrypted_push_registration, push_account_id, realm_uuid) {
  registerRemotePushDevice(bouncer_public_key, encrypted_push_registration, push_account_id, realm_uuid);
}

function verifyRemotePushDeviceRegistrationExists(bouncer_public_key, encrypted_push_registration, push_account_id, realm_uuid) {
  var url = "/remotes/push/e2ee/register";
  var description = "Verify RemotePushDeviceRegistration exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].push_account_id) === String(push_account_id)) {
            return pvg.success("RemotePushDeviceRegistration exists");
          }
        }
      }
      return pvg.fail("Expected RemotePushDeviceRegistration to exist but it does not");
    }
  });
}

function verifyRemotePushDeviceRegistrationDoesNotExist(bouncer_public_key, encrypted_push_registration, push_account_id, realm_uuid) {
  var url = "/remotes/push/e2ee/register";
  var description = "Verify RemotePushDeviceRegistration does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].push_account_id) === String(push_account_id)) {
            return pvg.fail("Expected RemotePushDeviceRegistration to not exist but it does");
          }
        }
      }
      return pvg.success("RemotePushDeviceRegistration does not exist");
    }
  });
}

function matchAddedRemotePushDeviceRegistration(bouncer_public_key, encrypted_push_registration, push_account_id, realm_uuid) {
  var expectedDesc = "Register remote push device with realm_uuid " + realm_uuid + " and push_account_id " + push_account_id;
  return matchSuccess(expectedDesc);
}

function waitForAnyRemotePushDeviceRegistrationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Register\ remote\ push\ device\ with\ realm_uuid\ (.+)\ and\ push_account_id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Register\ remote\ push\ device\ with\ realm_uuid\ (.+)\ and\ push_account_id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm_uuid", "push_account_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRemotePushDeviceRegistrationAddedEvent(keyVal) {
  return bp.EventSet("AddRemotePushDeviceRegistration:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRemotePushDeviceRegistrationAdded() {
  return bp.EventSet("matchAnyRemotePushDeviceRegistrationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create remote push device registration") > -1;
  });
}

function waitForRemotePushDeviceRegistrationAdded(bouncer_public_key, encrypted_push_registration, push_account_id, realm_uuid) {
  var expectedDesc = "Register remote push device with realm_uuid " + realm_uuid + " and push_account_id " + push_account_id;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: api key ----

function fetchApiKey(password, username) {
  var url = "/fetch_api_key";
  var description = "Fetch an API key for user " + username;
  var body = {
    "password": String(password),
    "username": String(username),
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

function devFetchApiKey(password, username) {
  var url = "/dev_fetch_api_key";
  var description = "Fetch a development API key for user " + username;
  var body = {
    "username": String(username),
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

function tryToAddExistingApiKey(password, username) {
  devFetchApiKey(password, username);
}

function verifyApiKeyExists(password, username) {
  var url = "/fetch_api_key";
  var description = "Verify ApiKey exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].password) === String(password) && String(items[i].username) === String(username)) {
            return pvg.success("ApiKey exists");
          }
        }
      }
      return pvg.fail("Expected ApiKey to exist but it does not");
    }
  });
}

function verifyApiKeyDoesNotExist(password, username) {
  var url = "/fetch_api_key";
  var description = "Verify ApiKey does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].password) === String(password) && String(items[i].username) === String(username)) {
            return pvg.fail("Expected ApiKey to not exist but it does");
          }
        }
      }
      return pvg.success("ApiKey does not exist");
    }
  });
}

function matchAddedApiKey(password, username) {
  var expectedDesc = "Fetch an API key for user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyApiKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Fetch\ an\ API\ key\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Fetch\ an\ API\ key\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getApiKeyAddedEvent(keyVal) {
  return bp.EventSet("AddApiKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyApiKeyAdded() {
  return bp.EventSet("matchAnyApiKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create api key") > -1;
  });
}

function waitForApiKeyAdded(password, username) {
  var expectedDesc = "Fetch an API key for user " + username;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: navigation view ----

function addNavigationView(fragment) {
  var url = "/navigation_views";
  var description = "Create navigation view " + fragment;
  var body = {
    "fragment": String(fragment),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      fragment: String(fragment)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fragment: String(fragment) }) });
}

function getNavigationViews(fragment) {
  var url = "/navigation_views";
  var description = "Get all navigation views";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function editNavigationView(fragment) {
  var url = "/navigation_views/" + fragment;
  var description = "Update navigation view " + fragment;
  var body = {
    "fragment": String(fragment),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      fragment: String(fragment)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fragment: String(fragment) }) });
}

function removeNavigationView(fragment) {
  var url = "/navigation_views/" + fragment;
  var description = "Remove navigation view " + fragment;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingNavigationView(fragment) {
  removeNavigationView(fragment);
}

function verifyNavigationViewExists(fragment) {
  var url = "/navigation_views";
  var description = "Verify NavigationView with fragment " + fragment + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fragment) === String(fragment)) {
            return pvg.success("NavigationView exists");
          }
        }
      }
      return pvg.fail("Expected NavigationView to exist but it does not");
    }
  });
}

function verifyNavigationViewDoesNotExist(fragment) {
  var url = "/navigation_views";
  var description = "Verify NavigationView with fragment " + fragment + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fragment) === String(fragment)) {
            return pvg.fail("Expected NavigationView to not exist but it does");
          }
        }
      }
      return pvg.success("NavigationView does not exist");
    }
  });
}

function tryToDeleteANonExistingNavigationView(fragment) {
  var url = "/navigation_views/" + fragment;
  var description = "Verify we cannot delete non-existing NavigationView";
  svc.delete(url, {
    expectedResponseCodes: [200, 404],
    parameters: { description: description }
  });
}

function matchAddedNavigationView(fragment) {
  var expectedDesc = "Create navigation view " + fragment;
  return matchSuccess(expectedDesc);
}

function waitForAnyNavigationViewAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ navigation\ view\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ navigation\ view\ (.+)$/);
  var captures = m.slice(1);
  var names = ["fragment"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getNavigationViewAddedEvent(keyVal) {
  return bp.EventSet("AddNavigationView:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.fragment) === String(keyVal);
  });
}

function matchAnyNavigationViewAdded() {
  return bp.EventSet("matchAnyNavigationViewAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.fragment !== undefined && e.name.indexOf("Create navigation view") > -1;
  });
}

function waitForNavigationViewAdded(fragment) {
  var expectedDesc = "Create navigation view " + fragment;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedNavigationView(fragment) {
  var expectedDesc = "Remove navigation view " + fragment;
  return bp.EventSet("matchDeletedNavigationView", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyNavigationViewDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ navigation\ view\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ navigation\ view\ (.+)$/);
  var captures = m.slice(1);
  var names = ["fragment"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: reminder ----

function createReminder(reminder_id) {
  var url = "/reminders";
  var description = "Create reminder with message_id {message_id} scheduled at {scheduled_delivery_timestamp}";
  var body = {
    "reminder_id": String(reminder_id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      reminder_id: String(reminder_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { reminder_id: String(reminder_id) }) });
}

function getReminders(reminder_id) {
  var url = "/reminders";
  var description = "Get reminders";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteReminder(reminder_id) {
  var url = "/reminders/" + reminder_id;
  var description = "Delete reminder with id " + reminder_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingReminder(reminder_id) {
  deleteReminder(reminder_id);
}

function verifyReminderExists(reminder_id) {
  var url = "/reminders";
  var description = "Verify Reminder with reminder_id " + reminder_id + " exists";
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
  var description = "Verify Reminder with reminder_id " + reminder_id + " does not exist";
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
    expectedResponseCodes: [200, 404],
    parameters: { description: description }
  });
}

function matchAddedReminder(reminder_id) {
  var expectedDesc = "Create reminder with message_id {message_id} scheduled at {scheduled_delivery_timestamp}";
  return matchSuccess(expectedDesc);
}

function waitForAnyReminderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ reminder\ with\ message_id\ (.+)\ scheduled\ at\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ reminder\ with\ message_id\ (.+)\ scheduled\ at\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.reminder_id !== undefined && e.name.indexOf("Create reminder") > -1;
  });
}

function waitForReminderAdded(reminder_id) {
  var expectedDesc = "Create reminder with message_id {message_id} scheduled at {scheduled_delivery_timestamp}";
  waitFor(matchSuccess(expectedDesc));
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

// ---- Entity: scheduled message ----

function createScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var url = "/scheduled_messages";
  var description = "Create scheduled message of type " + type + " to " + to + " scheduled at " + scheduled_delivery_timestamp;
  var body = {
    "content": String(content),
    "scheduled_delivery_timestamp": String(scheduled_delivery_timestamp),
    "scheduled_message_id": String(scheduled_message_id),
    "to": String(to),
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      scheduled_message_id: String(scheduled_message_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { scheduled_message_id: String(scheduled_message_id) }) });
}

function getScheduledMessages(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var url = "/scheduled_messages";
  var description = "Get scheduled messages";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var url = "/scheduled_messages/" + scheduled_message_id;
  var description = "Update scheduled message " + scheduled_message_id + " with type " + type + " to " + to + " scheduled at " + scheduled_delivery_timestamp;
  var body = {
    "content": String(content),
    "scheduled_delivery_timestamp": String(scheduled_delivery_timestamp),
    "scheduled_message_id": String(scheduled_message_id),
    "to": String(to),
    "topic": String(topic),
    "type": String(type),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      scheduled_message_id: String(scheduled_message_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { scheduled_message_id: String(scheduled_message_id) }) });
}

function deleteScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var url = "/scheduled_messages/" + scheduled_message_id;
  var description = "Delete scheduled message " + scheduled_message_id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  deleteScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type);
}

function verifyScheduledMessageExists(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var url = "/scheduled_messages";
  var description = "Verify ScheduledMessage with scheduled_message_id " + scheduled_message_id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].scheduled_message_id) === String(scheduled_message_id)) {
            return pvg.success("ScheduledMessage exists");
          }
        }
      }
      return pvg.fail("Expected ScheduledMessage to exist but it does not");
    }
  });
}

function verifyScheduledMessageDoesNotExist(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var url = "/scheduled_messages";
  var description = "Verify ScheduledMessage with scheduled_message_id " + scheduled_message_id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].scheduled_message_id) === String(scheduled_message_id)) {
            return pvg.fail("Expected ScheduledMessage to not exist but it does");
          }
        }
      }
      return pvg.success("ScheduledMessage does not exist");
    }
  });
}

function tryToDeleteANonExistingScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var url = "/scheduled_messages/" + scheduled_message_id;
  var description = "Verify we cannot delete non-existing ScheduledMessage";
  svc.delete(url, {
    expectedResponseCodes: [200, 404],
    parameters: { description: description }
  });
}

function matchAddedScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var expectedDesc = "Create scheduled message of type " + type + " to " + to + " scheduled at " + scheduled_delivery_timestamp;
  return matchSuccess(expectedDesc);
}

function waitForAnyScheduledMessageAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ scheduled\ message\ of\ type\ (.+)\ to\ (.+)\ scheduled\ at\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ scheduled\ message\ of\ type\ (.+)\ to\ (.+)\ scheduled\ at\ (.+)$/);
  var captures = m.slice(1);
  var names = ["type", "to", "scheduled_delivery_timestamp"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getScheduledMessageAddedEvent(keyVal) {
  return bp.EventSet("AddScheduledMessage:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.scheduled_message_id) === String(keyVal);
  });
}

function matchAnyScheduledMessageAdded() {
  return bp.EventSet("matchAnyScheduledMessageAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.scheduled_message_id !== undefined && e.name.indexOf("Create scheduled message") > -1;
  });
}

function waitForScheduledMessageAdded(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var expectedDesc = "Create scheduled message of type " + type + " to " + to + " scheduled at " + scheduled_delivery_timestamp;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedScheduledMessage(content, scheduled_delivery_timestamp, scheduled_message_id, to, topic, type) {
  var expectedDesc = "Delete scheduled message " + scheduled_message_id;
  return bp.EventSet("matchDeletedScheduledMessage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyScheduledMessageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ scheduled\ message\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ scheduled\ message\ (.+)$/);
  var captures = m.slice(1);
  var names = ["scheduled_message_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
