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

function lifecycle_checklist(idChecklist, field, idCheckItem, filter) {
  try { tryToDeleteANonExistingChecklist(idChecklist, field, idCheckItem, filter); } catch (_e) {}
  addChecklist(idChecklist, field, idCheckItem, filter);
  verifyChecklistExists(idChecklist, field, idCheckItem, filter);
  tryToAddExistingChecklist(idChecklist, field, idCheckItem, filter);
  deleteChecklist(idChecklist, field, idCheckItem, filter);
  verifyChecklistDoesNotExist(idChecklist, field, idCheckItem, filter);
}

function lifecycle_label(id) {
  try { tryToDeleteANonExistingLabel(id); } catch (_e) {}
  addLabel(id);
  verifyLabelExists(id);
  tryToAddExistingLabel(id);
  deleteLabel(id);
  verifyLabelDoesNotExist(id);
}

function lifecycle_list(idList, field, filter) {
  try { tryToDeleteANonExistingList(idList, field, filter); } catch (_e) {}
  addList(idList, field, filter);
  verifyListExists(idList, field, filter);
  tryToAddExistingList(idList, field, filter);
  deleteList(idList, field, filter);
  verifyListDoesNotExist(idList, field, filter);
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

function lifecycle_session(id) {
  try { tryToDeleteANonExistingSession(id); } catch (_e) {}
  addSession(id);
  verifySessionExists(id);
  tryToAddExistingSession(id);
  deleteSession(id);
  verifySessionDoesNotExist(id);
}

function lifecycle_type(id) {
  try { tryToDeleteANonExistingType(id); } catch (_e) {}
  addType(id);
  verifyTypeExists(id);
  tryToAddExistingType(id);
  deleteType(id);
  verifyTypeDoesNotExist(id);
}

function lifecycle_v1(idBoard) {
  try { tryToDeleteANonExistingV1(idBoard); } catch (_e) {}
  addV1(idBoard);
  verifyV1Exists(idBoard);
  tryToAddExistingV1(idBoard);
  deleteV1(idBoard);
  verifyV1DoesNotExist(idBoard);
}

function lifecycle_webhook(idWebhook, field) {
  try { tryToDeleteANonExistingWebhook(idWebhook, field); } catch (_e) {}
  addWebhook(idWebhook, field);
  verifyWebhookExists(idWebhook, field);
  tryToAddExistingWebhook(idWebhook, field);
  deleteWebhook(idWebhook, field);
  verifyWebhookDoesNotExist(idWebhook, field);
}
