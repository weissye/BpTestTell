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
    if (Object.prototype.hasOwnProperty.call(e, key) && typeof e[key] !== 'function') return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key) && typeof e.data[key] !== 'function') return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key) && typeof e.payload[key] !== 'function') return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id') && typeof e['id'] !== 'function') return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc') && typeof e['ndc'] !== 'function') return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
  if (typeof v === 'function') return '1001';
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

// ===== PASSIVE ASSERTIONS =====

bthread("Accept create verification", function () {
  const e = waitForAnyAcceptAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccept(k), function () {
    verifyAcceptExists(k);
  });
});

bthread("Accept update verification", function () {
  const e = waitForAnyAcceptUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccept(k), function () {
    verifyAcceptUpdated(k);
  });
});

bthread("Accept delete verification", function () {
  const e = waitForAnyAcceptDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccept(k), function () {
    verifyAcceptDoesNotExist(k);
  });
});

bthread("Activity create verification", function () {
  const e = waitForAnyActivityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActivity(k), function () {
    verifyActivityExists(k);
  });
});

bthread("Activity update verification", function () {
  const e = waitForAnyActivityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActivity(k), function () {
    verifyActivityUpdated(k);
  });
});

bthread("Activity delete verification", function () {
  const e = waitForAnyActivityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddActivity(k), function () {
    verifyActivityDoesNotExist(k);
  });
});

bthread("Apply create verification", function () {
  const e = waitForAnyApplyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApply(k), function () {
    verifyApplyExists(k);
  });
});

bthread("Apply update verification", function () {
  const e = waitForAnyApplyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApply(k), function () {
    verifyApplyUpdated(k);
  });
});

bthread("Apply delete verification", function () {
  const e = waitForAnyApplyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApply(k), function () {
    verifyApplyDoesNotExist(k);
  });
});

bthread("Asset create verification", function () {
  const e = waitForAnyAssetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAsset(k), function () {
    verifyAssetExists(k);
  });
});

bthread("Asset update verification", function () {
  const e = waitForAnyAssetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAsset(k), function () {
    verifyAssetUpdated(k);
  });
});

bthread("Asset delete verification", function () {
  const e = waitForAnyAssetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAsset(k), function () {
    verifyAssetDoesNotExist(k);
  });
});

bthread("Auth create verification", function () {
  const e = waitForAnyAuthAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuth(k), function () {
    verifyAuthExists(k);
  });
});

bthread("Auth update verification", function () {
  const e = waitForAnyAuthUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuth(k), function () {
    verifyAuthUpdated(k);
  });
});

bthread("Auth delete verification", function () {
  const e = waitForAnyAuthDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuth(k), function () {
    verifyAuthDoesNotExist(k);
  });
});

bthread("Cache create verification", function () {
  const e = waitForAnyCacheAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCache(k), function () {
    verifyCacheExists(k);
  });
});

bthread("Cache update verification", function () {
  const e = waitForAnyCacheUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCache(k), function () {
    verifyCacheUpdated(k);
  });
});

bthread("Cache delete verification", function () {
  const e = waitForAnyCacheDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCache(k), function () {
    verifyCacheDoesNotExist(k);
  });
});

bthread("Clear create verification", function () {
  const e = waitForAnyClearAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClear(k), function () {
    verifyClearExists(k);
  });
});

bthread("Clear update verification", function () {
  const e = waitForAnyClearUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClear(k), function () {
    verifyClearUpdated(k);
  });
});

bthread("Clear delete verification", function () {
  const e = waitForAnyClearDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClear(k), function () {
    verifyClearDoesNotExist(k);
  });
});

bthread("Collection create verification", function () {
  const e = waitForAnyCollectionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCollection(k), function () {
    verifyCollectionExists(k);
  });
});

bthread("Collection update verification", function () {
  const e = waitForAnyCollectionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCollection(k), function () {
    verifyCollectionUpdated(k);
  });
});

bthread("Collection delete verification", function () {
  const e = waitForAnyCollectionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCollection(k), function () {
    verifyCollectionDoesNotExist(k);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComment(k), function () {
    verifyCommentExists(k);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComment(k), function () {
    verifyCommentUpdated(k);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComment(k), function () {
    verifyCommentDoesNotExist(k);
  });
});

bthread("Compare create verification", function () {
  const e = waitForAnyCompareAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCompare(k), function () {
    verifyCompareExists(k);
  });
});

bthread("Compare update verification", function () {
  const e = waitForAnyCompareUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCompare(k), function () {
    verifyCompareUpdated(k);
  });
});

bthread("Compare delete verification", function () {
  const e = waitForAnyCompareDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCompare(k), function () {
    verifyCompareDoesNotExist(k);
  });
});

bthread("Diff create verification", function () {
  const e = waitForAnyDiffAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDiff(k), function () {
    verifyDiffExists(k);
  });
});

bthread("Diff update verification", function () {
  const e = waitForAnyDiffUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDiff(k), function () {
    verifyDiffUpdated(k);
  });
});

bthread("Diff delete verification", function () {
  const e = waitForAnyDiffDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDiff(k), function () {
    verifyDiffDoesNotExist(k);
  });
});

bthread("Disable create verification", function () {
  const e = waitForAnyDisableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisable(k), function () {
    verifyDisableExists(k);
  });
});

bthread("Disable update verification", function () {
  const e = waitForAnyDisableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisable(k), function () {
    verifyDisableUpdated(k);
  });
});

bthread("Disable delete verification", function () {
  const e = waitForAnyDisableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDisable(k), function () {
    verifyDisableDoesNotExist(k);
  });
});

bthread("Enable create verification", function () {
  const e = waitForAnyEnableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnable(k), function () {
    verifyEnableExists(k);
  });
});

bthread("Enable update verification", function () {
  const e = waitForAnyEnableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnable(k), function () {
    verifyEnableUpdated(k);
  });
});

bthread("Enable delete verification", function () {
  const e = waitForAnyEnableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEnable(k), function () {
    verifyEnableDoesNotExist(k);
  });
});

bthread("Export create verification", function () {
  const e = waitForAnyExportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExport(k), function () {
    verifyExportExists(k);
  });
});

bthread("Export update verification", function () {
  const e = waitForAnyExportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExport(k), function () {
    verifyExportUpdated(k);
  });
});

bthread("Export delete verification", function () {
  const e = waitForAnyExportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExport(k), function () {
    verifyExportDoesNotExist(k);
  });
});

bthread("Extension create verification", function () {
  const e = waitForAnyExtensionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExtension(k), function () {
    verifyExtensionExists(k);
  });
});

bthread("Extension update verification", function () {
  const e = waitForAnyExtensionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExtension(k), function () {
    verifyExtensionUpdated(k);
  });
});

bthread("Extension delete verification", function () {
  const e = waitForAnyExtensionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExtension(k), function () {
    verifyExtensionDoesNotExist(k);
  });
});

bthread("Field create verification", function () {
  const e = waitForAnyFieldAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteField(k), function () {
    verifyFieldExists(k);
  });
});

bthread("Field update verification", function () {
  const e = waitForAnyFieldUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteField(k), function () {
    verifyFieldUpdated(k);
  });
});

bthread("Field delete verification", function () {
  const e = waitForAnyFieldDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddField(k), function () {
    verifyFieldDoesNotExist(k);
  });
});

bthread("File create verification", function () {
  const e = waitForAnyFileAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFile(k), function () {
    verifyFileExists(k);
  });
});

bthread("File update verification", function () {
  const e = waitForAnyFileUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFile(k), function () {
    verifyFileUpdated(k);
  });
});

bthread("File delete verification", function () {
  const e = waitForAnyFileDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFile(k), function () {
    verifyFileDoesNotExist(k);
  });
});

bthread("Flow create verification", function () {
  const e = waitForAnyFlowAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFlow(k), function () {
    verifyFlowExists(k);
  });
});

bthread("Flow update verification", function () {
  const e = waitForAnyFlowUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFlow(k), function () {
    verifyFlowUpdated(k);
  });
});

bthread("Flow delete verification", function () {
  const e = waitForAnyFlowDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFlow(k), function () {
    verifyFlowDoesNotExist(k);
  });
});

bthread("Folder create verification", function () {
  const e = waitForAnyFolderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFolder(k), function () {
    verifyFolderExists(k);
  });
});

bthread("Folder update verification", function () {
  const e = waitForAnyFolderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFolder(k), function () {
    verifyFolderUpdated(k);
  });
});

bthread("Folder delete verification", function () {
  const e = waitForAnyFolderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFolder(k), function () {
    verifyFolderDoesNotExist(k);
  });
});

bthread("Generate create verification", function () {
  const e = waitForAnyGenerateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerate(k), function () {
    verifyGenerateExists(k);
  });
});

bthread("Generate update verification", function () {
  const e = waitForAnyGenerateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerate(k), function () {
    verifyGenerateUpdated(k);
  });
});

bthread("Generate delete verification", function () {
  const e = waitForAnyGenerateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGenerate(k), function () {
    verifyGenerateDoesNotExist(k);
  });
});

bthread("Hash create verification", function () {
  const e = waitForAnyHashAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHash(k), function () {
    verifyHashExists(k);
  });
});

bthread("Hash update verification", function () {
  const e = waitForAnyHashUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHash(k), function () {
    verifyHashUpdated(k);
  });
});

bthread("Hash delete verification", function () {
  const e = waitForAnyHashDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHash(k), function () {
    verifyHashDoesNotExist(k);
  });
});

bthread("Import create verification", function () {
  const e = waitForAnyImportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImport(k), function () {
    verifyImportExists(k);
  });
});

bthread("Import update verification", function () {
  const e = waitForAnyImportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImport(k), function () {
    verifyImportUpdated(k);
  });
});

bthread("Import delete verification", function () {
  const e = waitForAnyImportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddImport(k), function () {
    verifyImportDoesNotExist(k);
  });
});

bthread("Info create verification", function () {
  const e = waitForAnyInfoAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInfo(k), function () {
    verifyInfoExists(k);
  });
});

bthread("Info update verification", function () {
  const e = waitForAnyInfoUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInfo(k), function () {
    verifyInfoUpdated(k);
  });
});

bthread("Info delete verification", function () {
  const e = waitForAnyInfoDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInfo(k), function () {
    verifyInfoDoesNotExist(k);
  });
});

bthread("Invite create verification", function () {
  const e = waitForAnyInviteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvite(k), function () {
    verifyInviteExists(k);
  });
});

bthread("Invite update verification", function () {
  const e = waitForAnyInviteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvite(k), function () {
    verifyInviteUpdated(k);
  });
});

bthread("Invite delete verification", function () {
  const e = waitForAnyInviteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvite(k), function () {
    verifyInviteDoesNotExist(k);
  });
});

bthread("Item create verification", function () {
  const e = waitForAnyItemAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteItem(k), function () {
    verifyItemExists(k);
  });
});

bthread("Item update verification", function () {
  const e = waitForAnyItemUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteItem(k), function () {
    verifyItemUpdated(k);
  });
});

bthread("Item delete verification", function () {
  const e = waitForAnyItemDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddItem(k), function () {
    verifyItemDoesNotExist(k);
  });
});

bthread("Login create verification", function () {
  const e = waitForAnyLoginAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogin(k), function () {
    verifyLoginExists(k);
  });
});

bthread("Login update verification", function () {
  const e = waitForAnyLoginUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogin(k), function () {
    verifyLoginUpdated(k);
  });
});

bthread("Login delete verification", function () {
  const e = waitForAnyLoginDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLogin(k), function () {
    verifyLoginDoesNotExist(k);
  });
});

bthread("Logout create verification", function () {
  const e = waitForAnyLogoutAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogout(k), function () {
    verifyLogoutExists(k);
  });
});

bthread("Logout update verification", function () {
  const e = waitForAnyLogoutUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLogout(k), function () {
    verifyLogoutUpdated(k);
  });
});

bthread("Logout delete verification", function () {
  const e = waitForAnyLogoutDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLogout(k), function () {
    verifyLogoutDoesNotExist(k);
  });
});

bthread("Me create verification", function () {
  const e = waitForAnyMeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMe(k), function () {
    verifyMeExists(k);
  });
});

bthread("Me update verification", function () {
  const e = waitForAnyMeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMe(k), function () {
    verifyMeUpdated(k);
  });
});

bthread("Me delete verification", function () {
  const e = waitForAnyMeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMe(k), function () {
    verifyMeDoesNotExist(k);
  });
});

bthread("Oauth create verification", function () {
  const e = waitForAnyOauthAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOauth(k), function () {
    verifyOauthExists(k);
  });
});

bthread("Oauth update verification", function () {
  const e = waitForAnyOauthUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOauth(k), function () {
    verifyOauthUpdated(k);
  });
});

bthread("Oauth delete verification", function () {
  const e = waitForAnyOauthDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOauth(k), function () {
    verifyOauthDoesNotExist(k);
  });
});

bthread("Operation create verification", function () {
  const e = waitForAnyOperationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOperation(k), function () {
    verifyOperationExists(k);
  });
});

bthread("Operation update verification", function () {
  const e = waitForAnyOperationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOperation(k), function () {
    verifyOperationUpdated(k);
  });
});

bthread("Operation delete verification", function () {
  const e = waitForAnyOperationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOperation(k), function () {
    verifyOperationDoesNotExist(k);
  });
});

bthread("Page create verification", function () {
  const e = waitForAnyPageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePage(k), function () {
    verifyPageExists(k);
  });
});

bthread("Page update verification", function () {
  const e = waitForAnyPageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePage(k), function () {
    verifyPageUpdated(k);
  });
});

bthread("Page delete verification", function () {
  const e = waitForAnyPageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPage(k), function () {
    verifyPageDoesNotExist(k);
  });
});

bthread("Password create verification", function () {
  const e = waitForAnyPasswordAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePassword(k), function () {
    verifyPasswordExists(k);
  });
});

bthread("Password update verification", function () {
  const e = waitForAnyPasswordUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePassword(k), function () {
    verifyPasswordUpdated(k);
  });
});

bthread("Password delete verification", function () {
  const e = waitForAnyPasswordDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPassword(k), function () {
    verifyPasswordDoesNotExist(k);
  });
});

bthread("Permission create verification", function () {
  const e = waitForAnyPermissionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermission(k), function () {
    verifyPermissionExists(k);
  });
});

bthread("Permission update verification", function () {
  const e = waitForAnyPermissionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermission(k), function () {
    verifyPermissionUpdated(k);
  });
});

bthread("Permission delete verification", function () {
  const e = waitForAnyPermissionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPermission(k), function () {
    verifyPermissionDoesNotExist(k);
  });
});

bthread("Ping create verification", function () {
  const e = waitForAnyPingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePing(k), function () {
    verifyPingExists(k);
  });
});

bthread("Ping update verification", function () {
  const e = waitForAnyPingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePing(k), function () {
    verifyPingUpdated(k);
  });
});

bthread("Ping delete verification", function () {
  const e = waitForAnyPingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPing(k), function () {
    verifyPingDoesNotExist(k);
  });
});

bthread("Preset create verification", function () {
  const e = waitForAnyPresetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePreset(k), function () {
    verifyPresetExists(k);
  });
});

bthread("Preset update verification", function () {
  const e = waitForAnyPresetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePreset(k), function () {
    verifyPresetUpdated(k);
  });
});

bthread("Preset delete verification", function () {
  const e = waitForAnyPresetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPreset(k), function () {
    verifyPresetDoesNotExist(k);
  });
});

bthread("Promote create verification", function () {
  const e = waitForAnyPromoteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePromote(k), function () {
    verifyPromoteExists(k);
  });
});

bthread("Promote update verification", function () {
  const e = waitForAnyPromoteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePromote(k), function () {
    verifyPromoteUpdated(k);
  });
});

bthread("Promote delete verification", function () {
  const e = waitForAnyPromoteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPromote(k), function () {
    verifyPromoteDoesNotExist(k);
  });
});

bthread("Random create verification", function () {
  const e = waitForAnyRandomAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRandom(k), function () {
    verifyRandomExists(k);
  });
});

bthread("Random update verification", function () {
  const e = waitForAnyRandomUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRandom(k), function () {
    verifyRandomUpdated(k);
  });
});

bthread("Random delete verification", function () {
  const e = waitForAnyRandomDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRandom(k), function () {
    verifyRandomDoesNotExist(k);
  });
});

bthread("Refresh create verification", function () {
  const e = waitForAnyRefreshAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRefresh(k), function () {
    verifyRefreshExists(k);
  });
});

bthread("Refresh update verification", function () {
  const e = waitForAnyRefreshUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRefresh(k), function () {
    verifyRefreshUpdated(k);
  });
});

bthread("Refresh delete verification", function () {
  const e = waitForAnyRefreshDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRefresh(k), function () {
    verifyRefreshDoesNotExist(k);
  });
});

bthread("Relation create verification", function () {
  const e = waitForAnyRelationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRelation(k), function () {
    verifyRelationExists(k);
  });
});

bthread("Relation update verification", function () {
  const e = waitForAnyRelationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRelation(k), function () {
    verifyRelationUpdated(k);
  });
});

bthread("Relation delete verification", function () {
  const e = waitForAnyRelationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRelation(k), function () {
    verifyRelationDoesNotExist(k);
  });
});

bthread("Request create verification", function () {
  const e = waitForAnyRequestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequest(k), function () {
    verifyRequestExists(k);
  });
});

bthread("Request update verification", function () {
  const e = waitForAnyRequestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequest(k), function () {
    verifyRequestUpdated(k);
  });
});

bthread("Request delete verification", function () {
  const e = waitForAnyRequestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRequest(k), function () {
    verifyRequestDoesNotExist(k);
  });
});

bthread("Reset create verification", function () {
  const e = waitForAnyResetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReset(k), function () {
    verifyResetExists(k);
  });
});

bthread("Reset update verification", function () {
  const e = waitForAnyResetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReset(k), function () {
    verifyResetUpdated(k);
  });
});

bthread("Reset delete verification", function () {
  const e = waitForAnyResetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReset(k), function () {
    verifyResetDoesNotExist(k);
  });
});

bthread("Revision create verification", function () {
  const e = waitForAnyRevisionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRevision(k), function () {
    verifyRevisionExists(k);
  });
});

bthread("Revision update verification", function () {
  const e = waitForAnyRevisionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRevision(k), function () {
    verifyRevisionUpdated(k);
  });
});

bthread("Revision delete verification", function () {
  const e = waitForAnyRevisionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRevision(k), function () {
    verifyRevisionDoesNotExist(k);
  });
});

bthread("Role create verification", function () {
  const e = waitForAnyRoleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRole(k), function () {
    verifyRoleExists(k);
  });
});

bthread("Role update verification", function () {
  const e = waitForAnyRoleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRole(k), function () {
    verifyRoleUpdated(k);
  });
});

bthread("Role delete verification", function () {
  const e = waitForAnyRoleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRole(k), function () {
    verifyRoleDoesNotExist(k);
  });
});

bthread("Save create verification", function () {
  const e = waitForAnySaveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSave(k), function () {
    verifySaveExists(k);
  });
});

bthread("Save update verification", function () {
  const e = waitForAnySaveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSave(k), function () {
    verifySaveUpdated(k);
  });
});

bthread("Save delete verification", function () {
  const e = waitForAnySaveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSave(k), function () {
    verifySaveDoesNotExist(k);
  });
});

bthread("Schema create verification", function () {
  const e = waitForAnySchemaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSchema(k), function () {
    verifySchemaExists(k);
  });
});

bthread("Schema update verification", function () {
  const e = waitForAnySchemaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSchema(k), function () {
    verifySchemaUpdated(k);
  });
});

bthread("Schema delete verification", function () {
  const e = waitForAnySchemaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSchema(k), function () {
    verifySchemaDoesNotExist(k);
  });
});

bthread("Server create verification", function () {
  const e = waitForAnyServerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServer(k), function () {
    verifyServerExists(k);
  });
});

bthread("Server update verification", function () {
  const e = waitForAnyServerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteServer(k), function () {
    verifyServerUpdated(k);
  });
});

bthread("Server delete verification", function () {
  const e = waitForAnyServerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddServer(k), function () {
    verifyServerDoesNotExist(k);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSetting(k), function () {
    verifySettingExists(k);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSetting(k), function () {
    verifySettingUpdated(k);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSetting(k), function () {
    verifySettingDoesNotExist(k);
  });
});

bthread("Snapshot create verification", function () {
  const e = waitForAnySnapshotAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSnapshot(k), function () {
    verifySnapshotExists(k);
  });
});

bthread("Snapshot update verification", function () {
  const e = waitForAnySnapshotUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSnapshot(k), function () {
    verifySnapshotUpdated(k);
  });
});

bthread("Snapshot delete verification", function () {
  const e = waitForAnySnapshotDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSnapshot(k), function () {
    verifySnapshotDoesNotExist(k);
  });
});

bthread("Sort create verification", function () {
  const e = waitForAnySortAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSort(k), function () {
    verifySortExists(k);
  });
});

bthread("Sort update verification", function () {
  const e = waitForAnySortUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSort(k), function () {
    verifySortUpdated(k);
  });
});

bthread("Sort delete verification", function () {
  const e = waitForAnySortDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSort(k), function () {
    verifySortDoesNotExist(k);
  });
});

bthread("String create verification", function () {
  const e = waitForAnyStringAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteString(k), function () {
    verifyStringExists(k);
  });
});

bthread("String update verification", function () {
  const e = waitForAnyStringUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteString(k), function () {
    verifyStringUpdated(k);
  });
});

bthread("String delete verification", function () {
  const e = waitForAnyStringDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddString(k), function () {
    verifyStringDoesNotExist(k);
  });
});

bthread("Tfa create verification", function () {
  const e = waitForAnyTfaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTfa(k), function () {
    verifyTfaExists(k);
  });
});

bthread("Tfa update verification", function () {
  const e = waitForAnyTfaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTfa(k), function () {
    verifyTfaUpdated(k);
  });
});

bthread("Tfa delete verification", function () {
  const e = waitForAnyTfaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTfa(k), function () {
    verifyTfaDoesNotExist(k);
  });
});

bthread("Track create verification", function () {
  const e = waitForAnyTrackAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTrack(k), function () {
    verifyTrackExists(k);
  });
});

bthread("Track update verification", function () {
  const e = waitForAnyTrackUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTrack(k), function () {
    verifyTrackUpdated(k);
  });
});

bthread("Track delete verification", function () {
  const e = waitForAnyTrackDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTrack(k), function () {
    verifyTrackDoesNotExist(k);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUser(k), function () {
    verifyUserExists(k);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUser(k), function () {
    verifyUserUpdated(k);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUser(k), function () {
    verifyUserDoesNotExist(k);
  });
});

bthread("Util create verification", function () {
  const e = waitForAnyUtilAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUtil(k), function () {
    verifyUtilExists(k);
  });
});

bthread("Util update verification", function () {
  const e = waitForAnyUtilUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUtil(k), function () {
    verifyUtilUpdated(k);
  });
});

bthread("Util delete verification", function () {
  const e = waitForAnyUtilDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUtil(k), function () {
    verifyUtilDoesNotExist(k);
  });
});

bthread("Verify create verification", function () {
  const e = waitForAnyVerifyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVerify(k), function () {
    verifyVerifyExists(k);
  });
});

bthread("Verify update verification", function () {
  const e = waitForAnyVerifyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVerify(k), function () {
    verifyVerifyUpdated(k);
  });
});

bthread("Verify delete verification", function () {
  const e = waitForAnyVerifyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVerify(k), function () {
    verifyVerifyDoesNotExist(k);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVersion(k), function () {
    verifyVersionExists(k);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVersion(k), function () {
    verifyVersionUpdated(k);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVersion(k), function () {
    verifyVersionDoesNotExist(k);
  });
});

bthread("Webhook create verification", function () {
  const e = waitForAnyWebhookAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhook(k), function () {
    verifyWebhookExists(k);
  });
});

bthread("Webhook update verification", function () {
  const e = waitForAnyWebhookUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhook(k), function () {
    verifyWebhookUpdated(k);
  });
});

bthread("Webhook delete verification", function () {
  const e = waitForAnyWebhookDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhook(k), function () {
    verifyWebhookDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Accept", function () {
  const x = waitForAnyAcceptAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccept(k, ANY), function () {});
});

bthread("Guard: Unique Activity", function () {
  const x = waitForAnyActivityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddActivity(k, ANY), function () {});
});

bthread("Guard: Unique Apply", function () {
  const x = waitForAnyApplyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApply(k, ANY), function () {});
});

bthread("Guard: Unique Asset", function () {
  const x = waitForAnyAssetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAsset(k, ANY), function () {});
});

bthread("Guard: Unique Auth", function () {
  const x = waitForAnyAuthAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuth(k, ANY), function () {});
});

bthread("Guard: Unique Cache", function () {
  const x = waitForAnyCacheAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCache(k, ANY), function () {});
});

bthread("Guard: Unique Clear", function () {
  const x = waitForAnyClearAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClear(k, ANY), function () {});
});

bthread("Guard: Unique Collection", function () {
  const x = waitForAnyCollectionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCollection(k, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComment(k, ANY), function () {});
});

bthread("Guard: Unique Compare", function () {
  const x = waitForAnyCompareAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCompare(k, ANY), function () {});
});

bthread("Guard: Unique Diff", function () {
  const x = waitForAnyDiffAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDiff(k, ANY), function () {});
});

bthread("Guard: Unique Disable", function () {
  const x = waitForAnyDisableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDisable(k, ANY), function () {});
});

bthread("Guard: Unique Enable", function () {
  const x = waitForAnyEnableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEnable(k, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExport(k, ANY), function () {});
});

bthread("Guard: Unique Extension", function () {
  const x = waitForAnyExtensionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExtension(k, ANY), function () {});
});

bthread("Guard: Unique Field", function () {
  const x = waitForAnyFieldAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddField(k, ANY), function () {});
});

bthread("Guard: Unique File", function () {
  const x = waitForAnyFileAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFile(k, ANY), function () {});
});

bthread("Guard: Unique Flow", function () {
  const x = waitForAnyFlowAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFlow(k, ANY), function () {});
});

bthread("Guard: Unique Folder", function () {
  const x = waitForAnyFolderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFolder(k, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGenerate(k, ANY), function () {});
});

bthread("Guard: Unique Hash", function () {
  const x = waitForAnyHashAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHash(k, ANY), function () {});
});

bthread("Guard: Unique Import", function () {
  const x = waitForAnyImportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddImport(k, ANY), function () {});
});

bthread("Guard: Unique Info", function () {
  const x = waitForAnyInfoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInfo(k, ANY), function () {});
});

bthread("Guard: Unique Invite", function () {
  const x = waitForAnyInviteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvite(k, ANY), function () {});
});

bthread("Guard: Unique Item", function () {
  const x = waitForAnyItemAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddItem(k, ANY), function () {});
});

bthread("Guard: Unique Login", function () {
  const x = waitForAnyLoginAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLogin(k, ANY), function () {});
});

bthread("Guard: Unique Logout", function () {
  const x = waitForAnyLogoutAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLogout(k, ANY), function () {});
});

bthread("Guard: Unique Me", function () {
  const x = waitForAnyMeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMe(k, ANY), function () {});
});

bthread("Guard: Unique Oauth", function () {
  const x = waitForAnyOauthAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOauth(k, ANY), function () {});
});

bthread("Guard: Unique Operation", function () {
  const x = waitForAnyOperationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOperation(k, ANY), function () {});
});

bthread("Guard: Unique Page", function () {
  const x = waitForAnyPageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPage(k, ANY), function () {});
});

bthread("Guard: Unique Password", function () {
  const x = waitForAnyPasswordAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPassword(k, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermission(k, ANY), function () {});
});

bthread("Guard: Unique Ping", function () {
  const x = waitForAnyPingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPing(k, ANY), function () {});
});

bthread("Guard: Unique Preset", function () {
  const x = waitForAnyPresetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPreset(k, ANY), function () {});
});

bthread("Guard: Unique Promote", function () {
  const x = waitForAnyPromoteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPromote(k, ANY), function () {});
});

bthread("Guard: Unique Random", function () {
  const x = waitForAnyRandomAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRandom(k, ANY), function () {});
});

bthread("Guard: Unique Refresh", function () {
  const x = waitForAnyRefreshAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRefresh(k, ANY), function () {});
});

bthread("Guard: Unique Relation", function () {
  const x = waitForAnyRelationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRelation(k, ANY), function () {});
});

bthread("Guard: Unique Request", function () {
  const x = waitForAnyRequestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequest(k, ANY), function () {});
});

bthread("Guard: Unique Reset", function () {
  const x = waitForAnyResetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReset(k, ANY), function () {});
});

bthread("Guard: Unique Revision", function () {
  const x = waitForAnyRevisionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRevision(k, ANY), function () {});
});

bthread("Guard: Unique Role", function () {
  const x = waitForAnyRoleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRole(k, ANY), function () {});
});

bthread("Guard: Unique Save", function () {
  const x = waitForAnySaveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSave(k, ANY), function () {});
});

bthread("Guard: Unique Schema", function () {
  const x = waitForAnySchemaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSchema(k, ANY), function () {});
});

bthread("Guard: Unique Server", function () {
  const x = waitForAnyServerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddServer(k, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSetting(k, ANY), function () {});
});

bthread("Guard: Unique Snapshot", function () {
  const x = waitForAnySnapshotAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSnapshot(k, ANY), function () {});
});

bthread("Guard: Unique Sort", function () {
  const x = waitForAnySortAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSort(k, ANY), function () {});
});

bthread("Guard: Unique String", function () {
  const x = waitForAnyStringAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddString(k, ANY), function () {});
});

bthread("Guard: Unique Tfa", function () {
  const x = waitForAnyTfaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTfa(k, ANY), function () {});
});

bthread("Guard: Unique Track", function () {
  const x = waitForAnyTrackAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTrack(k, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUser(k, ANY), function () {});
});

bthread("Guard: Unique Util", function () {
  const x = waitForAnyUtilAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUtil(k, ANY), function () {});
});

bthread("Guard: Unique Verify", function () {
  const x = waitForAnyVerifyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVerify(k, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVersion(k, ANY), function () {});
});

bthread("Guard: Unique Webhook", function () {
  const x = waitForAnyWebhookAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhook(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
