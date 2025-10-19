// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: directus
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("AcceptLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAccept(x.id);
  updateAccept(x.id);
  updateAccept(x.id);
  verifyAcceptExists(x.id);
  verifyAcceptUpdated(x.id);
});

bthread("ActivityLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addActivity(x.id);
  updateActivity(x.id);
  updateActivity(x.id);
  verifyActivityExists(x.id);
  verifyActivityUpdated(x.id);
});

bthread("ApplyLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addApply(x.id);
  updateApply(x.id);
  updateApply(x.id);
  verifyApplyExists(x.id);
  verifyApplyUpdated(x.id);
});

bthread("AssetLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAsset(x.id);
  updateAsset(x.id);
  updateAsset(x.id);
  verifyAssetExists(x.id);
  verifyAssetUpdated(x.id);
});

bthread("AuthLifecycle", function () {
  const x = pick([{id: "A001"}, {id: "A002"}]);
  addAuth(x.id);
  updateAuth(x.id);
  updateAuth(x.id);
  verifyAuthExists(x.id);
  verifyAuthUpdated(x.id);
});

bthread("CacheLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCache(x.id);
  updateCache(x.id);
  updateCache(x.id);
  verifyCacheExists(x.id);
  verifyCacheUpdated(x.id);
});

bthread("ClearLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addClear(x.id);
  updateClear(x.id);
  updateClear(x.id);
  verifyClearExists(x.id);
  verifyClearUpdated(x.id);
});

bthread("CollectionLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCollection(x.id);
  updateCollection(x.id);
  updateCollection(x.id);
  verifyCollectionExists(x.id);
  verifyCollectionUpdated(x.id);
});

bthread("CommentLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addComment(x.id);
  updateComment(x.id);
  updateComment(x.id);
  verifyCommentExists(x.id);
  verifyCommentUpdated(x.id);
});

bthread("CompareLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCompare(x.id);
  updateCompare(x.id);
  updateCompare(x.id);
  verifyCompareExists(x.id);
  verifyCompareUpdated(x.id);
});

bthread("DiffLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDiff(x.id);
  updateDiff(x.id);
  updateDiff(x.id);
  verifyDiffExists(x.id);
  verifyDiffUpdated(x.id);
});

bthread("DisableLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDisable(x.id);
  updateDisable(x.id);
  updateDisable(x.id);
  verifyDisableExists(x.id);
  verifyDisableUpdated(x.id);
});

bthread("EnableLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addEnable(x.id);
  updateEnable(x.id);
  updateEnable(x.id);
  verifyEnableExists(x.id);
  verifyEnableUpdated(x.id);
});

bthread("ExportLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExport(x.id);
  updateExport(x.id);
  updateExport(x.id);
  verifyExportExists(x.id);
  verifyExportUpdated(x.id);
});

bthread("ExtensionLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExtension(x.id);
  updateExtension(x.id);
  updateExtension(x.id);
  verifyExtensionExists(x.id);
  verifyExtensionUpdated(x.id);
});

bthread("FieldLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addField(x.id);
  updateField(x.id);
  updateField(x.id);
  verifyFieldExists(x.id);
  verifyFieldUpdated(x.id);
});

bthread("FileLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFile(x.id);
  updateFile(x.id);
  updateFile(x.id);
  verifyFileExists(x.id);
  verifyFileUpdated(x.id);
});

bthread("FlowLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFlow(x.id);
  updateFlow(x.id);
  updateFlow(x.id);
  verifyFlowExists(x.id);
  verifyFlowUpdated(x.id);
});

bthread("FolderLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFolder(x.id);
  updateFolder(x.id);
  updateFolder(x.id);
  verifyFolderExists(x.id);
  verifyFolderUpdated(x.id);
});

bthread("GenerateLifecycle", function () {
  const x = pick([{id: "G001"}, {id: "G002"}]);
  addGenerate(x.id);
  updateGenerate(x.id);
  updateGenerate(x.id);
  verifyGenerateExists(x.id);
  verifyGenerateUpdated(x.id);
});

bthread("HashLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHash(x.id);
  updateHash(x.id);
  updateHash(x.id);
  verifyHashExists(x.id);
  verifyHashUpdated(x.id);
});

bthread("ImportLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addImport(x.id);
  updateImport(x.id);
  updateImport(x.id);
  verifyImportExists(x.id);
  verifyImportUpdated(x.id);
});

bthread("InfoLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInfo(x.id);
  updateInfo(x.id);
  updateInfo(x.id);
  verifyInfoExists(x.id);
  verifyInfoUpdated(x.id);
});

bthread("InviteLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addInvite(x.id);
  updateInvite(x.id);
  updateInvite(x.id);
  verifyInviteExists(x.id);
  verifyInviteUpdated(x.id);
});

bthread("ItemLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addItem(x.id);
  updateItem(x.id);
  updateItem(x.id);
  verifyItemExists(x.id);
  verifyItemUpdated(x.id);
});

bthread("LoginLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLogin(x.id);
  updateLogin(x.id);
  updateLogin(x.id);
  verifyLoginExists(x.id);
  verifyLoginUpdated(x.id);
});

bthread("LogoutLifecycle", function () {
  const x = pick([{id: "L001"}, {id: "L002"}]);
  addLogout(x.id);
  updateLogout(x.id);
  updateLogout(x.id);
  verifyLogoutExists(x.id);
  verifyLogoutUpdated(x.id);
});

bthread("MeLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMe(x.id);
  updateMe(x.id);
  updateMe(x.id);
  verifyMeExists(x.id);
  verifyMeUpdated(x.id);
});

bthread("OauthLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOauth(x.id);
  updateOauth(x.id);
  updateOauth(x.id);
  verifyOauthExists(x.id);
  verifyOauthUpdated(x.id);
});

bthread("OperationLifecycle", function () {
  const x = pick([{id: "O001"}, {id: "O002"}]);
  addOperation(x.id);
  updateOperation(x.id);
  updateOperation(x.id);
  verifyOperationExists(x.id);
  verifyOperationUpdated(x.id);
});

bthread("PageLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPage(x.id);
  updatePage(x.id);
  updatePage(x.id);
  verifyPageExists(x.id);
  verifyPageUpdated(x.id);
});

bthread("PasswordLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPassword(x.id);
  updatePassword(x.id);
  updatePassword(x.id);
  verifyPasswordExists(x.id);
  verifyPasswordUpdated(x.id);
});

bthread("PermissionLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPermission(x.id);
  updatePermission(x.id);
  updatePermission(x.id);
  verifyPermissionExists(x.id);
  verifyPermissionUpdated(x.id);
});

bthread("PingLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPing(x.id);
  updatePing(x.id);
  updatePing(x.id);
  verifyPingExists(x.id);
  verifyPingUpdated(x.id);
});

bthread("PresetLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPreset(x.id);
  updatePreset(x.id);
  updatePreset(x.id);
  verifyPresetExists(x.id);
  verifyPresetUpdated(x.id);
});

bthread("PromoteLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPromote(x.id);
  updatePromote(x.id);
  updatePromote(x.id);
  verifyPromoteExists(x.id);
  verifyPromoteUpdated(x.id);
});

bthread("RandomLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRandom(x.id);
  updateRandom(x.id);
  updateRandom(x.id);
  verifyRandomExists(x.id);
  verifyRandomUpdated(x.id);
});

bthread("RefreshLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRefresh(x.id);
  updateRefresh(x.id);
  updateRefresh(x.id);
  verifyRefreshExists(x.id);
  verifyRefreshUpdated(x.id);
});

bthread("RelationLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRelation(x.id);
  updateRelation(x.id);
  updateRelation(x.id);
  verifyRelationExists(x.id);
  verifyRelationUpdated(x.id);
});

bthread("RequestLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRequest(x.id);
  updateRequest(x.id);
  updateRequest(x.id);
  verifyRequestExists(x.id);
  verifyRequestUpdated(x.id);
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addReset(x.id);
  updateReset(x.id);
  updateReset(x.id);
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
});

bthread("RevisionLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRevision(x.id);
  updateRevision(x.id);
  updateRevision(x.id);
  verifyRevisionExists(x.id);
  verifyRevisionUpdated(x.id);
});

bthread("RoleLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRole(x.id);
  updateRole(x.id);
  updateRole(x.id);
  verifyRoleExists(x.id);
  verifyRoleUpdated(x.id);
});

bthread("SaveLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSave(x.id);
  updateSave(x.id);
  updateSave(x.id);
  verifySaveExists(x.id);
  verifySaveUpdated(x.id);
});

bthread("SchemaLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSchema(x.id);
  updateSchema(x.id);
  updateSchema(x.id);
  verifySchemaExists(x.id);
  verifySchemaUpdated(x.id);
});

bthread("ServerLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addServer(x.id);
  updateServer(x.id);
  updateServer(x.id);
  verifyServerExists(x.id);
  verifyServerUpdated(x.id);
});

bthread("SettingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSetting(x.id);
  updateSetting(x.id);
  updateSetting(x.id);
  verifySettingExists(x.id);
  verifySettingUpdated(x.id);
});

bthread("SnapshotLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSnapshot(x.id);
  updateSnapshot(x.id);
  updateSnapshot(x.id);
  verifySnapshotExists(x.id);
  verifySnapshotUpdated(x.id);
});

bthread("SortLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSort(x.id);
  updateSort(x.id);
  updateSort(x.id);
  verifySortExists(x.id);
  verifySortUpdated(x.id);
});

bthread("StringLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addString(x.id);
  updateString(x.id);
  updateString(x.id);
  verifyStringExists(x.id);
  verifyStringUpdated(x.id);
});

bthread("TfaLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTfa(x.id);
  updateTfa(x.id);
  updateTfa(x.id);
  verifyTfaExists(x.id);
  verifyTfaUpdated(x.id);
});

bthread("TrackLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTrack(x.id);
  updateTrack(x.id);
  updateTrack(x.id);
  verifyTrackExists(x.id);
  verifyTrackUpdated(x.id);
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUser(x.id);
  updateUser(x.id);
  updateUser(x.id);
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

bthread("UtilLifecycle", function () {
  const x = pick([{id: "U001"}, {id: "U002"}]);
  addUtil(x.id);
  updateUtil(x.id);
  updateUtil(x.id);
  verifyUtilExists(x.id);
  verifyUtilUpdated(x.id);
});

bthread("VerifyLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVerify(x.id);
  updateVerify(x.id);
  updateVerify(x.id);
  verifyVerifyExists(x.id);
  verifyVerifyUpdated(x.id);
});

bthread("VersionLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVersion(x.id);
  updateVersion(x.id);
  updateVersion(x.id);
  verifyVersionExists(x.id);
  verifyVersionUpdated(x.id);
});

bthread("WebhookLifecycle", function () {
  const x = pick([{id: "W001"}, {id: "W002"}]);
  addWebhook(x.id);
  updateWebhook(x.id);
  updateWebhook(x.id);
  verifyWebhookExists(x.id);
  verifyWebhookUpdated(x.id);
});

// ===== NONDET VARIANTS =====

bthread("Accept nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Accept_id_N"}]);
  const steps = pick([0,1,2,3]);
  addAccept(x.id);
  for (var i=0; i<steps; i++) {
    updateAccept(x.id);
  }
  if (pick([true,false])) { deleteAccept(x.id); }
  verifyAcceptExists(x.id);
  verifyAcceptUpdated(x.id);
});

bthread("Accept nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAccept(a.id);
  block(matchAddAccept(a.id, ANY), function () {});
  addAccept(b.id);
});

bthread("Activity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Activity_id_N"}]);
  const steps = pick([0,1,2,3]);
  addActivity(x.id);
  for (var i=0; i<steps; i++) {
    updateActivity(x.id);
  }
  if (pick([true,false])) { deleteActivity(x.id); }
  verifyActivityExists(x.id);
  verifyActivityUpdated(x.id);
});

bthread("Activity nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addActivity(a.id);
  block(matchAddActivity(a.id, ANY), function () {});
  addActivity(b.id);
});

bthread("Apply nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Apply_id_N"}]);
  const steps = pick([0,1,2,3]);
  addApply(x.id);
  for (var i=0; i<steps; i++) {
    updateApply(x.id);
  }
  if (pick([true,false])) { deleteApply(x.id); }
  verifyApplyExists(x.id);
  verifyApplyUpdated(x.id);
});

bthread("Apply nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApply(a.id);
  block(matchAddApply(a.id, ANY), function () {});
  addApply(b.id);
});

bthread("Asset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Asset_id_N"}]);
  const steps = pick([0,1,2,3]);
  addAsset(x.id);
  for (var i=0; i<steps; i++) {
    updateAsset(x.id);
  }
  if (pick([true,false])) { deleteAsset(x.id); }
  verifyAssetExists(x.id);
  verifyAssetUpdated(x.id);
});

bthread("Asset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAsset(a.id);
  block(matchAddAsset(a.id, ANY), function () {});
  addAsset(b.id);
});

bthread("Auth nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Auth_id_N"}]);
  const steps = pick([0,1,2,3]);
  addAuth(x.id);
  for (var i=0; i<steps; i++) {
    updateAuth(x.id);
  }
  if (pick([true,false])) { deleteAuth(x.id); }
  verifyAuthExists(x.id);
  verifyAuthUpdated(x.id);
});

bthread("Auth nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAuth(a.id);
  block(matchAddAuth(a.id, ANY), function () {});
  addAuth(b.id);
});

bthread("Cache nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Cache_id_N"}]);
  const steps = pick([0,1,2,3]);
  addCache(x.id);
  for (var i=0; i<steps; i++) {
    updateCache(x.id);
  }
  if (pick([true,false])) { deleteCache(x.id); }
  verifyCacheExists(x.id);
  verifyCacheUpdated(x.id);
});

bthread("Cache nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCache(a.id);
  block(matchAddCache(a.id, ANY), function () {});
  addCache(b.id);
});

bthread("Clear nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Clear_id_N"}]);
  const steps = pick([0,1,2,3]);
  addClear(x.id);
  for (var i=0; i<steps; i++) {
    updateClear(x.id);
  }
  if (pick([true,false])) { deleteClear(x.id); }
  verifyClearExists(x.id);
  verifyClearUpdated(x.id);
});

bthread("Clear nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClear(a.id);
  block(matchAddClear(a.id, ANY), function () {});
  addClear(b.id);
});

bthread("Collection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Collection_id_N"}]);
  const steps = pick([0,1,2,3]);
  addCollection(x.id);
  for (var i=0; i<steps; i++) {
    updateCollection(x.id);
  }
  if (pick([true,false])) { deleteCollection(x.id); }
  verifyCollectionExists(x.id);
  verifyCollectionUpdated(x.id);
});

bthread("Collection nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCollection(a.id);
  block(matchAddCollection(a.id, ANY), function () {});
  addCollection(b.id);
});

bthread("Comment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Comment_id_N"}]);
  const steps = pick([0,1,2,3]);
  addComment(x.id);
  for (var i=0; i<steps; i++) {
    updateComment(x.id);
  }
  if (pick([true,false])) { deleteComment(x.id); }
  verifyCommentExists(x.id);
  verifyCommentUpdated(x.id);
});

bthread("Comment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addComment(a.id);
  block(matchAddComment(a.id, ANY), function () {});
  addComment(b.id);
});

bthread("Compare nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Compare_id_N"}]);
  const steps = pick([0,1,2,3]);
  addCompare(x.id);
  for (var i=0; i<steps; i++) {
    updateCompare(x.id);
  }
  if (pick([true,false])) { deleteCompare(x.id); }
  verifyCompareExists(x.id);
  verifyCompareUpdated(x.id);
});

bthread("Compare nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCompare(a.id);
  block(matchAddCompare(a.id, ANY), function () {});
  addCompare(b.id);
});

bthread("Diff nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Diff_id_N"}]);
  const steps = pick([0,1,2,3]);
  addDiff(x.id);
  for (var i=0; i<steps; i++) {
    updateDiff(x.id);
  }
  if (pick([true,false])) { deleteDiff(x.id); }
  verifyDiffExists(x.id);
  verifyDiffUpdated(x.id);
});

bthread("Diff nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDiff(a.id);
  block(matchAddDiff(a.id, ANY), function () {});
  addDiff(b.id);
});

bthread("Disable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Disable_id_N"}]);
  const steps = pick([0,1,2,3]);
  addDisable(x.id);
  for (var i=0; i<steps; i++) {
    updateDisable(x.id);
  }
  if (pick([true,false])) { deleteDisable(x.id); }
  verifyDisableExists(x.id);
  verifyDisableUpdated(x.id);
});

bthread("Disable nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDisable(a.id);
  block(matchAddDisable(a.id, ANY), function () {});
  addDisable(b.id);
});

bthread("Enable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Enable_id_N"}]);
  const steps = pick([0,1,2,3]);
  addEnable(x.id);
  for (var i=0; i<steps; i++) {
    updateEnable(x.id);
  }
  if (pick([true,false])) { deleteEnable(x.id); }
  verifyEnableExists(x.id);
  verifyEnableUpdated(x.id);
});

bthread("Enable nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEnable(a.id);
  block(matchAddEnable(a.id, ANY), function () {});
  addEnable(b.id);
});

bthread("Export nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Export_id_N"}]);
  const steps = pick([0,1,2,3]);
  addExport(x.id);
  for (var i=0; i<steps; i++) {
    updateExport(x.id);
  }
  if (pick([true,false])) { deleteExport(x.id); }
  verifyExportExists(x.id);
  verifyExportUpdated(x.id);
});

bthread("Export nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExport(a.id);
  block(matchAddExport(a.id, ANY), function () {});
  addExport(b.id);
});

bthread("Extension nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Extension_id_N"}]);
  const steps = pick([0,1,2,3]);
  addExtension(x.id);
  for (var i=0; i<steps; i++) {
    updateExtension(x.id);
  }
  if (pick([true,false])) { deleteExtension(x.id); }
  verifyExtensionExists(x.id);
  verifyExtensionUpdated(x.id);
});

bthread("Extension nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExtension(a.id);
  block(matchAddExtension(a.id, ANY), function () {});
  addExtension(b.id);
});

bthread("Field nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Field_id_N"}]);
  const steps = pick([0,1,2,3]);
  addField(x.id);
  for (var i=0; i<steps; i++) {
    updateField(x.id);
  }
  if (pick([true,false])) { deleteField(x.id); }
  verifyFieldExists(x.id);
  verifyFieldUpdated(x.id);
});

bthread("Field nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addField(a.id);
  block(matchAddField(a.id, ANY), function () {});
  addField(b.id);
});

bthread("File nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "File_id_N"}]);
  const steps = pick([0,1,2,3]);
  addFile(x.id);
  for (var i=0; i<steps; i++) {
    updateFile(x.id);
  }
  if (pick([true,false])) { deleteFile(x.id); }
  verifyFileExists(x.id);
  verifyFileUpdated(x.id);
});

bthread("File nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFile(a.id);
  block(matchAddFile(a.id, ANY), function () {});
  addFile(b.id);
});

bthread("Flow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Flow_id_N"}]);
  const steps = pick([0,1,2,3]);
  addFlow(x.id);
  for (var i=0; i<steps; i++) {
    updateFlow(x.id);
  }
  if (pick([true,false])) { deleteFlow(x.id); }
  verifyFlowExists(x.id);
  verifyFlowUpdated(x.id);
});

bthread("Flow nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFlow(a.id);
  block(matchAddFlow(a.id, ANY), function () {});
  addFlow(b.id);
});

bthread("Folder nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Folder_id_N"}]);
  const steps = pick([0,1,2,3]);
  addFolder(x.id);
  for (var i=0; i<steps; i++) {
    updateFolder(x.id);
  }
  if (pick([true,false])) { deleteFolder(x.id); }
  verifyFolderExists(x.id);
  verifyFolderUpdated(x.id);
});

bthread("Folder nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFolder(a.id);
  block(matchAddFolder(a.id, ANY), function () {});
  addFolder(b.id);
});

bthread("Generate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Generate_id_N"}]);
  const steps = pick([0,1,2,3]);
  addGenerate(x.id);
  for (var i=0; i<steps; i++) {
    updateGenerate(x.id);
  }
  if (pick([true,false])) { deleteGenerate(x.id); }
  verifyGenerateExists(x.id);
  verifyGenerateUpdated(x.id);
});

bthread("Generate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGenerate(a.id);
  block(matchAddGenerate(a.id, ANY), function () {});
  addGenerate(b.id);
});

bthread("Hash nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Hash_id_N"}]);
  const steps = pick([0,1,2,3]);
  addHash(x.id);
  for (var i=0; i<steps; i++) {
    updateHash(x.id);
  }
  if (pick([true,false])) { deleteHash(x.id); }
  verifyHashExists(x.id);
  verifyHashUpdated(x.id);
});

bthread("Hash nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHash(a.id);
  block(matchAddHash(a.id, ANY), function () {});
  addHash(b.id);
});

bthread("Import nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Import_id_N"}]);
  const steps = pick([0,1,2,3]);
  addImport(x.id);
  for (var i=0; i<steps; i++) {
    updateImport(x.id);
  }
  if (pick([true,false])) { deleteImport(x.id); }
  verifyImportExists(x.id);
  verifyImportUpdated(x.id);
});

bthread("Import nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addImport(a.id);
  block(matchAddImport(a.id, ANY), function () {});
  addImport(b.id);
});

bthread("Info nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Info_id_N"}]);
  const steps = pick([0,1,2,3]);
  addInfo(x.id);
  for (var i=0; i<steps; i++) {
    updateInfo(x.id);
  }
  if (pick([true,false])) { deleteInfo(x.id); }
  verifyInfoExists(x.id);
  verifyInfoUpdated(x.id);
});

bthread("Info nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInfo(a.id);
  block(matchAddInfo(a.id, ANY), function () {});
  addInfo(b.id);
});

bthread("Invite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Invite_id_N"}]);
  const steps = pick([0,1,2,3]);
  addInvite(x.id);
  for (var i=0; i<steps; i++) {
    updateInvite(x.id);
  }
  if (pick([true,false])) { deleteInvite(x.id); }
  verifyInviteExists(x.id);
  verifyInviteUpdated(x.id);
});

bthread("Invite nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInvite(a.id);
  block(matchAddInvite(a.id, ANY), function () {});
  addInvite(b.id);
});

bthread("Item nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Item_id_N"}]);
  const steps = pick([0,1,2,3]);
  addItem(x.id);
  for (var i=0; i<steps; i++) {
    updateItem(x.id);
  }
  if (pick([true,false])) { deleteItem(x.id); }
  verifyItemExists(x.id);
  verifyItemUpdated(x.id);
});

bthread("Item nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addItem(a.id);
  block(matchAddItem(a.id, ANY), function () {});
  addItem(b.id);
});

bthread("Login nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Login_id_N"}]);
  const steps = pick([0,1,2,3]);
  addLogin(x.id);
  for (var i=0; i<steps; i++) {
    updateLogin(x.id);
  }
  if (pick([true,false])) { deleteLogin(x.id); }
  verifyLoginExists(x.id);
  verifyLoginUpdated(x.id);
});

bthread("Login nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLogin(a.id);
  block(matchAddLogin(a.id, ANY), function () {});
  addLogin(b.id);
});

bthread("Logout nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Logout_id_N"}]);
  const steps = pick([0,1,2,3]);
  addLogout(x.id);
  for (var i=0; i<steps; i++) {
    updateLogout(x.id);
  }
  if (pick([true,false])) { deleteLogout(x.id); }
  verifyLogoutExists(x.id);
  verifyLogoutUpdated(x.id);
});

bthread("Logout nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLogout(a.id);
  block(matchAddLogout(a.id, ANY), function () {});
  addLogout(b.id);
});

bthread("Me nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Me_id_N"}]);
  const steps = pick([0,1,2,3]);
  addMe(x.id);
  for (var i=0; i<steps; i++) {
    updateMe(x.id);
  }
  if (pick([true,false])) { deleteMe(x.id); }
  verifyMeExists(x.id);
  verifyMeUpdated(x.id);
});

bthread("Me nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMe(a.id);
  block(matchAddMe(a.id, ANY), function () {});
  addMe(b.id);
});

bthread("Oauth nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Oauth_id_N"}]);
  const steps = pick([0,1,2,3]);
  addOauth(x.id);
  for (var i=0; i<steps; i++) {
    updateOauth(x.id);
  }
  if (pick([true,false])) { deleteOauth(x.id); }
  verifyOauthExists(x.id);
  verifyOauthUpdated(x.id);
});

bthread("Oauth nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOauth(a.id);
  block(matchAddOauth(a.id, ANY), function () {});
  addOauth(b.id);
});

bthread("Operation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Operation_id_N"}]);
  const steps = pick([0,1,2,3]);
  addOperation(x.id);
  for (var i=0; i<steps; i++) {
    updateOperation(x.id);
  }
  if (pick([true,false])) { deleteOperation(x.id); }
  verifyOperationExists(x.id);
  verifyOperationUpdated(x.id);
});

bthread("Operation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOperation(a.id);
  block(matchAddOperation(a.id, ANY), function () {});
  addOperation(b.id);
});

bthread("Page nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Page_id_N"}]);
  const steps = pick([0,1,2,3]);
  addPage(x.id);
  for (var i=0; i<steps; i++) {
    updatePage(x.id);
  }
  if (pick([true,false])) { deletePage(x.id); }
  verifyPageExists(x.id);
  verifyPageUpdated(x.id);
});

bthread("Page nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPage(a.id);
  block(matchAddPage(a.id, ANY), function () {});
  addPage(b.id);
});

bthread("Password nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Password_id_N"}]);
  const steps = pick([0,1,2,3]);
  addPassword(x.id);
  for (var i=0; i<steps; i++) {
    updatePassword(x.id);
  }
  if (pick([true,false])) { deletePassword(x.id); }
  verifyPasswordExists(x.id);
  verifyPasswordUpdated(x.id);
});

bthread("Password nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPassword(a.id);
  block(matchAddPassword(a.id, ANY), function () {});
  addPassword(b.id);
});

bthread("Permission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Permission_id_N"}]);
  const steps = pick([0,1,2,3]);
  addPermission(x.id);
  for (var i=0; i<steps; i++) {
    updatePermission(x.id);
  }
  if (pick([true,false])) { deletePermission(x.id); }
  verifyPermissionExists(x.id);
  verifyPermissionUpdated(x.id);
});

bthread("Permission nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPermission(a.id);
  block(matchAddPermission(a.id, ANY), function () {});
  addPermission(b.id);
});

bthread("Ping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Ping_id_N"}]);
  const steps = pick([0,1,2,3]);
  addPing(x.id);
  for (var i=0; i<steps; i++) {
    updatePing(x.id);
  }
  if (pick([true,false])) { deletePing(x.id); }
  verifyPingExists(x.id);
  verifyPingUpdated(x.id);
});

bthread("Ping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPing(a.id);
  block(matchAddPing(a.id, ANY), function () {});
  addPing(b.id);
});

bthread("Preset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Preset_id_N"}]);
  const steps = pick([0,1,2,3]);
  addPreset(x.id);
  for (var i=0; i<steps; i++) {
    updatePreset(x.id);
  }
  if (pick([true,false])) { deletePreset(x.id); }
  verifyPresetExists(x.id);
  verifyPresetUpdated(x.id);
});

bthread("Preset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPreset(a.id);
  block(matchAddPreset(a.id, ANY), function () {});
  addPreset(b.id);
});

bthread("Promote nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Promote_id_N"}]);
  const steps = pick([0,1,2,3]);
  addPromote(x.id);
  for (var i=0; i<steps; i++) {
    updatePromote(x.id);
  }
  if (pick([true,false])) { deletePromote(x.id); }
  verifyPromoteExists(x.id);
  verifyPromoteUpdated(x.id);
});

bthread("Promote nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPromote(a.id);
  block(matchAddPromote(a.id, ANY), function () {});
  addPromote(b.id);
});

bthread("Random nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Random_id_N"}]);
  const steps = pick([0,1,2,3]);
  addRandom(x.id);
  for (var i=0; i<steps; i++) {
    updateRandom(x.id);
  }
  if (pick([true,false])) { deleteRandom(x.id); }
  verifyRandomExists(x.id);
  verifyRandomUpdated(x.id);
});

bthread("Random nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRandom(a.id);
  block(matchAddRandom(a.id, ANY), function () {});
  addRandom(b.id);
});

bthread("Refresh nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Refresh_id_N"}]);
  const steps = pick([0,1,2,3]);
  addRefresh(x.id);
  for (var i=0; i<steps; i++) {
    updateRefresh(x.id);
  }
  if (pick([true,false])) { deleteRefresh(x.id); }
  verifyRefreshExists(x.id);
  verifyRefreshUpdated(x.id);
});

bthread("Refresh nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRefresh(a.id);
  block(matchAddRefresh(a.id, ANY), function () {});
  addRefresh(b.id);
});

bthread("Relation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Relation_id_N"}]);
  const steps = pick([0,1,2,3]);
  addRelation(x.id);
  for (var i=0; i<steps; i++) {
    updateRelation(x.id);
  }
  if (pick([true,false])) { deleteRelation(x.id); }
  verifyRelationExists(x.id);
  verifyRelationUpdated(x.id);
});

bthread("Relation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRelation(a.id);
  block(matchAddRelation(a.id, ANY), function () {});
  addRelation(b.id);
});

bthread("Request nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Request_id_N"}]);
  const steps = pick([0,1,2,3]);
  addRequest(x.id);
  for (var i=0; i<steps; i++) {
    updateRequest(x.id);
  }
  if (pick([true,false])) { deleteRequest(x.id); }
  verifyRequestExists(x.id);
  verifyRequestUpdated(x.id);
});

bthread("Request nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRequest(a.id);
  block(matchAddRequest(a.id, ANY), function () {});
  addRequest(b.id);
});

bthread("Reset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Reset_id_N"}]);
  const steps = pick([0,1,2,3]);
  addReset(x.id);
  for (var i=0; i<steps; i++) {
    updateReset(x.id);
  }
  if (pick([true,false])) { deleteReset(x.id); }
  verifyResetExists(x.id);
  verifyResetUpdated(x.id);
});

bthread("Reset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReset(a.id);
  block(matchAddReset(a.id, ANY), function () {});
  addReset(b.id);
});

bthread("Revision nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Revision_id_N"}]);
  const steps = pick([0,1,2,3]);
  addRevision(x.id);
  for (var i=0; i<steps; i++) {
    updateRevision(x.id);
  }
  if (pick([true,false])) { deleteRevision(x.id); }
  verifyRevisionExists(x.id);
  verifyRevisionUpdated(x.id);
});

bthread("Revision nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRevision(a.id);
  block(matchAddRevision(a.id, ANY), function () {});
  addRevision(b.id);
});

bthread("Role nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Role_id_N"}]);
  const steps = pick([0,1,2,3]);
  addRole(x.id);
  for (var i=0; i<steps; i++) {
    updateRole(x.id);
  }
  if (pick([true,false])) { deleteRole(x.id); }
  verifyRoleExists(x.id);
  verifyRoleUpdated(x.id);
});

bthread("Role nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRole(a.id);
  block(matchAddRole(a.id, ANY), function () {});
  addRole(b.id);
});

bthread("Save nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Save_id_N"}]);
  const steps = pick([0,1,2,3]);
  addSave(x.id);
  for (var i=0; i<steps; i++) {
    updateSave(x.id);
  }
  if (pick([true,false])) { deleteSave(x.id); }
  verifySaveExists(x.id);
  verifySaveUpdated(x.id);
});

bthread("Save nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSave(a.id);
  block(matchAddSave(a.id, ANY), function () {});
  addSave(b.id);
});

bthread("Schema nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Schema_id_N"}]);
  const steps = pick([0,1,2,3]);
  addSchema(x.id);
  for (var i=0; i<steps; i++) {
    updateSchema(x.id);
  }
  if (pick([true,false])) { deleteSchema(x.id); }
  verifySchemaExists(x.id);
  verifySchemaUpdated(x.id);
});

bthread("Schema nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSchema(a.id);
  block(matchAddSchema(a.id, ANY), function () {});
  addSchema(b.id);
});

bthread("Server nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Server_id_N"}]);
  const steps = pick([0,1,2,3]);
  addServer(x.id);
  for (var i=0; i<steps; i++) {
    updateServer(x.id);
  }
  if (pick([true,false])) { deleteServer(x.id); }
  verifyServerExists(x.id);
  verifyServerUpdated(x.id);
});

bthread("Server nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addServer(a.id);
  block(matchAddServer(a.id, ANY), function () {});
  addServer(b.id);
});

bthread("Setting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Setting_id_N"}]);
  const steps = pick([0,1,2,3]);
  addSetting(x.id);
  for (var i=0; i<steps; i++) {
    updateSetting(x.id);
  }
  if (pick([true,false])) { deleteSetting(x.id); }
  verifySettingExists(x.id);
  verifySettingUpdated(x.id);
});

bthread("Setting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSetting(a.id);
  block(matchAddSetting(a.id, ANY), function () {});
  addSetting(b.id);
});

bthread("Snapshot nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Snapshot_id_N"}]);
  const steps = pick([0,1,2,3]);
  addSnapshot(x.id);
  for (var i=0; i<steps; i++) {
    updateSnapshot(x.id);
  }
  if (pick([true,false])) { deleteSnapshot(x.id); }
  verifySnapshotExists(x.id);
  verifySnapshotUpdated(x.id);
});

bthread("Snapshot nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSnapshot(a.id);
  block(matchAddSnapshot(a.id, ANY), function () {});
  addSnapshot(b.id);
});

bthread("Sort nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Sort_id_N"}]);
  const steps = pick([0,1,2,3]);
  addSort(x.id);
  for (var i=0; i<steps; i++) {
    updateSort(x.id);
  }
  if (pick([true,false])) { deleteSort(x.id); }
  verifySortExists(x.id);
  verifySortUpdated(x.id);
});

bthread("Sort nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSort(a.id);
  block(matchAddSort(a.id, ANY), function () {});
  addSort(b.id);
});

bthread("String nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "String_id_N"}]);
  const steps = pick([0,1,2,3]);
  addString(x.id);
  for (var i=0; i<steps; i++) {
    updateString(x.id);
  }
  if (pick([true,false])) { deleteString(x.id); }
  verifyStringExists(x.id);
  verifyStringUpdated(x.id);
});

bthread("String nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addString(a.id);
  block(matchAddString(a.id, ANY), function () {});
  addString(b.id);
});

bthread("Tfa nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Tfa_id_N"}]);
  const steps = pick([0,1,2,3]);
  addTfa(x.id);
  for (var i=0; i<steps; i++) {
    updateTfa(x.id);
  }
  if (pick([true,false])) { deleteTfa(x.id); }
  verifyTfaExists(x.id);
  verifyTfaUpdated(x.id);
});

bthread("Tfa nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTfa(a.id);
  block(matchAddTfa(a.id, ANY), function () {});
  addTfa(b.id);
});

bthread("Track nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Track_id_N"}]);
  const steps = pick([0,1,2,3]);
  addTrack(x.id);
  for (var i=0; i<steps; i++) {
    updateTrack(x.id);
  }
  if (pick([true,false])) { deleteTrack(x.id); }
  verifyTrackExists(x.id);
  verifyTrackUpdated(x.id);
});

bthread("Track nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTrack(a.id);
  block(matchAddTrack(a.id, ANY), function () {});
  addTrack(b.id);
});

bthread("User nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "User_id_N"}]);
  const steps = pick([0,1,2,3]);
  addUser(x.id);
  for (var i=0; i<steps; i++) {
    updateUser(x.id);
  }
  if (pick([true,false])) { deleteUser(x.id); }
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

bthread("User nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUser(a.id);
  block(matchAddUser(a.id, ANY), function () {});
  addUser(b.id);
});

bthread("Util nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Util_id_N"}]);
  const steps = pick([0,1,2,3]);
  addUtil(x.id);
  for (var i=0; i<steps; i++) {
    updateUtil(x.id);
  }
  if (pick([true,false])) { deleteUtil(x.id); }
  verifyUtilExists(x.id);
  verifyUtilUpdated(x.id);
});

bthread("Util nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUtil(a.id);
  block(matchAddUtil(a.id, ANY), function () {});
  addUtil(b.id);
});

bthread("Verify nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Verify_id_N"}]);
  const steps = pick([0,1,2,3]);
  addVerify(x.id);
  for (var i=0; i<steps; i++) {
    updateVerify(x.id);
  }
  if (pick([true,false])) { deleteVerify(x.id); }
  verifyVerifyExists(x.id);
  verifyVerifyUpdated(x.id);
});

bthread("Verify nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVerify(a.id);
  block(matchAddVerify(a.id, ANY), function () {});
  addVerify(b.id);
});

bthread("Version nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Version_id_N"}]);
  const steps = pick([0,1,2,3]);
  addVersion(x.id);
  for (var i=0; i<steps; i++) {
    updateVersion(x.id);
  }
  if (pick([true,false])) { deleteVersion(x.id); }
  verifyVersionExists(x.id);
  verifyVersionUpdated(x.id);
});

bthread("Version nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVersion(a.id);
  block(matchAddVersion(a.id, ANY), function () {});
  addVersion(b.id);
});

bthread("Webhook nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "Webhook_id_N"}]);
  const steps = pick([0,1,2,3]);
  addWebhook(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhook(x.id);
  }
  if (pick([true,false])) { deleteWebhook(x.id); }
  verifyWebhookExists(x.id);
  verifyWebhookUpdated(x.id);
});

bthread("Webhook nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWebhook(a.id);
  block(matchAddWebhook(a.id, ANY), function () {});
  addWebhook(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Accept create verification", function () {
  const e = waitForAnyAcceptAdded();
  block(matchDeleteAccept(e.id, ANY), function () {
    verifyAcceptExists(e.id);
  });
});

bthread("Accept update verification", function () {
  const e = waitForAnyAcceptUpdated();
  block(matchDeleteAccept(e.id, ANY), function () {
    verifyAcceptUpdated(e.id);
  });
});

bthread("Accept delete verification", function () {
  const e = waitForAnyAcceptDeleted();
  block(matchAddAccept(e.id, ANY), function () {
    verifyAcceptDoesNotExist(e.id);
  });
});

bthread("Activity create verification", function () {
  const e = waitForAnyActivityAdded();
  block(matchDeleteActivity(e.id, ANY), function () {
    verifyActivityExists(e.id);
  });
});

bthread("Activity update verification", function () {
  const e = waitForAnyActivityUpdated();
  block(matchDeleteActivity(e.id, ANY), function () {
    verifyActivityUpdated(e.id);
  });
});

bthread("Activity delete verification", function () {
  const e = waitForAnyActivityDeleted();
  block(matchAddActivity(e.id, ANY), function () {
    verifyActivityDoesNotExist(e.id);
  });
});

bthread("Apply create verification", function () {
  const e = waitForAnyApplyAdded();
  block(matchDeleteApply(e.id, ANY), function () {
    verifyApplyExists(e.id);
  });
});

bthread("Apply update verification", function () {
  const e = waitForAnyApplyUpdated();
  block(matchDeleteApply(e.id, ANY), function () {
    verifyApplyUpdated(e.id);
  });
});

bthread("Apply delete verification", function () {
  const e = waitForAnyApplyDeleted();
  block(matchAddApply(e.id, ANY), function () {
    verifyApplyDoesNotExist(e.id);
  });
});

bthread("Asset create verification", function () {
  const e = waitForAnyAssetAdded();
  block(matchDeleteAsset(e.id, ANY), function () {
    verifyAssetExists(e.id);
  });
});

bthread("Asset update verification", function () {
  const e = waitForAnyAssetUpdated();
  block(matchDeleteAsset(e.id, ANY), function () {
    verifyAssetUpdated(e.id);
  });
});

bthread("Asset delete verification", function () {
  const e = waitForAnyAssetDeleted();
  block(matchAddAsset(e.id, ANY), function () {
    verifyAssetDoesNotExist(e.id);
  });
});

bthread("Auth create verification", function () {
  const e = waitForAnyAuthAdded();
  block(matchDeleteAuth(e.id, ANY), function () {
    verifyAuthExists(e.id);
  });
});

bthread("Auth update verification", function () {
  const e = waitForAnyAuthUpdated();
  block(matchDeleteAuth(e.id, ANY), function () {
    verifyAuthUpdated(e.id);
  });
});

bthread("Auth delete verification", function () {
  const e = waitForAnyAuthDeleted();
  block(matchAddAuth(e.id, ANY), function () {
    verifyAuthDoesNotExist(e.id);
  });
});

bthread("Cache create verification", function () {
  const e = waitForAnyCacheAdded();
  block(matchDeleteCache(e.id, ANY), function () {
    verifyCacheExists(e.id);
  });
});

bthread("Cache update verification", function () {
  const e = waitForAnyCacheUpdated();
  block(matchDeleteCache(e.id, ANY), function () {
    verifyCacheUpdated(e.id);
  });
});

bthread("Cache delete verification", function () {
  const e = waitForAnyCacheDeleted();
  block(matchAddCache(e.id, ANY), function () {
    verifyCacheDoesNotExist(e.id);
  });
});

bthread("Clear create verification", function () {
  const e = waitForAnyClearAdded();
  block(matchDeleteClear(e.id, ANY), function () {
    verifyClearExists(e.id);
  });
});

bthread("Clear update verification", function () {
  const e = waitForAnyClearUpdated();
  block(matchDeleteClear(e.id, ANY), function () {
    verifyClearUpdated(e.id);
  });
});

bthread("Clear delete verification", function () {
  const e = waitForAnyClearDeleted();
  block(matchAddClear(e.id, ANY), function () {
    verifyClearDoesNotExist(e.id);
  });
});

bthread("Collection create verification", function () {
  const e = waitForAnyCollectionAdded();
  block(matchDeleteCollection(e.id, ANY), function () {
    verifyCollectionExists(e.id);
  });
});

bthread("Collection update verification", function () {
  const e = waitForAnyCollectionUpdated();
  block(matchDeleteCollection(e.id, ANY), function () {
    verifyCollectionUpdated(e.id);
  });
});

bthread("Collection delete verification", function () {
  const e = waitForAnyCollectionDeleted();
  block(matchAddCollection(e.id, ANY), function () {
    verifyCollectionDoesNotExist(e.id);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  block(matchDeleteComment(e.id, ANY), function () {
    verifyCommentExists(e.id);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  block(matchDeleteComment(e.id, ANY), function () {
    verifyCommentUpdated(e.id);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  block(matchAddComment(e.id, ANY), function () {
    verifyCommentDoesNotExist(e.id);
  });
});

bthread("Compare create verification", function () {
  const e = waitForAnyCompareAdded();
  block(matchDeleteCompare(e.id, ANY), function () {
    verifyCompareExists(e.id);
  });
});

bthread("Compare update verification", function () {
  const e = waitForAnyCompareUpdated();
  block(matchDeleteCompare(e.id, ANY), function () {
    verifyCompareUpdated(e.id);
  });
});

bthread("Compare delete verification", function () {
  const e = waitForAnyCompareDeleted();
  block(matchAddCompare(e.id, ANY), function () {
    verifyCompareDoesNotExist(e.id);
  });
});

bthread("Diff create verification", function () {
  const e = waitForAnyDiffAdded();
  block(matchDeleteDiff(e.id, ANY), function () {
    verifyDiffExists(e.id);
  });
});

bthread("Diff update verification", function () {
  const e = waitForAnyDiffUpdated();
  block(matchDeleteDiff(e.id, ANY), function () {
    verifyDiffUpdated(e.id);
  });
});

bthread("Diff delete verification", function () {
  const e = waitForAnyDiffDeleted();
  block(matchAddDiff(e.id, ANY), function () {
    verifyDiffDoesNotExist(e.id);
  });
});

bthread("Disable create verification", function () {
  const e = waitForAnyDisableAdded();
  block(matchDeleteDisable(e.id, ANY), function () {
    verifyDisableExists(e.id);
  });
});

bthread("Disable update verification", function () {
  const e = waitForAnyDisableUpdated();
  block(matchDeleteDisable(e.id, ANY), function () {
    verifyDisableUpdated(e.id);
  });
});

bthread("Disable delete verification", function () {
  const e = waitForAnyDisableDeleted();
  block(matchAddDisable(e.id, ANY), function () {
    verifyDisableDoesNotExist(e.id);
  });
});

bthread("Enable create verification", function () {
  const e = waitForAnyEnableAdded();
  block(matchDeleteEnable(e.id, ANY), function () {
    verifyEnableExists(e.id);
  });
});

bthread("Enable update verification", function () {
  const e = waitForAnyEnableUpdated();
  block(matchDeleteEnable(e.id, ANY), function () {
    verifyEnableUpdated(e.id);
  });
});

bthread("Enable delete verification", function () {
  const e = waitForAnyEnableDeleted();
  block(matchAddEnable(e.id, ANY), function () {
    verifyEnableDoesNotExist(e.id);
  });
});

bthread("Export create verification", function () {
  const e = waitForAnyExportAdded();
  block(matchDeleteExport(e.id, ANY), function () {
    verifyExportExists(e.id);
  });
});

bthread("Export update verification", function () {
  const e = waitForAnyExportUpdated();
  block(matchDeleteExport(e.id, ANY), function () {
    verifyExportUpdated(e.id);
  });
});

bthread("Export delete verification", function () {
  const e = waitForAnyExportDeleted();
  block(matchAddExport(e.id, ANY), function () {
    verifyExportDoesNotExist(e.id);
  });
});

bthread("Extension create verification", function () {
  const e = waitForAnyExtensionAdded();
  block(matchDeleteExtension(e.id, ANY), function () {
    verifyExtensionExists(e.id);
  });
});

bthread("Extension update verification", function () {
  const e = waitForAnyExtensionUpdated();
  block(matchDeleteExtension(e.id, ANY), function () {
    verifyExtensionUpdated(e.id);
  });
});

bthread("Extension delete verification", function () {
  const e = waitForAnyExtensionDeleted();
  block(matchAddExtension(e.id, ANY), function () {
    verifyExtensionDoesNotExist(e.id);
  });
});

bthread("Field create verification", function () {
  const e = waitForAnyFieldAdded();
  block(matchDeleteField(e.id, ANY), function () {
    verifyFieldExists(e.id);
  });
});

bthread("Field update verification", function () {
  const e = waitForAnyFieldUpdated();
  block(matchDeleteField(e.id, ANY), function () {
    verifyFieldUpdated(e.id);
  });
});

bthread("Field delete verification", function () {
  const e = waitForAnyFieldDeleted();
  block(matchAddField(e.id, ANY), function () {
    verifyFieldDoesNotExist(e.id);
  });
});

bthread("File create verification", function () {
  const e = waitForAnyFileAdded();
  block(matchDeleteFile(e.id, ANY), function () {
    verifyFileExists(e.id);
  });
});

bthread("File update verification", function () {
  const e = waitForAnyFileUpdated();
  block(matchDeleteFile(e.id, ANY), function () {
    verifyFileUpdated(e.id);
  });
});

bthread("File delete verification", function () {
  const e = waitForAnyFileDeleted();
  block(matchAddFile(e.id, ANY), function () {
    verifyFileDoesNotExist(e.id);
  });
});

bthread("Flow create verification", function () {
  const e = waitForAnyFlowAdded();
  block(matchDeleteFlow(e.id, ANY), function () {
    verifyFlowExists(e.id);
  });
});

bthread("Flow update verification", function () {
  const e = waitForAnyFlowUpdated();
  block(matchDeleteFlow(e.id, ANY), function () {
    verifyFlowUpdated(e.id);
  });
});

bthread("Flow delete verification", function () {
  const e = waitForAnyFlowDeleted();
  block(matchAddFlow(e.id, ANY), function () {
    verifyFlowDoesNotExist(e.id);
  });
});

bthread("Folder create verification", function () {
  const e = waitForAnyFolderAdded();
  block(matchDeleteFolder(e.id, ANY), function () {
    verifyFolderExists(e.id);
  });
});

bthread("Folder update verification", function () {
  const e = waitForAnyFolderUpdated();
  block(matchDeleteFolder(e.id, ANY), function () {
    verifyFolderUpdated(e.id);
  });
});

bthread("Folder delete verification", function () {
  const e = waitForAnyFolderDeleted();
  block(matchAddFolder(e.id, ANY), function () {
    verifyFolderDoesNotExist(e.id);
  });
});

bthread("Generate create verification", function () {
  const e = waitForAnyGenerateAdded();
  block(matchDeleteGenerate(e.id, ANY), function () {
    verifyGenerateExists(e.id);
  });
});

bthread("Generate update verification", function () {
  const e = waitForAnyGenerateUpdated();
  block(matchDeleteGenerate(e.id, ANY), function () {
    verifyGenerateUpdated(e.id);
  });
});

bthread("Generate delete verification", function () {
  const e = waitForAnyGenerateDeleted();
  block(matchAddGenerate(e.id, ANY), function () {
    verifyGenerateDoesNotExist(e.id);
  });
});

bthread("Hash create verification", function () {
  const e = waitForAnyHashAdded();
  block(matchDeleteHash(e.id, ANY), function () {
    verifyHashExists(e.id);
  });
});

bthread("Hash update verification", function () {
  const e = waitForAnyHashUpdated();
  block(matchDeleteHash(e.id, ANY), function () {
    verifyHashUpdated(e.id);
  });
});

bthread("Hash delete verification", function () {
  const e = waitForAnyHashDeleted();
  block(matchAddHash(e.id, ANY), function () {
    verifyHashDoesNotExist(e.id);
  });
});

bthread("Import create verification", function () {
  const e = waitForAnyImportAdded();
  block(matchDeleteImport(e.id, ANY), function () {
    verifyImportExists(e.id);
  });
});

bthread("Import update verification", function () {
  const e = waitForAnyImportUpdated();
  block(matchDeleteImport(e.id, ANY), function () {
    verifyImportUpdated(e.id);
  });
});

bthread("Import delete verification", function () {
  const e = waitForAnyImportDeleted();
  block(matchAddImport(e.id, ANY), function () {
    verifyImportDoesNotExist(e.id);
  });
});

bthread("Info create verification", function () {
  const e = waitForAnyInfoAdded();
  block(matchDeleteInfo(e.id, ANY), function () {
    verifyInfoExists(e.id);
  });
});

bthread("Info update verification", function () {
  const e = waitForAnyInfoUpdated();
  block(matchDeleteInfo(e.id, ANY), function () {
    verifyInfoUpdated(e.id);
  });
});

bthread("Info delete verification", function () {
  const e = waitForAnyInfoDeleted();
  block(matchAddInfo(e.id, ANY), function () {
    verifyInfoDoesNotExist(e.id);
  });
});

bthread("Invite create verification", function () {
  const e = waitForAnyInviteAdded();
  block(matchDeleteInvite(e.id, ANY), function () {
    verifyInviteExists(e.id);
  });
});

bthread("Invite update verification", function () {
  const e = waitForAnyInviteUpdated();
  block(matchDeleteInvite(e.id, ANY), function () {
    verifyInviteUpdated(e.id);
  });
});

bthread("Invite delete verification", function () {
  const e = waitForAnyInviteDeleted();
  block(matchAddInvite(e.id, ANY), function () {
    verifyInviteDoesNotExist(e.id);
  });
});

bthread("Item create verification", function () {
  const e = waitForAnyItemAdded();
  block(matchDeleteItem(e.id, ANY), function () {
    verifyItemExists(e.id);
  });
});

bthread("Item update verification", function () {
  const e = waitForAnyItemUpdated();
  block(matchDeleteItem(e.id, ANY), function () {
    verifyItemUpdated(e.id);
  });
});

bthread("Item delete verification", function () {
  const e = waitForAnyItemDeleted();
  block(matchAddItem(e.id, ANY), function () {
    verifyItemDoesNotExist(e.id);
  });
});

bthread("Login create verification", function () {
  const e = waitForAnyLoginAdded();
  block(matchDeleteLogin(e.id, ANY), function () {
    verifyLoginExists(e.id);
  });
});

bthread("Login update verification", function () {
  const e = waitForAnyLoginUpdated();
  block(matchDeleteLogin(e.id, ANY), function () {
    verifyLoginUpdated(e.id);
  });
});

bthread("Login delete verification", function () {
  const e = waitForAnyLoginDeleted();
  block(matchAddLogin(e.id, ANY), function () {
    verifyLoginDoesNotExist(e.id);
  });
});

bthread("Logout create verification", function () {
  const e = waitForAnyLogoutAdded();
  block(matchDeleteLogout(e.id, ANY), function () {
    verifyLogoutExists(e.id);
  });
});

bthread("Logout update verification", function () {
  const e = waitForAnyLogoutUpdated();
  block(matchDeleteLogout(e.id, ANY), function () {
    verifyLogoutUpdated(e.id);
  });
});

bthread("Logout delete verification", function () {
  const e = waitForAnyLogoutDeleted();
  block(matchAddLogout(e.id, ANY), function () {
    verifyLogoutDoesNotExist(e.id);
  });
});

bthread("Me create verification", function () {
  const e = waitForAnyMeAdded();
  block(matchDeleteMe(e.id, ANY), function () {
    verifyMeExists(e.id);
  });
});

bthread("Me update verification", function () {
  const e = waitForAnyMeUpdated();
  block(matchDeleteMe(e.id, ANY), function () {
    verifyMeUpdated(e.id);
  });
});

bthread("Me delete verification", function () {
  const e = waitForAnyMeDeleted();
  block(matchAddMe(e.id, ANY), function () {
    verifyMeDoesNotExist(e.id);
  });
});

bthread("Oauth create verification", function () {
  const e = waitForAnyOauthAdded();
  block(matchDeleteOauth(e.id, ANY), function () {
    verifyOauthExists(e.id);
  });
});

bthread("Oauth update verification", function () {
  const e = waitForAnyOauthUpdated();
  block(matchDeleteOauth(e.id, ANY), function () {
    verifyOauthUpdated(e.id);
  });
});

bthread("Oauth delete verification", function () {
  const e = waitForAnyOauthDeleted();
  block(matchAddOauth(e.id, ANY), function () {
    verifyOauthDoesNotExist(e.id);
  });
});

bthread("Operation create verification", function () {
  const e = waitForAnyOperationAdded();
  block(matchDeleteOperation(e.id, ANY), function () {
    verifyOperationExists(e.id);
  });
});

bthread("Operation update verification", function () {
  const e = waitForAnyOperationUpdated();
  block(matchDeleteOperation(e.id, ANY), function () {
    verifyOperationUpdated(e.id);
  });
});

bthread("Operation delete verification", function () {
  const e = waitForAnyOperationDeleted();
  block(matchAddOperation(e.id, ANY), function () {
    verifyOperationDoesNotExist(e.id);
  });
});

bthread("Page create verification", function () {
  const e = waitForAnyPageAdded();
  block(matchDeletePage(e.id, ANY), function () {
    verifyPageExists(e.id);
  });
});

bthread("Page update verification", function () {
  const e = waitForAnyPageUpdated();
  block(matchDeletePage(e.id, ANY), function () {
    verifyPageUpdated(e.id);
  });
});

bthread("Page delete verification", function () {
  const e = waitForAnyPageDeleted();
  block(matchAddPage(e.id, ANY), function () {
    verifyPageDoesNotExist(e.id);
  });
});

bthread("Password create verification", function () {
  const e = waitForAnyPasswordAdded();
  block(matchDeletePassword(e.id, ANY), function () {
    verifyPasswordExists(e.id);
  });
});

bthread("Password update verification", function () {
  const e = waitForAnyPasswordUpdated();
  block(matchDeletePassword(e.id, ANY), function () {
    verifyPasswordUpdated(e.id);
  });
});

bthread("Password delete verification", function () {
  const e = waitForAnyPasswordDeleted();
  block(matchAddPassword(e.id, ANY), function () {
    verifyPasswordDoesNotExist(e.id);
  });
});

bthread("Permission create verification", function () {
  const e = waitForAnyPermissionAdded();
  block(matchDeletePermission(e.id, ANY), function () {
    verifyPermissionExists(e.id);
  });
});

bthread("Permission update verification", function () {
  const e = waitForAnyPermissionUpdated();
  block(matchDeletePermission(e.id, ANY), function () {
    verifyPermissionUpdated(e.id);
  });
});

bthread("Permission delete verification", function () {
  const e = waitForAnyPermissionDeleted();
  block(matchAddPermission(e.id, ANY), function () {
    verifyPermissionDoesNotExist(e.id);
  });
});

bthread("Ping create verification", function () {
  const e = waitForAnyPingAdded();
  block(matchDeletePing(e.id, ANY), function () {
    verifyPingExists(e.id);
  });
});

bthread("Ping update verification", function () {
  const e = waitForAnyPingUpdated();
  block(matchDeletePing(e.id, ANY), function () {
    verifyPingUpdated(e.id);
  });
});

bthread("Ping delete verification", function () {
  const e = waitForAnyPingDeleted();
  block(matchAddPing(e.id, ANY), function () {
    verifyPingDoesNotExist(e.id);
  });
});

bthread("Preset create verification", function () {
  const e = waitForAnyPresetAdded();
  block(matchDeletePreset(e.id, ANY), function () {
    verifyPresetExists(e.id);
  });
});

bthread("Preset update verification", function () {
  const e = waitForAnyPresetUpdated();
  block(matchDeletePreset(e.id, ANY), function () {
    verifyPresetUpdated(e.id);
  });
});

bthread("Preset delete verification", function () {
  const e = waitForAnyPresetDeleted();
  block(matchAddPreset(e.id, ANY), function () {
    verifyPresetDoesNotExist(e.id);
  });
});

bthread("Promote create verification", function () {
  const e = waitForAnyPromoteAdded();
  block(matchDeletePromote(e.id, ANY), function () {
    verifyPromoteExists(e.id);
  });
});

bthread("Promote update verification", function () {
  const e = waitForAnyPromoteUpdated();
  block(matchDeletePromote(e.id, ANY), function () {
    verifyPromoteUpdated(e.id);
  });
});

bthread("Promote delete verification", function () {
  const e = waitForAnyPromoteDeleted();
  block(matchAddPromote(e.id, ANY), function () {
    verifyPromoteDoesNotExist(e.id);
  });
});

bthread("Random create verification", function () {
  const e = waitForAnyRandomAdded();
  block(matchDeleteRandom(e.id, ANY), function () {
    verifyRandomExists(e.id);
  });
});

bthread("Random update verification", function () {
  const e = waitForAnyRandomUpdated();
  block(matchDeleteRandom(e.id, ANY), function () {
    verifyRandomUpdated(e.id);
  });
});

bthread("Random delete verification", function () {
  const e = waitForAnyRandomDeleted();
  block(matchAddRandom(e.id, ANY), function () {
    verifyRandomDoesNotExist(e.id);
  });
});

bthread("Refresh create verification", function () {
  const e = waitForAnyRefreshAdded();
  block(matchDeleteRefresh(e.id, ANY), function () {
    verifyRefreshExists(e.id);
  });
});

bthread("Refresh update verification", function () {
  const e = waitForAnyRefreshUpdated();
  block(matchDeleteRefresh(e.id, ANY), function () {
    verifyRefreshUpdated(e.id);
  });
});

bthread("Refresh delete verification", function () {
  const e = waitForAnyRefreshDeleted();
  block(matchAddRefresh(e.id, ANY), function () {
    verifyRefreshDoesNotExist(e.id);
  });
});

bthread("Relation create verification", function () {
  const e = waitForAnyRelationAdded();
  block(matchDeleteRelation(e.id, ANY), function () {
    verifyRelationExists(e.id);
  });
});

bthread("Relation update verification", function () {
  const e = waitForAnyRelationUpdated();
  block(matchDeleteRelation(e.id, ANY), function () {
    verifyRelationUpdated(e.id);
  });
});

bthread("Relation delete verification", function () {
  const e = waitForAnyRelationDeleted();
  block(matchAddRelation(e.id, ANY), function () {
    verifyRelationDoesNotExist(e.id);
  });
});

bthread("Request create verification", function () {
  const e = waitForAnyRequestAdded();
  block(matchDeleteRequest(e.id, ANY), function () {
    verifyRequestExists(e.id);
  });
});

bthread("Request update verification", function () {
  const e = waitForAnyRequestUpdated();
  block(matchDeleteRequest(e.id, ANY), function () {
    verifyRequestUpdated(e.id);
  });
});

bthread("Request delete verification", function () {
  const e = waitForAnyRequestDeleted();
  block(matchAddRequest(e.id, ANY), function () {
    verifyRequestDoesNotExist(e.id);
  });
});

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  block(matchDeleteReset(e.id, ANY), function () {
    verifyResetExists(e.id);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  block(matchDeleteReset(e.id, ANY), function () {
    verifyResetUpdated(e.id);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  block(matchAddReset(e.id, ANY), function () {
    verifyResetDoesNotExist(e.id);
  });
});

bthread("Revision create verification", function () {
  const e = waitForAnyRevisionAdded();
  block(matchDeleteRevision(e.id, ANY), function () {
    verifyRevisionExists(e.id);
  });
});

bthread("Revision update verification", function () {
  const e = waitForAnyRevisionUpdated();
  block(matchDeleteRevision(e.id, ANY), function () {
    verifyRevisionUpdated(e.id);
  });
});

bthread("Revision delete verification", function () {
  const e = waitForAnyRevisionDeleted();
  block(matchAddRevision(e.id, ANY), function () {
    verifyRevisionDoesNotExist(e.id);
  });
});

bthread("Role create verification", function () {
  const e = waitForAnyRoleAdded();
  block(matchDeleteRole(e.id, ANY), function () {
    verifyRoleExists(e.id);
  });
});

bthread("Role update verification", function () {
  const e = waitForAnyRoleUpdated();
  block(matchDeleteRole(e.id, ANY), function () {
    verifyRoleUpdated(e.id);
  });
});

bthread("Role delete verification", function () {
  const e = waitForAnyRoleDeleted();
  block(matchAddRole(e.id, ANY), function () {
    verifyRoleDoesNotExist(e.id);
  });
});

bthread("Save create verification", function () {
  const e = waitForAnySaveAdded();
  block(matchDeleteSave(e.id, ANY), function () {
    verifySaveExists(e.id);
  });
});

bthread("Save update verification", function () {
  const e = waitForAnySaveUpdated();
  block(matchDeleteSave(e.id, ANY), function () {
    verifySaveUpdated(e.id);
  });
});

bthread("Save delete verification", function () {
  const e = waitForAnySaveDeleted();
  block(matchAddSave(e.id, ANY), function () {
    verifySaveDoesNotExist(e.id);
  });
});

bthread("Schema create verification", function () {
  const e = waitForAnySchemaAdded();
  block(matchDeleteSchema(e.id, ANY), function () {
    verifySchemaExists(e.id);
  });
});

bthread("Schema update verification", function () {
  const e = waitForAnySchemaUpdated();
  block(matchDeleteSchema(e.id, ANY), function () {
    verifySchemaUpdated(e.id);
  });
});

bthread("Schema delete verification", function () {
  const e = waitForAnySchemaDeleted();
  block(matchAddSchema(e.id, ANY), function () {
    verifySchemaDoesNotExist(e.id);
  });
});

bthread("Server create verification", function () {
  const e = waitForAnyServerAdded();
  block(matchDeleteServer(e.id, ANY), function () {
    verifyServerExists(e.id);
  });
});

bthread("Server update verification", function () {
  const e = waitForAnyServerUpdated();
  block(matchDeleteServer(e.id, ANY), function () {
    verifyServerUpdated(e.id);
  });
});

bthread("Server delete verification", function () {
  const e = waitForAnyServerDeleted();
  block(matchAddServer(e.id, ANY), function () {
    verifyServerDoesNotExist(e.id);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  block(matchDeleteSetting(e.id, ANY), function () {
    verifySettingExists(e.id);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  block(matchDeleteSetting(e.id, ANY), function () {
    verifySettingUpdated(e.id);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  block(matchAddSetting(e.id, ANY), function () {
    verifySettingDoesNotExist(e.id);
  });
});

bthread("Snapshot create verification", function () {
  const e = waitForAnySnapshotAdded();
  block(matchDeleteSnapshot(e.id, ANY), function () {
    verifySnapshotExists(e.id);
  });
});

bthread("Snapshot update verification", function () {
  const e = waitForAnySnapshotUpdated();
  block(matchDeleteSnapshot(e.id, ANY), function () {
    verifySnapshotUpdated(e.id);
  });
});

bthread("Snapshot delete verification", function () {
  const e = waitForAnySnapshotDeleted();
  block(matchAddSnapshot(e.id, ANY), function () {
    verifySnapshotDoesNotExist(e.id);
  });
});

bthread("Sort create verification", function () {
  const e = waitForAnySortAdded();
  block(matchDeleteSort(e.id, ANY), function () {
    verifySortExists(e.id);
  });
});

bthread("Sort update verification", function () {
  const e = waitForAnySortUpdated();
  block(matchDeleteSort(e.id, ANY), function () {
    verifySortUpdated(e.id);
  });
});

bthread("Sort delete verification", function () {
  const e = waitForAnySortDeleted();
  block(matchAddSort(e.id, ANY), function () {
    verifySortDoesNotExist(e.id);
  });
});

bthread("String create verification", function () {
  const e = waitForAnyStringAdded();
  block(matchDeleteString(e.id, ANY), function () {
    verifyStringExists(e.id);
  });
});

bthread("String update verification", function () {
  const e = waitForAnyStringUpdated();
  block(matchDeleteString(e.id, ANY), function () {
    verifyStringUpdated(e.id);
  });
});

bthread("String delete verification", function () {
  const e = waitForAnyStringDeleted();
  block(matchAddString(e.id, ANY), function () {
    verifyStringDoesNotExist(e.id);
  });
});

bthread("Tfa create verification", function () {
  const e = waitForAnyTfaAdded();
  block(matchDeleteTfa(e.id, ANY), function () {
    verifyTfaExists(e.id);
  });
});

bthread("Tfa update verification", function () {
  const e = waitForAnyTfaUpdated();
  block(matchDeleteTfa(e.id, ANY), function () {
    verifyTfaUpdated(e.id);
  });
});

bthread("Tfa delete verification", function () {
  const e = waitForAnyTfaDeleted();
  block(matchAddTfa(e.id, ANY), function () {
    verifyTfaDoesNotExist(e.id);
  });
});

bthread("Track create verification", function () {
  const e = waitForAnyTrackAdded();
  block(matchDeleteTrack(e.id, ANY), function () {
    verifyTrackExists(e.id);
  });
});

bthread("Track update verification", function () {
  const e = waitForAnyTrackUpdated();
  block(matchDeleteTrack(e.id, ANY), function () {
    verifyTrackUpdated(e.id);
  });
});

bthread("Track delete verification", function () {
  const e = waitForAnyTrackDeleted();
  block(matchAddTrack(e.id, ANY), function () {
    verifyTrackDoesNotExist(e.id);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserExists(e.id);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  block(matchDeleteUser(e.id, ANY), function () {
    verifyUserUpdated(e.id);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  block(matchAddUser(e.id, ANY), function () {
    verifyUserDoesNotExist(e.id);
  });
});

bthread("Util create verification", function () {
  const e = waitForAnyUtilAdded();
  block(matchDeleteUtil(e.id, ANY), function () {
    verifyUtilExists(e.id);
  });
});

bthread("Util update verification", function () {
  const e = waitForAnyUtilUpdated();
  block(matchDeleteUtil(e.id, ANY), function () {
    verifyUtilUpdated(e.id);
  });
});

bthread("Util delete verification", function () {
  const e = waitForAnyUtilDeleted();
  block(matchAddUtil(e.id, ANY), function () {
    verifyUtilDoesNotExist(e.id);
  });
});

bthread("Verify create verification", function () {
  const e = waitForAnyVerifyAdded();
  block(matchDeleteVerify(e.id, ANY), function () {
    verifyVerifyExists(e.id);
  });
});

bthread("Verify update verification", function () {
  const e = waitForAnyVerifyUpdated();
  block(matchDeleteVerify(e.id, ANY), function () {
    verifyVerifyUpdated(e.id);
  });
});

bthread("Verify delete verification", function () {
  const e = waitForAnyVerifyDeleted();
  block(matchAddVerify(e.id, ANY), function () {
    verifyVerifyDoesNotExist(e.id);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  block(matchDeleteVersion(e.id, ANY), function () {
    verifyVersionExists(e.id);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  block(matchDeleteVersion(e.id, ANY), function () {
    verifyVersionUpdated(e.id);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  block(matchAddVersion(e.id, ANY), function () {
    verifyVersionDoesNotExist(e.id);
  });
});

bthread("Webhook create verification", function () {
  const e = waitForAnyWebhookAdded();
  block(matchDeleteWebhook(e.id, ANY), function () {
    verifyWebhookExists(e.id);
  });
});

bthread("Webhook update verification", function () {
  const e = waitForAnyWebhookUpdated();
  block(matchDeleteWebhook(e.id, ANY), function () {
    verifyWebhookUpdated(e.id);
  });
});

bthread("Webhook delete verification", function () {
  const e = waitForAnyWebhookDeleted();
  block(matchAddWebhook(e.id, ANY), function () {
    verifyWebhookDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Accept", function () {
  const x = waitForAnyAcceptAdded();
  block(matchAddAccept(x.id, ANY), function () {});
});

bthread("Guard: Unique Activity", function () {
  const x = waitForAnyActivityAdded();
  block(matchAddActivity(x.id, ANY), function () {});
});

bthread("Guard: Unique Apply", function () {
  const x = waitForAnyApplyAdded();
  block(matchAddApply(x.id, ANY), function () {});
});

bthread("Guard: Unique Asset", function () {
  const x = waitForAnyAssetAdded();
  block(matchAddAsset(x.id, ANY), function () {});
});

bthread("Guard: Unique Auth", function () {
  const x = waitForAnyAuthAdded();
  block(matchAddAuth(x.id, ANY), function () {});
});

bthread("Guard: Unique Cache", function () {
  const x = waitForAnyCacheAdded();
  block(matchAddCache(x.id, ANY), function () {});
});

bthread("Guard: Unique Clear", function () {
  const x = waitForAnyClearAdded();
  block(matchAddClear(x.id, ANY), function () {});
});

bthread("Guard: Unique Collection", function () {
  const x = waitForAnyCollectionAdded();
  block(matchAddCollection(x.id, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  block(matchAddComment(x.id, ANY), function () {});
});

bthread("Guard: Unique Compare", function () {
  const x = waitForAnyCompareAdded();
  block(matchAddCompare(x.id, ANY), function () {});
});

bthread("Guard: Unique Diff", function () {
  const x = waitForAnyDiffAdded();
  block(matchAddDiff(x.id, ANY), function () {});
});

bthread("Guard: Unique Disable", function () {
  const x = waitForAnyDisableAdded();
  block(matchAddDisable(x.id, ANY), function () {});
});

bthread("Guard: Unique Enable", function () {
  const x = waitForAnyEnableAdded();
  block(matchAddEnable(x.id, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  block(matchAddExport(x.id, ANY), function () {});
});

bthread("Guard: Unique Extension", function () {
  const x = waitForAnyExtensionAdded();
  block(matchAddExtension(x.id, ANY), function () {});
});

bthread("Guard: Unique Field", function () {
  const x = waitForAnyFieldAdded();
  block(matchAddField(x.id, ANY), function () {});
});

bthread("Guard: Unique File", function () {
  const x = waitForAnyFileAdded();
  block(matchAddFile(x.id, ANY), function () {});
});

bthread("Guard: Unique Flow", function () {
  const x = waitForAnyFlowAdded();
  block(matchAddFlow(x.id, ANY), function () {});
});

bthread("Guard: Unique Folder", function () {
  const x = waitForAnyFolderAdded();
  block(matchAddFolder(x.id, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  block(matchAddGenerate(x.id, ANY), function () {});
});

bthread("Guard: Unique Hash", function () {
  const x = waitForAnyHashAdded();
  block(matchAddHash(x.id, ANY), function () {});
});

bthread("Guard: Unique Import", function () {
  const x = waitForAnyImportAdded();
  block(matchAddImport(x.id, ANY), function () {});
});

bthread("Guard: Unique Info", function () {
  const x = waitForAnyInfoAdded();
  block(matchAddInfo(x.id, ANY), function () {});
});

bthread("Guard: Unique Invite", function () {
  const x = waitForAnyInviteAdded();
  block(matchAddInvite(x.id, ANY), function () {});
});

bthread("Guard: Unique Item", function () {
  const x = waitForAnyItemAdded();
  block(matchAddItem(x.id, ANY), function () {});
});

bthread("Guard: Unique Login", function () {
  const x = waitForAnyLoginAdded();
  block(matchAddLogin(x.id, ANY), function () {});
});

bthread("Guard: Unique Logout", function () {
  const x = waitForAnyLogoutAdded();
  block(matchAddLogout(x.id, ANY), function () {});
});

bthread("Guard: Unique Me", function () {
  const x = waitForAnyMeAdded();
  block(matchAddMe(x.id, ANY), function () {});
});

bthread("Guard: Unique Oauth", function () {
  const x = waitForAnyOauthAdded();
  block(matchAddOauth(x.id, ANY), function () {});
});

bthread("Guard: Unique Operation", function () {
  const x = waitForAnyOperationAdded();
  block(matchAddOperation(x.id, ANY), function () {});
});

bthread("Guard: Unique Page", function () {
  const x = waitForAnyPageAdded();
  block(matchAddPage(x.id, ANY), function () {});
});

bthread("Guard: Unique Password", function () {
  const x = waitForAnyPasswordAdded();
  block(matchAddPassword(x.id, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  block(matchAddPermission(x.id, ANY), function () {});
});

bthread("Guard: Unique Ping", function () {
  const x = waitForAnyPingAdded();
  block(matchAddPing(x.id, ANY), function () {});
});

bthread("Guard: Unique Preset", function () {
  const x = waitForAnyPresetAdded();
  block(matchAddPreset(x.id, ANY), function () {});
});

bthread("Guard: Unique Promote", function () {
  const x = waitForAnyPromoteAdded();
  block(matchAddPromote(x.id, ANY), function () {});
});

bthread("Guard: Unique Random", function () {
  const x = waitForAnyRandomAdded();
  block(matchAddRandom(x.id, ANY), function () {});
});

bthread("Guard: Unique Refresh", function () {
  const x = waitForAnyRefreshAdded();
  block(matchAddRefresh(x.id, ANY), function () {});
});

bthread("Guard: Unique Relation", function () {
  const x = waitForAnyRelationAdded();
  block(matchAddRelation(x.id, ANY), function () {});
});

bthread("Guard: Unique Request", function () {
  const x = waitForAnyRequestAdded();
  block(matchAddRequest(x.id, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  block(matchAddReset(x.id, ANY), function () {});
});

bthread("Guard: Unique Revision", function () {
  const x = waitForAnyRevisionAdded();
  block(matchAddRevision(x.id, ANY), function () {});
});

bthread("Guard: Unique Role", function () {
  const x = waitForAnyRoleAdded();
  block(matchAddRole(x.id, ANY), function () {});
});

bthread("Guard: Unique Save", function () {
  const x = waitForAnySaveAdded();
  block(matchAddSave(x.id, ANY), function () {});
});

bthread("Guard: Unique Schema", function () {
  const x = waitForAnySchemaAdded();
  block(matchAddSchema(x.id, ANY), function () {});
});

bthread("Guard: Unique Server", function () {
  const x = waitForAnyServerAdded();
  block(matchAddServer(x.id, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  block(matchAddSetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Snapshot", function () {
  const x = waitForAnySnapshotAdded();
  block(matchAddSnapshot(x.id, ANY), function () {});
});

bthread("Guard: Unique Sort", function () {
  const x = waitForAnySortAdded();
  block(matchAddSort(x.id, ANY), function () {});
});

bthread("Guard: Unique String", function () {
  const x = waitForAnyStringAdded();
  block(matchAddString(x.id, ANY), function () {});
});

bthread("Guard: Unique Tfa", function () {
  const x = waitForAnyTfaAdded();
  block(matchAddTfa(x.id, ANY), function () {});
});

bthread("Guard: Unique Track", function () {
  const x = waitForAnyTrackAdded();
  block(matchAddTrack(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Util", function () {
  const x = waitForAnyUtilAdded();
  block(matchAddUtil(x.id, ANY), function () {});
});

bthread("Guard: Unique Verify", function () {
  const x = waitForAnyVerifyAdded();
  block(matchAddVerify(x.id, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  block(matchAddVersion(x.id, ANY), function () {});
});

bthread("Guard: Unique Webhook", function () {
  const x = waitForAnyWebhookAdded();
  block(matchAddWebhook(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
