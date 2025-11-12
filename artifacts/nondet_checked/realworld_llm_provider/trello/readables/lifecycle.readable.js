/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_action(id) {
  try { tryToDeleteANonExistingAction(id); } catch (_e) {}
  addAction(id);
  verifyActionExists(id);
  tryToAddExistingAction(id);
  deleteAction(id);
  verifyActionDoesNotExist(id);
}

function lifecycle_batch(id) {
  try { tryToDeleteANonExistingBatch(id); } catch (_e) {}
  addBatch(id);
  verifyBatchExists(id);
  tryToAddExistingBatch(id);
  deleteBatch(id);
  verifyBatchDoesNotExist(id);
}

function lifecycle_board(idBoard) {
  try { tryToDeleteANonExistingBoard(idBoard); } catch (_e) {}
  addBoard(idBoard);
  verifyBoardExists(idBoard);
  tryToAddExistingBoard(idBoard);
  deleteBoard(idBoard);
  verifyBoardDoesNotExist(idBoard);
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

function lifecycle_member(id) {
  try { tryToDeleteANonExistingMember(id); } catch (_e) {}
  addMember(id);
  verifyMemberExists(id);
  tryToAddExistingMember(id);
  deleteMember(id);
  verifyMemberDoesNotExist(id);
}

function lifecycle_notification(id) {
  try { tryToDeleteANonExistingNotification(id); } catch (_e) {}
  addNotification(id);
  verifyNotificationExists(id);
  tryToAddExistingNotification(id);
  deleteNotification(id);
  verifyNotificationDoesNotExist(id);
}

function lifecycle_organization(id) {
  try { tryToDeleteANonExistingOrganization(id); } catch (_e) {}
  addOrganization(id);
  verifyOrganizationExists(id);
  tryToAddExistingOrganization(id);
  deleteOrganization(id);
  verifyOrganizationDoesNotExist(id);
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

function lifecycle_token(id) {
  try { tryToDeleteANonExistingToken(id); } catch (_e) {}
  addToken(id);
  verifyTokenExists(id);
  tryToAddExistingToken(id);
  deleteToken(id);
  verifyTokenDoesNotExist(id);
}

function lifecycle_type(id) {
  try { tryToDeleteANonExistingType(id); } catch (_e) {}
  addType(id);
  verifyTypeExists(id);
  tryToAddExistingType(id);
  deleteType(id);
  verifyTypeDoesNotExist(id);
}

function lifecycle_v1(id) {
  try { tryToDeleteANonExistingV1(id); } catch (_e) {}
  addV1(id);
  verifyV1Exists(id);
  tryToAddExistingV1(id);
  deleteV1(id);
  verifyV1DoesNotExist(id);
}

function lifecycle_webhook(idWebhook, field) {
  try { tryToDeleteANonExistingWebhook(idWebhook, field); } catch (_e) {}
  addWebhook(idWebhook, field);
  verifyWebhookExists(idWebhook, field);
  tryToAddExistingWebhook(idWebhook, field);
  deleteWebhook(idWebhook, field);
  verifyWebhookDoesNotExist(idWebhook, field);
}
