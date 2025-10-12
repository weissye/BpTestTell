/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_activity(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingActivity(id); } catch (_e) {}
  addActivity(id);
  verifyActivityExists(id);
  tryToAddExistingActivity(id);
  deleteActivity(id);
  verifyActivityDoesNotExist(id);
}

function lifecycle_asset(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingAsset(id); } catch (_e) {}
  addAsset(id);
  verifyAssetExists(id);
  tryToAddExistingAsset(id);
  deleteAsset(id);
  verifyAssetDoesNotExist(id);
}

function lifecycle_auth(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingAuth(id); } catch (_e) {}
  addAuth(id);
  verifyAuthExists(id);
  tryToAddExistingAuth(id);
  deleteAuth(id);
  verifyAuthDoesNotExist(id);
}

function lifecycle_collection(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingCollection(id); } catch (_e) {}
  addCollection(id);
  verifyCollectionExists(id);
  tryToAddExistingCollection(id);
  deleteCollection(id);
  verifyCollectionDoesNotExist(id);
}

function lifecycle_comment(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingComment(id); } catch (_e) {}
  addComment(id);
  verifyCommentExists(id);
  tryToAddExistingComment(id);
  deleteComment(id);
  verifyCommentDoesNotExist(id);
}

function lifecycle_extension(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingExtension(id); } catch (_e) {}
  addExtension(id);
  verifyExtensionExists(id);
  tryToAddExistingExtension(id);
  deleteExtension(id);
  verifyExtensionDoesNotExist(id);
}

function lifecycle_field(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingField(id); } catch (_e) {}
  addField(id);
  verifyFieldExists(id);
  tryToAddExistingField(id);
  deleteField(id);
  verifyFieldDoesNotExist(id);
}

function lifecycle_file(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingFile(id); } catch (_e) {}
  addFile(id);
  verifyFileExists(id);
  tryToAddExistingFile(id);
  deleteFile(id);
  verifyFileDoesNotExist(id);
}

function lifecycle_flow(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingFlow(id); } catch (_e) {}
  addFlow(id);
  verifyFlowExists(id);
  tryToAddExistingFlow(id);
  deleteFlow(id);
  verifyFlowDoesNotExist(id);
}

function lifecycle_folder(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingFolder(id); } catch (_e) {}
  addFolder(id);
  verifyFolderExists(id);
  tryToAddExistingFolder(id);
  deleteFolder(id);
  verifyFolderDoesNotExist(id);
}

function lifecycle_item(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingItem(id); } catch (_e) {}
  addItem(id);
  verifyItemExists(id);
  tryToAddExistingItem(id);
  deleteItem(id);
  verifyItemDoesNotExist(id);
}

function lifecycle_operation(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingOperation(id); } catch (_e) {}
  addOperation(id);
  verifyOperationExists(id);
  tryToAddExistingOperation(id);
  deleteOperation(id);
  verifyOperationDoesNotExist(id);
}

function lifecycle_permission(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPermission(id); } catch (_e) {}
  addPermission(id);
  verifyPermissionExists(id);
  tryToAddExistingPermission(id);
  deletePermission(id);
  verifyPermissionDoesNotExist(id);
}

function lifecycle_preset(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingPreset(id); } catch (_e) {}
  addPreset(id);
  verifyPresetExists(id);
  tryToAddExistingPreset(id);
  deletePreset(id);
  verifyPresetDoesNotExist(id);
}

function lifecycle_relation(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRelation(id); } catch (_e) {}
  addRelation(id);
  verifyRelationExists(id);
  tryToAddExistingRelation(id);
  deleteRelation(id);
  verifyRelationDoesNotExist(id);
}

function lifecycle_revision(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRevision(id); } catch (_e) {}
  addRevision(id);
  verifyRevisionExists(id);
  tryToAddExistingRevision(id);
  deleteRevision(id);
  verifyRevisionDoesNotExist(id);
}

function lifecycle_role(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingRole(id); } catch (_e) {}
  addRole(id);
  verifyRoleExists(id);
  tryToAddExistingRole(id);
  deleteRole(id);
  verifyRoleDoesNotExist(id);
}

function lifecycle_schema(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingSchema(id); } catch (_e) {}
  addSchema(id);
  verifySchemaExists(id);
  tryToAddExistingSchema(id);
  deleteSchema(id);
  verifySchemaDoesNotExist(id);
}

function lifecycle_server(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingServer(id); } catch (_e) {}
  addServer(id);
  verifyServerExists(id);
  tryToAddExistingServer(id);
  deleteServer(id);
  verifyServerDoesNotExist(id);
}

function lifecycle_setting(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingSetting(id); } catch (_e) {}
  addSetting(id);
  verifySettingExists(id);
  tryToAddExistingSetting(id);
  deleteSetting(id);
  verifySettingDoesNotExist(id);
}

function lifecycle_user(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingUser(id); } catch (_e) {}
  addUser(id);
  verifyUserExists(id);
  tryToAddExistingUser(id);
  deleteUser(id);
  verifyUserDoesNotExist(id);
}

function lifecycle_util(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingUtil(id); } catch (_e) {}
  addUtil(id);
  verifyUtilExists(id);
  tryToAddExistingUtil(id);
  deleteUtil(id);
  verifyUtilDoesNotExist(id);
}

function lifecycle_version(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingVersion(id); } catch (_e) {}
  addVersion(id);
  verifyVersionExists(id);
  tryToAddExistingVersion(id);
  deleteVersion(id);
  verifyVersionDoesNotExist(id);
}

function lifecycle_webhook(id) {
  // try delete first (stale cleanup)
  try { tryToDeleteANonExistingWebhook(id); } catch (_e) {}
  addWebhook(id);
  verifyWebhookExists(id);
  tryToAddExistingWebhook(id);
  deleteWebhook(id);
  verifyWebhookDoesNotExist(id);
}
