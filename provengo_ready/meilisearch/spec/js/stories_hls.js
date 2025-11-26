// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Settings:read_only
bthread("crud:Settings:read_only", function () {
  let indexUid = 200;
  verifySettingsExists(200);
});

// Story: crud:Synonyms:read_only
bthread("crud:Synonyms:read_only", function () {
  let indexUid = 210;
  verifySynonymsExists(210);
});

// Story: crud:SortableAttributes:read_only
bthread("crud:SortableAttributes:read_only", function () {
  let indexUid = 220;
  verifySortableAttributesExists(220);
});

// Story: crud:StopWords:read_only
bthread("crud:StopWords:read_only", function () {
  let indexUid = 230;
  verifyStopWordsExists(230);
});

// Story: crud:RankingRules:read_only
bthread("crud:RankingRules:read_only", function () {
  let indexUid = 240;
  verifyRankingRulesExists(240);
});

// Story: crud:TypoTolerance:read_only
bthread("crud:TypoTolerance:read_only", function () {
  let indexUid = 250;
  verifyTypoToleranceExists(250);
});

// Story: crud:Pagination:read_only
bthread("crud:Pagination:read_only", function () {
  let indexUid = 260;
  verifyPaginationExists(260);
});

// Story: crud:Faceting:read_only
bthread("crud:Faceting:read_only", function () {
  let indexUid = 270;
  verifyFacetingExists(270);
});

// Story: crud:FilterableAttributes:read_only
bthread("crud:FilterableAttributes:read_only", function () {
  let indexUid = 280;
  verifyFilterableAttributesExists(280);
});

// Story: crud:DistinctAttribute:read_only
bthread("crud:DistinctAttribute:read_only", function () {
  let indexUid = 290;
  verifyDistinctAttributeExists(290);
});

// Story: crud:SearchableAttributes:read_only
bthread("crud:SearchableAttributes:read_only", function () {
  let indexUid = 300;
  verifySearchableAttributesExists(300);
});

// Story: crud:DisplayedAttributes:read_only
bthread("crud:DisplayedAttributes:read_only", function () {
  let indexUid = 310;
  verifyDisplayedAttributesExists(310);
});

// Story: crud:Document:nondet:1:1
bthread("crud:Document:nondet:1:1", function () {
  let indexUid = 320;
  let documentId = 320;
  createDocument(320, 320);
  tryToAddExistingDocument(320, 320);
  verifyDocumentExists(320, 320);
  upsertDocument(320, 320);
  deleteDocument(320, 320);
  tryToDeleteANonExistingDocument(320, 320);
  verifyDocumentDoesNotExist(320, 320);
});

// Story: crud:Document:nondet:1:2
bthread("crud:Document:nondet:1:2", function () {
  let indexUid = 321;
  let documentId = 321;
  createDocument(321, 321);
  tryToAddExistingDocument(321, 321);
  upsertDocument(321, 321);
  verifyDocumentExists(321, 321);
  deleteDocument(321, 321);
  tryToDeleteANonExistingDocument(321, 321);
  verifyDocumentDoesNotExist(321, 321);
});

// Story: crud:Document:nondet:negative:dup-add
bthread("crud:Document:nondet:negative:dup-add", function () {
  let indexUid = 326;
  let documentId = 326;
  createDocument(326, 326);
  verifyDocumentExists(326, 326);
  tryToAddExistingDocument(326, 326);
  verifyDocumentExists(326, 326);
});

// Story: crud:Document:nondet:existing:update
bthread("crud:Document:nondet:existing:update", function () {
  let ev = waitForAnyDocumentAdded();
  let args = Object.values(ev);
  block(matchDeletedDocument.apply(null, args), function () {
    verifyDocumentExists.apply(null, args);
    upsertDocument.apply(null, args);
    verifyDocumentExists.apply(null, args);
  });
});

// Story: monitor:Document:add
bthread("monitor:Document:add", function () {
  while (true) {
    let ev = waitForAnyDocumentAdded();
    let args = Object.values(ev);
    block(matchDeletedDocument.apply(null, args), function () {
      verifyDocumentExists.apply(null, args);
    });
  }
});

// Story: crud:Index:nondet:1:1
bthread("crud:Index:nondet:1:1", function () {
  let uid = 330;
  let primaryKey = "primaryKey_330";
  let indexUid = 330;
  let q = "q_330";
  let attributesToRetrieve = "attributesToRetrieve_330";
  let attributesToHighlight = "attributesToHighlight_330";
  let highlightPreTag = "highlightPreTag_330";
  let highlightPostTag = "highlightPostTag_330";
  let attributesToCrop = "attributesToCrop_330";
  let cropMarker = "cropMarker_330";
  let cropLength = "cropLength_330";
  let facets = "facets_330";
  let filter = "filter_330";
  let offset = "offset_330";
  let sort = "sort_330";
  let limit = "limit_330";
  let page = "page_330";
  let hitsPerPage = "hitsPerPage_330";
  let showMatchesPosition = "showMatchesPosition_330";
  let matchingStrategy = "matchingStrategy_330";
  createIndex(330, "primaryKey_330", 330, "q_330", "attributesToRetrieve_330", "attributesToHighlight_330", "highlightPreTag_330", "highlightPostTag_330", "attributesToCrop_330", "cropMarker_330", "cropLength_330", "facets_330", "filter_330", "offset_330", "sort_330", "limit_330", "page_330", "hitsPerPage_330", "showMatchesPosition_330", "matchingStrategy_330");
  tryToAddExistingIndex(330, "primaryKey_330", 330, "q_330", "attributesToRetrieve_330", "attributesToHighlight_330", "highlightPreTag_330", "highlightPostTag_330", "attributesToCrop_330", "cropMarker_330", "cropLength_330", "facets_330", "filter_330", "offset_330", "sort_330", "limit_330", "page_330", "hitsPerPage_330", "showMatchesPosition_330", "matchingStrategy_330");
  verifyIndexExists(330, "primaryKey_330", 330, "q_330", "attributesToRetrieve_330", "attributesToHighlight_330", "highlightPreTag_330", "highlightPostTag_330", "attributesToCrop_330", "cropMarker_330", "cropLength_330", "facets_330", "filter_330", "offset_330", "sort_330", "limit_330", "page_330", "hitsPerPage_330", "showMatchesPosition_330", "matchingStrategy_330");
  updateIndex(330, "primaryKey_330", 330, "q_330", "attributesToRetrieve_330", "attributesToHighlight_330", "highlightPreTag_330", "highlightPostTag_330", "attributesToCrop_330", "cropMarker_330", "cropLength_330", "facets_330", "filter_330", "offset_330", "sort_330", "limit_330", "page_330", "hitsPerPage_330", "showMatchesPosition_330", "matchingStrategy_330");
  deleteIndex(330, "primaryKey_330", 330, "q_330", "attributesToRetrieve_330", "attributesToHighlight_330", "highlightPreTag_330", "highlightPostTag_330", "attributesToCrop_330", "cropMarker_330", "cropLength_330", "facets_330", "filter_330", "offset_330", "sort_330", "limit_330", "page_330", "hitsPerPage_330", "showMatchesPosition_330", "matchingStrategy_330");
  tryToDeleteANonExistingIndex(330, "primaryKey_330", 330, "q_330", "attributesToRetrieve_330", "attributesToHighlight_330", "highlightPreTag_330", "highlightPostTag_330", "attributesToCrop_330", "cropMarker_330", "cropLength_330", "facets_330", "filter_330", "offset_330", "sort_330", "limit_330", "page_330", "hitsPerPage_330", "showMatchesPosition_330", "matchingStrategy_330");
  verifyIndexDoesNotExist(330, "primaryKey_330", 330, "q_330", "attributesToRetrieve_330", "attributesToHighlight_330", "highlightPreTag_330", "highlightPostTag_330", "attributesToCrop_330", "cropMarker_330", "cropLength_330", "facets_330", "filter_330", "offset_330", "sort_330", "limit_330", "page_330", "hitsPerPage_330", "showMatchesPosition_330", "matchingStrategy_330");
});

// Story: crud:Index:nondet:1:2
bthread("crud:Index:nondet:1:2", function () {
  let uid = 331;
  let primaryKey = "primaryKey_331";
  let indexUid = 331;
  let q = "q_331";
  let attributesToRetrieve = "attributesToRetrieve_331";
  let attributesToHighlight = "attributesToHighlight_331";
  let highlightPreTag = "highlightPreTag_331";
  let highlightPostTag = "highlightPostTag_331";
  let attributesToCrop = "attributesToCrop_331";
  let cropMarker = "cropMarker_331";
  let cropLength = "cropLength_331";
  let facets = "facets_331";
  let filter = "filter_331";
  let offset = "offset_331";
  let sort = "sort_331";
  let limit = "limit_331";
  let page = "page_331";
  let hitsPerPage = "hitsPerPage_331";
  let showMatchesPosition = "showMatchesPosition_331";
  let matchingStrategy = "matchingStrategy_331";
  createIndex(331, "primaryKey_331", 331, "q_331", "attributesToRetrieve_331", "attributesToHighlight_331", "highlightPreTag_331", "highlightPostTag_331", "attributesToCrop_331", "cropMarker_331", "cropLength_331", "facets_331", "filter_331", "offset_331", "sort_331", "limit_331", "page_331", "hitsPerPage_331", "showMatchesPosition_331", "matchingStrategy_331");
  tryToAddExistingIndex(331, "primaryKey_331", 331, "q_331", "attributesToRetrieve_331", "attributesToHighlight_331", "highlightPreTag_331", "highlightPostTag_331", "attributesToCrop_331", "cropMarker_331", "cropLength_331", "facets_331", "filter_331", "offset_331", "sort_331", "limit_331", "page_331", "hitsPerPage_331", "showMatchesPosition_331", "matchingStrategy_331");
  updateIndex(331, "primaryKey_331", 331, "q_331", "attributesToRetrieve_331", "attributesToHighlight_331", "highlightPreTag_331", "highlightPostTag_331", "attributesToCrop_331", "cropMarker_331", "cropLength_331", "facets_331", "filter_331", "offset_331", "sort_331", "limit_331", "page_331", "hitsPerPage_331", "showMatchesPosition_331", "matchingStrategy_331");
  verifyIndexExists(331, "primaryKey_331", 331, "q_331", "attributesToRetrieve_331", "attributesToHighlight_331", "highlightPreTag_331", "highlightPostTag_331", "attributesToCrop_331", "cropMarker_331", "cropLength_331", "facets_331", "filter_331", "offset_331", "sort_331", "limit_331", "page_331", "hitsPerPage_331", "showMatchesPosition_331", "matchingStrategy_331");
  deleteIndex(331, "primaryKey_331", 331, "q_331", "attributesToRetrieve_331", "attributesToHighlight_331", "highlightPreTag_331", "highlightPostTag_331", "attributesToCrop_331", "cropMarker_331", "cropLength_331", "facets_331", "filter_331", "offset_331", "sort_331", "limit_331", "page_331", "hitsPerPage_331", "showMatchesPosition_331", "matchingStrategy_331");
  tryToDeleteANonExistingIndex(331, "primaryKey_331", 331, "q_331", "attributesToRetrieve_331", "attributesToHighlight_331", "highlightPreTag_331", "highlightPostTag_331", "attributesToCrop_331", "cropMarker_331", "cropLength_331", "facets_331", "filter_331", "offset_331", "sort_331", "limit_331", "page_331", "hitsPerPage_331", "showMatchesPosition_331", "matchingStrategy_331");
  verifyIndexDoesNotExist(331, "primaryKey_331", 331, "q_331", "attributesToRetrieve_331", "attributesToHighlight_331", "highlightPreTag_331", "highlightPostTag_331", "attributesToCrop_331", "cropMarker_331", "cropLength_331", "facets_331", "filter_331", "offset_331", "sort_331", "limit_331", "page_331", "hitsPerPage_331", "showMatchesPosition_331", "matchingStrategy_331");
});

// Story: crud:Index:nondet:negative:dup-add
bthread("crud:Index:nondet:negative:dup-add", function () {
  let uid = 336;
  let primaryKey = "primaryKey_336";
  let indexUid = 336;
  let q = "q_336";
  let attributesToRetrieve = "attributesToRetrieve_336";
  let attributesToHighlight = "attributesToHighlight_336";
  let highlightPreTag = "highlightPreTag_336";
  let highlightPostTag = "highlightPostTag_336";
  let attributesToCrop = "attributesToCrop_336";
  let cropMarker = "cropMarker_336";
  let cropLength = "cropLength_336";
  let facets = "facets_336";
  let filter = "filter_336";
  let offset = "offset_336";
  let sort = "sort_336";
  let limit = "limit_336";
  let page = "page_336";
  let hitsPerPage = "hitsPerPage_336";
  let showMatchesPosition = "showMatchesPosition_336";
  let matchingStrategy = "matchingStrategy_336";
  createIndex(336, "primaryKey_336", 336, "q_336", "attributesToRetrieve_336", "attributesToHighlight_336", "highlightPreTag_336", "highlightPostTag_336", "attributesToCrop_336", "cropMarker_336", "cropLength_336", "facets_336", "filter_336", "offset_336", "sort_336", "limit_336", "page_336", "hitsPerPage_336", "showMatchesPosition_336", "matchingStrategy_336");
  verifyIndexExists(336, "primaryKey_336", 336, "q_336", "attributesToRetrieve_336", "attributesToHighlight_336", "highlightPreTag_336", "highlightPostTag_336", "attributesToCrop_336", "cropMarker_336", "cropLength_336", "facets_336", "filter_336", "offset_336", "sort_336", "limit_336", "page_336", "hitsPerPage_336", "showMatchesPosition_336", "matchingStrategy_336");
  tryToAddExistingIndex(336, "primaryKey_336", 336, "q_336", "attributesToRetrieve_336", "attributesToHighlight_336", "highlightPreTag_336", "highlightPostTag_336", "attributesToCrop_336", "cropMarker_336", "cropLength_336", "facets_336", "filter_336", "offset_336", "sort_336", "limit_336", "page_336", "hitsPerPage_336", "showMatchesPosition_336", "matchingStrategy_336");
  verifyIndexExists(336, "primaryKey_336", 336, "q_336", "attributesToRetrieve_336", "attributesToHighlight_336", "highlightPreTag_336", "highlightPostTag_336", "attributesToCrop_336", "cropMarker_336", "cropLength_336", "facets_336", "filter_336", "offset_336", "sort_336", "limit_336", "page_336", "hitsPerPage_336", "showMatchesPosition_336", "matchingStrategy_336");
});

// Story: crud:Index:nondet:existing:update
bthread("crud:Index:nondet:existing:update", function () {
  let ev = waitForAnyIndexAdded();
  let args = Object.values(ev);
  block(matchDeletedIndex.apply(null, args), function () {
    verifyIndexExists.apply(null, args);
    updateIndex.apply(null, args);
    verifyIndexExists.apply(null, args);
  });
});

// Story: monitor:Index:add
bthread("monitor:Index:add", function () {
  while (true) {
    let ev = waitForAnyIndexAdded();
    let args = Object.values(ev);
    block(matchDeletedIndex.apply(null, args), function () {
      verifyIndexExists.apply(null, args);
    });
  }
});

// Story: crud:IndexStats:read_only
bthread("crud:IndexStats:read_only", function () {
  let indexUid = 360;
  verifyIndexStatsExists(360);
});

// Story: crud:Stats:read_only
bthread("crud:Stats:read_only", function () {

  verifyStatsExists();
});

// Story: crud:Metrics:read_only
bthread("crud:Metrics:read_only", function () {

  verifyMetricsExists();
});

// Story: crud:Task:read_only
bthread("crud:Task:read_only", function () {
  let taskUid = 390;
  let total = "total_390";
  let limit = "limit_390";
  let from = "from_390";
  let taskFilterUids = 390;
  let taskFilterIndexUids = 390;
  let taskFilterStatuses = "taskFilterStatuses_390";
  let taskFilterTypes = "taskFilterTypes_390";
  let taskFilterCanceledBy = "taskFilterCanceledBy_390";
  let taskFilterBeforeEnqueuedAt = "taskFilterBeforeEnqueuedAt_390";
  let taskFilterAfterEnqueuedAt = "taskFilterAfterEnqueuedAt_390";
  let taskFilterBeforeStartedAt = "taskFilterBeforeStartedAt_390";
  let taskFilterAfterStartedAt = "taskFilterAfterStartedAt_390";
  let taskFilterBeforeFinishedAt = "taskFilterBeforeFinishedAt_390";
  let taskFilterAfterFinishedAt = "taskFilterAfterFinishedAt_390";
  verifyTaskExists(390, "total_390", "limit_390", "from_390", 390, 390, "taskFilterStatuses_390", "taskFilterTypes_390", "taskFilterCanceledBy_390", "taskFilterBeforeEnqueuedAt_390", "taskFilterAfterEnqueuedAt_390", "taskFilterBeforeStartedAt_390", "taskFilterAfterStartedAt_390", "taskFilterBeforeFinishedAt_390", "taskFilterAfterFinishedAt_390");
});

// Story: crud:Key:nondet:1:1
bthread("crud:Key:nondet:1:1", function () {
  let name = "name_400";
  let actions = "actions_400";
  let indexes = "indexes_400";
  let expiresAt = "expiresAt_400";
  let uidOrKey = 400;
  let description = "description_400";
  let limit = "limit_400";
  let offset = "offset_400";
  createKey("name_400", "actions_400", "indexes_400", "expiresAt_400", 400, "description_400", "limit_400", "offset_400");
  tryToAddExistingKey("name_400", "actions_400", "indexes_400", "expiresAt_400", 400, "description_400", "limit_400", "offset_400");
  verifyKeyExists("name_400", "actions_400", "indexes_400", "expiresAt_400", 400, "description_400", "limit_400", "offset_400");
  updateKey("name_400", "actions_400", "indexes_400", "expiresAt_400", 400, "description_400", "limit_400", "offset_400");
  deleteKey("name_400", "actions_400", "indexes_400", "expiresAt_400", 400, "description_400", "limit_400", "offset_400");
  tryToDeleteANonExistingKey("name_400", "actions_400", "indexes_400", "expiresAt_400", 400, "description_400", "limit_400", "offset_400");
  verifyKeyDoesNotExist("name_400", "actions_400", "indexes_400", "expiresAt_400", 400, "description_400", "limit_400", "offset_400");
});

// Story: crud:Key:nondet:1:2
bthread("crud:Key:nondet:1:2", function () {
  let name = "name_401";
  let actions = "actions_401";
  let indexes = "indexes_401";
  let expiresAt = "expiresAt_401";
  let uidOrKey = 401;
  let description = "description_401";
  let limit = "limit_401";
  let offset = "offset_401";
  createKey("name_401", "actions_401", "indexes_401", "expiresAt_401", 401, "description_401", "limit_401", "offset_401");
  tryToAddExistingKey("name_401", "actions_401", "indexes_401", "expiresAt_401", 401, "description_401", "limit_401", "offset_401");
  updateKey("name_401", "actions_401", "indexes_401", "expiresAt_401", 401, "description_401", "limit_401", "offset_401");
  verifyKeyExists("name_401", "actions_401", "indexes_401", "expiresAt_401", 401, "description_401", "limit_401", "offset_401");
  deleteKey("name_401", "actions_401", "indexes_401", "expiresAt_401", 401, "description_401", "limit_401", "offset_401");
  tryToDeleteANonExistingKey("name_401", "actions_401", "indexes_401", "expiresAt_401", 401, "description_401", "limit_401", "offset_401");
  verifyKeyDoesNotExist("name_401", "actions_401", "indexes_401", "expiresAt_401", 401, "description_401", "limit_401", "offset_401");
});

// Story: crud:Key:nondet:negative:dup-add
bthread("crud:Key:nondet:negative:dup-add", function () {
  let name = "name_406";
  let actions = "actions_406";
  let indexes = "indexes_406";
  let expiresAt = "expiresAt_406";
  let uidOrKey = 406;
  let description = "description_406";
  let limit = "limit_406";
  let offset = "offset_406";
  createKey("name_406", "actions_406", "indexes_406", "expiresAt_406", 406, "description_406", "limit_406", "offset_406");
  verifyKeyExists("name_406", "actions_406", "indexes_406", "expiresAt_406", 406, "description_406", "limit_406", "offset_406");
  tryToAddExistingKey("name_406", "actions_406", "indexes_406", "expiresAt_406", 406, "description_406", "limit_406", "offset_406");
  verifyKeyExists("name_406", "actions_406", "indexes_406", "expiresAt_406", 406, "description_406", "limit_406", "offset_406");
});

// Story: crud:Key:nondet:existing:update
bthread("crud:Key:nondet:existing:update", function () {
  let ev = waitForAnyKeyAdded();
  let args = Object.values(ev);
  block(matchDeletedKey.apply(null, args), function () {
    verifyKeyExists.apply(null, args);
    updateKey.apply(null, args);
    verifyKeyExists.apply(null, args);
  });
});

// Story: monitor:Key:add
bthread("monitor:Key:add", function () {
  while (true) {
    let ev = waitForAnyKeyAdded();
    let args = Object.values(ev);
    block(matchDeletedKey.apply(null, args), function () {
      verifyKeyExists.apply(null, args);
    });
  }
});

// Story: crud:Version:read_only
bthread("crud:Version:read_only", function () {

  verifyVersionExists();
});

// Story: crud:ExperimentalFeatures:read_only
bthread("crud:ExperimentalFeatures:read_only", function () {

  verifyExperimentalFeaturesExists();
});
