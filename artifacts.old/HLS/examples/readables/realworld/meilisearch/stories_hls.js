// HLS (active + passive) – meilisearch
if (mode === "MODEL") {

  // ===== ACTIVE LIFECYCLES (>=3 examples) =====
  bthread("meilisearch: Seed Indexs", function () {
    addIndex("IN-001");
    addIndex("IN-002");
    addIndex("IN-003");
    updateIndex("IN-003", { "note": "seeded" });
  });
  
    bthread("meilisearch: Document lifecycle", function () {
    addDocument("DO-100");
    updateDocument("DO-100", { "status": "ready" });
    deleteDocument("DO-100");
    verifyDocumentDoesNotExist("DO-100");
  });
  
    bthread("meilisearch: Contention on ApiKey", function () {
    addApiKey("AP-200");
    tryAddApiKey("AP-200"); // duplicate should be blocked
    updateApiKey("AP-200", { "quality": "ok" });
  });

  // ===== PASSIVE ASSERTIONS / GUARDS =====
  bthread("Index add verification", function () {
    const ev = waitForAnyIndexAdded();
    block(matchDeleteIndex(ev.indexId || ev.id || ev.key), function () {
      verifyIndexExists(ev.indexId || ev.id || ev.key);
    });
  });
  
    bthread("Index update verification", function () {
    const ev = waitForAnyIndexUpdated();
    block(matchDeleteIndex(ev.indexId || ev.id || ev.key), function () {
      verifyIndexUpdated(ev.indexId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Index deletion verification", function () {
    const ev = waitForAnyIndexDeleted();
    block(matchAddIndex(ev.indexId || ev.id || ev.key, ANY), function () {
      verifyIndexDoesNotExist(ev.indexId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Index)", function () {
    const ev = waitForAnyIndexDeleted();
    block(matchUpdateIndex(ev.indexId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("Document add verification", function () {
    const ev = waitForAnyDocumentAdded();
    block(matchDeleteDocument(ev.documentId || ev.id || ev.key), function () {
      verifyDocumentExists(ev.documentId || ev.id || ev.key);
    });
  });
  
    bthread("Document update verification", function () {
    const ev = waitForAnyDocumentUpdated();
    block(matchDeleteDocument(ev.documentId || ev.id || ev.key), function () {
      verifyDocumentUpdated(ev.documentId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("Document deletion verification", function () {
    const ev = waitForAnyDocumentDeleted();
    block(matchAddDocument(ev.documentId || ev.id || ev.key, ANY), function () {
      verifyDocumentDoesNotExist(ev.documentId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (Document)", function () {
    const ev = waitForAnyDocumentDeleted();
    block(matchUpdateDocument(ev.documentId || ev.id || ev.key, ANY), function () {
    });
  });
  
    bthread("ApiKey add verification", function () {
    const ev = waitForAnyApiKeyAdded();
    block(matchDeleteApiKey(ev.apiKeyId || ev.id || ev.key), function () {
      verifyApiKeyExists(ev.apiKeyId || ev.id || ev.key);
    });
  });
  
    bthread("ApiKey update verification", function () {
    const ev = waitForAnyApiKeyUpdated();
    block(matchDeleteApiKey(ev.apiKeyId || ev.id || ev.key), function () {
      verifyApiKeyUpdated(ev.apiKeyId || ev.id || ev.key, ev.diff || {
      });
    });
  });
  
    bthread("ApiKey deletion verification", function () {
    const ev = waitForAnyApiKeyDeleted();
    block(matchAddApiKey(ev.apiKeyId || ev.id || ev.key, ANY), function () {
      verifyApiKeyDoesNotExist(ev.apiKeyId || ev.id || ev.key);
    });
  });
  
    bthread("Guard: No update-after-delete (ApiKey)", function () {
    const ev = waitForAnyApiKeyDeleted();
    block(matchUpdateApiKey(ev.apiKeyId || ev.id || ev.key, ANY), function () {
    });
  });

} // end if MODE
