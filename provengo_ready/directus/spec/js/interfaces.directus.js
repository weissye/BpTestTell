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
  var description = "Returns a list of activity actions.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getActivity(fields, filter, id, limit, meta, offset, search, sort) {
  var url = "/activity/" + id;
  var description = "Retrieves the details of an existing activity action.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyActivityExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyActivityAdded() {
  return bp.EventSet("Any Activity Added", function(e) {
      return e.name.startsWith("Done: Create Activity");
  });
}

function getAsset(download, id, key, transforms) {
  var url = "/assets/" + id;
  var description = "Image typed files can be dynamically resized and transformed to fit any need.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyAssetsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyAssetsAdded() {
  return bp.EventSet("Any Assets Added", function(e) {
      return e.name.startsWith("Done: Create Assets");
  });
}

function passwordReset(password, provider, redirect, token) {
  var url = "/auth/password/reset";
  var description = "The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.";
  var body = {
    "password": String(password),
    "token": String(token),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"password": password, "provider": provider, "redirect": redirect, "token": token}) });
}

function oauth(password, provider, redirect, token) {
  var url = "/auth/oauth";
  var description = "List configured OAuth providers.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function oauthProvider(password, provider, redirect, token) {
  var url = "/auth/oauth/" + provider;
  var description = "Start OAuth flow using the specified provider";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

// No verifyAuthenticationExists generated: Primary Key "provider" is not in POST body (Server-Generated ID).
function waitForAuthenticationAdded(password, provider, redirect, token) {
  waitFor(matchSuccess("The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password."));
}

function matchAnyAuthenticationAdded() {
  return bp.EventSet("Any Authentication Added", function(e) {
      return e.name.startsWith("Done: The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.");
  });
}

function getCollections(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Returns a list of the collections available in the project.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var description = "Create a new collection in Directus.";
  var body = {
    "archive_app_filter": String(archive_app_filter),
    "archive_field": String(archive_field),
    "archive_value": String(archive_value),
    "collection": String(collection),
    "display_template": String(display_template),
    "fields": String(fields),
    "hidden": hidden,
    "icon": String(icon),
    "note": String(note),
    "singleton": singleton,
    "sort_field": String(sort_field),
    "translation": String(translation),
    "unarchive_value": String(unarchive_value),
    "versioning": versioning,
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Meta": Meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "archive_field": archive_field, "archive_value": archive_value, "collection": collection, "color": color, "display_template": display_template, "fields": fields, "hidden": hidden, "icon": icon, "id": id, "note": note, "singleton": singleton, "sort_field": sort_field, "translation": translation, "unarchive_value": unarchive_value, "versioning": versioning}) });
}

function deleteCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Retrieves the details of a single collection.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var description = "Update an existing collection.";
  var body = {
    "meta": {
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
    },
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Meta": Meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "archive_field": archive_field, "archive_value": archive_value, "collection": collection, "color": color, "display_template": display_template, "fields": fields, "hidden": hidden, "icon": icon, "id": id, "note": note, "singleton": singleton, "sort_field": sort_field, "translation": translation, "unarchive_value": unarchive_value, "versioning": versioning}) });
}

// No verifyCollectionsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForCollectionsAdded(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, color, display_template, fields, hidden, icon, id, note, singleton, sort_field, translation, unarchive_value, versioning) {
  waitFor(matchSuccess("Create a new collection in Directus."));
}

function matchAnyCollectionsAdded() {
  return bp.EventSet("Any Collections Added", function(e) {
      return e.name.startsWith("Done: Create a new collection in Directus.");
  });
}

function getItems(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id) {
  var url = "/items/" + collection;
  var description = "List the items.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function createItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id) {
  var url = "/items/" + collection;
  var description = "Create a new item.";
  var body = {
    "Collection": String(Collection),
    "Fields": String(Fields),
    "Filter": String(Filter),
    "Limit": String(Limit),
    "Meta": String(Meta),
    "Offset": String(Offset),
    "Search": String(Search),
    "Sort": String(Sort),
    "Version": String(Version),
    "id": String(id),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Collection": Collection, "Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "Version": Version, "collection": collection, "id": id}) });
}

function updateItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Update an existing item.";
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Collection": Collection, "Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "Version": Version, "collection": collection, "id": id}) });
}

function deleteItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Delete an existing item.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Retrieve a single item by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyItemsExists generated: Primary Key "collection" is not in POST body (Server-Generated ID).
function waitForItemsAdded(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, Version, collection, id) {
  waitFor(matchSuccess("Create a new item."));
}

function matchAnyItemsAdded() {
  return bp.EventSet("Any Items Added", function(e) {
      return e.name.startsWith("Done: Create a new item.");
  });
}

function getPresets(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var description = "List the presets.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function createPreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var description = "Create a new preset.";
  var body = {
    "collection": String(collection),
    "filters": String(filters),
    "layout": String(layout),
    "layout_options": String(layout_options),
    "layout_query": String(layout_query),
    "role": String(role),
    "search": String(search),
    "title": String(title),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection": collection, "filters": filters, "id": id, "layout": layout, "layout_options": layout_options, "layout_query": layout_query, "role": role, "search": search, "search_query": search_query, "title": title, "translation": translation, "view_options": view_options, "view_query": view_query, "view_type": view_type}) });
}

function updatePreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Update an existing preset.";
  var body = {
    "collection": String(collection),
    "filters": String(filters),
    "role": Number(role),
    "search_query": String(search_query),
    "title": String(title),
    "translation": String(translation),
    "view_options": String(view_options),
    "view_query": String(view_query),
    "view_type": String(view_type),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection": collection, "filters": filters, "id": id, "layout": layout, "layout_options": layout_options, "layout_query": layout_query, "role": role, "search": search, "search_query": search_query, "title": title, "translation": translation, "view_options": view_options, "view_query": view_query, "view_type": view_type}) });
}

function deletePreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Delete an existing preset.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function getPreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var description = "Retrieve a single preset by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

// No verifyPresetsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForPresetsAdded(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  waitFor(matchSuccess("Create a new preset."));
}

function matchAnyPresetsAdded() {
  return bp.EventSet("Any Presets Added", function(e) {
      return e.name.startsWith("Done: Create a new preset.");
  });
}

function deleteComments(collection, comment, id, item, key) {
  var url = "/comments";
  var description = "Delete multiple existing comments.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function getComments(collection, comment, id, item, key) {
  var url = "/comments";
  var description = "List the comments.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function updateComments(collection, comment, id, item, key) {
  var url = "/comments";
  var description = "Update multiple comments at the same time.";
  var body = {
    "data": {
      "collection": String(collection),
      "comment": String(comment),
      "item": String(item),
    },
    "keys": [String(key)],
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "id": id, "item": item, "key": key}) });
}

function createComment(collection, comment, id, item, key) {
  var url = "/comments";
  var description = "Create a new comment.";
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "item": String(item),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "id": id, "item": item, "key": key}) });
}

function deleteComment(collection, comment, id, item, key) {
  var url = "/comments/" + id;
  var description = "Delete an existing comment.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function getComment(collection, comment, id, item, key) {
  var url = "/comments/" + id;
  var description = "Retrieve a single comment by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function updateComment(collection, comment, id, item, key) {
  var url = "/comments/" + id;
  var description = "Update an existing comment.";
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "item": String(item),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "id": id, "item": item, "key": key}) });
}

// No verifyCommentsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForCommentsAdded(collection, comment, id, item, key) {
  waitFor(matchSuccess("Create a new comment."));
}

function matchAnyCommentsAdded() {
  return bp.EventSet("Any Comments Added", function(e) {
      return e.name.startsWith("Done: Create a new comment.");
  });
}

function listExtensions(bundle, enabled, name) {
  var url = "/extensions";
  var description = "List the installed extensions and their configuration in the project.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function updateExtensionBundle(bundle, enabled, name) {
  var url = "/extensions/" + bundle + "/" + name;
  var description = "Update an existing extension.";
  var body = {
    "meta": {
      "enabled": enabled,
    },
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"bundle": bundle, "enabled": enabled, "name": name}) });
}

// No verifyExtensionsExists generated: Primary Key "bundle" is not in POST body (Server-Generated ID).
function matchAnyExtensionsAdded() {
  return bp.EventSet("Any Extensions Added", function(e) {
      return e.name.startsWith("Done: Create Extensions");
  });
}

function getFields(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields";
  var description = "Returns a list of the fields available in the project.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getCollectionFields(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection;
  var description = "Returns a list of the fields available in the given collection.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createField(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection;
  var description = "Create a new field in a given collection.";
  var body = {
    "field": String(field),
    "meta": {
      "collection": String(collection),
      "display": String(display),
      "display_options": String(display_options),
      "field": String(field),
      "group": Number(group),
      "hidden": hidden,
      "id": Number(id),
      "locked": locked,
      "note": String(note),
      "options": String(options),
      "readonly": readonly,
      "sort": Number(sort),
      "special": String(special),
      "system-interface": String(system_interface),
      "translation": String(translation),
      "width": String(width),
    },
    "schema": {
      "comment": String(comment),
      "default_value": String(default_value),
      "foreign_key_column": String(foreign_key_column),
      "foreign_key_schema": String(foreign_key_schema),
      "foreign_key_table": String(foreign_key_table),
      "has_auto_increment": has_auto_increment,
      "is_nullable": is_nullable,
      "is_primary_key": is_primary_key,
      "max_length": Number(max_length),
      "name": String(name),
      "schema": String(schema),
      "table": String(table),
      "type": String(type),
    },
    "type": String(type),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Limit": Limit, "Sort": Sort, "collection": collection, "comment": comment, "default_value": default_value, "display": display, "display_options": display_options, "field": field, "foreign_key_column": foreign_key_column, "foreign_key_schema": foreign_key_schema, "foreign_key_table": foreign_key_table, "group": group, "has_auto_increment": has_auto_increment, "hidden": hidden, "id": id, "is_nullable": is_nullable, "is_primary_key": is_primary_key, "locked": locked, "max_length": max_length, "name": name, "note": note, "options": options, "readonly": readonly, "schema": schema, "sort": sort, "special": special, "system_interface": system_interface, "table": table, "translation": translation, "type": type, "width": width}) });
}

function getCollectionField(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Retrieves the details of a single field in a given collection.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateField(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Update an existing field.";
  var body = {
    "field": String(field),
    "meta": {
      "collection": String(collection),
      "display": String(display),
      "display_options": String(display_options),
      "field": String(field),
      "group": Number(group),
      "hidden": hidden,
      "id": Number(id),
      "locked": locked,
      "note": String(note),
      "options": String(options),
      "readonly": readonly,
      "sort": Number(sort),
      "special": String(special),
      "system-interface": String(system_interface),
      "translation": String(translation),
      "width": String(width),
    },
    "schema": {
      "comment": String(comment),
      "default_value": String(default_value),
      "foreign_key_column": String(foreign_key_column),
      "foreign_key_schema": String(foreign_key_schema),
      "foreign_key_table": String(foreign_key_table),
      "has_auto_increment": has_auto_increment,
      "is_nullable": is_nullable,
      "is_primary_key": is_primary_key,
      "max_length": Number(max_length),
      "name": String(name),
      "schema": String(schema),
      "table": String(table),
      "type": String(type),
    },
    "type": String(type),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Limit": Limit, "Sort": Sort, "collection": collection, "comment": comment, "default_value": default_value, "display": display, "display_options": display_options, "field": field, "foreign_key_column": foreign_key_column, "foreign_key_schema": foreign_key_schema, "foreign_key_table": foreign_key_table, "group": group, "has_auto_increment": has_auto_increment, "hidden": hidden, "id": id, "is_nullable": is_nullable, "is_primary_key": is_primary_key, "locked": locked, "max_length": max_length, "name": name, "note": note, "options": options, "readonly": readonly, "schema": schema, "sort": sort, "special": special, "system_interface": system_interface, "table": table, "translation": translation, "type": type, "width": width}) });
}

function deleteField(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Delete an existing field.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyFieldsExists generated: Primary Key "collection" is not in POST body (Server-Generated ID).
function waitForFieldsAdded(Limit, Sort, collection, comment, default_value, display, display_options, field, foreign_key_column, foreign_key_schema, foreign_key_table, group, has_auto_increment, hidden, id, is_nullable, is_primary_key, locked, max_length, name, note, options, readonly, schema, sort, special, system_interface, table, translation, type, width) {
  waitFor(matchSuccess("Create a new field in a given collection."));
}

function matchAnyFieldsAdded() {
  return bp.EventSet("Any Fields Added", function(e) {
      return e.name.startsWith("Done: Create a new field in a given collection.");
  });
}

function getFiles(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var description = "List the files.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function createFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var description = "Create a new file";
  var body = {
    "data": String(data),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "data": data, "description": description, "filename_download": filename_download, "folder": folder, "id": id, "tags": tags, "title": title}) });
}

function updateFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Update an existing file, and/or replace its file contents.";
  var body = {
    "description": String(description),
    "filename_download": String(filename_download),
    "folder": String(folder),
    "tags": [String(tags)],
    "title": String(title),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "data": data, "description": description, "filename_download": filename_download, "folder": folder, "id": id, "tags": tags, "title": title}) });
}

function deleteFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Delete an existing file.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function getFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var description = "Retrieve a single file by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

// No verifyFilesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForFilesAdded(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  waitFor(matchSuccess("Create a new file"));
}

function matchAnyFilesAdded() {
  return bp.EventSet("Any Files Added", function(e) {
      return e.name.startsWith("Done: Create a new file");
  });
}

function getFlows(Fields, Meta, data, id) {
  var url = "/flows";
  var description = "Get all flows.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createFlow(Fields, Meta, data, id) {
  var url = "/flows";
  var description = "Create a new flow.";
  var body = {
    "data": String(data),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Meta": Meta, "data": data, "id": id}) });
}

function updateFlow(Fields, Meta, data, id) {
  var url = "/flows/" + id;
  var description = "Update an existing flow";
  var body = {
    "data": String(data),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Meta": Meta, "data": data, "id": id}) });
}

function deleteFlow(Fields, Meta, data, id) {
  var url = "/flows/" + id;
  var description = "Delete an existing flow";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getFlow(Fields, Meta, data, id) {
  var url = "/flows/" + id;
  var description = "Retrieve a single flow by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyFlowsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForFlowsAdded(Fields, Meta, data, id) {
  waitFor(matchSuccess("Create a new flow."));
}

function matchAnyFlowsAdded() {
  return bp.EventSet("Any Flows Added", function(e) {
      return e.name.startsWith("Done: Create a new flow.");
  });
}

function getFolders(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders";
  var description = "List the folders.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders";
  var description = "Create a new folder.";
  var body = {
    "name": String(name),
    "parent": Number(parent),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "name": name, "parent": parent}) });
}

function updateFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders/" + id;
  var description = "Update an existing folder";
  var body = {
    "name": String(name),
    "parent": Number(parent),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "name": name, "parent": parent}) });
}

function deleteFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders/" + id;
  var description = "Delete an existing folder";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders/" + id;
  var description = "Retrieve a single folder by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyFoldersExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForFoldersAdded(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  waitFor(matchSuccess("Create a new folder."));
}

function matchAnyFoldersAdded() {
  return bp.EventSet("Any Folders Added", function(e) {
      return e.name.startsWith("Done: Create a new folder.");
  });
}

function getOperations(data, id, keys) {
  var url = "/operations";
  var description = "Get all operations.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createOperation(data, id, keys) {
  var url = "/operations";
  var description = "Create a new operation.";
  var body = {
    "data": String(data),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "id": id, "keys": keys}) });
}

function updateOperations(data, id, keys) {
  var url = "/operations";
  var description = "Update multiple operations at the same time.";
  var body = {
    "data": String(data),
    "keys": String(keys),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "id": id, "keys": keys}) });
}

function deleteOperations(data, id, keys) {
  var url = "/operations";
  var description = "Delete multiple existing operations.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function getOperation(data, id, keys) {
  var url = "/operations/" + id;
  var description = "Retrieve a single operation by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateOperation(data, id, keys) {
  var url = "/operations/" + id;
  var description = "Update an existing operation";
  var body = {
    "data": String(data),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "id": id, "keys": keys}) });
}

function deleteOperation(data, id, keys) {
  var url = "/operations/" + id;
  var description = "Delete an existing operation";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyOperationsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForOperationsAdded(data, id, keys) {
  waitFor(matchSuccess("Create a new operation."));
}

function matchAnyOperationsAdded() {
  return bp.EventSet("Any Operations Added", function(e) {
      return e.name.startsWith("Done: Create a new operation.");
  });
}

function getPermissions(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "List all permissions.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createPermission(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Create a new permission.";
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "read": String(read),
    "read_field_blacklist": String(read_field_blacklist),
    "role": Number(role),
    "status": String(status),
    "status_blacklist": String(status_blacklist),
    "update": String(update),
    "write_field_blacklist": String(write_field_blacklist),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "create": create, "data": data, "_delete": _delete, "explain": explain, "id": id, "keys": keys, "read": read, "read_field_blacklist": read_field_blacklist, "role": role, "status": status, "status_blacklist": status_blacklist, "update": update, "write_field_blacklist": write_field_blacklist}) });
}

function updatePermissions(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Update multiple permissions at the same time.";
  var body = {
    "data": String(data),
    "keys": String(keys),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "create": create, "data": data, "_delete": _delete, "explain": explain, "id": id, "keys": keys, "read": read, "read_field_blacklist": read_field_blacklist, "role": role, "status": status, "status_blacklist": status_blacklist, "update": update, "write_field_blacklist": write_field_blacklist}) });
}

function deletePermissions(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var description = "Delete multiple existing permissions.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function getPermission(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Retrieve a single permissions object by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updatePermission(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Update an existing permission";
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "read": String(read),
    "read_field_blacklist": String(read_field_blacklist),
    "role": Number(role),
    "status": String(status),
    "status_blacklist": String(status_blacklist),
    "update": String(update),
    "write_field_blacklist": String(write_field_blacklist),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"collection": collection, "comment": comment, "create": create, "data": data, "_delete": _delete, "explain": explain, "id": id, "keys": keys, "read": read, "read_field_blacklist": read_field_blacklist, "role": role, "status": status, "status_blacklist": status_blacklist, "update": update, "write_field_blacklist": write_field_blacklist}) });
}

function deletePermission(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var description = "Delete an existing permission";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getMyPermissions(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/me";
  var description = "List the permissions that apply to the current user.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyPermissionsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForPermissionsAdded(collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  waitFor(matchSuccess("Create a new permission."));
}

function matchAnyPermissionsAdded() {
  return bp.EventSet("Any Permissions Added", function(e) {
      return e.name.startsWith("Done: Create a new permission.");
  });
}

function getRelations(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "List the relations.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var description = "Create a new relation.";
  var body = {
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "junction_field": String(junction_field),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection_many": collection_many, "collection_one": collection_one, "field_many": field_many, "field_one": field_one, "id": id, "junction_field": junction_field}) });
}

function getRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Retrieve a single relation by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Update an existing relation";
  var body = {
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "junction_field": String(junction_field),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection_many": collection_many, "collection_one": collection_one, "field_many": field_many, "field_one": field_one, "id": id, "junction_field": junction_field}) });
}

function deleteRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var description = "Delete an existing relation.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyRelationsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForRelationsAdded(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  waitFor(matchSuccess("Create a new relation."));
}

function matchAnyRelationsAdded() {
  return bp.EventSet("Any Relations Added", function(e) {
      return e.name.startsWith("Done: Create a new relation.");
  });
}

function getRevisions(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, id) {
  var url = "/revisions";
  var description = "List the revisions.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getRevision(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, id) {
  var url = "/revisions/" + id;
  var description = "Retrieve a single revision by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyRevisionsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyRevisionsAdded() {
  return bp.EventSet("Any Revisions Added", function(e) {
      return e.name.startsWith("Done: Create Revisions");
  });
}

function getRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var description = "List the roles.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var description = "Create a new role.";
  var body = {
    "description": String(description),
    "enforce_tfa": enforce_tfa,
    "external_id": String(external_id),
    "ip_access": String(ip_access),
    "module_listing": String(module_listing),
    "name": String(name),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "description": description, "enforce_tfa": enforce_tfa, "external_id": external_id, "id": id, "ip_access": ip_access, "module_listing": module_listing, "name": name}) });
}

function updateRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Update an existing role";
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
  var description = "Delete an existing role";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var description = "Retrieve a single role by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyRolesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForRolesAdded(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  waitFor(matchSuccess("Create a new role."));
}

function matchAnyRolesAdded() {
  return bp.EventSet("Any Roles Added", function(e) {
      return e.name.startsWith("Done: Create a new role.");
  });
}

function schemaDiff(data, file, force, id) {
  var url = "/schema/diff";
  var description = "Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.";
  var body = {
    "data": String(data),
    "file": String(file),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"data": data, "file": file, "force": force, "id": id}) });
}

function schemaSnapshot(data, file, force, id) {
  var url = "/schema/snapshot";
  var description = "Retrieve the current schema. This endpoint is only available to admin users.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

// No verifySchemaExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForSchemaAdded(data, file, force, id) {
  waitFor(matchSuccess("Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users."));
}

function matchAnySchemaAdded() {
  return bp.EventSet("Any Schema Added", function(e) {
      return e.name.startsWith("Done: Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.");
  });
}

function serverInfo(id, super_admin_token) {
  var url = "/server/info";
  var description = "Perform a system status check and return the options.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function ping(id, super_admin_token) {
  var url = "/server/ping";
  var description = "Ping, pong. Ping.. pong.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyServerExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyServerAdded() {
  return bp.EventSet("Any Server Added", function(e) {
      return e.name.startsWith("Done: Create Server");
  });
}

function getSettings(Limit, Meta, Offset, Page, id) {
  var url = "/settings";
  var description = "List the settings.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateSetting(Limit, Meta, Offset, Page, id) {
  var url = "/settings";
  var description = "Update the settings";
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "id": id}) });
}

// No verifySettingsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnySettingsAdded() {
  return bp.EventSet("Any Settings Added", function(e) {
      return e.name.startsWith("Done: Create Settings");
  });
}

function getUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users";
  var description = "List the users.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/invite/accept";
  var description = "Accepts and enables an invited user using a JWT invitation token.";
  var body = {
    "password": String(password),
    "token": String(token),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function updateMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/me";
  var description = "Update the currently authenticated user.";
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function deleteUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users";
  var description = "Delete multiple existing users.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401] });
}

function invite(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/invite";
  var description = "Invites one or more users to this project.";
  var body = {
    "email": String(email),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function getMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/me";
  var description = "Retrieve the currently authenticated user.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateUser(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/" + id;
  var description = "Update an existing user";
  var body = {
    "data": String(data),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function deleteUser(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/" + id;
  var description = "Delete an existing user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function meTfaDisable(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/me/tfa/disable";
  var description = "Disables two-factor authentication for the currently authenticated user.";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function meTfaEnable(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/me/tfa/enable";
  var description = "Enables two-factor authentication for the currently authenticated user.";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

function updateLastUsedPageMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  var url = "/users/me/track/page";
  var description = "Updates the last used page field of the currently authenticated user.";
  var body = {
    "last_page": String(last_page),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
}

// No verifyUsersExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForUsersAdded(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, email, id, last_page, password, token) {
  waitFor(matchSuccess("Accepts and enables an invited user using a JWT invitation token."));
}

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Accepts and enables an invited user using a JWT invitation token.");
  });
}

function clearCache(id, length) {
  var url = "/utils/cache/clear";
  var description = "Resets both the data and schema cache of Directus.";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "length": length}) });
}

function random(id, length) {
  var url = "/utils/random/string";
  var description = "Returns a random string of given length.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyUtilitiesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
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
  var description = "Delete an existing Content Version.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getContentVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions";
  var description = "Get all Content Versions.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function updateContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id;
  var description = "Update an existing Content Version.";
  var body = {
    "data": String(data),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "data": data, "fields": fields, "id": id, "mainHash": mainHash}) });
}

function promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/promote";
  var description = "Pass the current hash of the main version of the item along with an optional array of field names to be promoted.";
  var body = {
    "fields": String(fields),
    "mainHash": String(mainHash),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "data": data, "fields": fields, "id": id, "mainHash": mainHash}) });
}

function compareContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/compare";
  var description = "Compare an existing Content Version with the main version of the item.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyVersionsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForVersionsAdded(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, fields, id, mainHash) {
  waitFor(matchSuccess("Pass the current hash of the main version of the item along with an optional array of field names to be promoted."));
}

function matchAnyVersionsAdded() {
  return bp.EventSet("Any Versions Added", function(e) {
      return e.name.startsWith("Done: Pass the current hash of the main version of the item along with an optional array of field names to be promoted.");
  });
}

function getWebhooks(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var description = "Get all webhooks.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function createWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var description = "Create a new webhook.";
  var body = {
    "actions": String(actions),
    "data": data,
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system_collections),
    "url": String(url),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Meta": Meta, "actions": actions, "data": data, "id": id, "method": method, "name": name, "status": status, "system_collections": system_collections, "url": url}) });
}

function updateWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Update an existing webhook";
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
  bp.sync({ request: bp.Event("Done: " + description, {"Fields": Fields, "Meta": Meta, "actions": actions, "data": data, "id": id, "method": method, "name": name, "status": status, "system_collections": system_collections, "url": url}) });
}

function deleteWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Delete an existing webhook";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

function getWebhook(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var description = "Retrieve a single webhook by unique identifier.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 401, 404] });
}

// No verifyWebhooksExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForWebhooksAdded(Fields, Meta, actions, data, id, method, name, status, system_collections, url) {
  waitFor(matchSuccess("Create a new webhook."));
}

function matchAnyWebhooksAdded() {
  return bp.EventSet("Any Webhooks Added", function(e) {
      return e.name.startsWith("Done: Create a new webhook.");
  });
}
