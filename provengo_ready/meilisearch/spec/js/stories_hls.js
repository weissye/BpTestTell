// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps, pkMap) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        let val = (e.data && e.data[k]) || (e.data && e.data.parameters && (e.data.parameters[k] || e.data.parameters.id));
        if (!val && pkMap && pkMap[k]) {
            let mappedKey = pkMap[k];
            val = (e.data && e.data[mappedKey]) || (e.data.parameters && e.data.parameters[mappedKey]);
        }
        if (!val && e.data) {
          for (let f in e.data) { if (f.toLowerCase().indexOf("id") > -1 || f.toLowerCase().indexOf("vin") > -1) { val = e.data[f]; break; } }
        }
        if (val) {
            captured[k] = val;
            delete deps[k];
        }
      }
    }
  }
  return captured;
}

// Story: crud:Settings:read_only
bthread("crud:Settings:read_only", function () {

  verifySettingsExists(indexUid);
});

// Story: crud:Synonyms:read_only
bthread("crud:Synonyms:read_only", function () {

  verifySynonymsExists(indexUid);
});

// Story: crud:SortableAttributes:read_only
bthread("crud:SortableAttributes:read_only", function () {

  verifySortableAttributesExists(indexUid);
});

// Story: crud:StopWords:read_only
bthread("crud:StopWords:read_only", function () {

  verifyStopWordsExists(indexUid);
});

// Story: crud:RankingRules:read_only
bthread("crud:RankingRules:read_only", function () {

  verifyRankingRulesExists(indexUid);
});

// Story: crud:TypoTolerance:read_only
bthread("crud:TypoTolerance:read_only", function () {

  verifyTypoToleranceExists(indexUid);
});

// Story: crud:Pagination:read_only
bthread("crud:Pagination:read_only", function () {

  verifyPaginationExists(indexUid);
});

// Story: crud:Faceting:read_only
bthread("crud:Faceting:read_only", function () {

  verifyFacetingExists(indexUid);
});

// Story: crud:FilterableAttributes:read_only
bthread("crud:FilterableAttributes:read_only", function () {

  verifyFilterableAttributesExists(indexUid);
});

// Story: crud:DistinctAttribute:read_only
bthread("crud:DistinctAttribute:read_only", function () {

  verifyDistinctAttributeExists(indexUid);
});

// Story: crud:SearchableAttributes:read_only
bthread("crud:SearchableAttributes:read_only", function () {

  verifySearchableAttributesExists(indexUid);
});

// Story: crud:DisplayedAttributes:read_only
bthread("crud:DisplayedAttributes:read_only", function () {

  verifyDisplayedAttributesExists(indexUid);
});

// Story: crud:Document:nondet:1:1
bthread("crud:Document:nondet:1:1", function () {
  let documentId = 320;
  // Dependency Barrier
  let deps = {};
  deps["indexUid"] = matchAnyIndexAdded();
  let pkMap = {"indexUid": "indexUid"};
  let captured = resolveDependencies(deps, pkMap);
  indexUid = captured["indexUid"];
  createDocument(documentId, indexUid);
  // waitForDocumentAdded(documentId, indexUid);
  tryToAddExistingDocument(documentId, indexUid);
  verifyDocumentExists(documentId, indexUid);
  upsertDocument(documentId, indexUid);
  deleteDocument(documentId, indexUid);
  tryToDeleteANonExistingDocument(documentId, indexUid);
  verifyDocumentDoesNotExist(documentId, indexUid);
});

// Story: crud:Document:nondet:1:2
bthread("crud:Document:nondet:1:2", function () {
  let documentId = 321;
  // Dependency Barrier
  let deps = {};
  deps["indexUid"] = matchAnyIndexAdded();
  let pkMap = {"indexUid": "indexUid"};
  let captured = resolveDependencies(deps, pkMap);
  indexUid = captured["indexUid"];
  createDocument(documentId, indexUid);
  // waitForDocumentAdded(documentId, indexUid);
  tryToAddExistingDocument(documentId, indexUid);
  upsertDocument(documentId, indexUid);
  verifyDocumentExists(documentId, indexUid);
  deleteDocument(documentId, indexUid);
  tryToDeleteANonExistingDocument(documentId, indexUid);
  verifyDocumentDoesNotExist(documentId, indexUid);
});

// Story: crud:Document:nondet:negative:dup-add
bthread("crud:Document:nondet:negative:dup-add", function () {
  let documentId = 326;
  // Dependency Barrier
  let deps = {};
  deps["indexUid"] = matchAnyIndexAdded();
  let pkMap = {"indexUid": "indexUid"};
  let captured = resolveDependencies(deps, pkMap);
  indexUid = captured["indexUid"];
  createDocument(documentId, indexUid);
  // waitForDocumentAdded(documentId, indexUid);
  verifyDocumentExists(documentId, indexUid);
  tryToAddExistingDocument(documentId, indexUid);
  verifyDocumentExists(documentId, indexUid);
});

// Story: crud:Index:nondet:1:1
bthread("crud:Index:nondet:1:1", function () {
  let indexUid = 330;
  let primaryKey = "primaryKey_330";
  let uid = 330;
  createIndex(indexUid, primaryKey, uid);
  // waitForIndexAdded(indexUid, primaryKey, uid);
  tryToAddExistingIndex(indexUid, primaryKey, uid);
  verifyIndexExists(indexUid, primaryKey, uid);
  updateIndex(indexUid, primaryKey, uid);
  deleteIndex(indexUid, primaryKey, uid);
  tryToDeleteANonExistingIndex(indexUid, primaryKey, uid);
  verifyIndexDoesNotExist(indexUid, primaryKey, uid);
});

// Story: crud:Index:nondet:1:2
bthread("crud:Index:nondet:1:2", function () {
  let indexUid = 331;
  let primaryKey = "primaryKey_331";
  let uid = 331;
  createIndex(indexUid, primaryKey, uid);
  // waitForIndexAdded(indexUid, primaryKey, uid);
  tryToAddExistingIndex(indexUid, primaryKey, uid);
  updateIndex(indexUid, primaryKey, uid);
  verifyIndexExists(indexUid, primaryKey, uid);
  deleteIndex(indexUid, primaryKey, uid);
  tryToDeleteANonExistingIndex(indexUid, primaryKey, uid);
  verifyIndexDoesNotExist(indexUid, primaryKey, uid);
});

// Story: crud:Index:nondet:negative:dup-add
bthread("crud:Index:nondet:negative:dup-add", function () {
  let indexUid = 336;
  let primaryKey = "primaryKey_336";
  let uid = 336;
  createIndex(indexUid, primaryKey, uid);
  // waitForIndexAdded(indexUid, primaryKey, uid);
  verifyIndexExists(indexUid, primaryKey, uid);
  tryToAddExistingIndex(indexUid, primaryKey, uid);
  verifyIndexExists(indexUid, primaryKey, uid);
});

// Story: crud:IndexStats:read_only
bthread("crud:IndexStats:read_only", function () {

  verifyIndexStatsExists(indexUid);
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
  let from = "from_370";
  let limit = "limit_370";
  let taskFilterAfterEnqueuedAt = "taskFilterAfterEnqueuedAt_370";
  let taskFilterAfterFinishedAt = "taskFilterAfterFinishedAt_370";
  let taskFilterAfterStartedAt = "taskFilterAfterStartedAt_370";
  let taskFilterBeforeEnqueuedAt = "taskFilterBeforeEnqueuedAt_370";
  let taskFilterBeforeFinishedAt = "taskFilterBeforeFinishedAt_370";
  let taskFilterBeforeStartedAt = "taskFilterBeforeStartedAt_370";
  let taskFilterCanceledBy = "taskFilterCanceledBy_370";
  let taskFilterStatuses = "taskFilterStatuses_370";
  let taskFilterTypes = "taskFilterTypes_370";
  let taskFilterUids = "taskFilterUids_370";
  let taskUid = 370;
  let total = "total_370";
  verifyTaskExists(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total);
});

// Story: crud:Key:nondet:1:1
bthread("crud:Key:nondet:1:1", function () {
  let actions = "actions_380";
  let createdAt = "createdAt_380";
  let description = "description_380";
  let expiresAt = "expiresAt_380";
  let indexes = "indexes_380";
  let key = "key_380";
  let limit = "limit_380";
  let name = "name_380";
  let offset = "offset_380";
  let uid = 380;
  let uidOrKey = 380;
  let updatedAt = "updatedAt_380";
  createKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  // waitForKeyAdded(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  tryToAddExistingKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  verifyKeyExists(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  updateKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  deleteKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  tryToDeleteANonExistingKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  verifyKeyDoesNotExist(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
});

// Story: crud:Key:nondet:1:2
bthread("crud:Key:nondet:1:2", function () {
  let actions = "actions_381";
  let createdAt = "createdAt_381";
  let description = "description_381";
  let expiresAt = "expiresAt_381";
  let indexes = "indexes_381";
  let key = "key_381";
  let limit = "limit_381";
  let name = "name_381";
  let offset = "offset_381";
  let uid = 381;
  let uidOrKey = 381;
  let updatedAt = "updatedAt_381";
  createKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  // waitForKeyAdded(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  tryToAddExistingKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  updateKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  verifyKeyExists(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  deleteKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  tryToDeleteANonExistingKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  verifyKeyDoesNotExist(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
});

// Story: crud:Key:nondet:negative:dup-add
bthread("crud:Key:nondet:negative:dup-add", function () {
  let actions = "actions_386";
  let createdAt = "createdAt_386";
  let description = "description_386";
  let expiresAt = "expiresAt_386";
  let indexes = "indexes_386";
  let key = "key_386";
  let limit = "limit_386";
  let name = "name_386";
  let offset = "offset_386";
  let uid = 386;
  let uidOrKey = 386;
  let updatedAt = "updatedAt_386";
  createKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  // waitForKeyAdded(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  verifyKeyExists(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  tryToAddExistingKey(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
  verifyKeyExists(actions, createdAt, description, expiresAt, indexes, key, limit, name, offset, uid, uidOrKey, updatedAt);
});

// Story: crud:Version:read_only
bthread("crud:Version:read_only", function () {

  verifyVersionExists();
});

// Story: crud:ExperimentalFeatures:read_only
bthread("crud:ExperimentalFeatures:read_only", function () {

  verifyExperimentalFeaturesExists();
});
