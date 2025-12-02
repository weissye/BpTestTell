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

// ---- Entity: issue ----

function createIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue";
  var description = "Create issue " + summary + " in project " + project + " with issue type " + issuetype;
  var body = {
    "fields": fields,
    "historyMetadata": historyMetadata,
    "issueIdOrKey": String(issueIdOrKey),
    "properties": String(properties),
    "transition": String(transition),
    "update": update,
    "updateHistory": String(updateHistory),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 422],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function createIssues(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue/bulk";
  var description = "Bulk create issues";
  var body = {
    "issueIdOrKey": String(issueIdOrKey),
    "issueUpdates": [],
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function bulkFetchIssues(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue/bulkfetch";
  var description = "Bulk fetch issues by IDs or keys";
  var body = {
    "expand": [],
    "fields": String(fields),
    "fieldsByKeys": String(true),
    "issueIdOrKey": String(issueIdOrKey),
    "issueIdsOrKeys": [],
    "properties": String(properties),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function archiveIssuesAsync(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue/archive";
  var description = "Archive issues matching JQL {jql}";
  var body = {
    "issueIdOrKey": String(issueIdOrKey),
    "jql": "jql_" + issueIdOrKey,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 400, 401, 403, 412],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function archiveIssues(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue/archive";
  var description = "Archive issues by IDs or keys {issueIdsOrKeys}";
  var body = {
    "issueIdOrKey": String(issueIdOrKey),
    "issueIdsOrKeys": [],
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 412],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function getIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue/" + issueIdOrKey;
  var description = "Get issue " + issueIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function deleteIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue/" + issueIdOrKey;
  var description = "Delete issue " + issueIdOrKey;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function editIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue/" + issueIdOrKey;
  var description = "Edit issue " + issueIdOrKey;
  var body = {
    "fields": fields,
    "historyMetadata": historyMetadata,
    "issueIdOrKey": String(issueIdOrKey),
    "properties": String(properties),
    "transition": String(transition),
    "update": update,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 204, 400, 401, 403, 404, 409, 422],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function tryToAddExistingIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  editIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory);
}

function verifyIssueExists(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue";
  var description = "Verify Issue with issueIdOrKey " + issueIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("Issue exists");
          }
        }
      }
      return pvg.fail("Expected Issue to exist but it does not");
    }
  });
}

function verifyIssueDoesNotExist(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue";
  var description = "Verify Issue with issueIdOrKey " + issueIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected Issue to not exist but it does");
          }
        }
      }
      return pvg.success("Issue does not exist");
    }
  });
}

function tryToDeleteANonExistingIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var url = "/rest/api/3/issue/" + issueIdOrKey;
  var description = "Verify we cannot delete non-existing Issue";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var expectedDesc = "Create issue " + summary + " in project " + project + " with issue type " + issuetype;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ issue\ (.+)\ in\ project\ (.+)\ with\ issue\ type\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ issue\ (.+)\ in\ project\ (.+)\ with\ issue\ type\ (.+)$/);
  var captures = m.slice(1);
  var names = ["summary", "project", "issuetype"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueAddedEvent(keyVal) {
  return bp.EventSet("AddIssue:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.issueIdOrKey) === String(keyVal);
  });
}

function matchAnyIssueAdded() {
  return bp.EventSet("matchAnyIssueAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.issueIdOrKey !== undefined && e.name.indexOf("Create issue") > -1;
  });
}

function waitForIssueAdded(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var expectedDesc = "Create issue " + summary + " in project " + project + " with issue type " + issuetype;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssue(fields, historyMetadata, id, issueIdOrKey, issuetype, key, project, properties, summary, transition, update, updateHistory) {
  var expectedDesc = "Delete issue " + issueIdOrKey;
  return bp.EventSet("matchDeletedIssue", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: changelog ----

function getBulkChangelogs() {
  var url = "/rest/api/3/changelog/bulkfetch";
  var description = "Bulk fetch changelogs for issues {issueIds}";
  var body = {
    "fieldIds": [],
    "issueIdsOrKeys": [],
    "maxResults": String(1),
    "nextPageToken": "nextPageToken_dummy",
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

// ---- Entity: event ----

function getEvents() {
  var url = "/rest/api/3/events";
  var description = "Get events";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403]
  });
}

function verifyEventExists() {
  var url = "/rest/api/3/events";
  var description = "Verify Event exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Event exists");
          }
        }
      }
      return pvg.fail("Expected Event to exist but it does not");
    }
  });
}

function verifyEventDoesNotExist() {
  var url = "/rest/api/3/events";
  var description = "Verify Event does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Event to not exist but it does");
          }
        }
      }
      return pvg.success("Event does not exist");
    }
  });
}

// ---- Entity: issue assignee ----

function assignIssue(accountId, issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/assignee";
  var description = "Assign issue " + issueIdOrKey + " to accountId " + accountId;
  var body = {
    "accountId": String(accountId),
    "accountType": "accountType_" + issueIdOrKey,
    "active": String(true),
    "applicationRoles": "applicationRoles_" + issueIdOrKey,
    "avatarUrls": "avatarUrls_" + issueIdOrKey,
    "displayName": "displayName_" + issueIdOrKey,
    "emailAddress": emailAddress,
    "expand": "expand_" + issueIdOrKey,
    "groups": "groups_" + issueIdOrKey,
    "issueIdOrKey": String(issueIdOrKey),
    "key": "key_" + issueIdOrKey,
    "locale": "locale_" + issueIdOrKey,
    "name": "name_" + issueIdOrKey,
    "self": "self_" + issueIdOrKey,
    "timeZone": "timeZone_" + issueIdOrKey,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 403, 404],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , accountId: String(accountId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

// ---- Entity: issue changelog ----

function getChangeLogs(changelogIds, issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/changelog";
  var description = "Get changelogs for issue " + issueIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getChangeLogsByIds(changelogIds, issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/changelog/list";
  var description = "Get changelogs by IDs for issue " + issueIdOrKey;
  var body = {
    "changelogIds": String(changelogIds),
    "issueIdOrKey": String(issueIdOrKey),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function tryToAddExistingIssueChangelog(changelogIds, issueIdOrKey) {
  getChangeLogsByIds(changelogIds, issueIdOrKey);
}

function verifyIssueChangelogExists(changelogIds, issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/changelog/list";
  var description = "Verify IssueChangelog with issueIdOrKey " + issueIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("IssueChangelog exists");
          }
        }
      }
      return pvg.fail("Expected IssueChangelog to exist but it does not");
    }
  });
}

function verifyIssueChangelogDoesNotExist(changelogIds, issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/changelog/list";
  var description = "Verify IssueChangelog with issueIdOrKey " + issueIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected IssueChangelog to not exist but it does");
          }
        }
      }
      return pvg.success("IssueChangelog does not exist");
    }
  });
}

function matchAddedIssueChangelog(changelogIds, issueIdOrKey) {
  var expectedDesc = "Get changelogs by IDs for issue " + issueIdOrKey;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueChangelogAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Get\ changelogs\ by\ IDs\ for\ issue\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Get\ changelogs\ by\ IDs\ for\ issue\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueChangelogAddedEvent(keyVal) {
  return bp.EventSet("AddIssueChangelog:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.issueIdOrKey) === String(keyVal);
  });
}

function matchAnyIssueChangelogAdded() {
  return bp.EventSet("matchAnyIssueChangelogAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.issueIdOrKey !== undefined && e.name.indexOf("Create issue changelog") > -1;
  });
}

function waitForIssueChangelogAdded(changelogIds, issueIdOrKey) {
  var expectedDesc = "Get changelogs by IDs for issue " + issueIdOrKey;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: issue notification ----

function notify(htmlBody, issueIdOrKey, restrict, subject, textBody, to) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/notify";
  var description = "Send notification for issue " + issueIdOrKey + " with subject " + subject;
  var body = {
    "htmlBody": String(htmlBody),
    "issueIdOrKey": String(issueIdOrKey),
    "restrict": String(restrict),
    "subject": String(subject),
    "textBody": String(textBody),
    "to": String(to),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 403, 404],
    parameters: {
      description: description,
      , issueIdOrKey: String(issueIdOrKey)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingIssueNotification(htmlBody, issueIdOrKey, restrict, subject, textBody, to) {
  notify(htmlBody, issueIdOrKey, restrict, subject, textBody, to);
}

function verifyIssueNotificationExists(htmlBody, issueIdOrKey, restrict, subject, textBody, to) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/notify";
  var description = "Verify IssueNotification exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("IssueNotification exists");
          }
        }
      }
      return pvg.fail("Expected IssueNotification to exist but it does not");
    }
  });
}

function verifyIssueNotificationDoesNotExist(htmlBody, issueIdOrKey, restrict, subject, textBody, to) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/notify";
  var description = "Verify IssueNotification does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected IssueNotification to not exist but it does");
          }
        }
      }
      return pvg.success("IssueNotification does not exist");
    }
  });
}

function matchAddedIssueNotification(htmlBody, issueIdOrKey, restrict, subject, textBody, to) {
  var expectedDesc = "Send notification for issue " + issueIdOrKey + " with subject " + subject;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueNotificationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Send\ notification\ for\ issue\ (.+)\ with\ subject\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Send\ notification\ for\ issue\ (.+)\ with\ subject\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueIdOrKey", "subject"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueNotificationAddedEvent(keyVal) {
  return bp.EventSet("AddIssueNotification:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyIssueNotificationAdded() {
  return bp.EventSet("matchAnyIssueNotificationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create issue notification") > -1;
  });
}

function waitForIssueNotificationAdded(htmlBody, issueIdOrKey, restrict, subject, textBody, to) {
  var expectedDesc = "Send notification for issue " + issueIdOrKey + " with subject " + subject;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: issue transition ----

function getTransitions(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/transitions";
  var description = "Get transitions for issue " + issueIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function doTransition(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/transitions";
  var description = "Transition issue " + issueIdOrKey + " with transition id " + transitionId;
  var body = {
    "fields": fields,
    "historyMetadata": historyMetadata,
    "issueIdOrKey": String(issueIdOrKey),
    "properties": String(properties),
    "transition": String(transition),
    "transitionId": String(transitionId),
    "update": update,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 404, 409, 413, 422],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , transitionId: String(transitionId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function tryToAddExistingIssueTransition(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update) {
  doTransition(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update);
}

function verifyIssueTransitionExists(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/transitions";
  var description = "Verify IssueTransition with issueIdOrKey " + issueIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("IssueTransition exists");
          }
        }
      }
      return pvg.fail("Expected IssueTransition to exist but it does not");
    }
  });
}

function verifyIssueTransitionDoesNotExist(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/transitions";
  var description = "Verify IssueTransition with issueIdOrKey " + issueIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected IssueTransition to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTransition does not exist");
    }
  });
}

function matchAddedIssueTransition(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update) {
  var expectedDesc = "Transition issue " + issueIdOrKey + " with transition id " + transitionId;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueTransitionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Transition\ issue\ (.+)\ with\ transition\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Transition\ issue\ (.+)\ with\ transition\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueIdOrKey", "transitionId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueTransitionAddedEvent(keyVal) {
  return bp.EventSet("AddIssueTransition:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.issueIdOrKey) === String(keyVal);
  });
}

function matchAnyIssueTransitionAdded() {
  return bp.EventSet("matchAnyIssueTransitionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.issueIdOrKey !== undefined && e.name.indexOf("Create issue transition") > -1;
  });
}

function waitForIssueTransitionAdded(fields, historyMetadata, issueIdOrKey, properties, transition, transitionId, update) {
  var expectedDesc = "Transition issue " + issueIdOrKey + " with transition id " + transitionId;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: issue edit metadata ----

function getEditIssueMeta(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/editmeta";
  var description = "Get edit issue metadata for issue " + issueIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function verifyIssueEditMetaExists(issueIdOrKey) {
  var url = "/rest/api/3/issue";
  var description = "Verify IssueEditMeta with issueIdOrKey " + issueIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("IssueEditMeta exists");
          }
        }
      }
      return pvg.fail("Expected IssueEditMeta to exist but it does not");
    }
  });
}

function verifyIssueEditMetaDoesNotExist(issueIdOrKey) {
  var url = "/rest/api/3/issue";
  var description = "Verify IssueEditMeta with issueIdOrKey " + issueIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected IssueEditMeta to not exist but it does");
          }
        }
      }
      return pvg.success("IssueEditMeta does not exist");
    }
  });
}

// ---- Entity: issue archival ----

function unarchiveIssues(issueIdsOrKeys) {
  var url = "/rest/api/3/issue/unarchive";
  var description = "Unarchive issues with keys or IDs " + issueIdsOrKeys;
  var body = {
    "issueIdsOrKeys": String(issueIdsOrKeys),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 412],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: archived issues export ----

function exportArchivedIssues(archivedBy, archivedDate, issueTypes, projects, reporters) {
  var url = "/rest/api/3/issues/archive/export";
  var description = "Export archived issues filtered by projects " + projects + ", archivedBy " + archivedBy + ", archivedDate " + archivedDate + ", issueTypes " + issueTypes + ", reporters " + reporters;
  var body = {
    "archivedBy": String(archivedBy),
    "archivedDate": String(archivedDate),
    "archivedDateRange": "archivedDateRange_dummy",
    "issueTypes": String(issueTypes),
    "projects": String(projects),
    "reporters": String(reporters),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 400, 401, 403, 412],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: workflow ----

function readWorkflowPreviews(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflows/preview";
  var description = "Preview workflow with projectId " + projectId;
  var body = {
    "entityId": String(entityId),
    "issueTypeIds": String(issueTypeIds),
    "projectId": String(projectId),
    "workflowIds": String(workflowIds),
    "workflowNames": String(workflowNames),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 404],
    parameters: {
      description: description,
      entityId: String(entityId)
      , id: String(id)
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { entityId: String(entityId) }) });
}

function deleteInactiveWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflow/" + entityId;
  var description = "Delete inactive workflow " + entityId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function getDefaultEditor(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflows/defaultEditor";
  var description = "Get the user's default workflow editor";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateWorkflows(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflows/update";
  var description = "Bulk update workflows with id " + id + " and version id {version.id}";
  var body = {
    "entityId": String(entityId),
    "statuses": [],
    "workflows": [],
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 409],
    parameters: {
      description: description,
      entityId: String(entityId)
      , id: String(id)
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { entityId: String(entityId) }) });
}

function searchWorkflows(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflows/search";
  var description = "Search workflows with queryString " + queryString;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function validateUpdateWorkflows(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflows/update/validation";
  var description = "Validate update workflows with payload containing workflows and statuses";
  var body = {
    "entityId": String(entityId),
    "payload": "payload_" + entityId,
    "validationOptions": "validationOptions_" + entityId,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
      entityId: String(entityId)
      , id: String(id)
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { entityId: String(entityId) }) });
}

function tryToAddExistingWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  validateUpdateWorkflows(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames);
}

function verifyWorkflowExists(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflows/preview";
  var description = "Verify Workflow with entityId " + entityId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].entityId) === String(entityId)) {
            return pvg.success("Workflow exists");
          }
        }
      }
      return pvg.fail("Expected Workflow to exist but it does not");
    }
  });
}

function verifyWorkflowDoesNotExist(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflows/preview";
  var description = "Verify Workflow with entityId " + entityId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].entityId) === String(entityId)) {
            return pvg.fail("Expected Workflow to not exist but it does");
          }
        }
      }
      return pvg.success("Workflow does not exist");
    }
  });
}

function tryToDeleteANonExistingWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var url = "/rest/api/3/workflow/" + entityId;
  var description = "Verify we cannot delete non-existing Workflow";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var expectedDesc = "Preview workflow with projectId " + projectId;
  return matchSuccess(expectedDesc);
}

function waitForAnyWorkflowAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Preview\ workflow\ with\ projectId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Preview\ workflow\ with\ projectId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["projectId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWorkflowAddedEvent(keyVal) {
  return bp.EventSet("AddWorkflow:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.entityId) === String(keyVal);
  });
}

function matchAnyWorkflowAdded() {
  return bp.EventSet("matchAnyWorkflowAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.entityId !== undefined && e.name.indexOf("Create workflow") > -1;
  });
}

function waitForWorkflowAdded(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var expectedDesc = "Preview workflow with projectId " + projectId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedWorkflow(entityId, expand, id, isActive, issueTypeIds, maxResults, name, orderBy, projectId, queryString, scope, startAt, workflowIds, workflowNames) {
  var expectedDesc = "Delete inactive workflow " + entityId;
  return bp.EventSet("matchDeletedWorkflow", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorkflowDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ inactive\ workflow\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ inactive\ workflow\ (.+)$/);
  var captures = m.slice(1);
  var names = ["entityId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: workflowsBulk ----

function createWorkflows(scope, statuses, workflows) {
  var url = "/rest/api/3/workflows/create";
  var description = "Bulk create workflows";
  var body = {
    "scope": String(scope),
    "statuses": String(statuses),
    "workflows": String(workflows),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 409],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function readWorkflows(scope, statuses, workflows) {
  var url = "/rest/api/3/workflows";
  var description = "Bulk get workflows";
  var body = {
    "projectAndIssueTypes": [],
    "workflowIds": [],
    "workflowNames": [],
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingWorkflowsBulk(scope, statuses, workflows) {
  readWorkflows(scope, statuses, workflows);
}

function verifyWorkflowsBulkExists(scope, statuses, workflows) {
  var url = "/rest/api/3/workflows/create";
  var description = "Verify WorkflowsBulk exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].scope) === String(scope) && String(items[i].statuses) === String(statuses) && String(items[i].workflows) === String(workflows)) {
            return pvg.success("WorkflowsBulk exists");
          }
        }
      }
      return pvg.fail("Expected WorkflowsBulk to exist but it does not");
    }
  });
}

function verifyWorkflowsBulkDoesNotExist(scope, statuses, workflows) {
  var url = "/rest/api/3/workflows/create";
  var description = "Verify WorkflowsBulk does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].scope) === String(scope) && String(items[i].statuses) === String(statuses) && String(items[i].workflows) === String(workflows)) {
            return pvg.fail("Expected WorkflowsBulk to not exist but it does");
          }
        }
      }
      return pvg.success("WorkflowsBulk does not exist");
    }
  });
}

function matchAddedWorkflowsBulk(scope, statuses, workflows) {
  var expectedDesc = "Bulk create workflows";
  return matchSuccess(expectedDesc);
}

function waitForAnyWorkflowsBulkAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Bulk\ create\ workflows$/));
  var m = ev.data.parameters.description.match(/^Bulk\ create\ workflows$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWorkflowsBulkAddedEvent(keyVal) {
  return bp.EventSet("AddWorkflowsBulk:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyWorkflowsBulkAdded() {
  return bp.EventSet("matchAnyWorkflowsBulkAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create workflowsBulk") > -1;
  });
}

function waitForWorkflowsBulkAdded(scope, statuses, workflows) {
  var expectedDesc = "Bulk create workflows";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: issue security scheme ----

function createIssueSecurityScheme(description, id, levels, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes";
  var description = "Create issue security scheme " + name + " with id " + id;
  var body = {
    "description": String(description),
    "id": String(id),
    "levels": String(levels),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      id: String(id)
      , schemeId: String(schemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getIssueSecurityScheme(description, id, levels, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + id;
  var description = "Get issue security scheme with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403]
  });
}

function updateIssueSecurityScheme(description, id, levels, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + id;
  var description = "Update issue security scheme " + id + " with name " + name;
  var body = {
    "description": String(description),
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , schemeId: String(schemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteSecurityScheme(description, id, levels, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId;
  var description = "Delete issue security scheme with id " + schemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function tryToAddExistingIssueSecurityScheme(description, id, levels, name, schemeId) {
  deleteSecurityScheme(description, id, levels, name, schemeId);
}

function verifyIssueSecuritySchemeExists(description, id, levels, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes";
  var description = "Verify IssueSecurityScheme with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("IssueSecurityScheme exists");
          }
        }
      }
      return pvg.fail("Expected IssueSecurityScheme to exist but it does not");
    }
  });
}

function verifyIssueSecuritySchemeDoesNotExist(description, id, levels, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes";
  var description = "Verify IssueSecurityScheme with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected IssueSecurityScheme to not exist but it does");
          }
        }
      }
      return pvg.success("IssueSecurityScheme does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueSecurityScheme(description, id, levels, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId;
  var description = "Verify we cannot delete non-existing IssueSecurityScheme";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueSecurityScheme(description, id, levels, name, schemeId) {
  var expectedDesc = "Create issue security scheme " + name + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueSecuritySchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ issue\ security\ scheme\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ issue\ security\ scheme\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueSecuritySchemeAddedEvent(keyVal) {
  return bp.EventSet("AddIssueSecurityScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyIssueSecuritySchemeAdded() {
  return bp.EventSet("matchAnyIssueSecuritySchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create issue security scheme") > -1;
  });
}

function waitForIssueSecuritySchemeAdded(description, id, levels, name, schemeId) {
  var expectedDesc = "Create issue security scheme " + name + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueSecurityScheme(description, id, levels, name, schemeId) {
  var expectedDesc = "Delete issue security scheme with id " + schemeId;
  return bp.EventSet("matchDeletedIssueSecurityScheme", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueSecuritySchemeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ security\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ security\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["schemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue security level ----

function addSecurityLevel(id, levelId, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level";
  var description = "Add issue security levels to scheme " + schemeId;
  var body = {
    "levels": [],
    "schemeId": String(schemeId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      schemeId: String(schemeId)
      , id: String(id)
      , levelId: String(levelId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { schemeId: String(schemeId) }) });
}

function getSecurityLevels(id, levelId, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/level";
  var description = "Get issue security levels";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function updateSecurityLevel(id, levelId, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId;
  var description = "Update issue security level " + levelId + " in scheme " + schemeId + " with name " + name;
  var body = {
    "description": "description_" + schemeId,
    "levelId": String(levelId),
    "name": String(name),
    "schemeId": String(schemeId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      schemeId: String(schemeId)
      , id: String(id)
      , levelId: String(levelId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { schemeId: String(schemeId) }) });
}

function removeLevel(id, levelId, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId;
  var description = "Remove issue security level " + levelId + " from scheme " + schemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [303, 400, 401, 403, 404, 409]
  });
}

function tryToAddExistingIssueSecurityLevel(id, levelId, name, schemeId) {
  removeLevel(id, levelId, name, schemeId);
}

function verifyIssueSecurityLevelExists(id, levelId, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level";
  var description = "Verify IssueSecurityLevel with schemeId " + schemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.success("IssueSecurityLevel exists");
          }
        }
      }
      return pvg.fail("Expected IssueSecurityLevel to exist but it does not");
    }
  });
}

function verifyIssueSecurityLevelDoesNotExist(id, levelId, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level";
  var description = "Verify IssueSecurityLevel with schemeId " + schemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.fail("Expected IssueSecurityLevel to not exist but it does");
          }
        }
      }
      return pvg.success("IssueSecurityLevel does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueSecurityLevel(id, levelId, name, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId;
  var description = "Verify we cannot delete non-existing IssueSecurityLevel";
  svc.delete(url, {
    expectedResponseCodes: [303, 400, 401, 403, 404, 409],
    parameters: { description: description }
  });
}

function matchAddedIssueSecurityLevel(id, levelId, name, schemeId) {
  var expectedDesc = "Add issue security levels to scheme " + schemeId;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueSecurityLevelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ issue\ security\ levels\ to\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ issue\ security\ levels\ to\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["schemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueSecurityLevelAddedEvent(keyVal) {
  return bp.EventSet("AddIssueSecurityLevel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.schemeId) === String(keyVal);
  });
}

function matchAnyIssueSecurityLevelAdded() {
  return bp.EventSet("matchAnyIssueSecurityLevelAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.schemeId !== undefined && e.name.indexOf("Create issue security level") > -1;
  });
}

function waitForIssueSecurityLevelAdded(id, levelId, name, schemeId) {
  var expectedDesc = "Add issue security levels to scheme " + schemeId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueSecurityLevel(id, levelId, name, schemeId) {
  var expectedDesc = "Remove issue security level " + levelId + " from scheme " + schemeId;
  return bp.EventSet("matchDeletedIssueSecurityLevel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueSecurityLevelDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ issue\ security\ level\ (.+)\ from\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ issue\ security\ level\ (.+)\ from\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["levelId", "schemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue security level member ----

function getSecurityLevelMembers(id, levelId, memberId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/level/member";
  var description = "Get issue security level members";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function addSecurityLevelMembers(id, levelId, memberId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId + "/member";
  var description = "Add issue security level members to scheme " + schemeId + " level " + levelId;
  var body = {
    "levelId": String(levelId),
    "members": [],
    "schemeId": String(schemeId),
    "securitySchemeLevelMembers": "securitySchemeLevelMembers_" + schemeId,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      schemeId: String(schemeId)
      , id: String(id)
      , levelId: String(levelId)
      , memberId: String(memberId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { schemeId: String(schemeId) }) });
}

function removeMemberFromSecurityLevel(id, levelId, memberId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId + "/member/" + memberId;
  var description = "Remove member " + memberId + " from issue security level " + levelId + " in scheme " + schemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function tryToAddExistingIssueSecurityLevelMember(id, levelId, memberId, schemeId) {
  removeMemberFromSecurityLevel(id, levelId, memberId, schemeId);
}

function verifyIssueSecurityLevelMemberExists(id, levelId, memberId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId + "/member";
  var description = "Verify IssueSecurityLevelMember with schemeId " + schemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.success("IssueSecurityLevelMember exists");
          }
        }
      }
      return pvg.fail("Expected IssueSecurityLevelMember to exist but it does not");
    }
  });
}

function verifyIssueSecurityLevelMemberDoesNotExist(id, levelId, memberId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId + "/member";
  var description = "Verify IssueSecurityLevelMember with schemeId " + schemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.fail("Expected IssueSecurityLevelMember to not exist but it does");
          }
        }
      }
      return pvg.success("IssueSecurityLevelMember does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueSecurityLevelMember(id, levelId, memberId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/" + schemeId + "/level/" + levelId + "/member/" + memberId;
  var description = "Verify we cannot delete non-existing IssueSecurityLevelMember";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueSecurityLevelMember(id, levelId, memberId, schemeId) {
  var expectedDesc = "Add issue security level members to scheme " + schemeId + " level " + levelId;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueSecurityLevelMemberAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ issue\ security\ level\ members\ to\ scheme\ (.+)\ level\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ issue\ security\ level\ members\ to\ scheme\ (.+)\ level\ (.+)$/);
  var captures = m.slice(1);
  var names = ["schemeId", "levelId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueSecurityLevelMemberAddedEvent(keyVal) {
  return bp.EventSet("AddIssueSecurityLevelMember:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.schemeId) === String(keyVal);
  });
}

function matchAnyIssueSecurityLevelMemberAdded() {
  return bp.EventSet("matchAnyIssueSecurityLevelMemberAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.schemeId !== undefined && e.name.indexOf("Create issue security level member") > -1;
  });
}

function waitForIssueSecurityLevelMemberAdded(id, levelId, memberId, schemeId) {
  var expectedDesc = "Add issue security level members to scheme " + schemeId + " level " + levelId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueSecurityLevelMember(id, levelId, memberId, schemeId) {
  var expectedDesc = "Remove member " + memberId + " from issue security level " + levelId + " in scheme " + schemeId;
  return bp.EventSet("matchDeletedIssueSecurityLevelMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueSecurityLevelMemberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ member\ (.+)\ from\ issue\ security\ level\ (.+)\ in\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ member\ (.+)\ from\ issue\ security\ level\ (.+)\ in\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["memberId", "levelId", "schemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue security scheme project association ----

function searchProjectsUsingSecuritySchemes(issueSecuritySchemeId, projectId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/project";
  var description = "Get projects using issue security schemes";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function associateSchemesToProjects(issueSecuritySchemeId, projectId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/project";
  var description = "Associate security scheme " + schemeId + " to project " + projectId;
  var body = {
    "oldToNewSecurityLevelMappings": [],
    "projectId": String(projectId),
    "schemeId": String(schemeId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [303, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      , issueSecuritySchemeId: String(issueSecuritySchemeId)
      , projectId: String(projectId)
      , schemeId: String(schemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifyIssueSecuritySchemeProjectAssociationExists(issueSecuritySchemeId, projectId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/project";
  var description = "Verify IssueSecuritySchemeProjectAssociation exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueSecuritySchemeId) === String(issueSecuritySchemeId)) {
            return pvg.success("IssueSecuritySchemeProjectAssociation exists");
          }
        }
      }
      return pvg.fail("Expected IssueSecuritySchemeProjectAssociation to exist but it does not");
    }
  });
}

function verifyIssueSecuritySchemeProjectAssociationDoesNotExist(issueSecuritySchemeId, projectId, schemeId) {
  var url = "/rest/api/3/issuesecurityschemes/project";
  var description = "Verify IssueSecuritySchemeProjectAssociation does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueSecuritySchemeId) === String(issueSecuritySchemeId)) {
            return pvg.fail("Expected IssueSecuritySchemeProjectAssociation to not exist but it does");
          }
        }
      }
      return pvg.success("IssueSecuritySchemeProjectAssociation does not exist");
    }
  });
}

// ---- Entity: issue security level default ----

function setDefaultLevels() {
  var url = "/rest/api/3/issuesecurityschemes/level/default";
  var description = "Set default issue security levels";
  var body = {
    "defaultValues": [],
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: version ----

function createVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var url = "/rest/api/3/version";
  var description = "Create version " + name + " with projectId " + projectId;
  var body = {
    "approvers": String(approvers),
    "archived": String(archived),
    "description": String(description),
    "driver": String(driver),
    "expand": String(expand),
    "id": String(id),
    "issuesStatusForFixVersion": String(issuesStatusForFixVersion),
    "moveUnfixedIssuesTo": String(moveUnfixedIssuesTo),
    "name": String(name),
    "operations": String(operations),
    "overdue": String(overdue),
    "project": String(project),
    "projectId": String(projectId),
    "releaseDate": String(releaseDate),
    "released": String(released),
    "self": String(self),
    "startDate": String(startDate),
    "userReleaseDate": String(userReleaseDate),
    "userStartDate": String(userStartDate),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var url = "/rest/api/3/version/" + id;
  var description = "Delete version with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 404]
  });
}

function updateVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var url = "/rest/api/3/version/" + id;
  var description = "Update version " + name + " with id " + id;
  var body = {
    "approvers": String(approvers),
    "archived": String(archived),
    "description": String(description),
    "driver": String(driver),
    "expand": String(expand),
    "id": String(id),
    "issuesStatusForFixVersion": String(issuesStatusForFixVersion),
    "moveUnfixedIssuesTo": String(moveUnfixedIssuesTo),
    "name": String(name),
    "operations": String(operations),
    "overdue": String(overdue),
    "project": String(project),
    "projectId": String(projectId),
    "releaseDate": String(releaseDate),
    "released": String(released),
    "self": String(self),
    "startDate": String(startDate),
    "userReleaseDate": String(userReleaseDate),
    "userStartDate": String(userStartDate),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var url = "/rest/api/3/version/" + id;
  var description = "Get version with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  getVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate);
}

function verifyVersionExists(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var url = "/rest/api/3/version";
  var description = "Verify Version with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Version exists");
          }
        }
      }
      return pvg.fail("Expected Version to exist but it does not");
    }
  });
}

function verifyVersionDoesNotExist(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var url = "/rest/api/3/version";
  var description = "Verify Version with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Version to not exist but it does");
          }
        }
      }
      return pvg.success("Version does not exist");
    }
  });
}

function tryToDeleteANonExistingVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var url = "/rest/api/3/version/" + id;
  var description = "Verify we cannot delete non-existing Version";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var expectedDesc = "Create version " + name + " with projectId " + projectId;
  return matchSuccess(expectedDesc);
}

function waitForAnyVersionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ version\ (.+)\ with\ projectId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ version\ (.+)\ with\ projectId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "projectId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getVersionAddedEvent(keyVal) {
  return bp.EventSet("AddVersion:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyVersionAdded() {
  return bp.EventSet("matchAnyVersionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create version") > -1;
  });
}

function waitForVersionAdded(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var expectedDesc = "Create version " + name + " with projectId " + projectId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedVersion(approvers, archived, description, driver, expand, id, issuesStatusForFixVersion, moveAffectedIssuesTo, moveFixIssuesTo, moveUnfixedIssuesTo, name, operations, overdue, project, projectId, releaseDate, released, self, startDate, userReleaseDate, userStartDate) {
  var expectedDesc = "Delete version with id " + id;
  return bp.EventSet("matchDeletedVersion", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyVersionDeleted() {
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

// ---- Entity: project versions ----

function getProjectVersions(expand, maxResults, orderBy, projectIdOrKey, query, startAt, status) {
  var url = "/rest/api/3/project/" + projectIdOrKey + "/versions";
  var description = "Get versions for project " + projectIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getProjectVersionsPaginated(expand, maxResults, orderBy, projectIdOrKey, query, startAt, status) {
  var url = "/rest/api/3/project/" + projectIdOrKey + "/version";
  var description = "Get paginated versions for project " + projectIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyProjectVersionsExists(expand, maxResults, orderBy, projectIdOrKey, query, startAt, status) {
  var url = "/rest/api/3/project";
  var description = "Verify ProjectVersions with projectIdOrKey " + projectIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectIdOrKey) === String(projectIdOrKey)) {
            return pvg.success("ProjectVersions exists");
          }
        }
      }
      return pvg.fail("Expected ProjectVersions to exist but it does not");
    }
  });
}

function verifyProjectVersionsDoesNotExist(expand, maxResults, orderBy, projectIdOrKey, query, startAt, status) {
  var url = "/rest/api/3/project";
  var description = "Verify ProjectVersions with projectIdOrKey " + projectIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectIdOrKey) === String(projectIdOrKey)) {
            return pvg.fail("Expected ProjectVersions to not exist but it does");
          }
        }
      }
      return pvg.success("ProjectVersions does not exist");
    }
  });
}

// ---- Entity: version merge ----

function mergeVersions(id, moveIssuesTo) {
  var url = "/rest/api/3/version/" + id + "/mergeto/" + moveIssuesTo;
  var description = "Merge version " + id + " into version " + moveIssuesTo;
  var body = {
    "id": String(id),
    "moveIssuesTo": String(moveIssuesTo),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 404],
    parameters: {
      description: description,
      id: String(id)
      , moveIssuesTo: String(moveIssuesTo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

// ---- Entity: version move ----

function moveVersion(after, id, position) {
  var url = "/rest/api/3/version/" + id + "/move";
  var description = "Move version with id " + id;
  var body = {
    "after": String(after),
    "id": String(id),
    "position": String(position),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 404],
    parameters: {
      description: description,
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingVersionMove(after, id, position) {
  moveVersion(after, id, position);
}

function verifyVersionMoveExists(after, id, position) {
  var url = "/rest/api/3/version/" + id + "/move";
  var description = "Verify VersionMove exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("VersionMove exists");
          }
        }
      }
      return pvg.fail("Expected VersionMove to exist but it does not");
    }
  });
}

function verifyVersionMoveDoesNotExist(after, id, position) {
  var url = "/rest/api/3/version/" + id + "/move";
  var description = "Verify VersionMove does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected VersionMove to not exist but it does");
          }
        }
      }
      return pvg.success("VersionMove does not exist");
    }
  });
}

function matchAddedVersionMove(after, id, position) {
  var expectedDesc = "Move version with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyVersionMoveAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Move\ version\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Move\ version\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getVersionMoveAddedEvent(keyVal) {
  return bp.EventSet("AddVersionMove:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyVersionMoveAdded() {
  return bp.EventSet("matchAnyVersionMoveAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create version move") > -1;
  });
}

function waitForVersionMoveAdded(after, id, position) {
  var expectedDesc = "Move version with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: version related work ----

function getRelatedWork(category, id, issueId, relatedWorkId, title, url) {
  var url = "/rest/api/3/version/" + id + "/relatedwork";
  var description = "Get related work for version " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404, 500]
  });
}

function createRelatedWork(category, id, issueId, relatedWorkId, title, url) {
  var url = "/rest/api/3/version/" + id + "/relatedwork";
  var description = "Create related work for version " + id + " with title " + title;
  var body = {
    "category": String(category),
    "id": String(id),
    "issueId": String(issueId),
    "relatedWorkId": String(relatedWorkId),
    "title": String(title),
    "url": String(url),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , issueId: String(issueId)
      , relatedWorkId: String(relatedWorkId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function updateRelatedWork(category, id, issueId, relatedWorkId, title, url) {
  var url = "/rest/api/3/version/" + id + "/relatedwork";
  var description = "Update related work " + relatedWorkId + " for version " + id;
  var body = {
    "category": String(category),
    "id": String(id),
    "issueId": String(issueId),
    "relatedWorkId": String(relatedWorkId),
    "title": String(title),
    "url": String(url),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , issueId: String(issueId)
      , relatedWorkId: String(relatedWorkId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function tryToAddExistingVersionRelatedWork(category, id, issueId, relatedWorkId, title, url) {
  updateRelatedWork(category, id, issueId, relatedWorkId, title, url);
}

function verifyVersionRelatedWorkExists(category, id, issueId, relatedWorkId, title, url) {
  var url = "/rest/api/3/version/" + id + "/relatedwork";
  var description = "Verify VersionRelatedWork with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("VersionRelatedWork exists");
          }
        }
      }
      return pvg.fail("Expected VersionRelatedWork to exist but it does not");
    }
  });
}

function verifyVersionRelatedWorkDoesNotExist(category, id, issueId, relatedWorkId, title, url) {
  var url = "/rest/api/3/version/" + id + "/relatedwork";
  var description = "Verify VersionRelatedWork with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected VersionRelatedWork to not exist but it does");
          }
        }
      }
      return pvg.success("VersionRelatedWork does not exist");
    }
  });
}

function matchAddedVersionRelatedWork(category, id, issueId, relatedWorkId, title, url) {
  var expectedDesc = "Create related work for version " + id + " with title " + title;
  return matchSuccess(expectedDesc);
}

function waitForAnyVersionRelatedWorkAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ related\ work\ for\ version\ (.+)\ with\ title\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ related\ work\ for\ version\ (.+)\ with\ title\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "title"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getVersionRelatedWorkAddedEvent(keyVal) {
  return bp.EventSet("AddVersionRelatedWork:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyVersionRelatedWorkAdded() {
  return bp.EventSet("matchAnyVersionRelatedWorkAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create version related work") > -1;
  });
}

function waitForVersionRelatedWorkAdded(category, id, issueId, relatedWorkId, title, url) {
  var expectedDesc = "Create related work for version " + id + " with title " + title;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: version delete and replace ----

function deleteAndReplaceVersion(customFieldReplacementList, id, moveAffectedIssuesTo, moveFixIssuesTo) {
  var url = "/rest/api/3/version/" + id + "/removeAndSwap";
  var description = "Delete and replace version with id " + id;
  var body = {
    "customFieldReplacementList": String(customFieldReplacementList),
    "id": String(id),
    "moveAffectedIssuesTo": String(moveAffectedIssuesTo),
    "moveFixIssuesTo": String(moveFixIssuesTo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 404],
    parameters: {
      description: description,
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingVersionDeleteAndReplace(customFieldReplacementList, id, moveAffectedIssuesTo, moveFixIssuesTo) {
  deleteAndReplaceVersion(customFieldReplacementList, id, moveAffectedIssuesTo, moveFixIssuesTo);
}

function verifyVersionDeleteAndReplaceExists(customFieldReplacementList, id, moveAffectedIssuesTo, moveFixIssuesTo) {
  var url = "/rest/api/3/version/" + id + "/removeAndSwap";
  var description = "Verify VersionDeleteAndReplace exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("VersionDeleteAndReplace exists");
          }
        }
      }
      return pvg.fail("Expected VersionDeleteAndReplace to exist but it does not");
    }
  });
}

function verifyVersionDeleteAndReplaceDoesNotExist(customFieldReplacementList, id, moveAffectedIssuesTo, moveFixIssuesTo) {
  var url = "/rest/api/3/version/" + id + "/removeAndSwap";
  var description = "Verify VersionDeleteAndReplace does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected VersionDeleteAndReplace to not exist but it does");
          }
        }
      }
      return pvg.success("VersionDeleteAndReplace does not exist");
    }
  });
}

function matchAddedVersionDeleteAndReplace(customFieldReplacementList, id, moveAffectedIssuesTo, moveFixIssuesTo) {
  var expectedDesc = "Delete and replace version with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyVersionDeleteAndReplaceAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ and\ replace\ version\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ and\ replace\ version\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getVersionDeleteAndReplaceAddedEvent(keyVal) {
  return bp.EventSet("AddVersionDeleteAndReplace:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyVersionDeleteAndReplaceAdded() {
  return bp.EventSet("matchAnyVersionDeleteAndReplaceAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create version delete and replace") > -1;
  });
}

function waitForVersionDeleteAndReplaceAdded(customFieldReplacementList, id, moveAffectedIssuesTo, moveFixIssuesTo) {
  var expectedDesc = "Delete and replace version with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: version related issues count ----

function getVersionRelatedIssues(id) {
  var url = "/rest/api/3/version/" + id + "/relatedIssueCounts";
  var description = "Get related issues count for version " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function verifyVersionRelatedIssuesCountExists(id) {
  var url = "/rest/api/3/version";
  var description = "Verify VersionRelatedIssuesCount with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("VersionRelatedIssuesCount exists");
          }
        }
      }
      return pvg.fail("Expected VersionRelatedIssuesCount to exist but it does not");
    }
  });
}

function verifyVersionRelatedIssuesCountDoesNotExist(id) {
  var url = "/rest/api/3/version";
  var description = "Verify VersionRelatedIssuesCount with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected VersionRelatedIssuesCount to not exist but it does");
          }
        }
      }
      return pvg.success("VersionRelatedIssuesCount does not exist");
    }
  });
}

// ---- Entity: version unresolved issues count ----

function getVersionUnresolvedIssues(id) {
  var url = "/rest/api/3/version/" + id + "/unresolvedIssueCount";
  var description = "Get unresolved issues count for version " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function verifyVersionUnresolvedIssuesCountExists(id) {
  var url = "/rest/api/3/version";
  var description = "Verify VersionUnresolvedIssuesCount with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("VersionUnresolvedIssuesCount exists");
          }
        }
      }
      return pvg.fail("Expected VersionUnresolvedIssuesCount to exist but it does not");
    }
  });
}

function verifyVersionUnresolvedIssuesCountDoesNotExist(id) {
  var url = "/rest/api/3/version";
  var description = "Verify VersionUnresolvedIssuesCount with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected VersionUnresolvedIssuesCount to not exist but it does");
          }
        }
      }
      return pvg.success("VersionUnresolvedIssuesCount does not exist");
    }
  });
}

// ---- Entity: related work ----

function deleteRelatedWork(relatedWorkId, versionId) {
  var url = "/rest/api/3/version/" + versionId + "/relatedwork/" + relatedWorkId;
  var description = "Delete related work " + relatedWorkId + " from version " + versionId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function tryToDeleteANonExistingRelatedWork(relatedWorkId, versionId) {
  var url = "/rest/api/3/version/" + versionId + "/relatedwork/" + relatedWorkId;
  var description = "Verify we cannot delete non-existing RelatedWork";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedRelatedWork(relatedWorkId, versionId) {
  var expectedDesc = "Delete related work " + relatedWorkId + " from version " + versionId;
  return bp.EventSet("matchDeletedRelatedWork", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRelatedWorkDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ related\ work\ (.+)\ from\ version\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ related\ work\ (.+)\ from\ version\ (.+)$/);
  var captures = m.slice(1);
  var names = ["relatedWorkId", "versionId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: dashboard ----

function createDashboard(description, editPermissions, id, name, sharePermissions) {
  var url = "/rest/api/3/dashboard";
  var description = "Create dashboard " + name + " with id " + id;
  var body = {
    "description": String(description),
    "editPermissions": String(editPermissions),
    "id": String(id),
    "name": String(name),
    "sharePermissions": String(sharePermissions),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteDashboard(description, editPermissions, id, name, sharePermissions) {
  var url = "/rest/api/3/dashboard/" + id;
  var description = "Delete dashboard with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401]
  });
}

function updateDashboard(description, editPermissions, id, name, sharePermissions) {
  var url = "/rest/api/3/dashboard/" + id;
  var description = "Update dashboard " + name + " with id " + id;
  var body = {
    "description": String(description),
    "editPermissions": String(editPermissions),
    "id": String(id),
    "name": String(name),
    "sharePermissions": String(sharePermissions),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getDashboard(description, editPermissions, id, name, sharePermissions) {
  var url = "/rest/api/3/dashboard/" + id;
  var description = "Get dashboard with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 404]
  });
}

function tryToAddExistingDashboard(description, editPermissions, id, name, sharePermissions) {
  getDashboard(description, editPermissions, id, name, sharePermissions);
}

function verifyDashboardExists(description, editPermissions, id, name, sharePermissions) {
  var url = "/rest/api/3/dashboard";
  var description = "Verify Dashboard with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Dashboard exists");
          }
        }
      }
      return pvg.fail("Expected Dashboard to exist but it does not");
    }
  });
}

function verifyDashboardDoesNotExist(description, editPermissions, id, name, sharePermissions) {
  var url = "/rest/api/3/dashboard";
  var description = "Verify Dashboard with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Dashboard to not exist but it does");
          }
        }
      }
      return pvg.success("Dashboard does not exist");
    }
  });
}

function tryToDeleteANonExistingDashboard(description, editPermissions, id, name, sharePermissions) {
  var url = "/rest/api/3/dashboard/" + id;
  var description = "Verify we cannot delete non-existing Dashboard";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401],
    parameters: { description: description }
  });
}

function matchAddedDashboard(description, editPermissions, id, name, sharePermissions) {
  var expectedDesc = "Create dashboard " + name + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyDashboardAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ dashboard\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ dashboard\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getDashboardAddedEvent(keyVal) {
  return bp.EventSet("AddDashboard:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyDashboardAdded() {
  return bp.EventSet("matchAnyDashboardAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create dashboard") > -1;
  });
}

function waitForDashboardAdded(description, editPermissions, id, name, sharePermissions) {
  var expectedDesc = "Create dashboard " + name + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedDashboard(description, editPermissions, id, name, sharePermissions) {
  var expectedDesc = "Delete dashboard with id " + id;
  return bp.EventSet("matchDeletedDashboard", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDashboardDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ dashboard\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ dashboard\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: dashboard gadget ----

function addGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget";
  var description = "Add gadget " + title + " to dashboard " + dashboardId;
  var body = {
    "color": String(color),
    "dashboardId": String(dashboardId),
    "ignoreUriAndModuleKeyValidation": String(ignoreUriAndModuleKeyValidation),
    "moduleKey": String(moduleKey),
    "position": String(position),
    "title": String(title),
    "uri": String(uri),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 404],
    parameters: {
      description: description,
      dashboardId: String(dashboardId)
      , gadgetId: String(gadgetId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { dashboardId: String(dashboardId) }) });
}

function removeGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget/" + gadgetId;
  var description = "Remove gadget " + gadgetId + " from dashboard " + dashboardId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 401, 404]
  });
}

function updateGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget/" + gadgetId;
  var description = "Update gadget " + gadgetId + " on dashboard " + dashboardId + " with title " + title;
  var body = {
    "color": String(color),
    "dashboardId": String(dashboardId),
    "gadgetId": String(gadgetId),
    "position": String(position),
    "title": String(title),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 404],
    parameters: {
      description: description,
      dashboardId: String(dashboardId)
      , gadgetId: String(gadgetId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { dashboardId: String(dashboardId) }) });
}

function getAllGadgets(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget";
  var description = "Get gadgets for dashboard " + dashboardId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  getAllGadgets(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri);
}

function verifyDashboardGadgetExists(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget";
  var description = "Verify DashboardGadget with dashboardId " + dashboardId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].dashboardId) === String(dashboardId)) {
            return pvg.success("DashboardGadget exists");
          }
        }
      }
      return pvg.fail("Expected DashboardGadget to exist but it does not");
    }
  });
}

function verifyDashboardGadgetDoesNotExist(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget";
  var description = "Verify DashboardGadget with dashboardId " + dashboardId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].dashboardId) === String(dashboardId)) {
            return pvg.fail("Expected DashboardGadget to not exist but it does");
          }
        }
      }
      return pvg.success("DashboardGadget does not exist");
    }
  });
}

function tryToDeleteANonExistingDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/gadget/" + gadgetId;
  var description = "Verify we cannot delete non-existing DashboardGadget";
  svc.delete(url, {
    expectedResponseCodes: [204, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var expectedDesc = "Add gadget " + title + " to dashboard " + dashboardId;
  return matchSuccess(expectedDesc);
}

function waitForAnyDashboardGadgetAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ gadget\ (.+)\ to\ dashboard\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ gadget\ (.+)\ to\ dashboard\ (.+)$/);
  var captures = m.slice(1);
  var names = ["title", "dashboardId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getDashboardGadgetAddedEvent(keyVal) {
  return bp.EventSet("AddDashboardGadget:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.dashboardId) === String(keyVal);
  });
}

function matchAnyDashboardGadgetAdded() {
  return bp.EventSet("matchAnyDashboardGadgetAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.dashboardId !== undefined && e.name.indexOf("Create dashboard gadget") > -1;
  });
}

function waitForDashboardGadgetAdded(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var expectedDesc = "Add gadget " + title + " to dashboard " + dashboardId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedDashboardGadget(color, dashboardId, gadgetId, ignoreUriAndModuleKeyValidation, moduleKey, position, title, uri) {
  var expectedDesc = "Remove gadget " + gadgetId + " from dashboard " + dashboardId;
  return bp.EventSet("matchDeletedDashboardGadget", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDashboardGadgetDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ gadget\ (.+)\ from\ dashboard\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ gadget\ (.+)\ from\ dashboard\ (.+)$/);
  var captures = m.slice(1);
  var names = ["gadgetId", "dashboardId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: dashboard item property ----

function getDashboardItemProperty(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/items/" + itemId + "/properties/" + propertyKey;
  var description = "Get property " + propertyKey + " of dashboard item " + itemId + " on dashboard " + dashboardId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function deleteDashboardItemProperty(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/items/" + itemId + "/properties/" + propertyKey;
  var description = "Delete property " + propertyKey + " of dashboard item " + itemId + " on dashboard " + dashboardId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function setDashboardItemProperty(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/items/" + itemId + "/properties/" + propertyKey;
  var description = "Set property " + propertyKey + " of dashboard item " + itemId + " on dashboard " + dashboardId;
  var body = {
    "dashboardId": String(dashboardId),
    "itemId": String(itemId),
    "propertyKey": String(propertyKey),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 400, 401, 403, 404],
    parameters: {
      description: description,
      dashboardId: String(dashboardId)
      , itemId: String(itemId)
      , propertyKey: String(propertyKey)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { dashboardId: String(dashboardId) }) });
}

function verifyDashboardItemPropertyExists(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard";
  var description = "Verify DashboardItemProperty with dashboardId " + dashboardId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].dashboardId) === String(dashboardId)) {
            return pvg.success("DashboardItemProperty exists");
          }
        }
      }
      return pvg.fail("Expected DashboardItemProperty to exist but it does not");
    }
  });
}

function verifyDashboardItemPropertyDoesNotExist(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard";
  var description = "Verify DashboardItemProperty with dashboardId " + dashboardId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].dashboardId) === String(dashboardId)) {
            return pvg.fail("Expected DashboardItemProperty to not exist but it does");
          }
        }
      }
      return pvg.success("DashboardItemProperty does not exist");
    }
  });
}

function tryToDeleteANonExistingDashboardItemProperty(dashboardId, itemId, propertyKey) {
  var url = "/rest/api/3/dashboard/" + dashboardId + "/items/" + itemId + "/properties/" + propertyKey;
  var description = "Verify we cannot delete non-existing DashboardItemProperty";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedDashboardItemProperty(dashboardId, itemId, propertyKey) {
  var expectedDesc = "Delete property " + propertyKey + " of dashboard item " + itemId + " on dashboard " + dashboardId;
  return bp.EventSet("matchDeletedDashboardItemProperty", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDashboardItemPropertyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ property\ (.+)\ of\ dashboard\ item\ (.+)\ on\ dashboard\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ property\ (.+)\ of\ dashboard\ item\ (.+)\ on\ dashboard\ (.+)$/);
  var captures = m.slice(1);
  var names = ["propertyKey", "itemId", "dashboardId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: custom field context ----

function createCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context";
  var description = "Create custom field context " + name + " for field " + fieldId;
  var body = {
    "description": String(description),
    "fieldId": String(fieldId),
    "id": String(id),
    "issueTypeIds": String(issueTypeIds),
    "name": String(name),
    "projectIds": String(projectIds),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 404, 409],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function deleteCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId;
  var description = "Delete custom field context " + contextId + " for field " + fieldId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function updateCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId;
  var description = "Update custom field context " + contextId + " for field " + fieldId + " with name " + name;
  var body = {
    "contextId": String(contextId),
    "description": String(description),
    "fieldId": String(fieldId),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function getContextsForField(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context";
  var description = "Get custom field contexts for field " + fieldId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function tryToAddExistingCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  getContextsForField(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt);
}

function verifyCustomFieldContextExists(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context";
  var description = "Verify CustomFieldContext with fieldId " + fieldId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("CustomFieldContext exists");
          }
        }
      }
      return pvg.fail("Expected CustomFieldContext to exist but it does not");
    }
  });
}

function verifyCustomFieldContextDoesNotExist(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context";
  var description = "Verify CustomFieldContext with fieldId " + fieldId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected CustomFieldContext to not exist but it does");
          }
        }
      }
      return pvg.success("CustomFieldContext does not exist");
    }
  });
}

function tryToDeleteANonExistingCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId;
  var description = "Verify we cannot delete non-existing CustomFieldContext";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var expectedDesc = "Create custom field context " + name + " for field " + fieldId;
  return matchSuccess(expectedDesc);
}

function waitForAnyCustomFieldContextAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ custom\ field\ context\ (.+)\ for\ field\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ custom\ field\ context\ (.+)\ for\ field\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "fieldId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCustomFieldContextAddedEvent(keyVal) {
  return bp.EventSet("AddCustomFieldContext:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.fieldId) === String(keyVal);
  });
}

function matchAnyCustomFieldContextAdded() {
  return bp.EventSet("matchAnyCustomFieldContextAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.fieldId !== undefined && e.name.indexOf("Create custom field context") > -1;
  });
}

function waitForCustomFieldContextAdded(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var expectedDesc = "Create custom field context " + name + " for field " + fieldId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCustomFieldContext(contextId, description, fieldId, id, isAnyIssueType, isGlobalContext, issueTypeIds, maxResults, name, projectIds, startAt) {
  var expectedDesc = "Delete custom field context " + contextId + " for field " + fieldId;
  return bp.EventSet("matchDeletedCustomFieldContext", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomFieldContextDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ custom\ field\ context\ (.+)\ for\ field\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ custom\ field\ context\ (.+)\ for\ field\ (.+)$/);
  var captures = m.slice(1);
  var names = ["contextId", "fieldId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: custom field context default value ----

function getDefaultValues(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context/defaultValue";
  var description = "Get default values for custom field " + fieldId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function setDefaultValues(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context/defaultValue";
  var description = "Set default values for custom field " + fieldId;
  var body = {
    "defaultValues": [],
    "fieldId": String(fieldId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function verifyCustomFieldContextDefaultValueExists(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field";
  var description = "Verify CustomFieldContextDefaultValue with fieldId " + fieldId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("CustomFieldContextDefaultValue exists");
          }
        }
      }
      return pvg.fail("Expected CustomFieldContextDefaultValue to exist but it does not");
    }
  });
}

function verifyCustomFieldContextDefaultValueDoesNotExist(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field";
  var description = "Verify CustomFieldContextDefaultValue with fieldId " + fieldId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected CustomFieldContextDefaultValue to not exist but it does");
          }
        }
      }
      return pvg.success("CustomFieldContextDefaultValue does not exist");
    }
  });
}

// ---- Entity: custom field context issue type mapping ----

function getIssueTypeMappingsForContexts(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context/issuetypemapping";
  var description = "Get issue type mappings for custom field " + fieldId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403]
  });
}

function verifyCustomFieldContextIssueTypeMappingExists(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field";
  var description = "Verify CustomFieldContextIssueTypeMapping with fieldId " + fieldId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("CustomFieldContextIssueTypeMapping exists");
          }
        }
      }
      return pvg.fail("Expected CustomFieldContextIssueTypeMapping to exist but it does not");
    }
  });
}

function verifyCustomFieldContextIssueTypeMappingDoesNotExist(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field";
  var description = "Verify CustomFieldContextIssueTypeMapping with fieldId " + fieldId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected CustomFieldContextIssueTypeMapping to not exist but it does");
          }
        }
      }
      return pvg.success("CustomFieldContextIssueTypeMapping does not exist");
    }
  });
}

// ---- Entity: custom field context project mapping ----

function getProjectContextMapping(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/context/projectmapping";
  var description = "Get project mappings for custom field " + fieldId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function verifyCustomFieldContextProjectMappingExists(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field";
  var description = "Verify CustomFieldContextProjectMapping with fieldId " + fieldId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("CustomFieldContextProjectMapping exists");
          }
        }
      }
      return pvg.fail("Expected CustomFieldContextProjectMapping to exist but it does not");
    }
  });
}

function verifyCustomFieldContextProjectMappingDoesNotExist(contextId, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field";
  var description = "Verify CustomFieldContextProjectMapping with fieldId " + fieldId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected CustomFieldContextProjectMapping to not exist but it does");
          }
        }
      }
      return pvg.success("CustomFieldContextProjectMapping does not exist");
    }
  });
}

// ---- Entity: custom field context issue type ----

function addIssueTypesToContext(contextId, fieldId, issueTypeIds) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/issuetype";
  var description = "Add issue types to context " + contextId + " for field " + fieldId;
  var body = {
    "contextId": String(contextId),
    "fieldId": String(fieldId),
    "issueTypeIds": String(issueTypeIds),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function removeIssueTypesFromContext(contextId, fieldId, issueTypeIds) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/issuetype/remove";
  var description = "Remove issue types from context " + contextId + " for field " + fieldId;
  var body = {
    "contextId": String(contextId),
    "fieldId": String(fieldId),
    "issueTypeIds": String(issueTypeIds),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function tryToAddExistingCustomFieldContextIssueType(contextId, fieldId, issueTypeIds) {
  removeIssueTypesFromContext(contextId, fieldId, issueTypeIds);
}

function verifyCustomFieldContextIssueTypeExists(contextId, fieldId, issueTypeIds) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/issuetype/remove";
  var description = "Verify CustomFieldContextIssueType with fieldId " + fieldId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("CustomFieldContextIssueType exists");
          }
        }
      }
      return pvg.fail("Expected CustomFieldContextIssueType to exist but it does not");
    }
  });
}

function verifyCustomFieldContextIssueTypeDoesNotExist(contextId, fieldId, issueTypeIds) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/issuetype/remove";
  var description = "Verify CustomFieldContextIssueType with fieldId " + fieldId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected CustomFieldContextIssueType to not exist but it does");
          }
        }
      }
      return pvg.success("CustomFieldContextIssueType does not exist");
    }
  });
}

function matchAddedCustomFieldContextIssueType(contextId, fieldId, issueTypeIds) {
  var expectedDesc = "Remove issue types from context " + contextId + " for field " + fieldId;
  return matchSuccess(expectedDesc);
}

function waitForAnyCustomFieldContextIssueTypeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ issue\ types\ from\ context\ (.+)\ for\ field\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ issue\ types\ from\ context\ (.+)\ for\ field\ (.+)$/);
  var captures = m.slice(1);
  var names = ["contextId", "fieldId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCustomFieldContextIssueTypeAddedEvent(keyVal) {
  return bp.EventSet("AddCustomFieldContextIssueType:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.fieldId) === String(keyVal);
  });
}

function matchAnyCustomFieldContextIssueTypeAdded() {
  return bp.EventSet("matchAnyCustomFieldContextIssueTypeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.fieldId !== undefined && e.name.indexOf("Create custom field context issue type") > -1;
  });
}

function waitForCustomFieldContextIssueTypeAdded(contextId, fieldId, issueTypeIds) {
  var expectedDesc = "Remove issue types from context " + contextId + " for field " + fieldId;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: custom field context project ----

function assignProjectsToCustomFieldContext(contextId, fieldId, projectIds) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/project";
  var description = "Assign projects to custom field context " + contextId + " for field " + fieldId;
  var body = {
    "contextId": String(contextId),
    "fieldId": String(fieldId),
    "projectIds": String(projectIds),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function removeCustomFieldContextFromProjects(contextId, fieldId, projectIds) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/project/remove";
  var description = "Remove projects from custom field context " + contextId + " for field " + fieldId;
  var body = {
    "contextId": String(contextId),
    "fieldId": String(fieldId),
    "projectIds": String(projectIds),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function tryToAddExistingCustomFieldContextProject(contextId, fieldId, projectIds) {
  removeCustomFieldContextFromProjects(contextId, fieldId, projectIds);
}

function verifyCustomFieldContextProjectExists(contextId, fieldId, projectIds) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/project/remove";
  var description = "Verify CustomFieldContextProject with fieldId " + fieldId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("CustomFieldContextProject exists");
          }
        }
      }
      return pvg.fail("Expected CustomFieldContextProject to exist but it does not");
    }
  });
}

function verifyCustomFieldContextProjectDoesNotExist(contextId, fieldId, projectIds) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/project/remove";
  var description = "Verify CustomFieldContextProject with fieldId " + fieldId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected CustomFieldContextProject to not exist but it does");
          }
        }
      }
      return pvg.success("CustomFieldContextProject does not exist");
    }
  });
}

function matchAddedCustomFieldContextProject(contextId, fieldId, projectIds) {
  var expectedDesc = "Remove projects from custom field context " + contextId + " for field " + fieldId;
  return matchSuccess(expectedDesc);
}

function waitForAnyCustomFieldContextProjectAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ projects\ from\ custom\ field\ context\ (.+)\ for\ field\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ projects\ from\ custom\ field\ context\ (.+)\ for\ field\ (.+)$/);
  var captures = m.slice(1);
  var names = ["contextId", "fieldId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCustomFieldContextProjectAddedEvent(keyVal) {
  return bp.EventSet("AddCustomFieldContextProject:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.fieldId) === String(keyVal);
  });
}

function matchAnyCustomFieldContextProjectAdded() {
  return bp.EventSet("matchAnyCustomFieldContextProjectAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.fieldId !== undefined && e.name.indexOf("Create custom field context project") > -1;
  });
}

function waitForCustomFieldContextProjectAdded(contextId, fieldId, projectIds) {
  var expectedDesc = "Remove projects from custom field context " + contextId + " for field " + fieldId;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: project ----

function createProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var url = "/rest/api/3/project";
  var description = "Create project " + key + " with name " + name;
  var body = {
    "assigneeType": String(assigneeType),
    "avatarId": String(avatarId),
    "categoryId": String(categoryId),
    "description": String(description),
    "fieldConfigurationScheme": String(fieldConfigurationScheme),
    "issueSecurityScheme": String(issueSecurityScheme),
    "issueTypeScheme": String(issueTypeScheme),
    "issueTypeScreenScheme": String(issueTypeScreenScheme),
    "key": String(key),
    "lead": String(lead),
    "leadAccountId": String(leadAccountId),
    "name": String(name),
    "notificationScheme": String(notificationScheme),
    "permissionScheme": String(permissionScheme),
    "projectIdOrKey": String(projectIdOrKey),
    "projectTemplateKey": String(projectTemplateKey),
    "projectTypeKey": String(projectTypeKey),
    "url": String(url),
    "workflowScheme": String(workflowScheme),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      projectIdOrKey: String(projectIdOrKey)
      , avatarId: String(avatarId)
      , categoryId: String(categoryId)
      , leadAccountId: String(leadAccountId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { projectIdOrKey: String(projectIdOrKey) }) });
}

function deleteProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var url = "/rest/api/3/project/" + projectIdOrKey;
  var description = "Delete project " + projectIdOrKey;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 401, 404]
  });
}

function updateProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var url = "/rest/api/3/project/" + projectIdOrKey;
  var description = "Update project " + projectIdOrKey + " with name " + name;
  var body = {
    "assigneeType": String(assigneeType),
    "avatarId": String(avatarId),
    "categoryId": String(categoryId),
    "description": String(description),
    "issueSecurityScheme": String(issueSecurityScheme),
    "key": String(key),
    "lead": String(lead),
    "leadAccountId": String(leadAccountId),
    "name": String(name),
    "notificationScheme": String(notificationScheme),
    "permissionScheme": String(permissionScheme),
    "projectIdOrKey": String(projectIdOrKey),
    "releasedProjectKeys": [],
    "url": String(url),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      projectIdOrKey: String(projectIdOrKey)
      , avatarId: String(avatarId)
      , categoryId: String(categoryId)
      , leadAccountId: String(leadAccountId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { projectIdOrKey: String(projectIdOrKey) }) });
}

function getProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var url = "/rest/api/3/project/" + projectIdOrKey;
  var description = "Get project " + projectIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  getProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme);
}

function verifyProjectExists(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var url = "/rest/api/3/project";
  var description = "Verify Project with projectIdOrKey " + projectIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectIdOrKey) === String(projectIdOrKey)) {
            return pvg.success("Project exists");
          }
        }
      }
      return pvg.fail("Expected Project to exist but it does not");
    }
  });
}

function verifyProjectDoesNotExist(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var url = "/rest/api/3/project";
  var description = "Verify Project with projectIdOrKey " + projectIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectIdOrKey) === String(projectIdOrKey)) {
            return pvg.fail("Expected Project to not exist but it does");
          }
        }
      }
      return pvg.success("Project does not exist");
    }
  });
}

function tryToDeleteANonExistingProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var url = "/rest/api/3/project/" + projectIdOrKey;
  var description = "Verify we cannot delete non-existing Project";
  svc.delete(url, {
    expectedResponseCodes: [204, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var expectedDesc = "Create project " + key + " with name " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyProjectAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ project\ (.+)\ with\ name\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ project\ (.+)\ with\ name\ (.+)$/);
  var captures = m.slice(1);
  var names = ["key", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getProjectAddedEvent(keyVal) {
  return bp.EventSet("AddProject:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.projectIdOrKey) === String(keyVal);
  });
}

function matchAnyProjectAdded() {
  return bp.EventSet("matchAnyProjectAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.projectIdOrKey !== undefined && e.name.indexOf("Create project") > -1;
  });
}

function waitForProjectAdded(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var expectedDesc = "Create project " + key + " with name " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedProject(assigneeType, avatarId, categoryId, description, fieldConfigurationScheme, issueSecurityScheme, issueTypeScheme, issueTypeScreenScheme, key, lead, leadAccountId, name, notificationScheme, permissionScheme, projectIdOrKey, projectTemplateKey, projectTypeKey, url, workflowScheme) {
  var expectedDesc = "Delete project " + projectIdOrKey;
  return bp.EventSet("matchDeletedProject", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyProjectDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ project\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ project\ (.+)$/);
  var captures = m.slice(1);
  var names = ["projectIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: field configuration ----

function createFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt) {
  var url = "/rest/api/3/fieldconfiguration";
  var description = "Create field configuration " + name;
  var body = {
    "description": String(description),
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt) {
  var url = "/rest/api/3/fieldconfiguration/" + id;
  var description = "Delete field configuration " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function updateFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt) {
  var url = "/rest/api/3/fieldconfiguration/" + id;
  var description = "Update field configuration " + id + " with name " + name;
  var body = {
    "description": String(description),
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getAllFieldConfigurations(description, id, isDefault, maxResults, name, query, startAt) {
  var url = "/rest/api/3/fieldconfiguration";
  var description = "Get all field configurations";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403]
  });
}

function tryToAddExistingFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt) {
  getAllFieldConfigurations(description, id, isDefault, maxResults, name, query, startAt);
}

function verifyFieldConfigurationExists(description, id, isDefault, maxResults, name, query, startAt) {
  var url = "/rest/api/3/fieldconfiguration";
  var description = "Verify FieldConfiguration with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("FieldConfiguration exists");
          }
        }
      }
      return pvg.fail("Expected FieldConfiguration to exist but it does not");
    }
  });
}

function verifyFieldConfigurationDoesNotExist(description, id, isDefault, maxResults, name, query, startAt) {
  var url = "/rest/api/3/fieldconfiguration";
  var description = "Verify FieldConfiguration with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected FieldConfiguration to not exist but it does");
          }
        }
      }
      return pvg.success("FieldConfiguration does not exist");
    }
  });
}

function tryToDeleteANonExistingFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt) {
  var url = "/rest/api/3/fieldconfiguration/" + id;
  var description = "Verify we cannot delete non-existing FieldConfiguration";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt) {
  var expectedDesc = "Create field configuration " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyFieldConfigurationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ field\ configuration\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ field\ configuration\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFieldConfigurationAddedEvent(keyVal) {
  return bp.EventSet("AddFieldConfiguration:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyFieldConfigurationAdded() {
  return bp.EventSet("matchAnyFieldConfigurationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create field configuration") > -1;
  });
}

function waitForFieldConfigurationAdded(description, id, isDefault, maxResults, name, query, startAt) {
  var expectedDesc = "Create field configuration " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedFieldConfiguration(description, id, isDefault, maxResults, name, query, startAt) {
  var expectedDesc = "Delete field configuration " + id;
  return bp.EventSet("matchDeletedFieldConfiguration", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFieldConfigurationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ field\ configuration\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ field\ configuration\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: field configuration items ----

function getFieldConfigurationItems(id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfiguration/" + id + "/fields";
  var description = "Get field configuration items for field configuration " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function updateFieldConfigurationItems(id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfiguration/" + id + "/fields";
  var description = "Update field configuration items for field configuration " + id;
  var body = {
    "fieldConfigurationItems": [],
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function verifyFieldConfigurationItemsExists(id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfiguration";
  var description = "Verify FieldConfigurationItems with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("FieldConfigurationItems exists");
          }
        }
      }
      return pvg.fail("Expected FieldConfigurationItems to exist but it does not");
    }
  });
}

function verifyFieldConfigurationItemsDoesNotExist(id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfiguration";
  var description = "Verify FieldConfigurationItems with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected FieldConfigurationItems to not exist but it does");
          }
        }
      }
      return pvg.success("FieldConfigurationItems does not exist");
    }
  });
}

// ---- Entity: field configuration scheme ----

function createFieldConfigurationScheme(description, id, maxResults, name, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme";
  var description = "Create field configuration scheme " + name;
  var body = {
    "description": String(description),
    "id": String(id),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteFieldConfigurationScheme(description, id, maxResults, name, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id;
  var description = "Delete field configuration scheme " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function updateFieldConfigurationScheme(description, id, maxResults, name, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id;
  var description = "Update field configuration scheme " + id + " with name " + name;
  var body = {
    "description": String(description),
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getAllFieldConfigurationSchemes(description, id, maxResults, name, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme";
  var description = "Get all field configuration schemes";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function tryToAddExistingFieldConfigurationScheme(description, id, maxResults, name, startAt) {
  getAllFieldConfigurationSchemes(description, id, maxResults, name, startAt);
}

function verifyFieldConfigurationSchemeExists(description, id, maxResults, name, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme";
  var description = "Verify FieldConfigurationScheme with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("FieldConfigurationScheme exists");
          }
        }
      }
      return pvg.fail("Expected FieldConfigurationScheme to exist but it does not");
    }
  });
}

function verifyFieldConfigurationSchemeDoesNotExist(description, id, maxResults, name, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme";
  var description = "Verify FieldConfigurationScheme with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected FieldConfigurationScheme to not exist but it does");
          }
        }
      }
      return pvg.success("FieldConfigurationScheme does not exist");
    }
  });
}

function tryToDeleteANonExistingFieldConfigurationScheme(description, id, maxResults, name, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id;
  var description = "Verify we cannot delete non-existing FieldConfigurationScheme";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedFieldConfigurationScheme(description, id, maxResults, name, startAt) {
  var expectedDesc = "Create field configuration scheme " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyFieldConfigurationSchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ field\ configuration\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ field\ configuration\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFieldConfigurationSchemeAddedEvent(keyVal) {
  return bp.EventSet("AddFieldConfigurationScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyFieldConfigurationSchemeAdded() {
  return bp.EventSet("matchAnyFieldConfigurationSchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create field configuration scheme") > -1;
  });
}

function waitForFieldConfigurationSchemeAdded(description, id, maxResults, name, startAt) {
  var expectedDesc = "Create field configuration scheme " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedFieldConfigurationScheme(description, id, maxResults, name, startAt) {
  var expectedDesc = "Delete field configuration scheme " + id;
  return bp.EventSet("matchDeletedFieldConfigurationScheme", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFieldConfigurationSchemeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ field\ configuration\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ field\ configuration\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: field configuration scheme mapping ----

function getFieldConfigurationSchemeMappings(fieldConfigurationSchemeId, id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/mapping";
  var description = "Get field configuration scheme mappings";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function setFieldConfigurationSchemeMapping(fieldConfigurationSchemeId, id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id + "/mapping";
  var description = "Assign issue types to field configuration scheme " + id;
  var body = {
    "id": String(id),
    "mappings": [],
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , fieldConfigurationSchemeId: String(fieldConfigurationSchemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function removeIssueTypesFromGlobalFieldConfigurationScheme(fieldConfigurationSchemeId, id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/" + id + "/mapping/delete";
  var description = "Remove issue types from field configuration scheme " + id;
  var body = {
    "id": String(id),
    "issueTypeIds": [],
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , fieldConfigurationSchemeId: String(fieldConfigurationSchemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function verifyFieldConfigurationSchemeMappingExists(fieldConfigurationSchemeId, id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/mapping";
  var description = "Verify FieldConfigurationSchemeMapping with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("FieldConfigurationSchemeMapping exists");
          }
        }
      }
      return pvg.fail("Expected FieldConfigurationSchemeMapping to exist but it does not");
    }
  });
}

function verifyFieldConfigurationSchemeMappingDoesNotExist(fieldConfigurationSchemeId, id, maxResults, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/mapping";
  var description = "Verify FieldConfigurationSchemeMapping with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected FieldConfigurationSchemeMapping to not exist but it does");
          }
        }
      }
      return pvg.success("FieldConfigurationSchemeMapping does not exist");
    }
  });
}

// ---- Entity: field configuration scheme project association ----

function getFieldConfigurationSchemeProjectMapping(maxResults, projectId, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/project";
  var description = "Get field configuration schemes for projects";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function assignFieldConfigurationSchemeToProject(maxResults, projectId, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/project";
  var description = "Assign field configuration scheme {fieldConfigurationSchemeId} to project " + projectId;
  var body = {
    "fieldConfigurationSchemeId": "fieldConfigurationSchemeId_dummy",
    "projectId": String(projectId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifyFieldConfigurationSchemeProjectAssociationExists(maxResults, projectId, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/project";
  var description = "Verify FieldConfigurationSchemeProjectAssociation exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectId) === String(projectId)) {
            return pvg.success("FieldConfigurationSchemeProjectAssociation exists");
          }
        }
      }
      return pvg.fail("Expected FieldConfigurationSchemeProjectAssociation to exist but it does not");
    }
  });
}

function verifyFieldConfigurationSchemeProjectAssociationDoesNotExist(maxResults, projectId, startAt) {
  var url = "/rest/api/3/fieldconfigurationscheme/project";
  var description = "Verify FieldConfigurationSchemeProjectAssociation does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectId) === String(projectId)) {
            return pvg.fail("Expected FieldConfigurationSchemeProjectAssociation to not exist but it does");
          }
        }
      }
      return pvg.success("FieldConfigurationSchemeProjectAssociation does not exist");
    }
  });
}

// ---- Entity: user ----

function createUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user";
  var description = "Create user with emailAddress " + emailAddress;
  var body = {
    "applicationKeys": String(applicationKeys),
    "displayName": String(displayName),
    "emailAddress": emailAddress,
    "key": String(key),
    "name": String(name),
    "password": String(password),
    "products": String(products),
    "self": String(self),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      , accountId: String(accountId)
      , actionDescriptorId: String(actionDescriptorId)
      , issueId: String(issueId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function removeUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user";
  var description = "Delete user with accountId " + accountId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function findUsers(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user/search";
  var description = "Find users with query " + query + " or accountId " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 429]
  });
}

function findBulkAssignableUsers(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user/assignable/multiProjectSearch";
  var description = "Find users assignable to projects with projectKeys " + projectKeys + " and query " + query + " or accountId " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 404, 429]
  });
}

function findAssignableUsers(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user/assignable/search";
  var description = "Find users assignable to issues with project " + project + ", issueKey " + issueKey + ", issueId " + issueId + ", query " + query + " or accountId " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 404, 429]
  });
}

function findUsersWithAllPermissions(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user/permission/search";
  var description = "Find users with permissions " + permissions + " and query " + query + " or accountId " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404, 429]
  });
}

function findUsersForPicker(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user/picker";
  var description = "Find users for picker with query " + query;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 429]
  });
}

function findUsersByQuery(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user/search/query";
  var description = "Find users by query " + query;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 408]
  });
}

function findUserKeysByQuery(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user/search/query/key";
  var description = "Find user keys by query " + query;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 408]
  });
}

function findUsersWithBrowsePermission(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user/viewissue/search";
  var description = "Find users with browse permission with query " + query + " or accountId " + accountId + " for issueKey " + issueKey + " or projectKey " + projectKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 404, 429]
  });
}

function tryToAddExistingUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  findUsersWithBrowsePermission(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt);
}

function verifyUserExists(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user";
  var description = "Verify User exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("User exists");
          }
        }
      }
      return pvg.fail("Expected User to exist but it does not");
    }
  });
}

function verifyUserDoesNotExist(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user";
  var description = "Verify User does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected User to not exist but it does");
          }
        }
      }
      return pvg.success("User does not exist");
    }
  });
}

function tryToDeleteANonExistingUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var url = "/rest/api/3/user";
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var expectedDesc = "Create user with emailAddress " + emailAddress;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ with\ emailAddress\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ with\ emailAddress\ (.+)$/);
  var captures = m.slice(1);
  var names = ["emailAddress"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create user") > -1;
  });
}

function waitForUserAdded(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var expectedDesc = "Create user with emailAddress " + emailAddress;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUser(accountId, actionDescriptorId, applicationKeys, avatarSize, displayName, emailAddress, exclude, excludeAccountIds, excludeConnectUsers, issueId, issueKey, key, maxResult, maxResults, name, password, permissions, products, project, projectKey, projectKeys, property, query, recommend, self, showAvatar, startAt) {
  var expectedDesc = "Delete user with accountId " + accountId;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ with\ accountId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ with\ accountId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["accountId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user columns ----

function getUserDefaultColumns(accountId) {
  var url = "/rest/api/3/user/columns";
  var description = "Get user default columns for user with accountId " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function setUserColumns(accountId) {
  var url = "/rest/api/3/user/columns";
  var description = "Set user default columns for user with accountId " + accountId;
  var body = {
    "accountId": String(accountId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401, 403, 404, 429, 500],
    parameters: {
      description: description,
      , accountId: String(accountId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function resetUserColumns(accountId) {
  var url = "/rest/api/3/user/columns";
  var description = "Reset user default columns for user with accountId " + accountId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 401, 403]
  });
}

function verifyUserColumnsExists(accountId) {
  var url = "/rest/api/3/user/columns";
  var description = "Verify UserColumns exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("UserColumns exists");
          }
        }
      }
      return pvg.fail("Expected UserColumns to exist but it does not");
    }
  });
}

function verifyUserColumnsDoesNotExist(accountId) {
  var url = "/rest/api/3/user/columns";
  var description = "Verify UserColumns does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected UserColumns to not exist but it does");
          }
        }
      }
      return pvg.success("UserColumns does not exist");
    }
  });
}

function tryToDeleteANonExistingUserColumns(accountId) {
  var url = "/rest/api/3/user/columns";
  var description = "Verify we cannot delete non-existing UserColumns";
  svc.delete(url, {
    expectedResponseCodes: [204, 401, 403],
    parameters: { description: description }
  });
}

function matchDeletedUserColumns(accountId) {
  var expectedDesc = "Reset user default columns for user with accountId " + accountId;
  return bp.EventSet("matchDeletedUserColumns", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserColumnsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ user\ default\ columns\ for\ user\ with\ accountId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ user\ default\ columns\ for\ user\ with\ accountId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["accountId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user email ----

function getUserEmail(accountId) {
  var url = "/rest/api/3/user/email";
  var description = "Get user email for user with accountId " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 404, 503]
  });
}

function verifyUserEmailExists(accountId) {
  var url = "/rest/api/3/user/email";
  var description = "Verify UserEmail exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("UserEmail exists");
          }
        }
      }
      return pvg.fail("Expected UserEmail to exist but it does not");
    }
  });
}

function verifyUserEmailDoesNotExist(accountId) {
  var url = "/rest/api/3/user/email";
  var description = "Verify UserEmail does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected UserEmail to not exist but it does");
          }
        }
      }
      return pvg.success("UserEmail does not exist");
    }
  });
}

// ---- Entity: user email bulk ----

function getUserEmailBulk(accountId) {
  var url = "/rest/api/3/user/email/bulk";
  var description = "Get user emails in bulk for accountIds " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 503]
  });
}

function verifyUserEmailBulkExists(accountId) {
  var url = "/rest/api/3/user/email/bulk";
  var description = "Verify UserEmailBulk exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("UserEmailBulk exists");
          }
        }
      }
      return pvg.fail("Expected UserEmailBulk to exist but it does not");
    }
  });
}

function verifyUserEmailBulkDoesNotExist(accountId) {
  var url = "/rest/api/3/user/email/bulk";
  var description = "Verify UserEmailBulk does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected UserEmailBulk to not exist but it does");
          }
        }
      }
      return pvg.success("UserEmailBulk does not exist");
    }
  });
}

// ---- Entity: user groups ----

function getUserGroups(accountId) {
  var url = "/rest/api/3/user/groups";
  var description = "Get user groups for user with accountId " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function verifyUserGroupsExists(accountId) {
  var url = "/rest/api/3/user/groups";
  var description = "Verify UserGroups exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("UserGroups exists");
          }
        }
      }
      return pvg.fail("Expected UserGroups to exist but it does not");
    }
  });
}

function verifyUserGroupsDoesNotExist(accountId) {
  var url = "/rest/api/3/user/groups";
  var description = "Verify UserGroups does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected UserGroups to not exist but it does");
          }
        }
      }
      return pvg.success("UserGroups does not exist");
    }
  });
}

// ---- Entity: users bulk ----

function bulkGetUsers(accountId) {
  var url = "/rest/api/3/user/bulk";
  var description = "Bulk get users with accountIds " + accountId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function verifyUsersBulkExists(accountId) {
  var url = "/rest/api/3/user/bulk";
  var description = "Verify UsersBulk exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("UsersBulk exists");
          }
        }
      }
      return pvg.fail("Expected UsersBulk to exist but it does not");
    }
  });
}

function verifyUsersBulkDoesNotExist(accountId) {
  var url = "/rest/api/3/user/bulk";
  var description = "Verify UsersBulk does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected UsersBulk to not exist but it does");
          }
        }
      }
      return pvg.success("UsersBulk does not exist");
    }
  });
}

// ---- Entity: users bulk migration ----

function bulkGetUsersMigration(key, username) {
  var url = "/rest/api/3/user/bulk/migration";
  var description = "Get account IDs for users with usernames " + username + " or keys " + key;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function verifyUsersBulkMigrationExists(key, username) {
  var url = "/rest/api/3/user/bulk/migration";
  var description = "Verify UsersBulkMigration exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].key) === String(key) && String(items[i].username) === String(username)) {
            return pvg.success("UsersBulkMigration exists");
          }
        }
      }
      return pvg.fail("Expected UsersBulkMigration to exist but it does not");
    }
  });
}

function verifyUsersBulkMigrationDoesNotExist(key, username) {
  var url = "/rest/api/3/user/bulk/migration";
  var description = "Verify UsersBulkMigration does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].key) === String(key) && String(items[i].username) === String(username)) {
            return pvg.fail("Expected UsersBulkMigration to not exist but it does");
          }
        }
      }
      return pvg.success("UsersBulkMigration does not exist");
    }
  });
}

// ---- Entity: users ----

function getAllUsers(maxResults, startAt) {
  var url = "/rest/api/3/users/search";
  var description = "Get all users starting at " + startAt + " with max results " + maxResults;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 403, 409]
  });
}

function verifyUsersExists(maxResults, startAt) {
  var url = "/rest/api/3/users/search";
  var description = "Verify Users exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].maxResults) === String(maxResults) && String(items[i].startAt) === String(startAt)) {
            return pvg.success("Users exists");
          }
        }
      }
      return pvg.fail("Expected Users to exist but it does not");
    }
  });
}

function verifyUsersDoesNotExist(maxResults, startAt) {
  var url = "/rest/api/3/users/search";
  var description = "Verify Users does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].maxResults) === String(maxResults) && String(items[i].startAt) === String(startAt)) {
            return pvg.fail("Expected Users to not exist but it does");
          }
        }
      }
      return pvg.success("Users does not exist");
    }
  });
}

// ---- Entity: users default ----

function getAllUsersDefault(maxResults, startAt) {
  var url = "/rest/api/3/users";
  var description = "Get all users default starting at " + startAt + " with max results " + maxResults;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 403, 409]
  });
}

function verifyUsersDefaultExists(maxResults, startAt) {
  var url = "/rest/api/3/users";
  var description = "Verify UsersDefault exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].maxResults) === String(maxResults) && String(items[i].startAt) === String(startAt)) {
            return pvg.success("UsersDefault exists");
          }
        }
      }
      return pvg.fail("Expected UsersDefault to exist but it does not");
    }
  });
}

function verifyUsersDefaultDoesNotExist(maxResults, startAt) {
  var url = "/rest/api/3/users";
  var description = "Verify UsersDefault does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].maxResults) === String(maxResults) && String(items[i].startAt) === String(startAt)) {
            return pvg.fail("Expected UsersDefault to not exist but it does");
          }
        }
      }
      return pvg.success("UsersDefault does not exist");
    }
  });
}

// ---- Entity: workflow scheme ----

function createWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Create workflow scheme " + name + " with id " + id;
  var body = {
    "defaultWorkflow": String(defaultWorkflow),
    "description": String(description),
    "draft": String(draft),
    "id": String(id),
    "issueTypeMappings": issueTypeMappings,
    "issueTypes": issueTypes,
    "lastModified": String(lastModified),
    "lastModifiedUser": String(lastModifiedUser),
    "name": String(name),
    "originalDefaultWorkflow": String(originalDefaultWorkflow),
    "originalIssueTypeMappings": originalIssueTypeMappings,
    "self": String(self),
    "updateDraftIfNeeded": String(updateDraftIfNeeded),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id;
  var description = "Delete workflow scheme with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function updateWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id;
  var description = "Update workflow scheme " + name + " with id " + id;
  var body = {
    "defaultWorkflow": String(defaultWorkflow),
    "description": String(description),
    "draft": String(draft),
    "id": String(id),
    "issueTypeMappings": issueTypeMappings,
    "issueTypes": issueTypes,
    "lastModified": String(lastModified),
    "lastModifiedUser": String(lastModifiedUser),
    "name": String(name),
    "originalDefaultWorkflow": String(originalDefaultWorkflow),
    "originalIssueTypeMappings": originalIssueTypeMappings,
    "self": String(self),
    "updateDraftIfNeeded": String(updateDraftIfNeeded),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id;
  var description = "Get workflow scheme with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function tryToAddExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  getWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded);
}

function verifyWorkflowSchemeExists(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowScheme with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("WorkflowScheme exists");
          }
        }
      }
      return pvg.fail("Expected WorkflowScheme to exist but it does not");
    }
  });
}

function verifyWorkflowSchemeDoesNotExist(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowScheme with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected WorkflowScheme to not exist but it does");
          }
        }
      }
      return pvg.success("WorkflowScheme does not exist");
    }
  });
}

function tryToDeleteANonExistingWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id;
  var description = "Verify we cannot delete non-existing WorkflowScheme";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var expectedDesc = "Create workflow scheme " + name + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyWorkflowSchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ workflow\ scheme\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ workflow\ scheme\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWorkflowSchemeAddedEvent(keyVal) {
  return bp.EventSet("AddWorkflowScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyWorkflowSchemeAdded() {
  return bp.EventSet("matchAnyWorkflowSchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create workflow scheme") > -1;
  });
}

function waitForWorkflowSchemeAdded(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var expectedDesc = "Create workflow scheme " + name + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedWorkflowScheme(defaultWorkflow, description, draft, id, issueTypeMappings, issueTypes, lastModified, lastModifiedUser, name, originalDefaultWorkflow, originalIssueTypeMappings, returnDraftIfExists, self, updateDraftIfNeeded) {
  var expectedDesc = "Delete workflow scheme with id " + id;
  return bp.EventSet("matchDeletedWorkflowScheme", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorkflowSchemeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ workflow\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ workflow\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: default workflow ----

function deleteDefaultWorkflow(id, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/default";
  var description = "Delete default workflow for workflow scheme with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function updateDefaultWorkflow(id, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/default";
  var description = "Update default workflow for workflow scheme with id " + id;
  var body = {
    "id": String(id),
    "updateDraftIfNeeded": String(updateDraftIfNeeded),
    "workflow": "workflow_" + id,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getDefaultWorkflow(id, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/default";
  var description = "Get default workflow for workflow scheme with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function verifyWorkflowSchemeDefaultWorkflowExists(id, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowSchemeDefaultWorkflow with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("WorkflowSchemeDefaultWorkflow exists");
          }
        }
      }
      return pvg.fail("Expected WorkflowSchemeDefaultWorkflow to exist but it does not");
    }
  });
}

function verifyWorkflowSchemeDefaultWorkflowDoesNotExist(id, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowSchemeDefaultWorkflow with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected WorkflowSchemeDefaultWorkflow to not exist but it does");
          }
        }
      }
      return pvg.success("WorkflowSchemeDefaultWorkflow does not exist");
    }
  });
}

function tryToDeleteANonExistingWorkflowSchemeDefaultWorkflow(id, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/default";
  var description = "Verify we cannot delete non-existing WorkflowSchemeDefaultWorkflow";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedWorkflowSchemeDefaultWorkflow(id, returnDraftIfExists, updateDraftIfNeeded) {
  var expectedDesc = "Delete default workflow for workflow scheme with id " + id;
  return bp.EventSet("matchDeletedWorkflowSchemeDefaultWorkflow", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorkflowSchemeDefaultWorkflowDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ default\ workflow\ for\ workflow\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ default\ workflow\ for\ workflow\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: workflow scheme issue type ----

function deleteWorkflowSchemeIssueType(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/issuetype/" + issueType;
  var description = "Delete workflow for issue type " + issueType + " in workflow scheme with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function setWorkflowSchemeIssueType(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/issuetype/" + issueType;
  var description = "Set workflow for issue type " + issueType + " in workflow scheme with id " + id;
  var body = {
    "id": String(id),
    "issueType": String(issueType),
    "updateDraftIfNeeded": String(updateDraftIfNeeded),
    "workflow": "workflow_" + id,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , issueType: String(issueType)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getWorkflowSchemeIssueType(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/issuetype/" + issueType;
  var description = "Get workflow for issue type " + issueType + " in workflow scheme with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function verifyWorkflowSchemeIssueTypeExists(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowSchemeIssueType with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("WorkflowSchemeIssueType exists");
          }
        }
      }
      return pvg.fail("Expected WorkflowSchemeIssueType to exist but it does not");
    }
  });
}

function verifyWorkflowSchemeIssueTypeDoesNotExist(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowSchemeIssueType with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected WorkflowSchemeIssueType to not exist but it does");
          }
        }
      }
      return pvg.success("WorkflowSchemeIssueType does not exist");
    }
  });
}

function tryToDeleteANonExistingWorkflowSchemeIssueType(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  var url = "/rest/api/3/workflowscheme/" + id + "/issuetype/" + issueType;
  var description = "Verify we cannot delete non-existing WorkflowSchemeIssueType";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedWorkflowSchemeIssueType(id, issueType, returnDraftIfExists, updateDraftIfNeeded) {
  var expectedDesc = "Delete workflow for issue type " + issueType + " in workflow scheme with id " + id;
  return bp.EventSet("matchDeletedWorkflowSchemeIssueType", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorkflowSchemeIssueTypeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ workflow\ for\ issue\ type\ (.+)\ in\ workflow\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ workflow\ for\ issue\ type\ (.+)\ in\ workflow\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueType", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: workflow scheme workflow mapping ----

function deleteWorkflowMapping(id, returnDraftIfExists, updateDraftIfNeeded, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/workflow";
  var description = "Delete issue types for workflow " + workflowName + " in workflow scheme with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function updateWorkflowMapping(id, returnDraftIfExists, updateDraftIfNeeded, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/workflow";
  var description = "Set issue types for workflow " + workflowName + " in workflow scheme with id " + id;
  var body = {
    "defaultMapping": String(true),
    "id": String(id),
    "issueTypes": [],
    "updateDraftIfNeeded": String(updateDraftIfNeeded),
    "workflow": "workflow_" + id,
    "workflowName": String(workflowName),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getWorkflow(id, returnDraftIfExists, updateDraftIfNeeded, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/workflow";
  var description = "Get issue types for workflow " + workflowName + " in workflow scheme with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function verifyWorkflowSchemeWorkflowMappingExists(id, returnDraftIfExists, updateDraftIfNeeded, workflowName) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowSchemeWorkflowMapping with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("WorkflowSchemeWorkflowMapping exists");
          }
        }
      }
      return pvg.fail("Expected WorkflowSchemeWorkflowMapping to exist but it does not");
    }
  });
}

function verifyWorkflowSchemeWorkflowMappingDoesNotExist(id, returnDraftIfExists, updateDraftIfNeeded, workflowName) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowSchemeWorkflowMapping with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected WorkflowSchemeWorkflowMapping to not exist but it does");
          }
        }
      }
      return pvg.success("WorkflowSchemeWorkflowMapping does not exist");
    }
  });
}

function tryToDeleteANonExistingWorkflowSchemeWorkflowMapping(id, returnDraftIfExists, updateDraftIfNeeded, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/workflow";
  var description = "Verify we cannot delete non-existing WorkflowSchemeWorkflowMapping";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedWorkflowSchemeWorkflowMapping(id, returnDraftIfExists, updateDraftIfNeeded, workflowName) {
  var expectedDesc = "Delete issue types for workflow " + workflowName + " in workflow scheme with id " + id;
  return bp.EventSet("matchDeletedWorkflowSchemeWorkflowMapping", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorkflowSchemeWorkflowMappingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ types\ for\ workflow\ (.+)\ in\ workflow\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ types\ for\ workflow\ (.+)\ in\ workflow\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["workflowName", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: custom field ----

function createCustomField(description, fieldId, id, name, searcherKey, type) {
  var url = "/rest/api/3/field";
  var description = "Create custom field " + name + " with id " + id;
  var body = {
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "searcherKey": String(searcherKey),
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      id: String(id)
      , fieldId: String(fieldId)
      , type: String(type)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getFields(description, fieldId, id, name, searcherKey, type) {
  var url = "/rest/api/3/field";
  var description = "Get all custom fields";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function updateCustomField(description, fieldId, id, name, searcherKey, type) {
  var url = "/rest/api/3/field/" + fieldId;
  var description = "Update custom field " + fieldId + " with name " + name;
  var body = {
    "description": String(description),
    "fieldId": String(fieldId),
    "id": String(id),
    "name": String(name),
    "searcherKey": String(searcherKey),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , fieldId: String(fieldId)
      , type: String(type)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteCustomField(description, fieldId, id, name, searcherKey, type) {
  var url = "/rest/api/3/field/" + id;
  var description = "Delete custom field " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [303, 400, 401, 403, 404, 409]
  });
}

function tryToAddExistingCustomField(description, fieldId, id, name, searcherKey, type) {
  deleteCustomField(description, fieldId, id, name, searcherKey, type);
}

function verifyCustomFieldExists(description, fieldId, id, name, searcherKey, type) {
  var url = "/rest/api/3/field";
  var description = "Verify CustomField with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("CustomField exists");
          }
        }
      }
      return pvg.fail("Expected CustomField to exist but it does not");
    }
  });
}

function verifyCustomFieldDoesNotExist(description, fieldId, id, name, searcherKey, type) {
  var url = "/rest/api/3/field";
  var description = "Verify CustomField with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected CustomField to not exist but it does");
          }
        }
      }
      return pvg.success("CustomField does not exist");
    }
  });
}

function tryToDeleteANonExistingCustomField(description, fieldId, id, name, searcherKey, type) {
  var url = "/rest/api/3/field/" + id;
  var description = "Verify we cannot delete non-existing CustomField";
  svc.delete(url, {
    expectedResponseCodes: [303, 400, 401, 403, 404, 409],
    parameters: { description: description }
  });
}

function matchAddedCustomField(description, fieldId, id, name, searcherKey, type) {
  var expectedDesc = "Create custom field " + name + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyCustomFieldAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ custom\ field\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ custom\ field\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCustomFieldAddedEvent(keyVal) {
  return bp.EventSet("AddCustomField:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyCustomFieldAdded() {
  return bp.EventSet("matchAnyCustomFieldAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create custom field") > -1;
  });
}

function waitForCustomFieldAdded(description, fieldId, id, name, searcherKey, type) {
  var expectedDesc = "Create custom field " + name + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCustomField(description, fieldId, id, name, searcherKey, type) {
  var expectedDesc = "Delete custom field " + id;
  return bp.EventSet("matchDeletedCustomField", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomFieldDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ custom\ field\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ custom\ field\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: custom field trash ----

function restoreCustomField(id) {
  var url = "/rest/api/3/field/" + id + "/restore";
  var description = "Restore custom field " + id + " from trash";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function trashCustomField(id) {
  var url = "/rest/api/3/field/" + id + "/trash";
  var description = "Move custom field " + id + " to trash";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: filter ----

function createFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var url = "/rest/api/3/filter";
  var description = "Create filter " + name + " with id " + id;
  var body = {
    "approximateLastUsed": String(approximateLastUsed),
    "description": String(description),
    "editPermissions": String(editPermissions),
    "favourite": String(favourite),
    "favouritedCount": String(favouritedCount),
    "id": String(id),
    "jql": String(jql),
    "name": String(name),
    "owner": String(owner),
    "searchUrl": String(searchUrl),
    "self": String(self),
    "sharePermissions": String(sharePermissions),
    "sharedUsers": String(sharedUsers),
    "subscriptions": String(subscriptions),
    "viewUrl": String(viewUrl),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var url = "/rest/api/3/filter/" + id;
  var description = "Delete filter with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401]
  });
}

function updateFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var url = "/rest/api/3/filter/" + id;
  var description = "Update filter " + name + " with id " + id;
  var body = {
    "approximateLastUsed": String(approximateLastUsed),
    "description": String(description),
    "editPermissions": String(editPermissions),
    "favourite": String(favourite),
    "favouritedCount": String(favouritedCount),
    "id": String(id),
    "jql": String(jql),
    "name": String(name),
    "owner": String(owner),
    "searchUrl": String(searchUrl),
    "self": String(self),
    "sharePermissions": String(sharePermissions),
    "sharedUsers": String(sharedUsers),
    "subscriptions": String(subscriptions),
    "viewUrl": String(viewUrl),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var url = "/rest/api/3/filter/" + id;
  var description = "Get filter with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function tryToAddExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  getFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl);
}

function verifyFilterExists(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var url = "/rest/api/3/filter";
  var description = "Verify Filter with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Filter exists");
          }
        }
      }
      return pvg.fail("Expected Filter to exist but it does not");
    }
  });
}

function verifyFilterDoesNotExist(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var url = "/rest/api/3/filter";
  var description = "Verify Filter with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Filter to not exist but it does");
          }
        }
      }
      return pvg.success("Filter does not exist");
    }
  });
}

function tryToDeleteANonExistingFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var url = "/rest/api/3/filter/" + id;
  var description = "Verify we cannot delete non-existing Filter";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401],
    parameters: { description: description }
  });
}

function matchAddedFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var expectedDesc = "Create filter " + name + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyFilterAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ filter\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ filter\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFilterAddedEvent(keyVal) {
  return bp.EventSet("AddFilter:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyFilterAdded() {
  return bp.EventSet("matchAnyFilterAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create filter") > -1;
  });
}

function waitForFilterAdded(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var expectedDesc = "Create filter " + name + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedFilter(approximateLastUsed, description, editPermissions, favourite, favouritedCount, id, jql, name, owner, searchUrl, self, sharePermissions, sharedUsers, subscriptions, viewUrl) {
  var expectedDesc = "Delete filter with id " + id;
  return bp.EventSet("matchDeletedFilter", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFilterDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ filter\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ filter\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: filter columns ----

function getColumns(id) {
  var url = "/rest/api/3/filter/" + id + "/columns";
  var description = "Get columns for filter with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 404]
  });
}

function setColumns(id) {
  var url = "/rest/api/3/filter/" + id + "/columns";
  var description = "Set columns for filter with id " + id;
  var body = {
    "columns": [],
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function resetColumns(id) {
  var url = "/rest/api/3/filter/" + id + "/columns";
  var description = "Reset columns for filter with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401]
  });
}

function verifyFilterColumnsExists(id) {
  var url = "/rest/api/3/filter";
  var description = "Verify FilterColumns with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("FilterColumns exists");
          }
        }
      }
      return pvg.fail("Expected FilterColumns to exist but it does not");
    }
  });
}

function verifyFilterColumnsDoesNotExist(id) {
  var url = "/rest/api/3/filter";
  var description = "Verify FilterColumns with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected FilterColumns to not exist but it does");
          }
        }
      }
      return pvg.success("FilterColumns does not exist");
    }
  });
}

function tryToDeleteANonExistingFilterColumns(id) {
  var url = "/rest/api/3/filter/" + id + "/columns";
  var description = "Verify we cannot delete non-existing FilterColumns";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401],
    parameters: { description: description }
  });
}

function matchDeletedFilterColumns(id) {
  var expectedDesc = "Reset columns for filter with id " + id;
  return bp.EventSet("matchDeletedFilterColumns", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFilterColumnsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ columns\ for\ filter\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ columns\ for\ filter\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: filter favourite ----

function setFavouriteForFilter(id) {
  var url = "/rest/api/3/filter/" + id + "/favourite";
  var description = "Add filter with id " + id + " as favorite";
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteFavouriteForFilter(id) {
  var url = "/rest/api/3/filter/" + id + "/favourite";
  var description = "Remove filter with id " + id + " as favorite";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingFilterFavourite(id) {
  deleteFavouriteForFilter(id);
}

function verifyFilterFavouriteExists(id) {
  var url = "/rest/api/3/filter/" + id + "/favourite";
  var description = "Verify FilterFavourite with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("FilterFavourite exists");
          }
        }
      }
      return pvg.fail("Expected FilterFavourite to exist but it does not");
    }
  });
}

function verifyFilterFavouriteDoesNotExist(id) {
  var url = "/rest/api/3/filter/" + id + "/favourite";
  var description = "Verify FilterFavourite with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected FilterFavourite to not exist but it does");
          }
        }
      }
      return pvg.success("FilterFavourite does not exist");
    }
  });
}

function tryToDeleteANonExistingFilterFavourite(id) {
  var url = "/rest/api/3/filter/" + id + "/favourite";
  var description = "Verify we cannot delete non-existing FilterFavourite";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedFilterFavourite(id) {
  var expectedDesc = "Add filter with id " + id + " as favorite";
  return matchSuccess(expectedDesc);
}

function waitForAnyFilterFavouriteAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ filter\ with\ id\ (.+)\ as\ favorite$/));
  var m = ev.data.parameters.description.match(/^Add\ filter\ with\ id\ (.+)\ as\ favorite$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFilterFavouriteAddedEvent(keyVal) {
  return bp.EventSet("AddFilterFavourite:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyFilterFavouriteAdded() {
  return bp.EventSet("matchAnyFilterFavouriteAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create filter favourite") > -1;
  });
}

function waitForFilterFavouriteAdded(id) {
  var expectedDesc = "Add filter with id " + id + " as favorite";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedFilterFavourite(id) {
  var expectedDesc = "Remove filter with id " + id + " as favorite";
  return bp.EventSet("matchDeletedFilterFavourite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFilterFavouriteDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ filter\ with\ id\ (.+)\ as\ favorite$/));
  var m = ev.data.parameters.description.match(/^Remove\ filter\ with\ id\ (.+)\ as\ favorite$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: filter owner ----

function changeFilterOwner(id) {
  var url = "/rest/api/3/filter/" + id + "/owner";
  var description = "Change owner of filter with id " + id + " to accountId {accountId}";
  var body = {
    "accountId": "accountId_" + id,
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

// ---- Entity: issue type screen scheme ----

function createIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme";
  var description = "Create issue type screen scheme " + name + " with id " + issueTypeScreenSchemeId;
  var body = {
    "description": String(description),
    "issueTypeMappings": String(issueTypeMappings),
    "issueTypeScreenSchemeId": String(issueTypeScreenSchemeId),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      issueTypeScreenSchemeId: String(issueTypeScreenSchemeId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeScreenSchemeId: String(issueTypeScreenSchemeId) }) });
}

function deleteIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId;
  var description = "Delete issue type screen scheme with id " + issueTypeScreenSchemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function updateIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId;
  var description = "Update issue type screen scheme " + name + " with id " + issueTypeScreenSchemeId;
  var body = {
    "description": String(description),
    "issueTypeScreenSchemeId": String(issueTypeScreenSchemeId),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      issueTypeScreenSchemeId: String(issueTypeScreenSchemeId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeScreenSchemeId: String(issueTypeScreenSchemeId) }) });
}

function getIssueTypeScreenSchemes(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme";
  var description = "Get issue type screen schemes";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function tryToAddExistingIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  getIssueTypeScreenSchemes(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt);
}

function verifyIssueTypeScreenSchemeExists(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme";
  var description = "Verify IssueTypeScreenScheme with issueTypeScreenSchemeId " + issueTypeScreenSchemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeScreenSchemeId) === String(issueTypeScreenSchemeId)) {
            return pvg.success("IssueTypeScreenScheme exists");
          }
        }
      }
      return pvg.fail("Expected IssueTypeScreenScheme to exist but it does not");
    }
  });
}

function verifyIssueTypeScreenSchemeDoesNotExist(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme";
  var description = "Verify IssueTypeScreenScheme with issueTypeScreenSchemeId " + issueTypeScreenSchemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeScreenSchemeId) === String(issueTypeScreenSchemeId)) {
            return pvg.fail("Expected IssueTypeScreenScheme to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTypeScreenScheme does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId;
  var description = "Verify we cannot delete non-existing IssueTypeScreenScheme";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var expectedDesc = "Create issue type screen scheme " + name + " with id " + issueTypeScreenSchemeId;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueTypeScreenSchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ issue\ type\ screen\ scheme\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ issue\ type\ screen\ scheme\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "issueTypeScreenSchemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueTypeScreenSchemeAddedEvent(keyVal) {
  return bp.EventSet("AddIssueTypeScreenScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.issueTypeScreenSchemeId) === String(keyVal);
  });
}

function matchAnyIssueTypeScreenSchemeAdded() {
  return bp.EventSet("matchAnyIssueTypeScreenSchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.issueTypeScreenSchemeId !== undefined && e.name.indexOf("Create issue type screen scheme") > -1;
  });
}

function waitForIssueTypeScreenSchemeAdded(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var expectedDesc = "Create issue type screen scheme " + name + " with id " + issueTypeScreenSchemeId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueTypeScreenScheme(description, expand, id, issueTypeMappings, issueTypeScreenSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var expectedDesc = "Delete issue type screen scheme with id " + issueTypeScreenSchemeId;
  return bp.EventSet("matchDeletedIssueTypeScreenScheme", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueTypeScreenSchemeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ type\ screen\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ type\ screen\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueTypeScreenSchemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue type screen scheme mapping ----

function getIssueTypeScreenSchemeMappings(issueTypeScreenSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/mapping";
  var description = "Get issue type screen scheme mappings for scheme id " + issueTypeScreenSchemeId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function appendMappingsForIssueTypeScreenScheme(issueTypeScreenSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId + "/mapping";
  var description = "Append mappings to issue type screen scheme with id " + issueTypeScreenSchemeId;
  var body = {
    "issueTypeMappings": [],
    "issueTypeScreenSchemeId": String(issueTypeScreenSchemeId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      issueTypeScreenSchemeId: String(issueTypeScreenSchemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeScreenSchemeId: String(issueTypeScreenSchemeId) }) });
}

function updateDefaultScreenScheme(issueTypeScreenSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId + "/mapping/default";
  var description = "Update issue type screen scheme default screen scheme for id " + issueTypeScreenSchemeId;
  var body = {
    "issueTypeScreenSchemeId": String(issueTypeScreenSchemeId),
    "screenSchemeId": "screenSchemeId_" + issueTypeScreenSchemeId,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      issueTypeScreenSchemeId: String(issueTypeScreenSchemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeScreenSchemeId: String(issueTypeScreenSchemeId) }) });
}

function removeMappingsFromIssueTypeScreenScheme(issueTypeScreenSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId + "/mapping/remove";
  var description = "Remove mappings from issue type screen scheme with id " + issueTypeScreenSchemeId;
  var body = {
    "contextId": "contextId_" + issueTypeScreenSchemeId,
    "fieldId": "fieldId_" + issueTypeScreenSchemeId,
    "issueTypeIds": [],
    "issueTypeScreenSchemeId": String(issueTypeScreenSchemeId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      issueTypeScreenSchemeId: String(issueTypeScreenSchemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeScreenSchemeId: String(issueTypeScreenSchemeId) }) });
}

function verifyIssueTypeScreenSchemeMappingExists(issueTypeScreenSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/mapping";
  var description = "Verify IssueTypeScreenSchemeMapping with issueTypeScreenSchemeId " + issueTypeScreenSchemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeScreenSchemeId) === String(issueTypeScreenSchemeId)) {
            return pvg.success("IssueTypeScreenSchemeMapping exists");
          }
        }
      }
      return pvg.fail("Expected IssueTypeScreenSchemeMapping to exist but it does not");
    }
  });
}

function verifyIssueTypeScreenSchemeMappingDoesNotExist(issueTypeScreenSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/mapping";
  var description = "Verify IssueTypeScreenSchemeMapping with issueTypeScreenSchemeId " + issueTypeScreenSchemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeScreenSchemeId) === String(issueTypeScreenSchemeId)) {
            return pvg.fail("Expected IssueTypeScreenSchemeMapping to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTypeScreenSchemeMapping does not exist");
    }
  });
}

// ---- Entity: issue type screen scheme project association ----

function getIssueTypeScreenSchemeProjectAssociations(issueTypeScreenSchemeId, maxResults, projectId, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/project";
  var description = "Get issue type screen schemes for projects with ids " + projectId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function assignIssueTypeScreenSchemeToProject(issueTypeScreenSchemeId, maxResults, projectId, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/project";
  var description = "Assign issue type screen scheme " + issueTypeScreenSchemeId + " to project " + projectId;
  var body = {
    "issueTypeScreenSchemeId": String(issueTypeScreenSchemeId),
    "projectId": String(projectId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      , issueTypeScreenSchemeId: String(issueTypeScreenSchemeId)
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifyIssueTypeScreenSchemeProjectAssociationExists(issueTypeScreenSchemeId, maxResults, projectId, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/project";
  var description = "Verify IssueTypeScreenSchemeProjectAssociation exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeScreenSchemeId) === String(issueTypeScreenSchemeId)) {
            return pvg.success("IssueTypeScreenSchemeProjectAssociation exists");
          }
        }
      }
      return pvg.fail("Expected IssueTypeScreenSchemeProjectAssociation to exist but it does not");
    }
  });
}

function verifyIssueTypeScreenSchemeProjectAssociationDoesNotExist(issueTypeScreenSchemeId, maxResults, projectId, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/project";
  var description = "Verify IssueTypeScreenSchemeProjectAssociation does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeScreenSchemeId) === String(issueTypeScreenSchemeId)) {
            return pvg.fail("Expected IssueTypeScreenSchemeProjectAssociation to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTypeScreenSchemeProjectAssociation does not exist");
    }
  });
}

// ---- Entity: issue type screen scheme project ----

function getProjectsForIssueTypeScreenScheme(issueTypeScreenSchemeId, maxResults, query, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme/" + issueTypeScreenSchemeId + "/project";
  var description = "Get projects for issue type screen scheme with id " + issueTypeScreenSchemeId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function verifyIssueTypeScreenSchemeProjectExists(issueTypeScreenSchemeId, maxResults, query, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme";
  var description = "Verify IssueTypeScreenSchemeProject with issueTypeScreenSchemeId " + issueTypeScreenSchemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeScreenSchemeId) === String(issueTypeScreenSchemeId)) {
            return pvg.success("IssueTypeScreenSchemeProject exists");
          }
        }
      }
      return pvg.fail("Expected IssueTypeScreenSchemeProject to exist but it does not");
    }
  });
}

function verifyIssueTypeScreenSchemeProjectDoesNotExist(issueTypeScreenSchemeId, maxResults, query, startAt) {
  var url = "/rest/api/3/issuetypescreenscheme";
  var description = "Verify IssueTypeScreenSchemeProject with issueTypeScreenSchemeId " + issueTypeScreenSchemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeScreenSchemeId) === String(issueTypeScreenSchemeId)) {
            return pvg.fail("Expected IssueTypeScreenSchemeProject to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTypeScreenSchemeProject does not exist");
    }
  });
}

// ---- Entity: attachment ----

function getAttachment(id) {
  var url = "/rest/api/3/attachment/" + id;
  var description = "Get attachment metadata with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function removeAttachment(id) {
  var url = "/rest/api/3/attachment/" + id;
  var description = "Delete attachment with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function verifyAttachmentExists(id) {
  var url = "/rest/api/3/attachment";
  var description = "Verify Attachment with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Attachment exists");
          }
        }
      }
      return pvg.fail("Expected Attachment to exist but it does not");
    }
  });
}

function verifyAttachmentDoesNotExist(id) {
  var url = "/rest/api/3/attachment";
  var description = "Verify Attachment with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Attachment to not exist but it does");
          }
        }
      }
      return pvg.success("Attachment does not exist");
    }
  });
}

function tryToDeleteANonExistingAttachment(id) {
  var url = "/rest/api/3/attachment/" + id;
  var description = "Verify we cannot delete non-existing Attachment";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedAttachment(id) {
  var expectedDesc = "Delete attachment with id " + id;
  return bp.EventSet("matchDeletedAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ attachment\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ attachment\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: attachment content ----

function getAttachmentContent(id) {
  var url = "/rest/api/3/attachment/content/" + id;
  var description = "Get attachment content with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 206, 303, 400, 401, 403, 404, 416]
  });
}

function verifyAttachmentContentExists(id) {
  var url = "/rest/api/3/attachment/content";
  var description = "Verify AttachmentContent with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("AttachmentContent exists");
          }
        }
      }
      return pvg.fail("Expected AttachmentContent to exist but it does not");
    }
  });
}

function verifyAttachmentContentDoesNotExist(id) {
  var url = "/rest/api/3/attachment/content";
  var description = "Verify AttachmentContent with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected AttachmentContent to not exist but it does");
          }
        }
      }
      return pvg.success("AttachmentContent does not exist");
    }
  });
}

// ---- Entity: attachment thumbnail ----

function getAttachmentThumbnail(id) {
  var url = "/rest/api/3/attachment/thumbnail/" + id;
  var description = "Get attachment thumbnail with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 303, 400, 401, 403, 404]
  });
}

function verifyAttachmentThumbnailExists(id) {
  var url = "/rest/api/3/attachment/thumbnail";
  var description = "Verify AttachmentThumbnail with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("AttachmentThumbnail exists");
          }
        }
      }
      return pvg.fail("Expected AttachmentThumbnail to exist but it does not");
    }
  });
}

function verifyAttachmentThumbnailDoesNotExist(id) {
  var url = "/rest/api/3/attachment/thumbnail";
  var description = "Verify AttachmentThumbnail with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected AttachmentThumbnail to not exist but it does");
          }
        }
      }
      return pvg.success("AttachmentThumbnail does not exist");
    }
  });
}

// ---- Entity: expanded attachment human ----

function expandAttachmentForHumans(id) {
  var url = "/rest/api/3/attachment/" + id + "/expand/human";
  var description = "Get all metadata for expanded attachment with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404, 409]
  });
}

function verifyAttachmentExpandedHumanExists(id) {
  var url = "/rest/api/3/attachment";
  var description = "Verify AttachmentExpandedHuman with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("AttachmentExpandedHuman exists");
          }
        }
      }
      return pvg.fail("Expected AttachmentExpandedHuman to exist but it does not");
    }
  });
}

function verifyAttachmentExpandedHumanDoesNotExist(id) {
  var url = "/rest/api/3/attachment";
  var description = "Verify AttachmentExpandedHuman with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected AttachmentExpandedHuman to not exist but it does");
          }
        }
      }
      return pvg.success("AttachmentExpandedHuman does not exist");
    }
  });
}

// ---- Entity: expanded attachment raw ----

function expandAttachmentForMachines(id) {
  var url = "/rest/api/3/attachment/" + id + "/expand/raw";
  var description = "Get contents metadata for expanded attachment with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404, 409]
  });
}

function verifyAttachmentExpandedRawExists(id) {
  var url = "/rest/api/3/attachment";
  var description = "Verify AttachmentExpandedRaw with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("AttachmentExpandedRaw exists");
          }
        }
      }
      return pvg.fail("Expected AttachmentExpandedRaw to exist but it does not");
    }
  });
}

function verifyAttachmentExpandedRawDoesNotExist(id) {
  var url = "/rest/api/3/attachment";
  var description = "Verify AttachmentExpandedRaw with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected AttachmentExpandedRaw to not exist but it does");
          }
        }
      }
      return pvg.success("AttachmentExpandedRaw does not exist");
    }
  });
}

// ---- Entity: issue attachment ----

function addAttachment(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/attachments";
  var description = "Add attachment to issue " + issueIdOrKey;
  var body = {
    "issueIdOrKey": String(issueIdOrKey),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404, 413],
    parameters: {
      description: description,
      , issueIdOrKey: String(issueIdOrKey)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingIssueAttachment(issueIdOrKey) {
  addAttachment(issueIdOrKey);
}

function verifyIssueAttachmentExists(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/attachments";
  var description = "Verify IssueAttachment exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("IssueAttachment exists");
          }
        }
      }
      return pvg.fail("Expected IssueAttachment to exist but it does not");
    }
  });
}

function verifyIssueAttachmentDoesNotExist(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/attachments";
  var description = "Verify IssueAttachment does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected IssueAttachment to not exist but it does");
          }
        }
      }
      return pvg.success("IssueAttachment does not exist");
    }
  });
}

function matchAddedIssueAttachment(issueIdOrKey) {
  var expectedDesc = "Add attachment to issue " + issueIdOrKey;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ attachment\ to\ issue\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ attachment\ to\ issue\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueAttachmentAddedEvent(keyVal) {
  return bp.EventSet("AddIssueAttachment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyIssueAttachmentAdded() {
  return bp.EventSet("matchAnyIssueAttachmentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create issue attachment") > -1;
  });
}

function waitForIssueAttachmentAdded(issueIdOrKey) {
  var expectedDesc = "Add attachment to issue " + issueIdOrKey;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: issue bulk operation ----

function submitBulkEdit(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var url = "/rest/api/3/bulk/issues/fields";
  var description = "Bulk edit issues with keys " + selectedIssueIdsOrKeys;
  var body = {
    "editedFieldsInput": String(editedFieldsInput),
    "selectedActions": String(selectedActions),
    "selectedIssueIdsOrKeys": String(selectedIssueIdsOrKeys),
    "sendBulkNotification": String(sendBulkNotification),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401],
    parameters: {
      description: description,
      , taskId: String(taskId)
      , transitionId: String(transitionId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function submitBulkDelete(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var url = "/rest/api/3/bulk/issues/delete";
  var description = "Bulk delete issues with keys " + selectedIssueIdsOrKeys;
  var body = {
    "selectedIssueIdsOrKeys": String(selectedIssueIdsOrKeys),
    "sendBulkNotification": String(sendBulkNotification),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      , taskId: String(taskId)
      , transitionId: String(transitionId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function submitBulkMove(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var url = "/rest/api/3/bulk/issues/move";
  var description = "Bulk move issues with keys " + selectedIssueIdsOrKeys;
  var body = {
    "selectedIssueIdsOrKeys": String(selectedIssueIdsOrKeys),
    "sendBulkNotification": String(sendBulkNotification),
    "targetToMultipleSourceMapping": "targetToMultipleSourceMapping_dummy",
    "targetToSourcesMapping": targetToSourcesMapping,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401],
    parameters: {
      description: description,
      , taskId: String(taskId)
      , transitionId: String(transitionId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getBulkEditableFields(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var url = "/rest/api/3/bulk/issues/fields";
  var description = "Get bulk editable fields for issues " + issueIdsOrKeys;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function tryToAddExistingIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  getBulkEditableFields(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId);
}

function verifyIssueBulkExists(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var url = "/rest/api/3/bulk/issues/fields";
  var description = "Verify IssueBulk exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdsOrKeys) === String(issueIdsOrKeys)) {
            return pvg.success("IssueBulk exists");
          }
        }
      }
      return pvg.fail("Expected IssueBulk to exist but it does not");
    }
  });
}

function verifyIssueBulkDoesNotExist(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var url = "/rest/api/3/bulk/issues/fields";
  var description = "Verify IssueBulk does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdsOrKeys) === String(issueIdsOrKeys)) {
            return pvg.fail("Expected IssueBulk to not exist but it does");
          }
        }
      }
      return pvg.success("IssueBulk does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var url = "/rest/api/3/bulk/issues/delete";
  var description = "Verify we cannot delete non-existing IssueBulk";
  svc.delete(url, {
    expectedResponseCodes: [],
    parameters: { description: description }
  });
}

function matchAddedIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var expectedDesc = "Bulk edit issues with keys " + selectedIssueIdsOrKeys;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueBulkAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Bulk\ edit\ issues\ with\ keys\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Bulk\ edit\ issues\ with\ keys\ (.+)$/);
  var captures = m.slice(1);
  var names = ["selectedIssueIdsOrKeys"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueBulkAddedEvent(keyVal) {
  return bp.EventSet("AddIssueBulk:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyIssueBulkAdded() {
  return bp.EventSet("matchAnyIssueBulkAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create issue bulk operation") > -1;
  });
}

function waitForIssueBulkAdded(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var expectedDesc = "Bulk edit issues with keys " + selectedIssueIdsOrKeys;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueBulk(editedFieldsInput, issueIdsOrKeys, selectedActions, selectedIssueIdsOrKeys, sendBulkNotification, taskId, transitionId) {
  var expectedDesc = "Bulk delete issues with keys " + selectedIssueIdsOrKeys;
  return bp.EventSet("matchDeletedIssueBulk", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueBulkDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Bulk\ delete\ issues\ with\ keys\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Bulk\ delete\ issues\ with\ keys\ (.+)$/);
  var captures = m.slice(1);
  var names = ["selectedIssueIdsOrKeys"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue type scheme ----

function createIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescheme";
  var description = "Create issue type scheme " + name + " with defaultIssueTypeId " + defaultIssueTypeId;
  var body = {
    "defaultIssueTypeId": String(defaultIssueTypeId),
    "description": String(description),
    "issueTypeIds": String(issueTypeIds),
    "issueTypeSchemeId": String(issueTypeSchemeId),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 409],
    parameters: {
      description: description,
      issueTypeSchemeId: String(issueTypeSchemeId)
      , defaultIssueTypeId: String(defaultIssueTypeId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeSchemeId: String(issueTypeSchemeId) }) });
}

function deleteIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId;
  var description = "Delete issue type scheme with id " + issueTypeSchemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function updateIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId;
  var description = "Update issue type scheme " + name + " with id " + issueTypeSchemeId;
  var body = {
    "defaultIssueTypeId": String(defaultIssueTypeId),
    "description": String(description),
    "issueTypeSchemeId": String(issueTypeSchemeId),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      issueTypeSchemeId: String(issueTypeSchemeId)
      , defaultIssueTypeId: String(defaultIssueTypeId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeSchemeId: String(issueTypeSchemeId) }) });
}

function getAllIssueTypeSchemes(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescheme";
  var description = "Get all issue type schemes";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function tryToAddExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  getAllIssueTypeSchemes(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt);
}

function verifyIssueTypeSchemeExists(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescheme";
  var description = "Verify IssueTypeScheme with issueTypeSchemeId " + issueTypeSchemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeSchemeId) === String(issueTypeSchemeId)) {
            return pvg.success("IssueTypeScheme exists");
          }
        }
      }
      return pvg.fail("Expected IssueTypeScheme to exist but it does not");
    }
  });
}

function verifyIssueTypeSchemeDoesNotExist(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescheme";
  var description = "Verify IssueTypeScheme with issueTypeSchemeId " + issueTypeSchemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeSchemeId) === String(issueTypeSchemeId)) {
            return pvg.fail("Expected IssueTypeScheme to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTypeScheme does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId;
  var description = "Verify we cannot delete non-existing IssueTypeScheme";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var expectedDesc = "Create issue type scheme " + name + " with defaultIssueTypeId " + defaultIssueTypeId;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueTypeSchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ issue\ type\ scheme\ (.+)\ with\ defaultIssueTypeId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ issue\ type\ scheme\ (.+)\ with\ defaultIssueTypeId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "defaultIssueTypeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueTypeSchemeAddedEvent(keyVal) {
  return bp.EventSet("AddIssueTypeScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.issueTypeSchemeId) === String(keyVal);
  });
}

function matchAnyIssueTypeSchemeAdded() {
  return bp.EventSet("matchAnyIssueTypeSchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.issueTypeSchemeId !== undefined && e.name.indexOf("Create issue type scheme") > -1;
  });
}

function waitForIssueTypeSchemeAdded(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var expectedDesc = "Create issue type scheme " + name + " with defaultIssueTypeId " + defaultIssueTypeId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueTypeScheme(defaultIssueTypeId, description, expand, id, issueTypeIds, issueTypeSchemeId, maxResults, name, orderBy, queryString, startAt) {
  var expectedDesc = "Delete issue type scheme with id " + issueTypeSchemeId;
  return bp.EventSet("matchDeletedIssueTypeScheme", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueTypeSchemeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ type\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ type\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueTypeSchemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue type scheme project association ----

function assignIssueTypeSchemeToProject(maxResults, projectId, startAt) {
  var url = "/rest/api/3/issuetypescheme/project";
  var description = "Assign issue type scheme {issueTypeSchemeId} to project " + projectId;
  var body = {
    "issueTypeSchemeId": "issueTypeSchemeId_dummy",
    "projectId": String(projectId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getIssueTypeSchemeForProjects(maxResults, projectId, startAt) {
  var url = "/rest/api/3/issuetypescheme/project";
  var description = "Get issue type schemes for projects with project IDs " + projectId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function verifyIssueTypeSchemeProjectAssociationExists(maxResults, projectId, startAt) {
  var url = "/rest/api/3/issuetypescheme/project";
  var description = "Verify IssueTypeSchemeProjectAssociation exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectId) === String(projectId)) {
            return pvg.success("IssueTypeSchemeProjectAssociation exists");
          }
        }
      }
      return pvg.fail("Expected IssueTypeSchemeProjectAssociation to exist but it does not");
    }
  });
}

function verifyIssueTypeSchemeProjectAssociationDoesNotExist(maxResults, projectId, startAt) {
  var url = "/rest/api/3/issuetypescheme/project";
  var description = "Verify IssueTypeSchemeProjectAssociation does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectId) === String(projectId)) {
            return pvg.fail("Expected IssueTypeSchemeProjectAssociation to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTypeSchemeProjectAssociation does not exist");
    }
  });
}

// ---- Entity: issue type scheme mapping ----

function getIssueTypeSchemesMapping(issueTypeSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescheme/mapping";
  var description = "Get issue type scheme items for issue type scheme IDs " + issueTypeSchemeId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403]
  });
}

function verifyIssueTypeSchemeMappingExists(issueTypeSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescheme/mapping";
  var description = "Verify IssueTypeSchemeMapping exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeSchemeId) === String(issueTypeSchemeId)) {
            return pvg.success("IssueTypeSchemeMapping exists");
          }
        }
      }
      return pvg.fail("Expected IssueTypeSchemeMapping to exist but it does not");
    }
  });
}

function verifyIssueTypeSchemeMappingDoesNotExist(issueTypeSchemeId, maxResults, startAt) {
  var url = "/rest/api/3/issuetypescheme/mapping";
  var description = "Verify IssueTypeSchemeMapping does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeSchemeId) === String(issueTypeSchemeId)) {
            return pvg.fail("Expected IssueTypeSchemeMapping to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTypeSchemeMapping does not exist");
    }
  });
}

// ---- Entity: issue type in issue type scheme ----

function addIssueTypesToIssueTypeScheme(issueTypeId, issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype";
  var description = "Add issue types {issueTypeIds} to issue type scheme " + issueTypeSchemeId;
  var body = {
    "contextId": "contextId_" + issueTypeSchemeId,
    "fieldId": "fieldId_" + issueTypeSchemeId,
    "issueTypeIds": [],
    "issueTypeSchemeId": String(issueTypeSchemeId),
    "issueTypeScreenSchemeId": "issueTypeScreenSchemeId_" + issueTypeSchemeId,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      issueTypeSchemeId: String(issueTypeSchemeId)
      , issueTypeId: String(issueTypeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeSchemeId: String(issueTypeSchemeId) }) });
}

function removeIssueTypeFromIssueTypeScheme(issueTypeId, issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype/" + issueTypeId;
  var description = "Remove issue type " + issueTypeId + " from issue type scheme " + issueTypeSchemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function reorderIssueTypesInIssueTypeScheme(issueTypeId, issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype/move";
  var description = "Change order of issue types in issue type scheme " + issueTypeSchemeId + " after {after}";
  var body = {
    "after": "after_" + issueTypeSchemeId,
    "issueTypeIds": [],
    "issueTypeSchemeId": String(issueTypeSchemeId),
    "position": "position_" + issueTypeSchemeId,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      issueTypeSchemeId: String(issueTypeSchemeId)
      , issueTypeId: String(issueTypeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueTypeSchemeId: String(issueTypeSchemeId) }) });
}

function tryToAddExistingIssueTypeInScheme(issueTypeId, issueTypeSchemeId) {
  reorderIssueTypesInIssueTypeScheme(issueTypeId, issueTypeSchemeId);
}

function verifyIssueTypeInSchemeExists(issueTypeId, issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype";
  var description = "Verify IssueTypeInScheme with issueTypeSchemeId " + issueTypeSchemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeSchemeId) === String(issueTypeSchemeId)) {
            return pvg.success("IssueTypeInScheme exists");
          }
        }
      }
      return pvg.fail("Expected IssueTypeInScheme to exist but it does not");
    }
  });
}

function verifyIssueTypeInSchemeDoesNotExist(issueTypeId, issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype";
  var description = "Verify IssueTypeInScheme with issueTypeSchemeId " + issueTypeSchemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueTypeSchemeId) === String(issueTypeSchemeId)) {
            return pvg.fail("Expected IssueTypeInScheme to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTypeInScheme does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueTypeInScheme(issueTypeId, issueTypeSchemeId) {
  var url = "/rest/api/3/issuetypescheme/" + issueTypeSchemeId + "/issuetype/" + issueTypeId;
  var description = "Verify we cannot delete non-existing IssueTypeInScheme";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueTypeInScheme(issueTypeId, issueTypeSchemeId) {
  var expectedDesc = "Add issue types {issueTypeIds} to issue type scheme " + issueTypeSchemeId;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueTypeInSchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ issue\ types\ (.+)\ to\ issue\ type\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ issue\ types\ (.+)\ to\ issue\ type\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueTypeIds", "issueTypeSchemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueTypeInSchemeAddedEvent(keyVal) {
  return bp.EventSet("AddIssueTypeInScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.issueTypeSchemeId) === String(keyVal);
  });
}

function matchAnyIssueTypeInSchemeAdded() {
  return bp.EventSet("matchAnyIssueTypeInSchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.issueTypeSchemeId !== undefined && e.name.indexOf("Create issue type in issue type scheme") > -1;
  });
}

function waitForIssueTypeInSchemeAdded(issueTypeId, issueTypeSchemeId) {
  var expectedDesc = "Add issue types {issueTypeIds} to issue type scheme " + issueTypeSchemeId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueTypeInScheme(issueTypeId, issueTypeSchemeId) {
  var expectedDesc = "Remove issue type " + issueTypeId + " from issue type scheme " + issueTypeSchemeId;
  return bp.EventSet("matchDeletedIssueTypeInScheme", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueTypeInSchemeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ issue\ type\ (.+)\ from\ issue\ type\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ issue\ type\ (.+)\ from\ issue\ type\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueTypeId", "issueTypeSchemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: avatar ----

function storeAvatar(entityId, id, owningObjectId, size, type, x, y) {
  var url = "/rest/api/3/universal_avatar/type/" + type + "/owner/" + entityId;
  var description = "Load avatar for " + type + " with entityId " + entityId + " and crop size " + size;
  var body = {
    "entityId": String(entityId),
    "size": String(size),
    "type": String(type),
    "x": String(x),
    "y": String(y),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 404],
    parameters: {
      description: description,
      type: String(type)
      , entityId: String(entityId)
      , id: String(id)
      , owningObjectId: String(owningObjectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { type: String(type) }) });
}

function deleteAvatar(entityId, id, owningObjectId, size, type, x, y) {
  var url = "/rest/api/3/universal_avatar/type/" + type + "/owner/" + owningObjectId + "/avatar/" + id;
  var description = "Delete avatar " + id + " for " + type + " with owningObjectId " + owningObjectId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 403, 404]
  });
}

function getAvatars(entityId, id, owningObjectId, size, type, x, y) {
  var url = "/rest/api/3/universal_avatar/type/" + type + "/owner/" + entityId;
  var description = "Get avatars for " + type + " with entityId " + entityId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingAvatar(entityId, id, owningObjectId, size, type, x, y) {
  getAvatars(entityId, id, owningObjectId, size, type, x, y);
}

function verifyAvatarExists(entityId, id, owningObjectId, size, type, x, y) {
  var url = "/rest/api/3/universal_avatar/type/" + type + "/owner/" + entityId;
  var description = "Verify Avatar with type " + type + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].type) === String(type)) {
            return pvg.success("Avatar exists");
          }
        }
      }
      return pvg.fail("Expected Avatar to exist but it does not");
    }
  });
}

function verifyAvatarDoesNotExist(entityId, id, owningObjectId, size, type, x, y) {
  var url = "/rest/api/3/universal_avatar/type/" + type + "/owner/" + entityId;
  var description = "Verify Avatar with type " + type + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].type) === String(type)) {
            return pvg.fail("Expected Avatar to not exist but it does");
          }
        }
      }
      return pvg.success("Avatar does not exist");
    }
  });
}

function tryToDeleteANonExistingAvatar(entityId, id, owningObjectId, size, type, x, y) {
  var url = "/rest/api/3/universal_avatar/type/" + type + "/owner/" + owningObjectId + "/avatar/" + id;
  var description = "Verify we cannot delete non-existing Avatar";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedAvatar(entityId, id, owningObjectId, size, type, x, y) {
  var expectedDesc = "Load avatar for " + type + " with entityId " + entityId + " and crop size " + size;
  return matchSuccess(expectedDesc);
}

function waitForAnyAvatarAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Load\ avatar\ for\ (.+)\ with\ entityId\ (.+)\ and\ crop\ size\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Load\ avatar\ for\ (.+)\ with\ entityId\ (.+)\ and\ crop\ size\ (.+)$/);
  var captures = m.slice(1);
  var names = ["type", "entityId", "size"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAvatarAddedEvent(keyVal) {
  return bp.EventSet("AddAvatar:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.type) === String(keyVal);
  });
}

function matchAnyAvatarAdded() {
  return bp.EventSet("matchAnyAvatarAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.type !== undefined && e.name.indexOf("Create avatar") > -1;
  });
}

function waitForAvatarAdded(entityId, id, owningObjectId, size, type, x, y) {
  var expectedDesc = "Load avatar for " + type + " with entityId " + entityId + " and crop size " + size;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAvatar(entityId, id, owningObjectId, size, type, x, y) {
  var expectedDesc = "Delete avatar " + id + " for " + type + " with owningObjectId " + owningObjectId;
  return bp.EventSet("matchDeletedAvatar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAvatarDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ avatar\ (.+)\ for\ (.+)\ with\ owningObjectId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ avatar\ (.+)\ for\ (.+)\ with\ owningObjectId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "type", "owningObjectId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: system avatar ----

function getAllSystemAvatars(type) {
  var url = "/rest/api/3/avatar/" + type + "/system";
  var description = "Get system avatars by type " + type;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 500]
  });
}

function verifySystemAvatarExists(type) {
  var url = "/rest/api/3/avatar";
  var description = "Verify SystemAvatar with type " + type + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].type) === String(type)) {
            return pvg.success("SystemAvatar exists");
          }
        }
      }
      return pvg.fail("Expected SystemAvatar to exist but it does not");
    }
  });
}

function verifySystemAvatarDoesNotExist(type) {
  var url = "/rest/api/3/avatar";
  var description = "Verify SystemAvatar with type " + type + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].type) === String(type)) {
            return pvg.fail("Expected SystemAvatar to not exist but it does");
          }
        }
      }
      return pvg.success("SystemAvatar does not exist");
    }
  });
}

// ---- Entity: avatar image ----

function getAvatarImageByType(entityId, format, id, size, type) {
  var url = "/rest/api/3/universal_avatar/view/type/" + type;
  var description = "Get avatar image by type " + type + " with size " + size + " and format " + format;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function getAvatarImageByID(entityId, format, id, size, type) {
  var url = "/rest/api/3/universal_avatar/view/type/" + type + "/avatar/" + id;
  var description = "Get avatar image by ID " + id + " for type " + type + " with size " + size + " and format " + format;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function getAvatarImageByOwner(entityId, format, id, size, type) {
  var url = "/rest/api/3/universal_avatar/view/type/" + type + "/owner/" + entityId;
  var description = "Get avatar image by owner " + entityId + " for type " + type + " with size " + size + " and format " + format;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

// ---- Entity: worklog ----

function addWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog";
  var description = "Add worklog to issue " + issueIdOrKey + " with started " + started + " and timeSpentSeconds " + timeSpentSeconds;
  var body = {
    "author": String(author),
    "comment": String(comment),
    "created": String(created),
    "id": String(id),
    "issueId": String(issueId),
    "issueIdOrKey": String(issueIdOrKey),
    "properties": String(properties),
    "self": String(self),
    "started": String(started),
    "timeSpent": String(timeSpent),
    "timeSpentSeconds": String(timeSpentSeconds),
    "updateAuthor": String(updateAuthor),
    "updated": String(updated),
    "visibility": String(visibility),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 404, 413],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
      , issueId: String(issueId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function deleteWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/" + id;
  var description = "Delete worklog " + id + " from issue " + issueIdOrKey;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 404]
  });
}

function updateWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/" + id;
  var description = "Update worklog " + id + " on issue " + issueIdOrKey + " with started " + started + " and timeSpentSeconds " + timeSpentSeconds;
  var body = {
    "author": String(author),
    "comment": String(comment),
    "created": String(created),
    "id": String(id),
    "issueId": String(issueId),
    "issueIdOrKey": String(issueIdOrKey),
    "properties": String(properties),
    "self": String(self),
    "started": String(started),
    "timeSpent": String(timeSpent),
    "timeSpentSeconds": String(timeSpentSeconds),
    "updateAuthor": String(updateAuthor),
    "updated": String(updated),
    "visibility": String(visibility),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 404],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
      , issueId: String(issueId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function getWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/" + id;
  var description = "Get worklog " + id + " from issue " + issueIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function bulkDeleteWorklogs(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog";
  var description = "Bulk delete worklogs {ids} from issue " + issueIdOrKey;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204, 400, 401, 404]
  });
}

function bulkMoveWorklogs(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/move";
  var description = "Bulk move worklogs {ids} from issue " + issueIdOrKey + " to issue {destinationIssueIdOrKey}";
  var body = {
    "ids": [],
    "issueIdOrKey": String(issueIdOrKey),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 204, 400, 401, 404],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
      , issueId: String(issueId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function getWorklogsForIds(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/worklog/list";
  var description = "Get worklogs for IDs {ids}";
  var body = {
    "ids": [],
    "issueIdOrKey": String(issueIdOrKey),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , id: String(id)
      , issueId: String(issueId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function getIdsOfWorklogsDeletedSince(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/worklog/deleted";
  var description = "Get IDs of worklogs deleted since " + since;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function getIdsOfWorklogsModifiedSince(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/worklog/updated";
  var description = "Get IDs of worklogs updated since " + since;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function getIssueWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog";
  var description = "Get worklogs for issue " + issueIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  getIssueWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility);
}

function verifyWorklogExists(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog";
  var description = "Verify Worklog with issueIdOrKey " + issueIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("Worklog exists");
          }
        }
      }
      return pvg.fail("Expected Worklog to exist but it does not");
    }
  });
}

function verifyWorklogDoesNotExist(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog";
  var description = "Verify Worklog with issueIdOrKey " + issueIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected Worklog to not exist but it does");
          }
        }
      }
      return pvg.success("Worklog does not exist");
    }
  });
}

function tryToDeleteANonExistingWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/worklog/" + id;
  var description = "Verify we cannot delete non-existing Worklog";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var expectedDesc = "Add worklog to issue " + issueIdOrKey + " with started " + started + " and timeSpentSeconds " + timeSpentSeconds;
  return matchSuccess(expectedDesc);
}

function waitForAnyWorklogAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ worklog\ to\ issue\ (.+)\ with\ started\ (.+)\ and\ timeSpentSeconds\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ worklog\ to\ issue\ (.+)\ with\ started\ (.+)\ and\ timeSpentSeconds\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueIdOrKey", "started", "timeSpentSeconds"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWorklogAddedEvent(keyVal) {
  return bp.EventSet("AddWorklog:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.issueIdOrKey) === String(keyVal);
  });
}

function matchAnyWorklogAdded() {
  return bp.EventSet("matchAnyWorklogAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.issueIdOrKey !== undefined && e.name.indexOf("Create worklog") > -1;
  });
}

function waitForWorklogAdded(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var expectedDesc = "Add worklog to issue " + issueIdOrKey + " with started " + started + " and timeSpentSeconds " + timeSpentSeconds;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedWorklog(author, comment, created, id, issueId, issueIdOrKey, properties, self, since, started, timeSpent, timeSpentSeconds, updateAuthor, updated, visibility) {
  var expectedDesc = "Delete worklog " + id + " from issue " + issueIdOrKey;
  return bp.EventSet("matchDeletedWorklog", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorklogDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ worklog\ (.+)\ from\ issue\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ worklog\ (.+)\ from\ issue\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "issueIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: notification scheme ----

function createNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme";
  var description = "Create notification scheme " + name + " with id " + id;
  var body = {
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "notificationSchemeEvents": String(notificationSchemeEvents),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      id: String(id)
      , notificationSchemeId: String(notificationSchemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme/" + notificationSchemeId;
  var description = "Delete notification scheme with id " + notificationSchemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function updateNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme/" + id;
  var description = "Update notification scheme " + id + " with name " + name;
  var body = {
    "description": String(description),
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , notificationSchemeId: String(notificationSchemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme/" + id;
  var description = "Get notification scheme with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 404]
  });
}

function tryToAddExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  getNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId);
}

function verifyNotificationSchemeExists(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme";
  var description = "Verify NotificationScheme with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("NotificationScheme exists");
          }
        }
      }
      return pvg.fail("Expected NotificationScheme to exist but it does not");
    }
  });
}

function verifyNotificationSchemeDoesNotExist(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme";
  var description = "Verify NotificationScheme with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected NotificationScheme to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationScheme does not exist");
    }
  });
}

function tryToDeleteANonExistingNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme/" + notificationSchemeId;
  var description = "Verify we cannot delete non-existing NotificationScheme";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var expectedDesc = "Create notification scheme " + name + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyNotificationSchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ notification\ scheme\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ notification\ scheme\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getNotificationSchemeAddedEvent(keyVal) {
  return bp.EventSet("AddNotificationScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyNotificationSchemeAdded() {
  return bp.EventSet("matchAnyNotificationSchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create notification scheme") > -1;
  });
}

function waitForNotificationSchemeAdded(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var expectedDesc = "Create notification scheme " + name + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedNotificationScheme(description, id, name, notificationSchemeEvents, notificationSchemeId) {
  var expectedDesc = "Delete notification scheme with id " + notificationSchemeId;
  return bp.EventSet("matchDeletedNotificationScheme", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyNotificationSchemeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ notification\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ notification\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["notificationSchemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: notification ----

function removeNotificationFromNotificationScheme(notificationId, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme/" + notificationSchemeId + "/notification/" + notificationId;
  var description = "Remove notification " + notificationId + " from notification scheme " + notificationSchemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function tryToDeleteANonExistingNotification(notificationId, notificationSchemeId) {
  var url = "/rest/api/3/notificationscheme/" + notificationSchemeId + "/notification/" + notificationId;
  var description = "Verify we cannot delete non-existing Notification";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedNotification(notificationId, notificationSchemeId) {
  var expectedDesc = "Remove notification " + notificationId + " from notification scheme " + notificationSchemeId;
  return bp.EventSet("matchDeletedNotification", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyNotificationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ notification\ (.+)\ from\ notification\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ notification\ (.+)\ from\ notification\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["notificationId", "notificationSchemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: notification scheme notifications ----

function addNotifications(id) {
  var url = "/rest/api/3/notificationscheme/" + id + "/notification";
  var description = "Add notifications to notification scheme " + id;
  var body = {
    "id": String(id),
    "notificationSchemeEvents": [],
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

// ---- Entity: priority scheme ----

function createPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Create priority scheme " + name + " with id " + schemeId;
  var body = {
    "defaultPriorityId": String(defaultPriorityId),
    "description": String(description),
    "mappings": String(mappings),
    "name": String(name),
    "priorityIds": String(priorityIds),
    "projectIds": String(projectIds),
    "schemeId": String(schemeId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 202, 400, 401, 403, 409],
    parameters: {
      description: description,
      schemeId: String(schemeId)
      , defaultPriorityId: String(defaultPriorityId)
      , priorityId: String(priorityId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { schemeId: String(schemeId) }) });
}

function deletePriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var url = "/rest/api/3/priorityscheme/" + schemeId;
  var description = "Delete priority scheme with id " + schemeId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403]
  });
}

function updatePriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var url = "/rest/api/3/priorityscheme/" + schemeId;
  var description = "Update priority scheme " + name + " with id " + schemeId;
  var body = {
    "defaultPriorityId": String(defaultPriorityId),
    "description": String(description),
    "mappings": String(mappings),
    "name": String(name),
    "priorities": "priorities_" + schemeId,
    "projects": "projects_" + schemeId,
    "schemeId": String(schemeId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 400, 401, 403, 409],
    parameters: {
      description: description,
      schemeId: String(schemeId)
      , defaultPriorityId: String(defaultPriorityId)
      , priorityId: String(priorityId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { schemeId: String(schemeId) }) });
}

function getPrioritySchemes(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Get priority schemes";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function tryToAddExistingPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  getPrioritySchemes(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt);
}

function verifyPrioritySchemeExists(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Verify PriorityScheme with schemeId " + schemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.success("PriorityScheme exists");
          }
        }
      }
      return pvg.fail("Expected PriorityScheme to exist but it does not");
    }
  });
}

function verifyPrioritySchemeDoesNotExist(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Verify PriorityScheme with schemeId " + schemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.fail("Expected PriorityScheme to not exist but it does");
          }
        }
      }
      return pvg.success("PriorityScheme does not exist");
    }
  });
}

function tryToDeleteANonExistingPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var url = "/rest/api/3/priorityscheme/" + schemeId;
  var description = "Verify we cannot delete non-existing PriorityScheme";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403],
    parameters: { description: description }
  });
}

function matchAddedPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var expectedDesc = "Create priority scheme " + name + " with id " + schemeId;
  return matchSuccess(expectedDesc);
}

function waitForAnyPrioritySchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ priority\ scheme\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ priority\ scheme\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "schemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPrioritySchemeAddedEvent(keyVal) {
  return bp.EventSet("AddPriorityScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.schemeId) === String(keyVal);
  });
}

function matchAnyPrioritySchemeAdded() {
  return bp.EventSet("matchAnyPrioritySchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.schemeId !== undefined && e.name.indexOf("Create priority scheme") > -1;
  });
}

function waitForPrioritySchemeAdded(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var expectedDesc = "Create priority scheme " + name + " with id " + schemeId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPriorityScheme(defaultPriorityId, description, expand, mappings, maxResults, name, onlyDefault, orderBy, priorityId, priorityIds, projectIds, schemeId, schemeName, startAt) {
  var expectedDesc = "Delete priority scheme with id " + schemeId;
  return bp.EventSet("matchDeletedPriorityScheme", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPrioritySchemeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ priority\ scheme\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ priority\ scheme\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["schemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: priority scheme mappings ----

function suggestedPrioritiesForMappings(maxResults, priorities, projects, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme/mappings";
  var description = "Suggest priorities for mappings in scheme " + schemeId;
  var body = {
    "maxResults": String(maxResults),
    "priorities": String(priorities),
    "projects": String(projects),
    "schemeId": String(schemeId),
    "startAt": String(startAt),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
      , schemeId: String(schemeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingPrioritySchemeMappings(maxResults, priorities, projects, schemeId, startAt) {
  suggestedPrioritiesForMappings(maxResults, priorities, projects, schemeId, startAt);
}

function verifyPrioritySchemeMappingsExists(maxResults, priorities, projects, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme/mappings";
  var description = "Verify PrioritySchemeMappings exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.success("PrioritySchemeMappings exists");
          }
        }
      }
      return pvg.fail("Expected PrioritySchemeMappings to exist but it does not");
    }
  });
}

function verifyPrioritySchemeMappingsDoesNotExist(maxResults, priorities, projects, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme/mappings";
  var description = "Verify PrioritySchemeMappings does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.fail("Expected PrioritySchemeMappings to not exist but it does");
          }
        }
      }
      return pvg.success("PrioritySchemeMappings does not exist");
    }
  });
}

function matchAddedPrioritySchemeMappings(maxResults, priorities, projects, schemeId, startAt) {
  var expectedDesc = "Suggest priorities for mappings in scheme " + schemeId;
  return matchSuccess(expectedDesc);
}

function waitForAnyPrioritySchemeMappingsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Suggest\ priorities\ for\ mappings\ in\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Suggest\ priorities\ for\ mappings\ in\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["schemeId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPrioritySchemeMappingsAddedEvent(keyVal) {
  return bp.EventSet("AddPrioritySchemeMappings:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPrioritySchemeMappingsAdded() {
  return bp.EventSet("matchAnyPrioritySchemeMappingsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create priority scheme mappings") > -1;
  });
}

function waitForPrioritySchemeMappingsAdded(maxResults, priorities, projects, schemeId, startAt) {
  var expectedDesc = "Suggest priorities for mappings in scheme " + schemeId;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: priority scheme priorities ----

function getPrioritiesByPriorityScheme(maxResults, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme/" + schemeId + "/priorities";
  var description = "Get priorities by priority scheme " + schemeId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function verifyPrioritySchemePrioritiesExists(maxResults, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Verify PrioritySchemePriorities with schemeId " + schemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.success("PrioritySchemePriorities exists");
          }
        }
      }
      return pvg.fail("Expected PrioritySchemePriorities to exist but it does not");
    }
  });
}

function verifyPrioritySchemePrioritiesDoesNotExist(maxResults, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Verify PrioritySchemePriorities with schemeId " + schemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.fail("Expected PrioritySchemePriorities to not exist but it does");
          }
        }
      }
      return pvg.success("PrioritySchemePriorities does not exist");
    }
  });
}

// ---- Entity: priority scheme projects ----

function getProjectsByPriorityScheme(maxResults, projectId, query, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme/" + schemeId + "/projects";
  var description = "Get projects by priority scheme " + schemeId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function verifyPrioritySchemeProjectsExists(maxResults, projectId, query, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Verify PrioritySchemeProjects with schemeId " + schemeId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.success("PrioritySchemeProjects exists");
          }
        }
      }
      return pvg.fail("Expected PrioritySchemeProjects to exist but it does not");
    }
  });
}

function verifyPrioritySchemeProjectsDoesNotExist(maxResults, projectId, query, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme";
  var description = "Verify PrioritySchemeProjects with schemeId " + schemeId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.fail("Expected PrioritySchemeProjects to not exist but it does");
          }
        }
      }
      return pvg.success("PrioritySchemeProjects does not exist");
    }
  });
}

// ---- Entity: available priorities ----

function getAvailablePrioritiesByPriorityScheme(exclude, maxResults, query, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme/priorities/available";
  var description = "Get available priorities by priority scheme " + schemeId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function verifyAvailablePrioritiesExists(exclude, maxResults, query, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme/priorities/available";
  var description = "Verify AvailablePriorities exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.success("AvailablePriorities exists");
          }
        }
      }
      return pvg.fail("Expected AvailablePriorities to exist but it does not");
    }
  });
}

function verifyAvailablePrioritiesDoesNotExist(exclude, maxResults, query, schemeId, startAt) {
  var url = "/rest/api/3/priorityscheme/priorities/available";
  var description = "Verify AvailablePriorities does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].schemeId) === String(schemeId)) {
            return pvg.fail("Expected AvailablePriorities to not exist but it does");
          }
        }
      }
      return pvg.success("AvailablePriorities does not exist");
    }
  });
}

// ---- Entity: status ----

function createStatuses(id, name, scope, statuses) {
  var url = "/rest/api/3/statuses";
  var description = "Create statuses with names " + name;
  var body = {
    "scope": String(scope),
    "statuses": String(statuses),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 409],
    parameters: {
      description: description,
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function deleteStatusesById(id, name, scope, statuses) {
  var url = "/rest/api/3/statuses";
  var description = "Bulk delete statuses with ids " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401]
  });
}

function updateStatuses(id, name, scope, statuses) {
  var url = "/rest/api/3/statuses";
  var description = "Bulk update statuses with ids " + id + " and names " + name;
  var body = {
    "statuses": String(statuses),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 409],
    parameters: {
      description: description,
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getStatusesById(id, name, scope, statuses) {
  var url = "/rest/api/3/statuses";
  var description = "Bulk get statuses with ids " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function tryToAddExistingStatus(id, name, scope, statuses) {
  getStatusesById(id, name, scope, statuses);
}

function verifyStatusExists(id, name, scope, statuses) {
  var url = "/rest/api/3/statuses";
  var description = "Verify Status exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Status exists");
          }
        }
      }
      return pvg.fail("Expected Status to exist but it does not");
    }
  });
}

function verifyStatusDoesNotExist(id, name, scope, statuses) {
  var url = "/rest/api/3/statuses";
  var description = "Verify Status does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Status to not exist but it does");
          }
        }
      }
      return pvg.success("Status does not exist");
    }
  });
}

function tryToDeleteANonExistingStatus(id, name, scope, statuses) {
  var url = "/rest/api/3/statuses";
  var description = "Verify we cannot delete non-existing Status";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401],
    parameters: { description: description }
  });
}

function matchAddedStatus(id, name, scope, statuses) {
  var expectedDesc = "Create statuses with names " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyStatusAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ statuses\ with\ names\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ statuses\ with\ names\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getStatusAddedEvent(keyVal) {
  return bp.EventSet("AddStatus:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyStatusAdded() {
  return bp.EventSet("matchAnyStatusAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create status") > -1;
  });
}

function waitForStatusAdded(id, name, scope, statuses) {
  var expectedDesc = "Create statuses with names " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedStatus(id, name, scope, statuses) {
  var expectedDesc = "Bulk delete statuses with ids " + id;
  return bp.EventSet("matchDeletedStatus", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyStatusDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Bulk\ delete\ statuses\ with\ ids\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Bulk\ delete\ statuses\ with\ ids\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: workflow scheme draft ----

function createWorkflowSchemeDraftFromParent(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/createdraft";
  var description = "Create draft workflow scheme from workflow scheme " + id;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteWorkflowSchemeDraft(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft";
  var description = "Delete draft workflow scheme from workflow scheme " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 401, 403, 404]
  });
}

function getWorkflowSchemeDraft(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft";
  var description = "Get draft workflow scheme from workflow scheme " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function updateWorkflowSchemeDraft(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft";
  var description = "Update draft workflow scheme " + id + " with name {name}";
  var body = {
    "defaultWorkflow": "defaultWorkflow_" + id,
    "description": "description_" + id,
    "draft": String(true),
    "id": String(id),
    "issueTypeMappings": issueTypeMappings,
    "issueTypes": issueTypes,
    "lastModified": "lastModified_" + id,
    "lastModifiedUser": "lastModifiedUser_" + id,
    "name": "name_" + id,
    "originalDefaultWorkflow": "originalDefaultWorkflow_" + id,
    "originalIssueTypeMappings": originalIssueTypeMappings,
    "self": "self_" + id,
    "updateDraftIfNeeded": String(true),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function tryToAddExistingWorkflowSchemeDraft(id) {
  updateWorkflowSchemeDraft(id);
}

function verifyWorkflowSchemeDraftExists(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/createdraft";
  var description = "Verify WorkflowSchemeDraft with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("WorkflowSchemeDraft exists");
          }
        }
      }
      return pvg.fail("Expected WorkflowSchemeDraft to exist but it does not");
    }
  });
}

function verifyWorkflowSchemeDraftDoesNotExist(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/createdraft";
  var description = "Verify WorkflowSchemeDraft with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected WorkflowSchemeDraft to not exist but it does");
          }
        }
      }
      return pvg.success("WorkflowSchemeDraft does not exist");
    }
  });
}

function tryToDeleteANonExistingWorkflowSchemeDraft(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft";
  var description = "Verify we cannot delete non-existing WorkflowSchemeDraft";
  svc.delete(url, {
    expectedResponseCodes: [204, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedWorkflowSchemeDraft(id) {
  var expectedDesc = "Create draft workflow scheme from workflow scheme " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyWorkflowSchemeDraftAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ draft\ workflow\ scheme\ from\ workflow\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ draft\ workflow\ scheme\ from\ workflow\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWorkflowSchemeDraftAddedEvent(keyVal) {
  return bp.EventSet("AddWorkflowSchemeDraft:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyWorkflowSchemeDraftAdded() {
  return bp.EventSet("matchAnyWorkflowSchemeDraftAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create workflow scheme draft") > -1;
  });
}

function waitForWorkflowSchemeDraftAdded(id) {
  var expectedDesc = "Create draft workflow scheme from workflow scheme " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedWorkflowSchemeDraft(id) {
  var expectedDesc = "Delete draft workflow scheme from workflow scheme " + id;
  return bp.EventSet("matchDeletedWorkflowSchemeDraft", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorkflowSchemeDraftDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ draft\ workflow\ scheme\ from\ workflow\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ draft\ workflow\ scheme\ from\ workflow\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: draft default workflow ----

function deleteDraftDefaultWorkflow(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/default";
  var description = "Delete draft default workflow from workflow scheme " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function getDraftDefaultWorkflow(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/default";
  var description = "Get draft default workflow from workflow scheme " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function updateDraftDefaultWorkflow(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/default";
  var description = "Update draft default workflow {workflow} in workflow scheme " + id;
  var body = {
    "id": String(id),
    "updateDraftIfNeeded": String(true),
    "workflow": "workflow_" + id,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function verifyDraftDefaultWorkflowExists(id) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify DraftDefaultWorkflow with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("DraftDefaultWorkflow exists");
          }
        }
      }
      return pvg.fail("Expected DraftDefaultWorkflow to exist but it does not");
    }
  });
}

function verifyDraftDefaultWorkflowDoesNotExist(id) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify DraftDefaultWorkflow with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected DraftDefaultWorkflow to not exist but it does");
          }
        }
      }
      return pvg.success("DraftDefaultWorkflow does not exist");
    }
  });
}

function tryToDeleteANonExistingDraftDefaultWorkflow(id) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/default";
  var description = "Verify we cannot delete non-existing DraftDefaultWorkflow";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedDraftDefaultWorkflow(id) {
  var expectedDesc = "Delete draft default workflow from workflow scheme " + id;
  return bp.EventSet("matchDeletedDraftDefaultWorkflow", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDraftDefaultWorkflowDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ draft\ default\ workflow\ from\ workflow\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ draft\ default\ workflow\ from\ workflow\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: workflow scheme draft issue type ----

function deleteWorkflowSchemeDraftIssueType(id, issueType) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/issuetype/" + issueType;
  var description = "Delete workflow for issue type " + issueType + " in draft workflow scheme " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function getWorkflowSchemeDraftIssueType(id, issueType) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/issuetype/" + issueType;
  var description = "Get workflow for issue type " + issueType + " in draft workflow scheme " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function setWorkflowSchemeDraftIssueType(id, issueType) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/issuetype/" + issueType;
  var description = "Set workflow {workflow} for issue type " + issueType + " in draft workflow scheme " + id;
  var body = {
    "id": String(id),
    "issueType": String(issueType),
    "updateDraftIfNeeded": String(true),
    "workflow": "workflow_" + id,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , issueType: String(issueType)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function verifyWorkflowSchemeDraftIssueTypeExists(id, issueType) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowSchemeDraftIssueType with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("WorkflowSchemeDraftIssueType exists");
          }
        }
      }
      return pvg.fail("Expected WorkflowSchemeDraftIssueType to exist but it does not");
    }
  });
}

function verifyWorkflowSchemeDraftIssueTypeDoesNotExist(id, issueType) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify WorkflowSchemeDraftIssueType with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected WorkflowSchemeDraftIssueType to not exist but it does");
          }
        }
      }
      return pvg.success("WorkflowSchemeDraftIssueType does not exist");
    }
  });
}

function tryToDeleteANonExistingWorkflowSchemeDraftIssueType(id, issueType) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/issuetype/" + issueType;
  var description = "Verify we cannot delete non-existing WorkflowSchemeDraftIssueType";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedWorkflowSchemeDraftIssueType(id, issueType) {
  var expectedDesc = "Delete workflow for issue type " + issueType + " in draft workflow scheme " + id;
  return bp.EventSet("matchDeletedWorkflowSchemeDraftIssueType", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWorkflowSchemeDraftIssueTypeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ workflow\ for\ issue\ type\ (.+)\ in\ draft\ workflow\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ workflow\ for\ issue\ type\ (.+)\ in\ draft\ workflow\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["issueType", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: publish draft workflow scheme ----

function publishDraftWorkflowScheme(id, statusMappings, validateOnly) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/publish";
  var description = "Publish draft workflow scheme " + id + " with validateOnly " + validateOnly;
  var body = {
    "id": String(id),
    "statusMappings": String(statusMappings),
    "validateOnly": String(validateOnly),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 303, 400, 401, 403, 404],
    parameters: {
      description: description,
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingPublishDraftWorkflowScheme(id, statusMappings, validateOnly) {
  publishDraftWorkflowScheme(id, statusMappings, validateOnly);
}

function verifyPublishDraftWorkflowSchemeExists(id, statusMappings, validateOnly) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/publish";
  var description = "Verify PublishDraftWorkflowScheme exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("PublishDraftWorkflowScheme exists");
          }
        }
      }
      return pvg.fail("Expected PublishDraftWorkflowScheme to exist but it does not");
    }
  });
}

function verifyPublishDraftWorkflowSchemeDoesNotExist(id, statusMappings, validateOnly) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/publish";
  var description = "Verify PublishDraftWorkflowScheme does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected PublishDraftWorkflowScheme to not exist but it does");
          }
        }
      }
      return pvg.success("PublishDraftWorkflowScheme does not exist");
    }
  });
}

function matchAddedPublishDraftWorkflowScheme(id, statusMappings, validateOnly) {
  var expectedDesc = "Publish draft workflow scheme " + id + " with validateOnly " + validateOnly;
  return matchSuccess(expectedDesc);
}

function waitForAnyPublishDraftWorkflowSchemeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Publish\ draft\ workflow\ scheme\ (.+)\ with\ validateOnly\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Publish\ draft\ workflow\ scheme\ (.+)\ with\ validateOnly\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "validateOnly"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPublishDraftWorkflowSchemeAddedEvent(keyVal) {
  return bp.EventSet("AddPublishDraftWorkflowScheme:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPublishDraftWorkflowSchemeAdded() {
  return bp.EventSet("matchAnyPublishDraftWorkflowSchemeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create publish draft workflow scheme") > -1;
  });
}

function waitForPublishDraftWorkflowSchemeAdded(id, statusMappings, validateOnly) {
  var expectedDesc = "Publish draft workflow scheme " + id + " with validateOnly " + validateOnly;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: draft workflow mapping ----

function deleteDraftWorkflowMapping(id, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/workflow";
  var description = "Delete issue types for workflow " + workflowName + " in draft workflow scheme " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function getDraftWorkflow(id, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/workflow";
  var description = "Get issue types for workflow " + workflowName + " in draft workflow scheme " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function updateDraftWorkflowMapping(id, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/workflow";
  var description = "Set issue types for workflow {workflow} in draft workflow scheme " + id;
  var body = {
    "defaultMapping": String(true),
    "id": String(id),
    "issueTypes": [],
    "updateDraftIfNeeded": String(true),
    "workflow": "workflow_" + id,
    "workflowName": String(workflowName),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function verifyDraftWorkflowMappingExists(id, workflowName) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify DraftWorkflowMapping with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("DraftWorkflowMapping exists");
          }
        }
      }
      return pvg.fail("Expected DraftWorkflowMapping to exist but it does not");
    }
  });
}

function verifyDraftWorkflowMappingDoesNotExist(id, workflowName) {
  var url = "/rest/api/3/workflowscheme";
  var description = "Verify DraftWorkflowMapping with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected DraftWorkflowMapping to not exist but it does");
          }
        }
      }
      return pvg.success("DraftWorkflowMapping does not exist");
    }
  });
}

function tryToDeleteANonExistingDraftWorkflowMapping(id, workflowName) {
  var url = "/rest/api/3/workflowscheme/" + id + "/draft/workflow";
  var description = "Verify we cannot delete non-existing DraftWorkflowMapping";
  svc.delete(url, {
    expectedResponseCodes: [200, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedDraftWorkflowMapping(id, workflowName) {
  var expectedDesc = "Delete issue types for workflow " + workflowName + " in draft workflow scheme " + id;
  return bp.EventSet("matchDeletedDraftWorkflowMapping", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDraftWorkflowMappingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ types\ for\ workflow\ (.+)\ in\ draft\ workflow\ scheme\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ types\ for\ workflow\ (.+)\ in\ draft\ workflow\ scheme\ (.+)$/);
  var captures = m.slice(1);
  var names = ["workflowName", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: component ----

function createComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var url = "/rest/api/3/component";
  var description = "Create component " + name;
  var body = {
    "ari": String(ari),
    "assignee": String(assignee),
    "assigneeType": String(assigneeType),
    "description": String(description),
    "id": String(id),
    "isAssigneeTypeValid": String(isAssigneeTypeValid),
    "lead": String(lead),
    "leadAccountId": String(leadAccountId),
    "leadUserName": String(leadUserName),
    "metadata": metadata,
    "name": String(name),
    "project": String(project),
    "projectId": String(projectId),
    "realAssignee": String(realAssignee),
    "realAssigneeType": String(realAssigneeType),
    "self": String(self),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , leadAccountId: String(leadAccountId)
      , moveIssuesTo: String(moveIssuesTo)
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var url = "/rest/api/3/component/" + id;
  var description = "Delete component " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 401, 403, 404]
  });
}

function updateComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var url = "/rest/api/3/component/" + id;
  var description = "Update component " + id + " with name " + name;
  var body = {
    "ari": String(ari),
    "assignee": String(assignee),
    "assigneeType": String(assigneeType),
    "description": String(description),
    "id": String(id),
    "isAssigneeTypeValid": String(isAssigneeTypeValid),
    "lead": String(lead),
    "leadAccountId": String(leadAccountId),
    "leadUserName": String(leadUserName),
    "metadata": metadata,
    "name": String(name),
    "project": String(project),
    "projectId": String(projectId),
    "realAssignee": String(realAssignee),
    "realAssigneeType": String(realAssigneeType),
    "self": String(self),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , leadAccountId: String(leadAccountId)
      , moveIssuesTo: String(moveIssuesTo)
      , projectId: String(projectId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var url = "/rest/api/3/component/" + id;
  var description = "Get component " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  getComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self);
}

function verifyComponentExists(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var url = "/rest/api/3/component";
  var description = "Verify Component with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Component exists");
          }
        }
      }
      return pvg.fail("Expected Component to exist but it does not");
    }
  });
}

function verifyComponentDoesNotExist(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var url = "/rest/api/3/component";
  var description = "Verify Component with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Component to not exist but it does");
          }
        }
      }
      return pvg.success("Component does not exist");
    }
  });
}

function tryToDeleteANonExistingComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var url = "/rest/api/3/component/" + id;
  var description = "Verify we cannot delete non-existing Component";
  svc.delete(url, {
    expectedResponseCodes: [204, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var expectedDesc = "Create component " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyComponentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ component\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ component\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getComponentAddedEvent(keyVal) {
  return bp.EventSet("AddComponent:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyComponentAdded() {
  return bp.EventSet("matchAnyComponentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create component") > -1;
  });
}

function waitForComponentAdded(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var expectedDesc = "Create component " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedComponent(ari, assignee, assigneeType, description, id, isAssigneeTypeValid, lead, leadAccountId, leadUserName, metadata, moveIssuesTo, name, project, projectId, realAssignee, realAssigneeType, self) {
  var expectedDesc = "Delete component " + id;
  return bp.EventSet("matchDeletedComponent", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyComponentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ component\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ component\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: custom field option ----

function getCustomFieldOption(id) {
  var url = "/rest/api/3/customFieldOption/" + id;
  var description = "Get custom field option with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function verifyCustomFieldOptionExists(id) {
  var url = "/rest/api/3/customFieldOption";
  var description = "Verify CustomFieldOption with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("CustomFieldOption exists");
          }
        }
      }
      return pvg.fail("Expected CustomFieldOption to exist but it does not");
    }
  });
}

function verifyCustomFieldOptionDoesNotExist(id) {
  var url = "/rest/api/3/customFieldOption";
  var description = "Verify CustomFieldOption with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected CustomFieldOption to not exist but it does");
          }
        }
      }
      return pvg.success("CustomFieldOption does not exist");
    }
  });
}

// ---- Entity: custom field option context ----

function getOptionsForContext(contextId, fieldId, optionId, options) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option";
  var description = "Get custom field options for field " + fieldId + " and context " + contextId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function createCustomFieldOption(contextId, fieldId, optionId, options) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option";
  var description = "Create custom field options for field " + fieldId + " and context " + contextId;
  var body = {
    "contextId": String(contextId),
    "fieldId": String(fieldId),
    "options": String(options),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
      , optionId: String(optionId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function updateCustomFieldOption(contextId, fieldId, optionId, options) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option";
  var description = "Update custom field options for field " + fieldId + " and context " + contextId;
  var body = {
    "contextId": String(contextId),
    "fieldId": String(fieldId),
    "options": String(options),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
      , optionId: String(optionId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

function deleteCustomFieldOption(contextId, fieldId, optionId, options) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option/" + optionId;
  var description = "Delete custom field option " + optionId + " for field " + fieldId + " and context " + contextId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function tryToAddExistingCustomFieldOptionContext(contextId, fieldId, optionId, options) {
  deleteCustomFieldOption(contextId, fieldId, optionId, options);
}

function verifyCustomFieldOptionContextExists(contextId, fieldId, optionId, options) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option";
  var description = "Verify CustomFieldOptionContext with fieldId " + fieldId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("CustomFieldOptionContext exists");
          }
        }
      }
      return pvg.fail("Expected CustomFieldOptionContext to exist but it does not");
    }
  });
}

function verifyCustomFieldOptionContextDoesNotExist(contextId, fieldId, optionId, options) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option";
  var description = "Verify CustomFieldOptionContext with fieldId " + fieldId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected CustomFieldOptionContext to not exist but it does");
          }
        }
      }
      return pvg.success("CustomFieldOptionContext does not exist");
    }
  });
}

function tryToDeleteANonExistingCustomFieldOptionContext(contextId, fieldId, optionId, options) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option/" + optionId;
  var description = "Verify we cannot delete non-existing CustomFieldOptionContext";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedCustomFieldOptionContext(contextId, fieldId, optionId, options) {
  var expectedDesc = "Create custom field options for field " + fieldId + " and context " + contextId;
  return matchSuccess(expectedDesc);
}

function waitForAnyCustomFieldOptionContextAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ custom\ field\ options\ for\ field\ (.+)\ and\ context\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ custom\ field\ options\ for\ field\ (.+)\ and\ context\ (.+)$/);
  var captures = m.slice(1);
  var names = ["fieldId", "contextId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCustomFieldOptionContextAddedEvent(keyVal) {
  return bp.EventSet("AddCustomFieldOptionContext:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.fieldId) === String(keyVal);
  });
}

function matchAnyCustomFieldOptionContextAdded() {
  return bp.EventSet("matchAnyCustomFieldOptionContextAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.fieldId !== undefined && e.name.indexOf("Create custom field option context") > -1;
  });
}

function waitForCustomFieldOptionContextAdded(contextId, fieldId, optionId, options) {
  var expectedDesc = "Create custom field options for field " + fieldId + " and context " + contextId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCustomFieldOptionContext(contextId, fieldId, optionId, options) {
  var expectedDesc = "Delete custom field option " + optionId + " for field " + fieldId + " and context " + contextId;
  return bp.EventSet("matchDeletedCustomFieldOptionContext", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomFieldOptionContextDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ custom\ field\ option\ (.+)\ for\ field\ (.+)\ and\ context\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ custom\ field\ option\ (.+)\ for\ field\ (.+)\ and\ context\ (.+)$/);
  var captures = m.slice(1);
  var names = ["optionId", "fieldId", "contextId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: custom field option reorder ----

function reorderCustomFieldOptions(contextId, fieldId) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option/move";
  var description = "Reorder custom field options for field " + fieldId + " and context " + contextId;
  var body = {
    "after": "after_" + fieldId,
    "contextId": String(contextId),
    "customFieldOptionIds": [],
    "fieldId": String(fieldId),
    "position": "position_" + fieldId,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      fieldId: String(fieldId)
      , contextId: String(contextId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldId: String(fieldId) }) });
}

// ---- Entity: custom field option replacement ----

function replaceCustomFieldOption(contextId, fieldId, jql, optionId, replaceWith) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option/" + optionId + "/issue";
  var description = "Replace custom field option " + optionId + " with " + replaceWith + " for field " + fieldId + " and context " + contextId + " using JQL " + jql;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [303, 400, 403, 404]
  });
}

function tryToDeleteANonExistingCustomFieldOptionReplacement(contextId, fieldId, jql, optionId, replaceWith) {
  var url = "/rest/api/3/field/" + fieldId + "/context/" + contextId + "/option/" + optionId + "/issue";
  var description = "Verify we cannot delete non-existing CustomFieldOptionReplacement";
  svc.delete(url, {
    expectedResponseCodes: [303, 400, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedCustomFieldOptionReplacement(contextId, fieldId, jql, optionId, replaceWith) {
  var expectedDesc = "Replace custom field option " + optionId + " with " + replaceWith + " for field " + fieldId + " and context " + contextId + " using JQL " + jql;
  return bp.EventSet("matchDeletedCustomFieldOptionReplacement", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCustomFieldOptionReplacementDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Replace\ custom\ field\ option\ (.+)\ with\ (.+)\ for\ field\ (.+)\ and\ context\ (.+)\ using\ JQL\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Replace\ custom\ field\ option\ (.+)\ with\ (.+)\ for\ field\ (.+)\ and\ context\ (.+)\ using\ JQL\ (.+)$/);
  var captures = m.slice(1);
  var names = ["optionId", "replaceWith", "fieldId", "contextId", "jql"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: screen ----

function createScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var url = "/rest/api/3/screens";
  var description = "Create screen " + name;
  var body = {
    "description": String(description),
    "name": String(name),
    "screenId": String(screenId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      screenId: String(screenId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { screenId: String(screenId) }) });
}

function deleteScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var url = "/rest/api/3/screens/" + screenId;
  var description = "Delete screen " + screenId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404]
  });
}

function updateScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var url = "/rest/api/3/screens/" + screenId;
  var description = "Update screen " + screenId + " with name " + name;
  var body = {
    "description": String(description),
    "name": String(name),
    "screenId": String(screenId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      screenId: String(screenId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { screenId: String(screenId) }) });
}

function getScreens(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var url = "/rest/api/3/screens";
  var description = "Get screens";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403]
  });
}

function tryToAddExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  getScreens(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt);
}

function verifyScreenExists(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var url = "/rest/api/3/screens";
  var description = "Verify Screen with screenId " + screenId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].screenId) === String(screenId)) {
            return pvg.success("Screen exists");
          }
        }
      }
      return pvg.fail("Expected Screen to exist but it does not");
    }
  });
}

function verifyScreenDoesNotExist(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var url = "/rest/api/3/screens";
  var description = "Verify Screen with screenId " + screenId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].screenId) === String(screenId)) {
            return pvg.fail("Expected Screen to not exist but it does");
          }
        }
      }
      return pvg.success("Screen does not exist");
    }
  });
}

function tryToDeleteANonExistingScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var url = "/rest/api/3/screens/" + screenId;
  var description = "Verify we cannot delete non-existing Screen";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var expectedDesc = "Create screen " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyScreenAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ screen\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ screen\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getScreenAddedEvent(keyVal) {
  return bp.EventSet("AddScreen:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.screenId) === String(keyVal);
  });
}

function matchAnyScreenAdded() {
  return bp.EventSet("matchAnyScreenAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.screenId !== undefined && e.name.indexOf("Create screen") > -1;
  });
}

function waitForScreenAdded(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var expectedDesc = "Create screen " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedScreen(description, id, maxResults, name, orderBy, queryString, scope, screenId, startAt) {
  var expectedDesc = "Delete screen " + screenId;
  return bp.EventSet("matchDeletedScreen", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyScreenDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ screen\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ screen\ (.+)$/);
  var captures = m.slice(1);
  var names = ["screenId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: fieldScreens ----

function getScreensForField(expand, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field/" + fieldId + "/screens";
  var description = "Get screens for field " + fieldId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403]
  });
}

function verifyFieldScreensExists(expand, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field";
  var description = "Verify FieldScreens with fieldId " + fieldId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("FieldScreens exists");
          }
        }
      }
      return pvg.fail("Expected FieldScreens to exist but it does not");
    }
  });
}

function verifyFieldScreensDoesNotExist(expand, fieldId, maxResults, startAt) {
  var url = "/rest/api/3/field";
  var description = "Verify FieldScreens with fieldId " + fieldId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected FieldScreens to not exist but it does");
          }
        }
      }
      return pvg.success("FieldScreens does not exist");
    }
  });
}

// ---- Entity: availableScreenFields ----

function getAvailableScreenFields(screenId) {
  var url = "/rest/api/3/screens/" + screenId + "/availableFields";
  var description = "Get available screen fields for screen " + screenId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function verifyAvailableScreenFieldsExists(screenId) {
  var url = "/rest/api/3/screens";
  var description = "Verify AvailableScreenFields with screenId " + screenId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].screenId) === String(screenId)) {
            return pvg.success("AvailableScreenFields exists");
          }
        }
      }
      return pvg.fail("Expected AvailableScreenFields to exist but it does not");
    }
  });
}

function verifyAvailableScreenFieldsDoesNotExist(screenId) {
  var url = "/rest/api/3/screens";
  var description = "Verify AvailableScreenFields with screenId " + screenId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].screenId) === String(screenId)) {
            return pvg.fail("Expected AvailableScreenFields to not exist but it does");
          }
        }
      }
      return pvg.success("AvailableScreenFields does not exist");
    }
  });
}

// ---- Entity: screenFieldDefault ----

function addFieldToDefaultScreen(fieldId) {
  var url = "/rest/api/3/screens/addToDefault/" + fieldId;
  var description = "Add field " + fieldId + " to default screen";
  var body = {
    "fieldId": String(fieldId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: {
      description: description,
      , fieldId: String(fieldId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingScreenFieldDefault(fieldId) {
  addFieldToDefaultScreen(fieldId);
}

function verifyScreenFieldDefaultExists(fieldId) {
  var url = "/rest/api/3/screens/addToDefault/" + fieldId;
  var description = "Verify ScreenFieldDefault exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.success("ScreenFieldDefault exists");
          }
        }
      }
      return pvg.fail("Expected ScreenFieldDefault to exist but it does not");
    }
  });
}

function verifyScreenFieldDefaultDoesNotExist(fieldId) {
  var url = "/rest/api/3/screens/addToDefault/" + fieldId;
  var description = "Verify ScreenFieldDefault does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldId) === String(fieldId)) {
            return pvg.fail("Expected ScreenFieldDefault to not exist but it does");
          }
        }
      }
      return pvg.success("ScreenFieldDefault does not exist");
    }
  });
}

function matchAddedScreenFieldDefault(fieldId) {
  var expectedDesc = "Add field " + fieldId + " to default screen";
  return matchSuccess(expectedDesc);
}

function waitForAnyScreenFieldDefaultAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ field\ (.+)\ to\ default\ screen$/));
  var m = ev.data.parameters.description.match(/^Add\ field\ (.+)\ to\ default\ screen$/);
  var captures = m.slice(1);
  var names = ["fieldId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getScreenFieldDefaultAddedEvent(keyVal) {
  return bp.EventSet("AddScreenFieldDefault:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyScreenFieldDefaultAdded() {
  return bp.EventSet("matchAnyScreenFieldDefaultAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create screenFieldDefault") > -1;
  });
}

function waitForScreenFieldDefaultAdded(fieldId) {
  var expectedDesc = "Add field " + fieldId + " to default screen";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: issue field option ----

function createIssueFieldOption(config, fieldKey, optionId, properties, value) {
  var url = "/rest/api/3/field/" + fieldKey + "/option";
  var description = "Create issue field option with value " + value + " for field " + fieldKey;
  var body = {
    "config": String(config),
    "fieldKey": String(fieldKey),
    "properties": properties,
    "value": String(value),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403, 404],
    parameters: {
      description: description,
      fieldKey: String(fieldKey)
      , optionId: String(optionId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldKey: String(fieldKey) }) });
}

function deleteIssueFieldOption(config, fieldKey, optionId, properties, value) {
  var url = "/rest/api/3/field/" + fieldKey + "/option/" + optionId;
  var description = "Delete issue field option " + optionId + " for field " + fieldKey;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 409]
  });
}

function updateIssueFieldOption(config, fieldKey, optionId, properties, value) {
  var url = "/rest/api/3/field/" + fieldKey + "/option/" + optionId;
  var description = "Update issue field option " + optionId + " with value " + value + " for field " + fieldKey;
  var body = {
    "config": String(config),
    "fieldKey": String(fieldKey),
    "id": String(1),
    "optionId": String(optionId),
    "properties": properties,
    "value": String(value),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403, 404],
    parameters: {
      description: description,
      fieldKey: String(fieldKey)
      , optionId: String(optionId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { fieldKey: String(fieldKey) }) });
}

function getIssueFieldOption(config, fieldKey, optionId, properties, value) {
  var url = "/rest/api/3/field/" + fieldKey + "/option/" + optionId;
  var description = "Get issue field option " + optionId + " for field " + fieldKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 403, 404]
  });
}

function tryToAddExistingIssueFieldOption(config, fieldKey, optionId, properties, value) {
  getIssueFieldOption(config, fieldKey, optionId, properties, value);
}

function verifyIssueFieldOptionExists(config, fieldKey, optionId, properties, value) {
  var url = "/rest/api/3/field/" + fieldKey + "/option";
  var description = "Verify IssueFieldOption with fieldKey " + fieldKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldKey) === String(fieldKey)) {
            return pvg.success("IssueFieldOption exists");
          }
        }
      }
      return pvg.fail("Expected IssueFieldOption to exist but it does not");
    }
  });
}

function verifyIssueFieldOptionDoesNotExist(config, fieldKey, optionId, properties, value) {
  var url = "/rest/api/3/field/" + fieldKey + "/option";
  var description = "Verify IssueFieldOption with fieldKey " + fieldKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldKey) === String(fieldKey)) {
            return pvg.fail("Expected IssueFieldOption to not exist but it does");
          }
        }
      }
      return pvg.success("IssueFieldOption does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueFieldOption(config, fieldKey, optionId, properties, value) {
  var url = "/rest/api/3/field/" + fieldKey + "/option/" + optionId;
  var description = "Verify we cannot delete non-existing IssueFieldOption";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404, 409],
    parameters: { description: description }
  });
}

function matchAddedIssueFieldOption(config, fieldKey, optionId, properties, value) {
  var expectedDesc = "Create issue field option with value " + value + " for field " + fieldKey;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueFieldOptionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ issue\ field\ option\ with\ value\ (.+)\ for\ field\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ issue\ field\ option\ with\ value\ (.+)\ for\ field\ (.+)$/);
  var captures = m.slice(1);
  var names = ["value", "fieldKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueFieldOptionAddedEvent(keyVal) {
  return bp.EventSet("AddIssueFieldOption:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.fieldKey) === String(keyVal);
  });
}

function matchAnyIssueFieldOptionAdded() {
  return bp.EventSet("matchAnyIssueFieldOptionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.fieldKey !== undefined && e.name.indexOf("Create issue field option") > -1;
  });
}

function waitForIssueFieldOptionAdded(config, fieldKey, optionId, properties, value) {
  var expectedDesc = "Create issue field option with value " + value + " for field " + fieldKey;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueFieldOption(config, fieldKey, optionId, properties, value) {
  var expectedDesc = "Delete issue field option " + optionId + " for field " + fieldKey;
  return bp.EventSet("matchDeletedIssueFieldOption", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueFieldOptionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ field\ option\ (.+)\ for\ field\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ field\ option\ (.+)\ for\ field\ (.+)$/);
  var captures = m.slice(1);
  var names = ["optionId", "fieldKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: group ----

function createGroup(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var url = "/rest/api/3/group";
  var description = "Create group " + name;
  var body = {
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      , groupId: String(groupId)
      , swapGroupId: String(swapGroupId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function removeGroup(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var url = "/rest/api/3/group";
  var description = "Remove group " + groupId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function getGroup(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var url = "/rest/api/3/group";
  var description = "Get group " + groupId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function tryToAddExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  getGroup(expand, groupId, groupname, name, swapGroup, swapGroupId);
}

function verifyGroupExists(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var url = "/rest/api/3/group";
  var description = "Verify Group exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].groupId) === String(groupId)) {
            return pvg.success("Group exists");
          }
        }
      }
      return pvg.fail("Expected Group to exist but it does not");
    }
  });
}

function verifyGroupDoesNotExist(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var url = "/rest/api/3/group";
  var description = "Verify Group does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].groupId) === String(groupId)) {
            return pvg.fail("Expected Group to not exist but it does");
          }
        }
      }
      return pvg.success("Group does not exist");
    }
  });
}

function tryToDeleteANonExistingGroup(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var url = "/rest/api/3/group";
  var description = "Verify we cannot delete non-existing Group";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedGroup(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var expectedDesc = "Create group " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyGroupAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGroupAddedEvent(keyVal) {
  return bp.EventSet("AddGroup:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyGroupAdded() {
  return bp.EventSet("matchAnyGroupAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create group") > -1;
  });
}

function waitForGroupAdded(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var expectedDesc = "Create group " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedGroup(expand, groupId, groupname, name, swapGroup, swapGroupId) {
  var expectedDesc = "Remove group " + groupId;
  return bp.EventSet("matchDeletedGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["groupId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: group member ----

function getUsersFromGroup(groupId, groupname, includeInactiveUsers, maxResults, startAt) {
  var url = "/rest/api/3/group/member";
  var description = "Get users from group " + groupId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function verifyGroupMemberExists(groupId, groupname, includeInactiveUsers, maxResults, startAt) {
  var url = "/rest/api/3/group/member";
  var description = "Verify GroupMember exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].groupId) === String(groupId)) {
            return pvg.success("GroupMember exists");
          }
        }
      }
      return pvg.fail("Expected GroupMember to exist but it does not");
    }
  });
}

function verifyGroupMemberDoesNotExist(groupId, groupname, includeInactiveUsers, maxResults, startAt) {
  var url = "/rest/api/3/group/member";
  var description = "Verify GroupMember does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].groupId) === String(groupId)) {
            return pvg.fail("Expected GroupMember to not exist but it does");
          }
        }
      }
      return pvg.success("GroupMember does not exist");
    }
  });
}

// ---- Entity: group user ----

function addUserToGroup(accountId, groupId, groupname, name) {
  var url = "/rest/api/3/group/user";
  var description = "Add user " + accountId + " to group " + groupId;
  var body = {
    "accountId": String(accountId),
    "groupId": String(groupId),
    "groupname": String(groupname),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 404, 429],
    parameters: {
      description: description,
      , accountId: String(accountId)
      , groupId: String(groupId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function removeUserFromGroup(accountId, groupId, groupname, name) {
  var url = "/rest/api/3/group/user";
  var description = "Remove user " + accountId + " from group " + groupId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401, 403, 404]
  });
}

function tryToAddExistingGroupUser(accountId, groupId, groupname, name) {
  removeUserFromGroup(accountId, groupId, groupname, name);
}

function verifyGroupUserExists(accountId, groupId, groupname, name) {
  var url = "/rest/api/3/group/user";
  var description = "Verify GroupUser exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.success("GroupUser exists");
          }
        }
      }
      return pvg.fail("Expected GroupUser to exist but it does not");
    }
  });
}

function verifyGroupUserDoesNotExist(accountId, groupId, groupname, name) {
  var url = "/rest/api/3/group/user";
  var description = "Verify GroupUser does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].accountId) === String(accountId)) {
            return pvg.fail("Expected GroupUser to not exist but it does");
          }
        }
      }
      return pvg.success("GroupUser does not exist");
    }
  });
}

function tryToDeleteANonExistingGroupUser(accountId, groupId, groupname, name) {
  var url = "/rest/api/3/group/user";
  var description = "Verify we cannot delete non-existing GroupUser";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 401, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedGroupUser(accountId, groupId, groupname, name) {
  var expectedDesc = "Add user " + accountId + " to group " + groupId;
  return matchSuccess(expectedDesc);
}

function waitForAnyGroupUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ user\ (.+)\ to\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ user\ (.+)\ to\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["accountId", "groupId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGroupUserAddedEvent(keyVal) {
  return bp.EventSet("AddGroupUser:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyGroupUserAdded() {
  return bp.EventSet("matchAnyGroupUserAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create group user") > -1;
  });
}

function waitForGroupUserAdded(accountId, groupId, groupname, name) {
  var expectedDesc = "Add user " + accountId + " to group " + groupId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedGroupUser(accountId, groupId, groupname, name) {
  var expectedDesc = "Remove user " + accountId + " from group " + groupId;
  return bp.EventSet("matchDeletedGroupUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ user\ (.+)\ from\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ user\ (.+)\ from\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["accountId", "groupId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue property ----

function setIssueProperty(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Set issue property " + propertyKey + " for issue " + issueIdOrKey;
  var body = {
    "issueIdOrKey": String(issueIdOrKey),
    "propertyKey": String(propertyKey),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 400, 401, 403, 404],
    parameters: {
      description: description,
      issueIdOrKey: String(issueIdOrKey)
      , propertyKey: String(propertyKey)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { issueIdOrKey: String(issueIdOrKey) }) });
}

function deleteIssueProperty(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Delete issue property " + propertyKey + " from issue " + issueIdOrKey;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 401, 404]
  });
}

function getIssueProperty(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Get issue property " + propertyKey + " from issue " + issueIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingIssueProperty(issueIdOrKey, propertyKey) {
  getIssueProperty(issueIdOrKey, propertyKey);
}

function verifyIssuePropertyExists(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Verify IssueProperty with issueIdOrKey " + issueIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("IssueProperty exists");
          }
        }
      }
      return pvg.fail("Expected IssueProperty to exist but it does not");
    }
  });
}

function verifyIssuePropertyDoesNotExist(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Verify IssueProperty with issueIdOrKey " + issueIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected IssueProperty to not exist but it does");
          }
        }
      }
      return pvg.success("IssueProperty does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueProperty(issueIdOrKey, propertyKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties/" + propertyKey;
  var description = "Verify we cannot delete non-existing IssueProperty";
  svc.delete(url, {
    expectedResponseCodes: [204, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueProperty(issueIdOrKey, propertyKey) {
  var expectedDesc = "Set issue property " + propertyKey + " for issue " + issueIdOrKey;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssuePropertyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Set\ issue\ property\ (.+)\ for\ issue\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Set\ issue\ property\ (.+)\ for\ issue\ (.+)$/);
  var captures = m.slice(1);
  var names = ["propertyKey", "issueIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssuePropertyAddedEvent(keyVal) {
  return bp.EventSet("AddIssueProperty:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.issueIdOrKey) === String(keyVal);
  });
}

function matchAnyIssuePropertyAdded() {
  return bp.EventSet("matchAnyIssuePropertyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.issueIdOrKey !== undefined && e.name.indexOf("Create issue property") > -1;
  });
}

function waitForIssuePropertyAdded(issueIdOrKey, propertyKey) {
  var expectedDesc = "Set issue property " + propertyKey + " for issue " + issueIdOrKey;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueProperty(issueIdOrKey, propertyKey) {
  var expectedDesc = "Delete issue property " + propertyKey + " from issue " + issueIdOrKey;
  return bp.EventSet("matchDeletedIssueProperty", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssuePropertyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ property\ (.+)\ from\ issue\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ property\ (.+)\ from\ issue\ (.+)$/);
  var captures = m.slice(1);
  var names = ["propertyKey", "issueIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: bulk issue properties ----

function bulkSetIssuesPropertiesList(entitiesIds, properties) {
  var url = "/rest/api/3/issue/properties";
  var description = "Bulk set issues properties by list";
  var body = {
    "entitiesIds": String(entitiesIds),
    "properties": properties,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [303, 400, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingIssuePropertiesBulk(entitiesIds, properties) {
  bulkSetIssuesPropertiesList(entitiesIds, properties);
}

function verifyIssuePropertiesBulkExists(entitiesIds, properties) {
  var url = "/rest/api/3/issue/properties";
  var description = "Verify IssuePropertiesBulk exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].entitiesIds) === String(entitiesIds)) {
            return pvg.success("IssuePropertiesBulk exists");
          }
        }
      }
      return pvg.fail("Expected IssuePropertiesBulk to exist but it does not");
    }
  });
}

function verifyIssuePropertiesBulkDoesNotExist(entitiesIds, properties) {
  var url = "/rest/api/3/issue/properties";
  var description = "Verify IssuePropertiesBulk does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].entitiesIds) === String(entitiesIds)) {
            return pvg.fail("Expected IssuePropertiesBulk to not exist but it does");
          }
        }
      }
      return pvg.success("IssuePropertiesBulk does not exist");
    }
  });
}

function matchAddedIssuePropertiesBulk(entitiesIds, properties) {
  var expectedDesc = "Bulk set issues properties by list";
  return matchSuccess(expectedDesc);
}

function waitForAnyIssuePropertiesBulkAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Bulk\ set\ issues\ properties\ by\ list$/));
  var m = ev.data.parameters.description.match(/^Bulk\ set\ issues\ properties\ by\ list$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssuePropertiesBulkAddedEvent(keyVal) {
  return bp.EventSet("AddIssuePropertiesBulk:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyIssuePropertiesBulkAdded() {
  return bp.EventSet("matchAnyIssuePropertiesBulkAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create bulk issue properties") > -1;
  });
}

function waitForIssuePropertiesBulkAdded(entitiesIds, properties) {
  var expectedDesc = "Bulk set issues properties by list";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: bulk issue properties by issue ----

function bulkSetIssuePropertiesByIssue(issues) {
  var url = "/rest/api/3/issue/properties/multi";
  var description = "Bulk set issue properties by issue";
  var body = {
    "issues": String(issues),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [303, 400, 401, 403],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingIssuePropertiesBulkByIssue(issues) {
  bulkSetIssuePropertiesByIssue(issues);
}

function verifyIssuePropertiesBulkByIssueExists(issues) {
  var url = "/rest/api/3/issue/properties/multi";
  var description = "Verify IssuePropertiesBulkByIssue exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issues) === String(issues)) {
            return pvg.success("IssuePropertiesBulkByIssue exists");
          }
        }
      }
      return pvg.fail("Expected IssuePropertiesBulkByIssue to exist but it does not");
    }
  });
}

function verifyIssuePropertiesBulkByIssueDoesNotExist(issues) {
  var url = "/rest/api/3/issue/properties/multi";
  var description = "Verify IssuePropertiesBulkByIssue does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issues) === String(issues)) {
            return pvg.fail("Expected IssuePropertiesBulkByIssue to not exist but it does");
          }
        }
      }
      return pvg.success("IssuePropertiesBulkByIssue does not exist");
    }
  });
}

function matchAddedIssuePropertiesBulkByIssue(issues) {
  var expectedDesc = "Bulk set issue properties by issue";
  return matchSuccess(expectedDesc);
}

function waitForAnyIssuePropertiesBulkByIssueAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Bulk\ set\ issue\ properties\ by\ issue$/));
  var m = ev.data.parameters.description.match(/^Bulk\ set\ issue\ properties\ by\ issue$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssuePropertiesBulkByIssueAddedEvent(keyVal) {
  return bp.EventSet("AddIssuePropertiesBulkByIssue:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyIssuePropertiesBulkByIssueAdded() {
  return bp.EventSet("matchAnyIssuePropertiesBulkByIssueAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create bulk issue properties by issue") > -1;
  });
}

function waitForIssuePropertiesBulkByIssueAdded(issues) {
  var expectedDesc = "Bulk set issue properties by issue";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: bulk issue property ----

function bulkSetIssueProperty(propertyKey) {
  var url = "/rest/api/3/issue/properties/" + propertyKey;
  var description = "Bulk set issue property " + propertyKey;
  var body = {
    "expression": "expression_" + propertyKey,
    "filter": "filter_" + propertyKey,
    "propertyKey": String(propertyKey),
    "value": "value_" + propertyKey,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [303, 400, 401],
    parameters: {
      description: description,
      propertyKey: String(propertyKey)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { propertyKey: String(propertyKey) }) });
}

function bulkDeleteIssueProperty(propertyKey) {
  var url = "/rest/api/3/issue/properties/" + propertyKey;
  var description = "Bulk delete issue property " + propertyKey;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [303, 400, 401]
  });
}

function tryToAddExistingIssuePropertyBulk(propertyKey) {
  bulkDeleteIssueProperty(propertyKey);
}

function verifyIssuePropertyBulkExists(propertyKey) {
  var url = "/rest/api/3/issue/properties/" + propertyKey;
  var description = "Verify IssuePropertyBulk with propertyKey " + propertyKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].propertyKey) === String(propertyKey)) {
            return pvg.success("IssuePropertyBulk exists");
          }
        }
      }
      return pvg.fail("Expected IssuePropertyBulk to exist but it does not");
    }
  });
}

function verifyIssuePropertyBulkDoesNotExist(propertyKey) {
  var url = "/rest/api/3/issue/properties/" + propertyKey;
  var description = "Verify IssuePropertyBulk with propertyKey " + propertyKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].propertyKey) === String(propertyKey)) {
            return pvg.fail("Expected IssuePropertyBulk to not exist but it does");
          }
        }
      }
      return pvg.success("IssuePropertyBulk does not exist");
    }
  });
}

function tryToDeleteANonExistingIssuePropertyBulk(propertyKey) {
  var url = "/rest/api/3/issue/properties/" + propertyKey;
  var description = "Verify we cannot delete non-existing IssuePropertyBulk";
  svc.delete(url, {
    expectedResponseCodes: [303, 400, 401],
    parameters: { description: description }
  });
}

function matchAddedIssuePropertyBulk(propertyKey) {
  var expectedDesc = "Bulk set issue property " + propertyKey;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssuePropertyBulkAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Bulk\ set\ issue\ property\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Bulk\ set\ issue\ property\ (.+)$/);
  var captures = m.slice(1);
  var names = ["propertyKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssuePropertyBulkAddedEvent(keyVal) {
  return bp.EventSet("AddIssuePropertyBulk:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.propertyKey) === String(keyVal);
  });
}

function matchAnyIssuePropertyBulkAdded() {
  return bp.EventSet("matchAnyIssuePropertyBulkAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.propertyKey !== undefined && e.name.indexOf("Create bulk issue property") > -1;
  });
}

function waitForIssuePropertyBulkAdded(propertyKey) {
  var expectedDesc = "Bulk set issue property " + propertyKey;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssuePropertyBulk(propertyKey) {
  var expectedDesc = "Bulk delete issue property " + propertyKey;
  return bp.EventSet("matchDeletedIssuePropertyBulk", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssuePropertyBulkDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Bulk\ delete\ issue\ property\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Bulk\ delete\ issue\ property\ (.+)$/);
  var captures = m.slice(1);
  var names = ["propertyKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue property keys ----

function getIssuePropertyKeys(issueIdOrKey) {
  var url = "/rest/api/3/issue/" + issueIdOrKey + "/properties";
  var description = "Get issue property keys for issue " + issueIdOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyIssuePropertyKeysExists(issueIdOrKey) {
  var url = "/rest/api/3/issue";
  var description = "Verify IssuePropertyKeys with issueIdOrKey " + issueIdOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.success("IssuePropertyKeys exists");
          }
        }
      }
      return pvg.fail("Expected IssuePropertyKeys to exist but it does not");
    }
  });
}

function verifyIssuePropertyKeysDoesNotExist(issueIdOrKey) {
  var url = "/rest/api/3/issue";
  var description = "Verify IssuePropertyKeys with issueIdOrKey " + issueIdOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].issueIdOrKey) === String(issueIdOrKey)) {
            return pvg.fail("Expected IssuePropertyKeys to not exist but it does");
          }
        }
      }
      return pvg.success("IssuePropertyKeys does not exist");
    }
  });
}

// ---- Entity: issue type ----

function createIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype";
  var description = "Create issue type " + name;
  var body = {
    "description": String(description),
    "hierarchyLevel": String(hierarchyLevel),
    "id": String(id),
    "name": String(name),
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 409],
    parameters: {
      description: description,
      id: String(id)
      , alternativeIssueTypeId: String(alternativeIssueTypeId)
      , avatarId: String(avatarId)
      , projectId: String(projectId)
      , type: String(type)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype/" + id;
  var description = "Delete issue type " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 401, 403, 404, 409, 423]
  });
}

function updateIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype/" + id;
  var description = "Update issue type " + id + " with name " + name;
  var body = {
    "avatarId": String(avatarId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      id: String(id)
      , alternativeIssueTypeId: String(alternativeIssueTypeId)
      , avatarId: String(avatarId)
      , projectId: String(projectId)
      , type: String(type)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype/" + id;
  var description = "Get issue type " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function getIssueAllTypes(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype";
  var description = "Get all issue types";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getIssueTypesForProject(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype/project";
  var description = "Get issue types for project " + projectId + " at level " + level;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function getAlternativeIssueTypes(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype/" + id + "/alternatives";
  var description = "Get alternative issue types for " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createIssueTypeAvatar(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype/" + id + "/avatar2";
  var description = "Load issue type avatar for " + id + " with crop x=" + x + ", y=" + y + ", size=" + size;
  var body = {
    "id": String(id),
    "size": String(size),
    "x": String(x),
    "y": String(y),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , alternativeIssueTypeId: String(alternativeIssueTypeId)
      , avatarId: String(avatarId)
      , projectId: String(projectId)
      , type: String(type)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function tryToAddExistingIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  createIssueTypeAvatar(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y);
}

function verifyIssueTypeExists(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype";
  var description = "Verify IssueType with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("IssueType exists");
          }
        }
      }
      return pvg.fail("Expected IssueType to exist but it does not");
    }
  });
}

function verifyIssueTypeDoesNotExist(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype";
  var description = "Verify IssueType with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected IssueType to not exist but it does");
          }
        }
      }
      return pvg.success("IssueType does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var url = "/rest/api/3/issuetype/" + id;
  var description = "Verify we cannot delete non-existing IssueType";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 401, 403, 404, 409, 423],
    parameters: { description: description }
  });
}

function matchAddedIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var expectedDesc = "Create issue type " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueTypeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ issue\ type\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ issue\ type\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueTypeAddedEvent(keyVal) {
  return bp.EventSet("AddIssueType:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyIssueTypeAdded() {
  return bp.EventSet("matchAnyIssueTypeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create issue type") > -1;
  });
}

function waitForIssueTypeAdded(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var expectedDesc = "Create issue type " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueType(alternativeIssueTypeId, avatarId, description, hierarchyLevel, id, level, name, projectId, size, type, x, y) {
  var expectedDesc = "Delete issue type " + id;
  return bp.EventSet("matchDeletedIssueType", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueTypeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ type\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ type\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: autoCompleteData ----

function getAutoComplete(includeCollapsedFields, projectIds) {
  var url = "/rest/api/3/jql/autocompletedata";
  var description = "Get field reference data";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function getAutoCompletePost(includeCollapsedFields, projectIds) {
  var url = "/rest/api/3/jql/autocompletedata";
  var description = "Get field reference data with includeCollapsedFields " + includeCollapsedFields + " and projectIds " + projectIds;
  var body = {
    "includeCollapsedFields": String(includeCollapsedFields),
    "projectIds": String(projectIds),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingAutoCompleteData(includeCollapsedFields, projectIds) {
  getAutoCompletePost(includeCollapsedFields, projectIds);
}

function verifyAutoCompleteDataExists(includeCollapsedFields, projectIds) {
  var url = "/rest/api/3/jql/autocompletedata";
  var description = "Verify AutoCompleteData exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectIds) === String(projectIds)) {
            return pvg.success("AutoCompleteData exists");
          }
        }
      }
      return pvg.fail("Expected AutoCompleteData to exist but it does not");
    }
  });
}

function verifyAutoCompleteDataDoesNotExist(includeCollapsedFields, projectIds) {
  var url = "/rest/api/3/jql/autocompletedata";
  var description = "Verify AutoCompleteData does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].projectIds) === String(projectIds)) {
            return pvg.fail("Expected AutoCompleteData to not exist but it does");
          }
        }
      }
      return pvg.success("AutoCompleteData does not exist");
    }
  });
}

function matchAddedAutoCompleteData(includeCollapsedFields, projectIds) {
  var expectedDesc = "Get field reference data with includeCollapsedFields " + includeCollapsedFields + " and projectIds " + projectIds;
  return matchSuccess(expectedDesc);
}

function waitForAnyAutoCompleteDataAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Get\ field\ reference\ data\ with\ includeCollapsedFields\ (.+)\ and\ projectIds\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Get\ field\ reference\ data\ with\ includeCollapsedFields\ (.+)\ and\ projectIds\ (.+)$/);
  var captures = m.slice(1);
  var names = ["includeCollapsedFields", "projectIds"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAutoCompleteDataAddedEvent(keyVal) {
  return bp.EventSet("AddAutoCompleteData:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAutoCompleteDataAdded() {
  return bp.EventSet("matchAnyAutoCompleteDataAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create autoCompleteData") > -1;
  });
}

function waitForAutoCompleteDataAdded(includeCollapsedFields, projectIds) {
  var expectedDesc = "Get field reference data with includeCollapsedFields " + includeCollapsedFields + " and projectIds " + projectIds;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: autoCompleteSuggestions ----

function getFieldAutoCompleteForQueryString(fieldName, fieldValue, predicateName, predicateValue) {
  var url = "/rest/api/3/jql/autocompletedata/suggestions";
  var description = "Get field auto complete suggestions for fieldName " + fieldName + ", fieldValue " + fieldValue + ", predicateName " + predicateName + ", predicateValue " + predicateValue;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 401]
  });
}

function verifyAutoCompleteSuggestionsExists(fieldName, fieldValue, predicateName, predicateValue) {
  var url = "/rest/api/3/jql/autocompletedata/suggestions";
  var description = "Verify AutoCompleteSuggestions exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldName) === String(fieldName) && String(items[i].fieldValue) === String(fieldValue) && String(items[i].predicateName) === String(predicateName) && String(items[i].predicateValue) === String(predicateValue)) {
            return pvg.success("AutoCompleteSuggestions exists");
          }
        }
      }
      return pvg.fail("Expected AutoCompleteSuggestions to exist but it does not");
    }
  });
}

function verifyAutoCompleteSuggestionsDoesNotExist(fieldName, fieldValue, predicateName, predicateValue) {
  var url = "/rest/api/3/jql/autocompletedata/suggestions";
  var description = "Verify AutoCompleteSuggestions does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].fieldName) === String(fieldName) && String(items[i].fieldValue) === String(fieldValue) && String(items[i].predicateName) === String(predicateName) && String(items[i].predicateValue) === String(predicateValue)) {
            return pvg.fail("Expected AutoCompleteSuggestions to not exist but it does");
          }
        }
      }
      return pvg.success("AutoCompleteSuggestions does not exist");
    }
  });
}

// ---- Entity: jqlQuery ----

function parseJqlQueries(queries, validation) {
  var url = "/rest/api/3/jql/parse";
  var description = "Parse JQL queries with validation " + validation + " and queries " + queries;
  var body = {
    "queries": String(queries),
    "validation": String(validation),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingJqlQuery(queries, validation) {
  parseJqlQueries(queries, validation);
}

function verifyJqlQueryExists(queries, validation) {
  var url = "/rest/api/3/jql/parse";
  var description = "Verify JqlQuery exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].validation) === String(validation)) {
            return pvg.success("JqlQuery exists");
          }
        }
      }
      return pvg.fail("Expected JqlQuery to exist but it does not");
    }
  });
}

function verifyJqlQueryDoesNotExist(queries, validation) {
  var url = "/rest/api/3/jql/parse";
  var description = "Verify JqlQuery does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].validation) === String(validation)) {
            return pvg.fail("Expected JqlQuery to not exist but it does");
          }
        }
      }
      return pvg.success("JqlQuery does not exist");
    }
  });
}

function matchAddedJqlQuery(queries, validation) {
  var expectedDesc = "Parse JQL queries with validation " + validation + " and queries " + queries;
  return matchSuccess(expectedDesc);
}

function waitForAnyJqlQueryAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Parse\ JQL\ queries\ with\ validation\ (.+)\ and\ queries\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Parse\ JQL\ queries\ with\ validation\ (.+)\ and\ queries\ (.+)$/);
  var captures = m.slice(1);
  var names = ["validation", "queries"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getJqlQueryAddedEvent(keyVal) {
  return bp.EventSet("AddJqlQuery:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyJqlQueryAdded() {
  return bp.EventSet("matchAnyJqlQueryAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create jqlQuery") > -1;
  });
}

function waitForJqlQueryAdded(queries, validation) {
  var expectedDesc = "Parse JQL queries with validation " + validation + " and queries " + queries;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: jqlPersonalDataMigration ----

function migrateQueries(queryStrings) {
  var url = "/rest/api/3/jql/pdcleaner";
  var description = "Convert user identifiers to account IDs in JQL queries with queryStrings " + queryStrings;
  var body = {
    "queryStrings": String(queryStrings),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingJqlPersonalDataMigration(queryStrings) {
  migrateQueries(queryStrings);
}

function verifyJqlPersonalDataMigrationExists(queryStrings) {
  var url = "/rest/api/3/jql/pdcleaner";
  var description = "Verify JqlPersonalDataMigration exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].queryStrings) === String(queryStrings)) {
            return pvg.success("JqlPersonalDataMigration exists");
          }
        }
      }
      return pvg.fail("Expected JqlPersonalDataMigration to exist but it does not");
    }
  });
}

function verifyJqlPersonalDataMigrationDoesNotExist(queryStrings) {
  var url = "/rest/api/3/jql/pdcleaner";
  var description = "Verify JqlPersonalDataMigration does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].queryStrings) === String(queryStrings)) {
            return pvg.fail("Expected JqlPersonalDataMigration to not exist but it does");
          }
        }
      }
      return pvg.success("JqlPersonalDataMigration does not exist");
    }
  });
}

function matchAddedJqlPersonalDataMigration(queryStrings) {
  var expectedDesc = "Convert user identifiers to account IDs in JQL queries with queryStrings " + queryStrings;
  return matchSuccess(expectedDesc);
}

function waitForAnyJqlPersonalDataMigrationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Convert\ user\ identifiers\ to\ account\ IDs\ in\ JQL\ queries\ with\ queryStrings\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Convert\ user\ identifiers\ to\ account\ IDs\ in\ JQL\ queries\ with\ queryStrings\ (.+)$/);
  var captures = m.slice(1);
  var names = ["queryStrings"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getJqlPersonalDataMigrationAddedEvent(keyVal) {
  return bp.EventSet("AddJqlPersonalDataMigration:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyJqlPersonalDataMigrationAdded() {
  return bp.EventSet("matchAnyJqlPersonalDataMigrationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create jqlPersonalDataMigration") > -1;
  });
}

function waitForJqlPersonalDataMigrationAdded(queryStrings) {
  var expectedDesc = "Convert user identifiers to account IDs in JQL queries with queryStrings " + queryStrings;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: jqlSanitize ----

function sanitiseJqlQueries(queries) {
  var url = "/rest/api/3/jql/sanitize";
  var description = "Sanitize JQL queries with queries " + queries;
  var body = {
    "queries": String(queries),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 401, 403],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingJqlSanitize(queries) {
  sanitiseJqlQueries(queries);
}

function verifyJqlSanitizeExists(queries) {
  var url = "/rest/api/3/jql/sanitize";
  var description = "Verify JqlSanitize exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].queries) === String(queries)) {
            return pvg.success("JqlSanitize exists");
          }
        }
      }
      return pvg.fail("Expected JqlSanitize to exist but it does not");
    }
  });
}

function verifyJqlSanitizeDoesNotExist(queries) {
  var url = "/rest/api/3/jql/sanitize";
  var description = "Verify JqlSanitize does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].queries) === String(queries)) {
            return pvg.fail("Expected JqlSanitize to not exist but it does");
          }
        }
      }
      return pvg.success("JqlSanitize does not exist");
    }
  });
}

function matchAddedJqlSanitize(queries) {
  var expectedDesc = "Sanitize JQL queries with queries " + queries;
  return matchSuccess(expectedDesc);
}

function waitForAnyJqlSanitizeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Sanitize\ JQL\ queries\ with\ queries\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Sanitize\ JQL\ queries\ with\ queries\ (.+)$/);
  var captures = m.slice(1);
  var names = ["queries"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getJqlSanitizeAddedEvent(keyVal) {
  return bp.EventSet("AddJqlSanitize:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyJqlSanitizeAdded() {
  return bp.EventSet("matchAnyJqlSanitizeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create jqlSanitize") > -1;
  });
}

function waitForJqlSanitizeAdded(queries) {
  var expectedDesc = "Sanitize JQL queries with queries " + queries;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: plan ----

function createPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var url = "/rest/api/3/plans/plan";
  var description = "Create plan " + name;
  var body = {
    "crossProjectReleases": String(crossProjectReleases),
    "customFields": String(customFields),
    "exclusionRules": String(exclusionRules),
    "issueSources": String(issueSources),
    "leadAccountId": String(leadAccountId),
    "name": String(name),
    "permissions": String(permissions),
    "planId": String(planId),
    "scheduling": String(scheduling),
    "useGroupId": String(useGroupId),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      planId: String(planId)
      , leadAccountId: String(leadAccountId)
      , useGroupId: String(useGroupId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { planId: String(planId) }) });
}

function getPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var url = "/rest/api/3/plans/plan/" + planId;
  var description = "Get plan " + planId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function updatePlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var url = "/rest/api/3/plans/plan/" + planId;
  var description = "Update plan " + planId;
  var body = {
    "planId": String(planId),
    "useGroupId": String(useGroupId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      planId: String(planId)
      , leadAccountId: String(leadAccountId)
      , useGroupId: String(useGroupId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { planId: String(planId) }) });
}

function trashPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/trash";
  var description = "Trash plan " + planId;
  var body = {
    "planId": String(planId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 401, 403, 404, 409],
    parameters: {
      description: description,
      planId: String(planId)
      , leadAccountId: String(leadAccountId)
      , useGroupId: String(useGroupId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { planId: String(planId) }) });
}

function tryToAddExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  trashPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId);
}

function verifyPlanExists(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var url = "/rest/api/3/plans/plan";
  var description = "Verify Plan with planId " + planId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].planId) === String(planId)) {
            return pvg.success("Plan exists");
          }
        }
      }
      return pvg.fail("Expected Plan to exist but it does not");
    }
  });
}

function verifyPlanDoesNotExist(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var url = "/rest/api/3/plans/plan";
  var description = "Verify Plan with planId " + planId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].planId) === String(planId)) {
            return pvg.fail("Expected Plan to not exist but it does");
          }
        }
      }
      return pvg.success("Plan does not exist");
    }
  });
}

function tryToDeleteANonExistingPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/trash";
  var description = "Verify we cannot delete non-existing Plan";
  svc.delete(url, {
    expectedResponseCodes: [],
    parameters: { description: description }
  });
}

function matchAddedPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var expectedDesc = "Create plan " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyPlanAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ plan\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ plan\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPlanAddedEvent(keyVal) {
  return bp.EventSet("AddPlan:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.planId) === String(keyVal);
  });
}

function matchAnyPlanAdded() {
  return bp.EventSet("matchAnyPlanAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.planId !== undefined && e.name.indexOf("Create plan") > -1;
  });
}

function waitForPlanAdded(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var expectedDesc = "Create plan " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPlan(crossProjectReleases, customFields, exclusionRules, issueSources, leadAccountId, name, permissions, planId, scheduling, useGroupId) {
  var expectedDesc = "Trash plan " + planId;
  return bp.EventSet("matchDeletedPlan", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPlanDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Trash\ plan\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Trash\ plan\ (.+)$/);
  var captures = m.slice(1);
  var names = ["planId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: atlassian team ----

function addAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian";
  var description = "Add Atlassian team with id " + id + " to plan " + planId;
  var body = {
    "capacity": String(capacity),
    "id": String(id),
    "issueSourceId": String(issueSourceId),
    "planId": String(planId),
    "planningStyle": String(planningStyle),
    "sprintLength": String(sprintLength),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      planId: String(planId)
      , id: String(id)
      , issueSourceId: String(issueSourceId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { planId: String(planId) }) });
}

function removeAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian/{atlassianTeamId}";
  var description = "Remove Atlassian team " + id + " from plan " + planId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 401, 403, 404, 409]
  });
}

function updateAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian/{atlassianTeamId}";
  var description = "Update Atlassian team " + id + " in plan " + planId;
  var body = {
    "id": String(id),
    "planId": String(planId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      planId: String(planId)
      , id: String(id)
      , issueSourceId: String(issueSourceId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { planId: String(planId) }) });
}

function getAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian/{atlassianTeamId}";
  var description = "Get Atlassian team " + id + " in plan " + planId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404, 409]
  });
}

function tryToAddExistingAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  getAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength);
}

function verifyAtlassianTeamExists(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian";
  var description = "Verify AtlassianTeam with planId " + planId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].planId) === String(planId)) {
            return pvg.success("AtlassianTeam exists");
          }
        }
      }
      return pvg.fail("Expected AtlassianTeam to exist but it does not");
    }
  });
}

function verifyAtlassianTeamDoesNotExist(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian";
  var description = "Verify AtlassianTeam with planId " + planId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].planId) === String(planId)) {
            return pvg.fail("Expected AtlassianTeam to not exist but it does");
          }
        }
      }
      return pvg.success("AtlassianTeam does not exist");
    }
  });
}

function tryToDeleteANonExistingAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/atlassian/{atlassianTeamId}";
  var description = "Verify we cannot delete non-existing AtlassianTeam";
  svc.delete(url, {
    expectedResponseCodes: [204, 401, 403, 404, 409],
    parameters: { description: description }
  });
}

function matchAddedAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var expectedDesc = "Add Atlassian team with id " + id + " to plan " + planId;
  return matchSuccess(expectedDesc);
}

function waitForAnyAtlassianTeamAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ Atlassian\ team\ with\ id\ (.+)\ to\ plan\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ Atlassian\ team\ with\ id\ (.+)\ to\ plan\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "planId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAtlassianTeamAddedEvent(keyVal) {
  return bp.EventSet("AddAtlassianTeam:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.planId) === String(keyVal);
  });
}

function matchAnyAtlassianTeamAdded() {
  return bp.EventSet("matchAnyAtlassianTeamAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.planId !== undefined && e.name.indexOf("Create atlassian team") > -1;
  });
}

function waitForAtlassianTeamAdded(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var expectedDesc = "Add Atlassian team with id " + id + " to plan " + planId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAtlassianTeam(capacity, id, issueSourceId, planId, planningStyle, sprintLength) {
  var expectedDesc = "Remove Atlassian team " + id + " from plan " + planId;
  return bp.EventSet("matchDeletedAtlassianTeam", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAtlassianTeamDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ Atlassian\ team\ (.+)\ from\ plan\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ Atlassian\ team\ (.+)\ from\ plan\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "planId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: plan-only team ----

function createPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly";
  var description = "Create plan-only team " + name + " in plan " + planId;
  var body = {
    "capacity": String(capacity),
    "issueSourceId": String(issueSourceId),
    "memberAccountIds": String(memberAccountIds),
    "name": String(name),
    "planId": String(planId),
    "planningStyle": String(planningStyle),
    "sprintLength": String(sprintLength),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      planId: String(planId)
      , id: String(id)
      , issueSourceId: String(issueSourceId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { planId: String(planId) }) });
}

function deletePlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly/{planOnlyTeamId}";
  var description = "Delete plan-only team " + id + " in plan " + planId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 401, 403, 404, 409]
  });
}

function updatePlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly/{planOnlyTeamId}";
  var description = "Update plan-only team " + id + " in plan " + planId;
  var body = {
    "id": String(id),
    "planId": String(planId),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404, 409],
    parameters: {
      description: description,
      planId: String(planId)
      , id: String(id)
      , issueSourceId: String(issueSourceId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { planId: String(planId) }) });
}

function getPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly/{planOnlyTeamId}";
  var description = "Get plan-only team " + id + " in plan " + planId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404, 409]
  });
}

function tryToAddExistingPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  getPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength);
}

function verifyPlanOnlyTeamExists(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly";
  var description = "Verify PlanOnlyTeam with planId " + planId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].planId) === String(planId)) {
            return pvg.success("PlanOnlyTeam exists");
          }
        }
      }
      return pvg.fail("Expected PlanOnlyTeam to exist but it does not");
    }
  });
}

function verifyPlanOnlyTeamDoesNotExist(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly";
  var description = "Verify PlanOnlyTeam with planId " + planId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].planId) === String(planId)) {
            return pvg.fail("Expected PlanOnlyTeam to not exist but it does");
          }
        }
      }
      return pvg.success("PlanOnlyTeam does not exist");
    }
  });
}

function tryToDeleteANonExistingPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team/planonly/{planOnlyTeamId}";
  var description = "Verify we cannot delete non-existing PlanOnlyTeam";
  svc.delete(url, {
    expectedResponseCodes: [204, 401, 403, 404, 409],
    parameters: { description: description }
  });
}

function matchAddedPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var expectedDesc = "Create plan-only team " + name + " in plan " + planId;
  return matchSuccess(expectedDesc);
}

function waitForAnyPlanOnlyTeamAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ plan\-only\ team\ (.+)\ in\ plan\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ plan\-only\ team\ (.+)\ in\ plan\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "planId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPlanOnlyTeamAddedEvent(keyVal) {
  return bp.EventSet("AddPlanOnlyTeam:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.planId) === String(keyVal);
  });
}

function matchAnyPlanOnlyTeamAdded() {
  return bp.EventSet("matchAnyPlanOnlyTeamAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.planId !== undefined && e.name.indexOf("Create plan-only team") > -1;
  });
}

function waitForPlanOnlyTeamAdded(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var expectedDesc = "Create plan-only team " + name + " in plan " + planId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPlanOnlyTeam(capacity, id, issueSourceId, memberAccountIds, name, planId, planningStyle, sprintLength) {
  var expectedDesc = "Delete plan-only team " + id + " in plan " + planId;
  return bp.EventSet("matchDeletedPlanOnlyTeam", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPlanOnlyTeamDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ plan\-only\ team\ (.+)\ in\ plan\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ plan\-only\ team\ (.+)\ in\ plan\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "planId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: team ----

function getTeams(cursor, maxResults, planId) {
  var url = "/rest/api/3/plans/plan/" + planId + "/team";
  var description = "Get teams in plan " + planId + " paginated";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 403, 404]
  });
}

function verifyTeamExists(cursor, maxResults, planId) {
  var url = "/rest/api/3/plans/plan";
  var description = "Verify Team with planId " + planId + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].planId) === String(planId)) {
            return pvg.success("Team exists");
          }
        }
      }
      return pvg.fail("Expected Team to exist but it does not");
    }
  });
}

function verifyTeamDoesNotExist(cursor, maxResults, planId) {
  var url = "/rest/api/3/plans/plan";
  var description = "Verify Team with planId " + planId + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].planId) === String(planId)) {
            return pvg.fail("Expected Team to not exist but it does");
          }
        }
      }
      return pvg.success("Team does not exist");
    }
  });
}

// ---- Entity: priority ----

function createPriority(avatarId, description, iconUrl, id, name, statusColor) {
  var url = "/rest/api/3/priority";
  var description = "Create priority " + name;
  var body = {
    "avatarId": String(avatarId),
    "description": String(description),
    "iconUrl": String(iconUrl),
    "id": String(id),
    "name": String(name),
    "statusColor": String(statusColor),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 401, 403],
    parameters: {
      description: description,
      id: String(id)
      , avatarId: String(avatarId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deletePriority(avatarId, description, iconUrl, id, name, statusColor) {
  var url = "/rest/api/3/priority/" + id;
  var description = "Delete priority " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [303, 400, 401, 403, 404, 409]
  });
}

function updatePriority(avatarId, description, iconUrl, id, name, statusColor) {
  var url = "/rest/api/3/priority/" + id;
  var description = "Update priority " + id + " with name " + name;
  var body = {
    "avatarId": String(avatarId),
    "description": String(description),
    "iconUrl": String(iconUrl),
    "id": String(id),
    "name": String(name),
    "statusColor": String(statusColor),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 400, 401, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , avatarId: String(avatarId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getPriority(avatarId, description, iconUrl, id, name, statusColor) {
  var url = "/rest/api/3/priority/" + id;
  var description = "Get priority " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function getPriorities(avatarId, description, iconUrl, id, name, statusColor) {
  var url = "/rest/api/3/priority";
  var description = "Get priorities";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function tryToAddExistingPriority(avatarId, description, iconUrl, id, name, statusColor) {
  getPriorities(avatarId, description, iconUrl, id, name, statusColor);
}

function verifyPriorityExists(avatarId, description, iconUrl, id, name, statusColor) {
  var url = "/rest/api/3/priority";
  var description = "Verify Priority with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Priority exists");
          }
        }
      }
      return pvg.fail("Expected Priority to exist but it does not");
    }
  });
}

function verifyPriorityDoesNotExist(avatarId, description, iconUrl, id, name, statusColor) {
  var url = "/rest/api/3/priority";
  var description = "Verify Priority with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Priority to not exist but it does");
          }
        }
      }
      return pvg.success("Priority does not exist");
    }
  });
}

function tryToDeleteANonExistingPriority(avatarId, description, iconUrl, id, name, statusColor) {
  var url = "/rest/api/3/priority/" + id;
  var description = "Verify we cannot delete non-existing Priority";
  svc.delete(url, {
    expectedResponseCodes: [303, 400, 401, 403, 404, 409],
    parameters: { description: description }
  });
}

function matchAddedPriority(avatarId, description, iconUrl, id, name, statusColor) {
  var expectedDesc = "Create priority " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyPriorityAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ priority\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ priority\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPriorityAddedEvent(keyVal) {
  return bp.EventSet("AddPriority:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPriorityAdded() {
  return bp.EventSet("matchAnyPriorityAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create priority") > -1;
  });
}

function waitForPriorityAdded(avatarId, description, iconUrl, id, name, statusColor) {
  var expectedDesc = "Create priority " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPriority(avatarId, description, iconUrl, id, name, statusColor) {
  var expectedDesc = "Delete priority " + id;
  return bp.EventSet("matchDeletedPriority", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPriorityDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ priority\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ priority\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
