// Auto-generated HLS stories
//@provengo summon rest

const bthread = bp.registerBThread;

// Story: crud:Index:nondet:1:1
bthread("crud:Index:nondet:1:1", function () {
  let uid = 200;
  let primaryKey = "primaryKey_200";
  addIndex(200, "primaryKey_200");
  tryToAddExistingIndex(200, "primaryKey_200");
  verifyIndexExists(uid);
  updateIndex(uid, 200, "primaryKey_200");
  deleteIndex(uid);
  tryToDeleteANonExistingIndex(uid);
  verifyIndexDoesNotExist(uid);
});

// Story: crud:Index:nondet:1:2
bthread("crud:Index:nondet:1:2", function () {
  let uid = 201;
  let primaryKey = "primaryKey_201";
  addIndex(201, "primaryKey_201");
  tryToAddExistingIndex(201, "primaryKey_201");
  updateIndex(uid, 201, "primaryKey_201");
  verifyIndexExists(uid);
  deleteIndex(uid);
  tryToDeleteANonExistingIndex(uid);
  verifyIndexDoesNotExist(uid);
});

// Story: crud:Index:nondet:negative:dup-add
bthread("crud:Index:nondet:negative:dup-add", function () {
  let uid = 206;
  let primaryKey = "primaryKey_206";
  addIndex(206, "primaryKey_206");
  verifyIndexExists(uid);
  tryToAddExistingIndex(206, "primaryKey_206");
  verifyIndexExists(uid);
});

// Story: crud:Index:nondet:existing:update
bthread("crud:Index:nondet:existing:update", function () {
  let ev = waitForAnyIndexAdded();
  let args = Object.values(ev);
  block(matchDeletedIndex.apply(null, args), function () {
    // verifyIndexExists.apply(null, args);
    // updateIndex.apply(null, args);
  });
});

// Story: monitor:Index:add
bthread("monitor:Index:add", function () {
  while (true) {
    let ev = waitForAnyIndexAdded();
    let args = Object.values(ev);
    block(matchDeletedIndex.apply(null, args), function () {
      // verifyIndexExists.apply(null, args);
    });
  }
});

// Story: crud:Document:nondet:1:1
bthread("crud:Document:nondet:1:1", function () {
  let indexUid = 210;
  let primaryKey = "primaryKey_210";
  let csvDelimiter = "csvDelimiter_210";
  addDocuments(210, "primaryKey_210", "csvDelimiter_210");
  tryToAddExistingDocument(210, "primaryKey_210", "csvDelimiter_210");
  verifyDocumentExists(indexUid);
  updateDocuments(indexUid, 210, "primaryKey_210", "csvDelimiter_210");
  deleteAllDocuments(indexUid);
  tryToDeleteANonExistingDocument(indexUid);
  verifyDocumentDoesNotExist(indexUid);
});

// Story: crud:Document:nondet:1:2
bthread("crud:Document:nondet:1:2", function () {
  let indexUid = 211;
  let primaryKey = "primaryKey_211";
  let csvDelimiter = "csvDelimiter_211";
  addDocuments(211, "primaryKey_211", "csvDelimiter_211");
  tryToAddExistingDocument(211, "primaryKey_211", "csvDelimiter_211");
  updateDocuments(indexUid, 211, "primaryKey_211", "csvDelimiter_211");
  verifyDocumentExists(indexUid);
  deleteAllDocuments(indexUid);
  tryToDeleteANonExistingDocument(indexUid);
  verifyDocumentDoesNotExist(indexUid);
});

// Story: crud:Document:nondet:negative:dup-add
bthread("crud:Document:nondet:negative:dup-add", function () {
  let indexUid = 216;
  let primaryKey = "primaryKey_216";
  let csvDelimiter = "csvDelimiter_216";
  addDocuments(216, "primaryKey_216", "csvDelimiter_216");
  verifyDocumentExists(indexUid);
  tryToAddExistingDocument(216, "primaryKey_216", "csvDelimiter_216");
  verifyDocumentExists(indexUid);
});

// Story: crud:Document:nondet:existing:update
bthread("crud:Document:nondet:existing:update", function () {
  let ev = waitForAnyDocumentAdded();
  let args = Object.values(ev);
  block(matchDeletedDocument.apply(null, args), function () {
    // verifyDocumentExists.apply(null, args);
    // updateDocuments.apply(null, args);
  });
});

// Story: monitor:Document:add
bthread("monitor:Document:add", function () {
  while (true) {
    let ev = waitForAnyDocumentAdded();
    let args = Object.values(ev);
    block(matchDeletedDocument.apply(null, args), function () {
      // verifyDocumentExists.apply(null, args);
    });
  }
});

// Story: crud:Settings:read_only
bthread("crud:Settings:read_only", function () {
  let indexUid = 240;
  // Read-only check for Settings
  verifySettingsExists(indexUid);
});

// Story: crud:Synonyms:read_only
bthread("crud:Synonyms:read_only", function () {
  let indexUid = 250;
  // Read-only check for Synonyms
  verifySynonymsExists(indexUid);
});

// Story: crud:SortableAttributes:read_only
bthread("crud:SortableAttributes:read_only", function () {
  let indexUid = 260;
  // Read-only check for SortableAttributes
  verifySortableAttributesExists(indexUid);
});

// Story: crud:StopWords:read_only
bthread("crud:StopWords:read_only", function () {
  let indexUid = 270;
  // Read-only check for StopWords
  verifyStopWordsExists(indexUid);
});

// Story: crud:Tasks:read_only
bthread("crud:Tasks:read_only", function () {
  let taskUid = 280;
  // Read-only check for Tasks
  verifyTasksExists(taskUid);
});

// Story: crud:Keys:nondet:1:1
bthread("crud:Keys:nondet:1:1", function () {
  let uid = 290;
  let actions = "actions_290";
  let indexes = "indexes_290";
  let name = "name_290";
  let description = "description_290";
  let expiresAt = "expiresAt_290";
  let Content-Type = "Content-Type_290";
  addKey(290, "actions_290", "indexes_290", "name_290", "description_290", "expiresAt_290", "Content-Type_290");
  tryToAddExistingKeys(290, "actions_290", "indexes_290", "name_290", "description_290", "expiresAt_290", "Content-Type_290");
  verifyKeysExists(name);
  updateKey(name, 290, "actions_290", "indexes_290", "name_290", "description_290", "expiresAt_290", "Content-Type_290");
  deleteKey(name);
  tryToDeleteANonExistingKeys(name);
  verifyKeysDoesNotExist(name);
});

// Story: crud:Keys:nondet:1:2
bthread("crud:Keys:nondet:1:2", function () {
  let uid = 291;
  let actions = "actions_291";
  let indexes = "indexes_291";
  let name = "name_291";
  let description = "description_291";
  let expiresAt = "expiresAt_291";
  let Content-Type = "Content-Type_291";
  addKey(291, "actions_291", "indexes_291", "name_291", "description_291", "expiresAt_291", "Content-Type_291");
  tryToAddExistingKeys(291, "actions_291", "indexes_291", "name_291", "description_291", "expiresAt_291", "Content-Type_291");
  updateKey(name, 291, "actions_291", "indexes_291", "name_291", "description_291", "expiresAt_291", "Content-Type_291");
  verifyKeysExists(name);
  deleteKey(name);
  tryToDeleteANonExistingKeys(name);
  verifyKeysDoesNotExist(name);
});

// Story: crud:Keys:nondet:negative:dup-add
bthread("crud:Keys:nondet:negative:dup-add", function () {
  let uid = 296;
  let actions = "actions_296";
  let indexes = "indexes_296";
  let name = "name_296";
  let description = "description_296";
  let expiresAt = "expiresAt_296";
  let Content-Type = "Content-Type_296";
  addKey(296, "actions_296", "indexes_296", "name_296", "description_296", "expiresAt_296", "Content-Type_296");
  verifyKeysExists(name);
  tryToAddExistingKeys(296, "actions_296", "indexes_296", "name_296", "description_296", "expiresAt_296", "Content-Type_296");
  verifyKeysExists(name);
});

// Story: crud:Keys:nondet:existing:update
bthread("crud:Keys:nondet:existing:update", function () {
  let ev = waitForAnyKeysAdded();
  let args = Object.values(ev);
  block(matchDeletedKeys.apply(null, args), function () {
    // verifyKeysExists.apply(null, args);
    // updateKey.apply(null, args);
  });
});

// Story: monitor:Keys:add
bthread("monitor:Keys:add", function () {
  while (true) {
    let ev = waitForAnyKeysAdded();
    let args = Object.values(ev);
    block(matchDeletedKeys.apply(null, args), function () {
      // verifyKeysExists.apply(null, args);
    });
  }
});
