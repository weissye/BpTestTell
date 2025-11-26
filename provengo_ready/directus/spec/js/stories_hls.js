// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Activity:read_only
bthread("crud:Activity:read_only", function () {
  let id = 200;
  // Read-only check for Activity
  verifyActivityExists(id);
});

// Story: crud:Assets:read_only
bthread("crud:Assets:read_only", function () {
  let id = 210;
  // Read-only check for Assets
  verifyAssetsExists(id);
});

// Story: crud:Authentication:read_only
bthread("crud:Authentication:read_only", function () {
  let email = "email_220";
  let password = "password_220";
  let mode = "mode_220";
  let otp = "otp_220";
  // Read-only check for Authentication
  verifyAuthenticationExists(email);
});

// Story: crud:Items:nondet:1:1
bthread("crud:Items:nondet:1:1", function () {
  let collection = "collection_230";
  addItem("collection_230");
  tryToAddExistingItems("collection_230");
  verifyItemsExists(collection);
  updateItem(collection, "collection_230");
  deleteItem(collection);
  tryToDeleteANonExistingItems(collection);
  verifyItemsDoesNotExist(collection);
});

// Story: crud:Items:nondet:1:2
bthread("crud:Items:nondet:1:2", function () {
  let collection = "collection_231";
  addItem("collection_231");
  tryToAddExistingItems("collection_231");
  updateItem(collection, "collection_231");
  verifyItemsExists(collection);
  deleteItem(collection);
  tryToDeleteANonExistingItems(collection);
  verifyItemsDoesNotExist(collection);
});

// Story: crud:Items:nondet:negative:dup-add
bthread("crud:Items:nondet:negative:dup-add", function () {
  let collection = "collection_236";
  addItem("collection_236");
  verifyItemsExists(collection);
  tryToAddExistingItems("collection_236");
  verifyItemsExists(collection);
});

// Story: crud:Items:nondet:existing:update
bthread("crud:Items:nondet:existing:update", function () {
  let ev = waitForAnyItemsAdded();
  let args = Object.values(ev);
  block(matchDeletedItems.apply(null, args), function () {
    // verifyItemsExists.apply(null, args);
    // updateItem.apply(null, args);
  });
});

// Story: monitor:Items:add
bthread("monitor:Items:add", function () {
  while (true) {
    let ev = waitForAnyItemsAdded();
    let args = Object.values(ev);
    block(matchDeletedItems.apply(null, args), function () {
      // verifyItemsExists.apply(null, args);
    });
  }
});

// Story: crud:Presets:nondet:1:1
bthread("crud:Presets:nondet:1:1", function () {
  let id = 240;
  addPreset(240);
  tryToAddExistingPresets(240);
  verifyPresetsExists(id);
  updatePreset(id, 240);
  deletePreset(id);
  tryToDeleteANonExistingPresets(id);
  verifyPresetsDoesNotExist(id);
});

// Story: crud:Presets:nondet:1:2
bthread("crud:Presets:nondet:1:2", function () {
  let id = 241;
  addPreset(241);
  tryToAddExistingPresets(241);
  updatePreset(id, 241);
  verifyPresetsExists(id);
  deletePreset(id);
  tryToDeleteANonExistingPresets(id);
  verifyPresetsDoesNotExist(id);
});

// Story: crud:Presets:nondet:negative:dup-add
bthread("crud:Presets:nondet:negative:dup-add", function () {
  let id = 246;
  addPreset(246);
  verifyPresetsExists(id);
  tryToAddExistingPresets(246);
  verifyPresetsExists(id);
});

// Story: crud:Presets:nondet:existing:update
bthread("crud:Presets:nondet:existing:update", function () {
  let ev = waitForAnyPresetsAdded();
  let args = Object.values(ev);
  block(matchDeletedPresets.apply(null, args), function () {
    // verifyPresetsExists.apply(null, args);
    // updatePreset.apply(null, args);
  });
});

// Story: monitor:Presets:add
bthread("monitor:Presets:add", function () {
  while (true) {
    let ev = waitForAnyPresetsAdded();
    let args = Object.values(ev);
    block(matchDeletedPresets.apply(null, args), function () {
      // verifyPresetsExists.apply(null, args);
    });
  }
});

// Story: crud:Collections:nondet:1:1
bthread("crud:Collections:nondet:1:1", function () {
  let id = 250;
  addCollection(250);
  tryToAddExistingCollections(250);
  verifyCollectionsExists(id);
  updateCollection(id, 250);
  deleteCollection(id);
  tryToDeleteANonExistingCollections(id);
  verifyCollectionsDoesNotExist(id);
});

// Story: crud:Collections:nondet:1:2
bthread("crud:Collections:nondet:1:2", function () {
  let id = 251;
  addCollection(251);
  tryToAddExistingCollections(251);
  updateCollection(id, 251);
  verifyCollectionsExists(id);
  deleteCollection(id);
  tryToDeleteANonExistingCollections(id);
  verifyCollectionsDoesNotExist(id);
});

// Story: crud:Collections:nondet:negative:dup-add
bthread("crud:Collections:nondet:negative:dup-add", function () {
  let id = 256;
  addCollection(256);
  verifyCollectionsExists(id);
  tryToAddExistingCollections(256);
  verifyCollectionsExists(id);
});

// Story: crud:Collections:nondet:existing:update
bthread("crud:Collections:nondet:existing:update", function () {
  let ev = waitForAnyCollectionsAdded();
  let args = Object.values(ev);
  block(matchDeletedCollections.apply(null, args), function () {
    // verifyCollectionsExists.apply(null, args);
    // updateCollection.apply(null, args);
  });
});

// Story: monitor:Collections:add
bthread("monitor:Collections:add", function () {
  while (true) {
    let ev = waitForAnyCollectionsAdded();
    let args = Object.values(ev);
    block(matchDeletedCollections.apply(null, args), function () {
      // verifyCollectionsExists.apply(null, args);
    });
  }
});

// Story: crud:Comments:nondet:1:1
bthread("crud:Comments:nondet:1:1", function () {
  let id = 260;
  addComment(260);
  tryToAddExistingComments(260);
  verifyCommentsExists(id);
  updateComment(id, 260);
  deleteComment(id);
  tryToDeleteANonExistingComments(id);
  verifyCommentsDoesNotExist(id);
});

// Story: crud:Comments:nondet:1:2
bthread("crud:Comments:nondet:1:2", function () {
  let id = 261;
  addComment(261);
  tryToAddExistingComments(261);
  updateComment(id, 261);
  verifyCommentsExists(id);
  deleteComment(id);
  tryToDeleteANonExistingComments(id);
  verifyCommentsDoesNotExist(id);
});

// Story: crud:Comments:nondet:negative:dup-add
bthread("crud:Comments:nondet:negative:dup-add", function () {
  let id = 266;
  addComment(266);
  verifyCommentsExists(id);
  tryToAddExistingComments(266);
  verifyCommentsExists(id);
});

// Story: crud:Comments:nondet:existing:update
bthread("crud:Comments:nondet:existing:update", function () {
  let ev = waitForAnyCommentsAdded();
  let args = Object.values(ev);
  block(matchDeletedComments.apply(null, args), function () {
    // verifyCommentsExists.apply(null, args);
    // updateComment.apply(null, args);
  });
});

// Story: monitor:Comments:add
bthread("monitor:Comments:add", function () {
  while (true) {
    let ev = waitForAnyCommentsAdded();
    let args = Object.values(ev);
    block(matchDeletedComments.apply(null, args), function () {
      // verifyCommentsExists.apply(null, args);
    });
  }
});

// Story: crud:Fields:nondet:1:1
bthread("crud:Fields:nondet:1:1", function () {
  let collection = "collection_280";
  addField("collection_280");
  tryToAddExistingFields("collection_280");
  verifyFieldsExists(collection);
  updateField(collection, "collection_280");
  deleteField(collection);
  tryToDeleteANonExistingFields(collection);
  verifyFieldsDoesNotExist(collection);
});

// Story: crud:Fields:nondet:1:2
bthread("crud:Fields:nondet:1:2", function () {
  let collection = "collection_281";
  addField("collection_281");
  tryToAddExistingFields("collection_281");
  updateField(collection, "collection_281");
  verifyFieldsExists(collection);
  deleteField(collection);
  tryToDeleteANonExistingFields(collection);
  verifyFieldsDoesNotExist(collection);
});

// Story: crud:Fields:nondet:negative:dup-add
bthread("crud:Fields:nondet:negative:dup-add", function () {
  let collection = "collection_286";
  addField("collection_286");
  verifyFieldsExists(collection);
  tryToAddExistingFields("collection_286");
  verifyFieldsExists(collection);
});

// Story: crud:Fields:nondet:existing:update
bthread("crud:Fields:nondet:existing:update", function () {
  let ev = waitForAnyFieldsAdded();
  let args = Object.values(ev);
  block(matchDeletedFields.apply(null, args), function () {
    // verifyFieldsExists.apply(null, args);
    // updateField.apply(null, args);
  });
});

// Story: monitor:Fields:add
bthread("monitor:Fields:add", function () {
  while (true) {
    let ev = waitForAnyFieldsAdded();
    let args = Object.values(ev);
    block(matchDeletedFields.apply(null, args), function () {
      // verifyFieldsExists.apply(null, args);
    });
  }
});

// Story: crud:Files:nondet:1:1
bthread("crud:Files:nondet:1:1", function () {
  let id = 290;
  addFile(290);
  tryToAddExistingFiles(290);
  verifyFilesExists(id);
  updateFile(id, 290);
  deleteFile(id);
  tryToDeleteANonExistingFiles(id);
  verifyFilesDoesNotExist(id);
});

// Story: crud:Files:nondet:1:2
bthread("crud:Files:nondet:1:2", function () {
  let id = 291;
  addFile(291);
  tryToAddExistingFiles(291);
  updateFile(id, 291);
  verifyFilesExists(id);
  deleteFile(id);
  tryToDeleteANonExistingFiles(id);
  verifyFilesDoesNotExist(id);
});

// Story: crud:Files:nondet:negative:dup-add
bthread("crud:Files:nondet:negative:dup-add", function () {
  let id = 296;
  addFile(296);
  verifyFilesExists(id);
  tryToAddExistingFiles(296);
  verifyFilesExists(id);
});

// Story: crud:Files:nondet:existing:update
bthread("crud:Files:nondet:existing:update", function () {
  let ev = waitForAnyFilesAdded();
  let args = Object.values(ev);
  block(matchDeletedFiles.apply(null, args), function () {
    // verifyFilesExists.apply(null, args);
    // updateFile.apply(null, args);
  });
});

// Story: monitor:Files:add
bthread("monitor:Files:add", function () {
  while (true) {
    let ev = waitForAnyFilesAdded();
    let args = Object.values(ev);
    block(matchDeletedFiles.apply(null, args), function () {
      // verifyFilesExists.apply(null, args);
    });
  }
});

// Story: crud:Flows:nondet:1:1
bthread("crud:Flows:nondet:1:1", function () {
  let id = 300;
  addFlow(300);
  tryToAddExistingFlows(300);
  verifyFlowsExists(id);
  updateFlow(id, 300);
  deleteFlow(id);
  tryToDeleteANonExistingFlows(id);
  verifyFlowsDoesNotExist(id);
});

// Story: crud:Flows:nondet:1:2
bthread("crud:Flows:nondet:1:2", function () {
  let id = 301;
  addFlow(301);
  tryToAddExistingFlows(301);
  updateFlow(id, 301);
  verifyFlowsExists(id);
  deleteFlow(id);
  tryToDeleteANonExistingFlows(id);
  verifyFlowsDoesNotExist(id);
});

// Story: crud:Flows:nondet:negative:dup-add
bthread("crud:Flows:nondet:negative:dup-add", function () {
  let id = 306;
  addFlow(306);
  verifyFlowsExists(id);
  tryToAddExistingFlows(306);
  verifyFlowsExists(id);
});

// Story: crud:Flows:nondet:existing:update
bthread("crud:Flows:nondet:existing:update", function () {
  let ev = waitForAnyFlowsAdded();
  let args = Object.values(ev);
  block(matchDeletedFlows.apply(null, args), function () {
    // verifyFlowsExists.apply(null, args);
    // updateFlow.apply(null, args);
  });
});

// Story: monitor:Flows:add
bthread("monitor:Flows:add", function () {
  while (true) {
    let ev = waitForAnyFlowsAdded();
    let args = Object.values(ev);
    block(matchDeletedFlows.apply(null, args), function () {
      // verifyFlowsExists.apply(null, args);
    });
  }
});

// Story: crud:Folders:nondet:1:1
bthread("crud:Folders:nondet:1:1", function () {
  let id = 310;
  addFolder(310);
  tryToAddExistingFolders(310);
  verifyFoldersExists(id);
  updateFolder(id, 310);
  deleteFolder(id);
  tryToDeleteANonExistingFolders(id);
  verifyFoldersDoesNotExist(id);
});

// Story: crud:Folders:nondet:1:2
bthread("crud:Folders:nondet:1:2", function () {
  let id = 311;
  addFolder(311);
  tryToAddExistingFolders(311);
  updateFolder(id, 311);
  verifyFoldersExists(id);
  deleteFolder(id);
  tryToDeleteANonExistingFolders(id);
  verifyFoldersDoesNotExist(id);
});

// Story: crud:Folders:nondet:negative:dup-add
bthread("crud:Folders:nondet:negative:dup-add", function () {
  let id = 316;
  addFolder(316);
  verifyFoldersExists(id);
  tryToAddExistingFolders(316);
  verifyFoldersExists(id);
});

// Story: crud:Folders:nondet:existing:update
bthread("crud:Folders:nondet:existing:update", function () {
  let ev = waitForAnyFoldersAdded();
  let args = Object.values(ev);
  block(matchDeletedFolders.apply(null, args), function () {
    // verifyFoldersExists.apply(null, args);
    // updateFolder.apply(null, args);
  });
});

// Story: monitor:Folders:add
bthread("monitor:Folders:add", function () {
  while (true) {
    let ev = waitForAnyFoldersAdded();
    let args = Object.values(ev);
    block(matchDeletedFolders.apply(null, args), function () {
      // verifyFoldersExists.apply(null, args);
    });
  }
});

// Story: crud:Operations:nondet:1:1
bthread("crud:Operations:nondet:1:1", function () {
  let id = 320;
  addOperation(320);
  tryToAddExistingOperations(320);
  verifyOperationsExists(id);
  updateOperation(id, 320);
  deleteOperation(id);
  tryToDeleteANonExistingOperations(id);
  verifyOperationsDoesNotExist(id);
});

// Story: crud:Operations:nondet:1:2
bthread("crud:Operations:nondet:1:2", function () {
  let id = 321;
  addOperation(321);
  tryToAddExistingOperations(321);
  updateOperation(id, 321);
  verifyOperationsExists(id);
  deleteOperation(id);
  tryToDeleteANonExistingOperations(id);
  verifyOperationsDoesNotExist(id);
});

// Story: crud:Operations:nondet:negative:dup-add
bthread("crud:Operations:nondet:negative:dup-add", function () {
  let id = 326;
  addOperation(326);
  verifyOperationsExists(id);
  tryToAddExistingOperations(326);
  verifyOperationsExists(id);
});

// Story: crud:Operations:nondet:existing:update
bthread("crud:Operations:nondet:existing:update", function () {
  let ev = waitForAnyOperationsAdded();
  let args = Object.values(ev);
  block(matchDeletedOperations.apply(null, args), function () {
    // verifyOperationsExists.apply(null, args);
    // updateOperation.apply(null, args);
  });
});

// Story: monitor:Operations:add
bthread("monitor:Operations:add", function () {
  while (true) {
    let ev = waitForAnyOperationsAdded();
    let args = Object.values(ev);
    block(matchDeletedOperations.apply(null, args), function () {
      // verifyOperationsExists.apply(null, args);
    });
  }
});

// Story: crud:Permissions:nondet:1:1
bthread("crud:Permissions:nondet:1:1", function () {
  let id = 330;
  addPermission(330);
  tryToAddExistingPermissions(330);
  verifyPermissionsExists(id);
  updatePermissions(id, 330);
  deletePermissions(id);
  tryToDeleteANonExistingPermissions(id);
  verifyPermissionsDoesNotExist(id);
});

// Story: crud:Permissions:nondet:1:2
bthread("crud:Permissions:nondet:1:2", function () {
  let id = 331;
  addPermission(331);
  tryToAddExistingPermissions(331);
  updatePermissions(id, 331);
  verifyPermissionsExists(id);
  deletePermissions(id);
  tryToDeleteANonExistingPermissions(id);
  verifyPermissionsDoesNotExist(id);
});

// Story: crud:Permissions:nondet:negative:dup-add
bthread("crud:Permissions:nondet:negative:dup-add", function () {
  let id = 336;
  addPermission(336);
  verifyPermissionsExists(id);
  tryToAddExistingPermissions(336);
  verifyPermissionsExists(id);
});

// Story: crud:Permissions:nondet:existing:update
bthread("crud:Permissions:nondet:existing:update", function () {
  let ev = waitForAnyPermissionsAdded();
  let args = Object.values(ev);
  block(matchDeletedPermissions.apply(null, args), function () {
    // verifyPermissionsExists.apply(null, args);
    // updatePermissions.apply(null, args);
  });
});

// Story: monitor:Permissions:add
bthread("monitor:Permissions:add", function () {
  while (true) {
    let ev = waitForAnyPermissionsAdded();
    let args = Object.values(ev);
    block(matchDeletedPermissions.apply(null, args), function () {
      // verifyPermissionsExists.apply(null, args);
    });
  }
});
