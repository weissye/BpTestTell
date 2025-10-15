// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: directus
// Source: artifacts\hls_nondet\real_world_llm_provider\directus\hls_nondet_gold.json


bthread(`HLS PASSIVE: add Collection`, function () {
  const ev = waitFor({op: 'add', entity: 'Collection'});
  block({op: 'deleteCollection'});
  verifyCollectionExists(ev.id);
});

bthread(`HLS PASSIVE: delete Collection`, function () {
  const ev = waitFor({op: 'delete', entity: 'Collection'});
  block({op: 'addCollection'});
  verifyCollectionNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Collection`, function () {
  const ev = waitFor({op: 'update', entity: 'Collection'});
  block({op: 'updateCollection'});
  verifyCollectionExists(ev.id);
  verifyCollectionUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Comment`, function () {
  const ev = waitFor({op: 'add', entity: 'Comment'});
  block({op: 'deleteComment'});
  verifyCommentExists(ev.id);
});

bthread(`HLS PASSIVE: delete Comment`, function () {
  const ev = waitFor({op: 'delete', entity: 'Comment'});
  block({op: 'addComment'});
  verifyCommentNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Comment`, function () {
  const ev = waitFor({op: 'update', entity: 'Comment'});
  block({op: 'updateComment'});
  verifyCommentExists(ev.id);
  verifyCommentUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete Comments`, function () {
  const ev = waitFor({op: 'delete', entity: 'Comments'});
  block({op: 'addComments'});
  verifyCommentsNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Comments`, function () {
  const ev = waitFor({op: 'update', entity: 'Comments'});
  block({op: 'updateComments'});
  verifyCommentsExists(ev.id);
  verifyCommentsUpdated(ev.id);
});

bthread(`HLS PASSIVE: add ContentVersion`, function () {
  const ev = waitFor({op: 'add', entity: 'ContentVersion'});
  block({op: 'deleteContentVersion'});
  verifyContentVersionExists(ev.id);
});

bthread(`HLS PASSIVE: delete ContentVersion`, function () {
  const ev = waitFor({op: 'delete', entity: 'ContentVersion'});
  block({op: 'addContentVersion'});
  verifyContentVersionNotExists(ev.id);
});

bthread(`HLS PASSIVE: update ContentVersion`, function () {
  const ev = waitFor({op: 'update', entity: 'ContentVersion'});
  block({op: 'updateContentVersion'});
  verifyContentVersionExists(ev.id);
  verifyContentVersionUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete ContentVersions`, function () {
  const ev = waitFor({op: 'delete', entity: 'ContentVersions'});
  block({op: 'addContentVersions'});
  verifyContentVersionsNotExists(ev.id);
});

bthread(`HLS PASSIVE: update ContentVersions`, function () {
  const ev = waitFor({op: 'update', entity: 'ContentVersions'});
  block({op: 'updateContentVersions'});
  verifyContentVersionsExists(ev.id);
  verifyContentVersionsUpdated(ev.id);
});

bthread(`HLS PASSIVE: update ExtensionBundle`, function () {
  const ev = waitFor({op: 'update', entity: 'ExtensionBundle'});
  block({op: 'updateExtensionBundle'});
  verifyExtensionBundleExists(ev.id);
  verifyExtensionBundleUpdated(ev.id);
});

bthread(`HLS PASSIVE: update Extensions`, function () {
  const ev = waitFor({op: 'update', entity: 'Extensions'});
  block({op: 'updateExtensions'});
  verifyExtensionsExists(ev.id);
  verifyExtensionsUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Field`, function () {
  const ev = waitFor({op: 'add', entity: 'Field'});
  block({op: 'deleteField'});
  verifyFieldExists(ev.id);
});

bthread(`HLS PASSIVE: delete Field`, function () {
  const ev = waitFor({op: 'delete', entity: 'Field'});
  block({op: 'addField'});
  verifyFieldNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Field`, function () {
  const ev = waitFor({op: 'update', entity: 'Field'});
  block({op: 'updateField'});
  verifyFieldExists(ev.id);
  verifyFieldUpdated(ev.id);
});

bthread(`HLS PASSIVE: add File`, function () {
  const ev = waitFor({op: 'add', entity: 'File'});
  block({op: 'deleteFile'});
  verifyFileExists(ev.id);
});

bthread(`HLS PASSIVE: delete File`, function () {
  const ev = waitFor({op: 'delete', entity: 'File'});
  block({op: 'addFile'});
  verifyFileNotExists(ev.id);
});

bthread(`HLS PASSIVE: update File`, function () {
  const ev = waitFor({op: 'update', entity: 'File'});
  block({op: 'updateFile'});
  verifyFileExists(ev.id);
  verifyFileUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete Files`, function () {
  const ev = waitFor({op: 'delete', entity: 'Files'});
  block({op: 'addFiles'});
  verifyFilesNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Files`, function () {
  const ev = waitFor({op: 'update', entity: 'Files'});
  block({op: 'updateFiles'});
  verifyFilesExists(ev.id);
  verifyFilesUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Flow`, function () {
  const ev = waitFor({op: 'add', entity: 'Flow'});
  block({op: 'deleteFlow'});
  verifyFlowExists(ev.id);
});

bthread(`HLS PASSIVE: delete Flow`, function () {
  const ev = waitFor({op: 'delete', entity: 'Flow'});
  block({op: 'addFlow'});
  verifyFlowNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Flow`, function () {
  const ev = waitFor({op: 'update', entity: 'Flow'});
  block({op: 'updateFlow'});
  verifyFlowExists(ev.id);
  verifyFlowUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete Flows`, function () {
  const ev = waitFor({op: 'delete', entity: 'Flows'});
  block({op: 'addFlows'});
  verifyFlowsNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Flows`, function () {
  const ev = waitFor({op: 'update', entity: 'Flows'});
  block({op: 'updateFlows'});
  verifyFlowsExists(ev.id);
  verifyFlowsUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Folder`, function () {
  const ev = waitFor({op: 'add', entity: 'Folder'});
  block({op: 'deleteFolder'});
  verifyFolderExists(ev.id);
});

bthread(`HLS PASSIVE: delete Folder`, function () {
  const ev = waitFor({op: 'delete', entity: 'Folder'});
  block({op: 'addFolder'});
  verifyFolderNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Folder`, function () {
  const ev = waitFor({op: 'update', entity: 'Folder'});
  block({op: 'updateFolder'});
  verifyFolderExists(ev.id);
  verifyFolderUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete Folders`, function () {
  const ev = waitFor({op: 'delete', entity: 'Folders'});
  block({op: 'addFolders'});
  verifyFoldersNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Folders`, function () {
  const ev = waitFor({op: 'update', entity: 'Folders'});
  block({op: 'updateFolders'});
  verifyFoldersExists(ev.id);
  verifyFoldersUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Item`, function () {
  const ev = waitFor({op: 'add', entity: 'Item'});
  block({op: 'deleteItem'});
  verifyItemExists(ev.id);
});

bthread(`HLS PASSIVE: delete Item`, function () {
  const ev = waitFor({op: 'delete', entity: 'Item'});
  block({op: 'addItem'});
  verifyItemNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Item`, function () {
  const ev = waitFor({op: 'update', entity: 'Item'});
  block({op: 'updateItem'});
  verifyItemExists(ev.id);
  verifyItemUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete Items`, function () {
  const ev = waitFor({op: 'delete', entity: 'Items'});
  block({op: 'addItems'});
  verifyItemsNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Items`, function () {
  const ev = waitFor({op: 'update', entity: 'Items'});
  block({op: 'updateItems'});
  verifyItemsExists(ev.id);
  verifyItemsUpdated(ev.id);
});

bthread(`HLS PASSIVE: update LastUsedPageMe`, function () {
  const ev = waitFor({op: 'update', entity: 'LastUsedPageMe'});
  block({op: 'updateLastUsedPageMe'});
  verifyLastUsedPageMeExists(ev.id);
  verifyLastUsedPageMeUpdated(ev.id);
});

bthread(`HLS PASSIVE: update You`, function () {
  const ev = waitFor({op: 'update', entity: 'You'});
  block({op: 'updateYou'});
  verifyYouExists(ev.id);
  verifyYouUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Operation`, function () {
  const ev = waitFor({op: 'add', entity: 'Operation'});
  block({op: 'deleteOperation'});
  verifyOperationExists(ev.id);
});

bthread(`HLS PASSIVE: delete Operation`, function () {
  const ev = waitFor({op: 'delete', entity: 'Operation'});
  block({op: 'addOperation'});
  verifyOperationNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Operation`, function () {
  const ev = waitFor({op: 'update', entity: 'Operation'});
  block({op: 'updateOperation'});
  verifyOperationExists(ev.id);
  verifyOperationUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete Operations`, function () {
  const ev = waitFor({op: 'delete', entity: 'Operations'});
  block({op: 'addOperations'});
  verifyOperationsNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Operations`, function () {
  const ev = waitFor({op: 'update', entity: 'Operations'});
  block({op: 'updateOperations'});
  verifyOperationsExists(ev.id);
  verifyOperationsUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Permission`, function () {
  const ev = waitFor({op: 'add', entity: 'Permission'});
  block({op: 'deletePermission'});
  verifyPermissionExists(ev.id);
});

bthread(`HLS PASSIVE: delete Permission`, function () {
  const ev = waitFor({op: 'delete', entity: 'Permission'});
  block({op: 'addPermission'});
  verifyPermissionNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Permission`, function () {
  const ev = waitFor({op: 'update', entity: 'Permission'});
  block({op: 'updatePermission'});
  verifyPermissionExists(ev.id);
  verifyPermissionUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete Permissions`, function () {
  const ev = waitFor({op: 'delete', entity: 'Permissions'});
  block({op: 'addPermissions'});
  verifyPermissionsNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Permissions`, function () {
  const ev = waitFor({op: 'update', entity: 'Permissions'});
  block({op: 'updatePermissions'});
  verifyPermissionsExists(ev.id);
  verifyPermissionsUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Preset`, function () {
  const ev = waitFor({op: 'add', entity: 'Preset'});
  block({op: 'deletePreset'});
  verifyPresetExists(ev.id);
});

bthread(`HLS PASSIVE: delete Preset`, function () {
  const ev = waitFor({op: 'delete', entity: 'Preset'});
  block({op: 'addPreset'});
  verifyPresetNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Preset`, function () {
  const ev = waitFor({op: 'update', entity: 'Preset'});
  block({op: 'updatePreset'});
  verifyPresetExists(ev.id);
  verifyPresetUpdated(ev.id);
});

bthread(`HLS PASSIVE: delete Presets`, function () {
  const ev = waitFor({op: 'delete', entity: 'Presets'});
  block({op: 'addPresets'});
  verifyPresetsNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Presets`, function () {
  const ev = waitFor({op: 'update', entity: 'Presets'});
  block({op: 'updatePresets'});
  verifyPresetsExists(ev.id);
  verifyPresetsUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Relation`, function () {
  const ev = waitFor({op: 'add', entity: 'Relation'});
  block({op: 'deleteRelation'});
  verifyRelationExists(ev.id);
});

bthread(`HLS PASSIVE: delete Relation`, function () {
  const ev = waitFor({op: 'delete', entity: 'Relation'});
  block({op: 'addRelation'});
  verifyRelationNotExists(ev.id);
});

bthread(`HLS PASSIVE: update Relation`, function () {
  const ev = waitFor({op: 'update', entity: 'Relation'});
  block({op: 'updateRelation'});
  verifyRelationExists(ev.id);
  verifyRelationUpdated(ev.id);
});

bthread(`HLS PASSIVE: add Role`, function () {
  const ev = waitFor({op: 'add', entity: 'Role'});
  block({op: 'deleteRole'});
  verifyRoleExists(ev.id);
});

bthread(`HLS PASSIVE: delete Role`, function () {
  const ev = waitFor({op: 'delete', entity: 'Role'});
  block({op: 'addRole'});
  verifyRoleNotExists(ev.id);
});

