// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// ===== ACTIVE LIFECYCLES =====


bthread("CancelLifecycle", function () {
  const x = pick([{id: "C001"}, {id: "C002"}]);
  addCancel(x.id);
  updateCancel(x.id);
  updateCancel(x.id);
  verifyCancelExists(x.id);
  verifyCancelUpdated(x.id);
  deleteCancel(x.id);
});

bthread("DeleteLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDelete(x.id);
  updateDelete(x.id);
  updateDelete(x.id);
  verifyDeleteExists(x.id);
  verifyDeleteUpdated(x.id);
  deleteDelete(x.id);
});

bthread("DeletebatchLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDeletebatch(x.id);
  updateDeletebatch(x.id);
  updateDeletebatch(x.id);
  verifyDeletebatchExists(x.id);
  verifyDeletebatchUpdated(x.id);
  deleteDeletebatch(x.id);
});

bthread("DisplayedattributeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDisplayedattribute(x.id);
  updateDisplayedattribute(x.id);
  updateDisplayedattribute(x.id);
  verifyDisplayedattributeExists(x.id);
  verifyDisplayedattributeUpdated(x.id);
  deleteDisplayedattribute(x.id);
});

bthread("DistinctattributeLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDistinctattribute(x.id);
  updateDistinctattribute(x.id);
  updateDistinctattribute(x.id);
  verifyDistinctattributeExists(x.id);
  verifyDistinctattributeUpdated(x.id);
  deleteDistinctattribute(x.id);
});

bthread("DocumentLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDocument(x.id);
  updateDocument(x.id);
  updateDocument(x.id);
  verifyDocumentExists(x.id);
  verifyDocumentUpdated(x.id);
  deleteDocument(x.id);
});

bthread("DumpLifecycle", function () {
  const x = pick([{id: "D001"}, {id: "D002"}]);
  addDump(x.id);
  updateDump(x.id);
  updateDump(x.id);
  verifyDumpExists(x.id);
  verifyDumpUpdated(x.id);
  deleteDump(x.id);
});

bthread("ExperimentalfeatureLifecycle", function () {
  const x = pick([{id: "E001"}, {id: "E002"}]);
  addExperimentalfeature(x.id);
  updateExperimentalfeature(x.id);
  updateExperimentalfeature(x.id);
  verifyExperimentalfeatureExists(x.id);
  verifyExperimentalfeatureUpdated(x.id);
  deleteExperimentalfeature(x.id);
});

bthread("FacetingLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFaceting(x.id);
  updateFaceting(x.id);
  updateFaceting(x.id);
  verifyFacetingExists(x.id);
  verifyFacetingUpdated(x.id);
  deleteFaceting(x.id);
});

bthread("FacetsearchLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFacetsearch(x.id);
  updateFacetsearch(x.id);
  updateFacetsearch(x.id);
  verifyFacetsearchExists(x.id);
  verifyFacetsearchUpdated(x.id);
  deleteFacetsearch(x.id);
});

bthread("FetchLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFetch(x.id);
  updateFetch(x.id);
  updateFetch(x.id);
  verifyFetchExists(x.id);
  verifyFetchUpdated(x.id);
  deleteFetch(x.id);
});

bthread("FilterableattributeLifecycle", function () {
  const x = pick([{id: "F001"}, {id: "F002"}]);
  addFilterableattribute(x.id);
  updateFilterableattribute(x.id);
  updateFilterableattribute(x.id);
  verifyFilterableattributeExists(x.id);
  verifyFilterableattributeUpdated(x.id);
  deleteFilterableattribute(x.id);
});

bthread("HealthLifecycle", function () {
  const x = pick([{id: "H001"}, {id: "H002"}]);
  addHealth(x.id);
  updateHealth(x.id);
  updateHealth(x.id);
  verifyHealthExists(x.id);
  verifyHealthUpdated(x.id);
  deleteHealth(x.id);
});

bthread("IndexeLifecycle", function () {
  const x = pick([{id: "I001"}, {id: "I002"}]);
  addIndexe(x.id);
  updateIndexe(x.id);
  updateIndexe(x.id);
  verifyIndexeExists(x.id);
  verifyIndexeUpdated(x.id);
  deleteIndexe(x.id);
});

bthread("KeyLifecycle", function () {
  const x = pick([{id: "K001"}, {id: "K002"}]);
  addKey(x.id);
  updateKey(x.id);
  updateKey(x.id);
  verifyKeyExists(x.id);
  verifyKeyUpdated(x.id);
  deleteKey(x.id);
});

bthread("MetricLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMetric(x.id);
  updateMetric(x.id);
  updateMetric(x.id);
  verifyMetricExists(x.id);
  verifyMetricUpdated(x.id);
  deleteMetric(x.id);
});

bthread("MultisearchLifecycle", function () {
  const x = pick([{id: "M001"}, {id: "M002"}]);
  addMultisearch(x.id);
  updateMultisearch(x.id);
  updateMultisearch(x.id);
  verifyMultisearchExists(x.id);
  verifyMultisearchUpdated(x.id);
  deleteMultisearch(x.id);
});

bthread("PaginationLifecycle", function () {
  const x = pick([{id: "P001"}, {id: "P002"}]);
  addPagination(x.id);
  updatePagination(x.id);
  updatePagination(x.id);
  verifyPaginationExists(x.id);
  verifyPaginationUpdated(x.id);
  deletePagination(x.id);
});

bthread("RankingruleLifecycle", function () {
  const x = pick([{id: "R001"}, {id: "R002"}]);
  addRankingrule(x.id);
  updateRankingrule(x.id);
  updateRankingrule(x.id);
  verifyRankingruleExists(x.id);
  verifyRankingruleUpdated(x.id);
  deleteRankingrule(x.id);
});

bthread("SearchLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSearch(x.id);
  updateSearch(x.id);
  updateSearch(x.id);
  verifySearchExists(x.id);
  verifySearchUpdated(x.id);
  deleteSearch(x.id);
});

bthread("SearchableattributeLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSearchableattribute(x.id);
  updateSearchableattribute(x.id);
  updateSearchableattribute(x.id);
  verifySearchableattributeExists(x.id);
  verifySearchableattributeUpdated(x.id);
  deleteSearchableattribute(x.id);
});

bthread("SettingLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSetting(x.id);
  updateSetting(x.id);
  updateSetting(x.id);
  verifySettingExists(x.id);
  verifySettingUpdated(x.id);
  deleteSetting(x.id);
});

bthread("SnapshotLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSnapshot(x.id);
  updateSnapshot(x.id);
  updateSnapshot(x.id);
  verifySnapshotExists(x.id);
  verifySnapshotUpdated(x.id);
  deleteSnapshot(x.id);
});

bthread("SortableattributeLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSortableattribute(x.id);
  updateSortableattribute(x.id);
  updateSortableattribute(x.id);
  verifySortableattributeExists(x.id);
  verifySortableattributeUpdated(x.id);
  deleteSortableattribute(x.id);
});

bthread("StatLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStat(x.id);
  updateStat(x.id);
  updateStat(x.id);
  verifyStatExists(x.id);
  verifyStatUpdated(x.id);
  deleteStat(x.id);
});

bthread("StopwordLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addStopword(x.id);
  updateStopword(x.id);
  updateStopword(x.id);
  verifyStopwordExists(x.id);
  verifyStopwordUpdated(x.id);
  deleteStopword(x.id);
});

bthread("SwapindexeLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSwapindexe(x.id);
  updateSwapindexe(x.id);
  updateSwapindexe(x.id);
  verifySwapindexeExists(x.id);
  verifySwapindexeUpdated(x.id);
  deleteSwapindexe(x.id);
});

bthread("SynonymLifecycle", function () {
  const x = pick([{id: "S001"}, {id: "S002"}]);
  addSynonym(x.id);
  updateSynonym(x.id);
  updateSynonym(x.id);
  verifySynonymExists(x.id);
  verifySynonymUpdated(x.id);
  deleteSynonym(x.id);
});

bthread("TaskLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTask(x.id);
  updateTask(x.id);
  updateTask(x.id);
  verifyTaskExists(x.id);
  verifyTaskUpdated(x.id);
  deleteTask(x.id);
});

bthread("TaskuidLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTaskuid(x.id);
  updateTaskuid(x.id);
  updateTaskuid(x.id);
  verifyTaskuidExists(x.id);
  verifyTaskuidUpdated(x.id);
  deleteTaskuid(x.id);
});

bthread("TypotoleranceLifecycle", function () {
  const x = pick([{id: "T001"}, {id: "T002"}]);
  addTypotolerance(x.id);
  updateTypotolerance(x.id);
  updateTypotolerance(x.id);
  verifyTypotoleranceExists(x.id);
  verifyTypotoleranceUpdated(x.id);
  deleteTypotolerance(x.id);
});

bthread("VersionLifecycle", function () {
  const x = pick([{id: "V001"}, {id: "V002"}]);
  addVersion(x.id);
  updateVersion(x.id);
  updateVersion(x.id);
  verifyVersionExists(x.id);
  verifyVersionUpdated(x.id);
  deleteVersion(x.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Cancel create verification", function () {
  const e = waitForAnyCancelAdded();
  block(matchDeleteCancel(e.id, ANY), function () {
    verifyCancelExists(e.id);
  });
});

bthread("Cancel update verification", function () {
  const e = waitForAnyCancelUpdated();
  block(matchDeleteCancel(e.id, ANY), function () {
    verifyCancelUpdated(e.id);
  });
});

bthread("Cancel delete verification", function () {
  const e = waitForAnyCancelDeleted();
  block(matchAddCancel(e.id, ANY), function () {
    verifyCancelDoesNotExist(e.id);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  block(matchDeleteDelete(e.id, ANY), function () {
    verifyDeleteExists(e.id);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  block(matchDeleteDelete(e.id, ANY), function () {
    verifyDeleteUpdated(e.id);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  block(matchAddDelete(e.id, ANY), function () {
    verifyDeleteDoesNotExist(e.id);
  });
});

bthread("Deletebatch create verification", function () {
  const e = waitForAnyDeletebatchAdded();
  block(matchDeleteDeletebatch(e.id, ANY), function () {
    verifyDeletebatchExists(e.id);
  });
});

bthread("Deletebatch update verification", function () {
  const e = waitForAnyDeletebatchUpdated();
  block(matchDeleteDeletebatch(e.id, ANY), function () {
    verifyDeletebatchUpdated(e.id);
  });
});

bthread("Deletebatch delete verification", function () {
  const e = waitForAnyDeletebatchDeleted();
  block(matchAddDeletebatch(e.id, ANY), function () {
    verifyDeletebatchDoesNotExist(e.id);
  });
});

bthread("Displayedattribute create verification", function () {
  const e = waitForAnyDisplayedattributeAdded();
  block(matchDeleteDisplayedattribute(e.id, ANY), function () {
    verifyDisplayedattributeExists(e.id);
  });
});

bthread("Displayedattribute update verification", function () {
  const e = waitForAnyDisplayedattributeUpdated();
  block(matchDeleteDisplayedattribute(e.id, ANY), function () {
    verifyDisplayedattributeUpdated(e.id);
  });
});

bthread("Displayedattribute delete verification", function () {
  const e = waitForAnyDisplayedattributeDeleted();
  block(matchAddDisplayedattribute(e.id, ANY), function () {
    verifyDisplayedattributeDoesNotExist(e.id);
  });
});

bthread("Distinctattribute create verification", function () {
  const e = waitForAnyDistinctattributeAdded();
  block(matchDeleteDistinctattribute(e.id, ANY), function () {
    verifyDistinctattributeExists(e.id);
  });
});

bthread("Distinctattribute update verification", function () {
  const e = waitForAnyDistinctattributeUpdated();
  block(matchDeleteDistinctattribute(e.id, ANY), function () {
    verifyDistinctattributeUpdated(e.id);
  });
});

bthread("Distinctattribute delete verification", function () {
  const e = waitForAnyDistinctattributeDeleted();
  block(matchAddDistinctattribute(e.id, ANY), function () {
    verifyDistinctattributeDoesNotExist(e.id);
  });
});

bthread("Document create verification", function () {
  const e = waitForAnyDocumentAdded();
  block(matchDeleteDocument(e.id, ANY), function () {
    verifyDocumentExists(e.id);
  });
});

bthread("Document update verification", function () {
  const e = waitForAnyDocumentUpdated();
  block(matchDeleteDocument(e.id, ANY), function () {
    verifyDocumentUpdated(e.id);
  });
});

bthread("Document delete verification", function () {
  const e = waitForAnyDocumentDeleted();
  block(matchAddDocument(e.id, ANY), function () {
    verifyDocumentDoesNotExist(e.id);
  });
});

bthread("Dump create verification", function () {
  const e = waitForAnyDumpAdded();
  block(matchDeleteDump(e.id, ANY), function () {
    verifyDumpExists(e.id);
  });
});

bthread("Dump update verification", function () {
  const e = waitForAnyDumpUpdated();
  block(matchDeleteDump(e.id, ANY), function () {
    verifyDumpUpdated(e.id);
  });
});

bthread("Dump delete verification", function () {
  const e = waitForAnyDumpDeleted();
  block(matchAddDump(e.id, ANY), function () {
    verifyDumpDoesNotExist(e.id);
  });
});

bthread("Experimentalfeature create verification", function () {
  const e = waitForAnyExperimentalfeatureAdded();
  block(matchDeleteExperimentalfeature(e.id, ANY), function () {
    verifyExperimentalfeatureExists(e.id);
  });
});

bthread("Experimentalfeature update verification", function () {
  const e = waitForAnyExperimentalfeatureUpdated();
  block(matchDeleteExperimentalfeature(e.id, ANY), function () {
    verifyExperimentalfeatureUpdated(e.id);
  });
});

bthread("Experimentalfeature delete verification", function () {
  const e = waitForAnyExperimentalfeatureDeleted();
  block(matchAddExperimentalfeature(e.id, ANY), function () {
    verifyExperimentalfeatureDoesNotExist(e.id);
  });
});

bthread("Faceting create verification", function () {
  const e = waitForAnyFacetingAdded();
  block(matchDeleteFaceting(e.id, ANY), function () {
    verifyFacetingExists(e.id);
  });
});

bthread("Faceting update verification", function () {
  const e = waitForAnyFacetingUpdated();
  block(matchDeleteFaceting(e.id, ANY), function () {
    verifyFacetingUpdated(e.id);
  });
});

bthread("Faceting delete verification", function () {
  const e = waitForAnyFacetingDeleted();
  block(matchAddFaceting(e.id, ANY), function () {
    verifyFacetingDoesNotExist(e.id);
  });
});

bthread("Facetsearch create verification", function () {
  const e = waitForAnyFacetsearchAdded();
  block(matchDeleteFacetsearch(e.id, ANY), function () {
    verifyFacetsearchExists(e.id);
  });
});

bthread("Facetsearch update verification", function () {
  const e = waitForAnyFacetsearchUpdated();
  block(matchDeleteFacetsearch(e.id, ANY), function () {
    verifyFacetsearchUpdated(e.id);
  });
});

bthread("Facetsearch delete verification", function () {
  const e = waitForAnyFacetsearchDeleted();
  block(matchAddFacetsearch(e.id, ANY), function () {
    verifyFacetsearchDoesNotExist(e.id);
  });
});

bthread("Fetch create verification", function () {
  const e = waitForAnyFetchAdded();
  block(matchDeleteFetch(e.id, ANY), function () {
    verifyFetchExists(e.id);
  });
});

bthread("Fetch update verification", function () {
  const e = waitForAnyFetchUpdated();
  block(matchDeleteFetch(e.id, ANY), function () {
    verifyFetchUpdated(e.id);
  });
});

bthread("Fetch delete verification", function () {
  const e = waitForAnyFetchDeleted();
  block(matchAddFetch(e.id, ANY), function () {
    verifyFetchDoesNotExist(e.id);
  });
});

bthread("Filterableattribute create verification", function () {
  const e = waitForAnyFilterableattributeAdded();
  block(matchDeleteFilterableattribute(e.id, ANY), function () {
    verifyFilterableattributeExists(e.id);
  });
});

bthread("Filterableattribute update verification", function () {
  const e = waitForAnyFilterableattributeUpdated();
  block(matchDeleteFilterableattribute(e.id, ANY), function () {
    verifyFilterableattributeUpdated(e.id);
  });
});

bthread("Filterableattribute delete verification", function () {
  const e = waitForAnyFilterableattributeDeleted();
  block(matchAddFilterableattribute(e.id, ANY), function () {
    verifyFilterableattributeDoesNotExist(e.id);
  });
});

bthread("Health create verification", function () {
  const e = waitForAnyHealthAdded();
  block(matchDeleteHealth(e.id, ANY), function () {
    verifyHealthExists(e.id);
  });
});

bthread("Health update verification", function () {
  const e = waitForAnyHealthUpdated();
  block(matchDeleteHealth(e.id, ANY), function () {
    verifyHealthUpdated(e.id);
  });
});

bthread("Health delete verification", function () {
  const e = waitForAnyHealthDeleted();
  block(matchAddHealth(e.id, ANY), function () {
    verifyHealthDoesNotExist(e.id);
  });
});

bthread("Indexe create verification", function () {
  const e = waitForAnyIndexeAdded();
  block(matchDeleteIndexe(e.id, ANY), function () {
    verifyIndexeExists(e.id);
  });
});

bthread("Indexe update verification", function () {
  const e = waitForAnyIndexeUpdated();
  block(matchDeleteIndexe(e.id, ANY), function () {
    verifyIndexeUpdated(e.id);
  });
});

bthread("Indexe delete verification", function () {
  const e = waitForAnyIndexeDeleted();
  block(matchAddIndexe(e.id, ANY), function () {
    verifyIndexeDoesNotExist(e.id);
  });
});

bthread("Key create verification", function () {
  const e = waitForAnyKeyAdded();
  block(matchDeleteKey(e.id, ANY), function () {
    verifyKeyExists(e.id);
  });
});

bthread("Key update verification", function () {
  const e = waitForAnyKeyUpdated();
  block(matchDeleteKey(e.id, ANY), function () {
    verifyKeyUpdated(e.id);
  });
});

bthread("Key delete verification", function () {
  const e = waitForAnyKeyDeleted();
  block(matchAddKey(e.id, ANY), function () {
    verifyKeyDoesNotExist(e.id);
  });
});

bthread("Metric create verification", function () {
  const e = waitForAnyMetricAdded();
  block(matchDeleteMetric(e.id, ANY), function () {
    verifyMetricExists(e.id);
  });
});

bthread("Metric update verification", function () {
  const e = waitForAnyMetricUpdated();
  block(matchDeleteMetric(e.id, ANY), function () {
    verifyMetricUpdated(e.id);
  });
});

bthread("Metric delete verification", function () {
  const e = waitForAnyMetricDeleted();
  block(matchAddMetric(e.id, ANY), function () {
    verifyMetricDoesNotExist(e.id);
  });
});

bthread("Multisearch create verification", function () {
  const e = waitForAnyMultisearchAdded();
  block(matchDeleteMultisearch(e.id, ANY), function () {
    verifyMultisearchExists(e.id);
  });
});

bthread("Multisearch update verification", function () {
  const e = waitForAnyMultisearchUpdated();
  block(matchDeleteMultisearch(e.id, ANY), function () {
    verifyMultisearchUpdated(e.id);
  });
});

bthread("Multisearch delete verification", function () {
  const e = waitForAnyMultisearchDeleted();
  block(matchAddMultisearch(e.id, ANY), function () {
    verifyMultisearchDoesNotExist(e.id);
  });
});

bthread("Pagination create verification", function () {
  const e = waitForAnyPaginationAdded();
  block(matchDeletePagination(e.id, ANY), function () {
    verifyPaginationExists(e.id);
  });
});

bthread("Pagination update verification", function () {
  const e = waitForAnyPaginationUpdated();
  block(matchDeletePagination(e.id, ANY), function () {
    verifyPaginationUpdated(e.id);
  });
});

bthread("Pagination delete verification", function () {
  const e = waitForAnyPaginationDeleted();
  block(matchAddPagination(e.id, ANY), function () {
    verifyPaginationDoesNotExist(e.id);
  });
});

bthread("Rankingrule create verification", function () {
  const e = waitForAnyRankingruleAdded();
  block(matchDeleteRankingrule(e.id, ANY), function () {
    verifyRankingruleExists(e.id);
  });
});

bthread("Rankingrule update verification", function () {
  const e = waitForAnyRankingruleUpdated();
  block(matchDeleteRankingrule(e.id, ANY), function () {
    verifyRankingruleUpdated(e.id);
  });
});

bthread("Rankingrule delete verification", function () {
  const e = waitForAnyRankingruleDeleted();
  block(matchAddRankingrule(e.id, ANY), function () {
    verifyRankingruleDoesNotExist(e.id);
  });
});

bthread("Search create verification", function () {
  const e = waitForAnySearchAdded();
  block(matchDeleteSearch(e.id, ANY), function () {
    verifySearchExists(e.id);
  });
});

bthread("Search update verification", function () {
  const e = waitForAnySearchUpdated();
  block(matchDeleteSearch(e.id, ANY), function () {
    verifySearchUpdated(e.id);
  });
});

bthread("Search delete verification", function () {
  const e = waitForAnySearchDeleted();
  block(matchAddSearch(e.id, ANY), function () {
    verifySearchDoesNotExist(e.id);
  });
});

bthread("Searchableattribute create verification", function () {
  const e = waitForAnySearchableattributeAdded();
  block(matchDeleteSearchableattribute(e.id, ANY), function () {
    verifySearchableattributeExists(e.id);
  });
});

bthread("Searchableattribute update verification", function () {
  const e = waitForAnySearchableattributeUpdated();
  block(matchDeleteSearchableattribute(e.id, ANY), function () {
    verifySearchableattributeUpdated(e.id);
  });
});

bthread("Searchableattribute delete verification", function () {
  const e = waitForAnySearchableattributeDeleted();
  block(matchAddSearchableattribute(e.id, ANY), function () {
    verifySearchableattributeDoesNotExist(e.id);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  block(matchDeleteSetting(e.id, ANY), function () {
    verifySettingExists(e.id);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  block(matchDeleteSetting(e.id, ANY), function () {
    verifySettingUpdated(e.id);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  block(matchAddSetting(e.id, ANY), function () {
    verifySettingDoesNotExist(e.id);
  });
});

bthread("Snapshot create verification", function () {
  const e = waitForAnySnapshotAdded();
  block(matchDeleteSnapshot(e.id, ANY), function () {
    verifySnapshotExists(e.id);
  });
});

bthread("Snapshot update verification", function () {
  const e = waitForAnySnapshotUpdated();
  block(matchDeleteSnapshot(e.id, ANY), function () {
    verifySnapshotUpdated(e.id);
  });
});

bthread("Snapshot delete verification", function () {
  const e = waitForAnySnapshotDeleted();
  block(matchAddSnapshot(e.id, ANY), function () {
    verifySnapshotDoesNotExist(e.id);
  });
});

bthread("Sortableattribute create verification", function () {
  const e = waitForAnySortableattributeAdded();
  block(matchDeleteSortableattribute(e.id, ANY), function () {
    verifySortableattributeExists(e.id);
  });
});

bthread("Sortableattribute update verification", function () {
  const e = waitForAnySortableattributeUpdated();
  block(matchDeleteSortableattribute(e.id, ANY), function () {
    verifySortableattributeUpdated(e.id);
  });
});

bthread("Sortableattribute delete verification", function () {
  const e = waitForAnySortableattributeDeleted();
  block(matchAddSortableattribute(e.id, ANY), function () {
    verifySortableattributeDoesNotExist(e.id);
  });
});

bthread("Stat create verification", function () {
  const e = waitForAnyStatAdded();
  block(matchDeleteStat(e.id, ANY), function () {
    verifyStatExists(e.id);
  });
});

bthread("Stat update verification", function () {
  const e = waitForAnyStatUpdated();
  block(matchDeleteStat(e.id, ANY), function () {
    verifyStatUpdated(e.id);
  });
});

bthread("Stat delete verification", function () {
  const e = waitForAnyStatDeleted();
  block(matchAddStat(e.id, ANY), function () {
    verifyStatDoesNotExist(e.id);
  });
});

bthread("Stopword create verification", function () {
  const e = waitForAnyStopwordAdded();
  block(matchDeleteStopword(e.id, ANY), function () {
    verifyStopwordExists(e.id);
  });
});

bthread("Stopword update verification", function () {
  const e = waitForAnyStopwordUpdated();
  block(matchDeleteStopword(e.id, ANY), function () {
    verifyStopwordUpdated(e.id);
  });
});

bthread("Stopword delete verification", function () {
  const e = waitForAnyStopwordDeleted();
  block(matchAddStopword(e.id, ANY), function () {
    verifyStopwordDoesNotExist(e.id);
  });
});

bthread("Swapindexe create verification", function () {
  const e = waitForAnySwapindexeAdded();
  block(matchDeleteSwapindexe(e.id, ANY), function () {
    verifySwapindexeExists(e.id);
  });
});

bthread("Swapindexe update verification", function () {
  const e = waitForAnySwapindexeUpdated();
  block(matchDeleteSwapindexe(e.id, ANY), function () {
    verifySwapindexeUpdated(e.id);
  });
});

bthread("Swapindexe delete verification", function () {
  const e = waitForAnySwapindexeDeleted();
  block(matchAddSwapindexe(e.id, ANY), function () {
    verifySwapindexeDoesNotExist(e.id);
  });
});

bthread("Synonym create verification", function () {
  const e = waitForAnySynonymAdded();
  block(matchDeleteSynonym(e.id, ANY), function () {
    verifySynonymExists(e.id);
  });
});

bthread("Synonym update verification", function () {
  const e = waitForAnySynonymUpdated();
  block(matchDeleteSynonym(e.id, ANY), function () {
    verifySynonymUpdated(e.id);
  });
});

bthread("Synonym delete verification", function () {
  const e = waitForAnySynonymDeleted();
  block(matchAddSynonym(e.id, ANY), function () {
    verifySynonymDoesNotExist(e.id);
  });
});

bthread("Task create verification", function () {
  const e = waitForAnyTaskAdded();
  block(matchDeleteTask(e.id, ANY), function () {
    verifyTaskExists(e.id);
  });
});

bthread("Task update verification", function () {
  const e = waitForAnyTaskUpdated();
  block(matchDeleteTask(e.id, ANY), function () {
    verifyTaskUpdated(e.id);
  });
});

bthread("Task delete verification", function () {
  const e = waitForAnyTaskDeleted();
  block(matchAddTask(e.id, ANY), function () {
    verifyTaskDoesNotExist(e.id);
  });
});

bthread("Taskuid create verification", function () {
  const e = waitForAnyTaskuidAdded();
  block(matchDeleteTaskuid(e.id, ANY), function () {
    verifyTaskuidExists(e.id);
  });
});

bthread("Taskuid update verification", function () {
  const e = waitForAnyTaskuidUpdated();
  block(matchDeleteTaskuid(e.id, ANY), function () {
    verifyTaskuidUpdated(e.id);
  });
});

bthread("Taskuid delete verification", function () {
  const e = waitForAnyTaskuidDeleted();
  block(matchAddTaskuid(e.id, ANY), function () {
    verifyTaskuidDoesNotExist(e.id);
  });
});

bthread("Typotolerance create verification", function () {
  const e = waitForAnyTypotoleranceAdded();
  block(matchDeleteTypotolerance(e.id, ANY), function () {
    verifyTypotoleranceExists(e.id);
  });
});

bthread("Typotolerance update verification", function () {
  const e = waitForAnyTypotoleranceUpdated();
  block(matchDeleteTypotolerance(e.id, ANY), function () {
    verifyTypotoleranceUpdated(e.id);
  });
});

bthread("Typotolerance delete verification", function () {
  const e = waitForAnyTypotoleranceDeleted();
  block(matchAddTypotolerance(e.id, ANY), function () {
    verifyTypotoleranceDoesNotExist(e.id);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  block(matchDeleteVersion(e.id, ANY), function () {
    verifyVersionExists(e.id);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  block(matchDeleteVersion(e.id, ANY), function () {
    verifyVersionUpdated(e.id);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  block(matchAddVersion(e.id, ANY), function () {
    verifyVersionDoesNotExist(e.id);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Cancel", function () {
  const x = waitForAnyCancelAdded();
  block(matchAddCancel(x.id, ANY), function () {});
});

bthread("Guard: Unique Delete", function () {
  const x = waitForAnyDeleteAdded();
  block(matchAddDelete(x.id, ANY), function () {});
});

bthread("Guard: Unique Deletebatch", function () {
  const x = waitForAnyDeletebatchAdded();
  block(matchAddDeletebatch(x.id, ANY), function () {});
});

bthread("Guard: Unique Displayedattribute", function () {
  const x = waitForAnyDisplayedattributeAdded();
  block(matchAddDisplayedattribute(x.id, ANY), function () {});
});

bthread("Guard: Unique Distinctattribute", function () {
  const x = waitForAnyDistinctattributeAdded();
  block(matchAddDistinctattribute(x.id, ANY), function () {});
});

bthread("Guard: Unique Document", function () {
  const x = waitForAnyDocumentAdded();
  block(matchAddDocument(x.id, ANY), function () {});
});

bthread("Guard: Unique Dump", function () {
  const x = waitForAnyDumpAdded();
  block(matchAddDump(x.id, ANY), function () {});
});

bthread("Guard: Unique Experimentalfeature", function () {
  const x = waitForAnyExperimentalfeatureAdded();
  block(matchAddExperimentalfeature(x.id, ANY), function () {});
});

bthread("Guard: Unique Faceting", function () {
  const x = waitForAnyFacetingAdded();
  block(matchAddFaceting(x.id, ANY), function () {});
});

bthread("Guard: Unique Facetsearch", function () {
  const x = waitForAnyFacetsearchAdded();
  block(matchAddFacetsearch(x.id, ANY), function () {});
});

bthread("Guard: Unique Fetch", function () {
  const x = waitForAnyFetchAdded();
  block(matchAddFetch(x.id, ANY), function () {});
});

bthread("Guard: Unique Filterableattribute", function () {
  const x = waitForAnyFilterableattributeAdded();
  block(matchAddFilterableattribute(x.id, ANY), function () {});
});

bthread("Guard: Unique Health", function () {
  const x = waitForAnyHealthAdded();
  block(matchAddHealth(x.id, ANY), function () {});
});

bthread("Guard: Unique Indexe", function () {
  const x = waitForAnyIndexeAdded();
  block(matchAddIndexe(x.id, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  block(matchAddKey(x.id, ANY), function () {});
});

bthread("Guard: Unique Metric", function () {
  const x = waitForAnyMetricAdded();
  block(matchAddMetric(x.id, ANY), function () {});
});

bthread("Guard: Unique Multisearch", function () {
  const x = waitForAnyMultisearchAdded();
  block(matchAddMultisearch(x.id, ANY), function () {});
});

bthread("Guard: Unique Pagination", function () {
  const x = waitForAnyPaginationAdded();
  block(matchAddPagination(x.id, ANY), function () {});
});

bthread("Guard: Unique Rankingrule", function () {
  const x = waitForAnyRankingruleAdded();
  block(matchAddRankingrule(x.id, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  block(matchAddSearch(x.id, ANY), function () {});
});

bthread("Guard: Unique Searchableattribute", function () {
  const x = waitForAnySearchableattributeAdded();
  block(matchAddSearchableattribute(x.id, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  block(matchAddSetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Snapshot", function () {
  const x = waitForAnySnapshotAdded();
  block(matchAddSnapshot(x.id, ANY), function () {});
});

bthread("Guard: Unique Sortableattribute", function () {
  const x = waitForAnySortableattributeAdded();
  block(matchAddSortableattribute(x.id, ANY), function () {});
});

bthread("Guard: Unique Stat", function () {
  const x = waitForAnyStatAdded();
  block(matchAddStat(x.id, ANY), function () {});
});

bthread("Guard: Unique Stopword", function () {
  const x = waitForAnyStopwordAdded();
  block(matchAddStopword(x.id, ANY), function () {});
});

bthread("Guard: Unique Swapindexe", function () {
  const x = waitForAnySwapindexeAdded();
  block(matchAddSwapindexe(x.id, ANY), function () {});
});

bthread("Guard: Unique Synonym", function () {
  const x = waitForAnySynonymAdded();
  block(matchAddSynonym(x.id, ANY), function () {});
});

bthread("Guard: Unique Task", function () {
  const x = waitForAnyTaskAdded();
  block(matchAddTask(x.id, ANY), function () {});
});

bthread("Guard: Unique Taskuid", function () {
  const x = waitForAnyTaskuidAdded();
  block(matchAddTaskuid(x.id, ANY), function () {});
});

bthread("Guard: Unique Typotolerance", function () {
  const x = waitForAnyTypotoleranceAdded();
  block(matchAddTypotolerance(x.id, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  block(matchAddVersion(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====


// ===== AUTO-HAZARD (generic pack) =====

globalThis.__DSL_ENTITIES__ = ["Cancel", "Delete", "Deletebatch", "Displayedattribute", "Distinctattribute", "Document", "Dump", "Experimentalfeature", "Faceting", "Facetsearch", "Fetch", "Filterableattribute", "Health", "Indexe", "Key", "Metric", "Multisearch", "Pagination", "Rankingrule", "Search", "Searchableattribute", "Setting", "Snapshot", "Sortableattribute", "Stat", "Stopword", "Swapindexe", "Synonym", "Task", "Taskuid", "Typotolerance", "Version"];
globalThis.__GRAPH_RELATIONSHIPS__ = [];
globalThis.__DSL_DO__ = {"Cancel": {"add": "addCancel", "update": "updateCancel", "delete": "deleteCancel"}, "Delete": {"add": "addDelete", "update": "updateDelete", "delete": "deleteDelete"}, "Deletebatch": {"add": "addDeletebatch", "update": "updateDeletebatch", "delete": "deleteDeletebatch"}, "Displayedattribute": {"add": "addDisplayedattribute", "update": "updateDisplayedattribute", "delete": "deleteDisplayedattribute"}, "Distinctattribute": {"add": "addDistinctattribute", "update": "updateDistinctattribute", "delete": "deleteDistinctattribute"}, "Document": {"add": "addDocument", "update": "updateDocument", "delete": "deleteDocument"}, "Dump": {"add": "addDump", "update": "updateDump", "delete": "deleteDump"}, "Experimentalfeature": {"add": "addExperimentalfeature", "update": "updateExperimentalfeature", "delete": "deleteExperimentalfeature"}, "Faceting": {"add": "addFaceting", "update": "updateFaceting", "delete": "deleteFaceting"}, "Facetsearch": {"add": "addFacetsearch", "update": "updateFacetsearch", "delete": "deleteFacetsearch"}, "Fetch": {"add": "addFetch", "update": "updateFetch", "delete": "deleteFetch"}, "Filterableattribute": {"add": "addFilterableattribute", "update": "updateFilterableattribute", "delete": "deleteFilterableattribute"}, "Health": {"add": "addHealth", "update": "updateHealth", "delete": "deleteHealth"}, "Indexe": {"add": "addIndexe", "update": "updateIndexe", "delete": "deleteIndexe"}, "Key": {"add": "addKey", "update": "updateKey", "delete": "deleteKey"}, "Metric": {"add": "addMetric", "update": "updateMetric", "delete": "deleteMetric"}, "Multisearch": {"add": "addMultisearch", "update": "updateMultisearch", "delete": "deleteMultisearch"}, "Pagination": {"add": "addPagination", "update": "updatePagination", "delete": "deletePagination"}, "Rankingrule": {"add": "addRankingrule", "update": "updateRankingrule", "delete": "deleteRankingrule"}, "Search": {"add": "addSearch", "update": "updateSearch", "delete": "deleteSearch"}, "Searchableattribute": {"add": "addSearchableattribute", "update": "updateSearchableattribute", "delete": "deleteSearchableattribute"}, "Setting": {"add": "addSetting", "update": "updateSetting", "delete": "deleteSetting"}, "Snapshot": {"add": "addSnapshot", "update": "updateSnapshot", "delete": "deleteSnapshot"}, "Sortableattribute": {"add": "addSortableattribute", "update": "updateSortableattribute", "delete": "deleteSortableattribute"}, "Stat": {"add": "addStat", "update": "updateStat", "delete": "deleteStat"}, "Stopword": {"add": "addStopword", "update": "updateStopword", "delete": "deleteStopword"}, "Swapindexe": {"add": "addSwapindexe", "update": "updateSwapindexe", "delete": "deleteSwapindexe"}, "Synonym": {"add": "addSynonym", "update": "updateSynonym", "delete": "deleteSynonym"}, "Task": {"add": "addTask", "update": "updateTask", "delete": "deleteTask"}, "Taskuid": {"add": "addTaskuid", "update": "updateTaskuid", "delete": "deleteTaskuid"}, "Typotolerance": {"add": "addTypotolerance", "update": "updateTypotolerance", "delete": "deleteTypotolerance"}, "Version": {"add": "addVersion", "update": "updateVersion", "delete": "deleteVersion"}};
globalThis.__DSL_ARG0__ = {"Cancel": "id", "Delete": "id", "Deletebatch": "id", "Displayedattribute": "id", "Distinctattribute": "id", "Document": "id", "Dump": "id", "Experimentalfeature": "id", "Faceting": "id", "Facetsearch": "id", "Fetch": "id", "Filterableattribute": "id", "Health": "id", "Indexe": "id", "Key": "id", "Metric": "id", "Multisearch": "id", "Pagination": "id", "Rankingrule": "id", "Search": "id", "Searchableattribute": "id", "Setting": "id", "Snapshot": "id", "Sortableattribute": "id", "Stat": "id", "Stopword": "id", "Swapindexe": "id", "Synonym": "id", "Task": "id", "Taskuid": "id", "Typotolerance": "id", "Version": "id"};


// @auto-hazard-begin
(function AutoHazardPack(){
  if (typeof bp === 'undefined') return;
  if (String((bp.env && bp.env.HLS_HAZARD_PACK) || 'auto') === 'off') return;

  const R = (globalThis.read || globalThis || {});
  const on = (name, def=1) => Number((bp.env && bp.env[name]) ?? def) !== 0;
  const det = String((bp.env && bp.env.DET_MODE) || '1') === '1';
  const log = (...a)=>{ if (bp && bp.log && bp.log.info) try{ bp.log.info(a.join(' ')); }catch(_){ } };
  const FN = (k)=> typeof R[k] === 'function';
  const looksLikeIdField = (k, ent)=> /(^id$|Id$|ID$|_id$)/.test(k) || k.toLowerCase()=== (ent.toLowerCase()+'id');
  const looksLikeLimit   = (k)=> /(limit|capacity|quota|max|budget|credit)/i.test(k);
  const looksLikeAmount  = (k)=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k);
  const looksLikeStock   = (k)=> /(stock|inventory|balance|available|remaining|free)/i.test(k);

  const ENTS = globalThis.__DSL_ENTITIES__ || [];
  const RELS = globalThis.__GRAPH_RELATIONSHIPS__ || [];
  const DOFN = globalThis.__DSL_DO__ || {};
  const ARG0 = globalThis.__DSL_ARG0__ || {};

  globalThis.__hlsFocus = globalThis.__hlsFocus || {};

  function discoverReadersForEntity(ent){
    const plural = ent.endsWith('s') ? ent : ent + 's';
    const guesses = ['list'+plural, 'list'+ent, 'get'+ent, 'get'+ent+'ById', 'get'+plural, 'fetch'+ent, 'fetch'+plural];
    const readers = {};
    for (const g of guesses){
      if (FN(g)) readers[g] = R[g];
    }
    return readers;
  }

  async function sampleEntities(ent){
    const readers = discoverReadersForEntity(ent);
    const listFn = readers['list'+ent+'s'] || readers['list'+ent] || readers['get'+ent+'s'] || null;
    let items = [];
    if (listFn) { try { items = await listFn(); } catch(_) {} }
    if (!Array.isArray(items)) items = [];
    const sample = items[0] || {};
    const keys = Object.keys(sample||{});
    const idKey = keys.find(k=> looksLikeIdField(k, ent)) || 'id';
    const numericKeys = keys.filter(k=> typeof sample[k] === 'number');
    const counters = numericKeys.filter(k=> looksLikeStock(k));
    const amounts  = numericKeys.filter(k=> looksLikeAmount(k));
    const limits   = numericKeys.filter(k=> looksLikeLimit(k));
    return { items, idKey, counters, amounts, limits };
  }

  async function chooseFocusFor(ent){
    try {
      const s = await sampleEntities(ent);
      let id = s.items.length ? (det ? s.items[0][s.idKey] : s.items[Math.floor(Math.random()*s.items.length)][s.idKey]) : null;
      if (!id) {
        const waitName = 'waitForAny'+ent+'Added';
        if (typeof globalThis[waitName] === 'function') {
          const e = await globalThis[waitName]();
          if (e && e[s.idKey]) id = e[s.idKey];
          else if (e && e.id)  id = e.id;
        }
      }
      if (id !== undefined && id !== null) {
        globalThis.__hlsFocus[ent] = id;
      }
    } catch(_){}
  }

  (function wrapDo(){
    Object.keys(DOFN).forEach(ent => {
      const opmap = DOFN[ent] || {};
      ['add','update','delete'].forEach(op => {
        const fnName = opmap[op];
        if (!fnName) return;
        const orig = globalThis[fnName];
        if (typeof orig !== 'function') return;
        if (orig.__wrappedByHazard) return;
        const arg0Name = ARG0[ent] || 'id';
        globalThis[fnName] = async function(...args){
          const f = globalThis.__hlsFocus ? globalThis.__hlsFocus[ent] : undefined;
          if (f !== undefined && f !== null) {
            if (args.length === 0) args = [f];
            else args[0] = f;
          }
          return await orig.apply(this, args);
        };
        globalThis[fnName].__wrappedByHazard = true;
      });
    });
  })();

  try {
    ENTS.forEach(ent=>{
      bp.registerBThread('CB:'+ent+'Focus', function(){
        return bp.async(()=> chooseFocusFor(ent));
      });
    });
  } catch(_){}

  if (on('HLS_HAZARD_OVR',1)) {
    bp.registerBThread('HO:NonNegativeCounters', function(){
      return bp.async(async function(){
        const ents = ENTS;
        for (const ent of ents){
          const s = await sampleEntities(ent);
          const id = (globalThis.__hlsFocus && globalThis.__hlsFocus[ent]) || null;
          if (!id) continue;
          let obj=null;
          const r = discoverReadersForEntity(ent);
          for (const g of ['get'+ent,'get'+ent+'ById']) {
            if (r[g]) { try{ obj = await r[g](id); }catch(_){ } }
            if (obj) break;
          }
          if (!obj) obj = s.items.find(x=> x[s.idKey]===id) || null;
          if (!obj) continue;
          for (const k of s.counters){
            const v = Number(obj[k]);
            if (isFinite(v) && v < 0) throw new Error(`[HazardOracle] NonNegative: ${ent}.${k} became negative for ${id}`);
          }
        }
      });
    });
  }

  if (on('HLS_HAZARD_CAS',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:RefIntegrity ${parent}->${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const deps = children.filter(x=> String(x[fk]) === String(focusId));
            if (deps.length>0){
              let parentObj = null;
              const pr = discoverReadersForEntity(parent);
              for (const g of ['get'+parent,'get'+parent+'ById']) {
                if (pr[g]) { try{ parentObj = await pr[g](focusId); }catch(_){ } }
                if (parentObj) break;
              }
              if (!parentObj) throw new Error(`[HazardOracle] ReferentialIntegrity: ${parent} ${focusId} missing while ${child} dependents exist`);
            }
          });
        });
      });
    })();
  }

  if (on('HLS_HAZARD_WSK',1)) {
    (function(){
      const rels = RELS;
      rels.forEach(({parent,child})=>{
        bp.registerBThread(`HO:AggregateLimit ${parent}<-${child}`, function(){
          return bp.async(async function(){
            const pS = await sampleEntities(parent);
            const cS = await sampleEntities(child);
            const focusId = (globalThis.__hlsFocus && globalThis.__hlsFocus[parent]) || null;
            if (!focusId) return;
            let pObj=null;
            const pr = discoverReadersForEntity(parent);
            for (const g of ['get'+parent,'get'+parent+'ById']) {
              if (pr[g]) { try{ pObj = await pr[g](focusId); }catch(_){ } }
              if (pObj) break;
            }
            if (!pObj && pS.items.length) pObj = pS.items.find(x=> x[pS.idKey]===focusId) || pS.items[0];
            if (!pObj) return;
            const limitKey = pS.limits[0] || Object.keys(pObj).find(k=> /(limit|capacity|quota|max|budget|credit)/i.test(k));
            const limitVal = Number(limitKey ? pObj[limitKey] : NaN);
            if (!isFinite(limitVal)) return;
            let children = [];
            const cr = discoverReadersForEntity(child);
            const listChild = cr['list'+child+'s'] || cr['list'+child] || cr['get'+child+'s'] || null;
            if (listChild) { try{ children = await listChild(); }catch(_){ } }
            if (!Array.isArray(children)) children = [];
            const fkCandidates = Object.keys(children[0]||{}).filter(k=> /(Id$|_id$|ID$|^id$)/.test(k) && k.toLowerCase()!==('id'));
            const fk = fkCandidates[0] || (parent.toLowerCase()+'Id') || 'parentId';
            const contribKey = cS.amounts[0] || Object.keys(children[0]||{}).find(k=> /(amount|qty|quantity|units|size|weight|cost|load)/i.test(k));
            if (!contribKey) return;
            const total = children.filter(x=> String(x[fk])===String(focusId))
                                  .reduce((s,x)=> s + (Number(x[contribKey])||0), 0);
            if (total > limitVal) throw new Error(`[HazardOracle] AggregateLimit: Σ ${child}.${contribKey} (${total}) > ${parent}.${limitKey} (${limitVal}) for ${focusId}`);
          });
        });
      });
    })();
  }
})(); // AutoHazardPack
// @auto-hazard-end
