// ---- crud:dump:nondet:1:1 ----
bthread("crud:dump:nondet:1:1", function () {
  let id = 200;
  addDump(id);
  tryToAddExistingDump(id);
  verifyDumpExists(id);
  updateDump(id);
  deleteDump(id);
  tryToDeleteANonExistingDump(id);
  verifyDumpDoesNotExist(id);
  
});

// ---- crud:dump:nondet:1:2 ----
bthread("crud:dump:nondet:1:2", function () {
  let id = 200;
  addDump(id);
  tryToAddExistingDump(id);
  updateDump(id);
  verifyDumpExists(id);
  deleteDump(id);
  tryToDeleteANonExistingDump(id);
  verifyDumpDoesNotExist(id);
  
});

// ---- crud:dump:nondet:1:3 ----
bthread("crud:dump:nondet:1:3", function () {
  let id = 200;
  addDump(id);
  tryToAddExistingDump(id);
  verifyDumpExists(id);
  deleteDump(id);
  tryToDeleteANonExistingDump(id);
  verifyDumpDoesNotExist(id);
  
});

// ---- crud:dump:nondet:1:4 ----
bthread("crud:dump:nondet:1:4", function () {
  let id = 201;
  addDump(id);
  tryToAddExistingDump(id);
  deleteDump(id);
  tryToDeleteANonExistingDump(id);
  verifyDumpDoesNotExist(id);
  
});

// ---- crud:experimental_feature:nondet:2:1 ----
bthread("crud:experimental_feature:nondet:2:1", function () {
  let id = 201;
  addExperimental_feature(id);
  tryToAddExistingExperimental_feature(id);
  verifyExperimental_featureExists(id);
  updateExperimental_feature(id);
  deleteExperimental_feature(id);
  tryToDeleteANonExistingExperimental_feature(id);
  verifyExperimental_featureDoesNotExist(id);
  
});

// ---- crud:experimental_feature:nondet:2:2 ----
bthread("crud:experimental_feature:nondet:2:2", function () {
  let id = 201;
  addExperimental_feature(id);
  tryToAddExistingExperimental_feature(id);
  updateExperimental_feature(id);
  verifyExperimental_featureExists(id);
  deleteExperimental_feature(id);
  tryToDeleteANonExistingExperimental_feature(id);
  verifyExperimental_featureDoesNotExist(id);
  
});

// ---- crud:experimental_feature:nondet:2:3 ----
bthread("crud:experimental_feature:nondet:2:3", function () {
  let id = 201;
  addExperimental_feature(id);
  tryToAddExistingExperimental_feature(id);
  verifyExperimental_featureExists(id);
  deleteExperimental_feature(id);
  tryToDeleteANonExistingExperimental_feature(id);
  verifyExperimental_featureDoesNotExist(id);
  
});

// ---- crud:experimental_feature:nondet:2:4 ----
bthread("crud:experimental_feature:nondet:2:4", function () {
  let id = 202;
  addExperimental_feature(id);
  tryToAddExistingExperimental_feature(id);
  deleteExperimental_feature(id);
  tryToDeleteANonExistingExperimental_feature(id);
  verifyExperimental_featureDoesNotExist(id);
  
});

// ---- crud:health:nondet:3:1 ----
bthread("crud:health:nondet:3:1", function () {
  let id = 202;
  addHealth(id);
  tryToAddExistingHealth(id);
  verifyHealthExists(id);
  updateHealth(id);
  deleteHealth(id);
  tryToDeleteANonExistingHealth(id);
  verifyHealthDoesNotExist(id);
  
});

// ---- crud:health:nondet:3:2 ----
bthread("crud:health:nondet:3:2", function () {
  let id = 202;
  addHealth(id);
  tryToAddExistingHealth(id);
  updateHealth(id);
  verifyHealthExists(id);
  deleteHealth(id);
  tryToDeleteANonExistingHealth(id);
  verifyHealthDoesNotExist(id);
  
});

// ---- crud:health:nondet:3:3 ----
bthread("crud:health:nondet:3:3", function () {
  let id = 202;
  addHealth(id);
  tryToAddExistingHealth(id);
  verifyHealthExists(id);
  deleteHealth(id);
  tryToDeleteANonExistingHealth(id);
  verifyHealthDoesNotExist(id);
  
});

// ---- crud:health:nondet:3:4 ----
bthread("crud:health:nondet:3:4", function () {
  let id = 203;
  addHealth(id);
  tryToAddExistingHealth(id);
  deleteHealth(id);
  tryToDeleteANonExistingHealth(id);
  verifyHealthDoesNotExist(id);
  
});

// ---- crud:indexe:nondet:4:1 ----
bthread("crud:indexe:nondet:4:1", function () {
  let indexUid = 203;
  let documentId = 203;
  addIndexe(indexUid, documentId);
  tryToAddExistingIndexe(indexUid, documentId);
  verifyIndexeExists(indexUid, documentId);
  updateIndexe(indexUid, documentId);
  deleteIndexe(indexUid, documentId);
  tryToDeleteANonExistingIndexe(indexUid, documentId);
  verifyIndexeDoesNotExist(indexUid, documentId);
  
});

// ---- crud:indexe:nondet:4:2 ----
bthread("crud:indexe:nondet:4:2", function () {
  let indexUid = 203;
  let documentId = 203;
  addIndexe(indexUid, documentId);
  tryToAddExistingIndexe(indexUid, documentId);
  updateIndexe(indexUid, documentId);
  verifyIndexeExists(indexUid, documentId);
  deleteIndexe(indexUid, documentId);
  tryToDeleteANonExistingIndexe(indexUid, documentId);
  verifyIndexeDoesNotExist(indexUid, documentId);
  
});

// ---- crud:indexe:nondet:4:3 ----
bthread("crud:indexe:nondet:4:3", function () {
  let indexUid = 203;
  let documentId = 203;
  addIndexe(indexUid, documentId);
  tryToAddExistingIndexe(indexUid, documentId);
  verifyIndexeExists(indexUid, documentId);
  deleteIndexe(indexUid, documentId);
  tryToDeleteANonExistingIndexe(indexUid, documentId);
  verifyIndexeDoesNotExist(indexUid, documentId);
  
});

// ---- crud:indexe:nondet:4:4 ----
bthread("crud:indexe:nondet:4:4", function () {
  let indexUid = 204;
  let documentId = 204;
  addIndexe(indexUid, documentId);
  tryToAddExistingIndexe(indexUid, documentId);
  deleteIndexe(indexUid, documentId);
  tryToDeleteANonExistingIndexe(indexUid, documentId);
  verifyIndexeDoesNotExist(indexUid, documentId);
  
});

// ---- crud:key:nondet:5:1 ----
bthread("crud:key:nondet:5:1", function () {
  let uid_or_key = "uid_or_key_204";
  addKey(uid_or_key);
  tryToAddExistingKey(uid_or_key);
  verifyKeyExists(uid_or_key);
  updateKey(uid_or_key);
  deleteKey(uid_or_key);
  tryToDeleteANonExistingKey(uid_or_key);
  verifyKeyDoesNotExist(uid_or_key);
  
});

// ---- crud:key:nondet:5:2 ----
bthread("crud:key:nondet:5:2", function () {
  let uid_or_key = "uid_or_key_204";
  addKey(uid_or_key);
  tryToAddExistingKey(uid_or_key);
  updateKey(uid_or_key);
  verifyKeyExists(uid_or_key);
  deleteKey(uid_or_key);
  tryToDeleteANonExistingKey(uid_or_key);
  verifyKeyDoesNotExist(uid_or_key);
  
});

// ---- crud:key:nondet:5:3 ----
bthread("crud:key:nondet:5:3", function () {
  let uid_or_key = "uid_or_key_204";
  addKey(uid_or_key);
  tryToAddExistingKey(uid_or_key);
  verifyKeyExists(uid_or_key);
  deleteKey(uid_or_key);
  tryToDeleteANonExistingKey(uid_or_key);
  verifyKeyDoesNotExist(uid_or_key);
  
});

// ---- crud:key:nondet:5:4 ----
bthread("crud:key:nondet:5:4", function () {
  let uid_or_key = "uid_or_key_205";
  addKey(uid_or_key);
  tryToAddExistingKey(uid_or_key);
  deleteKey(uid_or_key);
  tryToDeleteANonExistingKey(uid_or_key);
  verifyKeyDoesNotExist(uid_or_key);
  
});

// ---- crud:metric:nondet:6:1 ----
bthread("crud:metric:nondet:6:1", function () {
  let id = 205;
  addMetric(id);
  tryToAddExistingMetric(id);
  verifyMetricExists(id);
  updateMetric(id);
  deleteMetric(id);
  tryToDeleteANonExistingMetric(id);
  verifyMetricDoesNotExist(id);
  
});

// ---- crud:metric:nondet:6:2 ----
bthread("crud:metric:nondet:6:2", function () {
  let id = 205;
  addMetric(id);
  tryToAddExistingMetric(id);
  updateMetric(id);
  verifyMetricExists(id);
  deleteMetric(id);
  tryToDeleteANonExistingMetric(id);
  verifyMetricDoesNotExist(id);
  
});

// ---- crud:metric:nondet:6:3 ----
bthread("crud:metric:nondet:6:3", function () {
  let id = 205;
  addMetric(id);
  tryToAddExistingMetric(id);
  verifyMetricExists(id);
  deleteMetric(id);
  tryToDeleteANonExistingMetric(id);
  verifyMetricDoesNotExist(id);
  
});

// ---- crud:metric:nondet:6:4 ----
bthread("crud:metric:nondet:6:4", function () {
  let id = 206;
  addMetric(id);
  tryToAddExistingMetric(id);
  deleteMetric(id);
  tryToDeleteANonExistingMetric(id);
  verifyMetricDoesNotExist(id);
  
});

// ---- crud:multi_search:nondet:7:1 ----
bthread("crud:multi_search:nondet:7:1", function () {
  let id = 206;
  addMulti_search(id);
  tryToAddExistingMulti_search(id);
  verifyMulti_searchExists(id);
  updateMulti_search(id);
  deleteMulti_search(id);
  tryToDeleteANonExistingMulti_search(id);
  verifyMulti_searchDoesNotExist(id);
  
});

// ---- crud:multi_search:nondet:7:2 ----
bthread("crud:multi_search:nondet:7:2", function () {
  let id = 206;
  addMulti_search(id);
  tryToAddExistingMulti_search(id);
  updateMulti_search(id);
  verifyMulti_searchExists(id);
  deleteMulti_search(id);
  tryToDeleteANonExistingMulti_search(id);
  verifyMulti_searchDoesNotExist(id);
  
});

// ---- crud:multi_search:nondet:7:3 ----
bthread("crud:multi_search:nondet:7:3", function () {
  let id = 206;
  addMulti_search(id);
  tryToAddExistingMulti_search(id);
  verifyMulti_searchExists(id);
  deleteMulti_search(id);
  tryToDeleteANonExistingMulti_search(id);
  verifyMulti_searchDoesNotExist(id);
  
});

// ---- crud:multi_search:nondet:7:4 ----
bthread("crud:multi_search:nondet:7:4", function () {
  let id = 207;
  addMulti_search(id);
  tryToAddExistingMulti_search(id);
  deleteMulti_search(id);
  tryToDeleteANonExistingMulti_search(id);
  verifyMulti_searchDoesNotExist(id);
  
});

// ---- crud:snapshot:nondet:8:1 ----
bthread("crud:snapshot:nondet:8:1", function () {
  let id = 207;
  addSnapshot(id);
  tryToAddExistingSnapshot(id);
  verifySnapshotExists(id);
  updateSnapshot(id);
  deleteSnapshot(id);
  tryToDeleteANonExistingSnapshot(id);
  verifySnapshotDoesNotExist(id);
  
});

// ---- crud:snapshot:nondet:8:2 ----
bthread("crud:snapshot:nondet:8:2", function () {
  let id = 207;
  addSnapshot(id);
  tryToAddExistingSnapshot(id);
  updateSnapshot(id);
  verifySnapshotExists(id);
  deleteSnapshot(id);
  tryToDeleteANonExistingSnapshot(id);
  verifySnapshotDoesNotExist(id);
  
});

// ---- crud:snapshot:nondet:8:3 ----
bthread("crud:snapshot:nondet:8:3", function () {
  let id = 207;
  addSnapshot(id);
  tryToAddExistingSnapshot(id);
  verifySnapshotExists(id);
  deleteSnapshot(id);
  tryToDeleteANonExistingSnapshot(id);
  verifySnapshotDoesNotExist(id);
  
});

// ---- crud:snapshot:nondet:8:4 ----
bthread("crud:snapshot:nondet:8:4", function () {
  let id = 208;
  addSnapshot(id);
  tryToAddExistingSnapshot(id);
  deleteSnapshot(id);
  tryToDeleteANonExistingSnapshot(id);
  verifySnapshotDoesNotExist(id);
  
});

// ---- crud:stat:nondet:9:1 ----
bthread("crud:stat:nondet:9:1", function () {
  let id = 208;
  addStat(id);
  tryToAddExistingStat(id);
  verifyStatExists(id);
  updateStat(id);
  deleteStat(id);
  tryToDeleteANonExistingStat(id);
  verifyStatDoesNotExist(id);
  
});

// ---- crud:stat:nondet:9:2 ----
bthread("crud:stat:nondet:9:2", function () {
  let id = 208;
  addStat(id);
  tryToAddExistingStat(id);
  updateStat(id);
  verifyStatExists(id);
  deleteStat(id);
  tryToDeleteANonExistingStat(id);
  verifyStatDoesNotExist(id);
  
});

// ---- crud:stat:nondet:9:3 ----
bthread("crud:stat:nondet:9:3", function () {
  let id = 208;
  addStat(id);
  tryToAddExistingStat(id);
  verifyStatExists(id);
  deleteStat(id);
  tryToDeleteANonExistingStat(id);
  verifyStatDoesNotExist(id);
  
});

// ---- crud:stat:nondet:9:4 ----
bthread("crud:stat:nondet:9:4", function () {
  let id = 209;
  addStat(id);
  tryToAddExistingStat(id);
  deleteStat(id);
  tryToDeleteANonExistingStat(id);
  verifyStatDoesNotExist(id);
  
});

// ---- crud:swap_indexe:nondet:10:1 ----
bthread("crud:swap_indexe:nondet:10:1", function () {
  let id = 209;
  addSwap_indexe(id);
  tryToAddExistingSwap_indexe(id);
  verifySwap_indexeExists(id);
  updateSwap_indexe(id);
  deleteSwap_indexe(id);
  tryToDeleteANonExistingSwap_indexe(id);
  verifySwap_indexeDoesNotExist(id);
  
});

// ---- crud:swap_indexe:nondet:10:2 ----
bthread("crud:swap_indexe:nondet:10:2", function () {
  let id = 209;
  addSwap_indexe(id);
  tryToAddExistingSwap_indexe(id);
  updateSwap_indexe(id);
  verifySwap_indexeExists(id);
  deleteSwap_indexe(id);
  tryToDeleteANonExistingSwap_indexe(id);
  verifySwap_indexeDoesNotExist(id);
  
});

// ---- crud:swap_indexe:nondet:10:3 ----
bthread("crud:swap_indexe:nondet:10:3", function () {
  let id = 209;
  addSwap_indexe(id);
  tryToAddExistingSwap_indexe(id);
  verifySwap_indexeExists(id);
  deleteSwap_indexe(id);
  tryToDeleteANonExistingSwap_indexe(id);
  verifySwap_indexeDoesNotExist(id);
  
});

// ---- crud:swap_indexe:nondet:10:4 ----
bthread("crud:swap_indexe:nondet:10:4", function () {
  let id = 210;
  addSwap_indexe(id);
  tryToAddExistingSwap_indexe(id);
  deleteSwap_indexe(id);
  tryToDeleteANonExistingSwap_indexe(id);
  verifySwap_indexeDoesNotExist(id);
  
});

// ---- crud:task:nondet:11:1 ----
bthread("crud:task:nondet:11:1", function () {
  let id = 210;
  addTask(id);
  tryToAddExistingTask(id);
  verifyTaskExists(id);
  updateTask(id);
  deleteTask(id);
  tryToDeleteANonExistingTask(id);
  verifyTaskDoesNotExist(id);
  
});

// ---- crud:task:nondet:11:2 ----
bthread("crud:task:nondet:11:2", function () {
  let id = 210;
  addTask(id);
  tryToAddExistingTask(id);
  updateTask(id);
  verifyTaskExists(id);
  deleteTask(id);
  tryToDeleteANonExistingTask(id);
  verifyTaskDoesNotExist(id);
  
});

// ---- crud:task:nondet:11:3 ----
bthread("crud:task:nondet:11:3", function () {
  let id = 210;
  addTask(id);
  tryToAddExistingTask(id);
  verifyTaskExists(id);
  deleteTask(id);
  tryToDeleteANonExistingTask(id);
  verifyTaskDoesNotExist(id);
  
});

// ---- crud:task:nondet:11:4 ----
bthread("crud:task:nondet:11:4", function () {
  let id = 211;
  addTask(id);
  tryToAddExistingTask(id);
  deleteTask(id);
  tryToDeleteANonExistingTask(id);
  verifyTaskDoesNotExist(id);
  
});

// ---- crud:version:nondet:12:1 ----
bthread("crud:version:nondet:12:1", function () {
  let id = 211;
  addVersion(id);
  tryToAddExistingVersion(id);
  verifyVersionExists(id);
  updateVersion(id);
  deleteVersion(id);
  tryToDeleteANonExistingVersion(id);
  verifyVersionDoesNotExist(id);
  
});

// ---- crud:version:nondet:12:2 ----
bthread("crud:version:nondet:12:2", function () {
  let id = 211;
  addVersion(id);
  tryToAddExistingVersion(id);
  updateVersion(id);
  verifyVersionExists(id);
  deleteVersion(id);
  tryToDeleteANonExistingVersion(id);
  verifyVersionDoesNotExist(id);
  
});

// ---- crud:version:nondet:12:3 ----
bthread("crud:version:nondet:12:3", function () {
  let id = 211;
  addVersion(id);
  tryToAddExistingVersion(id);
  verifyVersionExists(id);
  deleteVersion(id);
  tryToDeleteANonExistingVersion(id);
  verifyVersionDoesNotExist(id);
  
});

// ---- crud:version:nondet:12:4 ----
bthread("crud:version:nondet:12:4", function () {
  let id = 212;
  addVersion(id);
  tryToAddExistingVersion(id);
  deleteVersion(id);
  tryToDeleteANonExistingVersion(id);
  verifyVersionDoesNotExist(id);
  
});
