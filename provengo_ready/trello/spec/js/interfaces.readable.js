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

// ---- Entity: card ----

function addCards(idCard, key, token) {
  var url = "/cards";
  var description = "Create card with idCard " + idCard + " and name {name}";
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

function deleteCardsByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard;
  var description = "Delete card with idCard " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateCardsByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard;
  var description = "Update card with idCard " + idCard + " and name {name}";
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

function getCardsByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard;
  var description = "Get card with idCard " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCard(idCard, key, token) {
  var url = "/cards";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another Card...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardExists(idCard, key, token) {
  var url = "/cards";
  var description = "Verify Card exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("Card exists");
          }
        }
      }
      return pvg.fail("Expected Card to exist but it does not");
    }
  });
}

function verifyCardDoesNotExist(idCard, key, token) {
  var url = "/cards";
  var description = "Verify Card does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected Card to not exist but it does");
          }
        }
      }
      return pvg.success("Card does not exist");
    }
  });
}

function tryToDeleteANonExistingCard(idCard, key, token) {
  var url = "/cards/" + idCard;
  var description = "Verify we cannot delete non-existing Card";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCard(idCard, key, token) {
  var expectedDesc = "Create card with idCard " + idCard + " and name {name}";
  return bp.EventSet("matchAddedCard", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ card\ with\ idCard\ (.+)\ and\ name\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ card\ with\ idCard\ (.+)\ and\ name\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardAddedEvent(keyVal) {
  return bp.EventSet("AddCard:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardAdded() {
  return bp.EventSet("matchAnyCardAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardAdded(idCard, key, token) {
  var expectedDesc = "Create card with idCard " + idCard + " and name {name}";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCard(idCard, key, token) {
  var expectedDesc = "Delete card with idCard " + idCard;
  return bp.EventSet("matchDeletedCard", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ card\ with\ idCard\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ card\ with\ idCard\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card action comment ----

function addCardsActionsCommentsByIdCard(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "Add comment to card " + idCard + " with text " + text;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idAction: String(idAction)
    }
  });
}

function updateCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Update comment " + idAction + " on card " + idCard + " with text " + text;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idAction: String(idAction)
    }
  });
}

function deleteCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Delete comment " + idAction + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCardActionComment(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardActionComment...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardActionCommentExists(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "Verify CardActionComment exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardActionComment exists");
          }
        }
      }
      return pvg.fail("Expected CardActionComment to exist but it does not");
    }
  });
}

function verifyCardActionCommentDoesNotExist(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "Verify CardActionComment does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardActionComment to not exist but it does");
          }
        }
      }
      return pvg.success("CardActionComment does not exist");
    }
  });
}

function tryToDeleteANonExistingCardActionComment(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Verify we cannot delete non-existing CardActionComment";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardActionComment(idAction, idCard, key, text, token) {
  var expectedDesc = "Add comment to card " + idCard + " with text " + text;
  return bp.EventSet("matchAddedCardActionComment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardActionCommentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ comment\ to\ card\ (.+)\ with\ text\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ comment\ to\ card\ (.+)\ with\ text\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard", "text"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardActionCommentAddedEvent(keyVal) {
  return bp.EventSet("AddCardActionComment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardActionCommentAdded() {
  return bp.EventSet("matchAnyCardActionCommentAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card action comment") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardActionCommentAdded(idAction, idCard, key, text, token) {
  var expectedDesc = "Add comment to card " + idCard + " with text " + text;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardActionComment(idAction, idCard, key, text, token) {
  var expectedDesc = "Delete comment " + idAction + " from card " + idCard;
  return bp.EventSet("matchDeletedCardActionComment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardActionCommentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ comment\ (.+)\ from\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ comment\ (.+)\ from\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idAction", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card attachment ----

function addCardsAttachmentsByIdCard(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Add attachment to card " + idCard + " with name " + name;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idAttachment: String(idAttachment)
    }
  });
}

function deleteCardsAttachmentsByIdCardByIdAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Delete attachment " + idAttachment + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getCardsAttachmentsByIdCardByIdAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Get attachment " + idAttachment + " from card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardAttachment...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardAttachmentExists(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Verify CardAttachment exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardAttachment exists");
          }
        }
      }
      return pvg.fail("Expected CardAttachment to exist but it does not");
    }
  });
}

function verifyCardAttachmentDoesNotExist(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Verify CardAttachment does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardAttachment to not exist but it does");
          }
        }
      }
      return pvg.success("CardAttachment does not exist");
    }
  });
}

function tryToDeleteANonExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Verify we cannot delete non-existing CardAttachment";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var expectedDesc = "Add attachment to card " + idCard + " with name " + name;
  return bp.EventSet("matchAddedCardAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ attachment\ to\ card\ (.+)\ with\ name\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ attachment\ to\ card\ (.+)\ with\ name\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardAttachmentAddedEvent(keyVal) {
  return bp.EventSet("AddCardAttachment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardAttachmentAdded() {
  return bp.EventSet("matchAnyCardAttachmentAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card attachment") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardAttachmentAdded(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var expectedDesc = "Add attachment to card " + idCard + " with name " + name;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var expectedDesc = "Delete attachment " + idAttachment + " from card " + idCard;
  return bp.EventSet("matchDeletedCardAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ attachment\ (.+)\ from\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ attachment\ (.+)\ from\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idAttachment", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card checklist check item ----

function addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var description = "Add check item to checklist " + idChecklist + " on card " + idCard + " with name " + name;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
      , idChecklistCurrent: String(idChecklistCurrent)
    }
  });
}

function updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklistCurrent + "/checkItem/" + idCheckItem;
  var description = "Update check item " + idCheckItem + " in checklist " + idChecklistCurrent + " on card " + idCard + " with name " + name + ", pos " + pos + ", state " + state;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
      , idChecklistCurrent: String(idChecklistCurrent)
    }
  });
}

function deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem;
  var description = "Delete check item " + idCheckItem + " from checklist " + idChecklist + " on card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardChecklistCheckItem...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var description = "Verify CardChecklistCheckItem exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardChecklistCheckItem exists");
          }
        }
      }
      return pvg.fail("Expected CardChecklistCheckItem to exist but it does not");
    }
  });
}

function verifyCardChecklistCheckItemDoesNotExist(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var description = "Verify CardChecklistCheckItem does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardChecklistCheckItem to not exist but it does");
          }
        }
      }
      return pvg.success("CardChecklistCheckItem does not exist");
    }
  });
}

function tryToDeleteANonExistingCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem;
  var description = "Verify we cannot delete non-existing CardChecklistCheckItem";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var expectedDesc = "Add check item to checklist " + idChecklist + " on card " + idCard + " with name " + name;
  return bp.EventSet("matchAddedCardChecklistCheckItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardChecklistCheckItemAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ check\ item\ to\ checklist\ (.+)\ on\ card\ (.+)\ with\ name\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ check\ item\ to\ checklist\ (.+)\ on\ card\ (.+)\ with\ name\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idChecklist", "idCard", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardChecklistCheckItemAddedEvent(keyVal) {
  return bp.EventSet("AddCardChecklistCheckItem:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardChecklistCheckItemAdded() {
  return bp.EventSet("matchAnyCardChecklistCheckItemAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card checklist check item") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var expectedDesc = "Add check item to checklist " + idChecklist + " on card " + idCard + " with name " + name;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token) {
  var expectedDesc = "Delete check item " + idCheckItem + " from checklist " + idChecklist + " on card " + idCard;
  return bp.EventSet("matchDeletedCardChecklistCheckItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardChecklistCheckItemDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ check\ item\ (.+)\ from\ checklist\ (.+)\ on\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ check\ item\ (.+)\ from\ checklist\ (.+)\ on\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCheckItem", "idChecklist", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card checklist check item name ----

function updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, token, value) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/name";
  var description = "Update name of check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
    }
  });
}

// ---- Entity: card checklist check item pos ----

function updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, token, value) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/pos";
  var description = "Update position of check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
    }
  });
}

// ---- Entity: card checklist check item state ----

function updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, token, value) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/state";
  var description = "Update state of check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
    }
  });
}

// ---- Entity: card checklist ----

function addCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Add checklist to card " + idCard + " with name " + name;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idChecklist: String(idChecklist)
    }
  });
}

function deleteCardsChecklistsByIdCardByIdChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists/" + idChecklist;
  var description = "Delete checklist " + idChecklist + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Get checklists for card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardChecklist...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardChecklistExists(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Verify CardChecklist exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardChecklist exists");
          }
        }
      }
      return pvg.fail("Expected CardChecklist to exist but it does not");
    }
  });
}

function verifyCardChecklistDoesNotExist(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Verify CardChecklist does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardChecklist to not exist but it does");
          }
        }
      }
      return pvg.success("CardChecklist does not exist");
    }
  });
}

function tryToDeleteANonExistingCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists/" + idChecklist;
  var description = "Verify we cannot delete non-existing CardChecklist";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var expectedDesc = "Add checklist to card " + idCard + " with name " + name;
  return bp.EventSet("matchAddedCardChecklist", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardChecklistAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ checklist\ to\ card\ (.+)\ with\ name\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ checklist\ to\ card\ (.+)\ with\ name\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardChecklistAddedEvent(keyVal) {
  return bp.EventSet("AddCardChecklist:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardChecklistAdded() {
  return bp.EventSet("matchAnyCardChecklistAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card checklist") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardChecklistAdded(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var expectedDesc = "Add checklist to card " + idCard + " with name " + name;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var expectedDesc = "Delete checklist " + idChecklist + " from card " + idCard;
  return bp.EventSet("matchDeletedCardChecklist", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardChecklistDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ checklist\ (.+)\ from\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ checklist\ (.+)\ from\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idChecklist", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card id label ----

function addCardsIdLabelsByIdCard(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels";
  var description = "Add label " + value + " to card " + idCard;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idLabel: String(idLabel)
    }
  });
}

function deleteCardsIdLabelsByIdCardByIdLabel(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels/" + idLabel;
  var description = "Delete label " + idLabel + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCardIdLabels(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardIdLabels...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardIdLabelsExists(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels";
  var description = "Verify CardIdLabels exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardIdLabels exists");
          }
        }
      }
      return pvg.fail("Expected CardIdLabels to exist but it does not");
    }
  });
}

function verifyCardIdLabelsDoesNotExist(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels";
  var description = "Verify CardIdLabels does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardIdLabels to not exist but it does");
          }
        }
      }
      return pvg.success("CardIdLabels does not exist");
    }
  });
}

function tryToDeleteANonExistingCardIdLabels(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels/" + idLabel;
  var description = "Verify we cannot delete non-existing CardIdLabels";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardIdLabels(idCard, idLabel, key, token, value) {
  var expectedDesc = "Add label " + value + " to card " + idCard;
  return bp.EventSet("matchAddedCardIdLabels", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardIdLabelsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ label\ (.+)\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ label\ (.+)\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["value", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardIdLabelsAddedEvent(keyVal) {
  return bp.EventSet("AddCardIdLabels:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardIdLabelsAdded() {
  return bp.EventSet("matchAnyCardIdLabelsAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card id label") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardIdLabelsAdded(idCard, idLabel, key, token, value) {
  var expectedDesc = "Add label " + value + " to card " + idCard;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardIdLabels(idCard, idLabel, key, token, value) {
  var expectedDesc = "Delete label " + idLabel + " from card " + idCard;
  return bp.EventSet("matchDeletedCardIdLabels", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardIdLabelsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ label\ (.+)\ from\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ label\ (.+)\ from\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idLabel", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card id member ----

function addCardsIdMembersByIdCard(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Add member " + value + " to card " + idCard;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idMember: String(idMember)
    }
  });
}

function updateCardsIdMembersByIdCard(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Update members of card " + idCard + " with value " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idMember: String(idMember)
    }
  });
}

function deleteCardsIdMembersByIdCardByIdMember(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers/" + idMember;
  var description = "Delete member " + idMember + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCardIdMembers(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardIdMembers...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardIdMembersExists(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Verify CardIdMembers exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardIdMembers exists");
          }
        }
      }
      return pvg.fail("Expected CardIdMembers to exist but it does not");
    }
  });
}

function verifyCardIdMembersDoesNotExist(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Verify CardIdMembers does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardIdMembers to not exist but it does");
          }
        }
      }
      return pvg.success("CardIdMembers does not exist");
    }
  });
}

function tryToDeleteANonExistingCardIdMembers(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers/" + idMember;
  var description = "Verify we cannot delete non-existing CardIdMembers";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardIdMembers(idCard, idMember, key, token, value) {
  var expectedDesc = "Add member " + value + " to card " + idCard;
  return bp.EventSet("matchAddedCardIdMembers", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardIdMembersAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ member\ (.+)\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ member\ (.+)\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["value", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardIdMembersAddedEvent(keyVal) {
  return bp.EventSet("AddCardIdMembers:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardIdMembersAdded() {
  return bp.EventSet("matchAnyCardIdMembersAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card id member") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardIdMembersAdded(idCard, idMember, key, token, value) {
  var expectedDesc = "Add member " + value + " to card " + idCard;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardIdMembers(idCard, idMember, key, token, value) {
  var expectedDesc = "Delete member " + idMember + " from card " + idCard;
  return bp.EventSet("matchDeletedCardIdMembers", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardIdMembersDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ member\ (.+)\ from\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ member\ (.+)\ from\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card label ----

function addCardsLabelsByIdCard(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Add label with color " + color + " and name " + name + " to card " + idCard;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , color: String(color)
    }
  });
}

function updateCardsLabelsByIdCard(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Update label with color " + color + " and name " + name + " on card " + idCard;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
      , color: String(color)
    }
  });
}

function deleteCardsLabelsByIdCardByColor(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels/" + color;
  var description = "Delete label with color " + color + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCardLabel(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardLabel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardLabelExists(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Verify CardLabel exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardLabel exists");
          }
        }
      }
      return pvg.fail("Expected CardLabel to exist but it does not");
    }
  });
}

function verifyCardLabelDoesNotExist(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Verify CardLabel does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardLabel to not exist but it does");
          }
        }
      }
      return pvg.success("CardLabel does not exist");
    }
  });
}

function tryToDeleteANonExistingCardLabel(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels/" + color;
  var description = "Verify we cannot delete non-existing CardLabel";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardLabel(color, idCard, key, name, token, value) {
  var expectedDesc = "Add label with color " + color + " and name " + name + " to card " + idCard;
  return bp.EventSet("matchAddedCardLabel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardLabelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ label\ with\ color\ (.+)\ and\ name\ (.+)\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ label\ with\ color\ (.+)\ and\ name\ (.+)\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["color", "name", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardLabelAddedEvent(keyVal) {
  return bp.EventSet("AddCardLabel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardLabelAdded() {
  return bp.EventSet("matchAnyCardLabelAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card label") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardLabelAdded(color, idCard, key, name, token, value) {
  var expectedDesc = "Add label with color " + color + " and name " + name + " to card " + idCard;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardLabel(color, idCard, key, name, token, value) {
  var expectedDesc = "Delete label with color " + color + " from card " + idCard;
  return bp.EventSet("matchDeletedCardLabel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardLabelDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ label\ with\ color\ (.+)\ from\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ label\ with\ color\ (.+)\ from\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["color", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card member voted ----

function addCardsMembersVotedByIdCard(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Add member vote " + value + " to card " + idCard;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idMember: String(idMember)
    }
  });
}

function deleteCardsMembersVotedByIdCardByIdMember(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/membersVoted/" + idMember;
  var description = "Delete member vote " + idMember + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getCardsMembersVotedByIdCard(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Get members voted on card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingCardMemberVoted(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardMemberVoted...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardMemberVotedExists(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Verify CardMemberVoted exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardMemberVoted exists");
          }
        }
      }
      return pvg.fail("Expected CardMemberVoted to exist but it does not");
    }
  });
}

function verifyCardMemberVotedDoesNotExist(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Verify CardMemberVoted does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardMemberVoted to not exist but it does");
          }
        }
      }
      return pvg.success("CardMemberVoted does not exist");
    }
  });
}

function tryToDeleteANonExistingCardMemberVoted(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/membersVoted/" + idMember;
  var description = "Verify we cannot delete non-existing CardMemberVoted";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardMemberVoted(idCard, idMember, key, token, value) {
  var expectedDesc = "Add member vote " + value + " to card " + idCard;
  return bp.EventSet("matchAddedCardMemberVoted", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardMemberVotedAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ member\ vote\ (.+)\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ member\ vote\ (.+)\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["value", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardMemberVotedAddedEvent(keyVal) {
  return bp.EventSet("AddCardMemberVoted:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardMemberVotedAdded() {
  return bp.EventSet("matchAnyCardMemberVotedAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card member voted") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardMemberVotedAdded(idCard, idMember, key, token, value) {
  var expectedDesc = "Add member vote " + value + " to card " + idCard;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardMemberVoted(idCard, idMember, key, token, value) {
  var expectedDesc = "Delete member vote " + idMember + " from card " + idCard;
  return bp.EventSet("matchDeletedCardMemberVoted", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardMemberVotedDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ member\ vote\ (.+)\ from\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ member\ vote\ (.+)\ from\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card sticker ----

function addCardsStickersByIdCard(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Add sticker to card " + idCard + " with image " + image;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idSticker: String(idSticker)
    }
  });
}

function deleteCardsStickersByIdCardByIdSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Delete sticker " + idSticker + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getCardsStickersByIdCardByIdSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Get sticker " + idSticker + " from card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateCardsStickersByIdCardByIdSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Update sticker " + idSticker + " on card " + idCard + " with image " + image;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idSticker: String(idSticker)
    }
  });
}

function tryToAddExistingCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var body = {
    "idCard": String(idCard)
  };
  var description = "Verify that we cannot add another CardSticker...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyCardStickerExists(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Verify CardSticker exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardSticker exists");
          }
        }
      }
      return pvg.fail("Expected CardSticker to exist but it does not");
    }
  });
}

function verifyCardStickerDoesNotExist(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Verify CardSticker does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardSticker to not exist but it does");
          }
        }
      }
      return pvg.success("CardSticker does not exist");
    }
  });
}

function tryToDeleteANonExistingCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Verify we cannot delete non-existing CardSticker";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var expectedDesc = "Add sticker to card " + idCard + " with image " + image;
  return bp.EventSet("matchAddedCardSticker", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardStickerAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ sticker\ to\ card\ (.+)\ with\ image\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ sticker\ to\ card\ (.+)\ with\ image\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard", "image"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardStickerAddedEvent(keyVal) {
  return bp.EventSet("AddCardSticker:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardStickerAdded() {
  return bp.EventSet("matchAnyCardStickerAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create card sticker") > -1 && e.data.parameters.idCard !== undefined);
  });
}

function waitForCardStickerAdded(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var expectedDesc = "Add sticker to card " + idCard + " with image " + image;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex) {
  var expectedDesc = "Delete sticker " + idSticker + " from card " + idCard;
  return bp.EventSet("matchDeletedCardSticker", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardStickerDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ sticker\ (.+)\ from\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ sticker\ (.+)\ from\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idSticker", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card closed ----

function updateCardsClosedByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/closed";
  var description = "Update closed status of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: card desc ----

function updateCardsDescByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/desc";
  var description = "Update description of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: card due ----

function updateCardsDueByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/due";
  var description = "Update due date of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: card id attachment cover ----

function updateCardsIdAttachmentCoverByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/idAttachmentCover";
  var description = "Update attachment cover id of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: card id board ----

function updateCardsIdBoardByIdCard(idCard, idList, key, token, value) {
  var url = "/cards/" + idCard + "/idBoard";
  var description = "Update board id of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: card id list ----

function updateCardsIdListByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/idList";
  var description = "Update list id of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: card name ----

function updateCardsNameByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/name";
  var description = "Update name of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: card pos ----

function updateCardsPosByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/pos";
  var description = "Update position of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: card subscribed ----

function updateCardsSubscribedByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/subscribed";
  var description = "Update subscribed status of card " + idCard + " to " + value;
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
}

// ---- Entity: action ----

function deleteActionsByIdAction(idAction) {
  var url = "/actions/" + idAction;
  var description = "Delete action with id " + idAction;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getActionsByIdAction(idAction) {
  var url = "/actions/" + idAction;
  var description = "Get action with id " + idAction;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateActionsByIdAction(idAction) {
  var url = "/actions/" + idAction;
  var description = "Update action with id " + idAction + " and text {text}";
  var body = {
    "idAction": String(idAction),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idAction: String(idAction)
    }
  });
}

function verifyActionExists(idAction) {
  var url = "/actions";
  var description = "Verify Action exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idAction) === String(idAction)) {
            return pvg.success("Action exists");
          }
        }
      }
      return pvg.fail("Expected Action to exist but it does not");
    }
  });
}

function verifyActionDoesNotExist(idAction) {
  var url = "/actions";
  var description = "Verify Action does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idAction) === String(idAction)) {
            return pvg.fail("Expected Action to not exist but it does");
          }
        }
      }
      return pvg.success("Action does not exist");
    }
  });
}

function tryToDeleteANonExistingAction(idAction) {
  var url = "/actions/" + idAction;
  var description = "Verify we cannot delete non-existing Action";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedAction(idAction) {
  var expectedDesc = "Delete action with id " + idAction;
  return bp.EventSet("matchDeletedAction", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyActionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ action\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ action\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idAction"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: action text ----

function updateActionsTextByIdAction(idAction) {
  var url = "/actions/" + idAction + "/text";
  var description = "Update action text for action id " + idAction + " with value {value}";
  var body = {
    "idAction": String(idAction),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idAction: String(idAction)
    }
  });
}

// ---- Entity: session ----

function addSessions(idSession, key, token) {
  var url = "/sessions";
  var description = "Create session with idBoard {idBoard} and status {status}";
  var body = {
    "idSession": String(idSession),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      idSession: String(idSession)
    }
  });
}

function getSessionsSocket(idSession, key, token) {
  var url = "/sessions/socket";
  var description = "Get sessions socket";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateSessionsByIdSession(idSession, key, token) {
  var url = "/sessions/" + idSession;
  var description = "Update session " + idSession + " with idBoard {idBoard} and status {status}";
  var body = {
    "idSession": String(idSession),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idSession: String(idSession)
    }
  });
}

function updateSessionsStatusByIdSession(idSession, key, token) {
  var url = "/sessions/" + idSession + "/status";
  var description = "Update session status " + idSession + " with status {value}";
  var body = {
    "idSession": String(idSession),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      idSession: String(idSession)
    }
  });
}

function tryToAddExistingSession(idSession, key, token) {
  var url = "/sessions";
  var body = {
    "idSession": String(idSession)
  };
  var description = "Verify that we cannot add another Session...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifySessionExists(idSession, key, token) {
  var url = "/sessions";
  var description = "Verify Session exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idSession) === String(idSession)) {
            return pvg.success("Session exists");
          }
        }
      }
      return pvg.fail("Expected Session to exist but it does not");
    }
  });
}

function verifySessionDoesNotExist(idSession, key, token) {
  var url = "/sessions";
  var description = "Verify Session does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idSession) === String(idSession)) {
            return pvg.fail("Expected Session to not exist but it does");
          }
        }
      }
      return pvg.success("Session does not exist");
    }
  });
}

function matchAddedSession(idSession, key, token) {
  var expectedDesc = "Create session with idBoard {idBoard} and status {status}";
  return bp.EventSet("matchAddedSession", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySessionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ session\ with\ idBoard\ (.+)\ and\ status\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ session\ with\ idBoard\ (.+)\ and\ status\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idBoard", "status"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getSessionAddedEvent(keyVal) {
  return bp.EventSet("AddSession:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idSession) === String(keyVal);
  });
}

function matchAnySessionAdded() {
  return bp.EventSet("matchAnySessionAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create session") > -1 && e.data.parameters.idSession !== undefined);
  });
}

function waitForSessionAdded(idSession, key, token) {
  var expectedDesc = "Create session with idBoard {idBoard} and status {status}";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: search ----

function getSearch(idOrganizations, key, query, token) {
  var url = "/search";
  var description = "Search with query " + query + " in organizations " + idOrganizations;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifySearchExists(idOrganizations, key, query, token) {
  var url = "/search";
  var description = "Verify Search exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrganizations) === String(idOrganizations)) {
            return pvg.success("Search exists");
          }
        }
      }
      return pvg.fail("Expected Search to exist but it does not");
    }
  });
}

function verifySearchDoesNotExist(idOrganizations, key, query, token) {
  var url = "/search";
  var description = "Verify Search does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrganizations) === String(idOrganizations)) {
            return pvg.fail("Expected Search to not exist but it does");
          }
        }
      }
      return pvg.success("Search does not exist");
    }
  });
}

// ---- Entity: searchMember ----

function getSearchMembers(key, query, token) {
  var url = "/search/members";
  var description = "Search members with query " + query;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifySearchMembersExists(key, query, token) {
  var url = "/search/members";
  var description = "Verify SearchMembers exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].key) === String(key) && String(items[i].query) === String(query) && String(items[i].token) === String(token)) {
            return pvg.success("SearchMembers exists");
          }
        }
      }
      return pvg.fail("Expected SearchMembers to exist but it does not");
    }
  });
}

function verifySearchMembersDoesNotExist(key, query, token) {
  var url = "/search/members";
  var description = "Verify SearchMembers does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].key) === String(key) && String(items[i].query) === String(query) && String(items[i].token) === String(token)) {
            return pvg.fail("Expected SearchMembers to not exist but it does");
          }
        }
      }
      return pvg.success("SearchMembers does not exist");
    }
  });
}

// ---- Entity: type ----

function getTypesById(id, key, token) {
  var url = "/types/" + id;
  var description = "Get type with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyTypeExists(id, key, token) {
  var url = "/types";
  var description = "Verify Type exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Type exists");
          }
        }
      }
      return pvg.fail("Expected Type to exist but it does not");
    }
  });
}

function verifyTypeDoesNotExist(id, key, token) {
  var url = "/types";
  var description = "Verify Type does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Type to not exist but it does");
          }
        }
      }
      return pvg.success("Type does not exist");
    }
  });
}
