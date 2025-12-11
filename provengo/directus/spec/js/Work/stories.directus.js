// Auto-generated stories for directus
//@provengo summon rest

// EventSet of all known collection-root DELETE events
const DESTRUCTIVE_DELETE_EVENTS = bp.EventSet("DestructiveDeleteEvents", function(e) {
    // Includes: Delete multiple existing operations., Delete multiple existing permissions.
    const destructiveEvents = [
        "Delete multiple existing operations.",
        "Delete multiple existing permissions.",
    ];
    const eventName = e.name.replace("Done: ", "");
    return destructiveEvents.some(d => eventName.startsWith(d.trim()));
});

function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id || e.data.parameters.vin));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:Authentication:linear:1
bthread("crud:Authentication:linear:1", function () {
  let id = "id_210_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let password = "password_210_" + Math.floor(Math.random() * 10000);
  let provider = "provider_210_" + Math.floor(Math.random() * 10000);
  let redirect = "redirect_210_" + Math.floor(Math.random() * 10000);
  passwordReset(id, password, provider, redirect);
});

// Story: crud:Authentication:linear:2
bthread("crud:Authentication:linear:2", function () {
  let id = "id_220_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let password = "password_220_" + Math.floor(Math.random() * 10000);
  let provider = "provider_220_" + Math.floor(Math.random() * 10000);
  let redirect = "redirect_220_" + Math.floor(Math.random() * 10000);
  passwordReset(id, password, provider, redirect);
});

// Story: crud:Authentication:linear:3
bthread("crud:Authentication:linear:3", function () {
  let id = "id_230_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let password = "password_230_" + Math.floor(Math.random() * 10000);
  let provider = "provider_230_" + Math.floor(Math.random() * 10000);
  let redirect = "redirect_230_" + Math.floor(Math.random() * 10000);
  passwordReset(id, password, provider, redirect);
});

// Story: crud:Collections:linear:1
bthread("crud:Collections:linear:1", function () {
  let archive_app_filter = "archive_app_filter_260_" + Math.floor(Math.random() * 10000);
  let archive_field = "archive_field_260_" + Math.floor(Math.random() * 10000);
  let archive_value = "archive_value_260_" + Math.floor(Math.random() * 10000);
  let collection = "collection_260_" + Math.floor(Math.random() * 10000);
  let color = "color_260_" + Math.floor(Math.random() * 10000);
  let display_template = "display_template_260_" + Math.floor(Math.random() * 10000);
  let fields = "fields_260_" + Math.floor(Math.random() * 10000);
  let hidden = true;
  let icon = "icon_260_" + Math.floor(Math.random() * 10000);
  let id = "id_260_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let meta = "meta_260_" + Math.floor(Math.random() * 10000);
  let note = "note_260_" + Math.floor(Math.random() * 10000);
  let offset = "offset_260_" + Math.floor(Math.random() * 10000);
  let singleton = true;
  let sort_field = "sort_field_260_" + Math.floor(Math.random() * 10000);
  let translation = "translation_260_" + Math.floor(Math.random() * 10000);
  let unarchive_value = "unarchive_value_260_" + Math.floor(Math.random() * 10000);
  let versioning = true;
  createCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionsExists(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  updateCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  deleteCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  tryToDeleteANonExistingCollections(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionsDoesNotExist(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Collections:linear:2
bthread("crud:Collections:linear:2", function () {
  let archive_app_filter = "archive_app_filter_270_" + Math.floor(Math.random() * 10000);
  let archive_field = "archive_field_270_" + Math.floor(Math.random() * 10000);
  let archive_value = "archive_value_270_" + Math.floor(Math.random() * 10000);
  let collection = "collection_270_" + Math.floor(Math.random() * 10000);
  let color = "color_270_" + Math.floor(Math.random() * 10000);
  let display_template = "display_template_270_" + Math.floor(Math.random() * 10000);
  let fields = "fields_270_" + Math.floor(Math.random() * 10000);
  let hidden = true;
  let icon = "icon_270_" + Math.floor(Math.random() * 10000);
  let id = "id_270_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let meta = "meta_270_" + Math.floor(Math.random() * 10000);
  let note = "note_270_" + Math.floor(Math.random() * 10000);
  let offset = "offset_270_" + Math.floor(Math.random() * 10000);
  let singleton = true;
  let sort_field = "sort_field_270_" + Math.floor(Math.random() * 10000);
  let translation = "translation_270_" + Math.floor(Math.random() * 10000);
  let unarchive_value = "unarchive_value_270_" + Math.floor(Math.random() * 10000);
  let versioning = true;
  createCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionsExists(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  updateCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  deleteCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  tryToDeleteANonExistingCollections(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionsDoesNotExist(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Collections:linear:3
bthread("crud:Collections:linear:3", function () {
  let archive_app_filter = "archive_app_filter_280_" + Math.floor(Math.random() * 10000);
  let archive_field = "archive_field_280_" + Math.floor(Math.random() * 10000);
  let archive_value = "archive_value_280_" + Math.floor(Math.random() * 10000);
  let collection = "collection_280_" + Math.floor(Math.random() * 10000);
  let color = "color_280_" + Math.floor(Math.random() * 10000);
  let display_template = "display_template_280_" + Math.floor(Math.random() * 10000);
  let fields = "fields_280_" + Math.floor(Math.random() * 10000);
  let hidden = true;
  let icon = "icon_280_" + Math.floor(Math.random() * 10000);
  let id = "id_280_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let meta = "meta_280_" + Math.floor(Math.random() * 10000);
  let note = "note_280_" + Math.floor(Math.random() * 10000);
  let offset = "offset_280_" + Math.floor(Math.random() * 10000);
  let singleton = true;
  let sort_field = "sort_field_280_" + Math.floor(Math.random() * 10000);
  let translation = "translation_280_" + Math.floor(Math.random() * 10000);
  let unarchive_value = "unarchive_value_280_" + Math.floor(Math.random() * 10000);
  let versioning = true;
  createCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionsExists(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  updateCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  deleteCollection(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  tryToDeleteANonExistingCollections(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionsDoesNotExist(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
});

// Monitor: Collections Verification
bthread("monitor:Collections", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCollectionsAdded() });
    let archive_app_filter = (e.data.parameters && e.data.parameters["archive_app_filter"]) ? e.data.parameters["archive_app_filter"] : e.data["archive_app_filter"];
    let archive_field = (e.data.parameters && e.data.parameters["archive_field"]) ? e.data.parameters["archive_field"] : e.data["archive_field"];
    let archive_value = (e.data.parameters && e.data.parameters["archive_value"]) ? e.data.parameters["archive_value"] : e.data["archive_value"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let color = (e.data.parameters && e.data.parameters["color"]) ? e.data.parameters["color"] : e.data["color"];
    let display_template = (e.data.parameters && e.data.parameters["display_template"]) ? e.data.parameters["display_template"] : e.data["display_template"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let hidden = (e.data.parameters && e.data.parameters["hidden"]) ? e.data.parameters["hidden"] : e.data["hidden"];
    let icon = (e.data.parameters && e.data.parameters["icon"]) ? e.data.parameters["icon"] : e.data["icon"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let meta = (e.data.parameters && e.data.parameters["meta"]) ? e.data.parameters["meta"] : e.data["meta"];
    let note = (e.data.parameters && e.data.parameters["note"]) ? e.data.parameters["note"] : e.data["note"];
    let offset = (e.data.parameters && e.data.parameters["offset"]) ? e.data.parameters["offset"] : e.data["offset"];
    let singleton = (e.data.parameters && e.data.parameters["singleton"]) ? e.data.parameters["singleton"] : e.data["singleton"];
    let sort_field = (e.data.parameters && e.data.parameters["sort_field"]) ? e.data.parameters["sort_field"] : e.data["sort_field"];
    let translation = (e.data.parameters && e.data.parameters["translation"]) ? e.data.parameters["translation"] : e.data["translation"];
    let unarchive_value = (e.data.parameters && e.data.parameters["unarchive_value"]) ? e.data.parameters["unarchive_value"] : e.data["unarchive_value"];
    let versioning = (e.data.parameters && e.data.parameters["versioning"]) ? e.data.parameters["versioning"] : e.data["versioning"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCollections(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning), function() {
      bp.log.info(`Monitor Collections: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCollectionsExists(archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning);
    });
  }
});

// Story: crud:Items:linear:1
bthread("crud:Items:linear:1", function () {
  let collection = "collection_310_" + Math.floor(Math.random() * 10000);
  let fields = "fields_310_" + Math.floor(Math.random() * 10000);
  let filter = "filter_310_" + Math.floor(Math.random() * 10000);
  let id = "id_310_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let limit = "limit_310_" + Math.floor(Math.random() * 10000);
  let meta = "meta_310_" + Math.floor(Math.random() * 10000);
  let offset = "offset_310_" + Math.floor(Math.random() * 10000);
  let search = "search_310_" + Math.floor(Math.random() * 10000);
  let sort = "sort_310_" + Math.floor(Math.random() * 10000);
  let version = "version_310_" + Math.floor(Math.random() * 10000);
  createItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  verifyItemsExists(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  updateItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  deleteItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  tryToDeleteANonExistingItems(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  verifyItemsDoesNotExist(collection, fields, filter, id, limit, meta, offset, search, sort, version);
});

// Story: crud:Items:linear:2
bthread("crud:Items:linear:2", function () {
  let collection = "collection_320_" + Math.floor(Math.random() * 10000);
  let fields = "fields_320_" + Math.floor(Math.random() * 10000);
  let filter = "filter_320_" + Math.floor(Math.random() * 10000);
  let id = "id_320_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let limit = "limit_320_" + Math.floor(Math.random() * 10000);
  let meta = "meta_320_" + Math.floor(Math.random() * 10000);
  let offset = "offset_320_" + Math.floor(Math.random() * 10000);
  let search = "search_320_" + Math.floor(Math.random() * 10000);
  let sort = "sort_320_" + Math.floor(Math.random() * 10000);
  let version = "version_320_" + Math.floor(Math.random() * 10000);
  createItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  verifyItemsExists(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  updateItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  deleteItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  tryToDeleteANonExistingItems(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  verifyItemsDoesNotExist(collection, fields, filter, id, limit, meta, offset, search, sort, version);
});

// Story: crud:Items:linear:3
bthread("crud:Items:linear:3", function () {
  let collection = "collection_330_" + Math.floor(Math.random() * 10000);
  let fields = "fields_330_" + Math.floor(Math.random() * 10000);
  let filter = "filter_330_" + Math.floor(Math.random() * 10000);
  let id = "id_330_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let limit = "limit_330_" + Math.floor(Math.random() * 10000);
  let meta = "meta_330_" + Math.floor(Math.random() * 10000);
  let offset = "offset_330_" + Math.floor(Math.random() * 10000);
  let search = "search_330_" + Math.floor(Math.random() * 10000);
  let sort = "sort_330_" + Math.floor(Math.random() * 10000);
  let version = "version_330_" + Math.floor(Math.random() * 10000);
  createItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  verifyItemsExists(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  updateItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  deleteItem(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  tryToDeleteANonExistingItems(collection, fields, filter, id, limit, meta, offset, search, sort, version);
  verifyItemsDoesNotExist(collection, fields, filter, id, limit, meta, offset, search, sort, version);
});

// Monitor: Items Verification
bthread("monitor:Items", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyItemsAdded() });
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let limit = (e.data.parameters && e.data.parameters["limit"]) ? e.data.parameters["limit"] : e.data["limit"];
    let meta = (e.data.parameters && e.data.parameters["meta"]) ? e.data.parameters["meta"] : e.data["meta"];
    let offset = (e.data.parameters && e.data.parameters["offset"]) ? e.data.parameters["offset"] : e.data["offset"];
    let search = (e.data.parameters && e.data.parameters["search"]) ? e.data.parameters["search"] : e.data["search"];
    let sort = (e.data.parameters && e.data.parameters["sort"]) ? e.data.parameters["sort"] : e.data["sort"];
    let version = (e.data.parameters && e.data.parameters["version"]) ? e.data.parameters["version"] : e.data["version"];
    // Block Deletion while Verifying Existence
    block(matchDeletedItems(collection, fields, filter, id, limit, meta, offset, search, sort, version), function() {
      bp.log.info(`Monitor Items: Verifying persistence of ID ${id} inside deletion block.`);
        verifyItemsExists(collection, fields, filter, id, limit, meta, offset, search, sort, version);
    });
  }
});

// Story: crud:Presets:linear:1
bthread("crud:Presets:linear:1", function () {
  let collection = "collection_360_" + Math.floor(Math.random() * 10000);
  let fields = "fields_360_" + Math.floor(Math.random() * 10000);
  let filter = "filter_360_" + Math.floor(Math.random() * 10000);
  let filters = "filters_360_" + Math.floor(Math.random() * 10000);
  let id = "id_360_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let layout = "layout_360_" + Math.floor(Math.random() * 10000);
  let layout_options = "layout_options_360_" + Math.floor(Math.random() * 10000);
  let layout_query = "layout_query_360_" + Math.floor(Math.random() * 10000);
  let limit = "limit_360_" + Math.floor(Math.random() * 10000);
  let meta = "meta_360_" + Math.floor(Math.random() * 10000);
  let offset = "offset_360_" + Math.floor(Math.random() * 10000);
  let page = "page_360_" + Math.floor(Math.random() * 10000);
  let role = "role_360_" + Math.floor(Math.random() * 10000);
  let search = "search_360_" + Math.floor(Math.random() * 10000);
  let search_query = "search_query_360_" + Math.floor(Math.random() * 10000);
  let sort = "sort_360_" + Math.floor(Math.random() * 10000);
  let title = "title_360_" + Math.floor(Math.random() * 10000);
  let translation = "translation_360_" + Math.floor(Math.random() * 10000);
  let view_options = "view_options_360_" + Math.floor(Math.random() * 10000);
  let view_query = "view_query_360_" + Math.floor(Math.random() * 10000);
  let view_type = "view_type_360_" + Math.floor(Math.random() * 10000);
  createPreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  verifyPresetsExists(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  updatePreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  deletePreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  tryToDeleteANonExistingPresets(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  verifyPresetsDoesNotExist(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
});

// Story: crud:Presets:linear:2
bthread("crud:Presets:linear:2", function () {
  let collection = "collection_370_" + Math.floor(Math.random() * 10000);
  let fields = "fields_370_" + Math.floor(Math.random() * 10000);
  let filter = "filter_370_" + Math.floor(Math.random() * 10000);
  let filters = "filters_370_" + Math.floor(Math.random() * 10000);
  let id = "id_370_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let layout = "layout_370_" + Math.floor(Math.random() * 10000);
  let layout_options = "layout_options_370_" + Math.floor(Math.random() * 10000);
  let layout_query = "layout_query_370_" + Math.floor(Math.random() * 10000);
  let limit = "limit_370_" + Math.floor(Math.random() * 10000);
  let meta = "meta_370_" + Math.floor(Math.random() * 10000);
  let offset = "offset_370_" + Math.floor(Math.random() * 10000);
  let page = "page_370_" + Math.floor(Math.random() * 10000);
  let role = "role_370_" + Math.floor(Math.random() * 10000);
  let search = "search_370_" + Math.floor(Math.random() * 10000);
  let search_query = "search_query_370_" + Math.floor(Math.random() * 10000);
  let sort = "sort_370_" + Math.floor(Math.random() * 10000);
  let title = "title_370_" + Math.floor(Math.random() * 10000);
  let translation = "translation_370_" + Math.floor(Math.random() * 10000);
  let view_options = "view_options_370_" + Math.floor(Math.random() * 10000);
  let view_query = "view_query_370_" + Math.floor(Math.random() * 10000);
  let view_type = "view_type_370_" + Math.floor(Math.random() * 10000);
  createPreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  verifyPresetsExists(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  updatePreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  deletePreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  tryToDeleteANonExistingPresets(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  verifyPresetsDoesNotExist(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
});

// Story: crud:Presets:linear:3
bthread("crud:Presets:linear:3", function () {
  let collection = "collection_380_" + Math.floor(Math.random() * 10000);
  let fields = "fields_380_" + Math.floor(Math.random() * 10000);
  let filter = "filter_380_" + Math.floor(Math.random() * 10000);
  let filters = "filters_380_" + Math.floor(Math.random() * 10000);
  let id = "id_380_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let layout = "layout_380_" + Math.floor(Math.random() * 10000);
  let layout_options = "layout_options_380_" + Math.floor(Math.random() * 10000);
  let layout_query = "layout_query_380_" + Math.floor(Math.random() * 10000);
  let limit = "limit_380_" + Math.floor(Math.random() * 10000);
  let meta = "meta_380_" + Math.floor(Math.random() * 10000);
  let offset = "offset_380_" + Math.floor(Math.random() * 10000);
  let page = "page_380_" + Math.floor(Math.random() * 10000);
  let role = "role_380_" + Math.floor(Math.random() * 10000);
  let search = "search_380_" + Math.floor(Math.random() * 10000);
  let search_query = "search_query_380_" + Math.floor(Math.random() * 10000);
  let sort = "sort_380_" + Math.floor(Math.random() * 10000);
  let title = "title_380_" + Math.floor(Math.random() * 10000);
  let translation = "translation_380_" + Math.floor(Math.random() * 10000);
  let view_options = "view_options_380_" + Math.floor(Math.random() * 10000);
  let view_query = "view_query_380_" + Math.floor(Math.random() * 10000);
  let view_type = "view_type_380_" + Math.floor(Math.random() * 10000);
  createPreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  verifyPresetsExists(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  updatePreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  deletePreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  tryToDeleteANonExistingPresets(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
  verifyPresetsDoesNotExist(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
});

// Monitor: Presets Verification
bthread("monitor:Presets", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPresetsAdded() });
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let filter = (e.data.parameters && e.data.parameters["filter"]) ? e.data.parameters["filter"] : e.data["filter"];
    let filters = (e.data.parameters && e.data.parameters["filters"]) ? e.data.parameters["filters"] : e.data["filters"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let layout = (e.data.parameters && e.data.parameters["layout"]) ? e.data.parameters["layout"] : e.data["layout"];
    let layout_options = (e.data.parameters && e.data.parameters["layout_options"]) ? e.data.parameters["layout_options"] : e.data["layout_options"];
    let layout_query = (e.data.parameters && e.data.parameters["layout_query"]) ? e.data.parameters["layout_query"] : e.data["layout_query"];
    let limit = (e.data.parameters && e.data.parameters["limit"]) ? e.data.parameters["limit"] : e.data["limit"];
    let meta = (e.data.parameters && e.data.parameters["meta"]) ? e.data.parameters["meta"] : e.data["meta"];
    let offset = (e.data.parameters && e.data.parameters["offset"]) ? e.data.parameters["offset"] : e.data["offset"];
    let page = (e.data.parameters && e.data.parameters["page"]) ? e.data.parameters["page"] : e.data["page"];
    let role = (e.data.parameters && e.data.parameters["role"]) ? e.data.parameters["role"] : e.data["role"];
    let search = (e.data.parameters && e.data.parameters["search"]) ? e.data.parameters["search"] : e.data["search"];
    let search_query = (e.data.parameters && e.data.parameters["search_query"]) ? e.data.parameters["search_query"] : e.data["search_query"];
    let sort = (e.data.parameters && e.data.parameters["sort"]) ? e.data.parameters["sort"] : e.data["sort"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    let translation = (e.data.parameters && e.data.parameters["translation"]) ? e.data.parameters["translation"] : e.data["translation"];
    let view_options = (e.data.parameters && e.data.parameters["view_options"]) ? e.data.parameters["view_options"] : e.data["view_options"];
    let view_query = (e.data.parameters && e.data.parameters["view_query"]) ? e.data.parameters["view_query"] : e.data["view_query"];
    let view_type = (e.data.parameters && e.data.parameters["view_type"]) ? e.data.parameters["view_type"] : e.data["view_type"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPresets(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type), function() {
      bp.log.info(`Monitor Presets: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPresetsExists(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type);
    });
  }
});

// Story: crud:Comments:linear:1
bthread("crud:Comments:linear:1", function () {
  let Fields = "Fields_410_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_410_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_410_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_410_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_410_" + Math.floor(Math.random() * 10000);
  let Page = "Page_410_" + Math.floor(Math.random() * 10000);
  let Search = "Search_410_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_410_" + Math.floor(Math.random() * 10000);
  let collection = "collection_410_" + Math.floor(Math.random() * 10000);
  let comment = "comment_410_" + Math.floor(Math.random() * 10000);
  let id = "id_410_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let item = "item_410_" + Math.floor(Math.random() * 10000);
  createComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  verifyCommentsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  updateComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  deleteComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  tryToDeleteANonExistingComments(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  verifyCommentsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
});

// Story: crud:Comments:linear:2
bthread("crud:Comments:linear:2", function () {
  let Fields = "Fields_420_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_420_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_420_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_420_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_420_" + Math.floor(Math.random() * 10000);
  let Page = "Page_420_" + Math.floor(Math.random() * 10000);
  let Search = "Search_420_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_420_" + Math.floor(Math.random() * 10000);
  let collection = "collection_420_" + Math.floor(Math.random() * 10000);
  let comment = "comment_420_" + Math.floor(Math.random() * 10000);
  let id = "id_420_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let item = "item_420_" + Math.floor(Math.random() * 10000);
  createComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  verifyCommentsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  updateComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  deleteComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  tryToDeleteANonExistingComments(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  verifyCommentsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
});

// Story: crud:Comments:linear:3
bthread("crud:Comments:linear:3", function () {
  let Fields = "Fields_430_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_430_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_430_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_430_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_430_" + Math.floor(Math.random() * 10000);
  let Page = "Page_430_" + Math.floor(Math.random() * 10000);
  let Search = "Search_430_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_430_" + Math.floor(Math.random() * 10000);
  let collection = "collection_430_" + Math.floor(Math.random() * 10000);
  let comment = "comment_430_" + Math.floor(Math.random() * 10000);
  let id = "id_430_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let item = "item_430_" + Math.floor(Math.random() * 10000);
  createComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  verifyCommentsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  updateComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  deleteComment(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  tryToDeleteANonExistingComments(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
  verifyCommentsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
});

// Monitor: Comments Verification
bthread("monitor:Comments", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCommentsAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Page = (e.data.parameters && e.data.parameters["Page"]) ? e.data.parameters["Page"] : e.data["Page"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let comment = (e.data.parameters && e.data.parameters["comment"]) ? e.data.parameters["comment"] : e.data["comment"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let item = (e.data.parameters && e.data.parameters["item"]) ? e.data.parameters["item"] : e.data["item"];
    // Block Deletion while Verifying Existence
    block(matchDeletedComments(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item), function() {
      bp.log.info(`Monitor Comments: Verifying persistence of ID ${id} inside deletion block.`);
        verifyCommentsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection, comment, id, item);
    });
  }
});

// Story: crud:Fields:linear:1
bthread("crud:Fields:linear:1", function () {
  let collection = "collection_460_" + Math.floor(Math.random() * 10000);
  let comment = "comment_460_" + Math.floor(Math.random() * 10000);
  let default_value = "default_value_460_" + Math.floor(Math.random() * 10000);
  let display = "display_460_" + Math.floor(Math.random() * 10000);
  let display_options = "display_options_460_" + Math.floor(Math.random() * 10000);
  let field = "field_460_" + Math.floor(Math.random() * 10000);
  let foreign_key_column = "foreign_key_column_460_" + Math.floor(Math.random() * 10000);
  let foreign_key_schema = "foreign_key_schema_460_" + Math.floor(Math.random() * 10000);
  let foreign_key_table = "foreign_key_table_460_" + Math.floor(Math.random() * 10000);
  let group = 460;
  let has_auto_increment = true;
  let hidden = true;
  let id = "id_460_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let is_nullable = true;
  let is_primary_key = true;
  let locked = true;
  let max_length = 460;
  let name = "name_460_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let note = "note_460_" + Math.floor(Math.random() * 10000);
  let options = "options_460_" + Math.floor(Math.random() * 10000);
  let readonly = true;
  let schema = "schema_460_" + Math.floor(Math.random() * 10000);
  let sort = 460;
  let special = "special_460_" + Math.floor(Math.random() * 10000);
  let system_interface = "system-interface_460_" + Math.floor(Math.random() * 10000);
  let table = "table_460_" + Math.floor(Math.random() * 10000);
  let translation = "translation_460_" + Math.floor(Math.random() * 10000);
  let type = "type_460_" + Math.floor(Math.random() * 10000);
  let width = 460;
  createField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  verifyFieldsExists(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  updateField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  deleteField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  tryToDeleteANonExistingFields(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  verifyFieldsDoesNotExist(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
});

// Story: crud:Fields:linear:2
bthread("crud:Fields:linear:2", function () {
  let collection = "collection_470_" + Math.floor(Math.random() * 10000);
  let comment = "comment_470_" + Math.floor(Math.random() * 10000);
  let default_value = "default_value_470_" + Math.floor(Math.random() * 10000);
  let display = "display_470_" + Math.floor(Math.random() * 10000);
  let display_options = "display_options_470_" + Math.floor(Math.random() * 10000);
  let field = "field_470_" + Math.floor(Math.random() * 10000);
  let foreign_key_column = "foreign_key_column_470_" + Math.floor(Math.random() * 10000);
  let foreign_key_schema = "foreign_key_schema_470_" + Math.floor(Math.random() * 10000);
  let foreign_key_table = "foreign_key_table_470_" + Math.floor(Math.random() * 10000);
  let group = 470;
  let has_auto_increment = true;
  let hidden = true;
  let id = "id_470_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let is_nullable = true;
  let is_primary_key = true;
  let locked = true;
  let max_length = 470;
  let name = "name_470_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let note = "note_470_" + Math.floor(Math.random() * 10000);
  let options = "options_470_" + Math.floor(Math.random() * 10000);
  let readonly = true;
  let schema = "schema_470_" + Math.floor(Math.random() * 10000);
  let sort = 470;
  let special = "special_470_" + Math.floor(Math.random() * 10000);
  let system_interface = "system-interface_470_" + Math.floor(Math.random() * 10000);
  let table = "table_470_" + Math.floor(Math.random() * 10000);
  let translation = "translation_470_" + Math.floor(Math.random() * 10000);
  let type = "type_470_" + Math.floor(Math.random() * 10000);
  let width = 470;
  createField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  verifyFieldsExists(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  updateField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  deleteField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  tryToDeleteANonExistingFields(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  verifyFieldsDoesNotExist(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
});

// Story: crud:Fields:linear:3
bthread("crud:Fields:linear:3", function () {
  let collection = "collection_480_" + Math.floor(Math.random() * 10000);
  let comment = "comment_480_" + Math.floor(Math.random() * 10000);
  let default_value = "default_value_480_" + Math.floor(Math.random() * 10000);
  let display = "display_480_" + Math.floor(Math.random() * 10000);
  let display_options = "display_options_480_" + Math.floor(Math.random() * 10000);
  let field = "field_480_" + Math.floor(Math.random() * 10000);
  let foreign_key_column = "foreign_key_column_480_" + Math.floor(Math.random() * 10000);
  let foreign_key_schema = "foreign_key_schema_480_" + Math.floor(Math.random() * 10000);
  let foreign_key_table = "foreign_key_table_480_" + Math.floor(Math.random() * 10000);
  let group = 480;
  let has_auto_increment = true;
  let hidden = true;
  let id = "id_480_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let is_nullable = true;
  let is_primary_key = true;
  let locked = true;
  let max_length = 480;
  let name = "name_480_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let note = "note_480_" + Math.floor(Math.random() * 10000);
  let options = "options_480_" + Math.floor(Math.random() * 10000);
  let readonly = true;
  let schema = "schema_480_" + Math.floor(Math.random() * 10000);
  let sort = 480;
  let special = "special_480_" + Math.floor(Math.random() * 10000);
  let system_interface = "system-interface_480_" + Math.floor(Math.random() * 10000);
  let table = "table_480_" + Math.floor(Math.random() * 10000);
  let translation = "translation_480_" + Math.floor(Math.random() * 10000);
  let type = "type_480_" + Math.floor(Math.random() * 10000);
  let width = 480;
  createField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  verifyFieldsExists(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  updateField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  deleteField(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  tryToDeleteANonExistingFields(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
  verifyFieldsDoesNotExist(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
});

// Monitor: Fields Verification
bthread("monitor:Fields", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFieldsAdded() });
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let comment = (e.data.parameters && e.data.parameters["comment"]) ? e.data.parameters["comment"] : e.data["comment"];
    let default_value = (e.data.parameters && e.data.parameters["default_value"]) ? e.data.parameters["default_value"] : e.data["default_value"];
    let display = (e.data.parameters && e.data.parameters["display"]) ? e.data.parameters["display"] : e.data["display"];
    let display_options = (e.data.parameters && e.data.parameters["display_options"]) ? e.data.parameters["display_options"] : e.data["display_options"];
    let field = (e.data.parameters && e.data.parameters["field"]) ? e.data.parameters["field"] : e.data["field"];
    let foreign_key_column = (e.data.parameters && e.data.parameters["foreign_key_column"]) ? e.data.parameters["foreign_key_column"] : e.data["foreign_key_column"];
    let foreign_key_schema = (e.data.parameters && e.data.parameters["foreign_key_schema"]) ? e.data.parameters["foreign_key_schema"] : e.data["foreign_key_schema"];
    let foreign_key_table = (e.data.parameters && e.data.parameters["foreign_key_table"]) ? e.data.parameters["foreign_key_table"] : e.data["foreign_key_table"];
    let group = (e.data.parameters && e.data.parameters["group"]) ? e.data.parameters["group"] : e.data["group"];
    let has_auto_increment = (e.data.parameters && e.data.parameters["has_auto_increment"]) ? e.data.parameters["has_auto_increment"] : e.data["has_auto_increment"];
    let hidden = (e.data.parameters && e.data.parameters["hidden"]) ? e.data.parameters["hidden"] : e.data["hidden"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let is_nullable = (e.data.parameters && e.data.parameters["is_nullable"]) ? e.data.parameters["is_nullable"] : e.data["is_nullable"];
    let is_primary_key = (e.data.parameters && e.data.parameters["is_primary_key"]) ? e.data.parameters["is_primary_key"] : e.data["is_primary_key"];
    let locked = (e.data.parameters && e.data.parameters["locked"]) ? e.data.parameters["locked"] : e.data["locked"];
    let max_length = (e.data.parameters && e.data.parameters["max_length"]) ? e.data.parameters["max_length"] : e.data["max_length"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let note = (e.data.parameters && e.data.parameters["note"]) ? e.data.parameters["note"] : e.data["note"];
    let options = (e.data.parameters && e.data.parameters["options"]) ? e.data.parameters["options"] : e.data["options"];
    let readonly = (e.data.parameters && e.data.parameters["readonly"]) ? e.data.parameters["readonly"] : e.data["readonly"];
    let schema = (e.data.parameters && e.data.parameters["schema"]) ? e.data.parameters["schema"] : e.data["schema"];
    let sort = (e.data.parameters && e.data.parameters["sort"]) ? e.data.parameters["sort"] : e.data["sort"];
    let special = (e.data.parameters && e.data.parameters["special"]) ? e.data.parameters["special"] : e.data["special"];
    let system_interface = (e.data.parameters && e.data.parameters["system-interface"]) ? e.data.parameters["system-interface"] : e.data["system-interface"];
    let table = (e.data.parameters && e.data.parameters["table"]) ? e.data.parameters["table"] : e.data["table"];
    let translation = (e.data.parameters && e.data.parameters["translation"]) ? e.data.parameters["translation"] : e.data["translation"];
    let type = (e.data.parameters && e.data.parameters["type"]) ? e.data.parameters["type"] : e.data["type"];
    let width = (e.data.parameters && e.data.parameters["width"]) ? e.data.parameters["width"] : e.data["width"];
    // Block Deletion while Verifying Existence
    block(matchDeletedFields(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width), function() {
      bp.log.info(`Monitor Fields: Verifying persistence of ID ${id} inside deletion block.`);
        verifyFieldsExists(collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
    });
  }
});

// Story: crud:Files:linear:1
bthread("crud:Files:linear:1", function () {
  let data = "data_510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let description = "description_510_" + Math.floor(Math.random() * 10000);
  let filename_download = "filename_download_510_" + Math.floor(Math.random() * 10000);
  let folder = "folder_510_" + Math.floor(Math.random() * 10000);
  let id = "id_510_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let tags = "tags_510_" + Math.floor(Math.random() * 10000);
  let title = "title_510_" + Math.floor(Math.random() * 10000);
  createFile(data, description, filename_download, folder, id, tags, title);
  verifyFilesExists(data, description, filename_download, folder, id, tags, title);
  updateFile(data, description, filename_download, folder, id, tags, title);
  deleteFile(data, description, filename_download, folder, id, tags, title);
  tryToDeleteANonExistingFiles(data, description, filename_download, folder, id, tags, title);
  verifyFilesDoesNotExist(data, description, filename_download, folder, id, tags, title);
});

// Story: crud:Files:linear:2
bthread("crud:Files:linear:2", function () {
  let data = "data_520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let description = "description_520_" + Math.floor(Math.random() * 10000);
  let filename_download = "filename_download_520_" + Math.floor(Math.random() * 10000);
  let folder = "folder_520_" + Math.floor(Math.random() * 10000);
  let id = "id_520_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let tags = "tags_520_" + Math.floor(Math.random() * 10000);
  let title = "title_520_" + Math.floor(Math.random() * 10000);
  createFile(data, description, filename_download, folder, id, tags, title);
  verifyFilesExists(data, description, filename_download, folder, id, tags, title);
  updateFile(data, description, filename_download, folder, id, tags, title);
  deleteFile(data, description, filename_download, folder, id, tags, title);
  tryToDeleteANonExistingFiles(data, description, filename_download, folder, id, tags, title);
  verifyFilesDoesNotExist(data, description, filename_download, folder, id, tags, title);
});

// Story: crud:Files:linear:3
bthread("crud:Files:linear:3", function () {
  let data = "data_530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let description = "description_530_" + Math.floor(Math.random() * 10000);
  let filename_download = "filename_download_530_" + Math.floor(Math.random() * 10000);
  let folder = "folder_530_" + Math.floor(Math.random() * 10000);
  let id = "id_530_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let tags = "tags_530_" + Math.floor(Math.random() * 10000);
  let title = "title_530_" + Math.floor(Math.random() * 10000);
  createFile(data, description, filename_download, folder, id, tags, title);
  verifyFilesExists(data, description, filename_download, folder, id, tags, title);
  updateFile(data, description, filename_download, folder, id, tags, title);
  deleteFile(data, description, filename_download, folder, id, tags, title);
  tryToDeleteANonExistingFiles(data, description, filename_download, folder, id, tags, title);
  verifyFilesDoesNotExist(data, description, filename_download, folder, id, tags, title);
});

// Monitor: Files Verification
bthread("monitor:Files", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFilesAdded() });
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let filename_download = (e.data.parameters && e.data.parameters["filename_download"]) ? e.data.parameters["filename_download"] : e.data["filename_download"];
    let folder = (e.data.parameters && e.data.parameters["folder"]) ? e.data.parameters["folder"] : e.data["folder"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let tags = (e.data.parameters && e.data.parameters["tags"]) ? e.data.parameters["tags"] : e.data["tags"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedFiles(data, description, filename_download, folder, id, tags, title), function() {
      bp.log.info(`Monitor Files: Verifying persistence of ID ${id} inside deletion block.`);
        verifyFilesExists(data, description, filename_download, folder, id, tags, title);
    });
  }
});

// Story: crud:Flows:linear:1
bthread("crud:Flows:linear:1", function () {
  let data = "data_560_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_560_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createFlow(data, id);
  verifyFlowsExists(data, id);
  updateFlow(data, id);
  deleteFlow(data, id);
  tryToDeleteANonExistingFlows(data, id);
  verifyFlowsDoesNotExist(data, id);
});

// Story: crud:Flows:linear:2
bthread("crud:Flows:linear:2", function () {
  let data = "data_570_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_570_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createFlow(data, id);
  verifyFlowsExists(data, id);
  updateFlow(data, id);
  deleteFlow(data, id);
  tryToDeleteANonExistingFlows(data, id);
  verifyFlowsDoesNotExist(data, id);
});

// Story: crud:Flows:linear:3
bthread("crud:Flows:linear:3", function () {
  let data = "data_580_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_580_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  createFlow(data, id);
  verifyFlowsExists(data, id);
  updateFlow(data, id);
  deleteFlow(data, id);
  tryToDeleteANonExistingFlows(data, id);
  verifyFlowsDoesNotExist(data, id);
});

// Monitor: Flows Verification
bthread("monitor:Flows", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFlowsAdded() });
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedFlows(data, id), function() {
      bp.log.info(`Monitor Flows: Verifying persistence of ID ${id} inside deletion block.`);
        verifyFlowsExists(data, id);
    });
  }
});

// Story: crud:Folders:linear:1
bthread("crud:Folders:linear:1", function () {
  let id = "id_610_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let name = "name_610_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let parent = 610;
  createFolder(id, name, parent);
  verifyFoldersExists(id, name, parent);
  updateFolder(id, name, parent);
  deleteFolder(id, name, parent);
  tryToDeleteANonExistingFolders(id, name, parent);
  verifyFoldersDoesNotExist(id, name, parent);
});

// Story: crud:Folders:linear:2
bthread("crud:Folders:linear:2", function () {
  let id = "id_620_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let name = "name_620_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let parent = 620;
  createFolder(id, name, parent);
  verifyFoldersExists(id, name, parent);
  updateFolder(id, name, parent);
  deleteFolder(id, name, parent);
  tryToDeleteANonExistingFolders(id, name, parent);
  verifyFoldersDoesNotExist(id, name, parent);
});

// Story: crud:Folders:linear:3
bthread("crud:Folders:linear:3", function () {
  let id = "id_630_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let name = "name_630_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let parent = 630;
  createFolder(id, name, parent);
  verifyFoldersExists(id, name, parent);
  updateFolder(id, name, parent);
  deleteFolder(id, name, parent);
  tryToDeleteANonExistingFolders(id, name, parent);
  verifyFoldersDoesNotExist(id, name, parent);
});

// Monitor: Folders Verification
bthread("monitor:Folders", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFoldersAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let parent = (e.data.parameters && e.data.parameters["parent"]) ? e.data.parameters["parent"] : e.data["parent"];
    // Block Deletion while Verifying Existence
    block(matchDeletedFolders(id, name, parent), function() {
      bp.log.info(`Monitor Folders: Verifying persistence of ID ${id} inside deletion block.`);
        verifyFoldersExists(id, name, parent);
    });
  }
});

// Story: crud:Operations:linear:1
bthread("crud:Operations:linear:1", function () {
  let data = "data_660_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_660_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let keys = "keys_660_" + Math.floor(Math.random() * 10000);
  // Guard against destructive parallel batch delete event
  block(DESTRUCTIVE_DELETE_EVENTS, function() {
  createOperation(data, id, keys);
  verifyOperationsExists(data, id, keys);
  updateOperations(data, id, keys);
  deleteOperation(data, id, keys);
  tryToDeleteANonExistingOperations(data, id, keys);
  verifyOperationsDoesNotExist(data, id, keys);
  });
});

// Story: crud:Operations:linear:2
bthread("crud:Operations:linear:2", function () {
  let data = "data_670_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_670_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let keys = "keys_670_" + Math.floor(Math.random() * 10000);
  // Guard against destructive parallel batch delete event
  block(DESTRUCTIVE_DELETE_EVENTS, function() {
  createOperation(data, id, keys);
  verifyOperationsExists(data, id, keys);
  updateOperations(data, id, keys);
  deleteOperation(data, id, keys);
  tryToDeleteANonExistingOperations(data, id, keys);
  verifyOperationsDoesNotExist(data, id, keys);
  });
});

// Story: crud:Operations:linear:3
bthread("crud:Operations:linear:3", function () {
  let data = "data_680_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let id = "id_680_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let keys = "keys_680_" + Math.floor(Math.random() * 10000);
  // Guard against destructive parallel batch delete event
  block(DESTRUCTIVE_DELETE_EVENTS, function() {
  createOperation(data, id, keys);
  verifyOperationsExists(data, id, keys);
  updateOperations(data, id, keys);
  deleteOperation(data, id, keys);
  tryToDeleteANonExistingOperations(data, id, keys);
  verifyOperationsDoesNotExist(data, id, keys);
  });
});

// Monitor: Operations Verification
bthread("monitor:Operations", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOperationsAdded() });
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let keys = (e.data.parameters && e.data.parameters["keys"]) ? e.data.parameters["keys"] : e.data["keys"];
    // Block Deletion while Verifying Existence
    block(matchDeletedOperations(data, id, keys), function() {
      bp.log.info(`Monitor Operations: Verifying persistence of ID ${id} inside deletion block.`);
        verifyOperationsExists(data, id, keys);
    });
  }
});

// Story: crud:Permissions:linear:1
bthread("crud:Permissions:linear:1", function () {
  let collection = "collection_710_" + Math.floor(Math.random() * 10000);
  let comment = "comment_710_" + Math.floor(Math.random() * 10000);
  let create = "create_710_" + Math.floor(Math.random() * 10000);
  let _delete = "delete_710_" + Math.floor(Math.random() * 10000);
  let explain = "explain_710_" + Math.floor(Math.random() * 10000);
  let id = "id_710_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let keys = "keys_710_" + Math.floor(Math.random() * 10000);
  let name = "name_710_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let read = "read_710_" + Math.floor(Math.random() * 10000);
  let read_field_blacklist = "read_field_blacklist_710_" + Math.floor(Math.random() * 10000);
  let role = 710;
  let status = "status_710_" + Math.floor(Math.random() * 10000);
  let status_blacklist = "status_blacklist_710_" + Math.floor(Math.random() * 10000);
  let update = "update_710_" + Math.floor(Math.random() * 10000);
  let write_field_blacklist = "write_field_blacklist_710_" + Math.floor(Math.random() * 10000);
  // Guard against destructive parallel batch delete event
  block(DESTRUCTIVE_DELETE_EVENTS, function() {
  createPermission(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionsExists(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  updatePermissions(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  deletePermission(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToDeleteANonExistingPermissions(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionsDoesNotExist(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  });
});

// Story: crud:Permissions:linear:2
bthread("crud:Permissions:linear:2", function () {
  let collection = "collection_720_" + Math.floor(Math.random() * 10000);
  let comment = "comment_720_" + Math.floor(Math.random() * 10000);
  let create = "create_720_" + Math.floor(Math.random() * 10000);
  let _delete = "delete_720_" + Math.floor(Math.random() * 10000);
  let explain = "explain_720_" + Math.floor(Math.random() * 10000);
  let id = "id_720_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let keys = "keys_720_" + Math.floor(Math.random() * 10000);
  let name = "name_720_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let read = "read_720_" + Math.floor(Math.random() * 10000);
  let read_field_blacklist = "read_field_blacklist_720_" + Math.floor(Math.random() * 10000);
  let role = 720;
  let status = "status_720_" + Math.floor(Math.random() * 10000);
  let status_blacklist = "status_blacklist_720_" + Math.floor(Math.random() * 10000);
  let update = "update_720_" + Math.floor(Math.random() * 10000);
  let write_field_blacklist = "write_field_blacklist_720_" + Math.floor(Math.random() * 10000);
  // Guard against destructive parallel batch delete event
  block(DESTRUCTIVE_DELETE_EVENTS, function() {
  createPermission(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionsExists(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  updatePermissions(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  deletePermission(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToDeleteANonExistingPermissions(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionsDoesNotExist(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  });
});

// Story: crud:Permissions:linear:3
bthread("crud:Permissions:linear:3", function () {
  let collection = "collection_730_" + Math.floor(Math.random() * 10000);
  let comment = "comment_730_" + Math.floor(Math.random() * 10000);
  let create = "create_730_" + Math.floor(Math.random() * 10000);
  let _delete = "delete_730_" + Math.floor(Math.random() * 10000);
  let explain = "explain_730_" + Math.floor(Math.random() * 10000);
  let id = "id_730_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let keys = "keys_730_" + Math.floor(Math.random() * 10000);
  let name = "name_730_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let read = "read_730_" + Math.floor(Math.random() * 10000);
  let read_field_blacklist = "read_field_blacklist_730_" + Math.floor(Math.random() * 10000);
  let role = 730;
  let status = "status_730_" + Math.floor(Math.random() * 10000);
  let status_blacklist = "status_blacklist_730_" + Math.floor(Math.random() * 10000);
  let update = "update_730_" + Math.floor(Math.random() * 10000);
  let write_field_blacklist = "write_field_blacklist_730_" + Math.floor(Math.random() * 10000);
  // Guard against destructive parallel batch delete event
  block(DESTRUCTIVE_DELETE_EVENTS, function() {
  createPermission(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionsExists(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  updatePermissions(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  deletePermission(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToDeleteANonExistingPermissions(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionsDoesNotExist(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  });
});

// Monitor: Permissions Verification
bthread("monitor:Permissions", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPermissionsAdded() });
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let comment = (e.data.parameters && e.data.parameters["comment"]) ? e.data.parameters["comment"] : e.data["comment"];
    let create = (e.data.parameters && e.data.parameters["create"]) ? e.data.parameters["create"] : e.data["create"];
    let _delete = (e.data.parameters && e.data.parameters["delete"]) ? e.data.parameters["delete"] : e.data["delete"];
    let explain = (e.data.parameters && e.data.parameters["explain"]) ? e.data.parameters["explain"] : e.data["explain"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let keys = (e.data.parameters && e.data.parameters["keys"]) ? e.data.parameters["keys"] : e.data["keys"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let read = (e.data.parameters && e.data.parameters["read"]) ? e.data.parameters["read"] : e.data["read"];
    let read_field_blacklist = (e.data.parameters && e.data.parameters["read_field_blacklist"]) ? e.data.parameters["read_field_blacklist"] : e.data["read_field_blacklist"];
    let role = (e.data.parameters && e.data.parameters["role"]) ? e.data.parameters["role"] : e.data["role"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let status_blacklist = (e.data.parameters && e.data.parameters["status_blacklist"]) ? e.data.parameters["status_blacklist"] : e.data["status_blacklist"];
    let update = (e.data.parameters && e.data.parameters["update"]) ? e.data.parameters["update"] : e.data["update"];
    let write_field_blacklist = (e.data.parameters && e.data.parameters["write_field_blacklist"]) ? e.data.parameters["write_field_blacklist"] : e.data["write_field_blacklist"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPermissions(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist), function() {
      bp.log.info(`Monitor Permissions: Verifying persistence of ID ${id} inside deletion block.`);
        verifyPermissionsExists(collection, comment, create, _delete, explain, id, keys, name, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
    });
  }
});

// Story: crud:Relations:linear:1
bthread("crud:Relations:linear:1", function () {
  let Fields; // Resolved Dependency
  let Filter = "Filter_760_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_760_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_760_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_760_" + Math.floor(Math.random() * 10000);
  let Page = "Page_760_" + Math.floor(Math.random() * 10000);
  let Search = "Search_760_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_760_" + Math.floor(Math.random() * 10000);
  let collection_many = "collection_many_760_" + Math.floor(Math.random() * 10000);
  let collection_one = "collection_one_760_" + Math.floor(Math.random() * 10000);
  let field_many = "field_many_760_" + Math.floor(Math.random() * 10000);
  let field_one = "field_one_760_" + Math.floor(Math.random() * 10000);
  let id = "id_760_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let junction_field = "junction_field_760_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Fields"] = matchAnyFieldsAdded();
  let pkMap = {"Fields": "collection"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  Fields = captured["Fields"];
  createRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  updateRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  deleteRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToDeleteANonExistingRelations(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Relations:linear:2
bthread("crud:Relations:linear:2", function () {
  let Fields; // Resolved Dependency
  let Filter = "Filter_770_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_770_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_770_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_770_" + Math.floor(Math.random() * 10000);
  let Page = "Page_770_" + Math.floor(Math.random() * 10000);
  let Search = "Search_770_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_770_" + Math.floor(Math.random() * 10000);
  let collection_many = "collection_many_770_" + Math.floor(Math.random() * 10000);
  let collection_one = "collection_one_770_" + Math.floor(Math.random() * 10000);
  let field_many = "field_many_770_" + Math.floor(Math.random() * 10000);
  let field_one = "field_one_770_" + Math.floor(Math.random() * 10000);
  let id = "id_770_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let junction_field = "junction_field_770_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Fields"] = matchAnyFieldsAdded();
  let pkMap = {"Fields": "collection"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  Fields = captured["Fields"];
  createRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  updateRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  deleteRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToDeleteANonExistingRelations(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Relations:linear:3
bthread("crud:Relations:linear:3", function () {
  let Fields; // Resolved Dependency
  let Filter = "Filter_780_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_780_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_780_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_780_" + Math.floor(Math.random() * 10000);
  let Page = "Page_780_" + Math.floor(Math.random() * 10000);
  let Search = "Search_780_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_780_" + Math.floor(Math.random() * 10000);
  let collection_many = "collection_many_780_" + Math.floor(Math.random() * 10000);
  let collection_one = "collection_one_780_" + Math.floor(Math.random() * 10000);
  let field_many = "field_many_780_" + Math.floor(Math.random() * 10000);
  let field_one = "field_one_780_" + Math.floor(Math.random() * 10000);
  let id = "id_780_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let junction_field = "junction_field_780_" + Math.floor(Math.random() * 10000);
  // Ensure dependencies are resolved before starting CRUD
  let deps = {};
  deps["Fields"] = matchAnyFieldsAdded();
  let pkMap = {"Fields": "collection"};
  let captured = resolveDependencies(deps, pkMap);
  bp.log.info(`Dependencies executed: ${Object.keys(captured).join(", ")}. Continuing story.`);
  Fields = captured["Fields"];
  createRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  updateRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  deleteRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToDeleteANonExistingRelations(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Monitor: Relations Verification
bthread("monitor:Relations", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRelationsAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Page = (e.data.parameters && e.data.parameters["Page"]) ? e.data.parameters["Page"] : e.data["Page"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let collection_many = (e.data.parameters && e.data.parameters["collection_many"]) ? e.data.parameters["collection_many"] : e.data["collection_many"];
    let collection_one = (e.data.parameters && e.data.parameters["collection_one"]) ? e.data.parameters["collection_one"] : e.data["collection_one"];
    let field_many = (e.data.parameters && e.data.parameters["field_many"]) ? e.data.parameters["field_many"] : e.data["field_many"];
    let field_one = (e.data.parameters && e.data.parameters["field_one"]) ? e.data.parameters["field_one"] : e.data["field_one"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let junction_field = (e.data.parameters && e.data.parameters["junction_field"]) ? e.data.parameters["junction_field"] : e.data["junction_field"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRelations(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field), function() {
      bp.log.info(`Monitor Relations: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRelationsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
    });
  }
});

// Story: crud:Roles:linear:1
bthread("crud:Roles:linear:1", function () {
  let Fields = "Fields_810_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_810_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_810_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_810_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_810_" + Math.floor(Math.random() * 10000);
  let Page = "Page_810_" + Math.floor(Math.random() * 10000);
  let Search = "Search_810_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_810_" + Math.floor(Math.random() * 10000);
  let description = "description_810_" + Math.floor(Math.random() * 10000);
  let enforce_tfa = true;
  let external_id = "external_id_810_" + Math.floor(Math.random() * 10000);
  let id = "id_810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let ip_access = "ip_access_810_" + Math.floor(Math.random() * 10000);
  let module_listing = "module_listing_810_" + Math.floor(Math.random() * 10000);
  let name = "name_810_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRolesExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  updateRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  deleteRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToDeleteANonExistingRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRolesDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Roles:linear:2
bthread("crud:Roles:linear:2", function () {
  let Fields = "Fields_820_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_820_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_820_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_820_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_820_" + Math.floor(Math.random() * 10000);
  let Page = "Page_820_" + Math.floor(Math.random() * 10000);
  let Search = "Search_820_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_820_" + Math.floor(Math.random() * 10000);
  let description = "description_820_" + Math.floor(Math.random() * 10000);
  let enforce_tfa = true;
  let external_id = "external_id_820_" + Math.floor(Math.random() * 10000);
  let id = "id_820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let ip_access = "ip_access_820_" + Math.floor(Math.random() * 10000);
  let module_listing = "module_listing_820_" + Math.floor(Math.random() * 10000);
  let name = "name_820_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRolesExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  updateRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  deleteRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToDeleteANonExistingRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRolesDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Roles:linear:3
bthread("crud:Roles:linear:3", function () {
  let Fields = "Fields_830_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_830_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_830_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_830_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_830_" + Math.floor(Math.random() * 10000);
  let Page = "Page_830_" + Math.floor(Math.random() * 10000);
  let Search = "Search_830_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_830_" + Math.floor(Math.random() * 10000);
  let description = "description_830_" + Math.floor(Math.random() * 10000);
  let enforce_tfa = true;
  let external_id = "external_id_830_" + Math.floor(Math.random() * 10000);
  let id = "id_830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let ip_access = "ip_access_830_" + Math.floor(Math.random() * 10000);
  let module_listing = "module_listing_830_" + Math.floor(Math.random() * 10000);
  let name = "name_830_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRolesExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  updateRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  deleteRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToDeleteANonExistingRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRolesDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Monitor: Roles Verification
bthread("monitor:Roles", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRolesAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Page = (e.data.parameters && e.data.parameters["Page"]) ? e.data.parameters["Page"] : e.data["Page"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let enforce_tfa = (e.data.parameters && e.data.parameters["enforce_tfa"]) ? e.data.parameters["enforce_tfa"] : e.data["enforce_tfa"];
    let external_id = (e.data.parameters && e.data.parameters["external_id"]) ? e.data.parameters["external_id"] : e.data["external_id"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let ip_access = (e.data.parameters && e.data.parameters["ip_access"]) ? e.data.parameters["ip_access"] : e.data["ip_access"];
    let module_listing = (e.data.parameters && e.data.parameters["module_listing"]) ? e.data.parameters["module_listing"] : e.data["module_listing"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    // Block Deletion while Verifying Existence
    block(matchDeletedRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name), function() {
      bp.log.info(`Monitor Roles: Verifying persistence of ID ${id} inside deletion block.`);
        verifyRolesExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
    });
  }
});

// Story: crud:Schema:linear:1
bthread("crud:Schema:linear:1", function () {
  let data = "data_860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let force = true;
  let id = "id_860_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  schemaDiff(data, force, id);
});

// Story: crud:Schema:linear:2
bthread("crud:Schema:linear:2", function () {
  let data = "data_870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let force = true;
  let id = "id_870_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  schemaDiff(data, force, id);
});

// Story: crud:Schema:linear:3
bthread("crud:Schema:linear:3", function () {
  let data = "data_880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let force = true;
  let id = "id_880_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  schemaDiff(data, force, id);
});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  let Fields = "Fields_910_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_910_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_910_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_910_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_910_" + Math.floor(Math.random() * 10000);
  let Search = "Search_910_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_910_" + Math.floor(Math.random() * 10000);
  let id = "id_910_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let last_page = "last_page_910_" + Math.floor(Math.random() * 10000);
  let password = "password_910_" + Math.floor(Math.random() * 10000);
  acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password);
});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  let Fields = "Fields_920_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_920_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_920_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_920_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_920_" + Math.floor(Math.random() * 10000);
  let Search = "Search_920_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_920_" + Math.floor(Math.random() * 10000);
  let id = "id_920_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let last_page = "last_page_920_" + Math.floor(Math.random() * 10000);
  let password = "password_920_" + Math.floor(Math.random() * 10000);
  acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password);
});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  let Fields = "Fields_930_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_930_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_930_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_930_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_930_" + Math.floor(Math.random() * 10000);
  let Search = "Search_930_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_930_" + Math.floor(Math.random() * 10000);
  let id = "id_930_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let last_page = "last_page_930_" + Math.floor(Math.random() * 10000);
  let password = "password_930_" + Math.floor(Math.random() * 10000);
  acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password);
});

// Story: crud:Utilities:linear:1
bthread("crud:Utilities:linear:1", function () {
  let id = "id_960_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let length = "length_960_" + Math.floor(Math.random() * 10000);
  clearCache(id, length);
});

// Story: crud:Utilities:linear:2
bthread("crud:Utilities:linear:2", function () {
  let id = "id_970_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let length = "length_970_" + Math.floor(Math.random() * 10000);
  clearCache(id, length);
});

// Story: crud:Utilities:linear:3
bthread("crud:Utilities:linear:3", function () {
  let id = "id_980_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let length = "length_980_" + Math.floor(Math.random() * 10000);
  clearCache(id, length);
});

// Story: crud:Versions:linear:1
bthread("crud:Versions:linear:1", function () {
  let Fields = "Fields_1010_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_1010_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_1010_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_1010_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_1010_" + Math.floor(Math.random() * 10000);
  let Search = "Search_1010_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_1010_" + Math.floor(Math.random() * 10000);
  let data = "data_1010_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1010_" + Math.floor(Math.random() * 10000);
  let id = "id_1010_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let mainHash = "mainHash_1010_" + Math.floor(Math.random() * 10000);
  promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash);
});

// Story: crud:Versions:linear:2
bthread("crud:Versions:linear:2", function () {
  let Fields = "Fields_1020_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_1020_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_1020_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_1020_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_1020_" + Math.floor(Math.random() * 10000);
  let Search = "Search_1020_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_1020_" + Math.floor(Math.random() * 10000);
  let data = "data_1020_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1020_" + Math.floor(Math.random() * 10000);
  let id = "id_1020_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let mainHash = "mainHash_1020_" + Math.floor(Math.random() * 10000);
  promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash);
});

// Story: crud:Versions:linear:3
bthread("crud:Versions:linear:3", function () {
  let Fields = "Fields_1030_" + Math.floor(Math.random() * 10000);
  let Filter = "Filter_1030_" + Math.floor(Math.random() * 10000);
  let Limit = "Limit_1030_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_1030_" + Math.floor(Math.random() * 10000);
  let Offset = "Offset_1030_" + Math.floor(Math.random() * 10000);
  let Search = "Search_1030_" + Math.floor(Math.random() * 10000);
  let Sort = "Sort_1030_" + Math.floor(Math.random() * 10000);
  let data = "data_1030_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let fields = "fields_1030_" + Math.floor(Math.random() * 10000);
  let id = "id_1030_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let mainHash = "mainHash_1030_" + Math.floor(Math.random() * 10000);
  promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash);
});

// Story: crud:Webhooks:linear:1
bthread("crud:Webhooks:linear:1", function () {
  let Fields = "Fields_1060_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_1060_" + Math.floor(Math.random() * 10000);
  let actions = "actions_1060_" + Math.floor(Math.random() * 10000);
  let data = true;
  let id = "id_1060_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let method = "method_1060_" + Math.floor(Math.random() * 10000);
  let name = "name_1060_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_1060_" + Math.floor(Math.random() * 10000);
  let system_collections = "system-collections_1060_" + Math.floor(Math.random() * 10000);
  let url = "url_1060_" + Math.floor(Math.random() * 10000);
  createWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  verifyWebhooksExists(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  updateWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  deleteWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  tryToDeleteANonExistingWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  verifyWebhooksDoesNotExist(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
});

// Story: crud:Webhooks:linear:2
bthread("crud:Webhooks:linear:2", function () {
  let Fields = "Fields_1070_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_1070_" + Math.floor(Math.random() * 10000);
  let actions = "actions_1070_" + Math.floor(Math.random() * 10000);
  let data = true;
  let id = "id_1070_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let method = "method_1070_" + Math.floor(Math.random() * 10000);
  let name = "name_1070_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_1070_" + Math.floor(Math.random() * 10000);
  let system_collections = "system-collections_1070_" + Math.floor(Math.random() * 10000);
  let url = "url_1070_" + Math.floor(Math.random() * 10000);
  createWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  verifyWebhooksExists(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  updateWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  deleteWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  tryToDeleteANonExistingWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  verifyWebhooksDoesNotExist(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
});

// Story: crud:Webhooks:linear:3
bthread("crud:Webhooks:linear:3", function () {
  let Fields = "Fields_1080_" + Math.floor(Math.random() * 10000);
  let Meta = "Meta_1080_" + Math.floor(Math.random() * 10000);
  let actions = "actions_1080_" + Math.floor(Math.random() * 10000);
  let data = true;
  let id = "id_1080_" + new Date().getTime() + "_" + Math.floor(Math.random() * 100000);
  let method = "method_1080_" + Math.floor(Math.random() * 10000);
  let name = "name_1080_" + new Date().getTime() + "_" + Math.floor(Math.random() * 10000);
  let status = "status_1080_" + Math.floor(Math.random() * 10000);
  let system_collections = "system-collections_1080_" + Math.floor(Math.random() * 10000);
  let url = "url_1080_" + Math.floor(Math.random() * 10000);
  createWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  verifyWebhooksExists(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  updateWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  deleteWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  tryToDeleteANonExistingWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
  verifyWebhooksDoesNotExist(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
});

// Monitor: Webhooks Verification
bthread("monitor:Webhooks", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWebhooksAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let actions = (e.data.parameters && e.data.parameters["actions"]) ? e.data.parameters["actions"] : e.data["actions"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let method = (e.data.parameters && e.data.parameters["method"]) ? e.data.parameters["method"] : e.data["method"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let system_collections = (e.data.parameters && e.data.parameters["system-collections"]) ? e.data.parameters["system-collections"] : e.data["system-collections"];
    let url = (e.data.parameters && e.data.parameters["url"]) ? e.data.parameters["url"] : e.data["url"];
    // Block Deletion while Verifying Existence
    block(matchDeletedWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url), function() {
      bp.log.info(`Monitor Webhooks: Verifying persistence of ID ${id} inside deletion block.`);
        verifyWebhooksExists(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
    });
  }
});
