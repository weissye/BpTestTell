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
    if (Object.prototype.hasOwnProperty.call(e, key)) return e[key];
    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key)) return e.data[key];
    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key)) return e.payload[key];
    if (Object.prototype.hasOwnProperty.call(e, 'id')) return e['id'];
    // minimal extra fallback for Inventory-like entities
    if (Object.prototype.hasOwnProperty.call(e, 'ndc')) return e['ndc'];
  }
  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;
}

// --- canonKey(v): normalize any key-like value to a scalar string ---
function canonKey(v) {
  if (v == null) return '1001';
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

// ===== NONDET VARIANTS =====

bthread("Acceptedassignment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAcceptedassignment(x.id);
  for (var i=0; i<steps; i++) {
    updateAcceptedassignment(x.id);
  }
  if (pick([true,false])) { deleteAcceptedassignment(x.id); }
  verifyAcceptedassignmentExists(x.id);
  verifyAcceptedassignmentUpdated(x.id);
});

bthread("Acceptedassignment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAcceptedassignment(a.id);
  block(matchAddAcceptedassignment(a.id, ANY), function () {});
  addAcceptedassignment(b.id);
});

bthread("Acces nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAcces(x.id);
  for (var i=0; i<steps; i++) {
    updateAcces(x.id);
  }
  if (pick([true,false])) { deleteAcces(x.id); }
  verifyAccesExists(x.id);
  verifyAccesUpdated(x.id);
});

bthread("Acces nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAcces(a.id);
  block(matchAddAcces(a.id, ANY), function () {});
  addAcces(b.id);
});

bthread("Accesstoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAccesstoken(x.id);
  for (var i=0; i<steps; i++) {
    updateAccesstoken(x.id);
  }
  if (pick([true,false])) { deleteAccesstoken(x.id); }
  verifyAccesstokenExists(x.id);
  verifyAccesstokenUpdated(x.id);
});

bthread("Accesstoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAccesstoken(a.id);
  block(matchAddAccesstoken(a.id, ANY), function () {});
  addAccesstoken(b.id);
});

bthread("Account nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAccount(x.id);
  for (var i=0; i<steps; i++) {
    updateAccount(x.id);
  }
  if (pick([true,false])) { deleteAccount(x.id); }
  verifyAccountExists(x.id);
  verifyAccountUpdated(x.id);
});

bthread("Account nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAccount(a.id);
  block(matchAddAccount(a.id, ANY), function () {});
  addAccount(b.id);
});

bthread("Action nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAction(x.id);
  for (var i=0; i<steps; i++) {
    updateAction(x.id);
  }
  if (pick([true,false])) { deleteAction(x.id); }
  verifyActionExists(x.id);
  verifyActionUpdated(x.id);
});

bthread("Action nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAction(a.id);
  block(matchAddAction(a.id, ANY), function () {});
  addAction(b.id);
});

bthread("Activity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addActivity(x.id);
  for (var i=0; i<steps; i++) {
    updateActivity(x.id);
  }
  if (pick([true,false])) { deleteActivity(x.id); }
  verifyActivityExists(x.id);
  verifyActivityUpdated(x.id);
});

bthread("Activity nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addActivity(a.id);
  block(matchAddActivity(a.id, ANY), function () {});
  addActivity(b.id);
});

bthread("Add nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAdd(x.id);
  for (var i=0; i<steps; i++) {
    updateAdd(x.id);
  }
  if (pick([true,false])) { deleteAdd(x.id); }
  verifyAddExists(x.id);
  verifyAddUpdated(x.id);
});

bthread("Add nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAdd(a.id);
  block(matchAddAdd(a.id, ANY), function () {});
  addAdd(b.id);
});

bthread("Advisory nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAdvisory(x.id);
  for (var i=0; i<steps; i++) {
    updateAdvisory(x.id);
  }
  if (pick([true,false])) { deleteAdvisory(x.id); }
  verifyAdvisoryExists(x.id);
  verifyAdvisoryUpdated(x.id);
});

bthread("Advisory nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAdvisory(a.id);
  block(matchAddAdvisory(a.id, ANY), function () {});
  addAdvisory(b.id);
});

bthread("Alert nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAlert(x.id);
  for (var i=0; i<steps; i++) {
    updateAlert(x.id);
  }
  if (pick([true,false])) { deleteAlert(x.id); }
  verifyAlertExists(x.id);
  verifyAlertUpdated(x.id);
});

bthread("Alert nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAlert(a.id);
  block(matchAddAlert(a.id, ANY), function () {});
  addAlert(b.id);
});

bthread("Analys nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAnalys(x.id);
  for (var i=0; i<steps; i++) {
    updateAnalys(x.id);
  }
  if (pick([true,false])) { deleteAnalys(x.id); }
  verifyAnalysExists(x.id);
  verifyAnalysUpdated(x.id);
});

bthread("Analys nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAnalys(a.id);
  block(matchAddAnalys(a.id, ANY), function () {});
  addAnalys(b.id);
});

bthread("Annotation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAnnotation(x.id);
  for (var i=0; i<steps; i++) {
    updateAnnotation(x.id);
  }
  if (pick([true,false])) { deleteAnnotation(x.id); }
  verifyAnnotationExists(x.id);
  verifyAnnotationUpdated(x.id);
});

bthread("Annotation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAnnotation(a.id);
  block(matchAddAnnotation(a.id, ANY), function () {});
  addAnnotation(b.id);
});

bthread("Api nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addApi(x.id);
  for (var i=0; i<steps; i++) {
    updateApi(x.id);
  }
  if (pick([true,false])) { deleteApi(x.id); }
  verifyApiExists(x.id);
  verifyApiUpdated(x.id);
});

bthread("Api nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApi(a.id);
  block(matchAddApi(a.id, ANY), function () {});
  addApi(b.id);
});

bthread("App nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addApp(x.id);
  for (var i=0; i<steps; i++) {
    updateApp(x.id);
  }
  if (pick([true,false])) { deleteApp(x.id); }
  verifyAppExists(x.id);
  verifyAppUpdated(x.id);
});

bthread("App nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApp(a.id);
  block(matchAddApp(a.id, ANY), function () {});
  addApp(b.id);
});

bthread("Application nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addApplication(x.id);
  for (var i=0; i<steps; i++) {
    updateApplication(x.id);
  }
  if (pick([true,false])) { deleteApplication(x.id); }
  verifyApplicationExists(x.id);
  verifyApplicationUpdated(x.id);
});

bthread("Application nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApplication(a.id);
  block(matchAddApplication(a.id, ANY), function () {});
  addApplication(b.id);
});

bthread("Appmanifest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAppmanifest(x.id);
  for (var i=0; i<steps; i++) {
    updateAppmanifest(x.id);
  }
  if (pick([true,false])) { deleteAppmanifest(x.id); }
  verifyAppmanifestExists(x.id);
  verifyAppmanifestUpdated(x.id);
});

bthread("Appmanifest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAppmanifest(a.id);
  block(matchAddAppmanifest(a.id, ANY), function () {});
  addAppmanifest(b.id);
});

bthread("Approval nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addApproval(x.id);
  for (var i=0; i<steps; i++) {
    updateApproval(x.id);
  }
  if (pick([true,false])) { deleteApproval(x.id); }
  verifyApprovalExists(x.id);
  verifyApprovalUpdated(x.id);
});

bthread("Approval nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApproval(a.id);
  block(matchAddApproval(a.id, ANY), function () {});
  addApproval(b.id);
});

bthread("Approve nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addApprove(x.id);
  for (var i=0; i<steps; i++) {
    updateApprove(x.id);
  }
  if (pick([true,false])) { deleteApprove(x.id); }
  verifyApproveExists(x.id);
  verifyApproveUpdated(x.id);
});

bthread("Approve nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addApprove(a.id);
  block(matchAddApprove(a.id, ANY), function () {});
  addApprove(b.id);
});

bthread("Archive nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addArchive(x.id);
  for (var i=0; i<steps; i++) {
    updateArchive(x.id);
  }
  if (pick([true,false])) { deleteArchive(x.id); }
  verifyArchiveExists(x.id);
  verifyArchiveUpdated(x.id);
});

bthread("Archive nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addArchive(a.id);
  block(matchAddArchive(a.id, ANY), function () {});
  addArchive(b.id);
});

bthread("Artifact nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addArtifact(x.id);
  for (var i=0; i<steps; i++) {
    updateArtifact(x.id);
  }
  if (pick([true,false])) { deleteArtifact(x.id); }
  verifyArtifactExists(x.id);
  verifyArtifactUpdated(x.id);
});

bthread("Artifact nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addArtifact(a.id);
  block(matchAddArtifact(a.id, ANY), function () {});
  addArtifact(b.id);
});

bthread("Artifactandlogretention nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addArtifactandlogretention(x.id);
  for (var i=0; i<steps; i++) {
    updateArtifactandlogretention(x.id);
  }
  if (pick([true,false])) { deleteArtifactandlogretention(x.id); }
  verifyArtifactandlogretentionExists(x.id);
  verifyArtifactandlogretentionUpdated(x.id);
});

bthread("Artifactandlogretention nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addArtifactandlogretention(a.id);
  block(matchAddArtifactandlogretention(a.id, ANY), function () {});
  addArtifactandlogretention(b.id);
});

bthread("Asset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAsset(x.id);
  for (var i=0; i<steps; i++) {
    updateAsset(x.id);
  }
  if (pick([true,false])) { deleteAsset(x.id); }
  verifyAssetExists(x.id);
  verifyAssetUpdated(x.id);
});

bthread("Asset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAsset(a.id);
  block(matchAddAsset(a.id, ANY), function () {});
  addAsset(b.id);
});

bthread("Assignee nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAssignee(x.id);
  for (var i=0; i<steps; i++) {
    updateAssignee(x.id);
  }
  if (pick([true,false])) { deleteAssignee(x.id); }
  verifyAssigneeExists(x.id);
  verifyAssigneeUpdated(x.id);
});

bthread("Assignee nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAssignee(a.id);
  block(matchAddAssignee(a.id, ANY), function () {});
  addAssignee(b.id);
});

bthread("Assignment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAssignment(x.id);
  for (var i=0; i<steps; i++) {
    updateAssignment(x.id);
  }
  if (pick([true,false])) { deleteAssignment(x.id); }
  verifyAssignmentExists(x.id);
  verifyAssignmentUpdated(x.id);
});

bthread("Assignment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAssignment(a.id);
  block(matchAddAssignment(a.id, ANY), function () {});
  addAssignment(b.id);
});

bthread("Attach nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAttach(x.id);
  for (var i=0; i<steps; i++) {
    updateAttach(x.id);
  }
  if (pick([true,false])) { deleteAttach(x.id); }
  verifyAttachExists(x.id);
  verifyAttachUpdated(x.id);
});

bthread("Attach nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAttach(a.id);
  block(matchAddAttach(a.id, ANY), function () {});
  addAttach(b.id);
});

bthread("Attempt nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAttempt(x.id);
  for (var i=0; i<steps; i++) {
    updateAttempt(x.id);
  }
  if (pick([true,false])) { deleteAttempt(x.id); }
  verifyAttemptExists(x.id);
  verifyAttemptUpdated(x.id);
});

bthread("Attempt nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAttempt(a.id);
  block(matchAddAttempt(a.id, ANY), function () {});
  addAttempt(b.id);
});

bthread("Attestation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAttestation(x.id);
  for (var i=0; i<steps; i++) {
    updateAttestation(x.id);
  }
  if (pick([true,false])) { deleteAttestation(x.id); }
  verifyAttestationExists(x.id);
  verifyAttestationUpdated(x.id);
});

bthread("Attestation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAttestation(a.id);
  block(matchAddAttestation(a.id, ANY), function () {});
  addAttestation(b.id);
});

bthread("Author nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAuthor(x.id);
  for (var i=0; i<steps; i++) {
    updateAuthor(x.id);
  }
  if (pick([true,false])) { deleteAuthor(x.id); }
  verifyAuthorExists(x.id);
  verifyAuthorUpdated(x.id);
});

bthread("Author nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAuthor(a.id);
  block(matchAddAuthor(a.id, ANY), function () {});
  addAuthor(b.id);
});

bthread("Autofix nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAutofix(x.id);
  for (var i=0; i<steps; i++) {
    updateAutofix(x.id);
  }
  if (pick([true,false])) { deleteAutofix(x.id); }
  verifyAutofixExists(x.id);
  verifyAutofixUpdated(x.id);
});

bthread("Autofix nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAutofix(a.id);
  block(matchAddAutofix(a.id, ANY), function () {});
  addAutofix(b.id);
});

bthread("Autolink nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAutolink(x.id);
  for (var i=0; i<steps; i++) {
    updateAutolink(x.id);
  }
  if (pick([true,false])) { deleteAutolink(x.id); }
  verifyAutolinkExists(x.id);
  verifyAutolinkUpdated(x.id);
});

bthread("Autolink nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAutolink(a.id);
  block(matchAddAutolink(a.id, ANY), function () {});
  addAutolink(b.id);
});

bthread("Automatedsecurityfixe nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAutomatedsecurityfixe(x.id);
  for (var i=0; i<steps; i++) {
    updateAutomatedsecurityfixe(x.id);
  }
  if (pick([true,false])) { deleteAutomatedsecurityfixe(x.id); }
  verifyAutomatedsecurityfixeExists(x.id);
  verifyAutomatedsecurityfixeUpdated(x.id);
});

bthread("Automatedsecurityfixe nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'A' + ids[0] };
  const b = { id: 'A' + ids[1] };
  addAutomatedsecurityfixe(a.id);
  block(matchAddAutomatedsecurityfixe(a.id, ANY), function () {});
  addAutomatedsecurityfixe(b.id);
});

bthread("Billing nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBilling(x.id);
  for (var i=0; i<steps; i++) {
    updateBilling(x.id);
  }
  if (pick([true,false])) { deleteBilling(x.id); }
  verifyBillingExists(x.id);
  verifyBillingUpdated(x.id);
});

bthread("Billing nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBilling(a.id);
  block(matchAddBilling(a.id, ANY), function () {});
  addBilling(b.id);
});

bthread("Blob nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBlob(x.id);
  for (var i=0; i<steps; i++) {
    updateBlob(x.id);
  }
  if (pick([true,false])) { deleteBlob(x.id); }
  verifyBlobExists(x.id);
  verifyBlobUpdated(x.id);
});

bthread("Blob nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBlob(a.id);
  block(matchAddBlob(a.id, ANY), function () {});
  addBlob(b.id);
});

bthread("Block nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBlock(x.id);
  for (var i=0; i<steps; i++) {
    updateBlock(x.id);
  }
  if (pick([true,false])) { deleteBlock(x.id); }
  verifyBlockExists(x.id);
  verifyBlockUpdated(x.id);
});

bthread("Block nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBlock(a.id);
  block(matchAddBlock(a.id, ANY), function () {});
  addBlock(b.id);
});

bthread("Blockedby nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBlockedby(x.id);
  for (var i=0; i<steps; i++) {
    updateBlockedby(x.id);
  }
  if (pick([true,false])) { deleteBlockedby(x.id); }
  verifyBlockedbyExists(x.id);
  verifyBlockedbyUpdated(x.id);
});

bthread("Blockedby nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBlockedby(a.id);
  block(matchAddBlockedby(a.id, ANY), function () {});
  addBlockedby(b.id);
});

bthread("Blocking nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBlocking(x.id);
  for (var i=0; i<steps; i++) {
    updateBlocking(x.id);
  }
  if (pick([true,false])) { deleteBlocking(x.id); }
  verifyBlockingExists(x.id);
  verifyBlockingUpdated(x.id);
});

bthread("Blocking nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBlocking(a.id);
  block(matchAddBlocking(a.id, ANY), function () {});
  addBlocking(b.id);
});

bthread("Branche nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBranche(x.id);
  for (var i=0; i<steps; i++) {
    updateBranche(x.id);
  }
  if (pick([true,false])) { deleteBranche(x.id); }
  verifyBrancheExists(x.id);
  verifyBrancheUpdated(x.id);
});

bthread("Branche nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBranche(a.id);
  block(matchAddBranche(a.id, ANY), function () {});
  addBranche(b.id);
});

bthread("Brancheswherehead nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBrancheswherehead(x.id);
  for (var i=0; i<steps; i++) {
    updateBrancheswherehead(x.id);
  }
  if (pick([true,false])) { deleteBrancheswherehead(x.id); }
  verifyBrancheswhereheadExists(x.id);
  verifyBrancheswhereheadUpdated(x.id);
});

bthread("Brancheswherehead nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBrancheswherehead(a.id);
  block(matchAddBrancheswherehead(a.id, ANY), function () {});
  addBrancheswherehead(b.id);
});

bthread("Build nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBuild(x.id);
  for (var i=0; i<steps; i++) {
    updateBuild(x.id);
  }
  if (pick([true,false])) { deleteBuild(x.id); }
  verifyBuildExists(x.id);
  verifyBuildUpdated(x.id);
});

bthread("Build nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBuild(a.id);
  block(matchAddBuild(a.id, ANY), function () {});
  addBuild(b.id);
});

bthread("Bulklist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBulklist(x.id);
  for (var i=0; i<steps; i++) {
    updateBulklist(x.id);
  }
  if (pick([true,false])) { deleteBulklist(x.id); }
  verifyBulklistExists(x.id);
  verifyBulklistUpdated(x.id);
});

bthread("Bulklist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'B' + ids[0] };
  const b = { id: 'B' + ids[1] };
  addBulklist(a.id);
  block(matchAddBulklist(a.id, ANY), function () {});
  addBulklist(b.id);
});

bthread("Cache nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCache(x.id);
  for (var i=0; i<steps; i++) {
    updateCache(x.id);
  }
  if (pick([true,false])) { deleteCache(x.id); }
  verifyCacheExists(x.id);
  verifyCacheUpdated(x.id);
});

bthread("Cache nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCache(a.id);
  block(matchAddCache(a.id, ANY), function () {});
  addCache(b.id);
});

bthread("Campaign nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCampaign(x.id);
  for (var i=0; i<steps; i++) {
    updateCampaign(x.id);
  }
  if (pick([true,false])) { deleteCampaign(x.id); }
  verifyCampaignExists(x.id);
  verifyCampaignUpdated(x.id);
});

bthread("Campaign nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCampaign(a.id);
  block(matchAddCampaign(a.id, ANY), function () {});
  addCampaign(b.id);
});

bthread("Cancel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCancel(x.id);
  for (var i=0; i<steps; i++) {
    updateCancel(x.id);
  }
  if (pick([true,false])) { deleteCancel(x.id); }
  verifyCancelExists(x.id);
  verifyCancelUpdated(x.id);
});

bthread("Cancel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCancel(a.id);
  block(matchAddCancel(a.id, ANY), function () {});
  addCancel(b.id);
});

bthread("Checkrun nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCheckrun(x.id);
  for (var i=0; i<steps; i++) {
    updateCheckrun(x.id);
  }
  if (pick([true,false])) { deleteCheckrun(x.id); }
  verifyCheckrunExists(x.id);
  verifyCheckrunUpdated(x.id);
});

bthread("Checkrun nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCheckrun(a.id);
  block(matchAddCheckrun(a.id, ANY), function () {});
  addCheckrun(b.id);
});

bthread("Checksuite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addChecksuite(x.id);
  for (var i=0; i<steps; i++) {
    updateChecksuite(x.id);
  }
  if (pick([true,false])) { deleteChecksuite(x.id); }
  verifyChecksuiteExists(x.id);
  verifyChecksuiteUpdated(x.id);
});

bthread("Checksuite nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addChecksuite(a.id);
  block(matchAddChecksuite(a.id, ANY), function () {});
  addChecksuite(b.id);
});

bthread("Classroom nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addClassroom(x.id);
  for (var i=0; i<steps; i++) {
    updateClassroom(x.id);
  }
  if (pick([true,false])) { deleteClassroom(x.id); }
  verifyClassroomExists(x.id);
  verifyClassroomUpdated(x.id);
});

bthread("Classroom nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClassroom(a.id);
  block(matchAddClassroom(a.id, ANY), function () {});
  addClassroom(b.id);
});

bthread("Clone nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addClone(x.id);
  for (var i=0; i<steps; i++) {
    updateClone(x.id);
  }
  if (pick([true,false])) { deleteClone(x.id); }
  verifyCloneExists(x.id);
  verifyCloneUpdated(x.id);
});

bthread("Clone nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addClone(a.id);
  block(matchAddClone(a.id, ANY), function () {});
  addClone(b.id);
});

bthread("Code nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCode(x.id);
  for (var i=0; i<steps; i++) {
    updateCode(x.id);
  }
  if (pick([true,false])) { deleteCode(x.id); }
  verifyCodeExists(x.id);
  verifyCodeUpdated(x.id);
});

bthread("Code nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCode(a.id);
  block(matchAddCode(a.id, ANY), function () {});
  addCode(b.id);
});

bthread("Codefrequency nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCodefrequency(x.id);
  for (var i=0; i<steps; i++) {
    updateCodefrequency(x.id);
  }
  if (pick([true,false])) { deleteCodefrequency(x.id); }
  verifyCodefrequencyExists(x.id);
  verifyCodefrequencyUpdated(x.id);
});

bthread("Codefrequency nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCodefrequency(a.id);
  block(matchAddCodefrequency(a.id, ANY), function () {});
  addCodefrequency(b.id);
});

bthread("Codeowner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCodeowner(x.id);
  for (var i=0; i<steps; i++) {
    updateCodeowner(x.id);
  }
  if (pick([true,false])) { deleteCodeowner(x.id); }
  verifyCodeownerExists(x.id);
  verifyCodeownerUpdated(x.id);
});

bthread("Codeowner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCodeowner(a.id);
  block(matchAddCodeowner(a.id, ANY), function () {});
  addCodeowner(b.id);
});

bthread("Codeql nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCodeql(x.id);
  for (var i=0; i<steps; i++) {
    updateCodeql(x.id);
  }
  if (pick([true,false])) { deleteCodeql(x.id); }
  verifyCodeqlExists(x.id);
  verifyCodeqlUpdated(x.id);
});

bthread("Codeql nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCodeql(a.id);
  block(matchAddCodeql(a.id, ANY), function () {});
  addCodeql(b.id);
});

bthread("Codescanning nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCodescanning(x.id);
  for (var i=0; i<steps; i++) {
    updateCodescanning(x.id);
  }
  if (pick([true,false])) { deleteCodescanning(x.id); }
  verifyCodescanningExists(x.id);
  verifyCodescanningUpdated(x.id);
});

bthread("Codescanning nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCodescanning(a.id);
  block(matchAddCodescanning(a.id, ANY), function () {});
  addCodescanning(b.id);
});

bthread("Codesecurity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCodesecurity(x.id);
  for (var i=0; i<steps; i++) {
    updateCodesecurity(x.id);
  }
  if (pick([true,false])) { deleteCodesecurity(x.id); }
  verifyCodesecurityExists(x.id);
  verifyCodesecurityUpdated(x.id);
});

bthread("Codesecurity nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCodesecurity(a.id);
  block(matchAddCodesecurity(a.id, ANY), function () {});
  addCodesecurity(b.id);
});

bthread("Codesecurityconfiguration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCodesecurityconfiguration(x.id);
  for (var i=0; i<steps; i++) {
    updateCodesecurityconfiguration(x.id);
  }
  if (pick([true,false])) { deleteCodesecurityconfiguration(x.id); }
  verifyCodesecurityconfigurationExists(x.id);
  verifyCodesecurityconfigurationUpdated(x.id);
});

bthread("Codesecurityconfiguration nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCodesecurityconfiguration(a.id);
  block(matchAddCodesecurityconfiguration(a.id, ANY), function () {});
  addCodesecurityconfiguration(b.id);
});

bthread("Codesofconduct nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCodesofconduct(x.id);
  for (var i=0; i<steps; i++) {
    updateCodesofconduct(x.id);
  }
  if (pick([true,false])) { deleteCodesofconduct(x.id); }
  verifyCodesofconductExists(x.id);
  verifyCodesofconductUpdated(x.id);
});

bthread("Codesofconduct nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCodesofconduct(a.id);
  block(matchAddCodesofconduct(a.id, ANY), function () {});
  addCodesofconduct(b.id);
});

bthread("Codespace nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCodespace(x.id);
  for (var i=0; i<steps; i++) {
    updateCodespace(x.id);
  }
  if (pick([true,false])) { deleteCodespace(x.id); }
  verifyCodespaceExists(x.id);
  verifyCodespaceUpdated(x.id);
});

bthread("Codespace nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCodespace(a.id);
  block(matchAddCodespace(a.id, ANY), function () {});
  addCodespace(b.id);
});

bthread("Collaborator nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCollaborator(x.id);
  for (var i=0; i<steps; i++) {
    updateCollaborator(x.id);
  }
  if (pick([true,false])) { deleteCollaborator(x.id); }
  verifyCollaboratorExists(x.id);
  verifyCollaboratorUpdated(x.id);
});

bthread("Collaborator nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCollaborator(a.id);
  block(matchAddCollaborator(a.id, ANY), function () {});
  addCollaborator(b.id);
});

bthread("Column nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addColumn(x.id);
  for (var i=0; i<steps; i++) {
    updateColumn(x.id);
  }
  if (pick([true,false])) { deleteColumn(x.id); }
  verifyColumnExists(x.id);
  verifyColumnUpdated(x.id);
});

bthread("Column nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addColumn(a.id);
  block(matchAddColumn(a.id, ANY), function () {});
  addColumn(b.id);
});

bthread("Comment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addComment(x.id);
  for (var i=0; i<steps; i++) {
    updateComment(x.id);
  }
  if (pick([true,false])) { deleteComment(x.id); }
  verifyCommentExists(x.id);
  verifyCommentUpdated(x.id);
});

bthread("Comment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addComment(a.id);
  block(matchAddComment(a.id, ANY), function () {});
  addComment(b.id);
});

bthread("Commit nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCommit(x.id);
  for (var i=0; i<steps; i++) {
    updateCommit(x.id);
  }
  if (pick([true,false])) { deleteCommit(x.id); }
  verifyCommitExists(x.id);
  verifyCommitUpdated(x.id);
});

bthread("Commit nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCommit(a.id);
  block(matchAddCommit(a.id, ANY), function () {});
  addCommit(b.id);
});

bthread("Commitactivity nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCommitactivity(x.id);
  for (var i=0; i<steps; i++) {
    updateCommitactivity(x.id);
  }
  if (pick([true,false])) { deleteCommitactivity(x.id); }
  verifyCommitactivityExists(x.id);
  verifyCommitactivityUpdated(x.id);
});

bthread("Commitactivity nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCommitactivity(a.id);
  block(matchAddCommitactivity(a.id, ANY), function () {});
  addCommitactivity(b.id);
});

bthread("Community nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCommunity(x.id);
  for (var i=0; i<steps; i++) {
    updateCommunity(x.id);
  }
  if (pick([true,false])) { deleteCommunity(x.id); }
  verifyCommunityExists(x.id);
  verifyCommunityUpdated(x.id);
});

bthread("Community nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCommunity(a.id);
  block(matchAddCommunity(a.id, ANY), function () {});
  addCommunity(b.id);
});

bthread("Compare nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCompare(x.id);
  for (var i=0; i<steps; i++) {
    updateCompare(x.id);
  }
  if (pick([true,false])) { deleteCompare(x.id); }
  verifyCompareExists(x.id);
  verifyCompareUpdated(x.id);
});

bthread("Compare nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCompare(a.id);
  block(matchAddCompare(a.id, ANY), function () {});
  addCompare(b.id);
});

bthread("Config nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConfig(x.id);
  for (var i=0; i<steps; i++) {
    updateConfig(x.id);
  }
  if (pick([true,false])) { deleteConfig(x.id); }
  verifyConfigExists(x.id);
  verifyConfigUpdated(x.id);
});

bthread("Config nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConfig(a.id);
  block(matchAddConfig(a.id, ANY), function () {});
  addConfig(b.id);
});

bthread("Configuration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConfiguration(x.id);
  for (var i=0; i<steps; i++) {
    updateConfiguration(x.id);
  }
  if (pick([true,false])) { deleteConfiguration(x.id); }
  verifyConfigurationExists(x.id);
  verifyConfigurationUpdated(x.id);
});

bthread("Configuration nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConfiguration(a.id);
  block(matchAddConfiguration(a.id, ANY), function () {});
  addConfiguration(b.id);
});

bthread("Conflict nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConflict(x.id);
  for (var i=0; i<steps; i++) {
    updateConflict(x.id);
  }
  if (pick([true,false])) { deleteConflict(x.id); }
  verifyConflictExists(x.id);
  verifyConflictUpdated(x.id);
});

bthread("Conflict nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConflict(a.id);
  block(matchAddConflict(a.id, ANY), function () {});
  addConflict(b.id);
});

bthread("Content nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addContent(x.id);
  for (var i=0; i<steps; i++) {
    updateContent(x.id);
  }
  if (pick([true,false])) { deleteContent(x.id); }
  verifyContentExists(x.id);
  verifyContentUpdated(x.id);
});

bthread("Content nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addContent(a.id);
  block(matchAddContent(a.id, ANY), function () {});
  addContent(b.id);
});

bthread("Context nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addContext(x.id);
  for (var i=0; i<steps; i++) {
    updateContext(x.id);
  }
  if (pick([true,false])) { deleteContext(x.id); }
  verifyContextExists(x.id);
  verifyContextUpdated(x.id);
});

bthread("Context nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addContext(a.id);
  block(matchAddContext(a.id, ANY), function () {});
  addContext(b.id);
});

bthread("Contributor nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addContributor(x.id);
  for (var i=0; i<steps; i++) {
    updateContributor(x.id);
  }
  if (pick([true,false])) { deleteContributor(x.id); }
  verifyContributorExists(x.id);
  verifyContributorUpdated(x.id);
});

bthread("Contributor nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addContributor(a.id);
  block(matchAddContributor(a.id, ANY), function () {});
  addContributor(b.id);
});

bthread("Conversion nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addConversion(x.id);
  for (var i=0; i<steps; i++) {
    updateConversion(x.id);
  }
  if (pick([true,false])) { deleteConversion(x.id); }
  verifyConversionExists(x.id);
  verifyConversionUpdated(x.id);
});

bthread("Conversion nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addConversion(a.id);
  block(matchAddConversion(a.id, ANY), function () {});
  addConversion(b.id);
});

bthread("Copilot nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCopilot(x.id);
  for (var i=0; i<steps; i++) {
    updateCopilot(x.id);
  }
  if (pick([true,false])) { deleteCopilot(x.id); }
  verifyCopilotExists(x.id);
  verifyCopilotUpdated(x.id);
});

bthread("Copilot nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCopilot(a.id);
  block(matchAddCopilot(a.id, ANY), function () {});
  addCopilot(b.id);
});

bthread("Credential nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCredential(x.id);
  for (var i=0; i<steps; i++) {
    updateCredential(x.id);
  }
  if (pick([true,false])) { deleteCredential(x.id); }
  verifyCredentialExists(x.id);
  verifyCredentialUpdated(x.id);
});

bthread("Credential nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCredential(a.id);
  block(matchAddCredential(a.id, ANY), function () {});
  addCredential(b.id);
});

bthread("Customization nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCustomization(x.id);
  for (var i=0; i<steps; i++) {
    updateCustomization(x.id);
  }
  if (pick([true,false])) { deleteCustomization(x.id); }
  verifyCustomizationExists(x.id);
  verifyCustomizationUpdated(x.id);
});

bthread("Customization nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCustomization(a.id);
  block(matchAddCustomization(a.id, ANY), function () {});
  addCustomization(b.id);
});

bthread("Cve nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCve(x.id);
  for (var i=0; i<steps; i++) {
    updateCve(x.id);
  }
  if (pick([true,false])) { deleteCve(x.id); }
  verifyCveExists(x.id);
  verifyCveUpdated(x.id);
});

bthread("Cve nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'C' + ids[0] };
  const b = { id: 'C' + ids[1] };
  addCve(a.id);
  block(matchAddCve(a.id, ANY), function () {});
  addCve(b.id);
});

bthread("Databas nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDatabas(x.id);
  for (var i=0; i<steps; i++) {
    updateDatabas(x.id);
  }
  if (pick([true,false])) { deleteDatabas(x.id); }
  verifyDatabasExists(x.id);
  verifyDatabasUpdated(x.id);
});

bthread("Databas nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDatabas(a.id);
  block(matchAddDatabas(a.id, ANY), function () {});
  addDatabas(b.id);
});

bthread("Default nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDefault(x.id);
  for (var i=0; i<steps; i++) {
    updateDefault(x.id);
  }
  if (pick([true,false])) { deleteDefault(x.id); }
  verifyDefaultExists(x.id);
  verifyDefaultUpdated(x.id);
});

bthread("Default nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefault(a.id);
  block(matchAddDefault(a.id, ANY), function () {});
  addDefault(b.id);
});

bthread("Defaultlevel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDefaultlevel(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultlevel(x.id);
  }
  if (pick([true,false])) { deleteDefaultlevel(x.id); }
  verifyDefaultlevelExists(x.id);
  verifyDefaultlevelUpdated(x.id);
});

bthread("Defaultlevel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaultlevel(a.id);
  block(matchAddDefaultlevel(a.id, ANY), function () {});
  addDefaultlevel(b.id);
});

bthread("Defaultsetup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDefaultsetup(x.id);
  for (var i=0; i<steps; i++) {
    updateDefaultsetup(x.id);
  }
  if (pick([true,false])) { deleteDefaultsetup(x.id); }
  verifyDefaultsetupExists(x.id);
  verifyDefaultsetupUpdated(x.id);
});

bthread("Defaultsetup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDefaultsetup(a.id);
  block(matchAddDefaultsetup(a.id, ANY), function () {});
  addDefaultsetup(b.id);
});

bthread("Deleterequest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeleterequest(x.id);
  for (var i=0; i<steps; i++) {
    updateDeleterequest(x.id);
  }
  if (pick([true,false])) { deleteDeleterequest(x.id); }
  verifyDeleterequestExists(x.id);
  verifyDeleterequestUpdated(x.id);
});

bthread("Deleterequest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDeleterequest(a.id);
  block(matchAddDeleterequest(a.id, ANY), function () {});
  addDeleterequest(b.id);
});

bthread("Delivery nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDelivery(x.id);
  for (var i=0; i<steps; i++) {
    updateDelivery(x.id);
  }
  if (pick([true,false])) { deleteDelivery(x.id); }
  verifyDeliveryExists(x.id);
  verifyDeliveryUpdated(x.id);
});

bthread("Delivery nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDelivery(a.id);
  block(matchAddDelivery(a.id, ANY), function () {});
  addDelivery(b.id);
});

bthread("Dependabot nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDependabot(x.id);
  for (var i=0; i<steps; i++) {
    updateDependabot(x.id);
  }
  if (pick([true,false])) { deleteDependabot(x.id); }
  verifyDependabotExists(x.id);
  verifyDependabotUpdated(x.id);
});

bthread("Dependabot nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDependabot(a.id);
  block(matchAddDependabot(a.id, ANY), function () {});
  addDependabot(b.id);
});

bthread("Dependency nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDependency(x.id);
  for (var i=0; i<steps; i++) {
    updateDependency(x.id);
  }
  if (pick([true,false])) { deleteDependency(x.id); }
  verifyDependencyExists(x.id);
  verifyDependencyUpdated(x.id);
});

bthread("Dependency nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDependency(a.id);
  block(matchAddDependency(a.id, ANY), function () {});
  addDependency(b.id);
});

bthread("Dependencygraph nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDependencygraph(x.id);
  for (var i=0; i<steps; i++) {
    updateDependencygraph(x.id);
  }
  if (pick([true,false])) { deleteDependencygraph(x.id); }
  verifyDependencygraphExists(x.id);
  verifyDependencygraphUpdated(x.id);
});

bthread("Dependencygraph nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDependencygraph(a.id);
  block(matchAddDependencygraph(a.id, ANY), function () {});
  addDependencygraph(b.id);
});

bthread("Deployment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeployment(x.id);
  for (var i=0; i<steps; i++) {
    updateDeployment(x.id);
  }
  if (pick([true,false])) { deleteDeployment(x.id); }
  verifyDeploymentExists(x.id);
  verifyDeploymentUpdated(x.id);
});

bthread("Deployment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDeployment(a.id);
  block(matchAddDeployment(a.id, ANY), function () {});
  addDeployment(b.id);
});

bthread("Deploymentbranchpolicy nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeploymentbranchpolicy(x.id);
  for (var i=0; i<steps; i++) {
    updateDeploymentbranchpolicy(x.id);
  }
  if (pick([true,false])) { deleteDeploymentbranchpolicy(x.id); }
  verifyDeploymentbranchpolicyExists(x.id);
  verifyDeploymentbranchpolicyUpdated(x.id);
});

bthread("Deploymentbranchpolicy nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDeploymentbranchpolicy(a.id);
  block(matchAddDeploymentbranchpolicy(a.id, ANY), function () {});
  addDeploymentbranchpolicy(b.id);
});

bthread("Deploymentprotectionrule nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeploymentprotectionrule(x.id);
  for (var i=0; i<steps; i++) {
    updateDeploymentprotectionrule(x.id);
  }
  if (pick([true,false])) { deleteDeploymentprotectionrule(x.id); }
  verifyDeploymentprotectionruleExists(x.id);
  verifyDeploymentprotectionruleUpdated(x.id);
});

bthread("Deploymentprotectionrule nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDeploymentprotectionrule(a.id);
  block(matchAddDeploymentprotectionrule(a.id, ANY), function () {});
  addDeploymentprotectionrule(b.id);
});

bthread("Detach nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDetach(x.id);
  for (var i=0; i<steps; i++) {
    updateDetach(x.id);
  }
  if (pick([true,false])) { deleteDetach(x.id); }
  verifyDetachExists(x.id);
  verifyDetachUpdated(x.id);
});

bthread("Detach nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDetach(a.id);
  block(matchAddDetach(a.id, ANY), function () {});
  addDetach(b.id);
});

bthread("Devcontainer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDevcontainer(x.id);
  for (var i=0; i<steps; i++) {
    updateDevcontainer(x.id);
  }
  if (pick([true,false])) { deleteDevcontainer(x.id); }
  verifyDevcontainerExists(x.id);
  verifyDevcontainerUpdated(x.id);
});

bthread("Devcontainer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDevcontainer(a.id);
  block(matchAddDevcontainer(a.id, ANY), function () {});
  addDevcontainer(b.id);
});

bthread("Digest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDigest(x.id);
  for (var i=0; i<steps; i++) {
    updateDigest(x.id);
  }
  if (pick([true,false])) { deleteDigest(x.id); }
  verifyDigestExists(x.id);
  verifyDigestUpdated(x.id);
});

bthread("Digest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDigest(a.id);
  block(matchAddDigest(a.id, ANY), function () {});
  addDigest(b.id);
});

bthread("Disable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDisable(x.id);
  for (var i=0; i<steps; i++) {
    updateDisable(x.id);
  }
  if (pick([true,false])) { deleteDisable(x.id); }
  verifyDisableExists(x.id);
  verifyDisableUpdated(x.id);
});

bthread("Disable nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDisable(a.id);
  block(matchAddDisable(a.id, ANY), function () {});
  addDisable(b.id);
});

bthread("Discussion nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDiscussion(x.id);
  for (var i=0; i<steps; i++) {
    updateDiscussion(x.id);
  }
  if (pick([true,false])) { deleteDiscussion(x.id); }
  verifyDiscussionExists(x.id);
  verifyDiscussionUpdated(x.id);
});

bthread("Discussion nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDiscussion(a.id);
  block(matchAddDiscussion(a.id, ANY), function () {});
  addDiscussion(b.id);
});

bthread("Dismissal nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDismissal(x.id);
  for (var i=0; i<steps; i++) {
    updateDismissal(x.id);
  }
  if (pick([true,false])) { deleteDismissal(x.id); }
  verifyDismissalExists(x.id);
  verifyDismissalUpdated(x.id);
});

bthread("Dismissal nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDismissal(a.id);
  block(matchAddDismissal(a.id, ANY), function () {});
  addDismissal(b.id);
});

bthread("Dispatche nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDispatche(x.id);
  for (var i=0; i<steps; i++) {
    updateDispatche(x.id);
  }
  if (pick([true,false])) { deleteDispatche(x.id); }
  verifyDispatcheExists(x.id);
  verifyDispatcheUpdated(x.id);
});

bthread("Dispatche nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDispatche(a.id);
  block(matchAddDispatche(a.id, ANY), function () {});
  addDispatche(b.id);
});

bthread("Docker nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDocker(x.id);
  for (var i=0; i<steps; i++) {
    updateDocker(x.id);
  }
  if (pick([true,false])) { deleteDocker(x.id); }
  verifyDockerExists(x.id);
  verifyDockerUpdated(x.id);
});

bthread("Docker nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDocker(a.id);
  block(matchAddDocker(a.id, ANY), function () {});
  addDocker(b.id);
});

bthread("Download nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDownload(x.id);
  for (var i=0; i<steps; i++) {
    updateDownload(x.id);
  }
  if (pick([true,false])) { deleteDownload(x.id); }
  verifyDownloadExists(x.id);
  verifyDownloadUpdated(x.id);
});

bthread("Download nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'D' + ids[0] };
  const b = { id: 'D' + ids[1] };
  addDownload(a.id);
  block(matchAddDownload(a.id, ANY), function () {});
  addDownload(b.id);
});

bthread("Email nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEmail(x.id);
  for (var i=0; i<steps; i++) {
    updateEmail(x.id);
  }
  if (pick([true,false])) { deleteEmail(x.id); }
  verifyEmailExists(x.id);
  verifyEmailUpdated(x.id);
});

bthread("Email nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEmail(a.id);
  block(matchAddEmail(a.id, ANY), function () {});
  addEmail(b.id);
});

bthread("Emoji nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEmoji(x.id);
  for (var i=0; i<steps; i++) {
    updateEmoji(x.id);
  }
  if (pick([true,false])) { deleteEmoji(x.id); }
  verifyEmojiExists(x.id);
  verifyEmojiUpdated(x.id);
});

bthread("Emoji nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEmoji(a.id);
  block(matchAddEmoji(a.id, ANY), function () {});
  addEmoji(b.id);
});

bthread("Enable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEnable(x.id);
  for (var i=0; i<steps; i++) {
    updateEnable(x.id);
  }
  if (pick([true,false])) { deleteEnable(x.id); }
  verifyEnableExists(x.id);
  verifyEnableUpdated(x.id);
});

bthread("Enable nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEnable(a.id);
  block(matchAddEnable(a.id, ANY), function () {});
  addEnable(b.id);
});

bthread("Enforceadmin nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEnforceadmin(x.id);
  for (var i=0; i<steps; i++) {
    updateEnforceadmin(x.id);
  }
  if (pick([true,false])) { deleteEnforceadmin(x.id); }
  verifyEnforceadminExists(x.id);
  verifyEnforceadminUpdated(x.id);
});

bthread("Enforceadmin nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEnforceadmin(a.id);
  block(matchAddEnforceadmin(a.id, ANY), function () {});
  addEnforceadmin(b.id);
});

bthread("Enterpris nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEnterpris(x.id);
  for (var i=0; i<steps; i++) {
    updateEnterpris(x.id);
  }
  if (pick([true,false])) { deleteEnterpris(x.id); }
  verifyEnterprisExists(x.id);
  verifyEnterprisUpdated(x.id);
});

bthread("Enterpris nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEnterpris(a.id);
  block(matchAddEnterpris(a.id, ANY), function () {});
  addEnterpris(b.id);
});

bthread("Environment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEnvironment(x.id);
  for (var i=0; i<steps; i++) {
    updateEnvironment(x.id);
  }
  if (pick([true,false])) { deleteEnvironment(x.id); }
  verifyEnvironmentExists(x.id);
  verifyEnvironmentUpdated(x.id);
});

bthread("Environment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEnvironment(a.id);
  block(matchAddEnvironment(a.id, ANY), function () {});
  addEnvironment(b.id);
});

bthread("Error nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addError(a.id);
  block(matchAddError(a.id, ANY), function () {});
  addError(b.id);
});

bthread("Event nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEvent(x.id);
  for (var i=0; i<steps; i++) {
    updateEvent(x.id);
  }
  if (pick([true,false])) { deleteEvent(x.id); }
  verifyEventExists(x.id);
  verifyEventUpdated(x.id);
});

bthread("Event nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addEvent(a.id);
  block(matchAddEvent(a.id, ANY), function () {});
  addEvent(b.id);
});

bthread("Export nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addExport(x.id);
  for (var i=0; i<steps; i++) {
    updateExport(x.id);
  }
  if (pick([true,false])) { deleteExport(x.id); }
  verifyExportExists(x.id);
  verifyExportUpdated(x.id);
});

bthread("Export nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'E' + ids[0] };
  const b = { id: 'E' + ids[1] };
  addExport(a.id);
  block(matchAddExport(a.id, ANY), function () {});
  addExport(b.id);
});

bthread("Failedinvitation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFailedinvitation(x.id);
  for (var i=0; i<steps; i++) {
    updateFailedinvitation(x.id);
  }
  if (pick([true,false])) { deleteFailedinvitation(x.id); }
  verifyFailedinvitationExists(x.id);
  verifyFailedinvitationUpdated(x.id);
});

bthread("Failedinvitation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFailedinvitation(a.id);
  block(matchAddFailedinvitation(a.id, ANY), function () {});
  addFailedinvitation(b.id);
});

bthread("Feed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFeed(x.id);
  for (var i=0; i<steps; i++) {
    updateFeed(x.id);
  }
  if (pick([true,false])) { deleteFeed(x.id); }
  verifyFeedExists(x.id);
  verifyFeedUpdated(x.id);
});

bthread("Feed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFeed(a.id);
  block(matchAddFeed(a.id, ANY), function () {});
  addFeed(b.id);
});

bthread("Field nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addField(x.id);
  for (var i=0; i<steps; i++) {
    updateField(x.id);
  }
  if (pick([true,false])) { deleteField(x.id); }
  verifyFieldExists(x.id);
  verifyFieldUpdated(x.id);
});

bthread("Field nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addField(a.id);
  block(matchAddField(a.id, ANY), function () {});
  addField(b.id);
});

bthread("File nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFile(x.id);
  for (var i=0; i<steps; i++) {
    updateFile(x.id);
  }
  if (pick([true,false])) { deleteFile(x.id); }
  verifyFileExists(x.id);
  verifyFileUpdated(x.id);
});

bthread("File nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFile(a.id);
  block(matchAddFile(a.id, ANY), function () {});
  addFile(b.id);
});

bthread("Follower nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFollower(x.id);
  for (var i=0; i<steps; i++) {
    updateFollower(x.id);
  }
  if (pick([true,false])) { deleteFollower(x.id); }
  verifyFollowerExists(x.id);
  verifyFollowerUpdated(x.id);
});

bthread("Follower nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFollower(a.id);
  block(matchAddFollower(a.id, ANY), function () {});
  addFollower(b.id);
});

bthread("Following nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFollowing(x.id);
  for (var i=0; i<steps; i++) {
    updateFollowing(x.id);
  }
  if (pick([true,false])) { deleteFollowing(x.id); }
  verifyFollowingExists(x.id);
  verifyFollowingUpdated(x.id);
});

bthread("Following nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFollowing(a.id);
  block(matchAddFollowing(a.id, ANY), function () {});
  addFollowing(b.id);
});

bthread("Forcecancel nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addForcecancel(x.id);
  for (var i=0; i<steps; i++) {
    updateForcecancel(x.id);
  }
  if (pick([true,false])) { deleteForcecancel(x.id); }
  verifyForcecancelExists(x.id);
  verifyForcecancelUpdated(x.id);
});

bthread("Forcecancel nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addForcecancel(a.id);
  block(matchAddForcecancel(a.id, ANY), function () {});
  addForcecancel(b.id);
});

bthread("Fork nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addFork(x.id);
  for (var i=0; i<steps; i++) {
    updateFork(x.id);
  }
  if (pick([true,false])) { deleteFork(x.id); }
  verifyForkExists(x.id);
  verifyForkUpdated(x.id);
});

bthread("Fork nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addFork(a.id);
  block(matchAddFork(a.id, ANY), function () {});
  addFork(b.id);
});

bthread("Forkprcontributorapproval nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addForkprcontributorapproval(x.id);
  for (var i=0; i<steps; i++) {
    updateForkprcontributorapproval(x.id);
  }
  if (pick([true,false])) { deleteForkprcontributorapproval(x.id); }
  verifyForkprcontributorapprovalExists(x.id);
  verifyForkprcontributorapprovalUpdated(x.id);
});

bthread("Forkprcontributorapproval nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addForkprcontributorapproval(a.id);
  block(matchAddForkprcontributorapproval(a.id, ANY), function () {});
  addForkprcontributorapproval(b.id);
});

bthread("Forkprworkflowsprivaterepo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addForkprworkflowsprivaterepo(x.id);
  for (var i=0; i<steps; i++) {
    updateForkprworkflowsprivaterepo(x.id);
  }
  if (pick([true,false])) { deleteForkprworkflowsprivaterepo(x.id); }
  verifyForkprworkflowsprivaterepoExists(x.id);
  verifyForkprworkflowsprivaterepoUpdated(x.id);
});

bthread("Forkprworkflowsprivaterepo nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'F' + ids[0] };
  const b = { id: 'F' + ids[1] };
  addForkprworkflowsprivaterepo(a.id);
  block(matchAddForkprworkflowsprivaterepo(a.id, ANY), function () {});
  addForkprworkflowsprivaterepo(b.id);
});

bthread("Generate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGenerate(x.id);
  for (var i=0; i<steps; i++) {
    updateGenerate(x.id);
  }
  if (pick([true,false])) { deleteGenerate(x.id); }
  verifyGenerateExists(x.id);
  verifyGenerateUpdated(x.id);
});

bthread("Generate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGenerate(a.id);
  block(matchAddGenerate(a.id, ANY), function () {});
  addGenerate(b.id);
});

bthread("Generatejitconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGeneratejitconfig(x.id);
  for (var i=0; i<steps; i++) {
    updateGeneratejitconfig(x.id);
  }
  if (pick([true,false])) { deleteGeneratejitconfig(x.id); }
  verifyGeneratejitconfigExists(x.id);
  verifyGeneratejitconfigUpdated(x.id);
});

bthread("Generatejitconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGeneratejitconfig(a.id);
  block(matchAddGeneratejitconfig(a.id, ANY), function () {});
  addGeneratejitconfig(b.id);
});

bthread("Generatenote nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGeneratenote(x.id);
  for (var i=0; i<steps; i++) {
    updateGeneratenote(x.id);
  }
  if (pick([true,false])) { deleteGeneratenote(x.id); }
  verifyGeneratenoteExists(x.id);
  verifyGeneratenoteUpdated(x.id);
});

bthread("Generatenote nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGeneratenote(a.id);
  block(matchAddGeneratenote(a.id, ANY), function () {});
  addGeneratenote(b.id);
});

bthread("Gist nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGist(x.id);
  for (var i=0; i<steps; i++) {
    updateGist(x.id);
  }
  if (pick([true,false])) { deleteGist(x.id); }
  verifyGistExists(x.id);
  verifyGistUpdated(x.id);
});

bthread("Gist nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGist(a.id);
  block(matchAddGist(a.id, ANY), function () {});
  addGist(b.id);
});

bthread("Git nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGit(x.id);
  for (var i=0; i<steps; i++) {
    updateGit(x.id);
  }
  if (pick([true,false])) { deleteGit(x.id); }
  verifyGitExists(x.id);
  verifyGitUpdated(x.id);
});

bthread("Git nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGit(a.id);
  block(matchAddGit(a.id, ANY), function () {});
  addGit(b.id);
});

bthread("Githubowned nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGithubowned(x.id);
  for (var i=0; i<steps; i++) {
    updateGithubowned(x.id);
  }
  if (pick([true,false])) { deleteGithubowned(x.id); }
  verifyGithubownedExists(x.id);
  verifyGithubownedUpdated(x.id);
});

bthread("Githubowned nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGithubowned(a.id);
  block(matchAddGithubowned(a.id, ANY), function () {});
  addGithubowned(b.id);
});

bthread("Gitignore nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGitignore(x.id);
  for (var i=0; i<steps; i++) {
    updateGitignore(x.id);
  }
  if (pick([true,false])) { deleteGitignore(x.id); }
  verifyGitignoreExists(x.id);
  verifyGitignoreUpdated(x.id);
});

bthread("Gitignore nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGitignore(a.id);
  block(matchAddGitignore(a.id, ANY), function () {});
  addGitignore(b.id);
});

bthread("Gpgkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGpgkey(x.id);
  for (var i=0; i<steps; i++) {
    updateGpgkey(x.id);
  }
  if (pick([true,false])) { deleteGpgkey(x.id); }
  verifyGpgkeyExists(x.id);
  verifyGpgkeyUpdated(x.id);
});

bthread("Gpgkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGpgkey(a.id);
  block(matchAddGpgkey(a.id, ANY), function () {});
  addGpgkey(b.id);
});

bthread("Grade nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGrade(x.id);
  for (var i=0; i<steps; i++) {
    updateGrade(x.id);
  }
  if (pick([true,false])) { deleteGrade(x.id); }
  verifyGradeExists(x.id);
  verifyGradeUpdated(x.id);
});

bthread("Grade nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGrade(a.id);
  block(matchAddGrade(a.id, ANY), function () {});
  addGrade(b.id);
});

bthread("Grant nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGrant(x.id);
  for (var i=0; i<steps; i++) {
    updateGrant(x.id);
  }
  if (pick([true,false])) { deleteGrant(x.id); }
  verifyGrantExists(x.id);
  verifyGrantUpdated(x.id);
});

bthread("Grant nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'G' + ids[0] };
  const b = { id: 'G' + ids[1] };
  addGrant(a.id);
  block(matchAddGrant(a.id, ANY), function () {});
  addGrant(b.id);
});

bthread("Health nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addHealth(x.id);
  for (var i=0; i<steps; i++) {
    updateHealth(x.id);
  }
  if (pick([true,false])) { deleteHealth(x.id); }
  verifyHealthExists(x.id);
  verifyHealthUpdated(x.id);
});

bthread("Health nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHealth(a.id);
  block(matchAddHealth(a.id, ANY), function () {});
  addHealth(b.id);
});

bthread("History nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addHistory(x.id);
  for (var i=0; i<steps; i++) {
    updateHistory(x.id);
  }
  if (pick([true,false])) { deleteHistory(x.id); }
  verifyHistoryExists(x.id);
  verifyHistoryUpdated(x.id);
});

bthread("History nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHistory(a.id);
  block(matchAddHistory(a.id, ANY), function () {});
  addHistory(b.id);
});

bthread("Hook nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addHook(x.id);
  for (var i=0; i<steps; i++) {
    updateHook(x.id);
  }
  if (pick([true,false])) { deleteHook(x.id); }
  verifyHookExists(x.id);
  verifyHookUpdated(x.id);
});

bthread("Hook nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHook(a.id);
  block(matchAddHook(a.id, ANY), function () {});
  addHook(b.id);
});

bthread("Hostedrunner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addHostedrunner(x.id);
  for (var i=0; i<steps; i++) {
    updateHostedrunner(x.id);
  }
  if (pick([true,false])) { deleteHostedrunner(x.id); }
  verifyHostedrunnerExists(x.id);
  verifyHostedrunnerUpdated(x.id);
});

bthread("Hostedrunner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHostedrunner(a.id);
  block(matchAddHostedrunner(a.id, ANY), function () {});
  addHostedrunner(b.id);
});

bthread("Hovercard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addHovercard(x.id);
  for (var i=0; i<steps; i++) {
    updateHovercard(x.id);
  }
  if (pick([true,false])) { deleteHovercard(x.id); }
  verifyHovercardExists(x.id);
  verifyHovercardUpdated(x.id);
});

bthread("Hovercard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'H' + ids[0] };
  const b = { id: 'H' + ids[1] };
  addHovercard(a.id);
  block(matchAddHovercard(a.id, ANY), function () {});
  addHovercard(b.id);
});

bthread("Image nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addImage(x.id);
  for (var i=0; i<steps; i++) {
    updateImage(x.id);
  }
  if (pick([true,false])) { deleteImage(x.id); }
  verifyImageExists(x.id);
  verifyImageUpdated(x.id);
});

bthread("Image nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addImage(a.id);
  block(matchAddImage(a.id, ANY), function () {});
  addImage(b.id);
});

bthread("Immutablereleas nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addImmutablereleas(x.id);
  for (var i=0; i<steps; i++) {
    updateImmutablereleas(x.id);
  }
  if (pick([true,false])) { deleteImmutablereleas(x.id); }
  verifyImmutablereleasExists(x.id);
  verifyImmutablereleasUpdated(x.id);
});

bthread("Immutablereleas nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addImmutablereleas(a.id);
  block(matchAddImmutablereleas(a.id, ANY), function () {});
  addImmutablereleas(b.id);
});

bthread("Import nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addImport(x.id);
  for (var i=0; i<steps; i++) {
    updateImport(x.id);
  }
  if (pick([true,false])) { deleteImport(x.id); }
  verifyImportExists(x.id);
  verifyImportUpdated(x.id);
});

bthread("Import nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addImport(a.id);
  block(matchAddImport(a.id, ANY), function () {});
  addImport(b.id);
});

bthread("Insight nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInsight(x.id);
  for (var i=0; i<steps; i++) {
    updateInsight(x.id);
  }
  if (pick([true,false])) { deleteInsight(x.id); }
  verifyInsightExists(x.id);
  verifyInsightUpdated(x.id);
});

bthread("Insight nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInsight(a.id);
  block(matchAddInsight(a.id, ANY), function () {});
  addInsight(b.id);
});

bthread("Installation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInstallation(x.id);
  for (var i=0; i<steps; i++) {
    updateInstallation(x.id);
  }
  if (pick([true,false])) { deleteInstallation(x.id); }
  verifyInstallationExists(x.id);
  verifyInstallationUpdated(x.id);
});

bthread("Installation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInstallation(a.id);
  block(matchAddInstallation(a.id, ANY), function () {});
  addInstallation(b.id);
});

bthread("Installationrequest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInstallationrequest(x.id);
  for (var i=0; i<steps; i++) {
    updateInstallationrequest(x.id);
  }
  if (pick([true,false])) { deleteInstallationrequest(x.id); }
  verifyInstallationrequestExists(x.id);
  verifyInstallationrequestUpdated(x.id);
});

bthread("Installationrequest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInstallationrequest(a.id);
  block(matchAddInstallationrequest(a.id, ANY), function () {});
  addInstallationrequest(b.id);
});

bthread("Instance nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInstance(x.id);
  for (var i=0; i<steps; i++) {
    updateInstance(x.id);
  }
  if (pick([true,false])) { deleteInstance(x.id); }
  verifyInstanceExists(x.id);
  verifyInstanceUpdated(x.id);
});

bthread("Instance nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInstance(a.id);
  block(matchAddInstance(a.id, ANY), function () {});
  addInstance(b.id);
});

bthread("Interactionlimit nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInteractionlimit(x.id);
  for (var i=0; i<steps; i++) {
    updateInteractionlimit(x.id);
  }
  if (pick([true,false])) { deleteInteractionlimit(x.id); }
  verifyInteractionlimitExists(x.id);
  verifyInteractionlimitUpdated(x.id);
});

bthread("Interactionlimit nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInteractionlimit(a.id);
  block(matchAddInteractionlimit(a.id, ANY), function () {});
  addInteractionlimit(b.id);
});

bthread("Invitation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInvitation(x.id);
  for (var i=0; i<steps; i++) {
    updateInvitation(x.id);
  }
  if (pick([true,false])) { deleteInvitation(x.id); }
  verifyInvitationExists(x.id);
  verifyInvitationUpdated(x.id);
});

bthread("Invitation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addInvitation(a.id);
  block(matchAddInvitation(a.id, ANY), function () {});
  addInvitation(b.id);
});

bthread("Issue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIssue(x.id);
  for (var i=0; i<steps; i++) {
    updateIssue(x.id);
  }
  if (pick([true,false])) { deleteIssue(x.id); }
  verifyIssueExists(x.id);
  verifyIssueUpdated(x.id);
});

bthread("Issue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssue(a.id);
  block(matchAddIssue(a.id, ANY), function () {});
  addIssue(b.id);
});

bthread("Issuetype nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIssuetype(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuetype(x.id);
  }
  if (pick([true,false])) { deleteIssuetype(x.id); }
  verifyIssuetypeExists(x.id);
  verifyIssuetypeUpdated(x.id);
});

bthread("Issuetype nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addIssuetype(a.id);
  block(matchAddIssuetype(a.id, ANY), function () {});
  addIssuetype(b.id);
});

bthread("Item nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addItem(x.id);
  for (var i=0; i<steps; i++) {
    updateItem(x.id);
  }
  if (pick([true,false])) { deleteItem(x.id); }
  verifyItemExists(x.id);
  verifyItemUpdated(x.id);
});

bthread("Item nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'I' + ids[0] };
  const b = { id: 'I' + ids[1] };
  addItem(a.id);
  block(matchAddItem(a.id, ANY), function () {});
  addItem(b.id);
});

bthread("Job nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addJob(x.id);
  for (var i=0; i<steps; i++) {
    updateJob(x.id);
  }
  if (pick([true,false])) { deleteJob(x.id); }
  verifyJobExists(x.id);
  verifyJobUpdated(x.id);
});

bthread("Job nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'J' + ids[0] };
  const b = { id: 'J' + ids[1] };
  addJob(a.id);
  block(matchAddJob(a.id, ANY), function () {});
  addJob(b.id);
});

bthread("Key nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const a = { id: 'K' + ids[0] };
  const b = { id: 'K' + ids[1] };
  addKey(a.id);
  block(matchAddKey(a.id, ANY), function () {});
  addKey(b.id);
});

bthread("Label nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLabel(x.id);
  for (var i=0; i<steps; i++) {
    updateLabel(x.id);
  }
  if (pick([true,false])) { deleteLabel(x.id); }
  verifyLabelExists(x.id);
  verifyLabelUpdated(x.id);
});

bthread("Label nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLabel(a.id);
  block(matchAddLabel(a.id, ANY), function () {});
  addLabel(b.id);
});

bthread("Language nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLanguage(x.id);
  for (var i=0; i<steps; i++) {
    updateLanguage(x.id);
  }
  if (pick([true,false])) { deleteLanguage(x.id); }
  verifyLanguageExists(x.id);
  verifyLanguageUpdated(x.id);
});

bthread("Language nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLanguage(a.id);
  block(matchAddLanguage(a.id, ANY), function () {});
  addLanguage(b.id);
});

bthread("Largefile nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLargefile(x.id);
  for (var i=0; i<steps; i++) {
    updateLargefile(x.id);
  }
  if (pick([true,false])) { deleteLargefile(x.id); }
  verifyLargefileExists(x.id);
  verifyLargefileUpdated(x.id);
});

bthread("Largefile nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLargefile(a.id);
  block(matchAddLargefile(a.id, ANY), function () {});
  addLargefile(b.id);
});

bthread("Latest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLatest(x.id);
  for (var i=0; i<steps; i++) {
    updateLatest(x.id);
  }
  if (pick([true,false])) { deleteLatest(x.id); }
  verifyLatestExists(x.id);
  verifyLatestUpdated(x.id);
});

bthread("Latest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLatest(a.id);
  block(matchAddLatest(a.id, ANY), function () {});
  addLatest(b.id);
});

bthread("Lf nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLf(x.id);
  for (var i=0; i<steps; i++) {
    updateLf(x.id);
  }
  if (pick([true,false])) { deleteLf(x.id); }
  verifyLfExists(x.id);
  verifyLfUpdated(x.id);
});

bthread("Lf nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLf(a.id);
  block(matchAddLf(a.id, ANY), function () {});
  addLf(b.id);
});

bthread("Licens nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLicens(x.id);
  for (var i=0; i<steps; i++) {
    updateLicens(x.id);
  }
  if (pick([true,false])) { deleteLicens(x.id); }
  verifyLicensExists(x.id);
  verifyLicensUpdated(x.id);
});

bthread("Licens nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLicens(a.id);
  block(matchAddLicens(a.id, ANY), function () {});
  addLicens(b.id);
});

bthread("License nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLicense(x.id);
  for (var i=0; i<steps; i++) {
    updateLicense(x.id);
  }
  if (pick([true,false])) { deleteLicense(x.id); }
  verifyLicenseExists(x.id);
  verifyLicenseUpdated(x.id);
});

bthread("License nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLicense(a.id);
  block(matchAddLicense(a.id, ANY), function () {});
  addLicense(b.id);
});

bthread("Limit nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLimit(a.id);
  block(matchAddLimit(a.id, ANY), function () {});
  addLimit(b.id);
});

bthread("Location nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLocation(x.id);
  for (var i=0; i<steps; i++) {
    updateLocation(x.id);
  }
  if (pick([true,false])) { deleteLocation(x.id); }
  verifyLocationExists(x.id);
  verifyLocationUpdated(x.id);
});

bthread("Location nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLocation(a.id);
  block(matchAddLocation(a.id, ANY), function () {});
  addLocation(b.id);
});

bthread("Lock nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLock(x.id);
  for (var i=0; i<steps; i++) {
    updateLock(x.id);
  }
  if (pick([true,false])) { deleteLock(x.id); }
  verifyLockExists(x.id);
  verifyLockUpdated(x.id);
});

bthread("Lock nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLock(a.id);
  block(matchAddLock(a.id, ANY), function () {});
  addLock(b.id);
});

bthread("Log nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addLog(x.id);
  for (var i=0; i<steps; i++) {
    updateLog(x.id);
  }
  if (pick([true,false])) { deleteLog(x.id); }
  verifyLogExists(x.id);
  verifyLogUpdated(x.id);
});

bthread("Log nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'L' + ids[0] };
  const b = { id: 'L' + ids[1] };
  addLog(a.id);
  block(matchAddLog(a.id, ANY), function () {});
  addLog(b.id);
});

bthread("Machine nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMachine(x.id);
  for (var i=0; i<steps; i++) {
    updateMachine(x.id);
  }
  if (pick([true,false])) { deleteMachine(x.id); }
  verifyMachineExists(x.id);
  verifyMachineUpdated(x.id);
});

bthread("Machine nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMachine(a.id);
  block(matchAddMachine(a.id, ANY), function () {});
  addMachine(b.id);
});

bthread("Machinesize nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMachinesize(x.id);
  for (var i=0; i<steps; i++) {
    updateMachinesize(x.id);
  }
  if (pick([true,false])) { deleteMachinesize(x.id); }
  verifyMachinesizeExists(x.id);
  verifyMachinesizeUpdated(x.id);
});

bthread("Machinesize nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMachinesize(a.id);
  block(matchAddMachinesize(a.id, ANY), function () {});
  addMachinesize(b.id);
});

bthread("Markdown nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarkdown(x.id);
  for (var i=0; i<steps; i++) {
    updateMarkdown(x.id);
  }
  if (pick([true,false])) { deleteMarkdown(x.id); }
  verifyMarkdownExists(x.id);
  verifyMarkdownUpdated(x.id);
});

bthread("Markdown nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMarkdown(a.id);
  block(matchAddMarkdown(a.id, ANY), function () {});
  addMarkdown(b.id);
});

bthread("Marketplacelisting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarketplacelisting(x.id);
  for (var i=0; i<steps; i++) {
    updateMarketplacelisting(x.id);
  }
  if (pick([true,false])) { deleteMarketplacelisting(x.id); }
  verifyMarketplacelistingExists(x.id);
  verifyMarketplacelistingUpdated(x.id);
});

bthread("Marketplacelisting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMarketplacelisting(a.id);
  block(matchAddMarketplacelisting(a.id, ANY), function () {});
  addMarketplacelisting(b.id);
});

bthread("Marketplacepurchas nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarketplacepurchas(x.id);
  for (var i=0; i<steps; i++) {
    updateMarketplacepurchas(x.id);
  }
  if (pick([true,false])) { deleteMarketplacepurchas(x.id); }
  verifyMarketplacepurchasExists(x.id);
  verifyMarketplacepurchasUpdated(x.id);
});

bthread("Marketplacepurchas nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMarketplacepurchas(a.id);
  block(matchAddMarketplacepurchas(a.id, ANY), function () {});
  addMarketplacepurchas(b.id);
});

bthread("Matchingref nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMatchingref(x.id);
  for (var i=0; i<steps; i++) {
    updateMatchingref(x.id);
  }
  if (pick([true,false])) { deleteMatchingref(x.id); }
  verifyMatchingrefExists(x.id);
  verifyMatchingrefUpdated(x.id);
});

bthread("Matchingref nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMatchingref(a.id);
  block(matchAddMatchingref(a.id, ANY), function () {});
  addMatchingref(b.id);
});

bthread("Member nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMember(x.id);
  for (var i=0; i<steps; i++) {
    updateMember(x.id);
  }
  if (pick([true,false])) { deleteMember(x.id); }
  verifyMemberExists(x.id);
  verifyMemberUpdated(x.id);
});

bthread("Member nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMember(a.id);
  block(matchAddMember(a.id, ANY), function () {});
  addMember(b.id);
});

bthread("Membership nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMembership(x.id);
  for (var i=0; i<steps; i++) {
    updateMembership(x.id);
  }
  if (pick([true,false])) { deleteMembership(x.id); }
  verifyMembershipExists(x.id);
  verifyMembershipUpdated(x.id);
});

bthread("Membership nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMembership(a.id);
  block(matchAddMembership(a.id, ANY), function () {});
  addMembership(b.id);
});

bthread("Merge nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMerge(x.id);
  for (var i=0; i<steps; i++) {
    updateMerge(x.id);
  }
  if (pick([true,false])) { deleteMerge(x.id); }
  verifyMergeExists(x.id);
  verifyMergeUpdated(x.id);
});

bthread("Merge nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMerge(a.id);
  block(matchAddMerge(a.id, ANY), function () {});
  addMerge(b.id);
});

bthread("Mergeupstream nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMergeupstream(x.id);
  for (var i=0; i<steps; i++) {
    updateMergeupstream(x.id);
  }
  if (pick([true,false])) { deleteMergeupstream(x.id); }
  verifyMergeupstreamExists(x.id);
  verifyMergeupstreamUpdated(x.id);
});

bthread("Mergeupstream nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMergeupstream(a.id);
  block(matchAddMergeupstream(a.id, ANY), function () {});
  addMergeupstream(b.id);
});

bthread("Meta nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMeta(x.id);
  for (var i=0; i<steps; i++) {
    updateMeta(x.id);
  }
  if (pick([true,false])) { deleteMeta(x.id); }
  verifyMetaExists(x.id);
  verifyMetaUpdated(x.id);
});

bthread("Meta nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMeta(a.id);
  block(matchAddMeta(a.id, ANY), function () {});
  addMeta(b.id);
});

bthread("Metadata nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMetadata(x.id);
  for (var i=0; i<steps; i++) {
    updateMetadata(x.id);
  }
  if (pick([true,false])) { deleteMetadata(x.id); }
  verifyMetadataExists(x.id);
  verifyMetadataUpdated(x.id);
});

bthread("Metadata nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMetadata(a.id);
  block(matchAddMetadata(a.id, ANY), function () {});
  addMetadata(b.id);
});

bthread("Metric nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMetric(x.id);
  for (var i=0; i<steps; i++) {
    updateMetric(x.id);
  }
  if (pick([true,false])) { deleteMetric(x.id); }
  verifyMetricExists(x.id);
  verifyMetricUpdated(x.id);
});

bthread("Metric nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMetric(a.id);
  block(matchAddMetric(a.id, ANY), function () {});
  addMetric(b.id);
});

bthread("Migration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMigration(x.id);
  for (var i=0; i<steps; i++) {
    updateMigration(x.id);
  }
  if (pick([true,false])) { deleteMigration(x.id); }
  verifyMigrationExists(x.id);
  verifyMigrationUpdated(x.id);
});

bthread("Migration nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMigration(a.id);
  block(matchAddMigration(a.id, ANY), function () {});
  addMigration(b.id);
});

bthread("Milestone nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMilestone(x.id);
  for (var i=0; i<steps; i++) {
    updateMilestone(x.id);
  }
  if (pick([true,false])) { deleteMilestone(x.id); }
  verifyMilestoneExists(x.id);
  verifyMilestoneUpdated(x.id);
});

bthread("Milestone nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMilestone(a.id);
  block(matchAddMilestone(a.id, ANY), function () {});
  addMilestone(b.id);
});

bthread("Move nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMove(x.id);
  for (var i=0; i<steps; i++) {
    updateMove(x.id);
  }
  if (pick([true,false])) { deleteMove(x.id); }
  verifyMoveExists(x.id);
  verifyMoveUpdated(x.id);
});

bthread("Move nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'M' + ids[0] };
  const b = { id: 'M' + ids[1] };
  addMove(a.id);
  block(matchAddMove(a.id, ANY), function () {});
  addMove(b.id);
});

bthread("Network nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNetwork(x.id);
  for (var i=0; i<steps; i++) {
    updateNetwork(x.id);
  }
  if (pick([true,false])) { deleteNetwork(x.id); }
  verifyNetworkExists(x.id);
  verifyNetworkUpdated(x.id);
});

bthread("Network nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNetwork(a.id);
  block(matchAddNetwork(a.id, ANY), function () {});
  addNetwork(b.id);
});

bthread("Networkconfiguration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNetworkconfiguration(x.id);
  for (var i=0; i<steps; i++) {
    updateNetworkconfiguration(x.id);
  }
  if (pick([true,false])) { deleteNetworkconfiguration(x.id); }
  verifyNetworkconfigurationExists(x.id);
  verifyNetworkconfigurationUpdated(x.id);
});

bthread("Networkconfiguration nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNetworkconfiguration(a.id);
  block(matchAddNetworkconfiguration(a.id, ANY), function () {});
  addNetworkconfiguration(b.id);
});

bthread("Networksetting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNetworksetting(x.id);
  for (var i=0; i<steps; i++) {
    updateNetworksetting(x.id);
  }
  if (pick([true,false])) { deleteNetworksetting(x.id); }
  verifyNetworksettingExists(x.id);
  verifyNetworksettingUpdated(x.id);
});

bthread("Networksetting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNetworksetting(a.id);
  block(matchAddNetworksetting(a.id, ANY), function () {});
  addNetworksetting(b.id);
});

bthread("New nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNew(x.id);
  for (var i=0; i<steps; i++) {
    updateNew(x.id);
  }
  if (pick([true,false])) { deleteNew(x.id); }
  verifyNewExists(x.id);
  verifyNewUpdated(x.id);
});

bthread("New nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNew(a.id);
  block(matchAddNew(a.id, ANY), function () {});
  addNew(b.id);
});

bthread("Notification nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNotification(x.id);
  for (var i=0; i<steps; i++) {
    updateNotification(x.id);
  }
  if (pick([true,false])) { deleteNotification(x.id); }
  verifyNotificationExists(x.id);
  verifyNotificationUpdated(x.id);
});

bthread("Notification nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'N' + ids[0] };
  const b = { id: 'N' + ids[1] };
  addNotification(a.id);
  block(matchAddNotification(a.id, ANY), function () {});
  addNotification(b.id);
});

bthread("Octocat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOctocat(x.id);
  for (var i=0; i<steps; i++) {
    updateOctocat(x.id);
  }
  if (pick([true,false])) { deleteOctocat(x.id); }
  verifyOctocatExists(x.id);
  verifyOctocatUpdated(x.id);
});

bthread("Octocat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOctocat(a.id);
  block(matchAddOctocat(a.id, ANY), function () {});
  addOctocat(b.id);
});

bthread("Oidc nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOidc(x.id);
  for (var i=0; i<steps; i++) {
    updateOidc(x.id);
  }
  if (pick([true,false])) { deleteOidc(x.id); }
  verifyOidcExists(x.id);
  verifyOidcUpdated(x.id);
});

bthread("Oidc nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOidc(a.id);
  block(matchAddOidc(a.id, ANY), function () {});
  addOidc(b.id);
});

bthread("Org nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrg(x.id);
  for (var i=0; i<steps; i++) {
    updateOrg(x.id);
  }
  if (pick([true,false])) { deleteOrg(x.id); }
  verifyOrgExists(x.id);
  verifyOrgUpdated(x.id);
});

bthread("Org nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrg(a.id);
  block(matchAddOrg(a.id, ANY), function () {});
  addOrg(b.id);
});

bthread("Organization nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrganization(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganization(x.id);
  }
  if (pick([true,false])) { deleteOrganization(x.id); }
  verifyOrganizationExists(x.id);
  verifyOrganizationUpdated(x.id);
});

bthread("Organization nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrganization(a.id);
  block(matchAddOrganization(a.id, ANY), function () {});
  addOrganization(b.id);
});

bthread("Organizationrole nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrganizationrole(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationrole(x.id);
  }
  if (pick([true,false])) { deleteOrganizationrole(x.id); }
  verifyOrganizationroleExists(x.id);
  verifyOrganizationroleUpdated(x.id);
});

bthread("Organizationrole nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrganizationrole(a.id);
  block(matchAddOrganizationrole(a.id, ANY), function () {});
  addOrganizationrole(b.id);
});

bthread("Organizationsecret nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrganizationsecret(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationsecret(x.id);
  }
  if (pick([true,false])) { deleteOrganizationsecret(x.id); }
  verifyOrganizationsecretExists(x.id);
  verifyOrganizationsecretUpdated(x.id);
});

bthread("Organizationsecret nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrganizationsecret(a.id);
  block(matchAddOrganizationsecret(a.id, ANY), function () {});
  addOrganizationsecret(b.id);
});

bthread("Organizationvariable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOrganizationvariable(x.id);
  for (var i=0; i<steps; i++) {
    updateOrganizationvariable(x.id);
  }
  if (pick([true,false])) { deleteOrganizationvariable(x.id); }
  verifyOrganizationvariableExists(x.id);
  verifyOrganizationvariableUpdated(x.id);
});

bthread("Organizationvariable nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOrganizationvariable(a.id);
  block(matchAddOrganizationvariable(a.id, ANY), function () {});
  addOrganizationvariable(b.id);
});

bthread("Outsidecollaborator nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOutsidecollaborator(x.id);
  for (var i=0; i<steps; i++) {
    updateOutsidecollaborator(x.id);
  }
  if (pick([true,false])) { deleteOutsidecollaborator(x.id); }
  verifyOutsidecollaboratorExists(x.id);
  verifyOutsidecollaboratorUpdated(x.id);
});

bthread("Outsidecollaborator nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'O' + ids[0] };
  const b = { id: 'O' + ids[1] };
  addOutsidecollaborator(a.id);
  block(matchAddOutsidecollaborator(a.id, ANY), function () {});
  addOutsidecollaborator(b.id);
});

bthread("Package nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPackage(x.id);
  for (var i=0; i<steps; i++) {
    updatePackage(x.id);
  }
  if (pick([true,false])) { deletePackage(x.id); }
  verifyPackageExists(x.id);
  verifyPackageUpdated(x.id);
});

bthread("Package nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPackage(a.id);
  block(matchAddPackage(a.id, ANY), function () {});
  addPackage(b.id);
});

bthread("Page nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPage(a.id);
  block(matchAddPage(a.id, ANY), function () {});
  addPage(b.id);
});

bthread("Parent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addParent(x.id);
  for (var i=0; i<steps; i++) {
    updateParent(x.id);
  }
  if (pick([true,false])) { deleteParent(x.id); }
  verifyParentExists(x.id);
  verifyParentUpdated(x.id);
});

bthread("Parent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addParent(a.id);
  block(matchAddParent(a.id, ANY), function () {});
  addParent(b.id);
});

bthread("Participation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addParticipation(x.id);
  for (var i=0; i<steps; i++) {
    updateParticipation(x.id);
  }
  if (pick([true,false])) { deleteParticipation(x.id); }
  verifyParticipationExists(x.id);
  verifyParticipationUpdated(x.id);
});

bthread("Participation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addParticipation(a.id);
  block(matchAddParticipation(a.id, ANY), function () {});
  addParticipation(b.id);
});

bthread("Partner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPartner(x.id);
  for (var i=0; i<steps; i++) {
    updatePartner(x.id);
  }
  if (pick([true,false])) { deletePartner(x.id); }
  verifyPartnerExists(x.id);
  verifyPartnerUpdated(x.id);
});

bthread("Partner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPartner(a.id);
  block(matchAddPartner(a.id, ANY), function () {});
  addPartner(b.id);
});

bthread("Path nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPath(x.id);
  for (var i=0; i<steps; i++) {
    updatePath(x.id);
  }
  if (pick([true,false])) { deletePath(x.id); }
  verifyPathExists(x.id);
  verifyPathUpdated(x.id);
});

bthread("Path nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPath(a.id);
  block(matchAddPath(a.id, ANY), function () {});
  addPath(b.id);
});

bthread("Patternconfiguration nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPatternconfiguration(x.id);
  for (var i=0; i<steps; i++) {
    updatePatternconfiguration(x.id);
  }
  if (pick([true,false])) { deletePatternconfiguration(x.id); }
  verifyPatternconfigurationExists(x.id);
  verifyPatternconfigurationUpdated(x.id);
});

bthread("Patternconfiguration nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPatternconfiguration(a.id);
  block(matchAddPatternconfiguration(a.id, ANY), function () {});
  addPatternconfiguration(b.id);
});

bthread("Pendingdeployment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPendingdeployment(x.id);
  for (var i=0; i<steps; i++) {
    updatePendingdeployment(x.id);
  }
  if (pick([true,false])) { deletePendingdeployment(x.id); }
  verifyPendingdeploymentExists(x.id);
  verifyPendingdeploymentUpdated(x.id);
});

bthread("Pendingdeployment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPendingdeployment(a.id);
  block(matchAddPendingdeployment(a.id, ANY), function () {});
  addPendingdeployment(b.id);
});

bthread("Permission nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPermission(x.id);
  for (var i=0; i<steps; i++) {
    updatePermission(x.id);
  }
  if (pick([true,false])) { deletePermission(x.id); }
  verifyPermissionExists(x.id);
  verifyPermissionUpdated(x.id);
});

bthread("Permission nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPermission(a.id);
  block(matchAddPermission(a.id, ANY), function () {});
  addPermission(b.id);
});

bthread("Permissionscheck nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPermissionscheck(x.id);
  for (var i=0; i<steps; i++) {
    updatePermissionscheck(x.id);
  }
  if (pick([true,false])) { deletePermissionscheck(x.id); }
  verifyPermissionscheckExists(x.id);
  verifyPermissionscheckUpdated(x.id);
});

bthread("Permissionscheck nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPermissionscheck(a.id);
  block(matchAddPermissionscheck(a.id, ANY), function () {});
  addPermissionscheck(b.id);
});

bthread("Personalaccesstoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPersonalaccesstoken(x.id);
  for (var i=0; i<steps; i++) {
    updatePersonalaccesstoken(x.id);
  }
  if (pick([true,false])) { deletePersonalaccesstoken(x.id); }
  verifyPersonalaccesstokenExists(x.id);
  verifyPersonalaccesstokenUpdated(x.id);
});

bthread("Personalaccesstoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPersonalaccesstoken(a.id);
  block(matchAddPersonalaccesstoken(a.id, ANY), function () {});
  addPersonalaccesstoken(b.id);
});

bthread("Personalaccesstokenrequest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPersonalaccesstokenrequest(x.id);
  for (var i=0; i<steps; i++) {
    updatePersonalaccesstokenrequest(x.id);
  }
  if (pick([true,false])) { deletePersonalaccesstokenrequest(x.id); }
  verifyPersonalaccesstokenrequestExists(x.id);
  verifyPersonalaccesstokenrequestUpdated(x.id);
});

bthread("Personalaccesstokenrequest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPersonalaccesstokenrequest(a.id);
  block(matchAddPersonalaccesstokenrequest(a.id, ANY), function () {});
  addPersonalaccesstokenrequest(b.id);
});

bthread("Ping nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPing(x.id);
  for (var i=0; i<steps; i++) {
    updatePing(x.id);
  }
  if (pick([true,false])) { deletePing(x.id); }
  verifyPingExists(x.id);
  verifyPingUpdated(x.id);
});

bthread("Ping nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPing(a.id);
  block(matchAddPing(a.id, ANY), function () {});
  addPing(b.id);
});

bthread("Plan nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPlan(x.id);
  for (var i=0; i<steps; i++) {
    updatePlan(x.id);
  }
  if (pick([true,false])) { deletePlan(x.id); }
  verifyPlanExists(x.id);
  verifyPlanUpdated(x.id);
});

bthread("Plan nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPlan(a.id);
  block(matchAddPlan(a.id, ANY), function () {});
  addPlan(b.id);
});

bthread("Platform nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPlatform(x.id);
  for (var i=0; i<steps; i++) {
    updatePlatform(x.id);
  }
  if (pick([true,false])) { deletePlatform(x.id); }
  verifyPlatformExists(x.id);
  verifyPlatformUpdated(x.id);
});

bthread("Platform nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPlatform(a.id);
  block(matchAddPlatform(a.id, ANY), function () {});
  addPlatform(b.id);
});

bthread("Popular nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPopular(x.id);
  for (var i=0; i<steps; i++) {
    updatePopular(x.id);
  }
  if (pick([true,false])) { deletePopular(x.id); }
  verifyPopularExists(x.id);
  verifyPopularUpdated(x.id);
});

bthread("Popular nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPopular(a.id);
  block(matchAddPopular(a.id, ANY), function () {});
  addPopular(b.id);
});

bthread("Preference nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPreference(x.id);
  for (var i=0; i<steps; i++) {
    updatePreference(x.id);
  }
  if (pick([true,false])) { deletePreference(x.id); }
  verifyPreferenceExists(x.id);
  verifyPreferenceUpdated(x.id);
});

bthread("Preference nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPreference(a.id);
  block(matchAddPreference(a.id, ANY), function () {});
  addPreference(b.id);
});

bthread("Premiumrequest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPremiumrequest(x.id);
  for (var i=0; i<steps; i++) {
    updatePremiumrequest(x.id);
  }
  if (pick([true,false])) { deletePremiumrequest(x.id); }
  verifyPremiumrequestExists(x.id);
  verifyPremiumrequestUpdated(x.id);
});

bthread("Premiumrequest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPremiumrequest(a.id);
  block(matchAddPremiumrequest(a.id, ANY), function () {});
  addPremiumrequest(b.id);
});

bthread("Priority nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPriority(x.id);
  for (var i=0; i<steps; i++) {
    updatePriority(x.id);
  }
  if (pick([true,false])) { deletePriority(x.id); }
  verifyPriorityExists(x.id);
  verifyPriorityUpdated(x.id);
});

bthread("Priority nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPriority(a.id);
  block(matchAddPriority(a.id, ANY), function () {});
  addPriority(b.id);
});

bthread("Privateregistry nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPrivateregistry(x.id);
  for (var i=0; i<steps; i++) {
    updatePrivateregistry(x.id);
  }
  if (pick([true,false])) { deletePrivateregistry(x.id); }
  verifyPrivateregistryExists(x.id);
  verifyPrivateregistryUpdated(x.id);
});

bthread("Privateregistry nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPrivateregistry(a.id);
  block(matchAddPrivateregistry(a.id, ANY), function () {});
  addPrivateregistry(b.id);
});

bthread("Privatevulnerabilityreporting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPrivatevulnerabilityreporting(x.id);
  for (var i=0; i<steps; i++) {
    updatePrivatevulnerabilityreporting(x.id);
  }
  if (pick([true,false])) { deletePrivatevulnerabilityreporting(x.id); }
  verifyPrivatevulnerabilityreportingExists(x.id);
  verifyPrivatevulnerabilityreportingUpdated(x.id);
});

bthread("Privatevulnerabilityreporting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPrivatevulnerabilityreporting(a.id);
  block(matchAddPrivatevulnerabilityreporting(a.id, ANY), function () {});
  addPrivatevulnerabilityreporting(b.id);
});

bthread("Profile nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addProfile(x.id);
  for (var i=0; i<steps; i++) {
    updateProfile(x.id);
  }
  if (pick([true,false])) { deleteProfile(x.id); }
  verifyProfileExists(x.id);
  verifyProfileUpdated(x.id);
});

bthread("Profile nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProfile(a.id);
  block(matchAddProfile(a.id, ANY), function () {});
  addProfile(b.id);
});

bthread("Project nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addProject(x.id);
  for (var i=0; i<steps; i++) {
    updateProject(x.id);
  }
  if (pick([true,false])) { deleteProject(x.id); }
  verifyProjectExists(x.id);
  verifyProjectUpdated(x.id);
});

bthread("Project nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProject(a.id);
  block(matchAddProject(a.id, ANY), function () {});
  addProject(b.id);
});

bthread("Projectsv2 nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addProjectsv2(x.id);
  for (var i=0; i<steps; i++) {
    updateProjectsv2(x.id);
  }
  if (pick([true,false])) { deleteProjectsv2(x.id); }
  verifyProjectsv2Exists(x.id);
  verifyProjectsv2Updated(x.id);
});

bthread("Projectsv2 nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProjectsv2(a.id);
  block(matchAddProjectsv2(a.id, ANY), function () {});
  addProjectsv2(b.id);
});

bthread("Property nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addProperty(x.id);
  for (var i=0; i<steps; i++) {
    updateProperty(x.id);
  }
  if (pick([true,false])) { deleteProperty(x.id); }
  verifyPropertyExists(x.id);
  verifyPropertyUpdated(x.id);
});

bthread("Property nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProperty(a.id);
  block(matchAddProperty(a.id, ANY), function () {});
  addProperty(b.id);
});

bthread("Protection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addProtection(x.id);
  for (var i=0; i<steps; i++) {
    updateProtection(x.id);
  }
  if (pick([true,false])) { deleteProtection(x.id); }
  verifyProtectionExists(x.id);
  verifyProtectionUpdated(x.id);
});

bthread("Protection nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addProtection(a.id);
  block(matchAddProtection(a.id, ANY), function () {});
  addProtection(b.id);
});

bthread("Public nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPublic(x.id);
  for (var i=0; i<steps; i++) {
    updatePublic(x.id);
  }
  if (pick([true,false])) { deletePublic(x.id); }
  verifyPublicExists(x.id);
  verifyPublicUpdated(x.id);
});

bthread("Public nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPublic(a.id);
  block(matchAddPublic(a.id, ANY), function () {});
  addPublic(b.id);
});

bthread("Publicemail nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPublicemail(x.id);
  for (var i=0; i<steps; i++) {
    updatePublicemail(x.id);
  }
  if (pick([true,false])) { deletePublicemail(x.id); }
  verifyPublicemailExists(x.id);
  verifyPublicemailUpdated(x.id);
});

bthread("Publicemail nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPublicemail(a.id);
  block(matchAddPublicemail(a.id, ANY), function () {});
  addPublicemail(b.id);
});

bthread("Publickey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPublickey(x.id);
  for (var i=0; i<steps; i++) {
    updatePublickey(x.id);
  }
  if (pick([true,false])) { deletePublickey(x.id); }
  verifyPublickeyExists(x.id);
  verifyPublickeyUpdated(x.id);
});

bthread("Publickey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPublickey(a.id);
  block(matchAddPublickey(a.id, ANY), function () {});
  addPublickey(b.id);
});

bthread("Publicmember nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPublicmember(x.id);
  for (var i=0; i<steps; i++) {
    updatePublicmember(x.id);
  }
  if (pick([true,false])) { deletePublicmember(x.id); }
  verifyPublicmemberExists(x.id);
  verifyPublicmemberUpdated(x.id);
});

bthread("Publicmember nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPublicmember(a.id);
  block(matchAddPublicmember(a.id, ANY), function () {});
  addPublicmember(b.id);
});

bthread("Publish nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPublish(x.id);
  for (var i=0; i<steps; i++) {
    updatePublish(x.id);
  }
  if (pick([true,false])) { deletePublish(x.id); }
  verifyPublishExists(x.id);
  verifyPublishUpdated(x.id);
});

bthread("Publish nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPublish(a.id);
  block(matchAddPublish(a.id, ANY), function () {});
  addPublish(b.id);
});

bthread("Pull nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPull(x.id);
  for (var i=0; i<steps; i++) {
    updatePull(x.id);
  }
  if (pick([true,false])) { deletePull(x.id); }
  verifyPullExists(x.id);
  verifyPullUpdated(x.id);
});

bthread("Pull nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPull(a.id);
  block(matchAddPull(a.id, ANY), function () {});
  addPull(b.id);
});

bthread("Punchcard nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPunchcard(x.id);
  for (var i=0; i<steps; i++) {
    updatePunchcard(x.id);
  }
  if (pick([true,false])) { deletePunchcard(x.id); }
  verifyPunchcardExists(x.id);
  verifyPunchcardUpdated(x.id);
});

bthread("Punchcard nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPunchcard(a.id);
  block(matchAddPunchcard(a.id, ANY), function () {});
  addPunchcard(b.id);
});

bthread("Pushprotectionbypass nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPushprotectionbypass(x.id);
  for (var i=0; i<steps; i++) {
    updatePushprotectionbypass(x.id);
  }
  if (pick([true,false])) { deletePushprotectionbypass(x.id); }
  verifyPushprotectionbypassExists(x.id);
  verifyPushprotectionbypassUpdated(x.id);
});

bthread("Pushprotectionbypass nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'P' + ids[0] };
  const b = { id: 'P' + ids[1] };
  addPushprotectionbypass(a.id);
  block(matchAddPushprotectionbypass(a.id, ANY), function () {});
  addPushprotectionbypass(b.id);
});

bthread("Ratelimit nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRatelimit(x.id);
  for (var i=0; i<steps; i++) {
    updateRatelimit(x.id);
  }
  if (pick([true,false])) { deleteRatelimit(x.id); }
  verifyRatelimitExists(x.id);
  verifyRatelimitUpdated(x.id);
});

bthread("Ratelimit nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRatelimit(a.id);
  block(matchAddRatelimit(a.id, ANY), function () {});
  addRatelimit(b.id);
});

bthread("Raw nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRaw(x.id);
  for (var i=0; i<steps; i++) {
    updateRaw(x.id);
  }
  if (pick([true,false])) { deleteRaw(x.id); }
  verifyRawExists(x.id);
  verifyRawUpdated(x.id);
});

bthread("Raw nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRaw(a.id);
  block(matchAddRaw(a.id, ANY), function () {});
  addRaw(b.id);
});

bthread("Reaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReaction(x.id);
  for (var i=0; i<steps; i++) {
    updateReaction(x.id);
  }
  if (pick([true,false])) { deleteReaction(x.id); }
  verifyReactionExists(x.id);
  verifyReactionUpdated(x.id);
});

bthread("Reaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReaction(a.id);
  block(matchAddReaction(a.id, ANY), function () {});
  addReaction(b.id);
});

bthread("Readme nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReadme(x.id);
  for (var i=0; i<steps; i++) {
    updateReadme(x.id);
  }
  if (pick([true,false])) { deleteReadme(x.id); }
  verifyReadmeExists(x.id);
  verifyReadmeUpdated(x.id);
});

bthread("Readme nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReadme(a.id);
  block(matchAddReadme(a.id, ANY), function () {});
  addReadme(b.id);
});

bthread("Receivedevent nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReceivedevent(x.id);
  for (var i=0; i<steps; i++) {
    updateReceivedevent(x.id);
  }
  if (pick([true,false])) { deleteReceivedevent(x.id); }
  verifyReceivedeventExists(x.id);
  verifyReceivedeventUpdated(x.id);
});

bthread("Receivedevent nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReceivedevent(a.id);
  block(matchAddReceivedevent(a.id, ANY), function () {});
  addReceivedevent(b.id);
});

bthread("Ref nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRef(x.id);
  for (var i=0; i<steps; i++) {
    updateRef(x.id);
  }
  if (pick([true,false])) { deleteRef(x.id); }
  verifyRefExists(x.id);
  verifyRefUpdated(x.id);
});

bthread("Ref nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRef(a.id);
  block(matchAddRef(a.id, ANY), function () {});
  addRef(b.id);
});

bthread("Referrer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReferrer(x.id);
  for (var i=0; i<steps; i++) {
    updateReferrer(x.id);
  }
  if (pick([true,false])) { deleteReferrer(x.id); }
  verifyReferrerExists(x.id);
  verifyReferrerUpdated(x.id);
});

bthread("Referrer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReferrer(a.id);
  block(matchAddReferrer(a.id, ANY), function () {});
  addReferrer(b.id);
});

bthread("Registrationtoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRegistrationtoken(x.id);
  for (var i=0; i<steps; i++) {
    updateRegistrationtoken(x.id);
  }
  if (pick([true,false])) { deleteRegistrationtoken(x.id); }
  verifyRegistrationtokenExists(x.id);
  verifyRegistrationtokenUpdated(x.id);
});

bthread("Registrationtoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRegistrationtoken(a.id);
  block(matchAddRegistrationtoken(a.id, ANY), function () {});
  addRegistrationtoken(b.id);
});

bthread("Releas nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReleas(x.id);
  for (var i=0; i<steps; i++) {
    updateReleas(x.id);
  }
  if (pick([true,false])) { deleteReleas(x.id); }
  verifyReleasExists(x.id);
  verifyReleasUpdated(x.id);
});

bthread("Releas nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReleas(a.id);
  block(matchAddReleas(a.id, ANY), function () {});
  addReleas(b.id);
});

bthread("Remove nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRemove(x.id);
  for (var i=0; i<steps; i++) {
    updateRemove(x.id);
  }
  if (pick([true,false])) { deleteRemove(x.id); }
  verifyRemoveExists(x.id);
  verifyRemoveUpdated(x.id);
});

bthread("Remove nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRemove(a.id);
  block(matchAddRemove(a.id, ANY), function () {});
  addRemove(b.id);
});

bthread("Removetoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRemovetoken(x.id);
  for (var i=0; i<steps; i++) {
    updateRemovetoken(x.id);
  }
  if (pick([true,false])) { deleteRemovetoken(x.id); }
  verifyRemovetokenExists(x.id);
  verifyRemovetokenUpdated(x.id);
});

bthread("Removetoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRemovetoken(a.id);
  block(matchAddRemovetoken(a.id, ANY), function () {});
  addRemovetoken(b.id);
});

bthread("Rename nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRename(x.id);
  for (var i=0; i<steps; i++) {
    updateRename(x.id);
  }
  if (pick([true,false])) { deleteRename(x.id); }
  verifyRenameExists(x.id);
  verifyRenameUpdated(x.id);
});

bthread("Rename nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRename(a.id);
  block(matchAddRename(a.id, ANY), function () {});
  addRename(b.id);
});

bthread("Reply nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReply(x.id);
  for (var i=0; i<steps; i++) {
    updateReply(x.id);
  }
  if (pick([true,false])) { deleteReply(x.id); }
  verifyReplyExists(x.id);
  verifyReplyUpdated(x.id);
});

bthread("Reply nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReply(a.id);
  block(matchAddReply(a.id, ANY), function () {});
  addReply(b.id);
});

bthread("Repo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRepo(x.id);
  for (var i=0; i<steps; i++) {
    updateRepo(x.id);
  }
  if (pick([true,false])) { deleteRepo(x.id); }
  verifyRepoExists(x.id);
  verifyRepoUpdated(x.id);
});

bthread("Repo nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRepo(a.id);
  block(matchAddRepo(a.id, ANY), function () {});
  addRepo(b.id);
});

bthread("Report nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReport(x.id);
  for (var i=0; i<steps; i++) {
    updateReport(x.id);
  }
  if (pick([true,false])) { deleteReport(x.id); }
  verifyReportExists(x.id);
  verifyReportUpdated(x.id);
});

bthread("Report nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReport(a.id);
  block(matchAddReport(a.id, ANY), function () {});
  addReport(b.id);
});

bthread("Repository nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRepository(x.id);
  for (var i=0; i<steps; i++) {
    updateRepository(x.id);
  }
  if (pick([true,false])) { deleteRepository(x.id); }
  verifyRepositoryExists(x.id);
  verifyRepositoryUpdated(x.id);
});

bthread("Repository nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRepository(a.id);
  block(matchAddRepository(a.id, ANY), function () {});
  addRepository(b.id);
});

bthread("Repositoryacces nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRepositoryacces(x.id);
  for (var i=0; i<steps; i++) {
    updateRepositoryacces(x.id);
  }
  if (pick([true,false])) { deleteRepositoryacces(x.id); }
  verifyRepositoryaccesExists(x.id);
  verifyRepositoryaccesUpdated(x.id);
});

bthread("Repositoryacces nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRepositoryacces(a.id);
  block(matchAddRepositoryacces(a.id, ANY), function () {});
  addRepositoryacces(b.id);
});

bthread("Repositoryinvitation nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRepositoryinvitation(x.id);
  for (var i=0; i<steps; i++) {
    updateRepositoryinvitation(x.id);
  }
  if (pick([true,false])) { deleteRepositoryinvitation(x.id); }
  verifyRepositoryinvitationExists(x.id);
  verifyRepositoryinvitationUpdated(x.id);
});

bthread("Repositoryinvitation nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRepositoryinvitation(a.id);
  block(matchAddRepositoryinvitation(a.id, ANY), function () {});
  addRepositoryinvitation(b.id);
});

bthread("Requestedreviewer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRequestedreviewer(x.id);
  for (var i=0; i<steps; i++) {
    updateRequestedreviewer(x.id);
  }
  if (pick([true,false])) { deleteRequestedreviewer(x.id); }
  verifyRequestedreviewerExists(x.id);
  verifyRequestedreviewerUpdated(x.id);
});

bthread("Requestedreviewer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRequestedreviewer(a.id);
  block(matchAddRequestedreviewer(a.id, ANY), function () {});
  addRequestedreviewer(b.id);
});

bthread("Requiredpullrequestreview nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRequiredpullrequestreview(x.id);
  for (var i=0; i<steps; i++) {
    updateRequiredpullrequestreview(x.id);
  }
  if (pick([true,false])) { deleteRequiredpullrequestreview(x.id); }
  verifyRequiredpullrequestreviewExists(x.id);
  verifyRequiredpullrequestreviewUpdated(x.id);
});

bthread("Requiredpullrequestreview nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRequiredpullrequestreview(a.id);
  block(matchAddRequiredpullrequestreview(a.id, ANY), function () {});
  addRequiredpullrequestreview(b.id);
});

bthread("Requiredsignature nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRequiredsignature(x.id);
  for (var i=0; i<steps; i++) {
    updateRequiredsignature(x.id);
  }
  if (pick([true,false])) { deleteRequiredsignature(x.id); }
  verifyRequiredsignatureExists(x.id);
  verifyRequiredsignatureUpdated(x.id);
});

bthread("Requiredsignature nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRequiredsignature(a.id);
  block(matchAddRequiredsignature(a.id, ANY), function () {});
  addRequiredsignature(b.id);
});

bthread("Requiredstatuscheck nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRequiredstatuscheck(x.id);
  for (var i=0; i<steps; i++) {
    updateRequiredstatuscheck(x.id);
  }
  if (pick([true,false])) { deleteRequiredstatuscheck(x.id); }
  verifyRequiredstatuscheckExists(x.id);
  verifyRequiredstatuscheckUpdated(x.id);
});

bthread("Requiredstatuscheck nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRequiredstatuscheck(a.id);
  block(matchAddRequiredstatuscheck(a.id, ANY), function () {});
  addRequiredstatuscheck(b.id);
});

bthread("Rerequest nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRerequest(x.id);
  for (var i=0; i<steps; i++) {
    updateRerequest(x.id);
  }
  if (pick([true,false])) { deleteRerequest(x.id); }
  verifyRerequestExists(x.id);
  verifyRerequestUpdated(x.id);
});

bthread("Rerequest nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRerequest(a.id);
  block(matchAddRerequest(a.id, ANY), function () {});
  addRerequest(b.id);
});

bthread("Rerun nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRerun(x.id);
  for (var i=0; i<steps; i++) {
    updateRerun(x.id);
  }
  if (pick([true,false])) { deleteRerun(x.id); }
  verifyRerunExists(x.id);
  verifyRerunUpdated(x.id);
});

bthread("Rerun nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRerun(a.id);
  block(matchAddRerun(a.id, ANY), function () {});
  addRerun(b.id);
});

bthread("Rerunfailedjob nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRerunfailedjob(x.id);
  for (var i=0; i<steps; i++) {
    updateRerunfailedjob(x.id);
  }
  if (pick([true,false])) { deleteRerunfailedjob(x.id); }
  verifyRerunfailedjobExists(x.id);
  verifyRerunfailedjobUpdated(x.id);
});

bthread("Rerunfailedjob nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRerunfailedjob(a.id);
  block(matchAddRerunfailedjob(a.id, ANY), function () {});
  addRerunfailedjob(b.id);
});

bthread("Restore nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRestore(x.id);
  for (var i=0; i<steps; i++) {
    updateRestore(x.id);
  }
  if (pick([true,false])) { deleteRestore(x.id); }
  verifyRestoreExists(x.id);
  verifyRestoreUpdated(x.id);
});

bthread("Restore nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRestore(a.id);
  block(matchAddRestore(a.id, ANY), function () {});
  addRestore(b.id);
});

bthread("Restriction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRestriction(x.id);
  for (var i=0; i<steps; i++) {
    updateRestriction(x.id);
  }
  if (pick([true,false])) { deleteRestriction(x.id); }
  verifyRestrictionExists(x.id);
  verifyRestrictionUpdated(x.id);
});

bthread("Restriction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRestriction(a.id);
  block(matchAddRestriction(a.id, ANY), function () {});
  addRestriction(b.id);
});

bthread("Review nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReview(x.id);
  for (var i=0; i<steps; i++) {
    updateReview(x.id);
  }
  if (pick([true,false])) { deleteReview(x.id); }
  verifyReviewExists(x.id);
  verifyReviewUpdated(x.id);
});

bthread("Review nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addReview(a.id);
  block(matchAddReview(a.id, ANY), function () {});
  addReview(b.id);
});

bthread("Revoke nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRevoke(x.id);
  for (var i=0; i<steps; i++) {
    updateRevoke(x.id);
  }
  if (pick([true,false])) { deleteRevoke(x.id); }
  verifyRevokeExists(x.id);
  verifyRevokeUpdated(x.id);
});

bthread("Revoke nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRevoke(a.id);
  block(matchAddRevoke(a.id, ANY), function () {});
  addRevoke(b.id);
});

bthread("Routestat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRoutestat(x.id);
  for (var i=0; i<steps; i++) {
    updateRoutestat(x.id);
  }
  if (pick([true,false])) { deleteRoutestat(x.id); }
  verifyRoutestatExists(x.id);
  verifyRoutestatUpdated(x.id);
});

bthread("Routestat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRoutestat(a.id);
  block(matchAddRoutestat(a.id, ANY), function () {});
  addRoutestat(b.id);
});

bthread("Rule nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRule(x.id);
  for (var i=0; i<steps; i++) {
    updateRule(x.id);
  }
  if (pick([true,false])) { deleteRule(x.id); }
  verifyRuleExists(x.id);
  verifyRuleUpdated(x.id);
});

bthread("Rule nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRule(a.id);
  block(matchAddRule(a.id, ANY), function () {});
  addRule(b.id);
});

bthread("Ruleset nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRuleset(x.id);
  for (var i=0; i<steps; i++) {
    updateRuleset(x.id);
  }
  if (pick([true,false])) { deleteRuleset(x.id); }
  verifyRulesetExists(x.id);
  verifyRulesetUpdated(x.id);
});

bthread("Ruleset nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRuleset(a.id);
  block(matchAddRuleset(a.id, ANY), function () {});
  addRuleset(b.id);
});

bthread("Rulesuite nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRulesuite(x.id);
  for (var i=0; i<steps; i++) {
    updateRulesuite(x.id);
  }
  if (pick([true,false])) { deleteRulesuite(x.id); }
  verifyRulesuiteExists(x.id);
  verifyRulesuiteUpdated(x.id);
});

bthread("Rulesuite nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRulesuite(a.id);
  block(matchAddRulesuite(a.id, ANY), function () {});
  addRulesuite(b.id);
});

bthread("Run nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRun(x.id);
  for (var i=0; i<steps; i++) {
    updateRun(x.id);
  }
  if (pick([true,false])) { deleteRun(x.id); }
  verifyRunExists(x.id);
  verifyRunUpdated(x.id);
});

bthread("Run nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRun(a.id);
  block(matchAddRun(a.id, ANY), function () {});
  addRun(b.id);
});

bthread("Runner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRunner(x.id);
  for (var i=0; i<steps; i++) {
    updateRunner(x.id);
  }
  if (pick([true,false])) { deleteRunner(x.id); }
  verifyRunnerExists(x.id);
  verifyRunnerUpdated(x.id);
});

bthread("Runner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRunner(a.id);
  block(matchAddRunner(a.id, ANY), function () {});
  addRunner(b.id);
});

bthread("Runnergroup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRunnergroup(x.id);
  for (var i=0; i<steps; i++) {
    updateRunnergroup(x.id);
  }
  if (pick([true,false])) { deleteRunnergroup(x.id); }
  verifyRunnergroupExists(x.id);
  verifyRunnergroupUpdated(x.id);
});

bthread("Runnergroup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'R' + ids[0] };
  const b = { id: 'R' + ids[1] };
  addRunnergroup(a.id);
  block(matchAddRunnergroup(a.id, ANY), function () {});
  addRunnergroup(b.id);
});

bthread("Sarif nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSarif(x.id);
  for (var i=0; i<steps; i++) {
    updateSarif(x.id);
  }
  if (pick([true,false])) { deleteSarif(x.id); }
  verifySarifExists(x.id);
  verifySarifUpdated(x.id);
});

bthread("Sarif nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSarif(a.id);
  block(matchAddSarif(a.id, ANY), function () {});
  addSarif(b.id);
});

bthread("Sbom nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSbom(x.id);
  for (var i=0; i<steps; i++) {
    updateSbom(x.id);
  }
  if (pick([true,false])) { deleteSbom(x.id); }
  verifySbomExists(x.id);
  verifySbomUpdated(x.id);
});

bthread("Sbom nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSbom(a.id);
  block(matchAddSbom(a.id, ANY), function () {});
  addSbom(b.id);
});

bthread("Scanhistory nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addScanhistory(x.id);
  for (var i=0; i<steps; i++) {
    updateScanhistory(x.id);
  }
  if (pick([true,false])) { deleteScanhistory(x.id); }
  verifyScanhistoryExists(x.id);
  verifyScanhistoryUpdated(x.id);
});

bthread("Scanhistory nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addScanhistory(a.id);
  block(matchAddScanhistory(a.id, ANY), function () {});
  addScanhistory(b.id);
});

bthread("Schema nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSchema(x.id);
  for (var i=0; i<steps; i++) {
    updateSchema(x.id);
  }
  if (pick([true,false])) { deleteSchema(x.id); }
  verifySchemaExists(x.id);
  verifySchemaUpdated(x.id);
});

bthread("Schema nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSchema(a.id);
  block(matchAddSchema(a.id, ANY), function () {});
  addSchema(b.id);
});

bthread("Scoped nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addScoped(x.id);
  for (var i=0; i<steps; i++) {
    updateScoped(x.id);
  }
  if (pick([true,false])) { deleteScoped(x.id); }
  verifyScopedExists(x.id);
  verifyScopedUpdated(x.id);
});

bthread("Scoped nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addScoped(a.id);
  block(matchAddScoped(a.id, ANY), function () {});
  addScoped(b.id);
});

bthread("Search nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSearch(x.id);
  for (var i=0; i<steps; i++) {
    updateSearch(x.id);
  }
  if (pick([true,false])) { deleteSearch(x.id); }
  verifySearchExists(x.id);
  verifySearchUpdated(x.id);
});

bthread("Search nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSearch(a.id);
  block(matchAddSearch(a.id, ANY), function () {});
  addSearch(b.id);
});

bthread("Seat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSeat(x.id);
  for (var i=0; i<steps; i++) {
    updateSeat(x.id);
  }
  if (pick([true,false])) { deleteSeat(x.id); }
  verifySeatExists(x.id);
  verifySeatUpdated(x.id);
});

bthread("Seat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSeat(a.id);
  block(matchAddSeat(a.id, ANY), function () {});
  addSeat(b.id);
});

bthread("Secret nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSecret(x.id);
  for (var i=0; i<steps; i++) {
    updateSecret(x.id);
  }
  if (pick([true,false])) { deleteSecret(x.id); }
  verifySecretExists(x.id);
  verifySecretUpdated(x.id);
});

bthread("Secret nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSecret(a.id);
  block(matchAddSecret(a.id, ANY), function () {});
  addSecret(b.id);
});

bthread("Secretscanning nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSecretscanning(x.id);
  for (var i=0; i<steps; i++) {
    updateSecretscanning(x.id);
  }
  if (pick([true,false])) { deleteSecretscanning(x.id); }
  verifySecretscanningExists(x.id);
  verifySecretscanningUpdated(x.id);
});

bthread("Secretscanning nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSecretscanning(a.id);
  block(matchAddSecretscanning(a.id, ANY), function () {});
  addSecretscanning(b.id);
});

bthread("Securityadvisory nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSecurityadvisory(x.id);
  for (var i=0; i<steps; i++) {
    updateSecurityadvisory(x.id);
  }
  if (pick([true,false])) { deleteSecurityadvisory(x.id); }
  verifySecurityadvisoryExists(x.id);
  verifySecurityadvisoryUpdated(x.id);
});

bthread("Securityadvisory nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSecurityadvisory(a.id);
  block(matchAddSecurityadvisory(a.id, ANY), function () {});
  addSecurityadvisory(b.id);
});

bthread("Securitymanager nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSecuritymanager(x.id);
  for (var i=0; i<steps; i++) {
    updateSecuritymanager(x.id);
  }
  if (pick([true,false])) { deleteSecuritymanager(x.id); }
  verifySecuritymanagerExists(x.id);
  verifySecuritymanagerUpdated(x.id);
});

bthread("Securitymanager nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSecuritymanager(a.id);
  block(matchAddSecuritymanager(a.id, ANY), function () {});
  addSecuritymanager(b.id);
});

bthread("Selectedaction nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSelectedaction(x.id);
  for (var i=0; i<steps; i++) {
    updateSelectedaction(x.id);
  }
  if (pick([true,false])) { deleteSelectedaction(x.id); }
  verifySelectedactionExists(x.id);
  verifySelectedactionUpdated(x.id);
});

bthread("Selectedaction nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSelectedaction(a.id);
  block(matchAddSelectedaction(a.id, ANY), function () {});
  addSelectedaction(b.id);
});

bthread("Selectedteam nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSelectedteam(x.id);
  for (var i=0; i<steps; i++) {
    updateSelectedteam(x.id);
  }
  if (pick([true,false])) { deleteSelectedteam(x.id); }
  verifySelectedteamExists(x.id);
  verifySelectedteamUpdated(x.id);
});

bthread("Selectedteam nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSelectedteam(a.id);
  block(matchAddSelectedteam(a.id, ANY), function () {});
  addSelectedteam(b.id);
});

bthread("Selecteduser nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSelecteduser(x.id);
  for (var i=0; i<steps; i++) {
    updateSelecteduser(x.id);
  }
  if (pick([true,false])) { deleteSelecteduser(x.id); }
  verifySelecteduserExists(x.id);
  verifySelecteduserUpdated(x.id);
});

bthread("Selecteduser nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSelecteduser(a.id);
  block(matchAddSelecteduser(a.id, ANY), function () {});
  addSelecteduser(b.id);
});

bthread("Selfhostedrunner nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSelfhostedrunner(x.id);
  for (var i=0; i<steps; i++) {
    updateSelfhostedrunner(x.id);
  }
  if (pick([true,false])) { deleteSelfhostedrunner(x.id); }
  verifySelfhostedrunnerExists(x.id);
  verifySelfhostedrunnerUpdated(x.id);
});

bthread("Selfhostedrunner nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSelfhostedrunner(a.id);
  block(matchAddSelfhostedrunner(a.id, ANY), function () {});
  addSelfhostedrunner(b.id);
});

bthread("Setting nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSetting(x.id);
  for (var i=0; i<steps; i++) {
    updateSetting(x.id);
  }
  if (pick([true,false])) { deleteSetting(x.id); }
  verifySettingExists(x.id);
  verifySettingUpdated(x.id);
});

bthread("Setting nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSetting(a.id);
  block(matchAddSetting(a.id, ANY), function () {});
  addSetting(b.id);
});

bthread("Sharedstorage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSharedstorage(x.id);
  for (var i=0; i<steps; i++) {
    updateSharedstorage(x.id);
  }
  if (pick([true,false])) { deleteSharedstorage(x.id); }
  verifySharedstorageExists(x.id);
  verifySharedstorageUpdated(x.id);
});

bthread("Sharedstorage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSharedstorage(a.id);
  block(matchAddSharedstorage(a.id, ANY), function () {});
  addSharedstorage(b.id);
});

bthread("Snapshot nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSnapshot(x.id);
  for (var i=0; i<steps; i++) {
    updateSnapshot(x.id);
  }
  if (pick([true,false])) { deleteSnapshot(x.id); }
  verifySnapshotExists(x.id);
  verifySnapshotUpdated(x.id);
});

bthread("Snapshot nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSnapshot(a.id);
  block(matchAddSnapshot(a.id, ANY), function () {});
  addSnapshot(b.id);
});

bthread("Socialaccount nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSocialaccount(x.id);
  for (var i=0; i<steps; i++) {
    updateSocialaccount(x.id);
  }
  if (pick([true,false])) { deleteSocialaccount(x.id); }
  verifySocialaccountExists(x.id);
  verifySocialaccountUpdated(x.id);
});

bthread("Socialaccount nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSocialaccount(a.id);
  block(matchAddSocialaccount(a.id, ANY), function () {});
  addSocialaccount(b.id);
});

bthread("Sshsigningkey nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSshsigningkey(x.id);
  for (var i=0; i<steps; i++) {
    updateSshsigningkey(x.id);
  }
  if (pick([true,false])) { deleteSshsigningkey(x.id); }
  verifySshsigningkeyExists(x.id);
  verifySshsigningkeyUpdated(x.id);
});

bthread("Sshsigningkey nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSshsigningkey(a.id);
  block(matchAddSshsigningkey(a.id, ANY), function () {});
  addSshsigningkey(b.id);
});

bthread("Star nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStar(x.id);
  for (var i=0; i<steps; i++) {
    updateStar(x.id);
  }
  if (pick([true,false])) { deleteStar(x.id); }
  verifyStarExists(x.id);
  verifyStarUpdated(x.id);
});

bthread("Star nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStar(a.id);
  block(matchAddStar(a.id, ANY), function () {});
  addStar(b.id);
});

bthread("Stargazer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStargazer(x.id);
  for (var i=0; i<steps; i++) {
    updateStargazer(x.id);
  }
  if (pick([true,false])) { deleteStargazer(x.id); }
  verifyStargazerExists(x.id);
  verifyStargazerUpdated(x.id);
});

bthread("Stargazer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStargazer(a.id);
  block(matchAddStargazer(a.id, ANY), function () {});
  addStargazer(b.id);
});

bthread("Starred nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStarred(x.id);
  for (var i=0; i<steps; i++) {
    updateStarred(x.id);
  }
  if (pick([true,false])) { deleteStarred(x.id); }
  verifyStarredExists(x.id);
  verifyStarredUpdated(x.id);
});

bthread("Starred nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStarred(a.id);
  block(matchAddStarred(a.id, ANY), function () {});
  addStarred(b.id);
});

bthread("Start nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStart(x.id);
  for (var i=0; i<steps; i++) {
    updateStart(x.id);
  }
  if (pick([true,false])) { deleteStart(x.id); }
  verifyStartExists(x.id);
  verifyStartUpdated(x.id);
});

bthread("Start nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStart(a.id);
  block(matchAddStart(a.id, ANY), function () {});
  addStart(b.id);
});

bthread("Stat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStat(x.id);
  for (var i=0; i<steps; i++) {
    updateStat(x.id);
  }
  if (pick([true,false])) { deleteStat(x.id); }
  verifyStatExists(x.id);
  verifyStatUpdated(x.id);
});

bthread("Stat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStat(a.id);
  block(matchAddStat(a.id, ANY), function () {});
  addStat(b.id);
});

bthread("Statu nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStatu(x.id);
  for (var i=0; i<steps; i++) {
    updateStatu(x.id);
  }
  if (pick([true,false])) { deleteStatu(x.id); }
  verifyStatuExists(x.id);
  verifyStatuUpdated(x.id);
});

bthread("Statu nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStatu(a.id);
  block(matchAddStatu(a.id, ANY), function () {});
  addStatu(b.id);
});

bthread("Status nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStatus(x.id);
  for (var i=0; i<steps; i++) {
    updateStatus(x.id);
  }
  if (pick([true,false])) { deleteStatus(x.id); }
  verifyStatusExists(x.id);
  verifyStatusUpdated(x.id);
});

bthread("Status nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStatus(a.id);
  block(matchAddStatus(a.id, ANY), function () {});
  addStatus(b.id);
});

bthread("Stop nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStop(x.id);
  for (var i=0; i<steps; i++) {
    updateStop(x.id);
  }
  if (pick([true,false])) { deleteStop(x.id); }
  verifyStopExists(x.id);
  verifyStopUpdated(x.id);
});

bthread("Stop nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStop(a.id);
  block(matchAddStop(a.id, ANY), function () {});
  addStop(b.id);
});

bthread("Storagerecord nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStoragerecord(x.id);
  for (var i=0; i<steps; i++) {
    updateStoragerecord(x.id);
  }
  if (pick([true,false])) { deleteStoragerecord(x.id); }
  verifyStoragerecordExists(x.id);
  verifyStoragerecordUpdated(x.id);
});

bthread("Storagerecord nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStoragerecord(a.id);
  block(matchAddStoragerecord(a.id, ANY), function () {});
  addStoragerecord(b.id);
});

bthread("Stubbed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStubbed(x.id);
  for (var i=0; i<steps; i++) {
    updateStubbed(x.id);
  }
  if (pick([true,false])) { deleteStubbed(x.id); }
  verifyStubbedExists(x.id);
  verifyStubbedUpdated(x.id);
});

bthread("Stubbed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addStubbed(a.id);
  block(matchAddStubbed(a.id, ANY), function () {});
  addStubbed(b.id);
});

bthread("Sub nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSub(x.id);
  for (var i=0; i<steps; i++) {
    updateSub(x.id);
  }
  if (pick([true,false])) { deleteSub(x.id); }
  verifySubExists(x.id);
  verifySubUpdated(x.id);
});

bthread("Sub nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSub(a.id);
  block(matchAddSub(a.id, ANY), function () {});
  addSub(b.id);
});

bthread("Subissue nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSubissue(x.id);
  for (var i=0; i<steps; i++) {
    updateSubissue(x.id);
  }
  if (pick([true,false])) { deleteSubissue(x.id); }
  verifySubissueExists(x.id);
  verifySubissueUpdated(x.id);
});

bthread("Subissue nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSubissue(a.id);
  block(matchAddSubissue(a.id, ANY), function () {});
  addSubissue(b.id);
});

bthread("Subjectstat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSubjectstat(x.id);
  for (var i=0; i<steps; i++) {
    updateSubjectstat(x.id);
  }
  if (pick([true,false])) { deleteSubjectstat(x.id); }
  verifySubjectstatExists(x.id);
  verifySubjectstatUpdated(x.id);
});

bthread("Subjectstat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSubjectstat(a.id);
  block(matchAddSubjectstat(a.id, ANY), function () {});
  addSubjectstat(b.id);
});

bthread("Subscriber nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSubscriber(x.id);
  for (var i=0; i<steps; i++) {
    updateSubscriber(x.id);
  }
  if (pick([true,false])) { deleteSubscriber(x.id); }
  verifySubscriberExists(x.id);
  verifySubscriberUpdated(x.id);
});

bthread("Subscriber nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSubscriber(a.id);
  block(matchAddSubscriber(a.id, ANY), function () {});
  addSubscriber(b.id);
});

bthread("Subscription nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSubscription(x.id);
  for (var i=0; i<steps; i++) {
    updateSubscription(x.id);
  }
  if (pick([true,false])) { deleteSubscription(x.id); }
  verifySubscriptionExists(x.id);
  verifySubscriptionUpdated(x.id);
});

bthread("Subscription nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSubscription(a.id);
  block(matchAddSubscription(a.id, ANY), function () {});
  addSubscription(b.id);
});

bthread("Summarystat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSummarystat(x.id);
  for (var i=0; i<steps; i++) {
    updateSummarystat(x.id);
  }
  if (pick([true,false])) { deleteSummarystat(x.id); }
  verifySummarystatExists(x.id);
  verifySummarystatUpdated(x.id);
});

bthread("Summarystat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSummarystat(a.id);
  block(matchAddSummarystat(a.id, ANY), function () {});
  addSummarystat(b.id);
});

bthread("Suspended nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSuspended(x.id);
  for (var i=0; i<steps; i++) {
    updateSuspended(x.id);
  }
  if (pick([true,false])) { deleteSuspended(x.id); }
  verifySuspendedExists(x.id);
  verifySuspendedUpdated(x.id);
});

bthread("Suspended nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'S' + ids[0] };
  const b = { id: 'S' + ids[1] };
  addSuspended(a.id);
  block(matchAddSuspended(a.id, ANY), function () {});
  addSuspended(b.id);
});

bthread("Tag nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTag(x.id);
  for (var i=0; i<steps; i++) {
    updateTag(x.id);
  }
  if (pick([true,false])) { deleteTag(x.id); }
  verifyTagExists(x.id);
  verifyTagUpdated(x.id);
});

bthread("Tag nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTag(a.id);
  block(matchAddTag(a.id, ANY), function () {});
  addTag(b.id);
});

bthread("Tarball nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTarball(x.id);
  for (var i=0; i<steps; i++) {
    updateTarball(x.id);
  }
  if (pick([true,false])) { deleteTarball(x.id); }
  verifyTarballExists(x.id);
  verifyTarballUpdated(x.id);
});

bthread("Tarball nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTarball(a.id);
  block(matchAddTarball(a.id, ANY), function () {});
  addTarball(b.id);
});

bthread("Team nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTeam(x.id);
  for (var i=0; i<steps; i++) {
    updateTeam(x.id);
  }
  if (pick([true,false])) { deleteTeam(x.id); }
  verifyTeamExists(x.id);
  verifyTeamUpdated(x.id);
});

bthread("Team nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTeam(a.id);
  block(matchAddTeam(a.id, ANY), function () {});
  addTeam(b.id);
});

bthread("Template nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateTemplate(x.id);
  }
  if (pick([true,false])) { deleteTemplate(x.id); }
  verifyTemplateExists(x.id);
  verifyTemplateUpdated(x.id);
});

bthread("Template nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTemplate(a.id);
  block(matchAddTemplate(a.id, ANY), function () {});
  addTemplate(b.id);
});

bthread("Test nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTest(x.id);
  for (var i=0; i<steps; i++) {
    updateTest(x.id);
  }
  if (pick([true,false])) { deleteTest(x.id); }
  verifyTestExists(x.id);
  verifyTestUpdated(x.id);
});

bthread("Test nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTest(a.id);
  block(matchAddTest(a.id, ANY), function () {});
  addTest(b.id);
});

bthread("Thread nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addThread(x.id);
  for (var i=0; i<steps; i++) {
    updateThread(x.id);
  }
  if (pick([true,false])) { deleteThread(x.id); }
  verifyThreadExists(x.id);
  verifyThreadUpdated(x.id);
});

bthread("Thread nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addThread(a.id);
  block(matchAddThread(a.id, ANY), function () {});
  addThread(b.id);
});

bthread("Timeline nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTimeline(x.id);
  for (var i=0; i<steps; i++) {
    updateTimeline(x.id);
  }
  if (pick([true,false])) { deleteTimeline(x.id); }
  verifyTimelineExists(x.id);
  verifyTimelineUpdated(x.id);
});

bthread("Timeline nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTimeline(a.id);
  block(matchAddTimeline(a.id, ANY), function () {});
  addTimeline(b.id);
});

bthread("Timestat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTimestat(x.id);
  for (var i=0; i<steps; i++) {
    updateTimestat(x.id);
  }
  if (pick([true,false])) { deleteTimestat(x.id); }
  verifyTimestatExists(x.id);
  verifyTimestatUpdated(x.id);
});

bthread("Timestat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTimestat(a.id);
  block(matchAddTimestat(a.id, ANY), function () {});
  addTimestat(b.id);
});

bthread("Timing nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTiming(x.id);
  for (var i=0; i<steps; i++) {
    updateTiming(x.id);
  }
  if (pick([true,false])) { deleteTiming(x.id); }
  verifyTimingExists(x.id);
  verifyTimingUpdated(x.id);
});

bthread("Timing nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTiming(a.id);
  block(matchAddTiming(a.id, ANY), function () {});
  addTiming(b.id);
});

bthread("Token nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addToken(x.id);
  for (var i=0; i<steps; i++) {
    updateToken(x.id);
  }
  if (pick([true,false])) { deleteToken(x.id); }
  verifyTokenExists(x.id);
  verifyTokenUpdated(x.id);
});

bthread("Token nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addToken(a.id);
  block(matchAddToken(a.id, ANY), function () {});
  addToken(b.id);
});

bthread("Topic nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTopic(x.id);
  for (var i=0; i<steps; i++) {
    updateTopic(x.id);
  }
  if (pick([true,false])) { deleteTopic(x.id); }
  verifyTopicExists(x.id);
  verifyTopicUpdated(x.id);
});

bthread("Topic nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTopic(a.id);
  block(matchAddTopic(a.id, ANY), function () {});
  addTopic(b.id);
});

bthread("Traffic nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTraffic(x.id);
  for (var i=0; i<steps; i++) {
    updateTraffic(x.id);
  }
  if (pick([true,false])) { deleteTraffic(x.id); }
  verifyTrafficExists(x.id);
  verifyTrafficUpdated(x.id);
});

bthread("Traffic nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTraffic(a.id);
  block(matchAddTraffic(a.id, ANY), function () {});
  addTraffic(b.id);
});

bthread("Transfer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTransfer(x.id);
  for (var i=0; i<steps; i++) {
    updateTransfer(x.id);
  }
  if (pick([true,false])) { deleteTransfer(x.id); }
  verifyTransferExists(x.id);
  verifyTransferUpdated(x.id);
});

bthread("Transfer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTransfer(a.id);
  block(matchAddTransfer(a.id, ANY), function () {});
  addTransfer(b.id);
});

bthread("Tree nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTree(x.id);
  for (var i=0; i<steps; i++) {
    updateTree(x.id);
  }
  if (pick([true,false])) { deleteTree(x.id); }
  verifyTreeExists(x.id);
  verifyTreeUpdated(x.id);
});

bthread("Tree nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'T' + ids[0] };
  const b = { id: 'T' + ids[1] };
  addTree(a.id);
  block(matchAddTree(a.id, ANY), function () {});
  addTree(b.id);
});

bthread("Updatebranch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUpdatebranch(x.id);
  for (var i=0; i<steps; i++) {
    updateUpdatebranch(x.id);
  }
  if (pick([true,false])) { deleteUpdatebranch(x.id); }
  verifyUpdatebranchExists(x.id);
  verifyUpdatebranchUpdated(x.id);
});

bthread("Updatebranch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUpdatebranch(a.id);
  block(matchAddUpdatebranch(a.id, ANY), function () {});
  addUpdatebranch(b.id);
});

bthread("Usage nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUsage(x.id);
  for (var i=0; i<steps; i++) {
    updateUsage(x.id);
  }
  if (pick([true,false])) { deleteUsage(x.id); }
  verifyUsageExists(x.id);
  verifyUsageUpdated(x.id);
});

bthread("Usage nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUsage(a.id);
  block(matchAddUsage(a.id, ANY), function () {});
  addUsage(b.id);
});

bthread("Usagebyrepository nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUsagebyrepository(x.id);
  for (var i=0; i<steps; i++) {
    updateUsagebyrepository(x.id);
  }
  if (pick([true,false])) { deleteUsagebyrepository(x.id); }
  verifyUsagebyrepositoryExists(x.id);
  verifyUsagebyrepositoryUpdated(x.id);
});

bthread("Usagebyrepository nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUsagebyrepository(a.id);
  block(matchAddUsagebyrepository(a.id, ANY), function () {});
  addUsagebyrepository(b.id);
});

bthread("User nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUser(x.id);
  for (var i=0; i<steps; i++) {
    updateUser(x.id);
  }
  if (pick([true,false])) { deleteUser(x.id); }
  verifyUserExists(x.id);
  verifyUserUpdated(x.id);
});

bthread("User nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUser(a.id);
  block(matchAddUser(a.id, ANY), function () {});
  addUser(b.id);
});

bthread("Userstat nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUserstat(x.id);
  for (var i=0; i<steps; i++) {
    updateUserstat(x.id);
  }
  if (pick([true,false])) { deleteUserstat(x.id); }
  verifyUserstatExists(x.id);
  verifyUserstatUpdated(x.id);
});

bthread("Userstat nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'U' + ids[0] };
  const b = { id: 'U' + ids[1] };
  addUserstat(a.id);
  block(matchAddUserstat(a.id, ANY), function () {});
  addUserstat(b.id);
});

bthread("Value nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addValue(x.id);
  for (var i=0; i<steps; i++) {
    updateValue(x.id);
  }
  if (pick([true,false])) { deleteValue(x.id); }
  verifyValueExists(x.id);
  verifyValueUpdated(x.id);
});

bthread("Value nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addValue(a.id);
  block(matchAddValue(a.id, ANY), function () {});
  addValue(b.id);
});

bthread("Variable nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addVariable(x.id);
  for (var i=0; i<steps; i++) {
    updateVariable(x.id);
  }
  if (pick([true,false])) { deleteVariable(x.id); }
  verifyVariableExists(x.id);
  verifyVariableUpdated(x.id);
});

bthread("Variable nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVariable(a.id);
  block(matchAddVariable(a.id, ANY), function () {});
  addVariable(b.id);
});

bthread("Variantanalys nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addVariantanalys(x.id);
  for (var i=0; i<steps; i++) {
    updateVariantanalys(x.id);
  }
  if (pick([true,false])) { deleteVariantanalys(x.id); }
  verifyVariantanalysExists(x.id);
  verifyVariantanalysUpdated(x.id);
});

bthread("Variantanalys nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVariantanalys(a.id);
  block(matchAddVariantanalys(a.id, ANY), function () {});
  addVariantanalys(b.id);
});

bthread("Version nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addVersion(x.id);
  for (var i=0; i<steps; i++) {
    updateVersion(x.id);
  }
  if (pick([true,false])) { deleteVersion(x.id); }
  verifyVersionExists(x.id);
  verifyVersionUpdated(x.id);
});

bthread("Version nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVersion(a.id);
  block(matchAddVersion(a.id, ANY), function () {});
  addVersion(b.id);
});

bthread("View nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addView(x.id);
  for (var i=0; i<steps; i++) {
    updateView(x.id);
  }
  if (pick([true,false])) { deleteView(x.id); }
  verifyViewExists(x.id);
  verifyViewUpdated(x.id);
});

bthread("View nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addView(a.id);
  block(matchAddView(a.id, ANY), function () {});
  addView(b.id);
});

bthread("Visibility nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addVisibility(x.id);
  for (var i=0; i<steps; i++) {
    updateVisibility(x.id);
  }
  if (pick([true,false])) { deleteVisibility(x.id); }
  verifyVisibilityExists(x.id);
  verifyVisibilityUpdated(x.id);
});

bthread("Visibility nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVisibility(a.id);
  block(matchAddVisibility(a.id, ANY), function () {});
  addVisibility(b.id);
});

bthread("Vulnerabilityalert nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addVulnerabilityalert(x.id);
  for (var i=0; i<steps; i++) {
    updateVulnerabilityalert(x.id);
  }
  if (pick([true,false])) { deleteVulnerabilityalert(x.id); }
  verifyVulnerabilityalertExists(x.id);
  verifyVulnerabilityalertUpdated(x.id);
});

bthread("Vulnerabilityalert nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'V' + ids[0] };
  const b = { id: 'V' + ids[1] };
  addVulnerabilityalert(a.id);
  block(matchAddVulnerabilityalert(a.id, ANY), function () {});
  addVulnerabilityalert(b.id);
});

bthread("Workflow nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addWorkflow(x.id);
  for (var i=0; i<steps; i++) {
    updateWorkflow(x.id);
  }
  if (pick([true,false])) { deleteWorkflow(x.id); }
  verifyWorkflowExists(x.id);
  verifyWorkflowUpdated(x.id);
});

bthread("Workflow nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'W' + ids[0] };
  const b = { id: 'W' + ids[1] };
  addWorkflow(a.id);
  block(matchAddWorkflow(a.id, ANY), function () {});
  addWorkflow(b.id);
});

bthread("Zen nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addZen(x.id);
  for (var i=0; i<steps; i++) {
    updateZen(x.id);
  }
  if (pick([true,false])) { deleteZen(x.id); }
  verifyZenExists(x.id);
  verifyZenUpdated(x.id);
});

bthread("Zen nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'Z' + ids[0] };
  const b = { id: 'Z' + ids[1] };
  addZen(a.id);
  block(matchAddZen(a.id, ANY), function () {});
  addZen(b.id);
});

bthread("Zipball nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addZipball(x.id);
  for (var i=0; i<steps; i++) {
    updateZipball(x.id);
  }
  if (pick([true,false])) { deleteZipball(x.id); }
  verifyZipballExists(x.id);
  verifyZipballUpdated(x.id);
});

bthread("Zipball nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: 'Z' + ids[0] };
  const b = { id: 'Z' + ids[1] };
  addZipball(a.id);
  block(matchAddZipball(a.id, ANY), function () {});
  addZipball(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Acceptedassignment create verification", function () {
  const e = waitForAnyAcceptedassignmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAcceptedassignment(k, ANY), function () {
    verifyAcceptedassignmentExists(k);
  });
});

bthread("Acceptedassignment update verification", function () {
  const e = waitForAnyAcceptedassignmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAcceptedassignment(k, ANY), function () {
    verifyAcceptedassignmentUpdated(k);
  });
});

bthread("Acceptedassignment delete verification", function () {
  const e = waitForAnyAcceptedassignmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAcceptedassignment(k, ANY), function () {
    verifyAcceptedassignmentDoesNotExist(k);
  });
});

bthread("Acces create verification", function () {
  const e = waitForAnyAccesAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAcces(k, ANY), function () {
    verifyAccesExists(k);
  });
});

bthread("Acces update verification", function () {
  const e = waitForAnyAccesUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAcces(k, ANY), function () {
    verifyAccesUpdated(k);
  });
});

bthread("Acces delete verification", function () {
  const e = waitForAnyAccesDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAcces(k, ANY), function () {
    verifyAccesDoesNotExist(k);
  });
});

bthread("Accesstoken create verification", function () {
  const e = waitForAnyAccesstokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccesstoken(k, ANY), function () {
    verifyAccesstokenExists(k);
  });
});

bthread("Accesstoken update verification", function () {
  const e = waitForAnyAccesstokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccesstoken(k, ANY), function () {
    verifyAccesstokenUpdated(k);
  });
});

bthread("Accesstoken delete verification", function () {
  const e = waitForAnyAccesstokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAccesstoken(k, ANY), function () {
    verifyAccesstokenDoesNotExist(k);
  });
});

bthread("Account create verification", function () {
  const e = waitForAnyAccountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccount(k, ANY), function () {
    verifyAccountExists(k);
  });
});

bthread("Account update verification", function () {
  const e = waitForAnyAccountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccount(k, ANY), function () {
    verifyAccountUpdated(k);
  });
});

bthread("Account delete verification", function () {
  const e = waitForAnyAccountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAccount(k, ANY), function () {
    verifyAccountDoesNotExist(k);
  });
});

bthread("Action create verification", function () {
  const e = waitForAnyActionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAction(k, ANY), function () {
    verifyActionExists(k);
  });
});

bthread("Action update verification", function () {
  const e = waitForAnyActionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAction(k, ANY), function () {
    verifyActionUpdated(k);
  });
});

bthread("Action delete verification", function () {
  const e = waitForAnyActionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAction(k, ANY), function () {
    verifyActionDoesNotExist(k);
  });
});

bthread("Activity create verification", function () {
  const e = waitForAnyActivityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActivity(k, ANY), function () {
    verifyActivityExists(k);
  });
});

bthread("Activity update verification", function () {
  const e = waitForAnyActivityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActivity(k, ANY), function () {
    verifyActivityUpdated(k);
  });
});

bthread("Activity delete verification", function () {
  const e = waitForAnyActivityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddActivity(k, ANY), function () {
    verifyActivityDoesNotExist(k);
  });
});

bthread("Add create verification", function () {
  const e = waitForAnyAddAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdd(k, ANY), function () {
    verifyAddExists(k);
  });
});

bthread("Add update verification", function () {
  const e = waitForAnyAddUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdd(k, ANY), function () {
    verifyAddUpdated(k);
  });
});

bthread("Add delete verification", function () {
  const e = waitForAnyAddDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAdd(k, ANY), function () {
    verifyAddDoesNotExist(k);
  });
});

bthread("Advisory create verification", function () {
  const e = waitForAnyAdvisoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdvisory(k, ANY), function () {
    verifyAdvisoryExists(k);
  });
});

bthread("Advisory update verification", function () {
  const e = waitForAnyAdvisoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdvisory(k, ANY), function () {
    verifyAdvisoryUpdated(k);
  });
});

bthread("Advisory delete verification", function () {
  const e = waitForAnyAdvisoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAdvisory(k, ANY), function () {
    verifyAdvisoryDoesNotExist(k);
  });
});

bthread("Alert create verification", function () {
  const e = waitForAnyAlertAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAlert(k, ANY), function () {
    verifyAlertExists(k);
  });
});

bthread("Alert update verification", function () {
  const e = waitForAnyAlertUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAlert(k, ANY), function () {
    verifyAlertUpdated(k);
  });
});

bthread("Alert delete verification", function () {
  const e = waitForAnyAlertDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAlert(k, ANY), function () {
    verifyAlertDoesNotExist(k);
  });
});

bthread("Analys create verification", function () {
  const e = waitForAnyAnalysAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAnalys(k, ANY), function () {
    verifyAnalysExists(k);
  });
});

bthread("Analys update verification", function () {
  const e = waitForAnyAnalysUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAnalys(k, ANY), function () {
    verifyAnalysUpdated(k);
  });
});

bthread("Analys delete verification", function () {
  const e = waitForAnyAnalysDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAnalys(k, ANY), function () {
    verifyAnalysDoesNotExist(k);
  });
});

bthread("Annotation create verification", function () {
  const e = waitForAnyAnnotationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAnnotation(k, ANY), function () {
    verifyAnnotationExists(k);
  });
});

bthread("Annotation update verification", function () {
  const e = waitForAnyAnnotationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAnnotation(k, ANY), function () {
    verifyAnnotationUpdated(k);
  });
});

bthread("Annotation delete verification", function () {
  const e = waitForAnyAnnotationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAnnotation(k, ANY), function () {
    verifyAnnotationDoesNotExist(k);
  });
});

bthread("Api create verification", function () {
  const e = waitForAnyApiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApi(k, ANY), function () {
    verifyApiExists(k);
  });
});

bthread("Api update verification", function () {
  const e = waitForAnyApiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApi(k, ANY), function () {
    verifyApiUpdated(k);
  });
});

bthread("Api delete verification", function () {
  const e = waitForAnyApiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApi(k, ANY), function () {
    verifyApiDoesNotExist(k);
  });
});

bthread("App create verification", function () {
  const e = waitForAnyAppAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApp(k, ANY), function () {
    verifyAppExists(k);
  });
});

bthread("App update verification", function () {
  const e = waitForAnyAppUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApp(k, ANY), function () {
    verifyAppUpdated(k);
  });
});

bthread("App delete verification", function () {
  const e = waitForAnyAppDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApp(k, ANY), function () {
    verifyAppDoesNotExist(k);
  });
});

bthread("Application create verification", function () {
  const e = waitForAnyApplicationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApplication(k, ANY), function () {
    verifyApplicationExists(k);
  });
});

bthread("Application update verification", function () {
  const e = waitForAnyApplicationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApplication(k, ANY), function () {
    verifyApplicationUpdated(k);
  });
});

bthread("Application delete verification", function () {
  const e = waitForAnyApplicationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApplication(k, ANY), function () {
    verifyApplicationDoesNotExist(k);
  });
});

bthread("Appmanifest create verification", function () {
  const e = waitForAnyAppmanifestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAppmanifest(k, ANY), function () {
    verifyAppmanifestExists(k);
  });
});

bthread("Appmanifest update verification", function () {
  const e = waitForAnyAppmanifestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAppmanifest(k, ANY), function () {
    verifyAppmanifestUpdated(k);
  });
});

bthread("Appmanifest delete verification", function () {
  const e = waitForAnyAppmanifestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAppmanifest(k, ANY), function () {
    verifyAppmanifestDoesNotExist(k);
  });
});

bthread("Approval create verification", function () {
  const e = waitForAnyApprovalAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApproval(k, ANY), function () {
    verifyApprovalExists(k);
  });
});

bthread("Approval update verification", function () {
  const e = waitForAnyApprovalUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApproval(k, ANY), function () {
    verifyApprovalUpdated(k);
  });
});

bthread("Approval delete verification", function () {
  const e = waitForAnyApprovalDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApproval(k, ANY), function () {
    verifyApprovalDoesNotExist(k);
  });
});

bthread("Approve create verification", function () {
  const e = waitForAnyApproveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApprove(k, ANY), function () {
    verifyApproveExists(k);
  });
});

bthread("Approve update verification", function () {
  const e = waitForAnyApproveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteApprove(k, ANY), function () {
    verifyApproveUpdated(k);
  });
});

bthread("Approve delete verification", function () {
  const e = waitForAnyApproveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddApprove(k, ANY), function () {
    verifyApproveDoesNotExist(k);
  });
});

bthread("Archive create verification", function () {
  const e = waitForAnyArchiveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArchive(k, ANY), function () {
    verifyArchiveExists(k);
  });
});

bthread("Archive update verification", function () {
  const e = waitForAnyArchiveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArchive(k, ANY), function () {
    verifyArchiveUpdated(k);
  });
});

bthread("Archive delete verification", function () {
  const e = waitForAnyArchiveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddArchive(k, ANY), function () {
    verifyArchiveDoesNotExist(k);
  });
});

bthread("Artifact create verification", function () {
  const e = waitForAnyArtifactAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArtifact(k, ANY), function () {
    verifyArtifactExists(k);
  });
});

bthread("Artifact update verification", function () {
  const e = waitForAnyArtifactUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArtifact(k, ANY), function () {
    verifyArtifactUpdated(k);
  });
});

bthread("Artifact delete verification", function () {
  const e = waitForAnyArtifactDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddArtifact(k, ANY), function () {
    verifyArtifactDoesNotExist(k);
  });
});

bthread("Artifactandlogretention create verification", function () {
  const e = waitForAnyArtifactandlogretentionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArtifactandlogretention(k, ANY), function () {
    verifyArtifactandlogretentionExists(k);
  });
});

bthread("Artifactandlogretention update verification", function () {
  const e = waitForAnyArtifactandlogretentionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteArtifactandlogretention(k, ANY), function () {
    verifyArtifactandlogretentionUpdated(k);
  });
});

bthread("Artifactandlogretention delete verification", function () {
  const e = waitForAnyArtifactandlogretentionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddArtifactandlogretention(k, ANY), function () {
    verifyArtifactandlogretentionDoesNotExist(k);
  });
});

bthread("Asset create verification", function () {
  const e = waitForAnyAssetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAsset(k, ANY), function () {
    verifyAssetExists(k);
  });
});

bthread("Asset update verification", function () {
  const e = waitForAnyAssetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAsset(k, ANY), function () {
    verifyAssetUpdated(k);
  });
});

bthread("Asset delete verification", function () {
  const e = waitForAnyAssetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAsset(k, ANY), function () {
    verifyAssetDoesNotExist(k);
  });
});

bthread("Assignee create verification", function () {
  const e = waitForAnyAssigneeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignee(k, ANY), function () {
    verifyAssigneeExists(k);
  });
});

bthread("Assignee update verification", function () {
  const e = waitForAnyAssigneeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignee(k, ANY), function () {
    verifyAssigneeUpdated(k);
  });
});

bthread("Assignee delete verification", function () {
  const e = waitForAnyAssigneeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAssignee(k, ANY), function () {
    verifyAssigneeDoesNotExist(k);
  });
});

bthread("Assignment create verification", function () {
  const e = waitForAnyAssignmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignment(k, ANY), function () {
    verifyAssignmentExists(k);
  });
});

bthread("Assignment update verification", function () {
  const e = waitForAnyAssignmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAssignment(k, ANY), function () {
    verifyAssignmentUpdated(k);
  });
});

bthread("Assignment delete verification", function () {
  const e = waitForAnyAssignmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAssignment(k, ANY), function () {
    verifyAssignmentDoesNotExist(k);
  });
});

bthread("Attach create verification", function () {
  const e = waitForAnyAttachAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttach(k, ANY), function () {
    verifyAttachExists(k);
  });
});

bthread("Attach update verification", function () {
  const e = waitForAnyAttachUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttach(k, ANY), function () {
    verifyAttachUpdated(k);
  });
});

bthread("Attach delete verification", function () {
  const e = waitForAnyAttachDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAttach(k, ANY), function () {
    verifyAttachDoesNotExist(k);
  });
});

bthread("Attempt create verification", function () {
  const e = waitForAnyAttemptAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttempt(k, ANY), function () {
    verifyAttemptExists(k);
  });
});

bthread("Attempt update verification", function () {
  const e = waitForAnyAttemptUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttempt(k, ANY), function () {
    verifyAttemptUpdated(k);
  });
});

bthread("Attempt delete verification", function () {
  const e = waitForAnyAttemptDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAttempt(k, ANY), function () {
    verifyAttemptDoesNotExist(k);
  });
});

bthread("Attestation create verification", function () {
  const e = waitForAnyAttestationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttestation(k, ANY), function () {
    verifyAttestationExists(k);
  });
});

bthread("Attestation update verification", function () {
  const e = waitForAnyAttestationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttestation(k, ANY), function () {
    verifyAttestationUpdated(k);
  });
});

bthread("Attestation delete verification", function () {
  const e = waitForAnyAttestationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAttestation(k, ANY), function () {
    verifyAttestationDoesNotExist(k);
  });
});

bthread("Author create verification", function () {
  const e = waitForAnyAuthorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthor(k, ANY), function () {
    verifyAuthorExists(k);
  });
});

bthread("Author update verification", function () {
  const e = waitForAnyAuthorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAuthor(k, ANY), function () {
    verifyAuthorUpdated(k);
  });
});

bthread("Author delete verification", function () {
  const e = waitForAnyAuthorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAuthor(k, ANY), function () {
    verifyAuthorDoesNotExist(k);
  });
});

bthread("Autofix create verification", function () {
  const e = waitForAnyAutofixAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAutofix(k, ANY), function () {
    verifyAutofixExists(k);
  });
});

bthread("Autofix update verification", function () {
  const e = waitForAnyAutofixUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAutofix(k, ANY), function () {
    verifyAutofixUpdated(k);
  });
});

bthread("Autofix delete verification", function () {
  const e = waitForAnyAutofixDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAutofix(k, ANY), function () {
    verifyAutofixDoesNotExist(k);
  });
});

bthread("Autolink create verification", function () {
  const e = waitForAnyAutolinkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAutolink(k, ANY), function () {
    verifyAutolinkExists(k);
  });
});

bthread("Autolink update verification", function () {
  const e = waitForAnyAutolinkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAutolink(k, ANY), function () {
    verifyAutolinkUpdated(k);
  });
});

bthread("Autolink delete verification", function () {
  const e = waitForAnyAutolinkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAutolink(k, ANY), function () {
    verifyAutolinkDoesNotExist(k);
  });
});

bthread("Automatedsecurityfixe create verification", function () {
  const e = waitForAnyAutomatedsecurityfixeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAutomatedsecurityfixe(k, ANY), function () {
    verifyAutomatedsecurityfixeExists(k);
  });
});

bthread("Automatedsecurityfixe update verification", function () {
  const e = waitForAnyAutomatedsecurityfixeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAutomatedsecurityfixe(k, ANY), function () {
    verifyAutomatedsecurityfixeUpdated(k);
  });
});

bthread("Automatedsecurityfixe delete verification", function () {
  const e = waitForAnyAutomatedsecurityfixeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAutomatedsecurityfixe(k, ANY), function () {
    verifyAutomatedsecurityfixeDoesNotExist(k);
  });
});

bthread("Billing create verification", function () {
  const e = waitForAnyBillingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBilling(k, ANY), function () {
    verifyBillingExists(k);
  });
});

bthread("Billing update verification", function () {
  const e = waitForAnyBillingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBilling(k, ANY), function () {
    verifyBillingUpdated(k);
  });
});

bthread("Billing delete verification", function () {
  const e = waitForAnyBillingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBilling(k, ANY), function () {
    verifyBillingDoesNotExist(k);
  });
});

bthread("Blob create verification", function () {
  const e = waitForAnyBlobAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlob(k, ANY), function () {
    verifyBlobExists(k);
  });
});

bthread("Blob update verification", function () {
  const e = waitForAnyBlobUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlob(k, ANY), function () {
    verifyBlobUpdated(k);
  });
});

bthread("Blob delete verification", function () {
  const e = waitForAnyBlobDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBlob(k, ANY), function () {
    verifyBlobDoesNotExist(k);
  });
});

bthread("Block create verification", function () {
  const e = waitForAnyBlockAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlock(k, ANY), function () {
    verifyBlockExists(k);
  });
});

bthread("Block update verification", function () {
  const e = waitForAnyBlockUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlock(k, ANY), function () {
    verifyBlockUpdated(k);
  });
});

bthread("Block delete verification", function () {
  const e = waitForAnyBlockDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBlock(k, ANY), function () {
    verifyBlockDoesNotExist(k);
  });
});

bthread("Blockedby create verification", function () {
  const e = waitForAnyBlockedbyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlockedby(k, ANY), function () {
    verifyBlockedbyExists(k);
  });
});

bthread("Blockedby update verification", function () {
  const e = waitForAnyBlockedbyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlockedby(k, ANY), function () {
    verifyBlockedbyUpdated(k);
  });
});

bthread("Blockedby delete verification", function () {
  const e = waitForAnyBlockedbyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBlockedby(k, ANY), function () {
    verifyBlockedbyDoesNotExist(k);
  });
});

bthread("Blocking create verification", function () {
  const e = waitForAnyBlockingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlocking(k, ANY), function () {
    verifyBlockingExists(k);
  });
});

bthread("Blocking update verification", function () {
  const e = waitForAnyBlockingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBlocking(k, ANY), function () {
    verifyBlockingUpdated(k);
  });
});

bthread("Blocking delete verification", function () {
  const e = waitForAnyBlockingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBlocking(k, ANY), function () {
    verifyBlockingDoesNotExist(k);
  });
});

bthread("Branche create verification", function () {
  const e = waitForAnyBrancheAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBranche(k, ANY), function () {
    verifyBrancheExists(k);
  });
});

bthread("Branche update verification", function () {
  const e = waitForAnyBrancheUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBranche(k, ANY), function () {
    verifyBrancheUpdated(k);
  });
});

bthread("Branche delete verification", function () {
  const e = waitForAnyBrancheDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBranche(k, ANY), function () {
    verifyBrancheDoesNotExist(k);
  });
});

bthread("Brancheswherehead create verification", function () {
  const e = waitForAnyBrancheswhereheadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBrancheswherehead(k, ANY), function () {
    verifyBrancheswhereheadExists(k);
  });
});

bthread("Brancheswherehead update verification", function () {
  const e = waitForAnyBrancheswhereheadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBrancheswherehead(k, ANY), function () {
    verifyBrancheswhereheadUpdated(k);
  });
});

bthread("Brancheswherehead delete verification", function () {
  const e = waitForAnyBrancheswhereheadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBrancheswherehead(k, ANY), function () {
    verifyBrancheswhereheadDoesNotExist(k);
  });
});

bthread("Build create verification", function () {
  const e = waitForAnyBuildAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBuild(k, ANY), function () {
    verifyBuildExists(k);
  });
});

bthread("Build update verification", function () {
  const e = waitForAnyBuildUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBuild(k, ANY), function () {
    verifyBuildUpdated(k);
  });
});

bthread("Build delete verification", function () {
  const e = waitForAnyBuildDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBuild(k, ANY), function () {
    verifyBuildDoesNotExist(k);
  });
});

bthread("Bulklist create verification", function () {
  const e = waitForAnyBulklistAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBulklist(k, ANY), function () {
    verifyBulklistExists(k);
  });
});

bthread("Bulklist update verification", function () {
  const e = waitForAnyBulklistUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBulklist(k, ANY), function () {
    verifyBulklistUpdated(k);
  });
});

bthread("Bulklist delete verification", function () {
  const e = waitForAnyBulklistDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBulklist(k, ANY), function () {
    verifyBulklistDoesNotExist(k);
  });
});

bthread("Cache create verification", function () {
  const e = waitForAnyCacheAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCache(k, ANY), function () {
    verifyCacheExists(k);
  });
});

bthread("Cache update verification", function () {
  const e = waitForAnyCacheUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCache(k, ANY), function () {
    verifyCacheUpdated(k);
  });
});

bthread("Cache delete verification", function () {
  const e = waitForAnyCacheDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCache(k, ANY), function () {
    verifyCacheDoesNotExist(k);
  });
});

bthread("Campaign create verification", function () {
  const e = waitForAnyCampaignAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCampaign(k, ANY), function () {
    verifyCampaignExists(k);
  });
});

bthread("Campaign update verification", function () {
  const e = waitForAnyCampaignUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCampaign(k, ANY), function () {
    verifyCampaignUpdated(k);
  });
});

bthread("Campaign delete verification", function () {
  const e = waitForAnyCampaignDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCampaign(k, ANY), function () {
    verifyCampaignDoesNotExist(k);
  });
});

bthread("Cancel create verification", function () {
  const e = waitForAnyCancelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCancel(k, ANY), function () {
    verifyCancelExists(k);
  });
});

bthread("Cancel update verification", function () {
  const e = waitForAnyCancelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCancel(k, ANY), function () {
    verifyCancelUpdated(k);
  });
});

bthread("Cancel delete verification", function () {
  const e = waitForAnyCancelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCancel(k, ANY), function () {
    verifyCancelDoesNotExist(k);
  });
});

bthread("Checkrun create verification", function () {
  const e = waitForAnyCheckrunAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheckrun(k, ANY), function () {
    verifyCheckrunExists(k);
  });
});

bthread("Checkrun update verification", function () {
  const e = waitForAnyCheckrunUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheckrun(k, ANY), function () {
    verifyCheckrunUpdated(k);
  });
});

bthread("Checkrun delete verification", function () {
  const e = waitForAnyCheckrunDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCheckrun(k, ANY), function () {
    verifyCheckrunDoesNotExist(k);
  });
});

bthread("Checksuite create verification", function () {
  const e = waitForAnyChecksuiteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChecksuite(k, ANY), function () {
    verifyChecksuiteExists(k);
  });
});

bthread("Checksuite update verification", function () {
  const e = waitForAnyChecksuiteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteChecksuite(k, ANY), function () {
    verifyChecksuiteUpdated(k);
  });
});

bthread("Checksuite delete verification", function () {
  const e = waitForAnyChecksuiteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddChecksuite(k, ANY), function () {
    verifyChecksuiteDoesNotExist(k);
  });
});

bthread("Classroom create verification", function () {
  const e = waitForAnyClassroomAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClassroom(k, ANY), function () {
    verifyClassroomExists(k);
  });
});

bthread("Classroom update verification", function () {
  const e = waitForAnyClassroomUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClassroom(k, ANY), function () {
    verifyClassroomUpdated(k);
  });
});

bthread("Classroom delete verification", function () {
  const e = waitForAnyClassroomDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClassroom(k, ANY), function () {
    verifyClassroomDoesNotExist(k);
  });
});

bthread("Clone create verification", function () {
  const e = waitForAnyCloneAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClone(k, ANY), function () {
    verifyCloneExists(k);
  });
});

bthread("Clone update verification", function () {
  const e = waitForAnyCloneUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteClone(k, ANY), function () {
    verifyCloneUpdated(k);
  });
});

bthread("Clone delete verification", function () {
  const e = waitForAnyCloneDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddClone(k, ANY), function () {
    verifyCloneDoesNotExist(k);
  });
});

bthread("Code create verification", function () {
  const e = waitForAnyCodeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCode(k, ANY), function () {
    verifyCodeExists(k);
  });
});

bthread("Code update verification", function () {
  const e = waitForAnyCodeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCode(k, ANY), function () {
    verifyCodeUpdated(k);
  });
});

bthread("Code delete verification", function () {
  const e = waitForAnyCodeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCode(k, ANY), function () {
    verifyCodeDoesNotExist(k);
  });
});

bthread("Codefrequency create verification", function () {
  const e = waitForAnyCodefrequencyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodefrequency(k, ANY), function () {
    verifyCodefrequencyExists(k);
  });
});

bthread("Codefrequency update verification", function () {
  const e = waitForAnyCodefrequencyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodefrequency(k, ANY), function () {
    verifyCodefrequencyUpdated(k);
  });
});

bthread("Codefrequency delete verification", function () {
  const e = waitForAnyCodefrequencyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCodefrequency(k, ANY), function () {
    verifyCodefrequencyDoesNotExist(k);
  });
});

bthread("Codeowner create verification", function () {
  const e = waitForAnyCodeownerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodeowner(k, ANY), function () {
    verifyCodeownerExists(k);
  });
});

bthread("Codeowner update verification", function () {
  const e = waitForAnyCodeownerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodeowner(k, ANY), function () {
    verifyCodeownerUpdated(k);
  });
});

bthread("Codeowner delete verification", function () {
  const e = waitForAnyCodeownerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCodeowner(k, ANY), function () {
    verifyCodeownerDoesNotExist(k);
  });
});

bthread("Codeql create verification", function () {
  const e = waitForAnyCodeqlAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodeql(k, ANY), function () {
    verifyCodeqlExists(k);
  });
});

bthread("Codeql update verification", function () {
  const e = waitForAnyCodeqlUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodeql(k, ANY), function () {
    verifyCodeqlUpdated(k);
  });
});

bthread("Codeql delete verification", function () {
  const e = waitForAnyCodeqlDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCodeql(k, ANY), function () {
    verifyCodeqlDoesNotExist(k);
  });
});

bthread("Codescanning create verification", function () {
  const e = waitForAnyCodescanningAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodescanning(k, ANY), function () {
    verifyCodescanningExists(k);
  });
});

bthread("Codescanning update verification", function () {
  const e = waitForAnyCodescanningUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodescanning(k, ANY), function () {
    verifyCodescanningUpdated(k);
  });
});

bthread("Codescanning delete verification", function () {
  const e = waitForAnyCodescanningDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCodescanning(k, ANY), function () {
    verifyCodescanningDoesNotExist(k);
  });
});

bthread("Codesecurity create verification", function () {
  const e = waitForAnyCodesecurityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodesecurity(k, ANY), function () {
    verifyCodesecurityExists(k);
  });
});

bthread("Codesecurity update verification", function () {
  const e = waitForAnyCodesecurityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodesecurity(k, ANY), function () {
    verifyCodesecurityUpdated(k);
  });
});

bthread("Codesecurity delete verification", function () {
  const e = waitForAnyCodesecurityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCodesecurity(k, ANY), function () {
    verifyCodesecurityDoesNotExist(k);
  });
});

bthread("Codesecurityconfiguration create verification", function () {
  const e = waitForAnyCodesecurityconfigurationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodesecurityconfiguration(k, ANY), function () {
    verifyCodesecurityconfigurationExists(k);
  });
});

bthread("Codesecurityconfiguration update verification", function () {
  const e = waitForAnyCodesecurityconfigurationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodesecurityconfiguration(k, ANY), function () {
    verifyCodesecurityconfigurationUpdated(k);
  });
});

bthread("Codesecurityconfiguration delete verification", function () {
  const e = waitForAnyCodesecurityconfigurationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCodesecurityconfiguration(k, ANY), function () {
    verifyCodesecurityconfigurationDoesNotExist(k);
  });
});

bthread("Codesofconduct create verification", function () {
  const e = waitForAnyCodesofconductAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodesofconduct(k, ANY), function () {
    verifyCodesofconductExists(k);
  });
});

bthread("Codesofconduct update verification", function () {
  const e = waitForAnyCodesofconductUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodesofconduct(k, ANY), function () {
    verifyCodesofconductUpdated(k);
  });
});

bthread("Codesofconduct delete verification", function () {
  const e = waitForAnyCodesofconductDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCodesofconduct(k, ANY), function () {
    verifyCodesofconductDoesNotExist(k);
  });
});

bthread("Codespace create verification", function () {
  const e = waitForAnyCodespaceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodespace(k, ANY), function () {
    verifyCodespaceExists(k);
  });
});

bthread("Codespace update verification", function () {
  const e = waitForAnyCodespaceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCodespace(k, ANY), function () {
    verifyCodespaceUpdated(k);
  });
});

bthread("Codespace delete verification", function () {
  const e = waitForAnyCodespaceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCodespace(k, ANY), function () {
    verifyCodespaceDoesNotExist(k);
  });
});

bthread("Collaborator create verification", function () {
  const e = waitForAnyCollaboratorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCollaborator(k, ANY), function () {
    verifyCollaboratorExists(k);
  });
});

bthread("Collaborator update verification", function () {
  const e = waitForAnyCollaboratorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCollaborator(k, ANY), function () {
    verifyCollaboratorUpdated(k);
  });
});

bthread("Collaborator delete verification", function () {
  const e = waitForAnyCollaboratorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCollaborator(k, ANY), function () {
    verifyCollaboratorDoesNotExist(k);
  });
});

bthread("Column create verification", function () {
  const e = waitForAnyColumnAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteColumn(k, ANY), function () {
    verifyColumnExists(k);
  });
});

bthread("Column update verification", function () {
  const e = waitForAnyColumnUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteColumn(k, ANY), function () {
    verifyColumnUpdated(k);
  });
});

bthread("Column delete verification", function () {
  const e = waitForAnyColumnDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddColumn(k, ANY), function () {
    verifyColumnDoesNotExist(k);
  });
});

bthread("Comment create verification", function () {
  const e = waitForAnyCommentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComment(k, ANY), function () {
    verifyCommentExists(k);
  });
});

bthread("Comment update verification", function () {
  const e = waitForAnyCommentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteComment(k, ANY), function () {
    verifyCommentUpdated(k);
  });
});

bthread("Comment delete verification", function () {
  const e = waitForAnyCommentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddComment(k, ANY), function () {
    verifyCommentDoesNotExist(k);
  });
});

bthread("Commit create verification", function () {
  const e = waitForAnyCommitAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCommit(k, ANY), function () {
    verifyCommitExists(k);
  });
});

bthread("Commit update verification", function () {
  const e = waitForAnyCommitUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCommit(k, ANY), function () {
    verifyCommitUpdated(k);
  });
});

bthread("Commit delete verification", function () {
  const e = waitForAnyCommitDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCommit(k, ANY), function () {
    verifyCommitDoesNotExist(k);
  });
});

bthread("Commitactivity create verification", function () {
  const e = waitForAnyCommitactivityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCommitactivity(k, ANY), function () {
    verifyCommitactivityExists(k);
  });
});

bthread("Commitactivity update verification", function () {
  const e = waitForAnyCommitactivityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCommitactivity(k, ANY), function () {
    verifyCommitactivityUpdated(k);
  });
});

bthread("Commitactivity delete verification", function () {
  const e = waitForAnyCommitactivityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCommitactivity(k, ANY), function () {
    verifyCommitactivityDoesNotExist(k);
  });
});

bthread("Community create verification", function () {
  const e = waitForAnyCommunityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCommunity(k, ANY), function () {
    verifyCommunityExists(k);
  });
});

bthread("Community update verification", function () {
  const e = waitForAnyCommunityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCommunity(k, ANY), function () {
    verifyCommunityUpdated(k);
  });
});

bthread("Community delete verification", function () {
  const e = waitForAnyCommunityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCommunity(k, ANY), function () {
    verifyCommunityDoesNotExist(k);
  });
});

bthread("Compare create verification", function () {
  const e = waitForAnyCompareAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCompare(k, ANY), function () {
    verifyCompareExists(k);
  });
});

bthread("Compare update verification", function () {
  const e = waitForAnyCompareUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCompare(k, ANY), function () {
    verifyCompareUpdated(k);
  });
});

bthread("Compare delete verification", function () {
  const e = waitForAnyCompareDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCompare(k, ANY), function () {
    verifyCompareDoesNotExist(k);
  });
});

bthread("Config create verification", function () {
  const e = waitForAnyConfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfig(k, ANY), function () {
    verifyConfigExists(k);
  });
});

bthread("Config update verification", function () {
  const e = waitForAnyConfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfig(k, ANY), function () {
    verifyConfigUpdated(k);
  });
});

bthread("Config delete verification", function () {
  const e = waitForAnyConfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfig(k, ANY), function () {
    verifyConfigDoesNotExist(k);
  });
});

bthread("Configuration create verification", function () {
  const e = waitForAnyConfigurationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfiguration(k, ANY), function () {
    verifyConfigurationExists(k);
  });
});

bthread("Configuration update verification", function () {
  const e = waitForAnyConfigurationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConfiguration(k, ANY), function () {
    verifyConfigurationUpdated(k);
  });
});

bthread("Configuration delete verification", function () {
  const e = waitForAnyConfigurationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConfiguration(k, ANY), function () {
    verifyConfigurationDoesNotExist(k);
  });
});

bthread("Conflict create verification", function () {
  const e = waitForAnyConflictAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConflict(k, ANY), function () {
    verifyConflictExists(k);
  });
});

bthread("Conflict update verification", function () {
  const e = waitForAnyConflictUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConflict(k, ANY), function () {
    verifyConflictUpdated(k);
  });
});

bthread("Conflict delete verification", function () {
  const e = waitForAnyConflictDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConflict(k, ANY), function () {
    verifyConflictDoesNotExist(k);
  });
});

bthread("Content create verification", function () {
  const e = waitForAnyContentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContent(k, ANY), function () {
    verifyContentExists(k);
  });
});

bthread("Content update verification", function () {
  const e = waitForAnyContentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContent(k, ANY), function () {
    verifyContentUpdated(k);
  });
});

bthread("Content delete verification", function () {
  const e = waitForAnyContentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContent(k, ANY), function () {
    verifyContentDoesNotExist(k);
  });
});

bthread("Context create verification", function () {
  const e = waitForAnyContextAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContext(k, ANY), function () {
    verifyContextExists(k);
  });
});

bthread("Context update verification", function () {
  const e = waitForAnyContextUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContext(k, ANY), function () {
    verifyContextUpdated(k);
  });
});

bthread("Context delete verification", function () {
  const e = waitForAnyContextDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContext(k, ANY), function () {
    verifyContextDoesNotExist(k);
  });
});

bthread("Contributor create verification", function () {
  const e = waitForAnyContributorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContributor(k, ANY), function () {
    verifyContributorExists(k);
  });
});

bthread("Contributor update verification", function () {
  const e = waitForAnyContributorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteContributor(k, ANY), function () {
    verifyContributorUpdated(k);
  });
});

bthread("Contributor delete verification", function () {
  const e = waitForAnyContributorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddContributor(k, ANY), function () {
    verifyContributorDoesNotExist(k);
  });
});

bthread("Conversion create verification", function () {
  const e = waitForAnyConversionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConversion(k, ANY), function () {
    verifyConversionExists(k);
  });
});

bthread("Conversion update verification", function () {
  const e = waitForAnyConversionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteConversion(k, ANY), function () {
    verifyConversionUpdated(k);
  });
});

bthread("Conversion delete verification", function () {
  const e = waitForAnyConversionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddConversion(k, ANY), function () {
    verifyConversionDoesNotExist(k);
  });
});

bthread("Copilot create verification", function () {
  const e = waitForAnyCopilotAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCopilot(k, ANY), function () {
    verifyCopilotExists(k);
  });
});

bthread("Copilot update verification", function () {
  const e = waitForAnyCopilotUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCopilot(k, ANY), function () {
    verifyCopilotUpdated(k);
  });
});

bthread("Copilot delete verification", function () {
  const e = waitForAnyCopilotDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCopilot(k, ANY), function () {
    verifyCopilotDoesNotExist(k);
  });
});

bthread("Credential create verification", function () {
  const e = waitForAnyCredentialAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredential(k, ANY), function () {
    verifyCredentialExists(k);
  });
});

bthread("Credential update verification", function () {
  const e = waitForAnyCredentialUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCredential(k, ANY), function () {
    verifyCredentialUpdated(k);
  });
});

bthread("Credential delete verification", function () {
  const e = waitForAnyCredentialDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCredential(k, ANY), function () {
    verifyCredentialDoesNotExist(k);
  });
});

bthread("Customization create verification", function () {
  const e = waitForAnyCustomizationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomization(k, ANY), function () {
    verifyCustomizationExists(k);
  });
});

bthread("Customization update verification", function () {
  const e = waitForAnyCustomizationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCustomization(k, ANY), function () {
    verifyCustomizationUpdated(k);
  });
});

bthread("Customization delete verification", function () {
  const e = waitForAnyCustomizationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCustomization(k, ANY), function () {
    verifyCustomizationDoesNotExist(k);
  });
});

bthread("Cve create verification", function () {
  const e = waitForAnyCveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCve(k, ANY), function () {
    verifyCveExists(k);
  });
});

bthread("Cve update verification", function () {
  const e = waitForAnyCveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCve(k, ANY), function () {
    verifyCveUpdated(k);
  });
});

bthread("Cve delete verification", function () {
  const e = waitForAnyCveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCve(k, ANY), function () {
    verifyCveDoesNotExist(k);
  });
});

bthread("Databas create verification", function () {
  const e = waitForAnyDatabasAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatabas(k, ANY), function () {
    verifyDatabasExists(k);
  });
});

bthread("Databas update verification", function () {
  const e = waitForAnyDatabasUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDatabas(k, ANY), function () {
    verifyDatabasUpdated(k);
  });
});

bthread("Databas delete verification", function () {
  const e = waitForAnyDatabasDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDatabas(k, ANY), function () {
    verifyDatabasDoesNotExist(k);
  });
});

bthread("Default create verification", function () {
  const e = waitForAnyDefaultAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefault(k, ANY), function () {
    verifyDefaultExists(k);
  });
});

bthread("Default update verification", function () {
  const e = waitForAnyDefaultUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefault(k, ANY), function () {
    verifyDefaultUpdated(k);
  });
});

bthread("Default delete verification", function () {
  const e = waitForAnyDefaultDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefault(k, ANY), function () {
    verifyDefaultDoesNotExist(k);
  });
});

bthread("Defaultlevel create verification", function () {
  const e = waitForAnyDefaultlevelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultlevel(k, ANY), function () {
    verifyDefaultlevelExists(k);
  });
});

bthread("Defaultlevel update verification", function () {
  const e = waitForAnyDefaultlevelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultlevel(k, ANY), function () {
    verifyDefaultlevelUpdated(k);
  });
});

bthread("Defaultlevel delete verification", function () {
  const e = waitForAnyDefaultlevelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultlevel(k, ANY), function () {
    verifyDefaultlevelDoesNotExist(k);
  });
});

bthread("Defaultsetup create verification", function () {
  const e = waitForAnyDefaultsetupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultsetup(k, ANY), function () {
    verifyDefaultsetupExists(k);
  });
});

bthread("Defaultsetup update verification", function () {
  const e = waitForAnyDefaultsetupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDefaultsetup(k, ANY), function () {
    verifyDefaultsetupUpdated(k);
  });
});

bthread("Defaultsetup delete verification", function () {
  const e = waitForAnyDefaultsetupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDefaultsetup(k, ANY), function () {
    verifyDefaultsetupDoesNotExist(k);
  });
});

bthread("Deleterequest create verification", function () {
  const e = waitForAnyDeleterequestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeleterequest(k, ANY), function () {
    verifyDeleterequestExists(k);
  });
});

bthread("Deleterequest update verification", function () {
  const e = waitForAnyDeleterequestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeleterequest(k, ANY), function () {
    verifyDeleterequestUpdated(k);
  });
});

bthread("Deleterequest delete verification", function () {
  const e = waitForAnyDeleterequestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeleterequest(k, ANY), function () {
    verifyDeleterequestDoesNotExist(k);
  });
});

bthread("Delivery create verification", function () {
  const e = waitForAnyDeliveryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelivery(k, ANY), function () {
    verifyDeliveryExists(k);
  });
});

bthread("Delivery update verification", function () {
  const e = waitForAnyDeliveryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelivery(k, ANY), function () {
    verifyDeliveryUpdated(k);
  });
});

bthread("Delivery delete verification", function () {
  const e = waitForAnyDeliveryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDelivery(k, ANY), function () {
    verifyDeliveryDoesNotExist(k);
  });
});

bthread("Dependabot create verification", function () {
  const e = waitForAnyDependabotAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDependabot(k, ANY), function () {
    verifyDependabotExists(k);
  });
});

bthread("Dependabot update verification", function () {
  const e = waitForAnyDependabotUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDependabot(k, ANY), function () {
    verifyDependabotUpdated(k);
  });
});

bthread("Dependabot delete verification", function () {
  const e = waitForAnyDependabotDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDependabot(k, ANY), function () {
    verifyDependabotDoesNotExist(k);
  });
});

bthread("Dependency create verification", function () {
  const e = waitForAnyDependencyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDependency(k, ANY), function () {
    verifyDependencyExists(k);
  });
});

bthread("Dependency update verification", function () {
  const e = waitForAnyDependencyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDependency(k, ANY), function () {
    verifyDependencyUpdated(k);
  });
});

bthread("Dependency delete verification", function () {
  const e = waitForAnyDependencyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDependency(k, ANY), function () {
    verifyDependencyDoesNotExist(k);
  });
});

bthread("Dependencygraph create verification", function () {
  const e = waitForAnyDependencygraphAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDependencygraph(k, ANY), function () {
    verifyDependencygraphExists(k);
  });
});

bthread("Dependencygraph update verification", function () {
  const e = waitForAnyDependencygraphUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDependencygraph(k, ANY), function () {
    verifyDependencygraphUpdated(k);
  });
});

bthread("Dependencygraph delete verification", function () {
  const e = waitForAnyDependencygraphDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDependencygraph(k, ANY), function () {
    verifyDependencygraphDoesNotExist(k);
  });
});

bthread("Deployment create verification", function () {
  const e = waitForAnyDeploymentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeployment(k, ANY), function () {
    verifyDeploymentExists(k);
  });
});

bthread("Deployment update verification", function () {
  const e = waitForAnyDeploymentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeployment(k, ANY), function () {
    verifyDeploymentUpdated(k);
  });
});

bthread("Deployment delete verification", function () {
  const e = waitForAnyDeploymentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeployment(k, ANY), function () {
    verifyDeploymentDoesNotExist(k);
  });
});

bthread("Deploymentbranchpolicy create verification", function () {
  const e = waitForAnyDeploymentbranchpolicyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeploymentbranchpolicy(k, ANY), function () {
    verifyDeploymentbranchpolicyExists(k);
  });
});

bthread("Deploymentbranchpolicy update verification", function () {
  const e = waitForAnyDeploymentbranchpolicyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeploymentbranchpolicy(k, ANY), function () {
    verifyDeploymentbranchpolicyUpdated(k);
  });
});

bthread("Deploymentbranchpolicy delete verification", function () {
  const e = waitForAnyDeploymentbranchpolicyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeploymentbranchpolicy(k, ANY), function () {
    verifyDeploymentbranchpolicyDoesNotExist(k);
  });
});

bthread("Deploymentprotectionrule create verification", function () {
  const e = waitForAnyDeploymentprotectionruleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeploymentprotectionrule(k, ANY), function () {
    verifyDeploymentprotectionruleExists(k);
  });
});

bthread("Deploymentprotectionrule update verification", function () {
  const e = waitForAnyDeploymentprotectionruleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeploymentprotectionrule(k, ANY), function () {
    verifyDeploymentprotectionruleUpdated(k);
  });
});

bthread("Deploymentprotectionrule delete verification", function () {
  const e = waitForAnyDeploymentprotectionruleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeploymentprotectionrule(k, ANY), function () {
    verifyDeploymentprotectionruleDoesNotExist(k);
  });
});

bthread("Detach create verification", function () {
  const e = waitForAnyDetachAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDetach(k, ANY), function () {
    verifyDetachExists(k);
  });
});

bthread("Detach update verification", function () {
  const e = waitForAnyDetachUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDetach(k, ANY), function () {
    verifyDetachUpdated(k);
  });
});

bthread("Detach delete verification", function () {
  const e = waitForAnyDetachDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDetach(k, ANY), function () {
    verifyDetachDoesNotExist(k);
  });
});

bthread("Devcontainer create verification", function () {
  const e = waitForAnyDevcontainerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevcontainer(k, ANY), function () {
    verifyDevcontainerExists(k);
  });
});

bthread("Devcontainer update verification", function () {
  const e = waitForAnyDevcontainerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDevcontainer(k, ANY), function () {
    verifyDevcontainerUpdated(k);
  });
});

bthread("Devcontainer delete verification", function () {
  const e = waitForAnyDevcontainerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDevcontainer(k, ANY), function () {
    verifyDevcontainerDoesNotExist(k);
  });
});

bthread("Digest create verification", function () {
  const e = waitForAnyDigestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDigest(k, ANY), function () {
    verifyDigestExists(k);
  });
});

bthread("Digest update verification", function () {
  const e = waitForAnyDigestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDigest(k, ANY), function () {
    verifyDigestUpdated(k);
  });
});

bthread("Digest delete verification", function () {
  const e = waitForAnyDigestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDigest(k, ANY), function () {
    verifyDigestDoesNotExist(k);
  });
});

bthread("Disable create verification", function () {
  const e = waitForAnyDisableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisable(k, ANY), function () {
    verifyDisableExists(k);
  });
});

bthread("Disable update verification", function () {
  const e = waitForAnyDisableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDisable(k, ANY), function () {
    verifyDisableUpdated(k);
  });
});

bthread("Disable delete verification", function () {
  const e = waitForAnyDisableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDisable(k, ANY), function () {
    verifyDisableDoesNotExist(k);
  });
});

bthread("Discussion create verification", function () {
  const e = waitForAnyDiscussionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDiscussion(k, ANY), function () {
    verifyDiscussionExists(k);
  });
});

bthread("Discussion update verification", function () {
  const e = waitForAnyDiscussionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDiscussion(k, ANY), function () {
    verifyDiscussionUpdated(k);
  });
});

bthread("Discussion delete verification", function () {
  const e = waitForAnyDiscussionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDiscussion(k, ANY), function () {
    verifyDiscussionDoesNotExist(k);
  });
});

bthread("Dismissal create verification", function () {
  const e = waitForAnyDismissalAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDismissal(k, ANY), function () {
    verifyDismissalExists(k);
  });
});

bthread("Dismissal update verification", function () {
  const e = waitForAnyDismissalUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDismissal(k, ANY), function () {
    verifyDismissalUpdated(k);
  });
});

bthread("Dismissal delete verification", function () {
  const e = waitForAnyDismissalDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDismissal(k, ANY), function () {
    verifyDismissalDoesNotExist(k);
  });
});

bthread("Dispatche create verification", function () {
  const e = waitForAnyDispatcheAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDispatche(k, ANY), function () {
    verifyDispatcheExists(k);
  });
});

bthread("Dispatche update verification", function () {
  const e = waitForAnyDispatcheUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDispatche(k, ANY), function () {
    verifyDispatcheUpdated(k);
  });
});

bthread("Dispatche delete verification", function () {
  const e = waitForAnyDispatcheDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDispatche(k, ANY), function () {
    verifyDispatcheDoesNotExist(k);
  });
});

bthread("Docker create verification", function () {
  const e = waitForAnyDockerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDocker(k, ANY), function () {
    verifyDockerExists(k);
  });
});

bthread("Docker update verification", function () {
  const e = waitForAnyDockerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDocker(k, ANY), function () {
    verifyDockerUpdated(k);
  });
});

bthread("Docker delete verification", function () {
  const e = waitForAnyDockerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDocker(k, ANY), function () {
    verifyDockerDoesNotExist(k);
  });
});

bthread("Download create verification", function () {
  const e = waitForAnyDownloadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDownload(k, ANY), function () {
    verifyDownloadExists(k);
  });
});

bthread("Download update verification", function () {
  const e = waitForAnyDownloadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDownload(k, ANY), function () {
    verifyDownloadUpdated(k);
  });
});

bthread("Download delete verification", function () {
  const e = waitForAnyDownloadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDownload(k, ANY), function () {
    verifyDownloadDoesNotExist(k);
  });
});

bthread("Email create verification", function () {
  const e = waitForAnyEmailAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmail(k, ANY), function () {
    verifyEmailExists(k);
  });
});

bthread("Email update verification", function () {
  const e = waitForAnyEmailUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmail(k, ANY), function () {
    verifyEmailUpdated(k);
  });
});

bthread("Email delete verification", function () {
  const e = waitForAnyEmailDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEmail(k, ANY), function () {
    verifyEmailDoesNotExist(k);
  });
});

bthread("Emoji create verification", function () {
  const e = waitForAnyEmojiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmoji(k, ANY), function () {
    verifyEmojiExists(k);
  });
});

bthread("Emoji update verification", function () {
  const e = waitForAnyEmojiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEmoji(k, ANY), function () {
    verifyEmojiUpdated(k);
  });
});

bthread("Emoji delete verification", function () {
  const e = waitForAnyEmojiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEmoji(k, ANY), function () {
    verifyEmojiDoesNotExist(k);
  });
});

bthread("Enable create verification", function () {
  const e = waitForAnyEnableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnable(k, ANY), function () {
    verifyEnableExists(k);
  });
});

bthread("Enable update verification", function () {
  const e = waitForAnyEnableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnable(k, ANY), function () {
    verifyEnableUpdated(k);
  });
});

bthread("Enable delete verification", function () {
  const e = waitForAnyEnableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEnable(k, ANY), function () {
    verifyEnableDoesNotExist(k);
  });
});

bthread("Enforceadmin create verification", function () {
  const e = waitForAnyEnforceadminAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnforceadmin(k, ANY), function () {
    verifyEnforceadminExists(k);
  });
});

bthread("Enforceadmin update verification", function () {
  const e = waitForAnyEnforceadminUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnforceadmin(k, ANY), function () {
    verifyEnforceadminUpdated(k);
  });
});

bthread("Enforceadmin delete verification", function () {
  const e = waitForAnyEnforceadminDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEnforceadmin(k, ANY), function () {
    verifyEnforceadminDoesNotExist(k);
  });
});

bthread("Enterpris create verification", function () {
  const e = waitForAnyEnterprisAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnterpris(k, ANY), function () {
    verifyEnterprisExists(k);
  });
});

bthread("Enterpris update verification", function () {
  const e = waitForAnyEnterprisUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnterpris(k, ANY), function () {
    verifyEnterprisUpdated(k);
  });
});

bthread("Enterpris delete verification", function () {
  const e = waitForAnyEnterprisDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEnterpris(k, ANY), function () {
    verifyEnterprisDoesNotExist(k);
  });
});

bthread("Environment create verification", function () {
  const e = waitForAnyEnvironmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnvironment(k, ANY), function () {
    verifyEnvironmentExists(k);
  });
});

bthread("Environment update verification", function () {
  const e = waitForAnyEnvironmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEnvironment(k, ANY), function () {
    verifyEnvironmentUpdated(k);
  });
});

bthread("Environment delete verification", function () {
  const e = waitForAnyEnvironmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEnvironment(k, ANY), function () {
    verifyEnvironmentDoesNotExist(k);
  });
});

bthread("Error create verification", function () {
  const e = waitForAnyErrorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteError(k, ANY), function () {
    verifyErrorExists(k);
  });
});

bthread("Error update verification", function () {
  const e = waitForAnyErrorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteError(k, ANY), function () {
    verifyErrorUpdated(k);
  });
});

bthread("Error delete verification", function () {
  const e = waitForAnyErrorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddError(k, ANY), function () {
    verifyErrorDoesNotExist(k);
  });
});

bthread("Event create verification", function () {
  const e = waitForAnyEventAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEvent(k, ANY), function () {
    verifyEventExists(k);
  });
});

bthread("Event update verification", function () {
  const e = waitForAnyEventUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEvent(k, ANY), function () {
    verifyEventUpdated(k);
  });
});

bthread("Event delete verification", function () {
  const e = waitForAnyEventDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEvent(k, ANY), function () {
    verifyEventDoesNotExist(k);
  });
});

bthread("Export create verification", function () {
  const e = waitForAnyExportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExport(k, ANY), function () {
    verifyExportExists(k);
  });
});

bthread("Export update verification", function () {
  const e = waitForAnyExportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteExport(k, ANY), function () {
    verifyExportUpdated(k);
  });
});

bthread("Export delete verification", function () {
  const e = waitForAnyExportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddExport(k, ANY), function () {
    verifyExportDoesNotExist(k);
  });
});

bthread("Failedinvitation create verification", function () {
  const e = waitForAnyFailedinvitationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFailedinvitation(k, ANY), function () {
    verifyFailedinvitationExists(k);
  });
});

bthread("Failedinvitation update verification", function () {
  const e = waitForAnyFailedinvitationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFailedinvitation(k, ANY), function () {
    verifyFailedinvitationUpdated(k);
  });
});

bthread("Failedinvitation delete verification", function () {
  const e = waitForAnyFailedinvitationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFailedinvitation(k, ANY), function () {
    verifyFailedinvitationDoesNotExist(k);
  });
});

bthread("Feed create verification", function () {
  const e = waitForAnyFeedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFeed(k, ANY), function () {
    verifyFeedExists(k);
  });
});

bthread("Feed update verification", function () {
  const e = waitForAnyFeedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFeed(k, ANY), function () {
    verifyFeedUpdated(k);
  });
});

bthread("Feed delete verification", function () {
  const e = waitForAnyFeedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFeed(k, ANY), function () {
    verifyFeedDoesNotExist(k);
  });
});

bthread("Field create verification", function () {
  const e = waitForAnyFieldAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteField(k, ANY), function () {
    verifyFieldExists(k);
  });
});

bthread("Field update verification", function () {
  const e = waitForAnyFieldUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteField(k, ANY), function () {
    verifyFieldUpdated(k);
  });
});

bthread("Field delete verification", function () {
  const e = waitForAnyFieldDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddField(k, ANY), function () {
    verifyFieldDoesNotExist(k);
  });
});

bthread("File create verification", function () {
  const e = waitForAnyFileAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFile(k, ANY), function () {
    verifyFileExists(k);
  });
});

bthread("File update verification", function () {
  const e = waitForAnyFileUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFile(k, ANY), function () {
    verifyFileUpdated(k);
  });
});

bthread("File delete verification", function () {
  const e = waitForAnyFileDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFile(k, ANY), function () {
    verifyFileDoesNotExist(k);
  });
});

bthread("Follower create verification", function () {
  const e = waitForAnyFollowerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFollower(k, ANY), function () {
    verifyFollowerExists(k);
  });
});

bthread("Follower update verification", function () {
  const e = waitForAnyFollowerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFollower(k, ANY), function () {
    verifyFollowerUpdated(k);
  });
});

bthread("Follower delete verification", function () {
  const e = waitForAnyFollowerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFollower(k, ANY), function () {
    verifyFollowerDoesNotExist(k);
  });
});

bthread("Following create verification", function () {
  const e = waitForAnyFollowingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFollowing(k, ANY), function () {
    verifyFollowingExists(k);
  });
});

bthread("Following update verification", function () {
  const e = waitForAnyFollowingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFollowing(k, ANY), function () {
    verifyFollowingUpdated(k);
  });
});

bthread("Following delete verification", function () {
  const e = waitForAnyFollowingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFollowing(k, ANY), function () {
    verifyFollowingDoesNotExist(k);
  });
});

bthread("Forcecancel create verification", function () {
  const e = waitForAnyForcecancelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteForcecancel(k, ANY), function () {
    verifyForcecancelExists(k);
  });
});

bthread("Forcecancel update verification", function () {
  const e = waitForAnyForcecancelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteForcecancel(k, ANY), function () {
    verifyForcecancelUpdated(k);
  });
});

bthread("Forcecancel delete verification", function () {
  const e = waitForAnyForcecancelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddForcecancel(k, ANY), function () {
    verifyForcecancelDoesNotExist(k);
  });
});

bthread("Fork create verification", function () {
  const e = waitForAnyForkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFork(k, ANY), function () {
    verifyForkExists(k);
  });
});

bthread("Fork update verification", function () {
  const e = waitForAnyForkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteFork(k, ANY), function () {
    verifyForkUpdated(k);
  });
});

bthread("Fork delete verification", function () {
  const e = waitForAnyForkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddFork(k, ANY), function () {
    verifyForkDoesNotExist(k);
  });
});

bthread("Forkprcontributorapproval create verification", function () {
  const e = waitForAnyForkprcontributorapprovalAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteForkprcontributorapproval(k, ANY), function () {
    verifyForkprcontributorapprovalExists(k);
  });
});

bthread("Forkprcontributorapproval update verification", function () {
  const e = waitForAnyForkprcontributorapprovalUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteForkprcontributorapproval(k, ANY), function () {
    verifyForkprcontributorapprovalUpdated(k);
  });
});

bthread("Forkprcontributorapproval delete verification", function () {
  const e = waitForAnyForkprcontributorapprovalDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddForkprcontributorapproval(k, ANY), function () {
    verifyForkprcontributorapprovalDoesNotExist(k);
  });
});

bthread("Forkprworkflowsprivaterepo create verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteForkprworkflowsprivaterepo(k, ANY), function () {
    verifyForkprworkflowsprivaterepoExists(k);
  });
});

bthread("Forkprworkflowsprivaterepo update verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteForkprworkflowsprivaterepo(k, ANY), function () {
    verifyForkprworkflowsprivaterepoUpdated(k);
  });
});

bthread("Forkprworkflowsprivaterepo delete verification", function () {
  const e = waitForAnyForkprworkflowsprivaterepoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddForkprworkflowsprivaterepo(k, ANY), function () {
    verifyForkprworkflowsprivaterepoDoesNotExist(k);
  });
});

bthread("Generate create verification", function () {
  const e = waitForAnyGenerateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerate(k, ANY), function () {
    verifyGenerateExists(k);
  });
});

bthread("Generate update verification", function () {
  const e = waitForAnyGenerateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGenerate(k, ANY), function () {
    verifyGenerateUpdated(k);
  });
});

bthread("Generate delete verification", function () {
  const e = waitForAnyGenerateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGenerate(k, ANY), function () {
    verifyGenerateDoesNotExist(k);
  });
});

bthread("Generatejitconfig create verification", function () {
  const e = waitForAnyGeneratejitconfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGeneratejitconfig(k, ANY), function () {
    verifyGeneratejitconfigExists(k);
  });
});

bthread("Generatejitconfig update verification", function () {
  const e = waitForAnyGeneratejitconfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGeneratejitconfig(k, ANY), function () {
    verifyGeneratejitconfigUpdated(k);
  });
});

bthread("Generatejitconfig delete verification", function () {
  const e = waitForAnyGeneratejitconfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGeneratejitconfig(k, ANY), function () {
    verifyGeneratejitconfigDoesNotExist(k);
  });
});

bthread("Generatenote create verification", function () {
  const e = waitForAnyGeneratenoteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGeneratenote(k, ANY), function () {
    verifyGeneratenoteExists(k);
  });
});

bthread("Generatenote update verification", function () {
  const e = waitForAnyGeneratenoteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGeneratenote(k, ANY), function () {
    verifyGeneratenoteUpdated(k);
  });
});

bthread("Generatenote delete verification", function () {
  const e = waitForAnyGeneratenoteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGeneratenote(k, ANY), function () {
    verifyGeneratenoteDoesNotExist(k);
  });
});

bthread("Gist create verification", function () {
  const e = waitForAnyGistAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGist(k, ANY), function () {
    verifyGistExists(k);
  });
});

bthread("Gist update verification", function () {
  const e = waitForAnyGistUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGist(k, ANY), function () {
    verifyGistUpdated(k);
  });
});

bthread("Gist delete verification", function () {
  const e = waitForAnyGistDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGist(k, ANY), function () {
    verifyGistDoesNotExist(k);
  });
});

bthread("Git create verification", function () {
  const e = waitForAnyGitAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGit(k, ANY), function () {
    verifyGitExists(k);
  });
});

bthread("Git update verification", function () {
  const e = waitForAnyGitUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGit(k, ANY), function () {
    verifyGitUpdated(k);
  });
});

bthread("Git delete verification", function () {
  const e = waitForAnyGitDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGit(k, ANY), function () {
    verifyGitDoesNotExist(k);
  });
});

bthread("Githubowned create verification", function () {
  const e = waitForAnyGithubownedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGithubowned(k, ANY), function () {
    verifyGithubownedExists(k);
  });
});

bthread("Githubowned update verification", function () {
  const e = waitForAnyGithubownedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGithubowned(k, ANY), function () {
    verifyGithubownedUpdated(k);
  });
});

bthread("Githubowned delete verification", function () {
  const e = waitForAnyGithubownedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGithubowned(k, ANY), function () {
    verifyGithubownedDoesNotExist(k);
  });
});

bthread("Gitignore create verification", function () {
  const e = waitForAnyGitignoreAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGitignore(k, ANY), function () {
    verifyGitignoreExists(k);
  });
});

bthread("Gitignore update verification", function () {
  const e = waitForAnyGitignoreUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGitignore(k, ANY), function () {
    verifyGitignoreUpdated(k);
  });
});

bthread("Gitignore delete verification", function () {
  const e = waitForAnyGitignoreDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGitignore(k, ANY), function () {
    verifyGitignoreDoesNotExist(k);
  });
});

bthread("Gpgkey create verification", function () {
  const e = waitForAnyGpgkeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGpgkey(k, ANY), function () {
    verifyGpgkeyExists(k);
  });
});

bthread("Gpgkey update verification", function () {
  const e = waitForAnyGpgkeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGpgkey(k, ANY), function () {
    verifyGpgkeyUpdated(k);
  });
});

bthread("Gpgkey delete verification", function () {
  const e = waitForAnyGpgkeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGpgkey(k, ANY), function () {
    verifyGpgkeyDoesNotExist(k);
  });
});

bthread("Grade create verification", function () {
  const e = waitForAnyGradeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGrade(k, ANY), function () {
    verifyGradeExists(k);
  });
});

bthread("Grade update verification", function () {
  const e = waitForAnyGradeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGrade(k, ANY), function () {
    verifyGradeUpdated(k);
  });
});

bthread("Grade delete verification", function () {
  const e = waitForAnyGradeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGrade(k, ANY), function () {
    verifyGradeDoesNotExist(k);
  });
});

bthread("Grant create verification", function () {
  const e = waitForAnyGrantAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGrant(k, ANY), function () {
    verifyGrantExists(k);
  });
});

bthread("Grant update verification", function () {
  const e = waitForAnyGrantUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGrant(k, ANY), function () {
    verifyGrantUpdated(k);
  });
});

bthread("Grant delete verification", function () {
  const e = waitForAnyGrantDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGrant(k, ANY), function () {
    verifyGrantDoesNotExist(k);
  });
});

bthread("Health create verification", function () {
  const e = waitForAnyHealthAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHealth(k, ANY), function () {
    verifyHealthExists(k);
  });
});

bthread("Health update verification", function () {
  const e = waitForAnyHealthUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHealth(k, ANY), function () {
    verifyHealthUpdated(k);
  });
});

bthread("Health delete verification", function () {
  const e = waitForAnyHealthDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHealth(k, ANY), function () {
    verifyHealthDoesNotExist(k);
  });
});

bthread("History create verification", function () {
  const e = waitForAnyHistoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHistory(k, ANY), function () {
    verifyHistoryExists(k);
  });
});

bthread("History update verification", function () {
  const e = waitForAnyHistoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHistory(k, ANY), function () {
    verifyHistoryUpdated(k);
  });
});

bthread("History delete verification", function () {
  const e = waitForAnyHistoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHistory(k, ANY), function () {
    verifyHistoryDoesNotExist(k);
  });
});

bthread("Hook create verification", function () {
  const e = waitForAnyHookAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHook(k, ANY), function () {
    verifyHookExists(k);
  });
});

bthread("Hook update verification", function () {
  const e = waitForAnyHookUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHook(k, ANY), function () {
    verifyHookUpdated(k);
  });
});

bthread("Hook delete verification", function () {
  const e = waitForAnyHookDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHook(k, ANY), function () {
    verifyHookDoesNotExist(k);
  });
});

bthread("Hostedrunner create verification", function () {
  const e = waitForAnyHostedrunnerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHostedrunner(k, ANY), function () {
    verifyHostedrunnerExists(k);
  });
});

bthread("Hostedrunner update verification", function () {
  const e = waitForAnyHostedrunnerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHostedrunner(k, ANY), function () {
    verifyHostedrunnerUpdated(k);
  });
});

bthread("Hostedrunner delete verification", function () {
  const e = waitForAnyHostedrunnerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHostedrunner(k, ANY), function () {
    verifyHostedrunnerDoesNotExist(k);
  });
});

bthread("Hovercard create verification", function () {
  const e = waitForAnyHovercardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHovercard(k, ANY), function () {
    verifyHovercardExists(k);
  });
});

bthread("Hovercard update verification", function () {
  const e = waitForAnyHovercardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHovercard(k, ANY), function () {
    verifyHovercardUpdated(k);
  });
});

bthread("Hovercard delete verification", function () {
  const e = waitForAnyHovercardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHovercard(k, ANY), function () {
    verifyHovercardDoesNotExist(k);
  });
});

bthread("Image create verification", function () {
  const e = waitForAnyImageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImage(k, ANY), function () {
    verifyImageExists(k);
  });
});

bthread("Image update verification", function () {
  const e = waitForAnyImageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImage(k, ANY), function () {
    verifyImageUpdated(k);
  });
});

bthread("Image delete verification", function () {
  const e = waitForAnyImageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddImage(k, ANY), function () {
    verifyImageDoesNotExist(k);
  });
});

bthread("Immutablereleas create verification", function () {
  const e = waitForAnyImmutablereleasAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImmutablereleas(k, ANY), function () {
    verifyImmutablereleasExists(k);
  });
});

bthread("Immutablereleas update verification", function () {
  const e = waitForAnyImmutablereleasUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImmutablereleas(k, ANY), function () {
    verifyImmutablereleasUpdated(k);
  });
});

bthread("Immutablereleas delete verification", function () {
  const e = waitForAnyImmutablereleasDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddImmutablereleas(k, ANY), function () {
    verifyImmutablereleasDoesNotExist(k);
  });
});

bthread("Import create verification", function () {
  const e = waitForAnyImportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImport(k, ANY), function () {
    verifyImportExists(k);
  });
});

bthread("Import update verification", function () {
  const e = waitForAnyImportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteImport(k, ANY), function () {
    verifyImportUpdated(k);
  });
});

bthread("Import delete verification", function () {
  const e = waitForAnyImportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddImport(k, ANY), function () {
    verifyImportDoesNotExist(k);
  });
});

bthread("Insight create verification", function () {
  const e = waitForAnyInsightAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInsight(k, ANY), function () {
    verifyInsightExists(k);
  });
});

bthread("Insight update verification", function () {
  const e = waitForAnyInsightUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInsight(k, ANY), function () {
    verifyInsightUpdated(k);
  });
});

bthread("Insight delete verification", function () {
  const e = waitForAnyInsightDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInsight(k, ANY), function () {
    verifyInsightDoesNotExist(k);
  });
});

bthread("Installation create verification", function () {
  const e = waitForAnyInstallationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInstallation(k, ANY), function () {
    verifyInstallationExists(k);
  });
});

bthread("Installation update verification", function () {
  const e = waitForAnyInstallationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInstallation(k, ANY), function () {
    verifyInstallationUpdated(k);
  });
});

bthread("Installation delete verification", function () {
  const e = waitForAnyInstallationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInstallation(k, ANY), function () {
    verifyInstallationDoesNotExist(k);
  });
});

bthread("Installationrequest create verification", function () {
  const e = waitForAnyInstallationrequestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInstallationrequest(k, ANY), function () {
    verifyInstallationrequestExists(k);
  });
});

bthread("Installationrequest update verification", function () {
  const e = waitForAnyInstallationrequestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInstallationrequest(k, ANY), function () {
    verifyInstallationrequestUpdated(k);
  });
});

bthread("Installationrequest delete verification", function () {
  const e = waitForAnyInstallationrequestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInstallationrequest(k, ANY), function () {
    verifyInstallationrequestDoesNotExist(k);
  });
});

bthread("Instance create verification", function () {
  const e = waitForAnyInstanceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInstance(k, ANY), function () {
    verifyInstanceExists(k);
  });
});

bthread("Instance update verification", function () {
  const e = waitForAnyInstanceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInstance(k, ANY), function () {
    verifyInstanceUpdated(k);
  });
});

bthread("Instance delete verification", function () {
  const e = waitForAnyInstanceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInstance(k, ANY), function () {
    verifyInstanceDoesNotExist(k);
  });
});

bthread("Interactionlimit create verification", function () {
  const e = waitForAnyInteractionlimitAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInteractionlimit(k, ANY), function () {
    verifyInteractionlimitExists(k);
  });
});

bthread("Interactionlimit update verification", function () {
  const e = waitForAnyInteractionlimitUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInteractionlimit(k, ANY), function () {
    verifyInteractionlimitUpdated(k);
  });
});

bthread("Interactionlimit delete verification", function () {
  const e = waitForAnyInteractionlimitDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInteractionlimit(k, ANY), function () {
    verifyInteractionlimitDoesNotExist(k);
  });
});

bthread("Invitation create verification", function () {
  const e = waitForAnyInvitationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInvitation(k, ANY), function () {
    verifyInvitationExists(k);
  });
});

bthread("Invitation update verification", function () {
  const e = waitForAnyInvitationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInvitation(k, ANY), function () {
    verifyInvitationUpdated(k);
  });
});

bthread("Invitation delete verification", function () {
  const e = waitForAnyInvitationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInvitation(k, ANY), function () {
    verifyInvitationDoesNotExist(k);
  });
});

bthread("Issue create verification", function () {
  const e = waitForAnyIssueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssue(k, ANY), function () {
    verifyIssueExists(k);
  });
});

bthread("Issue update verification", function () {
  const e = waitForAnyIssueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssue(k, ANY), function () {
    verifyIssueUpdated(k);
  });
});

bthread("Issue delete verification", function () {
  const e = waitForAnyIssueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssue(k, ANY), function () {
    verifyIssueDoesNotExist(k);
  });
});

bthread("Issuetype create verification", function () {
  const e = waitForAnyIssuetypeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetype(k, ANY), function () {
    verifyIssuetypeExists(k);
  });
});

bthread("Issuetype update verification", function () {
  const e = waitForAnyIssuetypeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetype(k, ANY), function () {
    verifyIssuetypeUpdated(k);
  });
});

bthread("Issuetype delete verification", function () {
  const e = waitForAnyIssuetypeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuetype(k, ANY), function () {
    verifyIssuetypeDoesNotExist(k);
  });
});

bthread("Item create verification", function () {
  const e = waitForAnyItemAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteItem(k, ANY), function () {
    verifyItemExists(k);
  });
});

bthread("Item update verification", function () {
  const e = waitForAnyItemUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteItem(k, ANY), function () {
    verifyItemUpdated(k);
  });
});

bthread("Item delete verification", function () {
  const e = waitForAnyItemDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddItem(k, ANY), function () {
    verifyItemDoesNotExist(k);
  });
});

bthread("Job create verification", function () {
  const e = waitForAnyJobAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteJob(k, ANY), function () {
    verifyJobExists(k);
  });
});

bthread("Job update verification", function () {
  const e = waitForAnyJobUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteJob(k, ANY), function () {
    verifyJobUpdated(k);
  });
});

bthread("Job delete verification", function () {
  const e = waitForAnyJobDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddJob(k, ANY), function () {
    verifyJobDoesNotExist(k);
  });
});

bthread("Key create verification", function () {
  const e = waitForAnyKeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteKey(k, ANY), function () {
    verifyKeyExists(k);
  });
});

bthread("Key update verification", function () {
  const e = waitForAnyKeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteKey(k, ANY), function () {
    verifyKeyUpdated(k);
  });
});

bthread("Key delete verification", function () {
  const e = waitForAnyKeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddKey(k, ANY), function () {
    verifyKeyDoesNotExist(k);
  });
});

bthread("Label create verification", function () {
  const e = waitForAnyLabelAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLabel(k, ANY), function () {
    verifyLabelExists(k);
  });
});

bthread("Label update verification", function () {
  const e = waitForAnyLabelUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLabel(k, ANY), function () {
    verifyLabelUpdated(k);
  });
});

bthread("Label delete verification", function () {
  const e = waitForAnyLabelDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLabel(k, ANY), function () {
    verifyLabelDoesNotExist(k);
  });
});

bthread("Language create verification", function () {
  const e = waitForAnyLanguageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLanguage(k, ANY), function () {
    verifyLanguageExists(k);
  });
});

bthread("Language update verification", function () {
  const e = waitForAnyLanguageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLanguage(k, ANY), function () {
    verifyLanguageUpdated(k);
  });
});

bthread("Language delete verification", function () {
  const e = waitForAnyLanguageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLanguage(k, ANY), function () {
    verifyLanguageDoesNotExist(k);
  });
});

bthread("Largefile create verification", function () {
  const e = waitForAnyLargefileAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLargefile(k, ANY), function () {
    verifyLargefileExists(k);
  });
});

bthread("Largefile update verification", function () {
  const e = waitForAnyLargefileUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLargefile(k, ANY), function () {
    verifyLargefileUpdated(k);
  });
});

bthread("Largefile delete verification", function () {
  const e = waitForAnyLargefileDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLargefile(k, ANY), function () {
    verifyLargefileDoesNotExist(k);
  });
});

bthread("Latest create verification", function () {
  const e = waitForAnyLatestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLatest(k, ANY), function () {
    verifyLatestExists(k);
  });
});

bthread("Latest update verification", function () {
  const e = waitForAnyLatestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLatest(k, ANY), function () {
    verifyLatestUpdated(k);
  });
});

bthread("Latest delete verification", function () {
  const e = waitForAnyLatestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLatest(k, ANY), function () {
    verifyLatestDoesNotExist(k);
  });
});

bthread("Lf create verification", function () {
  const e = waitForAnyLfAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLf(k, ANY), function () {
    verifyLfExists(k);
  });
});

bthread("Lf update verification", function () {
  const e = waitForAnyLfUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLf(k, ANY), function () {
    verifyLfUpdated(k);
  });
});

bthread("Lf delete verification", function () {
  const e = waitForAnyLfDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLf(k, ANY), function () {
    verifyLfDoesNotExist(k);
  });
});

bthread("Licens create verification", function () {
  const e = waitForAnyLicensAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLicens(k, ANY), function () {
    verifyLicensExists(k);
  });
});

bthread("Licens update verification", function () {
  const e = waitForAnyLicensUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLicens(k, ANY), function () {
    verifyLicensUpdated(k);
  });
});

bthread("Licens delete verification", function () {
  const e = waitForAnyLicensDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLicens(k, ANY), function () {
    verifyLicensDoesNotExist(k);
  });
});

bthread("License create verification", function () {
  const e = waitForAnyLicenseAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLicense(k, ANY), function () {
    verifyLicenseExists(k);
  });
});

bthread("License update verification", function () {
  const e = waitForAnyLicenseUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLicense(k, ANY), function () {
    verifyLicenseUpdated(k);
  });
});

bthread("License delete verification", function () {
  const e = waitForAnyLicenseDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLicense(k, ANY), function () {
    verifyLicenseDoesNotExist(k);
  });
});

bthread("Limit create verification", function () {
  const e = waitForAnyLimitAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLimit(k, ANY), function () {
    verifyLimitExists(k);
  });
});

bthread("Limit update verification", function () {
  const e = waitForAnyLimitUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLimit(k, ANY), function () {
    verifyLimitUpdated(k);
  });
});

bthread("Limit delete verification", function () {
  const e = waitForAnyLimitDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLimit(k, ANY), function () {
    verifyLimitDoesNotExist(k);
  });
});

bthread("Location create verification", function () {
  const e = waitForAnyLocationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocation(k, ANY), function () {
    verifyLocationExists(k);
  });
});

bthread("Location update verification", function () {
  const e = waitForAnyLocationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLocation(k, ANY), function () {
    verifyLocationUpdated(k);
  });
});

bthread("Location delete verification", function () {
  const e = waitForAnyLocationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLocation(k, ANY), function () {
    verifyLocationDoesNotExist(k);
  });
});

bthread("Lock create verification", function () {
  const e = waitForAnyLockAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLock(k, ANY), function () {
    verifyLockExists(k);
  });
});

bthread("Lock update verification", function () {
  const e = waitForAnyLockUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLock(k, ANY), function () {
    verifyLockUpdated(k);
  });
});

bthread("Lock delete verification", function () {
  const e = waitForAnyLockDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLock(k, ANY), function () {
    verifyLockDoesNotExist(k);
  });
});

bthread("Log create verification", function () {
  const e = waitForAnyLogAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLog(k, ANY), function () {
    verifyLogExists(k);
  });
});

bthread("Log update verification", function () {
  const e = waitForAnyLogUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteLog(k, ANY), function () {
    verifyLogUpdated(k);
  });
});

bthread("Log delete verification", function () {
  const e = waitForAnyLogDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddLog(k, ANY), function () {
    verifyLogDoesNotExist(k);
  });
});

bthread("Machine create verification", function () {
  const e = waitForAnyMachineAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMachine(k, ANY), function () {
    verifyMachineExists(k);
  });
});

bthread("Machine update verification", function () {
  const e = waitForAnyMachineUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMachine(k, ANY), function () {
    verifyMachineUpdated(k);
  });
});

bthread("Machine delete verification", function () {
  const e = waitForAnyMachineDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMachine(k, ANY), function () {
    verifyMachineDoesNotExist(k);
  });
});

bthread("Machinesize create verification", function () {
  const e = waitForAnyMachinesizeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMachinesize(k, ANY), function () {
    verifyMachinesizeExists(k);
  });
});

bthread("Machinesize update verification", function () {
  const e = waitForAnyMachinesizeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMachinesize(k, ANY), function () {
    verifyMachinesizeUpdated(k);
  });
});

bthread("Machinesize delete verification", function () {
  const e = waitForAnyMachinesizeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMachinesize(k, ANY), function () {
    verifyMachinesizeDoesNotExist(k);
  });
});

bthread("Markdown create verification", function () {
  const e = waitForAnyMarkdownAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkdown(k, ANY), function () {
    verifyMarkdownExists(k);
  });
});

bthread("Markdown update verification", function () {
  const e = waitForAnyMarkdownUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkdown(k, ANY), function () {
    verifyMarkdownUpdated(k);
  });
});

bthread("Markdown delete verification", function () {
  const e = waitForAnyMarkdownDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarkdown(k, ANY), function () {
    verifyMarkdownDoesNotExist(k);
  });
});

bthread("Marketplacelisting create verification", function () {
  const e = waitForAnyMarketplacelistingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarketplacelisting(k, ANY), function () {
    verifyMarketplacelistingExists(k);
  });
});

bthread("Marketplacelisting update verification", function () {
  const e = waitForAnyMarketplacelistingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarketplacelisting(k, ANY), function () {
    verifyMarketplacelistingUpdated(k);
  });
});

bthread("Marketplacelisting delete verification", function () {
  const e = waitForAnyMarketplacelistingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarketplacelisting(k, ANY), function () {
    verifyMarketplacelistingDoesNotExist(k);
  });
});

bthread("Marketplacepurchas create verification", function () {
  const e = waitForAnyMarketplacepurchasAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarketplacepurchas(k, ANY), function () {
    verifyMarketplacepurchasExists(k);
  });
});

bthread("Marketplacepurchas update verification", function () {
  const e = waitForAnyMarketplacepurchasUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarketplacepurchas(k, ANY), function () {
    verifyMarketplacepurchasUpdated(k);
  });
});

bthread("Marketplacepurchas delete verification", function () {
  const e = waitForAnyMarketplacepurchasDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarketplacepurchas(k, ANY), function () {
    verifyMarketplacepurchasDoesNotExist(k);
  });
});

bthread("Matchingref create verification", function () {
  const e = waitForAnyMatchingrefAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMatchingref(k, ANY), function () {
    verifyMatchingrefExists(k);
  });
});

bthread("Matchingref update verification", function () {
  const e = waitForAnyMatchingrefUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMatchingref(k, ANY), function () {
    verifyMatchingrefUpdated(k);
  });
});

bthread("Matchingref delete verification", function () {
  const e = waitForAnyMatchingrefDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMatchingref(k, ANY), function () {
    verifyMatchingrefDoesNotExist(k);
  });
});

bthread("Member create verification", function () {
  const e = waitForAnyMemberAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMember(k, ANY), function () {
    verifyMemberExists(k);
  });
});

bthread("Member update verification", function () {
  const e = waitForAnyMemberUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMember(k, ANY), function () {
    verifyMemberUpdated(k);
  });
});

bthread("Member delete verification", function () {
  const e = waitForAnyMemberDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMember(k, ANY), function () {
    verifyMemberDoesNotExist(k);
  });
});

bthread("Membership create verification", function () {
  const e = waitForAnyMembershipAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembership(k, ANY), function () {
    verifyMembershipExists(k);
  });
});

bthread("Membership update verification", function () {
  const e = waitForAnyMembershipUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMembership(k, ANY), function () {
    verifyMembershipUpdated(k);
  });
});

bthread("Membership delete verification", function () {
  const e = waitForAnyMembershipDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMembership(k, ANY), function () {
    verifyMembershipDoesNotExist(k);
  });
});

bthread("Merge create verification", function () {
  const e = waitForAnyMergeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMerge(k, ANY), function () {
    verifyMergeExists(k);
  });
});

bthread("Merge update verification", function () {
  const e = waitForAnyMergeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMerge(k, ANY), function () {
    verifyMergeUpdated(k);
  });
});

bthread("Merge delete verification", function () {
  const e = waitForAnyMergeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMerge(k, ANY), function () {
    verifyMergeDoesNotExist(k);
  });
});

bthread("Mergeupstream create verification", function () {
  const e = waitForAnyMergeupstreamAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMergeupstream(k, ANY), function () {
    verifyMergeupstreamExists(k);
  });
});

bthread("Mergeupstream update verification", function () {
  const e = waitForAnyMergeupstreamUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMergeupstream(k, ANY), function () {
    verifyMergeupstreamUpdated(k);
  });
});

bthread("Mergeupstream delete verification", function () {
  const e = waitForAnyMergeupstreamDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMergeupstream(k, ANY), function () {
    verifyMergeupstreamDoesNotExist(k);
  });
});

bthread("Meta create verification", function () {
  const e = waitForAnyMetaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMeta(k, ANY), function () {
    verifyMetaExists(k);
  });
});

bthread("Meta update verification", function () {
  const e = waitForAnyMetaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMeta(k, ANY), function () {
    verifyMetaUpdated(k);
  });
});

bthread("Meta delete verification", function () {
  const e = waitForAnyMetaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMeta(k, ANY), function () {
    verifyMetaDoesNotExist(k);
  });
});

bthread("Metadata create verification", function () {
  const e = waitForAnyMetadataAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMetadata(k, ANY), function () {
    verifyMetadataExists(k);
  });
});

bthread("Metadata update verification", function () {
  const e = waitForAnyMetadataUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMetadata(k, ANY), function () {
    verifyMetadataUpdated(k);
  });
});

bthread("Metadata delete verification", function () {
  const e = waitForAnyMetadataDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMetadata(k, ANY), function () {
    verifyMetadataDoesNotExist(k);
  });
});

bthread("Metric create verification", function () {
  const e = waitForAnyMetricAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMetric(k, ANY), function () {
    verifyMetricExists(k);
  });
});

bthread("Metric update verification", function () {
  const e = waitForAnyMetricUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMetric(k, ANY), function () {
    verifyMetricUpdated(k);
  });
});

bthread("Metric delete verification", function () {
  const e = waitForAnyMetricDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMetric(k, ANY), function () {
    verifyMetricDoesNotExist(k);
  });
});

bthread("Migration create verification", function () {
  const e = waitForAnyMigrationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMigration(k, ANY), function () {
    verifyMigrationExists(k);
  });
});

bthread("Migration update verification", function () {
  const e = waitForAnyMigrationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMigration(k, ANY), function () {
    verifyMigrationUpdated(k);
  });
});

bthread("Migration delete verification", function () {
  const e = waitForAnyMigrationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMigration(k, ANY), function () {
    verifyMigrationDoesNotExist(k);
  });
});

bthread("Milestone create verification", function () {
  const e = waitForAnyMilestoneAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMilestone(k, ANY), function () {
    verifyMilestoneExists(k);
  });
});

bthread("Milestone update verification", function () {
  const e = waitForAnyMilestoneUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMilestone(k, ANY), function () {
    verifyMilestoneUpdated(k);
  });
});

bthread("Milestone delete verification", function () {
  const e = waitForAnyMilestoneDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMilestone(k, ANY), function () {
    verifyMilestoneDoesNotExist(k);
  });
});

bthread("Move create verification", function () {
  const e = waitForAnyMoveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMove(k, ANY), function () {
    verifyMoveExists(k);
  });
});

bthread("Move update verification", function () {
  const e = waitForAnyMoveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMove(k, ANY), function () {
    verifyMoveUpdated(k);
  });
});

bthread("Move delete verification", function () {
  const e = waitForAnyMoveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMove(k, ANY), function () {
    verifyMoveDoesNotExist(k);
  });
});

bthread("Network create verification", function () {
  const e = waitForAnyNetworkAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNetwork(k, ANY), function () {
    verifyNetworkExists(k);
  });
});

bthread("Network update verification", function () {
  const e = waitForAnyNetworkUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNetwork(k, ANY), function () {
    verifyNetworkUpdated(k);
  });
});

bthread("Network delete verification", function () {
  const e = waitForAnyNetworkDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNetwork(k, ANY), function () {
    verifyNetworkDoesNotExist(k);
  });
});

bthread("Networkconfiguration create verification", function () {
  const e = waitForAnyNetworkconfigurationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNetworkconfiguration(k, ANY), function () {
    verifyNetworkconfigurationExists(k);
  });
});

bthread("Networkconfiguration update verification", function () {
  const e = waitForAnyNetworkconfigurationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNetworkconfiguration(k, ANY), function () {
    verifyNetworkconfigurationUpdated(k);
  });
});

bthread("Networkconfiguration delete verification", function () {
  const e = waitForAnyNetworkconfigurationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNetworkconfiguration(k, ANY), function () {
    verifyNetworkconfigurationDoesNotExist(k);
  });
});

bthread("Networksetting create verification", function () {
  const e = waitForAnyNetworksettingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNetworksetting(k, ANY), function () {
    verifyNetworksettingExists(k);
  });
});

bthread("Networksetting update verification", function () {
  const e = waitForAnyNetworksettingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNetworksetting(k, ANY), function () {
    verifyNetworksettingUpdated(k);
  });
});

bthread("Networksetting delete verification", function () {
  const e = waitForAnyNetworksettingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNetworksetting(k, ANY), function () {
    verifyNetworksettingDoesNotExist(k);
  });
});

bthread("New create verification", function () {
  const e = waitForAnyNewAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNew(k, ANY), function () {
    verifyNewExists(k);
  });
});

bthread("New update verification", function () {
  const e = waitForAnyNewUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNew(k, ANY), function () {
    verifyNewUpdated(k);
  });
});

bthread("New delete verification", function () {
  const e = waitForAnyNewDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNew(k, ANY), function () {
    verifyNewDoesNotExist(k);
  });
});

bthread("Notification create verification", function () {
  const e = waitForAnyNotificationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotification(k, ANY), function () {
    verifyNotificationExists(k);
  });
});

bthread("Notification update verification", function () {
  const e = waitForAnyNotificationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNotification(k, ANY), function () {
    verifyNotificationUpdated(k);
  });
});

bthread("Notification delete verification", function () {
  const e = waitForAnyNotificationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNotification(k, ANY), function () {
    verifyNotificationDoesNotExist(k);
  });
});

bthread("Octocat create verification", function () {
  const e = waitForAnyOctocatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOctocat(k, ANY), function () {
    verifyOctocatExists(k);
  });
});

bthread("Octocat update verification", function () {
  const e = waitForAnyOctocatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOctocat(k, ANY), function () {
    verifyOctocatUpdated(k);
  });
});

bthread("Octocat delete verification", function () {
  const e = waitForAnyOctocatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOctocat(k, ANY), function () {
    verifyOctocatDoesNotExist(k);
  });
});

bthread("Oidc create verification", function () {
  const e = waitForAnyOidcAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOidc(k, ANY), function () {
    verifyOidcExists(k);
  });
});

bthread("Oidc update verification", function () {
  const e = waitForAnyOidcUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOidc(k, ANY), function () {
    verifyOidcUpdated(k);
  });
});

bthread("Oidc delete verification", function () {
  const e = waitForAnyOidcDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOidc(k, ANY), function () {
    verifyOidcDoesNotExist(k);
  });
});

bthread("Org create verification", function () {
  const e = waitForAnyOrgAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrg(k, ANY), function () {
    verifyOrgExists(k);
  });
});

bthread("Org update verification", function () {
  const e = waitForAnyOrgUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrg(k, ANY), function () {
    verifyOrgUpdated(k);
  });
});

bthread("Org delete verification", function () {
  const e = waitForAnyOrgDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrg(k, ANY), function () {
    verifyOrgDoesNotExist(k);
  });
});

bthread("Organization create verification", function () {
  const e = waitForAnyOrganizationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganization(k, ANY), function () {
    verifyOrganizationExists(k);
  });
});

bthread("Organization update verification", function () {
  const e = waitForAnyOrganizationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganization(k, ANY), function () {
    verifyOrganizationUpdated(k);
  });
});

bthread("Organization delete verification", function () {
  const e = waitForAnyOrganizationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrganization(k, ANY), function () {
    verifyOrganizationDoesNotExist(k);
  });
});

bthread("Organizationrole create verification", function () {
  const e = waitForAnyOrganizationroleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganizationrole(k, ANY), function () {
    verifyOrganizationroleExists(k);
  });
});

bthread("Organizationrole update verification", function () {
  const e = waitForAnyOrganizationroleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganizationrole(k, ANY), function () {
    verifyOrganizationroleUpdated(k);
  });
});

bthread("Organizationrole delete verification", function () {
  const e = waitForAnyOrganizationroleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrganizationrole(k, ANY), function () {
    verifyOrganizationroleDoesNotExist(k);
  });
});

bthread("Organizationsecret create verification", function () {
  const e = waitForAnyOrganizationsecretAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganizationsecret(k, ANY), function () {
    verifyOrganizationsecretExists(k);
  });
});

bthread("Organizationsecret update verification", function () {
  const e = waitForAnyOrganizationsecretUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganizationsecret(k, ANY), function () {
    verifyOrganizationsecretUpdated(k);
  });
});

bthread("Organizationsecret delete verification", function () {
  const e = waitForAnyOrganizationsecretDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrganizationsecret(k, ANY), function () {
    verifyOrganizationsecretDoesNotExist(k);
  });
});

bthread("Organizationvariable create verification", function () {
  const e = waitForAnyOrganizationvariableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganizationvariable(k, ANY), function () {
    verifyOrganizationvariableExists(k);
  });
});

bthread("Organizationvariable update verification", function () {
  const e = waitForAnyOrganizationvariableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOrganizationvariable(k, ANY), function () {
    verifyOrganizationvariableUpdated(k);
  });
});

bthread("Organizationvariable delete verification", function () {
  const e = waitForAnyOrganizationvariableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOrganizationvariable(k, ANY), function () {
    verifyOrganizationvariableDoesNotExist(k);
  });
});

bthread("Outsidecollaborator create verification", function () {
  const e = waitForAnyOutsidecollaboratorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOutsidecollaborator(k, ANY), function () {
    verifyOutsidecollaboratorExists(k);
  });
});

bthread("Outsidecollaborator update verification", function () {
  const e = waitForAnyOutsidecollaboratorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOutsidecollaborator(k, ANY), function () {
    verifyOutsidecollaboratorUpdated(k);
  });
});

bthread("Outsidecollaborator delete verification", function () {
  const e = waitForAnyOutsidecollaboratorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOutsidecollaborator(k, ANY), function () {
    verifyOutsidecollaboratorDoesNotExist(k);
  });
});

bthread("Package create verification", function () {
  const e = waitForAnyPackageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePackage(k, ANY), function () {
    verifyPackageExists(k);
  });
});

bthread("Package update verification", function () {
  const e = waitForAnyPackageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePackage(k, ANY), function () {
    verifyPackageUpdated(k);
  });
});

bthread("Package delete verification", function () {
  const e = waitForAnyPackageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPackage(k, ANY), function () {
    verifyPackageDoesNotExist(k);
  });
});

bthread("Page create verification", function () {
  const e = waitForAnyPageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePage(k, ANY), function () {
    verifyPageExists(k);
  });
});

bthread("Page update verification", function () {
  const e = waitForAnyPageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePage(k, ANY), function () {
    verifyPageUpdated(k);
  });
});

bthread("Page delete verification", function () {
  const e = waitForAnyPageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPage(k, ANY), function () {
    verifyPageDoesNotExist(k);
  });
});

bthread("Parent create verification", function () {
  const e = waitForAnyParentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParent(k, ANY), function () {
    verifyParentExists(k);
  });
});

bthread("Parent update verification", function () {
  const e = waitForAnyParentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParent(k, ANY), function () {
    verifyParentUpdated(k);
  });
});

bthread("Parent delete verification", function () {
  const e = waitForAnyParentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddParent(k, ANY), function () {
    verifyParentDoesNotExist(k);
  });
});

bthread("Participation create verification", function () {
  const e = waitForAnyParticipationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParticipation(k, ANY), function () {
    verifyParticipationExists(k);
  });
});

bthread("Participation update verification", function () {
  const e = waitForAnyParticipationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteParticipation(k, ANY), function () {
    verifyParticipationUpdated(k);
  });
});

bthread("Participation delete verification", function () {
  const e = waitForAnyParticipationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddParticipation(k, ANY), function () {
    verifyParticipationDoesNotExist(k);
  });
});

bthread("Partner create verification", function () {
  const e = waitForAnyPartnerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePartner(k, ANY), function () {
    verifyPartnerExists(k);
  });
});

bthread("Partner update verification", function () {
  const e = waitForAnyPartnerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePartner(k, ANY), function () {
    verifyPartnerUpdated(k);
  });
});

bthread("Partner delete verification", function () {
  const e = waitForAnyPartnerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPartner(k, ANY), function () {
    verifyPartnerDoesNotExist(k);
  });
});

bthread("Path create verification", function () {
  const e = waitForAnyPathAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePath(k, ANY), function () {
    verifyPathExists(k);
  });
});

bthread("Path update verification", function () {
  const e = waitForAnyPathUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePath(k, ANY), function () {
    verifyPathUpdated(k);
  });
});

bthread("Path delete verification", function () {
  const e = waitForAnyPathDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPath(k, ANY), function () {
    verifyPathDoesNotExist(k);
  });
});

bthread("Patternconfiguration create verification", function () {
  const e = waitForAnyPatternconfigurationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePatternconfiguration(k, ANY), function () {
    verifyPatternconfigurationExists(k);
  });
});

bthread("Patternconfiguration update verification", function () {
  const e = waitForAnyPatternconfigurationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePatternconfiguration(k, ANY), function () {
    verifyPatternconfigurationUpdated(k);
  });
});

bthread("Patternconfiguration delete verification", function () {
  const e = waitForAnyPatternconfigurationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPatternconfiguration(k, ANY), function () {
    verifyPatternconfigurationDoesNotExist(k);
  });
});

bthread("Pendingdeployment create verification", function () {
  const e = waitForAnyPendingdeploymentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePendingdeployment(k, ANY), function () {
    verifyPendingdeploymentExists(k);
  });
});

bthread("Pendingdeployment update verification", function () {
  const e = waitForAnyPendingdeploymentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePendingdeployment(k, ANY), function () {
    verifyPendingdeploymentUpdated(k);
  });
});

bthread("Pendingdeployment delete verification", function () {
  const e = waitForAnyPendingdeploymentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPendingdeployment(k, ANY), function () {
    verifyPendingdeploymentDoesNotExist(k);
  });
});

bthread("Permission create verification", function () {
  const e = waitForAnyPermissionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermission(k, ANY), function () {
    verifyPermissionExists(k);
  });
});

bthread("Permission update verification", function () {
  const e = waitForAnyPermissionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermission(k, ANY), function () {
    verifyPermissionUpdated(k);
  });
});

bthread("Permission delete verification", function () {
  const e = waitForAnyPermissionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPermission(k, ANY), function () {
    verifyPermissionDoesNotExist(k);
  });
});

bthread("Permissionscheck create verification", function () {
  const e = waitForAnyPermissionscheckAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermissionscheck(k, ANY), function () {
    verifyPermissionscheckExists(k);
  });
});

bthread("Permissionscheck update verification", function () {
  const e = waitForAnyPermissionscheckUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePermissionscheck(k, ANY), function () {
    verifyPermissionscheckUpdated(k);
  });
});

bthread("Permissionscheck delete verification", function () {
  const e = waitForAnyPermissionscheckDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPermissionscheck(k, ANY), function () {
    verifyPermissionscheckDoesNotExist(k);
  });
});

bthread("Personalaccesstoken create verification", function () {
  const e = waitForAnyPersonalaccesstokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePersonalaccesstoken(k, ANY), function () {
    verifyPersonalaccesstokenExists(k);
  });
});

bthread("Personalaccesstoken update verification", function () {
  const e = waitForAnyPersonalaccesstokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePersonalaccesstoken(k, ANY), function () {
    verifyPersonalaccesstokenUpdated(k);
  });
});

bthread("Personalaccesstoken delete verification", function () {
  const e = waitForAnyPersonalaccesstokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPersonalaccesstoken(k, ANY), function () {
    verifyPersonalaccesstokenDoesNotExist(k);
  });
});

bthread("Personalaccesstokenrequest create verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePersonalaccesstokenrequest(k, ANY), function () {
    verifyPersonalaccesstokenrequestExists(k);
  });
});

bthread("Personalaccesstokenrequest update verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePersonalaccesstokenrequest(k, ANY), function () {
    verifyPersonalaccesstokenrequestUpdated(k);
  });
});

bthread("Personalaccesstokenrequest delete verification", function () {
  const e = waitForAnyPersonalaccesstokenrequestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPersonalaccesstokenrequest(k, ANY), function () {
    verifyPersonalaccesstokenrequestDoesNotExist(k);
  });
});

bthread("Ping create verification", function () {
  const e = waitForAnyPingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePing(k, ANY), function () {
    verifyPingExists(k);
  });
});

bthread("Ping update verification", function () {
  const e = waitForAnyPingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePing(k, ANY), function () {
    verifyPingUpdated(k);
  });
});

bthread("Ping delete verification", function () {
  const e = waitForAnyPingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPing(k, ANY), function () {
    verifyPingDoesNotExist(k);
  });
});

bthread("Plan create verification", function () {
  const e = waitForAnyPlanAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlan(k, ANY), function () {
    verifyPlanExists(k);
  });
});

bthread("Plan update verification", function () {
  const e = waitForAnyPlanUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlan(k, ANY), function () {
    verifyPlanUpdated(k);
  });
});

bthread("Plan delete verification", function () {
  const e = waitForAnyPlanDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPlan(k, ANY), function () {
    verifyPlanDoesNotExist(k);
  });
});

bthread("Platform create verification", function () {
  const e = waitForAnyPlatformAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlatform(k, ANY), function () {
    verifyPlatformExists(k);
  });
});

bthread("Platform update verification", function () {
  const e = waitForAnyPlatformUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePlatform(k, ANY), function () {
    verifyPlatformUpdated(k);
  });
});

bthread("Platform delete verification", function () {
  const e = waitForAnyPlatformDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPlatform(k, ANY), function () {
    verifyPlatformDoesNotExist(k);
  });
});

bthread("Popular create verification", function () {
  const e = waitForAnyPopularAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePopular(k, ANY), function () {
    verifyPopularExists(k);
  });
});

bthread("Popular update verification", function () {
  const e = waitForAnyPopularUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePopular(k, ANY), function () {
    verifyPopularUpdated(k);
  });
});

bthread("Popular delete verification", function () {
  const e = waitForAnyPopularDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPopular(k, ANY), function () {
    verifyPopularDoesNotExist(k);
  });
});

bthread("Preference create verification", function () {
  const e = waitForAnyPreferenceAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePreference(k, ANY), function () {
    verifyPreferenceExists(k);
  });
});

bthread("Preference update verification", function () {
  const e = waitForAnyPreferenceUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePreference(k, ANY), function () {
    verifyPreferenceUpdated(k);
  });
});

bthread("Preference delete verification", function () {
  const e = waitForAnyPreferenceDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPreference(k, ANY), function () {
    verifyPreferenceDoesNotExist(k);
  });
});

bthread("Premiumrequest create verification", function () {
  const e = waitForAnyPremiumrequestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePremiumrequest(k, ANY), function () {
    verifyPremiumrequestExists(k);
  });
});

bthread("Premiumrequest update verification", function () {
  const e = waitForAnyPremiumrequestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePremiumrequest(k, ANY), function () {
    verifyPremiumrequestUpdated(k);
  });
});

bthread("Premiumrequest delete verification", function () {
  const e = waitForAnyPremiumrequestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPremiumrequest(k, ANY), function () {
    verifyPremiumrequestDoesNotExist(k);
  });
});

bthread("Priority create verification", function () {
  const e = waitForAnyPriorityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePriority(k, ANY), function () {
    verifyPriorityExists(k);
  });
});

bthread("Priority update verification", function () {
  const e = waitForAnyPriorityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePriority(k, ANY), function () {
    verifyPriorityUpdated(k);
  });
});

bthread("Priority delete verification", function () {
  const e = waitForAnyPriorityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPriority(k, ANY), function () {
    verifyPriorityDoesNotExist(k);
  });
});

bthread("Privateregistry create verification", function () {
  const e = waitForAnyPrivateregistryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrivateregistry(k, ANY), function () {
    verifyPrivateregistryExists(k);
  });
});

bthread("Privateregistry update verification", function () {
  const e = waitForAnyPrivateregistryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrivateregistry(k, ANY), function () {
    verifyPrivateregistryUpdated(k);
  });
});

bthread("Privateregistry delete verification", function () {
  const e = waitForAnyPrivateregistryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPrivateregistry(k, ANY), function () {
    verifyPrivateregistryDoesNotExist(k);
  });
});

bthread("Privatevulnerabilityreporting create verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrivatevulnerabilityreporting(k, ANY), function () {
    verifyPrivatevulnerabilityreportingExists(k);
  });
});

bthread("Privatevulnerabilityreporting update verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePrivatevulnerabilityreporting(k, ANY), function () {
    verifyPrivatevulnerabilityreportingUpdated(k);
  });
});

bthread("Privatevulnerabilityreporting delete verification", function () {
  const e = waitForAnyPrivatevulnerabilityreportingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPrivatevulnerabilityreporting(k, ANY), function () {
    verifyPrivatevulnerabilityreportingDoesNotExist(k);
  });
});

bthread("Profile create verification", function () {
  const e = waitForAnyProfileAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProfile(k, ANY), function () {
    verifyProfileExists(k);
  });
});

bthread("Profile update verification", function () {
  const e = waitForAnyProfileUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProfile(k, ANY), function () {
    verifyProfileUpdated(k);
  });
});

bthread("Profile delete verification", function () {
  const e = waitForAnyProfileDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProfile(k, ANY), function () {
    verifyProfileDoesNotExist(k);
  });
});

bthread("Project create verification", function () {
  const e = waitForAnyProjectAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProject(k, ANY), function () {
    verifyProjectExists(k);
  });
});

bthread("Project update verification", function () {
  const e = waitForAnyProjectUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProject(k, ANY), function () {
    verifyProjectUpdated(k);
  });
});

bthread("Project delete verification", function () {
  const e = waitForAnyProjectDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProject(k, ANY), function () {
    verifyProjectDoesNotExist(k);
  });
});

bthread("Projectsv2 create verification", function () {
  const e = waitForAnyProjectsv2Added();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectsv2(k, ANY), function () {
    verifyProjectsv2Exists(k);
  });
});

bthread("Projectsv2 update verification", function () {
  const e = waitForAnyProjectsv2Updated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProjectsv2(k, ANY), function () {
    verifyProjectsv2Updated(k);
  });
});

bthread("Projectsv2 delete verification", function () {
  const e = waitForAnyProjectsv2Deleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProjectsv2(k, ANY), function () {
    verifyProjectsv2DoesNotExist(k);
  });
});

bthread("Property create verification", function () {
  const e = waitForAnyPropertyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProperty(k, ANY), function () {
    verifyPropertyExists(k);
  });
});

bthread("Property update verification", function () {
  const e = waitForAnyPropertyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProperty(k, ANY), function () {
    verifyPropertyUpdated(k);
  });
});

bthread("Property delete verification", function () {
  const e = waitForAnyPropertyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProperty(k, ANY), function () {
    verifyPropertyDoesNotExist(k);
  });
});

bthread("Protection create verification", function () {
  const e = waitForAnyProtectionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProtection(k, ANY), function () {
    verifyProtectionExists(k);
  });
});

bthread("Protection update verification", function () {
  const e = waitForAnyProtectionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteProtection(k, ANY), function () {
    verifyProtectionUpdated(k);
  });
});

bthread("Protection delete verification", function () {
  const e = waitForAnyProtectionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddProtection(k, ANY), function () {
    verifyProtectionDoesNotExist(k);
  });
});

bthread("Public create verification", function () {
  const e = waitForAnyPublicAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublic(k, ANY), function () {
    verifyPublicExists(k);
  });
});

bthread("Public update verification", function () {
  const e = waitForAnyPublicUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublic(k, ANY), function () {
    verifyPublicUpdated(k);
  });
});

bthread("Public delete verification", function () {
  const e = waitForAnyPublicDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPublic(k, ANY), function () {
    verifyPublicDoesNotExist(k);
  });
});

bthread("Publicemail create verification", function () {
  const e = waitForAnyPublicemailAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublicemail(k, ANY), function () {
    verifyPublicemailExists(k);
  });
});

bthread("Publicemail update verification", function () {
  const e = waitForAnyPublicemailUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublicemail(k, ANY), function () {
    verifyPublicemailUpdated(k);
  });
});

bthread("Publicemail delete verification", function () {
  const e = waitForAnyPublicemailDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPublicemail(k, ANY), function () {
    verifyPublicemailDoesNotExist(k);
  });
});

bthread("Publickey create verification", function () {
  const e = waitForAnyPublickeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublickey(k, ANY), function () {
    verifyPublickeyExists(k);
  });
});

bthread("Publickey update verification", function () {
  const e = waitForAnyPublickeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublickey(k, ANY), function () {
    verifyPublickeyUpdated(k);
  });
});

bthread("Publickey delete verification", function () {
  const e = waitForAnyPublickeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPublickey(k, ANY), function () {
    verifyPublickeyDoesNotExist(k);
  });
});

bthread("Publicmember create verification", function () {
  const e = waitForAnyPublicmemberAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublicmember(k, ANY), function () {
    verifyPublicmemberExists(k);
  });
});

bthread("Publicmember update verification", function () {
  const e = waitForAnyPublicmemberUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublicmember(k, ANY), function () {
    verifyPublicmemberUpdated(k);
  });
});

bthread("Publicmember delete verification", function () {
  const e = waitForAnyPublicmemberDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPublicmember(k, ANY), function () {
    verifyPublicmemberDoesNotExist(k);
  });
});

bthread("Publish create verification", function () {
  const e = waitForAnyPublishAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublish(k, ANY), function () {
    verifyPublishExists(k);
  });
});

bthread("Publish update verification", function () {
  const e = waitForAnyPublishUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePublish(k, ANY), function () {
    verifyPublishUpdated(k);
  });
});

bthread("Publish delete verification", function () {
  const e = waitForAnyPublishDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPublish(k, ANY), function () {
    verifyPublishDoesNotExist(k);
  });
});

bthread("Pull create verification", function () {
  const e = waitForAnyPullAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePull(k, ANY), function () {
    verifyPullExists(k);
  });
});

bthread("Pull update verification", function () {
  const e = waitForAnyPullUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePull(k, ANY), function () {
    verifyPullUpdated(k);
  });
});

bthread("Pull delete verification", function () {
  const e = waitForAnyPullDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPull(k, ANY), function () {
    verifyPullDoesNotExist(k);
  });
});

bthread("Punchcard create verification", function () {
  const e = waitForAnyPunchcardAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePunchcard(k, ANY), function () {
    verifyPunchcardExists(k);
  });
});

bthread("Punchcard update verification", function () {
  const e = waitForAnyPunchcardUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePunchcard(k, ANY), function () {
    verifyPunchcardUpdated(k);
  });
});

bthread("Punchcard delete verification", function () {
  const e = waitForAnyPunchcardDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPunchcard(k, ANY), function () {
    verifyPunchcardDoesNotExist(k);
  });
});

bthread("Pushprotectionbypass create verification", function () {
  const e = waitForAnyPushprotectionbypassAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePushprotectionbypass(k, ANY), function () {
    verifyPushprotectionbypassExists(k);
  });
});

bthread("Pushprotectionbypass update verification", function () {
  const e = waitForAnyPushprotectionbypassUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePushprotectionbypass(k, ANY), function () {
    verifyPushprotectionbypassUpdated(k);
  });
});

bthread("Pushprotectionbypass delete verification", function () {
  const e = waitForAnyPushprotectionbypassDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPushprotectionbypass(k, ANY), function () {
    verifyPushprotectionbypassDoesNotExist(k);
  });
});

bthread("Ratelimit create verification", function () {
  const e = waitForAnyRatelimitAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRatelimit(k, ANY), function () {
    verifyRatelimitExists(k);
  });
});

bthread("Ratelimit update verification", function () {
  const e = waitForAnyRatelimitUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRatelimit(k, ANY), function () {
    verifyRatelimitUpdated(k);
  });
});

bthread("Ratelimit delete verification", function () {
  const e = waitForAnyRatelimitDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRatelimit(k, ANY), function () {
    verifyRatelimitDoesNotExist(k);
  });
});

bthread("Raw create verification", function () {
  const e = waitForAnyRawAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRaw(k, ANY), function () {
    verifyRawExists(k);
  });
});

bthread("Raw update verification", function () {
  const e = waitForAnyRawUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRaw(k, ANY), function () {
    verifyRawUpdated(k);
  });
});

bthread("Raw delete verification", function () {
  const e = waitForAnyRawDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRaw(k, ANY), function () {
    verifyRawDoesNotExist(k);
  });
});

bthread("Reaction create verification", function () {
  const e = waitForAnyReactionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReaction(k, ANY), function () {
    verifyReactionExists(k);
  });
});

bthread("Reaction update verification", function () {
  const e = waitForAnyReactionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReaction(k, ANY), function () {
    verifyReactionUpdated(k);
  });
});

bthread("Reaction delete verification", function () {
  const e = waitForAnyReactionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReaction(k, ANY), function () {
    verifyReactionDoesNotExist(k);
  });
});

bthread("Readme create verification", function () {
  const e = waitForAnyReadmeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReadme(k, ANY), function () {
    verifyReadmeExists(k);
  });
});

bthread("Readme update verification", function () {
  const e = waitForAnyReadmeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReadme(k, ANY), function () {
    verifyReadmeUpdated(k);
  });
});

bthread("Readme delete verification", function () {
  const e = waitForAnyReadmeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReadme(k, ANY), function () {
    verifyReadmeDoesNotExist(k);
  });
});

bthread("Receivedevent create verification", function () {
  const e = waitForAnyReceivedeventAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReceivedevent(k, ANY), function () {
    verifyReceivedeventExists(k);
  });
});

bthread("Receivedevent update verification", function () {
  const e = waitForAnyReceivedeventUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReceivedevent(k, ANY), function () {
    verifyReceivedeventUpdated(k);
  });
});

bthread("Receivedevent delete verification", function () {
  const e = waitForAnyReceivedeventDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReceivedevent(k, ANY), function () {
    verifyReceivedeventDoesNotExist(k);
  });
});

bthread("Ref create verification", function () {
  const e = waitForAnyRefAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRef(k, ANY), function () {
    verifyRefExists(k);
  });
});

bthread("Ref update verification", function () {
  const e = waitForAnyRefUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRef(k, ANY), function () {
    verifyRefUpdated(k);
  });
});

bthread("Ref delete verification", function () {
  const e = waitForAnyRefDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRef(k, ANY), function () {
    verifyRefDoesNotExist(k);
  });
});

bthread("Referrer create verification", function () {
  const e = waitForAnyReferrerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReferrer(k, ANY), function () {
    verifyReferrerExists(k);
  });
});

bthread("Referrer update verification", function () {
  const e = waitForAnyReferrerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReferrer(k, ANY), function () {
    verifyReferrerUpdated(k);
  });
});

bthread("Referrer delete verification", function () {
  const e = waitForAnyReferrerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReferrer(k, ANY), function () {
    verifyReferrerDoesNotExist(k);
  });
});

bthread("Registrationtoken create verification", function () {
  const e = waitForAnyRegistrationtokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegistrationtoken(k, ANY), function () {
    verifyRegistrationtokenExists(k);
  });
});

bthread("Registrationtoken update verification", function () {
  const e = waitForAnyRegistrationtokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRegistrationtoken(k, ANY), function () {
    verifyRegistrationtokenUpdated(k);
  });
});

bthread("Registrationtoken delete verification", function () {
  const e = waitForAnyRegistrationtokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRegistrationtoken(k, ANY), function () {
    verifyRegistrationtokenDoesNotExist(k);
  });
});

bthread("Releas create verification", function () {
  const e = waitForAnyReleasAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReleas(k, ANY), function () {
    verifyReleasExists(k);
  });
});

bthread("Releas update verification", function () {
  const e = waitForAnyReleasUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReleas(k, ANY), function () {
    verifyReleasUpdated(k);
  });
});

bthread("Releas delete verification", function () {
  const e = waitForAnyReleasDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReleas(k, ANY), function () {
    verifyReleasDoesNotExist(k);
  });
});

bthread("Remove create verification", function () {
  const e = waitForAnyRemoveAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemove(k, ANY), function () {
    verifyRemoveExists(k);
  });
});

bthread("Remove update verification", function () {
  const e = waitForAnyRemoveUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemove(k, ANY), function () {
    verifyRemoveUpdated(k);
  });
});

bthread("Remove delete verification", function () {
  const e = waitForAnyRemoveDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRemove(k, ANY), function () {
    verifyRemoveDoesNotExist(k);
  });
});

bthread("Removetoken create verification", function () {
  const e = waitForAnyRemovetokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemovetoken(k, ANY), function () {
    verifyRemovetokenExists(k);
  });
});

bthread("Removetoken update verification", function () {
  const e = waitForAnyRemovetokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRemovetoken(k, ANY), function () {
    verifyRemovetokenUpdated(k);
  });
});

bthread("Removetoken delete verification", function () {
  const e = waitForAnyRemovetokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRemovetoken(k, ANY), function () {
    verifyRemovetokenDoesNotExist(k);
  });
});

bthread("Rename create verification", function () {
  const e = waitForAnyRenameAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRename(k, ANY), function () {
    verifyRenameExists(k);
  });
});

bthread("Rename update verification", function () {
  const e = waitForAnyRenameUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRename(k, ANY), function () {
    verifyRenameUpdated(k);
  });
});

bthread("Rename delete verification", function () {
  const e = waitForAnyRenameDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRename(k, ANY), function () {
    verifyRenameDoesNotExist(k);
  });
});

bthread("Reply create verification", function () {
  const e = waitForAnyReplyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReply(k, ANY), function () {
    verifyReplyExists(k);
  });
});

bthread("Reply update verification", function () {
  const e = waitForAnyReplyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReply(k, ANY), function () {
    verifyReplyUpdated(k);
  });
});

bthread("Reply delete verification", function () {
  const e = waitForAnyReplyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReply(k, ANY), function () {
    verifyReplyDoesNotExist(k);
  });
});

bthread("Repo create verification", function () {
  const e = waitForAnyRepoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepo(k, ANY), function () {
    verifyRepoExists(k);
  });
});

bthread("Repo update verification", function () {
  const e = waitForAnyRepoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepo(k, ANY), function () {
    verifyRepoUpdated(k);
  });
});

bthread("Repo delete verification", function () {
  const e = waitForAnyRepoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRepo(k, ANY), function () {
    verifyRepoDoesNotExist(k);
  });
});

bthread("Report create verification", function () {
  const e = waitForAnyReportAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReport(k, ANY), function () {
    verifyReportExists(k);
  });
});

bthread("Report update verification", function () {
  const e = waitForAnyReportUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReport(k, ANY), function () {
    verifyReportUpdated(k);
  });
});

bthread("Report delete verification", function () {
  const e = waitForAnyReportDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReport(k, ANY), function () {
    verifyReportDoesNotExist(k);
  });
});

bthread("Repository create verification", function () {
  const e = waitForAnyRepositoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepository(k, ANY), function () {
    verifyRepositoryExists(k);
  });
});

bthread("Repository update verification", function () {
  const e = waitForAnyRepositoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepository(k, ANY), function () {
    verifyRepositoryUpdated(k);
  });
});

bthread("Repository delete verification", function () {
  const e = waitForAnyRepositoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRepository(k, ANY), function () {
    verifyRepositoryDoesNotExist(k);
  });
});

bthread("Repositoryacces create verification", function () {
  const e = waitForAnyRepositoryaccesAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepositoryacces(k, ANY), function () {
    verifyRepositoryaccesExists(k);
  });
});

bthread("Repositoryacces update verification", function () {
  const e = waitForAnyRepositoryaccesUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepositoryacces(k, ANY), function () {
    verifyRepositoryaccesUpdated(k);
  });
});

bthread("Repositoryacces delete verification", function () {
  const e = waitForAnyRepositoryaccesDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRepositoryacces(k, ANY), function () {
    verifyRepositoryaccesDoesNotExist(k);
  });
});

bthread("Repositoryinvitation create verification", function () {
  const e = waitForAnyRepositoryinvitationAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepositoryinvitation(k, ANY), function () {
    verifyRepositoryinvitationExists(k);
  });
});

bthread("Repositoryinvitation update verification", function () {
  const e = waitForAnyRepositoryinvitationUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRepositoryinvitation(k, ANY), function () {
    verifyRepositoryinvitationUpdated(k);
  });
});

bthread("Repositoryinvitation delete verification", function () {
  const e = waitForAnyRepositoryinvitationDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRepositoryinvitation(k, ANY), function () {
    verifyRepositoryinvitationDoesNotExist(k);
  });
});

bthread("Requestedreviewer create verification", function () {
  const e = waitForAnyRequestedreviewerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequestedreviewer(k, ANY), function () {
    verifyRequestedreviewerExists(k);
  });
});

bthread("Requestedreviewer update verification", function () {
  const e = waitForAnyRequestedreviewerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequestedreviewer(k, ANY), function () {
    verifyRequestedreviewerUpdated(k);
  });
});

bthread("Requestedreviewer delete verification", function () {
  const e = waitForAnyRequestedreviewerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRequestedreviewer(k, ANY), function () {
    verifyRequestedreviewerDoesNotExist(k);
  });
});

bthread("Requiredpullrequestreview create verification", function () {
  const e = waitForAnyRequiredpullrequestreviewAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequiredpullrequestreview(k, ANY), function () {
    verifyRequiredpullrequestreviewExists(k);
  });
});

bthread("Requiredpullrequestreview update verification", function () {
  const e = waitForAnyRequiredpullrequestreviewUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequiredpullrequestreview(k, ANY), function () {
    verifyRequiredpullrequestreviewUpdated(k);
  });
});

bthread("Requiredpullrequestreview delete verification", function () {
  const e = waitForAnyRequiredpullrequestreviewDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRequiredpullrequestreview(k, ANY), function () {
    verifyRequiredpullrequestreviewDoesNotExist(k);
  });
});

bthread("Requiredsignature create verification", function () {
  const e = waitForAnyRequiredsignatureAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequiredsignature(k, ANY), function () {
    verifyRequiredsignatureExists(k);
  });
});

bthread("Requiredsignature update verification", function () {
  const e = waitForAnyRequiredsignatureUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequiredsignature(k, ANY), function () {
    verifyRequiredsignatureUpdated(k);
  });
});

bthread("Requiredsignature delete verification", function () {
  const e = waitForAnyRequiredsignatureDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRequiredsignature(k, ANY), function () {
    verifyRequiredsignatureDoesNotExist(k);
  });
});

bthread("Requiredstatuscheck create verification", function () {
  const e = waitForAnyRequiredstatuscheckAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequiredstatuscheck(k, ANY), function () {
    verifyRequiredstatuscheckExists(k);
  });
});

bthread("Requiredstatuscheck update verification", function () {
  const e = waitForAnyRequiredstatuscheckUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRequiredstatuscheck(k, ANY), function () {
    verifyRequiredstatuscheckUpdated(k);
  });
});

bthread("Requiredstatuscheck delete verification", function () {
  const e = waitForAnyRequiredstatuscheckDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRequiredstatuscheck(k, ANY), function () {
    verifyRequiredstatuscheckDoesNotExist(k);
  });
});

bthread("Rerequest create verification", function () {
  const e = waitForAnyRerequestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRerequest(k, ANY), function () {
    verifyRerequestExists(k);
  });
});

bthread("Rerequest update verification", function () {
  const e = waitForAnyRerequestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRerequest(k, ANY), function () {
    verifyRerequestUpdated(k);
  });
});

bthread("Rerequest delete verification", function () {
  const e = waitForAnyRerequestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRerequest(k, ANY), function () {
    verifyRerequestDoesNotExist(k);
  });
});

bthread("Rerun create verification", function () {
  const e = waitForAnyRerunAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRerun(k, ANY), function () {
    verifyRerunExists(k);
  });
});

bthread("Rerun update verification", function () {
  const e = waitForAnyRerunUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRerun(k, ANY), function () {
    verifyRerunUpdated(k);
  });
});

bthread("Rerun delete verification", function () {
  const e = waitForAnyRerunDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRerun(k, ANY), function () {
    verifyRerunDoesNotExist(k);
  });
});

bthread("Rerunfailedjob create verification", function () {
  const e = waitForAnyRerunfailedjobAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRerunfailedjob(k, ANY), function () {
    verifyRerunfailedjobExists(k);
  });
});

bthread("Rerunfailedjob update verification", function () {
  const e = waitForAnyRerunfailedjobUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRerunfailedjob(k, ANY), function () {
    verifyRerunfailedjobUpdated(k);
  });
});

bthread("Rerunfailedjob delete verification", function () {
  const e = waitForAnyRerunfailedjobDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRerunfailedjob(k, ANY), function () {
    verifyRerunfailedjobDoesNotExist(k);
  });
});

bthread("Restore create verification", function () {
  const e = waitForAnyRestoreAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRestore(k, ANY), function () {
    verifyRestoreExists(k);
  });
});

bthread("Restore update verification", function () {
  const e = waitForAnyRestoreUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRestore(k, ANY), function () {
    verifyRestoreUpdated(k);
  });
});

bthread("Restore delete verification", function () {
  const e = waitForAnyRestoreDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRestore(k, ANY), function () {
    verifyRestoreDoesNotExist(k);
  });
});

bthread("Restriction create verification", function () {
  const e = waitForAnyRestrictionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRestriction(k, ANY), function () {
    verifyRestrictionExists(k);
  });
});

bthread("Restriction update verification", function () {
  const e = waitForAnyRestrictionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRestriction(k, ANY), function () {
    verifyRestrictionUpdated(k);
  });
});

bthread("Restriction delete verification", function () {
  const e = waitForAnyRestrictionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRestriction(k, ANY), function () {
    verifyRestrictionDoesNotExist(k);
  });
});

bthread("Review create verification", function () {
  const e = waitForAnyReviewAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReview(k, ANY), function () {
    verifyReviewExists(k);
  });
});

bthread("Review update verification", function () {
  const e = waitForAnyReviewUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReview(k, ANY), function () {
    verifyReviewUpdated(k);
  });
});

bthread("Review delete verification", function () {
  const e = waitForAnyReviewDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReview(k, ANY), function () {
    verifyReviewDoesNotExist(k);
  });
});

bthread("Revoke create verification", function () {
  const e = waitForAnyRevokeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRevoke(k, ANY), function () {
    verifyRevokeExists(k);
  });
});

bthread("Revoke update verification", function () {
  const e = waitForAnyRevokeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRevoke(k, ANY), function () {
    verifyRevokeUpdated(k);
  });
});

bthread("Revoke delete verification", function () {
  const e = waitForAnyRevokeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRevoke(k, ANY), function () {
    verifyRevokeDoesNotExist(k);
  });
});

bthread("Routestat create verification", function () {
  const e = waitForAnyRoutestatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRoutestat(k, ANY), function () {
    verifyRoutestatExists(k);
  });
});

bthread("Routestat update verification", function () {
  const e = waitForAnyRoutestatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRoutestat(k, ANY), function () {
    verifyRoutestatUpdated(k);
  });
});

bthread("Routestat delete verification", function () {
  const e = waitForAnyRoutestatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRoutestat(k, ANY), function () {
    verifyRoutestatDoesNotExist(k);
  });
});

bthread("Rule create verification", function () {
  const e = waitForAnyRuleAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRule(k, ANY), function () {
    verifyRuleExists(k);
  });
});

bthread("Rule update verification", function () {
  const e = waitForAnyRuleUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRule(k, ANY), function () {
    verifyRuleUpdated(k);
  });
});

bthread("Rule delete verification", function () {
  const e = waitForAnyRuleDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRule(k, ANY), function () {
    verifyRuleDoesNotExist(k);
  });
});

bthread("Ruleset create verification", function () {
  const e = waitForAnyRulesetAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRuleset(k, ANY), function () {
    verifyRulesetExists(k);
  });
});

bthread("Ruleset update verification", function () {
  const e = waitForAnyRulesetUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRuleset(k, ANY), function () {
    verifyRulesetUpdated(k);
  });
});

bthread("Ruleset delete verification", function () {
  const e = waitForAnyRulesetDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRuleset(k, ANY), function () {
    verifyRulesetDoesNotExist(k);
  });
});

bthread("Rulesuite create verification", function () {
  const e = waitForAnyRulesuiteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRulesuite(k, ANY), function () {
    verifyRulesuiteExists(k);
  });
});

bthread("Rulesuite update verification", function () {
  const e = waitForAnyRulesuiteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRulesuite(k, ANY), function () {
    verifyRulesuiteUpdated(k);
  });
});

bthread("Rulesuite delete verification", function () {
  const e = waitForAnyRulesuiteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRulesuite(k, ANY), function () {
    verifyRulesuiteDoesNotExist(k);
  });
});

bthread("Run create verification", function () {
  const e = waitForAnyRunAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRun(k, ANY), function () {
    verifyRunExists(k);
  });
});

bthread("Run update verification", function () {
  const e = waitForAnyRunUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRun(k, ANY), function () {
    verifyRunUpdated(k);
  });
});

bthread("Run delete verification", function () {
  const e = waitForAnyRunDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRun(k, ANY), function () {
    verifyRunDoesNotExist(k);
  });
});

bthread("Runner create verification", function () {
  const e = waitForAnyRunnerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRunner(k, ANY), function () {
    verifyRunnerExists(k);
  });
});

bthread("Runner update verification", function () {
  const e = waitForAnyRunnerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRunner(k, ANY), function () {
    verifyRunnerUpdated(k);
  });
});

bthread("Runner delete verification", function () {
  const e = waitForAnyRunnerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRunner(k, ANY), function () {
    verifyRunnerDoesNotExist(k);
  });
});

bthread("Runnergroup create verification", function () {
  const e = waitForAnyRunnergroupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRunnergroup(k, ANY), function () {
    verifyRunnergroupExists(k);
  });
});

bthread("Runnergroup update verification", function () {
  const e = waitForAnyRunnergroupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRunnergroup(k, ANY), function () {
    verifyRunnergroupUpdated(k);
  });
});

bthread("Runnergroup delete verification", function () {
  const e = waitForAnyRunnergroupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRunnergroup(k, ANY), function () {
    verifyRunnergroupDoesNotExist(k);
  });
});

bthread("Sarif create verification", function () {
  const e = waitForAnySarifAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSarif(k, ANY), function () {
    verifySarifExists(k);
  });
});

bthread("Sarif update verification", function () {
  const e = waitForAnySarifUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSarif(k, ANY), function () {
    verifySarifUpdated(k);
  });
});

bthread("Sarif delete verification", function () {
  const e = waitForAnySarifDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSarif(k, ANY), function () {
    verifySarifDoesNotExist(k);
  });
});

bthread("Sbom create verification", function () {
  const e = waitForAnySbomAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSbom(k, ANY), function () {
    verifySbomExists(k);
  });
});

bthread("Sbom update verification", function () {
  const e = waitForAnySbomUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSbom(k, ANY), function () {
    verifySbomUpdated(k);
  });
});

bthread("Sbom delete verification", function () {
  const e = waitForAnySbomDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSbom(k, ANY), function () {
    verifySbomDoesNotExist(k);
  });
});

bthread("Scanhistory create verification", function () {
  const e = waitForAnyScanhistoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScanhistory(k, ANY), function () {
    verifyScanhistoryExists(k);
  });
});

bthread("Scanhistory update verification", function () {
  const e = waitForAnyScanhistoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScanhistory(k, ANY), function () {
    verifyScanhistoryUpdated(k);
  });
});

bthread("Scanhistory delete verification", function () {
  const e = waitForAnyScanhistoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddScanhistory(k, ANY), function () {
    verifyScanhistoryDoesNotExist(k);
  });
});

bthread("Schema create verification", function () {
  const e = waitForAnySchemaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSchema(k, ANY), function () {
    verifySchemaExists(k);
  });
});

bthread("Schema update verification", function () {
  const e = waitForAnySchemaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSchema(k, ANY), function () {
    verifySchemaUpdated(k);
  });
});

bthread("Schema delete verification", function () {
  const e = waitForAnySchemaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSchema(k, ANY), function () {
    verifySchemaDoesNotExist(k);
  });
});

bthread("Scoped create verification", function () {
  const e = waitForAnyScopedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScoped(k, ANY), function () {
    verifyScopedExists(k);
  });
});

bthread("Scoped update verification", function () {
  const e = waitForAnyScopedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteScoped(k, ANY), function () {
    verifyScopedUpdated(k);
  });
});

bthread("Scoped delete verification", function () {
  const e = waitForAnyScopedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddScoped(k, ANY), function () {
    verifyScopedDoesNotExist(k);
  });
});

bthread("Search create verification", function () {
  const e = waitForAnySearchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSearch(k, ANY), function () {
    verifySearchExists(k);
  });
});

bthread("Search update verification", function () {
  const e = waitForAnySearchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSearch(k, ANY), function () {
    verifySearchUpdated(k);
  });
});

bthread("Search delete verification", function () {
  const e = waitForAnySearchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSearch(k, ANY), function () {
    verifySearchDoesNotExist(k);
  });
});

bthread("Seat create verification", function () {
  const e = waitForAnySeatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSeat(k, ANY), function () {
    verifySeatExists(k);
  });
});

bthread("Seat update verification", function () {
  const e = waitForAnySeatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSeat(k, ANY), function () {
    verifySeatUpdated(k);
  });
});

bthread("Seat delete verification", function () {
  const e = waitForAnySeatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSeat(k, ANY), function () {
    verifySeatDoesNotExist(k);
  });
});

bthread("Secret create verification", function () {
  const e = waitForAnySecretAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecret(k, ANY), function () {
    verifySecretExists(k);
  });
});

bthread("Secret update verification", function () {
  const e = waitForAnySecretUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecret(k, ANY), function () {
    verifySecretUpdated(k);
  });
});

bthread("Secret delete verification", function () {
  const e = waitForAnySecretDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSecret(k, ANY), function () {
    verifySecretDoesNotExist(k);
  });
});

bthread("Secretscanning create verification", function () {
  const e = waitForAnySecretscanningAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecretscanning(k, ANY), function () {
    verifySecretscanningExists(k);
  });
});

bthread("Secretscanning update verification", function () {
  const e = waitForAnySecretscanningUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecretscanning(k, ANY), function () {
    verifySecretscanningUpdated(k);
  });
});

bthread("Secretscanning delete verification", function () {
  const e = waitForAnySecretscanningDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSecretscanning(k, ANY), function () {
    verifySecretscanningDoesNotExist(k);
  });
});

bthread("Securityadvisory create verification", function () {
  const e = waitForAnySecurityadvisoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecurityadvisory(k, ANY), function () {
    verifySecurityadvisoryExists(k);
  });
});

bthread("Securityadvisory update verification", function () {
  const e = waitForAnySecurityadvisoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecurityadvisory(k, ANY), function () {
    verifySecurityadvisoryUpdated(k);
  });
});

bthread("Securityadvisory delete verification", function () {
  const e = waitForAnySecurityadvisoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSecurityadvisory(k, ANY), function () {
    verifySecurityadvisoryDoesNotExist(k);
  });
});

bthread("Securitymanager create verification", function () {
  const e = waitForAnySecuritymanagerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecuritymanager(k, ANY), function () {
    verifySecuritymanagerExists(k);
  });
});

bthread("Securitymanager update verification", function () {
  const e = waitForAnySecuritymanagerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSecuritymanager(k, ANY), function () {
    verifySecuritymanagerUpdated(k);
  });
});

bthread("Securitymanager delete verification", function () {
  const e = waitForAnySecuritymanagerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSecuritymanager(k, ANY), function () {
    verifySecuritymanagerDoesNotExist(k);
  });
});

bthread("Selectedaction create verification", function () {
  const e = waitForAnySelectedactionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelectedaction(k, ANY), function () {
    verifySelectedactionExists(k);
  });
});

bthread("Selectedaction update verification", function () {
  const e = waitForAnySelectedactionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelectedaction(k, ANY), function () {
    verifySelectedactionUpdated(k);
  });
});

bthread("Selectedaction delete verification", function () {
  const e = waitForAnySelectedactionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSelectedaction(k, ANY), function () {
    verifySelectedactionDoesNotExist(k);
  });
});

bthread("Selectedteam create verification", function () {
  const e = waitForAnySelectedteamAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelectedteam(k, ANY), function () {
    verifySelectedteamExists(k);
  });
});

bthread("Selectedteam update verification", function () {
  const e = waitForAnySelectedteamUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelectedteam(k, ANY), function () {
    verifySelectedteamUpdated(k);
  });
});

bthread("Selectedteam delete verification", function () {
  const e = waitForAnySelectedteamDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSelectedteam(k, ANY), function () {
    verifySelectedteamDoesNotExist(k);
  });
});

bthread("Selecteduser create verification", function () {
  const e = waitForAnySelecteduserAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelecteduser(k, ANY), function () {
    verifySelecteduserExists(k);
  });
});

bthread("Selecteduser update verification", function () {
  const e = waitForAnySelecteduserUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelecteduser(k, ANY), function () {
    verifySelecteduserUpdated(k);
  });
});

bthread("Selecteduser delete verification", function () {
  const e = waitForAnySelecteduserDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSelecteduser(k, ANY), function () {
    verifySelecteduserDoesNotExist(k);
  });
});

bthread("Selfhostedrunner create verification", function () {
  const e = waitForAnySelfhostedrunnerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelfhostedrunner(k, ANY), function () {
    verifySelfhostedrunnerExists(k);
  });
});

bthread("Selfhostedrunner update verification", function () {
  const e = waitForAnySelfhostedrunnerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSelfhostedrunner(k, ANY), function () {
    verifySelfhostedrunnerUpdated(k);
  });
});

bthread("Selfhostedrunner delete verification", function () {
  const e = waitForAnySelfhostedrunnerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSelfhostedrunner(k, ANY), function () {
    verifySelfhostedrunnerDoesNotExist(k);
  });
});

bthread("Setting create verification", function () {
  const e = waitForAnySettingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSetting(k, ANY), function () {
    verifySettingExists(k);
  });
});

bthread("Setting update verification", function () {
  const e = waitForAnySettingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSetting(k, ANY), function () {
    verifySettingUpdated(k);
  });
});

bthread("Setting delete verification", function () {
  const e = waitForAnySettingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSetting(k, ANY), function () {
    verifySettingDoesNotExist(k);
  });
});

bthread("Sharedstorage create verification", function () {
  const e = waitForAnySharedstorageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSharedstorage(k, ANY), function () {
    verifySharedstorageExists(k);
  });
});

bthread("Sharedstorage update verification", function () {
  const e = waitForAnySharedstorageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSharedstorage(k, ANY), function () {
    verifySharedstorageUpdated(k);
  });
});

bthread("Sharedstorage delete verification", function () {
  const e = waitForAnySharedstorageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSharedstorage(k, ANY), function () {
    verifySharedstorageDoesNotExist(k);
  });
});

bthread("Snapshot create verification", function () {
  const e = waitForAnySnapshotAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSnapshot(k, ANY), function () {
    verifySnapshotExists(k);
  });
});

bthread("Snapshot update verification", function () {
  const e = waitForAnySnapshotUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSnapshot(k, ANY), function () {
    verifySnapshotUpdated(k);
  });
});

bthread("Snapshot delete verification", function () {
  const e = waitForAnySnapshotDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSnapshot(k, ANY), function () {
    verifySnapshotDoesNotExist(k);
  });
});

bthread("Socialaccount create verification", function () {
  const e = waitForAnySocialaccountAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSocialaccount(k, ANY), function () {
    verifySocialaccountExists(k);
  });
});

bthread("Socialaccount update verification", function () {
  const e = waitForAnySocialaccountUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSocialaccount(k, ANY), function () {
    verifySocialaccountUpdated(k);
  });
});

bthread("Socialaccount delete verification", function () {
  const e = waitForAnySocialaccountDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSocialaccount(k, ANY), function () {
    verifySocialaccountDoesNotExist(k);
  });
});

bthread("Sshsigningkey create verification", function () {
  const e = waitForAnySshsigningkeyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSshsigningkey(k, ANY), function () {
    verifySshsigningkeyExists(k);
  });
});

bthread("Sshsigningkey update verification", function () {
  const e = waitForAnySshsigningkeyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSshsigningkey(k, ANY), function () {
    verifySshsigningkeyUpdated(k);
  });
});

bthread("Sshsigningkey delete verification", function () {
  const e = waitForAnySshsigningkeyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSshsigningkey(k, ANY), function () {
    verifySshsigningkeyDoesNotExist(k);
  });
});

bthread("Star create verification", function () {
  const e = waitForAnyStarAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStar(k, ANY), function () {
    verifyStarExists(k);
  });
});

bthread("Star update verification", function () {
  const e = waitForAnyStarUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStar(k, ANY), function () {
    verifyStarUpdated(k);
  });
});

bthread("Star delete verification", function () {
  const e = waitForAnyStarDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStar(k, ANY), function () {
    verifyStarDoesNotExist(k);
  });
});

bthread("Stargazer create verification", function () {
  const e = waitForAnyStargazerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStargazer(k, ANY), function () {
    verifyStargazerExists(k);
  });
});

bthread("Stargazer update verification", function () {
  const e = waitForAnyStargazerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStargazer(k, ANY), function () {
    verifyStargazerUpdated(k);
  });
});

bthread("Stargazer delete verification", function () {
  const e = waitForAnyStargazerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStargazer(k, ANY), function () {
    verifyStargazerDoesNotExist(k);
  });
});

bthread("Starred create verification", function () {
  const e = waitForAnyStarredAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStarred(k, ANY), function () {
    verifyStarredExists(k);
  });
});

bthread("Starred update verification", function () {
  const e = waitForAnyStarredUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStarred(k, ANY), function () {
    verifyStarredUpdated(k);
  });
});

bthread("Starred delete verification", function () {
  const e = waitForAnyStarredDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStarred(k, ANY), function () {
    verifyStarredDoesNotExist(k);
  });
});

bthread("Start create verification", function () {
  const e = waitForAnyStartAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStart(k, ANY), function () {
    verifyStartExists(k);
  });
});

bthread("Start update verification", function () {
  const e = waitForAnyStartUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStart(k, ANY), function () {
    verifyStartUpdated(k);
  });
});

bthread("Start delete verification", function () {
  const e = waitForAnyStartDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStart(k, ANY), function () {
    verifyStartDoesNotExist(k);
  });
});

bthread("Stat create verification", function () {
  const e = waitForAnyStatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStat(k, ANY), function () {
    verifyStatExists(k);
  });
});

bthread("Stat update verification", function () {
  const e = waitForAnyStatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStat(k, ANY), function () {
    verifyStatUpdated(k);
  });
});

bthread("Stat delete verification", function () {
  const e = waitForAnyStatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStat(k, ANY), function () {
    verifyStatDoesNotExist(k);
  });
});

bthread("Statu create verification", function () {
  const e = waitForAnyStatuAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatu(k, ANY), function () {
    verifyStatuExists(k);
  });
});

bthread("Statu update verification", function () {
  const e = waitForAnyStatuUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatu(k, ANY), function () {
    verifyStatuUpdated(k);
  });
});

bthread("Statu delete verification", function () {
  const e = waitForAnyStatuDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStatu(k, ANY), function () {
    verifyStatuDoesNotExist(k);
  });
});

bthread("Status create verification", function () {
  const e = waitForAnyStatusAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatus(k, ANY), function () {
    verifyStatusExists(k);
  });
});

bthread("Status update verification", function () {
  const e = waitForAnyStatusUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStatus(k, ANY), function () {
    verifyStatusUpdated(k);
  });
});

bthread("Status delete verification", function () {
  const e = waitForAnyStatusDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStatus(k, ANY), function () {
    verifyStatusDoesNotExist(k);
  });
});

bthread("Stop create verification", function () {
  const e = waitForAnyStopAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStop(k, ANY), function () {
    verifyStopExists(k);
  });
});

bthread("Stop update verification", function () {
  const e = waitForAnyStopUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStop(k, ANY), function () {
    verifyStopUpdated(k);
  });
});

bthread("Stop delete verification", function () {
  const e = waitForAnyStopDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStop(k, ANY), function () {
    verifyStopDoesNotExist(k);
  });
});

bthread("Storagerecord create verification", function () {
  const e = waitForAnyStoragerecordAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStoragerecord(k, ANY), function () {
    verifyStoragerecordExists(k);
  });
});

bthread("Storagerecord update verification", function () {
  const e = waitForAnyStoragerecordUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStoragerecord(k, ANY), function () {
    verifyStoragerecordUpdated(k);
  });
});

bthread("Storagerecord delete verification", function () {
  const e = waitForAnyStoragerecordDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStoragerecord(k, ANY), function () {
    verifyStoragerecordDoesNotExist(k);
  });
});

bthread("Stubbed create verification", function () {
  const e = waitForAnyStubbedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStubbed(k, ANY), function () {
    verifyStubbedExists(k);
  });
});

bthread("Stubbed update verification", function () {
  const e = waitForAnyStubbedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStubbed(k, ANY), function () {
    verifyStubbedUpdated(k);
  });
});

bthread("Stubbed delete verification", function () {
  const e = waitForAnyStubbedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStubbed(k, ANY), function () {
    verifyStubbedDoesNotExist(k);
  });
});

bthread("Sub create verification", function () {
  const e = waitForAnySubAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSub(k, ANY), function () {
    verifySubExists(k);
  });
});

bthread("Sub update verification", function () {
  const e = waitForAnySubUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSub(k, ANY), function () {
    verifySubUpdated(k);
  });
});

bthread("Sub delete verification", function () {
  const e = waitForAnySubDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSub(k, ANY), function () {
    verifySubDoesNotExist(k);
  });
});

bthread("Subissue create verification", function () {
  const e = waitForAnySubissueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubissue(k, ANY), function () {
    verifySubissueExists(k);
  });
});

bthread("Subissue update verification", function () {
  const e = waitForAnySubissueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubissue(k, ANY), function () {
    verifySubissueUpdated(k);
  });
});

bthread("Subissue delete verification", function () {
  const e = waitForAnySubissueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubissue(k, ANY), function () {
    verifySubissueDoesNotExist(k);
  });
});

bthread("Subjectstat create verification", function () {
  const e = waitForAnySubjectstatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubjectstat(k, ANY), function () {
    verifySubjectstatExists(k);
  });
});

bthread("Subjectstat update verification", function () {
  const e = waitForAnySubjectstatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubjectstat(k, ANY), function () {
    verifySubjectstatUpdated(k);
  });
});

bthread("Subjectstat delete verification", function () {
  const e = waitForAnySubjectstatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubjectstat(k, ANY), function () {
    verifySubjectstatDoesNotExist(k);
  });
});

bthread("Subscriber create verification", function () {
  const e = waitForAnySubscriberAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscriber(k, ANY), function () {
    verifySubscriberExists(k);
  });
});

bthread("Subscriber update verification", function () {
  const e = waitForAnySubscriberUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscriber(k, ANY), function () {
    verifySubscriberUpdated(k);
  });
});

bthread("Subscriber delete verification", function () {
  const e = waitForAnySubscriberDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubscriber(k, ANY), function () {
    verifySubscriberDoesNotExist(k);
  });
});

bthread("Subscription create verification", function () {
  const e = waitForAnySubscriptionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscription(k, ANY), function () {
    verifySubscriptionExists(k);
  });
});

bthread("Subscription update verification", function () {
  const e = waitForAnySubscriptionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSubscription(k, ANY), function () {
    verifySubscriptionUpdated(k);
  });
});

bthread("Subscription delete verification", function () {
  const e = waitForAnySubscriptionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSubscription(k, ANY), function () {
    verifySubscriptionDoesNotExist(k);
  });
});

bthread("Summarystat create verification", function () {
  const e = waitForAnySummarystatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSummarystat(k, ANY), function () {
    verifySummarystatExists(k);
  });
});

bthread("Summarystat update verification", function () {
  const e = waitForAnySummarystatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSummarystat(k, ANY), function () {
    verifySummarystatUpdated(k);
  });
});

bthread("Summarystat delete verification", function () {
  const e = waitForAnySummarystatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSummarystat(k, ANY), function () {
    verifySummarystatDoesNotExist(k);
  });
});

bthread("Suspended create verification", function () {
  const e = waitForAnySuspendedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSuspended(k, ANY), function () {
    verifySuspendedExists(k);
  });
});

bthread("Suspended update verification", function () {
  const e = waitForAnySuspendedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSuspended(k, ANY), function () {
    verifySuspendedUpdated(k);
  });
});

bthread("Suspended delete verification", function () {
  const e = waitForAnySuspendedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSuspended(k, ANY), function () {
    verifySuspendedDoesNotExist(k);
  });
});

bthread("Tag create verification", function () {
  const e = waitForAnyTagAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTag(k, ANY), function () {
    verifyTagExists(k);
  });
});

bthread("Tag update verification", function () {
  const e = waitForAnyTagUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTag(k, ANY), function () {
    verifyTagUpdated(k);
  });
});

bthread("Tag delete verification", function () {
  const e = waitForAnyTagDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTag(k, ANY), function () {
    verifyTagDoesNotExist(k);
  });
});

bthread("Tarball create verification", function () {
  const e = waitForAnyTarballAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTarball(k, ANY), function () {
    verifyTarballExists(k);
  });
});

bthread("Tarball update verification", function () {
  const e = waitForAnyTarballUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTarball(k, ANY), function () {
    verifyTarballUpdated(k);
  });
});

bthread("Tarball delete verification", function () {
  const e = waitForAnyTarballDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTarball(k, ANY), function () {
    verifyTarballDoesNotExist(k);
  });
});

bthread("Team create verification", function () {
  const e = waitForAnyTeamAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTeam(k, ANY), function () {
    verifyTeamExists(k);
  });
});

bthread("Team update verification", function () {
  const e = waitForAnyTeamUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTeam(k, ANY), function () {
    verifyTeamUpdated(k);
  });
});

bthread("Team delete verification", function () {
  const e = waitForAnyTeamDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTeam(k, ANY), function () {
    verifyTeamDoesNotExist(k);
  });
});

bthread("Template create verification", function () {
  const e = waitForAnyTemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTemplate(k, ANY), function () {
    verifyTemplateExists(k);
  });
});

bthread("Template update verification", function () {
  const e = waitForAnyTemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTemplate(k, ANY), function () {
    verifyTemplateUpdated(k);
  });
});

bthread("Template delete verification", function () {
  const e = waitForAnyTemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTemplate(k, ANY), function () {
    verifyTemplateDoesNotExist(k);
  });
});

bthread("Test create verification", function () {
  const e = waitForAnyTestAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTest(k, ANY), function () {
    verifyTestExists(k);
  });
});

bthread("Test update verification", function () {
  const e = waitForAnyTestUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTest(k, ANY), function () {
    verifyTestUpdated(k);
  });
});

bthread("Test delete verification", function () {
  const e = waitForAnyTestDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTest(k, ANY), function () {
    verifyTestDoesNotExist(k);
  });
});

bthread("Thread create verification", function () {
  const e = waitForAnyThreadAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteThread(k, ANY), function () {
    verifyThreadExists(k);
  });
});

bthread("Thread update verification", function () {
  const e = waitForAnyThreadUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteThread(k, ANY), function () {
    verifyThreadUpdated(k);
  });
});

bthread("Thread delete verification", function () {
  const e = waitForAnyThreadDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddThread(k, ANY), function () {
    verifyThreadDoesNotExist(k);
  });
});

bthread("Timeline create verification", function () {
  const e = waitForAnyTimelineAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTimeline(k, ANY), function () {
    verifyTimelineExists(k);
  });
});

bthread("Timeline update verification", function () {
  const e = waitForAnyTimelineUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTimeline(k, ANY), function () {
    verifyTimelineUpdated(k);
  });
});

bthread("Timeline delete verification", function () {
  const e = waitForAnyTimelineDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTimeline(k, ANY), function () {
    verifyTimelineDoesNotExist(k);
  });
});

bthread("Timestat create verification", function () {
  const e = waitForAnyTimestatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTimestat(k, ANY), function () {
    verifyTimestatExists(k);
  });
});

bthread("Timestat update verification", function () {
  const e = waitForAnyTimestatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTimestat(k, ANY), function () {
    verifyTimestatUpdated(k);
  });
});

bthread("Timestat delete verification", function () {
  const e = waitForAnyTimestatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTimestat(k, ANY), function () {
    verifyTimestatDoesNotExist(k);
  });
});

bthread("Timing create verification", function () {
  const e = waitForAnyTimingAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTiming(k, ANY), function () {
    verifyTimingExists(k);
  });
});

bthread("Timing update verification", function () {
  const e = waitForAnyTimingUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTiming(k, ANY), function () {
    verifyTimingUpdated(k);
  });
});

bthread("Timing delete verification", function () {
  const e = waitForAnyTimingDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTiming(k, ANY), function () {
    verifyTimingDoesNotExist(k);
  });
});

bthread("Token create verification", function () {
  const e = waitForAnyTokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteToken(k, ANY), function () {
    verifyTokenExists(k);
  });
});

bthread("Token update verification", function () {
  const e = waitForAnyTokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteToken(k, ANY), function () {
    verifyTokenUpdated(k);
  });
});

bthread("Token delete verification", function () {
  const e = waitForAnyTokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddToken(k, ANY), function () {
    verifyTokenDoesNotExist(k);
  });
});

bthread("Topic create verification", function () {
  const e = waitForAnyTopicAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTopic(k, ANY), function () {
    verifyTopicExists(k);
  });
});

bthread("Topic update verification", function () {
  const e = waitForAnyTopicUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTopic(k, ANY), function () {
    verifyTopicUpdated(k);
  });
});

bthread("Topic delete verification", function () {
  const e = waitForAnyTopicDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTopic(k, ANY), function () {
    verifyTopicDoesNotExist(k);
  });
});

bthread("Traffic create verification", function () {
  const e = waitForAnyTrafficAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTraffic(k, ANY), function () {
    verifyTrafficExists(k);
  });
});

bthread("Traffic update verification", function () {
  const e = waitForAnyTrafficUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTraffic(k, ANY), function () {
    verifyTrafficUpdated(k);
  });
});

bthread("Traffic delete verification", function () {
  const e = waitForAnyTrafficDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTraffic(k, ANY), function () {
    verifyTrafficDoesNotExist(k);
  });
});

bthread("Transfer create verification", function () {
  const e = waitForAnyTransferAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTransfer(k, ANY), function () {
    verifyTransferExists(k);
  });
});

bthread("Transfer update verification", function () {
  const e = waitForAnyTransferUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTransfer(k, ANY), function () {
    verifyTransferUpdated(k);
  });
});

bthread("Transfer delete verification", function () {
  const e = waitForAnyTransferDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTransfer(k, ANY), function () {
    verifyTransferDoesNotExist(k);
  });
});

bthread("Tree create verification", function () {
  const e = waitForAnyTreeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTree(k, ANY), function () {
    verifyTreeExists(k);
  });
});

bthread("Tree update verification", function () {
  const e = waitForAnyTreeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTree(k, ANY), function () {
    verifyTreeUpdated(k);
  });
});

bthread("Tree delete verification", function () {
  const e = waitForAnyTreeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTree(k, ANY), function () {
    verifyTreeDoesNotExist(k);
  });
});

bthread("Updatebranch create verification", function () {
  const e = waitForAnyUpdatebranchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpdatebranch(k, ANY), function () {
    verifyUpdatebranchExists(k);
  });
});

bthread("Updatebranch update verification", function () {
  const e = waitForAnyUpdatebranchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpdatebranch(k, ANY), function () {
    verifyUpdatebranchUpdated(k);
  });
});

bthread("Updatebranch delete verification", function () {
  const e = waitForAnyUpdatebranchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUpdatebranch(k, ANY), function () {
    verifyUpdatebranchDoesNotExist(k);
  });
});

bthread("Usage create verification", function () {
  const e = waitForAnyUsageAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsage(k, ANY), function () {
    verifyUsageExists(k);
  });
});

bthread("Usage update verification", function () {
  const e = waitForAnyUsageUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsage(k, ANY), function () {
    verifyUsageUpdated(k);
  });
});

bthread("Usage delete verification", function () {
  const e = waitForAnyUsageDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsage(k, ANY), function () {
    verifyUsageDoesNotExist(k);
  });
});

bthread("Usagebyrepository create verification", function () {
  const e = waitForAnyUsagebyrepositoryAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsagebyrepository(k, ANY), function () {
    verifyUsagebyrepositoryExists(k);
  });
});

bthread("Usagebyrepository update verification", function () {
  const e = waitForAnyUsagebyrepositoryUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUsagebyrepository(k, ANY), function () {
    verifyUsagebyrepositoryUpdated(k);
  });
});

bthread("Usagebyrepository delete verification", function () {
  const e = waitForAnyUsagebyrepositoryDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUsagebyrepository(k, ANY), function () {
    verifyUsagebyrepositoryDoesNotExist(k);
  });
});

bthread("User create verification", function () {
  const e = waitForAnyUserAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUser(k, ANY), function () {
    verifyUserExists(k);
  });
});

bthread("User update verification", function () {
  const e = waitForAnyUserUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUser(k, ANY), function () {
    verifyUserUpdated(k);
  });
});

bthread("User delete verification", function () {
  const e = waitForAnyUserDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUser(k, ANY), function () {
    verifyUserDoesNotExist(k);
  });
});

bthread("Userstat create verification", function () {
  const e = waitForAnyUserstatAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserstat(k, ANY), function () {
    verifyUserstatExists(k);
  });
});

bthread("Userstat update verification", function () {
  const e = waitForAnyUserstatUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserstat(k, ANY), function () {
    verifyUserstatUpdated(k);
  });
});

bthread("Userstat delete verification", function () {
  const e = waitForAnyUserstatDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUserstat(k, ANY), function () {
    verifyUserstatDoesNotExist(k);
  });
});

bthread("Value create verification", function () {
  const e = waitForAnyValueAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValue(k, ANY), function () {
    verifyValueExists(k);
  });
});

bthread("Value update verification", function () {
  const e = waitForAnyValueUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValue(k, ANY), function () {
    verifyValueUpdated(k);
  });
});

bthread("Value delete verification", function () {
  const e = waitForAnyValueDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddValue(k, ANY), function () {
    verifyValueDoesNotExist(k);
  });
});

bthread("Variable create verification", function () {
  const e = waitForAnyVariableAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVariable(k, ANY), function () {
    verifyVariableExists(k);
  });
});

bthread("Variable update verification", function () {
  const e = waitForAnyVariableUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVariable(k, ANY), function () {
    verifyVariableUpdated(k);
  });
});

bthread("Variable delete verification", function () {
  const e = waitForAnyVariableDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVariable(k, ANY), function () {
    verifyVariableDoesNotExist(k);
  });
});

bthread("Variantanalys create verification", function () {
  const e = waitForAnyVariantanalysAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVariantanalys(k, ANY), function () {
    verifyVariantanalysExists(k);
  });
});

bthread("Variantanalys update verification", function () {
  const e = waitForAnyVariantanalysUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVariantanalys(k, ANY), function () {
    verifyVariantanalysUpdated(k);
  });
});

bthread("Variantanalys delete verification", function () {
  const e = waitForAnyVariantanalysDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVariantanalys(k, ANY), function () {
    verifyVariantanalysDoesNotExist(k);
  });
});

bthread("Version create verification", function () {
  const e = waitForAnyVersionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVersion(k, ANY), function () {
    verifyVersionExists(k);
  });
});

bthread("Version update verification", function () {
  const e = waitForAnyVersionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVersion(k, ANY), function () {
    verifyVersionUpdated(k);
  });
});

bthread("Version delete verification", function () {
  const e = waitForAnyVersionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVersion(k, ANY), function () {
    verifyVersionDoesNotExist(k);
  });
});

bthread("View create verification", function () {
  const e = waitForAnyViewAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteView(k, ANY), function () {
    verifyViewExists(k);
  });
});

bthread("View update verification", function () {
  const e = waitForAnyViewUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteView(k, ANY), function () {
    verifyViewUpdated(k);
  });
});

bthread("View delete verification", function () {
  const e = waitForAnyViewDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddView(k, ANY), function () {
    verifyViewDoesNotExist(k);
  });
});

bthread("Visibility create verification", function () {
  const e = waitForAnyVisibilityAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVisibility(k, ANY), function () {
    verifyVisibilityExists(k);
  });
});

bthread("Visibility update verification", function () {
  const e = waitForAnyVisibilityUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVisibility(k, ANY), function () {
    verifyVisibilityUpdated(k);
  });
});

bthread("Visibility delete verification", function () {
  const e = waitForAnyVisibilityDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVisibility(k, ANY), function () {
    verifyVisibilityDoesNotExist(k);
  });
});

bthread("Vulnerabilityalert create verification", function () {
  const e = waitForAnyVulnerabilityalertAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVulnerabilityalert(k, ANY), function () {
    verifyVulnerabilityalertExists(k);
  });
});

bthread("Vulnerabilityalert update verification", function () {
  const e = waitForAnyVulnerabilityalertUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteVulnerabilityalert(k, ANY), function () {
    verifyVulnerabilityalertUpdated(k);
  });
});

bthread("Vulnerabilityalert delete verification", function () {
  const e = waitForAnyVulnerabilityalertDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddVulnerabilityalert(k, ANY), function () {
    verifyVulnerabilityalertDoesNotExist(k);
  });
});

bthread("Workflow create verification", function () {
  const e = waitForAnyWorkflowAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkflow(k, ANY), function () {
    verifyWorkflowExists(k);
  });
});

bthread("Workflow update verification", function () {
  const e = waitForAnyWorkflowUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWorkflow(k, ANY), function () {
    verifyWorkflowUpdated(k);
  });
});

bthread("Workflow delete verification", function () {
  const e = waitForAnyWorkflowDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWorkflow(k, ANY), function () {
    verifyWorkflowDoesNotExist(k);
  });
});

bthread("Zen create verification", function () {
  const e = waitForAnyZenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteZen(k, ANY), function () {
    verifyZenExists(k);
  });
});

bthread("Zen update verification", function () {
  const e = waitForAnyZenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteZen(k, ANY), function () {
    verifyZenUpdated(k);
  });
});

bthread("Zen delete verification", function () {
  const e = waitForAnyZenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddZen(k, ANY), function () {
    verifyZenDoesNotExist(k);
  });
});

bthread("Zipball create verification", function () {
  const e = waitForAnyZipballAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteZipball(k, ANY), function () {
    verifyZipballExists(k);
  });
});

bthread("Zipball update verification", function () {
  const e = waitForAnyZipballUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteZipball(k, ANY), function () {
    verifyZipballUpdated(k);
  });
});

bthread("Zipball delete verification", function () {
  const e = waitForAnyZipballDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddZipball(k, ANY), function () {
    verifyZipballDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Acceptedassignment", function () {
  const x = waitForAnyAcceptedassignmentAdded();
  block(matchAddAcceptedassignment(x.id, ANY), function () {});
});

bthread("Guard: Unique Acces", function () {
  const x = waitForAnyAccesAdded();
  block(matchAddAcces(x.id, ANY), function () {});
});

bthread("Guard: Unique Accesstoken", function () {
  const x = waitForAnyAccesstokenAdded();
  block(matchAddAccesstoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Account", function () {
  const x = waitForAnyAccountAdded();
  block(matchAddAccount(x.id, ANY), function () {});
});

bthread("Guard: Unique Action", function () {
  const x = waitForAnyActionAdded();
  block(matchAddAction(x.id, ANY), function () {});
});

bthread("Guard: Unique Activity", function () {
  const x = waitForAnyActivityAdded();
  block(matchAddActivity(x.id, ANY), function () {});
});

bthread("Guard: Unique Add", function () {
  const x = waitForAnyAddAdded();
  block(matchAddAdd(x.id, ANY), function () {});
});

bthread("Guard: Unique Advisory", function () {
  const x = waitForAnyAdvisoryAdded();
  block(matchAddAdvisory(x.id, ANY), function () {});
});

bthread("Guard: Unique Alert", function () {
  const x = waitForAnyAlertAdded();
  block(matchAddAlert(x.id, ANY), function () {});
});

bthread("Guard: Unique Analys", function () {
  const x = waitForAnyAnalysAdded();
  block(matchAddAnalys(x.id, ANY), function () {});
});

bthread("Guard: Unique Annotation", function () {
  const x = waitForAnyAnnotationAdded();
  block(matchAddAnnotation(x.id, ANY), function () {});
});

bthread("Guard: Unique Api", function () {
  const x = waitForAnyApiAdded();
  block(matchAddApi(x.id, ANY), function () {});
});

bthread("Guard: Unique App", function () {
  const x = waitForAnyAppAdded();
  block(matchAddApp(x.id, ANY), function () {});
});

bthread("Guard: Unique Application", function () {
  const x = waitForAnyApplicationAdded();
  block(matchAddApplication(x.id, ANY), function () {});
});

bthread("Guard: Unique Appmanifest", function () {
  const x = waitForAnyAppmanifestAdded();
  block(matchAddAppmanifest(x.id, ANY), function () {});
});

bthread("Guard: Unique Approval", function () {
  const x = waitForAnyApprovalAdded();
  block(matchAddApproval(x.id, ANY), function () {});
});

bthread("Guard: Unique Approve", function () {
  const x = waitForAnyApproveAdded();
  block(matchAddApprove(x.id, ANY), function () {});
});

bthread("Guard: Unique Archive", function () {
  const x = waitForAnyArchiveAdded();
  block(matchAddArchive(x.id, ANY), function () {});
});

bthread("Guard: Unique Artifact", function () {
  const x = waitForAnyArtifactAdded();
  block(matchAddArtifact(x.id, ANY), function () {});
});

bthread("Guard: Unique Artifactandlogretention", function () {
  const x = waitForAnyArtifactandlogretentionAdded();
  block(matchAddArtifactandlogretention(x.id, ANY), function () {});
});

bthread("Guard: Unique Asset", function () {
  const x = waitForAnyAssetAdded();
  block(matchAddAsset(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignee", function () {
  const x = waitForAnyAssigneeAdded();
  block(matchAddAssignee(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignment", function () {
  const x = waitForAnyAssignmentAdded();
  block(matchAddAssignment(x.id, ANY), function () {});
});

bthread("Guard: Unique Attach", function () {
  const x = waitForAnyAttachAdded();
  block(matchAddAttach(x.id, ANY), function () {});
});

bthread("Guard: Unique Attempt", function () {
  const x = waitForAnyAttemptAdded();
  block(matchAddAttempt(x.id, ANY), function () {});
});

bthread("Guard: Unique Attestation", function () {
  const x = waitForAnyAttestationAdded();
  block(matchAddAttestation(x.id, ANY), function () {});
});

bthread("Guard: Unique Author", function () {
  const x = waitForAnyAuthorAdded();
  block(matchAddAuthor(x.id, ANY), function () {});
});

bthread("Guard: Unique Autofix", function () {
  const x = waitForAnyAutofixAdded();
  block(matchAddAutofix(x.id, ANY), function () {});
});

bthread("Guard: Unique Autolink", function () {
  const x = waitForAnyAutolinkAdded();
  block(matchAddAutolink(x.id, ANY), function () {});
});

bthread("Guard: Unique Automatedsecurityfixe", function () {
  const x = waitForAnyAutomatedsecurityfixeAdded();
  block(matchAddAutomatedsecurityfixe(x.id, ANY), function () {});
});

bthread("Guard: Unique Billing", function () {
  const x = waitForAnyBillingAdded();
  block(matchAddBilling(x.id, ANY), function () {});
});

bthread("Guard: Unique Blob", function () {
  const x = waitForAnyBlobAdded();
  block(matchAddBlob(x.id, ANY), function () {});
});

bthread("Guard: Unique Block", function () {
  const x = waitForAnyBlockAdded();
  block(matchAddBlock(x.id, ANY), function () {});
});

bthread("Guard: Unique Blockedby", function () {
  const x = waitForAnyBlockedbyAdded();
  block(matchAddBlockedby(x.id, ANY), function () {});
});

bthread("Guard: Unique Blocking", function () {
  const x = waitForAnyBlockingAdded();
  block(matchAddBlocking(x.id, ANY), function () {});
});

bthread("Guard: Unique Branche", function () {
  const x = waitForAnyBrancheAdded();
  block(matchAddBranche(x.id, ANY), function () {});
});

bthread("Guard: Unique Brancheswherehead", function () {
  const x = waitForAnyBrancheswhereheadAdded();
  block(matchAddBrancheswherehead(x.id, ANY), function () {});
});

bthread("Guard: Unique Build", function () {
  const x = waitForAnyBuildAdded();
  block(matchAddBuild(x.id, ANY), function () {});
});

bthread("Guard: Unique Bulklist", function () {
  const x = waitForAnyBulklistAdded();
  block(matchAddBulklist(x.id, ANY), function () {});
});

bthread("Guard: Unique Cache", function () {
  const x = waitForAnyCacheAdded();
  block(matchAddCache(x.id, ANY), function () {});
});

bthread("Guard: Unique Campaign", function () {
  const x = waitForAnyCampaignAdded();
  block(matchAddCampaign(x.id, ANY), function () {});
});

bthread("Guard: Unique Cancel", function () {
  const x = waitForAnyCancelAdded();
  block(matchAddCancel(x.id, ANY), function () {});
});

bthread("Guard: Unique Checkrun", function () {
  const x = waitForAnyCheckrunAdded();
  block(matchAddCheckrun(x.id, ANY), function () {});
});

bthread("Guard: Unique Checksuite", function () {
  const x = waitForAnyChecksuiteAdded();
  block(matchAddChecksuite(x.id, ANY), function () {});
});

bthread("Guard: Unique Classroom", function () {
  const x = waitForAnyClassroomAdded();
  block(matchAddClassroom(x.id, ANY), function () {});
});

bthread("Guard: Unique Clone", function () {
  const x = waitForAnyCloneAdded();
  block(matchAddClone(x.id, ANY), function () {});
});

bthread("Guard: Unique Code", function () {
  const x = waitForAnyCodeAdded();
  block(matchAddCode(x.id, ANY), function () {});
});

bthread("Guard: Unique Codefrequency", function () {
  const x = waitForAnyCodefrequencyAdded();
  block(matchAddCodefrequency(x.id, ANY), function () {});
});

bthread("Guard: Unique Codeowner", function () {
  const x = waitForAnyCodeownerAdded();
  block(matchAddCodeowner(x.id, ANY), function () {});
});

bthread("Guard: Unique Codeql", function () {
  const x = waitForAnyCodeqlAdded();
  block(matchAddCodeql(x.id, ANY), function () {});
});

bthread("Guard: Unique Codescanning", function () {
  const x = waitForAnyCodescanningAdded();
  block(matchAddCodescanning(x.id, ANY), function () {});
});

bthread("Guard: Unique Codesecurity", function () {
  const x = waitForAnyCodesecurityAdded();
  block(matchAddCodesecurity(x.id, ANY), function () {});
});

bthread("Guard: Unique Codesecurityconfiguration", function () {
  const x = waitForAnyCodesecurityconfigurationAdded();
  block(matchAddCodesecurityconfiguration(x.id, ANY), function () {});
});

bthread("Guard: Unique Codesofconduct", function () {
  const x = waitForAnyCodesofconductAdded();
  block(matchAddCodesofconduct(x.id, ANY), function () {});
});

bthread("Guard: Unique Codespace", function () {
  const x = waitForAnyCodespaceAdded();
  block(matchAddCodespace(x.id, ANY), function () {});
});

bthread("Guard: Unique Collaborator", function () {
  const x = waitForAnyCollaboratorAdded();
  block(matchAddCollaborator(x.id, ANY), function () {});
});

bthread("Guard: Unique Column", function () {
  const x = waitForAnyColumnAdded();
  block(matchAddColumn(x.id, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  block(matchAddComment(x.id, ANY), function () {});
});

bthread("Guard: Unique Commit", function () {
  const x = waitForAnyCommitAdded();
  block(matchAddCommit(x.id, ANY), function () {});
});

bthread("Guard: Unique Commitactivity", function () {
  const x = waitForAnyCommitactivityAdded();
  block(matchAddCommitactivity(x.id, ANY), function () {});
});

bthread("Guard: Unique Community", function () {
  const x = waitForAnyCommunityAdded();
  block(matchAddCommunity(x.id, ANY), function () {});
});

bthread("Guard: Unique Compare", function () {
  const x = waitForAnyCompareAdded();
  block(matchAddCompare(x.id, ANY), function () {});
});

bthread("Guard: Unique Config", function () {
  const x = waitForAnyConfigAdded();
  block(matchAddConfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Configuration", function () {
  const x = waitForAnyConfigurationAdded();
  block(matchAddConfiguration(x.id, ANY), function () {});
});

bthread("Guard: Unique Conflict", function () {
  const x = waitForAnyConflictAdded();
  block(matchAddConflict(x.id, ANY), function () {});
});

bthread("Guard: Unique Content", function () {
  const x = waitForAnyContentAdded();
  block(matchAddContent(x.id, ANY), function () {});
});

bthread("Guard: Unique Context", function () {
  const x = waitForAnyContextAdded();
  block(matchAddContext(x.id, ANY), function () {});
});

bthread("Guard: Unique Contributor", function () {
  const x = waitForAnyContributorAdded();
  block(matchAddContributor(x.id, ANY), function () {});
});

bthread("Guard: Unique Conversion", function () {
  const x = waitForAnyConversionAdded();
  block(matchAddConversion(x.id, ANY), function () {});
});

bthread("Guard: Unique Copilot", function () {
  const x = waitForAnyCopilotAdded();
  block(matchAddCopilot(x.id, ANY), function () {});
});

bthread("Guard: Unique Credential", function () {
  const x = waitForAnyCredentialAdded();
  block(matchAddCredential(x.id, ANY), function () {});
});

bthread("Guard: Unique Customization", function () {
  const x = waitForAnyCustomizationAdded();
  block(matchAddCustomization(x.id, ANY), function () {});
});

bthread("Guard: Unique Cve", function () {
  const x = waitForAnyCveAdded();
  block(matchAddCve(x.id, ANY), function () {});
});

bthread("Guard: Unique Databas", function () {
  const x = waitForAnyDatabasAdded();
  block(matchAddDatabas(x.id, ANY), function () {});
});

bthread("Guard: Unique Default", function () {
  const x = waitForAnyDefaultAdded();
  block(matchAddDefault(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultlevel", function () {
  const x = waitForAnyDefaultlevelAdded();
  block(matchAddDefaultlevel(x.id, ANY), function () {});
});

bthread("Guard: Unique Defaultsetup", function () {
  const x = waitForAnyDefaultsetupAdded();
  block(matchAddDefaultsetup(x.id, ANY), function () {});
});

bthread("Guard: Unique Deleterequest", function () {
  const x = waitForAnyDeleterequestAdded();
  block(matchAddDeleterequest(x.id, ANY), function () {});
});

bthread("Guard: Unique Delivery", function () {
  const x = waitForAnyDeliveryAdded();
  block(matchAddDelivery(x.id, ANY), function () {});
});

bthread("Guard: Unique Dependabot", function () {
  const x = waitForAnyDependabotAdded();
  block(matchAddDependabot(x.id, ANY), function () {});
});

bthread("Guard: Unique Dependency", function () {
  const x = waitForAnyDependencyAdded();
  block(matchAddDependency(x.id, ANY), function () {});
});

bthread("Guard: Unique Dependencygraph", function () {
  const x = waitForAnyDependencygraphAdded();
  block(matchAddDependencygraph(x.id, ANY), function () {});
});

bthread("Guard: Unique Deployment", function () {
  const x = waitForAnyDeploymentAdded();
  block(matchAddDeployment(x.id, ANY), function () {});
});

bthread("Guard: Unique Deploymentbranchpolicy", function () {
  const x = waitForAnyDeploymentbranchpolicyAdded();
  block(matchAddDeploymentbranchpolicy(x.id, ANY), function () {});
});

bthread("Guard: Unique Deploymentprotectionrule", function () {
  const x = waitForAnyDeploymentprotectionruleAdded();
  block(matchAddDeploymentprotectionrule(x.id, ANY), function () {});
});

bthread("Guard: Unique Detach", function () {
  const x = waitForAnyDetachAdded();
  block(matchAddDetach(x.id, ANY), function () {});
});

bthread("Guard: Unique Devcontainer", function () {
  const x = waitForAnyDevcontainerAdded();
  block(matchAddDevcontainer(x.id, ANY), function () {});
});

bthread("Guard: Unique Digest", function () {
  const x = waitForAnyDigestAdded();
  block(matchAddDigest(x.id, ANY), function () {});
});

bthread("Guard: Unique Disable", function () {
  const x = waitForAnyDisableAdded();
  block(matchAddDisable(x.id, ANY), function () {});
});

bthread("Guard: Unique Discussion", function () {
  const x = waitForAnyDiscussionAdded();
  block(matchAddDiscussion(x.id, ANY), function () {});
});

bthread("Guard: Unique Dismissal", function () {
  const x = waitForAnyDismissalAdded();
  block(matchAddDismissal(x.id, ANY), function () {});
});

bthread("Guard: Unique Dispatche", function () {
  const x = waitForAnyDispatcheAdded();
  block(matchAddDispatche(x.id, ANY), function () {});
});

bthread("Guard: Unique Docker", function () {
  const x = waitForAnyDockerAdded();
  block(matchAddDocker(x.id, ANY), function () {});
});

bthread("Guard: Unique Download", function () {
  const x = waitForAnyDownloadAdded();
  block(matchAddDownload(x.id, ANY), function () {});
});

bthread("Guard: Unique Email", function () {
  const x = waitForAnyEmailAdded();
  block(matchAddEmail(x.id, ANY), function () {});
});

bthread("Guard: Unique Emoji", function () {
  const x = waitForAnyEmojiAdded();
  block(matchAddEmoji(x.id, ANY), function () {});
});

bthread("Guard: Unique Enable", function () {
  const x = waitForAnyEnableAdded();
  block(matchAddEnable(x.id, ANY), function () {});
});

bthread("Guard: Unique Enforceadmin", function () {
  const x = waitForAnyEnforceadminAdded();
  block(matchAddEnforceadmin(x.id, ANY), function () {});
});

bthread("Guard: Unique Enterpris", function () {
  const x = waitForAnyEnterprisAdded();
  block(matchAddEnterpris(x.id, ANY), function () {});
});

bthread("Guard: Unique Environment", function () {
  const x = waitForAnyEnvironmentAdded();
  block(matchAddEnvironment(x.id, ANY), function () {});
});

bthread("Guard: Unique Error", function () {
  const x = waitForAnyErrorAdded();
  block(matchAddError(x.id, ANY), function () {});
});

bthread("Guard: Unique Event", function () {
  const x = waitForAnyEventAdded();
  block(matchAddEvent(x.id, ANY), function () {});
});

bthread("Guard: Unique Export", function () {
  const x = waitForAnyExportAdded();
  block(matchAddExport(x.id, ANY), function () {});
});

bthread("Guard: Unique Failedinvitation", function () {
  const x = waitForAnyFailedinvitationAdded();
  block(matchAddFailedinvitation(x.id, ANY), function () {});
});

bthread("Guard: Unique Feed", function () {
  const x = waitForAnyFeedAdded();
  block(matchAddFeed(x.id, ANY), function () {});
});

bthread("Guard: Unique Field", function () {
  const x = waitForAnyFieldAdded();
  block(matchAddField(x.id, ANY), function () {});
});

bthread("Guard: Unique File", function () {
  const x = waitForAnyFileAdded();
  block(matchAddFile(x.id, ANY), function () {});
});

bthread("Guard: Unique Follower", function () {
  const x = waitForAnyFollowerAdded();
  block(matchAddFollower(x.id, ANY), function () {});
});

bthread("Guard: Unique Following", function () {
  const x = waitForAnyFollowingAdded();
  block(matchAddFollowing(x.id, ANY), function () {});
});

bthread("Guard: Unique Forcecancel", function () {
  const x = waitForAnyForcecancelAdded();
  block(matchAddForcecancel(x.id, ANY), function () {});
});

bthread("Guard: Unique Fork", function () {
  const x = waitForAnyForkAdded();
  block(matchAddFork(x.id, ANY), function () {});
});

bthread("Guard: Unique Forkprcontributorapproval", function () {
  const x = waitForAnyForkprcontributorapprovalAdded();
  block(matchAddForkprcontributorapproval(x.id, ANY), function () {});
});

bthread("Guard: Unique Forkprworkflowsprivaterepo", function () {
  const x = waitForAnyForkprworkflowsprivaterepoAdded();
  block(matchAddForkprworkflowsprivaterepo(x.id, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  block(matchAddGenerate(x.id, ANY), function () {});
});

bthread("Guard: Unique Generatejitconfig", function () {
  const x = waitForAnyGeneratejitconfigAdded();
  block(matchAddGeneratejitconfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Generatenote", function () {
  const x = waitForAnyGeneratenoteAdded();
  block(matchAddGeneratenote(x.id, ANY), function () {});
});

bthread("Guard: Unique Gist", function () {
  const x = waitForAnyGistAdded();
  block(matchAddGist(x.id, ANY), function () {});
});

bthread("Guard: Unique Git", function () {
  const x = waitForAnyGitAdded();
  block(matchAddGit(x.id, ANY), function () {});
});

bthread("Guard: Unique Githubowned", function () {
  const x = waitForAnyGithubownedAdded();
  block(matchAddGithubowned(x.id, ANY), function () {});
});

bthread("Guard: Unique Gitignore", function () {
  const x = waitForAnyGitignoreAdded();
  block(matchAddGitignore(x.id, ANY), function () {});
});

bthread("Guard: Unique Gpgkey", function () {
  const x = waitForAnyGpgkeyAdded();
  block(matchAddGpgkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Grade", function () {
  const x = waitForAnyGradeAdded();
  block(matchAddGrade(x.id, ANY), function () {});
});

bthread("Guard: Unique Grant", function () {
  const x = waitForAnyGrantAdded();
  block(matchAddGrant(x.id, ANY), function () {});
});

bthread("Guard: Unique Health", function () {
  const x = waitForAnyHealthAdded();
  block(matchAddHealth(x.id, ANY), function () {});
});

bthread("Guard: Unique History", function () {
  const x = waitForAnyHistoryAdded();
  block(matchAddHistory(x.id, ANY), function () {});
});

bthread("Guard: Unique Hook", function () {
  const x = waitForAnyHookAdded();
  block(matchAddHook(x.id, ANY), function () {});
});

bthread("Guard: Unique Hostedrunner", function () {
  const x = waitForAnyHostedrunnerAdded();
  block(matchAddHostedrunner(x.id, ANY), function () {});
});

bthread("Guard: Unique Hovercard", function () {
  const x = waitForAnyHovercardAdded();
  block(matchAddHovercard(x.id, ANY), function () {});
});

bthread("Guard: Unique Image", function () {
  const x = waitForAnyImageAdded();
  block(matchAddImage(x.id, ANY), function () {});
});

bthread("Guard: Unique Immutablereleas", function () {
  const x = waitForAnyImmutablereleasAdded();
  block(matchAddImmutablereleas(x.id, ANY), function () {});
});

bthread("Guard: Unique Import", function () {
  const x = waitForAnyImportAdded();
  block(matchAddImport(x.id, ANY), function () {});
});

bthread("Guard: Unique Insight", function () {
  const x = waitForAnyInsightAdded();
  block(matchAddInsight(x.id, ANY), function () {});
});

bthread("Guard: Unique Installation", function () {
  const x = waitForAnyInstallationAdded();
  block(matchAddInstallation(x.id, ANY), function () {});
});

bthread("Guard: Unique Installationrequest", function () {
  const x = waitForAnyInstallationrequestAdded();
  block(matchAddInstallationrequest(x.id, ANY), function () {});
});

bthread("Guard: Unique Instance", function () {
  const x = waitForAnyInstanceAdded();
  block(matchAddInstance(x.id, ANY), function () {});
});

bthread("Guard: Unique Interactionlimit", function () {
  const x = waitForAnyInteractionlimitAdded();
  block(matchAddInteractionlimit(x.id, ANY), function () {});
});

bthread("Guard: Unique Invitation", function () {
  const x = waitForAnyInvitationAdded();
  block(matchAddInvitation(x.id, ANY), function () {});
});

bthread("Guard: Unique Issue", function () {
  const x = waitForAnyIssueAdded();
  block(matchAddIssue(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuetype", function () {
  const x = waitForAnyIssuetypeAdded();
  block(matchAddIssuetype(x.id, ANY), function () {});
});

bthread("Guard: Unique Item", function () {
  const x = waitForAnyItemAdded();
  block(matchAddItem(x.id, ANY), function () {});
});

bthread("Guard: Unique Job", function () {
  const x = waitForAnyJobAdded();
  block(matchAddJob(x.id, ANY), function () {});
});

bthread("Guard: Unique Key", function () {
  const x = waitForAnyKeyAdded();
  block(matchAddKey(x.id, ANY), function () {});
});

bthread("Guard: Unique Label", function () {
  const x = waitForAnyLabelAdded();
  block(matchAddLabel(x.id, ANY), function () {});
});

bthread("Guard: Unique Language", function () {
  const x = waitForAnyLanguageAdded();
  block(matchAddLanguage(x.id, ANY), function () {});
});

bthread("Guard: Unique Largefile", function () {
  const x = waitForAnyLargefileAdded();
  block(matchAddLargefile(x.id, ANY), function () {});
});

bthread("Guard: Unique Latest", function () {
  const x = waitForAnyLatestAdded();
  block(matchAddLatest(x.id, ANY), function () {});
});

bthread("Guard: Unique Lf", function () {
  const x = waitForAnyLfAdded();
  block(matchAddLf(x.id, ANY), function () {});
});

bthread("Guard: Unique Licens", function () {
  const x = waitForAnyLicensAdded();
  block(matchAddLicens(x.id, ANY), function () {});
});

bthread("Guard: Unique License", function () {
  const x = waitForAnyLicenseAdded();
  block(matchAddLicense(x.id, ANY), function () {});
});

bthread("Guard: Unique Limit", function () {
  const x = waitForAnyLimitAdded();
  block(matchAddLimit(x.id, ANY), function () {});
});

bthread("Guard: Unique Location", function () {
  const x = waitForAnyLocationAdded();
  block(matchAddLocation(x.id, ANY), function () {});
});

bthread("Guard: Unique Lock", function () {
  const x = waitForAnyLockAdded();
  block(matchAddLock(x.id, ANY), function () {});
});

bthread("Guard: Unique Log", function () {
  const x = waitForAnyLogAdded();
  block(matchAddLog(x.id, ANY), function () {});
});

bthread("Guard: Unique Machine", function () {
  const x = waitForAnyMachineAdded();
  block(matchAddMachine(x.id, ANY), function () {});
});

bthread("Guard: Unique Machinesize", function () {
  const x = waitForAnyMachinesizeAdded();
  block(matchAddMachinesize(x.id, ANY), function () {});
});

bthread("Guard: Unique Markdown", function () {
  const x = waitForAnyMarkdownAdded();
  block(matchAddMarkdown(x.id, ANY), function () {});
});

bthread("Guard: Unique Marketplacelisting", function () {
  const x = waitForAnyMarketplacelistingAdded();
  block(matchAddMarketplacelisting(x.id, ANY), function () {});
});

bthread("Guard: Unique Marketplacepurchas", function () {
  const x = waitForAnyMarketplacepurchasAdded();
  block(matchAddMarketplacepurchas(x.id, ANY), function () {});
});

bthread("Guard: Unique Matchingref", function () {
  const x = waitForAnyMatchingrefAdded();
  block(matchAddMatchingref(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Membership", function () {
  const x = waitForAnyMembershipAdded();
  block(matchAddMembership(x.id, ANY), function () {});
});

bthread("Guard: Unique Merge", function () {
  const x = waitForAnyMergeAdded();
  block(matchAddMerge(x.id, ANY), function () {});
});

bthread("Guard: Unique Mergeupstream", function () {
  const x = waitForAnyMergeupstreamAdded();
  block(matchAddMergeupstream(x.id, ANY), function () {});
});

bthread("Guard: Unique Meta", function () {
  const x = waitForAnyMetaAdded();
  block(matchAddMeta(x.id, ANY), function () {});
});

bthread("Guard: Unique Metadata", function () {
  const x = waitForAnyMetadataAdded();
  block(matchAddMetadata(x.id, ANY), function () {});
});

bthread("Guard: Unique Metric", function () {
  const x = waitForAnyMetricAdded();
  block(matchAddMetric(x.id, ANY), function () {});
});

bthread("Guard: Unique Migration", function () {
  const x = waitForAnyMigrationAdded();
  block(matchAddMigration(x.id, ANY), function () {});
});

bthread("Guard: Unique Milestone", function () {
  const x = waitForAnyMilestoneAdded();
  block(matchAddMilestone(x.id, ANY), function () {});
});

bthread("Guard: Unique Move", function () {
  const x = waitForAnyMoveAdded();
  block(matchAddMove(x.id, ANY), function () {});
});

bthread("Guard: Unique Network", function () {
  const x = waitForAnyNetworkAdded();
  block(matchAddNetwork(x.id, ANY), function () {});
});

bthread("Guard: Unique Networkconfiguration", function () {
  const x = waitForAnyNetworkconfigurationAdded();
  block(matchAddNetworkconfiguration(x.id, ANY), function () {});
});

bthread("Guard: Unique Networksetting", function () {
  const x = waitForAnyNetworksettingAdded();
  block(matchAddNetworksetting(x.id, ANY), function () {});
});

bthread("Guard: Unique New", function () {
  const x = waitForAnyNewAdded();
  block(matchAddNew(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Octocat", function () {
  const x = waitForAnyOctocatAdded();
  block(matchAddOctocat(x.id, ANY), function () {});
});

bthread("Guard: Unique Oidc", function () {
  const x = waitForAnyOidcAdded();
  block(matchAddOidc(x.id, ANY), function () {});
});

bthread("Guard: Unique Org", function () {
  const x = waitForAnyOrgAdded();
  block(matchAddOrg(x.id, ANY), function () {});
});

bthread("Guard: Unique Organization", function () {
  const x = waitForAnyOrganizationAdded();
  block(matchAddOrganization(x.id, ANY), function () {});
});

bthread("Guard: Unique Organizationrole", function () {
  const x = waitForAnyOrganizationroleAdded();
  block(matchAddOrganizationrole(x.id, ANY), function () {});
});

bthread("Guard: Unique Organizationsecret", function () {
  const x = waitForAnyOrganizationsecretAdded();
  block(matchAddOrganizationsecret(x.id, ANY), function () {});
});

bthread("Guard: Unique Organizationvariable", function () {
  const x = waitForAnyOrganizationvariableAdded();
  block(matchAddOrganizationvariable(x.id, ANY), function () {});
});

bthread("Guard: Unique Outsidecollaborator", function () {
  const x = waitForAnyOutsidecollaboratorAdded();
  block(matchAddOutsidecollaborator(x.id, ANY), function () {});
});

bthread("Guard: Unique Package", function () {
  const x = waitForAnyPackageAdded();
  block(matchAddPackage(x.id, ANY), function () {});
});

bthread("Guard: Unique Page", function () {
  const x = waitForAnyPageAdded();
  block(matchAddPage(x.id, ANY), function () {});
});

bthread("Guard: Unique Parent", function () {
  const x = waitForAnyParentAdded();
  block(matchAddParent(x.id, ANY), function () {});
});

bthread("Guard: Unique Participation", function () {
  const x = waitForAnyParticipationAdded();
  block(matchAddParticipation(x.id, ANY), function () {});
});

bthread("Guard: Unique Partner", function () {
  const x = waitForAnyPartnerAdded();
  block(matchAddPartner(x.id, ANY), function () {});
});

bthread("Guard: Unique Path", function () {
  const x = waitForAnyPathAdded();
  block(matchAddPath(x.id, ANY), function () {});
});

bthread("Guard: Unique Patternconfiguration", function () {
  const x = waitForAnyPatternconfigurationAdded();
  block(matchAddPatternconfiguration(x.id, ANY), function () {});
});

bthread("Guard: Unique Pendingdeployment", function () {
  const x = waitForAnyPendingdeploymentAdded();
  block(matchAddPendingdeployment(x.id, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  block(matchAddPermission(x.id, ANY), function () {});
});

bthread("Guard: Unique Permissionscheck", function () {
  const x = waitForAnyPermissionscheckAdded();
  block(matchAddPermissionscheck(x.id, ANY), function () {});
});

bthread("Guard: Unique Personalaccesstoken", function () {
  const x = waitForAnyPersonalaccesstokenAdded();
  block(matchAddPersonalaccesstoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Personalaccesstokenrequest", function () {
  const x = waitForAnyPersonalaccesstokenrequestAdded();
  block(matchAddPersonalaccesstokenrequest(x.id, ANY), function () {});
});

bthread("Guard: Unique Ping", function () {
  const x = waitForAnyPingAdded();
  block(matchAddPing(x.id, ANY), function () {});
});

bthread("Guard: Unique Plan", function () {
  const x = waitForAnyPlanAdded();
  block(matchAddPlan(x.id, ANY), function () {});
});

bthread("Guard: Unique Platform", function () {
  const x = waitForAnyPlatformAdded();
  block(matchAddPlatform(x.id, ANY), function () {});
});

bthread("Guard: Unique Popular", function () {
  const x = waitForAnyPopularAdded();
  block(matchAddPopular(x.id, ANY), function () {});
});

bthread("Guard: Unique Preference", function () {
  const x = waitForAnyPreferenceAdded();
  block(matchAddPreference(x.id, ANY), function () {});
});

bthread("Guard: Unique Premiumrequest", function () {
  const x = waitForAnyPremiumrequestAdded();
  block(matchAddPremiumrequest(x.id, ANY), function () {});
});

bthread("Guard: Unique Priority", function () {
  const x = waitForAnyPriorityAdded();
  block(matchAddPriority(x.id, ANY), function () {});
});

bthread("Guard: Unique Privateregistry", function () {
  const x = waitForAnyPrivateregistryAdded();
  block(matchAddPrivateregistry(x.id, ANY), function () {});
});

bthread("Guard: Unique Privatevulnerabilityreporting", function () {
  const x = waitForAnyPrivatevulnerabilityreportingAdded();
  block(matchAddPrivatevulnerabilityreporting(x.id, ANY), function () {});
});

bthread("Guard: Unique Profile", function () {
  const x = waitForAnyProfileAdded();
  block(matchAddProfile(x.id, ANY), function () {});
});

bthread("Guard: Unique Project", function () {
  const x = waitForAnyProjectAdded();
  block(matchAddProject(x.id, ANY), function () {});
});

bthread("Guard: Unique Projectsv2", function () {
  const x = waitForAnyProjectsv2Added();
  block(matchAddProjectsv2(x.id, ANY), function () {});
});

bthread("Guard: Unique Property", function () {
  const x = waitForAnyPropertyAdded();
  block(matchAddProperty(x.id, ANY), function () {});
});

bthread("Guard: Unique Protection", function () {
  const x = waitForAnyProtectionAdded();
  block(matchAddProtection(x.id, ANY), function () {});
});

bthread("Guard: Unique Public", function () {
  const x = waitForAnyPublicAdded();
  block(matchAddPublic(x.id, ANY), function () {});
});

bthread("Guard: Unique Publicemail", function () {
  const x = waitForAnyPublicemailAdded();
  block(matchAddPublicemail(x.id, ANY), function () {});
});

bthread("Guard: Unique Publickey", function () {
  const x = waitForAnyPublickeyAdded();
  block(matchAddPublickey(x.id, ANY), function () {});
});

bthread("Guard: Unique Publicmember", function () {
  const x = waitForAnyPublicmemberAdded();
  block(matchAddPublicmember(x.id, ANY), function () {});
});

bthread("Guard: Unique Publish", function () {
  const x = waitForAnyPublishAdded();
  block(matchAddPublish(x.id, ANY), function () {});
});

bthread("Guard: Unique Pull", function () {
  const x = waitForAnyPullAdded();
  block(matchAddPull(x.id, ANY), function () {});
});

bthread("Guard: Unique Punchcard", function () {
  const x = waitForAnyPunchcardAdded();
  block(matchAddPunchcard(x.id, ANY), function () {});
});

bthread("Guard: Unique Pushprotectionbypass", function () {
  const x = waitForAnyPushprotectionbypassAdded();
  block(matchAddPushprotectionbypass(x.id, ANY), function () {});
});

bthread("Guard: Unique Ratelimit", function () {
  const x = waitForAnyRatelimitAdded();
  block(matchAddRatelimit(x.id, ANY), function () {});
});

bthread("Guard: Unique Raw", function () {
  const x = waitForAnyRawAdded();
  block(matchAddRaw(x.id, ANY), function () {});
});

bthread("Guard: Unique Reaction", function () {
  const x = waitForAnyReactionAdded();
  block(matchAddReaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Readme", function () {
  const x = waitForAnyReadmeAdded();
  block(matchAddReadme(x.id, ANY), function () {});
});

bthread("Guard: Unique Receivedevent", function () {
  const x = waitForAnyReceivedeventAdded();
  block(matchAddReceivedevent(x.id, ANY), function () {});
});

bthread("Guard: Unique Ref", function () {
  const x = waitForAnyRefAdded();
  block(matchAddRef(x.id, ANY), function () {});
});

bthread("Guard: Unique Referrer", function () {
  const x = waitForAnyReferrerAdded();
  block(matchAddReferrer(x.id, ANY), function () {});
});

bthread("Guard: Unique Registrationtoken", function () {
  const x = waitForAnyRegistrationtokenAdded();
  block(matchAddRegistrationtoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Releas", function () {
  const x = waitForAnyReleasAdded();
  block(matchAddReleas(x.id, ANY), function () {});
});

bthread("Guard: Unique Remove", function () {
  const x = waitForAnyRemoveAdded();
  block(matchAddRemove(x.id, ANY), function () {});
});

bthread("Guard: Unique Removetoken", function () {
  const x = waitForAnyRemovetokenAdded();
  block(matchAddRemovetoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Rename", function () {
  const x = waitForAnyRenameAdded();
  block(matchAddRename(x.id, ANY), function () {});
});

bthread("Guard: Unique Reply", function () {
  const x = waitForAnyReplyAdded();
  block(matchAddReply(x.id, ANY), function () {});
});

bthread("Guard: Unique Repo", function () {
  const x = waitForAnyRepoAdded();
  block(matchAddRepo(x.id, ANY), function () {});
});

bthread("Guard: Unique Report", function () {
  const x = waitForAnyReportAdded();
  block(matchAddReport(x.id, ANY), function () {});
});

bthread("Guard: Unique Repository", function () {
  const x = waitForAnyRepositoryAdded();
  block(matchAddRepository(x.id, ANY), function () {});
});

bthread("Guard: Unique Repositoryacces", function () {
  const x = waitForAnyRepositoryaccesAdded();
  block(matchAddRepositoryacces(x.id, ANY), function () {});
});

bthread("Guard: Unique Repositoryinvitation", function () {
  const x = waitForAnyRepositoryinvitationAdded();
  block(matchAddRepositoryinvitation(x.id, ANY), function () {});
});

bthread("Guard: Unique Requestedreviewer", function () {
  const x = waitForAnyRequestedreviewerAdded();
  block(matchAddRequestedreviewer(x.id, ANY), function () {});
});

bthread("Guard: Unique Requiredpullrequestreview", function () {
  const x = waitForAnyRequiredpullrequestreviewAdded();
  block(matchAddRequiredpullrequestreview(x.id, ANY), function () {});
});

bthread("Guard: Unique Requiredsignature", function () {
  const x = waitForAnyRequiredsignatureAdded();
  block(matchAddRequiredsignature(x.id, ANY), function () {});
});

bthread("Guard: Unique Requiredstatuscheck", function () {
  const x = waitForAnyRequiredstatuscheckAdded();
  block(matchAddRequiredstatuscheck(x.id, ANY), function () {});
});

bthread("Guard: Unique Rerequest", function () {
  const x = waitForAnyRerequestAdded();
  block(matchAddRerequest(x.id, ANY), function () {});
});

bthread("Guard: Unique Rerun", function () {
  const x = waitForAnyRerunAdded();
  block(matchAddRerun(x.id, ANY), function () {});
});

bthread("Guard: Unique Rerunfailedjob", function () {
  const x = waitForAnyRerunfailedjobAdded();
  block(matchAddRerunfailedjob(x.id, ANY), function () {});
});

bthread("Guard: Unique Restore", function () {
  const x = waitForAnyRestoreAdded();
  block(matchAddRestore(x.id, ANY), function () {});
});

bthread("Guard: Unique Restriction", function () {
  const x = waitForAnyRestrictionAdded();
  block(matchAddRestriction(x.id, ANY), function () {});
});

bthread("Guard: Unique Review", function () {
  const x = waitForAnyReviewAdded();
  block(matchAddReview(x.id, ANY), function () {});
});

bthread("Guard: Unique Revoke", function () {
  const x = waitForAnyRevokeAdded();
  block(matchAddRevoke(x.id, ANY), function () {});
});

bthread("Guard: Unique Routestat", function () {
  const x = waitForAnyRoutestatAdded();
  block(matchAddRoutestat(x.id, ANY), function () {});
});

bthread("Guard: Unique Rule", function () {
  const x = waitForAnyRuleAdded();
  block(matchAddRule(x.id, ANY), function () {});
});

bthread("Guard: Unique Ruleset", function () {
  const x = waitForAnyRulesetAdded();
  block(matchAddRuleset(x.id, ANY), function () {});
});

bthread("Guard: Unique Rulesuite", function () {
  const x = waitForAnyRulesuiteAdded();
  block(matchAddRulesuite(x.id, ANY), function () {});
});

bthread("Guard: Unique Run", function () {
  const x = waitForAnyRunAdded();
  block(matchAddRun(x.id, ANY), function () {});
});

bthread("Guard: Unique Runner", function () {
  const x = waitForAnyRunnerAdded();
  block(matchAddRunner(x.id, ANY), function () {});
});

bthread("Guard: Unique Runnergroup", function () {
  const x = waitForAnyRunnergroupAdded();
  block(matchAddRunnergroup(x.id, ANY), function () {});
});

bthread("Guard: Unique Sarif", function () {
  const x = waitForAnySarifAdded();
  block(matchAddSarif(x.id, ANY), function () {});
});

bthread("Guard: Unique Sbom", function () {
  const x = waitForAnySbomAdded();
  block(matchAddSbom(x.id, ANY), function () {});
});

bthread("Guard: Unique Scanhistory", function () {
  const x = waitForAnyScanhistoryAdded();
  block(matchAddScanhistory(x.id, ANY), function () {});
});

bthread("Guard: Unique Schema", function () {
  const x = waitForAnySchemaAdded();
  block(matchAddSchema(x.id, ANY), function () {});
});

bthread("Guard: Unique Scoped", function () {
  const x = waitForAnyScopedAdded();
  block(matchAddScoped(x.id, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  block(matchAddSearch(x.id, ANY), function () {});
});

bthread("Guard: Unique Seat", function () {
  const x = waitForAnySeatAdded();
  block(matchAddSeat(x.id, ANY), function () {});
});

bthread("Guard: Unique Secret", function () {
  const x = waitForAnySecretAdded();
  block(matchAddSecret(x.id, ANY), function () {});
});

bthread("Guard: Unique Secretscanning", function () {
  const x = waitForAnySecretscanningAdded();
  block(matchAddSecretscanning(x.id, ANY), function () {});
});

bthread("Guard: Unique Securityadvisory", function () {
  const x = waitForAnySecurityadvisoryAdded();
  block(matchAddSecurityadvisory(x.id, ANY), function () {});
});

bthread("Guard: Unique Securitymanager", function () {
  const x = waitForAnySecuritymanagerAdded();
  block(matchAddSecuritymanager(x.id, ANY), function () {});
});

bthread("Guard: Unique Selectedaction", function () {
  const x = waitForAnySelectedactionAdded();
  block(matchAddSelectedaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Selectedteam", function () {
  const x = waitForAnySelectedteamAdded();
  block(matchAddSelectedteam(x.id, ANY), function () {});
});

bthread("Guard: Unique Selecteduser", function () {
  const x = waitForAnySelecteduserAdded();
  block(matchAddSelecteduser(x.id, ANY), function () {});
});

bthread("Guard: Unique Selfhostedrunner", function () {
  const x = waitForAnySelfhostedrunnerAdded();
  block(matchAddSelfhostedrunner(x.id, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  block(matchAddSetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Sharedstorage", function () {
  const x = waitForAnySharedstorageAdded();
  block(matchAddSharedstorage(x.id, ANY), function () {});
});

bthread("Guard: Unique Snapshot", function () {
  const x = waitForAnySnapshotAdded();
  block(matchAddSnapshot(x.id, ANY), function () {});
});

bthread("Guard: Unique Socialaccount", function () {
  const x = waitForAnySocialaccountAdded();
  block(matchAddSocialaccount(x.id, ANY), function () {});
});

bthread("Guard: Unique Sshsigningkey", function () {
  const x = waitForAnySshsigningkeyAdded();
  block(matchAddSshsigningkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Star", function () {
  const x = waitForAnyStarAdded();
  block(matchAddStar(x.id, ANY), function () {});
});

bthread("Guard: Unique Stargazer", function () {
  const x = waitForAnyStargazerAdded();
  block(matchAddStargazer(x.id, ANY), function () {});
});

bthread("Guard: Unique Starred", function () {
  const x = waitForAnyStarredAdded();
  block(matchAddStarred(x.id, ANY), function () {});
});

bthread("Guard: Unique Start", function () {
  const x = waitForAnyStartAdded();
  block(matchAddStart(x.id, ANY), function () {});
});

bthread("Guard: Unique Stat", function () {
  const x = waitForAnyStatAdded();
  block(matchAddStat(x.id, ANY), function () {});
});

bthread("Guard: Unique Statu", function () {
  const x = waitForAnyStatuAdded();
  block(matchAddStatu(x.id, ANY), function () {});
});

bthread("Guard: Unique Status", function () {
  const x = waitForAnyStatusAdded();
  block(matchAddStatus(x.id, ANY), function () {});
});

bthread("Guard: Unique Stop", function () {
  const x = waitForAnyStopAdded();
  block(matchAddStop(x.id, ANY), function () {});
});

bthread("Guard: Unique Storagerecord", function () {
  const x = waitForAnyStoragerecordAdded();
  block(matchAddStoragerecord(x.id, ANY), function () {});
});

bthread("Guard: Unique Stubbed", function () {
  const x = waitForAnyStubbedAdded();
  block(matchAddStubbed(x.id, ANY), function () {});
});

bthread("Guard: Unique Sub", function () {
  const x = waitForAnySubAdded();
  block(matchAddSub(x.id, ANY), function () {});
});

bthread("Guard: Unique Subissue", function () {
  const x = waitForAnySubissueAdded();
  block(matchAddSubissue(x.id, ANY), function () {});
});

bthread("Guard: Unique Subjectstat", function () {
  const x = waitForAnySubjectstatAdded();
  block(matchAddSubjectstat(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscriber", function () {
  const x = waitForAnySubscriberAdded();
  block(matchAddSubscriber(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  block(matchAddSubscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Summarystat", function () {
  const x = waitForAnySummarystatAdded();
  block(matchAddSummarystat(x.id, ANY), function () {});
});

bthread("Guard: Unique Suspended", function () {
  const x = waitForAnySuspendedAdded();
  block(matchAddSuspended(x.id, ANY), function () {});
});

bthread("Guard: Unique Tag", function () {
  const x = waitForAnyTagAdded();
  block(matchAddTag(x.id, ANY), function () {});
});

bthread("Guard: Unique Tarball", function () {
  const x = waitForAnyTarballAdded();
  block(matchAddTarball(x.id, ANY), function () {});
});

bthread("Guard: Unique Team", function () {
  const x = waitForAnyTeamAdded();
  block(matchAddTeam(x.id, ANY), function () {});
});

bthread("Guard: Unique Template", function () {
  const x = waitForAnyTemplateAdded();
  block(matchAddTemplate(x.id, ANY), function () {});
});

bthread("Guard: Unique Test", function () {
  const x = waitForAnyTestAdded();
  block(matchAddTest(x.id, ANY), function () {});
});

bthread("Guard: Unique Thread", function () {
  const x = waitForAnyThreadAdded();
  block(matchAddThread(x.id, ANY), function () {});
});

bthread("Guard: Unique Timeline", function () {
  const x = waitForAnyTimelineAdded();
  block(matchAddTimeline(x.id, ANY), function () {});
});

bthread("Guard: Unique Timestat", function () {
  const x = waitForAnyTimestatAdded();
  block(matchAddTimestat(x.id, ANY), function () {});
});

bthread("Guard: Unique Timing", function () {
  const x = waitForAnyTimingAdded();
  block(matchAddTiming(x.id, ANY), function () {});
});

bthread("Guard: Unique Token", function () {
  const x = waitForAnyTokenAdded();
  block(matchAddToken(x.id, ANY), function () {});
});

bthread("Guard: Unique Topic", function () {
  const x = waitForAnyTopicAdded();
  block(matchAddTopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Traffic", function () {
  const x = waitForAnyTrafficAdded();
  block(matchAddTraffic(x.id, ANY), function () {});
});

bthread("Guard: Unique Transfer", function () {
  const x = waitForAnyTransferAdded();
  block(matchAddTransfer(x.id, ANY), function () {});
});

bthread("Guard: Unique Tree", function () {
  const x = waitForAnyTreeAdded();
  block(matchAddTree(x.id, ANY), function () {});
});

bthread("Guard: Unique Updatebranch", function () {
  const x = waitForAnyUpdatebranchAdded();
  block(matchAddUpdatebranch(x.id, ANY), function () {});
});

bthread("Guard: Unique Usage", function () {
  const x = waitForAnyUsageAdded();
  block(matchAddUsage(x.id, ANY), function () {});
});

bthread("Guard: Unique Usagebyrepository", function () {
  const x = waitForAnyUsagebyrepositoryAdded();
  block(matchAddUsagebyrepository(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Userstat", function () {
  const x = waitForAnyUserstatAdded();
  block(matchAddUserstat(x.id, ANY), function () {});
});

bthread("Guard: Unique Value", function () {
  const x = waitForAnyValueAdded();
  block(matchAddValue(x.id, ANY), function () {});
});

bthread("Guard: Unique Variable", function () {
  const x = waitForAnyVariableAdded();
  block(matchAddVariable(x.id, ANY), function () {});
});

bthread("Guard: Unique Variantanalys", function () {
  const x = waitForAnyVariantanalysAdded();
  block(matchAddVariantanalys(x.id, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  block(matchAddVersion(x.id, ANY), function () {});
});

bthread("Guard: Unique View", function () {
  const x = waitForAnyViewAdded();
  block(matchAddView(x.id, ANY), function () {});
});

bthread("Guard: Unique Visibility", function () {
  const x = waitForAnyVisibilityAdded();
  block(matchAddVisibility(x.id, ANY), function () {});
});

bthread("Guard: Unique Vulnerabilityalert", function () {
  const x = waitForAnyVulnerabilityalertAdded();
  block(matchAddVulnerabilityalert(x.id, ANY), function () {});
});

bthread("Guard: Unique Workflow", function () {
  const x = waitForAnyWorkflowAdded();
  block(matchAddWorkflow(x.id, ANY), function () {});
});

bthread("Guard: Unique Zen", function () {
  const x = waitForAnyZenAdded();
  block(matchAddZen(x.id, ANY), function () {});
});

bthread("Guard: Unique Zipball", function () {
  const x = waitForAnyZipballAdded();
  block(matchAddZipball(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
