//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));
  });
}

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);
  });
}

function waitFor(eventSet) {
  return bp.sync({waitFor: eventSet});
}

// ---- Entity: index ----

function searchDocumentsGet(attributesToCrop, attributesToHighlight, attributesToRetrieve, attributesToSearchOn, cropLength, cropMarker, facets, filter, highlightPostTag, highlightPreTag, hitsPerPage, indexUid, limit, matchingStrategy, offset, page, q, showMatchesPosition, showRankingScore, showRankingScoreDetails, sort, vector) {
  var url = "/indexes/" + indexUid + "/search";
  var description = "Search documents in index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function searchDocumentsPost(attributesToCrop, attributesToHighlight, attributesToRetrieve, attributesToSearchOn, cropLength, cropMarker, facets, filter, highlightPostTag, highlightPreTag, hitsPerPage, indexUid, limit, matchingStrategy, offset, page, q, showMatchesPosition, showRankingScore, showRankingScoreDetails, sort, vector) {
  var url = "/indexes/" + indexUid + "/search";
  var description = "Search documents in index " + indexUid + " with query " + q;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
}

function verifyIndexExists(attributesToCrop, attributesToHighlight, attributesToRetrieve, attributesToSearchOn, cropLength, cropMarker, facets, filter, highlightPostTag, highlightPreTag, hitsPerPage, indexUid, limit, matchingStrategy, offset, page, q, showMatchesPosition, showRankingScore, showRankingScoreDetails, sort, vector) {
  var url = "/indexes";
  var description = "Verify Index exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("Index exists");
          }
        }
      }
      return pvg.fail("Expected Index to exist but it does not");
    }
  });
}

function verifyIndexDoesNotExist(attributesToCrop, attributesToHighlight, attributesToRetrieve, attributesToSearchOn, cropLength, cropMarker, facets, filter, highlightPostTag, highlightPreTag, hitsPerPage, indexUid, limit, matchingStrategy, offset, page, q, showMatchesPosition, showRankingScore, showRankingScoreDetails, sort, vector) {
  var url = "/indexes";
  var description = "Verify Index does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected Index to not exist but it does");
          }
        }
      }
      return pvg.success("Index does not exist");
    }
  });
}

// ---- Entity: facetSearch ----

function facetSearchPost(facetName, facetQuery, filter, indexUid, matchingStrategy, q) {
  var url = "/indexes/" + indexUid + "/facet-search";
  var description = "Perform facet search on index " + indexUid + " for facet " + facetName;
  var body = {
    "facetName": String(facetName),
    "facetQuery": String(facetQuery),
    "q": String(q),
    "matchingStrategy": String(matchingStrategy),
    "filter": String(filter),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      , indexUid: String(indexUid)
    }
  });
}

// ---- Entity: multiSearch ----

function multiSearchPost(queries) {
  var url = "/multi-search";
  var description = "Perform multiple searches in one request";
  var body = {
    "queries": [],
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

// ---- Entity: task ----

function getTask(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid) {
  var url = "/tasks/:taskUid";
  var description = "Get task with uid " + uid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function listTasks(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid) {
  var url = "/tasks";
  var description = "List tasks with filters uid " + uid + ", indexUid " + indexUid + ", status " + status + ", type " + type + ", canceledBy " + canceledBy + ", enqueuedAt " + enqueuedAt + ", startedAt " + startedAt + ", finishedAt " + finishedAt;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function deleteTasks(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid) {
  var url = "/tasks";
  var description = "Delete tasks with filters uid " + uid + ", indexUid " + indexUid + ", status " + status + ", type " + type + ", canceledBy " + canceledBy + ", enqueuedAt " + enqueuedAt + ", startedAt " + startedAt + ", finishedAt " + finishedAt;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function cancelTasks(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid) {
  var url = "/tasks/cancel";
  var description = "Cancel tasks with filters uid " + uid + ", indexUid " + indexUid + ", status " + status + ", type " + type + ", canceledBy " + canceledBy + ", enqueuedAt " + enqueuedAt + ", startedAt " + startedAt + ", finishedAt " + finishedAt;
  var body = {
    "uid": String(uid),
    "indexUid": String(indexUid),
    "status": String(status),
    "type": String(type),
    "canceledBy": String(canceledBy),
    "enqueuedAt": String(enqueuedAt),
    "startedAt": String(startedAt),
    "finishedAt": String(finishedAt),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      , indexUid: String(indexUid)
    }
  });
}

function verifyTaskExists(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid) {
  var url = "/tasks/:taskUid";
  var description = "Verify Task exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("Task exists");
          }
        }
      }
      return pvg.fail("Expected Task to exist but it does not");
    }
  });
}

function verifyTaskDoesNotExist(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid) {
  var url = "/tasks/:taskUid";
  var description = "Verify Task does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected Task to not exist but it does");
          }
        }
      }
      return pvg.success("Task does not exist");
    }
  });
}

function tryToDeleteANonExistingTask(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid) {
  var url = "/tasks";
  var description = "Verify we cannot delete non-existing Task";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedTask(canceledBy, enqueuedAt, finishedAt, from, indexUid, limit, startedAt, status, total, type, uid) {
  var expectedDesc = "Delete tasks with filters uid " + uid + ", indexUid " + indexUid + ", status " + status + ", type " + type + ", canceledBy " + canceledBy + ", enqueuedAt " + enqueuedAt + ", startedAt " + startedAt + ", finishedAt " + finishedAt;
  return bp.EventSet("matchDeletedTask", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTaskDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ tasks\ with\ filters\ uid\ (.+),\ indexUid\ (.+),\ status\ (.+),\ type\ (.+),\ canceledBy\ (.+),\ enqueuedAt\ (.+),\ startedAt\ (.+),\ finishedAt\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ tasks\ with\ filters\ uid\ (.+),\ indexUid\ (.+),\ status\ (.+),\ type\ (.+),\ canceledBy\ (.+),\ enqueuedAt\ (.+),\ startedAt\ (.+),\ finishedAt\ (.+)$/);
  var captures = m.slice(1);
  var names = ["uid", "indexUid", "status", "type", "canceledBy", "enqueuedAt", "startedAt", "finishedAt"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
