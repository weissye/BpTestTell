//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("http://localhost:8080", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: user ----

function createUser() {
  var url = "/users";
  var description = "Create a user";
  var body = {
    "user": user,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteUser(id) {
  var url = "/users/" + id;
  var description = "Delete user " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateUser(id) {
  var url = "/users/" + id;
  var description = "Update user " + id;
  var body = {
    "user": user,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUser(id) {
  var url = "/users/" + id;
  var description = "Retrieve user " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUser(id) {
  return createUser();
}

function verifyUserExists(id) {
  return getUser(id);
}

function verifyUserDoesNotExist(id) {
  return getUser(id);
}

function tryToDeleteANonExistingUser(id) {
  return deleteUser(id);
}

// ---- Entity: auth ----

function login(email, password, mode, otp) {
  var url = "/auth/login";
  var description = "Retrieve a Temporary Access Token for " + email;
  var body = {
    "email": email,
    "password": password,
    "mode": mode,
    "otp": otp,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function refresh(refresh_token, mode) {
  var url = "/auth/refresh";
  var description = "Refresh Token";
  var body = {
    "refresh_token": refresh_token,
    "mode": mode,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function logout(refresh_token, mode) {
  var url = "/auth/logout";
  var description = "Log Out";
  var body = {
    "refresh_token": refresh_token,
    "mode": mode,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function passwordRequest(email) {
  var url = "/auth/password/request";
  var description = "Request a Password Reset for " + email;
  var body = {
    "email": email,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function passwordReset(token, password) {
  var url = "/auth/password/reset";
  var description = "Reset a Password using token " + token;
  var body = {
    "token": token,
    "password": password,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function oauth() {
  var url = "/auth/oauth";
  var description = "List OAuth Providers";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function oauthProvider(provider, redirect) {
  var url = "/auth/oauth/" + provider;
  var description = "Authenticated using OAuth provider " + provider;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAuth(email, password, mode, otp, refresh_token, token, provider, redirect) {
  return login(email, password, mode, otp);
}

function tryToDeleteANonExistingAuth(email, password, mode, otp, refresh_token, token, provider, redirect) {
  return logout(refresh_token, mode);
}

// ---- Entity: hash ----

function generateHash(string) {
  var url = "/utils/hash/generate";
  var description = "Hash a string";
  var body = {
    "string": string,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyHash(string, hash) {
  var url = "/utils/hash/verify";
  var description = "Verify hash for string";
  var body = {
    "string": string,
    "hash": hash,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingHash(string, hash) {
  return generateHash(string);
}

function verifyHashExists(string, hash) {
  return verifyHash(string, hash);
}

function verifyHashDoesNotExist(string, hash) {
  return verifyHash(string, hash);
}

// ---- Entity: collection item ----

function sortItems(collection, item, to) {
  var url = "/utils/sort/" + collection;
  var description = "Sort items in collection " + collection;
  var body = {
    "item": item,
    "to": to,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function importItems(collection) {
  var url = "/utils/import/" + collection;
  var description = "Import items into collection " + collection;
  var body = {
    "file": file,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function exportItems(collection, format, query, file) {
  var url = "/utils/export/" + collection;
  var description = "Export items from collection " + collection + " in format " + format;
  var body = {
    "format": format,
    "query": query,
    "file": file,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCollectionItems(collection, item, to, format, query, file) {
  return importItems(collection);
}

function verifyCollectionItemsExists(collection, item, to, format, query, file) {
  return exportItems(collection, format, query, file);
}

function verifyCollectionItemsDoesNotExist(collection, item, to, format, query, file) {
  return exportItems(collection, format, query, file);
}

// ---- Entity: cache ----

function clearCache() {
  var url = "/utils/cache/clear";
  var description = "Clear Cache";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingCache() {
  return clearCache();
}

// ---- Entity: random string ----

function getRandomString(length) {
  var url = "/utils/random/string";
  var description = "Get a Random String of length " + length;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRandomStringExists(length) {
  return getRandomString(length);
}

function verifyRandomStringDoesNotExist(length) {
  return getRandomString(length);
}

// ---- Entity: content version ----

function createContentVersion() {
  var url = "/versions";
  var description = "Create content version";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteContentVersion(id) {
  var url = "/versions/" + id;
  var description = "Delete content version " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateContentVersion(id) {
  var url = "/versions/" + id;
  var description = "Update content version " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getContentVersion(id) {
  var url = "/versions/" + id;
  var description = "Retrieve content version " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingContentVersion(id) {
  return createContentVersion();
}

function verifyContentVersionExists(id) {
  return getContentVersion(id);
}

function verifyContentVersionDoesNotExist(id) {
  return getContentVersion(id);
}

function tryToDeleteANonExistingContentVersion(id) {
  return deleteContentVersion(id);
}

// ---- Entity: content versions ----

function createContentVersion() {
  var url = "/versions";
  var description = "Create multiple content versions";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteContentVersions() {
  var url = "/versions";
  var description = "Delete multiple content versions";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateContentVersions() {
  var url = "/versions";
  var description = "Update multiple content versions";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getContentVersions() {
  var url = "/versions";
  var description = "List content versions";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingContentVersionsBulk() {
  return createContentVersion();
}

function verifyContentVersionsBulkExists() {
  return getContentVersions();
}

function verifyContentVersionsBulkDoesNotExist() {
  return getContentVersions();
}

function tryToDeleteANonExistingContentVersionsBulk() {
  return deleteContentVersions();
}

// ---- Entity: extension ----

function listExtensions() {
  var url = "/extensions";
  var description = "List Extensions";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateExtension(name) {
  var url = "/extensions/" + name;
  var description = "Update extension " + name;
  var body = {
    "meta": {
      "enabled": enabled,
    },
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyExtensionExists(name) {
  return listExtensions();
}

function verifyExtensionDoesNotExist(name) {
  return listExtensions();
}

// ---- Entity: extension bundle ----

function updateExtensionBundle(bundle, name) {
  var url = "/extensions/" + bundle + "/" + name;
  var description = "Update extension " + name + " in bundle " + bundle;
  var body = {
    "meta": {
      "enabled": enabled,
    },
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: field ----

function createField(collection, field) {
  var url = "/fields/" + collection;
  var description = "Create field " + field + " in collection " + collection;
  var body = {
    "field": field,
    "datatype": datatype,
    "type": type,
    "length": length,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteField(collection, id) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Delete field " + id + " in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateField(collection, id) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Update field " + id + " in collection " + collection;
  var body = {
    "field": field,
    "type": type,
    "schema": schema,
    "meta": meta,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getField(collection, id) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Get field " + id + " in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingField(collection, field, id) {
  return createField(collection, field);
}

function verifyFieldExists(collection, field, id) {
  return getField(collection, id);
}

function verifyFieldDoesNotExist(collection, field, id) {
  return getField(collection, id);
}

function tryToDeleteANonExistingField(collection, field, id) {
  return deleteField(collection, id);
}

// ---- Entity: permission ----

function createPermission(collection, role) {
  var url = "/permissions";
  var description = "Create a permission for collection " + collection + " and role " + role;
  var body = {
    "collection": collection,
    "comment": comment,
    "create": create,
    "delete": delete,
    "explain": explain,
    "read": read,
    "role": role,
    "read_field_blacklist": read_field_blacklist,
    "status": status,
    "status_blacklist": status_blacklist,
    "update": update,
    "write_field_blacklist": write_field_blacklist,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePermission(id) {
  var url = "/permissions/" + id;
  var description = "Delete permission " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePermission(id) {
  var url = "/permissions/" + id;
  var description = "Update permission " + id;
  var body = {
    "collection": collection,
    "comment": comment,
    "create": create,
    "delete": delete,
    "explain": explain,
    "read": read,
    "role": role,
    "read_field_blacklist": read_field_blacklist,
    "status": status,
    "status_blacklist": status_blacklist,
    "update": update,
    "write_field_blacklist": write_field_blacklist,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPermission(id) {
  var url = "/permissions/" + id;
  var description = "Retrieve permission " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPermission(collection, role, id) {
  return createPermission(collection, role);
}

function verifyPermissionExists(collection, role, id) {
  return getPermission(id);
}

function verifyPermissionDoesNotExist(collection, role, id) {
  return getPermission(id);
}

function tryToDeleteANonExistingPermission(collection, role, id) {
  return deletePermission(id);
}

// ---- Entity: schema ----

function getSchemaSnapshot() {
  var url = "/schema/snapshot";
  var description = "Retrieve schema snapshot";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function applySchemaDifference() {
  var url = "/schema/apply";
  var description = "Apply schema difference";
  var body = {
    "data": data,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function retrieveSchemaDifference(force) {
  var url = "/schema/diff";
  var description = "Retrieve schema difference";
  var body = {
    "data": data,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSchema(force) {
  return applySchemaDifference();
}

function verifySchemaExists(force) {
  return getSchemaSnapshot();
}

function verifySchemaDoesNotExist(force) {
  return getSchemaSnapshot();
}

// ---- Entity: activity ----

function getActivity(id) {
  var url = "/activity/" + id;
  var description = "Retrieve an Activity Action " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getActivities() {
  var url = "/activity";
  var description = "List Activity Actions";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyActivityExists(id) {
  return getActivity(id);
}

function verifyActivityDoesNotExist(id) {
  return getActivity(id);
}

// ---- Entity: item ----

function createItem(collection) {
  var url = "/items/" + collection;
  var description = "Create an item in " + collection;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Delete item " + id + " from " + collection;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Update item " + id + " in " + collection;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Retrieve item " + id + " from " + collection;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingItem(collection, id) {
  return createItem(collection);
}

function verifyItemExists(collection, id) {
  return getItem(collection, id);
}

function verifyItemDoesNotExist(collection, id) {
  return getItem(collection, id);
}

function tryToDeleteANonExistingItem(collection, id) {
  return deleteItem(collection, id);
}

// ---- Entity: preset ----

function createPreset(collection) {
  var url = "/presets";
  var description = "Create a Preset for collection " + collection;
  var body = {
    "collection": collection,
    "title": title,
    "role": role,
    "search": search,
    "filters": filters,
    "layout": layout,
    "layout_query": layout_query,
    "layout_options": layout_options,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePreset(id) {
  var url = "/presets/" + id;
  var description = "Delete preset " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePreset(id, collection) {
  var url = "/presets/" + id;
  var description = "Update preset " + id + " for collection " + collection;
  var body = {
    "collection": collection,
    "title": title,
    "role": role,
    "search_query": search_query,
    "filters": filters,
    "view_type": view_type,
    "view_query": view_query,
    "view_options": view_options,
    "translation": translation,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPreset(id) {
  var url = "/presets/" + id;
  var description = "Retrieve preset " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePresets() {
  var url = "/presets";
  var description = "Update multiple presets";
  var body = {
    "keys": keys,
    "data": {
      "collection": collection,
      "title": title,
      "role": role,
      "search": search,
      "filters": filters,
      "layout": layout,
      "layout_query": layout_query,
      "layout_options": layout_options,
    },
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePresets() {
  var url = "/presets";
  var description = "Delete multiple presets";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPresets() {
  var url = "/presets";
  var description = "List presets";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPreset(collection, id) {
  return createPreset(collection);
}

function verifyPresetExists(collection, id) {
  return getPreset(id);
}

function verifyPresetDoesNotExist(collection, id) {
  return getPreset(id);
}

function tryToDeleteANonExistingPreset(collection, id) {
  return deletePreset(id);
}

// ---- Entity: collection ----

function createCollection(collection) {
  var url = "/collections";
  var description = "Create a collection " + collection;
  var body = {
    "collection": collection,
    "fields": fields,
    "icon": icon,
    "note": note,
    "display_template": display_template,
    "hidden": hidden,
    "singleton": singleton,
    "translation": translation,
    "versioning": versioning,
    "archive_field": archive_field,
    "archive_app_filter": archive_app_filter,
    "archive_value": archive_value,
    "unarchive_value": unarchive_value,
    "sort_field": sort_field,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCollection(id) {
  var url = "/collections/" + id;
  var description = "Retrieve collection " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateCollection(id) {
  var url = "/collections/" + id;
  var description = "Update collection " + id;
  var body = {
    "meta": {
      "icon": icon,
      "color": color,
      "note": note,
      "display_template": display_template,
      "hidden": hidden,
      "singleton": singleton,
      "translation": translation,
      "versioning": versioning,
      "archive_field": archive_field,
      "archive_app_filter": archive_app_filter,
      "archive_value": archive_value,
      "unarchive_value": unarchive_value,
      "sort_field": sort_field,
    },
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCollection(id) {
  var url = "/collections/" + id;
  var description = "Delete collection " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCollection(collection, id) {
  return createCollection(collection);
}

function verifyCollectionExists(collection, id) {
  return getCollection(id);
}

function verifyCollectionDoesNotExist(collection, id) {
  return getCollection(id);
}

function tryToDeleteANonExistingCollection(collection, id) {
  return deleteCollection(id);
}

// ---- Entity: comment ----

function createComment(collection, item, comment) {
  var url = "/comments";
  var description = "Create a comment for collection " + collection + " item " + item;
  var body = {
    "collection": collection,
    "item": item,
    "comment": comment,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteComment(id) {
  var url = "/comments/" + id;
  var description = "Delete comment " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateComment(id, collection, item, comment) {
  var url = "/comments/" + id;
  var description = "Update comment " + id + " for collection " + collection;
  var body = {
    "collection": collection,
    "item": item,
    "comment": comment,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getComment(id) {
  var url = "/comments/" + id;
  var description = "Retrieve comment " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingComment(collection, item, comment, id) {
  return createComment(collection, item, comment);
}

function verifyCommentExists(collection, item, comment, id) {
  return getComment(id);
}

function verifyCommentDoesNotExist(collection, item, comment, id) {
  return getComment(id);
}

function tryToDeleteANonExistingComment(collection, item, comment, id) {
  return deleteComment(id);
}

// ---- Entity: comments ----

function getComments() {
  var url = "/comments";
  var description = "List comments";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateComments(collection, keys, item, comment) {
  var url = "/comments";
  var description = "Update multiple comments for collection " + collection;
  var body = {
    "keys": keys,
    "data": {
      "collection": collection,
      "item": item,
      "comment": comment,
    },
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteComments() {
  var url = "/comments";
  var description = "Delete multiple comments";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyCommentsBulkExists(collection, keys, item, comment) {
  return getComments();
}

function verifyCommentsBulkDoesNotExist(collection, keys, item, comment) {
  return getComments();
}

function tryToDeleteANonExistingCommentsBulk(collection, keys, item, comment) {
  return deleteComments();
}

// ---- Entity: file ----

function createFile() {
  var url = "/files";
  var description = "Create a file";
  var body = {
    "data": data,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFile(id) {
  var url = "/files/" + id;
  var description = "Delete file " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFile(id) {
  var url = "/files/" + id;
  var description = "Update file " + id;
  var body = {
    "title": title,
    "filename_download": filename_download,
    "description": description,
    "folder": folder,
    "tags": tags,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFile(id) {
  var url = "/files/" + id;
  var description = "Retrieve file " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFile(id) {
  return createFile();
}

function verifyFileExists(id) {
  return getFile(id);
}

function verifyFileDoesNotExist(id) {
  return getFile(id);
}

function tryToDeleteANonExistingFile(id) {
  return deleteFile(id);
}

// ---- Entity: files ----

function getFiles() {
  var url = "/files";
  var description = "List files";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFiles() {
  var url = "/files";
  var description = "Update multiple files";
  var body = {
    "data": {
      "data": data,
    },
    "keys": keys,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFiles() {
  var url = "/files";
  var description = "Delete multiple files";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFilesExists() {
  return getFiles();
}

function verifyFilesDoesNotExist() {
  return getFiles();
}

function tryToDeleteANonExistingFiles() {
  return deleteFiles();
}

// ---- Entity: flow ----

function createFlow() {
  var url = "/flows";
  var description = "Create a Flow";
  var body = {
    "data": flowData,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFlow(id) {
  var url = "/flows/" + id;
  var description = "Delete a Flow " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFlow(id) {
  var url = "/flows/" + id;
  var description = "Update a Flow " + id;
  var body = {
    "data": flowData,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFlow(id) {
  var url = "/flows/" + id;
  var description = "Retrieve a Flow " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFlow(id) {
  return createFlow();
}

function verifyFlowExists(id) {
  return getFlow(id);
}

function verifyFlowDoesNotExist(id) {
  return getFlow(id);
}

function tryToDeleteANonExistingFlow(id) {
  return deleteFlow(id);
}

// ---- Entity: flows ----

function deleteFlows() {
  var url = "/flows";
  var description = "Delete Multiple Flows";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFlows() {
  var url = "/flows";
  var description = "Update Multiple Flows";
  var body = {
    "data": flowsData,
    "keys": keys,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFlows() {
  var url = "/flows";
  var description = "List Flows";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFlowsBulkExists() {
  return getFlows();
}

function verifyFlowsBulkDoesNotExist() {
  return getFlows();
}

function tryToDeleteANonExistingFlowsBulk() {
  return deleteFlows();
}

// ---- Entity: folder ----

function createFolder(name, parent) {
  var url = "/folders";
  var description = "Create a folder " + name;
  var body = {
    "name": name,
    "parent": parent,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFolder(id) {
  var url = "/folders/" + id;
  var description = "Delete folder " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFolder(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Update folder " + id;
  var body = {
    "name": name,
    "parent": parent,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFolder(id) {
  var url = "/folders/" + id;
  var description = "Retrieve folder " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFolder(name, parent, id) {
  return createFolder(name, parent);
}

function verifyFolderExists(name, parent, id) {
  return getFolder(id);
}

function verifyFolderDoesNotExist(name, parent, id) {
  return getFolder(id);
}

function tryToDeleteANonExistingFolder(name, parent, id) {
  return deleteFolder(id);
}

// ---- Entity: operation ----

function createOperation() {
  var url = "/operations";
  var description = "Create an Operation";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOperation(id) {
  var url = "/operations/" + id;
  var description = "Delete an Operation " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOperation(id) {
  var url = "/operations/" + id;
  var description = "Update an Operation " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOperation(id) {
  var url = "/operations/" + id;
  var description = "Retrieve an Operation " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOperation(id) {
  return createOperation();
}

function verifyOperationExists(id) {
  return getOperation(id);
}

function verifyOperationDoesNotExist(id) {
  return getOperation(id);
}

function tryToDeleteANonExistingOperation(id) {
  return deleteOperation(id);
}

// ---- Entity: relation ----

function createRelation(collection_many, collection_one, field_many, field_one, junction_field) {
  var url = "/relations";
  var description = "Create a relation from " + collection_many + " to " + collection_one;
  var body = {
    "collection_many": collection_many,
    "collection_one": collection_one,
    "field_many": field_many,
    "field_one": field_one,
    "junction_field": junction_field,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRelation(id) {
  var url = "/relations/" + id;
  var description = "Retrieve relation " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRelation(id, collection_many, collection_one, field_many, field_one, junction_field) {
  var url = "/relations/" + id;
  var description = "Update relation " + id;
  var body = {
    "collection_many": collection_many,
    "collection_one": collection_one,
    "field_many": field_many,
    "field_one": field_one,
    "junction_field": junction_field,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRelation(id) {
  var url = "/relations/" + id;
  var description = "Delete relation " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRelation(collection_many, collection_one, field_many, field_one, junction_field, id) {
  return createRelation(collection_many, collection_one, field_many, field_one, junction_field);
}

function verifyRelationExists(collection_many, collection_one, field_many, field_one, junction_field, id) {
  return getRelation(id);
}

function verifyRelationDoesNotExist(collection_many, collection_one, field_many, field_one, junction_field, id) {
  return getRelation(id);
}

function tryToDeleteANonExistingRelation(collection_many, collection_one, field_many, field_one, junction_field, id) {
  return deleteRelation(id);
}

// ---- Entity: revision ----

function getRevision(id) {
  var url = "/revisions/" + id;
  var description = "Retrieve revision " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listRevisions() {
  var url = "/revisions";
  var description = "List revisions";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRevisionExists(id) {
  return getRevision(id);
}

function verifyRevisionDoesNotExist(id) {
  return getRevision(id);
}

// ---- Entity: role ----

function createRole(name) {
  var url = "/roles";
  var description = "Create a role " + name;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRole(id) {
  var url = "/roles/" + id;
  var description = "Delete role " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRole(id) {
  var url = "/roles/" + id;
  var description = "Update role " + id;
  var body = {
    "name": name,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRole(id) {
  var url = "/roles/" + id;
  var description = "Retrieve role " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRole(name, id) {
  return createRole(name);
}

function verifyRoleExists(name, id) {
  return getRole(id);
}

function verifyRoleDoesNotExist(name, id) {
  return getRole(id);
}

function tryToDeleteANonExistingRole(name, id) {
  return deleteRole(id);
}

// ---- Entity: webhook ----

function createWebhook(name) {
  var url = "/webhooks";
  var description = "Create a webhook " + name;
  var body = {
    "name": name,
    "method": method,
    "url": url,
    "status": status,
    "data": data,
    "actions": actions,
    "system-collections": system-collections,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhook(id) {
  var url = "/webhooks/" + id;
  var description = "Delete webhook " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhook(id) {
  var url = "/webhooks/" + id;
  var description = "Update webhook " + id;
  var body = {
    "name": name,
    "method": method,
    "url": url,
    "status": status,
    "data": data,
    "actions": actions,
    "system-collections": system-collections,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhook(id) {
  var url = "/webhooks/" + id;
  var description = "Retrieve webhook " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhook(name, id) {
  return createWebhook(name);
}

function verifyWebhookExists(name, id) {
  return getWebhook(id);
}

function verifyWebhookDoesNotExist(name, id) {
  return getWebhook(id);
}

function tryToDeleteANonExistingWebhook(name, id) {
  return deleteWebhook(id);
}

// ---- Entity: asset ----

function getAsset(id) {
  var url = "/assets/" + id;
  var description = "Get an Asset " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAssetExists(id) {
  return getAsset(id);
}

function verifyAssetDoesNotExist(id) {
  return getAsset(id);
}

// ---- Entity: setting ----

function getSettings() {
  var url = "/settings";
  var description = "Retrieve Settings";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSetting() {
  var url = "/settings";
  var description = "Update Settings";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySettingExists() {
  return getSettings();
}

function verifySettingDoesNotExist() {
  return getSettings();
}
