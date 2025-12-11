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
function getActionsByIdAction(actions_text, display, entities, fields, idAction, key, member, memberCreator, memberCreator_fields, member_fields, token) {
  var url = "/actions/" + idAction;
  var description = "getActionsByIdAction() " + idAction;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateActionsTextByIdAction(actions_text, display, entities, fields, idAction, key, member, memberCreator, memberCreator_fields, member_fields, token) {
  var url = "/actions/" + idAction + "/text";
  var description = "updateActionsTextByIdAction() " + idAction;
  var body = {
    "actions_text": String(actions_text),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions_text": actions_text, "display": display, "entities": entities, "fields": fields, "idAction": idAction, "key": key, "member": member, "memberCreator": memberCreator, "memberCreator_fields": memberCreator_fields, "member_fields": member_fields, "token": token}) });
}

function deleteActionsByIdAction(actions_text, display, entities, fields, idAction, key, member, memberCreator, memberCreator_fields, member_fields, token) {
  var url = "/actions/" + idAction;
  var description = "Delete an action by its ID. " + idAction;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getActionsOrganizationByIdAction(actions_text, display, entities, fields, idAction, key, member, memberCreator, memberCreator_fields, member_fields, token) {
  var url = "/actions/" + idAction + "/organization";
  var description = "Retrieve the organization associated with an action. " + idAction;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyActionsExists(actions_text, display, entities, fields, idAction, key, member, memberCreator, memberCreator_fields, member_fields, token) {
  var url = "/actions/" + idAction;
  var description = "Verify Actions " + idAction + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Actions found");
}

function verifyActionsDoesNotExist(actions_text, display, entities, fields, idAction, key, member, memberCreator, memberCreator_fields, member_fields, token) {
  var url = "/actions/" + idAction;
  var description = "Verify Actions " + idAction + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Actions not found");
}

function tryToDeleteANonExistingActions(actions_text, display, entities, fields, idAction, key, member, memberCreator, memberCreator_fields, member_fields, token) {
  var url = "/actions/" + idAction;
  var description = "Verify negative delete for Actions";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedActions(actions_text, display, entities, fields, idAction, key, member, memberCreator, memberCreator_fields, member_fields, token) {
  return bp.EventSet("Delete Actions", function(e) {
      return e.name === "Done: " + "Delete an action by its ID.";
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

function addBoardsPowerUpsByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/powerUps";
  var description = "Add power-ups to a specific board. " + idBoard;
  var body = {
    "id": String(id),
    "key": String(key),
    "powerUp": String(powerUp),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_member": action_member, "action_memberCreator": action_memberCreator, "action_memberCreator_fields": action_memberCreator_fields, "action_member_fields": action_member_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "boardStars": boardStars, "board_fields": board_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_checklists": card_checklists, "card_fields": card_fields, "card_stickers": card_stickers, "cards": cards, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idMember": idMember, "ixLastUpdate": ixLastUpdate, "key": key, "label_fields": label_fields, "labels": labels, "labels_limit": labels_limit, "limit": limit, "list": list, "list_fields": list_fields, "lists": lists, "member": member, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "myPrefs": myPrefs, "name": name, "organization": organization, "organization_fields": organization_fields, "organization_memberships": organization_memberships, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "tags": tags, "token": token}) });
}

function getBoardsByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard;
  var description = "getBoardsByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsSubscribedByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/subscribed";
  var description = "updateBoardsSubscribedByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "subscribed": subscribed,
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_member": action_member, "action_memberCreator": action_memberCreator, "action_memberCreator_fields": action_memberCreator_fields, "action_member_fields": action_member_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "boardStars": boardStars, "board_fields": board_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_checklists": card_checklists, "card_fields": card_fields, "card_stickers": card_stickers, "cards": cards, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idMember": idMember, "ixLastUpdate": ixLastUpdate, "key": key, "label_fields": label_fields, "labels": labels, "labels_limit": labels_limit, "limit": limit, "list": list, "list_fields": list_fields, "lists": lists, "member": member, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "myPrefs": myPrefs, "name": name, "organization": organization, "organization_fields": organization_fields, "organization_memberships": organization_memberships, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "tags": tags, "token": token}) });
}

function getBoardsMembersCardsByIdBoardByIdMember(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/members/" + idMember + "/cards";
  var description = "getBoardsMembersCardsByIdBoardByIdMember() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsCardsByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/cards";
  var description = "Retrieve cards for a specific board. " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsCardsByIdBoardByFilter(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/cards/" + filter;
  var description = "Retrieve cards for a specific board with a filter. " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsDescByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/desc";
  var description = "Update the description of a board by board ID. " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_member": action_member, "action_memberCreator": action_memberCreator, "action_memberCreator_fields": action_memberCreator_fields, "action_member_fields": action_member_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "boardStars": boardStars, "board_fields": board_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_checklists": card_checklists, "card_fields": card_fields, "card_stickers": card_stickers, "cards": cards, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idMember": idMember, "ixLastUpdate": ixLastUpdate, "key": key, "label_fields": label_fields, "labels": labels, "labels_limit": labels_limit, "limit": limit, "list": list, "list_fields": list_fields, "lists": lists, "member": member, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "myPrefs": myPrefs, "name": name, "organization": organization, "organization_fields": organization_fields, "organization_memberships": organization_memberships, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "tags": tags, "token": token}) });
}

function getBoardsDeltasByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/deltas";
  var description = "Retrieve deltas for a board by board ID. " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsLabelNamesBlueByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/labelNames/blue";
  var description = "updateBoardsLabelNamesBlueByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_member": action_member, "action_memberCreator": action_memberCreator, "action_memberCreator_fields": action_memberCreator_fields, "action_member_fields": action_member_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "boardStars": boardStars, "board_fields": board_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_checklists": card_checklists, "card_fields": card_fields, "card_stickers": card_stickers, "cards": cards, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idMember": idMember, "ixLastUpdate": ixLastUpdate, "key": key, "label_fields": label_fields, "labels": labels, "labels_limit": labels_limit, "limit": limit, "list": list, "list_fields": list_fields, "lists": lists, "member": member, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "myPrefs": myPrefs, "name": name, "organization": organization, "organization_fields": organization_fields, "organization_memberships": organization_memberships, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "tags": tags, "token": token}) });
}

function updateBoardsLabelNamesGreenByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/labelNames/green";
  var description = "updateBoardsLabelNamesGreenByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_member": action_member, "action_memberCreator": action_memberCreator, "action_memberCreator_fields": action_memberCreator_fields, "action_member_fields": action_member_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "boardStars": boardStars, "board_fields": board_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_checklists": card_checklists, "card_fields": card_fields, "card_stickers": card_stickers, "cards": cards, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idMember": idMember, "ixLastUpdate": ixLastUpdate, "key": key, "label_fields": label_fields, "labels": labels, "labels_limit": labels_limit, "limit": limit, "list": list, "list_fields": list_fields, "lists": lists, "member": member, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "myPrefs": myPrefs, "name": name, "organization": organization, "organization_fields": organization_fields, "organization_memberships": organization_memberships, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "tags": tags, "token": token}) });
}

function updateBoardsLabelNamesOrangeByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/labelNames/orange";
  var description = "updateBoardsLabelNamesOrangeByIdBoard() " + idBoard;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_member": action_member, "action_memberCreator": action_memberCreator, "action_memberCreator_fields": action_memberCreator_fields, "action_member_fields": action_member_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "boardStars": boardStars, "board_fields": board_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_checklists": card_checklists, "card_fields": card_fields, "card_stickers": card_stickers, "cards": cards, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idMember": idMember, "ixLastUpdate": ixLastUpdate, "key": key, "label_fields": label_fields, "labels": labels, "labels_limit": labels_limit, "limit": limit, "list": list, "list_fields": list_fields, "lists": lists, "member": member, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "myPrefs": myPrefs, "name": name, "organization": organization, "organization_fields": organization_fields, "organization_memberships": organization_memberships, "powerUp": powerUp, "since": since, "stickers": stickers, "subscribed": subscribed, "tags": tags, "token": token}) });
}

function deleteBoardsPowerUpsByIdBoardByPowerUp(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/powerUps/" + powerUp;
  var description = "Delete a specific power-up from a board. " + idBoard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getBoardsMembersInvitedByIdBoardByField(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/membersInvited/" + field;
  var description = "getBoardsMembersInvitedByIdBoardByField() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getBoardsMembershipsByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/memberships";
  var description = "getBoardsMembershipsByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingBoards(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
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

function verifyBoardsExists(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard;
  var description = "Verify Boards " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Boards found");
}

function verifyBoardsDoesNotExist(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard;
  var description = "Verify Boards " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Boards not found");
}

function tryToDeleteANonExistingBoards(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  var url = "/boards/" + idBoard + "/powerUps/" + powerUp;
  var description = "Verify negative delete for Boards";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBoards(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  return bp.EventSet("Delete Boards", function(e) {
      return e.name === "Done: " + "Delete a specific power-up from a board.";
  });
}

function waitForBoardsAdded(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, attachment_fields, attachments, before, board, boardStars, board_fields, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checkItemStates, checklist_fields, checklists, field, fields, filter, id, idBoard, idMember, ixLastUpdate, key, label_fields, labels, labels_limit, limit, list, list_fields, lists, member, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, name, organization, organization_fields, organization_memberships, powerUp, since, stickers, subscribed, tags, token) {
  waitFor(matchSuccess("Add power-ups to a specific board."));
}

function matchAnyBoardsAdded() {
  return bp.EventSet("Any Boards Added", function(e) {
      return e.name.startsWith("Done: Add power-ups to a specific board.");
  });
}

function getBoardsByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, boardStars, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checklist_fields, checklists, fields, idBoard, key, label_fields, labels, labels_limit, list_fields, lists, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, organization, organization_fields, organization_memberships, token) {
  var url = "/boards/" + idBoard;
  var description = "getBoardsByIdBoard() " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsByIdBoard(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, boardStars, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checklist_fields, checklists, fields, idBoard, key, label_fields, labels, labels_limit, list_fields, lists, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, organization, organization_fields, organization_memberships, token) {
  var url = "/boards/" + idBoard;
  var description = "updateBoardsByIdBoard() " + idBoard;
  var body = {
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_member": action_member, "action_memberCreator": action_memberCreator, "action_memberCreator_fields": action_memberCreator_fields, "action_member_fields": action_member_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "boardStars": boardStars, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_checklists": card_checklists, "card_fields": card_fields, "card_stickers": card_stickers, "cards": cards, "checklist_fields": checklist_fields, "checklists": checklists, "fields": fields, "idBoard": idBoard, "key": key, "label_fields": label_fields, "labels": labels, "labels_limit": labels_limit, "list_fields": list_fields, "lists": lists, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "myPrefs": myPrefs, "organization": organization, "organization_fields": organization_fields, "organization_memberships": organization_memberships, "token": token}) });
}

function verifyBoardsMembershipsExists(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, boardStars, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checklist_fields, checklists, fields, idBoard, key, label_fields, labels, labels_limit, list_fields, lists, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, organization, organization_fields, organization_memberships, token) {
  var url = "/boards/" + idBoard;
  var description = "Verify BoardsMemberships " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsMemberships found");
}

function verifyBoardsMembershipsDoesNotExist(action_fields, action_member, action_memberCreator, action_memberCreator_fields, action_member_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, boardStars, card_attachment_fields, card_attachments, card_checklists, card_fields, card_stickers, cards, checklist_fields, checklists, fields, idBoard, key, label_fields, labels, labels_limit, list_fields, lists, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, myPrefs, organization, organization_fields, organization_memberships, token) {
  var url = "/boards/" + idBoard;
  var description = "Verify BoardsMemberships " + idBoard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BoardsMemberships not found");
}

function matchAnyBoardsMembershipsAdded() {
  return bp.EventSet("Any BoardsMemberships Added", function(e) {
      return e.name.startsWith("Done: Create BoardsMemberships");
  });
}

function getBoardsMyPrefsByIdBoard(attributes, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/myPrefs";
  var description = "Retrieve preferences of a board by board ID. " + idBoard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateBoardsMyPrefsEmailPositionByIdBoard(attributes, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/myPrefs/emailPosition";
  var description = "Update email position preference of a board by board ID. " + idBoard;
  var body = {
    "attributes": String(attributes),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "idBoard": idBoard, "key": key, "token": token}) });
}

function updateBoardsMyPrefsIdEmailListByIdBoard(attributes, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/myPrefs/idEmailList";
  var description = "Update ID email list preference of a board by board ID. " + idBoard;
  var body = {
    "attributes": String(attributes),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "idBoard": idBoard, "key": key, "token": token}) });
}

function updateBoardsMyPrefsShowListGuideByIdBoard(attributes, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/myPrefs/showListGuide";
  var description = "Update show list guide preference of a board by board ID. " + idBoard;
  var body = {
    "attributes": String(attributes),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "idBoard": idBoard, "key": key, "token": token}) });
}

function verifyBoardsMyPrefsExists(attributes, idBoard, key, token) {
  var url = "/boards/" + idBoard + "/myPrefs";
  var description = "Verify BoardsMyPrefs " + idBoard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BoardsMyPrefs found");
}

function verifyBoardsMyPrefsDoesNotExist(attributes, idBoard, key, token) {
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

function addCardsStickersByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Add a sticker to a card by card ID. " + idCard;
  var body = {
    "id": String(id),
    "image": String(image),
    "key": String(key),
    "left": left,
    "token": String(token),
    "top": top,
    "zIndex": zIndex,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_memberCreator_fields": action_memberCreator_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "attachment_fields": attachment_fields, "attachments": attachments, "board": board, "board_fields": board_fields, "checkItemState_fields": checkItemState_fields, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "fields": fields, "id": id, "idCard": idCard, "image": image, "key": key, "left": left, "list": list, "list_fields": list_fields, "memberVoted_fields": memberVoted_fields, "member_fields": member_fields, "members": members, "membersVoted": membersVoted, "pos": pos, "sticker_fields": sticker_fields, "stickers": stickers, "token": token, "top": top, "zIndex": zIndex}) });
}

function getCardsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard;
  var description = "getCardsByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateCardsPosByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard + "/pos";
  var description = "Update the position of a card by card ID. " + idCard;
  var body = {
    "id": id,
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_memberCreator_fields": action_memberCreator_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "attachment_fields": attachment_fields, "attachments": attachments, "board": board, "board_fields": board_fields, "checkItemState_fields": checkItemState_fields, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "fields": fields, "id": id, "idCard": idCard, "image": image, "key": key, "left": left, "list": list, "list_fields": list_fields, "memberVoted_fields": memberVoted_fields, "member_fields": member_fields, "members": members, "membersVoted": membersVoted, "pos": pos, "sticker_fields": sticker_fields, "stickers": stickers, "token": token, "top": top, "zIndex": zIndex}) });
}

function deleteCardsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard;
  var description = "deleteCardsByIdCard() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getCardsStickersByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Retrieve stickers on a card by card ID. " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getCardsMembersByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard + "/members";
  var description = "getCardsMembersByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingCards(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard + "/stickers";
  var description = "Try Add Existing Cards " + idCard;
  var body = {
    "id": String(id),
    "image": String(image),
    "key": String(key),
    "left": left,
    "token": String(token),
    "top": top,
    "zIndex": zIndex,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCardsExists(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard;
  var description = "Verify Cards " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Cards found");
}

function verifyCardsDoesNotExist(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard;
  var description = "Verify Cards " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Cards not found");
}

function tryToDeleteANonExistingCards(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  var url = "/cards/" + idCard;
  var description = "Verify negative delete for Cards";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCards(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  return bp.EventSet("Delete Cards", function(e) {
      return e.name === "Done: " + "deleteCardsByIdCard()";
  });
}

function waitForCardsAdded(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, id, idCard, image, key, left, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, pos, sticker_fields, stickers, token, top, zIndex) {
  waitFor(matchSuccess("Add a sticker to a card by card ID."));
}

function matchAnyCardsAdded() {
  return bp.EventSet("Any Cards Added", function(e) {
      return e.name.startsWith("Done: Add a sticker to a card by card ID.");
  });
}

function addCardsActionsCommentsByIdCard(id, idCard, key, text, token) {
  var url = "/cards/" + idCard + "/actions/comments";
  var description = "addCardsActionsCommentsByIdCard() " + idCard;
  var body = {
    "id": String(id),
    "key": String(key),
    "text": String(text),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "key": key, "text": text, "token": token}) });
}

function updateCardsByIdCard(id, idCard, key, text, token) {
  var url = "/cards/" + idCard;
  var description = "updateCardsByIdCard() " + idCard;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "idCard": idCard, "key": key, "text": text, "token": token}) });
}

function deleteCardsByIdCard(id, idCard, key, text, token) {
  var url = "/cards/" + idCard;
  var description = "deleteCardsByIdCard() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

// verifyCardsActionsCommentsExists skipped: No GET /{id} operation detected.
function waitForCardsActionsCommentsAdded(id, idCard, key, text, token) {
  waitFor(matchSuccess("addCardsActionsCommentsByIdCard()"));
}

function matchAnyCardsActionsCommentsAdded() {
  return bp.EventSet("Any CardsActionsComments Added", function(e) {
      return e.name.startsWith("Done: addCardsActionsCommentsByIdCard()");
  });
}

function getCardsAttachmentsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Retrieve attachments for a specific card. " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addCardsAttachmentsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Add an attachment to a specific card. " + idCard;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_memberCreator_fields": action_memberCreator_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "attachment_fields": attachment_fields, "attachments": attachments, "attributes": attributes, "board": board, "board_fields": board_fields, "checkItemState_fields": checkItemState_fields, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "key": key, "list": list, "list_fields": list_fields, "memberVoted_fields": memberVoted_fields, "member_fields": member_fields, "members": members, "membersVoted": membersVoted, "name": name, "sticker_fields": sticker_fields, "stickers": stickers, "token": token}) });
}

function getCardsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "getCardsByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function deleteCardsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "deleteCardsByIdCard() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingCardsAttachments(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard + "/attachments";
  var description = "Try Add Existing CardsAttachments " + idCard;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCardsAttachmentsExists(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "Verify CardsAttachments " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CardsAttachments found");
}

function verifyCardsAttachmentsDoesNotExist(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "Verify CardsAttachments " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CardsAttachments not found");
}

function tryToDeleteANonExistingCardsAttachments(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "Verify negative delete for CardsAttachments";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCardsAttachments(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  return bp.EventSet("Delete CardsAttachments", function(e) {
      return e.name === "Done: " + "deleteCardsByIdCard()";
  });
}

function waitForCardsAttachmentsAdded(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, attributes, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, filter, id, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, name, sticker_fields, stickers, token) {
  waitFor(matchSuccess("Add an attachment to a specific card."));
}

function matchAnyCardsAttachmentsAdded() {
  return bp.EventSet("Any CardsAttachments Added", function(e) {
      return e.name.startsWith("Done: Add an attachment to a specific card.");
  });
}

function getCardsBoardByIdCard(fields, idCard, key, token) {
  var url = "/cards/" + idCard + "/board";
  var description = "Retrieve the board of a specific card. " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyCardsBoardExists(fields, idCard, key, token) {
  var url = "/cards/" + idCard + "/board";
  var description = "Verify CardsBoard " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CardsBoard found");
}

function verifyCardsBoardDoesNotExist(fields, idCard, key, token) {
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

function getCardsCheckItemStatesByIdCard(fields, idCard, key, token) {
  var url = "/cards/" + idCard + "/checkItemStates";
  var description = "Retrieve check item states for a specific card. " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyCardsCheckItemStatesExists(fields, idCard, key, token) {
  var url = "/cards/" + idCard + "/checkItemStates";
  var description = "Verify CardsCheckItemStates " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CardsCheckItemStates found");
}

function verifyCardsCheckItemStatesDoesNotExist(fields, idCard, key, token) {
  var url = "/cards/" + idCard + "/checkItemStates";
  var description = "Verify CardsCheckItemStates " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CardsCheckItemStates not found");
}

function matchAnyCardsCheckItemStatesAdded() {
  return bp.EventSet("Any CardsCheckItemStates Added", function(e) {
      return e.name.startsWith("Done: Create CardsCheckItemStates");
  });
}

function updateCardsByIdCard(attributes, id, idCard, idCheckItem, idChecklist, key, name, token) {
  var url = "/cards/" + idCard;
  var description = "updateCardsByIdCard() " + idCard;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "name": name, "token": token}) });
}

function addCardsChecklistCheckItemByIdCardByIdChecklist(attributes, id, idCard, idCheckItem, idChecklist, key, name, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem";
  var description = "addCardsChecklistCheckItemByIdCardByIdChecklist() " + idCard;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "name": name, "token": token}) });
}

function deleteCardsByIdCard(attributes, id, idCard, idCheckItem, idChecklist, key, name, token) {
  var url = "/cards/" + idCard;
  var description = "deleteCardsByIdCard() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(attributes, id, idCard, idCheckItem, idChecklist, key, name, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/convertToCard";
  var description = "addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem() " + idCard;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "name": name, "token": token}) });
}

function updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem(attributes, id, idCard, idCheckItem, idChecklist, key, name, token) {
  var url = "/cards/" + idCard + "/checklist/" + idChecklist + "/checkItem/" + idCheckItem + "/name";
  var description = "updateCardsChecklistCheckItemNameByIdCardByIdChecklistByIdCheckItem() " + idCard;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "id": id, "idCard": idCard, "idCheckItem": idCheckItem, "idChecklist": idChecklist, "key": key, "name": name, "token": token}) });
}

// verifyCardsChecklistCheckItemExists skipped: No GET /{id} operation detected.
function waitForCardsChecklistCheckItemAdded(attributes, id, idCard, idCheckItem, idChecklist, key, name, token) {
  waitFor(matchSuccess("addCardsChecklistCheckItemByIdCardByIdChecklist()"));
}

function matchAnyCardsChecklistCheckItemAdded() {
  return bp.EventSet("Any CardsChecklistCheckItem Added", function(e) {
      return e.name.startsWith("Done: addCardsChecklistCheckItemByIdCardByIdChecklist()");
  });
}

function getCardsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "getCardsByIdCard() " + idCard;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateCardsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "updateCardsByIdCard() " + idCard;
  var body = {
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "action_memberCreator_fields": action_memberCreator_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "attachment_fields": attachment_fields, "attachments": attachments, "board": board, "board_fields": board_fields, "checkItemState_fields": checkItemState_fields, "checkItemStates": checkItemStates, "checklist_fields": checklist_fields, "checklists": checklists, "fields": fields, "idCard": idCard, "key": key, "list": list, "list_fields": list_fields, "memberVoted_fields": memberVoted_fields, "member_fields": member_fields, "members": members, "membersVoted": membersVoted, "sticker_fields": sticker_fields, "stickers": stickers, "token": token}) });
}

function deleteCardsByIdCard(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "deleteCardsByIdCard() " + idCard;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function verifyCardsStickersExists(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "Verify CardsStickers " + idCard + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("CardsStickers found");
}

function verifyCardsStickersDoesNotExist(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "Verify CardsStickers " + idCard + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("CardsStickers not found");
}

function tryToDeleteANonExistingCardsStickers(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, sticker_fields, stickers, token) {
  var url = "/cards/" + idCard;
  var description = "Verify negative delete for CardsStickers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCardsStickers(action_fields, action_memberCreator_fields, actions, actions_display, actions_entities, actions_limit, attachment_fields, attachments, board, board_fields, checkItemState_fields, checkItemStates, checklist_fields, checklists, fields, idCard, key, list, list_fields, memberVoted_fields, member_fields, members, membersVoted, sticker_fields, stickers, token) {
  return bp.EventSet("Delete CardsStickers", function(e) {
      return e.name === "Done: " + "deleteCardsByIdCard()";
  });
}

function matchAnyCardsStickersAdded() {
  return bp.EventSet("Any CardsStickers Added", function(e) {
      return e.name.startsWith("Done: Create CardsStickers");
  });
}

function updateCardsSubscribedByIdCard(idCard, key, token) {
  var url = "/cards/" + idCard + "/subscribed";
  var description = "updateCardsSubscribedByIdCard() " + idCard;
  var body = {
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idCard": idCard, "key": key, "token": token}) });
}

// verifyCardsSubscribedExists skipped: No GET /{id} operation detected.
function matchAnyCardsSubscribedAdded() {
  return bp.EventSet("Any CardsSubscribed Added", function(e) {
      return e.name.startsWith("Done: Create CardsSubscribed");
  });
}

function addChecklistsCheckItemsByIdChecklist(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "addChecklistsCheckItemsByIdChecklist() " + idChecklist;
  var body = {
    "checked": checked,
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "pos": String(pos),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checkItem_fields": checkItem_fields, "checkItems": checkItems, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function getChecklistsByIdChecklist(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist;
  var description = "getChecklistsByIdChecklist() " + idChecklist;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateChecklistsIdCardByIdChecklist(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/idCard";
  var description = "updateChecklistsIdCardByIdChecklist() " + idChecklist;
  var body = {
    "id": id,
    "idCard": String(idCard),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checkItem_fields": checkItem_fields, "checkItems": checkItems, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function deleteChecklistsByIdChecklist(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist;
  var description = "deleteChecklistsByIdChecklist() " + idChecklist;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getChecklistsCardsByIdChecklist(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/cards";
  var description = "getChecklistsCardsByIdChecklist() " + idChecklist;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateChecklistsNameByIdChecklist(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/name";
  var description = "updateChecklistsNameByIdChecklist() " + idChecklist;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checkItem_fields": checkItem_fields, "checkItems": checkItems, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function updateChecklistsPosByIdChecklist(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/pos";
  var description = "updateChecklistsPosByIdChecklist() " + idChecklist;
  var body = {
    "id": id,
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checkItem_fields": checkItem_fields, "checkItems": checkItems, "checked": checked, "checklists": checklists, "field": field, "fields": fields, "filter": filter, "id": id, "idCard": idCard, "idChecklist": idChecklist, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "token": token}) });
}

function getChecklistsByIdChecklistByField(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/" + field;
  var description = "getChecklistsByIdChecklistByField() " + idChecklist;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingChecklists(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist + "/checkItems";
  var description = "Try Add Existing Checklists " + idChecklist;
  var body = {
    "checked": checked,
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "pos": String(pos),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyChecklistsExists(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist;
  var description = "Verify Checklists " + idChecklist + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Checklists found");
}

function verifyChecklistsDoesNotExist(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist;
  var description = "Verify Checklists " + idChecklist + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Checklists not found");
}

function tryToDeleteANonExistingChecklists(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  var url = "/checklists/" + idChecklist;
  var description = "Verify negative delete for Checklists";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedChecklists(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  return bp.EventSet("Delete Checklists", function(e) {
      return e.name === "Done: " + "deleteChecklistsByIdChecklist()";
  });
}

function waitForChecklistsAdded(actions, attachment_fields, attachments, before, card_fields, cards, checkItemStates, checkItem_fields, checkItems, checked, checklists, field, fields, filter, id, idCard, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token) {
  waitFor(matchSuccess("addChecklistsCheckItemsByIdChecklist()"));
}

function matchAnyChecklistsAdded() {
  return bp.EventSet("Any Checklists Added", function(e) {
      return e.name.startsWith("Done: addChecklistsCheckItemsByIdChecklist()");
  });
}

function addLabels(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  var url = "/labels";
  var description = "addLabels() " + idLabel;
  var body = {
    "color": String(color),
    "id": String(id),
    "idBoard": String(idBoard),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "fields": fields, "id": id, "idBoard": idBoard, "idLabel": idLabel, "key": key, "labels_name": labels_name, "name": name, "token": token}) });
}

function getLabelsByIdLabel(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  var url = "/labels/" + idLabel;
  var description = "getLabelsByIdLabel() " + idLabel;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateLabelsNameByIdLabel(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  var url = "/labels/" + idLabel + "/name";
  var description = "updateLabelsNameByIdLabel() " + idLabel;
  var body = {
    "id": id,
    "key": String(key),
    "labels_name": String(labels_name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "fields": fields, "id": id, "idBoard": idBoard, "idLabel": idLabel, "key": key, "labels_name": labels_name, "name": name, "token": token}) });
}

function deleteLabelsByIdLabel(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  var url = "/labels/" + idLabel;
  var description = "deleteLabelsByIdLabel() " + idLabel;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingLabels(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  var url = "/labels";
  var description = "Try Add Existing Labels " + idLabel;
  var body = {
    "color": String(color),
    "id": String(id),
    "idBoard": String(idBoard),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyLabelsExists(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Verify Labels " + idLabel + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Labels found");
}

function verifyLabelsDoesNotExist(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Verify Labels " + idLabel + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Labels not found");
}

function tryToDeleteANonExistingLabels(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  var url = "/labels/" + idLabel;
  var description = "Verify negative delete for Labels";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedLabels(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  return bp.EventSet("Delete Labels", function(e) {
      return e.name === "Done: " + "deleteLabelsByIdLabel()";
  });
}

function waitForLabelsAdded(color, fields, id, idBoard, idLabel, key, labels_name, name, token) {
  waitFor(matchSuccess("addLabels()"));
}

function matchAnyLabelsAdded() {
  return bp.EventSet("Any Labels Added", function(e) {
      return e.name.startsWith("Done: addLabels()");
  });
}

function addListsMoveAllCardsByIdList(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/moveAllCards";
  var description = "addListsMoveAllCardsByIdList() " + idList;
  var body = {
    "id": String(id),
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "board_fields": board_fields, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checklists": checklists, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function getListsByIdList(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList;
  var description = "getListsByIdList() " + idList;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateListsIdBoardByIdList(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/idBoard";
  var description = "updateListsIdBoardByIdList() " + idList;
  var body = {
    "id": id,
    "idBoard": String(idBoard),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "board_fields": board_fields, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checklists": checklists, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function getListsCardsByIdList(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/cards";
  var description = "Retrieve cards associated with a specific list by its ID. " + idList;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateListsNameByIdList(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/name";
  var description = "updateListsNameByIdList() " + idList;
  var body = {
    "id": id,
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "board_fields": board_fields, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checklists": checklists, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateListsPosByIdList(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/pos";
  var description = "updateListsPosByIdList() " + idList;
  var body = {
    "id": id,
    "key": String(key),
    "pos": String(pos),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "board_fields": board_fields, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checklists": checklists, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function updateListsSubscribedByIdList(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList + "/subscribed";
  var description = "updateListsSubscribedByIdList() " + idList;
  var body = {
    "id": id,
    "key": String(key),
    "subscribed": subscribed,
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"actions": actions, "attachment_fields": attachment_fields, "attachments": attachments, "before": before, "board": board, "board_fields": board_fields, "card_fields": card_fields, "cards": cards, "checkItemStates": checkItemStates, "checklists": checklists, "fields": fields, "filter": filter, "id": id, "idBoard": idBoard, "idList": idList, "key": key, "limit": limit, "member_fields": member_fields, "members": members, "name": name, "pos": pos, "since": since, "stickers": stickers, "subscribed": subscribed, "token": token}) });
}

function tryToAddExistingLists(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
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

function verifyListsExists(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList;
  var description = "Verify Lists " + idList + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Lists found");
}

function verifyListsDoesNotExist(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  var url = "/lists/" + idList;
  var description = "Verify Lists " + idList + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Lists not found");
}

function waitForListsAdded(actions, attachment_fields, attachments, before, board, board_fields, card_fields, cards, checkItemStates, checklists, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed, token) {
  waitFor(matchSuccess("addListsMoveAllCardsByIdList()"));
}

function matchAnyListsAdded() {
  return bp.EventSet("Any Lists Added", function(e) {
      return e.name.startsWith("Done: addListsMoveAllCardsByIdList()");
  });
}

function getMembersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember;
  var description = "getMembersByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersUsernameByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember + "/username";
  var description = "updateMembersUsernameByIdMember() " + idMember;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
    "username": String(username),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "field": field, "fields": fields, "filter": filter, "id": id, "idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_avatarSource": members_avatarSource, "members_savedSearches": members_savedSearches, "name": name, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens, "username": username}) });
}

function getMembersTokensByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember + "/tokens";
  var description = "getMembersTokensByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersSavedSearchesByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
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
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "field": field, "fields": fields, "filter": filter, "id": id, "idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_avatarSource": members_avatarSource, "members_savedSearches": members_savedSearches, "name": name, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens, "username": username}) });
}

function updateMembersAvatarSourceByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember + "/avatarSource";
  var description = "updateMembersAvatarSourceByIdMember() " + idMember;
  var body = {
    "id": id,
    "key": String(key),
    "members_avatarSource": String(members_avatarSource),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "field": field, "fields": fields, "filter": filter, "id": id, "idMember": idMember, "idSavedSearch": idSavedSearch, "key": key, "members_avatarSource": members_avatarSource, "members_savedSearches": members_savedSearches, "name": name, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens, "username": username}) });
}

function deleteMembersSavedSearchesByIdMemberByIdSavedSearch(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "deleteMembersSavedSearchesByIdMemberByIdSavedSearch() " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getMembersOrganizationsInvitedByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember + "/organizationsInvited";
  var description = "Retrieve invited organizations for a member by idMember.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getMembersOrganizationsInvitedByIdMemberByField(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember + "/organizationsInvited/" + field;
  var description = "Retrieve invited organizations for a member by idMember and field.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingMembers(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
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

function verifyMembersExists(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember;
  var description = "Verify Members " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Members found");
}

function verifyMembersDoesNotExist(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember;
  var description = "Verify Members " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Members not found");
}

function tryToDeleteANonExistingMembers(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  var url = "/members/" + idMember + "/savedSearches/" + idSavedSearch;
  var description = "Verify negative delete for Members";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembers(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  return bp.EventSet("Delete Members", function(e) {
      return e.name === "Done: " + "deleteMembersSavedSearchesByIdMemberByIdSavedSearch()";
  });
}

function waitForMembersAdded(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, field, fields, filter, id, idMember, idSavedSearch, key, members_avatarSource, members_savedSearches, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens, username) {
  waitFor(matchSuccess("addMembersSavedSearchesByIdMember()"));
}

function matchAnyMembersAdded() {
  return bp.EventSet("Any Members Added", function(e) {
      return e.name.startsWith("Done: addMembersSavedSearchesByIdMember()");
  });
}

function updateMembersBioByIdMember(idMember, key, token) {
  var url = "/members/" + idMember + "/bio";
  var description = "updateMembersBioByIdMember() " + idMember;
  var body = {
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idMember": idMember, "key": key, "token": token}) });
}

// verifyMembersBioExists skipped: No GET /{id} operation detected.
function matchAnyMembersBioAdded() {
  return bp.EventSet("Any MembersBio Added", function(e) {
      return e.name.startsWith("Done: Create MembersBio");
  });
}

function getMembersBoardBackgroundsByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "getMembersBoardBackgroundsByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersBoardBackgroundsByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "addMembersBoardBackgroundsByIdMember() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "fields": fields, "filter": filter, "id": id, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens}) });
}

function getMembersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "getMembersByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "updateMembersByIdMember() " + idMember;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "fields": fields, "filter": filter, "id": id, "idBoardBackground": idBoardBackground, "idMember": idMember, "key": key, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens}) });
}

function deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground() " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingMembersBoardBackgrounds(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardBackgrounds";
  var description = "Try Add Existing MembersBoardBackgrounds " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersBoardBackgroundsExists(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "Verify MembersBoardBackgrounds " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersBoardBackgrounds found");
}

function verifyMembersBoardBackgroundsDoesNotExist(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "Verify MembersBoardBackgrounds " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersBoardBackgrounds not found");
}

function tryToDeleteANonExistingMembersBoardBackgrounds(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardBackgrounds/" + idBoardBackground;
  var description = "Verify negative delete for MembersBoardBackgrounds";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembersBoardBackgrounds(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  return bp.EventSet("Delete MembersBoardBackgrounds", function(e) {
      return e.name === "Done: " + "deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground()";
  });
}

function waitForMembersBoardBackgroundsAdded(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idBoardBackground, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  waitFor(matchSuccess("addMembersBoardBackgroundsByIdMember()"));
}

function matchAnyMembersBoardBackgroundsAdded() {
  return bp.EventSet("Any MembersBoardBackgrounds Added", function(e) {
      return e.name.startsWith("Done: addMembersBoardBackgroundsByIdMember()");
  });
}

function getMembersBoardStarsByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "getMembersBoardStarsByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersBoardStarsByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "addMembersBoardStarsByIdMember() " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "fields": fields, "id": id, "idBoardStar": idBoardStar, "idMember": idMember, "key": key, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens}) });
}

function getMembersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "getMembersByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateMembersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "updateMembersByIdMember() " + idMember;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "fields": fields, "id": id, "idBoardStar": idBoardStar, "idMember": idMember, "key": key, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens}) });
}

function deleteMembersBoardStarsByIdMemberByIdBoardStar(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "deleteMembersBoardStarsByIdMemberByIdBoardStar() " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingMembersBoardStars(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardStars";
  var description = "Try Add Existing MembersBoardStars " + idMember;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersBoardStarsExists(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "Verify MembersBoardStars " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersBoardStars found");
}

function verifyMembersBoardStarsDoesNotExist(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "Verify MembersBoardStars " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersBoardStars not found");
}

function tryToDeleteANonExistingMembersBoardStars(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/boardStars/" + idBoardStar;
  var description = "Verify negative delete for MembersBoardStars";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembersBoardStars(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  return bp.EventSet("Delete MembersBoardStars", function(e) {
      return e.name === "Done: " + "deleteMembersBoardStarsByIdMemberByIdBoardStar()";
  });
}

function waitForMembersBoardStarsAdded(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, id, idBoardStar, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  waitFor(matchSuccess("addMembersBoardStarsByIdMember()"));
}

function matchAnyMembersBoardStarsAdded() {
  return bp.EventSet("Any MembersBoardStars Added", function(e) {
      return e.name.startsWith("Done: addMembersBoardStarsByIdMember()");
  });
}

function getMembersCustomEmojiByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idMember, key, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "This gets the list of all of the user’s uploaded emoji " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersCustomEmojiByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idMember, key, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Add a custom emoji for a member " + idMember;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "attributes": attributes, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "fields": fields, "filter": filter, "id": id, "idMember": idMember, "key": key, "name": name, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens}) });
}

function getMembersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idMember, key, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "getMembersByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingMembersCustomEmoji(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idMember, key, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/customEmoji";
  var description = "Try Add Existing MembersCustomEmoji " + idMember;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "name": String(name),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersCustomEmojiExists(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idMember, key, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "Verify MembersCustomEmoji " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersCustomEmoji found");
}

function verifyMembersCustomEmojiDoesNotExist(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idMember, key, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "Verify MembersCustomEmoji " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersCustomEmoji not found");
}

function waitForMembersCustomEmojiAdded(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idMember, key, name, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  waitFor(matchSuccess("Add a custom emoji for a member"));
}

function matchAnyMembersCustomEmojiAdded() {
  return bp.EventSet("Any MembersCustomEmoji Added", function(e) {
      return e.name.startsWith("Done: Add a custom emoji for a member");
  });
}

function getMembersCustomStickersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "This gets a list of all of the user’s uploaded stickers " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addMembersCustomStickersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Add a custom sticker for a member " + idMember;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_before": action_before, "action_fields": action_fields, "action_since": action_since, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "attributes": attributes, "boardBackgrounds": boardBackgrounds, "boardStars": boardStars, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "board_memberships": board_memberships, "board_organization": board_organization, "board_organization_fields": board_organization_fields, "boards": boards, "boardsInvited": boardsInvited, "boardsInvited_fields": boardsInvited_fields, "card_attachment_fields": card_attachment_fields, "card_attachments": card_attachments, "card_fields": card_fields, "card_member_fields": card_member_fields, "card_members": card_members, "card_stickers": card_stickers, "cards": cards, "customBoardBackgrounds": customBoardBackgrounds, "customEmoji": customEmoji, "customStickers": customStickers, "fields": fields, "filter": filter, "id": id, "idCustomSticker": idCustomSticker, "idMember": idMember, "key": key, "notification_before": notification_before, "notification_fields": notification_fields, "notification_memberCreator": notification_memberCreator, "notification_memberCreator_fields": notification_memberCreator_fields, "notification_since": notification_since, "notifications": notifications, "notifications_display": notifications_display, "notifications_entities": notifications_entities, "notifications_limit": notifications_limit, "organization_fields": organization_fields, "organization_paid_account": organization_paid_account, "organizations": organizations, "organizationsInvited": organizationsInvited, "organizationsInvited_fields": organizationsInvited_fields, "paid_account": paid_account, "savedSearches": savedSearches, "token": token, "tokens": tokens}) });
}

function getMembersByIdMember(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "getMembersByIdMember() " + idMember;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function deleteMembersCustomStickersByIdMemberByIdCustomSticker(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Delete a specific custom sticker by ID for a member " + idMember;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function tryToAddExistingMembersCustomStickers(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/customStickers";
  var description = "Try Add Existing MembersCustomStickers " + idMember;
  var body = {
    "attributes": String(attributes),
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyMembersCustomStickersExists(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "Verify MembersCustomStickers " + idMember + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("MembersCustomStickers found");
}

function verifyMembersCustomStickersDoesNotExist(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember;
  var description = "Verify MembersCustomStickers " + idMember + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("MembersCustomStickers not found");
}

function tryToDeleteANonExistingMembersCustomStickers(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  var url = "/members/" + idMember + "/customStickers/" + idCustomSticker;
  var description = "Verify negative delete for MembersCustomStickers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMembersCustomStickers(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  return bp.EventSet("Delete MembersCustomStickers", function(e) {
      return e.name === "Done: " + "Delete a specific custom sticker by ID for a member";
  });
}

function waitForMembersCustomStickersAdded(action_before, action_fields, action_since, actions, actions_display, actions_entities, actions_limit, attributes, boardBackgrounds, boardStars, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, board_memberships, board_organization, board_organization_fields, boards, boardsInvited, boardsInvited_fields, card_attachment_fields, card_attachments, card_fields, card_member_fields, card_members, card_stickers, cards, customBoardBackgrounds, customEmoji, customStickers, fields, filter, id, idCustomSticker, idMember, key, notification_before, notification_fields, notification_memberCreator, notification_memberCreator_fields, notification_since, notifications, notifications_display, notifications_entities, notifications_limit, organization_fields, organization_paid_account, organizations, organizationsInvited, organizationsInvited_fields, paid_account, savedSearches, token, tokens) {
  waitFor(matchSuccess("Add a custom sticker for a member"));
}

function matchAnyMembersCustomStickersAdded() {
  return bp.EventSet("Any MembersCustomStickers Added", function(e) {
      return e.name.startsWith("Done: Add a custom sticker for a member");
  });
}

function getMembersDeltasByIdMember(id, idMember, ixLastUpdate, key, tags, token) {
  var url = "/members/" + idMember + "/deltas";
  var description = "Get deltas for a member " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

// verifyMembersDeltasExists skipped: No GET /{id} operation detected.
function matchAnyMembersDeltasAdded() {
  return bp.EventSet("Any MembersDeltas Added", function(e) {
      return e.name.startsWith("Done: Create MembersDeltas");
  });
}

function addNotificationsAllRead(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/all/read";
  var description = "addNotificationsAllRead() " + idNotification;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"board": board, "board_fields": board_fields, "card": card, "card_fields": card_fields, "display": display, "entities": entities, "field": field, "fields": fields, "id": id, "idNotification": idNotification, "key": key, "list": list, "member": member, "memberCreator": memberCreator, "memberCreator_fields": memberCreator_fields, "member_fields": member_fields, "organization": organization, "organization_fields": organization_fields, "token": token, "unread": unread}) });
}

function getNotificationsByIdNotification(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification;
  var description = "getNotificationsByIdNotification() " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateNotificationsUnreadByIdNotification(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification + "/unread";
  var description = "Update unread status of a notification by its ID. " + idNotification;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
    "unread": unread,
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"board": board, "board_fields": board_fields, "card": card, "card_fields": card_fields, "display": display, "entities": entities, "field": field, "fields": fields, "id": id, "idNotification": idNotification, "key": key, "list": list, "member": member, "memberCreator": memberCreator, "memberCreator_fields": memberCreator_fields, "member_fields": member_fields, "organization": organization, "organization_fields": organization_fields, "token": token, "unread": unread}) });
}

function getNotificationsListByIdNotification(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification + "/list";
  var description = "Retrieve a list of notifications by ID. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberByIdNotificationByField(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification + "/member/" + field;
  var description = "Retrieve a specific field of member details for a specific notification. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberCreatorByIdNotification(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification + "/memberCreator";
  var description = "Retrieve creator details for a specific notification. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsMemberCreatorByIdNotificationByField(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification + "/memberCreator/" + field;
  var description = "Retrieve a specific field of creator details for a specific notification. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getNotificationsOrganizationByIdNotification(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification + "/organization";
  var description = "Retrieve organization details for a specific notification. " + idNotification;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function tryToAddExistingNotifications(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/all/read";
  var description = "Try Add Existing Notifications " + idNotification;
  var body = {
    "id": String(id),
    "key": String(key),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyNotificationsExists(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification;
  var description = "Verify Notifications " + idNotification + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Notifications found");
}

function verifyNotificationsDoesNotExist(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  var url = "/notifications/" + idNotification;
  var description = "Verify Notifications " + idNotification + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Notifications not found");
}

function waitForNotificationsAdded(board, board_fields, card, card_fields, display, entities, field, fields, id, idNotification, key, list, member, memberCreator, memberCreator_fields, member_fields, organization, organization_fields, token, unread) {
  waitFor(matchSuccess("addNotificationsAllRead()"));
}

function matchAnyNotificationsAdded() {
  return bp.EventSet("Any Notifications Added", function(e) {
      return e.name.startsWith("Done: addNotificationsAllRead()");
  });
}

function addOrganizationsLogoByIdOrg(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg + "/logo";
  var description = "addOrganizationsLogoByIdOrg() " + idOrg;
  var body = {
    "id": String(id),
    "key": String(key),
    "logo": String(logo),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "activity": activity, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "boards": boards, "desc": desc, "fields": fields, "filter": filter, "id": id, "idOrg": idOrg, "ixLastUpdate": ixLastUpdate, "key": key, "lists": lists, "logo": logo, "member_activity": member_activity, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "organization": organization, "organization_fields": organization_fields, "paid_account": paid_account, "tags": tags, "token": token, "website": website}) });
}

function getOrganizationsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "getOrganizationsByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsWebsiteByIdOrg(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg + "/website";
  var description = "updateOrganizationsWebsiteByIdOrg() " + idOrg;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
    "website": String(website),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "activity": activity, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "boards": boards, "desc": desc, "fields": fields, "filter": filter, "id": id, "idOrg": idOrg, "ixLastUpdate": ixLastUpdate, "key": key, "lists": lists, "logo": logo, "member_activity": member_activity, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "organization": organization, "organization_fields": organization_fields, "paid_account": paid_account, "tags": tags, "token": token, "website": website}) });
}

function deleteOrganizationsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "deleteOrganizationsByIdOrg() " + idOrg;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getOrganizationsMembersByIdOrg(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg + "/members";
  var description = "getOrganizationsMembersByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsBoardsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg + "/boards";
  var description = "getOrganizationsBoardsByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsBoardsByIdOrgByFilter(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg + "/boards/" + filter;
  var description = "getOrganizationsBoardsByIdOrgByFilter() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsDeltasByIdOrg(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg + "/deltas";
  var description = "getOrganizationsDeltasByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsDescByIdOrg(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg + "/desc";
  var description = "updateOrganizationsDescByIdOrg() " + idOrg;
  var body = {
    "id": id,
    "desc": String(desc),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_format": actions_format, "actions_limit": actions_limit, "actions_since": actions_since, "activity": activity, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "boards": boards, "desc": desc, "fields": fields, "filter": filter, "id": id, "idOrg": idOrg, "ixLastUpdate": ixLastUpdate, "key": key, "lists": lists, "logo": logo, "member_activity": member_activity, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "organization": organization, "organization_fields": organization_fields, "paid_account": paid_account, "tags": tags, "token": token, "website": website}) });
}

function tryToAddExistingOrganizations(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
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

function verifyOrganizationsExists(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "Verify Organizations " + idOrg + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Organizations found");
}

function verifyOrganizationsDoesNotExist(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "Verify Organizations " + idOrg + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Organizations not found");
}

function tryToDeleteANonExistingOrganizations(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  var url = "/organizations/" + idOrg;
  var description = "Verify negative delete for Organizations";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrganizations(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  return bp.EventSet("Delete Organizations", function(e) {
      return e.name === "Done: " + "deleteOrganizationsByIdOrg()";
  });
}

function waitForOrganizationsAdded(action_fields, actions, actions_display, actions_entities, actions_format, actions_limit, actions_since, activity, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, desc, fields, filter, id, idOrg, ixLastUpdate, key, lists, logo, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, organization, organization_fields, paid_account, tags, token, website) {
  waitFor(matchSuccess("addOrganizationsLogoByIdOrg()"));
}

function matchAnyOrganizationsAdded() {
  return bp.EventSet("Any Organizations Added", function(e) {
      return e.name.startsWith("Done: addOrganizationsLogoByIdOrg()");
  });
}

function deleteOrganizationsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "deleteOrganizationsByIdOrg() " + idOrg;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getOrganizationsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "getOrganizationsByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "updateOrganizationsByIdOrg() " + idOrg;
  var body = {
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "boards": boards, "fields": fields, "idOrg": idOrg, "key": key, "member_activity": member_activity, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "paid_account": paid_account, "token": token}) });
}

function verifyOrganizationsMembersExists(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "Verify OrganizationsMembers " + idOrg + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationsMembers found");
}

function verifyOrganizationsMembersDoesNotExist(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "Verify OrganizationsMembers " + idOrg + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationsMembers not found");
}

function tryToDeleteANonExistingOrganizationsMembers(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "Verify negative delete for OrganizationsMembers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrganizationsMembers(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  return bp.EventSet("Delete OrganizationsMembers", function(e) {
      return e.name === "Done: " + "deleteOrganizationsByIdOrg()";
  });
}

function matchAnyOrganizationsMembersAdded() {
  return bp.EventSet("Any OrganizationsMembers Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMembers");
  });
}

function getOrganizationsMembersInvitedByIdOrg(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg + "/membersInvited";
  var description = "getOrganizationsMembersInvitedByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "getOrganizationsByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function verifyOrganizationsMembersInvitedExists(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "Verify OrganizationsMembersInvited " + idOrg + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationsMembersInvited found");
}

function verifyOrganizationsMembersInvitedDoesNotExist(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, idOrg, key, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "Verify OrganizationsMembersInvited " + idOrg + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationsMembersInvited not found");
}

function matchAnyOrganizationsMembersInvitedAdded() {
  return bp.EventSet("Any OrganizationsMembersInvited Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMembersInvited");
  });
}

function getOrganizationsMembershipsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, filter, idOrg, key, member, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg + "/memberships";
  var description = "Retrieve a list of memberships for a specific organization. " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function getOrganizationsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, filter, idOrg, key, member, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "getOrganizationsByIdOrg() " + idOrg;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateOrganizationsByIdOrg(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, filter, idOrg, key, member, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "updateOrganizationsByIdOrg() " + idOrg;
  var body = {
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"action_fields": action_fields, "actions": actions, "actions_display": actions_display, "actions_entities": actions_entities, "actions_limit": actions_limit, "board_action_fields": board_action_fields, "board_actions": board_actions, "board_actions_display": board_actions_display, "board_actions_entities": board_actions_entities, "board_actions_format": board_actions_format, "board_actions_limit": board_actions_limit, "board_actions_since": board_actions_since, "board_fields": board_fields, "board_lists": board_lists, "boards": boards, "fields": fields, "filter": filter, "idOrg": idOrg, "key": key, "member": member, "member_activity": member_activity, "member_fields": member_fields, "members": members, "membersInvited": membersInvited, "membersInvited_fields": membersInvited_fields, "memberships": memberships, "memberships_member": memberships_member, "memberships_member_fields": memberships_member_fields, "paid_account": paid_account, "token": token}) });
}

function verifyOrganizationsMembershipsExists(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, filter, idOrg, key, member, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "Verify OrganizationsMemberships " + idOrg + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationsMemberships found");
}

function verifyOrganizationsMembershipsDoesNotExist(action_fields, actions, actions_display, actions_entities, actions_limit, board_action_fields, board_actions, board_actions_display, board_actions_entities, board_actions_format, board_actions_limit, board_actions_since, board_fields, board_lists, boards, fields, filter, idOrg, key, member, member_activity, member_fields, members, membersInvited, membersInvited_fields, memberships, memberships_member, memberships_member_fields, paid_account, token) {
  var url = "/organizations/" + idOrg;
  var description = "Verify OrganizationsMemberships " + idOrg + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationsMemberships not found");
}

function matchAnyOrganizationsMembershipsAdded() {
  return bp.EventSet("Any OrganizationsMemberships Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsMemberships");
  });
}

function updateOrganizationsNameByIdOrg(attributes, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/name";
  var description = "Update the name of a specific organization. " + idOrg;
  var body = {
    "attributes": String(attributes),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "idOrg": idOrg, "key": key, "token": token}) });
}

// verifyOrganizationsNameExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationsNameAdded() {
  return bp.EventSet("Any OrganizationsName Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsName");
  });
}

function deleteOrganizationsPrefsAssociatedDomainByIdOrg(attributes, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Delete the associated domain preference for a specific organization. " + idOrg;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function updateOrganizationsPrefsAssociatedDomainByIdOrg(attributes, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/prefs/associatedDomain";
  var description = "Update the associated domain preference for a specific organization. " + idOrg;
  var body = {
    "attributes": String(attributes),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "idOrg": idOrg, "key": key, "token": token}) });
}

// verifyOrganizationsPrefsAssociatedDomainExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationsPrefsAssociatedDomainAdded() {
  return bp.EventSet("Any OrganizationsPrefsAssociatedDomain Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsPrefsAssociatedDomain");
  });
}

function updateOrganizationsPrefsBoardVisibilityRestrictOrgByIdOrg(attributes, idOrg, key, token) {
  var url = "/organizations/" + idOrg + "/prefs/boardVisibilityRestrict/org";
  var description = "Update the board visibility restriction preference for a specific organization. " + idOrg;
  var body = {
    "attributes": String(attributes),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attributes": attributes, "idOrg": idOrg, "key": key, "token": token}) });
}

// verifyOrganizationsPrefsBoardVisibilityRestrictOrgExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationsPrefsBoardVisibilityRestrictOrgAdded() {
  return bp.EventSet("Any OrganizationsPrefsBoardVisibilityRestrictOrg Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsPrefsBoardVisibilityRestrictOrg");
  });
}

function updateOrganizationsPrefsOrgInviteRestrictByIdOrg(idOrg, key, prefs_orgInviteRestrict, token, value) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Update the organization invite restriction preferences for an organization. " + idOrg;
  var body = {
    "key": String(key),
    "prefs_orgInviteRestrict": String(prefs_orgInviteRestrict),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"idOrg": idOrg, "key": key, "prefs_orgInviteRestrict": prefs_orgInviteRestrict, "token": token, "value": value}) });
}

function deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(idOrg, key, prefs_orgInviteRestrict, token, value) {
  var url = "/organizations/" + idOrg + "/prefs/orgInviteRestrict";
  var description = "Delete the organization invite restriction preferences for an organization. " + idOrg;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

// verifyOrganizationsPrefsExists skipped: No GET /{id} operation detected.
function matchAnyOrganizationsPrefsAdded() {
  return bp.EventSet("Any OrganizationsPrefs Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationsPrefs");
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
  var description = "Attributes of \"Sessions\" to be added. " + idSession;
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
  var description = "Attributes of \"Sessions\" to be updated. " + idSession;
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

// verifySessionsExists skipped: No GET /{id} operation detected.
function waitForSessionsAdded(id, idSession, key, name, status, token) {
  waitFor(matchSuccess("Attributes of \"Sessions\" to be added."));
}

function matchAnySessionsAdded() {
  return bp.EventSet("Any Sessions Added", function(e) {
      return e.name.startsWith("Done: Attributes of \"Sessions\" to be added.");
  });
}

function getTokensMemberByToken(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token + "/member";
  var description = "Retrieve member information associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function deleteTokensByToken(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token;
  var description = "deleteTokensByToken() " + token;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getTokensWebhooksByToken(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "List all webhooks associated with a token.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function addTokensWebhooksByToken(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Add a new webhook for a token.";
  var body = {
    "description": String(description),
    "id": String(id),
    "key": String(key),
    "webhook": String(webhook),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "fields": fields, "id": id, "key": key, "token": token, "webhook": webhook}) });
}

function updateTokensWebhooksByToken(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Update an existing webhook for a token.";
  var body = {
    "id": id,
    "key": String(key),
    "webhook": String(webhook),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "fields": fields, "id": id, "key": key, "token": token, "webhook": webhook}) });
}

function tryToAddExistingTokens(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token + "/webhooks";
  var description = "Try Add Existing Tokens " + token;
  var body = {
    "description": String(description),
    "id": String(id),
    "key": String(key),
    "webhook": String(webhook),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTokensExists(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token + "/member";
  var description = "Verify Tokens " + token + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Tokens found");
}

function verifyTokensDoesNotExist(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token + "/member";
  var description = "Verify Tokens " + token + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Tokens not found");
}

function tryToDeleteANonExistingTokens(description, fields, id, key, token, webhook) {
  var url = "/tokens/" + token;
  var description = "Verify negative delete for Tokens";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTokens(description, fields, id, key, token, webhook) {
  return bp.EventSet("Delete Tokens", function(e) {
      return e.name === "Done: " + "deleteTokensByToken()";
  });
}

function waitForTokensAdded(description, fields, id, key, token, webhook) {
  waitFor(matchSuccess("Add a new webhook for a token."));
}

function matchAnyTokensAdded() {
  return bp.EventSet("Any Tokens Added", function(e) {
      return e.name.startsWith("Done: Add a new webhook for a token.");
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

function addWebhooks(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
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
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "id": id, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function updateWebhooksIdModelByIdWebhook(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/idModel";
  var description = "updateWebhooksIdModelByIdWebhook() " + idWebhook;
  var body = {
    "id": id,
    "idModel": String(idModel),
    "key": String(key),
    "token": String(token),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "id": id, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function deleteWebhooksByIdWebhook(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "deleteWebhooksByIdWebhook() " + idWebhook;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400] });
}

function getWebhooksByIdWebhook(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "getWebhooksByIdWebhook() " + idWebhook;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400] });
}

function updateWebhooksActiveByIdWebhook(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook + "/active";
  var description = "updateWebhooksActiveByIdWebhook() " + idWebhook;
  var body = {
    "id": id,
    "key": String(key),
    "token": String(token),
    "webhooks_active": String(webhooks_active),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "id": id, "idModel": idModel, "idWebhook": idWebhook, "key": key, "token": token, "webhooks": webhooks, "webhooks_active": webhooks_active}) });
}

function tryToAddExistingWebhooks(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
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

function verifyWebhooksExists(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "Verify Webhooks " + idWebhook + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Webhooks found");
}

function verifyWebhooksDoesNotExist(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "Verify Webhooks " + idWebhook + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Webhooks not found");
}

function tryToDeleteANonExistingWebhooks(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  var url = "/webhooks/" + idWebhook;
  var description = "Verify negative delete for Webhooks";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedWebhooks(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  return bp.EventSet("Delete Webhooks", function(e) {
      return e.name === "Done: " + "deleteWebhooksByIdWebhook()";
  });
}

function waitForWebhooksAdded(description, id, idModel, idWebhook, key, token, webhooks, webhooks_active) {
  waitFor(matchSuccess("addWebhooks()"));
}

function matchAnyWebhooksAdded() {
  return bp.EventSet("Any Webhooks Added", function(e) {
      return e.name.startsWith("Done: addWebhooks()");
  });
}
