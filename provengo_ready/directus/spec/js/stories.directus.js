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

// --- Monitors ---
// Monitor: Authentication Verification (Existence)
bthread("monitor:Authentication:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyAuthenticationAdded() });
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let provider = (e.data.parameters && e.data.parameters["provider"]) ? e.data.parameters["provider"] : e.data["provider"];
    let redirect = (e.data.parameters && e.data.parameters["redirect"]) ? e.data.parameters["redirect"] : e.data["redirect"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    verifyAuthenticationExists(password, provider, redirect, token);
  }
});

// Monitor: Collections Verification (Existence)
bthread("monitor:Collections:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCollectionsAdded() });
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let archive_app_filter = (e.data.parameters && e.data.parameters["archive_app_filter"]) ? e.data.parameters["archive_app_filter"] : e.data["archive_app_filter"];
    let archive_field = (e.data.parameters && e.data.parameters["archive_field"]) ? e.data.parameters["archive_field"] : e.data["archive_field"];
    let archive_value = (e.data.parameters && e.data.parameters["archive_value"]) ? e.data.parameters["archive_value"] : e.data["archive_value"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let display_template = (e.data.parameters && e.data.parameters["display_template"]) ? e.data.parameters["display_template"] : e.data["display_template"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let hidden = (e.data.parameters && e.data.parameters["hidden"]) ? e.data.parameters["hidden"] : e.data["hidden"];
    let icon = (e.data.parameters && e.data.parameters["icon"]) ? e.data.parameters["icon"] : e.data["icon"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let meta = (e.data.parameters && e.data.parameters["meta"]) ? e.data.parameters["meta"] : e.data["meta"];
    let note = (e.data.parameters && e.data.parameters["note"]) ? e.data.parameters["note"] : e.data["note"];
    let singleton = (e.data.parameters && e.data.parameters["singleton"]) ? e.data.parameters["singleton"] : e.data["singleton"];
    let sort_field = (e.data.parameters && e.data.parameters["sort_field"]) ? e.data.parameters["sort_field"] : e.data["sort_field"];
    let translation = (e.data.parameters && e.data.parameters["translation"]) ? e.data.parameters["translation"] : e.data["translation"];
    let unarchive_value = (e.data.parameters && e.data.parameters["unarchive_value"]) ? e.data.parameters["unarchive_value"] : e.data["unarchive_value"];
    let versioning = (e.data.parameters && e.data.parameters["versioning"]) ? e.data.parameters["versioning"] : e.data["versioning"];
    // Block Deletion while Verifying Existence
    block(matchDeletedCollections(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning), function() { verifyCollectionsExists(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning); });
  }
});

// Monitor: Collections Verification (Absence)
bthread("monitor:Collections:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedCollections() });
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let archive_app_filter = (e.data.parameters && e.data.parameters["archive_app_filter"]) ? e.data.parameters["archive_app_filter"] : e.data["archive_app_filter"];
    let archive_field = (e.data.parameters && e.data.parameters["archive_field"]) ? e.data.parameters["archive_field"] : e.data["archive_field"];
    let archive_value = (e.data.parameters && e.data.parameters["archive_value"]) ? e.data.parameters["archive_value"] : e.data["archive_value"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let display_template = (e.data.parameters && e.data.parameters["display_template"]) ? e.data.parameters["display_template"] : e.data["display_template"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let hidden = (e.data.parameters && e.data.parameters["hidden"]) ? e.data.parameters["hidden"] : e.data["hidden"];
    let icon = (e.data.parameters && e.data.parameters["icon"]) ? e.data.parameters["icon"] : e.data["icon"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let meta = (e.data.parameters && e.data.parameters["meta"]) ? e.data.parameters["meta"] : e.data["meta"];
    let note = (e.data.parameters && e.data.parameters["note"]) ? e.data.parameters["note"] : e.data["note"];
    let singleton = (e.data.parameters && e.data.parameters["singleton"]) ? e.data.parameters["singleton"] : e.data["singleton"];
    let sort_field = (e.data.parameters && e.data.parameters["sort_field"]) ? e.data.parameters["sort_field"] : e.data["sort_field"];
    let translation = (e.data.parameters && e.data.parameters["translation"]) ? e.data.parameters["translation"] : e.data["translation"];
    let unarchive_value = (e.data.parameters && e.data.parameters["unarchive_value"]) ? e.data.parameters["unarchive_value"] : e.data["unarchive_value"];
    let versioning = (e.data.parameters && e.data.parameters["versioning"]) ? e.data.parameters["versioning"] : e.data["versioning"];
    // Block Creation while Verifying Absence
    block(matchAnyCollectionsAdded(), function() { verifyCollectionsDoesNotExist(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning); });
  }
});

// Monitor: Items Verification (Existence)
bthread("monitor:Items:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyItemsAdded() });
    let Collection = (e.data.parameters && e.data.parameters["Collection"]) ? e.data.parameters["Collection"] : e.data["Collection"];
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    // Block Deletion while Verifying Existence
    block(matchDeletedItems(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection), function() { verifyItemsExists(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection); });
  }
});

// Monitor: Items Verification (Absence)
bthread("monitor:Items:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedItems() });
    let Collection = (e.data.parameters && e.data.parameters["Collection"]) ? e.data.parameters["Collection"] : e.data["Collection"];
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    // Block Creation while Verifying Absence
    block(matchAnyItemsAdded(), function() { verifyItemsDoesNotExist(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection); });
  }
});

// Monitor: Presets Verification (Existence)
bthread("monitor:Presets:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPresetsAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Id = (e.data.parameters && e.data.parameters["Id"]) ? e.data.parameters["Id"] : e.data["Id"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Page = (e.data.parameters && e.data.parameters["Page"]) ? e.data.parameters["Page"] : e.data["Page"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let filters = (e.data.parameters && e.data.parameters["filters"]) ? e.data.parameters["filters"] : e.data["filters"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let layout = (e.data.parameters && e.data.parameters["layout"]) ? e.data.parameters["layout"] : e.data["layout"];
    let layout_options = (e.data.parameters && e.data.parameters["layout_options"]) ? e.data.parameters["layout_options"] : e.data["layout_options"];
    let layout_query = (e.data.parameters && e.data.parameters["layout_query"]) ? e.data.parameters["layout_query"] : e.data["layout_query"];
    let role = (e.data.parameters && e.data.parameters["role"]) ? e.data.parameters["role"] : e.data["role"];
    let search = (e.data.parameters && e.data.parameters["search"]) ? e.data.parameters["search"] : e.data["search"];
    let search_query = (e.data.parameters && e.data.parameters["search_query"]) ? e.data.parameters["search_query"] : e.data["search_query"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    let translation = (e.data.parameters && e.data.parameters["translation"]) ? e.data.parameters["translation"] : e.data["translation"];
    let view_options = (e.data.parameters && e.data.parameters["view_options"]) ? e.data.parameters["view_options"] : e.data["view_options"];
    let view_query = (e.data.parameters && e.data.parameters["view_query"]) ? e.data.parameters["view_query"] : e.data["view_query"];
    let view_type = (e.data.parameters && e.data.parameters["view_type"]) ? e.data.parameters["view_type"] : e.data["view_type"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPresets(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type), function() { verifyPresetsExists(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type); });
  }
});

// Monitor: Presets Verification (Absence)
bthread("monitor:Presets:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedPresets() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Id = (e.data.parameters && e.data.parameters["Id"]) ? e.data.parameters["Id"] : e.data["Id"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Page = (e.data.parameters && e.data.parameters["Page"]) ? e.data.parameters["Page"] : e.data["Page"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let filters = (e.data.parameters && e.data.parameters["filters"]) ? e.data.parameters["filters"] : e.data["filters"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let layout = (e.data.parameters && e.data.parameters["layout"]) ? e.data.parameters["layout"] : e.data["layout"];
    let layout_options = (e.data.parameters && e.data.parameters["layout_options"]) ? e.data.parameters["layout_options"] : e.data["layout_options"];
    let layout_query = (e.data.parameters && e.data.parameters["layout_query"]) ? e.data.parameters["layout_query"] : e.data["layout_query"];
    let role = (e.data.parameters && e.data.parameters["role"]) ? e.data.parameters["role"] : e.data["role"];
    let search = (e.data.parameters && e.data.parameters["search"]) ? e.data.parameters["search"] : e.data["search"];
    let search_query = (e.data.parameters && e.data.parameters["search_query"]) ? e.data.parameters["search_query"] : e.data["search_query"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    let translation = (e.data.parameters && e.data.parameters["translation"]) ? e.data.parameters["translation"] : e.data["translation"];
    let view_options = (e.data.parameters && e.data.parameters["view_options"]) ? e.data.parameters["view_options"] : e.data["view_options"];
    let view_query = (e.data.parameters && e.data.parameters["view_query"]) ? e.data.parameters["view_query"] : e.data["view_query"];
    let view_type = (e.data.parameters && e.data.parameters["view_type"]) ? e.data.parameters["view_type"] : e.data["view_type"];
    // Block Creation while Verifying Absence
    block(matchAnyPresetsAdded(), function() { verifyPresetsDoesNotExist(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type); });
  }
});

// Monitor: Comments Verification (Existence)
bthread("monitor:Comments:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyCommentsAdded() });
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let comment = (e.data.parameters && e.data.parameters["comment"]) ? e.data.parameters["comment"] : e.data["comment"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let item = (e.data.parameters && e.data.parameters["item"]) ? e.data.parameters["item"] : e.data["item"];
    // Block Deletion while Verifying Existence
    block(matchDeletedComments(collection, comment, id, item), function() { verifyCommentsExists(collection, comment, id, item); });
  }
});

// Monitor: Comments Verification (Absence)
bthread("monitor:Comments:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedComments() });
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let comment = (e.data.parameters && e.data.parameters["comment"]) ? e.data.parameters["comment"] : e.data["comment"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let item = (e.data.parameters && e.data.parameters["item"]) ? e.data.parameters["item"] : e.data["item"];
    // Block Creation while Verifying Absence
    block(matchAnyCommentsAdded(), function() { verifyCommentsDoesNotExist(collection, comment, id, item); });
  }
});

// Monitor: Fields Verification (Existence)
bthread("monitor:Fields:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFieldsAdded() });
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let datatype = (e.data.parameters && e.data.parameters["datatype"]) ? e.data.parameters["datatype"] : e.data["datatype"];
    let field = (e.data.parameters && e.data.parameters["field"]) ? e.data.parameters["field"] : e.data["field"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let length = (e.data.parameters && e.data.parameters["length"]) ? e.data.parameters["length"] : e.data["length"];
    let meta = (e.data.parameters && e.data.parameters["meta"]) ? e.data.parameters["meta"] : e.data["meta"];
    let schema = (e.data.parameters && e.data.parameters["schema"]) ? e.data.parameters["schema"] : e.data["schema"];
    let type = (e.data.parameters && e.data.parameters["type"]) ? e.data.parameters["type"] : e.data["type"];
    // Block Deletion while Verifying Existence
    block(matchDeletedFields(Sort, collection, datatype, field, id, length, meta, schema, type), function() { verifyFieldsExists(Sort, collection, datatype, field, id, length, meta, schema, type); });
  }
});

// Monitor: Fields Verification (Absence)
bthread("monitor:Fields:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedFields() });
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let datatype = (e.data.parameters && e.data.parameters["datatype"]) ? e.data.parameters["datatype"] : e.data["datatype"];
    let field = (e.data.parameters && e.data.parameters["field"]) ? e.data.parameters["field"] : e.data["field"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let length = (e.data.parameters && e.data.parameters["length"]) ? e.data.parameters["length"] : e.data["length"];
    let meta = (e.data.parameters && e.data.parameters["meta"]) ? e.data.parameters["meta"] : e.data["meta"];
    let schema = (e.data.parameters && e.data.parameters["schema"]) ? e.data.parameters["schema"] : e.data["schema"];
    let type = (e.data.parameters && e.data.parameters["type"]) ? e.data.parameters["type"] : e.data["type"];
    // Block Creation while Verifying Absence
    block(matchAnyFieldsAdded(), function() { verifyFieldsDoesNotExist(Sort, collection, datatype, field, id, length, meta, schema, type); });
  }
});

// Monitor: Files Verification (Existence)
bthread("monitor:Files:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFilesAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let filename_download = (e.data.parameters && e.data.parameters["filename_download"]) ? e.data.parameters["filename_download"] : e.data["filename_download"];
    let folder = (e.data.parameters && e.data.parameters["folder"]) ? e.data.parameters["folder"] : e.data["folder"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let tags = (e.data.parameters && e.data.parameters["tags"]) ? e.data.parameters["tags"] : e.data["tags"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Deletion while Verifying Existence
    block(matchDeletedFiles(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title), function() { verifyFilesExists(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title); });
  }
});

// Monitor: Files Verification (Absence)
bthread("monitor:Files:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedFiles() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let description = (e.data.parameters && e.data.parameters["description"]) ? e.data.parameters["description"] : e.data["description"];
    let filename_download = (e.data.parameters && e.data.parameters["filename_download"]) ? e.data.parameters["filename_download"] : e.data["filename_download"];
    let folder = (e.data.parameters && e.data.parameters["folder"]) ? e.data.parameters["folder"] : e.data["folder"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let tags = (e.data.parameters && e.data.parameters["tags"]) ? e.data.parameters["tags"] : e.data["tags"];
    let title = (e.data.parameters && e.data.parameters["title"]) ? e.data.parameters["title"] : e.data["title"];
    // Block Creation while Verifying Absence
    block(matchAnyFilesAdded(), function() { verifyFilesDoesNotExist(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title); });
  }
});

// Monitor: Flows Verification (Existence)
bthread("monitor:Flows:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFlowsAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedFlows(Fields, Meta, data, id), function() { verifyFlowsExists(Fields, Meta, data, id); });
  }
});

// Monitor: Flows Verification (Absence)
bthread("monitor:Flows:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedFlows() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Creation while Verifying Absence
    block(matchAnyFlowsAdded(), function() { verifyFlowsDoesNotExist(Fields, Meta, data, id); });
  }
});

// Monitor: Folders Verification (Existence)
bthread("monitor:Folders:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyFoldersAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let parent = (e.data.parameters && e.data.parameters["parent"]) ? e.data.parameters["parent"] : e.data["parent"];
    // Block Deletion while Verifying Existence
    block(matchDeletedFolders(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent), function() { verifyFoldersExists(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent); });
  }
});

// Monitor: Folders Verification (Absence)
bthread("monitor:Folders:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedFolders() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let parent = (e.data.parameters && e.data.parameters["parent"]) ? e.data.parameters["parent"] : e.data["parent"];
    // Block Creation while Verifying Absence
    block(matchAnyFoldersAdded(), function() { verifyFoldersDoesNotExist(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent); });
  }
});

// Monitor: Operations Verification (Existence)
bthread("monitor:Operations:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyOperationsAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let UUId = (e.data.parameters && e.data.parameters["UUId"]) ? e.data.parameters["UUId"] : e.data["UUId"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Deletion while Verifying Existence
    block(matchDeletedOperations(Fields, Meta, UUId, data, id), function() { verifyOperationsExists(Fields, Meta, UUId, data, id); });
  }
});

// Monitor: Operations Verification (Absence)
bthread("monitor:Operations:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedOperations() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let UUId = (e.data.parameters && e.data.parameters["UUId"]) ? e.data.parameters["UUId"] : e.data["UUId"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    // Block Creation while Verifying Absence
    block(matchAnyOperationsAdded(), function() { verifyOperationsDoesNotExist(Fields, Meta, UUId, data, id); });
  }
});

// Monitor: Permissions Verification (Existence)
bthread("monitor:Permissions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyPermissionsAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Id = (e.data.parameters && e.data.parameters["Id"]) ? e.data.parameters["Id"] : e.data["Id"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let comment = (e.data.parameters && e.data.parameters["comment"]) ? e.data.parameters["comment"] : e.data["comment"];
    let create = (e.data.parameters && e.data.parameters["create"]) ? e.data.parameters["create"] : e.data["create"];
    let _delete = (e.data.parameters && e.data.parameters["delete"]) ? e.data.parameters["delete"] : e.data["delete"];
    let explain = (e.data.parameters && e.data.parameters["explain"]) ? e.data.parameters["explain"] : e.data["explain"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let read = (e.data.parameters && e.data.parameters["read"]) ? e.data.parameters["read"] : e.data["read"];
    let read_field_blacklist = (e.data.parameters && e.data.parameters["read_field_blacklist"]) ? e.data.parameters["read_field_blacklist"] : e.data["read_field_blacklist"];
    let role = (e.data.parameters && e.data.parameters["role"]) ? e.data.parameters["role"] : e.data["role"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let status_blacklist = (e.data.parameters && e.data.parameters["status_blacklist"]) ? e.data.parameters["status_blacklist"] : e.data["status_blacklist"];
    let update = (e.data.parameters && e.data.parameters["update"]) ? e.data.parameters["update"] : e.data["update"];
    let write_field_blacklist = (e.data.parameters && e.data.parameters["write_field_blacklist"]) ? e.data.parameters["write_field_blacklist"] : e.data["write_field_blacklist"];
    // Block Deletion while Verifying Existence
    block(matchDeletedPermissions(Fields, Id, Meta, collection, comment, create, _delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist), function() { verifyPermissionsExists(Fields, Id, Meta, collection, comment, create, _delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist); });
  }
});

// Monitor: Permissions Verification (Absence)
bthread("monitor:Permissions:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedPermissions() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Id = (e.data.parameters && e.data.parameters["Id"]) ? e.data.parameters["Id"] : e.data["Id"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let collection = (e.data.parameters && e.data.parameters["collection"]) ? e.data.parameters["collection"] : e.data["collection"];
    let comment = (e.data.parameters && e.data.parameters["comment"]) ? e.data.parameters["comment"] : e.data["comment"];
    let create = (e.data.parameters && e.data.parameters["create"]) ? e.data.parameters["create"] : e.data["create"];
    let _delete = (e.data.parameters && e.data.parameters["delete"]) ? e.data.parameters["delete"] : e.data["delete"];
    let explain = (e.data.parameters && e.data.parameters["explain"]) ? e.data.parameters["explain"] : e.data["explain"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let read = (e.data.parameters && e.data.parameters["read"]) ? e.data.parameters["read"] : e.data["read"];
    let read_field_blacklist = (e.data.parameters && e.data.parameters["read_field_blacklist"]) ? e.data.parameters["read_field_blacklist"] : e.data["read_field_blacklist"];
    let role = (e.data.parameters && e.data.parameters["role"]) ? e.data.parameters["role"] : e.data["role"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let status_blacklist = (e.data.parameters && e.data.parameters["status_blacklist"]) ? e.data.parameters["status_blacklist"] : e.data["status_blacklist"];
    let update = (e.data.parameters && e.data.parameters["update"]) ? e.data.parameters["update"] : e.data["update"];
    let write_field_blacklist = (e.data.parameters && e.data.parameters["write_field_blacklist"]) ? e.data.parameters["write_field_blacklist"] : e.data["write_field_blacklist"];
    // Block Creation while Verifying Absence
    block(matchAnyPermissionsAdded(), function() { verifyPermissionsDoesNotExist(Fields, Id, Meta, collection, comment, create, _delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist); });
  }
});

// Monitor: Relations Verification (Existence)
bthread("monitor:Relations:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyRelationsAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Id = (e.data.parameters && e.data.parameters["Id"]) ? e.data.parameters["Id"] : e.data["Id"];
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
    block(matchDeletedRelations(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field), function() { verifyRelationsExists(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field); });
  }
});

// Monitor: Relations Verification (Absence)
bthread("monitor:Relations:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedRelations() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Id = (e.data.parameters && e.data.parameters["Id"]) ? e.data.parameters["Id"] : e.data["Id"];
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
    // Block Creation while Verifying Absence
    block(matchAnyRelationsAdded(), function() { verifyRelationsDoesNotExist(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field); });
  }
});

// Monitor: Roles Verification (Existence)
bthread("monitor:Roles:exists", function () {
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
    block(matchDeletedRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name), function() { verifyRolesExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name); });
  }
});

// Monitor: Roles Verification (Absence)
bthread("monitor:Roles:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedRoles() });
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
    // Block Creation while Verifying Absence
    block(matchAnyRolesAdded(), function() { verifyRolesDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name); });
  }
});

// Monitor: Schema Verification (Existence)
bthread("monitor:Schema:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnySchemaAdded() });
    let Export = (e.data.parameters && e.data.parameters["Export"]) ? e.data.parameters["Export"] : e.data["Export"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let force = (e.data.parameters && e.data.parameters["force"]) ? e.data.parameters["force"] : e.data["force"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    verifySchemaExists(Export, data, force, id);
  }
});

// Monitor: Users Verification (Existence)
bthread("monitor:Users:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUsersAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let UUId = (e.data.parameters && e.data.parameters["UUId"]) ? e.data.parameters["UUId"] : e.data["UUId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let last_page = (e.data.parameters && e.data.parameters["last_page"]) ? e.data.parameters["last_page"] : e.data["last_page"];
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Deletion while Verifying Existence
    block(matchDeletedUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token), function() { verifyUsersExists(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token); });
  }
});

// Monitor: Users Verification (Absence)
bthread("monitor:Users:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedUsers() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let UUId = (e.data.parameters && e.data.parameters["UUId"]) ? e.data.parameters["UUId"] : e.data["UUId"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let last_page = (e.data.parameters && e.data.parameters["last_page"]) ? e.data.parameters["last_page"] : e.data["last_page"];
    let password = (e.data.parameters && e.data.parameters["password"]) ? e.data.parameters["password"] : e.data["password"];
    let token = (e.data.parameters && e.data.parameters["token"]) ? e.data.parameters["token"] : e.data["token"];
    // Block Creation while Verifying Absence
    block(matchAnyUsersAdded(), function() { verifyUsersDoesNotExist(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token); });
  }
});

// Monitor: Utilities Verification (Existence)
bthread("monitor:Utilities:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyUtilitiesAdded() });
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let length = (e.data.parameters && e.data.parameters["length"]) ? e.data.parameters["length"] : e.data["length"];
    verifyUtilitiesExists(id, length);
  }
});

// Monitor: Versions Verification (Existence)
bthread("monitor:Versions:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyVersionsAdded() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let UUId = (e.data.parameters && e.data.parameters["UUId"]) ? e.data.parameters["UUId"] : e.data["UUId"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let mainHash = (e.data.parameters && e.data.parameters["mainHash"]) ? e.data.parameters["mainHash"] : e.data["mainHash"];
    // Block Deletion while Verifying Existence
    block(matchDeletedVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash), function() { verifyVersionsExists(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash); });
  }
});

// Monitor: Versions Verification (Absence)
bthread("monitor:Versions:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedVersions() });
    let Fields = (e.data.parameters && e.data.parameters["Fields"]) ? e.data.parameters["Fields"] : e.data["Fields"];
    let Filter = (e.data.parameters && e.data.parameters["Filter"]) ? e.data.parameters["Filter"] : e.data["Filter"];
    let Limit = (e.data.parameters && e.data.parameters["Limit"]) ? e.data.parameters["Limit"] : e.data["Limit"];
    let Meta = (e.data.parameters && e.data.parameters["Meta"]) ? e.data.parameters["Meta"] : e.data["Meta"];
    let Offset = (e.data.parameters && e.data.parameters["Offset"]) ? e.data.parameters["Offset"] : e.data["Offset"];
    let Search = (e.data.parameters && e.data.parameters["Search"]) ? e.data.parameters["Search"] : e.data["Search"];
    let Sort = (e.data.parameters && e.data.parameters["Sort"]) ? e.data.parameters["Sort"] : e.data["Sort"];
    let UUId = (e.data.parameters && e.data.parameters["UUId"]) ? e.data.parameters["UUId"] : e.data["UUId"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let fields = (e.data.parameters && e.data.parameters["fields"]) ? e.data.parameters["fields"] : e.data["fields"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let mainHash = (e.data.parameters && e.data.parameters["mainHash"]) ? e.data.parameters["mainHash"] : e.data["mainHash"];
    // Block Creation while Verifying Absence
    block(matchAnyVersionsAdded(), function() { verifyVersionsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash); });
  }
});

// Monitor: Webhooks Verification (Existence)
bthread("monitor:Webhooks:exists", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchAnyWebhooksAdded() });
    let actions = (e.data.parameters && e.data.parameters["actions"]) ? e.data.parameters["actions"] : e.data["actions"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let method = (e.data.parameters && e.data.parameters["method"]) ? e.data.parameters["method"] : e.data["method"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let system_collections = (e.data.parameters && e.data.parameters["system-collections"]) ? e.data.parameters["system-collections"] : e.data["system-collections"];
    let url = (e.data.parameters && e.data.parameters["url"]) ? e.data.parameters["url"] : e.data["url"];
    // Block Deletion while Verifying Existence
    block(matchDeletedWebhooks(actions, data, id, method, name, status, system_collections, url), function() { verifyWebhooksExists(actions, data, id, method, name, status, system_collections, url); });
  }
});

// Monitor: Webhooks Verification (Absence)
bthread("monitor:Webhooks:absence", function () {
  while (true) {
    let e = bp.sync({ waitFor: matchDeletedWebhooks() });
    let actions = (e.data.parameters && e.data.parameters["actions"]) ? e.data.parameters["actions"] : e.data["actions"];
    let data = (e.data.parameters && e.data.parameters["data"]) ? e.data.parameters["data"] : e.data["data"];
    let id = (e.data.parameters && e.data.parameters["id"]) ? e.data.parameters["id"] : e.data["id"];
    let method = (e.data.parameters && e.data.parameters["method"]) ? e.data.parameters["method"] : e.data["method"];
    let name = (e.data.parameters && e.data.parameters["name"]) ? e.data.parameters["name"] : e.data["name"];
    let status = (e.data.parameters && e.data.parameters["status"]) ? e.data.parameters["status"] : e.data["status"];
    let system_collections = (e.data.parameters && e.data.parameters["system-collections"]) ? e.data.parameters["system-collections"] : e.data["system-collections"];
    let url = (e.data.parameters && e.data.parameters["url"]) ? e.data.parameters["url"] : e.data["url"];
    // Block Creation while Verifying Absence
    block(matchAnyWebhooksAdded(), function() { verifyWebhooksDoesNotExist(actions, data, id, method, name, status, system_collections, url); });
  }
});

// Story: crud:Authentication:linear:1
bthread("crud:Authentication:linear:1", function () {
  // -> Creating Authentication
  let password_Authentication_100 = "password_Authentication_100_" + Math.floor(Math.random()*1000);
  let provider_Authentication_100 = "provider_Authentication_100_" + Math.floor(Math.random()*1000);
  let redirect_Authentication_100 = "redirect_Authentication_100_" + Math.floor(Math.random()*1000);
  let token_Authentication_100 = "token_Authentication_100_" + Math.floor(Math.random()*1000);
  passwordReset(password_Authentication_100, provider_Authentication_100, redirect_Authentication_100, token_Authentication_100, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Collections:linear:1
bthread("crud:Collections:linear:1", function () {
  // -> Creating Collections
  let Meta_Collections_110 = "Meta_Collections_110_" + Math.floor(Math.random()*1000);
  let Offset_Collections_110 = "Offset_Collections_110_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_110 = "archive_app_filter_Collections_110_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_110 = "archive_field_Collections_110_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_110 = "archive_value_Collections_110_" + Math.floor(Math.random()*1000);
  let collection_Collections_110 = "customers";
  let display_template_Collections_110 = "display_template_Collections_110_" + Math.floor(Math.random()*1000);
  let fields_Collections_110 = [];
  let hidden_Collections_110 = true;
  let icon_Collections_110 = "icon_Collections_110_" + Math.floor(Math.random()*1000);
  let id_Collections_110 = "id_Collections_110_" + Math.floor(Math.random()*1000);
  let meta_Collections_110 = "meta_Collections_110_" + Math.floor(Math.random()*1000);
  let note_Collections_110 = "note_Collections_110_" + Math.floor(Math.random()*1000);
  let singleton_Collections_110 = true;
  let sort_field_Collections_110 = "sort_field_Collections_110_" + Math.floor(Math.random()*1000);
  let translation_Collections_110 = "translation_Collections_110_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_110 = "unarchive_value_Collections_110_" + Math.floor(Math.random()*1000);
  let versioning_Collections_110 = true;
  createCollection(Meta_Collections_110, Offset_Collections_110, archive_app_filter_Collections_110, archive_field_Collections_110, archive_value_Collections_110, collection_Collections_110, display_template_Collections_110, fields_Collections_110, hidden_Collections_110, icon_Collections_110, id_Collections_110, meta_Collections_110, note_Collections_110, singleton_Collections_110, sort_field_Collections_110, translation_Collections_110, unarchive_value_Collections_110, versioning_Collections_110, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Collections
  let Meta_Collections_upd_110 = "Meta_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let Offset_Collections_upd_110 = "Offset_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_upd_110 = "archive_app_filter_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_upd_110 = "archive_field_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_upd_110 = "archive_value_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let collection_Collections_upd_110 = "customers";
  let display_template_Collections_upd_110 = "display_template_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let fields_Collections_upd_110 = "fields_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let hidden_Collections_upd_110 = "hidden_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let icon_Collections_upd_110 = "icon_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let id_Collections_upd_110 = id_Collections_110;
  let meta_Collections_upd_110 = {};
  let note_Collections_upd_110 = "note_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let singleton_Collections_upd_110 = "singleton_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let sort_field_Collections_upd_110 = "sort_field_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let translation_Collections_upd_110 = "translation_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_upd_110 = "unarchive_value_Collections_upd_110_" + Math.floor(Math.random()*1000);
  let versioning_Collections_upd_110 = "versioning_Collections_upd_110_" + Math.floor(Math.random()*1000);
  updateCollection(Meta_Collections_upd_110, Offset_Collections_upd_110, archive_app_filter_Collections_upd_110, archive_field_Collections_upd_110, archive_value_Collections_upd_110, collection_Collections_upd_110, display_template_Collections_upd_110, fields_Collections_upd_110, hidden_Collections_upd_110, icon_Collections_upd_110, id_Collections_upd_110, meta_Collections_upd_110, note_Collections_upd_110, singleton_Collections_upd_110, sort_field_Collections_upd_110, translation_Collections_upd_110, unarchive_value_Collections_upd_110, versioning_Collections_upd_110, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Collections to prevent foreign key errors (has active dependents)
});

// Story: crud:Items:linear:1
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
  let collection_Items_120 = "collection_Items_120_" + Math.floor(Math.random()*1000);
  createItem(Collection_Items_120, Fields_Items_120, Filter_Items_120, Limit_Items_120, Meta_Items_120, Offset_Items_120, Search_Items_120, Sort_Items_120, collection_Items_120, { expectedResponseCodes: [200, 201, 204] });

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

  // Skip delete for Items to prevent foreign key errors (has active dependents)
});

// Story: crud:Presets:linear:1
bthread("crud:Presets:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Presets
  let Fields_Presets_130 = "Fields_Presets_130_" + Math.floor(Math.random()*1000);
  let Filter_Presets_130 = "Filter_Presets_130_" + Math.floor(Math.random()*1000);
  let Id_Presets_130 = "Id_Presets_130_" + Math.floor(Math.random()*1000);
  let Limit_Presets_130 = "Limit_Presets_130_" + Math.floor(Math.random()*1000);
  let Meta_Presets_130 = "Meta_Presets_130_" + Math.floor(Math.random()*1000);
  let Offset_Presets_130 = "Offset_Presets_130_" + Math.floor(Math.random()*1000);
  let Page_Presets_130 = "Page_Presets_130_" + Math.floor(Math.random()*1000);
  let Search_Presets_130 = "Search_Presets_130_" + Math.floor(Math.random()*1000);
  let Sort_Presets_130 = "Sort_Presets_130_" + Math.floor(Math.random()*1000);
  let collection_Presets_130 = "articles";
  let filters_Presets_130 = [];
  let id_Presets_130 = CollectionsId;
  let layout_Presets_130 = "layout_Presets_130_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_130 = "{'cards': {'icon': 'account_circle', 'title': '{{ first_name }} {{ last_name }}', 'subtitle': '{{ title }}', 'size': 3}}";
  let layout_query_Presets_130 = "{'cards': {'sort': '-published_on'}}";
  let role_Presets_130 = "50419801-0f30-8644-2b3c-9bc2d980d0a0";
  let search_Presets_130 = "search_Presets_130_" + Math.floor(Math.random()*1000);
  let search_query_Presets_130 = "search_query_Presets_130_" + Math.floor(Math.random()*1000);
  let title_Presets_130 = "title_Presets_130_" + Math.floor(Math.random()*1000);
  let translation_Presets_130 = "translation_Presets_130_" + Math.floor(Math.random()*1000);
  let view_options_Presets_130 = "view_options_Presets_130_" + Math.floor(Math.random()*1000);
  let view_query_Presets_130 = "view_query_Presets_130_" + Math.floor(Math.random()*1000);
  let view_type_Presets_130 = "view_type_Presets_130_" + Math.floor(Math.random()*1000);
  createPreset(Fields_Presets_130, Filter_Presets_130, Id_Presets_130, Limit_Presets_130, Meta_Presets_130, Offset_Presets_130, Page_Presets_130, Search_Presets_130, Sort_Presets_130, collection_Presets_130, filters_Presets_130, id_Presets_130, layout_Presets_130, layout_options_Presets_130, layout_query_Presets_130, role_Presets_130, search_Presets_130, search_query_Presets_130, title_Presets_130, translation_Presets_130, view_options_Presets_130, view_query_Presets_130, view_type_Presets_130, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Presets
  let Fields_Presets_upd_130 = "Fields_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Filter_Presets_upd_130 = "Filter_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Id_Presets_upd_130 = "Id_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Limit_Presets_upd_130 = "Limit_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Meta_Presets_upd_130 = "Meta_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Offset_Presets_upd_130 = "Offset_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Page_Presets_upd_130 = "Page_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Search_Presets_upd_130 = "Search_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let Sort_Presets_upd_130 = "Sort_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let collection_Presets_upd_130 = "articles";
  let filters_Presets_upd_130 = [];
  let id_Presets_upd_130 = id_Presets_130;
  let layout_Presets_upd_130 = "layout_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_upd_130 = "{'cards': {'icon': 'account_circle', 'title': '{{ first_name }} {{ last_name }}', 'subtitle': '{{ title }}', 'size': 3}}";
  let layout_query_Presets_upd_130 = "{'cards': {'sort': '-published_on'}}";
  let role_Presets_upd_130 = Math.floor(Math.random() * 1000);
  let search_Presets_upd_130 = "search_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let search_query_Presets_upd_130 = "search_query_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let title_Presets_upd_130 = "title_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let translation_Presets_upd_130 = {};
  let view_options_Presets_upd_130 = "view_options_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let view_query_Presets_upd_130 = "view_query_Presets_upd_130_" + Math.floor(Math.random()*1000);
  let view_type_Presets_upd_130 = "view_type_Presets_upd_130_" + Math.floor(Math.random()*1000);
  updatePreset(Fields_Presets_upd_130, Filter_Presets_upd_130, Id_Presets_upd_130, Limit_Presets_upd_130, Meta_Presets_upd_130, Offset_Presets_upd_130, Page_Presets_upd_130, Search_Presets_upd_130, Sort_Presets_upd_130, collection_Presets_upd_130, filters_Presets_upd_130, id_Presets_upd_130, layout_Presets_upd_130, layout_options_Presets_upd_130, layout_query_Presets_upd_130, role_Presets_upd_130, search_Presets_upd_130, search_query_Presets_upd_130, title_Presets_upd_130, translation_Presets_upd_130, view_options_Presets_upd_130, view_query_Presets_upd_130, view_type_Presets_upd_130, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Presets
  deletePreset(id_Presets_130, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Comments:linear:1
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
  let comment_Comments_140 = "This is a comment";
  let id_Comments_140 = CollectionsId;
  let item_Comments_140 = "123";
  createComment(collection_Comments_140, comment_Comments_140, id_Comments_140, item_Comments_140, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Comments
  let collection_Comments_upd_140 = "articles";
  let comment_Comments_upd_140 = "This is a comment";
  let id_Comments_upd_140 = id_Comments_140;
  let item_Comments_upd_140 = "123";
  updateComment(collection_Comments_upd_140, comment_Comments_upd_140, id_Comments_upd_140, item_Comments_upd_140, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Comments
  deleteComment(id_Comments_140, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Fields:linear:1
bthread("crud:Fields:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Fields
  let Sort_Fields_150 = "Sort_Fields_150_" + Math.floor(Math.random()*1000);
  let collection_Fields_150 = "about_us";
  let datatype_Fields_150 = "datatype_Fields_150_" + Math.floor(Math.random()*1000);
  let field_Fields_150 = "id";
  let id_Fields_150 = CollectionsId;
  let length_Fields_150 = Math.floor(Math.random() * 1000);
  let meta_Fields_150 = {};
  let schema_Fields_150 = {};
  let type_Fields_150 = "integer";
  createField(Sort_Fields_150, collection_Fields_150, datatype_Fields_150, field_Fields_150, id_Fields_150, length_Fields_150, meta_Fields_150, schema_Fields_150, type_Fields_150, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Fields
  let Sort_Fields_upd_150 = "Sort_Fields_upd_150_" + Math.floor(Math.random()*1000);
  let collection_Fields_upd_150 = collection_Fields_150;
  let datatype_Fields_upd_150 = "datatype_Fields_upd_150_" + Math.floor(Math.random()*1000);
  let field_Fields_upd_150 = "id";
  let id_Fields_upd_150 = "id_Fields_upd_150_" + Math.floor(Math.random()*1000);
  let length_Fields_upd_150 = "length_Fields_upd_150_" + Math.floor(Math.random()*1000);
  let meta_Fields_upd_150 = {};
  let schema_Fields_upd_150 = {};
  let type_Fields_upd_150 = "integer";
  updateField(Sort_Fields_upd_150, collection_Fields_upd_150, datatype_Fields_upd_150, field_Fields_upd_150, id_Fields_upd_150, length_Fields_upd_150, meta_Fields_upd_150, schema_Fields_upd_150, type_Fields_upd_150, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Fields
  deleteField(collection_Fields_150, id_Fields_150, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Files:linear:1
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
  let filename_download_Files_160 = "avatar.jpg";
  let folder_Files_160 = "folder_Files_160_" + Math.floor(Math.random()*1000);
  let id_Files_160 = "8cbb43fe-4cdf-4991-8352-c461779cec02";
  let tags_Files_160 = "tags_Files_160_" + Math.floor(Math.random()*1000);
  let title_Files_160 = "User Avatar";
  createFile(Fields_Files_160, Filter_Files_160, Limit_Files_160, Meta_Files_160, Offset_Files_160, Search_Files_160, Sort_Files_160, data_Files_160, description_Files_160, filename_download_Files_160, folder_Files_160, id_Files_160, tags_Files_160, title_Files_160, { expectedResponseCodes: [200, 201, 204] });

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
  let filename_download_Files_upd_160 = "avatar.jpg";
  let folder_Files_upd_160 = "folder_Files_upd_160_" + Math.floor(Math.random()*1000);
  let id_Files_upd_160 = id_Files_160;
  let tags_Files_upd_160 = [];
  let title_Files_upd_160 = "User Avatar";
  updateFile(Fields_Files_upd_160, Filter_Files_upd_160, Limit_Files_upd_160, Meta_Files_upd_160, Offset_Files_upd_160, Search_Files_upd_160, Sort_Files_upd_160, data_Files_upd_160, description_Files_upd_160, filename_download_Files_upd_160, folder_Files_upd_160, id_Files_upd_160, tags_Files_upd_160, title_Files_upd_160, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Files
  deleteFile(id_Files_160, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Flows:linear:1
bthread("crud:Flows:linear:1", function () {
  // -> Creating Flows
  let Fields_Flows_170 = "Fields_Flows_170_" + Math.floor(Math.random()*1000);
  let Meta_Flows_170 = "Meta_Flows_170_" + Math.floor(Math.random()*1000);
  let data_Flows_170 = {};
  let id_Flows_170 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  createFlow(Fields_Flows_170, Meta_Flows_170, data_Flows_170, id_Flows_170, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Flows
  let Fields_Flows_upd_170 = "Fields_Flows_upd_170_" + Math.floor(Math.random()*1000);
  let Meta_Flows_upd_170 = "Meta_Flows_upd_170_" + Math.floor(Math.random()*1000);
  let data_Flows_upd_170 = {};
  let id_Flows_upd_170 = id_Flows_170;
  updateFlow(Fields_Flows_upd_170, Meta_Flows_upd_170, data_Flows_upd_170, id_Flows_upd_170, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Flows
  deleteFlow(id_Flows_170, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Folders:linear:1
bthread("crud:Folders:linear:1", function () {
  // -> Creating Folders
  let Fields_Folders_180 = "Fields_Folders_180_" + Math.floor(Math.random()*1000);
  let Filter_Folders_180 = "Filter_Folders_180_" + Math.floor(Math.random()*1000);
  let Limit_Folders_180 = "Limit_Folders_180_" + Math.floor(Math.random()*1000);
  let Meta_Folders_180 = "Meta_Folders_180_" + Math.floor(Math.random()*1000);
  let Offset_Folders_180 = "Offset_Folders_180_" + Math.floor(Math.random()*1000);
  let Search_Folders_180 = "Search_Folders_180_" + Math.floor(Math.random()*1000);
  let Sort_Folders_180 = "Sort_Folders_180_" + Math.floor(Math.random()*1000);
  let id_Folders_180 = "0cf0e03d-4364-45df-b77b-ca61f61869d2";
  let name_Folders_180 = "New York";
  let parent_Folders_180 = Math.floor(Math.random() * 1000);
  createFolder(Fields_Folders_180, Filter_Folders_180, Limit_Folders_180, Meta_Folders_180, Offset_Folders_180, Search_Folders_180, Sort_Folders_180, id_Folders_180, name_Folders_180, parent_Folders_180, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Folders
  let Fields_Folders_upd_180 = "Fields_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Filter_Folders_upd_180 = "Filter_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Limit_Folders_upd_180 = "Limit_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Meta_Folders_upd_180 = "Meta_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Offset_Folders_upd_180 = "Offset_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Search_Folders_upd_180 = "Search_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let Sort_Folders_upd_180 = "Sort_Folders_upd_180_" + Math.floor(Math.random()*1000);
  let id_Folders_upd_180 = id_Folders_180;
  let name_Folders_upd_180 = "New York";
  let parent_Folders_upd_180 = Math.floor(Math.random() * 1000);
  updateFolder(Fields_Folders_upd_180, Filter_Folders_upd_180, Limit_Folders_upd_180, Meta_Folders_upd_180, Offset_Folders_upd_180, Search_Folders_upd_180, Sort_Folders_upd_180, id_Folders_upd_180, name_Folders_upd_180, parent_Folders_upd_180, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Folders
  deleteFolder(id_Folders_180, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Operations:linear:1
bthread("crud:Operations:linear:1", function () {
  // -> Creating Operations
  let Fields_Operations_190 = {};
  let Meta_Operations_190 = {};
  let UUId_Operations_190 = "UUId_Operations_190_" + Math.floor(Math.random()*1000);
  let data_Operations_190 = "data_Operations_190_" + Math.floor(Math.random()*1000);
  let id_Operations_190 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  createOperation(Fields_Operations_190, Meta_Operations_190, UUId_Operations_190, data_Operations_190, id_Operations_190, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Operations
  let Fields_Operations_upd_190 = {};
  let Meta_Operations_upd_190 = {};
  let UUId_Operations_upd_190 = "UUId_Operations_upd_190_" + Math.floor(Math.random()*1000);
  let data_Operations_upd_190 = "data_Operations_upd_190_" + Math.floor(Math.random()*1000);
  let id_Operations_upd_190 = id_Operations_190;
  updateOperation(Fields_Operations_upd_190, Meta_Operations_upd_190, UUId_Operations_upd_190, data_Operations_upd_190, id_Operations_upd_190, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Operations
  deleteOperation(id_Operations_190, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Permissions:linear:1
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
  let Id_Permissions_200 = "Id_Permissions_200_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_200 = "Meta_Permissions_200_" + Math.floor(Math.random()*1000);
  let collection_Permissions_200 = "customers";
  let comment_Permissions_200 = "comment_Permissions_200_" + Math.floor(Math.random()*1000);
  let create_Permissions_200 = "create_Permissions_200_" + Math.floor(Math.random()*1000);
  let _delete_Permissions_200 = "delete_Permissions_200_" + Math.floor(Math.random()*1000);
  let explain_Permissions_200 = "explain_Permissions_200_" + Math.floor(Math.random()*1000);
  let id_Permissions_200 = RolesId;
  let read_Permissions_200 = "read_Permissions_200_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_200 = [];
  let role_Permissions_200 = Math.floor(Math.random() * 1000);
  let status_Permissions_200 = "active";
  let status_blacklist_Permissions_200 = [];
  let update_Permissions_200 = "update_Permissions_200_" + Math.floor(Math.random()*1000);
  let write_field_blacklist_Permissions_200 = [];
  createPermission(Fields_Permissions_200, Id_Permissions_200, Meta_Permissions_200, collection_Permissions_200, comment_Permissions_200, create_Permissions_200, _delete_Permissions_200, explain_Permissions_200, id_Permissions_200, read_Permissions_200, read_field_blacklist_Permissions_200, role_Permissions_200, status_Permissions_200, status_blacklist_Permissions_200, update_Permissions_200, write_field_blacklist_Permissions_200, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Permissions
  let Fields_Permissions_upd_200 = "Fields_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Id_Permissions_upd_200 = "Id_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_upd_200 = "Meta_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let collection_Permissions_upd_200 = {};
  let comment_Permissions_upd_200 = "comment_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let create_Permissions_upd_200 = "create_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let _delete_Permissions_upd_200 = "delete_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let explain_Permissions_upd_200 = "explain_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let id_Permissions_upd_200 = id_Permissions_200;
  let read_Permissions_upd_200 = "read_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_upd_200 = {};
  let role_Permissions_upd_200 = {};
  let status_Permissions_upd_200 = {};
  let status_blacklist_Permissions_upd_200 = {};
  let update_Permissions_upd_200 = "update_Permissions_upd_200_" + Math.floor(Math.random()*1000);
  let write_field_blacklist_Permissions_upd_200 = {};
  updatePermission(Fields_Permissions_upd_200, Id_Permissions_upd_200, Meta_Permissions_upd_200, collection_Permissions_upd_200, comment_Permissions_upd_200, create_Permissions_upd_200, _delete_Permissions_upd_200, explain_Permissions_upd_200, id_Permissions_upd_200, read_Permissions_upd_200, read_field_blacklist_Permissions_upd_200, role_Permissions_upd_200, status_Permissions_upd_200, status_blacklist_Permissions_upd_200, update_Permissions_upd_200, write_field_blacklist_Permissions_upd_200, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Permissions
  deletePermission(id_Permissions_200, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Relations:linear:1
bthread("crud:Relations:linear:1", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Relations
  let Fields_Relations_210 = "Fields_Relations_210_" + Math.floor(Math.random()*1000);
  let Filter_Relations_210 = "Filter_Relations_210_" + Math.floor(Math.random()*1000);
  let Id_Relations_210 = "Id_Relations_210_" + Math.floor(Math.random()*1000);
  let Limit_Relations_210 = "Limit_Relations_210_" + Math.floor(Math.random()*1000);
  let Meta_Relations_210 = "Meta_Relations_210_" + Math.floor(Math.random()*1000);
  let Offset_Relations_210 = "Offset_Relations_210_" + Math.floor(Math.random()*1000);
  let Page_Relations_210 = "Page_Relations_210_" + Math.floor(Math.random()*1000);
  let Search_Relations_210 = "Search_Relations_210_" + Math.floor(Math.random()*1000);
  let Sort_Relations_210 = "Sort_Relations_210_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_210 = "collection_many_Relations_210_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_210 = "collection_one_Relations_210_" + Math.floor(Math.random()*1000);
  let field_many_Relations_210 = "field_many_Relations_210_" + Math.floor(Math.random()*1000);
  let field_one_Relations_210 = "field_one_Relations_210_" + Math.floor(Math.random()*1000);
  let id_Relations_210 = CollectionsId;
  let junction_field_Relations_210 = "junction_field_Relations_210_" + Math.floor(Math.random()*1000);
  createRelation(Fields_Relations_210, Filter_Relations_210, Id_Relations_210, Limit_Relations_210, Meta_Relations_210, Offset_Relations_210, Page_Relations_210, Search_Relations_210, Sort_Relations_210, collection_many_Relations_210, collection_one_Relations_210, field_many_Relations_210, field_one_Relations_210, id_Relations_210, junction_field_Relations_210, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Relations
  let Fields_Relations_upd_210 = "Fields_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Filter_Relations_upd_210 = "Filter_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Id_Relations_upd_210 = "Id_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Limit_Relations_upd_210 = "Limit_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Meta_Relations_upd_210 = "Meta_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Offset_Relations_upd_210 = "Offset_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Page_Relations_upd_210 = "Page_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Search_Relations_upd_210 = "Search_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let Sort_Relations_upd_210 = "Sort_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_upd_210 = "collection_many_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_upd_210 = "collection_one_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let field_many_Relations_upd_210 = "field_many_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let field_one_Relations_upd_210 = "field_one_Relations_upd_210_" + Math.floor(Math.random()*1000);
  let id_Relations_upd_210 = id_Relations_210;
  let junction_field_Relations_upd_210 = "junction_field_Relations_upd_210_" + Math.floor(Math.random()*1000);
  updateRelation(Fields_Relations_upd_210, Filter_Relations_upd_210, Id_Relations_upd_210, Limit_Relations_upd_210, Meta_Relations_upd_210, Offset_Relations_upd_210, Page_Relations_upd_210, Search_Relations_upd_210, Sort_Relations_upd_210, collection_many_Relations_upd_210, collection_one_Relations_upd_210, field_many_Relations_upd_210, field_one_Relations_upd_210, id_Relations_upd_210, junction_field_Relations_upd_210, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Relations
  deleteRelation(id_Relations_210, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Roles:linear:1
bthread("crud:Roles:linear:1", function () {
  // -> Creating Roles
  let Fields_Roles_220 = "Fields_Roles_220_" + Math.floor(Math.random()*1000);
  let Filter_Roles_220 = "Filter_Roles_220_" + Math.floor(Math.random()*1000);
  let Limit_Roles_220 = "Limit_Roles_220_" + Math.floor(Math.random()*1000);
  let Meta_Roles_220 = "Meta_Roles_220_" + Math.floor(Math.random()*1000);
  let Offset_Roles_220 = "Offset_Roles_220_" + Math.floor(Math.random()*1000);
  let Page_Roles_220 = "Page_Roles_220_" + Math.floor(Math.random()*1000);
  let Search_Roles_220 = "Search_Roles_220_" + Math.floor(Math.random()*1000);
  let Sort_Roles_220 = "Sort_Roles_220_" + Math.floor(Math.random()*1000);
  let description_Roles_220 = "Admins have access to all managed data within the system by default";
  let enforce_tfa_Roles_220 = true;
  let external_id_Roles_220 = "external_id_Roles_220_" + Math.floor(Math.random()*1000);
  let id_Roles_220 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  let ip_access_Roles_220 = [];
  let module_listing_Roles_220 = "module_listing_Roles_220_" + Math.floor(Math.random()*1000);
  let name_Roles_220 = "Administrator";
  createRole(Fields_Roles_220, Filter_Roles_220, Limit_Roles_220, Meta_Roles_220, Offset_Roles_220, Page_Roles_220, Search_Roles_220, Sort_Roles_220, description_Roles_220, enforce_tfa_Roles_220, external_id_Roles_220, id_Roles_220, ip_access_Roles_220, module_listing_Roles_220, name_Roles_220, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Roles
  let Fields_Roles_upd_220 = "Fields_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Filter_Roles_upd_220 = "Filter_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Limit_Roles_upd_220 = "Limit_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Meta_Roles_upd_220 = "Meta_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Offset_Roles_upd_220 = "Offset_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Page_Roles_upd_220 = "Page_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Search_Roles_upd_220 = "Search_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let Sort_Roles_upd_220 = "Sort_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let description_Roles_upd_220 = "Admins have access to all managed data within the system by default";
  let enforce_tfa_Roles_upd_220 = true;
  let external_id_Roles_upd_220 = "external_id_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let id_Roles_upd_220 = id_Roles_220;
  let ip_access_Roles_upd_220 = [];
  let module_listing_Roles_upd_220 = "module_listing_Roles_upd_220_" + Math.floor(Math.random()*1000);
  let name_Roles_upd_220 = "Administrator";
  updateRole(Fields_Roles_upd_220, Filter_Roles_upd_220, Limit_Roles_upd_220, Meta_Roles_upd_220, Offset_Roles_upd_220, Page_Roles_upd_220, Search_Roles_upd_220, Sort_Roles_upd_220, description_Roles_upd_220, enforce_tfa_Roles_upd_220, external_id_Roles_upd_220, id_Roles_upd_220, ip_access_Roles_upd_220, module_listing_Roles_upd_220, name_Roles_upd_220, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Roles to prevent foreign key errors (has active dependents)
});

// Story: crud:Schema:linear:1
bthread("crud:Schema:linear:1", function () {
  // -> Creating Schema
  let Export_Schema_230 = "Export_Schema_230_" + Math.floor(Math.random()*1000);
  let data_Schema_230 = "data_Schema_230_" + Math.floor(Math.random()*1000);
  let force_Schema_230 = true;
  let id_Schema_230 = "id_Schema_230_" + Math.floor(Math.random()*1000);
  schemaDiff(Export_Schema_230, data_Schema_230, force_Schema_230, id_Schema_230, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  // -> Creating Users
  let Fields_Users_240 = "Fields_Users_240_" + Math.floor(Math.random()*1000);
  let Filter_Users_240 = "Filter_Users_240_" + Math.floor(Math.random()*1000);
  let Limit_Users_240 = "Limit_Users_240_" + Math.floor(Math.random()*1000);
  let Meta_Users_240 = "Meta_Users_240_" + Math.floor(Math.random()*1000);
  let Offset_Users_240 = "Offset_Users_240_" + Math.floor(Math.random()*1000);
  let Search_Users_240 = "Search_Users_240_" + Math.floor(Math.random()*1000);
  let Sort_Users_240 = "Sort_Users_240_" + Math.floor(Math.random()*1000);
  let UUId_Users_240 = "UUId_Users_240_" + Math.floor(Math.random()*1000);
  let id_Users_240 = "63716273-0f29-4648-8a2a-2af2948f6f78";
  let last_page_Users_240 = "/my-project/settings/collections/a";
  let password_Users_240 = "password_Users_240_" + Math.floor(Math.random()*1000);
  let token_Users_240 = "token_Users_240_" + Math.floor(Math.random()*1000);
  acceptInvite(Fields_Users_240, Filter_Users_240, Limit_Users_240, Meta_Users_240, Offset_Users_240, Search_Users_240, Sort_Users_240, UUId_Users_240, id_Users_240, last_page_Users_240, password_Users_240, token_Users_240, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let Fields_Users_upd_240 = "Fields_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Filter_Users_upd_240 = "Filter_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Limit_Users_upd_240 = "Limit_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Meta_Users_upd_240 = "Meta_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Offset_Users_upd_240 = "Offset_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Search_Users_upd_240 = "Search_Users_upd_240_" + Math.floor(Math.random()*1000);
  let Sort_Users_upd_240 = "Sort_Users_upd_240_" + Math.floor(Math.random()*1000);
  let UUId_Users_upd_240 = "UUId_Users_upd_240_" + Math.floor(Math.random()*1000);
  let id_Users_upd_240 = id_Users_240;
  let last_page_Users_upd_240 = "/my-project/settings/collections/a";
  let password_Users_upd_240 = "password_Users_upd_240_" + Math.floor(Math.random()*1000);
  let token_Users_upd_240 = "token_Users_upd_240_" + Math.floor(Math.random()*1000);
  updateMe(Fields_Users_upd_240, Filter_Users_upd_240, Limit_Users_upd_240, Meta_Users_upd_240, Offset_Users_upd_240, Search_Users_upd_240, Sort_Users_upd_240, UUId_Users_upd_240, id_Users_upd_240, last_page_Users_upd_240, password_Users_upd_240, token_Users_upd_240, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  deleteUser(id_Users_240, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Utilities:linear:1
bthread("crud:Utilities:linear:1", function () {
  // -> Creating Utilities
  let id_Utilities_250 = "id_Utilities_250_" + Math.floor(Math.random()*1000);
  let length_Utilities_250 = "length_Utilities_250_" + Math.floor(Math.random()*1000);
  clearCache(id_Utilities_250, length_Utilities_250, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Versions:linear:1
bthread("crud:Versions:linear:1", function () {
  // -> Creating Versions
  let Fields_Versions_260 = "Fields_Versions_260_" + Math.floor(Math.random()*1000);
  let Filter_Versions_260 = "Filter_Versions_260_" + Math.floor(Math.random()*1000);
  let Limit_Versions_260 = "Limit_Versions_260_" + Math.floor(Math.random()*1000);
  let Meta_Versions_260 = "Meta_Versions_260_" + Math.floor(Math.random()*1000);
  let Offset_Versions_260 = "Offset_Versions_260_" + Math.floor(Math.random()*1000);
  let Search_Versions_260 = "Search_Versions_260_" + Math.floor(Math.random()*1000);
  let Sort_Versions_260 = "Sort_Versions_260_" + Math.floor(Math.random()*1000);
  let UUId_Versions_260 = "UUId_Versions_260_" + Math.floor(Math.random()*1000);
  let data_Versions_260 = "data_Versions_260_" + Math.floor(Math.random()*1000);
  let fields_Versions_260 = "fields_Versions_260_" + Math.floor(Math.random()*1000);
  let id_Versions_260 = "63716273-0f29-4648-8a2a-2af2948f6f78";
  let mainHash_Versions_260 = "mainHash_Versions_260_" + Math.floor(Math.random()*1000);
  promoteContentVersion(Fields_Versions_260, Filter_Versions_260, Limit_Versions_260, Meta_Versions_260, Offset_Versions_260, Search_Versions_260, Sort_Versions_260, UUId_Versions_260, data_Versions_260, fields_Versions_260, id_Versions_260, mainHash_Versions_260, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Versions
  let Fields_Versions_upd_260 = "Fields_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Filter_Versions_upd_260 = "Filter_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Limit_Versions_upd_260 = "Limit_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Meta_Versions_upd_260 = "Meta_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Offset_Versions_upd_260 = "Offset_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Search_Versions_upd_260 = "Search_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let Sort_Versions_upd_260 = "Sort_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let UUId_Versions_upd_260 = "UUId_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let data_Versions_upd_260 = "data_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let fields_Versions_upd_260 = "fields_Versions_upd_260_" + Math.floor(Math.random()*1000);
  let id_Versions_upd_260 = id_Versions_260;
  let mainHash_Versions_upd_260 = "mainHash_Versions_upd_260_" + Math.floor(Math.random()*1000);
  updateContentVersion(Fields_Versions_upd_260, Filter_Versions_upd_260, Limit_Versions_upd_260, Meta_Versions_upd_260, Offset_Versions_upd_260, Search_Versions_upd_260, Sort_Versions_upd_260, UUId_Versions_upd_260, data_Versions_upd_260, fields_Versions_upd_260, id_Versions_upd_260, mainHash_Versions_upd_260, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Versions
  deleteContentVersion(id_Versions_260, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Webhooks:linear:1
bthread("crud:Webhooks:linear:1", function () {
  // -> Creating Webhooks
  let actions_Webhooks_270 = "actions_Webhooks_270_" + Math.floor(Math.random()*1000);
  let data_Webhooks_270 = true;
  let id_Webhooks_270 = "1";
  let method_Webhooks_270 = "POST";
  let name_Webhooks_270 = "create articles";
  let status_Webhooks_270 = "inactive";
  let system_collections_Webhooks_270 = "system-collections_Webhooks_270_" + Math.floor(Math.random()*1000);
  let url_Webhooks_270 = "url_Webhooks_270_" + Math.floor(Math.random()*1000);
  createWebhook(actions_Webhooks_270, data_Webhooks_270, id_Webhooks_270, method_Webhooks_270, name_Webhooks_270, status_Webhooks_270, system_collections_Webhooks_270, url_Webhooks_270, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Webhooks
  let actions_Webhooks_upd_270 = "actions_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  let data_Webhooks_upd_270 = true;
  let id_Webhooks_upd_270 = id_Webhooks_270;
  let method_Webhooks_upd_270 = "POST";
  let name_Webhooks_upd_270 = "create articles";
  let status_Webhooks_upd_270 = "inactive";
  let system_collections_Webhooks_upd_270 = "system-collections_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  let url_Webhooks_upd_270 = "url_Webhooks_upd_270_" + Math.floor(Math.random()*1000);
  updateWebhook(actions_Webhooks_upd_270, data_Webhooks_upd_270, id_Webhooks_upd_270, method_Webhooks_upd_270, name_Webhooks_upd_270, status_Webhooks_upd_270, system_collections_Webhooks_upd_270, url_Webhooks_upd_270, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Webhooks
  deleteWebhook(id_Webhooks_270, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Authentication:linear:2
bthread("crud:Authentication:linear:2", function () {
  // -> Creating Authentication
  let password_Authentication_280 = "password_Authentication_280_" + Math.floor(Math.random()*1000);
  let provider_Authentication_280 = "provider_Authentication_280_" + Math.floor(Math.random()*1000);
  let redirect_Authentication_280 = "redirect_Authentication_280_" + Math.floor(Math.random()*1000);
  let token_Authentication_280 = "token_Authentication_280_" + Math.floor(Math.random()*1000);
  passwordReset(password_Authentication_280, provider_Authentication_280, redirect_Authentication_280, token_Authentication_280, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Collections:linear:2
bthread("crud:Collections:linear:2", function () {
  // -> Creating Collections
  let Meta_Collections_290 = "Meta_Collections_290_" + Math.floor(Math.random()*1000);
  let Offset_Collections_290 = "Offset_Collections_290_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_290 = "archive_app_filter_Collections_290_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_290 = "archive_field_Collections_290_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_290 = "archive_value_Collections_290_" + Math.floor(Math.random()*1000);
  let collection_Collections_290 = "customers";
  let display_template_Collections_290 = "display_template_Collections_290_" + Math.floor(Math.random()*1000);
  let fields_Collections_290 = [];
  let hidden_Collections_290 = true;
  let icon_Collections_290 = "icon_Collections_290_" + Math.floor(Math.random()*1000);
  let id_Collections_290 = "id_Collections_290_" + Math.floor(Math.random()*1000);
  let meta_Collections_290 = "meta_Collections_290_" + Math.floor(Math.random()*1000);
  let note_Collections_290 = "note_Collections_290_" + Math.floor(Math.random()*1000);
  let singleton_Collections_290 = true;
  let sort_field_Collections_290 = "sort_field_Collections_290_" + Math.floor(Math.random()*1000);
  let translation_Collections_290 = "translation_Collections_290_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_290 = "unarchive_value_Collections_290_" + Math.floor(Math.random()*1000);
  let versioning_Collections_290 = true;
  createCollection(Meta_Collections_290, Offset_Collections_290, archive_app_filter_Collections_290, archive_field_Collections_290, archive_value_Collections_290, collection_Collections_290, display_template_Collections_290, fields_Collections_290, hidden_Collections_290, icon_Collections_290, id_Collections_290, meta_Collections_290, note_Collections_290, singleton_Collections_290, sort_field_Collections_290, translation_Collections_290, unarchive_value_Collections_290, versioning_Collections_290, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Collections
  let Meta_Collections_upd_290 = "Meta_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let Offset_Collections_upd_290 = "Offset_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_upd_290 = "archive_app_filter_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_upd_290 = "archive_field_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_upd_290 = "archive_value_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let collection_Collections_upd_290 = "customers";
  let display_template_Collections_upd_290 = "display_template_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let fields_Collections_upd_290 = "fields_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let hidden_Collections_upd_290 = "hidden_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let icon_Collections_upd_290 = "icon_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let id_Collections_upd_290 = id_Collections_290;
  let meta_Collections_upd_290 = {};
  let note_Collections_upd_290 = "note_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let singleton_Collections_upd_290 = "singleton_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let sort_field_Collections_upd_290 = "sort_field_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let translation_Collections_upd_290 = "translation_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_upd_290 = "unarchive_value_Collections_upd_290_" + Math.floor(Math.random()*1000);
  let versioning_Collections_upd_290 = "versioning_Collections_upd_290_" + Math.floor(Math.random()*1000);
  updateCollection(Meta_Collections_upd_290, Offset_Collections_upd_290, archive_app_filter_Collections_upd_290, archive_field_Collections_upd_290, archive_value_Collections_upd_290, collection_Collections_upd_290, display_template_Collections_upd_290, fields_Collections_upd_290, hidden_Collections_upd_290, icon_Collections_upd_290, id_Collections_upd_290, meta_Collections_upd_290, note_Collections_upd_290, singleton_Collections_upd_290, sort_field_Collections_upd_290, translation_Collections_upd_290, unarchive_value_Collections_upd_290, versioning_Collections_upd_290, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Collections to prevent foreign key errors (has active dependents)
});

// Story: crud:Items:linear:2
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
  let collection_Items_300 = "collection_Items_300_" + Math.floor(Math.random()*1000);
  createItem(Collection_Items_300, Fields_Items_300, Filter_Items_300, Limit_Items_300, Meta_Items_300, Offset_Items_300, Search_Items_300, Sort_Items_300, collection_Items_300, { expectedResponseCodes: [200, 201, 204] });

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

  // Skip delete for Items to prevent foreign key errors (has active dependents)
});

// Story: crud:Presets:linear:2
bthread("crud:Presets:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Presets
  let Fields_Presets_310 = "Fields_Presets_310_" + Math.floor(Math.random()*1000);
  let Filter_Presets_310 = "Filter_Presets_310_" + Math.floor(Math.random()*1000);
  let Id_Presets_310 = "Id_Presets_310_" + Math.floor(Math.random()*1000);
  let Limit_Presets_310 = "Limit_Presets_310_" + Math.floor(Math.random()*1000);
  let Meta_Presets_310 = "Meta_Presets_310_" + Math.floor(Math.random()*1000);
  let Offset_Presets_310 = "Offset_Presets_310_" + Math.floor(Math.random()*1000);
  let Page_Presets_310 = "Page_Presets_310_" + Math.floor(Math.random()*1000);
  let Search_Presets_310 = "Search_Presets_310_" + Math.floor(Math.random()*1000);
  let Sort_Presets_310 = "Sort_Presets_310_" + Math.floor(Math.random()*1000);
  let collection_Presets_310 = "articles";
  let filters_Presets_310 = [];
  let id_Presets_310 = CollectionsId;
  let layout_Presets_310 = "layout_Presets_310_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_310 = "{'cards': {'icon': 'account_circle', 'title': '{{ first_name }} {{ last_name }}', 'subtitle': '{{ title }}', 'size': 3}}";
  let layout_query_Presets_310 = "{'cards': {'sort': '-published_on'}}";
  let role_Presets_310 = "50419801-0f30-8644-2b3c-9bc2d980d0a0";
  let search_Presets_310 = "search_Presets_310_" + Math.floor(Math.random()*1000);
  let search_query_Presets_310 = "search_query_Presets_310_" + Math.floor(Math.random()*1000);
  let title_Presets_310 = "title_Presets_310_" + Math.floor(Math.random()*1000);
  let translation_Presets_310 = "translation_Presets_310_" + Math.floor(Math.random()*1000);
  let view_options_Presets_310 = "view_options_Presets_310_" + Math.floor(Math.random()*1000);
  let view_query_Presets_310 = "view_query_Presets_310_" + Math.floor(Math.random()*1000);
  let view_type_Presets_310 = "view_type_Presets_310_" + Math.floor(Math.random()*1000);
  createPreset(Fields_Presets_310, Filter_Presets_310, Id_Presets_310, Limit_Presets_310, Meta_Presets_310, Offset_Presets_310, Page_Presets_310, Search_Presets_310, Sort_Presets_310, collection_Presets_310, filters_Presets_310, id_Presets_310, layout_Presets_310, layout_options_Presets_310, layout_query_Presets_310, role_Presets_310, search_Presets_310, search_query_Presets_310, title_Presets_310, translation_Presets_310, view_options_Presets_310, view_query_Presets_310, view_type_Presets_310, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Presets
  let Fields_Presets_upd_310 = "Fields_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Filter_Presets_upd_310 = "Filter_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Id_Presets_upd_310 = "Id_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Limit_Presets_upd_310 = "Limit_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Meta_Presets_upd_310 = "Meta_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Offset_Presets_upd_310 = "Offset_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Page_Presets_upd_310 = "Page_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Search_Presets_upd_310 = "Search_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let Sort_Presets_upd_310 = "Sort_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let collection_Presets_upd_310 = "articles";
  let filters_Presets_upd_310 = [];
  let id_Presets_upd_310 = id_Presets_310;
  let layout_Presets_upd_310 = "layout_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_upd_310 = "{'cards': {'icon': 'account_circle', 'title': '{{ first_name }} {{ last_name }}', 'subtitle': '{{ title }}', 'size': 3}}";
  let layout_query_Presets_upd_310 = "{'cards': {'sort': '-published_on'}}";
  let role_Presets_upd_310 = Math.floor(Math.random() * 1000);
  let search_Presets_upd_310 = "search_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let search_query_Presets_upd_310 = "search_query_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let title_Presets_upd_310 = "title_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let translation_Presets_upd_310 = {};
  let view_options_Presets_upd_310 = "view_options_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let view_query_Presets_upd_310 = "view_query_Presets_upd_310_" + Math.floor(Math.random()*1000);
  let view_type_Presets_upd_310 = "view_type_Presets_upd_310_" + Math.floor(Math.random()*1000);
  updatePreset(Fields_Presets_upd_310, Filter_Presets_upd_310, Id_Presets_upd_310, Limit_Presets_upd_310, Meta_Presets_upd_310, Offset_Presets_upd_310, Page_Presets_upd_310, Search_Presets_upd_310, Sort_Presets_upd_310, collection_Presets_upd_310, filters_Presets_upd_310, id_Presets_upd_310, layout_Presets_upd_310, layout_options_Presets_upd_310, layout_query_Presets_upd_310, role_Presets_upd_310, search_Presets_upd_310, search_query_Presets_upd_310, title_Presets_upd_310, translation_Presets_upd_310, view_options_Presets_upd_310, view_query_Presets_upd_310, view_type_Presets_upd_310, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Presets
  deletePreset(id_Presets_310, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Comments:linear:2
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
  let comment_Comments_320 = "This is a comment";
  let id_Comments_320 = CollectionsId;
  let item_Comments_320 = "123";
  createComment(collection_Comments_320, comment_Comments_320, id_Comments_320, item_Comments_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Comments
  let collection_Comments_upd_320 = "articles";
  let comment_Comments_upd_320 = "This is a comment";
  let id_Comments_upd_320 = id_Comments_320;
  let item_Comments_upd_320 = "123";
  updateComment(collection_Comments_upd_320, comment_Comments_upd_320, id_Comments_upd_320, item_Comments_upd_320, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Comments
  deleteComment(id_Comments_320, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Fields:linear:2
bthread("crud:Fields:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Fields
  let Sort_Fields_330 = "Sort_Fields_330_" + Math.floor(Math.random()*1000);
  let collection_Fields_330 = "about_us";
  let datatype_Fields_330 = "datatype_Fields_330_" + Math.floor(Math.random()*1000);
  let field_Fields_330 = "id";
  let id_Fields_330 = CollectionsId;
  let length_Fields_330 = Math.floor(Math.random() * 1000);
  let meta_Fields_330 = {};
  let schema_Fields_330 = {};
  let type_Fields_330 = "integer";
  createField(Sort_Fields_330, collection_Fields_330, datatype_Fields_330, field_Fields_330, id_Fields_330, length_Fields_330, meta_Fields_330, schema_Fields_330, type_Fields_330, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Fields
  let Sort_Fields_upd_330 = "Sort_Fields_upd_330_" + Math.floor(Math.random()*1000);
  let collection_Fields_upd_330 = collection_Fields_330;
  let datatype_Fields_upd_330 = "datatype_Fields_upd_330_" + Math.floor(Math.random()*1000);
  let field_Fields_upd_330 = "id";
  let id_Fields_upd_330 = "id_Fields_upd_330_" + Math.floor(Math.random()*1000);
  let length_Fields_upd_330 = "length_Fields_upd_330_" + Math.floor(Math.random()*1000);
  let meta_Fields_upd_330 = {};
  let schema_Fields_upd_330 = {};
  let type_Fields_upd_330 = "integer";
  updateField(Sort_Fields_upd_330, collection_Fields_upd_330, datatype_Fields_upd_330, field_Fields_upd_330, id_Fields_upd_330, length_Fields_upd_330, meta_Fields_upd_330, schema_Fields_upd_330, type_Fields_upd_330, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Fields
  deleteField(collection_Fields_330, id_Fields_330, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Files:linear:2
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
  let filename_download_Files_340 = "avatar.jpg";
  let folder_Files_340 = "folder_Files_340_" + Math.floor(Math.random()*1000);
  let id_Files_340 = "8cbb43fe-4cdf-4991-8352-c461779cec02";
  let tags_Files_340 = "tags_Files_340_" + Math.floor(Math.random()*1000);
  let title_Files_340 = "User Avatar";
  createFile(Fields_Files_340, Filter_Files_340, Limit_Files_340, Meta_Files_340, Offset_Files_340, Search_Files_340, Sort_Files_340, data_Files_340, description_Files_340, filename_download_Files_340, folder_Files_340, id_Files_340, tags_Files_340, title_Files_340, { expectedResponseCodes: [200, 201, 204] });

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
  let filename_download_Files_upd_340 = "avatar.jpg";
  let folder_Files_upd_340 = "folder_Files_upd_340_" + Math.floor(Math.random()*1000);
  let id_Files_upd_340 = id_Files_340;
  let tags_Files_upd_340 = [];
  let title_Files_upd_340 = "User Avatar";
  updateFile(Fields_Files_upd_340, Filter_Files_upd_340, Limit_Files_upd_340, Meta_Files_upd_340, Offset_Files_upd_340, Search_Files_upd_340, Sort_Files_upd_340, data_Files_upd_340, description_Files_upd_340, filename_download_Files_upd_340, folder_Files_upd_340, id_Files_upd_340, tags_Files_upd_340, title_Files_upd_340, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Files
  deleteFile(id_Files_340, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Flows:linear:2
bthread("crud:Flows:linear:2", function () {
  // -> Creating Flows
  let Fields_Flows_350 = "Fields_Flows_350_" + Math.floor(Math.random()*1000);
  let Meta_Flows_350 = "Meta_Flows_350_" + Math.floor(Math.random()*1000);
  let data_Flows_350 = {};
  let id_Flows_350 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  createFlow(Fields_Flows_350, Meta_Flows_350, data_Flows_350, id_Flows_350, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Flows
  let Fields_Flows_upd_350 = "Fields_Flows_upd_350_" + Math.floor(Math.random()*1000);
  let Meta_Flows_upd_350 = "Meta_Flows_upd_350_" + Math.floor(Math.random()*1000);
  let data_Flows_upd_350 = {};
  let id_Flows_upd_350 = id_Flows_350;
  updateFlow(Fields_Flows_upd_350, Meta_Flows_upd_350, data_Flows_upd_350, id_Flows_upd_350, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Flows
  deleteFlow(id_Flows_350, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Folders:linear:2
bthread("crud:Folders:linear:2", function () {
  // -> Creating Folders
  let Fields_Folders_360 = "Fields_Folders_360_" + Math.floor(Math.random()*1000);
  let Filter_Folders_360 = "Filter_Folders_360_" + Math.floor(Math.random()*1000);
  let Limit_Folders_360 = "Limit_Folders_360_" + Math.floor(Math.random()*1000);
  let Meta_Folders_360 = "Meta_Folders_360_" + Math.floor(Math.random()*1000);
  let Offset_Folders_360 = "Offset_Folders_360_" + Math.floor(Math.random()*1000);
  let Search_Folders_360 = "Search_Folders_360_" + Math.floor(Math.random()*1000);
  let Sort_Folders_360 = "Sort_Folders_360_" + Math.floor(Math.random()*1000);
  let id_Folders_360 = "0cf0e03d-4364-45df-b77b-ca61f61869d2";
  let name_Folders_360 = "New York";
  let parent_Folders_360 = Math.floor(Math.random() * 1000);
  createFolder(Fields_Folders_360, Filter_Folders_360, Limit_Folders_360, Meta_Folders_360, Offset_Folders_360, Search_Folders_360, Sort_Folders_360, id_Folders_360, name_Folders_360, parent_Folders_360, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Folders
  let Fields_Folders_upd_360 = "Fields_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Filter_Folders_upd_360 = "Filter_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Limit_Folders_upd_360 = "Limit_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Meta_Folders_upd_360 = "Meta_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Offset_Folders_upd_360 = "Offset_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Search_Folders_upd_360 = "Search_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let Sort_Folders_upd_360 = "Sort_Folders_upd_360_" + Math.floor(Math.random()*1000);
  let id_Folders_upd_360 = id_Folders_360;
  let name_Folders_upd_360 = "New York";
  let parent_Folders_upd_360 = Math.floor(Math.random() * 1000);
  updateFolder(Fields_Folders_upd_360, Filter_Folders_upd_360, Limit_Folders_upd_360, Meta_Folders_upd_360, Offset_Folders_upd_360, Search_Folders_upd_360, Sort_Folders_upd_360, id_Folders_upd_360, name_Folders_upd_360, parent_Folders_upd_360, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Folders
  deleteFolder(id_Folders_360, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Operations:linear:2
bthread("crud:Operations:linear:2", function () {
  // -> Creating Operations
  let Fields_Operations_370 = {};
  let Meta_Operations_370 = {};
  let UUId_Operations_370 = "UUId_Operations_370_" + Math.floor(Math.random()*1000);
  let data_Operations_370 = "data_Operations_370_" + Math.floor(Math.random()*1000);
  let id_Operations_370 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  createOperation(Fields_Operations_370, Meta_Operations_370, UUId_Operations_370, data_Operations_370, id_Operations_370, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Operations
  let Fields_Operations_upd_370 = {};
  let Meta_Operations_upd_370 = {};
  let UUId_Operations_upd_370 = "UUId_Operations_upd_370_" + Math.floor(Math.random()*1000);
  let data_Operations_upd_370 = "data_Operations_upd_370_" + Math.floor(Math.random()*1000);
  let id_Operations_upd_370 = id_Operations_370;
  updateOperation(Fields_Operations_upd_370, Meta_Operations_upd_370, UUId_Operations_upd_370, data_Operations_upd_370, id_Operations_upd_370, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Operations
  deleteOperation(id_Operations_370, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Permissions:linear:2
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
  let Id_Permissions_380 = "Id_Permissions_380_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_380 = "Meta_Permissions_380_" + Math.floor(Math.random()*1000);
  let collection_Permissions_380 = "customers";
  let comment_Permissions_380 = "comment_Permissions_380_" + Math.floor(Math.random()*1000);
  let create_Permissions_380 = "create_Permissions_380_" + Math.floor(Math.random()*1000);
  let _delete_Permissions_380 = "delete_Permissions_380_" + Math.floor(Math.random()*1000);
  let explain_Permissions_380 = "explain_Permissions_380_" + Math.floor(Math.random()*1000);
  let id_Permissions_380 = RolesId;
  let read_Permissions_380 = "read_Permissions_380_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_380 = [];
  let role_Permissions_380 = Math.floor(Math.random() * 1000);
  let status_Permissions_380 = "active";
  let status_blacklist_Permissions_380 = [];
  let update_Permissions_380 = "update_Permissions_380_" + Math.floor(Math.random()*1000);
  let write_field_blacklist_Permissions_380 = [];
  createPermission(Fields_Permissions_380, Id_Permissions_380, Meta_Permissions_380, collection_Permissions_380, comment_Permissions_380, create_Permissions_380, _delete_Permissions_380, explain_Permissions_380, id_Permissions_380, read_Permissions_380, read_field_blacklist_Permissions_380, role_Permissions_380, status_Permissions_380, status_blacklist_Permissions_380, update_Permissions_380, write_field_blacklist_Permissions_380, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Permissions
  let Fields_Permissions_upd_380 = "Fields_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Id_Permissions_upd_380 = "Id_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_upd_380 = "Meta_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let collection_Permissions_upd_380 = {};
  let comment_Permissions_upd_380 = "comment_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let create_Permissions_upd_380 = "create_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let _delete_Permissions_upd_380 = "delete_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let explain_Permissions_upd_380 = "explain_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let id_Permissions_upd_380 = id_Permissions_380;
  let read_Permissions_upd_380 = "read_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_upd_380 = {};
  let role_Permissions_upd_380 = {};
  let status_Permissions_upd_380 = {};
  let status_blacklist_Permissions_upd_380 = {};
  let update_Permissions_upd_380 = "update_Permissions_upd_380_" + Math.floor(Math.random()*1000);
  let write_field_blacklist_Permissions_upd_380 = {};
  updatePermission(Fields_Permissions_upd_380, Id_Permissions_upd_380, Meta_Permissions_upd_380, collection_Permissions_upd_380, comment_Permissions_upd_380, create_Permissions_upd_380, _delete_Permissions_upd_380, explain_Permissions_upd_380, id_Permissions_upd_380, read_Permissions_upd_380, read_field_blacklist_Permissions_upd_380, role_Permissions_upd_380, status_Permissions_upd_380, status_blacklist_Permissions_upd_380, update_Permissions_upd_380, write_field_blacklist_Permissions_upd_380, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Permissions
  deletePermission(id_Permissions_380, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Relations:linear:2
bthread("crud:Relations:linear:2", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Relations
  let Fields_Relations_390 = "Fields_Relations_390_" + Math.floor(Math.random()*1000);
  let Filter_Relations_390 = "Filter_Relations_390_" + Math.floor(Math.random()*1000);
  let Id_Relations_390 = "Id_Relations_390_" + Math.floor(Math.random()*1000);
  let Limit_Relations_390 = "Limit_Relations_390_" + Math.floor(Math.random()*1000);
  let Meta_Relations_390 = "Meta_Relations_390_" + Math.floor(Math.random()*1000);
  let Offset_Relations_390 = "Offset_Relations_390_" + Math.floor(Math.random()*1000);
  let Page_Relations_390 = "Page_Relations_390_" + Math.floor(Math.random()*1000);
  let Search_Relations_390 = "Search_Relations_390_" + Math.floor(Math.random()*1000);
  let Sort_Relations_390 = "Sort_Relations_390_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_390 = "collection_many_Relations_390_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_390 = "collection_one_Relations_390_" + Math.floor(Math.random()*1000);
  let field_many_Relations_390 = "field_many_Relations_390_" + Math.floor(Math.random()*1000);
  let field_one_Relations_390 = "field_one_Relations_390_" + Math.floor(Math.random()*1000);
  let id_Relations_390 = CollectionsId;
  let junction_field_Relations_390 = "junction_field_Relations_390_" + Math.floor(Math.random()*1000);
  createRelation(Fields_Relations_390, Filter_Relations_390, Id_Relations_390, Limit_Relations_390, Meta_Relations_390, Offset_Relations_390, Page_Relations_390, Search_Relations_390, Sort_Relations_390, collection_many_Relations_390, collection_one_Relations_390, field_many_Relations_390, field_one_Relations_390, id_Relations_390, junction_field_Relations_390, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Relations
  let Fields_Relations_upd_390 = "Fields_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Filter_Relations_upd_390 = "Filter_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Id_Relations_upd_390 = "Id_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Limit_Relations_upd_390 = "Limit_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Meta_Relations_upd_390 = "Meta_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Offset_Relations_upd_390 = "Offset_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Page_Relations_upd_390 = "Page_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Search_Relations_upd_390 = "Search_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let Sort_Relations_upd_390 = "Sort_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_upd_390 = "collection_many_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_upd_390 = "collection_one_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let field_many_Relations_upd_390 = "field_many_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let field_one_Relations_upd_390 = "field_one_Relations_upd_390_" + Math.floor(Math.random()*1000);
  let id_Relations_upd_390 = id_Relations_390;
  let junction_field_Relations_upd_390 = "junction_field_Relations_upd_390_" + Math.floor(Math.random()*1000);
  updateRelation(Fields_Relations_upd_390, Filter_Relations_upd_390, Id_Relations_upd_390, Limit_Relations_upd_390, Meta_Relations_upd_390, Offset_Relations_upd_390, Page_Relations_upd_390, Search_Relations_upd_390, Sort_Relations_upd_390, collection_many_Relations_upd_390, collection_one_Relations_upd_390, field_many_Relations_upd_390, field_one_Relations_upd_390, id_Relations_upd_390, junction_field_Relations_upd_390, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Relations
  deleteRelation(id_Relations_390, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Roles:linear:2
bthread("crud:Roles:linear:2", function () {
  // -> Creating Roles
  let Fields_Roles_400 = "Fields_Roles_400_" + Math.floor(Math.random()*1000);
  let Filter_Roles_400 = "Filter_Roles_400_" + Math.floor(Math.random()*1000);
  let Limit_Roles_400 = "Limit_Roles_400_" + Math.floor(Math.random()*1000);
  let Meta_Roles_400 = "Meta_Roles_400_" + Math.floor(Math.random()*1000);
  let Offset_Roles_400 = "Offset_Roles_400_" + Math.floor(Math.random()*1000);
  let Page_Roles_400 = "Page_Roles_400_" + Math.floor(Math.random()*1000);
  let Search_Roles_400 = "Search_Roles_400_" + Math.floor(Math.random()*1000);
  let Sort_Roles_400 = "Sort_Roles_400_" + Math.floor(Math.random()*1000);
  let description_Roles_400 = "Admins have access to all managed data within the system by default";
  let enforce_tfa_Roles_400 = true;
  let external_id_Roles_400 = "external_id_Roles_400_" + Math.floor(Math.random()*1000);
  let id_Roles_400 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  let ip_access_Roles_400 = [];
  let module_listing_Roles_400 = "module_listing_Roles_400_" + Math.floor(Math.random()*1000);
  let name_Roles_400 = "Administrator";
  createRole(Fields_Roles_400, Filter_Roles_400, Limit_Roles_400, Meta_Roles_400, Offset_Roles_400, Page_Roles_400, Search_Roles_400, Sort_Roles_400, description_Roles_400, enforce_tfa_Roles_400, external_id_Roles_400, id_Roles_400, ip_access_Roles_400, module_listing_Roles_400, name_Roles_400, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Roles
  let Fields_Roles_upd_400 = "Fields_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Filter_Roles_upd_400 = "Filter_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Limit_Roles_upd_400 = "Limit_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Meta_Roles_upd_400 = "Meta_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Offset_Roles_upd_400 = "Offset_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Page_Roles_upd_400 = "Page_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Search_Roles_upd_400 = "Search_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let Sort_Roles_upd_400 = "Sort_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let description_Roles_upd_400 = "Admins have access to all managed data within the system by default";
  let enforce_tfa_Roles_upd_400 = true;
  let external_id_Roles_upd_400 = "external_id_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let id_Roles_upd_400 = id_Roles_400;
  let ip_access_Roles_upd_400 = [];
  let module_listing_Roles_upd_400 = "module_listing_Roles_upd_400_" + Math.floor(Math.random()*1000);
  let name_Roles_upd_400 = "Administrator";
  updateRole(Fields_Roles_upd_400, Filter_Roles_upd_400, Limit_Roles_upd_400, Meta_Roles_upd_400, Offset_Roles_upd_400, Page_Roles_upd_400, Search_Roles_upd_400, Sort_Roles_upd_400, description_Roles_upd_400, enforce_tfa_Roles_upd_400, external_id_Roles_upd_400, id_Roles_upd_400, ip_access_Roles_upd_400, module_listing_Roles_upd_400, name_Roles_upd_400, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Roles to prevent foreign key errors (has active dependents)
});

// Story: crud:Schema:linear:2
bthread("crud:Schema:linear:2", function () {
  // -> Creating Schema
  let Export_Schema_410 = "Export_Schema_410_" + Math.floor(Math.random()*1000);
  let data_Schema_410 = "data_Schema_410_" + Math.floor(Math.random()*1000);
  let force_Schema_410 = true;
  let id_Schema_410 = "id_Schema_410_" + Math.floor(Math.random()*1000);
  schemaDiff(Export_Schema_410, data_Schema_410, force_Schema_410, id_Schema_410, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  // -> Creating Users
  let Fields_Users_420 = "Fields_Users_420_" + Math.floor(Math.random()*1000);
  let Filter_Users_420 = "Filter_Users_420_" + Math.floor(Math.random()*1000);
  let Limit_Users_420 = "Limit_Users_420_" + Math.floor(Math.random()*1000);
  let Meta_Users_420 = "Meta_Users_420_" + Math.floor(Math.random()*1000);
  let Offset_Users_420 = "Offset_Users_420_" + Math.floor(Math.random()*1000);
  let Search_Users_420 = "Search_Users_420_" + Math.floor(Math.random()*1000);
  let Sort_Users_420 = "Sort_Users_420_" + Math.floor(Math.random()*1000);
  let UUId_Users_420 = "UUId_Users_420_" + Math.floor(Math.random()*1000);
  let id_Users_420 = "63716273-0f29-4648-8a2a-2af2948f6f78";
  let last_page_Users_420 = "/my-project/settings/collections/a";
  let password_Users_420 = "password_Users_420_" + Math.floor(Math.random()*1000);
  let token_Users_420 = "token_Users_420_" + Math.floor(Math.random()*1000);
  acceptInvite(Fields_Users_420, Filter_Users_420, Limit_Users_420, Meta_Users_420, Offset_Users_420, Search_Users_420, Sort_Users_420, UUId_Users_420, id_Users_420, last_page_Users_420, password_Users_420, token_Users_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let Fields_Users_upd_420 = "Fields_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Filter_Users_upd_420 = "Filter_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Limit_Users_upd_420 = "Limit_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Meta_Users_upd_420 = "Meta_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Offset_Users_upd_420 = "Offset_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Search_Users_upd_420 = "Search_Users_upd_420_" + Math.floor(Math.random()*1000);
  let Sort_Users_upd_420 = "Sort_Users_upd_420_" + Math.floor(Math.random()*1000);
  let UUId_Users_upd_420 = "UUId_Users_upd_420_" + Math.floor(Math.random()*1000);
  let id_Users_upd_420 = id_Users_420;
  let last_page_Users_upd_420 = "/my-project/settings/collections/a";
  let password_Users_upd_420 = "password_Users_upd_420_" + Math.floor(Math.random()*1000);
  let token_Users_upd_420 = "token_Users_upd_420_" + Math.floor(Math.random()*1000);
  updateMe(Fields_Users_upd_420, Filter_Users_upd_420, Limit_Users_upd_420, Meta_Users_upd_420, Offset_Users_upd_420, Search_Users_upd_420, Sort_Users_upd_420, UUId_Users_upd_420, id_Users_upd_420, last_page_Users_upd_420, password_Users_upd_420, token_Users_upd_420, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  deleteUser(id_Users_420, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Utilities:linear:2
bthread("crud:Utilities:linear:2", function () {
  // -> Creating Utilities
  let id_Utilities_430 = "id_Utilities_430_" + Math.floor(Math.random()*1000);
  let length_Utilities_430 = "length_Utilities_430_" + Math.floor(Math.random()*1000);
  clearCache(id_Utilities_430, length_Utilities_430, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Versions:linear:2
bthread("crud:Versions:linear:2", function () {
  // -> Creating Versions
  let Fields_Versions_440 = "Fields_Versions_440_" + Math.floor(Math.random()*1000);
  let Filter_Versions_440 = "Filter_Versions_440_" + Math.floor(Math.random()*1000);
  let Limit_Versions_440 = "Limit_Versions_440_" + Math.floor(Math.random()*1000);
  let Meta_Versions_440 = "Meta_Versions_440_" + Math.floor(Math.random()*1000);
  let Offset_Versions_440 = "Offset_Versions_440_" + Math.floor(Math.random()*1000);
  let Search_Versions_440 = "Search_Versions_440_" + Math.floor(Math.random()*1000);
  let Sort_Versions_440 = "Sort_Versions_440_" + Math.floor(Math.random()*1000);
  let UUId_Versions_440 = "UUId_Versions_440_" + Math.floor(Math.random()*1000);
  let data_Versions_440 = "data_Versions_440_" + Math.floor(Math.random()*1000);
  let fields_Versions_440 = "fields_Versions_440_" + Math.floor(Math.random()*1000);
  let id_Versions_440 = "63716273-0f29-4648-8a2a-2af2948f6f78";
  let mainHash_Versions_440 = "mainHash_Versions_440_" + Math.floor(Math.random()*1000);
  promoteContentVersion(Fields_Versions_440, Filter_Versions_440, Limit_Versions_440, Meta_Versions_440, Offset_Versions_440, Search_Versions_440, Sort_Versions_440, UUId_Versions_440, data_Versions_440, fields_Versions_440, id_Versions_440, mainHash_Versions_440, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Versions
  let Fields_Versions_upd_440 = "Fields_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Filter_Versions_upd_440 = "Filter_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Limit_Versions_upd_440 = "Limit_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Meta_Versions_upd_440 = "Meta_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Offset_Versions_upd_440 = "Offset_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Search_Versions_upd_440 = "Search_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let Sort_Versions_upd_440 = "Sort_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let UUId_Versions_upd_440 = "UUId_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let data_Versions_upd_440 = "data_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let fields_Versions_upd_440 = "fields_Versions_upd_440_" + Math.floor(Math.random()*1000);
  let id_Versions_upd_440 = id_Versions_440;
  let mainHash_Versions_upd_440 = "mainHash_Versions_upd_440_" + Math.floor(Math.random()*1000);
  updateContentVersion(Fields_Versions_upd_440, Filter_Versions_upd_440, Limit_Versions_upd_440, Meta_Versions_upd_440, Offset_Versions_upd_440, Search_Versions_upd_440, Sort_Versions_upd_440, UUId_Versions_upd_440, data_Versions_upd_440, fields_Versions_upd_440, id_Versions_upd_440, mainHash_Versions_upd_440, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Versions
  deleteContentVersion(id_Versions_440, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Webhooks:linear:2
bthread("crud:Webhooks:linear:2", function () {
  // -> Creating Webhooks
  let actions_Webhooks_450 = "actions_Webhooks_450_" + Math.floor(Math.random()*1000);
  let data_Webhooks_450 = true;
  let id_Webhooks_450 = "1";
  let method_Webhooks_450 = "POST";
  let name_Webhooks_450 = "create articles";
  let status_Webhooks_450 = "inactive";
  let system_collections_Webhooks_450 = "system-collections_Webhooks_450_" + Math.floor(Math.random()*1000);
  let url_Webhooks_450 = "url_Webhooks_450_" + Math.floor(Math.random()*1000);
  createWebhook(actions_Webhooks_450, data_Webhooks_450, id_Webhooks_450, method_Webhooks_450, name_Webhooks_450, status_Webhooks_450, system_collections_Webhooks_450, url_Webhooks_450, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Webhooks
  let actions_Webhooks_upd_450 = "actions_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  let data_Webhooks_upd_450 = true;
  let id_Webhooks_upd_450 = id_Webhooks_450;
  let method_Webhooks_upd_450 = "POST";
  let name_Webhooks_upd_450 = "create articles";
  let status_Webhooks_upd_450 = "inactive";
  let system_collections_Webhooks_upd_450 = "system-collections_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  let url_Webhooks_upd_450 = "url_Webhooks_upd_450_" + Math.floor(Math.random()*1000);
  updateWebhook(actions_Webhooks_upd_450, data_Webhooks_upd_450, id_Webhooks_upd_450, method_Webhooks_upd_450, name_Webhooks_upd_450, status_Webhooks_upd_450, system_collections_Webhooks_upd_450, url_Webhooks_upd_450, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Webhooks
  deleteWebhook(id_Webhooks_450, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Authentication:linear:3
bthread("crud:Authentication:linear:3", function () {
  // -> Creating Authentication
  let password_Authentication_460 = "password_Authentication_460_" + Math.floor(Math.random()*1000);
  let provider_Authentication_460 = "provider_Authentication_460_" + Math.floor(Math.random()*1000);
  let redirect_Authentication_460 = "redirect_Authentication_460_" + Math.floor(Math.random()*1000);
  let token_Authentication_460 = "token_Authentication_460_" + Math.floor(Math.random()*1000);
  passwordReset(password_Authentication_460, provider_Authentication_460, redirect_Authentication_460, token_Authentication_460, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Collections:linear:3
bthread("crud:Collections:linear:3", function () {
  // -> Creating Collections
  let Meta_Collections_470 = "Meta_Collections_470_" + Math.floor(Math.random()*1000);
  let Offset_Collections_470 = "Offset_Collections_470_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_470 = "archive_app_filter_Collections_470_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_470 = "archive_field_Collections_470_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_470 = "archive_value_Collections_470_" + Math.floor(Math.random()*1000);
  let collection_Collections_470 = "customers";
  let display_template_Collections_470 = "display_template_Collections_470_" + Math.floor(Math.random()*1000);
  let fields_Collections_470 = [];
  let hidden_Collections_470 = true;
  let icon_Collections_470 = "icon_Collections_470_" + Math.floor(Math.random()*1000);
  let id_Collections_470 = "id_Collections_470_" + Math.floor(Math.random()*1000);
  let meta_Collections_470 = "meta_Collections_470_" + Math.floor(Math.random()*1000);
  let note_Collections_470 = "note_Collections_470_" + Math.floor(Math.random()*1000);
  let singleton_Collections_470 = true;
  let sort_field_Collections_470 = "sort_field_Collections_470_" + Math.floor(Math.random()*1000);
  let translation_Collections_470 = "translation_Collections_470_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_470 = "unarchive_value_Collections_470_" + Math.floor(Math.random()*1000);
  let versioning_Collections_470 = true;
  createCollection(Meta_Collections_470, Offset_Collections_470, archive_app_filter_Collections_470, archive_field_Collections_470, archive_value_Collections_470, collection_Collections_470, display_template_Collections_470, fields_Collections_470, hidden_Collections_470, icon_Collections_470, id_Collections_470, meta_Collections_470, note_Collections_470, singleton_Collections_470, sort_field_Collections_470, translation_Collections_470, unarchive_value_Collections_470, versioning_Collections_470, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Collections
  let Meta_Collections_upd_470 = "Meta_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let Offset_Collections_upd_470 = "Offset_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_upd_470 = "archive_app_filter_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_upd_470 = "archive_field_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_upd_470 = "archive_value_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let collection_Collections_upd_470 = "customers";
  let display_template_Collections_upd_470 = "display_template_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let fields_Collections_upd_470 = "fields_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let hidden_Collections_upd_470 = "hidden_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let icon_Collections_upd_470 = "icon_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let id_Collections_upd_470 = id_Collections_470;
  let meta_Collections_upd_470 = {};
  let note_Collections_upd_470 = "note_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let singleton_Collections_upd_470 = "singleton_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let sort_field_Collections_upd_470 = "sort_field_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let translation_Collections_upd_470 = "translation_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_upd_470 = "unarchive_value_Collections_upd_470_" + Math.floor(Math.random()*1000);
  let versioning_Collections_upd_470 = "versioning_Collections_upd_470_" + Math.floor(Math.random()*1000);
  updateCollection(Meta_Collections_upd_470, Offset_Collections_upd_470, archive_app_filter_Collections_upd_470, archive_field_Collections_upd_470, archive_value_Collections_upd_470, collection_Collections_upd_470, display_template_Collections_upd_470, fields_Collections_upd_470, hidden_Collections_upd_470, icon_Collections_upd_470, id_Collections_upd_470, meta_Collections_upd_470, note_Collections_upd_470, singleton_Collections_upd_470, sort_field_Collections_upd_470, translation_Collections_upd_470, unarchive_value_Collections_upd_470, versioning_Collections_upd_470, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Collections to prevent foreign key errors (has active dependents)
});

// Story: crud:Items:linear:3
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
  let collection_Items_480 = "collection_Items_480_" + Math.floor(Math.random()*1000);
  createItem(Collection_Items_480, Fields_Items_480, Filter_Items_480, Limit_Items_480, Meta_Items_480, Offset_Items_480, Search_Items_480, Sort_Items_480, collection_Items_480, { expectedResponseCodes: [200, 201, 204] });

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

  // Skip delete for Items to prevent foreign key errors (has active dependents)
});

// Story: crud:Presets:linear:3
bthread("crud:Presets:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Presets
  let Fields_Presets_490 = "Fields_Presets_490_" + Math.floor(Math.random()*1000);
  let Filter_Presets_490 = "Filter_Presets_490_" + Math.floor(Math.random()*1000);
  let Id_Presets_490 = "Id_Presets_490_" + Math.floor(Math.random()*1000);
  let Limit_Presets_490 = "Limit_Presets_490_" + Math.floor(Math.random()*1000);
  let Meta_Presets_490 = "Meta_Presets_490_" + Math.floor(Math.random()*1000);
  let Offset_Presets_490 = "Offset_Presets_490_" + Math.floor(Math.random()*1000);
  let Page_Presets_490 = "Page_Presets_490_" + Math.floor(Math.random()*1000);
  let Search_Presets_490 = "Search_Presets_490_" + Math.floor(Math.random()*1000);
  let Sort_Presets_490 = "Sort_Presets_490_" + Math.floor(Math.random()*1000);
  let collection_Presets_490 = "articles";
  let filters_Presets_490 = [];
  let id_Presets_490 = CollectionsId;
  let layout_Presets_490 = "layout_Presets_490_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_490 = "{'cards': {'icon': 'account_circle', 'title': '{{ first_name }} {{ last_name }}', 'subtitle': '{{ title }}', 'size': 3}}";
  let layout_query_Presets_490 = "{'cards': {'sort': '-published_on'}}";
  let role_Presets_490 = "50419801-0f30-8644-2b3c-9bc2d980d0a0";
  let search_Presets_490 = "search_Presets_490_" + Math.floor(Math.random()*1000);
  let search_query_Presets_490 = "search_query_Presets_490_" + Math.floor(Math.random()*1000);
  let title_Presets_490 = "title_Presets_490_" + Math.floor(Math.random()*1000);
  let translation_Presets_490 = "translation_Presets_490_" + Math.floor(Math.random()*1000);
  let view_options_Presets_490 = "view_options_Presets_490_" + Math.floor(Math.random()*1000);
  let view_query_Presets_490 = "view_query_Presets_490_" + Math.floor(Math.random()*1000);
  let view_type_Presets_490 = "view_type_Presets_490_" + Math.floor(Math.random()*1000);
  createPreset(Fields_Presets_490, Filter_Presets_490, Id_Presets_490, Limit_Presets_490, Meta_Presets_490, Offset_Presets_490, Page_Presets_490, Search_Presets_490, Sort_Presets_490, collection_Presets_490, filters_Presets_490, id_Presets_490, layout_Presets_490, layout_options_Presets_490, layout_query_Presets_490, role_Presets_490, search_Presets_490, search_query_Presets_490, title_Presets_490, translation_Presets_490, view_options_Presets_490, view_query_Presets_490, view_type_Presets_490, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Presets
  let Fields_Presets_upd_490 = "Fields_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Filter_Presets_upd_490 = "Filter_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Id_Presets_upd_490 = "Id_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Limit_Presets_upd_490 = "Limit_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Meta_Presets_upd_490 = "Meta_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Offset_Presets_upd_490 = "Offset_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Page_Presets_upd_490 = "Page_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Search_Presets_upd_490 = "Search_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let Sort_Presets_upd_490 = "Sort_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let collection_Presets_upd_490 = "articles";
  let filters_Presets_upd_490 = [];
  let id_Presets_upd_490 = id_Presets_490;
  let layout_Presets_upd_490 = "layout_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_upd_490 = "{'cards': {'icon': 'account_circle', 'title': '{{ first_name }} {{ last_name }}', 'subtitle': '{{ title }}', 'size': 3}}";
  let layout_query_Presets_upd_490 = "{'cards': {'sort': '-published_on'}}";
  let role_Presets_upd_490 = Math.floor(Math.random() * 1000);
  let search_Presets_upd_490 = "search_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let search_query_Presets_upd_490 = "search_query_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let title_Presets_upd_490 = "title_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let translation_Presets_upd_490 = {};
  let view_options_Presets_upd_490 = "view_options_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let view_query_Presets_upd_490 = "view_query_Presets_upd_490_" + Math.floor(Math.random()*1000);
  let view_type_Presets_upd_490 = "view_type_Presets_upd_490_" + Math.floor(Math.random()*1000);
  updatePreset(Fields_Presets_upd_490, Filter_Presets_upd_490, Id_Presets_upd_490, Limit_Presets_upd_490, Meta_Presets_upd_490, Offset_Presets_upd_490, Page_Presets_upd_490, Search_Presets_upd_490, Sort_Presets_upd_490, collection_Presets_upd_490, filters_Presets_upd_490, id_Presets_upd_490, layout_Presets_upd_490, layout_options_Presets_upd_490, layout_query_Presets_upd_490, role_Presets_upd_490, search_Presets_upd_490, search_query_Presets_upd_490, title_Presets_upd_490, translation_Presets_upd_490, view_options_Presets_upd_490, view_query_Presets_upd_490, view_type_Presets_upd_490, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Presets
  deletePreset(id_Presets_490, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Comments:linear:3
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
  let comment_Comments_500 = "This is a comment";
  let id_Comments_500 = CollectionsId;
  let item_Comments_500 = "123";
  createComment(collection_Comments_500, comment_Comments_500, id_Comments_500, item_Comments_500, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Comments
  let collection_Comments_upd_500 = "articles";
  let comment_Comments_upd_500 = "This is a comment";
  let id_Comments_upd_500 = id_Comments_500;
  let item_Comments_upd_500 = "123";
  updateComment(collection_Comments_upd_500, comment_Comments_upd_500, id_Comments_upd_500, item_Comments_upd_500, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Comments
  deleteComment(id_Comments_500, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Fields:linear:3
bthread("crud:Fields:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Fields
  let Sort_Fields_510 = "Sort_Fields_510_" + Math.floor(Math.random()*1000);
  let collection_Fields_510 = "about_us";
  let datatype_Fields_510 = "datatype_Fields_510_" + Math.floor(Math.random()*1000);
  let field_Fields_510 = "id";
  let id_Fields_510 = CollectionsId;
  let length_Fields_510 = Math.floor(Math.random() * 1000);
  let meta_Fields_510 = {};
  let schema_Fields_510 = {};
  let type_Fields_510 = "integer";
  createField(Sort_Fields_510, collection_Fields_510, datatype_Fields_510, field_Fields_510, id_Fields_510, length_Fields_510, meta_Fields_510, schema_Fields_510, type_Fields_510, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Fields
  let Sort_Fields_upd_510 = "Sort_Fields_upd_510_" + Math.floor(Math.random()*1000);
  let collection_Fields_upd_510 = collection_Fields_510;
  let datatype_Fields_upd_510 = "datatype_Fields_upd_510_" + Math.floor(Math.random()*1000);
  let field_Fields_upd_510 = "id";
  let id_Fields_upd_510 = "id_Fields_upd_510_" + Math.floor(Math.random()*1000);
  let length_Fields_upd_510 = "length_Fields_upd_510_" + Math.floor(Math.random()*1000);
  let meta_Fields_upd_510 = {};
  let schema_Fields_upd_510 = {};
  let type_Fields_upd_510 = "integer";
  updateField(Sort_Fields_upd_510, collection_Fields_upd_510, datatype_Fields_upd_510, field_Fields_upd_510, id_Fields_upd_510, length_Fields_upd_510, meta_Fields_upd_510, schema_Fields_upd_510, type_Fields_upd_510, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Fields
  deleteField(collection_Fields_510, id_Fields_510, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Files:linear:3
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
  let filename_download_Files_520 = "avatar.jpg";
  let folder_Files_520 = "folder_Files_520_" + Math.floor(Math.random()*1000);
  let id_Files_520 = "8cbb43fe-4cdf-4991-8352-c461779cec02";
  let tags_Files_520 = "tags_Files_520_" + Math.floor(Math.random()*1000);
  let title_Files_520 = "User Avatar";
  createFile(Fields_Files_520, Filter_Files_520, Limit_Files_520, Meta_Files_520, Offset_Files_520, Search_Files_520, Sort_Files_520, data_Files_520, description_Files_520, filename_download_Files_520, folder_Files_520, id_Files_520, tags_Files_520, title_Files_520, { expectedResponseCodes: [200, 201, 204] });

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
  let filename_download_Files_upd_520 = "avatar.jpg";
  let folder_Files_upd_520 = "folder_Files_upd_520_" + Math.floor(Math.random()*1000);
  let id_Files_upd_520 = id_Files_520;
  let tags_Files_upd_520 = [];
  let title_Files_upd_520 = "User Avatar";
  updateFile(Fields_Files_upd_520, Filter_Files_upd_520, Limit_Files_upd_520, Meta_Files_upd_520, Offset_Files_upd_520, Search_Files_upd_520, Sort_Files_upd_520, data_Files_upd_520, description_Files_upd_520, filename_download_Files_upd_520, folder_Files_upd_520, id_Files_upd_520, tags_Files_upd_520, title_Files_upd_520, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Files
  deleteFile(id_Files_520, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Flows:linear:3
bthread("crud:Flows:linear:3", function () {
  // -> Creating Flows
  let Fields_Flows_530 = "Fields_Flows_530_" + Math.floor(Math.random()*1000);
  let Meta_Flows_530 = "Meta_Flows_530_" + Math.floor(Math.random()*1000);
  let data_Flows_530 = {};
  let id_Flows_530 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  createFlow(Fields_Flows_530, Meta_Flows_530, data_Flows_530, id_Flows_530, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Flows
  let Fields_Flows_upd_530 = "Fields_Flows_upd_530_" + Math.floor(Math.random()*1000);
  let Meta_Flows_upd_530 = "Meta_Flows_upd_530_" + Math.floor(Math.random()*1000);
  let data_Flows_upd_530 = {};
  let id_Flows_upd_530 = id_Flows_530;
  updateFlow(Fields_Flows_upd_530, Meta_Flows_upd_530, data_Flows_upd_530, id_Flows_upd_530, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Flows
  deleteFlow(id_Flows_530, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Folders:linear:3
bthread("crud:Folders:linear:3", function () {
  // -> Creating Folders
  let Fields_Folders_540 = "Fields_Folders_540_" + Math.floor(Math.random()*1000);
  let Filter_Folders_540 = "Filter_Folders_540_" + Math.floor(Math.random()*1000);
  let Limit_Folders_540 = "Limit_Folders_540_" + Math.floor(Math.random()*1000);
  let Meta_Folders_540 = "Meta_Folders_540_" + Math.floor(Math.random()*1000);
  let Offset_Folders_540 = "Offset_Folders_540_" + Math.floor(Math.random()*1000);
  let Search_Folders_540 = "Search_Folders_540_" + Math.floor(Math.random()*1000);
  let Sort_Folders_540 = "Sort_Folders_540_" + Math.floor(Math.random()*1000);
  let id_Folders_540 = "0cf0e03d-4364-45df-b77b-ca61f61869d2";
  let name_Folders_540 = "New York";
  let parent_Folders_540 = Math.floor(Math.random() * 1000);
  createFolder(Fields_Folders_540, Filter_Folders_540, Limit_Folders_540, Meta_Folders_540, Offset_Folders_540, Search_Folders_540, Sort_Folders_540, id_Folders_540, name_Folders_540, parent_Folders_540, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Folders
  let Fields_Folders_upd_540 = "Fields_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Filter_Folders_upd_540 = "Filter_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Limit_Folders_upd_540 = "Limit_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Meta_Folders_upd_540 = "Meta_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Offset_Folders_upd_540 = "Offset_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Search_Folders_upd_540 = "Search_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let Sort_Folders_upd_540 = "Sort_Folders_upd_540_" + Math.floor(Math.random()*1000);
  let id_Folders_upd_540 = id_Folders_540;
  let name_Folders_upd_540 = "New York";
  let parent_Folders_upd_540 = Math.floor(Math.random() * 1000);
  updateFolder(Fields_Folders_upd_540, Filter_Folders_upd_540, Limit_Folders_upd_540, Meta_Folders_upd_540, Offset_Folders_upd_540, Search_Folders_upd_540, Sort_Folders_upd_540, id_Folders_upd_540, name_Folders_upd_540, parent_Folders_upd_540, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Folders
  deleteFolder(id_Folders_540, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Operations:linear:3
bthread("crud:Operations:linear:3", function () {
  // -> Creating Operations
  let Fields_Operations_550 = {};
  let Meta_Operations_550 = {};
  let UUId_Operations_550 = "UUId_Operations_550_" + Math.floor(Math.random()*1000);
  let data_Operations_550 = "data_Operations_550_" + Math.floor(Math.random()*1000);
  let id_Operations_550 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  createOperation(Fields_Operations_550, Meta_Operations_550, UUId_Operations_550, data_Operations_550, id_Operations_550, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Operations
  let Fields_Operations_upd_550 = {};
  let Meta_Operations_upd_550 = {};
  let UUId_Operations_upd_550 = "UUId_Operations_upd_550_" + Math.floor(Math.random()*1000);
  let data_Operations_upd_550 = "data_Operations_upd_550_" + Math.floor(Math.random()*1000);
  let id_Operations_upd_550 = id_Operations_550;
  updateOperation(Fields_Operations_upd_550, Meta_Operations_upd_550, UUId_Operations_upd_550, data_Operations_upd_550, id_Operations_upd_550, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Operations
  deleteOperation(id_Operations_550, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Permissions:linear:3
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
  let Id_Permissions_560 = "Id_Permissions_560_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_560 = "Meta_Permissions_560_" + Math.floor(Math.random()*1000);
  let collection_Permissions_560 = "customers";
  let comment_Permissions_560 = "comment_Permissions_560_" + Math.floor(Math.random()*1000);
  let create_Permissions_560 = "create_Permissions_560_" + Math.floor(Math.random()*1000);
  let _delete_Permissions_560 = "delete_Permissions_560_" + Math.floor(Math.random()*1000);
  let explain_Permissions_560 = "explain_Permissions_560_" + Math.floor(Math.random()*1000);
  let id_Permissions_560 = RolesId;
  let read_Permissions_560 = "read_Permissions_560_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_560 = [];
  let role_Permissions_560 = Math.floor(Math.random() * 1000);
  let status_Permissions_560 = "active";
  let status_blacklist_Permissions_560 = [];
  let update_Permissions_560 = "update_Permissions_560_" + Math.floor(Math.random()*1000);
  let write_field_blacklist_Permissions_560 = [];
  createPermission(Fields_Permissions_560, Id_Permissions_560, Meta_Permissions_560, collection_Permissions_560, comment_Permissions_560, create_Permissions_560, _delete_Permissions_560, explain_Permissions_560, id_Permissions_560, read_Permissions_560, read_field_blacklist_Permissions_560, role_Permissions_560, status_Permissions_560, status_blacklist_Permissions_560, update_Permissions_560, write_field_blacklist_Permissions_560, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Permissions
  let Fields_Permissions_upd_560 = "Fields_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Id_Permissions_upd_560 = "Id_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_upd_560 = "Meta_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let collection_Permissions_upd_560 = {};
  let comment_Permissions_upd_560 = "comment_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let create_Permissions_upd_560 = "create_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let _delete_Permissions_upd_560 = "delete_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let explain_Permissions_upd_560 = "explain_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let id_Permissions_upd_560 = id_Permissions_560;
  let read_Permissions_upd_560 = "read_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_upd_560 = {};
  let role_Permissions_upd_560 = {};
  let status_Permissions_upd_560 = {};
  let status_blacklist_Permissions_upd_560 = {};
  let update_Permissions_upd_560 = "update_Permissions_upd_560_" + Math.floor(Math.random()*1000);
  let write_field_blacklist_Permissions_upd_560 = {};
  updatePermission(Fields_Permissions_upd_560, Id_Permissions_upd_560, Meta_Permissions_upd_560, collection_Permissions_upd_560, comment_Permissions_upd_560, create_Permissions_upd_560, _delete_Permissions_upd_560, explain_Permissions_upd_560, id_Permissions_upd_560, read_Permissions_upd_560, read_field_blacklist_Permissions_upd_560, role_Permissions_upd_560, status_Permissions_upd_560, status_blacklist_Permissions_upd_560, update_Permissions_upd_560, write_field_blacklist_Permissions_upd_560, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Permissions
  deletePermission(id_Permissions_560, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Relations:linear:3
bthread("crud:Relations:linear:3", function () {
  let deps = {};
  deps["Collections"] = matchAnyCollectionsAdded();
  let pkMap = {"Collections": "id"};
  let captured = resolveDependencies(deps, pkMap);
  let CollectionsId = captured["Collections"];
  // -> Creating Relations
  let Fields_Relations_570 = "Fields_Relations_570_" + Math.floor(Math.random()*1000);
  let Filter_Relations_570 = "Filter_Relations_570_" + Math.floor(Math.random()*1000);
  let Id_Relations_570 = "Id_Relations_570_" + Math.floor(Math.random()*1000);
  let Limit_Relations_570 = "Limit_Relations_570_" + Math.floor(Math.random()*1000);
  let Meta_Relations_570 = "Meta_Relations_570_" + Math.floor(Math.random()*1000);
  let Offset_Relations_570 = "Offset_Relations_570_" + Math.floor(Math.random()*1000);
  let Page_Relations_570 = "Page_Relations_570_" + Math.floor(Math.random()*1000);
  let Search_Relations_570 = "Search_Relations_570_" + Math.floor(Math.random()*1000);
  let Sort_Relations_570 = "Sort_Relations_570_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_570 = "collection_many_Relations_570_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_570 = "collection_one_Relations_570_" + Math.floor(Math.random()*1000);
  let field_many_Relations_570 = "field_many_Relations_570_" + Math.floor(Math.random()*1000);
  let field_one_Relations_570 = "field_one_Relations_570_" + Math.floor(Math.random()*1000);
  let id_Relations_570 = CollectionsId;
  let junction_field_Relations_570 = "junction_field_Relations_570_" + Math.floor(Math.random()*1000);
  createRelation(Fields_Relations_570, Filter_Relations_570, Id_Relations_570, Limit_Relations_570, Meta_Relations_570, Offset_Relations_570, Page_Relations_570, Search_Relations_570, Sort_Relations_570, collection_many_Relations_570, collection_one_Relations_570, field_many_Relations_570, field_one_Relations_570, id_Relations_570, junction_field_Relations_570, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Relations
  let Fields_Relations_upd_570 = "Fields_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Filter_Relations_upd_570 = "Filter_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Id_Relations_upd_570 = "Id_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Limit_Relations_upd_570 = "Limit_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Meta_Relations_upd_570 = "Meta_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Offset_Relations_upd_570 = "Offset_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Page_Relations_upd_570 = "Page_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Search_Relations_upd_570 = "Search_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let Sort_Relations_upd_570 = "Sort_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_upd_570 = "collection_many_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_upd_570 = "collection_one_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let field_many_Relations_upd_570 = "field_many_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let field_one_Relations_upd_570 = "field_one_Relations_upd_570_" + Math.floor(Math.random()*1000);
  let id_Relations_upd_570 = id_Relations_570;
  let junction_field_Relations_upd_570 = "junction_field_Relations_upd_570_" + Math.floor(Math.random()*1000);
  updateRelation(Fields_Relations_upd_570, Filter_Relations_upd_570, Id_Relations_upd_570, Limit_Relations_upd_570, Meta_Relations_upd_570, Offset_Relations_upd_570, Page_Relations_upd_570, Search_Relations_upd_570, Sort_Relations_upd_570, collection_many_Relations_upd_570, collection_one_Relations_upd_570, field_many_Relations_upd_570, field_one_Relations_upd_570, id_Relations_upd_570, junction_field_Relations_upd_570, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Relations
  deleteRelation(id_Relations_570, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Roles:linear:3
bthread("crud:Roles:linear:3", function () {
  // -> Creating Roles
  let Fields_Roles_580 = "Fields_Roles_580_" + Math.floor(Math.random()*1000);
  let Filter_Roles_580 = "Filter_Roles_580_" + Math.floor(Math.random()*1000);
  let Limit_Roles_580 = "Limit_Roles_580_" + Math.floor(Math.random()*1000);
  let Meta_Roles_580 = "Meta_Roles_580_" + Math.floor(Math.random()*1000);
  let Offset_Roles_580 = "Offset_Roles_580_" + Math.floor(Math.random()*1000);
  let Page_Roles_580 = "Page_Roles_580_" + Math.floor(Math.random()*1000);
  let Search_Roles_580 = "Search_Roles_580_" + Math.floor(Math.random()*1000);
  let Sort_Roles_580 = "Sort_Roles_580_" + Math.floor(Math.random()*1000);
  let description_Roles_580 = "Admins have access to all managed data within the system by default";
  let enforce_tfa_Roles_580 = true;
  let external_id_Roles_580 = "external_id_Roles_580_" + Math.floor(Math.random()*1000);
  let id_Roles_580 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  let ip_access_Roles_580 = [];
  let module_listing_Roles_580 = "module_listing_Roles_580_" + Math.floor(Math.random()*1000);
  let name_Roles_580 = "Administrator";
  createRole(Fields_Roles_580, Filter_Roles_580, Limit_Roles_580, Meta_Roles_580, Offset_Roles_580, Page_Roles_580, Search_Roles_580, Sort_Roles_580, description_Roles_580, enforce_tfa_Roles_580, external_id_Roles_580, id_Roles_580, ip_access_Roles_580, module_listing_Roles_580, name_Roles_580, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Roles
  let Fields_Roles_upd_580 = "Fields_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Filter_Roles_upd_580 = "Filter_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Limit_Roles_upd_580 = "Limit_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Meta_Roles_upd_580 = "Meta_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Offset_Roles_upd_580 = "Offset_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Page_Roles_upd_580 = "Page_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Search_Roles_upd_580 = "Search_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let Sort_Roles_upd_580 = "Sort_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let description_Roles_upd_580 = "Admins have access to all managed data within the system by default";
  let enforce_tfa_Roles_upd_580 = true;
  let external_id_Roles_upd_580 = "external_id_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let id_Roles_upd_580 = id_Roles_580;
  let ip_access_Roles_upd_580 = [];
  let module_listing_Roles_upd_580 = "module_listing_Roles_upd_580_" + Math.floor(Math.random()*1000);
  let name_Roles_upd_580 = "Administrator";
  updateRole(Fields_Roles_upd_580, Filter_Roles_upd_580, Limit_Roles_upd_580, Meta_Roles_upd_580, Offset_Roles_upd_580, Page_Roles_upd_580, Search_Roles_upd_580, Sort_Roles_upd_580, description_Roles_upd_580, enforce_tfa_Roles_upd_580, external_id_Roles_upd_580, id_Roles_upd_580, ip_access_Roles_upd_580, module_listing_Roles_upd_580, name_Roles_upd_580, { expectedResponseCodes: [200, 201, 204] });

  // Skip delete for Roles to prevent foreign key errors (has active dependents)
});

// Story: crud:Schema:linear:3
bthread("crud:Schema:linear:3", function () {
  // -> Creating Schema
  let Export_Schema_590 = "Export_Schema_590_" + Math.floor(Math.random()*1000);
  let data_Schema_590 = "data_Schema_590_" + Math.floor(Math.random()*1000);
  let force_Schema_590 = true;
  let id_Schema_590 = "id_Schema_590_" + Math.floor(Math.random()*1000);
  schemaDiff(Export_Schema_590, data_Schema_590, force_Schema_590, id_Schema_590, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  // -> Creating Users
  let Fields_Users_600 = "Fields_Users_600_" + Math.floor(Math.random()*1000);
  let Filter_Users_600 = "Filter_Users_600_" + Math.floor(Math.random()*1000);
  let Limit_Users_600 = "Limit_Users_600_" + Math.floor(Math.random()*1000);
  let Meta_Users_600 = "Meta_Users_600_" + Math.floor(Math.random()*1000);
  let Offset_Users_600 = "Offset_Users_600_" + Math.floor(Math.random()*1000);
  let Search_Users_600 = "Search_Users_600_" + Math.floor(Math.random()*1000);
  let Sort_Users_600 = "Sort_Users_600_" + Math.floor(Math.random()*1000);
  let UUId_Users_600 = "UUId_Users_600_" + Math.floor(Math.random()*1000);
  let id_Users_600 = "63716273-0f29-4648-8a2a-2af2948f6f78";
  let last_page_Users_600 = "/my-project/settings/collections/a";
  let password_Users_600 = "password_Users_600_" + Math.floor(Math.random()*1000);
  let token_Users_600 = "token_Users_600_" + Math.floor(Math.random()*1000);
  acceptInvite(Fields_Users_600, Filter_Users_600, Limit_Users_600, Meta_Users_600, Offset_Users_600, Search_Users_600, Sort_Users_600, UUId_Users_600, id_Users_600, last_page_Users_600, password_Users_600, token_Users_600, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Users
  let Fields_Users_upd_600 = "Fields_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Filter_Users_upd_600 = "Filter_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Limit_Users_upd_600 = "Limit_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Meta_Users_upd_600 = "Meta_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Offset_Users_upd_600 = "Offset_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Search_Users_upd_600 = "Search_Users_upd_600_" + Math.floor(Math.random()*1000);
  let Sort_Users_upd_600 = "Sort_Users_upd_600_" + Math.floor(Math.random()*1000);
  let UUId_Users_upd_600 = "UUId_Users_upd_600_" + Math.floor(Math.random()*1000);
  let id_Users_upd_600 = id_Users_600;
  let last_page_Users_upd_600 = "/my-project/settings/collections/a";
  let password_Users_upd_600 = "password_Users_upd_600_" + Math.floor(Math.random()*1000);
  let token_Users_upd_600 = "token_Users_upd_600_" + Math.floor(Math.random()*1000);
  updateMe(Fields_Users_upd_600, Filter_Users_upd_600, Limit_Users_upd_600, Meta_Users_upd_600, Offset_Users_upd_600, Search_Users_upd_600, Sort_Users_upd_600, UUId_Users_upd_600, id_Users_upd_600, last_page_Users_upd_600, password_Users_upd_600, token_Users_upd_600, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Users
  deleteUser(id_Users_600, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Utilities:linear:3
bthread("crud:Utilities:linear:3", function () {
  // -> Creating Utilities
  let id_Utilities_610 = "id_Utilities_610_" + Math.floor(Math.random()*1000);
  let length_Utilities_610 = "length_Utilities_610_" + Math.floor(Math.random()*1000);
  clearCache(id_Utilities_610, length_Utilities_610, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Versions:linear:3
bthread("crud:Versions:linear:3", function () {
  // -> Creating Versions
  let Fields_Versions_620 = "Fields_Versions_620_" + Math.floor(Math.random()*1000);
  let Filter_Versions_620 = "Filter_Versions_620_" + Math.floor(Math.random()*1000);
  let Limit_Versions_620 = "Limit_Versions_620_" + Math.floor(Math.random()*1000);
  let Meta_Versions_620 = "Meta_Versions_620_" + Math.floor(Math.random()*1000);
  let Offset_Versions_620 = "Offset_Versions_620_" + Math.floor(Math.random()*1000);
  let Search_Versions_620 = "Search_Versions_620_" + Math.floor(Math.random()*1000);
  let Sort_Versions_620 = "Sort_Versions_620_" + Math.floor(Math.random()*1000);
  let UUId_Versions_620 = "UUId_Versions_620_" + Math.floor(Math.random()*1000);
  let data_Versions_620 = "data_Versions_620_" + Math.floor(Math.random()*1000);
  let fields_Versions_620 = "fields_Versions_620_" + Math.floor(Math.random()*1000);
  let id_Versions_620 = "63716273-0f29-4648-8a2a-2af2948f6f78";
  let mainHash_Versions_620 = "mainHash_Versions_620_" + Math.floor(Math.random()*1000);
  promoteContentVersion(Fields_Versions_620, Filter_Versions_620, Limit_Versions_620, Meta_Versions_620, Offset_Versions_620, Search_Versions_620, Sort_Versions_620, UUId_Versions_620, data_Versions_620, fields_Versions_620, id_Versions_620, mainHash_Versions_620, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Versions
  let Fields_Versions_upd_620 = "Fields_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Filter_Versions_upd_620 = "Filter_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Limit_Versions_upd_620 = "Limit_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Meta_Versions_upd_620 = "Meta_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Offset_Versions_upd_620 = "Offset_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Search_Versions_upd_620 = "Search_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let Sort_Versions_upd_620 = "Sort_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let UUId_Versions_upd_620 = "UUId_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let data_Versions_upd_620 = "data_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let fields_Versions_upd_620 = "fields_Versions_upd_620_" + Math.floor(Math.random()*1000);
  let id_Versions_upd_620 = id_Versions_620;
  let mainHash_Versions_upd_620 = "mainHash_Versions_upd_620_" + Math.floor(Math.random()*1000);
  updateContentVersion(Fields_Versions_upd_620, Filter_Versions_upd_620, Limit_Versions_upd_620, Meta_Versions_upd_620, Offset_Versions_upd_620, Search_Versions_upd_620, Sort_Versions_upd_620, UUId_Versions_upd_620, data_Versions_upd_620, fields_Versions_upd_620, id_Versions_upd_620, mainHash_Versions_upd_620, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Versions
  deleteContentVersion(id_Versions_620, { expectedResponseCodes: [200, 201, 204] });

});

// Story: crud:Webhooks:linear:3
bthread("crud:Webhooks:linear:3", function () {
  // -> Creating Webhooks
  let actions_Webhooks_630 = "actions_Webhooks_630_" + Math.floor(Math.random()*1000);
  let data_Webhooks_630 = true;
  let id_Webhooks_630 = "1";
  let method_Webhooks_630 = "POST";
  let name_Webhooks_630 = "create articles";
  let status_Webhooks_630 = "inactive";
  let system_collections_Webhooks_630 = "system-collections_Webhooks_630_" + Math.floor(Math.random()*1000);
  let url_Webhooks_630 = "url_Webhooks_630_" + Math.floor(Math.random()*1000);
  createWebhook(actions_Webhooks_630, data_Webhooks_630, id_Webhooks_630, method_Webhooks_630, name_Webhooks_630, status_Webhooks_630, system_collections_Webhooks_630, url_Webhooks_630, { expectedResponseCodes: [200, 201, 204] });

  // -> Updating Webhooks
  let actions_Webhooks_upd_630 = "actions_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  let data_Webhooks_upd_630 = true;
  let id_Webhooks_upd_630 = id_Webhooks_630;
  let method_Webhooks_upd_630 = "POST";
  let name_Webhooks_upd_630 = "create articles";
  let status_Webhooks_upd_630 = "inactive";
  let system_collections_Webhooks_upd_630 = "system-collections_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  let url_Webhooks_upd_630 = "url_Webhooks_upd_630_" + Math.floor(Math.random()*1000);
  updateWebhook(actions_Webhooks_upd_630, data_Webhooks_upd_630, id_Webhooks_upd_630, method_Webhooks_upd_630, name_Webhooks_upd_630, status_Webhooks_upd_630, system_collections_Webhooks_upd_630, url_Webhooks_upd_630, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Webhooks
  deleteWebhook(id_Webhooks_630, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Collections_Items_Comments (Self-Contained)
bthread("chain:Collections_Items_Comments", function () {
  // -> Creating Collections
  let Meta_Collections_640 = "Meta_Collections_640_" + Math.floor(Math.random()*1000);
  let Offset_Collections_640 = "Offset_Collections_640_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_640 = "archive_app_filter_Collections_640_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_640 = "archive_field_Collections_640_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_640 = "archive_value_Collections_640_" + Math.floor(Math.random()*1000);
  let collection_Collections_640 = "customers";
  let display_template_Collections_640 = "display_template_Collections_640_" + Math.floor(Math.random()*1000);
  let fields_Collections_640 = [];
  let hidden_Collections_640 = true;
  let icon_Collections_640 = "icon_Collections_640_" + Math.floor(Math.random()*1000);
  let id_Collections_640 = "id_Collections_640_" + Math.floor(Math.random()*1000);
  let meta_Collections_640 = "meta_Collections_640_" + Math.floor(Math.random()*1000);
  let note_Collections_640 = "note_Collections_640_" + Math.floor(Math.random()*1000);
  let singleton_Collections_640 = true;
  let sort_field_Collections_640 = "sort_field_Collections_640_" + Math.floor(Math.random()*1000);
  let translation_Collections_640 = "translation_Collections_640_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_640 = "unarchive_value_Collections_640_" + Math.floor(Math.random()*1000);
  let versioning_Collections_640 = true;
  createCollection(Meta_Collections_640, Offset_Collections_640, archive_app_filter_Collections_640, archive_field_Collections_640, archive_value_Collections_640, collection_Collections_640, display_template_Collections_640, fields_Collections_640, hidden_Collections_640, icon_Collections_640, id_Collections_640, meta_Collections_640, note_Collections_640, singleton_Collections_640, sort_field_Collections_640, translation_Collections_640, unarchive_value_Collections_640, versioning_Collections_640, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Items
  let Collection_Items_640 = "Collection_Items_640_" + Math.floor(Math.random()*1000);
  let Fields_Items_640 = "Fields_Items_640_" + Math.floor(Math.random()*1000);
  let Filter_Items_640 = "Filter_Items_640_" + Math.floor(Math.random()*1000);
  let Limit_Items_640 = "Limit_Items_640_" + Math.floor(Math.random()*1000);
  let Meta_Items_640 = "Meta_Items_640_" + Math.floor(Math.random()*1000);
  let Offset_Items_640 = "Offset_Items_640_" + Math.floor(Math.random()*1000);
  let Search_Items_640 = "Search_Items_640_" + Math.floor(Math.random()*1000);
  let Sort_Items_640 = "Sort_Items_640_" + Math.floor(Math.random()*1000);
  let collection_Items_640 = "collection_Items_640_" + Math.floor(Math.random()*1000);
  createItem(Collection_Items_640, Fields_Items_640, Filter_Items_640, Limit_Items_640, Meta_Items_640, Offset_Items_640, Search_Items_640, Sort_Items_640, collection_Items_640, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Comments
  let collection_Comments_640 = collection_Items_640;
  let comment_Comments_640 = "This is a comment";
  let id_Comments_640 = id_Collections_640;
  let item_Comments_640 = "123";
  createComment(collection_Comments_640, comment_Comments_640, id_Comments_640, item_Comments_640, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Comments
  deleteComment(id_Comments_640, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Items
  deleteItems(collection_Items_640, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collections
  deleteCollection(id_Collections_640, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Collections_Comments (Self-Contained)
bthread("chain:Collections_Comments", function () {
  // -> Creating Collections
  let Meta_Collections_740 = "Meta_Collections_740_" + Math.floor(Math.random()*1000);
  let Offset_Collections_740 = "Offset_Collections_740_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_740 = "archive_app_filter_Collections_740_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_740 = "archive_field_Collections_740_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_740 = "archive_value_Collections_740_" + Math.floor(Math.random()*1000);
  let collection_Collections_740 = "customers";
  let display_template_Collections_740 = "display_template_Collections_740_" + Math.floor(Math.random()*1000);
  let fields_Collections_740 = [];
  let hidden_Collections_740 = true;
  let icon_Collections_740 = "icon_Collections_740_" + Math.floor(Math.random()*1000);
  let id_Collections_740 = "id_Collections_740_" + Math.floor(Math.random()*1000);
  let meta_Collections_740 = "meta_Collections_740_" + Math.floor(Math.random()*1000);
  let note_Collections_740 = "note_Collections_740_" + Math.floor(Math.random()*1000);
  let singleton_Collections_740 = true;
  let sort_field_Collections_740 = "sort_field_Collections_740_" + Math.floor(Math.random()*1000);
  let translation_Collections_740 = "translation_Collections_740_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_740 = "unarchive_value_Collections_740_" + Math.floor(Math.random()*1000);
  let versioning_Collections_740 = true;
  createCollection(Meta_Collections_740, Offset_Collections_740, archive_app_filter_Collections_740, archive_field_Collections_740, archive_value_Collections_740, collection_Collections_740, display_template_Collections_740, fields_Collections_740, hidden_Collections_740, icon_Collections_740, id_Collections_740, meta_Collections_740, note_Collections_740, singleton_Collections_740, sort_field_Collections_740, translation_Collections_740, unarchive_value_Collections_740, versioning_Collections_740, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Items
  let Collection_Items_740 = "Collection_Items_740_" + Math.floor(Math.random()*1000);
  let Fields_Items_740 = "Fields_Items_740_" + Math.floor(Math.random()*1000);
  let Filter_Items_740 = "Filter_Items_740_" + Math.floor(Math.random()*1000);
  let Limit_Items_740 = "Limit_Items_740_" + Math.floor(Math.random()*1000);
  let Meta_Items_740 = "Meta_Items_740_" + Math.floor(Math.random()*1000);
  let Offset_Items_740 = "Offset_Items_740_" + Math.floor(Math.random()*1000);
  let Search_Items_740 = "Search_Items_740_" + Math.floor(Math.random()*1000);
  let Sort_Items_740 = "Sort_Items_740_" + Math.floor(Math.random()*1000);
  let collection_Items_740 = "collection_Items_740_" + Math.floor(Math.random()*1000);
  createItem(Collection_Items_740, Fields_Items_740, Filter_Items_740, Limit_Items_740, Meta_Items_740, Offset_Items_740, Search_Items_740, Sort_Items_740, collection_Items_740, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Comments
  let collection_Comments_740 = collection_Items_740;
  let comment_Comments_740 = "This is a comment";
  let id_Comments_740 = id_Collections_740;
  let item_Comments_740 = "123";
  createComment(collection_Comments_740, comment_Comments_740, id_Comments_740, item_Comments_740, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Comments
  deleteComment(id_Comments_740, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collections
  deleteCollection(id_Collections_740, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Collections_Fields (Self-Contained)
bthread("chain:Collections_Fields", function () {
  // -> Creating Collections
  let Meta_Collections_840 = "Meta_Collections_840_" + Math.floor(Math.random()*1000);
  let Offset_Collections_840 = "Offset_Collections_840_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_840 = "archive_app_filter_Collections_840_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_840 = "archive_field_Collections_840_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_840 = "archive_value_Collections_840_" + Math.floor(Math.random()*1000);
  let collection_Collections_840 = "customers";
  let display_template_Collections_840 = "display_template_Collections_840_" + Math.floor(Math.random()*1000);
  let fields_Collections_840 = [];
  let hidden_Collections_840 = true;
  let icon_Collections_840 = "icon_Collections_840_" + Math.floor(Math.random()*1000);
  let id_Collections_840 = "id_Collections_840_" + Math.floor(Math.random()*1000);
  let meta_Collections_840 = "meta_Collections_840_" + Math.floor(Math.random()*1000);
  let note_Collections_840 = "note_Collections_840_" + Math.floor(Math.random()*1000);
  let singleton_Collections_840 = true;
  let sort_field_Collections_840 = "sort_field_Collections_840_" + Math.floor(Math.random()*1000);
  let translation_Collections_840 = "translation_Collections_840_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_840 = "unarchive_value_Collections_840_" + Math.floor(Math.random()*1000);
  let versioning_Collections_840 = true;
  createCollection(Meta_Collections_840, Offset_Collections_840, archive_app_filter_Collections_840, archive_field_Collections_840, archive_value_Collections_840, collection_Collections_840, display_template_Collections_840, fields_Collections_840, hidden_Collections_840, icon_Collections_840, id_Collections_840, meta_Collections_840, note_Collections_840, singleton_Collections_840, sort_field_Collections_840, translation_Collections_840, unarchive_value_Collections_840, versioning_Collections_840, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Fields
  let Sort_Fields_840 = "Sort_Fields_840_" + Math.floor(Math.random()*1000);
  let collection_Fields_840 = "about_us";
  let datatype_Fields_840 = "datatype_Fields_840_" + Math.floor(Math.random()*1000);
  let field_Fields_840 = "id";
  let id_Fields_840 = id_Collections_840;
  let length_Fields_840 = Math.floor(Math.random() * 1000);
  let meta_Fields_840 = {};
  let schema_Fields_840 = {};
  let type_Fields_840 = "integer";
  createField(Sort_Fields_840, collection_Fields_840, datatype_Fields_840, field_Fields_840, id_Fields_840, length_Fields_840, meta_Fields_840, schema_Fields_840, type_Fields_840, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Fields
  deleteField(collection_Fields_840, id_Fields_840, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collections
  deleteCollection(id_Collections_840, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Collections_Presets (Self-Contained)
bthread("chain:Collections_Presets", function () {
  // -> Creating Collections
  let Meta_Collections_940 = "Meta_Collections_940_" + Math.floor(Math.random()*1000);
  let Offset_Collections_940 = "Offset_Collections_940_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_940 = "archive_app_filter_Collections_940_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_940 = "archive_field_Collections_940_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_940 = "archive_value_Collections_940_" + Math.floor(Math.random()*1000);
  let collection_Collections_940 = "customers";
  let display_template_Collections_940 = "display_template_Collections_940_" + Math.floor(Math.random()*1000);
  let fields_Collections_940 = [];
  let hidden_Collections_940 = true;
  let icon_Collections_940 = "icon_Collections_940_" + Math.floor(Math.random()*1000);
  let id_Collections_940 = "id_Collections_940_" + Math.floor(Math.random()*1000);
  let meta_Collections_940 = "meta_Collections_940_" + Math.floor(Math.random()*1000);
  let note_Collections_940 = "note_Collections_940_" + Math.floor(Math.random()*1000);
  let singleton_Collections_940 = true;
  let sort_field_Collections_940 = "sort_field_Collections_940_" + Math.floor(Math.random()*1000);
  let translation_Collections_940 = "translation_Collections_940_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_940 = "unarchive_value_Collections_940_" + Math.floor(Math.random()*1000);
  let versioning_Collections_940 = true;
  createCollection(Meta_Collections_940, Offset_Collections_940, archive_app_filter_Collections_940, archive_field_Collections_940, archive_value_Collections_940, collection_Collections_940, display_template_Collections_940, fields_Collections_940, hidden_Collections_940, icon_Collections_940, id_Collections_940, meta_Collections_940, note_Collections_940, singleton_Collections_940, sort_field_Collections_940, translation_Collections_940, unarchive_value_Collections_940, versioning_Collections_940, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Presets
  let Fields_Presets_940 = "Fields_Presets_940_" + Math.floor(Math.random()*1000);
  let Filter_Presets_940 = "Filter_Presets_940_" + Math.floor(Math.random()*1000);
  let Id_Presets_940 = "Id_Presets_940_" + Math.floor(Math.random()*1000);
  let Limit_Presets_940 = "Limit_Presets_940_" + Math.floor(Math.random()*1000);
  let Meta_Presets_940 = "Meta_Presets_940_" + Math.floor(Math.random()*1000);
  let Offset_Presets_940 = "Offset_Presets_940_" + Math.floor(Math.random()*1000);
  let Page_Presets_940 = "Page_Presets_940_" + Math.floor(Math.random()*1000);
  let Search_Presets_940 = "Search_Presets_940_" + Math.floor(Math.random()*1000);
  let Sort_Presets_940 = "Sort_Presets_940_" + Math.floor(Math.random()*1000);
  let collection_Presets_940 = "articles";
  let filters_Presets_940 = [];
  let id_Presets_940 = id_Collections_940;
  let layout_Presets_940 = "layout_Presets_940_" + Math.floor(Math.random()*1000);
  let layout_options_Presets_940 = "{'cards': {'icon': 'account_circle', 'title': '{{ first_name }} {{ last_name }}', 'subtitle': '{{ title }}', 'size': 3}}";
  let layout_query_Presets_940 = "{'cards': {'sort': '-published_on'}}";
  let role_Presets_940 = "50419801-0f30-8644-2b3c-9bc2d980d0a0";
  let search_Presets_940 = "search_Presets_940_" + Math.floor(Math.random()*1000);
  let search_query_Presets_940 = "search_query_Presets_940_" + Math.floor(Math.random()*1000);
  let title_Presets_940 = "title_Presets_940_" + Math.floor(Math.random()*1000);
  let translation_Presets_940 = "translation_Presets_940_" + Math.floor(Math.random()*1000);
  let view_options_Presets_940 = "view_options_Presets_940_" + Math.floor(Math.random()*1000);
  let view_query_Presets_940 = "view_query_Presets_940_" + Math.floor(Math.random()*1000);
  let view_type_Presets_940 = "view_type_Presets_940_" + Math.floor(Math.random()*1000);
  createPreset(Fields_Presets_940, Filter_Presets_940, Id_Presets_940, Limit_Presets_940, Meta_Presets_940, Offset_Presets_940, Page_Presets_940, Search_Presets_940, Sort_Presets_940, collection_Presets_940, filters_Presets_940, id_Presets_940, layout_Presets_940, layout_options_Presets_940, layout_query_Presets_940, role_Presets_940, search_Presets_940, search_query_Presets_940, title_Presets_940, translation_Presets_940, view_options_Presets_940, view_query_Presets_940, view_type_Presets_940, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Presets
  deletePreset(id_Presets_940, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collections
  deleteCollection(id_Collections_940, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Collections_Permissions (Self-Contained)
bthread("chain:Collections_Permissions", function () {
  // -> Creating Collections
  let Meta_Collections_1040 = "Meta_Collections_1040_" + Math.floor(Math.random()*1000);
  let Offset_Collections_1040 = "Offset_Collections_1040_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_1040 = "archive_app_filter_Collections_1040_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_1040 = "archive_field_Collections_1040_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_1040 = "archive_value_Collections_1040_" + Math.floor(Math.random()*1000);
  let collection_Collections_1040 = "customers";
  let display_template_Collections_1040 = "display_template_Collections_1040_" + Math.floor(Math.random()*1000);
  let fields_Collections_1040 = [];
  let hidden_Collections_1040 = true;
  let icon_Collections_1040 = "icon_Collections_1040_" + Math.floor(Math.random()*1000);
  let id_Collections_1040 = "id_Collections_1040_" + Math.floor(Math.random()*1000);
  let meta_Collections_1040 = "meta_Collections_1040_" + Math.floor(Math.random()*1000);
  let note_Collections_1040 = "note_Collections_1040_" + Math.floor(Math.random()*1000);
  let singleton_Collections_1040 = true;
  let sort_field_Collections_1040 = "sort_field_Collections_1040_" + Math.floor(Math.random()*1000);
  let translation_Collections_1040 = "translation_Collections_1040_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_1040 = "unarchive_value_Collections_1040_" + Math.floor(Math.random()*1000);
  let versioning_Collections_1040 = true;
  createCollection(Meta_Collections_1040, Offset_Collections_1040, archive_app_filter_Collections_1040, archive_field_Collections_1040, archive_value_Collections_1040, collection_Collections_1040, display_template_Collections_1040, fields_Collections_1040, hidden_Collections_1040, icon_Collections_1040, id_Collections_1040, meta_Collections_1040, note_Collections_1040, singleton_Collections_1040, sort_field_Collections_1040, translation_Collections_1040, unarchive_value_Collections_1040, versioning_Collections_1040, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Roles
  let Fields_Roles_1040 = "Fields_Roles_1040_" + Math.floor(Math.random()*1000);
  let Filter_Roles_1040 = "Filter_Roles_1040_" + Math.floor(Math.random()*1000);
  let Limit_Roles_1040 = "Limit_Roles_1040_" + Math.floor(Math.random()*1000);
  let Meta_Roles_1040 = "Meta_Roles_1040_" + Math.floor(Math.random()*1000);
  let Offset_Roles_1040 = "Offset_Roles_1040_" + Math.floor(Math.random()*1000);
  let Page_Roles_1040 = "Page_Roles_1040_" + Math.floor(Math.random()*1000);
  let Search_Roles_1040 = "Search_Roles_1040_" + Math.floor(Math.random()*1000);
  let Sort_Roles_1040 = "Sort_Roles_1040_" + Math.floor(Math.random()*1000);
  let description_Roles_1040 = "Admins have access to all managed data within the system by default";
  let enforce_tfa_Roles_1040 = true;
  let external_id_Roles_1040 = "external_id_Roles_1040_" + Math.floor(Math.random()*1000);
  let id_Roles_1040 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  let ip_access_Roles_1040 = [];
  let module_listing_Roles_1040 = "module_listing_Roles_1040_" + Math.floor(Math.random()*1000);
  let name_Roles_1040 = "Administrator";
  createRole(Fields_Roles_1040, Filter_Roles_1040, Limit_Roles_1040, Meta_Roles_1040, Offset_Roles_1040, Page_Roles_1040, Search_Roles_1040, Sort_Roles_1040, description_Roles_1040, enforce_tfa_Roles_1040, external_id_Roles_1040, id_Roles_1040, ip_access_Roles_1040, module_listing_Roles_1040, name_Roles_1040, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Permissions
  let Fields_Permissions_1040 = "Fields_Permissions_1040_" + Math.floor(Math.random()*1000);
  let Id_Permissions_1040 = "Id_Permissions_1040_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_1040 = "Meta_Permissions_1040_" + Math.floor(Math.random()*1000);
  let collection_Permissions_1040 = "customers";
  let comment_Permissions_1040 = "comment_Permissions_1040_" + Math.floor(Math.random()*1000);
  let create_Permissions_1040 = "create_Permissions_1040_" + Math.floor(Math.random()*1000);
  let _delete_Permissions_1040 = "delete_Permissions_1040_" + Math.floor(Math.random()*1000);
  let explain_Permissions_1040 = "explain_Permissions_1040_" + Math.floor(Math.random()*1000);
  let id_Permissions_1040 = id_Roles_1040;
  let read_Permissions_1040 = "read_Permissions_1040_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_1040 = [];
  let role_Permissions_1040 = Math.floor(Math.random() * 1000);
  let status_Permissions_1040 = "active";
  let status_blacklist_Permissions_1040 = [];
  let update_Permissions_1040 = "update_Permissions_1040_" + Math.floor(Math.random()*1000);
  let write_field_blacklist_Permissions_1040 = [];
  createPermission(Fields_Permissions_1040, Id_Permissions_1040, Meta_Permissions_1040, collection_Permissions_1040, comment_Permissions_1040, create_Permissions_1040, _delete_Permissions_1040, explain_Permissions_1040, id_Permissions_1040, read_Permissions_1040, read_field_blacklist_Permissions_1040, role_Permissions_1040, status_Permissions_1040, status_blacklist_Permissions_1040, update_Permissions_1040, write_field_blacklist_Permissions_1040, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Permissions
  deletePermission(id_Permissions_1040, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collections
  deleteCollection(id_Collections_1040, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Collections_Relations (Self-Contained)
bthread("chain:Collections_Relations", function () {
  // -> Creating Collections
  let Meta_Collections_1140 = "Meta_Collections_1140_" + Math.floor(Math.random()*1000);
  let Offset_Collections_1140 = "Offset_Collections_1140_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_1140 = "archive_app_filter_Collections_1140_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_1140 = "archive_field_Collections_1140_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_1140 = "archive_value_Collections_1140_" + Math.floor(Math.random()*1000);
  let collection_Collections_1140 = "customers";
  let display_template_Collections_1140 = "display_template_Collections_1140_" + Math.floor(Math.random()*1000);
  let fields_Collections_1140 = [];
  let hidden_Collections_1140 = true;
  let icon_Collections_1140 = "icon_Collections_1140_" + Math.floor(Math.random()*1000);
  let id_Collections_1140 = "id_Collections_1140_" + Math.floor(Math.random()*1000);
  let meta_Collections_1140 = "meta_Collections_1140_" + Math.floor(Math.random()*1000);
  let note_Collections_1140 = "note_Collections_1140_" + Math.floor(Math.random()*1000);
  let singleton_Collections_1140 = true;
  let sort_field_Collections_1140 = "sort_field_Collections_1140_" + Math.floor(Math.random()*1000);
  let translation_Collections_1140 = "translation_Collections_1140_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_1140 = "unarchive_value_Collections_1140_" + Math.floor(Math.random()*1000);
  let versioning_Collections_1140 = true;
  createCollection(Meta_Collections_1140, Offset_Collections_1140, archive_app_filter_Collections_1140, archive_field_Collections_1140, archive_value_Collections_1140, collection_Collections_1140, display_template_Collections_1140, fields_Collections_1140, hidden_Collections_1140, icon_Collections_1140, id_Collections_1140, meta_Collections_1140, note_Collections_1140, singleton_Collections_1140, sort_field_Collections_1140, translation_Collections_1140, unarchive_value_Collections_1140, versioning_Collections_1140, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Relations
  let Fields_Relations_1140 = "Fields_Relations_1140_" + Math.floor(Math.random()*1000);
  let Filter_Relations_1140 = "Filter_Relations_1140_" + Math.floor(Math.random()*1000);
  let Id_Relations_1140 = "Id_Relations_1140_" + Math.floor(Math.random()*1000);
  let Limit_Relations_1140 = "Limit_Relations_1140_" + Math.floor(Math.random()*1000);
  let Meta_Relations_1140 = "Meta_Relations_1140_" + Math.floor(Math.random()*1000);
  let Offset_Relations_1140 = "Offset_Relations_1140_" + Math.floor(Math.random()*1000);
  let Page_Relations_1140 = "Page_Relations_1140_" + Math.floor(Math.random()*1000);
  let Search_Relations_1140 = "Search_Relations_1140_" + Math.floor(Math.random()*1000);
  let Sort_Relations_1140 = "Sort_Relations_1140_" + Math.floor(Math.random()*1000);
  let collection_many_Relations_1140 = "collection_many_Relations_1140_" + Math.floor(Math.random()*1000);
  let collection_one_Relations_1140 = "collection_one_Relations_1140_" + Math.floor(Math.random()*1000);
  let field_many_Relations_1140 = "field_many_Relations_1140_" + Math.floor(Math.random()*1000);
  let field_one_Relations_1140 = "field_one_Relations_1140_" + Math.floor(Math.random()*1000);
  let id_Relations_1140 = id_Collections_1140;
  let junction_field_Relations_1140 = "junction_field_Relations_1140_" + Math.floor(Math.random()*1000);
  createRelation(Fields_Relations_1140, Filter_Relations_1140, Id_Relations_1140, Limit_Relations_1140, Meta_Relations_1140, Offset_Relations_1140, Page_Relations_1140, Search_Relations_1140, Sort_Relations_1140, collection_many_Relations_1140, collection_one_Relations_1140, field_many_Relations_1140, field_one_Relations_1140, id_Relations_1140, junction_field_Relations_1140, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Relations
  deleteRelation(id_Relations_1140, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Collections
  deleteCollection(id_Collections_1140, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Items_Comments (Self-Contained)
bthread("chain:Items_Comments", function () {
  // -> Creating Collections
  let Meta_Collections_1240 = "Meta_Collections_1240_" + Math.floor(Math.random()*1000);
  let Offset_Collections_1240 = "Offset_Collections_1240_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_1240 = "archive_app_filter_Collections_1240_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_1240 = "archive_field_Collections_1240_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_1240 = "archive_value_Collections_1240_" + Math.floor(Math.random()*1000);
  let collection_Collections_1240 = "customers";
  let display_template_Collections_1240 = "display_template_Collections_1240_" + Math.floor(Math.random()*1000);
  let fields_Collections_1240 = [];
  let hidden_Collections_1240 = true;
  let icon_Collections_1240 = "icon_Collections_1240_" + Math.floor(Math.random()*1000);
  let id_Collections_1240 = "id_Collections_1240_" + Math.floor(Math.random()*1000);
  let meta_Collections_1240 = "meta_Collections_1240_" + Math.floor(Math.random()*1000);
  let note_Collections_1240 = "note_Collections_1240_" + Math.floor(Math.random()*1000);
  let singleton_Collections_1240 = true;
  let sort_field_Collections_1240 = "sort_field_Collections_1240_" + Math.floor(Math.random()*1000);
  let translation_Collections_1240 = "translation_Collections_1240_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_1240 = "unarchive_value_Collections_1240_" + Math.floor(Math.random()*1000);
  let versioning_Collections_1240 = true;
  createCollection(Meta_Collections_1240, Offset_Collections_1240, archive_app_filter_Collections_1240, archive_field_Collections_1240, archive_value_Collections_1240, collection_Collections_1240, display_template_Collections_1240, fields_Collections_1240, hidden_Collections_1240, icon_Collections_1240, id_Collections_1240, meta_Collections_1240, note_Collections_1240, singleton_Collections_1240, sort_field_Collections_1240, translation_Collections_1240, unarchive_value_Collections_1240, versioning_Collections_1240, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Items
  let Collection_Items_1240 = "Collection_Items_1240_" + Math.floor(Math.random()*1000);
  let Fields_Items_1240 = "Fields_Items_1240_" + Math.floor(Math.random()*1000);
  let Filter_Items_1240 = "Filter_Items_1240_" + Math.floor(Math.random()*1000);
  let Limit_Items_1240 = "Limit_Items_1240_" + Math.floor(Math.random()*1000);
  let Meta_Items_1240 = "Meta_Items_1240_" + Math.floor(Math.random()*1000);
  let Offset_Items_1240 = "Offset_Items_1240_" + Math.floor(Math.random()*1000);
  let Search_Items_1240 = "Search_Items_1240_" + Math.floor(Math.random()*1000);
  let Sort_Items_1240 = "Sort_Items_1240_" + Math.floor(Math.random()*1000);
  let collection_Items_1240 = "collection_Items_1240_" + Math.floor(Math.random()*1000);
  createItem(Collection_Items_1240, Fields_Items_1240, Filter_Items_1240, Limit_Items_1240, Meta_Items_1240, Offset_Items_1240, Search_Items_1240, Sort_Items_1240, collection_Items_1240, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Comments
  let collection_Comments_1240 = collection_Items_1240;
  let comment_Comments_1240 = "This is a comment";
  let id_Comments_1240 = id_Collections_1240;
  let item_Comments_1240 = "123";
  createComment(collection_Comments_1240, comment_Comments_1240, id_Comments_1240, item_Comments_1240, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Comments
  deleteComment(id_Comments_1240, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Items
  deleteItems(collection_Items_1240, { expectedResponseCodes: [200, 201, 204] });

});

// Story: Deep Chain Roles_Permissions (Self-Contained)
bthread("chain:Roles_Permissions", function () {
  // -> Creating Roles
  let Fields_Roles_1340 = "Fields_Roles_1340_" + Math.floor(Math.random()*1000);
  let Filter_Roles_1340 = "Filter_Roles_1340_" + Math.floor(Math.random()*1000);
  let Limit_Roles_1340 = "Limit_Roles_1340_" + Math.floor(Math.random()*1000);
  let Meta_Roles_1340 = "Meta_Roles_1340_" + Math.floor(Math.random()*1000);
  let Offset_Roles_1340 = "Offset_Roles_1340_" + Math.floor(Math.random()*1000);
  let Page_Roles_1340 = "Page_Roles_1340_" + Math.floor(Math.random()*1000);
  let Search_Roles_1340 = "Search_Roles_1340_" + Math.floor(Math.random()*1000);
  let Sort_Roles_1340 = "Sort_Roles_1340_" + Math.floor(Math.random()*1000);
  let description_Roles_1340 = "Admins have access to all managed data within the system by default";
  let enforce_tfa_Roles_1340 = true;
  let external_id_Roles_1340 = "external_id_Roles_1340_" + Math.floor(Math.random()*1000);
  let id_Roles_1340 = "2f24211d-d928-469a-aea3-3c8f53d4e426";
  let ip_access_Roles_1340 = [];
  let module_listing_Roles_1340 = "module_listing_Roles_1340_" + Math.floor(Math.random()*1000);
  let name_Roles_1340 = "Administrator";
  createRole(Fields_Roles_1340, Filter_Roles_1340, Limit_Roles_1340, Meta_Roles_1340, Offset_Roles_1340, Page_Roles_1340, Search_Roles_1340, Sort_Roles_1340, description_Roles_1340, enforce_tfa_Roles_1340, external_id_Roles_1340, id_Roles_1340, ip_access_Roles_1340, module_listing_Roles_1340, name_Roles_1340, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Collections
  let Meta_Collections_1340 = "Meta_Collections_1340_" + Math.floor(Math.random()*1000);
  let Offset_Collections_1340 = "Offset_Collections_1340_" + Math.floor(Math.random()*1000);
  let archive_app_filter_Collections_1340 = "archive_app_filter_Collections_1340_" + Math.floor(Math.random()*1000);
  let archive_field_Collections_1340 = "archive_field_Collections_1340_" + Math.floor(Math.random()*1000);
  let archive_value_Collections_1340 = "archive_value_Collections_1340_" + Math.floor(Math.random()*1000);
  let collection_Collections_1340 = "customers";
  let display_template_Collections_1340 = "display_template_Collections_1340_" + Math.floor(Math.random()*1000);
  let fields_Collections_1340 = [];
  let hidden_Collections_1340 = true;
  let icon_Collections_1340 = "icon_Collections_1340_" + Math.floor(Math.random()*1000);
  let id_Collections_1340 = "id_Collections_1340_" + Math.floor(Math.random()*1000);
  let meta_Collections_1340 = "meta_Collections_1340_" + Math.floor(Math.random()*1000);
  let note_Collections_1340 = "note_Collections_1340_" + Math.floor(Math.random()*1000);
  let singleton_Collections_1340 = true;
  let sort_field_Collections_1340 = "sort_field_Collections_1340_" + Math.floor(Math.random()*1000);
  let translation_Collections_1340 = "translation_Collections_1340_" + Math.floor(Math.random()*1000);
  let unarchive_value_Collections_1340 = "unarchive_value_Collections_1340_" + Math.floor(Math.random()*1000);
  let versioning_Collections_1340 = true;
  createCollection(Meta_Collections_1340, Offset_Collections_1340, archive_app_filter_Collections_1340, archive_field_Collections_1340, archive_value_Collections_1340, collection_Collections_1340, display_template_Collections_1340, fields_Collections_1340, hidden_Collections_1340, icon_Collections_1340, id_Collections_1340, meta_Collections_1340, note_Collections_1340, singleton_Collections_1340, sort_field_Collections_1340, translation_Collections_1340, unarchive_value_Collections_1340, versioning_Collections_1340, { expectedResponseCodes: [200, 201, 204] });

  // -> Creating Permissions
  let Fields_Permissions_1340 = "Fields_Permissions_1340_" + Math.floor(Math.random()*1000);
  let Id_Permissions_1340 = "Id_Permissions_1340_" + Math.floor(Math.random()*1000);
  let Meta_Permissions_1340 = "Meta_Permissions_1340_" + Math.floor(Math.random()*1000);
  let collection_Permissions_1340 = "customers";
  let comment_Permissions_1340 = "comment_Permissions_1340_" + Math.floor(Math.random()*1000);
  let create_Permissions_1340 = "create_Permissions_1340_" + Math.floor(Math.random()*1000);
  let _delete_Permissions_1340 = "delete_Permissions_1340_" + Math.floor(Math.random()*1000);
  let explain_Permissions_1340 = "explain_Permissions_1340_" + Math.floor(Math.random()*1000);
  let id_Permissions_1340 = id_Roles_1340;
  let read_Permissions_1340 = "read_Permissions_1340_" + Math.floor(Math.random()*1000);
  let read_field_blacklist_Permissions_1340 = [];
  let role_Permissions_1340 = Math.floor(Math.random() * 1000);
  let status_Permissions_1340 = "active";
  let status_blacklist_Permissions_1340 = [];
  let update_Permissions_1340 = "update_Permissions_1340_" + Math.floor(Math.random()*1000);
  let write_field_blacklist_Permissions_1340 = [];
  createPermission(Fields_Permissions_1340, Id_Permissions_1340, Meta_Permissions_1340, collection_Permissions_1340, comment_Permissions_1340, create_Permissions_1340, _delete_Permissions_1340, explain_Permissions_1340, id_Permissions_1340, read_Permissions_1340, read_field_blacklist_Permissions_1340, role_Permissions_1340, status_Permissions_1340, status_blacklist_Permissions_1340, update_Permissions_1340, write_field_blacklist_Permissions_1340, { expectedResponseCodes: [200, 201, 204] });

  // --- Proper Teardown (Reverse Order) ---
  // -> Deleting Permissions
  deletePermission(id_Permissions_1340, { expectedResponseCodes: [200, 201, 204] });

  // -> Deleting Roles
  deleteRole(id_Roles_1340, { expectedResponseCodes: [200, 201, 204] });

});
