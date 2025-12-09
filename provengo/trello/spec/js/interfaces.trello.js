//@provengo summon rest
// === Auto-generated interfaces for trello ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 3000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function deleteActionsByIdAction(field, fields, idAction, key, text, token) {
  var url = "/actions/" + idAction;
  var description = "deleteActionsByIdAction()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsByIdActionByField(field, fields, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/" + field;
  var description = "getActionsByIdActionByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateActionsTextByIdAction(field, fields, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/text";
  var description = "updateActionsTextByIdAction()";
  var body = {
    "text": String(text),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "fields": fields, "idAction": idAction, "key": key, "text": text, "token": token}) });
}

function getActionsBoardByIdAction(field, fields, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/board";
  var description = "getActionsBoardByIdAction()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsBoardByIdActionByField(field, fields, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/board/" + field;
  var description = "getActionsBoardByIdActionByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsCardByIdAction(field, fields, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/card";
  var description = "getActionsCardByIdAction()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsCardByIdActionByField(field, fields, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/card/" + field;
  var description = "getActionsCardByIdActionByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsListByIdAction(field, fields, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/list";
  var description = "getActionsListByIdAction()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyActionsExists generated: Primary Key "idAction" is not in POST body (Server-Generated ID).
function matchAnyActionsAdded() {
  return bp.EventSet("Any Actions Added", function(e) {
      return e.name.startsWith("Done: Create Actions");
  });
}

function getActionsMemberCreatorByIdAction(field, fields, idAction, key, token) {
  var url = "/actions/" + idAction + "/memberCreator";
  var description = "Retrieve the member creator of an action.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsMemberCreatorByIdActionByField(field, fields, idAction, key, token) {
  var url = "/actions/" + idAction + "/memberCreator/" + field;
  var description = "Retrieve a specific field of the member creator of an action.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyActionsMemberCreatorExists generated: Primary Key "idAction" is not in POST body (Server-Generated ID).
function matchAnyActionsMemberCreatorAdded() {
  return bp.EventSet("Any ActionsMemberCreator Added", function(e) {
      return e.name.startsWith("Done: Create ActionsMemberCreator");
  });
}

function getActionsOrganizationByIdAction(field, fields, idAction, key, token) {
  var url = "/actions/" + idAction + "/organization";
  var description = "Retrieve the organization associated with an action.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsOrganizationByIdActionByField(field, fields, idAction, key, token) {
  var url = "/actions/" + idAction + "/organization/" + field;
  var description = "Retrieve a specific field of the organization associated with an action.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyActionsOrganizationExists generated: Primary Key "idAction" is not in POST body (Server-Generated ID).
function matchAnyActionsOrganizationAdded() {
  return bp.EventSet("Any ActionsOrganization Added", function(e) {
      return e.name.startsWith("Done: Create ActionsOrganization");
  });
}

function getBatch(id, key, token, urls) {
  var url = "/batch";
  var description = "getBatch()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBatchExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyBatchAdded() {
  return bp.EventSet("Any Batch Added", function(e) {
      return e.name.startsWith("Done: Create Batch");
  });
}

function addBoardsLabelsByIdBoard(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/labels";
  var description = "Add a new label to a specific board.";
  var body = {
    "name": String(name),
    "color": String(color),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "boards_subscribed": boards_subscribed, "checkItemStates": checkItemStates, "checklists": checklists, "color": color, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "since": since, "stickers": stickers, "token": token}) });
}

function getBoardsByIdBoardByField(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/" + field;
  var description = "getBoardsByIdBoardByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsSubscribedByIdBoard(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/subscribed";
  var description = "updateBoardsSubscribedByIdBoard()";
  var body = {
    "boards_subscribed": String(boards_subscribed),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "boards_subscribed": boards_subscribed, "checkItemStates": checkItemStates, "checklists": checklists, "color": color, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "since": since, "stickers": stickers, "token": token}) });
}

function getBoardsLabelsByIdBoard(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/labels";
  var description = "Retrieve all labels for a specific board.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsCardsByIdBoard(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/cards";
  var description = "Retrieve cards for a specific board.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsCardsByIdBoardByFilter(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/cards/" + filter;
  var description = "Retrieve cards for a specific board with a filter.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsLabelNamesBlueByIdBoard(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/labelNames/blue";
  var description = "updateBoardsLabelNamesBlueByIdBoard()";
  var body = {
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "boards_subscribed": boards_subscribed, "checkItemStates": checkItemStates, "checklists": checklists, "color": color, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "since": since, "stickers": stickers, "token": token}) });
}

function updateBoardsLabelNamesGreenByIdBoard(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/labelNames/green";
  var description = "updateBoardsLabelNamesGreenByIdBoard()";
  var body = {
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "boards_subscribed": boards_subscribed, "checkItemStates": checkItemStates, "checklists": checklists, "color": color, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "since": since, "stickers": stickers, "token": token}) });
}

function updateBoardsLabelNamesOrangeByIdBoard(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  var url = "/boards/" + idBoard + "/labelNames/orange";
  var description = "updateBoardsLabelNamesOrangeByIdBoard()";
  var body = {
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "boards_subscribed": boards_subscribed, "checkItemStates": checkItemStates, "checklists": checklists, "color": color, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "since": since, "stickers": stickers, "token": token}) });
}

// No verifyBoardsExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function waitForBoardsAdded(actions, attachment_fields, attachments, before, boards_subscribed, checkItemStates, checklists, color, field, fields, filter, idBoard, key, limit, member_fields, members, name, since, stickers, token) {
  waitFor(matchSuccess("Add a new label to a specific board."));
}

function matchAnyBoardsAdded() {
  return bp.EventSet("Any Boards Added", function(e) {
      return e.name.startsWith("Done: Add a new label to a specific board.");
  });
}

function getBoardsCardsByIdBoardByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, idBoard, idCard, key, labels, member_fields, members, token) {
  var url = "/boards/" + idBoard + "/cards/" + idCard;
  var description = "Retrieve a specific card from a board by board ID and card ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBoardsCardsExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsCardsAdded() {
  return bp.EventSet("Any BoardsCards Added", function(e) {
      return e.name.startsWith("Done: Create BoardsCards");
  });
}

function getBoardsChecklistsByIdBoard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos, token) {
  var url = "/boards/" + idBoard + "/checklists";
  var description = "List all checklists for a specific board by board ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addBoardsChecklistsByIdBoard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos, token) {
  var url = "/boards/" + idBoard + "/checklists";
  var description = "Add a new checklist to a specific board by board ID.";
  var body = {
    "name": String(name),
    "pos": String(pos),
    "idCard": String(idCard),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"card_fields": card_fields, "cards": cards, "checkItem_fields": checkItem_fields, "checkItems": checkItems, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idCard": idCard, "key": key, "name": name, "pos": pos, "token": token}) });
}

// No verifyBoardsChecklistsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForBoardsChecklistsAdded(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos, token) {
  waitFor(matchSuccess("Add a new checklist to a specific board by board ID."));
}

function matchAnyBoardsChecklistsAdded() {
  return bp.EventSet("Any BoardsChecklists Added", function(e) {
      return e.name.startsWith("Done: Add a new checklist to a specific board by board ID.");
  });
}

function updateBoardsClosedByIdBoard(idBoard, key, token, value) {
  var url = "/boards/" + idBoard + "/closed";
  var description = "Update the closed status of a specific board by board ID.";
  var body = {
    "value": value,
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idBoard": idBoard, "key": key, "token": token, "value": value}) });
}

// No verifyBoardsClosedExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsClosedAdded() {
  return bp.EventSet("Any BoardsClosed Added", function(e) {
      return e.name.startsWith("Done: Create BoardsClosed");
  });
}

function getBoardsDeltasByIdBoard(idBoard, ixLastUpdate, key, tags, token) {
  var url = "/boards/" + idBoard + "/deltas";
  var description = "Retrieve deltas for a specific board by board ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBoardsDeltasExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsDeltasAdded() {
  return bp.EventSet("Any BoardsDeltas Added", function(e) {
      return e.name.startsWith("Done: Create BoardsDeltas");
  });
}

function updateBoardsDescByIdBoard(desc, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/desc";
  var description = "Update the description of a specific board by board ID.";
  var body = {
    "desc": String(desc),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"desc": desc, "idBoard": idBoard, "key": key, "token": token}) });
}

// No verifyBoardsDescExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsDescAdded() {
  return bp.EventSet("Any BoardsDesc Added", function(e) {
      return e.name.startsWith("Done: Create BoardsDesc");
  });
}

function getBoardsListsByIdBoard(card_fields, cards, fields, filter, idBoard, key, name, pos, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Retrieve lists for a specific board.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addBoardsListsByIdBoard(card_fields, cards, fields, filter, idBoard, key, name, pos, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Add a new list to a specific board.";
  var body = {
    "name": String(name),
    "pos": String(pos),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"card_fields": card_fields, "cards": cards, "fields": fields, "filter": filter, "idBoard": idBoard, "key": key, "name": name, "pos": pos, "token": token}) });
}

function getBoardsListsByIdBoardByFilter(card_fields, cards, fields, filter, idBoard, key, name, pos, token) {
  var url = "/boards/" + idBoard + "/lists/" + filter;
  var description = "Retrieve lists for a specific board with a filter.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBoardsListsExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function waitForBoardsListsAdded(card_fields, cards, fields, filter, idBoard, key, name, pos, token) {
  waitFor(matchSuccess("Add a new list to a specific board."));
}

function matchAnyBoardsListsAdded() {
  return bp.EventSet("Any BoardsLists Added", function(e) {
      return e.name.startsWith("Done: Add a new list to a specific board.");
  });
}

function addBoardsMarkAsViewedByIdBoard(id, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/markAsViewed";
  var description = "Mark a board as viewed.";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "key": key, "token": token}) });
}

// No verifyBoardsMarkAsViewedExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForBoardsMarkAsViewedAdded(id, idBoard, key, token) {
  waitFor(matchSuccess("Mark a board as viewed."));
}

function matchAnyBoardsMarkAsViewedAdded() {
  return bp.EventSet("Any BoardsMarkAsViewed Added", function(e) {
      return e.name.startsWith("Done: Mark a board as viewed.");
  });
}

function getBoardsMembersByIdBoard(activity, boards_members, fields, filter, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members";
  var description = "Retrieve members of a specific board.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsMembersByIdBoardByIdMember(activity, boards_members, fields, filter, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "updateBoardsMembersByIdBoardByIdMember()";
  var body = {
    "boards_members": String(boards_members),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"activity": activity, "boards_members": boards_members, "fields": fields, "filter": filter, "idBoard": idBoard, "idMember": idMember, "key": key, "token": token}) });
}

function getBoardsMembersByIdBoardByFilter(activity, boards_members, fields, filter, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + filter;
  var description = "Retrieve members of a specific board with a filter.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function deleteBoardsMembersByIdBoardByIdMember(activity, boards_members, fields, filter, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "deleteBoardsMembersByIdBoardByIdMember()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBoardsMembersExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsMembersAdded() {
  return bp.EventSet("Any BoardsMembers Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMembers");
  });
}

function getBoardsMembersCardsByIdBoardByIdMember(actions, attachment_fields, attachments, board, board_fields, checkItemStates, checklists, fields, filter, id, idBoard, idMember, key, list, list_fields, member_fields, members, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember + "/cards";
  var description = "getBoardsMembersCardsByIdBoardByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBoardsMembersCardsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyBoardsMembersCardsAdded() {
  return bp.EventSet("Any BoardsMembersCards Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMembersCards");
  });
}

function getBoardsMembersInvitedByIdBoard(field, fields, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/membersInvited";
  var description = "getBoardsMembersInvitedByIdBoard()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsMembersInvitedByIdBoardByField(field, fields, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/membersInvited/" + field;
  var description = "getBoardsMembersInvitedByIdBoardByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBoardsMembersInvitedExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsMembersInvitedAdded() {
  return bp.EventSet("Any BoardsMembersInvited Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMembersInvited");
  });
}

function getBoardsMembershipsByIdBoard(boards_memberships, filter, idBoard, idMembership, key, member, member_fields, token) {
  var url = "/boards/" + idBoard + "/memberships";
  var description = "getBoardsMembershipsByIdBoard()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsMembershipsByIdBoardByIdMembership(boards_memberships, filter, idBoard, idMembership, key, member, member_fields, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Retrieve a specific membership of a board by board ID and membership ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsMembershipsByIdBoardByIdMembership(boards_memberships, filter, idBoard, idMembership, key, member, member_fields, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Update a specific membership of a board by board ID and membership ID.";
  var body = {
    "boards_memberships": String(boards_memberships),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"boards_memberships": boards_memberships, "filter": filter, "idBoard": idBoard, "idMembership": idMembership, "key": key, "member": member, "member_fields": member_fields, "token": token}) });
}

// No verifyBoardsMembershipsExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsMembershipsAdded() {
  return bp.EventSet("Any BoardsMemberships Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMemberships");
  });
}

function getBoardsMyPrefsByIdBoard(idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs";
  var description = "Retrieve preferences of a board by board ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsMyPrefsEmailPositionByIdBoard(idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs/emailPosition";
  var description = "Update email position preference of a board by board ID.";
  var body = {
    "myPrefs_emailPosition": String(myPrefs_emailPosition),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idBoard": idBoard, "key": key, "myPrefs_emailPosition": myPrefs_emailPosition, "myPrefs_idEmailList": myPrefs_idEmailList, "myPrefs_showListGuide": myPrefs_showListGuide, "token": token}) });
}

function updateBoardsMyPrefsIdEmailListByIdBoard(idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs/idEmailList";
  var description = "Update ID email list preference of a board by board ID.";
  var body = {
    "myPrefs_idEmailList": String(myPrefs_idEmailList),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idBoard": idBoard, "key": key, "myPrefs_emailPosition": myPrefs_emailPosition, "myPrefs_idEmailList": myPrefs_idEmailList, "myPrefs_showListGuide": myPrefs_showListGuide, "token": token}) });
}

function updateBoardsMyPrefsShowListGuideByIdBoard(idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs/showListGuide";
  var description = "Update show list guide preference of a board by board ID.";
  var body = {
    "myPrefs_showListGuide": String(myPrefs_showListGuide),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idBoard": idBoard, "key": key, "myPrefs_emailPosition": myPrefs_emailPosition, "myPrefs_idEmailList": myPrefs_idEmailList, "myPrefs_showListGuide": myPrefs_showListGuide, "token": token}) });
}

// No verifyBoardsMyPrefsExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsMyPrefsAdded() {
  return bp.EventSet("Any BoardsMyPrefs Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMyPrefs");
  });
}

function getBoardsOrganizationByIdBoard(field, fields, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/organization";
  var description = "Retrieve the organization of a board by its ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsOrganizationByIdBoardByField(field, fields, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/organization/" + field;
  var description = "Retrieve a specific field of the organization of a board by its ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBoardsOrganizationExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsOrganizationAdded() {
  return bp.EventSet("Any BoardsOrganization Added", function(e) {
      return e.name.startsWith("Done: Create BoardsOrganization");
  });
}

function addBoardsPowerUpsByIdBoard(idBoard, key, powerUp, powerUpId, token) {
  var url = "/boards/" + idBoard + "/powerUps";
  var description = "Add power-ups to a board by its ID.";
  var body = {
    "powerUpId": String(powerUpId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idBoard": idBoard, "key": key, "powerUp": powerUp, "powerUpId": powerUpId, "token": token}) });
}

function deleteBoardsPowerUpsByIdBoardByPowerUp(idBoard, key, powerUp, powerUpId, token) {
  var url = "/boards/" + idBoard + "/powerUps/" + powerUp;
  var description = "Delete a specific power-up from a board by its ID.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyBoardsPowerUpsExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function waitForBoardsPowerUpsAdded(idBoard, key, powerUp, powerUpId, token) {
  waitFor(matchSuccess("Add power-ups to a board by its ID."));
}

function matchAnyBoardsPowerUpsAdded() {
  return bp.EventSet("Any BoardsPowerUps Added", function(e) {
      return e.name.startsWith("Done: Add power-ups to a board by its ID.");
  });
}

function updateBoardsPrefsBackgroundByIdBoard(background, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/prefs/background";
  var description = "Update the background preferences of a board by its ID.";
  var body = {
    "background": String(background),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"background": background, "idBoard": idBoard, "key": key, "token": token}) });
}

// No verifyBoardsPrefsBackgroundExists generated: Primary Key "idBoard" is not in POST body (Server-Generated ID).
function matchAnyBoardsPrefsBackgroundAdded() {
  return bp.EventSet("Any BoardsPrefsBackground Added", function(e) {
      return e.name.startsWith("Done: Create BoardsPrefsBackground");
  });
}

function addCardsMarkAssociatedNotificationsReadByIdCard(color, field, fields, idCard, key, labels, token) {
  var url = "/cards/" + idCard + "/markAssociatedNotificationsRead";
  var description = "addCardsMarkAssociatedNotificationsReadByIdCard()";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "field": field, "fields": fields, "idCard": idCard, "key": key, "labels": labels, "token": token}) });
}

function deleteCardsLabelsByIdCardByColor(color, field, fields, idCard, key, labels, token) {
  var url = "/cards/" + idCard + "/labels/" + color;
  var description = "deleteCardsLabelsByIdCardByColor()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getCardsByIdCardByField(color, field, fields, idCard, key, labels, token) {
  var url = "/cards/" + idCard + "/" + field;
  var description = "getCardsByIdCardByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateCardsLabelsByIdCard(color, field, fields, idCard, key, labels, token) {
  var url = "/cards/" + idCard + "/labels";
  var description = "updateCardsLabelsByIdCard()";
  var body = {
    "labels": String(labels),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "field": field, "fields": fields, "idCard": idCard, "key": key, "labels": labels, "token": token}) });
}

function getCardsListByIdCard(color, field, fields, idCard, key, labels, token) {
  var url = "/cards/" + idCard + "/list";
  var description = "getCardsListByIdCard()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getCardsMembersByIdCard(color, field, fields, idCard, key, labels, token) {
  var url = "/cards/" + idCard + "/members";
  var description = "getCardsMembersByIdCard()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyCardsExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function waitForCardsAdded(color, field, fields, idCard, key, labels, token) {
  waitFor(matchSuccess("addCardsMarkAssociatedNotificationsReadByIdCard()"));
}

function matchAnyCardsAdded() {
  return bp.EventSet("Any Cards Added", function(e) {
      return e.name.startsWith("Done: addCardsMarkAssociatedNotificationsReadByIdCard()");
  });
}

function getCardsActionsByIdCard(before, display, entities, fields, filter, format, id, idCard, idModels, key, limit, member, memberCreator, memberCreator_fields, member_fields, page, since, token) {
  var url = "/cards/" + idCard + "/actions";
  var description = "List actions for a card by its ID or shortlink.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyCardsActionsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyCardsActionsAdded() {
  return bp.EventSet("Any CardsActions Added", function(e) {
      return e.name.startsWith("Done: Create CardsActions");
  });
}

function addCardsActionsCommentsByIdCard(actions_comments, cards_actions_comments, idAction, idCard, key, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "Attributes of \"Actions Comments\" to be added.";
  var body = {
    "actions_comments": String(actions_comments),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions_comments": actions_comments, "cards_actions_comments": cards_actions_comments, "idAction": idAction, "idCard": idCard, "key": key, "token": token}) });
}

function deleteCardsActionsCommentsByIdCardByIdAction(actions_comments, cards_actions_comments, idAction, idCard, key, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Delete a comment by its ID or shortlink.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateCardsActionsCommentsByIdCardByIdAction(actions_comments, cards_actions_comments, idAction, idCard, key, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "Attributes of \"Cards Actions Comments\" to be updated.";
  var body = {
    "cards_actions_comments": String(cards_actions_comments),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions_comments": actions_comments, "cards_actions_comments": cards_actions_comments, "idAction": idAction, "idCard": idCard, "key": key, "token": token}) });
}

// No verifyCardsActionsCommentsExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function waitForCardsActionsCommentsAdded(actions_comments, cards_actions_comments, idAction, idCard, key, token) {
  waitFor(matchSuccess("Attributes of \"Actions Comments\" to be added."));
}

function matchAnyCardsActionsCommentsAdded() {
  return bp.EventSet("Any CardsActionsComments Added", function(e) {
      return e.name.startsWith("Done: Attributes of \"Actions Comments\" to be added.");
  });
}

function getCardsAttachmentsByIdCard(fields, file, filter, idAttachment, idCard, key, mimeType, name, token) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Retrieve attachments for a specific card.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsAttachmentsByIdCard(fields, file, filter, idAttachment, idCard, key, mimeType, name, token) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Add an attachment to a specific card.";
  var body = {
    "name": String(name),
    "file": String(file),
    "mimeType": String(mimeType),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "file": file, "filter": filter, "idAttachment": idAttachment, "idCard": idCard, "key": key, "mimeType": mimeType, "name": name, "token": token}) });
}

function getCardsAttachmentsByIdCardByIdAttachment(fields, file, filter, idAttachment, idCard, key, mimeType, name, token) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Retrieve a specific attachment from a card.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function deleteCardsAttachmentsByIdCardByIdAttachment(fields, file, filter, idAttachment, idCard, key, mimeType, name, token) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Delete a specific attachment from a card.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyCardsAttachmentsExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function waitForCardsAttachmentsAdded(fields, file, filter, idAttachment, idCard, key, mimeType, name, token) {
  waitFor(matchSuccess("Add an attachment to a specific card."));
}

function matchAnyCardsAttachmentsAdded() {
  return bp.EventSet("Any CardsAttachments Added", function(e) {
      return e.name.startsWith("Done: Add an attachment to a specific card.");
  });
}

function getCardsBoardByIdCard(field, fields, idCard, key, token) {
  var url = "/cards/" + idCard + "/board";
  var description = "Retrieve the board associated with a specific card.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getCardsBoardByIdCardByField(field, fields, idCard, key, token) {
  var url = "/cards/" + idCard + "/board/" + field;
  var description = "Retrieve a specific field of the board associated with a card.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyCardsBoardExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function matchAnyCardsBoardAdded() {
  return bp.EventSet("Any CardsBoard Added", function(e) {
      return e.name.startsWith("Done: Create CardsBoard");
  });
}

function getCardsCheckItemStatesByIdCard(fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/checkItemStates";
  var description = "Retrieve check item states for a specific card.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyCardsCheckItemStatesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyCardsCheckItemStatesAdded() {
  return bp.EventSet("Any CardsCheckItemStates Added", function(e) {
      return e.name.startsWith("Done: Create CardsCheckItemStates");
  });
}

function updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, name, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/name";
  var description = "updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem()";
  var body = {
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "name": name, "token": token}) });
}

function addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, name, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/convertToCard";
  var description = "addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "name": name, "token": token}) });
}

function deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, name, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem;
  var description = "deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyCardsChecklistCheckItemExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function waitForCardsChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, key, name, token) {
  waitFor(matchSuccess("addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()"));
}

function matchAnyCardsChecklistCheckItemAdded() {
  return bp.EventSet("Any CardsChecklistCheckItem Added", function(e) {
      return e.name.startsWith("Done: addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()");
  });
}

function updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, pos, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/pos";
  var description = "updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem()";
  var body = {
    "pos": Number(pos),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "pos": pos, "token": token}) });
}

// No verifyCardsChecklistCheckItemPosExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function matchAnyCardsChecklistCheckItemPosAdded() {
  return bp.EventSet("Any CardsChecklistCheckItemPos Added", function(e) {
      return e.name.startsWith("Done: Create CardsChecklistCheckItemPos");
  });
}

function updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/state";
  var description = "updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem()";
  var body = {
    "state": String(state),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "state": state, "token": token}) });
}

// No verifyCardsChecklistCheckItemStateExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function matchAnyCardsChecklistCheckItemStateAdded() {
  return bp.EventSet("Any CardsChecklistCheckItemState Added", function(e) {
      return e.name.startsWith("Done: Create CardsChecklistCheckItemState");
  });
}

function getCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, idCard, idChecklist, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "getCardsChecklistsByIdCard()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, idCard, idChecklist, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "addCardsChecklistsByIdCard()";
  var body = {
    "name": String(name),
    "pos": Number(pos),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"card_fields": card_fields, "cards": cards, "checkItem_fields": checkItem_fields, "checkItems": checkItems, "fields": fields, "filter": filter, "idCard": idCard, "idChecklist": idChecklist, "key": key, "name": name, "pos": pos, "token": token}) });
}

function deleteCardsChecklistsByIdCardByIdChecklist(card_fields, cards, checkItem_fields, checkItems, fields, filter, idCard, idChecklist, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists/" + idChecklist;
  var description = "deleteCardsChecklistsByIdCardByIdChecklist()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyCardsChecklistsExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function waitForCardsChecklistsAdded(card_fields, cards, checkItem_fields, checkItems, fields, filter, idCard, idChecklist, key, name, pos, token) {
  waitFor(matchSuccess("addCardsChecklistsByIdCard()"));
}

function matchAnyCardsChecklistsAdded() {
  return bp.EventSet("Any CardsChecklists Added", function(e) {
      return e.name.startsWith("Done: addCardsChecklistsByIdCard()");
  });
}

function updateCardsClosedByIdCard(idCard, key, token, value) {
  var url = "/cards/" + idCard + "/closed";
  var description = "updateCardsClosedByIdCard()";
  var body = {
    "value": value,
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idCard": idCard, "key": key, "token": token, "value": value}) });
}

// No verifyCardsClosedExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function matchAnyCardsClosedAdded() {
  return bp.EventSet("Any CardsClosed Added", function(e) {
      return e.name.startsWith("Done: Create CardsClosed");
  });
}

function getCardsMembersVotedByIdCard(fields, idCard, idMember, key, memberId, token) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Retrieve members who voted on a card by card ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsMembersVotedByIdCard(fields, idCard, idMember, key, memberId, token) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "Add a member vote to a card by card ID.";
  var body = {
    "memberId": String(memberId),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "idCard": idCard, "idMember": idMember, "key": key, "memberId": memberId, "token": token}) });
}

function deleteCardsMembersVotedByIdCardByIdMember(fields, idCard, idMember, key, memberId, token) {
  var url = "/cards/" + idCard + "/membersVoted/" + idMember;
  var description = "Remove a member vote from a card by card ID and member ID.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyCardsMembersVotedExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function waitForCardsMembersVotedAdded(fields, idCard, idMember, key, memberId, token) {
  waitFor(matchSuccess("Add a member vote to a card by card ID."));
}

function matchAnyCardsMembersVotedAdded() {
  return bp.EventSet("Any CardsMembersVoted Added", function(e) {
      return e.name.startsWith("Done: Add a member vote to a card by card ID.");
  });
}

function updateCardsNameByIdCard(idCard, key, name, token) {
  var url = "/cards/" + idCard + "/name";
  var description = "Update the name of a card by card ID.";
  var body = {
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idCard": idCard, "key": key, "name": name, "token": token}) });
}

// No verifyCardsNameExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function matchAnyCardsNameAdded() {
  return bp.EventSet("Any CardsName Added", function(e) {
      return e.name.startsWith("Done: Create CardsName");
  });
}

function updateCardsPosByIdCard(idCard, key, pos, token) {
  var url = "/cards/" + idCard + "/pos";
  var description = "Update the position of a card by card ID.";
  var body = {
    "pos": String(pos),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idCard": idCard, "key": key, "pos": pos, "token": token}) });
}

// No verifyCardsPosExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function matchAnyCardsPosAdded() {
  return bp.EventSet("Any CardsPos Added", function(e) {
      return e.name.startsWith("Done: Create CardsPos");
  });
}

function getCardsStickersByIdCard(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Retrieve stickers on a card by card ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsStickersByIdCard(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Add a sticker to a card by card ID.";
  var body = {
    "image": String(image),
    "left": Number(left),
    "top": Number(top),
    "zIndex": Number(zIndex),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"cards_stickers": cards_stickers, "fields": fields, "idCard": idCard, "idSticker": idSticker, "image": image, "key": key, "left": left, "token": token, "top": top, "zIndex": zIndex}) });
}

function deleteCardsStickersByIdCardByIdSticker(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "deleteCardsStickersByIdCardByIdSticker()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getCardsStickersByIdCardByIdSticker(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "getCardsStickersByIdCardByIdSticker()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateCardsStickersByIdCardByIdSticker(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "updateCardsStickersByIdCardByIdSticker()";
  var body = {
    "cards_stickers": String(cards_stickers),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"cards_stickers": cards_stickers, "fields": fields, "idCard": idCard, "idSticker": idSticker, "image": image, "key": key, "left": left, "token": token, "top": top, "zIndex": zIndex}) });
}

// No verifyCardsStickersExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function waitForCardsStickersAdded(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex) {
  waitFor(matchSuccess("Add a sticker to a card by card ID."));
}

function matchAnyCardsStickersAdded() {
  return bp.EventSet("Any CardsStickers Added", function(e) {
      return e.name.startsWith("Done: Add a sticker to a card by card ID.");
  });
}

function updateCardsSubscribedByIdCard(cards_subscribed, idCard, key, token) {
  var url = "/cards/" + idCard + "/subscribed";
  var description = "updateCardsSubscribedByIdCard()";
  var body = {
    "cards_subscribed": String(cards_subscribed),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"cards_subscribed": cards_subscribed, "idCard": idCard, "key": key, "token": token}) });
}

// No verifyCardsSubscribedExists generated: Primary Key "idCard" is not in POST body (Server-Generated ID).
function matchAnyCardsSubscribedAdded() {
  return bp.EventSet("Any CardsSubscribed Added", function(e) {
      return e.name.startsWith("Done: Create CardsSubscribed");
  });
}

function addChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists";
  var description = "addChecklists()";
  var body = {
    "checklists": String(checklists),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getChecklistsCheckItemsByIdChecklistByIdCheckItem(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "getChecklistsCheckItemsByIdChecklistByIdCheckItem()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateChecklistsIdCardByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/idCard";
  var description = "updateChecklistsIdCardByIdChecklist()";
  var body = {
    "idCard": String(idCard),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function getChecklistsByIdChecklistByField(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/" + field;
  var description = "getChecklistsByIdChecklistByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getChecklistsCardsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/cards";
  var description = "List cards associated with a specific checklist.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getChecklistsCardsByIdChecklistByFilter(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/cards/" + filter;
  var description = "Retrieve cards associated with a checklist filtered by a specific criterion.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getChecklistsCheckItemsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "List check items associated with a specific checklist.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addChecklistsCheckItemsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "Add a check item to a specific checklist.";
  var body = {
    "name": String(name),
    "pos": String(pos),
    "checked": checked,
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function updateChecklistsNameByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/name";
  var description = "updateChecklistsNameByIdChecklist()";
  var body = {
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function updateChecklistsPosByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/pos";
  var description = "updateChecklistsPosByIdChecklist()";
  var body = {
    "pos": String(pos),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

// No verifyChecklistsExists generated: Primary Key "idChecklist" is not in POST body (Server-Generated ID).
function waitForChecklistsAdded(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  waitFor(matchSuccess("addChecklists()"));
}

function matchAnyChecklistsAdded() {
  return bp.EventSet("Any Checklists Added", function(e) {
      return e.name.startsWith("Done: addChecklists()");
  });
}

function addLabels(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels";
  var description = "Attributes of \"Labels\" to be added.";
  var body = {
    "name": String(name),
    "color": String(color),
    "idBoard": String(idBoard),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "fields": fields, "idBoard": idBoard, "idLabel": idLabel, "key": key, "name": name, "token": token}) });
}

function deleteLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Delete a label by its ID.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Retrieve a label by its ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateLabelsNameByIdLabel(color, fields, idBoard, idLabel, key, name, token) {
  var url = "/labels/" + idLabel + "/name";
  var description = "updateLabelsNameByIdLabel()";
  var body = {
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "fields": fields, "idBoard": idBoard, "idLabel": idLabel, "key": key, "name": name, "token": token}) });
}

// No verifyLabelsExists generated: Primary Key "idLabel" is not in POST body (Server-Generated ID).
function waitForLabelsAdded(color, fields, idBoard, idLabel, key, name, token) {
  waitFor(matchSuccess("Attributes of \"Labels\" to be added."));
}

function matchAnyLabelsAdded() {
  return bp.EventSet("Any Labels Added", function(e) {
      return e.name.startsWith("Done: Attributes of \"Labels\" to be added.");
  });
}

function getLabelsBoardByIdLabel(fields, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/board";
  var description = "Retrieve the board associated with a label by its ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyLabelsBoardExists generated: Primary Key "idLabel" is not in POST body (Server-Generated ID).
function matchAnyLabelsBoardAdded() {
  return bp.EventSet("Any LabelsBoard Added", function(e) {
      return e.name.startsWith("Done: Create LabelsBoard");
  });
}

function getLabelsBoardByIdLabelByField(field, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/board/" + field;
  var description = "Retrieve a specific field of the board associated with a label by its ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyLabelsBoardFieldExists generated: Primary Key "idLabel" is not in POST body (Server-Generated ID).
function matchAnyLabelsBoardFieldAdded() {
  return bp.EventSet("Any LabelsBoardField Added", function(e) {
      return e.name.startsWith("Done: Create LabelsBoardField");
  });
}

function updateLabelsColorByIdLabel(color, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/color";
  var description = "Attributes of \"Labels Color\" to be updated.";
  var body = {
    "color": String(color),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "idLabel": idLabel, "key": key, "token": token}) });
}

// No verifyLabelsColorExists generated: Primary Key "idLabel" is not in POST body (Server-Generated ID).
function matchAnyLabelsColorAdded() {
  return bp.EventSet("Any LabelsColor Added", function(e) {
      return e.name.startsWith("Done: Create LabelsColor");
  });
}

function addListsMoveAllCardsByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/moveAllCards";
  var description = "Move all cards from one list to another.";
  var body = {
    "idBoard": String(idBoard),
    "idList": String(idList),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function getListsByIdListByField(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/" + field;
  var description = "Retrieve specific field of a list by its ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateListsIdBoardByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/idBoard";
  var description = "Update the board ID for a specific list.";
  var body = {
    "idBoard": String(idBoard),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function getListsCardsByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/cards";
  var description = "Retrieve cards associated with a specific list.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateListsNameByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/name";
  var description = "Update the name of a specific list.";
  var body = {
    "name": String(name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateListsPosByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/pos";
  var description = "Update the position of a specific list.";
  var body = {
    "pos": String(pos),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateListsSubscribedByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/subscribed";
  var description = "Update the subscription status of a specific list.";
  var body = {
    "subscribed": subscribed,
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function tryToAddExistingLists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/moveAllCards";
  var description = "Try Add Existing Lists";
  var body = {
    "idBoard": String(idBoard),
    "idList": String(idList),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyListsExists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/" + field;
  var description = "Verify Lists " + idList + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Lists found");
}

function verifyListsDoesNotExist(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/" + field;
  var description = "Verify Lists " + idList + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Lists not found");
}

function waitForListsAdded(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  waitFor(matchSuccess("Move all cards from one list to another."));
}

function matchAnyListsAdded() {
  return bp.EventSet("Any Lists Added", function(e) {
      return e.name.startsWith("Done: Move all cards from one list to another.");
  });
}

function getMembersByIdMemberByField(field, filter, idMember, key, members_avatarSource, members_username, token) {
  var url = "/members/" + idMember + "/" + field;
  var description = "getMembersByIdMemberByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersUsernameByIdMember(field, filter, idMember, key, members_avatarSource, members_username, token) {
  var url = "/members/" + idMember + "/username";
  var description = "updateMembersUsernameByIdMember()";
  var body = {
    "members_username": String(members_username),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "filter": filter, "idMember": idMember, "key": key, "members_avatarSource": members_avatarSource, "members_username": members_username, "token": token}) });
}

function getMembersTokensByIdMember(field, filter, idMember, key, members_avatarSource, members_username, token) {
  var url = "/members/" + idMember + "/tokens";
  var description = "getMembersTokensByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersOneTimeMessagesDismissedByIdMember(field, filter, idMember, key, members_avatarSource, members_username, token) {
  var url = "/members/" + idMember + "/oneTimeMessagesDismissed";
  var description = "addMembersOneTimeMessagesDismissedByIdMember()";
  var body = {
    "$ref": "#/components/schemas/members_oneTimeMessagesDismissed",
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "filter": filter, "idMember": idMember, "key": key, "members_avatarSource": members_avatarSource, "members_username": members_username, "token": token}) });
}

function updateMembersAvatarSourceByIdMember(field, filter, idMember, key, members_avatarSource, members_username, token) {
  var url = "/members/" + idMember + "/avatarSource";
  var description = "Update avatar source for a member by ID or username.";
  var body = {
    "members_avatarSource": String(members_avatarSource),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "filter": filter, "idMember": idMember, "key": key, "members_avatarSource": members_avatarSource, "members_username": members_username, "token": token}) });
}

// No verifyMembersExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function waitForMembersAdded(field, filter, idMember, key, members_avatarSource, members_username, token) {
  waitFor(matchSuccess("addMembersOneTimeMessagesDismissedByIdMember()"));
}

function matchAnyMembersAdded() {
  return bp.EventSet("Any Members Added", function(e) {
      return e.name.startsWith("Done: addMembersOneTimeMessagesDismissedByIdMember()");
  });
}

function updateMembersBioByIdMember(idMember, key, token) {
  var url = "/members/" + idMember + "/bio";
  var description = "updateMembersBioByIdMember()";
  var body = {
    "$ref": "#/components/schemas/members_bio",
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "key": key, "token": token}) });
}

// No verifyMembersBioExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersBioAdded() {
  return bp.EventSet("Any MembersBio Added", function(e) {
      return e.name.startsWith("Done: Create MembersBio");
  });
}

function getMembersBoardBackgroundsByIdMember(fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "getMembersBoardBackgroundsByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersBoardBackgroundsByIdMember(fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "addMembersBoardBackgroundsByIdMember()";
  var body = {
    "$ref": "#/components/schemas/members_boardBackgrounds",
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "filter": filter, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "token": token}) });
}

function getMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "getMembersBoardBackgroundsByIdMemberByIdBoardBackground()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "updateMembersBoardBackgroundsByIdMemberByIdBoardBackground()";
  var body = {
    "$ref": "#/components/schemas/members_boardBackgrounds",
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "filter": filter, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "token": token}) });
}

function deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersBoardBackgroundsExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function waitForMembersBoardBackgroundsAdded(fields, filter, idBoardBackground, idMember, key, token) {
  waitFor(matchSuccess("addMembersBoardBackgroundsByIdMember()"));
}

function matchAnyMembersBoardBackgroundsAdded() {
  return bp.EventSet("Any MembersBoardBackgrounds Added", function(e) {
      return e.name.startsWith("Done: addMembersBoardBackgroundsByIdMember()");
  });
}

function getMembersBoardStarsByIdMember(idBoard, idBoardStar, idMember, key, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "getMembersBoardStarsByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersBoardStarsByIdMember(idBoard, idBoardStar, idMember, key, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "addMembersBoardStarsByIdMember()";
  var body = {
    "$ref": "#/components/schemas/members_boardStars",
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idBoard": idBoard, "idBoardStar": idBoardStar, "idMember": idMember, "key": key, "token": token}) });
}

function getMembersBoardStarsByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "getMembersBoardStarsByIdMemberByIdBoardStar()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar + "/idBoard";
  var description = "updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar()";
  var body = {
    "idBoard": String(idBoard),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idBoard": idBoard, "idBoardStar": idBoardStar, "idMember": idMember, "key": key, "token": token}) });
}

function deleteMembersBoardStarsByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "deleteMembersBoardStarsByIdMemberByIdBoardStar()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersBoardStarsExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function waitForMembersBoardStarsAdded(idBoard, idBoardStar, idMember, key, token) {
  waitFor(matchSuccess("addMembersBoardStarsByIdMember()"));
}

function matchAnyMembersBoardStarsAdded() {
  return bp.EventSet("Any MembersBoardStars Added", function(e) {
      return e.name.startsWith("Done: addMembersBoardStarsByIdMember()");
  });
}

function updateMembersBoardStarsPosByIdMemberByIdBoardStar(idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar + "/pos";
  var description = "updateMembersBoardStarsPosByIdMemberByIdBoardStar()";
  var body = {
    "pos": String(pos),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idBoardStar": idBoardStar, "idMember": idMember, "key": key, "pos": pos, "token": token}) });
}

// No verifyMembersBoardStarsPosExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersBoardStarsPosAdded() {
  return bp.EventSet("Any MembersBoardStarsPos Added", function(e) {
      return e.name.startsWith("Done: Create MembersBoardStarsPos");
  });
}

function getMembersBoardsByIdMember(action_fields, actions, actions_entities, actions_format, actions_limit, actions_since, fields, filter, idMember, key, lists, memberships, organization, organization_fields, token) {
  var url = "/members/" + idMember + "/boards";
  var description = "getMembersBoardsByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersBoardsByIdMemberByFilter(action_fields, actions, actions_entities, actions_format, actions_limit, actions_since, fields, filter, idMember, key, lists, memberships, organization, organization_fields, token) {
  var url = "/members/" + idMember + "/boards/" + filter;
  var description = "getMembersBoardsByIdMemberByFilter()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersBoardsExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersBoardsAdded() {
  return bp.EventSet("Any MembersBoards Added", function(e) {
      return e.name.startsWith("Done: Create MembersBoards");
  });
}

function getMembersBoardsInvitedByIdMember(field, fields, idMember, key, token) {
  var url = "/members/" + idMember + "/boardsInvited";
  var description = "getMembersBoardsInvitedByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersBoardsInvitedByIdMemberByField(field, fields, idMember, key, token) {
  var url = "/members/" + idMember + "/boardsInvited/" + field;
  var description = "Retrieve invited boards for a member by specific field.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersBoardsInvitedExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersBoardsInvitedAdded() {
  return bp.EventSet("Any MembersBoardsInvited Added", function(e) {
      return e.name.startsWith("Done: Create MembersBoardsInvited");
  });
}

function getMembersCardsByIdMember(actions, attachment_fields, attachments, before, checkItemStates, checklists, fields, filter, idMember, key, limit, member_fields, members, since, stickers, token) {
  var url = "/members/" + idMember + "/cards";
  var description = "List all cards for a member.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersCardsByIdMemberByFilter(actions, attachment_fields, attachments, before, checkItemStates, checklists, fields, filter, idMember, key, limit, member_fields, members, since, stickers, token) {
  var url = "/members/" + idMember + "/cards/" + filter;
  var description = "Retrieve cards for a member by filter.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersCardsExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersCardsAdded() {
  return bp.EventSet("Any MembersCards Added", function(e) {
      return e.name.startsWith("Done: Create MembersCards");
  });
}

function getMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "List custom board backgrounds for a member.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "Add a custom board background for a member.";
  var body = {
    "customBoardBackgrounds": String(customBoardBackgrounds),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customBoardBackgrounds": customBoardBackgrounds, "fields": fields, "filter": filter, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "token": token}) });
}

function getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Retrieve a specific custom board background for a member.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Update a specific custom board background for a member.";
  var body = {
    "customBoardBackgrounds": String(customBoardBackgrounds),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customBoardBackgrounds": customBoardBackgrounds, "fields": fields, "filter": filter, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "token": token}) });
}

function deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Delete a specific custom board background for a member.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersCustomBoardBackgroundsExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function waitForMembersCustomBoardBackgroundsAdded(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token) {
  waitFor(matchSuccess("Add a custom board background for a member."));
}

function matchAnyMembersCustomBoardBackgroundsAdded() {
  return bp.EventSet("Any MembersCustomBoardBackgrounds Added", function(e) {
      return e.name.startsWith("Done: Add a custom board background for a member.");
  });
}

function getMembersCustomEmojiByIdMember(fields, filter, idCustomEmoji, idMember, key, name, token, url) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "This gets the list of all of the user’s uploaded emoji";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersCustomEmojiByIdMember(fields, filter, idCustomEmoji, idMember, key, name, token, url) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Attributes of \"Members Custom Emoji\" to be added.";
  var body = {
    "name": String(name),
    "url": String(url),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "filter": filter, "idCustomEmoji": idCustomEmoji, "idMember": idMember, "key": key, "name": name, "token": token, "url": url}) });
}

function getMembersCustomEmojiByIdMemberByIdCustomEmoji(fields, filter, idCustomEmoji, idMember, key, name, token, url) {
  var url = "/members/" + idMember + "/customEmoji/" + idCustomEmoji;
  var description = "Get a specific custom emoji by ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersCustomEmojiExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function waitForMembersCustomEmojiAdded(fields, filter, idCustomEmoji, idMember, key, name, token, url) {
  waitFor(matchSuccess("Attributes of \"Members Custom Emoji\" to be added."));
}

function matchAnyMembersCustomEmojiAdded() {
  return bp.EventSet("Any MembersCustomEmoji Added", function(e) {
      return e.name.startsWith("Done: Attributes of \"Members Custom Emoji\" to be added.");
  });
}

function getMembersCustomStickersByIdMember(fields, filter, idCustomSticker, idMember, key, name, token, url) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "This gets a list of all of the user’s uploaded stickers";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersCustomStickersByIdMember(fields, filter, idCustomSticker, idMember, key, name, token, url) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Attributes of \"Members Custom Stickers\" to be added.";
  var body = {
    "name": String(name),
    "url": String(url),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "filter": filter, "idCustomSticker": idCustomSticker, "idMember": idMember, "key": key, "name": name, "token": token, "url": url}) });
}

function getMembersCustomStickersByIdMemberByIdCustomSticker(fields, filter, idCustomSticker, idMember, key, name, token, url) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Get a specific custom sticker by ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function deleteMembersCustomStickersByIdMemberByIdCustomSticker(fields, filter, idCustomSticker, idMember, key, name, token, url) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Delete a specific custom sticker by ID.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersCustomStickersExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function waitForMembersCustomStickersAdded(fields, filter, idCustomSticker, idMember, key, name, token, url) {
  waitFor(matchSuccess("Attributes of \"Members Custom Stickers\" to be added."));
}

function matchAnyMembersCustomStickersAdded() {
  return bp.EventSet("Any MembersCustomStickers Added", function(e) {
      return e.name.startsWith("Done: Attributes of \"Members Custom Stickers\" to be added.");
  });
}

function getMembersDeltasByIdMember(id, idMember, ixLastUpdate, key, tags, token) {
  var url = "/members/" + idMember + "/deltas";
  var description = "Get deltas for a member.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersDeltasExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyMembersDeltasAdded() {
  return bp.EventSet("Any MembersDeltas Added", function(e) {
      return e.name.startsWith("Done: Create MembersDeltas");
  });
}

function getMembersOrganizationsByIdMember(fields, filter, idMember, key, paid_account, token) {
  var url = "/members/" + idMember + "/organizations";
  var description = "getMembersOrganizationsByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersOrganizationsByIdMemberByFilter(fields, filter, idMember, key, paid_account, token) {
  var url = "/members/" + idMember + "/organizations/" + filter;
  var description = "getMembersOrganizationsByIdMemberByFilter()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersOrganizationsExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersOrganizationsAdded() {
  return bp.EventSet("Any MembersOrganizations Added", function(e) {
      return e.name.startsWith("Done: Create MembersOrganizations");
  });
}

function getMembersOrganizationsInvitedByIdMember(field, fields, idMember, key, token) {
  var url = "/members/" + idMember + "/organizationsInvited";
  var description = "getMembersOrganizationsInvitedByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersOrganizationsInvitedByIdMemberByField(field, fields, idMember, key, token) {
  var url = "/members/" + idMember + "/organizationsInvited/" + field;
  var description = "getMembersOrganizationsInvitedByIdMemberByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersOrganizationsInvitedExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersOrganizationsInvitedAdded() {
  return bp.EventSet("Any MembersOrganizationsInvited Added", function(e) {
      return e.name.startsWith("Done: Create MembersOrganizationsInvited");
  });
}

function updateMembersPrefsColorBlindByIdMember(idMember, key, prefs_colorBlind, token) {
  var url = "/members/" + idMember + "/prefs/colorBlind";
  var description = "updateMembersPrefsColorBlindByIdMember()";
  var body = {
    "prefs_colorBlind": String(prefs_colorBlind),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "key": key, "prefs_colorBlind": prefs_colorBlind, "token": token}) });
}

// No verifyMembersPrefsExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersPrefsAdded() {
  return bp.EventSet("Any MembersPrefs Added", function(e) {
      return e.name.startsWith("Done: Create MembersPrefs");
  });
}

function updateMembersPrefsLocaleByIdMember(idMember, key, prefs_locale, token) {
  var url = "/members/" + idMember + "/prefs/locale";
  var description = "updateMembersPrefsLocaleByIdMember()";
  var body = {
    "prefs_locale": String(prefs_locale),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "key": key, "prefs_locale": prefs_locale, "token": token}) });
}

// No verifyMembersPrefsLocaleExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersPrefsLocaleAdded() {
  return bp.EventSet("Any MembersPrefsLocale Added", function(e) {
      return e.name.startsWith("Done: Create MembersPrefsLocale");
  });
}

function updateMembersPrefsMinutesBetweenSummariesByIdMember(idMember, key, prefs_minutesBetweenSummaries, token) {
  var url = "/members/" + idMember + "/prefs/minutesBetweenSummaries";
  var description = "updateMembersPrefsMinutesBetweenSummariesByIdMember()";
  var body = {
    "prefs_minutesBetweenSummaries": String(prefs_minutesBetweenSummaries),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "key": key, "prefs_minutesBetweenSummaries": prefs_minutesBetweenSummaries, "token": token}) });
}

// No verifyMembersPrefsMinutesBetweenSummariesExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersPrefsMinutesBetweenSummariesAdded() {
  return bp.EventSet("Any MembersPrefsMinutesBetweenSummaries Added", function(e) {
      return e.name.startsWith("Done: Create MembersPrefsMinutesBetweenSummaries");
  });
}

function getMembersSavedSearchesByIdMember(idMember, idSavedSearch, key, members_savedSearches, token) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "getMembersSavedSearchesByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersSavedSearchesByIdMember(idMember, idSavedSearch, key, members_savedSearches, token) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "addMembersSavedSearchesByIdMember()";
  var body = {
    "members_savedSearches": String(members_savedSearches),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_savedSearches": members_savedSearches, "token": token}) });
}

function getMembersSavedSearchesByIdMemberByIdSavedSearch(idMember, idSavedSearch, key, members_savedSearches, token) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "getMembersSavedSearchesByIdMemberByIdSavedSearch()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersSavedSearchesByIdMemberByIdSavedSearch(idMember, idSavedSearch, key, members_savedSearches, token) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "updateMembersSavedSearchesByIdMemberByIdSavedSearch()";
  var body = {
    "members_savedSearches": String(members_savedSearches),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_savedSearches": members_savedSearches, "token": token}) });
}

function deleteMembersSavedSearchesByIdMemberByIdSavedSearch(idMember, idSavedSearch, key, members_savedSearches, token) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "deleteMembersSavedSearchesByIdMemberByIdSavedSearch()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyMembersSavedSearchesExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function waitForMembersSavedSearchesAdded(idMember, idSavedSearch, key, members_savedSearches, token) {
  waitFor(matchSuccess("addMembersSavedSearchesByIdMember()"));
}

function matchAnyMembersSavedSearchesAdded() {
  return bp.EventSet("Any MembersSavedSearches Added", function(e) {
      return e.name.startsWith("Done: addMembersSavedSearchesByIdMember()");
  });
}

function updateMembersSavedSearchesNameByIdMemberByIdSavedSearch(idMember, idSavedSearch, key, members_savedSearches_name, token) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch + "/name";
  var description = "updateMembersSavedSearchesNameByIdMemberByIdSavedSearch()";
  var body = {
    "members_savedSearches_name": String(members_savedSearches_name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_savedSearches_name": members_savedSearches_name, "token": token}) });
}

// No verifyMembersSavedSearchesNameExists generated: Primary Key "idMember" is not in POST body (Server-Generated ID).
function matchAnyMembersSavedSearchesNameAdded() {
  return bp.EventSet("Any MembersSavedSearchesName Added", function(e) {
      return e.name.startsWith("Done: Create MembersSavedSearchesName");
  });
}

function addNotificationsAllRead(field, fields, idNotification, key, token) {
  var url = "/notifications/all/read";
  var description = "addNotificationsAllRead()";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "fields": fields, "idNotification": idNotification, "key": key, "token": token}) });
}

function getNotificationsByIdNotificationByField(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/" + field;
  var description = "getNotificationsByIdNotificationByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateNotificationsUnreadByIdNotification(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/unread";
  var description = "updateNotificationsUnreadByIdNotification()";
  var body = {
    "$ref": "#/components/schemas/notifications_unread",
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "fields": fields, "idNotification": idNotification, "key": key, "token": token}) });
}

function getNotificationsBoardByIdNotification(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/board";
  var description = "getNotificationsBoardByIdNotification()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsBoardByIdNotificationByField(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/board/" + field;
  var description = "getNotificationsBoardByIdNotificationByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsCardByIdNotification(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/card";
  var description = "getNotificationsCardByIdNotification()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsListByIdNotification(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/list";
  var description = "Retrieve a list of notifications by notification ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberByIdNotificationByField(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/member/" + field;
  var description = "Retrieve a specific field of member details for a specific notification.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberCreatorByIdNotification(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/memberCreator";
  var description = "Retrieve member creator details for a specific notification.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberCreatorByIdNotificationByField(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/memberCreator/" + field;
  var description = "Retrieve a specific field of member creator details for a specific notification.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsOrganizationByIdNotification(field, fields, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/organization";
  var description = "Retrieve organization details for a specific notification.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyNotificationsExists generated: Primary Key "idNotification" is not in POST body (Server-Generated ID).
function waitForNotificationsAdded(field, fields, idNotification, key, token) {
  waitFor(matchSuccess("addNotificationsAllRead()"));
}

function matchAnyNotificationsAdded() {
  return bp.EventSet("Any Notifications Added", function(e) {
      return e.name.startsWith("Done: addNotificationsAllRead()");
  });
}

function addOrganizationsLogoByIdOrg(activity, field, fields, filter, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "addOrganizationsLogoByIdOrg()";
  var body = {
    "logo": String(logo),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"activity": activity, "field": field, "fields": fields, "filter": filter, "idOrg": idOrg, "key": key, "logo": logo, "token": token, "value": value, "website": website}) });
}

function deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(activity, field, fields, filter, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Delete the organization invite restriction preferences for an organization by ID.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsByIdOrgByField(activity, field, fields, filter, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/" + field;
  var description = "getOrganizationsByIdOrgByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsWebsiteByIdOrg(activity, field, fields, filter, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/website";
  var description = "updateOrganizationsWebsiteByIdOrg()";
  var body = {
    "website": String(website),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"activity": activity, "field": field, "fields": fields, "filter": filter, "idOrg": idOrg, "key": key, "logo": logo, "token": token, "value": value, "website": website}) });
}

function getOrganizationsMembersByIdOrg(activity, field, fields, filter, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/members";
  var description = "getOrganizationsMembersByIdOrg()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyOrganizationsExists generated: Primary Key "idOrg" is not in POST body (Server-Generated ID).
function waitForOrganizationsAdded(activity, field, fields, filter, idOrg, key, logo, token, value, website) {
  waitFor(matchSuccess("addOrganizationsLogoByIdOrg()"));
}

function matchAnyOrganizationsAdded() {
  return bp.EventSet("Any Organizations Added", function(e) {
      return e.name.startsWith("Done: addOrganizationsLogoByIdOrg()");
  });
}

function deleteOrganizationsMembersAllByIdOrgByIdMember(actions, attachment_fields, attachments, board, board_fields, checkItemStates, checklists, fields, filter, idMember, idOrg, key, list, list_fields, member_fields, members, organizations_members_deactivated, token) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/all";
  var description = "deleteOrganizationsMembersAllByIdOrgByIdMember()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsMembersCardsByIdOrgByIdMember(actions, attachment_fields, attachments, board, board_fields, checkItemStates, checklists, fields, filter, idMember, idOrg, key, list, list_fields, member_fields, members, organizations_members_deactivated, token) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/cards";
  var description = "getOrganizationsMembersCardsByIdOrgByIdMember()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsMembersDeactivatedByIdOrgByIdMember(actions, attachment_fields, attachments, board, board_fields, checkItemStates, checklists, fields, filter, idMember, idOrg, key, list, list_fields, member_fields, members, organizations_members_deactivated, token) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/deactivated";
  var description = "updateOrganizationsMembersDeactivatedByIdOrgByIdMember()";
  var body = {
    "organizations_members_deactivated": String(organizations_members_deactivated),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "board": board, "board_fields": board_fields, "checkItemStates": checkItemStates, "checklists": checklists, "fields": fields, "filter": filter, "idMember": idMember, "idOrg": idOrg, "key": key, "list": list, "list_fields": list_fields, "member_fields": member_fields, "members": members, "organizations_members_deactivated": organizations_members_deactivated, "token": token}) });
}

// No verifyOrganizationsMembersExists generated: Primary Key "idOrg" is not in POST body (Server-Generated ID).
function matchAnyOrganizationsMembersAdded() {
  return bp.EventSet("Any OrganizationsMembers Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMembers");
  });
}

function getOrganizationsMembersInvitedByIdOrg(field, fields, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/membersInvited";
  var description = "getOrganizationsMembersInvitedByIdOrg()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsMembersInvitedByIdOrgByField(field, fields, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/membersInvited/" + field;
  var description = "getOrganizationsMembersInvitedByIdOrgByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyOrganizationsMembersInvitedExists generated: Primary Key "idOrg" is not in POST body (Server-Generated ID).
function matchAnyOrganizationsMembersInvitedAdded() {
  return bp.EventSet("Any OrganizationsMembersInvited Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMembersInvited");
  });
}

function getOrganizationsMembershipsByIdOrg(filter, idMembership, idOrg, key, member, member_fields, organizations_memberships, token) {
  var url = "/organizations/" + idOrg + "/memberships";
  var description = "Retrieve a list of memberships for a specific organization.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsMembershipsByIdOrgByIdMembership(filter, idMembership, idOrg, key, member, member_fields, organizations_memberships, token) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "Retrieve a specific membership by ID for a specific organization.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsMembershipsByIdOrgByIdMembership(filter, idMembership, idOrg, key, member, member_fields, organizations_memberships, token) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "Update a specific membership by ID for a specific organization.";
  var body = {
    "organizations_memberships": String(organizations_memberships),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"filter": filter, "idMembership": idMembership, "idOrg": idOrg, "key": key, "member": member, "member_fields": member_fields, "organizations_memberships": organizations_memberships, "token": token}) });
}

// No verifyOrganizationsMembershipsExists generated: Primary Key "idOrg" is not in POST body (Server-Generated ID).
function matchAnyOrganizationsMembershipsAdded() {
  return bp.EventSet("Any OrganizationsMemberships Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMemberships");
  });
}

function updateOrganizationsNameByIdOrg(idOrg, key, organizations_name, token) {
  var url = "/organizations/" + idOrg + "/name";
  var description = "Update the name of a specific organization.";
  var body = {
    "organizations_name": String(organizations_name),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idOrg": idOrg, "key": key, "organizations_name": organizations_name, "token": token}) });
}

// No verifyOrganizationsNameExists generated: Primary Key "idOrg" is not in POST body (Server-Generated ID).
function matchAnyOrganizationsNameAdded() {
  return bp.EventSet("Any OrganizationsName Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsName");
  });
}

function deleteOrganizationsPrefsAssociatedDomainByIdOrg(idOrg, key, prefs_associatedDomain, token) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Delete the associated domain preference for a specific organization.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsPrefsAssociatedDomainByIdOrg(idOrg, key, prefs_associatedDomain, token) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Update the associated domain preference for a specific organization.";
  var body = {
    "prefs_associatedDomain": String(prefs_associatedDomain),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idOrg": idOrg, "key": key, "prefs_associatedDomain": prefs_associatedDomain, "token": token}) });
}

// No verifyOrganizationsPrefsAssociatedDomainExists generated: Primary Key "idOrg" is not in POST body (Server-Generated ID).
function matchAnyOrganizationsPrefsAssociatedDomainAdded() {
  return bp.EventSet("Any OrganizationsPrefsAssociatedDomain Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsPrefsAssociatedDomain");
  });
}

function updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg(idOrg, key, prefs_boardVisibilityRestrict, token) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/org";
  var description = "Update the board visibility restriction preference for a specific organization.";
  var body = {
    "prefs_boardVisibilityRestrict": String(prefs_boardVisibilityRestrict),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idOrg": idOrg, "key": key, "prefs_boardVisibilityRestrict": prefs_boardVisibilityRestrict, "token": token}) });
}

// No verifyOrganizationsPrefsBoardVisibilityRestrictExists generated: Primary Key "idOrg" is not in POST body (Server-Generated ID).
function matchAnyOrganizationsPrefsBoardVisibilityRestrictAdded() {
  return bp.EventSet("Any OrganizationsPrefsBoardVisibilityRestrict Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsPrefsBoardVisibilityRestrict");
  });
}

function getSearchMembers(id, idBoard, idOrganization, key, limit, onlyOrgMembers, query, token) {
  var url = "/search/members";
  var description = "getSearchMembers()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifySearchExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnySearchAdded() {
  return bp.EventSet("Any Search Added", function(e) {
      return e.name.startsWith("Done: Create Search");
  });
}

function addSessions(idSession, key, sessions, sessions_status, token) {
  var url = "/sessions";
  var description = "Attributes of \"Sessions\" to be added.";
  var body = {
    "sessions": String(sessions),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idSession": idSession, "key": key, "sessions": sessions, "sessions_status": sessions_status, "token": token}) });
}

function getSessionsSocket(idSession, key, sessions, sessions_status, token) {
  var url = "/sessions/socket";
  var description = "This is the route for WebSocket requests. See the socket API reference for a description of WebSocket usage.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateSessionsByIdSession(idSession, key, sessions, sessions_status, token) {
  var url = "/sessions/" + idSession;
  var description = "Attributes of \"Sessions\" to be updated.";
  var body = {
    "sessions": String(sessions),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idSession": idSession, "key": key, "sessions": sessions, "sessions_status": sessions_status, "token": token}) });
}

function updateSessionsStatusByIdSession(idSession, key, sessions, sessions_status, token) {
  var url = "/sessions/" + idSession + "/status";
  var description = "Attributes of \"Sessions Status\" to be updated.";
  var body = {
    "sessions_status": String(sessions_status),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idSession": idSession, "key": key, "sessions": sessions, "sessions_status": sessions_status, "token": token}) });
}

// No verifySessionsExists generated: Primary Key "idSession" is not in POST body (Server-Generated ID).
function waitForSessionsAdded(idSession, key, sessions, sessions_status, token) {
  waitFor(matchSuccess("Attributes of \"Sessions\" to be added."));
}

function matchAnySessionsAdded() {
  return bp.EventSet("Any Sessions Added", function(e) {
      return e.name.startsWith("Done: Attributes of \"Sessions\" to be added.");
  });
}

function deleteTokensByToken(field, fields, key, token, webhooks) {
  var url = "/tokens/" + token;
  var description = "Delete a token by its identifier.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getTokensByToken(field, fields, key, token, webhooks) {
  var url = "/tokens/" + token;
  var description = "Retrieve a token by its identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getTokensByTokenByField(field, fields, key, token, webhooks) {
  var url = "/tokens/" + token + "/" + field;
  var description = "Retrieve specific field information associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyTokensExists generated: Primary Key "token" is not in POST body (Server-Generated ID).
function matchAnyTokensAdded() {
  return bp.EventSet("Any Tokens Added", function(e) {
      return e.name.startsWith("Done: Create Tokens");
  });
}

function getTokensMemberByToken(field, fields, key, token) {
  var url = "/tokens/" + token + "/member";
  var description = "Retrieve member information associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getTokensMemberByTokenByField(field, fields, key, token) {
  var url = "/tokens/" + token + "/member/" + field;
  var description = "Retrieve specific field information of a member associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyTokensMemberExists generated: Primary Key "token" is not in POST body (Server-Generated ID).
function matchAnyTokensMemberAdded() {
  return bp.EventSet("Any TokensMember Added", function(e) {
      return e.name.startsWith("Done: Create TokensMember");
  });
}

function getTokensWebhooksByToken(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "List all webhooks associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addTokensWebhooksByToken(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Add a new webhook associated with a token.";
  var body = {
    "callbackURL": String(callbackURL),
    "idModel": String(idModel),
    "description": String(description),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"callbackURL": callbackURL, "description": description, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token}) });
}

function updateTokensWebhooksByToken(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Update an existing webhook associated with a token.";
  var body = {
    "callbackURL": String(callbackURL),
    "idModel": String(idModel),
    "description": String(description),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"callbackURL": callbackURL, "description": description, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token}) });
}

function deleteTokensWebhooksByTokenByIdWebhook(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks/" + idWebhook;
  var description = "Delete a specific webhook associated with a token.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getTokensWebhooksByTokenByIdWebhook(callbackURL, description, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks/" + idWebhook;
  var description = "Retrieve a specific webhook associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyTokensWebhooksExists generated: Primary Key "token" is not in POST body (Server-Generated ID).
function waitForTokensWebhooksAdded(callbackURL, description, idModel, idWebhook, key, token) {
  waitFor(matchSuccess("Add a new webhook associated with a token."));
}

function matchAnyTokensWebhooksAdded() {
  return bp.EventSet("Any TokensWebhooks Added", function(e) {
      return e.name.startsWith("Done: Add a new webhook associated with a token.");
  });
}

function getTypesById(id, key, token) {
  var url = "/types/" + id;
  var description = "getTypesById()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// No verifyTypesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyTypesAdded() {
  return bp.EventSet("Any Types Added", function(e) {
      return e.name.startsWith("Done: Create Types");
  });
}

function addWebhooks(field, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks";
  var description = "addWebhooks()";
  var body = {
    "webhooks": String(webhooks),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function updateWebhooksIdModelByIdWebhook(field, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/idModel";
  var description = "updateWebhooksIdModelByIdWebhook()";
  var body = {
    "idModel": String(idModel),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function deleteWebhooksByIdWebhook(field, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "deleteWebhooksByIdWebhook()";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getWebhooksByIdWebhookByField(field, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/" + field;
  var description = "getWebhooksByIdWebhookByField()";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateWebhooksByIdWebhook(field, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "updateWebhooksByIdWebhook()";
  var body = {
    "webhooks": String(webhooks),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function updateWebhooksActiveByIdWebhook(field, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/active";
  var description = "updateWebhooksActiveByIdWebhook()";
  var body = {
    "webhooks_active": String(webhooks_active),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

// No verifyWebhooksExists generated: Primary Key "idWebhook" is not in POST body (Server-Generated ID).
function waitForWebhooksAdded(field, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  waitFor(matchSuccess("addWebhooks()"));
}

function matchAnyWebhooksAdded() {
  return bp.EventSet("Any Webhooks Added", function(e) {
      return e.name.startsWith("Done: addWebhooks()");
  });
}
