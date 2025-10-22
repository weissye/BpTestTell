// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// --- pick() shim: prefer BPjs nondet, else random fallback ---
if (typeof pick === 'undefined') {
  function pick(options) {
    if (typeof bp !== 'undefined' && typeof bp.pickFrom === 'function') {
      return bp.pickFrom(options); // nondeterministic exploration
    }
    // fallback for plain JS execution
    return options[Math.floor(Math.random() * options.length)];
  }
}

// --- _pk(e,key): robust primary-key extractor for wait/match events ---
function _pk(e, key) {
  if (e == null) return undefined;
  if (typeof e === 'object') {
    if (Object.prototype.hasOwnProperty.call(e, key)) return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key)) return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key)) return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id')) return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc')) return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
  if (typeof v === 'object') {
    if ('id' in v) return String(v.id);
    if ('ndc' in v) return String(v.ndc);
    const ks = Object.keys(v);
    if (ks.length) return String(v[ks[0]]);
    return '1001';
  }
  return String(v);
}

// ===== ACTIVE LIFECYCLES =====


bthread("AcceptLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccept(x.id);
  const e_add = waitForAcceptAdded(id);
  block(matchDeleteAccept(id), function () {
    verifyAcceptExists(id);
  });
  updateAccept(x.id);
  updateAccept(x.id);
  const e_upd = waitForAcceptUpdated(id);
  block(matchDeleteAccept(id), function () {
    verifyAcceptUpdated(id);
  });
  deleteAccept(x.id);
  const e_del = waitForAcceptDeleted(id);
  block(matchAddAccept(id), function () {
    verifyAcceptDoesNotExist(id);
  });
});

bthread("ActivityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addActivity(x.id);
  const e_add = waitForActivityAdded(id);
  block(matchDeleteActivity(id), function () {
    verifyActivityExists(id);
  });
  updateActivity(x.id);
  updateActivity(x.id);
  const e_upd = waitForActivityUpdated(id);
  block(matchDeleteActivity(id), function () {
    verifyActivityUpdated(id);
  });
  deleteActivity(x.id);
  const e_del = waitForActivityDeleted(id);
  block(matchAddActivity(id), function () {
    verifyActivityDoesNotExist(id);
  });
});

bthread("ApplyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApply(x.id);
  const e_add = waitForApplyAdded(id);
  block(matchDeleteApply(id), function () {
    verifyApplyExists(id);
  });
  updateApply(x.id);
  updateApply(x.id);
  const e_upd = waitForApplyUpdated(id);
  block(matchDeleteApply(id), function () {
    verifyApplyUpdated(id);
  });
  deleteApply(x.id);
  const e_del = waitForApplyDeleted(id);
  block(matchAddApply(id), function () {
    verifyApplyDoesNotExist(id);
  });
});

bthread("AssetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAsset(x.id);
  const e_add = waitForAssetAdded(id);
  block(matchDeleteAsset(id), function () {
    verifyAssetExists(id);
  });
  updateAsset(x.id);
  updateAsset(x.id);
  const e_upd = waitForAssetUpdated(id);
  block(matchDeleteAsset(id), function () {
    verifyAssetUpdated(id);
  });
  deleteAsset(x.id);
  const e_del = waitForAssetDeleted(id);
  block(matchAddAsset(id), function () {
    verifyAssetDoesNotExist(id);
  });
});

bthread("AuthLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuth(x.id);
  const e_add = waitForAuthAdded(id);
  block(matchDeleteAuth(id), function () {
    verifyAuthExists(id);
  });
  updateAuth(x.id);
  updateAuth(x.id);
  const e_upd = waitForAuthUpdated(id);
  block(matchDeleteAuth(id), function () {
    verifyAuthUpdated(id);
  });
  deleteAuth(x.id);
  const e_del = waitForAuthDeleted(id);
  block(matchAddAuth(id), function () {
    verifyAuthDoesNotExist(id);
  });
});

bthread("CacheLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCache(x.id);
  const e_add = waitForCacheAdded(id);
  block(matchDeleteCache(id), function () {
    verifyCacheExists(id);
  });
  updateCache(x.id);
  updateCache(x.id);
  const e_upd = waitForCacheUpdated(id);
  block(matchDeleteCache(id), function () {
    verifyCacheUpdated(id);
  });
  deleteCache(x.id);
  const e_del = waitForCacheDeleted(id);
  block(matchAddCache(id), function () {
    verifyCacheDoesNotExist(id);
  });
});

bthread("ClearLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClear(x.id);
  const e_add = waitForClearAdded(id);
  block(matchDeleteClear(id), function () {
    verifyClearExists(id);
  });
  updateClear(x.id);
  updateClear(x.id);
  const e_upd = waitForClearUpdated(id);
  block(matchDeleteClear(id), function () {
    verifyClearUpdated(id);
  });
  deleteClear(x.id);
  const e_del = waitForClearDeleted(id);
  block(matchAddClear(id), function () {
    verifyClearDoesNotExist(id);
  });
});

bthread("CollectionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCollection(x.id);
  const e_add = waitForCollectionAdded(id);
  block(matchDeleteCollection(id), function () {
    verifyCollectionExists(id);
  });
  updateCollection(x.id);
  updateCollection(x.id);
  const e_upd = waitForCollectionUpdated(id);
  block(matchDeleteCollection(id), function () {
    verifyCollectionUpdated(id);
  });
  deleteCollection(x.id);
  const e_del = waitForCollectionDeleted(id);
  block(matchAddCollection(id), function () {
    verifyCollectionDoesNotExist(id);
  });
});

bthread("CommentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComment(x.id);
  const e_add = waitForCommentAdded(id);
  block(matchDeleteComment(id), function () {
    verifyCommentExists(id);
  });
  updateComment(x.id);
  updateComment(x.id);
  const e_upd = waitForCommentUpdated(id);
  block(matchDeleteComment(id), function () {
    verifyCommentUpdated(id);
  });
  deleteComment(x.id);
  const e_del = waitForCommentDeleted(id);
  block(matchAddComment(id), function () {
    verifyCommentDoesNotExist(id);
  });
});

bthread("CompareLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCompare(x.id);
  const e_add = waitForCompareAdded(id);
  block(matchDeleteCompare(id), function () {
    verifyCompareExists(id);
  });
  updateCompare(x.id);
  updateCompare(x.id);
  const e_upd = waitForCompareUpdated(id);
  block(matchDeleteCompare(id), function () {
    verifyCompareUpdated(id);
  });
  deleteCompare(x.id);
  const e_del = waitForCompareDeleted(id);
  block(matchAddCompare(id), function () {
    verifyCompareDoesNotExist(id);
  });
});

bthread("DiffLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDiff(x.id);
  const e_add = waitForDiffAdded(id);
  block(matchDeleteDiff(id), function () {
    verifyDiffExists(id);
  });
  updateDiff(x.id);
  updateDiff(x.id);
  const e_upd = waitForDiffUpdated(id);
  block(matchDeleteDiff(id), function () {
    verifyDiffUpdated(id);
  });
  deleteDiff(x.id);
  const e_del = waitForDiffDeleted(id);
  block(matchAddDiff(id), function () {
    verifyDiffDoesNotExist(id);
  });
});

bthread("DisableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDisable(x.id);
  const e_add = waitForDisableAdded(id);
  block(matchDeleteDisable(id), function () {
    verifyDisableExists(id);
  });
  updateDisable(x.id);
  updateDisable(x.id);
  const e_upd = waitForDisableUpdated(id);
  block(matchDeleteDisable(id), function () {
    verifyDisableUpdated(id);
  });
  deleteDisable(x.id);
  const e_del = waitForDisableDeleted(id);
  block(matchAddDisable(id), function () {
    verifyDisableDoesNotExist(id);
  });
});

bthread("EnableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEnable(x.id);
  const e_add = waitForEnableAdded(id);
  block(matchDeleteEnable(id), function () {
    verifyEnableExists(id);
  });
  updateEnable(x.id);
  updateEnable(x.id);
  const e_upd = waitForEnableUpdated(id);
  block(matchDeleteEnable(id), function () {
    verifyEnableUpdated(id);
  });
  deleteEnable(x.id);
  const e_del = waitForEnableDeleted(id);
  block(matchAddEnable(id), function () {
    verifyEnableDoesNotExist(id);
  });
});

bthread("ExportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExport(x.id);
  const e_add = waitForExportAdded(id);
  block(matchDeleteExport(id), function () {
    verifyExportExists(id);
  });
  updateExport(x.id);
  updateExport(x.id);
  const e_upd = waitForExportUpdated(id);
  block(matchDeleteExport(id), function () {
    verifyExportUpdated(id);
  });
  deleteExport(x.id);
  const e_del = waitForExportDeleted(id);
  block(matchAddExport(id), function () {
    verifyExportDoesNotExist(id);
  });
});

bthread("ExtensionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExtension(x.id);
  const e_add = waitForExtensionAdded(id);
  block(matchDeleteExtension(id), function () {
    verifyExtensionExists(id);
  });
  updateExtension(x.id);
  updateExtension(x.id);
  const e_upd = waitForExtensionUpdated(id);
  block(matchDeleteExtension(id), function () {
    verifyExtensionUpdated(id);
  });
  deleteExtension(x.id);
  const e_del = waitForExtensionDeleted(id);
  block(matchAddExtension(id), function () {
    verifyExtensionDoesNotExist(id);
  });
});

bthread("FieldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addField(x.id);
  const e_add = waitForFieldAdded(id);
  block(matchDeleteField(id), function () {
    verifyFieldExists(id);
  });
  updateField(x.id);
  updateField(x.id);
  const e_upd = waitForFieldUpdated(id);
  block(matchDeleteField(id), function () {
    verifyFieldUpdated(id);
  });
  deleteField(x.id);
  const e_del = waitForFieldDeleted(id);
  block(matchAddField(id), function () {
    verifyFieldDoesNotExist(id);
  });
});

bthread("FileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFile(x.id);
  const e_add = waitForFileAdded(id);
  block(matchDeleteFile(id), function () {
    verifyFileExists(id);
  });
  updateFile(x.id);
  updateFile(x.id);
  const e_upd = waitForFileUpdated(id);
  block(matchDeleteFile(id), function () {
    verifyFileUpdated(id);
  });
  deleteFile(x.id);
  const e_del = waitForFileDeleted(id);
  block(matchAddFile(id), function () {
    verifyFileDoesNotExist(id);
  });
});

bthread("FlowLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFlow(x.id);
  const e_add = waitForFlowAdded(id);
  block(matchDeleteFlow(id), function () {
    verifyFlowExists(id);
  });
  updateFlow(x.id);
  updateFlow(x.id);
  const e_upd = waitForFlowUpdated(id);
  block(matchDeleteFlow(id), function () {
    verifyFlowUpdated(id);
  });
  deleteFlow(x.id);
  const e_del = waitForFlowDeleted(id);
  block(matchAddFlow(id), function () {
    verifyFlowDoesNotExist(id);
  });
});

bthread("FolderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFolder(x.id);
  const e_add = waitForFolderAdded(id);
  block(matchDeleteFolder(id), function () {
    verifyFolderExists(id);
  });
  updateFolder(x.id);
  updateFolder(x.id);
  const e_upd = waitForFolderUpdated(id);
  block(matchDeleteFolder(id), function () {
    verifyFolderUpdated(id);
  });
  deleteFolder(x.id);
  const e_del = waitForFolderDeleted(id);
  block(matchAddFolder(id), function () {
    verifyFolderDoesNotExist(id);
  });
});

bthread("GenerateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGenerate(x.id);
  const e_add = waitForGenerateAdded(id);
  block(matchDeleteGenerate(id), function () {
    verifyGenerateExists(id);
  });
  updateGenerate(x.id);
  updateGenerate(x.id);
  const e_upd = waitForGenerateUpdated(id);
  block(matchDeleteGenerate(id), function () {
    verifyGenerateUpdated(id);
  });
  deleteGenerate(x.id);
  const e_del = waitForGenerateDeleted(id);
  block(matchAddGenerate(id), function () {
    verifyGenerateDoesNotExist(id);
  });
});

bthread("HashLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHash(x.id);
  const e_add = waitForHashAdded(id);
  block(matchDeleteHash(id), function () {
    verifyHashExists(id);
  });
  updateHash(x.id);
  updateHash(x.id);
  const e_upd = waitForHashUpdated(id);
  block(matchDeleteHash(id), function () {
    verifyHashUpdated(id);
  });
  deleteHash(x.id);
  const e_del = waitForHashDeleted(id);
  block(matchAddHash(id), function () {
    verifyHashDoesNotExist(id);
  });
});

bthread("ImportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addImport(x.id);
  const e_add = waitForImportAdded(id);
  block(matchDeleteImport(id), function () {
    verifyImportExists(id);
  });
  updateImport(x.id);
  updateImport(x.id);
  const e_upd = waitForImportUpdated(id);
  block(matchDeleteImport(id), function () {
    verifyImportUpdated(id);
  });
  deleteImport(x.id);
  const e_del = waitForImportDeleted(id);
  block(matchAddImport(id), function () {
    verifyImportDoesNotExist(id);
  });
});

bthread("InfoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInfo(x.id);
  const e_add = waitForInfoAdded(id);
  block(matchDeleteInfo(id), function () {
    verifyInfoExists(id);
  });
  updateInfo(x.id);
  updateInfo(x.id);
  const e_upd = waitForInfoUpdated(id);
  block(matchDeleteInfo(id), function () {
    verifyInfoUpdated(id);
  });
  deleteInfo(x.id);
  const e_del = waitForInfoDeleted(id);
  block(matchAddInfo(id), function () {
    verifyInfoDoesNotExist(id);
  });
});

bthread("InviteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvite(x.id);
  const e_add = waitForInviteAdded(id);
  block(matchDeleteInvite(id), function () {
    verifyInviteExists(id);
  });
  updateInvite(x.id);
  updateInvite(x.id);
  const e_upd = waitForInviteUpdated(id);
  block(matchDeleteInvite(id), function () {
    verifyInviteUpdated(id);
  });
  deleteInvite(x.id);
  const e_del = waitForInviteDeleted(id);
  block(matchAddInvite(id), function () {
    verifyInviteDoesNotExist(id);
  });
});

bthread("ItemLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addItem(x.id);
  const e_add = waitForItemAdded(id);
  block(matchDeleteItem(id), function () {
    verifyItemExists(id);
  });
  updateItem(x.id);
  updateItem(x.id);
  const e_upd = waitForItemUpdated(id);
  block(matchDeleteItem(id), function () {
    verifyItemUpdated(id);
  });
  deleteItem(x.id);
  const e_del = waitForItemDeleted(id);
  block(matchAddItem(id), function () {
    verifyItemDoesNotExist(id);
  });
});

bthread("LoginLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLogin(x.id);
  const e_add = waitForLoginAdded(id);
  block(matchDeleteLogin(id), function () {
    verifyLoginExists(id);
  });
  updateLogin(x.id);
  updateLogin(x.id);
  const e_upd = waitForLoginUpdated(id);
  block(matchDeleteLogin(id), function () {
    verifyLoginUpdated(id);
  });
  deleteLogin(x.id);
  const e_del = waitForLoginDeleted(id);
  block(matchAddLogin(id), function () {
    verifyLoginDoesNotExist(id);
  });
});

bthread("LogoutLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLogout(x.id);
  const e_add = waitForLogoutAdded(id);
  block(matchDeleteLogout(id), function () {
    verifyLogoutExists(id);
  });
  updateLogout(x.id);
  updateLogout(x.id);
  const e_upd = waitForLogoutUpdated(id);
  block(matchDeleteLogout(id), function () {
    verifyLogoutUpdated(id);
  });
  deleteLogout(x.id);
  const e_del = waitForLogoutDeleted(id);
  block(matchAddLogout(id), function () {
    verifyLogoutDoesNotExist(id);
  });
});

bthread("MeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMe(x.id);
  const e_add = waitForMeAdded(id);
  block(matchDeleteMe(id), function () {
    verifyMeExists(id);
  });
  updateMe(x.id);
  updateMe(x.id);
  const e_upd = waitForMeUpdated(id);
  block(matchDeleteMe(id), function () {
    verifyMeUpdated(id);
  });
  deleteMe(x.id);
  const e_del = waitForMeDeleted(id);
  block(matchAddMe(id), function () {
    verifyMeDoesNotExist(id);
  });
});

bthread("OauthLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOauth(x.id);
  const e_add = waitForOauthAdded(id);
  block(matchDeleteOauth(id), function () {
    verifyOauthExists(id);
  });
  updateOauth(x.id);
  updateOauth(x.id);
  const e_upd = waitForOauthUpdated(id);
  block(matchDeleteOauth(id), function () {
    verifyOauthUpdated(id);
  });
  deleteOauth(x.id);
  const e_del = waitForOauthDeleted(id);
  block(matchAddOauth(id), function () {
    verifyOauthDoesNotExist(id);
  });
});

bthread("OperationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOperation(x.id);
  const e_add = waitForOperationAdded(id);
  block(matchDeleteOperation(id), function () {
    verifyOperationExists(id);
  });
  updateOperation(x.id);
  updateOperation(x.id);
  const e_upd = waitForOperationUpdated(id);
  block(matchDeleteOperation(id), function () {
    verifyOperationUpdated(id);
  });
  deleteOperation(x.id);
  const e_del = waitForOperationDeleted(id);
  block(matchAddOperation(id), function () {
    verifyOperationDoesNotExist(id);
  });
});

bthread("PageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPage(x.id);
  const e_add = waitForPageAdded(id);
  block(matchDeletePage(id), function () {
    verifyPageExists(id);
  });
  updatePage(x.id);
  updatePage(x.id);
  const e_upd = waitForPageUpdated(id);
  block(matchDeletePage(id), function () {
    verifyPageUpdated(id);
  });
  deletePage(x.id);
  const e_del = waitForPageDeleted(id);
  block(matchAddPage(id), function () {
    verifyPageDoesNotExist(id);
  });
});

bthread("PasswordLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPassword(x.id);
  const e_add = waitForPasswordAdded(id);
  block(matchDeletePassword(id), function () {
    verifyPasswordExists(id);
  });
  updatePassword(x.id);
  updatePassword(x.id);
  const e_upd = waitForPasswordUpdated(id);
  block(matchDeletePassword(id), function () {
    verifyPasswordUpdated(id);
  });
  deletePassword(x.id);
  const e_del = waitForPasswordDeleted(id);
  block(matchAddPassword(id), function () {
    verifyPasswordDoesNotExist(id);
  });
});

bthread("PermissionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPermission(x.id);
  const e_add = waitForPermissionAdded(id);
  block(matchDeletePermission(id), function () {
    verifyPermissionExists(id);
  });
  updatePermission(x.id);
  updatePermission(x.id);
  const e_upd = waitForPermissionUpdated(id);
  block(matchDeletePermission(id), function () {
    verifyPermissionUpdated(id);
  });
  deletePermission(x.id);
  const e_del = waitForPermissionDeleted(id);
  block(matchAddPermission(id), function () {
    verifyPermissionDoesNotExist(id);
  });
});

bthread("PingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPing(x.id);
  const e_add = waitForPingAdded(id);
  block(matchDeletePing(id), function () {
    verifyPingExists(id);
  });
  updatePing(x.id);
  updatePing(x.id);
  const e_upd = waitForPingUpdated(id);
  block(matchDeletePing(id), function () {
    verifyPingUpdated(id);
  });
  deletePing(x.id);
  const e_del = waitForPingDeleted(id);
  block(matchAddPing(id), function () {
    verifyPingDoesNotExist(id);
  });
});

bthread("PresetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPreset(x.id);
  const e_add = waitForPresetAdded(id);
  block(matchDeletePreset(id), function () {
    verifyPresetExists(id);
  });
  updatePreset(x.id);
  updatePreset(x.id);
  const e_upd = waitForPresetUpdated(id);
  block(matchDeletePreset(id), function () {
    verifyPresetUpdated(id);
  });
  deletePreset(x.id);
  const e_del = waitForPresetDeleted(id);
  block(matchAddPreset(id), function () {
    verifyPresetDoesNotExist(id);
  });
});

bthread("PromoteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPromote(x.id);
  const e_add = waitForPromoteAdded(id);
  block(matchDeletePromote(id), function () {
    verifyPromoteExists(id);
  });
  updatePromote(x.id);
  updatePromote(x.id);
  const e_upd = waitForPromoteUpdated(id);
  block(matchDeletePromote(id), function () {
    verifyPromoteUpdated(id);
  });
  deletePromote(x.id);
  const e_del = waitForPromoteDeleted(id);
  block(matchAddPromote(id), function () {
    verifyPromoteDoesNotExist(id);
  });
});

bthread("RandomLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRandom(x.id);
  const e_add = waitForRandomAdded(id);
  block(matchDeleteRandom(id), function () {
    verifyRandomExists(id);
  });
  updateRandom(x.id);
  updateRandom(x.id);
  const e_upd = waitForRandomUpdated(id);
  block(matchDeleteRandom(id), function () {
    verifyRandomUpdated(id);
  });
  deleteRandom(x.id);
  const e_del = waitForRandomDeleted(id);
  block(matchAddRandom(id), function () {
    verifyRandomDoesNotExist(id);
  });
});

bthread("RefreshLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRefresh(x.id);
  const e_add = waitForRefreshAdded(id);
  block(matchDeleteRefresh(id), function () {
    verifyRefreshExists(id);
  });
  updateRefresh(x.id);
  updateRefresh(x.id);
  const e_upd = waitForRefreshUpdated(id);
  block(matchDeleteRefresh(id), function () {
    verifyRefreshUpdated(id);
  });
  deleteRefresh(x.id);
  const e_del = waitForRefreshDeleted(id);
  block(matchAddRefresh(id), function () {
    verifyRefreshDoesNotExist(id);
  });
});

bthread("RelationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRelation(x.id);
  const e_add = waitForRelationAdded(id);
  block(matchDeleteRelation(id), function () {
    verifyRelationExists(id);
  });
  updateRelation(x.id);
  updateRelation(x.id);
  const e_upd = waitForRelationUpdated(id);
  block(matchDeleteRelation(id), function () {
    verifyRelationUpdated(id);
  });
  deleteRelation(x.id);
  const e_del = waitForRelationDeleted(id);
  block(matchAddRelation(id), function () {
    verifyRelationDoesNotExist(id);
  });
});

bthread("RequestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequest(x.id);
  const e_add = waitForRequestAdded(id);
  block(matchDeleteRequest(id), function () {
    verifyRequestExists(id);
  });
  updateRequest(x.id);
  updateRequest(x.id);
  const e_upd = waitForRequestUpdated(id);
  block(matchDeleteRequest(id), function () {
    verifyRequestUpdated(id);
  });
  deleteRequest(x.id);
  const e_del = waitForRequestDeleted(id);
  block(matchAddRequest(id), function () {
    verifyRequestDoesNotExist(id);
  });
});

bthread("ResetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReset(x.id);
  const e_add = waitForResetAdded(id);
  block(matchDeleteReset(id), function () {
    verifyResetExists(id);
  });
  updateReset(x.id);
  updateReset(x.id);
  const e_upd = waitForResetUpdated(id);
  block(matchDeleteReset(id), function () {
    verifyResetUpdated(id);
  });
  deleteReset(x.id);
  const e_del = waitForResetDeleted(id);
  block(matchAddReset(id), function () {
    verifyResetDoesNotExist(id);
  });
});

bthread("RevisionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRevision(x.id);
  const e_add = waitForRevisionAdded(id);
  block(matchDeleteRevision(id), function () {
    verifyRevisionExists(id);
  });
  updateRevision(x.id);
  updateRevision(x.id);
  const e_upd = waitForRevisionUpdated(id);
  block(matchDeleteRevision(id), function () {
    verifyRevisionUpdated(id);
  });
  deleteRevision(x.id);
  const e_del = waitForRevisionDeleted(id);
  block(matchAddRevision(id), function () {
    verifyRevisionDoesNotExist(id);
  });
});

bthread("RoleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRole(x.id);
  const e_add = waitForRoleAdded(id);
  block(matchDeleteRole(id), function () {
    verifyRoleExists(id);
  });
  updateRole(x.id);
  updateRole(x.id);
  const e_upd = waitForRoleUpdated(id);
  block(matchDeleteRole(id), function () {
    verifyRoleUpdated(id);
  });
  deleteRole(x.id);
  const e_del = waitForRoleDeleted(id);
  block(matchAddRole(id), function () {
    verifyRoleDoesNotExist(id);
  });
});

bthread("SaveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSave(x.id);
  const e_add = waitForSaveAdded(id);
  block(matchDeleteSave(id), function () {
    verifySaveExists(id);
  });
  updateSave(x.id);
  updateSave(x.id);
  const e_upd = waitForSaveUpdated(id);
  block(matchDeleteSave(id), function () {
    verifySaveUpdated(id);
  });
  deleteSave(x.id);
  const e_del = waitForSaveDeleted(id);
  block(matchAddSave(id), function () {
    verifySaveDoesNotExist(id);
  });
});

bthread("SchemaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSchema(x.id);
  const e_add = waitForSchemaAdded(id);
  block(matchDeleteSchema(id), function () {
    verifySchemaExists(id);
  });
  updateSchema(x.id);
  updateSchema(x.id);
  const e_upd = waitForSchemaUpdated(id);
  block(matchDeleteSchema(id), function () {
    verifySchemaUpdated(id);
  });
  deleteSchema(x.id);
  const e_del = waitForSchemaDeleted(id);
  block(matchAddSchema(id), function () {
    verifySchemaDoesNotExist(id);
  });
});

bthread("ServerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addServer(x.id);
  const e_add = waitForServerAdded(id);
  block(matchDeleteServer(id), function () {
    verifyServerExists(id);
  });
  updateServer(x.id);
  updateServer(x.id);
  const e_upd = waitForServerUpdated(id);
  block(matchDeleteServer(id), function () {
    verifyServerUpdated(id);
  });
  deleteServer(x.id);
  const e_del = waitForServerDeleted(id);
  block(matchAddServer(id), function () {
    verifyServerDoesNotExist(id);
  });
});

bthread("SettingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSetting(x.id);
  const e_add = waitForSettingAdded(id);
  block(matchDeleteSetting(id), function () {
    verifySettingExists(id);
  });
  updateSetting(x.id);
  updateSetting(x.id);
  const e_upd = waitForSettingUpdated(id);
  block(matchDeleteSetting(id), function () {
    verifySettingUpdated(id);
  });
  deleteSetting(x.id);
  const e_del = waitForSettingDeleted(id);
  block(matchAddSetting(id), function () {
    verifySettingDoesNotExist(id);
  });
});

bthread("SnapshotLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSnapshot(x.id);
  const e_add = waitForSnapshotAdded(id);
  block(matchDeleteSnapshot(id), function () {
    verifySnapshotExists(id);
  });
  updateSnapshot(x.id);
  updateSnapshot(x.id);
  const e_upd = waitForSnapshotUpdated(id);
  block(matchDeleteSnapshot(id), function () {
    verifySnapshotUpdated(id);
  });
  deleteSnapshot(x.id);
  const e_del = waitForSnapshotDeleted(id);
  block(matchAddSnapshot(id), function () {
    verifySnapshotDoesNotExist(id);
  });
});

bthread("SortLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSort(x.id);
  const e_add = waitForSortAdded(id);
  block(matchDeleteSort(id), function () {
    verifySortExists(id);
  });
  updateSort(x.id);
  updateSort(x.id);
  const e_upd = waitForSortUpdated(id);
  block(matchDeleteSort(id), function () {
    verifySortUpdated(id);
  });
  deleteSort(x.id);
  const e_del = waitForSortDeleted(id);
  block(matchAddSort(id), function () {
    verifySortDoesNotExist(id);
  });
});

bthread("StringLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addString(x.id);
  const e_add = waitForStringAdded(id);
  block(matchDeleteString(id), function () {
    verifyStringExists(id);
  });
  updateString(x.id);
  updateString(x.id);
  const e_upd = waitForStringUpdated(id);
  block(matchDeleteString(id), function () {
    verifyStringUpdated(id);
  });
  deleteString(x.id);
  const e_del = waitForStringDeleted(id);
  block(matchAddString(id), function () {
    verifyStringDoesNotExist(id);
  });
});

bthread("TfaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTfa(x.id);
  const e_add = waitForTfaAdded(id);
  block(matchDeleteTfa(id), function () {
    verifyTfaExists(id);
  });
  updateTfa(x.id);
  updateTfa(x.id);
  const e_upd = waitForTfaUpdated(id);
  block(matchDeleteTfa(id), function () {
    verifyTfaUpdated(id);
  });
  deleteTfa(x.id);
  const e_del = waitForTfaDeleted(id);
  block(matchAddTfa(id), function () {
    verifyTfaDoesNotExist(id);
  });
});

bthread("TrackLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTrack(x.id);
  const e_add = waitForTrackAdded(id);
  block(matchDeleteTrack(id), function () {
    verifyTrackExists(id);
  });
  updateTrack(x.id);
  updateTrack(x.id);
  const e_upd = waitForTrackUpdated(id);
  block(matchDeleteTrack(id), function () {
    verifyTrackUpdated(id);
  });
  deleteTrack(x.id);
  const e_del = waitForTrackDeleted(id);
  block(matchAddTrack(id), function () {
    verifyTrackDoesNotExist(id);
  });
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUser(x.id);
  const e_add = waitForUserAdded(id);
  block(matchDeleteUser(id), function () {
    verifyUserExists(id);
  });
  updateUser(x.id);
  updateUser(x.id);
  const e_upd = waitForUserUpdated(id);
  block(matchDeleteUser(id), function () {
    verifyUserUpdated(id);
  });
  deleteUser(x.id);
  const e_del = waitForUserDeleted(id);
  block(matchAddUser(id), function () {
    verifyUserDoesNotExist(id);
  });
});

bthread("UtilLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUtil(x.id);
  const e_add = waitForUtilAdded(id);
  block(matchDeleteUtil(id), function () {
    verifyUtilExists(id);
  });
  updateUtil(x.id);
  updateUtil(x.id);
  const e_upd = waitForUtilUpdated(id);
  block(matchDeleteUtil(id), function () {
    verifyUtilUpdated(id);
  });
  deleteUtil(x.id);
  const e_del = waitForUtilDeleted(id);
  block(matchAddUtil(id), function () {
    verifyUtilDoesNotExist(id);
  });
});

bthread("VerifyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVerify(x.id);
  const e_add = waitForVerifyAdded(id);
  block(matchDeleteVerify(id), function () {
    verifyVerifyExists(id);
  });
  updateVerify(x.id);
  updateVerify(x.id);
  const e_upd = waitForVerifyUpdated(id);
  block(matchDeleteVerify(id), function () {
    verifyVerifyUpdated(id);
  });
  deleteVerify(x.id);
  const e_del = waitForVerifyDeleted(id);
  block(matchAddVerify(id), function () {
    verifyVerifyDoesNotExist(id);
  });
});

bthread("VersionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVersion(x.id);
  const e_add = waitForVersionAdded(id);
  block(matchDeleteVersion(id), function () {
    verifyVersionExists(id);
  });
  updateVersion(x.id);
  updateVersion(x.id);
  const e_upd = waitForVersionUpdated(id);
  block(matchDeleteVersion(id), function () {
    verifyVersionUpdated(id);
  });
  deleteVersion(x.id);
  const e_del = waitForVersionDeleted(id);
  block(matchAddVersion(id), function () {
    verifyVersionDoesNotExist(id);
  });
});

bthread("WebhookLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhook(x.id);
  const e_add = waitForWebhookAdded(id);
  block(matchDeleteWebhook(id), function () {
    verifyWebhookExists(id);
  });
  updateWebhook(x.id);
  updateWebhook(x.id);
  const e_upd = waitForWebhookUpdated(id);
  block(matchDeleteWebhook(id), function () {
    verifyWebhookUpdated(id);
  });
  deleteWebhook(x.id);
  const e_del = waitForWebhookDeleted(id);
  block(matchAddWebhook(id), function () {
    verifyWebhookDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Accept nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccept(k, ANY), function () {
    verifyAcceptExists(k);
  });
});

bthread("Accept update verification", function () {
  const e = waitForAnyAcceptUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccept(k, ANY), function () {
    verifyAcceptUpdated(k);
  });
});

bthread("Accept delete verification", function () {
  const e = waitForAnyAcceptDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAccept(k, ANY), function () {
    verifyAcceptDoesNotExist(k);
  });
});

bthread("Activity create verification", function () {
  const e = waitForAnyActivityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActivity(k, ANY), function () {
    verifyActivityExists(k);
  });
});

bthread("Activity update verification", function () {
  const e = waitForAnyActivityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActivity(k, ANY), function () {
    verifyActivityUpdated(k);
  });
});

bthread("Activity delete verification", function () {
  const e = waitForAnyActivityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddActivity(k, ANY), function () {
    verifyActivityDoesNotExist(k);
  });
});

bthread("Apply create verification", function () {
  const e = waitForAnyApplyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApply(k, ANY), function () {
    verifyApplyExists(k);
  });
});

bthread("Apply update verification", function () {
  const e = waitForAnyApplyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApply(k, ANY), function () {
    verifyApplyUpdated(k);
  });
});

bthread("Apply delete verification", function () {
  const e = waitForAnyApplyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApply(k, ANY), function () {
    verifyApplyDoesNotExist(k);
  });
});

bthread("Asset create verification", function () {
  const e = waitForAnyAssetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAsset(k, ANY), function () {
    verifyAssetExists(k);
  });
});

bthread("Asset update verification", function () {
  const e = waitForAnyAssetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAsset(k, ANY), function () {
    verifyAssetUpdated(k);
  });
});

bthread("Asset delete verification", function () {
  const e = waitForAnyAssetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAsset(k, ANY), function () {
    verifyAssetDoesNotExist(k);
  });
});

bthread("Auth create verification", function () {
  const e = waitForAnyAuthAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuth(k, ANY), function () {
    verifyAuthExists(k);
  });
});

bthread("Auth update verification", function () {
  const e = waitForAnyAuthUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuth(k, ANY), function () {
    verifyAuthUpdated(k);
  });
});

bthread("Auth delete verification", function () {
  const e = waitForAnyAuthDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAuth(k, ANY), function () {
    verifyAuthDoesNotExist(k);
  });
});

bthread("Cache create verification", function () {
  const e = waitForAnyCacheAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCache(k, ANY), function () {
    verifyCacheExists(k);
  });
});

bthread("Cache update verification", function () {
  const e = waitForAnyCacheUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCache(k, ANY), function () {
    verifyCacheUpdated(k);
  });
});

bthread("Cache delete verification", function () {
  const e = waitForAnyCacheDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCache(k, ANY), function () {
    verifyCacheDoesNotExist(k);
  });
});

bthread("Clear create verification", function () {
  const e = waitForAnyClearAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClear(k, ANY), function () {
    verifyClearExists(k);
  });
});

bthread("Clear update verification", function () {
  const e = waitForAnyClearUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClear(k, ANY), function () {
    verifyClearUpdated(k);
  });
});

bthread("Clear delete verification", function () {
  const e = waitForAnyClearDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClear(k, ANY), function () {
    verifyClearDoesNotExist(k);
  });
});

bthread("Collection create verification", function () {
  const e = waitForAnyCollectionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCollection(k, ANY), function () {
    verifyCollectionExists(k);
  });
});

bthread("Collection update verification", function () {
  const e = waitForAnyCollectionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCollection(k, ANY), function () {
    verifyCollectionUpdated(k);
  });
});

bthread("Collection delete verification", function () {
  const e = waitForAnyCollectionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCollection(k, ANY), function () {
    verifyCollectionDoesNotExist(k);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComment(k, ANY), function () {
    verifyCommentExists(k);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComment(k, ANY), function () {
    verifyCommentUpdated(k);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddComment(k, ANY), function () {
    verifyCommentDoesNotExist(k);
  });
});

bthread("Compare create verification", function () {
  const e = waitForAnyCompareAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCompare(k, ANY), function () {
    verifyCompareExists(k);
  });
});

bthread("Compare update verification", function () {
  const e = waitForAnyCompareUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCompare(k, ANY), function () {
    verifyCompareUpdated(k);
  });
});

bthread("Compare delete verification", function () {
  const e = waitForAnyCompareDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCompare(k, ANY), function () {
    verifyCompareDoesNotExist(k);
  });
});

bthread("Diff create verification", function () {
  const e = waitForAnyDiffAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDiff(k, ANY), function () {
    verifyDiffExists(k);
  });
});

bthread("Diff update verification", function () {
  const e = waitForAnyDiffUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDiff(k, ANY), function () {
    verifyDiffUpdated(k);
  });
});

bthread("Diff delete verification", function () {
  const e = waitForAnyDiffDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDiff(k, ANY), function () {
    verifyDiffDoesNotExist(k);
  });
});

bthread("Disable create verification", function () {
  const e = waitForAnyDisableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisable(k, ANY), function () {
    verifyDisableExists(k);
  });
});

bthread("Disable update verification", function () {
  const e = waitForAnyDisableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisable(k, ANY), function () {
    verifyDisableUpdated(k);
  });
});

bthread("Disable delete verification", function () {
  const e = waitForAnyDisableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDisable(k, ANY), function () {
    verifyDisableDoesNotExist(k);
  });
});

bthread("Enable create verification", function () {
  const e = waitForAnyEnableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnable(k, ANY), function () {
    verifyEnableExists(k);
  });
});

bthread("Enable update verification", function () {
  const e = waitForAnyEnableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnable(k, ANY), function () {
    verifyEnableUpdated(k);
  });
});

bthread("Enable delete verification", function () {
  const e = waitForAnyEnableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEnable(k, ANY), function () {
    verifyEnableDoesNotExist(k);
  });
});

bthread("Export create verification", function () {
  const e = waitForAnyExportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExport(k, ANY), function () {
    verifyExportExists(k);
  });
});

bthread("Export update verification", function () {
  const e = waitForAnyExportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExport(k, ANY), function () {
    verifyExportUpdated(k);
  });
});

bthread("Export delete verification", function () {
  const e = waitForAnyExportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExport(k, ANY), function () {
    verifyExportDoesNotExist(k);
  });
});

bthread("Extension create verification", function () {
  const e = waitForAnyExtensionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExtension(k, ANY), function () {
    verifyExtensionExists(k);
  });
});

bthread("Extension update verification", function () {
  const e = waitForAnyExtensionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExtension(k, ANY), function () {
    verifyExtensionUpdated(k);
  });
});

bthread("Extension delete verification", function () {
  const e = waitForAnyExtensionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExtension(k, ANY), function () {
    verifyExtensionDoesNotExist(k);
  });
});

bthread("Field create verification", function () {
  const e = waitForAnyFieldAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteField(k, ANY), function () {
    verifyFieldExists(k);
  });
});

bthread("Field update verification", function () {
  const e = waitForAnyFieldUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteField(k, ANY), function () {
    verifyFieldUpdated(k);
  });
});

bthread("Field delete verification", function () {
  const e = waitForAnyFieldDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddField(k, ANY), function () {
    verifyFieldDoesNotExist(k);
  });
});

bthread("File create verification", function () {
  const e = waitForAnyFileAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFile(k, ANY), function () {
    verifyFileExists(k);
  });
});

bthread("File update verification", function () {
  const e = waitForAnyFileUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFile(k, ANY), function () {
    verifyFileUpdated(k);
  });
});

bthread("File delete verification", function () {
  const e = waitForAnyFileDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFile(k, ANY), function () {
    verifyFileDoesNotExist(k);
  });
});

bthread("Flow create verification", function () {
  const e = waitForAnyFlowAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFlow(k, ANY), function () {
    verifyFlowExists(k);
  });
});

bthread("Flow update verification", function () {
  const e = waitForAnyFlowUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFlow(k, ANY), function () {
    verifyFlowUpdated(k);
  });
});

bthread("Flow delete verification", function () {
  const e = waitForAnyFlowDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFlow(k, ANY), function () {
    verifyFlowDoesNotExist(k);
  });
});

bthread("Folder create verification", function () {
  const e = waitForAnyFolderAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFolder(k, ANY), function () {
    verifyFolderExists(k);
  });
});

bthread("Folder update verification", function () {
  const e = waitForAnyFolderUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFolder(k, ANY), function () {
    verifyFolderUpdated(k);
  });
});

bthread("Folder delete verification", function () {
  const e = waitForAnyFolderDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFolder(k, ANY), function () {
    verifyFolderDoesNotExist(k);
  });
});

bthread("Generate create verification", function () {
  const e = waitForAnyGenerateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerate(k, ANY), function () {
    verifyGenerateExists(k);
  });
});

bthread("Generate update verification", function () {
  const e = waitForAnyGenerateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerate(k, ANY), function () {
    verifyGenerateUpdated(k);
  });
});

bthread("Generate delete verification", function () {
  const e = waitForAnyGenerateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGenerate(k, ANY), function () {
    verifyGenerateDoesNotExist(k);
  });
});

bthread("Hash create verification", function () {
  const e = waitForAnyHashAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHash(k, ANY), function () {
    verifyHashExists(k);
  });
});

bthread("Hash update verification", function () {
  const e = waitForAnyHashUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHash(k, ANY), function () {
    verifyHashUpdated(k);
  });
});

bthread("Hash delete verification", function () {
  const e = waitForAnyHashDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHash(k, ANY), function () {
    verifyHashDoesNotExist(k);
  });
});

bthread("Import create verification", function () {
  const e = waitForAnyImportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImport(k, ANY), function () {
    verifyImportExists(k);
  });
});

bthread("Import update verification", function () {
  const e = waitForAnyImportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImport(k, ANY), function () {
    verifyImportUpdated(k);
  });
});

bthread("Import delete verification", function () {
  const e = waitForAnyImportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddImport(k, ANY), function () {
    verifyImportDoesNotExist(k);
  });
});

bthread("Info create verification", function () {
  const e = waitForAnyInfoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInfo(k, ANY), function () {
    verifyInfoExists(k);
  });
});

bthread("Info update verification", function () {
  const e = waitForAnyInfoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInfo(k, ANY), function () {
    verifyInfoUpdated(k);
  });
});

bthread("Info delete verification", function () {
  const e = waitForAnyInfoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInfo(k, ANY), function () {
    verifyInfoDoesNotExist(k);
  });
});

bthread("Invite create verification", function () {
  const e = waitForAnyInviteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInvite(k, ANY), function () {
    verifyInviteExists(k);
  });
});

bthread("Invite update verification", function () {
  const e = waitForAnyInviteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInvite(k, ANY), function () {
    verifyInviteUpdated(k);
  });
});

bthread("Invite delete verification", function () {
  const e = waitForAnyInviteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInvite(k, ANY), function () {
    verifyInviteDoesNotExist(k);
  });
});

bthread("Item create verification", function () {
  const e = waitForAnyItemAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteItem(k, ANY), function () {
    verifyItemExists(k);
  });
});

bthread("Item update verification", function () {
  const e = waitForAnyItemUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteItem(k, ANY), function () {
    verifyItemUpdated(k);
  });
});

bthread("Item delete verification", function () {
  const e = waitForAnyItemDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddItem(k, ANY), function () {
    verifyItemDoesNotExist(k);
  });
});

bthread("Login create verification", function () {
  const e = waitForAnyLoginAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogin(k, ANY), function () {
    verifyLoginExists(k);
  });
});

bthread("Login update verification", function () {
  const e = waitForAnyLoginUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogin(k, ANY), function () {
    verifyLoginUpdated(k);
  });
});

bthread("Login delete verification", function () {
  const e = waitForAnyLoginDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLogin(k, ANY), function () {
    verifyLoginDoesNotExist(k);
  });
});

bthread("Logout create verification", function () {
  const e = waitForAnyLogoutAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogout(k, ANY), function () {
    verifyLogoutExists(k);
  });
});

bthread("Logout update verification", function () {
  const e = waitForAnyLogoutUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLogout(k, ANY), function () {
    verifyLogoutUpdated(k);
  });
});

bthread("Logout delete verification", function () {
  const e = waitForAnyLogoutDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLogout(k, ANY), function () {
    verifyLogoutDoesNotExist(k);
  });
});

bthread("Me create verification", function () {
  const e = waitForAnyMeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMe(k, ANY), function () {
    verifyMeExists(k);
  });
});

bthread("Me update verification", function () {
  const e = waitForAnyMeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMe(k, ANY), function () {
    verifyMeUpdated(k);
  });
});

bthread("Me delete verification", function () {
  const e = waitForAnyMeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMe(k, ANY), function () {
    verifyMeDoesNotExist(k);
  });
});

bthread("Oauth create verification", function () {
  const e = waitForAnyOauthAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOauth(k, ANY), function () {
    verifyOauthExists(k);
  });
});

bthread("Oauth update verification", function () {
  const e = waitForAnyOauthUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOauth(k, ANY), function () {
    verifyOauthUpdated(k);
  });
});

bthread("Oauth delete verification", function () {
  const e = waitForAnyOauthDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOauth(k, ANY), function () {
    verifyOauthDoesNotExist(k);
  });
});

bthread("Operation create verification", function () {
  const e = waitForAnyOperationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOperation(k, ANY), function () {
    verifyOperationExists(k);
  });
});

bthread("Operation update verification", function () {
  const e = waitForAnyOperationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOperation(k, ANY), function () {
    verifyOperationUpdated(k);
  });
});

bthread("Operation delete verification", function () {
  const e = waitForAnyOperationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOperation(k, ANY), function () {
    verifyOperationDoesNotExist(k);
  });
});

bthread("Page create verification", function () {
  const e = waitForAnyPageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePage(k, ANY), function () {
    verifyPageExists(k);
  });
});

bthread("Page update verification", function () {
  const e = waitForAnyPageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePage(k, ANY), function () {
    verifyPageUpdated(k);
  });
});

bthread("Page delete verification", function () {
  const e = waitForAnyPageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPage(k, ANY), function () {
    verifyPageDoesNotExist(k);
  });
});

bthread("Password create verification", function () {
  const e = waitForAnyPasswordAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePassword(k, ANY), function () {
    verifyPasswordExists(k);
  });
});

bthread("Password update verification", function () {
  const e = waitForAnyPasswordUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePassword(k, ANY), function () {
    verifyPasswordUpdated(k);
  });
});

bthread("Password delete verification", function () {
  const e = waitForAnyPasswordDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPassword(k, ANY), function () {
    verifyPasswordDoesNotExist(k);
  });
});

bthread("Permission create verification", function () {
  const e = waitForAnyPermissionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermission(k, ANY), function () {
    verifyPermissionExists(k);
  });
});

bthread("Permission update verification", function () {
  const e = waitForAnyPermissionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermission(k, ANY), function () {
    verifyPermissionUpdated(k);
  });
});

bthread("Permission delete verification", function () {
  const e = waitForAnyPermissionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPermission(k, ANY), function () {
    verifyPermissionDoesNotExist(k);
  });
});

bthread("Ping create verification", function () {
  const e = waitForAnyPingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePing(k, ANY), function () {
    verifyPingExists(k);
  });
});

bthread("Ping update verification", function () {
  const e = waitForAnyPingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePing(k, ANY), function () {
    verifyPingUpdated(k);
  });
});

bthread("Ping delete verification", function () {
  const e = waitForAnyPingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPing(k, ANY), function () {
    verifyPingDoesNotExist(k);
  });
});

bthread("Preset create verification", function () {
  const e = waitForAnyPresetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePreset(k, ANY), function () {
    verifyPresetExists(k);
  });
});

bthread("Preset update verification", function () {
  const e = waitForAnyPresetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePreset(k, ANY), function () {
    verifyPresetUpdated(k);
  });
});

bthread("Preset delete verification", function () {
  const e = waitForAnyPresetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPreset(k, ANY), function () {
    verifyPresetDoesNotExist(k);
  });
});

bthread("Promote create verification", function () {
  const e = waitForAnyPromoteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePromote(k, ANY), function () {
    verifyPromoteExists(k);
  });
});

bthread("Promote update verification", function () {
  const e = waitForAnyPromoteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePromote(k, ANY), function () {
    verifyPromoteUpdated(k);
  });
});

bthread("Promote delete verification", function () {
  const e = waitForAnyPromoteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPromote(k, ANY), function () {
    verifyPromoteDoesNotExist(k);
  });
});

bthread("Random create verification", function () {
  const e = waitForAnyRandomAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRandom(k, ANY), function () {
    verifyRandomExists(k);
  });
});

bthread("Random update verification", function () {
  const e = waitForAnyRandomUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRandom(k, ANY), function () {
    verifyRandomUpdated(k);
  });
});

bthread("Random delete verification", function () {
  const e = waitForAnyRandomDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRandom(k, ANY), function () {
    verifyRandomDoesNotExist(k);
  });
});

bthread("Refresh create verification", function () {
  const e = waitForAnyRefreshAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRefresh(k, ANY), function () {
    verifyRefreshExists(k);
  });
});

bthread("Refresh update verification", function () {
  const e = waitForAnyRefreshUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRefresh(k, ANY), function () {
    verifyRefreshUpdated(k);
  });
});

bthread("Refresh delete verification", function () {
  const e = waitForAnyRefreshDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRefresh(k, ANY), function () {
    verifyRefreshDoesNotExist(k);
  });
});

bthread("Relation create verification", function () {
  const e = waitForAnyRelationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRelation(k, ANY), function () {
    verifyRelationExists(k);
  });
});

bthread("Relation update verification", function () {
  const e = waitForAnyRelationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRelation(k, ANY), function () {
    verifyRelationUpdated(k);
  });
});

bthread("Relation delete verification", function () {
  const e = waitForAnyRelationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRelation(k, ANY), function () {
    verifyRelationDoesNotExist(k);
  });
});

bthread("Request create verification", function () {
  const e = waitForAnyRequestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequest(k, ANY), function () {
    verifyRequestExists(k);
  });
});

bthread("Request update verification", function () {
  const e = waitForAnyRequestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequest(k, ANY), function () {
    verifyRequestUpdated(k);
  });
});

bthread("Request delete verification", function () {
  const e = waitForAnyRequestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRequest(k, ANY), function () {
    verifyRequestDoesNotExist(k);
  });
});

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReset(k, ANY), function () {
    verifyResetExists(k);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReset(k, ANY), function () {
    verifyResetUpdated(k);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReset(k, ANY), function () {
    verifyResetDoesNotExist(k);
  });
});

bthread("Revision create verification", function () {
  const e = waitForAnyRevisionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRevision(k, ANY), function () {
    verifyRevisionExists(k);
  });
});

bthread("Revision update verification", function () {
  const e = waitForAnyRevisionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRevision(k, ANY), function () {
    verifyRevisionUpdated(k);
  });
});

bthread("Revision delete verification", function () {
  const e = waitForAnyRevisionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRevision(k, ANY), function () {
    verifyRevisionDoesNotExist(k);
  });
});

bthread("Role create verification", function () {
  const e = waitForAnyRoleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRole(k, ANY), function () {
    verifyRoleExists(k);
  });
});

bthread("Role update verification", function () {
  const e = waitForAnyRoleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRole(k, ANY), function () {
    verifyRoleUpdated(k);
  });
});

bthread("Role delete verification", function () {
  const e = waitForAnyRoleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRole(k, ANY), function () {
    verifyRoleDoesNotExist(k);
  });
});

bthread("Save create verification", function () {
  const e = waitForAnySaveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSave(k, ANY), function () {
    verifySaveExists(k);
  });
});

bthread("Save update verification", function () {
  const e = waitForAnySaveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSave(k, ANY), function () {
    verifySaveUpdated(k);
  });
});

bthread("Save delete verification", function () {
  const e = waitForAnySaveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSave(k, ANY), function () {
    verifySaveDoesNotExist(k);
  });
});

bthread("Schema create verification", function () {
  const e = waitForAnySchemaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSchema(k, ANY), function () {
    verifySchemaExists(k);
  });
});

bthread("Schema update verification", function () {
  const e = waitForAnySchemaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSchema(k, ANY), function () {
    verifySchemaUpdated(k);
  });
});

bthread("Schema delete verification", function () {
  const e = waitForAnySchemaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSchema(k, ANY), function () {
    verifySchemaDoesNotExist(k);
  });
});

bthread("Server create verification", function () {
  const e = waitForAnyServerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServer(k, ANY), function () {
    verifyServerExists(k);
  });
});

bthread("Server update verification", function () {
  const e = waitForAnyServerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteServer(k, ANY), function () {
    verifyServerUpdated(k);
  });
});

bthread("Server delete verification", function () {
  const e = waitForAnyServerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddServer(k, ANY), function () {
    verifyServerDoesNotExist(k);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSetting(k, ANY), function () {
    verifySettingExists(k);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSetting(k, ANY), function () {
    verifySettingUpdated(k);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSetting(k, ANY), function () {
    verifySettingDoesNotExist(k);
  });
});

bthread("Snapshot create verification", function () {
  const e = waitForAnySnapshotAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSnapshot(k, ANY), function () {
    verifySnapshotExists(k);
  });
});

bthread("Snapshot update verification", function () {
  const e = waitForAnySnapshotUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSnapshot(k, ANY), function () {
    verifySnapshotUpdated(k);
  });
});

bthread("Snapshot delete verification", function () {
  const e = waitForAnySnapshotDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSnapshot(k, ANY), function () {
    verifySnapshotDoesNotExist(k);
  });
});

bthread("Sort create verification", function () {
  const e = waitForAnySortAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSort(k, ANY), function () {
    verifySortExists(k);
  });
});

bthread("Sort update verification", function () {
  const e = waitForAnySortUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSort(k, ANY), function () {
    verifySortUpdated(k);
  });
});

bthread("Sort delete verification", function () {
  const e = waitForAnySortDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSort(k, ANY), function () {
    verifySortDoesNotExist(k);
  });
});

bthread("String create verification", function () {
  const e = waitForAnyStringAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteString(k, ANY), function () {
    verifyStringExists(k);
  });
});

bthread("String update verification", function () {
  const e = waitForAnyStringUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteString(k, ANY), function () {
    verifyStringUpdated(k);
  });
});

bthread("String delete verification", function () {
  const e = waitForAnyStringDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddString(k, ANY), function () {
    verifyStringDoesNotExist(k);
  });
});

bthread("Tfa create verification", function () {
  const e = waitForAnyTfaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTfa(k, ANY), function () {
    verifyTfaExists(k);
  });
});

bthread("Tfa update verification", function () {
  const e = waitForAnyTfaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTfa(k, ANY), function () {
    verifyTfaUpdated(k);
  });
});

bthread("Tfa delete verification", function () {
  const e = waitForAnyTfaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTfa(k, ANY), function () {
    verifyTfaDoesNotExist(k);
  });
});

bthread("Track create verification", function () {
  const e = waitForAnyTrackAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrack(k, ANY), function () {
    verifyTrackExists(k);
  });
});

bthread("Track update verification", function () {
  const e = waitForAnyTrackUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTrack(k, ANY), function () {
    verifyTrackUpdated(k);
  });
});

bthread("Track delete verification", function () {
  const e = waitForAnyTrackDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTrack(k, ANY), function () {
    verifyTrackDoesNotExist(k);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUser(k, ANY), function () {
    verifyUserExists(k);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUser(k, ANY), function () {
    verifyUserUpdated(k);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUser(k, ANY), function () {
    verifyUserDoesNotExist(k);
  });
});

bthread("Util create verification", function () {
  const e = waitForAnyUtilAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUtil(k, ANY), function () {
    verifyUtilExists(k);
  });
});

bthread("Util update verification", function () {
  const e = waitForAnyUtilUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUtil(k, ANY), function () {
    verifyUtilUpdated(k);
  });
});

bthread("Util delete verification", function () {
  const e = waitForAnyUtilDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUtil(k, ANY), function () {
    verifyUtilDoesNotExist(k);
  });
});

bthread("Verify create verification", function () {
  const e = waitForAnyVerifyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVerify(k, ANY), function () {
    verifyVerifyExists(k);
  });
});

bthread("Verify update verification", function () {
  const e = waitForAnyVerifyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVerify(k, ANY), function () {
    verifyVerifyUpdated(k);
  });
});

bthread("Verify delete verification", function () {
  const e = waitForAnyVerifyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVerify(k, ANY), function () {
    verifyVerifyDoesNotExist(k);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVersion(k, ANY), function () {
    verifyVersionExists(k);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVersion(k, ANY), function () {
    verifyVersionUpdated(k);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVersion(k, ANY), function () {
    verifyVersionDoesNotExist(k);
  });
});

bthread("Webhook create verification", function () {
  const e = waitForAnyWebhookAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWebhook(k, ANY), function () {
    verifyWebhookExists(k);
  });
});

bthread("Webhook update verification", function () {
  const e = waitForAnyWebhookUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWebhook(k, ANY), function () {
    verifyWebhookUpdated(k);
  });
});

bthread("Webhook delete verification", function () {
  const e = waitForAnyWebhookDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWebhook(k, ANY), function () {
    verifyWebhookDoesNotExist(k);
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
