// Auto-generated stories for trello
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:BoardsPowerUps:linear:1
bthread("crud:BoardsPowerUps:linear:1", function () {
  let idBoard; // Resolved Dependency
  let key = "key_1110";
  let powerUp = "powerUp_1110";
  let powerUpId = "powerUpId_1110";
  let token = "token_1110";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addBoardsPowerUpsByIdBoard(idBoard, key, powerUp, powerUpId, token);
});

// Story: crud:BoardsPowerUps:linear:2
bthread("crud:BoardsPowerUps:linear:2", function () {
  let idBoard; // Resolved Dependency
  let key = "key_1120";
  let powerUp = "powerUp_1120";
  let powerUpId = "powerUpId_1120";
  let token = "token_1120";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addBoardsPowerUpsByIdBoard(idBoard, key, powerUp, powerUpId, token);
});

// Story: crud:BoardsPowerUps:linear:3
bthread("crud:BoardsPowerUps:linear:3", function () {
  let idBoard; // Resolved Dependency
  let key = "key_1130";
  let powerUp = "powerUp_1130";
  let powerUpId = "powerUpId_1130";
  let token = "token_1130";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addBoardsPowerUpsByIdBoard(idBoard, key, powerUp, powerUpId, token);
});

// Story: crud:Cards:linear:1
bthread("crud:Cards:linear:1", function () {
  let color = "color_1210";
  let field = "field_1210";
  let fields = "fields_1210";
  let idCard = "idCard_1210";
  let key = "key_1210";
  let labels = "labels_1210";
  let token = "token_1210";
  addCardsMarkAssociatedNotificationsReadByIdCard(color, field, fields, idCard, key, labels, token);
});

// Story: crud:Cards:linear:2
bthread("crud:Cards:linear:2", function () {
  let color = "color_1220";
  let field = "field_1220";
  let fields = "fields_1220";
  let idCard = "idCard_1220";
  let key = "key_1220";
  let labels = "labels_1220";
  let token = "token_1220";
  addCardsMarkAssociatedNotificationsReadByIdCard(color, field, fields, idCard, key, labels, token);
});

// Story: crud:Cards:linear:3
bthread("crud:Cards:linear:3", function () {
  let color = "color_1230";
  let field = "field_1230";
  let fields = "fields_1230";
  let idCard = "idCard_1230";
  let key = "key_1230";
  let labels = "labels_1230";
  let token = "token_1230";
  addCardsMarkAssociatedNotificationsReadByIdCard(color, field, fields, idCard, key, labels, token);
});

// Story: crud:CardsActionsComments:linear:1
bthread("crud:CardsActionsComments:linear:1", function () {
  let actions_comments = "actions_comments_1310";
  let cards_actions_comments = "cards_actions_comments_1310";
  let idAction; // Resolved Dependency
  let idCard; // Resolved Dependency
  let key = "key_1310";
  let token = "token_1310";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionsAdded();
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idAction": "idAction", "idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idAction = captured["idAction"];
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(actions_comments, cards_actions_comments, idAction, idCard, key, token);
});

// Story: crud:CardsActionsComments:linear:2
bthread("crud:CardsActionsComments:linear:2", function () {
  let actions_comments = "actions_comments_1320";
  let cards_actions_comments = "cards_actions_comments_1320";
  let idAction; // Resolved Dependency
  let idCard; // Resolved Dependency
  let key = "key_1320";
  let token = "token_1320";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionsAdded();
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idAction": "idAction", "idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idAction = captured["idAction"];
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(actions_comments, cards_actions_comments, idAction, idCard, key, token);
});

// Story: crud:CardsActionsComments:linear:3
bthread("crud:CardsActionsComments:linear:3", function () {
  let actions_comments = "actions_comments_1330";
  let cards_actions_comments = "cards_actions_comments_1330";
  let idAction; // Resolved Dependency
  let idCard; // Resolved Dependency
  let key = "key_1330";
  let token = "token_1330";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionsAdded();
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idAction": "idAction", "idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idAction = captured["idAction"];
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(actions_comments, cards_actions_comments, idAction, idCard, key, token);
});

// Story: crud:CardsAttachments:linear:1
bthread("crud:CardsAttachments:linear:1", function () {
  let fields = "fields_1360";
  let file = "file_1360";
  let filter = "filter_1360";
  let idAttachment = "idAttachment_1360";
  let idCard; // Resolved Dependency
  let key = "key_1360";
  let mimeType = "mimeType_1360";
  let name = "name_1360";
  let token = "token_1360";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(fields, file, filter, idAttachment, idCard, key, mimeType, name, token);
});

// Story: crud:CardsAttachments:linear:2
bthread("crud:CardsAttachments:linear:2", function () {
  let fields = "fields_1370";
  let file = "file_1370";
  let filter = "filter_1370";
  let idAttachment = "idAttachment_1370";
  let idCard; // Resolved Dependency
  let key = "key_1370";
  let mimeType = "mimeType_1370";
  let name = "name_1370";
  let token = "token_1370";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(fields, file, filter, idAttachment, idCard, key, mimeType, name, token);
});

// Story: crud:CardsAttachments:linear:3
bthread("crud:CardsAttachments:linear:3", function () {
  let fields = "fields_1380";
  let file = "file_1380";
  let filter = "filter_1380";
  let idAttachment = "idAttachment_1380";
  let idCard; // Resolved Dependency
  let key = "key_1380";
  let mimeType = "mimeType_1380";
  let name = "name_1380";
  let token = "token_1380";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(fields, file, filter, idAttachment, idCard, key, mimeType, name, token);
});

// Story: crud:CardsChecklistCheckItem:linear:1
bthread("crud:CardsChecklistCheckItem:linear:1", function () {
  let idCard; // Resolved Dependency
  let idCheckItem = "idCheckItem_1510";
  let idChecklist; // Resolved Dependency
  let key = "key_1510";
  let name = "name_1510";
  let token = "token_1510";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idChecklist"] = matchAnyChecklistsAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idChecklist"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, name, token);
});

// Story: crud:CardsChecklistCheckItem:linear:2
bthread("crud:CardsChecklistCheckItem:linear:2", function () {
  let idCard; // Resolved Dependency
  let idCheckItem = "idCheckItem_1520";
  let idChecklist; // Resolved Dependency
  let key = "key_1520";
  let name = "name_1520";
  let token = "token_1520";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idChecklist"] = matchAnyChecklistsAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idChecklist"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, name, token);
});

// Story: crud:CardsChecklistCheckItem:linear:3
bthread("crud:CardsChecklistCheckItem:linear:3", function () {
  let idCard; // Resolved Dependency
  let idCheckItem = "idCheckItem_1530";
  let idChecklist; // Resolved Dependency
  let key = "key_1530";
  let name = "name_1530";
  let token = "token_1530";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idChecklist"] = matchAnyChecklistsAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idChecklist"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, key, name, token);
});

// Story: crud:CardsChecklists:linear:1
bthread("crud:CardsChecklists:linear:1", function () {
  let card_fields = "card_fields_1660";
  let cards = "cards_1660";
  let checkItem_fields = "checkItem_fields_1660";
  let checkItems = "checkItems_1660";
  let fields = "fields_1660";
  let filter = "filter_1660";
  let idCard; // Resolved Dependency
  let idChecklist; // Resolved Dependency
  let key = "key_1660";
  let name = "name_1660";
  let pos = 1660;
  let token = "token_1660";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idChecklist"] = matchAnyChecklistsAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idChecklist"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  addCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, idCard, idChecklist, key, name, pos, token);
});

// Story: crud:CardsChecklists:linear:2
bthread("crud:CardsChecklists:linear:2", function () {
  let card_fields = "card_fields_1670";
  let cards = "cards_1670";
  let checkItem_fields = "checkItem_fields_1670";
  let checkItems = "checkItems_1670";
  let fields = "fields_1670";
  let filter = "filter_1670";
  let idCard; // Resolved Dependency
  let idChecklist; // Resolved Dependency
  let key = "key_1670";
  let name = "name_1670";
  let pos = 1670;
  let token = "token_1670";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idChecklist"] = matchAnyChecklistsAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idChecklist"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  addCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, idCard, idChecklist, key, name, pos, token);
});

// Story: crud:CardsChecklists:linear:3
bthread("crud:CardsChecklists:linear:3", function () {
  let card_fields = "card_fields_1680";
  let cards = "cards_1680";
  let checkItem_fields = "checkItem_fields_1680";
  let checkItems = "checkItems_1680";
  let fields = "fields_1680";
  let filter = "filter_1680";
  let idCard; // Resolved Dependency
  let idChecklist; // Resolved Dependency
  let key = "key_1680";
  let name = "name_1680";
  let pos = 1680;
  let token = "token_1680";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idChecklist"] = matchAnyChecklistsAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idChecklist"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  addCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, idCard, idChecklist, key, name, pos, token);
});

// Story: crud:CardsMembersVoted:linear:1
bthread("crud:CardsMembersVoted:linear:1", function () {
  let fields = "fields_1760";
  let idCard; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_1760";
  let memberId = "memberId_1760";
  let token = "token_1760";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idCard": "idCard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idMember = captured["idMember"];
  addCardsMembersVotedByIdCard(fields, idCard, idMember, key, memberId, token);
});

// Story: crud:CardsMembersVoted:linear:2
bthread("crud:CardsMembersVoted:linear:2", function () {
  let fields = "fields_1770";
  let idCard; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_1770";
  let memberId = "memberId_1770";
  let token = "token_1770";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idCard": "idCard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idMember = captured["idMember"];
  addCardsMembersVotedByIdCard(fields, idCard, idMember, key, memberId, token);
});

// Story: crud:CardsMembersVoted:linear:3
bthread("crud:CardsMembersVoted:linear:3", function () {
  let fields = "fields_1780";
  let idCard; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_1780";
  let memberId = "memberId_1780";
  let token = "token_1780";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idCard": "idCard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idMember = captured["idMember"];
  addCardsMembersVotedByIdCard(fields, idCard, idMember, key, memberId, token);
});

// Story: crud:CardsStickers:linear:1
bthread("crud:CardsStickers:linear:1", function () {
  let cards_stickers = "cards_stickers_1910";
  let fields = "fields_1910";
  let idCard; // Resolved Dependency
  let idSticker = "idSticker_1910";
  let image = "image_1910";
  let key = "key_1910";
  let left = 1910;
  let token = "token_1910";
  let top = 1910;
  let zIndex = 1910;
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsStickersByIdCard(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex);
});

// Story: crud:CardsStickers:linear:2
bthread("crud:CardsStickers:linear:2", function () {
  let cards_stickers = "cards_stickers_1920";
  let fields = "fields_1920";
  let idCard; // Resolved Dependency
  let idSticker = "idSticker_1920";
  let image = "image_1920";
  let key = "key_1920";
  let left = 1920;
  let token = "token_1920";
  let top = 1920;
  let zIndex = 1920;
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsStickersByIdCard(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex);
});

// Story: crud:CardsStickers:linear:3
bthread("crud:CardsStickers:linear:3", function () {
  let cards_stickers = "cards_stickers_1930";
  let fields = "fields_1930";
  let idCard; // Resolved Dependency
  let idSticker = "idSticker_1930";
  let image = "image_1930";
  let key = "key_1930";
  let left = 1930;
  let token = "token_1930";
  let top = 1930;
  let zIndex = 1930;
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsStickersByIdCard(cards_stickers, fields, idCard, idSticker, image, key, left, token, top, zIndex);
});

// Story: crud:Checklists:linear:1
bthread("crud:Checklists:linear:1", function () {
  let actions = "actions_2010";
  let attachment_fields = "attachment_fields_2010";
  let attachments = "attachments_2010";
  let before = "before_2010";
  let checkItemStates = "checkItemStates_2010";
  let checked = "checked_2010";
  let checklists = "checklists_2010";
  let field = "field_2010";
  let fields = "fields_2010";
  let filter = "filter_2010";
  let idCard; // Resolved Dependency
  let idCheckItem = "idCheckItem_2010";
  let idChecklist = "idChecklist_2010";
  let key = "key_2010";
  let limit = "limit_2010";
  let member_fields = "member_fields_2010";
  let members = "members_2010";
  let name = "name_2010";
  let pos = "pos_2010";
  let since = "since_2010";
  let stickers = "stickers_2010";
  let token = "token_2010";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token);
});

// Story: crud:Checklists:linear:2
bthread("crud:Checklists:linear:2", function () {
  let actions = "actions_2020";
  let attachment_fields = "attachment_fields_2020";
  let attachments = "attachments_2020";
  let before = "before_2020";
  let checkItemStates = "checkItemStates_2020";
  let checked = "checked_2020";
  let checklists = "checklists_2020";
  let field = "field_2020";
  let fields = "fields_2020";
  let filter = "filter_2020";
  let idCard; // Resolved Dependency
  let idCheckItem = "idCheckItem_2020";
  let idChecklist = "idChecklist_2020";
  let key = "key_2020";
  let limit = "limit_2020";
  let member_fields = "member_fields_2020";
  let members = "members_2020";
  let name = "name_2020";
  let pos = "pos_2020";
  let since = "since_2020";
  let stickers = "stickers_2020";
  let token = "token_2020";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token);
});

// Story: crud:Checklists:linear:3
bthread("crud:Checklists:linear:3", function () {
  let actions = "actions_2030";
  let attachment_fields = "attachment_fields_2030";
  let attachments = "attachments_2030";
  let before = "before_2030";
  let checkItemStates = "checkItemStates_2030";
  let checked = "checked_2030";
  let checklists = "checklists_2030";
  let field = "field_2030";
  let fields = "fields_2030";
  let filter = "filter_2030";
  let idCard; // Resolved Dependency
  let idCheckItem = "idCheckItem_2030";
  let idChecklist = "idChecklist_2030";
  let key = "key_2030";
  let limit = "limit_2030";
  let member_fields = "member_fields_2030";
  let members = "members_2030";
  let name = "name_2030";
  let pos = "pos_2030";
  let since = "since_2030";
  let stickers = "stickers_2030";
  let token = "token_2030";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers, token);
});

// Story: crud:Labels:linear:1
bthread("crud:Labels:linear:1", function () {
  let color = "color_2060";
  let fields = "fields_2060";
  let idBoard; // Resolved Dependency
  let idLabel = "idLabel_2060";
  let key = "key_2060";
  let name = "name_2060";
  let token = "token_2060";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addLabels(color, fields, idBoard, idLabel, key, name, token);
});

// Story: crud:Labels:linear:2
bthread("crud:Labels:linear:2", function () {
  let color = "color_2070";
  let fields = "fields_2070";
  let idBoard; // Resolved Dependency
  let idLabel = "idLabel_2070";
  let key = "key_2070";
  let name = "name_2070";
  let token = "token_2070";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addLabels(color, fields, idBoard, idLabel, key, name, token);
});

// Story: crud:Labels:linear:3
bthread("crud:Labels:linear:3", function () {
  let color = "color_2080";
  let fields = "fields_2080";
  let idBoard; // Resolved Dependency
  let idLabel = "idLabel_2080";
  let key = "key_2080";
  let name = "name_2080";
  let token = "token_2080";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addLabels(color, fields, idBoard, idLabel, key, name, token);
});

// Story: crud:MembersBoardBackgrounds:linear:1
bthread("crud:MembersBoardBackgrounds:linear:1", function () {
  let fields = "fields_2410";
  let filter = "filter_2410";
  let idBoardBackground; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2410";
  let token = "token_2410";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMembersBoardBackgroundsByIdMember(fields, filter, idBoardBackground, idMember, key, token);
});

// Story: crud:MembersBoardBackgrounds:linear:2
bthread("crud:MembersBoardBackgrounds:linear:2", function () {
  let fields = "fields_2420";
  let filter = "filter_2420";
  let idBoardBackground; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2420";
  let token = "token_2420";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMembersBoardBackgroundsByIdMember(fields, filter, idBoardBackground, idMember, key, token);
});

// Story: crud:MembersBoardBackgrounds:linear:3
bthread("crud:MembersBoardBackgrounds:linear:3", function () {
  let fields = "fields_2430";
  let filter = "filter_2430";
  let idBoardBackground; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2430";
  let token = "token_2430";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMembersBoardBackgroundsByIdMember(fields, filter, idBoardBackground, idMember, key, token);
});

// Story: crud:MembersBoardStars:linear:1
bthread("crud:MembersBoardStars:linear:1", function () {
  let idBoard; // Resolved Dependency
  let idBoardStar; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2460";
  let token = "token_2460";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  deps["idBoardStar"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoard": "idBoard", "idBoardStar": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idBoardStar = captured["idBoardStar"];
  idMember = captured["idMember"];
  addMembersBoardStarsByIdMember(idBoard, idBoardStar, idMember, key, token);
});

// Story: crud:MembersBoardStars:linear:2
bthread("crud:MembersBoardStars:linear:2", function () {
  let idBoard; // Resolved Dependency
  let idBoardStar; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2470";
  let token = "token_2470";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  deps["idBoardStar"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoard": "idBoard", "idBoardStar": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idBoardStar = captured["idBoardStar"];
  idMember = captured["idMember"];
  addMembersBoardStarsByIdMember(idBoard, idBoardStar, idMember, key, token);
});

// Story: crud:MembersBoardStars:linear:3
bthread("crud:MembersBoardStars:linear:3", function () {
  let idBoard; // Resolved Dependency
  let idBoardStar; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2480";
  let token = "token_2480";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  deps["idBoardStar"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoard": "idBoard", "idBoardStar": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idBoardStar = captured["idBoardStar"];
  idMember = captured["idMember"];
  addMembersBoardStarsByIdMember(idBoard, idBoardStar, idMember, key, token);
});

// Story: crud:MembersCustomBoardBackgrounds:linear:1
bthread("crud:MembersCustomBoardBackgrounds:linear:1", function () {
  let customBoardBackgrounds = "customBoardBackgrounds_2710";
  let fields = "fields_2710";
  let filter = "filter_2710";
  let idBoardBackground; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2710";
  let token = "token_2710";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token);
});

// Story: crud:MembersCustomBoardBackgrounds:linear:2
bthread("crud:MembersCustomBoardBackgrounds:linear:2", function () {
  let customBoardBackgrounds = "customBoardBackgrounds_2720";
  let fields = "fields_2720";
  let filter = "filter_2720";
  let idBoardBackground; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2720";
  let token = "token_2720";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token);
});

// Story: crud:MembersCustomBoardBackgrounds:linear:3
bthread("crud:MembersCustomBoardBackgrounds:linear:3", function () {
  let customBoardBackgrounds = "customBoardBackgrounds_2730";
  let fields = "fields_2730";
  let filter = "filter_2730";
  let idBoardBackground; // Resolved Dependency
  let idMember; // Resolved Dependency
  let key = "key_2730";
  let token = "token_2730";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardsAdded();
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, idBoardBackground, idMember, key, token);
});

// Story: crud:MembersCustomStickers:linear:1
bthread("crud:MembersCustomStickers:linear:1", function () {
  let fields = "fields_2810";
  let filter = "filter_2810";
  let idCustomSticker = "idCustomSticker_2810";
  let idMember; // Resolved Dependency
  let key = "key_2810";
  let name = "name_2810";
  let token = "token_2810";
  let url = "url_2810";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(fields, filter, idCustomSticker, idMember, key, name, token, url);
});

// Story: crud:MembersCustomStickers:linear:2
bthread("crud:MembersCustomStickers:linear:2", function () {
  let fields = "fields_2820";
  let filter = "filter_2820";
  let idCustomSticker = "idCustomSticker_2820";
  let idMember; // Resolved Dependency
  let key = "key_2820";
  let name = "name_2820";
  let token = "token_2820";
  let url = "url_2820";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(fields, filter, idCustomSticker, idMember, key, name, token, url);
});

// Story: crud:MembersCustomStickers:linear:3
bthread("crud:MembersCustomStickers:linear:3", function () {
  let fields = "fields_2830";
  let filter = "filter_2830";
  let idCustomSticker = "idCustomSticker_2830";
  let idMember; // Resolved Dependency
  let key = "key_2830";
  let name = "name_2830";
  let token = "token_2830";
  let url = "url_2830";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(fields, filter, idCustomSticker, idMember, key, name, token, url);
});

// Story: crud:MembersSavedSearches:linear:1
bthread("crud:MembersSavedSearches:linear:1", function () {
  let idMember; // Resolved Dependency
  let idSavedSearch; // Resolved Dependency
  let key = "key_3160";
  let members_savedSearches = "members_savedSearches_3160";
  let token = "token_3160";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  deps["idSavedSearch"] = matchAnySearchAdded();
  let pkMap = {"idMember": "idMember", "idSavedSearch": "id"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  idSavedSearch = captured["idSavedSearch"];
  addMembersSavedSearchesByIdMember(idMember, idSavedSearch, key, members_savedSearches, token);
});

// Story: crud:MembersSavedSearches:linear:2
bthread("crud:MembersSavedSearches:linear:2", function () {
  let idMember; // Resolved Dependency
  let idSavedSearch; // Resolved Dependency
  let key = "key_3170";
  let members_savedSearches = "members_savedSearches_3170";
  let token = "token_3170";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  deps["idSavedSearch"] = matchAnySearchAdded();
  let pkMap = {"idMember": "idMember", "idSavedSearch": "id"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  idSavedSearch = captured["idSavedSearch"];
  addMembersSavedSearchesByIdMember(idMember, idSavedSearch, key, members_savedSearches, token);
});

// Story: crud:MembersSavedSearches:linear:3
bthread("crud:MembersSavedSearches:linear:3", function () {
  let idMember; // Resolved Dependency
  let idSavedSearch; // Resolved Dependency
  let key = "key_3180";
  let members_savedSearches = "members_savedSearches_3180";
  let token = "token_3180";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  deps["idSavedSearch"] = matchAnySearchAdded();
  let pkMap = {"idMember": "idMember", "idSavedSearch": "id"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  idSavedSearch = captured["idSavedSearch"];
  addMembersSavedSearchesByIdMember(idMember, idSavedSearch, key, members_savedSearches, token);
});

// Story: crud:Organizations:linear:1
bthread("crud:Organizations:linear:1", function () {
  let activity = "activity_3310";
  let field = "field_3310";
  let fields = "fields_3310";
  let filter = "filter_3310";
  let idOrg = "idOrg_3310";
  let key = "key_3310";
  let logo = "logo_3310";
  let token = "token_3310";
  let value = "value_3310";
  let website = "website_3310";
  addOrganizationsLogoByIdOrg(activity, field, fields, filter, idOrg, key, logo, token, value, website);
});

// Story: crud:Organizations:linear:2
bthread("crud:Organizations:linear:2", function () {
  let activity = "activity_3320";
  let field = "field_3320";
  let fields = "fields_3320";
  let filter = "filter_3320";
  let idOrg = "idOrg_3320";
  let key = "key_3320";
  let logo = "logo_3320";
  let token = "token_3320";
  let value = "value_3320";
  let website = "website_3320";
  addOrganizationsLogoByIdOrg(activity, field, fields, filter, idOrg, key, logo, token, value, website);
});

// Story: crud:Organizations:linear:3
bthread("crud:Organizations:linear:3", function () {
  let activity = "activity_3330";
  let field = "field_3330";
  let fields = "fields_3330";
  let filter = "filter_3330";
  let idOrg = "idOrg_3330";
  let key = "key_3330";
  let logo = "logo_3330";
  let token = "token_3330";
  let value = "value_3330";
  let website = "website_3330";
  addOrganizationsLogoByIdOrg(activity, field, fields, filter, idOrg, key, logo, token, value, website);
});

// Story: crud:TokensWebhooks:linear:1
bthread("crud:TokensWebhooks:linear:1", function () {
  let callbackURL = "callbackURL_3860";
  let description = "description_3860";
  let idModel = "idModel_3860";
  let idWebhook; // Resolved Dependency
  let key = "key_3860";
  let token = "token_3860";
  // Dependency Barrier
  let deps = {};
  deps["idWebhook"] = matchAnyWebhooksAdded();
  let pkMap = {"idWebhook": "idWebhook"};
  let captured = resolveDependencies(deps, pkMap);
  idWebhook = captured["idWebhook"];
  addTokensWebhooksByToken(callbackURL, description, idModel, idWebhook, key, token);
});

// Story: crud:TokensWebhooks:linear:2
bthread("crud:TokensWebhooks:linear:2", function () {
  let callbackURL = "callbackURL_3870";
  let description = "description_3870";
  let idModel = "idModel_3870";
  let idWebhook; // Resolved Dependency
  let key = "key_3870";
  let token = "token_3870";
  // Dependency Barrier
  let deps = {};
  deps["idWebhook"] = matchAnyWebhooksAdded();
  let pkMap = {"idWebhook": "idWebhook"};
  let captured = resolveDependencies(deps, pkMap);
  idWebhook = captured["idWebhook"];
  addTokensWebhooksByToken(callbackURL, description, idModel, idWebhook, key, token);
});

// Story: crud:TokensWebhooks:linear:3
bthread("crud:TokensWebhooks:linear:3", function () {
  let callbackURL = "callbackURL_3880";
  let description = "description_3880";
  let idModel = "idModel_3880";
  let idWebhook; // Resolved Dependency
  let key = "key_3880";
  let token = "token_3880";
  // Dependency Barrier
  let deps = {};
  deps["idWebhook"] = matchAnyWebhooksAdded();
  let pkMap = {"idWebhook": "idWebhook"};
  let captured = resolveDependencies(deps, pkMap);
  idWebhook = captured["idWebhook"];
  addTokensWebhooksByToken(callbackURL, description, idModel, idWebhook, key, token);
});

// Story: crud:Webhooks:linear:1
bthread("crud:Webhooks:linear:1", function () {
  let field = "field_3960";
  let idModel = "idModel_3960";
  let idWebhook = "idWebhook_3960";
  let key = "key_3960";
  let token = "token_3960";
  let webhooks = "webhooks_3960";
  let webhooks_active = "webhooks_active_3960";
  addWebhooks(field, idModel, idWebhook, key, token, webhooks, webhooks_active);
});

// Story: crud:Webhooks:linear:2
bthread("crud:Webhooks:linear:2", function () {
  let field = "field_3970";
  let idModel = "idModel_3970";
  let idWebhook = "idWebhook_3970";
  let key = "key_3970";
  let token = "token_3970";
  let webhooks = "webhooks_3970";
  let webhooks_active = "webhooks_active_3970";
  addWebhooks(field, idModel, idWebhook, key, token, webhooks, webhooks_active);
});

// Story: crud:Webhooks:linear:3
bthread("crud:Webhooks:linear:3", function () {
  let field = "field_3980";
  let idModel = "idModel_3980";
  let idWebhook = "idWebhook_3980";
  let key = "key_3980";
  let token = "token_3980";
  let webhooks = "webhooks_3980";
  let webhooks_active = "webhooks_active_3980";
  addWebhooks(field, idModel, idWebhook, key, token, webhooks, webhooks_active);
});
