//@provengo summon rest
// === Auto-generated interfaces for directus ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';

const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json", "api_key": "special-key" } });

const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }

function getActivities(config) {
  var url = "/activity"; var reqDescription = "Returns a list of activity actions.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function getActivity(id, config) {
  var url = "/activity/" + id; var reqDescription = "Retrieves the details of an existing activity action.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
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

function getAsset(id, config) {
  var url = "/assets/" + id; var reqDescription = "Image typed files can be dynamically resized and transformed to fit any need.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
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

function passwordReset(password, provider, redirect, token, config) {
  var url = "/auth/password/reset"; var reqDescription = "The request a password reset endpoint sends an email with a link to the admin app which in turn uses this endpoint to allow the user to reset their password.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "password": password,
    "provider": provider,
    "token": token
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"password": password, "id": provider, "redirect": redirect, "token": token, "provider": provider}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"password": password, "id": provider, "redirect": redirect, "token": token, "provider": provider}) }); }
  return response;
}

function oauth(config) {
  var url = "/auth/oauth"; var reqDescription = "List configured OAuth providers.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function oauthProvider(provider, config) {
  var url = "/auth/oauth/" + provider; var reqDescription = "Start OAuth flow using the specified provider";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"provider": provider, "id": provider}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"provider": provider, "id": provider}) }); }
  return response;
}

function tryToAddExistingAuthentication(password, provider, redirect, token, config) {
  var url = "/auth/password/reset"; var reqDescription = "Try Add Existing Authentication";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "password": password,
    "provider": provider,
    "token": token
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"password": password, "id": provider, "redirect": redirect, "token": token, "provider": provider}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"password": password, "id": provider, "redirect": redirect, "token": token, "provider": provider}) }); }
  return response;
}

function verifyAuthenticationRejects(password, provider, redirect, token) {
  var url = "/auth/password/reset";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "password": password,
    "provider": provider,
    "redirect": redirect,
    "token": token
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function getCollections(config) {
  var url = "/collections"; var reqDescription = "Returns a list of the collections available in the project.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning, config) {
  var url = "/collections"; var reqDescription = "Create a new collection in Directus.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
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
    "versioning": versioning
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"archive_field": archive_field, "collection": collection, "sort_field": sort_field, "unarchive_value": unarchive_value, "versioning": versioning, "display_template": display_template, "hidden": hidden, "archive_value": archive_value, "id": id, "translation": translation, "fields": fields, "note": note, "singleton": singleton, "icon": icon, "meta": meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"archive_field": archive_field, "collection": collection, "sort_field": sort_field, "unarchive_value": unarchive_value, "versioning": versioning, "display_template": display_template, "hidden": hidden, "archive_value": archive_value, "id": id, "translation": translation, "fields": fields, "note": note, "singleton": singleton, "icon": icon, "meta": meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "Meta": Meta}) }); }
  return response;
}

function deleteCollection(id, config) {
  var url = "/collections/" + id; var reqDescription = "Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getCollection(id, config) {
  var url = "/collections/" + id; var reqDescription = "Retrieves the details of a single collection.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function updateCollection(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning, config) {
  var url = "/collections/" + id; var reqDescription = "Update an existing collection.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "meta": meta
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"archive_field": archive_field, "collection": collection, "sort_field": sort_field, "unarchive_value": unarchive_value, "versioning": versioning, "display_template": display_template, "hidden": hidden, "archive_value": archive_value, "id": id, "translation": translation, "fields": fields, "note": note, "singleton": singleton, "icon": icon, "meta": meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"archive_field": archive_field, "collection": collection, "sort_field": sort_field, "unarchive_value": unarchive_value, "versioning": versioning, "display_template": display_template, "hidden": hidden, "archive_value": archive_value, "id": id, "translation": translation, "fields": fields, "note": note, "singleton": singleton, "icon": icon, "meta": meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "Meta": Meta}) }); }
  return response;
}

function tryToAddExistingCollections(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning, config) {
  var url = "/collections"; var reqDescription = "Try Add Existing Collections";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
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
    "versioning": versioning
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"archive_field": archive_field, "collection": collection, "sort_field": sort_field, "unarchive_value": unarchive_value, "versioning": versioning, "display_template": display_template, "hidden": hidden, "archive_value": archive_value, "id": id, "translation": translation, "fields": fields, "note": note, "singleton": singleton, "icon": icon, "meta": meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"archive_field": archive_field, "collection": collection, "sort_field": sort_field, "unarchive_value": unarchive_value, "versioning": versioning, "display_template": display_template, "hidden": hidden, "archive_value": archive_value, "id": id, "translation": translation, "fields": fields, "note": note, "singleton": singleton, "icon": icon, "meta": meta, "Offset": Offset, "archive_app_filter": archive_app_filter, "Meta": Meta}) }); }
  return response;
}

function verifyCollectionsRejects(Meta, Offset, archive_app_filter, archive_field, archive_value, collection, display_template, fields, hidden, icon, id, meta, note, singleton, sort_field, translation, unarchive_value, versioning) {
  var url = "/collections";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Meta": Meta,
    "Offset": Offset,
    "archive_app_filter": archive_app_filter,
    "archive_field": archive_field,
    "archive_value": archive_value,
    "collection": collection,
    "display_template": display_template,
    "fields": fields,
    "hidden": hidden,
    "icon": icon,
    "id": id,
    "meta": meta,
    "note": note,
    "singleton": singleton,
    "sort_field": sort_field,
    "translation": translation,
    "unarchive_value": unarchive_value,
    "versioning": versioning
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedCollections(id) {
  return bp.EventSet("Deleted Collections " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.") && e.name.includes(id);
  });
}

function matchAnyCollectionsDeleted() {
  return bp.EventSet("Any Collections Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing collection. Warning: This will delete the whole collection, including the items within. Proceed with caution.");
  });
}

function getItems(collection, config) {
  var url = "/items/" + collection; var reqDescription = "List the items.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) }); }
  return response;
}

function createItem(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, config) {
  var url = "/items/" + collection; var reqDescription = "Create a new item.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "Sort": Sort, "Fields": Fields, "Collection": Collection, "Search": Search, "Filter": Filter, "id": collection, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "Sort": Sort, "Fields": Fields, "Collection": Collection, "Search": Search, "Filter": Filter, "id": collection, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function getItems(collection, config) {
  var url = "/items/" + collection; var reqDescription = "List Items";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) }); }
  return response;
}

function updateItems(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, config) {
  var url = "/items/" + collection; var reqDescription = "Update Multiple Items";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {}; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "Sort": Sort, "Fields": Fields, "Collection": Collection, "Search": Search, "Filter": Filter, "id": collection, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "Sort": Sort, "Fields": Fields, "Collection": Collection, "Search": Search, "Filter": Filter, "id": collection, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function deleteItems(collection, config) {
  var url = "/items/" + collection; var reqDescription = "Delete Multiple Items";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) }); }
  return response;
}

function tryToAddExistingItems(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection, config) {
  var url = "/items/" + collection; var reqDescription = "Try Add Existing Items";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "Sort": Sort, "Fields": Fields, "Collection": Collection, "Search": Search, "Filter": Filter, "id": collection, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "Sort": Sort, "Fields": Fields, "Collection": Collection, "Search": Search, "Filter": Filter, "id": collection, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function verifyItemsRejects(Collection, Fields, Filter, Limit, Meta, Offset, Search, Sort, collection) {
  var url = "/items/" + collection;
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Collection": Collection,
    "Fields": Fields,
    "Filter": Filter,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Search": Search,
    "Sort": Sort
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedItems(collection) {
  return bp.EventSet("Deleted Items " + collection, function(e) {
      return e.name.startsWith("Done: Positive: Delete Multiple Items") && e.name.includes(collection);
  });
}

function matchAnyItemsDeleted() {
  return bp.EventSet("Any Items Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete Multiple Items");
  });
}

function getPresets(config) {
  var url = "/presets"; var reqDescription = "List the presets.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createPreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type, config) {
  var url = "/presets"; var reqDescription = "Create a new preset.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "collection": collection,
    "filters": filters,
    "id": id,
    "layout": layout,
    "layout_options": layout_options,
    "layout_query": layout_query,
    "role": role,
    "search": search,
    "title": title
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Search": Search, "translation": translation, "Filter": Filter, "Sort": Sort, "view_type": view_type, "layout": layout, "search_query": search_query, "search": search, "Limit": Limit, "layout_options": layout_options, "Meta": Meta, "collection": collection, "Id": Id, "view_options": view_options, "id": id, "Page": Page, "Fields": Fields, "layout_query": layout_query, "view_query": view_query, "filters": filters, "title": title, "Offset": Offset, "role": role}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Search": Search, "translation": translation, "Filter": Filter, "Sort": Sort, "view_type": view_type, "layout": layout, "search_query": search_query, "search": search, "Limit": Limit, "layout_options": layout_options, "Meta": Meta, "collection": collection, "Id": Id, "view_options": view_options, "id": id, "Page": Page, "Fields": Fields, "layout_query": layout_query, "view_query": view_query, "filters": filters, "title": title, "Offset": Offset, "role": role}) }); }
  return response;
}

function getPreset(id, config) {
  var url = "/presets/" + id; var reqDescription = "Retrieve a single preset by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function updatePreset(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type, config) {
  var url = "/presets/" + id; var reqDescription = "Update an existing preset.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "collection": collection,
    "filters": filters,
    "role": role,
    "search_query": search_query,
    "title": title,
    "translation": translation,
    "view_options": view_options,
    "view_query": view_query,
    "view_type": view_type
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Search": Search, "translation": translation, "Filter": Filter, "Sort": Sort, "view_type": view_type, "layout": layout, "search_query": search_query, "search": search, "Limit": Limit, "layout_options": layout_options, "Meta": Meta, "collection": collection, "Id": Id, "view_options": view_options, "id": id, "Page": Page, "Fields": Fields, "layout_query": layout_query, "view_query": view_query, "filters": filters, "title": title, "Offset": Offset, "role": role}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Search": Search, "translation": translation, "Filter": Filter, "Sort": Sort, "view_type": view_type, "layout": layout, "search_query": search_query, "search": search, "Limit": Limit, "layout_options": layout_options, "Meta": Meta, "collection": collection, "Id": Id, "view_options": view_options, "id": id, "Page": Page, "Fields": Fields, "layout_query": layout_query, "view_query": view_query, "filters": filters, "title": title, "Offset": Offset, "role": role}) }); }
  return response;
}

function deletePreset(id, config) {
  var url = "/presets/" + id; var reqDescription = "Delete an existing preset.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingPresets(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type, config) {
  var url = "/presets"; var reqDescription = "Try Add Existing Presets";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "collection": collection,
    "filters": filters,
    "id": id,
    "layout": layout,
    "layout_options": layout_options,
    "layout_query": layout_query,
    "role": role,
    "search": search,
    "title": title
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Search": Search, "translation": translation, "Filter": Filter, "Sort": Sort, "view_type": view_type, "layout": layout, "search_query": search_query, "search": search, "Limit": Limit, "layout_options": layout_options, "Meta": Meta, "collection": collection, "Id": Id, "view_options": view_options, "id": id, "Page": Page, "Fields": Fields, "layout_query": layout_query, "view_query": view_query, "filters": filters, "title": title, "Offset": Offset, "role": role}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Search": Search, "translation": translation, "Filter": Filter, "Sort": Sort, "view_type": view_type, "layout": layout, "search_query": search_query, "search": search, "Limit": Limit, "layout_options": layout_options, "Meta": Meta, "collection": collection, "Id": Id, "view_options": view_options, "id": id, "Page": Page, "Fields": Fields, "layout_query": layout_query, "view_query": view_query, "filters": filters, "title": title, "Offset": Offset, "role": role}) }); }
  return response;
}

function verifyPresetsRejects(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, filters, id, layout, layout_options, layout_query, role, search, search_query, title, translation, view_options, view_query, view_type) {
  var url = "/presets";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Filter": Filter,
    "Id": Id,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Page": Page,
    "Search": Search,
    "Sort": Sort,
    "collection": collection,
    "filters": filters,
    "id": id,
    "layout": layout,
    "layout_options": layout_options,
    "layout_query": layout_query,
    "role": role,
    "search": search,
    "search_query": search_query,
    "title": title,
    "translation": translation,
    "view_options": view_options,
    "view_query": view_query,
    "view_type": view_type
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedPresets(id) {
  return bp.EventSet("Deleted Presets " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing preset.") && e.name.includes(id);
  });
}

function matchAnyPresetsDeleted() {
  return bp.EventSet("Any Presets Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing preset.");
  });
}

function deleteComment(id, config) {
  var url = "/comments/" + id; var reqDescription = "Delete an existing comment.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getComments(config) {
  var url = "/comments"; var reqDescription = "List the comments.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function updateComment(collection, comment, id, item, config) {
  var url = "/comments/" + id; var reqDescription = "Update an existing comment.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "collection": collection,
    "comment": comment,
    "item": item
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"comment": comment, "collection": collection, "id": id, "item": item}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"comment": comment, "collection": collection, "id": id, "item": item}) }); }
  return response;
}

function createComment(collection, comment, id, item, config) {
  var url = "/comments"; var reqDescription = "Create a new comment.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "collection": collection,
    "comment": comment,
    "id": id,
    "item": item
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"comment": comment, "collection": collection, "id": id, "item": item}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"comment": comment, "collection": collection, "id": id, "item": item}) }); }
  return response;
}

function getComment(id, config) {
  var url = "/comments/" + id; var reqDescription = "Retrieve a single comment by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingComments(collection, comment, id, item, config) {
  var url = "/comments"; var reqDescription = "Try Add Existing Comments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "collection": collection,
    "comment": comment,
    "id": id,
    "item": item
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"comment": comment, "collection": collection, "id": id, "item": item}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"comment": comment, "collection": collection, "id": id, "item": item}) }); }
  return response;
}

function verifyCommentsRejects(collection, comment, id, item) {
  var url = "/comments";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "collection": collection,
    "comment": comment,
    "id": id,
    "item": item
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedComments(id) {
  return bp.EventSet("Deleted Comments " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing comment.") && e.name.includes(id);
  });
}

function matchAnyCommentsDeleted() {
  return bp.EventSet("Any Comments Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing comment.");
  });
}

function listExtensions(config) {
  var url = "/extensions"; var reqDescription = "List the installed extensions and their configuration in the project.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function updateExtensions(meta, name, config) {
  var url = "/extensions/" + name; var reqDescription = "Update an Extension";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "meta": meta
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": name, "name": name, "meta": meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": name, "name": name, "meta": meta}) }); }
  return response;
}

function verifyExtensionsExists(meta, name) {
  let res = listExtensions(meta, name);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.name == name || item.id == name);
          if (found) pvg.success("Extensions found in list");
          else pvg.fail("Extensions NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyExtensionsDeleted(meta, name) {
  let res = listExtensions(meta, name);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.name == name || item.id == name);
          if (!found) pvg.success("Extensions correctly not found in list");
          else pvg.fail("Extensions still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyExtensionsDoesNotExist(meta, name) { verifyExtensionsDeleted(meta, name); }

function getCollectionFields(collection, config) {
  var url = "/fields/" + collection; var reqDescription = "Returns a list of the fields available in the given collection.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) }); }
  return response;
}

function createField(Sort, collection, datatype, field, id, length, meta, schema, type, config) {
  var url = "/fields/" + collection; var reqDescription = "Create a new field in a given collection.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "datatype": datatype,
    "field": field,
    "length": length,
    "meta": meta,
    "schema": schema,
    "type": type
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "datatype": datatype, "id": id, "type": type, "id": collection, "length": length, "meta": meta, "Sort": Sort, "field": field, "schema": schema}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "datatype": datatype, "id": id, "type": type, "id": collection, "length": length, "meta": meta, "Sort": Sort, "field": field, "schema": schema}) }); }
  return response;
}

function getCollectionFields(collection, config) {
  var url = "/fields/" + collection; var reqDescription = "List Fields in Collection";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": collection}) }); }
  return response;
}

function updateField(Sort, collection, datatype, field, id, length, meta, schema, type, config) {
  var url = "/fields/" + collection + "/" + id; var reqDescription = "Update an existing field.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "field": field,
    "meta": meta,
    "schema": schema,
    "type": type
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "datatype": datatype, "id": id, "type": type, "id": collection, "length": length, "meta": meta, "Sort": Sort, "field": field, "schema": schema}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "datatype": datatype, "id": id, "type": type, "id": collection, "length": length, "meta": meta, "Sort": Sort, "field": field, "schema": schema}) }); }
  return response;
}

function deleteField(collection, id, config) {
  var url = "/fields/" + collection + "/" + id; var reqDescription = "Delete an existing field.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": id, "id": collection}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "id": id, "id": collection}) }); }
  return response;
}

function tryToAddExistingFields(Sort, collection, datatype, field, id, length, meta, schema, type, config) {
  var url = "/fields/" + collection; var reqDescription = "Try Add Existing Fields";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "datatype": datatype,
    "field": field,
    "length": length,
    "meta": meta,
    "schema": schema,
    "type": type
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "datatype": datatype, "id": id, "type": type, "id": collection, "length": length, "meta": meta, "Sort": Sort, "field": field, "schema": schema}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"collection": collection, "datatype": datatype, "id": id, "type": type, "id": collection, "length": length, "meta": meta, "Sort": Sort, "field": field, "schema": schema}) }); }
  return response;
}

function verifyFieldsRejects(Sort, collection, datatype, field, id, length, meta, schema, type) {
  var url = "/fields/" + collection;
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Sort": Sort,
    "datatype": datatype,
    "field": field,
    "id": id,
    "length": length,
    "meta": meta,
    "schema": schema,
    "type": type
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedFields(collection) {
  return bp.EventSet("Deleted Fields " + collection, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing field.") && e.name.includes(collection);
  });
}

function matchAnyFieldsDeleted() {
  return bp.EventSet("Any Fields Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing field.");
  });
}

function getFiles(config) {
  var url = "/files"; var reqDescription = "List the files.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title, config) {
  var url = "/files"; var reqDescription = "Create a new file";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "data": data,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "id": id, "Search": Search, "title": title, "description": description, "Filter": Filter, "tags": tags, "Offset": Offset, "Limit": Limit, "folder": folder, "Meta": Meta, "filename_download": filename_download}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "id": id, "Search": Search, "title": title, "description": description, "Filter": Filter, "tags": tags, "Offset": Offset, "Limit": Limit, "folder": folder, "Meta": Meta, "filename_download": filename_download}) }); }
  return response;
}

function updateFile(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title, config) {
  var url = "/files/" + id; var reqDescription = "Update an existing file, and/or replace its file contents.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "description": description,
    "filename_download": filename_download,
    "folder": folder,
    "tags": tags,
    "title": title
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "id": id, "Search": Search, "title": title, "description": description, "Filter": Filter, "tags": tags, "Offset": Offset, "Limit": Limit, "folder": folder, "Meta": Meta, "filename_download": filename_download}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "id": id, "Search": Search, "title": title, "description": description, "Filter": Filter, "tags": tags, "Offset": Offset, "Limit": Limit, "folder": folder, "Meta": Meta, "filename_download": filename_download}) }); }
  return response;
}

function deleteFile(id, config) {
  var url = "/files/" + id; var reqDescription = "Delete an existing file.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getFile(id, config) {
  var url = "/files/" + id; var reqDescription = "Retrieve a single file by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingFiles(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title, config) {
  var url = "/files"; var reqDescription = "Try Add Existing Files";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "data": data,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "id": id, "Search": Search, "title": title, "description": description, "Filter": Filter, "tags": tags, "Offset": Offset, "Limit": Limit, "folder": folder, "Meta": Meta, "filename_download": filename_download}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "id": id, "Search": Search, "title": title, "description": description, "Filter": Filter, "tags": tags, "Offset": Offset, "Limit": Limit, "folder": folder, "Meta": Meta, "filename_download": filename_download}) }); }
  return response;
}

function verifyFilesRejects(Fields, Filter, Limit, Meta, Offset, Search, Sort, data, description, filename_download, folder, id, tags, title) {
  var url = "/files";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Filter": Filter,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Search": Search,
    "Sort": Sort,
    "data": data,
    "description": description,
    "filename_download": filename_download,
    "folder": folder,
    "id": id,
    "tags": tags,
    "title": title
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedFiles(id) {
  return bp.EventSet("Deleted Files " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing file.") && e.name.includes(id);
  });
}

function matchAnyFilesDeleted() {
  return bp.EventSet("Any Files Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing file.");
  });
}

function getFlows(config) {
  var url = "/flows"; var reqDescription = "Get all flows.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createFlow(Fields, Meta, data, id, config) {
  var url = "/flows"; var reqDescription = "Create a new flow.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "data": data,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Meta": Meta, "data": data, "Fields": Fields, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Meta": Meta, "data": data, "Fields": Fields, "id": id}) }); }
  return response;
}

function updateFlow(Fields, Meta, data, id, config) {
  var url = "/flows/" + id; var reqDescription = "Update an existing flow";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "data": data
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Meta": Meta, "data": data, "Fields": Fields, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Meta": Meta, "data": data, "Fields": Fields, "id": id}) }); }
  return response;
}

function deleteFlow(id, config) {
  var url = "/flows/" + id; var reqDescription = "Delete an existing flow";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getFlow(id, config) {
  var url = "/flows/" + id; var reqDescription = "Retrieve a single flow by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingFlows(Fields, Meta, data, id, config) {
  var url = "/flows"; var reqDescription = "Try Add Existing Flows";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "data": data,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Meta": Meta, "data": data, "Fields": Fields, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Meta": Meta, "data": data, "Fields": Fields, "id": id}) }); }
  return response;
}

function verifyFlowsRejects(Fields, Meta, data, id) {
  var url = "/flows";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Meta": Meta,
    "data": data,
    "id": id
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedFlows(id) {
  return bp.EventSet("Deleted Flows " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing flow") && e.name.includes(id);
  });
}

function matchAnyFlowsDeleted() {
  return bp.EventSet("Any Flows Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing flow");
  });
}

function getFolders(config) {
  var url = "/folders"; var reqDescription = "List the folders.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent, config) {
  var url = "/folders"; var reqDescription = "Create a new folder.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id,
    "name": name,
    "parent": parent
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "parent": parent, "id": id, "Search": Search, "Filter": Filter, "name": name, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "parent": parent, "id": id, "Search": Search, "Filter": Filter, "name": name, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function updateFolder(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent, config) {
  var url = "/folders/" + id; var reqDescription = "Update an existing folder";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "name": name,
    "parent": parent
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "parent": parent, "id": id, "Search": Search, "Filter": Filter, "name": name, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "parent": parent, "id": id, "Search": Search, "Filter": Filter, "name": name, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function deleteFolder(id, config) {
  var url = "/folders/" + id; var reqDescription = "Delete an existing folder";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getFolder(id, config) {
  var url = "/folders/" + id; var reqDescription = "Retrieve a single folder by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingFolders(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent, config) {
  var url = "/folders"; var reqDescription = "Try Add Existing Folders";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id,
    "name": name,
    "parent": parent
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "parent": parent, "id": id, "Search": Search, "Filter": Filter, "name": name, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "parent": parent, "id": id, "Search": Search, "Filter": Filter, "name": name, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function verifyFoldersRejects(Fields, Filter, Limit, Meta, Offset, Search, Sort, id, name, parent) {
  var url = "/folders";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Filter": Filter,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Search": Search,
    "Sort": Sort,
    "id": id,
    "name": name,
    "parent": parent
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedFolders(id) {
  return bp.EventSet("Deleted Folders " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing folder") && e.name.includes(id);
  });
}

function matchAnyFoldersDeleted() {
  return bp.EventSet("Any Folders Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing folder");
  });
}

function deleteOperations(config) {
  var url = "/operations"; var reqDescription = "Delete multiple existing operations.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function getOperations(config) {
  var url = "/operations"; var reqDescription = "Get all operations.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function updateOperations(Fields, Meta, UUId, data, id, keys, config) {
  var url = "/operations"; var reqDescription = "Update multiple operations at the same time.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "data": data,
    "id": id,
    "keys": keys
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"data": data, "Fields": Fields, "keys": keys, "id": id, "UUId": UUId, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"data": data, "Fields": Fields, "keys": keys, "id": id, "UUId": UUId, "Meta": Meta}) }); }
  return response;
}

function createOperation(Fields, Meta, UUId, data, id, keys, config) {
  var url = "/operations"; var reqDescription = "Create a new operation.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "data": data,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"data": data, "Fields": Fields, "keys": keys, "id": id, "UUId": UUId, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"data": data, "Fields": Fields, "keys": keys, "id": id, "UUId": UUId, "Meta": Meta}) }); }
  return response;
}

function deleteOperation(id, config) {
  var url = "/operations/" + id; var reqDescription = "Delete an existing operation";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getOperation(id, config) {
  var url = "/operations/" + id; var reqDescription = "Retrieve a single operation by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function updateOperation(Fields, Meta, UUId, data, id, keys, config) {
  var url = "/operations/" + id; var reqDescription = "Update an existing operation";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "data": data
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"data": data, "Fields": Fields, "keys": keys, "id": id, "UUId": UUId, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"data": data, "Fields": Fields, "keys": keys, "id": id, "UUId": UUId, "Meta": Meta}) }); }
  return response;
}

function tryToAddExistingOperations(Fields, Meta, UUId, data, id, keys, config) {
  var url = "/operations"; var reqDescription = "Try Add Existing Operations";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "data": data,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"data": data, "Fields": Fields, "keys": keys, "id": id, "UUId": UUId, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"data": data, "Fields": Fields, "keys": keys, "id": id, "UUId": UUId, "Meta": Meta}) }); }
  return response;
}

function verifyOperationsRejects(Fields, Meta, UUId, data, id, keys) {
  var url = "/operations";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Meta": Meta,
    "UUId": UUId,
    "data": data,
    "id": id,
    "keys": keys
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedOperations(id) {
  return bp.EventSet("Deleted Operations " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete multiple existing operations.") && e.name.includes(id);
  });
}

function matchAnyOperationsDeleted() {
  return bp.EventSet("Any Operations Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete multiple existing operations.");
  });
}

function deletePermissions(config) {
  var url = "/permissions"; var reqDescription = "Delete multiple existing permissions.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function getPermissions(config) {
  var url = "/permissions"; var reqDescription = "List all permissions.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function updatePermissions(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist, config) {
  var url = "/permissions"; var reqDescription = "Update multiple permissions at the same time.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "data": data,
    "id": id,
    "keys": keys
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"update": update, "Search": Search, "Filter": Filter, "comment": comment, "Sort": Sort, "read": read, "status_blacklist": status_blacklist, "explain": explain, "Limit": Limit, "Meta": Meta, "write_field_blacklist": write_field_blacklist, "collection": collection, "Id": Id, "read_field_blacklist": read_field_blacklist, "id": id, "create": create, "Page": Page, "data": data, "Fields": Fields, "keys": keys, "status": status, "Offset": Offset, "role": role, "delete": _delete}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"update": update, "Search": Search, "Filter": Filter, "comment": comment, "Sort": Sort, "read": read, "status_blacklist": status_blacklist, "explain": explain, "Limit": Limit, "Meta": Meta, "write_field_blacklist": write_field_blacklist, "collection": collection, "Id": Id, "read_field_blacklist": read_field_blacklist, "id": id, "create": create, "Page": Page, "data": data, "Fields": Fields, "keys": keys, "status": status, "Offset": Offset, "role": role, "delete": _delete}) }); }
  return response;
}

function createPermission(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist, config) {
  var url = "/permissions"; var reqDescription = "Create a new permission.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
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
    "write_field_blacklist": write_field_blacklist
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"update": update, "Search": Search, "Filter": Filter, "comment": comment, "Sort": Sort, "read": read, "status_blacklist": status_blacklist, "explain": explain, "Limit": Limit, "Meta": Meta, "write_field_blacklist": write_field_blacklist, "collection": collection, "Id": Id, "read_field_blacklist": read_field_blacklist, "id": id, "create": create, "Page": Page, "data": data, "Fields": Fields, "keys": keys, "status": status, "Offset": Offset, "role": role, "delete": _delete}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"update": update, "Search": Search, "Filter": Filter, "comment": comment, "Sort": Sort, "read": read, "status_blacklist": status_blacklist, "explain": explain, "Limit": Limit, "Meta": Meta, "write_field_blacklist": write_field_blacklist, "collection": collection, "Id": Id, "read_field_blacklist": read_field_blacklist, "id": id, "create": create, "Page": Page, "data": data, "Fields": Fields, "keys": keys, "status": status, "Offset": Offset, "role": role, "delete": _delete}) }); }
  return response;
}

function getMyPermissions(config) {
  var url = "/permissions/me"; var reqDescription = "List the permissions that apply to the current user.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function deletePermission(id, config) {
  var url = "/permissions/" + id; var reqDescription = "Delete an existing permission";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getPermission(id, config) {
  var url = "/permissions/" + id; var reqDescription = "Retrieve a single permissions object by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function updatePermission(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist, config) {
  var url = "/permissions/" + id; var reqDescription = "Update an existing permission";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "collection": collection,
    "comment": comment,
    "create": create,
    "delete": _delete,
    "explain": explain,
    "read": read,
    "read_field_blacklist": read_field_blacklist,
    "role": role,
    "status": status,
    "status_blacklist": status_blacklist,
    "update": update,
    "write_field_blacklist": write_field_blacklist
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"update": update, "Search": Search, "Filter": Filter, "comment": comment, "Sort": Sort, "read": read, "status_blacklist": status_blacklist, "explain": explain, "Limit": Limit, "Meta": Meta, "write_field_blacklist": write_field_blacklist, "collection": collection, "Id": Id, "read_field_blacklist": read_field_blacklist, "id": id, "create": create, "Page": Page, "data": data, "Fields": Fields, "keys": keys, "status": status, "Offset": Offset, "role": role, "delete": _delete}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"update": update, "Search": Search, "Filter": Filter, "comment": comment, "Sort": Sort, "read": read, "status_blacklist": status_blacklist, "explain": explain, "Limit": Limit, "Meta": Meta, "write_field_blacklist": write_field_blacklist, "collection": collection, "Id": Id, "read_field_blacklist": read_field_blacklist, "id": id, "create": create, "Page": Page, "data": data, "Fields": Fields, "keys": keys, "status": status, "Offset": Offset, "role": role, "delete": _delete}) }); }
  return response;
}

function tryToAddExistingPermissions(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist, config) {
  var url = "/permissions"; var reqDescription = "Try Add Existing Permissions";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
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
    "write_field_blacklist": write_field_blacklist
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"update": update, "Search": Search, "Filter": Filter, "comment": comment, "Sort": Sort, "read": read, "status_blacklist": status_blacklist, "explain": explain, "Limit": Limit, "Meta": Meta, "write_field_blacklist": write_field_blacklist, "collection": collection, "Id": Id, "read_field_blacklist": read_field_blacklist, "id": id, "create": create, "Page": Page, "data": data, "Fields": Fields, "keys": keys, "status": status, "Offset": Offset, "role": role, "delete": _delete}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"update": update, "Search": Search, "Filter": Filter, "comment": comment, "Sort": Sort, "read": read, "status_blacklist": status_blacklist, "explain": explain, "Limit": Limit, "Meta": Meta, "write_field_blacklist": write_field_blacklist, "collection": collection, "Id": Id, "read_field_blacklist": read_field_blacklist, "id": id, "create": create, "Page": Page, "data": data, "Fields": Fields, "keys": keys, "status": status, "Offset": Offset, "role": role, "delete": _delete}) }); }
  return response;
}

function verifyPermissionsRejects(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection, comment, create, data, _delete, explain, id, keys, read, read_field_blacklist, role, status, status_blacklist, update, write_field_blacklist) {
  var url = "/permissions";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Filter": Filter,
    "Id": Id,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Page": Page,
    "Search": Search,
    "Sort": Sort,
    "collection": collection,
    "comment": comment,
    "create": create,
    "data": data,
    "delete": _delete,
    "explain": explain,
    "id": id,
    "keys": keys,
    "read": read,
    "read_field_blacklist": read_field_blacklist,
    "role": role,
    "status": status,
    "status_blacklist": status_blacklist,
    "update": update,
    "write_field_blacklist": write_field_blacklist
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedPermissions(id) {
  return bp.EventSet("Deleted Permissions " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete multiple existing permissions.") && e.name.includes(id);
  });
}

function matchAnyPermissionsDeleted() {
  return bp.EventSet("Any Permissions Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete multiple existing permissions.");
  });
}

function getRelations(config) {
  var url = "/relations"; var reqDescription = "List the relations.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field, config) {
  var url = "/relations"; var reqDescription = "Create a new relation.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "collection_many": collection_many,
    "collection_one": collection_one,
    "field_many": field_many,
    "field_one": field_one,
    "id": id,
    "junction_field": junction_field
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "Id": Id, "field_many": field_many, "collection_one": collection_one, "id": id, "Search": Search, "collection_many": collection_many, "Filter": Filter, "field_one": field_one, "Page": Page, "Offset": Offset, "Limit": Limit, "junction_field": junction_field, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "Id": Id, "field_many": field_many, "collection_one": collection_one, "id": id, "Search": Search, "collection_many": collection_many, "Filter": Filter, "field_one": field_one, "Page": Page, "Offset": Offset, "Limit": Limit, "junction_field": junction_field, "Meta": Meta}) }); }
  return response;
}

function getRelation(id, config) {
  var url = "/relations/" + id; var reqDescription = "Retrieve a single relation by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function updateRelation(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field, config) {
  var url = "/relations/" + id; var reqDescription = "Update an existing relation";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "collection_many": collection_many,
    "collection_one": collection_one,
    "field_many": field_many,
    "field_one": field_one,
    "junction_field": junction_field
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "Id": Id, "field_many": field_many, "collection_one": collection_one, "id": id, "Search": Search, "collection_many": collection_many, "Filter": Filter, "field_one": field_one, "Page": Page, "Offset": Offset, "Limit": Limit, "junction_field": junction_field, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "Id": Id, "field_many": field_many, "collection_one": collection_one, "id": id, "Search": Search, "collection_many": collection_many, "Filter": Filter, "field_one": field_one, "Page": Page, "Offset": Offset, "Limit": Limit, "junction_field": junction_field, "Meta": Meta}) }); }
  return response;
}

function deleteRelation(id, config) {
  var url = "/relations/" + id; var reqDescription = "Delete an existing relation.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingRelations(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field, config) {
  var url = "/relations"; var reqDescription = "Try Add Existing Relations";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "collection_many": collection_many,
    "collection_one": collection_one,
    "field_many": field_many,
    "field_one": field_one,
    "id": id,
    "junction_field": junction_field
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "Id": Id, "field_many": field_many, "collection_one": collection_one, "id": id, "Search": Search, "collection_many": collection_many, "Filter": Filter, "field_one": field_one, "Page": Page, "Offset": Offset, "Limit": Limit, "junction_field": junction_field, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "Id": Id, "field_many": field_many, "collection_one": collection_one, "id": id, "Search": Search, "collection_many": collection_many, "Filter": Filter, "field_one": field_one, "Page": Page, "Offset": Offset, "Limit": Limit, "junction_field": junction_field, "Meta": Meta}) }); }
  return response;
}

function verifyRelationsRejects(Fields, Filter, Id, Limit, Meta, Offset, Page, Search, Sort, collection_many, collection_one, field_many, field_one, id, junction_field) {
  var url = "/relations";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Filter": Filter,
    "Id": Id,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Page": Page,
    "Search": Search,
    "Sort": Sort,
    "collection_many": collection_many,
    "collection_one": collection_one,
    "field_many": field_many,
    "field_one": field_one,
    "id": id,
    "junction_field": junction_field
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedRelations(id) {
  return bp.EventSet("Deleted Relations " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing relation.") && e.name.includes(id);
  });
}

function matchAnyRelationsDeleted() {
  return bp.EventSet("Any Relations Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing relation.");
  });
}

function getRevisions(config) {
  var url = "/revisions"; var reqDescription = "List the revisions.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function getRevision(id, config) {
  var url = "/revisions/" + id; var reqDescription = "Retrieve a single revision by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
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

function getRoles(config) {
  var url = "/roles"; var reqDescription = "List the roles.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name, config) {
  var url = "/roles"; var reqDescription = "Create a new role.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "description": description,
    "enforce_tfa": enforce_tfa,
    "external_id": external_id,
    "id": id,
    "ip_access": ip_access,
    "module_listing": module_listing,
    "name": name
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "external_id": external_id, "module_listing": module_listing, "id": id, "ip_access": ip_access, "Search": Search, "enforce_tfa": enforce_tfa, "description": description, "Filter": Filter, "name": name, "Page": Page, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "external_id": external_id, "module_listing": module_listing, "id": id, "ip_access": ip_access, "Search": Search, "enforce_tfa": enforce_tfa, "description": description, "Filter": Filter, "name": name, "Page": Page, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function updateRole(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name, config) {
  var url = "/roles/" + id; var reqDescription = "Update an existing role";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "description": description,
    "enforce_tfa": enforce_tfa,
    "external_id": external_id,
    "ip_access": ip_access,
    "module_listing": module_listing,
    "name": name
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "external_id": external_id, "module_listing": module_listing, "id": id, "ip_access": ip_access, "Search": Search, "enforce_tfa": enforce_tfa, "description": description, "Filter": Filter, "name": name, "Page": Page, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "external_id": external_id, "module_listing": module_listing, "id": id, "ip_access": ip_access, "Search": Search, "enforce_tfa": enforce_tfa, "description": description, "Filter": Filter, "name": name, "Page": Page, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function deleteRole(id, config) {
  var url = "/roles/" + id; var reqDescription = "Delete an existing role";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getRole(id, config) {
  var url = "/roles/" + id; var reqDescription = "Retrieve a single role by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingRoles(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name, config) {
  var url = "/roles"; var reqDescription = "Try Add Existing Roles";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "description": description,
    "enforce_tfa": enforce_tfa,
    "external_id": external_id,
    "id": id,
    "ip_access": ip_access,
    "module_listing": module_listing,
    "name": name
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "external_id": external_id, "module_listing": module_listing, "id": id, "ip_access": ip_access, "Search": Search, "enforce_tfa": enforce_tfa, "description": description, "Filter": Filter, "name": name, "Page": Page, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "external_id": external_id, "module_listing": module_listing, "id": id, "ip_access": ip_access, "Search": Search, "enforce_tfa": enforce_tfa, "description": description, "Filter": Filter, "name": name, "Page": Page, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function verifyRolesRejects(Fields, Filter, Limit, Meta, Offset, Page, Search, Sort, description, enforce_tfa, external_id, id, ip_access, module_listing, name) {
  var url = "/roles";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Filter": Filter,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Page": Page,
    "Search": Search,
    "Sort": Sort,
    "description": description,
    "enforce_tfa": enforce_tfa,
    "external_id": external_id,
    "id": id,
    "ip_access": ip_access,
    "module_listing": module_listing,
    "name": name
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedRoles(id) {
  return bp.EventSet("Deleted Roles " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing role") && e.name.includes(id);
  });
}

function matchAnyRolesDeleted() {
  return bp.EventSet("Any Roles Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing role");
  });
}

function schemaDiff(Export, data, force, id, config) {
  var url = "/schema/diff"; var reqDescription = "Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  var body = {
    "data": data,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription }, queryParameters: {    "force": force} });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Export": Export, "id": id, "data": data, "force": force}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Export": Export, "id": id, "data": data, "force": force}) }); }
  return response;
}

function schemaSnapshot(config) {
  var url = "/schema/snapshot"; var reqDescription = "Retrieve the current schema. This endpoint is only available to admin users.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function tryToAddExistingSchema(Export, data, force, id, config) {
  var url = "/schema/diff"; var reqDescription = "Try Add Existing Schema";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "data": data,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription }, queryParameters: {    "force": force} });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Export": Export, "id": id, "data": data, "force": force}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Export": Export, "id": id, "data": data, "force": force}) }); }
  return response;
}

function verifySchemaRejects(Export, data, force, id) {
  var url = "/schema/diff";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Export": Export,
    "data": data,
    "force": force,
    "id": id
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifySchemaExists(Export, data, force, id) {
  let res = schemaSnapshot(Export, data, force, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Schema found in list");
          else pvg.fail("Schema NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySchemaDeleted(Export, data, force, id) {
  let res = schemaSnapshot(Export, data, force, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
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
      return e.name.startsWith("Done: Positive: Compare the current instance's schema against the schema snapshot in JSON request body or a JSON/YAML file and retrieve the difference. This endpoint is only available to admin users.");
  });
}

function serverInfo(config) {
  var url = "/server/info"; var reqDescription = "Perform a system status check and return the options.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function ping(config) {
  var url = "/server/ping"; var reqDescription = "Ping, pong. Ping.. pong.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyServerExists(id, super_admin_token) {
  let res = serverInfo(id, super_admin_token);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Server found in list");
          else pvg.fail("Server NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyServerDeleted(id, super_admin_token) {
  let res = serverInfo(id, super_admin_token);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Server correctly not found in list");
          else pvg.fail("Server still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyServerDoesNotExist(id, super_admin_token) { verifyServerDeleted(id, super_admin_token); }

function getSettings(config) {
  var url = "/settings"; var reqDescription = "List the settings.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function updateSetting(Limit, Meta, Offset, Page, id, config) {
  var url = "/settings"; var reqDescription = "Update the settings";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "Page": Page, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "Page": Page, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function verifySettingsExists(Limit, Meta, Offset, Page, id) {
  let res = getSettings(Limit, Meta, Offset, Page, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Settings found in list");
          else pvg.fail("Settings NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySettingsDeleted(Limit, Meta, Offset, Page, id) {
  let res = getSettings(Limit, Meta, Offset, Page, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Settings correctly not found in list");
          else pvg.fail("Settings still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySettingsDoesNotExist(Limit, Meta, Offset, Page, id) { verifySettingsDeleted(Limit, Meta, Offset, Page, id); }

function getUsers(config) {
  var url = "/users"; var reqDescription = "List the users.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function acceptInvite(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token, config) {
  var url = "/users/invite/accept"; var reqDescription = "Accepts and enables an invited user using a JWT invitation token.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id,
    "password": password,
    "token": token
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) }); }
  return response;
}

function updateMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token, config) {
  var url = "/users/me"; var reqDescription = "Update the currently authenticated user.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) }); }
  return response;
}

function deleteUser(id, config) {
  var url = "/users/" + id; var reqDescription = "Delete an existing user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getMe(config) {
  var url = "/users/me"; var reqDescription = "Retrieve the currently authenticated user.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function meTfaEnable(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token, config) {
  var url = "/users/me/tfa/enable"; var reqDescription = "Enables two-factor authentication for the currently authenticated user.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) }); }
  return response;
}

function meTfaDisable(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token, config) {
  var url = "/users/me/tfa/disable"; var reqDescription = "Disables two-factor authentication for the currently authenticated user.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) }); }
  return response;
}

function updateLastUsedPageMe(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token, config) {
  var url = "/users/me/track/page"; var reqDescription = "Updates the last used page field of the currently authenticated user.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id,
    "last_page": last_page
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) }); }
  return response;
}

function tryToAddExistingUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token, config) {
  var url = "/users/invite/accept"; var reqDescription = "Try Add Existing Users";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id,
    "password": password,
    "token": token
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "Fields": Fields, "password": password, "id": id, "Search": Search, "token": token, "Filter": Filter, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta, "last_page": last_page}) }); }
  return response;
}

function verifyUsersRejects(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token) {
  var url = "/users/invite/accept";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Filter": Filter,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Search": Search,
    "Sort": Sort,
    "UUId": UUId,
    "id": id,
    "last_page": last_page,
    "password": password,
    "token": token
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyUsersExists(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token) {
  let res = getUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Users found in list");
          else pvg.fail("Users NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUsersDeleted(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token) {
  let res = getUsers(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Users correctly not found in list");
          else pvg.fail("Users still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUsersDoesNotExist(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token) { verifyUsersDeleted(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, id, last_page, password, token); }

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Positive: Accepts and enables an invited user using a JWT invitation token.");
  });
}

function matchDeletedUsers(id) {
  return bp.EventSet("Deleted Users " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing user") && e.name.includes(id);
  });
}

function matchAnyUsersDeleted() {
  return bp.EventSet("Any Users Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing user");
  });
}

function clearCache(id, length, config) {
  var url = "/utils/cache/clear"; var reqDescription = "Resets both the data and schema cache of Directus.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "length": length}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "length": length}) }); }
  return response;
}

function getRandomString(config) {
  var url = "/utils/random/string"; var reqDescription = "Returns a random string of given length.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function tryToAddExistingUtilities(id, length, config) {
  var url = "/utils/cache/clear"; var reqDescription = "Try Add Existing Utilities";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "length": length}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "length": length}) }); }
  return response;
}

function verifyUtilitiesRejects(id, length) {
  var url = "/utils/cache/clear";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "id": id,
    "length": length
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
  bp.sync({ request: bp.Event("Done: Negative: " + reqDescription) });
}

function verifyUtilitiesExists(id, length) {
  let res = getRandomString(id, length);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Utilities found in list");
          else pvg.fail("Utilities NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUtilitiesDeleted(id, length) {
  let res = getRandomString(id, length);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
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

function deleteContentVersion(id, config) {
  var url = "/versions/" + id; var reqDescription = "Delete an existing Content Version.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getContentVersions(config) {
  var url = "/versions"; var reqDescription = "Get all Content Versions.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function updateContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash, config) {
  var url = "/versions/" + id; var reqDescription = "Update an existing Content Version.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "data": data
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "mainHash": mainHash, "id": id, "Search": Search, "Filter": Filter, "fields": fields, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "mainHash": mainHash, "id": id, "Search": Search, "Filter": Filter, "fields": fields, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function promoteContentVersion(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash, config) {
  var url = "/versions/" + id + "/promote"; var reqDescription = "Pass the current hash of the main version of the item along with an optional array of field names to be promoted.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "fields": fields,
    "mainHash": mainHash
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "mainHash": mainHash, "id": id, "Search": Search, "Filter": Filter, "fields": fields, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "mainHash": mainHash, "id": id, "Search": Search, "Filter": Filter, "fields": fields, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function compareContentVersion(id, config) {
  var url = "/versions/" + id + "/compare"; var reqDescription = "Compare an existing Content Version with the main version of the item.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingVersions(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash, config) {
  var url = "/versions/" + id + "/promote"; var reqDescription = "Try Add Existing Versions";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "fields": fields,
    "mainHash": mainHash
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "mainHash": mainHash, "id": id, "Search": Search, "Filter": Filter, "fields": fields, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Sort": Sort, "data": data, "Fields": Fields, "mainHash": mainHash, "id": id, "Search": Search, "Filter": Filter, "fields": fields, "UUId": UUId, "Offset": Offset, "Limit": Limit, "Meta": Meta}) }); }
  return response;
}

function verifyVersionsRejects(Fields, Filter, Limit, Meta, Offset, Search, Sort, UUId, data, fields, id, mainHash) {
  var url = "/versions/" + id + "/promote";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "Fields": Fields,
    "Filter": Filter,
    "Limit": Limit,
    "Meta": Meta,
    "Offset": Offset,
    "Search": Search,
    "Sort": Sort,
    "UUId": UUId,
    "data": data,
    "fields": fields,
    "mainHash": mainHash
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedVersions(id) {
  return bp.EventSet("Deleted Versions " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing Content Version.") && e.name.includes(id);
  });
}

function matchAnyVersionsDeleted() {
  return bp.EventSet("Any Versions Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing Content Version.");
  });
}

function getWebhooks(config) {
  var url = "/webhooks"; var reqDescription = "Get all webhooks.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createWebhook(actions, data, id, method, name, status, system_collections, url, config) {
  var url = "/webhooks"; var reqDescription = "Create a new webhook.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "actions": actions,
    "data": data,
    "id": id,
    "method": method,
    "name": name,
    "status": status,
    "system-collections": system_collections,
    "url": url
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"system-collections": system_collections, "data": data, "method": method, "id": id, "name": name, "status": status, "url": url, "actions": actions}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"system-collections": system_collections, "data": data, "method": method, "id": id, "name": name, "status": status, "url": url, "actions": actions}) }); }
  return response;
}

function updateWebhook(actions, data, id, method, name, status, system_collections, url, config) {
  var url = "/webhooks/" + id; var reqDescription = "Update an existing webhook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "actions": actions,
    "data": data,
    "method": method,
    "name": name,
    "status": status,
    "system-collections": system_collections,
    "url": url
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"system-collections": system_collections, "data": data, "method": method, "id": id, "name": name, "status": status, "url": url, "actions": actions}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"system-collections": system_collections, "data": data, "method": method, "id": id, "name": name, "status": status, "url": url, "actions": actions}) }); }
  return response;
}

function deleteWebhook(id, config) {
  var url = "/webhooks/" + id; var reqDescription = "Delete an existing webhook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function getWebhook(id, config) {
  var url = "/webhooks/" + id; var reqDescription = "Retrieve a single webhook by unique identifier.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingWebhooks(actions, data, id, method, name, status, system_collections, url, config) {
  var url = "/webhooks"; var reqDescription = "Try Add Existing Webhooks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "actions": actions,
    "data": data,
    "id": id,
    "method": method,
    "name": name,
    "status": status,
    "system-collections": system_collections,
    "url": url
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"system-collections": system_collections, "data": data, "method": method, "id": id, "name": name, "status": status, "url": url, "actions": actions}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"system-collections": system_collections, "data": data, "method": method, "id": id, "name": name, "status": status, "url": url, "actions": actions}) }); }
  return response;
}

function verifyWebhooksRejects(actions, data, id, method, name, status, system_collections, url) {
  var url = "/webhooks";
  var reqDescription = "Negative Test: Verify Rejection for " + url;
  var body = {
    "actions": actions,
    "data": data,
    "id": id,
    "method": method,
    "name": name,
    "status": status,
    "system-collections": system_collections,
    "url": url
  };
  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: reqDescription } });
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

function matchDeletedWebhooks(id) {
  return bp.EventSet("Deleted Webhooks " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing webhook") && e.name.includes(id);
  });
}

function matchAnyWebhooksDeleted() {
  return bp.EventSet("Any Webhooks Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an existing webhook");
  });
}
