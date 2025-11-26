// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let id = 200;
  createUser(200);
  tryToAddExistingUser(200);
  verifyUserExists(200);
  updateUser(200);
  deleteUser(200);
  tryToDeleteANonExistingUser(200);
  verifyUserDoesNotExist(200);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let id = 201;
  createUser(201);
  tryToAddExistingUser(201);
  updateUser(201);
  verifyUserExists(201);
  deleteUser(201);
  tryToDeleteANonExistingUser(201);
  verifyUserDoesNotExist(201);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let id = 206;
  createUser(206);
  verifyUserExists(206);
  tryToAddExistingUser(206);
  verifyUserExists(206);
});

// Story: crud:User:nondet:existing:update
bthread("crud:User:nondet:existing:update", function () {
  let ev = waitForAnyUserAdded();
  let args = Object.values(ev);
  block(matchDeletedUser.apply(null, args), function () {
    verifyUserExists.apply(null, args);
    updateUser.apply(null, args);
    verifyUserExists.apply(null, args);
  });
});

// Story: monitor:User:add
bthread("monitor:User:add", function () {
  while (true) {
    let ev = waitForAnyUserAdded();
    let args = Object.values(ev);
    block(matchDeletedUser.apply(null, args), function () {
      verifyUserExists.apply(null, args);
    });
  }
});

// Story: crud:Auth:nondet:1:1
bthread("crud:Auth:nondet:1:1", function () {
  let email = "email_210";
  let password = "password_210";
  let mode = "mode_210";
  let otp = "otp_210";
  let refresh_token = "refresh_token_210";
  let token = "token_210";
  let provider = 210;
  let redirect = "redirect_210";
  login("email_210", "password_210", "mode_210", "otp_210", "refresh_token_210", "token_210", 210, "redirect_210");
  tryToAddExistingAuth("email_210", "password_210", "mode_210", "otp_210", "refresh_token_210", "token_210", 210, "redirect_210");
  verifyAuthExists("email_210", "password_210", "mode_210", "otp_210", "refresh_token_210", "token_210", 210, "redirect_210");
  refresh("email_210", "password_210", "mode_210", "otp_210", "refresh_token_210", "token_210", 210, "redirect_210");
  logout("email_210", "password_210", "mode_210", "otp_210", "refresh_token_210", "token_210", 210, "redirect_210");
  tryToDeleteANonExistingAuth("email_210", "password_210", "mode_210", "otp_210", "refresh_token_210", "token_210", 210, "redirect_210");
  verifyAuthDoesNotExist("email_210", "password_210", "mode_210", "otp_210", "refresh_token_210", "token_210", 210, "redirect_210");
});

// Story: crud:Auth:nondet:1:2
bthread("crud:Auth:nondet:1:2", function () {
  let email = "email_211";
  let password = "password_211";
  let mode = "mode_211";
  let otp = "otp_211";
  let refresh_token = "refresh_token_211";
  let token = "token_211";
  let provider = 211;
  let redirect = "redirect_211";
  login("email_211", "password_211", "mode_211", "otp_211", "refresh_token_211", "token_211", 211, "redirect_211");
  tryToAddExistingAuth("email_211", "password_211", "mode_211", "otp_211", "refresh_token_211", "token_211", 211, "redirect_211");
  refresh("email_211", "password_211", "mode_211", "otp_211", "refresh_token_211", "token_211", 211, "redirect_211");
  verifyAuthExists("email_211", "password_211", "mode_211", "otp_211", "refresh_token_211", "token_211", 211, "redirect_211");
  logout("email_211", "password_211", "mode_211", "otp_211", "refresh_token_211", "token_211", 211, "redirect_211");
  tryToDeleteANonExistingAuth("email_211", "password_211", "mode_211", "otp_211", "refresh_token_211", "token_211", 211, "redirect_211");
  verifyAuthDoesNotExist("email_211", "password_211", "mode_211", "otp_211", "refresh_token_211", "token_211", 211, "redirect_211");
});

// Story: crud:Auth:nondet:negative:dup-add
bthread("crud:Auth:nondet:negative:dup-add", function () {
  let email = "email_216";
  let password = "password_216";
  let mode = "mode_216";
  let otp = "otp_216";
  let refresh_token = "refresh_token_216";
  let token = "token_216";
  let provider = 216;
  let redirect = "redirect_216";
  login("email_216", "password_216", "mode_216", "otp_216", "refresh_token_216", "token_216", 216, "redirect_216");
  verifyAuthExists("email_216", "password_216", "mode_216", "otp_216", "refresh_token_216", "token_216", 216, "redirect_216");
  tryToAddExistingAuth("email_216", "password_216", "mode_216", "otp_216", "refresh_token_216", "token_216", 216, "redirect_216");
  verifyAuthExists("email_216", "password_216", "mode_216", "otp_216", "refresh_token_216", "token_216", 216, "redirect_216");
});

// Story: crud:Auth:nondet:existing:update
bthread("crud:Auth:nondet:existing:update", function () {
  let ev = waitForAnyAuthAdded();
  let args = Object.values(ev);
  block(matchDeletedAuth.apply(null, args), function () {
    verifyAuthExists.apply(null, args);
    refresh.apply(null, args);
    verifyAuthExists.apply(null, args);
  });
});

// Story: monitor:Auth:add
bthread("monitor:Auth:add", function () {
  while (true) {
    let ev = waitForAnyAuthAdded();
    let args = Object.values(ev);
    block(matchDeletedAuth.apply(null, args), function () {
      verifyAuthExists.apply(null, args);
    });
  }
});

// Story: crud:Hash:read_only
bthread("crud:Hash:read_only", function () {
  let string = "string_220";
  let hash = "hash_220";
  verifyHashExists("string_220", "hash_220");
});

// Story: crud:CollectionItems:read_only
bthread("crud:CollectionItems:read_only", function () {
  let collection = "collection_230";
  let item = "item_230";
  let to = "to_230";
  let format = "format_230";
  let query = "query_230";
  let file = "file_230";
  verifyCollectionItemsExists("collection_230", "item_230", "to_230", "format_230", "query_230", "file_230");
});

// Story: crud:RandomString:read_only
bthread("crud:RandomString:read_only", function () {
  let length = "length_250";
  verifyRandomStringExists("length_250");
});

// Story: crud:ContentVersion:nondet:1:1
bthread("crud:ContentVersion:nondet:1:1", function () {
  let id = 260;
  createContentVersion(260);
  tryToAddExistingContentVersion(260);
  verifyContentVersionExists(260);
  updateContentVersion(260);
  deleteContentVersion(260);
  tryToDeleteANonExistingContentVersion(260);
  verifyContentVersionDoesNotExist(260);
});

// Story: crud:ContentVersion:nondet:1:2
bthread("crud:ContentVersion:nondet:1:2", function () {
  let id = 261;
  createContentVersion(261);
  tryToAddExistingContentVersion(261);
  updateContentVersion(261);
  verifyContentVersionExists(261);
  deleteContentVersion(261);
  tryToDeleteANonExistingContentVersion(261);
  verifyContentVersionDoesNotExist(261);
});

// Story: crud:ContentVersion:nondet:negative:dup-add
bthread("crud:ContentVersion:nondet:negative:dup-add", function () {
  let id = 266;
  createContentVersion(266);
  verifyContentVersionExists(266);
  tryToAddExistingContentVersion(266);
  verifyContentVersionExists(266);
});

// Story: crud:ContentVersion:nondet:existing:update
bthread("crud:ContentVersion:nondet:existing:update", function () {
  let ev = waitForAnyContentVersionAdded();
  let args = Object.values(ev);
  block(matchDeletedContentVersion.apply(null, args), function () {
    verifyContentVersionExists.apply(null, args);
    updateContentVersion.apply(null, args);
    verifyContentVersionExists.apply(null, args);
  });
});

// Story: monitor:ContentVersion:add
bthread("monitor:ContentVersion:add", function () {
  while (true) {
    let ev = waitForAnyContentVersionAdded();
    let args = Object.values(ev);
    block(matchDeletedContentVersion.apply(null, args), function () {
      verifyContentVersionExists.apply(null, args);
    });
  }
});

// Story: crud:ContentVersionsBulk:nondet:1:1
bthread("crud:ContentVersionsBulk:nondet:1:1", function () {

  createContentVersion();
  tryToAddExistingContentVersionsBulk();
  verifyContentVersionsBulkExists();
  updateContentVersions();
  deleteContentVersions();
  tryToDeleteANonExistingContentVersionsBulk();
  verifyContentVersionsBulkDoesNotExist();
});

// Story: crud:ContentVersionsBulk:nondet:1:2
bthread("crud:ContentVersionsBulk:nondet:1:2", function () {

  createContentVersion();
  tryToAddExistingContentVersionsBulk();
  updateContentVersions();
  verifyContentVersionsBulkExists();
  deleteContentVersions();
  tryToDeleteANonExistingContentVersionsBulk();
  verifyContentVersionsBulkDoesNotExist();
});

// Story: crud:ContentVersionsBulk:nondet:negative:dup-add
bthread("crud:ContentVersionsBulk:nondet:negative:dup-add", function () {

  createContentVersion();
  verifyContentVersionsBulkExists();
  tryToAddExistingContentVersionsBulk();
  verifyContentVersionsBulkExists();
});

// Story: crud:ContentVersionsBulk:nondet:existing:update
bthread("crud:ContentVersionsBulk:nondet:existing:update", function () {
  let ev = waitForAnyContentVersionsBulkAdded();
  let args = Object.values(ev);
  block(matchDeletedContentVersionsBulk.apply(null, args), function () {
    verifyContentVersionsBulkExists.apply(null, args);
    updateContentVersions.apply(null, args);
    verifyContentVersionsBulkExists.apply(null, args);
  });
});

// Story: monitor:ContentVersionsBulk:add
bthread("monitor:ContentVersionsBulk:add", function () {
  while (true) {
    let ev = waitForAnyContentVersionsBulkAdded();
    let args = Object.values(ev);
    block(matchDeletedContentVersionsBulk.apply(null, args), function () {
      verifyContentVersionsBulkExists.apply(null, args);
    });
  }
});

// Story: crud:Extension:read_only
bthread("crud:Extension:read_only", function () {
  let name = "name_280";
  verifyExtensionExists("name_280");
});

// Story: crud:Field:nondet:1:1
bthread("crud:Field:nondet:1:1", function () {
  let collection = "collection_300";
  let field = "field_300";
  let id = 300;
  createField("collection_300", "field_300", 300);
  tryToAddExistingField("collection_300", "field_300", 300);
  verifyFieldExists("collection_300", "field_300", 300);
  updateField("collection_300", "field_300", 300);
  deleteField("collection_300", "field_300", 300);
  tryToDeleteANonExistingField("collection_300", "field_300", 300);
  verifyFieldDoesNotExist("collection_300", "field_300", 300);
});

// Story: crud:Field:nondet:1:2
bthread("crud:Field:nondet:1:2", function () {
  let collection = "collection_301";
  let field = "field_301";
  let id = 301;
  createField("collection_301", "field_301", 301);
  tryToAddExistingField("collection_301", "field_301", 301);
  updateField("collection_301", "field_301", 301);
  verifyFieldExists("collection_301", "field_301", 301);
  deleteField("collection_301", "field_301", 301);
  tryToDeleteANonExistingField("collection_301", "field_301", 301);
  verifyFieldDoesNotExist("collection_301", "field_301", 301);
});

// Story: crud:Field:nondet:negative:dup-add
bthread("crud:Field:nondet:negative:dup-add", function () {
  let collection = "collection_306";
  let field = "field_306";
  let id = 306;
  createField("collection_306", "field_306", 306);
  verifyFieldExists("collection_306", "field_306", 306);
  tryToAddExistingField("collection_306", "field_306", 306);
  verifyFieldExists("collection_306", "field_306", 306);
});

// Story: crud:Field:nondet:existing:update
bthread("crud:Field:nondet:existing:update", function () {
  let ev = waitForAnyFieldAdded();
  let args = Object.values(ev);
  block(matchDeletedField.apply(null, args), function () {
    verifyFieldExists.apply(null, args);
    updateField.apply(null, args);
    verifyFieldExists.apply(null, args);
  });
});

// Story: monitor:Field:add
bthread("monitor:Field:add", function () {
  while (true) {
    let ev = waitForAnyFieldAdded();
    let args = Object.values(ev);
    block(matchDeletedField.apply(null, args), function () {
      verifyFieldExists.apply(null, args);
    });
  }
});

// Story: crud:Permission:nondet:1:1
bthread("crud:Permission:nondet:1:1", function () {
  let collection = "collection_310";
  let role = "role_310";
  let id = 310;
  createPermission("collection_310", "role_310", 310);
  tryToAddExistingPermission("collection_310", "role_310", 310);
  verifyPermissionExists("collection_310", "role_310", 310);
  updatePermission("collection_310", "role_310", 310);
  deletePermission("collection_310", "role_310", 310);
  tryToDeleteANonExistingPermission("collection_310", "role_310", 310);
  verifyPermissionDoesNotExist("collection_310", "role_310", 310);
});

// Story: crud:Permission:nondet:1:2
bthread("crud:Permission:nondet:1:2", function () {
  let collection = "collection_311";
  let role = "role_311";
  let id = 311;
  createPermission("collection_311", "role_311", 311);
  tryToAddExistingPermission("collection_311", "role_311", 311);
  updatePermission("collection_311", "role_311", 311);
  verifyPermissionExists("collection_311", "role_311", 311);
  deletePermission("collection_311", "role_311", 311);
  tryToDeleteANonExistingPermission("collection_311", "role_311", 311);
  verifyPermissionDoesNotExist("collection_311", "role_311", 311);
});

// Story: crud:Permission:nondet:negative:dup-add
bthread("crud:Permission:nondet:negative:dup-add", function () {
  let collection = "collection_316";
  let role = "role_316";
  let id = 316;
  createPermission("collection_316", "role_316", 316);
  verifyPermissionExists("collection_316", "role_316", 316);
  tryToAddExistingPermission("collection_316", "role_316", 316);
  verifyPermissionExists("collection_316", "role_316", 316);
});

// Story: crud:Permission:nondet:existing:update
bthread("crud:Permission:nondet:existing:update", function () {
  let ev = waitForAnyPermissionAdded();
  let args = Object.values(ev);
  block(matchDeletedPermission.apply(null, args), function () {
    verifyPermissionExists.apply(null, args);
    updatePermission.apply(null, args);
    verifyPermissionExists.apply(null, args);
  });
});

// Story: monitor:Permission:add
bthread("monitor:Permission:add", function () {
  while (true) {
    let ev = waitForAnyPermissionAdded();
    let args = Object.values(ev);
    block(matchDeletedPermission.apply(null, args), function () {
      verifyPermissionExists.apply(null, args);
    });
  }
});

// Story: crud:Schema:read_only
bthread("crud:Schema:read_only", function () {
  let force = "force_320";
  verifySchemaExists("force_320");
});

// Story: crud:Activity:read_only
bthread("crud:Activity:read_only", function () {
  let id = 330;
  verifyActivityExists(330);
});

// Story: crud:Item:nondet:1:1
bthread("crud:Item:nondet:1:1", function () {
  let collection = "collection_340";
  let id = 340;
  createItem("collection_340", 340);
  tryToAddExistingItem("collection_340", 340);
  verifyItemExists("collection_340", 340);
  updateItem("collection_340", 340);
  deleteItem("collection_340", 340);
  tryToDeleteANonExistingItem("collection_340", 340);
  verifyItemDoesNotExist("collection_340", 340);
});

// Story: crud:Item:nondet:1:2
bthread("crud:Item:nondet:1:2", function () {
  let collection = "collection_341";
  let id = 341;
  createItem("collection_341", 341);
  tryToAddExistingItem("collection_341", 341);
  updateItem("collection_341", 341);
  verifyItemExists("collection_341", 341);
  deleteItem("collection_341", 341);
  tryToDeleteANonExistingItem("collection_341", 341);
  verifyItemDoesNotExist("collection_341", 341);
});

// Story: crud:Item:nondet:negative:dup-add
bthread("crud:Item:nondet:negative:dup-add", function () {
  let collection = "collection_346";
  let id = 346;
  createItem("collection_346", 346);
  verifyItemExists("collection_346", 346);
  tryToAddExistingItem("collection_346", 346);
  verifyItemExists("collection_346", 346);
});

// Story: crud:Item:nondet:existing:update
bthread("crud:Item:nondet:existing:update", function () {
  let ev = waitForAnyItemAdded();
  let args = Object.values(ev);
  block(matchDeletedItem.apply(null, args), function () {
    verifyItemExists.apply(null, args);
    updateItem.apply(null, args);
    verifyItemExists.apply(null, args);
  });
});

// Story: monitor:Item:add
bthread("monitor:Item:add", function () {
  while (true) {
    let ev = waitForAnyItemAdded();
    let args = Object.values(ev);
    block(matchDeletedItem.apply(null, args), function () {
      verifyItemExists.apply(null, args);
    });
  }
});

// Story: crud:Preset:nondet:1:1
bthread("crud:Preset:nondet:1:1", function () {
  let collection = "collection_350";
  let id = 350;
  createPreset("collection_350", 350);
  tryToAddExistingPreset("collection_350", 350);
  verifyPresetExists("collection_350", 350);
  updatePreset("collection_350", 350);
  deletePreset("collection_350", 350);
  tryToDeleteANonExistingPreset("collection_350", 350);
  verifyPresetDoesNotExist("collection_350", 350);
});

// Story: crud:Preset:nondet:1:2
bthread("crud:Preset:nondet:1:2", function () {
  let collection = "collection_351";
  let id = 351;
  createPreset("collection_351", 351);
  tryToAddExistingPreset("collection_351", 351);
  updatePreset("collection_351", 351);
  verifyPresetExists("collection_351", 351);
  deletePreset("collection_351", 351);
  tryToDeleteANonExistingPreset("collection_351", 351);
  verifyPresetDoesNotExist("collection_351", 351);
});

// Story: crud:Preset:nondet:negative:dup-add
bthread("crud:Preset:nondet:negative:dup-add", function () {
  let collection = "collection_356";
  let id = 356;
  createPreset("collection_356", 356);
  verifyPresetExists("collection_356", 356);
  tryToAddExistingPreset("collection_356", 356);
  verifyPresetExists("collection_356", 356);
});

// Story: crud:Preset:nondet:existing:update
bthread("crud:Preset:nondet:existing:update", function () {
  let ev = waitForAnyPresetAdded();
  let args = Object.values(ev);
  block(matchDeletedPreset.apply(null, args), function () {
    verifyPresetExists.apply(null, args);
    updatePreset.apply(null, args);
    verifyPresetExists.apply(null, args);
  });
});

// Story: monitor:Preset:add
bthread("monitor:Preset:add", function () {
  while (true) {
    let ev = waitForAnyPresetAdded();
    let args = Object.values(ev);
    block(matchDeletedPreset.apply(null, args), function () {
      verifyPresetExists.apply(null, args);
    });
  }
});

// Story: crud:Collection:nondet:1:1
bthread("crud:Collection:nondet:1:1", function () {
  let collection = "collection_360";
  let id = 360;
  createCollection("collection_360", 360);
  tryToAddExistingCollection("collection_360", 360);
  verifyCollectionExists("collection_360", 360);
  updateCollection("collection_360", 360);
  deleteCollection("collection_360", 360);
  tryToDeleteANonExistingCollection("collection_360", 360);
  verifyCollectionDoesNotExist("collection_360", 360);
});

// Story: crud:Collection:nondet:1:2
bthread("crud:Collection:nondet:1:2", function () {
  let collection = "collection_361";
  let id = 361;
  createCollection("collection_361", 361);
  tryToAddExistingCollection("collection_361", 361);
  updateCollection("collection_361", 361);
  verifyCollectionExists("collection_361", 361);
  deleteCollection("collection_361", 361);
  tryToDeleteANonExistingCollection("collection_361", 361);
  verifyCollectionDoesNotExist("collection_361", 361);
});

// Story: crud:Collection:nondet:negative:dup-add
bthread("crud:Collection:nondet:negative:dup-add", function () {
  let collection = "collection_366";
  let id = 366;
  createCollection("collection_366", 366);
  verifyCollectionExists("collection_366", 366);
  tryToAddExistingCollection("collection_366", 366);
  verifyCollectionExists("collection_366", 366);
});

// Story: crud:Collection:nondet:existing:update
bthread("crud:Collection:nondet:existing:update", function () {
  let ev = waitForAnyCollectionAdded();
  let args = Object.values(ev);
  block(matchDeletedCollection.apply(null, args), function () {
    verifyCollectionExists.apply(null, args);
    updateCollection.apply(null, args);
    verifyCollectionExists.apply(null, args);
  });
});

// Story: monitor:Collection:add
bthread("monitor:Collection:add", function () {
  while (true) {
    let ev = waitForAnyCollectionAdded();
    let args = Object.values(ev);
    block(matchDeletedCollection.apply(null, args), function () {
      verifyCollectionExists.apply(null, args);
    });
  }
});

// Story: crud:Comment:nondet:1:1
bthread("crud:Comment:nondet:1:1", function () {
  let collection = "collection_370";
  let item = "item_370";
  let comment = "comment_370";
  let id = 370;
  createComment("collection_370", "item_370", "comment_370", 370);
  tryToAddExistingComment("collection_370", "item_370", "comment_370", 370);
  verifyCommentExists("collection_370", "item_370", "comment_370", 370);
  updateComment("collection_370", "item_370", "comment_370", 370);
  deleteComment("collection_370", "item_370", "comment_370", 370);
  tryToDeleteANonExistingComment("collection_370", "item_370", "comment_370", 370);
  verifyCommentDoesNotExist("collection_370", "item_370", "comment_370", 370);
});

// Story: crud:Comment:nondet:1:2
bthread("crud:Comment:nondet:1:2", function () {
  let collection = "collection_371";
  let item = "item_371";
  let comment = "comment_371";
  let id = 371;
  createComment("collection_371", "item_371", "comment_371", 371);
  tryToAddExistingComment("collection_371", "item_371", "comment_371", 371);
  updateComment("collection_371", "item_371", "comment_371", 371);
  verifyCommentExists("collection_371", "item_371", "comment_371", 371);
  deleteComment("collection_371", "item_371", "comment_371", 371);
  tryToDeleteANonExistingComment("collection_371", "item_371", "comment_371", 371);
  verifyCommentDoesNotExist("collection_371", "item_371", "comment_371", 371);
});

// Story: crud:Comment:nondet:negative:dup-add
bthread("crud:Comment:nondet:negative:dup-add", function () {
  let collection = "collection_376";
  let item = "item_376";
  let comment = "comment_376";
  let id = 376;
  createComment("collection_376", "item_376", "comment_376", 376);
  verifyCommentExists("collection_376", "item_376", "comment_376", 376);
  tryToAddExistingComment("collection_376", "item_376", "comment_376", 376);
  verifyCommentExists("collection_376", "item_376", "comment_376", 376);
});

// Story: crud:Comment:nondet:existing:update
bthread("crud:Comment:nondet:existing:update", function () {
  let ev = waitForAnyCommentAdded();
  let args = Object.values(ev);
  block(matchDeletedComment.apply(null, args), function () {
    verifyCommentExists.apply(null, args);
    updateComment.apply(null, args);
    verifyCommentExists.apply(null, args);
  });
});

// Story: monitor:Comment:add
bthread("monitor:Comment:add", function () {
  while (true) {
    let ev = waitForAnyCommentAdded();
    let args = Object.values(ev);
    block(matchDeletedComment.apply(null, args), function () {
      verifyCommentExists.apply(null, args);
    });
  }
});

// Story: crud:CommentsBulk:read_only
bthread("crud:CommentsBulk:read_only", function () {
  let collection = "collection_380";
  let keys = "keys_380";
  let item = "item_380";
  let comment = "comment_380";
  verifyCommentsBulkExists("collection_380", "keys_380", "item_380", "comment_380");
});

// Story: crud:File:nondet:1:1
bthread("crud:File:nondet:1:1", function () {
  let id = 390;
  createFile(390);
  tryToAddExistingFile(390);
  verifyFileExists(390);
  updateFile(390);
  deleteFile(390);
  tryToDeleteANonExistingFile(390);
  verifyFileDoesNotExist(390);
});

// Story: crud:File:nondet:1:2
bthread("crud:File:nondet:1:2", function () {
  let id = 391;
  createFile(391);
  tryToAddExistingFile(391);
  updateFile(391);
  verifyFileExists(391);
  deleteFile(391);
  tryToDeleteANonExistingFile(391);
  verifyFileDoesNotExist(391);
});

// Story: crud:File:nondet:negative:dup-add
bthread("crud:File:nondet:negative:dup-add", function () {
  let id = 396;
  createFile(396);
  verifyFileExists(396);
  tryToAddExistingFile(396);
  verifyFileExists(396);
});

// Story: crud:File:nondet:existing:update
bthread("crud:File:nondet:existing:update", function () {
  let ev = waitForAnyFileAdded();
  let args = Object.values(ev);
  block(matchDeletedFile.apply(null, args), function () {
    verifyFileExists.apply(null, args);
    updateFile.apply(null, args);
    verifyFileExists.apply(null, args);
  });
});

// Story: monitor:File:add
bthread("monitor:File:add", function () {
  while (true) {
    let ev = waitForAnyFileAdded();
    let args = Object.values(ev);
    block(matchDeletedFile.apply(null, args), function () {
      verifyFileExists.apply(null, args);
    });
  }
});

// Story: crud:Files:read_only
bthread("crud:Files:read_only", function () {

  verifyFilesExists();
});

// Story: crud:Flow:nondet:1:1
bthread("crud:Flow:nondet:1:1", function () {
  let id = 410;
  createFlow(410);
  tryToAddExistingFlow(410);
  verifyFlowExists(410);
  updateFlow(410);
  deleteFlow(410);
  tryToDeleteANonExistingFlow(410);
  verifyFlowDoesNotExist(410);
});

// Story: crud:Flow:nondet:1:2
bthread("crud:Flow:nondet:1:2", function () {
  let id = 411;
  createFlow(411);
  tryToAddExistingFlow(411);
  updateFlow(411);
  verifyFlowExists(411);
  deleteFlow(411);
  tryToDeleteANonExistingFlow(411);
  verifyFlowDoesNotExist(411);
});

// Story: crud:Flow:nondet:negative:dup-add
bthread("crud:Flow:nondet:negative:dup-add", function () {
  let id = 416;
  createFlow(416);
  verifyFlowExists(416);
  tryToAddExistingFlow(416);
  verifyFlowExists(416);
});

// Story: crud:Flow:nondet:existing:update
bthread("crud:Flow:nondet:existing:update", function () {
  let ev = waitForAnyFlowAdded();
  let args = Object.values(ev);
  block(matchDeletedFlow.apply(null, args), function () {
    verifyFlowExists.apply(null, args);
    updateFlow.apply(null, args);
    verifyFlowExists.apply(null, args);
  });
});

// Story: monitor:Flow:add
bthread("monitor:Flow:add", function () {
  while (true) {
    let ev = waitForAnyFlowAdded();
    let args = Object.values(ev);
    block(matchDeletedFlow.apply(null, args), function () {
      verifyFlowExists.apply(null, args);
    });
  }
});

// Story: crud:FlowsBulk:read_only
bthread("crud:FlowsBulk:read_only", function () {

  verifyFlowsBulkExists();
});

// Story: crud:Folder:nondet:1:1
bthread("crud:Folder:nondet:1:1", function () {
  let name = "name_430";
  let parent = "parent_430";
  let id = 430;
  createFolder("name_430", "parent_430", 430);
  tryToAddExistingFolder("name_430", "parent_430", 430);
  verifyFolderExists("name_430", "parent_430", 430);
  updateFolder("name_430", "parent_430", 430);
  deleteFolder("name_430", "parent_430", 430);
  tryToDeleteANonExistingFolder("name_430", "parent_430", 430);
  verifyFolderDoesNotExist("name_430", "parent_430", 430);
});

// Story: crud:Folder:nondet:1:2
bthread("crud:Folder:nondet:1:2", function () {
  let name = "name_431";
  let parent = "parent_431";
  let id = 431;
  createFolder("name_431", "parent_431", 431);
  tryToAddExistingFolder("name_431", "parent_431", 431);
  updateFolder("name_431", "parent_431", 431);
  verifyFolderExists("name_431", "parent_431", 431);
  deleteFolder("name_431", "parent_431", 431);
  tryToDeleteANonExistingFolder("name_431", "parent_431", 431);
  verifyFolderDoesNotExist("name_431", "parent_431", 431);
});

// Story: crud:Folder:nondet:negative:dup-add
bthread("crud:Folder:nondet:negative:dup-add", function () {
  let name = "name_436";
  let parent = "parent_436";
  let id = 436;
  createFolder("name_436", "parent_436", 436);
  verifyFolderExists("name_436", "parent_436", 436);
  tryToAddExistingFolder("name_436", "parent_436", 436);
  verifyFolderExists("name_436", "parent_436", 436);
});

// Story: crud:Folder:nondet:existing:update
bthread("crud:Folder:nondet:existing:update", function () {
  let ev = waitForAnyFolderAdded();
  let args = Object.values(ev);
  block(matchDeletedFolder.apply(null, args), function () {
    verifyFolderExists.apply(null, args);
    updateFolder.apply(null, args);
    verifyFolderExists.apply(null, args);
  });
});

// Story: monitor:Folder:add
bthread("monitor:Folder:add", function () {
  while (true) {
    let ev = waitForAnyFolderAdded();
    let args = Object.values(ev);
    block(matchDeletedFolder.apply(null, args), function () {
      verifyFolderExists.apply(null, args);
    });
  }
});

// Story: crud:Operation:nondet:1:1
bthread("crud:Operation:nondet:1:1", function () {
  let id = 440;
  createOperation(440);
  tryToAddExistingOperation(440);
  verifyOperationExists(440);
  updateOperation(440);
  deleteOperation(440);
  tryToDeleteANonExistingOperation(440);
  verifyOperationDoesNotExist(440);
});

// Story: crud:Operation:nondet:1:2
bthread("crud:Operation:nondet:1:2", function () {
  let id = 441;
  createOperation(441);
  tryToAddExistingOperation(441);
  updateOperation(441);
  verifyOperationExists(441);
  deleteOperation(441);
  tryToDeleteANonExistingOperation(441);
  verifyOperationDoesNotExist(441);
});

// Story: crud:Operation:nondet:negative:dup-add
bthread("crud:Operation:nondet:negative:dup-add", function () {
  let id = 446;
  createOperation(446);
  verifyOperationExists(446);
  tryToAddExistingOperation(446);
  verifyOperationExists(446);
});

// Story: crud:Operation:nondet:existing:update
bthread("crud:Operation:nondet:existing:update", function () {
  let ev = waitForAnyOperationAdded();
  let args = Object.values(ev);
  block(matchDeletedOperation.apply(null, args), function () {
    verifyOperationExists.apply(null, args);
    updateOperation.apply(null, args);
    verifyOperationExists.apply(null, args);
  });
});

// Story: monitor:Operation:add
bthread("monitor:Operation:add", function () {
  while (true) {
    let ev = waitForAnyOperationAdded();
    let args = Object.values(ev);
    block(matchDeletedOperation.apply(null, args), function () {
      verifyOperationExists.apply(null, args);
    });
  }
});

// Story: crud:Relation:nondet:1:1
bthread("crud:Relation:nondet:1:1", function () {
  let collection_many = "collection_many_450";
  let collection_one = "collection_one_450";
  let field_many = "field_many_450";
  let field_one = "field_one_450";
  let junction_field = "junction_field_450";
  let id = 450;
  createRelation("collection_many_450", "collection_one_450", "field_many_450", "field_one_450", "junction_field_450", 450);
  tryToAddExistingRelation("collection_many_450", "collection_one_450", "field_many_450", "field_one_450", "junction_field_450", 450);
  verifyRelationExists("collection_many_450", "collection_one_450", "field_many_450", "field_one_450", "junction_field_450", 450);
  updateRelation("collection_many_450", "collection_one_450", "field_many_450", "field_one_450", "junction_field_450", 450);
  deleteRelation("collection_many_450", "collection_one_450", "field_many_450", "field_one_450", "junction_field_450", 450);
  tryToDeleteANonExistingRelation("collection_many_450", "collection_one_450", "field_many_450", "field_one_450", "junction_field_450", 450);
  verifyRelationDoesNotExist("collection_many_450", "collection_one_450", "field_many_450", "field_one_450", "junction_field_450", 450);
});

// Story: crud:Relation:nondet:1:2
bthread("crud:Relation:nondet:1:2", function () {
  let collection_many = "collection_many_451";
  let collection_one = "collection_one_451";
  let field_many = "field_many_451";
  let field_one = "field_one_451";
  let junction_field = "junction_field_451";
  let id = 451;
  createRelation("collection_many_451", "collection_one_451", "field_many_451", "field_one_451", "junction_field_451", 451);
  tryToAddExistingRelation("collection_many_451", "collection_one_451", "field_many_451", "field_one_451", "junction_field_451", 451);
  updateRelation("collection_many_451", "collection_one_451", "field_many_451", "field_one_451", "junction_field_451", 451);
  verifyRelationExists("collection_many_451", "collection_one_451", "field_many_451", "field_one_451", "junction_field_451", 451);
  deleteRelation("collection_many_451", "collection_one_451", "field_many_451", "field_one_451", "junction_field_451", 451);
  tryToDeleteANonExistingRelation("collection_many_451", "collection_one_451", "field_many_451", "field_one_451", "junction_field_451", 451);
  verifyRelationDoesNotExist("collection_many_451", "collection_one_451", "field_many_451", "field_one_451", "junction_field_451", 451);
});

// Story: crud:Relation:nondet:negative:dup-add
bthread("crud:Relation:nondet:negative:dup-add", function () {
  let collection_many = "collection_many_456";
  let collection_one = "collection_one_456";
  let field_many = "field_many_456";
  let field_one = "field_one_456";
  let junction_field = "junction_field_456";
  let id = 456;
  createRelation("collection_many_456", "collection_one_456", "field_many_456", "field_one_456", "junction_field_456", 456);
  verifyRelationExists("collection_many_456", "collection_one_456", "field_many_456", "field_one_456", "junction_field_456", 456);
  tryToAddExistingRelation("collection_many_456", "collection_one_456", "field_many_456", "field_one_456", "junction_field_456", 456);
  verifyRelationExists("collection_many_456", "collection_one_456", "field_many_456", "field_one_456", "junction_field_456", 456);
});

// Story: crud:Relation:nondet:existing:update
bthread("crud:Relation:nondet:existing:update", function () {
  let ev = waitForAnyRelationAdded();
  let args = Object.values(ev);
  block(matchDeletedRelation.apply(null, args), function () {
    verifyRelationExists.apply(null, args);
    updateRelation.apply(null, args);
    verifyRelationExists.apply(null, args);
  });
});

// Story: monitor:Relation:add
bthread("monitor:Relation:add", function () {
  while (true) {
    let ev = waitForAnyRelationAdded();
    let args = Object.values(ev);
    block(matchDeletedRelation.apply(null, args), function () {
      verifyRelationExists.apply(null, args);
    });
  }
});

// Story: crud:Revision:read_only
bthread("crud:Revision:read_only", function () {
  let id = 460;
  verifyRevisionExists(460);
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let name = "name_470";
  let id = 470;
  createRole("name_470", 470);
  tryToAddExistingRole("name_470", 470);
  verifyRoleExists("name_470", 470);
  updateRole("name_470", 470);
  deleteRole("name_470", 470);
  tryToDeleteANonExistingRole("name_470", 470);
  verifyRoleDoesNotExist("name_470", 470);
});

// Story: crud:Role:nondet:1:2
bthread("crud:Role:nondet:1:2", function () {
  let name = "name_471";
  let id = 471;
  createRole("name_471", 471);
  tryToAddExistingRole("name_471", 471);
  updateRole("name_471", 471);
  verifyRoleExists("name_471", 471);
  deleteRole("name_471", 471);
  tryToDeleteANonExistingRole("name_471", 471);
  verifyRoleDoesNotExist("name_471", 471);
});

// Story: crud:Role:nondet:negative:dup-add
bthread("crud:Role:nondet:negative:dup-add", function () {
  let name = "name_476";
  let id = 476;
  createRole("name_476", 476);
  verifyRoleExists("name_476", 476);
  tryToAddExistingRole("name_476", 476);
  verifyRoleExists("name_476", 476);
});

// Story: crud:Role:nondet:existing:update
bthread("crud:Role:nondet:existing:update", function () {
  let ev = waitForAnyRoleAdded();
  let args = Object.values(ev);
  block(matchDeletedRole.apply(null, args), function () {
    verifyRoleExists.apply(null, args);
    updateRole.apply(null, args);
    verifyRoleExists.apply(null, args);
  });
});

// Story: monitor:Role:add
bthread("monitor:Role:add", function () {
  while (true) {
    let ev = waitForAnyRoleAdded();
    let args = Object.values(ev);
    block(matchDeletedRole.apply(null, args), function () {
      verifyRoleExists.apply(null, args);
    });
  }
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let name = "name_480";
  let id = 480;
  createWebhook("name_480", 480);
  tryToAddExistingWebhook("name_480", 480);
  verifyWebhookExists("name_480", 480);
  updateWebhook("name_480", 480);
  deleteWebhook("name_480", 480);
  tryToDeleteANonExistingWebhook("name_480", 480);
  verifyWebhookDoesNotExist("name_480", 480);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let name = "name_481";
  let id = 481;
  createWebhook("name_481", 481);
  tryToAddExistingWebhook("name_481", 481);
  updateWebhook("name_481", 481);
  verifyWebhookExists("name_481", 481);
  deleteWebhook("name_481", 481);
  tryToDeleteANonExistingWebhook("name_481", 481);
  verifyWebhookDoesNotExist("name_481", 481);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let name = "name_486";
  let id = 486;
  createWebhook("name_486", 486);
  verifyWebhookExists("name_486", 486);
  tryToAddExistingWebhook("name_486", 486);
  verifyWebhookExists("name_486", 486);
});

// Story: crud:Webhook:nondet:existing:update
bthread("crud:Webhook:nondet:existing:update", function () {
  let ev = waitForAnyWebhookAdded();
  let args = Object.values(ev);
  block(matchDeletedWebhook.apply(null, args), function () {
    verifyWebhookExists.apply(null, args);
    updateWebhook.apply(null, args);
    verifyWebhookExists.apply(null, args);
  });
});

// Story: monitor:Webhook:add
bthread("monitor:Webhook:add", function () {
  while (true) {
    let ev = waitForAnyWebhookAdded();
    let args = Object.values(ev);
    block(matchDeletedWebhook.apply(null, args), function () {
      verifyWebhookExists.apply(null, args);
    });
  }
});

// Story: crud:Asset:read_only
bthread("crud:Asset:read_only", function () {
  let id = 490;
  verifyAssetExists(490);
});

// Story: crud:Setting:read_only
bthread("crud:Setting:read_only", function () {

  verifySettingExists();
});
