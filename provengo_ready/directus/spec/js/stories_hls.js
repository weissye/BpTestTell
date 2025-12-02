// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
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

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let avatar = "avatar_200";
  let description = "description_200";
  let email = "email_200";
  let first_name = "first_name_200";
  let id = 200;
  let language = "language_200";
  let last_access = "last_access_200";
  let last_name = "last_name_200";
  let last_page = "last_page_200";
  let location = "location_200";
  let password = "password_200";
  let role = "role_200";
  let status = "status_200";
  let tags = "tags_200";
  let tfa_secret = "tfa_secret_200";
  let theme = "theme_200";
  let title = "title_200";
  let token = "token_200";
  createUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  // waitForUserAdded(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  tryToAddExistingUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  verifyUserExists(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  updateUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  deleteUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  tryToDeleteANonExistingUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  verifyUserDoesNotExist(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let avatar = "avatar_201";
  let description = "description_201";
  let email = "email_201";
  let first_name = "first_name_201";
  let id = 201;
  let language = "language_201";
  let last_access = "last_access_201";
  let last_name = "last_name_201";
  let last_page = "last_page_201";
  let location = "location_201";
  let password = "password_201";
  let role = "role_201";
  let status = "status_201";
  let tags = "tags_201";
  let tfa_secret = "tfa_secret_201";
  let theme = "theme_201";
  let title = "title_201";
  let token = "token_201";
  createUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  // waitForUserAdded(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  tryToAddExistingUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  updateUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  verifyUserExists(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  deleteUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  tryToDeleteANonExistingUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  verifyUserDoesNotExist(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let avatar = "avatar_206";
  let description = "description_206";
  let email = "email_206";
  let first_name = "first_name_206";
  let id = 206;
  let language = "language_206";
  let last_access = "last_access_206";
  let last_name = "last_name_206";
  let last_page = "last_page_206";
  let location = "location_206";
  let password = "password_206";
  let role = "role_206";
  let status = "status_206";
  let tags = "tags_206";
  let tfa_secret = "tfa_secret_206";
  let theme = "theme_206";
  let title = "title_206";
  let token = "token_206";
  createUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  // waitForUserAdded(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  verifyUserExists(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  tryToAddExistingUser(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
  verifyUserExists(avatar, description, email, first_name, id, language, last_access, last_name, last_page, location, password, role, status, tags, tfa_secret, theme, title, token);
});

// Story: crud:AuthOAuth:read_only
bthread("crud:AuthOAuth:read_only", function () {

  verifyAuthOAuthExists();
});

// Story: crud:AuthOAuthProvider:read_only
bthread("crud:AuthOAuthProvider:read_only", function () {
  let provider = 270;
  verifyAuthOAuthProviderExists(provider);
});

// Story: crud:ContentVersion:nondet:1:1
bthread("crud:ContentVersion:nondet:1:1", function () {
  let id = 280;
  createContentVersion(id);
  // waitForContentVersionAdded(id);
  tryToAddExistingContentVersion(id);
  verifyContentVersionExists(id);
  updateContentVersion(id);
  deleteContentVersion(id);
  tryToDeleteANonExistingContentVersion(id);
  verifyContentVersionDoesNotExist(id);
});

// Story: crud:ContentVersion:nondet:1:2
bthread("crud:ContentVersion:nondet:1:2", function () {
  let id = 281;
  createContentVersion(id);
  // waitForContentVersionAdded(id);
  tryToAddExistingContentVersion(id);
  updateContentVersion(id);
  verifyContentVersionExists(id);
  deleteContentVersion(id);
  tryToDeleteANonExistingContentVersion(id);
  verifyContentVersionDoesNotExist(id);
});

// Story: crud:ContentVersion:nondet:negative:dup-add
bthread("crud:ContentVersion:nondet:negative:dup-add", function () {
  let id = 286;
  createContentVersion(id);
  // waitForContentVersionAdded(id);
  verifyContentVersionExists(id);
  tryToAddExistingContentVersion(id);
  verifyContentVersionExists(id);
});

// Story: crud:Extension:read_only
bthread("crud:Extension:read_only", function () {
  let name = 290;
  verifyExtensionExists(name);
});

// Story: crud:Field:nondet:1:1
bthread("crud:Field:nondet:1:1", function () {
  let collection = 310;
  let field = "field_310";
  let id = 310;
  let meta = {};
  let schema = {};
  let type = "type_310";
  createField(collection, field, id, meta, schema, type);
  // waitForFieldAdded(collection, field, id, meta, schema, type);
  tryToAddExistingField(collection, field, id, meta, schema, type);
  verifyFieldExists(collection, field, id, meta, schema, type);
  updateField(collection, field, id, meta, schema, type);
  deleteField(collection, field, id, meta, schema, type);
  tryToDeleteANonExistingField(collection, field, id, meta, schema, type);
  verifyFieldDoesNotExist(collection, field, id, meta, schema, type);
});

// Story: crud:Field:nondet:1:2
bthread("crud:Field:nondet:1:2", function () {
  let collection = 311;
  let field = "field_311";
  let id = 311;
  let meta = {};
  let schema = {};
  let type = "type_311";
  createField(collection, field, id, meta, schema, type);
  // waitForFieldAdded(collection, field, id, meta, schema, type);
  tryToAddExistingField(collection, field, id, meta, schema, type);
  updateField(collection, field, id, meta, schema, type);
  verifyFieldExists(collection, field, id, meta, schema, type);
  deleteField(collection, field, id, meta, schema, type);
  tryToDeleteANonExistingField(collection, field, id, meta, schema, type);
  verifyFieldDoesNotExist(collection, field, id, meta, schema, type);
});

// Story: crud:Field:nondet:negative:dup-add
bthread("crud:Field:nondet:negative:dup-add", function () {
  let collection = 316;
  let field = "field_316";
  let id = 316;
  let meta = {};
  let schema = {};
  let type = "type_316";
  createField(collection, field, id, meta, schema, type);
  // waitForFieldAdded(collection, field, id, meta, schema, type);
  verifyFieldExists(collection, field, id, meta, schema, type);
  tryToAddExistingField(collection, field, id, meta, schema, type);
  verifyFieldExists(collection, field, id, meta, schema, type);
});

// Story: crud:Permission:nondet:1:1
bthread("crud:Permission:nondet:1:1", function () {
  let collection = "collection_320";
  let comment = "comment_320";
  let create = "create_320";
  let delete = "delete_320";
  let explain = "explain_320";
  let id = 320;
  let read = "read_320";
  let read_field_blacklist = "read_field_blacklist_320";
  let role = 320;
  let status = "status_320";
  let status_blacklist = "status_blacklist_320";
  let update = "update_320";
  let write_field_blacklist = "write_field_blacklist_320";
  createPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  // waitForPermissionAdded(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToAddExistingPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionExists(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  updatePermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  deletePermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToDeleteANonExistingPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionDoesNotExist(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
});

// Story: crud:Permission:nondet:1:2
bthread("crud:Permission:nondet:1:2", function () {
  let collection = "collection_321";
  let comment = "comment_321";
  let create = "create_321";
  let delete = "delete_321";
  let explain = "explain_321";
  let id = 321;
  let read = "read_321";
  let read_field_blacklist = "read_field_blacklist_321";
  let role = 321;
  let status = "status_321";
  let status_blacklist = "status_blacklist_321";
  let update = "update_321";
  let write_field_blacklist = "write_field_blacklist_321";
  createPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  // waitForPermissionAdded(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToAddExistingPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  updatePermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionExists(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  deletePermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToDeleteANonExistingPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionDoesNotExist(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
});

// Story: crud:Permission:nondet:negative:dup-add
bthread("crud:Permission:nondet:negative:dup-add", function () {
  let collection = "collection_326";
  let comment = "comment_326";
  let create = "create_326";
  let delete = "delete_326";
  let explain = "explain_326";
  let id = 326;
  let read = "read_326";
  let read_field_blacklist = "read_field_blacklist_326";
  let role = 326;
  let status = "status_326";
  let status_blacklist = "status_blacklist_326";
  let update = "update_326";
  let write_field_blacklist = "write_field_blacklist_326";
  createPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  // waitForPermissionAdded(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionExists(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToAddExistingPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionExists(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
});

// Story: crud:Activity:read_only
bthread("crud:Activity:read_only", function () {
  let id = 330;
  verifyActivityExists(id);
});

// Story: crud:Item:nondet:1:1
bthread("crud:Item:nondet:1:1", function () {
  let collection = 340;
  let id = 340;
  createItem(collection, id);
  // waitForItemAdded(collection, id);
  tryToAddExistingItem(collection, id);
  verifyItemExists(collection, id);
  updateItem(collection, id);
  deleteItem(collection, id);
  tryToDeleteANonExistingItem(collection, id);
  verifyItemDoesNotExist(collection, id);
});

// Story: crud:Item:nondet:1:2
bthread("crud:Item:nondet:1:2", function () {
  let collection = 341;
  let id = 341;
  createItem(collection, id);
  // waitForItemAdded(collection, id);
  tryToAddExistingItem(collection, id);
  updateItem(collection, id);
  verifyItemExists(collection, id);
  deleteItem(collection, id);
  tryToDeleteANonExistingItem(collection, id);
  verifyItemDoesNotExist(collection, id);
});

// Story: crud:Item:nondet:negative:dup-add
bthread("crud:Item:nondet:negative:dup-add", function () {
  let collection = 346;
  let id = 346;
  createItem(collection, id);
  // waitForItemAdded(collection, id);
  verifyItemExists(collection, id);
  tryToAddExistingItem(collection, id);
  verifyItemExists(collection, id);
});

// Story: crud:Preset:nondet:1:1
bthread("crud:Preset:nondet:1:1", function () {
  let collection = "collection_350";
  let filters = "filters_350";
  let id = 350;
  let layout = "layout_350";
  let layout_options = "layout_options_350";
  let layout_query = "layout_query_350";
  let role = "role_350";
  let search = "search_350";
  let title = "title_350";
  createPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  // waitForPresetAdded(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  tryToAddExistingPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  verifyPresetExists(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  updatePreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  deletePreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  tryToDeleteANonExistingPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  verifyPresetDoesNotExist(collection, filters, id, layout, layout_options, layout_query, role, search, title);
});

// Story: crud:Preset:nondet:1:2
bthread("crud:Preset:nondet:1:2", function () {
  let collection = "collection_351";
  let filters = "filters_351";
  let id = 351;
  let layout = "layout_351";
  let layout_options = "layout_options_351";
  let layout_query = "layout_query_351";
  let role = "role_351";
  let search = "search_351";
  let title = "title_351";
  createPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  // waitForPresetAdded(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  tryToAddExistingPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  updatePreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  verifyPresetExists(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  deletePreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  tryToDeleteANonExistingPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  verifyPresetDoesNotExist(collection, filters, id, layout, layout_options, layout_query, role, search, title);
});

// Story: crud:Preset:nondet:negative:dup-add
bthread("crud:Preset:nondet:negative:dup-add", function () {
  let collection = "collection_356";
  let filters = "filters_356";
  let id = 356;
  let layout = "layout_356";
  let layout_options = "layout_options_356";
  let layout_query = "layout_query_356";
  let role = "role_356";
  let search = "search_356";
  let title = "title_356";
  createPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  // waitForPresetAdded(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  verifyPresetExists(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  tryToAddExistingPreset(collection, filters, id, layout, layout_options, layout_query, role, search, title);
  verifyPresetExists(collection, filters, id, layout, layout_options, layout_query, role, search, title);
});

// Story: crud:Collection:nondet:1:1
bthread("crud:Collection:nondet:1:1", function () {
  let archive_app_filter = "archive_app_filter_360";
  let archive_field = "archive_field_360";
  let archive_value = "archive_value_360";
  let collection = "collection_360";
  let display_template = "display_template_360";
  let fields = "fields_360";
  let hidden = "hidden_360";
  let icon = "icon_360";
  let id = 360;
  let note = "note_360";
  let singleton = "singleton_360";
  let sort_field = "sort_field_360";
  let translation = "translation_360";
  let unarchive_value = "unarchive_value_360";
  let versioning = "versioning_360";
  createCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  // waitForCollectionAdded(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToAddExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  updateCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  deleteCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToDeleteANonExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionDoesNotExist(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Collection:nondet:1:2
bthread("crud:Collection:nondet:1:2", function () {
  let archive_app_filter = "archive_app_filter_361";
  let archive_field = "archive_field_361";
  let archive_value = "archive_value_361";
  let collection = "collection_361";
  let display_template = "display_template_361";
  let fields = "fields_361";
  let hidden = "hidden_361";
  let icon = "icon_361";
  let id = 361;
  let note = "note_361";
  let singleton = "singleton_361";
  let sort_field = "sort_field_361";
  let translation = "translation_361";
  let unarchive_value = "unarchive_value_361";
  let versioning = "versioning_361";
  createCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  // waitForCollectionAdded(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToAddExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  updateCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  deleteCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToDeleteANonExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionDoesNotExist(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Collection:nondet:negative:dup-add
bthread("crud:Collection:nondet:negative:dup-add", function () {
  let archive_app_filter = "archive_app_filter_366";
  let archive_field = "archive_field_366";
  let archive_value = "archive_value_366";
  let collection = "collection_366";
  let display_template = "display_template_366";
  let fields = "fields_366";
  let hidden = "hidden_366";
  let icon = "icon_366";
  let id = 366;
  let note = "note_366";
  let singleton = "singleton_366";
  let sort_field = "sort_field_366";
  let translation = "translation_366";
  let unarchive_value = "unarchive_value_366";
  let versioning = "versioning_366";
  createCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  // waitForCollectionAdded(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToAddExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Comment:nondet:1:1
bthread("crud:Comment:nondet:1:1", function () {
  let collection = "collection_370";
  let comment = "comment_370";
  let id = 370;
  let item = "item_370";
  createComment(collection, comment, id, item);
  // waitForCommentAdded(collection, comment, id, item);
  tryToAddExistingComment(collection, comment, id, item);
  verifyCommentExists(collection, comment, id, item);
  updateComment(collection, comment, id, item);
  deleteComment(collection, comment, id, item);
  tryToDeleteANonExistingComment(collection, comment, id, item);
  verifyCommentDoesNotExist(collection, comment, id, item);
});

// Story: crud:Comment:nondet:1:2
bthread("crud:Comment:nondet:1:2", function () {
  let collection = "collection_371";
  let comment = "comment_371";
  let id = 371;
  let item = "item_371";
  createComment(collection, comment, id, item);
  // waitForCommentAdded(collection, comment, id, item);
  tryToAddExistingComment(collection, comment, id, item);
  updateComment(collection, comment, id, item);
  verifyCommentExists(collection, comment, id, item);
  deleteComment(collection, comment, id, item);
  tryToDeleteANonExistingComment(collection, comment, id, item);
  verifyCommentDoesNotExist(collection, comment, id, item);
});

// Story: crud:Comment:nondet:negative:dup-add
bthread("crud:Comment:nondet:negative:dup-add", function () {
  let collection = "collection_376";
  let comment = "comment_376";
  let id = 376;
  let item = "item_376";
  createComment(collection, comment, id, item);
  // waitForCommentAdded(collection, comment, id, item);
  verifyCommentExists(collection, comment, id, item);
  tryToAddExistingComment(collection, comment, id, item);
  verifyCommentExists(collection, comment, id, item);
});

// Story: crud:File:nondet:1:1
bthread("crud:File:nondet:1:1", function () {
  let data = "data_380";
  let id = 380;
  createFile(data, id);
  // waitForFileAdded(data, id);
  tryToAddExistingFile(data, id);
  verifyFileExists(data, id);
  updateFile(data, id);
  deleteFile(data, id);
  tryToDeleteANonExistingFile(data, id);
  verifyFileDoesNotExist(data, id);
});

// Story: crud:File:nondet:1:2
bthread("crud:File:nondet:1:2", function () {
  let data = "data_381";
  let id = 381;
  createFile(data, id);
  // waitForFileAdded(data, id);
  tryToAddExistingFile(data, id);
  updateFile(data, id);
  verifyFileExists(data, id);
  deleteFile(data, id);
  tryToDeleteANonExistingFile(data, id);
  verifyFileDoesNotExist(data, id);
});

// Story: crud:File:nondet:negative:dup-add
bthread("crud:File:nondet:negative:dup-add", function () {
  let data = "data_386";
  let id = 386;
  createFile(data, id);
  // waitForFileAdded(data, id);
  verifyFileExists(data, id);
  tryToAddExistingFile(data, id);
  verifyFileExists(data, id);
});

// Story: crud:Files:read_only
bthread("crud:Files:read_only", function () {

  verifyFilesExists();
});

// Story: crud:Flow:nondet:1:1
bthread("crud:Flow:nondet:1:1", function () {
  let id = 400;
  createFlow(id);
  // waitForFlowAdded(id);
  tryToAddExistingFlow(id);
  verifyFlowExists(id);
  updateFlow(id);
  deleteFlow(id);
  tryToDeleteANonExistingFlow(id);
  verifyFlowDoesNotExist(id);
});

// Story: crud:Flow:nondet:1:2
bthread("crud:Flow:nondet:1:2", function () {
  let id = 401;
  createFlow(id);
  // waitForFlowAdded(id);
  tryToAddExistingFlow(id);
  updateFlow(id);
  verifyFlowExists(id);
  deleteFlow(id);
  tryToDeleteANonExistingFlow(id);
  verifyFlowDoesNotExist(id);
});

// Story: crud:Flow:nondet:negative:dup-add
bthread("crud:Flow:nondet:negative:dup-add", function () {
  let id = 406;
  createFlow(id);
  // waitForFlowAdded(id);
  verifyFlowExists(id);
  tryToAddExistingFlow(id);
  verifyFlowExists(id);
});

// Story: crud:Folder:nondet:1:1
bthread("crud:Folder:nondet:1:1", function () {
  let id = 410;
  let name = "name_410";
  let parent = 410;
  createFolder(id, name, parent);
  // waitForFolderAdded(id, name, parent);
  tryToAddExistingFolder(id, name, parent);
  verifyFolderExists(id, name, parent);
  updateFolder(id, name, parent);
  deleteFolder(id, name, parent);
  tryToDeleteANonExistingFolder(id, name, parent);
  verifyFolderDoesNotExist(id, name, parent);
});

// Story: crud:Folder:nondet:1:2
bthread("crud:Folder:nondet:1:2", function () {
  let id = 411;
  let name = "name_411";
  let parent = 411;
  createFolder(id, name, parent);
  // waitForFolderAdded(id, name, parent);
  tryToAddExistingFolder(id, name, parent);
  updateFolder(id, name, parent);
  verifyFolderExists(id, name, parent);
  deleteFolder(id, name, parent);
  tryToDeleteANonExistingFolder(id, name, parent);
  verifyFolderDoesNotExist(id, name, parent);
});

// Story: crud:Folder:nondet:negative:dup-add
bthread("crud:Folder:nondet:negative:dup-add", function () {
  let id = 416;
  let name = "name_416";
  let parent = 416;
  createFolder(id, name, parent);
  // waitForFolderAdded(id, name, parent);
  verifyFolderExists(id, name, parent);
  tryToAddExistingFolder(id, name, parent);
  verifyFolderExists(id, name, parent);
});

// Story: crud:Operation:nondet:1:1
bthread("crud:Operation:nondet:1:1", function () {
  let id = 420;
  createOperation(id);
  // waitForOperationAdded(id);
  tryToAddExistingOperation(id);
  verifyOperationExists(id);
  updateOperation(id);
  deleteOperation(id);
  tryToDeleteANonExistingOperation(id);
  verifyOperationDoesNotExist(id);
});

// Story: crud:Operation:nondet:1:2
bthread("crud:Operation:nondet:1:2", function () {
  let id = 421;
  createOperation(id);
  // waitForOperationAdded(id);
  tryToAddExistingOperation(id);
  updateOperation(id);
  verifyOperationExists(id);
  deleteOperation(id);
  tryToDeleteANonExistingOperation(id);
  verifyOperationDoesNotExist(id);
});

// Story: crud:Operation:nondet:negative:dup-add
bthread("crud:Operation:nondet:negative:dup-add", function () {
  let id = 426;
  createOperation(id);
  // waitForOperationAdded(id);
  verifyOperationExists(id);
  tryToAddExistingOperation(id);
  verifyOperationExists(id);
});

// Story: crud:Relation:nondet:1:1
bthread("crud:Relation:nondet:1:1", function () {
  let collection_many = "collection_many_430";
  let collection_one = "collection_one_430";
  let field_many = "field_many_430";
  let field_one = "field_one_430";
  let id = 430;
  let junction_field = "junction_field_430";
  createRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  // waitForRelationAdded(collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToAddExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationExists(collection_many, collection_one, field_many, field_one, id, junction_field);
  updateRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  deleteRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToDeleteANonExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationDoesNotExist(collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Relation:nondet:1:2
bthread("crud:Relation:nondet:1:2", function () {
  let collection_many = "collection_many_431";
  let collection_one = "collection_one_431";
  let field_many = "field_many_431";
  let field_one = "field_one_431";
  let id = 431;
  let junction_field = "junction_field_431";
  createRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  // waitForRelationAdded(collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToAddExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  updateRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationExists(collection_many, collection_one, field_many, field_one, id, junction_field);
  deleteRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToDeleteANonExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationDoesNotExist(collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Relation:nondet:negative:dup-add
bthread("crud:Relation:nondet:negative:dup-add", function () {
  let collection_many = "collection_many_436";
  let collection_one = "collection_one_436";
  let field_many = "field_many_436";
  let field_one = "field_one_436";
  let id = 436;
  let junction_field = "junction_field_436";
  createRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  // waitForRelationAdded(collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationExists(collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToAddExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationExists(collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Revision:read_only
bthread("crud:Revision:read_only", function () {
  let id = 440;
  verifyRevisionExists(id);
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let description = "description_450";
  let enforce_tfa = "enforce_tfa_450";
  let external_id = 450;
  let id = 450;
  let ip_access = "ip_access_450";
  let module_listing = "module_listing_450";
  let name = "name_450";
  createRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  // waitForRoleAdded(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToAddExistingRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRoleExists(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  updateRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  deleteRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToDeleteANonExistingRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRoleDoesNotExist(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Role:nondet:1:2
bthread("crud:Role:nondet:1:2", function () {
  let description = "description_451";
  let enforce_tfa = "enforce_tfa_451";
  let external_id = 451;
  let id = 451;
  let ip_access = "ip_access_451";
  let module_listing = "module_listing_451";
  let name = "name_451";
  createRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  // waitForRoleAdded(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToAddExistingRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  updateRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRoleExists(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  deleteRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToDeleteANonExistingRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRoleDoesNotExist(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Role:nondet:negative:dup-add
bthread("crud:Role:nondet:negative:dup-add", function () {
  let description = "description_456";
  let enforce_tfa = "enforce_tfa_456";
  let external_id = 456;
  let id = 456;
  let ip_access = "ip_access_456";
  let module_listing = "module_listing_456";
  let name = "name_456";
  createRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  // waitForRoleAdded(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRoleExists(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToAddExistingRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRoleExists(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let actions = "actions_460";
  let data = "data_460";
  let id = 460;
  let method = "method_460";
  let name = "name_460";
  let status = "status_460";
  let system-collections = "system-collections_460";
  let url = "url_460";
  createWebhook(actions, data, id, method, name, status, system-collections, url);
  // waitForWebhookAdded(actions, data, id, method, name, status, system-collections, url);
  tryToAddExistingWebhook(actions, data, id, method, name, status, system-collections, url);
  verifyWebhookExists(actions, data, id, method, name, status, system-collections, url);
  updateWebhook(actions, data, id, method, name, status, system-collections, url);
  deleteWebhook(actions, data, id, method, name, status, system-collections, url);
  tryToDeleteANonExistingWebhook(actions, data, id, method, name, status, system-collections, url);
  verifyWebhookDoesNotExist(actions, data, id, method, name, status, system-collections, url);
});

// Story: crud:Webhook:nondet:1:2
bthread("crud:Webhook:nondet:1:2", function () {
  let actions = "actions_461";
  let data = "data_461";
  let id = 461;
  let method = "method_461";
  let name = "name_461";
  let status = "status_461";
  let system-collections = "system-collections_461";
  let url = "url_461";
  createWebhook(actions, data, id, method, name, status, system-collections, url);
  // waitForWebhookAdded(actions, data, id, method, name, status, system-collections, url);
  tryToAddExistingWebhook(actions, data, id, method, name, status, system-collections, url);
  updateWebhook(actions, data, id, method, name, status, system-collections, url);
  verifyWebhookExists(actions, data, id, method, name, status, system-collections, url);
  deleteWebhook(actions, data, id, method, name, status, system-collections, url);
  tryToDeleteANonExistingWebhook(actions, data, id, method, name, status, system-collections, url);
  verifyWebhookDoesNotExist(actions, data, id, method, name, status, system-collections, url);
});

// Story: crud:Webhook:nondet:negative:dup-add
bthread("crud:Webhook:nondet:negative:dup-add", function () {
  let actions = "actions_466";
  let data = "data_466";
  let id = 466;
  let method = "method_466";
  let name = "name_466";
  let status = "status_466";
  let system-collections = "system-collections_466";
  let url = "url_466";
  createWebhook(actions, data, id, method, name, status, system-collections, url);
  // waitForWebhookAdded(actions, data, id, method, name, status, system-collections, url);
  verifyWebhookExists(actions, data, id, method, name, status, system-collections, url);
  tryToAddExistingWebhook(actions, data, id, method, name, status, system-collections, url);
  verifyWebhookExists(actions, data, id, method, name, status, system-collections, url);
});

// Story: crud:Asset:read_only
bthread("crud:Asset:read_only", function () {
  let id = 470;
  verifyAssetExists(id);
});

// Story: crud:Setting:read_only
bthread("crud:Setting:read_only", function () {

  verifySettingExists();
});
