//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
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

function listActivities() {
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

function matchAddedActivity(id) {
  return bp.EventSet("matchAddedActivity", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyActivityAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add activity (.+)/)});
  var m = ev.data.parameters.description.match(/Add activity (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedActivity(id) {
  return bp.EventSet("matchDeletedActivity", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyActivityDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete activity (.+)/)});
  var m = ev.data.parameters.description.match(/Delete activity (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: assets ----

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

function verifyAssetsExists(id) {
  return getAsset(id);
}

function verifyAssetsDoesNotExist(id) {
  return getAsset(id);
}

// ---- Entity: authentication ----

function login(email, password, mode, otp) {
  var url = "/auth/login";
  var description = "Retrieve a Temporary Access Token";
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
  var description = "Refresh a Temporary Access Token";
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
  var description = "Request a Password Reset " + email;
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
  var description = "Reset a Password " + token;
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
  var description = "Authenticated using an OAuth provider " + provider;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAuthentication(email, password, mode, otp) {
  return login(email, password, mode, otp);
}

function verifyAuthenticationExists() {
  return oauth();
}

function verifyAuthenticationDoesNotExist() {
  return oauth();
}

// ---- Entity: items ----

function addItem(collection) {
  var url = "/items/" + collection;
  var description = "Create an Item in collection " + collection;
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
  var description = "Delete an Item " + id + " in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Retrieve an Item " + id + " in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateItem(collection, id) {
  var url = "/items/" + collection + "/" + id;
  var description = "Update an Item " + id + " in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateItems(collection) {
  var url = "/items/" + collection;
  var description = "Update Multiple Items in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteItems(collection) {
  var url = "/items/" + collection;
  var description = "Delete Multiple Items in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingItems(collection) {
  return addItem(collection);
}

function verifyItemsExists(collection, id) {
  return getItem(collection, id);
}

function verifyItemsDoesNotExist(collection, id) {
  return getItem(collection, id);
}

function tryToDeleteANonExistingItems(collection, id) {
  return deleteItem(collection, id);
}

function matchAddedItems(collection) {
  return bp.EventSet("matchAddedItems", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(collection);
  });
}

function waitForAnyItemsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create an Item in collection (.+)/)});
  var m = ev.data.parameters.description.match(/Create an Item in collection (.+)/);
  var captures = m.slice(1);
  var names = ["collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedItems(collection) {
  return bp.EventSet("matchDeletedItems", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(collection);
  });
}

function waitForAnyItemsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete an Item (.+) in collection (.+)/)});
  var m = ev.data.parameters.description.match(/Delete an Item (.+) in collection (.+)/);
  var captures = m.slice(1);
  var names = ["collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: presets ----

function addPreset() {
  var url = "/presets";
  var description = "Create a Preset";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePreset(id) {
  var url = "/presets/" + id;
  var description = "Delete a Preset " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPreset(id) {
  var url = "/presets/" + id;
  var description = "Retrieve a Preset " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePreset(id) {
  var url = "/presets/" + id;
  var description = "Update a Preset " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePresets() {
  var url = "/presets";
  var description = "Update Multiple Presets";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePresets() {
  var url = "/presets";
  var description = "Delete Multiple Presets";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listPresets() {
  var url = "/presets";
  var description = "List Presets";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPresets() {
  return addPreset();
}

function verifyPresetsExists(id) {
  return getPreset(id);
}

function verifyPresetsDoesNotExist(id) {
  return getPreset(id);
}

function tryToDeleteANonExistingPresets(id) {
  return deletePreset(id);
}

function matchAddedPresets(id) {
  return bp.EventSet("matchAddedPresets", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyPresetsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a Preset/)});
  var m = ev.data.parameters.description.match(/Create a Preset/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedPresets(id) {
  return bp.EventSet("matchDeletedPresets", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyPresetsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete a Preset (.+)/)});
  var m = ev.data.parameters.description.match(/Delete a Preset (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: collections ----

function addCollection() {
  var url = "/collections";
  var description = "Create a Collection";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteCollection(id) {
  var url = "/collections/" + id;
  var description = "Delete a Collection " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getCollection(id) {
  var url = "/collections/" + id;
  var description = "Retrieve a Collection " + id;
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
  var description = "Update a Collection " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listCollections() {
  var url = "/collections";
  var description = "List Collections";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingCollections() {
  return addCollection();
}

function verifyCollectionsExists(id) {
  return getCollection(id);
}

function verifyCollectionsDoesNotExist(id) {
  return getCollection(id);
}

function tryToDeleteANonExistingCollections(id) {
  return deleteCollection(id);
}

function matchAddedCollections(id) {
  return bp.EventSet("matchAddedCollections", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCollectionsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a Collection/)});
  var m = ev.data.parameters.description.match(/Create a Collection/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedCollections(id) {
  return bp.EventSet("matchDeletedCollections", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCollectionsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete a Collection (.+)/)});
  var m = ev.data.parameters.description.match(/Delete a Collection (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: comments ----

function addComment() {
  var url = "/comments";
  var description = "Create a Comment";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteComment(id) {
  var url = "/comments/" + id;
  var description = "Delete a Comment " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getComment(id) {
  var url = "/comments/" + id;
  var description = "Retrieve a Comment " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateComment(id) {
  var url = "/comments/" + id;
  var description = "Update a Comment " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateComments() {
  var url = "/comments";
  var description = "Update Multiple Comments";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteComments() {
  var url = "/comments";
  var description = "Delete Multiple Comments";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listComments() {
  var url = "/comments";
  var description = "List Comments";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingComments() {
  return addComment();
}

function verifyCommentsExists(id) {
  return getComment(id);
}

function verifyCommentsDoesNotExist(id) {
  return getComment(id);
}

function tryToDeleteANonExistingComments(id) {
  return deleteComment(id);
}

function matchAddedComments(id) {
  return bp.EventSet("matchAddedComments", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCommentsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a Comment/)});
  var m = ev.data.parameters.description.match(/Create a Comment/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedComments(id) {
  return bp.EventSet("matchDeletedComments", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyCommentsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete a Comment (.+)/)});
  var m = ev.data.parameters.description.match(/Delete a Comment (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: extensions ----

function updateExtension(name) {
  var url = "/extensions/" + name;
  var description = "Update an Extension " + name;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateExtensionBundle(bundle, name) {
  var url = "/extensions/" + bundle + "/" + name;
  var description = "Update an Extension " + name + " in bundle " + bundle;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

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

// ---- Entity: fields ----

function addField(collection) {
  var url = "/fields/" + collection;
  var description = "Create a Field in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteField(collection, id) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Delete a Field " + id + " in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getField(collection, id) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Retrieve a Field " + id + " in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateField(collection, id) {
  var url = "/fields/" + collection + "/" + id;
  var description = "Update a Field " + id + " in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listFields() {
  var url = "/fields";
  var description = "List All Fields";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listCollectionFields(collection) {
  var url = "/fields/" + collection;
  var description = "List Fields in collection " + collection;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFields(collection) {
  return addField(collection);
}

function verifyFieldsExists(collection, id) {
  return getField(collection, id);
}

function verifyFieldsDoesNotExist(collection, id) {
  return getField(collection, id);
}

function tryToDeleteANonExistingFields(collection, id) {
  return deleteField(collection, id);
}

function matchAddedFields(collection) {
  return bp.EventSet("matchAddedFields", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(collection);
  });
}

function waitForAnyFieldsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a Field in collection (.+)/)});
  var m = ev.data.parameters.description.match(/Create a Field in collection (.+)/);
  var captures = m.slice(1);
  var names = ["collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedFields(collection) {
  return bp.EventSet("matchDeletedFields", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(collection);
  });
}

function waitForAnyFieldsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete a Field (.+) in collection (.+)/)});
  var m = ev.data.parameters.description.match(/Delete a Field (.+) in collection (.+)/);
  var captures = m.slice(1);
  var names = ["collection"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: files ----

function addFile() {
  var url = "/files";
  var description = "Create a File";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFile(id) {
  var url = "/files/" + id;
  var description = "Delete a File " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFile(id) {
  var url = "/files/" + id;
  var description = "Retrieve a File " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFile(id) {
  var url = "/files/" + id;
  var description = "Update a File " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFiles() {
  var url = "/files";
  var description = "Update Multiple Files";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFiles() {
  var url = "/files";
  var description = "Delete Multiple Files";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listFiles() {
  var url = "/files";
  var description = "List Files";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFiles() {
  return addFile();
}

function verifyFilesExists(id) {
  return getFile(id);
}

function verifyFilesDoesNotExist(id) {
  return getFile(id);
}

function tryToDeleteANonExistingFiles(id) {
  return deleteFile(id);
}

function matchAddedFiles(id) {
  return bp.EventSet("matchAddedFiles", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyFilesAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a File/)});
  var m = ev.data.parameters.description.match(/Create a File/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedFiles(id) {
  return bp.EventSet("matchDeletedFiles", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyFilesDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete a File (.+)/)});
  var m = ev.data.parameters.description.match(/Delete a File (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: flows ----

function addFlow() {
  var url = "/flows";
  var description = "Create a Flow";
  var body = undefined;
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

function updateFlow(id) {
  var url = "/flows/" + id;
  var description = "Update a Flow " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFlows() {
  var url = "/flows";
  var description = "Update Multiple Flows";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

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

function listFlows() {
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

function tryToAddExistingFlows() {
  return addFlow();
}

function verifyFlowsExists(id) {
  return getFlow(id);
}

function verifyFlowsDoesNotExist(id) {
  return getFlow(id);
}

function tryToDeleteANonExistingFlows(id) {
  return deleteFlow(id);
}

function matchAddedFlows(id) {
  return bp.EventSet("matchAddedFlows", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyFlowsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a Flow/)});
  var m = ev.data.parameters.description.match(/Create a Flow/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedFlows(id) {
  return bp.EventSet("matchDeletedFlows", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyFlowsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete a Flow (.+)/)});
  var m = ev.data.parameters.description.match(/Delete a Flow (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: folders ----

function addFolder() {
  var url = "/folders";
  var description = "Create a Folder";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFolder(id) {
  var url = "/folders/" + id;
  var description = "Delete a Folder " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getFolder(id) {
  var url = "/folders/" + id;
  var description = "Retrieve a Folder " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFolder(id) {
  var url = "/folders/" + id;
  var description = "Update a Folder " + id;
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFolders() {
  var url = "/folders";
  var description = "Update Multiple Folders";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteFolders() {
  var url = "/folders";
  var description = "Delete Multiple Folders";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listFolders() {
  var url = "/folders";
  var description = "List Folders";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingFolders() {
  return addFolder();
}

function verifyFoldersExists(id) {
  return getFolder(id);
}

function verifyFoldersDoesNotExist(id) {
  return getFolder(id);
}

function tryToDeleteANonExistingFolders(id) {
  return deleteFolder(id);
}

function matchAddedFolders(id) {
  return bp.EventSet("matchAddedFolders", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyFoldersAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a Folder/)});
  var m = ev.data.parameters.description.match(/Create a Folder/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedFolders(id) {
  return bp.EventSet("matchDeletedFolders", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyFoldersDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete a Folder (.+)/)});
  var m = ev.data.parameters.description.match(/Delete a Folder (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: operations ----

function addOperation() {
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

function updateOperations() {
  var url = "/operations";
  var description = "Update Multiple Operations";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOperations() {
  var url = "/operations";
  var description = "Delete Multiple Operations";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listOperations() {
  var url = "/operations";
  var description = "List Operations";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOperations() {
  return addOperation();
}

function verifyOperationsExists(id) {
  return getOperation(id);
}

function verifyOperationsDoesNotExist(id) {
  return getOperation(id);
}

function tryToDeleteANonExistingOperations(id) {
  return deleteOperation(id);
}

function matchAddedOperations(id) {
  return bp.EventSet("matchAddedOperations", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyOperationsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create an Operation/)});
  var m = ev.data.parameters.description.match(/Create an Operation/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedOperations(id) {
  return bp.EventSet("matchDeletedOperations", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyOperationsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete an Operation (.+)/)});
  var m = ev.data.parameters.description.match(/Delete an Operation (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: permissions ----

function addPermission() {
  var url = "/permissions";
  var description = "Create a Permission";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deletePermissions() {
  var url = "/permissions";
  var description = "Delete Multiple Permissions";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getPermission(id) {
  var url = "/permissions/" + id;
  var description = "Retrieve a Permission " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePermissions() {
  var url = "/permissions";
  var description = "Update Multiple Permissions";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listPermissions() {
  var url = "/permissions";
  var description = "List Permissions";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listMyPermissions() {
  var url = "/permissions/me";
  var description = "List My Permissions";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingPermissions() {
  return addPermission();
}

function verifyPermissionsExists(id) {
  return getPermission(id);
}

function verifyPermissionsDoesNotExist(id) {
  return getPermission(id);
}

function tryToDeleteANonExistingPermissions() {
  return deletePermissions();
}

function matchAddedPermissions(id) {
  return bp.EventSet("matchAddedPermissions", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyPermissionsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a Permission/)});
  var m = ev.data.parameters.description.match(/Create a Permission/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedPermissions(id) {
  return bp.EventSet("matchDeletedPermissions", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyPermissionsDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete Multiple Permissions/)});
  var m = ev.data.parameters.description.match(/Delete Multiple Permissions/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: roles ----

function listRoles() {
  var url = "/roles";
  var description = "List Roles";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: settings ----

function listSettings() {
  var url = "/settings";
  var description = "Settings control the way the platform works and acts.";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: users ----

function listUsers() {
  var url = "/users";
  var description = "List Users";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: webhooks ----

function listWebhooks() {
  var url = "/webhooks";
  var description = "Webhooks.";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}
