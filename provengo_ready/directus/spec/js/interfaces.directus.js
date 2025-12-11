//@provengo summon rest
// === Auto-generated interfaces for directus ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function getActivities(fields, filter, id, limit, meta, offset, search, sort) {
  var url = "/activity";
  var description = "Returns a list of activity actions. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getActivity(fields, filter, id, limit, meta, offset, search, sort) {
  var url = "/activity/" + id;
  var description = "Retrieves the details of an existing activity action. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function verifyActivityExists(fields, filter, id, limit, meta, offset, search, sort) {
  var url = "/activity/" + id;
  var description = "Verify Activity " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Activity found");
}

function verifyActivityDoesNotExist(fields, filter, id, limit, meta, offset, search, sort) {
  var url = "/activity/" + id;
  var description = "Verify Activity " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Activity not found");
}

function matchAnyActivityAdded() {
  return bp.EventSet("Any Activity Added", function(e) {
      return e.name.startsWith("Done: Create Activity");
  });
}

function getAsset(download, id, key, transforms) {
  var url = "/assets/" + id;
  var description = "Image typed files can be dynamically resized and transformed to fit any need. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyAssetsExists(download, id, key, transforms) {
  var url = "/assets/" + id;
  var description = "Verify Assets " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Assets found");
}

function verifyAssetsDoesNotExist(download, id, key, transforms) {
  var url = "/assets/" + id;
  var description = "Verify Assets " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Assets not found");
}

function matchAnyAssetsAdded() {
  return bp.EventSet("Any Assets Added", function(e) {
      return e.name.startsWith("Done: Create Assets");
  });
}

function passwordReset(id, password, provider, redirect, token) {
  var url = "/auth/password/reset";
  var description = "The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password. " + provider;
  var body = {
    "id": String(id),
    "password": String(password),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [401, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "password": password, "provider": provider, "redirect": redirect, "token": token}) });
}

function oauth(id, password, provider, redirect, token) {
  var url = "/auth/oauth";
  var description = "List configured OAuth providers.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function oauthProvider(id, password, provider, redirect, token) {
  var url = "/auth/oauth/" + provider;
  var description = "Start OAuth flow using the specified provider";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function tryToAddExistingAuthentication(id, password, provider, redirect, token) {
  var url = "/auth/password/reset";
  var description = "Try Add Existing Authentication " + provider;
  var body = {
    "id": String(id),
    "password": String(password),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyAuthenticationExists(id, password, provider, redirect, token) {
  var url = "/auth/oauth/" + provider;
  var description = "Verify Authentication " + provider + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Authentication found");
}

function verifyAuthenticationDoesNotExist(id, password, provider, redirect, token) {
  var url = "/auth/oauth/" + provider;
  var description = "Verify Authentication " + provider + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Authentication not found");
}

function waitForAuthenticationAdded(id, password, provider, redirect, token) {
  waitFor(matchSuccess("The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password."));
}

function matchAnyAuthenticationAdded() {
  return bp.EventSet("Any Authentication Added", function(e) {
      return e.name.startsWith("Done: The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.");
  });
}

function getCollections(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Returns a list of the collections available in the project. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createCollection(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Create a new collection in Directus. " + id;
  var body = {
    "archive_app_filter": String(archive_app_filter),
    "archive_field": String(archive_field),
    "archive_value": String(archive_value),
    "display_template": String(display_template),
    "hidden": hidden,
    "icon": String(icon),
    "id": String(id),
    "note": String(note),
    "singleton": singleton,
    "sort_field": String(sort_field),
    "translation": String(translation),
    "unarchive_value": String(unarchive_value),
    "versioning": versioning,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"archive_app_filter": archive_app_filter, "archive_field": archive_field, "archive_value": archive_value, "color": color, "display_template": display_template, "fields": fields, "hidden": hidden, "icon": icon, "id": id, "meta": meta, "note": note, "offset": offset, "singleton": singleton, "sort_field": sort_field, "translation": translation, "unarchive_value": unarchive_value, "versioning": versioning}) });
}

function deleteCollection(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution. " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function getCollection(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Retrieves the details of a single collection. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateCollection(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Update an existing collection. " + id;
  var body = {
    "archive_app_filter": String(archive_app_filter),
    "archive_field": String(archive_field),
    "archive_value": String(archive_value),
    "color": String(color),
    "display_template": String(display_template),
    "hidden": hidden,
    "icon": String(icon),
    "note": String(note),
    "singleton": singleton,
    "sort_field": String(sort_field),
    "translation": String(translation),
    "unarchive_value": String(unarchive_value),
    "versioning": versioning,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"archive_app_filter": archive_app_filter, "archive_field": archive_field, "archive_value": archive_value, "color": color, "display_template": display_template, "fields": fields, "hidden": hidden, "icon": icon, "id": id, "meta": meta, "note": note, "offset": offset, "singleton": singleton, "sort_field": sort_field, "translation": translation, "unarchive_value": unarchive_value, "versioning": versioning}) });
}

function tryToAddExistingCollections(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Try Add Existing Collections " + id;
  var body = {
    "archive_app_filter": String(archive_app_filter),
    "archive_field": String(archive_field),
    "archive_value": String(archive_value),
    "display_template": String(display_template),
    "hidden": hidden,
    "icon": String(icon),
    "id": String(id),
    "note": String(note),
    "singleton": singleton,
    "sort_field": String(sort_field),
    "translation": String(translation),
    "unarchive_value": String(unarchive_value),
    "versioning": versioning,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCollectionsExists(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Verify Collections " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Collections found");
}

function verifyCollectionsDoesNotExist(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Verify Collections " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Collections not found");
}

function tryToDeleteANonExistingCollections(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Verify negative delete for Collections";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCollections(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  return bp.EventSet("Delete Collections", function(e) {
      return e.name === "Done: " + "Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.";
  });
}

function waitForCollectionsAdded(archive_app_filter, archive_field, archive_value, color, display_template, fields, hidden, icon, id, meta, note, offset, singleton, sort_field, translation, unarchive_value, versioning) {
  waitFor(matchSuccess("Create a new collection in Directus."));
}

function matchAnyCollectionsAdded() {
  return bp.EventSet("Any Collections Added", function(e) {
      return e.name.startsWith("Done: Create a new collection in Directus.");
  });
}

function getItems(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection;
  var description = "List the items. " + collection;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function createItem(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection;
  var description = "Create a new item. " + collection;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "fields": fields, "filter": filter, "id": id, "limit": limit, "meta": meta, "offset": offset, "search": search, "sort": sort, "version": version}) });
}

function getItem(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection + "/" + id;
  var description = "Retrieve a single item by unique identifier. " + collection;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateItem(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection + "/" + id;
  var description = "Update an existing item. " + collection;
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "fields": fields, "filter": filter, "id": id, "limit": limit, "meta": meta, "offset": offset, "search": search, "sort": sort, "version": version}) });
}

function deleteItem(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection + "/" + id;
  var description = "Delete an existing item. " + collection;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function tryToAddExistingItems(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection;
  var description = "Try Add Existing Items " + collection;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyItemsExists(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection + "/" + id;
  var description = "Verify Items " + collection + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Items found");
}

function verifyItemsDoesNotExist(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection + "/" + id;
  var description = "Verify Items " + collection + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Items not found");
}

function tryToDeleteANonExistingItems(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  var url = "/items/" + collection + "/" + id;
  var description = "Verify negative delete for Items";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedItems(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  return bp.EventSet("Delete Items", function(e) {
      return e.name === "Done: " + "Delete an existing item.";
  });
}

function waitForItemsAdded(collection, fields, filter, id, limit, meta, offset, search, sort, version) {
  waitFor(matchSuccess("Create a new item."));
}

function matchAnyItemsAdded() {
  return bp.EventSet("Any Items Added", function(e) {
      return e.name.startsWith("Done: Create a new item.");
  });
}

function getPresets(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var description = "List the presets. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function createPreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var description = "Create a new preset. " + id;
  var body = {
    "collection": String(collection),
    "filters": [String(filters)],
    "id": String(id),
    "layout": String(layout),
    "layout_options": String(layout_options),
    "layout_query": String(layout_query),
    "role": String(role),
    "title": String(title),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "fields": fields, "filter": filter, "filters": filters, "id": id, "layout": layout, "layout_options": layout_options, "layout_query": layout_query, "limit": limit, "meta": meta, "offset": offset, "page": page, "role": role, "search": search, "search_query": search_query, "sort": sort, "title": title, "translation": translation, "view_options": view_options, "view_query": view_query, "view_type": view_type}) });
}

function getPreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Retrieve a single preset by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function updatePreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Update an existing preset. " + id;
  var body = {
    "collection": String(collection),
    "filters": [String(filters)],
    "role": role,
    "search_query": String(search_query),
    "title": String(title),
    "translation": String(translation),
    "view_options": String(view_options),
    "view_query": String(view_query),
    "view_type": String(view_type),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "fields": fields, "filter": filter, "filters": filters, "id": id, "layout": layout, "layout_options": layout_options, "layout_query": layout_query, "limit": limit, "meta": meta, "offset": offset, "page": page, "role": role, "search": search, "search_query": search_query, "sort": sort, "title": title, "translation": translation, "view_options": view_options, "view_query": view_query, "view_type": view_type}) });
}

function deletePreset(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Delete an existing preset. " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401] });
}

function tryToAddExistingPresets(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var description = "Try Add Existing Presets " + id;
  var body = {
    "collection": String(collection),
    "filters": [String(filters)],
    "id": String(id),
    "layout": String(layout),
    "layout_options": String(layout_options),
    "layout_query": String(layout_query),
    "role": String(role),
    "title": String(title),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPresetsExists(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Verify Presets " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Presets found");
}

function verifyPresetsDoesNotExist(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Verify Presets " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Presets not found");
}

function tryToDeleteANonExistingPresets(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Verify negative delete for Presets";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPresets(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  return bp.EventSet("Delete Presets", function(e) {
      return e.name === "Done: " + "Delete an existing preset.";
  });
}

function waitForPresetsAdded(collection, fields, filter, filters, id, layout, layout_options, layout_query, limit, meta, offset, page, role, search, search_query, sort, title, translation, view_options, view_query, view_type) {
  waitFor(matchSuccess("Create a new preset."));
}

function matchAnyPresetsAdded() {
  return bp.EventSet("Any Presets Added", function(e) {
      return e.name.startsWith("Done: Create a new preset.");
  });
}

function deleteComment(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments/" + id;
  var description = "Delete an existing comment. " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401] });
}

function getComments(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments";
  var description = "List the comments. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function updateComment(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments/" + id;
  var description = "Update an existing comment. " + id;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "item": String(item),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "fields": fields, "filter": filter, "id": id, "item": item, "limit": limit, "meta": meta, "offset": offset, "page": page, "search": search, "sort": sort}) });
}

function createComment(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments";
  var description = "Create a new comment. " + id;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "id": String(id),
    "item": String(item),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "fields": fields, "filter": filter, "id": id, "item": item, "limit": limit, "meta": meta, "offset": offset, "page": page, "search": search, "sort": sort}) });
}

function getComment(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments/" + id;
  var description = "Retrieve a single comment by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function tryToAddExistingComments(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments";
  var description = "Try Add Existing Comments " + id;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "id": String(id),
    "item": String(item),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCommentsExists(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments/" + id;
  var description = "Verify Comments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Comments found");
}

function verifyCommentsDoesNotExist(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments/" + id;
  var description = "Verify Comments " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Comments not found");
}

function tryToDeleteANonExistingComments(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  var url = "/comments/" + id;
  var description = "Verify negative delete for Comments";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedComments(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  return bp.EventSet("Delete Comments", function(e) {
      return e.name === "Done: " + "Delete an existing comment.";
  });
}

function waitForCommentsAdded(collection, comment, fields, filter, id, item, limit, meta, offset, page, search, sort) {
  waitFor(matchSuccess("Create a new comment."));
}

function matchAnyCommentsAdded() {
  return bp.EventSet("Any Comments Added", function(e) {
      return e.name.startsWith("Done: Create a new comment.");
  });
}

function listExtensions(bundle, enabled, name) {
  var url = "/extensions";
  var description = "List the installed extensions and their configuration in the project. " + bundle;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function updateExtensionBundle(bundle, enabled, name) {
  var url = "/extensions/" + bundle + "/" + name;
  var description = "Update an existing extension. " + bundle;
  var body = {
    "enabled": enabled,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bundle": bundle, "enabled": enabled, "name": name}) });
}

// verifyExtensionsExists skipped: No GET /{id} operation detected.
function matchAnyExtensionsAdded() {
  return bp.EventSet("Any Extensions Added", function(e) {
      return e.name.startsWith("Done: Create Extensions");
  });
}

function getCollectionFields(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection;
  var description = "Returns a list of the fields available in the given collection.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createField(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection;
  var description = "Create a new field in a given collection.";
  var body = {
    "comment": String(comment),
    "datatype": String(datatype),
    "default_value": String(default_value),
    "display": String(display),
    "display_options": String(display_options),
    "field": String(field),
    "foreign_key_column": String(foreign_key_column),
    "foreign_key_schema": String(foreign_key_schema),
    "foreign_key_table": String(foreign_key_table),
    "group": group,
    "has_auto_increment": has_auto_increment,
    "hidden": hidden,
    "id": String(id),
    "is_nullable": is_nullable,
    "is_primary_key": is_primary_key,
    "length": String(length),
    "locked": locked,
    "max_length": max_length,
    "name": String(name),
    "note": String(note),
    "options": String(options),
    "readonly": readonly,
    "schema": String(schema),
    "special": [String(special)],
    "system-interface": String(system_interface),
    "table": String(table),
    "translation": String(translation),
    "type": String(type),
    "width": width,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "datatype": datatype, "default_value": default_value, "display": display, "display_options": display_options, "field": field, "foreign_key_column": foreign_key_column, "foreign_key_schema": foreign_key_schema, "foreign_key_table": foreign_key_table, "group": group, "has_auto_increment": has_auto_increment, "hidden": hidden, "id": id, "is_nullable": is_nullable, "is_primary_key": is_primary_key, "length": length, "locked": locked, "max_length": max_length, "name": name, "note": note, "options": options, "readonly": readonly, "schema": schema, "sort": sort, "special": special, "system-interface": system_interface, "table": table, "translation": translation, "type": type, "width": width}) });
}

function getCollectionField(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Retrieves the details of a single field in a given collection.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateField(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Update an existing field. " + collection;
  var body = {
    "comment": String(comment),
    "default_value": String(default_value),
    "display": String(display),
    "display_options": String(display_options),
    "field": String(field),
    "foreign_key_column": String(foreign_key_column),
    "foreign_key_schema": String(foreign_key_schema),
    "foreign_key_table": String(foreign_key_table),
    "group": group,
    "has_auto_increment": has_auto_increment,
    "hidden": hidden,
    "is_nullable": is_nullable,
    "is_primary_key": is_primary_key,
    "locked": locked,
    "max_length": max_length,
    "name": String(name),
    "note": String(note),
    "options": String(options),
    "readonly": readonly,
    "schema": String(schema),
    "special": [String(special)],
    "system-interface": String(system_interface),
    "table": String(table),
    "translation": String(translation),
    "type": String(type),
    "width": width,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "datatype": datatype, "default_value": default_value, "display": display, "display_options": display_options, "field": field, "foreign_key_column": foreign_key_column, "foreign_key_schema": foreign_key_schema, "foreign_key_table": foreign_key_table, "group": group, "has_auto_increment": has_auto_increment, "hidden": hidden, "id": id, "is_nullable": is_nullable, "is_primary_key": is_primary_key, "length": length, "locked": locked, "max_length": max_length, "name": name, "note": note, "options": options, "readonly": readonly, "schema": schema, "sort": sort, "special": special, "system-interface": system_interface, "table": table, "translation": translation, "type": type, "width": width}) });
}

function deleteField(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Delete an existing field. " + collection;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function tryToAddExistingFields(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection;
  var description = "Try Add Existing Fields " + collection;
  var body = {
    "comment": String(comment),
    "datatype": String(datatype),
    "default_value": String(default_value),
    "display": String(display),
    "display_options": String(display_options),
    "field": String(field),
    "foreign_key_column": String(foreign_key_column),
    "foreign_key_schema": String(foreign_key_schema),
    "foreign_key_table": String(foreign_key_table),
    "group": group,
    "has_auto_increment": has_auto_increment,
    "hidden": hidden,
    "id": String(id),
    "is_nullable": is_nullable,
    "is_primary_key": is_primary_key,
    "length": String(length),
    "locked": locked,
    "max_length": max_length,
    "name": String(name),
    "note": String(note),
    "options": String(options),
    "readonly": readonly,
    "schema": String(schema),
    "special": [String(special)],
    "system-interface": String(system_interface),
    "table": String(table),
    "translation": String(translation),
    "type": String(type),
    "width": width,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyFieldsExists(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Verify Fields " + collection + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Fields found");
}

function verifyFieldsDoesNotExist(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Verify Fields " + collection + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Fields not found");
}

function tryToDeleteANonExistingFields(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Verify negative delete for Fields";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedFields(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  return bp.EventSet("Delete Fields", function(e) {
      return e.name === "Done: " + "Delete an existing field.";
  });
}

function waitForFieldsAdded(collection, comment, datatype, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, length, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  waitFor(matchSuccess("Create a new field in a given collection."));
}

function matchAnyFieldsAdded() {
  return bp.EventSet("Any Fields Added", function(e) {
      return e.name.startsWith("Done: Create a new field in a given collection.");
  });
}

function getFiles(data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var description = "List the files. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function createFile(data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var description = "Create a new file " + id;
  var body = {
    "data": String(data),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "description": description, "filename_download": filename_download, "folder": folder, "id": id, "tags": tags, "title": title}) });
}

function updateFile(data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Update an existing file, and/or replace its file contents. " + id;
  var body = {
    "description": String(description),
    "filename_download": String(filename_download),
    "folder": String(folder),
    "tags": [String(tags)],
    "title": String(title),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "description": description, "filename_download": filename_download, "folder": folder, "id": id, "tags": tags, "title": title}) });
}

function deleteFile(data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Delete an existing file. " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401] });
}

function getFile(data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Retrieve a single file by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function tryToAddExistingFiles(data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var description = "Try Add Existing Files " + id;
  var body = {
    "data": String(data),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyFilesExists(data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Verify Files " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Files found");
}

function verifyFilesDoesNotExist(data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Verify Files " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Files not found");
}

function tryToDeleteANonExistingFiles(data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Verify negative delete for Files";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedFiles(data, description, filename_download, folder, id, tags, title) {
  return bp.EventSet("Delete Files", function(e) {
      return e.name === "Done: " + "Delete an existing file.";
  });
}

function waitForFilesAdded(data, description, filename_download, folder, id, tags, title) {
  waitFor(matchSuccess("Create a new file"));
}

function matchAnyFilesAdded() {
  return bp.EventSet("Any Files Added", function(e) {
      return e.name.startsWith("Done: Create a new file");
  });
}

function deleteFlow(data, id) {
  var url = "/flows/" + id;
  var description = "Delete an existing flow " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function getFlows(data, id) {
  var url = "/flows";
  var description = "Get all flows. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateFlow(data, id) {
  var url = "/flows/" + id;
  var description = "Update an existing flow " + id;
  var body = {
    "data": String(data),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "id": id}) });
}

function createFlow(data, id) {
  var url = "/flows";
  var description = "Create a new flow. " + id;
  var body = {
    "data": String(data),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "id": id}) });
}

function getFlow(data, id) {
  var url = "/flows/" + id;
  var description = "Retrieve a single flow by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingFlows(data, id) {
  var url = "/flows";
  var description = "Try Add Existing Flows " + id;
  var body = {
    "data": String(data),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyFlowsExists(data, id) {
  var url = "/flows/" + id;
  var description = "Verify Flows " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Flows found");
}

function verifyFlowsDoesNotExist(data, id) {
  var url = "/flows/" + id;
  var description = "Verify Flows " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Flows not found");
}

function tryToDeleteANonExistingFlows(data, id) {
  var url = "/flows/" + id;
  var description = "Verify negative delete for Flows";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedFlows(data, id) {
  return bp.EventSet("Delete Flows", function(e) {
      return e.name === "Done: " + "Delete an existing flow";
  });
}

function waitForFlowsAdded(data, id) {
  waitFor(matchSuccess("Create a new flow."));
}

function matchAnyFlowsAdded() {
  return bp.EventSet("Any Flows Added", function(e) {
      return e.name.startsWith("Done: Create a new flow.");
  });
}

function deleteFolder(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Delete an existing folder " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function getFolders(id, name, parent) {
  var url = "/folders";
  var description = "List the folders. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateFolder(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Update an existing folder " + id;
  var body = {
    "name": String(name),
    "parent": parent,
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name, "parent": parent}) });
}

function createFolder(id, name, parent) {
  var url = "/folders";
  var description = "Create a new folder. " + id;
  var body = {
    "id": String(id),
    "name": String(name),
    "parent": parent,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "name": name, "parent": parent}) });
}

function getFolder(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Retrieve a single folder by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingFolders(id, name, parent) {
  var url = "/folders";
  var description = "Try Add Existing Folders " + id;
  var body = {
    "id": String(id),
    "name": String(name),
    "parent": parent,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyFoldersExists(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Verify Folders " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Folders found");
}

function verifyFoldersDoesNotExist(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Verify Folders " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Folders not found");
}

function tryToDeleteANonExistingFolders(id, name, parent) {
  var url = "/folders/" + id;
  var description = "Verify negative delete for Folders";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedFolders(id, name, parent) {
  return bp.EventSet("Delete Folders", function(e) {
      return e.name === "Done: " + "Delete an existing folder";
  });
}

function waitForFoldersAdded(id, name, parent) {
  waitFor(matchSuccess("Create a new folder."));
}

function matchAnyFoldersAdded() {
  return bp.EventSet("Any Folders Added", function(e) {
      return e.name.startsWith("Done: Create a new folder.");
  });
}

function getOperations(id) {
  var url = "/operations";
  var description = "Get all operations. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createOperation(id) {
  var url = "/operations";
  var description = "Create a new operation. " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
}

function updateOperations(id) {
  var url = "/operations";
  var description = "Update multiple operations at the same time. " + id;
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
}

function deleteOperations(id) {
  var url = "/operations";
  var description = "Delete multiple existing operations. " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401] });
}

function getOperation(id) {
  var url = "/operations/" + id;
  var description = "Retrieve a single operation by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateOperation(id) {
  var url = "/operations/" + id;
  var description = "Update an existing operation " + id;
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id}) });
}

function deleteOperation(id) {
  var url = "/operations/" + id;
  var description = "Delete an existing operation " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function tryToAddExistingOperations(id) {
  var url = "/operations";
  var description = "Try Add Existing Operations " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOperationsExists(id) {
  var url = "/operations/" + id;
  var description = "Verify Operations " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Operations found");
}

function verifyOperationsDoesNotExist(id) {
  var url = "/operations/" + id;
  var description = "Verify Operations " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Operations not found");
}

function tryToDeleteANonExistingOperations(id) {
  var url = "/operations";
  var description = "Verify negative delete for Operations";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOperations(id) {
  return bp.EventSet("Delete Operations", function(e) {
      return e.name === "Done: " + "Delete multiple existing operations.";
  });
}

function waitForOperationsAdded(id) {
  waitFor(matchSuccess("Create a new operation."));
}

function matchAnyOperationsAdded() {
  return bp.EventSet("Any Operations Added", function(e) {
      return e.name.startsWith("Done: Create a new operation.");
  });
}

function getPermissions(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "List all permissions. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createPermission(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Create a new permission. " + id;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "id": String(id),
    "read": String(read),
    "read_field_blacklist": [String(read_field_blacklist)],
    "role": role,
    "status": String(status),
    "status_blacklist": [String(status_blacklist)],
    "update": String(update),
    "write_field_blacklist": [String(write_field_blacklist)],
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "create": create, "delete": _delete, "explain": explain, "id": id, "keys": keys, "read": read, "read_field_blacklist": read_field_blacklist, "role": role, "status": status, "status_blacklist": status_blacklist, "update": update, "write_field_blacklist": write_field_blacklist}) });
}

function updatePermissions(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Update multiple permissions at the same time. " + id;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "read": String(read),
    "read_field_blacklist": [String(read_field_blacklist)],
    "role": role,
    "status": String(status),
    "status_blacklist": [String(status_blacklist)],
    "update": String(update),
    "write_field_blacklist": [String(write_field_blacklist)],
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "create": create, "delete": _delete, "explain": explain, "id": id, "keys": keys, "read": read, "read_field_blacklist": read_field_blacklist, "role": role, "status": status, "status_blacklist": status_blacklist, "update": update, "write_field_blacklist": write_field_blacklist}) });
}

function deletePermissions(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Delete multiple existing permissions. " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401] });
}

function getPermission(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Retrieve a single permissions object by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updatePermission(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Update an existing permission " + id;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "read": String(read),
    "read_field_blacklist": String(read_field_blacklist),
    "role": String(role),
    "status": String(status),
    "status_blacklist": String(status_blacklist),
    "update": String(update),
    "write_field_blacklist": String(write_field_blacklist),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "create": create, "delete": _delete, "explain": explain, "id": id, "keys": keys, "read": read, "read_field_blacklist": read_field_blacklist, "role": role, "status": status, "status_blacklist": status_blacklist, "update": update, "write_field_blacklist": write_field_blacklist}) });
}

function deletePermission(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Delete an existing permission " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function tryToAddExistingPermissions(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Try Add Existing Permissions " + id;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "id": String(id),
    "read": String(read),
    "read_field_blacklist": [String(read_field_blacklist)],
    "role": role,
    "status": String(status),
    "status_blacklist": [String(status_blacklist)],
    "update": String(update),
    "write_field_blacklist": [String(write_field_blacklist)],
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPermissionsExists(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Verify Permissions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Permissions found");
}

function verifyPermissionsDoesNotExist(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Verify Permissions " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Permissions not found");
}

function tryToDeleteANonExistingPermissions(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Verify negative delete for Permissions";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPermissions(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  return bp.EventSet("Delete Permissions", function(e) {
      return e.name === "Done: " + "Delete multiple existing permissions.";
  });
}

function waitForPermissionsAdded(collection, comment, create, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  waitFor(matchSuccess("Create a new permission."));
}

function matchAnyPermissionsAdded() {
  return bp.EventSet("Any Permissions Added", function(e) {
      return e.name.startsWith("Done: Create a new permission.");
  });
}

function getRelations(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "List the relations. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "Create a new relation. " + id;
  var body = {
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "id": String(id),
    "junction_field": String(junction_field),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection_many": collection_many, "collection_one": collection_one, "field_many": field_many, "field_one": field_one, "id": id, "junction_field": junction_field}) });
}

function getRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Retrieve a single relation by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Update an existing relation " + id;
  var body = {
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "junction_field": String(junction_field),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection_many": collection_many, "collection_one": collection_one, "field_many": field_many, "field_one": field_one, "id": id, "junction_field": junction_field}) });
}

function deleteRelation(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Delete an existing relation. " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function tryToAddExistingRelations(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "Try Add Existing Relations " + id;
  var body = {
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "id": String(id),
    "junction_field": String(junction_field),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRelationsExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Verify Relations " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Relations found");
}

function verifyRelationsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Verify Relations " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Relations not found");
}

function tryToDeleteANonExistingRelations(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Verify negative delete for Relations";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRelations(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  return bp.EventSet("Delete Relations", function(e) {
      return e.name === "Done: " + "Delete an existing relation.";
  });
}

function waitForRelationsAdded(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  waitFor(matchSuccess("Create a new relation."));
}

function matchAnyRelationsAdded() {
  return bp.EventSet("Any Relations Added", function(e) {
      return e.name.startsWith("Done: Create a new relation.");
  });
}

function getRevisions(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, id) {
  var url = "/revisions";
  var description = "List the revisions. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getRevision(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, id) {
  var url = "/revisions/" + id;
  var description = "Retrieve a single revision by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function verifyRevisionsExists(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, id) {
  var url = "/revisions/" + id;
  var description = "Verify Revisions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Revisions found");
}

function verifyRevisionsDoesNotExist(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, id) {
  var url = "/revisions/" + id;
  var description = "Verify Revisions " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Revisions not found");
}

function matchAnyRevisionsAdded() {
  return bp.EventSet("Any Revisions Added", function(e) {
      return e.name.startsWith("Done: Create Revisions");
  });
}

function getRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var description = "List the roles. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var description = "Create a new role. " + id;
  var body = {
    "description": String(description),
    "enforce_tfa": enforce_tfa,
    "external_id": String(external_id),
    "id": String(id),
    "ip_access": [String(ip_access)],
    "module_listing": String(module_listing),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "description": description, "enforce_tfa": enforce_tfa, "external_id": external_id, "id": id, "ip_access": ip_access, "module_listing": module_listing, "name": name}) });
}

function updateRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Update an existing role " + id;
  var body = {
    "description": String(description),
    "enforce_tfa": enforce_tfa,
    "external_id": String(external_id),
    "ip_access": [String(ip_access)],
    "module_listing": String(module_listing),
    "name": String(name),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "description": description, "enforce_tfa": enforce_tfa, "external_id": external_id, "id": id, "ip_access": ip_access, "module_listing": module_listing, "name": name}) });
}

function deleteRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Delete an existing role " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function getRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Retrieve a single role by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var description = "Try Add Existing Roles " + id;
  var body = {
    "description": String(description),
    "enforce_tfa": enforce_tfa,
    "external_id": String(external_id),
    "id": String(id),
    "ip_access": [String(ip_access)],
    "module_listing": String(module_listing),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRolesExists(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Verify Roles " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Roles found");
}

function verifyRolesDoesNotExist(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Verify Roles " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Roles not found");
}

function tryToDeleteANonExistingRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Verify negative delete for Roles";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  return bp.EventSet("Delete Roles", function(e) {
      return e.name === "Done: " + "Delete an existing role";
  });
}

function waitForRolesAdded(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  waitFor(matchSuccess("Create a new role."));
}

function matchAnyRolesAdded() {
  return bp.EventSet("Any Roles Added", function(e) {
      return e.name.startsWith("Done: Create a new role.");
  });
}

function schemaDiff(data, force, id) {
  var url = "/schema/diff";
  var description = "Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users. " + id;
  var body = {
    "data": String(data),
    "force": force,
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "force": force, "id": id}) });
}

function schemaSnapshot(data, force, id) {
  var url = "/schema/snapshot";
  var description = "Retrieve the current schema. This endpoint is only available to admin users. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

// verifySchemaExists skipped: No GET /{id} operation detected.
function waitForSchemaAdded(data, force, id) {
  waitFor(matchSuccess("Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users."));
}

function matchAnySchemaAdded() {
  return bp.EventSet("Any Schema Added", function(e) {
      return e.name.startsWith("Done: Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.");
  });
}

function serverInfo(id, super_admin_token) {
  var url = "/server/info";
  var description = "Perform a system status check and return the options. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function ping(id, super_admin_token) {
  var url = "/server/ping";
  var description = "Ping, pong. Ping.. pong. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyServerExists skipped: No GET /{id} operation detected.
function matchAnyServerAdded() {
  return bp.EventSet("Any Server Added", function(e) {
      return e.name.startsWith("Done: Create Server");
  });
}

function getSettings(Limit, Meta, Offset, Page, id) {
  var url = "/settings";
  var description = "List the settings. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateSetting(Limit, Meta, Offset, Page, id) {
  var url = "/settings";
  var description = "Update the settings " + id;
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "id": id}) });
}

// verifySettingsExists skipped: No GET /{id} operation detected.
function matchAnySettingsAdded() {
  return bp.EventSet("Any Settings Added", function(e) {
      return e.name.startsWith("Done: Create Settings");
  });
}

function getUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  var url = "/users";
  var description = "List the users. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  var url = "/users/invite/accept";
  var description = "Accepts and enables an invited user using a JWT invitation token. " + id;
  var body = {
    "id": String(id),
    "password": String(password),
    "token": String(token),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function updateMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  var url = "/users/me";
  var description = "Update the currently authenticated user. " + id;
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function deleteUser(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  var url = "/users/" + id;
  var description = "Delete an existing user " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function getMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  var url = "/users/me";
  var description = "Retrieve the currently authenticated user. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function meTfaDisable(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  var url = "/users/me/tfa/disable";
  var description = "Disables two-factor authentication for the currently authenticated user. " + id;
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function meTfaEnable(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  var url = "/users/me/tfa/enable";
  var description = "Enables two-factor authentication for the currently authenticated user. " + id;
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function updateLastUsedPageMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  var url = "/users/me/track/page";
  var description = "Updates the last used page field of the currently authenticated user. " + id;
  var body = {
    "last_page": String(last_page),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

// verifyUsersExists skipped: No GET /{id} operation detected.
function waitForUsersAdded(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, last_page, password, token) {
  waitFor(matchSuccess("Accepts and enables an invited user using a JWT invitation token."));
}

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Accepts and enables an invited user using a JWT invitation token.");
  });
}

function clearCache(id, length) {
  var url = "/utils/cache/clear";
  var description = "Resets both the data and schema cache of Directus. " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "length": length}) });
}

function random(id, length) {
  var url = "/utils/random/string";
  var description = "Returns a random string of given length. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyUtilitiesExists skipped: No GET /{id} operation detected.
function waitForUtilitiesAdded(id, length) {
  waitFor(matchSuccess("Resets both the data and schema cache of Directus."));
}

function matchAnyUtilitiesAdded() {
  return bp.EventSet("Any Utilities Added", function(e) {
      return e.name.startsWith("Done: Resets both the data and schema cache of Directus.");
  });
}

function deleteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id;
  var description = "Delete an existing Content Version. " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function getContentVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions";
  var description = "Get all Content Versions. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id;
  var description = "Update an existing Content Version. " + id;
  var body = {
    "data": String(data),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "data": data, "fields": fields, "id": id, "mainHash": mainHash}) });
}

function promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/promote";
  var description = "Pass the current hash of the main version of the item (obtained from the `compare` endpoint) along with an optional array of field names of which the values are to be promoted (by default, all fields are selected). " + id;
  var body = {
    "mainHash": String(mainHash),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "data": data, "fields": fields, "id": id, "mainHash": mainHash}) });
}

function compareContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/compare";
  var description = "Compare an existing Content Version with the main version of the item. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/promote";
  var description = "Try Add Existing Versions " + id;
  var body = {
    "mainHash": String(mainHash),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyVersionsExists(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/compare";
  var description = "Verify Versions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Versions found");
}

function verifyVersionsDoesNotExist(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/compare";
  var description = "Verify Versions " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Versions not found");
}

function tryToDeleteANonExistingVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id;
  var description = "Verify negative delete for Versions";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  return bp.EventSet("Delete Versions", function(e) {
      return e.name === "Done: " + "Delete an existing Content Version.";
  });
}

function waitForVersionsAdded(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  waitFor(matchSuccess("Pass the current hash of the main version of the item (obtained from the `compare` endpoint) along with an optional array of field names of which the values are to be promoted (by default, all fields are selected)."));
}

function matchAnyVersionsAdded() {
  return bp.EventSet("Any Versions Added", function(e) {
      return e.name.startsWith("Done: Pass the current hash of the main version of the item (obtained from the `compare` endpoint) along with an optional array of field names of which the values are to be promoted (by default, all fields are selected).");
  });
}

function getWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var description = "Get all webhooks. " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var description = "Create a new webhook. " + id;
  var body = {
    "actions": String(actions),
    "data": String(data),
    "id": String(id),
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system_collections),
    "url": String(url),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Meta": Meta, "actions": actions, "data": data, "id": id, "method": method, "name": name, "status": status, "system-collections": system_collections, "url": url}) });
}

function updateWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Update an existing webhook " + id;
  var body = {
    "actions": String(actions),
    "data": data,
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system_collections),
    "url": String(url),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Meta": Meta, "actions": actions, "data": data, "id": id, "method": method, "name": name, "status": status, "system-collections": system_collections, "url": url}) });
}

function deleteWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Delete an existing webhook " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 401, 404] });
}

function getWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Retrieve a single webhook by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var description = "Try Add Existing Webhooks " + id;
  var body = {
    "actions": String(actions),
    "data": String(data),
    "id": String(id),
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system_collections),
    "url": String(url),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyWebhooksExists(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Verify Webhooks " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Webhooks found");
}

function verifyWebhooksDoesNotExist(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Verify Webhooks " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Webhooks not found");
}

function tryToDeleteANonExistingWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Verify negative delete for Webhooks";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  return bp.EventSet("Delete Webhooks", function(e) {
      return e.name === "Done: " + "Delete an existing webhook";
  });
}

function waitForWebhooksAdded(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  waitFor(matchSuccess("Create a new webhook."));
}

function matchAnyWebhooksAdded() {
  return bp.EventSet("Any Webhooks Added", function(e) {
      return e.name.startsWith("Done: Create a new webhook.");
  });
}
