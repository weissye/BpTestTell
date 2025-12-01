// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
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

// Story: crud:CurrentUser:read_only
bthread("crud:CurrentUser:read_only", function () {

  verifyCurrentUserExists();
});

// Story: crud:CurrentUserTFA:nondet:1:1
bthread("crud:CurrentUserTFA:nondet:1:1", function () {

  meTfaEnable();
  // waitForCurrentUserTFAAdded();
  tryToAddExistingCurrentUserTFA();
  verifyCurrentUserTFAExists();
  meTfaDisable();
  tryToDeleteANonExistingCurrentUserTFA();
  verifyCurrentUserTFADoesNotExist();
});

// Story: crud:CurrentUserTFA:nondet:1:2
bthread("crud:CurrentUserTFA:nondet:1:2", function () {

  meTfaEnable();
  // waitForCurrentUserTFAAdded();
  tryToAddExistingCurrentUserTFA();
  verifyCurrentUserTFAExists();
  meTfaDisable();
  tryToDeleteANonExistingCurrentUserTFA();
  verifyCurrentUserTFADoesNotExist();
});

// Story: crud:CurrentUserTFA:nondet:negative:dup-add
bthread("crud:CurrentUserTFA:nondet:negative:dup-add", function () {

  meTfaEnable();
  // waitForCurrentUserTFAAdded();
  verifyCurrentUserTFAExists();
  tryToAddExistingCurrentUserTFA();
  verifyCurrentUserTFAExists();
});

// Story: crud:Versions:nondet:1:1
bthread("crud:Versions:nondet:1:1", function () {
  let collection = "collection_270";
  let id = 270;
  let item = "item_270";
  let key = "key_270";
  let name = "name_270";
  createContentVersion(collection, id, item, key, name);
  // waitForVersionsAdded(collection, id, item, key, name);
  tryToAddExistingVersions(collection, id, item, key, name);
  verifyVersionsExists(collection, id, item, key, name);
  updateContentVersion(collection, id, item, key, name);
  deleteContentVersion(collection, id, item, key, name);
  tryToDeleteANonExistingVersions(collection, id, item, key, name);
  verifyVersionsDoesNotExist(collection, id, item, key, name);
});

// Story: crud:Versions:nondet:1:2
bthread("crud:Versions:nondet:1:2", function () {
  let collection = "collection_271";
  let id = 271;
  let item = "item_271";
  let key = "key_271";
  let name = "name_271";
  createContentVersion(collection, id, item, key, name);
  // waitForVersionsAdded(collection, id, item, key, name);
  tryToAddExistingVersions(collection, id, item, key, name);
  updateContentVersion(collection, id, item, key, name);
  verifyVersionsExists(collection, id, item, key, name);
  deleteContentVersion(collection, id, item, key, name);
  tryToDeleteANonExistingVersions(collection, id, item, key, name);
  verifyVersionsDoesNotExist(collection, id, item, key, name);
});

// Story: crud:Versions:nondet:negative:dup-add
bthread("crud:Versions:nondet:negative:dup-add", function () {
  let collection = "collection_276";
  let id = 276;
  let item = "item_276";
  let key = "key_276";
  let name = "name_276";
  createContentVersion(collection, id, item, key, name);
  // waitForVersionsAdded(collection, id, item, key, name);
  verifyVersionsExists(collection, id, item, key, name);
  tryToAddExistingVersions(collection, id, item, key, name);
  verifyVersionsExists(collection, id, item, key, name);
});

// Story: crud:Extension:read_only
bthread("crud:Extension:read_only", function () {
  let bundle = "bundle_280";
  let name = 280;
  verifyExtensionExists(bundle, name);
});

// Story: crud:Field:nondet:1:1
bthread("crud:Field:nondet:1:1", function () {
  let collection = 290;
  let datatype = "datatype_290";
  let field = "field_290";
  let id = 290;
  let length = "length_290";
  let type = "type_290";
  createField(collection, datatype, field, id, length, type);
  // waitForFieldAdded(collection, datatype, field, id, length, type);
  tryToAddExistingField(collection, datatype, field, id, length, type);
  verifyFieldExists(collection, datatype, field, id, length, type);
  updateField(collection, datatype, field, id, length, type);
  deleteField(collection, datatype, field, id, length, type);
  tryToDeleteANonExistingField(collection, datatype, field, id, length, type);
  verifyFieldDoesNotExist(collection, datatype, field, id, length, type);
});

// Story: crud:Field:nondet:1:2
bthread("crud:Field:nondet:1:2", function () {
  let collection = 291;
  let datatype = "datatype_291";
  let field = "field_291";
  let id = 291;
  let length = "length_291";
  let type = "type_291";
  createField(collection, datatype, field, id, length, type);
  // waitForFieldAdded(collection, datatype, field, id, length, type);
  tryToAddExistingField(collection, datatype, field, id, length, type);
  updateField(collection, datatype, field, id, length, type);
  verifyFieldExists(collection, datatype, field, id, length, type);
  deleteField(collection, datatype, field, id, length, type);
  tryToDeleteANonExistingField(collection, datatype, field, id, length, type);
  verifyFieldDoesNotExist(collection, datatype, field, id, length, type);
});

// Story: crud:Field:nondet:negative:dup-add
bthread("crud:Field:nondet:negative:dup-add", function () {
  let collection = 296;
  let datatype = "datatype_296";
  let field = "field_296";
  let id = 296;
  let length = "length_296";
  let type = "type_296";
  createField(collection, datatype, field, id, length, type);
  // waitForFieldAdded(collection, datatype, field, id, length, type);
  verifyFieldExists(collection, datatype, field, id, length, type);
  tryToAddExistingField(collection, datatype, field, id, length, type);
  verifyFieldExists(collection, datatype, field, id, length, type);
});

// Story: crud:Permission:nondet:1:1
bthread("crud:Permission:nondet:1:1", function () {
  let collection = "collection_300";
  let comment = "comment_300";
  let create = "create_300";
  let delete = "delete_300";
  let explain = "explain_300";
  let id = 300;
  let read = "read_300";
  let read_field_blacklist = "read_field_blacklist_300";
  let role = 300;
  let status = "status_300";
  let status_blacklist = "status_blacklist_300";
  let update = "update_300";
  let write_field_blacklist = "write_field_blacklist_300";
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
  let collection = "collection_301";
  let comment = "comment_301";
  let create = "create_301";
  let delete = "delete_301";
  let explain = "explain_301";
  let id = 301;
  let read = "read_301";
  let read_field_blacklist = "read_field_blacklist_301";
  let role = 301;
  let status = "status_301";
  let status_blacklist = "status_blacklist_301";
  let update = "update_301";
  let write_field_blacklist = "write_field_blacklist_301";
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
  let collection = "collection_306";
  let comment = "comment_306";
  let create = "create_306";
  let delete = "delete_306";
  let explain = "explain_306";
  let id = 306;
  let read = "read_306";
  let read_field_blacklist = "read_field_blacklist_306";
  let role = 306;
  let status = "status_306";
  let status_blacklist = "status_blacklist_306";
  let update = "update_306";
  let write_field_blacklist = "write_field_blacklist_306";
  createPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  // waitForPermissionAdded(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionExists(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  tryToAddExistingPermission(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
  verifyPermissionExists(collection, comment, create, delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist);
});

// Story: crud:Schema:read_only
bthread("crud:Schema:read_only", function () {
  let data = "data_310";
  let force = "force_310";
  verifySchemaExists(data, force);
});

// Story: crud:Activity:read_only
bthread("crud:Activity:read_only", function () {
  let id = 320;
  verifyActivityExists(id);
});

// Story: crud:Item:nondet:1:1
bthread("crud:Item:nondet:1:1", function () {
  let collection = 330;
  let id = 330;
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
  let collection = 331;
  let id = 331;
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
  let collection = 336;
  let id = 336;
  createItem(collection, id);
  // waitForItemAdded(collection, id);
  verifyItemExists(collection, id);
  tryToAddExistingItem(collection, id);
  verifyItemExists(collection, id);
});

// Story: crud:Preset:nondet:1:1
bthread("crud:Preset:nondet:1:1", function () {
  let collection = "collection_340";
  let id = 340;
  createPreset(collection, id);
  // waitForPresetAdded(collection, id);
  tryToAddExistingPreset(collection, id);
  verifyPresetExists(collection, id);
  updatePreset(collection, id);
  deletePreset(collection, id);
  tryToDeleteANonExistingPreset(collection, id);
  verifyPresetDoesNotExist(collection, id);
});

// Story: crud:Preset:nondet:1:2
bthread("crud:Preset:nondet:1:2", function () {
  let collection = "collection_341";
  let id = 341;
  createPreset(collection, id);
  // waitForPresetAdded(collection, id);
  tryToAddExistingPreset(collection, id);
  updatePreset(collection, id);
  verifyPresetExists(collection, id);
  deletePreset(collection, id);
  tryToDeleteANonExistingPreset(collection, id);
  verifyPresetDoesNotExist(collection, id);
});

// Story: crud:Preset:nondet:negative:dup-add
bthread("crud:Preset:nondet:negative:dup-add", function () {
  let collection = "collection_346";
  let id = 346;
  createPreset(collection, id);
  // waitForPresetAdded(collection, id);
  verifyPresetExists(collection, id);
  tryToAddExistingPreset(collection, id);
  verifyPresetExists(collection, id);
});

// Story: crud:Collection:nondet:1:1
bthread("crud:Collection:nondet:1:1", function () {
  let archive_app_filter = "archive_app_filter_350";
  let archive_field = "archive_field_350";
  let archive_value = "archive_value_350";
  let collection = "collection_350";
  let display_template = "display_template_350";
  let fields = "fields_350";
  let hidden = "hidden_350";
  let icon = "icon_350";
  let id = 350;
  let meta = "meta_350";
  let note = "note_350";
  let singleton = "singleton_350";
  let sort_field = "sort_field_350";
  let translation = "translation_350";
  let unarchive_value = "unarchive_value_350";
  let versioning = "versioning_350";
  createCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  // waitForCollectionAdded(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToAddExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  updateCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  deleteCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToDeleteANonExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionDoesNotExist(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Collection:nondet:1:2
bthread("crud:Collection:nondet:1:2", function () {
  let archive_app_filter = "archive_app_filter_351";
  let archive_field = "archive_field_351";
  let archive_value = "archive_value_351";
  let collection = "collection_351";
  let display_template = "display_template_351";
  let fields = "fields_351";
  let hidden = "hidden_351";
  let icon = "icon_351";
  let id = 351;
  let meta = "meta_351";
  let note = "note_351";
  let singleton = "singleton_351";
  let sort_field = "sort_field_351";
  let translation = "translation_351";
  let unarchive_value = "unarchive_value_351";
  let versioning = "versioning_351";
  createCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  // waitForCollectionAdded(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToAddExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  updateCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  deleteCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToDeleteANonExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionDoesNotExist(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Collection:nondet:negative:dup-add
bthread("crud:Collection:nondet:negative:dup-add", function () {
  let archive_app_filter = "archive_app_filter_356";
  let archive_field = "archive_field_356";
  let archive_value = "archive_value_356";
  let collection = "collection_356";
  let display_template = "display_template_356";
  let fields = "fields_356";
  let hidden = "hidden_356";
  let icon = "icon_356";
  let id = 356;
  let meta = "meta_356";
  let note = "note_356";
  let singleton = "singleton_356";
  let sort_field = "sort_field_356";
  let translation = "translation_356";
  let unarchive_value = "unarchive_value_356";
  let versioning = "versioning_356";
  createCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  // waitForCollectionAdded(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  tryToAddExistingCollection(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
  verifyCollectionExists(archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning);
});

// Story: crud:Comment:nondet:1:1
bthread("crud:Comment:nondet:1:1", function () {
  let collection = "collection_360";
  let comment = "comment_360";
  let id = 360;
  let item = "item_360";
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
  let collection = "collection_361";
  let comment = "comment_361";
  let id = 361;
  let item = "item_361";
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
  let collection = "collection_366";
  let comment = "comment_366";
  let id = 366;
  let item = "item_366";
  createComment(collection, comment, id, item);
  // waitForCommentAdded(collection, comment, id, item);
  verifyCommentExists(collection, comment, id, item);
  tryToAddExistingComment(collection, comment, id, item);
  verifyCommentExists(collection, comment, id, item);
});

// Story: crud:File:nondet:1:1
bthread("crud:File:nondet:1:1", function () {
  let data = "data_370";
  let id = 370;
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
  let data = "data_371";
  let id = 371;
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
  let data = "data_376";
  let id = 376;
  createFile(data, id);
  // waitForFileAdded(data, id);
  verifyFileExists(data, id);
  tryToAddExistingFile(data, id);
  verifyFileExists(data, id);
});

// Story: crud:Flow:nondet:1:1
bthread("crud:Flow:nondet:1:1", function () {
  let id = 380;
  let name = "name_380";
  createFlow(id, name);
  // waitForFlowAdded(id, name);
  tryToAddExistingFlow(id, name);
  verifyFlowExists(id, name);
  updateFlow(id, name);
  deleteFlow(id, name);
  tryToDeleteANonExistingFlow(id, name);
  verifyFlowDoesNotExist(id, name);
});

// Story: crud:Flow:nondet:1:2
bthread("crud:Flow:nondet:1:2", function () {
  let id = 381;
  let name = "name_381";
  createFlow(id, name);
  // waitForFlowAdded(id, name);
  tryToAddExistingFlow(id, name);
  updateFlow(id, name);
  verifyFlowExists(id, name);
  deleteFlow(id, name);
  tryToDeleteANonExistingFlow(id, name);
  verifyFlowDoesNotExist(id, name);
});

// Story: crud:Flow:nondet:negative:dup-add
bthread("crud:Flow:nondet:negative:dup-add", function () {
  let id = 386;
  let name = "name_386";
  createFlow(id, name);
  // waitForFlowAdded(id, name);
  verifyFlowExists(id, name);
  tryToAddExistingFlow(id, name);
  verifyFlowExists(id, name);
});

// Story: crud:Folder:nondet:1:1
bthread("crud:Folder:nondet:1:1", function () {
  let id = 390;
  let name = "name_390";
  createFolder(id, name);
  // waitForFolderAdded(id, name);
  tryToAddExistingFolder(id, name);
  verifyFolderExists(id, name);
  updateFolder(id, name);
  deleteFolder(id, name);
  tryToDeleteANonExistingFolder(id, name);
  verifyFolderDoesNotExist(id, name);
});

// Story: crud:Folder:nondet:1:2
bthread("crud:Folder:nondet:1:2", function () {
  let id = 391;
  let name = "name_391";
  createFolder(id, name);
  // waitForFolderAdded(id, name);
  tryToAddExistingFolder(id, name);
  updateFolder(id, name);
  verifyFolderExists(id, name);
  deleteFolder(id, name);
  tryToDeleteANonExistingFolder(id, name);
  verifyFolderDoesNotExist(id, name);
});

// Story: crud:Folder:nondet:negative:dup-add
bthread("crud:Folder:nondet:negative:dup-add", function () {
  let id = 396;
  let name = "name_396";
  createFolder(id, name);
  // waitForFolderAdded(id, name);
  verifyFolderExists(id, name);
  tryToAddExistingFolder(id, name);
  verifyFolderExists(id, name);
});

// Story: crud:Operation:nondet:1:1
bthread("crud:Operation:nondet:1:1", function () {
  let date_created = "date_created_400";
  let id = 400;
  let key = "key_400";
  let name = "name_400";
  let operation = "operation_400";
  let options = "options_400";
  let position_x = "position_x_400";
  let position_y = "position_y_400";
  let reject = "reject_400";
  let resolve = "resolve_400";
  let type = "type_400";
  let user_created = "user_created_400";
  createOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  // waitForOperationAdded(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  tryToAddExistingOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  verifyOperationExists(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  updateOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  deleteOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  tryToDeleteANonExistingOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  verifyOperationDoesNotExist(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
});

// Story: crud:Operation:nondet:1:2
bthread("crud:Operation:nondet:1:2", function () {
  let date_created = "date_created_401";
  let id = 401;
  let key = "key_401";
  let name = "name_401";
  let operation = "operation_401";
  let options = "options_401";
  let position_x = "position_x_401";
  let position_y = "position_y_401";
  let reject = "reject_401";
  let resolve = "resolve_401";
  let type = "type_401";
  let user_created = "user_created_401";
  createOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  // waitForOperationAdded(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  tryToAddExistingOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  updateOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  verifyOperationExists(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  deleteOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  tryToDeleteANonExistingOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  verifyOperationDoesNotExist(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
});

// Story: crud:Operation:nondet:negative:dup-add
bthread("crud:Operation:nondet:negative:dup-add", function () {
  let date_created = "date_created_406";
  let id = 406;
  let key = "key_406";
  let name = "name_406";
  let operation = "operation_406";
  let options = "options_406";
  let position_x = "position_x_406";
  let position_y = "position_y_406";
  let reject = "reject_406";
  let resolve = "resolve_406";
  let type = "type_406";
  let user_created = "user_created_406";
  createOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  // waitForOperationAdded(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  verifyOperationExists(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  tryToAddExistingOperation(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
  verifyOperationExists(date_created, id, key, name, operation, options, position_x, position_y, reject, resolve, type, user_created);
});

// Story: crud:Relation:nondet:1:1
bthread("crud:Relation:nondet:1:1", function () {
  let collection_many = "collection_many_410";
  let collection_one = "collection_one_410";
  let field_many = "field_many_410";
  let field_one = "field_one_410";
  let id = 410;
  let junction_field = "junction_field_410";
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
  let collection_many = "collection_many_411";
  let collection_one = "collection_one_411";
  let field_many = "field_many_411";
  let field_one = "field_one_411";
  let id = 411;
  let junction_field = "junction_field_411";
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
  let collection_many = "collection_many_416";
  let collection_one = "collection_one_416";
  let field_many = "field_many_416";
  let field_one = "field_one_416";
  let id = 416;
  let junction_field = "junction_field_416";
  createRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  // waitForRelationAdded(collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationExists(collection_many, collection_one, field_many, field_one, id, junction_field);
  tryToAddExistingRelation(collection_many, collection_one, field_many, field_one, id, junction_field);
  verifyRelationExists(collection_many, collection_one, field_many, field_one, id, junction_field);
});

// Story: crud:Revision:read_only
bthread("crud:Revision:read_only", function () {
  let id = 420;
  verifyRevisionExists(id);
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let description = "description_430";
  let enforce_tfa = "enforce_tfa_430";
  let external_id = 430;
  let id = 430;
  let ip_access = "ip_access_430";
  let module_listing = "module_listing_430";
  let name = "name_430";
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
  let description = "description_431";
  let enforce_tfa = "enforce_tfa_431";
  let external_id = 431;
  let id = 431;
  let ip_access = "ip_access_431";
  let module_listing = "module_listing_431";
  let name = "name_431";
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
  let description = "description_436";
  let enforce_tfa = "enforce_tfa_436";
  let external_id = 436;
  let id = 436;
  let ip_access = "ip_access_436";
  let module_listing = "module_listing_436";
  let name = "name_436";
  createRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  // waitForRoleAdded(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRoleExists(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  tryToAddExistingRole(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
  verifyRoleExists(description, enforce_tfa, external_id, id, ip_access, module_listing, name);
});

// Story: crud:Webhook:nondet:1:1
bthread("crud:Webhook:nondet:1:1", function () {
  let actions = "actions_440";
  let data = "data_440";
  let id = 440;
  let method = "method_440";
  let name = "name_440";
  let status = "status_440";
  let system-collections = "system-collections_440";
  let url = "url_440";
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
  let actions = "actions_441";
  let data = "data_441";
  let id = 441;
  let method = "method_441";
  let name = "name_441";
  let status = "status_441";
  let system-collections = "system-collections_441";
  let url = "url_441";
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
  let actions = "actions_446";
  let data = "data_446";
  let id = 446;
  let method = "method_446";
  let name = "name_446";
  let status = "status_446";
  let system-collections = "system-collections_446";
  let url = "url_446";
  createWebhook(actions, data, id, method, name, status, system-collections, url);
  // waitForWebhookAdded(actions, data, id, method, name, status, system-collections, url);
  verifyWebhookExists(actions, data, id, method, name, status, system-collections, url);
  tryToAddExistingWebhook(actions, data, id, method, name, status, system-collections, url);
  verifyWebhookExists(actions, data, id, method, name, status, system-collections, url);
});

// Story: crud:Asset:read_only
bthread("crud:Asset:read_only", function () {
  let download = "download_450";
  let id = 450;
  let key = "key_450";
  let transforms = "transforms_450";
  verifyAssetExists(download, id, key, transforms);
});

// Story: crud:Settings:read_only
bthread("crud:Settings:read_only", function () {

  verifySettingsExists();
});
