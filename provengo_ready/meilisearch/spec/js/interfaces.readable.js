//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("https://example.meilisearch.com:7700", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: index ----

function addIndex(uid, primaryKey) {
  var url = "/indexes";
  var description = "Add index " + uid;
  var body = {
    "uid": uid,
    "primaryKey": primaryKey,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIndex(indexUid) {
  var url = "/indexes/" + indexUid;
  var description = "Delete index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIndex(indexUid) {
  var url = "/indexes/" + indexUid;
  var description = "Get index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIndex(indexUid, primaryKey) {
  var url = "/indexes/" + indexUid;
  var description = "Update index " + indexUid + " with primaryKey " + primaryKey;
  var body = {
    "primaryKey": primaryKey,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIndex(uid, primaryKey) {
  return addIndex(uid, primaryKey);
}

function verifyIndexExists(indexUid) {
  return getIndex(indexUid);
}

function verifyIndexDoesNotExist(indexUid) {
  return getIndex(indexUid);
}

function tryToDeleteANonExistingIndex(indexUid) {
  return deleteIndex(indexUid);
}

function matchAddedIndex(uid, primaryKey) {
  return bp.EventSet("matchAddedIndex", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(uid);
  });
}

function waitForAnyIndexAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add index (.+)/)});
  var m = ev.data.parameters.description.match(/Add index (.+)/);
  var captures = m.slice(1);
  var names = ["uid", "primaryKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedIndex(uid, primaryKey) {
  return bp.EventSet("matchDeletedIndex", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(uid);
  });
}

function waitForAnyIndexDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete index (.+)/)});
  var m = ev.data.parameters.description.match(/Delete index (.+)/);
  var captures = m.slice(1);
  var names = ["uid", "primaryKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: document ----

function addDocuments(indexUid, primaryKey, csvDelimiter) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Add documents to index " + indexUid;
  var body = "[{document}]";
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAllDocuments(indexUid) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Delete all documents in index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDocument(indexUid, documentId, fields) {
  var url = "/indexes/" + indexUid + "/documents/" + documentId;
  var description = "Get document " + documentId + " from index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDocuments(indexUid, primaryKey, csvDelimiter) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Update documents in index " + indexUid;
  var body = "[{document}]";
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDocumentsBatch(indexUid) {
  var url = "/indexes/" + indexUid + "/documents/delete-batch";
  var description = "Delete documents batch in index " + indexUid;
  var body = "[{documentId}]";
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDocumentsByFilter(indexUid, filter) {
  var url = "/indexes/" + indexUid + "/documents/delete";
  var description = "Delete documents by filter in index " + indexUid;
  var body = {
    "filter": filter,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteDocument(indexUid, documentId) {
  var url = "/indexes/" + indexUid + "/documents/" + documentId;
  var description = "Delete document " + documentId + " from index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listDocuments(indexUid, limit, offset, fields, filter) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "List documents in index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function fetchDocuments(indexUid, offset, limit, fields, filter) {
  var url = "/indexes/" + indexUid + "/documents/fetch";
  var description = "Fetch documents in index " + indexUid;
  var body = {
    "offset": offset,
    "limit": limit,
    "fields": fields,
    "filter": filter,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDocument(indexUid, primaryKey, csvDelimiter) {
  return addDocuments(indexUid, primaryKey, csvDelimiter);
}

function verifyDocumentExists(indexUid, documentId, fields) {
  return getDocument(indexUid, documentId, fields);
}

function verifyDocumentDoesNotExist(indexUid, documentId, fields) {
  return getDocument(indexUid, documentId, fields);
}

function tryToDeleteANonExistingDocument(indexUid) {
  return deleteAllDocuments(indexUid);
}

function matchAddedDocument(indexUid, primaryKey, csvDelimiter) {
  return bp.EventSet("matchAddedDocument", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(indexUid);
  });
}

function waitForAnyDocumentAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add documents to index (.+)/)});
  var m = ev.data.parameters.description.match(/Add documents to index (.+)/);
  var captures = m.slice(1);
  var names = ["indexUid", "primaryKey", "csvDelimiter"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedDocument(indexUid, primaryKey, csvDelimiter) {
  return bp.EventSet("matchDeletedDocument", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(indexUid);
  });
}

function waitForAnyDocumentDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete documents.*index (.+)/)});
  var m = ev.data.parameters.description.match(/Delete documents.*index (.+)/);
  var captures = m.slice(1);
  var names = ["indexUid", "primaryKey", "csvDelimiter"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: search ----

function searchGet(indexUid, q, attributesToRetrieve, attributesToHighlight, highlightPreTag, highlightPostTag, attributesToCrop, cropMarker, cropLength, facets, filter, offset, sort, limit, page, hitsPerPage, showMatchesPosition, matchingStrategy) {
  var url = "/indexes/" + indexUid + "/search";
  var description = "Search in index " + indexUid + " with query " + q;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function searchPost(indexUid, Content-Type) {
  var url = "/indexes/" + indexUid + "/search";
  var description = "Search in index " + indexUid + " with query {q}";
  var body = {
    "q": q,
    "attributesToRetrieve": attributesToRetrieve,
    "attributesToHighlight": attributesToHighlight,
    "highlightPreTag": highlightPreTag,
    "highlightPostTag": highlightPostTag,
    "attributesToCrop": attributesToCrop,
    "cropMarker": cropMarker,
    "cropLength": cropLength,
    "facets": facets,
    "filter": filter,
    "offset": offset,
    "sort": sort,
    "limit": limit,
    "page": page,
    "hitsPerPage": hitsPerPage,
    "showMatchesPosition": showMatchesPosition,
    "matchingStrategy": matchingStrategy,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: facetsearch ----

function facetSearch(indexUid, Content-Type) {
  var url = "/indexes/" + indexUid + "/facet-search";
  var description = "Facet search in index " + indexUid;
  var body = {
    "facetName": facetName,
    "facetQuery": facetQuery,
    "q": q,
    "matchingStrategy": matchingStrategy,
    "filter": filter,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: settings ----

function getSettings(indexUid) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Get settings of index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSettings(indexUid, Content-Type) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Update settings of index " + indexUid;
  var body = {
    "synonyms": synonyms,
    "stopWords": stopWords,
    "rankingRules": rankingRules,
    "distinctAttribute": distinctAttribute,
    "searchableAttributes": searchableAttributes,
    "displayedAttributes": displayedAttributes,
    "filterableAttributes": filterableAttributes,
    "sortableAttributes": sortableAttributes,
    "typoTolerance": typoTolerance,
    "pagination": pagination,
    "faceting": faceting,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetSettings(indexUid) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Reset settings of index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySettingsExists(indexUid) {
  return getSettings(indexUid);
}

function verifySettingsDoesNotExist(indexUid) {
  return getSettings(indexUid);
}

// ---- Entity: synonyms ----

function getSynonyms(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Get synonyms of index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSynonyms(indexUid, Content-Type) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Update synonyms of index " + indexUid;
  var body = synonyms;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetSynonyms(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Reset synonyms of index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySynonymsExists(indexUid) {
  return getSynonyms(indexUid);
}

function verifySynonymsDoesNotExist(indexUid) {
  return getSynonyms(indexUid);
}

// ---- Entity: sortableattributes ----

function getSortableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Get sortable attributes of index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSortableAttributes(indexUid, Content-Type) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Update sortable attributes of index " + indexUid;
  var body = sortableAttributes;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetSortableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Reset sortable attributes of index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySortableAttributesExists(indexUid) {
  return getSortableAttributes(indexUid);
}

function verifySortableAttributesDoesNotExist(indexUid) {
  return getSortableAttributes(indexUid);
}

// ---- Entity: stopwords ----

function getStopWords(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Get stop-words of index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateStopWords(indexUid, Content-Type) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Update stop-words of index " + indexUid;
  var body = stopWords;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetStopWords(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Reset stop-words of index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyStopWordsExists(indexUid) {
  return getStopWords(indexUid);
}

function verifyStopWordsDoesNotExist(indexUid) {
  return getStopWords(indexUid);
}

// ---- Entity: task ----

function getTask(taskUid) {
  var url = "/tasks/" + taskUid;
  var description = "Get task " + taskUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listTasks(uids, indexUids, types, statuses, beforeEnqueuedAt, afterEnqueuedAt, beforeStartedAt, afterStartedAt, beforeFinishedAt, afterFinishedAt, canceledBy) {
  var url = "/tasks";
  var description = "List tasks";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function cancelTask(taskUid) {
  var url = "/tasks/" + taskUid + "/cancel";
  var description = "Cancel task " + taskUid;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTask(taskUid) {
  var url = "/tasks/" + taskUid;
  var description = "Delete task " + taskUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTasksExists(taskUid) {
  return getTask(taskUid);
}

function verifyTasksDoesNotExist(taskUid) {
  return getTask(taskUid);
}

function tryToDeleteANonExistingTasks(taskUid) {
  return deleteTask(taskUid);
}

function matchAddedTasks(taskUid) {
  return bp.EventSet("matchAddedTasks", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(taskUid);
  });
}

function waitForAnyTasksAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add task (.+)/)});
  var m = ev.data.parameters.description.match(/Add task (.+)/);
  var captures = m.slice(1);
  var names = ["taskUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedTasks(taskUid) {
  return bp.EventSet("matchDeletedTasks", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(taskUid);
  });
}

function waitForAnyTasksDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete task (.+)/)});
  var m = ev.data.parameters.description.match(/Delete task (.+)/);
  var captures = m.slice(1);
  var names = ["taskUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: key ----

function addKey(uid, actions, indexes, name, description, expiresAt, Content-Type) {
  var url = "/keys";
  var description = "Add key " + uid;
  var body = {
    "uid": uid,
    "actions": actions,
    "indexes": indexes,
    "name": name,
    "description": description,
    "expiresAt": expiresAt,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteKey(uid) {
  var url = "/keys/" + uid;
  var description = "Delete key " + uid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getKey(uid) {
  var url = "/keys/" + uid;
  var description = "Get key " + uid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateKey(uid, actions, indexes, name, description, expiresAt, Content-Type) {
  var url = "/keys/" + uid;
  var description = "Update key " + uid;
  var body = {
    "actions": actions,
    "indexes": indexes,
    "name": name,
    "description": description,
    "expiresAt": expiresAt,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listKeys() {
  var url = "/keys";
  var description = "List keys";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingKeys(uid, actions, indexes, name, description, expiresAt, Content-Type) {
  return addKey(uid, actions, indexes, name, description, expiresAt, Content-Type);
}

function verifyKeysExists(uid) {
  return getKey(uid);
}

function verifyKeysDoesNotExist(uid) {
  return getKey(uid);
}

function tryToDeleteANonExistingKeys(uid) {
  return deleteKey(uid);
}

function matchAddedKeys(uid, actions, indexes, name, description, expiresAt, Content-Type) {
  return bp.EventSet("matchAddedKeys", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(uid);
  });
}

function waitForAnyKeysAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add key (.+)/)});
  var m = ev.data.parameters.description.match(/Add key (.+)/);
  var captures = m.slice(1);
  var names = ["uid", "actions", "indexes", "name", "description", "expiresAt", "Content-Type"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedKeys(uid, actions, indexes, name, description, expiresAt, Content-Type) {
  return bp.EventSet("matchDeletedKeys", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(uid);
  });
}

function waitForAnyKeysDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete key (.+)/)});
  var m = ev.data.parameters.description.match(/Delete key (.+)/);
  var captures = m.slice(1);
  var names = ["uid", "actions", "indexes", "name", "description", "expiresAt", "Content-Type"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: dump ----

function createDump(Content-Type) {
  var url = "/dumps";
  var description = "Create dump";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDumps(Content-Type) {
  return createDump(Content-Type);
}

function matchAddedDumps(Content-Type) {
  return bp.EventSet("matchAddedDumps", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(Content-Type);
  });
}

function waitForAnyDumpsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create dump/)});
  var m = ev.data.parameters.description.match(/Create dump/);
  var captures = m.slice(1);
  var names = ["Content-Type"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: snapshot ----

function createSnapshot(Content-Type) {
  var url = "/snapshots";
  var description = "Create snapshot";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSnapshots(Content-Type) {
  return createSnapshot(Content-Type);
}

function matchAddedSnapshots(Content-Type) {
  return bp.EventSet("matchAddedSnapshots", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(Content-Type);
  });
}

function waitForAnySnapshotsAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create snapshot/)});
  var m = ev.data.parameters.description.match(/Create snapshot/);
  var captures = m.slice(1);
  var names = ["Content-Type"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
