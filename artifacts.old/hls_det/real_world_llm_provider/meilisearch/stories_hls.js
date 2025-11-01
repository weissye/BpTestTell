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
    if (Object.prototype.hasOwnProperty.call(e, key) && typeof e[key] !== 'function') return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key) && typeof e.data[key] !== 'function') return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key) && typeof e.payload[key] !== 'function') return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id') && typeof e['id'] !== 'function') return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc') && typeof e['ndc'] !== 'function') return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
  if (typeof v === 'function') return '1001';
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

// ===== PASSIVE ASSERTIONS =====

bthread("Cancel create verification", function () {
  const e = waitForAnyCancelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCancel(k), function () {
    verifyCancelExists(k);
  });
});

bthread("Cancel update verification", function () {
  const e = waitForAnyCancelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCancel(k), function () {
    verifyCancelUpdated(k);
  });
});

bthread("Cancel delete verification", function () {
  const e = waitForAnyCancelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCancel(k), function () {
    verifyCancelDoesNotExist(k);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDelete(k), function () {
    verifyDeleteExists(k);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDelete(k), function () {
    verifyDeleteUpdated(k);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDelete(k), function () {
    verifyDeleteDoesNotExist(k);
  });
});

bthread("Deletebatch create verification", function () {
  const e = waitForAnyDeletebatchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeletebatch(k), function () {
    verifyDeletebatchExists(k);
  });
});

bthread("Deletebatch update verification", function () {
  const e = waitForAnyDeletebatchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeletebatch(k), function () {
    verifyDeletebatchUpdated(k);
  });
});

bthread("Deletebatch delete verification", function () {
  const e = waitForAnyDeletebatchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeletebatch(k), function () {
    verifyDeletebatchDoesNotExist(k);
  });
});

bthread("Displayedattribute create verification", function () {
  const e = waitForAnyDisplayedattributeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisplayedattribute(k), function () {
    verifyDisplayedattributeExists(k);
  });
});

bthread("Displayedattribute update verification", function () {
  const e = waitForAnyDisplayedattributeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisplayedattribute(k), function () {
    verifyDisplayedattributeUpdated(k);
  });
});

bthread("Displayedattribute delete verification", function () {
  const e = waitForAnyDisplayedattributeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDisplayedattribute(k), function () {
    verifyDisplayedattributeDoesNotExist(k);
  });
});

bthread("Distinctattribute create verification", function () {
  const e = waitForAnyDistinctattributeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDistinctattribute(k), function () {
    verifyDistinctattributeExists(k);
  });
});

bthread("Distinctattribute update verification", function () {
  const e = waitForAnyDistinctattributeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDistinctattribute(k), function () {
    verifyDistinctattributeUpdated(k);
  });
});

bthread("Distinctattribute delete verification", function () {
  const e = waitForAnyDistinctattributeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDistinctattribute(k), function () {
    verifyDistinctattributeDoesNotExist(k);
  });
});

bthread("Document create verification", function () {
  const e = waitForAnyDocumentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDocument(k), function () {
    verifyDocumentExists(k);
  });
});

bthread("Document update verification", function () {
  const e = waitForAnyDocumentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDocument(k), function () {
    verifyDocumentUpdated(k);
  });
});

bthread("Document delete verification", function () {
  const e = waitForAnyDocumentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDocument(k), function () {
    verifyDocumentDoesNotExist(k);
  });
});

bthread("Dump create verification", function () {
  const e = waitForAnyDumpAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDump(k), function () {
    verifyDumpExists(k);
  });
});

bthread("Dump update verification", function () {
  const e = waitForAnyDumpUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDump(k), function () {
    verifyDumpUpdated(k);
  });
});

bthread("Dump delete verification", function () {
  const e = waitForAnyDumpDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDump(k), function () {
    verifyDumpDoesNotExist(k);
  });
});

bthread("Experimentalfeature create verification", function () {
  const e = waitForAnyExperimentalfeatureAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExperimentalfeature(k), function () {
    verifyExperimentalfeatureExists(k);
  });
});

bthread("Experimentalfeature update verification", function () {
  const e = waitForAnyExperimentalfeatureUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExperimentalfeature(k), function () {
    verifyExperimentalfeatureUpdated(k);
  });
});

bthread("Experimentalfeature delete verification", function () {
  const e = waitForAnyExperimentalfeatureDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExperimentalfeature(k), function () {
    verifyExperimentalfeatureDoesNotExist(k);
  });
});

bthread("Faceting create verification", function () {
  const e = waitForAnyFacetingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFaceting(k), function () {
    verifyFacetingExists(k);
  });
});

bthread("Faceting update verification", function () {
  const e = waitForAnyFacetingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFaceting(k), function () {
    verifyFacetingUpdated(k);
  });
});

bthread("Faceting delete verification", function () {
  const e = waitForAnyFacetingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFaceting(k), function () {
    verifyFacetingDoesNotExist(k);
  });
});

bthread("Facetsearch create verification", function () {
  const e = waitForAnyFacetsearchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFacetsearch(k), function () {
    verifyFacetsearchExists(k);
  });
});

bthread("Facetsearch update verification", function () {
  const e = waitForAnyFacetsearchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFacetsearch(k), function () {
    verifyFacetsearchUpdated(k);
  });
});

bthread("Facetsearch delete verification", function () {
  const e = waitForAnyFacetsearchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFacetsearch(k), function () {
    verifyFacetsearchDoesNotExist(k);
  });
});

bthread("Fetch create verification", function () {
  const e = waitForAnyFetchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFetch(k), function () {
    verifyFetchExists(k);
  });
});

bthread("Fetch update verification", function () {
  const e = waitForAnyFetchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFetch(k), function () {
    verifyFetchUpdated(k);
  });
});

bthread("Fetch delete verification", function () {
  const e = waitForAnyFetchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFetch(k), function () {
    verifyFetchDoesNotExist(k);
  });
});

bthread("Filterableattribute create verification", function () {
  const e = waitForAnyFilterableattributeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFilterableattribute(k), function () {
    verifyFilterableattributeExists(k);
  });
});

bthread("Filterableattribute update verification", function () {
  const e = waitForAnyFilterableattributeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFilterableattribute(k), function () {
    verifyFilterableattributeUpdated(k);
  });
});

bthread("Filterableattribute delete verification", function () {
  const e = waitForAnyFilterableattributeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFilterableattribute(k), function () {
    verifyFilterableattributeDoesNotExist(k);
  });
});

bthread("Health create verification", function () {
  const e = waitForAnyHealthAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHealth(k), function () {
    verifyHealthExists(k);
  });
});

bthread("Health update verification", function () {
  const e = waitForAnyHealthUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHealth(k), function () {
    verifyHealthUpdated(k);
  });
});

bthread("Health delete verification", function () {
  const e = waitForAnyHealthDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHealth(k), function () {
    verifyHealthDoesNotExist(k);
  });
});

bthread("Indexe create verification", function () {
  const e = waitForAnyIndexeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIndexe(k), function () {
    verifyIndexeExists(k);
  });
});

bthread("Indexe update verification", function () {
  const e = waitForAnyIndexeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIndexe(k), function () {
    verifyIndexeUpdated(k);
  });
});

bthread("Indexe delete verification", function () {
  const e = waitForAnyIndexeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIndexe(k), function () {
    verifyIndexeDoesNotExist(k);
  });
});

bthread("Key create verification", function () {
  const e = waitForAnyKeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKey(k), function () {
    verifyKeyExists(k);
  });
});

bthread("Key update verification", function () {
  const e = waitForAnyKeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteKey(k), function () {
    verifyKeyUpdated(k);
  });
});

bthread("Key delete verification", function () {
  const e = waitForAnyKeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddKey(k), function () {
    verifyKeyDoesNotExist(k);
  });
});

bthread("Metric create verification", function () {
  const e = waitForAnyMetricAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMetric(k), function () {
    verifyMetricExists(k);
  });
});

bthread("Metric update verification", function () {
  const e = waitForAnyMetricUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMetric(k), function () {
    verifyMetricUpdated(k);
  });
});

bthread("Metric delete verification", function () {
  const e = waitForAnyMetricDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMetric(k), function () {
    verifyMetricDoesNotExist(k);
  });
});

bthread("Multisearch create verification", function () {
  const e = waitForAnyMultisearchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMultisearch(k), function () {
    verifyMultisearchExists(k);
  });
});

bthread("Multisearch update verification", function () {
  const e = waitForAnyMultisearchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMultisearch(k), function () {
    verifyMultisearchUpdated(k);
  });
});

bthread("Multisearch delete verification", function () {
  const e = waitForAnyMultisearchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMultisearch(k), function () {
    verifyMultisearchDoesNotExist(k);
  });
});

bthread("Pagination create verification", function () {
  const e = waitForAnyPaginationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePagination(k), function () {
    verifyPaginationExists(k);
  });
});

bthread("Pagination update verification", function () {
  const e = waitForAnyPaginationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePagination(k), function () {
    verifyPaginationUpdated(k);
  });
});

bthread("Pagination delete verification", function () {
  const e = waitForAnyPaginationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPagination(k), function () {
    verifyPaginationDoesNotExist(k);
  });
});

bthread("Rankingrule create verification", function () {
  const e = waitForAnyRankingruleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRankingrule(k), function () {
    verifyRankingruleExists(k);
  });
});

bthread("Rankingrule update verification", function () {
  const e = waitForAnyRankingruleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRankingrule(k), function () {
    verifyRankingruleUpdated(k);
  });
});

bthread("Rankingrule delete verification", function () {
  const e = waitForAnyRankingruleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRankingrule(k), function () {
    verifyRankingruleDoesNotExist(k);
  });
});

bthread("Search create verification", function () {
  const e = waitForAnySearchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearch(k), function () {
    verifySearchExists(k);
  });
});

bthread("Search update verification", function () {
  const e = waitForAnySearchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearch(k), function () {
    verifySearchUpdated(k);
  });
});

bthread("Search delete verification", function () {
  const e = waitForAnySearchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSearch(k), function () {
    verifySearchDoesNotExist(k);
  });
});

bthread("Searchableattribute create verification", function () {
  const e = waitForAnySearchableattributeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearchableattribute(k), function () {
    verifySearchableattributeExists(k);
  });
});

bthread("Searchableattribute update verification", function () {
  const e = waitForAnySearchableattributeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearchableattribute(k), function () {
    verifySearchableattributeUpdated(k);
  });
});

bthread("Searchableattribute delete verification", function () {
  const e = waitForAnySearchableattributeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSearchableattribute(k), function () {
    verifySearchableattributeDoesNotExist(k);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSetting(k), function () {
    verifySettingExists(k);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSetting(k), function () {
    verifySettingUpdated(k);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSetting(k), function () {
    verifySettingDoesNotExist(k);
  });
});

bthread("Snapshot create verification", function () {
  const e = waitForAnySnapshotAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSnapshot(k), function () {
    verifySnapshotExists(k);
  });
});

bthread("Snapshot update verification", function () {
  const e = waitForAnySnapshotUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSnapshot(k), function () {
    verifySnapshotUpdated(k);
  });
});

bthread("Snapshot delete verification", function () {
  const e = waitForAnySnapshotDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSnapshot(k), function () {
    verifySnapshotDoesNotExist(k);
  });
});

bthread("Sortableattribute create verification", function () {
  const e = waitForAnySortableattributeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSortableattribute(k), function () {
    verifySortableattributeExists(k);
  });
});

bthread("Sortableattribute update verification", function () {
  const e = waitForAnySortableattributeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSortableattribute(k), function () {
    verifySortableattributeUpdated(k);
  });
});

bthread("Sortableattribute delete verification", function () {
  const e = waitForAnySortableattributeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSortableattribute(k), function () {
    verifySortableattributeDoesNotExist(k);
  });
});

bthread("Stat create verification", function () {
  const e = waitForAnyStatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStat(k), function () {
    verifyStatExists(k);
  });
});

bthread("Stat update verification", function () {
  const e = waitForAnyStatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStat(k), function () {
    verifyStatUpdated(k);
  });
});

bthread("Stat delete verification", function () {
  const e = waitForAnyStatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStat(k), function () {
    verifyStatDoesNotExist(k);
  });
});

bthread("Stopword create verification", function () {
  const e = waitForAnyStopwordAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStopword(k), function () {
    verifyStopwordExists(k);
  });
});

bthread("Stopword update verification", function () {
  const e = waitForAnyStopwordUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStopword(k), function () {
    verifyStopwordUpdated(k);
  });
});

bthread("Stopword delete verification", function () {
  const e = waitForAnyStopwordDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStopword(k), function () {
    verifyStopwordDoesNotExist(k);
  });
});

bthread("Swapindexe create verification", function () {
  const e = waitForAnySwapindexeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSwapindexe(k), function () {
    verifySwapindexeExists(k);
  });
});

bthread("Swapindexe update verification", function () {
  const e = waitForAnySwapindexeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSwapindexe(k), function () {
    verifySwapindexeUpdated(k);
  });
});

bthread("Swapindexe delete verification", function () {
  const e = waitForAnySwapindexeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSwapindexe(k), function () {
    verifySwapindexeDoesNotExist(k);
  });
});

bthread("Synonym create verification", function () {
  const e = waitForAnySynonymAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSynonym(k), function () {
    verifySynonymExists(k);
  });
});

bthread("Synonym update verification", function () {
  const e = waitForAnySynonymUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSynonym(k), function () {
    verifySynonymUpdated(k);
  });
});

bthread("Synonym delete verification", function () {
  const e = waitForAnySynonymDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSynonym(k), function () {
    verifySynonymDoesNotExist(k);
  });
});

bthread("Task create verification", function () {
  const e = waitForAnyTaskAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTask(k), function () {
    verifyTaskExists(k);
  });
});

bthread("Task update verification", function () {
  const e = waitForAnyTaskUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTask(k), function () {
    verifyTaskUpdated(k);
  });
});

bthread("Task delete verification", function () {
  const e = waitForAnyTaskDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTask(k), function () {
    verifyTaskDoesNotExist(k);
  });
});

bthread("Taskuid create verification", function () {
  const e = waitForAnyTaskuidAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTaskuid(k), function () {
    verifyTaskuidExists(k);
  });
});

bthread("Taskuid update verification", function () {
  const e = waitForAnyTaskuidUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTaskuid(k), function () {
    verifyTaskuidUpdated(k);
  });
});

bthread("Taskuid delete verification", function () {
  const e = waitForAnyTaskuidDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTaskuid(k), function () {
    verifyTaskuidDoesNotExist(k);
  });
});

bthread("Typotolerance create verification", function () {
  const e = waitForAnyTypotoleranceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTypotolerance(k), function () {
    verifyTypotoleranceExists(k);
  });
});

bthread("Typotolerance update verification", function () {
  const e = waitForAnyTypotoleranceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTypotolerance(k), function () {
    verifyTypotoleranceUpdated(k);
  });
});

bthread("Typotolerance delete verification", function () {
  const e = waitForAnyTypotoleranceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTypotolerance(k), function () {
    verifyTypotoleranceDoesNotExist(k);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVersion(k), function () {
    verifyVersionExists(k);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVersion(k), function () {
    verifyVersionUpdated(k);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVersion(k), function () {
    verifyVersionDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Cancel", function () {
  const x = waitForAnyCancelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCancel(k, ANY), function () {});
});

bthread("Guard: Unique Delete", function () {
  const x = waitForAnyDeleteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDelete(k, ANY), function () {});
});

bthread("Guard: Unique Deletebatch", function () {
  const x = waitForAnyDeletebatchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeletebatch(k, ANY), function () {});
});

bthread("Guard: Unique Displayedattribute", function () {
  const x = waitForAnyDisplayedattributeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDisplayedattribute(k, ANY), function () {});
});

bthread("Guard: Unique Distinctattribute", function () {
  const x = waitForAnyDistinctattributeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDistinctattribute(k, ANY), function () {});
});

bthread("Guard: Unique Document", function () {
  const x = waitForAnyDocumentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDocument(k, ANY), function () {});
});

bthread("Guard: Unique Dump", function () {
  const x = waitForAnyDumpAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDump(k, ANY), function () {});
});

bthread("Guard: Unique Experimentalfeature", function () {
  const x = waitForAnyExperimentalfeatureAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExperimentalfeature(k, ANY), function () {});
});

bthread("Guard: Unique Faceting", function () {
  const x = waitForAnyFacetingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFaceting(k, ANY), function () {});
});

bthread("Guard: Unique Facetsearch", function () {
  const x = waitForAnyFacetsearchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFacetsearch(k, ANY), function () {});
});

bthread("Guard: Unique Fetch", function () {
  const x = waitForAnyFetchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFetch(k, ANY), function () {});
});

bthread("Guard: Unique Filterableattribute", function () {
  const x = waitForAnyFilterableattributeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFilterableattribute(k, ANY), function () {});
});

bthread("Guard: Unique Health", function () {
  const x = waitForAnyHealthAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHealth(k, ANY), function () {});
});

bthread("Guard: Unique Indexe", function () {
  const x = waitForAnyIndexeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIndexe(k, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKey(k, ANY), function () {});
});

bthread("Guard: Unique Metric", function () {
  const x = waitForAnyMetricAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMetric(k, ANY), function () {});
});

bthread("Guard: Unique Multisearch", function () {
  const x = waitForAnyMultisearchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMultisearch(k, ANY), function () {});
});

bthread("Guard: Unique Pagination", function () {
  const x = waitForAnyPaginationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPagination(k, ANY), function () {});
});

bthread("Guard: Unique Rankingrule", function () {
  const x = waitForAnyRankingruleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRankingrule(k, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSearch(k, ANY), function () {});
});

bthread("Guard: Unique Searchableattribute", function () {
  const x = waitForAnySearchableattributeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSearchableattribute(k, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSetting(k, ANY), function () {});
});

bthread("Guard: Unique Snapshot", function () {
  const x = waitForAnySnapshotAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSnapshot(k, ANY), function () {});
});

bthread("Guard: Unique Sortableattribute", function () {
  const x = waitForAnySortableattributeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSortableattribute(k, ANY), function () {});
});

bthread("Guard: Unique Stat", function () {
  const x = waitForAnyStatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStat(k, ANY), function () {});
});

bthread("Guard: Unique Stopword", function () {
  const x = waitForAnyStopwordAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStopword(k, ANY), function () {});
});

bthread("Guard: Unique Swapindexe", function () {
  const x = waitForAnySwapindexeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSwapindexe(k, ANY), function () {});
});

bthread("Guard: Unique Synonym", function () {
  const x = waitForAnySynonymAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSynonym(k, ANY), function () {});
});

bthread("Guard: Unique Task", function () {
  const x = waitForAnyTaskAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTask(k, ANY), function () {});
});

bthread("Guard: Unique Taskuid", function () {
  const x = waitForAnyTaskuidAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTaskuid(k, ANY), function () {});
});

bthread("Guard: Unique Typotolerance", function () {
  const x = waitForAnyTypotoleranceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTypotolerance(k, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVersion(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
