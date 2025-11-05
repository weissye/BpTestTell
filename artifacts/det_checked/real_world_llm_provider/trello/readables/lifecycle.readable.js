/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_action(idAction, field) {
  try { tryToDeleteANonExistingAction(idAction, field); } catch (_e) {}
  addAction(idAction, field);
  verifyActionExists(idAction, field);
  tryToAddExistingAction(idAction, field);
  deleteAction(idAction, field);
  verifyActionDoesNotExist(idAction, field);
}

function lifecycle_batch(id) {
  try { tryToDeleteANonExistingBatch(id); } catch (_e) {}
  addBatch(id);
  verifyBatchExists(id);
  tryToAddExistingBatch(id);
  deleteBatch(id);
  verifyBatchDoesNotExist(id);
}

function lifecycle_board(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp) {
  try { tryToDeleteANonExistingBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp); } catch (_e) {}
  addBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp);
  verifyBoardExists(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp);
  tryToAddExistingBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp);
  deleteBoard(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp);
  verifyBoardDoesNotExist(idBoard, filter, idMember, field, idMembership, idCard, idLabel, powerUp);
}

function lifecycle_card(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color) {
  try { tryToDeleteANonExistingCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color); } catch (_e) {}
  addCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color);
  verifyCardExists(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color);
  tryToAddExistingCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color);
  deleteCard(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color);
  verifyCardDoesNotExist(idCard, idChecklist, idCheckItem, field, idSticker, idAction, idAttachment, idMember, idChecklistCurrent, idLabel, color);
}

function lifecycle_checklist(idChecklist, field, idCheckItem, filter) {
  try { tryToDeleteANonExistingChecklist(idChecklist, field, idCheckItem, filter); } catch (_e) {}
  addChecklist(idChecklist, field, idCheckItem, filter);
  verifyChecklistExists(idChecklist, field, idCheckItem, filter);
  tryToAddExistingChecklist(idChecklist, field, idCheckItem, filter);
  deleteChecklist(idChecklist, field, idCheckItem, filter);
  verifyChecklistDoesNotExist(idChecklist, field, idCheckItem, filter);
}

function lifecycle_label(idLabel, field) {
  try { tryToDeleteANonExistingLabel(idLabel, field); } catch (_e) {}
  addLabel(idLabel, field);
  verifyLabelExists(idLabel, field);
  tryToAddExistingLabel(idLabel, field);
  deleteLabel(idLabel, field);
  verifyLabelDoesNotExist(idLabel, field);
}

function lifecycle_list(idList, field, filter) {
  try { tryToDeleteANonExistingList(idList, field, filter); } catch (_e) {}
  addList(idList, field, filter);
  verifyListExists(idList, field, filter);
  tryToAddExistingList(idList, field, filter);
  deleteList(idList, field, filter);
  verifyListDoesNotExist(idList, field, filter);
}

function lifecycle_member(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji) {
  try { tryToDeleteANonExistingMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji); } catch (_e) {}
  addMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji);
  verifyMemberExists(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji);
  tryToAddExistingMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji);
  deleteMember(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji);
  verifyMemberDoesNotExist(idMember, idBoardBackground, idSavedSearch, idBoardStar, filter, field, idCustomSticker, idCustomEmoji);
}

function lifecycle_notification(idNotification, field) {
  try { tryToDeleteANonExistingNotification(idNotification, field); } catch (_e) {}
  addNotification(idNotification, field);
  verifyNotificationExists(idNotification, field);
  tryToAddExistingNotification(idNotification, field);
  deleteNotification(idNotification, field);
  verifyNotificationDoesNotExist(idNotification, field);
}

function lifecycle_organization(idOrg, idMember, filter, field, idMembership) {
  try { tryToDeleteANonExistingOrganization(idOrg, idMember, filter, field, idMembership); } catch (_e) {}
  addOrganization(idOrg, idMember, filter, field, idMembership);
  verifyOrganizationExists(idOrg, idMember, filter, field, idMembership);
  tryToAddExistingOrganization(idOrg, idMember, filter, field, idMembership);
  deleteOrganization(idOrg, idMember, filter, field, idMembership);
  verifyOrganizationDoesNotExist(idOrg, idMember, filter, field, idMembership);
}

function lifecycle_search(id) {
  try { tryToDeleteANonExistingSearch(id); } catch (_e) {}
  addSearch(id);
  verifySearchExists(id);
  tryToAddExistingSearch(id);
  deleteSearch(id);
  verifySearchDoesNotExist(id);
}

function lifecycle_session(idSession) {
  try { tryToDeleteANonExistingSession(idSession); } catch (_e) {}
  addSession(idSession);
  verifySessionExists(idSession);
  tryToAddExistingSession(idSession);
  deleteSession(idSession);
  verifySessionDoesNotExist(idSession);
}

function lifecycle_token(token, field, idWebhook) {
  try { tryToDeleteANonExistingToken(token, field, idWebhook); } catch (_e) {}
  addToken(token, field, idWebhook);
  verifyTokenExists(token, field, idWebhook);
  tryToAddExistingToken(token, field, idWebhook);
  deleteToken(token, field, idWebhook);
  verifyTokenDoesNotExist(token, field, idWebhook);
}

function lifecycle_type(id) {
  try { tryToDeleteANonExistingType(id); } catch (_e) {}
  addType(id);
  verifyTypeExists(id);
  tryToAddExistingType(id);
  deleteType(id);
  verifyTypeDoesNotExist(id);
}

function lifecycle_webhook(idWebhook, field) {
  try { tryToDeleteANonExistingWebhook(idWebhook, field); } catch (_e) {}
  addWebhook(idWebhook, field);
  verifyWebhookExists(idWebhook, field);
  tryToAddExistingWebhook(idWebhook, field);
  deleteWebhook(idWebhook, field);
  verifyWebhookDoesNotExist(idWebhook, field);
}
