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

// ---- Entity: board ----

function addBoards(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  var url = "/boards";
  var description = "Create board with id " + idBoard;
  var body = {
    "closed": String(closed),
    "desc": String(desc),
    "idBoard": String(idBoard),
    "idBoardSource": String(idBoardSource),
    "idOrganization": String(idOrganization),
    "keepFromSource": String(keepFromSource),
    "labelNames/blue": String(labelNames/blue),
    "labelNames/green": String(labelNames/green),
    "labelNames/orange": String(labelNames/orange),
    "labelNames/purple": String(labelNames/purple),
    "labelNames/red": String(labelNames/red),
    "labelNames/yellow": String(labelNames/yellow),
    "name": String(name),
    "powerUps": String(powerUps),
    "prefs/background": String(prefs/background),
    "prefs/calendarFeedEnabled": String(prefs/calendarFeedEnabled),
    "prefs/cardAging": String(prefs/cardAging),
    "prefs/cardCovers": String(prefs/cardCovers),
    "prefs/comments": String(prefs/comments),
    "prefs/invitations": String(prefs/invitations),
    "prefs/permissionLevel": String(prefs/permissionLevel),
    "prefs/selfJoin": String(prefs/selfJoin),
    "prefs/voting": String(prefs/voting),
    "prefs_background": String(prefs_background),
    "prefs_cardAging": String(prefs_cardAging),
    "prefs_cardCovers": String(prefs_cardCovers),
    "prefs_comments": String(prefs_comments),
    "prefs_invitations": String(prefs_invitations),
    "prefs_permissionLevel": String(prefs_permissionLevel),
    "prefs_selfJoin": String(prefs_selfJoin),
    "prefs_voting": String(prefs_voting),
    "subscribed": String(subscribed),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

function getBoardsByIdBoard(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  var url = "/boards/" + idBoard;
  var description = "Get board with id " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateBoardsByIdBoard(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  var url = "/boards/" + idBoard;
  var description = "Update board with id " + idBoard;
  var body = {
    "closed": String(closed),
    "desc": String(desc),
    "idBoard": String(idBoard),
    "idBoardSource": String(idBoardSource),
    "idOrganization": String(idOrganization),
    "keepFromSource": String(keepFromSource),
    "labelNames/blue": String(labelNames/blue),
    "labelNames/green": String(labelNames/green),
    "labelNames/orange": String(labelNames/orange),
    "labelNames/purple": String(labelNames/purple),
    "labelNames/red": String(labelNames/red),
    "labelNames/yellow": String(labelNames/yellow),
    "name": String(name),
    "powerUps": String(powerUps),
    "prefs/background": String(prefs/background),
    "prefs/calendarFeedEnabled": String(prefs/calendarFeedEnabled),
    "prefs/cardAging": String(prefs/cardAging),
    "prefs/cardCovers": String(prefs/cardCovers),
    "prefs/comments": String(prefs/comments),
    "prefs/invitations": String(prefs/invitations),
    "prefs/permissionLevel": String(prefs/permissionLevel),
    "prefs/selfJoin": String(prefs/selfJoin),
    "prefs/voting": String(prefs/voting),
    "prefs_background": String(prefs_background),
    "prefs_cardAging": String(prefs_cardAging),
    "prefs_cardCovers": String(prefs_cardCovers),
    "prefs_comments": String(prefs_comments),
    "prefs_invitations": String(prefs_invitations),
    "prefs_permissionLevel": String(prefs_permissionLevel),
    "prefs_selfJoin": String(prefs_selfJoin),
    "prefs_voting": String(prefs_voting),
    "subscribed": String(subscribed),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

function updateBoardsClosedByIdBoard(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  var url = "/boards/" + idBoard + "/closed";
  var description = "Update closed status of board with id " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

function tryToAddExistingBoard(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  updateBoardsClosedByIdBoard(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed);
}

function verifyBoardExists(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  var url = "/boards";
  var description = "Verify Board with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("Board exists");
          }
        }
      }
      return pvg.fail("Expected Board to exist but it does not");
    }
  });
}

function verifyBoardDoesNotExist(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  var url = "/boards";
  var description = "Verify Board with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected Board to not exist but it does");
          }
        }
      }
      return pvg.success("Board does not exist");
    }
  });
}

function matchAddedBoard(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  var expectedDesc = "Create board with id " + idBoard;
  return matchSuccess(expectedDesc);
}

function waitForAnyBoardAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ board\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ board\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idBoard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBoardAddedEvent(keyVal) {
  return bp.EventSet("AddBoard:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idBoard) === String(keyVal);
  });
}

function matchAnyBoardAdded() {
  return bp.EventSet("matchAnyBoardAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idBoard !== undefined && e.name.indexOf("Create board") > -1;
  });
}

function waitForBoardAdded(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed) {
  var expectedDesc = "Create board with id " + idBoard;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: board action ----

function getBoardsActionsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/actions";
  var description = "Get actions for board with id " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyBoardActionsExists(idBoard) {
  var url = "/boards";
  var description = "Verify BoardActions with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardActions exists");
          }
        }
      }
      return pvg.fail("Expected BoardActions to exist but it does not");
    }
  });
}

function verifyBoardActionsDoesNotExist(idBoard) {
  var url = "/boards";
  var description = "Verify BoardActions with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardActions to not exist but it does");
          }
        }
      }
      return pvg.success("BoardActions does not exist");
    }
  });
}

// ---- Entity: board star ----

function getBoardsBoardStarsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/boardStars";
  var description = "Get board stars for board with id " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyBoardStarExists(idBoard) {
  var url = "/boards";
  var description = "Verify BoardStar with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardStar exists");
          }
        }
      }
      return pvg.fail("Expected BoardStar to exist but it does not");
    }
  });
}

function verifyBoardStarDoesNotExist(idBoard) {
  var url = "/boards";
  var description = "Verify BoardStar with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardStar to not exist but it does");
          }
        }
      }
      return pvg.success("BoardStar does not exist");
    }
  });
}

// ---- Entity: board calendar key ----

function addBoardsCalendarKeyGenerateByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/calendarKey/generate";
  var description = "Generate calendar key for board with id " + idBoard;
  var body = {
    "idBoard": String(idBoard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingBoardCalendarKey(idBoard) {
  addBoardsCalendarKeyGenerateByIdBoard(idBoard);
}

function verifyBoardCalendarKeyExists(idBoard) {
  var url = "/boards/" + idBoard + "/calendarKey/generate";
  var description = "Verify BoardCalendarKey exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardCalendarKey exists");
          }
        }
      }
      return pvg.fail("Expected BoardCalendarKey to exist but it does not");
    }
  });
}

function verifyBoardCalendarKeyDoesNotExist(idBoard) {
  var url = "/boards/" + idBoard + "/calendarKey/generate";
  var description = "Verify BoardCalendarKey does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardCalendarKey to not exist but it does");
          }
        }
      }
      return pvg.success("BoardCalendarKey does not exist");
    }
  });
}

function matchAddedBoardCalendarKey(idBoard) {
  var expectedDesc = "Generate calendar key for board with id " + idBoard;
  return matchSuccess(expectedDesc);
}

function waitForAnyBoardCalendarKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Generate\ calendar\ key\ for\ board\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Generate\ calendar\ key\ for\ board\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idBoard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBoardCalendarKeyAddedEvent(keyVal) {
  return bp.EventSet("AddBoardCalendarKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyBoardCalendarKeyAdded() {
  return bp.EventSet("matchAnyBoardCalendarKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create board calendar key") > -1;
  });
}

function waitForBoardCalendarKeyAdded(idBoard) {
  var expectedDesc = "Generate calendar key for board with id " + idBoard;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: card ----

function getCardsByIdCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var url = "/cards/" + idCard;
  var description = "Get card with id " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addCards(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var url = "/cards";
  var description = "Create card with id " + idCard;
  var body = {
    "closed": String(closed),
    "desc": String(desc),
    "due": String(due),
    "fileSource": String(fileSource),
    "idAttachmentCover": String(idAttachmentCover),
    "idBoard": String(idBoard),
    "idCard": String(idCard),
    "idCardSource": String(idCardSource),
    "idLabels": String(idLabels),
    "idList": String(idList),
    "idMembers": String(idMembers),
    "keepFromSource": String(keepFromSource),
    "key": String(key),
    "labels": String(labels),
    "name": String(name),
    "pos": String(pos),
    "subscribed": String(subscribed),
    "token": String(token),
    "urlSource": String(urlSource),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idBoard: String(idBoard)
      , idList: String(idList)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function deleteCardsByIdCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var url = "/cards/" + idCard;
  var description = "Delete card with id " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateCardsByIdCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var url = "/cards/" + idCard;
  var description = "Update card with id " + idCard;
  var body = {
    "closed": String(closed),
    "desc": String(desc),
    "due": String(due),
    "fileSource": String(fileSource),
    "idAttachmentCover": String(idAttachmentCover),
    "idBoard": String(idBoard),
    "idCard": String(idCard),
    "idCardSource": String(idCardSource),
    "idLabels": String(idLabels),
    "idList": String(idList),
    "idMembers": String(idMembers),
    "keepFromSource": String(keepFromSource),
    "key": String(key),
    "labels": String(labels),
    "name": String(name),
    "pos": String(pos),
    "subscribed": String(subscribed),
    "token": String(token),
    "urlSource": String(urlSource),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idBoard: String(idBoard)
      , idList: String(idList)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function tryToAddExistingCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  updateCardsByIdCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
}

function verifyCardExists(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var url = "/cards";
  var description = "Verify Card with idCard " + idCard + " exists";
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

function verifyCardDoesNotExist(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var url = "/cards";
  var description = "Verify Card with idCard " + idCard + " does not exist";
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

function tryToDeleteANonExistingCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var url = "/cards/" + idCard;
  var description = "Verify we cannot delete non-existing Card";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var expectedDesc = "Create card with id " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ card\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ card\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create card") > -1;
  });
}

function waitForCardAdded(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var expectedDesc = "Create card with id " + idCard;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource) {
  var expectedDesc = "Delete card with id " + idCard;
  return bp.EventSet("matchDeletedCard", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ card\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ card\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card ----

function getBoardsCardsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/cards";
  var description = "Get cards for board with id " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyCardsExists(idBoard) {
  var url = "/boards";
  var description = "Verify Cards with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("Cards exists");
          }
        }
      }
      return pvg.fail("Expected Cards to exist but it does not");
    }
  });
}

function verifyCardsDoesNotExist(idBoard) {
  var url = "/boards";
  var description = "Verify Cards with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected Cards to not exist but it does");
          }
        }
      }
      return pvg.success("Cards does not exist");
    }
  });
}

// ---- Entity: card ----

function getBoardsCardsByIdBoardByFilter(filter, idBoard) {
  var url = "/boards/" + idBoard + "/cards/" + filter;
  var description = "Get cards with filter " + filter + " for board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyCardsByFilterExists(filter, idBoard) {
  var url = "/boards";
  var description = "Verify CardsByFilter with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("CardsByFilter exists");
          }
        }
      }
      return pvg.fail("Expected CardsByFilter to exist but it does not");
    }
  });
}

function verifyCardsByFilterDoesNotExist(filter, idBoard) {
  var url = "/boards";
  var description = "Verify CardsByFilter with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected CardsByFilter to not exist but it does");
          }
        }
      }
      return pvg.success("CardsByFilter does not exist");
    }
  });
}

// ---- Entity: checklist ----

function addChecklists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/checklists";
  var description = "Create checklist " + idChecklist;
  var body = {
    "idBoard": String(idBoard),
    "idCard": String(idCard),
    "idChecklist": String(idChecklist),
    "idChecklistSource": String(idChecklistSource),
    "name": String(name),
    "pos": String(pos),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idChecklist: String(idChecklist)
      , field: String(field)
      , idBoard: String(idBoard)
      , idCard: String(idCard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idChecklist: String(idChecklist) }) });
}

function getChecklistsByIdChecklistByField(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/checklists/" + idChecklist + "/" + field;
  var description = "Get checklist " + idChecklist + " field " + field;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function deleteChecklistsByIdChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/checklists/" + idChecklist;
  var description = "Delete checklist " + idChecklist;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateChecklistsPosByIdChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/checklists/" + idChecklist + "/pos";
  var description = "Update checklists pos for checklist " + idChecklist;
  var body = {
    "idChecklist": String(idChecklist),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idChecklist: String(idChecklist)
      , field: String(field)
      , idBoard: String(idBoard)
      , idCard: String(idCard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idChecklist: String(idChecklist) }) });
}

function tryToAddExistingChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  updateChecklistsPosByIdChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
}

function verifyChecklistExists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/checklists";
  var description = "Verify Checklist with idChecklist " + idChecklist + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idChecklist) === String(idChecklist)) {
            return pvg.success("Checklist exists");
          }
        }
      }
      return pvg.fail("Expected Checklist to exist but it does not");
    }
  });
}

function verifyChecklistDoesNotExist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/checklists";
  var description = "Verify Checklist with idChecklist " + idChecklist + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idChecklist) === String(idChecklist)) {
            return pvg.fail("Expected Checklist to not exist but it does");
          }
        }
      }
      return pvg.success("Checklist does not exist");
    }
  });
}

function tryToDeleteANonExistingChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var url = "/checklists/" + idChecklist;
  var description = "Verify we cannot delete non-existing Checklist";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var expectedDesc = "Create checklist " + idChecklist;
  return matchSuccess(expectedDesc);
}

function waitForAnyChecklistAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ checklist\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ checklist\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idChecklist"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getChecklistAddedEvent(keyVal) {
  return bp.EventSet("AddChecklist:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idChecklist) === String(keyVal);
  });
}

function matchAnyChecklistAdded() {
  return bp.EventSet("matchAnyChecklistAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idChecklist !== undefined && e.name.indexOf("Create checklist") > -1;
  });
}

function waitForChecklistAdded(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var expectedDesc = "Create checklist " + idChecklist;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token) {
  var expectedDesc = "Delete checklist " + idChecklist;
  return bp.EventSet("matchDeletedChecklist", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyChecklistDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ checklist\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ checklist\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idChecklist"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: board delta ----

function getBoardDeltasByIdBoard(idBoard, ixLastUpdate, key, tags, token) {
  var url = "/boards/" + idBoard + "/deltas";
  var description = "Get board deltas for board " + idBoard + " with tags " + tags + " and last update index " + ixLastUpdate;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyBoardDeltasExists(idBoard, ixLastUpdate, key, tags, token) {
  var url = "/boards";
  var description = "Verify BoardDeltas with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardDeltas exists");
          }
        }
      }
      return pvg.fail("Expected BoardDeltas to exist but it does not");
    }
  });
}

function verifyBoardDeltasDoesNotExist(idBoard, ixLastUpdate, key, tags, token) {
  var url = "/boards";
  var description = "Verify BoardDeltas with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardDeltas to not exist but it does");
          }
        }
      }
      return pvg.success("BoardDeltas does not exist");
    }
  });
}

// ---- Entity: board description ----

function updateBoardDescByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/desc";
  var description = "Update board description for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board email key ----

function addBoardEmailKeyGenerateByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/emailKey/generate";
  var description = "Generate email key for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingBoardEmailKey(idBoard, key, token) {
  addBoardEmailKeyGenerateByIdBoard(idBoard, key, token);
}

function verifyBoardEmailKeyExists(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/emailKey/generate";
  var description = "Verify BoardEmailKey exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardEmailKey exists");
          }
        }
      }
      return pvg.fail("Expected BoardEmailKey to exist but it does not");
    }
  });
}

function verifyBoardEmailKeyDoesNotExist(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/emailKey/generate";
  var description = "Verify BoardEmailKey does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardEmailKey to not exist but it does");
          }
        }
      }
      return pvg.success("BoardEmailKey does not exist");
    }
  });
}

function matchAddedBoardEmailKey(idBoard, key, token) {
  var expectedDesc = "Generate email key for board " + idBoard;
  return matchSuccess(expectedDesc);
}

function waitForAnyBoardEmailKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Generate\ email\ key\ for\ board\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Generate\ email\ key\ for\ board\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idBoard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBoardEmailKeyAddedEvent(keyVal) {
  return bp.EventSet("AddBoardEmailKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyBoardEmailKeyAdded() {
  return bp.EventSet("matchAnyBoardEmailKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create board email key") > -1;
  });
}

function waitForBoardEmailKeyAdded(idBoard, key, token) {
  var expectedDesc = "Generate email key for board " + idBoard;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: board organization id ----

function updateBoardIdOrganizationByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/idOrganization";
  var description = "Update board organization id for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board label name blue ----

function updateBoardLabelNamesBlueByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/labelNames/blue";
  var description = "Update blue label name for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board label name green ----

function updateBoardLabelNamesGreenByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/labelNames/green";
  var description = "Update green label name for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board label name orange ----

function updateBoardLabelNamesOrangeByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/labelNames/orange";
  var description = "Update orange label name for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board label name purple ----

function updateBoardLabelNamesPurpleByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/labelNames/purple";
  var description = "Update purple label name for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board label name red ----

function updateBoardLabelNamesRedByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/labelNames/red";
  var description = "Update red label name for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board label name yellow ----

function updateBoardLabelNamesYellowByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/labelNames/yellow";
  var description = "Update yellow label name for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: label ----

function addLabels(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels";
  var description = "Create label with id " + idLabel;
  var body = {
    "color": String(color),
    "idBoard": String(idBoard),
    "idLabel": String(idLabel),
    "key": String(key),
    "name": String(name),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idLabel: String(idLabel)
      , color: String(color)
      , idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idLabel: String(idLabel) }) });
}

function getLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Get label with id " + idLabel;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getBoardsLabelsByIdBoardByIdLabel(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/boards/" + idBoard + "/labels/" + idLabel;
  var description = "Get label " + idLabel + " of board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function deleteLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Delete label with id " + idLabel;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Update label with id " + idLabel;
  var body = {
    "color": String(color),
    "idBoard": String(idBoard),
    "idLabel": String(idLabel),
    "key": String(key),
    "name": String(name),
    "token": String(token),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idLabel: String(idLabel)
      , color: String(color)
      , idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idLabel: String(idLabel) }) });
}

function tryToAddExistingLabel(color, fields, idBoard, idLabel, key, name, token) {
  updateLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token);
}

function verifyLabelExists(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels";
  var description = "Verify Label with idLabel " + idLabel + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idLabel) === String(idLabel)) {
            return pvg.success("Label exists");
          }
        }
      }
      return pvg.fail("Expected Label to exist but it does not");
    }
  });
}

function verifyLabelDoesNotExist(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels";
  var description = "Verify Label with idLabel " + idLabel + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idLabel) === String(idLabel)) {
            return pvg.fail("Expected Label to not exist but it does");
          }
        }
      }
      return pvg.success("Label does not exist");
    }
  });
}

function tryToDeleteANonExistingLabel(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Verify we cannot delete non-existing Label";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedLabel(color, fields, idBoard, idLabel, key, name, token) {
  var expectedDesc = "Create label with id " + idLabel;
  return matchSuccess(expectedDesc);
}

function waitForAnyLabelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ label\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ label\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idLabel"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getLabelAddedEvent(keyVal) {
  return bp.EventSet("AddLabel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idLabel) === String(keyVal);
  });
}

function matchAnyLabelAdded() {
  return bp.EventSet("matchAnyLabelAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idLabel !== undefined && e.name.indexOf("Create label") > -1;
  });
}

function waitForLabelAdded(color, fields, idBoard, idLabel, key, name, token) {
  var expectedDesc = "Create label with id " + idLabel;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedLabel(color, fields, idBoard, idLabel, key, name, token) {
  var expectedDesc = "Delete label with id " + idLabel;
  return bp.EventSet("matchDeletedLabel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLabelDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ label\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ label\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idLabel"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: list ----

function addLists(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists";
  var description = "Create list with id " + idList + " and name " + name;
  var body = {
    "closed": String(closed),
    "idBoard": String(idBoard),
    "idList": String(idList),
    "idListSource": String(idListSource),
    "name": String(name),
    "pos": String(pos),
    "subscribed": String(subscribed),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
      , field: String(field)
      , filter: String(filter)
      , idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

function getListsByIdList(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists/" + idList;
  var description = "Get list with id " + idList;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getBoardsListsByIdBoardByFilter(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/boards/" + idBoard + "/lists/" + filter;
  var description = "Get lists of board " + idBoard + " filtered by " + filter;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateListsByIdList(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists/" + idList;
  var description = "Update list with id " + idList + " and name " + name;
  var body = {
    "closed": String(closed),
    "idBoard": String(idBoard),
    "idList": String(idList),
    "idListSource": String(idListSource),
    "name": String(name),
    "pos": String(pos),
    "subscribed": String(subscribed),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
      , field: String(field)
      , filter: String(filter)
      , idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

function updateListsNameByIdList(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists/" + idList + "/name";
  var description = "Update list " + idList + " name";
  var body = {
    "idList": String(idList),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
      , field: String(field)
      , filter: String(filter)
      , idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

function updateListsPosByIdList(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists/" + idList + "/pos";
  var description = "Update list " + idList + " position";
  var body = {
    "idList": String(idList),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
      , field: String(field)
      , filter: String(filter)
      , idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

function updateListsSubscribedByIdList(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists/" + idList + "/subscribed";
  var description = "Update list " + idList + " subscribed status";
  var body = {
    "idList": String(idList),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
      , field: String(field)
      , filter: String(filter)
      , idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

function addListsMoveAllCardsByIdList(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists/" + idList + "/moveAllCards";
  var description = "Move all cards in list " + idList;
  var body = {
    "idBoard": String(idBoard),
    "idList": String(idList),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
      , field: String(field)
      , filter: String(filter)
      , idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

function getListsByIdListByField(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists/" + idList + "/" + field;
  var description = "Get list " + idList + " field " + field;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingList(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  getListsByIdListByField(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed);
}

function verifyListExists(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists";
  var description = "Verify List with idList " + idList + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idList) === String(idList)) {
            return pvg.success("List exists");
          }
        }
      }
      return pvg.fail("Expected List to exist but it does not");
    }
  });
}

function verifyListDoesNotExist(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var url = "/lists";
  var description = "Verify List with idList " + idList + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idList) === String(idList)) {
            return pvg.fail("Expected List to not exist but it does");
          }
        }
      }
      return pvg.success("List does not exist");
    }
  });
}

function matchAddedList(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var expectedDesc = "Create list with id " + idList + " and name " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyListAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ list\ with\ id\ (.+)\ and\ name\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ list\ with\ id\ (.+)\ and\ name\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idList", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getListAddedEvent(keyVal) {
  return bp.EventSet("AddList:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idList) === String(keyVal);
  });
}

function matchAnyListAdded() {
  return bp.EventSet("matchAnyListAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idList !== undefined && e.name.indexOf("Create list") > -1;
  });
}

function waitForListAdded(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed) {
  var expectedDesc = "Create list with id " + idList + " and name " + name;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: member ----

function getMemberByIdMember(filter, idBoard, idMember, key, token) {
  var url = "/members/" + idMember;
  var description = "Get member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getBoardsMembersByIdBoardByFilter(filter, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + filter;
  var description = "Get members of board " + idBoard + " filtered by " + filter;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateMemberByIdMember(filter, idBoard, idMember, key, token) {
  var url = "/members/" + idMember;
  var description = "Update member " + idMember;
  var body = {
    "avatarSource": "avatarSource_dummy",
    "bio": "bio_dummy",
    "fullName": "fullName_dummy",
    "idMember": String(idMember),
    "initials": "initials_dummy",
    "key": String(key),
    "prefs/colorBlind": "prefs/colorBlind_dummy",
    "prefs/locale": "prefs/locale_dummy",
    "prefs/minutesBetweenSummaries": "prefs/minutesBetweenSummaries_dummy",
    "token": String(token),
    "username": "username_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , filter: String(filter)
      , idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function deleteBoardsMembersByIdBoardByIdMember(filter, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "Delete member " + idMember + " from board " + idBoard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateBoardsMembersByIdBoardByIdMember(filter, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "Update member " + idMember + " of board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "idMember": String(idMember),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , filter: String(filter)
      , idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function getBoardsMembersCardsByIdBoardByIdMember(filter, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember + "/cards";
  var description = "Get cards of member " + idMember + " on board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMemberExists(filter, idBoard, idMember, key, token) {
  var url = "/members";
  var description = "Verify Member with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("Member exists");
          }
        }
      }
      return pvg.fail("Expected Member to exist but it does not");
    }
  });
}

function verifyMemberDoesNotExist(filter, idBoard, idMember, key, token) {
  var url = "/members";
  var description = "Verify Member with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected Member to not exist but it does");
          }
        }
      }
      return pvg.success("Member does not exist");
    }
  });
}

// ---- Entity: membersInvited ----

function getBoardsMembersInvitedByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/membersInvited";
  var description = "Get invited members of board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersInvitedExists(idBoard) {
  var url = "/boards";
  var description = "Verify MembersInvited with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("MembersInvited exists");
          }
        }
      }
      return pvg.fail("Expected MembersInvited to exist but it does not");
    }
  });
}

function verifyMembersInvitedDoesNotExist(idBoard) {
  var url = "/boards";
  var description = "Verify MembersInvited with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected MembersInvited to not exist but it does");
          }
        }
      }
      return pvg.success("MembersInvited does not exist");
    }
  });
}

// ---- Entity: markAsViewed ----

function addBoardsMarkAsViewedByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/markAsViewed";
  var description = "Mark board " + idBoard + " as viewed";
  var body = {
    "idBoard": String(idBoard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMarkAsViewed(idBoard) {
  addBoardsMarkAsViewedByIdBoard(idBoard);
}

function verifyMarkAsViewedExists(idBoard) {
  var url = "/boards/" + idBoard + "/markAsViewed";
  var description = "Verify MarkAsViewed exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("MarkAsViewed exists");
          }
        }
      }
      return pvg.fail("Expected MarkAsViewed to exist but it does not");
    }
  });
}

function verifyMarkAsViewedDoesNotExist(idBoard) {
  var url = "/boards/" + idBoard + "/markAsViewed";
  var description = "Verify MarkAsViewed does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected MarkAsViewed to not exist but it does");
          }
        }
      }
      return pvg.success("MarkAsViewed does not exist");
    }
  });
}

function matchAddedMarkAsViewed(idBoard) {
  var expectedDesc = "Mark board " + idBoard + " as viewed";
  return matchSuccess(expectedDesc);
}

function waitForAnyMarkAsViewedAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Mark\ board\ (.+)\ as\ viewed$/));
  var m = ev.data.parameters.description.match(/^Mark\ board\ (.+)\ as\ viewed$/);
  var captures = m.slice(1);
  var names = ["idBoard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMarkAsViewedAddedEvent(keyVal) {
  return bp.EventSet("AddMarkAsViewed:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMarkAsViewedAdded() {
  return bp.EventSet("matchAnyMarkAsViewedAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create markAsViewed") > -1;
  });
}

function waitForMarkAsViewedAdded(idBoard) {
  var expectedDesc = "Mark board " + idBoard + " as viewed";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: boardsMembersInvited ----

function getBoardsMembersInvitedByIdBoardByField(field, idBoard) {
  var url = "/boards/" + idBoard + "/membersInvited/" + field;
  var description = "Get boards members invited for board " + idBoard + " by field " + field;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyBoardsMembersInvitedExists(field, idBoard) {
  var url = "/boards";
  var description = "Verify BoardsMembersInvited with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardsMembersInvited exists");
          }
        }
      }
      return pvg.fail("Expected BoardsMembersInvited to exist but it does not");
    }
  });
}

function verifyBoardsMembersInvitedDoesNotExist(field, idBoard) {
  var url = "/boards";
  var description = "Verify BoardsMembersInvited with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardsMembersInvited to not exist but it does");
          }
        }
      }
      return pvg.success("BoardsMembersInvited does not exist");
    }
  });
}

// ---- Entity: boardsMemberships ----

function getBoardsMembershipsByIdBoardByIdMembership(idBoard, idMembership) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Get boards membership " + idMembership + " for board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateBoardsMembershipsByIdBoardByIdMembership(idBoard, idMembership) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Update boards membership " + idMembership + " for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "idMembership": String(idMembership),
    "member_fields": "member_fields_dummy",
    "type": "type_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , idMembership: String(idMembership)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

function verifyBoardsMembershipsExists(idBoard, idMembership) {
  var url = "/boards";
  var description = "Verify BoardsMemberships with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardsMemberships exists");
          }
        }
      }
      return pvg.fail("Expected BoardsMemberships to exist but it does not");
    }
  });
}

function verifyBoardsMembershipsDoesNotExist(idBoard, idMembership) {
  var url = "/boards";
  var description = "Verify BoardsMemberships with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardsMemberships to not exist but it does");
          }
        }
      }
      return pvg.success("BoardsMemberships does not exist");
    }
  });
}

// ---- Entity: boardsMemberships ----

function getBoardsMembershipsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/memberships";
  var description = "Get boards memberships for board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyBoardsMembershipsCollectionExists(idBoard) {
  var url = "/boards";
  var description = "Verify BoardsMembershipsCollection with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardsMembershipsCollection exists");
          }
        }
      }
      return pvg.fail("Expected BoardsMembershipsCollection to exist but it does not");
    }
  });
}

function verifyBoardsMembershipsCollectionDoesNotExist(idBoard) {
  var url = "/boards";
  var description = "Verify BoardsMembershipsCollection with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardsMembershipsCollection to not exist but it does");
          }
        }
      }
      return pvg.success("BoardsMembershipsCollection does not exist");
    }
  });
}

// ---- Entity: boardsMyPrefs ----

function getBoardsMyPrefsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs";
  var description = "Get boards myPrefs for board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyBoardsMyPrefsExists(idBoard) {
  var url = "/boards";
  var description = "Verify BoardsMyPrefs with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardsMyPrefs exists");
          }
        }
      }
      return pvg.fail("Expected BoardsMyPrefs to exist but it does not");
    }
  });
}

function verifyBoardsMyPrefsDoesNotExist(idBoard) {
  var url = "/boards";
  var description = "Verify BoardsMyPrefs with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardsMyPrefs to not exist but it does");
          }
        }
      }
      return pvg.success("BoardsMyPrefs does not exist");
    }
  });
}

// ---- Entity: myPrefsEmailPosition ----

function updateBoardsMyPrefsEmailPositionByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/emailPosition";
  var description = "Update myPrefs emailPosition for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: myPrefsIdEmailList ----

function updateBoardsMyPrefsIdEmailListByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/idEmailList";
  var description = "Update myPrefs idEmailList for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: myPrefsShowListGuide ----

function updateBoardsMyPrefsShowListGuideByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showListGuide";
  var description = "Update myPrefs showListGuide for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: myPrefsShowSidebar ----

function updateBoardsMyPrefsShowSidebarByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showSidebar";
  var description = "Update myPrefs showSidebar for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: myPrefsShowSidebarActivity ----

function updateBoardsMyPrefsShowSidebarActivityByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showSidebarActivity";
  var description = "Update myPrefs showSidebarActivity for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: myPrefsShowSidebarBoardActions ----

function updateBoardsMyPrefsShowSidebarBoardActionsByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showSidebarBoardActions";
  var description = "Update myPrefs showSidebarBoardActions for board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board myPrefs showSidebarMembers ----

function updateBoardsMyPrefsShowSidebarMembersByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/myPrefs/showSidebarMembers";
  var description = "Update board " + idBoard + " myPrefs showSidebarMembers";
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board name ----

function updateBoardsNameByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/name";
  var description = "Update board " + idBoard + " name";
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board organization ----

function getBoardsOrganizationByIdBoard(field, fields, idBoard) {
  var url = "/boards/" + idBoard + "/organization";
  var description = "Get organization of board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getBoardsOrganizationByIdBoardByField(field, fields, idBoard) {
  var url = "/boards/" + idBoard + "/organization/" + field;
  var description = "Get organization field " + field + " of board " + idBoard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyBoardOrganizationExists(field, fields, idBoard) {
  var url = "/boards";
  var description = "Verify BoardOrganization with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardOrganization exists");
          }
        }
      }
      return pvg.fail("Expected BoardOrganization to exist but it does not");
    }
  });
}

function verifyBoardOrganizationDoesNotExist(field, fields, idBoard) {
  var url = "/boards";
  var description = "Verify BoardOrganization with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardOrganization to not exist but it does");
          }
        }
      }
      return pvg.success("BoardOrganization does not exist");
    }
  });
}

// ---- Entity: board powerUps ----

function addBoardsPowerUpsByIdBoard(idBoard, powerUp, value) {
  var url = "/boards/" + idBoard + "/powerUps";
  var description = "Add powerUp to board " + idBoard;
  var body = {
    "idBoard": String(idBoard),
    "value": String(value),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , powerUp: String(powerUp)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

function deleteBoardsPowerUpsByIdBoardByPowerUp(idBoard, powerUp, value) {
  var url = "/boards/" + idBoard + "/powerUps/" + powerUp;
  var description = "Delete powerUp " + powerUp + " from board " + idBoard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingBoardPowerUps(idBoard, powerUp, value) {
  deleteBoardsPowerUpsByIdBoardByPowerUp(idBoard, powerUp, value);
}

function verifyBoardPowerUpsExists(idBoard, powerUp, value) {
  var url = "/boards/" + idBoard + "/powerUps";
  var description = "Verify BoardPowerUps with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardPowerUps exists");
          }
        }
      }
      return pvg.fail("Expected BoardPowerUps to exist but it does not");
    }
  });
}

function verifyBoardPowerUpsDoesNotExist(idBoard, powerUp, value) {
  var url = "/boards/" + idBoard + "/powerUps";
  var description = "Verify BoardPowerUps with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardPowerUps to not exist but it does");
          }
        }
      }
      return pvg.success("BoardPowerUps does not exist");
    }
  });
}

function tryToDeleteANonExistingBoardPowerUps(idBoard, powerUp, value) {
  var url = "/boards/" + idBoard + "/powerUps/" + powerUp;
  var description = "Verify we cannot delete non-existing BoardPowerUps";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedBoardPowerUps(idBoard, powerUp, value) {
  var expectedDesc = "Add powerUp to board " + idBoard;
  return matchSuccess(expectedDesc);
}

function waitForAnyBoardPowerUpsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ powerUp\ to\ board\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ powerUp\ to\ board\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idBoard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBoardPowerUpsAddedEvent(keyVal) {
  return bp.EventSet("AddBoardPowerUps:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idBoard) === String(keyVal);
  });
}

function matchAnyBoardPowerUpsAdded() {
  return bp.EventSet("matchAnyBoardPowerUpsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idBoard !== undefined && e.name.indexOf("Create board powerUps") > -1;
  });
}

function waitForBoardPowerUpsAdded(idBoard, powerUp, value) {
  var expectedDesc = "Add powerUp to board " + idBoard;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedBoardPowerUps(idBoard, powerUp, value) {
  var expectedDesc = "Delete powerUp " + powerUp + " from board " + idBoard;
  return bp.EventSet("matchDeletedBoardPowerUps", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBoardPowerUpsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ powerUp\ (.+)\ from\ board\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ powerUp\ (.+)\ from\ board\ (.+)$/);
  var captures = m.slice(1);
  var names = ["powerUp", "idBoard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: board prefs background ----

function updateBoardsPrefsBackgroundByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/background";
  var description = "Update board " + idBoard + " prefs background";
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board prefs calendarFeedEnabled ----

function updateBoardsPrefsCalendarFeedEnabledByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/calendarFeedEnabled";
  var description = "Update board " + idBoard + " prefs calendarFeedEnabled";
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board prefs cardAging ----

function updateBoardsPrefsCardAgingByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/cardAging";
  var description = "Update board " + idBoard + " prefs cardAging";
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board prefs cardCovers ----

function updateBoardsPrefsCardCoversByIdBoard(idBoard) {
  var url = "/boards/" + idBoard + "/prefs/cardCovers";
  var description = "Update board " + idBoard + " prefs cardCovers";
  var body = {
    "idBoard": String(idBoard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board prefs comments ----

function updateBoardsPrefsCommentsByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/prefs/comments";
  var description = "Update board " + idBoard + " prefs comments";
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board prefs invitations ----

function updateBoardsPrefsInvitationsByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/prefs/invitations";
  var description = "Update board " + idBoard + " prefs invitations";
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board prefs permission level ----

function updateBoardsPrefsPermissionLevelByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/prefs/permissionLevel";
  var description = "Update board " + idBoard + " prefs permission level";
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board prefs self join ----

function updateBoardsPrefsSelfJoinByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/prefs/selfJoin";
  var description = "Update board " + idBoard + " prefs self join";
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board prefs voting ----

function updateBoardsPrefsVotingByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/prefs/voting";
  var description = "Update board " + idBoard + " prefs voting";
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board subscribed ----

function updateBoardsSubscribedByIdBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/subscribed";
  var description = "Update board " + idBoard + " subscribed";
  var body = {
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idBoard: String(idBoard) }) });
}

// ---- Entity: board field ----

function getBoardsByIdBoardByField(field, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/" + field;
  var description = "Get board " + idBoard + " field " + field;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyBoardFieldExists(field, idBoard, key, token) {
  var url = "/boards";
  var description = "Verify BoardField with idBoard " + idBoard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.success("BoardField exists");
          }
        }
      }
      return pvg.fail("Expected BoardField to exist but it does not");
    }
  });
}

function verifyBoardFieldDoesNotExist(field, idBoard, key, token) {
  var url = "/boards";
  var description = "Verify BoardField with idBoard " + idBoard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idBoard) === String(idBoard)) {
            return pvg.fail("Expected BoardField to not exist but it does");
          }
        }
      }
      return pvg.success("BoardField does not exist");
    }
  });
}

// ---- Entity: member action ----

function getMemberActionsByIdMember(idMember, key, token) {
  var url = "/members/" + idMember + "/actions";
  var description = "Get actions for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMemberActionsExists(idMember, key, token) {
  var url = "/members";
  var description = "Verify MemberActions with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MemberActions exists");
          }
        }
      }
      return pvg.fail("Expected MemberActions to exist but it does not");
    }
  });
}

function verifyMemberActionsDoesNotExist(idMember, key, token) {
  var url = "/members";
  var description = "Verify MemberActions with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MemberActions to not exist but it does");
          }
        }
      }
      return pvg.success("MemberActions does not exist");
    }
  });
}

// ---- Entity: member avatar ----

function addMemberAvatarByIdMember(file, idMember, key, token) {
  var url = "/members/" + idMember + "/avatar";
  var description = "Add avatar for member " + idMember;
  var body = {
    "file": String(file),
    "idMember": String(idMember),
    "key": String(key),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idMember: String(idMember)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMemberAvatar(file, idMember, key, token) {
  addMemberAvatarByIdMember(file, idMember, key, token);
}

function verifyMemberAvatarExists(file, idMember, key, token) {
  var url = "/members/" + idMember + "/avatar";
  var description = "Verify MemberAvatar exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MemberAvatar exists");
          }
        }
      }
      return pvg.fail("Expected MemberAvatar to exist but it does not");
    }
  });
}

function verifyMemberAvatarDoesNotExist(file, idMember, key, token) {
  var url = "/members/" + idMember + "/avatar";
  var description = "Verify MemberAvatar does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MemberAvatar to not exist but it does");
          }
        }
      }
      return pvg.success("MemberAvatar does not exist");
    }
  });
}

function matchAddedMemberAvatar(file, idMember, key, token) {
  var expectedDesc = "Add avatar for member " + idMember;
  return matchSuccess(expectedDesc);
}

function waitForAnyMemberAvatarAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ avatar\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ avatar\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMemberAvatarAddedEvent(keyVal) {
  return bp.EventSet("AddMemberAvatar:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMemberAvatarAdded() {
  return bp.EventSet("matchAnyMemberAvatarAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create member avatar") > -1;
  });
}

function waitForMemberAvatarAdded(file, idMember, key, token) {
  var expectedDesc = "Add avatar for member " + idMember;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: member avatar source ----

function updateMemberAvatarSourceByIdMember(idMember, key, token) {
  var url = "/members/" + idMember + "/avatarSource";
  var description = "Update avatar source for member " + idMember;
  var body = {
    "idMember": String(idMember),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: member bio ----

function updateMemberBioByIdMember(idMember, key, token) {
  var url = "/members/" + idMember + "/bio";
  var description = "Update bio for member " + idMember;
  var body = {
    "idMember": String(idMember),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: member board background ----

function getMemberBoardBackgroundByIdMemberByIdBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Get board background " + idBoardBackground + " for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addMemberBoardBackgroundByIdMember(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "Add board background for member " + idMember;
  var body = {
    "brightness": String(brightness),
    "file": String(file),
    "idMember": String(idMember),
    "key": String(key),
    "tile": String(tile),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idBoardBackground: String(idBoardBackground)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function updateMemberBoardBackgroundByIdMemberByIdBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Update board background " + idBoardBackground + " for member " + idMember;
  var body = {
    "brightness": String(brightness),
    "file": String(file),
    "idBoardBackground": String(idBoardBackground),
    "idMember": String(idMember),
    "key": String(key),
    "tile": String(tile),
    "token": String(token),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idBoardBackground: String(idBoardBackground)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function deleteMemberBoardBackgroundByIdMemberByIdBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Delete board background " + idBoardBackground + " for member " + idMember;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getMemberBoardBackgroundsByIdMember(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "Get board backgrounds for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token) {
  getMemberBoardBackgroundsByIdMember(brightness, file, idBoardBackground, idMember, key, tile, token);
}

function verifyMemberBoardBackgroundExists(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "Verify MemberBoardBackground with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MemberBoardBackground exists");
          }
        }
      }
      return pvg.fail("Expected MemberBoardBackground to exist but it does not");
    }
  });
}

function verifyMemberBoardBackgroundDoesNotExist(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "Verify MemberBoardBackground with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MemberBoardBackground to not exist but it does");
          }
        }
      }
      return pvg.success("MemberBoardBackground does not exist");
    }
  });
}

function tryToDeleteANonExistingMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Verify we cannot delete non-existing MemberBoardBackground";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var expectedDesc = "Add board background for member " + idMember;
  return matchSuccess(expectedDesc);
}

function waitForAnyMemberBoardBackgroundAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ board\ background\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ board\ background\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMemberBoardBackgroundAddedEvent(keyVal) {
  return bp.EventSet("AddMemberBoardBackground:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idMember) === String(keyVal);
  });
}

function matchAnyMemberBoardBackgroundAdded() {
  return bp.EventSet("matchAnyMemberBoardBackgroundAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idMember !== undefined && e.name.indexOf("Create member board background") > -1;
  });
}

function waitForMemberBoardBackgroundAdded(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var expectedDesc = "Add board background for member " + idMember;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token) {
  var expectedDesc = "Delete board background " + idBoardBackground + " for member " + idMember;
  return bp.EventSet("matchDeletedMemberBoardBackground", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMemberBoardBackgroundDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ board\ background\ (.+)\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ board\ background\ (.+)\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idBoardBackground", "idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: member board star ----

function getMemberBoardStarByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Get board star " + idBoardStar + " for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addMemberBoardStarByIdMember(idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "Add board star for member " + idMember;
  var body = {
    "idBoard": String(idBoard),
    "idMember": String(idMember),
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idBoard: String(idBoard)
      , idBoardStar: String(idBoardStar)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function updateMemberBoardStarByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Update board star " + idBoardStar + " for member " + idMember;
  var body = {
    "idBoard": String(idBoard),
    "idBoardStar": String(idBoardStar),
    "idMember": String(idMember),
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idBoard: String(idBoard)
      , idBoardStar: String(idBoardStar)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function deleteMemberBoardStarByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Delete board star " + idBoardStar + " for member " + idMember;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getMemberBoardStarsByIdMember(idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "Get board stars for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token) {
  getMemberBoardStarsByIdMember(idBoard, idBoardStar, idMember, key, pos, token);
}

function verifyMemberBoardStarExists(idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "Verify MemberBoardStar with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MemberBoardStar exists");
          }
        }
      }
      return pvg.fail("Expected MemberBoardStar to exist but it does not");
    }
  });
}

function verifyMemberBoardStarDoesNotExist(idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "Verify MemberBoardStar with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MemberBoardStar to not exist but it does");
          }
        }
      }
      return pvg.success("MemberBoardStar does not exist");
    }
  });
}

function tryToDeleteANonExistingMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Verify we cannot delete non-existing MemberBoardStar";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token) {
  var expectedDesc = "Add board star for member " + idMember;
  return matchSuccess(expectedDesc);
}

function waitForAnyMemberBoardStarAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ board\ star\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ board\ star\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMemberBoardStarAddedEvent(keyVal) {
  return bp.EventSet("AddMemberBoardStar:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idMember) === String(keyVal);
  });
}

function matchAnyMemberBoardStarAdded() {
  return bp.EventSet("matchAnyMemberBoardStarAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idMember !== undefined && e.name.indexOf("Create member board star") > -1;
  });
}

function waitForMemberBoardStarAdded(idBoard, idBoardStar, idMember, key, pos, token) {
  var expectedDesc = "Add board star for member " + idMember;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token) {
  var expectedDesc = "Delete board star " + idBoardStar + " for member " + idMember;
  return bp.EventSet("matchDeletedMemberBoardStar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMemberBoardStarDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ board\ star\ (.+)\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ board\ star\ (.+)\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idBoardStar", "idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: member board star id board ----

function updateMemberBoardStarIdBoardByIdMemberByIdBoardStar(idBoardStar, idMember, key, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar + "/idBoard";
  var description = "Update board id for board star " + idBoardStar + " of member " + idMember;
  var body = {
    "idBoardStar": String(idBoardStar),
    "idMember": String(idMember),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idBoardStar: String(idBoardStar)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: members board stars pos ----

function updateMembersBoardStarsPosByIdMemberByIdBoardStar(idBoardStar, idMember) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar + "/pos";
  var description = "Update members board stars pos for member " + idMember + " and board star " + idBoardStar;
  var body = {
    "idBoardStar": String(idBoardStar),
    "idMember": String(idMember),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idBoardStar: String(idBoardStar)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: members boards ----

function getMembersBoardsByIdMember(idMember) {
  var url = "/members/" + idMember + "/boards";
  var description = "Get boards for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersBoardsExists(idMember) {
  var url = "/members";
  var description = "Verify MembersBoards with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersBoards exists");
          }
        }
      }
      return pvg.fail("Expected MembersBoards to exist but it does not");
    }
  });
}

function verifyMembersBoardsDoesNotExist(idMember) {
  var url = "/members";
  var description = "Verify MembersBoards with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersBoards to not exist but it does");
          }
        }
      }
      return pvg.success("MembersBoards does not exist");
    }
  });
}

// ---- Entity: members boards by filter ----

function getMembersBoardsByIdMemberByFilter(filter, idMember) {
  var url = "/members/" + idMember + "/boards/" + filter;
  var description = "Get boards for member " + idMember + " filtered by " + filter;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersBoardsByFilterExists(filter, idMember) {
  var url = "/members";
  var description = "Verify MembersBoardsByFilter with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersBoardsByFilter exists");
          }
        }
      }
      return pvg.fail("Expected MembersBoardsByFilter to exist but it does not");
    }
  });
}

function verifyMembersBoardsByFilterDoesNotExist(filter, idMember) {
  var url = "/members";
  var description = "Verify MembersBoardsByFilter with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersBoardsByFilter to not exist but it does");
          }
        }
      }
      return pvg.success("MembersBoardsByFilter does not exist");
    }
  });
}

// ---- Entity: members boards invited ----

function getMembersBoardsInvitedByIdMember(idMember) {
  var url = "/members/" + idMember + "/boardsInvited";
  var description = "Get invited boards for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersBoardsInvitedExists(idMember) {
  var url = "/members";
  var description = "Verify MembersBoardsInvited with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersBoardsInvited exists");
          }
        }
      }
      return pvg.fail("Expected MembersBoardsInvited to exist but it does not");
    }
  });
}

function verifyMembersBoardsInvitedDoesNotExist(idMember) {
  var url = "/members";
  var description = "Verify MembersBoardsInvited with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersBoardsInvited to not exist but it does");
          }
        }
      }
      return pvg.success("MembersBoardsInvited does not exist");
    }
  });
}

// ---- Entity: members boards invited by field ----

function getMembersBoardsInvitedByIdMemberByField(field, idMember) {
  var url = "/members/" + idMember + "/boardsInvited/" + field;
  var description = "Get invited boards for member " + idMember + " filtered by field " + field;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersBoardsInvitedByFieldExists(field, idMember) {
  var url = "/members";
  var description = "Verify MembersBoardsInvitedByField with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersBoardsInvitedByField exists");
          }
        }
      }
      return pvg.fail("Expected MembersBoardsInvitedByField to exist but it does not");
    }
  });
}

function verifyMembersBoardsInvitedByFieldDoesNotExist(field, idMember) {
  var url = "/members";
  var description = "Verify MembersBoardsInvitedByField with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersBoardsInvitedByField to not exist but it does");
          }
        }
      }
      return pvg.success("MembersBoardsInvitedByField does not exist");
    }
  });
}

// ---- Entity: members cards ----

function getMembersCardsByIdMember(idMember) {
  var url = "/members/" + idMember + "/cards";
  var description = "Get cards for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersCardsExists(idMember) {
  var url = "/members";
  var description = "Verify MembersCards with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersCards exists");
          }
        }
      }
      return pvg.fail("Expected MembersCards to exist but it does not");
    }
  });
}

function verifyMembersCardsDoesNotExist(idMember) {
  var url = "/members";
  var description = "Verify MembersCards with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersCards to not exist but it does");
          }
        }
      }
      return pvg.success("MembersCards does not exist");
    }
  });
}

// ---- Entity: members cards by filter ----

function getMembersCardsByIdMemberByFilter(filter, idMember) {
  var url = "/members/" + idMember + "/cards/" + filter;
  var description = "Get cards for member " + idMember + " filtered by " + filter;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersCardsByFilterExists(filter, idMember) {
  var url = "/members";
  var description = "Verify MembersCardsByFilter with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersCardsByFilter exists");
          }
        }
      }
      return pvg.fail("Expected MembersCardsByFilter to exist but it does not");
    }
  });
}

function verifyMembersCardsByFilterDoesNotExist(filter, idMember) {
  var url = "/members";
  var description = "Verify MembersCardsByFilter with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersCardsByFilter to not exist but it does");
          }
        }
      }
      return pvg.success("MembersCardsByFilter does not exist");
    }
  });
}

// ---- Entity: members custom board backgrounds ----

function addMembersCustomBoardBackgroundsByIdMember(brightness, file, idMember, tile) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "Add custom board background for member " + idMember;
  var body = {
    "brightness": String(brightness),
    "file": String(file),
    "idMember": String(idMember),
    "tile": String(tile),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function getMembersCustomBoardBackgroundsByIdMember(brightness, file, idMember, tile) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "Get custom board backgrounds for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingMembersCustomBoardBackgrounds(brightness, file, idMember, tile) {
  getMembersCustomBoardBackgroundsByIdMember(brightness, file, idMember, tile);
}

function verifyMembersCustomBoardBackgroundsExists(brightness, file, idMember, tile) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "Verify MembersCustomBoardBackgrounds with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersCustomBoardBackgrounds exists");
          }
        }
      }
      return pvg.fail("Expected MembersCustomBoardBackgrounds to exist but it does not");
    }
  });
}

function verifyMembersCustomBoardBackgroundsDoesNotExist(brightness, file, idMember, tile) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "Verify MembersCustomBoardBackgrounds with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersCustomBoardBackgrounds to not exist but it does");
          }
        }
      }
      return pvg.success("MembersCustomBoardBackgrounds does not exist");
    }
  });
}

function matchAddedMembersCustomBoardBackgrounds(brightness, file, idMember, tile) {
  var expectedDesc = "Add custom board background for member " + idMember;
  return matchSuccess(expectedDesc);
}

function waitForAnyMembersCustomBoardBackgroundsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ custom\ board\ background\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ custom\ board\ background\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMembersCustomBoardBackgroundsAddedEvent(keyVal) {
  return bp.EventSet("AddMembersCustomBoardBackgrounds:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idMember) === String(keyVal);
  });
}

function matchAnyMembersCustomBoardBackgroundsAdded() {
  return bp.EventSet("matchAnyMembersCustomBoardBackgroundsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idMember !== undefined && e.name.indexOf("Create members custom board backgrounds") > -1;
  });
}

function waitForMembersCustomBoardBackgroundsAdded(brightness, file, idMember, tile) {
  var expectedDesc = "Add custom board background for member " + idMember;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: members custom board backgrounds by id ----

function getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(idBoardBackground, idMember) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Get custom board background " + idBoardBackground + " for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(idBoardBackground, idMember) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Update custom board background " + idBoardBackground + " for member " + idMember;
  var body = {
    "brightness": "brightness_dummy",
    "file": "file_dummy",
    "idBoardBackground": String(idBoardBackground),
    "idMember": String(idMember),
    "tile": "tile_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idBoardBackground: String(idBoardBackground)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(idBoardBackground, idMember) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Delete custom board background " + idBoardBackground + " for member " + idMember;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersCustomBoardBackgroundsByIdExists(idBoardBackground, idMember) {
  var url = "/members";
  var description = "Verify MembersCustomBoardBackgroundsById with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersCustomBoardBackgroundsById exists");
          }
        }
      }
      return pvg.fail("Expected MembersCustomBoardBackgroundsById to exist but it does not");
    }
  });
}

function verifyMembersCustomBoardBackgroundsByIdDoesNotExist(idBoardBackground, idMember) {
  var url = "/members";
  var description = "Verify MembersCustomBoardBackgroundsById with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersCustomBoardBackgroundsById to not exist but it does");
          }
        }
      }
      return pvg.success("MembersCustomBoardBackgroundsById does not exist");
    }
  });
}

function tryToDeleteANonExistingMembersCustomBoardBackgroundsById(idBoardBackground, idMember) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Verify we cannot delete non-existing MembersCustomBoardBackgroundsById";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedMembersCustomBoardBackgroundsById(idBoardBackground, idMember) {
  var expectedDesc = "Delete custom board background " + idBoardBackground + " for member " + idMember;
  return bp.EventSet("matchDeletedMembersCustomBoardBackgroundsById", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMembersCustomBoardBackgroundsByIdDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ custom\ board\ background\ (.+)\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ custom\ board\ background\ (.+)\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idBoardBackground", "idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: members custom emoji ----

function getMembersCustomEmojiByIdMemberByIdCustomEmoji(file, idCustomEmoji, idMember, name) {
  var url = "/members/" + idMember + "/customEmoji/" + idCustomEmoji;
  var description = "Get members custom emoji " + idCustomEmoji + " for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addMembersCustomEmojiByIdMember(file, idCustomEmoji, idMember, name) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Add custom emoji for member " + idMember;
  var body = {
    "file": String(file),
    "idMember": String(idMember),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idCustomEmoji: String(idCustomEmoji)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function tryToAddExistingMembersCustomEmoji(file, idCustomEmoji, idMember, name) {
  addMembersCustomEmojiByIdMember(file, idCustomEmoji, idMember, name);
}

function verifyMembersCustomEmojiExists(file, idCustomEmoji, idMember, name) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Verify MembersCustomEmoji with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersCustomEmoji exists");
          }
        }
      }
      return pvg.fail("Expected MembersCustomEmoji to exist but it does not");
    }
  });
}

function verifyMembersCustomEmojiDoesNotExist(file, idCustomEmoji, idMember, name) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Verify MembersCustomEmoji with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersCustomEmoji to not exist but it does");
          }
        }
      }
      return pvg.success("MembersCustomEmoji does not exist");
    }
  });
}

function matchAddedMembersCustomEmoji(file, idCustomEmoji, idMember, name) {
  var expectedDesc = "Add custom emoji for member " + idMember;
  return matchSuccess(expectedDesc);
}

function waitForAnyMembersCustomEmojiAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ custom\ emoji\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ custom\ emoji\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMembersCustomEmojiAddedEvent(keyVal) {
  return bp.EventSet("AddMembersCustomEmoji:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idMember) === String(keyVal);
  });
}

function matchAnyMembersCustomEmojiAdded() {
  return bp.EventSet("matchAnyMembersCustomEmojiAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idMember !== undefined && e.name.indexOf("Create members custom emoji") > -1;
  });
}

function waitForMembersCustomEmojiAdded(file, idCustomEmoji, idMember, name) {
  var expectedDesc = "Add custom emoji for member " + idMember;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: members custom stickers ----

function addMembersCustomStickersByIdMember(file, idCustomSticker, idMember) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Add members custom sticker for member " + idMember;
  var body = {
    "file": String(file),
    "idMember": String(idMember),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idCustomSticker: String(idCustomSticker)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function getMembersCustomStickersByIdMember(file, idCustomSticker, idMember) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Get members custom stickers for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getMembersCustomStickersByIdMemberByIdCustomSticker(file, idCustomSticker, idMember) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Get members custom sticker " + idCustomSticker + " for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function deleteMembersCustomStickersByIdMemberByIdCustomSticker(file, idCustomSticker, idMember) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Delete members custom sticker " + idCustomSticker + " for member " + idMember;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingMembersCustomStickers(file, idCustomSticker, idMember) {
  deleteMembersCustomStickersByIdMemberByIdCustomSticker(file, idCustomSticker, idMember);
}

function verifyMembersCustomStickersExists(file, idCustomSticker, idMember) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Verify MembersCustomStickers with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersCustomStickers exists");
          }
        }
      }
      return pvg.fail("Expected MembersCustomStickers to exist but it does not");
    }
  });
}

function verifyMembersCustomStickersDoesNotExist(file, idCustomSticker, idMember) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Verify MembersCustomStickers with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersCustomStickers to not exist but it does");
          }
        }
      }
      return pvg.success("MembersCustomStickers does not exist");
    }
  });
}

function tryToDeleteANonExistingMembersCustomStickers(file, idCustomSticker, idMember) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Verify we cannot delete non-existing MembersCustomStickers";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedMembersCustomStickers(file, idCustomSticker, idMember) {
  var expectedDesc = "Add members custom sticker for member " + idMember;
  return matchSuccess(expectedDesc);
}

function waitForAnyMembersCustomStickersAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ members\ custom\ sticker\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ members\ custom\ sticker\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMembersCustomStickersAddedEvent(keyVal) {
  return bp.EventSet("AddMembersCustomStickers:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idMember) === String(keyVal);
  });
}

function matchAnyMembersCustomStickersAdded() {
  return bp.EventSet("matchAnyMembersCustomStickersAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idMember !== undefined && e.name.indexOf("Create members custom stickers") > -1;
  });
}

function waitForMembersCustomStickersAdded(file, idCustomSticker, idMember) {
  var expectedDesc = "Add members custom sticker for member " + idMember;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedMembersCustomStickers(file, idCustomSticker, idMember) {
  var expectedDesc = "Delete members custom sticker " + idCustomSticker + " for member " + idMember;
  return bp.EventSet("matchDeletedMembersCustomStickers", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMembersCustomStickersDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ members\ custom\ sticker\ (.+)\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ members\ custom\ sticker\ (.+)\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCustomSticker", "idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: members deltas ----

function getMembersDeltasByIdMember(idMember, ixLastUpdate, tags) {
  var url = "/members/" + idMember + "/deltas";
  var description = "Get members deltas for member " + idMember + " with tags " + tags + " and last update index " + ixLastUpdate;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersDeltasExists(idMember, ixLastUpdate, tags) {
  var url = "/members";
  var description = "Verify MembersDeltas with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersDeltas exists");
          }
        }
      }
      return pvg.fail("Expected MembersDeltas to exist but it does not");
    }
  });
}

function verifyMembersDeltasDoesNotExist(idMember, ixLastUpdate, tags) {
  var url = "/members";
  var description = "Verify MembersDeltas with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersDeltas to not exist but it does");
          }
        }
      }
      return pvg.success("MembersDeltas does not exist");
    }
  });
}

// ---- Entity: members full name ----

function updateMembersFullNameByIdMember(fullName, idMember) {
  var url = "/members/" + idMember + "/fullName";
  var description = "Update full name " + fullName + " for member " + idMember;
  var body = {
    "fullName": String(fullName),
    "idMember": String(idMember),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: members initials ----

function updateMembersInitialsByIdMember(idMember, initials) {
  var url = "/members/" + idMember + "/initials";
  var description = "Update initials " + initials + " for member " + idMember;
  var body = {
    "idMember": String(idMember),
    "initials": String(initials),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: members notifications ----

function getMembersNotificationsByIdMember(filter, idMember) {
  var url = "/members/" + idMember + "/notifications";
  var description = "Get notifications for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getMembersNotificationsByIdMemberByFilter(filter, idMember) {
  var url = "/members/" + idMember + "/notifications/" + filter;
  var description = "Get notifications for member " + idMember + " with filter " + filter;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersNotificationsExists(filter, idMember) {
  var url = "/members";
  var description = "Verify MembersNotifications with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersNotifications exists");
          }
        }
      }
      return pvg.fail("Expected MembersNotifications to exist but it does not");
    }
  });
}

function verifyMembersNotificationsDoesNotExist(filter, idMember) {
  var url = "/members";
  var description = "Verify MembersNotifications with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersNotifications to not exist but it does");
          }
        }
      }
      return pvg.success("MembersNotifications does not exist");
    }
  });
}

// ---- Entity: members one time messages dismissed ----

function addMembersOneTimeMessagesDismissedByIdMember(idMember, value) {
  var url = "/members/" + idMember + "/oneTimeMessagesDismissed";
  var description = "Add one time messages dismissed for member " + idMember;
  var body = {
    "idMember": String(idMember),
    "value": String(value),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingMembersOneTimeMessagesDismissed(idMember, value) {
  addMembersOneTimeMessagesDismissedByIdMember(idMember, value);
}

function verifyMembersOneTimeMessagesDismissedExists(idMember, value) {
  var url = "/members/" + idMember + "/oneTimeMessagesDismissed";
  var description = "Verify MembersOneTimeMessagesDismissed exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersOneTimeMessagesDismissed exists");
          }
        }
      }
      return pvg.fail("Expected MembersOneTimeMessagesDismissed to exist but it does not");
    }
  });
}

function verifyMembersOneTimeMessagesDismissedDoesNotExist(idMember, value) {
  var url = "/members/" + idMember + "/oneTimeMessagesDismissed";
  var description = "Verify MembersOneTimeMessagesDismissed does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersOneTimeMessagesDismissed to not exist but it does");
          }
        }
      }
      return pvg.success("MembersOneTimeMessagesDismissed does not exist");
    }
  });
}

function matchAddedMembersOneTimeMessagesDismissed(idMember, value) {
  var expectedDesc = "Add one time messages dismissed for member " + idMember;
  return matchSuccess(expectedDesc);
}

function waitForAnyMembersOneTimeMessagesDismissedAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ one\ time\ messages\ dismissed\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ one\ time\ messages\ dismissed\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMembersOneTimeMessagesDismissedAddedEvent(keyVal) {
  return bp.EventSet("AddMembersOneTimeMessagesDismissed:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyMembersOneTimeMessagesDismissedAdded() {
  return bp.EventSet("matchAnyMembersOneTimeMessagesDismissedAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create members one time messages dismissed") > -1;
  });
}

function waitForMembersOneTimeMessagesDismissedAdded(idMember, value) {
  var expectedDesc = "Add one time messages dismissed for member " + idMember;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: members organizations ----

function getMembersOrganizationsByIdMemberByFilter(filter, idMember) {
  var url = "/members/" + idMember + "/organizations/" + filter;
  var description = "Get organizations for member " + idMember + " filtered by " + filter;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersOrganizationsExists(filter, idMember) {
  var url = "/members";
  var description = "Verify MembersOrganizations with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersOrganizations exists");
          }
        }
      }
      return pvg.fail("Expected MembersOrganizations to exist but it does not");
    }
  });
}

function verifyMembersOrganizationsDoesNotExist(filter, idMember) {
  var url = "/members";
  var description = "Verify MembersOrganizations with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersOrganizations to not exist but it does");
          }
        }
      }
      return pvg.success("MembersOrganizations does not exist");
    }
  });
}

// ---- Entity: membersOrganizationsInvited ----

function getMembersOrganizationsInvitedByIdMember(idMember) {
  var url = "/members/" + idMember + "/organizationsInvited";
  var description = "Get invited organizations for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersOrganizationsInvitedExists(idMember) {
  var url = "/members";
  var description = "Verify MembersOrganizationsInvited with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersOrganizationsInvited exists");
          }
        }
      }
      return pvg.fail("Expected MembersOrganizationsInvited to exist but it does not");
    }
  });
}

function verifyMembersOrganizationsInvitedDoesNotExist(idMember) {
  var url = "/members";
  var description = "Verify MembersOrganizationsInvited with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersOrganizationsInvited to not exist but it does");
          }
        }
      }
      return pvg.success("MembersOrganizationsInvited does not exist");
    }
  });
}

// ---- Entity: membersOrganizationsInvitedField ----

function getMembersOrganizationsInvitedByIdMemberByField(field, idMember) {
  var url = "/members/" + idMember + "/organizationsInvited/" + field;
  var description = "Get invited organizations field " + field + " for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersOrganizationsInvitedFieldExists(field, idMember) {
  var url = "/members";
  var description = "Verify MembersOrganizationsInvitedField with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersOrganizationsInvitedField exists");
          }
        }
      }
      return pvg.fail("Expected MembersOrganizationsInvitedField to exist but it does not");
    }
  });
}

function verifyMembersOrganizationsInvitedFieldDoesNotExist(field, idMember) {
  var url = "/members";
  var description = "Verify MembersOrganizationsInvitedField with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersOrganizationsInvitedField to not exist but it does");
          }
        }
      }
      return pvg.success("MembersOrganizationsInvitedField does not exist");
    }
  });
}

// ---- Entity: membersPrefsColorBlind ----

function updateMembersPrefsColorBlindByIdMember(idMember) {
  var url = "/members/" + idMember + "/prefs/colorBlind";
  var description = "Update prefs colorBlind for member " + idMember + " with colorBlind {colorBlind}";
  var body = {
    "idMember": String(idMember),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: membersPrefsLocale ----

function updateMembersPrefsLocaleByIdMember(idMember) {
  var url = "/members/" + idMember + "/prefs/locale";
  var description = "Update prefs locale for member " + idMember + " with locale {locale}";
  var body = {
    "idMember": String(idMember),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: membersPrefsMinutesBetweenSummaries ----

function updateMembersPrefsMinutesBetweenSummariesByIdMember(idMember) {
  var url = "/members/" + idMember + "/prefs/minutesBetweenSummaries";
  var description = "Update prefs minutesBetweenSummaries for member " + idMember + " with minutesBetweenSummaries {minutesBetweenSummaries}";
  var body = {
    "idMember": String(idMember),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: membersSavedSearches ----

function getMembersSavedSearchesByIdMember(idMember, name, pos, query) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "Get saved searches for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addMembersSavedSearchesByIdMember(idMember, name, pos, query) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "Add saved search for member " + idMember + " with query " + query;
  var body = {
    "idMember": String(idMember),
    "name": String(name),
    "pos": String(pos),
    "query": String(query),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function tryToAddExistingMembersSavedSearches(idMember, name, pos, query) {
  addMembersSavedSearchesByIdMember(idMember, name, pos, query);
}

function verifyMembersSavedSearchesExists(idMember, name, pos, query) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "Verify MembersSavedSearches with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersSavedSearches exists");
          }
        }
      }
      return pvg.fail("Expected MembersSavedSearches to exist but it does not");
    }
  });
}

function verifyMembersSavedSearchesDoesNotExist(idMember, name, pos, query) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "Verify MembersSavedSearches with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersSavedSearches to not exist but it does");
          }
        }
      }
      return pvg.success("MembersSavedSearches does not exist");
    }
  });
}

function matchAddedMembersSavedSearches(idMember, name, pos, query) {
  var expectedDesc = "Add saved search for member " + idMember + " with query " + query;
  return matchSuccess(expectedDesc);
}

function waitForAnyMembersSavedSearchesAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ saved\ search\ for\ member\ (.+)\ with\ query\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ saved\ search\ for\ member\ (.+)\ with\ query\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember", "query"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMembersSavedSearchesAddedEvent(keyVal) {
  return bp.EventSet("AddMembersSavedSearches:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idMember) === String(keyVal);
  });
}

function matchAnyMembersSavedSearchesAdded() {
  return bp.EventSet("matchAnyMembersSavedSearchesAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idMember !== undefined && e.name.indexOf("Create membersSavedSearches") > -1;
  });
}

function waitForMembersSavedSearchesAdded(idMember, name, pos, query) {
  var expectedDesc = "Add saved search for member " + idMember + " with query " + query;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: membersSavedSearch ----

function getMembersSavedSearchesByIdMemberByIdSavedSearch(idMember, idSavedSearch, query) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Get saved search " + idSavedSearch + " for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateMembersSavedSearchesByIdMemberByIdSavedSearch(idMember, idSavedSearch, query) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Update saved search " + idSavedSearch + " for member " + idMember + " with query " + query;
  var body = {
    "idMember": String(idMember),
    "idSavedSearch": String(idSavedSearch),
    "name": "name_dummy",
    "pos": "pos_dummy",
    "query": String(query),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idSavedSearch: String(idSavedSearch)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

function deleteMembersSavedSearchesByIdMemberByIdSavedSearch(idMember, idSavedSearch, query) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Delete saved search " + idSavedSearch + " for member " + idMember;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersSavedSearchExists(idMember, idSavedSearch, query) {
  var url = "/members";
  var description = "Verify MembersSavedSearch with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersSavedSearch exists");
          }
        }
      }
      return pvg.fail("Expected MembersSavedSearch to exist but it does not");
    }
  });
}

function verifyMembersSavedSearchDoesNotExist(idMember, idSavedSearch, query) {
  var url = "/members";
  var description = "Verify MembersSavedSearch with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersSavedSearch to not exist but it does");
          }
        }
      }
      return pvg.success("MembersSavedSearch does not exist");
    }
  });
}

function tryToDeleteANonExistingMembersSavedSearch(idMember, idSavedSearch, query) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Verify we cannot delete non-existing MembersSavedSearch";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedMembersSavedSearch(idMember, idSavedSearch, query) {
  var expectedDesc = "Delete saved search " + idSavedSearch + " for member " + idMember;
  return bp.EventSet("matchDeletedMembersSavedSearch", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMembersSavedSearchDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ saved\ search\ (.+)\ for\ member\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ saved\ search\ (.+)\ for\ member\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idSavedSearch", "idMember"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: membersSavedSearchName ----

function updateMembersSavedSearchesNameByIdMemberByIdSavedSearch(idMember, idSavedSearch, name) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch + "/name";
  var description = "Update name of saved search " + idSavedSearch + " for member " + idMember + " with name " + name;
  var body = {
    "idMember": String(idMember),
    "idSavedSearch": String(idSavedSearch),
    "name": String(name),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idSavedSearch: String(idSavedSearch)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: membersSavedSearchPos ----

function updateMembersSavedSearchesPosByIdMemberByIdSavedSearch(idMember, idSavedSearch, pos) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch + "/pos";
  var description = "Update position of saved search " + idSavedSearch + " for member " + idMember + " with pos " + pos;
  var body = {
    "idMember": String(idMember),
    "idSavedSearch": String(idSavedSearch),
    "pos": String(pos),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idSavedSearch: String(idSavedSearch)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: membersSavedSearchesQuery ----

function updateMembersSavedSearchesQueryByIdMemberByIdSavedSearch(idMember, idSavedSearch) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch + "/query";
  var description = "Update membersSavedSearchesQuery for member " + idMember + " and savedSearch " + idSavedSearch;
  var body = {
    "idMember": String(idMember),
    "idSavedSearch": String(idSavedSearch),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
      , idSavedSearch: String(idSavedSearch)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: membersUsername ----

function updateMembersUsernameByIdMember(idMember) {
  var url = "/members/" + idMember + "/username";
  var description = "Update membersUsername for member " + idMember;
  var body = {
    "idMember": String(idMember),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idMember: String(idMember) }) });
}

// ---- Entity: membersTokens ----

function getMembersTokensByIdMember(idMember) {
  var url = "/members/" + idMember + "/tokens";
  var description = "Get membersTokens for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersTokensExists(idMember) {
  var url = "/members";
  var description = "Verify MembersTokens with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersTokens exists");
          }
        }
      }
      return pvg.fail("Expected MembersTokens to exist but it does not");
    }
  });
}

function verifyMembersTokensDoesNotExist(idMember) {
  var url = "/members";
  var description = "Verify MembersTokens with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersTokens to not exist but it does");
          }
        }
      }
      return pvg.success("MembersTokens does not exist");
    }
  });
}

// ---- Entity: membersField ----

function getMembersByIdMemberByField(field, idMember) {
  var url = "/members/" + idMember + "/" + field;
  var description = "Get members field " + field + " for member " + idMember;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyMembersFieldExists(field, idMember) {
  var url = "/members";
  var description = "Verify MembersField with idMember " + idMember + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.success("MembersField exists");
          }
        }
      }
      return pvg.fail("Expected MembersField to exist but it does not");
    }
  });
}

function verifyMembersFieldDoesNotExist(field, idMember) {
  var url = "/members";
  var description = "Verify MembersField with idMember " + idMember + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idMember) === String(idMember)) {
            return pvg.fail("Expected MembersField to not exist but it does");
          }
        }
      }
      return pvg.success("MembersField does not exist");
    }
  });
}

// ---- Entity: card action comment ----

function addCardsActionsCommentsByIdCard(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "Add comment to card " + idCard;
  var body = {
    "idCard": String(idCard),
    "key": String(key),
    "text": String(text),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idAction: String(idAction)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function deleteCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Delete comment " + idAction + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Update comment " + idAction + " on card " + idCard;
  var body = {
    "idAction": String(idAction),
    "idCard": String(idCard),
    "key": String(key),
    "text": String(text),
    "token": String(token),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idAction: String(idAction)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function tryToAddExistingCardActionComment(idAction, idCard, key, text, token) {
  updateCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token);
}

function verifyCardActionCommentExists(idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "Verify CardActionComment with idCard " + idCard + " exists";
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
  var description = "Verify CardActionComment with idCard " + idCard + " does not exist";
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
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedCardActionComment(idAction, idCard, key, text, token) {
  var expectedDesc = "Add comment to card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardActionCommentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ comment\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ comment\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create card action comment") > -1;
  });
}

function waitForCardActionCommentAdded(idAction, idCard, key, text, token) {
  var expectedDesc = "Add comment to card " + idCard;
  waitFor(matchSuccess(expectedDesc));
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
  var description = "Add attachment to card " + idCard;
  var body = {
    "file": String(file),
    "idCard": String(idCard),
    "key": String(key),
    "mimeType": String(mimeType),
    "name": String(name),
    "token": String(token),
    "url": String(url),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idAttachment: String(idAttachment)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function deleteCardsAttachmentsByIdCardByIdAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Delete attachment " + idAttachment + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getCardsAttachmentsByIdCardByIdAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Get attachment " + idAttachment + " from card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getCardsAttachmentsByIdCard(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "List attachments of card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  getCardsAttachmentsByIdCard(file, idAttachment, idCard, key, mimeType, name, token, url);
}

function verifyCardAttachmentExists(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Verify CardAttachment with idCard " + idCard + " exists";
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
  var description = "Verify CardAttachment with idCard " + idCard + " does not exist";
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
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var expectedDesc = "Add attachment to card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ attachment\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ attachment\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create card attachment") > -1;
  });
}

function waitForCardAttachmentAdded(file, idAttachment, idCard, key, mimeType, name, token, url) {
  var expectedDesc = "Add attachment to card " + idCard;
  waitFor(matchSuccess(expectedDesc));
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

// ---- Entity: cards checklist check item ----

function addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var description = "Add cards checklist check item " + idCheckItem + " to checklist " + idChecklist + " on card " + idCard;
  var body = {
    "idCard": String(idCard),
    "idChecklist": String(idChecklist),
    "name": String(name),
    "pos": String(pos),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
      , idChecklistCurrent: String(idChecklistCurrent)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklistCurrent + "/checkItem/" + idCheckItem;
  var description = "Update cards checklist check item " + idCheckItem + " in checklist " + idChecklistCurrent + " on card " + idCard;
  var body = {
    "idCard": String(idCard),
    "idCheckItem": String(idCheckItem),
    "idChecklist": String(idChecklist),
    "idChecklistCurrent": String(idChecklistCurrent),
    "name": String(name),
    "pos": String(pos),
    "state": "state_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
      , idChecklistCurrent: String(idChecklistCurrent)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem;
  var description = "Delete cards checklist check item " + idCheckItem + " from checklist " + idChecklist + " on card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
}

function verifyCardsChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var description = "Verify CardsChecklistCheckItem with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsChecklistCheckItem exists");
          }
        }
      }
      return pvg.fail("Expected CardsChecklistCheckItem to exist but it does not");
    }
  });
}

function verifyCardsChecklistCheckItemDoesNotExist(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var description = "Verify CardsChecklistCheckItem with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsChecklistCheckItem to not exist but it does");
          }
        }
      }
      return pvg.success("CardsChecklistCheckItem does not exist");
    }
  });
}

function tryToDeleteANonExistingCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem;
  var description = "Verify we cannot delete non-existing CardsChecklistCheckItem";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var expectedDesc = "Add cards checklist check item " + idCheckItem + " to checklist " + idChecklist + " on card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardsChecklistCheckItemAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ cards\ checklist\ check\ item\ (.+)\ to\ checklist\ (.+)\ on\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ cards\ checklist\ check\ item\ (.+)\ to\ checklist\ (.+)\ on\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCheckItem", "idChecklist", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardsChecklistCheckItemAddedEvent(keyVal) {
  return bp.EventSet("AddCardsChecklistCheckItem:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardsChecklistCheckItemAdded() {
  return bp.EventSet("matchAnyCardsChecklistCheckItemAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create cards checklist check item") > -1;
  });
}

function waitForCardsChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var expectedDesc = "Add cards checklist check item " + idCheckItem + " to checklist " + idChecklist + " on card " + idCard;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos) {
  var expectedDesc = "Delete cards checklist check item " + idCheckItem + " from checklist " + idChecklist + " on card " + idCard;
  return bp.EventSet("matchDeletedCardsChecklistCheckItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardsChecklistCheckItemDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ cards\ checklist\ check\ item\ (.+)\ from\ checklist\ (.+)\ on\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ cards\ checklist\ check\ item\ (.+)\ from\ checklist\ (.+)\ on\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCheckItem", "idChecklist", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: cards checklist check item name ----

function updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/name";
  var description = "Update name of cards checklist check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard;
  var body = {
    "idCard": String(idCard),
    "idCheckItem": String(idCheckItem),
    "idChecklist": String(idChecklist),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: cards checklist check item pos ----

function updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/pos";
  var description = "Update position of cards checklist check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard;
  var body = {
    "idCard": String(idCard),
    "idCheckItem": String(idCheckItem),
    "idChecklist": String(idChecklist),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: cards checklist check item state ----

function updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/state";
  var description = "Update state of cards checklist check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard;
  var body = {
    "idCard": String(idCard),
    "idCheckItem": String(idCheckItem),
    "idChecklist": String(idChecklist),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: cards checklist check item convert to card ----

function addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/convertToCard";
  var description = "Convert cards checklist check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard + " to card";
  var body = {
    "idCard": String(idCard),
    "idCheckItem": String(idCheckItem),
    "idChecklist": String(idChecklist),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idCard: String(idCard)
      , idCheckItem: String(idCheckItem)
      , idChecklist: String(idChecklist)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingCardsChecklistCheckItemConvertToCard(idCard, idCheckItem, idChecklist) {
  addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist);
}

function verifyCardsChecklistCheckItemConvertToCardExists(idCard, idCheckItem, idChecklist) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/convertToCard";
  var description = "Verify CardsChecklistCheckItemConvertToCard exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsChecklistCheckItemConvertToCard exists");
          }
        }
      }
      return pvg.fail("Expected CardsChecklistCheckItemConvertToCard to exist but it does not");
    }
  });
}

function verifyCardsChecklistCheckItemConvertToCardDoesNotExist(idCard, idCheckItem, idChecklist) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/convertToCard";
  var description = "Verify CardsChecklistCheckItemConvertToCard does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsChecklistCheckItemConvertToCard to not exist but it does");
          }
        }
      }
      return pvg.success("CardsChecklistCheckItemConvertToCard does not exist");
    }
  });
}

function matchAddedCardsChecklistCheckItemConvertToCard(idCard, idCheckItem, idChecklist) {
  var expectedDesc = "Convert cards checklist check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard + " to card";
  return matchSuccess(expectedDesc);
}

function waitForAnyCardsChecklistCheckItemConvertToCardAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Convert\ cards\ checklist\ check\ item\ (.+)\ in\ checklist\ (.+)\ on\ card\ (.+)\ to\ card$/));
  var m = ev.data.parameters.description.match(/^Convert\ cards\ checklist\ check\ item\ (.+)\ in\ checklist\ (.+)\ on\ card\ (.+)\ to\ card$/);
  var captures = m.slice(1);
  var names = ["idCheckItem", "idChecklist", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardsChecklistCheckItemConvertToCardAddedEvent(keyVal) {
  return bp.EventSet("AddCardsChecklistCheckItemConvertToCard:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyCardsChecklistCheckItemConvertToCardAdded() {
  return bp.EventSet("matchAnyCardsChecklistCheckItemConvertToCardAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create cards checklist check item convert to card") > -1;
  });
}

function waitForCardsChecklistCheckItemConvertToCardAdded(idCard, idCheckItem, idChecklist) {
  var expectedDesc = "Convert cards checklist check item " + idCheckItem + " in checklist " + idChecklist + " on card " + idCard + " to card";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: cards checklists ----

function getCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, name, value) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Get checklists for card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, name, value) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Add checklist to card " + idCard;
  var body = {
    "idCard": String(idCard),
    "idChecklistSource": String(idChecklistSource),
    "name": String(name),
    "value": String(value),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idChecklist: String(idChecklist)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function deleteCardsChecklistsByIdCardByIdChecklist(idCard, idChecklist, idChecklistSource, name, value) {
  var url = "/cards/" + idCard + "/checklists/" + idChecklist;
  var description = "Delete checklist " + idChecklist + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingCardsChecklists(idCard, idChecklist, idChecklistSource, name, value) {
  deleteCardsChecklistsByIdCardByIdChecklist(idCard, idChecklist, idChecklistSource, name, value);
}

function verifyCardsChecklistsExists(idCard, idChecklist, idChecklistSource, name, value) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Verify CardsChecklists with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsChecklists exists");
          }
        }
      }
      return pvg.fail("Expected CardsChecklists to exist but it does not");
    }
  });
}

function verifyCardsChecklistsDoesNotExist(idCard, idChecklist, idChecklistSource, name, value) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "Verify CardsChecklists with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsChecklists to not exist but it does");
          }
        }
      }
      return pvg.success("CardsChecklists does not exist");
    }
  });
}

function tryToDeleteANonExistingCardsChecklists(idCard, idChecklist, idChecklistSource, name, value) {
  var url = "/cards/" + idCard + "/checklists/" + idChecklist;
  var description = "Verify we cannot delete non-existing CardsChecklists";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedCardsChecklists(idCard, idChecklist, idChecklistSource, name, value) {
  var expectedDesc = "Add checklist to card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardsChecklistsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ checklist\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ checklist\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardsChecklistsAddedEvent(keyVal) {
  return bp.EventSet("AddCardsChecklists:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardsChecklistsAdded() {
  return bp.EventSet("matchAnyCardsChecklistsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create cards checklists") > -1;
  });
}

function waitForCardsChecklistsAdded(idCard, idChecklist, idChecklistSource, name, value) {
  var expectedDesc = "Add checklist to card " + idCard;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCardsChecklists(idCard, idChecklist, idChecklistSource, name, value) {
  var expectedDesc = "Delete checklist " + idChecklist + " from card " + idCard;
  return bp.EventSet("matchDeletedCardsChecklists", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardsChecklistsDeleted() {
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

// ---- Entity: cards closed ----

function updateCardsClosedByIdCard(idCard) {
  var url = "/cards/" + idCard + "/closed";
  var description = "Update closed status of card " + idCard;
  var body = {
    "idCard": String(idCard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: card description ----

function updateCardsDescByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/desc";
  var description = "Update card description for card " + idCard;
  var body = {
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: card due ----

function updateCardsDueByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/due";
  var description = "Update card due date for card " + idCard;
  var body = {
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: card attachment cover ----

function updateCardsIdAttachmentCoverByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/idAttachmentCover";
  var description = "Update card attachment cover for card " + idCard;
  var body = {
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: card board ----

function updateCardsIdBoardByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/idBoard";
  var description = "Update card board for card " + idCard;
  var body = {
    "idCard": String(idCard),
    "idList": "idList_dummy",
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: card label ----

function addCardsIdLabelsByIdCard(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels";
  var description = "Add label to card " + idCard;
  var body = {
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
    "value": String(value),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idLabel: String(idLabel)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function deleteCardsIdLabelsByIdCardByIdLabel(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels/" + idLabel;
  var description = "Delete label " + idLabel + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingCardIdLabels(idCard, idLabel, key, token, value) {
  deleteCardsIdLabelsByIdCardByIdLabel(idCard, idLabel, key, token, value);
}

function verifyCardIdLabelsExists(idCard, idLabel, key, token, value) {
  var url = "/cards/" + idCard + "/idLabels";
  var description = "Verify CardIdLabels with idCard " + idCard + " exists";
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
  var description = "Verify CardIdLabels with idCard " + idCard + " does not exist";
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
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedCardIdLabels(idCard, idLabel, key, token, value) {
  var expectedDesc = "Add label to card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardIdLabelsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ label\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ label\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create card label") > -1;
  });
}

function waitForCardIdLabelsAdded(idCard, idLabel, key, token, value) {
  var expectedDesc = "Add label to card " + idCard;
  waitFor(matchSuccess(expectedDesc));
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

// ---- Entity: card list ----

function updateCardsIdListByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/idList";
  var description = "Update card list for card " + idCard;
  var body = {
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: card member ----

function addCardsIdMembersByIdCard(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Add member to card " + idCard;
  var body = {
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
    "value": String(value),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idMember: String(idMember)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function updateCardsIdMembersByIdCard(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Update members of card " + idCard;
  var body = {
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
    "value": String(value),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idMember: String(idMember)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function deleteCardsIdMembersByIdCardByIdMember(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers/" + idMember;
  var description = "Delete member " + idMember + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingCardIdMembers(idCard, idMember, key, token, value) {
  deleteCardsIdMembersByIdCardByIdMember(idCard, idMember, key, token, value);
}

function verifyCardIdMembersExists(idCard, idMember, key, token, value) {
  var url = "/cards/" + idCard + "/idMembers";
  var description = "Verify CardIdMembers with idCard " + idCard + " exists";
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
  var description = "Verify CardIdMembers with idCard " + idCard + " does not exist";
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
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedCardIdMembers(idCard, idMember, key, token, value) {
  var expectedDesc = "Add member to card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardIdMembersAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ member\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ member\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create card member") > -1;
  });
}

function waitForCardIdMembersAdded(idCard, idMember, key, token, value) {
  var expectedDesc = "Add member to card " + idCard;
  waitFor(matchSuccess(expectedDesc));
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

// ---- Entity: card labels ----

function addCardsLabelsByIdCard(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Add labels to card " + idCard;
  var body = {
    "color": String(color),
    "idCard": String(idCard),
    "key": String(key),
    "name": String(name),
    "token": String(token),
    "value": String(value),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , color: String(color)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function updateCardsLabelsByIdCard(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Update labels of card " + idCard;
  var body = {
    "color": String(color),
    "idCard": String(idCard),
    "key": String(key),
    "name": String(name),
    "token": String(token),
    "value": String(value),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , color: String(color)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function tryToAddExistingCardLabels(color, idCard, key, name, token, value) {
  updateCardsLabelsByIdCard(color, idCard, key, name, token, value);
}

function verifyCardLabelsExists(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Verify CardLabels with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardLabels exists");
          }
        }
      }
      return pvg.fail("Expected CardLabels to exist but it does not");
    }
  });
}

function verifyCardLabelsDoesNotExist(color, idCard, key, name, token, value) {
  var url = "/cards/" + idCard + "/labels";
  var description = "Verify CardLabels with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardLabels to not exist but it does");
          }
        }
      }
      return pvg.success("CardLabels does not exist");
    }
  });
}

function matchAddedCardLabels(color, idCard, key, name, token, value) {
  var expectedDesc = "Add labels to card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardLabelsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ labels\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ labels\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardLabelsAddedEvent(keyVal) {
  return bp.EventSet("AddCardLabels:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardLabelsAdded() {
  return bp.EventSet("matchAnyCardLabelsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create card labels") > -1;
  });
}

function waitForCardLabelsAdded(color, idCard, key, name, token, value) {
  var expectedDesc = "Add labels to card " + idCard;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: cardsLabels ----

function deleteCardsLabelsByIdCardByColor(color, idCard) {
  var url = "/cards/" + idCard + "/labels/" + color;
  var description = "Delete label with color " + color + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToDeleteANonExistingCardsLabels(color, idCard) {
  var url = "/cards/" + idCard + "/labels/" + color;
  var description = "Verify we cannot delete non-existing CardsLabels";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedCardsLabels(color, idCard) {
  var expectedDesc = "Delete label with color " + color + " from card " + idCard;
  return bp.EventSet("matchDeletedCardsLabels", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardsLabelsDeleted() {
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

// ---- Entity: cardsList ----

function getCardsListByIdCard(idCard) {
  var url = "/cards/" + idCard + "/list";
  var description = "Get list of card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyCardsListExists(idCard) {
  var url = "/cards";
  var description = "Verify CardsList with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsList exists");
          }
        }
      }
      return pvg.fail("Expected CardsList to exist but it does not");
    }
  });
}

function verifyCardsListDoesNotExist(idCard) {
  var url = "/cards";
  var description = "Verify CardsList with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsList to not exist but it does");
          }
        }
      }
      return pvg.success("CardsList does not exist");
    }
  });
}

// ---- Entity: cardsListField ----

function getCardsListByIdCardByField(field, idCard) {
  var url = "/cards/" + idCard + "/list/" + field;
  var description = "Get field " + field + " of list of card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyCardsListFieldExists(field, idCard) {
  var url = "/cards";
  var description = "Verify CardsListField with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsListField exists");
          }
        }
      }
      return pvg.fail("Expected CardsListField to exist but it does not");
    }
  });
}

function verifyCardsListFieldDoesNotExist(field, idCard) {
  var url = "/cards";
  var description = "Verify CardsListField with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsListField to not exist but it does");
          }
        }
      }
      return pvg.success("CardsListField does not exist");
    }
  });
}

// ---- Entity: cardsMarkAssociatedNotificationsRead ----

function addCardsMarkAssociatedNotificationsReadByIdCard(idCard) {
  var url = "/cards/" + idCard + "/markAssociatedNotificationsRead";
  var description = "Mark associated notifications read for card " + idCard;
  var body = {
    "idCard": String(idCard),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idCard: String(idCard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingCardsMarkAssociatedNotificationsRead(idCard) {
  addCardsMarkAssociatedNotificationsReadByIdCard(idCard);
}

function verifyCardsMarkAssociatedNotificationsReadExists(idCard) {
  var url = "/cards/" + idCard + "/markAssociatedNotificationsRead";
  var description = "Verify CardsMarkAssociatedNotificationsRead exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsMarkAssociatedNotificationsRead exists");
          }
        }
      }
      return pvg.fail("Expected CardsMarkAssociatedNotificationsRead to exist but it does not");
    }
  });
}

function verifyCardsMarkAssociatedNotificationsReadDoesNotExist(idCard) {
  var url = "/cards/" + idCard + "/markAssociatedNotificationsRead";
  var description = "Verify CardsMarkAssociatedNotificationsRead does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsMarkAssociatedNotificationsRead to not exist but it does");
          }
        }
      }
      return pvg.success("CardsMarkAssociatedNotificationsRead does not exist");
    }
  });
}

function matchAddedCardsMarkAssociatedNotificationsRead(idCard) {
  var expectedDesc = "Mark associated notifications read for card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardsMarkAssociatedNotificationsReadAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Mark\ associated\ notifications\ read\ for\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Mark\ associated\ notifications\ read\ for\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardsMarkAssociatedNotificationsReadAddedEvent(keyVal) {
  return bp.EventSet("AddCardsMarkAssociatedNotificationsRead:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyCardsMarkAssociatedNotificationsReadAdded() {
  return bp.EventSet("matchAnyCardsMarkAssociatedNotificationsReadAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create cardsMarkAssociatedNotificationsRead") > -1;
  });
}

function waitForCardsMarkAssociatedNotificationsReadAdded(idCard) {
  var expectedDesc = "Mark associated notifications read for card " + idCard;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: cardsMembers ----

function getCardsMembersByIdCard(idCard) {
  var url = "/cards/" + idCard + "/members";
  var description = "Get members of card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyCardsMembersExists(idCard) {
  var url = "/cards";
  var description = "Verify CardsMembers with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsMembers exists");
          }
        }
      }
      return pvg.fail("Expected CardsMembers to exist but it does not");
    }
  });
}

function verifyCardsMembersDoesNotExist(idCard) {
  var url = "/cards";
  var description = "Verify CardsMembers with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsMembers to not exist but it does");
          }
        }
      }
      return pvg.success("CardsMembers does not exist");
    }
  });
}

// ---- Entity: cardsMembersVoted ----

function getCardsMembersVotedByIdCard(idCard, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Get members voted on card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addCardsMembersVotedByIdCard(idCard, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Add member voted to card " + idCard;
  var body = {
    "idCard": String(idCard),
    "value": String(value),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function tryToAddExistingCardsMembersVoted(idCard, value) {
  addCardsMembersVotedByIdCard(idCard, value);
}

function verifyCardsMembersVotedExists(idCard, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Verify CardsMembersVoted with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsMembersVoted exists");
          }
        }
      }
      return pvg.fail("Expected CardsMembersVoted to exist but it does not");
    }
  });
}

function verifyCardsMembersVotedDoesNotExist(idCard, value) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Verify CardsMembersVoted with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsMembersVoted to not exist but it does");
          }
        }
      }
      return pvg.success("CardsMembersVoted does not exist");
    }
  });
}

function matchAddedCardsMembersVoted(idCard, value) {
  var expectedDesc = "Add member voted to card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardsMembersVotedAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ member\ voted\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ member\ voted\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardsMembersVotedAddedEvent(keyVal) {
  return bp.EventSet("AddCardsMembersVoted:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardsMembersVotedAdded() {
  return bp.EventSet("matchAnyCardsMembersVotedAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create cardsMembersVoted") > -1;
  });
}

function waitForCardsMembersVotedAdded(idCard, value) {
  var expectedDesc = "Add member voted to card " + idCard;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: cardsMembersVotedByIdMember ----

function deleteCardsMembersVotedByIdCardByIdMember(idCard, idMember) {
  var url = "/cards/" + idCard + "/membersVoted/" + idMember;
  var description = "Delete member " + idMember + " voted on card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToDeleteANonExistingCardsMembersVotedByIdMember(idCard, idMember) {
  var url = "/cards/" + idCard + "/membersVoted/" + idMember;
  var description = "Verify we cannot delete non-existing CardsMembersVotedByIdMember";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedCardsMembersVotedByIdMember(idCard, idMember) {
  var expectedDesc = "Delete member " + idMember + " voted on card " + idCard;
  return bp.EventSet("matchDeletedCardsMembersVotedByIdMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardsMembersVotedByIdMemberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ member\ (.+)\ voted\ on\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ member\ (.+)\ voted\ on\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember", "idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: cardsName ----

function updateCardsNameByIdCard(idCard, name) {
  var url = "/cards/" + idCard + "/name";
  var description = "Update name of card " + idCard + " to " + name;
  var body = {
    "idCard": String(idCard),
    "name": String(name),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: cardsPos ----

function updateCardsPosByIdCard(idCard, pos) {
  var url = "/cards/" + idCard + "/pos";
  var description = "Update position of card " + idCard + " to " + pos;
  var body = {
    "idCard": String(idCard),
    "pos": String(pos),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: cardsStickers ----

function getCardsStickersByIdCardByIdSticker(idCard, idSticker, image, left, rotate, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Get sticker " + idSticker + " from card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addCardsStickersByIdCard(idCard, idSticker, image, left, rotate, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Add sticker to card " + idCard;
  var body = {
    "idCard": String(idCard),
    "image": String(image),
    "left": String(left),
    "rotate": String(rotate),
    "top": String(top),
    "zIndex": String(zIndex),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idSticker: String(idSticker)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function deleteCardsStickersByIdCardByIdSticker(idCard, idSticker, image, left, rotate, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Delete sticker " + idSticker + " from card " + idCard;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateCardsStickersByIdCardByIdSticker(idCard, idSticker, image, left, rotate, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Update sticker " + idSticker + " on card " + idCard;
  var body = {
    "idCard": String(idCard),
    "idSticker": String(idSticker),
    "image": String(image),
    "left": String(left),
    "rotate": String(rotate),
    "top": String(top),
    "zIndex": String(zIndex),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
      , idSticker: String(idSticker)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

function tryToAddExistingCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex) {
  updateCardsStickersByIdCardByIdSticker(idCard, idSticker, image, left, rotate, top, zIndex);
}

function verifyCardsStickersExists(idCard, idSticker, image, left, rotate, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Verify CardsStickers with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsStickers exists");
          }
        }
      }
      return pvg.fail("Expected CardsStickers to exist but it does not");
    }
  });
}

function verifyCardsStickersDoesNotExist(idCard, idSticker, image, left, rotate, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Verify CardsStickers with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsStickers to not exist but it does");
          }
        }
      }
      return pvg.success("CardsStickers does not exist");
    }
  });
}

function tryToDeleteANonExistingCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Verify we cannot delete non-existing CardsStickers";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex) {
  var expectedDesc = "Add sticker to card " + idCard;
  return matchSuccess(expectedDesc);
}

function waitForAnyCardsStickersAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ sticker\ to\ card\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ sticker\ to\ card\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCard"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCardsStickersAddedEvent(keyVal) {
  return bp.EventSet("AddCardsStickers:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idCard) === String(keyVal);
  });
}

function matchAnyCardsStickersAdded() {
  return bp.EventSet("matchAnyCardsStickersAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idCard !== undefined && e.name.indexOf("Create cardsStickers") > -1;
  });
}

function waitForCardsStickersAdded(idCard, idSticker, image, left, rotate, top, zIndex) {
  var expectedDesc = "Add sticker to card " + idCard;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex) {
  var expectedDesc = "Delete sticker " + idSticker + " from card " + idCard;
  return bp.EventSet("matchDeletedCardsStickers", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCardsStickersDeleted() {
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

// ---- Entity: cards subscribed ----

function updateCardsSubscribedByIdCard(idCard) {
  var url = "/cards/" + idCard + "/subscribed";
  var description = "Update subscription status of card " + idCard;
  var body = {
    "idCard": String(idCard),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idCard: String(idCard)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idCard: String(idCard) }) });
}

// ---- Entity: cards field ----

function getCardsByIdCardByField(field, idCard) {
  var url = "/cards/" + idCard + "/" + field;
  var description = "Get field " + field + " of card " + idCard;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyCardsFieldExists(field, idCard) {
  var url = "/cards";
  var description = "Verify CardsField with idCard " + idCard + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.success("CardsField exists");
          }
        }
      }
      return pvg.fail("Expected CardsField to exist but it does not");
    }
  });
}

function verifyCardsFieldDoesNotExist(field, idCard) {
  var url = "/cards";
  var description = "Verify CardsField with idCard " + idCard + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idCard) === String(idCard)) {
            return pvg.fail("Expected CardsField to not exist but it does");
          }
        }
      }
      return pvg.success("CardsField does not exist");
    }
  });
}

// ---- Entity: organization ----

function addOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var url = "/organizations";
  var description = "Create organization with idOrg " + idOrg;
  var body = {
    "desc": String(desc),
    "displayName": String(displayName),
    "idOrg": String(idOrg),
    "key": String(key),
    "name": String(name),
    "prefs/associatedDomain": String(prefs/associatedDomain),
    "prefs/boardVisibilityRestrict/org": String(prefs/boardVisibilityRestrict/org),
    "prefs/boardVisibilityRestrict/private": String(prefs/boardVisibilityRestrict/private),
    "prefs/boardVisibilityRestrict/public": String(prefs/boardVisibilityRestrict/public),
    "prefs/externalMembersDisabled": String(prefs/externalMembersDisabled),
    "prefs/googleAppsVersion": String(prefs/googleAppsVersion),
    "prefs/orgInviteRestrict": String(prefs/orgInviteRestrict),
    "prefs/permissionLevel": String(prefs/permissionLevel),
    "token": String(token),
    "website": String(website),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

function deleteOrganizationByIdOrg(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "Delete organization with idOrg " + idOrg;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateOrganizationByIdOrg(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "Update organization with idOrg " + idOrg;
  var body = {
    "desc": String(desc),
    "displayName": String(displayName),
    "idOrg": String(idOrg),
    "key": String(key),
    "name": String(name),
    "prefs/associatedDomain": String(prefs/associatedDomain),
    "prefs/boardVisibilityRestrict/org": String(prefs/boardVisibilityRestrict/org),
    "prefs/boardVisibilityRestrict/private": String(prefs/boardVisibilityRestrict/private),
    "prefs/boardVisibilityRestrict/public": String(prefs/boardVisibilityRestrict/public),
    "prefs/externalMembersDisabled": String(prefs/externalMembersDisabled),
    "prefs/googleAppsVersion": String(prefs/googleAppsVersion),
    "prefs/orgInviteRestrict": String(prefs/orgInviteRestrict),
    "prefs/permissionLevel": String(prefs/permissionLevel),
    "token": String(token),
    "website": String(website),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

function getOrganizationByIdOrg(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "Get organization with idOrg " + idOrg;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  getOrganizationByIdOrg(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
}

function verifyOrganizationExists(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var url = "/organizations";
  var description = "Verify Organization with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("Organization exists");
          }
        }
      }
      return pvg.fail("Expected Organization to exist but it does not");
    }
  });
}

function verifyOrganizationDoesNotExist(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var url = "/organizations";
  var description = "Verify Organization with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected Organization to not exist but it does");
          }
        }
      }
      return pvg.success("Organization does not exist");
    }
  });
}

function tryToDeleteANonExistingOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "Verify we cannot delete non-existing Organization";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var expectedDesc = "Create organization with idOrg " + idOrg;
  return matchSuccess(expectedDesc);
}

function waitForAnyOrganizationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ organization\ with\ idOrg\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ organization\ with\ idOrg\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idOrg"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getOrganizationAddedEvent(keyVal) {
  return bp.EventSet("AddOrganization:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idOrg) === String(keyVal);
  });
}

function matchAnyOrganizationAdded() {
  return bp.EventSet("matchAnyOrganizationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idOrg !== undefined && e.name.indexOf("Create organization") > -1;
  });
}

function waitForOrganizationAdded(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var expectedDesc = "Create organization with idOrg " + idOrg;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website) {
  var expectedDesc = "Delete organization with idOrg " + idOrg;
  return bp.EventSet("matchDeletedOrganization", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrganizationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ organization\ with\ idOrg\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ organization\ with\ idOrg\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idOrg"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization description ----

function updateOrganizationDescByIdOrg(idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/desc";
  var description = "Update organization description for idOrg " + idOrg;
  var body = {
    "idOrg": String(idOrg),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

// ---- Entity: organization display name ----

function updateOrganizationDisplayNameByIdOrg(idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/displayName";
  var description = "Update organization display name for idOrg " + idOrg;
  var body = {
    "idOrg": String(idOrg),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

// ---- Entity: organization logo ----

function addOrganizationLogoByIdOrg(file, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "Add logo to organization with idOrg " + idOrg;
  var body = {
    "file": String(file),
    "idOrg": String(idOrg),
    "key": String(key),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

function deleteOrganizationLogoByIdOrg(file, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "Delete logo from organization with idOrg " + idOrg;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingOrganizationLogo(file, idOrg, key, token) {
  deleteOrganizationLogoByIdOrg(file, idOrg, key, token);
}

function verifyOrganizationLogoExists(file, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "Verify OrganizationLogo with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("OrganizationLogo exists");
          }
        }
      }
      return pvg.fail("Expected OrganizationLogo to exist but it does not");
    }
  });
}

function verifyOrganizationLogoDoesNotExist(file, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "Verify OrganizationLogo with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected OrganizationLogo to not exist but it does");
          }
        }
      }
      return pvg.success("OrganizationLogo does not exist");
    }
  });
}

function tryToDeleteANonExistingOrganizationLogo(file, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "Verify we cannot delete non-existing OrganizationLogo";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedOrganizationLogo(file, idOrg, key, token) {
  var expectedDesc = "Add logo to organization with idOrg " + idOrg;
  return matchSuccess(expectedDesc);
}

function waitForAnyOrganizationLogoAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ logo\ to\ organization\ with\ idOrg\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ logo\ to\ organization\ with\ idOrg\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idOrg"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getOrganizationLogoAddedEvent(keyVal) {
  return bp.EventSet("AddOrganizationLogo:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idOrg) === String(keyVal);
  });
}

function matchAnyOrganizationLogoAdded() {
  return bp.EventSet("matchAnyOrganizationLogoAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idOrg !== undefined && e.name.indexOf("Create organization logo") > -1;
  });
}

function waitForOrganizationLogoAdded(file, idOrg, key, token) {
  var expectedDesc = "Add logo to organization with idOrg " + idOrg;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedOrganizationLogo(file, idOrg, key, token) {
  var expectedDesc = "Delete logo from organization with idOrg " + idOrg;
  return bp.EventSet("matchDeletedOrganizationLogo", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrganizationLogoDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ logo\ from\ organization\ with\ idOrg\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ logo\ from\ organization\ with\ idOrg\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idOrg"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization member ----

function getOrganizationMemberByIdOrgByIdMember(idMember, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + idMember;
  var description = "Get organization member " + idMember + " in organization " + idOrg;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function updateOrganizationMemberByIdOrgByIdMember(idMember, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + idMember;
  var description = "Update organization member " + idMember + " in organization " + idOrg;
  var body = {
    "idMember": String(idMember),
    "idOrg": String(idOrg),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
      , idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

function deleteOrganizationMemberByIdOrgByIdMember(idMember, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + idMember;
  var description = "Delete organization member " + idMember + " from organization " + idOrg;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyOrganizationMemberExists(idMember, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMember with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("OrganizationMember exists");
          }
        }
      }
      return pvg.fail("Expected OrganizationMember to exist but it does not");
    }
  });
}

function verifyOrganizationMemberDoesNotExist(idMember, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMember with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected OrganizationMember to not exist but it does");
          }
        }
      }
      return pvg.success("OrganizationMember does not exist");
    }
  });
}

function tryToDeleteANonExistingOrganizationMember(idMember, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + idMember;
  var description = "Verify we cannot delete non-existing OrganizationMember";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedOrganizationMember(idMember, idOrg) {
  var expectedDesc = "Delete organization member " + idMember + " from organization " + idOrg;
  return bp.EventSet("matchDeletedOrganizationMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrganizationMemberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ organization\ member\ (.+)\ from\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ organization\ member\ (.+)\ from\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember", "idOrg"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization member deactivated ----

function updateOrganizationMemberDeactivatedByIdOrgByIdMember(idMember, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/deactivated";
  var description = "Update deactivated status of member " + idMember + " in organization " + idOrg;
  var body = {
    "idMember": String(idMember),
    "idOrg": String(idOrg),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
      , idMember: String(idMember)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

// ---- Entity: organization member invited ----

function getOrganizationMemberInvitedByIdOrg(field, idOrg) {
  var url = "/organizations/" + idOrg + "/membersInvited";
  var description = "Get invited members of organization " + idOrg;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getOrganizationMemberInvitedByIdOrgByField(field, idOrg) {
  var url = "/organizations/" + idOrg + "/membersInvited/" + field;
  var description = "Get invited members of organization " + idOrg + " filtered by " + field;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyOrganizationMemberInvitedExists(field, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMemberInvited with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("OrganizationMemberInvited exists");
          }
        }
      }
      return pvg.fail("Expected OrganizationMemberInvited to exist but it does not");
    }
  });
}

function verifyOrganizationMemberInvitedDoesNotExist(field, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMemberInvited with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected OrganizationMemberInvited to not exist but it does");
          }
        }
      }
      return pvg.success("OrganizationMemberInvited does not exist");
    }
  });
}

// ---- Entity: organization membership ----

function getOrganizationMembershipByIdOrgByIdMembership(idMembership, idOrg) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "Get membership " + idMembership + " in organization " + idOrg;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateOrganizationMembershipByIdOrgByIdMembership(idMembership, idOrg) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "Update membership " + idMembership + " in organization " + idOrg;
  var body = {
    "idMembership": String(idMembership),
    "idOrg": String(idOrg),
    "member_fields": "member_fields_dummy",
    "type": "type_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
      , idMembership: String(idMembership)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

function verifyOrganizationMembershipExists(idMembership, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMembership with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("OrganizationMembership exists");
          }
        }
      }
      return pvg.fail("Expected OrganizationMembership to exist but it does not");
    }
  });
}

function verifyOrganizationMembershipDoesNotExist(idMembership, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMembership with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected OrganizationMembership to not exist but it does");
          }
        }
      }
      return pvg.success("OrganizationMembership does not exist");
    }
  });
}

// ---- Entity: organization memberships ----

function getOrganizationMembershipsByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/memberships";
  var description = "Get memberships of organization " + idOrg;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyOrganizationMembershipsExists(idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMemberships with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("OrganizationMemberships exists");
          }
        }
      }
      return pvg.fail("Expected OrganizationMemberships to exist but it does not");
    }
  });
}

function verifyOrganizationMembershipsDoesNotExist(idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMemberships with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected OrganizationMemberships to not exist but it does");
          }
        }
      }
      return pvg.success("OrganizationMemberships does not exist");
    }
  });
}

// ---- Entity: organization members ----

function getOrganizationMembersByIdOrgByFilter(filter, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + filter;
  var description = "Get members of organization " + idOrg + " filtered by " + filter;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyOrganizationMembersExists(filter, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMembers with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("OrganizationMembers exists");
          }
        }
      }
      return pvg.fail("Expected OrganizationMembers to exist but it does not");
    }
  });
}

function verifyOrganizationMembersDoesNotExist(filter, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMembers with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected OrganizationMembers to not exist but it does");
          }
        }
      }
      return pvg.success("OrganizationMembers does not exist");
    }
  });
}

// ---- Entity: organization member cards ----

function getOrganizationMemberCardsByIdOrgByIdMember(idMember, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/cards";
  var description = "Get cards of member " + idMember + " in organization " + idOrg;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyOrganizationMemberCardsExists(idMember, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMemberCards with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("OrganizationMemberCards exists");
          }
        }
      }
      return pvg.fail("Expected OrganizationMemberCards to exist but it does not");
    }
  });
}

function verifyOrganizationMemberCardsDoesNotExist(idMember, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationMemberCards with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected OrganizationMemberCards to not exist but it does");
          }
        }
      }
      return pvg.success("OrganizationMemberCards does not exist");
    }
  });
}

// ---- Entity: organization member all ----

function deleteOrganizationMemberAllByIdOrgByIdMember(idMember, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/all";
  var description = "Delete all data of member " + idMember + " in organization " + idOrg;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToDeleteANonExistingOrganizationMemberAll(idMember, idOrg) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/all";
  var description = "Verify we cannot delete non-existing OrganizationMemberAll";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedOrganizationMemberAll(idMember, idOrg) {
  var expectedDesc = "Delete all data of member " + idMember + " in organization " + idOrg;
  return bp.EventSet("matchDeletedOrganizationMemberAll", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrganizationMemberAllDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ all\ data\ of\ member\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ all\ data\ of\ member\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idMember", "idOrg"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization name ----

function updateOrganizationNameByIdOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/name";
  var description = "Update name of organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

// ---- Entity: prefsAssociatedDomain ----

function updatePrefsAssociatedDomain(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Update prefs associated domain for organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

function deletePrefsAssociatedDomain(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Delete prefs associated domain for organization " + idOrg;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToDeleteANonExistingPrefsAssociatedDomain(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Verify we cannot delete non-existing PrefsAssociatedDomain";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedPrefsAssociatedDomain(idOrg) {
  var expectedDesc = "Delete prefs associated domain for organization " + idOrg;
  return bp.EventSet("matchDeletedPrefsAssociatedDomain", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPrefsAssociatedDomainDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ prefs\ associated\ domain\ for\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ prefs\ associated\ domain\ for\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idOrg"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: prefsBoardVisibilityRestrict ----

function updatePrefsBoardVisibilityRestrictOrg(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/org";
  var description = "Update prefs board visibility restrict org for organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function updatePrefsBoardVisibilityRestrictPrivate(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/private";
  var description = "Update prefs board visibility restrict private for organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function updatePrefsBoardVisibilityRestrictPublic(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/public";
  var description = "Update prefs board visibility restrict public for organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      , idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: prefsExternalMembersDisabled ----

function updatePrefsExternalMembersDisabled(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/externalMembersDisabled";
  var description = "Update prefs external members disabled for organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

// ---- Entity: prefsGoogleAppsVersion ----

function updatePrefsGoogleAppsVersion(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/googleAppsVersion";
  var description = "Update prefs google apps version for organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

// ---- Entity: prefsOrgInviteRestrict ----

function updatePrefsOrgInviteRestrict(idOrg, value) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Update prefs org invite restrict for organization " + idOrg + " with value " + value;
  var body = {
    "idOrg": String(idOrg),
    "value": String(value),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

function deletePrefsOrgInviteRestrict(idOrg, value) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Delete prefs org invite restrict for organization " + idOrg + " with value " + value;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToDeleteANonExistingPrefsOrgInviteRestrict(idOrg, value) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Verify we cannot delete non-existing PrefsOrgInviteRestrict";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedPrefsOrgInviteRestrict(idOrg, value) {
  var expectedDesc = "Delete prefs org invite restrict for organization " + idOrg + " with value " + value;
  return bp.EventSet("matchDeletedPrefsOrgInviteRestrict", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPrefsOrgInviteRestrictDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ prefs\ org\ invite\ restrict\ for\ organization\ (.+)\ with\ value\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ prefs\ org\ invite\ restrict\ for\ organization\ (.+)\ with\ value\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idOrg", "value"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: prefsPermissionLevel ----

function updatePrefsPermissionLevel(idOrg) {
  var url = "/organizations/" + idOrg + "/prefs/permissionLevel";
  var description = "Update prefs permission level for organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

// ---- Entity: organizationsWebsite ----

function updateOrganizationsWebsite(idOrg) {
  var url = "/organizations/" + idOrg + "/website";
  var description = "Update organizations website for organization " + idOrg;
  var body = {
    "idOrg": String(idOrg),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idOrg: String(idOrg)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idOrg: String(idOrg) }) });
}

// ---- Entity: organizationField ----

function getOrganizationField(field, idOrg) {
  var url = "/organizations/" + idOrg + "/" + field;
  var description = "Get organization " + field + " for organization " + idOrg;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyOrganizationFieldExists(field, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationField with idOrg " + idOrg + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.success("OrganizationField exists");
          }
        }
      }
      return pvg.fail("Expected OrganizationField to exist but it does not");
    }
  });
}

function verifyOrganizationFieldDoesNotExist(field, idOrg) {
  var url = "/organizations";
  var description = "Verify OrganizationField with idOrg " + idOrg + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idOrg) === String(idOrg)) {
            return pvg.fail("Expected OrganizationField to not exist but it does");
          }
        }
      }
      return pvg.success("OrganizationField does not exist");
    }
  });
}

// ---- Entity: notification ----

function getNotificationByIdNotification(idNotification) {
  var url = "/notifications/" + idNotification;
  var description = "Get notification with id " + idNotification;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateNotificationsUnreadByIdNotification(idNotification) {
  var url = "/notifications/" + idNotification + "/unread";
  var description = "Update unread status of notification " + idNotification;
  var body = {
    "idNotification": String(idNotification),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idNotification: String(idNotification)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idNotification: String(idNotification) }) });
}

function verifyNotificationExists(idNotification) {
  var url = "/notifications";
  var description = "Verify Notification with idNotification " + idNotification + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.success("Notification exists");
          }
        }
      }
      return pvg.fail("Expected Notification to exist but it does not");
    }
  });
}

function verifyNotificationDoesNotExist(idNotification) {
  var url = "/notifications";
  var description = "Verify Notification with idNotification " + idNotification + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.fail("Expected Notification to not exist but it does");
          }
        }
      }
      return pvg.success("Notification does not exist");
    }
  });
}

// ---- Entity: notification member ----

function getNotificationsMemberByIdNotification(idNotification) {
  var url = "/notifications/" + idNotification + "/member";
  var description = "Get member of notification " + idNotification;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyNotificationMemberExists(idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationMember with idNotification " + idNotification + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.success("NotificationMember exists");
          }
        }
      }
      return pvg.fail("Expected NotificationMember to exist but it does not");
    }
  });
}

function verifyNotificationMemberDoesNotExist(idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationMember with idNotification " + idNotification + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.fail("Expected NotificationMember to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationMember does not exist");
    }
  });
}

// ---- Entity: notification member field ----

function getNotificationsMemberByIdNotificationByField(field, idNotification) {
  var url = "/notifications/" + idNotification + "/member/" + field;
  var description = "Get member field " + field + " of notification " + idNotification;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyNotificationMemberFieldExists(field, idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationMemberField with idNotification " + idNotification + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.success("NotificationMemberField exists");
          }
        }
      }
      return pvg.fail("Expected NotificationMemberField to exist but it does not");
    }
  });
}

function verifyNotificationMemberFieldDoesNotExist(field, idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationMemberField with idNotification " + idNotification + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.fail("Expected NotificationMemberField to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationMemberField does not exist");
    }
  });
}

// ---- Entity: notification member creator ----

function getNotificationsMemberCreatorByIdNotification(idNotification) {
  var url = "/notifications/" + idNotification + "/memberCreator";
  var description = "Get member creator of notification " + idNotification;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyNotificationMemberCreatorExists(idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationMemberCreator with idNotification " + idNotification + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.success("NotificationMemberCreator exists");
          }
        }
      }
      return pvg.fail("Expected NotificationMemberCreator to exist but it does not");
    }
  });
}

function verifyNotificationMemberCreatorDoesNotExist(idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationMemberCreator with idNotification " + idNotification + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.fail("Expected NotificationMemberCreator to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationMemberCreator does not exist");
    }
  });
}

// ---- Entity: notification member creator field ----

function getNotificationsMemberCreatorByIdNotificationByField(field, idNotification) {
  var url = "/notifications/" + idNotification + "/memberCreator/" + field;
  var description = "Get member creator field " + field + " of notification " + idNotification;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyNotificationMemberCreatorFieldExists(field, idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationMemberCreatorField with idNotification " + idNotification + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.success("NotificationMemberCreatorField exists");
          }
        }
      }
      return pvg.fail("Expected NotificationMemberCreatorField to exist but it does not");
    }
  });
}

function verifyNotificationMemberCreatorFieldDoesNotExist(field, idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationMemberCreatorField with idNotification " + idNotification + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.fail("Expected NotificationMemberCreatorField to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationMemberCreatorField does not exist");
    }
  });
}

// ---- Entity: notification organization ----

function getNotificationsOrganizationByIdNotification(idNotification) {
  var url = "/notifications/" + idNotification + "/organization";
  var description = "Get organization of notification " + idNotification;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyNotificationOrganizationExists(idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationOrganization with idNotification " + idNotification + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.success("NotificationOrganization exists");
          }
        }
      }
      return pvg.fail("Expected NotificationOrganization to exist but it does not");
    }
  });
}

function verifyNotificationOrganizationDoesNotExist(idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationOrganization with idNotification " + idNotification + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.fail("Expected NotificationOrganization to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationOrganization does not exist");
    }
  });
}

// ---- Entity: notification organization field ----

function getNotificationsOrganizationByIdNotificationByField(field, idNotification) {
  var url = "/notifications/" + idNotification + "/organization/" + field;
  var description = "Get organization field " + field + " of notification " + idNotification;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyNotificationOrganizationFieldExists(field, idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationOrganizationField with idNotification " + idNotification + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.success("NotificationOrganizationField exists");
          }
        }
      }
      return pvg.fail("Expected NotificationOrganizationField to exist but it does not");
    }
  });
}

function verifyNotificationOrganizationFieldDoesNotExist(field, idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationOrganizationField with idNotification " + idNotification + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.fail("Expected NotificationOrganizationField to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationOrganizationField does not exist");
    }
  });
}

// ---- Entity: notification field ----

function getNotificationsByIdNotificationByField(field, idNotification) {
  var url = "/notifications/" + idNotification + "/" + field;
  var description = "Get notification field " + field + " of notification " + idNotification;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyNotificationFieldExists(field, idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationField with idNotification " + idNotification + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.success("NotificationField exists");
          }
        }
      }
      return pvg.fail("Expected NotificationField to exist but it does not");
    }
  });
}

function verifyNotificationFieldDoesNotExist(field, idNotification) {
  var url = "/notifications";
  var description = "Verify NotificationField with idNotification " + idNotification + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idNotification) === String(idNotification)) {
            return pvg.fail("Expected NotificationField to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationField does not exist");
    }
  });
}

// ---- Entity: action ----

function deleteAction(field, idAction) {
  var url = "/actions/" + idAction;
  var description = "Delete action with id " + idAction;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getActionByIdActionByField(field, idAction) {
  var url = "/actions/" + idAction + "/" + field;
  var description = "Get action " + idAction + " field " + field;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateActionsTextByIdAction(field, idAction) {
  var url = "/actions/" + idAction + "/text";
  var description = "Update action text for " + idAction;
  var body = {
    "idAction": String(idAction),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idAction: String(idAction)
      , field: String(field)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idAction: String(idAction) }) });
}

function verifyActionExists(field, idAction) {
  var url = "/actions";
  var description = "Verify Action with idAction " + idAction + " exists";
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

function verifyActionDoesNotExist(field, idAction) {
  var url = "/actions";
  var description = "Verify Action with idAction " + idAction + " does not exist";
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

function tryToDeleteANonExistingAction(field, idAction) {
  var url = "/actions/" + idAction;
  var description = "Verify we cannot delete non-existing Action";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedAction(field, idAction) {
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

// ---- Entity: action member ----

function getActionsMemberByIdActionByField(field, idAction) {
  var url = "/actions/" + idAction + "/member/" + field;
  var description = "Get action member " + field + " for action " + idAction;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyActionMemberExists(field, idAction) {
  var url = "/actions";
  var description = "Verify ActionMember with idAction " + idAction + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idAction) === String(idAction)) {
            return pvg.success("ActionMember exists");
          }
        }
      }
      return pvg.fail("Expected ActionMember to exist but it does not");
    }
  });
}

function verifyActionMemberDoesNotExist(field, idAction) {
  var url = "/actions";
  var description = "Verify ActionMember with idAction " + idAction + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idAction) === String(idAction)) {
            return pvg.fail("Expected ActionMember to not exist but it does");
          }
        }
      }
      return pvg.success("ActionMember does not exist");
    }
  });
}

// ---- Entity: action member creator ----

function getActionsMemberCreatorByIdActionByField(field, idAction) {
  var url = "/actions/" + idAction + "/memberCreator/" + field;
  var description = "Get action member creator " + field + " for action " + idAction;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getActionsMemberCreatorByIdAction(field, idAction) {
  var url = "/actions/" + idAction + "/memberCreator";
  var description = "Get action member creator for action " + idAction;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyActionMemberCreatorExists(field, idAction) {
  var url = "/actions";
  var description = "Verify ActionMemberCreator with idAction " + idAction + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idAction) === String(idAction)) {
            return pvg.success("ActionMemberCreator exists");
          }
        }
      }
      return pvg.fail("Expected ActionMemberCreator to exist but it does not");
    }
  });
}

function verifyActionMemberCreatorDoesNotExist(field, idAction) {
  var url = "/actions";
  var description = "Verify ActionMemberCreator with idAction " + idAction + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idAction) === String(idAction)) {
            return pvg.fail("Expected ActionMemberCreator to not exist but it does");
          }
        }
      }
      return pvg.success("ActionMemberCreator does not exist");
    }
  });
}

// ---- Entity: action organization ----

function getActionsOrganizationByIdActionByField(field, idAction) {
  var url = "/actions/" + idAction + "/organization/" + field;
  var description = "Get action organization " + field + " for action " + idAction;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getActionsOrganizationByIdAction(field, idAction) {
  var url = "/actions/" + idAction + "/organization";
  var description = "Get action organization for action " + idAction;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyActionOrganizationExists(field, idAction) {
  var url = "/actions";
  var description = "Verify ActionOrganization with idAction " + idAction + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idAction) === String(idAction)) {
            return pvg.success("ActionOrganization exists");
          }
        }
      }
      return pvg.fail("Expected ActionOrganization to exist but it does not");
    }
  });
}

function verifyActionOrganizationDoesNotExist(field, idAction) {
  var url = "/actions";
  var description = "Verify ActionOrganization with idAction " + idAction + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idAction) === String(idAction)) {
            return pvg.fail("Expected ActionOrganization to not exist but it does");
          }
        }
      }
      return pvg.success("ActionOrganization does not exist");
    }
  });
}

// ---- Entity: listClosed ----

function updateListsClosedByIdList(idList) {
  var url = "/lists/" + idList + "/closed";
  var description = "Update closed status of list " + idList + " to {closed}";
  var body = {
    "idList": String(idList),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

// ---- Entity: listIdBoard ----

function updateListsIdBoardByIdList(idList) {
  var url = "/lists/" + idList + "/idBoard";
  var description = "Update board id of list " + idList + " to {idBoard}";
  var body = {
    "idList": String(idList),
    "pos": "pos_dummy",
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

// ---- Entity: listCard ----

function addListsCardsByIdList(desc, due, idList, idMembers, labels, name) {
  var url = "/lists/" + idList + "/cards";
  var description = "Add card with name " + name + " to list " + idList;
  var body = {
    "desc": String(desc),
    "due": String(due),
    "idList": String(idList),
    "idMembers": String(idMembers),
    "labels": String(labels),
    "name": String(name),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idList: String(idList)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idList: String(idList) }) });
}

function getListsCardsByIdList(desc, due, idList, idMembers, labels, name) {
  var url = "/lists/" + idList + "/cards";
  var description = "Get cards of list " + idList;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingListCard(desc, due, idList, idMembers, labels, name) {
  getListsCardsByIdList(desc, due, idList, idMembers, labels, name);
}

function verifyListCardExists(desc, due, idList, idMembers, labels, name) {
  var url = "/lists/" + idList + "/cards";
  var description = "Verify ListCard with idList " + idList + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idList) === String(idList)) {
            return pvg.success("ListCard exists");
          }
        }
      }
      return pvg.fail("Expected ListCard to exist but it does not");
    }
  });
}

function verifyListCardDoesNotExist(desc, due, idList, idMembers, labels, name) {
  var url = "/lists/" + idList + "/cards";
  var description = "Verify ListCard with idList " + idList + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idList) === String(idList)) {
            return pvg.fail("Expected ListCard to not exist but it does");
          }
        }
      }
      return pvg.success("ListCard does not exist");
    }
  });
}

function matchAddedListCard(desc, due, idList, idMembers, labels, name) {
  var expectedDesc = "Add card with name " + name + " to list " + idList;
  return matchSuccess(expectedDesc);
}

function waitForAnyListCardAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ card\ with\ name\ (.+)\ to\ list\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ card\ with\ name\ (.+)\ to\ list\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "idList"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getListCardAddedEvent(keyVal) {
  return bp.EventSet("AddListCard:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idList) === String(keyVal);
  });
}

function matchAnyListCardAdded() {
  return bp.EventSet("matchAnyListCardAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idList !== undefined && e.name.indexOf("Create listCard") > -1;
  });
}

function waitForListCardAdded(desc, due, idList, idMembers, labels, name) {
  var expectedDesc = "Add card with name " + name + " to list " + idList;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: checklist check item ----

function addChecklistsCheckItemsByIdChecklist(checked, idCheckItem, idChecklist, name, pos) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "Add check item to checklist " + idChecklist;
  var body = {
    "checked": String(checked),
    "idChecklist": String(idChecklist),
    "name": String(name),
    "pos": String(pos),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idChecklist: String(idChecklist)
      , idCheckItem: String(idCheckItem)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idChecklist: String(idChecklist) }) });
}

function deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(checked, idCheckItem, idChecklist, name, pos) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "Delete check item " + idCheckItem + " from checklist " + idChecklist;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getChecklistsCheckItemsByIdChecklistByIdCheckItem(checked, idCheckItem, idChecklist, name, pos) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "Get check item " + idCheckItem + " from checklist " + idChecklist;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos) {
  getChecklistsCheckItemsByIdChecklistByIdCheckItem(checked, idCheckItem, idChecklist, name, pos);
}

function verifyChecklistCheckItemExists(checked, idCheckItem, idChecklist, name, pos) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "Verify ChecklistCheckItem with idChecklist " + idChecklist + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idChecklist) === String(idChecklist)) {
            return pvg.success("ChecklistCheckItem exists");
          }
        }
      }
      return pvg.fail("Expected ChecklistCheckItem to exist but it does not");
    }
  });
}

function verifyChecklistCheckItemDoesNotExist(checked, idCheckItem, idChecklist, name, pos) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "Verify ChecklistCheckItem with idChecklist " + idChecklist + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idChecklist) === String(idChecklist)) {
            return pvg.fail("Expected ChecklistCheckItem to not exist but it does");
          }
        }
      }
      return pvg.success("ChecklistCheckItem does not exist");
    }
  });
}

function tryToDeleteANonExistingChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "Verify we cannot delete non-existing ChecklistCheckItem";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos) {
  var expectedDesc = "Add check item to checklist " + idChecklist;
  return matchSuccess(expectedDesc);
}

function waitForAnyChecklistCheckItemAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ check\ item\ to\ checklist\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ check\ item\ to\ checklist\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idChecklist"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getChecklistCheckItemAddedEvent(keyVal) {
  return bp.EventSet("AddChecklistCheckItem:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idChecklist) === String(keyVal);
  });
}

function matchAnyChecklistCheckItemAdded() {
  return bp.EventSet("matchAnyChecklistCheckItemAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idChecklist !== undefined && e.name.indexOf("Create checklist check item") > -1;
  });
}

function waitForChecklistCheckItemAdded(checked, idCheckItem, idChecklist, name, pos) {
  var expectedDesc = "Add check item to checklist " + idChecklist;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos) {
  var expectedDesc = "Delete check item " + idCheckItem + " from checklist " + idChecklist;
  return bp.EventSet("matchDeletedChecklistCheckItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyChecklistCheckItemDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ check\ item\ (.+)\ from\ checklist\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ check\ item\ (.+)\ from\ checklist\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idCheckItem", "idChecklist"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: checklist idCard ----

function updateChecklistsIdCardByIdChecklist(idChecklist) {
  var url = "/checklists/" + idChecklist + "/idCard";
  var description = "Update idCard of checklist " + idChecklist;
  var body = {
    "idChecklist": String(idChecklist),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idChecklist: String(idChecklist)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idChecklist: String(idChecklist) }) });
}

// ---- Entity: checklist name ----

function updateChecklistsNameByIdChecklist(idChecklist) {
  var url = "/checklists/" + idChecklist + "/name";
  var description = "Update name of checklist " + idChecklist;
  var body = {
    "idChecklist": String(idChecklist),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idChecklist: String(idChecklist)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idChecklist: String(idChecklist) }) });
}

// ---- Entity: webhook ----

function addWebhooks(active, callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/webhooks";
  var description = "Create webhook with id " + idWebhook;
  var body = {
    "active": active,
    "callbackURL": String(callbackURL),
    "description": String(description),
    "idModel": String(idModel),
    "idWebhook": String(idWebhook),
    "key": String(key),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idWebhook: String(idWebhook)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idWebhook: String(idWebhook) }) });
}

function getWebhooksByIdWebhook(active, callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook;
  var description = "Get webhook with id " + idWebhook;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateWebhooksByIdWebhook(active, callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook;
  var description = "Update webhook with id " + idWebhook;
  var body = {
    "idWebhook": String(idWebhook),
    "key": String(key),
    "token": String(token),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idWebhook: String(idWebhook)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idWebhook: String(idWebhook) }) });
}

function deleteWebhooksByIdWebhook(active, callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook;
  var description = "Delete webhook with id " + idWebhook;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingWebhook(active, callbackURL, description, idModel, idWebhook, key, token) {
  deleteWebhooksByIdWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
}

function verifyWebhookExists(active, callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/webhooks";
  var description = "Verify Webhook with idWebhook " + idWebhook + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idWebhook) === String(idWebhook)) {
            return pvg.success("Webhook exists");
          }
        }
      }
      return pvg.fail("Expected Webhook to exist but it does not");
    }
  });
}

function verifyWebhookDoesNotExist(active, callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/webhooks";
  var description = "Verify Webhook with idWebhook " + idWebhook + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idWebhook) === String(idWebhook)) {
            return pvg.fail("Expected Webhook to not exist but it does");
          }
        }
      }
      return pvg.success("Webhook does not exist");
    }
  });
}

function tryToDeleteANonExistingWebhook(active, callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook;
  var description = "Verify we cannot delete non-existing Webhook";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchAddedWebhook(active, callbackURL, description, idModel, idWebhook, key, token) {
  var expectedDesc = "Create webhook with id " + idWebhook;
  return matchSuccess(expectedDesc);
}

function waitForAnyWebhookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ webhook\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ webhook\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idWebhook"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWebhookAddedEvent(keyVal) {
  return bp.EventSet("AddWebhook:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.idWebhook) === String(keyVal);
  });
}

function matchAnyWebhookAdded() {
  return bp.EventSet("matchAnyWebhookAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.idWebhook !== undefined && e.name.indexOf("Create webhook") > -1;
  });
}

function waitForWebhookAdded(active, callbackURL, description, idModel, idWebhook, key, token) {
  var expectedDesc = "Create webhook with id " + idWebhook;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedWebhook(active, callbackURL, description, idModel, idWebhook, key, token) {
  var expectedDesc = "Delete webhook with id " + idWebhook;
  return bp.EventSet("matchDeletedWebhook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWebhookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ webhook\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ webhook\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["idWebhook"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: webhook active ----

function updateWebhooksActiveByIdWebhook(idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook + "/active";
  var description = "Update webhook active status with id " + idWebhook;
  var body = {
    "idWebhook": String(idWebhook),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idWebhook: String(idWebhook)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idWebhook: String(idWebhook) }) });
}

// ---- Entity: webhook callbackURL ----

function updateWebhooksCallbackURLByIdWebhook(idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook + "/callbackURL";
  var description = "Update webhook callbackURL with id " + idWebhook;
  var body = {
    "idWebhook": String(idWebhook),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idWebhook: String(idWebhook)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idWebhook: String(idWebhook) }) });
}

// ---- Entity: webhook description ----

function updateWebhooksDescriptionByIdWebhook(idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook + "/description";
  var description = "Update webhook description with id " + idWebhook;
  var body = {
    "idWebhook": String(idWebhook),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idWebhook: String(idWebhook)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idWebhook: String(idWebhook) }) });
}

// ---- Entity: webhook idModel ----

function updateWebhooksIdModelByIdWebhook(idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook + "/idModel";
  var description = "Update webhook idModel with id " + idWebhook;
  var body = {
    "idWebhook": String(idWebhook),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idWebhook: String(idWebhook)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idWebhook: String(idWebhook) }) });
}

// ---- Entity: webhook field ----

function getWebhooksByIdWebhookByField(field, idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook + "/" + field;
  var description = "Get webhook field " + field + " with id " + idWebhook;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyWebhookFieldExists(field, idWebhook, key, token) {
  var url = "/webhooks";
  var description = "Verify WebhookField with idWebhook " + idWebhook + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idWebhook) === String(idWebhook)) {
            return pvg.success("WebhookField exists");
          }
        }
      }
      return pvg.fail("Expected WebhookField to exist but it does not");
    }
  });
}

function verifyWebhookFieldDoesNotExist(field, idWebhook, key, token) {
  var url = "/webhooks";
  var description = "Verify WebhookField with idWebhook " + idWebhook + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].idWebhook) === String(idWebhook)) {
            return pvg.fail("Expected WebhookField to not exist but it does");
          }
        }
      }
      return pvg.success("WebhookField does not exist");
    }
  });
}

// ---- Entity: label color ----

function updateLabelsColorByIdLabel(idLabel, key, token) {
  var url = "/labels/" + idLabel + "/color";
  var description = "Update label color for label id " + idLabel;
  var body = {
    "idLabel": String(idLabel),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idLabel: String(idLabel)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idLabel: String(idLabel) }) });
}

// ---- Entity: label name ----

function updateLabelsNameByIdLabel(idLabel, key, token) {
  var url = "/labels/" + idLabel + "/name";
  var description = "Update label name for label id " + idLabel;
  var body = {
    "idLabel": String(idLabel),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idLabel: String(idLabel)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idLabel: String(idLabel) }) });
}

// ---- Entity: token ----

function getToken(key, token) {
  var url = "/tokens/" + token;
  var description = "Get token " + token;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function deleteToken(key, token) {
  var url = "/tokens/" + token;
  var description = "Delete token " + token;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyTokenExists(key, token) {
  var url = "/tokens";
  var description = "Verify Token with token " + token + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].token) === String(token)) {
            return pvg.success("Token exists");
          }
        }
      }
      return pvg.fail("Expected Token to exist but it does not");
    }
  });
}

function verifyTokenDoesNotExist(key, token) {
  var url = "/tokens";
  var description = "Verify Token with token " + token + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].token) === String(token)) {
            return pvg.fail("Expected Token to not exist but it does");
          }
        }
      }
      return pvg.success("Token does not exist");
    }
  });
}

function tryToDeleteANonExistingToken(key, token) {
  var url = "/tokens/" + token;
  var description = "Verify we cannot delete non-existing Token";
  svc.delete(url, {
    expectedResponseCodes: [200, 400],
    parameters: { description: description }
  });
}

function matchDeletedToken(key, token) {
  var expectedDesc = "Delete token " + token;
  return bp.EventSet("matchDeletedToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTokenDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: token member ----

function getTokenMember(field, key, token) {
  var url = "/tokens/" + token + "/member";
  var description = "Get member of token " + token;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function getTokenMemberByField(field, key, token) {
  var url = "/tokens/" + token + "/member/" + field;
  var description = "Get member field " + field + " of token " + token;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyTokenMemberExists(field, key, token) {
  var url = "/tokens";
  var description = "Verify TokenMember with token " + token + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].token) === String(token)) {
            return pvg.success("TokenMember exists");
          }
        }
      }
      return pvg.fail("Expected TokenMember to exist but it does not");
    }
  });
}

function verifyTokenMemberDoesNotExist(field, key, token) {
  var url = "/tokens";
  var description = "Verify TokenMember with token " + token + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].token) === String(token)) {
            return pvg.fail("Expected TokenMember to not exist but it does");
          }
        }
      }
      return pvg.success("TokenMember does not exist");
    }
  });
}

// ---- Entity: token webhook ----

function getTokenWebhooks(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Get webhooks of token " + token;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function addTokenWebhook(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Add webhook to token " + token;
  var body = {
    "callbackURL": String(callbackURL),
    "description": String(description),
    "idModel": String(idModel),
    "key": String(key),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      token: String(token)
      , idWebhook: String(idWebhook)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { token: String(token) }) });
}

function updateTokenWebhook(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Update webhook of token " + token;
  var body = {
    "callbackURL": String(callbackURL),
    "description": String(description),
    "idModel": String(idModel),
    "key": String(key),
    "token": String(token),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      token: String(token)
      , idWebhook: String(idWebhook)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { token: String(token) }) });
}

function getTokenWebhookById(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks/" + idWebhook;
  var description = "Get webhook " + idWebhook + " of token " + token;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function deleteTokenWebhookById(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks/" + idWebhook;
  var description = "Delete webhook " + idWebhook + " of token " + token;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function tryToAddExistingTokenWebhook(callbackURL, description, idModel, idWebhook, key, token) {
  deleteTokenWebhookById(callbackURL, description, idModel, idWebhook, key, token);
}

function verifyTokenWebhookExists(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Verify TokenWebhook with token " + token + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].token) === String(token)) {
            return pvg.success("TokenWebhook exists");
          }
        }
      }
      return pvg.fail("Expected TokenWebhook to exist but it does not");
    }
  });
}

function verifyTokenWebhookDoesNotExist(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Verify TokenWebhook with token " + token + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].token) === String(token)) {
            return pvg.fail("Expected TokenWebhook to not exist but it does");
          }
        }
      }
      return pvg.success("TokenWebhook does not exist");
    }
  });
}

function matchAddedTokenWebhook(callbackURL, description, idModel, idWebhook, key, token) {
  var expectedDesc = "Add webhook to token " + token;
  return matchSuccess(expectedDesc);
}

function waitForAnyTokenWebhookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ webhook\ to\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ webhook\ to\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTokenWebhookAddedEvent(keyVal) {
  return bp.EventSet("AddTokenWebhook:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.token) === String(keyVal);
  });
}

function matchAnyTokenWebhookAdded() {
  return bp.EventSet("matchAnyTokenWebhookAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.token !== undefined && e.name.indexOf("Create token webhook") > -1;
  });
}

function waitForTokenWebhookAdded(callbackURL, description, idModel, idWebhook, key, token) {
  var expectedDesc = "Add webhook to token " + token;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: session ----

function addSessions(idBoard, idSession, key, status, token) {
  var url = "/sessions";
  var description = "Create session with key " + key + " and token " + token;
  var body = {
    "idBoard": String(idBoard),
    "idSession": String(idSession),
    "key": String(key),
    "status": String(status),
    "token": String(token),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idSession: String(idSession)
      , idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idSession: String(idSession) }) });
}

function getSessionsSocket(idBoard, idSession, key, status, token) {
  var url = "/sessions/socket";
  var description = "Get sessions socket with key " + key + " and token " + token;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function updateSessionsByIdSession(idBoard, idSession, key, status, token) {
  var url = "/sessions/" + idSession;
  var description = "Update session " + idSession + " with key " + key + " and token " + token;
  var body = {
    "idBoard": String(idBoard),
    "idSession": String(idSession),
    "key": String(key),
    "status": String(status),
    "token": String(token),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idSession: String(idSession)
      , idBoard: String(idBoard)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idSession: String(idSession) }) });
}

function tryToAddExistingSession(idBoard, idSession, key, status, token) {
  updateSessionsByIdSession(idBoard, idSession, key, status, token);
}

function verifySessionExists(idBoard, idSession, key, status, token) {
  var url = "/sessions";
  var description = "Verify Session with idSession " + idSession + " exists";
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

function verifySessionDoesNotExist(idBoard, idSession, key, status, token) {
  var url = "/sessions";
  var description = "Verify Session with idSession " + idSession + " does not exist";
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

function matchAddedSession(idBoard, idSession, key, status, token) {
  var expectedDesc = "Create session with key " + key + " and token " + token;
  return matchSuccess(expectedDesc);
}

function waitForAnySessionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ session\ with\ key\ (.+)\ and\ token\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ session\ with\ key\ (.+)\ and\ token\ (.+)$/);
  var captures = m.slice(1);
  var names = ["key", "token"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.idSession !== undefined && e.name.indexOf("Create session") > -1;
  });
}

function waitForSessionAdded(idBoard, idSession, key, status, token) {
  var expectedDesc = "Create session with key " + key + " and token " + token;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: session status ----

function updateSessionsStatusByIdSession(idSession, key, token) {
  var url = "/sessions/" + idSession + "/status";
  var description = "Update session status for " + idSession + " with key " + key + " and token " + token;
  var body = {
    "idSession": String(idSession),
    "key": String(key),
    "token": String(token),
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400],
    parameters: {
      description: description,
      idSession: String(idSession)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { idSession: String(idSession) }) });
}

// ---- Entity: type ----

function getTypesById(id, key, token) {
  var url = "/types/" + id;
  var description = "Get type with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400]
  });
}

function verifyTypeExists(id, key, token) {
  var url = "/types";
  var description = "Verify Type with id " + id + " exists";
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
  var description = "Verify Type with id " + id + " does not exist";
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
