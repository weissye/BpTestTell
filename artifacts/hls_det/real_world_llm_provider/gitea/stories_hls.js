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

// ===== PASSIVE ASSERTIONS =====

bthread("Accept create verification", function () {
  const e = waitForAnyAcceptAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccept(k, ANY), function () {
    verifyAcceptExists(k);
  });
});

bthread("Accept update verification", function () {
  const e = waitForAnyAcceptUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAccept(k, ANY), function () {
    verifyAcceptUpdated(k);
  });
});

bthread("Accept delete verification", function () {
  const e = waitForAnyAcceptDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAccept(k, ANY), function () {
    verifyAcceptDoesNotExist(k);
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

bthread("Activitypub create verification", function () {
  const e = waitForAnyActivitypubAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActivitypub(k, ANY), function () {
    verifyActivitypubExists(k);
  });
});

bthread("Activitypub update verification", function () {
  const e = waitForAnyActivitypubUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteActivitypub(k, ANY), function () {
    verifyActivitypubUpdated(k);
  });
});

bthread("Activitypub delete verification", function () {
  const e = waitForAnyActivitypubDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddActivitypub(k, ANY), function () {
    verifyActivitypubDoesNotExist(k);
  });
});

bthread("Admin create verification", function () {
  const e = waitForAnyAdminAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdmin(k, ANY), function () {
    verifyAdminExists(k);
  });
});

bthread("Admin update verification", function () {
  const e = waitForAnyAdminUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAdmin(k, ANY), function () {
    verifyAdminUpdated(k);
  });
});

bthread("Admin delete verification", function () {
  const e = waitForAnyAdminDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAdmin(k, ANY), function () {
    verifyAdminDoesNotExist(k);
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

bthread("Attachment create verification", function () {
  const e = waitForAnyAttachmentAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttachment(k, ANY), function () {
    verifyAttachmentExists(k);
  });
});

bthread("Attachment update verification", function () {
  const e = waitForAnyAttachmentUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAttachment(k, ANY), function () {
    verifyAttachmentUpdated(k);
  });
});

bthread("Attachment delete verification", function () {
  const e = waitForAnyAttachmentDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAttachment(k, ANY), function () {
    verifyAttachmentDoesNotExist(k);
  });
});

bthread("Avatar create verification", function () {
  const e = waitForAnyAvatarAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvatar(k, ANY), function () {
    verifyAvatarExists(k);
  });
});

bthread("Avatar update verification", function () {
  const e = waitForAnyAvatarUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteAvatar(k, ANY), function () {
    verifyAvatarUpdated(k);
  });
});

bthread("Avatar delete verification", function () {
  const e = waitForAnyAvatarDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddAvatar(k, ANY), function () {
    verifyAvatarDoesNotExist(k);
  });
});

bthread("Badge create verification", function () {
  const e = waitForAnyBadgeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBadge(k, ANY), function () {
    verifyBadgeExists(k);
  });
});

bthread("Badge update verification", function () {
  const e = waitForAnyBadgeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBadge(k, ANY), function () {
    verifyBadgeUpdated(k);
  });
});

bthread("Badge delete verification", function () {
  const e = waitForAnyBadgeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBadge(k, ANY), function () {
    verifyBadgeDoesNotExist(k);
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

bthread("Branchprotection create verification", function () {
  const e = waitForAnyBranchprotectionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBranchprotection(k, ANY), function () {
    verifyBranchprotectionExists(k);
  });
});

bthread("Branchprotection update verification", function () {
  const e = waitForAnyBranchprotectionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteBranchprotection(k, ANY), function () {
    verifyBranchprotectionUpdated(k);
  });
});

bthread("Branchprotection delete verification", function () {
  const e = waitForAnyBranchprotectionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddBranchprotection(k, ANY), function () {
    verifyBranchprotectionDoesNotExist(k);
  });
});

bthread("Check create verification", function () {
  const e = waitForAnyCheckAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheck(k, ANY), function () {
    verifyCheckExists(k);
  });
});

bthread("Check update verification", function () {
  const e = waitForAnyCheckUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCheck(k, ANY), function () {
    verifyCheckUpdated(k);
  });
});

bthread("Check delete verification", function () {
  const e = waitForAnyCheckDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCheck(k, ANY), function () {
    verifyCheckDoesNotExist(k);
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

bthread("Cron create verification", function () {
  const e = waitForAnyCronAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCron(k, ANY), function () {
    verifyCronExists(k);
  });
});

bthread("Cron update verification", function () {
  const e = waitForAnyCronUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteCron(k, ANY), function () {
    verifyCronUpdated(k);
  });
});

bthread("Cron delete verification", function () {
  const e = waitForAnyCronDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddCron(k, ANY), function () {
    verifyCronDoesNotExist(k);
  });
});

bthread("Deadline create verification", function () {
  const e = waitForAnyDeadlineAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeadline(k, ANY), function () {
    verifyDeadlineExists(k);
  });
});

bthread("Deadline update verification", function () {
  const e = waitForAnyDeadlineUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDeadline(k, ANY), function () {
    verifyDeadlineUpdated(k);
  });
});

bthread("Deadline delete verification", function () {
  const e = waitForAnyDeadlineDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDeadline(k, ANY), function () {
    verifyDeadlineDoesNotExist(k);
  });
});

bthread("Delete create verification", function () {
  const e = waitForAnyDeleteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelete(k, ANY), function () {
    verifyDeleteExists(k);
  });
});

bthread("Delete update verification", function () {
  const e = waitForAnyDeleteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDelete(k, ANY), function () {
    verifyDeleteUpdated(k);
  });
});

bthread("Delete delete verification", function () {
  const e = waitForAnyDeleteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDelete(k, ANY), function () {
    verifyDeleteDoesNotExist(k);
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

bthread("Diffpatch create verification", function () {
  const e = waitForAnyDiffpatchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDiffpatch(k, ANY), function () {
    verifyDiffpatchExists(k);
  });
});

bthread("Diffpatch update verification", function () {
  const e = waitForAnyDiffpatchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteDiffpatch(k, ANY), function () {
    verifyDiffpatchUpdated(k);
  });
});

bthread("Diffpatch delete verification", function () {
  const e = waitForAnyDiffpatchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddDiffpatch(k, ANY), function () {
    verifyDiffpatchDoesNotExist(k);
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

bthread("Editorconfig create verification", function () {
  const e = waitForAnyEditorconfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEditorconfig(k, ANY), function () {
    verifyEditorconfigExists(k);
  });
});

bthread("Editorconfig update verification", function () {
  const e = waitForAnyEditorconfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteEditorconfig(k, ANY), function () {
    verifyEditorconfigUpdated(k);
  });
});

bthread("Editorconfig delete verification", function () {
  const e = waitForAnyEditorconfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddEditorconfig(k, ANY), function () {
    verifyEditorconfigDoesNotExist(k);
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

bthread("Gpgkeytoken create verification", function () {
  const e = waitForAnyGpgkeytokenAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGpgkeytoken(k, ANY), function () {
    verifyGpgkeytokenExists(k);
  });
});

bthread("Gpgkeytoken update verification", function () {
  const e = waitForAnyGpgkeytokenUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGpgkeytoken(k, ANY), function () {
    verifyGpgkeytokenUpdated(k);
  });
});

bthread("Gpgkeytoken delete verification", function () {
  const e = waitForAnyGpgkeytokenDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGpgkeytoken(k, ANY), function () {
    verifyGpgkeytokenDoesNotExist(k);
  });
});

bthread("Gpgkeyverify create verification", function () {
  const e = waitForAnyGpgkeyverifyAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGpgkeyverify(k, ANY), function () {
    verifyGpgkeyverifyExists(k);
  });
});

bthread("Gpgkeyverify update verification", function () {
  const e = waitForAnyGpgkeyverifyUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteGpgkeyverify(k, ANY), function () {
    verifyGpgkeyverifyUpdated(k);
  });
});

bthread("Gpgkeyverify delete verification", function () {
  const e = waitForAnyGpgkeyverifyDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddGpgkeyverify(k, ANY), function () {
    verifyGpgkeyverifyDoesNotExist(k);
  });
});

bthread("Heatmap create verification", function () {
  const e = waitForAnyHeatmapAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHeatmap(k, ANY), function () {
    verifyHeatmapExists(k);
  });
});

bthread("Heatmap update verification", function () {
  const e = waitForAnyHeatmapUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteHeatmap(k, ANY), function () {
    verifyHeatmapUpdated(k);
  });
});

bthread("Heatmap delete verification", function () {
  const e = waitForAnyHeatmapDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddHeatmap(k, ANY), function () {
    verifyHeatmapDoesNotExist(k);
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

bthread("Inbox create verification", function () {
  const e = waitForAnyInboxAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInbox(k, ANY), function () {
    verifyInboxExists(k);
  });
});

bthread("Inbox update verification", function () {
  const e = waitForAnyInboxUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteInbox(k, ANY), function () {
    verifyInboxUpdated(k);
  });
});

bthread("Inbox delete verification", function () {
  const e = waitForAnyInboxDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddInbox(k, ANY), function () {
    verifyInboxDoesNotExist(k);
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

bthread("Issueconfig create verification", function () {
  const e = waitForAnyIssueconfigAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssueconfig(k, ANY), function () {
    verifyIssueconfigExists(k);
  });
});

bthread("Issueconfig update verification", function () {
  const e = waitForAnyIssueconfigUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssueconfig(k, ANY), function () {
    verifyIssueconfigUpdated(k);
  });
});

bthread("Issueconfig delete verification", function () {
  const e = waitForAnyIssueconfigDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssueconfig(k, ANY), function () {
    verifyIssueconfigDoesNotExist(k);
  });
});

bthread("Issuetemplate create verification", function () {
  const e = waitForAnyIssuetemplateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetemplate(k, ANY), function () {
    verifyIssuetemplateExists(k);
  });
});

bthread("Issuetemplate update verification", function () {
  const e = waitForAnyIssuetemplateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteIssuetemplate(k, ANY), function () {
    verifyIssuetemplateUpdated(k);
  });
});

bthread("Issuetemplate delete verification", function () {
  const e = waitForAnyIssuetemplateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddIssuetemplate(k, ANY), function () {
    verifyIssuetemplateDoesNotExist(k);
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

bthread("Markup create verification", function () {
  const e = waitForAnyMarkupAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkup(k, ANY), function () {
    verifyMarkupExists(k);
  });
});

bthread("Markup update verification", function () {
  const e = waitForAnyMarkupUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMarkup(k, ANY), function () {
    verifyMarkupUpdated(k);
  });
});

bthread("Markup delete verification", function () {
  const e = waitForAnyMarkupDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMarkup(k, ANY), function () {
    verifyMarkupDoesNotExist(k);
  });
});

bthread("Media create verification", function () {
  const e = waitForAnyMediaAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMedia(k, ANY), function () {
    verifyMediaExists(k);
  });
});

bthread("Media update verification", function () {
  const e = waitForAnyMediaUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMedia(k, ANY), function () {
    verifyMediaUpdated(k);
  });
});

bthread("Media delete verification", function () {
  const e = waitForAnyMediaDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMedia(k, ANY), function () {
    verifyMediaDoesNotExist(k);
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

bthread("Migrate create verification", function () {
  const e = waitForAnyMigrateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMigrate(k, ANY), function () {
    verifyMigrateExists(k);
  });
});

bthread("Migrate update verification", function () {
  const e = waitForAnyMigrateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMigrate(k, ANY), function () {
    verifyMigrateUpdated(k);
  });
});

bthread("Migrate delete verification", function () {
  const e = waitForAnyMigrateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMigrate(k, ANY), function () {
    verifyMigrateDoesNotExist(k);
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

bthread("Mirrorsync create verification", function () {
  const e = waitForAnyMirrorsyncAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMirrorsync(k, ANY), function () {
    verifyMirrorsyncExists(k);
  });
});

bthread("Mirrorsync update verification", function () {
  const e = waitForAnyMirrorsyncUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteMirrorsync(k, ANY), function () {
    verifyMirrorsyncUpdated(k);
  });
});

bthread("Mirrorsync delete verification", function () {
  const e = waitForAnyMirrorsyncDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddMirrorsync(k, ANY), function () {
    verifyMirrorsyncDoesNotExist(k);
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

bthread("Newpinallowed create verification", function () {
  const e = waitForAnyNewpinallowedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNewpinallowed(k, ANY), function () {
    verifyNewpinallowedExists(k);
  });
});

bthread("Newpinallowed update verification", function () {
  const e = waitForAnyNewpinallowedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNewpinallowed(k, ANY), function () {
    verifyNewpinallowedUpdated(k);
  });
});

bthread("Newpinallowed delete verification", function () {
  const e = waitForAnyNewpinallowedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNewpinallowed(k, ANY), function () {
    verifyNewpinallowedDoesNotExist(k);
  });
});

bthread("Nodeinfo create verification", function () {
  const e = waitForAnyNodeinfoAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNodeinfo(k, ANY), function () {
    verifyNodeinfoExists(k);
  });
});

bthread("Nodeinfo update verification", function () {
  const e = waitForAnyNodeinfoUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNodeinfo(k, ANY), function () {
    verifyNodeinfoUpdated(k);
  });
});

bthread("Nodeinfo delete verification", function () {
  const e = waitForAnyNodeinfoDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNodeinfo(k, ANY), function () {
    verifyNodeinfoDoesNotExist(k);
  });
});

bthread("Note create verification", function () {
  const e = waitForAnyNoteAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNote(k, ANY), function () {
    verifyNoteExists(k);
  });
});

bthread("Note update verification", function () {
  const e = waitForAnyNoteUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteNote(k, ANY), function () {
    verifyNoteUpdated(k);
  });
});

bthread("Note delete verification", function () {
  const e = waitForAnyNoteDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddNote(k, ANY), function () {
    verifyNoteDoesNotExist(k);
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

bthread("Oauth2 create verification", function () {
  const e = waitForAnyOauth2Added();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOauth2(k, ANY), function () {
    verifyOauth2Exists(k);
  });
});

bthread("Oauth2 update verification", function () {
  const e = waitForAnyOauth2Updated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteOauth2(k, ANY), function () {
    verifyOauth2Updated(k);
  });
});

bthread("Oauth2 delete verification", function () {
  const e = waitForAnyOauth2Deleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddOauth2(k, ANY), function () {
    verifyOauth2DoesNotExist(k);
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

bthread("Pin create verification", function () {
  const e = waitForAnyPinAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePin(k, ANY), function () {
    verifyPinExists(k);
  });
});

bthread("Pin update verification", function () {
  const e = waitForAnyPinUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePin(k, ANY), function () {
    verifyPinUpdated(k);
  });
});

bthread("Pin delete verification", function () {
  const e = waitForAnyPinDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPin(k, ANY), function () {
    verifyPinDoesNotExist(k);
  });
});

bthread("Pinned create verification", function () {
  const e = waitForAnyPinnedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePinned(k, ANY), function () {
    verifyPinnedExists(k);
  });
});

bthread("Pinned update verification", function () {
  const e = waitForAnyPinnedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePinned(k, ANY), function () {
    verifyPinnedUpdated(k);
  });
});

bthread("Pinned delete verification", function () {
  const e = waitForAnyPinnedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPinned(k, ANY), function () {
    verifyPinnedDoesNotExist(k);
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

bthread("Pushmirror create verification", function () {
  const e = waitForAnyPushmirrorAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePushmirror(k, ANY), function () {
    verifyPushmirrorExists(k);
  });
});

bthread("Pushmirror update verification", function () {
  const e = waitForAnyPushmirrorUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePushmirror(k, ANY), function () {
    verifyPushmirrorUpdated(k);
  });
});

bthread("Pushmirror delete verification", function () {
  const e = waitForAnyPushmirrorDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPushmirror(k, ANY), function () {
    verifyPushmirrorDoesNotExist(k);
  });
});

bthread("Pushmirrorssync create verification", function () {
  const e = waitForAnyPushmirrorssyncAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePushmirrorssync(k, ANY), function () {
    verifyPushmirrorssyncExists(k);
  });
});

bthread("Pushmirrorssync update verification", function () {
  const e = waitForAnyPushmirrorssyncUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeletePushmirrorssync(k, ANY), function () {
    verifyPushmirrorssyncUpdated(k);
  });
});

bthread("Pushmirrorssync delete verification", function () {
  const e = waitForAnyPushmirrorssyncDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddPushmirrorssync(k, ANY), function () {
    verifyPushmirrorssyncDoesNotExist(k);
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

bthread("Reject create verification", function () {
  const e = waitForAnyRejectAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReject(k, ANY), function () {
    verifyRejectExists(k);
  });
});

bthread("Reject update verification", function () {
  const e = waitForAnyRejectUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReject(k, ANY), function () {
    verifyRejectUpdated(k);
  });
});

bthread("Reject delete verification", function () {
  const e = waitForAnyRejectDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReject(k, ANY), function () {
    verifyRejectDoesNotExist(k);
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

bthread("Reviewer create verification", function () {
  const e = waitForAnyReviewerAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReviewer(k, ANY), function () {
    verifyReviewerExists(k);
  });
});

bthread("Reviewer update verification", function () {
  const e = waitForAnyReviewerUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteReviewer(k, ANY), function () {
    verifyReviewerUpdated(k);
  });
});

bthread("Reviewer delete verification", function () {
  const e = waitForAnyReviewerDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddReviewer(k, ANY), function () {
    verifyReviewerDoesNotExist(k);
  });
});

bthread("Revision create verification", function () {
  const e = waitForAnyRevisionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRevision(k, ANY), function () {
    verifyRevisionExists(k);
  });
});

bthread("Revision update verification", function () {
  const e = waitForAnyRevisionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteRevision(k, ANY), function () {
    verifyRevisionUpdated(k);
  });
});

bthread("Revision delete verification", function () {
  const e = waitForAnyRevisionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddRevision(k, ANY), function () {
    verifyRevisionDoesNotExist(k);
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

bthread("Signingkeygpg create verification", function () {
  const e = waitForAnySigningkeygpgAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSigningkeygpg(k, ANY), function () {
    verifySigningkeygpgExists(k);
  });
});

bthread("Signingkeygpg update verification", function () {
  const e = waitForAnySigningkeygpgUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteSigningkeygpg(k, ANY), function () {
    verifySigningkeygpgUpdated(k);
  });
});

bthread("Signingkeygpg delete verification", function () {
  const e = waitForAnySigningkeygpgDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddSigningkeygpg(k, ANY), function () {
    verifySigningkeygpgDoesNotExist(k);
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

bthread("Stopwatch create verification", function () {
  const e = waitForAnyStopwatchAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStopwatch(k, ANY), function () {
    verifyStopwatchExists(k);
  });
});

bthread("Stopwatch update verification", function () {
  const e = waitForAnyStopwatchUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStopwatch(k, ANY), function () {
    verifyStopwatchUpdated(k);
  });
});

bthread("Stopwatch delete verification", function () {
  const e = waitForAnyStopwatchDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStopwatch(k, ANY), function () {
    verifyStopwatchDoesNotExist(k);
  });
});

bthread("Stopwatche create verification", function () {
  const e = waitForAnyStopwatcheAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStopwatche(k, ANY), function () {
    verifyStopwatcheExists(k);
  });
});

bthread("Stopwatche update verification", function () {
  const e = waitForAnyStopwatcheUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteStopwatche(k, ANY), function () {
    verifyStopwatcheUpdated(k);
  });
});

bthread("Stopwatche delete verification", function () {
  const e = waitForAnyStopwatcheDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddStopwatche(k, ANY), function () {
    verifyStopwatcheDoesNotExist(k);
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

bthread("Tagprotection create verification", function () {
  const e = waitForAnyTagprotectionAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTagprotection(k, ANY), function () {
    verifyTagprotectionExists(k);
  });
});

bthread("Tagprotection update verification", function () {
  const e = waitForAnyTagprotectionUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTagprotection(k, ANY), function () {
    verifyTagprotectionUpdated(k);
  });
});

bthread("Tagprotection delete verification", function () {
  const e = waitForAnyTagprotectionDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTagprotection(k, ANY), function () {
    verifyTagprotectionDoesNotExist(k);
  });
});

bthread("Task create verification", function () {
  const e = waitForAnyTaskAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTask(k, ANY), function () {
    verifyTaskExists(k);
  });
});

bthread("Task update verification", function () {
  const e = waitForAnyTaskUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTask(k, ANY), function () {
    verifyTaskUpdated(k);
  });
});

bthread("Task delete verification", function () {
  const e = waitForAnyTaskDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTask(k, ANY), function () {
    verifyTaskDoesNotExist(k);
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

bthread("Time create verification", function () {
  const e = waitForAnyTimeAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTime(k, ANY), function () {
    verifyTimeExists(k);
  });
});

bthread("Time update verification", function () {
  const e = waitForAnyTimeUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteTime(k, ANY), function () {
    verifyTimeUpdated(k);
  });
});

bthread("Time delete verification", function () {
  const e = waitForAnyTimeDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddTime(k, ANY), function () {
    verifyTimeDoesNotExist(k);
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

bthread("Ui create verification", function () {
  const e = waitForAnyUiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUi(k, ANY), function () {
    verifyUiExists(k);
  });
});

bthread("Ui update verification", function () {
  const e = waitForAnyUiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUi(k, ANY), function () {
    verifyUiUpdated(k);
  });
});

bthread("Ui delete verification", function () {
  const e = waitForAnyUiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUi(k, ANY), function () {
    verifyUiDoesNotExist(k);
  });
});

bthread("Unadopted create verification", function () {
  const e = waitForAnyUnadoptedAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnadopted(k, ANY), function () {
    verifyUnadoptedExists(k);
  });
});

bthread("Unadopted update verification", function () {
  const e = waitForAnyUnadoptedUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUnadopted(k, ANY), function () {
    verifyUnadoptedUpdated(k);
  });
});

bthread("Unadopted delete verification", function () {
  const e = waitForAnyUnadoptedDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUnadopted(k, ANY), function () {
    verifyUnadoptedDoesNotExist(k);
  });
});

bthread("Undismissal create verification", function () {
  const e = waitForAnyUndismissalAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUndismissal(k, ANY), function () {
    verifyUndismissalExists(k);
  });
});

bthread("Undismissal update verification", function () {
  const e = waitForAnyUndismissalUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUndismissal(k, ANY), function () {
    verifyUndismissalUpdated(k);
  });
});

bthread("Undismissal delete verification", function () {
  const e = waitForAnyUndismissalDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUndismissal(k, ANY), function () {
    verifyUndismissalDoesNotExist(k);
  });
});

bthread("Update create verification", function () {
  const e = waitForAnyUpdateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpdate(k, ANY), function () {
    verifyUpdateExists(k);
  });
});

bthread("Update update verification", function () {
  const e = waitForAnyUpdateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUpdate(k, ANY), function () {
    verifyUpdateUpdated(k);
  });
});

bthread("Update delete verification", function () {
  const e = waitForAnyUpdateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUpdate(k, ANY), function () {
    verifyUpdateDoesNotExist(k);
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

bthread("Userid create verification", function () {
  const e = waitForAnyUseridAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserid(k, ANY), function () {
    verifyUseridExists(k);
  });
});

bthread("Userid update verification", function () {
  const e = waitForAnyUseridUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteUserid(k, ANY), function () {
    verifyUseridUpdated(k);
  });
});

bthread("Userid delete verification", function () {
  const e = waitForAnyUseridDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddUserid(k, ANY), function () {
    verifyUseridDoesNotExist(k);
  });
});

bthread("Validate create verification", function () {
  const e = waitForAnyValidateAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValidate(k, ANY), function () {
    verifyValidateExists(k);
  });
});

bthread("Validate update verification", function () {
  const e = waitForAnyValidateUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteValidate(k, ANY), function () {
    verifyValidateUpdated(k);
  });
});

bthread("Validate delete verification", function () {
  const e = waitForAnyValidateDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddValidate(k, ANY), function () {
    verifyValidateDoesNotExist(k);
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

bthread("Wiki create verification", function () {
  const e = waitForAnyWikiAdded();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWiki(k, ANY), function () {
    verifyWikiExists(k);
  });
});

bthread("Wiki update verification", function () {
  const e = waitForAnyWikiUpdated();
  const k = canonKey(_pk(e, "id"));
  block(matchDeleteWiki(k, ANY), function () {
    verifyWikiUpdated(k);
  });
});

bthread("Wiki delete verification", function () {
  const e = waitForAnyWikiDeleted();
  const k = canonKey(_pk(e, "id"));
  block(matchAddWiki(k, ANY), function () {
    verifyWikiDoesNotExist(k);
  });
});

// ===== RELATIONSHIP GUARDS =====

// ===== UNIQUENESS GUARDS =====

bthread("Guard: Unique Accept", function () {
  const x = waitForAnyAcceptAdded();
  block(matchAddAccept(x.id, ANY), function () {});
});

bthread("Guard: Unique Action", function () {
  const x = waitForAnyActionAdded();
  block(matchAddAction(x.id, ANY), function () {});
});

bthread("Guard: Unique Activity", function () {
  const x = waitForAnyActivityAdded();
  block(matchAddActivity(x.id, ANY), function () {});
});

bthread("Guard: Unique Activitypub", function () {
  const x = waitForAnyActivitypubAdded();
  block(matchAddActivitypub(x.id, ANY), function () {});
});

bthread("Guard: Unique Admin", function () {
  const x = waitForAnyAdminAdded();
  block(matchAddAdmin(x.id, ANY), function () {});
});

bthread("Guard: Unique Api", function () {
  const x = waitForAnyApiAdded();
  block(matchAddApi(x.id, ANY), function () {});
});

bthread("Guard: Unique Application", function () {
  const x = waitForAnyApplicationAdded();
  block(matchAddApplication(x.id, ANY), function () {});
});

bthread("Guard: Unique Archive", function () {
  const x = waitForAnyArchiveAdded();
  block(matchAddArchive(x.id, ANY), function () {});
});

bthread("Guard: Unique Asset", function () {
  const x = waitForAnyAssetAdded();
  block(matchAddAsset(x.id, ANY), function () {});
});

bthread("Guard: Unique Assignee", function () {
  const x = waitForAnyAssigneeAdded();
  block(matchAddAssignee(x.id, ANY), function () {});
});

bthread("Guard: Unique Attachment", function () {
  const x = waitForAnyAttachmentAdded();
  block(matchAddAttachment(x.id, ANY), function () {});
});

bthread("Guard: Unique Avatar", function () {
  const x = waitForAnyAvatarAdded();
  block(matchAddAvatar(x.id, ANY), function () {});
});

bthread("Guard: Unique Badge", function () {
  const x = waitForAnyBadgeAdded();
  block(matchAddBadge(x.id, ANY), function () {});
});

bthread("Guard: Unique Blob", function () {
  const x = waitForAnyBlobAdded();
  block(matchAddBlob(x.id, ANY), function () {});
});

bthread("Guard: Unique Block", function () {
  const x = waitForAnyBlockAdded();
  block(matchAddBlock(x.id, ANY), function () {});
});

bthread("Guard: Unique Branche", function () {
  const x = waitForAnyBrancheAdded();
  block(matchAddBranche(x.id, ANY), function () {});
});

bthread("Guard: Unique Branchprotection", function () {
  const x = waitForAnyBranchprotectionAdded();
  block(matchAddBranchprotection(x.id, ANY), function () {});
});

bthread("Guard: Unique Check", function () {
  const x = waitForAnyCheckAdded();
  block(matchAddCheck(x.id, ANY), function () {});
});

bthread("Guard: Unique Collaborator", function () {
  const x = waitForAnyCollaboratorAdded();
  block(matchAddCollaborator(x.id, ANY), function () {});
});

bthread("Guard: Unique Comment", function () {
  const x = waitForAnyCommentAdded();
  block(matchAddComment(x.id, ANY), function () {});
});

bthread("Guard: Unique Commit", function () {
  const x = waitForAnyCommitAdded();
  block(matchAddCommit(x.id, ANY), function () {});
});

bthread("Guard: Unique Compare", function () {
  const x = waitForAnyCompareAdded();
  block(matchAddCompare(x.id, ANY), function () {});
});

bthread("Guard: Unique Content", function () {
  const x = waitForAnyContentAdded();
  block(matchAddContent(x.id, ANY), function () {});
});

bthread("Guard: Unique Cron", function () {
  const x = waitForAnyCronAdded();
  block(matchAddCron(x.id, ANY), function () {});
});

bthread("Guard: Unique Deadline", function () {
  const x = waitForAnyDeadlineAdded();
  block(matchAddDeadline(x.id, ANY), function () {});
});

bthread("Guard: Unique Delete", function () {
  const x = waitForAnyDeleteAdded();
  block(matchAddDelete(x.id, ANY), function () {});
});

bthread("Guard: Unique Dependency", function () {
  const x = waitForAnyDependencyAdded();
  block(matchAddDependency(x.id, ANY), function () {});
});

bthread("Guard: Unique Diffpatch", function () {
  const x = waitForAnyDiffpatchAdded();
  block(matchAddDiffpatch(x.id, ANY), function () {});
});

bthread("Guard: Unique Dismissal", function () {
  const x = waitForAnyDismissalAdded();
  block(matchAddDismissal(x.id, ANY), function () {});
});

bthread("Guard: Unique Editorconfig", function () {
  const x = waitForAnyEditorconfigAdded();
  block(matchAddEditorconfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Email", function () {
  const x = waitForAnyEmailAdded();
  block(matchAddEmail(x.id, ANY), function () {});
});

bthread("Guard: Unique Feed", function () {
  const x = waitForAnyFeedAdded();
  block(matchAddFeed(x.id, ANY), function () {});
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

bthread("Guard: Unique Fork", function () {
  const x = waitForAnyForkAdded();
  block(matchAddFork(x.id, ANY), function () {});
});

bthread("Guard: Unique Generate", function () {
  const x = waitForAnyGenerateAdded();
  block(matchAddGenerate(x.id, ANY), function () {});
});

bthread("Guard: Unique Git", function () {
  const x = waitForAnyGitAdded();
  block(matchAddGit(x.id, ANY), function () {});
});

bthread("Guard: Unique Gitignore", function () {
  const x = waitForAnyGitignoreAdded();
  block(matchAddGitignore(x.id, ANY), function () {});
});

bthread("Guard: Unique Gpgkey", function () {
  const x = waitForAnyGpgkeyAdded();
  block(matchAddGpgkey(x.id, ANY), function () {});
});

bthread("Guard: Unique Gpgkeytoken", function () {
  const x = waitForAnyGpgkeytokenAdded();
  block(matchAddGpgkeytoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Gpgkeyverify", function () {
  const x = waitForAnyGpgkeyverifyAdded();
  block(matchAddGpgkeyverify(x.id, ANY), function () {});
});

bthread("Guard: Unique Heatmap", function () {
  const x = waitForAnyHeatmapAdded();
  block(matchAddHeatmap(x.id, ANY), function () {});
});

bthread("Guard: Unique Hook", function () {
  const x = waitForAnyHookAdded();
  block(matchAddHook(x.id, ANY), function () {});
});

bthread("Guard: Unique Inbox", function () {
  const x = waitForAnyInboxAdded();
  block(matchAddInbox(x.id, ANY), function () {});
});

bthread("Guard: Unique Issue", function () {
  const x = waitForAnyIssueAdded();
  block(matchAddIssue(x.id, ANY), function () {});
});

bthread("Guard: Unique Issueconfig", function () {
  const x = waitForAnyIssueconfigAdded();
  block(matchAddIssueconfig(x.id, ANY), function () {});
});

bthread("Guard: Unique Issuetemplate", function () {
  const x = waitForAnyIssuetemplateAdded();
  block(matchAddIssuetemplate(x.id, ANY), function () {});
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

bthread("Guard: Unique Latest", function () {
  const x = waitForAnyLatestAdded();
  block(matchAddLatest(x.id, ANY), function () {});
});

bthread("Guard: Unique Licens", function () {
  const x = waitForAnyLicensAdded();
  block(matchAddLicens(x.id, ANY), function () {});
});

bthread("Guard: Unique Markdown", function () {
  const x = waitForAnyMarkdownAdded();
  block(matchAddMarkdown(x.id, ANY), function () {});
});

bthread("Guard: Unique Markup", function () {
  const x = waitForAnyMarkupAdded();
  block(matchAddMarkup(x.id, ANY), function () {});
});

bthread("Guard: Unique Media", function () {
  const x = waitForAnyMediaAdded();
  block(matchAddMedia(x.id, ANY), function () {});
});

bthread("Guard: Unique Member", function () {
  const x = waitForAnyMemberAdded();
  block(matchAddMember(x.id, ANY), function () {});
});

bthread("Guard: Unique Merge", function () {
  const x = waitForAnyMergeAdded();
  block(matchAddMerge(x.id, ANY), function () {});
});

bthread("Guard: Unique Mergeupstream", function () {
  const x = waitForAnyMergeupstreamAdded();
  block(matchAddMergeupstream(x.id, ANY), function () {});
});

bthread("Guard: Unique Migrate", function () {
  const x = waitForAnyMigrateAdded();
  block(matchAddMigrate(x.id, ANY), function () {});
});

bthread("Guard: Unique Milestone", function () {
  const x = waitForAnyMilestoneAdded();
  block(matchAddMilestone(x.id, ANY), function () {});
});

bthread("Guard: Unique Mirrorsync", function () {
  const x = waitForAnyMirrorsyncAdded();
  block(matchAddMirrorsync(x.id, ANY), function () {});
});

bthread("Guard: Unique New", function () {
  const x = waitForAnyNewAdded();
  block(matchAddNew(x.id, ANY), function () {});
});

bthread("Guard: Unique Newpinallowed", function () {
  const x = waitForAnyNewpinallowedAdded();
  block(matchAddNewpinallowed(x.id, ANY), function () {});
});

bthread("Guard: Unique Nodeinfo", function () {
  const x = waitForAnyNodeinfoAdded();
  block(matchAddNodeinfo(x.id, ANY), function () {});
});

bthread("Guard: Unique Note", function () {
  const x = waitForAnyNoteAdded();
  block(matchAddNote(x.id, ANY), function () {});
});

bthread("Guard: Unique Notification", function () {
  const x = waitForAnyNotificationAdded();
  block(matchAddNotification(x.id, ANY), function () {});
});

bthread("Guard: Unique Oauth2", function () {
  const x = waitForAnyOauth2Added();
  block(matchAddOauth2(x.id, ANY), function () {});
});

bthread("Guard: Unique Org", function () {
  const x = waitForAnyOrgAdded();
  block(matchAddOrg(x.id, ANY), function () {});
});

bthread("Guard: Unique Package", function () {
  const x = waitForAnyPackageAdded();
  block(matchAddPackage(x.id, ANY), function () {});
});

bthread("Guard: Unique Page", function () {
  const x = waitForAnyPageAdded();
  block(matchAddPage(x.id, ANY), function () {});
});

bthread("Guard: Unique Permission", function () {
  const x = waitForAnyPermissionAdded();
  block(matchAddPermission(x.id, ANY), function () {});
});

bthread("Guard: Unique Pin", function () {
  const x = waitForAnyPinAdded();
  block(matchAddPin(x.id, ANY), function () {});
});

bthread("Guard: Unique Pinned", function () {
  const x = waitForAnyPinnedAdded();
  block(matchAddPinned(x.id, ANY), function () {});
});

bthread("Guard: Unique Priority", function () {
  const x = waitForAnyPriorityAdded();
  block(matchAddPriority(x.id, ANY), function () {});
});

bthread("Guard: Unique Publicmember", function () {
  const x = waitForAnyPublicmemberAdded();
  block(matchAddPublicmember(x.id, ANY), function () {});
});

bthread("Guard: Unique Pull", function () {
  const x = waitForAnyPullAdded();
  block(matchAddPull(x.id, ANY), function () {});
});

bthread("Guard: Unique Pushmirror", function () {
  const x = waitForAnyPushmirrorAdded();
  block(matchAddPushmirror(x.id, ANY), function () {});
});

bthread("Guard: Unique Pushmirrorssync", function () {
  const x = waitForAnyPushmirrorssyncAdded();
  block(matchAddPushmirrorssync(x.id, ANY), function () {});
});

bthread("Guard: Unique Raw", function () {
  const x = waitForAnyRawAdded();
  block(matchAddRaw(x.id, ANY), function () {});
});

bthread("Guard: Unique Reaction", function () {
  const x = waitForAnyReactionAdded();
  block(matchAddReaction(x.id, ANY), function () {});
});

bthread("Guard: Unique Ref", function () {
  const x = waitForAnyRefAdded();
  block(matchAddRef(x.id, ANY), function () {});
});

bthread("Guard: Unique Registrationtoken", function () {
  const x = waitForAnyRegistrationtokenAdded();
  block(matchAddRegistrationtoken(x.id, ANY), function () {});
});

bthread("Guard: Unique Reject", function () {
  const x = waitForAnyRejectAdded();
  block(matchAddReject(x.id, ANY), function () {});
});

bthread("Guard: Unique Releas", function () {
  const x = waitForAnyReleasAdded();
  block(matchAddReleas(x.id, ANY), function () {});
});

bthread("Guard: Unique Rename", function () {
  const x = waitForAnyRenameAdded();
  block(matchAddRename(x.id, ANY), function () {});
});

bthread("Guard: Unique Repo", function () {
  const x = waitForAnyRepoAdded();
  block(matchAddRepo(x.id, ANY), function () {});
});

bthread("Guard: Unique Repository", function () {
  const x = waitForAnyRepositoryAdded();
  block(matchAddRepository(x.id, ANY), function () {});
});

bthread("Guard: Unique Requestedreviewer", function () {
  const x = waitForAnyRequestedreviewerAdded();
  block(matchAddRequestedreviewer(x.id, ANY), function () {});
});

bthread("Guard: Unique Review", function () {
  const x = waitForAnyReviewAdded();
  block(matchAddReview(x.id, ANY), function () {});
});

bthread("Guard: Unique Reviewer", function () {
  const x = waitForAnyReviewerAdded();
  block(matchAddReviewer(x.id, ANY), function () {});
});

bthread("Guard: Unique Revision", function () {
  const x = waitForAnyRevisionAdded();
  block(matchAddRevision(x.id, ANY), function () {});
});

bthread("Guard: Unique Runner", function () {
  const x = waitForAnyRunnerAdded();
  block(matchAddRunner(x.id, ANY), function () {});
});

bthread("Guard: Unique Search", function () {
  const x = waitForAnySearchAdded();
  block(matchAddSearch(x.id, ANY), function () {});
});

bthread("Guard: Unique Secret", function () {
  const x = waitForAnySecretAdded();
  block(matchAddSecret(x.id, ANY), function () {});
});

bthread("Guard: Unique Setting", function () {
  const x = waitForAnySettingAdded();
  block(matchAddSetting(x.id, ANY), function () {});
});

bthread("Guard: Unique Signingkeygpg", function () {
  const x = waitForAnySigningkeygpgAdded();
  block(matchAddSigningkeygpg(x.id, ANY), function () {});
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

bthread("Guard: Unique Stopwatch", function () {
  const x = waitForAnyStopwatchAdded();
  block(matchAddStopwatch(x.id, ANY), function () {});
});

bthread("Guard: Unique Stopwatche", function () {
  const x = waitForAnyStopwatcheAdded();
  block(matchAddStopwatche(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscriber", function () {
  const x = waitForAnySubscriberAdded();
  block(matchAddSubscriber(x.id, ANY), function () {});
});

bthread("Guard: Unique Subscription", function () {
  const x = waitForAnySubscriptionAdded();
  block(matchAddSubscription(x.id, ANY), function () {});
});

bthread("Guard: Unique Tag", function () {
  const x = waitForAnyTagAdded();
  block(matchAddTag(x.id, ANY), function () {});
});

bthread("Guard: Unique Tagprotection", function () {
  const x = waitForAnyTagprotectionAdded();
  block(matchAddTagprotection(x.id, ANY), function () {});
});

bthread("Guard: Unique Task", function () {
  const x = waitForAnyTaskAdded();
  block(matchAddTask(x.id, ANY), function () {});
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

bthread("Guard: Unique Time", function () {
  const x = waitForAnyTimeAdded();
  block(matchAddTime(x.id, ANY), function () {});
});

bthread("Guard: Unique Timeline", function () {
  const x = waitForAnyTimelineAdded();
  block(matchAddTimeline(x.id, ANY), function () {});
});

bthread("Guard: Unique Token", function () {
  const x = waitForAnyTokenAdded();
  block(matchAddToken(x.id, ANY), function () {});
});

bthread("Guard: Unique Topic", function () {
  const x = waitForAnyTopicAdded();
  block(matchAddTopic(x.id, ANY), function () {});
});

bthread("Guard: Unique Transfer", function () {
  const x = waitForAnyTransferAdded();
  block(matchAddTransfer(x.id, ANY), function () {});
});

bthread("Guard: Unique Tree", function () {
  const x = waitForAnyTreeAdded();
  block(matchAddTree(x.id, ANY), function () {});
});

bthread("Guard: Unique Ui", function () {
  const x = waitForAnyUiAdded();
  block(matchAddUi(x.id, ANY), function () {});
});

bthread("Guard: Unique Unadopted", function () {
  const x = waitForAnyUnadoptedAdded();
  block(matchAddUnadopted(x.id, ANY), function () {});
});

bthread("Guard: Unique Undismissal", function () {
  const x = waitForAnyUndismissalAdded();
  block(matchAddUndismissal(x.id, ANY), function () {});
});

bthread("Guard: Unique Update", function () {
  const x = waitForAnyUpdateAdded();
  block(matchAddUpdate(x.id, ANY), function () {});
});

bthread("Guard: Unique User", function () {
  const x = waitForAnyUserAdded();
  block(matchAddUser(x.id, ANY), function () {});
});

bthread("Guard: Unique Userid", function () {
  const x = waitForAnyUseridAdded();
  block(matchAddUserid(x.id, ANY), function () {});
});

bthread("Guard: Unique Validate", function () {
  const x = waitForAnyValidateAdded();
  block(matchAddValidate(x.id, ANY), function () {});
});

bthread("Guard: Unique Variable", function () {
  const x = waitForAnyVariableAdded();
  block(matchAddVariable(x.id, ANY), function () {});
});

bthread("Guard: Unique Version", function () {
  const x = waitForAnyVersionAdded();
  block(matchAddVersion(x.id, ANY), function () {});
});

bthread("Guard: Unique Wiki", function () {
  const x = waitForAnyWikiAdded();
  block(matchAddWiki(x.id, ANY), function () {});
});

// ===== NEGATIVE/EDGE STATUS GUARDS =====
