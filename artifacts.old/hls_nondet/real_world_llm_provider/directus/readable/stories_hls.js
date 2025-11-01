// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls_nondet
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

bthread("CollectionsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCollections(x.id);
  const e_add = waitForCollectionsAdded(id);
  block(matchDeleteCollections(id), function () {
    verifyCollectionsExists(id);
  });
  updateCollections(x.id);
  updateCollections(x.id);
  const e_upd = waitForCollectionsUpdated(id);
  block(matchDeleteCollections(id), function () {
    verifyCollectionsUpdated(id);
  });
  deleteCollections(x.id);
  const e_del = waitForCollectionsDeleted(id);
  block(matchAddCollections(id), function () {
    verifyCollectionsDoesNotExist(id);
  });
});

bthread("CommentsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComments(x.id);
  const e_add = waitForCommentsAdded(id);
  block(matchDeleteComments(id), function () {
    verifyCommentsExists(id);
  });
  updateComments(x.id);
  updateComments(x.id);
  const e_upd = waitForCommentsUpdated(id);
  block(matchDeleteComments(id), function () {
    verifyCommentsUpdated(id);
  });
  deleteComments(x.id);
  const e_del = waitForCommentsDeleted(id);
  block(matchAddComments(id), function () {
    verifyCommentsDoesNotExist(id);
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

bthread("ExtensionsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExtensions(x.id);
  const e_add = waitForExtensionsAdded(id);
  block(matchDeleteExtensions(id), function () {
    verifyExtensionsExists(id);
  });
  updateExtensions(x.id);
  updateExtensions(x.id);
  const e_upd = waitForExtensionsUpdated(id);
  block(matchDeleteExtensions(id), function () {
    verifyExtensionsUpdated(id);
  });
  deleteExtensions(x.id);
  const e_del = waitForExtensionsDeleted(id);
  block(matchAddExtensions(id), function () {
    verifyExtensionsDoesNotExist(id);
  });
});

bthread("FieldsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFields(x.id);
  const e_add = waitForFieldsAdded(id);
  block(matchDeleteFields(id), function () {
    verifyFieldsExists(id);
  });
  updateFields(x.id);
  updateFields(x.id);
  const e_upd = waitForFieldsUpdated(id);
  block(matchDeleteFields(id), function () {
    verifyFieldsUpdated(id);
  });
  deleteFields(x.id);
  const e_del = waitForFieldsDeleted(id);
  block(matchAddFields(id), function () {
    verifyFieldsDoesNotExist(id);
  });
});

bthread("FilesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFiles(x.id);
  const e_add = waitForFilesAdded(id);
  block(matchDeleteFiles(id), function () {
    verifyFilesExists(id);
  });
  updateFiles(x.id);
  updateFiles(x.id);
  const e_upd = waitForFilesUpdated(id);
  block(matchDeleteFiles(id), function () {
    verifyFilesUpdated(id);
  });
  deleteFiles(x.id);
  const e_del = waitForFilesDeleted(id);
  block(matchAddFiles(id), function () {
    verifyFilesDoesNotExist(id);
  });
});

bthread("FlowsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFlows(x.id);
  const e_add = waitForFlowsAdded(id);
  block(matchDeleteFlows(id), function () {
    verifyFlowsExists(id);
  });
  updateFlows(x.id);
  updateFlows(x.id);
  const e_upd = waitForFlowsUpdated(id);
  block(matchDeleteFlows(id), function () {
    verifyFlowsUpdated(id);
  });
  deleteFlows(x.id);
  const e_del = waitForFlowsDeleted(id);
  block(matchAddFlows(id), function () {
    verifyFlowsDoesNotExist(id);
  });
});

bthread("FoldersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFolders(x.id);
  const e_add = waitForFoldersAdded(id);
  block(matchDeleteFolders(id), function () {
    verifyFoldersExists(id);
  });
  updateFolders(x.id);
  updateFolders(x.id);
  const e_upd = waitForFoldersUpdated(id);
  block(matchDeleteFolders(id), function () {
    verifyFoldersUpdated(id);
  });
  deleteFolders(x.id);
  const e_del = waitForFoldersDeleted(id);
  block(matchAddFolders(id), function () {
    verifyFoldersDoesNotExist(id);
  });
});

bthread("ItemsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addItems(x.id);
  const e_add = waitForItemsAdded(id);
  block(matchDeleteItems(id), function () {
    verifyItemsExists(id);
  });
  updateItems(x.id);
  updateItems(x.id);
  const e_upd = waitForItemsUpdated(id);
  block(matchDeleteItems(id), function () {
    verifyItemsUpdated(id);
  });
  deleteItems(x.id);
  const e_del = waitForItemsDeleted(id);
  block(matchAddItems(id), function () {
    verifyItemsDoesNotExist(id);
  });
});

bthread("OperationsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOperations(x.id);
  const e_add = waitForOperationsAdded(id);
  block(matchDeleteOperations(id), function () {
    verifyOperationsExists(id);
  });
  updateOperations(x.id);
  updateOperations(x.id);
  const e_upd = waitForOperationsUpdated(id);
  block(matchDeleteOperations(id), function () {
    verifyOperationsUpdated(id);
  });
  deleteOperations(x.id);
  const e_del = waitForOperationsDeleted(id);
  block(matchAddOperations(id), function () {
    verifyOperationsDoesNotExist(id);
  });
});

bthread("PermissionsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPermissions(x.id);
  const e_add = waitForPermissionsAdded(id);
  block(matchDeletePermissions(id), function () {
    verifyPermissionsExists(id);
  });
  updatePermissions(x.id);
  updatePermissions(x.id);
  const e_upd = waitForPermissionsUpdated(id);
  block(matchDeletePermissions(id), function () {
    verifyPermissionsUpdated(id);
  });
  deletePermissions(x.id);
  const e_del = waitForPermissionsDeleted(id);
  block(matchAddPermissions(id), function () {
    verifyPermissionsDoesNotExist(id);
  });
});

bthread("PresetsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPresets(x.id);
  const e_add = waitForPresetsAdded(id);
  block(matchDeletePresets(id), function () {
    verifyPresetsExists(id);
  });
  updatePresets(x.id);
  updatePresets(x.id);
  const e_upd = waitForPresetsUpdated(id);
  block(matchDeletePresets(id), function () {
    verifyPresetsUpdated(id);
  });
  deletePresets(x.id);
  const e_del = waitForPresetsDeleted(id);
  block(matchAddPresets(id), function () {
    verifyPresetsDoesNotExist(id);
  });
});

bthread("QueryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addQuery(x.id);
  const e_add = waitForQueryAdded(id);
  block(matchDeleteQuery(id), function () {
    verifyQueryExists(id);
  });
  updateQuery(x.id);
  updateQuery(x.id);
  const e_upd = waitForQueryUpdated(id);
  block(matchDeleteQuery(id), function () {
    verifyQueryUpdated(id);
  });
  deleteQuery(x.id);
  const e_del = waitForQueryDeleted(id);
  block(matchAddQuery(id), function () {
    verifyQueryDoesNotExist(id);
  });
});

bthread("RelationsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRelations(x.id);
  const e_add = waitForRelationsAdded(id);
  block(matchDeleteRelations(id), function () {
    verifyRelationsExists(id);
  });
  updateRelations(x.id);
  updateRelations(x.id);
  const e_upd = waitForRelationsUpdated(id);
  block(matchDeleteRelations(id), function () {
    verifyRelationsUpdated(id);
  });
  deleteRelations(x.id);
  const e_del = waitForRelationsDeleted(id);
  block(matchAddRelations(id), function () {
    verifyRelationsDoesNotExist(id);
  });
});

bthread("RevisionsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRevisions(x.id);
  const e_add = waitForRevisionsAdded(id);
  block(matchDeleteRevisions(id), function () {
    verifyRevisionsExists(id);
  });
  updateRevisions(x.id);
  updateRevisions(x.id);
  const e_upd = waitForRevisionsUpdated(id);
  block(matchDeleteRevisions(id), function () {
    verifyRevisionsUpdated(id);
  });
  deleteRevisions(x.id);
  const e_del = waitForRevisionsDeleted(id);
  block(matchAddRevisions(id), function () {
    verifyRevisionsDoesNotExist(id);
  });
});

bthread("RolesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRoles(x.id);
  const e_add = waitForRolesAdded(id);
  block(matchDeleteRoles(id), function () {
    verifyRolesExists(id);
  });
  updateRoles(x.id);
  updateRoles(x.id);
  const e_upd = waitForRolesUpdated(id);
  block(matchDeleteRoles(id), function () {
    verifyRolesUpdated(id);
  });
  deleteRoles(x.id);
  const e_del = waitForRolesDeleted(id);
  block(matchAddRoles(id), function () {
    verifyRolesDoesNotExist(id);
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

bthread("SettingsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSettings(x.id);
  const e_add = waitForSettingsAdded(id);
  block(matchDeleteSettings(id), function () {
    verifySettingsExists(id);
  });
  updateSettings(x.id);
  updateSettings(x.id);
  const e_upd = waitForSettingsUpdated(id);
  block(matchDeleteSettings(id), function () {
    verifySettingsUpdated(id);
  });
  deleteSettings(x.id);
  const e_del = waitForSettingsDeleted(id);
  block(matchAddSettings(id), function () {
    verifySettingsDoesNotExist(id);
  });
});

bthread("UsersLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsers(x.id);
  const e_add = waitForUsersAdded(id);
  block(matchDeleteUsers(id), function () {
    verifyUsersExists(id);
  });
  updateUsers(x.id);
  updateUsers(x.id);
  const e_upd = waitForUsersUpdated(id);
  block(matchDeleteUsers(id), function () {
    verifyUsersUpdated(id);
  });
  deleteUsers(x.id);
  const e_del = waitForUsersDeleted(id);
  block(matchAddUsers(id), function () {
    verifyUsersDoesNotExist(id);
  });
});

bthread("VersionsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVersions(x.id);
  const e_add = waitForVersionsAdded(id);
  block(matchDeleteVersions(id), function () {
    verifyVersionsExists(id);
  });
  updateVersions(x.id);
  updateVersions(x.id);
  const e_upd = waitForVersionsUpdated(id);
  block(matchDeleteVersions(id), function () {
    verifyVersionsUpdated(id);
  });
  deleteVersions(x.id);
  const e_del = waitForVersionsDeleted(id);
  block(matchAddVersions(id), function () {
    verifyVersionsDoesNotExist(id);
  });
});

bthread("WebhooksLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWebhooks(x.id);
  const e_add = waitForWebhooksAdded(id);
  block(matchDeleteWebhooks(id), function () {
    verifyWebhooksExists(id);
  });
  updateWebhooks(x.id);
  updateWebhooks(x.id);
  const e_upd = waitForWebhooksUpdated(id);
  block(matchDeleteWebhooks(id), function () {
    verifyWebhooksUpdated(id);
  });
  deleteWebhooks(x.id);
  const e_del = waitForWebhooksDeleted(id);
  block(matchAddWebhooks(id), function () {
    verifyWebhooksDoesNotExist(id);
  });
});

bthread("XmetadataLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addXmetadata(x.id);
  const e_add = waitForXmetadataAdded(id);
  block(matchDeleteXmetadata(id), function () {
    verifyXmetadataExists(id);
  });
  updateXmetadata(x.id);
  updateXmetadata(x.id);
  const e_upd = waitForXmetadataUpdated(id);
  block(matchDeleteXmetadata(id), function () {
    verifyXmetadataUpdated(id);
  });
  deleteXmetadata(x.id);
  const e_del = waitForXmetadataDeleted(id);
  block(matchAddXmetadata(id), function () {
    verifyXmetadataDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Activity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addActivity(a.id);
  block(matchAddActivity(a.id, ANY), function () {});
  addActivity(b.id);
});

bthread("Collections nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCollections(x.id);
  for (var i=0; i<steps; i++) {
    updateCollections(x.id);
  }
  if (pick([true,false])) { deleteCollections(x.id); }
  verifyCollectionsExists(x.id);
  verifyCollectionsUpdated(x.id);
});

bthread("Collections nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCollections(a.id);
  block(matchAddCollections(a.id, ANY), function () {});
  addCollections(b.id);
});

bthread("Comments nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addComments(x.id);
  for (var i=0; i<steps; i++) {
    updateComments(x.id);
  }
  if (pick([true,false])) { deleteComments(x.id); }
  verifyCommentsExists(x.id);
  verifyCommentsUpdated(x.id);
});

bthread("Comments nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addComments(a.id);
  block(matchAddComments(a.id, ANY), function () {});
  addComments(b.id);
});

bthread("Diff nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDiff(a.id);
  block(matchAddDiff(a.id, ANY), function () {});
  addDiff(b.id);
});

bthread("Extensions nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addExtensions(x.id);
  for (var i=0; i<steps; i++) {
    updateExtensions(x.id);
  }
  if (pick([true,false])) { deleteExtensions(x.id); }
  verifyExtensionsExists(x.id);
  verifyExtensionsUpdated(x.id);
});

bthread("Extensions nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addExtensions(a.id);
  block(matchAddExtensions(a.id, ANY), function () {});
  addExtensions(b.id);
});

bthread("Fields nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFields(x.id);
  for (var i=0; i<steps; i++) {
    updateFields(x.id);
  }
  if (pick([true,false])) { deleteFields(x.id); }
  verifyFieldsExists(x.id);
  verifyFieldsUpdated(x.id);
});

bthread("Fields nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFields(a.id);
  block(matchAddFields(a.id, ANY), function () {});
  addFields(b.id);
});

bthread("Files nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFiles(x.id);
  for (var i=0; i<steps; i++) {
    updateFiles(x.id);
  }
  if (pick([true,false])) { deleteFiles(x.id); }
  verifyFilesExists(x.id);
  verifyFilesUpdated(x.id);
});

bthread("Files nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFiles(a.id);
  block(matchAddFiles(a.id, ANY), function () {});
  addFiles(b.id);
});

bthread("Flows nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFlows(x.id);
  for (var i=0; i<steps; i++) {
    updateFlows(x.id);
  }
  if (pick([true,false])) { deleteFlows(x.id); }
  verifyFlowsExists(x.id);
  verifyFlowsUpdated(x.id);
});

bthread("Flows nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFlows(a.id);
  block(matchAddFlows(a.id, ANY), function () {});
  addFlows(b.id);
});

bthread("Folders nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFolders(x.id);
  for (var i=0; i<steps; i++) {
    updateFolders(x.id);
  }
  if (pick([true,false])) { deleteFolders(x.id); }
  verifyFoldersExists(x.id);
  verifyFoldersUpdated(x.id);
});

bthread("Folders nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFolders(a.id);
  block(matchAddFolders(a.id, ANY), function () {});
  addFolders(b.id);
});

bthread("Items nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addItems(x.id);
  for (var i=0; i<steps; i++) {
    updateItems(x.id);
  }
  if (pick([true,false])) { deleteItems(x.id); }
  verifyItemsExists(x.id);
  verifyItemsUpdated(x.id);
});

bthread("Items nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addItems(a.id);
  block(matchAddItems(a.id, ANY), function () {});
  addItems(b.id);
});

bthread("Operations nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOperations(x.id);
  for (var i=0; i<steps; i++) {
    updateOperations(x.id);
  }
  if (pick([true,false])) { deleteOperations(x.id); }
  verifyOperationsExists(x.id);
  verifyOperationsUpdated(x.id);
});

bthread("Operations nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOperations(a.id);
  block(matchAddOperations(a.id, ANY), function () {});
  addOperations(b.id);
});

bthread("Permissions nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPermissions(x.id);
  for (var i=0; i<steps; i++) {
    updatePermissions(x.id);
  }
  if (pick([true,false])) { deletePermissions(x.id); }
  verifyPermissionsExists(x.id);
  verifyPermissionsUpdated(x.id);
});

bthread("Permissions nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPermissions(a.id);
  block(matchAddPermissions(a.id, ANY), function () {});
  addPermissions(b.id);
});

bthread("Presets nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPresets(x.id);
  for (var i=0; i<steps; i++) {
    updatePresets(x.id);
  }
  if (pick([true,false])) { deletePresets(x.id); }
  verifyPresetsExists(x.id);
  verifyPresetsUpdated(x.id);
});

bthread("Presets nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPresets(a.id);
  block(matchAddPresets(a.id, ANY), function () {});
  addPresets(b.id);
});

bthread("Query nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addQuery(x.id);
  for (var i=0; i<steps; i++) {
    updateQuery(x.id);
  }
  if (pick([true,false])) { deleteQuery(x.id); }
  verifyQueryExists(x.id);
  verifyQueryUpdated(x.id);
});

bthread("Query nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addQuery(a.id);
  block(matchAddQuery(a.id, ANY), function () {});
  addQuery(b.id);
});

bthread("Relations nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRelations(x.id);
  for (var i=0; i<steps; i++) {
    updateRelations(x.id);
  }
  if (pick([true,false])) { deleteRelations(x.id); }
  verifyRelationsExists(x.id);
  verifyRelationsUpdated(x.id);
});

bthread("Relations nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRelations(a.id);
  block(matchAddRelations(a.id, ANY), function () {});
  addRelations(b.id);
});

bthread("Revisions nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRevisions(x.id);
  for (var i=0; i<steps; i++) {
    updateRevisions(x.id);
  }
  if (pick([true,false])) { deleteRevisions(x.id); }
  verifyRevisionsExists(x.id);
  verifyRevisionsUpdated(x.id);
});

bthread("Revisions nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRevisions(a.id);
  block(matchAddRevisions(a.id, ANY), function () {});
  addRevisions(b.id);
});

bthread("Roles nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRoles(x.id);
  for (var i=0; i<steps; i++) {
    updateRoles(x.id);
  }
  if (pick([true,false])) { deleteRoles(x.id); }
  verifyRolesExists(x.id);
  verifyRolesUpdated(x.id);
});

bthread("Roles nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRoles(a.id);
  block(matchAddRoles(a.id, ANY), function () {});
  addRoles(b.id);
});

bthread("Schema nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSchema(a.id);
  block(matchAddSchema(a.id, ANY), function () {});
  addSchema(b.id);
});

bthread("Settings nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSettings(x.id);
  for (var i=0; i<steps; i++) {
    updateSettings(x.id);
  }
  if (pick([true,false])) { deleteSettings(x.id); }
  verifySettingsExists(x.id);
  verifySettingsUpdated(x.id);
});

bthread("Settings nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSettings(a.id);
  block(matchAddSettings(a.id, ANY), function () {});
  addSettings(b.id);
});

bthread("Users nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addUsers(x.id);
  for (var i=0; i<steps; i++) {
    updateUsers(x.id);
  }
  if (pick([true,false])) { deleteUsers(x.id); }
  verifyUsersExists(x.id);
  verifyUsersUpdated(x.id);
});

bthread("Users nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUsers(a.id);
  block(matchAddUsers(a.id, ANY), function () {});
  addUsers(b.id);
});

bthread("Versions nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addVersions(x.id);
  for (var i=0; i<steps; i++) {
    updateVersions(x.id);
  }
  if (pick([true,false])) { deleteVersions(x.id); }
  verifyVersionsExists(x.id);
  verifyVersionsUpdated(x.id);
});

bthread("Versions nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addVersions(a.id);
  block(matchAddVersions(a.id, ANY), function () {});
  addVersions(b.id);
});

bthread("Webhooks nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addWebhooks(x.id);
  for (var i=0; i<steps; i++) {
    updateWebhooks(x.id);
  }
  if (pick([true,false])) { deleteWebhooks(x.id); }
  verifyWebhooksExists(x.id);
  verifyWebhooksUpdated(x.id);
});

bthread("Webhooks nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWebhooks(a.id);
  block(matchAddWebhooks(a.id, ANY), function () {});
  addWebhooks(b.id);
});

bthread("Xmetadata nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addXmetadata(x.id);
  for (var i=0; i<steps; i++) {
    updateXmetadata(x.id);
  }
  if (pick([true,false])) { deleteXmetadata(x.id); }
  verifyXmetadataExists(x.id);
  verifyXmetadataUpdated(x.id);
});

bthread("Xmetadata nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addXmetadata(a.id);
  block(matchAddXmetadata(a.id, ANY), function () {});
  addXmetadata(b.id);
});

// ===== PASSIVE ASSERTIONS =====

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

bthread("Collections create verification", function () {
  const e = waitForAnyCollectionsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCollections(k), function () {
    verifyCollectionsExists(k);
  });
});

bthread("Collections update verification", function () {
  const e = waitForAnyCollectionsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCollections(k), function () {
    verifyCollectionsUpdated(k);
  });
});

bthread("Collections delete verification", function () {
  const e = waitForAnyCollectionsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCollections(k), function () {
    verifyCollectionsDoesNotExist(k);
  });
});

bthread("Comments create verification", function () {
  const e = waitForAnyCommentsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComments(k), function () {
    verifyCommentsExists(k);
  });
});

bthread("Comments update verification", function () {
  const e = waitForAnyCommentsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComments(k), function () {
    verifyCommentsUpdated(k);
  });
});

bthread("Comments delete verification", function () {
  const e = waitForAnyCommentsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComments(k), function () {
    verifyCommentsDoesNotExist(k);
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

bthread("Extensions create verification", function () {
  const e = waitForAnyExtensionsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExtensions(k), function () {
    verifyExtensionsExists(k);
  });
});

bthread("Extensions update verification", function () {
  const e = waitForAnyExtensionsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExtensions(k), function () {
    verifyExtensionsUpdated(k);
  });
});

bthread("Extensions delete verification", function () {
  const e = waitForAnyExtensionsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExtensions(k), function () {
    verifyExtensionsDoesNotExist(k);
  });
});

bthread("Fields create verification", function () {
  const e = waitForAnyFieldsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFields(k), function () {
    verifyFieldsExists(k);
  });
});

bthread("Fields update verification", function () {
  const e = waitForAnyFieldsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFields(k), function () {
    verifyFieldsUpdated(k);
  });
});

bthread("Fields delete verification", function () {
  const e = waitForAnyFieldsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFields(k), function () {
    verifyFieldsDoesNotExist(k);
  });
});

bthread("Files create verification", function () {
  const e = waitForAnyFilesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFiles(k), function () {
    verifyFilesExists(k);
  });
});

bthread("Files update verification", function () {
  const e = waitForAnyFilesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFiles(k), function () {
    verifyFilesUpdated(k);
  });
});

bthread("Files delete verification", function () {
  const e = waitForAnyFilesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFiles(k), function () {
    verifyFilesDoesNotExist(k);
  });
});

bthread("Flows create verification", function () {
  const e = waitForAnyFlowsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFlows(k), function () {
    verifyFlowsExists(k);
  });
});

bthread("Flows update verification", function () {
  const e = waitForAnyFlowsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFlows(k), function () {
    verifyFlowsUpdated(k);
  });
});

bthread("Flows delete verification", function () {
  const e = waitForAnyFlowsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFlows(k), function () {
    verifyFlowsDoesNotExist(k);
  });
});

bthread("Folders create verification", function () {
  const e = waitForAnyFoldersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFolders(k), function () {
    verifyFoldersExists(k);
  });
});

bthread("Folders update verification", function () {
  const e = waitForAnyFoldersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFolders(k), function () {
    verifyFoldersUpdated(k);
  });
});

bthread("Folders delete verification", function () {
  const e = waitForAnyFoldersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFolders(k), function () {
    verifyFoldersDoesNotExist(k);
  });
});

bthread("Items create verification", function () {
  const e = waitForAnyItemsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteItems(k), function () {
    verifyItemsExists(k);
  });
});

bthread("Items update verification", function () {
  const e = waitForAnyItemsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteItems(k), function () {
    verifyItemsUpdated(k);
  });
});

bthread("Items delete verification", function () {
  const e = waitForAnyItemsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddItems(k), function () {
    verifyItemsDoesNotExist(k);
  });
});

bthread("Operations create verification", function () {
  const e = waitForAnyOperationsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOperations(k), function () {
    verifyOperationsExists(k);
  });
});

bthread("Operations update verification", function () {
  const e = waitForAnyOperationsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOperations(k), function () {
    verifyOperationsUpdated(k);
  });
});

bthread("Operations delete verification", function () {
  const e = waitForAnyOperationsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOperations(k), function () {
    verifyOperationsDoesNotExist(k);
  });
});

bthread("Permissions create verification", function () {
  const e = waitForAnyPermissionsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermissions(k), function () {
    verifyPermissionsExists(k);
  });
});

bthread("Permissions update verification", function () {
  const e = waitForAnyPermissionsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermissions(k), function () {
    verifyPermissionsUpdated(k);
  });
});

bthread("Permissions delete verification", function () {
  const e = waitForAnyPermissionsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPermissions(k), function () {
    verifyPermissionsDoesNotExist(k);
  });
});

bthread("Presets create verification", function () {
  const e = waitForAnyPresetsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePresets(k), function () {
    verifyPresetsExists(k);
  });
});

bthread("Presets update verification", function () {
  const e = waitForAnyPresetsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePresets(k), function () {
    verifyPresetsUpdated(k);
  });
});

bthread("Presets delete verification", function () {
  const e = waitForAnyPresetsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPresets(k), function () {
    verifyPresetsDoesNotExist(k);
  });
});

bthread("Query create verification", function () {
  const e = waitForAnyQueryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteQuery(k), function () {
    verifyQueryExists(k);
  });
});

bthread("Query update verification", function () {
  const e = waitForAnyQueryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteQuery(k), function () {
    verifyQueryUpdated(k);
  });
});

bthread("Query delete verification", function () {
  const e = waitForAnyQueryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddQuery(k), function () {
    verifyQueryDoesNotExist(k);
  });
});

bthread("Relations create verification", function () {
  const e = waitForAnyRelationsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRelations(k), function () {
    verifyRelationsExists(k);
  });
});

bthread("Relations update verification", function () {
  const e = waitForAnyRelationsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRelations(k), function () {
    verifyRelationsUpdated(k);
  });
});

bthread("Relations delete verification", function () {
  const e = waitForAnyRelationsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRelations(k), function () {
    verifyRelationsDoesNotExist(k);
  });
});

bthread("Revisions create verification", function () {
  const e = waitForAnyRevisionsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRevisions(k), function () {
    verifyRevisionsExists(k);
  });
});

bthread("Revisions update verification", function () {
  const e = waitForAnyRevisionsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRevisions(k), function () {
    verifyRevisionsUpdated(k);
  });
});

bthread("Revisions delete verification", function () {
  const e = waitForAnyRevisionsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRevisions(k), function () {
    verifyRevisionsDoesNotExist(k);
  });
});

bthread("Roles create verification", function () {
  const e = waitForAnyRolesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRoles(k), function () {
    verifyRolesExists(k);
  });
});

bthread("Roles update verification", function () {
  const e = waitForAnyRolesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRoles(k), function () {
    verifyRolesUpdated(k);
  });
});

bthread("Roles delete verification", function () {
  const e = waitForAnyRolesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRoles(k), function () {
    verifyRolesDoesNotExist(k);
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

bthread("Settings create verification", function () {
  const e = waitForAnySettingsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSettings(k), function () {
    verifySettingsExists(k);
  });
});

bthread("Settings update verification", function () {
  const e = waitForAnySettingsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSettings(k), function () {
    verifySettingsUpdated(k);
  });
});

bthread("Settings delete verification", function () {
  const e = waitForAnySettingsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSettings(k), function () {
    verifySettingsDoesNotExist(k);
  });
});

bthread("Users create verification", function () {
  const e = waitForAnyUsersAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsers(k), function () {
    verifyUsersExists(k);
  });
});

bthread("Users update verification", function () {
  const e = waitForAnyUsersUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsers(k), function () {
    verifyUsersUpdated(k);
  });
});

bthread("Users delete verification", function () {
  const e = waitForAnyUsersDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsers(k), function () {
    verifyUsersDoesNotExist(k);
  });
});

bthread("Versions create verification", function () {
  const e = waitForAnyVersionsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVersions(k), function () {
    verifyVersionsExists(k);
  });
});

bthread("Versions update verification", function () {
  const e = waitForAnyVersionsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVersions(k), function () {
    verifyVersionsUpdated(k);
  });
});

bthread("Versions delete verification", function () {
  const e = waitForAnyVersionsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVersions(k), function () {
    verifyVersionsDoesNotExist(k);
  });
});

bthread("Webhooks create verification", function () {
  const e = waitForAnyWebhooksAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooks(k), function () {
    verifyWebhooksExists(k);
  });
});

bthread("Webhooks update verification", function () {
  const e = waitForAnyWebhooksUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWebhooks(k), function () {
    verifyWebhooksUpdated(k);
  });
});

bthread("Webhooks delete verification", function () {
  const e = waitForAnyWebhooksDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWebhooks(k), function () {
    verifyWebhooksDoesNotExist(k);
  });
});

bthread("Xmetadata create verification", function () {
  const e = waitForAnyXmetadataAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteXmetadata(k), function () {
    verifyXmetadataExists(k);
  });
});

bthread("Xmetadata update verification", function () {
  const e = waitForAnyXmetadataUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteXmetadata(k), function () {
    verifyXmetadataUpdated(k);
  });
});

bthread("Xmetadata delete verification", function () {
  const e = waitForAnyXmetadataDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddXmetadata(k), function () {
    verifyXmetadataDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Activity", function () {
  const x = waitForAnyActivityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddActivity(k, ANY), function () {});
});

bthread("Guard: Unique Collections", function () {
  const x = waitForAnyCollectionsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCollections(k, ANY), function () {});
});

bthread("Guard: Unique Comments", function () {
  const x = waitForAnyCommentsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComments(k, ANY), function () {});
});

bthread("Guard: Unique Diff", function () {
  const x = waitForAnyDiffAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDiff(k, ANY), function () {});
});

bthread("Guard: Unique Extensions", function () {
  const x = waitForAnyExtensionsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExtensions(k, ANY), function () {});
});

bthread("Guard: Unique Fields", function () {
  const x = waitForAnyFieldsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFields(k, ANY), function () {});
});

bthread("Guard: Unique Files", function () {
  const x = waitForAnyFilesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFiles(k, ANY), function () {});
});

bthread("Guard: Unique Flows", function () {
  const x = waitForAnyFlowsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFlows(k, ANY), function () {});
});

bthread("Guard: Unique Folders", function () {
  const x = waitForAnyFoldersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFolders(k, ANY), function () {});
});

bthread("Guard: Unique Items", function () {
  const x = waitForAnyItemsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddItems(k, ANY), function () {});
});

bthread("Guard: Unique Operations", function () {
  const x = waitForAnyOperationsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOperations(k, ANY), function () {});
});

bthread("Guard: Unique Permissions", function () {
  const x = waitForAnyPermissionsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermissions(k, ANY), function () {});
});

bthread("Guard: Unique Presets", function () {
  const x = waitForAnyPresetsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPresets(k, ANY), function () {});
});

bthread("Guard: Unique Query", function () {
  const x = waitForAnyQueryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddQuery(k, ANY), function () {});
});

bthread("Guard: Unique Relations", function () {
  const x = waitForAnyRelationsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRelations(k, ANY), function () {});
});

bthread("Guard: Unique Revisions", function () {
  const x = waitForAnyRevisionsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRevisions(k, ANY), function () {});
});

bthread("Guard: Unique Roles", function () {
  const x = waitForAnyRolesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRoles(k, ANY), function () {});
});

bthread("Guard: Unique Schema", function () {
  const x = waitForAnySchemaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSchema(k, ANY), function () {});
});

bthread("Guard: Unique Settings", function () {
  const x = waitForAnySettingsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSettings(k, ANY), function () {});
});

bthread("Guard: Unique Users", function () {
  const x = waitForAnyUsersAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsers(k, ANY), function () {});
});

bthread("Guard: Unique Versions", function () {
  const x = waitForAnyVersionsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVersions(k, ANY), function () {});
});

bthread("Guard: Unique Webhooks", function () {
  const x = waitForAnyWebhooksAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWebhooks(k, ANY), function () {});
});

bthread("Guard: Unique Xmetadata", function () {
  const x = waitForAnyXmetadataAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddXmetadata(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
