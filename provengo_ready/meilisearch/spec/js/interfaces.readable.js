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

// ---- Entity: settings ----

function getSettings(indexUid) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Get settings for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSettings(indexUid) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Update settings for index " + indexUid;
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
  var description = "Reset settings for index " + indexUid;
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

function tryToDeleteANonExistingSettings(indexUid) {
  return resetSettings(indexUid);
}

// ---- Entity: synonyms ----

function getSynonyms(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Get synonyms for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSynonyms(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Update synonyms for index " + indexUid;
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
  var description = "Reset synonyms for index " + indexUid;
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

function tryToDeleteANonExistingSynonyms(indexUid) {
  return resetSynonyms(indexUid);
}

// ---- Entity: sortableAttributes ----

function getSortableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Get sortable attributes for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSortableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Update sortable attributes for index " + indexUid;
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
  var description = "Reset sortable attributes for index " + indexUid;
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

function tryToDeleteANonExistingSortableAttributes(indexUid) {
  return resetSortableAttributes(indexUid);
}

// ---- Entity: stopWords ----

function getStopWords(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Get stop-words for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateStopWords(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Update stop-words for index " + indexUid;
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
  var description = "Reset stop-words for index " + indexUid;
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

function tryToDeleteANonExistingStopWords(indexUid) {
  return resetStopWords(indexUid);
}

// ---- Entity: rankingRules ----

function getRankingRules(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/ranking-rules";
  var description = "Get ranking rules for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRankingRules(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/ranking-rules";
  var description = "Update ranking rules for index " + indexUid;
  var body = rankingRules;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetRankingRules(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/ranking-rules";
  var description = "Reset ranking rules for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyRankingRulesExists(indexUid) {
  return getRankingRules(indexUid);
}

function verifyRankingRulesDoesNotExist(indexUid) {
  return getRankingRules(indexUid);
}

function tryToDeleteANonExistingRankingRules(indexUid) {
  return resetRankingRules(indexUid);
}

// ---- Entity: typoTolerance ----

function getTypoTolerance(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/typo-tolerance";
  var description = "Get typo tolerance configuration for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateTypoTolerance(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/typo-tolerance";
  var description = "Update typo tolerance settings for index " + indexUid;
  var body = typoTolerance;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetTypoTolerance(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/typo-tolerance";
  var description = "Reset typo tolerance settings to the default configuration for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTypoToleranceExists(indexUid) {
  return getTypoTolerance(indexUid);
}

function verifyTypoToleranceDoesNotExist(indexUid) {
  return getTypoTolerance(indexUid);
}

function tryToDeleteANonExistingTypoTolerance(indexUid) {
  return resetTypoTolerance(indexUid);
}

// ---- Entity: pagination ----

function getPagination(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/pagination";
  var description = "Get pagination configuration for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updatePagination(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/pagination";
  var description = "Update pagination settings for index " + indexUid;
  var body = pagination;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetPagination(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/pagination";
  var description = "Reset pagination settings to the default configuration for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyPaginationExists(indexUid) {
  return getPagination(indexUid);
}

function verifyPaginationDoesNotExist(indexUid) {
  return getPagination(indexUid);
}

function tryToDeleteANonExistingPagination(indexUid) {
  return resetPagination(indexUid);
}

// ---- Entity: faceting ----

function getFaceting(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/faceting";
  var description = "Get faceting configuration for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFaceting(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/faceting";
  var description = "Update faceting settings for index " + indexUid;
  var body = faceting;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetFaceting(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/faceting";
  var description = "Reset faceting settings to the default configuration for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFacetingExists(indexUid) {
  return getFaceting(indexUid);
}

function verifyFacetingDoesNotExist(indexUid) {
  return getFaceting(indexUid);
}

function tryToDeleteANonExistingFaceting(indexUid) {
  return resetFaceting(indexUid);
}

// ---- Entity: filterableAttributes ----

function getFilterableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/filterable-attributes";
  var description = "Get filterable attributes for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateFilterableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/filterable-attributes";
  var description = "Update filterable attributes for index " + indexUid;
  var body = filterableAttributes;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetFilterableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/filterable-attributes";
  var description = "Reset filterable attributes for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyFilterableAttributesExists(indexUid) {
  return getFilterableAttributes(indexUid);
}

function verifyFilterableAttributesDoesNotExist(indexUid) {
  return getFilterableAttributes(indexUid);
}

function tryToDeleteANonExistingFilterableAttributes(indexUid) {
  return resetFilterableAttributes(indexUid);
}

// ---- Entity: distinctAttribute ----

function getDistinctAttribute(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/distinct-attribute";
  var description = "Get distinct attribute for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDistinctAttribute(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/distinct-attribute";
  var description = "Update distinct attribute for index " + indexUid;
  var body = distinctAttribute;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetDistinctAttribute(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/distinct-attribute";
  var description = "Reset distinct attribute for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDistinctAttributeExists(indexUid) {
  return getDistinctAttribute(indexUid);
}

function verifyDistinctAttributeDoesNotExist(indexUid) {
  return getDistinctAttribute(indexUid);
}

function tryToDeleteANonExistingDistinctAttribute(indexUid) {
  return resetDistinctAttribute(indexUid);
}

// ---- Entity: searchableAttributes ----

function getSearchableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/searchable-attributes";
  var description = "Get searchable attributes for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSearchableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/searchable-attributes";
  var description = "Update searchable attributes for index " + indexUid;
  var body = searchableAttributes;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetSearchableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/searchable-attributes";
  var description = "Reset searchable attributes for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySearchableAttributesExists(indexUid) {
  return getSearchableAttributes(indexUid);
}

function verifySearchableAttributesDoesNotExist(indexUid) {
  return getSearchableAttributes(indexUid);
}

function tryToDeleteANonExistingSearchableAttributes(indexUid) {
  return resetSearchableAttributes(indexUid);
}

// ---- Entity: displayedAttributes ----

function getDisplayedAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/displayed-attributes";
  var description = "Get displayed attributes for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateDisplayedAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/displayed-attributes";
  var description = "Update displayed attributes for index " + indexUid;
  var body = displayedAttributes;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function resetDisplayedAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/displayed-attributes";
  var description = "Reset displayed attributes for index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyDisplayedAttributesExists(indexUid) {
  return getDisplayedAttributes(indexUid);
}

function verifyDisplayedAttributesDoesNotExist(indexUid) {
  return getDisplayedAttributes(indexUid);
}

function tryToDeleteANonExistingDisplayedAttributes(indexUid) {
  return resetDisplayedAttributes(indexUid);
}

// ---- Entity: document ----

function createDocument(indexUid) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Add or replace documents in index " + indexUid;
  var body = undefined;
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

function upsertDocument(indexUid) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Add or update documents in index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getDocument(indexUid, documentId) {
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

function tryToAddExistingDocument(indexUid, documentId) {
  return createDocument(indexUid);
}

function verifyDocumentExists(indexUid, documentId) {
  return getDocument(indexUid, documentId);
}

function verifyDocumentDoesNotExist(indexUid, documentId) {
  return getDocument(indexUid, documentId);
}

function tryToDeleteANonExistingDocument(indexUid, documentId) {
  return deleteDocument(indexUid, documentId);
}

// ---- Entity: index ----

function createIndex(uid, primaryKey) {
  var url = "/indexes";
  var description = "Create index " + uid + " with primaryKey " + primaryKey;
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

function searchGet(indexUid, q, attributesToRetrieve, attributesToHighlight, highlightPreTag, highlightPostTag, attributesToCrop, cropMarker, cropLength, facets, filter, offset, sort, limit, page, hitsPerPage, showMatchesPosition, matchingStrategy) {
  var url = "/indexes/" + indexUid + "/search";
  var description = "Search in index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function search(indexUid) {
  var url = "/indexes/" + indexUid + "/search";
  var description = "Search in index " + indexUid;
  var body = {
    "q": q,
    "offset": offset,
    "limit": limit,
    "filter": filter,
    "facets": facets,
    "attributesToRetrieve": attributesToRetrieve,
    "attributesToHighlight": attributesToHighlight,
    "highlightPreTag": highlightPreTag,
    "highlightPostTag": highlightPostTag,
    "attributesToCrop": attributesToCrop,
    "cropMarker": cropMarker,
    "cropLength": cropLength,
    "sort": sort,
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

function tryToAddExistingIndex(uid, primaryKey, indexUid, q, attributesToRetrieve, attributesToHighlight, highlightPreTag, highlightPostTag, attributesToCrop, cropMarker, cropLength, facets, filter, offset, sort, limit, page, hitsPerPage, showMatchesPosition, matchingStrategy) {
  return createIndex(uid, primaryKey);
}

function verifyIndexExists(uid, primaryKey, indexUid, q, attributesToRetrieve, attributesToHighlight, highlightPreTag, highlightPostTag, attributesToCrop, cropMarker, cropLength, facets, filter, offset, sort, limit, page, hitsPerPage, showMatchesPosition, matchingStrategy) {
  return getIndex(indexUid);
}

function verifyIndexDoesNotExist(uid, primaryKey, indexUid, q, attributesToRetrieve, attributesToHighlight, highlightPreTag, highlightPostTag, attributesToCrop, cropMarker, cropLength, facets, filter, offset, sort, limit, page, hitsPerPage, showMatchesPosition, matchingStrategy) {
  return getIndex(indexUid);
}

function tryToDeleteANonExistingIndex(uid, primaryKey, indexUid, q, attributesToRetrieve, attributesToHighlight, highlightPreTag, highlightPostTag, attributesToCrop, cropMarker, cropLength, facets, filter, offset, sort, limit, page, hitsPerPage, showMatchesPosition, matchingStrategy) {
  return deleteIndex(indexUid);
}

// ---- Entity: facet search ----

function facetSearch(indexUid) {
  var url = "/indexes/" + indexUid + "/facet-search";
  var description = "Facet search in index " + indexUid;
  var body = {
    "facetQuery": facetQuery,
    "facetName": facetName,
    "limit": limit,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: multi search ----

function multiSearch() {
  var url = "/multi-search";
  var description = "Perform multi search with queries";
  var body = {
    "queries": [{'indexUid': '{indexUid}', 'q': '{q}', 'offset': '{offset}', 'limit': '{limit}', 'filter': '{filter}', 'facets': '{facets}', 'attributesToRetrieve': '{attributesToRetrieve}', 'attributesToCrop': '{attributesToCrop}', 'cropLength': '{cropLength}', 'attributesToHighlight': '{attributesToHighlight}', 'showMatchesPosition': '{showMatchesPosition}', 'matchingStrategy': '{matchingStrategy}'}],
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

// ---- Entity: index stat ----

function getIndexStat(indexUid) {
  var url = "/indexes/" + indexUid + "/stats";
  var description = "Get stat of an index " + indexUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyIndexStatsExists(indexUid) {
  return getIndexStat(indexUid);
}

function verifyIndexStatsDoesNotExist(indexUid) {
  return getIndexStat(indexUid);
}

// ---- Entity: stats ----

function getAllStats() {
  var url = "/stats";
  var description = "Get stats of all indexes";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyStatsExists() {
  return getAllStats();
}

function verifyStatsDoesNotExist() {
  return getAllStats();
}

// ---- Entity: metrics ----

function getMetrics() {
  var url = "/metrics";
  var description = "Get prometheus format metrics for observability and monitoring";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyMetricsExists() {
  return getMetrics();
}

function verifyMetricsDoesNotExist() {
  return getMetrics();
}

// ---- Entity: task ----

function getTask(taskUid) {
  var url = "/tasks/:taskUid";
  var description = "Get task with uid " + taskUid;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listTasks(total, limit, from, taskFilterUids, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterCanceledBy, taskFilterBeforeEnqueuedAt, taskFilterAfterEnqueuedAt, taskFilterBeforeStartedAt, taskFilterAfterStartedAt, taskFilterBeforeFinishedAt, taskFilterAfterFinishedAt) {
  var url = "/tasks";
  var description = "List all tasks with filters";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteTasks(taskFilterUids, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterCanceledBy, taskFilterBeforeEnqueuedAt, taskFilterAfterEnqueuedAt, taskFilterBeforeStartedAt, taskFilterAfterStartedAt, taskFilterBeforeFinishedAt, taskFilterAfterFinishedAt) {
  var url = "/tasks";
  var description = "Delete tasks with filters";
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function cancelTasks(taskFilterUids, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterCanceledBy, taskFilterBeforeEnqueuedAt, taskFilterAfterEnqueuedAt, taskFilterBeforeStartedAt, taskFilterAfterStartedAt, taskFilterBeforeFinishedAt, taskFilterAfterFinishedAt) {
  var url = "/tasks/cancel";
  var description = "Cancel tasks with filters";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyTaskExists(taskUid, total, limit, from, taskFilterUids, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterCanceledBy, taskFilterBeforeEnqueuedAt, taskFilterAfterEnqueuedAt, taskFilterBeforeStartedAt, taskFilterAfterStartedAt, taskFilterBeforeFinishedAt, taskFilterAfterFinishedAt) {
  return getTask(taskUid);
}

function verifyTaskDoesNotExist(taskUid, total, limit, from, taskFilterUids, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterCanceledBy, taskFilterBeforeEnqueuedAt, taskFilterAfterEnqueuedAt, taskFilterBeforeStartedAt, taskFilterAfterStartedAt, taskFilterBeforeFinishedAt, taskFilterAfterFinishedAt) {
  return getTask(taskUid);
}

function tryToDeleteANonExistingTask(taskUid, total, limit, from, taskFilterUids, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterCanceledBy, taskFilterBeforeEnqueuedAt, taskFilterAfterEnqueuedAt, taskFilterBeforeStartedAt, taskFilterAfterStartedAt, taskFilterBeforeFinishedAt, taskFilterAfterFinishedAt) {
  return deleteTasks(taskFilterUids, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterCanceledBy, taskFilterBeforeEnqueuedAt, taskFilterAfterEnqueuedAt, taskFilterBeforeStartedAt, taskFilterAfterStartedAt, taskFilterBeforeFinishedAt, taskFilterAfterFinishedAt);
}

// ---- Entity: key ----

function createKey(name, actions, indexes, expiresAt) {
  var url = "/keys";
  var description = "Create key " + name;
  var body = {
    "name": name,
    "actions": actions,
    "indexes": indexes,
    "expiresAt": expiresAt,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteKey(uidOrKey) {
  var url = "/keys/" + uidOrKey;
  var description = "Delete key " + uidOrKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateKey(uidOrKey, name, description) {
  var url = "/keys/" + uidOrKey;
  var description = "Update key " + uidOrKey + " with name " + name + " and description " + description;
  var body = {
    "name": name,
    "description": description,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getKey(uidOrKey) {
  var url = "/keys/" + uidOrKey;
  var description = "Get key " + uidOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function listKeys(limit, offset) {
  var url = "/keys";
  var description = "List keys with limit " + limit + " and offset " + offset;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingKey(name, actions, indexes, expiresAt, uidOrKey, description, limit, offset) {
  return createKey(name, actions, indexes, expiresAt);
}

function verifyKeyExists(name, actions, indexes, expiresAt, uidOrKey, description, limit, offset) {
  return getKey(uidOrKey);
}

function verifyKeyDoesNotExist(name, actions, indexes, expiresAt, uidOrKey, description, limit, offset) {
  return getKey(uidOrKey);
}

function tryToDeleteANonExistingKey(name, actions, indexes, expiresAt, uidOrKey, description, limit, offset) {
  return deleteKey(uidOrKey);
}

// ---- Entity: dump ----

function createDump() {
  var url = "/dumps";
  var description = "Create a dump";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDump() {
  return createDump();
}

// ---- Entity: snapshot ----

function createSnapshot() {
  var url = "/snapshots";
  var description = "Create a snapshot";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingSnapshot() {
  return createSnapshot();
}

// ---- Entity: version ----

function getVersion() {
  var url = "/version";
  var description = "Get version of Meilisearch";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyVersionExists() {
  return getVersion();
}

function verifyVersionDoesNotExist() {
  return getVersion();
}

// ---- Entity: experimental feature ----

function getExperimentalFeatures() {
  var url = "/experimental-features";
  var description = "Get the status of runtime experimental features";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateExperimentalFeatures() {
  var url = "/experimental-features";
  var description = "Set the status of runtime experimental features";
  var body = {
    "vectorStore": vectorStore,
    "metrics": metrics,
    "exportPuffinReports": exportPuffinReports,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyExperimentalFeaturesExists() {
  return getExperimentalFeatures();
}

function verifyExperimentalFeaturesDoesNotExist() {
  return getExperimentalFeatures();
}
