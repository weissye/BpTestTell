// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Board:read_only
bthread("crud:Board:read_only", function () {
  let idBoard = 200;
  verifyBoardExists(200);
});

// Story: crud:BoardChecklist:read_only
bthread("crud:BoardChecklist:read_only", function () {
  let idBoard = 210;
  verifyBoardChecklistExists(210);
});

// Story: crud:BoardCard:read_only
bthread("crud:BoardCard:read_only", function () {
  let idBoard = 220;
  let idCard = 220;
  verifyBoardCardExists(220, 220);
});

// Story: crud:BoardLabel:read_only
bthread("crud:BoardLabel:read_only", function () {
  let idBoard = 230;
  let idLabel = 230;
  verifyBoardLabelExists(230, 230);
});

// Story: crud:BoardList:read_only
bthread("crud:BoardList:read_only", function () {
  let idBoard = 240;
  verifyBoardListExists(240);
});

// Story: crud:BoardMembership:read_only
bthread("crud:BoardMembership:read_only", function () {
  let idBoard = 260;
  let idMembership = 260;
  verifyBoardMembershipExists(260, 260);
});

// Story: crud:BoardPowerUp:nondet:1:1
bthread("crud:BoardPowerUp:nondet:1:1", function () {
  let idBoard = 270;
  let powerUp = "powerUp_270";
  addBoardsPowerUpsByIdBoard(270, "powerUp_270");
  tryToAddExistingBoardPowerUp(270, "powerUp_270");
  verifyBoardPowerUpExists(270, "powerUp_270");
  deleteBoardsPowerUpsByIdBoardByPowerUp(270, "powerUp_270");
  tryToDeleteANonExistingBoardPowerUp(270, "powerUp_270");
  verifyBoardPowerUpDoesNotExist(270, "powerUp_270");
});

// Story: crud:BoardPowerUp:nondet:1:2
bthread("crud:BoardPowerUp:nondet:1:2", function () {
  let idBoard = 271;
  let powerUp = "powerUp_271";
  addBoardsPowerUpsByIdBoard(271, "powerUp_271");
  tryToAddExistingBoardPowerUp(271, "powerUp_271");
  verifyBoardPowerUpExists(271, "powerUp_271");
  deleteBoardsPowerUpsByIdBoardByPowerUp(271, "powerUp_271");
  tryToDeleteANonExistingBoardPowerUp(271, "powerUp_271");
  verifyBoardPowerUpDoesNotExist(271, "powerUp_271");
});

// Story: crud:BoardPowerUp:nondet:negative:dup-add
bthread("crud:BoardPowerUp:nondet:negative:dup-add", function () {
  let idBoard = 276;
  let powerUp = "powerUp_276";
  addBoardsPowerUpsByIdBoard(276, "powerUp_276");
  verifyBoardPowerUpExists(276, "powerUp_276");
  tryToAddExistingBoardPowerUp(276, "powerUp_276");
  verifyBoardPowerUpExists(276, "powerUp_276");
});

// Story: monitor:BoardPowerUp:add
bthread("monitor:BoardPowerUp:add", function () {
  while (true) {
    let ev = waitForAnyBoardPowerUpAdded();
    let args = Object.values(ev);
    block(matchDeletedBoardPowerUp.apply(null, args), function () {
      verifyBoardPowerUpExists.apply(null, args);
    });
  }
});

// Story: crud:BoardMyPrefs:read_only
bthread("crud:BoardMyPrefs:read_only", function () {
  let idBoard = 300;
  verifyBoardMyPrefsExists(300);
});

// Story: crud:Member:read_only
bthread("crud:Member:read_only", function () {
  let idMember = 320;
  verifyMemberExists(320);
});

// Story: crud:MemberBoardBackground:nondet:1:1
bthread("crud:MemberBoardBackground:nondet:1:1", function () {
  let idMember = 360;
  let idBoardBackground = 360;
  addMemberBoardBackgroundByIdMember(360, 360);
  tryToAddExistingMemberBoardBackground(360, 360);
  verifyMemberBoardBackgroundExists(360, 360);
  updateMemberBoardBackgroundByIdMemberByIdBoardBackground(360, 360);
  deleteMemberBoardBackgroundByIdMemberByIdBoardBackground(360, 360);
  tryToDeleteANonExistingMemberBoardBackground(360, 360);
  verifyMemberBoardBackgroundDoesNotExist(360, 360);
});

// Story: crud:MemberBoardBackground:nondet:1:2
bthread("crud:MemberBoardBackground:nondet:1:2", function () {
  let idMember = 361;
  let idBoardBackground = 361;
  addMemberBoardBackgroundByIdMember(361, 361);
  tryToAddExistingMemberBoardBackground(361, 361);
  updateMemberBoardBackgroundByIdMemberByIdBoardBackground(361, 361);
  verifyMemberBoardBackgroundExists(361, 361);
  deleteMemberBoardBackgroundByIdMemberByIdBoardBackground(361, 361);
  tryToDeleteANonExistingMemberBoardBackground(361, 361);
  verifyMemberBoardBackgroundDoesNotExist(361, 361);
});

// Story: crud:MemberBoardBackground:nondet:negative:dup-add
bthread("crud:MemberBoardBackground:nondet:negative:dup-add", function () {
  let idMember = 366;
  let idBoardBackground = 366;
  addMemberBoardBackgroundByIdMember(366, 366);
  verifyMemberBoardBackgroundExists(366, 366);
  tryToAddExistingMemberBoardBackground(366, 366);
  verifyMemberBoardBackgroundExists(366, 366);
});

// Story: crud:MemberBoardBackground:nondet:existing:update
bthread("crud:MemberBoardBackground:nondet:existing:update", function () {
  let ev = waitForAnyMemberBoardBackgroundAdded();
  let args = Object.values(ev);
  block(matchDeletedMemberBoardBackground.apply(null, args), function () {
    verifyMemberBoardBackgroundExists.apply(null, args);
    updateMemberBoardBackgroundByIdMemberByIdBoardBackground.apply(null, args);
    verifyMemberBoardBackgroundExists.apply(null, args);
  });
});

// Story: monitor:MemberBoardBackground:add
bthread("monitor:MemberBoardBackground:add", function () {
  while (true) {
    let ev = waitForAnyMemberBoardBackgroundAdded();
    let args = Object.values(ev);
    block(matchDeletedMemberBoardBackground.apply(null, args), function () {
      verifyMemberBoardBackgroundExists.apply(null, args);
    });
  }
});

// Story: crud:MemberBoardStar:nondet:1:1
bthread("crud:MemberBoardStar:nondet:1:1", function () {
  let idMember = 370;
  let idBoardStar = 370;
  addMemberBoardStarByIdMember(370, 370);
  tryToAddExistingMemberBoardStar(370, 370);
  verifyMemberBoardStarExists(370, 370);
  updateMemberBoardStarByIdMemberByIdBoardStar(370, 370);
  deleteMemberBoardStarByIdMemberByIdBoardStar(370, 370);
  tryToDeleteANonExistingMemberBoardStar(370, 370);
  verifyMemberBoardStarDoesNotExist(370, 370);
});

// Story: crud:MemberBoardStar:nondet:1:2
bthread("crud:MemberBoardStar:nondet:1:2", function () {
  let idMember = 371;
  let idBoardStar = 371;
  addMemberBoardStarByIdMember(371, 371);
  tryToAddExistingMemberBoardStar(371, 371);
  updateMemberBoardStarByIdMemberByIdBoardStar(371, 371);
  verifyMemberBoardStarExists(371, 371);
  deleteMemberBoardStarByIdMemberByIdBoardStar(371, 371);
  tryToDeleteANonExistingMemberBoardStar(371, 371);
  verifyMemberBoardStarDoesNotExist(371, 371);
});

// Story: crud:MemberBoardStar:nondet:negative:dup-add
bthread("crud:MemberBoardStar:nondet:negative:dup-add", function () {
  let idMember = 376;
  let idBoardStar = 376;
  addMemberBoardStarByIdMember(376, 376);
  verifyMemberBoardStarExists(376, 376);
  tryToAddExistingMemberBoardStar(376, 376);
  verifyMemberBoardStarExists(376, 376);
});

// Story: crud:MemberBoardStar:nondet:existing:update
bthread("crud:MemberBoardStar:nondet:existing:update", function () {
  let ev = waitForAnyMemberBoardStarAdded();
  let args = Object.values(ev);
  block(matchDeletedMemberBoardStar.apply(null, args), function () {
    verifyMemberBoardStarExists.apply(null, args);
    updateMemberBoardStarByIdMemberByIdBoardStar.apply(null, args);
    verifyMemberBoardStarExists.apply(null, args);
  });
});

// Story: monitor:MemberBoardStar:add
bthread("monitor:MemberBoardStar:add", function () {
  while (true) {
    let ev = waitForAnyMemberBoardStarAdded();
    let args = Object.values(ev);
    block(matchDeletedMemberBoardStar.apply(null, args), function () {
      verifyMemberBoardStarExists.apply(null, args);
    });
  }
});

// Story: crud:MemberBoard:read_only
bthread("crud:MemberBoard:read_only", function () {
  let idMember = 400;
  verifyMemberBoardExists(400);
});

// Story: crud:MemberBoardByFilter:read_only
bthread("crud:MemberBoardByFilter:read_only", function () {
  let idMember = 410;
  let filter = "filter_410";
  verifyMemberBoardByFilterExists(410, "filter_410");
});

// Story: crud:MemberBoardsInvited:read_only
bthread("crud:MemberBoardsInvited:read_only", function () {
  let idMember = 420;
  verifyMemberBoardsInvitedExists(420);
});

// Story: crud:MemberBoardsInvitedByField:read_only
bthread("crud:MemberBoardsInvitedByField:read_only", function () {
  let idMember = 430;
  let field = "field_430";
  verifyMemberBoardsInvitedByFieldExists(430, "field_430");
});

// Story: crud:MemberCard:read_only
bthread("crud:MemberCard:read_only", function () {
  let idMember = 440;
  verifyMemberCardExists(440);
});

// Story: crud:MemberCardByFilter:read_only
bthread("crud:MemberCardByFilter:read_only", function () {
  let idMember = 450;
  let filter = "filter_450";
  verifyMemberCardByFilterExists(450, "filter_450");
});

// Story: crud:MemberCustomBoardBackground:nondet:1:1
bthread("crud:MemberCustomBoardBackground:nondet:1:1", function () {
  let idMember = 460;
  let idBoardBackground = 460;
  addMemberCustomBoardBackgroundByIdMember(460, 460);
  tryToAddExistingMemberCustomBoardBackground(460, 460);
  verifyMemberCustomBoardBackgroundExists(460, 460);
  updateMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(460, 460);
  deleteMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(460, 460);
  tryToDeleteANonExistingMemberCustomBoardBackground(460, 460);
  verifyMemberCustomBoardBackgroundDoesNotExist(460, 460);
});

// Story: crud:MemberCustomBoardBackground:nondet:1:2
bthread("crud:MemberCustomBoardBackground:nondet:1:2", function () {
  let idMember = 461;
  let idBoardBackground = 461;
  addMemberCustomBoardBackgroundByIdMember(461, 461);
  tryToAddExistingMemberCustomBoardBackground(461, 461);
  updateMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(461, 461);
  verifyMemberCustomBoardBackgroundExists(461, 461);
  deleteMemberCustomBoardBackgroundByIdMemberByIdBoardBackground(461, 461);
  tryToDeleteANonExistingMemberCustomBoardBackground(461, 461);
  verifyMemberCustomBoardBackgroundDoesNotExist(461, 461);
});

// Story: crud:MemberCustomBoardBackground:nondet:negative:dup-add
bthread("crud:MemberCustomBoardBackground:nondet:negative:dup-add", function () {
  let idMember = 466;
  let idBoardBackground = 466;
  addMemberCustomBoardBackgroundByIdMember(466, 466);
  verifyMemberCustomBoardBackgroundExists(466, 466);
  tryToAddExistingMemberCustomBoardBackground(466, 466);
  verifyMemberCustomBoardBackgroundExists(466, 466);
});

// Story: crud:MemberCustomBoardBackground:nondet:existing:update
bthread("crud:MemberCustomBoardBackground:nondet:existing:update", function () {
  let ev = waitForAnyMemberCustomBoardBackgroundAdded();
  let args = Object.values(ev);
  block(matchDeletedMemberCustomBoardBackground.apply(null, args), function () {
    verifyMemberCustomBoardBackgroundExists.apply(null, args);
    updateMemberCustomBoardBackgroundByIdMemberByIdBoardBackground.apply(null, args);
    verifyMemberCustomBoardBackgroundExists.apply(null, args);
  });
});

// Story: monitor:MemberCustomBoardBackground:add
bthread("monitor:MemberCustomBoardBackground:add", function () {
  while (true) {
    let ev = waitForAnyMemberCustomBoardBackgroundAdded();
    let args = Object.values(ev);
    block(matchDeletedMemberCustomBoardBackground.apply(null, args), function () {
      verifyMemberCustomBoardBackgroundExists.apply(null, args);
    });
  }
});

// Story: crud:MemberCustomEmoji:read_only
bthread("crud:MemberCustomEmoji:read_only", function () {
  let idMember = 470;
  let idCustomEmoji = 470;
  verifyMemberCustomEmojiExists(470, 470);
});

// Story: crud:MemberCustomSticker:nondet:1:1
bthread("crud:MemberCustomSticker:nondet:1:1", function () {
  let idMember = 480;
  let idCustomSticker = 480;
  addMemberCustomStickerByIdMember(480, 480);
  tryToAddExistingMemberCustomSticker(480, 480);
  verifyMemberCustomStickerExists(480, 480);
  deleteMemberCustomStickerByIdMemberByIdCustomSticker(480, 480);
  tryToDeleteANonExistingMemberCustomSticker(480, 480);
  verifyMemberCustomStickerDoesNotExist(480, 480);
});

// Story: crud:MemberCustomSticker:nondet:1:2
bthread("crud:MemberCustomSticker:nondet:1:2", function () {
  let idMember = 481;
  let idCustomSticker = 481;
  addMemberCustomStickerByIdMember(481, 481);
  tryToAddExistingMemberCustomSticker(481, 481);
  verifyMemberCustomStickerExists(481, 481);
  deleteMemberCustomStickerByIdMemberByIdCustomSticker(481, 481);
  tryToDeleteANonExistingMemberCustomSticker(481, 481);
  verifyMemberCustomStickerDoesNotExist(481, 481);
});

// Story: crud:MemberCustomSticker:nondet:negative:dup-add
bthread("crud:MemberCustomSticker:nondet:negative:dup-add", function () {
  let idMember = 486;
  let idCustomSticker = 486;
  addMemberCustomStickerByIdMember(486, 486);
  verifyMemberCustomStickerExists(486, 486);
  tryToAddExistingMemberCustomSticker(486, 486);
  verifyMemberCustomStickerExists(486, 486);
});

// Story: monitor:MemberCustomSticker:add
bthread("monitor:MemberCustomSticker:add", function () {
  while (true) {
    let ev = waitForAnyMemberCustomStickerAdded();
    let args = Object.values(ev);
    block(matchDeletedMemberCustomSticker.apply(null, args), function () {
      verifyMemberCustomStickerExists.apply(null, args);
    });
  }
});

// Story: crud:MemberDelta:read_only
bthread("crud:MemberDelta:read_only", function () {
  let idMember = 490;
  let tags = "tags_490";
  let ixLastUpdate = "ixLastUpdate_490";
  verifyMemberDeltaExists(490, "tags_490", "ixLastUpdate_490");
});

// Story: crud:MemberNotification:read_only
bthread("crud:MemberNotification:read_only", function () {
  let idMember = 520;
  verifyMemberNotificationExists(520);
});

// Story: crud:MemberNotificationByFilter:read_only
bthread("crud:MemberNotificationByFilter:read_only", function () {
  let idMember = 530;
  let filter = "filter_530";
  verifyMemberNotificationByFilterExists(530, "filter_530");
});

// Story: crud:MemberOrganization:read_only
bthread("crud:MemberOrganization:read_only", function () {
  let idMember = 550;
  verifyMemberOrganizationExists(550);
});

// Story: crud:MemberOrganizationByFilter:read_only
bthread("crud:MemberOrganizationByFilter:read_only", function () {
  let idMember = 560;
  let filter = "filter_560";
  verifyMemberOrganizationByFilterExists(560, "filter_560");
});

// Story: crud:MemberOrganizationsInvited:read_only
bthread("crud:MemberOrganizationsInvited:read_only", function () {
  let idMember = 570;
  verifyMemberOrganizationsInvitedExists(570);
});

// Story: crud:MemberOrganizationsInvitedByField:read_only
bthread("crud:MemberOrganizationsInvitedByField:read_only", function () {
  let idMember = 580;
  let field = "field_580";
  verifyMemberOrganizationsInvitedByFieldExists(580, "field_580");
});

// Story: crud:MemberSavedSearch:nondet:1:1
bthread("crud:MemberSavedSearch:nondet:1:1", function () {
  let idMember = 620;
  let idSavedSearch = 620;
  addMemberSavedSearchByIdMember(620, 620);
  tryToAddExistingMemberSavedSearch(620, 620);
  verifyMemberSavedSearchExists(620, 620);
  updateMemberSavedSearchByIdMemberByIdSavedSearch(620, 620);
  deleteMemberSavedSearchByIdMemberByIdSavedSearch(620, 620);
  tryToDeleteANonExistingMemberSavedSearch(620, 620);
  verifyMemberSavedSearchDoesNotExist(620, 620);
});

// Story: crud:MemberSavedSearch:nondet:1:2
bthread("crud:MemberSavedSearch:nondet:1:2", function () {
  let idMember = 621;
  let idSavedSearch = 621;
  addMemberSavedSearchByIdMember(621, 621);
  tryToAddExistingMemberSavedSearch(621, 621);
  updateMemberSavedSearchByIdMemberByIdSavedSearch(621, 621);
  verifyMemberSavedSearchExists(621, 621);
  deleteMemberSavedSearchByIdMemberByIdSavedSearch(621, 621);
  tryToDeleteANonExistingMemberSavedSearch(621, 621);
  verifyMemberSavedSearchDoesNotExist(621, 621);
});

// Story: crud:MemberSavedSearch:nondet:negative:dup-add
bthread("crud:MemberSavedSearch:nondet:negative:dup-add", function () {
  let idMember = 626;
  let idSavedSearch = 626;
  addMemberSavedSearchByIdMember(626, 626);
  verifyMemberSavedSearchExists(626, 626);
  tryToAddExistingMemberSavedSearch(626, 626);
  verifyMemberSavedSearchExists(626, 626);
});

// Story: crud:MemberSavedSearch:nondet:existing:update
bthread("crud:MemberSavedSearch:nondet:existing:update", function () {
  let ev = waitForAnyMemberSavedSearchAdded();
  let args = Object.values(ev);
  block(matchDeletedMemberSavedSearch.apply(null, args), function () {
    verifyMemberSavedSearchExists.apply(null, args);
    updateMemberSavedSearchByIdMemberByIdSavedSearch.apply(null, args);
    verifyMemberSavedSearchExists.apply(null, args);
  });
});

// Story: monitor:MemberSavedSearch:add
bthread("monitor:MemberSavedSearch:add", function () {
  while (true) {
    let ev = waitForAnyMemberSavedSearchAdded();
    let args = Object.values(ev);
    block(matchDeletedMemberSavedSearch.apply(null, args), function () {
      verifyMemberSavedSearchExists.apply(null, args);
    });
  }
});

// Story: crud:MemberToken:read_only
bthread("crud:MemberToken:read_only", function () {
  let idMember = 660;
  verifyMemberTokenExists(660);
});

// Story: crud:Card:nondet:1:1
bthread("crud:Card:nondet:1:1", function () {
  let key = "key_680";
  let token = "token_680";
  let idCard = 680;
  let actions = "actions_680";
  let actions_entities = "actions_entities_680";
  let actions_display = "actions_display_680";
  let actions_limit = "actions_limit_680";
  let action_fields = "action_fields_680";
  let action_memberCreator_fields = "action_memberCreator_fields_680";
  let attachments = "attachments_680";
  let attachment_fields = "attachment_fields_680";
  let members = "members_680";
  let member_fields = "member_fields_680";
  let membersVoted = "membersVoted_680";
  let memberVoted_fields = "memberVoted_fields_680";
  let checkItemStates = "checkItemStates_680";
  let checkItemState_fields = "checkItemState_fields_680";
  let checklists = "checklists_680";
  let checklist_fields = "checklist_fields_680";
  let board = "board_680";
  let board_fields = "board_fields_680";
  let list = "list_680";
  let list_fields = "list_fields_680";
  let stickers = "stickers_680";
  let sticker_fields = "sticker_fields_680";
  let fields = "fields_680";
  addCards("key_680", "token_680", 680, "actions_680", "actions_entities_680", "actions_display_680", "actions_limit_680", "action_fields_680", "action_memberCreator_fields_680", "attachments_680", "attachment_fields_680", "members_680", "member_fields_680", "membersVoted_680", "memberVoted_fields_680", "checkItemStates_680", "checkItemState_fields_680", "checklists_680", "checklist_fields_680", "board_680", "board_fields_680", "list_680", "list_fields_680", "stickers_680", "sticker_fields_680", "fields_680");
  tryToAddExistingCard("key_680", "token_680", 680, "actions_680", "actions_entities_680", "actions_display_680", "actions_limit_680", "action_fields_680", "action_memberCreator_fields_680", "attachments_680", "attachment_fields_680", "members_680", "member_fields_680", "membersVoted_680", "memberVoted_fields_680", "checkItemStates_680", "checkItemState_fields_680", "checklists_680", "checklist_fields_680", "board_680", "board_fields_680", "list_680", "list_fields_680", "stickers_680", "sticker_fields_680", "fields_680");
  verifyCardExists("key_680", "token_680", 680, "actions_680", "actions_entities_680", "actions_display_680", "actions_limit_680", "action_fields_680", "action_memberCreator_fields_680", "attachments_680", "attachment_fields_680", "members_680", "member_fields_680", "membersVoted_680", "memberVoted_fields_680", "checkItemStates_680", "checkItemState_fields_680", "checklists_680", "checklist_fields_680", "board_680", "board_fields_680", "list_680", "list_fields_680", "stickers_680", "sticker_fields_680", "fields_680");
  updateCardsByIdCard("key_680", "token_680", 680, "actions_680", "actions_entities_680", "actions_display_680", "actions_limit_680", "action_fields_680", "action_memberCreator_fields_680", "attachments_680", "attachment_fields_680", "members_680", "member_fields_680", "membersVoted_680", "memberVoted_fields_680", "checkItemStates_680", "checkItemState_fields_680", "checklists_680", "checklist_fields_680", "board_680", "board_fields_680", "list_680", "list_fields_680", "stickers_680", "sticker_fields_680", "fields_680");
  deleteCardsByIdCard("key_680", "token_680", 680, "actions_680", "actions_entities_680", "actions_display_680", "actions_limit_680", "action_fields_680", "action_memberCreator_fields_680", "attachments_680", "attachment_fields_680", "members_680", "member_fields_680", "membersVoted_680", "memberVoted_fields_680", "checkItemStates_680", "checkItemState_fields_680", "checklists_680", "checklist_fields_680", "board_680", "board_fields_680", "list_680", "list_fields_680", "stickers_680", "sticker_fields_680", "fields_680");
  tryToDeleteANonExistingCard("key_680", "token_680", 680, "actions_680", "actions_entities_680", "actions_display_680", "actions_limit_680", "action_fields_680", "action_memberCreator_fields_680", "attachments_680", "attachment_fields_680", "members_680", "member_fields_680", "membersVoted_680", "memberVoted_fields_680", "checkItemStates_680", "checkItemState_fields_680", "checklists_680", "checklist_fields_680", "board_680", "board_fields_680", "list_680", "list_fields_680", "stickers_680", "sticker_fields_680", "fields_680");
  verifyCardDoesNotExist("key_680", "token_680", 680, "actions_680", "actions_entities_680", "actions_display_680", "actions_limit_680", "action_fields_680", "action_memberCreator_fields_680", "attachments_680", "attachment_fields_680", "members_680", "member_fields_680", "membersVoted_680", "memberVoted_fields_680", "checkItemStates_680", "checkItemState_fields_680", "checklists_680", "checklist_fields_680", "board_680", "board_fields_680", "list_680", "list_fields_680", "stickers_680", "sticker_fields_680", "fields_680");
});

// Story: crud:Card:nondet:1:2
bthread("crud:Card:nondet:1:2", function () {
  let key = "key_681";
  let token = "token_681";
  let idCard = 681;
  let actions = "actions_681";
  let actions_entities = "actions_entities_681";
  let actions_display = "actions_display_681";
  let actions_limit = "actions_limit_681";
  let action_fields = "action_fields_681";
  let action_memberCreator_fields = "action_memberCreator_fields_681";
  let attachments = "attachments_681";
  let attachment_fields = "attachment_fields_681";
  let members = "members_681";
  let member_fields = "member_fields_681";
  let membersVoted = "membersVoted_681";
  let memberVoted_fields = "memberVoted_fields_681";
  let checkItemStates = "checkItemStates_681";
  let checkItemState_fields = "checkItemState_fields_681";
  let checklists = "checklists_681";
  let checklist_fields = "checklist_fields_681";
  let board = "board_681";
  let board_fields = "board_fields_681";
  let list = "list_681";
  let list_fields = "list_fields_681";
  let stickers = "stickers_681";
  let sticker_fields = "sticker_fields_681";
  let fields = "fields_681";
  addCards("key_681", "token_681", 681, "actions_681", "actions_entities_681", "actions_display_681", "actions_limit_681", "action_fields_681", "action_memberCreator_fields_681", "attachments_681", "attachment_fields_681", "members_681", "member_fields_681", "membersVoted_681", "memberVoted_fields_681", "checkItemStates_681", "checkItemState_fields_681", "checklists_681", "checklist_fields_681", "board_681", "board_fields_681", "list_681", "list_fields_681", "stickers_681", "sticker_fields_681", "fields_681");
  tryToAddExistingCard("key_681", "token_681", 681, "actions_681", "actions_entities_681", "actions_display_681", "actions_limit_681", "action_fields_681", "action_memberCreator_fields_681", "attachments_681", "attachment_fields_681", "members_681", "member_fields_681", "membersVoted_681", "memberVoted_fields_681", "checkItemStates_681", "checkItemState_fields_681", "checklists_681", "checklist_fields_681", "board_681", "board_fields_681", "list_681", "list_fields_681", "stickers_681", "sticker_fields_681", "fields_681");
  updateCardsByIdCard("key_681", "token_681", 681, "actions_681", "actions_entities_681", "actions_display_681", "actions_limit_681", "action_fields_681", "action_memberCreator_fields_681", "attachments_681", "attachment_fields_681", "members_681", "member_fields_681", "membersVoted_681", "memberVoted_fields_681", "checkItemStates_681", "checkItemState_fields_681", "checklists_681", "checklist_fields_681", "board_681", "board_fields_681", "list_681", "list_fields_681", "stickers_681", "sticker_fields_681", "fields_681");
  verifyCardExists("key_681", "token_681", 681, "actions_681", "actions_entities_681", "actions_display_681", "actions_limit_681", "action_fields_681", "action_memberCreator_fields_681", "attachments_681", "attachment_fields_681", "members_681", "member_fields_681", "membersVoted_681", "memberVoted_fields_681", "checkItemStates_681", "checkItemState_fields_681", "checklists_681", "checklist_fields_681", "board_681", "board_fields_681", "list_681", "list_fields_681", "stickers_681", "sticker_fields_681", "fields_681");
  deleteCardsByIdCard("key_681", "token_681", 681, "actions_681", "actions_entities_681", "actions_display_681", "actions_limit_681", "action_fields_681", "action_memberCreator_fields_681", "attachments_681", "attachment_fields_681", "members_681", "member_fields_681", "membersVoted_681", "memberVoted_fields_681", "checkItemStates_681", "checkItemState_fields_681", "checklists_681", "checklist_fields_681", "board_681", "board_fields_681", "list_681", "list_fields_681", "stickers_681", "sticker_fields_681", "fields_681");
  tryToDeleteANonExistingCard("key_681", "token_681", 681, "actions_681", "actions_entities_681", "actions_display_681", "actions_limit_681", "action_fields_681", "action_memberCreator_fields_681", "attachments_681", "attachment_fields_681", "members_681", "member_fields_681", "membersVoted_681", "memberVoted_fields_681", "checkItemStates_681", "checkItemState_fields_681", "checklists_681", "checklist_fields_681", "board_681", "board_fields_681", "list_681", "list_fields_681", "stickers_681", "sticker_fields_681", "fields_681");
  verifyCardDoesNotExist("key_681", "token_681", 681, "actions_681", "actions_entities_681", "actions_display_681", "actions_limit_681", "action_fields_681", "action_memberCreator_fields_681", "attachments_681", "attachment_fields_681", "members_681", "member_fields_681", "membersVoted_681", "memberVoted_fields_681", "checkItemStates_681", "checkItemState_fields_681", "checklists_681", "checklist_fields_681", "board_681", "board_fields_681", "list_681", "list_fields_681", "stickers_681", "sticker_fields_681", "fields_681");
});

// Story: crud:Card:nondet:negative:dup-add
bthread("crud:Card:nondet:negative:dup-add", function () {
  let key = "key_686";
  let token = "token_686";
  let idCard = 686;
  let actions = "actions_686";
  let actions_entities = "actions_entities_686";
  let actions_display = "actions_display_686";
  let actions_limit = "actions_limit_686";
  let action_fields = "action_fields_686";
  let action_memberCreator_fields = "action_memberCreator_fields_686";
  let attachments = "attachments_686";
  let attachment_fields = "attachment_fields_686";
  let members = "members_686";
  let member_fields = "member_fields_686";
  let membersVoted = "membersVoted_686";
  let memberVoted_fields = "memberVoted_fields_686";
  let checkItemStates = "checkItemStates_686";
  let checkItemState_fields = "checkItemState_fields_686";
  let checklists = "checklists_686";
  let checklist_fields = "checklist_fields_686";
  let board = "board_686";
  let board_fields = "board_fields_686";
  let list = "list_686";
  let list_fields = "list_fields_686";
  let stickers = "stickers_686";
  let sticker_fields = "sticker_fields_686";
  let fields = "fields_686";
  addCards("key_686", "token_686", 686, "actions_686", "actions_entities_686", "actions_display_686", "actions_limit_686", "action_fields_686", "action_memberCreator_fields_686", "attachments_686", "attachment_fields_686", "members_686", "member_fields_686", "membersVoted_686", "memberVoted_fields_686", "checkItemStates_686", "checkItemState_fields_686", "checklists_686", "checklist_fields_686", "board_686", "board_fields_686", "list_686", "list_fields_686", "stickers_686", "sticker_fields_686", "fields_686");
  verifyCardExists("key_686", "token_686", 686, "actions_686", "actions_entities_686", "actions_display_686", "actions_limit_686", "action_fields_686", "action_memberCreator_fields_686", "attachments_686", "attachment_fields_686", "members_686", "member_fields_686", "membersVoted_686", "memberVoted_fields_686", "checkItemStates_686", "checkItemState_fields_686", "checklists_686", "checklist_fields_686", "board_686", "board_fields_686", "list_686", "list_fields_686", "stickers_686", "sticker_fields_686", "fields_686");
  tryToAddExistingCard("key_686", "token_686", 686, "actions_686", "actions_entities_686", "actions_display_686", "actions_limit_686", "action_fields_686", "action_memberCreator_fields_686", "attachments_686", "attachment_fields_686", "members_686", "member_fields_686", "membersVoted_686", "memberVoted_fields_686", "checkItemStates_686", "checkItemState_fields_686", "checklists_686", "checklist_fields_686", "board_686", "board_fields_686", "list_686", "list_fields_686", "stickers_686", "sticker_fields_686", "fields_686");
  verifyCardExists("key_686", "token_686", 686, "actions_686", "actions_entities_686", "actions_display_686", "actions_limit_686", "action_fields_686", "action_memberCreator_fields_686", "attachments_686", "attachment_fields_686", "members_686", "member_fields_686", "membersVoted_686", "memberVoted_fields_686", "checkItemStates_686", "checkItemState_fields_686", "checklists_686", "checklist_fields_686", "board_686", "board_fields_686", "list_686", "list_fields_686", "stickers_686", "sticker_fields_686", "fields_686");
});

// Story: crud:Card:nondet:existing:update
bthread("crud:Card:nondet:existing:update", function () {
  let ev = waitForAnyCardAdded();
  let args = Object.values(ev);
  block(matchDeletedCard.apply(null, args), function () {
    verifyCardExists.apply(null, args);
    updateCardsByIdCard.apply(null, args);
    verifyCardExists.apply(null, args);
  });
});

// Story: monitor:Card:add
bthread("monitor:Card:add", function () {
  while (true) {
    let ev = waitForAnyCardAdded();
    let args = Object.values(ev);
    block(matchDeletedCard.apply(null, args), function () {
      verifyCardExists.apply(null, args);
    });
  }
});

// Story: crud:CardActionComment:nondet:1:1
bthread("crud:CardActionComment:nondet:1:1", function () {
  let idCard = 690;
  let key = "key_690";
  let token = "token_690";
  let idAction = 690;
  addCardsActionsCommentsByIdCard(690, "key_690", "token_690", 690);
  tryToAddExistingCardActionComment(690, "key_690", "token_690", 690);
  verifyCardActionCommentExists(690, "key_690", "token_690", 690);
  updateCardsActionsCommentsByIdCardByIdAction(690, "key_690", "token_690", 690);
  deleteCardsActionsCommentsByIdCardByIdAction(690, "key_690", "token_690", 690);
  tryToDeleteANonExistingCardActionComment(690, "key_690", "token_690", 690);
  verifyCardActionCommentDoesNotExist(690, "key_690", "token_690", 690);
});

// Story: crud:CardActionComment:nondet:1:2
bthread("crud:CardActionComment:nondet:1:2", function () {
  let idCard = 691;
  let key = "key_691";
  let token = "token_691";
  let idAction = 691;
  addCardsActionsCommentsByIdCard(691, "key_691", "token_691", 691);
  tryToAddExistingCardActionComment(691, "key_691", "token_691", 691);
  updateCardsActionsCommentsByIdCardByIdAction(691, "key_691", "token_691", 691);
  verifyCardActionCommentExists(691, "key_691", "token_691", 691);
  deleteCardsActionsCommentsByIdCardByIdAction(691, "key_691", "token_691", 691);
  tryToDeleteANonExistingCardActionComment(691, "key_691", "token_691", 691);
  verifyCardActionCommentDoesNotExist(691, "key_691", "token_691", 691);
});

// Story: crud:CardActionComment:nondet:negative:dup-add
bthread("crud:CardActionComment:nondet:negative:dup-add", function () {
  let idCard = 696;
  let key = "key_696";
  let token = "token_696";
  let idAction = 696;
  addCardsActionsCommentsByIdCard(696, "key_696", "token_696", 696);
  verifyCardActionCommentExists(696, "key_696", "token_696", 696);
  tryToAddExistingCardActionComment(696, "key_696", "token_696", 696);
  verifyCardActionCommentExists(696, "key_696", "token_696", 696);
});

// Story: crud:CardActionComment:nondet:existing:update
bthread("crud:CardActionComment:nondet:existing:update", function () {
  let ev = waitForAnyCardActionCommentAdded();
  let args = Object.values(ev);
  block(matchDeletedCardActionComment.apply(null, args), function () {
    verifyCardActionCommentExists.apply(null, args);
    updateCardsActionsCommentsByIdCardByIdAction.apply(null, args);
    verifyCardActionCommentExists.apply(null, args);
  });
});

// Story: monitor:CardActionComment:add
bthread("monitor:CardActionComment:add", function () {
  while (true) {
    let ev = waitForAnyCardActionCommentAdded();
    let args = Object.values(ev);
    block(matchDeletedCardActionComment.apply(null, args), function () {
      verifyCardActionCommentExists.apply(null, args);
    });
  }
});

// Story: crud:CardAttachment:nondet:1:1
bthread("crud:CardAttachment:nondet:1:1", function () {
  let idCard = 700;
  let key = "key_700";
  let token = "token_700";
  let idAttachment = 700;
  let fields = "fields_700";
  let filter = "filter_700";
  addCardsAttachmentsByIdCard(700, "key_700", "token_700", 700, "fields_700", "filter_700");
  tryToAddExistingCardAttachment(700, "key_700", "token_700", 700, "fields_700", "filter_700");
  verifyCardAttachmentExists(700, "key_700", "token_700", 700, "fields_700", "filter_700");
  deleteCardsAttachmentsByIdCardByIdAttachment(700, "key_700", "token_700", 700, "fields_700", "filter_700");
  tryToDeleteANonExistingCardAttachment(700, "key_700", "token_700", 700, "fields_700", "filter_700");
  verifyCardAttachmentDoesNotExist(700, "key_700", "token_700", 700, "fields_700", "filter_700");
});

// Story: crud:CardAttachment:nondet:1:2
bthread("crud:CardAttachment:nondet:1:2", function () {
  let idCard = 701;
  let key = "key_701";
  let token = "token_701";
  let idAttachment = 701;
  let fields = "fields_701";
  let filter = "filter_701";
  addCardsAttachmentsByIdCard(701, "key_701", "token_701", 701, "fields_701", "filter_701");
  tryToAddExistingCardAttachment(701, "key_701", "token_701", 701, "fields_701", "filter_701");
  verifyCardAttachmentExists(701, "key_701", "token_701", 701, "fields_701", "filter_701");
  deleteCardsAttachmentsByIdCardByIdAttachment(701, "key_701", "token_701", 701, "fields_701", "filter_701");
  tryToDeleteANonExistingCardAttachment(701, "key_701", "token_701", 701, "fields_701", "filter_701");
  verifyCardAttachmentDoesNotExist(701, "key_701", "token_701", 701, "fields_701", "filter_701");
});

// Story: crud:CardAttachment:nondet:negative:dup-add
bthread("crud:CardAttachment:nondet:negative:dup-add", function () {
  let idCard = 706;
  let key = "key_706";
  let token = "token_706";
  let idAttachment = 706;
  let fields = "fields_706";
  let filter = "filter_706";
  addCardsAttachmentsByIdCard(706, "key_706", "token_706", 706, "fields_706", "filter_706");
  verifyCardAttachmentExists(706, "key_706", "token_706", 706, "fields_706", "filter_706");
  tryToAddExistingCardAttachment(706, "key_706", "token_706", 706, "fields_706", "filter_706");
  verifyCardAttachmentExists(706, "key_706", "token_706", 706, "fields_706", "filter_706");
});

// Story: monitor:CardAttachment:add
bthread("monitor:CardAttachment:add", function () {
  while (true) {
    let ev = waitForAnyCardAttachmentAdded();
    let args = Object.values(ev);
    block(matchDeletedCardAttachment.apply(null, args), function () {
      verifyCardAttachmentExists.apply(null, args);
    });
  }
});

// Story: crud:CardBoard:read_only
bthread("crud:CardBoard:read_only", function () {
  let idCard = 710;
  let fields = "fields_710";
  let key = "key_710";
  let token = "token_710";
  let field = "field_710";
  verifyCardBoardExists(710, "fields_710", "key_710", "token_710", "field_710");
});

// Story: crud:CardCheckItemState:read_only
bthread("crud:CardCheckItemState:read_only", function () {
  let idCard = 720;
  let fields = "fields_720";
  let key = "key_720";
  let token = "token_720";
  verifyCardCheckItemStateExists(720, "fields_720", "key_720", "token_720");
});

// Story: crud:CardChecklistCheckItem:nondet:1:1
bthread("crud:CardChecklistCheckItem:nondet:1:1", function () {
  let idCard = 730;
  let idChecklist = 730;
  let key = "key_730";
  let token = "token_730";
  let idCheckItem = 730;
  let idChecklistCurrent = 730;
  addCardsChecklistCheckItemByIdCardByIdChecklist(730, 730, "key_730", "token_730", 730, 730);
  tryToAddExistingCardChecklistCheckItem(730, 730, "key_730", "token_730", 730, 730);
  verifyCardChecklistCheckItemExists(730, 730, "key_730", "token_730", 730, 730);
  updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(730, 730, "key_730", "token_730", 730, 730);
  deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(730, 730, "key_730", "token_730", 730, 730);
  tryToDeleteANonExistingCardChecklistCheckItem(730, 730, "key_730", "token_730", 730, 730);
  verifyCardChecklistCheckItemDoesNotExist(730, 730, "key_730", "token_730", 730, 730);
});

// Story: crud:CardChecklistCheckItem:nondet:1:2
bthread("crud:CardChecklistCheckItem:nondet:1:2", function () {
  let idCard = 731;
  let idChecklist = 731;
  let key = "key_731";
  let token = "token_731";
  let idCheckItem = 731;
  let idChecklistCurrent = 731;
  addCardsChecklistCheckItemByIdCardByIdChecklist(731, 731, "key_731", "token_731", 731, 731);
  tryToAddExistingCardChecklistCheckItem(731, 731, "key_731", "token_731", 731, 731);
  updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(731, 731, "key_731", "token_731", 731, 731);
  verifyCardChecklistCheckItemExists(731, 731, "key_731", "token_731", 731, 731);
  deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(731, 731, "key_731", "token_731", 731, 731);
  tryToDeleteANonExistingCardChecklistCheckItem(731, 731, "key_731", "token_731", 731, 731);
  verifyCardChecklistCheckItemDoesNotExist(731, 731, "key_731", "token_731", 731, 731);
});

// Story: crud:CardChecklistCheckItem:nondet:negative:dup-add
bthread("crud:CardChecklistCheckItem:nondet:negative:dup-add", function () {
  let idCard = 736;
  let idChecklist = 736;
  let key = "key_736";
  let token = "token_736";
  let idCheckItem = 736;
  let idChecklistCurrent = 736;
  addCardsChecklistCheckItemByIdCardByIdChecklist(736, 736, "key_736", "token_736", 736, 736);
  verifyCardChecklistCheckItemExists(736, 736, "key_736", "token_736", 736, 736);
  tryToAddExistingCardChecklistCheckItem(736, 736, "key_736", "token_736", 736, 736);
  verifyCardChecklistCheckItemExists(736, 736, "key_736", "token_736", 736, 736);
});

// Story: crud:CardChecklistCheckItem:nondet:existing:update
bthread("crud:CardChecklistCheckItem:nondet:existing:update", function () {
  let ev = waitForAnyCardChecklistCheckItemAdded();
  let args = Object.values(ev);
  block(matchDeletedCardChecklistCheckItem.apply(null, args), function () {
    verifyCardChecklistCheckItemExists.apply(null, args);
    updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem.apply(null, args);
    verifyCardChecklistCheckItemExists.apply(null, args);
  });
});

// Story: monitor:CardChecklistCheckItem:add
bthread("monitor:CardChecklistCheckItem:add", function () {
  while (true) {
    let ev = waitForAnyCardChecklistCheckItemAdded();
    let args = Object.values(ev);
    block(matchDeletedCardChecklistCheckItem.apply(null, args), function () {
      verifyCardChecklistCheckItemExists.apply(null, args);
    });
  }
});

// Story: crud:CardChecklist:nondet:1:1
bthread("crud:CardChecklist:nondet:1:1", function () {
  let idCard = 740;
  let key = "key_740";
  let token = "token_740";
  let idChecklist = 740;
  let cards = "cards_740";
  let card_fields = "card_fields_740";
  let checkItems = "checkItems_740";
  let checkItem_fields = "checkItem_fields_740";
  let filter = "filter_740";
  let fields = "fields_740";
  addCardsChecklistsByIdCard(740, "key_740", "token_740", 740, "cards_740", "card_fields_740", "checkItems_740", "checkItem_fields_740", "filter_740", "fields_740");
  tryToAddExistingCardChecklist(740, "key_740", "token_740", 740, "cards_740", "card_fields_740", "checkItems_740", "checkItem_fields_740", "filter_740", "fields_740");
  verifyCardChecklistExists(740, "key_740", "token_740", 740, "cards_740", "card_fields_740", "checkItems_740", "checkItem_fields_740", "filter_740", "fields_740");
  deleteCardsChecklistsByIdCardByIdChecklist(740, "key_740", "token_740", 740, "cards_740", "card_fields_740", "checkItems_740", "checkItem_fields_740", "filter_740", "fields_740");
  tryToDeleteANonExistingCardChecklist(740, "key_740", "token_740", 740, "cards_740", "card_fields_740", "checkItems_740", "checkItem_fields_740", "filter_740", "fields_740");
  verifyCardChecklistDoesNotExist(740, "key_740", "token_740", 740, "cards_740", "card_fields_740", "checkItems_740", "checkItem_fields_740", "filter_740", "fields_740");
});

// Story: crud:CardChecklist:nondet:1:2
bthread("crud:CardChecklist:nondet:1:2", function () {
  let idCard = 741;
  let key = "key_741";
  let token = "token_741";
  let idChecklist = 741;
  let cards = "cards_741";
  let card_fields = "card_fields_741";
  let checkItems = "checkItems_741";
  let checkItem_fields = "checkItem_fields_741";
  let filter = "filter_741";
  let fields = "fields_741";
  addCardsChecklistsByIdCard(741, "key_741", "token_741", 741, "cards_741", "card_fields_741", "checkItems_741", "checkItem_fields_741", "filter_741", "fields_741");
  tryToAddExistingCardChecklist(741, "key_741", "token_741", 741, "cards_741", "card_fields_741", "checkItems_741", "checkItem_fields_741", "filter_741", "fields_741");
  verifyCardChecklistExists(741, "key_741", "token_741", 741, "cards_741", "card_fields_741", "checkItems_741", "checkItem_fields_741", "filter_741", "fields_741");
  deleteCardsChecklistsByIdCardByIdChecklist(741, "key_741", "token_741", 741, "cards_741", "card_fields_741", "checkItems_741", "checkItem_fields_741", "filter_741", "fields_741");
  tryToDeleteANonExistingCardChecklist(741, "key_741", "token_741", 741, "cards_741", "card_fields_741", "checkItems_741", "checkItem_fields_741", "filter_741", "fields_741");
  verifyCardChecklistDoesNotExist(741, "key_741", "token_741", 741, "cards_741", "card_fields_741", "checkItems_741", "checkItem_fields_741", "filter_741", "fields_741");
});

// Story: crud:CardChecklist:nondet:negative:dup-add
bthread("crud:CardChecklist:nondet:negative:dup-add", function () {
  let idCard = 746;
  let key = "key_746";
  let token = "token_746";
  let idChecklist = 746;
  let cards = "cards_746";
  let card_fields = "card_fields_746";
  let checkItems = "checkItems_746";
  let checkItem_fields = "checkItem_fields_746";
  let filter = "filter_746";
  let fields = "fields_746";
  addCardsChecklistsByIdCard(746, "key_746", "token_746", 746, "cards_746", "card_fields_746", "checkItems_746", "checkItem_fields_746", "filter_746", "fields_746");
  verifyCardChecklistExists(746, "key_746", "token_746", 746, "cards_746", "card_fields_746", "checkItems_746", "checkItem_fields_746", "filter_746", "fields_746");
  tryToAddExistingCardChecklist(746, "key_746", "token_746", 746, "cards_746", "card_fields_746", "checkItems_746", "checkItem_fields_746", "filter_746", "fields_746");
  verifyCardChecklistExists(746, "key_746", "token_746", 746, "cards_746", "card_fields_746", "checkItems_746", "checkItem_fields_746", "filter_746", "fields_746");
});

// Story: monitor:CardChecklist:add
bthread("monitor:CardChecklist:add", function () {
  while (true) {
    let ev = waitForAnyCardChecklistAdded();
    let args = Object.values(ev);
    block(matchDeletedCardChecklist.apply(null, args), function () {
      verifyCardChecklistExists.apply(null, args);
    });
  }
});

// Story: crud:CardIdLabels:nondet:1:1
bthread("crud:CardIdLabels:nondet:1:1", function () {
  let idCard = 800;
  let key = "key_800";
  let token = "token_800";
  let idLabel = 800;
  let color = "color_800";
  addCardsIdLabelsByIdCard(800, "key_800", "token_800", 800, "color_800");
  tryToAddExistingCardIdLabels(800, "key_800", "token_800", 800, "color_800");
  verifyCardIdLabelsExists(800, "key_800", "token_800", 800, "color_800");
  updateCardsLabelsByIdCard(800, "key_800", "token_800", 800, "color_800");
  deleteCardsIdLabelsByIdCardByIdLabel(800, "key_800", "token_800", 800, "color_800");
  tryToDeleteANonExistingCardIdLabels(800, "key_800", "token_800", 800, "color_800");
  verifyCardIdLabelsDoesNotExist(800, "key_800", "token_800", 800, "color_800");
});

// Story: crud:CardIdLabels:nondet:1:2
bthread("crud:CardIdLabels:nondet:1:2", function () {
  let idCard = 801;
  let key = "key_801";
  let token = "token_801";
  let idLabel = 801;
  let color = "color_801";
  addCardsIdLabelsByIdCard(801, "key_801", "token_801", 801, "color_801");
  tryToAddExistingCardIdLabels(801, "key_801", "token_801", 801, "color_801");
  updateCardsLabelsByIdCard(801, "key_801", "token_801", 801, "color_801");
  verifyCardIdLabelsExists(801, "key_801", "token_801", 801, "color_801");
  deleteCardsIdLabelsByIdCardByIdLabel(801, "key_801", "token_801", 801, "color_801");
  tryToDeleteANonExistingCardIdLabels(801, "key_801", "token_801", 801, "color_801");
  verifyCardIdLabelsDoesNotExist(801, "key_801", "token_801", 801, "color_801");
});

// Story: crud:CardIdLabels:nondet:negative:dup-add
bthread("crud:CardIdLabels:nondet:negative:dup-add", function () {
  let idCard = 806;
  let key = "key_806";
  let token = "token_806";
  let idLabel = 806;
  let color = "color_806";
  addCardsIdLabelsByIdCard(806, "key_806", "token_806", 806, "color_806");
  verifyCardIdLabelsExists(806, "key_806", "token_806", 806, "color_806");
  tryToAddExistingCardIdLabels(806, "key_806", "token_806", 806, "color_806");
  verifyCardIdLabelsExists(806, "key_806", "token_806", 806, "color_806");
});

// Story: crud:CardIdLabels:nondet:existing:update
bthread("crud:CardIdLabels:nondet:existing:update", function () {
  let ev = waitForAnyCardIdLabelsAdded();
  let args = Object.values(ev);
  block(matchDeletedCardIdLabels.apply(null, args), function () {
    verifyCardIdLabelsExists.apply(null, args);
    updateCardsLabelsByIdCard.apply(null, args);
    verifyCardIdLabelsExists.apply(null, args);
  });
});

// Story: monitor:CardIdLabels:add
bthread("monitor:CardIdLabels:add", function () {
  while (true) {
    let ev = waitForAnyCardIdLabelsAdded();
    let args = Object.values(ev);
    block(matchDeletedCardIdLabels.apply(null, args), function () {
      verifyCardIdLabelsExists.apply(null, args);
    });
  }
});

// Story: crud:CardIdMembers:nondet:1:1
bthread("crud:CardIdMembers:nondet:1:1", function () {
  let idCard = 820;
  let key = "key_820";
  let token = "token_820";
  let idMember = 820;
  addCardsIdMembersByIdCard(820, "key_820", "token_820", 820);
  tryToAddExistingCardIdMembers(820, "key_820", "token_820", 820);
  verifyCardIdMembersExists(820, "key_820", "token_820", 820);
  updateCardsIdMembersByIdCard(820, "key_820", "token_820", 820);
  deleteCardsIdMembersByIdCardByIdMember(820, "key_820", "token_820", 820);
  tryToDeleteANonExistingCardIdMembers(820, "key_820", "token_820", 820);
  verifyCardIdMembersDoesNotExist(820, "key_820", "token_820", 820);
});

// Story: crud:CardIdMembers:nondet:1:2
bthread("crud:CardIdMembers:nondet:1:2", function () {
  let idCard = 821;
  let key = "key_821";
  let token = "token_821";
  let idMember = 821;
  addCardsIdMembersByIdCard(821, "key_821", "token_821", 821);
  tryToAddExistingCardIdMembers(821, "key_821", "token_821", 821);
  updateCardsIdMembersByIdCard(821, "key_821", "token_821", 821);
  verifyCardIdMembersExists(821, "key_821", "token_821", 821);
  deleteCardsIdMembersByIdCardByIdMember(821, "key_821", "token_821", 821);
  tryToDeleteANonExistingCardIdMembers(821, "key_821", "token_821", 821);
  verifyCardIdMembersDoesNotExist(821, "key_821", "token_821", 821);
});

// Story: crud:CardIdMembers:nondet:negative:dup-add
bthread("crud:CardIdMembers:nondet:negative:dup-add", function () {
  let idCard = 826;
  let key = "key_826";
  let token = "token_826";
  let idMember = 826;
  addCardsIdMembersByIdCard(826, "key_826", "token_826", 826);
  verifyCardIdMembersExists(826, "key_826", "token_826", 826);
  tryToAddExistingCardIdMembers(826, "key_826", "token_826", 826);
  verifyCardIdMembersExists(826, "key_826", "token_826", 826);
});

// Story: crud:CardIdMembers:nondet:existing:update
bthread("crud:CardIdMembers:nondet:existing:update", function () {
  let ev = waitForAnyCardIdMembersAdded();
  let args = Object.values(ev);
  block(matchDeletedCardIdMembers.apply(null, args), function () {
    verifyCardIdMembersExists.apply(null, args);
    updateCardsIdMembersByIdCard.apply(null, args);
    verifyCardIdMembersExists.apply(null, args);
  });
});

// Story: monitor:CardIdMembers:add
bthread("monitor:CardIdMembers:add", function () {
  while (true) {
    let ev = waitForAnyCardIdMembersAdded();
    let args = Object.values(ev);
    block(matchDeletedCardIdMembers.apply(null, args), function () {
      verifyCardIdMembersExists.apply(null, args);
    });
  }
});

// Story: crud:CardList:read_only
bthread("crud:CardList:read_only", function () {
  let idCard = 840;
  let fields = "fields_840";
  let key = "key_840";
  let token = "token_840";
  let field = "field_840";
  verifyCardListExists(840, "fields_840", "key_840", "token_840", "field_840");
});

// Story: crud:CardMember:read_only
bthread("crud:CardMember:read_only", function () {
  let idCard = 860;
  let fields = "fields_860";
  let key = "key_860";
  let token = "token_860";
  verifyCardMemberExists(860, "fields_860", "key_860", "token_860");
});

// Story: crud:CardMemberVoted:nondet:1:1
bthread("crud:CardMemberVoted:nondet:1:1", function () {
  let idCard = 870;
  let fields = "fields_870";
  let key = "key_870";
  let token = "token_870";
  let idMember = 870;
  addCardsMembersVotedByIdCard(870, "fields_870", "key_870", "token_870", 870);
  tryToAddExistingCardMemberVoted(870, "fields_870", "key_870", "token_870", 870);
  verifyCardMemberVotedExists(870, "fields_870", "key_870", "token_870", 870);
  deleteCardsMembersVotedByIdCardByIdMember(870, "fields_870", "key_870", "token_870", 870);
  tryToDeleteANonExistingCardMemberVoted(870, "fields_870", "key_870", "token_870", 870);
  verifyCardMemberVotedDoesNotExist(870, "fields_870", "key_870", "token_870", 870);
});

// Story: crud:CardMemberVoted:nondet:1:2
bthread("crud:CardMemberVoted:nondet:1:2", function () {
  let idCard = 871;
  let fields = "fields_871";
  let key = "key_871";
  let token = "token_871";
  let idMember = 871;
  addCardsMembersVotedByIdCard(871, "fields_871", "key_871", "token_871", 871);
  tryToAddExistingCardMemberVoted(871, "fields_871", "key_871", "token_871", 871);
  verifyCardMemberVotedExists(871, "fields_871", "key_871", "token_871", 871);
  deleteCardsMembersVotedByIdCardByIdMember(871, "fields_871", "key_871", "token_871", 871);
  tryToDeleteANonExistingCardMemberVoted(871, "fields_871", "key_871", "token_871", 871);
  verifyCardMemberVotedDoesNotExist(871, "fields_871", "key_871", "token_871", 871);
});

// Story: crud:CardMemberVoted:nondet:negative:dup-add
bthread("crud:CardMemberVoted:nondet:negative:dup-add", function () {
  let idCard = 876;
  let fields = "fields_876";
  let key = "key_876";
  let token = "token_876";
  let idMember = 876;
  addCardsMembersVotedByIdCard(876, "fields_876", "key_876", "token_876", 876);
  verifyCardMemberVotedExists(876, "fields_876", "key_876", "token_876", 876);
  tryToAddExistingCardMemberVoted(876, "fields_876", "key_876", "token_876", 876);
  verifyCardMemberVotedExists(876, "fields_876", "key_876", "token_876", 876);
});

// Story: monitor:CardMemberVoted:add
bthread("monitor:CardMemberVoted:add", function () {
  while (true) {
    let ev = waitForAnyCardMemberVotedAdded();
    let args = Object.values(ev);
    block(matchDeletedCardMemberVoted.apply(null, args), function () {
      verifyCardMemberVotedExists.apply(null, args);
    });
  }
});

// Story: crud:CardSticker:nondet:1:1
bthread("crud:CardSticker:nondet:1:1", function () {
  let idCard = 900;
  let key = "key_900";
  let token = "token_900";
  let idSticker = 900;
  let fields = "fields_900";
  addCardsStickersByIdCard(900, "key_900", "token_900", 900, "fields_900");
  tryToAddExistingCardSticker(900, "key_900", "token_900", 900, "fields_900");
  verifyCardStickerExists(900, "key_900", "token_900", 900, "fields_900");
  updateCardsStickersByIdCardByIdSticker(900, "key_900", "token_900", 900, "fields_900");
  deleteCardsStickersByIdCardByIdSticker(900, "key_900", "token_900", 900, "fields_900");
  tryToDeleteANonExistingCardSticker(900, "key_900", "token_900", 900, "fields_900");
  verifyCardStickerDoesNotExist(900, "key_900", "token_900", 900, "fields_900");
});

// Story: crud:CardSticker:nondet:1:2
bthread("crud:CardSticker:nondet:1:2", function () {
  let idCard = 901;
  let key = "key_901";
  let token = "token_901";
  let idSticker = 901;
  let fields = "fields_901";
  addCardsStickersByIdCard(901, "key_901", "token_901", 901, "fields_901");
  tryToAddExistingCardSticker(901, "key_901", "token_901", 901, "fields_901");
  updateCardsStickersByIdCardByIdSticker(901, "key_901", "token_901", 901, "fields_901");
  verifyCardStickerExists(901, "key_901", "token_901", 901, "fields_901");
  deleteCardsStickersByIdCardByIdSticker(901, "key_901", "token_901", 901, "fields_901");
  tryToDeleteANonExistingCardSticker(901, "key_901", "token_901", 901, "fields_901");
  verifyCardStickerDoesNotExist(901, "key_901", "token_901", 901, "fields_901");
});

// Story: crud:CardSticker:nondet:negative:dup-add
bthread("crud:CardSticker:nondet:negative:dup-add", function () {
  let idCard = 906;
  let key = "key_906";
  let token = "token_906";
  let idSticker = 906;
  let fields = "fields_906";
  addCardsStickersByIdCard(906, "key_906", "token_906", 906, "fields_906");
  verifyCardStickerExists(906, "key_906", "token_906", 906, "fields_906");
  tryToAddExistingCardSticker(906, "key_906", "token_906", 906, "fields_906");
  verifyCardStickerExists(906, "key_906", "token_906", 906, "fields_906");
});

// Story: crud:CardSticker:nondet:existing:update
bthread("crud:CardSticker:nondet:existing:update", function () {
  let ev = waitForAnyCardStickerAdded();
  let args = Object.values(ev);
  block(matchDeletedCardSticker.apply(null, args), function () {
    verifyCardStickerExists.apply(null, args);
    updateCardsStickersByIdCardByIdSticker.apply(null, args);
    verifyCardStickerExists.apply(null, args);
  });
});

// Story: monitor:CardSticker:add
bthread("monitor:CardSticker:add", function () {
  while (true) {
    let ev = waitForAnyCardStickerAdded();
    let args = Object.values(ev);
    block(matchDeletedCardSticker.apply(null, args), function () {
      verifyCardStickerExists.apply(null, args);
    });
  }
});

// Story: crud:Organization:nondet:1:1
bthread("crud:Organization:nondet:1:1", function () {
  let idOrg = 920;
  addOrganizations(920);
  tryToAddExistingOrganization(920);
  verifyOrganizationExists(920);
  updateOrganizationsByIdOrg(920);
  deleteOrganizationsByIdOrg(920);
  tryToDeleteANonExistingOrganization(920);
  verifyOrganizationDoesNotExist(920);
});

// Story: crud:Organization:nondet:1:2
bthread("crud:Organization:nondet:1:2", function () {
  let idOrg = 921;
  addOrganizations(921);
  tryToAddExistingOrganization(921);
  updateOrganizationsByIdOrg(921);
  verifyOrganizationExists(921);
  deleteOrganizationsByIdOrg(921);
  tryToDeleteANonExistingOrganization(921);
  verifyOrganizationDoesNotExist(921);
});

// Story: crud:Organization:nondet:negative:dup-add
bthread("crud:Organization:nondet:negative:dup-add", function () {
  let idOrg = 926;
  addOrganizations(926);
  verifyOrganizationExists(926);
  tryToAddExistingOrganization(926);
  verifyOrganizationExists(926);
});

// Story: crud:Organization:nondet:existing:update
bthread("crud:Organization:nondet:existing:update", function () {
  let ev = waitForAnyOrganizationAdded();
  let args = Object.values(ev);
  block(matchDeletedOrganization.apply(null, args), function () {
    verifyOrganizationExists.apply(null, args);
    updateOrganizationsByIdOrg.apply(null, args);
    verifyOrganizationExists.apply(null, args);
  });
});

// Story: monitor:Organization:add
bthread("monitor:Organization:add", function () {
  while (true) {
    let ev = waitForAnyOrganizationAdded();
    let args = Object.values(ev);
    block(matchDeletedOrganization.apply(null, args), function () {
      verifyOrganizationExists.apply(null, args);
    });
  }
});

// Story: crud:OrganizationLogo:nondet:1:1
bthread("crud:OrganizationLogo:nondet:1:1", function () {
  let idOrg = 930;
  addOrganizationsLogoByIdOrg(930);
  tryToAddExistingOrganizationLogo(930);
  verifyOrganizationLogoExists(930);
  deleteOrganizationsLogoByIdOrg(930);
  tryToDeleteANonExistingOrganizationLogo(930);
  verifyOrganizationLogoDoesNotExist(930);
});

// Story: crud:OrganizationLogo:nondet:1:2
bthread("crud:OrganizationLogo:nondet:1:2", function () {
  let idOrg = 931;
  addOrganizationsLogoByIdOrg(931);
  tryToAddExistingOrganizationLogo(931);
  verifyOrganizationLogoExists(931);
  deleteOrganizationsLogoByIdOrg(931);
  tryToDeleteANonExistingOrganizationLogo(931);
  verifyOrganizationLogoDoesNotExist(931);
});

// Story: crud:OrganizationLogo:nondet:negative:dup-add
bthread("crud:OrganizationLogo:nondet:negative:dup-add", function () {
  let idOrg = 936;
  addOrganizationsLogoByIdOrg(936);
  verifyOrganizationLogoExists(936);
  tryToAddExistingOrganizationLogo(936);
  verifyOrganizationLogoExists(936);
});

// Story: monitor:OrganizationLogo:add
bthread("monitor:OrganizationLogo:add", function () {
  while (true) {
    let ev = waitForAnyOrganizationLogoAdded();
    let args = Object.values(ev);
    block(matchDeletedOrganizationLogo.apply(null, args), function () {
      verifyOrganizationLogoExists.apply(null, args);
    });
  }
});

// Story: crud:OrganizationMembers:read_only
bthread("crud:OrganizationMembers:read_only", function () {
  let idOrg = 940;
  verifyOrganizationMembersExists(940);
});

// Story: crud:OrganizationMembersInvited:read_only
bthread("crud:OrganizationMembersInvited:read_only", function () {
  let idOrg = 970;
  verifyOrganizationMembersInvitedExists(970);
});

// Story: crud:OrganizationMemberships:read_only
bthread("crud:OrganizationMemberships:read_only", function () {
  let idOrg = 980;
  verifyOrganizationMembershipsExists(980);
});

// Story: crud:OrganizationMembership:read_only
bthread("crud:OrganizationMembership:read_only", function () {
  let idOrg = 990;
  let idMembership = 990;
  verifyOrganizationMembershipExists(990, 990);
});

// Story: crud:OrganizationBoards:read_only
bthread("crud:OrganizationBoards:read_only", function () {
  let idOrg = 1000;
  verifyOrganizationBoardsExists(1000);
});

// Story: crud:OrganizationBoardFilter:read_only
bthread("crud:OrganizationBoardFilter:read_only", function () {
  let idOrg = 1010;
  let filter = "filter_1010";
  verifyOrganizationBoardFilterExists(1010, "filter_1010");
});

// Story: crud:OrganizationDeltas:read_only
bthread("crud:OrganizationDeltas:read_only", function () {
  let idOrg = 1020;
  let tags = "tags_1020";
  let ixLastUpdate = "ixLastUpdate_1020";
  verifyOrganizationDeltasExists(1020, "tags_1020", "ixLastUpdate_1020");
});

// Story: crud:Notification:read_only
bthread("crud:Notification:read_only", function () {
  let idNotification = 1140;
  verifyNotificationExists(1140);
});

// Story: crud:Action:read_only
bthread("crud:Action:read_only", function () {
  let idAction = 1170;
  verifyActionExists(1170);
});

// Story: crud:List:read_only
bthread("crud:List:read_only", function () {
  let key = "key_1190";
  let token = "token_1190";
  let idList = 1190;
  let cards = "cards_1190";
  let card_fields = "card_fields_1190";
  let board = "board_1190";
  let board_fields = "board_fields_1190";
  let fields = "fields_1190";
  verifyListExists("key_1190", "token_1190", 1190, "cards_1190", "card_fields_1190", "board_1190", "board_fields_1190", "fields_1190");
});

// Story: crud:ListCard:read_only
bthread("crud:ListCard:read_only", function () {
  let idList = 1200;
  let key = "key_1200";
  let token = "token_1200";
  let actions = "actions_1200";
  let attachments = "attachments_1200";
  let attachment_fields = "attachment_fields_1200";
  let stickers = "stickers_1200";
  let members = "members_1200";
  let member_fields = "member_fields_1200";
  let checkItemStates = "checkItemStates_1200";
  let checklists = "checklists_1200";
  let limit = "limit_1200";
  let since = "since_1200";
  let before = "before_1200";
  let filter = "filter_1200";
  let fields = "fields_1200";
  verifyListCardExists(1200, "key_1200", "token_1200", "actions_1200", "attachments_1200", "attachment_fields_1200", "stickers_1200", "members_1200", "member_fields_1200", "checkItemStates_1200", "checklists_1200", "limit_1200", "since_1200", "before_1200", "filter_1200", "fields_1200");
});

// Story: crud:Checklist:nondet:1:1
bthread("crud:Checklist:nondet:1:1", function () {
  let key = "key_1270";
  let token = "token_1270";
  let idChecklist = 1270;
  addChecklists("key_1270", "token_1270", 1270);
  tryToAddExistingChecklist("key_1270", "token_1270", 1270);
  verifyChecklistExists("key_1270", "token_1270", 1270);
  updateChecklistsByIdChecklist("key_1270", "token_1270", 1270);
  deleteChecklistsByIdChecklist("key_1270", "token_1270", 1270);
  tryToDeleteANonExistingChecklist("key_1270", "token_1270", 1270);
  verifyChecklistDoesNotExist("key_1270", "token_1270", 1270);
});

// Story: crud:Checklist:nondet:1:2
bthread("crud:Checklist:nondet:1:2", function () {
  let key = "key_1271";
  let token = "token_1271";
  let idChecklist = 1271;
  addChecklists("key_1271", "token_1271", 1271);
  tryToAddExistingChecklist("key_1271", "token_1271", 1271);
  updateChecklistsByIdChecklist("key_1271", "token_1271", 1271);
  verifyChecklistExists("key_1271", "token_1271", 1271);
  deleteChecklistsByIdChecklist("key_1271", "token_1271", 1271);
  tryToDeleteANonExistingChecklist("key_1271", "token_1271", 1271);
  verifyChecklistDoesNotExist("key_1271", "token_1271", 1271);
});

// Story: crud:Checklist:nondet:negative:dup-add
bthread("crud:Checklist:nondet:negative:dup-add", function () {
  let key = "key_1276";
  let token = "token_1276";
  let idChecklist = 1276;
  addChecklists("key_1276", "token_1276", 1276);
  verifyChecklistExists("key_1276", "token_1276", 1276);
  tryToAddExistingChecklist("key_1276", "token_1276", 1276);
  verifyChecklistExists("key_1276", "token_1276", 1276);
});

// Story: crud:Checklist:nondet:existing:update
bthread("crud:Checklist:nondet:existing:update", function () {
  let ev = waitForAnyChecklistAdded();
  let args = Object.values(ev);
  block(matchDeletedChecklist.apply(null, args), function () {
    verifyChecklistExists.apply(null, args);
    updateChecklistsByIdChecklist.apply(null, args);
    verifyChecklistExists.apply(null, args);
  });
});

// Story: monitor:Checklist:add
bthread("monitor:Checklist:add", function () {
  while (true) {
    let ev = waitForAnyChecklistAdded();
    let args = Object.values(ev);
    block(matchDeletedChecklist.apply(null, args), function () {
      verifyChecklistExists.apply(null, args);
    });
  }
});

// Story: crud:ChecklistCheckItem:nondet:1:1
bthread("crud:ChecklistCheckItem:nondet:1:1", function () {
  let idChecklist = 1280;
  let key = "key_1280";
  let token = "token_1280";
  let idCheckItem = 1280;
  addChecklistsCheckItemsByIdChecklist(1280, "key_1280", "token_1280", 1280);
  tryToAddExistingChecklistCheckItem(1280, "key_1280", "token_1280", 1280);
  verifyChecklistCheckItemExists(1280, "key_1280", "token_1280", 1280);
  deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(1280, "key_1280", "token_1280", 1280);
  tryToDeleteANonExistingChecklistCheckItem(1280, "key_1280", "token_1280", 1280);
  verifyChecklistCheckItemDoesNotExist(1280, "key_1280", "token_1280", 1280);
});

// Story: crud:ChecklistCheckItem:nondet:1:2
bthread("crud:ChecklistCheckItem:nondet:1:2", function () {
  let idChecklist = 1281;
  let key = "key_1281";
  let token = "token_1281";
  let idCheckItem = 1281;
  addChecklistsCheckItemsByIdChecklist(1281, "key_1281", "token_1281", 1281);
  tryToAddExistingChecklistCheckItem(1281, "key_1281", "token_1281", 1281);
  verifyChecklistCheckItemExists(1281, "key_1281", "token_1281", 1281);
  deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(1281, "key_1281", "token_1281", 1281);
  tryToDeleteANonExistingChecklistCheckItem(1281, "key_1281", "token_1281", 1281);
  verifyChecklistCheckItemDoesNotExist(1281, "key_1281", "token_1281", 1281);
});

// Story: crud:ChecklistCheckItem:nondet:negative:dup-add
bthread("crud:ChecklistCheckItem:nondet:negative:dup-add", function () {
  let idChecklist = 1286;
  let key = "key_1286";
  let token = "token_1286";
  let idCheckItem = 1286;
  addChecklistsCheckItemsByIdChecklist(1286, "key_1286", "token_1286", 1286);
  verifyChecklistCheckItemExists(1286, "key_1286", "token_1286", 1286);
  tryToAddExistingChecklistCheckItem(1286, "key_1286", "token_1286", 1286);
  verifyChecklistCheckItemExists(1286, "key_1286", "token_1286", 1286);
});

// Story: monitor:ChecklistCheckItem:add
bthread("monitor:ChecklistCheckItem:add", function () {
  while (true) {
    let ev = waitForAnyChecklistCheckItemAdded();
    let args = Object.values(ev);
    block(matchDeletedChecklistCheckItem.apply(null, args), function () {
      verifyChecklistCheckItemExists.apply(null, args);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let key = "key_1290";
  let token = "token_1290";
  let idWebhook = 1290;
  let field = "field_1290";
  addWebhooks("key_1290", "token_1290", 1290, "field_1290");
  tryToAddExistingWebhook("key_1290", "token_1290", 1290, "field_1290");
  verifyWebhookExists("key_1290", "token_1290", 1290, "field_1290");
  updateWebhooksByIdWebhook("key_1290", "token_1290", 1290, "field_1290");
  deleteWebhooksByIdWebhook("key_1290", "token_1290", 1290, "field_1290");
  tryToDeleteANonExistingWebhook("key_1290", "token_1290", 1290, "field_1290");
  verifyWebhookDoesNotExist("key_1290", "token_1290", 1290, "field_1290");
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let key = "key_1291";
  let token = "token_1291";
  let idWebhook = 1291;
  let field = "field_1291";
  addWebhooks("key_1291", "token_1291", 1291, "field_1291");
  tryToAddExistingWebhook("key_1291", "token_1291", 1291, "field_1291");
  updateWebhooksByIdWebhook("key_1291", "token_1291", 1291, "field_1291");
  verifyWebhookExists("key_1291", "token_1291", 1291, "field_1291");
  deleteWebhooksByIdWebhook("key_1291", "token_1291", 1291, "field_1291");
  tryToDeleteANonExistingWebhook("key_1291", "token_1291", 1291, "field_1291");
  verifyWebhookDoesNotExist("key_1291", "token_1291", 1291, "field_1291");
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let key = "key_1296";
  let token = "token_1296";
  let idWebhook = 1296;
  let field = "field_1296";
  addWebhooks("key_1296", "token_1296", 1296, "field_1296");
  verifyWebhookExists("key_1296", "token_1296", 1296, "field_1296");
  tryToAddExistingWebhook("key_1296", "token_1296", 1296, "field_1296");
  verifyWebhookExists("key_1296", "token_1296", 1296, "field_1296");
});

// Story: crud:Webhook:nondet:existing:update
bthread("crud:Webhook:nondet:existing:update", function () {
  let ev = waitForAnyWebhookAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhook.apply(null, args), function () {
    verifyWebhookExists.apply(null, args);
    updateWebhooksByIdWebhook.apply(null, args);
    verifyWebhookExists.apply(null, args);
  });
});

// Story: monitor:Webhook:add
bthread("monitor:Webhook:add", function () {
  while (true) {
    let ev = waitForAnyWebhookAdded();
    let args = Object.values(ev);
    block(matchDeletedWebhook.apply(null, args), function () {
      verifyWebhookExists.apply(null, args);
    });
  }
});

// Story: crud:Label:nondet:1:1
bthread("crud:Label:nondet:1:1", function () {
  let key = "key_1300";
  let token = "token_1300";
  let idLabel = 1300;
  let fields = "fields_1300";
  addLabels("key_1300", "token_1300", 1300, "fields_1300");
  tryToAddExistingLabel("key_1300", "token_1300", 1300, "fields_1300");
  verifyLabelExists("key_1300", "token_1300", 1300, "fields_1300");
  updateLabelsByIdLabel("key_1300", "token_1300", 1300, "fields_1300");
  deleteLabelsByIdLabel("key_1300", "token_1300", 1300, "fields_1300");
  tryToDeleteANonExistingLabel("key_1300", "token_1300", 1300, "fields_1300");
  verifyLabelDoesNotExist("key_1300", "token_1300", 1300, "fields_1300");
});

// Story: crud:Label:nondet:1:2
bthread("crud:Label:nondet:1:2", function () {
  let key = "key_1301";
  let token = "token_1301";
  let idLabel = 1301;
  let fields = "fields_1301";
  addLabels("key_1301", "token_1301", 1301, "fields_1301");
  tryToAddExistingLabel("key_1301", "token_1301", 1301, "fields_1301");
  updateLabelsByIdLabel("key_1301", "token_1301", 1301, "fields_1301");
  verifyLabelExists("key_1301", "token_1301", 1301, "fields_1301");
  deleteLabelsByIdLabel("key_1301", "token_1301", 1301, "fields_1301");
  tryToDeleteANonExistingLabel("key_1301", "token_1301", 1301, "fields_1301");
  verifyLabelDoesNotExist("key_1301", "token_1301", 1301, "fields_1301");
});

// Story: crud:Label:nondet:negative:dup-add
bthread("crud:Label:nondet:negative:dup-add", function () {
  let key = "key_1306";
  let token = "token_1306";
  let idLabel = 1306;
  let fields = "fields_1306";
  addLabels("key_1306", "token_1306", 1306, "fields_1306");
  verifyLabelExists("key_1306", "token_1306", 1306, "fields_1306");
  tryToAddExistingLabel("key_1306", "token_1306", 1306, "fields_1306");
  verifyLabelExists("key_1306", "token_1306", 1306, "fields_1306");
});

// Story: crud:Label:nondet:existing:update
bthread("crud:Label:nondet:existing:update", function () {
  let ev = waitForAnyLabelAdded();
  let args = Object.values(ev);
  block(matchDeletedLabel.apply(null, args), function () {
    verifyLabelExists.apply(null, args);
    updateLabelsByIdLabel.apply(null, args);
    verifyLabelExists.apply(null, args);
  });
});

// Story: monitor:Label:add
bthread("monitor:Label:add", function () {
  while (true) {
    let ev = waitForAnyLabelAdded();
    let args = Object.values(ev);
    block(matchDeletedLabel.apply(null, args), function () {
      verifyLabelExists.apply(null, args);
    });
  }
});

// Story: crud:Token:read_only
bthread("crud:Token:read_only", function () {
  let token = "token_1330";
  let key = "key_1330";
  verifyTokenExists("token_1330", "key_1330");
});

// Story: crud:TokenMember:read_only
bthread("crud:TokenMember:read_only", function () {
  let token = "token_1340";
  let key = "key_1340";
  verifyTokenMemberExists("token_1340", "key_1340");
});

// Story: crud:TokenMemberField:read_only
bthread("crud:TokenMemberField:read_only", function () {
  let token = "token_1350";
  let field = "field_1350";
  let key = "key_1350";
  verifyTokenMemberFieldExists("token_1350", "field_1350", "key_1350");
});

// Story: crud:TokenWebhook:read_only
bthread("crud:TokenWebhook:read_only", function () {
  let token = "token_1360";
  let key = "key_1360";
  verifyTokenWebhookExists("token_1360", "key_1360");
});

// Story: crud:TokenWebhookById:read_only
bthread("crud:TokenWebhookById:read_only", function () {
  let token = "token_1370";
  let idWebhook = 1370;
  let key = "key_1370";
  verifyTokenWebhookByIdExists("token_1370", 1370, "key_1370");
});

// Story: crud:TokenField:read_only
bthread("crud:TokenField:read_only", function () {
  let token = "token_1380";
  let field = "field_1380";
  let key = "key_1380";
  verifyTokenFieldExists("token_1380", "field_1380", "key_1380");
});

// Story: crud:Search:read_only
bthread("crud:Search:read_only", function () {
  let query = "query_1410";
  let idOrganizations = 1410;
  let key = "key_1410";
  let token = "token_1410";
  verifySearchExists("query_1410", 1410, "key_1410", "token_1410");
});

// Story: crud:SearchMember:read_only
bthread("crud:SearchMember:read_only", function () {
  let query = "query_1420";
  let key = "key_1420";
  let token = "token_1420";
  verifySearchMemberExists("query_1420", "key_1420", "token_1420");
});

// Story: crud:Type:read_only
bthread("crud:Type:read_only", function () {
  let id = 1430;
  verifyTypeExists(1430);
});
