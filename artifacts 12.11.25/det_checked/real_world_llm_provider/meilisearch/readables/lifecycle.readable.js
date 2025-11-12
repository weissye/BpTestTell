/** === Lifecycle smoke per entity (add→verify→tryAddExisting→delete→verifyNotExist) === */

function lifecycle_dump(id) {
  try { tryToDeleteANonExistingDump(id); } catch (_e) {}
  addDump(id);
  verifyDumpExists(id);
  tryToAddExistingDump(id);
  deleteDump(id);
  verifyDumpDoesNotExist(id);
}

function lifecycle_experimental_feature(id) {
  try { tryToDeleteANonExistingExperimental_feature(id); } catch (_e) {}
  addExperimental_feature(id);
  verifyExperimental_featureExists(id);
  tryToAddExistingExperimental_feature(id);
  deleteExperimental_feature(id);
  verifyExperimental_featureDoesNotExist(id);
}

function lifecycle_health(id) {
  try { tryToDeleteANonExistingHealth(id); } catch (_e) {}
  addHealth(id);
  verifyHealthExists(id);
  tryToAddExistingHealth(id);
  deleteHealth(id);
  verifyHealthDoesNotExist(id);
}

function lifecycle_indexe(indexUid, documentId) {
  try { tryToDeleteANonExistingIndexe(indexUid, documentId); } catch (_e) {}
  addIndexe(indexUid, documentId);
  verifyIndexeExists(indexUid, documentId);
  tryToAddExistingIndexe(indexUid, documentId);
  deleteIndexe(indexUid, documentId);
  verifyIndexeDoesNotExist(indexUid, documentId);
}

function lifecycle_key(uid_or_key) {
  try { tryToDeleteANonExistingKey(uid_or_key); } catch (_e) {}
  addKey(uid_or_key);
  verifyKeyExists(uid_or_key);
  tryToAddExistingKey(uid_or_key);
  deleteKey(uid_or_key);
  verifyKeyDoesNotExist(uid_or_key);
}

function lifecycle_metric(id) {
  try { tryToDeleteANonExistingMetric(id); } catch (_e) {}
  addMetric(id);
  verifyMetricExists(id);
  tryToAddExistingMetric(id);
  deleteMetric(id);
  verifyMetricDoesNotExist(id);
}

function lifecycle_multi_search(id) {
  try { tryToDeleteANonExistingMulti_search(id); } catch (_e) {}
  addMulti_search(id);
  verifyMulti_searchExists(id);
  tryToAddExistingMulti_search(id);
  deleteMulti_search(id);
  verifyMulti_searchDoesNotExist(id);
}

function lifecycle_snapshot(id) {
  try { tryToDeleteANonExistingSnapshot(id); } catch (_e) {}
  addSnapshot(id);
  verifySnapshotExists(id);
  tryToAddExistingSnapshot(id);
  deleteSnapshot(id);
  verifySnapshotDoesNotExist(id);
}

function lifecycle_stat(id) {
  try { tryToDeleteANonExistingStat(id); } catch (_e) {}
  addStat(id);
  verifyStatExists(id);
  tryToAddExistingStat(id);
  deleteStat(id);
  verifyStatDoesNotExist(id);
}

function lifecycle_swap_indexe(id) {
  try { tryToDeleteANonExistingSwap_indexe(id); } catch (_e) {}
  addSwap_indexe(id);
  verifySwap_indexeExists(id);
  tryToAddExistingSwap_indexe(id);
  deleteSwap_indexe(id);
  verifySwap_indexeDoesNotExist(id);
}

function lifecycle_task(id) {
  try { tryToDeleteANonExistingTask(id); } catch (_e) {}
  addTask(id);
  verifyTaskExists(id);
  tryToAddExistingTask(id);
  deleteTask(id);
  verifyTaskDoesNotExist(id);
}

function lifecycle_version(id) {
  try { tryToDeleteANonExistingVersion(id); } catch (_e) {}
  addVersion(id);
  verifyVersionExists(id);
  tryToAddExistingVersion(id);
  deleteVersion(id);
  verifyVersionDoesNotExist(id);
}
