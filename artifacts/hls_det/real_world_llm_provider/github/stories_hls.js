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


bthread("AcceptedassignmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAcceptedassignment(x.id);
  const e_add = waitForAcceptedassignmentAdded(id);
  block(matchDeleteAcceptedassignment(id), function () {
    verifyAcceptedassignmentExists(id);
  });
  updateAcceptedassignment(x.id);
  updateAcceptedassignment(x.id);
  const e_upd = waitForAcceptedassignmentUpdated(id);
  block(matchDeleteAcceptedassignment(id), function () {
    verifyAcceptedassignmentUpdated(id);
  });
  deleteAcceptedassignment(x.id);
  const e_del = waitForAcceptedassignmentDeleted(id);
  block(matchAddAcceptedassignment(id), function () {
    verifyAcceptedassignmentDoesNotExist(id);
  });
});

bthread("AccesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAcces(x.id);
  const e_add = waitForAccesAdded(id);
  block(matchDeleteAcces(id), function () {
    verifyAccesExists(id);
  });
  updateAcces(x.id);
  updateAcces(x.id);
  const e_upd = waitForAccesUpdated(id);
  block(matchDeleteAcces(id), function () {
    verifyAccesUpdated(id);
  });
  deleteAcces(x.id);
  const e_del = waitForAccesDeleted(id);
  block(matchAddAcces(id), function () {
    verifyAccesDoesNotExist(id);
  });
});

bthread("AccesstokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccesstoken(x.id);
  const e_add = waitForAccesstokenAdded(id);
  block(matchDeleteAccesstoken(id), function () {
    verifyAccesstokenExists(id);
  });
  updateAccesstoken(x.id);
  updateAccesstoken(x.id);
  const e_upd = waitForAccesstokenUpdated(id);
  block(matchDeleteAccesstoken(id), function () {
    verifyAccesstokenUpdated(id);
  });
  deleteAccesstoken(x.id);
  const e_del = waitForAccesstokenDeleted(id);
  block(matchAddAccesstoken(id), function () {
    verifyAccesstokenDoesNotExist(id);
  });
});

bthread("AccountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccount(x.id);
  const e_add = waitForAccountAdded(id);
  block(matchDeleteAccount(id), function () {
    verifyAccountExists(id);
  });
  updateAccount(x.id);
  updateAccount(x.id);
  const e_upd = waitForAccountUpdated(id);
  block(matchDeleteAccount(id), function () {
    verifyAccountUpdated(id);
  });
  deleteAccount(x.id);
  const e_del = waitForAccountDeleted(id);
  block(matchAddAccount(id), function () {
    verifyAccountDoesNotExist(id);
  });
});

bthread("ActionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAction(x.id);
  const e_add = waitForActionAdded(id);
  block(matchDeleteAction(id), function () {
    verifyActionExists(id);
  });
  updateAction(x.id);
  updateAction(x.id);
  const e_upd = waitForActionUpdated(id);
  block(matchDeleteAction(id), function () {
    verifyActionUpdated(id);
  });
  deleteAction(x.id);
  const e_del = waitForActionDeleted(id);
  block(matchAddAction(id), function () {
    verifyActionDoesNotExist(id);
  });
});

bthread("ActivityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addActivity(x.id);
  const e_add = waitForActivityAdded(id);
  block(matchDeleteActivity(id), function () {
    verifyActivityExists(id);
  });
  updateActivity(x.id);
  updateActivity(x.id);
  const e_upd = waitForActivityUpdated(id);
  block(matchDeleteActivity(id), function () {
    verifyActivityUpdated(id);
  });
  deleteActivity(x.id);
  const e_del = waitForActivityDeleted(id);
  block(matchAddActivity(id), function () {
    verifyActivityDoesNotExist(id);
  });
});

bthread("AddLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAdd(x.id);
  const e_add = waitForAddAdded(id);
  block(matchDeleteAdd(id), function () {
    verifyAddExists(id);
  });
  updateAdd(x.id);
  updateAdd(x.id);
  const e_upd = waitForAddUpdated(id);
  block(matchDeleteAdd(id), function () {
    verifyAddUpdated(id);
  });
  deleteAdd(x.id);
  const e_del = waitForAddDeleted(id);
  block(matchAddAdd(id), function () {
    verifyAddDoesNotExist(id);
  });
});

bthread("AdvisoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAdvisory(x.id);
  const e_add = waitForAdvisoryAdded(id);
  block(matchDeleteAdvisory(id), function () {
    verifyAdvisoryExists(id);
  });
  updateAdvisory(x.id);
  updateAdvisory(x.id);
  const e_upd = waitForAdvisoryUpdated(id);
  block(matchDeleteAdvisory(id), function () {
    verifyAdvisoryUpdated(id);
  });
  deleteAdvisory(x.id);
  const e_del = waitForAdvisoryDeleted(id);
  block(matchAddAdvisory(id), function () {
    verifyAdvisoryDoesNotExist(id);
  });
});

bthread("AlertLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAlert(x.id);
  const e_add = waitForAlertAdded(id);
  block(matchDeleteAlert(id), function () {
    verifyAlertExists(id);
  });
  updateAlert(x.id);
  updateAlert(x.id);
  const e_upd = waitForAlertUpdated(id);
  block(matchDeleteAlert(id), function () {
    verifyAlertUpdated(id);
  });
  deleteAlert(x.id);
  const e_del = waitForAlertDeleted(id);
  block(matchAddAlert(id), function () {
    verifyAlertDoesNotExist(id);
  });
});

bthread("AnalysLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAnalys(x.id);
  const e_add = waitForAnalysAdded(id);
  block(matchDeleteAnalys(id), function () {
    verifyAnalysExists(id);
  });
  updateAnalys(x.id);
  updateAnalys(x.id);
  const e_upd = waitForAnalysUpdated(id);
  block(matchDeleteAnalys(id), function () {
    verifyAnalysUpdated(id);
  });
  deleteAnalys(x.id);
  const e_del = waitForAnalysDeleted(id);
  block(matchAddAnalys(id), function () {
    verifyAnalysDoesNotExist(id);
  });
});

bthread("AnnotationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAnnotation(x.id);
  const e_add = waitForAnnotationAdded(id);
  block(matchDeleteAnnotation(id), function () {
    verifyAnnotationExists(id);
  });
  updateAnnotation(x.id);
  updateAnnotation(x.id);
  const e_upd = waitForAnnotationUpdated(id);
  block(matchDeleteAnnotation(id), function () {
    verifyAnnotationUpdated(id);
  });
  deleteAnnotation(x.id);
  const e_del = waitForAnnotationDeleted(id);
  block(matchAddAnnotation(id), function () {
    verifyAnnotationDoesNotExist(id);
  });
});

bthread("ApiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApi(x.id);
  const e_add = waitForApiAdded(id);
  block(matchDeleteApi(id), function () {
    verifyApiExists(id);
  });
  updateApi(x.id);
  updateApi(x.id);
  const e_upd = waitForApiUpdated(id);
  block(matchDeleteApi(id), function () {
    verifyApiUpdated(id);
  });
  deleteApi(x.id);
  const e_del = waitForApiDeleted(id);
  block(matchAddApi(id), function () {
    verifyApiDoesNotExist(id);
  });
});

bthread("AppLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApp(x.id);
  const e_add = waitForAppAdded(id);
  block(matchDeleteApp(id), function () {
    verifyAppExists(id);
  });
  updateApp(x.id);
  updateApp(x.id);
  const e_upd = waitForAppUpdated(id);
  block(matchDeleteApp(id), function () {
    verifyAppUpdated(id);
  });
  deleteApp(x.id);
  const e_del = waitForAppDeleted(id);
  block(matchAddApp(id), function () {
    verifyAppDoesNotExist(id);
  });
});

bthread("ApplicationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApplication(x.id);
  const e_add = waitForApplicationAdded(id);
  block(matchDeleteApplication(id), function () {
    verifyApplicationExists(id);
  });
  updateApplication(x.id);
  updateApplication(x.id);
  const e_upd = waitForApplicationUpdated(id);
  block(matchDeleteApplication(id), function () {
    verifyApplicationUpdated(id);
  });
  deleteApplication(x.id);
  const e_del = waitForApplicationDeleted(id);
  block(matchAddApplication(id), function () {
    verifyApplicationDoesNotExist(id);
  });
});

bthread("AppmanifestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAppmanifest(x.id);
  const e_add = waitForAppmanifestAdded(id);
  block(matchDeleteAppmanifest(id), function () {
    verifyAppmanifestExists(id);
  });
  updateAppmanifest(x.id);
  updateAppmanifest(x.id);
  const e_upd = waitForAppmanifestUpdated(id);
  block(matchDeleteAppmanifest(id), function () {
    verifyAppmanifestUpdated(id);
  });
  deleteAppmanifest(x.id);
  const e_del = waitForAppmanifestDeleted(id);
  block(matchAddAppmanifest(id), function () {
    verifyAppmanifestDoesNotExist(id);
  });
});

bthread("ApprovalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApproval(x.id);
  const e_add = waitForApprovalAdded(id);
  block(matchDeleteApproval(id), function () {
    verifyApprovalExists(id);
  });
  updateApproval(x.id);
  updateApproval(x.id);
  const e_upd = waitForApprovalUpdated(id);
  block(matchDeleteApproval(id), function () {
    verifyApprovalUpdated(id);
  });
  deleteApproval(x.id);
  const e_del = waitForApprovalDeleted(id);
  block(matchAddApproval(id), function () {
    verifyApprovalDoesNotExist(id);
  });
});

bthread("ApproveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addApprove(x.id);
  const e_add = waitForApproveAdded(id);
  block(matchDeleteApprove(id), function () {
    verifyApproveExists(id);
  });
  updateApprove(x.id);
  updateApprove(x.id);
  const e_upd = waitForApproveUpdated(id);
  block(matchDeleteApprove(id), function () {
    verifyApproveUpdated(id);
  });
  deleteApprove(x.id);
  const e_del = waitForApproveDeleted(id);
  block(matchAddApprove(id), function () {
    verifyApproveDoesNotExist(id);
  });
});

bthread("ArchiveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addArchive(x.id);
  const e_add = waitForArchiveAdded(id);
  block(matchDeleteArchive(id), function () {
    verifyArchiveExists(id);
  });
  updateArchive(x.id);
  updateArchive(x.id);
  const e_upd = waitForArchiveUpdated(id);
  block(matchDeleteArchive(id), function () {
    verifyArchiveUpdated(id);
  });
  deleteArchive(x.id);
  const e_del = waitForArchiveDeleted(id);
  block(matchAddArchive(id), function () {
    verifyArchiveDoesNotExist(id);
  });
});

bthread("ArtifactLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addArtifact(x.id);
  const e_add = waitForArtifactAdded(id);
  block(matchDeleteArtifact(id), function () {
    verifyArtifactExists(id);
  });
  updateArtifact(x.id);
  updateArtifact(x.id);
  const e_upd = waitForArtifactUpdated(id);
  block(matchDeleteArtifact(id), function () {
    verifyArtifactUpdated(id);
  });
  deleteArtifact(x.id);
  const e_del = waitForArtifactDeleted(id);
  block(matchAddArtifact(id), function () {
    verifyArtifactDoesNotExist(id);
  });
});

bthread("ArtifactandlogretentionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addArtifactandlogretention(x.id);
  const e_add = waitForArtifactandlogretentionAdded(id);
  block(matchDeleteArtifactandlogretention(id), function () {
    verifyArtifactandlogretentionExists(id);
  });
  updateArtifactandlogretention(x.id);
  updateArtifactandlogretention(x.id);
  const e_upd = waitForArtifactandlogretentionUpdated(id);
  block(matchDeleteArtifactandlogretention(id), function () {
    verifyArtifactandlogretentionUpdated(id);
  });
  deleteArtifactandlogretention(x.id);
  const e_del = waitForArtifactandlogretentionDeleted(id);
  block(matchAddArtifactandlogretention(id), function () {
    verifyArtifactandlogretentionDoesNotExist(id);
  });
});

bthread("AssetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAsset(x.id);
  const e_add = waitForAssetAdded(id);
  block(matchDeleteAsset(id), function () {
    verifyAssetExists(id);
  });
  updateAsset(x.id);
  updateAsset(x.id);
  const e_upd = waitForAssetUpdated(id);
  block(matchDeleteAsset(id), function () {
    verifyAssetUpdated(id);
  });
  deleteAsset(x.id);
  const e_del = waitForAssetDeleted(id);
  block(matchAddAsset(id), function () {
    verifyAssetDoesNotExist(id);
  });
});

bthread("AssigneeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAssignee(x.id);
  const e_add = waitForAssigneeAdded(id);
  block(matchDeleteAssignee(id), function () {
    verifyAssigneeExists(id);
  });
  updateAssignee(x.id);
  updateAssignee(x.id);
  const e_upd = waitForAssigneeUpdated(id);
  block(matchDeleteAssignee(id), function () {
    verifyAssigneeUpdated(id);
  });
  deleteAssignee(x.id);
  const e_del = waitForAssigneeDeleted(id);
  block(matchAddAssignee(id), function () {
    verifyAssigneeDoesNotExist(id);
  });
});

bthread("AssignmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAssignment(x.id);
  const e_add = waitForAssignmentAdded(id);
  block(matchDeleteAssignment(id), function () {
    verifyAssignmentExists(id);
  });
  updateAssignment(x.id);
  updateAssignment(x.id);
  const e_upd = waitForAssignmentUpdated(id);
  block(matchDeleteAssignment(id), function () {
    verifyAssignmentUpdated(id);
  });
  deleteAssignment(x.id);
  const e_del = waitForAssignmentDeleted(id);
  block(matchAddAssignment(id), function () {
    verifyAssignmentDoesNotExist(id);
  });
});

bthread("AttachLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAttach(x.id);
  const e_add = waitForAttachAdded(id);
  block(matchDeleteAttach(id), function () {
    verifyAttachExists(id);
  });
  updateAttach(x.id);
  updateAttach(x.id);
  const e_upd = waitForAttachUpdated(id);
  block(matchDeleteAttach(id), function () {
    verifyAttachUpdated(id);
  });
  deleteAttach(x.id);
  const e_del = waitForAttachDeleted(id);
  block(matchAddAttach(id), function () {
    verifyAttachDoesNotExist(id);
  });
});

bthread("AttemptLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAttempt(x.id);
  const e_add = waitForAttemptAdded(id);
  block(matchDeleteAttempt(id), function () {
    verifyAttemptExists(id);
  });
  updateAttempt(x.id);
  updateAttempt(x.id);
  const e_upd = waitForAttemptUpdated(id);
  block(matchDeleteAttempt(id), function () {
    verifyAttemptUpdated(id);
  });
  deleteAttempt(x.id);
  const e_del = waitForAttemptDeleted(id);
  block(matchAddAttempt(id), function () {
    verifyAttemptDoesNotExist(id);
  });
});

bthread("AttestationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAttestation(x.id);
  const e_add = waitForAttestationAdded(id);
  block(matchDeleteAttestation(id), function () {
    verifyAttestationExists(id);
  });
  updateAttestation(x.id);
  updateAttestation(x.id);
  const e_upd = waitForAttestationUpdated(id);
  block(matchDeleteAttestation(id), function () {
    verifyAttestationUpdated(id);
  });
  deleteAttestation(x.id);
  const e_del = waitForAttestationDeleted(id);
  block(matchAddAttestation(id), function () {
    verifyAttestationDoesNotExist(id);
  });
});

bthread("AuthorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAuthor(x.id);
  const e_add = waitForAuthorAdded(id);
  block(matchDeleteAuthor(id), function () {
    verifyAuthorExists(id);
  });
  updateAuthor(x.id);
  updateAuthor(x.id);
  const e_upd = waitForAuthorUpdated(id);
  block(matchDeleteAuthor(id), function () {
    verifyAuthorUpdated(id);
  });
  deleteAuthor(x.id);
  const e_del = waitForAuthorDeleted(id);
  block(matchAddAuthor(id), function () {
    verifyAuthorDoesNotExist(id);
  });
});

bthread("AutofixLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAutofix(x.id);
  const e_add = waitForAutofixAdded(id);
  block(matchDeleteAutofix(id), function () {
    verifyAutofixExists(id);
  });
  updateAutofix(x.id);
  updateAutofix(x.id);
  const e_upd = waitForAutofixUpdated(id);
  block(matchDeleteAutofix(id), function () {
    verifyAutofixUpdated(id);
  });
  deleteAutofix(x.id);
  const e_del = waitForAutofixDeleted(id);
  block(matchAddAutofix(id), function () {
    verifyAutofixDoesNotExist(id);
  });
});

bthread("AutolinkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAutolink(x.id);
  const e_add = waitForAutolinkAdded(id);
  block(matchDeleteAutolink(id), function () {
    verifyAutolinkExists(id);
  });
  updateAutolink(x.id);
  updateAutolink(x.id);
  const e_upd = waitForAutolinkUpdated(id);
  block(matchDeleteAutolink(id), function () {
    verifyAutolinkUpdated(id);
  });
  deleteAutolink(x.id);
  const e_del = waitForAutolinkDeleted(id);
  block(matchAddAutolink(id), function () {
    verifyAutolinkDoesNotExist(id);
  });
});

bthread("AutomatedsecurityfixeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAutomatedsecurityfixe(x.id);
  const e_add = waitForAutomatedsecurityfixeAdded(id);
  block(matchDeleteAutomatedsecurityfixe(id), function () {
    verifyAutomatedsecurityfixeExists(id);
  });
  updateAutomatedsecurityfixe(x.id);
  updateAutomatedsecurityfixe(x.id);
  const e_upd = waitForAutomatedsecurityfixeUpdated(id);
  block(matchDeleteAutomatedsecurityfixe(id), function () {
    verifyAutomatedsecurityfixeUpdated(id);
  });
  deleteAutomatedsecurityfixe(x.id);
  const e_del = waitForAutomatedsecurityfixeDeleted(id);
  block(matchAddAutomatedsecurityfixe(id), function () {
    verifyAutomatedsecurityfixeDoesNotExist(id);
  });
});

bthread("BillingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBilling(x.id);
  const e_add = waitForBillingAdded(id);
  block(matchDeleteBilling(id), function () {
    verifyBillingExists(id);
  });
  updateBilling(x.id);
  updateBilling(x.id);
  const e_upd = waitForBillingUpdated(id);
  block(matchDeleteBilling(id), function () {
    verifyBillingUpdated(id);
  });
  deleteBilling(x.id);
  const e_del = waitForBillingDeleted(id);
  block(matchAddBilling(id), function () {
    verifyBillingDoesNotExist(id);
  });
});

bthread("BlobLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBlob(x.id);
  const e_add = waitForBlobAdded(id);
  block(matchDeleteBlob(id), function () {
    verifyBlobExists(id);
  });
  updateBlob(x.id);
  updateBlob(x.id);
  const e_upd = waitForBlobUpdated(id);
  block(matchDeleteBlob(id), function () {
    verifyBlobUpdated(id);
  });
  deleteBlob(x.id);
  const e_del = waitForBlobDeleted(id);
  block(matchAddBlob(id), function () {
    verifyBlobDoesNotExist(id);
  });
});

bthread("BlockLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBlock(x.id);
  const e_add = waitForBlockAdded(id);
  block(matchDeleteBlock(id), function () {
    verifyBlockExists(id);
  });
  updateBlock(x.id);
  updateBlock(x.id);
  const e_upd = waitForBlockUpdated(id);
  block(matchDeleteBlock(id), function () {
    verifyBlockUpdated(id);
  });
  deleteBlock(x.id);
  const e_del = waitForBlockDeleted(id);
  block(matchAddBlock(id), function () {
    verifyBlockDoesNotExist(id);
  });
});

bthread("BlockedbyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBlockedby(x.id);
  const e_add = waitForBlockedbyAdded(id);
  block(matchDeleteBlockedby(id), function () {
    verifyBlockedbyExists(id);
  });
  updateBlockedby(x.id);
  updateBlockedby(x.id);
  const e_upd = waitForBlockedbyUpdated(id);
  block(matchDeleteBlockedby(id), function () {
    verifyBlockedbyUpdated(id);
  });
  deleteBlockedby(x.id);
  const e_del = waitForBlockedbyDeleted(id);
  block(matchAddBlockedby(id), function () {
    verifyBlockedbyDoesNotExist(id);
  });
});

bthread("BlockingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBlocking(x.id);
  const e_add = waitForBlockingAdded(id);
  block(matchDeleteBlocking(id), function () {
    verifyBlockingExists(id);
  });
  updateBlocking(x.id);
  updateBlocking(x.id);
  const e_upd = waitForBlockingUpdated(id);
  block(matchDeleteBlocking(id), function () {
    verifyBlockingUpdated(id);
  });
  deleteBlocking(x.id);
  const e_del = waitForBlockingDeleted(id);
  block(matchAddBlocking(id), function () {
    verifyBlockingDoesNotExist(id);
  });
});

bthread("BrancheLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBranche(x.id);
  const e_add = waitForBrancheAdded(id);
  block(matchDeleteBranche(id), function () {
    verifyBrancheExists(id);
  });
  updateBranche(x.id);
  updateBranche(x.id);
  const e_upd = waitForBrancheUpdated(id);
  block(matchDeleteBranche(id), function () {
    verifyBrancheUpdated(id);
  });
  deleteBranche(x.id);
  const e_del = waitForBrancheDeleted(id);
  block(matchAddBranche(id), function () {
    verifyBrancheDoesNotExist(id);
  });
});

bthread("BrancheswhereheadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBrancheswherehead(x.id);
  const e_add = waitForBrancheswhereheadAdded(id);
  block(matchDeleteBrancheswherehead(id), function () {
    verifyBrancheswhereheadExists(id);
  });
  updateBrancheswherehead(x.id);
  updateBrancheswherehead(x.id);
  const e_upd = waitForBrancheswhereheadUpdated(id);
  block(matchDeleteBrancheswherehead(id), function () {
    verifyBrancheswhereheadUpdated(id);
  });
  deleteBrancheswherehead(x.id);
  const e_del = waitForBrancheswhereheadDeleted(id);
  block(matchAddBrancheswherehead(id), function () {
    verifyBrancheswhereheadDoesNotExist(id);
  });
});

bthread("BuildLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBuild(x.id);
  const e_add = waitForBuildAdded(id);
  block(matchDeleteBuild(id), function () {
    verifyBuildExists(id);
  });
  updateBuild(x.id);
  updateBuild(x.id);
  const e_upd = waitForBuildUpdated(id);
  block(matchDeleteBuild(id), function () {
    verifyBuildUpdated(id);
  });
  deleteBuild(x.id);
  const e_del = waitForBuildDeleted(id);
  block(matchAddBuild(id), function () {
    verifyBuildDoesNotExist(id);
  });
});

bthread("BulklistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBulklist(x.id);
  const e_add = waitForBulklistAdded(id);
  block(matchDeleteBulklist(id), function () {
    verifyBulklistExists(id);
  });
  updateBulklist(x.id);
  updateBulklist(x.id);
  const e_upd = waitForBulklistUpdated(id);
  block(matchDeleteBulklist(id), function () {
    verifyBulklistUpdated(id);
  });
  deleteBulklist(x.id);
  const e_del = waitForBulklistDeleted(id);
  block(matchAddBulklist(id), function () {
    verifyBulklistDoesNotExist(id);
  });
});

bthread("CacheLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCache(x.id);
  const e_add = waitForCacheAdded(id);
  block(matchDeleteCache(id), function () {
    verifyCacheExists(id);
  });
  updateCache(x.id);
  updateCache(x.id);
  const e_upd = waitForCacheUpdated(id);
  block(matchDeleteCache(id), function () {
    verifyCacheUpdated(id);
  });
  deleteCache(x.id);
  const e_del = waitForCacheDeleted(id);
  block(matchAddCache(id), function () {
    verifyCacheDoesNotExist(id);
  });
});

bthread("CampaignLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCampaign(x.id);
  const e_add = waitForCampaignAdded(id);
  block(matchDeleteCampaign(id), function () {
    verifyCampaignExists(id);
  });
  updateCampaign(x.id);
  updateCampaign(x.id);
  const e_upd = waitForCampaignUpdated(id);
  block(matchDeleteCampaign(id), function () {
    verifyCampaignUpdated(id);
  });
  deleteCampaign(x.id);
  const e_del = waitForCampaignDeleted(id);
  block(matchAddCampaign(id), function () {
    verifyCampaignDoesNotExist(id);
  });
});

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

bthread("CheckrunLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCheckrun(x.id);
  const e_add = waitForCheckrunAdded(id);
  block(matchDeleteCheckrun(id), function () {
    verifyCheckrunExists(id);
  });
  updateCheckrun(x.id);
  updateCheckrun(x.id);
  const e_upd = waitForCheckrunUpdated(id);
  block(matchDeleteCheckrun(id), function () {
    verifyCheckrunUpdated(id);
  });
  deleteCheckrun(x.id);
  const e_del = waitForCheckrunDeleted(id);
  block(matchAddCheckrun(id), function () {
    verifyCheckrunDoesNotExist(id);
  });
});

bthread("ChecksuiteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addChecksuite(x.id);
  const e_add = waitForChecksuiteAdded(id);
  block(matchDeleteChecksuite(id), function () {
    verifyChecksuiteExists(id);
  });
  updateChecksuite(x.id);
  updateChecksuite(x.id);
  const e_upd = waitForChecksuiteUpdated(id);
  block(matchDeleteChecksuite(id), function () {
    verifyChecksuiteUpdated(id);
  });
  deleteChecksuite(x.id);
  const e_del = waitForChecksuiteDeleted(id);
  block(matchAddChecksuite(id), function () {
    verifyChecksuiteDoesNotExist(id);
  });
});

bthread("ClassroomLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClassroom(x.id);
  const e_add = waitForClassroomAdded(id);
  block(matchDeleteClassroom(id), function () {
    verifyClassroomExists(id);
  });
  updateClassroom(x.id);
  updateClassroom(x.id);
  const e_upd = waitForClassroomUpdated(id);
  block(matchDeleteClassroom(id), function () {
    verifyClassroomUpdated(id);
  });
  deleteClassroom(x.id);
  const e_del = waitForClassroomDeleted(id);
  block(matchAddClassroom(id), function () {
    verifyClassroomDoesNotExist(id);
  });
});

bthread("CloneLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addClone(x.id);
  const e_add = waitForCloneAdded(id);
  block(matchDeleteClone(id), function () {
    verifyCloneExists(id);
  });
  updateClone(x.id);
  updateClone(x.id);
  const e_upd = waitForCloneUpdated(id);
  block(matchDeleteClone(id), function () {
    verifyCloneUpdated(id);
  });
  deleteClone(x.id);
  const e_del = waitForCloneDeleted(id);
  block(matchAddClone(id), function () {
    verifyCloneDoesNotExist(id);
  });
});

bthread("CodeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCode(x.id);
  const e_add = waitForCodeAdded(id);
  block(matchDeleteCode(id), function () {
    verifyCodeExists(id);
  });
  updateCode(x.id);
  updateCode(x.id);
  const e_upd = waitForCodeUpdated(id);
  block(matchDeleteCode(id), function () {
    verifyCodeUpdated(id);
  });
  deleteCode(x.id);
  const e_del = waitForCodeDeleted(id);
  block(matchAddCode(id), function () {
    verifyCodeDoesNotExist(id);
  });
});

bthread("CodefrequencyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodefrequency(x.id);
  const e_add = waitForCodefrequencyAdded(id);
  block(matchDeleteCodefrequency(id), function () {
    verifyCodefrequencyExists(id);
  });
  updateCodefrequency(x.id);
  updateCodefrequency(x.id);
  const e_upd = waitForCodefrequencyUpdated(id);
  block(matchDeleteCodefrequency(id), function () {
    verifyCodefrequencyUpdated(id);
  });
  deleteCodefrequency(x.id);
  const e_del = waitForCodefrequencyDeleted(id);
  block(matchAddCodefrequency(id), function () {
    verifyCodefrequencyDoesNotExist(id);
  });
});

bthread("CodeownerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodeowner(x.id);
  const e_add = waitForCodeownerAdded(id);
  block(matchDeleteCodeowner(id), function () {
    verifyCodeownerExists(id);
  });
  updateCodeowner(x.id);
  updateCodeowner(x.id);
  const e_upd = waitForCodeownerUpdated(id);
  block(matchDeleteCodeowner(id), function () {
    verifyCodeownerUpdated(id);
  });
  deleteCodeowner(x.id);
  const e_del = waitForCodeownerDeleted(id);
  block(matchAddCodeowner(id), function () {
    verifyCodeownerDoesNotExist(id);
  });
});

bthread("CodeqlLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodeql(x.id);
  const e_add = waitForCodeqlAdded(id);
  block(matchDeleteCodeql(id), function () {
    verifyCodeqlExists(id);
  });
  updateCodeql(x.id);
  updateCodeql(x.id);
  const e_upd = waitForCodeqlUpdated(id);
  block(matchDeleteCodeql(id), function () {
    verifyCodeqlUpdated(id);
  });
  deleteCodeql(x.id);
  const e_del = waitForCodeqlDeleted(id);
  block(matchAddCodeql(id), function () {
    verifyCodeqlDoesNotExist(id);
  });
});

bthread("CodescanningLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodescanning(x.id);
  const e_add = waitForCodescanningAdded(id);
  block(matchDeleteCodescanning(id), function () {
    verifyCodescanningExists(id);
  });
  updateCodescanning(x.id);
  updateCodescanning(x.id);
  const e_upd = waitForCodescanningUpdated(id);
  block(matchDeleteCodescanning(id), function () {
    verifyCodescanningUpdated(id);
  });
  deleteCodescanning(x.id);
  const e_del = waitForCodescanningDeleted(id);
  block(matchAddCodescanning(id), function () {
    verifyCodescanningDoesNotExist(id);
  });
});

bthread("CodesecurityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodesecurity(x.id);
  const e_add = waitForCodesecurityAdded(id);
  block(matchDeleteCodesecurity(id), function () {
    verifyCodesecurityExists(id);
  });
  updateCodesecurity(x.id);
  updateCodesecurity(x.id);
  const e_upd = waitForCodesecurityUpdated(id);
  block(matchDeleteCodesecurity(id), function () {
    verifyCodesecurityUpdated(id);
  });
  deleteCodesecurity(x.id);
  const e_del = waitForCodesecurityDeleted(id);
  block(matchAddCodesecurity(id), function () {
    verifyCodesecurityDoesNotExist(id);
  });
});

bthread("CodesecurityconfigurationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodesecurityconfiguration(x.id);
  const e_add = waitForCodesecurityconfigurationAdded(id);
  block(matchDeleteCodesecurityconfiguration(id), function () {
    verifyCodesecurityconfigurationExists(id);
  });
  updateCodesecurityconfiguration(x.id);
  updateCodesecurityconfiguration(x.id);
  const e_upd = waitForCodesecurityconfigurationUpdated(id);
  block(matchDeleteCodesecurityconfiguration(id), function () {
    verifyCodesecurityconfigurationUpdated(id);
  });
  deleteCodesecurityconfiguration(x.id);
  const e_del = waitForCodesecurityconfigurationDeleted(id);
  block(matchAddCodesecurityconfiguration(id), function () {
    verifyCodesecurityconfigurationDoesNotExist(id);
  });
});

bthread("CodesofconductLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodesofconduct(x.id);
  const e_add = waitForCodesofconductAdded(id);
  block(matchDeleteCodesofconduct(id), function () {
    verifyCodesofconductExists(id);
  });
  updateCodesofconduct(x.id);
  updateCodesofconduct(x.id);
  const e_upd = waitForCodesofconductUpdated(id);
  block(matchDeleteCodesofconduct(id), function () {
    verifyCodesofconductUpdated(id);
  });
  deleteCodesofconduct(x.id);
  const e_del = waitForCodesofconductDeleted(id);
  block(matchAddCodesofconduct(id), function () {
    verifyCodesofconductDoesNotExist(id);
  });
});

bthread("CodespaceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCodespace(x.id);
  const e_add = waitForCodespaceAdded(id);
  block(matchDeleteCodespace(id), function () {
    verifyCodespaceExists(id);
  });
  updateCodespace(x.id);
  updateCodespace(x.id);
  const e_upd = waitForCodespaceUpdated(id);
  block(matchDeleteCodespace(id), function () {
    verifyCodespaceUpdated(id);
  });
  deleteCodespace(x.id);
  const e_del = waitForCodespaceDeleted(id);
  block(matchAddCodespace(id), function () {
    verifyCodespaceDoesNotExist(id);
  });
});

bthread("CollaboratorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCollaborator(x.id);
  const e_add = waitForCollaboratorAdded(id);
  block(matchDeleteCollaborator(id), function () {
    verifyCollaboratorExists(id);
  });
  updateCollaborator(x.id);
  updateCollaborator(x.id);
  const e_upd = waitForCollaboratorUpdated(id);
  block(matchDeleteCollaborator(id), function () {
    verifyCollaboratorUpdated(id);
  });
  deleteCollaborator(x.id);
  const e_del = waitForCollaboratorDeleted(id);
  block(matchAddCollaborator(id), function () {
    verifyCollaboratorDoesNotExist(id);
  });
});

bthread("ColumnLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addColumn(x.id);
  const e_add = waitForColumnAdded(id);
  block(matchDeleteColumn(id), function () {
    verifyColumnExists(id);
  });
  updateColumn(x.id);
  updateColumn(x.id);
  const e_upd = waitForColumnUpdated(id);
  block(matchDeleteColumn(id), function () {
    verifyColumnUpdated(id);
  });
  deleteColumn(x.id);
  const e_del = waitForColumnDeleted(id);
  block(matchAddColumn(id), function () {
    verifyColumnDoesNotExist(id);
  });
});

bthread("CommentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addComment(x.id);
  const e_add = waitForCommentAdded(id);
  block(matchDeleteComment(id), function () {
    verifyCommentExists(id);
  });
  updateComment(x.id);
  updateComment(x.id);
  const e_upd = waitForCommentUpdated(id);
  block(matchDeleteComment(id), function () {
    verifyCommentUpdated(id);
  });
  deleteComment(x.id);
  const e_del = waitForCommentDeleted(id);
  block(matchAddComment(id), function () {
    verifyCommentDoesNotExist(id);
  });
});

bthread("CommitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCommit(x.id);
  const e_add = waitForCommitAdded(id);
  block(matchDeleteCommit(id), function () {
    verifyCommitExists(id);
  });
  updateCommit(x.id);
  updateCommit(x.id);
  const e_upd = waitForCommitUpdated(id);
  block(matchDeleteCommit(id), function () {
    verifyCommitUpdated(id);
  });
  deleteCommit(x.id);
  const e_del = waitForCommitDeleted(id);
  block(matchAddCommit(id), function () {
    verifyCommitDoesNotExist(id);
  });
});

bthread("CommitactivityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCommitactivity(x.id);
  const e_add = waitForCommitactivityAdded(id);
  block(matchDeleteCommitactivity(id), function () {
    verifyCommitactivityExists(id);
  });
  updateCommitactivity(x.id);
  updateCommitactivity(x.id);
  const e_upd = waitForCommitactivityUpdated(id);
  block(matchDeleteCommitactivity(id), function () {
    verifyCommitactivityUpdated(id);
  });
  deleteCommitactivity(x.id);
  const e_del = waitForCommitactivityDeleted(id);
  block(matchAddCommitactivity(id), function () {
    verifyCommitactivityDoesNotExist(id);
  });
});

bthread("CommunityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCommunity(x.id);
  const e_add = waitForCommunityAdded(id);
  block(matchDeleteCommunity(id), function () {
    verifyCommunityExists(id);
  });
  updateCommunity(x.id);
  updateCommunity(x.id);
  const e_upd = waitForCommunityUpdated(id);
  block(matchDeleteCommunity(id), function () {
    verifyCommunityUpdated(id);
  });
  deleteCommunity(x.id);
  const e_del = waitForCommunityDeleted(id);
  block(matchAddCommunity(id), function () {
    verifyCommunityDoesNotExist(id);
  });
});

bthread("CompareLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCompare(x.id);
  const e_add = waitForCompareAdded(id);
  block(matchDeleteCompare(id), function () {
    verifyCompareExists(id);
  });
  updateCompare(x.id);
  updateCompare(x.id);
  const e_upd = waitForCompareUpdated(id);
  block(matchDeleteCompare(id), function () {
    verifyCompareUpdated(id);
  });
  deleteCompare(x.id);
  const e_del = waitForCompareDeleted(id);
  block(matchAddCompare(id), function () {
    verifyCompareDoesNotExist(id);
  });
});

bthread("ConfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfig(x.id);
  const e_add = waitForConfigAdded(id);
  block(matchDeleteConfig(id), function () {
    verifyConfigExists(id);
  });
  updateConfig(x.id);
  updateConfig(x.id);
  const e_upd = waitForConfigUpdated(id);
  block(matchDeleteConfig(id), function () {
    verifyConfigUpdated(id);
  });
  deleteConfig(x.id);
  const e_del = waitForConfigDeleted(id);
  block(matchAddConfig(id), function () {
    verifyConfigDoesNotExist(id);
  });
});

bthread("ConfigurationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConfiguration(x.id);
  const e_add = waitForConfigurationAdded(id);
  block(matchDeleteConfiguration(id), function () {
    verifyConfigurationExists(id);
  });
  updateConfiguration(x.id);
  updateConfiguration(x.id);
  const e_upd = waitForConfigurationUpdated(id);
  block(matchDeleteConfiguration(id), function () {
    verifyConfigurationUpdated(id);
  });
  deleteConfiguration(x.id);
  const e_del = waitForConfigurationDeleted(id);
  block(matchAddConfiguration(id), function () {
    verifyConfigurationDoesNotExist(id);
  });
});

bthread("ConflictLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConflict(x.id);
  const e_add = waitForConflictAdded(id);
  block(matchDeleteConflict(id), function () {
    verifyConflictExists(id);
  });
  updateConflict(x.id);
  updateConflict(x.id);
  const e_upd = waitForConflictUpdated(id);
  block(matchDeleteConflict(id), function () {
    verifyConflictUpdated(id);
  });
  deleteConflict(x.id);
  const e_del = waitForConflictDeleted(id);
  block(matchAddConflict(id), function () {
    verifyConflictDoesNotExist(id);
  });
});

bthread("ContentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContent(x.id);
  const e_add = waitForContentAdded(id);
  block(matchDeleteContent(id), function () {
    verifyContentExists(id);
  });
  updateContent(x.id);
  updateContent(x.id);
  const e_upd = waitForContentUpdated(id);
  block(matchDeleteContent(id), function () {
    verifyContentUpdated(id);
  });
  deleteContent(x.id);
  const e_del = waitForContentDeleted(id);
  block(matchAddContent(id), function () {
    verifyContentDoesNotExist(id);
  });
});

bthread("ContextLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContext(x.id);
  const e_add = waitForContextAdded(id);
  block(matchDeleteContext(id), function () {
    verifyContextExists(id);
  });
  updateContext(x.id);
  updateContext(x.id);
  const e_upd = waitForContextUpdated(id);
  block(matchDeleteContext(id), function () {
    verifyContextUpdated(id);
  });
  deleteContext(x.id);
  const e_del = waitForContextDeleted(id);
  block(matchAddContext(id), function () {
    verifyContextDoesNotExist(id);
  });
});

bthread("ContributorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addContributor(x.id);
  const e_add = waitForContributorAdded(id);
  block(matchDeleteContributor(id), function () {
    verifyContributorExists(id);
  });
  updateContributor(x.id);
  updateContributor(x.id);
  const e_upd = waitForContributorUpdated(id);
  block(matchDeleteContributor(id), function () {
    verifyContributorUpdated(id);
  });
  deleteContributor(x.id);
  const e_del = waitForContributorDeleted(id);
  block(matchAddContributor(id), function () {
    verifyContributorDoesNotExist(id);
  });
});

bthread("ConversionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addConversion(x.id);
  const e_add = waitForConversionAdded(id);
  block(matchDeleteConversion(id), function () {
    verifyConversionExists(id);
  });
  updateConversion(x.id);
  updateConversion(x.id);
  const e_upd = waitForConversionUpdated(id);
  block(matchDeleteConversion(id), function () {
    verifyConversionUpdated(id);
  });
  deleteConversion(x.id);
  const e_del = waitForConversionDeleted(id);
  block(matchAddConversion(id), function () {
    verifyConversionDoesNotExist(id);
  });
});

bthread("CopilotLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCopilot(x.id);
  const e_add = waitForCopilotAdded(id);
  block(matchDeleteCopilot(id), function () {
    verifyCopilotExists(id);
  });
  updateCopilot(x.id);
  updateCopilot(x.id);
  const e_upd = waitForCopilotUpdated(id);
  block(matchDeleteCopilot(id), function () {
    verifyCopilotUpdated(id);
  });
  deleteCopilot(x.id);
  const e_del = waitForCopilotDeleted(id);
  block(matchAddCopilot(id), function () {
    verifyCopilotDoesNotExist(id);
  });
});

bthread("CredentialLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCredential(x.id);
  const e_add = waitForCredentialAdded(id);
  block(matchDeleteCredential(id), function () {
    verifyCredentialExists(id);
  });
  updateCredential(x.id);
  updateCredential(x.id);
  const e_upd = waitForCredentialUpdated(id);
  block(matchDeleteCredential(id), function () {
    verifyCredentialUpdated(id);
  });
  deleteCredential(x.id);
  const e_del = waitForCredentialDeleted(id);
  block(matchAddCredential(id), function () {
    verifyCredentialDoesNotExist(id);
  });
});

bthread("CustomizationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCustomization(x.id);
  const e_add = waitForCustomizationAdded(id);
  block(matchDeleteCustomization(id), function () {
    verifyCustomizationExists(id);
  });
  updateCustomization(x.id);
  updateCustomization(x.id);
  const e_upd = waitForCustomizationUpdated(id);
  block(matchDeleteCustomization(id), function () {
    verifyCustomizationUpdated(id);
  });
  deleteCustomization(x.id);
  const e_del = waitForCustomizationDeleted(id);
  block(matchAddCustomization(id), function () {
    verifyCustomizationDoesNotExist(id);
  });
});

bthread("CveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCve(x.id);
  const e_add = waitForCveAdded(id);
  block(matchDeleteCve(id), function () {
    verifyCveExists(id);
  });
  updateCve(x.id);
  updateCve(x.id);
  const e_upd = waitForCveUpdated(id);
  block(matchDeleteCve(id), function () {
    verifyCveUpdated(id);
  });
  deleteCve(x.id);
  const e_del = waitForCveDeleted(id);
  block(matchAddCve(id), function () {
    verifyCveDoesNotExist(id);
  });
});

bthread("DatabasLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDatabas(x.id);
  const e_add = waitForDatabasAdded(id);
  block(matchDeleteDatabas(id), function () {
    verifyDatabasExists(id);
  });
  updateDatabas(x.id);
  updateDatabas(x.id);
  const e_upd = waitForDatabasUpdated(id);
  block(matchDeleteDatabas(id), function () {
    verifyDatabasUpdated(id);
  });
  deleteDatabas(x.id);
  const e_del = waitForDatabasDeleted(id);
  block(matchAddDatabas(id), function () {
    verifyDatabasDoesNotExist(id);
  });
});

bthread("DefaultLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefault(x.id);
  const e_add = waitForDefaultAdded(id);
  block(matchDeleteDefault(id), function () {
    verifyDefaultExists(id);
  });
  updateDefault(x.id);
  updateDefault(x.id);
  const e_upd = waitForDefaultUpdated(id);
  block(matchDeleteDefault(id), function () {
    verifyDefaultUpdated(id);
  });
  deleteDefault(x.id);
  const e_del = waitForDefaultDeleted(id);
  block(matchAddDefault(id), function () {
    verifyDefaultDoesNotExist(id);
  });
});

bthread("DefaultlevelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultlevel(x.id);
  const e_add = waitForDefaultlevelAdded(id);
  block(matchDeleteDefaultlevel(id), function () {
    verifyDefaultlevelExists(id);
  });
  updateDefaultlevel(x.id);
  updateDefaultlevel(x.id);
  const e_upd = waitForDefaultlevelUpdated(id);
  block(matchDeleteDefaultlevel(id), function () {
    verifyDefaultlevelUpdated(id);
  });
  deleteDefaultlevel(x.id);
  const e_del = waitForDefaultlevelDeleted(id);
  block(matchAddDefaultlevel(id), function () {
    verifyDefaultlevelDoesNotExist(id);
  });
});

bthread("DefaultsetupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDefaultsetup(x.id);
  const e_add = waitForDefaultsetupAdded(id);
  block(matchDeleteDefaultsetup(id), function () {
    verifyDefaultsetupExists(id);
  });
  updateDefaultsetup(x.id);
  updateDefaultsetup(x.id);
  const e_upd = waitForDefaultsetupUpdated(id);
  block(matchDeleteDefaultsetup(id), function () {
    verifyDefaultsetupUpdated(id);
  });
  deleteDefaultsetup(x.id);
  const e_del = waitForDefaultsetupDeleted(id);
  block(matchAddDefaultsetup(id), function () {
    verifyDefaultsetupDoesNotExist(id);
  });
});

bthread("DeleterequestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeleterequest(x.id);
  const e_add = waitForDeleterequestAdded(id);
  block(matchDeleteDeleterequest(id), function () {
    verifyDeleterequestExists(id);
  });
  updateDeleterequest(x.id);
  updateDeleterequest(x.id);
  const e_upd = waitForDeleterequestUpdated(id);
  block(matchDeleteDeleterequest(id), function () {
    verifyDeleterequestUpdated(id);
  });
  deleteDeleterequest(x.id);
  const e_del = waitForDeleterequestDeleted(id);
  block(matchAddDeleterequest(id), function () {
    verifyDeleterequestDoesNotExist(id);
  });
});

bthread("DeliveryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDelivery(x.id);
  const e_add = waitForDeliveryAdded(id);
  block(matchDeleteDelivery(id), function () {
    verifyDeliveryExists(id);
  });
  updateDelivery(x.id);
  updateDelivery(x.id);
  const e_upd = waitForDeliveryUpdated(id);
  block(matchDeleteDelivery(id), function () {
    verifyDeliveryUpdated(id);
  });
  deleteDelivery(x.id);
  const e_del = waitForDeliveryDeleted(id);
  block(matchAddDelivery(id), function () {
    verifyDeliveryDoesNotExist(id);
  });
});

bthread("DependabotLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDependabot(x.id);
  const e_add = waitForDependabotAdded(id);
  block(matchDeleteDependabot(id), function () {
    verifyDependabotExists(id);
  });
  updateDependabot(x.id);
  updateDependabot(x.id);
  const e_upd = waitForDependabotUpdated(id);
  block(matchDeleteDependabot(id), function () {
    verifyDependabotUpdated(id);
  });
  deleteDependabot(x.id);
  const e_del = waitForDependabotDeleted(id);
  block(matchAddDependabot(id), function () {
    verifyDependabotDoesNotExist(id);
  });
});

bthread("DependencyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDependency(x.id);
  const e_add = waitForDependencyAdded(id);
  block(matchDeleteDependency(id), function () {
    verifyDependencyExists(id);
  });
  updateDependency(x.id);
  updateDependency(x.id);
  const e_upd = waitForDependencyUpdated(id);
  block(matchDeleteDependency(id), function () {
    verifyDependencyUpdated(id);
  });
  deleteDependency(x.id);
  const e_del = waitForDependencyDeleted(id);
  block(matchAddDependency(id), function () {
    verifyDependencyDoesNotExist(id);
  });
});

bthread("DependencygraphLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDependencygraph(x.id);
  const e_add = waitForDependencygraphAdded(id);
  block(matchDeleteDependencygraph(id), function () {
    verifyDependencygraphExists(id);
  });
  updateDependencygraph(x.id);
  updateDependencygraph(x.id);
  const e_upd = waitForDependencygraphUpdated(id);
  block(matchDeleteDependencygraph(id), function () {
    verifyDependencygraphUpdated(id);
  });
  deleteDependencygraph(x.id);
  const e_del = waitForDependencygraphDeleted(id);
  block(matchAddDependencygraph(id), function () {
    verifyDependencygraphDoesNotExist(id);
  });
});

bthread("DeploymentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeployment(x.id);
  const e_add = waitForDeploymentAdded(id);
  block(matchDeleteDeployment(id), function () {
    verifyDeploymentExists(id);
  });
  updateDeployment(x.id);
  updateDeployment(x.id);
  const e_upd = waitForDeploymentUpdated(id);
  block(matchDeleteDeployment(id), function () {
    verifyDeploymentUpdated(id);
  });
  deleteDeployment(x.id);
  const e_del = waitForDeploymentDeleted(id);
  block(matchAddDeployment(id), function () {
    verifyDeploymentDoesNotExist(id);
  });
});

bthread("DeploymentbranchpolicyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeploymentbranchpolicy(x.id);
  const e_add = waitForDeploymentbranchpolicyAdded(id);
  block(matchDeleteDeploymentbranchpolicy(id), function () {
    verifyDeploymentbranchpolicyExists(id);
  });
  updateDeploymentbranchpolicy(x.id);
  updateDeploymentbranchpolicy(x.id);
  const e_upd = waitForDeploymentbranchpolicyUpdated(id);
  block(matchDeleteDeploymentbranchpolicy(id), function () {
    verifyDeploymentbranchpolicyUpdated(id);
  });
  deleteDeploymentbranchpolicy(x.id);
  const e_del = waitForDeploymentbranchpolicyDeleted(id);
  block(matchAddDeploymentbranchpolicy(id), function () {
    verifyDeploymentbranchpolicyDoesNotExist(id);
  });
});

bthread("DeploymentprotectionruleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeploymentprotectionrule(x.id);
  const e_add = waitForDeploymentprotectionruleAdded(id);
  block(matchDeleteDeploymentprotectionrule(id), function () {
    verifyDeploymentprotectionruleExists(id);
  });
  updateDeploymentprotectionrule(x.id);
  updateDeploymentprotectionrule(x.id);
  const e_upd = waitForDeploymentprotectionruleUpdated(id);
  block(matchDeleteDeploymentprotectionrule(id), function () {
    verifyDeploymentprotectionruleUpdated(id);
  });
  deleteDeploymentprotectionrule(x.id);
  const e_del = waitForDeploymentprotectionruleDeleted(id);
  block(matchAddDeploymentprotectionrule(id), function () {
    verifyDeploymentprotectionruleDoesNotExist(id);
  });
});

bthread("DetachLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDetach(x.id);
  const e_add = waitForDetachAdded(id);
  block(matchDeleteDetach(id), function () {
    verifyDetachExists(id);
  });
  updateDetach(x.id);
  updateDetach(x.id);
  const e_upd = waitForDetachUpdated(id);
  block(matchDeleteDetach(id), function () {
    verifyDetachUpdated(id);
  });
  deleteDetach(x.id);
  const e_del = waitForDetachDeleted(id);
  block(matchAddDetach(id), function () {
    verifyDetachDoesNotExist(id);
  });
});

bthread("DevcontainerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDevcontainer(x.id);
  const e_add = waitForDevcontainerAdded(id);
  block(matchDeleteDevcontainer(id), function () {
    verifyDevcontainerExists(id);
  });
  updateDevcontainer(x.id);
  updateDevcontainer(x.id);
  const e_upd = waitForDevcontainerUpdated(id);
  block(matchDeleteDevcontainer(id), function () {
    verifyDevcontainerUpdated(id);
  });
  deleteDevcontainer(x.id);
  const e_del = waitForDevcontainerDeleted(id);
  block(matchAddDevcontainer(id), function () {
    verifyDevcontainerDoesNotExist(id);
  });
});

bthread("DigestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDigest(x.id);
  const e_add = waitForDigestAdded(id);
  block(matchDeleteDigest(id), function () {
    verifyDigestExists(id);
  });
  updateDigest(x.id);
  updateDigest(x.id);
  const e_upd = waitForDigestUpdated(id);
  block(matchDeleteDigest(id), function () {
    verifyDigestUpdated(id);
  });
  deleteDigest(x.id);
  const e_del = waitForDigestDeleted(id);
  block(matchAddDigest(id), function () {
    verifyDigestDoesNotExist(id);
  });
});

bthread("DisableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDisable(x.id);
  const e_add = waitForDisableAdded(id);
  block(matchDeleteDisable(id), function () {
    verifyDisableExists(id);
  });
  updateDisable(x.id);
  updateDisable(x.id);
  const e_upd = waitForDisableUpdated(id);
  block(matchDeleteDisable(id), function () {
    verifyDisableUpdated(id);
  });
  deleteDisable(x.id);
  const e_del = waitForDisableDeleted(id);
  block(matchAddDisable(id), function () {
    verifyDisableDoesNotExist(id);
  });
});

bthread("DiscussionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDiscussion(x.id);
  const e_add = waitForDiscussionAdded(id);
  block(matchDeleteDiscussion(id), function () {
    verifyDiscussionExists(id);
  });
  updateDiscussion(x.id);
  updateDiscussion(x.id);
  const e_upd = waitForDiscussionUpdated(id);
  block(matchDeleteDiscussion(id), function () {
    verifyDiscussionUpdated(id);
  });
  deleteDiscussion(x.id);
  const e_del = waitForDiscussionDeleted(id);
  block(matchAddDiscussion(id), function () {
    verifyDiscussionDoesNotExist(id);
  });
});

bthread("DismissalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDismissal(x.id);
  const e_add = waitForDismissalAdded(id);
  block(matchDeleteDismissal(id), function () {
    verifyDismissalExists(id);
  });
  updateDismissal(x.id);
  updateDismissal(x.id);
  const e_upd = waitForDismissalUpdated(id);
  block(matchDeleteDismissal(id), function () {
    verifyDismissalUpdated(id);
  });
  deleteDismissal(x.id);
  const e_del = waitForDismissalDeleted(id);
  block(matchAddDismissal(id), function () {
    verifyDismissalDoesNotExist(id);
  });
});

bthread("DispatcheLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDispatche(x.id);
  const e_add = waitForDispatcheAdded(id);
  block(matchDeleteDispatche(id), function () {
    verifyDispatcheExists(id);
  });
  updateDispatche(x.id);
  updateDispatche(x.id);
  const e_upd = waitForDispatcheUpdated(id);
  block(matchDeleteDispatche(id), function () {
    verifyDispatcheUpdated(id);
  });
  deleteDispatche(x.id);
  const e_del = waitForDispatcheDeleted(id);
  block(matchAddDispatche(id), function () {
    verifyDispatcheDoesNotExist(id);
  });
});

bthread("DockerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDocker(x.id);
  const e_add = waitForDockerAdded(id);
  block(matchDeleteDocker(id), function () {
    verifyDockerExists(id);
  });
  updateDocker(x.id);
  updateDocker(x.id);
  const e_upd = waitForDockerUpdated(id);
  block(matchDeleteDocker(id), function () {
    verifyDockerUpdated(id);
  });
  deleteDocker(x.id);
  const e_del = waitForDockerDeleted(id);
  block(matchAddDocker(id), function () {
    verifyDockerDoesNotExist(id);
  });
});

bthread("DownloadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDownload(x.id);
  const e_add = waitForDownloadAdded(id);
  block(matchDeleteDownload(id), function () {
    verifyDownloadExists(id);
  });
  updateDownload(x.id);
  updateDownload(x.id);
  const e_upd = waitForDownloadUpdated(id);
  block(matchDeleteDownload(id), function () {
    verifyDownloadUpdated(id);
  });
  deleteDownload(x.id);
  const e_del = waitForDownloadDeleted(id);
  block(matchAddDownload(id), function () {
    verifyDownloadDoesNotExist(id);
  });
});

bthread("EmailLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmail(x.id);
  const e_add = waitForEmailAdded(id);
  block(matchDeleteEmail(id), function () {
    verifyEmailExists(id);
  });
  updateEmail(x.id);
  updateEmail(x.id);
  const e_upd = waitForEmailUpdated(id);
  block(matchDeleteEmail(id), function () {
    verifyEmailUpdated(id);
  });
  deleteEmail(x.id);
  const e_del = waitForEmailDeleted(id);
  block(matchAddEmail(id), function () {
    verifyEmailDoesNotExist(id);
  });
});

bthread("EmojiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEmoji(x.id);
  const e_add = waitForEmojiAdded(id);
  block(matchDeleteEmoji(id), function () {
    verifyEmojiExists(id);
  });
  updateEmoji(x.id);
  updateEmoji(x.id);
  const e_upd = waitForEmojiUpdated(id);
  block(matchDeleteEmoji(id), function () {
    verifyEmojiUpdated(id);
  });
  deleteEmoji(x.id);
  const e_del = waitForEmojiDeleted(id);
  block(matchAddEmoji(id), function () {
    verifyEmojiDoesNotExist(id);
  });
});

bthread("EnableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEnable(x.id);
  const e_add = waitForEnableAdded(id);
  block(matchDeleteEnable(id), function () {
    verifyEnableExists(id);
  });
  updateEnable(x.id);
  updateEnable(x.id);
  const e_upd = waitForEnableUpdated(id);
  block(matchDeleteEnable(id), function () {
    verifyEnableUpdated(id);
  });
  deleteEnable(x.id);
  const e_del = waitForEnableDeleted(id);
  block(matchAddEnable(id), function () {
    verifyEnableDoesNotExist(id);
  });
});

bthread("EnforceadminLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEnforceadmin(x.id);
  const e_add = waitForEnforceadminAdded(id);
  block(matchDeleteEnforceadmin(id), function () {
    verifyEnforceadminExists(id);
  });
  updateEnforceadmin(x.id);
  updateEnforceadmin(x.id);
  const e_upd = waitForEnforceadminUpdated(id);
  block(matchDeleteEnforceadmin(id), function () {
    verifyEnforceadminUpdated(id);
  });
  deleteEnforceadmin(x.id);
  const e_del = waitForEnforceadminDeleted(id);
  block(matchAddEnforceadmin(id), function () {
    verifyEnforceadminDoesNotExist(id);
  });
});

bthread("EnterprisLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEnterpris(x.id);
  const e_add = waitForEnterprisAdded(id);
  block(matchDeleteEnterpris(id), function () {
    verifyEnterprisExists(id);
  });
  updateEnterpris(x.id);
  updateEnterpris(x.id);
  const e_upd = waitForEnterprisUpdated(id);
  block(matchDeleteEnterpris(id), function () {
    verifyEnterprisUpdated(id);
  });
  deleteEnterpris(x.id);
  const e_del = waitForEnterprisDeleted(id);
  block(matchAddEnterpris(id), function () {
    verifyEnterprisDoesNotExist(id);
  });
});

bthread("EnvironmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEnvironment(x.id);
  const e_add = waitForEnvironmentAdded(id);
  block(matchDeleteEnvironment(id), function () {
    verifyEnvironmentExists(id);
  });
  updateEnvironment(x.id);
  updateEnvironment(x.id);
  const e_upd = waitForEnvironmentUpdated(id);
  block(matchDeleteEnvironment(id), function () {
    verifyEnvironmentUpdated(id);
  });
  deleteEnvironment(x.id);
  const e_del = waitForEnvironmentDeleted(id);
  block(matchAddEnvironment(id), function () {
    verifyEnvironmentDoesNotExist(id);
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

bthread("EventLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEvent(x.id);
  const e_add = waitForEventAdded(id);
  block(matchDeleteEvent(id), function () {
    verifyEventExists(id);
  });
  updateEvent(x.id);
  updateEvent(x.id);
  const e_upd = waitForEventUpdated(id);
  block(matchDeleteEvent(id), function () {
    verifyEventUpdated(id);
  });
  deleteEvent(x.id);
  const e_del = waitForEventDeleted(id);
  block(matchAddEvent(id), function () {
    verifyEventDoesNotExist(id);
  });
});

bthread("ExportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addExport(x.id);
  const e_add = waitForExportAdded(id);
  block(matchDeleteExport(id), function () {
    verifyExportExists(id);
  });
  updateExport(x.id);
  updateExport(x.id);
  const e_upd = waitForExportUpdated(id);
  block(matchDeleteExport(id), function () {
    verifyExportUpdated(id);
  });
  deleteExport(x.id);
  const e_del = waitForExportDeleted(id);
  block(matchAddExport(id), function () {
    verifyExportDoesNotExist(id);
  });
});

bthread("FailedinvitationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFailedinvitation(x.id);
  const e_add = waitForFailedinvitationAdded(id);
  block(matchDeleteFailedinvitation(id), function () {
    verifyFailedinvitationExists(id);
  });
  updateFailedinvitation(x.id);
  updateFailedinvitation(x.id);
  const e_upd = waitForFailedinvitationUpdated(id);
  block(matchDeleteFailedinvitation(id), function () {
    verifyFailedinvitationUpdated(id);
  });
  deleteFailedinvitation(x.id);
  const e_del = waitForFailedinvitationDeleted(id);
  block(matchAddFailedinvitation(id), function () {
    verifyFailedinvitationDoesNotExist(id);
  });
});

bthread("FeedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFeed(x.id);
  const e_add = waitForFeedAdded(id);
  block(matchDeleteFeed(id), function () {
    verifyFeedExists(id);
  });
  updateFeed(x.id);
  updateFeed(x.id);
  const e_upd = waitForFeedUpdated(id);
  block(matchDeleteFeed(id), function () {
    verifyFeedUpdated(id);
  });
  deleteFeed(x.id);
  const e_del = waitForFeedDeleted(id);
  block(matchAddFeed(id), function () {
    verifyFeedDoesNotExist(id);
  });
});

bthread("FieldLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addField(x.id);
  const e_add = waitForFieldAdded(id);
  block(matchDeleteField(id), function () {
    verifyFieldExists(id);
  });
  updateField(x.id);
  updateField(x.id);
  const e_upd = waitForFieldUpdated(id);
  block(matchDeleteField(id), function () {
    verifyFieldUpdated(id);
  });
  deleteField(x.id);
  const e_del = waitForFieldDeleted(id);
  block(matchAddField(id), function () {
    verifyFieldDoesNotExist(id);
  });
});

bthread("FileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFile(x.id);
  const e_add = waitForFileAdded(id);
  block(matchDeleteFile(id), function () {
    verifyFileExists(id);
  });
  updateFile(x.id);
  updateFile(x.id);
  const e_upd = waitForFileUpdated(id);
  block(matchDeleteFile(id), function () {
    verifyFileUpdated(id);
  });
  deleteFile(x.id);
  const e_del = waitForFileDeleted(id);
  block(matchAddFile(id), function () {
    verifyFileDoesNotExist(id);
  });
});

bthread("FollowerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFollower(x.id);
  const e_add = waitForFollowerAdded(id);
  block(matchDeleteFollower(id), function () {
    verifyFollowerExists(id);
  });
  updateFollower(x.id);
  updateFollower(x.id);
  const e_upd = waitForFollowerUpdated(id);
  block(matchDeleteFollower(id), function () {
    verifyFollowerUpdated(id);
  });
  deleteFollower(x.id);
  const e_del = waitForFollowerDeleted(id);
  block(matchAddFollower(id), function () {
    verifyFollowerDoesNotExist(id);
  });
});

bthread("FollowingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFollowing(x.id);
  const e_add = waitForFollowingAdded(id);
  block(matchDeleteFollowing(id), function () {
    verifyFollowingExists(id);
  });
  updateFollowing(x.id);
  updateFollowing(x.id);
  const e_upd = waitForFollowingUpdated(id);
  block(matchDeleteFollowing(id), function () {
    verifyFollowingUpdated(id);
  });
  deleteFollowing(x.id);
  const e_del = waitForFollowingDeleted(id);
  block(matchAddFollowing(id), function () {
    verifyFollowingDoesNotExist(id);
  });
});

bthread("ForcecancelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addForcecancel(x.id);
  const e_add = waitForForcecancelAdded(id);
  block(matchDeleteForcecancel(id), function () {
    verifyForcecancelExists(id);
  });
  updateForcecancel(x.id);
  updateForcecancel(x.id);
  const e_upd = waitForForcecancelUpdated(id);
  block(matchDeleteForcecancel(id), function () {
    verifyForcecancelUpdated(id);
  });
  deleteForcecancel(x.id);
  const e_del = waitForForcecancelDeleted(id);
  block(matchAddForcecancel(id), function () {
    verifyForcecancelDoesNotExist(id);
  });
});

bthread("ForkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addFork(x.id);
  const e_add = waitForForkAdded(id);
  block(matchDeleteFork(id), function () {
    verifyForkExists(id);
  });
  updateFork(x.id);
  updateFork(x.id);
  const e_upd = waitForForkUpdated(id);
  block(matchDeleteFork(id), function () {
    verifyForkUpdated(id);
  });
  deleteFork(x.id);
  const e_del = waitForForkDeleted(id);
  block(matchAddFork(id), function () {
    verifyForkDoesNotExist(id);
  });
});

bthread("ForkprcontributorapprovalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addForkprcontributorapproval(x.id);
  const e_add = waitForForkprcontributorapprovalAdded(id);
  block(matchDeleteForkprcontributorapproval(id), function () {
    verifyForkprcontributorapprovalExists(id);
  });
  updateForkprcontributorapproval(x.id);
  updateForkprcontributorapproval(x.id);
  const e_upd = waitForForkprcontributorapprovalUpdated(id);
  block(matchDeleteForkprcontributorapproval(id), function () {
    verifyForkprcontributorapprovalUpdated(id);
  });
  deleteForkprcontributorapproval(x.id);
  const e_del = waitForForkprcontributorapprovalDeleted(id);
  block(matchAddForkprcontributorapproval(id), function () {
    verifyForkprcontributorapprovalDoesNotExist(id);
  });
});

bthread("ForkprworkflowsprivaterepoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addForkprworkflowsprivaterepo(x.id);
  const e_add = waitForForkprworkflowsprivaterepoAdded(id);
  block(matchDeleteForkprworkflowsprivaterepo(id), function () {
    verifyForkprworkflowsprivaterepoExists(id);
  });
  updateForkprworkflowsprivaterepo(x.id);
  updateForkprworkflowsprivaterepo(x.id);
  const e_upd = waitForForkprworkflowsprivaterepoUpdated(id);
  block(matchDeleteForkprworkflowsprivaterepo(id), function () {
    verifyForkprworkflowsprivaterepoUpdated(id);
  });
  deleteForkprworkflowsprivaterepo(x.id);
  const e_del = waitForForkprworkflowsprivaterepoDeleted(id);
  block(matchAddForkprworkflowsprivaterepo(id), function () {
    verifyForkprworkflowsprivaterepoDoesNotExist(id);
  });
});

bthread("GenerateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGenerate(x.id);
  const e_add = waitForGenerateAdded(id);
  block(matchDeleteGenerate(id), function () {
    verifyGenerateExists(id);
  });
  updateGenerate(x.id);
  updateGenerate(x.id);
  const e_upd = waitForGenerateUpdated(id);
  block(matchDeleteGenerate(id), function () {
    verifyGenerateUpdated(id);
  });
  deleteGenerate(x.id);
  const e_del = waitForGenerateDeleted(id);
  block(matchAddGenerate(id), function () {
    verifyGenerateDoesNotExist(id);
  });
});

bthread("GeneratejitconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGeneratejitconfig(x.id);
  const e_add = waitForGeneratejitconfigAdded(id);
  block(matchDeleteGeneratejitconfig(id), function () {
    verifyGeneratejitconfigExists(id);
  });
  updateGeneratejitconfig(x.id);
  updateGeneratejitconfig(x.id);
  const e_upd = waitForGeneratejitconfigUpdated(id);
  block(matchDeleteGeneratejitconfig(id), function () {
    verifyGeneratejitconfigUpdated(id);
  });
  deleteGeneratejitconfig(x.id);
  const e_del = waitForGeneratejitconfigDeleted(id);
  block(matchAddGeneratejitconfig(id), function () {
    verifyGeneratejitconfigDoesNotExist(id);
  });
});

bthread("GeneratenoteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGeneratenote(x.id);
  const e_add = waitForGeneratenoteAdded(id);
  block(matchDeleteGeneratenote(id), function () {
    verifyGeneratenoteExists(id);
  });
  updateGeneratenote(x.id);
  updateGeneratenote(x.id);
  const e_upd = waitForGeneratenoteUpdated(id);
  block(matchDeleteGeneratenote(id), function () {
    verifyGeneratenoteUpdated(id);
  });
  deleteGeneratenote(x.id);
  const e_del = waitForGeneratenoteDeleted(id);
  block(matchAddGeneratenote(id), function () {
    verifyGeneratenoteDoesNotExist(id);
  });
});

bthread("GistLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGist(x.id);
  const e_add = waitForGistAdded(id);
  block(matchDeleteGist(id), function () {
    verifyGistExists(id);
  });
  updateGist(x.id);
  updateGist(x.id);
  const e_upd = waitForGistUpdated(id);
  block(matchDeleteGist(id), function () {
    verifyGistUpdated(id);
  });
  deleteGist(x.id);
  const e_del = waitForGistDeleted(id);
  block(matchAddGist(id), function () {
    verifyGistDoesNotExist(id);
  });
});

bthread("GitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGit(x.id);
  const e_add = waitForGitAdded(id);
  block(matchDeleteGit(id), function () {
    verifyGitExists(id);
  });
  updateGit(x.id);
  updateGit(x.id);
  const e_upd = waitForGitUpdated(id);
  block(matchDeleteGit(id), function () {
    verifyGitUpdated(id);
  });
  deleteGit(x.id);
  const e_del = waitForGitDeleted(id);
  block(matchAddGit(id), function () {
    verifyGitDoesNotExist(id);
  });
});

bthread("GithubownedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGithubowned(x.id);
  const e_add = waitForGithubownedAdded(id);
  block(matchDeleteGithubowned(id), function () {
    verifyGithubownedExists(id);
  });
  updateGithubowned(x.id);
  updateGithubowned(x.id);
  const e_upd = waitForGithubownedUpdated(id);
  block(matchDeleteGithubowned(id), function () {
    verifyGithubownedUpdated(id);
  });
  deleteGithubowned(x.id);
  const e_del = waitForGithubownedDeleted(id);
  block(matchAddGithubowned(id), function () {
    verifyGithubownedDoesNotExist(id);
  });
});

bthread("GitignoreLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGitignore(x.id);
  const e_add = waitForGitignoreAdded(id);
  block(matchDeleteGitignore(id), function () {
    verifyGitignoreExists(id);
  });
  updateGitignore(x.id);
  updateGitignore(x.id);
  const e_upd = waitForGitignoreUpdated(id);
  block(matchDeleteGitignore(id), function () {
    verifyGitignoreUpdated(id);
  });
  deleteGitignore(x.id);
  const e_del = waitForGitignoreDeleted(id);
  block(matchAddGitignore(id), function () {
    verifyGitignoreDoesNotExist(id);
  });
});

bthread("GpgkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGpgkey(x.id);
  const e_add = waitForGpgkeyAdded(id);
  block(matchDeleteGpgkey(id), function () {
    verifyGpgkeyExists(id);
  });
  updateGpgkey(x.id);
  updateGpgkey(x.id);
  const e_upd = waitForGpgkeyUpdated(id);
  block(matchDeleteGpgkey(id), function () {
    verifyGpgkeyUpdated(id);
  });
  deleteGpgkey(x.id);
  const e_del = waitForGpgkeyDeleted(id);
  block(matchAddGpgkey(id), function () {
    verifyGpgkeyDoesNotExist(id);
  });
});

bthread("GradeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGrade(x.id);
  const e_add = waitForGradeAdded(id);
  block(matchDeleteGrade(id), function () {
    verifyGradeExists(id);
  });
  updateGrade(x.id);
  updateGrade(x.id);
  const e_upd = waitForGradeUpdated(id);
  block(matchDeleteGrade(id), function () {
    verifyGradeUpdated(id);
  });
  deleteGrade(x.id);
  const e_del = waitForGradeDeleted(id);
  block(matchAddGrade(id), function () {
    verifyGradeDoesNotExist(id);
  });
});

bthread("GrantLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGrant(x.id);
  const e_add = waitForGrantAdded(id);
  block(matchDeleteGrant(id), function () {
    verifyGrantExists(id);
  });
  updateGrant(x.id);
  updateGrant(x.id);
  const e_upd = waitForGrantUpdated(id);
  block(matchDeleteGrant(id), function () {
    verifyGrantUpdated(id);
  });
  deleteGrant(x.id);
  const e_del = waitForGrantDeleted(id);
  block(matchAddGrant(id), function () {
    verifyGrantDoesNotExist(id);
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

bthread("HistoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHistory(x.id);
  const e_add = waitForHistoryAdded(id);
  block(matchDeleteHistory(id), function () {
    verifyHistoryExists(id);
  });
  updateHistory(x.id);
  updateHistory(x.id);
  const e_upd = waitForHistoryUpdated(id);
  block(matchDeleteHistory(id), function () {
    verifyHistoryUpdated(id);
  });
  deleteHistory(x.id);
  const e_del = waitForHistoryDeleted(id);
  block(matchAddHistory(id), function () {
    verifyHistoryDoesNotExist(id);
  });
});

bthread("HookLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHook(x.id);
  const e_add = waitForHookAdded(id);
  block(matchDeleteHook(id), function () {
    verifyHookExists(id);
  });
  updateHook(x.id);
  updateHook(x.id);
  const e_upd = waitForHookUpdated(id);
  block(matchDeleteHook(id), function () {
    verifyHookUpdated(id);
  });
  deleteHook(x.id);
  const e_del = waitForHookDeleted(id);
  block(matchAddHook(id), function () {
    verifyHookDoesNotExist(id);
  });
});

bthread("HostedrunnerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHostedrunner(x.id);
  const e_add = waitForHostedrunnerAdded(id);
  block(matchDeleteHostedrunner(id), function () {
    verifyHostedrunnerExists(id);
  });
  updateHostedrunner(x.id);
  updateHostedrunner(x.id);
  const e_upd = waitForHostedrunnerUpdated(id);
  block(matchDeleteHostedrunner(id), function () {
    verifyHostedrunnerUpdated(id);
  });
  deleteHostedrunner(x.id);
  const e_del = waitForHostedrunnerDeleted(id);
  block(matchAddHostedrunner(id), function () {
    verifyHostedrunnerDoesNotExist(id);
  });
});

bthread("HovercardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHovercard(x.id);
  const e_add = waitForHovercardAdded(id);
  block(matchDeleteHovercard(id), function () {
    verifyHovercardExists(id);
  });
  updateHovercard(x.id);
  updateHovercard(x.id);
  const e_upd = waitForHovercardUpdated(id);
  block(matchDeleteHovercard(id), function () {
    verifyHovercardUpdated(id);
  });
  deleteHovercard(x.id);
  const e_del = waitForHovercardDeleted(id);
  block(matchAddHovercard(id), function () {
    verifyHovercardDoesNotExist(id);
  });
});

bthread("ImageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addImage(x.id);
  const e_add = waitForImageAdded(id);
  block(matchDeleteImage(id), function () {
    verifyImageExists(id);
  });
  updateImage(x.id);
  updateImage(x.id);
  const e_upd = waitForImageUpdated(id);
  block(matchDeleteImage(id), function () {
    verifyImageUpdated(id);
  });
  deleteImage(x.id);
  const e_del = waitForImageDeleted(id);
  block(matchAddImage(id), function () {
    verifyImageDoesNotExist(id);
  });
});

bthread("ImmutablereleasLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addImmutablereleas(x.id);
  const e_add = waitForImmutablereleasAdded(id);
  block(matchDeleteImmutablereleas(id), function () {
    verifyImmutablereleasExists(id);
  });
  updateImmutablereleas(x.id);
  updateImmutablereleas(x.id);
  const e_upd = waitForImmutablereleasUpdated(id);
  block(matchDeleteImmutablereleas(id), function () {
    verifyImmutablereleasUpdated(id);
  });
  deleteImmutablereleas(x.id);
  const e_del = waitForImmutablereleasDeleted(id);
  block(matchAddImmutablereleas(id), function () {
    verifyImmutablereleasDoesNotExist(id);
  });
});

bthread("ImportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addImport(x.id);
  const e_add = waitForImportAdded(id);
  block(matchDeleteImport(id), function () {
    verifyImportExists(id);
  });
  updateImport(x.id);
  updateImport(x.id);
  const e_upd = waitForImportUpdated(id);
  block(matchDeleteImport(id), function () {
    verifyImportUpdated(id);
  });
  deleteImport(x.id);
  const e_del = waitForImportDeleted(id);
  block(matchAddImport(id), function () {
    verifyImportDoesNotExist(id);
  });
});

bthread("InsightLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInsight(x.id);
  const e_add = waitForInsightAdded(id);
  block(matchDeleteInsight(id), function () {
    verifyInsightExists(id);
  });
  updateInsight(x.id);
  updateInsight(x.id);
  const e_upd = waitForInsightUpdated(id);
  block(matchDeleteInsight(id), function () {
    verifyInsightUpdated(id);
  });
  deleteInsight(x.id);
  const e_del = waitForInsightDeleted(id);
  block(matchAddInsight(id), function () {
    verifyInsightDoesNotExist(id);
  });
});

bthread("InstallationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInstallation(x.id);
  const e_add = waitForInstallationAdded(id);
  block(matchDeleteInstallation(id), function () {
    verifyInstallationExists(id);
  });
  updateInstallation(x.id);
  updateInstallation(x.id);
  const e_upd = waitForInstallationUpdated(id);
  block(matchDeleteInstallation(id), function () {
    verifyInstallationUpdated(id);
  });
  deleteInstallation(x.id);
  const e_del = waitForInstallationDeleted(id);
  block(matchAddInstallation(id), function () {
    verifyInstallationDoesNotExist(id);
  });
});

bthread("InstallationrequestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInstallationrequest(x.id);
  const e_add = waitForInstallationrequestAdded(id);
  block(matchDeleteInstallationrequest(id), function () {
    verifyInstallationrequestExists(id);
  });
  updateInstallationrequest(x.id);
  updateInstallationrequest(x.id);
  const e_upd = waitForInstallationrequestUpdated(id);
  block(matchDeleteInstallationrequest(id), function () {
    verifyInstallationrequestUpdated(id);
  });
  deleteInstallationrequest(x.id);
  const e_del = waitForInstallationrequestDeleted(id);
  block(matchAddInstallationrequest(id), function () {
    verifyInstallationrequestDoesNotExist(id);
  });
});

bthread("InstanceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInstance(x.id);
  const e_add = waitForInstanceAdded(id);
  block(matchDeleteInstance(id), function () {
    verifyInstanceExists(id);
  });
  updateInstance(x.id);
  updateInstance(x.id);
  const e_upd = waitForInstanceUpdated(id);
  block(matchDeleteInstance(id), function () {
    verifyInstanceUpdated(id);
  });
  deleteInstance(x.id);
  const e_del = waitForInstanceDeleted(id);
  block(matchAddInstance(id), function () {
    verifyInstanceDoesNotExist(id);
  });
});

bthread("InteractionlimitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInteractionlimit(x.id);
  const e_add = waitForInteractionlimitAdded(id);
  block(matchDeleteInteractionlimit(id), function () {
    verifyInteractionlimitExists(id);
  });
  updateInteractionlimit(x.id);
  updateInteractionlimit(x.id);
  const e_upd = waitForInteractionlimitUpdated(id);
  block(matchDeleteInteractionlimit(id), function () {
    verifyInteractionlimitUpdated(id);
  });
  deleteInteractionlimit(x.id);
  const e_del = waitForInteractionlimitDeleted(id);
  block(matchAddInteractionlimit(id), function () {
    verifyInteractionlimitDoesNotExist(id);
  });
});

bthread("InvitationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInvitation(x.id);
  const e_add = waitForInvitationAdded(id);
  block(matchDeleteInvitation(id), function () {
    verifyInvitationExists(id);
  });
  updateInvitation(x.id);
  updateInvitation(x.id);
  const e_upd = waitForInvitationUpdated(id);
  block(matchDeleteInvitation(id), function () {
    verifyInvitationUpdated(id);
  });
  deleteInvitation(x.id);
  const e_del = waitForInvitationDeleted(id);
  block(matchAddInvitation(id), function () {
    verifyInvitationDoesNotExist(id);
  });
});

bthread("IssueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssue(x.id);
  const e_add = waitForIssueAdded(id);
  block(matchDeleteIssue(id), function () {
    verifyIssueExists(id);
  });
  updateIssue(x.id);
  updateIssue(x.id);
  const e_upd = waitForIssueUpdated(id);
  block(matchDeleteIssue(id), function () {
    verifyIssueUpdated(id);
  });
  deleteIssue(x.id);
  const e_del = waitForIssueDeleted(id);
  block(matchAddIssue(id), function () {
    verifyIssueDoesNotExist(id);
  });
});

bthread("IssuetypeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuetype(x.id);
  const e_add = waitForIssuetypeAdded(id);
  block(matchDeleteIssuetype(id), function () {
    verifyIssuetypeExists(id);
  });
  updateIssuetype(x.id);
  updateIssuetype(x.id);
  const e_upd = waitForIssuetypeUpdated(id);
  block(matchDeleteIssuetype(id), function () {
    verifyIssuetypeUpdated(id);
  });
  deleteIssuetype(x.id);
  const e_del = waitForIssuetypeDeleted(id);
  block(matchAddIssuetype(id), function () {
    verifyIssuetypeDoesNotExist(id);
  });
});

bthread("ItemLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addItem(x.id);
  const e_add = waitForItemAdded(id);
  block(matchDeleteItem(id), function () {
    verifyItemExists(id);
  });
  updateItem(x.id);
  updateItem(x.id);
  const e_upd = waitForItemUpdated(id);
  block(matchDeleteItem(id), function () {
    verifyItemUpdated(id);
  });
  deleteItem(x.id);
  const e_del = waitForItemDeleted(id);
  block(matchAddItem(id), function () {
    verifyItemDoesNotExist(id);
  });
});

bthread("JobLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addJob(x.id);
  const e_add = waitForJobAdded(id);
  block(matchDeleteJob(id), function () {
    verifyJobExists(id);
  });
  updateJob(x.id);
  updateJob(x.id);
  const e_upd = waitForJobUpdated(id);
  block(matchDeleteJob(id), function () {
    verifyJobUpdated(id);
  });
  deleteJob(x.id);
  const e_del = waitForJobDeleted(id);
  block(matchAddJob(id), function () {
    verifyJobDoesNotExist(id);
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

bthread("LabelLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLabel(x.id);
  const e_add = waitForLabelAdded(id);
  block(matchDeleteLabel(id), function () {
    verifyLabelExists(id);
  });
  updateLabel(x.id);
  updateLabel(x.id);
  const e_upd = waitForLabelUpdated(id);
  block(matchDeleteLabel(id), function () {
    verifyLabelUpdated(id);
  });
  deleteLabel(x.id);
  const e_del = waitForLabelDeleted(id);
  block(matchAddLabel(id), function () {
    verifyLabelDoesNotExist(id);
  });
});

bthread("LanguageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLanguage(x.id);
  const e_add = waitForLanguageAdded(id);
  block(matchDeleteLanguage(id), function () {
    verifyLanguageExists(id);
  });
  updateLanguage(x.id);
  updateLanguage(x.id);
  const e_upd = waitForLanguageUpdated(id);
  block(matchDeleteLanguage(id), function () {
    verifyLanguageUpdated(id);
  });
  deleteLanguage(x.id);
  const e_del = waitForLanguageDeleted(id);
  block(matchAddLanguage(id), function () {
    verifyLanguageDoesNotExist(id);
  });
});

bthread("LargefileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLargefile(x.id);
  const e_add = waitForLargefileAdded(id);
  block(matchDeleteLargefile(id), function () {
    verifyLargefileExists(id);
  });
  updateLargefile(x.id);
  updateLargefile(x.id);
  const e_upd = waitForLargefileUpdated(id);
  block(matchDeleteLargefile(id), function () {
    verifyLargefileUpdated(id);
  });
  deleteLargefile(x.id);
  const e_del = waitForLargefileDeleted(id);
  block(matchAddLargefile(id), function () {
    verifyLargefileDoesNotExist(id);
  });
});

bthread("LatestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLatest(x.id);
  const e_add = waitForLatestAdded(id);
  block(matchDeleteLatest(id), function () {
    verifyLatestExists(id);
  });
  updateLatest(x.id);
  updateLatest(x.id);
  const e_upd = waitForLatestUpdated(id);
  block(matchDeleteLatest(id), function () {
    verifyLatestUpdated(id);
  });
  deleteLatest(x.id);
  const e_del = waitForLatestDeleted(id);
  block(matchAddLatest(id), function () {
    verifyLatestDoesNotExist(id);
  });
});

bthread("LfLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLf(x.id);
  const e_add = waitForLfAdded(id);
  block(matchDeleteLf(id), function () {
    verifyLfExists(id);
  });
  updateLf(x.id);
  updateLf(x.id);
  const e_upd = waitForLfUpdated(id);
  block(matchDeleteLf(id), function () {
    verifyLfUpdated(id);
  });
  deleteLf(x.id);
  const e_del = waitForLfDeleted(id);
  block(matchAddLf(id), function () {
    verifyLfDoesNotExist(id);
  });
});

bthread("LicensLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLicens(x.id);
  const e_add = waitForLicensAdded(id);
  block(matchDeleteLicens(id), function () {
    verifyLicensExists(id);
  });
  updateLicens(x.id);
  updateLicens(x.id);
  const e_upd = waitForLicensUpdated(id);
  block(matchDeleteLicens(id), function () {
    verifyLicensUpdated(id);
  });
  deleteLicens(x.id);
  const e_del = waitForLicensDeleted(id);
  block(matchAddLicens(id), function () {
    verifyLicensDoesNotExist(id);
  });
});

bthread("LicenseLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLicense(x.id);
  const e_add = waitForLicenseAdded(id);
  block(matchDeleteLicense(id), function () {
    verifyLicenseExists(id);
  });
  updateLicense(x.id);
  updateLicense(x.id);
  const e_upd = waitForLicenseUpdated(id);
  block(matchDeleteLicense(id), function () {
    verifyLicenseUpdated(id);
  });
  deleteLicense(x.id);
  const e_del = waitForLicenseDeleted(id);
  block(matchAddLicense(id), function () {
    verifyLicenseDoesNotExist(id);
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

bthread("LocationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLocation(x.id);
  const e_add = waitForLocationAdded(id);
  block(matchDeleteLocation(id), function () {
    verifyLocationExists(id);
  });
  updateLocation(x.id);
  updateLocation(x.id);
  const e_upd = waitForLocationUpdated(id);
  block(matchDeleteLocation(id), function () {
    verifyLocationUpdated(id);
  });
  deleteLocation(x.id);
  const e_del = waitForLocationDeleted(id);
  block(matchAddLocation(id), function () {
    verifyLocationDoesNotExist(id);
  });
});

bthread("LockLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLock(x.id);
  const e_add = waitForLockAdded(id);
  block(matchDeleteLock(id), function () {
    verifyLockExists(id);
  });
  updateLock(x.id);
  updateLock(x.id);
  const e_upd = waitForLockUpdated(id);
  block(matchDeleteLock(id), function () {
    verifyLockUpdated(id);
  });
  deleteLock(x.id);
  const e_del = waitForLockDeleted(id);
  block(matchAddLock(id), function () {
    verifyLockDoesNotExist(id);
  });
});

bthread("LogLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addLog(x.id);
  const e_add = waitForLogAdded(id);
  block(matchDeleteLog(id), function () {
    verifyLogExists(id);
  });
  updateLog(x.id);
  updateLog(x.id);
  const e_upd = waitForLogUpdated(id);
  block(matchDeleteLog(id), function () {
    verifyLogUpdated(id);
  });
  deleteLog(x.id);
  const e_del = waitForLogDeleted(id);
  block(matchAddLog(id), function () {
    verifyLogDoesNotExist(id);
  });
});

bthread("MachineLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMachine(x.id);
  const e_add = waitForMachineAdded(id);
  block(matchDeleteMachine(id), function () {
    verifyMachineExists(id);
  });
  updateMachine(x.id);
  updateMachine(x.id);
  const e_upd = waitForMachineUpdated(id);
  block(matchDeleteMachine(id), function () {
    verifyMachineUpdated(id);
  });
  deleteMachine(x.id);
  const e_del = waitForMachineDeleted(id);
  block(matchAddMachine(id), function () {
    verifyMachineDoesNotExist(id);
  });
});

bthread("MachinesizeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMachinesize(x.id);
  const e_add = waitForMachinesizeAdded(id);
  block(matchDeleteMachinesize(id), function () {
    verifyMachinesizeExists(id);
  });
  updateMachinesize(x.id);
  updateMachinesize(x.id);
  const e_upd = waitForMachinesizeUpdated(id);
  block(matchDeleteMachinesize(id), function () {
    verifyMachinesizeUpdated(id);
  });
  deleteMachinesize(x.id);
  const e_del = waitForMachinesizeDeleted(id);
  block(matchAddMachinesize(id), function () {
    verifyMachinesizeDoesNotExist(id);
  });
});

bthread("MarkdownLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarkdown(x.id);
  const e_add = waitForMarkdownAdded(id);
  block(matchDeleteMarkdown(id), function () {
    verifyMarkdownExists(id);
  });
  updateMarkdown(x.id);
  updateMarkdown(x.id);
  const e_upd = waitForMarkdownUpdated(id);
  block(matchDeleteMarkdown(id), function () {
    verifyMarkdownUpdated(id);
  });
  deleteMarkdown(x.id);
  const e_del = waitForMarkdownDeleted(id);
  block(matchAddMarkdown(id), function () {
    verifyMarkdownDoesNotExist(id);
  });
});

bthread("MarketplacelistingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarketplacelisting(x.id);
  const e_add = waitForMarketplacelistingAdded(id);
  block(matchDeleteMarketplacelisting(id), function () {
    verifyMarketplacelistingExists(id);
  });
  updateMarketplacelisting(x.id);
  updateMarketplacelisting(x.id);
  const e_upd = waitForMarketplacelistingUpdated(id);
  block(matchDeleteMarketplacelisting(id), function () {
    verifyMarketplacelistingUpdated(id);
  });
  deleteMarketplacelisting(x.id);
  const e_del = waitForMarketplacelistingDeleted(id);
  block(matchAddMarketplacelisting(id), function () {
    verifyMarketplacelistingDoesNotExist(id);
  });
});

bthread("MarketplacepurchasLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarketplacepurchas(x.id);
  const e_add = waitForMarketplacepurchasAdded(id);
  block(matchDeleteMarketplacepurchas(id), function () {
    verifyMarketplacepurchasExists(id);
  });
  updateMarketplacepurchas(x.id);
  updateMarketplacepurchas(x.id);
  const e_upd = waitForMarketplacepurchasUpdated(id);
  block(matchDeleteMarketplacepurchas(id), function () {
    verifyMarketplacepurchasUpdated(id);
  });
  deleteMarketplacepurchas(x.id);
  const e_del = waitForMarketplacepurchasDeleted(id);
  block(matchAddMarketplacepurchas(id), function () {
    verifyMarketplacepurchasDoesNotExist(id);
  });
});

bthread("MatchingrefLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMatchingref(x.id);
  const e_add = waitForMatchingrefAdded(id);
  block(matchDeleteMatchingref(id), function () {
    verifyMatchingrefExists(id);
  });
  updateMatchingref(x.id);
  updateMatchingref(x.id);
  const e_upd = waitForMatchingrefUpdated(id);
  block(matchDeleteMatchingref(id), function () {
    verifyMatchingrefUpdated(id);
  });
  deleteMatchingref(x.id);
  const e_del = waitForMatchingrefDeleted(id);
  block(matchAddMatchingref(id), function () {
    verifyMatchingrefDoesNotExist(id);
  });
});

bthread("MemberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMember(x.id);
  const e_add = waitForMemberAdded(id);
  block(matchDeleteMember(id), function () {
    verifyMemberExists(id);
  });
  updateMember(x.id);
  updateMember(x.id);
  const e_upd = waitForMemberUpdated(id);
  block(matchDeleteMember(id), function () {
    verifyMemberUpdated(id);
  });
  deleteMember(x.id);
  const e_del = waitForMemberDeleted(id);
  block(matchAddMember(id), function () {
    verifyMemberDoesNotExist(id);
  });
});

bthread("MembershipLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMembership(x.id);
  const e_add = waitForMembershipAdded(id);
  block(matchDeleteMembership(id), function () {
    verifyMembershipExists(id);
  });
  updateMembership(x.id);
  updateMembership(x.id);
  const e_upd = waitForMembershipUpdated(id);
  block(matchDeleteMembership(id), function () {
    verifyMembershipUpdated(id);
  });
  deleteMembership(x.id);
  const e_del = waitForMembershipDeleted(id);
  block(matchAddMembership(id), function () {
    verifyMembershipDoesNotExist(id);
  });
});

bthread("MergeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMerge(x.id);
  const e_add = waitForMergeAdded(id);
  block(matchDeleteMerge(id), function () {
    verifyMergeExists(id);
  });
  updateMerge(x.id);
  updateMerge(x.id);
  const e_upd = waitForMergeUpdated(id);
  block(matchDeleteMerge(id), function () {
    verifyMergeUpdated(id);
  });
  deleteMerge(x.id);
  const e_del = waitForMergeDeleted(id);
  block(matchAddMerge(id), function () {
    verifyMergeDoesNotExist(id);
  });
});

bthread("MergeupstreamLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMergeupstream(x.id);
  const e_add = waitForMergeupstreamAdded(id);
  block(matchDeleteMergeupstream(id), function () {
    verifyMergeupstreamExists(id);
  });
  updateMergeupstream(x.id);
  updateMergeupstream(x.id);
  const e_upd = waitForMergeupstreamUpdated(id);
  block(matchDeleteMergeupstream(id), function () {
    verifyMergeupstreamUpdated(id);
  });
  deleteMergeupstream(x.id);
  const e_del = waitForMergeupstreamDeleted(id);
  block(matchAddMergeupstream(id), function () {
    verifyMergeupstreamDoesNotExist(id);
  });
});

bthread("MetaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMeta(x.id);
  const e_add = waitForMetaAdded(id);
  block(matchDeleteMeta(id), function () {
    verifyMetaExists(id);
  });
  updateMeta(x.id);
  updateMeta(x.id);
  const e_upd = waitForMetaUpdated(id);
  block(matchDeleteMeta(id), function () {
    verifyMetaUpdated(id);
  });
  deleteMeta(x.id);
  const e_del = waitForMetaDeleted(id);
  block(matchAddMeta(id), function () {
    verifyMetaDoesNotExist(id);
  });
});

bthread("MetadataLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMetadata(x.id);
  const e_add = waitForMetadataAdded(id);
  block(matchDeleteMetadata(id), function () {
    verifyMetadataExists(id);
  });
  updateMetadata(x.id);
  updateMetadata(x.id);
  const e_upd = waitForMetadataUpdated(id);
  block(matchDeleteMetadata(id), function () {
    verifyMetadataUpdated(id);
  });
  deleteMetadata(x.id);
  const e_del = waitForMetadataDeleted(id);
  block(matchAddMetadata(id), function () {
    verifyMetadataDoesNotExist(id);
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

bthread("MigrationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMigration(x.id);
  const e_add = waitForMigrationAdded(id);
  block(matchDeleteMigration(id), function () {
    verifyMigrationExists(id);
  });
  updateMigration(x.id);
  updateMigration(x.id);
  const e_upd = waitForMigrationUpdated(id);
  block(matchDeleteMigration(id), function () {
    verifyMigrationUpdated(id);
  });
  deleteMigration(x.id);
  const e_del = waitForMigrationDeleted(id);
  block(matchAddMigration(id), function () {
    verifyMigrationDoesNotExist(id);
  });
});

bthread("MilestoneLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMilestone(x.id);
  const e_add = waitForMilestoneAdded(id);
  block(matchDeleteMilestone(id), function () {
    verifyMilestoneExists(id);
  });
  updateMilestone(x.id);
  updateMilestone(x.id);
  const e_upd = waitForMilestoneUpdated(id);
  block(matchDeleteMilestone(id), function () {
    verifyMilestoneUpdated(id);
  });
  deleteMilestone(x.id);
  const e_del = waitForMilestoneDeleted(id);
  block(matchAddMilestone(id), function () {
    verifyMilestoneDoesNotExist(id);
  });
});

bthread("MoveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMove(x.id);
  const e_add = waitForMoveAdded(id);
  block(matchDeleteMove(id), function () {
    verifyMoveExists(id);
  });
  updateMove(x.id);
  updateMove(x.id);
  const e_upd = waitForMoveUpdated(id);
  block(matchDeleteMove(id), function () {
    verifyMoveUpdated(id);
  });
  deleteMove(x.id);
  const e_del = waitForMoveDeleted(id);
  block(matchAddMove(id), function () {
    verifyMoveDoesNotExist(id);
  });
});

bthread("NetworkLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNetwork(x.id);
  const e_add = waitForNetworkAdded(id);
  block(matchDeleteNetwork(id), function () {
    verifyNetworkExists(id);
  });
  updateNetwork(x.id);
  updateNetwork(x.id);
  const e_upd = waitForNetworkUpdated(id);
  block(matchDeleteNetwork(id), function () {
    verifyNetworkUpdated(id);
  });
  deleteNetwork(x.id);
  const e_del = waitForNetworkDeleted(id);
  block(matchAddNetwork(id), function () {
    verifyNetworkDoesNotExist(id);
  });
});

bthread("NetworkconfigurationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNetworkconfiguration(x.id);
  const e_add = waitForNetworkconfigurationAdded(id);
  block(matchDeleteNetworkconfiguration(id), function () {
    verifyNetworkconfigurationExists(id);
  });
  updateNetworkconfiguration(x.id);
  updateNetworkconfiguration(x.id);
  const e_upd = waitForNetworkconfigurationUpdated(id);
  block(matchDeleteNetworkconfiguration(id), function () {
    verifyNetworkconfigurationUpdated(id);
  });
  deleteNetworkconfiguration(x.id);
  const e_del = waitForNetworkconfigurationDeleted(id);
  block(matchAddNetworkconfiguration(id), function () {
    verifyNetworkconfigurationDoesNotExist(id);
  });
});

bthread("NetworksettingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNetworksetting(x.id);
  const e_add = waitForNetworksettingAdded(id);
  block(matchDeleteNetworksetting(id), function () {
    verifyNetworksettingExists(id);
  });
  updateNetworksetting(x.id);
  updateNetworksetting(x.id);
  const e_upd = waitForNetworksettingUpdated(id);
  block(matchDeleteNetworksetting(id), function () {
    verifyNetworksettingUpdated(id);
  });
  deleteNetworksetting(x.id);
  const e_del = waitForNetworksettingDeleted(id);
  block(matchAddNetworksetting(id), function () {
    verifyNetworksettingDoesNotExist(id);
  });
});

bthread("NewLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNew(x.id);
  const e_add = waitForNewAdded(id);
  block(matchDeleteNew(id), function () {
    verifyNewExists(id);
  });
  updateNew(x.id);
  updateNew(x.id);
  const e_upd = waitForNewUpdated(id);
  block(matchDeleteNew(id), function () {
    verifyNewUpdated(id);
  });
  deleteNew(x.id);
  const e_del = waitForNewDeleted(id);
  block(matchAddNew(id), function () {
    verifyNewDoesNotExist(id);
  });
});

bthread("NotificationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNotification(x.id);
  const e_add = waitForNotificationAdded(id);
  block(matchDeleteNotification(id), function () {
    verifyNotificationExists(id);
  });
  updateNotification(x.id);
  updateNotification(x.id);
  const e_upd = waitForNotificationUpdated(id);
  block(matchDeleteNotification(id), function () {
    verifyNotificationUpdated(id);
  });
  deleteNotification(x.id);
  const e_del = waitForNotificationDeleted(id);
  block(matchAddNotification(id), function () {
    verifyNotificationDoesNotExist(id);
  });
});

bthread("OctocatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOctocat(x.id);
  const e_add = waitForOctocatAdded(id);
  block(matchDeleteOctocat(id), function () {
    verifyOctocatExists(id);
  });
  updateOctocat(x.id);
  updateOctocat(x.id);
  const e_upd = waitForOctocatUpdated(id);
  block(matchDeleteOctocat(id), function () {
    verifyOctocatUpdated(id);
  });
  deleteOctocat(x.id);
  const e_del = waitForOctocatDeleted(id);
  block(matchAddOctocat(id), function () {
    verifyOctocatDoesNotExist(id);
  });
});

bthread("OidcLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOidc(x.id);
  const e_add = waitForOidcAdded(id);
  block(matchDeleteOidc(id), function () {
    verifyOidcExists(id);
  });
  updateOidc(x.id);
  updateOidc(x.id);
  const e_upd = waitForOidcUpdated(id);
  block(matchDeleteOidc(id), function () {
    verifyOidcUpdated(id);
  });
  deleteOidc(x.id);
  const e_del = waitForOidcDeleted(id);
  block(matchAddOidc(id), function () {
    verifyOidcDoesNotExist(id);
  });
});

bthread("OrgLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrg(x.id);
  const e_add = waitForOrgAdded(id);
  block(matchDeleteOrg(id), function () {
    verifyOrgExists(id);
  });
  updateOrg(x.id);
  updateOrg(x.id);
  const e_upd = waitForOrgUpdated(id);
  block(matchDeleteOrg(id), function () {
    verifyOrgUpdated(id);
  });
  deleteOrg(x.id);
  const e_del = waitForOrgDeleted(id);
  block(matchAddOrg(id), function () {
    verifyOrgDoesNotExist(id);
  });
});

bthread("OrganizationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganization(x.id);
  const e_add = waitForOrganizationAdded(id);
  block(matchDeleteOrganization(id), function () {
    verifyOrganizationExists(id);
  });
  updateOrganization(x.id);
  updateOrganization(x.id);
  const e_upd = waitForOrganizationUpdated(id);
  block(matchDeleteOrganization(id), function () {
    verifyOrganizationUpdated(id);
  });
  deleteOrganization(x.id);
  const e_del = waitForOrganizationDeleted(id);
  block(matchAddOrganization(id), function () {
    verifyOrganizationDoesNotExist(id);
  });
});

bthread("OrganizationroleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationrole(x.id);
  const e_add = waitForOrganizationroleAdded(id);
  block(matchDeleteOrganizationrole(id), function () {
    verifyOrganizationroleExists(id);
  });
  updateOrganizationrole(x.id);
  updateOrganizationrole(x.id);
  const e_upd = waitForOrganizationroleUpdated(id);
  block(matchDeleteOrganizationrole(id), function () {
    verifyOrganizationroleUpdated(id);
  });
  deleteOrganizationrole(x.id);
  const e_del = waitForOrganizationroleDeleted(id);
  block(matchAddOrganizationrole(id), function () {
    verifyOrganizationroleDoesNotExist(id);
  });
});

bthread("OrganizationsecretLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationsecret(x.id);
  const e_add = waitForOrganizationsecretAdded(id);
  block(matchDeleteOrganizationsecret(id), function () {
    verifyOrganizationsecretExists(id);
  });
  updateOrganizationsecret(x.id);
  updateOrganizationsecret(x.id);
  const e_upd = waitForOrganizationsecretUpdated(id);
  block(matchDeleteOrganizationsecret(id), function () {
    verifyOrganizationsecretUpdated(id);
  });
  deleteOrganizationsecret(x.id);
  const e_del = waitForOrganizationsecretDeleted(id);
  block(matchAddOrganizationsecret(id), function () {
    verifyOrganizationsecretDoesNotExist(id);
  });
});

bthread("OrganizationvariableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOrganizationvariable(x.id);
  const e_add = waitForOrganizationvariableAdded(id);
  block(matchDeleteOrganizationvariable(id), function () {
    verifyOrganizationvariableExists(id);
  });
  updateOrganizationvariable(x.id);
  updateOrganizationvariable(x.id);
  const e_upd = waitForOrganizationvariableUpdated(id);
  block(matchDeleteOrganizationvariable(id), function () {
    verifyOrganizationvariableUpdated(id);
  });
  deleteOrganizationvariable(x.id);
  const e_del = waitForOrganizationvariableDeleted(id);
  block(matchAddOrganizationvariable(id), function () {
    verifyOrganizationvariableDoesNotExist(id);
  });
});

bthread("OutsidecollaboratorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOutsidecollaborator(x.id);
  const e_add = waitForOutsidecollaboratorAdded(id);
  block(matchDeleteOutsidecollaborator(id), function () {
    verifyOutsidecollaboratorExists(id);
  });
  updateOutsidecollaborator(x.id);
  updateOutsidecollaborator(x.id);
  const e_upd = waitForOutsidecollaboratorUpdated(id);
  block(matchDeleteOutsidecollaborator(id), function () {
    verifyOutsidecollaboratorUpdated(id);
  });
  deleteOutsidecollaborator(x.id);
  const e_del = waitForOutsidecollaboratorDeleted(id);
  block(matchAddOutsidecollaborator(id), function () {
    verifyOutsidecollaboratorDoesNotExist(id);
  });
});

bthread("PackageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPackage(x.id);
  const e_add = waitForPackageAdded(id);
  block(matchDeletePackage(id), function () {
    verifyPackageExists(id);
  });
  updatePackage(x.id);
  updatePackage(x.id);
  const e_upd = waitForPackageUpdated(id);
  block(matchDeletePackage(id), function () {
    verifyPackageUpdated(id);
  });
  deletePackage(x.id);
  const e_del = waitForPackageDeleted(id);
  block(matchAddPackage(id), function () {
    verifyPackageDoesNotExist(id);
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

bthread("ParentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addParent(x.id);
  const e_add = waitForParentAdded(id);
  block(matchDeleteParent(id), function () {
    verifyParentExists(id);
  });
  updateParent(x.id);
  updateParent(x.id);
  const e_upd = waitForParentUpdated(id);
  block(matchDeleteParent(id), function () {
    verifyParentUpdated(id);
  });
  deleteParent(x.id);
  const e_del = waitForParentDeleted(id);
  block(matchAddParent(id), function () {
    verifyParentDoesNotExist(id);
  });
});

bthread("ParticipationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addParticipation(x.id);
  const e_add = waitForParticipationAdded(id);
  block(matchDeleteParticipation(id), function () {
    verifyParticipationExists(id);
  });
  updateParticipation(x.id);
  updateParticipation(x.id);
  const e_upd = waitForParticipationUpdated(id);
  block(matchDeleteParticipation(id), function () {
    verifyParticipationUpdated(id);
  });
  deleteParticipation(x.id);
  const e_del = waitForParticipationDeleted(id);
  block(matchAddParticipation(id), function () {
    verifyParticipationDoesNotExist(id);
  });
});

bthread("PartnerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPartner(x.id);
  const e_add = waitForPartnerAdded(id);
  block(matchDeletePartner(id), function () {
    verifyPartnerExists(id);
  });
  updatePartner(x.id);
  updatePartner(x.id);
  const e_upd = waitForPartnerUpdated(id);
  block(matchDeletePartner(id), function () {
    verifyPartnerUpdated(id);
  });
  deletePartner(x.id);
  const e_del = waitForPartnerDeleted(id);
  block(matchAddPartner(id), function () {
    verifyPartnerDoesNotExist(id);
  });
});

bthread("PathLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPath(x.id);
  const e_add = waitForPathAdded(id);
  block(matchDeletePath(id), function () {
    verifyPathExists(id);
  });
  updatePath(x.id);
  updatePath(x.id);
  const e_upd = waitForPathUpdated(id);
  block(matchDeletePath(id), function () {
    verifyPathUpdated(id);
  });
  deletePath(x.id);
  const e_del = waitForPathDeleted(id);
  block(matchAddPath(id), function () {
    verifyPathDoesNotExist(id);
  });
});

bthread("PatternconfigurationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPatternconfiguration(x.id);
  const e_add = waitForPatternconfigurationAdded(id);
  block(matchDeletePatternconfiguration(id), function () {
    verifyPatternconfigurationExists(id);
  });
  updatePatternconfiguration(x.id);
  updatePatternconfiguration(x.id);
  const e_upd = waitForPatternconfigurationUpdated(id);
  block(matchDeletePatternconfiguration(id), function () {
    verifyPatternconfigurationUpdated(id);
  });
  deletePatternconfiguration(x.id);
  const e_del = waitForPatternconfigurationDeleted(id);
  block(matchAddPatternconfiguration(id), function () {
    verifyPatternconfigurationDoesNotExist(id);
  });
});

bthread("PendingdeploymentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPendingdeployment(x.id);
  const e_add = waitForPendingdeploymentAdded(id);
  block(matchDeletePendingdeployment(id), function () {
    verifyPendingdeploymentExists(id);
  });
  updatePendingdeployment(x.id);
  updatePendingdeployment(x.id);
  const e_upd = waitForPendingdeploymentUpdated(id);
  block(matchDeletePendingdeployment(id), function () {
    verifyPendingdeploymentUpdated(id);
  });
  deletePendingdeployment(x.id);
  const e_del = waitForPendingdeploymentDeleted(id);
  block(matchAddPendingdeployment(id), function () {
    verifyPendingdeploymentDoesNotExist(id);
  });
});

bthread("PermissionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPermission(x.id);
  const e_add = waitForPermissionAdded(id);
  block(matchDeletePermission(id), function () {
    verifyPermissionExists(id);
  });
  updatePermission(x.id);
  updatePermission(x.id);
  const e_upd = waitForPermissionUpdated(id);
  block(matchDeletePermission(id), function () {
    verifyPermissionUpdated(id);
  });
  deletePermission(x.id);
  const e_del = waitForPermissionDeleted(id);
  block(matchAddPermission(id), function () {
    verifyPermissionDoesNotExist(id);
  });
});

bthread("PermissionscheckLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPermissionscheck(x.id);
  const e_add = waitForPermissionscheckAdded(id);
  block(matchDeletePermissionscheck(id), function () {
    verifyPermissionscheckExists(id);
  });
  updatePermissionscheck(x.id);
  updatePermissionscheck(x.id);
  const e_upd = waitForPermissionscheckUpdated(id);
  block(matchDeletePermissionscheck(id), function () {
    verifyPermissionscheckUpdated(id);
  });
  deletePermissionscheck(x.id);
  const e_del = waitForPermissionscheckDeleted(id);
  block(matchAddPermissionscheck(id), function () {
    verifyPermissionscheckDoesNotExist(id);
  });
});

bthread("PersonalaccesstokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPersonalaccesstoken(x.id);
  const e_add = waitForPersonalaccesstokenAdded(id);
  block(matchDeletePersonalaccesstoken(id), function () {
    verifyPersonalaccesstokenExists(id);
  });
  updatePersonalaccesstoken(x.id);
  updatePersonalaccesstoken(x.id);
  const e_upd = waitForPersonalaccesstokenUpdated(id);
  block(matchDeletePersonalaccesstoken(id), function () {
    verifyPersonalaccesstokenUpdated(id);
  });
  deletePersonalaccesstoken(x.id);
  const e_del = waitForPersonalaccesstokenDeleted(id);
  block(matchAddPersonalaccesstoken(id), function () {
    verifyPersonalaccesstokenDoesNotExist(id);
  });
});

bthread("PersonalaccesstokenrequestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPersonalaccesstokenrequest(x.id);
  const e_add = waitForPersonalaccesstokenrequestAdded(id);
  block(matchDeletePersonalaccesstokenrequest(id), function () {
    verifyPersonalaccesstokenrequestExists(id);
  });
  updatePersonalaccesstokenrequest(x.id);
  updatePersonalaccesstokenrequest(x.id);
  const e_upd = waitForPersonalaccesstokenrequestUpdated(id);
  block(matchDeletePersonalaccesstokenrequest(id), function () {
    verifyPersonalaccesstokenrequestUpdated(id);
  });
  deletePersonalaccesstokenrequest(x.id);
  const e_del = waitForPersonalaccesstokenrequestDeleted(id);
  block(matchAddPersonalaccesstokenrequest(id), function () {
    verifyPersonalaccesstokenrequestDoesNotExist(id);
  });
});

bthread("PingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPing(x.id);
  const e_add = waitForPingAdded(id);
  block(matchDeletePing(id), function () {
    verifyPingExists(id);
  });
  updatePing(x.id);
  updatePing(x.id);
  const e_upd = waitForPingUpdated(id);
  block(matchDeletePing(id), function () {
    verifyPingUpdated(id);
  });
  deletePing(x.id);
  const e_del = waitForPingDeleted(id);
  block(matchAddPing(id), function () {
    verifyPingDoesNotExist(id);
  });
});

bthread("PlanLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPlan(x.id);
  const e_add = waitForPlanAdded(id);
  block(matchDeletePlan(id), function () {
    verifyPlanExists(id);
  });
  updatePlan(x.id);
  updatePlan(x.id);
  const e_upd = waitForPlanUpdated(id);
  block(matchDeletePlan(id), function () {
    verifyPlanUpdated(id);
  });
  deletePlan(x.id);
  const e_del = waitForPlanDeleted(id);
  block(matchAddPlan(id), function () {
    verifyPlanDoesNotExist(id);
  });
});

bthread("PlatformLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPlatform(x.id);
  const e_add = waitForPlatformAdded(id);
  block(matchDeletePlatform(id), function () {
    verifyPlatformExists(id);
  });
  updatePlatform(x.id);
  updatePlatform(x.id);
  const e_upd = waitForPlatformUpdated(id);
  block(matchDeletePlatform(id), function () {
    verifyPlatformUpdated(id);
  });
  deletePlatform(x.id);
  const e_del = waitForPlatformDeleted(id);
  block(matchAddPlatform(id), function () {
    verifyPlatformDoesNotExist(id);
  });
});

bthread("PopularLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPopular(x.id);
  const e_add = waitForPopularAdded(id);
  block(matchDeletePopular(id), function () {
    verifyPopularExists(id);
  });
  updatePopular(x.id);
  updatePopular(x.id);
  const e_upd = waitForPopularUpdated(id);
  block(matchDeletePopular(id), function () {
    verifyPopularUpdated(id);
  });
  deletePopular(x.id);
  const e_del = waitForPopularDeleted(id);
  block(matchAddPopular(id), function () {
    verifyPopularDoesNotExist(id);
  });
});

bthread("PreferenceLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPreference(x.id);
  const e_add = waitForPreferenceAdded(id);
  block(matchDeletePreference(id), function () {
    verifyPreferenceExists(id);
  });
  updatePreference(x.id);
  updatePreference(x.id);
  const e_upd = waitForPreferenceUpdated(id);
  block(matchDeletePreference(id), function () {
    verifyPreferenceUpdated(id);
  });
  deletePreference(x.id);
  const e_del = waitForPreferenceDeleted(id);
  block(matchAddPreference(id), function () {
    verifyPreferenceDoesNotExist(id);
  });
});

bthread("PremiumrequestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPremiumrequest(x.id);
  const e_add = waitForPremiumrequestAdded(id);
  block(matchDeletePremiumrequest(id), function () {
    verifyPremiumrequestExists(id);
  });
  updatePremiumrequest(x.id);
  updatePremiumrequest(x.id);
  const e_upd = waitForPremiumrequestUpdated(id);
  block(matchDeletePremiumrequest(id), function () {
    verifyPremiumrequestUpdated(id);
  });
  deletePremiumrequest(x.id);
  const e_del = waitForPremiumrequestDeleted(id);
  block(matchAddPremiumrequest(id), function () {
    verifyPremiumrequestDoesNotExist(id);
  });
});

bthread("PriorityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPriority(x.id);
  const e_add = waitForPriorityAdded(id);
  block(matchDeletePriority(id), function () {
    verifyPriorityExists(id);
  });
  updatePriority(x.id);
  updatePriority(x.id);
  const e_upd = waitForPriorityUpdated(id);
  block(matchDeletePriority(id), function () {
    verifyPriorityUpdated(id);
  });
  deletePriority(x.id);
  const e_del = waitForPriorityDeleted(id);
  block(matchAddPriority(id), function () {
    verifyPriorityDoesNotExist(id);
  });
});

bthread("PrivateregistryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrivateregistry(x.id);
  const e_add = waitForPrivateregistryAdded(id);
  block(matchDeletePrivateregistry(id), function () {
    verifyPrivateregistryExists(id);
  });
  updatePrivateregistry(x.id);
  updatePrivateregistry(x.id);
  const e_upd = waitForPrivateregistryUpdated(id);
  block(matchDeletePrivateregistry(id), function () {
    verifyPrivateregistryUpdated(id);
  });
  deletePrivateregistry(x.id);
  const e_del = waitForPrivateregistryDeleted(id);
  block(matchAddPrivateregistry(id), function () {
    verifyPrivateregistryDoesNotExist(id);
  });
});

bthread("PrivatevulnerabilityreportingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPrivatevulnerabilityreporting(x.id);
  const e_add = waitForPrivatevulnerabilityreportingAdded(id);
  block(matchDeletePrivatevulnerabilityreporting(id), function () {
    verifyPrivatevulnerabilityreportingExists(id);
  });
  updatePrivatevulnerabilityreporting(x.id);
  updatePrivatevulnerabilityreporting(x.id);
  const e_upd = waitForPrivatevulnerabilityreportingUpdated(id);
  block(matchDeletePrivatevulnerabilityreporting(id), function () {
    verifyPrivatevulnerabilityreportingUpdated(id);
  });
  deletePrivatevulnerabilityreporting(x.id);
  const e_del = waitForPrivatevulnerabilityreportingDeleted(id);
  block(matchAddPrivatevulnerabilityreporting(id), function () {
    verifyPrivatevulnerabilityreportingDoesNotExist(id);
  });
});

bthread("ProfileLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProfile(x.id);
  const e_add = waitForProfileAdded(id);
  block(matchDeleteProfile(id), function () {
    verifyProfileExists(id);
  });
  updateProfile(x.id);
  updateProfile(x.id);
  const e_upd = waitForProfileUpdated(id);
  block(matchDeleteProfile(id), function () {
    verifyProfileUpdated(id);
  });
  deleteProfile(x.id);
  const e_del = waitForProfileDeleted(id);
  block(matchAddProfile(id), function () {
    verifyProfileDoesNotExist(id);
  });
});

bthread("ProjectLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProject(x.id);
  const e_add = waitForProjectAdded(id);
  block(matchDeleteProject(id), function () {
    verifyProjectExists(id);
  });
  updateProject(x.id);
  updateProject(x.id);
  const e_upd = waitForProjectUpdated(id);
  block(matchDeleteProject(id), function () {
    verifyProjectUpdated(id);
  });
  deleteProject(x.id);
  const e_del = waitForProjectDeleted(id);
  block(matchAddProject(id), function () {
    verifyProjectDoesNotExist(id);
  });
});

bthread("Projectsv2Lifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProjectsv2(x.id);
  const e_add = waitForProjectsv2Added(id);
  block(matchDeleteProjectsv2(id), function () {
    verifyProjectsv2Exists(id);
  });
  updateProjectsv2(x.id);
  updateProjectsv2(x.id);
  const e_upd = waitForProjectsv2Updated(id);
  block(matchDeleteProjectsv2(id), function () {
    verifyProjectsv2Updated(id);
  });
  deleteProjectsv2(x.id);
  const e_del = waitForProjectsv2Deleted(id);
  block(matchAddProjectsv2(id), function () {
    verifyProjectsv2DoesNotExist(id);
  });
});

bthread("PropertyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProperty(x.id);
  const e_add = waitForPropertyAdded(id);
  block(matchDeleteProperty(id), function () {
    verifyPropertyExists(id);
  });
  updateProperty(x.id);
  updateProperty(x.id);
  const e_upd = waitForPropertyUpdated(id);
  block(matchDeleteProperty(id), function () {
    verifyPropertyUpdated(id);
  });
  deleteProperty(x.id);
  const e_del = waitForPropertyDeleted(id);
  block(matchAddProperty(id), function () {
    verifyPropertyDoesNotExist(id);
  });
});

bthread("ProtectionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addProtection(x.id);
  const e_add = waitForProtectionAdded(id);
  block(matchDeleteProtection(id), function () {
    verifyProtectionExists(id);
  });
  updateProtection(x.id);
  updateProtection(x.id);
  const e_upd = waitForProtectionUpdated(id);
  block(matchDeleteProtection(id), function () {
    verifyProtectionUpdated(id);
  });
  deleteProtection(x.id);
  const e_del = waitForProtectionDeleted(id);
  block(matchAddProtection(id), function () {
    verifyProtectionDoesNotExist(id);
  });
});

bthread("PublicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPublic(x.id);
  const e_add = waitForPublicAdded(id);
  block(matchDeletePublic(id), function () {
    verifyPublicExists(id);
  });
  updatePublic(x.id);
  updatePublic(x.id);
  const e_upd = waitForPublicUpdated(id);
  block(matchDeletePublic(id), function () {
    verifyPublicUpdated(id);
  });
  deletePublic(x.id);
  const e_del = waitForPublicDeleted(id);
  block(matchAddPublic(id), function () {
    verifyPublicDoesNotExist(id);
  });
});

bthread("PublicemailLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPublicemail(x.id);
  const e_add = waitForPublicemailAdded(id);
  block(matchDeletePublicemail(id), function () {
    verifyPublicemailExists(id);
  });
  updatePublicemail(x.id);
  updatePublicemail(x.id);
  const e_upd = waitForPublicemailUpdated(id);
  block(matchDeletePublicemail(id), function () {
    verifyPublicemailUpdated(id);
  });
  deletePublicemail(x.id);
  const e_del = waitForPublicemailDeleted(id);
  block(matchAddPublicemail(id), function () {
    verifyPublicemailDoesNotExist(id);
  });
});

bthread("PublickeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPublickey(x.id);
  const e_add = waitForPublickeyAdded(id);
  block(matchDeletePublickey(id), function () {
    verifyPublickeyExists(id);
  });
  updatePublickey(x.id);
  updatePublickey(x.id);
  const e_upd = waitForPublickeyUpdated(id);
  block(matchDeletePublickey(id), function () {
    verifyPublickeyUpdated(id);
  });
  deletePublickey(x.id);
  const e_del = waitForPublickeyDeleted(id);
  block(matchAddPublickey(id), function () {
    verifyPublickeyDoesNotExist(id);
  });
});

bthread("PublicmemberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPublicmember(x.id);
  const e_add = waitForPublicmemberAdded(id);
  block(matchDeletePublicmember(id), function () {
    verifyPublicmemberExists(id);
  });
  updatePublicmember(x.id);
  updatePublicmember(x.id);
  const e_upd = waitForPublicmemberUpdated(id);
  block(matchDeletePublicmember(id), function () {
    verifyPublicmemberUpdated(id);
  });
  deletePublicmember(x.id);
  const e_del = waitForPublicmemberDeleted(id);
  block(matchAddPublicmember(id), function () {
    verifyPublicmemberDoesNotExist(id);
  });
});

bthread("PublishLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPublish(x.id);
  const e_add = waitForPublishAdded(id);
  block(matchDeletePublish(id), function () {
    verifyPublishExists(id);
  });
  updatePublish(x.id);
  updatePublish(x.id);
  const e_upd = waitForPublishUpdated(id);
  block(matchDeletePublish(id), function () {
    verifyPublishUpdated(id);
  });
  deletePublish(x.id);
  const e_del = waitForPublishDeleted(id);
  block(matchAddPublish(id), function () {
    verifyPublishDoesNotExist(id);
  });
});

bthread("PullLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPull(x.id);
  const e_add = waitForPullAdded(id);
  block(matchDeletePull(id), function () {
    verifyPullExists(id);
  });
  updatePull(x.id);
  updatePull(x.id);
  const e_upd = waitForPullUpdated(id);
  block(matchDeletePull(id), function () {
    verifyPullUpdated(id);
  });
  deletePull(x.id);
  const e_del = waitForPullDeleted(id);
  block(matchAddPull(id), function () {
    verifyPullDoesNotExist(id);
  });
});

bthread("PunchcardLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPunchcard(x.id);
  const e_add = waitForPunchcardAdded(id);
  block(matchDeletePunchcard(id), function () {
    verifyPunchcardExists(id);
  });
  updatePunchcard(x.id);
  updatePunchcard(x.id);
  const e_upd = waitForPunchcardUpdated(id);
  block(matchDeletePunchcard(id), function () {
    verifyPunchcardUpdated(id);
  });
  deletePunchcard(x.id);
  const e_del = waitForPunchcardDeleted(id);
  block(matchAddPunchcard(id), function () {
    verifyPunchcardDoesNotExist(id);
  });
});

bthread("PushprotectionbypassLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPushprotectionbypass(x.id);
  const e_add = waitForPushprotectionbypassAdded(id);
  block(matchDeletePushprotectionbypass(id), function () {
    verifyPushprotectionbypassExists(id);
  });
  updatePushprotectionbypass(x.id);
  updatePushprotectionbypass(x.id);
  const e_upd = waitForPushprotectionbypassUpdated(id);
  block(matchDeletePushprotectionbypass(id), function () {
    verifyPushprotectionbypassUpdated(id);
  });
  deletePushprotectionbypass(x.id);
  const e_del = waitForPushprotectionbypassDeleted(id);
  block(matchAddPushprotectionbypass(id), function () {
    verifyPushprotectionbypassDoesNotExist(id);
  });
});

bthread("RatelimitLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRatelimit(x.id);
  const e_add = waitForRatelimitAdded(id);
  block(matchDeleteRatelimit(id), function () {
    verifyRatelimitExists(id);
  });
  updateRatelimit(x.id);
  updateRatelimit(x.id);
  const e_upd = waitForRatelimitUpdated(id);
  block(matchDeleteRatelimit(id), function () {
    verifyRatelimitUpdated(id);
  });
  deleteRatelimit(x.id);
  const e_del = waitForRatelimitDeleted(id);
  block(matchAddRatelimit(id), function () {
    verifyRatelimitDoesNotExist(id);
  });
});

bthread("RawLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRaw(x.id);
  const e_add = waitForRawAdded(id);
  block(matchDeleteRaw(id), function () {
    verifyRawExists(id);
  });
  updateRaw(x.id);
  updateRaw(x.id);
  const e_upd = waitForRawUpdated(id);
  block(matchDeleteRaw(id), function () {
    verifyRawUpdated(id);
  });
  deleteRaw(x.id);
  const e_del = waitForRawDeleted(id);
  block(matchAddRaw(id), function () {
    verifyRawDoesNotExist(id);
  });
});

bthread("ReactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReaction(x.id);
  const e_add = waitForReactionAdded(id);
  block(matchDeleteReaction(id), function () {
    verifyReactionExists(id);
  });
  updateReaction(x.id);
  updateReaction(x.id);
  const e_upd = waitForReactionUpdated(id);
  block(matchDeleteReaction(id), function () {
    verifyReactionUpdated(id);
  });
  deleteReaction(x.id);
  const e_del = waitForReactionDeleted(id);
  block(matchAddReaction(id), function () {
    verifyReactionDoesNotExist(id);
  });
});

bthread("ReadmeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReadme(x.id);
  const e_add = waitForReadmeAdded(id);
  block(matchDeleteReadme(id), function () {
    verifyReadmeExists(id);
  });
  updateReadme(x.id);
  updateReadme(x.id);
  const e_upd = waitForReadmeUpdated(id);
  block(matchDeleteReadme(id), function () {
    verifyReadmeUpdated(id);
  });
  deleteReadme(x.id);
  const e_del = waitForReadmeDeleted(id);
  block(matchAddReadme(id), function () {
    verifyReadmeDoesNotExist(id);
  });
});

bthread("ReceivedeventLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReceivedevent(x.id);
  const e_add = waitForReceivedeventAdded(id);
  block(matchDeleteReceivedevent(id), function () {
    verifyReceivedeventExists(id);
  });
  updateReceivedevent(x.id);
  updateReceivedevent(x.id);
  const e_upd = waitForReceivedeventUpdated(id);
  block(matchDeleteReceivedevent(id), function () {
    verifyReceivedeventUpdated(id);
  });
  deleteReceivedevent(x.id);
  const e_del = waitForReceivedeventDeleted(id);
  block(matchAddReceivedevent(id), function () {
    verifyReceivedeventDoesNotExist(id);
  });
});

bthread("RefLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRef(x.id);
  const e_add = waitForRefAdded(id);
  block(matchDeleteRef(id), function () {
    verifyRefExists(id);
  });
  updateRef(x.id);
  updateRef(x.id);
  const e_upd = waitForRefUpdated(id);
  block(matchDeleteRef(id), function () {
    verifyRefUpdated(id);
  });
  deleteRef(x.id);
  const e_del = waitForRefDeleted(id);
  block(matchAddRef(id), function () {
    verifyRefDoesNotExist(id);
  });
});

bthread("ReferrerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReferrer(x.id);
  const e_add = waitForReferrerAdded(id);
  block(matchDeleteReferrer(id), function () {
    verifyReferrerExists(id);
  });
  updateReferrer(x.id);
  updateReferrer(x.id);
  const e_upd = waitForReferrerUpdated(id);
  block(matchDeleteReferrer(id), function () {
    verifyReferrerUpdated(id);
  });
  deleteReferrer(x.id);
  const e_del = waitForReferrerDeleted(id);
  block(matchAddReferrer(id), function () {
    verifyReferrerDoesNotExist(id);
  });
});

bthread("RegistrationtokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRegistrationtoken(x.id);
  const e_add = waitForRegistrationtokenAdded(id);
  block(matchDeleteRegistrationtoken(id), function () {
    verifyRegistrationtokenExists(id);
  });
  updateRegistrationtoken(x.id);
  updateRegistrationtoken(x.id);
  const e_upd = waitForRegistrationtokenUpdated(id);
  block(matchDeleteRegistrationtoken(id), function () {
    verifyRegistrationtokenUpdated(id);
  });
  deleteRegistrationtoken(x.id);
  const e_del = waitForRegistrationtokenDeleted(id);
  block(matchAddRegistrationtoken(id), function () {
    verifyRegistrationtokenDoesNotExist(id);
  });
});

bthread("ReleasLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReleas(x.id);
  const e_add = waitForReleasAdded(id);
  block(matchDeleteReleas(id), function () {
    verifyReleasExists(id);
  });
  updateReleas(x.id);
  updateReleas(x.id);
  const e_upd = waitForReleasUpdated(id);
  block(matchDeleteReleas(id), function () {
    verifyReleasUpdated(id);
  });
  deleteReleas(x.id);
  const e_del = waitForReleasDeleted(id);
  block(matchAddReleas(id), function () {
    verifyReleasDoesNotExist(id);
  });
});

bthread("RemoveLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRemove(x.id);
  const e_add = waitForRemoveAdded(id);
  block(matchDeleteRemove(id), function () {
    verifyRemoveExists(id);
  });
  updateRemove(x.id);
  updateRemove(x.id);
  const e_upd = waitForRemoveUpdated(id);
  block(matchDeleteRemove(id), function () {
    verifyRemoveUpdated(id);
  });
  deleteRemove(x.id);
  const e_del = waitForRemoveDeleted(id);
  block(matchAddRemove(id), function () {
    verifyRemoveDoesNotExist(id);
  });
});

bthread("RemovetokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRemovetoken(x.id);
  const e_add = waitForRemovetokenAdded(id);
  block(matchDeleteRemovetoken(id), function () {
    verifyRemovetokenExists(id);
  });
  updateRemovetoken(x.id);
  updateRemovetoken(x.id);
  const e_upd = waitForRemovetokenUpdated(id);
  block(matchDeleteRemovetoken(id), function () {
    verifyRemovetokenUpdated(id);
  });
  deleteRemovetoken(x.id);
  const e_del = waitForRemovetokenDeleted(id);
  block(matchAddRemovetoken(id), function () {
    verifyRemovetokenDoesNotExist(id);
  });
});

bthread("RenameLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRename(x.id);
  const e_add = waitForRenameAdded(id);
  block(matchDeleteRename(id), function () {
    verifyRenameExists(id);
  });
  updateRename(x.id);
  updateRename(x.id);
  const e_upd = waitForRenameUpdated(id);
  block(matchDeleteRename(id), function () {
    verifyRenameUpdated(id);
  });
  deleteRename(x.id);
  const e_del = waitForRenameDeleted(id);
  block(matchAddRename(id), function () {
    verifyRenameDoesNotExist(id);
  });
});

bthread("ReplyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReply(x.id);
  const e_add = waitForReplyAdded(id);
  block(matchDeleteReply(id), function () {
    verifyReplyExists(id);
  });
  updateReply(x.id);
  updateReply(x.id);
  const e_upd = waitForReplyUpdated(id);
  block(matchDeleteReply(id), function () {
    verifyReplyUpdated(id);
  });
  deleteReply(x.id);
  const e_del = waitForReplyDeleted(id);
  block(matchAddReply(id), function () {
    verifyReplyDoesNotExist(id);
  });
});

bthread("RepoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRepo(x.id);
  const e_add = waitForRepoAdded(id);
  block(matchDeleteRepo(id), function () {
    verifyRepoExists(id);
  });
  updateRepo(x.id);
  updateRepo(x.id);
  const e_upd = waitForRepoUpdated(id);
  block(matchDeleteRepo(id), function () {
    verifyRepoUpdated(id);
  });
  deleteRepo(x.id);
  const e_del = waitForRepoDeleted(id);
  block(matchAddRepo(id), function () {
    verifyRepoDoesNotExist(id);
  });
});

bthread("ReportLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReport(x.id);
  const e_add = waitForReportAdded(id);
  block(matchDeleteReport(id), function () {
    verifyReportExists(id);
  });
  updateReport(x.id);
  updateReport(x.id);
  const e_upd = waitForReportUpdated(id);
  block(matchDeleteReport(id), function () {
    verifyReportUpdated(id);
  });
  deleteReport(x.id);
  const e_del = waitForReportDeleted(id);
  block(matchAddReport(id), function () {
    verifyReportDoesNotExist(id);
  });
});

bthread("RepositoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRepository(x.id);
  const e_add = waitForRepositoryAdded(id);
  block(matchDeleteRepository(id), function () {
    verifyRepositoryExists(id);
  });
  updateRepository(x.id);
  updateRepository(x.id);
  const e_upd = waitForRepositoryUpdated(id);
  block(matchDeleteRepository(id), function () {
    verifyRepositoryUpdated(id);
  });
  deleteRepository(x.id);
  const e_del = waitForRepositoryDeleted(id);
  block(matchAddRepository(id), function () {
    verifyRepositoryDoesNotExist(id);
  });
});

bthread("RepositoryaccesLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRepositoryacces(x.id);
  const e_add = waitForRepositoryaccesAdded(id);
  block(matchDeleteRepositoryacces(id), function () {
    verifyRepositoryaccesExists(id);
  });
  updateRepositoryacces(x.id);
  updateRepositoryacces(x.id);
  const e_upd = waitForRepositoryaccesUpdated(id);
  block(matchDeleteRepositoryacces(id), function () {
    verifyRepositoryaccesUpdated(id);
  });
  deleteRepositoryacces(x.id);
  const e_del = waitForRepositoryaccesDeleted(id);
  block(matchAddRepositoryacces(id), function () {
    verifyRepositoryaccesDoesNotExist(id);
  });
});

bthread("RepositoryinvitationLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRepositoryinvitation(x.id);
  const e_add = waitForRepositoryinvitationAdded(id);
  block(matchDeleteRepositoryinvitation(id), function () {
    verifyRepositoryinvitationExists(id);
  });
  updateRepositoryinvitation(x.id);
  updateRepositoryinvitation(x.id);
  const e_upd = waitForRepositoryinvitationUpdated(id);
  block(matchDeleteRepositoryinvitation(id), function () {
    verifyRepositoryinvitationUpdated(id);
  });
  deleteRepositoryinvitation(x.id);
  const e_del = waitForRepositoryinvitationDeleted(id);
  block(matchAddRepositoryinvitation(id), function () {
    verifyRepositoryinvitationDoesNotExist(id);
  });
});

bthread("RequestedreviewerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequestedreviewer(x.id);
  const e_add = waitForRequestedreviewerAdded(id);
  block(matchDeleteRequestedreviewer(id), function () {
    verifyRequestedreviewerExists(id);
  });
  updateRequestedreviewer(x.id);
  updateRequestedreviewer(x.id);
  const e_upd = waitForRequestedreviewerUpdated(id);
  block(matchDeleteRequestedreviewer(id), function () {
    verifyRequestedreviewerUpdated(id);
  });
  deleteRequestedreviewer(x.id);
  const e_del = waitForRequestedreviewerDeleted(id);
  block(matchAddRequestedreviewer(id), function () {
    verifyRequestedreviewerDoesNotExist(id);
  });
});

bthread("RequiredpullrequestreviewLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequiredpullrequestreview(x.id);
  const e_add = waitForRequiredpullrequestreviewAdded(id);
  block(matchDeleteRequiredpullrequestreview(id), function () {
    verifyRequiredpullrequestreviewExists(id);
  });
  updateRequiredpullrequestreview(x.id);
  updateRequiredpullrequestreview(x.id);
  const e_upd = waitForRequiredpullrequestreviewUpdated(id);
  block(matchDeleteRequiredpullrequestreview(id), function () {
    verifyRequiredpullrequestreviewUpdated(id);
  });
  deleteRequiredpullrequestreview(x.id);
  const e_del = waitForRequiredpullrequestreviewDeleted(id);
  block(matchAddRequiredpullrequestreview(id), function () {
    verifyRequiredpullrequestreviewDoesNotExist(id);
  });
});

bthread("RequiredsignatureLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequiredsignature(x.id);
  const e_add = waitForRequiredsignatureAdded(id);
  block(matchDeleteRequiredsignature(id), function () {
    verifyRequiredsignatureExists(id);
  });
  updateRequiredsignature(x.id);
  updateRequiredsignature(x.id);
  const e_upd = waitForRequiredsignatureUpdated(id);
  block(matchDeleteRequiredsignature(id), function () {
    verifyRequiredsignatureUpdated(id);
  });
  deleteRequiredsignature(x.id);
  const e_del = waitForRequiredsignatureDeleted(id);
  block(matchAddRequiredsignature(id), function () {
    verifyRequiredsignatureDoesNotExist(id);
  });
});

bthread("RequiredstatuscheckLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRequiredstatuscheck(x.id);
  const e_add = waitForRequiredstatuscheckAdded(id);
  block(matchDeleteRequiredstatuscheck(id), function () {
    verifyRequiredstatuscheckExists(id);
  });
  updateRequiredstatuscheck(x.id);
  updateRequiredstatuscheck(x.id);
  const e_upd = waitForRequiredstatuscheckUpdated(id);
  block(matchDeleteRequiredstatuscheck(id), function () {
    verifyRequiredstatuscheckUpdated(id);
  });
  deleteRequiredstatuscheck(x.id);
  const e_del = waitForRequiredstatuscheckDeleted(id);
  block(matchAddRequiredstatuscheck(id), function () {
    verifyRequiredstatuscheckDoesNotExist(id);
  });
});

bthread("RerequestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRerequest(x.id);
  const e_add = waitForRerequestAdded(id);
  block(matchDeleteRerequest(id), function () {
    verifyRerequestExists(id);
  });
  updateRerequest(x.id);
  updateRerequest(x.id);
  const e_upd = waitForRerequestUpdated(id);
  block(matchDeleteRerequest(id), function () {
    verifyRerequestUpdated(id);
  });
  deleteRerequest(x.id);
  const e_del = waitForRerequestDeleted(id);
  block(matchAddRerequest(id), function () {
    verifyRerequestDoesNotExist(id);
  });
});

bthread("RerunLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRerun(x.id);
  const e_add = waitForRerunAdded(id);
  block(matchDeleteRerun(id), function () {
    verifyRerunExists(id);
  });
  updateRerun(x.id);
  updateRerun(x.id);
  const e_upd = waitForRerunUpdated(id);
  block(matchDeleteRerun(id), function () {
    verifyRerunUpdated(id);
  });
  deleteRerun(x.id);
  const e_del = waitForRerunDeleted(id);
  block(matchAddRerun(id), function () {
    verifyRerunDoesNotExist(id);
  });
});

bthread("RerunfailedjobLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRerunfailedjob(x.id);
  const e_add = waitForRerunfailedjobAdded(id);
  block(matchDeleteRerunfailedjob(id), function () {
    verifyRerunfailedjobExists(id);
  });
  updateRerunfailedjob(x.id);
  updateRerunfailedjob(x.id);
  const e_upd = waitForRerunfailedjobUpdated(id);
  block(matchDeleteRerunfailedjob(id), function () {
    verifyRerunfailedjobUpdated(id);
  });
  deleteRerunfailedjob(x.id);
  const e_del = waitForRerunfailedjobDeleted(id);
  block(matchAddRerunfailedjob(id), function () {
    verifyRerunfailedjobDoesNotExist(id);
  });
});

bthread("RestoreLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRestore(x.id);
  const e_add = waitForRestoreAdded(id);
  block(matchDeleteRestore(id), function () {
    verifyRestoreExists(id);
  });
  updateRestore(x.id);
  updateRestore(x.id);
  const e_upd = waitForRestoreUpdated(id);
  block(matchDeleteRestore(id), function () {
    verifyRestoreUpdated(id);
  });
  deleteRestore(x.id);
  const e_del = waitForRestoreDeleted(id);
  block(matchAddRestore(id), function () {
    verifyRestoreDoesNotExist(id);
  });
});

bthread("RestrictionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRestriction(x.id);
  const e_add = waitForRestrictionAdded(id);
  block(matchDeleteRestriction(id), function () {
    verifyRestrictionExists(id);
  });
  updateRestriction(x.id);
  updateRestriction(x.id);
  const e_upd = waitForRestrictionUpdated(id);
  block(matchDeleteRestriction(id), function () {
    verifyRestrictionUpdated(id);
  });
  deleteRestriction(x.id);
  const e_del = waitForRestrictionDeleted(id);
  block(matchAddRestriction(id), function () {
    verifyRestrictionDoesNotExist(id);
  });
});

bthread("ReviewLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReview(x.id);
  const e_add = waitForReviewAdded(id);
  block(matchDeleteReview(id), function () {
    verifyReviewExists(id);
  });
  updateReview(x.id);
  updateReview(x.id);
  const e_upd = waitForReviewUpdated(id);
  block(matchDeleteReview(id), function () {
    verifyReviewUpdated(id);
  });
  deleteReview(x.id);
  const e_del = waitForReviewDeleted(id);
  block(matchAddReview(id), function () {
    verifyReviewDoesNotExist(id);
  });
});

bthread("RevokeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRevoke(x.id);
  const e_add = waitForRevokeAdded(id);
  block(matchDeleteRevoke(id), function () {
    verifyRevokeExists(id);
  });
  updateRevoke(x.id);
  updateRevoke(x.id);
  const e_upd = waitForRevokeUpdated(id);
  block(matchDeleteRevoke(id), function () {
    verifyRevokeUpdated(id);
  });
  deleteRevoke(x.id);
  const e_del = waitForRevokeDeleted(id);
  block(matchAddRevoke(id), function () {
    verifyRevokeDoesNotExist(id);
  });
});

bthread("RoutestatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRoutestat(x.id);
  const e_add = waitForRoutestatAdded(id);
  block(matchDeleteRoutestat(id), function () {
    verifyRoutestatExists(id);
  });
  updateRoutestat(x.id);
  updateRoutestat(x.id);
  const e_upd = waitForRoutestatUpdated(id);
  block(matchDeleteRoutestat(id), function () {
    verifyRoutestatUpdated(id);
  });
  deleteRoutestat(x.id);
  const e_del = waitForRoutestatDeleted(id);
  block(matchAddRoutestat(id), function () {
    verifyRoutestatDoesNotExist(id);
  });
});

bthread("RuleLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRule(x.id);
  const e_add = waitForRuleAdded(id);
  block(matchDeleteRule(id), function () {
    verifyRuleExists(id);
  });
  updateRule(x.id);
  updateRule(x.id);
  const e_upd = waitForRuleUpdated(id);
  block(matchDeleteRule(id), function () {
    verifyRuleUpdated(id);
  });
  deleteRule(x.id);
  const e_del = waitForRuleDeleted(id);
  block(matchAddRule(id), function () {
    verifyRuleDoesNotExist(id);
  });
});

bthread("RulesetLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRuleset(x.id);
  const e_add = waitForRulesetAdded(id);
  block(matchDeleteRuleset(id), function () {
    verifyRulesetExists(id);
  });
  updateRuleset(x.id);
  updateRuleset(x.id);
  const e_upd = waitForRulesetUpdated(id);
  block(matchDeleteRuleset(id), function () {
    verifyRulesetUpdated(id);
  });
  deleteRuleset(x.id);
  const e_del = waitForRulesetDeleted(id);
  block(matchAddRuleset(id), function () {
    verifyRulesetDoesNotExist(id);
  });
});

bthread("RulesuiteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRulesuite(x.id);
  const e_add = waitForRulesuiteAdded(id);
  block(matchDeleteRulesuite(id), function () {
    verifyRulesuiteExists(id);
  });
  updateRulesuite(x.id);
  updateRulesuite(x.id);
  const e_upd = waitForRulesuiteUpdated(id);
  block(matchDeleteRulesuite(id), function () {
    verifyRulesuiteUpdated(id);
  });
  deleteRulesuite(x.id);
  const e_del = waitForRulesuiteDeleted(id);
  block(matchAddRulesuite(id), function () {
    verifyRulesuiteDoesNotExist(id);
  });
});

bthread("RunLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRun(x.id);
  const e_add = waitForRunAdded(id);
  block(matchDeleteRun(id), function () {
    verifyRunExists(id);
  });
  updateRun(x.id);
  updateRun(x.id);
  const e_upd = waitForRunUpdated(id);
  block(matchDeleteRun(id), function () {
    verifyRunUpdated(id);
  });
  deleteRun(x.id);
  const e_del = waitForRunDeleted(id);
  block(matchAddRun(id), function () {
    verifyRunDoesNotExist(id);
  });
});

bthread("RunnerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRunner(x.id);
  const e_add = waitForRunnerAdded(id);
  block(matchDeleteRunner(id), function () {
    verifyRunnerExists(id);
  });
  updateRunner(x.id);
  updateRunner(x.id);
  const e_upd = waitForRunnerUpdated(id);
  block(matchDeleteRunner(id), function () {
    verifyRunnerUpdated(id);
  });
  deleteRunner(x.id);
  const e_del = waitForRunnerDeleted(id);
  block(matchAddRunner(id), function () {
    verifyRunnerDoesNotExist(id);
  });
});

bthread("RunnergroupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRunnergroup(x.id);
  const e_add = waitForRunnergroupAdded(id);
  block(matchDeleteRunnergroup(id), function () {
    verifyRunnergroupExists(id);
  });
  updateRunnergroup(x.id);
  updateRunnergroup(x.id);
  const e_upd = waitForRunnergroupUpdated(id);
  block(matchDeleteRunnergroup(id), function () {
    verifyRunnergroupUpdated(id);
  });
  deleteRunnergroup(x.id);
  const e_del = waitForRunnergroupDeleted(id);
  block(matchAddRunnergroup(id), function () {
    verifyRunnergroupDoesNotExist(id);
  });
});

bthread("SarifLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSarif(x.id);
  const e_add = waitForSarifAdded(id);
  block(matchDeleteSarif(id), function () {
    verifySarifExists(id);
  });
  updateSarif(x.id);
  updateSarif(x.id);
  const e_upd = waitForSarifUpdated(id);
  block(matchDeleteSarif(id), function () {
    verifySarifUpdated(id);
  });
  deleteSarif(x.id);
  const e_del = waitForSarifDeleted(id);
  block(matchAddSarif(id), function () {
    verifySarifDoesNotExist(id);
  });
});

bthread("SbomLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSbom(x.id);
  const e_add = waitForSbomAdded(id);
  block(matchDeleteSbom(id), function () {
    verifySbomExists(id);
  });
  updateSbom(x.id);
  updateSbom(x.id);
  const e_upd = waitForSbomUpdated(id);
  block(matchDeleteSbom(id), function () {
    verifySbomUpdated(id);
  });
  deleteSbom(x.id);
  const e_del = waitForSbomDeleted(id);
  block(matchAddSbom(id), function () {
    verifySbomDoesNotExist(id);
  });
});

bthread("ScanhistoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScanhistory(x.id);
  const e_add = waitForScanhistoryAdded(id);
  block(matchDeleteScanhistory(id), function () {
    verifyScanhistoryExists(id);
  });
  updateScanhistory(x.id);
  updateScanhistory(x.id);
  const e_upd = waitForScanhistoryUpdated(id);
  block(matchDeleteScanhistory(id), function () {
    verifyScanhistoryUpdated(id);
  });
  deleteScanhistory(x.id);
  const e_del = waitForScanhistoryDeleted(id);
  block(matchAddScanhistory(id), function () {
    verifyScanhistoryDoesNotExist(id);
  });
});

bthread("SchemaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSchema(x.id);
  const e_add = waitForSchemaAdded(id);
  block(matchDeleteSchema(id), function () {
    verifySchemaExists(id);
  });
  updateSchema(x.id);
  updateSchema(x.id);
  const e_upd = waitForSchemaUpdated(id);
  block(matchDeleteSchema(id), function () {
    verifySchemaUpdated(id);
  });
  deleteSchema(x.id);
  const e_del = waitForSchemaDeleted(id);
  block(matchAddSchema(id), function () {
    verifySchemaDoesNotExist(id);
  });
});

bthread("ScopedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addScoped(x.id);
  const e_add = waitForScopedAdded(id);
  block(matchDeleteScoped(id), function () {
    verifyScopedExists(id);
  });
  updateScoped(x.id);
  updateScoped(x.id);
  const e_upd = waitForScopedUpdated(id);
  block(matchDeleteScoped(id), function () {
    verifyScopedUpdated(id);
  });
  deleteScoped(x.id);
  const e_del = waitForScopedDeleted(id);
  block(matchAddScoped(id), function () {
    verifyScopedDoesNotExist(id);
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

bthread("SeatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSeat(x.id);
  const e_add = waitForSeatAdded(id);
  block(matchDeleteSeat(id), function () {
    verifySeatExists(id);
  });
  updateSeat(x.id);
  updateSeat(x.id);
  const e_upd = waitForSeatUpdated(id);
  block(matchDeleteSeat(id), function () {
    verifySeatUpdated(id);
  });
  deleteSeat(x.id);
  const e_del = waitForSeatDeleted(id);
  block(matchAddSeat(id), function () {
    verifySeatDoesNotExist(id);
  });
});

bthread("SecretLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSecret(x.id);
  const e_add = waitForSecretAdded(id);
  block(matchDeleteSecret(id), function () {
    verifySecretExists(id);
  });
  updateSecret(x.id);
  updateSecret(x.id);
  const e_upd = waitForSecretUpdated(id);
  block(matchDeleteSecret(id), function () {
    verifySecretUpdated(id);
  });
  deleteSecret(x.id);
  const e_del = waitForSecretDeleted(id);
  block(matchAddSecret(id), function () {
    verifySecretDoesNotExist(id);
  });
});

bthread("SecretscanningLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSecretscanning(x.id);
  const e_add = waitForSecretscanningAdded(id);
  block(matchDeleteSecretscanning(id), function () {
    verifySecretscanningExists(id);
  });
  updateSecretscanning(x.id);
  updateSecretscanning(x.id);
  const e_upd = waitForSecretscanningUpdated(id);
  block(matchDeleteSecretscanning(id), function () {
    verifySecretscanningUpdated(id);
  });
  deleteSecretscanning(x.id);
  const e_del = waitForSecretscanningDeleted(id);
  block(matchAddSecretscanning(id), function () {
    verifySecretscanningDoesNotExist(id);
  });
});

bthread("SecurityadvisoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSecurityadvisory(x.id);
  const e_add = waitForSecurityadvisoryAdded(id);
  block(matchDeleteSecurityadvisory(id), function () {
    verifySecurityadvisoryExists(id);
  });
  updateSecurityadvisory(x.id);
  updateSecurityadvisory(x.id);
  const e_upd = waitForSecurityadvisoryUpdated(id);
  block(matchDeleteSecurityadvisory(id), function () {
    verifySecurityadvisoryUpdated(id);
  });
  deleteSecurityadvisory(x.id);
  const e_del = waitForSecurityadvisoryDeleted(id);
  block(matchAddSecurityadvisory(id), function () {
    verifySecurityadvisoryDoesNotExist(id);
  });
});

bthread("SecuritymanagerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSecuritymanager(x.id);
  const e_add = waitForSecuritymanagerAdded(id);
  block(matchDeleteSecuritymanager(id), function () {
    verifySecuritymanagerExists(id);
  });
  updateSecuritymanager(x.id);
  updateSecuritymanager(x.id);
  const e_upd = waitForSecuritymanagerUpdated(id);
  block(matchDeleteSecuritymanager(id), function () {
    verifySecuritymanagerUpdated(id);
  });
  deleteSecuritymanager(x.id);
  const e_del = waitForSecuritymanagerDeleted(id);
  block(matchAddSecuritymanager(id), function () {
    verifySecuritymanagerDoesNotExist(id);
  });
});

bthread("SelectedactionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSelectedaction(x.id);
  const e_add = waitForSelectedactionAdded(id);
  block(matchDeleteSelectedaction(id), function () {
    verifySelectedactionExists(id);
  });
  updateSelectedaction(x.id);
  updateSelectedaction(x.id);
  const e_upd = waitForSelectedactionUpdated(id);
  block(matchDeleteSelectedaction(id), function () {
    verifySelectedactionUpdated(id);
  });
  deleteSelectedaction(x.id);
  const e_del = waitForSelectedactionDeleted(id);
  block(matchAddSelectedaction(id), function () {
    verifySelectedactionDoesNotExist(id);
  });
});

bthread("SelectedteamLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSelectedteam(x.id);
  const e_add = waitForSelectedteamAdded(id);
  block(matchDeleteSelectedteam(id), function () {
    verifySelectedteamExists(id);
  });
  updateSelectedteam(x.id);
  updateSelectedteam(x.id);
  const e_upd = waitForSelectedteamUpdated(id);
  block(matchDeleteSelectedteam(id), function () {
    verifySelectedteamUpdated(id);
  });
  deleteSelectedteam(x.id);
  const e_del = waitForSelectedteamDeleted(id);
  block(matchAddSelectedteam(id), function () {
    verifySelectedteamDoesNotExist(id);
  });
});

bthread("SelecteduserLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSelecteduser(x.id);
  const e_add = waitForSelecteduserAdded(id);
  block(matchDeleteSelecteduser(id), function () {
    verifySelecteduserExists(id);
  });
  updateSelecteduser(x.id);
  updateSelecteduser(x.id);
  const e_upd = waitForSelecteduserUpdated(id);
  block(matchDeleteSelecteduser(id), function () {
    verifySelecteduserUpdated(id);
  });
  deleteSelecteduser(x.id);
  const e_del = waitForSelecteduserDeleted(id);
  block(matchAddSelecteduser(id), function () {
    verifySelecteduserDoesNotExist(id);
  });
});

bthread("SelfhostedrunnerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSelfhostedrunner(x.id);
  const e_add = waitForSelfhostedrunnerAdded(id);
  block(matchDeleteSelfhostedrunner(id), function () {
    verifySelfhostedrunnerExists(id);
  });
  updateSelfhostedrunner(x.id);
  updateSelfhostedrunner(x.id);
  const e_upd = waitForSelfhostedrunnerUpdated(id);
  block(matchDeleteSelfhostedrunner(id), function () {
    verifySelfhostedrunnerUpdated(id);
  });
  deleteSelfhostedrunner(x.id);
  const e_del = waitForSelfhostedrunnerDeleted(id);
  block(matchAddSelfhostedrunner(id), function () {
    verifySelfhostedrunnerDoesNotExist(id);
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

bthread("SharedstorageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSharedstorage(x.id);
  const e_add = waitForSharedstorageAdded(id);
  block(matchDeleteSharedstorage(id), function () {
    verifySharedstorageExists(id);
  });
  updateSharedstorage(x.id);
  updateSharedstorage(x.id);
  const e_upd = waitForSharedstorageUpdated(id);
  block(matchDeleteSharedstorage(id), function () {
    verifySharedstorageUpdated(id);
  });
  deleteSharedstorage(x.id);
  const e_del = waitForSharedstorageDeleted(id);
  block(matchAddSharedstorage(id), function () {
    verifySharedstorageDoesNotExist(id);
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

bthread("SocialaccountLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSocialaccount(x.id);
  const e_add = waitForSocialaccountAdded(id);
  block(matchDeleteSocialaccount(id), function () {
    verifySocialaccountExists(id);
  });
  updateSocialaccount(x.id);
  updateSocialaccount(x.id);
  const e_upd = waitForSocialaccountUpdated(id);
  block(matchDeleteSocialaccount(id), function () {
    verifySocialaccountUpdated(id);
  });
  deleteSocialaccount(x.id);
  const e_del = waitForSocialaccountDeleted(id);
  block(matchAddSocialaccount(id), function () {
    verifySocialaccountDoesNotExist(id);
  });
});

bthread("SshsigningkeyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSshsigningkey(x.id);
  const e_add = waitForSshsigningkeyAdded(id);
  block(matchDeleteSshsigningkey(id), function () {
    verifySshsigningkeyExists(id);
  });
  updateSshsigningkey(x.id);
  updateSshsigningkey(x.id);
  const e_upd = waitForSshsigningkeyUpdated(id);
  block(matchDeleteSshsigningkey(id), function () {
    verifySshsigningkeyUpdated(id);
  });
  deleteSshsigningkey(x.id);
  const e_del = waitForSshsigningkeyDeleted(id);
  block(matchAddSshsigningkey(id), function () {
    verifySshsigningkeyDoesNotExist(id);
  });
});

bthread("StarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStar(x.id);
  const e_add = waitForStarAdded(id);
  block(matchDeleteStar(id), function () {
    verifyStarExists(id);
  });
  updateStar(x.id);
  updateStar(x.id);
  const e_upd = waitForStarUpdated(id);
  block(matchDeleteStar(id), function () {
    verifyStarUpdated(id);
  });
  deleteStar(x.id);
  const e_del = waitForStarDeleted(id);
  block(matchAddStar(id), function () {
    verifyStarDoesNotExist(id);
  });
});

bthread("StargazerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStargazer(x.id);
  const e_add = waitForStargazerAdded(id);
  block(matchDeleteStargazer(id), function () {
    verifyStargazerExists(id);
  });
  updateStargazer(x.id);
  updateStargazer(x.id);
  const e_upd = waitForStargazerUpdated(id);
  block(matchDeleteStargazer(id), function () {
    verifyStargazerUpdated(id);
  });
  deleteStargazer(x.id);
  const e_del = waitForStargazerDeleted(id);
  block(matchAddStargazer(id), function () {
    verifyStargazerDoesNotExist(id);
  });
});

bthread("StarredLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStarred(x.id);
  const e_add = waitForStarredAdded(id);
  block(matchDeleteStarred(id), function () {
    verifyStarredExists(id);
  });
  updateStarred(x.id);
  updateStarred(x.id);
  const e_upd = waitForStarredUpdated(id);
  block(matchDeleteStarred(id), function () {
    verifyStarredUpdated(id);
  });
  deleteStarred(x.id);
  const e_del = waitForStarredDeleted(id);
  block(matchAddStarred(id), function () {
    verifyStarredDoesNotExist(id);
  });
});

bthread("StartLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStart(x.id);
  const e_add = waitForStartAdded(id);
  block(matchDeleteStart(id), function () {
    verifyStartExists(id);
  });
  updateStart(x.id);
  updateStart(x.id);
  const e_upd = waitForStartUpdated(id);
  block(matchDeleteStart(id), function () {
    verifyStartUpdated(id);
  });
  deleteStart(x.id);
  const e_del = waitForStartDeleted(id);
  block(matchAddStart(id), function () {
    verifyStartDoesNotExist(id);
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

bthread("StatuLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStatu(x.id);
  const e_add = waitForStatuAdded(id);
  block(matchDeleteStatu(id), function () {
    verifyStatuExists(id);
  });
  updateStatu(x.id);
  updateStatu(x.id);
  const e_upd = waitForStatuUpdated(id);
  block(matchDeleteStatu(id), function () {
    verifyStatuUpdated(id);
  });
  deleteStatu(x.id);
  const e_del = waitForStatuDeleted(id);
  block(matchAddStatu(id), function () {
    verifyStatuDoesNotExist(id);
  });
});

bthread("StatusLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStatus(x.id);
  const e_add = waitForStatusAdded(id);
  block(matchDeleteStatus(id), function () {
    verifyStatusExists(id);
  });
  updateStatus(x.id);
  updateStatus(x.id);
  const e_upd = waitForStatusUpdated(id);
  block(matchDeleteStatus(id), function () {
    verifyStatusUpdated(id);
  });
  deleteStatus(x.id);
  const e_del = waitForStatusDeleted(id);
  block(matchAddStatus(id), function () {
    verifyStatusDoesNotExist(id);
  });
});

bthread("StopLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStop(x.id);
  const e_add = waitForStopAdded(id);
  block(matchDeleteStop(id), function () {
    verifyStopExists(id);
  });
  updateStop(x.id);
  updateStop(x.id);
  const e_upd = waitForStopUpdated(id);
  block(matchDeleteStop(id), function () {
    verifyStopUpdated(id);
  });
  deleteStop(x.id);
  const e_del = waitForStopDeleted(id);
  block(matchAddStop(id), function () {
    verifyStopDoesNotExist(id);
  });
});

bthread("StoragerecordLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStoragerecord(x.id);
  const e_add = waitForStoragerecordAdded(id);
  block(matchDeleteStoragerecord(id), function () {
    verifyStoragerecordExists(id);
  });
  updateStoragerecord(x.id);
  updateStoragerecord(x.id);
  const e_upd = waitForStoragerecordUpdated(id);
  block(matchDeleteStoragerecord(id), function () {
    verifyStoragerecordUpdated(id);
  });
  deleteStoragerecord(x.id);
  const e_del = waitForStoragerecordDeleted(id);
  block(matchAddStoragerecord(id), function () {
    verifyStoragerecordDoesNotExist(id);
  });
});

bthread("StubbedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStubbed(x.id);
  const e_add = waitForStubbedAdded(id);
  block(matchDeleteStubbed(id), function () {
    verifyStubbedExists(id);
  });
  updateStubbed(x.id);
  updateStubbed(x.id);
  const e_upd = waitForStubbedUpdated(id);
  block(matchDeleteStubbed(id), function () {
    verifyStubbedUpdated(id);
  });
  deleteStubbed(x.id);
  const e_del = waitForStubbedDeleted(id);
  block(matchAddStubbed(id), function () {
    verifyStubbedDoesNotExist(id);
  });
});

bthread("SubLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSub(x.id);
  const e_add = waitForSubAdded(id);
  block(matchDeleteSub(id), function () {
    verifySubExists(id);
  });
  updateSub(x.id);
  updateSub(x.id);
  const e_upd = waitForSubUpdated(id);
  block(matchDeleteSub(id), function () {
    verifySubUpdated(id);
  });
  deleteSub(x.id);
  const e_del = waitForSubDeleted(id);
  block(matchAddSub(id), function () {
    verifySubDoesNotExist(id);
  });
});

bthread("SubissueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubissue(x.id);
  const e_add = waitForSubissueAdded(id);
  block(matchDeleteSubissue(id), function () {
    verifySubissueExists(id);
  });
  updateSubissue(x.id);
  updateSubissue(x.id);
  const e_upd = waitForSubissueUpdated(id);
  block(matchDeleteSubissue(id), function () {
    verifySubissueUpdated(id);
  });
  deleteSubissue(x.id);
  const e_del = waitForSubissueDeleted(id);
  block(matchAddSubissue(id), function () {
    verifySubissueDoesNotExist(id);
  });
});

bthread("SubjectstatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubjectstat(x.id);
  const e_add = waitForSubjectstatAdded(id);
  block(matchDeleteSubjectstat(id), function () {
    verifySubjectstatExists(id);
  });
  updateSubjectstat(x.id);
  updateSubjectstat(x.id);
  const e_upd = waitForSubjectstatUpdated(id);
  block(matchDeleteSubjectstat(id), function () {
    verifySubjectstatUpdated(id);
  });
  deleteSubjectstat(x.id);
  const e_del = waitForSubjectstatDeleted(id);
  block(matchAddSubjectstat(id), function () {
    verifySubjectstatDoesNotExist(id);
  });
});

bthread("SubscriberLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubscriber(x.id);
  const e_add = waitForSubscriberAdded(id);
  block(matchDeleteSubscriber(id), function () {
    verifySubscriberExists(id);
  });
  updateSubscriber(x.id);
  updateSubscriber(x.id);
  const e_upd = waitForSubscriberUpdated(id);
  block(matchDeleteSubscriber(id), function () {
    verifySubscriberUpdated(id);
  });
  deleteSubscriber(x.id);
  const e_del = waitForSubscriberDeleted(id);
  block(matchAddSubscriber(id), function () {
    verifySubscriberDoesNotExist(id);
  });
});

bthread("SubscriptionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSubscription(x.id);
  const e_add = waitForSubscriptionAdded(id);
  block(matchDeleteSubscription(id), function () {
    verifySubscriptionExists(id);
  });
  updateSubscription(x.id);
  updateSubscription(x.id);
  const e_upd = waitForSubscriptionUpdated(id);
  block(matchDeleteSubscription(id), function () {
    verifySubscriptionUpdated(id);
  });
  deleteSubscription(x.id);
  const e_del = waitForSubscriptionDeleted(id);
  block(matchAddSubscription(id), function () {
    verifySubscriptionDoesNotExist(id);
  });
});

bthread("SummarystatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSummarystat(x.id);
  const e_add = waitForSummarystatAdded(id);
  block(matchDeleteSummarystat(id), function () {
    verifySummarystatExists(id);
  });
  updateSummarystat(x.id);
  updateSummarystat(x.id);
  const e_upd = waitForSummarystatUpdated(id);
  block(matchDeleteSummarystat(id), function () {
    verifySummarystatUpdated(id);
  });
  deleteSummarystat(x.id);
  const e_del = waitForSummarystatDeleted(id);
  block(matchAddSummarystat(id), function () {
    verifySummarystatDoesNotExist(id);
  });
});

bthread("SuspendedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSuspended(x.id);
  const e_add = waitForSuspendedAdded(id);
  block(matchDeleteSuspended(id), function () {
    verifySuspendedExists(id);
  });
  updateSuspended(x.id);
  updateSuspended(x.id);
  const e_upd = waitForSuspendedUpdated(id);
  block(matchDeleteSuspended(id), function () {
    verifySuspendedUpdated(id);
  });
  deleteSuspended(x.id);
  const e_del = waitForSuspendedDeleted(id);
  block(matchAddSuspended(id), function () {
    verifySuspendedDoesNotExist(id);
  });
});

bthread("TagLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTag(x.id);
  const e_add = waitForTagAdded(id);
  block(matchDeleteTag(id), function () {
    verifyTagExists(id);
  });
  updateTag(x.id);
  updateTag(x.id);
  const e_upd = waitForTagUpdated(id);
  block(matchDeleteTag(id), function () {
    verifyTagUpdated(id);
  });
  deleteTag(x.id);
  const e_del = waitForTagDeleted(id);
  block(matchAddTag(id), function () {
    verifyTagDoesNotExist(id);
  });
});

bthread("TarballLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTarball(x.id);
  const e_add = waitForTarballAdded(id);
  block(matchDeleteTarball(id), function () {
    verifyTarballExists(id);
  });
  updateTarball(x.id);
  updateTarball(x.id);
  const e_upd = waitForTarballUpdated(id);
  block(matchDeleteTarball(id), function () {
    verifyTarballUpdated(id);
  });
  deleteTarball(x.id);
  const e_del = waitForTarballDeleted(id);
  block(matchAddTarball(id), function () {
    verifyTarballDoesNotExist(id);
  });
});

bthread("TeamLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTeam(x.id);
  const e_add = waitForTeamAdded(id);
  block(matchDeleteTeam(id), function () {
    verifyTeamExists(id);
  });
  updateTeam(x.id);
  updateTeam(x.id);
  const e_upd = waitForTeamUpdated(id);
  block(matchDeleteTeam(id), function () {
    verifyTeamUpdated(id);
  });
  deleteTeam(x.id);
  const e_del = waitForTeamDeleted(id);
  block(matchAddTeam(id), function () {
    verifyTeamDoesNotExist(id);
  });
});

bthread("TemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTemplate(x.id);
  const e_add = waitForTemplateAdded(id);
  block(matchDeleteTemplate(id), function () {
    verifyTemplateExists(id);
  });
  updateTemplate(x.id);
  updateTemplate(x.id);
  const e_upd = waitForTemplateUpdated(id);
  block(matchDeleteTemplate(id), function () {
    verifyTemplateUpdated(id);
  });
  deleteTemplate(x.id);
  const e_del = waitForTemplateDeleted(id);
  block(matchAddTemplate(id), function () {
    verifyTemplateDoesNotExist(id);
  });
});

bthread("TestLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTest(x.id);
  const e_add = waitForTestAdded(id);
  block(matchDeleteTest(id), function () {
    verifyTestExists(id);
  });
  updateTest(x.id);
  updateTest(x.id);
  const e_upd = waitForTestUpdated(id);
  block(matchDeleteTest(id), function () {
    verifyTestUpdated(id);
  });
  deleteTest(x.id);
  const e_del = waitForTestDeleted(id);
  block(matchAddTest(id), function () {
    verifyTestDoesNotExist(id);
  });
});

bthread("ThreadLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addThread(x.id);
  const e_add = waitForThreadAdded(id);
  block(matchDeleteThread(id), function () {
    verifyThreadExists(id);
  });
  updateThread(x.id);
  updateThread(x.id);
  const e_upd = waitForThreadUpdated(id);
  block(matchDeleteThread(id), function () {
    verifyThreadUpdated(id);
  });
  deleteThread(x.id);
  const e_del = waitForThreadDeleted(id);
  block(matchAddThread(id), function () {
    verifyThreadDoesNotExist(id);
  });
});

bthread("TimelineLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTimeline(x.id);
  const e_add = waitForTimelineAdded(id);
  block(matchDeleteTimeline(id), function () {
    verifyTimelineExists(id);
  });
  updateTimeline(x.id);
  updateTimeline(x.id);
  const e_upd = waitForTimelineUpdated(id);
  block(matchDeleteTimeline(id), function () {
    verifyTimelineUpdated(id);
  });
  deleteTimeline(x.id);
  const e_del = waitForTimelineDeleted(id);
  block(matchAddTimeline(id), function () {
    verifyTimelineDoesNotExist(id);
  });
});

bthread("TimestatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTimestat(x.id);
  const e_add = waitForTimestatAdded(id);
  block(matchDeleteTimestat(id), function () {
    verifyTimestatExists(id);
  });
  updateTimestat(x.id);
  updateTimestat(x.id);
  const e_upd = waitForTimestatUpdated(id);
  block(matchDeleteTimestat(id), function () {
    verifyTimestatUpdated(id);
  });
  deleteTimestat(x.id);
  const e_del = waitForTimestatDeleted(id);
  block(matchAddTimestat(id), function () {
    verifyTimestatDoesNotExist(id);
  });
});

bthread("TimingLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTiming(x.id);
  const e_add = waitForTimingAdded(id);
  block(matchDeleteTiming(id), function () {
    verifyTimingExists(id);
  });
  updateTiming(x.id);
  updateTiming(x.id);
  const e_upd = waitForTimingUpdated(id);
  block(matchDeleteTiming(id), function () {
    verifyTimingUpdated(id);
  });
  deleteTiming(x.id);
  const e_del = waitForTimingDeleted(id);
  block(matchAddTiming(id), function () {
    verifyTimingDoesNotExist(id);
  });
});

bthread("TokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addToken(x.id);
  const e_add = waitForTokenAdded(id);
  block(matchDeleteToken(id), function () {
    verifyTokenExists(id);
  });
  updateToken(x.id);
  updateToken(x.id);
  const e_upd = waitForTokenUpdated(id);
  block(matchDeleteToken(id), function () {
    verifyTokenUpdated(id);
  });
  deleteToken(x.id);
  const e_del = waitForTokenDeleted(id);
  block(matchAddToken(id), function () {
    verifyTokenDoesNotExist(id);
  });
});

bthread("TopicLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTopic(x.id);
  const e_add = waitForTopicAdded(id);
  block(matchDeleteTopic(id), function () {
    verifyTopicExists(id);
  });
  updateTopic(x.id);
  updateTopic(x.id);
  const e_upd = waitForTopicUpdated(id);
  block(matchDeleteTopic(id), function () {
    verifyTopicUpdated(id);
  });
  deleteTopic(x.id);
  const e_del = waitForTopicDeleted(id);
  block(matchAddTopic(id), function () {
    verifyTopicDoesNotExist(id);
  });
});

bthread("TrafficLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTraffic(x.id);
  const e_add = waitForTrafficAdded(id);
  block(matchDeleteTraffic(id), function () {
    verifyTrafficExists(id);
  });
  updateTraffic(x.id);
  updateTraffic(x.id);
  const e_upd = waitForTrafficUpdated(id);
  block(matchDeleteTraffic(id), function () {
    verifyTrafficUpdated(id);
  });
  deleteTraffic(x.id);
  const e_del = waitForTrafficDeleted(id);
  block(matchAddTraffic(id), function () {
    verifyTrafficDoesNotExist(id);
  });
});

bthread("TransferLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTransfer(x.id);
  const e_add = waitForTransferAdded(id);
  block(matchDeleteTransfer(id), function () {
    verifyTransferExists(id);
  });
  updateTransfer(x.id);
  updateTransfer(x.id);
  const e_upd = waitForTransferUpdated(id);
  block(matchDeleteTransfer(id), function () {
    verifyTransferUpdated(id);
  });
  deleteTransfer(x.id);
  const e_del = waitForTransferDeleted(id);
  block(matchAddTransfer(id), function () {
    verifyTransferDoesNotExist(id);
  });
});

bthread("TreeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTree(x.id);
  const e_add = waitForTreeAdded(id);
  block(matchDeleteTree(id), function () {
    verifyTreeExists(id);
  });
  updateTree(x.id);
  updateTree(x.id);
  const e_upd = waitForTreeUpdated(id);
  block(matchDeleteTree(id), function () {
    verifyTreeUpdated(id);
  });
  deleteTree(x.id);
  const e_del = waitForTreeDeleted(id);
  block(matchAddTree(id), function () {
    verifyTreeDoesNotExist(id);
  });
});

bthread("UpdatebranchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUpdatebranch(x.id);
  const e_add = waitForUpdatebranchAdded(id);
  block(matchDeleteUpdatebranch(id), function () {
    verifyUpdatebranchExists(id);
  });
  updateUpdatebranch(x.id);
  updateUpdatebranch(x.id);
  const e_upd = waitForUpdatebranchUpdated(id);
  block(matchDeleteUpdatebranch(id), function () {
    verifyUpdatebranchUpdated(id);
  });
  deleteUpdatebranch(x.id);
  const e_del = waitForUpdatebranchDeleted(id);
  block(matchAddUpdatebranch(id), function () {
    verifyUpdatebranchDoesNotExist(id);
  });
});

bthread("UsageLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsage(x.id);
  const e_add = waitForUsageAdded(id);
  block(matchDeleteUsage(id), function () {
    verifyUsageExists(id);
  });
  updateUsage(x.id);
  updateUsage(x.id);
  const e_upd = waitForUsageUpdated(id);
  block(matchDeleteUsage(id), function () {
    verifyUsageUpdated(id);
  });
  deleteUsage(x.id);
  const e_del = waitForUsageDeleted(id);
  block(matchAddUsage(id), function () {
    verifyUsageDoesNotExist(id);
  });
});

bthread("UsagebyrepositoryLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUsagebyrepository(x.id);
  const e_add = waitForUsagebyrepositoryAdded(id);
  block(matchDeleteUsagebyrepository(id), function () {
    verifyUsagebyrepositoryExists(id);
  });
  updateUsagebyrepository(x.id);
  updateUsagebyrepository(x.id);
  const e_upd = waitForUsagebyrepositoryUpdated(id);
  block(matchDeleteUsagebyrepository(id), function () {
    verifyUsagebyrepositoryUpdated(id);
  });
  deleteUsagebyrepository(x.id);
  const e_del = waitForUsagebyrepositoryDeleted(id);
  block(matchAddUsagebyrepository(id), function () {
    verifyUsagebyrepositoryDoesNotExist(id);
  });
});

bthread("UserLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUser(x.id);
  const e_add = waitForUserAdded(id);
  block(matchDeleteUser(id), function () {
    verifyUserExists(id);
  });
  updateUser(x.id);
  updateUser(x.id);
  const e_upd = waitForUserUpdated(id);
  block(matchDeleteUser(id), function () {
    verifyUserUpdated(id);
  });
  deleteUser(x.id);
  const e_del = waitForUserDeleted(id);
  block(matchAddUser(id), function () {
    verifyUserDoesNotExist(id);
  });
});

bthread("UserstatLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserstat(x.id);
  const e_add = waitForUserstatAdded(id);
  block(matchDeleteUserstat(id), function () {
    verifyUserstatExists(id);
  });
  updateUserstat(x.id);
  updateUserstat(x.id);
  const e_upd = waitForUserstatUpdated(id);
  block(matchDeleteUserstat(id), function () {
    verifyUserstatUpdated(id);
  });
  deleteUserstat(x.id);
  const e_del = waitForUserstatDeleted(id);
  block(matchAddUserstat(id), function () {
    verifyUserstatDoesNotExist(id);
  });
});

bthread("ValueLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addValue(x.id);
  const e_add = waitForValueAdded(id);
  block(matchDeleteValue(id), function () {
    verifyValueExists(id);
  });
  updateValue(x.id);
  updateValue(x.id);
  const e_upd = waitForValueUpdated(id);
  block(matchDeleteValue(id), function () {
    verifyValueUpdated(id);
  });
  deleteValue(x.id);
  const e_del = waitForValueDeleted(id);
  block(matchAddValue(id), function () {
    verifyValueDoesNotExist(id);
  });
});

bthread("VariableLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVariable(x.id);
  const e_add = waitForVariableAdded(id);
  block(matchDeleteVariable(id), function () {
    verifyVariableExists(id);
  });
  updateVariable(x.id);
  updateVariable(x.id);
  const e_upd = waitForVariableUpdated(id);
  block(matchDeleteVariable(id), function () {
    verifyVariableUpdated(id);
  });
  deleteVariable(x.id);
  const e_del = waitForVariableDeleted(id);
  block(matchAddVariable(id), function () {
    verifyVariableDoesNotExist(id);
  });
});

bthread("VariantanalysLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVariantanalys(x.id);
  const e_add = waitForVariantanalysAdded(id);
  block(matchDeleteVariantanalys(id), function () {
    verifyVariantanalysExists(id);
  });
  updateVariantanalys(x.id);
  updateVariantanalys(x.id);
  const e_upd = waitForVariantanalysUpdated(id);
  block(matchDeleteVariantanalys(id), function () {
    verifyVariantanalysUpdated(id);
  });
  deleteVariantanalys(x.id);
  const e_del = waitForVariantanalysDeleted(id);
  block(matchAddVariantanalys(id), function () {
    verifyVariantanalysDoesNotExist(id);
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

bthread("ViewLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addView(x.id);
  const e_add = waitForViewAdded(id);
  block(matchDeleteView(id), function () {
    verifyViewExists(id);
  });
  updateView(x.id);
  updateView(x.id);
  const e_upd = waitForViewUpdated(id);
  block(matchDeleteView(id), function () {
    verifyViewUpdated(id);
  });
  deleteView(x.id);
  const e_del = waitForViewDeleted(id);
  block(matchAddView(id), function () {
    verifyViewDoesNotExist(id);
  });
});

bthread("VisibilityLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVisibility(x.id);
  const e_add = waitForVisibilityAdded(id);
  block(matchDeleteVisibility(id), function () {
    verifyVisibilityExists(id);
  });
  updateVisibility(x.id);
  updateVisibility(x.id);
  const e_upd = waitForVisibilityUpdated(id);
  block(matchDeleteVisibility(id), function () {
    verifyVisibilityUpdated(id);
  });
  deleteVisibility(x.id);
  const e_del = waitForVisibilityDeleted(id);
  block(matchAddVisibility(id), function () {
    verifyVisibilityDoesNotExist(id);
  });
});

bthread("VulnerabilityalertLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addVulnerabilityalert(x.id);
  const e_add = waitForVulnerabilityalertAdded(id);
  block(matchDeleteVulnerabilityalert(id), function () {
    verifyVulnerabilityalertExists(id);
  });
  updateVulnerabilityalert(x.id);
  updateVulnerabilityalert(x.id);
  const e_upd = waitForVulnerabilityalertUpdated(id);
  block(matchDeleteVulnerabilityalert(id), function () {
    verifyVulnerabilityalertUpdated(id);
  });
  deleteVulnerabilityalert(x.id);
  const e_del = waitForVulnerabilityalertDeleted(id);
  block(matchAddVulnerabilityalert(id), function () {
    verifyVulnerabilityalertDoesNotExist(id);
  });
});

bthread("WorkflowLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWorkflow(x.id);
  const e_add = waitForWorkflowAdded(id);
  block(matchDeleteWorkflow(id), function () {
    verifyWorkflowExists(id);
  });
  updateWorkflow(x.id);
  updateWorkflow(x.id);
  const e_upd = waitForWorkflowUpdated(id);
  block(matchDeleteWorkflow(id), function () {
    verifyWorkflowUpdated(id);
  });
  deleteWorkflow(x.id);
  const e_del = waitForWorkflowDeleted(id);
  block(matchAddWorkflow(id), function () {
    verifyWorkflowDoesNotExist(id);
  });
});

bthread("ZenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addZen(x.id);
  const e_add = waitForZenAdded(id);
  block(matchDeleteZen(id), function () {
    verifyZenExists(id);
  });
  updateZen(x.id);
  updateZen(x.id);
  const e_upd = waitForZenUpdated(id);
  block(matchDeleteZen(id), function () {
    verifyZenUpdated(id);
  });
  deleteZen(x.id);
  const e_del = waitForZenDeleted(id);
  block(matchAddZen(id), function () {
    verifyZenDoesNotExist(id);
  });
});

bthread("ZipballLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addZipball(x.id);
  const e_add = waitForZipballAdded(id);
  block(matchDeleteZipball(id), function () {
    verifyZipballExists(id);
  });
  updateZipball(x.id);
  updateZipball(x.id);
  const e_upd = waitForZipballUpdated(id);
  block(matchDeleteZipball(id), function () {
    verifyZipballUpdated(id);
  });
  deleteZipball(x.id);
  const e_del = waitForZipballDeleted(id);
  block(matchAddZipball(id), function () {
    verifyZipballDoesNotExist(id);
  });
});

// ===== PASSIVE ASSERTIONS =====

bthread("Acceptedassignment create verification", function () {
  const e = waitForAnyAcceptedassignmentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAcceptedassignment(k), function () {
    verifyAcceptedassignmentExists(k);
  });
});

bthread("Acceptedassignment update verification", function () {
  const e = waitForAnyAcceptedassignmentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAcceptedassignment(k), function () {
    verifyAcceptedassignmentUpdated(k);
  });
});

bthread("Acceptedassignment delete verification", function () {
  const e = waitForAnyAcceptedassignmentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAcceptedassignment(k), function () {
    verifyAcceptedassignmentDoesNotExist(k);
  });
});

bthread("Acces create verification", function () {
  const e = waitForAnyAccesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAcces(k), function () {
    verifyAccesExists(k);
  });
});

bthread("Acces update verification", function () {
  const e = waitForAnyAccesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAcces(k), function () {
    verifyAccesUpdated(k);
  });
});

bthread("Acces delete verification", function () {
  const e = waitForAnyAccesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAcces(k), function () {
    verifyAccesDoesNotExist(k);
  });
});

bthread("Accesstoken create verification", function () {
  const e = waitForAnyAccesstokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccesstoken(k), function () {
    verifyAccesstokenExists(k);
  });
});

bthread("Accesstoken update verification", function () {
  const e = waitForAnyAccesstokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccesstoken(k), function () {
    verifyAccesstokenUpdated(k);
  });
});

bthread("Accesstoken delete verification", function () {
  const e = waitForAnyAccesstokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccesstoken(k), function () {
    verifyAccesstokenDoesNotExist(k);
  });
});

bthread("Account create verification", function () {
  const e = waitForAnyAccountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccount(k), function () {
    verifyAccountExists(k);
  });
});

bthread("Account update verification", function () {
  const e = waitForAnyAccountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccount(k), function () {
    verifyAccountUpdated(k);
  });
});

bthread("Account delete verification", function () {
  const e = waitForAnyAccountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccount(k), function () {
    verifyAccountDoesNotExist(k);
  });
});

bthread("Action create verification", function () {
  const e = waitForAnyActionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAction(k), function () {
    verifyActionExists(k);
  });
});

bthread("Action update verification", function () {
  const e = waitForAnyActionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAction(k), function () {
    verifyActionUpdated(k);
  });
});

bthread("Action delete verification", function () {
  const e = waitForAnyActionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAction(k), function () {
    verifyActionDoesNotExist(k);
  });
});

bthread("Activity create verification", function () {
  const e = waitForAnyActivityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActivity(k), function () {
    verifyActivityExists(k);
  });
});

bthread("Activity update verification", function () {
  const e = waitForAnyActivityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActivity(k), function () {
    verifyActivityUpdated(k);
  });
});

bthread("Activity delete verification", function () {
  const e = waitForAnyActivityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddActivity(k), function () {
    verifyActivityDoesNotExist(k);
  });
});

bthread("Add create verification", function () {
  const e = waitForAnyAddAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdd(k), function () {
    verifyAddExists(k);
  });
});

bthread("Add update verification", function () {
  const e = waitForAnyAddUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdd(k), function () {
    verifyAddUpdated(k);
  });
});

bthread("Add delete verification", function () {
  const e = waitForAnyAddDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAdd(k), function () {
    verifyAddDoesNotExist(k);
  });
});

bthread("Advisory create verification", function () {
  const e = waitForAnyAdvisoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdvisory(k), function () {
    verifyAdvisoryExists(k);
  });
});

bthread("Advisory update verification", function () {
  const e = waitForAnyAdvisoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdvisory(k), function () {
    verifyAdvisoryUpdated(k);
  });
});

bthread("Advisory delete verification", function () {
  const e = waitForAnyAdvisoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAdvisory(k), function () {
    verifyAdvisoryDoesNotExist(k);
  });
});

bthread("Alert create verification", function () {
  const e = waitForAnyAlertAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAlert(k), function () {
    verifyAlertExists(k);
  });
});

bthread("Alert update verification", function () {
  const e = waitForAnyAlertUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAlert(k), function () {
    verifyAlertUpdated(k);
  });
});

bthread("Alert delete verification", function () {
  const e = waitForAnyAlertDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAlert(k), function () {
    verifyAlertDoesNotExist(k);
  });
});

bthread("Analys create verification", function () {
  const e = waitForAnyAnalysAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnalys(k), function () {
    verifyAnalysExists(k);
  });
});

bthread("Analys update verification", function () {
  const e = waitForAnyAnalysUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnalys(k), function () {
    verifyAnalysUpdated(k);
  });
});

bthread("Analys delete verification", function () {
  const e = waitForAnyAnalysDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAnalys(k), function () {
    verifyAnalysDoesNotExist(k);
  });
});

bthread("Annotation create verification", function () {
  const e = waitForAnyAnnotationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnnotation(k), function () {
    verifyAnnotationExists(k);
  });
});

bthread("Annotation update verification", function () {
  const e = waitForAnyAnnotationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAnnotation(k), function () {
    verifyAnnotationUpdated(k);
  });
});

bthread("Annotation delete verification", function () {
  const e = waitForAnyAnnotationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAnnotation(k), function () {
    verifyAnnotationDoesNotExist(k);
  });
});

bthread("Api create verification", function () {
  const e = waitForAnyApiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApi(k), function () {
    verifyApiExists(k);
  });
});

bthread("Api update verification", function () {
  const e = waitForAnyApiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApi(k), function () {
    verifyApiUpdated(k);
  });
});

bthread("Api delete verification", function () {
  const e = waitForAnyApiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApi(k), function () {
    verifyApiDoesNotExist(k);
  });
});

bthread("App create verification", function () {
  const e = waitForAnyAppAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApp(k), function () {
    verifyAppExists(k);
  });
});

bthread("App update verification", function () {
  const e = waitForAnyAppUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApp(k), function () {
    verifyAppUpdated(k);
  });
});

bthread("App delete verification", function () {
  const e = waitForAnyAppDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApp(k), function () {
    verifyAppDoesNotExist(k);
  });
});

bthread("Application create verification", function () {
  const e = waitForAnyApplicationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplication(k), function () {
    verifyApplicationExists(k);
  });
});

bthread("Application update verification", function () {
  const e = waitForAnyApplicationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApplication(k), function () {
    verifyApplicationUpdated(k);
  });
});

bthread("Application delete verification", function () {
  const e = waitForAnyApplicationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApplication(k), function () {
    verifyApplicationDoesNotExist(k);
  });
});

bthread("Appmanifest create verification", function () {
  const e = waitForAnyAppmanifestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAppmanifest(k), function () {
    verifyAppmanifestExists(k);
  });
});

bthread("Appmanifest update verification", function () {
  const e = waitForAnyAppmanifestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAppmanifest(k), function () {
    verifyAppmanifestUpdated(k);
  });
});

bthread("Appmanifest delete verification", function () {
  const e = waitForAnyAppmanifestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAppmanifest(k), function () {
    verifyAppmanifestDoesNotExist(k);
  });
});

bthread("Approval create verification", function () {
  const e = waitForAnyApprovalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApproval(k), function () {
    verifyApprovalExists(k);
  });
});

bthread("Approval update verification", function () {
  const e = waitForAnyApprovalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApproval(k), function () {
    verifyApprovalUpdated(k);
  });
});

bthread("Approval delete verification", function () {
  const e = waitForAnyApprovalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApproval(k), function () {
    verifyApprovalDoesNotExist(k);
  });
});

bthread("Approve create verification", function () {
  const e = waitForAnyApproveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApprove(k), function () {
    verifyApproveExists(k);
  });
});

bthread("Approve update verification", function () {
  const e = waitForAnyApproveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteApprove(k), function () {
    verifyApproveUpdated(k);
  });
});

bthread("Approve delete verification", function () {
  const e = waitForAnyApproveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddApprove(k), function () {
    verifyApproveDoesNotExist(k);
  });
});

bthread("Archive create verification", function () {
  const e = waitForAnyArchiveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteArchive(k), function () {
    verifyArchiveExists(k);
  });
});

bthread("Archive update verification", function () {
  const e = waitForAnyArchiveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteArchive(k), function () {
    verifyArchiveUpdated(k);
  });
});

bthread("Archive delete verification", function () {
  const e = waitForAnyArchiveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddArchive(k), function () {
    verifyArchiveDoesNotExist(k);
  });
});

bthread("Artifact create verification", function () {
  const e = waitForAnyArtifactAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteArtifact(k), function () {
    verifyArtifactExists(k);
  });
});

bthread("Artifact update verification", function () {
  const e = waitForAnyArtifactUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteArtifact(k), function () {
    verifyArtifactUpdated(k);
  });
});

bthread("Artifact delete verification", function () {
  const e = waitForAnyArtifactDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddArtifact(k), function () {
    verifyArtifactDoesNotExist(k);
  });
});

bthread("Artifactandlogretention create verification", function () {
  const e = waitForAnyArtifactandlogretentionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteArtifactandlogretention(k), function () {
    verifyArtifactandlogretentionExists(k);
  });
});

bthread("Artifactandlogretention update verification", function () {
  const e = waitForAnyArtifactandlogretentionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteArtifactandlogretention(k), function () {
    verifyArtifactandlogretentionUpdated(k);
  });
});

bthread("Artifactandlogretention delete verification", function () {
  const e = waitForAnyArtifactandlogretentionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddArtifactandlogretention(k), function () {
    verifyArtifactandlogretentionDoesNotExist(k);
  });
});

bthread("Asset create verification", function () {
  const e = waitForAnyAssetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAsset(k), function () {
    verifyAssetExists(k);
  });
});

bthread("Asset update verification", function () {
  const e = waitForAnyAssetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAsset(k), function () {
    verifyAssetUpdated(k);
  });
});

bthread("Asset delete verification", function () {
  const e = waitForAnyAssetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAsset(k), function () {
    verifyAssetDoesNotExist(k);
  });
});

bthread("Assignee create verification", function () {
  const e = waitForAnyAssigneeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignee(k), function () {
    verifyAssigneeExists(k);
  });
});

bthread("Assignee update verification", function () {
  const e = waitForAnyAssigneeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignee(k), function () {
    verifyAssigneeUpdated(k);
  });
});

bthread("Assignee delete verification", function () {
  const e = waitForAnyAssigneeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAssignee(k), function () {
    verifyAssigneeDoesNotExist(k);
  });
});

bthread("Assignment create verification", function () {
  const e = waitForAnyAssignmentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignment(k), function () {
    verifyAssignmentExists(k);
  });
});

bthread("Assignment update verification", function () {
  const e = waitForAnyAssignmentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAssignment(k), function () {
    verifyAssignmentUpdated(k);
  });
});

bthread("Assignment delete verification", function () {
  const e = waitForAnyAssignmentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAssignment(k), function () {
    verifyAssignmentDoesNotExist(k);
  });
});

bthread("Attach create verification", function () {
  const e = waitForAnyAttachAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttach(k), function () {
    verifyAttachExists(k);
  });
});

bthread("Attach update verification", function () {
  const e = waitForAnyAttachUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttach(k), function () {
    verifyAttachUpdated(k);
  });
});

bthread("Attach delete verification", function () {
  const e = waitForAnyAttachDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAttach(k), function () {
    verifyAttachDoesNotExist(k);
  });
});

bthread("Attempt create verification", function () {
  const e = waitForAnyAttemptAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttempt(k), function () {
    verifyAttemptExists(k);
  });
});

bthread("Attempt update verification", function () {
  const e = waitForAnyAttemptUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttempt(k), function () {
    verifyAttemptUpdated(k);
  });
});

bthread("Attempt delete verification", function () {
  const e = waitForAnyAttemptDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAttempt(k), function () {
    verifyAttemptDoesNotExist(k);
  });
});

bthread("Attestation create verification", function () {
  const e = waitForAnyAttestationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttestation(k), function () {
    verifyAttestationExists(k);
  });
});

bthread("Attestation update verification", function () {
  const e = waitForAnyAttestationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttestation(k), function () {
    verifyAttestationUpdated(k);
  });
});

bthread("Attestation delete verification", function () {
  const e = waitForAnyAttestationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAttestation(k), function () {
    verifyAttestationDoesNotExist(k);
  });
});

bthread("Author create verification", function () {
  const e = waitForAnyAuthorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthor(k), function () {
    verifyAuthorExists(k);
  });
});

bthread("Author update verification", function () {
  const e = waitForAnyAuthorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAuthor(k), function () {
    verifyAuthorUpdated(k);
  });
});

bthread("Author delete verification", function () {
  const e = waitForAnyAuthorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAuthor(k), function () {
    verifyAuthorDoesNotExist(k);
  });
});

bthread("Autofix create verification", function () {
  const e = waitForAnyAutofixAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAutofix(k), function () {
    verifyAutofixExists(k);
  });
});

bthread("Autofix update verification", function () {
  const e = waitForAnyAutofixUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAutofix(k), function () {
    verifyAutofixUpdated(k);
  });
});

bthread("Autofix delete verification", function () {
  const e = waitForAnyAutofixDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAutofix(k), function () {
    verifyAutofixDoesNotExist(k);
  });
});

bthread("Autolink create verification", function () {
  const e = waitForAnyAutolinkAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAutolink(k), function () {
    verifyAutolinkExists(k);
  });
});

bthread("Autolink update verification", function () {
  const e = waitForAnyAutolinkUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAutolink(k), function () {
    verifyAutolinkUpdated(k);
  });
});

bthread("Autolink delete verification", function () {
  const e = waitForAnyAutolinkDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAutolink(k), function () {
    verifyAutolinkDoesNotExist(k);
  });
});

bthread("Automatedsecurityfixe create verification", function () {
  const e = waitForAnyAutomatedsecurityfixeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAutomatedsecurityfixe(k), function () {
    verifyAutomatedsecurityfixeExists(k);
  });
});

bthread("Automatedsecurityfixe update verification", function () {
  const e = waitForAnyAutomatedsecurityfixeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAutomatedsecurityfixe(k), function () {
    verifyAutomatedsecurityfixeUpdated(k);
  });
});

bthread("Automatedsecurityfixe delete verification", function () {
  const e = waitForAnyAutomatedsecurityfixeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAutomatedsecurityfixe(k), function () {
    verifyAutomatedsecurityfixeDoesNotExist(k);
  });
});

bthread("Billing create verification", function () {
  const e = waitForAnyBillingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBilling(k), function () {
    verifyBillingExists(k);
  });
});

bthread("Billing update verification", function () {
  const e = waitForAnyBillingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBilling(k), function () {
    verifyBillingUpdated(k);
  });
});

bthread("Billing delete verification", function () {
  const e = waitForAnyBillingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBilling(k), function () {
    verifyBillingDoesNotExist(k);
  });
});

bthread("Blob create verification", function () {
  const e = waitForAnyBlobAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBlob(k), function () {
    verifyBlobExists(k);
  });
});

bthread("Blob update verification", function () {
  const e = waitForAnyBlobUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBlob(k), function () {
    verifyBlobUpdated(k);
  });
});

bthread("Blob delete verification", function () {
  const e = waitForAnyBlobDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBlob(k), function () {
    verifyBlobDoesNotExist(k);
  });
});

bthread("Block create verification", function () {
  const e = waitForAnyBlockAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBlock(k), function () {
    verifyBlockExists(k);
  });
});

bthread("Block update verification", function () {
  const e = waitForAnyBlockUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBlock(k), function () {
    verifyBlockUpdated(k);
  });
});

bthread("Block delete verification", function () {
  const e = waitForAnyBlockDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBlock(k), function () {
    verifyBlockDoesNotExist(k);
  });
});

bthread("Blockedby create verification", function () {
  const e = waitForAnyBlockedbyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBlockedby(k), function () {
    verifyBlockedbyExists(k);
  });
});

bthread("Blockedby update verification", function () {
  const e = waitForAnyBlockedbyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBlockedby(k), function () {
    verifyBlockedbyUpdated(k);
  });
});

bthread("Blockedby delete verification", function () {
  const e = waitForAnyBlockedbyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBlockedby(k), function () {
    verifyBlockedbyDoesNotExist(k);
  });
});

bthread("Blocking create verification", function () {
  const e = waitForAnyBlockingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBlocking(k), function () {
    verifyBlockingExists(k);
  });
});

bthread("Blocking update verification", function () {
  const e = waitForAnyBlockingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBlocking(k), function () {
    verifyBlockingUpdated(k);
  });
});

bthread("Blocking delete verification", function () {
  const e = waitForAnyBlockingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBlocking(k), function () {
    verifyBlockingDoesNotExist(k);
  });
});

bthread("Branche create verification", function () {
  const e = waitForAnyBrancheAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBranche(k), function () {
    verifyBrancheExists(k);
  });
});

bthread("Branche update verification", function () {
  const e = waitForAnyBrancheUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBranche(k), function () {
    verifyBrancheUpdated(k);
  });
});

bthread("Branche delete verification", function () {
  const e = waitForAnyBrancheDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBranche(k), function () {
    verifyBrancheDoesNotExist(k);
  });
});

bthread("Brancheswherehead create verification", function () {
  const e = waitForAnyBrancheswhereheadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBrancheswherehead(k), function () {
    verifyBrancheswhereheadExists(k);
  });
});

bthread("Brancheswherehead update verification", function () {
  const e = waitForAnyBrancheswhereheadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBrancheswherehead(k), function () {
    verifyBrancheswhereheadUpdated(k);
  });
});

bthread("Brancheswherehead delete verification", function () {
  const e = waitForAnyBrancheswhereheadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBrancheswherehead(k), function () {
    verifyBrancheswhereheadDoesNotExist(k);
  });
});

bthread("Build create verification", function () {
  const e = waitForAnyBuildAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBuild(k), function () {
    verifyBuildExists(k);
  });
});

bthread("Build update verification", function () {
  const e = waitForAnyBuildUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBuild(k), function () {
    verifyBuildUpdated(k);
  });
});

bthread("Build delete verification", function () {
  const e = waitForAnyBuildDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBuild(k), function () {
    verifyBuildDoesNotExist(k);
  });
});

bthread("Bulklist create verification", function () {
  const e = waitForAnyBulklistAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBulklist(k), function () {
    verifyBulklistExists(k);
  });
});

bthread("Bulklist update verification", function () {
  const e = waitForAnyBulklistUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBulklist(k), function () {
    verifyBulklistUpdated(k);
  });
});

bthread("Bulklist delete verification", function () {
  const e = waitForAnyBulklistDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBulklist(k), function () {
    verifyBulklistDoesNotExist(k);
  });
});

bthread("Cache create verification", function () {
  const e = waitForAnyCacheAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCache(k), function () {
    verifyCacheExists(k);
  });
});

bthread("Cache update verification", function () {
  const e = waitForAnyCacheUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCache(k), function () {
    verifyCacheUpdated(k);
  });
});

bthread("Cache delete verification", function () {
  const e = waitForAnyCacheDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCache(k), function () {
    verifyCacheDoesNotExist(k);
  });
});

bthread("Campaign create verification", function () {
  const e = waitForAnyCampaignAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCampaign(k), function () {
    verifyCampaignExists(k);
  });
});

bthread("Campaign update verification", function () {
  const e = waitForAnyCampaignUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCampaign(k), function () {
    verifyCampaignUpdated(k);
  });
});

bthread("Campaign delete verification", function () {
  const e = waitForAnyCampaignDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCampaign(k), function () {
    verifyCampaignDoesNotExist(k);
  });
});

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

bthread("Checkrun create verification", function () {
  const e = waitForAnyCheckrunAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCheckrun(k), function () {
    verifyCheckrunExists(k);
  });
});

bthread("Checkrun update verification", function () {
  const e = waitForAnyCheckrunUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCheckrun(k), function () {
    verifyCheckrunUpdated(k);
  });
});

bthread("Checkrun delete verification", function () {
  const e = waitForAnyCheckrunDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCheckrun(k), function () {
    verifyCheckrunDoesNotExist(k);
  });
});

bthread("Checksuite create verification", function () {
  const e = waitForAnyChecksuiteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecksuite(k), function () {
    verifyChecksuiteExists(k);
  });
});

bthread("Checksuite update verification", function () {
  const e = waitForAnyChecksuiteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteChecksuite(k), function () {
    verifyChecksuiteUpdated(k);
  });
});

bthread("Checksuite delete verification", function () {
  const e = waitForAnyChecksuiteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddChecksuite(k), function () {
    verifyChecksuiteDoesNotExist(k);
  });
});

bthread("Classroom create verification", function () {
  const e = waitForAnyClassroomAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClassroom(k), function () {
    verifyClassroomExists(k);
  });
});

bthread("Classroom update verification", function () {
  const e = waitForAnyClassroomUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClassroom(k), function () {
    verifyClassroomUpdated(k);
  });
});

bthread("Classroom delete verification", function () {
  const e = waitForAnyClassroomDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClassroom(k), function () {
    verifyClassroomDoesNotExist(k);
  });
});

bthread("Clone create verification", function () {
  const e = waitForAnyCloneAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClone(k), function () {
    verifyCloneExists(k);
  });
});

bthread("Clone update verification", function () {
  const e = waitForAnyCloneUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteClone(k), function () {
    verifyCloneUpdated(k);
  });
});

bthread("Clone delete verification", function () {
  const e = waitForAnyCloneDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddClone(k), function () {
    verifyCloneDoesNotExist(k);
  });
});

bthread("Code create verification", function () {
  const e = waitForAnyCodeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCode(k), function () {
    verifyCodeExists(k);
  });
});

bthread("Code update verification", function () {
  const e = waitForAnyCodeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCode(k), function () {
    verifyCodeUpdated(k);
  });
});

bthread("Code delete verification", function () {
  const e = waitForAnyCodeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCode(k), function () {
    verifyCodeDoesNotExist(k);
  });
});

bthread("Codefrequency create verification", function () {
  const e = waitForAnyCodefrequencyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodefrequency(k), function () {
    verifyCodefrequencyExists(k);
  });
});

bthread("Codefrequency update verification", function () {
  const e = waitForAnyCodefrequencyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodefrequency(k), function () {
    verifyCodefrequencyUpdated(k);
  });
});

bthread("Codefrequency delete verification", function () {
  const e = waitForAnyCodefrequencyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodefrequency(k), function () {
    verifyCodefrequencyDoesNotExist(k);
  });
});

bthread("Codeowner create verification", function () {
  const e = waitForAnyCodeownerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodeowner(k), function () {
    verifyCodeownerExists(k);
  });
});

bthread("Codeowner update verification", function () {
  const e = waitForAnyCodeownerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodeowner(k), function () {
    verifyCodeownerUpdated(k);
  });
});

bthread("Codeowner delete verification", function () {
  const e = waitForAnyCodeownerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodeowner(k), function () {
    verifyCodeownerDoesNotExist(k);
  });
});

bthread("Codeql create verification", function () {
  const e = waitForAnyCodeqlAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodeql(k), function () {
    verifyCodeqlExists(k);
  });
});

bthread("Codeql update verification", function () {
  const e = waitForAnyCodeqlUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodeql(k), function () {
    verifyCodeqlUpdated(k);
  });
});

bthread("Codeql delete verification", function () {
  const e = waitForAnyCodeqlDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodeql(k), function () {
    verifyCodeqlDoesNotExist(k);
  });
});

bthread("Codescanning create verification", function () {
  const e = waitForAnyCodescanningAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodescanning(k), function () {
    verifyCodescanningExists(k);
  });
});

bthread("Codescanning update verification", function () {
  const e = waitForAnyCodescanningUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodescanning(k), function () {
    verifyCodescanningUpdated(k);
  });
});

bthread("Codescanning delete verification", function () {
  const e = waitForAnyCodescanningDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodescanning(k), function () {
    verifyCodescanningDoesNotExist(k);
  });
});

bthread("Codesecurity create verification", function () {
  const e = waitForAnyCodesecurityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodesecurity(k), function () {
    verifyCodesecurityExists(k);
  });
});

bthread("Codesecurity update verification", function () {
  const e = waitForAnyCodesecurityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodesecurity(k), function () {
    verifyCodesecurityUpdated(k);
  });
});

bthread("Codesecurity delete verification", function () {
  const e = waitForAnyCodesecurityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodesecurity(k), function () {
    verifyCodesecurityDoesNotExist(k);
  });
});

bthread("Codesecurityconfiguration create verification", function () {
  const e = waitForAnyCodesecurityconfigurationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodesecurityconfiguration(k), function () {
    verifyCodesecurityconfigurationExists(k);
  });
});

bthread("Codesecurityconfiguration update verification", function () {
  const e = waitForAnyCodesecurityconfigurationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodesecurityconfiguration(k), function () {
    verifyCodesecurityconfigurationUpdated(k);
  });
});

bthread("Codesecurityconfiguration delete verification", function () {
  const e = waitForAnyCodesecurityconfigurationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodesecurityconfiguration(k), function () {
    verifyCodesecurityconfigurationDoesNotExist(k);
  });
});

bthread("Codesofconduct create verification", function () {
  const e = waitForAnyCodesofconductAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodesofconduct(k), function () {
    verifyCodesofconductExists(k);
  });
});

bthread("Codesofconduct update verification", function () {
  const e = waitForAnyCodesofconductUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodesofconduct(k), function () {
    verifyCodesofconductUpdated(k);
  });
});

bthread("Codesofconduct delete verification", function () {
  const e = waitForAnyCodesofconductDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodesofconduct(k), function () {
    verifyCodesofconductDoesNotExist(k);
  });
});

bthread("Codespace create verification", function () {
  const e = waitForAnyCodespaceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodespace(k), function () {
    verifyCodespaceExists(k);
  });
});

bthread("Codespace update verification", function () {
  const e = waitForAnyCodespaceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCodespace(k), function () {
    verifyCodespaceUpdated(k);
  });
});

bthread("Codespace delete verification", function () {
  const e = waitForAnyCodespaceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCodespace(k), function () {
    verifyCodespaceDoesNotExist(k);
  });
});

bthread("Collaborator create verification", function () {
  const e = waitForAnyCollaboratorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCollaborator(k), function () {
    verifyCollaboratorExists(k);
  });
});

bthread("Collaborator update verification", function () {
  const e = waitForAnyCollaboratorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCollaborator(k), function () {
    verifyCollaboratorUpdated(k);
  });
});

bthread("Collaborator delete verification", function () {
  const e = waitForAnyCollaboratorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCollaborator(k), function () {
    verifyCollaboratorDoesNotExist(k);
  });
});

bthread("Column create verification", function () {
  const e = waitForAnyColumnAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteColumn(k), function () {
    verifyColumnExists(k);
  });
});

bthread("Column update verification", function () {
  const e = waitForAnyColumnUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteColumn(k), function () {
    verifyColumnUpdated(k);
  });
});

bthread("Column delete verification", function () {
  const e = waitForAnyColumnDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddColumn(k), function () {
    verifyColumnDoesNotExist(k);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComment(k), function () {
    verifyCommentExists(k);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteComment(k), function () {
    verifyCommentUpdated(k);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddComment(k), function () {
    verifyCommentDoesNotExist(k);
  });
});

bthread("Commit create verification", function () {
  const e = waitForAnyCommitAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCommit(k), function () {
    verifyCommitExists(k);
  });
});

bthread("Commit update verification", function () {
  const e = waitForAnyCommitUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCommit(k), function () {
    verifyCommitUpdated(k);
  });
});

bthread("Commit delete verification", function () {
  const e = waitForAnyCommitDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCommit(k), function () {
    verifyCommitDoesNotExist(k);
  });
});

bthread("Commitactivity create verification", function () {
  const e = waitForAnyCommitactivityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCommitactivity(k), function () {
    verifyCommitactivityExists(k);
  });
});

bthread("Commitactivity update verification", function () {
  const e = waitForAnyCommitactivityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCommitactivity(k), function () {
    verifyCommitactivityUpdated(k);
  });
});

bthread("Commitactivity delete verification", function () {
  const e = waitForAnyCommitactivityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCommitactivity(k), function () {
    verifyCommitactivityDoesNotExist(k);
  });
});

bthread("Community create verification", function () {
  const e = waitForAnyCommunityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCommunity(k), function () {
    verifyCommunityExists(k);
  });
});

bthread("Community update verification", function () {
  const e = waitForAnyCommunityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCommunity(k), function () {
    verifyCommunityUpdated(k);
  });
});

bthread("Community delete verification", function () {
  const e = waitForAnyCommunityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCommunity(k), function () {
    verifyCommunityDoesNotExist(k);
  });
});

bthread("Compare create verification", function () {
  const e = waitForAnyCompareAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCompare(k), function () {
    verifyCompareExists(k);
  });
});

bthread("Compare update verification", function () {
  const e = waitForAnyCompareUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCompare(k), function () {
    verifyCompareUpdated(k);
  });
});

bthread("Compare delete verification", function () {
  const e = waitForAnyCompareDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCompare(k), function () {
    verifyCompareDoesNotExist(k);
  });
});

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfig(k), function () {
    verifyConfigExists(k);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfig(k), function () {
    verifyConfigUpdated(k);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConfig(k), function () {
    verifyConfigDoesNotExist(k);
  });
});

bthread("Configuration create verification", function () {
  const e = waitForAnyConfigurationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfiguration(k), function () {
    verifyConfigurationExists(k);
  });
});

bthread("Configuration update verification", function () {
  const e = waitForAnyConfigurationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConfiguration(k), function () {
    verifyConfigurationUpdated(k);
  });
});

bthread("Configuration delete verification", function () {
  const e = waitForAnyConfigurationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConfiguration(k), function () {
    verifyConfigurationDoesNotExist(k);
  });
});

bthread("Conflict create verification", function () {
  const e = waitForAnyConflictAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConflict(k), function () {
    verifyConflictExists(k);
  });
});

bthread("Conflict update verification", function () {
  const e = waitForAnyConflictUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConflict(k), function () {
    verifyConflictUpdated(k);
  });
});

bthread("Conflict delete verification", function () {
  const e = waitForAnyConflictDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConflict(k), function () {
    verifyConflictDoesNotExist(k);
  });
});

bthread("Content create verification", function () {
  const e = waitForAnyContentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContent(k), function () {
    verifyContentExists(k);
  });
});

bthread("Content update verification", function () {
  const e = waitForAnyContentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContent(k), function () {
    verifyContentUpdated(k);
  });
});

bthread("Content delete verification", function () {
  const e = waitForAnyContentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddContent(k), function () {
    verifyContentDoesNotExist(k);
  });
});

bthread("Context create verification", function () {
  const e = waitForAnyContextAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContext(k), function () {
    verifyContextExists(k);
  });
});

bthread("Context update verification", function () {
  const e = waitForAnyContextUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContext(k), function () {
    verifyContextUpdated(k);
  });
});

bthread("Context delete verification", function () {
  const e = waitForAnyContextDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddContext(k), function () {
    verifyContextDoesNotExist(k);
  });
});

bthread("Contributor create verification", function () {
  const e = waitForAnyContributorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContributor(k), function () {
    verifyContributorExists(k);
  });
});

bthread("Contributor update verification", function () {
  const e = waitForAnyContributorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteContributor(k), function () {
    verifyContributorUpdated(k);
  });
});

bthread("Contributor delete verification", function () {
  const e = waitForAnyContributorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddContributor(k), function () {
    verifyContributorDoesNotExist(k);
  });
});

bthread("Conversion create verification", function () {
  const e = waitForAnyConversionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConversion(k), function () {
    verifyConversionExists(k);
  });
});

bthread("Conversion update verification", function () {
  const e = waitForAnyConversionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteConversion(k), function () {
    verifyConversionUpdated(k);
  });
});

bthread("Conversion delete verification", function () {
  const e = waitForAnyConversionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddConversion(k), function () {
    verifyConversionDoesNotExist(k);
  });
});

bthread("Copilot create verification", function () {
  const e = waitForAnyCopilotAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCopilot(k), function () {
    verifyCopilotExists(k);
  });
});

bthread("Copilot update verification", function () {
  const e = waitForAnyCopilotUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCopilot(k), function () {
    verifyCopilotUpdated(k);
  });
});

bthread("Copilot delete verification", function () {
  const e = waitForAnyCopilotDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCopilot(k), function () {
    verifyCopilotDoesNotExist(k);
  });
});

bthread("Credential create verification", function () {
  const e = waitForAnyCredentialAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredential(k), function () {
    verifyCredentialExists(k);
  });
});

bthread("Credential update verification", function () {
  const e = waitForAnyCredentialUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCredential(k), function () {
    verifyCredentialUpdated(k);
  });
});

bthread("Credential delete verification", function () {
  const e = waitForAnyCredentialDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCredential(k), function () {
    verifyCredentialDoesNotExist(k);
  });
});

bthread("Customization create verification", function () {
  const e = waitForAnyCustomizationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomization(k), function () {
    verifyCustomizationExists(k);
  });
});

bthread("Customization update verification", function () {
  const e = waitForAnyCustomizationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCustomization(k), function () {
    verifyCustomizationUpdated(k);
  });
});

bthread("Customization delete verification", function () {
  const e = waitForAnyCustomizationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCustomization(k), function () {
    verifyCustomizationDoesNotExist(k);
  });
});

bthread("Cve create verification", function () {
  const e = waitForAnyCveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCve(k), function () {
    verifyCveExists(k);
  });
});

bthread("Cve update verification", function () {
  const e = waitForAnyCveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCve(k), function () {
    verifyCveUpdated(k);
  });
});

bthread("Cve delete verification", function () {
  const e = waitForAnyCveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCve(k), function () {
    verifyCveDoesNotExist(k);
  });
});

bthread("Databas create verification", function () {
  const e = waitForAnyDatabasAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDatabas(k), function () {
    verifyDatabasExists(k);
  });
});

bthread("Databas update verification", function () {
  const e = waitForAnyDatabasUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDatabas(k), function () {
    verifyDatabasUpdated(k);
  });
});

bthread("Databas delete verification", function () {
  const e = waitForAnyDatabasDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDatabas(k), function () {
    verifyDatabasDoesNotExist(k);
  });
});

bthread("Default create verification", function () {
  const e = waitForAnyDefaultAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefault(k), function () {
    verifyDefaultExists(k);
  });
});

bthread("Default update verification", function () {
  const e = waitForAnyDefaultUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefault(k), function () {
    verifyDefaultUpdated(k);
  });
});

bthread("Default delete verification", function () {
  const e = waitForAnyDefaultDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefault(k), function () {
    verifyDefaultDoesNotExist(k);
  });
});

bthread("Defaultlevel create verification", function () {
  const e = waitForAnyDefaultlevelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultlevel(k), function () {
    verifyDefaultlevelExists(k);
  });
});

bthread("Defaultlevel update verification", function () {
  const e = waitForAnyDefaultlevelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultlevel(k), function () {
    verifyDefaultlevelUpdated(k);
  });
});

bthread("Defaultlevel delete verification", function () {
  const e = waitForAnyDefaultlevelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultlevel(k), function () {
    verifyDefaultlevelDoesNotExist(k);
  });
});

bthread("Defaultsetup create verification", function () {
  const e = waitForAnyDefaultsetupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultsetup(k), function () {
    verifyDefaultsetupExists(k);
  });
});

bthread("Defaultsetup update verification", function () {
  const e = waitForAnyDefaultsetupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDefaultsetup(k), function () {
    verifyDefaultsetupUpdated(k);
  });
});

bthread("Defaultsetup delete verification", function () {
  const e = waitForAnyDefaultsetupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDefaultsetup(k), function () {
    verifyDefaultsetupDoesNotExist(k);
  });
});

bthread("Deleterequest create verification", function () {
  const e = waitForAnyDeleterequestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeleterequest(k), function () {
    verifyDeleterequestExists(k);
  });
});

bthread("Deleterequest update verification", function () {
  const e = waitForAnyDeleterequestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeleterequest(k), function () {
    verifyDeleterequestUpdated(k);
  });
});

bthread("Deleterequest delete verification", function () {
  const e = waitForAnyDeleterequestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeleterequest(k), function () {
    verifyDeleterequestDoesNotExist(k);
  });
});

bthread("Delivery create verification", function () {
  const e = waitForAnyDeliveryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDelivery(k), function () {
    verifyDeliveryExists(k);
  });
});

bthread("Delivery update verification", function () {
  const e = waitForAnyDeliveryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDelivery(k), function () {
    verifyDeliveryUpdated(k);
  });
});

bthread("Delivery delete verification", function () {
  const e = waitForAnyDeliveryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDelivery(k), function () {
    verifyDeliveryDoesNotExist(k);
  });
});

bthread("Dependabot create verification", function () {
  const e = waitForAnyDependabotAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependabot(k), function () {
    verifyDependabotExists(k);
  });
});

bthread("Dependabot update verification", function () {
  const e = waitForAnyDependabotUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependabot(k), function () {
    verifyDependabotUpdated(k);
  });
});

bthread("Dependabot delete verification", function () {
  const e = waitForAnyDependabotDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDependabot(k), function () {
    verifyDependabotDoesNotExist(k);
  });
});

bthread("Dependency create verification", function () {
  const e = waitForAnyDependencyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependency(k), function () {
    verifyDependencyExists(k);
  });
});

bthread("Dependency update verification", function () {
  const e = waitForAnyDependencyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependency(k), function () {
    verifyDependencyUpdated(k);
  });
});

bthread("Dependency delete verification", function () {
  const e = waitForAnyDependencyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDependency(k), function () {
    verifyDependencyDoesNotExist(k);
  });
});

bthread("Dependencygraph create verification", function () {
  const e = waitForAnyDependencygraphAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependencygraph(k), function () {
    verifyDependencygraphExists(k);
  });
});

bthread("Dependencygraph update verification", function () {
  const e = waitForAnyDependencygraphUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDependencygraph(k), function () {
    verifyDependencygraphUpdated(k);
  });
});

bthread("Dependencygraph delete verification", function () {
  const e = waitForAnyDependencygraphDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDependencygraph(k), function () {
    verifyDependencygraphDoesNotExist(k);
  });
});

bthread("Deployment create verification", function () {
  const e = waitForAnyDeploymentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeployment(k), function () {
    verifyDeploymentExists(k);
  });
});

bthread("Deployment update verification", function () {
  const e = waitForAnyDeploymentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeployment(k), function () {
    verifyDeploymentUpdated(k);
  });
});

bthread("Deployment delete verification", function () {
  const e = waitForAnyDeploymentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeployment(k), function () {
    verifyDeploymentDoesNotExist(k);
  });
});

bthread("Deploymentbranchpolicy create verification", function () {
  const e = waitForAnyDeploymentbranchpolicyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeploymentbranchpolicy(k), function () {
    verifyDeploymentbranchpolicyExists(k);
  });
});

bthread("Deploymentbranchpolicy update verification", function () {
  const e = waitForAnyDeploymentbranchpolicyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeploymentbranchpolicy(k), function () {
    verifyDeploymentbranchpolicyUpdated(k);
  });
});

bthread("Deploymentbranchpolicy delete verification", function () {
  const e = waitForAnyDeploymentbranchpolicyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeploymentbranchpolicy(k), function () {
    verifyDeploymentbranchpolicyDoesNotExist(k);
  });
});

bthread("Deploymentprotectionrule create verification", function () {
  const e = waitForAnyDeploymentprotectionruleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeploymentprotectionrule(k), function () {
    verifyDeploymentprotectionruleExists(k);
  });
});

bthread("Deploymentprotectionrule update verification", function () {
  const e = waitForAnyDeploymentprotectionruleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeploymentprotectionrule(k), function () {
    verifyDeploymentprotectionruleUpdated(k);
  });
});

bthread("Deploymentprotectionrule delete verification", function () {
  const e = waitForAnyDeploymentprotectionruleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeploymentprotectionrule(k), function () {
    verifyDeploymentprotectionruleDoesNotExist(k);
  });
});

bthread("Detach create verification", function () {
  const e = waitForAnyDetachAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDetach(k), function () {
    verifyDetachExists(k);
  });
});

bthread("Detach update verification", function () {
  const e = waitForAnyDetachUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDetach(k), function () {
    verifyDetachUpdated(k);
  });
});

bthread("Detach delete verification", function () {
  const e = waitForAnyDetachDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDetach(k), function () {
    verifyDetachDoesNotExist(k);
  });
});

bthread("Devcontainer create verification", function () {
  const e = waitForAnyDevcontainerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDevcontainer(k), function () {
    verifyDevcontainerExists(k);
  });
});

bthread("Devcontainer update verification", function () {
  const e = waitForAnyDevcontainerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDevcontainer(k), function () {
    verifyDevcontainerUpdated(k);
  });
});

bthread("Devcontainer delete verification", function () {
  const e = waitForAnyDevcontainerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDevcontainer(k), function () {
    verifyDevcontainerDoesNotExist(k);
  });
});

bthread("Digest create verification", function () {
  const e = waitForAnyDigestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDigest(k), function () {
    verifyDigestExists(k);
  });
});

bthread("Digest update verification", function () {
  const e = waitForAnyDigestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDigest(k), function () {
    verifyDigestUpdated(k);
  });
});

bthread("Digest delete verification", function () {
  const e = waitForAnyDigestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDigest(k), function () {
    verifyDigestDoesNotExist(k);
  });
});

bthread("Disable create verification", function () {
  const e = waitForAnyDisableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisable(k), function () {
    verifyDisableExists(k);
  });
});

bthread("Disable update verification", function () {
  const e = waitForAnyDisableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDisable(k), function () {
    verifyDisableUpdated(k);
  });
});

bthread("Disable delete verification", function () {
  const e = waitForAnyDisableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDisable(k), function () {
    verifyDisableDoesNotExist(k);
  });
});

bthread("Discussion create verification", function () {
  const e = waitForAnyDiscussionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDiscussion(k), function () {
    verifyDiscussionExists(k);
  });
});

bthread("Discussion update verification", function () {
  const e = waitForAnyDiscussionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDiscussion(k), function () {
    verifyDiscussionUpdated(k);
  });
});

bthread("Discussion delete verification", function () {
  const e = waitForAnyDiscussionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDiscussion(k), function () {
    verifyDiscussionDoesNotExist(k);
  });
});

bthread("Dismissal create verification", function () {
  const e = waitForAnyDismissalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDismissal(k), function () {
    verifyDismissalExists(k);
  });
});

bthread("Dismissal update verification", function () {
  const e = waitForAnyDismissalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDismissal(k), function () {
    verifyDismissalUpdated(k);
  });
});

bthread("Dismissal delete verification", function () {
  const e = waitForAnyDismissalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDismissal(k), function () {
    verifyDismissalDoesNotExist(k);
  });
});

bthread("Dispatche create verification", function () {
  const e = waitForAnyDispatcheAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDispatche(k), function () {
    verifyDispatcheExists(k);
  });
});

bthread("Dispatche update verification", function () {
  const e = waitForAnyDispatcheUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDispatche(k), function () {
    verifyDispatcheUpdated(k);
  });
});

bthread("Dispatche delete verification", function () {
  const e = waitForAnyDispatcheDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDispatche(k), function () {
    verifyDispatcheDoesNotExist(k);
  });
});

bthread("Docker create verification", function () {
  const e = waitForAnyDockerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDocker(k), function () {
    verifyDockerExists(k);
  });
});

bthread("Docker update verification", function () {
  const e = waitForAnyDockerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDocker(k), function () {
    verifyDockerUpdated(k);
  });
});

bthread("Docker delete verification", function () {
  const e = waitForAnyDockerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDocker(k), function () {
    verifyDockerDoesNotExist(k);
  });
});

bthread("Download create verification", function () {
  const e = waitForAnyDownloadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDownload(k), function () {
    verifyDownloadExists(k);
  });
});

bthread("Download update verification", function () {
  const e = waitForAnyDownloadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDownload(k), function () {
    verifyDownloadUpdated(k);
  });
});

bthread("Download delete verification", function () {
  const e = waitForAnyDownloadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDownload(k), function () {
    verifyDownloadDoesNotExist(k);
  });
});

bthread("Email create verification", function () {
  const e = waitForAnyEmailAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmail(k), function () {
    verifyEmailExists(k);
  });
});

bthread("Email update verification", function () {
  const e = waitForAnyEmailUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmail(k), function () {
    verifyEmailUpdated(k);
  });
});

bthread("Email delete verification", function () {
  const e = waitForAnyEmailDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmail(k), function () {
    verifyEmailDoesNotExist(k);
  });
});

bthread("Emoji create verification", function () {
  const e = waitForAnyEmojiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmoji(k), function () {
    verifyEmojiExists(k);
  });
});

bthread("Emoji update verification", function () {
  const e = waitForAnyEmojiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEmoji(k), function () {
    verifyEmojiUpdated(k);
  });
});

bthread("Emoji delete verification", function () {
  const e = waitForAnyEmojiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEmoji(k), function () {
    verifyEmojiDoesNotExist(k);
  });
});

bthread("Enable create verification", function () {
  const e = waitForAnyEnableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnable(k), function () {
    verifyEnableExists(k);
  });
});

bthread("Enable update verification", function () {
  const e = waitForAnyEnableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnable(k), function () {
    verifyEnableUpdated(k);
  });
});

bthread("Enable delete verification", function () {
  const e = waitForAnyEnableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEnable(k), function () {
    verifyEnableDoesNotExist(k);
  });
});

bthread("Enforceadmin create verification", function () {
  const e = waitForAnyEnforceadminAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnforceadmin(k), function () {
    verifyEnforceadminExists(k);
  });
});

bthread("Enforceadmin update verification", function () {
  const e = waitForAnyEnforceadminUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnforceadmin(k), function () {
    verifyEnforceadminUpdated(k);
  });
});

bthread("Enforceadmin delete verification", function () {
  const e = waitForAnyEnforceadminDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEnforceadmin(k), function () {
    verifyEnforceadminDoesNotExist(k);
  });
});

bthread("Enterpris create verification", function () {
  const e = waitForAnyEnterprisAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnterpris(k), function () {
    verifyEnterprisExists(k);
  });
});

bthread("Enterpris update verification", function () {
  const e = waitForAnyEnterprisUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnterpris(k), function () {
    verifyEnterprisUpdated(k);
  });
});

bthread("Enterpris delete verification", function () {
  const e = waitForAnyEnterprisDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEnterpris(k), function () {
    verifyEnterprisDoesNotExist(k);
  });
});

bthread("Environment create verification", function () {
  const e = waitForAnyEnvironmentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnvironment(k), function () {
    verifyEnvironmentExists(k);
  });
});

bthread("Environment update verification", function () {
  const e = waitForAnyEnvironmentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEnvironment(k), function () {
    verifyEnvironmentUpdated(k);
  });
});

bthread("Environment delete verification", function () {
  const e = waitForAnyEnvironmentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEnvironment(k), function () {
    verifyEnvironmentDoesNotExist(k);
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

bthread("Event create verification", function () {
  const e = waitForAnyEventAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEvent(k), function () {
    verifyEventExists(k);
  });
});

bthread("Event update verification", function () {
  const e = waitForAnyEventUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEvent(k), function () {
    verifyEventUpdated(k);
  });
});

bthread("Event delete verification", function () {
  const e = waitForAnyEventDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEvent(k), function () {
    verifyEventDoesNotExist(k);
  });
});

bthread("Export create verification", function () {
  const e = waitForAnyExportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExport(k), function () {
    verifyExportExists(k);
  });
});

bthread("Export update verification", function () {
  const e = waitForAnyExportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteExport(k), function () {
    verifyExportUpdated(k);
  });
});

bthread("Export delete verification", function () {
  const e = waitForAnyExportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddExport(k), function () {
    verifyExportDoesNotExist(k);
  });
});

bthread("Failedinvitation create verification", function () {
  const e = waitForAnyFailedinvitationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFailedinvitation(k), function () {
    verifyFailedinvitationExists(k);
  });
});

bthread("Failedinvitation update verification", function () {
  const e = waitForAnyFailedinvitationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFailedinvitation(k), function () {
    verifyFailedinvitationUpdated(k);
  });
});

bthread("Failedinvitation delete verification", function () {
  const e = waitForAnyFailedinvitationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFailedinvitation(k), function () {
    verifyFailedinvitationDoesNotExist(k);
  });
});

bthread("Feed create verification", function () {
  const e = waitForAnyFeedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFeed(k), function () {
    verifyFeedExists(k);
  });
});

bthread("Feed update verification", function () {
  const e = waitForAnyFeedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFeed(k), function () {
    verifyFeedUpdated(k);
  });
});

bthread("Feed delete verification", function () {
  const e = waitForAnyFeedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFeed(k), function () {
    verifyFeedDoesNotExist(k);
  });
});

bthread("Field create verification", function () {
  const e = waitForAnyFieldAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteField(k), function () {
    verifyFieldExists(k);
  });
});

bthread("Field update verification", function () {
  const e = waitForAnyFieldUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteField(k), function () {
    verifyFieldUpdated(k);
  });
});

bthread("Field delete verification", function () {
  const e = waitForAnyFieldDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddField(k), function () {
    verifyFieldDoesNotExist(k);
  });
});

bthread("File create verification", function () {
  const e = waitForAnyFileAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFile(k), function () {
    verifyFileExists(k);
  });
});

bthread("File update verification", function () {
  const e = waitForAnyFileUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFile(k), function () {
    verifyFileUpdated(k);
  });
});

bthread("File delete verification", function () {
  const e = waitForAnyFileDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFile(k), function () {
    verifyFileDoesNotExist(k);
  });
});

bthread("Follower create verification", function () {
  const e = waitForAnyFollowerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFollower(k), function () {
    verifyFollowerExists(k);
  });
});

bthread("Follower update verification", function () {
  const e = waitForAnyFollowerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFollower(k), function () {
    verifyFollowerUpdated(k);
  });
});

bthread("Follower delete verification", function () {
  const e = waitForAnyFollowerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFollower(k), function () {
    verifyFollowerDoesNotExist(k);
  });
});

bthread("Following create verification", function () {
  const e = waitForAnyFollowingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFollowing(k), function () {
    verifyFollowingExists(k);
  });
});

bthread("Following update verification", function () {
  const e = waitForAnyFollowingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFollowing(k), function () {
    verifyFollowingUpdated(k);
  });
});

bthread("Following delete verification", function () {
  const e = waitForAnyFollowingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFollowing(k), function () {
    verifyFollowingDoesNotExist(k);
  });
});

bthread("Forcecancel create verification", function () {
  const e = waitForAnyForcecancelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteForcecancel(k), function () {
    verifyForcecancelExists(k);
  });
});

bthread("Forcecancel update verification", function () {
  const e = waitForAnyForcecancelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteForcecancel(k), function () {
    verifyForcecancelUpdated(k);
  });
});

bthread("Forcecancel delete verification", function () {
  const e = waitForAnyForcecancelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddForcecancel(k), function () {
    verifyForcecancelDoesNotExist(k);
  });
});

bthread("Fork create verification", function () {
  const e = waitForAnyForkAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFork(k), function () {
    verifyForkExists(k);
  });
});

bthread("Fork update verification", function () {
  const e = waitForAnyForkUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteFork(k), function () {
    verifyForkUpdated(k);
  });
});

bthread("Fork delete verification", function () {
  const e = waitForAnyForkDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddFork(k), function () {
    verifyForkDoesNotExist(k);
  });
});

bthread("Forkprcontributorapproval create verification", function () {
  const e = waitForAnyForkprcontributorapprovalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteForkprcontributorapproval(k), function () {
    verifyForkprcontributorapprovalExists(k);
  });
});

bthread("Forkprcontributorapproval update verification", function () {
  const e = waitForAnyForkprcontributorapprovalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteForkprcontributorapproval(k), function () {
    verifyForkprcontributorapprovalUpdated(k);
  });
});

bthread("Forkprcontributorapproval delete verification", function () {
  const e = waitForAnyForkprcontributorapprovalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddForkprcontributorapproval(k), function () {
    verifyForkprcontributorapprovalDoesNotExist(k);
  });
});

bthread("Forkprworkflowsprivaterepo create verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteForkprworkflowsprivaterepo(k), function () {
    verifyForkprworkflowsprivaterepoExists(k);
  });
});

bthread("Forkprworkflowsprivaterepo update verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteForkprworkflowsprivaterepo(k), function () {
    verifyForkprworkflowsprivaterepoUpdated(k);
  });
});

bthread("Forkprworkflowsprivaterepo delete verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddForkprworkflowsprivaterepo(k), function () {
    verifyForkprworkflowsprivaterepoDoesNotExist(k);
  });
});

bthread("Generate create verification", function () {
  const e = waitForAnyGenerateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerate(k), function () {
    verifyGenerateExists(k);
  });
});

bthread("Generate update verification", function () {
  const e = waitForAnyGenerateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGenerate(k), function () {
    verifyGenerateUpdated(k);
  });
});

bthread("Generate delete verification", function () {
  const e = waitForAnyGenerateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGenerate(k), function () {
    verifyGenerateDoesNotExist(k);
  });
});

bthread("Generatejitconfig create verification", function () {
  const e = waitForAnyGeneratejitconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGeneratejitconfig(k), function () {
    verifyGeneratejitconfigExists(k);
  });
});

bthread("Generatejitconfig update verification", function () {
  const e = waitForAnyGeneratejitconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGeneratejitconfig(k), function () {
    verifyGeneratejitconfigUpdated(k);
  });
});

bthread("Generatejitconfig delete verification", function () {
  const e = waitForAnyGeneratejitconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGeneratejitconfig(k), function () {
    verifyGeneratejitconfigDoesNotExist(k);
  });
});

bthread("Generatenote create verification", function () {
  const e = waitForAnyGeneratenoteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGeneratenote(k), function () {
    verifyGeneratenoteExists(k);
  });
});

bthread("Generatenote update verification", function () {
  const e = waitForAnyGeneratenoteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGeneratenote(k), function () {
    verifyGeneratenoteUpdated(k);
  });
});

bthread("Generatenote delete verification", function () {
  const e = waitForAnyGeneratenoteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGeneratenote(k), function () {
    verifyGeneratenoteDoesNotExist(k);
  });
});

bthread("Gist create verification", function () {
  const e = waitForAnyGistAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGist(k), function () {
    verifyGistExists(k);
  });
});

bthread("Gist update verification", function () {
  const e = waitForAnyGistUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGist(k), function () {
    verifyGistUpdated(k);
  });
});

bthread("Gist delete verification", function () {
  const e = waitForAnyGistDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGist(k), function () {
    verifyGistDoesNotExist(k);
  });
});

bthread("Git create verification", function () {
  const e = waitForAnyGitAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGit(k), function () {
    verifyGitExists(k);
  });
});

bthread("Git update verification", function () {
  const e = waitForAnyGitUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGit(k), function () {
    verifyGitUpdated(k);
  });
});

bthread("Git delete verification", function () {
  const e = waitForAnyGitDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGit(k), function () {
    verifyGitDoesNotExist(k);
  });
});

bthread("Githubowned create verification", function () {
  const e = waitForAnyGithubownedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGithubowned(k), function () {
    verifyGithubownedExists(k);
  });
});

bthread("Githubowned update verification", function () {
  const e = waitForAnyGithubownedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGithubowned(k), function () {
    verifyGithubownedUpdated(k);
  });
});

bthread("Githubowned delete verification", function () {
  const e = waitForAnyGithubownedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGithubowned(k), function () {
    verifyGithubownedDoesNotExist(k);
  });
});

bthread("Gitignore create verification", function () {
  const e = waitForAnyGitignoreAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGitignore(k), function () {
    verifyGitignoreExists(k);
  });
});

bthread("Gitignore update verification", function () {
  const e = waitForAnyGitignoreUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGitignore(k), function () {
    verifyGitignoreUpdated(k);
  });
});

bthread("Gitignore delete verification", function () {
  const e = waitForAnyGitignoreDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGitignore(k), function () {
    verifyGitignoreDoesNotExist(k);
  });
});

bthread("Gpgkey create verification", function () {
  const e = waitForAnyGpgkeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGpgkey(k), function () {
    verifyGpgkeyExists(k);
  });
});

bthread("Gpgkey update verification", function () {
  const e = waitForAnyGpgkeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGpgkey(k), function () {
    verifyGpgkeyUpdated(k);
  });
});

bthread("Gpgkey delete verification", function () {
  const e = waitForAnyGpgkeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGpgkey(k), function () {
    verifyGpgkeyDoesNotExist(k);
  });
});

bthread("Grade create verification", function () {
  const e = waitForAnyGradeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGrade(k), function () {
    verifyGradeExists(k);
  });
});

bthread("Grade update verification", function () {
  const e = waitForAnyGradeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGrade(k), function () {
    verifyGradeUpdated(k);
  });
});

bthread("Grade delete verification", function () {
  const e = waitForAnyGradeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGrade(k), function () {
    verifyGradeDoesNotExist(k);
  });
});

bthread("Grant create verification", function () {
  const e = waitForAnyGrantAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGrant(k), function () {
    verifyGrantExists(k);
  });
});

bthread("Grant update verification", function () {
  const e = waitForAnyGrantUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGrant(k), function () {
    verifyGrantUpdated(k);
  });
});

bthread("Grant delete verification", function () {
  const e = waitForAnyGrantDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGrant(k), function () {
    verifyGrantDoesNotExist(k);
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

bthread("History create verification", function () {
  const e = waitForAnyHistoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHistory(k), function () {
    verifyHistoryExists(k);
  });
});

bthread("History update verification", function () {
  const e = waitForAnyHistoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHistory(k), function () {
    verifyHistoryUpdated(k);
  });
});

bthread("History delete verification", function () {
  const e = waitForAnyHistoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHistory(k), function () {
    verifyHistoryDoesNotExist(k);
  });
});

bthread("Hook create verification", function () {
  const e = waitForAnyHookAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHook(k), function () {
    verifyHookExists(k);
  });
});

bthread("Hook update verification", function () {
  const e = waitForAnyHookUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHook(k), function () {
    verifyHookUpdated(k);
  });
});

bthread("Hook delete verification", function () {
  const e = waitForAnyHookDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHook(k), function () {
    verifyHookDoesNotExist(k);
  });
});

bthread("Hostedrunner create verification", function () {
  const e = waitForAnyHostedrunnerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHostedrunner(k), function () {
    verifyHostedrunnerExists(k);
  });
});

bthread("Hostedrunner update verification", function () {
  const e = waitForAnyHostedrunnerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHostedrunner(k), function () {
    verifyHostedrunnerUpdated(k);
  });
});

bthread("Hostedrunner delete verification", function () {
  const e = waitForAnyHostedrunnerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHostedrunner(k), function () {
    verifyHostedrunnerDoesNotExist(k);
  });
});

bthread("Hovercard create verification", function () {
  const e = waitForAnyHovercardAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHovercard(k), function () {
    verifyHovercardExists(k);
  });
});

bthread("Hovercard update verification", function () {
  const e = waitForAnyHovercardUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHovercard(k), function () {
    verifyHovercardUpdated(k);
  });
});

bthread("Hovercard delete verification", function () {
  const e = waitForAnyHovercardDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHovercard(k), function () {
    verifyHovercardDoesNotExist(k);
  });
});

bthread("Image create verification", function () {
  const e = waitForAnyImageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImage(k), function () {
    verifyImageExists(k);
  });
});

bthread("Image update verification", function () {
  const e = waitForAnyImageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImage(k), function () {
    verifyImageUpdated(k);
  });
});

bthread("Image delete verification", function () {
  const e = waitForAnyImageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddImage(k), function () {
    verifyImageDoesNotExist(k);
  });
});

bthread("Immutablereleas create verification", function () {
  const e = waitForAnyImmutablereleasAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImmutablereleas(k), function () {
    verifyImmutablereleasExists(k);
  });
});

bthread("Immutablereleas update verification", function () {
  const e = waitForAnyImmutablereleasUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImmutablereleas(k), function () {
    verifyImmutablereleasUpdated(k);
  });
});

bthread("Immutablereleas delete verification", function () {
  const e = waitForAnyImmutablereleasDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddImmutablereleas(k), function () {
    verifyImmutablereleasDoesNotExist(k);
  });
});

bthread("Import create verification", function () {
  const e = waitForAnyImportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImport(k), function () {
    verifyImportExists(k);
  });
});

bthread("Import update verification", function () {
  const e = waitForAnyImportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteImport(k), function () {
    verifyImportUpdated(k);
  });
});

bthread("Import delete verification", function () {
  const e = waitForAnyImportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddImport(k), function () {
    verifyImportDoesNotExist(k);
  });
});

bthread("Insight create verification", function () {
  const e = waitForAnyInsightAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInsight(k), function () {
    verifyInsightExists(k);
  });
});

bthread("Insight update verification", function () {
  const e = waitForAnyInsightUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInsight(k), function () {
    verifyInsightUpdated(k);
  });
});

bthread("Insight delete verification", function () {
  const e = waitForAnyInsightDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInsight(k), function () {
    verifyInsightDoesNotExist(k);
  });
});

bthread("Installation create verification", function () {
  const e = waitForAnyInstallationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstallation(k), function () {
    verifyInstallationExists(k);
  });
});

bthread("Installation update verification", function () {
  const e = waitForAnyInstallationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstallation(k), function () {
    verifyInstallationUpdated(k);
  });
});

bthread("Installation delete verification", function () {
  const e = waitForAnyInstallationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInstallation(k), function () {
    verifyInstallationDoesNotExist(k);
  });
});

bthread("Installationrequest create verification", function () {
  const e = waitForAnyInstallationrequestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstallationrequest(k), function () {
    verifyInstallationrequestExists(k);
  });
});

bthread("Installationrequest update verification", function () {
  const e = waitForAnyInstallationrequestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstallationrequest(k), function () {
    verifyInstallationrequestUpdated(k);
  });
});

bthread("Installationrequest delete verification", function () {
  const e = waitForAnyInstallationrequestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInstallationrequest(k), function () {
    verifyInstallationrequestDoesNotExist(k);
  });
});

bthread("Instance create verification", function () {
  const e = waitForAnyInstanceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstance(k), function () {
    verifyInstanceExists(k);
  });
});

bthread("Instance update verification", function () {
  const e = waitForAnyInstanceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInstance(k), function () {
    verifyInstanceUpdated(k);
  });
});

bthread("Instance delete verification", function () {
  const e = waitForAnyInstanceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInstance(k), function () {
    verifyInstanceDoesNotExist(k);
  });
});

bthread("Interactionlimit create verification", function () {
  const e = waitForAnyInteractionlimitAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInteractionlimit(k), function () {
    verifyInteractionlimitExists(k);
  });
});

bthread("Interactionlimit update verification", function () {
  const e = waitForAnyInteractionlimitUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInteractionlimit(k), function () {
    verifyInteractionlimitUpdated(k);
  });
});

bthread("Interactionlimit delete verification", function () {
  const e = waitForAnyInteractionlimitDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInteractionlimit(k), function () {
    verifyInteractionlimitDoesNotExist(k);
  });
});

bthread("Invitation create verification", function () {
  const e = waitForAnyInvitationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvitation(k), function () {
    verifyInvitationExists(k);
  });
});

bthread("Invitation update verification", function () {
  const e = waitForAnyInvitationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInvitation(k), function () {
    verifyInvitationUpdated(k);
  });
});

bthread("Invitation delete verification", function () {
  const e = waitForAnyInvitationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInvitation(k), function () {
    verifyInvitationDoesNotExist(k);
  });
});

bthread("Issue create verification", function () {
  const e = waitForAnyIssueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssue(k), function () {
    verifyIssueExists(k);
  });
});

bthread("Issue update verification", function () {
  const e = waitForAnyIssueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssue(k), function () {
    verifyIssueUpdated(k);
  });
});

bthread("Issue delete verification", function () {
  const e = waitForAnyIssueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssue(k), function () {
    verifyIssueDoesNotExist(k);
  });
});

bthread("Issuetype create verification", function () {
  const e = waitForAnyIssuetypeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetype(k), function () {
    verifyIssuetypeExists(k);
  });
});

bthread("Issuetype update verification", function () {
  const e = waitForAnyIssuetypeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetype(k), function () {
    verifyIssuetypeUpdated(k);
  });
});

bthread("Issuetype delete verification", function () {
  const e = waitForAnyIssuetypeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuetype(k), function () {
    verifyIssuetypeDoesNotExist(k);
  });
});

bthread("Item create verification", function () {
  const e = waitForAnyItemAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteItem(k), function () {
    verifyItemExists(k);
  });
});

bthread("Item update verification", function () {
  const e = waitForAnyItemUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteItem(k), function () {
    verifyItemUpdated(k);
  });
});

bthread("Item delete verification", function () {
  const e = waitForAnyItemDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddItem(k), function () {
    verifyItemDoesNotExist(k);
  });
});

bthread("Job create verification", function () {
  const e = waitForAnyJobAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJob(k), function () {
    verifyJobExists(k);
  });
});

bthread("Job update verification", function () {
  const e = waitForAnyJobUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteJob(k), function () {
    verifyJobUpdated(k);
  });
});

bthread("Job delete verification", function () {
  const e = waitForAnyJobDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddJob(k), function () {
    verifyJobDoesNotExist(k);
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

bthread("Label create verification", function () {
  const e = waitForAnyLabelAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabel(k), function () {
    verifyLabelExists(k);
  });
});

bthread("Label update verification", function () {
  const e = waitForAnyLabelUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLabel(k), function () {
    verifyLabelUpdated(k);
  });
});

bthread("Label delete verification", function () {
  const e = waitForAnyLabelDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLabel(k), function () {
    verifyLabelDoesNotExist(k);
  });
});

bthread("Language create verification", function () {
  const e = waitForAnyLanguageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLanguage(k), function () {
    verifyLanguageExists(k);
  });
});

bthread("Language update verification", function () {
  const e = waitForAnyLanguageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLanguage(k), function () {
    verifyLanguageUpdated(k);
  });
});

bthread("Language delete verification", function () {
  const e = waitForAnyLanguageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLanguage(k), function () {
    verifyLanguageDoesNotExist(k);
  });
});

bthread("Largefile create verification", function () {
  const e = waitForAnyLargefileAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLargefile(k), function () {
    verifyLargefileExists(k);
  });
});

bthread("Largefile update verification", function () {
  const e = waitForAnyLargefileUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLargefile(k), function () {
    verifyLargefileUpdated(k);
  });
});

bthread("Largefile delete verification", function () {
  const e = waitForAnyLargefileDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLargefile(k), function () {
    verifyLargefileDoesNotExist(k);
  });
});

bthread("Latest create verification", function () {
  const e = waitForAnyLatestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLatest(k), function () {
    verifyLatestExists(k);
  });
});

bthread("Latest update verification", function () {
  const e = waitForAnyLatestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLatest(k), function () {
    verifyLatestUpdated(k);
  });
});

bthread("Latest delete verification", function () {
  const e = waitForAnyLatestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLatest(k), function () {
    verifyLatestDoesNotExist(k);
  });
});

bthread("Lf create verification", function () {
  const e = waitForAnyLfAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLf(k), function () {
    verifyLfExists(k);
  });
});

bthread("Lf update verification", function () {
  const e = waitForAnyLfUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLf(k), function () {
    verifyLfUpdated(k);
  });
});

bthread("Lf delete verification", function () {
  const e = waitForAnyLfDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLf(k), function () {
    verifyLfDoesNotExist(k);
  });
});

bthread("Licens create verification", function () {
  const e = waitForAnyLicensAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLicens(k), function () {
    verifyLicensExists(k);
  });
});

bthread("Licens update verification", function () {
  const e = waitForAnyLicensUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLicens(k), function () {
    verifyLicensUpdated(k);
  });
});

bthread("Licens delete verification", function () {
  const e = waitForAnyLicensDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLicens(k), function () {
    verifyLicensDoesNotExist(k);
  });
});

bthread("License create verification", function () {
  const e = waitForAnyLicenseAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLicense(k), function () {
    verifyLicenseExists(k);
  });
});

bthread("License update verification", function () {
  const e = waitForAnyLicenseUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLicense(k), function () {
    verifyLicenseUpdated(k);
  });
});

bthread("License delete verification", function () {
  const e = waitForAnyLicenseDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLicense(k), function () {
    verifyLicenseDoesNotExist(k);
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

bthread("Location create verification", function () {
  const e = waitForAnyLocationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLocation(k), function () {
    verifyLocationExists(k);
  });
});

bthread("Location update verification", function () {
  const e = waitForAnyLocationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLocation(k), function () {
    verifyLocationUpdated(k);
  });
});

bthread("Location delete verification", function () {
  const e = waitForAnyLocationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLocation(k), function () {
    verifyLocationDoesNotExist(k);
  });
});

bthread("Lock create verification", function () {
  const e = waitForAnyLockAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLock(k), function () {
    verifyLockExists(k);
  });
});

bthread("Lock update verification", function () {
  const e = waitForAnyLockUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLock(k), function () {
    verifyLockUpdated(k);
  });
});

bthread("Lock delete verification", function () {
  const e = waitForAnyLockDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLock(k), function () {
    verifyLockDoesNotExist(k);
  });
});

bthread("Log create verification", function () {
  const e = waitForAnyLogAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLog(k), function () {
    verifyLogExists(k);
  });
});

bthread("Log update verification", function () {
  const e = waitForAnyLogUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteLog(k), function () {
    verifyLogUpdated(k);
  });
});

bthread("Log delete verification", function () {
  const e = waitForAnyLogDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddLog(k), function () {
    verifyLogDoesNotExist(k);
  });
});

bthread("Machine create verification", function () {
  const e = waitForAnyMachineAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMachine(k), function () {
    verifyMachineExists(k);
  });
});

bthread("Machine update verification", function () {
  const e = waitForAnyMachineUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMachine(k), function () {
    verifyMachineUpdated(k);
  });
});

bthread("Machine delete verification", function () {
  const e = waitForAnyMachineDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMachine(k), function () {
    verifyMachineDoesNotExist(k);
  });
});

bthread("Machinesize create verification", function () {
  const e = waitForAnyMachinesizeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMachinesize(k), function () {
    verifyMachinesizeExists(k);
  });
});

bthread("Machinesize update verification", function () {
  const e = waitForAnyMachinesizeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMachinesize(k), function () {
    verifyMachinesizeUpdated(k);
  });
});

bthread("Machinesize delete verification", function () {
  const e = waitForAnyMachinesizeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMachinesize(k), function () {
    verifyMachinesizeDoesNotExist(k);
  });
});

bthread("Markdown create verification", function () {
  const e = waitForAnyMarkdownAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarkdown(k), function () {
    verifyMarkdownExists(k);
  });
});

bthread("Markdown update verification", function () {
  const e = waitForAnyMarkdownUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarkdown(k), function () {
    verifyMarkdownUpdated(k);
  });
});

bthread("Markdown delete verification", function () {
  const e = waitForAnyMarkdownDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMarkdown(k), function () {
    verifyMarkdownDoesNotExist(k);
  });
});

bthread("Marketplacelisting create verification", function () {
  const e = waitForAnyMarketplacelistingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarketplacelisting(k), function () {
    verifyMarketplacelistingExists(k);
  });
});

bthread("Marketplacelisting update verification", function () {
  const e = waitForAnyMarketplacelistingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarketplacelisting(k), function () {
    verifyMarketplacelistingUpdated(k);
  });
});

bthread("Marketplacelisting delete verification", function () {
  const e = waitForAnyMarketplacelistingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMarketplacelisting(k), function () {
    verifyMarketplacelistingDoesNotExist(k);
  });
});

bthread("Marketplacepurchas create verification", function () {
  const e = waitForAnyMarketplacepurchasAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarketplacepurchas(k), function () {
    verifyMarketplacepurchasExists(k);
  });
});

bthread("Marketplacepurchas update verification", function () {
  const e = waitForAnyMarketplacepurchasUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarketplacepurchas(k), function () {
    verifyMarketplacepurchasUpdated(k);
  });
});

bthread("Marketplacepurchas delete verification", function () {
  const e = waitForAnyMarketplacepurchasDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMarketplacepurchas(k), function () {
    verifyMarketplacepurchasDoesNotExist(k);
  });
});

bthread("Matchingref create verification", function () {
  const e = waitForAnyMatchingrefAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMatchingref(k), function () {
    verifyMatchingrefExists(k);
  });
});

bthread("Matchingref update verification", function () {
  const e = waitForAnyMatchingrefUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMatchingref(k), function () {
    verifyMatchingrefUpdated(k);
  });
});

bthread("Matchingref delete verification", function () {
  const e = waitForAnyMatchingrefDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMatchingref(k), function () {
    verifyMatchingrefDoesNotExist(k);
  });
});

bthread("Member create verification", function () {
  const e = waitForAnyMemberAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMember(k), function () {
    verifyMemberExists(k);
  });
});

bthread("Member update verification", function () {
  const e = waitForAnyMemberUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMember(k), function () {
    verifyMemberUpdated(k);
  });
});

bthread("Member delete verification", function () {
  const e = waitForAnyMemberDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMember(k), function () {
    verifyMemberDoesNotExist(k);
  });
});

bthread("Membership create verification", function () {
  const e = waitForAnyMembershipAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembership(k), function () {
    verifyMembershipExists(k);
  });
});

bthread("Membership update verification", function () {
  const e = waitForAnyMembershipUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMembership(k), function () {
    verifyMembershipUpdated(k);
  });
});

bthread("Membership delete verification", function () {
  const e = waitForAnyMembershipDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMembership(k), function () {
    verifyMembershipDoesNotExist(k);
  });
});

bthread("Merge create verification", function () {
  const e = waitForAnyMergeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMerge(k), function () {
    verifyMergeExists(k);
  });
});

bthread("Merge update verification", function () {
  const e = waitForAnyMergeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMerge(k), function () {
    verifyMergeUpdated(k);
  });
});

bthread("Merge delete verification", function () {
  const e = waitForAnyMergeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMerge(k), function () {
    verifyMergeDoesNotExist(k);
  });
});

bthread("Mergeupstream create verification", function () {
  const e = waitForAnyMergeupstreamAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMergeupstream(k), function () {
    verifyMergeupstreamExists(k);
  });
});

bthread("Mergeupstream update verification", function () {
  const e = waitForAnyMergeupstreamUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMergeupstream(k), function () {
    verifyMergeupstreamUpdated(k);
  });
});

bthread("Mergeupstream delete verification", function () {
  const e = waitForAnyMergeupstreamDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMergeupstream(k), function () {
    verifyMergeupstreamDoesNotExist(k);
  });
});

bthread("Meta create verification", function () {
  const e = waitForAnyMetaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMeta(k), function () {
    verifyMetaExists(k);
  });
});

bthread("Meta update verification", function () {
  const e = waitForAnyMetaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMeta(k), function () {
    verifyMetaUpdated(k);
  });
});

bthread("Meta delete verification", function () {
  const e = waitForAnyMetaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMeta(k), function () {
    verifyMetaDoesNotExist(k);
  });
});

bthread("Metadata create verification", function () {
  const e = waitForAnyMetadataAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMetadata(k), function () {
    verifyMetadataExists(k);
  });
});

bthread("Metadata update verification", function () {
  const e = waitForAnyMetadataUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMetadata(k), function () {
    verifyMetadataUpdated(k);
  });
});

bthread("Metadata delete verification", function () {
  const e = waitForAnyMetadataDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMetadata(k), function () {
    verifyMetadataDoesNotExist(k);
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

bthread("Migration create verification", function () {
  const e = waitForAnyMigrationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMigration(k), function () {
    verifyMigrationExists(k);
  });
});

bthread("Migration update verification", function () {
  const e = waitForAnyMigrationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMigration(k), function () {
    verifyMigrationUpdated(k);
  });
});

bthread("Migration delete verification", function () {
  const e = waitForAnyMigrationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMigration(k), function () {
    verifyMigrationDoesNotExist(k);
  });
});

bthread("Milestone create verification", function () {
  const e = waitForAnyMilestoneAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMilestone(k), function () {
    verifyMilestoneExists(k);
  });
});

bthread("Milestone update verification", function () {
  const e = waitForAnyMilestoneUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMilestone(k), function () {
    verifyMilestoneUpdated(k);
  });
});

bthread("Milestone delete verification", function () {
  const e = waitForAnyMilestoneDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMilestone(k), function () {
    verifyMilestoneDoesNotExist(k);
  });
});

bthread("Move create verification", function () {
  const e = waitForAnyMoveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMove(k), function () {
    verifyMoveExists(k);
  });
});

bthread("Move update verification", function () {
  const e = waitForAnyMoveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMove(k), function () {
    verifyMoveUpdated(k);
  });
});

bthread("Move delete verification", function () {
  const e = waitForAnyMoveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMove(k), function () {
    verifyMoveDoesNotExist(k);
  });
});

bthread("Network create verification", function () {
  const e = waitForAnyNetworkAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNetwork(k), function () {
    verifyNetworkExists(k);
  });
});

bthread("Network update verification", function () {
  const e = waitForAnyNetworkUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNetwork(k), function () {
    verifyNetworkUpdated(k);
  });
});

bthread("Network delete verification", function () {
  const e = waitForAnyNetworkDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNetwork(k), function () {
    verifyNetworkDoesNotExist(k);
  });
});

bthread("Networkconfiguration create verification", function () {
  const e = waitForAnyNetworkconfigurationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNetworkconfiguration(k), function () {
    verifyNetworkconfigurationExists(k);
  });
});

bthread("Networkconfiguration update verification", function () {
  const e = waitForAnyNetworkconfigurationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNetworkconfiguration(k), function () {
    verifyNetworkconfigurationUpdated(k);
  });
});

bthread("Networkconfiguration delete verification", function () {
  const e = waitForAnyNetworkconfigurationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNetworkconfiguration(k), function () {
    verifyNetworkconfigurationDoesNotExist(k);
  });
});

bthread("Networksetting create verification", function () {
  const e = waitForAnyNetworksettingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNetworksetting(k), function () {
    verifyNetworksettingExists(k);
  });
});

bthread("Networksetting update verification", function () {
  const e = waitForAnyNetworksettingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNetworksetting(k), function () {
    verifyNetworksettingUpdated(k);
  });
});

bthread("Networksetting delete verification", function () {
  const e = waitForAnyNetworksettingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNetworksetting(k), function () {
    verifyNetworksettingDoesNotExist(k);
  });
});

bthread("New create verification", function () {
  const e = waitForAnyNewAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNew(k), function () {
    verifyNewExists(k);
  });
});

bthread("New update verification", function () {
  const e = waitForAnyNewUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNew(k), function () {
    verifyNewUpdated(k);
  });
});

bthread("New delete verification", function () {
  const e = waitForAnyNewDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNew(k), function () {
    verifyNewDoesNotExist(k);
  });
});

bthread("Notification create verification", function () {
  const e = waitForAnyNotificationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotification(k), function () {
    verifyNotificationExists(k);
  });
});

bthread("Notification update verification", function () {
  const e = waitForAnyNotificationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNotification(k), function () {
    verifyNotificationUpdated(k);
  });
});

bthread("Notification delete verification", function () {
  const e = waitForAnyNotificationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNotification(k), function () {
    verifyNotificationDoesNotExist(k);
  });
});

bthread("Octocat create verification", function () {
  const e = waitForAnyOctocatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOctocat(k), function () {
    verifyOctocatExists(k);
  });
});

bthread("Octocat update verification", function () {
  const e = waitForAnyOctocatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOctocat(k), function () {
    verifyOctocatUpdated(k);
  });
});

bthread("Octocat delete verification", function () {
  const e = waitForAnyOctocatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOctocat(k), function () {
    verifyOctocatDoesNotExist(k);
  });
});

bthread("Oidc create verification", function () {
  const e = waitForAnyOidcAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOidc(k), function () {
    verifyOidcExists(k);
  });
});

bthread("Oidc update verification", function () {
  const e = waitForAnyOidcUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOidc(k), function () {
    verifyOidcUpdated(k);
  });
});

bthread("Oidc delete verification", function () {
  const e = waitForAnyOidcDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOidc(k), function () {
    verifyOidcDoesNotExist(k);
  });
});

bthread("Org create verification", function () {
  const e = waitForAnyOrgAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrg(k), function () {
    verifyOrgExists(k);
  });
});

bthread("Org update verification", function () {
  const e = waitForAnyOrgUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrg(k), function () {
    verifyOrgUpdated(k);
  });
});

bthread("Org delete verification", function () {
  const e = waitForAnyOrgDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrg(k), function () {
    verifyOrgDoesNotExist(k);
  });
});

bthread("Organization create verification", function () {
  const e = waitForAnyOrganizationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganization(k), function () {
    verifyOrganizationExists(k);
  });
});

bthread("Organization update verification", function () {
  const e = waitForAnyOrganizationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganization(k), function () {
    verifyOrganizationUpdated(k);
  });
});

bthread("Organization delete verification", function () {
  const e = waitForAnyOrganizationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganization(k), function () {
    verifyOrganizationDoesNotExist(k);
  });
});

bthread("Organizationrole create verification", function () {
  const e = waitForAnyOrganizationroleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationrole(k), function () {
    verifyOrganizationroleExists(k);
  });
});

bthread("Organizationrole update verification", function () {
  const e = waitForAnyOrganizationroleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationrole(k), function () {
    verifyOrganizationroleUpdated(k);
  });
});

bthread("Organizationrole delete verification", function () {
  const e = waitForAnyOrganizationroleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationrole(k), function () {
    verifyOrganizationroleDoesNotExist(k);
  });
});

bthread("Organizationsecret create verification", function () {
  const e = waitForAnyOrganizationsecretAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsecret(k), function () {
    verifyOrganizationsecretExists(k);
  });
});

bthread("Organizationsecret update verification", function () {
  const e = waitForAnyOrganizationsecretUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationsecret(k), function () {
    verifyOrganizationsecretUpdated(k);
  });
});

bthread("Organizationsecret delete verification", function () {
  const e = waitForAnyOrganizationsecretDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationsecret(k), function () {
    verifyOrganizationsecretDoesNotExist(k);
  });
});

bthread("Organizationvariable create verification", function () {
  const e = waitForAnyOrganizationvariableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationvariable(k), function () {
    verifyOrganizationvariableExists(k);
  });
});

bthread("Organizationvariable update verification", function () {
  const e = waitForAnyOrganizationvariableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOrganizationvariable(k), function () {
    verifyOrganizationvariableUpdated(k);
  });
});

bthread("Organizationvariable delete verification", function () {
  const e = waitForAnyOrganizationvariableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOrganizationvariable(k), function () {
    verifyOrganizationvariableDoesNotExist(k);
  });
});

bthread("Outsidecollaborator create verification", function () {
  const e = waitForAnyOutsidecollaboratorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOutsidecollaborator(k), function () {
    verifyOutsidecollaboratorExists(k);
  });
});

bthread("Outsidecollaborator update verification", function () {
  const e = waitForAnyOutsidecollaboratorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOutsidecollaborator(k), function () {
    verifyOutsidecollaboratorUpdated(k);
  });
});

bthread("Outsidecollaborator delete verification", function () {
  const e = waitForAnyOutsidecollaboratorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOutsidecollaborator(k), function () {
    verifyOutsidecollaboratorDoesNotExist(k);
  });
});

bthread("Package create verification", function () {
  const e = waitForAnyPackageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePackage(k), function () {
    verifyPackageExists(k);
  });
});

bthread("Package update verification", function () {
  const e = waitForAnyPackageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePackage(k), function () {
    verifyPackageUpdated(k);
  });
});

bthread("Package delete verification", function () {
  const e = waitForAnyPackageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPackage(k), function () {
    verifyPackageDoesNotExist(k);
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

bthread("Parent create verification", function () {
  const e = waitForAnyParentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParent(k), function () {
    verifyParentExists(k);
  });
});

bthread("Parent update verification", function () {
  const e = waitForAnyParentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParent(k), function () {
    verifyParentUpdated(k);
  });
});

bthread("Parent delete verification", function () {
  const e = waitForAnyParentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddParent(k), function () {
    verifyParentDoesNotExist(k);
  });
});

bthread("Participation create verification", function () {
  const e = waitForAnyParticipationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParticipation(k), function () {
    verifyParticipationExists(k);
  });
});

bthread("Participation update verification", function () {
  const e = waitForAnyParticipationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteParticipation(k), function () {
    verifyParticipationUpdated(k);
  });
});

bthread("Participation delete verification", function () {
  const e = waitForAnyParticipationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddParticipation(k), function () {
    verifyParticipationDoesNotExist(k);
  });
});

bthread("Partner create verification", function () {
  const e = waitForAnyPartnerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePartner(k), function () {
    verifyPartnerExists(k);
  });
});

bthread("Partner update verification", function () {
  const e = waitForAnyPartnerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePartner(k), function () {
    verifyPartnerUpdated(k);
  });
});

bthread("Partner delete verification", function () {
  const e = waitForAnyPartnerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPartner(k), function () {
    verifyPartnerDoesNotExist(k);
  });
});

bthread("Path create verification", function () {
  const e = waitForAnyPathAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePath(k), function () {
    verifyPathExists(k);
  });
});

bthread("Path update verification", function () {
  const e = waitForAnyPathUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePath(k), function () {
    verifyPathUpdated(k);
  });
});

bthread("Path delete verification", function () {
  const e = waitForAnyPathDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPath(k), function () {
    verifyPathDoesNotExist(k);
  });
});

bthread("Patternconfiguration create verification", function () {
  const e = waitForAnyPatternconfigurationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePatternconfiguration(k), function () {
    verifyPatternconfigurationExists(k);
  });
});

bthread("Patternconfiguration update verification", function () {
  const e = waitForAnyPatternconfigurationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePatternconfiguration(k), function () {
    verifyPatternconfigurationUpdated(k);
  });
});

bthread("Patternconfiguration delete verification", function () {
  const e = waitForAnyPatternconfigurationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPatternconfiguration(k), function () {
    verifyPatternconfigurationDoesNotExist(k);
  });
});

bthread("Pendingdeployment create verification", function () {
  const e = waitForAnyPendingdeploymentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePendingdeployment(k), function () {
    verifyPendingdeploymentExists(k);
  });
});

bthread("Pendingdeployment update verification", function () {
  const e = waitForAnyPendingdeploymentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePendingdeployment(k), function () {
    verifyPendingdeploymentUpdated(k);
  });
});

bthread("Pendingdeployment delete verification", function () {
  const e = waitForAnyPendingdeploymentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPendingdeployment(k), function () {
    verifyPendingdeploymentDoesNotExist(k);
  });
});

bthread("Permission create verification", function () {
  const e = waitForAnyPermissionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermission(k), function () {
    verifyPermissionExists(k);
  });
});

bthread("Permission update verification", function () {
  const e = waitForAnyPermissionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermission(k), function () {
    verifyPermissionUpdated(k);
  });
});

bthread("Permission delete verification", function () {
  const e = waitForAnyPermissionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPermission(k), function () {
    verifyPermissionDoesNotExist(k);
  });
});

bthread("Permissionscheck create verification", function () {
  const e = waitForAnyPermissionscheckAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermissionscheck(k), function () {
    verifyPermissionscheckExists(k);
  });
});

bthread("Permissionscheck update verification", function () {
  const e = waitForAnyPermissionscheckUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePermissionscheck(k), function () {
    verifyPermissionscheckUpdated(k);
  });
});

bthread("Permissionscheck delete verification", function () {
  const e = waitForAnyPermissionscheckDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPermissionscheck(k), function () {
    verifyPermissionscheckDoesNotExist(k);
  });
});

bthread("Personalaccesstoken create verification", function () {
  const e = waitForAnyPersonalaccesstokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePersonalaccesstoken(k), function () {
    verifyPersonalaccesstokenExists(k);
  });
});

bthread("Personalaccesstoken update verification", function () {
  const e = waitForAnyPersonalaccesstokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePersonalaccesstoken(k), function () {
    verifyPersonalaccesstokenUpdated(k);
  });
});

bthread("Personalaccesstoken delete verification", function () {
  const e = waitForAnyPersonalaccesstokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPersonalaccesstoken(k), function () {
    verifyPersonalaccesstokenDoesNotExist(k);
  });
});

bthread("Personalaccesstokenrequest create verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePersonalaccesstokenrequest(k), function () {
    verifyPersonalaccesstokenrequestExists(k);
  });
});

bthread("Personalaccesstokenrequest update verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePersonalaccesstokenrequest(k), function () {
    verifyPersonalaccesstokenrequestUpdated(k);
  });
});

bthread("Personalaccesstokenrequest delete verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPersonalaccesstokenrequest(k), function () {
    verifyPersonalaccesstokenrequestDoesNotExist(k);
  });
});

bthread("Ping create verification", function () {
  const e = waitForAnyPingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePing(k), function () {
    verifyPingExists(k);
  });
});

bthread("Ping update verification", function () {
  const e = waitForAnyPingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePing(k), function () {
    verifyPingUpdated(k);
  });
});

bthread("Ping delete verification", function () {
  const e = waitForAnyPingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPing(k), function () {
    verifyPingDoesNotExist(k);
  });
});

bthread("Plan create verification", function () {
  const e = waitForAnyPlanAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlan(k), function () {
    verifyPlanExists(k);
  });
});

bthread("Plan update verification", function () {
  const e = waitForAnyPlanUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlan(k), function () {
    verifyPlanUpdated(k);
  });
});

bthread("Plan delete verification", function () {
  const e = waitForAnyPlanDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPlan(k), function () {
    verifyPlanDoesNotExist(k);
  });
});

bthread("Platform create verification", function () {
  const e = waitForAnyPlatformAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlatform(k), function () {
    verifyPlatformExists(k);
  });
});

bthread("Platform update verification", function () {
  const e = waitForAnyPlatformUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePlatform(k), function () {
    verifyPlatformUpdated(k);
  });
});

bthread("Platform delete verification", function () {
  const e = waitForAnyPlatformDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPlatform(k), function () {
    verifyPlatformDoesNotExist(k);
  });
});

bthread("Popular create verification", function () {
  const e = waitForAnyPopularAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePopular(k), function () {
    verifyPopularExists(k);
  });
});

bthread("Popular update verification", function () {
  const e = waitForAnyPopularUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePopular(k), function () {
    verifyPopularUpdated(k);
  });
});

bthread("Popular delete verification", function () {
  const e = waitForAnyPopularDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPopular(k), function () {
    verifyPopularDoesNotExist(k);
  });
});

bthread("Preference create verification", function () {
  const e = waitForAnyPreferenceAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePreference(k), function () {
    verifyPreferenceExists(k);
  });
});

bthread("Preference update verification", function () {
  const e = waitForAnyPreferenceUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePreference(k), function () {
    verifyPreferenceUpdated(k);
  });
});

bthread("Preference delete verification", function () {
  const e = waitForAnyPreferenceDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPreference(k), function () {
    verifyPreferenceDoesNotExist(k);
  });
});

bthread("Premiumrequest create verification", function () {
  const e = waitForAnyPremiumrequestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePremiumrequest(k), function () {
    verifyPremiumrequestExists(k);
  });
});

bthread("Premiumrequest update verification", function () {
  const e = waitForAnyPremiumrequestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePremiumrequest(k), function () {
    verifyPremiumrequestUpdated(k);
  });
});

bthread("Premiumrequest delete verification", function () {
  const e = waitForAnyPremiumrequestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPremiumrequest(k), function () {
    verifyPremiumrequestDoesNotExist(k);
  });
});

bthread("Priority create verification", function () {
  const e = waitForAnyPriorityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePriority(k), function () {
    verifyPriorityExists(k);
  });
});

bthread("Priority update verification", function () {
  const e = waitForAnyPriorityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePriority(k), function () {
    verifyPriorityUpdated(k);
  });
});

bthread("Priority delete verification", function () {
  const e = waitForAnyPriorityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPriority(k), function () {
    verifyPriorityDoesNotExist(k);
  });
});

bthread("Privateregistry create verification", function () {
  const e = waitForAnyPrivateregistryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrivateregistry(k), function () {
    verifyPrivateregistryExists(k);
  });
});

bthread("Privateregistry update verification", function () {
  const e = waitForAnyPrivateregistryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrivateregistry(k), function () {
    verifyPrivateregistryUpdated(k);
  });
});

bthread("Privateregistry delete verification", function () {
  const e = waitForAnyPrivateregistryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrivateregistry(k), function () {
    verifyPrivateregistryDoesNotExist(k);
  });
});

bthread("Privatevulnerabilityreporting create verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrivatevulnerabilityreporting(k), function () {
    verifyPrivatevulnerabilityreportingExists(k);
  });
});

bthread("Privatevulnerabilityreporting update verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePrivatevulnerabilityreporting(k), function () {
    verifyPrivatevulnerabilityreportingUpdated(k);
  });
});

bthread("Privatevulnerabilityreporting delete verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPrivatevulnerabilityreporting(k), function () {
    verifyPrivatevulnerabilityreportingDoesNotExist(k);
  });
});

bthread("Profile create verification", function () {
  const e = waitForAnyProfileAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProfile(k), function () {
    verifyProfileExists(k);
  });
});

bthread("Profile update verification", function () {
  const e = waitForAnyProfileUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProfile(k), function () {
    verifyProfileUpdated(k);
  });
});

bthread("Profile delete verification", function () {
  const e = waitForAnyProfileDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProfile(k), function () {
    verifyProfileDoesNotExist(k);
  });
});

bthread("Project create verification", function () {
  const e = waitForAnyProjectAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProject(k), function () {
    verifyProjectExists(k);
  });
});

bthread("Project update verification", function () {
  const e = waitForAnyProjectUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProject(k), function () {
    verifyProjectUpdated(k);
  });
});

bthread("Project delete verification", function () {
  const e = waitForAnyProjectDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProject(k), function () {
    verifyProjectDoesNotExist(k);
  });
});

bthread("Projectsv2 create verification", function () {
  const e = waitForAnyProjectsv2Added();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectsv2(k), function () {
    verifyProjectsv2Exists(k);
  });
});

bthread("Projectsv2 update verification", function () {
  const e = waitForAnyProjectsv2Updated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProjectsv2(k), function () {
    verifyProjectsv2Updated(k);
  });
});

bthread("Projectsv2 delete verification", function () {
  const e = waitForAnyProjectsv2Deleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProjectsv2(k), function () {
    verifyProjectsv2DoesNotExist(k);
  });
});

bthread("Property create verification", function () {
  const e = waitForAnyPropertyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProperty(k), function () {
    verifyPropertyExists(k);
  });
});

bthread("Property update verification", function () {
  const e = waitForAnyPropertyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProperty(k), function () {
    verifyPropertyUpdated(k);
  });
});

bthread("Property delete verification", function () {
  const e = waitForAnyPropertyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProperty(k), function () {
    verifyPropertyDoesNotExist(k);
  });
});

bthread("Protection create verification", function () {
  const e = waitForAnyProtectionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProtection(k), function () {
    verifyProtectionExists(k);
  });
});

bthread("Protection update verification", function () {
  const e = waitForAnyProtectionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteProtection(k), function () {
    verifyProtectionUpdated(k);
  });
});

bthread("Protection delete verification", function () {
  const e = waitForAnyProtectionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddProtection(k), function () {
    verifyProtectionDoesNotExist(k);
  });
});

bthread("Public create verification", function () {
  const e = waitForAnyPublicAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublic(k), function () {
    verifyPublicExists(k);
  });
});

bthread("Public update verification", function () {
  const e = waitForAnyPublicUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublic(k), function () {
    verifyPublicUpdated(k);
  });
});

bthread("Public delete verification", function () {
  const e = waitForAnyPublicDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPublic(k), function () {
    verifyPublicDoesNotExist(k);
  });
});

bthread("Publicemail create verification", function () {
  const e = waitForAnyPublicemailAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublicemail(k), function () {
    verifyPublicemailExists(k);
  });
});

bthread("Publicemail update verification", function () {
  const e = waitForAnyPublicemailUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublicemail(k), function () {
    verifyPublicemailUpdated(k);
  });
});

bthread("Publicemail delete verification", function () {
  const e = waitForAnyPublicemailDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPublicemail(k), function () {
    verifyPublicemailDoesNotExist(k);
  });
});

bthread("Publickey create verification", function () {
  const e = waitForAnyPublickeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublickey(k), function () {
    verifyPublickeyExists(k);
  });
});

bthread("Publickey update verification", function () {
  const e = waitForAnyPublickeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublickey(k), function () {
    verifyPublickeyUpdated(k);
  });
});

bthread("Publickey delete verification", function () {
  const e = waitForAnyPublickeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPublickey(k), function () {
    verifyPublickeyDoesNotExist(k);
  });
});

bthread("Publicmember create verification", function () {
  const e = waitForAnyPublicmemberAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublicmember(k), function () {
    verifyPublicmemberExists(k);
  });
});

bthread("Publicmember update verification", function () {
  const e = waitForAnyPublicmemberUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublicmember(k), function () {
    verifyPublicmemberUpdated(k);
  });
});

bthread("Publicmember delete verification", function () {
  const e = waitForAnyPublicmemberDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPublicmember(k), function () {
    verifyPublicmemberDoesNotExist(k);
  });
});

bthread("Publish create verification", function () {
  const e = waitForAnyPublishAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublish(k), function () {
    verifyPublishExists(k);
  });
});

bthread("Publish update verification", function () {
  const e = waitForAnyPublishUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePublish(k), function () {
    verifyPublishUpdated(k);
  });
});

bthread("Publish delete verification", function () {
  const e = waitForAnyPublishDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPublish(k), function () {
    verifyPublishDoesNotExist(k);
  });
});

bthread("Pull create verification", function () {
  const e = waitForAnyPullAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePull(k), function () {
    verifyPullExists(k);
  });
});

bthread("Pull update verification", function () {
  const e = waitForAnyPullUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePull(k), function () {
    verifyPullUpdated(k);
  });
});

bthread("Pull delete verification", function () {
  const e = waitForAnyPullDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPull(k), function () {
    verifyPullDoesNotExist(k);
  });
});

bthread("Punchcard create verification", function () {
  const e = waitForAnyPunchcardAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePunchcard(k), function () {
    verifyPunchcardExists(k);
  });
});

bthread("Punchcard update verification", function () {
  const e = waitForAnyPunchcardUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePunchcard(k), function () {
    verifyPunchcardUpdated(k);
  });
});

bthread("Punchcard delete verification", function () {
  const e = waitForAnyPunchcardDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPunchcard(k), function () {
    verifyPunchcardDoesNotExist(k);
  });
});

bthread("Pushprotectionbypass create verification", function () {
  const e = waitForAnyPushprotectionbypassAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushprotectionbypass(k), function () {
    verifyPushprotectionbypassExists(k);
  });
});

bthread("Pushprotectionbypass update verification", function () {
  const e = waitForAnyPushprotectionbypassUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushprotectionbypass(k), function () {
    verifyPushprotectionbypassUpdated(k);
  });
});

bthread("Pushprotectionbypass delete verification", function () {
  const e = waitForAnyPushprotectionbypassDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPushprotectionbypass(k), function () {
    verifyPushprotectionbypassDoesNotExist(k);
  });
});

bthread("Ratelimit create verification", function () {
  const e = waitForAnyRatelimitAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRatelimit(k), function () {
    verifyRatelimitExists(k);
  });
});

bthread("Ratelimit update verification", function () {
  const e = waitForAnyRatelimitUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRatelimit(k), function () {
    verifyRatelimitUpdated(k);
  });
});

bthread("Ratelimit delete verification", function () {
  const e = waitForAnyRatelimitDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRatelimit(k), function () {
    verifyRatelimitDoesNotExist(k);
  });
});

bthread("Raw create verification", function () {
  const e = waitForAnyRawAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRaw(k), function () {
    verifyRawExists(k);
  });
});

bthread("Raw update verification", function () {
  const e = waitForAnyRawUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRaw(k), function () {
    verifyRawUpdated(k);
  });
});

bthread("Raw delete verification", function () {
  const e = waitForAnyRawDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRaw(k), function () {
    verifyRawDoesNotExist(k);
  });
});

bthread("Reaction create verification", function () {
  const e = waitForAnyReactionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReaction(k), function () {
    verifyReactionExists(k);
  });
});

bthread("Reaction update verification", function () {
  const e = waitForAnyReactionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReaction(k), function () {
    verifyReactionUpdated(k);
  });
});

bthread("Reaction delete verification", function () {
  const e = waitForAnyReactionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReaction(k), function () {
    verifyReactionDoesNotExist(k);
  });
});

bthread("Readme create verification", function () {
  const e = waitForAnyReadmeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReadme(k), function () {
    verifyReadmeExists(k);
  });
});

bthread("Readme update verification", function () {
  const e = waitForAnyReadmeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReadme(k), function () {
    verifyReadmeUpdated(k);
  });
});

bthread("Readme delete verification", function () {
  const e = waitForAnyReadmeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReadme(k), function () {
    verifyReadmeDoesNotExist(k);
  });
});

bthread("Receivedevent create verification", function () {
  const e = waitForAnyReceivedeventAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReceivedevent(k), function () {
    verifyReceivedeventExists(k);
  });
});

bthread("Receivedevent update verification", function () {
  const e = waitForAnyReceivedeventUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReceivedevent(k), function () {
    verifyReceivedeventUpdated(k);
  });
});

bthread("Receivedevent delete verification", function () {
  const e = waitForAnyReceivedeventDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReceivedevent(k), function () {
    verifyReceivedeventDoesNotExist(k);
  });
});

bthread("Ref create verification", function () {
  const e = waitForAnyRefAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRef(k), function () {
    verifyRefExists(k);
  });
});

bthread("Ref update verification", function () {
  const e = waitForAnyRefUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRef(k), function () {
    verifyRefUpdated(k);
  });
});

bthread("Ref delete verification", function () {
  const e = waitForAnyRefDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRef(k), function () {
    verifyRefDoesNotExist(k);
  });
});

bthread("Referrer create verification", function () {
  const e = waitForAnyReferrerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReferrer(k), function () {
    verifyReferrerExists(k);
  });
});

bthread("Referrer update verification", function () {
  const e = waitForAnyReferrerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReferrer(k), function () {
    verifyReferrerUpdated(k);
  });
});

bthread("Referrer delete verification", function () {
  const e = waitForAnyReferrerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReferrer(k), function () {
    verifyReferrerDoesNotExist(k);
  });
});

bthread("Registrationtoken create verification", function () {
  const e = waitForAnyRegistrationtokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegistrationtoken(k), function () {
    verifyRegistrationtokenExists(k);
  });
});

bthread("Registrationtoken update verification", function () {
  const e = waitForAnyRegistrationtokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRegistrationtoken(k), function () {
    verifyRegistrationtokenUpdated(k);
  });
});

bthread("Registrationtoken delete verification", function () {
  const e = waitForAnyRegistrationtokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRegistrationtoken(k), function () {
    verifyRegistrationtokenDoesNotExist(k);
  });
});

bthread("Releas create verification", function () {
  const e = waitForAnyReleasAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReleas(k), function () {
    verifyReleasExists(k);
  });
});

bthread("Releas update verification", function () {
  const e = waitForAnyReleasUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReleas(k), function () {
    verifyReleasUpdated(k);
  });
});

bthread("Releas delete verification", function () {
  const e = waitForAnyReleasDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReleas(k), function () {
    verifyReleasDoesNotExist(k);
  });
});

bthread("Remove create verification", function () {
  const e = waitForAnyRemoveAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemove(k), function () {
    verifyRemoveExists(k);
  });
});

bthread("Remove update verification", function () {
  const e = waitForAnyRemoveUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemove(k), function () {
    verifyRemoveUpdated(k);
  });
});

bthread("Remove delete verification", function () {
  const e = waitForAnyRemoveDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRemove(k), function () {
    verifyRemoveDoesNotExist(k);
  });
});

bthread("Removetoken create verification", function () {
  const e = waitForAnyRemovetokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemovetoken(k), function () {
    verifyRemovetokenExists(k);
  });
});

bthread("Removetoken update verification", function () {
  const e = waitForAnyRemovetokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRemovetoken(k), function () {
    verifyRemovetokenUpdated(k);
  });
});

bthread("Removetoken delete verification", function () {
  const e = waitForAnyRemovetokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRemovetoken(k), function () {
    verifyRemovetokenDoesNotExist(k);
  });
});

bthread("Rename create verification", function () {
  const e = waitForAnyRenameAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRename(k), function () {
    verifyRenameExists(k);
  });
});

bthread("Rename update verification", function () {
  const e = waitForAnyRenameUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRename(k), function () {
    verifyRenameUpdated(k);
  });
});

bthread("Rename delete verification", function () {
  const e = waitForAnyRenameDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRename(k), function () {
    verifyRenameDoesNotExist(k);
  });
});

bthread("Reply create verification", function () {
  const e = waitForAnyReplyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReply(k), function () {
    verifyReplyExists(k);
  });
});

bthread("Reply update verification", function () {
  const e = waitForAnyReplyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReply(k), function () {
    verifyReplyUpdated(k);
  });
});

bthread("Reply delete verification", function () {
  const e = waitForAnyReplyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReply(k), function () {
    verifyReplyDoesNotExist(k);
  });
});

bthread("Repo create verification", function () {
  const e = waitForAnyRepoAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepo(k), function () {
    verifyRepoExists(k);
  });
});

bthread("Repo update verification", function () {
  const e = waitForAnyRepoUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepo(k), function () {
    verifyRepoUpdated(k);
  });
});

bthread("Repo delete verification", function () {
  const e = waitForAnyRepoDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRepo(k), function () {
    verifyRepoDoesNotExist(k);
  });
});

bthread("Report create verification", function () {
  const e = waitForAnyReportAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReport(k), function () {
    verifyReportExists(k);
  });
});

bthread("Report update verification", function () {
  const e = waitForAnyReportUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReport(k), function () {
    verifyReportUpdated(k);
  });
});

bthread("Report delete verification", function () {
  const e = waitForAnyReportDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReport(k), function () {
    verifyReportDoesNotExist(k);
  });
});

bthread("Repository create verification", function () {
  const e = waitForAnyRepositoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepository(k), function () {
    verifyRepositoryExists(k);
  });
});

bthread("Repository update verification", function () {
  const e = waitForAnyRepositoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepository(k), function () {
    verifyRepositoryUpdated(k);
  });
});

bthread("Repository delete verification", function () {
  const e = waitForAnyRepositoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRepository(k), function () {
    verifyRepositoryDoesNotExist(k);
  });
});

bthread("Repositoryacces create verification", function () {
  const e = waitForAnyRepositoryaccesAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepositoryacces(k), function () {
    verifyRepositoryaccesExists(k);
  });
});

bthread("Repositoryacces update verification", function () {
  const e = waitForAnyRepositoryaccesUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepositoryacces(k), function () {
    verifyRepositoryaccesUpdated(k);
  });
});

bthread("Repositoryacces delete verification", function () {
  const e = waitForAnyRepositoryaccesDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRepositoryacces(k), function () {
    verifyRepositoryaccesDoesNotExist(k);
  });
});

bthread("Repositoryinvitation create verification", function () {
  const e = waitForAnyRepositoryinvitationAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepositoryinvitation(k), function () {
    verifyRepositoryinvitationExists(k);
  });
});

bthread("Repositoryinvitation update verification", function () {
  const e = waitForAnyRepositoryinvitationUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRepositoryinvitation(k), function () {
    verifyRepositoryinvitationUpdated(k);
  });
});

bthread("Repositoryinvitation delete verification", function () {
  const e = waitForAnyRepositoryinvitationDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRepositoryinvitation(k), function () {
    verifyRepositoryinvitationDoesNotExist(k);
  });
});

bthread("Requestedreviewer create verification", function () {
  const e = waitForAnyRequestedreviewerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequestedreviewer(k), function () {
    verifyRequestedreviewerExists(k);
  });
});

bthread("Requestedreviewer update verification", function () {
  const e = waitForAnyRequestedreviewerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequestedreviewer(k), function () {
    verifyRequestedreviewerUpdated(k);
  });
});

bthread("Requestedreviewer delete verification", function () {
  const e = waitForAnyRequestedreviewerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRequestedreviewer(k), function () {
    verifyRequestedreviewerDoesNotExist(k);
  });
});

bthread("Requiredpullrequestreview create verification", function () {
  const e = waitForAnyRequiredpullrequestreviewAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredpullrequestreview(k), function () {
    verifyRequiredpullrequestreviewExists(k);
  });
});

bthread("Requiredpullrequestreview update verification", function () {
  const e = waitForAnyRequiredpullrequestreviewUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredpullrequestreview(k), function () {
    verifyRequiredpullrequestreviewUpdated(k);
  });
});

bthread("Requiredpullrequestreview delete verification", function () {
  const e = waitForAnyRequiredpullrequestreviewDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRequiredpullrequestreview(k), function () {
    verifyRequiredpullrequestreviewDoesNotExist(k);
  });
});

bthread("Requiredsignature create verification", function () {
  const e = waitForAnyRequiredsignatureAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredsignature(k), function () {
    verifyRequiredsignatureExists(k);
  });
});

bthread("Requiredsignature update verification", function () {
  const e = waitForAnyRequiredsignatureUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredsignature(k), function () {
    verifyRequiredsignatureUpdated(k);
  });
});

bthread("Requiredsignature delete verification", function () {
  const e = waitForAnyRequiredsignatureDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRequiredsignature(k), function () {
    verifyRequiredsignatureDoesNotExist(k);
  });
});

bthread("Requiredstatuscheck create verification", function () {
  const e = waitForAnyRequiredstatuscheckAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredstatuscheck(k), function () {
    verifyRequiredstatuscheckExists(k);
  });
});

bthread("Requiredstatuscheck update verification", function () {
  const e = waitForAnyRequiredstatuscheckUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRequiredstatuscheck(k), function () {
    verifyRequiredstatuscheckUpdated(k);
  });
});

bthread("Requiredstatuscheck delete verification", function () {
  const e = waitForAnyRequiredstatuscheckDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRequiredstatuscheck(k), function () {
    verifyRequiredstatuscheckDoesNotExist(k);
  });
});

bthread("Rerequest create verification", function () {
  const e = waitForAnyRerequestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRerequest(k), function () {
    verifyRerequestExists(k);
  });
});

bthread("Rerequest update verification", function () {
  const e = waitForAnyRerequestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRerequest(k), function () {
    verifyRerequestUpdated(k);
  });
});

bthread("Rerequest delete verification", function () {
  const e = waitForAnyRerequestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRerequest(k), function () {
    verifyRerequestDoesNotExist(k);
  });
});

bthread("Rerun create verification", function () {
  const e = waitForAnyRerunAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRerun(k), function () {
    verifyRerunExists(k);
  });
});

bthread("Rerun update verification", function () {
  const e = waitForAnyRerunUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRerun(k), function () {
    verifyRerunUpdated(k);
  });
});

bthread("Rerun delete verification", function () {
  const e = waitForAnyRerunDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRerun(k), function () {
    verifyRerunDoesNotExist(k);
  });
});

bthread("Rerunfailedjob create verification", function () {
  const e = waitForAnyRerunfailedjobAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRerunfailedjob(k), function () {
    verifyRerunfailedjobExists(k);
  });
});

bthread("Rerunfailedjob update verification", function () {
  const e = waitForAnyRerunfailedjobUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRerunfailedjob(k), function () {
    verifyRerunfailedjobUpdated(k);
  });
});

bthread("Rerunfailedjob delete verification", function () {
  const e = waitForAnyRerunfailedjobDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRerunfailedjob(k), function () {
    verifyRerunfailedjobDoesNotExist(k);
  });
});

bthread("Restore create verification", function () {
  const e = waitForAnyRestoreAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRestore(k), function () {
    verifyRestoreExists(k);
  });
});

bthread("Restore update verification", function () {
  const e = waitForAnyRestoreUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRestore(k), function () {
    verifyRestoreUpdated(k);
  });
});

bthread("Restore delete verification", function () {
  const e = waitForAnyRestoreDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRestore(k), function () {
    verifyRestoreDoesNotExist(k);
  });
});

bthread("Restriction create verification", function () {
  const e = waitForAnyRestrictionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRestriction(k), function () {
    verifyRestrictionExists(k);
  });
});

bthread("Restriction update verification", function () {
  const e = waitForAnyRestrictionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRestriction(k), function () {
    verifyRestrictionUpdated(k);
  });
});

bthread("Restriction delete verification", function () {
  const e = waitForAnyRestrictionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRestriction(k), function () {
    verifyRestrictionDoesNotExist(k);
  });
});

bthread("Review create verification", function () {
  const e = waitForAnyReviewAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReview(k), function () {
    verifyReviewExists(k);
  });
});

bthread("Review update verification", function () {
  const e = waitForAnyReviewUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReview(k), function () {
    verifyReviewUpdated(k);
  });
});

bthread("Review delete verification", function () {
  const e = waitForAnyReviewDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReview(k), function () {
    verifyReviewDoesNotExist(k);
  });
});

bthread("Revoke create verification", function () {
  const e = waitForAnyRevokeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRevoke(k), function () {
    verifyRevokeExists(k);
  });
});

bthread("Revoke update verification", function () {
  const e = waitForAnyRevokeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRevoke(k), function () {
    verifyRevokeUpdated(k);
  });
});

bthread("Revoke delete verification", function () {
  const e = waitForAnyRevokeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRevoke(k), function () {
    verifyRevokeDoesNotExist(k);
  });
});

bthread("Routestat create verification", function () {
  const e = waitForAnyRoutestatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRoutestat(k), function () {
    verifyRoutestatExists(k);
  });
});

bthread("Routestat update verification", function () {
  const e = waitForAnyRoutestatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRoutestat(k), function () {
    verifyRoutestatUpdated(k);
  });
});

bthread("Routestat delete verification", function () {
  const e = waitForAnyRoutestatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRoutestat(k), function () {
    verifyRoutestatDoesNotExist(k);
  });
});

bthread("Rule create verification", function () {
  const e = waitForAnyRuleAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRule(k), function () {
    verifyRuleExists(k);
  });
});

bthread("Rule update verification", function () {
  const e = waitForAnyRuleUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRule(k), function () {
    verifyRuleUpdated(k);
  });
});

bthread("Rule delete verification", function () {
  const e = waitForAnyRuleDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRule(k), function () {
    verifyRuleDoesNotExist(k);
  });
});

bthread("Ruleset create verification", function () {
  const e = waitForAnyRulesetAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRuleset(k), function () {
    verifyRulesetExists(k);
  });
});

bthread("Ruleset update verification", function () {
  const e = waitForAnyRulesetUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRuleset(k), function () {
    verifyRulesetUpdated(k);
  });
});

bthread("Ruleset delete verification", function () {
  const e = waitForAnyRulesetDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRuleset(k), function () {
    verifyRulesetDoesNotExist(k);
  });
});

bthread("Rulesuite create verification", function () {
  const e = waitForAnyRulesuiteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRulesuite(k), function () {
    verifyRulesuiteExists(k);
  });
});

bthread("Rulesuite update verification", function () {
  const e = waitForAnyRulesuiteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRulesuite(k), function () {
    verifyRulesuiteUpdated(k);
  });
});

bthread("Rulesuite delete verification", function () {
  const e = waitForAnyRulesuiteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRulesuite(k), function () {
    verifyRulesuiteDoesNotExist(k);
  });
});

bthread("Run create verification", function () {
  const e = waitForAnyRunAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRun(k), function () {
    verifyRunExists(k);
  });
});

bthread("Run update verification", function () {
  const e = waitForAnyRunUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRun(k), function () {
    verifyRunUpdated(k);
  });
});

bthread("Run delete verification", function () {
  const e = waitForAnyRunDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRun(k), function () {
    verifyRunDoesNotExist(k);
  });
});

bthread("Runner create verification", function () {
  const e = waitForAnyRunnerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRunner(k), function () {
    verifyRunnerExists(k);
  });
});

bthread("Runner update verification", function () {
  const e = waitForAnyRunnerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRunner(k), function () {
    verifyRunnerUpdated(k);
  });
});

bthread("Runner delete verification", function () {
  const e = waitForAnyRunnerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRunner(k), function () {
    verifyRunnerDoesNotExist(k);
  });
});

bthread("Runnergroup create verification", function () {
  const e = waitForAnyRunnergroupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRunnergroup(k), function () {
    verifyRunnergroupExists(k);
  });
});

bthread("Runnergroup update verification", function () {
  const e = waitForAnyRunnergroupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRunnergroup(k), function () {
    verifyRunnergroupUpdated(k);
  });
});

bthread("Runnergroup delete verification", function () {
  const e = waitForAnyRunnergroupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRunnergroup(k), function () {
    verifyRunnergroupDoesNotExist(k);
  });
});

bthread("Sarif create verification", function () {
  const e = waitForAnySarifAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSarif(k), function () {
    verifySarifExists(k);
  });
});

bthread("Sarif update verification", function () {
  const e = waitForAnySarifUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSarif(k), function () {
    verifySarifUpdated(k);
  });
});

bthread("Sarif delete verification", function () {
  const e = waitForAnySarifDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSarif(k), function () {
    verifySarifDoesNotExist(k);
  });
});

bthread("Sbom create verification", function () {
  const e = waitForAnySbomAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSbom(k), function () {
    verifySbomExists(k);
  });
});

bthread("Sbom update verification", function () {
  const e = waitForAnySbomUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSbom(k), function () {
    verifySbomUpdated(k);
  });
});

bthread("Sbom delete verification", function () {
  const e = waitForAnySbomDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSbom(k), function () {
    verifySbomDoesNotExist(k);
  });
});

bthread("Scanhistory create verification", function () {
  const e = waitForAnyScanhistoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScanhistory(k), function () {
    verifyScanhistoryExists(k);
  });
});

bthread("Scanhistory update verification", function () {
  const e = waitForAnyScanhistoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScanhistory(k), function () {
    verifyScanhistoryUpdated(k);
  });
});

bthread("Scanhistory delete verification", function () {
  const e = waitForAnyScanhistoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScanhistory(k), function () {
    verifyScanhistoryDoesNotExist(k);
  });
});

bthread("Schema create verification", function () {
  const e = waitForAnySchemaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSchema(k), function () {
    verifySchemaExists(k);
  });
});

bthread("Schema update verification", function () {
  const e = waitForAnySchemaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSchema(k), function () {
    verifySchemaUpdated(k);
  });
});

bthread("Schema delete verification", function () {
  const e = waitForAnySchemaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSchema(k), function () {
    verifySchemaDoesNotExist(k);
  });
});

bthread("Scoped create verification", function () {
  const e = waitForAnyScopedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScoped(k), function () {
    verifyScopedExists(k);
  });
});

bthread("Scoped update verification", function () {
  const e = waitForAnyScopedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteScoped(k), function () {
    verifyScopedUpdated(k);
  });
});

bthread("Scoped delete verification", function () {
  const e = waitForAnyScopedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddScoped(k), function () {
    verifyScopedDoesNotExist(k);
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

bthread("Seat create verification", function () {
  const e = waitForAnySeatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSeat(k), function () {
    verifySeatExists(k);
  });
});

bthread("Seat update verification", function () {
  const e = waitForAnySeatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSeat(k), function () {
    verifySeatUpdated(k);
  });
});

bthread("Seat delete verification", function () {
  const e = waitForAnySeatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSeat(k), function () {
    verifySeatDoesNotExist(k);
  });
});

bthread("Secret create verification", function () {
  const e = waitForAnySecretAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecret(k), function () {
    verifySecretExists(k);
  });
});

bthread("Secret update verification", function () {
  const e = waitForAnySecretUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecret(k), function () {
    verifySecretUpdated(k);
  });
});

bthread("Secret delete verification", function () {
  const e = waitForAnySecretDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSecret(k), function () {
    verifySecretDoesNotExist(k);
  });
});

bthread("Secretscanning create verification", function () {
  const e = waitForAnySecretscanningAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecretscanning(k), function () {
    verifySecretscanningExists(k);
  });
});

bthread("Secretscanning update verification", function () {
  const e = waitForAnySecretscanningUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecretscanning(k), function () {
    verifySecretscanningUpdated(k);
  });
});

bthread("Secretscanning delete verification", function () {
  const e = waitForAnySecretscanningDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSecretscanning(k), function () {
    verifySecretscanningDoesNotExist(k);
  });
});

bthread("Securityadvisory create verification", function () {
  const e = waitForAnySecurityadvisoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecurityadvisory(k), function () {
    verifySecurityadvisoryExists(k);
  });
});

bthread("Securityadvisory update verification", function () {
  const e = waitForAnySecurityadvisoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecurityadvisory(k), function () {
    verifySecurityadvisoryUpdated(k);
  });
});

bthread("Securityadvisory delete verification", function () {
  const e = waitForAnySecurityadvisoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSecurityadvisory(k), function () {
    verifySecurityadvisoryDoesNotExist(k);
  });
});

bthread("Securitymanager create verification", function () {
  const e = waitForAnySecuritymanagerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecuritymanager(k), function () {
    verifySecuritymanagerExists(k);
  });
});

bthread("Securitymanager update verification", function () {
  const e = waitForAnySecuritymanagerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSecuritymanager(k), function () {
    verifySecuritymanagerUpdated(k);
  });
});

bthread("Securitymanager delete verification", function () {
  const e = waitForAnySecuritymanagerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSecuritymanager(k), function () {
    verifySecuritymanagerDoesNotExist(k);
  });
});

bthread("Selectedaction create verification", function () {
  const e = waitForAnySelectedactionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSelectedaction(k), function () {
    verifySelectedactionExists(k);
  });
});

bthread("Selectedaction update verification", function () {
  const e = waitForAnySelectedactionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSelectedaction(k), function () {
    verifySelectedactionUpdated(k);
  });
});

bthread("Selectedaction delete verification", function () {
  const e = waitForAnySelectedactionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSelectedaction(k), function () {
    verifySelectedactionDoesNotExist(k);
  });
});

bthread("Selectedteam create verification", function () {
  const e = waitForAnySelectedteamAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSelectedteam(k), function () {
    verifySelectedteamExists(k);
  });
});

bthread("Selectedteam update verification", function () {
  const e = waitForAnySelectedteamUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSelectedteam(k), function () {
    verifySelectedteamUpdated(k);
  });
});

bthread("Selectedteam delete verification", function () {
  const e = waitForAnySelectedteamDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSelectedteam(k), function () {
    verifySelectedteamDoesNotExist(k);
  });
});

bthread("Selecteduser create verification", function () {
  const e = waitForAnySelecteduserAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSelecteduser(k), function () {
    verifySelecteduserExists(k);
  });
});

bthread("Selecteduser update verification", function () {
  const e = waitForAnySelecteduserUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSelecteduser(k), function () {
    verifySelecteduserUpdated(k);
  });
});

bthread("Selecteduser delete verification", function () {
  const e = waitForAnySelecteduserDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSelecteduser(k), function () {
    verifySelecteduserDoesNotExist(k);
  });
});

bthread("Selfhostedrunner create verification", function () {
  const e = waitForAnySelfhostedrunnerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSelfhostedrunner(k), function () {
    verifySelfhostedrunnerExists(k);
  });
});

bthread("Selfhostedrunner update verification", function () {
  const e = waitForAnySelfhostedrunnerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSelfhostedrunner(k), function () {
    verifySelfhostedrunnerUpdated(k);
  });
});

bthread("Selfhostedrunner delete verification", function () {
  const e = waitForAnySelfhostedrunnerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSelfhostedrunner(k), function () {
    verifySelfhostedrunnerDoesNotExist(k);
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

bthread("Sharedstorage create verification", function () {
  const e = waitForAnySharedstorageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSharedstorage(k), function () {
    verifySharedstorageExists(k);
  });
});

bthread("Sharedstorage update verification", function () {
  const e = waitForAnySharedstorageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSharedstorage(k), function () {
    verifySharedstorageUpdated(k);
  });
});

bthread("Sharedstorage delete verification", function () {
  const e = waitForAnySharedstorageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSharedstorage(k), function () {
    verifySharedstorageDoesNotExist(k);
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

bthread("Socialaccount create verification", function () {
  const e = waitForAnySocialaccountAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSocialaccount(k), function () {
    verifySocialaccountExists(k);
  });
});

bthread("Socialaccount update verification", function () {
  const e = waitForAnySocialaccountUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSocialaccount(k), function () {
    verifySocialaccountUpdated(k);
  });
});

bthread("Socialaccount delete verification", function () {
  const e = waitForAnySocialaccountDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSocialaccount(k), function () {
    verifySocialaccountDoesNotExist(k);
  });
});

bthread("Sshsigningkey create verification", function () {
  const e = waitForAnySshsigningkeyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSshsigningkey(k), function () {
    verifySshsigningkeyExists(k);
  });
});

bthread("Sshsigningkey update verification", function () {
  const e = waitForAnySshsigningkeyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSshsigningkey(k), function () {
    verifySshsigningkeyUpdated(k);
  });
});

bthread("Sshsigningkey delete verification", function () {
  const e = waitForAnySshsigningkeyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSshsigningkey(k), function () {
    verifySshsigningkeyDoesNotExist(k);
  });
});

bthread("Star create verification", function () {
  const e = waitForAnyStarAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStar(k), function () {
    verifyStarExists(k);
  });
});

bthread("Star update verification", function () {
  const e = waitForAnyStarUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStar(k), function () {
    verifyStarUpdated(k);
  });
});

bthread("Star delete verification", function () {
  const e = waitForAnyStarDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStar(k), function () {
    verifyStarDoesNotExist(k);
  });
});

bthread("Stargazer create verification", function () {
  const e = waitForAnyStargazerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStargazer(k), function () {
    verifyStargazerExists(k);
  });
});

bthread("Stargazer update verification", function () {
  const e = waitForAnyStargazerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStargazer(k), function () {
    verifyStargazerUpdated(k);
  });
});

bthread("Stargazer delete verification", function () {
  const e = waitForAnyStargazerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStargazer(k), function () {
    verifyStargazerDoesNotExist(k);
  });
});

bthread("Starred create verification", function () {
  const e = waitForAnyStarredAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStarred(k), function () {
    verifyStarredExists(k);
  });
});

bthread("Starred update verification", function () {
  const e = waitForAnyStarredUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStarred(k), function () {
    verifyStarredUpdated(k);
  });
});

bthread("Starred delete verification", function () {
  const e = waitForAnyStarredDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStarred(k), function () {
    verifyStarredDoesNotExist(k);
  });
});

bthread("Start create verification", function () {
  const e = waitForAnyStartAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStart(k), function () {
    verifyStartExists(k);
  });
});

bthread("Start update verification", function () {
  const e = waitForAnyStartUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStart(k), function () {
    verifyStartUpdated(k);
  });
});

bthread("Start delete verification", function () {
  const e = waitForAnyStartDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStart(k), function () {
    verifyStartDoesNotExist(k);
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

bthread("Statu create verification", function () {
  const e = waitForAnyStatuAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatu(k), function () {
    verifyStatuExists(k);
  });
});

bthread("Statu update verification", function () {
  const e = waitForAnyStatuUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatu(k), function () {
    verifyStatuUpdated(k);
  });
});

bthread("Statu delete verification", function () {
  const e = waitForAnyStatuDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStatu(k), function () {
    verifyStatuDoesNotExist(k);
  });
});

bthread("Status create verification", function () {
  const e = waitForAnyStatusAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatus(k), function () {
    verifyStatusExists(k);
  });
});

bthread("Status update verification", function () {
  const e = waitForAnyStatusUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStatus(k), function () {
    verifyStatusUpdated(k);
  });
});

bthread("Status delete verification", function () {
  const e = waitForAnyStatusDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStatus(k), function () {
    verifyStatusDoesNotExist(k);
  });
});

bthread("Stop create verification", function () {
  const e = waitForAnyStopAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStop(k), function () {
    verifyStopExists(k);
  });
});

bthread("Stop update verification", function () {
  const e = waitForAnyStopUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStop(k), function () {
    verifyStopUpdated(k);
  });
});

bthread("Stop delete verification", function () {
  const e = waitForAnyStopDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStop(k), function () {
    verifyStopDoesNotExist(k);
  });
});

bthread("Storagerecord create verification", function () {
  const e = waitForAnyStoragerecordAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStoragerecord(k), function () {
    verifyStoragerecordExists(k);
  });
});

bthread("Storagerecord update verification", function () {
  const e = waitForAnyStoragerecordUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStoragerecord(k), function () {
    verifyStoragerecordUpdated(k);
  });
});

bthread("Storagerecord delete verification", function () {
  const e = waitForAnyStoragerecordDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStoragerecord(k), function () {
    verifyStoragerecordDoesNotExist(k);
  });
});

bthread("Stubbed create verification", function () {
  const e = waitForAnyStubbedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStubbed(k), function () {
    verifyStubbedExists(k);
  });
});

bthread("Stubbed update verification", function () {
  const e = waitForAnyStubbedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStubbed(k), function () {
    verifyStubbedUpdated(k);
  });
});

bthread("Stubbed delete verification", function () {
  const e = waitForAnyStubbedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStubbed(k), function () {
    verifyStubbedDoesNotExist(k);
  });
});

bthread("Sub create verification", function () {
  const e = waitForAnySubAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSub(k), function () {
    verifySubExists(k);
  });
});

bthread("Sub update verification", function () {
  const e = waitForAnySubUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSub(k), function () {
    verifySubUpdated(k);
  });
});

bthread("Sub delete verification", function () {
  const e = waitForAnySubDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSub(k), function () {
    verifySubDoesNotExist(k);
  });
});

bthread("Subissue create verification", function () {
  const e = waitForAnySubissueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubissue(k), function () {
    verifySubissueExists(k);
  });
});

bthread("Subissue update verification", function () {
  const e = waitForAnySubissueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubissue(k), function () {
    verifySubissueUpdated(k);
  });
});

bthread("Subissue delete verification", function () {
  const e = waitForAnySubissueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSubissue(k), function () {
    verifySubissueDoesNotExist(k);
  });
});

bthread("Subjectstat create verification", function () {
  const e = waitForAnySubjectstatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubjectstat(k), function () {
    verifySubjectstatExists(k);
  });
});

bthread("Subjectstat update verification", function () {
  const e = waitForAnySubjectstatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubjectstat(k), function () {
    verifySubjectstatUpdated(k);
  });
});

bthread("Subjectstat delete verification", function () {
  const e = waitForAnySubjectstatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSubjectstat(k), function () {
    verifySubjectstatDoesNotExist(k);
  });
});

bthread("Subscriber create verification", function () {
  const e = waitForAnySubscriberAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubscriber(k), function () {
    verifySubscriberExists(k);
  });
});

bthread("Subscriber update verification", function () {
  const e = waitForAnySubscriberUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubscriber(k), function () {
    verifySubscriberUpdated(k);
  });
});

bthread("Subscriber delete verification", function () {
  const e = waitForAnySubscriberDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSubscriber(k), function () {
    verifySubscriberDoesNotExist(k);
  });
});

bthread("Subscription create verification", function () {
  const e = waitForAnySubscriptionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubscription(k), function () {
    verifySubscriptionExists(k);
  });
});

bthread("Subscription update verification", function () {
  const e = waitForAnySubscriptionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSubscription(k), function () {
    verifySubscriptionUpdated(k);
  });
});

bthread("Subscription delete verification", function () {
  const e = waitForAnySubscriptionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSubscription(k), function () {
    verifySubscriptionDoesNotExist(k);
  });
});

bthread("Summarystat create verification", function () {
  const e = waitForAnySummarystatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSummarystat(k), function () {
    verifySummarystatExists(k);
  });
});

bthread("Summarystat update verification", function () {
  const e = waitForAnySummarystatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSummarystat(k), function () {
    verifySummarystatUpdated(k);
  });
});

bthread("Summarystat delete verification", function () {
  const e = waitForAnySummarystatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSummarystat(k), function () {
    verifySummarystatDoesNotExist(k);
  });
});

bthread("Suspended create verification", function () {
  const e = waitForAnySuspendedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSuspended(k), function () {
    verifySuspendedExists(k);
  });
});

bthread("Suspended update verification", function () {
  const e = waitForAnySuspendedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSuspended(k), function () {
    verifySuspendedUpdated(k);
  });
});

bthread("Suspended delete verification", function () {
  const e = waitForAnySuspendedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSuspended(k), function () {
    verifySuspendedDoesNotExist(k);
  });
});

bthread("Tag create verification", function () {
  const e = waitForAnyTagAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTag(k), function () {
    verifyTagExists(k);
  });
});

bthread("Tag update verification", function () {
  const e = waitForAnyTagUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTag(k), function () {
    verifyTagUpdated(k);
  });
});

bthread("Tag delete verification", function () {
  const e = waitForAnyTagDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTag(k), function () {
    verifyTagDoesNotExist(k);
  });
});

bthread("Tarball create verification", function () {
  const e = waitForAnyTarballAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTarball(k), function () {
    verifyTarballExists(k);
  });
});

bthread("Tarball update verification", function () {
  const e = waitForAnyTarballUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTarball(k), function () {
    verifyTarballUpdated(k);
  });
});

bthread("Tarball delete verification", function () {
  const e = waitForAnyTarballDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTarball(k), function () {
    verifyTarballDoesNotExist(k);
  });
});

bthread("Team create verification", function () {
  const e = waitForAnyTeamAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTeam(k), function () {
    verifyTeamExists(k);
  });
});

bthread("Team update verification", function () {
  const e = waitForAnyTeamUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTeam(k), function () {
    verifyTeamUpdated(k);
  });
});

bthread("Team delete verification", function () {
  const e = waitForAnyTeamDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTeam(k), function () {
    verifyTeamDoesNotExist(k);
  });
});

bthread("Template create verification", function () {
  const e = waitForAnyTemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTemplate(k), function () {
    verifyTemplateExists(k);
  });
});

bthread("Template update verification", function () {
  const e = waitForAnyTemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTemplate(k), function () {
    verifyTemplateUpdated(k);
  });
});

bthread("Template delete verification", function () {
  const e = waitForAnyTemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTemplate(k), function () {
    verifyTemplateDoesNotExist(k);
  });
});

bthread("Test create verification", function () {
  const e = waitForAnyTestAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTest(k), function () {
    verifyTestExists(k);
  });
});

bthread("Test update verification", function () {
  const e = waitForAnyTestUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTest(k), function () {
    verifyTestUpdated(k);
  });
});

bthread("Test delete verification", function () {
  const e = waitForAnyTestDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTest(k), function () {
    verifyTestDoesNotExist(k);
  });
});

bthread("Thread create verification", function () {
  const e = waitForAnyThreadAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteThread(k), function () {
    verifyThreadExists(k);
  });
});

bthread("Thread update verification", function () {
  const e = waitForAnyThreadUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteThread(k), function () {
    verifyThreadUpdated(k);
  });
});

bthread("Thread delete verification", function () {
  const e = waitForAnyThreadDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddThread(k), function () {
    verifyThreadDoesNotExist(k);
  });
});

bthread("Timeline create verification", function () {
  const e = waitForAnyTimelineAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTimeline(k), function () {
    verifyTimelineExists(k);
  });
});

bthread("Timeline update verification", function () {
  const e = waitForAnyTimelineUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTimeline(k), function () {
    verifyTimelineUpdated(k);
  });
});

bthread("Timeline delete verification", function () {
  const e = waitForAnyTimelineDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTimeline(k), function () {
    verifyTimelineDoesNotExist(k);
  });
});

bthread("Timestat create verification", function () {
  const e = waitForAnyTimestatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTimestat(k), function () {
    verifyTimestatExists(k);
  });
});

bthread("Timestat update verification", function () {
  const e = waitForAnyTimestatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTimestat(k), function () {
    verifyTimestatUpdated(k);
  });
});

bthread("Timestat delete verification", function () {
  const e = waitForAnyTimestatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTimestat(k), function () {
    verifyTimestatDoesNotExist(k);
  });
});

bthread("Timing create verification", function () {
  const e = waitForAnyTimingAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTiming(k), function () {
    verifyTimingExists(k);
  });
});

bthread("Timing update verification", function () {
  const e = waitForAnyTimingUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTiming(k), function () {
    verifyTimingUpdated(k);
  });
});

bthread("Timing delete verification", function () {
  const e = waitForAnyTimingDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTiming(k), function () {
    verifyTimingDoesNotExist(k);
  });
});

bthread("Token create verification", function () {
  const e = waitForAnyTokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteToken(k), function () {
    verifyTokenExists(k);
  });
});

bthread("Token update verification", function () {
  const e = waitForAnyTokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteToken(k), function () {
    verifyTokenUpdated(k);
  });
});

bthread("Token delete verification", function () {
  const e = waitForAnyTokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddToken(k), function () {
    verifyTokenDoesNotExist(k);
  });
});

bthread("Topic create verification", function () {
  const e = waitForAnyTopicAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTopic(k), function () {
    verifyTopicExists(k);
  });
});

bthread("Topic update verification", function () {
  const e = waitForAnyTopicUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTopic(k), function () {
    verifyTopicUpdated(k);
  });
});

bthread("Topic delete verification", function () {
  const e = waitForAnyTopicDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTopic(k), function () {
    verifyTopicDoesNotExist(k);
  });
});

bthread("Traffic create verification", function () {
  const e = waitForAnyTrafficAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTraffic(k), function () {
    verifyTrafficExists(k);
  });
});

bthread("Traffic update verification", function () {
  const e = waitForAnyTrafficUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTraffic(k), function () {
    verifyTrafficUpdated(k);
  });
});

bthread("Traffic delete verification", function () {
  const e = waitForAnyTrafficDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTraffic(k), function () {
    verifyTrafficDoesNotExist(k);
  });
});

bthread("Transfer create verification", function () {
  const e = waitForAnyTransferAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTransfer(k), function () {
    verifyTransferExists(k);
  });
});

bthread("Transfer update verification", function () {
  const e = waitForAnyTransferUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTransfer(k), function () {
    verifyTransferUpdated(k);
  });
});

bthread("Transfer delete verification", function () {
  const e = waitForAnyTransferDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTransfer(k), function () {
    verifyTransferDoesNotExist(k);
  });
});

bthread("Tree create verification", function () {
  const e = waitForAnyTreeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTree(k), function () {
    verifyTreeExists(k);
  });
});

bthread("Tree update verification", function () {
  const e = waitForAnyTreeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTree(k), function () {
    verifyTreeUpdated(k);
  });
});

bthread("Tree delete verification", function () {
  const e = waitForAnyTreeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTree(k), function () {
    verifyTreeDoesNotExist(k);
  });
});

bthread("Updatebranch create verification", function () {
  const e = waitForAnyUpdatebranchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpdatebranch(k), function () {
    verifyUpdatebranchExists(k);
  });
});

bthread("Updatebranch update verification", function () {
  const e = waitForAnyUpdatebranchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpdatebranch(k), function () {
    verifyUpdatebranchUpdated(k);
  });
});

bthread("Updatebranch delete verification", function () {
  const e = waitForAnyUpdatebranchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUpdatebranch(k), function () {
    verifyUpdatebranchDoesNotExist(k);
  });
});

bthread("Usage create verification", function () {
  const e = waitForAnyUsageAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsage(k), function () {
    verifyUsageExists(k);
  });
});

bthread("Usage update verification", function () {
  const e = waitForAnyUsageUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsage(k), function () {
    verifyUsageUpdated(k);
  });
});

bthread("Usage delete verification", function () {
  const e = waitForAnyUsageDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsage(k), function () {
    verifyUsageDoesNotExist(k);
  });
});

bthread("Usagebyrepository create verification", function () {
  const e = waitForAnyUsagebyrepositoryAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsagebyrepository(k), function () {
    verifyUsagebyrepositoryExists(k);
  });
});

bthread("Usagebyrepository update verification", function () {
  const e = waitForAnyUsagebyrepositoryUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUsagebyrepository(k), function () {
    verifyUsagebyrepositoryUpdated(k);
  });
});

bthread("Usagebyrepository delete verification", function () {
  const e = waitForAnyUsagebyrepositoryDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUsagebyrepository(k), function () {
    verifyUsagebyrepositoryDoesNotExist(k);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUser(k), function () {
    verifyUserExists(k);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUser(k), function () {
    verifyUserUpdated(k);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUser(k), function () {
    verifyUserDoesNotExist(k);
  });
});

bthread("Userstat create verification", function () {
  const e = waitForAnyUserstatAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserstat(k), function () {
    verifyUserstatExists(k);
  });
});

bthread("Userstat update verification", function () {
  const e = waitForAnyUserstatUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserstat(k), function () {
    verifyUserstatUpdated(k);
  });
});

bthread("Userstat delete verification", function () {
  const e = waitForAnyUserstatDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserstat(k), function () {
    verifyUserstatDoesNotExist(k);
  });
});

bthread("Value create verification", function () {
  const e = waitForAnyValueAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValue(k), function () {
    verifyValueExists(k);
  });
});

bthread("Value update verification", function () {
  const e = waitForAnyValueUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValue(k), function () {
    verifyValueUpdated(k);
  });
});

bthread("Value delete verification", function () {
  const e = waitForAnyValueDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddValue(k), function () {
    verifyValueDoesNotExist(k);
  });
});

bthread("Variable create verification", function () {
  const e = waitForAnyVariableAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVariable(k), function () {
    verifyVariableExists(k);
  });
});

bthread("Variable update verification", function () {
  const e = waitForAnyVariableUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVariable(k), function () {
    verifyVariableUpdated(k);
  });
});

bthread("Variable delete verification", function () {
  const e = waitForAnyVariableDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVariable(k), function () {
    verifyVariableDoesNotExist(k);
  });
});

bthread("Variantanalys create verification", function () {
  const e = waitForAnyVariantanalysAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVariantanalys(k), function () {
    verifyVariantanalysExists(k);
  });
});

bthread("Variantanalys update verification", function () {
  const e = waitForAnyVariantanalysUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVariantanalys(k), function () {
    verifyVariantanalysUpdated(k);
  });
});

bthread("Variantanalys delete verification", function () {
  const e = waitForAnyVariantanalysDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVariantanalys(k), function () {
    verifyVariantanalysDoesNotExist(k);
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

bthread("View create verification", function () {
  const e = waitForAnyViewAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteView(k), function () {
    verifyViewExists(k);
  });
});

bthread("View update verification", function () {
  const e = waitForAnyViewUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteView(k), function () {
    verifyViewUpdated(k);
  });
});

bthread("View delete verification", function () {
  const e = waitForAnyViewDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddView(k), function () {
    verifyViewDoesNotExist(k);
  });
});

bthread("Visibility create verification", function () {
  const e = waitForAnyVisibilityAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVisibility(k), function () {
    verifyVisibilityExists(k);
  });
});

bthread("Visibility update verification", function () {
  const e = waitForAnyVisibilityUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVisibility(k), function () {
    verifyVisibilityUpdated(k);
  });
});

bthread("Visibility delete verification", function () {
  const e = waitForAnyVisibilityDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVisibility(k), function () {
    verifyVisibilityDoesNotExist(k);
  });
});

bthread("Vulnerabilityalert create verification", function () {
  const e = waitForAnyVulnerabilityalertAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVulnerabilityalert(k), function () {
    verifyVulnerabilityalertExists(k);
  });
});

bthread("Vulnerabilityalert update verification", function () {
  const e = waitForAnyVulnerabilityalertUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteVulnerabilityalert(k), function () {
    verifyVulnerabilityalertUpdated(k);
  });
});

bthread("Vulnerabilityalert delete verification", function () {
  const e = waitForAnyVulnerabilityalertDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddVulnerabilityalert(k), function () {
    verifyVulnerabilityalertDoesNotExist(k);
  });
});

bthread("Workflow create verification", function () {
  const e = waitForAnyWorkflowAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkflow(k), function () {
    verifyWorkflowExists(k);
  });
});

bthread("Workflow update verification", function () {
  const e = waitForAnyWorkflowUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWorkflow(k), function () {
    verifyWorkflowUpdated(k);
  });
});

bthread("Workflow delete verification", function () {
  const e = waitForAnyWorkflowDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWorkflow(k), function () {
    verifyWorkflowDoesNotExist(k);
  });
});

bthread("Zen create verification", function () {
  const e = waitForAnyZenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteZen(k), function () {
    verifyZenExists(k);
  });
});

bthread("Zen update verification", function () {
  const e = waitForAnyZenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteZen(k), function () {
    verifyZenUpdated(k);
  });
});

bthread("Zen delete verification", function () {
  const e = waitForAnyZenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddZen(k), function () {
    verifyZenDoesNotExist(k);
  });
});

bthread("Zipball create verification", function () {
  const e = waitForAnyZipballAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteZipball(k), function () {
    verifyZipballExists(k);
  });
});

bthread("Zipball update verification", function () {
  const e = waitForAnyZipballUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteZipball(k), function () {
    verifyZipballUpdated(k);
  });
});

bthread("Zipball delete verification", function () {
  const e = waitForAnyZipballDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddZipball(k), function () {
    verifyZipballDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Acceptedassignment", function () {
  const x = waitForAnyAcceptedassignmentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAcceptedassignment(k, ANY), function () {});
});

bthread("Guard: Unique Acces", function () {
  const x = waitForAnyAccesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAcces(k, ANY), function () {});
});

bthread("Guard: Unique Accesstoken", function () {
  const x = waitForAnyAccesstokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccesstoken(k, ANY), function () {});
});

bthread("Guard: Unique Account", function () {
  const x = waitForAnyAccountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccount(k, ANY), function () {});
});

bthread("Guard: Unique Action", function () {
  const x = waitForAnyActionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAction(k, ANY), function () {});
});

bthread("Guard: Unique Activity", function () {
  const x = waitForAnyActivityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddActivity(k, ANY), function () {});
});

bthread("Guard: Unique Add", function () {
  const x = waitForAnyAddAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAdd(k, ANY), function () {});
});

bthread("Guard: Unique Advisory", function () {
  const x = waitForAnyAdvisoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAdvisory(k, ANY), function () {});
});

bthread("Guard: Unique Alert", function () {
  const x = waitForAnyAlertAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAlert(k, ANY), function () {});
});

bthread("Guard: Unique Analys", function () {
  const x = waitForAnyAnalysAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAnalys(k, ANY), function () {});
});

bthread("Guard: Unique Annotation", function () {
  const x = waitForAnyAnnotationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAnnotation(k, ANY), function () {});
});

bthread("Guard: Unique Api", function () {
  const x = waitForAnyApiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApi(k, ANY), function () {});
});

bthread("Guard: Unique App", function () {
  const x = waitForAnyAppAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApp(k, ANY), function () {});
});

bthread("Guard: Unique Application", function () {
  const x = waitForAnyApplicationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApplication(k, ANY), function () {});
});

bthread("Guard: Unique Appmanifest", function () {
  const x = waitForAnyAppmanifestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAppmanifest(k, ANY), function () {});
});

bthread("Guard: Unique Approval", function () {
  const x = waitForAnyApprovalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApproval(k, ANY), function () {});
});

bthread("Guard: Unique Approve", function () {
  const x = waitForAnyApproveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApprove(k, ANY), function () {});
});

bthread("Guard: Unique Archive", function () {
  const x = waitForAnyArchiveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddArchive(k, ANY), function () {});
});

bthread("Guard: Unique Artifact", function () {
  const x = waitForAnyArtifactAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddArtifact(k, ANY), function () {});
});

bthread("Guard: Unique Artifactandlogretention", function () {
  const x = waitForAnyArtifactandlogretentionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddArtifactandlogretention(k, ANY), function () {});
});

bthread("Guard: Unique Asset", function () {
  const x = waitForAnyAssetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAsset(k, ANY), function () {});
});

bthread("Guard: Unique Assignee", function () {
  const x = waitForAnyAssigneeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAssignee(k, ANY), function () {});
});

bthread("Guard: Unique Assignment", function () {
  const x = waitForAnyAssignmentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAssignment(k, ANY), function () {});
});

bthread("Guard: Unique Attach", function () {
  const x = waitForAnyAttachAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAttach(k, ANY), function () {});
});

bthread("Guard: Unique Attempt", function () {
  const x = waitForAnyAttemptAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAttempt(k, ANY), function () {});
});

bthread("Guard: Unique Attestation", function () {
  const x = waitForAnyAttestationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAttestation(k, ANY), function () {});
});

bthread("Guard: Unique Author", function () {
  const x = waitForAnyAuthorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAuthor(k, ANY), function () {});
});

bthread("Guard: Unique Autofix", function () {
  const x = waitForAnyAutofixAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAutofix(k, ANY), function () {});
});

bthread("Guard: Unique Autolink", function () {
  const x = waitForAnyAutolinkAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAutolink(k, ANY), function () {});
});

bthread("Guard: Unique Automatedsecurityfixe", function () {
  const x = waitForAnyAutomatedsecurityfixeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAutomatedsecurityfixe(k, ANY), function () {});
});

bthread("Guard: Unique Billing", function () {
  const x = waitForAnyBillingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBilling(k, ANY), function () {});
});

bthread("Guard: Unique Blob", function () {
  const x = waitForAnyBlobAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBlob(k, ANY), function () {});
});

bthread("Guard: Unique Block", function () {
  const x = waitForAnyBlockAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBlock(k, ANY), function () {});
});

bthread("Guard: Unique Blockedby", function () {
  const x = waitForAnyBlockedbyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBlockedby(k, ANY), function () {});
});

bthread("Guard: Unique Blocking", function () {
  const x = waitForAnyBlockingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBlocking(k, ANY), function () {});
});

bthread("Guard: Unique Branche", function () {
  const x = waitForAnyBrancheAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBranche(k, ANY), function () {});
});

bthread("Guard: Unique Brancheswherehead", function () {
  const x = waitForAnyBrancheswhereheadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBrancheswherehead(k, ANY), function () {});
});

bthread("Guard: Unique Build", function () {
  const x = waitForAnyBuildAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBuild(k, ANY), function () {});
});

bthread("Guard: Unique Bulklist", function () {
  const x = waitForAnyBulklistAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBulklist(k, ANY), function () {});
});

bthread("Guard: Unique Cache", function () {
  const x = waitForAnyCacheAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCache(k, ANY), function () {});
});

bthread("Guard: Unique Campaign", function () {
  const x = waitForAnyCampaignAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCampaign(k, ANY), function () {});
});

bthread("Guard: Unique Cancel", function () {
  const x = waitForAnyCancelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCancel(k, ANY), function () {});
});

bthread("Guard: Unique Checkrun", function () {
  const x = waitForAnyCheckrunAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCheckrun(k, ANY), function () {});
});

bthread("Guard: Unique Checksuite", function () {
  const x = waitForAnyChecksuiteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddChecksuite(k, ANY), function () {});
});

bthread("Guard: Unique Classroom", function () {
  const x = waitForAnyClassroomAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClassroom(k, ANY), function () {});
});

bthread("Guard: Unique Clone", function () {
  const x = waitForAnyCloneAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddClone(k, ANY), function () {});
});

bthread("Guard: Unique Code", function () {
  const x = waitForAnyCodeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCode(k, ANY), function () {});
});

bthread("Guard: Unique Codefrequency", function () {
  const x = waitForAnyCodefrequencyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodefrequency(k, ANY), function () {});
});

bthread("Guard: Unique Codeowner", function () {
  const x = waitForAnyCodeownerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodeowner(k, ANY), function () {});
});

bthread("Guard: Unique Codeql", function () {
  const x = waitForAnyCodeqlAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodeql(k, ANY), function () {});
});

bthread("Guard: Unique Codescanning", function () {
  const x = waitForAnyCodescanningAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodescanning(k, ANY), function () {});
});

bthread("Guard: Unique Codesecurity", function () {
  const x = waitForAnyCodesecurityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodesecurity(k, ANY), function () {});
});

bthread("Guard: Unique Codesecurityconfiguration", function () {
  const x = waitForAnyCodesecurityconfigurationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodesecurityconfiguration(k, ANY), function () {});
});

bthread("Guard: Unique Codesofconduct", function () {
  const x = waitForAnyCodesofconductAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodesofconduct(k, ANY), function () {});
});

bthread("Guard: Unique Codespace", function () {
  const x = waitForAnyCodespaceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCodespace(k, ANY), function () {});
});

bthread("Guard: Unique Collaborator", function () {
  const x = waitForAnyCollaboratorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCollaborator(k, ANY), function () {});
});

bthread("Guard: Unique Column", function () {
  const x = waitForAnyColumnAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddColumn(k, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddComment(k, ANY), function () {});
});

bthread("Guard: Unique Commit", function () {
  const x = waitForAnyCommitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCommit(k, ANY), function () {});
});

bthread("Guard: Unique Commitactivity", function () {
  const x = waitForAnyCommitactivityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCommitactivity(k, ANY), function () {});
});

bthread("Guard: Unique Community", function () {
  const x = waitForAnyCommunityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCommunity(k, ANY), function () {});
});

bthread("Guard: Unique Compare", function () {
  const x = waitForAnyCompareAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCompare(k, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConfig(k, ANY), function () {});
});

bthread("Guard: Unique Configuration", function () {
  const x = waitForAnyConfigurationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConfiguration(k, ANY), function () {});
});

bthread("Guard: Unique Conflict", function () {
  const x = waitForAnyConflictAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConflict(k, ANY), function () {});
});

bthread("Guard: Unique Content", function () {
  const x = waitForAnyContentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddContent(k, ANY), function () {});
});

bthread("Guard: Unique Context", function () {
  const x = waitForAnyContextAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddContext(k, ANY), function () {});
});

bthread("Guard: Unique Contributor", function () {
  const x = waitForAnyContributorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddContributor(k, ANY), function () {});
});

bthread("Guard: Unique Conversion", function () {
  const x = waitForAnyConversionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddConversion(k, ANY), function () {});
});

bthread("Guard: Unique Copilot", function () {
  const x = waitForAnyCopilotAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCopilot(k, ANY), function () {});
});

bthread("Guard: Unique Credential", function () {
  const x = waitForAnyCredentialAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCredential(k, ANY), function () {});
});

bthread("Guard: Unique Customization", function () {
  const x = waitForAnyCustomizationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCustomization(k, ANY), function () {});
});

bthread("Guard: Unique Cve", function () {
  const x = waitForAnyCveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCve(k, ANY), function () {});
});

bthread("Guard: Unique Databas", function () {
  const x = waitForAnyDatabasAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDatabas(k, ANY), function () {});
});

bthread("Guard: Unique Default", function () {
  const x = waitForAnyDefaultAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefault(k, ANY), function () {});
});

bthread("Guard: Unique Defaultlevel", function () {
  const x = waitForAnyDefaultlevelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultlevel(k, ANY), function () {});
});

bthread("Guard: Unique Defaultsetup", function () {
  const x = waitForAnyDefaultsetupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDefaultsetup(k, ANY), function () {});
});

bthread("Guard: Unique Deleterequest", function () {
  const x = waitForAnyDeleterequestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeleterequest(k, ANY), function () {});
});

bthread("Guard: Unique Delivery", function () {
  const x = waitForAnyDeliveryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDelivery(k, ANY), function () {});
});

bthread("Guard: Unique Dependabot", function () {
  const x = waitForAnyDependabotAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDependabot(k, ANY), function () {});
});

bthread("Guard: Unique Dependency", function () {
  const x = waitForAnyDependencyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDependency(k, ANY), function () {});
});

bthread("Guard: Unique Dependencygraph", function () {
  const x = waitForAnyDependencygraphAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDependencygraph(k, ANY), function () {});
});

bthread("Guard: Unique Deployment", function () {
  const x = waitForAnyDeploymentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeployment(k, ANY), function () {});
});

bthread("Guard: Unique Deploymentbranchpolicy", function () {
  const x = waitForAnyDeploymentbranchpolicyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeploymentbranchpolicy(k, ANY), function () {});
});

bthread("Guard: Unique Deploymentprotectionrule", function () {
  const x = waitForAnyDeploymentprotectionruleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeploymentprotectionrule(k, ANY), function () {});
});

bthread("Guard: Unique Detach", function () {
  const x = waitForAnyDetachAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDetach(k, ANY), function () {});
});

bthread("Guard: Unique Devcontainer", function () {
  const x = waitForAnyDevcontainerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDevcontainer(k, ANY), function () {});
});

bthread("Guard: Unique Digest", function () {
  const x = waitForAnyDigestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDigest(k, ANY), function () {});
});

bthread("Guard: Unique Disable", function () {
  const x = waitForAnyDisableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDisable(k, ANY), function () {});
});

bthread("Guard: Unique Discussion", function () {
  const x = waitForAnyDiscussionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDiscussion(k, ANY), function () {});
});

bthread("Guard: Unique Dismissal", function () {
  const x = waitForAnyDismissalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDismissal(k, ANY), function () {});
});

bthread("Guard: Unique Dispatche", function () {
  const x = waitForAnyDispatcheAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDispatche(k, ANY), function () {});
});

bthread("Guard: Unique Docker", function () {
  const x = waitForAnyDockerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDocker(k, ANY), function () {});
});

bthread("Guard: Unique Download", function () {
  const x = waitForAnyDownloadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDownload(k, ANY), function () {});
});

bthread("Guard: Unique Email", function () {
  const x = waitForAnyEmailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmail(k, ANY), function () {});
});

bthread("Guard: Unique Emoji", function () {
  const x = waitForAnyEmojiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmoji(k, ANY), function () {});
});

bthread("Guard: Unique Enable", function () {
  const x = waitForAnyEnableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEnable(k, ANY), function () {});
});

bthread("Guard: Unique Enforceadmin", function () {
  const x = waitForAnyEnforceadminAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEnforceadmin(k, ANY), function () {});
});

bthread("Guard: Unique Enterpris", function () {
  const x = waitForAnyEnterprisAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEnterpris(k, ANY), function () {});
});

bthread("Guard: Unique Environment", function () {
  const x = waitForAnyEnvironmentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEnvironment(k, ANY), function () {});
});

bthread("Guard: Unique Error", function () {
  const x = waitForAnyErrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddError(k, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEvent(k, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddExport(k, ANY), function () {});
});

bthread("Guard: Unique Failedinvitation", function () {
  const x = waitForAnyFailedinvitationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFailedinvitation(k, ANY), function () {});
});

bthread("Guard: Unique Feed", function () {
  const x = waitForAnyFeedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFeed(k, ANY), function () {});
});

bthread("Guard: Unique Field", function () {
  const x = waitForAnyFieldAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddField(k, ANY), function () {});
});

bthread("Guard: Unique File", function () {
  const x = waitForAnyFileAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFile(k, ANY), function () {});
});

bthread("Guard: Unique Follower", function () {
  const x = waitForAnyFollowerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFollower(k, ANY), function () {});
});

bthread("Guard: Unique Following", function () {
  const x = waitForAnyFollowingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFollowing(k, ANY), function () {});
});

bthread("Guard: Unique Forcecancel", function () {
  const x = waitForAnyForcecancelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddForcecancel(k, ANY), function () {});
});

bthread("Guard: Unique Fork", function () {
  const x = waitForAnyForkAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFork(k, ANY), function () {});
});

bthread("Guard: Unique Forkprcontributorapproval", function () {
  const x = waitForAnyForkprcontributorapprovalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddForkprcontributorapproval(k, ANY), function () {});
});

bthread("Guard: Unique Forkprworkflowsprivaterepo", function () {
  const x = waitForAnyForkprworkflowsprivaterepoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddForkprworkflowsprivaterepo(k, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGenerate(k, ANY), function () {});
});

bthread("Guard: Unique Generatejitconfig", function () {
  const x = waitForAnyGeneratejitconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGeneratejitconfig(k, ANY), function () {});
});

bthread("Guard: Unique Generatenote", function () {
  const x = waitForAnyGeneratenoteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGeneratenote(k, ANY), function () {});
});

bthread("Guard: Unique Gist", function () {
  const x = waitForAnyGistAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGist(k, ANY), function () {});
});

bthread("Guard: Unique Git", function () {
  const x = waitForAnyGitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGit(k, ANY), function () {});
});

bthread("Guard: Unique Githubowned", function () {
  const x = waitForAnyGithubownedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGithubowned(k, ANY), function () {});
});

bthread("Guard: Unique Gitignore", function () {
  const x = waitForAnyGitignoreAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGitignore(k, ANY), function () {});
});

bthread("Guard: Unique Gpgkey", function () {
  const x = waitForAnyGpgkeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGpgkey(k, ANY), function () {});
});

bthread("Guard: Unique Grade", function () {
  const x = waitForAnyGradeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGrade(k, ANY), function () {});
});

bthread("Guard: Unique Grant", function () {
  const x = waitForAnyGrantAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGrant(k, ANY), function () {});
});

bthread("Guard: Unique Health", function () {
  const x = waitForAnyHealthAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHealth(k, ANY), function () {});
});

bthread("Guard: Unique History", function () {
  const x = waitForAnyHistoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHistory(k, ANY), function () {});
});

bthread("Guard: Unique Hook", function () {
  const x = waitForAnyHookAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHook(k, ANY), function () {});
});

bthread("Guard: Unique Hostedrunner", function () {
  const x = waitForAnyHostedrunnerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHostedrunner(k, ANY), function () {});
});

bthread("Guard: Unique Hovercard", function () {
  const x = waitForAnyHovercardAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHovercard(k, ANY), function () {});
});

bthread("Guard: Unique Image", function () {
  const x = waitForAnyImageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddImage(k, ANY), function () {});
});

bthread("Guard: Unique Immutablereleas", function () {
  const x = waitForAnyImmutablereleasAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddImmutablereleas(k, ANY), function () {});
});

bthread("Guard: Unique Import", function () {
  const x = waitForAnyImportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddImport(k, ANY), function () {});
});

bthread("Guard: Unique Insight", function () {
  const x = waitForAnyInsightAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInsight(k, ANY), function () {});
});

bthread("Guard: Unique Installation", function () {
  const x = waitForAnyInstallationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInstallation(k, ANY), function () {});
});

bthread("Guard: Unique Installationrequest", function () {
  const x = waitForAnyInstallationrequestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInstallationrequest(k, ANY), function () {});
});

bthread("Guard: Unique Instance", function () {
  const x = waitForAnyInstanceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInstance(k, ANY), function () {});
});

bthread("Guard: Unique Interactionlimit", function () {
  const x = waitForAnyInteractionlimitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInteractionlimit(k, ANY), function () {});
});

bthread("Guard: Unique Invitation", function () {
  const x = waitForAnyInvitationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInvitation(k, ANY), function () {});
});

bthread("Guard: Unique Issue", function () {
  const x = waitForAnyIssueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssue(k, ANY), function () {});
});

bthread("Guard: Unique Issuetype", function () {
  const x = waitForAnyIssuetypeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuetype(k, ANY), function () {});
});

bthread("Guard: Unique Item", function () {
  const x = waitForAnyItemAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddItem(k, ANY), function () {});
});

bthread("Guard: Unique Job", function () {
  const x = waitForAnyJobAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddJob(k, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddKey(k, ANY), function () {});
});

bthread("Guard: Unique Label", function () {
  const x = waitForAnyLabelAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLabel(k, ANY), function () {});
});

bthread("Guard: Unique Language", function () {
  const x = waitForAnyLanguageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLanguage(k, ANY), function () {});
});

bthread("Guard: Unique Largefile", function () {
  const x = waitForAnyLargefileAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLargefile(k, ANY), function () {});
});

bthread("Guard: Unique Latest", function () {
  const x = waitForAnyLatestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLatest(k, ANY), function () {});
});

bthread("Guard: Unique Lf", function () {
  const x = waitForAnyLfAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLf(k, ANY), function () {});
});

bthread("Guard: Unique Licens", function () {
  const x = waitForAnyLicensAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLicens(k, ANY), function () {});
});

bthread("Guard: Unique License", function () {
  const x = waitForAnyLicenseAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLicense(k, ANY), function () {});
});

bthread("Guard: Unique Limit", function () {
  const x = waitForAnyLimitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLimit(k, ANY), function () {});
});

bthread("Guard: Unique Location", function () {
  const x = waitForAnyLocationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLocation(k, ANY), function () {});
});

bthread("Guard: Unique Lock", function () {
  const x = waitForAnyLockAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLock(k, ANY), function () {});
});

bthread("Guard: Unique Log", function () {
  const x = waitForAnyLogAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLog(k, ANY), function () {});
});

bthread("Guard: Unique Machine", function () {
  const x = waitForAnyMachineAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMachine(k, ANY), function () {});
});

bthread("Guard: Unique Machinesize", function () {
  const x = waitForAnyMachinesizeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMachinesize(k, ANY), function () {});
});

bthread("Guard: Unique Markdown", function () {
  const x = waitForAnyMarkdownAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMarkdown(k, ANY), function () {});
});

bthread("Guard: Unique Marketplacelisting", function () {
  const x = waitForAnyMarketplacelistingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMarketplacelisting(k, ANY), function () {});
});

bthread("Guard: Unique Marketplacepurchas", function () {
  const x = waitForAnyMarketplacepurchasAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMarketplacepurchas(k, ANY), function () {});
});

bthread("Guard: Unique Matchingref", function () {
  const x = waitForAnyMatchingrefAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMatchingref(k, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMember(k, ANY), function () {});
});

bthread("Guard: Unique Membership", function () {
  const x = waitForAnyMembershipAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMembership(k, ANY), function () {});
});

bthread("Guard: Unique Merge", function () {
  const x = waitForAnyMergeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMerge(k, ANY), function () {});
});

bthread("Guard: Unique Mergeupstream", function () {
  const x = waitForAnyMergeupstreamAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMergeupstream(k, ANY), function () {});
});

bthread("Guard: Unique Meta", function () {
  const x = waitForAnyMetaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMeta(k, ANY), function () {});
});

bthread("Guard: Unique Metadata", function () {
  const x = waitForAnyMetadataAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMetadata(k, ANY), function () {});
});

bthread("Guard: Unique Metric", function () {
  const x = waitForAnyMetricAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMetric(k, ANY), function () {});
});

bthread("Guard: Unique Migration", function () {
  const x = waitForAnyMigrationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMigration(k, ANY), function () {});
});

bthread("Guard: Unique Milestone", function () {
  const x = waitForAnyMilestoneAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMilestone(k, ANY), function () {});
});

bthread("Guard: Unique Move", function () {
  const x = waitForAnyMoveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMove(k, ANY), function () {});
});

bthread("Guard: Unique Network", function () {
  const x = waitForAnyNetworkAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNetwork(k, ANY), function () {});
});

bthread("Guard: Unique Networkconfiguration", function () {
  const x = waitForAnyNetworkconfigurationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNetworkconfiguration(k, ANY), function () {});
});

bthread("Guard: Unique Networksetting", function () {
  const x = waitForAnyNetworksettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNetworksetting(k, ANY), function () {});
});

bthread("Guard: Unique New", function () {
  const x = waitForAnyNewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNew(k, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotification(k, ANY), function () {});
});

bthread("Guard: Unique Octocat", function () {
  const x = waitForAnyOctocatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOctocat(k, ANY), function () {});
});

bthread("Guard: Unique Oidc", function () {
  const x = waitForAnyOidcAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOidc(k, ANY), function () {});
});

bthread("Guard: Unique Org", function () {
  const x = waitForAnyOrgAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrg(k, ANY), function () {});
});

bthread("Guard: Unique Organization", function () {
  const x = waitForAnyOrganizationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganization(k, ANY), function () {});
});

bthread("Guard: Unique Organizationrole", function () {
  const x = waitForAnyOrganizationroleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationrole(k, ANY), function () {});
});

bthread("Guard: Unique Organizationsecret", function () {
  const x = waitForAnyOrganizationsecretAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationsecret(k, ANY), function () {});
});

bthread("Guard: Unique Organizationvariable", function () {
  const x = waitForAnyOrganizationvariableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrganizationvariable(k, ANY), function () {});
});

bthread("Guard: Unique Outsidecollaborator", function () {
  const x = waitForAnyOutsidecollaboratorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOutsidecollaborator(k, ANY), function () {});
});

bthread("Guard: Unique Package", function () {
  const x = waitForAnyPackageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPackage(k, ANY), function () {});
});

bthread("Guard: Unique Page", function () {
  const x = waitForAnyPageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPage(k, ANY), function () {});
});

bthread("Guard: Unique Parent", function () {
  const x = waitForAnyParentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddParent(k, ANY), function () {});
});

bthread("Guard: Unique Participation", function () {
  const x = waitForAnyParticipationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddParticipation(k, ANY), function () {});
});

bthread("Guard: Unique Partner", function () {
  const x = waitForAnyPartnerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPartner(k, ANY), function () {});
});

bthread("Guard: Unique Path", function () {
  const x = waitForAnyPathAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPath(k, ANY), function () {});
});

bthread("Guard: Unique Patternconfiguration", function () {
  const x = waitForAnyPatternconfigurationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPatternconfiguration(k, ANY), function () {});
});

bthread("Guard: Unique Pendingdeployment", function () {
  const x = waitForAnyPendingdeploymentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPendingdeployment(k, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermission(k, ANY), function () {});
});

bthread("Guard: Unique Permissionscheck", function () {
  const x = waitForAnyPermissionscheckAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermissionscheck(k, ANY), function () {});
});

bthread("Guard: Unique Personalaccesstoken", function () {
  const x = waitForAnyPersonalaccesstokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPersonalaccesstoken(k, ANY), function () {});
});

bthread("Guard: Unique Personalaccesstokenrequest", function () {
  const x = waitForAnyPersonalaccesstokenrequestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPersonalaccesstokenrequest(k, ANY), function () {});
});

bthread("Guard: Unique Ping", function () {
  const x = waitForAnyPingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPing(k, ANY), function () {});
});

bthread("Guard: Unique Plan", function () {
  const x = waitForAnyPlanAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPlan(k, ANY), function () {});
});

bthread("Guard: Unique Platform", function () {
  const x = waitForAnyPlatformAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPlatform(k, ANY), function () {});
});

bthread("Guard: Unique Popular", function () {
  const x = waitForAnyPopularAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPopular(k, ANY), function () {});
});

bthread("Guard: Unique Preference", function () {
  const x = waitForAnyPreferenceAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPreference(k, ANY), function () {});
});

bthread("Guard: Unique Premiumrequest", function () {
  const x = waitForAnyPremiumrequestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPremiumrequest(k, ANY), function () {});
});

bthread("Guard: Unique Priority", function () {
  const x = waitForAnyPriorityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPriority(k, ANY), function () {});
});

bthread("Guard: Unique Privateregistry", function () {
  const x = waitForAnyPrivateregistryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrivateregistry(k, ANY), function () {});
});

bthread("Guard: Unique Privatevulnerabilityreporting", function () {
  const x = waitForAnyPrivatevulnerabilityreportingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPrivatevulnerabilityreporting(k, ANY), function () {});
});

bthread("Guard: Unique Profile", function () {
  const x = waitForAnyProfileAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProfile(k, ANY), function () {});
});

bthread("Guard: Unique Project", function () {
  const x = waitForAnyProjectAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProject(k, ANY), function () {});
});

bthread("Guard: Unique Projectsv2", function () {
  const x = waitForAnyProjectsv2Added();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProjectsv2(k, ANY), function () {});
});

bthread("Guard: Unique Property", function () {
  const x = waitForAnyPropertyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProperty(k, ANY), function () {});
});

bthread("Guard: Unique Protection", function () {
  const x = waitForAnyProtectionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddProtection(k, ANY), function () {});
});

bthread("Guard: Unique Public", function () {
  const x = waitForAnyPublicAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPublic(k, ANY), function () {});
});

bthread("Guard: Unique Publicemail", function () {
  const x = waitForAnyPublicemailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPublicemail(k, ANY), function () {});
});

bthread("Guard: Unique Publickey", function () {
  const x = waitForAnyPublickeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPublickey(k, ANY), function () {});
});

bthread("Guard: Unique Publicmember", function () {
  const x = waitForAnyPublicmemberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPublicmember(k, ANY), function () {});
});

bthread("Guard: Unique Publish", function () {
  const x = waitForAnyPublishAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPublish(k, ANY), function () {});
});

bthread("Guard: Unique Pull", function () {
  const x = waitForAnyPullAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPull(k, ANY), function () {});
});

bthread("Guard: Unique Punchcard", function () {
  const x = waitForAnyPunchcardAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPunchcard(k, ANY), function () {});
});

bthread("Guard: Unique Pushprotectionbypass", function () {
  const x = waitForAnyPushprotectionbypassAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPushprotectionbypass(k, ANY), function () {});
});

bthread("Guard: Unique Ratelimit", function () {
  const x = waitForAnyRatelimitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRatelimit(k, ANY), function () {});
});

bthread("Guard: Unique Raw", function () {
  const x = waitForAnyRawAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRaw(k, ANY), function () {});
});

bthread("Guard: Unique Reaction", function () {
  const x = waitForAnyReactionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReaction(k, ANY), function () {});
});

bthread("Guard: Unique Readme", function () {
  const x = waitForAnyReadmeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReadme(k, ANY), function () {});
});

bthread("Guard: Unique Receivedevent", function () {
  const x = waitForAnyReceivedeventAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReceivedevent(k, ANY), function () {});
});

bthread("Guard: Unique Ref", function () {
  const x = waitForAnyRefAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRef(k, ANY), function () {});
});

bthread("Guard: Unique Referrer", function () {
  const x = waitForAnyReferrerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReferrer(k, ANY), function () {});
});

bthread("Guard: Unique Registrationtoken", function () {
  const x = waitForAnyRegistrationtokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRegistrationtoken(k, ANY), function () {});
});

bthread("Guard: Unique Releas", function () {
  const x = waitForAnyReleasAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReleas(k, ANY), function () {});
});

bthread("Guard: Unique Remove", function () {
  const x = waitForAnyRemoveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRemove(k, ANY), function () {});
});

bthread("Guard: Unique Removetoken", function () {
  const x = waitForAnyRemovetokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRemovetoken(k, ANY), function () {});
});

bthread("Guard: Unique Rename", function () {
  const x = waitForAnyRenameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRename(k, ANY), function () {});
});

bthread("Guard: Unique Reply", function () {
  const x = waitForAnyReplyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReply(k, ANY), function () {});
});

bthread("Guard: Unique Repo", function () {
  const x = waitForAnyRepoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRepo(k, ANY), function () {});
});

bthread("Guard: Unique Report", function () {
  const x = waitForAnyReportAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReport(k, ANY), function () {});
});

bthread("Guard: Unique Repository", function () {
  const x = waitForAnyRepositoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRepository(k, ANY), function () {});
});

bthread("Guard: Unique Repositoryacces", function () {
  const x = waitForAnyRepositoryaccesAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRepositoryacces(k, ANY), function () {});
});

bthread("Guard: Unique Repositoryinvitation", function () {
  const x = waitForAnyRepositoryinvitationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRepositoryinvitation(k, ANY), function () {});
});

bthread("Guard: Unique Requestedreviewer", function () {
  const x = waitForAnyRequestedreviewerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequestedreviewer(k, ANY), function () {});
});

bthread("Guard: Unique Requiredpullrequestreview", function () {
  const x = waitForAnyRequiredpullrequestreviewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequiredpullrequestreview(k, ANY), function () {});
});

bthread("Guard: Unique Requiredsignature", function () {
  const x = waitForAnyRequiredsignatureAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequiredsignature(k, ANY), function () {});
});

bthread("Guard: Unique Requiredstatuscheck", function () {
  const x = waitForAnyRequiredstatuscheckAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequiredstatuscheck(k, ANY), function () {});
});

bthread("Guard: Unique Rerequest", function () {
  const x = waitForAnyRerequestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRerequest(k, ANY), function () {});
});

bthread("Guard: Unique Rerun", function () {
  const x = waitForAnyRerunAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRerun(k, ANY), function () {});
});

bthread("Guard: Unique Rerunfailedjob", function () {
  const x = waitForAnyRerunfailedjobAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRerunfailedjob(k, ANY), function () {});
});

bthread("Guard: Unique Restore", function () {
  const x = waitForAnyRestoreAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRestore(k, ANY), function () {});
});

bthread("Guard: Unique Restriction", function () {
  const x = waitForAnyRestrictionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRestriction(k, ANY), function () {});
});

bthread("Guard: Unique Review", function () {
  const x = waitForAnyReviewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReview(k, ANY), function () {});
});

bthread("Guard: Unique Revoke", function () {
  const x = waitForAnyRevokeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRevoke(k, ANY), function () {});
});

bthread("Guard: Unique Routestat", function () {
  const x = waitForAnyRoutestatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRoutestat(k, ANY), function () {});
});

bthread("Guard: Unique Rule", function () {
  const x = waitForAnyRuleAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRule(k, ANY), function () {});
});

bthread("Guard: Unique Ruleset", function () {
  const x = waitForAnyRulesetAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRuleset(k, ANY), function () {});
});

bthread("Guard: Unique Rulesuite", function () {
  const x = waitForAnyRulesuiteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRulesuite(k, ANY), function () {});
});

bthread("Guard: Unique Run", function () {
  const x = waitForAnyRunAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRun(k, ANY), function () {});
});

bthread("Guard: Unique Runner", function () {
  const x = waitForAnyRunnerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRunner(k, ANY), function () {});
});

bthread("Guard: Unique Runnergroup", function () {
  const x = waitForAnyRunnergroupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRunnergroup(k, ANY), function () {});
});

bthread("Guard: Unique Sarif", function () {
  const x = waitForAnySarifAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSarif(k, ANY), function () {});
});

bthread("Guard: Unique Sbom", function () {
  const x = waitForAnySbomAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSbom(k, ANY), function () {});
});

bthread("Guard: Unique Scanhistory", function () {
  const x = waitForAnyScanhistoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScanhistory(k, ANY), function () {});
});

bthread("Guard: Unique Schema", function () {
  const x = waitForAnySchemaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSchema(k, ANY), function () {});
});

bthread("Guard: Unique Scoped", function () {
  const x = waitForAnyScopedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddScoped(k, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSearch(k, ANY), function () {});
});

bthread("Guard: Unique Seat", function () {
  const x = waitForAnySeatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSeat(k, ANY), function () {});
});

bthread("Guard: Unique Secret", function () {
  const x = waitForAnySecretAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSecret(k, ANY), function () {});
});

bthread("Guard: Unique Secretscanning", function () {
  const x = waitForAnySecretscanningAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSecretscanning(k, ANY), function () {});
});

bthread("Guard: Unique Securityadvisory", function () {
  const x = waitForAnySecurityadvisoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSecurityadvisory(k, ANY), function () {});
});

bthread("Guard: Unique Securitymanager", function () {
  const x = waitForAnySecuritymanagerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSecuritymanager(k, ANY), function () {});
});

bthread("Guard: Unique Selectedaction", function () {
  const x = waitForAnySelectedactionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSelectedaction(k, ANY), function () {});
});

bthread("Guard: Unique Selectedteam", function () {
  const x = waitForAnySelectedteamAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSelectedteam(k, ANY), function () {});
});

bthread("Guard: Unique Selecteduser", function () {
  const x = waitForAnySelecteduserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSelecteduser(k, ANY), function () {});
});

bthread("Guard: Unique Selfhostedrunner", function () {
  const x = waitForAnySelfhostedrunnerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSelfhostedrunner(k, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSetting(k, ANY), function () {});
});

bthread("Guard: Unique Sharedstorage", function () {
  const x = waitForAnySharedstorageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSharedstorage(k, ANY), function () {});
});

bthread("Guard: Unique Snapshot", function () {
  const x = waitForAnySnapshotAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSnapshot(k, ANY), function () {});
});

bthread("Guard: Unique Socialaccount", function () {
  const x = waitForAnySocialaccountAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSocialaccount(k, ANY), function () {});
});

bthread("Guard: Unique Sshsigningkey", function () {
  const x = waitForAnySshsigningkeyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSshsigningkey(k, ANY), function () {});
});

bthread("Guard: Unique Star", function () {
  const x = waitForAnyStarAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStar(k, ANY), function () {});
});

bthread("Guard: Unique Stargazer", function () {
  const x = waitForAnyStargazerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStargazer(k, ANY), function () {});
});

bthread("Guard: Unique Starred", function () {
  const x = waitForAnyStarredAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStarred(k, ANY), function () {});
});

bthread("Guard: Unique Start", function () {
  const x = waitForAnyStartAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStart(k, ANY), function () {});
});

bthread("Guard: Unique Stat", function () {
  const x = waitForAnyStatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStat(k, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStatu(k, ANY), function () {});
});

bthread("Guard: Unique Status", function () {
  const x = waitForAnyStatusAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStatus(k, ANY), function () {});
});

bthread("Guard: Unique Stop", function () {
  const x = waitForAnyStopAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStop(k, ANY), function () {});
});

bthread("Guard: Unique Storagerecord", function () {
  const x = waitForAnyStoragerecordAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStoragerecord(k, ANY), function () {});
});

bthread("Guard: Unique Stubbed", function () {
  const x = waitForAnyStubbedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStubbed(k, ANY), function () {});
});

bthread("Guard: Unique Sub", function () {
  const x = waitForAnySubAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSub(k, ANY), function () {});
});

bthread("Guard: Unique Subissue", function () {
  const x = waitForAnySubissueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSubissue(k, ANY), function () {});
});

bthread("Guard: Unique Subjectstat", function () {
  const x = waitForAnySubjectstatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSubjectstat(k, ANY), function () {});
});

bthread("Guard: Unique Subscriber", function () {
  const x = waitForAnySubscriberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSubscriber(k, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSubscription(k, ANY), function () {});
});

bthread("Guard: Unique Summarystat", function () {
  const x = waitForAnySummarystatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSummarystat(k, ANY), function () {});
});

bthread("Guard: Unique Suspended", function () {
  const x = waitForAnySuspendedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSuspended(k, ANY), function () {});
});

bthread("Guard: Unique Tag", function () {
  const x = waitForAnyTagAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTag(k, ANY), function () {});
});

bthread("Guard: Unique Tarball", function () {
  const x = waitForAnyTarballAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTarball(k, ANY), function () {});
});

bthread("Guard: Unique Team", function () {
  const x = waitForAnyTeamAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTeam(k, ANY), function () {});
});

bthread("Guard: Unique Template", function () {
  const x = waitForAnyTemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTemplate(k, ANY), function () {});
});

bthread("Guard: Unique Test", function () {
  const x = waitForAnyTestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTest(k, ANY), function () {});
});

bthread("Guard: Unique Thread", function () {
  const x = waitForAnyThreadAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddThread(k, ANY), function () {});
});

bthread("Guard: Unique Timeline", function () {
  const x = waitForAnyTimelineAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTimeline(k, ANY), function () {});
});

bthread("Guard: Unique Timestat", function () {
  const x = waitForAnyTimestatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTimestat(k, ANY), function () {});
});

bthread("Guard: Unique Timing", function () {
  const x = waitForAnyTimingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTiming(k, ANY), function () {});
});

bthread("Guard: Unique Token", function () {
  const x = waitForAnyTokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddToken(k, ANY), function () {});
});

bthread("Guard: Unique Topic", function () {
  const x = waitForAnyTopicAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTopic(k, ANY), function () {});
});

bthread("Guard: Unique Traffic", function () {
  const x = waitForAnyTrafficAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTraffic(k, ANY), function () {});
});

bthread("Guard: Unique Transfer", function () {
  const x = waitForAnyTransferAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTransfer(k, ANY), function () {});
});

bthread("Guard: Unique Tree", function () {
  const x = waitForAnyTreeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTree(k, ANY), function () {});
});

bthread("Guard: Unique Updatebranch", function () {
  const x = waitForAnyUpdatebranchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUpdatebranch(k, ANY), function () {});
});

bthread("Guard: Unique Usage", function () {
  const x = waitForAnyUsageAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsage(k, ANY), function () {});
});

bthread("Guard: Unique Usagebyrepository", function () {
  const x = waitForAnyUsagebyrepositoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUsagebyrepository(k, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUser(k, ANY), function () {});
});

bthread("Guard: Unique Userstat", function () {
  const x = waitForAnyUserstatAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserstat(k, ANY), function () {});
});

bthread("Guard: Unique Value", function () {
  const x = waitForAnyValueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddValue(k, ANY), function () {});
});

bthread("Guard: Unique Variable", function () {
  const x = waitForAnyVariableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVariable(k, ANY), function () {});
});

bthread("Guard: Unique Variantanalys", function () {
  const x = waitForAnyVariantanalysAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVariantanalys(k, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVersion(k, ANY), function () {});
});

bthread("Guard: Unique View", function () {
  const x = waitForAnyViewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddView(k, ANY), function () {});
});

bthread("Guard: Unique Visibility", function () {
  const x = waitForAnyVisibilityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVisibility(k, ANY), function () {});
});

bthread("Guard: Unique Vulnerabilityalert", function () {
  const x = waitForAnyVulnerabilityalertAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVulnerabilityalert(k, ANY), function () {});
});

bthread("Guard: Unique Workflow", function () {
  const x = waitForAnyWorkflowAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWorkflow(k, ANY), function () {});
});

bthread("Guard: Unique Zen", function () {
  const x = waitForAnyZenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddZen(k, ANY), function () {});
});

bthread("Guard: Unique Zipball", function () {
  const x = waitForAnyZipballAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddZipball(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
