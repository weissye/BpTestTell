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

// Story: crud:Boards:linear:1
bthread("crud:Boards:linear:1", function () {
  let actions = "actions_210_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_210_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_210_" + Math.floor(Math.random() * 10000);
  let before = "before_210_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_210_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_210_" + Math.floor(Math.random() * 10000);
  let field = "field_210_" + Math.floor(Math.random() * 10000);
  let fields = "fields_210_" + Math.floor(Math.random() * 10000);
  let filter = "filter_210_" + Math.floor(Math.random() * 10000);
  let id = "id_210_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_210_" + Math.floor(Math.random() * 10000);
  let idOrganization = "idOrganization_210_" + Math.floor(Math.random() * 10000);
  let key = "key_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_210_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_210_" + Math.floor(Math.random() * 10000);
  let members = "members_210_" + Math.floor(Math.random() * 10000);
  let name = "name_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let powerUp = "powerUp_210_" + Math.floor(Math.random() * 10000);
  let since = "since_210_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_210_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_210_" + Math.floor(Math.random() * 10000);
  addBoardsPowerUpsByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  verifyBoardsExists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  updateBoardsSubscribedByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  // Skip delete for Boards to prevent foreign key errors (has active dependents)
});

// Story: crud:Boards:linear:2
bthread("crud:Boards:linear:2", function () {
  let actions = "actions_220_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_220_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_220_" + Math.floor(Math.random() * 10000);
  let before = "before_220_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_220_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_220_" + Math.floor(Math.random() * 10000);
  let field = "field_220_" + Math.floor(Math.random() * 10000);
  let fields = "fields_220_" + Math.floor(Math.random() * 10000);
  let filter = "filter_220_" + Math.floor(Math.random() * 10000);
  let id = "id_220_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_220_" + Math.floor(Math.random() * 10000);
  let idOrganization = "idOrganization_220_" + Math.floor(Math.random() * 10000);
  let key = "key_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_220_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_220_" + Math.floor(Math.random() * 10000);
  let members = "members_220_" + Math.floor(Math.random() * 10000);
  let name = "name_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let powerUp = "powerUp_220_" + Math.floor(Math.random() * 10000);
  let since = "since_220_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_220_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_220_" + Math.floor(Math.random() * 10000);
  addBoardsPowerUpsByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  verifyBoardsExists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  updateBoardsSubscribedByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  // Skip delete for Boards to prevent foreign key errors (has active dependents)
});

// Story: crud:Boards:linear:3
bthread("crud:Boards:linear:3", function () {
  let actions = "actions_230_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_230_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_230_" + Math.floor(Math.random() * 10000);
  let before = "before_230_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_230_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_230_" + Math.floor(Math.random() * 10000);
  let field = "field_230_" + Math.floor(Math.random() * 10000);
  let fields = "fields_230_" + Math.floor(Math.random() * 10000);
  let filter = "filter_230_" + Math.floor(Math.random() * 10000);
  let id = "id_230_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_230_" + Math.floor(Math.random() * 10000);
  let idOrganization = "idOrganization_230_" + Math.floor(Math.random() * 10000);
  let key = "key_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_230_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_230_" + Math.floor(Math.random() * 10000);
  let members = "members_230_" + Math.floor(Math.random() * 10000);
  let name = "name_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let powerUp = "powerUp_230_" + Math.floor(Math.random() * 10000);
  let since = "since_230_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_230_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_230_" + Math.floor(Math.random() * 10000);
  addBoardsPowerUpsByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  verifyBoardsExists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  updateBoardsSubscribedByIdBoard(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  // Skip delete for Boards to prevent foreign key errors (has active dependents)
});

// Monitor: Boards Verification
bthread("monitor:Boards", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyBoardsAdded() });
    let actions = (e.data.parameters && e.data.parameters["actions"]) ? e.data.parameters["actions"] : e.data["actions"];
    let attachment_fields = (e.data.parameters && e.data.parameters["attachment_fields"]) ? e.data.parameters["attachment_fields"] : e.data["attachment_fields"];
    let attachments = (e.data.parameters && e.data.parameters["attachments"]) ? e.data.parameters["attachments"] : e.data["attachments"];
    let before = (e.data.parameters && e.data.parameters["before"]) ? e.data.parameters["before"] : e.data["before"];
    let checkItemStates = (e.data.parameters && e.data.parameters["checkItemStates"]) ? e.data.parameters["checkItemStates"] : e.data["checkItemStates"];
    let checklists = (e.data.parameters && e.data.parameters["checklists"]) ? e.data.parameters["checklists"] : e.data["checklists"];
    let field = (e.data.parameters && e.data.parameters["field"]) ? e.data.parameters["field"] : e.data["field"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idBoard = (e.data.parameters && e.data.parameters["idBoard"]) ? e.data.parameters["idBoard"] : e.data["idBoard"];
    let idOrganization = (e.data.parameters && e.data.parameters["idOrganization"]) ? e.data.parameters["idOrganization"] : e.data["idOrganization"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let limit = (e.data.parameters && e.data.parameters["limit"]) ? e.data.parameters["limit"] : e.data["limit"];
    let member_fields = (e.data.parameters && e.data.parameters["member_fields"]) ? e.data.parameters["member_fields"] : e.data["member_fields"];
    let members = (e.data.parameters && e.data.parameters["members"]) ? e.data.parameters["members"] : e.data["members"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let powerUp = (e.data.parameters && e.data.parameters["powerUp"]) ? e.data.parameters["powerUp"] : e.data["powerUp"];
    let since = (e.data.parameters && e.data.parameters["since"]) ? e.data.parameters["since"] : e.data["since"];
    let stickers = (e.data.parameters && e.data.parameters["stickers"]) ? e.data.parameters["stickers"] : e.data["stickers"];
    let subscribed = (e.data.parameters && e.data.parameters["subscribed"]) ? e.data.parameters["subscribed"] : e.data["subscribed"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Monitor Boards: Verifying existence (Deletion skipped due to dependencies)
    verifyBoardsExists(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idOrganization, key, limit, member_fields, members, name, powerUp, since, stickers, subscribed);
  }
});

// Story: crud:BoardsChecklists:linear:1
bthread("crud:BoardsChecklists:linear:1", function () {
  let card_fields = "card_fields_260_" + Math.floor(Math.random() * 10000);
  let cards = "cards_260_" + Math.floor(Math.random() * 10000);
  let checkItem_fields = "checkItem_fields_260_" + Math.floor(Math.random() * 10000);
  let checkItems = "checkItems_260_" + Math.floor(Math.random() * 10000);
  let fields = "fields_260_" + Math.floor(Math.random() * 10000);
  let filter = "filter_260_" + Math.floor(Math.random() * 10000);
  let id = "id_260_" + Math.floor(Math.random() * 10000);
  let idBoard; // Resolved Dependency
  let idCard = "idCard_260_" + Math.floor(Math.random() * 10000);
  let key = "key_260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_260_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsChecklistsByIdBoard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos);
});

// Story: crud:BoardsChecklists:linear:2
bthread("crud:BoardsChecklists:linear:2", function () {
  let card_fields = "card_fields_270_" + Math.floor(Math.random() * 10000);
  let cards = "cards_270_" + Math.floor(Math.random() * 10000);
  let checkItem_fields = "checkItem_fields_270_" + Math.floor(Math.random() * 10000);
  let checkItems = "checkItems_270_" + Math.floor(Math.random() * 10000);
  let fields = "fields_270_" + Math.floor(Math.random() * 10000);
  let filter = "filter_270_" + Math.floor(Math.random() * 10000);
  let id = "id_270_" + Math.floor(Math.random() * 10000);
  let idBoard; // Resolved Dependency
  let idCard = "idCard_270_" + Math.floor(Math.random() * 10000);
  let key = "key_270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_270_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsChecklistsByIdBoard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos);
});

// Story: crud:BoardsChecklists:linear:3
bthread("crud:BoardsChecklists:linear:3", function () {
  let card_fields = "card_fields_280_" + Math.floor(Math.random() * 10000);
  let cards = "cards_280_" + Math.floor(Math.random() * 10000);
  let checkItem_fields = "checkItem_fields_280_" + Math.floor(Math.random() * 10000);
  let checkItems = "checkItems_280_" + Math.floor(Math.random() * 10000);
  let fields = "fields_280_" + Math.floor(Math.random() * 10000);
  let filter = "filter_280_" + Math.floor(Math.random() * 10000);
  let id = "id_280_" + Math.floor(Math.random() * 10000);
  let idBoard; // Resolved Dependency
  let idCard = "idCard_280_" + Math.floor(Math.random() * 10000);
  let key = "key_280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_280_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsChecklistsByIdBoard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idBoard, idCard, key, name, pos);
});

// Story: crud:BoardsLists:linear:1
bthread("crud:BoardsLists:linear:1", function () {
  let attributes = "attributes_310_" + Math.floor(Math.random() * 10000);
  let card_fields = "card_fields_310_" + Math.floor(Math.random() * 10000);
  let cards = "cards_310_" + Math.floor(Math.random() * 10000);
  let fields = "fields_310_" + Math.floor(Math.random() * 10000);
  let filter = "filter_310_" + Math.floor(Math.random() * 10000);
  let id = "id_310_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_310_" + Math.floor(Math.random() * 10000);
  let key = "key_310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsListsByIdBoard(attributes, card_fields, cards, fields, filter, id, idBoard, key, name);
});

// Story: crud:BoardsLists:linear:2
bthread("crud:BoardsLists:linear:2", function () {
  let attributes = "attributes_320_" + Math.floor(Math.random() * 10000);
  let card_fields = "card_fields_320_" + Math.floor(Math.random() * 10000);
  let cards = "cards_320_" + Math.floor(Math.random() * 10000);
  let fields = "fields_320_" + Math.floor(Math.random() * 10000);
  let filter = "filter_320_" + Math.floor(Math.random() * 10000);
  let id = "id_320_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_320_" + Math.floor(Math.random() * 10000);
  let key = "key_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsListsByIdBoard(attributes, card_fields, cards, fields, filter, id, idBoard, key, name);
});

// Story: crud:BoardsLists:linear:3
bthread("crud:BoardsLists:linear:3", function () {
  let attributes = "attributes_330_" + Math.floor(Math.random() * 10000);
  let card_fields = "card_fields_330_" + Math.floor(Math.random() * 10000);
  let cards = "cards_330_" + Math.floor(Math.random() * 10000);
  let fields = "fields_330_" + Math.floor(Math.random() * 10000);
  let filter = "filter_330_" + Math.floor(Math.random() * 10000);
  let id = "id_330_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_330_" + Math.floor(Math.random() * 10000);
  let key = "key_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsListsByIdBoard(attributes, card_fields, cards, fields, filter, id, idBoard, key, name);
});

// Story: crud:BoardsMarkAsViewed:linear:1
bthread("crud:BoardsMarkAsViewed:linear:1", function () {
  let id = "id_360_" + Math.floor(Math.random() * 10000);
  let idBoard; // Resolved Dependency
  let key = "key_360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsMarkAsViewedByIdBoard(id, idBoard, key);
});

// Story: crud:BoardsMarkAsViewed:linear:2
bthread("crud:BoardsMarkAsViewed:linear:2", function () {
  let id = "id_370_" + Math.floor(Math.random() * 10000);
  let idBoard; // Resolved Dependency
  let key = "key_370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsMarkAsViewedByIdBoard(id, idBoard, key);
});

// Story: crud:BoardsMarkAsViewed:linear:3
bthread("crud:BoardsMarkAsViewed:linear:3", function () {
  let id = "id_380_" + Math.floor(Math.random() * 10000);
  let idBoard; // Resolved Dependency
  let key = "key_380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idBoard"] = matchAnyBoardsAdded();
  let pkMap = {"idBoard": "idBoard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idBoard = captured["idBoard"];
  addBoardsMarkAsViewedByIdBoard(id, idBoard, key);
});

// Story: crud:Cards:linear:1
bthread("crud:Cards:linear:1", function () {
  let color = "color_410_" + Math.floor(Math.random() * 10000);
  let field = "field_410_" + Math.floor(Math.random() * 10000);
  let fields = "fields_410_" + Math.floor(Math.random() * 10000);
  let id = "id_410_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_410_" + Math.floor(Math.random() * 10000);
  let key = "key_410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCardsMarkAssociatedNotificationsReadByIdCard(color, field, fields, id, idCard, key);
});

// Story: crud:Cards:linear:2
bthread("crud:Cards:linear:2", function () {
  let color = "color_420_" + Math.floor(Math.random() * 10000);
  let field = "field_420_" + Math.floor(Math.random() * 10000);
  let fields = "fields_420_" + Math.floor(Math.random() * 10000);
  let id = "id_420_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_420_" + Math.floor(Math.random() * 10000);
  let key = "key_420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCardsMarkAssociatedNotificationsReadByIdCard(color, field, fields, id, idCard, key);
});

// Story: crud:Cards:linear:3
bthread("crud:Cards:linear:3", function () {
  let color = "color_430_" + Math.floor(Math.random() * 10000);
  let field = "field_430_" + Math.floor(Math.random() * 10000);
  let fields = "fields_430_" + Math.floor(Math.random() * 10000);
  let id = "id_430_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_430_" + Math.floor(Math.random() * 10000);
  let key = "key_430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addCardsMarkAssociatedNotificationsReadByIdCard(color, field, fields, id, idCard, key);
});

// Story: crud:CardsActionsComments:linear:1
bthread("crud:CardsActionsComments:linear:1", function () {
  let id = "id_460_" + Math.floor(Math.random() * 10000);
  let idAction = "idAction_460_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_460_" + Math.floor(Math.random() * 10000);
  let key = "key_460_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let text = "text_460_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(id, idAction, idCard, key, text);
});

// Story: crud:CardsActionsComments:linear:2
bthread("crud:CardsActionsComments:linear:2", function () {
  let id = "id_470_" + Math.floor(Math.random() * 10000);
  let idAction = "idAction_470_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_470_" + Math.floor(Math.random() * 10000);
  let key = "key_470_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let text = "text_470_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(id, idAction, idCard, key, text);
});

// Story: crud:CardsActionsComments:linear:3
bthread("crud:CardsActionsComments:linear:3", function () {
  let id = "id_480_" + Math.floor(Math.random() * 10000);
  let idAction = "idAction_480_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_480_" + Math.floor(Math.random() * 10000);
  let key = "key_480_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let text = "text_480_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(id, idAction, idCard, key, text);
});

// Story: crud:CardsAttachments:linear:1
bthread("crud:CardsAttachments:linear:1", function () {
  let fields = "fields_510_" + Math.floor(Math.random() * 10000);
  let file = "file_510_" + Math.floor(Math.random() * 10000);
  let filter = "filter_510_" + Math.floor(Math.random() * 10000);
  let id = "id_510_" + Math.floor(Math.random() * 10000);
  let idAttachment = "idAttachment_510_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_510_" + Math.floor(Math.random() * 10000);
  let key = "key_510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let mimeType = "mimeType_510_" + Math.floor(Math.random() * 10000);
  let name = "name_510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let setCover = true;
  let url = "url_510_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  verifyCardsAttachmentsExists(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  deleteCardsAttachmentsByIdCardByIdAttachment(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  tryToDeleteANonExistingCardsAttachments(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  verifyCardsAttachmentsDoesNotExist(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
});

// Story: crud:CardsAttachments:linear:2
bthread("crud:CardsAttachments:linear:2", function () {
  let fields = "fields_520_" + Math.floor(Math.random() * 10000);
  let file = "file_520_" + Math.floor(Math.random() * 10000);
  let filter = "filter_520_" + Math.floor(Math.random() * 10000);
  let id = "id_520_" + Math.floor(Math.random() * 10000);
  let idAttachment = "idAttachment_520_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_520_" + Math.floor(Math.random() * 10000);
  let key = "key_520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let mimeType = "mimeType_520_" + Math.floor(Math.random() * 10000);
  let name = "name_520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let setCover = true;
  let url = "url_520_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  verifyCardsAttachmentsExists(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  deleteCardsAttachmentsByIdCardByIdAttachment(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  tryToDeleteANonExistingCardsAttachments(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  verifyCardsAttachmentsDoesNotExist(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
});

// Story: crud:CardsAttachments:linear:3
bthread("crud:CardsAttachments:linear:3", function () {
  let fields = "fields_530_" + Math.floor(Math.random() * 10000);
  let file = "file_530_" + Math.floor(Math.random() * 10000);
  let filter = "filter_530_" + Math.floor(Math.random() * 10000);
  let id = "id_530_" + Math.floor(Math.random() * 10000);
  let idAttachment = "idAttachment_530_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_530_" + Math.floor(Math.random() * 10000);
  let key = "key_530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let mimeType = "mimeType_530_" + Math.floor(Math.random() * 10000);
  let name = "name_530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let setCover = true;
  let url = "url_530_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  verifyCardsAttachmentsExists(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  deleteCardsAttachmentsByIdCardByIdAttachment(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  tryToDeleteANonExistingCardsAttachments(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
  verifyCardsAttachmentsDoesNotExist(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
});

// Monitor: CardsAttachments Verification
bthread("monitor:CardsAttachments", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCardsAttachmentsAdded() });
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let file = (e.data.parameters && e.data.parameters["file"]) ? e.data.parameters["file"] : e.data["file"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idAttachment = (e.data.parameters && e.data.parameters["idAttachment"]) ? e.data.parameters["idAttachment"] : e.data["idAttachment"];
    let idCard = (e.data.parameters && e.data.parameters["idCard"]) ? e.data.parameters["idCard"] : e.data["idCard"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let mimeType = (e.data.parameters && e.data.parameters["mimeType"]) ? e.data.parameters["mimeType"] : e.data["mimeType"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let setCover = (e.data.parameters && e.data.parameters["setCover"]) ? e.data.parameters["setCover"] : e.data["setCover"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    let url = (e.data.parameters && e.data.parameters["url"]) ? e.data.parameters["url"] : e.data["url"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCardsAttachments(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url), function() {
      bp.log.info(`Monitor CardsAttachments: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCardsAttachmentsExists(fields, file, filter, id, idAttachment, idCard, key, mimeType, name, setCover, url);
    });
  }
});

// Story: crud:CardsChecklistCheckItem:linear:1
bthread("crud:CardsChecklistCheckItem:linear:1", function () {
  let id = "id_560_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_560_" + Math.floor(Math.random() * 10000);
  let idCheckItem = "idCheckItem_560_" + Math.floor(Math.random() * 10000);
  let idChecklist = "idChecklist_560_" + Math.floor(Math.random() * 10000);
  let key = "key_560_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(id, idCard, idCheckItem, idChecklist, key);
});

// Story: crud:CardsChecklistCheckItem:linear:2
bthread("crud:CardsChecklistCheckItem:linear:2", function () {
  let id = "id_570_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_570_" + Math.floor(Math.random() * 10000);
  let idCheckItem = "idCheckItem_570_" + Math.floor(Math.random() * 10000);
  let idChecklist = "idChecklist_570_" + Math.floor(Math.random() * 10000);
  let key = "key_570_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(id, idCard, idCheckItem, idChecklist, key);
});

// Story: crud:CardsChecklistCheckItem:linear:3
bthread("crud:CardsChecklistCheckItem:linear:3", function () {
  let id = "id_580_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_580_" + Math.floor(Math.random() * 10000);
  let idCheckItem = "idCheckItem_580_" + Math.floor(Math.random() * 10000);
  let idChecklist = "idChecklist_580_" + Math.floor(Math.random() * 10000);
  let key = "key_580_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsChecklistCheckItemConvertToCardByIdCardByIdChecklistByIdCheckItem(id, idCard, idCheckItem, idChecklist, key);
});

// Story: crud:CardsChecklists:linear:1
bthread("crud:CardsChecklists:linear:1", function () {
  let card_fields; // Resolved Dependency
  let cards = "cards_610_" + Math.floor(Math.random() * 10000);
  let checkItem_fields = "checkItem_fields_610_" + Math.floor(Math.random() * 10000);
  let checkItems = "checkItems_610_" + Math.floor(Math.random() * 10000);
  let fields = "fields_610_" + Math.floor(Math.random() * 10000);
  let filter = "filter_610_" + Math.floor(Math.random() * 10000);
  let id = "id_610_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_610_" + Math.floor(Math.random() * 10000);
  let idChecklistSource = "idChecklistSource_610_" + Math.floor(Math.random() * 10000);
  let key = "key_610_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_610_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_610_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["card_fields"] = matchAnyCardsAdded();
  let pkMap = {"card_fields": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  card_fields = captured["card_fields"];
  addCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idCard, idChecklistSource, key, name, pos);
});

// Story: crud:CardsChecklists:linear:2
bthread("crud:CardsChecklists:linear:2", function () {
  let card_fields; // Resolved Dependency
  let cards = "cards_620_" + Math.floor(Math.random() * 10000);
  let checkItem_fields = "checkItem_fields_620_" + Math.floor(Math.random() * 10000);
  let checkItems = "checkItems_620_" + Math.floor(Math.random() * 10000);
  let fields = "fields_620_" + Math.floor(Math.random() * 10000);
  let filter = "filter_620_" + Math.floor(Math.random() * 10000);
  let id = "id_620_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_620_" + Math.floor(Math.random() * 10000);
  let idChecklistSource = "idChecklistSource_620_" + Math.floor(Math.random() * 10000);
  let key = "key_620_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_620_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_620_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["card_fields"] = matchAnyCardsAdded();
  let pkMap = {"card_fields": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  card_fields = captured["card_fields"];
  addCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idCard, idChecklistSource, key, name, pos);
});

// Story: crud:CardsChecklists:linear:3
bthread("crud:CardsChecklists:linear:3", function () {
  let card_fields; // Resolved Dependency
  let cards = "cards_630_" + Math.floor(Math.random() * 10000);
  let checkItem_fields = "checkItem_fields_630_" + Math.floor(Math.random() * 10000);
  let checkItems = "checkItems_630_" + Math.floor(Math.random() * 10000);
  let fields = "fields_630_" + Math.floor(Math.random() * 10000);
  let filter = "filter_630_" + Math.floor(Math.random() * 10000);
  let id = "id_630_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_630_" + Math.floor(Math.random() * 10000);
  let idChecklistSource = "idChecklistSource_630_" + Math.floor(Math.random() * 10000);
  let key = "key_630_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_630_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_630_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["card_fields"] = matchAnyCardsAdded();
  let pkMap = {"card_fields": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  card_fields = captured["card_fields"];
  addCardsChecklistsByIdCard(card_fields, cards, checkItem_fields, checkItems, fields, filter, id, idCard, idChecklistSource, key, name, pos);
});

// Story: crud:CardsMembersVoted:linear:1
bthread("crud:CardsMembersVoted:linear:1", function () {
  let fields = "fields_660_" + Math.floor(Math.random() * 10000);
  let id = "id_660_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_660_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_660_" + Math.floor(Math.random() * 10000);
  let key = "key_660_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsMembersVotedByIdCard(fields, id, idCard, idMember, key);
});

// Story: crud:CardsMembersVoted:linear:2
bthread("crud:CardsMembersVoted:linear:2", function () {
  let fields = "fields_670_" + Math.floor(Math.random() * 10000);
  let id = "id_670_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_670_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_670_" + Math.floor(Math.random() * 10000);
  let key = "key_670_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsMembersVotedByIdCard(fields, id, idCard, idMember, key);
});

// Story: crud:CardsMembersVoted:linear:3
bthread("crud:CardsMembersVoted:linear:3", function () {
  let fields = "fields_680_" + Math.floor(Math.random() * 10000);
  let id = "id_680_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_680_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_680_" + Math.floor(Math.random() * 10000);
  let key = "key_680_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idCard"] = matchAnyCardsAdded();
  let pkMap = {"idCard": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idCard = captured["idCard"];
  addCardsMembersVotedByIdCard(fields, id, idCard, idMember, key);
});

// Story: crud:CardsStickers:linear:1
bthread("crud:CardsStickers:linear:1", function () {
  let cards_stickers; // Resolved Dependency
  let fields = "fields_710_" + Math.floor(Math.random() * 10000);
  let id = "id_710_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_710_" + Math.floor(Math.random() * 10000);
  let idSticker = "idSticker_710_" + Math.floor(Math.random() * 10000);
  let key = "key_710_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["cards_stickers"] = matchAnyCardsAdded();
  let pkMap = {"cards_stickers": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  cards_stickers = captured["cards_stickers"];
  addCardsStickersByIdCard(cards_stickers, fields, id, idCard, idSticker, key);
  verifyCardsStickersExists(cards_stickers, fields, id, idCard, idSticker, key);
  updateCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key);
  deleteCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key);
  tryToDeleteANonExistingCardsStickers(cards_stickers, fields, id, idCard, idSticker, key);
  verifyCardsStickersDoesNotExist(cards_stickers, fields, id, idCard, idSticker, key);
});

// Story: crud:CardsStickers:linear:2
bthread("crud:CardsStickers:linear:2", function () {
  let cards_stickers; // Resolved Dependency
  let fields = "fields_720_" + Math.floor(Math.random() * 10000);
  let id = "id_720_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_720_" + Math.floor(Math.random() * 10000);
  let idSticker = "idSticker_720_" + Math.floor(Math.random() * 10000);
  let key = "key_720_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["cards_stickers"] = matchAnyCardsAdded();
  let pkMap = {"cards_stickers": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  cards_stickers = captured["cards_stickers"];
  addCardsStickersByIdCard(cards_stickers, fields, id, idCard, idSticker, key);
  verifyCardsStickersExists(cards_stickers, fields, id, idCard, idSticker, key);
  updateCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key);
  deleteCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key);
  tryToDeleteANonExistingCardsStickers(cards_stickers, fields, id, idCard, idSticker, key);
  verifyCardsStickersDoesNotExist(cards_stickers, fields, id, idCard, idSticker, key);
});

// Story: crud:CardsStickers:linear:3
bthread("crud:CardsStickers:linear:3", function () {
  let cards_stickers; // Resolved Dependency
  let fields = "fields_730_" + Math.floor(Math.random() * 10000);
  let id = "id_730_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_730_" + Math.floor(Math.random() * 10000);
  let idSticker = "idSticker_730_" + Math.floor(Math.random() * 10000);
  let key = "key_730_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["cards_stickers"] = matchAnyCardsAdded();
  let pkMap = {"cards_stickers": "idCard"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  cards_stickers = captured["cards_stickers"];
  addCardsStickersByIdCard(cards_stickers, fields, id, idCard, idSticker, key);
  verifyCardsStickersExists(cards_stickers, fields, id, idCard, idSticker, key);
  updateCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key);
  deleteCardsStickersByIdCardByIdSticker(cards_stickers, fields, id, idCard, idSticker, key);
  tryToDeleteANonExistingCardsStickers(cards_stickers, fields, id, idCard, idSticker, key);
  verifyCardsStickersDoesNotExist(cards_stickers, fields, id, idCard, idSticker, key);
});

// Monitor: CardsStickers Verification
bthread("monitor:CardsStickers", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCardsStickersAdded() });
    let cards_stickers = (e.data.parameters && e.data.parameters["cards_stickers"]) ? e.data.parameters["cards_stickers"] : e.data["cards_stickers"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idCard = (e.data.parameters && e.data.parameters["idCard"]) ? e.data.parameters["idCard"] : e.data["idCard"];
    let idSticker = (e.data.parameters && e.data.parameters["idSticker"]) ? e.data.parameters["idSticker"] : e.data["idSticker"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCardsStickers(cards_stickers, fields, id, idCard, idSticker, key), function() {
      bp.log.info(`Monitor CardsStickers: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCardsStickersExists(cards_stickers, fields, id, idCard, idSticker, key);
    });
  }
});

// Story: crud:Checklists:linear:1
bthread("crud:Checklists:linear:1", function () {
  let actions = "actions_760_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_760_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_760_" + Math.floor(Math.random() * 10000);
  let before = "before_760_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_760_" + Math.floor(Math.random() * 10000);
  let checked = "checked_760_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_760_" + Math.floor(Math.random() * 10000);
  let field = "field_760_" + Math.floor(Math.random() * 10000);
  let fields = "fields_760_" + Math.floor(Math.random() * 10000);
  let filter = "filter_760_" + Math.floor(Math.random() * 10000);
  let id = "id_760_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_760_" + Math.floor(Math.random() * 10000);
  let idCheckItem = "idCheckItem_760_" + Math.floor(Math.random() * 10000);
  let idChecklist = "idChecklist_760_" + Math.floor(Math.random() * 10000);
  let key = "key_760_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_760_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_760_" + Math.floor(Math.random() * 10000);
  let members = "members_760_" + Math.floor(Math.random() * 10000);
  let name = "name_760_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_760_" + Math.floor(Math.random() * 10000);
  let since = "since_760_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_760_" + Math.floor(Math.random() * 10000);
  addChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  verifyChecklistsExists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  updateChecklistsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  tryToDeleteANonExistingChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  verifyChecklistsDoesNotExist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
});

// Story: crud:Checklists:linear:2
bthread("crud:Checklists:linear:2", function () {
  let actions = "actions_770_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_770_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_770_" + Math.floor(Math.random() * 10000);
  let before = "before_770_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_770_" + Math.floor(Math.random() * 10000);
  let checked = "checked_770_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_770_" + Math.floor(Math.random() * 10000);
  let field = "field_770_" + Math.floor(Math.random() * 10000);
  let fields = "fields_770_" + Math.floor(Math.random() * 10000);
  let filter = "filter_770_" + Math.floor(Math.random() * 10000);
  let id = "id_770_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_770_" + Math.floor(Math.random() * 10000);
  let idCheckItem = "idCheckItem_770_" + Math.floor(Math.random() * 10000);
  let idChecklist = "idChecklist_770_" + Math.floor(Math.random() * 10000);
  let key = "key_770_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_770_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_770_" + Math.floor(Math.random() * 10000);
  let members = "members_770_" + Math.floor(Math.random() * 10000);
  let name = "name_770_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_770_" + Math.floor(Math.random() * 10000);
  let since = "since_770_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_770_" + Math.floor(Math.random() * 10000);
  addChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  verifyChecklistsExists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  updateChecklistsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  tryToDeleteANonExistingChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  verifyChecklistsDoesNotExist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
});

// Story: crud:Checklists:linear:3
bthread("crud:Checklists:linear:3", function () {
  let actions = "actions_780_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_780_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_780_" + Math.floor(Math.random() * 10000);
  let before = "before_780_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_780_" + Math.floor(Math.random() * 10000);
  let checked = "checked_780_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_780_" + Math.floor(Math.random() * 10000);
  let field = "field_780_" + Math.floor(Math.random() * 10000);
  let fields = "fields_780_" + Math.floor(Math.random() * 10000);
  let filter = "filter_780_" + Math.floor(Math.random() * 10000);
  let id = "id_780_" + Math.floor(Math.random() * 10000);
  let idCard = "idCard_780_" + Math.floor(Math.random() * 10000);
  let idCheckItem = "idCheckItem_780_" + Math.floor(Math.random() * 10000);
  let idChecklist = "idChecklist_780_" + Math.floor(Math.random() * 10000);
  let key = "key_780_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_780_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_780_" + Math.floor(Math.random() * 10000);
  let members = "members_780_" + Math.floor(Math.random() * 10000);
  let name = "name_780_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_780_" + Math.floor(Math.random() * 10000);
  let since = "since_780_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_780_" + Math.floor(Math.random() * 10000);
  addChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  verifyChecklistsExists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  updateChecklistsByIdChecklist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  deleteChecklistsCheckItemsByIdChecklistByIdCheckItem(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  tryToDeleteANonExistingChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
  verifyChecklistsDoesNotExist(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
});

// Monitor: Checklists Verification
bthread("monitor:Checklists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyChecklistsAdded() });
    let actions = (e.data.parameters && e.data.parameters["actions"]) ? e.data.parameters["actions"] : e.data["actions"];
    let attachment_fields = (e.data.parameters && e.data.parameters["attachment_fields"]) ? e.data.parameters["attachment_fields"] : e.data["attachment_fields"];
    let attachments = (e.data.parameters && e.data.parameters["attachments"]) ? e.data.parameters["attachments"] : e.data["attachments"];
    let before = (e.data.parameters && e.data.parameters["before"]) ? e.data.parameters["before"] : e.data["before"];
    let checkItemStates = (e.data.parameters && e.data.parameters["checkItemStates"]) ? e.data.parameters["checkItemStates"] : e.data["checkItemStates"];
    let checked = (e.data.parameters && e.data.parameters["checked"]) ? e.data.parameters["checked"] : e.data["checked"];
    let checklists = (e.data.parameters && e.data.parameters["checklists"]) ? e.data.parameters["checklists"] : e.data["checklists"];
    let field = (e.data.parameters && e.data.parameters["field"]) ? e.data.parameters["field"] : e.data["field"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idCard = (e.data.parameters && e.data.parameters["idCard"]) ? e.data.parameters["idCard"] : e.data["idCard"];
    let idCheckItem = (e.data.parameters && e.data.parameters["idCheckItem"]) ? e.data.parameters["idCheckItem"] : e.data["idCheckItem"];
    let idChecklist = (e.data.parameters && e.data.parameters["idChecklist"]) ? e.data.parameters["idChecklist"] : e.data["idChecklist"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let limit = (e.data.parameters && e.data.parameters["limit"]) ? e.data.parameters["limit"] : e.data["limit"];
    let member_fields = (e.data.parameters && e.data.parameters["member_fields"]) ? e.data.parameters["member_fields"] : e.data["member_fields"];
    let members = (e.data.parameters && e.data.parameters["members"]) ? e.data.parameters["members"] : e.data["members"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let pos = (e.data.parameters && e.data.parameters["pos"]) ? e.data.parameters["pos"] : e.data["pos"];
    let since = (e.data.parameters && e.data.parameters["since"]) ? e.data.parameters["since"] : e.data["since"];
    let stickers = (e.data.parameters && e.data.parameters["stickers"]) ? e.data.parameters["stickers"] : e.data["stickers"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Deletion while Verifying Existence
    block(matchDeletedChecklists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers), function() {
      bp.log.info(`Monitor Checklists: Verifying persistence of ID ${id} inside deletion block.`);
        verifyChecklistsExists(actions, attachment_fields, attachments, before, checkItemStates, checked, checklists, field, fields, filter, id, idCard, idCheckItem, idChecklist, key, limit, member_fields, members, name, pos, since, stickers);
    });
  }
});

// Story: crud:Labels:linear:1
bthread("crud:Labels:linear:1", function () {
  let color = "color_810_" + Math.floor(Math.random() * 10000);
  let fields = "fields_810_" + Math.floor(Math.random() * 10000);
  let id = "id_810_" + Math.floor(Math.random() * 10000);
  let idLabel = "idLabel_810_" + Math.floor(Math.random() * 10000);
  let key = "key_810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addLabels(color, fields, id, idLabel, key, name);
  verifyLabelsExists(color, fields, id, idLabel, key, name);
  updateLabelsNameByIdLabel(color, fields, id, idLabel, key, name);
  deleteLabelsByIdLabel(color, fields, id, idLabel, key, name);
  tryToDeleteANonExistingLabels(color, fields, id, idLabel, key, name);
  verifyLabelsDoesNotExist(color, fields, id, idLabel, key, name);
});

// Story: crud:Labels:linear:2
bthread("crud:Labels:linear:2", function () {
  let color = "color_820_" + Math.floor(Math.random() * 10000);
  let fields = "fields_820_" + Math.floor(Math.random() * 10000);
  let id = "id_820_" + Math.floor(Math.random() * 10000);
  let idLabel = "idLabel_820_" + Math.floor(Math.random() * 10000);
  let key = "key_820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addLabels(color, fields, id, idLabel, key, name);
  verifyLabelsExists(color, fields, id, idLabel, key, name);
  updateLabelsNameByIdLabel(color, fields, id, idLabel, key, name);
  deleteLabelsByIdLabel(color, fields, id, idLabel, key, name);
  tryToDeleteANonExistingLabels(color, fields, id, idLabel, key, name);
  verifyLabelsDoesNotExist(color, fields, id, idLabel, key, name);
});

// Story: crud:Labels:linear:3
bthread("crud:Labels:linear:3", function () {
  let color = "color_830_" + Math.floor(Math.random() * 10000);
  let fields = "fields_830_" + Math.floor(Math.random() * 10000);
  let id = "id_830_" + Math.floor(Math.random() * 10000);
  let idLabel = "idLabel_830_" + Math.floor(Math.random() * 10000);
  let key = "key_830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addLabels(color, fields, id, idLabel, key, name);
  verifyLabelsExists(color, fields, id, idLabel, key, name);
  updateLabelsNameByIdLabel(color, fields, id, idLabel, key, name);
  deleteLabelsByIdLabel(color, fields, id, idLabel, key, name);
  tryToDeleteANonExistingLabels(color, fields, id, idLabel, key, name);
  verifyLabelsDoesNotExist(color, fields, id, idLabel, key, name);
});

// Monitor: Labels Verification
bthread("monitor:Labels", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyLabelsAdded() });
    let color = (e.data.parameters && e.data.parameters["color"]) ? e.data.parameters["color"] : e.data["color"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idLabel = (e.data.parameters && e.data.parameters["idLabel"]) ? e.data.parameters["idLabel"] : e.data["idLabel"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Deletion while Verifying Existence
    block(matchDeletedLabels(color, fields, id, idLabel, key, name), function() {
      bp.log.info(`Monitor Labels: Verifying persistence of ID ${id} inside deletion block.`);
        verifyLabelsExists(color, fields, id, idLabel, key, name);
    });
  }
});

// Story: crud:Lists:linear:1
bthread("crud:Lists:linear:1", function () {
  let actions = "actions_860_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_860_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_860_" + Math.floor(Math.random() * 10000);
  let before = "before_860_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_860_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_860_" + Math.floor(Math.random() * 10000);
  let field = "field_860_" + Math.floor(Math.random() * 10000);
  let fields = "fields_860_" + Math.floor(Math.random() * 10000);
  let filter = "filter_860_" + Math.floor(Math.random() * 10000);
  let id = "id_860_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_860_" + Math.floor(Math.random() * 10000);
  let idList = "idList_860_" + Math.floor(Math.random() * 10000);
  let key = "key_860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_860_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_860_" + Math.floor(Math.random() * 10000);
  let members = "members_860_" + Math.floor(Math.random() * 10000);
  let name = "name_860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_860_" + Math.floor(Math.random() * 10000);
  let since = "since_860_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_860_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_860_" + Math.floor(Math.random() * 10000);
  addListsMoveAllCardsByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed);
});

// Story: crud:Lists:linear:2
bthread("crud:Lists:linear:2", function () {
  let actions = "actions_870_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_870_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_870_" + Math.floor(Math.random() * 10000);
  let before = "before_870_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_870_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_870_" + Math.floor(Math.random() * 10000);
  let field = "field_870_" + Math.floor(Math.random() * 10000);
  let fields = "fields_870_" + Math.floor(Math.random() * 10000);
  let filter = "filter_870_" + Math.floor(Math.random() * 10000);
  let id = "id_870_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_870_" + Math.floor(Math.random() * 10000);
  let idList = "idList_870_" + Math.floor(Math.random() * 10000);
  let key = "key_870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_870_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_870_" + Math.floor(Math.random() * 10000);
  let members = "members_870_" + Math.floor(Math.random() * 10000);
  let name = "name_870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_870_" + Math.floor(Math.random() * 10000);
  let since = "since_870_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_870_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_870_" + Math.floor(Math.random() * 10000);
  addListsMoveAllCardsByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed);
});

// Story: crud:Lists:linear:3
bthread("crud:Lists:linear:3", function () {
  let actions = "actions_880_" + Math.floor(Math.random() * 10000);
  let attachment_fields = "attachment_fields_880_" + Math.floor(Math.random() * 10000);
  let attachments = "attachments_880_" + Math.floor(Math.random() * 10000);
  let before = "before_880_" + Math.floor(Math.random() * 10000);
  let checkItemStates = "checkItemStates_880_" + Math.floor(Math.random() * 10000);
  let checklists = "checklists_880_" + Math.floor(Math.random() * 10000);
  let field = "field_880_" + Math.floor(Math.random() * 10000);
  let fields = "fields_880_" + Math.floor(Math.random() * 10000);
  let filter = "filter_880_" + Math.floor(Math.random() * 10000);
  let id = "id_880_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_880_" + Math.floor(Math.random() * 10000);
  let idList = "idList_880_" + Math.floor(Math.random() * 10000);
  let key = "key_880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let limit = "limit_880_" + Math.floor(Math.random() * 10000);
  let member_fields = "member_fields_880_" + Math.floor(Math.random() * 10000);
  let members = "members_880_" + Math.floor(Math.random() * 10000);
  let name = "name_880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_880_" + Math.floor(Math.random() * 10000);
  let since = "since_880_" + Math.floor(Math.random() * 10000);
  let stickers = "stickers_880_" + Math.floor(Math.random() * 10000);
  let subscribed = "subscribed_880_" + Math.floor(Math.random() * 10000);
  addListsMoveAllCardsByIdList(actions, attachment_fields, attachments, before, checkItemStates, checklists, field, fields, filter, id, idBoard, idList, key, limit, member_fields, members, name, pos, since, stickers, subscribed);
});

// Story: crud:Members:linear:1
bthread("crud:Members:linear:1", function () {
  let field = "field_910_" + Math.floor(Math.random() * 10000);
  let filter = "filter_910_" + Math.floor(Math.random() * 10000);
  let id = "id_910_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_910_" + Math.floor(Math.random() * 10000);
  let idSavedSearch = "idSavedSearch_910_" + Math.floor(Math.random() * 10000);
  let key = "key_910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let members_savedSearches = "members_savedSearches_910_" + Math.floor(Math.random() * 10000);
  let name = "name_910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let username = "username_910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addMembersSavedSearchesByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  verifyMembersExists(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  updateMembersUsernameByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  // Skip delete for Members to prevent foreign key errors (has active dependents)
});

// Story: crud:Members:linear:2
bthread("crud:Members:linear:2", function () {
  let field = "field_920_" + Math.floor(Math.random() * 10000);
  let filter = "filter_920_" + Math.floor(Math.random() * 10000);
  let id = "id_920_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_920_" + Math.floor(Math.random() * 10000);
  let idSavedSearch = "idSavedSearch_920_" + Math.floor(Math.random() * 10000);
  let key = "key_920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let members_savedSearches = "members_savedSearches_920_" + Math.floor(Math.random() * 10000);
  let name = "name_920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let username = "username_920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addMembersSavedSearchesByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  verifyMembersExists(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  updateMembersUsernameByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  // Skip delete for Members to prevent foreign key errors (has active dependents)
});

// Story: crud:Members:linear:3
bthread("crud:Members:linear:3", function () {
  let field = "field_930_" + Math.floor(Math.random() * 10000);
  let filter = "filter_930_" + Math.floor(Math.random() * 10000);
  let id = "id_930_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_930_" + Math.floor(Math.random() * 10000);
  let idSavedSearch = "idSavedSearch_930_" + Math.floor(Math.random() * 10000);
  let key = "key_930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let members_savedSearches = "members_savedSearches_930_" + Math.floor(Math.random() * 10000);
  let name = "name_930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let username = "username_930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addMembersSavedSearchesByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  verifyMembersExists(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  updateMembersUsernameByIdMember(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  // Skip delete for Members to prevent foreign key errors (has active dependents)
});

// Monitor: Members Verification
bthread("monitor:Members", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMembersAdded() });
    let field = (e.data.parameters && e.data.parameters["field"]) ? e.data.parameters["field"] : e.data["field"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idMember = (e.data.parameters && e.data.parameters["idMember"]) ? e.data.parameters["idMember"] : e.data["idMember"];
    let idSavedSearch = (e.data.parameters && e.data.parameters["idSavedSearch"]) ? e.data.parameters["idSavedSearch"] : e.data["idSavedSearch"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let members_savedSearches = (e.data.parameters && e.data.parameters["members_savedSearches"]) ? e.data.parameters["members_savedSearches"] : e.data["members_savedSearches"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    let username = (e.data.parameters && e.data.parameters["username"]) ? e.data.parameters["username"] : e.data["username"];
    // Monitor Members: Verifying existence (Deletion skipped due to dependencies)
    verifyMembersExists(field, filter, id, idMember, idSavedSearch, key, members_savedSearches, name, username);
  }
});

// Story: crud:MembersBoardBackgrounds:linear:1
bthread("crud:MembersBoardBackgrounds:linear:1", function () {
  let fields = "fields_960_" + Math.floor(Math.random() * 10000);
  let filter = "filter_960_" + Math.floor(Math.random() * 10000);
  let id = "id_960_" + Math.floor(Math.random() * 10000);
  let idBoardBackground = "idBoardBackground_960_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_960_" + Math.floor(Math.random() * 10000);
  let key = "key_960_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersBoardBackgroundsByIdMember(fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersBoardBackgroundsExists(fields, filter, id, idBoardBackground, idMember, key);
  updateMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key);
  deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key);
  tryToDeleteANonExistingMembersBoardBackgrounds(fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersBoardBackgroundsDoesNotExist(fields, filter, id, idBoardBackground, idMember, key);
});

// Story: crud:MembersBoardBackgrounds:linear:2
bthread("crud:MembersBoardBackgrounds:linear:2", function () {
  let fields = "fields_970_" + Math.floor(Math.random() * 10000);
  let filter = "filter_970_" + Math.floor(Math.random() * 10000);
  let id = "id_970_" + Math.floor(Math.random() * 10000);
  let idBoardBackground = "idBoardBackground_970_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_970_" + Math.floor(Math.random() * 10000);
  let key = "key_970_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersBoardBackgroundsByIdMember(fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersBoardBackgroundsExists(fields, filter, id, idBoardBackground, idMember, key);
  updateMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key);
  deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key);
  tryToDeleteANonExistingMembersBoardBackgrounds(fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersBoardBackgroundsDoesNotExist(fields, filter, id, idBoardBackground, idMember, key);
});

// Story: crud:MembersBoardBackgrounds:linear:3
bthread("crud:MembersBoardBackgrounds:linear:3", function () {
  let fields = "fields_980_" + Math.floor(Math.random() * 10000);
  let filter = "filter_980_" + Math.floor(Math.random() * 10000);
  let id = "id_980_" + Math.floor(Math.random() * 10000);
  let idBoardBackground = "idBoardBackground_980_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_980_" + Math.floor(Math.random() * 10000);
  let key = "key_980_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersBoardBackgroundsByIdMember(fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersBoardBackgroundsExists(fields, filter, id, idBoardBackground, idMember, key);
  updateMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key);
  deleteMembersBoardBackgroundsByIdMemberByIdBoardBackground(fields, filter, id, idBoardBackground, idMember, key);
  tryToDeleteANonExistingMembersBoardBackgrounds(fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersBoardBackgroundsDoesNotExist(fields, filter, id, idBoardBackground, idMember, key);
});

// Monitor: MembersBoardBackgrounds Verification
bthread("monitor:MembersBoardBackgrounds", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMembersBoardBackgroundsAdded() });
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idBoardBackground = (e.data.parameters && e.data.parameters["idBoardBackground"]) ? e.data.parameters["idBoardBackground"] : e.data["idBoardBackground"];
    let idMember = (e.data.parameters && e.data.parameters["idMember"]) ? e.data.parameters["idMember"] : e.data["idMember"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Deletion while Verifying Existence
    block(matchDeletedMembersBoardBackgrounds(fields, filter, id, idBoardBackground, idMember, key), function() {
      bp.log.info(`Monitor MembersBoardBackgrounds: Verifying persistence of ID ${id} inside deletion block.`);
        verifyMembersBoardBackgroundsExists(fields, filter, id, idBoardBackground, idMember, key);
    });
  }
});

// Story: crud:MembersBoardStars:linear:1
bthread("crud:MembersBoardStars:linear:1", function () {
  let id = "id_1010_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_1010_" + Math.floor(Math.random() * 10000);
  let idBoardStar = "idBoardStar_1010_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1010_" + Math.floor(Math.random() * 10000);
  let key = "key_1010_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_1010_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersBoardStarsByIdMember(id, idBoard, idBoardStar, idMember, key, pos);
  verifyMembersBoardStarsExists(id, idBoard, idBoardStar, idMember, key, pos);
  updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos);
  deleteMembersBoardStarsByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos);
  tryToDeleteANonExistingMembersBoardStars(id, idBoard, idBoardStar, idMember, key, pos);
  verifyMembersBoardStarsDoesNotExist(id, idBoard, idBoardStar, idMember, key, pos);
});

// Story: crud:MembersBoardStars:linear:2
bthread("crud:MembersBoardStars:linear:2", function () {
  let id = "id_1020_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_1020_" + Math.floor(Math.random() * 10000);
  let idBoardStar = "idBoardStar_1020_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1020_" + Math.floor(Math.random() * 10000);
  let key = "key_1020_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_1020_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersBoardStarsByIdMember(id, idBoard, idBoardStar, idMember, key, pos);
  verifyMembersBoardStarsExists(id, idBoard, idBoardStar, idMember, key, pos);
  updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos);
  deleteMembersBoardStarsByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos);
  tryToDeleteANonExistingMembersBoardStars(id, idBoard, idBoardStar, idMember, key, pos);
  verifyMembersBoardStarsDoesNotExist(id, idBoard, idBoardStar, idMember, key, pos);
});

// Story: crud:MembersBoardStars:linear:3
bthread("crud:MembersBoardStars:linear:3", function () {
  let id = "id_1030_" + Math.floor(Math.random() * 10000);
  let idBoard = "idBoard_1030_" + Math.floor(Math.random() * 10000);
  let idBoardStar = "idBoardStar_1030_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1030_" + Math.floor(Math.random() * 10000);
  let key = "key_1030_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let pos = "pos_1030_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersBoardStarsByIdMember(id, idBoard, idBoardStar, idMember, key, pos);
  verifyMembersBoardStarsExists(id, idBoard, idBoardStar, idMember, key, pos);
  updateMembersBoardStarsIdBoardByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos);
  deleteMembersBoardStarsByIdMemberByIdBoardStar(id, idBoard, idBoardStar, idMember, key, pos);
  tryToDeleteANonExistingMembersBoardStars(id, idBoard, idBoardStar, idMember, key, pos);
  verifyMembersBoardStarsDoesNotExist(id, idBoard, idBoardStar, idMember, key, pos);
});

// Monitor: MembersBoardStars Verification
bthread("monitor:MembersBoardStars", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMembersBoardStarsAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idBoard = (e.data.parameters && e.data.parameters["idBoard"]) ? e.data.parameters["idBoard"] : e.data["idBoard"];
    let idBoardStar = (e.data.parameters && e.data.parameters["idBoardStar"]) ? e.data.parameters["idBoardStar"] : e.data["idBoardStar"];
    let idMember = (e.data.parameters && e.data.parameters["idMember"]) ? e.data.parameters["idMember"] : e.data["idMember"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let pos = (e.data.parameters && e.data.parameters["pos"]) ? e.data.parameters["pos"] : e.data["pos"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Deletion while Verifying Existence
    block(matchDeletedMembersBoardStars(id, idBoard, idBoardStar, idMember, key, pos), function() {
      bp.log.info(`Monitor MembersBoardStars: Verifying persistence of ID ${id} inside deletion block.`);
        verifyMembersBoardStarsExists(id, idBoard, idBoardStar, idMember, key, pos);
    });
  }
});

// Story: crud:MembersCustomBoardBackgrounds:linear:1
bthread("crud:MembersCustomBoardBackgrounds:linear:1", function () {
  let customBoardBackgrounds = "customBoardBackgrounds_1060_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1060_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1060_" + Math.floor(Math.random() * 10000);
  let id = "id_1060_" + Math.floor(Math.random() * 10000);
  let idBoardBackground = "idBoardBackground_1060_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1060_" + Math.floor(Math.random() * 10000);
  let key = "key_1060_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersCustomBoardBackgroundsExists(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  tryToDeleteANonExistingMembersCustomBoardBackgrounds(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersCustomBoardBackgroundsDoesNotExist(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
});

// Story: crud:MembersCustomBoardBackgrounds:linear:2
bthread("crud:MembersCustomBoardBackgrounds:linear:2", function () {
  let customBoardBackgrounds = "customBoardBackgrounds_1070_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1070_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1070_" + Math.floor(Math.random() * 10000);
  let id = "id_1070_" + Math.floor(Math.random() * 10000);
  let idBoardBackground = "idBoardBackground_1070_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1070_" + Math.floor(Math.random() * 10000);
  let key = "key_1070_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersCustomBoardBackgroundsExists(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  tryToDeleteANonExistingMembersCustomBoardBackgrounds(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersCustomBoardBackgroundsDoesNotExist(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
});

// Story: crud:MembersCustomBoardBackgrounds:linear:3
bthread("crud:MembersCustomBoardBackgrounds:linear:3", function () {
  let customBoardBackgrounds = "customBoardBackgrounds_1080_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1080_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1080_" + Math.floor(Math.random() * 10000);
  let id = "id_1080_" + Math.floor(Math.random() * 10000);
  let idBoardBackground = "idBoardBackground_1080_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1080_" + Math.floor(Math.random() * 10000);
  let key = "key_1080_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomBoardBackgroundsByIdMember(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersCustomBoardBackgroundsExists(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  updateMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  deleteMembersCustomBoardBackgroundsByIdMemberByIdBoardBackground(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  tryToDeleteANonExistingMembersCustomBoardBackgrounds(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
  verifyMembersCustomBoardBackgroundsDoesNotExist(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
});

// Monitor: MembersCustomBoardBackgrounds Verification
bthread("monitor:MembersCustomBoardBackgrounds", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMembersCustomBoardBackgroundsAdded() });
    let customBoardBackgrounds = (e.data.parameters && e.data.parameters["customBoardBackgrounds"]) ? e.data.parameters["customBoardBackgrounds"] : e.data["customBoardBackgrounds"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idBoardBackground = (e.data.parameters && e.data.parameters["idBoardBackground"]) ? e.data.parameters["idBoardBackground"] : e.data["idBoardBackground"];
    let idMember = (e.data.parameters && e.data.parameters["idMember"]) ? e.data.parameters["idMember"] : e.data["idMember"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Deletion while Verifying Existence
    block(matchDeletedMembersCustomBoardBackgrounds(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key), function() {
      bp.log.info(`Monitor MembersCustomBoardBackgrounds: Verifying persistence of ID ${id} inside deletion block.`);
        verifyMembersCustomBoardBackgroundsExists(customBoardBackgrounds, fields, filter, id, idBoardBackground, idMember, key);
    });
  }
});

// Story: crud:MembersCustomEmoji:linear:1
bthread("crud:MembersCustomEmoji:linear:1", function () {
  let fields = "fields_1110_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1110_" + Math.floor(Math.random() * 10000);
  let id = "id_1110_" + Math.floor(Math.random() * 10000);
  let idCustomEmoji = "idCustomEmoji_1110_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1110_" + Math.floor(Math.random() * 10000);
  let key = "key_1110_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1110_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomEmojiByIdMember(fields, filter, id, idCustomEmoji, idMember, key, name);
});

// Story: crud:MembersCustomEmoji:linear:2
bthread("crud:MembersCustomEmoji:linear:2", function () {
  let fields = "fields_1120_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1120_" + Math.floor(Math.random() * 10000);
  let id = "id_1120_" + Math.floor(Math.random() * 10000);
  let idCustomEmoji = "idCustomEmoji_1120_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1120_" + Math.floor(Math.random() * 10000);
  let key = "key_1120_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1120_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomEmojiByIdMember(fields, filter, id, idCustomEmoji, idMember, key, name);
});

// Story: crud:MembersCustomEmoji:linear:3
bthread("crud:MembersCustomEmoji:linear:3", function () {
  let fields = "fields_1130_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1130_" + Math.floor(Math.random() * 10000);
  let id = "id_1130_" + Math.floor(Math.random() * 10000);
  let idCustomEmoji = "idCustomEmoji_1130_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1130_" + Math.floor(Math.random() * 10000);
  let key = "key_1130_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1130_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomEmojiByIdMember(fields, filter, id, idCustomEmoji, idMember, key, name);
});

// Story: crud:MembersCustomStickers:linear:1
bthread("crud:MembersCustomStickers:linear:1", function () {
  let fields = "fields_1160_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1160_" + Math.floor(Math.random() * 10000);
  let id = "id_1160_" + Math.floor(Math.random() * 10000);
  let idCustomSticker = "idCustomSticker_1160_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1160_" + Math.floor(Math.random() * 10000);
  let key = "key_1160_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(fields, filter, id, idCustomSticker, idMember, key);
  verifyMembersCustomStickersExists(fields, filter, id, idCustomSticker, idMember, key);
  deleteMembersCustomStickersByIdMemberByIdCustomSticker(fields, filter, id, idCustomSticker, idMember, key);
  tryToDeleteANonExistingMembersCustomStickers(fields, filter, id, idCustomSticker, idMember, key);
  verifyMembersCustomStickersDoesNotExist(fields, filter, id, idCustomSticker, idMember, key);
});

// Story: crud:MembersCustomStickers:linear:2
bthread("crud:MembersCustomStickers:linear:2", function () {
  let fields = "fields_1170_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1170_" + Math.floor(Math.random() * 10000);
  let id = "id_1170_" + Math.floor(Math.random() * 10000);
  let idCustomSticker = "idCustomSticker_1170_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1170_" + Math.floor(Math.random() * 10000);
  let key = "key_1170_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(fields, filter, id, idCustomSticker, idMember, key);
  verifyMembersCustomStickersExists(fields, filter, id, idCustomSticker, idMember, key);
  deleteMembersCustomStickersByIdMemberByIdCustomSticker(fields, filter, id, idCustomSticker, idMember, key);
  tryToDeleteANonExistingMembersCustomStickers(fields, filter, id, idCustomSticker, idMember, key);
  verifyMembersCustomStickersDoesNotExist(fields, filter, id, idCustomSticker, idMember, key);
});

// Story: crud:MembersCustomStickers:linear:3
bthread("crud:MembersCustomStickers:linear:3", function () {
  let fields = "fields_1180_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1180_" + Math.floor(Math.random() * 10000);
  let id = "id_1180_" + Math.floor(Math.random() * 10000);
  let idCustomSticker = "idCustomSticker_1180_" + Math.floor(Math.random() * 10000);
  let idMember = "idMember_1180_" + Math.floor(Math.random() * 10000);
  let key = "key_1180_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["idMember"] = matchAnyMembersAdded();
  let pkMap = {"idMember": "idMember"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  idMember = captured["idMember"];
  addMembersCustomStickersByIdMember(fields, filter, id, idCustomSticker, idMember, key);
  verifyMembersCustomStickersExists(fields, filter, id, idCustomSticker, idMember, key);
  deleteMembersCustomStickersByIdMemberByIdCustomSticker(fields, filter, id, idCustomSticker, idMember, key);
  tryToDeleteANonExistingMembersCustomStickers(fields, filter, id, idCustomSticker, idMember, key);
  verifyMembersCustomStickersDoesNotExist(fields, filter, id, idCustomSticker, idMember, key);
});

// Monitor: MembersCustomStickers Verification
bthread("monitor:MembersCustomStickers", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyMembersCustomStickersAdded() });
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idCustomSticker = (e.data.parameters && e.data.parameters["idCustomSticker"]) ? e.data.parameters["idCustomSticker"] : e.data["idCustomSticker"];
    let idMember = (e.data.parameters && e.data.parameters["idMember"]) ? e.data.parameters["idMember"] : e.data["idMember"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Deletion while Verifying Existence
    block(matchDeletedMembersCustomStickers(fields, filter, id, idCustomSticker, idMember, key), function() {
      bp.log.info(`Monitor MembersCustomStickers: Verifying persistence of ID ${id} inside deletion block.`);
        verifyMembersCustomStickersExists(fields, filter, id, idCustomSticker, idMember, key);
    });
  }
});

// Story: crud:Notifications:linear:1
bthread("crud:Notifications:linear:1", function () {
  let field = "field_1210_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1210_" + Math.floor(Math.random() * 10000);
  let id = "id_1210_" + Math.floor(Math.random() * 10000);
  let idNotification = "idNotification_1210_" + Math.floor(Math.random() * 10000);
  let key = "key_1210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addNotificationsAllRead(field, fields, id, idNotification, key);
});

// Story: crud:Notifications:linear:2
bthread("crud:Notifications:linear:2", function () {
  let field = "field_1220_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1220_" + Math.floor(Math.random() * 10000);
  let id = "id_1220_" + Math.floor(Math.random() * 10000);
  let idNotification = "idNotification_1220_" + Math.floor(Math.random() * 10000);
  let key = "key_1220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addNotificationsAllRead(field, fields, id, idNotification, key);
});

// Story: crud:Notifications:linear:3
bthread("crud:Notifications:linear:3", function () {
  let field = "field_1230_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1230_" + Math.floor(Math.random() * 10000);
  let id = "id_1230_" + Math.floor(Math.random() * 10000);
  let idNotification = "idNotification_1230_" + Math.floor(Math.random() * 10000);
  let key = "key_1230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  addNotificationsAllRead(field, fields, id, idNotification, key);
});

// Story: crud:Organizations:linear:1
bthread("crud:Organizations:linear:1", function () {
  let activity = "activity_1260_" + Math.floor(Math.random() * 10000);
  let field = "field_1260_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1260_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1260_" + Math.floor(Math.random() * 10000);
  let id = "id_1260_" + Math.floor(Math.random() * 10000);
  let idOrg = "idOrg_1260_" + Math.floor(Math.random() * 10000);
  let key = "key_1260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let logo = "logo_1260_" + Math.floor(Math.random() * 10000);
  let value = "value_1260_" + Math.floor(Math.random() * 10000);
  let website = "website_1260_" + Math.floor(Math.random() * 10000);
  addOrganizationsLogoByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  verifyOrganizationsExists(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  updateOrganizationsWebsiteByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  tryToDeleteANonExistingOrganizations(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  verifyOrganizationsDoesNotExist(activity, field, fields, filter, id, idOrg, key, logo, value, website);
});

// Story: crud:Organizations:linear:2
bthread("crud:Organizations:linear:2", function () {
  let activity = "activity_1270_" + Math.floor(Math.random() * 10000);
  let field = "field_1270_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1270_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1270_" + Math.floor(Math.random() * 10000);
  let id = "id_1270_" + Math.floor(Math.random() * 10000);
  let idOrg = "idOrg_1270_" + Math.floor(Math.random() * 10000);
  let key = "key_1270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let logo = "logo_1270_" + Math.floor(Math.random() * 10000);
  let value = "value_1270_" + Math.floor(Math.random() * 10000);
  let website = "website_1270_" + Math.floor(Math.random() * 10000);
  addOrganizationsLogoByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  verifyOrganizationsExists(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  updateOrganizationsWebsiteByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  tryToDeleteANonExistingOrganizations(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  verifyOrganizationsDoesNotExist(activity, field, fields, filter, id, idOrg, key, logo, value, website);
});

// Story: crud:Organizations:linear:3
bthread("crud:Organizations:linear:3", function () {
  let activity = "activity_1280_" + Math.floor(Math.random() * 10000);
  let field = "field_1280_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1280_" + Math.floor(Math.random() * 10000);
  let filter = "filter_1280_" + Math.floor(Math.random() * 10000);
  let id = "id_1280_" + Math.floor(Math.random() * 10000);
  let idOrg = "idOrg_1280_" + Math.floor(Math.random() * 10000);
  let key = "key_1280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let logo = "logo_1280_" + Math.floor(Math.random() * 10000);
  let value = "value_1280_" + Math.floor(Math.random() * 10000);
  let website = "website_1280_" + Math.floor(Math.random() * 10000);
  addOrganizationsLogoByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  verifyOrganizationsExists(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  updateOrganizationsWebsiteByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  deleteOrganizationsPrefsOrgInviteRestrictByIdOrg(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  tryToDeleteANonExistingOrganizations(activity, field, fields, filter, id, idOrg, key, logo, value, website);
  verifyOrganizationsDoesNotExist(activity, field, fields, filter, id, idOrg, key, logo, value, website);
});

// Monitor: Organizations Verification
bthread("monitor:Organizations", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOrganizationsAdded() });
    let activity = (e.data.parameters && e.data.parameters["activity"]) ? e.data.parameters["activity"] : e.data["activity"];
    let field = (e.data.parameters && e.data.parameters["field"]) ? e.data.parameters["field"] : e.data["field"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idOrg = (e.data.parameters && e.data.parameters["idOrg"]) ? e.data.parameters["idOrg"] : e.data["idOrg"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let logo = (e.data.parameters && e.data.parameters["logo"]) ? e.data.parameters["logo"] : e.data["logo"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    let value = (e.data.parameters && e.data.parameters["value"]) ? e.data.parameters["value"] : e.data["value"];
    let website = (e.data.parameters && e.data.parameters["website"]) ? e.data.parameters["website"] : e.data["website"];
    // Block Deletion while Verifying Existence
    block(matchDeletedOrganizations(activity, field, fields, filter, id, idOrg, key, logo, value, website), function() {
      bp.log.info(`Monitor Organizations: Verifying persistence of ID ${id} inside deletion block.`);
        verifyOrganizationsExists(activity, field, fields, filter, id, idOrg, key, logo, value, website);
    });
  }
});

// Story: crud:Sessions:linear:1
bthread("crud:Sessions:linear:1", function () {
  let id = "id_1310_" + Math.floor(Math.random() * 10000);
  let idSession = "idSession_1310_" + Math.floor(Math.random() * 10000);
  let key = "key_1310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_1310_" + Math.floor(Math.random() * 10000);
  addSessions(id, idSession, key, name, status);
});

// Story: crud:Sessions:linear:2
bthread("crud:Sessions:linear:2", function () {
  let id = "id_1320_" + Math.floor(Math.random() * 10000);
  let idSession = "idSession_1320_" + Math.floor(Math.random() * 10000);
  let key = "key_1320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_1320_" + Math.floor(Math.random() * 10000);
  addSessions(id, idSession, key, name, status);
});

// Story: crud:Sessions:linear:3
bthread("crud:Sessions:linear:3", function () {
  let id = "id_1330_" + Math.floor(Math.random() * 10000);
  let idSession = "idSession_1330_" + Math.floor(Math.random() * 10000);
  let key = "key_1330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let name = "name_1330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_1330_" + Math.floor(Math.random() * 10000);
  addSessions(id, idSession, key, name, status);
});

// Story: crud:Webhooks:linear:1
bthread("crud:Webhooks:linear:1", function () {
  let description = "description_1360_" + Math.floor(Math.random() * 10000);
  let field = "field_1360_" + Math.floor(Math.random() * 10000);
  let id = "id_1360_" + Math.floor(Math.random() * 10000);
  let idModel = "idModel_1360_" + Math.floor(Math.random() * 10000);
  let idWebhook = "idWebhook_1360_" + Math.floor(Math.random() * 10000);
  let key = "key_1360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let webhooks = "webhooks_1360_" + Math.floor(Math.random() * 10000);
  let webhooks_active = "webhooks_active_1360_" + Math.floor(Math.random() * 10000);
  addWebhooks(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  verifyWebhooksExists(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  updateWebhooksIdModelByIdWebhook(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  deleteWebhooksByIdWebhook(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  tryToDeleteANonExistingWebhooks(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  verifyWebhooksDoesNotExist(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
});

// Story: crud:Webhooks:linear:2
bthread("crud:Webhooks:linear:2", function () {
  let description = "description_1370_" + Math.floor(Math.random() * 10000);
  let field = "field_1370_" + Math.floor(Math.random() * 10000);
  let id = "id_1370_" + Math.floor(Math.random() * 10000);
  let idModel = "idModel_1370_" + Math.floor(Math.random() * 10000);
  let idWebhook = "idWebhook_1370_" + Math.floor(Math.random() * 10000);
  let key = "key_1370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let webhooks = "webhooks_1370_" + Math.floor(Math.random() * 10000);
  let webhooks_active = "webhooks_active_1370_" + Math.floor(Math.random() * 10000);
  addWebhooks(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  verifyWebhooksExists(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  updateWebhooksIdModelByIdWebhook(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  deleteWebhooksByIdWebhook(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  tryToDeleteANonExistingWebhooks(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  verifyWebhooksDoesNotExist(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
});

// Story: crud:Webhooks:linear:3
bthread("crud:Webhooks:linear:3", function () {
  let description = "description_1380_" + Math.floor(Math.random() * 10000);
  let field = "field_1380_" + Math.floor(Math.random() * 10000);
  let id = "id_1380_" + Math.floor(Math.random() * 10000);
  let idModel = "idModel_1380_" + Math.floor(Math.random() * 10000);
  let idWebhook = "idWebhook_1380_" + Math.floor(Math.random() * 10000);
  let key = "key_1380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let webhooks = "webhooks_1380_" + Math.floor(Math.random() * 10000);
  let webhooks_active = "webhooks_active_1380_" + Math.floor(Math.random() * 10000);
  addWebhooks(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  verifyWebhooksExists(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  updateWebhooksIdModelByIdWebhook(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  deleteWebhooksByIdWebhook(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  tryToDeleteANonExistingWebhooks(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
  verifyWebhooksDoesNotExist(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
});

// Monitor: Webhooks Verification
bthread("monitor:Webhooks", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWebhooksAdded() });
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let field = (e.data.parameters && e.data.parameters["field"]) ? e.data.parameters["field"] : e.data["field"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let idModel = (e.data.parameters && e.data.parameters["idModel"]) ? e.data.parameters["idModel"] : e.data["idModel"];
    let idWebhook = (e.data.parameters && e.data.parameters["idWebhook"]) ? e.data.parameters["idWebhook"] : e.data["idWebhook"];
    let key = (e.data.parameters && e.data.parameters["key"]) ? e.data.parameters["key"] : e.data["key"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    let webhooks = (e.data.parameters && e.data.parameters["webhooks"]) ? e.data.parameters["webhooks"] : e.data["webhooks"];
    let webhooks_active = (e.data.parameters && e.data.parameters["webhooks_active"]) ? e.data.parameters["webhooks_active"] : e.data["webhooks_active"];
    // Block Deletion while Verifying Existence
    block(matchDeletedWebhooks(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active), function() {
      bp.log.info(`Monitor Webhooks: Verifying persistence of ID ${id} inside deletion block.`);
        verifyWebhooksExists(description, field, id, idModel, idWebhook, key, webhooks, webhooks_active);
    });
  }
});
