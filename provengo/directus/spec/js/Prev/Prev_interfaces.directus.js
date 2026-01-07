//@provengo summon rest
// === Auto-generated interfaces for directus ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8055;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function getActivities() {
  var url = "/activity";
  var reqDescription = "Returns a list of activity actions. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function getActivity(id) {
  var url = "/activity/" + id;
  var reqDescription = "Retrieves the details of an existing activity action. " + id;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function verifyActivityExists(id) {
  var url = "/activity/" + id;
  var description = "Verify Activity " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Activity found");
}

function verifyActivityDeleted(id) {
  var url = "/activity/" + id;
  var description = "Verify Activity " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Activity correctly deleted (404)");
}

function verifyActivityDoesNotExist(id) { verifyActivityDeleted(id); }

function matchAnyActivityAdded() {
  return bp.EventSet("Any Activity Added", function(e) {
      return e.name.startsWith("Done: Positive: Create Activity");
  });
}

function getAsset(id) {
  var url = "/assets/" + id;
  var reqDescription = "Image typed files can be dynamically resized and transformed to fit any need. " + id;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyAssetsExists(id) {
  var url = "/assets/" + id;
  var description = "Verify Assets " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Assets found");
}

function verifyAssetsDeleted(id) {
  var url = "/assets/" + id;
  var description = "Verify Assets " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Assets correctly deleted (404)");
}

function verifyAssetsDoesNotExist(id) { verifyAssetsDeleted(id); }

function matchAnyAssetsAdded() {
  return bp.EventSet("Any Assets Added", function(e) {
      return e.name.startsWith("Done: Positive: Create Assets");
  });
}

function passwordReset(password, provider, redirect, token) {
  var url = "/auth/password/reset";
  var reqDescription = "The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password. " + provider;
  var body = {
    "password": String(password),
    "token": String(token),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 401, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"password": password, "provider": provider, "redirect": redirect, "token": token}) });
  }
  return res;
}

function oauth() {
  var url = "/auth/oauth";
  var reqDescription = "List configured OAuth providers.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function oauthProvider(provider) {
  var url = "/auth/oauth/" + provider;
  var reqDescription = "Start OAuth flow using the specified provider";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function tryToAddExistingAuthentication(password, provider, redirect, token) {
  var url = "/auth/password/reset";
  var reqDescription = "Try Add Existing Authentication " + provider;
  var body = {
    "password": String(password),
    "token": String(token),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyAuthenticationRejects(password, provider, redirect, token) {
  var url = "/auth/password/reset";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "password": password,
    "token": token,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyAuthenticationExists(provider) {
  var url = "/auth/oauth/" + provider;
  var description = "Verify Authentication " + provider + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Authentication found");
}

function verifyAuthenticationDeleted(provider) {
  var url = "/auth/oauth/" + provider;
  var description = "Verify Authentication " + provider + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Authentication correctly deleted (404)");
}

function verifyAuthenticationDoesNotExist(provider) { verifyAuthenticationDeleted(provider); }

function matchAnyAuthenticationAdded() {
  return bp.EventSet("Any Authentication Added", function(e) {
      return e.name.startsWith("Done: Positive: The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.");
  });
}

function getCollections() {
  var url = "/collections";
  var reqDescription = "Returns a list of the collections available in the project. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function createCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var reqDescription = "Create a new collection in Directus. " + id;
  var body = {
    "id": id,
    "archive_app_filter": String(archive_app_filter),
    "archive_field": String(archive_field),
    "archive_value": String(archive_value),
    "collection": String(collection),
    "display_template": String(display_template),
    "fields": fields,
    "hidden": hidden,
    "icon": String(icon),
    "note": String(note),
    "singleton": singleton,
    "sort_field": String(sort_field),
    "translation": String(translation),
    "unarchive_value": String(unarchive_value),
    "versioning": versioning,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Meta": Meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "archive_field": archive_field, "archive_value": archive_value, "collection": collection, "display_template": display_template, "fields": fields, "hidden": hidden, "icon": icon, "id": id, "meta": meta, "note": note, "singleton": singleton, "sort_field": sort_field, "translation": translation, "unarchive_value": unarchive_value, "versioning": versioning}) });
  }
  return res;
}

function deleteCollection(id) {
  var url = "/collections/" + id;
  var reqDescription = "Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution. " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getCollection(id) {
  var url = "/collections/" + id;
  var reqDescription = "Retrieves the details of a single collection. " + id;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function updateCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections/" + id;
  var reqDescription = "Update an existing collection. " + id;
  var body = {
    "meta": meta,
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Meta": Meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "archive_field": archive_field, "archive_value": archive_value, "collection": collection, "display_template": display_template, "fields": fields, "hidden": hidden, "icon": icon, "id": id, "meta": meta, "note": note, "singleton": singleton, "sort_field": sort_field, "translation": translation, "unarchive_value": unarchive_value, "versioning": versioning}) });
  }
  return res;
}

function tryToAddExistingCollections(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var reqDescription = "Try Add Existing Collections " + id;
  var body = {
    "id": id,
    "archive_app_filter": String(archive_app_filter),
    "archive_field": String(archive_field),
    "archive_value": String(archive_value),
    "collection": String(collection),
    "display_template": String(display_template),
    "fields": fields,
    "hidden": hidden,
    "icon": String(icon),
    "note": String(note),
    "singleton": singleton,
    "sort_field": String(sort_field),
    "translation": String(translation),
    "unarchive_value": String(unarchive_value),
    "versioning": versioning,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyCollectionsRejects(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "archive_app_filter": archive_app_filter,
    "archive_field": archive_field,
    "archive_value": archive_value,
    "collection": collection,
    "display_template": display_template,
    "fields": fields,
    "hidden": hidden,
    "icon": icon,
    "id": id,
    "note": note,
    "singleton": singleton,
    "sort_field": sort_field,
    "translation": translation,
    "unarchive_value": unarchive_value,
    "versioning": versioning,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyCollectionsExists(id) {
  var url = "/collections/" + id;
  var description = "Verify Collections " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Collections found");
}

function verifyCollectionsDeleted(id) {
  var url = "/collections/" + id;
  var description = "Verify Collections " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Collections correctly deleted (404)");
}

function verifyCollectionsDoesNotExist(id) { verifyCollectionsDeleted(id); }

function matchAnyCollectionsAdded() {
  return bp.EventSet("Any Collections Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new collection in Directus.");
  });
}

function matchDeletedCollections(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  return bp.EventSet("Delete Collections", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.");
  });
}

function getItems(collection) {
  var url = "/items/" + collection;
  var reqDescription = "List the items. " + collection;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function createItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, id) {
  var url = "/items/" + collection;
  var reqDescription = "Create a new item. " + collection;
  var body = {
    "id": id,
    "Meta": String(Meta),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Collection": Collection, "Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "collection": collection, "id": id}) });
  }
  return res;
}

function updateItems(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, id) {
  var url = "/items/" + collection;
  var reqDescription = "Update multiple items at the same time. " + collection;
  var body = {
    "id": id,
    "Fields": String(Fields),
    "Filter": String(Filter),
    "Limit": String(Limit),
    "Meta": String(Meta),
    "Offset": String(Offset),
    "Search": String(Search),
    "Sort": String(Sort),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Collection": Collection, "Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "collection": collection, "id": id}) });
  }
  return res;
}

function deleteItems(collection) {
  var url = "/items/" + collection;
  var reqDescription = "Delete multiple existing items. " + collection;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getItems(collection) {
  var url = "/items/" + collection;
  var reqDescription = "List Items " + collection;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function updateItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, id) {
  var url = "/items/" + collection + "/" + id;
  var reqDescription = "Update an existing item. " + collection;
  var body = {
    "Fields": String(Fields),
    "Meta": String(Meta),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Collection": Collection, "Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "collection": collection, "id": id}) });
  }
  return res;
}

function deleteItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var reqDescription = "Delete an existing item. " + collection;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingItems(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, id) {
  var url = "/items/" + collection;
  var reqDescription = "Try Add Existing Items " + collection;
  var body = {
    "id": id,
    "Meta": String(Meta),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyItemsRejects(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, id) {
  var url = "/items/" + collection;
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "Meta": Meta,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyItemsExists(collection) {
  var url = "/items/" + collection;
  var description = "Verify Items " + collection + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Items found");
}

function verifyItemsDeleted(collection) {
  var url = "/items/" + collection;
  var description = "Verify Items " + collection + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Items correctly deleted (404)");
}

function verifyItemsDoesNotExist(collection) { verifyItemsDeleted(collection); }

function matchAnyItemsAdded() {
  return bp.EventSet("Any Items Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new item.");
  });
}

function matchDeletedItems(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, id) {
  return bp.EventSet("Delete Items", function(e) {
      return e.name.startsWith("Done: Positive: Delete multiple existing items.");
  });
}

function getPresets() {
  var url = "/presets";
  var reqDescription = "List the presets. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function createPreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, data, filters, id, keys, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var reqDescription = "Create a new preset. " + id;
  var body = {
    "id": id,
    "collection": String(collection),
    "filters": filters,
    "layout": String(layout),
    "layout_options": String(layout_options),
    "layout_query": String(layout_query),
    "role": String(role),
    "search": String(search),
    "title": String(title),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection": collection, "data": data, "filters": filters, "id": id, "keys": keys, "layout": layout, "layout_options": layout_options, "layout_query": layout_query, "role": role, "search": search, "search_query": search_query, "title": title, "translation": translation, "view_options": view_options, "view_query": view_query, "view_type": view_type}) });
  }
  return res;
}

function updatePresets(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, data, filters, id, keys, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var reqDescription = "Update multiple presets at the same time. " + id;
  var body = {
    "id": id,
    "data": data,
    "keys": keys,
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection": collection, "data": data, "filters": filters, "id": id, "keys": keys, "layout": layout, "layout_options": layout_options, "layout_query": layout_query, "role": role, "search": search, "search_query": search_query, "title": title, "translation": translation, "view_options": view_options, "view_query": view_query, "view_type": view_type}) });
  }
  return res;
}

function deletePresets() {
  var url = "/presets";
  var reqDescription = "Delete multiple existing presets. {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getPreset(id) {
  var url = "/presets/" + id;
  var reqDescription = "Retrieve a single preset by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function updatePreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, data, filters, id, keys, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets/" + id;
  var reqDescription = "Update an existing preset. " + id;
  var body = {
    "collection": String(collection),
    "filters": filters,
    "role": role,
    "search_query": String(search_query),
    "title": String(title),
    "translation": translation,
    "view_options": String(view_options),
    "view_query": String(view_query),
    "view_type": String(view_type),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection": collection, "data": data, "filters": filters, "id": id, "keys": keys, "layout": layout, "layout_options": layout_options, "layout_query": layout_query, "role": role, "search": search, "search_query": search_query, "title": title, "translation": translation, "view_options": view_options, "view_query": view_query, "view_type": view_type}) });
  }
  return res;
}

function deletePreset(id) {
  var url = "/presets/" + id;
  var reqDescription = "Delete an existing preset. " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingPresets(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, data, filters, id, keys, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var reqDescription = "Try Add Existing Presets " + id;
  var body = {
    "id": id,
    "collection": String(collection),
    "filters": filters,
    "layout": String(layout),
    "layout_options": String(layout_options),
    "layout_query": String(layout_query),
    "role": String(role),
    "search": String(search),
    "title": String(title),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyPresetsRejects(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, data, filters, id, keys, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "collection": collection,
    "filters": filters,
    "id": id,
    "layout": layout,
    "layout_options": layout_options,
    "layout_query": layout_query,
    "role": role,
    "search": search,
    "title": title,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyPresetsExists(id) {
  var url = "/presets/" + id;
  var description = "Verify Presets " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Presets found");
}

function verifyPresetsDeleted(id) {
  var url = "/presets/" + id;
  var description = "Verify Presets " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Presets correctly deleted (404)");
}

function verifyPresetsDoesNotExist(id) { verifyPresetsDeleted(id); }

function matchAnyPresetsAdded() {
  return bp.EventSet("Any Presets Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new preset.");
  });
}

function matchDeletedPresets(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, data, filters, id, keys, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  return bp.EventSet("Delete Presets", function(e) {
      return e.name.startsWith("Done: Positive: Delete multiple existing presets.");
  });
}

function deleteComment(id) {
  var url = "/comments/" + id;
  var reqDescription = "Delete an existing comment. " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getComments() {
  var url = "/comments";
  var reqDescription = "List the comments. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function updateComment(collection, comment, id, item) {
  var url = "/comments/" + id;
  var reqDescription = "Update an existing comment. " + id;
  var body = {
    "collection": String(collection),
    "comment": String(comment),
    "item": String(item),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "comment": comment, "id": id, "item": item}) });
  }
  return res;
}

function createComment(collection, comment, id, item) {
  var url = "/comments";
  var reqDescription = "Create a new comment. " + id;
  var body = {
    "id": id,
    "collection": String(collection),
    "comment": String(comment),
    "item": String(item),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "comment": comment, "id": id, "item": item}) });
  }
  return res;
}

function getComment(id) {
  var url = "/comments/" + id;
  var reqDescription = "Retrieve a single comment by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function tryToAddExistingComments(collection, comment, id, item) {
  var url = "/comments";
  var reqDescription = "Try Add Existing Comments " + id;
  var body = {
    "id": id,
    "collection": String(collection),
    "comment": String(comment),
    "item": String(item),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyCommentsRejects(collection, comment, id, item) {
  var url = "/comments";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "collection": collection,
    "comment": comment,
    "id": id,
    "item": item,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyCommentsExists(id) {
  var url = "/comments/" + id;
  var description = "Verify Comments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Comments found");
}

function verifyCommentsDeleted(id) {
  var url = "/comments/" + id;
  var description = "Verify Comments " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Comments correctly deleted (404)");
}

function verifyCommentsDoesNotExist(id) { verifyCommentsDeleted(id); }

function matchAnyCommentsAdded() {
  return bp.EventSet("Any Comments Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new comment.");
  });
}

function matchDeletedComments(collection, comment, id, item) {
  return bp.EventSet("Delete Comments", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing comment.");
  });
}

function listExtensions() {
  var url = "/extensions";
  var reqDescription = "List the installed extensions and their configuration in the project. {name}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function updateExtensions(meta, name) {
  var url = "/extensions/" + name;
  var reqDescription = "Update an Extension " + name;
  var body = {
    "meta": meta,
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"meta": meta, "name": name}) });
  }
  return res;
}

function verifyExtensionsExists(meta, name) {
  // Fallback: Use list operation to verify existence
  let res = listExtensions(meta, name);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.name == name || item.id == name);
          if (found) pvg.success("Extensions found in list");
          else pvg.fail("Extensions NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyExtensionsDeleted(meta, name) {
  // Fallback: Use list operation to verify deletion
  let res = listExtensions(meta, name);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.name == name || item.id == name);
          if (!found) pvg.success("Extensions correctly not found in list");
          else pvg.fail("Extensions still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyExtensionsDoesNotExist(meta, name) { verifyExtensionsDeleted(meta, name); }

function matchAnyExtensionsAdded() {
  return bp.EventSet("Any Extensions Added", function(e) {
      return e.name.startsWith("Done: Positive: Create Extensions");
  });
}

function getCollectionFields(collection) {
  var url = "/fields/" + collection;
  var reqDescription = "Returns a list of the fields available in the given collection.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function createField(Sort, collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection;
  var reqDescription = "Create a new field in a given collection.";
  var body = {
    "id": id,
    "field": String(field),
    "meta": meta,
    "schema": schema,
    "type": String(type),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "collection": collection, "field": field, "id": id, "meta": meta, "schema": schema, "type": type}) });
  }
  return res;
}

function getCollectionFields(collection) {
  var url = "/fields/" + collection;
  var reqDescription = "List Fields in Collection " + collection;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function updateField(Sort, collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection + "/" + id;
  var reqDescription = "Update an existing field. " + collection;
  var body = {
    "field": String(field),
    "meta": meta,
    "schema": schema,
    "type": String(type),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "collection": collection, "field": field, "id": id, "meta": meta, "schema": schema, "type": type}) });
  }
  return res;
}

function deleteField(collection, id) {
  var url = "/fields/" + collection + "/" + id;
  var reqDescription = "Delete an existing field. " + collection;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingFields(Sort, collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection;
  var reqDescription = "Try Add Existing Fields " + collection;
  var body = {
    "id": id,
    "field": String(field),
    "meta": meta,
    "schema": schema,
    "type": String(type),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyFieldsRejects(Sort, collection, field, id, meta, schema, type) {
  var url = "/fields/" + collection;
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "field": field,
    "id": id,
    "meta": meta,
    "schema": schema,
    "type": type,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyFieldsExists(collection) {
  var url = "/fields/" + collection;
  var description = "Verify Fields " + collection + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Fields found");
}

function verifyFieldsDeleted(collection) {
  var url = "/fields/" + collection;
  var description = "Verify Fields " + collection + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Fields correctly deleted (404)");
}

function verifyFieldsDoesNotExist(collection) { verifyFieldsDeleted(collection); }

function matchAnyFieldsAdded() {
  return bp.EventSet("Any Fields Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new field in a given collection.");
  });
}

function matchDeletedFields(Sort, collection, field, id, meta, schema, type) {
  return bp.EventSet("Delete Fields", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing field.");
  });
}

function getFiles() {
  var url = "/files";
  var reqDescription = "List the files. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function createFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var reqDescription = "Create a new file " + id;
  var body = {
    "id": id,
    "data": String(data),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "data": data, "description": description, "filename_download": filename_download, "folder": folder, "id": id, "tags": tags, "title": title}) });
  }
  return res;
}

function updateFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files/" + id;
  var reqDescription = "Update an existing file, and/or replace its file contents. " + id;
  var body = {
    "description": String(description),
    "filename_download": String(filename_download),
    "folder": String(folder),
    "tags": tags,
    "title": String(title),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "data": data, "description": description, "filename_download": filename_download, "folder": folder, "id": id, "tags": tags, "title": title}) });
  }
  return res;
}

function deleteFile(id) {
  var url = "/files/" + id;
  var reqDescription = "Delete an existing file. " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getFile(id) {
  var url = "/files/" + id;
  var reqDescription = "Retrieve a single file by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401] });
}

function tryToAddExistingFiles(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var reqDescription = "Try Add Existing Files " + id;
  var body = {
    "id": id,
    "data": String(data),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyFilesRejects(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "data": data,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyFilesExists(id) {
  var url = "/files/" + id;
  var description = "Verify Files " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Files found");
}

function verifyFilesDeleted(id) {
  var url = "/files/" + id;
  var description = "Verify Files " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Files correctly deleted (404)");
}

function verifyFilesDoesNotExist(id) { verifyFilesDeleted(id); }

function matchAnyFilesAdded() {
  return bp.EventSet("Any Files Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new file");
  });
}

function matchDeletedFiles(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  return bp.EventSet("Delete Files", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing file.");
  });
}

function deleteFlow(id) {
  var url = "/flows/" + id;
  var reqDescription = "Delete an existing flow " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getFlows() {
  var url = "/flows";
  var reqDescription = "Get all flows. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function createFlow(Fields, Meta, data, id) {
  var url = "/flows";
  var reqDescription = "Create a new flow. " + id;
  var body = {
    "id": id,
    "Fields": String(Fields),
    "Meta": String(Meta),
    "data": data,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Meta": Meta, "data": data, "id": id}) });
  }
  return res;
}

function updateFlow(Fields, Meta, data, id) {
  var url = "/flows/" + id;
  var reqDescription = "Update an existing flow " + id;
  var body = {
    "Fields": String(Fields),
    "Meta": String(Meta),
    "data": data,
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Meta": Meta, "data": data, "id": id}) });
  }
  return res;
}

function getFlow(id) {
  var url = "/flows/" + id;
  var reqDescription = "Retrieve a single flow by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingFlows(Fields, Meta, data, id) {
  var url = "/flows";
  var reqDescription = "Try Add Existing Flows " + id;
  var body = {
    "id": id,
    "Fields": String(Fields),
    "Meta": String(Meta),
    "data": data,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyFlowsRejects(Fields, Meta, data, id) {
  var url = "/flows";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "Fields": Fields,
    "Meta": Meta,
    "data": data,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyFlowsExists(id) {
  var url = "/flows/" + id;
  var description = "Verify Flows " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Flows found");
}

function verifyFlowsDeleted(id) {
  var url = "/flows/" + id;
  var description = "Verify Flows " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Flows correctly deleted (404)");
}

function verifyFlowsDoesNotExist(id) { verifyFlowsDeleted(id); }

function matchAnyFlowsAdded() {
  return bp.EventSet("Any Flows Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new flow.");
  });
}

function matchDeletedFlows(Fields, Meta, data, id) {
  return bp.EventSet("Delete Flows", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing flow");
  });
}

function deleteFolder(id) {
  var url = "/folders/" + id;
  var reqDescription = "Delete an existing folder " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getFolders() {
  var url = "/folders";
  var reqDescription = "List the folders. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function createFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders";
  var reqDescription = "Create a new folder. " + id;
  var body = {
    "id": id,
    "name": String(name),
    "parent": parent,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "name": name, "parent": parent}) });
  }
  return res;
}

function updateFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders/" + id;
  var reqDescription = "Update an existing folder " + id;
  var body = {
    "name": String(name),
    "parent": parent,
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "id": id, "name": name, "parent": parent}) });
  }
  return res;
}

function getFolder(id) {
  var url = "/folders/" + id;
  var reqDescription = "Retrieve a single folder by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingFolders(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders";
  var reqDescription = "Try Add Existing Folders " + id;
  var body = {
    "id": id,
    "name": String(name),
    "parent": parent,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyFoldersRejects(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
    "name": name,
    "parent": parent,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyFoldersExists(id) {
  var url = "/folders/" + id;
  var description = "Verify Folders " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Folders found");
}

function verifyFoldersDeleted(id) {
  var url = "/folders/" + id;
  var description = "Verify Folders " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Folders correctly deleted (404)");
}

function verifyFoldersDoesNotExist(id) { verifyFoldersDeleted(id); }

function matchAnyFoldersAdded() {
  return bp.EventSet("Any Folders Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new folder.");
  });
}

function matchDeletedFolders(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  return bp.EventSet("Delete Folders", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing folder");
  });
}

function deleteOperation(id) {
  var url = "/operations/" + id;
  var reqDescription = "Delete an existing operation " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getOperations() {
  var url = "/operations";
  var reqDescription = "Get all operations. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function updateOperation(Fields, Meta, UUId, data, id) {
  var url = "/operations/" + id;
  var reqDescription = "Update an existing operation " + id;
  var body = {
    "Fields": String(Fields),
    "Meta": String(Meta),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Meta": Meta, "UUId": UUId, "data": data, "id": id}) });
  }
  return res;
}

function createOperation(Fields, Meta, UUId, data, id) {
  var url = "/operations";
  var reqDescription = "Create a new operation. " + id;
  var body = {
    "id": id,
    "Fields": String(Fields),
    "Meta": String(Meta),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Meta": Meta, "UUId": UUId, "data": data, "id": id}) });
  }
  return res;
}

function getOperation(id) {
  var url = "/operations/" + id;
  var reqDescription = "Retrieve a single operation by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingOperations(Fields, Meta, UUId, data, id) {
  var url = "/operations";
  var reqDescription = "Try Add Existing Operations " + id;
  var body = {
    "id": id,
    "Fields": String(Fields),
    "Meta": String(Meta),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyOperationsRejects(Fields, Meta, UUId, data, id) {
  var url = "/operations";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "Fields": Fields,
    "Meta": Meta,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyOperationsExists(id) {
  var url = "/operations/" + id;
  var description = "Verify Operations " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Operations found");
}

function verifyOperationsDeleted(id) {
  var url = "/operations/" + id;
  var description = "Verify Operations " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Operations correctly deleted (404)");
}

function verifyOperationsDoesNotExist(id) { verifyOperationsDeleted(id); }

function matchAnyOperationsAdded() {
  return bp.EventSet("Any Operations Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new operation.");
  });
}

function matchDeletedOperations(Fields, Meta, UUId, data, id) {
  return bp.EventSet("Delete Operations", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing operation");
  });
}

function deletePermission(id) {
  var url = "/permissions/" + id;
  var reqDescription = "Delete an existing permission " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getMyPermissions() {
  var url = "/permissions/me";
  var reqDescription = "List the permissions that apply to the current user. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function updatePermission(Fields, Id, Meta, collection, comment, create, _delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions/" + id;
  var reqDescription = "Update an existing permission " + id;
  var body = {
    "collection": collection,
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "read": String(read),
    "read_field_blacklist": read_field_blacklist,
    "role": role,
    "status": status,
    "status_blacklist": status_blacklist,
    "update": String(update),
    "write_field_blacklist": write_field_blacklist,
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Id": Id, "Meta": Meta, "collection": collection, "comment": comment, "create": create, "delete": _delete, "explain": explain, "id": id, "read": read, "read_field_blacklist": read_field_blacklist, "role": role, "status": status, "status_blacklist": status_blacklist, "update": update, "write_field_blacklist": write_field_blacklist}) });
  }
  return res;
}

function createPermission(Fields, Id, Meta, collection, comment, create, _delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var reqDescription = "Create a new permission. " + id;
  var body = {
    "id": id,
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "read": String(read),
    "read_field_blacklist": read_field_blacklist,
    "role": role,
    "status": String(status),
    "status_blacklist": status_blacklist,
    "update": String(update),
    "write_field_blacklist": write_field_blacklist,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Id": Id, "Meta": Meta, "collection": collection, "comment": comment, "create": create, "delete": _delete, "explain": explain, "id": id, "read": read, "read_field_blacklist": read_field_blacklist, "role": role, "status": status, "status_blacklist": status_blacklist, "update": update, "write_field_blacklist": write_field_blacklist}) });
  }
  return res;
}

function getPermission(id) {
  var url = "/permissions/" + id;
  var reqDescription = "Retrieve a single permissions object by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingPermissions(Fields, Id, Meta, collection, comment, create, _delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var reqDescription = "Try Add Existing Permissions " + id;
  var body = {
    "id": id,
    "collection": String(collection),
    "comment": String(comment),
    "create": String(create),
    "delete": String(_delete),
    "explain": String(explain),
    "read": String(read),
    "read_field_blacklist": read_field_blacklist,
    "role": role,
    "status": String(status),
    "status_blacklist": status_blacklist,
    "update": String(update),
    "write_field_blacklist": write_field_blacklist,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyPermissionsRejects(Fields, Id, Meta, collection, comment, create, _delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "collection": collection,
    "comment": comment,
    "create": create,
    "delete": _delete,
    "explain": explain,
    "id": id,
    "read": read,
    "read_field_blacklist": read_field_blacklist,
    "role": role,
    "status": status,
    "status_blacklist": status_blacklist,
    "update": update,
    "write_field_blacklist": write_field_blacklist,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyPermissionsExists(id) {
  var url = "/permissions/" + id;
  var description = "Verify Permissions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Permissions found");
}

function verifyPermissionsDeleted(id) {
  var url = "/permissions/" + id;
  var description = "Verify Permissions " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Permissions correctly deleted (404)");
}

function verifyPermissionsDoesNotExist(id) { verifyPermissionsDeleted(id); }

function matchAnyPermissionsAdded() {
  return bp.EventSet("Any Permissions Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new permission.");
  });
}

function matchDeletedPermissions(Fields, Id, Meta, collection, comment, create, _delete, explain, id, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  return bp.EventSet("Delete Permissions", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing permission");
  });
}

function getRelations() {
  var url = "/relations";
  var reqDescription = "List the relations. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function createRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var reqDescription = "Create a new relation. " + id;
  var body = {
    "id": id,
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "junction_field": String(junction_field),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection_many": collection_many, "collection_one": collection_one, "field_many": field_many, "field_one": field_one, "id": id, "junction_field": junction_field}) });
  }
  return res;
}

function getRelation(id) {
  var url = "/relations/" + id;
  var reqDescription = "Retrieve a single relation by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function updateRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations/" + id;
  var reqDescription = "Update an existing relation " + id;
  var body = {
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "junction_field": String(junction_field),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Id": Id, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "collection_many": collection_many, "collection_one": collection_one, "field_many": field_many, "field_one": field_one, "id": id, "junction_field": junction_field}) });
  }
  return res;
}

function deleteRelation(id) {
  var url = "/relations/" + id;
  var reqDescription = "Delete an existing relation. " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function tryToAddExistingRelations(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var reqDescription = "Try Add Existing Relations " + id;
  var body = {
    "id": id,
    "collection_many": String(collection_many),
    "collection_one": String(collection_one),
    "field_many": String(field_many),
    "field_one": String(field_one),
    "junction_field": String(junction_field),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyRelationsRejects(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "collection_many": collection_many,
    "collection_one": collection_one,
    "field_many": field_many,
    "field_one": field_one,
    "id": id,
    "junction_field": junction_field,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyRelationsExists(id) {
  var url = "/relations/" + id;
  var description = "Verify Relations " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Relations found");
}

function verifyRelationsDeleted(id) {
  var url = "/relations/" + id;
  var description = "Verify Relations " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Relations correctly deleted (404)");
}

function verifyRelationsDoesNotExist(id) { verifyRelationsDeleted(id); }

function matchAnyRelationsAdded() {
  return bp.EventSet("Any Relations Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new relation.");
  });
}

function matchDeletedRelations(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  return bp.EventSet("Delete Relations", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing relation.");
  });
}

function getRevisions() {
  var url = "/revisions";
  var reqDescription = "List the revisions. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function getRevision(id) {
  var url = "/revisions/" + id;
  var reqDescription = "Retrieve a single revision by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function verifyRevisionsExists(id) {
  var url = "/revisions/" + id;
  var description = "Verify Revisions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Revisions found");
}

function verifyRevisionsDeleted(id) {
  var url = "/revisions/" + id;
  var description = "Verify Revisions " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Revisions correctly deleted (404)");
}

function verifyRevisionsDoesNotExist(id) { verifyRevisionsDeleted(id); }

function matchAnyRevisionsAdded() {
  return bp.EventSet("Any Revisions Added", function(e) {
      return e.name.startsWith("Done: Positive: Create Revisions");
  });
}

function getRoles() {
  var url = "/roles";
  var reqDescription = "List the roles. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var reqDescription = "Create a new role. " + id;
  var body = {
    "id": id,
    "description": String(description),
    "enforce_tfa": enforce_tfa,
    "external_id": String(external_id),
    "ip_access": ip_access,
    "module_listing": String(module_listing),
    "name": String(name),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "description": description, "enforce_tfa": enforce_tfa, "external_id": external_id, "id": id, "ip_access": ip_access, "module_listing": module_listing, "name": name}) });
  }
  return res;
}

function updateRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles/" + id;
  var reqDescription = "Update an existing role " + id;
  var body = {
    "description": String(description),
    "enforce_tfa": enforce_tfa,
    "external_id": String(external_id),
    "ip_access": ip_access,
    "module_listing": String(module_listing),
    "name": String(name),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "Search": Search, "Sort": Sort, "description": description, "enforce_tfa": enforce_tfa, "external_id": external_id, "id": id, "ip_access": ip_access, "module_listing": module_listing, "name": name}) });
  }
  return res;
}

function deleteRole(id) {
  var url = "/roles/" + id;
  var reqDescription = "Delete an existing role " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getRole(id) {
  var url = "/roles/" + id;
  var reqDescription = "Retrieve a single role by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var reqDescription = "Try Add Existing Roles " + id;
  var body = {
    "id": id,
    "description": String(description),
    "enforce_tfa": enforce_tfa,
    "external_id": String(external_id),
    "ip_access": ip_access,
    "module_listing": String(module_listing),
    "name": String(name),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyRolesRejects(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "description": description,
    "enforce_tfa": enforce_tfa,
    "external_id": external_id,
    "id": id,
    "ip_access": ip_access,
    "module_listing": module_listing,
    "name": name,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyRolesExists(id) {
  var url = "/roles/" + id;
  var description = "Verify Roles " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Roles found");
}

function verifyRolesDeleted(id) {
  var url = "/roles/" + id;
  var description = "Verify Roles " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Roles correctly deleted (404)");
}

function verifyRolesDoesNotExist(id) { verifyRolesDeleted(id); }

function matchAnyRolesAdded() {
  return bp.EventSet("Any Roles Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new role.");
  });
}

function matchDeletedRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  return bp.EventSet("Delete Roles", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing role");
  });
}

function schemaApply(Export, data, force, id) {
  var url = "/schema/apply";
  var reqDescription = "Update the instance's schema by passing the diff previously retrieved via `/schema/diff` endpoint in the JSON request body or a JSON/YAML file. This endpoint is only available to admin users. " + id;
  var body = {
    "id": id,
    "data": String(data),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Export": Export, "data": data, "force": force, "id": id}) });
  }
  return res;
}

function schemaDiff(Export, data, force, id) {
  var url = "/schema/diff";
  var reqDescription = "Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users. " + id;
  var body = {
    "id": id,
    "data": String(data),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 409], parameters: { description: reqDescription }, queryParameters: {    "force": force} });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Export": Export, "data": data, "force": force, "id": id}) });
  }
  return res;
}

function schemaSnapshot() {
  var url = "/schema/snapshot";
  var reqDescription = "Retrieve the current schema. This endpoint is only available to admin users. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403] });
}

function verifySchemaRejects(Export, data, force, id) {
  var url = "/schema/apply";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "data": data,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifySchemaExists(Export, data, force, id) {
  // Fallback: Use list operation to verify existence
  let res = schemaSnapshot(Export, data, force, id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Schema found in list");
          else pvg.fail("Schema NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySchemaDeleted(Export, data, force, id) {
  // Fallback: Use list operation to verify deletion
  let res = schemaSnapshot(Export, data, force, id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Schema correctly not found in list");
          else pvg.fail("Schema still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySchemaDoesNotExist(Export, data, force, id) { verifySchemaDeleted(Export, data, force, id); }

function matchAnySchemaAdded() {
  return bp.EventSet("Any Schema Added", function(e) {
      return e.name.startsWith("Done: Positive: Update the instance's schema by passing the diff previously retrieved via `/schema/diff` endpoint in the JSON request body or a JSON/YAML file. This endpoint is only available to admin users.");
  });
}

function serverInfo() {
  var url = "/server/info";
  var reqDescription = "Perform a system status check and return the options. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function ping() {
  var url = "/server/ping";
  var reqDescription = "Ping, pong. Ping.. pong. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyServerExists(id, super_admin_token) {
  // Fallback: Use list operation to verify existence
  let res = serverInfo(id, super_admin_token);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Server found in list");
          else pvg.fail("Server NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyServerDeleted(id, super_admin_token) {
  // Fallback: Use list operation to verify deletion
  let res = serverInfo(id, super_admin_token);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Server correctly not found in list");
          else pvg.fail("Server still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyServerDoesNotExist(id, super_admin_token) { verifyServerDeleted(id, super_admin_token); }

function matchAnyServerAdded() {
  return bp.EventSet("Any Server Added", function(e) {
      return e.name.startsWith("Done: Positive: Create Server");
  });
}

function getSettings() {
  var url = "/settings";
  var reqDescription = "List the settings. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function updateSetting(Limit, Meta, Offset, Page, id) {
  var url = "/settings";
  var reqDescription = "Update the settings " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Limit": Limit, "Meta": Meta, "Offset": Offset, "Page": Page, "id": id}) });
  }
  return res;
}

function verifySettingsExists(Limit, Meta, Offset, Page, id) {
  // Fallback: Use list operation to verify existence
  let res = getSettings(Limit, Meta, Offset, Page, id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Settings found in list");
          else pvg.fail("Settings NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySettingsDeleted(Limit, Meta, Offset, Page, id) {
  // Fallback: Use list operation to verify deletion
  let res = getSettings(Limit, Meta, Offset, Page, id);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Settings correctly not found in list");
          else pvg.fail("Settings still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySettingsDoesNotExist(Limit, Meta, Offset, Page, id) { verifySettingsDeleted(Limit, Meta, Offset, Page, id); }

function matchAnySettingsAdded() {
  return bp.EventSet("Any Settings Added", function(e) {
      return e.name.startsWith("Done: Positive: Create Settings");
  });
}

function getUsers() {
  var url = "/users";
  var reqDescription = "List the users. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  var url = "/users/invite/accept";
  var reqDescription = "Accepts and enables an invited user using a JWT invitation token. " + id;
  var body = {
    "id": id,
    "password": String(password),
    "token": String(token),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
  }
  return res;
}

function updateMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  var url = "/users/me";
  var reqDescription = "Update the currently authenticated user. " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
  }
  return res;
}

function deleteUser(id) {
  var url = "/users/" + id;
  var reqDescription = "Delete an existing user " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function invite(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  var url = "/users/invite";
  var reqDescription = "Invites one or more users to this project. " + id;
  var body = {
    "id": id,
    "email": String(email),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
  }
  return res;
}

function getMe() {
  var url = "/users/me";
  var reqDescription = "Retrieve the currently authenticated user. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function meTfaEnable(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  var url = "/users/me/tfa/enable";
  var reqDescription = "Enables two-factor authentication for the currently authenticated user. " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
  }
  return res;
}

function meTfaDisable(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  var url = "/users/me/tfa/disable";
  var reqDescription = "Disables two-factor authentication for the currently authenticated user. " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
  }
  return res;
}

function updateLastUsedPageMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  var url = "/users/me/track/page";
  var reqDescription = "Updates the last used page field of the currently authenticated user. " + id;
  var body = {
    "id": id,
    "last_page": String(last_page),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "email": email, "id": id, "last_page": last_page, "password": password, "token": token}) });
  }
  return res;
}

function verifyUsersRejects(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  var url = "/users/invite/accept";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
    "password": password,
    "token": token,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyUsersExists(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  // Fallback: Use list operation to verify existence
  let res = getUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Users found in list");
          else pvg.fail("Users NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUsersDeleted(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  // Fallback: Use list operation to verify deletion
  let res = getUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Users correctly not found in list");
          else pvg.fail("Users still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUsersDoesNotExist(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) { verifyUsersDeleted(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token); }

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Positive: Accepts and enables an invited user using a JWT invitation token.");
  });
}

function matchDeletedUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, email, id, last_page, password, token) {
  return bp.EventSet("Delete Users", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing user");
  });
}

function clearCache(id, length) {
  var url = "/utils/cache/clear";
  var reqDescription = "Resets both the data and schema cache of Directus. " + id;
  var body = {
    "id": id,
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "length": length}) });
  }
  return res;
}

function getRandomString() {
  var url = "/utils/random/string";
  var reqDescription = "Returns a random string of given length. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUtilitiesRejects(id, length) {
  var url = "/utils/cache/clear";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "id": id,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyUtilitiesExists(id, length) {
  // Fallback: Use list operation to verify existence
  let res = getRandomString(id, length);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Utilities found in list");
          else pvg.fail("Utilities NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUtilitiesDeleted(id, length) {
  // Fallback: Use list operation to verify deletion
  let res = getRandomString(id, length);
  try {
      let listData = res;
      if (typeof listData === "string") listData = JSON.parse(listData);
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Utilities correctly not found in list");
          else pvg.fail("Utilities still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUtilitiesDoesNotExist(id, length) { verifyUtilitiesDeleted(id, length); }

function matchAnyUtilitiesAdded() {
  return bp.EventSet("Any Utilities Added", function(e) {
      return e.name.startsWith("Done: Positive: Resets both the data and schema cache of Directus.");
  });
}

function deleteContentVersion(id) {
  var url = "/versions/" + id;
  var reqDescription = "Delete an existing Content Version. " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getContentVersions() {
  var url = "/versions";
  var reqDescription = "Get all Content Versions. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function updateContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash) {
  var url = "/versions/" + id;
  var reqDescription = "Update an existing Content Version. " + id;
  var body = {
    "Fields": String(Fields),
    "Meta": String(Meta),
    "UUId": String(UUId),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "fields": fields, "id": id, "mainHash": mainHash}) });
  }
  return res;
}

function promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/promote";
  var reqDescription = "Pass the current hash of the main version of the item along with an optional array of field names to be promoted. " + id;
  var body = {
    "fields": String(fields),
    "mainHash": String(mainHash),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Fields": Fields, "Filter": Filter, "Limit": Limit, "Meta": Meta, "Offset": Offset, "Search": Search, "Sort": Sort, "UUId": UUId, "data": data, "fields": fields, "id": id, "mainHash": mainHash}) });
  }
  return res;
}

function compareContentVersion(id) {
  var url = "/versions/" + id + "/compare";
  var reqDescription = "Compare an existing Content Version with the main version of the item. " + id;
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/promote";
  var reqDescription = "Try Add Existing Versions " + id;
  var body = {
    "fields": String(fields),
    "mainHash": String(mainHash),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyVersionsRejects(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/promote";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "fields": fields,
    "mainHash": mainHash,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyVersionsExists(id) {
  var url = "/versions/" + id + "/compare";
  var description = "Verify Versions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Versions found");
}

function verifyVersionsDeleted(id) {
  var url = "/versions/" + id + "/compare";
  var description = "Verify Versions " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Versions correctly deleted (404)");
}

function verifyVersionsDoesNotExist(id) { verifyVersionsDeleted(id); }

function matchAnyVersionsAdded() {
  return bp.EventSet("Any Versions Added", function(e) {
      return e.name.startsWith("Done: Positive: Pass the current hash of the main version of the item along with an optional array of field names to be promoted.");
  });
}

function matchDeletedVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash) {
  return bp.EventSet("Delete Versions", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing Content Version.");
  });
}

function getWebhooks() {
  var url = "/webhooks";
  var reqDescription = "Get all webhooks. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function createWebhook(actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var reqDescription = "Create a new webhook. " + id;
  var body = {
    "id": id,
    "actions": String(actions),
    "data": data,
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system_collections),
    "url": String(url),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"actions": actions, "data": data, "id": id, "method": method, "name": name, "status": status, "system-collections": system_collections, "url": url}) });
  }
  return res;
}

function updateWebhook(actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks/" + id;
  var reqDescription = "Update an existing webhook " + id;
  var body = {
    "actions": String(actions),
    "data": data,
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system_collections),
    "url": String(url),
};
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 401, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"actions": actions, "data": data, "id": id, "method": method, "name": name, "status": status, "system-collections": system_collections, "url": url}) });
  }
  return res;
}

function deleteWebhook(id) {
  var url = "/webhooks/" + id;
  var reqDescription = "Delete an existing webhook " + id;
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 401, 404] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getWebhook(id) {
  var url = "/webhooks/" + id;
  var reqDescription = "Retrieve a single webhook by unique identifier.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 401, 404] });
}

function tryToAddExistingWebhooks(actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var reqDescription = "Try Add Existing Webhooks " + id;
  var body = {
    "id": id,
    "actions": String(actions),
    "data": data,
    "method": String(method),
    "name": String(name),
    "status": String(status),
    "system-collections": String(system_collections),
    "url": String(url),
};
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: reqDescription } });
  return res;
}

function verifyWebhooksRejects(actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "actions": actions,
    "data": data,
    "id": id,
    "method": method,
    "name": name,
    "status": status,
    "system-collections": system_collections,
    "url": url,
};
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyWebhooksExists(id) {
  var url = "/webhooks/" + id;
  var description = "Verify Webhooks " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Webhooks found");
}

function verifyWebhooksDeleted(id) {
  var url = "/webhooks/" + id;
  var description = "Verify Webhooks " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Webhooks correctly deleted (404)");
}

function verifyWebhooksDoesNotExist(id) { verifyWebhooksDeleted(id); }

function matchAnyWebhooksAdded() {
  return bp.EventSet("Any Webhooks Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new webhook.");
  });
}

function matchDeletedWebhooks(actions, data, id, method, name, status, system_collections, url) {
  return bp.EventSet("Delete Webhooks", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing webhook");
  });
}
