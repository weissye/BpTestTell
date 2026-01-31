// Auto-generated EVIL BACKGROUND AGENTS for directus
//@provengo summon rest

bthread("fuzz:fields:Authentication", function() {
  while(true) {
    let e = waitFor(matchAnyAuthenticationAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Authentication";
      let password_neg_Authentication = "password_malformed_neg_Authentication";
      let provider_neg_Authentication = "provider_malformed_neg_Authentication";
      let redirect_neg_Authentication = "redirect_malformed_neg_Authentication";
      let token_neg_Authentication = "token_malformed_neg_Authentication";
    verifyAuthenticationRejects(password_neg_Authentication, provider_neg_Authentication, redirect_neg_Authentication, token_neg_Authentication, { description: neg_desc });
  } });

bthread("evil:collision:Authentication", function() {
  while (true) {
    let e = waitFor(matchAnyAuthenticationAdded());
    let liveId = e.data.provider || e.data.id;
    tryToAddExistingAuthentication("password_collision", liveId, "redirect_collision", "token_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Collections:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyCollectionsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createCollection:Success:" + id), waitFor: matchAnyCollectionsDeleted() });
  } });
bthread("fuzz:fields:Collections", function() {
  while(true) {
    let e = waitFor(matchAnyCollectionsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Collections";
      let Meta_neg_Collections = "Meta_malformed_neg_Collections";
      let Offset_neg_Collections = "Offset_malformed_neg_Collections";
      let archive_app_filter_neg_Collections = "archive_app_filter_malformed_neg_Collections";
      let archive_field_neg_Collections = "archive_field_malformed_neg_Collections";
      let archive_value_neg_Collections = "archive_value_malformed_neg_Collections";
      let collection_neg_Collections = "collection_malformed_neg_Collections";
      let display_template_neg_Collections = "display_template_malformed_neg_Collections";
      let fields_neg_Collections = "fields_malformed_neg_Collections";
      let hidden_neg_Collections = "hidden_malformed_neg_Collections";
      let icon_neg_Collections = "icon_malformed_neg_Collections";
      let id_neg_Collections = "id_malformed_neg_Collections";
      let meta_neg_Collections = "meta_malformed_neg_Collections";
      let note_neg_Collections = "note_malformed_neg_Collections";
      let singleton_neg_Collections = "singleton_malformed_neg_Collections";
      let sort_field_neg_Collections = "sort_field_malformed_neg_Collections";
      let translation_neg_Collections = "translation_malformed_neg_Collections";
      let unarchive_value_neg_Collections = "unarchive_value_malformed_neg_Collections";
      let versioning_neg_Collections = "versioning_malformed_neg_Collections";
    verifyCollectionsRejects(Meta_neg_Collections, Offset_neg_Collections, archive_app_filter_neg_Collections, archive_field_neg_Collections, archive_value_neg_Collections, collection_neg_Collections, display_template_neg_Collections, fields_neg_Collections, hidden_neg_Collections, icon_neg_Collections, id_neg_Collections, meta_neg_Collections, note_neg_Collections, singleton_neg_Collections, sort_field_neg_Collections, translation_neg_Collections, unarchive_value_neg_Collections, versioning_neg_Collections, { description: neg_desc });
  } });

bthread("evil:collision:Collections", function() {
  while (true) {
    let e = waitFor(matchAnyCollectionsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingCollections("Meta_collision", "Offset_collision", "archive_app_filter_collision", "archive_field_collision", "archive_value_collision", "collection_collision", "display_template_collision", "fields_collision", "hidden_collision", "icon_collision", liveId, "meta_collision", "note_collision", "singleton_collision", "sort_field_collision", "translation_collision", "unarchive_value_collision", "versioning_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Items:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyItemsAdded()); let id = e.data.collection || e.data.id;
    bp.sync({ block: bp.Event("Req:createItem:Success:" + id), waitFor: matchAnyItemsDeleted() });
  } });
bthread("fuzz:fields:Items", function() {
  while(true) {
    let e = waitFor(matchAnyItemsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Items";
      let Collection_neg_Items = "Collection_malformed_neg_Items";
      let Fields_neg_Items = "Fields_malformed_neg_Items";
      let Filter_neg_Items = "Filter_malformed_neg_Items";
      let Limit_neg_Items = "Limit_malformed_neg_Items";
      let Meta_neg_Items = "Meta_malformed_neg_Items";
      let Offset_neg_Items = "Offset_malformed_neg_Items";
      let Search_neg_Items = "Search_malformed_neg_Items";
      let Sort_neg_Items = "Sort_malformed_neg_Items";
      let collection_neg_Items = "collection_malformed_neg_Items";
    verifyItemsRejects(Collection_neg_Items, Fields_neg_Items, Filter_neg_Items, Limit_neg_Items, Meta_neg_Items, Offset_neg_Items, Search_neg_Items, Sort_neg_Items, collection_neg_Items, { description: neg_desc });
  } });

bthread("evil:collision:Items", function() {
  while (true) {
    let e = waitFor(matchAnyItemsAdded());
    let liveId = e.data.collection || e.data.id;
    tryToAddExistingItems("Collection_collision", "Fields_collision", "Filter_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Search_collision", "Sort_collision", liveId, { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Presets:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyPresetsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createPreset:Success:" + id), waitFor: matchAnyPresetsDeleted() });
  } });
bthread("fuzz:fields:Presets", function() {
  while(true) {
    let e = waitFor(matchAnyPresetsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Presets";
      let Fields_neg_Presets = "Fields_malformed_neg_Presets";
      let Filter_neg_Presets = "Filter_malformed_neg_Presets";
      let Id_neg_Presets = "Id_malformed_neg_Presets";
      let Limit_neg_Presets = "Limit_malformed_neg_Presets";
      let Meta_neg_Presets = "Meta_malformed_neg_Presets";
      let Offset_neg_Presets = "Offset_malformed_neg_Presets";
      let Page_neg_Presets = "Page_malformed_neg_Presets";
      let Search_neg_Presets = "Search_malformed_neg_Presets";
      let Sort_neg_Presets = "Sort_malformed_neg_Presets";
      let collection_neg_Presets = "collection_malformed_neg_Presets";
      let filters_neg_Presets = "filters_malformed_neg_Presets";
      let id_neg_Presets = "id_malformed_neg_Presets";
      let layout_neg_Presets = "layout_malformed_neg_Presets";
      let layout_options_neg_Presets = "layout_options_malformed_neg_Presets";
      let layout_query_neg_Presets = "layout_query_malformed_neg_Presets";
      let role_neg_Presets = "role_malformed_neg_Presets";
      let search_neg_Presets = "search_malformed_neg_Presets";
      let search_query_neg_Presets = "search_query_malformed_neg_Presets";
      let title_neg_Presets = "title_malformed_neg_Presets";
      let translation_neg_Presets = "translation_malformed_neg_Presets";
      let view_options_neg_Presets = "view_options_malformed_neg_Presets";
      let view_query_neg_Presets = "view_query_malformed_neg_Presets";
      let view_type_neg_Presets = "view_type_malformed_neg_Presets";
    verifyPresetsRejects(Fields_neg_Presets, Filter_neg_Presets, Id_neg_Presets, Limit_neg_Presets, Meta_neg_Presets, Offset_neg_Presets, Page_neg_Presets, Search_neg_Presets, Sort_neg_Presets, collection_neg_Presets, filters_neg_Presets, id_neg_Presets, layout_neg_Presets, layout_options_neg_Presets, layout_query_neg_Presets, role_neg_Presets, search_neg_Presets, search_query_neg_Presets, title_neg_Presets, translation_neg_Presets, view_options_neg_Presets, view_query_neg_Presets, view_type_neg_Presets, { description: neg_desc });
  } });

bthread("evil:collision:Presets", function() {
  while (true) {
    let e = waitFor(matchAnyPresetsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingPresets("Fields_collision", "Filter_collision", "Id_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Page_collision", "Search_collision", "Sort_collision", "collection_collision", "filters_collision", liveId, "layout_collision", "layout_options_collision", "layout_query_collision", "role_collision", "search_collision", "search_query_collision", "title_collision", "translation_collision", "view_options_collision", "view_query_collision", "view_type_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Comments:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyCommentsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createComment:Success:" + id), waitFor: matchAnyCommentsDeleted() });
  } });
bthread("fuzz:fields:Comments", function() {
  while(true) {
    let e = waitFor(matchAnyCommentsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Comments";
      let collection_neg_Comments = "collection_malformed_neg_Comments";
      let comment_neg_Comments = "comment_malformed_neg_Comments";
      let id_neg_Comments = "id_malformed_neg_Comments";
      let item_neg_Comments = "item_malformed_neg_Comments";
    verifyCommentsRejects(collection_neg_Comments, comment_neg_Comments, id_neg_Comments, item_neg_Comments, { description: neg_desc });
  } });

bthread("evil:collision:Comments", function() {
  while (true) {
    let e = waitFor(matchAnyCommentsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingComments("collection_collision", "comment_collision", liveId, "item_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Fields:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyFieldsAdded()); let id = e.data.collection || e.data.id;
    bp.sync({ block: bp.Event("Req:createField:Success:" + id), waitFor: matchAnyFieldsDeleted() });
  } });
bthread("fuzz:fields:Fields", function() {
  while(true) {
    let e = waitFor(matchAnyFieldsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Fields";
      let Sort_neg_Fields = "Sort_malformed_neg_Fields";
      let collection_neg_Fields = "collection_malformed_neg_Fields";
      let datatype_neg_Fields = "datatype_malformed_neg_Fields";
      let field_neg_Fields = "field_malformed_neg_Fields";
      let id_neg_Fields = "id_malformed_neg_Fields";
      let length_neg_Fields = "length_malformed_neg_Fields";
      let meta_neg_Fields = "meta_malformed_neg_Fields";
      let schema_neg_Fields = "schema_malformed_neg_Fields";
      let type_neg_Fields = "type_malformed_neg_Fields";
    verifyFieldsRejects(Sort_neg_Fields, collection_neg_Fields, datatype_neg_Fields, field_neg_Fields, id_neg_Fields, length_neg_Fields, meta_neg_Fields, schema_neg_Fields, type_neg_Fields, { description: neg_desc });
  } });

bthread("evil:collision:Fields", function() {
  while (true) {
    let e = waitFor(matchAnyFieldsAdded());
    let liveId = e.data.collection || e.data.id;
    tryToAddExistingFields("Sort_collision", liveId, "datatype_collision", "field_collision", "id_collision", "length_collision", "meta_collision", "schema_collision", "type_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Files:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyFilesAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createFile:Success:" + id), waitFor: matchAnyFilesDeleted() });
  } });
bthread("fuzz:fields:Files", function() {
  while(true) {
    let e = waitFor(matchAnyFilesAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Files";
      let Fields_neg_Files = "Fields_malformed_neg_Files";
      let Filter_neg_Files = "Filter_malformed_neg_Files";
      let Limit_neg_Files = "Limit_malformed_neg_Files";
      let Meta_neg_Files = "Meta_malformed_neg_Files";
      let Offset_neg_Files = "Offset_malformed_neg_Files";
      let Search_neg_Files = "Search_malformed_neg_Files";
      let Sort_neg_Files = "Sort_malformed_neg_Files";
      let data_neg_Files = "data_malformed_neg_Files";
      let description_neg_Files = "description_malformed_neg_Files";
      let filename_download_neg_Files = "filename_download_malformed_neg_Files";
      let folder_neg_Files = "folder_malformed_neg_Files";
      let id_neg_Files = "id_malformed_neg_Files";
      let tags_neg_Files = "tags_malformed_neg_Files";
      let title_neg_Files = "title_malformed_neg_Files";
    verifyFilesRejects(Fields_neg_Files, Filter_neg_Files, Limit_neg_Files, Meta_neg_Files, Offset_neg_Files, Search_neg_Files, Sort_neg_Files, data_neg_Files, description_neg_Files, filename_download_neg_Files, folder_neg_Files, id_neg_Files, tags_neg_Files, title_neg_Files, { description: neg_desc });
  } });

bthread("evil:collision:Files", function() {
  while (true) {
    let e = waitFor(matchAnyFilesAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingFiles("Fields_collision", "Filter_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Search_collision", "Sort_collision", "data_collision", "description_collision", "filename_download_collision", "folder_collision", liveId, "tags_collision", "title_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Flows:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyFlowsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createFlow:Success:" + id), waitFor: matchAnyFlowsDeleted() });
  } });
bthread("fuzz:fields:Flows", function() {
  while(true) {
    let e = waitFor(matchAnyFlowsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Flows";
      let Fields_neg_Flows = "Fields_malformed_neg_Flows";
      let Meta_neg_Flows = "Meta_malformed_neg_Flows";
      let data_neg_Flows = "data_malformed_neg_Flows";
      let id_neg_Flows = "id_malformed_neg_Flows";
    verifyFlowsRejects(Fields_neg_Flows, Meta_neg_Flows, data_neg_Flows, id_neg_Flows, { description: neg_desc });
  } });

bthread("evil:collision:Flows", function() {
  while (true) {
    let e = waitFor(matchAnyFlowsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingFlows("Fields_collision", "Meta_collision", "data_collision", liveId, { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Folders:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyFoldersAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createFolder:Success:" + id), waitFor: matchAnyFoldersDeleted() });
  } });
bthread("fuzz:fields:Folders", function() {
  while(true) {
    let e = waitFor(matchAnyFoldersAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Folders";
      let Fields_neg_Folders = "Fields_malformed_neg_Folders";
      let Filter_neg_Folders = "Filter_malformed_neg_Folders";
      let Limit_neg_Folders = "Limit_malformed_neg_Folders";
      let Meta_neg_Folders = "Meta_malformed_neg_Folders";
      let Offset_neg_Folders = "Offset_malformed_neg_Folders";
      let Search_neg_Folders = "Search_malformed_neg_Folders";
      let Sort_neg_Folders = "Sort_malformed_neg_Folders";
      let id_neg_Folders = "id_malformed_neg_Folders";
      let name_neg_Folders = "name_malformed_neg_Folders";
      let parent_neg_Folders = "parent_malformed_neg_Folders";
    verifyFoldersRejects(Fields_neg_Folders, Filter_neg_Folders, Limit_neg_Folders, Meta_neg_Folders, Offset_neg_Folders, Search_neg_Folders, Sort_neg_Folders, id_neg_Folders, name_neg_Folders, parent_neg_Folders, { description: neg_desc });
  } });

bthread("evil:collision:Folders", function() {
  while (true) {
    let e = waitFor(matchAnyFoldersAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingFolders("Fields_collision", "Filter_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Search_collision", "Sort_collision", liveId, "name_collision", "parent_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Operations:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyOperationsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createOperation:Success:" + id), waitFor: matchAnyOperationsDeleted() });
  } });
bthread("fuzz:fields:Operations", function() {
  while(true) {
    let e = waitFor(matchAnyOperationsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Operations";
      let Fields_neg_Operations = "Fields_malformed_neg_Operations";
      let Meta_neg_Operations = "Meta_malformed_neg_Operations";
      let UUId_neg_Operations = "UUId_malformed_neg_Operations";
      let data_neg_Operations = "data_malformed_neg_Operations";
      let id_neg_Operations = "id_malformed_neg_Operations";
      let keys_neg_Operations = "keys_malformed_neg_Operations";
    verifyOperationsRejects(Fields_neg_Operations, Meta_neg_Operations, UUId_neg_Operations, data_neg_Operations, id_neg_Operations, keys_neg_Operations, { description: neg_desc });
  } });

bthread("evil:collision:Operations", function() {
  while (true) {
    let e = waitFor(matchAnyOperationsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingOperations("Fields_collision", "Meta_collision", "UUId_collision", "data_collision", liveId, "keys_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Permissions:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyPermissionsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createPermission:Success:" + id), waitFor: matchAnyPermissionsDeleted() });
  } });
bthread("fuzz:fields:Permissions", function() {
  while(true) {
    let e = waitFor(matchAnyPermissionsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Permissions";
      let Fields_neg_Permissions = "Fields_malformed_neg_Permissions";
      let Filter_neg_Permissions = "Filter_malformed_neg_Permissions";
      let Id_neg_Permissions = "Id_malformed_neg_Permissions";
      let Limit_neg_Permissions = "Limit_malformed_neg_Permissions";
      let Meta_neg_Permissions = "Meta_malformed_neg_Permissions";
      let Offset_neg_Permissions = "Offset_malformed_neg_Permissions";
      let Page_neg_Permissions = "Page_malformed_neg_Permissions";
      let Search_neg_Permissions = "Search_malformed_neg_Permissions";
      let Sort_neg_Permissions = "Sort_malformed_neg_Permissions";
      let collection_neg_Permissions = "collection_malformed_neg_Permissions";
      let comment_neg_Permissions = "comment_malformed_neg_Permissions";
      let create_neg_Permissions = "create_malformed_neg_Permissions";
      let data_neg_Permissions = "data_malformed_neg_Permissions";
      let _delete_neg_Permissions = "delete_malformed_neg_Permissions";
      let explain_neg_Permissions = "explain_malformed_neg_Permissions";
      let id_neg_Permissions = "id_malformed_neg_Permissions";
      let keys_neg_Permissions = "keys_malformed_neg_Permissions";
      let read_neg_Permissions = "read_malformed_neg_Permissions";
      let read_field_blacklist_neg_Permissions = "read_field_blacklist_malformed_neg_Permissions";
      let role_neg_Permissions = "role_malformed_neg_Permissions";
      let status_neg_Permissions = "status_malformed_neg_Permissions";
      let status_blacklist_neg_Permissions = "status_blacklist_malformed_neg_Permissions";
      let update_neg_Permissions = "update_malformed_neg_Permissions";
      let write_field_blacklist_neg_Permissions = "write_field_blacklist_malformed_neg_Permissions";
    verifyPermissionsRejects(Fields_neg_Permissions, Filter_neg_Permissions, Id_neg_Permissions, Limit_neg_Permissions, Meta_neg_Permissions, Offset_neg_Permissions, Page_neg_Permissions, Search_neg_Permissions, Sort_neg_Permissions, collection_neg_Permissions, comment_neg_Permissions, create_neg_Permissions, data_neg_Permissions, _delete_neg_Permissions, explain_neg_Permissions, id_neg_Permissions, keys_neg_Permissions, read_neg_Permissions, read_field_blacklist_neg_Permissions, role_neg_Permissions, status_neg_Permissions, status_blacklist_neg_Permissions, update_neg_Permissions, write_field_blacklist_neg_Permissions, { description: neg_desc });
  } });

bthread("evil:collision:Permissions", function() {
  while (true) {
    let e = waitFor(matchAnyPermissionsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingPermissions("Fields_collision", "Filter_collision", "Id_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Page_collision", "Search_collision", "Sort_collision", "collection_collision", "comment_collision", "create_collision", "data_collision", "delete_collision", "explain_collision", liveId, "keys_collision", "read_collision", "read_field_blacklist_collision", "role_collision", "status_collision", "status_blacklist_collision", "update_collision", "write_field_blacklist_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Relations:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyRelationsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createRelation:Success:" + id), waitFor: matchAnyRelationsDeleted() });
  } });
bthread("fuzz:fields:Relations", function() {
  while(true) {
    let e = waitFor(matchAnyRelationsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Relations";
      let Fields_neg_Relations = "Fields_malformed_neg_Relations";
      let Filter_neg_Relations = "Filter_malformed_neg_Relations";
      let Id_neg_Relations = "Id_malformed_neg_Relations";
      let Limit_neg_Relations = "Limit_malformed_neg_Relations";
      let Meta_neg_Relations = "Meta_malformed_neg_Relations";
      let Offset_neg_Relations = "Offset_malformed_neg_Relations";
      let Page_neg_Relations = "Page_malformed_neg_Relations";
      let Search_neg_Relations = "Search_malformed_neg_Relations";
      let Sort_neg_Relations = "Sort_malformed_neg_Relations";
      let collection_many_neg_Relations = "collection_many_malformed_neg_Relations";
      let collection_one_neg_Relations = "collection_one_malformed_neg_Relations";
      let field_many_neg_Relations = "field_many_malformed_neg_Relations";
      let field_one_neg_Relations = "field_one_malformed_neg_Relations";
      let id_neg_Relations = "id_malformed_neg_Relations";
      let junction_field_neg_Relations = "junction_field_malformed_neg_Relations";
    verifyRelationsRejects(Fields_neg_Relations, Filter_neg_Relations, Id_neg_Relations, Limit_neg_Relations, Meta_neg_Relations, Offset_neg_Relations, Page_neg_Relations, Search_neg_Relations, Sort_neg_Relations, collection_many_neg_Relations, collection_one_neg_Relations, field_many_neg_Relations, field_one_neg_Relations, id_neg_Relations, junction_field_neg_Relations, { description: neg_desc });
  } });

bthread("evil:collision:Relations", function() {
  while (true) {
    let e = waitFor(matchAnyRelationsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingRelations("Fields_collision", "Filter_collision", "Id_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Page_collision", "Search_collision", "Sort_collision", "collection_many_collision", "collection_one_collision", "field_many_collision", "field_one_collision", liveId, "junction_field_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Roles:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyRolesAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createRole:Success:" + id), waitFor: matchAnyRolesDeleted() });
  } });
bthread("fuzz:fields:Roles", function() {
  while(true) {
    let e = waitFor(matchAnyRolesAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Roles";
      let Fields_neg_Roles = "Fields_malformed_neg_Roles";
      let Filter_neg_Roles = "Filter_malformed_neg_Roles";
      let Limit_neg_Roles = "Limit_malformed_neg_Roles";
      let Meta_neg_Roles = "Meta_malformed_neg_Roles";
      let Offset_neg_Roles = "Offset_malformed_neg_Roles";
      let Page_neg_Roles = "Page_malformed_neg_Roles";
      let Search_neg_Roles = "Search_malformed_neg_Roles";
      let Sort_neg_Roles = "Sort_malformed_neg_Roles";
      let description_neg_Roles = "description_malformed_neg_Roles";
      let enforce_tfa_neg_Roles = "enforce_tfa_malformed_neg_Roles";
      let external_id_neg_Roles = "external_id_malformed_neg_Roles";
      let id_neg_Roles = "id_malformed_neg_Roles";
      let ip_access_neg_Roles = "ip_access_malformed_neg_Roles";
      let module_listing_neg_Roles = "module_listing_malformed_neg_Roles";
      let name_neg_Roles = "name_malformed_neg_Roles";
    verifyRolesRejects(Fields_neg_Roles, Filter_neg_Roles, Limit_neg_Roles, Meta_neg_Roles, Offset_neg_Roles, Page_neg_Roles, Search_neg_Roles, Sort_neg_Roles, description_neg_Roles, enforce_tfa_neg_Roles, external_id_neg_Roles, id_neg_Roles, ip_access_neg_Roles, module_listing_neg_Roles, name_neg_Roles, { description: neg_desc });
  } });

bthread("evil:collision:Roles", function() {
  while (true) {
    let e = waitFor(matchAnyRolesAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingRoles("Fields_collision", "Filter_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Page_collision", "Search_collision", "Sort_collision", "description_collision", "enforce_tfa_collision", "external_id_collision", liveId, "ip_access_collision", "module_listing_collision", "name_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("fuzz:fields:Schema", function() {
  while(true) {
    let e = waitFor(matchAnySchemaAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Schema";
      let Export_neg_Schema = "Export_malformed_neg_Schema";
      let data_neg_Schema = "data_malformed_neg_Schema";
      let force_neg_Schema = "force_malformed_neg_Schema";
      let id_neg_Schema = "id_malformed_neg_Schema";
    verifySchemaRejects(Export_neg_Schema, data_neg_Schema, force_neg_Schema, id_neg_Schema, { description: neg_desc });
  } });

bthread("evil:collision:Schema", function() {
  while (true) {
    let e = waitFor(matchAnySchemaAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingSchema("Export_collision", "data_collision", "force_collision", liveId, { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Users:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyUsersAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:acceptInvite:Success:" + id), waitFor: matchAnyUsersDeleted() });
  } });
bthread("fuzz:fields:Users", function() {
  while(true) {
    let e = waitFor(matchAnyUsersAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Users";
      let Fields_neg_Users = "Fields_malformed_neg_Users";
      let Filter_neg_Users = "Filter_malformed_neg_Users";
      let Limit_neg_Users = "Limit_malformed_neg_Users";
      let Meta_neg_Users = "Meta_malformed_neg_Users";
      let Offset_neg_Users = "Offset_malformed_neg_Users";
      let Search_neg_Users = "Search_malformed_neg_Users";
      let Sort_neg_Users = "Sort_malformed_neg_Users";
      let UUId_neg_Users = "UUId_malformed_neg_Users";
      let id_neg_Users = "id_malformed_neg_Users";
      let last_page_neg_Users = "last_page_malformed_neg_Users";
      let password_neg_Users = "password_malformed_neg_Users";
      let token_neg_Users = "token_malformed_neg_Users";
    verifyUsersRejects(Fields_neg_Users, Filter_neg_Users, Limit_neg_Users, Meta_neg_Users, Offset_neg_Users, Search_neg_Users, Sort_neg_Users, UUId_neg_Users, id_neg_Users, last_page_neg_Users, password_neg_Users, token_neg_Users, { description: neg_desc });
  } });

bthread("evil:collision:Users", function() {
  while (true) {
    let e = waitFor(matchAnyUsersAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingUsers("Fields_collision", "Filter_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Search_collision", "Sort_collision", "UUId_collision", liveId, "last_page_collision", "password_collision", "token_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("fuzz:fields:Utilities", function() {
  while(true) {
    let e = waitFor(matchAnyUtilitiesAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Utilities";
      let id_neg_Utilities = "id_malformed_neg_Utilities";
      let length_neg_Utilities = "length_malformed_neg_Utilities";
    verifyUtilitiesRejects(id_neg_Utilities, length_neg_Utilities, { description: neg_desc });
  } });

bthread("evil:collision:Utilities", function() {
  while (true) {
    let e = waitFor(matchAnyUtilitiesAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingUtilities(liveId, "length_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Versions:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyVersionsAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:promoteContentVersion:Success:" + id), waitFor: matchAnyVersionsDeleted() });
  } });
bthread("fuzz:fields:Versions", function() {
  while(true) {
    let e = waitFor(matchAnyVersionsAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Versions";
      let Fields_neg_Versions = "Fields_malformed_neg_Versions";
      let Filter_neg_Versions = "Filter_malformed_neg_Versions";
      let Limit_neg_Versions = "Limit_malformed_neg_Versions";
      let Meta_neg_Versions = "Meta_malformed_neg_Versions";
      let Offset_neg_Versions = "Offset_malformed_neg_Versions";
      let Search_neg_Versions = "Search_malformed_neg_Versions";
      let Sort_neg_Versions = "Sort_malformed_neg_Versions";
      let UUId_neg_Versions = "UUId_malformed_neg_Versions";
      let data_neg_Versions = "data_malformed_neg_Versions";
      let fields_neg_Versions = "fields_malformed_neg_Versions";
      let id_neg_Versions = "id_malformed_neg_Versions";
      let mainHash_neg_Versions = "mainHash_malformed_neg_Versions";
    verifyVersionsRejects(Fields_neg_Versions, Filter_neg_Versions, Limit_neg_Versions, Meta_neg_Versions, Offset_neg_Versions, Search_neg_Versions, Sort_neg_Versions, UUId_neg_Versions, data_neg_Versions, fields_neg_Versions, id_neg_Versions, mainHash_neg_Versions, { description: neg_desc });
  } });

bthread("evil:collision:Versions", function() {
  while (true) {
    let e = waitFor(matchAnyVersionsAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingVersions("Fields_collision", "Filter_collision", "Limit_collision", "Meta_collision", "Offset_collision", "Search_collision", "Sort_collision", "UUId_collision", "data_collision", "fields_collision", liveId, "mainHash_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

bthread("guard:Webhooks:BlockCollisionSuccess", function() {
  while(true) { let e = waitFor(matchAnyWebhooksAdded()); let id = e.data.id || e.data.id;
    bp.sync({ block: bp.Event("Req:createWebhook:Success:" + id), waitFor: matchAnyWebhooksDeleted() });
  } });
bthread("fuzz:fields:Webhooks", function() {
  while(true) {
    let e = waitFor(matchAnyWebhooksAdded());
    let neg_desc = "[NEGATIVE TEST] Intentional malfunction for Webhooks";
      let actions_neg_Webhooks = "actions_malformed_neg_Webhooks";
      let data_neg_Webhooks = "data_malformed_neg_Webhooks";
      let id_neg_Webhooks = "id_malformed_neg_Webhooks";
      let method_neg_Webhooks = "method_malformed_neg_Webhooks";
      let name_neg_Webhooks = "name_malformed_neg_Webhooks";
      let status_neg_Webhooks = "status_malformed_neg_Webhooks";
      let system_collections_neg_Webhooks = "system-collections_malformed_neg_Webhooks";
      let url_neg_Webhooks = "url_malformed_neg_Webhooks";
    verifyWebhooksRejects(actions_neg_Webhooks, data_neg_Webhooks, id_neg_Webhooks, method_neg_Webhooks, name_neg_Webhooks, status_neg_Webhooks, system_collections_neg_Webhooks, url_neg_Webhooks, { description: neg_desc });
  } });

bthread("evil:collision:Webhooks", function() {
  while (true) {
    let e = waitFor(matchAnyWebhooksAdded());
    let liveId = e.data.id || e.data.id;
    tryToAddExistingWebhooks("actions_collision", "data_collision", liveId, "method_collision", "name_collision", "status_collision", "system-collections_collision", "url_collision", { description: "[NEGATIVE TEST] Collision Attack" });
  } });

// --- PHASE 4: COORDINATED VANDALISM (Hyper-Negative) ---
// --- EVIL COORDINATED AGENTS for directus (Copy 1) ---
bthread("hyper:evil:copy1:OrphanMaker_Items_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyItemsAdded());
    // Barrier: Ensure main test verifies Items before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Items Verified", function(ev) {
        return ev.name.includes("Verify Items") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.collection || e.data.id;
    getItems(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Presets_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyPresetsAdded());
    // Barrier: Ensure main test verifies Presets before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Presets Verified", function(ev) {
        return ev.name.includes("Verify Presets") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getPreset(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Presets_Roles", function() {
  while(true) {
    let e = waitFor(matchAnyPresetsAdded());
    // Barrier: Ensure main test verifies Presets before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Presets Verified", function(ev) {
        return ev.name.includes("Verify Presets") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteRole(pId);
    let childId = e.data.id || e.data.id;
    getPreset(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Comments_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyCommentsAdded());
    // Barrier: Ensure main test verifies Comments before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Comments Verified", function(ev) {
        return ev.name.includes("Verify Comments") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getComment(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Comments_Items", function() {
  while(true) {
    let e = waitFor(matchAnyCommentsAdded());
    // Barrier: Ensure main test verifies Comments before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Comments Verified", function(ev) {
        return ev.name.includes("Verify Comments") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.collection || e.data.id;
    deleteItems(pId);
    let childId = e.data.id || e.data.id;
    getComment(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Fields_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyFieldsAdded());
    // Barrier: Ensure main test verifies Fields before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Fields Verified", function(ev) {
        return ev.name.includes("Verify Fields") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.collection || e.data.id;
    getCollectionFields(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Permissions_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyPermissionsAdded());
    // Barrier: Ensure main test verifies Permissions before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Permissions Verified", function(ev) {
        return ev.name.includes("Verify Permissions") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getPermission(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Permissions_Roles", function() {
  while(true) {
    let e = waitFor(matchAnyPermissionsAdded());
    // Barrier: Ensure main test verifies Permissions before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Permissions Verified", function(ev) {
        return ev.name.includes("Verify Permissions") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteRole(pId);
    let childId = e.data.id || e.data.id;
    getPermission(childId);
  }
});
bthread("hyper:evil:copy1:OrphanMaker_Relations_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyRelationsAdded());
    // Barrier: Ensure main test verifies Relations before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Relations Verified", function(ev) {
        return ev.name.includes("Verify Relations") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getRelation(childId);
  }
});
// --- EVIL COORDINATED AGENTS for directus (Copy 2) ---
bthread("hyper:evil:copy2:OrphanMaker_Items_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyItemsAdded());
    // Barrier: Ensure main test verifies Items before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Items Verified", function(ev) {
        return ev.name.includes("Verify Items") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.collection || e.data.id;
    getItems(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Presets_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyPresetsAdded());
    // Barrier: Ensure main test verifies Presets before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Presets Verified", function(ev) {
        return ev.name.includes("Verify Presets") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getPreset(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Presets_Roles", function() {
  while(true) {
    let e = waitFor(matchAnyPresetsAdded());
    // Barrier: Ensure main test verifies Presets before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Presets Verified", function(ev) {
        return ev.name.includes("Verify Presets") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteRole(pId);
    let childId = e.data.id || e.data.id;
    getPreset(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Comments_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyCommentsAdded());
    // Barrier: Ensure main test verifies Comments before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Comments Verified", function(ev) {
        return ev.name.includes("Verify Comments") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getComment(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Comments_Items", function() {
  while(true) {
    let e = waitFor(matchAnyCommentsAdded());
    // Barrier: Ensure main test verifies Comments before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Comments Verified", function(ev) {
        return ev.name.includes("Verify Comments") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.collection || e.data.id;
    deleteItems(pId);
    let childId = e.data.id || e.data.id;
    getComment(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Fields_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyFieldsAdded());
    // Barrier: Ensure main test verifies Fields before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Fields Verified", function(ev) {
        return ev.name.includes("Verify Fields") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.collection || e.data.id;
    getCollectionFields(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Permissions_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyPermissionsAdded());
    // Barrier: Ensure main test verifies Permissions before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Permissions Verified", function(ev) {
        return ev.name.includes("Verify Permissions") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getPermission(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Permissions_Roles", function() {
  while(true) {
    let e = waitFor(matchAnyPermissionsAdded());
    // Barrier: Ensure main test verifies Permissions before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Permissions Verified", function(ev) {
        return ev.name.includes("Verify Permissions") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteRole(pId);
    let childId = e.data.id || e.data.id;
    getPermission(childId);
  }
});
bthread("hyper:evil:copy2:OrphanMaker_Relations_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyRelationsAdded());
    // Barrier: Ensure main test verifies Relations before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Relations Verified", function(ev) {
        return ev.name.includes("Verify Relations") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getRelation(childId);
  }
});
// --- EVIL COORDINATED AGENTS for directus (Copy 3) ---
bthread("hyper:evil:copy3:OrphanMaker_Items_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyItemsAdded());
    // Barrier: Ensure main test verifies Items before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Items Verified", function(ev) {
        return ev.name.includes("Verify Items") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.collection || e.data.id;
    getItems(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Presets_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyPresetsAdded());
    // Barrier: Ensure main test verifies Presets before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Presets Verified", function(ev) {
        return ev.name.includes("Verify Presets") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getPreset(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Presets_Roles", function() {
  while(true) {
    let e = waitFor(matchAnyPresetsAdded());
    // Barrier: Ensure main test verifies Presets before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Presets Verified", function(ev) {
        return ev.name.includes("Verify Presets") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteRole(pId);
    let childId = e.data.id || e.data.id;
    getPreset(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Comments_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyCommentsAdded());
    // Barrier: Ensure main test verifies Comments before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Comments Verified", function(ev) {
        return ev.name.includes("Verify Comments") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getComment(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Comments_Items", function() {
  while(true) {
    let e = waitFor(matchAnyCommentsAdded());
    // Barrier: Ensure main test verifies Comments before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Comments Verified", function(ev) {
        return ev.name.includes("Verify Comments") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.collection || e.data.id;
    deleteItems(pId);
    let childId = e.data.id || e.data.id;
    getComment(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Fields_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyFieldsAdded());
    // Barrier: Ensure main test verifies Fields before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Fields Verified", function(ev) {
        return ev.name.includes("Verify Fields") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.collection || e.data.id;
    getCollectionFields(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Permissions_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyPermissionsAdded());
    // Barrier: Ensure main test verifies Permissions before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Permissions Verified", function(ev) {
        return ev.name.includes("Verify Permissions") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getPermission(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Permissions_Roles", function() {
  while(true) {
    let e = waitFor(matchAnyPermissionsAdded());
    // Barrier: Ensure main test verifies Permissions before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Permissions Verified", function(ev) {
        return ev.name.includes("Verify Permissions") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteRole(pId);
    let childId = e.data.id || e.data.id;
    getPermission(childId);
  }
});
bthread("hyper:evil:copy3:OrphanMaker_Relations_Collections", function() {
  while(true) {
    let e = waitFor(matchAnyRelationsAdded());
    // Barrier: Ensure main test verifies Relations before sabotaging parent
    bp.sync({ waitFor: bp.EventSet("Barrier: Relations Verified", function(ev) {
        return ev.name.includes("Verify Relations") && ev.name.includes(e.data.id);
    }) });
    let pId = e.data.Id || e.data.id;
    deleteCollection(pId);
    let childId = e.data.id || e.data.id;
    getRelation(childId);
  }
});