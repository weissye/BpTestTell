// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
      }
    }
  }
  return captured;
}

// Story: crud:Card:nondet:1:1
bthread("crud:Card:nondet:1:1", function () {
  let closed = "closed_200";
  let desc = "desc_200";
  let due = "due_200";
  let fileSource = "fileSource_200";
  let idAttachmentCover = "idAttachmentCover_200";
  let idBoard = "idBoard_200";
  let idCard = 200;
  let idCardSource = "idCardSource_200";
  let idLabels = "idLabels_200";
  let idList = "idList_200";
  let idMembers = "idMembers_200";
  let keepFromSource = "keepFromSource_200";
  let key = "key_200";
  let labels = "labels_200";
  let name = "name_200";
  let pos = "pos_200";
  let subscribed = "subscribed_200";
  let token = "token_200";
  let urlSource = "urlSource_200";
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
  let closed = "closed_201";
  let desc = "desc_201";
  let due = "due_201";
  let fileSource = "fileSource_201";
  let idAttachmentCover = "idAttachmentCover_201";
  let idBoard = "idBoard_201";
  let idCard = 201;
  let idCardSource = "idCardSource_201";
  let idLabels = "idLabels_201";
  let idList = "idList_201";
  let idMembers = "idMembers_201";
  let keepFromSource = "keepFromSource_201";
  let key = "key_201";
  let labels = "labels_201";
  let name = "name_201";
  let pos = "pos_201";
  let subscribed = "subscribed_201";
  let token = "token_201";
  let urlSource = "urlSource_201";
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
  let closed = "closed_206";
  let desc = "desc_206";
  let due = "due_206";
  let fileSource = "fileSource_206";
  let idAttachmentCover = "idAttachmentCover_206";
  let idBoard = "idBoard_206";
  let idCard = 206;
  let idCardSource = "idCardSource_206";
  let idLabels = "idLabels_206";
  let idList = "idList_206";
  let idMembers = "idMembers_206";
  let keepFromSource = "keepFromSource_206";
  let key = "key_206";
  let labels = "labels_206";
  let name = "name_206";
  let pos = "pos_206";
  let subscribed = "subscribed_206";
  let token = "token_206";
  let urlSource = "urlSource_206";
  addCards(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  // waitForCardAdded(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  verifyCardExists(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  tryToAddExistingCard(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
  verifyCardExists(closed, desc, due, fileSource, idAttachmentCover, idBoard, idCard, idCardSource, idLabels, idList, idMembers, keepFromSource, key, labels, name, pos, subscribed, token, urlSource);
});

// Story: crud:CardActionComment:nondet:1:1
bthread("crud:CardActionComment:nondet:1:1", function () {
  let key = "key_210";
  let text = "text_210";
  let token = "token_210";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionAdded();
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idAction = captured["idAction"];
  if (!idAction) idAction = captured["idAction"];
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
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
  let key = "key_211";
  let text = "text_211";
  let token = "token_211";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionAdded();
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idAction = captured["idAction"];
  if (!idAction) idAction = captured["idAction"];
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
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
  let key = "key_216";
  let text = "text_216";
  let token = "token_216";
  // Dependency Barrier
  let deps = {};
  deps["idAction"] = matchAnyActionAdded();
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idAction = captured["idAction"];
  if (!idAction) idAction = captured["idAction"];
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsActionsCommentsByIdCard(idAction, idCard, key, text, token);
  // waitForCardActionCommentAdded(idAction, idCard, key, text, token);
  verifyCardActionCommentExists(idAction, idCard, key, text, token);
  tryToAddExistingCardActionComment(idAction, idCard, key, text, token);
  verifyCardActionCommentExists(idAction, idCard, key, text, token);
});

// Story: crud:CardAttachment:nondet:1:1
bthread("crud:CardAttachment:nondet:1:1", function () {
  let file = "file_220";
  let idAttachment = "idAttachment_220";
  let key = "key_220";
  let mimeType = "mimeType_220";
  let name = "name_220";
  let token = "token_220";
  let url = "url_220";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
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
  let file = "file_221";
  let idAttachment = "idAttachment_221";
  let key = "key_221";
  let mimeType = "mimeType_221";
  let name = "name_221";
  let token = "token_221";
  let url = "url_221";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
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
  let file = "file_226";
  let idAttachment = "idAttachment_226";
  let key = "key_226";
  let mimeType = "mimeType_226";
  let name = "name_226";
  let token = "token_226";
  let url = "url_226";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsAttachmentsByIdCard(file, idAttachment, idCard, key, mimeType, name, token, url);
  // waitForCardAttachmentAdded(file, idAttachment, idCard, key, mimeType, name, token, url);
  verifyCardAttachmentExists(file, idAttachment, idCard, key, mimeType, name, token, url);
  tryToAddExistingCardAttachment(file, idAttachment, idCard, key, mimeType, name, token, url);
  verifyCardAttachmentExists(file, idAttachment, idCard, key, mimeType, name, token, url);
});

// Story: crud:CardChecklistCheckItem:nondet:1:1
bthread("crud:CardChecklistCheckItem:nondet:1:1", function () {
  let idCheckItem = "idCheckItem_230";
  let idChecklist = "idChecklist_230";
  let idChecklistCurrent = "idChecklistCurrent_230";
  let key = "key_230";
  let name = "name_230";
  let pos = "pos_230";
  let state = "state_230";
  let token = "token_230";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  // waitForCardChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  tryToAddExistingCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  verifyCardChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  tryToDeleteANonExistingCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  verifyCardChecklistCheckItemDoesNotExist(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
});

// Story: crud:CardChecklistCheckItem:nondet:1:2
bthread("crud:CardChecklistCheckItem:nondet:1:2", function () {
  let idCheckItem = "idCheckItem_231";
  let idChecklist = "idChecklist_231";
  let idChecklistCurrent = "idChecklistCurrent_231";
  let key = "key_231";
  let name = "name_231";
  let pos = "pos_231";
  let state = "state_231";
  let token = "token_231";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  // waitForCardChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  tryToAddExistingCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  updateCardsChecklistCheckItemByIdCardByIdChecklistCurrentByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  verifyCardChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  deleteCardsChecklistCheckItemByIdCardByIdChecklistByIdCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  tryToDeleteANonExistingCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  verifyCardChecklistCheckItemDoesNotExist(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
});

// Story: crud:CardChecklistCheckItem:nondet:negative:dup-add
bthread("crud:CardChecklistCheckItem:nondet:negative:dup-add", function () {
  let idCheckItem = "idCheckItem_236";
  let idChecklist = "idChecklist_236";
  let idChecklistCurrent = "idChecklistCurrent_236";
  let key = "key_236";
  let name = "name_236";
  let pos = "pos_236";
  let state = "state_236";
  let token = "token_236";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsChecklistCheckItemByIdCardByIdChecklist(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  // waitForCardChecklistCheckItemAdded(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  verifyCardChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  tryToAddExistingCardChecklistCheckItem(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
  verifyCardChecklistCheckItemExists(idCard, idCheckItem, idChecklist, idChecklistCurrent, key, name, pos, state, token);
});

// Story: crud:CardChecklist:nondet:1:1
bthread("crud:CardChecklist:nondet:1:1", function () {
  let idChecklist = "idChecklist_270";
  let idChecklistSource = "idChecklistSource_270";
  let key = "key_270";
  let name = "name_270";
  let pos = "pos_270";
  let token = "token_270";
  let value = "value_270";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  // waitForCardChecklistAdded(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  tryToAddExistingCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  verifyCardChecklistExists(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  deleteCardsChecklistsByIdCardByIdChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  tryToDeleteANonExistingCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  verifyCardChecklistDoesNotExist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
});

// Story: crud:CardChecklist:nondet:1:2
bthread("crud:CardChecklist:nondet:1:2", function () {
  let idChecklist = "idChecklist_271";
  let idChecklistSource = "idChecklistSource_271";
  let key = "key_271";
  let name = "name_271";
  let pos = "pos_271";
  let token = "token_271";
  let value = "value_271";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  // waitForCardChecklistAdded(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  tryToAddExistingCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  verifyCardChecklistExists(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  deleteCardsChecklistsByIdCardByIdChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  tryToDeleteANonExistingCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  verifyCardChecklistDoesNotExist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
});

// Story: crud:CardChecklist:nondet:negative:dup-add
bthread("crud:CardChecklist:nondet:negative:dup-add", function () {
  let idChecklist = "idChecklist_276";
  let idChecklistSource = "idChecklistSource_276";
  let key = "key_276";
  let name = "name_276";
  let pos = "pos_276";
  let token = "token_276";
  let value = "value_276";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsChecklistsByIdCard(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  // waitForCardChecklistAdded(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  verifyCardChecklistExists(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  tryToAddExistingCardChecklist(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
  verifyCardChecklistExists(idCard, idChecklist, idChecklistSource, key, name, pos, token, value);
});

// Story: crud:CardIdLabels:nondet:1:1
bthread("crud:CardIdLabels:nondet:1:1", function () {
  let idLabel = "idLabel_280";
  let key = "key_280";
  let token = "token_280";
  let value = "value_280";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
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
  let idLabel = "idLabel_281";
  let key = "key_281";
  let token = "token_281";
  let value = "value_281";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
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
  let idLabel = "idLabel_286";
  let key = "key_286";
  let token = "token_286";
  let value = "value_286";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsIdLabelsByIdCard(idCard, idLabel, key, token, value);
  // waitForCardIdLabelsAdded(idCard, idLabel, key, token, value);
  verifyCardIdLabelsExists(idCard, idLabel, key, token, value);
  tryToAddExistingCardIdLabels(idCard, idLabel, key, token, value);
  verifyCardIdLabelsExists(idCard, idLabel, key, token, value);
});

// Story: crud:CardIdMembers:nondet:1:1
bthread("crud:CardIdMembers:nondet:1:1", function () {
  let idMember = "idMember_290";
  let key = "key_290";
  let token = "token_290";
  let value = "value_290";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
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
  let idMember = "idMember_291";
  let key = "key_291";
  let token = "token_291";
  let value = "value_291";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
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
  let idMember = "idMember_296";
  let key = "key_296";
  let token = "token_296";
  let value = "value_296";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsIdMembersByIdCard(idCard, idMember, key, token, value);
  // waitForCardIdMembersAdded(idCard, idMember, key, token, value);
  verifyCardIdMembersExists(idCard, idMember, key, token, value);
  tryToAddExistingCardIdMembers(idCard, idMember, key, token, value);
  verifyCardIdMembersExists(idCard, idMember, key, token, value);
});

// Story: crud:CardLabel:nondet:1:1
bthread("crud:CardLabel:nondet:1:1", function () {
  let color = "color_300";
  let key = "key_300";
  let name = "name_300";
  let token = "token_300";
  let value = "value_300";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsLabelsByIdCard(color, idCard, key, name, token, value);
  // waitForCardLabelAdded(color, idCard, key, name, token, value);
  tryToAddExistingCardLabel(color, idCard, key, name, token, value);
  verifyCardLabelExists(color, idCard, key, name, token, value);
  updateCardsLabelsByIdCard(color, idCard, key, name, token, value);
  deleteCardsLabelsByIdCardByColor(color, idCard, key, name, token, value);
  tryToDeleteANonExistingCardLabel(color, idCard, key, name, token, value);
  verifyCardLabelDoesNotExist(color, idCard, key, name, token, value);
});

// Story: crud:CardLabel:nondet:1:2
bthread("crud:CardLabel:nondet:1:2", function () {
  let color = "color_301";
  let key = "key_301";
  let name = "name_301";
  let token = "token_301";
  let value = "value_301";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsLabelsByIdCard(color, idCard, key, name, token, value);
  // waitForCardLabelAdded(color, idCard, key, name, token, value);
  tryToAddExistingCardLabel(color, idCard, key, name, token, value);
  updateCardsLabelsByIdCard(color, idCard, key, name, token, value);
  verifyCardLabelExists(color, idCard, key, name, token, value);
  deleteCardsLabelsByIdCardByColor(color, idCard, key, name, token, value);
  tryToDeleteANonExistingCardLabel(color, idCard, key, name, token, value);
  verifyCardLabelDoesNotExist(color, idCard, key, name, token, value);
});

// Story: crud:CardLabel:nondet:negative:dup-add
bthread("crud:CardLabel:nondet:negative:dup-add", function () {
  let color = "color_306";
  let key = "key_306";
  let name = "name_306";
  let token = "token_306";
  let value = "value_306";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsLabelsByIdCard(color, idCard, key, name, token, value);
  // waitForCardLabelAdded(color, idCard, key, name, token, value);
  verifyCardLabelExists(color, idCard, key, name, token, value);
  tryToAddExistingCardLabel(color, idCard, key, name, token, value);
  verifyCardLabelExists(color, idCard, key, name, token, value);
});

// Story: crud:CardMemberVoted:nondet:1:1
bthread("crud:CardMemberVoted:nondet:1:1", function () {
  let idMember = "idMember_310";
  let key = "key_310";
  let token = "token_310";
  let value = "value_310";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsMembersVotedByIdCard(idCard, idMember, key, token, value);
  // waitForCardMemberVotedAdded(idCard, idMember, key, token, value);
  tryToAddExistingCardMemberVoted(idCard, idMember, key, token, value);
  verifyCardMemberVotedExists(idCard, idMember, key, token, value);
  deleteCardsMembersVotedByIdCardByIdMember(idCard, idMember, key, token, value);
  tryToDeleteANonExistingCardMemberVoted(idCard, idMember, key, token, value);
  verifyCardMemberVotedDoesNotExist(idCard, idMember, key, token, value);
});

// Story: crud:CardMemberVoted:nondet:1:2
bthread("crud:CardMemberVoted:nondet:1:2", function () {
  let idMember = "idMember_311";
  let key = "key_311";
  let token = "token_311";
  let value = "value_311";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsMembersVotedByIdCard(idCard, idMember, key, token, value);
  // waitForCardMemberVotedAdded(idCard, idMember, key, token, value);
  tryToAddExistingCardMemberVoted(idCard, idMember, key, token, value);
  verifyCardMemberVotedExists(idCard, idMember, key, token, value);
  deleteCardsMembersVotedByIdCardByIdMember(idCard, idMember, key, token, value);
  tryToDeleteANonExistingCardMemberVoted(idCard, idMember, key, token, value);
  verifyCardMemberVotedDoesNotExist(idCard, idMember, key, token, value);
});

// Story: crud:CardMemberVoted:nondet:negative:dup-add
bthread("crud:CardMemberVoted:nondet:negative:dup-add", function () {
  let idMember = "idMember_316";
  let key = "key_316";
  let token = "token_316";
  let value = "value_316";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsMembersVotedByIdCard(idCard, idMember, key, token, value);
  // waitForCardMemberVotedAdded(idCard, idMember, key, token, value);
  verifyCardMemberVotedExists(idCard, idMember, key, token, value);
  tryToAddExistingCardMemberVoted(idCard, idMember, key, token, value);
  verifyCardMemberVotedExists(idCard, idMember, key, token, value);
});

// Story: crud:CardSticker:nondet:1:1
bthread("crud:CardSticker:nondet:1:1", function () {
  let idSticker = "idSticker_320";
  let image = "image_320";
  let key = "key_320";
  let left = "left_320";
  let rotate = "rotate_320";
  let token = "token_320";
  let top = "top_320";
  let zIndex = "zIndex_320";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsStickersByIdCard(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  // waitForCardStickerAdded(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  tryToAddExistingCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  verifyCardStickerExists(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  updateCardsStickersByIdCardByIdSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  deleteCardsStickersByIdCardByIdSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  tryToDeleteANonExistingCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  verifyCardStickerDoesNotExist(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
});

// Story: crud:CardSticker:nondet:1:2
bthread("crud:CardSticker:nondet:1:2", function () {
  let idSticker = "idSticker_321";
  let image = "image_321";
  let key = "key_321";
  let left = "left_321";
  let rotate = "rotate_321";
  let token = "token_321";
  let top = "top_321";
  let zIndex = "zIndex_321";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsStickersByIdCard(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  // waitForCardStickerAdded(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  tryToAddExistingCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  updateCardsStickersByIdCardByIdSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  verifyCardStickerExists(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  deleteCardsStickersByIdCardByIdSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  tryToDeleteANonExistingCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  verifyCardStickerDoesNotExist(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
});

// Story: crud:CardSticker:nondet:negative:dup-add
bthread("crud:CardSticker:nondet:negative:dup-add", function () {
  let idSticker = "idSticker_326";
  let image = "image_326";
  let key = "key_326";
  let left = "left_326";
  let rotate = "rotate_326";
  let token = "token_326";
  let top = "top_326";
  let zIndex = "zIndex_326";
  // Dependency Barrier
  let deps = {};
  deps["idCard"] = matchAnyCardAdded();
  let captured = resolveDependencies(deps);
  idCard = captured["idCard"];
  if (!idCard) idCard = captured["idCard"];
  addCardsStickersByIdCard(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  // waitForCardStickerAdded(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  verifyCardStickerExists(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  tryToAddExistingCardSticker(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
  verifyCardStickerExists(idCard, idSticker, image, key, left, rotate, token, top, zIndex);
});

// Story: crud:Action:read_only
bthread("crud:Action:read_only", function () {
  let idAction = 420;
  verifyActionExists(idAction);
});

// Story: crud:Session:read_only
bthread("crud:Session:read_only", function () {
  let idBoard = "idBoard_440";
  let idSession = 440;
  let key = "key_440";
  let status = "status_440";
  let token = "token_440";
  verifySessionExists(idBoard, idSession, key, status, token);
});

// Story: crud:Search:read_only
bthread("crud:Search:read_only", function () {
  let idOrganizations = "idOrganizations_450";
  let key = "key_450";
  let query = "query_450";
  let token = "token_450";
  verifySearchExists(idOrganizations, key, query, token);
});

// Story: crud:SearchMembers:read_only
bthread("crud:SearchMembers:read_only", function () {
  let key = "key_460";
  let query = "query_460";
  let token = "token_460";
  verifySearchMembersExists(key, query, token);
});

// Story: crud:Type:read_only
bthread("crud:Type:read_only", function () {
  let id = 470;
  let key = "key_470";
  let token = "token_470";
  verifyTypeExists(id, key, token);
});
