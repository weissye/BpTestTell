// ====================================================================
// Auto-generated garage-style High-Level Stories (HLS)
// SUT: hls_nondet
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


bthread("CustomrankingruledetailsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomrankingruledetails(x.id);
  const e_add = waitForCustomrankingruledetailsAdded(id);
  block(matchDeleteCustomrankingruledetails(id), function () {
    verifyCustomrankingruledetailsExists(id);
  });
  updateCustomrankingruledetails(x.id);
  updateCustomrankingruledetails(x.id);
  const e_upd = waitForCustomrankingruledetailsUpdated(id);
  block(matchDeleteCustomrankingruledetails(id), function () {
    verifyCustomrankingruledetailsUpdated(id);
  });
  deleteCustomrankingruledetails(x.id);
  const e_del = waitForCustomrankingruledetailsDeleted(id);
  block(matchAddCustomrankingruledetails(id), function () {
    verifyCustomrankingruledetailsDoesNotExist(id);
  });
});

bthread("DictionaryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDictionary(x.id);
  const e_add = waitForDictionaryAdded(id);
  block(matchDeleteDictionary(id), function () {
    verifyDictionaryExists(id);
  });
  updateDictionary(x.id);
  updateDictionary(x.id);
  const e_upd = waitForDictionaryUpdated(id);
  block(matchDeleteDictionary(id), function () {
    verifyDictionaryUpdated(id);
  });
  deleteDictionary(x.id);
  const e_del = waitForDictionaryDeleted(id);
  block(matchAddDictionary(id), function () {
    verifyDictionaryDoesNotExist(id);
  });
});

bthread("DisplayedattributesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDisplayedattributes(x.id);
  const e_add = waitForDisplayedattributesAdded(id);
  block(matchDeleteDisplayedattributes(id), function () {
    verifyDisplayedattributesExists(id);
  });
  updateDisplayedattributes(x.id);
  updateDisplayedattributes(x.id);
  const e_upd = waitForDisplayedattributesUpdated(id);
  block(matchDeleteDisplayedattributes(id), function () {
    verifyDisplayedattributesUpdated(id);
  });
  deleteDisplayedattributes(x.id);
  const e_del = waitForDisplayedattributesDeleted(id);
  block(matchAddDisplayedattributes(id), function () {
    verifyDisplayedattributesDoesNotExist(id);
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

bthread("DocumentidLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDocumentid(x.id);
  const e_add = waitForDocumentidAdded(id);
  block(matchDeleteDocumentid(id), function () {
    verifyDocumentidExists(id);
  });
  updateDocumentid(x.id);
  updateDocumentid(x.id);
  const e_upd = waitForDocumentidUpdated(id);
  block(matchDeleteDocumentid(id), function () {
    verifyDocumentidUpdated(id);
  });
  deleteDocumentid(x.id);
  const e_del = waitForDocumentidDeleted(id);
  block(matchAddDocumentid(id), function () {
    verifyDocumentidDoesNotExist(id);
  });
});

bthread("ErrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addError(x.id);
  const e_add = waitForErrorAdded(id);
  block(matchDeleteError(id), function () {
    verifyErrorExists(id);
  });
  updateError(x.id);
  updateError(x.id);
  const e_upd = waitForErrorUpdated(id);
  block(matchDeleteError(id), function () {
    verifyErrorUpdated(id);
  });
  deleteError(x.id);
  const e_del = waitForErrorDeleted(id);
  block(matchAddError(id), function () {
    verifyErrorDoesNotExist(id);
  });
});

bthread("FacethitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFacethit(x.id);
  const e_add = waitForFacethitAdded(id);
  block(matchDeleteFacethit(id), function () {
    verifyFacethitExists(id);
  });
  updateFacethit(x.id);
  updateFacethit(x.id);
  const e_upd = waitForFacethitUpdated(id);
  block(matchDeleteFacethit(id), function () {
    verifyFacethitUpdated(id);
  });
  deleteFacethit(x.id);
  const e_del = waitForFacethitDeleted(id);
  block(matchAddFacethit(id), function () {
    verifyFacethitDoesNotExist(id);
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

bthread("FacetsearchqueryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFacetsearchquery(x.id);
  const e_add = waitForFacetsearchqueryAdded(id);
  block(matchDeleteFacetsearchquery(id), function () {
    verifyFacetsearchqueryExists(id);
  });
  updateFacetsearchquery(x.id);
  updateFacetsearchquery(x.id);
  const e_upd = waitForFacetsearchqueryUpdated(id);
  block(matchDeleteFacetsearchquery(id), function () {
    verifyFacetsearchqueryUpdated(id);
  });
  deleteFacetsearchquery(x.id);
  const e_del = waitForFacetsearchqueryDeleted(id);
  block(matchAddFacetsearchquery(id), function () {
    verifyFacetsearchqueryDoesNotExist(id);
  });
});

bthread("FacetsearchresponseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFacetsearchresponse(x.id);
  const e_add = waitForFacetsearchresponseAdded(id);
  block(matchDeleteFacetsearchresponse(id), function () {
    verifyFacetsearchresponseExists(id);
  });
  updateFacetsearchresponse(x.id);
  updateFacetsearchresponse(x.id);
  const e_upd = waitForFacetsearchresponseUpdated(id);
  block(matchDeleteFacetsearchresponse(id), function () {
    verifyFacetsearchresponseUpdated(id);
  });
  deleteFacetsearchresponse(x.id);
  const e_del = waitForFacetsearchresponseDeleted(id);
  block(matchAddFacetsearchresponse(id), function () {
    verifyFacetsearchresponseDoesNotExist(id);
  });
});

bthread("FilterLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFilter(x.id);
  const e_add = waitForFilterAdded(id);
  block(matchDeleteFilter(id), function () {
    verifyFilterExists(id);
  });
  updateFilter(x.id);
  updateFilter(x.id);
  const e_upd = waitForFilterUpdated(id);
  block(matchDeleteFilter(id), function () {
    verifyFilterUpdated(id);
  });
  deleteFilter(x.id);
  const e_del = waitForFilterDeleted(id);
  block(matchAddFilter(id), function () {
    verifyFilterDoesNotExist(id);
  });
});

bthread("FilterableattributesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFilterableattributes(x.id);
  const e_add = waitForFilterableattributesAdded(id);
  block(matchDeleteFilterableattributes(id), function () {
    verifyFilterableattributesExists(id);
  });
  updateFilterableattributes(x.id);
  updateFilterableattributes(x.id);
  const e_upd = waitForFilterableattributesUpdated(id);
  block(matchDeleteFilterableattributes(id), function () {
    verifyFilterableattributesUpdated(id);
  });
  deleteFilterableattributes(x.id);
  const e_del = waitForFilterableattributesDeleted(id);
  block(matchAddFilterableattributes(id), function () {
    verifyFilterableattributesDoesNotExist(id);
  });
});

bthread("FromLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFrom(x.id);
  const e_add = waitForFromAdded(id);
  block(matchDeleteFrom(id), function () {
    verifyFromExists(id);
  });
  updateFrom(x.id);
  updateFrom(x.id);
  const e_upd = waitForFromUpdated(id);
  block(matchDeleteFrom(id), function () {
    verifyFromUpdated(id);
  });
  deleteFrom(x.id);
  const e_del = waitForFromDeleted(id);
  block(matchAddFrom(id), function () {
    verifyFromDoesNotExist(id);
  });
});

bthread("HitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHit(x.id);
  const e_add = waitForHitAdded(id);
  block(matchDeleteHit(id), function () {
    verifyHitExists(id);
  });
  updateHit(x.id);
  updateHit(x.id);
  const e_upd = waitForHitUpdated(id);
  block(matchDeleteHit(id), function () {
    verifyHitUpdated(id);
  });
  deleteHit(x.id);
  const e_del = waitForHitDeleted(id);
  block(matchAddHit(id), function () {
    verifyHitDoesNotExist(id);
  });
});

bthread("HitsperpageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHitsperpage(x.id);
  const e_add = waitForHitsperpageAdded(id);
  block(matchDeleteHitsperpage(id), function () {
    verifyHitsperpageExists(id);
  });
  updateHitsperpage(x.id);
  updateHitsperpage(x.id);
  const e_upd = waitForHitsperpageUpdated(id);
  block(matchDeleteHitsperpage(id), function () {
    verifyHitsperpageUpdated(id);
  });
  deleteHitsperpage(x.id);
  const e_del = waitForHitsperpageDeleted(id);
  block(matchAddHitsperpage(id), function () {
    verifyHitsperpageDoesNotExist(id);
  });
});

bthread("IndexLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIndex(x.id);
  const e_add = waitForIndexAdded(id);
  block(matchDeleteIndex(id), function () {
    verifyIndexExists(id);
  });
  updateIndex(x.id);
  updateIndex(x.id);
  const e_upd = waitForIndexUpdated(id);
  block(matchDeleteIndex(id), function () {
    verifyIndexUpdated(id);
  });
  deleteIndex(x.id);
  const e_del = waitForIndexDeleted(id);
  block(matchAddIndex(id), function () {
    verifyIndexDoesNotExist(id);
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

bthread("LimitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLimit(x.id);
  const e_add = waitForLimitAdded(id);
  block(matchDeleteLimit(id), function () {
    verifyLimitExists(id);
  });
  updateLimit(x.id);
  updateLimit(x.id);
  const e_upd = waitForLimitUpdated(id);
  block(matchDeleteLimit(id), function () {
    verifyLimitUpdated(id);
  });
  deleteLimit(x.id);
  const e_del = waitForLimitDeleted(id);
  block(matchAddLimit(id), function () {
    verifyLimitDoesNotExist(id);
  });
});

bthread("MatchespositionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMatchesposition(x.id);
  const e_add = waitForMatchespositionAdded(id);
  block(matchDeleteMatchesposition(id), function () {
    verifyMatchespositionExists(id);
  });
  updateMatchesposition(x.id);
  updateMatchesposition(x.id);
  const e_upd = waitForMatchespositionUpdated(id);
  block(matchDeleteMatchesposition(id), function () {
    verifyMatchespositionUpdated(id);
  });
  deleteMatchesposition(x.id);
  const e_del = waitForMatchespositionDeleted(id);
  block(matchAddMatchesposition(id), function () {
    verifyMatchespositionDoesNotExist(id);
  });
});

bthread("NextLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNext(x.id);
  const e_add = waitForNextAdded(id);
  block(matchDeleteNext(id), function () {
    verifyNextExists(id);
  });
  updateNext(x.id);
  updateNext(x.id);
  const e_upd = waitForNextUpdated(id);
  block(matchDeleteNext(id), function () {
    verifyNextUpdated(id);
  });
  deleteNext(x.id);
  const e_del = waitForNextDeleted(id);
  block(matchAddNext(id), function () {
    verifyNextDoesNotExist(id);
  });
});

bthread("NonseparatortokensLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNonseparatortokens(x.id);
  const e_add = waitForNonseparatortokensAdded(id);
  block(matchDeleteNonseparatortokens(id), function () {
    verifyNonseparatortokensExists(id);
  });
  updateNonseparatortokens(x.id);
  updateNonseparatortokens(x.id);
  const e_upd = waitForNonseparatortokensUpdated(id);
  block(matchDeleteNonseparatortokens(id), function () {
    verifyNonseparatortokensUpdated(id);
  });
  deleteNonseparatortokens(x.id);
  const e_del = waitForNonseparatortokensDeleted(id);
  block(matchAddNonseparatortokens(id), function () {
    verifyNonseparatortokensDoesNotExist(id);
  });
});

bthread("OffsetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOffset(x.id);
  const e_add = waitForOffsetAdded(id);
  block(matchDeleteOffset(id), function () {
    verifyOffsetExists(id);
  });
  updateOffset(x.id);
  updateOffset(x.id);
  const e_upd = waitForOffsetUpdated(id);
  block(matchDeleteOffset(id), function () {
    verifyOffsetUpdated(id);
  });
  deleteOffset(x.id);
  const e_del = waitForOffsetDeleted(id);
  block(matchAddOffset(id), function () {
    verifyOffsetDoesNotExist(id);
  });
});

bthread("OrderLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrder(x.id);
  const e_add = waitForOrderAdded(id);
  block(matchDeleteOrder(id), function () {
    verifyOrderExists(id);
  });
  updateOrder(x.id);
  updateOrder(x.id);
  const e_upd = waitForOrderUpdated(id);
  block(matchDeleteOrder(id), function () {
    verifyOrderUpdated(id);
  });
  deleteOrder(x.id);
  const e_del = waitForOrderDeleted(id);
  block(matchAddOrder(id), function () {
    verifyOrderDoesNotExist(id);
  });
});

bthread("PageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPage(x.id);
  const e_add = waitForPageAdded(id);
  block(matchDeletePage(id), function () {
    verifyPageExists(id);
  });
  updatePage(x.id);
  updatePage(x.id);
  const e_upd = waitForPageUpdated(id);
  block(matchDeletePage(id), function () {
    verifyPageUpdated(id);
  });
  deletePage(x.id);
  const e_del = waitForPageDeleted(id);
  block(matchAddPage(id), function () {
    verifyPageDoesNotExist(id);
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

bthread("RankingrulesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRankingrules(x.id);
  const e_add = waitForRankingrulesAdded(id);
  block(matchDeleteRankingrules(id), function () {
    verifyRankingrulesExists(id);
  });
  updateRankingrules(x.id);
  updateRankingrules(x.id);
  const e_upd = waitForRankingrulesUpdated(id);
  block(matchDeleteRankingrules(id), function () {
    verifyRankingrulesUpdated(id);
  });
  deleteRankingrules(x.id);
  const e_del = waitForRankingrulesDeleted(id);
  block(matchAddRankingrules(id), function () {
    verifyRankingrulesDoesNotExist(id);
  });
});

bthread("RankingscoredetailsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRankingscoredetails(x.id);
  const e_add = waitForRankingscoredetailsAdded(id);
  block(matchDeleteRankingscoredetails(id), function () {
    verifyRankingscoredetailsExists(id);
  });
  updateRankingscoredetails(x.id);
  updateRankingscoredetails(x.id);
  const e_upd = waitForRankingscoredetailsUpdated(id);
  block(matchDeleteRankingscoredetails(id), function () {
    verifyRankingscoredetailsUpdated(id);
  });
  deleteRankingscoredetails(x.id);
  const e_del = waitForRankingscoredetailsDeleted(id);
  block(matchAddRankingscoredetails(id), function () {
    verifyRankingscoredetailsDoesNotExist(id);
  });
});

bthread("ScoreLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScore(x.id);
  const e_add = waitForScoreAdded(id);
  block(matchDeleteScore(id), function () {
    verifyScoreExists(id);
  });
  updateScore(x.id);
  updateScore(x.id);
  const e_upd = waitForScoreUpdated(id);
  block(matchDeleteScore(id), function () {
    verifyScoreUpdated(id);
  });
  deleteScore(x.id);
  const e_del = waitForScoreDeleted(id);
  block(matchAddScore(id), function () {
    verifyScoreDoesNotExist(id);
  });
});

bthread("SearchableattributesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSearchableattributes(x.id);
  const e_add = waitForSearchableattributesAdded(id);
  block(matchDeleteSearchableattributes(id), function () {
    verifySearchableattributesExists(id);
  });
  updateSearchableattributes(x.id);
  updateSearchableattributes(x.id);
  const e_upd = waitForSearchableattributesUpdated(id);
  block(matchDeleteSearchableattributes(id), function () {
    verifySearchableattributesUpdated(id);
  });
  deleteSearchableattributes(x.id);
  const e_del = waitForSearchableattributesDeleted(id);
  block(matchAddSearchableattributes(id), function () {
    verifySearchableattributesDoesNotExist(id);
  });
});

bthread("SearchqueryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSearchquery(x.id);
  const e_add = waitForSearchqueryAdded(id);
  block(matchDeleteSearchquery(id), function () {
    verifySearchqueryExists(id);
  });
  updateSearchquery(x.id);
  updateSearchquery(x.id);
  const e_upd = waitForSearchqueryUpdated(id);
  block(matchDeleteSearchquery(id), function () {
    verifySearchqueryUpdated(id);
  });
  deleteSearchquery(x.id);
  const e_del = waitForSearchqueryDeleted(id);
  block(matchAddSearchquery(id), function () {
    verifySearchqueryDoesNotExist(id);
  });
});

bthread("SearchresponseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSearchresponse(x.id);
  const e_add = waitForSearchresponseAdded(id);
  block(matchDeleteSearchresponse(id), function () {
    verifySearchresponseExists(id);
  });
  updateSearchresponse(x.id);
  updateSearchresponse(x.id);
  const e_upd = waitForSearchresponseUpdated(id);
  block(matchDeleteSearchresponse(id), function () {
    verifySearchresponseUpdated(id);
  });
  deleteSearchresponse(x.id);
  const e_del = waitForSearchresponseDeleted(id);
  block(matchAddSearchresponse(id), function () {
    verifySearchresponseDoesNotExist(id);
  });
});

bthread("SeparatortokensLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSeparatortokens(x.id);
  const e_add = waitForSeparatortokensAdded(id);
  block(matchDeleteSeparatortokens(id), function () {
    verifySeparatortokensExists(id);
  });
  updateSeparatortokens(x.id);
  updateSeparatortokens(x.id);
  const e_upd = waitForSeparatortokensUpdated(id);
  block(matchDeleteSeparatortokens(id), function () {
    verifySeparatortokensUpdated(id);
  });
  deleteSeparatortokens(x.id);
  const e_del = waitForSeparatortokensDeleted(id);
  block(matchAddSeparatortokens(id), function () {
    verifySeparatortokensDoesNotExist(id);
  });
});

bthread("SettingsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSettings(x.id);
  const e_add = waitForSettingsAdded(id);
  block(matchDeleteSettings(id), function () {
    verifySettingsExists(id);
  });
  updateSettings(x.id);
  updateSettings(x.id);
  const e_upd = waitForSettingsUpdated(id);
  block(matchDeleteSettings(id), function () {
    verifySettingsUpdated(id);
  });
  deleteSettings(x.id);
  const e_del = waitForSettingsDeleted(id);
  block(matchAddSettings(id), function () {
    verifySettingsDoesNotExist(id);
  });
});

bthread("SortLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSort(x.id);
  const e_add = waitForSortAdded(id);
  block(matchDeleteSort(id), function () {
    verifySortExists(id);
  });
  updateSort(x.id);
  updateSort(x.id);
  const e_upd = waitForSortUpdated(id);
  block(matchDeleteSort(id), function () {
    verifySortUpdated(id);
  });
  deleteSort(x.id);
  const e_del = waitForSortDeleted(id);
  block(matchAddSort(id), function () {
    verifySortDoesNotExist(id);
  });
});

bthread("SortableattributesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSortableattributes(x.id);
  const e_add = waitForSortableattributesAdded(id);
  block(matchDeleteSortableattributes(id), function () {
    verifySortableattributesExists(id);
  });
  updateSortableattributes(x.id);
  updateSortableattributes(x.id);
  const e_upd = waitForSortableattributesUpdated(id);
  block(matchDeleteSortableattributes(id), function () {
    verifySortableattributesUpdated(id);
  });
  deleteSortableattributes(x.id);
  const e_del = waitForSortableattributesDeleted(id);
  block(matchAddSortableattributes(id), function () {
    verifySortableattributesDoesNotExist(id);
  });
});

bthread("StatsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStats(x.id);
  const e_add = waitForStatsAdded(id);
  block(matchDeleteStats(id), function () {
    verifyStatsExists(id);
  });
  updateStats(x.id);
  updateStats(x.id);
  const e_upd = waitForStatsUpdated(id);
  block(matchDeleteStats(id), function () {
    verifyStatsUpdated(id);
  });
  deleteStats(x.id);
  const e_del = waitForStatsDeleted(id);
  block(matchAddStats(id), function () {
    verifyStatsDoesNotExist(id);
  });
});

bthread("StopwordsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStopwords(x.id);
  const e_add = waitForStopwordsAdded(id);
  block(matchDeleteStopwords(id), function () {
    verifyStopwordsExists(id);
  });
  updateStopwords(x.id);
  updateStopwords(x.id);
  const e_upd = waitForStopwordsUpdated(id);
  block(matchDeleteStopwords(id), function () {
    verifyStopwordsUpdated(id);
  });
  deleteStopwords(x.id);
  const e_del = waitForStopwordsDeleted(id);
  block(matchAddStopwords(id), function () {
    verifyStopwordsDoesNotExist(id);
  });
});

bthread("SummarizedtaskLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSummarizedtask(x.id);
  const e_add = waitForSummarizedtaskAdded(id);
  block(matchDeleteSummarizedtask(id), function () {
    verifySummarizedtaskExists(id);
  });
  updateSummarizedtask(x.id);
  updateSummarizedtask(x.id);
  const e_upd = waitForSummarizedtaskUpdated(id);
  block(matchDeleteSummarizedtask(id), function () {
    verifySummarizedtaskUpdated(id);
  });
  deleteSummarizedtask(x.id);
  const e_del = waitForSummarizedtaskDeleted(id);
  block(matchAddSummarizedtask(id), function () {
    verifySummarizedtaskDoesNotExist(id);
  });
});

bthread("SwapindexesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSwapindexes(x.id);
  const e_add = waitForSwapindexesAdded(id);
  block(matchDeleteSwapindexes(id), function () {
    verifySwapindexesExists(id);
  });
  updateSwapindexes(x.id);
  updateSwapindexes(x.id);
  const e_upd = waitForSwapindexesUpdated(id);
  block(matchDeleteSwapindexes(id), function () {
    verifySwapindexesUpdated(id);
  });
  deleteSwapindexes(x.id);
  const e_del = waitForSwapindexesDeleted(id);
  block(matchAddSwapindexes(id), function () {
    verifySwapindexesDoesNotExist(id);
  });
});

bthread("SwapoperationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSwapoperation(x.id);
  const e_add = waitForSwapoperationAdded(id);
  block(matchDeleteSwapoperation(id), function () {
    verifySwapoperationExists(id);
  });
  updateSwapoperation(x.id);
  updateSwapoperation(x.id);
  const e_upd = waitForSwapoperationUpdated(id);
  block(matchDeleteSwapoperation(id), function () {
    verifySwapoperationUpdated(id);
  });
  deleteSwapoperation(x.id);
  const e_del = waitForSwapoperationDeleted(id);
  block(matchAddSwapoperation(id), function () {
    verifySwapoperationDoesNotExist(id);
  });
});

bthread("SynonymsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSynonyms(x.id);
  const e_add = waitForSynonymsAdded(id);
  block(matchDeleteSynonyms(id), function () {
    verifySynonymsExists(id);
  });
  updateSynonyms(x.id);
  updateSynonyms(x.id);
  const e_upd = waitForSynonymsUpdated(id);
  block(matchDeleteSynonyms(id), function () {
    verifySynonymsUpdated(id);
  });
  deleteSynonyms(x.id);
  const e_del = waitForSynonymsDeleted(id);
  block(matchAddSynonyms(id), function () {
    verifySynonymsDoesNotExist(id);
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

bthread("TimestampLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTimestamp(x.id);
  const e_add = waitForTimestampAdded(id);
  block(matchDeleteTimestamp(id), function () {
    verifyTimestampExists(id);
  });
  updateTimestamp(x.id);
  updateTimestamp(x.id);
  const e_upd = waitForTimestampUpdated(id);
  block(matchDeleteTimestamp(id), function () {
    verifyTimestampUpdated(id);
  });
  deleteTimestamp(x.id);
  const e_del = waitForTimestampDeleted(id);
  block(matchAddTimestamp(id), function () {
    verifyTimestampDoesNotExist(id);
  });
});

bthread("TotalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTotal(x.id);
  const e_add = waitForTotalAdded(id);
  block(matchDeleteTotal(id), function () {
    verifyTotalExists(id);
  });
  updateTotal(x.id);
  updateTotal(x.id);
  const e_upd = waitForTotalUpdated(id);
  block(matchDeleteTotal(id), function () {
    verifyTotalUpdated(id);
  });
  deleteTotal(x.id);
  const e_del = waitForTotalDeleted(id);
  block(matchAddTotal(id), function () {
    verifyTotalDoesNotExist(id);
  });
});

bthread("TotalhitsLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTotalhits(x.id);
  const e_add = waitForTotalhitsAdded(id);
  block(matchDeleteTotalhits(id), function () {
    verifyTotalhitsExists(id);
  });
  updateTotalhits(x.id);
  updateTotalhits(x.id);
  const e_upd = waitForTotalhitsUpdated(id);
  block(matchDeleteTotalhits(id), function () {
    verifyTotalhitsUpdated(id);
  });
  deleteTotalhits(x.id);
  const e_del = waitForTotalhitsDeleted(id);
  block(matchAddTotalhits(id), function () {
    verifyTotalhitsDoesNotExist(id);
  });
});

bthread("TotalpagesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTotalpages(x.id);
  const e_add = waitForTotalpagesAdded(id);
  block(matchDeleteTotalpages(id), function () {
    verifyTotalpagesExists(id);
  });
  updateTotalpages(x.id);
  updateTotalpages(x.id);
  const e_upd = waitForTotalpagesUpdated(id);
  block(matchDeleteTotalpages(id), function () {
    verifyTotalpagesUpdated(id);
  });
  deleteTotalpages(x.id);
  const e_del = waitForTotalpagesDeleted(id);
  block(matchAddTotalpages(id), function () {
    verifyTotalpagesDoesNotExist(id);
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

// ===== NONDET VARIANTS =====

bthread("Customrankingruledetails nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addCustomrankingruledetails(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomrankingruledetails(x.id);
  }
  if (pick([true,false])) { deleteCustomrankingruledetails(x.id); }
  verifyCustomrankingruledetailsExists(x.id);
  verifyCustomrankingruledetailsUpdated(x.id);
});

bthread("Customrankingruledetails nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCustomrankingruledetails(a.id);
  block(matchAddCustomrankingruledetails(a.id, ANY), function () {});
  addCustomrankingruledetails(b.id);
});

bthread("Dictionary nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addDictionary(x.id);
  for (var i=0; i<steps; i++) {
    updateDictionary(x.id);
  }
  if (pick([true,false])) { deleteDictionary(x.id); }
  verifyDictionaryExists(x.id);
  verifyDictionaryUpdated(x.id);
});

bthread("Dictionary nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDictionary(a.id);
  block(matchAddDictionary(a.id, ANY), function () {});
  addDictionary(b.id);
});

bthread("Displayedattributes nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addDisplayedattributes(x.id);
  for (var i=0; i<steps; i++) {
    updateDisplayedattributes(x.id);
  }
  if (pick([true,false])) { deleteDisplayedattributes(x.id); }
  verifyDisplayedattributesExists(x.id);
  verifyDisplayedattributesUpdated(x.id);
});

bthread("Displayedattributes nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDisplayedattributes(a.id);
  block(matchAddDisplayedattributes(a.id, ANY), function () {});
  addDisplayedattributes(b.id);
});

bthread("Distinctattribute nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDistinctattribute(a.id);
  block(matchAddDistinctattribute(a.id, ANY), function () {});
  addDistinctattribute(b.id);
});

bthread("Document nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDocument(a.id);
  block(matchAddDocument(a.id, ANY), function () {});
  addDocument(b.id);
});

bthread("Documentid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addDocumentid(x.id);
  for (var i=0; i<steps; i++) {
    updateDocumentid(x.id);
  }
  if (pick([true,false])) { deleteDocumentid(x.id); }
  verifyDocumentidExists(x.id);
  verifyDocumentidUpdated(x.id);
});

bthread("Documentid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDocumentid(a.id);
  block(matchAddDocumentid(a.id, ANY), function () {});
  addDocumentid(b.id);
});

bthread("Error nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addError(x.id);
  for (var i=0; i<steps; i++) {
    updateError(x.id);
  }
  if (pick([true,false])) { deleteError(x.id); }
  verifyErrorExists(x.id);
  verifyErrorUpdated(x.id);
});

bthread("Error nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addError(a.id);
  block(matchAddError(a.id, ANY), function () {});
  addError(b.id);
});

bthread("Facethit nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFacethit(x.id);
  for (var i=0; i<steps; i++) {
    updateFacethit(x.id);
  }
  if (pick([true,false])) { deleteFacethit(x.id); }
  verifyFacethitExists(x.id);
  verifyFacethitUpdated(x.id);
});

bthread("Facethit nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFacethit(a.id);
  block(matchAddFacethit(a.id, ANY), function () {});
  addFacethit(b.id);
});

bthread("Faceting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFaceting(a.id);
  block(matchAddFaceting(a.id, ANY), function () {});
  addFaceting(b.id);
});

bthread("Facetsearchquery nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFacetsearchquery(x.id);
  for (var i=0; i<steps; i++) {
    updateFacetsearchquery(x.id);
  }
  if (pick([true,false])) { deleteFacetsearchquery(x.id); }
  verifyFacetsearchqueryExists(x.id);
  verifyFacetsearchqueryUpdated(x.id);
});

bthread("Facetsearchquery nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFacetsearchquery(a.id);
  block(matchAddFacetsearchquery(a.id, ANY), function () {});
  addFacetsearchquery(b.id);
});

bthread("Facetsearchresponse nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFacetsearchresponse(x.id);
  for (var i=0; i<steps; i++) {
    updateFacetsearchresponse(x.id);
  }
  if (pick([true,false])) { deleteFacetsearchresponse(x.id); }
  verifyFacetsearchresponseExists(x.id);
  verifyFacetsearchresponseUpdated(x.id);
});

bthread("Facetsearchresponse nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFacetsearchresponse(a.id);
  block(matchAddFacetsearchresponse(a.id, ANY), function () {});
  addFacetsearchresponse(b.id);
});

bthread("Filter nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFilter(x.id);
  for (var i=0; i<steps; i++) {
    updateFilter(x.id);
  }
  if (pick([true,false])) { deleteFilter(x.id); }
  verifyFilterExists(x.id);
  verifyFilterUpdated(x.id);
});

bthread("Filter nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFilter(a.id);
  block(matchAddFilter(a.id, ANY), function () {});
  addFilter(b.id);
});

bthread("Filterableattributes nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFilterableattributes(x.id);
  for (var i=0; i<steps; i++) {
    updateFilterableattributes(x.id);
  }
  if (pick([true,false])) { deleteFilterableattributes(x.id); }
  verifyFilterableattributesExists(x.id);
  verifyFilterableattributesUpdated(x.id);
});

bthread("Filterableattributes nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFilterableattributes(a.id);
  block(matchAddFilterableattributes(a.id, ANY), function () {});
  addFilterableattributes(b.id);
});

bthread("From nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addFrom(x.id);
  for (var i=0; i<steps; i++) {
    updateFrom(x.id);
  }
  if (pick([true,false])) { deleteFrom(x.id); }
  verifyFromExists(x.id);
  verifyFromUpdated(x.id);
});

bthread("From nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFrom(a.id);
  block(matchAddFrom(a.id, ANY), function () {});
  addFrom(b.id);
});

bthread("Hit nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addHit(x.id);
  for (var i=0; i<steps; i++) {
    updateHit(x.id);
  }
  if (pick([true,false])) { deleteHit(x.id); }
  verifyHitExists(x.id);
  verifyHitUpdated(x.id);
});

bthread("Hit nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addHit(a.id);
  block(matchAddHit(a.id, ANY), function () {});
  addHit(b.id);
});

bthread("Hitsperpage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addHitsperpage(x.id);
  for (var i=0; i<steps; i++) {
    updateHitsperpage(x.id);
  }
  if (pick([true,false])) { deleteHitsperpage(x.id); }
  verifyHitsperpageExists(x.id);
  verifyHitsperpageUpdated(x.id);
});

bthread("Hitsperpage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addHitsperpage(a.id);
  block(matchAddHitsperpage(a.id, ANY), function () {});
  addHitsperpage(b.id);
});

bthread("Index nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addIndex(x.id);
  for (var i=0; i<steps; i++) {
    updateIndex(x.id);
  }
  if (pick([true,false])) { deleteIndex(x.id); }
  verifyIndexExists(x.id);
  verifyIndexUpdated(x.id);
});

bthread("Index nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIndex(a.id);
  block(matchAddIndex(a.id, ANY), function () {});
  addIndex(b.id);
});

bthread("Key nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addKey(a.id);
  block(matchAddKey(a.id, ANY), function () {});
  addKey(b.id);
});

bthread("Limit nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addLimit(x.id);
  for (var i=0; i<steps; i++) {
    updateLimit(x.id);
  }
  if (pick([true,false])) { deleteLimit(x.id); }
  verifyLimitExists(x.id);
  verifyLimitUpdated(x.id);
});

bthread("Limit nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLimit(a.id);
  block(matchAddLimit(a.id, ANY), function () {});
  addLimit(b.id);
});

bthread("Matchesposition nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addMatchesposition(x.id);
  for (var i=0; i<steps; i++) {
    updateMatchesposition(x.id);
  }
  if (pick([true,false])) { deleteMatchesposition(x.id); }
  verifyMatchespositionExists(x.id);
  verifyMatchespositionUpdated(x.id);
});

bthread("Matchesposition nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMatchesposition(a.id);
  block(matchAddMatchesposition(a.id, ANY), function () {});
  addMatchesposition(b.id);
});

bthread("Next nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addNext(x.id);
  for (var i=0; i<steps; i++) {
    updateNext(x.id);
  }
  if (pick([true,false])) { deleteNext(x.id); }
  verifyNextExists(x.id);
  verifyNextUpdated(x.id);
});

bthread("Next nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNext(a.id);
  block(matchAddNext(a.id, ANY), function () {});
  addNext(b.id);
});

bthread("Nonseparatortokens nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addNonseparatortokens(x.id);
  for (var i=0; i<steps; i++) {
    updateNonseparatortokens(x.id);
  }
  if (pick([true,false])) { deleteNonseparatortokens(x.id); }
  verifyNonseparatortokensExists(x.id);
  verifyNonseparatortokensUpdated(x.id);
});

bthread("Nonseparatortokens nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNonseparatortokens(a.id);
  block(matchAddNonseparatortokens(a.id, ANY), function () {});
  addNonseparatortokens(b.id);
});

bthread("Offset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOffset(x.id);
  for (var i=0; i<steps; i++) {
    updateOffset(x.id);
  }
  if (pick([true,false])) { deleteOffset(x.id); }
  verifyOffsetExists(x.id);
  verifyOffsetUpdated(x.id);
});

bthread("Offset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOffset(a.id);
  block(matchAddOffset(a.id, ANY), function () {});
  addOffset(b.id);
});

bthread("Order nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addOrder(x.id);
  for (var i=0; i<steps; i++) {
    updateOrder(x.id);
  }
  if (pick([true,false])) { deleteOrder(x.id); }
  verifyOrderExists(x.id);
  verifyOrderUpdated(x.id);
});

bthread("Order nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrder(a.id);
  block(matchAddOrder(a.id, ANY), function () {});
  addOrder(b.id);
});

bthread("Page nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addPage(x.id);
  for (var i=0; i<steps; i++) {
    updatePage(x.id);
  }
  if (pick([true,false])) { deletePage(x.id); }
  verifyPageExists(x.id);
  verifyPageUpdated(x.id);
});

bthread("Page nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPage(a.id);
  block(matchAddPage(a.id, ANY), function () {});
  addPage(b.id);
});

bthread("Pagination nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPagination(a.id);
  block(matchAddPagination(a.id, ANY), function () {});
  addPagination(b.id);
});

bthread("Rankingrules nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRankingrules(x.id);
  for (var i=0; i<steps; i++) {
    updateRankingrules(x.id);
  }
  if (pick([true,false])) { deleteRankingrules(x.id); }
  verifyRankingrulesExists(x.id);
  verifyRankingrulesUpdated(x.id);
});

bthread("Rankingrules nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRankingrules(a.id);
  block(matchAddRankingrules(a.id, ANY), function () {});
  addRankingrules(b.id);
});

bthread("Rankingscoredetails nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addRankingscoredetails(x.id);
  for (var i=0; i<steps; i++) {
    updateRankingscoredetails(x.id);
  }
  if (pick([true,false])) { deleteRankingscoredetails(x.id); }
  verifyRankingscoredetailsExists(x.id);
  verifyRankingscoredetailsUpdated(x.id);
});

bthread("Rankingscoredetails nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRankingscoredetails(a.id);
  block(matchAddRankingscoredetails(a.id, ANY), function () {});
  addRankingscoredetails(b.id);
});

bthread("Score nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addScore(x.id);
  for (var i=0; i<steps; i++) {
    updateScore(x.id);
  }
  if (pick([true,false])) { deleteScore(x.id); }
  verifyScoreExists(x.id);
  verifyScoreUpdated(x.id);
});

bthread("Score nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addScore(a.id);
  block(matchAddScore(a.id, ANY), function () {});
  addScore(b.id);
});

bthread("Searchableattributes nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSearchableattributes(x.id);
  for (var i=0; i<steps; i++) {
    updateSearchableattributes(x.id);
  }
  if (pick([true,false])) { deleteSearchableattributes(x.id); }
  verifySearchableattributesExists(x.id);
  verifySearchableattributesUpdated(x.id);
});

bthread("Searchableattributes nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSearchableattributes(a.id);
  block(matchAddSearchableattributes(a.id, ANY), function () {});
  addSearchableattributes(b.id);
});

bthread("Searchquery nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSearchquery(x.id);
  for (var i=0; i<steps; i++) {
    updateSearchquery(x.id);
  }
  if (pick([true,false])) { deleteSearchquery(x.id); }
  verifySearchqueryExists(x.id);
  verifySearchqueryUpdated(x.id);
});

bthread("Searchquery nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSearchquery(a.id);
  block(matchAddSearchquery(a.id, ANY), function () {});
  addSearchquery(b.id);
});

bthread("Searchresponse nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSearchresponse(x.id);
  for (var i=0; i<steps; i++) {
    updateSearchresponse(x.id);
  }
  if (pick([true,false])) { deleteSearchresponse(x.id); }
  verifySearchresponseExists(x.id);
  verifySearchresponseUpdated(x.id);
});

bthread("Searchresponse nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSearchresponse(a.id);
  block(matchAddSearchresponse(a.id, ANY), function () {});
  addSearchresponse(b.id);
});

bthread("Separatortokens nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSeparatortokens(x.id);
  for (var i=0; i<steps; i++) {
    updateSeparatortokens(x.id);
  }
  if (pick([true,false])) { deleteSeparatortokens(x.id); }
  verifySeparatortokensExists(x.id);
  verifySeparatortokensUpdated(x.id);
});

bthread("Separatortokens nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSeparatortokens(a.id);
  block(matchAddSeparatortokens(a.id, ANY), function () {});
  addSeparatortokens(b.id);
});

bthread("Settings nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSettings(x.id);
  for (var i=0; i<steps; i++) {
    updateSettings(x.id);
  }
  if (pick([true,false])) { deleteSettings(x.id); }
  verifySettingsExists(x.id);
  verifySettingsUpdated(x.id);
});

bthread("Settings nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSettings(a.id);
  block(matchAddSettings(a.id, ANY), function () {});
  addSettings(b.id);
});

bthread("Sort nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSort(x.id);
  for (var i=0; i<steps; i++) {
    updateSort(x.id);
  }
  if (pick([true,false])) { deleteSort(x.id); }
  verifySortExists(x.id);
  verifySortUpdated(x.id);
});

bthread("Sort nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSort(a.id);
  block(matchAddSort(a.id, ANY), function () {});
  addSort(b.id);
});

bthread("Sortableattributes nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSortableattributes(x.id);
  for (var i=0; i<steps; i++) {
    updateSortableattributes(x.id);
  }
  if (pick([true,false])) { deleteSortableattributes(x.id); }
  verifySortableattributesExists(x.id);
  verifySortableattributesUpdated(x.id);
});

bthread("Sortableattributes nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSortableattributes(a.id);
  block(matchAddSortableattributes(a.id, ANY), function () {});
  addSortableattributes(b.id);
});

bthread("Stats nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addStats(x.id);
  for (var i=0; i<steps; i++) {
    updateStats(x.id);
  }
  if (pick([true,false])) { deleteStats(x.id); }
  verifyStatsExists(x.id);
  verifyStatsUpdated(x.id);
});

bthread("Stats nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStats(a.id);
  block(matchAddStats(a.id, ANY), function () {});
  addStats(b.id);
});

bthread("Stopwords nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addStopwords(x.id);
  for (var i=0; i<steps; i++) {
    updateStopwords(x.id);
  }
  if (pick([true,false])) { deleteStopwords(x.id); }
  verifyStopwordsExists(x.id);
  verifyStopwordsUpdated(x.id);
});

bthread("Stopwords nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStopwords(a.id);
  block(matchAddStopwords(a.id, ANY), function () {});
  addStopwords(b.id);
});

bthread("Summarizedtask nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSummarizedtask(x.id);
  for (var i=0; i<steps; i++) {
    updateSummarizedtask(x.id);
  }
  if (pick([true,false])) { deleteSummarizedtask(x.id); }
  verifySummarizedtaskExists(x.id);
  verifySummarizedtaskUpdated(x.id);
});

bthread("Summarizedtask nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSummarizedtask(a.id);
  block(matchAddSummarizedtask(a.id, ANY), function () {});
  addSummarizedtask(b.id);
});

bthread("Swapindexes nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSwapindexes(x.id);
  for (var i=0; i<steps; i++) {
    updateSwapindexes(x.id);
  }
  if (pick([true,false])) { deleteSwapindexes(x.id); }
  verifySwapindexesExists(x.id);
  verifySwapindexesUpdated(x.id);
});

bthread("Swapindexes nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSwapindexes(a.id);
  block(matchAddSwapindexes(a.id, ANY), function () {});
  addSwapindexes(b.id);
});

bthread("Swapoperation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSwapoperation(x.id);
  for (var i=0; i<steps; i++) {
    updateSwapoperation(x.id);
  }
  if (pick([true,false])) { deleteSwapoperation(x.id); }
  verifySwapoperationExists(x.id);
  verifySwapoperationUpdated(x.id);
});

bthread("Swapoperation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSwapoperation(a.id);
  block(matchAddSwapoperation(a.id, ANY), function () {});
  addSwapoperation(b.id);
});

bthread("Synonyms nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addSynonyms(x.id);
  for (var i=0; i<steps; i++) {
    updateSynonyms(x.id);
  }
  if (pick([true,false])) { deleteSynonyms(x.id); }
  verifySynonymsExists(x.id);
  verifySynonymsUpdated(x.id);
});

bthread("Synonyms nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSynonyms(a.id);
  block(matchAddSynonyms(a.id, ANY), function () {});
  addSynonyms(b.id);
});

bthread("Task nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTask(a.id);
  block(matchAddTask(a.id, ANY), function () {});
  addTask(b.id);
});

bthread("Timestamp nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addTimestamp(x.id);
  for (var i=0; i<steps; i++) {
    updateTimestamp(x.id);
  }
  if (pick([true,false])) { deleteTimestamp(x.id); }
  verifyTimestampExists(x.id);
  verifyTimestampUpdated(x.id);
});

bthread("Timestamp nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTimestamp(a.id);
  block(matchAddTimestamp(a.id, ANY), function () {});
  addTimestamp(b.id);
});

bthread("Total nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addTotal(x.id);
  for (var i=0; i<steps; i++) {
    updateTotal(x.id);
  }
  if (pick([true,false])) { deleteTotal(x.id); }
  verifyTotalExists(x.id);
  verifyTotalUpdated(x.id);
});

bthread("Total nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTotal(a.id);
  block(matchAddTotal(a.id, ANY), function () {});
  addTotal(b.id);
});

bthread("Totalhits nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addTotalhits(x.id);
  for (var i=0; i<steps; i++) {
    updateTotalhits(x.id);
  }
  if (pick([true,false])) { deleteTotalhits(x.id); }
  verifyTotalhitsExists(x.id);
  verifyTotalhitsUpdated(x.id);
});

bthread("Totalhits nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTotalhits(a.id);
  block(matchAddTotalhits(a.id, ANY), function () {});
  addTotalhits(b.id);
});

bthread("Totalpages nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
  addTotalpages(x.id);
  for (var i=0; i<steps; i++) {
    updateTotalpages(x.id);
  }
  if (pick([true,false])) { deleteTotalpages(x.id); }
  verifyTotalpagesExists(x.id);
  verifyTotalpagesUpdated(x.id);
});

bthread("Totalpages nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTotalpages(a.id);
  block(matchAddTotalpages(a.id, ANY), function () {});
  addTotalpages(b.id);
});

bthread("Typotolerance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,3]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTypotolerance(a.id);
  block(matchAddTypotolerance(a.id, ANY), function () {});
  addTypotolerance(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Customrankingruledetails create verification", function () {
  const e = waitForAnyCustomrankingruledetailsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomrankingruledetails(k), function () {
    verifyCustomrankingruledetailsExists(k);
  });
});

bthread("Customrankingruledetails update verification", function () {
  const e = waitForAnyCustomrankingruledetailsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomrankingruledetails(k), function () {
    verifyCustomrankingruledetailsUpdated(k);
  });
});

bthread("Customrankingruledetails delete verification", function () {
  const e = waitForAnyCustomrankingruledetailsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCustomrankingruledetails(k), function () {
    verifyCustomrankingruledetailsDoesNotExist(k);
  });
});

bthread("Dictionary create verification", function () {
  const e = waitForAnyDictionaryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDictionary(k), function () {
    verifyDictionaryExists(k);
  });
});

bthread("Dictionary update verification", function () {
  const e = waitForAnyDictionaryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDictionary(k), function () {
    verifyDictionaryUpdated(k);
  });
});

bthread("Dictionary delete verification", function () {
  const e = waitForAnyDictionaryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDictionary(k), function () {
    verifyDictionaryDoesNotExist(k);
  });
});

bthread("Displayedattributes create verification", function () {
  const e = waitForAnyDisplayedattributesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisplayedattributes(k), function () {
    verifyDisplayedattributesExists(k);
  });
});

bthread("Displayedattributes update verification", function () {
  const e = waitForAnyDisplayedattributesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisplayedattributes(k), function () {
    verifyDisplayedattributesUpdated(k);
  });
});

bthread("Displayedattributes delete verification", function () {
  const e = waitForAnyDisplayedattributesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDisplayedattributes(k), function () {
    verifyDisplayedattributesDoesNotExist(k);
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

bthread("Documentid create verification", function () {
  const e = waitForAnyDocumentidAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDocumentid(k), function () {
    verifyDocumentidExists(k);
  });
});

bthread("Documentid update verification", function () {
  const e = waitForAnyDocumentidUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDocumentid(k), function () {
    verifyDocumentidUpdated(k);
  });
});

bthread("Documentid delete verification", function () {
  const e = waitForAnyDocumentidDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDocumentid(k), function () {
    verifyDocumentidDoesNotExist(k);
  });
});

bthread("Error create verification", function () {
  const e = waitForAnyErrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteError(k), function () {
    verifyErrorExists(k);
  });
});

bthread("Error update verification", function () {
  const e = waitForAnyErrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteError(k), function () {
    verifyErrorUpdated(k);
  });
});

bthread("Error delete verification", function () {
  const e = waitForAnyErrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddError(k), function () {
    verifyErrorDoesNotExist(k);
  });
});

bthread("Facethit create verification", function () {
  const e = waitForAnyFacethitAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFacethit(k), function () {
    verifyFacethitExists(k);
  });
});

bthread("Facethit update verification", function () {
  const e = waitForAnyFacethitUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFacethit(k), function () {
    verifyFacethitUpdated(k);
  });
});

bthread("Facethit delete verification", function () {
  const e = waitForAnyFacethitDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFacethit(k), function () {
    verifyFacethitDoesNotExist(k);
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

bthread("Facetsearchquery create verification", function () {
  const e = waitForAnyFacetsearchqueryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFacetsearchquery(k), function () {
    verifyFacetsearchqueryExists(k);
  });
});

bthread("Facetsearchquery update verification", function () {
  const e = waitForAnyFacetsearchqueryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFacetsearchquery(k), function () {
    verifyFacetsearchqueryUpdated(k);
  });
});

bthread("Facetsearchquery delete verification", function () {
  const e = waitForAnyFacetsearchqueryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFacetsearchquery(k), function () {
    verifyFacetsearchqueryDoesNotExist(k);
  });
});

bthread("Facetsearchresponse create verification", function () {
  const e = waitForAnyFacetsearchresponseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFacetsearchresponse(k), function () {
    verifyFacetsearchresponseExists(k);
  });
});

bthread("Facetsearchresponse update verification", function () {
  const e = waitForAnyFacetsearchresponseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFacetsearchresponse(k), function () {
    verifyFacetsearchresponseUpdated(k);
  });
});

bthread("Facetsearchresponse delete verification", function () {
  const e = waitForAnyFacetsearchresponseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFacetsearchresponse(k), function () {
    verifyFacetsearchresponseDoesNotExist(k);
  });
});

bthread("Filter create verification", function () {
  const e = waitForAnyFilterAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFilter(k), function () {
    verifyFilterExists(k);
  });
});

bthread("Filter update verification", function () {
  const e = waitForAnyFilterUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFilter(k), function () {
    verifyFilterUpdated(k);
  });
});

bthread("Filter delete verification", function () {
  const e = waitForAnyFilterDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFilter(k), function () {
    verifyFilterDoesNotExist(k);
  });
});

bthread("Filterableattributes create verification", function () {
  const e = waitForAnyFilterableattributesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFilterableattributes(k), function () {
    verifyFilterableattributesExists(k);
  });
});

bthread("Filterableattributes update verification", function () {
  const e = waitForAnyFilterableattributesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFilterableattributes(k), function () {
    verifyFilterableattributesUpdated(k);
  });
});

bthread("Filterableattributes delete verification", function () {
  const e = waitForAnyFilterableattributesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFilterableattributes(k), function () {
    verifyFilterableattributesDoesNotExist(k);
  });
});

bthread("From create verification", function () {
  const e = waitForAnyFromAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFrom(k), function () {
    verifyFromExists(k);
  });
});

bthread("From update verification", function () {
  const e = waitForAnyFromUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFrom(k), function () {
    verifyFromUpdated(k);
  });
});

bthread("From delete verification", function () {
  const e = waitForAnyFromDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFrom(k), function () {
    verifyFromDoesNotExist(k);
  });
});

bthread("Hit create verification", function () {
  const e = waitForAnyHitAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHit(k), function () {
    verifyHitExists(k);
  });
});

bthread("Hit update verification", function () {
  const e = waitForAnyHitUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHit(k), function () {
    verifyHitUpdated(k);
  });
});

bthread("Hit delete verification", function () {
  const e = waitForAnyHitDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHit(k), function () {
    verifyHitDoesNotExist(k);
  });
});

bthread("Hitsperpage create verification", function () {
  const e = waitForAnyHitsperpageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHitsperpage(k), function () {
    verifyHitsperpageExists(k);
  });
});

bthread("Hitsperpage update verification", function () {
  const e = waitForAnyHitsperpageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHitsperpage(k), function () {
    verifyHitsperpageUpdated(k);
  });
});

bthread("Hitsperpage delete verification", function () {
  const e = waitForAnyHitsperpageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHitsperpage(k), function () {
    verifyHitsperpageDoesNotExist(k);
  });
});

bthread("Index create verification", function () {
  const e = waitForAnyIndexAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIndex(k), function () {
    verifyIndexExists(k);
  });
});

bthread("Index update verification", function () {
  const e = waitForAnyIndexUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIndex(k), function () {
    verifyIndexUpdated(k);
  });
});

bthread("Index delete verification", function () {
  const e = waitForAnyIndexDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIndex(k), function () {
    verifyIndexDoesNotExist(k);
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

bthread("Limit create verification", function () {
  const e = waitForAnyLimitAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLimit(k), function () {
    verifyLimitExists(k);
  });
});

bthread("Limit update verification", function () {
  const e = waitForAnyLimitUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLimit(k), function () {
    verifyLimitUpdated(k);
  });
});

bthread("Limit delete verification", function () {
  const e = waitForAnyLimitDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLimit(k), function () {
    verifyLimitDoesNotExist(k);
  });
});

bthread("Matchesposition create verification", function () {
  const e = waitForAnyMatchespositionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMatchesposition(k), function () {
    verifyMatchespositionExists(k);
  });
});

bthread("Matchesposition update verification", function () {
  const e = waitForAnyMatchespositionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMatchesposition(k), function () {
    verifyMatchespositionUpdated(k);
  });
});

bthread("Matchesposition delete verification", function () {
  const e = waitForAnyMatchespositionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMatchesposition(k), function () {
    verifyMatchespositionDoesNotExist(k);
  });
});

bthread("Next create verification", function () {
  const e = waitForAnyNextAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNext(k), function () {
    verifyNextExists(k);
  });
});

bthread("Next update verification", function () {
  const e = waitForAnyNextUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNext(k), function () {
    verifyNextUpdated(k);
  });
});

bthread("Next delete verification", function () {
  const e = waitForAnyNextDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNext(k), function () {
    verifyNextDoesNotExist(k);
  });
});

bthread("Nonseparatortokens create verification", function () {
  const e = waitForAnyNonseparatortokensAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNonseparatortokens(k), function () {
    verifyNonseparatortokensExists(k);
  });
});

bthread("Nonseparatortokens update verification", function () {
  const e = waitForAnyNonseparatortokensUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNonseparatortokens(k), function () {
    verifyNonseparatortokensUpdated(k);
  });
});

bthread("Nonseparatortokens delete verification", function () {
  const e = waitForAnyNonseparatortokensDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNonseparatortokens(k), function () {
    verifyNonseparatortokensDoesNotExist(k);
  });
});

bthread("Offset create verification", function () {
  const e = waitForAnyOffsetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOffset(k), function () {
    verifyOffsetExists(k);
  });
});

bthread("Offset update verification", function () {
  const e = waitForAnyOffsetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOffset(k), function () {
    verifyOffsetUpdated(k);
  });
});

bthread("Offset delete verification", function () {
  const e = waitForAnyOffsetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOffset(k), function () {
    verifyOffsetDoesNotExist(k);
  });
});

bthread("Order create verification", function () {
  const e = waitForAnyOrderAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrder(k), function () {
    verifyOrderExists(k);
  });
});

bthread("Order update verification", function () {
  const e = waitForAnyOrderUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrder(k), function () {
    verifyOrderUpdated(k);
  });
});

bthread("Order delete verification", function () {
  const e = waitForAnyOrderDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrder(k), function () {
    verifyOrderDoesNotExist(k);
  });
});

bthread("Page create verification", function () {
  const e = waitForAnyPageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePage(k), function () {
    verifyPageExists(k);
  });
});

bthread("Page update verification", function () {
  const e = waitForAnyPageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePage(k), function () {
    verifyPageUpdated(k);
  });
});

bthread("Page delete verification", function () {
  const e = waitForAnyPageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPage(k), function () {
    verifyPageDoesNotExist(k);
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

bthread("Rankingrules create verification", function () {
  const e = waitForAnyRankingrulesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRankingrules(k), function () {
    verifyRankingrulesExists(k);
  });
});

bthread("Rankingrules update verification", function () {
  const e = waitForAnyRankingrulesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRankingrules(k), function () {
    verifyRankingrulesUpdated(k);
  });
});

bthread("Rankingrules delete verification", function () {
  const e = waitForAnyRankingrulesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRankingrules(k), function () {
    verifyRankingrulesDoesNotExist(k);
  });
});

bthread("Rankingscoredetails create verification", function () {
  const e = waitForAnyRankingscoredetailsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRankingscoredetails(k), function () {
    verifyRankingscoredetailsExists(k);
  });
});

bthread("Rankingscoredetails update verification", function () {
  const e = waitForAnyRankingscoredetailsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRankingscoredetails(k), function () {
    verifyRankingscoredetailsUpdated(k);
  });
});

bthread("Rankingscoredetails delete verification", function () {
  const e = waitForAnyRankingscoredetailsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRankingscoredetails(k), function () {
    verifyRankingscoredetailsDoesNotExist(k);
  });
});

bthread("Score create verification", function () {
  const e = waitForAnyScoreAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScore(k), function () {
    verifyScoreExists(k);
  });
});

bthread("Score update verification", function () {
  const e = waitForAnyScoreUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScore(k), function () {
    verifyScoreUpdated(k);
  });
});

bthread("Score delete verification", function () {
  const e = waitForAnyScoreDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScore(k), function () {
    verifyScoreDoesNotExist(k);
  });
});

bthread("Searchableattributes create verification", function () {
  const e = waitForAnySearchableattributesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearchableattributes(k), function () {
    verifySearchableattributesExists(k);
  });
});

bthread("Searchableattributes update verification", function () {
  const e = waitForAnySearchableattributesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearchableattributes(k), function () {
    verifySearchableattributesUpdated(k);
  });
});

bthread("Searchableattributes delete verification", function () {
  const e = waitForAnySearchableattributesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSearchableattributes(k), function () {
    verifySearchableattributesDoesNotExist(k);
  });
});

bthread("Searchquery create verification", function () {
  const e = waitForAnySearchqueryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearchquery(k), function () {
    verifySearchqueryExists(k);
  });
});

bthread("Searchquery update verification", function () {
  const e = waitForAnySearchqueryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearchquery(k), function () {
    verifySearchqueryUpdated(k);
  });
});

bthread("Searchquery delete verification", function () {
  const e = waitForAnySearchqueryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSearchquery(k), function () {
    verifySearchqueryDoesNotExist(k);
  });
});

bthread("Searchresponse create verification", function () {
  const e = waitForAnySearchresponseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearchresponse(k), function () {
    verifySearchresponseExists(k);
  });
});

bthread("Searchresponse update verification", function () {
  const e = waitForAnySearchresponseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSearchresponse(k), function () {
    verifySearchresponseUpdated(k);
  });
});

bthread("Searchresponse delete verification", function () {
  const e = waitForAnySearchresponseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSearchresponse(k), function () {
    verifySearchresponseDoesNotExist(k);
  });
});

bthread("Separatortokens create verification", function () {
  const e = waitForAnySeparatortokensAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSeparatortokens(k), function () {
    verifySeparatortokensExists(k);
  });
});

bthread("Separatortokens update verification", function () {
  const e = waitForAnySeparatortokensUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSeparatortokens(k), function () {
    verifySeparatortokensUpdated(k);
  });
});

bthread("Separatortokens delete verification", function () {
  const e = waitForAnySeparatortokensDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSeparatortokens(k), function () {
    verifySeparatortokensDoesNotExist(k);
  });
});

bthread("Settings create verification", function () {
  const e = waitForAnySettingsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSettings(k), function () {
    verifySettingsExists(k);
  });
});

bthread("Settings update verification", function () {
  const e = waitForAnySettingsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSettings(k), function () {
    verifySettingsUpdated(k);
  });
});

bthread("Settings delete verification", function () {
  const e = waitForAnySettingsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSettings(k), function () {
    verifySettingsDoesNotExist(k);
  });
});

bthread("Sort create verification", function () {
  const e = waitForAnySortAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSort(k), function () {
    verifySortExists(k);
  });
});

bthread("Sort update verification", function () {
  const e = waitForAnySortUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSort(k), function () {
    verifySortUpdated(k);
  });
});

bthread("Sort delete verification", function () {
  const e = waitForAnySortDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSort(k), function () {
    verifySortDoesNotExist(k);
  });
});

bthread("Sortableattributes create verification", function () {
  const e = waitForAnySortableattributesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSortableattributes(k), function () {
    verifySortableattributesExists(k);
  });
});

bthread("Sortableattributes update verification", function () {
  const e = waitForAnySortableattributesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSortableattributes(k), function () {
    verifySortableattributesUpdated(k);
  });
});

bthread("Sortableattributes delete verification", function () {
  const e = waitForAnySortableattributesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSortableattributes(k), function () {
    verifySortableattributesDoesNotExist(k);
  });
});

bthread("Stats create verification", function () {
  const e = waitForAnyStatsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStats(k), function () {
    verifyStatsExists(k);
  });
});

bthread("Stats update verification", function () {
  const e = waitForAnyStatsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStats(k), function () {
    verifyStatsUpdated(k);
  });
});

bthread("Stats delete verification", function () {
  const e = waitForAnyStatsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStats(k), function () {
    verifyStatsDoesNotExist(k);
  });
});

bthread("Stopwords create verification", function () {
  const e = waitForAnyStopwordsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStopwords(k), function () {
    verifyStopwordsExists(k);
  });
});

bthread("Stopwords update verification", function () {
  const e = waitForAnyStopwordsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStopwords(k), function () {
    verifyStopwordsUpdated(k);
  });
});

bthread("Stopwords delete verification", function () {
  const e = waitForAnyStopwordsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStopwords(k), function () {
    verifyStopwordsDoesNotExist(k);
  });
});

bthread("Summarizedtask create verification", function () {
  const e = waitForAnySummarizedtaskAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSummarizedtask(k), function () {
    verifySummarizedtaskExists(k);
  });
});

bthread("Summarizedtask update verification", function () {
  const e = waitForAnySummarizedtaskUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSummarizedtask(k), function () {
    verifySummarizedtaskUpdated(k);
  });
});

bthread("Summarizedtask delete verification", function () {
  const e = waitForAnySummarizedtaskDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSummarizedtask(k), function () {
    verifySummarizedtaskDoesNotExist(k);
  });
});

bthread("Swapindexes create verification", function () {
  const e = waitForAnySwapindexesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSwapindexes(k), function () {
    verifySwapindexesExists(k);
  });
});

bthread("Swapindexes update verification", function () {
  const e = waitForAnySwapindexesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSwapindexes(k), function () {
    verifySwapindexesUpdated(k);
  });
});

bthread("Swapindexes delete verification", function () {
  const e = waitForAnySwapindexesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSwapindexes(k), function () {
    verifySwapindexesDoesNotExist(k);
  });
});

bthread("Swapoperation create verification", function () {
  const e = waitForAnySwapoperationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSwapoperation(k), function () {
    verifySwapoperationExists(k);
  });
});

bthread("Swapoperation update verification", function () {
  const e = waitForAnySwapoperationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSwapoperation(k), function () {
    verifySwapoperationUpdated(k);
  });
});

bthread("Swapoperation delete verification", function () {
  const e = waitForAnySwapoperationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSwapoperation(k), function () {
    verifySwapoperationDoesNotExist(k);
  });
});

bthread("Synonyms create verification", function () {
  const e = waitForAnySynonymsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSynonyms(k), function () {
    verifySynonymsExists(k);
  });
});

bthread("Synonyms update verification", function () {
  const e = waitForAnySynonymsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSynonyms(k), function () {
    verifySynonymsUpdated(k);
  });
});

bthread("Synonyms delete verification", function () {
  const e = waitForAnySynonymsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSynonyms(k), function () {
    verifySynonymsDoesNotExist(k);
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

bthread("Timestamp create verification", function () {
  const e = waitForAnyTimestampAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTimestamp(k), function () {
    verifyTimestampExists(k);
  });
});

bthread("Timestamp update verification", function () {
  const e = waitForAnyTimestampUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTimestamp(k), function () {
    verifyTimestampUpdated(k);
  });
});

bthread("Timestamp delete verification", function () {
  const e = waitForAnyTimestampDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTimestamp(k), function () {
    verifyTimestampDoesNotExist(k);
  });
});

bthread("Total create verification", function () {
  const e = waitForAnyTotalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTotal(k), function () {
    verifyTotalExists(k);
  });
});

bthread("Total update verification", function () {
  const e = waitForAnyTotalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTotal(k), function () {
    verifyTotalUpdated(k);
  });
});

bthread("Total delete verification", function () {
  const e = waitForAnyTotalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTotal(k), function () {
    verifyTotalDoesNotExist(k);
  });
});

bthread("Totalhits create verification", function () {
  const e = waitForAnyTotalhitsAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTotalhits(k), function () {
    verifyTotalhitsExists(k);
  });
});

bthread("Totalhits update verification", function () {
  const e = waitForAnyTotalhitsUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTotalhits(k), function () {
    verifyTotalhitsUpdated(k);
  });
});

bthread("Totalhits delete verification", function () {
  const e = waitForAnyTotalhitsDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTotalhits(k), function () {
    verifyTotalhitsDoesNotExist(k);
  });
});

bthread("Totalpages create verification", function () {
  const e = waitForAnyTotalpagesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTotalpages(k), function () {
    verifyTotalpagesExists(k);
  });
});

bthread("Totalpages update verification", function () {
  const e = waitForAnyTotalpagesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTotalpages(k), function () {
    verifyTotalpagesUpdated(k);
  });
});

bthread("Totalpages delete verification", function () {
  const e = waitForAnyTotalpagesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTotalpages(k), function () {
    verifyTotalpagesDoesNotExist(k);
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

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Customrankingruledetails", function () {
  const x = waitForAnyCustomrankingruledetailsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCustomrankingruledetails(k, ANY), function () {});
});

bthread("Guard: Unique Dictionary", function () {
  const x = waitForAnyDictionaryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDictionary(k, ANY), function () {});
});

bthread("Guard: Unique Displayedattributes", function () {
  const x = waitForAnyDisplayedattributesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDisplayedattributes(k, ANY), function () {});
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

bthread("Guard: Unique Documentid", function () {
  const x = waitForAnyDocumentidAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDocumentid(k, ANY), function () {});
});

bthread("Guard: Unique Error", function () {
  const x = waitForAnyErrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddError(k, ANY), function () {});
});

bthread("Guard: Unique Facethit", function () {
  const x = waitForAnyFacethitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFacethit(k, ANY), function () {});
});

bthread("Guard: Unique Faceting", function () {
  const x = waitForAnyFacetingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFaceting(k, ANY), function () {});
});

bthread("Guard: Unique Facetsearchquery", function () {
  const x = waitForAnyFacetsearchqueryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFacetsearchquery(k, ANY), function () {});
});

bthread("Guard: Unique Facetsearchresponse", function () {
  const x = waitForAnyFacetsearchresponseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFacetsearchresponse(k, ANY), function () {});
});

bthread("Guard: Unique Filter", function () {
  const x = waitForAnyFilterAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFilter(k, ANY), function () {});
});

bthread("Guard: Unique Filterableattributes", function () {
  const x = waitForAnyFilterableattributesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFilterableattributes(k, ANY), function () {});
});

bthread("Guard: Unique From", function () {
  const x = waitForAnyFromAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFrom(k, ANY), function () {});
});

bthread("Guard: Unique Hit", function () {
  const x = waitForAnyHitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHit(k, ANY), function () {});
});

bthread("Guard: Unique Hitsperpage", function () {
  const x = waitForAnyHitsperpageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHitsperpage(k, ANY), function () {});
});

bthread("Guard: Unique Index", function () {
  const x = waitForAnyIndexAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIndex(k, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKey(k, ANY), function () {});
});

bthread("Guard: Unique Limit", function () {
  const x = waitForAnyLimitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLimit(k, ANY), function () {});
});

bthread("Guard: Unique Matchesposition", function () {
  const x = waitForAnyMatchespositionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMatchesposition(k, ANY), function () {});
});

bthread("Guard: Unique Next", function () {
  const x = waitForAnyNextAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNext(k, ANY), function () {});
});

bthread("Guard: Unique Nonseparatortokens", function () {
  const x = waitForAnyNonseparatortokensAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNonseparatortokens(k, ANY), function () {});
});

bthread("Guard: Unique Offset", function () {
  const x = waitForAnyOffsetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOffset(k, ANY), function () {});
});

bthread("Guard: Unique Order", function () {
  const x = waitForAnyOrderAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrder(k, ANY), function () {});
});

bthread("Guard: Unique Page", function () {
  const x = waitForAnyPageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPage(k, ANY), function () {});
});

bthread("Guard: Unique Pagination", function () {
  const x = waitForAnyPaginationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPagination(k, ANY), function () {});
});

bthread("Guard: Unique Rankingrules", function () {
  const x = waitForAnyRankingrulesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRankingrules(k, ANY), function () {});
});

bthread("Guard: Unique Rankingscoredetails", function () {
  const x = waitForAnyRankingscoredetailsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRankingscoredetails(k, ANY), function () {});
});

bthread("Guard: Unique Score", function () {
  const x = waitForAnyScoreAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScore(k, ANY), function () {});
});

bthread("Guard: Unique Searchableattributes", function () {
  const x = waitForAnySearchableattributesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSearchableattributes(k, ANY), function () {});
});

bthread("Guard: Unique Searchquery", function () {
  const x = waitForAnySearchqueryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSearchquery(k, ANY), function () {});
});

bthread("Guard: Unique Searchresponse", function () {
  const x = waitForAnySearchresponseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSearchresponse(k, ANY), function () {});
});

bthread("Guard: Unique Separatortokens", function () {
  const x = waitForAnySeparatortokensAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSeparatortokens(k, ANY), function () {});
});

bthread("Guard: Unique Settings", function () {
  const x = waitForAnySettingsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSettings(k, ANY), function () {});
});

bthread("Guard: Unique Sort", function () {
  const x = waitForAnySortAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSort(k, ANY), function () {});
});

bthread("Guard: Unique Sortableattributes", function () {
  const x = waitForAnySortableattributesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSortableattributes(k, ANY), function () {});
});

bthread("Guard: Unique Stats", function () {
  const x = waitForAnyStatsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStats(k, ANY), function () {});
});

bthread("Guard: Unique Stopwords", function () {
  const x = waitForAnyStopwordsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStopwords(k, ANY), function () {});
});

bthread("Guard: Unique Summarizedtask", function () {
  const x = waitForAnySummarizedtaskAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSummarizedtask(k, ANY), function () {});
});

bthread("Guard: Unique Swapindexes", function () {
  const x = waitForAnySwapindexesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSwapindexes(k, ANY), function () {});
});

bthread("Guard: Unique Swapoperation", function () {
  const x = waitForAnySwapoperationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSwapoperation(k, ANY), function () {});
});

bthread("Guard: Unique Synonyms", function () {
  const x = waitForAnySynonymsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSynonyms(k, ANY), function () {});
});

bthread("Guard: Unique Task", function () {
  const x = waitForAnyTaskAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTask(k, ANY), function () {});
});

bthread("Guard: Unique Timestamp", function () {
  const x = waitForAnyTimestampAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTimestamp(k, ANY), function () {});
});

bthread("Guard: Unique Total", function () {
  const x = waitForAnyTotalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTotal(k, ANY), function () {});
});

bthread("Guard: Unique Totalhits", function () {
  const x = waitForAnyTotalhitsAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTotalhits(k, ANY), function () {});
});

bthread("Guard: Unique Totalpages", function () {
  const x = waitForAnyTotalpagesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTotalpages(k, ANY), function () {});
});

bthread("Guard: Unique Typotolerance", function () {
  const x = waitForAnyTypotoleranceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTypotolerance(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
