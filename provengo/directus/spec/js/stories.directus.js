// Auto-generated stories for directus
//@provengo summon rest

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

// Story: crud:Collections:linear:1
bthread("crud:Collections:linear:1", function () {
  let Meta = "Meta_360";
  let Offset = "Offset_360";
  let archive_app_filter = "archive_app_filter_360";
  let archive_field = "archive_field_360";
  let archive_value = "archive_value_360";
  let collection = "collection_360";
  let color = "color_360";
  let display_template = "display_template_360";
  let fields = "fields_360";
  let hidden = true;
  let icon = "icon_360";
  let id = "id_360";
  let note = "note_360";
  let singleton = true;
  let sort_field = "sort_field_360";
  let translation = "translation_360";
  let unarchive_value = "unarchive_value_360";
  let versioning = true;
  createCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Collections:linear:2
bthread("crud:Collections:linear:2", function () {
  let Meta = "Meta_370";
  let Offset = "Offset_370";
  let archive_app_filter = "archive_app_filter_370";
  let archive_field = "archive_field_370";
  let archive_value = "archive_value_370";
  let collection = "collection_370";
  let color = "color_370";
  let display_template = "display_template_370";
  let fields = "fields_370";
  let hidden = true;
  let icon = "icon_370";
  let id = "id_370";
  let note = "note_370";
  let singleton = true;
  let sort_field = "sort_field_370";
  let translation = "translation_370";
  let unarchive_value = "unarchive_value_370";
  let versioning = true;
  createCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Collections:linear:3
bthread("crud:Collections:linear:3", function () {
  let Meta = "Meta_380";
  let Offset = "Offset_380";
  let archive_app_filter = "archive_app_filter_380";
  let archive_field = "archive_field_380";
  let archive_value = "archive_value_380";
  let collection = "collection_380";
  let color = "color_380";
  let display_template = "display_template_380";
  let fields = "fields_380";
  let hidden = true;
  let icon = "icon_380";
  let id = "id_380";
  let note = "note_380";
  let singleton = true;
  let sort_field = "sort_field_380";
  let translation = "translation_380";
  let unarchive_value = "unarchive_value_380";
  let versioning = true;
  createCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Items:linear:1
bthread("crud:Items:linear:1", function () {
  let Collection = "Collection_410";
  let Fields = "Fields_410";
  let Filter = "Filter_410";
  let Limit = "Limit_410";
  let Meta = "Meta_410";
  let Offset = "Offset_410";
  let Search = "Search_410";
  let Sort = "Sort_410";
  let Version = "Version_410";
  let collection = "collection_410";
  let id = "id_410";
  createItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id);
});

// Story: crud:Items:linear:2
bthread("crud:Items:linear:2", function () {
  let Collection = "Collection_420";
  let Fields = "Fields_420";
  let Filter = "Filter_420";
  let Limit = "Limit_420";
  let Meta = "Meta_420";
  let Offset = "Offset_420";
  let Search = "Search_420";
  let Sort = "Sort_420";
  let Version = "Version_420";
  let collection = "collection_420";
  let id = "id_420";
  createItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id);
});

// Story: crud:Items:linear:3
bthread("crud:Items:linear:3", function () {
  let Collection = "Collection_430";
  let Fields = "Fields_430";
  let Filter = "Filter_430";
  let Limit = "Limit_430";
  let Meta = "Meta_430";
  let Offset = "Offset_430";
  let Search = "Search_430";
  let Sort = "Sort_430";
  let Version = "Version_430";
  let collection = "collection_430";
  let id = "id_430";
  createItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id);
});

// Story: crud:Presets:linear:1
bthread("crud:Presets:linear:1", function () {
  let Fields = "Fields_460";
  let Filter = "Filter_460";
  let Id = "Id_460";
  let Limit = "Limit_460";
  let Meta = "Meta_460";
  let Offset = "Offset_460";
  let Page = "Page_460";
  let Search = "Search_460";
  let Sort = "Sort_460";
  let collection = "collection_460";
  let filters = "filters_460";
  let id = "id_460";
  let layout = "layout_460";
  let layout_options = "layout_options_460";
  let layout_query = "layout_query_460";
  let role = "role_460";
  let search = "search_460";
  let search_query = "search_query_460";
  let title = "title_460";
  let translation = "translation_460";
  let view_options = "view_options_460";
  let view_query = "view_query_460";
  let view_type = "view_type_460";
  createPreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type);
});

// Story: crud:Presets:linear:2
bthread("crud:Presets:linear:2", function () {
  let Fields = "Fields_470";
  let Filter = "Filter_470";
  let Id = "Id_470";
  let Limit = "Limit_470";
  let Meta = "Meta_470";
  let Offset = "Offset_470";
  let Page = "Page_470";
  let Search = "Search_470";
  let Sort = "Sort_470";
  let collection = "collection_470";
  let filters = "filters_470";
  let id = "id_470";
  let layout = "layout_470";
  let layout_options = "layout_options_470";
  let layout_query = "layout_query_470";
  let role = "role_470";
  let search = "search_470";
  let search_query = "search_query_470";
  let title = "title_470";
  let translation = "translation_470";
  let view_options = "view_options_470";
  let view_query = "view_query_470";
  let view_type = "view_type_470";
  createPreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type);
});

// Story: crud:Presets:linear:3
bthread("crud:Presets:linear:3", function () {
  let Fields = "Fields_480";
  let Filter = "Filter_480";
  let Id = "Id_480";
  let Limit = "Limit_480";
  let Meta = "Meta_480";
  let Offset = "Offset_480";
  let Page = "Page_480";
  let Search = "Search_480";
  let Sort = "Sort_480";
  let collection = "collection_480";
  let filters = "filters_480";
  let id = "id_480";
  let layout = "layout_480";
  let layout_options = "layout_options_480";
  let layout_query = "layout_query_480";
  let role = "role_480";
  let search = "search_480";
  let search_query = "search_query_480";
  let title = "title_480";
  let translation = "translation_480";
  let view_options = "view_options_480";
  let view_query = "view_query_480";
  let view_type = "view_type_480";
  createPreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type);
});

// Story: crud:Comments:linear:1
bthread("crud:Comments:linear:1", function () {
  let collection = "collection_510";
  let comment = "comment_510";
  let id = "id_510";
  let item = "item_510";
  let key = "key_510";
  createComment(collection, comment, id, item, key);
});

// Story: crud:Comments:linear:2
bthread("crud:Comments:linear:2", function () {
  let collection = "collection_520";
  let comment = "comment_520";
  let id = "id_520";
  let item = "item_520";
  let key = "key_520";
  createComment(collection, comment, id, item, key);
});

// Story: crud:Comments:linear:3
bthread("crud:Comments:linear:3", function () {
  let collection = "collection_530";
  let comment = "comment_530";
  let id = "id_530";
  let item = "item_530";
  let key = "key_530";
  createComment(collection, comment, id, item, key);
});

// Story: crud:Fields:linear:1
bthread("crud:Fields:linear:1", function () {
  let Limit = "Limit_610";
  let Sort = "Sort_610";
  let collection = "collection_610";
  let comment = "comment_610";
  let default_value = "default_value_610";
  let display = "display_610";
  let display_options = "display_options_610";
  let field = "field_610";
  let foreign_key_column = "foreign_key_column_610";
  let foreign_key_schema = "foreign_key_schema_610";
  let foreign_key_table = "foreign_key_table_610";
  let group = 610;
  let has_auto_increment = true;
  let hidden = true;
  let id = 610;
  let is_nullable = true;
  let is_primary_key = true;
  let locked = true;
  let max_length = 610;
  let name = "name_610";
  let note = "note_610";
  let options = "options_610";
  let readonly = true;
  let schema = "schema_610";
  let sort = 610;
  let special = "special_610";
  let system_interface = "system-interface_610";
  let table = "table_610";
  let translation = "translation_610";
  let type = "type_610";
  let width = "width_610";
  createField(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
});

// Story: crud:Fields:linear:2
bthread("crud:Fields:linear:2", function () {
  let Limit = "Limit_620";
  let Sort = "Sort_620";
  let collection = "collection_620";
  let comment = "comment_620";
  let default_value = "default_value_620";
  let display = "display_620";
  let display_options = "display_options_620";
  let field = "field_620";
  let foreign_key_column = "foreign_key_column_620";
  let foreign_key_schema = "foreign_key_schema_620";
  let foreign_key_table = "foreign_key_table_620";
  let group = 620;
  let has_auto_increment = true;
  let hidden = true;
  let id = 620;
  let is_nullable = true;
  let is_primary_key = true;
  let locked = true;
  let max_length = 620;
  let name = "name_620";
  let note = "note_620";
  let options = "options_620";
  let readonly = true;
  let schema = "schema_620";
  let sort = 620;
  let special = "special_620";
  let system_interface = "system-interface_620";
  let table = "table_620";
  let translation = "translation_620";
  let type = "type_620";
  let width = "width_620";
  createField(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
});

// Story: crud:Fields:linear:3
bthread("crud:Fields:linear:3", function () {
  let Limit = "Limit_630";
  let Sort = "Sort_630";
  let collection = "collection_630";
  let comment = "comment_630";
  let default_value = "default_value_630";
  let display = "display_630";
  let display_options = "display_options_630";
  let field = "field_630";
  let foreign_key_column = "foreign_key_column_630";
  let foreign_key_schema = "foreign_key_schema_630";
  let foreign_key_table = "foreign_key_table_630";
  let group = 630;
  let has_auto_increment = true;
  let hidden = true;
  let id = 630;
  let is_nullable = true;
  let is_primary_key = true;
  let locked = true;
  let max_length = 630;
  let name = "name_630";
  let note = "note_630";
  let options = "options_630";
  let readonly = true;
  let schema = "schema_630";
  let sort = 630;
  let special = "special_630";
  let system_interface = "system-interface_630";
  let table = "table_630";
  let translation = "translation_630";
  let type = "type_630";
  let width = "width_630";
  createField(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width);
});

// Story: crud:Files:linear:1
bthread("crud:Files:linear:1", function () {
  let Fields = "Fields_660";
  let Filter = "Filter_660";
  let Limit = "Limit_660";
  let Meta = "Meta_660";
  let Offset = "Offset_660";
  let Search = "Search_660";
  let Sort = "Sort_660";
  let data = "data_660";
  let description = "description_660";
  let filename_download = "filename_download_660";
  let folder = "folder_660";
  let id = "id_660";
  let tags = "tags_660";
  let title = "title_660";
  createFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title);
});

// Story: crud:Files:linear:2
bthread("crud:Files:linear:2", function () {
  let Fields = "Fields_670";
  let Filter = "Filter_670";
  let Limit = "Limit_670";
  let Meta = "Meta_670";
  let Offset = "Offset_670";
  let Search = "Search_670";
  let Sort = "Sort_670";
  let data = "data_670";
  let description = "description_670";
  let filename_download = "filename_download_670";
  let folder = "folder_670";
  let id = "id_670";
  let tags = "tags_670";
  let title = "title_670";
  createFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title);
});

// Story: crud:Files:linear:3
bthread("crud:Files:linear:3", function () {
  let Fields = "Fields_680";
  let Filter = "Filter_680";
  let Limit = "Limit_680";
  let Meta = "Meta_680";
  let Offset = "Offset_680";
  let Search = "Search_680";
  let Sort = "Sort_680";
  let data = "data_680";
  let description = "description_680";
  let filename_download = "filename_download_680";
  let folder = "folder_680";
  let id = "id_680";
  let tags = "tags_680";
  let title = "title_680";
  createFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title);
});

// Story: crud:Flows:linear:1
bthread("crud:Flows:linear:1", function () {
  let Fields = "Fields_710";
  let Meta = "Meta_710";
  let data = "data_710";
  let id = "id_710";
  createFlow(Fields, Meta, data, id);
});

// Story: crud:Flows:linear:2
bthread("crud:Flows:linear:2", function () {
  let Fields = "Fields_720";
  let Meta = "Meta_720";
  let data = "data_720";
  let id = "id_720";
  createFlow(Fields, Meta, data, id);
});

// Story: crud:Flows:linear:3
bthread("crud:Flows:linear:3", function () {
  let Fields = "Fields_730";
  let Meta = "Meta_730";
  let data = "data_730";
  let id = "id_730";
  createFlow(Fields, Meta, data, id);
});

// Story: crud:Folders:linear:1
bthread("crud:Folders:linear:1", function () {
  let Fields = "Fields_760";
  let Filter = "Filter_760";
  let Limit = "Limit_760";
  let Meta = "Meta_760";
  let Offset = "Offset_760";
  let Search = "Search_760";
  let Sort = "Sort_760";
  let id = "id_760";
  let name = "name_760";
  let parent = 760;
  createFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent);
});

// Story: crud:Folders:linear:2
bthread("crud:Folders:linear:2", function () {
  let Fields = "Fields_770";
  let Filter = "Filter_770";
  let Limit = "Limit_770";
  let Meta = "Meta_770";
  let Offset = "Offset_770";
  let Search = "Search_770";
  let Sort = "Sort_770";
  let id = "id_770";
  let name = "name_770";
  let parent = 770;
  createFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent);
});

// Story: crud:Folders:linear:3
bthread("crud:Folders:linear:3", function () {
  let Fields = "Fields_780";
  let Filter = "Filter_780";
  let Limit = "Limit_780";
  let Meta = "Meta_780";
  let Offset = "Offset_780";
  let Search = "Search_780";
  let Sort = "Sort_780";
  let id = "id_780";
  let name = "name_780";
  let parent = 780;
  createFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent);
});

// Story: crud:Operations:linear:1
bthread("crud:Operations:linear:1", function () {
  let data = "data_810";
  let id = "id_810";
  let keys = "keys_810";
  createOperation(data, id, keys);
});

// Story: crud:Operations:linear:2
bthread("crud:Operations:linear:2", function () {
  let data = "data_820";
  let id = "id_820";
  let keys = "keys_820";
  createOperation(data, id, keys);
});

// Story: crud:Operations:linear:3
bthread("crud:Operations:linear:3", function () {
  let data = "data_830";
  let id = "id_830";
  let keys = "keys_830";
  createOperation(data, id, keys);
});

// Story: crud:Permissions:linear:1
bthread("crud:Permissions:linear:1", function () {
  let collection = "collection_860";
  let comment = "comment_860";
  let create = "create_860";
  let data = "data_860";
  let _delete = "delete_860";
  let explain = "explain_860";
  let id = "id_860";
  let keys = "keys_860";
  let read = "read_860";
  let read_field_blacklist = "read_field_blacklist_860";
  let role = 860;
  let status = "status_860";
  let status_blacklist = "status_blacklist_860";
  let update = "update_860";
  let write_field_blacklist = "write_field_blacklist_860";
  createPermission(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
});

// Story: crud:Permissions:linear:2
bthread("crud:Permissions:linear:2", function () {
  let collection = "collection_870";
  let comment = "comment_870";
  let create = "create_870";
  let data = "data_870";
  let _delete = "delete_870";
  let explain = "explain_870";
  let id = "id_870";
  let keys = "keys_870";
  let read = "read_870";
  let read_field_blacklist = "read_field_blacklist_870";
  let role = 870;
  let status = "status_870";
  let status_blacklist = "status_blacklist_870";
  let update = "update_870";
  let write_field_blacklist = "write_field_blacklist_870";
  createPermission(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
});

// Story: crud:Permissions:linear:3
bthread("crud:Permissions:linear:3", function () {
  let collection = "collection_880";
  let comment = "comment_880";
  let create = "create_880";
  let data = "data_880";
  let _delete = "delete_880";
  let explain = "explain_880";
  let id = "id_880";
  let keys = "keys_880";
  let read = "read_880";
  let read_field_blacklist = "read_field_blacklist_880";
  let role = 880;
  let status = "status_880";
  let status_blacklist = "status_blacklist_880";
  let update = "update_880";
  let write_field_blacklist = "write_field_blacklist_880";
  createPermission(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
});

// Story: crud:Relations:linear:1
bthread("crud:Relations:linear:1", function () {
  let Fields = "Fields_910";
  let Filter = "Filter_910";
  let Id = "Id_910";
  let Limit = "Limit_910";
  let Meta = "Meta_910";
  let Offset = "Offset_910";
  let Page = "Page_910";
  let Search = "Search_910";
  let Sort = "Sort_910";
  let collection_many = "collection_many_910";
  let collection_one = "collection_one_910";
  let field_many = "field_many_910";
  let field_one = "field_one_910";
  let id = "id_910";
  let junction_field = "junction_field_910";
  createRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Relations:linear:2
bthread("crud:Relations:linear:2", function () {
  let Fields = "Fields_920";
  let Filter = "Filter_920";
  let Id = "Id_920";
  let Limit = "Limit_920";
  let Meta = "Meta_920";
  let Offset = "Offset_920";
  let Page = "Page_920";
  let Search = "Search_920";
  let Sort = "Sort_920";
  let collection_many = "collection_many_920";
  let collection_one = "collection_one_920";
  let field_many = "field_many_920";
  let field_one = "field_one_920";
  let id = "id_920";
  let junction_field = "junction_field_920";
  createRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Relations:linear:3
bthread("crud:Relations:linear:3", function () {
  let Fields = "Fields_930";
  let Filter = "Filter_930";
  let Id = "Id_930";
  let Limit = "Limit_930";
  let Meta = "Meta_930";
  let Offset = "Offset_930";
  let Page = "Page_930";
  let Search = "Search_930";
  let Sort = "Sort_930";
  let collection_many = "collection_many_930";
  let collection_one = "collection_one_930";
  let field_many = "field_many_930";
  let field_one = "field_one_930";
  let id = "id_930";
  let junction_field = "junction_field_930";
  createRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Roles:linear:1
bthread("crud:Roles:linear:1", function () {
  let Fields = "Fields_1010";
  let Filter = "Filter_1010";
  let Limit = "Limit_1010";
  let Meta = "Meta_1010";
  let Offset = "Offset_1010";
  let Page = "Page_1010";
  let Search = "Search_1010";
  let Sort = "Sort_1010";
  let description = "description_1010";
  let enforce_tfa = true;
  let external_id = "external_id_1010";
  let id = "id_1010";
  let ip_access = "ip_access_1010";
  let module_listing = "module_listing_1010";
  let name = "name_1010";
  createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Roles:linear:2
bthread("crud:Roles:linear:2", function () {
  let Fields = "Fields_1020";
  let Filter = "Filter_1020";
  let Limit = "Limit_1020";
  let Meta = "Meta_1020";
  let Offset = "Offset_1020";
  let Page = "Page_1020";
  let Search = "Search_1020";
  let Sort = "Sort_1020";
  let description = "description_1020";
  let enforce_tfa = true;
  let external_id = "external_id_1020";
  let id = "id_1020";
  let ip_access = "ip_access_1020";
  let module_listing = "module_listing_1020";
  let name = "name_1020";
  createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Roles:linear:3
bthread("crud:Roles:linear:3", function () {
  let Fields = "Fields_1030";
  let Filter = "Filter_1030";
  let Limit = "Limit_1030";
  let Meta = "Meta_1030";
  let Offset = "Offset_1030";
  let Page = "Page_1030";
  let Search = "Search_1030";
  let Sort = "Sort_1030";
  let description = "description_1030";
  let enforce_tfa = true;
  let external_id = "external_id_1030";
  let id = "id_1030";
  let ip_access = "ip_access_1030";
  let module_listing = "module_listing_1030";
  let name = "name_1030";
  createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Users:linear:1
bthread("crud:Users:linear:1", function () {
  let Fields = "Fields_1210";
  let Filter = "Filter_1210";
  let Limit = "Limit_1210";
  let Meta = "Meta_1210";
  let Offset = "Offset_1210";
  let Search = "Search_1210";
  let Sort = "Sort_1210";
  let UUId = "UUId_1210";
  let data = "data_1210";
  let email = "email_1210";
  let id = "id_1210";
  let last_page = "last_page_1210";
  let password = "password_1210";
  let token = "token_1210";
  acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token);
});

// Story: crud:Users:linear:2
bthread("crud:Users:linear:2", function () {
  let Fields = "Fields_1220";
  let Filter = "Filter_1220";
  let Limit = "Limit_1220";
  let Meta = "Meta_1220";
  let Offset = "Offset_1220";
  let Search = "Search_1220";
  let Sort = "Sort_1220";
  let UUId = "UUId_1220";
  let data = "data_1220";
  let email = "email_1220";
  let id = "id_1220";
  let last_page = "last_page_1220";
  let password = "password_1220";
  let token = "token_1220";
  acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token);
});

// Story: crud:Users:linear:3
bthread("crud:Users:linear:3", function () {
  let Fields = "Fields_1230";
  let Filter = "Filter_1230";
  let Limit = "Limit_1230";
  let Meta = "Meta_1230";
  let Offset = "Offset_1230";
  let Search = "Search_1230";
  let Sort = "Sort_1230";
  let UUId = "UUId_1230";
  let data = "data_1230";
  let email = "email_1230";
  let id = "id_1230";
  let last_page = "last_page_1230";
  let password = "password_1230";
  let token = "token_1230";
  acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token);
});

// Story: crud:Versions:linear:1
bthread("crud:Versions:linear:1", function () {
  let Fields = "Fields_1310";
  let Filter = "Filter_1310";
  let Limit = "Limit_1310";
  let Meta = "Meta_1310";
  let Offset = "Offset_1310";
  let Search = "Search_1310";
  let Sort = "Sort_1310";
  let data = "data_1310";
  let fields = "fields_1310";
  let id = "id_1310";
  let mainHash = "mainHash_1310";
  promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash);
});

// Story: crud:Versions:linear:2
bthread("crud:Versions:linear:2", function () {
  let Fields = "Fields_1320";
  let Filter = "Filter_1320";
  let Limit = "Limit_1320";
  let Meta = "Meta_1320";
  let Offset = "Offset_1320";
  let Search = "Search_1320";
  let Sort = "Sort_1320";
  let data = "data_1320";
  let fields = "fields_1320";
  let id = "id_1320";
  let mainHash = "mainHash_1320";
  promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash);
});

// Story: crud:Versions:linear:3
bthread("crud:Versions:linear:3", function () {
  let Fields = "Fields_1330";
  let Filter = "Filter_1330";
  let Limit = "Limit_1330";
  let Meta = "Meta_1330";
  let Offset = "Offset_1330";
  let Search = "Search_1330";
  let Sort = "Sort_1330";
  let data = "data_1330";
  let fields = "fields_1330";
  let id = "id_1330";
  let mainHash = "mainHash_1330";
  promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash);
});

// Story: crud:Webhooks:linear:1
bthread("crud:Webhooks:linear:1", function () {
  let Fields = "Fields_1360";
  let Meta = "Meta_1360";
  let actions = "actions_1360";
  let data = true;
  let id = "id_1360";
  let method = "method_1360";
  let name = "name_1360";
  let status = "status_1360";
  let system_collections = "system-collections_1360";
  let url = "url_1360";
  createWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
});

// Story: crud:Webhooks:linear:2
bthread("crud:Webhooks:linear:2", function () {
  let Fields = "Fields_1370";
  let Meta = "Meta_1370";
  let actions = "actions_1370";
  let data = true;
  let id = "id_1370";
  let method = "method_1370";
  let name = "name_1370";
  let status = "status_1370";
  let system_collections = "system-collections_1370";
  let url = "url_1370";
  createWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
});

// Story: crud:Webhooks:linear:3
bthread("crud:Webhooks:linear:3", function () {
  let Fields = "Fields_1380";
  let Meta = "Meta_1380";
  let actions = "actions_1380";
  let data = true;
  let id = "id_1380";
  let method = "method_1380";
  let name = "name_1380";
  let status = "status_1380";
  let system_collections = "system-collections_1380";
  let url = "url_1380";
  createWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url);
});
