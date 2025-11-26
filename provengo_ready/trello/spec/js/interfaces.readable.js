//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("https://trello.com/1", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: action ----

function deleteAction(idAction, key, token) {
  var url = "/actions/" + idAction;
  var description = "Delete action " + idAction;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAction(idAction, key, token) {
  var url = "/actions/" + idAction;
  var description = "Get action " + idAction;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAction(idAction, key, token) {
  var url = "/actions/" + idAction;
  var description = "Update action " + idAction;
  var body = {
    "actions": actions,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateActionText(idAction, key, token) {
  var url = "/actions/" + idAction + "/text";
  var description = "Update action text " + idAction;
  var body = {
    "actions_text": actions_text,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyactionExists(idAction, key, token) {
  return getAction(idAction, key, token);
}

function verifyactionDoesNotExist(idAction, key, token) {
  return getAction(idAction, key, token);
}

function tryToDeleteANonExistingaction(idAction, key, token) {
  return deleteAction(idAction, key, token);
}

function matchDeletedaction(idAction, key, token) {
  return bp.EventSet("matchDeletedaction", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(idAction);
  });
}

function waitForAnyactionDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete action (.+)/)});
  var m = ev.data.parameters.description.match(/Delete action (.+)/);
  var captures = m.slice(1);
  var names = ["idAction", "key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: board ----

function addBoard(key, token) {
  var url = "/boards";
  var description = "Add board";
  var body = {
    "boards": boards,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard;
  var description = "Get board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoard(idBoard, key, token) {
  var url = "/boards/" + idBoard;
  var description = "Update board " + idBoard;
  var body = {
    "boards": boards,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingboard(key, token) {
  return addBoard(key, token);
}

function verifyboardExists(idBoard, key, token) {
  return getBoard(idBoard, key, token);
}

function verifyboardDoesNotExist(idBoard, key, token) {
  return getBoard(idBoard, key, token);
}

function matchAddedboard(key, token) {
  return bp.EventSet("matchAddedboard", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(key);
  });
}

function waitForAnyboardAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add board/)});
  var m = ev.data.parameters.description.match(/Add board/);
  var captures = m.slice(1);
  var names = ["key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: boardschecklists ----

function addBoardsChecklist(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/checklists";
  var description = "Add boards checklist to board " + idBoard;
  var body = {
    "boards_checklists": boards_checklists,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBoardsChecklists(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/checklists";
  var description = "Get boards checklists for board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingboardsChecklists(idBoard, key, token) {
  return addBoardsChecklist(idBoard, key, token);
}

function verifyboardsChecklistsExists(idBoard, key, token) {
  return getBoardsChecklists(idBoard, key, token);
}

function verifyboardsChecklistsDoesNotExist(idBoard, key, token) {
  return getBoardsChecklists(idBoard, key, token);
}

function matchAddedboardsChecklists(idBoard, key, token) {
  return bp.EventSet("matchAddedboardsChecklists", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(idBoard);
  });
}

function waitForAnyboardsChecklistsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add boards checklist to board (.+)/)});
  var m = ev.data.parameters.description.match(/Add boards checklist to board (.+)/);
  var captures = m.slice(1);
  var names = ["idBoard", "key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: boardslabels ----

function addBoardsLabel(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/labels";
  var description = "Add boards label to board " + idBoard;
  var body = {
    "boards_labels": boards_labels,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBoardsLabels(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/labels";
  var description = "Get boards labels for board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingboardsLabels(idBoard, key, token) {
  return addBoardsLabel(idBoard, key, token);
}

function verifyboardsLabelsExists(idBoard, key, token) {
  return getBoardsLabels(idBoard, key, token);
}

function verifyboardsLabelsDoesNotExist(idBoard, key, token) {
  return getBoardsLabels(idBoard, key, token);
}

function matchAddedboardsLabels(idBoard, key, token) {
  return bp.EventSet("matchAddedboardsLabels", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(idBoard);
  });
}

function waitForAnyboardsLabelsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add boards label to board (.+)/)});
  var m = ev.data.parameters.description.match(/Add boards label to board (.+)/);
  var captures = m.slice(1);
  var names = ["idBoard", "key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: boardslists ----

function addBoardsList(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Add boards list to board " + idBoard;
  var body = {
    "boards_lists": boards_lists,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBoardsLists(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Get boards lists for board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingboardsLists(idBoard, key, token) {
  return addBoardsList(idBoard, key, token);
}

function verifyboardsListsExists(idBoard, key, token) {
  return getBoardsLists(idBoard, key, token);
}

function verifyboardsListsDoesNotExist(idBoard, key, token) {
  return getBoardsLists(idBoard, key, token);
}

function matchAddedboardsLists(idBoard, key, token) {
  return bp.EventSet("matchAddedboardsLists", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(idBoard);
  });
}

function waitForAnyboardsListsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add boards list to board (.+)/)});
  var m = ev.data.parameters.description.match(/Add boards list to board (.+)/);
  var captures = m.slice(1);
  var names = ["idBoard", "key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: boardsmembers ----

function getBoardsMembers(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/members";
  var description = "Get boards members for board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMembers(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/members";
  var description = "Update boards members for board " + idBoard;
  var body = {
    "boards_members": boards_members,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyboardsMembersExists(idBoard, key, token) {
  return getBoardsMembers(idBoard, key, token);
}

function verifyboardsMembersDoesNotExist(idBoard, key, token) {
  return getBoardsMembers(idBoard, key, token);
}

// ---- Entity: boardsmembers ----

function deleteBoardsMember(idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "Delete boards member " + idMember + " from board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMember(idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "Update boards member " + idMember + " on board " + idBoard;
  var body = {
    "boards_members": boards_members,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingboardsMembersByIdMember(idBoard, idMember, key, token) {
  return deleteBoardsMember(idBoard, idMember, key, token);
}

function matchDeletedboardsMembersByIdMember(idBoard, idMember, key, token) {
  return bp.EventSet("matchDeletedboardsMembersByIdMember", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(idBoard);
  });
}

function waitForAnyboardsMembersByIdMemberDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete boards member (.+) from board (.+)/)});
  var m = ev.data.parameters.description.match(/Delete boards member (.+) from board (.+)/);
  var captures = m.slice(1);
  var names = ["idBoard", "idMember", "key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: boardsmemberships ----

function getBoardsMemberships(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/memberships";
  var description = "Get boards memberships for board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMemberships(idBoard, idMembership, key, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Update boards membership " + idMembership + " on board " + idBoard;
  var body = {
    "boards_memberships": boards_memberships,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyboardsMembershipsExists(idBoard, key, token) {
  return getBoardsMemberships(idBoard, key, token);
}

function verifyboardsMembershipsDoesNotExist(idBoard, key, token) {
  return getBoardsMemberships(idBoard, key, token);
}

// ---- Entity: boardsmemberships ----

function getBoardsMembershipById(idBoard, idMembership, key, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Get boards membership " + idMembership + " for board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBoardsMembershipById(idBoard, idMembership, key, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Update boards membership " + idMembership + " on board " + idBoard;
  var body = {
    "boards_memberships": boards_memberships,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyboardsMembershipsByIdMembershipExists(idBoard, idMembership, key, token) {
  return getBoardsMembershipById(idBoard, idMembership, key, token);
}

function verifyboardsMembershipsByIdMembershipDoesNotExist(idBoard, idMembership, key, token) {
  return getBoardsMembershipById(idBoard, idMembership, key, token);
}

// ---- Entity: list ----

function addList(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Add list to board " + idBoard;
  var body = {
    "boards_lists": boards_lists,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getLists(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Get lists for board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getListsByFilter(idBoard, filter, key, token) {
  var url = "/boards/" + idBoard + "/lists/" + filter;
  var description = "Get lists for board " + idBoard + " filtered by " + filter;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistinglist(idBoard, key, token) {
  return addList(idBoard, key, token);
}

function verifylistExists(idBoard, key, token) {
  return getLists(idBoard, key, token);
}

function verifylistDoesNotExist(idBoard, key, token) {
  return getLists(idBoard, key, token);
}

function matchAddedlist(idBoard, key, token) {
  return bp.EventSet("matchAddedlist", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(idBoard);
  });
}

function waitForAnylistAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add list to board (.+)/)});
  var m = ev.data.parameters.description.match(/Add list to board (.+)/);
  var captures = m.slice(1);
  var names = ["idBoard", "key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: card ----

function getCard(idBoard, idCard, key, token) {
  var url = "/boards/" + idBoard + "/cards/" + idCard;
  var description = "Get card " + idCard + " from board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCardsByFilter(idBoard, filter, key, token) {
  var url = "/boards/" + idBoard + "/cards/" + filter;
  var description = "Get cards from board " + idBoard + " filtered by " + filter;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCards(idBoard, key, token) {
  var url = "/boards/" + idBoard + "/cards";
  var description = "Get cards for board " + idBoard;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifycardExists(idBoard, idCard, key, token) {
  return getCard(idBoard, idCard, key, token);
}

function verifycardDoesNotExist(idBoard, idCard, key, token) {
  return getCard(idBoard, idCard, key, token);
}

// ---- Entity: member ----

function getMember(idMember, key, token) {
  var url = "/members/" + idMember;
  var description = "Get member " + idMember;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifymemberExists(idMember, key, token) {
  return getMember(idMember, key, token);
}

function verifymemberDoesNotExist(idMember, key, token) {
  return getMember(idMember, key, token);
}

// ---- Entity: webhook ----

function addWebhook(key, token) {
  var url = "/webhooks";
  var description = "Add webhook";
  var body = {
    "webhook": webhook,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhook(idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook;
  var description = "Delete webhook " + idWebhook;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhook(idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook;
  var description = "Get webhook " + idWebhook;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhook(idWebhook, key, token) {
  var url = "/webhooks/" + idWebhook;
  var description = "Update webhook " + idWebhook;
  var body = {
    "webhook": webhook,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingwebhook(key, token) {
  return addWebhook(key, token);
}

function verifywebhookExists(idWebhook, key, token) {
  return getWebhook(idWebhook, key, token);
}

function verifywebhookDoesNotExist(idWebhook, key, token) {
  return getWebhook(idWebhook, key, token);
}

function tryToDeleteANonExistingwebhook(idWebhook, key, token) {
  return deleteWebhook(idWebhook, key, token);
}

function matchAddedwebhook(key, token) {
  return bp.EventSet("matchAddedwebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(key);
  });
}

function waitForAnywebhookAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add webhook/)});
  var m = ev.data.parameters.description.match(/Add webhook/);
  var captures = m.slice(1);
  var names = ["key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedwebhook(key, token) {
  return bp.EventSet("matchDeletedwebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(key);
  });
}

function waitForAnywebhookDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete webhook (.+)/)});
  var m = ev.data.parameters.description.match(/Delete webhook (.+)/);
  var captures = m.slice(1);
  var names = ["key", "token"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: settings ----

function getSettings(key, token) {
  var url = "/settings";
  var description = "Get settings";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSettings(key, token) {
  var url = "/settings";
  var description = "Update settings";
  var body = {
    "settings": settings,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifysettingsExists(key, token) {
  return getSettings(key, token);
}

function verifysettingsDoesNotExist(key, token) {
  return getSettings(key, token);
}

// ---- Entity: user ----

function getUser(idUser, key, token) {
  var url = "/members/" + idUser;
  var description = "Get user " + idUser;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyuserExists(idUser, key, token) {
  return getUser(idUser, key, token);
}

function verifyuserDoesNotExist(idUser, key, token) {
  return getUser(idUser, key, token);
}
