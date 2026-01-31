// Auto-generated stories for directus
//@provengo summon rest

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    bp.log.info("DEBUG: [resolveDependencies] Caught event: " + e.name);
    if (e.data) bp.log.info("DEBUG: [resolveDependencies] Data: " + JSON.stringify(e.data));
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (val) {
            captured[k] = val;
            bp.log.info("DEBUG: [resolveDependencies] Resolved " + k + " -> " + val);
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// --- Monitors [RESTORED] ---
bthread("monitor:Authentication:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAuthenticationAdded() });
    let idVal = e.data.provider || e.data.id;
    verifyAuthenticationExists(idVal);
  } });

bthread("monitor:Collections:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCollectionsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyCollectionsExists(idVal);
  } });

bthread("monitor:Items:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyItemsAdded() });
    let idVal = e.data.collection || e.data.id;
    verifyItemsExists(idVal);
  } });

bthread("monitor:Presets:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPresetsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyPresetsExists(idVal);
  } });

bthread("monitor:Comments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCommentsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyCommentsExists(idVal);
  } });

bthread("monitor:Fields:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFieldsAdded() });
    let idVal = e.data.collection || e.data.id;
    verifyFieldsExists(idVal);
  } });

bthread("monitor:Files:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFilesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyFilesExists(idVal);
  } });

bthread("monitor:Flows:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFlowsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyFlowsExists(idVal);
  } });

bthread("monitor:Folders:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFoldersAdded() });
    let idVal = e.data.id || e.data.id;
    verifyFoldersExists(idVal);
  } });

bthread("monitor:Operations:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOperationsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyOperationsExists(idVal);
  } });

bthread("monitor:Permissions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPermissionsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyPermissionsExists(idVal);
  } });

bthread("monitor:Relations:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRelationsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyRelationsExists(idVal);
  } });

bthread("monitor:Roles:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRolesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyRolesExists(idVal);
  } });

bthread("monitor:Schema:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySchemaAdded() });
    let idVal = e.data.id || e.data.id;
    verifySchemaExists(idVal);
  } });

bthread("monitor:Users:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let idVal = e.data.id || e.data.id;
    verifyUsersExists(idVal);
  } });

bthread("monitor:Utilities:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUtilitiesAdded() });
    let idVal = e.data.id || e.data.id;
    verifyUtilitiesExists(idVal);
  } });

bthread("monitor:Versions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyVersionsAdded() });
    let idVal = e.data.id || e.data.id;
    verifyVersionsExists(idVal);
  } });

bthread("monitor:Webhooks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWebhooksAdded() });
    let idVal = e.data.id || e.data.id;
    verifyWebhooksExists(idVal);
  } });

bthread("crud:Authentication:linear:1", function () {
  // -> Creating Authentication
  let password_Authentication_100 = "password_Authentication_100_" + Math.floor(Math.random()*1000);
  let provider_Authentication_100 = "provider_Authentication_100";
  let redirect_Authentication_100 = "redirect_Authentication_100_" + Math.floor(Math.random()*1000);
  let token_Authentication_100 = "token_Authentication_100_" + Math.floor(Math.random()*1000);
  passwordReset(password_Authentication_100, provider_Authentication_100, redirect_Authentication_100, token_Authentication_100, { expectedResponseCodes: [200, 201, 204] });

  verifyAuthenticationExists(provider_Authentication_100);
  verifyAuthenticationExists(provider_Authentication_100);
});

bthread("crud:Collections:linear:1", function () {
  // -> Creating Collections
  let Meta_Collections_110 = "Meta_Collections_110_" + Math.floor(Math.random()*1000);
  let Offset_Collections_110 = "Offset_Collections_110_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_110 = "archive_app_filter_Collections_110_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_110 = "archive_field_Collections_110_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_110 = "archive_value_Collections_110_" + Math.floor(Math.random()*1000);
  let collection_Collections_110 = "collection_Collections_110_" + Math.floor(Math.random()*1000);
  let display_template_Collections_110 = "display_template_Collections_110_" + Math.floor(Math.random()*1000);
  let fields_Collections_110 = [];
  let hidden_Collections_110 = true;
  let icon_Collections_110 = "icon_Collections_110_" + Math.floor(Math.random()*1000);
  let id_Collections_110 = 110 + Math.floor(Math.random() * 99);
  let meta_Collections_110 = { "id": 1, "name": "meta_Collections_110_obj" };
  let note_Collections_110 = "note_Collections_110_" + Math.floor(Math.random()*1000);
  let singleton_Collections_110 = true;
  let sort_field_Collections_110 = "sort_field_Collections_110_" + Math.floor(Math.random()*1000);
  let translation_Collections_110 = "translation_Collections_110_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_110 = "unarchive_value_Collections_110_" + Math.floor(Math.random()*1000);
  let versioning_Collections_110 = true;
  createCollection(Meta_Collections_110, Offset_Collections_110, archive_app_filter_Collections_110, archive_field_Collections_110, archive_value_Collections_110, collection_Collections_110, display_template_Collections_110, fields_Collections_110, hidden_Collections_110, icon_Collections_110, id_Collections_110, meta_Collections_110, note_Collections_110, singleton_Collections_110, sort_field_Collections_110, translation_Collections_110, unarchive_value_Collections_110, versioning_Collections_110, { expectedResponseCodes: [200, 201, 204] });

  verifyCollectionsExists(id_Collections_110);
  // -> Updating Collections
  let Meta_Collections_upd_110 = "Meta_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let Offset_Collections_upd_110 = "Offset_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_upd_110 = "archive_app_filter_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_upd_110 = "archive_field_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_upd_110 = "archive_value_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let collection_Collections_upd_110 = "collection_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let display_template_Collections_upd_110 = "display_template_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let fields_Collections_upd_110 = [];
  let hidden_Collections_upd_110 = true;
  let icon_Collections_upd_110 = "icon_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let id_Collections_upd_110 = id_Collections_110;
  let meta_Collections_upd_110 = { "id": 1, "name": "meta_Collections_upd_110_obj" };
  let note_Collections_upd_110 = "note_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let singleton_Collections_upd_110 = true;
  let sort_field_Collections_upd_110 = "sort_field_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let translation_Collections_upd_110 = "translation_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_upd_110 = "unarchive_value_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let versioning_Collections_upd_110 = true;
  updateCollection(Meta_Collections_upd_110, Offset_Collections_upd_110, archive_app_filter_Collections_upd_110, archive_field_Collections_upd_110, archive_value_Collections_upd_110, collection_Collections_upd_110, display_template_Collections_upd_110, fields_Collections_upd_110, hidden_Collections_upd_110, icon_Collections_upd_110, id_Collections_upd_110, meta_Collections_upd_110, note_Collections_upd_110, singleton_Collections_upd_110, sort_field_Collections_upd_110, translation_Collections_upd_110, unarchive_value_Collections_upd_110, versioning_Collections_upd_110, { expectedResponseCodes: [200, 201, 204] });

  verifyCollectionsExists(id_Collections_110);
  // -> Deleting Parent Collections (Relational Intent Race)
  deleteCollection(id_Collections_110);

});

bthread("crud:Items:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Items
  let Collection_Items_120 = "Collection_Items_120_" + Math.floor(Math.random()*1000);
  let Fields_Items_120 = "Fields_Items_120_" + Math.floor(Math.random()*1000);
  let Filter_Items_120 = "Filter_Items_120_" + Math.floor(Math.random()*1000);
  let Limit_Items_120 = "Limit_Items_120_" + Math.floor(Math.random()*1000);
  let Meta_Items_120 = "Meta_Items_120_" + Math.floor(Math.random()*1000);
  let Offset_Items_120 = "Offset_Items_120_" + Math.floor(Math.random()*1000);
  let Search_Items_120 = "Search_Items_120_" + Math.floor(Math.random()*1000);
  let Sort_Items_120 = "Sort_Items_120_" + Math.floor(Math.random()*1000);
  let collection_Items_120 = "collection_Items_120";
  createItem(Collection_Items_120, Fields_Items_120, Filter_Items_120, Limit_Items_120, Meta_Items_120, Offset_Items_120, Search_Items_120, Sort_Items_120, collection_Items_120, { expectedResponseCodes: [200, 201, 204] });

  verifyItemsExists(collection_Items_120);
  // -> Updating Items
  let Collection_Items_upd_120 = "Collection_Items_upd_120_" + Math.floor(Math.random()*1000);
  let Fields_Items_upd_120 = "Fields_Items_upd_120_" + Math.floor(Math.random()*1000);
  let Filter_Items_upd_120 = "Filter_Items_upd_120_" + Math.floor(Math.random()*1000);
  let Limit_Items_upd_120 = "Limit_Items_upd_120_" + Math.floor(Math.random()*1000);
  let Meta_Items_upd_120 = "Meta_Items_upd_120_" + Math.floor(Math.random()*1000);
  let Offset_Items_upd_120 = "Offset_Items_upd_120_" + Math.floor(Math.random()*1000);
  let Search_Items_upd_120 = "Search_Items_upd_120_" + Math.floor(Math.random()*1000);
  let Sort_Items_upd_120 = "Sort_Items_upd_120_" + Math.floor(Math.random()*1000);
  let collection_Items_upd_120 = collection_Items_120;
  updateItems(Collection_Items_upd_120, Fields_Items_upd_120, Filter_Items_upd_120, Limit_Items_upd_120, Meta_Items_upd_120, Offset_Items_upd_120, Search_Items_upd_120, Sort_Items_upd_120, collection_Items_upd_120, { expectedResponseCodes: [200, 201, 204] });

  verifyItemsExists(collection_Items_120);
  // -> Deleting Parent Items (Relational Intent Race)
  deleteItems(collection_Items_120);

});

bthread("crud:Presets:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Roles"] = matchAnyRolesAdded();
  let pkMap = {"Collections": "id", "Roles": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let RolesId = captured["Roles"];
  // -> Creating Presets
  let Fields_Presets_130 = "Fields_Presets_130_" + Math.floor(Math.random()*1000);
  let Filter_Presets_130 = "Filter_Presets_130_" + Math.floor(Math.random()*1000);
  let Id_Presets_130 = 130 + Math.floor(Math.random() * 99);
  let Limit_Presets_130 = "Limit_Presets_130_" + Math.floor(Math.random()*1000);
  let Meta_Presets_130 = "Meta_Presets_130_" + Math.floor(Math.random()*1000);
  let Offset_Presets_130 = "Offset_Presets_130_" + Math.floor(Math.random()*1000);
  let Page_Presets_130 = "Page_Presets_130_" + Math.floor(Math.random()*1000);
  let Search_Presets_130 = "Search_Presets_130_" + Math.floor(Math.random()*1000);
  let Sort_Presets_130 = "Sort_Presets_130_" + Math.floor(Math.random()*1000);
  let collection_Presets_130 = "collection_Presets_130_" + Math.floor(Math.random()*1000);
  let filters_Presets_130 = [];
  let id_Presets_130 = RolesId;
  let layout_Presets_130 = "layout_Presets_130_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_130 = "layout_options_Presets_130_" + Math.floor(Math.random()*1000);
  let layout_query_Presets_130 = "layout_query_Presets_130_" + Math.floor(Math.random()*1000);
  let role_Presets_130 = 130 + Math.floor(Math.random() * 99);
  let search_Presets_130 = "search_Presets_130_" + Math.floor(Math.random()*1000);
  let search_query_Presets_130 = "search_query_Presets_130_" + Math.floor(Math.random()*1000);
  let title_Presets_130 = "title_Presets_130_" + Math.floor(Math.random()*1000);
  let translation_Presets_130 = { "id": 1, "name": "translation_Presets_130_obj" };
  let view_options_Presets_130 = "view_options_Presets_130_" + Math.floor(Math.random()*1000);
  let view_query_Presets_130 = "view_query_Presets_130_" + Math.floor(Math.random()*1000);
  let view_type_Presets_130 = "view_type_Presets_130_" + Math.floor(Math.random()*1000);
  createPreset(Fields_Presets_130, Filter_Presets_130, Id_Presets_130, Limit_Presets_130, Meta_Presets_130, Offset_Presets_130, Page_Presets_130, Search_Presets_130, Sort_Presets_130, collection_Presets_130, filters_Presets_130, id_Presets_130, layout_Presets_130, layout_options_Presets_130, layout_query_Presets_130, role_Presets_130, search_Presets_130, search_query_Presets_130, title_Presets_130, translation_Presets_130, view_options_Presets_130, view_query_Presets_130, view_type_Presets_130, { expectedResponseCodes: [200, 201, 204] });

  verifyPresetsExists(id_Presets_130);
  // -> Updating Presets
  let Fields_Presets_upd_130 = "Fields_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Filter_Presets_upd_130 = "Filter_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Id_Presets_upd_130 = 130 + Math.floor(Math.random() * 99);
  let Limit_Presets_upd_130 = "Limit_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Meta_Presets_upd_130 = "Meta_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Offset_Presets_upd_130 = "Offset_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Page_Presets_upd_130 = "Page_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Search_Presets_upd_130 = "Search_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Sort_Presets_upd_130 = "Sort_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let collection_Presets_upd_130 = "collection_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let filters_Presets_upd_130 = [];
  let id_Presets_upd_130 = id_Presets_130;
  let layout_Presets_upd_130 = "layout_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_upd_130 = "layout_options_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let layout_query_Presets_upd_130 = "layout_query_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let role_Presets_upd_130 = 130 + Math.floor(Math.random() * 99);
  let search_Presets_upd_130 = "search_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let search_query_Presets_upd_130 = "search_query_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let title_Presets_upd_130 = "title_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let translation_Presets_upd_130 = { "id": 1, "name": "translation_Presets_upd_130_obj" };
  let view_options_Presets_upd_130 = "view_options_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let view_query_Presets_upd_130 = "view_query_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let view_type_Presets_upd_130 = "view_type_Presets_upd_130_" + Math.floor(Math.random()*1000);
  updatePreset(Fields_Presets_upd_130, Filter_Presets_upd_130, Id_Presets_upd_130, Limit_Presets_upd_130, Meta_Presets_upd_130, Offset_Presets_upd_130, Page_Presets_upd_130, Search_Presets_upd_130, Sort_Presets_upd_130, collection_Presets_upd_130, filters_Presets_upd_130, id_Presets_upd_130, layout_Presets_upd_130, layout_options_Presets_upd_130, layout_query_Presets_upd_130, role_Presets_upd_130, search_Presets_upd_130, search_query_Presets_upd_130, title_Presets_upd_130, translation_Presets_upd_130, view_options_Presets_upd_130, view_query_Presets_upd_130, view_type_Presets_upd_130, { expectedResponseCodes: [200, 201, 204] });

  verifyPresetsExists(id_Presets_130);
  // -> Deleting Leaf Presets (Standard)
  deletePreset(id_Presets_130);
  verifyPresetsDoesNotExist(id_Presets_130);

});

bthread("crud:Comments:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Items"] = matchAnyItemsAdded();
  let pkMap = {"Collections": "id", "Items": "collection"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let ItemsId = captured["Items"];
  // -> Creating Comments
  let collection_Comments_140 = ItemsId;
  let comment_Comments_140 = "comment_Comments_140_" + Math.floor(Math.random()*1000);
  let id_Comments_140 = CollectionsId;
  let item_Comments_140 = "item_Comments_140_" + Math.floor(Math.random()*1000);
  createComment(collection_Comments_140, comment_Comments_140, id_Comments_140, item_Comments_140, { expectedResponseCodes: [200, 201, 204] });

  verifyCommentsExists(id_Comments_140);
  // -> Updating Comments
  let collection_Comments_upd_140 = "collection_Comments_upd_140_" + Math.floor(Math.random()*1000);
  let comment_Comments_upd_140 = "comment_Comments_upd_140_" + Math.floor(Math.random()*1000);
  let id_Comments_upd_140 = id_Comments_140;
  let item_Comments_upd_140 = "item_Comments_upd_140_" + Math.floor(Math.random()*1000);
  updateComment(collection_Comments_upd_140, comment_Comments_upd_140, id_Comments_upd_140, item_Comments_upd_140, { expectedResponseCodes: [200, 201, 204] });

  verifyCommentsExists(id_Comments_140);
  // -> Deleting Leaf Comments (Standard)
  deleteComment(id_Comments_140);
  verifyCommentsDoesNotExist(id_Comments_140);

});

bthread("crud:Fields:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Fields
  let Sort_Fields_150 = "Sort_Fields_150_" + Math.floor(Math.random()*1000);
  let collection_Fields_150 = "collection_Fields_150";
  let datatype_Fields_150 = "datatype_Fields_150_" + Math.floor(Math.random()*1000);
  let field_Fields_150 = "field_Fields_150_" + Math.floor(Math.random()*1000);
  let id_Fields_150 = CollectionsId;
  let length_Fields_150 = 150 + Math.floor(Math.random() * 99);
  let meta_Fields_150 = { "id": 1, "name": "meta_Fields_150_obj" };
  let schema_Fields_150 = { "id": 1, "name": "schema_Fields_150_obj" };
  let type_Fields_150 = "type_Fields_150_" + Math.floor(Math.random()*1000);
  createField(Sort_Fields_150, collection_Fields_150, datatype_Fields_150, field_Fields_150, id_Fields_150, length_Fields_150, meta_Fields_150, schema_Fields_150, type_Fields_150, { expectedResponseCodes: [200, 201, 204] });

  verifyFieldsExists(collection_Fields_150);
  // -> Updating Fields
  let Sort_Fields_upd_150 = "Sort_Fields_upd_150_" + Math.floor(Math.random()*1000);
  let collection_Fields_upd_150 = collection_Fields_150;
  let datatype_Fields_upd_150 = "datatype_Fields_upd_150_" + Math.floor(Math.random()*1000);
  let field_Fields_upd_150 = "field_Fields_upd_150_" + Math.floor(Math.random()*1000);
  let id_Fields_upd_150 = 150 + Math.floor(Math.random() * 99);
  let length_Fields_upd_150 = 150 + Math.floor(Math.random() * 99);
  let meta_Fields_upd_150 = { "id": 1, "name": "meta_Fields_upd_150_obj" };
  let schema_Fields_upd_150 = { "id": 1, "name": "schema_Fields_upd_150_obj" };
  let type_Fields_upd_150 = "type_Fields_upd_150_" + Math.floor(Math.random()*1000);
  updateField(Sort_Fields_upd_150, collection_Fields_upd_150, datatype_Fields_upd_150, field_Fields_upd_150, id_Fields_upd_150, length_Fields_upd_150, meta_Fields_upd_150, schema_Fields_upd_150, type_Fields_upd_150, { expectedResponseCodes: [200, 201, 204] });

  verifyFieldsExists(collection_Fields_150);
  // -> Deleting Leaf Fields (Standard)
  deleteField(collection_Fields_150, id_Fields_150);
  verifyFieldsDoesNotExist(collection_Fields_150);

});

bthread("crud:Files:linear:1", function () {
  // -> Creating Files
  let Fields_Files_160 = "Fields_Files_160_" + Math.floor(Math.random()*1000);
  let Filter_Files_160 = "Filter_Files_160_" + Math.floor(Math.random()*1000);
  let Limit_Files_160 = "Limit_Files_160_" + Math.floor(Math.random()*1000);
  let Meta_Files_160 = "Meta_Files_160_" + Math.floor(Math.random()*1000);
  let Offset_Files_160 = "Offset_Files_160_" + Math.floor(Math.random()*1000);
  let Search_Files_160 = "Search_Files_160_" + Math.floor(Math.random()*1000);
  let Sort_Files_160 = "Sort_Files_160_" + Math.floor(Math.random()*1000);
  let data_Files_160 = "data_Files_160_" + Math.floor(Math.random()*1000);
  let description_Files_160 = "description_Files_160_" + Math.floor(Math.random()*1000);
  let filename_download_Files_160 = "filename_download_Files_160_" + Math.floor(Math.random()*1000);
  let folder_Files_160 = "folder_Files_160_" + Math.floor(Math.random()*1000);
  let id_Files_160 = 160 + Math.floor(Math.random() * 99);
  let tags_Files_160 = [];
  let title_Files_160 = "title_Files_160_" + Math.floor(Math.random()*1000);
  createFile(Fields_Files_160, Filter_Files_160, Limit_Files_160, Meta_Files_160, Offset_Files_160, Search_Files_160, Sort_Files_160, data_Files_160, description_Files_160, filename_download_Files_160, folder_Files_160, id_Files_160, tags_Files_160, title_Files_160, { expectedResponseCodes: [200, 201, 204] });

  verifyFilesExists(id_Files_160);
  // -> Updating Files
  let Fields_Files_upd_160 = "Fields_Files_upd_160_" + Math.floor(Math.random()*1000);
  let Filter_Files_upd_160 = "Filter_Files_upd_160_" + Math.floor(Math.random()*1000);
  let Limit_Files_upd_160 = "Limit_Files_upd_160_" + Math.floor(Math.random()*1000);
  let Meta_Files_upd_160 = "Meta_Files_upd_160_" + Math.floor(Math.random()*1000);
  let Offset_Files_upd_160 = "Offset_Files_upd_160_" + Math.floor(Math.random()*1000);
  let Search_Files_upd_160 = "Search_Files_upd_160_" + Math.floor(Math.random()*1000);
  let Sort_Files_upd_160 = "Sort_Files_upd_160_" + Math.floor(Math.random()*1000);
  let data_Files_upd_160 = "data_Files_upd_160_" + Math.floor(Math.random()*1000);
  let description_Files_upd_160 = "description_Files_upd_160_" + Math.floor(Math.random()*1000);
  let filename_download_Files_upd_160 = "filename_download_Files_upd_160_" + Math.floor(Math.random()*1000);
  let folder_Files_upd_160 = "folder_Files_upd_160_" + Math.floor(Math.random()*1000);
  let id_Files_upd_160 = id_Files_160;
  let tags_Files_upd_160 = [];
  let title_Files_upd_160 = "title_Files_upd_160_" + Math.floor(Math.random()*1000);
  updateFile(Fields_Files_upd_160, Filter_Files_upd_160, Limit_Files_upd_160, Meta_Files_upd_160, Offset_Files_upd_160, Search_Files_upd_160, Sort_Files_upd_160, data_Files_upd_160, description_Files_upd_160, filename_download_Files_upd_160, folder_Files_upd_160, id_Files_upd_160, tags_Files_upd_160, title_Files_upd_160, { expectedResponseCodes: [200, 201, 204] });

  verifyFilesExists(id_Files_160);
  // -> Deleting Leaf Files (Standard)
  deleteFile(id_Files_160);
  verifyFilesDoesNotExist(id_Files_160);

});

bthread("crud:Flows:linear:1", function () {
  // -> Creating Flows
  let Fields_Flows_170 = "Fields_Flows_170_" + Math.floor(Math.random()*1000);
  let Meta_Flows_170 = "Meta_Flows_170_" + Math.floor(Math.random()*1000);
  let data_Flows_170 = { "id": 1, "name": "data_Flows_170_obj" };
  let id_Flows_170 = 170 + Math.floor(Math.random() * 99);
  createFlow(Fields_Flows_170, Meta_Flows_170, data_Flows_170, id_Flows_170, { expectedResponseCodes: [200, 201, 204] });

  verifyFlowsExists(id_Flows_170);
  // -> Updating Flows
  let Fields_Flows_upd_170 = "Fields_Flows_upd_170_" + Math.floor(Math.random()*1000);
  let Meta_Flows_upd_170 = "Meta_Flows_upd_170_" + Math.floor(Math.random()*1000);
  let data_Flows_upd_170 = { "id": 1, "name": "data_Flows_upd_170_obj" };
  let id_Flows_upd_170 = id_Flows_170;
  updateFlow(Fields_Flows_upd_170, Meta_Flows_upd_170, data_Flows_upd_170, id_Flows_upd_170, { expectedResponseCodes: [200, 201, 204] });

  verifyFlowsExists(id_Flows_170);
  // -> Deleting Leaf Flows (Standard)
  deleteFlow(id_Flows_170);
  verifyFlowsDoesNotExist(id_Flows_170);

});

bthread("crud:Folders:linear:1", function () {
  // -> Creating Folders
  let Fields_Folders_180 = "Fields_Folders_180_" + Math.floor(Math.random()*1000);
  let Filter_Folders_180 = "Filter_Folders_180_" + Math.floor(Math.random()*1000);
  let Limit_Folders_180 = 180 + Math.floor(Math.random() * 99);
  let Meta_Folders_180 = "Meta_Folders_180_" + Math.floor(Math.random()*1000);
  let Offset_Folders_180 = 180 + Math.floor(Math.random() * 99);
  let Search_Folders_180 = "Search_Folders_180_" + Math.floor(Math.random()*1000);
  let Sort_Folders_180 = "Sort_Folders_180_" + Math.floor(Math.random()*1000);
  let id_Folders_180 = 180 + Math.floor(Math.random() * 99);
  let name_Folders_180 = "name_Folders_180_" + Math.floor(Math.random()*1000);
  let parent_Folders_180 = 180 + Math.floor(Math.random() * 99);
  createFolder(Fields_Folders_180, Filter_Folders_180, Limit_Folders_180, Meta_Folders_180, Offset_Folders_180, Search_Folders_180, Sort_Folders_180, id_Folders_180, name_Folders_180, parent_Folders_180, { expectedResponseCodes: [200, 201, 204] });

  verifyFoldersExists(id_Folders_180);
  // -> Updating Folders
  let Fields_Folders_upd_180 = "Fields_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Filter_Folders_upd_180 = "Filter_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Limit_Folders_upd_180 = 180 + Math.floor(Math.random() * 99);
  let Meta_Folders_upd_180 = "Meta_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Offset_Folders_upd_180 = 180 + Math.floor(Math.random() * 99);
  let Search_Folders_upd_180 = "Search_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Sort_Folders_upd_180 = "Sort_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let id_Folders_upd_180 = id_Folders_180;
  let name_Folders_upd_180 = "name_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let parent_Folders_upd_180 = 180 + Math.floor(Math.random() * 99);
  updateFolder(Fields_Folders_upd_180, Filter_Folders_upd_180, Limit_Folders_upd_180, Meta_Folders_upd_180, Offset_Folders_upd_180, Search_Folders_upd_180, Sort_Folders_upd_180, id_Folders_upd_180, name_Folders_upd_180, parent_Folders_upd_180, { expectedResponseCodes: [200, 201, 204] });

  verifyFoldersExists(id_Folders_180);
  // -> Deleting Leaf Folders (Standard)
  deleteFolder(id_Folders_180);
  verifyFoldersDoesNotExist(id_Folders_180);

});

bthread("crud:Operations:linear:1", function () {
  // -> Creating Operations
  let Fields_Operations_190 = "Fields_Operations_190_" + Math.floor(Math.random()*1000);
  let Meta_Operations_190 = "Meta_Operations_190_" + Math.floor(Math.random()*1000);
  let UUId_Operations_190 = "UUId_Operations_190_" + Math.floor(Math.random()*1000);
  let data_Operations_190 = "data_Operations_190_" + Math.floor(Math.random()*1000);
  let id_Operations_190 = 190 + Math.floor(Math.random() * 99);
  let keys_Operations_190 = [];
  createOperation(Fields_Operations_190, Meta_Operations_190, UUId_Operations_190, data_Operations_190, id_Operations_190, keys_Operations_190, { expectedResponseCodes: [200, 201, 204] });

  verifyOperationsExists(id_Operations_190);
  // -> Updating Operations
  let Fields_Operations_upd_190 = "Fields_Operations_upd_190_" + Math.floor(Math.random()*1000);
  let Meta_Operations_upd_190 = "Meta_Operations_upd_190_" + Math.floor(Math.random()*1000);
  let UUId_Operations_upd_190 = "UUId_Operations_upd_190_" + Math.floor(Math.random()*1000);
  let data_Operations_upd_190 = "data_Operations_upd_190_" + Math.floor(Math.random()*1000);
  let id_Operations_upd_190 = id_Operations_190;
  let keys_Operations_upd_190 = [];
  updateOperations(Fields_Operations_upd_190, Meta_Operations_upd_190, UUId_Operations_upd_190, data_Operations_upd_190, id_Operations_upd_190, keys_Operations_upd_190, { expectedResponseCodes: [200, 201, 204] });

  verifyOperationsExists(id_Operations_190);
  // -> Deleting Leaf Operations (Standard)
  deleteOperations(id_Operations_190);
  verifyOperationsDoesNotExist(id_Operations_190);

});

bthread("crud:Permissions:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Roles"] = matchAnyRolesAdded();
  let pkMap = {"Collections": "id", "Roles": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let RolesId = captured["Roles"];
  // -> Creating Permissions
  let Fields_Permissions_200 = "Fields_Permissions_200_" + Math.floor(Math.random()*1000);
  let Filter_Permissions_200 = "Filter_Permissions_200_" + Math.floor(Math.random()*1000);
  let Id_Permissions_200 = 200 + Math.floor(Math.random() * 99);
  let Limit_Permissions_200 = "Limit_Permissions_200_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_200 = "Meta_Permissions_200_" + Math.floor(Math.random()*1000);
  let Offset_Permissions_200 = "Offset_Permissions_200_" + Math.floor(Math.random()*1000);
  let Page_Permissions_200 = "Page_Permissions_200_" + Math.floor(Math.random()*1000);
  let Search_Permissions_200 = "Search_Permissions_200_" + Math.floor(Math.random()*1000);
  let Sort_Permissions_200 = "Sort_Permissions_200_" + Math.floor(Math.random()*1000);
  let collection_Permissions_200 = { "id": 1, "name": "collection_Permissions_200_obj" };
  let comment_Permissions_200 = "comment_Permissions_200_" + Math.floor(Math.random()*1000);
  let create_Permissions_200 = "create_Permissions_200_" + Math.floor(Math.random()*1000);
  let data_Permissions_200 = { "id": 1, "name": "data_Permissions_200_obj" };
  let _delete_Permissions_200 = "_delete_Permissions_200_" + Math.floor(Math.random()*1000);
  let explain_Permissions_200 = "explain_Permissions_200_" + Math.floor(Math.random()*1000);
  let id_Permissions_200 = RolesId;
  let keys_Permissions_200 = [];
  let read_Permissions_200 = "read_Permissions_200_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_200 = { "id": 1, "name": "read_field_blacklist_Permissions_200_obj" };
  let role_Permissions_200 = { "id": 1, "name": "role_Permissions_200_obj" };
  let status_Permissions_200 = { "id": 1, "name": "status_Permissions_200_obj" };
  let status_blacklist_Permissions_200 = { "id": 1, "name": "status_blacklist_Permissions_200_obj" };
  let update_Permissions_200 = "2025-01-25T12:00:00Z";
  let write_field_blacklist_Permissions_200 = { "id": 1, "name": "write_field_blacklist_Permissions_200_obj" };
  createPermission(Fields_Permissions_200, Filter_Permissions_200, Id_Permissions_200, Limit_Permissions_200, Meta_Permissions_200, Offset_Permissions_200, Page_Permissions_200, Search_Permissions_200, Sort_Permissions_200, collection_Permissions_200, comment_Permissions_200, create_Permissions_200, data_Permissions_200, _delete_Permissions_200, explain_Permissions_200, id_Permissions_200, keys_Permissions_200, read_Permissions_200, read_field_blacklist_Permissions_200, role_Permissions_200, status_Permissions_200, status_blacklist_Permissions_200, update_Permissions_200, write_field_blacklist_Permissions_200, { expectedResponseCodes: [200, 201, 204] });

  verifyPermissionsExists(id_Permissions_200);
  // -> Updating Permissions
  let Fields_Permissions_upd_200 = "Fields_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Filter_Permissions_upd_200 = "Filter_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Id_Permissions_upd_200 = 200 + Math.floor(Math.random() * 99);
  let Limit_Permissions_upd_200 = "Limit_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_upd_200 = "Meta_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Offset_Permissions_upd_200 = "Offset_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Page_Permissions_upd_200 = "Page_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Search_Permissions_upd_200 = "Search_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Sort_Permissions_upd_200 = "Sort_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let collection_Permissions_upd_200 = { "id": 1, "name": "collection_Permissions_upd_200_obj" };
  let comment_Permissions_upd_200 = "comment_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let create_Permissions_upd_200 = "create_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let data_Permissions_upd_200 = { "id": 1, "name": "data_Permissions_upd_200_obj" };
  let _delete_Permissions_upd_200 = "_delete_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let explain_Permissions_upd_200 = "explain_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let id_Permissions_upd_200 = id_Permissions_200;
  let keys_Permissions_upd_200 = [];
  let read_Permissions_upd_200 = "read_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_upd_200 = { "id": 1, "name": "read_field_blacklist_Permissions_upd_200_obj" };
  let role_Permissions_upd_200 = { "id": 1, "name": "role_Permissions_upd_200_obj" };
  let status_Permissions_upd_200 = { "id": 1, "name": "status_Permissions_upd_200_obj" };
  let status_blacklist_Permissions_upd_200 = { "id": 1, "name": "status_blacklist_Permissions_upd_200_obj" };
  let update_Permissions_upd_200 = "2025-01-25T12:00:00Z";
  let write_field_blacklist_Permissions_upd_200 = { "id": 1, "name": "write_field_blacklist_Permissions_upd_200_obj" };
  updatePermissions(Fields_Permissions_upd_200, Filter_Permissions_upd_200, Id_Permissions_upd_200, Limit_Permissions_upd_200, Meta_Permissions_upd_200, Offset_Permissions_upd_200, Page_Permissions_upd_200, Search_Permissions_upd_200, Sort_Permissions_upd_200, collection_Permissions_upd_200, comment_Permissions_upd_200, create_Permissions_upd_200, data_Permissions_upd_200, _delete_Permissions_upd_200, explain_Permissions_upd_200, id_Permissions_upd_200, keys_Permissions_upd_200, read_Permissions_upd_200, read_field_blacklist_Permissions_upd_200, role_Permissions_upd_200, status_Permissions_upd_200, status_blacklist_Permissions_upd_200, update_Permissions_upd_200, write_field_blacklist_Permissions_upd_200, { expectedResponseCodes: [200, 201, 204] });

  verifyPermissionsExists(id_Permissions_200);
  // -> Deleting Leaf Permissions (Standard)
  deletePermissions(id_Permissions_200);
  verifyPermissionsDoesNotExist(id_Permissions_200);

});

bthread("crud:Relations:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Relations
  let Fields_Relations_210 = "Fields_Relations_210_" + Math.floor(Math.random()*1000);
  let Filter_Relations_210 = "Filter_Relations_210_" + Math.floor(Math.random()*1000);
  let Id_Relations_210 = 210 + Math.floor(Math.random() * 99);
  let Limit_Relations_210 = 210 + Math.floor(Math.random() * 99);
  let Meta_Relations_210 = "Meta_Relations_210_" + Math.floor(Math.random()*1000);
  let Offset_Relations_210 = 210 + Math.floor(Math.random() * 99);
  let Page_Relations_210 = 210 + Math.floor(Math.random() * 99);
  let Search_Relations_210 = "Search_Relations_210_" + Math.floor(Math.random()*1000);
  let Sort_Relations_210 = "Sort_Relations_210_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_210 = "collection_many_Relations_210_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_210 = "collection_one_Relations_210_" + Math.floor(Math.random()*1000);
  let field_many_Relations_210 = "field_many_Relations_210_" + Math.floor(Math.random()*1000);
  let field_one_Relations_210 = "field_one_Relations_210_" + Math.floor(Math.random()*1000);
  let id_Relations_210 = CollectionsId;
  let junction_field_Relations_210 = "junction_field_Relations_210_" + Math.floor(Math.random()*1000);
  createRelation(Fields_Relations_210, Filter_Relations_210, Id_Relations_210, Limit_Relations_210, Meta_Relations_210, Offset_Relations_210, Page_Relations_210, Search_Relations_210, Sort_Relations_210, collection_many_Relations_210, collection_one_Relations_210, field_many_Relations_210, field_one_Relations_210, id_Relations_210, junction_field_Relations_210, { expectedResponseCodes: [200, 201, 204] });

  verifyRelationsExists(id_Relations_210);
  // -> Updating Relations
  let Fields_Relations_upd_210 = "Fields_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Filter_Relations_upd_210 = "Filter_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Id_Relations_upd_210 = 210 + Math.floor(Math.random() * 99);
  let Limit_Relations_upd_210 = 210 + Math.floor(Math.random() * 99);
  let Meta_Relations_upd_210 = "Meta_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Offset_Relations_upd_210 = 210 + Math.floor(Math.random() * 99);
  let Page_Relations_upd_210 = 210 + Math.floor(Math.random() * 99);
  let Search_Relations_upd_210 = "Search_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Sort_Relations_upd_210 = "Sort_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_upd_210 = "collection_many_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_upd_210 = "collection_one_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let field_many_Relations_upd_210 = "field_many_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let field_one_Relations_upd_210 = "field_one_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let id_Relations_upd_210 = id_Relations_210;
  let junction_field_Relations_upd_210 = "junction_field_Relations_upd_210_" + Math.floor(Math.random()*1000);
  updateRelation(Fields_Relations_upd_210, Filter_Relations_upd_210, Id_Relations_upd_210, Limit_Relations_upd_210, Meta_Relations_upd_210, Offset_Relations_upd_210, Page_Relations_upd_210, Search_Relations_upd_210, Sort_Relations_upd_210, collection_many_Relations_upd_210, collection_one_Relations_upd_210, field_many_Relations_upd_210, field_one_Relations_upd_210, id_Relations_upd_210, junction_field_Relations_upd_210, { expectedResponseCodes: [200, 201, 204] });

  verifyRelationsExists(id_Relations_210);
  // -> Deleting Leaf Relations (Standard)
  deleteRelation(id_Relations_210);
  verifyRelationsDoesNotExist(id_Relations_210);

});

bthread("crud:Roles:linear:1", function () {
  // -> Creating Roles
  let Fields_Roles_220 = "Fields_Roles_220_" + Math.floor(Math.random()*1000);
  let Filter_Roles_220 = "Filter_Roles_220_" + Math.floor(Math.random()*1000);
  let Limit_Roles_220 = 220 + Math.floor(Math.random() * 99);
  let Meta_Roles_220 = "Meta_Roles_220_" + Math.floor(Math.random()*1000);
  let Offset_Roles_220 = 220 + Math.floor(Math.random() * 99);
  let Page_Roles_220 = 220 + Math.floor(Math.random() * 99);
  let Search_Roles_220 = "Search_Roles_220_" + Math.floor(Math.random()*1000);
  let Sort_Roles_220 = "Sort_Roles_220_" + Math.floor(Math.random()*1000);
  let description_Roles_220 = "description_Roles_220_" + Math.floor(Math.random()*1000);
  let enforce_tfa_Roles_220 = true;
  let external_id_Roles_220 = "external_id_Roles_220_" + Math.floor(Math.random()*1000);
  let id_Roles_220 = 220 + Math.floor(Math.random() * 99);
  let ip_access_Roles_220 = [];
  let module_listing_Roles_220 = "module_listing_Roles_220_" + Math.floor(Math.random()*1000);
  let name_Roles_220 = "name_Roles_220_" + Math.floor(Math.random()*1000);
  createRole(Fields_Roles_220, Filter_Roles_220, Limit_Roles_220, Meta_Roles_220, Offset_Roles_220, Page_Roles_220, Search_Roles_220, Sort_Roles_220, description_Roles_220, enforce_tfa_Roles_220, external_id_Roles_220, id_Roles_220, ip_access_Roles_220, module_listing_Roles_220, name_Roles_220, { expectedResponseCodes: [200, 201, 204] });

  verifyRolesExists(id_Roles_220);
  // -> Updating Roles
  let Fields_Roles_upd_220 = "Fields_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Filter_Roles_upd_220 = "Filter_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Limit_Roles_upd_220 = 220 + Math.floor(Math.random() * 99);
  let Meta_Roles_upd_220 = "Meta_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Offset_Roles_upd_220 = 220 + Math.floor(Math.random() * 99);
  let Page_Roles_upd_220 = 220 + Math.floor(Math.random() * 99);
  let Search_Roles_upd_220 = "Search_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Sort_Roles_upd_220 = "Sort_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let description_Roles_upd_220 = "description_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let enforce_tfa_Roles_upd_220 = true;
  let external_id_Roles_upd_220 = "external_id_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let id_Roles_upd_220 = id_Roles_220;
  let ip_access_Roles_upd_220 = [];
  let module_listing_Roles_upd_220 = "module_listing_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let name_Roles_upd_220 = "name_Roles_upd_220_" + Math.floor(Math.random()*1000);
  updateRole(Fields_Roles_upd_220, Filter_Roles_upd_220, Limit_Roles_upd_220, Meta_Roles_upd_220, Offset_Roles_upd_220, Page_Roles_upd_220, Search_Roles_upd_220, Sort_Roles_upd_220, description_Roles_upd_220, enforce_tfa_Roles_upd_220, external_id_Roles_upd_220, id_Roles_upd_220, ip_access_Roles_upd_220, module_listing_Roles_upd_220, name_Roles_upd_220, { expectedResponseCodes: [200, 201, 204] });

  verifyRolesExists(id_Roles_220);
  // -> Deleting Parent Roles (Relational Intent Race)
  deleteRole(id_Roles_220);

});

bthread("crud:Schema:linear:1", function () {
  // -> Creating Schema
  let Export_Schema_230 = "Export_Schema_230_" + Math.floor(Math.random()*1000);
  let data_Schema_230 = "data_Schema_230_" + Math.floor(Math.random()*1000);
  let force_Schema_230 = true;
  let id_Schema_230 = 230 + Math.floor(Math.random() * 99);
  schemaDiff(Export_Schema_230, data_Schema_230, force_Schema_230, id_Schema_230, { expectedResponseCodes: [200, 201, 204] });

  verifySchemaExists(id_Schema_230);
  verifySchemaExists(id_Schema_230);
});

bthread("crud:Users:linear:1", function () {
  // -> Creating Users
  let Fields_Users_240 = { "id": 1, "name": "Fields_Users_240_obj" };
  let Filter_Users_240 = "Filter_Users_240_" + Math.floor(Math.random()*1000);
  let Limit_Users_240 = "Limit_Users_240_" + Math.floor(Math.random()*1000);
  let Meta_Users_240 = { "id": 1, "name": "Meta_Users_240_obj" };
  let Offset_Users_240 = "Offset_Users_240_" + Math.floor(Math.random()*1000);
  let Search_Users_240 = "Search_Users_240_" + Math.floor(Math.random()*1000);
  let Sort_Users_240 = "Sort_Users_240_" + Math.floor(Math.random()*1000);
  let UUId_Users_240 = "UUId_Users_240_" + Math.floor(Math.random()*1000);
  let id_Users_240 = 240 + Math.floor(Math.random() * 99);
  let last_page_Users_240 = "last_page_Users_240_" + Math.floor(Math.random()*1000);
  let password_Users_240 = "password_Users_240_" + Math.floor(Math.random()*1000);
  let token_Users_240 = "token_Users_240_" + Math.floor(Math.random()*1000);
  acceptInvite(Fields_Users_240, Filter_Users_240, Limit_Users_240, Meta_Users_240, Offset_Users_240, Search_Users_240, Sort_Users_240, UUId_Users_240, id_Users_240, last_page_Users_240, password_Users_240, token_Users_240, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_240);
  // -> Updating Users
  let Fields_Users_upd_240 = { "id": 1, "name": "Fields_Users_upd_240_obj" };
  let Filter_Users_upd_240 = "Filter_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Limit_Users_upd_240 = "Limit_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Meta_Users_upd_240 = { "id": 1, "name": "Meta_Users_upd_240_obj" };
  let Offset_Users_upd_240 = "Offset_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Search_Users_upd_240 = "Search_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Sort_Users_upd_240 = "Sort_Users_upd_240_" + Math.floor(Math.random()*1000);
  let UUId_Users_upd_240 = "UUId_Users_upd_240_" + Math.floor(Math.random()*1000);
  let id_Users_upd_240 = id_Users_240;
  let last_page_Users_upd_240 = "last_page_Users_upd_240_" + Math.floor(Math.random()*1000);
  let password_Users_upd_240 = "password_Users_upd_240_" + Math.floor(Math.random()*1000);
  let token_Users_upd_240 = "token_Users_upd_240_" + Math.floor(Math.random()*1000);
  updateMe(Fields_Users_upd_240, Filter_Users_upd_240, Limit_Users_upd_240, Meta_Users_upd_240, Offset_Users_upd_240, Search_Users_upd_240, Sort_Users_upd_240, UUId_Users_upd_240, id_Users_upd_240, last_page_Users_upd_240, password_Users_upd_240, token_Users_upd_240, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_240);
  // -> Deleting Leaf Users (Standard)
  deleteUser(id_Users_240);
  verifyUsersDoesNotExist(id_Users_240);

});

bthread("crud:Utilities:linear:1", function () {
  // -> Creating Utilities
  let id_Utilities_250 = 250 + Math.floor(Math.random() * 99);
  let length_Utilities_250 = 250 + Math.floor(Math.random() * 99);
  clearCache(id_Utilities_250, length_Utilities_250, { expectedResponseCodes: [200, 201, 204] });

  verifyUtilitiesExists(id_Utilities_250);
  verifyUtilitiesExists(id_Utilities_250);
});

bthread("crud:Versions:linear:1", function () {
  // -> Creating Versions
  let Fields_Versions_260 = "Fields_Versions_260_" + Math.floor(Math.random()*1000);
  let Filter_Versions_260 = "Filter_Versions_260_" + Math.floor(Math.random()*1000);
  let Limit_Versions_260 = 260 + Math.floor(Math.random() * 99);
  let Meta_Versions_260 = "Meta_Versions_260_" + Math.floor(Math.random()*1000);
  let Offset_Versions_260 = 260 + Math.floor(Math.random() * 99);
  let Search_Versions_260 = "Search_Versions_260_" + Math.floor(Math.random()*1000);
  let Sort_Versions_260 = "Sort_Versions_260_" + Math.floor(Math.random()*1000);
  let UUId_Versions_260 = "UUId_Versions_260_" + Math.floor(Math.random()*1000);
  let data_Versions_260 = "data_Versions_260_" + Math.floor(Math.random()*1000);
  let fields_Versions_260 = "fields_Versions_260_" + Math.floor(Math.random()*1000);
  let id_Versions_260 = 260 + Math.floor(Math.random() * 99);
  let mainHash_Versions_260 = "mainHash_Versions_260_" + Math.floor(Math.random()*1000);
  promoteContentVersion(Fields_Versions_260, Filter_Versions_260, Limit_Versions_260, Meta_Versions_260, Offset_Versions_260, Search_Versions_260, Sort_Versions_260, UUId_Versions_260, data_Versions_260, fields_Versions_260, id_Versions_260, mainHash_Versions_260, { expectedResponseCodes: [200, 201, 204] });

  verifyVersionsExists(id_Versions_260);
  // -> Updating Versions
  let Fields_Versions_upd_260 = "Fields_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Filter_Versions_upd_260 = "Filter_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Limit_Versions_upd_260 = 260 + Math.floor(Math.random() * 99);
  let Meta_Versions_upd_260 = "Meta_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Offset_Versions_upd_260 = 260 + Math.floor(Math.random() * 99);
  let Search_Versions_upd_260 = "Search_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Sort_Versions_upd_260 = "Sort_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let UUId_Versions_upd_260 = "UUId_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let data_Versions_upd_260 = "data_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let fields_Versions_upd_260 = "fields_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let id_Versions_upd_260 = id_Versions_260;
  let mainHash_Versions_upd_260 = "mainHash_Versions_upd_260_" + Math.floor(Math.random()*1000);
  updateContentVersion(Fields_Versions_upd_260, Filter_Versions_upd_260, Limit_Versions_upd_260, Meta_Versions_upd_260, Offset_Versions_upd_260, Search_Versions_upd_260, Sort_Versions_upd_260, UUId_Versions_upd_260, data_Versions_upd_260, fields_Versions_upd_260, id_Versions_upd_260, mainHash_Versions_upd_260, { expectedResponseCodes: [200, 201, 204] });

  verifyVersionsExists(id_Versions_260);
  // -> Deleting Leaf Versions (Standard)
  deleteContentVersion(id_Versions_260);
  verifyVersionsDoesNotExist(id_Versions_260);

});

bthread("crud:Webhooks:linear:1", function () {
  // -> Creating Webhooks
  let actions_Webhooks_270 = "actions_Webhooks_270_" + Math.floor(Math.random()*1000);
  let data_Webhooks_270 = true;
  let id_Webhooks_270 = 270 + Math.floor(Math.random() * 99);
  let method_Webhooks_270 = "method_Webhooks_270_" + Math.floor(Math.random()*1000);
  let name_Webhooks_270 = "name_Webhooks_270_" + Math.floor(Math.random()*1000);
  let status_Webhooks_270 = "status_Webhooks_270_" + Math.floor(Math.random()*1000);
  let system_collections_Webhooks_270 = "system_collections_Webhooks_270_" + Math.floor(Math.random()*1000);
  let url_Webhooks_270 = "url_Webhooks_270_" + Math.floor(Math.random()*1000);
  createWebhook(actions_Webhooks_270, data_Webhooks_270, id_Webhooks_270, method_Webhooks_270, name_Webhooks_270, status_Webhooks_270, system_collections_Webhooks_270, url_Webhooks_270, { expectedResponseCodes: [200, 201, 204] });

  verifyWebhooksExists(id_Webhooks_270);
  // -> Updating Webhooks
  let actions_Webhooks_upd_270 = "actions_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  let data_Webhooks_upd_270 = true;
  let id_Webhooks_upd_270 = id_Webhooks_270;
  let method_Webhooks_upd_270 = "method_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  let name_Webhooks_upd_270 = "name_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  let status_Webhooks_upd_270 = "status_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  let system_collections_Webhooks_upd_270 = "system_collections_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  let url_Webhooks_upd_270 = "url_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  updateWebhook(actions_Webhooks_upd_270, data_Webhooks_upd_270, id_Webhooks_upd_270, method_Webhooks_upd_270, name_Webhooks_upd_270, status_Webhooks_upd_270, system_collections_Webhooks_upd_270, url_Webhooks_upd_270, { expectedResponseCodes: [200, 201, 204] });

  verifyWebhooksExists(id_Webhooks_270);
  // -> Deleting Leaf Webhooks (Standard)
  deleteWebhook(id_Webhooks_270);
  verifyWebhooksDoesNotExist(id_Webhooks_270);

});

bthread("crud:Authentication:linear:2", function () {
  // -> Creating Authentication
  let password_Authentication_280 = "password_Authentication_280_" + Math.floor(Math.random()*1000);
  let provider_Authentication_280 = "provider_Authentication_280";
  let redirect_Authentication_280 = "redirect_Authentication_280_" + Math.floor(Math.random()*1000);
  let token_Authentication_280 = "token_Authentication_280_" + Math.floor(Math.random()*1000);
  passwordReset(password_Authentication_280, provider_Authentication_280, redirect_Authentication_280, token_Authentication_280, { expectedResponseCodes: [200, 201, 204] });

  verifyAuthenticationExists(provider_Authentication_280);
  verifyAuthenticationExists(provider_Authentication_280);
});

bthread("crud:Collections:linear:2", function () {
  // -> Creating Collections
  let Meta_Collections_290 = "Meta_Collections_290_" + Math.floor(Math.random()*1000);
  let Offset_Collections_290 = "Offset_Collections_290_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_290 = "archive_app_filter_Collections_290_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_290 = "archive_field_Collections_290_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_290 = "archive_value_Collections_290_" + Math.floor(Math.random()*1000);
  let collection_Collections_290 = "collection_Collections_290_" + Math.floor(Math.random()*1000);
  let display_template_Collections_290 = "display_template_Collections_290_" + Math.floor(Math.random()*1000);
  let fields_Collections_290 = [];
  let hidden_Collections_290 = true;
  let icon_Collections_290 = "icon_Collections_290_" + Math.floor(Math.random()*1000);
  let id_Collections_290 = 290 + Math.floor(Math.random() * 99);
  let meta_Collections_290 = { "id": 1, "name": "meta_Collections_290_obj" };
  let note_Collections_290 = "note_Collections_290_" + Math.floor(Math.random()*1000);
  let singleton_Collections_290 = true;
  let sort_field_Collections_290 = "sort_field_Collections_290_" + Math.floor(Math.random()*1000);
  let translation_Collections_290 = "translation_Collections_290_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_290 = "unarchive_value_Collections_290_" + Math.floor(Math.random()*1000);
  let versioning_Collections_290 = true;
  createCollection(Meta_Collections_290, Offset_Collections_290, archive_app_filter_Collections_290, archive_field_Collections_290, archive_value_Collections_290, collection_Collections_290, display_template_Collections_290, fields_Collections_290, hidden_Collections_290, icon_Collections_290, id_Collections_290, meta_Collections_290, note_Collections_290, singleton_Collections_290, sort_field_Collections_290, translation_Collections_290, unarchive_value_Collections_290, versioning_Collections_290, { expectedResponseCodes: [200, 201, 204] });

  verifyCollectionsExists(id_Collections_290);
  // -> Updating Collections
  let Meta_Collections_upd_290 = "Meta_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let Offset_Collections_upd_290 = "Offset_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_upd_290 = "archive_app_filter_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_upd_290 = "archive_field_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_upd_290 = "archive_value_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let collection_Collections_upd_290 = "collection_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let display_template_Collections_upd_290 = "display_template_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let fields_Collections_upd_290 = [];
  let hidden_Collections_upd_290 = true;
  let icon_Collections_upd_290 = "icon_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let id_Collections_upd_290 = id_Collections_290;
  let meta_Collections_upd_290 = { "id": 1, "name": "meta_Collections_upd_290_obj" };
  let note_Collections_upd_290 = "note_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let singleton_Collections_upd_290 = true;
  let sort_field_Collections_upd_290 = "sort_field_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let translation_Collections_upd_290 = "translation_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_upd_290 = "unarchive_value_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let versioning_Collections_upd_290 = true;
  updateCollection(Meta_Collections_upd_290, Offset_Collections_upd_290, archive_app_filter_Collections_upd_290, archive_field_Collections_upd_290, archive_value_Collections_upd_290, collection_Collections_upd_290, display_template_Collections_upd_290, fields_Collections_upd_290, hidden_Collections_upd_290, icon_Collections_upd_290, id_Collections_upd_290, meta_Collections_upd_290, note_Collections_upd_290, singleton_Collections_upd_290, sort_field_Collections_upd_290, translation_Collections_upd_290, unarchive_value_Collections_upd_290, versioning_Collections_upd_290, { expectedResponseCodes: [200, 201, 204] });

  verifyCollectionsExists(id_Collections_290);
  // -> Deleting Parent Collections (Relational Intent Race)
  deleteCollection(id_Collections_290);

});

bthread("crud:Items:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Items
  let Collection_Items_300 = "Collection_Items_300_" + Math.floor(Math.random()*1000);
  let Fields_Items_300 = "Fields_Items_300_" + Math.floor(Math.random()*1000);
  let Filter_Items_300 = "Filter_Items_300_" + Math.floor(Math.random()*1000);
  let Limit_Items_300 = "Limit_Items_300_" + Math.floor(Math.random()*1000);
  let Meta_Items_300 = "Meta_Items_300_" + Math.floor(Math.random()*1000);
  let Offset_Items_300 = "Offset_Items_300_" + Math.floor(Math.random()*1000);
  let Search_Items_300 = "Search_Items_300_" + Math.floor(Math.random()*1000);
  let Sort_Items_300 = "Sort_Items_300_" + Math.floor(Math.random()*1000);
  let collection_Items_300 = "collection_Items_300";
  createItem(Collection_Items_300, Fields_Items_300, Filter_Items_300, Limit_Items_300, Meta_Items_300, Offset_Items_300, Search_Items_300, Sort_Items_300, collection_Items_300, { expectedResponseCodes: [200, 201, 204] });

  verifyItemsExists(collection_Items_300);
  // -> Updating Items
  let Collection_Items_upd_300 = "Collection_Items_upd_300_" + Math.floor(Math.random()*1000);
  let Fields_Items_upd_300 = "Fields_Items_upd_300_" + Math.floor(Math.random()*1000);
  let Filter_Items_upd_300 = "Filter_Items_upd_300_" + Math.floor(Math.random()*1000);
  let Limit_Items_upd_300 = "Limit_Items_upd_300_" + Math.floor(Math.random()*1000);
  let Meta_Items_upd_300 = "Meta_Items_upd_300_" + Math.floor(Math.random()*1000);
  let Offset_Items_upd_300 = "Offset_Items_upd_300_" + Math.floor(Math.random()*1000);
  let Search_Items_upd_300 = "Search_Items_upd_300_" + Math.floor(Math.random()*1000);
  let Sort_Items_upd_300 = "Sort_Items_upd_300_" + Math.floor(Math.random()*1000);
  let collection_Items_upd_300 = collection_Items_300;
  updateItems(Collection_Items_upd_300, Fields_Items_upd_300, Filter_Items_upd_300, Limit_Items_upd_300, Meta_Items_upd_300, Offset_Items_upd_300, Search_Items_upd_300, Sort_Items_upd_300, collection_Items_upd_300, { expectedResponseCodes: [200, 201, 204] });

  verifyItemsExists(collection_Items_300);
  // -> Deleting Parent Items (Relational Intent Race)
  deleteItems(collection_Items_300);

});

bthread("crud:Presets:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Roles"] = matchAnyRolesAdded();
  let pkMap = {"Collections": "id", "Roles": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let RolesId = captured["Roles"];
  // -> Creating Presets
  let Fields_Presets_310 = "Fields_Presets_310_" + Math.floor(Math.random()*1000);
  let Filter_Presets_310 = "Filter_Presets_310_" + Math.floor(Math.random()*1000);
  let Id_Presets_310 = 310 + Math.floor(Math.random() * 99);
  let Limit_Presets_310 = "Limit_Presets_310_" + Math.floor(Math.random()*1000);
  let Meta_Presets_310 = "Meta_Presets_310_" + Math.floor(Math.random()*1000);
  let Offset_Presets_310 = "Offset_Presets_310_" + Math.floor(Math.random()*1000);
  let Page_Presets_310 = "Page_Presets_310_" + Math.floor(Math.random()*1000);
  let Search_Presets_310 = "Search_Presets_310_" + Math.floor(Math.random()*1000);
  let Sort_Presets_310 = "Sort_Presets_310_" + Math.floor(Math.random()*1000);
  let collection_Presets_310 = "collection_Presets_310_" + Math.floor(Math.random()*1000);
  let filters_Presets_310 = [];
  let id_Presets_310 = RolesId;
  let layout_Presets_310 = "layout_Presets_310_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_310 = "layout_options_Presets_310_" + Math.floor(Math.random()*1000);
  let layout_query_Presets_310 = "layout_query_Presets_310_" + Math.floor(Math.random()*1000);
  let role_Presets_310 = 310 + Math.floor(Math.random() * 99);
  let search_Presets_310 = "search_Presets_310_" + Math.floor(Math.random()*1000);
  let search_query_Presets_310 = "search_query_Presets_310_" + Math.floor(Math.random()*1000);
  let title_Presets_310 = "title_Presets_310_" + Math.floor(Math.random()*1000);
  let translation_Presets_310 = { "id": 1, "name": "translation_Presets_310_obj" };
  let view_options_Presets_310 = "view_options_Presets_310_" + Math.floor(Math.random()*1000);
  let view_query_Presets_310 = "view_query_Presets_310_" + Math.floor(Math.random()*1000);
  let view_type_Presets_310 = "view_type_Presets_310_" + Math.floor(Math.random()*1000);
  createPreset(Fields_Presets_310, Filter_Presets_310, Id_Presets_310, Limit_Presets_310, Meta_Presets_310, Offset_Presets_310, Page_Presets_310, Search_Presets_310, Sort_Presets_310, collection_Presets_310, filters_Presets_310, id_Presets_310, layout_Presets_310, layout_options_Presets_310, layout_query_Presets_310, role_Presets_310, search_Presets_310, search_query_Presets_310, title_Presets_310, translation_Presets_310, view_options_Presets_310, view_query_Presets_310, view_type_Presets_310, { expectedResponseCodes: [200, 201, 204] });

  verifyPresetsExists(id_Presets_310);
  // -> Updating Presets
  let Fields_Presets_upd_310 = "Fields_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Filter_Presets_upd_310 = "Filter_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Id_Presets_upd_310 = 310 + Math.floor(Math.random() * 99);
  let Limit_Presets_upd_310 = "Limit_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Meta_Presets_upd_310 = "Meta_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Offset_Presets_upd_310 = "Offset_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Page_Presets_upd_310 = "Page_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Search_Presets_upd_310 = "Search_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Sort_Presets_upd_310 = "Sort_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let collection_Presets_upd_310 = "collection_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let filters_Presets_upd_310 = [];
  let id_Presets_upd_310 = id_Presets_310;
  let layout_Presets_upd_310 = "layout_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_upd_310 = "layout_options_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let layout_query_Presets_upd_310 = "layout_query_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let role_Presets_upd_310 = 310 + Math.floor(Math.random() * 99);
  let search_Presets_upd_310 = "search_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let search_query_Presets_upd_310 = "search_query_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let title_Presets_upd_310 = "title_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let translation_Presets_upd_310 = { "id": 1, "name": "translation_Presets_upd_310_obj" };
  let view_options_Presets_upd_310 = "view_options_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let view_query_Presets_upd_310 = "view_query_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let view_type_Presets_upd_310 = "view_type_Presets_upd_310_" + Math.floor(Math.random()*1000);
  updatePreset(Fields_Presets_upd_310, Filter_Presets_upd_310, Id_Presets_upd_310, Limit_Presets_upd_310, Meta_Presets_upd_310, Offset_Presets_upd_310, Page_Presets_upd_310, Search_Presets_upd_310, Sort_Presets_upd_310, collection_Presets_upd_310, filters_Presets_upd_310, id_Presets_upd_310, layout_Presets_upd_310, layout_options_Presets_upd_310, layout_query_Presets_upd_310, role_Presets_upd_310, search_Presets_upd_310, search_query_Presets_upd_310, title_Presets_upd_310, translation_Presets_upd_310, view_options_Presets_upd_310, view_query_Presets_upd_310, view_type_Presets_upd_310, { expectedResponseCodes: [200, 201, 204] });

  verifyPresetsExists(id_Presets_310);
  // -> Deleting Leaf Presets (Standard)
  deletePreset(id_Presets_310);
  verifyPresetsDoesNotExist(id_Presets_310);

});

bthread("crud:Comments:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Items"] = matchAnyItemsAdded();
  let pkMap = {"Collections": "id", "Items": "collection"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let ItemsId = captured["Items"];
  // -> Creating Comments
  let collection_Comments_320 = ItemsId;
  let comment_Comments_320 = "comment_Comments_320_" + Math.floor(Math.random()*1000);
  let id_Comments_320 = CollectionsId;
  let item_Comments_320 = "item_Comments_320_" + Math.floor(Math.random()*1000);
  createComment(collection_Comments_320, comment_Comments_320, id_Comments_320, item_Comments_320, { expectedResponseCodes: [200, 201, 204] });

  verifyCommentsExists(id_Comments_320);
  // -> Updating Comments
  let collection_Comments_upd_320 = "collection_Comments_upd_320_" + Math.floor(Math.random()*1000);
  let comment_Comments_upd_320 = "comment_Comments_upd_320_" + Math.floor(Math.random()*1000);
  let id_Comments_upd_320 = id_Comments_320;
  let item_Comments_upd_320 = "item_Comments_upd_320_" + Math.floor(Math.random()*1000);
  updateComment(collection_Comments_upd_320, comment_Comments_upd_320, id_Comments_upd_320, item_Comments_upd_320, { expectedResponseCodes: [200, 201, 204] });

  verifyCommentsExists(id_Comments_320);
  // -> Deleting Leaf Comments (Standard)
  deleteComment(id_Comments_320);
  verifyCommentsDoesNotExist(id_Comments_320);

});

bthread("crud:Fields:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Fields
  let Sort_Fields_330 = "Sort_Fields_330_" + Math.floor(Math.random()*1000);
  let collection_Fields_330 = "collection_Fields_330";
  let datatype_Fields_330 = "datatype_Fields_330_" + Math.floor(Math.random()*1000);
  let field_Fields_330 = "field_Fields_330_" + Math.floor(Math.random()*1000);
  let id_Fields_330 = CollectionsId;
  let length_Fields_330 = 330 + Math.floor(Math.random() * 99);
  let meta_Fields_330 = { "id": 1, "name": "meta_Fields_330_obj" };
  let schema_Fields_330 = { "id": 1, "name": "schema_Fields_330_obj" };
  let type_Fields_330 = "type_Fields_330_" + Math.floor(Math.random()*1000);
  createField(Sort_Fields_330, collection_Fields_330, datatype_Fields_330, field_Fields_330, id_Fields_330, length_Fields_330, meta_Fields_330, schema_Fields_330, type_Fields_330, { expectedResponseCodes: [200, 201, 204] });

  verifyFieldsExists(collection_Fields_330);
  // -> Updating Fields
  let Sort_Fields_upd_330 = "Sort_Fields_upd_330_" + Math.floor(Math.random()*1000);
  let collection_Fields_upd_330 = collection_Fields_330;
  let datatype_Fields_upd_330 = "datatype_Fields_upd_330_" + Math.floor(Math.random()*1000);
  let field_Fields_upd_330 = "field_Fields_upd_330_" + Math.floor(Math.random()*1000);
  let id_Fields_upd_330 = 330 + Math.floor(Math.random() * 99);
  let length_Fields_upd_330 = 330 + Math.floor(Math.random() * 99);
  let meta_Fields_upd_330 = { "id": 1, "name": "meta_Fields_upd_330_obj" };
  let schema_Fields_upd_330 = { "id": 1, "name": "schema_Fields_upd_330_obj" };
  let type_Fields_upd_330 = "type_Fields_upd_330_" + Math.floor(Math.random()*1000);
  updateField(Sort_Fields_upd_330, collection_Fields_upd_330, datatype_Fields_upd_330, field_Fields_upd_330, id_Fields_upd_330, length_Fields_upd_330, meta_Fields_upd_330, schema_Fields_upd_330, type_Fields_upd_330, { expectedResponseCodes: [200, 201, 204] });

  verifyFieldsExists(collection_Fields_330);
  // -> Deleting Leaf Fields (Standard)
  deleteField(collection_Fields_330, id_Fields_330);
  verifyFieldsDoesNotExist(collection_Fields_330);

});

bthread("crud:Files:linear:2", function () {
  // -> Creating Files
  let Fields_Files_340 = "Fields_Files_340_" + Math.floor(Math.random()*1000);
  let Filter_Files_340 = "Filter_Files_340_" + Math.floor(Math.random()*1000);
  let Limit_Files_340 = "Limit_Files_340_" + Math.floor(Math.random()*1000);
  let Meta_Files_340 = "Meta_Files_340_" + Math.floor(Math.random()*1000);
  let Offset_Files_340 = "Offset_Files_340_" + Math.floor(Math.random()*1000);
  let Search_Files_340 = "Search_Files_340_" + Math.floor(Math.random()*1000);
  let Sort_Files_340 = "Sort_Files_340_" + Math.floor(Math.random()*1000);
  let data_Files_340 = "data_Files_340_" + Math.floor(Math.random()*1000);
  let description_Files_340 = "description_Files_340_" + Math.floor(Math.random()*1000);
  let filename_download_Files_340 = "filename_download_Files_340_" + Math.floor(Math.random()*1000);
  let folder_Files_340 = "folder_Files_340_" + Math.floor(Math.random()*1000);
  let id_Files_340 = 340 + Math.floor(Math.random() * 99);
  let tags_Files_340 = [];
  let title_Files_340 = "title_Files_340_" + Math.floor(Math.random()*1000);
  createFile(Fields_Files_340, Filter_Files_340, Limit_Files_340, Meta_Files_340, Offset_Files_340, Search_Files_340, Sort_Files_340, data_Files_340, description_Files_340, filename_download_Files_340, folder_Files_340, id_Files_340, tags_Files_340, title_Files_340, { expectedResponseCodes: [200, 201, 204] });

  verifyFilesExists(id_Files_340);
  // -> Updating Files
  let Fields_Files_upd_340 = "Fields_Files_upd_340_" + Math.floor(Math.random()*1000);
  let Filter_Files_upd_340 = "Filter_Files_upd_340_" + Math.floor(Math.random()*1000);
  let Limit_Files_upd_340 = "Limit_Files_upd_340_" + Math.floor(Math.random()*1000);
  let Meta_Files_upd_340 = "Meta_Files_upd_340_" + Math.floor(Math.random()*1000);
  let Offset_Files_upd_340 = "Offset_Files_upd_340_" + Math.floor(Math.random()*1000);
  let Search_Files_upd_340 = "Search_Files_upd_340_" + Math.floor(Math.random()*1000);
  let Sort_Files_upd_340 = "Sort_Files_upd_340_" + Math.floor(Math.random()*1000);
  let data_Files_upd_340 = "data_Files_upd_340_" + Math.floor(Math.random()*1000);
  let description_Files_upd_340 = "description_Files_upd_340_" + Math.floor(Math.random()*1000);
  let filename_download_Files_upd_340 = "filename_download_Files_upd_340_" + Math.floor(Math.random()*1000);
  let folder_Files_upd_340 = "folder_Files_upd_340_" + Math.floor(Math.random()*1000);
  let id_Files_upd_340 = id_Files_340;
  let tags_Files_upd_340 = [];
  let title_Files_upd_340 = "title_Files_upd_340_" + Math.floor(Math.random()*1000);
  updateFile(Fields_Files_upd_340, Filter_Files_upd_340, Limit_Files_upd_340, Meta_Files_upd_340, Offset_Files_upd_340, Search_Files_upd_340, Sort_Files_upd_340, data_Files_upd_340, description_Files_upd_340, filename_download_Files_upd_340, folder_Files_upd_340, id_Files_upd_340, tags_Files_upd_340, title_Files_upd_340, { expectedResponseCodes: [200, 201, 204] });

  verifyFilesExists(id_Files_340);
  // -> Deleting Leaf Files (Standard)
  deleteFile(id_Files_340);
  verifyFilesDoesNotExist(id_Files_340);

});

bthread("crud:Flows:linear:2", function () {
  // -> Creating Flows
  let Fields_Flows_350 = "Fields_Flows_350_" + Math.floor(Math.random()*1000);
  let Meta_Flows_350 = "Meta_Flows_350_" + Math.floor(Math.random()*1000);
  let data_Flows_350 = { "id": 1, "name": "data_Flows_350_obj" };
  let id_Flows_350 = 350 + Math.floor(Math.random() * 99);
  createFlow(Fields_Flows_350, Meta_Flows_350, data_Flows_350, id_Flows_350, { expectedResponseCodes: [200, 201, 204] });

  verifyFlowsExists(id_Flows_350);
  // -> Updating Flows
  let Fields_Flows_upd_350 = "Fields_Flows_upd_350_" + Math.floor(Math.random()*1000);
  let Meta_Flows_upd_350 = "Meta_Flows_upd_350_" + Math.floor(Math.random()*1000);
  let data_Flows_upd_350 = { "id": 1, "name": "data_Flows_upd_350_obj" };
  let id_Flows_upd_350 = id_Flows_350;
  updateFlow(Fields_Flows_upd_350, Meta_Flows_upd_350, data_Flows_upd_350, id_Flows_upd_350, { expectedResponseCodes: [200, 201, 204] });

  verifyFlowsExists(id_Flows_350);
  // -> Deleting Leaf Flows (Standard)
  deleteFlow(id_Flows_350);
  verifyFlowsDoesNotExist(id_Flows_350);

});

bthread("crud:Folders:linear:2", function () {
  // -> Creating Folders
  let Fields_Folders_360 = "Fields_Folders_360_" + Math.floor(Math.random()*1000);
  let Filter_Folders_360 = "Filter_Folders_360_" + Math.floor(Math.random()*1000);
  let Limit_Folders_360 = 360 + Math.floor(Math.random() * 99);
  let Meta_Folders_360 = "Meta_Folders_360_" + Math.floor(Math.random()*1000);
  let Offset_Folders_360 = 360 + Math.floor(Math.random() * 99);
  let Search_Folders_360 = "Search_Folders_360_" + Math.floor(Math.random()*1000);
  let Sort_Folders_360 = "Sort_Folders_360_" + Math.floor(Math.random()*1000);
  let id_Folders_360 = 360 + Math.floor(Math.random() * 99);
  let name_Folders_360 = "name_Folders_360_" + Math.floor(Math.random()*1000);
  let parent_Folders_360 = 360 + Math.floor(Math.random() * 99);
  createFolder(Fields_Folders_360, Filter_Folders_360, Limit_Folders_360, Meta_Folders_360, Offset_Folders_360, Search_Folders_360, Sort_Folders_360, id_Folders_360, name_Folders_360, parent_Folders_360, { expectedResponseCodes: [200, 201, 204] });

  verifyFoldersExists(id_Folders_360);
  // -> Updating Folders
  let Fields_Folders_upd_360 = "Fields_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Filter_Folders_upd_360 = "Filter_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Limit_Folders_upd_360 = 360 + Math.floor(Math.random() * 99);
  let Meta_Folders_upd_360 = "Meta_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Offset_Folders_upd_360 = 360 + Math.floor(Math.random() * 99);
  let Search_Folders_upd_360 = "Search_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Sort_Folders_upd_360 = "Sort_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let id_Folders_upd_360 = id_Folders_360;
  let name_Folders_upd_360 = "name_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let parent_Folders_upd_360 = 360 + Math.floor(Math.random() * 99);
  updateFolder(Fields_Folders_upd_360, Filter_Folders_upd_360, Limit_Folders_upd_360, Meta_Folders_upd_360, Offset_Folders_upd_360, Search_Folders_upd_360, Sort_Folders_upd_360, id_Folders_upd_360, name_Folders_upd_360, parent_Folders_upd_360, { expectedResponseCodes: [200, 201, 204] });

  verifyFoldersExists(id_Folders_360);
  // -> Deleting Leaf Folders (Standard)
  deleteFolder(id_Folders_360);
  verifyFoldersDoesNotExist(id_Folders_360);

});

bthread("crud:Operations:linear:2", function () {
  // -> Creating Operations
  let Fields_Operations_370 = "Fields_Operations_370_" + Math.floor(Math.random()*1000);
  let Meta_Operations_370 = "Meta_Operations_370_" + Math.floor(Math.random()*1000);
  let UUId_Operations_370 = "UUId_Operations_370_" + Math.floor(Math.random()*1000);
  let data_Operations_370 = "data_Operations_370_" + Math.floor(Math.random()*1000);
  let id_Operations_370 = 370 + Math.floor(Math.random() * 99);
  let keys_Operations_370 = [];
  createOperation(Fields_Operations_370, Meta_Operations_370, UUId_Operations_370, data_Operations_370, id_Operations_370, keys_Operations_370, { expectedResponseCodes: [200, 201, 204] });

  verifyOperationsExists(id_Operations_370);
  // -> Updating Operations
  let Fields_Operations_upd_370 = "Fields_Operations_upd_370_" + Math.floor(Math.random()*1000);
  let Meta_Operations_upd_370 = "Meta_Operations_upd_370_" + Math.floor(Math.random()*1000);
  let UUId_Operations_upd_370 = "UUId_Operations_upd_370_" + Math.floor(Math.random()*1000);
  let data_Operations_upd_370 = "data_Operations_upd_370_" + Math.floor(Math.random()*1000);
  let id_Operations_upd_370 = id_Operations_370;
  let keys_Operations_upd_370 = [];
  updateOperations(Fields_Operations_upd_370, Meta_Operations_upd_370, UUId_Operations_upd_370, data_Operations_upd_370, id_Operations_upd_370, keys_Operations_upd_370, { expectedResponseCodes: [200, 201, 204] });

  verifyOperationsExists(id_Operations_370);
  // -> Deleting Leaf Operations (Standard)
  deleteOperations(id_Operations_370);
  verifyOperationsDoesNotExist(id_Operations_370);

});

bthread("crud:Permissions:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Roles"] = matchAnyRolesAdded();
  let pkMap = {"Collections": "id", "Roles": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let RolesId = captured["Roles"];
  // -> Creating Permissions
  let Fields_Permissions_380 = "Fields_Permissions_380_" + Math.floor(Math.random()*1000);
  let Filter_Permissions_380 = "Filter_Permissions_380_" + Math.floor(Math.random()*1000);
  let Id_Permissions_380 = 380 + Math.floor(Math.random() * 99);
  let Limit_Permissions_380 = "Limit_Permissions_380_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_380 = "Meta_Permissions_380_" + Math.floor(Math.random()*1000);
  let Offset_Permissions_380 = "Offset_Permissions_380_" + Math.floor(Math.random()*1000);
  let Page_Permissions_380 = "Page_Permissions_380_" + Math.floor(Math.random()*1000);
  let Search_Permissions_380 = "Search_Permissions_380_" + Math.floor(Math.random()*1000);
  let Sort_Permissions_380 = "Sort_Permissions_380_" + Math.floor(Math.random()*1000);
  let collection_Permissions_380 = { "id": 1, "name": "collection_Permissions_380_obj" };
  let comment_Permissions_380 = "comment_Permissions_380_" + Math.floor(Math.random()*1000);
  let create_Permissions_380 = "create_Permissions_380_" + Math.floor(Math.random()*1000);
  let data_Permissions_380 = { "id": 1, "name": "data_Permissions_380_obj" };
  let _delete_Permissions_380 = "_delete_Permissions_380_" + Math.floor(Math.random()*1000);
  let explain_Permissions_380 = "explain_Permissions_380_" + Math.floor(Math.random()*1000);
  let id_Permissions_380 = RolesId;
  let keys_Permissions_380 = [];
  let read_Permissions_380 = "read_Permissions_380_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_380 = { "id": 1, "name": "read_field_blacklist_Permissions_380_obj" };
  let role_Permissions_380 = { "id": 1, "name": "role_Permissions_380_obj" };
  let status_Permissions_380 = { "id": 1, "name": "status_Permissions_380_obj" };
  let status_blacklist_Permissions_380 = { "id": 1, "name": "status_blacklist_Permissions_380_obj" };
  let update_Permissions_380 = "2025-01-25T12:00:00Z";
  let write_field_blacklist_Permissions_380 = { "id": 1, "name": "write_field_blacklist_Permissions_380_obj" };
  createPermission(Fields_Permissions_380, Filter_Permissions_380, Id_Permissions_380, Limit_Permissions_380, Meta_Permissions_380, Offset_Permissions_380, Page_Permissions_380, Search_Permissions_380, Sort_Permissions_380, collection_Permissions_380, comment_Permissions_380, create_Permissions_380, data_Permissions_380, _delete_Permissions_380, explain_Permissions_380, id_Permissions_380, keys_Permissions_380, read_Permissions_380, read_field_blacklist_Permissions_380, role_Permissions_380, status_Permissions_380, status_blacklist_Permissions_380, update_Permissions_380, write_field_blacklist_Permissions_380, { expectedResponseCodes: [200, 201, 204] });

  verifyPermissionsExists(id_Permissions_380);
  // -> Updating Permissions
  let Fields_Permissions_upd_380 = "Fields_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Filter_Permissions_upd_380 = "Filter_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Id_Permissions_upd_380 = 380 + Math.floor(Math.random() * 99);
  let Limit_Permissions_upd_380 = "Limit_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_upd_380 = "Meta_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Offset_Permissions_upd_380 = "Offset_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Page_Permissions_upd_380 = "Page_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Search_Permissions_upd_380 = "Search_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Sort_Permissions_upd_380 = "Sort_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let collection_Permissions_upd_380 = { "id": 1, "name": "collection_Permissions_upd_380_obj" };
  let comment_Permissions_upd_380 = "comment_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let create_Permissions_upd_380 = "create_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let data_Permissions_upd_380 = { "id": 1, "name": "data_Permissions_upd_380_obj" };
  let _delete_Permissions_upd_380 = "_delete_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let explain_Permissions_upd_380 = "explain_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let id_Permissions_upd_380 = id_Permissions_380;
  let keys_Permissions_upd_380 = [];
  let read_Permissions_upd_380 = "read_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_upd_380 = { "id": 1, "name": "read_field_blacklist_Permissions_upd_380_obj" };
  let role_Permissions_upd_380 = { "id": 1, "name": "role_Permissions_upd_380_obj" };
  let status_Permissions_upd_380 = { "id": 1, "name": "status_Permissions_upd_380_obj" };
  let status_blacklist_Permissions_upd_380 = { "id": 1, "name": "status_blacklist_Permissions_upd_380_obj" };
  let update_Permissions_upd_380 = "2025-01-25T12:00:00Z";
  let write_field_blacklist_Permissions_upd_380 = { "id": 1, "name": "write_field_blacklist_Permissions_upd_380_obj" };
  updatePermissions(Fields_Permissions_upd_380, Filter_Permissions_upd_380, Id_Permissions_upd_380, Limit_Permissions_upd_380, Meta_Permissions_upd_380, Offset_Permissions_upd_380, Page_Permissions_upd_380, Search_Permissions_upd_380, Sort_Permissions_upd_380, collection_Permissions_upd_380, comment_Permissions_upd_380, create_Permissions_upd_380, data_Permissions_upd_380, _delete_Permissions_upd_380, explain_Permissions_upd_380, id_Permissions_upd_380, keys_Permissions_upd_380, read_Permissions_upd_380, read_field_blacklist_Permissions_upd_380, role_Permissions_upd_380, status_Permissions_upd_380, status_blacklist_Permissions_upd_380, update_Permissions_upd_380, write_field_blacklist_Permissions_upd_380, { expectedResponseCodes: [200, 201, 204] });

  verifyPermissionsExists(id_Permissions_380);
  // -> Deleting Leaf Permissions (Standard)
  deletePermissions(id_Permissions_380);
  verifyPermissionsDoesNotExist(id_Permissions_380);

});

bthread("crud:Relations:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Relations
  let Fields_Relations_390 = "Fields_Relations_390_" + Math.floor(Math.random()*1000);
  let Filter_Relations_390 = "Filter_Relations_390_" + Math.floor(Math.random()*1000);
  let Id_Relations_390 = 390 + Math.floor(Math.random() * 99);
  let Limit_Relations_390 = 390 + Math.floor(Math.random() * 99);
  let Meta_Relations_390 = "Meta_Relations_390_" + Math.floor(Math.random()*1000);
  let Offset_Relations_390 = 390 + Math.floor(Math.random() * 99);
  let Page_Relations_390 = 390 + Math.floor(Math.random() * 99);
  let Search_Relations_390 = "Search_Relations_390_" + Math.floor(Math.random()*1000);
  let Sort_Relations_390 = "Sort_Relations_390_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_390 = "collection_many_Relations_390_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_390 = "collection_one_Relations_390_" + Math.floor(Math.random()*1000);
  let field_many_Relations_390 = "field_many_Relations_390_" + Math.floor(Math.random()*1000);
  let field_one_Relations_390 = "field_one_Relations_390_" + Math.floor(Math.random()*1000);
  let id_Relations_390 = CollectionsId;
  let junction_field_Relations_390 = "junction_field_Relations_390_" + Math.floor(Math.random()*1000);
  createRelation(Fields_Relations_390, Filter_Relations_390, Id_Relations_390, Limit_Relations_390, Meta_Relations_390, Offset_Relations_390, Page_Relations_390, Search_Relations_390, Sort_Relations_390, collection_many_Relations_390, collection_one_Relations_390, field_many_Relations_390, field_one_Relations_390, id_Relations_390, junction_field_Relations_390, { expectedResponseCodes: [200, 201, 204] });

  verifyRelationsExists(id_Relations_390);
  // -> Updating Relations
  let Fields_Relations_upd_390 = "Fields_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Filter_Relations_upd_390 = "Filter_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Id_Relations_upd_390 = 390 + Math.floor(Math.random() * 99);
  let Limit_Relations_upd_390 = 390 + Math.floor(Math.random() * 99);
  let Meta_Relations_upd_390 = "Meta_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Offset_Relations_upd_390 = 390 + Math.floor(Math.random() * 99);
  let Page_Relations_upd_390 = 390 + Math.floor(Math.random() * 99);
  let Search_Relations_upd_390 = "Search_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Sort_Relations_upd_390 = "Sort_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_upd_390 = "collection_many_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_upd_390 = "collection_one_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let field_many_Relations_upd_390 = "field_many_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let field_one_Relations_upd_390 = "field_one_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let id_Relations_upd_390 = id_Relations_390;
  let junction_field_Relations_upd_390 = "junction_field_Relations_upd_390_" + Math.floor(Math.random()*1000);
  updateRelation(Fields_Relations_upd_390, Filter_Relations_upd_390, Id_Relations_upd_390, Limit_Relations_upd_390, Meta_Relations_upd_390, Offset_Relations_upd_390, Page_Relations_upd_390, Search_Relations_upd_390, Sort_Relations_upd_390, collection_many_Relations_upd_390, collection_one_Relations_upd_390, field_many_Relations_upd_390, field_one_Relations_upd_390, id_Relations_upd_390, junction_field_Relations_upd_390, { expectedResponseCodes: [200, 201, 204] });

  verifyRelationsExists(id_Relations_390);
  // -> Deleting Leaf Relations (Standard)
  deleteRelation(id_Relations_390);
  verifyRelationsDoesNotExist(id_Relations_390);

});

bthread("crud:Roles:linear:2", function () {
  // -> Creating Roles
  let Fields_Roles_400 = "Fields_Roles_400_" + Math.floor(Math.random()*1000);
  let Filter_Roles_400 = "Filter_Roles_400_" + Math.floor(Math.random()*1000);
  let Limit_Roles_400 = 400 + Math.floor(Math.random() * 99);
  let Meta_Roles_400 = "Meta_Roles_400_" + Math.floor(Math.random()*1000);
  let Offset_Roles_400 = 400 + Math.floor(Math.random() * 99);
  let Page_Roles_400 = 400 + Math.floor(Math.random() * 99);
  let Search_Roles_400 = "Search_Roles_400_" + Math.floor(Math.random()*1000);
  let Sort_Roles_400 = "Sort_Roles_400_" + Math.floor(Math.random()*1000);
  let description_Roles_400 = "description_Roles_400_" + Math.floor(Math.random()*1000);
  let enforce_tfa_Roles_400 = true;
  let external_id_Roles_400 = "external_id_Roles_400_" + Math.floor(Math.random()*1000);
  let id_Roles_400 = 400 + Math.floor(Math.random() * 99);
  let ip_access_Roles_400 = [];
  let module_listing_Roles_400 = "module_listing_Roles_400_" + Math.floor(Math.random()*1000);
  let name_Roles_400 = "name_Roles_400_" + Math.floor(Math.random()*1000);
  createRole(Fields_Roles_400, Filter_Roles_400, Limit_Roles_400, Meta_Roles_400, Offset_Roles_400, Page_Roles_400, Search_Roles_400, Sort_Roles_400, description_Roles_400, enforce_tfa_Roles_400, external_id_Roles_400, id_Roles_400, ip_access_Roles_400, module_listing_Roles_400, name_Roles_400, { expectedResponseCodes: [200, 201, 204] });

  verifyRolesExists(id_Roles_400);
  // -> Updating Roles
  let Fields_Roles_upd_400 = "Fields_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Filter_Roles_upd_400 = "Filter_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Limit_Roles_upd_400 = 400 + Math.floor(Math.random() * 99);
  let Meta_Roles_upd_400 = "Meta_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Offset_Roles_upd_400 = 400 + Math.floor(Math.random() * 99);
  let Page_Roles_upd_400 = 400 + Math.floor(Math.random() * 99);
  let Search_Roles_upd_400 = "Search_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Sort_Roles_upd_400 = "Sort_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let description_Roles_upd_400 = "description_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let enforce_tfa_Roles_upd_400 = true;
  let external_id_Roles_upd_400 = "external_id_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let id_Roles_upd_400 = id_Roles_400;
  let ip_access_Roles_upd_400 = [];
  let module_listing_Roles_upd_400 = "module_listing_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let name_Roles_upd_400 = "name_Roles_upd_400_" + Math.floor(Math.random()*1000);
  updateRole(Fields_Roles_upd_400, Filter_Roles_upd_400, Limit_Roles_upd_400, Meta_Roles_upd_400, Offset_Roles_upd_400, Page_Roles_upd_400, Search_Roles_upd_400, Sort_Roles_upd_400, description_Roles_upd_400, enforce_tfa_Roles_upd_400, external_id_Roles_upd_400, id_Roles_upd_400, ip_access_Roles_upd_400, module_listing_Roles_upd_400, name_Roles_upd_400, { expectedResponseCodes: [200, 201, 204] });

  verifyRolesExists(id_Roles_400);
  // -> Deleting Parent Roles (Relational Intent Race)
  deleteRole(id_Roles_400);

});

bthread("crud:Schema:linear:2", function () {
  // -> Creating Schema
  let Export_Schema_410 = "Export_Schema_410_" + Math.floor(Math.random()*1000);
  let data_Schema_410 = "data_Schema_410_" + Math.floor(Math.random()*1000);
  let force_Schema_410 = true;
  let id_Schema_410 = 410 + Math.floor(Math.random() * 99);
  schemaDiff(Export_Schema_410, data_Schema_410, force_Schema_410, id_Schema_410, { expectedResponseCodes: [200, 201, 204] });

  verifySchemaExists(id_Schema_410);
  verifySchemaExists(id_Schema_410);
});

bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let Fields_Users_420 = { "id": 1, "name": "Fields_Users_420_obj" };
  let Filter_Users_420 = "Filter_Users_420_" + Math.floor(Math.random()*1000);
  let Limit_Users_420 = "Limit_Users_420_" + Math.floor(Math.random()*1000);
  let Meta_Users_420 = { "id": 1, "name": "Meta_Users_420_obj" };
  let Offset_Users_420 = "Offset_Users_420_" + Math.floor(Math.random()*1000);
  let Search_Users_420 = "Search_Users_420_" + Math.floor(Math.random()*1000);
  let Sort_Users_420 = "Sort_Users_420_" + Math.floor(Math.random()*1000);
  let UUId_Users_420 = "UUId_Users_420_" + Math.floor(Math.random()*1000);
  let id_Users_420 = 420 + Math.floor(Math.random() * 99);
  let last_page_Users_420 = "last_page_Users_420_" + Math.floor(Math.random()*1000);
  let password_Users_420 = "password_Users_420_" + Math.floor(Math.random()*1000);
  let token_Users_420 = "token_Users_420_" + Math.floor(Math.random()*1000);
  acceptInvite(Fields_Users_420, Filter_Users_420, Limit_Users_420, Meta_Users_420, Offset_Users_420, Search_Users_420, Sort_Users_420, UUId_Users_420, id_Users_420, last_page_Users_420, password_Users_420, token_Users_420, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_420);
  // -> Updating Users
  let Fields_Users_upd_420 = { "id": 1, "name": "Fields_Users_upd_420_obj" };
  let Filter_Users_upd_420 = "Filter_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Limit_Users_upd_420 = "Limit_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Meta_Users_upd_420 = { "id": 1, "name": "Meta_Users_upd_420_obj" };
  let Offset_Users_upd_420 = "Offset_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Search_Users_upd_420 = "Search_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Sort_Users_upd_420 = "Sort_Users_upd_420_" + Math.floor(Math.random()*1000);
  let UUId_Users_upd_420 = "UUId_Users_upd_420_" + Math.floor(Math.random()*1000);
  let id_Users_upd_420 = id_Users_420;
  let last_page_Users_upd_420 = "last_page_Users_upd_420_" + Math.floor(Math.random()*1000);
  let password_Users_upd_420 = "password_Users_upd_420_" + Math.floor(Math.random()*1000);
  let token_Users_upd_420 = "token_Users_upd_420_" + Math.floor(Math.random()*1000);
  updateMe(Fields_Users_upd_420, Filter_Users_upd_420, Limit_Users_upd_420, Meta_Users_upd_420, Offset_Users_upd_420, Search_Users_upd_420, Sort_Users_upd_420, UUId_Users_upd_420, id_Users_upd_420, last_page_Users_upd_420, password_Users_upd_420, token_Users_upd_420, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_420);
  // -> Deleting Leaf Users (Standard)
  deleteUser(id_Users_420);
  verifyUsersDoesNotExist(id_Users_420);

});

bthread("crud:Utilities:linear:2", function () {
  // -> Creating Utilities
  let id_Utilities_430 = 430 + Math.floor(Math.random() * 99);
  let length_Utilities_430 = 430 + Math.floor(Math.random() * 99);
  clearCache(id_Utilities_430, length_Utilities_430, { expectedResponseCodes: [200, 201, 204] });

  verifyUtilitiesExists(id_Utilities_430);
  verifyUtilitiesExists(id_Utilities_430);
});

bthread("crud:Versions:linear:2", function () {
  // -> Creating Versions
  let Fields_Versions_440 = "Fields_Versions_440_" + Math.floor(Math.random()*1000);
  let Filter_Versions_440 = "Filter_Versions_440_" + Math.floor(Math.random()*1000);
  let Limit_Versions_440 = 440 + Math.floor(Math.random() * 99);
  let Meta_Versions_440 = "Meta_Versions_440_" + Math.floor(Math.random()*1000);
  let Offset_Versions_440 = 440 + Math.floor(Math.random() * 99);
  let Search_Versions_440 = "Search_Versions_440_" + Math.floor(Math.random()*1000);
  let Sort_Versions_440 = "Sort_Versions_440_" + Math.floor(Math.random()*1000);
  let UUId_Versions_440 = "UUId_Versions_440_" + Math.floor(Math.random()*1000);
  let data_Versions_440 = "data_Versions_440_" + Math.floor(Math.random()*1000);
  let fields_Versions_440 = "fields_Versions_440_" + Math.floor(Math.random()*1000);
  let id_Versions_440 = 440 + Math.floor(Math.random() * 99);
  let mainHash_Versions_440 = "mainHash_Versions_440_" + Math.floor(Math.random()*1000);
  promoteContentVersion(Fields_Versions_440, Filter_Versions_440, Limit_Versions_440, Meta_Versions_440, Offset_Versions_440, Search_Versions_440, Sort_Versions_440, UUId_Versions_440, data_Versions_440, fields_Versions_440, id_Versions_440, mainHash_Versions_440, { expectedResponseCodes: [200, 201, 204] });

  verifyVersionsExists(id_Versions_440);
  // -> Updating Versions
  let Fields_Versions_upd_440 = "Fields_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Filter_Versions_upd_440 = "Filter_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Limit_Versions_upd_440 = 440 + Math.floor(Math.random() * 99);
  let Meta_Versions_upd_440 = "Meta_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Offset_Versions_upd_440 = 440 + Math.floor(Math.random() * 99);
  let Search_Versions_upd_440 = "Search_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Sort_Versions_upd_440 = "Sort_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let UUId_Versions_upd_440 = "UUId_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let data_Versions_upd_440 = "data_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let fields_Versions_upd_440 = "fields_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let id_Versions_upd_440 = id_Versions_440;
  let mainHash_Versions_upd_440 = "mainHash_Versions_upd_440_" + Math.floor(Math.random()*1000);
  updateContentVersion(Fields_Versions_upd_440, Filter_Versions_upd_440, Limit_Versions_upd_440, Meta_Versions_upd_440, Offset_Versions_upd_440, Search_Versions_upd_440, Sort_Versions_upd_440, UUId_Versions_upd_440, data_Versions_upd_440, fields_Versions_upd_440, id_Versions_upd_440, mainHash_Versions_upd_440, { expectedResponseCodes: [200, 201, 204] });

  verifyVersionsExists(id_Versions_440);
  // -> Deleting Leaf Versions (Standard)
  deleteContentVersion(id_Versions_440);
  verifyVersionsDoesNotExist(id_Versions_440);

});

bthread("crud:Webhooks:linear:2", function () {
  // -> Creating Webhooks
  let actions_Webhooks_450 = "actions_Webhooks_450_" + Math.floor(Math.random()*1000);
  let data_Webhooks_450 = true;
  let id_Webhooks_450 = 450 + Math.floor(Math.random() * 99);
  let method_Webhooks_450 = "method_Webhooks_450_" + Math.floor(Math.random()*1000);
  let name_Webhooks_450 = "name_Webhooks_450_" + Math.floor(Math.random()*1000);
  let status_Webhooks_450 = "status_Webhooks_450_" + Math.floor(Math.random()*1000);
  let system_collections_Webhooks_450 = "system_collections_Webhooks_450_" + Math.floor(Math.random()*1000);
  let url_Webhooks_450 = "url_Webhooks_450_" + Math.floor(Math.random()*1000);
  createWebhook(actions_Webhooks_450, data_Webhooks_450, id_Webhooks_450, method_Webhooks_450, name_Webhooks_450, status_Webhooks_450, system_collections_Webhooks_450, url_Webhooks_450, { expectedResponseCodes: [200, 201, 204] });

  verifyWebhooksExists(id_Webhooks_450);
  // -> Updating Webhooks
  let actions_Webhooks_upd_450 = "actions_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  let data_Webhooks_upd_450 = true;
  let id_Webhooks_upd_450 = id_Webhooks_450;
  let method_Webhooks_upd_450 = "method_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  let name_Webhooks_upd_450 = "name_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  let status_Webhooks_upd_450 = "status_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  let system_collections_Webhooks_upd_450 = "system_collections_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  let url_Webhooks_upd_450 = "url_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  updateWebhook(actions_Webhooks_upd_450, data_Webhooks_upd_450, id_Webhooks_upd_450, method_Webhooks_upd_450, name_Webhooks_upd_450, status_Webhooks_upd_450, system_collections_Webhooks_upd_450, url_Webhooks_upd_450, { expectedResponseCodes: [200, 201, 204] });

  verifyWebhooksExists(id_Webhooks_450);
  // -> Deleting Leaf Webhooks (Standard)
  deleteWebhook(id_Webhooks_450);
  verifyWebhooksDoesNotExist(id_Webhooks_450);

});

bthread("crud:Authentication:linear:3", function () {
  // -> Creating Authentication
  let password_Authentication_460 = "password_Authentication_460_" + Math.floor(Math.random()*1000);
  let provider_Authentication_460 = "provider_Authentication_460";
  let redirect_Authentication_460 = "redirect_Authentication_460_" + Math.floor(Math.random()*1000);
  let token_Authentication_460 = "token_Authentication_460_" + Math.floor(Math.random()*1000);
  passwordReset(password_Authentication_460, provider_Authentication_460, redirect_Authentication_460, token_Authentication_460, { expectedResponseCodes: [200, 201, 204] });

  verifyAuthenticationExists(provider_Authentication_460);
  verifyAuthenticationExists(provider_Authentication_460);
});

bthread("crud:Collections:linear:3", function () {
  // -> Creating Collections
  let Meta_Collections_470 = "Meta_Collections_470_" + Math.floor(Math.random()*1000);
  let Offset_Collections_470 = "Offset_Collections_470_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_470 = "archive_app_filter_Collections_470_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_470 = "archive_field_Collections_470_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_470 = "archive_value_Collections_470_" + Math.floor(Math.random()*1000);
  let collection_Collections_470 = "collection_Collections_470_" + Math.floor(Math.random()*1000);
  let display_template_Collections_470 = "display_template_Collections_470_" + Math.floor(Math.random()*1000);
  let fields_Collections_470 = [];
  let hidden_Collections_470 = true;
  let icon_Collections_470 = "icon_Collections_470_" + Math.floor(Math.random()*1000);
  let id_Collections_470 = 470 + Math.floor(Math.random() * 99);
  let meta_Collections_470 = { "id": 1, "name": "meta_Collections_470_obj" };
  let note_Collections_470 = "note_Collections_470_" + Math.floor(Math.random()*1000);
  let singleton_Collections_470 = true;
  let sort_field_Collections_470 = "sort_field_Collections_470_" + Math.floor(Math.random()*1000);
  let translation_Collections_470 = "translation_Collections_470_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_470 = "unarchive_value_Collections_470_" + Math.floor(Math.random()*1000);
  let versioning_Collections_470 = true;
  createCollection(Meta_Collections_470, Offset_Collections_470, archive_app_filter_Collections_470, archive_field_Collections_470, archive_value_Collections_470, collection_Collections_470, display_template_Collections_470, fields_Collections_470, hidden_Collections_470, icon_Collections_470, id_Collections_470, meta_Collections_470, note_Collections_470, singleton_Collections_470, sort_field_Collections_470, translation_Collections_470, unarchive_value_Collections_470, versioning_Collections_470, { expectedResponseCodes: [200, 201, 204] });

  verifyCollectionsExists(id_Collections_470);
  // -> Updating Collections
  let Meta_Collections_upd_470 = "Meta_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let Offset_Collections_upd_470 = "Offset_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_upd_470 = "archive_app_filter_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_upd_470 = "archive_field_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_upd_470 = "archive_value_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let collection_Collections_upd_470 = "collection_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let display_template_Collections_upd_470 = "display_template_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let fields_Collections_upd_470 = [];
  let hidden_Collections_upd_470 = true;
  let icon_Collections_upd_470 = "icon_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let id_Collections_upd_470 = id_Collections_470;
  let meta_Collections_upd_470 = { "id": 1, "name": "meta_Collections_upd_470_obj" };
  let note_Collections_upd_470 = "note_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let singleton_Collections_upd_470 = true;
  let sort_field_Collections_upd_470 = "sort_field_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let translation_Collections_upd_470 = "translation_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_upd_470 = "unarchive_value_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let versioning_Collections_upd_470 = true;
  updateCollection(Meta_Collections_upd_470, Offset_Collections_upd_470, archive_app_filter_Collections_upd_470, archive_field_Collections_upd_470, archive_value_Collections_upd_470, collection_Collections_upd_470, display_template_Collections_upd_470, fields_Collections_upd_470, hidden_Collections_upd_470, icon_Collections_upd_470, id_Collections_upd_470, meta_Collections_upd_470, note_Collections_upd_470, singleton_Collections_upd_470, sort_field_Collections_upd_470, translation_Collections_upd_470, unarchive_value_Collections_upd_470, versioning_Collections_upd_470, { expectedResponseCodes: [200, 201, 204] });

  verifyCollectionsExists(id_Collections_470);
  // -> Deleting Parent Collections (Relational Intent Race)
  deleteCollection(id_Collections_470);

});

bthread("crud:Items:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Items
  let Collection_Items_480 = "Collection_Items_480_" + Math.floor(Math.random()*1000);
  let Fields_Items_480 = "Fields_Items_480_" + Math.floor(Math.random()*1000);
  let Filter_Items_480 = "Filter_Items_480_" + Math.floor(Math.random()*1000);
  let Limit_Items_480 = "Limit_Items_480_" + Math.floor(Math.random()*1000);
  let Meta_Items_480 = "Meta_Items_480_" + Math.floor(Math.random()*1000);
  let Offset_Items_480 = "Offset_Items_480_" + Math.floor(Math.random()*1000);
  let Search_Items_480 = "Search_Items_480_" + Math.floor(Math.random()*1000);
  let Sort_Items_480 = "Sort_Items_480_" + Math.floor(Math.random()*1000);
  let collection_Items_480 = "collection_Items_480";
  createItem(Collection_Items_480, Fields_Items_480, Filter_Items_480, Limit_Items_480, Meta_Items_480, Offset_Items_480, Search_Items_480, Sort_Items_480, collection_Items_480, { expectedResponseCodes: [200, 201, 204] });

  verifyItemsExists(collection_Items_480);
  // -> Updating Items
  let Collection_Items_upd_480 = "Collection_Items_upd_480_" + Math.floor(Math.random()*1000);
  let Fields_Items_upd_480 = "Fields_Items_upd_480_" + Math.floor(Math.random()*1000);
  let Filter_Items_upd_480 = "Filter_Items_upd_480_" + Math.floor(Math.random()*1000);
  let Limit_Items_upd_480 = "Limit_Items_upd_480_" + Math.floor(Math.random()*1000);
  let Meta_Items_upd_480 = "Meta_Items_upd_480_" + Math.floor(Math.random()*1000);
  let Offset_Items_upd_480 = "Offset_Items_upd_480_" + Math.floor(Math.random()*1000);
  let Search_Items_upd_480 = "Search_Items_upd_480_" + Math.floor(Math.random()*1000);
  let Sort_Items_upd_480 = "Sort_Items_upd_480_" + Math.floor(Math.random()*1000);
  let collection_Items_upd_480 = collection_Items_480;
  updateItems(Collection_Items_upd_480, Fields_Items_upd_480, Filter_Items_upd_480, Limit_Items_upd_480, Meta_Items_upd_480, Offset_Items_upd_480, Search_Items_upd_480, Sort_Items_upd_480, collection_Items_upd_480, { expectedResponseCodes: [200, 201, 204] });

  verifyItemsExists(collection_Items_480);
  // -> Deleting Parent Items (Relational Intent Race)
  deleteItems(collection_Items_480);

});

bthread("crud:Presets:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Roles"] = matchAnyRolesAdded();
  let pkMap = {"Collections": "id", "Roles": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let RolesId = captured["Roles"];
  // -> Creating Presets
  let Fields_Presets_490 = "Fields_Presets_490_" + Math.floor(Math.random()*1000);
  let Filter_Presets_490 = "Filter_Presets_490_" + Math.floor(Math.random()*1000);
  let Id_Presets_490 = 490 + Math.floor(Math.random() * 99);
  let Limit_Presets_490 = "Limit_Presets_490_" + Math.floor(Math.random()*1000);
  let Meta_Presets_490 = "Meta_Presets_490_" + Math.floor(Math.random()*1000);
  let Offset_Presets_490 = "Offset_Presets_490_" + Math.floor(Math.random()*1000);
  let Page_Presets_490 = "Page_Presets_490_" + Math.floor(Math.random()*1000);
  let Search_Presets_490 = "Search_Presets_490_" + Math.floor(Math.random()*1000);
  let Sort_Presets_490 = "Sort_Presets_490_" + Math.floor(Math.random()*1000);
  let collection_Presets_490 = "collection_Presets_490_" + Math.floor(Math.random()*1000);
  let filters_Presets_490 = [];
  let id_Presets_490 = RolesId;
  let layout_Presets_490 = "layout_Presets_490_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_490 = "layout_options_Presets_490_" + Math.floor(Math.random()*1000);
  let layout_query_Presets_490 = "layout_query_Presets_490_" + Math.floor(Math.random()*1000);
  let role_Presets_490 = 490 + Math.floor(Math.random() * 99);
  let search_Presets_490 = "search_Presets_490_" + Math.floor(Math.random()*1000);
  let search_query_Presets_490 = "search_query_Presets_490_" + Math.floor(Math.random()*1000);
  let title_Presets_490 = "title_Presets_490_" + Math.floor(Math.random()*1000);
  let translation_Presets_490 = { "id": 1, "name": "translation_Presets_490_obj" };
  let view_options_Presets_490 = "view_options_Presets_490_" + Math.floor(Math.random()*1000);
  let view_query_Presets_490 = "view_query_Presets_490_" + Math.floor(Math.random()*1000);
  let view_type_Presets_490 = "view_type_Presets_490_" + Math.floor(Math.random()*1000);
  createPreset(Fields_Presets_490, Filter_Presets_490, Id_Presets_490, Limit_Presets_490, Meta_Presets_490, Offset_Presets_490, Page_Presets_490, Search_Presets_490, Sort_Presets_490, collection_Presets_490, filters_Presets_490, id_Presets_490, layout_Presets_490, layout_options_Presets_490, layout_query_Presets_490, role_Presets_490, search_Presets_490, search_query_Presets_490, title_Presets_490, translation_Presets_490, view_options_Presets_490, view_query_Presets_490, view_type_Presets_490, { expectedResponseCodes: [200, 201, 204] });

  verifyPresetsExists(id_Presets_490);
  // -> Updating Presets
  let Fields_Presets_upd_490 = "Fields_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Filter_Presets_upd_490 = "Filter_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Id_Presets_upd_490 = 490 + Math.floor(Math.random() * 99);
  let Limit_Presets_upd_490 = "Limit_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Meta_Presets_upd_490 = "Meta_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Offset_Presets_upd_490 = "Offset_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Page_Presets_upd_490 = "Page_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Search_Presets_upd_490 = "Search_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Sort_Presets_upd_490 = "Sort_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let collection_Presets_upd_490 = "collection_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let filters_Presets_upd_490 = [];
  let id_Presets_upd_490 = id_Presets_490;
  let layout_Presets_upd_490 = "layout_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_upd_490 = "layout_options_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let layout_query_Presets_upd_490 = "layout_query_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let role_Presets_upd_490 = 490 + Math.floor(Math.random() * 99);
  let search_Presets_upd_490 = "search_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let search_query_Presets_upd_490 = "search_query_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let title_Presets_upd_490 = "title_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let translation_Presets_upd_490 = { "id": 1, "name": "translation_Presets_upd_490_obj" };
  let view_options_Presets_upd_490 = "view_options_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let view_query_Presets_upd_490 = "view_query_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let view_type_Presets_upd_490 = "view_type_Presets_upd_490_" + Math.floor(Math.random()*1000);
  updatePreset(Fields_Presets_upd_490, Filter_Presets_upd_490, Id_Presets_upd_490, Limit_Presets_upd_490, Meta_Presets_upd_490, Offset_Presets_upd_490, Page_Presets_upd_490, Search_Presets_upd_490, Sort_Presets_upd_490, collection_Presets_upd_490, filters_Presets_upd_490, id_Presets_upd_490, layout_Presets_upd_490, layout_options_Presets_upd_490, layout_query_Presets_upd_490, role_Presets_upd_490, search_Presets_upd_490, search_query_Presets_upd_490, title_Presets_upd_490, translation_Presets_upd_490, view_options_Presets_upd_490, view_query_Presets_upd_490, view_type_Presets_upd_490, { expectedResponseCodes: [200, 201, 204] });

  verifyPresetsExists(id_Presets_490);
  // -> Deleting Leaf Presets (Standard)
  deletePreset(id_Presets_490);
  verifyPresetsDoesNotExist(id_Presets_490);

});

bthread("crud:Comments:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Items"] = matchAnyItemsAdded();
  let pkMap = {"Collections": "id", "Items": "collection"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let ItemsId = captured["Items"];
  // -> Creating Comments
  let collection_Comments_500 = ItemsId;
  let comment_Comments_500 = "comment_Comments_500_" + Math.floor(Math.random()*1000);
  let id_Comments_500 = CollectionsId;
  let item_Comments_500 = "item_Comments_500_" + Math.floor(Math.random()*1000);
  createComment(collection_Comments_500, comment_Comments_500, id_Comments_500, item_Comments_500, { expectedResponseCodes: [200, 201, 204] });

  verifyCommentsExists(id_Comments_500);
  // -> Updating Comments
  let collection_Comments_upd_500 = "collection_Comments_upd_500_" + Math.floor(Math.random()*1000);
  let comment_Comments_upd_500 = "comment_Comments_upd_500_" + Math.floor(Math.random()*1000);
  let id_Comments_upd_500 = id_Comments_500;
  let item_Comments_upd_500 = "item_Comments_upd_500_" + Math.floor(Math.random()*1000);
  updateComment(collection_Comments_upd_500, comment_Comments_upd_500, id_Comments_upd_500, item_Comments_upd_500, { expectedResponseCodes: [200, 201, 204] });

  verifyCommentsExists(id_Comments_500);
  // -> Deleting Leaf Comments (Standard)
  deleteComment(id_Comments_500);
  verifyCommentsDoesNotExist(id_Comments_500);

});

bthread("crud:Fields:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Fields
  let Sort_Fields_510 = "Sort_Fields_510_" + Math.floor(Math.random()*1000);
  let collection_Fields_510 = "collection_Fields_510";
  let datatype_Fields_510 = "datatype_Fields_510_" + Math.floor(Math.random()*1000);
  let field_Fields_510 = "field_Fields_510_" + Math.floor(Math.random()*1000);
  let id_Fields_510 = CollectionsId;
  let length_Fields_510 = 510 + Math.floor(Math.random() * 99);
  let meta_Fields_510 = { "id": 1, "name": "meta_Fields_510_obj" };
  let schema_Fields_510 = { "id": 1, "name": "schema_Fields_510_obj" };
  let type_Fields_510 = "type_Fields_510_" + Math.floor(Math.random()*1000);
  createField(Sort_Fields_510, collection_Fields_510, datatype_Fields_510, field_Fields_510, id_Fields_510, length_Fields_510, meta_Fields_510, schema_Fields_510, type_Fields_510, { expectedResponseCodes: [200, 201, 204] });

  verifyFieldsExists(collection_Fields_510);
  // -> Updating Fields
  let Sort_Fields_upd_510 = "Sort_Fields_upd_510_" + Math.floor(Math.random()*1000);
  let collection_Fields_upd_510 = collection_Fields_510;
  let datatype_Fields_upd_510 = "datatype_Fields_upd_510_" + Math.floor(Math.random()*1000);
  let field_Fields_upd_510 = "field_Fields_upd_510_" + Math.floor(Math.random()*1000);
  let id_Fields_upd_510 = 510 + Math.floor(Math.random() * 99);
  let length_Fields_upd_510 = 510 + Math.floor(Math.random() * 99);
  let meta_Fields_upd_510 = { "id": 1, "name": "meta_Fields_upd_510_obj" };
  let schema_Fields_upd_510 = { "id": 1, "name": "schema_Fields_upd_510_obj" };
  let type_Fields_upd_510 = "type_Fields_upd_510_" + Math.floor(Math.random()*1000);
  updateField(Sort_Fields_upd_510, collection_Fields_upd_510, datatype_Fields_upd_510, field_Fields_upd_510, id_Fields_upd_510, length_Fields_upd_510, meta_Fields_upd_510, schema_Fields_upd_510, type_Fields_upd_510, { expectedResponseCodes: [200, 201, 204] });

  verifyFieldsExists(collection_Fields_510);
  // -> Deleting Leaf Fields (Standard)
  deleteField(collection_Fields_510, id_Fields_510);
  verifyFieldsDoesNotExist(collection_Fields_510);

});

bthread("crud:Files:linear:3", function () {
  // -> Creating Files
  let Fields_Files_520 = "Fields_Files_520_" + Math.floor(Math.random()*1000);
  let Filter_Files_520 = "Filter_Files_520_" + Math.floor(Math.random()*1000);
  let Limit_Files_520 = "Limit_Files_520_" + Math.floor(Math.random()*1000);
  let Meta_Files_520 = "Meta_Files_520_" + Math.floor(Math.random()*1000);
  let Offset_Files_520 = "Offset_Files_520_" + Math.floor(Math.random()*1000);
  let Search_Files_520 = "Search_Files_520_" + Math.floor(Math.random()*1000);
  let Sort_Files_520 = "Sort_Files_520_" + Math.floor(Math.random()*1000);
  let data_Files_520 = "data_Files_520_" + Math.floor(Math.random()*1000);
  let description_Files_520 = "description_Files_520_" + Math.floor(Math.random()*1000);
  let filename_download_Files_520 = "filename_download_Files_520_" + Math.floor(Math.random()*1000);
  let folder_Files_520 = "folder_Files_520_" + Math.floor(Math.random()*1000);
  let id_Files_520 = 520 + Math.floor(Math.random() * 99);
  let tags_Files_520 = [];
  let title_Files_520 = "title_Files_520_" + Math.floor(Math.random()*1000);
  createFile(Fields_Files_520, Filter_Files_520, Limit_Files_520, Meta_Files_520, Offset_Files_520, Search_Files_520, Sort_Files_520, data_Files_520, description_Files_520, filename_download_Files_520, folder_Files_520, id_Files_520, tags_Files_520, title_Files_520, { expectedResponseCodes: [200, 201, 204] });

  verifyFilesExists(id_Files_520);
  // -> Updating Files
  let Fields_Files_upd_520 = "Fields_Files_upd_520_" + Math.floor(Math.random()*1000);
  let Filter_Files_upd_520 = "Filter_Files_upd_520_" + Math.floor(Math.random()*1000);
  let Limit_Files_upd_520 = "Limit_Files_upd_520_" + Math.floor(Math.random()*1000);
  let Meta_Files_upd_520 = "Meta_Files_upd_520_" + Math.floor(Math.random()*1000);
  let Offset_Files_upd_520 = "Offset_Files_upd_520_" + Math.floor(Math.random()*1000);
  let Search_Files_upd_520 = "Search_Files_upd_520_" + Math.floor(Math.random()*1000);
  let Sort_Files_upd_520 = "Sort_Files_upd_520_" + Math.floor(Math.random()*1000);
  let data_Files_upd_520 = "data_Files_upd_520_" + Math.floor(Math.random()*1000);
  let description_Files_upd_520 = "description_Files_upd_520_" + Math.floor(Math.random()*1000);
  let filename_download_Files_upd_520 = "filename_download_Files_upd_520_" + Math.floor(Math.random()*1000);
  let folder_Files_upd_520 = "folder_Files_upd_520_" + Math.floor(Math.random()*1000);
  let id_Files_upd_520 = id_Files_520;
  let tags_Files_upd_520 = [];
  let title_Files_upd_520 = "title_Files_upd_520_" + Math.floor(Math.random()*1000);
  updateFile(Fields_Files_upd_520, Filter_Files_upd_520, Limit_Files_upd_520, Meta_Files_upd_520, Offset_Files_upd_520, Search_Files_upd_520, Sort_Files_upd_520, data_Files_upd_520, description_Files_upd_520, filename_download_Files_upd_520, folder_Files_upd_520, id_Files_upd_520, tags_Files_upd_520, title_Files_upd_520, { expectedResponseCodes: [200, 201, 204] });

  verifyFilesExists(id_Files_520);
  // -> Deleting Leaf Files (Standard)
  deleteFile(id_Files_520);
  verifyFilesDoesNotExist(id_Files_520);

});

bthread("crud:Flows:linear:3", function () {
  // -> Creating Flows
  let Fields_Flows_530 = "Fields_Flows_530_" + Math.floor(Math.random()*1000);
  let Meta_Flows_530 = "Meta_Flows_530_" + Math.floor(Math.random()*1000);
  let data_Flows_530 = { "id": 1, "name": "data_Flows_530_obj" };
  let id_Flows_530 = 530 + Math.floor(Math.random() * 99);
  createFlow(Fields_Flows_530, Meta_Flows_530, data_Flows_530, id_Flows_530, { expectedResponseCodes: [200, 201, 204] });

  verifyFlowsExists(id_Flows_530);
  // -> Updating Flows
  let Fields_Flows_upd_530 = "Fields_Flows_upd_530_" + Math.floor(Math.random()*1000);
  let Meta_Flows_upd_530 = "Meta_Flows_upd_530_" + Math.floor(Math.random()*1000);
  let data_Flows_upd_530 = { "id": 1, "name": "data_Flows_upd_530_obj" };
  let id_Flows_upd_530 = id_Flows_530;
  updateFlow(Fields_Flows_upd_530, Meta_Flows_upd_530, data_Flows_upd_530, id_Flows_upd_530, { expectedResponseCodes: [200, 201, 204] });

  verifyFlowsExists(id_Flows_530);
  // -> Deleting Leaf Flows (Standard)
  deleteFlow(id_Flows_530);
  verifyFlowsDoesNotExist(id_Flows_530);

});

bthread("crud:Folders:linear:3", function () {
  // -> Creating Folders
  let Fields_Folders_540 = "Fields_Folders_540_" + Math.floor(Math.random()*1000);
  let Filter_Folders_540 = "Filter_Folders_540_" + Math.floor(Math.random()*1000);
  let Limit_Folders_540 = 540 + Math.floor(Math.random() * 99);
  let Meta_Folders_540 = "Meta_Folders_540_" + Math.floor(Math.random()*1000);
  let Offset_Folders_540 = 540 + Math.floor(Math.random() * 99);
  let Search_Folders_540 = "Search_Folders_540_" + Math.floor(Math.random()*1000);
  let Sort_Folders_540 = "Sort_Folders_540_" + Math.floor(Math.random()*1000);
  let id_Folders_540 = 540 + Math.floor(Math.random() * 99);
  let name_Folders_540 = "name_Folders_540_" + Math.floor(Math.random()*1000);
  let parent_Folders_540 = 540 + Math.floor(Math.random() * 99);
  createFolder(Fields_Folders_540, Filter_Folders_540, Limit_Folders_540, Meta_Folders_540, Offset_Folders_540, Search_Folders_540, Sort_Folders_540, id_Folders_540, name_Folders_540, parent_Folders_540, { expectedResponseCodes: [200, 201, 204] });

  verifyFoldersExists(id_Folders_540);
  // -> Updating Folders
  let Fields_Folders_upd_540 = "Fields_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Filter_Folders_upd_540 = "Filter_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Limit_Folders_upd_540 = 540 + Math.floor(Math.random() * 99);
  let Meta_Folders_upd_540 = "Meta_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Offset_Folders_upd_540 = 540 + Math.floor(Math.random() * 99);
  let Search_Folders_upd_540 = "Search_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Sort_Folders_upd_540 = "Sort_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let id_Folders_upd_540 = id_Folders_540;
  let name_Folders_upd_540 = "name_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let parent_Folders_upd_540 = 540 + Math.floor(Math.random() * 99);
  updateFolder(Fields_Folders_upd_540, Filter_Folders_upd_540, Limit_Folders_upd_540, Meta_Folders_upd_540, Offset_Folders_upd_540, Search_Folders_upd_540, Sort_Folders_upd_540, id_Folders_upd_540, name_Folders_upd_540, parent_Folders_upd_540, { expectedResponseCodes: [200, 201, 204] });

  verifyFoldersExists(id_Folders_540);
  // -> Deleting Leaf Folders (Standard)
  deleteFolder(id_Folders_540);
  verifyFoldersDoesNotExist(id_Folders_540);

});

bthread("crud:Operations:linear:3", function () {
  // -> Creating Operations
  let Fields_Operations_550 = "Fields_Operations_550_" + Math.floor(Math.random()*1000);
  let Meta_Operations_550 = "Meta_Operations_550_" + Math.floor(Math.random()*1000);
  let UUId_Operations_550 = "UUId_Operations_550_" + Math.floor(Math.random()*1000);
  let data_Operations_550 = "data_Operations_550_" + Math.floor(Math.random()*1000);
  let id_Operations_550 = 550 + Math.floor(Math.random() * 99);
  let keys_Operations_550 = [];
  createOperation(Fields_Operations_550, Meta_Operations_550, UUId_Operations_550, data_Operations_550, id_Operations_550, keys_Operations_550, { expectedResponseCodes: [200, 201, 204] });

  verifyOperationsExists(id_Operations_550);
  // -> Updating Operations
  let Fields_Operations_upd_550 = "Fields_Operations_upd_550_" + Math.floor(Math.random()*1000);
  let Meta_Operations_upd_550 = "Meta_Operations_upd_550_" + Math.floor(Math.random()*1000);
  let UUId_Operations_upd_550 = "UUId_Operations_upd_550_" + Math.floor(Math.random()*1000);
  let data_Operations_upd_550 = "data_Operations_upd_550_" + Math.floor(Math.random()*1000);
  let id_Operations_upd_550 = id_Operations_550;
  let keys_Operations_upd_550 = [];
  updateOperations(Fields_Operations_upd_550, Meta_Operations_upd_550, UUId_Operations_upd_550, data_Operations_upd_550, id_Operations_upd_550, keys_Operations_upd_550, { expectedResponseCodes: [200, 201, 204] });

  verifyOperationsExists(id_Operations_550);
  // -> Deleting Leaf Operations (Standard)
  deleteOperations(id_Operations_550);
  verifyOperationsDoesNotExist(id_Operations_550);

});

bthread("crud:Permissions:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  deps["Roles"] = matchAnyRolesAdded();
  let pkMap = {"Collections": "id", "Roles": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  let RolesId = captured["Roles"];
  // -> Creating Permissions
  let Fields_Permissions_560 = "Fields_Permissions_560_" + Math.floor(Math.random()*1000);
  let Filter_Permissions_560 = "Filter_Permissions_560_" + Math.floor(Math.random()*1000);
  let Id_Permissions_560 = 560 + Math.floor(Math.random() * 99);
  let Limit_Permissions_560 = "Limit_Permissions_560_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_560 = "Meta_Permissions_560_" + Math.floor(Math.random()*1000);
  let Offset_Permissions_560 = "Offset_Permissions_560_" + Math.floor(Math.random()*1000);
  let Page_Permissions_560 = "Page_Permissions_560_" + Math.floor(Math.random()*1000);
  let Search_Permissions_560 = "Search_Permissions_560_" + Math.floor(Math.random()*1000);
  let Sort_Permissions_560 = "Sort_Permissions_560_" + Math.floor(Math.random()*1000);
  let collection_Permissions_560 = { "id": 1, "name": "collection_Permissions_560_obj" };
  let comment_Permissions_560 = "comment_Permissions_560_" + Math.floor(Math.random()*1000);
  let create_Permissions_560 = "create_Permissions_560_" + Math.floor(Math.random()*1000);
  let data_Permissions_560 = { "id": 1, "name": "data_Permissions_560_obj" };
  let _delete_Permissions_560 = "_delete_Permissions_560_" + Math.floor(Math.random()*1000);
  let explain_Permissions_560 = "explain_Permissions_560_" + Math.floor(Math.random()*1000);
  let id_Permissions_560 = RolesId;
  let keys_Permissions_560 = [];
  let read_Permissions_560 = "read_Permissions_560_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_560 = { "id": 1, "name": "read_field_blacklist_Permissions_560_obj" };
  let role_Permissions_560 = { "id": 1, "name": "role_Permissions_560_obj" };
  let status_Permissions_560 = { "id": 1, "name": "status_Permissions_560_obj" };
  let status_blacklist_Permissions_560 = { "id": 1, "name": "status_blacklist_Permissions_560_obj" };
  let update_Permissions_560 = "2025-01-25T12:00:00Z";
  let write_field_blacklist_Permissions_560 = { "id": 1, "name": "write_field_blacklist_Permissions_560_obj" };
  createPermission(Fields_Permissions_560, Filter_Permissions_560, Id_Permissions_560, Limit_Permissions_560, Meta_Permissions_560, Offset_Permissions_560, Page_Permissions_560, Search_Permissions_560, Sort_Permissions_560, collection_Permissions_560, comment_Permissions_560, create_Permissions_560, data_Permissions_560, _delete_Permissions_560, explain_Permissions_560, id_Permissions_560, keys_Permissions_560, read_Permissions_560, read_field_blacklist_Permissions_560, role_Permissions_560, status_Permissions_560, status_blacklist_Permissions_560, update_Permissions_560, write_field_blacklist_Permissions_560, { expectedResponseCodes: [200, 201, 204] });

  verifyPermissionsExists(id_Permissions_560);
  // -> Updating Permissions
  let Fields_Permissions_upd_560 = "Fields_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Filter_Permissions_upd_560 = "Filter_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Id_Permissions_upd_560 = 560 + Math.floor(Math.random() * 99);
  let Limit_Permissions_upd_560 = "Limit_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_upd_560 = "Meta_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Offset_Permissions_upd_560 = "Offset_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Page_Permissions_upd_560 = "Page_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Search_Permissions_upd_560 = "Search_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Sort_Permissions_upd_560 = "Sort_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let collection_Permissions_upd_560 = { "id": 1, "name": "collection_Permissions_upd_560_obj" };
  let comment_Permissions_upd_560 = "comment_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let create_Permissions_upd_560 = "create_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let data_Permissions_upd_560 = { "id": 1, "name": "data_Permissions_upd_560_obj" };
  let _delete_Permissions_upd_560 = "_delete_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let explain_Permissions_upd_560 = "explain_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let id_Permissions_upd_560 = id_Permissions_560;
  let keys_Permissions_upd_560 = [];
  let read_Permissions_upd_560 = "read_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_upd_560 = { "id": 1, "name": "read_field_blacklist_Permissions_upd_560_obj" };
  let role_Permissions_upd_560 = { "id": 1, "name": "role_Permissions_upd_560_obj" };
  let status_Permissions_upd_560 = { "id": 1, "name": "status_Permissions_upd_560_obj" };
  let status_blacklist_Permissions_upd_560 = { "id": 1, "name": "status_blacklist_Permissions_upd_560_obj" };
  let update_Permissions_upd_560 = "2025-01-25T12:00:00Z";
  let write_field_blacklist_Permissions_upd_560 = { "id": 1, "name": "write_field_blacklist_Permissions_upd_560_obj" };
  updatePermissions(Fields_Permissions_upd_560, Filter_Permissions_upd_560, Id_Permissions_upd_560, Limit_Permissions_upd_560, Meta_Permissions_upd_560, Offset_Permissions_upd_560, Page_Permissions_upd_560, Search_Permissions_upd_560, Sort_Permissions_upd_560, collection_Permissions_upd_560, comment_Permissions_upd_560, create_Permissions_upd_560, data_Permissions_upd_560, _delete_Permissions_upd_560, explain_Permissions_upd_560, id_Permissions_upd_560, keys_Permissions_upd_560, read_Permissions_upd_560, read_field_blacklist_Permissions_upd_560, role_Permissions_upd_560, status_Permissions_upd_560, status_blacklist_Permissions_upd_560, update_Permissions_upd_560, write_field_blacklist_Permissions_upd_560, { expectedResponseCodes: [200, 201, 204] });

  verifyPermissionsExists(id_Permissions_560);
  // -> Deleting Leaf Permissions (Standard)
  deletePermissions(id_Permissions_560);
  verifyPermissionsDoesNotExist(id_Permissions_560);

});

bthread("crud:Relations:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Relations
  let Fields_Relations_570 = "Fields_Relations_570_" + Math.floor(Math.random()*1000);
  let Filter_Relations_570 = "Filter_Relations_570_" + Math.floor(Math.random()*1000);
  let Id_Relations_570 = 570 + Math.floor(Math.random() * 99);
  let Limit_Relations_570 = 570 + Math.floor(Math.random() * 99);
  let Meta_Relations_570 = "Meta_Relations_570_" + Math.floor(Math.random()*1000);
  let Offset_Relations_570 = 570 + Math.floor(Math.random() * 99);
  let Page_Relations_570 = 570 + Math.floor(Math.random() * 99);
  let Search_Relations_570 = "Search_Relations_570_" + Math.floor(Math.random()*1000);
  let Sort_Relations_570 = "Sort_Relations_570_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_570 = "collection_many_Relations_570_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_570 = "collection_one_Relations_570_" + Math.floor(Math.random()*1000);
  let field_many_Relations_570 = "field_many_Relations_570_" + Math.floor(Math.random()*1000);
  let field_one_Relations_570 = "field_one_Relations_570_" + Math.floor(Math.random()*1000);
  let id_Relations_570 = CollectionsId;
  let junction_field_Relations_570 = "junction_field_Relations_570_" + Math.floor(Math.random()*1000);
  createRelation(Fields_Relations_570, Filter_Relations_570, Id_Relations_570, Limit_Relations_570, Meta_Relations_570, Offset_Relations_570, Page_Relations_570, Search_Relations_570, Sort_Relations_570, collection_many_Relations_570, collection_one_Relations_570, field_many_Relations_570, field_one_Relations_570, id_Relations_570, junction_field_Relations_570, { expectedResponseCodes: [200, 201, 204] });

  verifyRelationsExists(id_Relations_570);
  // -> Updating Relations
  let Fields_Relations_upd_570 = "Fields_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Filter_Relations_upd_570 = "Filter_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Id_Relations_upd_570 = 570 + Math.floor(Math.random() * 99);
  let Limit_Relations_upd_570 = 570 + Math.floor(Math.random() * 99);
  let Meta_Relations_upd_570 = "Meta_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Offset_Relations_upd_570 = 570 + Math.floor(Math.random() * 99);
  let Page_Relations_upd_570 = 570 + Math.floor(Math.random() * 99);
  let Search_Relations_upd_570 = "Search_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Sort_Relations_upd_570 = "Sort_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_upd_570 = "collection_many_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_upd_570 = "collection_one_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let field_many_Relations_upd_570 = "field_many_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let field_one_Relations_upd_570 = "field_one_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let id_Relations_upd_570 = id_Relations_570;
  let junction_field_Relations_upd_570 = "junction_field_Relations_upd_570_" + Math.floor(Math.random()*1000);
  updateRelation(Fields_Relations_upd_570, Filter_Relations_upd_570, Id_Relations_upd_570, Limit_Relations_upd_570, Meta_Relations_upd_570, Offset_Relations_upd_570, Page_Relations_upd_570, Search_Relations_upd_570, Sort_Relations_upd_570, collection_many_Relations_upd_570, collection_one_Relations_upd_570, field_many_Relations_upd_570, field_one_Relations_upd_570, id_Relations_upd_570, junction_field_Relations_upd_570, { expectedResponseCodes: [200, 201, 204] });

  verifyRelationsExists(id_Relations_570);
  // -> Deleting Leaf Relations (Standard)
  deleteRelation(id_Relations_570);
  verifyRelationsDoesNotExist(id_Relations_570);

});

bthread("crud:Roles:linear:3", function () {
  // -> Creating Roles
  let Fields_Roles_580 = "Fields_Roles_580_" + Math.floor(Math.random()*1000);
  let Filter_Roles_580 = "Filter_Roles_580_" + Math.floor(Math.random()*1000);
  let Limit_Roles_580 = 580 + Math.floor(Math.random() * 99);
  let Meta_Roles_580 = "Meta_Roles_580_" + Math.floor(Math.random()*1000);
  let Offset_Roles_580 = 580 + Math.floor(Math.random() * 99);
  let Page_Roles_580 = 580 + Math.floor(Math.random() * 99);
  let Search_Roles_580 = "Search_Roles_580_" + Math.floor(Math.random()*1000);
  let Sort_Roles_580 = "Sort_Roles_580_" + Math.floor(Math.random()*1000);
  let description_Roles_580 = "description_Roles_580_" + Math.floor(Math.random()*1000);
  let enforce_tfa_Roles_580 = true;
  let external_id_Roles_580 = "external_id_Roles_580_" + Math.floor(Math.random()*1000);
  let id_Roles_580 = 580 + Math.floor(Math.random() * 99);
  let ip_access_Roles_580 = [];
  let module_listing_Roles_580 = "module_listing_Roles_580_" + Math.floor(Math.random()*1000);
  let name_Roles_580 = "name_Roles_580_" + Math.floor(Math.random()*1000);
  createRole(Fields_Roles_580, Filter_Roles_580, Limit_Roles_580, Meta_Roles_580, Offset_Roles_580, Page_Roles_580, Search_Roles_580, Sort_Roles_580, description_Roles_580, enforce_tfa_Roles_580, external_id_Roles_580, id_Roles_580, ip_access_Roles_580, module_listing_Roles_580, name_Roles_580, { expectedResponseCodes: [200, 201, 204] });

  verifyRolesExists(id_Roles_580);
  // -> Updating Roles
  let Fields_Roles_upd_580 = "Fields_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Filter_Roles_upd_580 = "Filter_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Limit_Roles_upd_580 = 580 + Math.floor(Math.random() * 99);
  let Meta_Roles_upd_580 = "Meta_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Offset_Roles_upd_580 = 580 + Math.floor(Math.random() * 99);
  let Page_Roles_upd_580 = 580 + Math.floor(Math.random() * 99);
  let Search_Roles_upd_580 = "Search_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Sort_Roles_upd_580 = "Sort_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let description_Roles_upd_580 = "description_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let enforce_tfa_Roles_upd_580 = true;
  let external_id_Roles_upd_580 = "external_id_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let id_Roles_upd_580 = id_Roles_580;
  let ip_access_Roles_upd_580 = [];
  let module_listing_Roles_upd_580 = "module_listing_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let name_Roles_upd_580 = "name_Roles_upd_580_" + Math.floor(Math.random()*1000);
  updateRole(Fields_Roles_upd_580, Filter_Roles_upd_580, Limit_Roles_upd_580, Meta_Roles_upd_580, Offset_Roles_upd_580, Page_Roles_upd_580, Search_Roles_upd_580, Sort_Roles_upd_580, description_Roles_upd_580, enforce_tfa_Roles_upd_580, external_id_Roles_upd_580, id_Roles_upd_580, ip_access_Roles_upd_580, module_listing_Roles_upd_580, name_Roles_upd_580, { expectedResponseCodes: [200, 201, 204] });

  verifyRolesExists(id_Roles_580);
  // -> Deleting Parent Roles (Relational Intent Race)
  deleteRole(id_Roles_580);

});

bthread("crud:Schema:linear:3", function () {
  // -> Creating Schema
  let Export_Schema_590 = "Export_Schema_590_" + Math.floor(Math.random()*1000);
  let data_Schema_590 = "data_Schema_590_" + Math.floor(Math.random()*1000);
  let force_Schema_590 = true;
  let id_Schema_590 = 590 + Math.floor(Math.random() * 99);
  schemaDiff(Export_Schema_590, data_Schema_590, force_Schema_590, id_Schema_590, { expectedResponseCodes: [200, 201, 204] });

  verifySchemaExists(id_Schema_590);
  verifySchemaExists(id_Schema_590);
});

bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let Fields_Users_600 = { "id": 1, "name": "Fields_Users_600_obj" };
  let Filter_Users_600 = "Filter_Users_600_" + Math.floor(Math.random()*1000);
  let Limit_Users_600 = "Limit_Users_600_" + Math.floor(Math.random()*1000);
  let Meta_Users_600 = { "id": 1, "name": "Meta_Users_600_obj" };
  let Offset_Users_600 = "Offset_Users_600_" + Math.floor(Math.random()*1000);
  let Search_Users_600 = "Search_Users_600_" + Math.floor(Math.random()*1000);
  let Sort_Users_600 = "Sort_Users_600_" + Math.floor(Math.random()*1000);
  let UUId_Users_600 = "UUId_Users_600_" + Math.floor(Math.random()*1000);
  let id_Users_600 = 600 + Math.floor(Math.random() * 99);
  let last_page_Users_600 = "last_page_Users_600_" + Math.floor(Math.random()*1000);
  let password_Users_600 = "password_Users_600_" + Math.floor(Math.random()*1000);
  let token_Users_600 = "token_Users_600_" + Math.floor(Math.random()*1000);
  acceptInvite(Fields_Users_600, Filter_Users_600, Limit_Users_600, Meta_Users_600, Offset_Users_600, Search_Users_600, Sort_Users_600, UUId_Users_600, id_Users_600, last_page_Users_600, password_Users_600, token_Users_600, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_600);
  // -> Updating Users
  let Fields_Users_upd_600 = { "id": 1, "name": "Fields_Users_upd_600_obj" };
  let Filter_Users_upd_600 = "Filter_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Limit_Users_upd_600 = "Limit_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Meta_Users_upd_600 = { "id": 1, "name": "Meta_Users_upd_600_obj" };
  let Offset_Users_upd_600 = "Offset_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Search_Users_upd_600 = "Search_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Sort_Users_upd_600 = "Sort_Users_upd_600_" + Math.floor(Math.random()*1000);
  let UUId_Users_upd_600 = "UUId_Users_upd_600_" + Math.floor(Math.random()*1000);
  let id_Users_upd_600 = id_Users_600;
  let last_page_Users_upd_600 = "last_page_Users_upd_600_" + Math.floor(Math.random()*1000);
  let password_Users_upd_600 = "password_Users_upd_600_" + Math.floor(Math.random()*1000);
  let token_Users_upd_600 = "token_Users_upd_600_" + Math.floor(Math.random()*1000);
  updateMe(Fields_Users_upd_600, Filter_Users_upd_600, Limit_Users_upd_600, Meta_Users_upd_600, Offset_Users_upd_600, Search_Users_upd_600, Sort_Users_upd_600, UUId_Users_upd_600, id_Users_upd_600, last_page_Users_upd_600, password_Users_upd_600, token_Users_upd_600, { expectedResponseCodes: [200, 201, 204] });

  verifyUsersExists(id_Users_600);
  // -> Deleting Leaf Users (Standard)
  deleteUser(id_Users_600);
  verifyUsersDoesNotExist(id_Users_600);

});

bthread("crud:Utilities:linear:3", function () {
  // -> Creating Utilities
  let id_Utilities_610 = 610 + Math.floor(Math.random() * 99);
  let length_Utilities_610 = 610 + Math.floor(Math.random() * 99);
  clearCache(id_Utilities_610, length_Utilities_610, { expectedResponseCodes: [200, 201, 204] });

  verifyUtilitiesExists(id_Utilities_610);
  verifyUtilitiesExists(id_Utilities_610);
});

bthread("crud:Versions:linear:3", function () {
  // -> Creating Versions
  let Fields_Versions_620 = "Fields_Versions_620_" + Math.floor(Math.random()*1000);
  let Filter_Versions_620 = "Filter_Versions_620_" + Math.floor(Math.random()*1000);
  let Limit_Versions_620 = 620 + Math.floor(Math.random() * 99);
  let Meta_Versions_620 = "Meta_Versions_620_" + Math.floor(Math.random()*1000);
  let Offset_Versions_620 = 620 + Math.floor(Math.random() * 99);
  let Search_Versions_620 = "Search_Versions_620_" + Math.floor(Math.random()*1000);
  let Sort_Versions_620 = "Sort_Versions_620_" + Math.floor(Math.random()*1000);
  let UUId_Versions_620 = "UUId_Versions_620_" + Math.floor(Math.random()*1000);
  let data_Versions_620 = "data_Versions_620_" + Math.floor(Math.random()*1000);
  let fields_Versions_620 = "fields_Versions_620_" + Math.floor(Math.random()*1000);
  let id_Versions_620 = 620 + Math.floor(Math.random() * 99);
  let mainHash_Versions_620 = "mainHash_Versions_620_" + Math.floor(Math.random()*1000);
  promoteContentVersion(Fields_Versions_620, Filter_Versions_620, Limit_Versions_620, Meta_Versions_620, Offset_Versions_620, Search_Versions_620, Sort_Versions_620, UUId_Versions_620, data_Versions_620, fields_Versions_620, id_Versions_620, mainHash_Versions_620, { expectedResponseCodes: [200, 201, 204] });

  verifyVersionsExists(id_Versions_620);
  // -> Updating Versions
  let Fields_Versions_upd_620 = "Fields_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Filter_Versions_upd_620 = "Filter_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Limit_Versions_upd_620 = 620 + Math.floor(Math.random() * 99);
  let Meta_Versions_upd_620 = "Meta_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Offset_Versions_upd_620 = 620 + Math.floor(Math.random() * 99);
  let Search_Versions_upd_620 = "Search_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Sort_Versions_upd_620 = "Sort_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let UUId_Versions_upd_620 = "UUId_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let data_Versions_upd_620 = "data_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let fields_Versions_upd_620 = "fields_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let id_Versions_upd_620 = id_Versions_620;
  let mainHash_Versions_upd_620 = "mainHash_Versions_upd_620_" + Math.floor(Math.random()*1000);
  updateContentVersion(Fields_Versions_upd_620, Filter_Versions_upd_620, Limit_Versions_upd_620, Meta_Versions_upd_620, Offset_Versions_upd_620, Search_Versions_upd_620, Sort_Versions_upd_620, UUId_Versions_upd_620, data_Versions_upd_620, fields_Versions_upd_620, id_Versions_upd_620, mainHash_Versions_upd_620, { expectedResponseCodes: [200, 201, 204] });

  verifyVersionsExists(id_Versions_620);
  // -> Deleting Leaf Versions (Standard)
  deleteContentVersion(id_Versions_620);
  verifyVersionsDoesNotExist(id_Versions_620);

});

bthread("crud:Webhooks:linear:3", function () {
  // -> Creating Webhooks
  let actions_Webhooks_630 = "actions_Webhooks_630_" + Math.floor(Math.random()*1000);
  let data_Webhooks_630 = true;
  let id_Webhooks_630 = 630 + Math.floor(Math.random() * 99);
  let method_Webhooks_630 = "method_Webhooks_630_" + Math.floor(Math.random()*1000);
  let name_Webhooks_630 = "name_Webhooks_630_" + Math.floor(Math.random()*1000);
  let status_Webhooks_630 = "status_Webhooks_630_" + Math.floor(Math.random()*1000);
  let system_collections_Webhooks_630 = "system_collections_Webhooks_630_" + Math.floor(Math.random()*1000);
  let url_Webhooks_630 = "url_Webhooks_630_" + Math.floor(Math.random()*1000);
  createWebhook(actions_Webhooks_630, data_Webhooks_630, id_Webhooks_630, method_Webhooks_630, name_Webhooks_630, status_Webhooks_630, system_collections_Webhooks_630, url_Webhooks_630, { expectedResponseCodes: [200, 201, 204] });

  verifyWebhooksExists(id_Webhooks_630);
  // -> Updating Webhooks
  let actions_Webhooks_upd_630 = "actions_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  let data_Webhooks_upd_630 = true;
  let id_Webhooks_upd_630 = id_Webhooks_630;
  let method_Webhooks_upd_630 = "method_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  let name_Webhooks_upd_630 = "name_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  let status_Webhooks_upd_630 = "status_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  let system_collections_Webhooks_upd_630 = "system_collections_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  let url_Webhooks_upd_630 = "url_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  updateWebhook(actions_Webhooks_upd_630, data_Webhooks_upd_630, id_Webhooks_upd_630, method_Webhooks_upd_630, name_Webhooks_upd_630, status_Webhooks_upd_630, system_collections_Webhooks_upd_630, url_Webhooks_upd_630, { expectedResponseCodes: [200, 201, 204] });

  verifyWebhooksExists(id_Webhooks_630);
  // -> Deleting Leaf Webhooks (Standard)
  deleteWebhook(id_Webhooks_630);
  verifyWebhooksDoesNotExist(id_Webhooks_630);

});

// --- PHASE 1: GLOBAL HYPER-SEEDING for directus ---
// --- Hyper-Story Constellation Copy 1 ---
// --- Hyper-Story Constellation Copy 2 ---
// --- Hyper-Story Constellation Copy 3 ---