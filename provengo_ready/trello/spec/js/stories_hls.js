// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        // 1. Try basic capture
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        // 2. Try using pkMap if available
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        // 3. Try fallback scan for any ID-like field
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

// Story: crud:Board:read_only
bthread("crud:Board:read_only", function () {
  let closed = "closed_200";
  let desc = "desc_200";
  let idBoard = 200;
  let idBoardSource = "idBoardSource_200";
  let keepFromSource = "keepFromSource_200";
  let labelNames/blue = "labelNames/blue_200";
  let labelNames/green = "labelNames/green_200";
  let labelNames/orange = "labelNames/orange_200";
  let labelNames/purple = "labelNames/purple_200";
  let labelNames/red = "labelNames/red_200";
  let labelNames/yellow = "labelNames/yellow_200";
  let name = "name_200";
  let powerUps = "powerUps_200";
  let prefs/background = "prefs/background_200";
  let prefs/calendarFeedEnabled = "prefs/calendarFeedEnabled_200";
  let prefs/cardAging = "prefs/cardAging_200";
  let prefs/cardCovers = "prefs/cardCovers_200";
  let prefs/comments = "prefs/comments_200";
  let prefs/invitations = "prefs/invitations_200";
  let prefs/permissionLevel = "prefs/permissionLevel_200";
  let prefs/selfJoin = "prefs/selfJoin_200";
  let prefs/voting = "prefs/voting_200";
  let prefs_background = "prefs_background_200";
  let prefs_cardAging = "prefs_cardAging_200";
  let prefs_cardCovers = "prefs_cardCovers_200";
  let prefs_comments = "prefs_comments_200";
  let prefs_invitations = "prefs_invitations_200";
  let prefs_permissionLevel = "prefs_permissionLevel_200";
  let prefs_selfJoin = "prefs_selfJoin_200";
  let prefs_voting = "prefs_voting_200";
  let subscribed = "subscribed_200";
  verifyBoardExists(closed, desc, idBoard, idBoardSource, idOrganization, keepFromSource, labelNames/blue, labelNames/green, labelNames/orange, labelNames/purple, labelNames/red, labelNames/yellow, name, powerUps, prefs/background, prefs/calendarFeedEnabled, prefs/cardAging, prefs/cardCovers, prefs/comments, prefs/invitations, prefs/permissionLevel, prefs/selfJoin, prefs/voting, prefs_background, prefs_cardAging, prefs_cardCovers, prefs_comments, prefs_invitations, prefs_permissionLevel, prefs_selfJoin, prefs_voting, subscribed);
});

// Story: crud:BoardActions:read_only
bthread("crud:BoardActions:read_only", function () {

  verifyBoardActionsExists(idBoard);
});

// Story: crud:BoardStar:read_only
bthread("crud:BoardStar:read_only", function () {

  verifyBoardStarExists(idBoard);
});

// Story: crud:Card:nondet:1:1
bthread("crud:Card:nondet:1:1", function () {
  let closed = "closed_240";
  let desc = "desc_240";
  let due = "due_240";
  let fileSource = "fileSource_240";
  let idAttachmentCover = "idAttachmentCover_240";
  let idCard = 240;
  let keepFromSource = "keepFromSource_240";
  let key = "key_240";
  let labels = "labels_240";
  let name = "name_240";
  let pos = "pos_240";
  let subscribed = "subscribed_240";
  let token = "token_240";
  let urlSource = "urlSource_240";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idCardSource"] = matchAnyCardsAdded();
  deps["idLabels"] = matchAnyLabelAdded();
  deps["idList"] = matchAnyListAdded();
  deps["idMembers"] = matchAnyMemberAdded();
  let pkMap = {"idBoard": "idBoard", "idCardSource": "idBoard", "idLabels": "idLabel", "idList": "idList", "idMembers": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idCardSource = captured["idCardSource"];
  idLabels = captured["idLabels"];
  idList = captured["idList"];
  idMembers = captured["idMembers"];
  addCards(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  // waitForCardAdded(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  tryToAddExistingCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  verifyCardExists(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  updateCardsByIdCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  deleteCardsByIdCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  tryToDeleteANonExistingCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  verifyCardDoesNotExist(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
});

// Story: crud:Card:nondet:1:2
bthread("crud:Card:nondet:1:2", function () {
  let closed = "closed_241";
  let desc = "desc_241";
  let due = "due_241";
  let fileSource = "fileSource_241";
  let idAttachmentCover = "idAttachmentCover_241";
  let idCard = 241;
  let keepFromSource = "keepFromSource_241";
  let key = "key_241";
  let labels = "labels_241";
  let name = "name_241";
  let pos = "pos_241";
  let subscribed = "subscribed_241";
  let token = "token_241";
  let urlSource = "urlSource_241";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idCardSource"] = matchAnyCardsAdded();
  deps["idLabels"] = matchAnyLabelAdded();
  deps["idList"] = matchAnyListAdded();
  deps["idMembers"] = matchAnyMemberAdded();
  let pkMap = {"idBoard": "idBoard", "idCardSource": "idBoard", "idLabels": "idLabel", "idList": "idList", "idMembers": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idCardSource = captured["idCardSource"];
  idLabels = captured["idLabels"];
  idList = captured["idList"];
  idMembers = captured["idMembers"];
  addCards(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  // waitForCardAdded(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  tryToAddExistingCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  updateCardsByIdCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  verifyCardExists(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  deleteCardsByIdCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  tryToDeleteANonExistingCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  verifyCardDoesNotExist(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
});

// Story: crud:Card:nondet:negative:dup-add
bthread("crud:Card:nondet:negative:dup-add", function () {
  let closed = "closed_246";
  let desc = "desc_246";
  let due = "due_246";
  let fileSource = "fileSource_246";
  let idAttachmentCover = "idAttachmentCover_246";
  let idCard = 246;
  let keepFromSource = "keepFromSource_246";
  let key = "key_246";
  let labels = "labels_246";
  let name = "name_246";
  let pos = "pos_246";
  let subscribed = "subscribed_246";
  let token = "token_246";
  let urlSource = "urlSource_246";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idCardSource"] = matchAnyCardsAdded();
  deps["idLabels"] = matchAnyLabelAdded();
  deps["idList"] = matchAnyListAdded();
  deps["idMembers"] = matchAnyMemberAdded();
  let pkMap = {"idBoard": "idBoard", "idCardSource": "idBoard", "idLabels": "idLabel", "idList": "idList", "idMembers": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idCardSource = captured["idCardSource"];
  idLabels = captured["idLabels"];
  idList = captured["idList"];
  idMembers = captured["idMembers"];
  addCards(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  // waitForCardAdded(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  verifyCardExists(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  tryToAddExistingCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  verifyCardExists(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
});

// Story: crud:Cards:read_only
bthread("crud:Cards:read_only", function () {

  verifyCardsExists(idBoard);
});

// Story: crud:CardsByFilter:read_only
bthread("crud:CardsByFilter:read_only", function () {
  let filter = "filter_260";
  verifyCardsByFilterExists(filter, idBoard);
});

// Story: crud:Checklist:nondet:1:1
bthread("crud:Checklist:nondet:1:1", function () {
  let field = "field_270";
  let key = "key_270";
  let name = "name_270";
  let pos = "pos_270";
  let token = "token_270";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistSource"] = matchAnyListAdded();
  let pkMap = {"idBoard": "idBoard", "idCard": "idCard", "idChecklist": "idList", "idChecklistSource": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklistSource = captured["idChecklistSource"];
  addChecklists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  // waitForChecklistAdded(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  tryToAddExistingChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  verifyChecklistExists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  updateChecklistsPosByIdChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  deleteChecklistsByIdChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  tryToDeleteANonExistingChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  verifyChecklistDoesNotExist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
});

// Story: crud:Checklist:nondet:1:2
bthread("crud:Checklist:nondet:1:2", function () {
  let field = "field_271";
  let key = "key_271";
  let name = "name_271";
  let pos = "pos_271";
  let token = "token_271";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistSource"] = matchAnyListAdded();
  let pkMap = {"idBoard": "idBoard", "idCard": "idCard", "idChecklist": "idList", "idChecklistSource": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklistSource = captured["idChecklistSource"];
  addChecklists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  // waitForChecklistAdded(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  tryToAddExistingChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  updateChecklistsPosByIdChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  verifyChecklistExists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  deleteChecklistsByIdChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  tryToDeleteANonExistingChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  verifyChecklistDoesNotExist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
});

// Story: crud:Checklist:nondet:negative:dup-add
bthread("crud:Checklist:nondet:negative:dup-add", function () {
  let field = "field_276";
  let key = "key_276";
  let name = "name_276";
  let pos = "pos_276";
  let token = "token_276";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistSource"] = matchAnyListAdded();
  let pkMap = {"idBoard": "idBoard", "idCard": "idCard", "idChecklist": "idList", "idChecklistSource": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklistSource = captured["idChecklistSource"];
  addChecklists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  // waitForChecklistAdded(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  verifyChecklistExists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  tryToAddExistingChecklist(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
  verifyChecklistExists(field, idBoard, idCard, idChecklist, idChecklistSource, key, name, pos, token);
});

// Story: crud:BoardDeltas:read_only
bthread("crud:BoardDeltas:read_only", function () {
  let ixLastUpdate = "ixLastUpdate_280";
  let key = "key_280";
  let tags = "tags_280";
  let token = "token_280";
  verifyBoardDeltasExists(idBoard, ixLastUpdate, key, tags, token);
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let color = "color_380";
  let fields = "fields_380";
  let idLabel = 380;
  let key = "key_380";
  let name = "name_380";
  let token = "token_380";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addLabels(color, fields, idBoard, idLabel, key, name, token);
  // waitForLabelAdded(color, fields, idBoard, idLabel, key, name, token);
  tryToAddExistingLabel(color, fields, idBoard, idLabel, key, name, token);
  verifyLabelExists(color, fields, idBoard, idLabel, key, name, token);
  updateLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token);
  deleteLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token);
  tryToDeleteANonExistingLabel(color, fields, idBoard, idLabel, key, name, token);
  verifyLabelDoesNotExist(color, fields, idBoard, idLabel, key, name, token);
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let color = "color_381";
  let fields = "fields_381";
  let idLabel = 381;
  let key = "key_381";
  let name = "name_381";
  let token = "token_381";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addLabels(color, fields, idBoard, idLabel, key, name, token);
  // waitForLabelAdded(color, fields, idBoard, idLabel, key, name, token);
  tryToAddExistingLabel(color, fields, idBoard, idLabel, key, name, token);
  updateLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token);
  verifyLabelExists(color, fields, idBoard, idLabel, key, name, token);
  deleteLabelsByIdLabel(color, fields, idBoard, idLabel, key, name, token);
  tryToDeleteANonExistingLabel(color, fields, idBoard, idLabel, key, name, token);
  verifyLabelDoesNotExist(color, fields, idBoard, idLabel, key, name, token);
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let color = "color_386";
  let fields = "fields_386";
  let idLabel = 386;
  let key = "key_386";
  let name = "name_386";
  let token = "token_386";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addLabels(color, fields, idBoard, idLabel, key, name, token);
  // waitForLabelAdded(color, fields, idBoard, idLabel, key, name, token);
  verifyLabelExists(color, fields, idBoard, idLabel, key, name, token);
  tryToAddExistingLabel(color, fields, idBoard, idLabel, key, name, token);
  verifyLabelExists(color, fields, idBoard, idLabel, key, name, token);
});

// Story: crud:List:read_only
bthread("crud:List:read_only", function () {
  let closed = "closed_390";
  let field = "field_390";
  let filter = "filter_390";
  let idList = 390;
  let idListSource = "idListSource_390";
  let name = "name_390";
  let pos = "pos_390";
  let subscribed = "subscribed_390";
  verifyListExists(closed, field, filter, idBoard, idList, idListSource, name, pos, subscribed);
});

// Story: crud:Member:read_only
bthread("crud:Member:read_only", function () {
  let filter = "filter_400";
  let idMember = 400;
  let key = "key_400";
  let token = "token_400";
  verifyMemberExists(filter, idBoard, idMember, key, token);
});

// Story: crud:MembersInvited:read_only
bthread("crud:MembersInvited:read_only", function () {

  verifyMembersInvitedExists(idBoard);
});

// Story: crud:BoardsMembersInvited:read_only
bthread("crud:BoardsMembersInvited:read_only", function () {
  let field = "field_430";
  verifyBoardsMembersInvitedExists(field, idBoard);
});

// Story: crud:BoardsMemberships:read_only
bthread("crud:BoardsMemberships:read_only", function () {

  verifyBoardsMembershipsExists(idBoard, idMembership);
});

// Story: crud:BoardsMembershipsCollection:read_only
bthread("crud:BoardsMembershipsCollection:read_only", function () {

  verifyBoardsMembershipsCollectionExists(idBoard);
});

// Story: crud:BoardsMyPrefs:read_only
bthread("crud:BoardsMyPrefs:read_only", function () {

  verifyBoardsMyPrefsExists(idBoard);
});

// Story: crud:BoardOrganization:read_only
bthread("crud:BoardOrganization:read_only", function () {
  let field = "field_550";
  let fields = "fields_550";
  verifyBoardOrganizationExists(field, fields, idBoard);
});

// Story: crud:BoardPowerUps:nondet:1:1
bthread("crud:BoardPowerUps:nondet:1:1", function () {
  let powerUp = "powerUp_560";
  let value = "value_560";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addBoardsPowerUpsByIdBoard(idBoard, powerUp, value);
  // waitForBoardPowerUpsAdded(idBoard, powerUp, value);
  tryToAddExistingBoardPowerUps(idBoard, powerUp, value);
  verifyBoardPowerUpsExists(idBoard, powerUp, value);
  deleteBoardsPowerUpsByIdBoardByPowerUp(idBoard, powerUp, value);
  tryToDeleteANonExistingBoardPowerUps(idBoard, powerUp, value);
  verifyBoardPowerUpsDoesNotExist(idBoard, powerUp, value);
});

// Story: crud:BoardPowerUps:nondet:1:2
bthread("crud:BoardPowerUps:nondet:1:2", function () {
  let powerUp = "powerUp_561";
  let value = "value_561";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addBoardsPowerUpsByIdBoard(idBoard, powerUp, value);
  // waitForBoardPowerUpsAdded(idBoard, powerUp, value);
  tryToAddExistingBoardPowerUps(idBoard, powerUp, value);
  verifyBoardPowerUpsExists(idBoard, powerUp, value);
  deleteBoardsPowerUpsByIdBoardByPowerUp(idBoard, powerUp, value);
  tryToDeleteANonExistingBoardPowerUps(idBoard, powerUp, value);
  verifyBoardPowerUpsDoesNotExist(idBoard, powerUp, value);
});

// Story: crud:BoardPowerUps:nondet:negative:dup-add
bthread("crud:BoardPowerUps:nondet:negative:dup-add", function () {
  let powerUp = "powerUp_566";
  let value = "value_566";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  addBoardsPowerUpsByIdBoard(idBoard, powerUp, value);
  // waitForBoardPowerUpsAdded(idBoard, powerUp, value);
  verifyBoardPowerUpsExists(idBoard, powerUp, value);
  tryToAddExistingBoardPowerUps(idBoard, powerUp, value);
  verifyBoardPowerUpsExists(idBoard, powerUp, value);
});

// Story: crud:BoardField:read_only
bthread("crud:BoardField:read_only", function () {
  let field = "field_670";
  let key = "key_670";
  let token = "token_670";
  verifyBoardFieldExists(field, idBoard, key, token);
});

// Story: crud:MemberActions:read_only
bthread("crud:MemberActions:read_only", function () {
  let key = "key_680";
  let token = "token_680";
  verifyMemberActionsExists(idMember, key, token);
});

// Story: crud:MemberBoardBackground:nondet:1:1
bthread("crud:MemberBoardBackground:nondet:1:1", function () {
  let brightness = "brightness_720";
  let file = "file_720";
  let key = "key_720";
  let tile = "tile_720";
  let token = "token_720";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMemberBoardBackgroundByIdMember(brightness, file, idBoardBackground, idMember, key, tile, token);
  // waitForMemberBoardBackgroundAdded(brightness, file, idBoardBackground, idMember, key, tile, token);
  tryToAddExistingMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  verifyMemberBoardBackgroundExists(brightness, file, idBoardBackground, idMember, key, tile, token);
  updateMemberBoardBackgroundByIdMemberByIdBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  deleteMemberBoardBackgroundByIdMemberByIdBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  tryToDeleteANonExistingMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  verifyMemberBoardBackgroundDoesNotExist(brightness, file, idBoardBackground, idMember, key, tile, token);
});

// Story: crud:MemberBoardBackground:nondet:1:2
bthread("crud:MemberBoardBackground:nondet:1:2", function () {
  let brightness = "brightness_721";
  let file = "file_721";
  let key = "key_721";
  let tile = "tile_721";
  let token = "token_721";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMemberBoardBackgroundByIdMember(brightness, file, idBoardBackground, idMember, key, tile, token);
  // waitForMemberBoardBackgroundAdded(brightness, file, idBoardBackground, idMember, key, tile, token);
  tryToAddExistingMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  updateMemberBoardBackgroundByIdMemberByIdBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  verifyMemberBoardBackgroundExists(brightness, file, idBoardBackground, idMember, key, tile, token);
  deleteMemberBoardBackgroundByIdMemberByIdBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  tryToDeleteANonExistingMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  verifyMemberBoardBackgroundDoesNotExist(brightness, file, idBoardBackground, idMember, key, tile, token);
});

// Story: crud:MemberBoardBackground:nondet:negative:dup-add
bthread("crud:MemberBoardBackground:nondet:negative:dup-add", function () {
  let brightness = "brightness_726";
  let file = "file_726";
  let key = "key_726";
  let tile = "tile_726";
  let token = "token_726";
  // Dependency Barrier
  let deps = {};
  deps["idBoardBackground"] = matchAnyBoardAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idBoardBackground": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoardBackground = captured["idBoardBackground"];
  idMember = captured["idMember"];
  addMemberBoardBackgroundByIdMember(brightness, file, idBoardBackground, idMember, key, tile, token);
  // waitForMemberBoardBackgroundAdded(brightness, file, idBoardBackground, idMember, key, tile, token);
  verifyMemberBoardBackgroundExists(brightness, file, idBoardBackground, idMember, key, tile, token);
  tryToAddExistingMemberBoardBackground(brightness, file, idBoardBackground, idMember, key, tile, token);
  verifyMemberBoardBackgroundExists(brightness, file, idBoardBackground, idMember, key, tile, token);
});

// Story: crud:MemberBoardStar:nondet:1:1
bthread("crud:MemberBoardStar:nondet:1:1", function () {
  let key = "key_730";
  let pos = "pos_730";
  let token = "token_730";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idBoardStar"] = matchAnyBoardAdded();
  deps["idBoardStar"] = matchAnyBoardStarAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idBoard": "idBoard", "idBoardStar": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idBoardStar = captured["idBoardStar"];
  idBoardStar = captured["idBoardStar"];
  idMember = captured["idMember"];
  addMemberBoardStarByIdMember(idBoard, idBoardStar, idMember, key, pos, token);
  // waitForMemberBoardStarAdded(idBoard, idBoardStar, idMember, key, pos, token);
  tryToAddExistingMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  verifyMemberBoardStarExists(idBoard, idBoardStar, idMember, key, pos, token);
  updateMemberBoardStarByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  deleteMemberBoardStarByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  tryToDeleteANonExistingMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  verifyMemberBoardStarDoesNotExist(idBoard, idBoardStar, idMember, key, pos, token);
});

// Story: crud:MemberBoardStar:nondet:1:2
bthread("crud:MemberBoardStar:nondet:1:2", function () {
  let key = "key_731";
  let pos = "pos_731";
  let token = "token_731";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idBoardStar"] = matchAnyBoardAdded();
  deps["idBoardStar"] = matchAnyBoardStarAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idBoard": "idBoard", "idBoardStar": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idBoardStar = captured["idBoardStar"];
  idBoardStar = captured["idBoardStar"];
  idMember = captured["idMember"];
  addMemberBoardStarByIdMember(idBoard, idBoardStar, idMember, key, pos, token);
  // waitForMemberBoardStarAdded(idBoard, idBoardStar, idMember, key, pos, token);
  tryToAddExistingMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  updateMemberBoardStarByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  verifyMemberBoardStarExists(idBoard, idBoardStar, idMember, key, pos, token);
  deleteMemberBoardStarByIdMemberByIdBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  tryToDeleteANonExistingMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  verifyMemberBoardStarDoesNotExist(idBoard, idBoardStar, idMember, key, pos, token);
});

// Story: crud:MemberBoardStar:nondet:negative:dup-add
bthread("crud:MemberBoardStar:nondet:negative:dup-add", function () {
  let key = "key_736";
  let pos = "pos_736";
  let token = "token_736";
  // Dependency Barrier
  let deps = {};
  deps["idBoard"] = matchAnyBoardAdded();
  deps["idBoardStar"] = matchAnyBoardAdded();
  deps["idBoardStar"] = matchAnyBoardStarAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idBoard": "idBoard", "idBoardStar": "idBoard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idBoard = captured["idBoard"];
  idBoardStar = captured["idBoardStar"];
  idBoardStar = captured["idBoardStar"];
  idMember = captured["idMember"];
  addMemberBoardStarByIdMember(idBoard, idBoardStar, idMember, key, pos, token);
  // waitForMemberBoardStarAdded(idBoard, idBoardStar, idMember, key, pos, token);
  verifyMemberBoardStarExists(idBoard, idBoardStar, idMember, key, pos, token);
  tryToAddExistingMemberBoardStar(idBoard, idBoardStar, idMember, key, pos, token);
  verifyMemberBoardStarExists(idBoard, idBoardStar, idMember, key, pos, token);
});

// Story: crud:MembersBoards:read_only
bthread("crud:MembersBoards:read_only", function () {

  verifyMembersBoardsExists(idMember);
});

// Story: crud:MembersBoardsByFilter:read_only
bthread("crud:MembersBoardsByFilter:read_only", function () {
  let filter = "filter_770";
  verifyMembersBoardsByFilterExists(filter, idMember);
});

// Story: crud:MembersBoardsInvited:read_only
bthread("crud:MembersBoardsInvited:read_only", function () {

  verifyMembersBoardsInvitedExists(idMember);
});

// Story: crud:MembersBoardsInvitedByField:read_only
bthread("crud:MembersBoardsInvitedByField:read_only", function () {
  let field = "field_790";
  verifyMembersBoardsInvitedByFieldExists(field, idMember);
});

// Story: crud:MembersCards:read_only
bthread("crud:MembersCards:read_only", function () {

  verifyMembersCardsExists(idMember);
});

// Story: crud:MembersCardsByFilter:read_only
bthread("crud:MembersCardsByFilter:read_only", function () {
  let filter = "filter_810";
  verifyMembersCardsByFilterExists(filter, idMember);
});

// Story: crud:MembersCustomBoardBackgrounds:read_only
bthread("crud:MembersCustomBoardBackgrounds:read_only", function () {
  let brightness = "brightness_820";
  let file = "file_820";
  let tile = "tile_820";
  verifyMembersCustomBoardBackgroundsExists(brightness, file, idMember, tile);
});

// Story: crud:MembersCustomBoardBackgroundsById:read_only
bthread("crud:MembersCustomBoardBackgroundsById:read_only", function () {

  verifyMembersCustomBoardBackgroundsByIdExists(idBoardBackground, idMember);
});

// Story: crud:MembersCustomEmoji:read_only
bthread("crud:MembersCustomEmoji:read_only", function () {
  let file = "file_840";
  let idCustomEmoji = "idCustomEmoji_840";
  let name = "name_840";
  verifyMembersCustomEmojiExists(file, idCustomEmoji, idMember, name);
});

// Story: crud:MembersCustomStickers:nondet:1:1
bthread("crud:MembersCustomStickers:nondet:1:1", function () {
  let file = "file_850";
  let idCustomSticker = "idCustomSticker_850";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(file, idCustomSticker, idMember);
  // waitForMembersCustomStickersAdded(file, idCustomSticker, idMember);
  tryToAddExistingMembersCustomStickers(file, idCustomSticker, idMember);
  verifyMembersCustomStickersExists(file, idCustomSticker, idMember);
  deleteMembersCustomStickersByIdMemberByIdCustomSticker(file, idCustomSticker, idMember);
  tryToDeleteANonExistingMembersCustomStickers(file, idCustomSticker, idMember);
  verifyMembersCustomStickersDoesNotExist(file, idCustomSticker, idMember);
});

// Story: crud:MembersCustomStickers:nondet:1:2
bthread("crud:MembersCustomStickers:nondet:1:2", function () {
  let file = "file_851";
  let idCustomSticker = "idCustomSticker_851";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(file, idCustomSticker, idMember);
  // waitForMembersCustomStickersAdded(file, idCustomSticker, idMember);
  tryToAddExistingMembersCustomStickers(file, idCustomSticker, idMember);
  verifyMembersCustomStickersExists(file, idCustomSticker, idMember);
  deleteMembersCustomStickersByIdMemberByIdCustomSticker(file, idCustomSticker, idMember);
  tryToDeleteANonExistingMembersCustomStickers(file, idCustomSticker, idMember);
  verifyMembersCustomStickersDoesNotExist(file, idCustomSticker, idMember);
});

// Story: crud:MembersCustomStickers:nondet:negative:dup-add
bthread("crud:MembersCustomStickers:nondet:negative:dup-add", function () {
  let file = "file_856";
  let idCustomSticker = "idCustomSticker_856";
  // Dependency Barrier
  let deps = {};
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(file, idCustomSticker, idMember);
  // waitForMembersCustomStickersAdded(file, idCustomSticker, idMember);
  verifyMembersCustomStickersExists(file, idCustomSticker, idMember);
  tryToAddExistingMembersCustomStickers(file, idCustomSticker, idMember);
  verifyMembersCustomStickersExists(file, idCustomSticker, idMember);
});

// Story: crud:MembersDeltas:read_only
bthread("crud:MembersDeltas:read_only", function () {
  let ixLastUpdate = "ixLastUpdate_860";
  let tags = "tags_860";
  verifyMembersDeltasExists(idMember, ixLastUpdate, tags);
});

// Story: crud:MembersNotifications:read_only
bthread("crud:MembersNotifications:read_only", function () {
  let filter = "filter_890";
  verifyMembersNotificationsExists(filter, idMember);
});

// Story: crud:MembersOrganizations:read_only
bthread("crud:MembersOrganizations:read_only", function () {
  let filter = "filter_910";
  verifyMembersOrganizationsExists(filter, idMember);
});

// Story: crud:MembersOrganizationsInvited:read_only
bthread("crud:MembersOrganizationsInvited:read_only", function () {

  verifyMembersOrganizationsInvitedExists(idMember);
});

// Story: crud:MembersOrganizationsInvitedField:read_only
bthread("crud:MembersOrganizationsInvitedField:read_only", function () {
  let field = "field_930";
  verifyMembersOrganizationsInvitedFieldExists(field, idMember);
});

// Story: crud:MembersSavedSearches:read_only
bthread("crud:MembersSavedSearches:read_only", function () {
  let name = "name_970";
  let pos = "pos_970";
  let query = "query_970";
  verifyMembersSavedSearchesExists(idMember, name, pos, query);
});

// Story: crud:MembersSavedSearch:read_only
bthread("crud:MembersSavedSearch:read_only", function () {
  let idSavedSearch = "idSavedSearch_980";
  let query = "query_980";
  verifyMembersSavedSearchExists(idMember, idSavedSearch, query);
});

// Story: crud:MembersTokens:read_only
bthread("crud:MembersTokens:read_only", function () {

  verifyMembersTokensExists(idMember);
});

// Story: crud:MembersField:read_only
bthread("crud:MembersField:read_only", function () {
  let field = "field_1040";
  verifyMembersFieldExists(field, idMember);
});

// Story: crud:CardActionComment:nondet:1:1
bthread("crud:CardActionComment:nondet:1:1", function () {
  let key = "key_1050";
  let text = "text_1050";
  let token = "token_1050";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionAdded();
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idAction": "idAction", "idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idAction = captured["idAction"];
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(idAction, idCard, key, text, token);
  // waitForCardActionCommentAdded(idAction, idCard, key, text, token);
  tryToAddExistingCardActionComment(idAction, idCard, key, text, token);
  verifyCardActionCommentExists(idAction, idCard, key, text, token);
  updateCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token);
  deleteCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token);
  tryToDeleteANonExistingCardActionComment(idAction, idCard, key, text, token);
  verifyCardActionCommentDoesNotExist(idAction, idCard, key, text, token);
});

// Story: crud:CardActionComment:nondet:1:2
bthread("crud:CardActionComment:nondet:1:2", function () {
  let key = "key_1051";
  let text = "text_1051";
  let token = "token_1051";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionAdded();
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idAction": "idAction", "idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idAction = captured["idAction"];
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(idAction, idCard, key, text, token);
  // waitForCardActionCommentAdded(idAction, idCard, key, text, token);
  tryToAddExistingCardActionComment(idAction, idCard, key, text, token);
  updateCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token);
  verifyCardActionCommentExists(idAction, idCard, key, text, token);
  deleteCardsActionsCommentsByIdCardByIdAction(idAction, idCard, key, text, token);
  tryToDeleteANonExistingCardActionComment(idAction, idCard, key, text, token);
  verifyCardActionCommentDoesNotExist(idAction, idCard, key, text, token);
});

// Story: crud:CardActionComment:nondet:negative:dup-add
bthread("crud:CardActionComment:nondet:negative:dup-add", function () {
  let key = "key_1056";
  let text = "text_1056";
  let token = "token_1056";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionAdded();
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idAction": "idAction", "idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idAction = captured["idAction"];
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(idAction, idCard, key, text, token);
  // waitForCardActionCommentAdded(idAction, idCard, key, text, token);
  verifyCardActionCommentExists(idAction, idCard, key, text, token);
  tryToAddExistingCardActionComment(idAction, idCard, key, text, token);
  verifyCardActionCommentExists(idAction, idCard, key, text, token);
});

// Story: crud:CardAttachment:nondet:1:1
bthread("crud:CardAttachment:nondet:1:1", function () {
  let file = "file_1060";
  let idAttachment = "idAttachment_1060";
  let key = "key_1060";
  let mimeType = "mimeType_1060";
  let name = "name_1060";
  let token = "token_1060";
  let url = "url_1060";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(file, idAttachment, idCard, key, mimeType, name, token, url);
  // waitForCardAttachmentAdded(file, idAttachment, idCard, key, mimeType, name, token, url);
  tryToAddExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url);
  verifyCardAttachmentExists(file, idAttachment, idCard, key, mimeType, name, token, url);
  deleteCardsAttachmentsByIdCardByIdAttachment(file, idAttachment, idCard, key, mimeType, name, token, url);
  tryToDeleteANonExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url);
  verifyCardAttachmentDoesNotExist(file, idAttachment, idCard, key, mimeType, name, token, url);
});

// Story: crud:CardAttachment:nondet:1:2
bthread("crud:CardAttachment:nondet:1:2", function () {
  let file = "file_1061";
  let idAttachment = "idAttachment_1061";
  let key = "key_1061";
  let mimeType = "mimeType_1061";
  let name = "name_1061";
  let token = "token_1061";
  let url = "url_1061";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(file, idAttachment, idCard, key, mimeType, name, token, url);
  // waitForCardAttachmentAdded(file, idAttachment, idCard, key, mimeType, name, token, url);
  tryToAddExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url);
  verifyCardAttachmentExists(file, idAttachment, idCard, key, mimeType, name, token, url);
  deleteCardsAttachmentsByIdCardByIdAttachment(file, idAttachment, idCard, key, mimeType, name, token, url);
  tryToDeleteANonExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url);
  verifyCardAttachmentDoesNotExist(file, idAttachment, idCard, key, mimeType, name, token, url);
});

// Story: crud:CardAttachment:nondet:negative:dup-add
bthread("crud:CardAttachment:nondet:negative:dup-add", function () {
  let file = "file_1066";
  let idAttachment = "idAttachment_1066";
  let key = "key_1066";
  let mimeType = "mimeType_1066";
  let name = "name_1066";
  let token = "token_1066";
  let url = "url_1066";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(file, idAttachment, idCard, key, mimeType, name, token, url);
  // waitForCardAttachmentAdded(file, idAttachment, idCard, key, mimeType, name, token, url);
  verifyCardAttachmentExists(file, idAttachment, idCard, key, mimeType, name, token, url);
  tryToAddExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url);
  verifyCardAttachmentExists(file, idAttachment, idCard, key, mimeType, name, token, url);
});

// Story: crud:CardsChecklistCheckItem:nondet:1:1
bthread("crud:CardsChecklistCheckItem:nondet:1:1", function () {
  let idCheckItem = "idCheckItem_1070";
  let name = "name_1070";
  let pos = "pos_1070";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistCurrent"] = matchAnyChecklistAdded();
  deps["idChecklistCurrent"] = matchAnyListAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idList", "idChecklistCurrent": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  idChecklistCurrent = captured["idChecklistCurrent"];
  idChecklistCurrent = captured["idChecklistCurrent"];
  addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  // waitForCardsChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  tryToAddExistingCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  verifyCardsChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  tryToDeleteANonExistingCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  verifyCardsChecklistCheckItemDoesNotExist(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
});

// Story: crud:CardsChecklistCheckItem:nondet:1:2
bthread("crud:CardsChecklistCheckItem:nondet:1:2", function () {
  let idCheckItem = "idCheckItem_1071";
  let name = "name_1071";
  let pos = "pos_1071";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistCurrent"] = matchAnyChecklistAdded();
  deps["idChecklistCurrent"] = matchAnyListAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idList", "idChecklistCurrent": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  idChecklistCurrent = captured["idChecklistCurrent"];
  idChecklistCurrent = captured["idChecklistCurrent"];
  addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  // waitForCardsChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  tryToAddExistingCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  verifyCardsChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  tryToDeleteANonExistingCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  verifyCardsChecklistCheckItemDoesNotExist(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
});

// Story: crud:CardsChecklistCheckItem:nondet:negative:dup-add
bthread("crud:CardsChecklistCheckItem:nondet:negative:dup-add", function () {
  let idCheckItem = "idCheckItem_1076";
  let name = "name_1076";
  let pos = "pos_1076";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistCurrent"] = matchAnyChecklistAdded();
  deps["idChecklistCurrent"] = matchAnyListAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idList", "idChecklistCurrent": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  idChecklistCurrent = captured["idChecklistCurrent"];
  idChecklistCurrent = captured["idChecklistCurrent"];
  addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  // waitForCardsChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  verifyCardsChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  tryToAddExistingCardsChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
  verifyCardsChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, name, pos);
});

// Story: crud:CardsChecklists:nondet:1:1
bthread("crud:CardsChecklists:nondet:1:1", function () {
  let name = "name_1120";
  let value = "value_1120";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistSource"] = matchAnyChecklistAdded();
  deps["idChecklistSource"] = matchAnyListAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idList", "idChecklistSource": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  idChecklistSource = captured["idChecklistSource"];
  idChecklistSource = captured["idChecklistSource"];
  addCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, name, value);
  // waitForCardsChecklistsAdded(idCard, idChecklist, idChecklistSource, name, value);
  tryToAddExistingCardsChecklists(idCard, idChecklist, idChecklistSource, name, value);
  verifyCardsChecklistsExists(idCard, idChecklist, idChecklistSource, name, value);
  deleteCardsChecklistsByIdCardByIdChecklist(idCard, idChecklist, idChecklistSource, name, value);
  tryToDeleteANonExistingCardsChecklists(idCard, idChecklist, idChecklistSource, name, value);
  verifyCardsChecklistsDoesNotExist(idCard, idChecklist, idChecklistSource, name, value);
});

// Story: crud:CardsChecklists:nondet:1:2
bthread("crud:CardsChecklists:nondet:1:2", function () {
  let name = "name_1121";
  let value = "value_1121";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistSource"] = matchAnyChecklistAdded();
  deps["idChecklistSource"] = matchAnyListAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idList", "idChecklistSource": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  idChecklistSource = captured["idChecklistSource"];
  idChecklistSource = captured["idChecklistSource"];
  addCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, name, value);
  // waitForCardsChecklistsAdded(idCard, idChecklist, idChecklistSource, name, value);
  tryToAddExistingCardsChecklists(idCard, idChecklist, idChecklistSource, name, value);
  verifyCardsChecklistsExists(idCard, idChecklist, idChecklistSource, name, value);
  deleteCardsChecklistsByIdCardByIdChecklist(idCard, idChecklist, idChecklistSource, name, value);
  tryToDeleteANonExistingCardsChecklists(idCard, idChecklist, idChecklistSource, name, value);
  verifyCardsChecklistsDoesNotExist(idCard, idChecklist, idChecklistSource, name, value);
});

// Story: crud:CardsChecklists:nondet:negative:dup-add
bthread("crud:CardsChecklists:nondet:negative:dup-add", function () {
  let name = "name_1126";
  let value = "value_1126";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  deps["idChecklistSource"] = matchAnyChecklistAdded();
  deps["idChecklistSource"] = matchAnyListAdded();
  let pkMap = {"idCard": "idCard", "idChecklist": "idList", "idChecklistSource": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  idChecklistSource = captured["idChecklistSource"];
  idChecklistSource = captured["idChecklistSource"];
  addCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, name, value);
  // waitForCardsChecklistsAdded(idCard, idChecklist, idChecklistSource, name, value);
  verifyCardsChecklistsExists(idCard, idChecklist, idChecklistSource, name, value);
  tryToAddExistingCardsChecklists(idCard, idChecklist, idChecklistSource, name, value);
  verifyCardsChecklistsExists(idCard, idChecklist, idChecklistSource, name, value);
});

// Story: crud:CardIdLabels:nondet:1:1
bthread("crud:CardIdLabels:nondet:1:1", function () {
  let key = "key_1180";
  let token = "token_1180";
  let value = "value_1180";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idLabel"] = matchAnyLabelAdded();
  let pkMap = {"idCard": "idCard", "idLabel": "idLabel"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idLabel = captured["idLabel"];
  addCardsIdLabelsByIdCard(idCard, idLabel, key, token, value);
  // waitForCardIdLabelsAdded(idCard, idLabel, key, token, value);
  tryToAddExistingCardIdLabels(idCard, idLabel, key, token, value);
  verifyCardIdLabelsExists(idCard, idLabel, key, token, value);
  deleteCardsIdLabelsByIdCardByIdLabel(idCard, idLabel, key, token, value);
  tryToDeleteANonExistingCardIdLabels(idCard, idLabel, key, token, value);
  verifyCardIdLabelsDoesNotExist(idCard, idLabel, key, token, value);
});

// Story: crud:CardIdLabels:nondet:1:2
bthread("crud:CardIdLabels:nondet:1:2", function () {
  let key = "key_1181";
  let token = "token_1181";
  let value = "value_1181";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idLabel"] = matchAnyLabelAdded();
  let pkMap = {"idCard": "idCard", "idLabel": "idLabel"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idLabel = captured["idLabel"];
  addCardsIdLabelsByIdCard(idCard, idLabel, key, token, value);
  // waitForCardIdLabelsAdded(idCard, idLabel, key, token, value);
  tryToAddExistingCardIdLabels(idCard, idLabel, key, token, value);
  verifyCardIdLabelsExists(idCard, idLabel, key, token, value);
  deleteCardsIdLabelsByIdCardByIdLabel(idCard, idLabel, key, token, value);
  tryToDeleteANonExistingCardIdLabels(idCard, idLabel, key, token, value);
  verifyCardIdLabelsDoesNotExist(idCard, idLabel, key, token, value);
});

// Story: crud:CardIdLabels:nondet:negative:dup-add
bthread("crud:CardIdLabels:nondet:negative:dup-add", function () {
  let key = "key_1186";
  let token = "token_1186";
  let value = "value_1186";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idLabel"] = matchAnyLabelAdded();
  let pkMap = {"idCard": "idCard", "idLabel": "idLabel"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idLabel = captured["idLabel"];
  addCardsIdLabelsByIdCard(idCard, idLabel, key, token, value);
  // waitForCardIdLabelsAdded(idCard, idLabel, key, token, value);
  verifyCardIdLabelsExists(idCard, idLabel, key, token, value);
  tryToAddExistingCardIdLabels(idCard, idLabel, key, token, value);
  verifyCardIdLabelsExists(idCard, idLabel, key, token, value);
});

// Story: crud:CardIdMembers:nondet:1:1
bthread("crud:CardIdMembers:nondet:1:1", function () {
  let key = "key_1200";
  let token = "token_1200";
  let value = "value_1200";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idCard": "idCard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idMember = captured["idMember"];
  addCardsIdMembersByIdCard(idCard, idMember, key, token, value);
  // waitForCardIdMembersAdded(idCard, idMember, key, token, value);
  tryToAddExistingCardIdMembers(idCard, idMember, key, token, value);
  verifyCardIdMembersExists(idCard, idMember, key, token, value);
  updateCardsIdMembersByIdCard(idCard, idMember, key, token, value);
  deleteCardsIdMembersByIdCardByIdMember(idCard, idMember, key, token, value);
  tryToDeleteANonExistingCardIdMembers(idCard, idMember, key, token, value);
  verifyCardIdMembersDoesNotExist(idCard, idMember, key, token, value);
});

// Story: crud:CardIdMembers:nondet:1:2
bthread("crud:CardIdMembers:nondet:1:2", function () {
  let key = "key_1201";
  let token = "token_1201";
  let value = "value_1201";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idCard": "idCard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idMember = captured["idMember"];
  addCardsIdMembersByIdCard(idCard, idMember, key, token, value);
  // waitForCardIdMembersAdded(idCard, idMember, key, token, value);
  tryToAddExistingCardIdMembers(idCard, idMember, key, token, value);
  updateCardsIdMembersByIdCard(idCard, idMember, key, token, value);
  verifyCardIdMembersExists(idCard, idMember, key, token, value);
  deleteCardsIdMembersByIdCardByIdMember(idCard, idMember, key, token, value);
  tryToDeleteANonExistingCardIdMembers(idCard, idMember, key, token, value);
  verifyCardIdMembersDoesNotExist(idCard, idMember, key, token, value);
});

// Story: crud:CardIdMembers:nondet:negative:dup-add
bthread("crud:CardIdMembers:nondet:negative:dup-add", function () {
  let key = "key_1206";
  let token = "token_1206";
  let value = "value_1206";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  deps["idMember"] = matchAnyMemberAdded();
  let pkMap = {"idCard": "idCard", "idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  idMember = captured["idMember"];
  addCardsIdMembersByIdCard(idCard, idMember, key, token, value);
  // waitForCardIdMembersAdded(idCard, idMember, key, token, value);
  verifyCardIdMembersExists(idCard, idMember, key, token, value);
  tryToAddExistingCardIdMembers(idCard, idMember, key, token, value);
  verifyCardIdMembersExists(idCard, idMember, key, token, value);
});

// Story: crud:CardsList:read_only
bthread("crud:CardsList:read_only", function () {

  verifyCardsListExists(idCard);
});

// Story: crud:CardsListField:read_only
bthread("crud:CardsListField:read_only", function () {
  let field = "field_1240";
  verifyCardsListFieldExists(field, idCard);
});

// Story: crud:CardsMembers:read_only
bthread("crud:CardsMembers:read_only", function () {

  verifyCardsMembersExists(idCard);
});

// Story: crud:CardsMembersVoted:read_only
bthread("crud:CardsMembersVoted:read_only", function () {
  let value = "value_1270";
  verifyCardsMembersVotedExists(idCard, value);
});

// Story: crud:CardsStickers:nondet:1:1
bthread("crud:CardsStickers:nondet:1:1", function () {
  let idSticker = "idSticker_1310";
  let image = "image_1310";
  let left = "left_1310";
  let rotate = "rotate_1310";
  let top = "top_1310";
  let zIndex = "zIndex_1310";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsStickersByIdCard(idCard, idSticker, image, left, rotate, top, zIndex);
  // waitForCardsStickersAdded(idCard, idSticker, image, left, rotate, top, zIndex);
  tryToAddExistingCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex);
  verifyCardsStickersExists(idCard, idSticker, image, left, rotate, top, zIndex);
  updateCardsStickersByIdCardByIdSticker(idCard, idSticker, image, left, rotate, top, zIndex);
  deleteCardsStickersByIdCardByIdSticker(idCard, idSticker, image, left, rotate, top, zIndex);
  tryToDeleteANonExistingCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex);
  verifyCardsStickersDoesNotExist(idCard, idSticker, image, left, rotate, top, zIndex);
});

// Story: crud:CardsStickers:nondet:1:2
bthread("crud:CardsStickers:nondet:1:2", function () {
  let idSticker = "idSticker_1311";
  let image = "image_1311";
  let left = "left_1311";
  let rotate = "rotate_1311";
  let top = "top_1311";
  let zIndex = "zIndex_1311";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsStickersByIdCard(idCard, idSticker, image, left, rotate, top, zIndex);
  // waitForCardsStickersAdded(idCard, idSticker, image, left, rotate, top, zIndex);
  tryToAddExistingCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex);
  updateCardsStickersByIdCardByIdSticker(idCard, idSticker, image, left, rotate, top, zIndex);
  verifyCardsStickersExists(idCard, idSticker, image, left, rotate, top, zIndex);
  deleteCardsStickersByIdCardByIdSticker(idCard, idSticker, image, left, rotate, top, zIndex);
  tryToDeleteANonExistingCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex);
  verifyCardsStickersDoesNotExist(idCard, idSticker, image, left, rotate, top, zIndex);
});

// Story: crud:CardsStickers:nondet:negative:dup-add
bthread("crud:CardsStickers:nondet:negative:dup-add", function () {
  let idSticker = "idSticker_1316";
  let image = "image_1316";
  let left = "left_1316";
  let rotate = "rotate_1316";
  let top = "top_1316";
  let zIndex = "zIndex_1316";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  idCard = captured["idCard"];
  addCardsStickersByIdCard(idCard, idSticker, image, left, rotate, top, zIndex);
  // waitForCardsStickersAdded(idCard, idSticker, image, left, rotate, top, zIndex);
  verifyCardsStickersExists(idCard, idSticker, image, left, rotate, top, zIndex);
  tryToAddExistingCardsStickers(idCard, idSticker, image, left, rotate, top, zIndex);
  verifyCardsStickersExists(idCard, idSticker, image, left, rotate, top, zIndex);
});

// Story: crud:CardsField:read_only
bthread("crud:CardsField:read_only", function () {
  let field = "field_1330";
  verifyCardsFieldExists(field, idCard);
});

// Story: crud:Organization:nondet:1:1
bthread("crud:Organization:nondet:1:1", function () {
  let desc = "desc_1340";
  let displayName = "displayName_1340";
  let idOrg = 1340;
  let key = "key_1340";
  let name = "name_1340";
  let prefs/associatedDomain = "prefs/associatedDomain_1340";
  let prefs/boardVisibilityRestrict/org = "prefs/boardVisibilityRestrict/org_1340";
  let prefs/boardVisibilityRestrict/private = "prefs/boardVisibilityRestrict/private_1340";
  let prefs/boardVisibilityRestrict/public = "prefs/boardVisibilityRestrict/public_1340";
  let prefs/externalMembersDisabled = "prefs/externalMembersDisabled_1340";
  let prefs/googleAppsVersion = "prefs/googleAppsVersion_1340";
  let prefs/orgInviteRestrict = "prefs/orgInviteRestrict_1340";
  let prefs/permissionLevel = "prefs/permissionLevel_1340";
  let token = "token_1340";
  let website = "website_1340";
  addOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  // waitForOrganizationAdded(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  tryToAddExistingOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  verifyOrganizationExists(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  updateOrganizationByIdOrg(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  deleteOrganizationByIdOrg(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  tryToDeleteANonExistingOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  verifyOrganizationDoesNotExist(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
});

// Story: crud:Organization:nondet:1:2
bthread("crud:Organization:nondet:1:2", function () {
  let desc = "desc_1341";
  let displayName = "displayName_1341";
  let idOrg = 1341;
  let key = "key_1341";
  let name = "name_1341";
  let prefs/associatedDomain = "prefs/associatedDomain_1341";
  let prefs/boardVisibilityRestrict/org = "prefs/boardVisibilityRestrict/org_1341";
  let prefs/boardVisibilityRestrict/private = "prefs/boardVisibilityRestrict/private_1341";
  let prefs/boardVisibilityRestrict/public = "prefs/boardVisibilityRestrict/public_1341";
  let prefs/externalMembersDisabled = "prefs/externalMembersDisabled_1341";
  let prefs/googleAppsVersion = "prefs/googleAppsVersion_1341";
  let prefs/orgInviteRestrict = "prefs/orgInviteRestrict_1341";
  let prefs/permissionLevel = "prefs/permissionLevel_1341";
  let token = "token_1341";
  let website = "website_1341";
  addOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  // waitForOrganizationAdded(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  tryToAddExistingOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  updateOrganizationByIdOrg(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  verifyOrganizationExists(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  deleteOrganizationByIdOrg(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  tryToDeleteANonExistingOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  verifyOrganizationDoesNotExist(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
});

// Story: crud:Organization:nondet:negative:dup-add
bthread("crud:Organization:nondet:negative:dup-add", function () {
  let desc = "desc_1346";
  let displayName = "displayName_1346";
  let idOrg = 1346;
  let key = "key_1346";
  let name = "name_1346";
  let prefs/associatedDomain = "prefs/associatedDomain_1346";
  let prefs/boardVisibilityRestrict/org = "prefs/boardVisibilityRestrict/org_1346";
  let prefs/boardVisibilityRestrict/private = "prefs/boardVisibilityRestrict/private_1346";
  let prefs/boardVisibilityRestrict/public = "prefs/boardVisibilityRestrict/public_1346";
  let prefs/externalMembersDisabled = "prefs/externalMembersDisabled_1346";
  let prefs/googleAppsVersion = "prefs/googleAppsVersion_1346";
  let prefs/orgInviteRestrict = "prefs/orgInviteRestrict_1346";
  let prefs/permissionLevel = "prefs/permissionLevel_1346";
  let token = "token_1346";
  let website = "website_1346";
  addOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  // waitForOrganizationAdded(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  verifyOrganizationExists(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  tryToAddExistingOrganization(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
  verifyOrganizationExists(desc, displayName, idOrg, key, name, prefs/associatedDomain, prefs/boardVisibilityRestrict/org, prefs/boardVisibilityRestrict/private, prefs/boardVisibilityRestrict/public, prefs/externalMembersDisabled, prefs/googleAppsVersion, prefs/orgInviteRestrict, prefs/permissionLevel, token, website);
});

// Story: crud:OrganizationLogo:nondet:1:1
bthread("crud:OrganizationLogo:nondet:1:1", function () {
  let file = "file_1370";
  let idOrg = 1370;
  let key = "key_1370";
  let token = "token_1370";
  addOrganizationLogoByIdOrg(file, idOrg, key, token);
  // waitForOrganizationLogoAdded(file, idOrg, key, token);
  tryToAddExistingOrganizationLogo(file, idOrg, key, token);
  verifyOrganizationLogoExists(file, idOrg, key, token);
  deleteOrganizationLogoByIdOrg(file, idOrg, key, token);
  tryToDeleteANonExistingOrganizationLogo(file, idOrg, key, token);
  verifyOrganizationLogoDoesNotExist(file, idOrg, key, token);
});

// Story: crud:OrganizationLogo:nondet:1:2
bthread("crud:OrganizationLogo:nondet:1:2", function () {
  let file = "file_1371";
  let idOrg = 1371;
  let key = "key_1371";
  let token = "token_1371";
  addOrganizationLogoByIdOrg(file, idOrg, key, token);
  // waitForOrganizationLogoAdded(file, idOrg, key, token);
  tryToAddExistingOrganizationLogo(file, idOrg, key, token);
  verifyOrganizationLogoExists(file, idOrg, key, token);
  deleteOrganizationLogoByIdOrg(file, idOrg, key, token);
  tryToDeleteANonExistingOrganizationLogo(file, idOrg, key, token);
  verifyOrganizationLogoDoesNotExist(file, idOrg, key, token);
});

// Story: crud:OrganizationLogo:nondet:negative:dup-add
bthread("crud:OrganizationLogo:nondet:negative:dup-add", function () {
  let file = "file_1376";
  let idOrg = 1376;
  let key = "key_1376";
  let token = "token_1376";
  addOrganizationLogoByIdOrg(file, idOrg, key, token);
  // waitForOrganizationLogoAdded(file, idOrg, key, token);
  verifyOrganizationLogoExists(file, idOrg, key, token);
  tryToAddExistingOrganizationLogo(file, idOrg, key, token);
  verifyOrganizationLogoExists(file, idOrg, key, token);
});

// Story: crud:OrganizationMember:read_only
bthread("crud:OrganizationMember:read_only", function () {
  let idOrg = 1380;
  verifyOrganizationMemberExists(idMember, idOrg);
});

// Story: crud:OrganizationMemberInvited:read_only
bthread("crud:OrganizationMemberInvited:read_only", function () {
  let field = "field_1400";
  let idOrg = 1400;
  verifyOrganizationMemberInvitedExists(field, idOrg);
});

// Story: crud:OrganizationMembership:read_only
bthread("crud:OrganizationMembership:read_only", function () {
  let idOrg = 1410;
  verifyOrganizationMembershipExists(idMembership, idOrg);
});

// Story: crud:OrganizationMemberships:read_only
bthread("crud:OrganizationMemberships:read_only", function () {
  let idOrg = 1420;
  verifyOrganizationMembershipsExists(idOrg);
});

// Story: crud:OrganizationMembers:read_only
bthread("crud:OrganizationMembers:read_only", function () {
  let filter = "filter_1430";
  let idOrg = 1430;
  verifyOrganizationMembersExists(filter, idOrg);
});

// Story: crud:OrganizationMemberCards:read_only
bthread("crud:OrganizationMemberCards:read_only", function () {
  let idOrg = 1440;
  verifyOrganizationMemberCardsExists(idMember, idOrg);
});

// Story: crud:OrganizationField:read_only
bthread("crud:OrganizationField:read_only", function () {
  let field = "field_1540";
  let idOrg = 1540;
  verifyOrganizationFieldExists(field, idOrg);
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let idNotification = 1550;
  verifyNotificationExists(idNotification);
});

// Story: crud:NotificationMember:read_only
bthread("crud:NotificationMember:read_only", function () {

  verifyNotificationMemberExists(idNotification);
});

// Story: crud:NotificationMemberField:read_only
bthread("crud:NotificationMemberField:read_only", function () {
  let field = "field_1570";
  verifyNotificationMemberFieldExists(field, idNotification);
});

// Story: crud:NotificationMemberCreator:read_only
bthread("crud:NotificationMemberCreator:read_only", function () {

  verifyNotificationMemberCreatorExists(idNotification);
});

// Story: crud:NotificationMemberCreatorField:read_only
bthread("crud:NotificationMemberCreatorField:read_only", function () {
  let field = "field_1590";
  verifyNotificationMemberCreatorFieldExists(field, idNotification);
});

// Story: crud:NotificationOrganization:read_only
bthread("crud:NotificationOrganization:read_only", function () {

  verifyNotificationOrganizationExists(idNotification);
});

// Story: crud:NotificationOrganizationField:read_only
bthread("crud:NotificationOrganizationField:read_only", function () {
  let field = "field_1610";
  verifyNotificationOrganizationFieldExists(field, idNotification);
});

// Story: crud:NotificationField:read_only
bthread("crud:NotificationField:read_only", function () {
  let field = "field_1620";
  verifyNotificationFieldExists(field, idNotification);
});

// Story: crud:Action:read_only
bthread("crud:Action:read_only", function () {
  let field = "field_1630";
  let idAction = 1630;
  verifyActionExists(field, idAction);
});

// Story: crud:ActionMember:read_only
bthread("crud:ActionMember:read_only", function () {
  let field = "field_1640";
  verifyActionMemberExists(field, idAction);
});

// Story: crud:ActionMemberCreator:read_only
bthread("crud:ActionMemberCreator:read_only", function () {
  let field = "field_1650";
  verifyActionMemberCreatorExists(field, idAction);
});

// Story: crud:ActionOrganization:read_only
bthread("crud:ActionOrganization:read_only", function () {
  let field = "field_1660";
  verifyActionOrganizationExists(field, idAction);
});

// Story: crud:ListCard:read_only
bthread("crud:ListCard:read_only", function () {
  let desc = "desc_1690";
  let due = "due_1690";
  let labels = "labels_1690";
  let name = "name_1690";
  verifyListCardExists(desc, due, idList, idMembers, labels, name);
});

// Story: crud:ChecklistCheckItem:nondet:1:1
bthread("crud:ChecklistCheckItem:nondet:1:1", function () {
  let checked = "checked_1700";
  let idCheckItem = "idCheckItem_1700";
  let name = "name_1700";
  let pos = "pos_1700";
  // Dependency Barrier
  let deps = {};
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  let pkMap = {"idChecklist": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  addChecklistsCheckItemsByIdChecklist(checked, idCheckItem, idChecklist, name, pos);
  // waitForChecklistCheckItemAdded(checked, idCheckItem, idChecklist, name, pos);
  tryToAddExistingChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos);
  verifyChecklistCheckItemExists(checked, idCheckItem, idChecklist, name, pos);
  deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(checked, idCheckItem, idChecklist, name, pos);
  tryToDeleteANonExistingChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos);
  verifyChecklistCheckItemDoesNotExist(checked, idCheckItem, idChecklist, name, pos);
});

// Story: crud:ChecklistCheckItem:nondet:1:2
bthread("crud:ChecklistCheckItem:nondet:1:2", function () {
  let checked = "checked_1701";
  let idCheckItem = "idCheckItem_1701";
  let name = "name_1701";
  let pos = "pos_1701";
  // Dependency Barrier
  let deps = {};
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  let pkMap = {"idChecklist": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  addChecklistsCheckItemsByIdChecklist(checked, idCheckItem, idChecklist, name, pos);
  // waitForChecklistCheckItemAdded(checked, idCheckItem, idChecklist, name, pos);
  tryToAddExistingChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos);
  verifyChecklistCheckItemExists(checked, idCheckItem, idChecklist, name, pos);
  deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(checked, idCheckItem, idChecklist, name, pos);
  tryToDeleteANonExistingChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos);
  verifyChecklistCheckItemDoesNotExist(checked, idCheckItem, idChecklist, name, pos);
});

// Story: crud:ChecklistCheckItem:nondet:negative:dup-add
bthread("crud:ChecklistCheckItem:nondet:negative:dup-add", function () {
  let checked = "checked_1706";
  let idCheckItem = "idCheckItem_1706";
  let name = "name_1706";
  let pos = "pos_1706";
  // Dependency Barrier
  let deps = {};
  deps["idChecklist"] = matchAnyChecklistAdded();
  deps["idChecklist"] = matchAnyListAdded();
  let pkMap = {"idChecklist": "idList"};
  let captured = resolveDependencies(deps, pkMap);
  idChecklist = captured["idChecklist"];
  idChecklist = captured["idChecklist"];
  addChecklistsCheckItemsByIdChecklist(checked, idCheckItem, idChecklist, name, pos);
  // waitForChecklistCheckItemAdded(checked, idCheckItem, idChecklist, name, pos);
  verifyChecklistCheckItemExists(checked, idCheckItem, idChecklist, name, pos);
  tryToAddExistingChecklistCheckItem(checked, idCheckItem, idChecklist, name, pos);
  verifyChecklistCheckItemExists(checked, idCheckItem, idChecklist, name, pos);
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let active = "active_1730";
  let callbackURL = "callbackURL_1730";
  let description = "description_1730";
  let idModel = "idModel_1730";
  let idWebhook = 1730;
  let key = "key_1730";
  let token = "token_1730";
  addWebhooks(active, callbackURL, description, idModel, idWebhook, key, token);
  // waitForWebhookAdded(active, callbackURL, description, idModel, idWebhook, key, token);
  tryToAddExistingWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  verifyWebhookExists(active, callbackURL, description, idModel, idWebhook, key, token);
  updateWebhooksByIdWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  deleteWebhooksByIdWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  tryToDeleteANonExistingWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  verifyWebhookDoesNotExist(active, callbackURL, description, idModel, idWebhook, key, token);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let active = "active_1731";
  let callbackURL = "callbackURL_1731";
  let description = "description_1731";
  let idModel = "idModel_1731";
  let idWebhook = 1731;
  let key = "key_1731";
  let token = "token_1731";
  addWebhooks(active, callbackURL, description, idModel, idWebhook, key, token);
  // waitForWebhookAdded(active, callbackURL, description, idModel, idWebhook, key, token);
  tryToAddExistingWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  updateWebhooksByIdWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  verifyWebhookExists(active, callbackURL, description, idModel, idWebhook, key, token);
  deleteWebhooksByIdWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  tryToDeleteANonExistingWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  verifyWebhookDoesNotExist(active, callbackURL, description, idModel, idWebhook, key, token);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let active = "active_1736";
  let callbackURL = "callbackURL_1736";
  let description = "description_1736";
  let idModel = "idModel_1736";
  let idWebhook = 1736;
  let key = "key_1736";
  let token = "token_1736";
  addWebhooks(active, callbackURL, description, idModel, idWebhook, key, token);
  // waitForWebhookAdded(active, callbackURL, description, idModel, idWebhook, key, token);
  verifyWebhookExists(active, callbackURL, description, idModel, idWebhook, key, token);
  tryToAddExistingWebhook(active, callbackURL, description, idModel, idWebhook, key, token);
  verifyWebhookExists(active, callbackURL, description, idModel, idWebhook, key, token);
});

// Story: crud:WebhookField:read_only
bthread("crud:WebhookField:read_only", function () {
  let field = "field_1780";
  let key = "key_1780";
  let token = "token_1780";
  verifyWebhookFieldExists(field, idWebhook, key, token);
});

// Story: crud:Token:read_only
bthread("crud:Token:read_only", function () {
  let key = "key_1810";
  let token = 1810;
  verifyTokenExists(key, token);
});

// Story: crud:TokenMember:read_only
bthread("crud:TokenMember:read_only", function () {
  let field = "field_1820";
  let key = "key_1820";
  let token = 1820;
  verifyTokenMemberExists(field, key, token);
});

// Story: crud:TokenWebhook:read_only
bthread("crud:TokenWebhook:read_only", function () {
  let callbackURL = "callbackURL_1830";
  let description = "description_1830";
  let idModel = "idModel_1830";
  let key = "key_1830";
  let token = 1830;
  verifyTokenWebhookExists(callbackURL, description, idModel, idWebhook, key, token);
});

// Story: crud:Session:read_only
bthread("crud:Session:read_only", function () {
  let idSession = 1840;
  let key = "key_1840";
  let status = "status_1840";
  let token = "token_1840";
  verifySessionExists(idBoard, idSession, key, status, token);
});

// Story: crud:Type:read_only
bthread("crud:Type:read_only", function () {
  let id = 1860;
  let key = "key_1860";
  let token = "token_1860";
  verifyTypeExists(id, key, token);
});
