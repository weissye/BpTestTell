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

function matchSuccess(desc) {
  return bp.EventSet("Success Event", function(e) {
    return e.name === "Done: " + desc;
  });
}

// ---- Entity: settings ----

function getSettings(indexUid) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Get settings for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateSettings(indexUid) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Update settings for index " + indexUid;
  var body = {
    "displayedAttributes": "displayedAttributes_dummy",
    "distinctAttribute": "distinctAttribute_dummy",
    "faceting": "faceting_dummy",
    "filterableAttributes": "filterableAttributes_dummy",
    "indexUid": String(indexUid),
    "pagination": "pagination_dummy",
    "rankingRules": "rankingRules_dummy",
    "searchableAttributes": "searchableAttributes_dummy",
    "sortableAttributes": "sortableAttributes_dummy",
    "stopWords": "stopWords_dummy",
    "synonyms": "synonyms_dummy",
    "typoTolerance": "typoTolerance_dummy",
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetSettings(indexUid) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Reset settings for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifySettingsExists(indexUid) {
  var url = "/indexes";
  var description = "Verify Settings with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("Settings exists");
          }
        }
      }
      return pvg.fail("Expected Settings to exist but it does not");
    }
  });
}

function verifySettingsDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify Settings with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected Settings to not exist but it does");
          }
        }
      }
      return pvg.success("Settings does not exist");
    }
  });
}

function tryToDeleteANonExistingSettings(indexUid) {
  var url = "/indexes/" + indexUid + "/settings";
  var description = "Verify we cannot delete non-existing Settings";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedSettings(indexUid) {
  var expectedDesc = "Reset settings for index " + indexUid;
  return bp.EventSet("matchDeletedSettings", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySettingsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ settings\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ settings\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: synonyms ----

function getSynonyms(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Get synonyms for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateSynonyms(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Update synonyms for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetSynonyms(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Reset synonyms for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifySynonymsExists(indexUid) {
  var url = "/indexes";
  var description = "Verify Synonyms with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("Synonyms exists");
          }
        }
      }
      return pvg.fail("Expected Synonyms to exist but it does not");
    }
  });
}

function verifySynonymsDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify Synonyms with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected Synonyms to not exist but it does");
          }
        }
      }
      return pvg.success("Synonyms does not exist");
    }
  });
}

function tryToDeleteANonExistingSynonyms(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/synonyms";
  var description = "Verify we cannot delete non-existing Synonyms";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedSynonyms(indexUid) {
  var expectedDesc = "Reset synonyms for index " + indexUid;
  return bp.EventSet("matchDeletedSynonyms", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySynonymsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ synonyms\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ synonyms\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: sortableAttributes ----

function getSortableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Get sortable attributes for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateSortableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Update sortable attributes for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetSortableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Reset sortable attributes for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifySortableAttributesExists(indexUid) {
  var url = "/indexes";
  var description = "Verify SortableAttributes with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("SortableAttributes exists");
          }
        }
      }
      return pvg.fail("Expected SortableAttributes to exist but it does not");
    }
  });
}

function verifySortableAttributesDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify SortableAttributes with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected SortableAttributes to not exist but it does");
          }
        }
      }
      return pvg.success("SortableAttributes does not exist");
    }
  });
}

function tryToDeleteANonExistingSortableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/sortable-attributes";
  var description = "Verify we cannot delete non-existing SortableAttributes";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedSortableAttributes(indexUid) {
  var expectedDesc = "Reset sortable attributes for index " + indexUid;
  return bp.EventSet("matchDeletedSortableAttributes", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySortableAttributesDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ sortable\ attributes\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ sortable\ attributes\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: stopWords ----

function getStopWords(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Get stop-words for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateStopWords(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Update stop-words for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetStopWords(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Reset stop-words for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifyStopWordsExists(indexUid) {
  var url = "/indexes";
  var description = "Verify StopWords with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("StopWords exists");
          }
        }
      }
      return pvg.fail("Expected StopWords to exist but it does not");
    }
  });
}

function verifyStopWordsDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify StopWords with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected StopWords to not exist but it does");
          }
        }
      }
      return pvg.success("StopWords does not exist");
    }
  });
}

function tryToDeleteANonExistingStopWords(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/stop-words";
  var description = "Verify we cannot delete non-existing StopWords";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedStopWords(indexUid) {
  var expectedDesc = "Reset stop-words for index " + indexUid;
  return bp.EventSet("matchDeletedStopWords", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyStopWordsDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ stop\-words\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ stop\-words\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: rankingRules ----

function getRankingRules(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/ranking-rules";
  var description = "Get ranking rules for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateRankingRules(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/ranking-rules";
  var description = "Update ranking rules for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetRankingRules(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/ranking-rules";
  var description = "Reset ranking rules for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifyRankingRulesExists(indexUid) {
  var url = "/indexes";
  var description = "Verify RankingRules with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("RankingRules exists");
          }
        }
      }
      return pvg.fail("Expected RankingRules to exist but it does not");
    }
  });
}

function verifyRankingRulesDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify RankingRules with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected RankingRules to not exist but it does");
          }
        }
      }
      return pvg.success("RankingRules does not exist");
    }
  });
}

function tryToDeleteANonExistingRankingRules(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/ranking-rules";
  var description = "Verify we cannot delete non-existing RankingRules";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedRankingRules(indexUid) {
  var expectedDesc = "Reset ranking rules for index " + indexUid;
  return bp.EventSet("matchDeletedRankingRules", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRankingRulesDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ ranking\ rules\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ ranking\ rules\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: typoTolerance ----

function getTypoTolerance(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/typo-tolerance";
  var description = "Get typo tolerance configuration for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateTypoTolerance(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/typo-tolerance";
  var description = "Update typo tolerance settings for index " + indexUid;
  var body = {
    "disableOnAttributes": [],
    "disableOnWords": [],
    "enabled": true,
    "indexUid": String(indexUid),
    "minWordSizeForTypos": {},
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetTypoTolerance(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/typo-tolerance";
  var description = "Reset typo tolerance settings to the default configuration for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifyTypoToleranceExists(indexUid) {
  var url = "/indexes";
  var description = "Verify TypoTolerance with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("TypoTolerance exists");
          }
        }
      }
      return pvg.fail("Expected TypoTolerance to exist but it does not");
    }
  });
}

function verifyTypoToleranceDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify TypoTolerance with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected TypoTolerance to not exist but it does");
          }
        }
      }
      return pvg.success("TypoTolerance does not exist");
    }
  });
}

function tryToDeleteANonExistingTypoTolerance(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/typo-tolerance";
  var description = "Verify we cannot delete non-existing TypoTolerance";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedTypoTolerance(indexUid) {
  var expectedDesc = "Reset typo tolerance settings to the default configuration for index " + indexUid;
  return bp.EventSet("matchDeletedTypoTolerance", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTypoToleranceDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ typo\ tolerance\ settings\ to\ the\ default\ configuration\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ typo\ tolerance\ settings\ to\ the\ default\ configuration\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: pagination ----

function getPagination(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/pagination";
  var description = "Get pagination configuration for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updatePagination(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/pagination";
  var description = "Update pagination settings for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
    "maxTotalHits": 1,
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetPagination(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/pagination";
  var description = "Reset pagination settings to the default configuration for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifyPaginationExists(indexUid) {
  var url = "/indexes";
  var description = "Verify Pagination with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("Pagination exists");
          }
        }
      }
      return pvg.fail("Expected Pagination to exist but it does not");
    }
  });
}

function verifyPaginationDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify Pagination with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected Pagination to not exist but it does");
          }
        }
      }
      return pvg.success("Pagination does not exist");
    }
  });
}

function tryToDeleteANonExistingPagination(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/pagination";
  var description = "Verify we cannot delete non-existing Pagination";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedPagination(indexUid) {
  var expectedDesc = "Reset pagination settings to the default configuration for index " + indexUid;
  return bp.EventSet("matchDeletedPagination", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPaginationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ pagination\ settings\ to\ the\ default\ configuration\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ pagination\ settings\ to\ the\ default\ configuration\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: faceting ----

function getFaceting(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/faceting";
  var description = "Get faceting configuration for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateFaceting(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/faceting";
  var description = "Update faceting settings for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
    "maxValuesPerFacet": 1,
    "sortFacetValuesBy": {},
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetFaceting(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/faceting";
  var description = "Reset faceting settings to the default configuration for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifyFacetingExists(indexUid) {
  var url = "/indexes";
  var description = "Verify Faceting with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("Faceting exists");
          }
        }
      }
      return pvg.fail("Expected Faceting to exist but it does not");
    }
  });
}

function verifyFacetingDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify Faceting with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected Faceting to not exist but it does");
          }
        }
      }
      return pvg.success("Faceting does not exist");
    }
  });
}

function tryToDeleteANonExistingFaceting(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/faceting";
  var description = "Verify we cannot delete non-existing Faceting";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedFaceting(indexUid) {
  var expectedDesc = "Reset faceting settings to the default configuration for index " + indexUid;
  return bp.EventSet("matchDeletedFaceting", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFacetingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ faceting\ settings\ to\ the\ default\ configuration\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ faceting\ settings\ to\ the\ default\ configuration\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: filterableAttributes ----

function getFilterableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/filterable-attributes";
  var description = "Get filterable attributes for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateFilterableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/filterable-attributes";
  var description = "Update filterable attributes for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetFilterableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/filterable-attributes";
  var description = "Reset filterable attributes for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifyFilterableAttributesExists(indexUid) {
  var url = "/indexes";
  var description = "Verify FilterableAttributes with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("FilterableAttributes exists");
          }
        }
      }
      return pvg.fail("Expected FilterableAttributes to exist but it does not");
    }
  });
}

function verifyFilterableAttributesDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify FilterableAttributes with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected FilterableAttributes to not exist but it does");
          }
        }
      }
      return pvg.success("FilterableAttributes does not exist");
    }
  });
}

function tryToDeleteANonExistingFilterableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/filterable-attributes";
  var description = "Verify we cannot delete non-existing FilterableAttributes";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedFilterableAttributes(indexUid) {
  var expectedDesc = "Reset filterable attributes for index " + indexUid;
  return bp.EventSet("matchDeletedFilterableAttributes", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFilterableAttributesDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ filterable\ attributes\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ filterable\ attributes\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: distinctAttribute ----

function getDistinctAttribute(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/distinct-attribute";
  var description = "Get distinct attribute for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateDistinctAttribute(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/distinct-attribute";
  var description = "Update distinct attribute for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetDistinctAttribute(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/distinct-attribute";
  var description = "Reset distinct attribute for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifyDistinctAttributeExists(indexUid) {
  var url = "/indexes";
  var description = "Verify DistinctAttribute with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("DistinctAttribute exists");
          }
        }
      }
      return pvg.fail("Expected DistinctAttribute to exist but it does not");
    }
  });
}

function verifyDistinctAttributeDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify DistinctAttribute with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected DistinctAttribute to not exist but it does");
          }
        }
      }
      return pvg.success("DistinctAttribute does not exist");
    }
  });
}

function tryToDeleteANonExistingDistinctAttribute(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/distinct-attribute";
  var description = "Verify we cannot delete non-existing DistinctAttribute";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedDistinctAttribute(indexUid) {
  var expectedDesc = "Reset distinct attribute for index " + indexUid;
  return bp.EventSet("matchDeletedDistinctAttribute", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDistinctAttributeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ distinct\ attribute\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ distinct\ attribute\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: searchable attribute ----

function getSearchableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/searchable-attributes";
  var description = "Get searchable attributes for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateSearchableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/searchable-attributes";
  var description = "Update searchable attributes for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetSearchableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/searchable-attributes";
  var description = "Reset searchable attributes for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifySearchableAttributesExists(indexUid) {
  var url = "/indexes";
  var description = "Verify SearchableAttributes with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("SearchableAttributes exists");
          }
        }
      }
      return pvg.fail("Expected SearchableAttributes to exist but it does not");
    }
  });
}

function verifySearchableAttributesDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify SearchableAttributes with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected SearchableAttributes to not exist but it does");
          }
        }
      }
      return pvg.success("SearchableAttributes does not exist");
    }
  });
}

function tryToDeleteANonExistingSearchableAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/searchable-attributes";
  var description = "Verify we cannot delete non-existing SearchableAttributes";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedSearchableAttributes(indexUid) {
  var expectedDesc = "Reset searchable attributes for index " + indexUid;
  return bp.EventSet("matchDeletedSearchableAttributes", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySearchableAttributesDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ searchable\ attributes\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ searchable\ attributes\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: displayed attribute ----

function getDisplayedAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/displayed-attributes";
  var description = "Get displayed attributes for index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateDisplayedAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/displayed-attributes";
  var description = "Update displayed attributes for index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function resetDisplayedAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/displayed-attributes";
  var description = "Reset displayed attributes for index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function verifyDisplayedAttributesExists(indexUid) {
  var url = "/indexes";
  var description = "Verify DisplayedAttributes with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("DisplayedAttributes exists");
          }
        }
      }
      return pvg.fail("Expected DisplayedAttributes to exist but it does not");
    }
  });
}

function verifyDisplayedAttributesDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify DisplayedAttributes with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected DisplayedAttributes to not exist but it does");
          }
        }
      }
      return pvg.success("DisplayedAttributes does not exist");
    }
  });
}

function tryToDeleteANonExistingDisplayedAttributes(indexUid) {
  var url = "/indexes/" + indexUid + "/settings/displayed-attributes";
  var description = "Verify we cannot delete non-existing DisplayedAttributes";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchDeletedDisplayedAttributes(indexUid) {
  var expectedDesc = "Reset displayed attributes for index " + indexUid;
  return bp.EventSet("matchDeletedDisplayedAttributes", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDisplayedAttributesDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ displayed\ attributes\ for\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ displayed\ attributes\ for\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: document ----

function createDocument(documentId, indexUid) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Add or replace documents in index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 413],
    parameters: {
      description: description,
      indexUid: String(indexUid)
      , documentId: String(documentId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function deleteDocument(documentId, indexUid) {
  var url = "/indexes/" + indexUid + "/documents/" + documentId;
  var description = "Delete document " + documentId + " from index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function upsertDocument(documentId, indexUid) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Add or update documents in index " + indexUid;
  var body = {
    "indexUid": String(indexUid),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401, 413],
    parameters: {
      description: description,
      indexUid: String(indexUid)
      , documentId: String(documentId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function getDocument(documentId, indexUid) {
  var url = "/indexes/" + indexUid + "/documents/" + documentId;
  var description = "Get document " + documentId + " from index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function tryToAddExistingDocument(documentId, indexUid) {
  var url = "/indexes/" + indexUid + "/documents";
  var body = {
    "indexUid": String(indexUid),
  };
  var description = "Verify that we cannot add another Document...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDocumentExists(documentId, indexUid) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Verify Document with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("Document exists");
          }
        }
      }
      return pvg.fail("Expected Document to exist but it does not");
    }
  });
}

function verifyDocumentDoesNotExist(documentId, indexUid) {
  var url = "/indexes/" + indexUid + "/documents";
  var description = "Verify Document with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected Document to not exist but it does");
          }
        }
      }
      return pvg.success("Document does not exist");
    }
  });
}

function tryToDeleteANonExistingDocument(documentId, indexUid) {
  var url = "/indexes/" + indexUid + "/documents/" + documentId;
  var description = "Verify we cannot delete non-existing Document";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedDocument(documentId, indexUid) {
  var expectedDesc = "Add or replace documents in index " + indexUid;
  return matchSuccess(expectedDesc);
}

function waitForAnyDocumentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ or\ replace\ documents\ in\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ or\ replace\ documents\ in\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getDocumentAddedEvent(keyVal) {
  return bp.EventSet("AddDocument:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.indexUid) === String(keyVal);
  });
}

function matchAnyDocumentAdded() {
  return bp.EventSet("matchAnyDocumentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.indexUid !== undefined && e.name.indexOf("Create document") > -1;
  });
}

function waitForDocumentAdded(documentId, indexUid) {
  var expectedDesc = "Add or replace documents in index " + indexUid;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedDocument(documentId, indexUid) {
  var expectedDesc = "Delete document " + documentId + " from index " + indexUid;
  return bp.EventSet("matchDeletedDocument", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDocumentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ document\ (.+)\ from\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ document\ (.+)\ from\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["documentId", "indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: index ----

function createIndex(indexUid, primaryKey, uid) {
  var url = "/indexes";
  var description = "Create index " + uid + " with primaryKey " + primaryKey;
  var body = {
    "indexUid": String(indexUid),
    "primaryKey": String(primaryKey),
    "uid": String(uid),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 400, 401],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function getIndex(indexUid, primaryKey, uid) {
  var url = "/indexes/" + indexUid;
  var description = "Get index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function updateIndex(indexUid, primaryKey, uid) {
  var url = "/indexes/" + indexUid;
  var description = "Update index " + indexUid + " with primaryKey " + primaryKey;
  var body = {
    "indexUid": String(indexUid),
    "primaryKey": String(primaryKey),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 400, 401, 404],
    parameters: {
      description: description,
      indexUid: String(indexUid)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { indexUid: String(indexUid) }) });
}

function deleteIndex(indexUid, primaryKey, uid) {
  var url = "/indexes/" + indexUid;
  var description = "Delete index " + indexUid;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 401, 404]
  });
}

function tryToAddExistingIndex(indexUid, primaryKey, uid) {
  var url = "/indexes";
  var body = {
    "indexUid": String(indexUid),
    "primaryKey": String(primaryKey),
    "uid": String(uid),
  };
  var description = "Verify that we cannot add another Index...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIndexExists(indexUid, primaryKey, uid) {
  var url = "/indexes";
  var description = "Verify Index with indexUid " + indexUid + " exists";
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

function verifyIndexDoesNotExist(indexUid, primaryKey, uid) {
  var url = "/indexes";
  var description = "Verify Index with indexUid " + indexUid + " does not exist";
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

function tryToDeleteANonExistingIndex(indexUid, primaryKey, uid) {
  var url = "/indexes/" + indexUid;
  var description = "Verify we cannot delete non-existing Index";
  svc.delete(url, {
    expectedResponseCodes: [202, 401, 404],
    parameters: { description: description }
  });
}

function matchAddedIndex(indexUid, primaryKey, uid) {
  var expectedDesc = "Create index " + uid + " with primaryKey " + primaryKey;
  return matchSuccess(expectedDesc);
}

function waitForAnyIndexAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ index\ (.+)\ with\ primaryKey\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ index\ (.+)\ with\ primaryKey\ (.+)$/);
  var captures = m.slice(1);
  var names = ["uid", "primaryKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIndexAddedEvent(keyVal) {
  return bp.EventSet("AddIndex:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.indexUid) === String(keyVal);
  });
}

function matchAnyIndexAdded() {
  return bp.EventSet("matchAnyIndexAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.indexUid !== undefined && e.name.indexOf("Create index") > -1;
  });
}

function waitForIndexAdded(indexUid, primaryKey, uid) {
  var expectedDesc = "Create index " + uid + " with primaryKey " + primaryKey;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIndex(indexUid, primaryKey, uid) {
  var expectedDesc = "Delete index " + indexUid;
  return bp.EventSet("matchDeletedIndex", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIndexDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["indexUid"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: index stat ----

function getIndexStat(indexUid) {
  var url = "/indexes/" + indexUid + "/stats";
  var description = "Get stat of index " + indexUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function verifyIndexStatsExists(indexUid) {
  var url = "/indexes";
  var description = "Verify IndexStats with indexUid " + indexUid + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.success("IndexStats exists");
          }
        }
      }
      return pvg.fail("Expected IndexStats to exist but it does not");
    }
  });
}

function verifyIndexStatsDoesNotExist(indexUid) {
  var url = "/indexes";
  var description = "Verify IndexStats with indexUid " + indexUid + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].indexUid) === String(indexUid)) {
            return pvg.fail("Expected IndexStats to not exist but it does");
          }
        }
      }
      return pvg.success("IndexStats does not exist");
    }
  });
}

// ---- Entity: stats ----

function getAllStats() {
  var url = "/stats";
  var description = "Get stats of all indexes";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function verifyStatsExists() {
  var url = "/stats";
  var description = "Verify Stats exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Stats exists");
          }
        }
      }
      return pvg.fail("Expected Stats to exist but it does not");
    }
  });
}

function verifyStatsDoesNotExist() {
  var url = "/stats";
  var description = "Verify Stats does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Stats to not exist but it does");
          }
        }
      }
      return pvg.success("Stats does not exist");
    }
  });
}

// ---- Entity: metrics ----

function getMetrics() {
  var url = "/metrics";
  var description = "Get prometheus format metrics for observability and monitoring";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyMetricsExists() {
  var url = "/metrics";
  var description = "Verify Metrics exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Metrics exists");
          }
        }
      }
      return pvg.fail("Expected Metrics to exist but it does not");
    }
  });
}

function verifyMetricsDoesNotExist() {
  var url = "/metrics";
  var description = "Verify Metrics does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Metrics to not exist but it does");
          }
        }
      }
      return pvg.success("Metrics does not exist");
    }
  });
}

// ---- Entity: task ----

function getTask(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total) {
  var url = "/tasks/:taskUid";
  var description = "Get task " + taskUid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401, 404]
  });
}

function listTasks(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total) {
  var url = "/tasks";
  var description = "Get all tasks";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteTasks(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total) {
  var url = "/tasks";
  var description = "Delete tasks matching filters";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [202, 400]
  });
}

function cancelTasks(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total) {
  var url = "/tasks/cancel";
  var description = "Cancel tasks matching filters";
  var body = {
    "taskFilterAfterEnqueuedAt": String(taskFilterAfterEnqueuedAt),
    "taskFilterAfterFinishedAt": String(taskFilterAfterFinishedAt),
    "taskFilterAfterStartedAt": String(taskFilterAfterStartedAt),
    "taskFilterBeforeEnqueuedAt": String(taskFilterBeforeEnqueuedAt),
    "taskFilterBeforeFinishedAt": String(taskFilterBeforeFinishedAt),
    "taskFilterBeforeStartedAt": String(taskFilterBeforeStartedAt),
    "taskFilterCanceledBy": String(taskFilterCanceledBy),
    "taskFilterIndexUids": String(taskFilterIndexUids),
    "taskFilterStatuses": String(taskFilterStatuses),
    "taskFilterTypes": String(taskFilterTypes),
    "taskFilterUids": String(taskFilterUids),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 400, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifyTaskExists(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total) {
  var url = "/tasks/:taskUid";
  var description = "Verify Task exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].taskFilterIndexUids) === String(taskFilterIndexUids)) {
            return pvg.success("Task exists");
          }
        }
      }
      return pvg.fail("Expected Task to exist but it does not");
    }
  });
}

function verifyTaskDoesNotExist(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total) {
  var url = "/tasks/:taskUid";
  var description = "Verify Task does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].taskFilterIndexUids) === String(taskFilterIndexUids)) {
            return pvg.fail("Expected Task to not exist but it does");
          }
        }
      }
      return pvg.success("Task does not exist");
    }
  });
}

function tryToDeleteANonExistingTask(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total) {
  var url = "/tasks";
  var description = "Verify we cannot delete non-existing Task";
  svc.delete(url, {
    expectedResponseCodes: [202, 400],
    parameters: { description: description }
  });
}

function matchDeletedTask(from, limit, taskFilterAfterEnqueuedAt, taskFilterAfterFinishedAt, taskFilterAfterStartedAt, taskFilterBeforeEnqueuedAt, taskFilterBeforeFinishedAt, taskFilterBeforeStartedAt, taskFilterCanceledBy, taskFilterIndexUids, taskFilterStatuses, taskFilterTypes, taskFilterUids, taskUid, total) {
  var expectedDesc = "Delete tasks matching filters";
  return bp.EventSet("matchDeletedTask", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTaskDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ tasks\ matching\ filters$/));
  var m = ev.data.parameters.description.match(/^Delete\ tasks\ matching\ filters$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: key ----

function createKey(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys";
  var description = "Create key " + name;
  var body = {
    "actions": String(actions),
    "createdAt": String(createdAt),
    "description": String(description),
    "expiresAt": String(expiresAt),
    "indexes": String(indexes),
    "key": String(key),
    "name": String(name),
    "uid": String(uid),
    "uidOrKey": String(uidOrKey),
    "updatedAt": String(updatedAt),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      uidOrKey: String(uidOrKey)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { uidOrKey: String(uidOrKey) }) });
}

function deleteKey(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys/" + uidOrKey;
  var description = "Delete key " + uidOrKey;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function updateKey(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys/" + uidOrKey;
  var description = "Update key " + uidOrKey + " with name " + name + " and description " + description;
  var body = {
    "description": String(description),
    "name": String(name),
    "uidOrKey": String(uidOrKey),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      uidOrKey: String(uidOrKey)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { uidOrKey: String(uidOrKey) }) });
}

function getKey(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys/" + uidOrKey;
  var description = "Get key " + uidOrKey;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: []
  });
}

function listKeys(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys";
  var description = "List keys";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function tryToAddExistingKey(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys";
  var body = {
    "actions": String(actions),
    "createdAt": String(createdAt),
    "description": String(description),
    "expiresAt": String(expiresAt),
    "indexes": String(indexes),
    "key": String(key),
    "name": String(name),
    "uid": String(uid),
    "uidOrKey": String(uidOrKey),
    "updatedAt": String(updatedAt),
  };
  var description = "Verify that we cannot add another Key...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyKeyExists(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys";
  var description = "Verify Key with uidOrKey " + uidOrKey + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].uidOrKey) === String(uidOrKey)) {
            return pvg.success("Key exists");
          }
        }
      }
      return pvg.fail("Expected Key to exist but it does not");
    }
  });
}

function verifyKeyDoesNotExist(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys";
  var description = "Verify Key with uidOrKey " + uidOrKey + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].uidOrKey) === String(uidOrKey)) {
            return pvg.fail("Expected Key to not exist but it does");
          }
        }
      }
      return pvg.success("Key does not exist");
    }
  });
}

function tryToDeleteANonExistingKey(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var url = "/keys/" + uidOrKey;
  var description = "Verify we cannot delete non-existing Key";
  svc.delete(url, {
    expectedResponseCodes: [],
    parameters: { description: description }
  });
}

function matchAddedKey(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var expectedDesc = "Create key " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ key\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ key\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getKeyAddedEvent(keyVal) {
  return bp.EventSet("AddKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.uidOrKey) === String(keyVal);
  });
}

function matchAnyKeyAdded() {
  return bp.EventSet("matchAnyKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.uidOrKey !== undefined && e.name.indexOf("Create key") > -1;
  });
}

function waitForKeyAdded(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var expectedDesc = "Create key " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedKey(actions, createdAt, description, expiresAt, indexes, key, name, uid, uidOrKey, updatedAt) {
  var expectedDesc = "Delete key " + uidOrKey;
  return bp.EventSet("matchDeletedKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ key\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ key\ (.+)$/);
  var captures = m.slice(1);
  var names = ["uidOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: dump ----

function createDump() {
  var url = "/dumps";
  var description = "Create dump";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingDump() {
  var url = "/dumps";
  var body = {
  };
  var description = "Verify that we cannot add another Dump...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyDumpExists() {
  var url = "/dumps";
  var description = "Verify Dump exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Dump exists");
          }
        }
      }
      return pvg.fail("Expected Dump to exist but it does not");
    }
  });
}

function verifyDumpDoesNotExist() {
  var url = "/dumps";
  var description = "Verify Dump does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Dump to not exist but it does");
          }
        }
      }
      return pvg.success("Dump does not exist");
    }
  });
}

function matchAddedDump() {
  var expectedDesc = "Create dump";
  return matchSuccess(expectedDesc);
}

function waitForAnyDumpAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ dump$/));
  var m = ev.data.parameters.description.match(/^Create\ dump$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getDumpAddedEvent(keyVal) {
  return bp.EventSet("AddDump:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyDumpAdded() {
  return bp.EventSet("matchAnyDumpAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create dump") > -1;
  });
}

function waitForDumpAdded() {
  var expectedDesc = "Create dump";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: snapshot ----

function createSnapshot() {
  var url = "/snapshots";
  var description = "Create snapshot";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingSnapshot() {
  var url = "/snapshots";
  var body = {
  };
  var description = "Verify that we cannot add another Snapshot...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifySnapshotExists() {
  var url = "/snapshots";
  var description = "Verify Snapshot exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Snapshot exists");
          }
        }
      }
      return pvg.fail("Expected Snapshot to exist but it does not");
    }
  });
}

function verifySnapshotDoesNotExist() {
  var url = "/snapshots";
  var description = "Verify Snapshot does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Snapshot to not exist but it does");
          }
        }
      }
      return pvg.success("Snapshot does not exist");
    }
  });
}

function matchAddedSnapshot() {
  var expectedDesc = "Create snapshot";
  return matchSuccess(expectedDesc);
}

function waitForAnySnapshotAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ snapshot$/));
  var m = ev.data.parameters.description.match(/^Create\ snapshot$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getSnapshotAddedEvent(keyVal) {
  return bp.EventSet("AddSnapshot:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnySnapshotAdded() {
  return bp.EventSet("matchAnySnapshotAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create snapshot") > -1;
  });
}

function waitForSnapshotAdded() {
  var expectedDesc = "Create snapshot";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: version ----

function getVersion() {
  var url = "/version";
  var description = "Get version of Meilisearch";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function verifyVersionExists() {
  var url = "/version";
  var description = "Verify Version exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("Version exists");
          }
        }
      }
      return pvg.fail("Expected Version to exist but it does not");
    }
  });
}

function verifyVersionDoesNotExist() {
  var url = "/version";
  var description = "Verify Version does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected Version to not exist but it does");
          }
        }
      }
      return pvg.success("Version does not exist");
    }
  });
}

// ---- Entity: experimental feature ----

function getExperimentalFeatures() {
  var url = "/experimental-features";
  var description = "Get the status of runtime experimental features";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 401]
  });
}

function updateExperimentalFeatures() {
  var url = "/experimental-features";
  var description = "Set the status of runtime experimental features";
  var body = {
    "exportPuffinReports": true,
    "metrics": true,
    "vectorStore": true,
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 401],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifyExperimentalFeaturesExists() {
  var url = "/experimental-features";
  var description = "Verify ExperimentalFeatures exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("ExperimentalFeatures exists");
          }
        }
      }
      return pvg.fail("Expected ExperimentalFeatures to exist but it does not");
    }
  });
}

function verifyExperimentalFeaturesDoesNotExist() {
  var url = "/experimental-features";
  var description = "Verify ExperimentalFeatures does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected ExperimentalFeatures to not exist but it does");
          }
        }
      }
      return pvg.success("ExperimentalFeatures does not exist");
    }
  });
}
