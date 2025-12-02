// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
      }
    }
  }
  return captured;
}

// Story: crud:Index:read_only
bthread("crud:Index:read_only", function () {
  let attributesToCrop = "attributesToCrop_200";
  let attributesToHighlight = "attributesToHighlight_200";
  let attributesToRetrieve = "attributesToRetrieve_200";
  let attributesToSearchOn = "attributesToSearchOn_200";
  let cropLength = "cropLength_200";
  let cropMarker = "cropMarker_200";
  let facets = "facets_200";
  let filter = "filter_200";
  let highlightPostTag = "highlightPostTag_200";
  let highlightPreTag = "highlightPreTag_200";
  let hitsPerPage = "hitsPerPage_200";
  let indexUid = 200;
  let limit = "limit_200";
  let matchingStrategy = "matchingStrategy_200";
  let offset = "offset_200";
  let page = "page_200";
  let q = "q_200";
  let showMatchesPosition = "showMatchesPosition_200";
  let showRankingScore = "showRankingScore_200";
  let showRankingScoreDetails = "showRankingScoreDetails_200";
  let sort = "sort_200";
  let vector = "vector_200";
  verifyIndexExists(attributesToCrop, attributesToHighlight, attributesToRetrieve, attributesToSearchOn, cropLength, cropMarker, facets, filter, highlightPostTag, highlightPreTag, hitsPerPage, indexUid, limit, matchingStrategy, offset, page, q, showMatchesPosition, showRankingScore, showRankingScoreDetails, sort, vector);
});

// Story: crud:Task:read_only
bthread("crud:Task:read_only", function () {
  let canceledBy = "canceledBy_230";
  let enqueuedAt = "enqueuedAt_230";
  let finishedAt = "finishedAt_230";
  let from = "from_230";
  let limit = "limit_230";
  let startedAt = "startedAt_230";
  let status = "status_230";
  let total = "total_230";
  let type = "type_230";
  let uid = 230;
  verifyTaskExists(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid);
});
