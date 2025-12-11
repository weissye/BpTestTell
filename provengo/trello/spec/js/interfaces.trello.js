//@provengo summon rest
// === Auto-generated interfaces for trello ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function deleteActionsByIdAction(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction;
  var description = "deleteActionsByIdAction() " + idAction;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getActionsByIdActionByField(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/" + field;
  var description = "getActionsByIdActionByField() " + idAction;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateActionsTextByIdAction(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/text";
  var description = "updateActionsTextByIdAction() " + idAction;
  var body = {
    "id": String(id),
    "key": String(key),
    "text": String(text),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "fields": fields, "id": id, "idAction": idAction, "key": key, "text": text, "token": token}) });
}

function getActionsBoardByIdAction(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/board";
  var description = "getActionsBoardByIdAction() " + idAction;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsBoardByIdActionByField(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/board/" + field;
  var description = "getActionsBoardByIdActionByField() " + idAction;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsCardByIdAction(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/card";
  var description = "getActionsCardByIdAction() " + idAction;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsCardByIdActionByField(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/card/" + field;
  var description = "getActionsCardByIdActionByField() " + idAction;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getActionsListByIdAction(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/list";
  var description = "getActionsListByIdAction() " + idAction;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyActionsExists(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/" + field;
  var description = "Verify Actions " + idAction + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Actions found");
}

function verifyActionsDoesNotExist(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction + "/" + field;
  var description = "Verify Actions " + idAction + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Actions not found");
}

function tryToDeleteANonExistingActions(field, fields, id, idAction, key, text, token) {
  var url = "/actions/" + idAction;
  var description = "Verify negative delete for Actions";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedActions(field, fields, id, idAction, key, text, token) {
  return bp.EventSet("Delete Actions", function(e) {
      return e.name === "Done: " + "deleteActionsByIdAction()";
  });
}

function matchAnyActionsAdded() {
  return bp.EventSet("Any Actions Added", function(e) {
      return e.name.startsWith("Done: Create Actions");
  });
}

function getBatch(id, key, token, urls) {
  var url = "/batch";
  var description = "getBatch() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// verifyBatchExists skipped: No GET /{id} operation detected.
function matchAnyBatchAdded() {
  return bp.EventSet("Any Batch Added", function(e) {
      return e.name.startsWith("Done: Create Batch");
  });
}

function addBoardsPowerUpsByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/powerUps";
  var description = "addBoardsPowerUpsByIdBoard() " + idBoard;
  var body = {
    "id": String(id),
    "key": String(key),
    "powerUp": String(powerUp),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idOrganization": idOrganization, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function getBoardsByIdBoardByField(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/" + field;
  var description = "getBoardsByIdBoardByField() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsSubscribedByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/subscribed";
  var description = "updateBoardsSubscribedByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "subscribed": subscribed,
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idOrganization": idOrganization, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function getBoardsLabelsByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/labels";
  var description = "getBoardsLabelsByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsCardsByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/cards";
  var description = "getBoardsCardsByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsCardsByIdBoardByFilter(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/cards/" + filter;
  var description = "getBoardsCardsByIdBoardByFilter() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsIdOrganizationByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/idOrganization";
  var description = "updateBoardsIdOrganizationByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "idOrganization": String(idOrganization),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idOrganization": idOrganization, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateBoardsLabelNamesBlueByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/labelNames/blue";
  var description = "updateBoardsLabelNamesBlueByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idOrganization": idOrganization, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateBoardsLabelNamesGreenByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/labelNames/green";
  var description = "updateBoardsLabelNamesGreenByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idOrganization": idOrganization, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateBoardsLabelNamesOrangeByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/labelNames/orange";
  var description = "updateBoardsLabelNamesOrangeByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idOrganization": idOrganization, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function deleteBoardsPowerUpsByIdBoardByPowerUp(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/powerUps/" + powerUp;
  var description = "deleteBoardsPowerUpsByIdBoardByPowerUp() " + idBoard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingBoards(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/powerUps";
  var description = "Try Add Existing Boards " + idBoard;
  var body = {
    "id": String(id),
    "key": String(key),
    "powerUp": String(powerUp),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBoardsExists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/" + field;
  var description = "Verify Boards " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Boards found");
}

function verifyBoardsDoesNotExist(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/" + field;
  var description = "Verify Boards " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Boards not found");
}

function tryToDeleteANonExistingBoards(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  var url = "/boards/" + idBoard + "/powerUps/" + powerUp;
  var description = "Verify negative delete for Boards";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBoards(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  return bp.EventSet("Delete Boards", function(e) {
      return e.name === "Done: " + "deleteBoardsPowerUpsByIdBoardByPowerUp()";
  });
}

function waitForBoardsAdded(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed, token) {
  waitFor(matchSuccess("addBoardsPowerUpsByIdBoard()"));
}

function matchAnyBoardsAdded() {
  return bp.EventSet("Any Boards Added", function(e) {
      return e.name.startsWith("Done: addBoardsPowerUpsByIdBoard()");
  });
}

function getBoardsCardsByIdBoardByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idBoard, idCard, key, labels, member_fields, members, token) {
  var url = "/boards/" + idBoard + "/cards/" + idCard;
  var description = "getBoardsCardsByIdBoardByIdCard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyBoardsCardsExists(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idBoard, idCard, key, labels, member_fields, members, token) {
  var url = "/boards/" + idBoard + "/cards/" + idCard;
  var description = "Verify BoardsCards " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsCards found");
}

function verifyBoardsCardsDoesNotExist(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idBoard, idCard, key, labels, member_fields, members, token) {
  var url = "/boards/" + idBoard + "/cards/" + idCard;
  var description = "Verify BoardsCards " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BoardsCards not found");
}

function matchAnyBoardsCardsAdded() {
  return bp.EventSet("Any BoardsCards Added", function(e) {
      return e.name.startsWith("Done: Create BoardsCards");
  });
}

function getBoardsChecklistsByIdBoard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos, token) {
  var url = "/boards/" + idBoard + "/checklists";
  var description = "getBoardsChecklistsByIdBoard() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addBoardsChecklistsByIdBoard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos, token) {
  var url = "/boards/" + idBoard + "/checklists";
  var description = "addBoardsChecklistsByIdBoard() " + id;
  var body = {
    "id": String(id),
    "idCard": String(idCard),
    "key": String(key),
    "name": String(name),
    "pos": String(pos),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"card_fields": card_fields, "cards": cards, "checkItem_fields": checkItem_fields, "checkItems": checkItems, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idCard": idCard, "key": key, "name": name, "pos": pos, "token": token}) });
}

// verifyBoardsChecklistsExists skipped: No GET /{id} operation detected.
function waitForBoardsChecklistsAdded(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos, token) {
  waitFor(matchSuccess("addBoardsChecklistsByIdBoard()"));
}

function matchAnyBoardsChecklistsAdded() {
  return bp.EventSet("Any BoardsChecklists Added", function(e) {
      return e.name.startsWith("Done: addBoardsChecklistsByIdBoard()");
  });
}

function updateBoardsClosedByIdBoard(id, idBoard, key, token, value) {
  var url = "/boards/" + idBoard + "/closed";
  var description = "updateBoardsClosedByIdBoard() " + idBoard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
    "value": value,
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "key": key, "token": token, "value": value}) });
}

// verifyBoardsClosedExists skipped: No GET /{id} operation detected.
function matchAnyBoardsClosedAdded() {
  return bp.EventSet("Any BoardsClosed Added", function(e) {
      return e.name.startsWith("Done: Create BoardsClosed");
  });
}

function getBoardsDeltasByIdBoard(id, idBoard, ixLastUpdate, key, tags, token) {
  var url = "/boards/" + idBoard + "/deltas";
  var description = "getBoardsDeltasByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyBoardsDeltasExists(id, idBoard, ixLastUpdate, key, tags, token) {
  var url = "/boards/" + idBoard + "/deltas";
  var description = "Verify BoardsDeltas " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsDeltas found");
}

function verifyBoardsDeltasDoesNotExist(id, idBoard, ixLastUpdate, key, tags, token) {
  var url = "/boards/" + idBoard + "/deltas";
  var description = "Verify BoardsDeltas " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BoardsDeltas not found");
}

function matchAnyBoardsDeltasAdded() {
  return bp.EventSet("Any BoardsDeltas Added", function(e) {
      return e.name.startsWith("Done: Create BoardsDeltas");
  });
}

function updateBoardsDescByIdBoard(desc, id, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/desc";
  var description = "updateBoardsDescByIdBoard() " + idBoard;
  var body = {
    "desc": String(desc),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"desc": desc, "id": id, "idBoard": idBoard, "key": key, "token": token}) });
}

// verifyBoardsDescExists skipped: No GET /{id} operation detected.
function matchAnyBoardsDescAdded() {
  return bp.EventSet("Any BoardsDesc Added", function(e) {
      return e.name.startsWith("Done: Create BoardsDesc");
  });
}

function getBoardsListsByIdBoard(attributes, card_fields, cards, fields, filter, id, idBoard, key, name, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "getBoardsListsByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addBoardsListsByIdBoard(attributes, card_fields, cards, fields, filter, id, idBoard, key, name, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "addBoardsListsByIdBoard() " + idBoard;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "card_fields": card_fields, "cards": cards, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "key": key, "name": name, "token": token}) });
}

function getBoardsListsByIdBoardByFilter(attributes, card_fields, cards, fields, filter, id, idBoard, key, name, token) {
  var url = "/boards/" + idBoard + "/lists/" + filter;
  var description = "getBoardsListsByIdBoardByFilter() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingBoardsLists(attributes, card_fields, cards, fields, filter, id, idBoard, key, name, token) {
  var url = "/boards/" + idBoard + "/lists";
  var description = "Try Add Existing BoardsLists " + idBoard;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBoardsListsExists(attributes, card_fields, cards, fields, filter, id, idBoard, key, name, token) {
  var url = "/boards/" + idBoard + "/lists/" + filter;
  var description = "Verify BoardsLists " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsLists found");
}

function verifyBoardsListsDoesNotExist(attributes, card_fields, cards, fields, filter, id, idBoard, key, name, token) {
  var url = "/boards/" + idBoard + "/lists/" + filter;
  var description = "Verify BoardsLists " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BoardsLists not found");
}

function waitForBoardsListsAdded(attributes, card_fields, cards, fields, filter, id, idBoard, key, name, token) {
  waitFor(matchSuccess("addBoardsListsByIdBoard()"));
}

function matchAnyBoardsListsAdded() {
  return bp.EventSet("Any BoardsLists Added", function(e) {
      return e.name.startsWith("Done: addBoardsListsByIdBoard()");
  });
}

function addBoardsMarkAsViewedByIdBoard(id, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/markAsViewed";
  var description = "addBoardsMarkAsViewedByIdBoard() " + id;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "key": key, "token": token}) });
}

// verifyBoardsMarkAsViewedExists skipped: No GET /{id} operation detected.
function waitForBoardsMarkAsViewedAdded(id, idBoard, key, token) {
  waitFor(matchSuccess("addBoardsMarkAsViewedByIdBoard()"));
}

function matchAnyBoardsMarkAsViewedAdded() {
  return bp.EventSet("Any BoardsMarkAsViewed Added", function(e) {
      return e.name.startsWith("Done: addBoardsMarkAsViewedByIdBoard()");
  });
}

function getBoardsMembersByIdBoard(activity, fields, filter, id, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members";
  var description = "getBoardsMembersByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsMembersByIdBoardByIdMember(activity, fields, filter, id, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "updateBoardsMembersByIdBoardByIdMember() " + idBoard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"activity": activity, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idMember": idMember, "key": key, "token": token}) });
}

function getBoardsMembersByIdBoardByFilter(activity, fields, filter, id, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + filter;
  var description = "getBoardsMembersByIdBoardByFilter() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function deleteBoardsMembersByIdBoardByIdMember(activity, fields, filter, id, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "deleteBoardsMembersByIdBoardByIdMember() " + idBoard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function verifyBoardsMembersExists(activity, fields, filter, id, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + filter;
  var description = "Verify BoardsMembers " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsMembers found");
}

function verifyBoardsMembersDoesNotExist(activity, fields, filter, id, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + filter;
  var description = "Verify BoardsMembers " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BoardsMembers not found");
}

function tryToDeleteANonExistingBoardsMembers(activity, fields, filter, id, idBoard, idMember, key, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember;
  var description = "Verify negative delete for BoardsMembers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBoardsMembers(activity, fields, filter, id, idBoard, idMember, key, token) {
  return bp.EventSet("Delete BoardsMembers", function(e) {
      return e.name === "Done: " + "deleteBoardsMembersByIdBoardByIdMember()";
  });
}

function matchAnyBoardsMembersAdded() {
  return bp.EventSet("Any BoardsMembers Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMembers");
  });
}

function getBoardsMembersCardsByIdBoardByIdMember(actions, attachment_fields, attachments, board, board_fields, checkItemStates, checklists, fields, filter, id, idBoard, idMember, key, list, list_fields, member_fields, members, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember + "/cards";
  var description = "getBoardsMembersCardsByIdBoardByIdMember() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// verifyBoardsMembersCardsExists skipped: No GET /{id} operation detected.
function matchAnyBoardsMembersCardsAdded() {
  return bp.EventSet("Any BoardsMembersCards Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMembersCards");
  });
}

function getBoardsMembersInvitedByIdBoard(field, fields, id, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/membersInvited";
  var description = "getBoardsMembersInvitedByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsMembersInvitedByIdBoardByField(field, fields, id, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/membersInvited/" + field;
  var description = "getBoardsMembersInvitedByIdBoardByField() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyBoardsMembersInvitedExists(field, fields, id, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/membersInvited/" + field;
  var description = "Verify BoardsMembersInvited " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsMembersInvited found");
}

function verifyBoardsMembersInvitedDoesNotExist(field, fields, id, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/membersInvited/" + field;
  var description = "Verify BoardsMembersInvited " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BoardsMembersInvited not found");
}

function matchAnyBoardsMembersInvitedAdded() {
  return bp.EventSet("Any BoardsMembersInvited Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMembersInvited");
  });
}

function getBoardsMembershipsByIdBoard(boards_memberships, filter, id, idBoard, idMembership, key, member, member_fields, token) {
  var url = "/boards/" + idBoard + "/memberships";
  var description = "getBoardsMembershipsByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsMembershipsByIdBoardByIdMembership(boards_memberships, filter, id, idBoard, idMembership, key, member, member_fields, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "getBoardsMembershipsByIdBoardByIdMembership() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsMembershipsByIdBoardByIdMembership(boards_memberships, filter, id, idBoard, idMembership, key, member, member_fields, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "updateBoardsMembershipsByIdBoardByIdMembership() " + idBoard;
  var body = {
    "boards_memberships": String(boards_memberships),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"boards_memberships": boards_memberships, "filter": filter, "id": id, "idBoard": idBoard, "idMembership": idMembership, "key": key, "member": member, "member_fields": member_fields, "token": token}) });
}

function verifyBoardsMembershipsExists(boards_memberships, filter, id, idBoard, idMembership, key, member, member_fields, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Verify BoardsMemberships " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsMemberships found");
}

function verifyBoardsMembershipsDoesNotExist(boards_memberships, filter, id, idBoard, idMembership, key, member, member_fields, token) {
  var url = "/boards/" + idBoard + "/memberships/" + idMembership;
  var description = "Verify BoardsMemberships " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BoardsMemberships not found");
}

function matchAnyBoardsMembershipsAdded() {
  return bp.EventSet("Any BoardsMemberships Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMemberships");
  });
}

function getBoardsMyPrefsByIdBoard(id, idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs";
  var description = "getBoardsMyPrefsByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsMyPrefsEmailPositionByIdBoard(id, idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs/emailPosition";
  var description = "updateBoardsMyPrefsEmailPositionByIdBoard() " + idBoard;
  var body = {
    "id": String(id),
    "key": String(key),
    "myPrefs_emailPosition": String(myPrefs_emailPosition),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "key": key, "myPrefs_emailPosition": myPrefs_emailPosition, "myPrefs_idEmailList": myPrefs_idEmailList, "myPrefs_showListGuide": myPrefs_showListGuide, "token": token}) });
}

function updateBoardsMyPrefsIdEmailListByIdBoard(id, idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs/idEmailList";
  var description = "updateBoardsMyPrefsIdEmailListByIdBoard() " + idBoard;
  var body = {
    "id": String(id),
    "key": String(key),
    "myPrefs_idEmailList": String(myPrefs_idEmailList),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "key": key, "myPrefs_emailPosition": myPrefs_emailPosition, "myPrefs_idEmailList": myPrefs_idEmailList, "myPrefs_showListGuide": myPrefs_showListGuide, "token": token}) });
}

function updateBoardsMyPrefsShowListGuideByIdBoard(id, idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs/showListGuide";
  var description = "updateBoardsMyPrefsShowListGuideByIdBoard() " + idBoard;
  var body = {
    "id": String(id),
    "key": String(key),
    "myPrefs_showListGuide": String(myPrefs_showListGuide),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "key": key, "myPrefs_emailPosition": myPrefs_emailPosition, "myPrefs_idEmailList": myPrefs_idEmailList, "myPrefs_showListGuide": myPrefs_showListGuide, "token": token}) });
}

function verifyBoardsMyPrefsExists(id, idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs";
  var description = "Verify BoardsMyPrefs " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsMyPrefs found");
}

function verifyBoardsMyPrefsDoesNotExist(id, idBoard, key, myPrefs_emailPosition, myPrefs_idEmailList, myPrefs_showListGuide, token) {
  var url = "/boards/" + idBoard + "/myPrefs";
  var description = "Verify BoardsMyPrefs " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BoardsMyPrefs not found");
}

function matchAnyBoardsMyPrefsAdded() {
  return bp.EventSet("Any BoardsMyPrefs Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMyPrefs");
  });
}

function addCardsMarkAssociatedNotificationsReadByIdCard(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/markAssociatedNotificationsRead";
  var description = "addCardsMarkAssociatedNotificationsReadByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "field": field, "fields": fields, "id": id, "idCard": idCard, "key": key, "token": token}) });
}

function deleteCardsLabelsByIdCardByColor(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/labels/" + color;
  var description = "deleteCardsLabelsByIdCardByColor() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getCardsByIdCardByField(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/" + field;
  var description = "getCardsByIdCardByField() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateCardsLabelsByIdCard(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/labels";
  var description = "updateCardsLabelsByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "field": field, "fields": fields, "id": id, "idCard": idCard, "key": key, "token": token}) });
}

function getCardsListByIdCard(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/list";
  var description = "getCardsListByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getCardsMembersByIdCard(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/members";
  var description = "getCardsMembersByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingCards(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/markAssociatedNotificationsRead";
  var description = "Try Add Existing Cards " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCardsExists(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/" + field;
  var description = "Verify Cards " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Cards found");
}

function verifyCardsDoesNotExist(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/" + field;
  var description = "Verify Cards " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Cards not found");
}

function tryToDeleteANonExistingCards(color, field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/labels/" + color;
  var description = "Verify negative delete for Cards";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCards(color, field, fields, id, idCard, key, token) {
  return bp.EventSet("Delete Cards", function(e) {
      return e.name === "Done: " + "deleteCardsLabelsByIdCardByColor()";
  });
}

function waitForCardsAdded(color, field, fields, id, idCard, key, token) {
  waitFor(matchSuccess("addCardsMarkAssociatedNotificationsReadByIdCard()"));
}

function matchAnyCardsAdded() {
  return bp.EventSet("Any Cards Added", function(e) {
      return e.name.startsWith("Done: addCardsMarkAssociatedNotificationsReadByIdCard()");
  });
}

function getCardsActionsByIdCard(before, display, entities, fields, filter, format, id, idCard, idModels, key, limit, member, memberCreator, memberCreator_fields, member_fields, page, since, token) {
  var url = "/cards/" + idCard + "/actions";
  var description = "getCardsActionsByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyCardsActionsExists(before, display, entities, fields, filter, format, id, idCard, idModels, key, limit, member, memberCreator, memberCreator_fields, member_fields, page, since, token) {
  var url = "/cards/" + idCard + "/actions";
  var description = "Verify CardsActions " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CardsActions found");
}

function verifyCardsActionsDoesNotExist(before, display, entities, fields, filter, format, id, idCard, idModels, key, limit, member, memberCreator, memberCreator_fields, member_fields, page, since, token) {
  var url = "/cards/" + idCard + "/actions";
  var description = "Verify CardsActions " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CardsActions not found");
}

function matchAnyCardsActionsAdded() {
  return bp.EventSet("Any CardsActions Added", function(e) {
      return e.name.startsWith("Done: Create CardsActions");
  });
}

function addCardsActionsCommentsByIdCard(id, idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "addCardsActionsCommentsByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "text": String(text),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idAction": idAction, "idCard": idCard, "key": key, "text": text, "token": token}) });
}

function deleteCardsActionsCommentsByIdCardByIdAction(id, idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "deleteCardsActionsCommentsByIdCardByIdAction() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function updateCardsActionsCommentsByIdCardByIdAction(id, idAction, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/" + idAction + "/comments";
  var description = "updateCardsActionsCommentsByIdCardByIdAction() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "text": String(text),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idAction": idAction, "idCard": idCard, "key": key, "text": text, "token": token}) });
}

// verifyCardsActionsCommentsExists skipped: No GET /{id} operation detected.
function waitForCardsActionsCommentsAdded(id, idAction, idCard, key, text, token) {
  waitFor(matchSuccess("addCardsActionsCommentsByIdCard()"));
}

function matchAnyCardsActionsCommentsAdded() {
  return bp.EventSet("Any CardsActionsComments Added", function(e) {
      return e.name.startsWith("Done: addCardsActionsCommentsByIdCard()");
  });
}

function getCardsAttachmentsByIdCard(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "getCardsAttachmentsByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsAttachmentsByIdCard(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "addCardsAttachmentsByIdCard() " + idCard;
  var body = {
    "file": String(file),
    "id": String(id),
    "key": String(key),
    "mimeType": String(mimeType),
    "name": String(name),
    "setCover": setCover,
    "token": String(token),
    "url": String(url),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "file": file, "filter": filter, "id": id, "idAttachment": idAttachment, "idCard": idCard, "key": key, "mimeType": mimeType, "name": name, "setCover": setCover, "token": token, "url": url}) });
}

function deleteCardsAttachmentsByIdCardByIdAttachment(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "deleteCardsAttachmentsByIdCardByIdAttachment() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getCardsAttachmentsByIdCardByIdAttachment(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "getCardsAttachmentsByIdCardByIdAttachment() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingCardsAttachments(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Try Add Existing CardsAttachments " + idCard;
  var body = {
    "file": String(file),
    "id": String(id),
    "key": String(key),
    "mimeType": String(mimeType),
    "name": String(name),
    "setCover": setCover,
    "token": String(token),
    "url": String(url),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCardsAttachmentsExists(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Verify CardsAttachments " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CardsAttachments found");
}

function verifyCardsAttachmentsDoesNotExist(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Verify CardsAttachments " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CardsAttachments not found");
}

function tryToDeleteANonExistingCardsAttachments(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  var url = "/cards/" + idCard + "/attachments/" + idAttachment;
  var description = "Verify negative delete for CardsAttachments";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCardsAttachments(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  return bp.EventSet("Delete CardsAttachments", function(e) {
      return e.name === "Done: " + "deleteCardsAttachmentsByIdCardByIdAttachment()";
  });
}

function waitForCardsAttachmentsAdded(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, token, url) {
  waitFor(matchSuccess("addCardsAttachmentsByIdCard()"));
}

function matchAnyCardsAttachmentsAdded() {
  return bp.EventSet("Any CardsAttachments Added", function(e) {
      return e.name.startsWith("Done: addCardsAttachmentsByIdCard()");
  });
}

function getCardsBoardByIdCard(field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/board";
  var description = "getCardsBoardByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getCardsBoardByIdCardByField(field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/board/" + field;
  var description = "getCardsBoardByIdCardByField() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyCardsBoardExists(field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/board";
  var description = "Verify CardsBoard " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CardsBoard found");
}

function verifyCardsBoardDoesNotExist(field, fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/board";
  var description = "Verify CardsBoard " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CardsBoard not found");
}

function matchAnyCardsBoardAdded() {
  return bp.EventSet("Any CardsBoard Added", function(e) {
      return e.name.startsWith("Done: Create CardsBoard");
  });
}

function getCardsCheckItemStatesByIdCard(fields, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/checkItemStates";
  var description = "getCardsCheckItemStatesByIdCard() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// verifyCardsCheckItemStatesExists skipped: No GET /{id} operation detected.
function matchAnyCardsCheckItemStatesAdded() {
  return bp.EventSet("Any CardsCheckItemStates Added", function(e) {
      return e.name.startsWith("Done: Create CardsCheckItemStates");
  });
}

function updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem(id, idCard, idCheckItem, idChecklist, key, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/name";
  var description = "updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "token": token}) });
}

function addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(id, idCard, idCheckItem, idChecklist, key, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/convertToCard";
  var description = "addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "token": token}) });
}

function deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(id, idCard, idCheckItem, idChecklist, key, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem;
  var description = "deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

// verifyCardsChecklistCheckItemExists skipped: No GET /{id} operation detected.
function waitForCardsChecklistCheckItemAdded(id, idCard, idCheckItem, idChecklist, key, token) {
  waitFor(matchSuccess("addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()"));
}

function matchAnyCardsChecklistCheckItemAdded() {
  return bp.EventSet("Any CardsChecklistCheckItem Added", function(e) {
      return e.name.startsWith("Done: addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem()");
  });
}

function updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem(id, idCard, idCheckItem, idChecklist, key, pos, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/pos";
  var description = "updateCardsChecklistCheckItemPosByIdCardByIdChecklistByIdCheckItem() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "pos": pos, "token": token}) });
}

// verifyCardsChecklistCheckItemPosExists skipped: No GET /{id} operation detected.
function matchAnyCardsChecklistCheckItemPosAdded() {
  return bp.EventSet("Any CardsChecklistCheckItemPos Added", function(e) {
      return e.name.startsWith("Done: Create CardsChecklistCheckItemPos");
  });
}

function updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem(id, idCard, idCheckItem, idChecklist, key, state, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/state";
  var description = "updateCardsChecklistCheckItemStateByIdCardByIdChecklistByIdCheckItem() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "state": String(state),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "state": state, "token": token}) });
}

// verifyCardsChecklistCheckItemStateExists skipped: No GET /{id} operation detected.
function matchAnyCardsChecklistCheckItemStateAdded() {
  return bp.EventSet("Any CardsChecklistCheckItemState Added", function(e) {
      return e.name.startsWith("Done: Create CardsChecklistCheckItemState");
  });
}

function getCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idCard, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "getCardsChecklistsByIdCard() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idCard, idChecklistSource, key, name, pos, token) {
  var url = "/cards/" + idCard + "/checklists";
  var description = "addCardsChecklistsByIdCard() " + id;
  var body = {
    "id": String(id),
    "idChecklistSource": String(idChecklistSource),
    "key": String(key),
    "name": String(name),
    "pos": String(pos),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"card_fields": card_fields, "cards": cards, "checkItem_fields": checkItem_fields, "checkItems": checkItems, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idChecklistSource": idChecklistSource, "key": key, "name": name, "pos": pos, "token": token}) });
}

// verifyCardsChecklistsExists skipped: No GET /{id} operation detected.
function waitForCardsChecklistsAdded(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idCard, idChecklistSource, key, name, pos, token) {
  waitFor(matchSuccess("addCardsChecklistsByIdCard()"));
}

function matchAnyCardsChecklistsAdded() {
  return bp.EventSet("Any CardsChecklists Added", function(e) {
      return e.name.startsWith("Done: addCardsChecklistsByIdCard()");
  });
}

function deleteCardsChecklistsByIdCardByIdChecklist(id, idCard, idChecklist, key, token) {
  var url = "/cards/" + idCard + "/checklists/" + idChecklist;
  var description = "deleteCardsChecklistsByIdCardByIdChecklist() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

// verifyCardsChecklistsByIdChecklistExists skipped: No GET /{id} operation detected.
function matchAnyCardsChecklistsByIdChecklistAdded() {
  return bp.EventSet("Any CardsChecklistsByIdChecklist Added", function(e) {
      return e.name.startsWith("Done: Create CardsChecklistsByIdChecklist");
  });
}

function updateCardsClosedByIdCard(id, idCard, key, token, value) {
  var url = "/cards/" + idCard + "/closed";
  var description = "updateCardsClosedByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
    "value": value,
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "key": key, "token": token, "value": value}) });
}

// verifyCardsClosedExists skipped: No GET /{id} operation detected.
function matchAnyCardsClosedAdded() {
  return bp.EventSet("Any CardsClosed Added", function(e) {
      return e.name.startsWith("Done: Create CardsClosed");
  });
}

function getCardsMembersVotedByIdCard(fields, id, idCard, idMember, key, token) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "getCardsMembersVotedByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsMembersVotedByIdCard(fields, id, idCard, idMember, key, token) {
  var url = "/cards/" + idCard + "/membersVoted";
  var description = "addCardsMembersVotedByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "id": id, "idCard": idCard, "idMember": idMember, "key": key, "token": token}) });
}

function deleteCardsMembersVotedByIdCardByIdMember(fields, id, idCard, idMember, key, token) {
  var url = "/cards/" + idCard + "/membersVoted/" + idMember;
  var description = "deleteCardsMembersVotedByIdCardByIdMember() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

// verifyCardsMembersVotedExists skipped: No GET /{id} operation detected.
function waitForCardsMembersVotedAdded(fields, id, idCard, idMember, key, token) {
  waitFor(matchSuccess("addCardsMembersVotedByIdCard()"));
}

function matchAnyCardsMembersVotedAdded() {
  return bp.EventSet("Any CardsMembersVoted Added", function(e) {
      return e.name.startsWith("Done: addCardsMembersVotedByIdCard()");
  });
}

function updateCardsNameByIdCard(id, idCard, key, token) {
  var url = "/cards/" + idCard + "/name";
  var description = "updateCardsNameByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "key": key, "token": token}) });
}

// verifyCardsNameExists skipped: No GET /{id} operation detected.
function matchAnyCardsNameAdded() {
  return bp.EventSet("Any CardsName Added", function(e) {
      return e.name.startsWith("Done: Create CardsName");
  });
}

function updateCardsPosByIdCard(id, idCard, key, token) {
  var url = "/cards/" + idCard + "/pos";
  var description = "updateCardsPosByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "key": key, "token": token}) });
}

// verifyCardsPosExists skipped: No GET /{id} operation detected.
function matchAnyCardsPosAdded() {
  return bp.EventSet("Any CardsPos Added", function(e) {
      return e.name.startsWith("Done: Create CardsPos");
  });
}

function getCardsStickersByIdCard(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "getCardsStickersByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsStickersByIdCard(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "addCardsStickersByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"cards_stickers": cards_stickers, "fields": fields, "id": id, "idCard": idCard, "idSticker": idSticker, "key": key, "token": token}) });
}

function deleteCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "deleteCardsStickersByIdCardByIdSticker() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "getCardsStickersByIdCardByIdSticker() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "updateCardsStickersByIdCardByIdSticker() " + idCard;
  var body = {
    "cards_stickers": String(cards_stickers),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"cards_stickers": cards_stickers, "fields": fields, "id": id, "idCard": idCard, "idSticker": idSticker, "key": key, "token": token}) });
}

function tryToAddExistingCardsStickers(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Try Add Existing CardsStickers " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCardsStickersExists(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Verify CardsStickers " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CardsStickers found");
}

function verifyCardsStickersDoesNotExist(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Verify CardsStickers " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CardsStickers not found");
}

function tryToDeleteANonExistingCardsStickers(cards_stickers, fields, id, idCard, idSticker, key, token) {
  var url = "/cards/" + idCard + "/stickers/" + idSticker;
  var description = "Verify negative delete for CardsStickers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCardsStickers(cards_stickers, fields, id, idCard, idSticker, key, token) {
  return bp.EventSet("Delete CardsStickers", function(e) {
      return e.name === "Done: " + "deleteCardsStickersByIdCardByIdSticker()";
  });
}

function waitForCardsStickersAdded(cards_stickers, fields, id, idCard, idSticker, key, token) {
  waitFor(matchSuccess("addCardsStickersByIdCard()"));
}

function matchAnyCardsStickersAdded() {
  return bp.EventSet("Any CardsStickers Added", function(e) {
      return e.name.startsWith("Done: addCardsStickersByIdCard()");
  });
}

function updateCardsSubscribedByIdCard(cards_subscribed, id, idCard, key, token) {
  var url = "/cards/" + idCard + "/subscribed";
  var description = "updateCardsSubscribedByIdCard() " + idCard;
  var body = {
    "cards_subscribed": String(cards_subscribed),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"cards_subscribed": cards_subscribed, "id": id, "idCard": idCard, "key": key, "token": token}) });
}

// verifyCardsSubscribedExists skipped: No GET /{id} operation detected.
function matchAnyCardsSubscribedAdded() {
  return bp.EventSet("Any CardsSubscribed Added", function(e) {
      return e.name.startsWith("Done: Create CardsSubscribed");
  });
}

function addChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists";
  var description = "addChecklists() " + idChecklist;
  var body = {
    "checklists": String(checklists),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "deleteChecklistsCheckItemsByIdChecklistByIdCheckItem() " + idChecklist;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getChecklistsCheckItemsByIdChecklistByIdCheckItem(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "getChecklistsCheckItemsByIdChecklistByIdCheckItem() " + idChecklist;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateChecklistsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist;
  var description = "updateChecklistsByIdChecklist() " + idChecklist;
  var body = {
    "checklists": String(checklists),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function getChecklistsByIdChecklistByField(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/" + field;
  var description = "getChecklistsByIdChecklistByField() " + idChecklist;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getChecklistsCardsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/cards";
  var description = "getChecklistsCardsByIdChecklist() " + idChecklist;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getChecklistsCardsByIdChecklistByFilter(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/cards/" + filter;
  var description = "getChecklistsCardsByIdChecklistByFilter() " + idChecklist;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getChecklistsCheckItemsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "getChecklistsCheckItemsByIdChecklist() " + idChecklist;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addChecklistsCheckItemsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "addChecklistsCheckItemsByIdChecklist() " + idChecklist;
  var body = {
    "id": id,
    "checked": checked,
    "key": String(key),
    "name": String(name),
    "pos": String(pos),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function updateChecklistsIdCardByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/idCard";
  var description = "updateChecklistsIdCardByIdChecklist() " + idChecklist;
  var body = {
    "id": String(id),
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function updateChecklistsNameByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/name";
  var description = "updateChecklistsNameByIdChecklist() " + idChecklist;
  var body = {
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function updateChecklistsPosByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/pos";
  var description = "updateChecklistsPosByIdChecklist() " + idChecklist;
  var body = {
    "id": String(id),
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function tryToAddExistingChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists";
  var description = "Try Add Existing Checklists " + idChecklist;
  var body = {
    "checklists": String(checklists),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyChecklistsExists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "Verify Checklists " + idChecklist + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Checklists found");
}

function verifyChecklistsDoesNotExist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "Verify Checklists " + idChecklist + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Checklists not found");
}

function tryToDeleteANonExistingChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems/" + idCheckItem;
  var description = "Verify negative delete for Checklists";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  return bp.EventSet("Delete Checklists", function(e) {
      return e.name === "Done: " + "deleteChecklistsCheckItemsByIdChecklistByIdCheckItem()";
  });
}

function waitForChecklistsAdded(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  waitFor(matchSuccess("addChecklists()"));
}

function matchAnyChecklistsAdded() {
  return bp.EventSet("Any Checklists Added", function(e) {
      return e.name.startsWith("Done: addChecklists()");
  });
}

function addLabels(color, fields, id, idLabel, key, name, token) {
  var url = "/labels";
  var description = "addLabels() " + idLabel;
  var body = {
    "color": String(color),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "fields": fields, "id": id, "idLabel": idLabel, "key": key, "name": name, "token": token}) });
}

function deleteLabelsByIdLabel(color, fields, id, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "deleteLabelsByIdLabel() " + idLabel;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getLabelsByIdLabel(color, fields, id, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "getLabelsByIdLabel() " + idLabel;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateLabelsNameByIdLabel(color, fields, id, idLabel, key, name, token) {
  var url = "/labels/" + idLabel + "/name";
  var description = "updateLabelsNameByIdLabel() " + idLabel;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "fields": fields, "id": id, "idLabel": idLabel, "key": key, "name": name, "token": token}) });
}

function tryToAddExistingLabels(color, fields, id, idLabel, key, name, token) {
  var url = "/labels";
  var description = "Try Add Existing Labels " + idLabel;
  var body = {
    "color": String(color),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyLabelsExists(color, fields, id, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Verify Labels " + idLabel + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Labels found");
}

function verifyLabelsDoesNotExist(color, fields, id, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Verify Labels " + idLabel + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Labels not found");
}

function tryToDeleteANonExistingLabels(color, fields, id, idLabel, key, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Verify negative delete for Labels";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedLabels(color, fields, id, idLabel, key, name, token) {
  return bp.EventSet("Delete Labels", function(e) {
      return e.name === "Done: " + "deleteLabelsByIdLabel()";
  });
}

function waitForLabelsAdded(color, fields, id, idLabel, key, name, token) {
  waitFor(matchSuccess("addLabels()"));
}

function matchAnyLabelsAdded() {
  return bp.EventSet("Any Labels Added", function(e) {
      return e.name.startsWith("Done: addLabels()");
  });
}

function getLabelsBoardByIdLabel(fields, id, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/board";
  var description = "getLabelsBoardByIdLabel() " + idLabel;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyLabelsBoardExists(fields, id, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/board";
  var description = "Verify LabelsBoard " + idLabel + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("LabelsBoard found");
}

function verifyLabelsBoardDoesNotExist(fields, id, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/board";
  var description = "Verify LabelsBoard " + idLabel + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("LabelsBoard not found");
}

function matchAnyLabelsBoardAdded() {
  return bp.EventSet("Any LabelsBoard Added", function(e) {
      return e.name.startsWith("Done: Create LabelsBoard");
  });
}

function getLabelsBoardByIdLabelByField(field, id, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/board/" + field;
  var description = "getLabelsBoardByIdLabelByField() " + idLabel;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyLabelsBoardFieldExists(field, id, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/board/" + field;
  var description = "Verify LabelsBoardField " + idLabel + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("LabelsBoardField found");
}

function verifyLabelsBoardFieldDoesNotExist(field, id, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/board/" + field;
  var description = "Verify LabelsBoardField " + idLabel + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("LabelsBoardField not found");
}

function matchAnyLabelsBoardFieldAdded() {
  return bp.EventSet("Any LabelsBoardField Added", function(e) {
      return e.name.startsWith("Done: Create LabelsBoardField");
  });
}

function updateLabelsColorByIdLabel(color, id, idLabel, key, token) {
  var url = "/labels/" + idLabel + "/color";
  var description = "updateLabelsColorByIdLabel() " + idLabel;
  var body = {
    "color": String(color),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "id": id, "idLabel": idLabel, "key": key, "token": token}) });
}

// verifyLabelsColorExists skipped: No GET /{id} operation detected.
function matchAnyLabelsColorAdded() {
  return bp.EventSet("Any LabelsColor Added", function(e) {
      return e.name.startsWith("Done: Create LabelsColor");
  });
}

function addListsMoveAllCardsByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/moveAllCards";
  var description = "addListsMoveAllCardsByIdList() " + idList;
  var body = {
    "id": String(id),
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function getListsByIdListByField(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/" + field;
  var description = "getListsByIdListByField() " + idList;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateListsIdBoardByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/idBoard";
  var description = "updateListsIdBoardByIdList() " + idList;
  var body = {
    "id": String(id),
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function getListsCardsByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/cards";
  var description = "getListsCardsByIdList() " + idList;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getListsBoardByIdListByField(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/board/" + field;
  var description = "getListsBoardByIdListByField() " + idList;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getListsCardsByIdListByFilter(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/cards/" + filter;
  var description = "getListsCardsByIdListByFilter() " + idList;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateListsNameByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/name";
  var description = "updateListsNameByIdList() " + idList;
  var body = {
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateListsPosByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/pos";
  var description = "updateListsPosByIdList() " + idList;
  var body = {
    "id": String(id),
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateListsSubscribedByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/subscribed";
  var description = "updateListsSubscribedByIdList() " + idList;
  var body = {
    "id": String(id),
    "key": String(key),
    "subscribed": subscribed,
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "checkItemStates": checkItemStates, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function tryToAddExistingLists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/moveAllCards";
  var description = "Try Add Existing Lists " + idList;
  var body = {
    "id": String(id),
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyListsExists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/" + field;
  var description = "Verify Lists " + idList + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Lists found");
}

function verifyListsDoesNotExist(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/" + field;
  var description = "Verify Lists " + idList + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Lists not found");
}

function waitForListsAdded(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  waitFor(matchSuccess("addListsMoveAllCardsByIdList()"));
}

function matchAnyListsAdded() {
  return bp.EventSet("Any Lists Added", function(e) {
      return e.name.startsWith("Done: addListsMoveAllCardsByIdList()");
  });
}

function getMembersByIdMemberByField(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/" + field;
  var description = "getMembersByIdMemberByField() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersUsernameByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/username";
  var description = "updateMembersUsernameByIdMember() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
    "username": String(username),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "filter": filter, "id": id, "idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_savedSearches": members_savedSearches, "name": name, "token": token, "username": username}) });
}

function getMembersTokensByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/tokens";
  var description = "getMembersTokensByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersSavedSearchesByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "addMembersSavedSearchesByIdMember() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "members_savedSearches": String(members_savedSearches),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "filter": filter, "id": id, "idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_savedSearches": members_savedSearches, "name": name, "token": token, "username": username}) });
}

function updateMembersAvatarSourceByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/avatarSource";
  var description = "updateMembersAvatarSourceByIdMember() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "filter": filter, "id": id, "idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_savedSearches": members_savedSearches, "name": name, "token": token, "username": username}) });
}

function deleteMembersSavedSearchesByIdMemberByIdSavedSearch(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "deleteMembersSavedSearchesByIdMemberByIdSavedSearch() " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingMembers(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/savedSearches";
  var description = "Try Add Existing Members " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "members_savedSearches": String(members_savedSearches),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersExists(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/" + field;
  var description = "Verify Members " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Members found");
}

function verifyMembersDoesNotExist(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/" + field;
  var description = "Verify Members " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Members not found");
}

function tryToDeleteANonExistingMembers(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Verify negative delete for Members";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembers(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  return bp.EventSet("Delete Members", function(e) {
      return e.name === "Done: " + "deleteMembersSavedSearchesByIdMemberByIdSavedSearch()";
  });
}

function waitForMembersAdded(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, token, username) {
  waitFor(matchSuccess("addMembersSavedSearchesByIdMember()"));
}

function matchAnyMembersAdded() {
  return bp.EventSet("Any Members Added", function(e) {
      return e.name.startsWith("Done: addMembersSavedSearchesByIdMember()");
  });
}

function updateMembersBioByIdMember(id, idMember, key, token) {
  var url = "/members/" + idMember + "/bio";
  var description = "updateMembersBioByIdMember() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idMember": idMember, "key": key, "token": token}) });
}

// verifyMembersBioExists skipped: No GET /{id} operation detected.
function matchAnyMembersBioAdded() {
  return bp.EventSet("Any MembersBio Added", function(e) {
      return e.name.startsWith("Done: Create MembersBio");
  });
}

function getMembersBoardBackgroundsByIdMember(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "getMembersBoardBackgroundsByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersBoardBackgroundsByIdMember(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "addMembersBoardBackgroundsByIdMember() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "filter": filter, "id": id, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "token": token}) });
}

function getMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "getMembersBoardBackgroundsByIdMemberByIdBoardBackground() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "updateMembersBoardBackgroundsByIdMemberByIdBoardBackground() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "filter": filter, "id": id, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "token": token}) });
}

function deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground() " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingMembersBoardBackgrounds(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "Try Add Existing MembersBoardBackgrounds " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersBoardBackgroundsExists(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Verify MembersBoardBackgrounds " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersBoardBackgrounds found");
}

function verifyMembersBoardBackgroundsDoesNotExist(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Verify MembersBoardBackgrounds " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersBoardBackgrounds not found");
}

function tryToDeleteANonExistingMembersBoardBackgrounds(fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Verify negative delete for MembersBoardBackgrounds";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembersBoardBackgrounds(fields, filter, id, idBoardBackground, idMember, key, token) {
  return bp.EventSet("Delete MembersBoardBackgrounds", function(e) {
      return e.name === "Done: " + "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()";
  });
}

function waitForMembersBoardBackgroundsAdded(fields, filter, id, idBoardBackground, idMember, key, token) {
  waitFor(matchSuccess("addMembersBoardBackgroundsByIdMember()"));
}

function matchAnyMembersBoardBackgroundsAdded() {
  return bp.EventSet("Any MembersBoardBackgrounds Added", function(e) {
      return e.name.startsWith("Done: addMembersBoardBackgroundsByIdMember()");
  });
}

function getMembersBoardStarsByIdMember(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "getMembersBoardStarsByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersBoardStarsByIdMember(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "addMembersBoardStarsByIdMember() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "idBoardStar": idBoardStar, "idMember": idMember, "key": key, "pos": pos, "token": token}) });
}

function getMembersBoardStarsByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "getMembersBoardStarsByIdMemberByIdBoardStar() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar + "/idBoard";
  var description = "updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar() " + idMember;
  var body = {
    "id": String(id),
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "idBoardStar": idBoardStar, "idMember": idMember, "key": key, "pos": pos, "token": token}) });
}

function deleteMembersBoardStarsByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "deleteMembersBoardStarsByIdMemberByIdBoardStar() " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function updateMembersBoardStarsPosByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar + "/pos";
  var description = "updateMembersBoardStarsPosByIdMemberByIdBoardStar() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idBoard": idBoard, "idBoardStar": idBoardStar, "idMember": idMember, "key": key, "pos": pos, "token": token}) });
}

function tryToAddExistingMembersBoardStars(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "Try Add Existing MembersBoardStars " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersBoardStarsExists(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Verify MembersBoardStars " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersBoardStars found");
}

function verifyMembersBoardStarsDoesNotExist(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Verify MembersBoardStars " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersBoardStars not found");
}

function tryToDeleteANonExistingMembersBoardStars(id, idBoard, idBoardStar, idMember, key, pos, token) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Verify negative delete for MembersBoardStars";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembersBoardStars(id, idBoard, idBoardStar, idMember, key, pos, token) {
  return bp.EventSet("Delete MembersBoardStars", function(e) {
      return e.name === "Done: " + "deleteMembersBoardStarsByIdMemberByIdBoardStar()";
  });
}

function waitForMembersBoardStarsAdded(id, idBoard, idBoardStar, idMember, key, pos, token) {
  waitFor(matchSuccess("addMembersBoardStarsByIdMember()"));
}

function matchAnyMembersBoardStarsAdded() {
  return bp.EventSet("Any MembersBoardStars Added", function(e) {
      return e.name.startsWith("Done: addMembersBoardStarsByIdMember()");
  });
}

function getMembersBoardsByIdMember(action_fields, actions, actions_entities, actions_format, actions_limit, actions_since, fields, filter, id, idMember, key, lists, memberships, organization, organization_fields, token) {
  var url = "/members/" + idMember + "/boards";
  var description = "getMembersBoardsByIdMember() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersBoardsByIdMemberByFilter(action_fields, actions, actions_entities, actions_format, actions_limit, actions_since, fields, filter, id, idMember, key, lists, memberships, organization, organization_fields, token) {
  var url = "/members/" + idMember + "/boards/" + filter;
  var description = "getMembersBoardsByIdMemberByFilter() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersBoardsInvitedByIdMember(action_fields, actions, actions_entities, actions_format, actions_limit, actions_since, fields, filter, id, idMember, key, lists, memberships, organization, organization_fields, token) {
  var url = "/members/" + idMember + "/boardsInvited";
  var description = "getMembersBoardsInvitedByIdMember() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// verifyMembersBoardsExists skipped: No GET /{id} operation detected.
function matchAnyMembersBoardsAdded() {
  return bp.EventSet("Any MembersBoards Added", function(e) {
      return e.name.startsWith("Done: Create MembersBoards");
  });
}

function getMembersBoardsInvitedByIdMemberByField(field, id, idMember, key, token) {
  var url = "/members/" + idMember + "/boardsInvited/" + field;
  var description = "getMembersBoardsInvitedByIdMemberByField() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyMembersBoardsInvitedExists(field, id, idMember, key, token) {
  var url = "/members/" + idMember + "/boardsInvited/" + field;
  var description = "Verify MembersBoardsInvited " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersBoardsInvited found");
}

function verifyMembersBoardsInvitedDoesNotExist(field, id, idMember, key, token) {
  var url = "/members/" + idMember + "/boardsInvited/" + field;
  var description = "Verify MembersBoardsInvited " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersBoardsInvited not found");
}

function matchAnyMembersBoardsInvitedAdded() {
  return bp.EventSet("Any MembersBoardsInvited Added", function(e) {
      return e.name.startsWith("Done: Create MembersBoardsInvited");
  });
}

function getMembersCardsByIdMember(actions, attachment_fields, attachments, before, checkItemStates, checklists, fields, filter, id, idMember, key, limit, member_fields, members, since, stickers, token) {
  var url = "/members/" + idMember + "/cards";
  var description = "getMembersCardsByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersCardsByIdMemberByFilter(actions, attachment_fields, attachments, before, checkItemStates, checklists, fields, filter, id, idMember, key, limit, member_fields, members, since, stickers, token) {
  var url = "/members/" + idMember + "/cards/" + filter;
  var description = "getMembersCardsByIdMemberByFilter() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyMembersCardsExists(actions, attachment_fields, attachments, before, checkItemStates, checklists, fields, filter, id, idMember, key, limit, member_fields, members, since, stickers, token) {
  var url = "/members/" + idMember + "/cards/" + filter;
  var description = "Verify MembersCards " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersCards found");
}

function verifyMembersCardsDoesNotExist(actions, attachment_fields, attachments, before, checkItemStates, checklists, fields, filter, id, idMember, key, limit, member_fields, members, since, stickers, token) {
  var url = "/members/" + idMember + "/cards/" + filter;
  var description = "Verify MembersCards " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersCards not found");
}

function matchAnyMembersCardsAdded() {
  return bp.EventSet("Any MembersCards Added", function(e) {
      return e.name.startsWith("Done: Create MembersCards");
  });
}

function getMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "getMembersCustomBoardBackgroundsByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "addMembersCustomBoardBackgroundsByIdMember() " + idMember;
  var body = {
    "customBoardBackgrounds": String(customBoardBackgrounds),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customBoardBackgrounds": customBoardBackgrounds, "fields": fields, "filter": filter, "id": id, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "token": token}) });
}

function deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground() " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "getMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground() " + idMember;
  var body = {
    "customBoardBackgrounds": String(customBoardBackgrounds),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"customBoardBackgrounds": customBoardBackgrounds, "fields": fields, "filter": filter, "id": id, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "token": token}) });
}

function tryToAddExistingMembersCustomBoardBackgrounds(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds";
  var description = "Try Add Existing MembersCustomBoardBackgrounds " + idMember;
  var body = {
    "customBoardBackgrounds": String(customBoardBackgrounds),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersCustomBoardBackgroundsExists(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Verify MembersCustomBoardBackgrounds " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersCustomBoardBackgrounds found");
}

function verifyMembersCustomBoardBackgroundsDoesNotExist(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Verify MembersCustomBoardBackgrounds " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersCustomBoardBackgrounds not found");
}

function tryToDeleteANonExistingMembersCustomBoardBackgrounds(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  var url = "/members/" + idMember + "/customBoardBackgrounds/" + idBoardBackground;
  var description = "Verify negative delete for MembersCustomBoardBackgrounds";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembersCustomBoardBackgrounds(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  return bp.EventSet("Delete MembersCustomBoardBackgrounds", function(e) {
      return e.name === "Done: " + "deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground()";
  });
}

function waitForMembersCustomBoardBackgroundsAdded(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key, token) {
  waitFor(matchSuccess("addMembersCustomBoardBackgroundsByIdMember()"));
}

function matchAnyMembersCustomBoardBackgroundsAdded() {
  return bp.EventSet("Any MembersCustomBoardBackgrounds Added", function(e) {
      return e.name.startsWith("Done: addMembersCustomBoardBackgroundsByIdMember()");
  });
}

function getMembersCustomEmojiByIdMember(fields, filter, id, idCustomEmoji, idMember, key, name, token) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "This gets the list of all of the user’s uploaded emoji " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersCustomEmojiByIdMember(fields, filter, id, idCustomEmoji, idMember, key, name, token) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Attributes of \"Members Custom Emoji\" to be added. " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "filter": filter, "id": id, "idCustomEmoji": idCustomEmoji, "idMember": idMember, "key": key, "name": name, "token": token}) });
}

function getMembersCustomEmojiByIdMemberByIdCustomEmoji(fields, filter, id, idCustomEmoji, idMember, key, name, token) {
  var url = "/members/" + idMember + "/customEmoji/" + idCustomEmoji;
  var description = "Get a specific custom emoji by id. " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingMembersCustomEmoji(fields, filter, id, idCustomEmoji, idMember, key, name, token) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Try Add Existing MembersCustomEmoji " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersCustomEmojiExists(fields, filter, id, idCustomEmoji, idMember, key, name, token) {
  var url = "/members/" + idMember + "/customEmoji/" + idCustomEmoji;
  var description = "Verify MembersCustomEmoji " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersCustomEmoji found");
}

function verifyMembersCustomEmojiDoesNotExist(fields, filter, id, idCustomEmoji, idMember, key, name, token) {
  var url = "/members/" + idMember + "/customEmoji/" + idCustomEmoji;
  var description = "Verify MembersCustomEmoji " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersCustomEmoji not found");
}

function waitForMembersCustomEmojiAdded(fields, filter, id, idCustomEmoji, idMember, key, name, token) {
  waitFor(matchSuccess("Attributes of \"Members Custom Emoji\" to be added."));
}

function matchAnyMembersCustomEmojiAdded() {
  return bp.EventSet("Any MembersCustomEmoji Added", function(e) {
      return e.name.startsWith("Done: Attributes of \"Members Custom Emoji\" to be added.");
  });
}

function getMembersCustomStickersByIdMember(fields, filter, id, idCustomSticker, idMember, key, token) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "This gets a list of all of the user’s uploaded stickers " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersCustomStickersByIdMember(fields, filter, id, idCustomSticker, idMember, key, token) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Attributes of \"Members Custom Stickers\" to be added. " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fields": fields, "filter": filter, "id": id, "idCustomSticker": idCustomSticker, "idMember": idMember, "key": key, "token": token}) });
}

function getMembersCustomStickersByIdMemberByIdCustomSticker(fields, filter, id, idCustomSticker, idMember, key, token) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Get a specific custom sticker by id. " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function deleteMembersCustomStickersByIdMemberByIdCustomSticker(fields, filter, id, idCustomSticker, idMember, key, token) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Delete a specific custom sticker by id. " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingMembersCustomStickers(fields, filter, id, idCustomSticker, idMember, key, token) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Try Add Existing MembersCustomStickers " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersCustomStickersExists(fields, filter, id, idCustomSticker, idMember, key, token) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Verify MembersCustomStickers " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersCustomStickers found");
}

function verifyMembersCustomStickersDoesNotExist(fields, filter, id, idCustomSticker, idMember, key, token) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Verify MembersCustomStickers " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersCustomStickers not found");
}

function tryToDeleteANonExistingMembersCustomStickers(fields, filter, id, idCustomSticker, idMember, key, token) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Verify negative delete for MembersCustomStickers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembersCustomStickers(fields, filter, id, idCustomSticker, idMember, key, token) {
  return bp.EventSet("Delete MembersCustomStickers", function(e) {
      return e.name === "Done: " + "Delete a specific custom sticker by id.";
  });
}

function waitForMembersCustomStickersAdded(fields, filter, id, idCustomSticker, idMember, key, token) {
  waitFor(matchSuccess("Attributes of \"Members Custom Stickers\" to be added."));
}

function matchAnyMembersCustomStickersAdded() {
  return bp.EventSet("Any MembersCustomStickers Added", function(e) {
      return e.name.startsWith("Done: Attributes of \"Members Custom Stickers\" to be added.");
  });
}

function getMembersDeltasByIdMember(id, idMember, ixLastUpdate, key, tags, token) {
  var url = "/members/" + idMember + "/deltas";
  var description = "Get deltas for a member. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// verifyMembersDeltasExists skipped: No GET /{id} operation detected.
function matchAnyMembersDeltasAdded() {
  return bp.EventSet("Any MembersDeltas Added", function(e) {
      return e.name.startsWith("Done: Create MembersDeltas");
  });
}

function getMembersOrganizationsByIdMember(fields, filter, idMember, key, paid_account, token) {
  var url = "/members/" + idMember + "/organizations";
  var description = "getMembersOrganizationsByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersOrganizationsByIdMemberByFilter(fields, filter, idMember, key, paid_account, token) {
  var url = "/members/" + idMember + "/organizations/" + filter;
  var description = "getMembersOrganizationsByIdMemberByFilter() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyMembersOrganizationsExists(fields, filter, idMember, key, paid_account, token) {
  var url = "/members/" + idMember + "/organizations/" + filter;
  var description = "Verify MembersOrganizations " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersOrganizations found");
}

function verifyMembersOrganizationsDoesNotExist(fields, filter, idMember, key, paid_account, token) {
  var url = "/members/" + idMember + "/organizations/" + filter;
  var description = "Verify MembersOrganizations " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersOrganizations not found");
}

function matchAnyMembersOrganizationsAdded() {
  return bp.EventSet("Any MembersOrganizations Added", function(e) {
      return e.name.startsWith("Done: Create MembersOrganizations");
  });
}

function getMembersOrganizationsInvitedByIdMember(field, fields, idMember, key, token) {
  var url = "/members/" + idMember + "/organizationsInvited";
  var description = "getMembersOrganizationsInvitedByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersOrganizationsInvitedByIdMemberByField(field, fields, idMember, key, token) {
  var url = "/members/" + idMember + "/organizationsInvited/" + field;
  var description = "getMembersOrganizationsInvitedByIdMemberByField() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyMembersOrganizationsInvitedExists(field, fields, idMember, key, token) {
  var url = "/members/" + idMember + "/organizationsInvited/" + field;
  var description = "Verify MembersOrganizationsInvited " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersOrganizationsInvited found");
}

function verifyMembersOrganizationsInvitedDoesNotExist(field, fields, idMember, key, token) {
  var url = "/members/" + idMember + "/organizationsInvited/" + field;
  var description = "Verify MembersOrganizationsInvited " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersOrganizationsInvited not found");
}

function matchAnyMembersOrganizationsInvitedAdded() {
  return bp.EventSet("Any MembersOrganizationsInvited Added", function(e) {
      return e.name.startsWith("Done: Create MembersOrganizationsInvited");
  });
}

function updateMembersPrefsColorBlindByIdMember(idMember, key, prefs_colorBlind, token) {
  var url = "/members/" + idMember + "/prefs/colorBlind";
  var description = "updateMembersPrefsColorBlindByIdMember() " + idMember;
  var body = {
    "key": String(key),
    "prefs_colorBlind": String(prefs_colorBlind),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "key": key, "prefs_colorBlind": prefs_colorBlind, "token": token}) });
}

// verifyMembersPrefsExists skipped: No GET /{id} operation detected.
function matchAnyMembersPrefsAdded() {
  return bp.EventSet("Any MembersPrefs Added", function(e) {
      return e.name.startsWith("Done: Create MembersPrefs");
  });
}

function addNotificationsAllRead(field, fields, id, idNotification, key, token) {
  var url = "/notifications/all/read";
  var description = "addNotificationsAllRead() " + idNotification;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "fields": fields, "id": id, "idNotification": idNotification, "key": key, "token": token}) });
}

function getNotificationsByIdNotificationByField(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/" + field;
  var description = "getNotificationsByIdNotificationByField() " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateNotificationsUnreadByIdNotification(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/unread";
  var description = "updateNotificationsUnreadByIdNotification() " + idNotification;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"field": field, "fields": fields, "id": id, "idNotification": idNotification, "key": key, "token": token}) });
}

function getNotificationsBoardByIdNotification(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/board";
  var description = "getNotificationsBoardByIdNotification() " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsBoardByIdNotificationByField(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/board/" + field;
  var description = "getNotificationsBoardByIdNotificationByField() " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsCardByIdNotification(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/card";
  var description = "getNotificationsCardByIdNotification() " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsListByIdNotification(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/list";
  var description = "getNotificationsListByIdNotification() " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberByIdNotificationByField(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/member/" + field;
  var description = "Retrieve specific field of member details for a specific notification. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberCreatorByIdNotification(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/memberCreator";
  var description = "Retrieve member creator details for a specific notification. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberCreatorByIdNotificationByField(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/memberCreator/" + field;
  var description = "Retrieve specific field of member creator details for a specific notification. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsOrganizationByIdNotification(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/organization";
  var description = "Retrieve organization details for a specific notification. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingNotifications(field, fields, id, idNotification, key, token) {
  var url = "/notifications/all/read";
  var description = "Try Add Existing Notifications " + idNotification;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyNotificationsExists(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/" + field;
  var description = "Verify Notifications " + idNotification + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Notifications found");
}

function verifyNotificationsDoesNotExist(field, fields, id, idNotification, key, token) {
  var url = "/notifications/" + idNotification + "/" + field;
  var description = "Verify Notifications " + idNotification + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Notifications not found");
}

function waitForNotificationsAdded(field, fields, id, idNotification, key, token) {
  waitFor(matchSuccess("addNotificationsAllRead()"));
}

function matchAnyNotificationsAdded() {
  return bp.EventSet("Any Notifications Added", function(e) {
      return e.name.startsWith("Done: addNotificationsAllRead()");
  });
}

function addOrganizationsLogoByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "addOrganizationsLogoByIdOrg() " + idOrg;
  var body = {
    "id": String(id),
    "key": String(key),
    "logo": String(logo),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"activity": activity, "field": field, "fields": fields, "filter": filter, "id": id, "idOrg": idOrg, "key": key, "logo": logo, "token": token, "value": value, "website": website}) });
}

function deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "deleteOrganizationsPrefsOrgInviteRestrictByIdOrg() " + idOrg;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getOrganizationsByIdOrgByField(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/" + field;
  var description = "getOrganizationsByIdOrgByField() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsWebsiteByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/website";
  var description = "updateOrganizationsWebsiteByIdOrg() " + idOrg;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
    "website": String(website),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"activity": activity, "field": field, "fields": fields, "filter": filter, "id": id, "idOrg": idOrg, "key": key, "logo": logo, "token": token, "value": value, "website": website}) });
}

function getOrganizationsMembersByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/members";
  var description = "getOrganizationsMembersByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingOrganizations(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "Try Add Existing Organizations " + idOrg;
  var body = {
    "id": String(id),
    "key": String(key),
    "logo": String(logo),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrganizationsExists(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/" + field;
  var description = "Verify Organizations " + idOrg + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Organizations found");
}

function verifyOrganizationsDoesNotExist(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/" + field;
  var description = "Verify Organizations " + idOrg + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Organizations not found");
}

function tryToDeleteANonExistingOrganizations(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Verify negative delete for Organizations";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrganizations(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  return bp.EventSet("Delete Organizations", function(e) {
      return e.name === "Done: " + "deleteOrganizationsPrefsOrgInviteRestrictByIdOrg()";
  });
}

function waitForOrganizationsAdded(activity, field, fields, filter, id, idOrg, key, logo, token, value, website) {
  waitFor(matchSuccess("addOrganizationsLogoByIdOrg()"));
}

function matchAnyOrganizationsAdded() {
  return bp.EventSet("Any Organizations Added", function(e) {
      return e.name.startsWith("Done: addOrganizationsLogoByIdOrg()");
  });
}

function deleteOrganizationsMembersAllByIdOrgByIdMember(actions, attachment_fields, attachments, board, board_fields, checkItemStates, checklists, fields, filter, id, idMember, idOrg, key, list, list_fields, member_fields, members, organizations_members_deactivated, token) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/all";
  var description = "deleteOrganizationsMembersAllByIdOrgByIdMember() " + idOrg;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getOrganizationsMembersCardsByIdOrgByIdMember(actions, attachment_fields, attachments, board, board_fields, checkItemStates, checklists, fields, filter, id, idMember, idOrg, key, list, list_fields, member_fields, members, organizations_members_deactivated, token) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/cards";
  var description = "getOrganizationsMembersCardsByIdOrgByIdMember() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsMembersDeactivatedByIdOrgByIdMember(actions, attachment_fields, attachments, board, board_fields, checkItemStates, checklists, fields, filter, id, idMember, idOrg, key, list, list_fields, member_fields, members, organizations_members_deactivated, token) {
  var url = "/organizations/" + idOrg + "/members/" + idMember + "/deactivated";
  var description = "updateOrganizationsMembersDeactivatedByIdOrgByIdMember() " + idOrg;
  var body = {
    "id": String(id),
    "key": String(key),
    "organizations_members_deactivated": String(organizations_members_deactivated),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "board": board, "board_fields": board_fields, "checkItemStates": checkItemStates, "checklists": checklists, "fields": fields, "filter": filter, "id": id, "idMember": idMember, "idOrg": idOrg, "key": key, "list": list, "list_fields": list_fields, "member_fields": member_fields, "members": members, "organizations_members_deactivated": organizations_members_deactivated, "token": token}) });
}

// verifyOrganizationsMembersExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationsMembersAdded() {
  return bp.EventSet("Any OrganizationsMembers Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMembers");
  });
}

function getOrganizationsMembersInvitedByIdOrg(field, fields, id, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/membersInvited";
  var description = "getOrganizationsMembersInvitedByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsMembersInvitedByIdOrgByField(field, fields, id, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/membersInvited/" + field;
  var description = "getOrganizationsMembersInvitedByIdOrgByField() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyOrganizationsMembersInvitedExists(field, fields, id, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/membersInvited/" + field;
  var description = "Verify OrganizationsMembersInvited " + idOrg + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationsMembersInvited found");
}

function verifyOrganizationsMembersInvitedDoesNotExist(field, fields, id, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/membersInvited/" + field;
  var description = "Verify OrganizationsMembersInvited " + idOrg + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationsMembersInvited not found");
}

function matchAnyOrganizationsMembersInvitedAdded() {
  return bp.EventSet("Any OrganizationsMembersInvited Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMembersInvited");
  });
}

function getOrganizationsMembershipsByIdOrg(attributes, filter, id, idMembership, idOrg, key, member, member_fields, token) {
  var url = "/organizations/" + idOrg + "/memberships";
  var description = "getOrganizationsMembershipsByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsMembershipsByIdOrgByIdMembership(attributes, filter, id, idMembership, idOrg, key, member, member_fields, token) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "getOrganizationsMembershipsByIdOrgByIdMembership() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsMembershipsByIdOrgByIdMembership(attributes, filter, id, idMembership, idOrg, key, member, member_fields, token) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "updateOrganizationsMembershipsByIdOrgByIdMembership() " + idOrg;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "filter": filter, "id": id, "idMembership": idMembership, "idOrg": idOrg, "key": key, "member": member, "member_fields": member_fields, "token": token}) });
}

function verifyOrganizationsMembershipsExists(attributes, filter, id, idMembership, idOrg, key, member, member_fields, token) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "Verify OrganizationsMemberships " + idOrg + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationsMemberships found");
}

function verifyOrganizationsMembershipsDoesNotExist(attributes, filter, id, idMembership, idOrg, key, member, member_fields, token) {
  var url = "/organizations/" + idOrg + "/memberships/" + idMembership;
  var description = "Verify OrganizationsMemberships " + idOrg + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationsMemberships not found");
}

function matchAnyOrganizationsMembershipsAdded() {
  return bp.EventSet("Any OrganizationsMemberships Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMemberships");
  });
}

function updateOrganizationsNameByIdOrg(attributes, id, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/name";
  var description = "updateOrganizationsNameByIdOrg() " + idOrg;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "id": id, "idOrg": idOrg, "key": key, "token": token}) });
}

// verifyOrganizationsNameExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationsNameAdded() {
  return bp.EventSet("Any OrganizationsName Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsName");
  });
}

function deleteOrganizationsPrefsAssociatedDomainByIdOrg(attributes, id, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "deleteOrganizationsPrefsAssociatedDomainByIdOrg() " + idOrg;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function updateOrganizationsPrefsAssociatedDomainByIdOrg(attributes, id, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "updateOrganizationsPrefsAssociatedDomainByIdOrg() " + idOrg;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "id": id, "idOrg": idOrg, "key": key, "token": token}) });
}

// verifyOrganizationsPrefsAssociatedDomainExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationsPrefsAssociatedDomainAdded() {
  return bp.EventSet("Any OrganizationsPrefsAssociatedDomain Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsPrefsAssociatedDomain");
  });
}

function updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg(attributes, id, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/org";
  var description = "updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg() " + idOrg;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "id": id, "idOrg": idOrg, "key": key, "token": token}) });
}

// verifyOrganizationsPrefsBoardVisibilityRestrictOrgExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationsPrefsBoardVisibilityRestrictOrgAdded() {
  return bp.EventSet("Any OrganizationsPrefsBoardVisibilityRestrictOrg Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsPrefsBoardVisibilityRestrictOrg");
  });
}

function getSearchMembers(id, idBoard, idOrganization, key, limit, onlyOrgMembers, query, token) {
  var url = "/search/members";
  var description = "getSearchMembers() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// verifySearchExists skipped: No GET /{id} operation detected.
function matchAnySearchAdded() {
  return bp.EventSet("Any Search Added", function(e) {
      return e.name.startsWith("Done: Create Search");
  });
}

function addSessions(id, idSession, key, name, status, token) {
  var url = "/sessions";
  var description = "addSessions() " + idSession;
  var body = {
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "status": String(status),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idSession": idSession, "key": key, "name": name, "status": status, "token": token}) });
}

function updateSessionsByIdSession(id, idSession, key, name, status, token) {
  var url = "/sessions/" + idSession;
  var description = "updateSessionsByIdSession() " + idSession;
  var body = {
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "status": String(status),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idSession": idSession, "key": key, "name": name, "status": status, "token": token}) });
}

function updateSessionsStatusByIdSession(id, idSession, key, name, status, token) {
  var url = "/sessions/" + idSession + "/status";
  var description = "updateSessionsStatusByIdSession() " + idSession;
  var body = {
    "id": id,
    "key": String(key),
    "status": String(status),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idSession": idSession, "key": key, "name": name, "status": status, "token": token}) });
}

function getSessionsSocket(id, idSession, key, name, status, token) {
  var url = "/sessions/socket";
  var description = "getSessionsSocket() " + idSession;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// verifySessionsExists skipped: No GET /{id} operation detected.
function waitForSessionsAdded(id, idSession, key, name, status, token) {
  waitFor(matchSuccess("addSessions()"));
}

function matchAnySessionsAdded() {
  return bp.EventSet("Any Sessions Added", function(e) {
      return e.name.startsWith("Done: addSessions()");
  });
}

function deleteTokensByToken(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token;
  var description = "deleteTokensByToken() " + token;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getTokensMemberByToken(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/member";
  var description = "Retrieve member information associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getTokensMemberByTokenByField(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/member/" + field;
  var description = "Retrieve specific field information of a member associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getTokensWebhooksByToken(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "List webhooks associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addTokensWebhooksByToken(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Add a new webhook associated with a token.";
  var body = {
    "active": active,
    "callbackURL": String(callbackURL),
    "description": String(description),
    "idModel": String(idModel),
    "key": String(key),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "callbackURL": callbackURL, "description": description, "field": field, "fields": fields, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token}) });
}

function updateTokensWebhooksByToken(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Update an existing webhook associated with a token.";
  var body = {
    "active": active,
    "callbackURL": String(callbackURL),
    "description": String(description),
    "idModel": String(idModel),
    "key": String(key),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "callbackURL": callbackURL, "description": description, "field": field, "fields": fields, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token}) });
}

function deleteTokensWebhooksByTokenByIdWebhook(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks/" + idWebhook;
  var description = "Delete a webhook associated with a token by its ID.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getTokensWebhooksByTokenByIdWebhook(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/webhooks/" + idWebhook;
  var description = "Retrieve a specific webhook associated with a token by its ID.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getTokensByTokenByField(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/" + field;
  var description = "Retrieve specific field information associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyTokensExists(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/member";
  var description = "Verify Tokens " + token + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Tokens found");
}

function verifyTokensDoesNotExist(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token + "/member";
  var description = "Verify Tokens " + token + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Tokens not found");
}

function tryToDeleteANonExistingTokens(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  var url = "/tokens/" + token;
  var description = "Verify negative delete for Tokens";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTokens(active, callbackURL, description, field, fields, idModel, idWebhook, key, token) {
  return bp.EventSet("Delete Tokens", function(e) {
      return e.name === "Done: " + "deleteTokensByToken()";
  });
}

function matchAnyTokensAdded() {
  return bp.EventSet("Any Tokens Added", function(e) {
      return e.name.startsWith("Done: Create Tokens");
  });
}

function getTypesById(id, key, token) {
  var url = "/types/" + id;
  var description = "getTypesById() " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyTypesExists(id, key, token) {
  var url = "/types/" + id;
  var description = "Verify Types " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Types found");
}

function verifyTypesDoesNotExist(id, key, token) {
  var url = "/types/" + id;
  var description = "Verify Types " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Types not found");
}

function matchAnyTypesAdded() {
  return bp.EventSet("Any Types Added", function(e) {
      return e.name.startsWith("Done: Create Types");
  });
}

function addWebhooks(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks";
  var description = "addWebhooks() " + idWebhook;
  var body = {
    "description": String(description),
    "id": String(id),
    "key": String(key),
    "token": String(token),
    "webhooks": String(webhooks),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "field": field, "id": id, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function updateWebhooksIdModelByIdWebhook(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/idModel";
  var description = "updateWebhooksIdModelByIdWebhook() " + idWebhook;
  var body = {
    "id": String(id),
    "idModel": String(idModel),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "field": field, "id": id, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function deleteWebhooksByIdWebhook(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "deleteWebhooksByIdWebhook() " + idWebhook;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getWebhooksByIdWebhookByField(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/" + field;
  var description = "getWebhooksByIdWebhookByField() " + idWebhook;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateWebhooksByIdWebhook(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "updateWebhooksByIdWebhook() " + idWebhook;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
    "webhooks": String(webhooks),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "field": field, "id": id, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function updateWebhooksActiveByIdWebhook(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/active";
  var description = "updateWebhooksActiveByIdWebhook() " + idWebhook;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
    "webhooks_active": String(webhooks_active),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "field": field, "id": id, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function tryToAddExistingWebhooks(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks";
  var description = "Try Add Existing Webhooks " + idWebhook;
  var body = {
    "description": String(description),
    "id": String(id),
    "key": String(key),
    "token": String(token),
    "webhooks": String(webhooks),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyWebhooksExists(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/" + field;
  var description = "Verify Webhooks " + idWebhook + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Webhooks found");
}

function verifyWebhooksDoesNotExist(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/" + field;
  var description = "Verify Webhooks " + idWebhook + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Webhooks not found");
}

function tryToDeleteANonExistingWebhooks(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "Verify negative delete for Webhooks";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedWebhooks(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  return bp.EventSet("Delete Webhooks", function(e) {
      return e.name === "Done: " + "deleteWebhooksByIdWebhook()";
  });
}

function waitForWebhooksAdded(description, field, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  waitFor(matchSuccess("addWebhooks()"));
}

function matchAnyWebhooksAdded() {
  return bp.EventSet("Any Webhooks Added", function(e) {
      return e.name.startsWith("Done: addWebhooks()");
  });
}
