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


bthread("AcceptLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAccept(x.id);
  const e_add = waitForAcceptAdded(id);
  block(matchDeleteAccept(id), function () {
    verifyAcceptExists(id);
  });
  updateAccept(x.id);
  updateAccept(x.id);
  const e_upd = waitForAcceptUpdated(id);
  block(matchDeleteAccept(id), function () {
    verifyAcceptUpdated(id);
  });
  deleteAccept(x.id);
  const e_del = waitForAcceptDeleted(id);
  block(matchAddAccept(id), function () {
    verifyAcceptDoesNotExist(id);
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

bthread("ActivitypubLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addActivitypub(x.id);
  const e_add = waitForActivitypubAdded(id);
  block(matchDeleteActivitypub(id), function () {
    verifyActivitypubExists(id);
  });
  updateActivitypub(x.id);
  updateActivitypub(x.id);
  const e_upd = waitForActivitypubUpdated(id);
  block(matchDeleteActivitypub(id), function () {
    verifyActivitypubUpdated(id);
  });
  deleteActivitypub(x.id);
  const e_del = waitForActivitypubDeleted(id);
  block(matchAddActivitypub(id), function () {
    verifyActivitypubDoesNotExist(id);
  });
});

bthread("AdminLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAdmin(x.id);
  const e_add = waitForAdminAdded(id);
  block(matchDeleteAdmin(id), function () {
    verifyAdminExists(id);
  });
  updateAdmin(x.id);
  updateAdmin(x.id);
  const e_upd = waitForAdminUpdated(id);
  block(matchDeleteAdmin(id), function () {
    verifyAdminUpdated(id);
  });
  deleteAdmin(x.id);
  const e_del = waitForAdminDeleted(id);
  block(matchAddAdmin(id), function () {
    verifyAdminDoesNotExist(id);
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

bthread("AttachmentLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAttachment(x.id);
  const e_add = waitForAttachmentAdded(id);
  block(matchDeleteAttachment(id), function () {
    verifyAttachmentExists(id);
  });
  updateAttachment(x.id);
  updateAttachment(x.id);
  const e_upd = waitForAttachmentUpdated(id);
  block(matchDeleteAttachment(id), function () {
    verifyAttachmentUpdated(id);
  });
  deleteAttachment(x.id);
  const e_del = waitForAttachmentDeleted(id);
  block(matchAddAttachment(id), function () {
    verifyAttachmentDoesNotExist(id);
  });
});

bthread("AvatarLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addAvatar(x.id);
  const e_add = waitForAvatarAdded(id);
  block(matchDeleteAvatar(id), function () {
    verifyAvatarExists(id);
  });
  updateAvatar(x.id);
  updateAvatar(x.id);
  const e_upd = waitForAvatarUpdated(id);
  block(matchDeleteAvatar(id), function () {
    verifyAvatarUpdated(id);
  });
  deleteAvatar(x.id);
  const e_del = waitForAvatarDeleted(id);
  block(matchAddAvatar(id), function () {
    verifyAvatarDoesNotExist(id);
  });
});

bthread("BadgeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBadge(x.id);
  const e_add = waitForBadgeAdded(id);
  block(matchDeleteBadge(id), function () {
    verifyBadgeExists(id);
  });
  updateBadge(x.id);
  updateBadge(x.id);
  const e_upd = waitForBadgeUpdated(id);
  block(matchDeleteBadge(id), function () {
    verifyBadgeUpdated(id);
  });
  deleteBadge(x.id);
  const e_del = waitForBadgeDeleted(id);
  block(matchAddBadge(id), function () {
    verifyBadgeDoesNotExist(id);
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

bthread("BranchprotectionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addBranchprotection(x.id);
  const e_add = waitForBranchprotectionAdded(id);
  block(matchDeleteBranchprotection(id), function () {
    verifyBranchprotectionExists(id);
  });
  updateBranchprotection(x.id);
  updateBranchprotection(x.id);
  const e_upd = waitForBranchprotectionUpdated(id);
  block(matchDeleteBranchprotection(id), function () {
    verifyBranchprotectionUpdated(id);
  });
  deleteBranchprotection(x.id);
  const e_del = waitForBranchprotectionDeleted(id);
  block(matchAddBranchprotection(id), function () {
    verifyBranchprotectionDoesNotExist(id);
  });
});

bthread("CheckLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCheck(x.id);
  const e_add = waitForCheckAdded(id);
  block(matchDeleteCheck(id), function () {
    verifyCheckExists(id);
  });
  updateCheck(x.id);
  updateCheck(x.id);
  const e_upd = waitForCheckUpdated(id);
  block(matchDeleteCheck(id), function () {
    verifyCheckUpdated(id);
  });
  deleteCheck(x.id);
  const e_del = waitForCheckDeleted(id);
  block(matchAddCheck(id), function () {
    verifyCheckDoesNotExist(id);
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

bthread("CronLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addCron(x.id);
  const e_add = waitForCronAdded(id);
  block(matchDeleteCron(id), function () {
    verifyCronExists(id);
  });
  updateCron(x.id);
  updateCron(x.id);
  const e_upd = waitForCronUpdated(id);
  block(matchDeleteCron(id), function () {
    verifyCronUpdated(id);
  });
  deleteCron(x.id);
  const e_del = waitForCronDeleted(id);
  block(matchAddCron(id), function () {
    verifyCronDoesNotExist(id);
  });
});

bthread("DeadlineLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDeadline(x.id);
  const e_add = waitForDeadlineAdded(id);
  block(matchDeleteDeadline(id), function () {
    verifyDeadlineExists(id);
  });
  updateDeadline(x.id);
  updateDeadline(x.id);
  const e_upd = waitForDeadlineUpdated(id);
  block(matchDeleteDeadline(id), function () {
    verifyDeadlineUpdated(id);
  });
  deleteDeadline(x.id);
  const e_del = waitForDeadlineDeleted(id);
  block(matchAddDeadline(id), function () {
    verifyDeadlineDoesNotExist(id);
  });
});

bthread("DeleteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDelete(x.id);
  const e_add = waitForDeleteAdded(id);
  block(matchDeleteDelete(id), function () {
    verifyDeleteExists(id);
  });
  updateDelete(x.id);
  updateDelete(x.id);
  const e_upd = waitForDeleteUpdated(id);
  block(matchDeleteDelete(id), function () {
    verifyDeleteUpdated(id);
  });
  deleteDelete(x.id);
  const e_del = waitForDeleteDeleted(id);
  block(matchAddDelete(id), function () {
    verifyDeleteDoesNotExist(id);
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

bthread("DiffpatchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addDiffpatch(x.id);
  const e_add = waitForDiffpatchAdded(id);
  block(matchDeleteDiffpatch(id), function () {
    verifyDiffpatchExists(id);
  });
  updateDiffpatch(x.id);
  updateDiffpatch(x.id);
  const e_upd = waitForDiffpatchUpdated(id);
  block(matchDeleteDiffpatch(id), function () {
    verifyDiffpatchUpdated(id);
  });
  deleteDiffpatch(x.id);
  const e_del = waitForDiffpatchDeleted(id);
  block(matchAddDiffpatch(id), function () {
    verifyDiffpatchDoesNotExist(id);
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

bthread("EditorconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addEditorconfig(x.id);
  const e_add = waitForEditorconfigAdded(id);
  block(matchDeleteEditorconfig(id), function () {
    verifyEditorconfigExists(id);
  });
  updateEditorconfig(x.id);
  updateEditorconfig(x.id);
  const e_upd = waitForEditorconfigUpdated(id);
  block(matchDeleteEditorconfig(id), function () {
    verifyEditorconfigUpdated(id);
  });
  deleteEditorconfig(x.id);
  const e_del = waitForEditorconfigDeleted(id);
  block(matchAddEditorconfig(id), function () {
    verifyEditorconfigDoesNotExist(id);
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

bthread("GpgkeytokenLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGpgkeytoken(x.id);
  const e_add = waitForGpgkeytokenAdded(id);
  block(matchDeleteGpgkeytoken(id), function () {
    verifyGpgkeytokenExists(id);
  });
  updateGpgkeytoken(x.id);
  updateGpgkeytoken(x.id);
  const e_upd = waitForGpgkeytokenUpdated(id);
  block(matchDeleteGpgkeytoken(id), function () {
    verifyGpgkeytokenUpdated(id);
  });
  deleteGpgkeytoken(x.id);
  const e_del = waitForGpgkeytokenDeleted(id);
  block(matchAddGpgkeytoken(id), function () {
    verifyGpgkeytokenDoesNotExist(id);
  });
});

bthread("GpgkeyverifyLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addGpgkeyverify(x.id);
  const e_add = waitForGpgkeyverifyAdded(id);
  block(matchDeleteGpgkeyverify(id), function () {
    verifyGpgkeyverifyExists(id);
  });
  updateGpgkeyverify(x.id);
  updateGpgkeyverify(x.id);
  const e_upd = waitForGpgkeyverifyUpdated(id);
  block(matchDeleteGpgkeyverify(id), function () {
    verifyGpgkeyverifyUpdated(id);
  });
  deleteGpgkeyverify(x.id);
  const e_del = waitForGpgkeyverifyDeleted(id);
  block(matchAddGpgkeyverify(id), function () {
    verifyGpgkeyverifyDoesNotExist(id);
  });
});

bthread("HeatmapLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addHeatmap(x.id);
  const e_add = waitForHeatmapAdded(id);
  block(matchDeleteHeatmap(id), function () {
    verifyHeatmapExists(id);
  });
  updateHeatmap(x.id);
  updateHeatmap(x.id);
  const e_upd = waitForHeatmapUpdated(id);
  block(matchDeleteHeatmap(id), function () {
    verifyHeatmapUpdated(id);
  });
  deleteHeatmap(x.id);
  const e_del = waitForHeatmapDeleted(id);
  block(matchAddHeatmap(id), function () {
    verifyHeatmapDoesNotExist(id);
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

bthread("InboxLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addInbox(x.id);
  const e_add = waitForInboxAdded(id);
  block(matchDeleteInbox(id), function () {
    verifyInboxExists(id);
  });
  updateInbox(x.id);
  updateInbox(x.id);
  const e_upd = waitForInboxUpdated(id);
  block(matchDeleteInbox(id), function () {
    verifyInboxUpdated(id);
  });
  deleteInbox(x.id);
  const e_del = waitForInboxDeleted(id);
  block(matchAddInbox(id), function () {
    verifyInboxDoesNotExist(id);
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

bthread("IssueconfigLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssueconfig(x.id);
  const e_add = waitForIssueconfigAdded(id);
  block(matchDeleteIssueconfig(id), function () {
    verifyIssueconfigExists(id);
  });
  updateIssueconfig(x.id);
  updateIssueconfig(x.id);
  const e_upd = waitForIssueconfigUpdated(id);
  block(matchDeleteIssueconfig(id), function () {
    verifyIssueconfigUpdated(id);
  });
  deleteIssueconfig(x.id);
  const e_del = waitForIssueconfigDeleted(id);
  block(matchAddIssueconfig(id), function () {
    verifyIssueconfigDoesNotExist(id);
  });
});

bthread("IssuetemplateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addIssuetemplate(x.id);
  const e_add = waitForIssuetemplateAdded(id);
  block(matchDeleteIssuetemplate(id), function () {
    verifyIssuetemplateExists(id);
  });
  updateIssuetemplate(x.id);
  updateIssuetemplate(x.id);
  const e_upd = waitForIssuetemplateUpdated(id);
  block(matchDeleteIssuetemplate(id), function () {
    verifyIssuetemplateUpdated(id);
  });
  deleteIssuetemplate(x.id);
  const e_del = waitForIssuetemplateDeleted(id);
  block(matchAddIssuetemplate(id), function () {
    verifyIssuetemplateDoesNotExist(id);
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

bthread("MarkupLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMarkup(x.id);
  const e_add = waitForMarkupAdded(id);
  block(matchDeleteMarkup(id), function () {
    verifyMarkupExists(id);
  });
  updateMarkup(x.id);
  updateMarkup(x.id);
  const e_upd = waitForMarkupUpdated(id);
  block(matchDeleteMarkup(id), function () {
    verifyMarkupUpdated(id);
  });
  deleteMarkup(x.id);
  const e_del = waitForMarkupDeleted(id);
  block(matchAddMarkup(id), function () {
    verifyMarkupDoesNotExist(id);
  });
});

bthread("MediaLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMedia(x.id);
  const e_add = waitForMediaAdded(id);
  block(matchDeleteMedia(id), function () {
    verifyMediaExists(id);
  });
  updateMedia(x.id);
  updateMedia(x.id);
  const e_upd = waitForMediaUpdated(id);
  block(matchDeleteMedia(id), function () {
    verifyMediaUpdated(id);
  });
  deleteMedia(x.id);
  const e_del = waitForMediaDeleted(id);
  block(matchAddMedia(id), function () {
    verifyMediaDoesNotExist(id);
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

bthread("MigrateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMigrate(x.id);
  const e_add = waitForMigrateAdded(id);
  block(matchDeleteMigrate(id), function () {
    verifyMigrateExists(id);
  });
  updateMigrate(x.id);
  updateMigrate(x.id);
  const e_upd = waitForMigrateUpdated(id);
  block(matchDeleteMigrate(id), function () {
    verifyMigrateUpdated(id);
  });
  deleteMigrate(x.id);
  const e_del = waitForMigrateDeleted(id);
  block(matchAddMigrate(id), function () {
    verifyMigrateDoesNotExist(id);
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

bthread("MirrorsyncLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addMirrorsync(x.id);
  const e_add = waitForMirrorsyncAdded(id);
  block(matchDeleteMirrorsync(id), function () {
    verifyMirrorsyncExists(id);
  });
  updateMirrorsync(x.id);
  updateMirrorsync(x.id);
  const e_upd = waitForMirrorsyncUpdated(id);
  block(matchDeleteMirrorsync(id), function () {
    verifyMirrorsyncUpdated(id);
  });
  deleteMirrorsync(x.id);
  const e_del = waitForMirrorsyncDeleted(id);
  block(matchAddMirrorsync(id), function () {
    verifyMirrorsyncDoesNotExist(id);
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

bthread("NewpinallowedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNewpinallowed(x.id);
  const e_add = waitForNewpinallowedAdded(id);
  block(matchDeleteNewpinallowed(id), function () {
    verifyNewpinallowedExists(id);
  });
  updateNewpinallowed(x.id);
  updateNewpinallowed(x.id);
  const e_upd = waitForNewpinallowedUpdated(id);
  block(matchDeleteNewpinallowed(id), function () {
    verifyNewpinallowedUpdated(id);
  });
  deleteNewpinallowed(x.id);
  const e_del = waitForNewpinallowedDeleted(id);
  block(matchAddNewpinallowed(id), function () {
    verifyNewpinallowedDoesNotExist(id);
  });
});

bthread("NodeinfoLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNodeinfo(x.id);
  const e_add = waitForNodeinfoAdded(id);
  block(matchDeleteNodeinfo(id), function () {
    verifyNodeinfoExists(id);
  });
  updateNodeinfo(x.id);
  updateNodeinfo(x.id);
  const e_upd = waitForNodeinfoUpdated(id);
  block(matchDeleteNodeinfo(id), function () {
    verifyNodeinfoUpdated(id);
  });
  deleteNodeinfo(x.id);
  const e_del = waitForNodeinfoDeleted(id);
  block(matchAddNodeinfo(id), function () {
    verifyNodeinfoDoesNotExist(id);
  });
});

bthread("NoteLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addNote(x.id);
  const e_add = waitForNoteAdded(id);
  block(matchDeleteNote(id), function () {
    verifyNoteExists(id);
  });
  updateNote(x.id);
  updateNote(x.id);
  const e_upd = waitForNoteUpdated(id);
  block(matchDeleteNote(id), function () {
    verifyNoteUpdated(id);
  });
  deleteNote(x.id);
  const e_del = waitForNoteDeleted(id);
  block(matchAddNote(id), function () {
    verifyNoteDoesNotExist(id);
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

bthread("Oauth2Lifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addOauth2(x.id);
  const e_add = waitForOauth2Added(id);
  block(matchDeleteOauth2(id), function () {
    verifyOauth2Exists(id);
  });
  updateOauth2(x.id);
  updateOauth2(x.id);
  const e_upd = waitForOauth2Updated(id);
  block(matchDeleteOauth2(id), function () {
    verifyOauth2Updated(id);
  });
  deleteOauth2(x.id);
  const e_del = waitForOauth2Deleted(id);
  block(matchAddOauth2(id), function () {
    verifyOauth2DoesNotExist(id);
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

bthread("PinLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPin(x.id);
  const e_add = waitForPinAdded(id);
  block(matchDeletePin(id), function () {
    verifyPinExists(id);
  });
  updatePin(x.id);
  updatePin(x.id);
  const e_upd = waitForPinUpdated(id);
  block(matchDeletePin(id), function () {
    verifyPinUpdated(id);
  });
  deletePin(x.id);
  const e_del = waitForPinDeleted(id);
  block(matchAddPin(id), function () {
    verifyPinDoesNotExist(id);
  });
});

bthread("PinnedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPinned(x.id);
  const e_add = waitForPinnedAdded(id);
  block(matchDeletePinned(id), function () {
    verifyPinnedExists(id);
  });
  updatePinned(x.id);
  updatePinned(x.id);
  const e_upd = waitForPinnedUpdated(id);
  block(matchDeletePinned(id), function () {
    verifyPinnedUpdated(id);
  });
  deletePinned(x.id);
  const e_del = waitForPinnedDeleted(id);
  block(matchAddPinned(id), function () {
    verifyPinnedDoesNotExist(id);
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

bthread("PushmirrorLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPushmirror(x.id);
  const e_add = waitForPushmirrorAdded(id);
  block(matchDeletePushmirror(id), function () {
    verifyPushmirrorExists(id);
  });
  updatePushmirror(x.id);
  updatePushmirror(x.id);
  const e_upd = waitForPushmirrorUpdated(id);
  block(matchDeletePushmirror(id), function () {
    verifyPushmirrorUpdated(id);
  });
  deletePushmirror(x.id);
  const e_del = waitForPushmirrorDeleted(id);
  block(matchAddPushmirror(id), function () {
    verifyPushmirrorDoesNotExist(id);
  });
});

bthread("PushmirrorssyncLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addPushmirrorssync(x.id);
  const e_add = waitForPushmirrorssyncAdded(id);
  block(matchDeletePushmirrorssync(id), function () {
    verifyPushmirrorssyncExists(id);
  });
  updatePushmirrorssync(x.id);
  updatePushmirrorssync(x.id);
  const e_upd = waitForPushmirrorssyncUpdated(id);
  block(matchDeletePushmirrorssync(id), function () {
    verifyPushmirrorssyncUpdated(id);
  });
  deletePushmirrorssync(x.id);
  const e_del = waitForPushmirrorssyncDeleted(id);
  block(matchAddPushmirrorssync(id), function () {
    verifyPushmirrorssyncDoesNotExist(id);
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

bthread("RejectLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReject(x.id);
  const e_add = waitForRejectAdded(id);
  block(matchDeleteReject(id), function () {
    verifyRejectExists(id);
  });
  updateReject(x.id);
  updateReject(x.id);
  const e_upd = waitForRejectUpdated(id);
  block(matchDeleteReject(id), function () {
    verifyRejectUpdated(id);
  });
  deleteReject(x.id);
  const e_del = waitForRejectDeleted(id);
  block(matchAddReject(id), function () {
    verifyRejectDoesNotExist(id);
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

bthread("ReviewerLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addReviewer(x.id);
  const e_add = waitForReviewerAdded(id);
  block(matchDeleteReviewer(id), function () {
    verifyReviewerExists(id);
  });
  updateReviewer(x.id);
  updateReviewer(x.id);
  const e_upd = waitForReviewerUpdated(id);
  block(matchDeleteReviewer(id), function () {
    verifyReviewerUpdated(id);
  });
  deleteReviewer(x.id);
  const e_del = waitForReviewerDeleted(id);
  block(matchAddReviewer(id), function () {
    verifyReviewerDoesNotExist(id);
  });
});

bthread("RevisionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addRevision(x.id);
  const e_add = waitForRevisionAdded(id);
  block(matchDeleteRevision(id), function () {
    verifyRevisionExists(id);
  });
  updateRevision(x.id);
  updateRevision(x.id);
  const e_upd = waitForRevisionUpdated(id);
  block(matchDeleteRevision(id), function () {
    verifyRevisionUpdated(id);
  });
  deleteRevision(x.id);
  const e_del = waitForRevisionDeleted(id);
  block(matchAddRevision(id), function () {
    verifyRevisionDoesNotExist(id);
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

bthread("SigningkeygpgLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addSigningkeygpg(x.id);
  const e_add = waitForSigningkeygpgAdded(id);
  block(matchDeleteSigningkeygpg(id), function () {
    verifySigningkeygpgExists(id);
  });
  updateSigningkeygpg(x.id);
  updateSigningkeygpg(x.id);
  const e_upd = waitForSigningkeygpgUpdated(id);
  block(matchDeleteSigningkeygpg(id), function () {
    verifySigningkeygpgUpdated(id);
  });
  deleteSigningkeygpg(x.id);
  const e_del = waitForSigningkeygpgDeleted(id);
  block(matchAddSigningkeygpg(id), function () {
    verifySigningkeygpgDoesNotExist(id);
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

bthread("StopwatchLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStopwatch(x.id);
  const e_add = waitForStopwatchAdded(id);
  block(matchDeleteStopwatch(id), function () {
    verifyStopwatchExists(id);
  });
  updateStopwatch(x.id);
  updateStopwatch(x.id);
  const e_upd = waitForStopwatchUpdated(id);
  block(matchDeleteStopwatch(id), function () {
    verifyStopwatchUpdated(id);
  });
  deleteStopwatch(x.id);
  const e_del = waitForStopwatchDeleted(id);
  block(matchAddStopwatch(id), function () {
    verifyStopwatchDoesNotExist(id);
  });
});

bthread("StopwatcheLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addStopwatche(x.id);
  const e_add = waitForStopwatcheAdded(id);
  block(matchDeleteStopwatche(id), function () {
    verifyStopwatcheExists(id);
  });
  updateStopwatche(x.id);
  updateStopwatche(x.id);
  const e_upd = waitForStopwatcheUpdated(id);
  block(matchDeleteStopwatche(id), function () {
    verifyStopwatcheUpdated(id);
  });
  deleteStopwatche(x.id);
  const e_del = waitForStopwatcheDeleted(id);
  block(matchAddStopwatche(id), function () {
    verifyStopwatcheDoesNotExist(id);
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

bthread("TagprotectionLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTagprotection(x.id);
  const e_add = waitForTagprotectionAdded(id);
  block(matchDeleteTagprotection(id), function () {
    verifyTagprotectionExists(id);
  });
  updateTagprotection(x.id);
  updateTagprotection(x.id);
  const e_upd = waitForTagprotectionUpdated(id);
  block(matchDeleteTagprotection(id), function () {
    verifyTagprotectionUpdated(id);
  });
  deleteTagprotection(x.id);
  const e_del = waitForTagprotectionDeleted(id);
  block(matchAddTagprotection(id), function () {
    verifyTagprotectionDoesNotExist(id);
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

bthread("TimeLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addTime(x.id);
  const e_add = waitForTimeAdded(id);
  block(matchDeleteTime(id), function () {
    verifyTimeExists(id);
  });
  updateTime(x.id);
  updateTime(x.id);
  const e_upd = waitForTimeUpdated(id);
  block(matchDeleteTime(id), function () {
    verifyTimeUpdated(id);
  });
  deleteTime(x.id);
  const e_del = waitForTimeDeleted(id);
  block(matchAddTime(id), function () {
    verifyTimeDoesNotExist(id);
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

bthread("UiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUi(x.id);
  const e_add = waitForUiAdded(id);
  block(matchDeleteUi(id), function () {
    verifyUiExists(id);
  });
  updateUi(x.id);
  updateUi(x.id);
  const e_upd = waitForUiUpdated(id);
  block(matchDeleteUi(id), function () {
    verifyUiUpdated(id);
  });
  deleteUi(x.id);
  const e_del = waitForUiDeleted(id);
  block(matchAddUi(id), function () {
    verifyUiDoesNotExist(id);
  });
});

bthread("UnadoptedLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUnadopted(x.id);
  const e_add = waitForUnadoptedAdded(id);
  block(matchDeleteUnadopted(id), function () {
    verifyUnadoptedExists(id);
  });
  updateUnadopted(x.id);
  updateUnadopted(x.id);
  const e_upd = waitForUnadoptedUpdated(id);
  block(matchDeleteUnadopted(id), function () {
    verifyUnadoptedUpdated(id);
  });
  deleteUnadopted(x.id);
  const e_del = waitForUnadoptedDeleted(id);
  block(matchAddUnadopted(id), function () {
    verifyUnadoptedDoesNotExist(id);
  });
});

bthread("UndismissalLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUndismissal(x.id);
  const e_add = waitForUndismissalAdded(id);
  block(matchDeleteUndismissal(id), function () {
    verifyUndismissalExists(id);
  });
  updateUndismissal(x.id);
  updateUndismissal(x.id);
  const e_upd = waitForUndismissalUpdated(id);
  block(matchDeleteUndismissal(id), function () {
    verifyUndismissalUpdated(id);
  });
  deleteUndismissal(x.id);
  const e_del = waitForUndismissalDeleted(id);
  block(matchAddUndismissal(id), function () {
    verifyUndismissalDoesNotExist(id);
  });
});

bthread("UpdateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUpdate(x.id);
  const e_add = waitForUpdateAdded(id);
  block(matchDeleteUpdate(id), function () {
    verifyUpdateExists(id);
  });
  updateUpdate(x.id);
  updateUpdate(x.id);
  const e_upd = waitForUpdateUpdated(id);
  block(matchDeleteUpdate(id), function () {
    verifyUpdateUpdated(id);
  });
  deleteUpdate(x.id);
  const e_del = waitForUpdateDeleted(id);
  block(matchAddUpdate(id), function () {
    verifyUpdateDoesNotExist(id);
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

bthread("UseridLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addUserid(x.id);
  const e_add = waitForUseridAdded(id);
  block(matchDeleteUserid(id), function () {
    verifyUseridExists(id);
  });
  updateUserid(x.id);
  updateUserid(x.id);
  const e_upd = waitForUseridUpdated(id);
  block(matchDeleteUserid(id), function () {
    verifyUseridUpdated(id);
  });
  deleteUserid(x.id);
  const e_del = waitForUseridDeleted(id);
  block(matchAddUserid(id), function () {
    verifyUseridDoesNotExist(id);
  });
});

bthread("ValidateLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addValidate(x.id);
  const e_add = waitForValidateAdded(id);
  block(matchDeleteValidate(id), function () {
    verifyValidateExists(id);
  });
  updateValidate(x.id);
  updateValidate(x.id);
  const e_upd = waitForValidateUpdated(id);
  block(matchDeleteValidate(id), function () {
    verifyValidateUpdated(id);
  });
  deleteValidate(x.id);
  const e_del = waitForValidateDeleted(id);
  block(matchAddValidate(id), function () {
    verifyValidateDoesNotExist(id);
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

bthread("WikiLifecycle", function () {
  const x = pick([{id: "1001"}, {id: "1002"}]);
  const id = canonKey(x.id);
  addWiki(x.id);
  const e_add = waitForWikiAdded(id);
  block(matchDeleteWiki(id), function () {
    verifyWikiExists(id);
  });
  updateWiki(x.id);
  updateWiki(x.id);
  const e_upd = waitForWikiUpdated(id);
  block(matchDeleteWiki(id), function () {
    verifyWikiUpdated(id);
  });
  deleteWiki(x.id);
  const e_del = waitForWikiDeleted(id);
  block(matchAddWiki(id), function () {
    verifyWikiDoesNotExist(id);
  });
});

// ===== NONDET VARIANTS =====

bthread("Accept nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAccept(x.id);
  for (var i=0; i<steps; i++) {
    updateAccept(x.id);
  }
  if (pick([true,false])) { deleteAccept(x.id); }
  verifyAcceptExists(x.id);
  verifyAcceptUpdated(x.id);
});

bthread("Accept nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAccept(a.id);
  block(matchAddAccept(a.id, ANY), function () {});
  addAccept(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addActivity(a.id);
  block(matchAddActivity(a.id, ANY), function () {});
  addActivity(b.id);
});

bthread("Activitypub nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addActivitypub(x.id);
  for (var i=0; i<steps; i++) {
    updateActivitypub(x.id);
  }
  if (pick([true,false])) { deleteActivitypub(x.id); }
  verifyActivitypubExists(x.id);
  verifyActivitypubUpdated(x.id);
});

bthread("Activitypub nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addActivitypub(a.id);
  block(matchAddActivitypub(a.id, ANY), function () {});
  addActivitypub(b.id);
});

bthread("Admin nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAdmin(x.id);
  for (var i=0; i<steps; i++) {
    updateAdmin(x.id);
  }
  if (pick([true,false])) { deleteAdmin(x.id); }
  verifyAdminExists(x.id);
  verifyAdminUpdated(x.id);
});

bthread("Admin nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAdmin(a.id);
  block(matchAddAdmin(a.id, ANY), function () {});
  addAdmin(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApi(a.id);
  block(matchAddApi(a.id, ANY), function () {});
  addApi(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addApplication(a.id);
  block(matchAddApplication(a.id, ANY), function () {});
  addApplication(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addArchive(a.id);
  block(matchAddArchive(a.id, ANY), function () {});
  addArchive(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAssignee(a.id);
  block(matchAddAssignee(a.id, ANY), function () {});
  addAssignee(b.id);
});

bthread("Attachment nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAttachment(x.id);
  for (var i=0; i<steps; i++) {
    updateAttachment(x.id);
  }
  if (pick([true,false])) { deleteAttachment(x.id); }
  verifyAttachmentExists(x.id);
  verifyAttachmentUpdated(x.id);
});

bthread("Attachment nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAttachment(a.id);
  block(matchAddAttachment(a.id, ANY), function () {});
  addAttachment(b.id);
});

bthread("Avatar nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addAvatar(x.id);
  for (var i=0; i<steps; i++) {
    updateAvatar(x.id);
  }
  if (pick([true,false])) { deleteAvatar(x.id); }
  verifyAvatarExists(x.id);
  verifyAvatarUpdated(x.id);
});

bthread("Avatar nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addAvatar(a.id);
  block(matchAddAvatar(a.id, ANY), function () {});
  addAvatar(b.id);
});

bthread("Badge nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBadge(x.id);
  for (var i=0; i<steps; i++) {
    updateBadge(x.id);
  }
  if (pick([true,false])) { deleteBadge(x.id); }
  verifyBadgeExists(x.id);
  verifyBadgeUpdated(x.id);
});

bthread("Badge nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBadge(a.id);
  block(matchAddBadge(a.id, ANY), function () {});
  addBadge(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBlock(a.id);
  block(matchAddBlock(a.id, ANY), function () {});
  addBlock(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBranche(a.id);
  block(matchAddBranche(a.id, ANY), function () {});
  addBranche(b.id);
});

bthread("Branchprotection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addBranchprotection(x.id);
  for (var i=0; i<steps; i++) {
    updateBranchprotection(x.id);
  }
  if (pick([true,false])) { deleteBranchprotection(x.id); }
  verifyBranchprotectionExists(x.id);
  verifyBranchprotectionUpdated(x.id);
});

bthread("Branchprotection nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addBranchprotection(a.id);
  block(matchAddBranchprotection(a.id, ANY), function () {});
  addBranchprotection(b.id);
});

bthread("Check nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCheck(x.id);
  for (var i=0; i<steps; i++) {
    updateCheck(x.id);
  }
  if (pick([true,false])) { deleteCheck(x.id); }
  verifyCheckExists(x.id);
  verifyCheckUpdated(x.id);
});

bthread("Check nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCheck(a.id);
  block(matchAddCheck(a.id, ANY), function () {});
  addCheck(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCollaborator(a.id);
  block(matchAddCollaborator(a.id, ANY), function () {});
  addCollaborator(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCommit(a.id);
  block(matchAddCommit(a.id, ANY), function () {});
  addCommit(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCompare(a.id);
  block(matchAddCompare(a.id, ANY), function () {});
  addCompare(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addContent(a.id);
  block(matchAddContent(a.id, ANY), function () {});
  addContent(b.id);
});

bthread("Cron nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addCron(x.id);
  for (var i=0; i<steps; i++) {
    updateCron(x.id);
  }
  if (pick([true,false])) { deleteCron(x.id); }
  verifyCronExists(x.id);
  verifyCronUpdated(x.id);
});

bthread("Cron nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addCron(a.id);
  block(matchAddCron(a.id, ANY), function () {});
  addCron(b.id);
});

bthread("Deadline nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDeadline(x.id);
  for (var i=0; i<steps; i++) {
    updateDeadline(x.id);
  }
  if (pick([true,false])) { deleteDeadline(x.id); }
  verifyDeadlineExists(x.id);
  verifyDeadlineUpdated(x.id);
});

bthread("Deadline nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDeadline(a.id);
  block(matchAddDeadline(a.id, ANY), function () {});
  addDeadline(b.id);
});

bthread("Delete nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDelete(x.id);
  for (var i=0; i<steps; i++) {
    updateDelete(x.id);
  }
  if (pick([true,false])) { deleteDelete(x.id); }
  verifyDeleteExists(x.id);
  verifyDeleteUpdated(x.id);
});

bthread("Delete nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDelete(a.id);
  block(matchAddDelete(a.id, ANY), function () {});
  addDelete(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDependency(a.id);
  block(matchAddDependency(a.id, ANY), function () {});
  addDependency(b.id);
});

bthread("Diffpatch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addDiffpatch(x.id);
  for (var i=0; i<steps; i++) {
    updateDiffpatch(x.id);
  }
  if (pick([true,false])) { deleteDiffpatch(x.id); }
  verifyDiffpatchExists(x.id);
  verifyDiffpatchUpdated(x.id);
});

bthread("Diffpatch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDiffpatch(a.id);
  block(matchAddDiffpatch(a.id, ANY), function () {});
  addDiffpatch(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addDismissal(a.id);
  block(matchAddDismissal(a.id, ANY), function () {});
  addDismissal(b.id);
});

bthread("Editorconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addEditorconfig(x.id);
  for (var i=0; i<steps; i++) {
    updateEditorconfig(x.id);
  }
  if (pick([true,false])) { deleteEditorconfig(x.id); }
  verifyEditorconfigExists(x.id);
  verifyEditorconfigUpdated(x.id);
});

bthread("Editorconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEditorconfig(a.id);
  block(matchAddEditorconfig(a.id, ANY), function () {});
  addEditorconfig(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addEmail(a.id);
  block(matchAddEmail(a.id, ANY), function () {});
  addEmail(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFeed(a.id);
  block(matchAddFeed(a.id, ANY), function () {});
  addFeed(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFollowing(a.id);
  block(matchAddFollowing(a.id, ANY), function () {});
  addFollowing(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addFork(a.id);
  block(matchAddFork(a.id, ANY), function () {});
  addFork(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGenerate(a.id);
  block(matchAddGenerate(a.id, ANY), function () {});
  addGenerate(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGit(a.id);
  block(matchAddGit(a.id, ANY), function () {});
  addGit(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGpgkey(a.id);
  block(matchAddGpgkey(a.id, ANY), function () {});
  addGpgkey(b.id);
});

bthread("Gpgkeytoken nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGpgkeytoken(x.id);
  for (var i=0; i<steps; i++) {
    updateGpgkeytoken(x.id);
  }
  if (pick([true,false])) { deleteGpgkeytoken(x.id); }
  verifyGpgkeytokenExists(x.id);
  verifyGpgkeytokenUpdated(x.id);
});

bthread("Gpgkeytoken nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGpgkeytoken(a.id);
  block(matchAddGpgkeytoken(a.id, ANY), function () {});
  addGpgkeytoken(b.id);
});

bthread("Gpgkeyverify nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addGpgkeyverify(x.id);
  for (var i=0; i<steps; i++) {
    updateGpgkeyverify(x.id);
  }
  if (pick([true,false])) { deleteGpgkeyverify(x.id); }
  verifyGpgkeyverifyExists(x.id);
  verifyGpgkeyverifyUpdated(x.id);
});

bthread("Gpgkeyverify nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addGpgkeyverify(a.id);
  block(matchAddGpgkeyverify(a.id, ANY), function () {});
  addGpgkeyverify(b.id);
});

bthread("Heatmap nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addHeatmap(x.id);
  for (var i=0; i<steps; i++) {
    updateHeatmap(x.id);
  }
  if (pick([true,false])) { deleteHeatmap(x.id); }
  verifyHeatmapExists(x.id);
  verifyHeatmapUpdated(x.id);
});

bthread("Heatmap nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addHeatmap(a.id);
  block(matchAddHeatmap(a.id, ANY), function () {});
  addHeatmap(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addHook(a.id);
  block(matchAddHook(a.id, ANY), function () {});
  addHook(b.id);
});

bthread("Inbox nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addInbox(x.id);
  for (var i=0; i<steps; i++) {
    updateInbox(x.id);
  }
  if (pick([true,false])) { deleteInbox(x.id); }
  verifyInboxExists(x.id);
  verifyInboxUpdated(x.id);
});

bthread("Inbox nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addInbox(a.id);
  block(matchAddInbox(a.id, ANY), function () {});
  addInbox(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIssue(a.id);
  block(matchAddIssue(a.id, ANY), function () {});
  addIssue(b.id);
});

bthread("Issueconfig nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIssueconfig(x.id);
  for (var i=0; i<steps; i++) {
    updateIssueconfig(x.id);
  }
  if (pick([true,false])) { deleteIssueconfig(x.id); }
  verifyIssueconfigExists(x.id);
  verifyIssueconfigUpdated(x.id);
});

bthread("Issueconfig nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIssueconfig(a.id);
  block(matchAddIssueconfig(a.id, ANY), function () {});
  addIssueconfig(b.id);
});

bthread("Issuetemplate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addIssuetemplate(x.id);
  for (var i=0; i<steps; i++) {
    updateIssuetemplate(x.id);
  }
  if (pick([true,false])) { deleteIssuetemplate(x.id); }
  verifyIssuetemplateExists(x.id);
  verifyIssuetemplateUpdated(x.id);
});

bthread("Issuetemplate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addIssuetemplate(a.id);
  block(matchAddIssuetemplate(a.id, ANY), function () {});
  addIssuetemplate(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLanguage(a.id);
  block(matchAddLanguage(a.id, ANY), function () {});
  addLanguage(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLatest(a.id);
  block(matchAddLatest(a.id, ANY), function () {});
  addLatest(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addLicens(a.id);
  block(matchAddLicens(a.id, ANY), function () {});
  addLicens(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMarkdown(a.id);
  block(matchAddMarkdown(a.id, ANY), function () {});
  addMarkdown(b.id);
});

bthread("Markup nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMarkup(x.id);
  for (var i=0; i<steps; i++) {
    updateMarkup(x.id);
  }
  if (pick([true,false])) { deleteMarkup(x.id); }
  verifyMarkupExists(x.id);
  verifyMarkupUpdated(x.id);
});

bthread("Markup nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMarkup(a.id);
  block(matchAddMarkup(a.id, ANY), function () {});
  addMarkup(b.id);
});

bthread("Media nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMedia(x.id);
  for (var i=0; i<steps; i++) {
    updateMedia(x.id);
  }
  if (pick([true,false])) { deleteMedia(x.id); }
  verifyMediaExists(x.id);
  verifyMediaUpdated(x.id);
});

bthread("Media nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMedia(a.id);
  block(matchAddMedia(a.id, ANY), function () {});
  addMedia(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMember(a.id);
  block(matchAddMember(a.id, ANY), function () {});
  addMember(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMergeupstream(a.id);
  block(matchAddMergeupstream(a.id, ANY), function () {});
  addMergeupstream(b.id);
});

bthread("Migrate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMigrate(x.id);
  for (var i=0; i<steps; i++) {
    updateMigrate(x.id);
  }
  if (pick([true,false])) { deleteMigrate(x.id); }
  verifyMigrateExists(x.id);
  verifyMigrateUpdated(x.id);
});

bthread("Migrate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMigrate(a.id);
  block(matchAddMigrate(a.id, ANY), function () {});
  addMigrate(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMilestone(a.id);
  block(matchAddMilestone(a.id, ANY), function () {});
  addMilestone(b.id);
});

bthread("Mirrorsync nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addMirrorsync(x.id);
  for (var i=0; i<steps; i++) {
    updateMirrorsync(x.id);
  }
  if (pick([true,false])) { deleteMirrorsync(x.id); }
  verifyMirrorsyncExists(x.id);
  verifyMirrorsyncUpdated(x.id);
});

bthread("Mirrorsync nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addMirrorsync(a.id);
  block(matchAddMirrorsync(a.id, ANY), function () {});
  addMirrorsync(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNew(a.id);
  block(matchAddNew(a.id, ANY), function () {});
  addNew(b.id);
});

bthread("Newpinallowed nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNewpinallowed(x.id);
  for (var i=0; i<steps; i++) {
    updateNewpinallowed(x.id);
  }
  if (pick([true,false])) { deleteNewpinallowed(x.id); }
  verifyNewpinallowedExists(x.id);
  verifyNewpinallowedUpdated(x.id);
});

bthread("Newpinallowed nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNewpinallowed(a.id);
  block(matchAddNewpinallowed(a.id, ANY), function () {});
  addNewpinallowed(b.id);
});

bthread("Nodeinfo nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNodeinfo(x.id);
  for (var i=0; i<steps; i++) {
    updateNodeinfo(x.id);
  }
  if (pick([true,false])) { deleteNodeinfo(x.id); }
  verifyNodeinfoExists(x.id);
  verifyNodeinfoUpdated(x.id);
});

bthread("Nodeinfo nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNodeinfo(a.id);
  block(matchAddNodeinfo(a.id, ANY), function () {});
  addNodeinfo(b.id);
});

bthread("Note nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addNote(x.id);
  for (var i=0; i<steps; i++) {
    updateNote(x.id);
  }
  if (pick([true,false])) { deleteNote(x.id); }
  verifyNoteExists(x.id);
  verifyNoteUpdated(x.id);
});

bthread("Note nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNote(a.id);
  block(matchAddNote(a.id, ANY), function () {});
  addNote(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addNotification(a.id);
  block(matchAddNotification(a.id, ANY), function () {});
  addNotification(b.id);
});

bthread("Oauth2 nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addOauth2(x.id);
  for (var i=0; i<steps; i++) {
    updateOauth2(x.id);
  }
  if (pick([true,false])) { deleteOauth2(x.id); }
  verifyOauth2Exists(x.id);
  verifyOauth2Updated(x.id);
});

bthread("Oauth2 nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOauth2(a.id);
  block(matchAddOauth2(a.id, ANY), function () {});
  addOauth2(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addOrg(a.id);
  block(matchAddOrg(a.id, ANY), function () {});
  addOrg(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPage(a.id);
  block(matchAddPage(a.id, ANY), function () {});
  addPage(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPermission(a.id);
  block(matchAddPermission(a.id, ANY), function () {});
  addPermission(b.id);
});

bthread("Pin nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPin(x.id);
  for (var i=0; i<steps; i++) {
    updatePin(x.id);
  }
  if (pick([true,false])) { deletePin(x.id); }
  verifyPinExists(x.id);
  verifyPinUpdated(x.id);
});

bthread("Pin nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPin(a.id);
  block(matchAddPin(a.id, ANY), function () {});
  addPin(b.id);
});

bthread("Pinned nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPinned(x.id);
  for (var i=0; i<steps; i++) {
    updatePinned(x.id);
  }
  if (pick([true,false])) { deletePinned(x.id); }
  verifyPinnedExists(x.id);
  verifyPinnedUpdated(x.id);
});

bthread("Pinned nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPinned(a.id);
  block(matchAddPinned(a.id, ANY), function () {});
  addPinned(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPriority(a.id);
  block(matchAddPriority(a.id, ANY), function () {});
  addPriority(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPublicmember(a.id);
  block(matchAddPublicmember(a.id, ANY), function () {});
  addPublicmember(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPull(a.id);
  block(matchAddPull(a.id, ANY), function () {});
  addPull(b.id);
});

bthread("Pushmirror nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPushmirror(x.id);
  for (var i=0; i<steps; i++) {
    updatePushmirror(x.id);
  }
  if (pick([true,false])) { deletePushmirror(x.id); }
  verifyPushmirrorExists(x.id);
  verifyPushmirrorUpdated(x.id);
});

bthread("Pushmirror nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPushmirror(a.id);
  block(matchAddPushmirror(a.id, ANY), function () {});
  addPushmirror(b.id);
});

bthread("Pushmirrorssync nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addPushmirrorssync(x.id);
  for (var i=0; i<steps; i++) {
    updatePushmirrorssync(x.id);
  }
  if (pick([true,false])) { deletePushmirrorssync(x.id); }
  verifyPushmirrorssyncExists(x.id);
  verifyPushmirrorssyncUpdated(x.id);
});

bthread("Pushmirrorssync nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addPushmirrorssync(a.id);
  block(matchAddPushmirrorssync(a.id, ANY), function () {});
  addPushmirrorssync(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReaction(a.id);
  block(matchAddReaction(a.id, ANY), function () {});
  addReaction(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRef(a.id);
  block(matchAddRef(a.id, ANY), function () {});
  addRef(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRegistrationtoken(a.id);
  block(matchAddRegistrationtoken(a.id, ANY), function () {});
  addRegistrationtoken(b.id);
});

bthread("Reject nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReject(x.id);
  for (var i=0; i<steps; i++) {
    updateReject(x.id);
  }
  if (pick([true,false])) { deleteReject(x.id); }
  verifyRejectExists(x.id);
  verifyRejectUpdated(x.id);
});

bthread("Reject nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReject(a.id);
  block(matchAddReject(a.id, ANY), function () {});
  addReject(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReleas(a.id);
  block(matchAddReleas(a.id, ANY), function () {});
  addReleas(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRename(a.id);
  block(matchAddRename(a.id, ANY), function () {});
  addRename(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRepo(a.id);
  block(matchAddRepo(a.id, ANY), function () {});
  addRepo(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRepository(a.id);
  block(matchAddRepository(a.id, ANY), function () {});
  addRepository(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRequestedreviewer(a.id);
  block(matchAddRequestedreviewer(a.id, ANY), function () {});
  addRequestedreviewer(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReview(a.id);
  block(matchAddReview(a.id, ANY), function () {});
  addReview(b.id);
});

bthread("Reviewer nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addReviewer(x.id);
  for (var i=0; i<steps; i++) {
    updateReviewer(x.id);
  }
  if (pick([true,false])) { deleteReviewer(x.id); }
  verifyReviewerExists(x.id);
  verifyReviewerUpdated(x.id);
});

bthread("Reviewer nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addReviewer(a.id);
  block(matchAddReviewer(a.id, ANY), function () {});
  addReviewer(b.id);
});

bthread("Revision nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addRevision(x.id);
  for (var i=0; i<steps; i++) {
    updateRevision(x.id);
  }
  if (pick([true,false])) { deleteRevision(x.id); }
  verifyRevisionExists(x.id);
  verifyRevisionUpdated(x.id);
});

bthread("Revision nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRevision(a.id);
  block(matchAddRevision(a.id, ANY), function () {});
  addRevision(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addRunner(a.id);
  block(matchAddRunner(a.id, ANY), function () {});
  addRunner(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSearch(a.id);
  block(matchAddSearch(a.id, ANY), function () {});
  addSearch(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSecret(a.id);
  block(matchAddSecret(a.id, ANY), function () {});
  addSecret(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSetting(a.id);
  block(matchAddSetting(a.id, ANY), function () {});
  addSetting(b.id);
});

bthread("Signingkeygpg nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addSigningkeygpg(x.id);
  for (var i=0; i<steps; i++) {
    updateSigningkeygpg(x.id);
  }
  if (pick([true,false])) { deleteSigningkeygpg(x.id); }
  verifySigningkeygpgExists(x.id);
  verifySigningkeygpgUpdated(x.id);
});

bthread("Signingkeygpg nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSigningkeygpg(a.id);
  block(matchAddSigningkeygpg(a.id, ANY), function () {});
  addSigningkeygpg(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStart(a.id);
  block(matchAddStart(a.id, ANY), function () {});
  addStart(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStop(a.id);
  block(matchAddStop(a.id, ANY), function () {});
  addStop(b.id);
});

bthread("Stopwatch nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStopwatch(x.id);
  for (var i=0; i<steps; i++) {
    updateStopwatch(x.id);
  }
  if (pick([true,false])) { deleteStopwatch(x.id); }
  verifyStopwatchExists(x.id);
  verifyStopwatchUpdated(x.id);
});

bthread("Stopwatch nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStopwatch(a.id);
  block(matchAddStopwatch(a.id, ANY), function () {});
  addStopwatch(b.id);
});

bthread("Stopwatche nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addStopwatche(x.id);
  for (var i=0; i<steps; i++) {
    updateStopwatche(x.id);
  }
  if (pick([true,false])) { deleteStopwatche(x.id); }
  verifyStopwatcheExists(x.id);
  verifyStopwatcheUpdated(x.id);
});

bthread("Stopwatche nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addStopwatche(a.id);
  block(matchAddStopwatche(a.id, ANY), function () {});
  addStopwatche(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addSubscription(a.id);
  block(matchAddSubscription(a.id, ANY), function () {});
  addSubscription(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTag(a.id);
  block(matchAddTag(a.id, ANY), function () {});
  addTag(b.id);
});

bthread("Tagprotection nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTagprotection(x.id);
  for (var i=0; i<steps; i++) {
    updateTagprotection(x.id);
  }
  if (pick([true,false])) { deleteTagprotection(x.id); }
  verifyTagprotectionExists(x.id);
  verifyTagprotectionUpdated(x.id);
});

bthread("Tagprotection nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTagprotection(a.id);
  block(matchAddTagprotection(a.id, ANY), function () {});
  addTagprotection(b.id);
});

bthread("Task nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addThread(a.id);
  block(matchAddThread(a.id, ANY), function () {});
  addThread(b.id);
});

bthread("Time nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addTime(x.id);
  for (var i=0; i<steps; i++) {
    updateTime(x.id);
  }
  if (pick([true,false])) { deleteTime(x.id); }
  verifyTimeExists(x.id);
  verifyTimeUpdated(x.id);
});

bthread("Time nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTime(a.id);
  block(matchAddTime(a.id, ANY), function () {});
  addTime(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTimeline(a.id);
  block(matchAddTimeline(a.id, ANY), function () {});
  addTimeline(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTopic(a.id);
  block(matchAddTopic(a.id, ANY), function () {});
  addTopic(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addTree(a.id);
  block(matchAddTree(a.id, ANY), function () {});
  addTree(b.id);
});

bthread("Ui nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUi(x.id);
  for (var i=0; i<steps; i++) {
    updateUi(x.id);
  }
  if (pick([true,false])) { deleteUi(x.id); }
  verifyUiExists(x.id);
  verifyUiUpdated(x.id);
});

bthread("Ui nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUi(a.id);
  block(matchAddUi(a.id, ANY), function () {});
  addUi(b.id);
});

bthread("Unadopted nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUnadopted(x.id);
  for (var i=0; i<steps; i++) {
    updateUnadopted(x.id);
  }
  if (pick([true,false])) { deleteUnadopted(x.id); }
  verifyUnadoptedExists(x.id);
  verifyUnadoptedUpdated(x.id);
});

bthread("Unadopted nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUnadopted(a.id);
  block(matchAddUnadopted(a.id, ANY), function () {});
  addUnadopted(b.id);
});

bthread("Undismissal nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUndismissal(x.id);
  for (var i=0; i<steps; i++) {
    updateUndismissal(x.id);
  }
  if (pick([true,false])) { deleteUndismissal(x.id); }
  verifyUndismissalExists(x.id);
  verifyUndismissalUpdated(x.id);
});

bthread("Undismissal nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUndismissal(a.id);
  block(matchAddUndismissal(a.id, ANY), function () {});
  addUndismissal(b.id);
});

bthread("Update nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUpdate(x.id);
  for (var i=0; i<steps; i++) {
    updateUpdate(x.id);
  }
  if (pick([true,false])) { deleteUpdate(x.id); }
  verifyUpdateExists(x.id);
  verifyUpdateUpdated(x.id);
});

bthread("Update nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUpdate(a.id);
  block(matchAddUpdate(a.id, ANY), function () {});
  addUpdate(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUser(a.id);
  block(matchAddUser(a.id, ANY), function () {});
  addUser(b.id);
});

bthread("Userid nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addUserid(x.id);
  for (var i=0; i<steps; i++) {
    updateUserid(x.id);
  }
  if (pick([true,false])) { deleteUserid(x.id); }
  verifyUseridExists(x.id);
  verifyUseridUpdated(x.id);
});

bthread("Userid nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addUserid(a.id);
  block(matchAddUserid(a.id, ANY), function () {});
  addUserid(b.id);
});

bthread("Validate nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addValidate(x.id);
  for (var i=0; i<steps; i++) {
    updateValidate(x.id);
  }
  if (pick([true,false])) { deleteValidate(x.id); }
  verifyValidateExists(x.id);
  verifyValidateUpdated(x.id);
});

bthread("Validate nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addValidate(a.id);
  block(matchAddValidate(a.id, ANY), function () {});
  addValidate(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addVariable(a.id);
  block(matchAddVariable(a.id, ANY), function () {});
  addVariable(b.id);
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
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addVersion(a.id);
  block(matchAddVersion(a.id, ANY), function () {});
  addVersion(b.id);
});

bthread("Wiki nondet variant – burst updates & optional delete", function () {
  const x = pick([{id: "1001"}]);
  const steps = pick([0,1,2,10]);
  addWiki(x.id);
  for (var i=0; i<steps; i++) {
    updateWiki(x.id);
  }
  if (pick([true,false])) { deleteWiki(x.id); }
  verifyWikiExists(x.id);
  verifyWikiUpdated(x.id);
});

bthread("Wiki nondet variant – uniqueness during parallel adds", function () {
  const ids = pick([[1,2],[10,11],[100,101]]);
  const a = { id: ids[0] };
  const b = { id: ids[1] };
  addWiki(a.id);
  block(matchAddWiki(a.id, ANY), function () {});
  addWiki(b.id);
});

// ===== PASSIVE ASSERTIONS =====

bthread("Accept create verification", function () {
  const e = waitForAnyAcceptAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccept(k), function () {
    verifyAcceptExists(k);
  });
});

bthread("Accept update verification", function () {
  const e = waitForAnyAcceptUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAccept(k), function () {
    verifyAcceptUpdated(k);
  });
});

bthread("Accept delete verification", function () {
  const e = waitForAnyAcceptDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAccept(k), function () {
    verifyAcceptDoesNotExist(k);
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

bthread("Activitypub create verification", function () {
  const e = waitForAnyActivitypubAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActivitypub(k), function () {
    verifyActivitypubExists(k);
  });
});

bthread("Activitypub update verification", function () {
  const e = waitForAnyActivitypubUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteActivitypub(k), function () {
    verifyActivitypubUpdated(k);
  });
});

bthread("Activitypub delete verification", function () {
  const e = waitForAnyActivitypubDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddActivitypub(k), function () {
    verifyActivitypubDoesNotExist(k);
  });
});

bthread("Admin create verification", function () {
  const e = waitForAnyAdminAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdmin(k), function () {
    verifyAdminExists(k);
  });
});

bthread("Admin update verification", function () {
  const e = waitForAnyAdminUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAdmin(k), function () {
    verifyAdminUpdated(k);
  });
});

bthread("Admin delete verification", function () {
  const e = waitForAnyAdminDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAdmin(k), function () {
    verifyAdminDoesNotExist(k);
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

bthread("Attachment create verification", function () {
  const e = waitForAnyAttachmentAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttachment(k), function () {
    verifyAttachmentExists(k);
  });
});

bthread("Attachment update verification", function () {
  const e = waitForAnyAttachmentUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAttachment(k), function () {
    verifyAttachmentUpdated(k);
  });
});

bthread("Attachment delete verification", function () {
  const e = waitForAnyAttachmentDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAttachment(k), function () {
    verifyAttachmentDoesNotExist(k);
  });
});

bthread("Avatar create verification", function () {
  const e = waitForAnyAvatarAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvatar(k), function () {
    verifyAvatarExists(k);
  });
});

bthread("Avatar update verification", function () {
  const e = waitForAnyAvatarUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteAvatar(k), function () {
    verifyAvatarUpdated(k);
  });
});

bthread("Avatar delete verification", function () {
  const e = waitForAnyAvatarDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddAvatar(k), function () {
    verifyAvatarDoesNotExist(k);
  });
});

bthread("Badge create verification", function () {
  const e = waitForAnyBadgeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBadge(k), function () {
    verifyBadgeExists(k);
  });
});

bthread("Badge update verification", function () {
  const e = waitForAnyBadgeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBadge(k), function () {
    verifyBadgeUpdated(k);
  });
});

bthread("Badge delete verification", function () {
  const e = waitForAnyBadgeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBadge(k), function () {
    verifyBadgeDoesNotExist(k);
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

bthread("Branchprotection create verification", function () {
  const e = waitForAnyBranchprotectionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBranchprotection(k), function () {
    verifyBranchprotectionExists(k);
  });
});

bthread("Branchprotection update verification", function () {
  const e = waitForAnyBranchprotectionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteBranchprotection(k), function () {
    verifyBranchprotectionUpdated(k);
  });
});

bthread("Branchprotection delete verification", function () {
  const e = waitForAnyBranchprotectionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddBranchprotection(k), function () {
    verifyBranchprotectionDoesNotExist(k);
  });
});

bthread("Check create verification", function () {
  const e = waitForAnyCheckAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCheck(k), function () {
    verifyCheckExists(k);
  });
});

bthread("Check update verification", function () {
  const e = waitForAnyCheckUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCheck(k), function () {
    verifyCheckUpdated(k);
  });
});

bthread("Check delete verification", function () {
  const e = waitForAnyCheckDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCheck(k), function () {
    verifyCheckDoesNotExist(k);
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

bthread("Cron create verification", function () {
  const e = waitForAnyCronAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCron(k), function () {
    verifyCronExists(k);
  });
});

bthread("Cron update verification", function () {
  const e = waitForAnyCronUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteCron(k), function () {
    verifyCronUpdated(k);
  });
});

bthread("Cron delete verification", function () {
  const e = waitForAnyCronDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddCron(k), function () {
    verifyCronDoesNotExist(k);
  });
});

bthread("Deadline create verification", function () {
  const e = waitForAnyDeadlineAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeadline(k), function () {
    verifyDeadlineExists(k);
  });
});

bthread("Deadline update verification", function () {
  const e = waitForAnyDeadlineUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDeadline(k), function () {
    verifyDeadlineUpdated(k);
  });
});

bthread("Deadline delete verification", function () {
  const e = waitForAnyDeadlineDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDeadline(k), function () {
    verifyDeadlineDoesNotExist(k);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDelete(k), function () {
    verifyDeleteExists(k);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDelete(k), function () {
    verifyDeleteUpdated(k);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDelete(k), function () {
    verifyDeleteDoesNotExist(k);
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

bthread("Diffpatch create verification", function () {
  const e = waitForAnyDiffpatchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDiffpatch(k), function () {
    verifyDiffpatchExists(k);
  });
});

bthread("Diffpatch update verification", function () {
  const e = waitForAnyDiffpatchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteDiffpatch(k), function () {
    verifyDiffpatchUpdated(k);
  });
});

bthread("Diffpatch delete verification", function () {
  const e = waitForAnyDiffpatchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddDiffpatch(k), function () {
    verifyDiffpatchDoesNotExist(k);
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

bthread("Editorconfig create verification", function () {
  const e = waitForAnyEditorconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEditorconfig(k), function () {
    verifyEditorconfigExists(k);
  });
});

bthread("Editorconfig update verification", function () {
  const e = waitForAnyEditorconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteEditorconfig(k), function () {
    verifyEditorconfigUpdated(k);
  });
});

bthread("Editorconfig delete verification", function () {
  const e = waitForAnyEditorconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddEditorconfig(k), function () {
    verifyEditorconfigDoesNotExist(k);
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

bthread("Gpgkeytoken create verification", function () {
  const e = waitForAnyGpgkeytokenAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGpgkeytoken(k), function () {
    verifyGpgkeytokenExists(k);
  });
});

bthread("Gpgkeytoken update verification", function () {
  const e = waitForAnyGpgkeytokenUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGpgkeytoken(k), function () {
    verifyGpgkeytokenUpdated(k);
  });
});

bthread("Gpgkeytoken delete verification", function () {
  const e = waitForAnyGpgkeytokenDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGpgkeytoken(k), function () {
    verifyGpgkeytokenDoesNotExist(k);
  });
});

bthread("Gpgkeyverify create verification", function () {
  const e = waitForAnyGpgkeyverifyAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGpgkeyverify(k), function () {
    verifyGpgkeyverifyExists(k);
  });
});

bthread("Gpgkeyverify update verification", function () {
  const e = waitForAnyGpgkeyverifyUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteGpgkeyverify(k), function () {
    verifyGpgkeyverifyUpdated(k);
  });
});

bthread("Gpgkeyverify delete verification", function () {
  const e = waitForAnyGpgkeyverifyDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddGpgkeyverify(k), function () {
    verifyGpgkeyverifyDoesNotExist(k);
  });
});

bthread("Heatmap create verification", function () {
  const e = waitForAnyHeatmapAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHeatmap(k), function () {
    verifyHeatmapExists(k);
  });
});

bthread("Heatmap update verification", function () {
  const e = waitForAnyHeatmapUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteHeatmap(k), function () {
    verifyHeatmapUpdated(k);
  });
});

bthread("Heatmap delete verification", function () {
  const e = waitForAnyHeatmapDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddHeatmap(k), function () {
    verifyHeatmapDoesNotExist(k);
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

bthread("Inbox create verification", function () {
  const e = waitForAnyInboxAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInbox(k), function () {
    verifyInboxExists(k);
  });
});

bthread("Inbox update verification", function () {
  const e = waitForAnyInboxUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteInbox(k), function () {
    verifyInboxUpdated(k);
  });
});

bthread("Inbox delete verification", function () {
  const e = waitForAnyInboxDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddInbox(k), function () {
    verifyInboxDoesNotExist(k);
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

bthread("Issueconfig create verification", function () {
  const e = waitForAnyIssueconfigAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssueconfig(k), function () {
    verifyIssueconfigExists(k);
  });
});

bthread("Issueconfig update verification", function () {
  const e = waitForAnyIssueconfigUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssueconfig(k), function () {
    verifyIssueconfigUpdated(k);
  });
});

bthread("Issueconfig delete verification", function () {
  const e = waitForAnyIssueconfigDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssueconfig(k), function () {
    verifyIssueconfigDoesNotExist(k);
  });
});

bthread("Issuetemplate create verification", function () {
  const e = waitForAnyIssuetemplateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetemplate(k), function () {
    verifyIssuetemplateExists(k);
  });
});

bthread("Issuetemplate update verification", function () {
  const e = waitForAnyIssuetemplateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteIssuetemplate(k), function () {
    verifyIssuetemplateUpdated(k);
  });
});

bthread("Issuetemplate delete verification", function () {
  const e = waitForAnyIssuetemplateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddIssuetemplate(k), function () {
    verifyIssuetemplateDoesNotExist(k);
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

bthread("Markup create verification", function () {
  const e = waitForAnyMarkupAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarkup(k), function () {
    verifyMarkupExists(k);
  });
});

bthread("Markup update verification", function () {
  const e = waitForAnyMarkupUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMarkup(k), function () {
    verifyMarkupUpdated(k);
  });
});

bthread("Markup delete verification", function () {
  const e = waitForAnyMarkupDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMarkup(k), function () {
    verifyMarkupDoesNotExist(k);
  });
});

bthread("Media create verification", function () {
  const e = waitForAnyMediaAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMedia(k), function () {
    verifyMediaExists(k);
  });
});

bthread("Media update verification", function () {
  const e = waitForAnyMediaUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMedia(k), function () {
    verifyMediaUpdated(k);
  });
});

bthread("Media delete verification", function () {
  const e = waitForAnyMediaDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMedia(k), function () {
    verifyMediaDoesNotExist(k);
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

bthread("Migrate create verification", function () {
  const e = waitForAnyMigrateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMigrate(k), function () {
    verifyMigrateExists(k);
  });
});

bthread("Migrate update verification", function () {
  const e = waitForAnyMigrateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMigrate(k), function () {
    verifyMigrateUpdated(k);
  });
});

bthread("Migrate delete verification", function () {
  const e = waitForAnyMigrateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMigrate(k), function () {
    verifyMigrateDoesNotExist(k);
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

bthread("Mirrorsync create verification", function () {
  const e = waitForAnyMirrorsyncAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMirrorsync(k), function () {
    verifyMirrorsyncExists(k);
  });
});

bthread("Mirrorsync update verification", function () {
  const e = waitForAnyMirrorsyncUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteMirrorsync(k), function () {
    verifyMirrorsyncUpdated(k);
  });
});

bthread("Mirrorsync delete verification", function () {
  const e = waitForAnyMirrorsyncDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddMirrorsync(k), function () {
    verifyMirrorsyncDoesNotExist(k);
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

bthread("Newpinallowed create verification", function () {
  const e = waitForAnyNewpinallowedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNewpinallowed(k), function () {
    verifyNewpinallowedExists(k);
  });
});

bthread("Newpinallowed update verification", function () {
  const e = waitForAnyNewpinallowedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNewpinallowed(k), function () {
    verifyNewpinallowedUpdated(k);
  });
});

bthread("Newpinallowed delete verification", function () {
  const e = waitForAnyNewpinallowedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNewpinallowed(k), function () {
    verifyNewpinallowedDoesNotExist(k);
  });
});

bthread("Nodeinfo create verification", function () {
  const e = waitForAnyNodeinfoAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNodeinfo(k), function () {
    verifyNodeinfoExists(k);
  });
});

bthread("Nodeinfo update verification", function () {
  const e = waitForAnyNodeinfoUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNodeinfo(k), function () {
    verifyNodeinfoUpdated(k);
  });
});

bthread("Nodeinfo delete verification", function () {
  const e = waitForAnyNodeinfoDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNodeinfo(k), function () {
    verifyNodeinfoDoesNotExist(k);
  });
});

bthread("Note create verification", function () {
  const e = waitForAnyNoteAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNote(k), function () {
    verifyNoteExists(k);
  });
});

bthread("Note update verification", function () {
  const e = waitForAnyNoteUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteNote(k), function () {
    verifyNoteUpdated(k);
  });
});

bthread("Note delete verification", function () {
  const e = waitForAnyNoteDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddNote(k), function () {
    verifyNoteDoesNotExist(k);
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

bthread("Oauth2 create verification", function () {
  const e = waitForAnyOauth2Added();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOauth2(k), function () {
    verifyOauth2Exists(k);
  });
});

bthread("Oauth2 update verification", function () {
  const e = waitForAnyOauth2Updated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteOauth2(k), function () {
    verifyOauth2Updated(k);
  });
});

bthread("Oauth2 delete verification", function () {
  const e = waitForAnyOauth2Deleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddOauth2(k), function () {
    verifyOauth2DoesNotExist(k);
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

bthread("Pin create verification", function () {
  const e = waitForAnyPinAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePin(k), function () {
    verifyPinExists(k);
  });
});

bthread("Pin update verification", function () {
  const e = waitForAnyPinUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePin(k), function () {
    verifyPinUpdated(k);
  });
});

bthread("Pin delete verification", function () {
  const e = waitForAnyPinDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPin(k), function () {
    verifyPinDoesNotExist(k);
  });
});

bthread("Pinned create verification", function () {
  const e = waitForAnyPinnedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePinned(k), function () {
    verifyPinnedExists(k);
  });
});

bthread("Pinned update verification", function () {
  const e = waitForAnyPinnedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePinned(k), function () {
    verifyPinnedUpdated(k);
  });
});

bthread("Pinned delete verification", function () {
  const e = waitForAnyPinnedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPinned(k), function () {
    verifyPinnedDoesNotExist(k);
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

bthread("Pushmirror create verification", function () {
  const e = waitForAnyPushmirrorAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushmirror(k), function () {
    verifyPushmirrorExists(k);
  });
});

bthread("Pushmirror update verification", function () {
  const e = waitForAnyPushmirrorUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushmirror(k), function () {
    verifyPushmirrorUpdated(k);
  });
});

bthread("Pushmirror delete verification", function () {
  const e = waitForAnyPushmirrorDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPushmirror(k), function () {
    verifyPushmirrorDoesNotExist(k);
  });
});

bthread("Pushmirrorssync create verification", function () {
  const e = waitForAnyPushmirrorssyncAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushmirrorssync(k), function () {
    verifyPushmirrorssyncExists(k);
  });
});

bthread("Pushmirrorssync update verification", function () {
  const e = waitForAnyPushmirrorssyncUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeletePushmirrorssync(k), function () {
    verifyPushmirrorssyncUpdated(k);
  });
});

bthread("Pushmirrorssync delete verification", function () {
  const e = waitForAnyPushmirrorssyncDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddPushmirrorssync(k), function () {
    verifyPushmirrorssyncDoesNotExist(k);
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

bthread("Reject create verification", function () {
  const e = waitForAnyRejectAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReject(k), function () {
    verifyRejectExists(k);
  });
});

bthread("Reject update verification", function () {
  const e = waitForAnyRejectUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReject(k), function () {
    verifyRejectUpdated(k);
  });
});

bthread("Reject delete verification", function () {
  const e = waitForAnyRejectDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReject(k), function () {
    verifyRejectDoesNotExist(k);
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

bthread("Reviewer create verification", function () {
  const e = waitForAnyReviewerAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReviewer(k), function () {
    verifyReviewerExists(k);
  });
});

bthread("Reviewer update verification", function () {
  const e = waitForAnyReviewerUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteReviewer(k), function () {
    verifyReviewerUpdated(k);
  });
});

bthread("Reviewer delete verification", function () {
  const e = waitForAnyReviewerDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddReviewer(k), function () {
    verifyReviewerDoesNotExist(k);
  });
});

bthread("Revision create verification", function () {
  const e = waitForAnyRevisionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRevision(k), function () {
    verifyRevisionExists(k);
  });
});

bthread("Revision update verification", function () {
  const e = waitForAnyRevisionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteRevision(k), function () {
    verifyRevisionUpdated(k);
  });
});

bthread("Revision delete verification", function () {
  const e = waitForAnyRevisionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddRevision(k), function () {
    verifyRevisionDoesNotExist(k);
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

bthread("Signingkeygpg create verification", function () {
  const e = waitForAnySigningkeygpgAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSigningkeygpg(k), function () {
    verifySigningkeygpgExists(k);
  });
});

bthread("Signingkeygpg update verification", function () {
  const e = waitForAnySigningkeygpgUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteSigningkeygpg(k), function () {
    verifySigningkeygpgUpdated(k);
  });
});

bthread("Signingkeygpg delete verification", function () {
  const e = waitForAnySigningkeygpgDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddSigningkeygpg(k), function () {
    verifySigningkeygpgDoesNotExist(k);
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

bthread("Stopwatch create verification", function () {
  const e = waitForAnyStopwatchAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStopwatch(k), function () {
    verifyStopwatchExists(k);
  });
});

bthread("Stopwatch update verification", function () {
  const e = waitForAnyStopwatchUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStopwatch(k), function () {
    verifyStopwatchUpdated(k);
  });
});

bthread("Stopwatch delete verification", function () {
  const e = waitForAnyStopwatchDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStopwatch(k), function () {
    verifyStopwatchDoesNotExist(k);
  });
});

bthread("Stopwatche create verification", function () {
  const e = waitForAnyStopwatcheAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStopwatche(k), function () {
    verifyStopwatcheExists(k);
  });
});

bthread("Stopwatche update verification", function () {
  const e = waitForAnyStopwatcheUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteStopwatche(k), function () {
    verifyStopwatcheUpdated(k);
  });
});

bthread("Stopwatche delete verification", function () {
  const e = waitForAnyStopwatcheDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddStopwatche(k), function () {
    verifyStopwatcheDoesNotExist(k);
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

bthread("Tagprotection create verification", function () {
  const e = waitForAnyTagprotectionAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTagprotection(k), function () {
    verifyTagprotectionExists(k);
  });
});

bthread("Tagprotection update verification", function () {
  const e = waitForAnyTagprotectionUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTagprotection(k), function () {
    verifyTagprotectionUpdated(k);
  });
});

bthread("Tagprotection delete verification", function () {
  const e = waitForAnyTagprotectionDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTagprotection(k), function () {
    verifyTagprotectionDoesNotExist(k);
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

bthread("Time create verification", function () {
  const e = waitForAnyTimeAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTime(k), function () {
    verifyTimeExists(k);
  });
});

bthread("Time update verification", function () {
  const e = waitForAnyTimeUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteTime(k), function () {
    verifyTimeUpdated(k);
  });
});

bthread("Time delete verification", function () {
  const e = waitForAnyTimeDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddTime(k), function () {
    verifyTimeDoesNotExist(k);
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

bthread("Ui create verification", function () {
  const e = waitForAnyUiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUi(k), function () {
    verifyUiExists(k);
  });
});

bthread("Ui update verification", function () {
  const e = waitForAnyUiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUi(k), function () {
    verifyUiUpdated(k);
  });
});

bthread("Ui delete verification", function () {
  const e = waitForAnyUiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUi(k), function () {
    verifyUiDoesNotExist(k);
  });
});

bthread("Unadopted create verification", function () {
  const e = waitForAnyUnadoptedAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnadopted(k), function () {
    verifyUnadoptedExists(k);
  });
});

bthread("Unadopted update verification", function () {
  const e = waitForAnyUnadoptedUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUnadopted(k), function () {
    verifyUnadoptedUpdated(k);
  });
});

bthread("Unadopted delete verification", function () {
  const e = waitForAnyUnadoptedDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUnadopted(k), function () {
    verifyUnadoptedDoesNotExist(k);
  });
});

bthread("Undismissal create verification", function () {
  const e = waitForAnyUndismissalAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUndismissal(k), function () {
    verifyUndismissalExists(k);
  });
});

bthread("Undismissal update verification", function () {
  const e = waitForAnyUndismissalUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUndismissal(k), function () {
    verifyUndismissalUpdated(k);
  });
});

bthread("Undismissal delete verification", function () {
  const e = waitForAnyUndismissalDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUndismissal(k), function () {
    verifyUndismissalDoesNotExist(k);
  });
});

bthread("Update create verification", function () {
  const e = waitForAnyUpdateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpdate(k), function () {
    verifyUpdateExists(k);
  });
});

bthread("Update update verification", function () {
  const e = waitForAnyUpdateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUpdate(k), function () {
    verifyUpdateUpdated(k);
  });
});

bthread("Update delete verification", function () {
  const e = waitForAnyUpdateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUpdate(k), function () {
    verifyUpdateDoesNotExist(k);
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

bthread("Userid create verification", function () {
  const e = waitForAnyUseridAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserid(k), function () {
    verifyUseridExists(k);
  });
});

bthread("Userid update verification", function () {
  const e = waitForAnyUseridUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteUserid(k), function () {
    verifyUseridUpdated(k);
  });
});

bthread("Userid delete verification", function () {
  const e = waitForAnyUseridDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddUserid(k), function () {
    verifyUseridDoesNotExist(k);
  });
});

bthread("Validate create verification", function () {
  const e = waitForAnyValidateAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValidate(k), function () {
    verifyValidateExists(k);
  });
});

bthread("Validate update verification", function () {
  const e = waitForAnyValidateUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteValidate(k), function () {
    verifyValidateUpdated(k);
  });
});

bthread("Validate delete verification", function () {
  const e = waitForAnyValidateDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddValidate(k), function () {
    verifyValidateDoesNotExist(k);
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

bthread("Wiki create verification", function () {
  const e = waitForAnyWikiAdded();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWiki(k), function () {
    verifyWikiExists(k);
  });
});

bthread("Wiki update verification", function () {
  const e = waitForAnyWikiUpdated();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchDeleteWiki(k), function () {
    verifyWikiUpdated(k);
  });
});

bthread("Wiki delete verification", function () {
  const e = waitForAnyWikiDeleted();
  if (typeof e === "function") { return; }
  const k = canonKey(_pk(e, 'id'));
  block(matchAddWiki(k), function () {
    verifyWikiDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Accept", function () {
  const x = waitForAnyAcceptAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAccept(k, ANY), function () {});
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

bthread("Guard: Unique Activitypub", function () {
  const x = waitForAnyActivitypubAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddActivitypub(k, ANY), function () {});
});

bthread("Guard: Unique Admin", function () {
  const x = waitForAnyAdminAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAdmin(k, ANY), function () {});
});

bthread("Guard: Unique Api", function () {
  const x = waitForAnyApiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApi(k, ANY), function () {});
});

bthread("Guard: Unique Application", function () {
  const x = waitForAnyApplicationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddApplication(k, ANY), function () {});
});

bthread("Guard: Unique Archive", function () {
  const x = waitForAnyArchiveAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddArchive(k, ANY), function () {});
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

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAttachment(k, ANY), function () {});
});

bthread("Guard: Unique Avatar", function () {
  const x = waitForAnyAvatarAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddAvatar(k, ANY), function () {});
});

bthread("Guard: Unique Badge", function () {
  const x = waitForAnyBadgeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBadge(k, ANY), function () {});
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

bthread("Guard: Unique Branche", function () {
  const x = waitForAnyBrancheAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBranche(k, ANY), function () {});
});

bthread("Guard: Unique Branchprotection", function () {
  const x = waitForAnyBranchprotectionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddBranchprotection(k, ANY), function () {});
});

bthread("Guard: Unique Check", function () {
  const x = waitForAnyCheckAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCheck(k, ANY), function () {});
});

bthread("Guard: Unique Collaborator", function () {
  const x = waitForAnyCollaboratorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCollaborator(k, ANY), function () {});
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

bthread("Guard: Unique Compare", function () {
  const x = waitForAnyCompareAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCompare(k, ANY), function () {});
});

bthread("Guard: Unique Content", function () {
  const x = waitForAnyContentAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddContent(k, ANY), function () {});
});

bthread("Guard: Unique Cron", function () {
  const x = waitForAnyCronAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddCron(k, ANY), function () {});
});

bthread("Guard: Unique Deadline", function () {
  const x = waitForAnyDeadlineAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDeadline(k, ANY), function () {});
});

bthread("Guard: Unique Delete", function () {
  const x = waitForAnyDeleteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDelete(k, ANY), function () {});
});

bthread("Guard: Unique Dependency", function () {
  const x = waitForAnyDependencyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDependency(k, ANY), function () {});
});

bthread("Guard: Unique Diffpatch", function () {
  const x = waitForAnyDiffpatchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDiffpatch(k, ANY), function () {});
});

bthread("Guard: Unique Dismissal", function () {
  const x = waitForAnyDismissalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddDismissal(k, ANY), function () {});
});

bthread("Guard: Unique Editorconfig", function () {
  const x = waitForAnyEditorconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEditorconfig(k, ANY), function () {});
});

bthread("Guard: Unique Email", function () {
  const x = waitForAnyEmailAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddEmail(k, ANY), function () {});
});

bthread("Guard: Unique Feed", function () {
  const x = waitForAnyFeedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFeed(k, ANY), function () {});
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

bthread("Guard: Unique Fork", function () {
  const x = waitForAnyForkAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddFork(k, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGenerate(k, ANY), function () {});
});

bthread("Guard: Unique Git", function () {
  const x = waitForAnyGitAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGit(k, ANY), function () {});
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

bthread("Guard: Unique Gpgkeytoken", function () {
  const x = waitForAnyGpgkeytokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGpgkeytoken(k, ANY), function () {});
});

bthread("Guard: Unique Gpgkeyverify", function () {
  const x = waitForAnyGpgkeyverifyAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddGpgkeyverify(k, ANY), function () {});
});

bthread("Guard: Unique Heatmap", function () {
  const x = waitForAnyHeatmapAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHeatmap(k, ANY), function () {});
});

bthread("Guard: Unique Hook", function () {
  const x = waitForAnyHookAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddHook(k, ANY), function () {});
});

bthread("Guard: Unique Inbox", function () {
  const x = waitForAnyInboxAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddInbox(k, ANY), function () {});
});

bthread("Guard: Unique Issue", function () {
  const x = waitForAnyIssueAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssue(k, ANY), function () {});
});

bthread("Guard: Unique Issueconfig", function () {
  const x = waitForAnyIssueconfigAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssueconfig(k, ANY), function () {});
});

bthread("Guard: Unique Issuetemplate", function () {
  const x = waitForAnyIssuetemplateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddIssuetemplate(k, ANY), function () {});
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

bthread("Guard: Unique Latest", function () {
  const x = waitForAnyLatestAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLatest(k, ANY), function () {});
});

bthread("Guard: Unique Licens", function () {
  const x = waitForAnyLicensAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddLicens(k, ANY), function () {});
});

bthread("Guard: Unique Markdown", function () {
  const x = waitForAnyMarkdownAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMarkdown(k, ANY), function () {});
});

bthread("Guard: Unique Markup", function () {
  const x = waitForAnyMarkupAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMarkup(k, ANY), function () {});
});

bthread("Guard: Unique Media", function () {
  const x = waitForAnyMediaAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMedia(k, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMember(k, ANY), function () {});
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

bthread("Guard: Unique Migrate", function () {
  const x = waitForAnyMigrateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMigrate(k, ANY), function () {});
});

bthread("Guard: Unique Milestone", function () {
  const x = waitForAnyMilestoneAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMilestone(k, ANY), function () {});
});

bthread("Guard: Unique Mirrorsync", function () {
  const x = waitForAnyMirrorsyncAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddMirrorsync(k, ANY), function () {});
});

bthread("Guard: Unique New", function () {
  const x = waitForAnyNewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNew(k, ANY), function () {});
});

bthread("Guard: Unique Newpinallowed", function () {
  const x = waitForAnyNewpinallowedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNewpinallowed(k, ANY), function () {});
});

bthread("Guard: Unique Nodeinfo", function () {
  const x = waitForAnyNodeinfoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNodeinfo(k, ANY), function () {});
});

bthread("Guard: Unique Note", function () {
  const x = waitForAnyNoteAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNote(k, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddNotification(k, ANY), function () {});
});

bthread("Guard: Unique Oauth2", function () {
  const x = waitForAnyOauth2Added();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOauth2(k, ANY), function () {});
});

bthread("Guard: Unique Org", function () {
  const x = waitForAnyOrgAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddOrg(k, ANY), function () {});
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

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPermission(k, ANY), function () {});
});

bthread("Guard: Unique Pin", function () {
  const x = waitForAnyPinAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPin(k, ANY), function () {});
});

bthread("Guard: Unique Pinned", function () {
  const x = waitForAnyPinnedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPinned(k, ANY), function () {});
});

bthread("Guard: Unique Priority", function () {
  const x = waitForAnyPriorityAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPriority(k, ANY), function () {});
});

bthread("Guard: Unique Publicmember", function () {
  const x = waitForAnyPublicmemberAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPublicmember(k, ANY), function () {});
});

bthread("Guard: Unique Pull", function () {
  const x = waitForAnyPullAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPull(k, ANY), function () {});
});

bthread("Guard: Unique Pushmirror", function () {
  const x = waitForAnyPushmirrorAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPushmirror(k, ANY), function () {});
});

bthread("Guard: Unique Pushmirrorssync", function () {
  const x = waitForAnyPushmirrorssyncAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddPushmirrorssync(k, ANY), function () {});
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

bthread("Guard: Unique Ref", function () {
  const x = waitForAnyRefAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRef(k, ANY), function () {});
});

bthread("Guard: Unique Registrationtoken", function () {
  const x = waitForAnyRegistrationtokenAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRegistrationtoken(k, ANY), function () {});
});

bthread("Guard: Unique Reject", function () {
  const x = waitForAnyRejectAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReject(k, ANY), function () {});
});

bthread("Guard: Unique Releas", function () {
  const x = waitForAnyReleasAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReleas(k, ANY), function () {});
});

bthread("Guard: Unique Rename", function () {
  const x = waitForAnyRenameAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRename(k, ANY), function () {});
});

bthread("Guard: Unique Repo", function () {
  const x = waitForAnyRepoAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRepo(k, ANY), function () {});
});

bthread("Guard: Unique Repository", function () {
  const x = waitForAnyRepositoryAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRepository(k, ANY), function () {});
});

bthread("Guard: Unique Requestedreviewer", function () {
  const x = waitForAnyRequestedreviewerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRequestedreviewer(k, ANY), function () {});
});

bthread("Guard: Unique Review", function () {
  const x = waitForAnyReviewAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReview(k, ANY), function () {});
});

bthread("Guard: Unique Reviewer", function () {
  const x = waitForAnyReviewerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddReviewer(k, ANY), function () {});
});

bthread("Guard: Unique Revision", function () {
  const x = waitForAnyRevisionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRevision(k, ANY), function () {});
});

bthread("Guard: Unique Runner", function () {
  const x = waitForAnyRunnerAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddRunner(k, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSearch(k, ANY), function () {});
});

bthread("Guard: Unique Secret", function () {
  const x = waitForAnySecretAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSecret(k, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSetting(k, ANY), function () {});
});

bthread("Guard: Unique Signingkeygpg", function () {
  const x = waitForAnySigningkeygpgAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddSigningkeygpg(k, ANY), function () {});
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

bthread("Guard: Unique Stopwatch", function () {
  const x = waitForAnyStopwatchAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStopwatch(k, ANY), function () {});
});

bthread("Guard: Unique Stopwatche", function () {
  const x = waitForAnyStopwatcheAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddStopwatche(k, ANY), function () {});
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

bthread("Guard: Unique Tag", function () {
  const x = waitForAnyTagAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTag(k, ANY), function () {});
});

bthread("Guard: Unique Tagprotection", function () {
  const x = waitForAnyTagprotectionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTagprotection(k, ANY), function () {});
});

bthread("Guard: Unique Task", function () {
  const x = waitForAnyTaskAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTask(k, ANY), function () {});
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

bthread("Guard: Unique Time", function () {
  const x = waitForAnyTimeAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTime(k, ANY), function () {});
});

bthread("Guard: Unique Timeline", function () {
  const x = waitForAnyTimelineAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddTimeline(k, ANY), function () {});
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

bthread("Guard: Unique Ui", function () {
  const x = waitForAnyUiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUi(k, ANY), function () {});
});

bthread("Guard: Unique Unadopted", function () {
  const x = waitForAnyUnadoptedAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUnadopted(k, ANY), function () {});
});

bthread("Guard: Unique Undismissal", function () {
  const x = waitForAnyUndismissalAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUndismissal(k, ANY), function () {});
});

bthread("Guard: Unique Update", function () {
  const x = waitForAnyUpdateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUpdate(k, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUser(k, ANY), function () {});
});

bthread("Guard: Unique Userid", function () {
  const x = waitForAnyUseridAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddUserid(k, ANY), function () {});
});

bthread("Guard: Unique Validate", function () {
  const x = waitForAnyValidateAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddValidate(k, ANY), function () {});
});

bthread("Guard: Unique Variable", function () {
  const x = waitForAnyVariableAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVariable(k, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddVersion(k, ANY), function () {});
});

bthread("Guard: Unique Wiki", function () {
  const x = waitForAnyWikiAdded();
  if (typeof x === "function") { return; }
  const k = canonKey(_pk(x, 'id'));
  block(matchAddWiki(k, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
