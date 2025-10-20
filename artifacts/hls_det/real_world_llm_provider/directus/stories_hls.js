// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
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
