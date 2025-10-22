// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls
// ====================================================================

var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');

// --- pick() shim: prefer BPjs nondet, else random fallback ---
if (typeof pick === 'undefined') {
  function pick(options) {
    if (typeof bp !== 'undefined' && typeof bp.pickFrom === 'function') {
      return bp.pickFrom(options); // nondeterministic exploration
    }
    // fallback for plain JS execution
    return options[Math.floor(Math.random() * options.length)];
  }
}

// --- _pk(e,key): robust primary-key extractor for wait/match events ---
function _pk(e, key) {
  if (e == null) return undefined;
  if (typeof e === 'object') {
    if (Object.prototype.hasOwnProperty.call(e, key)) return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key)) return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key)) return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id')) return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc')) return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
  if (typeof v === 'object') {
    if ('id' in v) return String(v.id);
    if ('ndc' in v) return String(v.ndc);
    const ks = Object.keys(v);
    if (ks.length) return String(v[ks[0]]);
    return '1001';
  }
  return String(v);
}

// ===== ACTIVE LIFECYCLES =====


bthread("CancelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCancel(x.id);
  const e_add = waitForCancelAdded(id);
  block(matchDeleteCancel(id), function () {
    verifyCancelExists(id);
  });
  updateCancel(x.id);
  updateCancel(x.id);
  const e_upd = waitForCancelUpdated(id);
  block(matchDeleteCancel(id), function () {
    verifyCancelUpdated(id);
  });
  deleteCancel(x.id);
  const e_del = waitForCancelDeleted(id);
  block(matchAddCancel(id), function () {
    verifyCancelDoesNotExist(id);
  });
});

bthread("DeleteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDelete(x.id);
  const e_add = waitForDeleteAdded(id);
  block(matchDeleteDelete(id), function () {
    verifyDeleteExists(id);
  });
  updateDelete(x.id);
  updateDelete(x.id);
  const e_upd = waitForDeleteUpdated(id);
  block(matchDeleteDelete(id), function () {
    verifyDeleteUpdated(id);
  });
  deleteDelete(x.id);
  const e_del = waitForDeleteDeleted(id);
  block(matchAddDelete(id), function () {
    verifyDeleteDoesNotExist(id);
  });
});

bthread("DeletebatchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeletebatch(x.id);
  const e_add = waitForDeletebatchAdded(id);
  block(matchDeleteDeletebatch(id), function () {
    verifyDeletebatchExists(id);
  });
  updateDeletebatch(x.id);
  updateDeletebatch(x.id);
  const e_upd = waitForDeletebatchUpdated(id);
  block(matchDeleteDeletebatch(id), function () {
    verifyDeletebatchUpdated(id);
  });
  deleteDeletebatch(x.id);
  const e_del = waitForDeletebatchDeleted(id);
  block(matchAddDeletebatch(id), function () {
    verifyDeletebatchDoesNotExist(id);
  });
});

bthread("DisplayedattributeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDisplayedattribute(x.id);
  const e_add = waitForDisplayedattributeAdded(id);
  block(matchDeleteDisplayedattribute(id), function () {
    verifyDisplayedattributeExists(id);
  });
  updateDisplayedattribute(x.id);
  updateDisplayedattribute(x.id);
  const e_upd = waitForDisplayedattributeUpdated(id);
  block(matchDeleteDisplayedattribute(id), function () {
    verifyDisplayedattributeUpdated(id);
  });
  deleteDisplayedattribute(x.id);
  const e_del = waitForDisplayedattributeDeleted(id);
  block(matchAddDisplayedattribute(id), function () {
    verifyDisplayedattributeDoesNotExist(id);
  });
});

bthread("DistinctattributeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDistinctattribute(x.id);
  const e_add = waitForDistinctattributeAdded(id);
  block(matchDeleteDistinctattribute(id), function () {
    verifyDistinctattributeExists(id);
  });
  updateDistinctattribute(x.id);
  updateDistinctattribute(x.id);
  const e_upd = waitForDistinctattributeUpdated(id);
  block(matchDeleteDistinctattribute(id), function () {
    verifyDistinctattributeUpdated(id);
  });
  deleteDistinctattribute(x.id);
  const e_del = waitForDistinctattributeDeleted(id);
  block(matchAddDistinctattribute(id), function () {
    verifyDistinctattributeDoesNotExist(id);
  });
});

bthread("DocumentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDocument(x.id);
  const e_add = waitForDocumentAdded(id);
  block(matchDeleteDocument(id), function () {
    verifyDocumentExists(id);
  });
  updateDocument(x.id);
  updateDocument(x.id);
  const e_upd = waitForDocumentUpdated(id);
  block(matchDeleteDocument(id), function () {
    verifyDocumentUpdated(id);
  });
  deleteDocument(x.id);
  const e_del = waitForDocumentDeleted(id);
  block(matchAddDocument(id), function () {
    verifyDocumentDoesNotExist(id);
  });
});

bthread("DumpLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDump(x.id);
  const e_add = waitForDumpAdded(id);
  block(matchDeleteDump(id), function () {
    verifyDumpExists(id);
  });
  updateDump(x.id);
  updateDump(x.id);
  const e_upd = waitForDumpUpdated(id);
  block(matchDeleteDump(id), function () {
    verifyDumpUpdated(id);
  });
  deleteDump(x.id);
  const e_del = waitForDumpDeleted(id);
  block(matchAddDump(id), function () {
    verifyDumpDoesNotExist(id);
  });
});

bthread("ExperimentalfeatureLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExperimentalfeature(x.id);
  const e_add = waitForExperimentalfeatureAdded(id);
  block(matchDeleteExperimentalfeature(id), function () {
    verifyExperimentalfeatureExists(id);
  });
  updateExperimentalfeature(x.id);
  updateExperimentalfeature(x.id);
  const e_upd = waitForExperimentalfeatureUpdated(id);
  block(matchDeleteExperimentalfeature(id), function () {
    verifyExperimentalfeatureUpdated(id);
  });
  deleteExperimentalfeature(x.id);
  const e_del = waitForExperimentalfeatureDeleted(id);
  block(matchAddExperimentalfeature(id), function () {
    verifyExperimentalfeatureDoesNotExist(id);
  });
});

bthread("FacetingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFaceting(x.id);
  const e_add = waitForFacetingAdded(id);
  block(matchDeleteFaceting(id), function () {
    verifyFacetingExists(id);
  });
  updateFaceting(x.id);
  updateFaceting(x.id);
  const e_upd = waitForFacetingUpdated(id);
  block(matchDeleteFaceting(id), function () {
    verifyFacetingUpdated(id);
  });
  deleteFaceting(x.id);
  const e_del = waitForFacetingDeleted(id);
  block(matchAddFaceting(id), function () {
    verifyFacetingDoesNotExist(id);
  });
});

bthread("FacetsearchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFacetsearch(x.id);
  const e_add = waitForFacetsearchAdded(id);
  block(matchDeleteFacetsearch(id), function () {
    verifyFacetsearchExists(id);
  });
  updateFacetsearch(x.id);
  updateFacetsearch(x.id);
  const e_upd = waitForFacetsearchUpdated(id);
  block(matchDeleteFacetsearch(id), function () {
    verifyFacetsearchUpdated(id);
  });
  deleteFacetsearch(x.id);
  const e_del = waitForFacetsearchDeleted(id);
  block(matchAddFacetsearch(id), function () {
    verifyFacetsearchDoesNotExist(id);
  });
});

bthread("FetchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFetch(x.id);
  const e_add = waitForFetchAdded(id);
  block(matchDeleteFetch(id), function () {
    verifyFetchExists(id);
  });
  updateFetch(x.id);
  updateFetch(x.id);
  const e_upd = waitForFetchUpdated(id);
  block(matchDeleteFetch(id), function () {
    verifyFetchUpdated(id);
  });
  deleteFetch(x.id);
  const e_del = waitForFetchDeleted(id);
  block(matchAddFetch(id), function () {
    verifyFetchDoesNotExist(id);
  });
});

bthread("FilterableattributeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFilterableattribute(x.id);
  const e_add = waitForFilterableattributeAdded(id);
  block(matchDeleteFilterableattribute(id), function () {
    verifyFilterableattributeExists(id);
  });
  updateFilterableattribute(x.id);
  updateFilterableattribute(x.id);
  const e_upd = waitForFilterableattributeUpdated(id);
  block(matchDeleteFilterableattribute(id), function () {
    verifyFilterableattributeUpdated(id);
  });
  deleteFilterableattribute(x.id);
  const e_del = waitForFilterableattributeDeleted(id);
  block(matchAddFilterableattribute(id), function () {
    verifyFilterableattributeDoesNotExist(id);
  });
});

bthread("HealthLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHealth(x.id);
  const e_add = waitForHealthAdded(id);
  block(matchDeleteHealth(id), function () {
    verifyHealthExists(id);
  });
  updateHealth(x.id);
  updateHealth(x.id);
  const e_upd = waitForHealthUpdated(id);
  block(matchDeleteHealth(id), function () {
    verifyHealthUpdated(id);
  });
  deleteHealth(x.id);
  const e_del = waitForHealthDeleted(id);
  block(matchAddHealth(id), function () {
    verifyHealthDoesNotExist(id);
  });
});

bthread("IndexeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIndexe(x.id);
  const e_add = waitForIndexeAdded(id);
  block(matchDeleteIndexe(id), function () {
    verifyIndexeExists(id);
  });
  updateIndexe(x.id);
  updateIndexe(x.id);
  const e_upd = waitForIndexeUpdated(id);
  block(matchDeleteIndexe(id), function () {
    verifyIndexeUpdated(id);
  });
  deleteIndexe(x.id);
  const e_del = waitForIndexeDeleted(id);
  block(matchAddIndexe(id), function () {
    verifyIndexeDoesNotExist(id);
  });
});

bthread("KeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addKey(x.id);
  const e_add = waitForKeyAdded(id);
  block(matchDeleteKey(id), function () {
    verifyKeyExists(id);
  });
  updateKey(x.id);
  updateKey(x.id);
  const e_upd = waitForKeyUpdated(id);
  block(matchDeleteKey(id), function () {
    verifyKeyUpdated(id);
  });
  deleteKey(x.id);
  const e_del = waitForKeyDeleted(id);
  block(matchAddKey(id), function () {
    verifyKeyDoesNotExist(id);
  });
});

bthread("MetricLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMetric(x.id);
  const e_add = waitForMetricAdded(id);
  block(matchDeleteMetric(id), function () {
    verifyMetricExists(id);
  });
  updateMetric(x.id);
  updateMetric(x.id);
  const e_upd = waitForMetricUpdated(id);
  block(matchDeleteMetric(id), function () {
    verifyMetricUpdated(id);
  });
  deleteMetric(x.id);
  const e_del = waitForMetricDeleted(id);
  block(matchAddMetric(id), function () {
    verifyMetricDoesNotExist(id);
  });
});

bthread("MultisearchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMultisearch(x.id);
  const e_add = waitForMultisearchAdded(id);
  block(matchDeleteMultisearch(id), function () {
    verifyMultisearchExists(id);
  });
  updateMultisearch(x.id);
  updateMultisearch(x.id);
  const e_upd = waitForMultisearchUpdated(id);
  block(matchDeleteMultisearch(id), function () {
    verifyMultisearchUpdated(id);
  });
  deleteMultisearch(x.id);
  const e_del = waitForMultisearchDeleted(id);
  block(matchAddMultisearch(id), function () {
    verifyMultisearchDoesNotExist(id);
  });
});

bthread("PaginationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPagination(x.id);
  const e_add = waitForPaginationAdded(id);
  block(matchDeletePagination(id), function () {
    verifyPaginationExists(id);
  });
  updatePagination(x.id);
  updatePagination(x.id);
  const e_upd = waitForPaginationUpdated(id);
  block(matchDeletePagination(id), function () {
    verifyPaginationUpdated(id);
  });
  deletePagination(x.id);
  const e_del = waitForPaginationDeleted(id);
  block(matchAddPagination(id), function () {
    verifyPaginationDoesNotExist(id);
  });
});

bthread("RankingruleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRankingrule(x.id);
  const e_add = waitForRankingruleAdded(id);
  block(matchDeleteRankingrule(id), function () {
    verifyRankingruleExists(id);
  });
  updateRankingrule(x.id);
  updateRankingrule(x.id);
  const e_upd = waitForRankingruleUpdated(id);
  block(matchDeleteRankingrule(id), function () {
    verifyRankingruleUpdated(id);
  });
  deleteRankingrule(x.id);
  const e_del = waitForRankingruleDeleted(id);
  block(matchAddRankingrule(id), function () {
    verifyRankingruleDoesNotExist(id);
  });
});

bthread("SearchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSearch(x.id);
  const e_add = waitForSearchAdded(id);
  block(matchDeleteSearch(id), function () {
    verifySearchExists(id);
  });
  updateSearch(x.id);
  updateSearch(x.id);
  const e_upd = waitForSearchUpdated(id);
  block(matchDeleteSearch(id), function () {
    verifySearchUpdated(id);
  });
  deleteSearch(x.id);
  const e_del = waitForSearchDeleted(id);
  block(matchAddSearch(id), function () {
    verifySearchDoesNotExist(id);
  });
});

bthread("SearchableattributeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSearchableattribute(x.id);
  const e_add = waitForSearchableattributeAdded(id);
  block(matchDeleteSearchableattribute(id), function () {
    verifySearchableattributeExists(id);
  });
  updateSearchableattribute(x.id);
  updateSearchableattribute(x.id);
  const e_upd = waitForSearchableattributeUpdated(id);
  block(matchDeleteSearchableattribute(id), function () {
    verifySearchableattributeUpdated(id);
  });
  deleteSearchableattribute(x.id);
  const e_del = waitForSearchableattributeDeleted(id);
  block(matchAddSearchableattribute(id), function () {
    verifySearchableattributeDoesNotExist(id);
  });
});

bthread("SettingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSetting(x.id);
  const e_add = waitForSettingAdded(id);
  block(matchDeleteSetting(id), function () {
    verifySettingExists(id);
  });
  updateSetting(x.id);
  updateSetting(x.id);
  const e_upd = waitForSettingUpdated(id);
  block(matchDeleteSetting(id), function () {
    verifySettingUpdated(id);
  });
  deleteSetting(x.id);
  const e_del = waitForSettingDeleted(id);
  block(matchAddSetting(id), function () {
    verifySettingDoesNotExist(id);
  });
});

bthread("SnapshotLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSnapshot(x.id);
  const e_add = waitForSnapshotAdded(id);
  block(matchDeleteSnapshot(id), function () {
    verifySnapshotExists(id);
  });
  updateSnapshot(x.id);
  updateSnapshot(x.id);
  const e_upd = waitForSnapshotUpdated(id);
  block(matchDeleteSnapshot(id), function () {
    verifySnapshotUpdated(id);
  });
  deleteSnapshot(x.id);
  const e_del = waitForSnapshotDeleted(id);
  block(matchAddSnapshot(id), function () {
    verifySnapshotDoesNotExist(id);
  });
});

bthread("SortableattributeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSortableattribute(x.id);
  const e_add = waitForSortableattributeAdded(id);
  block(matchDeleteSortableattribute(id), function () {
    verifySortableattributeExists(id);
  });
  updateSortableattribute(x.id);
  updateSortableattribute(x.id);
  const e_upd = waitForSortableattributeUpdated(id);
  block(matchDeleteSortableattribute(id), function () {
    verifySortableattributeUpdated(id);
  });
  deleteSortableattribute(x.id);
  const e_del = waitForSortableattributeDeleted(id);
  block(matchAddSortableattribute(id), function () {
    verifySortableattributeDoesNotExist(id);
  });
});

bthread("StatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStat(x.id);
  const e_add = waitForStatAdded(id);
  block(matchDeleteStat(id), function () {
    verifyStatExists(id);
  });
  updateStat(x.id);
  updateStat(x.id);
  const e_upd = waitForStatUpdated(id);
  block(matchDeleteStat(id), function () {
    verifyStatUpdated(id);
  });
  deleteStat(x.id);
  const e_del = waitForStatDeleted(id);
  block(matchAddStat(id), function () {
    verifyStatDoesNotExist(id);
  });
});

bthread("StopwordLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStopword(x.id);
  const e_add = waitForStopwordAdded(id);
  block(matchDeleteStopword(id), function () {
    verifyStopwordExists(id);
  });
  updateStopword(x.id);
  updateStopword(x.id);
  const e_upd = waitForStopwordUpdated(id);
  block(matchDeleteStopword(id), function () {
    verifyStopwordUpdated(id);
  });
  deleteStopword(x.id);
  const e_del = waitForStopwordDeleted(id);
  block(matchAddStopword(id), function () {
    verifyStopwordDoesNotExist(id);
  });
});

bthread("SwapindexeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSwapindexe(x.id);
  const e_add = waitForSwapindexeAdded(id);
  block(matchDeleteSwapindexe(id), function () {
    verifySwapindexeExists(id);
  });
  updateSwapindexe(x.id);
  updateSwapindexe(x.id);
  const e_upd = waitForSwapindexeUpdated(id);
  block(matchDeleteSwapindexe(id), function () {
    verifySwapindexeUpdated(id);
  });
  deleteSwapindexe(x.id);
  const e_del = waitForSwapindexeDeleted(id);
  block(matchAddSwapindexe(id), function () {
    verifySwapindexeDoesNotExist(id);
  });
});

bthread("SynonymLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSynonym(x.id);
  const e_add = waitForSynonymAdded(id);
  block(matchDeleteSynonym(id), function () {
    verifySynonymExists(id);
  });
  updateSynonym(x.id);
  updateSynonym(x.id);
  const e_upd = waitForSynonymUpdated(id);
  block(matchDeleteSynonym(id), function () {
    verifySynonymUpdated(id);
  });
  deleteSynonym(x.id);
  const e_del = waitForSynonymDeleted(id);
  block(matchAddSynonym(id), function () {
    verifySynonymDoesNotExist(id);
  });
});

bthread("TaskLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTask(x.id);
  const e_add = waitForTaskAdded(id);
  block(matchDeleteTask(id), function () {
    verifyTaskExists(id);
  });
  updateTask(x.id);
  updateTask(x.id);
  const e_upd = waitForTaskUpdated(id);
  block(matchDeleteTask(id), function () {
    verifyTaskUpdated(id);
  });
  deleteTask(x.id);
  const e_del = waitForTaskDeleted(id);
  block(matchAddTask(id), function () {
    verifyTaskDoesNotExist(id);
  });
});

bthread("TaskuidLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTaskuid(x.id);
  const e_add = waitForTaskuidAdded(id);
  block(matchDeleteTaskuid(id), function () {
    verifyTaskuidExists(id);
  });
  updateTaskuid(x.id);
  updateTaskuid(x.id);
  const e_upd = waitForTaskuidUpdated(id);
  block(matchDeleteTaskuid(id), function () {
    verifyTaskuidUpdated(id);
  });
  deleteTaskuid(x.id);
  const e_del = waitForTaskuidDeleted(id);
  block(matchAddTaskuid(id), function () {
    verifyTaskuidDoesNotExist(id);
  });
});

bthread("TypotoleranceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTypotolerance(x.id);
  const e_add = waitForTypotoleranceAdded(id);
  block(matchDeleteTypotolerance(id), function () {
    verifyTypotoleranceExists(id);
  });
  updateTypotolerance(x.id);
  updateTypotolerance(x.id);
  const e_upd = waitForTypotoleranceUpdated(id);
  block(matchDeleteTypotolerance(id), function () {
    verifyTypotoleranceUpdated(id);
  });
  deleteTypotolerance(x.id);
  const e_del = waitForTypotoleranceDeleted(id);
  block(matchAddTypotolerance(id), function () {
    verifyTypotoleranceDoesNotExist(id);
  });
});

bthread("VersionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVersion(x.id);
  const e_add = waitForVersionAdded(id);
  block(matchDeleteVersion(id), function () {
    verifyVersionExists(id);
  });
  updateVersion(x.id);
  updateVersion(x.id);
  const e_upd = waitForVersionUpdated(id);
  block(matchDeleteVersion(id), function () {
    verifyVersionUpdated(id);
  });
  deleteVersion(x.id);
  const e_del = waitForVersionDeleted(id);
  block(matchAddVersion(id), function () {
    verifyVersionDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Cancel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCancel(x.id);
  for (var i=0; i<steps; i++) {
    updateCancel(x.id);
  }
  if (pick([true,false])) { deleteCancel(x.id); }
  verifyCancelExists(x.id);
  verifyCancelUpdated(x.id);
});

bthread("Cancel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCancel(a.id);
  block(matchAddCancel(a.id, ANY), function () {});
  addCancel(b.id);
});

bthread("Delete nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDelete(x.id);
  for (var i=0; i<steps; i++) {
    updateDelete(x.id);
  }
  if (pick([true,false])) { deleteDelete(x.id); }
  verifyDeleteExists(x.id);
  verifyDeleteUpdated(x.id);
});

bthread("Delete nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDelete(a.id);
  block(matchAddDelete(a.id, ANY), function () {});
  addDelete(b.id);
});

bthread("Deletebatch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeletebatch(x.id);
  for (var i=0; i<steps; i++) {
    updateDeletebatch(x.id);
  }
  if (pick([true,false])) { deleteDeletebatch(x.id); }
  verifyDeletebatchExists(x.id);
  verifyDeletebatchUpdated(x.id);
});

bthread("Deletebatch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDeletebatch(a.id);
  block(matchAddDeletebatch(a.id, ANY), function () {});
  addDeletebatch(b.id);
});

bthread("Displayedattribute nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDisplayedattribute(x.id);
  for (var i=0; i<steps; i++) {
    updateDisplayedattribute(x.id);
  }
  if (pick([true,false])) { deleteDisplayedattribute(x.id); }
  verifyDisplayedattributeExists(x.id);
  verifyDisplayedattributeUpdated(x.id);
});

bthread("Displayedattribute nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDisplayedattribute(a.id);
  block(matchAddDisplayedattribute(a.id, ANY), function () {});
  addDisplayedattribute(b.id);
});

bthread("Distinctattribute nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDistinctattribute(x.id);
  for (var i=0; i<steps; i++) {
    updateDistinctattribute(x.id);
  }
  if (pick([true,false])) { deleteDistinctattribute(x.id); }
  verifyDistinctattributeExists(x.id);
  verifyDistinctattributeUpdated(x.id);
});

bthread("Distinctattribute nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDistinctattribute(a.id);
  block(matchAddDistinctattribute(a.id, ANY), function () {});
  addDistinctattribute(b.id);
});

bthread("Document nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDocument(x.id);
  for (var i=0; i<steps; i++) {
    updateDocument(x.id);
  }
  if (pick([true,false])) { deleteDocument(x.id); }
  verifyDocumentExists(x.id);
  verifyDocumentUpdated(x.id);
});

bthread("Document nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDocument(a.id);
  block(matchAddDocument(a.id, ANY), function () {});
  addDocument(b.id);
});

bthread("Dump nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDump(x.id);
  for (var i=0; i<steps; i++) {
    updateDump(x.id);
  }
  if (pick([true,false])) { deleteDump(x.id); }
  verifyDumpExists(x.id);
  verifyDumpUpdated(x.id);
});

bthread("Dump nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDump(a.id);
  block(matchAddDump(a.id, ANY), function () {});
  addDump(b.id);
});

bthread("Experimentalfeature nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addExperimentalfeature(x.id);
  for (var i=0; i<steps; i++) {
    updateExperimentalfeature(x.id);
  }
  if (pick([true,false])) { deleteExperimentalfeature(x.id); }
  verifyExperimentalfeatureExists(x.id);
  verifyExperimentalfeatureUpdated(x.id);
});

bthread("Experimentalfeature nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExperimentalfeature(a.id);
  block(matchAddExperimentalfeature(a.id, ANY), function () {});
  addExperimentalfeature(b.id);
});

bthread("Faceting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFaceting(x.id);
  for (var i=0; i<steps; i++) {
    updateFaceting(x.id);
  }
  if (pick([true,false])) { deleteFaceting(x.id); }
  verifyFacetingExists(x.id);
  verifyFacetingUpdated(x.id);
});

bthread("Faceting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFaceting(a.id);
  block(matchAddFaceting(a.id, ANY), function () {});
  addFaceting(b.id);
});

bthread("Facetsearch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFacetsearch(x.id);
  for (var i=0; i<steps; i++) {
    updateFacetsearch(x.id);
  }
  if (pick([true,false])) { deleteFacetsearch(x.id); }
  verifyFacetsearchExists(x.id);
  verifyFacetsearchUpdated(x.id);
});

bthread("Facetsearch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFacetsearch(a.id);
  block(matchAddFacetsearch(a.id, ANY), function () {});
  addFacetsearch(b.id);
});

bthread("Fetch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFetch(x.id);
  for (var i=0; i<steps; i++) {
    updateFetch(x.id);
  }
  if (pick([true,false])) { deleteFetch(x.id); }
  verifyFetchExists(x.id);
  verifyFetchUpdated(x.id);
});

bthread("Fetch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFetch(a.id);
  block(matchAddFetch(a.id, ANY), function () {});
  addFetch(b.id);
});

bthread("Filterableattribute nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFilterableattribute(x.id);
  for (var i=0; i<steps; i++) {
    updateFilterableattribute(x.id);
  }
  if (pick([true,false])) { deleteFilterableattribute(x.id); }
  verifyFilterableattributeExists(x.id);
  verifyFilterableattributeUpdated(x.id);
});

bthread("Filterableattribute nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFilterableattribute(a.id);
  block(matchAddFilterableattribute(a.id, ANY), function () {});
  addFilterableattribute(b.id);
});

bthread("Health nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addHealth(x.id);
  for (var i=0; i<steps; i++) {
    updateHealth(x.id);
  }
  if (pick([true,false])) { deleteHealth(x.id); }
  verifyHealthExists(x.id);
  verifyHealthUpdated(x.id);
});

bthread("Health nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHealth(a.id);
  block(matchAddHealth(a.id, ANY), function () {});
  addHealth(b.id);
});

bthread("Indexe nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIndexe(x.id);
  for (var i=0; i<steps; i++) {
    updateIndexe(x.id);
  }
  if (pick([true,false])) { deleteIndexe(x.id); }
  verifyIndexeExists(x.id);
  verifyIndexeUpdated(x.id);
});

bthread("Indexe nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIndexe(a.id);
  block(matchAddIndexe(a.id, ANY), function () {});
  addIndexe(b.id);
});

bthread("Key nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addKey(x.id);
  for (var i=0; i<steps; i++) {
    updateKey(x.id);
  }
  if (pick([true,false])) { deleteKey(x.id); }
  verifyKeyExists(x.id);
  verifyKeyUpdated(x.id);
});

bthread("Key nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'K' + ids[0] };
  const b = { id: 'K' + ids[1] };
  addKey(a.id);
  block(matchAddKey(a.id, ANY), function () {});
  addKey(b.id);
});

bthread("Metric nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMetric(x.id);
  for (var i=0; i<steps; i++) {
    updateMetric(x.id);
  }
  if (pick([true,false])) { deleteMetric(x.id); }
  verifyMetricExists(x.id);
  verifyMetricUpdated(x.id);
});

bthread("Metric nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMetric(a.id);
  block(matchAddMetric(a.id, ANY), function () {});
  addMetric(b.id);
});

bthread("Multisearch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMultisearch(x.id);
  for (var i=0; i<steps; i++) {
    updateMultisearch(x.id);
  }
  if (pick([true,false])) { deleteMultisearch(x.id); }
  verifyMultisearchExists(x.id);
  verifyMultisearchUpdated(x.id);
});

bthread("Multisearch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMultisearch(a.id);
  block(matchAddMultisearch(a.id, ANY), function () {});
  addMultisearch(b.id);
});

bthread("Pagination nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPagination(x.id);
  for (var i=0; i<steps; i++) {
    updatePagination(x.id);
  }
  if (pick([true,false])) { deletePagination(x.id); }
  verifyPaginationExists(x.id);
  verifyPaginationUpdated(x.id);
});

bthread("Pagination nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPagination(a.id);
  block(matchAddPagination(a.id, ANY), function () {});
  addPagination(b.id);
});

bthread("Rankingrule nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRankingrule(x.id);
  for (var i=0; i<steps; i++) {
    updateRankingrule(x.id);
  }
  if (pick([true,false])) { deleteRankingrule(x.id); }
  verifyRankingruleExists(x.id);
  verifyRankingruleUpdated(x.id);
});

bthread("Rankingrule nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRankingrule(a.id);
  block(matchAddRankingrule(a.id, ANY), function () {});
  addRankingrule(b.id);
});

bthread("Search nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSearch(x.id);
  for (var i=0; i<steps; i++) {
    updateSearch(x.id);
  }
  if (pick([true,false])) { deleteSearch(x.id); }
  verifySearchExists(x.id);
  verifySearchUpdated(x.id);
});

bthread("Search nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSearch(a.id);
  block(matchAddSearch(a.id, ANY), function () {});
  addSearch(b.id);
});

bthread("Searchableattribute nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSearchableattribute(x.id);
  for (var i=0; i<steps; i++) {
    updateSearchableattribute(x.id);
  }
  if (pick([true,false])) { deleteSearchableattribute(x.id); }
  verifySearchableattributeExists(x.id);
  verifySearchableattributeUpdated(x.id);
});

bthread("Searchableattribute nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSearchableattribute(a.id);
  block(matchAddSearchableattribute(a.id, ANY), function () {});
  addSearchableattribute(b.id);
});

bthread("Setting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSetting(x.id);
  for (var i=0; i<steps; i++) {
    updateSetting(x.id);
  }
  if (pick([true,false])) { deleteSetting(x.id); }
  verifySettingExists(x.id);
  verifySettingUpdated(x.id);
});

bthread("Setting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSetting(a.id);
  block(matchAddSetting(a.id, ANY), function () {});
  addSetting(b.id);
});

bthread("Snapshot nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSnapshot(x.id);
  for (var i=0; i<steps; i++) {
    updateSnapshot(x.id);
  }
  if (pick([true,false])) { deleteSnapshot(x.id); }
  verifySnapshotExists(x.id);
  verifySnapshotUpdated(x.id);
});

bthread("Snapshot nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSnapshot(a.id);
  block(matchAddSnapshot(a.id, ANY), function () {});
  addSnapshot(b.id);
});

bthread("Sortableattribute nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSortableattribute(x.id);
  for (var i=0; i<steps; i++) {
    updateSortableattribute(x.id);
  }
  if (pick([true,false])) { deleteSortableattribute(x.id); }
  verifySortableattributeExists(x.id);
  verifySortableattributeUpdated(x.id);
});

bthread("Sortableattribute nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSortableattribute(a.id);
  block(matchAddSortableattribute(a.id, ANY), function () {});
  addSortableattribute(b.id);
});

bthread("Stat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStat(x.id);
  for (var i=0; i<steps; i++) {
    updateStat(x.id);
  }
  if (pick([true,false])) { deleteStat(x.id); }
  verifyStatExists(x.id);
  verifyStatUpdated(x.id);
});

bthread("Stat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStat(a.id);
  block(matchAddStat(a.id, ANY), function () {});
  addStat(b.id);
});

bthread("Stopword nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStopword(x.id);
  for (var i=0; i<steps; i++) {
    updateStopword(x.id);
  }
  if (pick([true,false])) { deleteStopword(x.id); }
  verifyStopwordExists(x.id);
  verifyStopwordUpdated(x.id);
});

bthread("Stopword nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStopword(a.id);
  block(matchAddStopword(a.id, ANY), function () {});
  addStopword(b.id);
});

bthread("Swapindexe nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSwapindexe(x.id);
  for (var i=0; i<steps; i++) {
    updateSwapindexe(x.id);
  }
  if (pick([true,false])) { deleteSwapindexe(x.id); }
  verifySwapindexeExists(x.id);
  verifySwapindexeUpdated(x.id);
});

bthread("Swapindexe nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSwapindexe(a.id);
  block(matchAddSwapindexe(a.id, ANY), function () {});
  addSwapindexe(b.id);
});

bthread("Synonym nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSynonym(x.id);
  for (var i=0; i<steps; i++) {
    updateSynonym(x.id);
  }
  if (pick([true,false])) { deleteSynonym(x.id); }
  verifySynonymExists(x.id);
  verifySynonymUpdated(x.id);
});

bthread("Synonym nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSynonym(a.id);
  block(matchAddSynonym(a.id, ANY), function () {});
  addSynonym(b.id);
});

bthread("Task nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTask(x.id);
  for (var i=0; i<steps; i++) {
    updateTask(x.id);
  }
  if (pick([true,false])) { deleteTask(x.id); }
  verifyTaskExists(x.id);
  verifyTaskUpdated(x.id);
});

bthread("Task nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTask(a.id);
  block(matchAddTask(a.id, ANY), function () {});
  addTask(b.id);
});

bthread("Taskuid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTaskuid(x.id);
  for (var i=0; i<steps; i++) {
    updateTaskuid(x.id);
  }
  if (pick([true,false])) { deleteTaskuid(x.id); }
  verifyTaskuidExists(x.id);
  verifyTaskuidUpdated(x.id);
});

bthread("Taskuid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTaskuid(a.id);
  block(matchAddTaskuid(a.id, ANY), function () {});
  addTaskuid(b.id);
});

bthread("Typotolerance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTypotolerance(x.id);
  for (var i=0; i<steps; i++) {
    updateTypotolerance(x.id);
  }
  if (pick([true,false])) { deleteTypotolerance(x.id); }
  verifyTypotoleranceExists(x.id);
  verifyTypotoleranceUpdated(x.id);
});

bthread("Typotolerance nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTypotolerance(a.id);
  block(matchAddTypotolerance(a.id, ANY), function () {});
  addTypotolerance(b.id);
});

bthread("Version nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addVersion(x.id);
  for (var i=0; i<steps; i++) {
    updateVersion(x.id);
  }
  if (pick([true,false])) { deleteVersion(x.id); }
  verifyVersionExists(x.id);
  verifyVersionUpdated(x.id);
});

bthread("Version nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVersion(a.id);
  block(matchAddVersion(a.id, ANY), function () {});
  addVersion(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Cancel create verification", function () {
  const e = waitForAnyCancelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCancel(k, ANY), function () {
    verifyCancelExists(k);
  });
});

bthread("Cancel update verification", function () {
  const e = waitForAnyCancelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCancel(k, ANY), function () {
    verifyCancelUpdated(k);
  });
});

bthread("Cancel delete verification", function () {
  const e = waitForAnyCancelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCancel(k, ANY), function () {
    verifyCancelDoesNotExist(k);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelete(k, ANY), function () {
    verifyDeleteExists(k);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelete(k, ANY), function () {
    verifyDeleteUpdated(k);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDelete(k, ANY), function () {
    verifyDeleteDoesNotExist(k);
  });
});

bthread("Deletebatch create verification", function () {
  const e = waitForAnyDeletebatchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeletebatch(k, ANY), function () {
    verifyDeletebatchExists(k);
  });
});

bthread("Deletebatch update verification", function () {
  const e = waitForAnyDeletebatchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeletebatch(k, ANY), function () {
    verifyDeletebatchUpdated(k);
  });
});

bthread("Deletebatch delete verification", function () {
  const e = waitForAnyDeletebatchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeletebatch(k, ANY), function () {
    verifyDeletebatchDoesNotExist(k);
  });
});

bthread("Displayedattribute create verification", function () {
  const e = waitForAnyDisplayedattributeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisplayedattribute(k, ANY), function () {
    verifyDisplayedattributeExists(k);
  });
});

bthread("Displayedattribute update verification", function () {
  const e = waitForAnyDisplayedattributeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisplayedattribute(k, ANY), function () {
    verifyDisplayedattributeUpdated(k);
  });
});

bthread("Displayedattribute delete verification", function () {
  const e = waitForAnyDisplayedattributeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDisplayedattribute(k, ANY), function () {
    verifyDisplayedattributeDoesNotExist(k);
  });
});

bthread("Distinctattribute create verification", function () {
  const e = waitForAnyDistinctattributeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDistinctattribute(k, ANY), function () {
    verifyDistinctattributeExists(k);
  });
});

bthread("Distinctattribute update verification", function () {
  const e = waitForAnyDistinctattributeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDistinctattribute(k, ANY), function () {
    verifyDistinctattributeUpdated(k);
  });
});

bthread("Distinctattribute delete verification", function () {
  const e = waitForAnyDistinctattributeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDistinctattribute(k, ANY), function () {
    verifyDistinctattributeDoesNotExist(k);
  });
});

bthread("Document create verification", function () {
  const e = waitForAnyDocumentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDocument(k, ANY), function () {
    verifyDocumentExists(k);
  });
});

bthread("Document update verification", function () {
  const e = waitForAnyDocumentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDocument(k, ANY), function () {
    verifyDocumentUpdated(k);
  });
});

bthread("Document delete verification", function () {
  const e = waitForAnyDocumentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDocument(k, ANY), function () {
    verifyDocumentDoesNotExist(k);
  });
});

bthread("Dump create verification", function () {
  const e = waitForAnyDumpAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDump(k, ANY), function () {
    verifyDumpExists(k);
  });
});

bthread("Dump update verification", function () {
  const e = waitForAnyDumpUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDump(k, ANY), function () {
    verifyDumpUpdated(k);
  });
});

bthread("Dump delete verification", function () {
  const e = waitForAnyDumpDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDump(k, ANY), function () {
    verifyDumpDoesNotExist(k);
  });
});

bthread("Experimentalfeature create verification", function () {
  const e = waitForAnyExperimentalfeatureAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExperimentalfeature(k, ANY), function () {
    verifyExperimentalfeatureExists(k);
  });
});

bthread("Experimentalfeature update verification", function () {
  const e = waitForAnyExperimentalfeatureUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExperimentalfeature(k, ANY), function () {
    verifyExperimentalfeatureUpdated(k);
  });
});

bthread("Experimentalfeature delete verification", function () {
  const e = waitForAnyExperimentalfeatureDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExperimentalfeature(k, ANY), function () {
    verifyExperimentalfeatureDoesNotExist(k);
  });
});

bthread("Faceting create verification", function () {
  const e = waitForAnyFacetingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFaceting(k, ANY), function () {
    verifyFacetingExists(k);
  });
});

bthread("Faceting update verification", function () {
  const e = waitForAnyFacetingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFaceting(k, ANY), function () {
    verifyFacetingUpdated(k);
  });
});

bthread("Faceting delete verification", function () {
  const e = waitForAnyFacetingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFaceting(k, ANY), function () {
    verifyFacetingDoesNotExist(k);
  });
});

bthread("Facetsearch create verification", function () {
  const e = waitForAnyFacetsearchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFacetsearch(k, ANY), function () {
    verifyFacetsearchExists(k);
  });
});

bthread("Facetsearch update verification", function () {
  const e = waitForAnyFacetsearchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFacetsearch(k, ANY), function () {
    verifyFacetsearchUpdated(k);
  });
});

bthread("Facetsearch delete verification", function () {
  const e = waitForAnyFacetsearchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFacetsearch(k, ANY), function () {
    verifyFacetsearchDoesNotExist(k);
  });
});

bthread("Fetch create verification", function () {
  const e = waitForAnyFetchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFetch(k, ANY), function () {
    verifyFetchExists(k);
  });
});

bthread("Fetch update verification", function () {
  const e = waitForAnyFetchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFetch(k, ANY), function () {
    verifyFetchUpdated(k);
  });
});

bthread("Fetch delete verification", function () {
  const e = waitForAnyFetchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFetch(k, ANY), function () {
    verifyFetchDoesNotExist(k);
  });
});

bthread("Filterableattribute create verification", function () {
  const e = waitForAnyFilterableattributeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFilterableattribute(k, ANY), function () {
    verifyFilterableattributeExists(k);
  });
});

bthread("Filterableattribute update verification", function () {
  const e = waitForAnyFilterableattributeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFilterableattribute(k, ANY), function () {
    verifyFilterableattributeUpdated(k);
  });
});

bthread("Filterableattribute delete verification", function () {
  const e = waitForAnyFilterableattributeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFilterableattribute(k, ANY), function () {
    verifyFilterableattributeDoesNotExist(k);
  });
});

bthread("Health create verification", function () {
  const e = waitForAnyHealthAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHealth(k, ANY), function () {
    verifyHealthExists(k);
  });
});

bthread("Health update verification", function () {
  const e = waitForAnyHealthUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHealth(k, ANY), function () {
    verifyHealthUpdated(k);
  });
});

bthread("Health delete verification", function () {
  const e = waitForAnyHealthDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHealth(k, ANY), function () {
    verifyHealthDoesNotExist(k);
  });
});

bthread("Indexe create verification", function () {
  const e = waitForAnyIndexeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIndexe(k, ANY), function () {
    verifyIndexeExists(k);
  });
});

bthread("Indexe update verification", function () {
  const e = waitForAnyIndexeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIndexe(k, ANY), function () {
    verifyIndexeUpdated(k);
  });
});

bthread("Indexe delete verification", function () {
  const e = waitForAnyIndexeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIndexe(k, ANY), function () {
    verifyIndexeDoesNotExist(k);
  });
});

bthread("Key create verification", function () {
  const e = waitForAnyKeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteKey(k, ANY), function () {
    verifyKeyExists(k);
  });
});

bthread("Key update verification", function () {
  const e = waitForAnyKeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteKey(k, ANY), function () {
    verifyKeyUpdated(k);
  });
});

bthread("Key delete verification", function () {
  const e = waitForAnyKeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddKey(k, ANY), function () {
    verifyKeyDoesNotExist(k);
  });
});

bthread("Metric create verification", function () {
  const e = waitForAnyMetricAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMetric(k, ANY), function () {
    verifyMetricExists(k);
  });
});

bthread("Metric update verification", function () {
  const e = waitForAnyMetricUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMetric(k, ANY), function () {
    verifyMetricUpdated(k);
  });
});

bthread("Metric delete verification", function () {
  const e = waitForAnyMetricDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMetric(k, ANY), function () {
    verifyMetricDoesNotExist(k);
  });
});

bthread("Multisearch create verification", function () {
  const e = waitForAnyMultisearchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMultisearch(k, ANY), function () {
    verifyMultisearchExists(k);
  });
});

bthread("Multisearch update verification", function () {
  const e = waitForAnyMultisearchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMultisearch(k, ANY), function () {
    verifyMultisearchUpdated(k);
  });
});

bthread("Multisearch delete verification", function () {
  const e = waitForAnyMultisearchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMultisearch(k, ANY), function () {
    verifyMultisearchDoesNotExist(k);
  });
});

bthread("Pagination create verification", function () {
  const e = waitForAnyPaginationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePagination(k, ANY), function () {
    verifyPaginationExists(k);
  });
});

bthread("Pagination update verification", function () {
  const e = waitForAnyPaginationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePagination(k, ANY), function () {
    verifyPaginationUpdated(k);
  });
});

bthread("Pagination delete verification", function () {
  const e = waitForAnyPaginationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPagination(k, ANY), function () {
    verifyPaginationDoesNotExist(k);
  });
});

bthread("Rankingrule create verification", function () {
  const e = waitForAnyRankingruleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRankingrule(k, ANY), function () {
    verifyRankingruleExists(k);
  });
});

bthread("Rankingrule update verification", function () {
  const e = waitForAnyRankingruleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRankingrule(k, ANY), function () {
    verifyRankingruleUpdated(k);
  });
});

bthread("Rankingrule delete verification", function () {
  const e = waitForAnyRankingruleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRankingrule(k, ANY), function () {
    verifyRankingruleDoesNotExist(k);
  });
});

bthread("Search create verification", function () {
  const e = waitForAnySearchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSearch(k, ANY), function () {
    verifySearchExists(k);
  });
});

bthread("Search update verification", function () {
  const e = waitForAnySearchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSearch(k, ANY), function () {
    verifySearchUpdated(k);
  });
});

bthread("Search delete verification", function () {
  const e = waitForAnySearchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSearch(k, ANY), function () {
    verifySearchDoesNotExist(k);
  });
});

bthread("Searchableattribute create verification", function () {
  const e = waitForAnySearchableattributeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSearchableattribute(k, ANY), function () {
    verifySearchableattributeExists(k);
  });
});

bthread("Searchableattribute update verification", function () {
  const e = waitForAnySearchableattributeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSearchableattribute(k, ANY), function () {
    verifySearchableattributeUpdated(k);
  });
});

bthread("Searchableattribute delete verification", function () {
  const e = waitForAnySearchableattributeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSearchableattribute(k, ANY), function () {
    verifySearchableattributeDoesNotExist(k);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSetting(k, ANY), function () {
    verifySettingExists(k);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSetting(k, ANY), function () {
    verifySettingUpdated(k);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSetting(k, ANY), function () {
    verifySettingDoesNotExist(k);
  });
});

bthread("Snapshot create verification", function () {
  const e = waitForAnySnapshotAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSnapshot(k, ANY), function () {
    verifySnapshotExists(k);
  });
});

bthread("Snapshot update verification", function () {
  const e = waitForAnySnapshotUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSnapshot(k, ANY), function () {
    verifySnapshotUpdated(k);
  });
});

bthread("Snapshot delete verification", function () {
  const e = waitForAnySnapshotDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSnapshot(k, ANY), function () {
    verifySnapshotDoesNotExist(k);
  });
});

bthread("Sortableattribute create verification", function () {
  const e = waitForAnySortableattributeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSortableattribute(k, ANY), function () {
    verifySortableattributeExists(k);
  });
});

bthread("Sortableattribute update verification", function () {
  const e = waitForAnySortableattributeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSortableattribute(k, ANY), function () {
    verifySortableattributeUpdated(k);
  });
});

bthread("Sortableattribute delete verification", function () {
  const e = waitForAnySortableattributeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSortableattribute(k, ANY), function () {
    verifySortableattributeDoesNotExist(k);
  });
});

bthread("Stat create verification", function () {
  const e = waitForAnyStatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStat(k, ANY), function () {
    verifyStatExists(k);
  });
});

bthread("Stat update verification", function () {
  const e = waitForAnyStatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStat(k, ANY), function () {
    verifyStatUpdated(k);
  });
});

bthread("Stat delete verification", function () {
  const e = waitForAnyStatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStat(k, ANY), function () {
    verifyStatDoesNotExist(k);
  });
});

bthread("Stopword create verification", function () {
  const e = waitForAnyStopwordAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStopword(k, ANY), function () {
    verifyStopwordExists(k);
  });
});

bthread("Stopword update verification", function () {
  const e = waitForAnyStopwordUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStopword(k, ANY), function () {
    verifyStopwordUpdated(k);
  });
});

bthread("Stopword delete verification", function () {
  const e = waitForAnyStopwordDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStopword(k, ANY), function () {
    verifyStopwordDoesNotExist(k);
  });
});

bthread("Swapindexe create verification", function () {
  const e = waitForAnySwapindexeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSwapindexe(k, ANY), function () {
    verifySwapindexeExists(k);
  });
});

bthread("Swapindexe update verification", function () {
  const e = waitForAnySwapindexeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSwapindexe(k, ANY), function () {
    verifySwapindexeUpdated(k);
  });
});

bthread("Swapindexe delete verification", function () {
  const e = waitForAnySwapindexeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSwapindexe(k, ANY), function () {
    verifySwapindexeDoesNotExist(k);
  });
});

bthread("Synonym create verification", function () {
  const e = waitForAnySynonymAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSynonym(k, ANY), function () {
    verifySynonymExists(k);
  });
});

bthread("Synonym update verification", function () {
  const e = waitForAnySynonymUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSynonym(k, ANY), function () {
    verifySynonymUpdated(k);
  });
});

bthread("Synonym delete verification", function () {
  const e = waitForAnySynonymDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSynonym(k, ANY), function () {
    verifySynonymDoesNotExist(k);
  });
});

bthread("Task create verification", function () {
  const e = waitForAnyTaskAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTask(k, ANY), function () {
    verifyTaskExists(k);
  });
});

bthread("Task update verification", function () {
  const e = waitForAnyTaskUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTask(k, ANY), function () {
    verifyTaskUpdated(k);
  });
});

bthread("Task delete verification", function () {
  const e = waitForAnyTaskDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTask(k, ANY), function () {
    verifyTaskDoesNotExist(k);
  });
});

bthread("Taskuid create verification", function () {
  const e = waitForAnyTaskuidAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTaskuid(k, ANY), function () {
    verifyTaskuidExists(k);
  });
});

bthread("Taskuid update verification", function () {
  const e = waitForAnyTaskuidUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTaskuid(k, ANY), function () {
    verifyTaskuidUpdated(k);
  });
});

bthread("Taskuid delete verification", function () {
  const e = waitForAnyTaskuidDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTaskuid(k, ANY), function () {
    verifyTaskuidDoesNotExist(k);
  });
});

bthread("Typotolerance create verification", function () {
  const e = waitForAnyTypotoleranceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTypotolerance(k, ANY), function () {
    verifyTypotoleranceExists(k);
  });
});

bthread("Typotolerance update verification", function () {
  const e = waitForAnyTypotoleranceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTypotolerance(k, ANY), function () {
    verifyTypotoleranceUpdated(k);
  });
});

bthread("Typotolerance delete verification", function () {
  const e = waitForAnyTypotoleranceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTypotolerance(k, ANY), function () {
    verifyTypotoleranceDoesNotExist(k);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVersion(k, ANY), function () {
    verifyVersionExists(k);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVersion(k, ANY), function () {
    verifyVersionUpdated(k);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVersion(k, ANY), function () {
    verifyVersionDoesNotExist(k);
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
